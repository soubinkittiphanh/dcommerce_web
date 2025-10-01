<template>
  <v-container fluid class="pa-0 fill-height">
    <!-- Print Dialog -->
    <PrintTicketDialog
      :show="showCustomerPrint"
      :ticket="selectedTicket"
      :restaurant-info="restaurantConfig"
      @close="closePrintDialog"
      @printed="onPrintSuccess"
    />

    <!-- Payment Dialog -->
    <!-- Replace your current PaymentDialog section with this -->
    <PaymentDialog
      :show="showPaymentDialog"
      :table-number="tableId"
      :amount="paymentAmount"
      :payment-methods="paymentList"
      :payment-loading="paymentLoading"
      :action-loading="actionLoading"
      :enable-q-r="true"
      :show-q-r-details="false"
      @close="closePaymentDialog"
      @confirm-payment="handlePaymentConfirm"
      @reload-payment-methods="loadPaymentMethods"
      @show-message="showMessage"
    />

    <!-- Print Confirmation Dialog -->
    <v-dialog v-model="showPrintConfirmDialog" max-width="400" persistent>
      <v-card>
        <v-card-title class="headline d-flex align-center">
          <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
          Payment Successful!
        </v-card-title>

        <v-card-text class="text-center py-4">
          <v-icon size="64" color="success" class="mb-3"
            >mdi-credit-card-check</v-icon
          >
          <div class="text-h6 mb-2">
            Payment has been processed successfully
          </div>
          <div class="text-subtitle-1 mb-4">
            Amount: <strong>{{ formatPrice(paymentAmount) }}</strong>
          </div>
          <div class="text-body-1">
            Would you like to print the receipt now?
          </div>
        </v-card-text>

        <v-card-actions class="justify-center pb-4">
          <v-btn
            color="grey"
            text
            @click="handlePrintConfirmation(false)"
            class="mr-2"
          >
            <v-icon left>mdi-close</v-icon>
            No, Skip
          </v-btn>
          <v-btn
            color="primary"
            @click="handlePrintConfirmation(true)"
            class="ml-2"
          >
            <v-icon left>mdi-printer</v-icon>
            Yes, Print Receipt
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Customer Dialog -->
    <CustomerDialog
      :show="showCustomerDialog"
      :customers="customers"
      :selected-customer="selectedCustomer"
      :loading-customers="loadingCustomers"
      @close="closeCustomerDialog"
      @customer-selected="handleCustomerSelected"
      @walk-in-selected="handleWalkInSelected"
      @save-customer="handleSaveCustomer"
      @show-message="showMessage"
    />

    <!-- Main Content -->
    <v-row no-gutters style="height: 100vh">
      <!-- Left Panel - Menu -->
      <v-col cols="8" class="d-flex flex-column" style="overflow: hidden">
        <!-- Header with Search and Filters -->
        <v-card class="ma-0 rounded-0">
          <v-card-title class="primary white--text">
            <v-icon left color="white">mdi-storefront</v-icon>
            Product Menu
            <v-spacer></v-spacer>
            <!-- Table Info Display -->
            <v-chip
              color="accent"
              text-color="white"
              class="mr-2"
              v-if="tableId"
            >
              <v-icon left small>mdi-table-furniture</v-icon>
              Table {{ tableId }}
            </v-chip>
            <v-chip color="white" text-color="primary" class="mr-2">
              <v-icon left small>mdi-package-variant</v-icon>
              {{ filteredProducts.length }} items
            </v-chip>
            <v-btn color="white" text @click="fetchProducts" :loading="loading">
              <v-icon left>mdi-refresh</v-icon>
              Refresh
            </v-btn>
          </v-card-title>

          <!-- Search and Filter Row -->
          <v-card-text class="pa-3">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="searchQuery"
                  prepend-inner-icon="mdi-magnify"
                  label="Search products..."
                  variant="outlined"
                  density="compact"
                  clearable
                  hide-details
                />
              </v-col>
              <v-col cols="3">
                <v-autocomplete
                  v-model="categoryFilter"
                  :items="categoryOptions"
                  item-text="title"
                  item-value="value"
                  label="Filter by Category"
                  variant="outlined"
                  density="compact"
                  clearable
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Loading State -->
        <v-card
          v-if="loading"
          class="flex-grow-1 ma-0 rounded-0 d-flex align-center justify-center"
        >
          <div class="text-center">
            <v-progress-circular
              size="64"
              color="primary"
              indeterminate
            ></v-progress-circular>
            <p class="mt-4 text-h6">Loading products...</p>
          </div>
        </v-card>

        <!-- Menu Items Grid -->
        <v-card
          v-else
          class="flex-grow-1 ma-0 rounded-0"
          style="overflow-y: auto"
        >
          <v-card-text class="pa-4">
            <v-row v-if="filteredProducts.length > 0">
              <v-col
                v-for="product in filteredProducts"
                :key="product.id"
                cols="4"
                class="pa-2"
              >
                <v-card
                  @click="addToCart(product)"
                  elevation="2"
                  hover
                  class="text-center pa-4 cursor-pointer product-card"
                  height="160"
                  :disabled="!product.isActive || product.stock_count <= 0"
                  :class="{
                    'product-disabled':
                      !product.isActive || product.stock_count <= 0,
                  }"
                >
                  <v-card-title
                    class="justify-center text-subtitle-1 pa-1"
                    style="line-height: 1.2"
                  >
                    {{ product.pro_name }}
                  </v-card-title>
                  <v-card-text class="pa-2">
                    <div class="text-h5 primary--text font-weight-bold mb-2">
                      {{ formatPrice(product.pro_price) }}
                    </div>
                    <div class="d-flex justify-space-between align-center">
                      <v-chip
                        :color="getCategoryColor(product.categ_name)"
                        text-color="white"
                        x-small
                      >
                        {{ product.categ_name }}
                      </v-chip>
                      <v-chip
                        :color="getStockColor(product.stock_count)"
                        text-color="white"
                        x-small
                      >
                        {{ product.stock_count }} left
                      </v-chip>
                    </div>
                    <div
                      v-if="product.pro_desc"
                      class="caption mt-2 grey--text"
                      style="height: 32px; overflow: hidden"
                    >
                      {{ product.pro_desc }}
                    </div>
                    <div
                      v-if="!product.isActive"
                      class="caption mt-1 error--text font-weight-bold"
                    >
                      INACTIVE
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- No Products State -->
            <div v-else class="text-center pa-8">
              <v-icon size="64" color="grey">mdi-package-variant-closed</v-icon>
              <p class="text-h6 mt-4 grey--text">No products found</p>
              <p class="grey--text">Try adjusting your search or filters</p>
              <v-btn color="primary" @click="fetchProducts" class="mt-2">
                <v-icon left>mdi-refresh</v-icon>
                Refresh Products
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Right Panel - Cart -->
      <v-col
        cols="4"
        class="d-flex flex-column"
        style="max-height: 100vh; overflow: hidden"
      >
        <v-card
          class="flex-grow-1 ma-0 rounded-0 d-flex flex-column"
          elevation="2"
          style="overflow: hidden"
        >
          <!-- Cart Header -->
          <v-card-title class="secondary white--text">
            <v-icon left color="white">mdi-shopping</v-icon>
            Current Order
            <v-spacer></v-spacer>
            <v-chip color="white" text-color="secondary" small>
              {{ getTotalItems() }} items
            </v-chip>
            <!-- Ticket Status -->
            <v-chip
              v-if="currentTicket"
              :color="getTicketStatusColor(currentTicket.status)"
              text-color="white"
              small
              class="ml-2"
            >
              {{ currentTicket.status.toUpperCase() }}
            </v-chip>
          </v-card-title>

          <!-- Customer Info Section -->
          <v-card-text class="pa-3 bg-grey-lighten-5">
            <div class="d-flex justify-space-between align-center mb-2">
              <div class="text-subtitle-2 font-weight-bold">
                <v-icon small class="mr-1">mdi-account</v-icon>
                Customer Information
              </div>
              <v-btn
                @click="showCustomerDialog = true"
                color="primary"
                small
                outlined
              >
                <v-icon left small>{{
                  selectedCustomer ? 'mdi-account-edit' : 'mdi-account-plus'
                }}</v-icon>
                {{ selectedCustomer ? 'Change' : 'Select' }}
              </v-btn>
            </div>

            <v-card v-if="selectedCustomer" outlined class="pa-2">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="font-weight-medium">
                    {{ selectedCustomer.name }}
                  </div>
                  <div class="caption grey--text">
                    {{ selectedCustomer.company || 'No company' }}
                  </div>
                  <div class="caption" v-if="selectedCustomer.telephone">
                    <v-icon x-small>mdi-phone</v-icon>
                    {{ selectedCustomer.telephone }}
                  </div>
                </div>
                <div class="text-right">
                  <v-chip
                    :color="getGradeColor(selectedCustomer.grade)"
                    text-color="white"
                    x-small
                  >
                    Grade {{ selectedCustomer.grade }}
                  </v-chip>
                  <div class="caption mt-1">
                    Credit: {{ selectedCustomer.credit }} days
                  </div>
                </div>
              </div>
            </v-card>

            <v-alert v-else type="info" dense outlined>
              No customer selected - Walk-in customer
            </v-alert>
          </v-card-text>

          <!-- Ticket Info -->
          <v-card-text v-if="currentTicket" class="pa-2 bg-grey-lighten-4">
            <div class="caption">
              <strong>Ticket #{{ currentTicket.id }}</strong>
              <span class="ml-2">{{
                formatDateTime(currentTicket.createdAt)
              }}</span>
            </div>
          </v-card-text>

          <!-- Scrollable Cart Items Section -->
          <div class="flex-grow-1" style="overflow-y: auto; padding: 16px">
            <div v-if="cart.length === 0" class="text-center mt-8">
              <v-icon size="64" color="grey lighten-2" class="mb-4">
                mdi-shopping-outline
              </v-icon>
              <p class="grey--text">No items in cart</p>
              <p class="grey--text caption">Add items from the menu</p>
            </div>

            <!-- Cart Items -->
            <div v-else>
              <v-card
                v-for="item in cart"
                :key="item.id"
                class="mb-2 pa-2"
                outlined
                :class="{ 'ticket-line-item': item.isFromTicketLine }"
              >
                <div class="d-flex justify-space-between align-center mb-2">
                  <div>
                    <div class="font-weight-medium">
                      {{ getProductName(item.pro_id) }}
                    </div>
                    <div class="caption grey--text">
                      ID: {{ item.pro_id }} | {{ item.categ_name }}
                    </div>
                    <!-- Show price indicator for ticket line items -->
                    <div
                      v-if="item.isFromTicketLine"
                      class="caption info--text"
                    >
                      <v-icon x-small color="info">mdi-history</v-icon>
                      Saved item ({{ formatPrice(item.pro_price) }} each)
                    </div>
                    <!-- Show current price comparison for ticket line items -->
                    <div
                      v-if="
                        item.isFromTicketLine &&
                        getCurrentProductPrice(item.pro_id) !== item.pro_price
                      "
                      class="caption warning--text"
                    >
                      <v-icon x-small color="warning">mdi-alert</v-icon>
                      Current price:
                      {{ formatPrice(getCurrentProductPrice(item.pro_id)) }}
                    </div>
                  </div>
                  <v-btn
                    @click="removeFromCart(item.id)"
                    icon
                    small
                    color="error"
                  >
                    <v-icon small>mdi-delete</v-icon>
                  </v-btn>
                </div>

                <div class="d-flex justify-space-between align-center">
                  <div class="d-flex align-center">
                    <v-btn
                      @click="updateQuantity(item.id, -1)"
                      icon
                      x-small
                      color="grey"
                    >
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <span class="mx-3 font-weight-bold">{{
                      item.quantity
                    }}</span>
                    <v-btn
                      @click="updateQuantity(item.id, 1)"
                      icon
                      x-small
                      color="grey"
                      :disabled="item.quantity >= item.stock_count"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                  <div class="font-weight-bold primary--text">
                    {{ formatPrice(item.pro_price * item.quantity) }}
                  </div>
                </div>

                <!-- Stock warning -->
                <div
                  v-if="item.quantity >= item.stock_count"
                  class="caption error--text mt-1"
                >
                  Max stock reached
                </div>

                <!-- Inactive product warning -->
                <div
                  v-if="item.isFromTicketLine && !item.isActive"
                  class="caption warning--text mt-1"
                >
                  <v-icon x-small color="warning">mdi-alert</v-icon>
                  Product is currently inactive
                </div>
              </v-card>
            </div>
          </div>

          <!-- Cart Summary and Actions -->
          <div class="pa-4">
            <v-card v-if="cart.length > 0" class="mb-3 pa-3 w-100" outlined>
              <div class="d-flex justify-space-between mb-1">
                <span>Subtotal:</span>
                <span class="font-weight-medium">{{
                  formatPrice(getTotalPrice())
                }}</span>
              </div>
              <div class="d-flex justify-space-between mb-1">
                <span>Tax (8.5%):</span>
                <span class="font-weight-medium">{{
                  formatPrice(getTotalPrice() * 0.085)
                }}</span>
              </div>
              <v-divider class="my-2"></v-divider>
              <div
                class="d-flex justify-space-between text-h6 font-weight-bold"
              >
                <span>Total:</span>
                <span class="primary--text">{{
                  formatPrice(getTotalPrice() * 1.085)
                }}</span>
              </div>
            </v-card>

            <!-- Action Buttons -->
            <div v-if="cart.length > 0">
              <!-- Save Ticket Button -->
              <v-btn
                @click="saveTicket"
                color="info"
                block
                class="mb-2"
                :loading="savingTicket"
              >
                <v-icon left>mdi-content-save</v-icon>
                {{ currentTicket ? 'Update Ticket' : 'Save Ticket' }}
              </v-btn>

              <!-- Payment and Print Buttons Row -->
              <v-row class="mb-2" no-gutters>
                <!-- Payment Button -->
                <v-col cols="6" class="pr-1">
                  <v-btn
                    @click="processPayment"
                    color="primary"
                    block
                    large
                    :disabled="!currentTicket"
                  >
                    <v-icon left>mdi-credit-card</v-icon>
                    Payment
                  </v-btn>
                </v-col>

                <!-- Print Button -->
                <v-col cols="6" class="pl-1">
                  <v-btn
                    @click="printCustomerReceipt"
                    color="green"
                    block
                    large
                    :disabled="!currentTicket"
                  >
                    <v-icon left>mdi-printer</v-icon>
                    Print Ticket
                  </v-btn>
                </v-col>
              </v-row>

              <!-- Clear Cart Button -->
              <v-btn @click="clearCart" color="grey" block large class="mb-2">
                <v-icon left>mdi-cart-remove</v-icon>
                Clear Cart
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Snackbar for Messages -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
      location="top right"
      variant="elevated"
    >
      <div class="d-flex align-center">
        <v-icon class="mr-2">{{ snackbar.icon }}</v-icon>
        {{ snackbar.message }}
      </div>
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import PrintTicketDialog from '@/components/CAFE/printdialog'
import PaymentDialog from '@/components/CAFE/paymentDialogFront'
import CustomerDialog from '@/components/CAFE/customerDialog'

export default {
  components: {
    PrintTicketDialog,
    PaymentDialog,
    CustomerDialog,
  },
  name: 'MenuPOSScreen',
  props: {
    tableId: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      // Restaurant configuration
      restaurantConfig: {
        name: 'Your Restaurant Name',
        address:
          '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567',
      },

      // Print related
      showCustomerPrint: false,
      selectedTicket: null,
      showPrintConfirmDialog: false,

      // Cart and products
      cart: [],
      products: [],
      currentTicket: null,
      loading: false,
      savingTicket: false,

      // Search and filters
      searchQuery: '',
      categoryFilter: '',
      categoryOptions: [
        { title: 'All Categories', value: '' },
        { title: 'Engine Oils', value: 49 },
        { title: 'Car Care', value: 50 },
      ],

      // Payment dialog
      showPaymentDialog: false,
      paymentAmount: 0,
      actionLoading: false,
      paymentLoading: false,
      paymentList: [],

      // Customer management
      customers: [],
      selectedCustomer: null,
      showCustomerDialog: false,
      loadingCustomers: false,

      // Snackbar
      snackbar: {
        show: false,
        message: '',
        color: 'success',
        icon: 'mdi-check-circle',
        timeout: 4000,
      },

      // Auto-save timeout
      autoSaveTimeout: null,
    }
  },

  computed: {
    filteredProducts() {
      let filtered = this.products

      // Search filter
      if (this.searchQuery) {
        const searchTerm = this.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (product) =>
            product.pro_name.toLowerCase().includes(searchTerm) ||
            product.pro_desc?.toLowerCase().includes(searchTerm) ||
            product.pro_id.toString().includes(searchTerm) ||
            product.barCode?.toLowerCase().includes(searchTerm)
        )
      }

      // Category filter
      if (this.categoryFilter) {
        filtered = filtered.filter(
          (product) => product.pro_category === this.categoryFilter
        )
      }

      // Sort by name
      return filtered.sort((a, b) => a.pro_name.localeCompare(b.pro_name))
    },
  },

  mounted() {
    this.fetchProducts()
    this.fetchCustomers()
    this.loadExistingTicket()
  },

  watch: {
    // Auto-save cart changes
    cart: {
      handler() {
        if (this.currentTicket && this.cart.length > 0) {
          clearTimeout(this.autoSaveTimeout)
          this.autoSaveTimeout = setTimeout(() => {
            this.saveTicket(true) // Silent save
          }, 2000)
        }
      },
      deep: true,
    },
  },

  methods: {
    getProductName(productId) {
      try {
        const product = this.filteredProducts.find(
          (el) => el.id === parseInt(productId)
        )

        console.info(`PRODUCT ${this.filteredProducts.length}`)
        console.info(`PRODUCT ${JSON.stringify(this.filteredProducts)}`)
        console.info(`PRODUCT ${JSON.stringify(product)}`)

        return product?.pro_name || `Product ${productId}`
      } catch (error) {
        console.error('Error getting product name:', error)
        return `Product ${productId}`
      }
    },
    // Core data fetching methods
    async fetchProducts() {
      this.loading = true
      try {
        const response = await this.$axios.get('product_f/1')
        console.log('Products response:', response.data)

        const productData = response.data.data || response.data

        this.products = productData.map((product) => ({
          id: product.id,
          pro_id: product.pro_id,
          pro_name: product.pro_name,
          pro_price: product.pro_price,
          duration_minutes: product.duration_minutes || 0,
          pro_desc: product.pro_desc || '',
          pro_status: product.pro_status,
          pro_image_path: product.img_path,
          retail_cost_percent: product.retail_cost_percent || 0,
          cost_price: product.cost_price,
          stock_count: product.card_count || 0,
          minStock: product.minStock || 0,
          locking_session_id: product.locking_session_id,
          barCode: product.barCode,
          vendorName: product.vendorName,
          isActive: product.pro_status === 1,
          _category: 'product',
          categ_name: product.categ_name,
          co_name: product.co_name,
          companyId: product.companyId,
          img_name: product.img_name,
          receiveUnitId: product.receiveUnitId,
          stockUnitId: product.stockUnitId,
          pro_category: product.pro_category,
          saleCurrencyId: product.saleCurrencyId,
          costCurrencyId: product.costCurrencyId,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        }))

        this.showMessage(
          `Loaded ${this.products.length} products successfully!`
        )
      } catch (error) {
        console.error('Error fetching products:', error)
        this.showMessage(
          'Failed to load products. Please try again.',
          'error',
          'mdi-alert'
        )
      } finally {
        this.loading = false
      }
    },

    async fetchCustomers() {
      this.loadingCustomers = true
      try {
        const response = await this.$axios.get('api/client/find')
        console.log('Customers response:', response.data)

        const customerData = response.data.data || response.data
        this.customers = customerData.map((customer) => ({
          id: customer.id,
          name: customer.name,
          company: customer.company,
          email: customer.email,
          address: customer.address,
          telephone: customer.telephone,
          credit: customer.credit,
          lateChargePercent: customer.lateChargePercent,
          grade: customer.grade,
          isActive: customer.isActive,
          createdAt: customer.createdAt,
          updatedAt: customer.updatedAt,
        }))

        console.log(`Loaded ${this.customers.length} customers`)
      } catch (error) {
        console.error('Error fetching customers:', error)
        this.showMessage('Failed to load customers', 'error', 'mdi-alert')
      } finally {
        this.loadingCustomers = false
      }
    },

    // Ticket management methods
    async loadExistingTicket() {
      try {
        const response = await this.$axios.get(
          `api/ticket/table/${this.tableId}/pending`
        )
        if (response.data && response.data.length > 0) {
          this.currentTicket = response.data[0]

          if (this.currentTicket.clientId) {
            await this.loadTicketCustomer(this.currentTicket.clientId)
          }

          this.loadTicketLines()
        }
      } catch (error) {
        console.log('No existing ticket found or error:', error)
      }
    },

    async loadTicketCustomer(clientId) {
      try {
        const response = await this.$axios.get(`api/client/find/${clientId}`)
        this.selectedCustomer = response.data.data || response.data
        console.log('Loaded ticket customer:', this.selectedCustomer.name)
      } catch (error) {
        console.error('Error loading ticket customer:', error)
      }
    },

    async loadTicketLines() {
      if (!this.currentTicket) return

      try {
        const response = await this.$axios.get(
          `api/ticketLine/ticket/${this.currentTicket.id}`
        )
        const ticketLines = response.data.data || response.data

        this.cart = ticketLines
          .map((line) => {
            const product = this.products.find((p) => p.id === line.productId)

            return {
              id: line.productId,
              pro_id: line.productId,
              pro_name:
                line.product?.name ||
                product?.pro_name ||
                `Product ${line.productId}`,
              categ_name: product?.categ_name || 'Unknown Category',
              stock_count: product?.stock_count || 0,
              isActive: product?.isActive || false,
              pro_price: line.unitPrice,
              quantity: line.quantity,
              ticketLineId: line.id,
              totalPrice: line.totalPrice || line.unitPrice * line.quantity,
              isFromTicketLine: true,
              originalTicketLinePrice: line.unitPrice,
            }
          })
          .filter((item) => item.pro_name)

        console.info(`Loaded ${this.cart.length} items from ticket lines`)
      } catch (error) {
        console.error('Error loading ticket lines:', error)
        this.showMessage(
          'Failed to load saved ticket items',
          'error',
          'mdi-alert'
        )
      }
    },

    async saveTicket(silent = false) {
      if (this.cart.length === 0) {
        if (!silent) this.showMessage('Cart is empty', 'warning', 'mdi-alert')
        return
      }

      if (!this.tableId) {
        console.error('Table ID is missing:', this.tableId)
        if (!silent)
          this.showMessage(
            'Table ID is missing. Please check the table selection.',
            'error',
            'mdi-alert'
          )
        return
      }

      this.savingTicket = true

      try {
        const subtotal = this.getTotalPrice()
        const tax = subtotal * 0.085
        const total = subtotal + tax

        const ticketData = {
          tableId: parseInt(this.tableId),
          clientId: this.selectedCustomer ? this.selectedCustomer.id : null,
          status: 'pending',
          subtotal: parseFloat(subtotal.toFixed(2)),
          tax: parseFloat(tax.toFixed(2)),
          total: parseFloat(total.toFixed(2)),
          paymentStatus: 'pending',
          customerNotes: this.selectedCustomer
            ? `Customer: ${this.selectedCustomer.name}`
            : 'Walk-in customer',
          ticketLines: this.cart.map((item) => ({
            id: item.ticketLineId || undefined,
            productId: item.id,
            quantity: item.quantity,
            unitPrice: parseFloat(item.pro_price),
            totalPrice: parseFloat((item.pro_price * item.quantity).toFixed(2)),
            status: 'ordered',
          })),
        }

        console.log('Saving ticket with data:', ticketData)

        let response
        if (this.currentTicket) {
          response = await this.$axios.put(
            `api/ticket/${this.currentTicket.id}`,
            ticketData
          )
          this.$emit('reload-data')
          if (!silent)
            this.showMessage(
              'Ticket updated successfully!',
              'success',
              'mdi-content-save'
            )
        } else {
          response = await this.$axios.post('api/ticket/', ticketData)
          this.currentTicket = response.data.data || response.data
          this.$emit('reload-data')
          if (!silent)
            this.showMessage(
              'Ticket saved successfully!',
              'success',
              'mdi-content-save'
            )
        }
      } catch (error) {
        console.error('Error saving ticket:', error)
        if (!silent)
          this.showMessage(
            'Failed to save ticket. Please try again.',
            'error',
            'mdi-alert'
          )
      } finally {
        this.savingTicket = false
      }
    },

    // Cart management methods
    addToCart(product) {
      console.log('Adding product to cart:', product)

      if (!product.isActive) {
        this.showMessage('Product is not active', 'warning', 'mdi-alert')
        return
      }

      if (product.stock_count <= 0) {
        this.showMessage('Product is out of stock', 'warning', 'mdi-alert')
        return
      }

      const existingItem = this.cart.find((item) => item.id === product.id)

      if (existingItem) {
        if (existingItem.quantity < product.stock_count) {
          existingItem.quantity += 1
          if (!existingItem.isFromTicketLine) {
            existingItem.pro_price = parseFloat(product.pro_price)
          }
        } else {
          this.showMessage('Maximum stock reached', 'warning', 'mdi-alert')
        }
      } else {
        this.cart.push({
          id: product.id,
          pro_id: product.id,
          pro_name: product.pro_name,
          pro_price: parseFloat(product.pro_price),
          categ_name: product.categ_name,
          stock_count: product.stock_count,
          isActive: product.isActive,
          quantity: 1,
          isFromTicketLine: false,
        })
      }
    },

    updateQuantity(itemId, change) {
      const item = this.cart.find((i) => i.id === itemId)
      if (!item) return

      const newQuantity = item.quantity + change

      if (newQuantity <= 0) {
        this.removeFromCart(itemId)
        return
      }

      if (newQuantity > item.stock_count) {
        this.showMessage('Maximum stock reached', 'warning', 'mdi-alert')
        return
      }

      item.quantity = newQuantity
    },

    removeFromCart(itemId) {
      const itemIndex = this.cart.findIndex((item) => item.id === itemId)
      if (itemIndex > -1) {
        const item = this.cart[itemIndex]
        this.cart.splice(itemIndex, 1)
        this.showMessage(
          `${item.pro_name} removed from cart`,
          'info',
          'mdi-information'
        )
      }
    },

    clearCart() {
      if (this.cart.length === 0) {
        this.showMessage('Cart is already empty', 'info', 'mdi-information')
        return
      }

      const itemCount = this.getTotalItems()
      const totalAmount = this.getTotalPrice()

      this.cart = []
      this.currentTicket = null
      this.selectedCustomer = null

      this.showMessage(
        `Cart cleared - ${itemCount} items (${this.formatPrice(
          totalAmount
        )}) removed`,
        'info',
        'mdi-cart-remove'
      )
    },

    // Payment methods
    async loadPaymentMethods() {
      this.paymentLoading = true
      this.paymentList = []

      try {
        const response = await this.$axios.get('/api/paymentMethod/find')
        this.paymentList = response.data.filter((payment) => payment.isActive)
        console.log('Payment methods loaded:', this.paymentList)
      } catch (error) {
        console.error('Error loading payment methods:', error)
        this.showMessage('Failed to load payment methods', 'error', 'mdi-alert')
      } finally {
        this.paymentLoading = false
      }
    },

    async processPayment() {
      const total = this.getTotalPrice() * 1.085 || 0

      if (total <= 0) {
        this.showMessage('No amount to process', 'warning', 'mdi-alert')
        return
      }

      this.paymentAmount = total
      await this.loadPaymentMethods()
      this.showPaymentDialog = true
    },

    async handlePaymentConfirm(selectedPaymentMethod) {
      this.actionLoading = true

      try {
        if (this.currentTicket.id) {
          await this.$axios.patch(
            `/api/ticket/${this.currentTicket.id}/payment-status`,
            {
              paymentStatus: 'paid',
              paymentId: selectedPaymentMethod.id,
            }
          )
        }

        // Close payment dialog first
        this.closePaymentDialog()

        // Show print confirmation dialog
        this.showPrintConfirmDialog = true

        await this.updateTableStatus('cleaning')
      } catch (error) {
        console.error('Payment processing error:', error)
        this.showMessage('Failed to process payment', 'error', 'mdi-alert')
      } finally {
        this.actionLoading = false
      }
    },

    // Print confirmation handler
    handlePrintConfirmation(shouldPrint) {
      this.showPrintConfirmDialog = false

      if (shouldPrint) {
        // Execute print ticket function
        this.printCustomerReceipt()
      } else {
        // Just show success message if user skipped printing
        this.showMessage(
          `Payment of ${this.formatPrice(
            this.paymentAmount
          )} processed successfully`,
          'success',
          'mdi-check-circle'
        )
      }

      // Reset payment amount
      this.paymentAmount = 0
    },

    closePaymentDialog() {
      this.showPaymentDialog = false
      this.paymentAmount = 0
    },

    async updateTableStatus(status) {
      const payload = {
        status,
        timeOccupied: status === 'occupied' ? new Date() : null,
        currentOrderId: status === 'occupied' ? this.currentTicket.id : null,
      }

      await this.$axios.patch(`api/tables/${this.tableId}/status`, payload)
      await this.loadExistingTicket()
      this.$emit('reload-data')
      this.$emit('reload-table')
    },

    // Customer management methods
    handleCustomerSelected(customer) {
      this.selectedCustomer = customer
      this.showMessage(
        `Customer ${customer.name} selected`,
        'success',
        'mdi-account-check'
      )
    },

    handleWalkInSelected() {
      this.selectedCustomer = null
      this.showMessage('Walk-in customer selected', 'info', 'mdi-walk')
    },

    async handleSaveCustomer(customerData) {
      try {
        console.log('Saving customer:', customerData)
        const response = await this.$axios.post(
          'api/client/create',
          customerData
        )

        const savedCustomer = response.data.data || response.data
        this.customers.unshift(savedCustomer)
        this.selectedCustomer = savedCustomer

        this.showMessage(
          `Customer ${savedCustomer.name} created successfully!`,
          'success',
          'mdi-account-plus'
        )
      } catch (error) {
        console.error('Error saving customer:', error)
        if (error.response?.status === 400) {
          this.showMessage(
            'Invalid customer data. Please check all fields.',
            'error',
            'mdi-alert'
          )
        } else {
          this.showMessage(
            'Failed to save customer. Please try again.',
            'error',
            'mdi-alert'
          )
        }
      }
    },

    closeCustomerDialog() {
      this.showCustomerDialog = false
    },

    // Print methods
    // Updated printCustomerReceipt method - using same data model as loadExistingTicket/loadTicketLines
    async printCustomerReceipt() {
      console.log('Print button clicked')

      if (!this.currentTicket) {
        this.showMessage(
          'Please save the ticket first before printing',
          'warning',
          'mdi-alert'
        )
        return
      }

      try {
        // Show loading state
        this.loading = true

        // Fetch the latest ticket data from the server using same pattern as loadExistingTicket
        console.log('Fetching latest ticket data before printing...')
        const ticketResponse = await this.$axios.get(
          `api/ticket/${this.currentTicket.id}`
        )
        const latestTicket = ticketResponse.data.data || ticketResponse.data

        // Fetch customer data if exists - same pattern as loadTicketCustomer
        let customerData = null
        if (latestTicket.clientId) {
          try {
            const customerResponse = await this.$axios.get(
              `api/client/find/${latestTicket.clientId}`
            )
            customerData = customerResponse.data.data || customerResponse.data
          } catch (error) {
            console.warn('Could not fetch customer data:', error)
            customerData = this.selectedCustomer
          }
        }

        // Fetch the latest ticket lines using EXACT same logic as loadTicketLines
        const ticketLinesResponse = await this.$axios.get(
          `api/ticketLine/ticket/${latestTicket.id}`
        )
        const ticketLines =
          ticketLinesResponse.data.data || ticketLinesResponse.data

        // Map ticket lines using EXACT same mapping as loadTicketLines
        const mappedTicketLines = ticketLines
          .map((line) => {
            const product = this.products.find((p) => p.id === line.productId)
            return {
              id: line.productId,
              pro_id: line.productId,
              pro_name:
                line.product?.name ||
                product?.pro_name ||
                `Product ${line.productId}`,
              categ_name: product?.categ_name || 'Unknown Category',
              stock_count: product?.stock_count || 0,
              isActive: product?.isActive || false,
              pro_price: line.unitPrice,
              quantity: line.quantity,
              ticketLineId: line.id,
              totalPrice: line.totalPrice || line.unitPrice * line.quantity,
              isFromTicketLine: true,
              originalTicketLinePrice: line.unitPrice,
            }
          })
          .filter((item) => item.pro_name)

        // Build the complete ticket object for printing with same structure
        const ticketForPrint = {
          ...latestTicket,
          client: customerData,
          table: {
            id: this.tableId,
            number: this.tableId,
            name: `Table ${this.tableId}`,
          },
          // Use the mapped ticket lines with same structure as cart
          ticketLines: mappedTicketLines,
        }

        // If totals are missing, calculate them
        if (!ticketForPrint.subtotal) {
          const subtotal = mappedTicketLines.reduce((total, item) => {
            return total + parseFloat(item.pro_price) * item.quantity
          }, 0)
          ticketForPrint.subtotal = subtotal
          ticketForPrint.tax = subtotal * 0.085
          ticketForPrint.total = subtotal + subtotal * 0.085
        }

        console.log(
          `Updated ticket for print: ${JSON.stringify(ticketForPrint)} }`
        )
        console.log('Ticket lines count:', mappedTicketLines.length)

        // Update the current ticket with latest data
        this.currentTicket = latestTicket

        // Set the ticket for printing
        this.selectedTicket = ticketForPrint
        this.showCustomerPrint = true
      } catch (error) {
        console.error('Error fetching latest ticket data for printing:', error)
        this.showMessage(
          'Failed to load latest ticket data. Using current data for printing.',
          'warning',
          'mdi-alert'
        )

        // Fallback to existing logic if API call fails
        const ticketForPrint = {
          ...this.currentTicket,
          client: this.selectedCustomer || null,
          table: {
            id: this.tableId,
            number: this.tableId,
            name: `Table ${this.tableId}`,
          },
          ticketLines: this.cart, // Use existing cart data as fallback
        }

        // Ensure totals exist for fallback
        if (!ticketForPrint.subtotal) {
          ticketForPrint.subtotal = this.getTotalPrice()
          ticketForPrint.tax = this.getTotalPrice() * 0.085
          ticketForPrint.total = this.getTotalPrice() * 1.085
        }

        this.selectedTicket = ticketForPrint
        this.showCustomerPrint = true
      } finally {
        this.loading = false
      }
    },

    closePrintDialog() {
      this.showCustomerPrint = false
      this.selectedTicket = null
    },

    onPrintSuccess(ticket) {
      console.log('Ticket printed successfully:', ticket.id)
      this.showMessage('Ticket printed successfully!', 'success', 'mdi-printer')
    },

    // Utility methods
    showMessage(message, color = 'success', icon = 'mdi-check-circle') {
      this.snackbar = {
        show: true,
        message,
        color,
        icon,
        timeout: 4000,
      }
    },

    getCurrentProductPrice(productId) {
      const product = this.products.find((p) => p.id === productId)
      return product ? parseFloat(product.pro_price) : 0
    },

    getTotalPrice() {
      return this.cart.reduce((total, item) => {
        return total + parseFloat(item.pro_price) * item.quantity
      }, 0)
    },

    getTotalItems() {
      return this.cart.reduce((total, item) => total + item.quantity, 0)
    },

    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount || 0))

      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber
    },

    formatDateTime(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleString()
    },

    getCategoryColor(categoryName) {
      if (categoryName && categoryName.includes('Engine')) return 'primary'
      if (categoryName && categoryName.includes('ຄາແຄຣ')) return 'purple'
      return 'info'
    },

    getStockColor(stockCount) {
      if (stockCount <= 0) return 'error'
      if (stockCount <= 5) return 'warning'
      return 'success'
    },

    getTicketStatusColor(status) {
      const colors = {
        pending: 'orange',
        preparing: 'blue',
        ready: 'green',
        served: 'purple',
        paid: 'success',
      }
      return colors[status] || 'grey'
    },

    getGradeColor(grade) {
      const colors = {
        A: 'success',
        B: 'info',
        C: 'warning',
        D: 'orange',
        E: 'deep-orange',
        F: 'error',
      }
      return colors[grade] || 'grey'
    },
  },

  beforeDestroy() {
    if (this.autoSaveTimeout) {
      clearTimeout(this.autoSaveTimeout)
    }
  },
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.w-100 {
  width: 100%;
}

.product-card:hover:not(.product-disabled) {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

.product-disabled {
  opacity: 0.6;
  cursor: not-allowed !important;
}

.product-disabled:hover {
  transform: none !important;
}

.ticket-line-item {
  background-color: rgba(33, 150, 243, 0.05);
  border-left: 3px solid #2196f3;
}
</style>