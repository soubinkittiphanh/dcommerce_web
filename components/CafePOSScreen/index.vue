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

    <!-- Notes Dialog Component -->
    <NotesDialog
      :show="showNotesDialog"
      :notes="orderNotes"
      :existing-notes="currentTicket?.notes"
      title="Add Notes to Order"
      label="Order Notes"
      placeholder="Enter any special instructions or notes for this order..."
      hint="These notes will be saved with the ticket"
      :max-length="500"
      :show-quick-notes="true"
      :quick-notes="quickNotes"
      :loading="savingNotes"
      @close="closeNotesDialog"
      @save="handleSaveNotes"
      @show-message="showMessage"
    />

    <!-- Payment Dialog -->
    <PaymentDialog
      :show="showPaymentDialog"
      :table-number="tableId"
      :ticket-id="existingTicket?.id || null"
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
            <v-icon class="mr-2" color="white">mdi-storefront</v-icon>
            Product Menu
            <v-spacer></v-spacer>
            <!-- Table Info Display -->
            <v-chip
              color="accent"
              class="mr-2"
              v-if="tableId && tableId !== 'walk-in'"
            >
              <v-icon class="mr-1" small>mdi-table-furniture</v-icon>
              Table {{ displayTableId }}
            </v-chip>
            <v-chip v-else-if="isWalkIn" color="orange" class="mr-2">
              <v-icon class="mr-1" small>mdi-walk</v-icon>
              Walk-in
            </v-chip>
            <v-chip color="white" class="mr-2">
              <v-icon class="mr-1" small>mdi-package-variant</v-icon>
              {{ filteredProducts.length }} items
            </v-chip>
            <v-btn color="white" text @click="fetchProducts" :loading="loading">
              <v-icon class="mr-2">mdi-refresh</v-icon>
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
                  outlined
                  dense
                  clearable
                  hide-details
                />
              </v-col>
              <v-col cols="3">
                <v-autocomplete
                  v-model="categoryFilter"
                  :items="categoryOptions"
                  item-text="categ_name"
                  item-value="categ_id"
                  label="Filter by Category"
                  outlined
                  dense
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
                  :disabled="
                    (!product.isActive || product.stock_count <= 0) &&
                    product.validateStockOnSale
                  "
                  :class="{
                    'product-disabled':
                      (!product.isActive || product.stock_count <= 0) &&
                      product.validateStockOnSale,
                    'promotion-eligible': isProductInPromotion(product),
                  }"
                >
                  <!-- Promotion indicator -->
                  <v-icon
                    v-if="isProductInPromotion(product)"
                    color="success"
                    class="promotion-badge"
                    small
                  >
                    mdi-tag
                  </v-icon>

                  <v-card-title
                    class="justify-center text-subtitle-1 pa-1"
                    style="line-height: 1.2"
                  >
                    {{ product.pro_name }} {{ product.validateStockOnSale }}
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

      <!-- Right Panel - Cart (REORGANIZED) -->
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
          <!-- Compact Cart Header -->
          <v-card-title class="secondary white--text py-2">
            <v-icon left color="white" small>mdi-shopping</v-icon>
            <span class="text-subtitle-1">Order</span>
            <v-spacer></v-spacer>
            <v-chip color="white" text-color="secondary" x-small class="mr-1">
              {{ getTotalItems() }} items
            </v-chip>
            <v-chip
              v-if="currentTicket"
              :color="getTicketStatusColor(currentTicket.status)"
              text-color="white"
              x-small
            >
              {{ currentTicket.status.toUpperCase() }}
            </v-chip>
          </v-card-title>

          <!-- Compact Customer & Table Info (Collapsible) -->
          <v-expansion-panels flat tile accordion class="mb-0">
            <v-expansion-panel>
              <v-expansion-panel-header class="py-1 px-3">
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-account</v-icon>
                  <span class="caption">
                    {{
                      selectedCustomer
                        ? selectedCustomer.name
                        : 'Walk-in Customer'
                    }}
                  </span>
                  <v-spacer></v-spacer>
                  <v-icon
                    small
                    color="primary"
                    v-if="orderNotes || currentTicket?.notes"
                  >
                    mdi-note-text
                  </v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-2">
                <!-- Customer Info (Condensed) -->
                <div class="mb-2">
                  <div class="d-flex justify-space-between align-center mb-1">
                    <span class="caption font-weight-bold">Customer:</span>
                    <v-btn
                      @click="showCustomerDialog = true"
                      color="primary"
                      x-small
                      outlined
                    >
                      {{ selectedCustomer ? 'Change' : 'Select' }}
                    </v-btn>
                  </div>

                  <div v-if="selectedCustomer" class="caption">
                    {{ selectedCustomer.company || 'No company' }}
                    <v-chip
                      :color="getGradeColor(selectedCustomer.grade)"
                      text-color="white"
                      x-small
                      class="ml-1"
                    >
                      Grade {{ selectedCustomer.grade }}
                    </v-chip>
                  </div>
                  <div v-else class="caption grey--text">
                    No customer selected
                  </div>
                </div>

                <!-- Notes (Condensed) -->
                <div v-if="orderNotes || currentTicket?.notes" class="mb-2">
                  <div class="d-flex align-center justify-space-between">
                    <span class="caption font-weight-bold">Notes:</span>
                    <v-btn icon x-small @click="openNotesDialog">
                      <v-icon x-small>mdi-pencil</v-icon>
                    </v-btn>
                  </div>
                  <div
                    class="caption"
                    style="max-height: 30px; overflow: hidden"
                  >
                    {{ orderNotes || currentTicket?.notes }}
                  </div>
                </div>

                <!-- Ticket Info (Condensed) -->
                <div v-if="currentTicket" class="caption grey--text">
                  Ticket #{{ currentTicket.id }} -
                  {{ formatDateTime(currentTicket.createdAt) }}
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- MAIN CART ITEMS SECTION - Now gets most of the space -->
          <div
            class="flex-grow-1 px-3 py-2"
            style="overflow-y: auto; min-height: 200px"
          >
            <div v-if="cart.length === 0" class="text-center py-8">
              <v-icon size="48" color="grey lighten-2" class="mb-2"
                >mdi-shopping-outline</v-icon
              >
              <p class="grey--text caption">No items in cart</p>
              <p class="grey--text caption">Add items from the menu</p>
            </div>

            <!-- Cart Items (More Compact) -->
            <div v-else>
              <v-card
                v-for="item in cart"
                :key="item.id"
                class="mb-2 pa-2"
                outlined
                elevation="0"
                :class="{ 'ticket-line-item': item.isFromTicketLine }"
              >
                <!-- Product Name & Controls in one row -->
                <div class="d-flex justify-space-between align-center mb-1">
                  <div class="flex-grow-1 mr-2">
                    <div
                      class="text-subtitle-2 font-weight-medium line-clamp-1"
                    >
                      {{ getProductName(item.pro_id) }}
                    </div>
                    <div class="caption grey--text">
                      {{ item.categ_name }} •
                      {{ formatPrice(item.pro_price) }}/each
                    </div>
                    <!-- Show indicators for ticket line items -->
                    <div
                      v-if="item.isFromTicketLine"
                      class="caption info--text"
                    >
                      <v-icon x-small color="info">mdi-history</v-icon>
                      Saved item
                    </div>
                  </div>
                  <v-btn
                    @click="removeFromCart(item.id)"
                    icon
                    x-small
                    color="error"
                  >
                    <v-icon x-small>mdi-delete</v-icon>
                  </v-btn>
                </div>

                <!-- Quantity Controls & Total -->
                <div class="d-flex justify-space-between align-center">
                  <div class="d-flex align-center">
                    <v-btn
                      @click="updateQuantity(item.id, -1)"
                      icon
                      x-small
                      color="grey"
                    >
                      <v-icon x-small>mdi-minus</v-icon>
                    </v-btn>
                    <span class="mx-2 font-weight-bold">{{
                      item.quantity
                    }}</span>
                    <v-btn
                      @click="updateQuantity(item.id, 1)"
                      icon
                      x-small
                      color="grey"
                      :disabled="(item.quantity >= item.stock_count) && item.validateStockOnSale"
                    >
                      <v-icon x-small>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                  <div class="font-weight-bold primary--text">
                    {{ formatPrice(item.pro_price * item.quantity) }}
                  </div>
                </div>

                <!-- Warnings (Compact) -->
                <div
                  v-if="item.quantity >= item.stock_count && item.validateStockOnSale"
                  class="caption error--text mt-1"
                >
                  Max stock reached
                </div>
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

          <!-- Compact Cart Summary -->
          <div class="pa-3">
            <v-card v-if="cart.length > 0" class="pa-2" outlined elevation="0">
              <!-- CORRECTED: Show proper breakdown for tax-inclusive products -->

              <!-- For tax-inclusive products, show the original price -->
              <div class="d-flex justify-space-between caption mb-1">
                <span>Total (with tax):</span>
                <span>{{ formatPrice(getTotalPrice()) }}</span>
              </div>

              <!-- Show base amount (price without tax) -->
              <div
                class="d-flex justify-space-between caption mb-1 text--secondary"
              >
                <span>Base amount:</span>
                <span>{{ formatPrice(getBaseAmount) }}</span>
              </div>

              <!-- Promotions (applied to base amount) -->
              <div v-if="appliedPromotions.length > 0">
                <div
                  v-for="(applied, index) in appliedPromotions"
                  :key="index"
                  class="d-flex justify-space-between caption success--text"
                >
                  <span>{{ applied.promotion.name }}:</span>
                  <span>-{{ formatPrice(applied.discount.amount) }}</span>
                </div>
              </div>

              <!-- <div class="d-flex justify-space-between caption mb-1">
                <span>Base after promotions:</span>
                <span>{{ formatPrice(getBaseAfterPromotions) }}</span>
              </div> -->

              <!-- Tax breakdown showing actual tax amounts -->
              <div v-if="getTaxBreakdown().length > 0">
                <div
                  v-for="taxItem in getTaxBreakdown()"
                  :key="taxItem.code"
                  class="d-flex justify-space-between caption mb-1"
                >
                  <span
                    >{{ taxItem.name }} ({{ (taxItem.rate * 100).toFixed(2) }}%
                    {{ taxItem.type }}):</span
                  >
                  <span>{{ formatPrice(taxItem.taxAmount) }}</span>
                </div>
              </div>

              <!-- Total tax amount -->
              <!-- <div class="d-flex justify-space-between caption mb-2">
                <span>Total Tax:</span>
                <span>{{ formatPrice(calculatedTax) }}</span>
              </div> -->

              <v-divider class="mb-2"></v-divider>

              <div
                class="d-flex justify-space-between text-subtitle-1 font-weight-bold"
              >
                <span>Final Total:</span>
                <span class="primary--text">{{
                  formatPrice(getFinalTotal)
                }}</span>
              </div>
            </v-card>

            <!-- Action buttons remain the same -->
            <div v-if="cart.length > 0" class="mt-2">
              <v-row dense no-gutters class="mb-1">
                <v-col cols="6" class="pr-1">
                  <v-btn
                    @click="openNotesDialog"
                    color="orange"
                    block
                    small
                    outlined
                  >
                    <v-icon small class="mr-1">mdi-note-plus</v-icon>
                    Notes
                  </v-btn>
                </v-col>
                <v-col cols="6" class="pl-1">
                  <v-btn
                    @click="saveTicket"
                    color="info"
                    block
                    small
                    :loading="savingTicket"
                  >
                    <v-icon small class="mr-1">mdi-content-save</v-icon>
                    Save
                  </v-btn>
                </v-col>
              </v-row>
              <v-row dense no-gutters class="mb-1">
                <v-col cols="6" class="pr-1">
                  <v-btn
                    @click="processPayment"
                    color="primary"
                    block
                    :disabled="!currentTicket"
                  >
                    <v-icon small class="mr-1">mdi-credit-card</v-icon>
                    Payment
                  </v-btn>
                </v-col>
                <v-col cols="6" class="pl-1">
                  <v-btn
                    @click="printCustomerReceipt"
                    color="green"
                    block
                    :disabled="!currentTicket"
                  >
                    <v-icon small class="mr-1">mdi-printer</v-icon>
                    Print
                  </v-btn>
                </v-col>
              </v-row>
              <v-btn @click="clearCart" color="grey" block small>
                <v-icon small class="mr-1">mdi-cart-remove</v-icon>
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
      top
      right
    >
      <div class="d-flex align-center">
        <v-icon class="mr-2">{{ snackbar.icon }}</v-icon>
        {{ snackbar.message }}
      </div>
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar.show = false">
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
import NotesDialog from '~/components/tickets/NotesDialog.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    NotesDialog,
    PrintTicketDialog,
    PaymentDialog,
    CustomerDialog,
  },
  name: 'MenuPOSScreen',
  props: {
    tableId: {
      type: [String, Number],
      required: false,
      default: null,
    },
    existingTicket: {
      type: Object,
      default: null,
    },
    dialogMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      taxes: [], // Add taxes array to store tax configurations
      defaultTax: null, // Store default tax configuration
      promotions: [],
      appliedPromotions: [],
      loadingPromotions: false,

      // Notes related data
      showNotesDialog: false,
      orderNotes: '',
      savingNotes: false,
      quickNotes: [
        'No ice',
        'Extra spicy',
        'Less sugar',
        'Allergic to nuts',
        'Take away',
        'Urgent order',
        'VIP customer',
        'No MSG',
      ],

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
      categoryOptions: [],

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
    ...mapGetters(['findAllTerminal', 'findSelectedTerminal','currentSelectedLocation', 'findAllLocation']),
    getFinalTotal() {
      const baseAfterPromotions = this.getBaseAfterPromotions
      const tax = this.calculatedTax
      return baseAfterPromotions + tax
    },

    getBaseAmount() {
      if (!this.cart.length || !this.taxes.length) {
        return this.getTotalPrice()
      }

      let totalBaseAmount = 0

      this.cart.forEach((item) => {
        const product = this.products.find((p) => p.id === item.id)
        const tax = this.getProductTax(product)
        const itemTotal = item.pro_price * item.quantity

        if (tax && tax.isActive && tax.taxType === 'INC') {
          // For tax inclusive: base = total / (1 + tax_rate)
          const baseAmount = itemTotal / (1 + parseFloat(tax.rate))
          totalBaseAmount += baseAmount
        } else {
          // For tax exclusive or no tax: base = total
          totalBaseAmount += itemTotal
        }
      })

      return totalBaseAmount
    },
    getBaseAfterPromotions() {
      const baseAmount = this.getBaseAmount
      const promotionDiscount = this.getTotalPromotionDiscount()
      return Math.max(0, baseAmount - promotionDiscount)
    },

    calculatedTax() {
      if (!this.cart.length || !this.taxes.length) return 0

      const baseAfterPromotions = this.getBaseAfterPromotions
      let totalTax = 0

      // Group items by their tax configuration
      const taxGroups = new Map()

      this.cart.forEach((item) => {
        const product = this.products.find((p) => p.id === item.id)
        const tax = this.getProductTax(product)

        if (tax && tax.isActive) {
          const taxKey = tax.id
          const itemTotal = item.pro_price * item.quantity

          let itemBaseAmount
          if (tax.taxType === 'INC') {
            // For tax inclusive: extract base amount
            itemBaseAmount = itemTotal / (1 + parseFloat(tax.rate))
          } else {
            // For tax exclusive: item total is the base amount
            itemBaseAmount = itemTotal
          }

          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              tax: tax,
              baseAmount: 0,
              items: [],
            })
          }

          const group = taxGroups.get(taxKey)
          group.baseAmount += itemBaseAmount
          group.items.push(item)
        }
      })

      // Calculate tax for each group based on base amounts
      taxGroups.forEach((group) => {
        const { tax, baseAmount } = group

        // Apply proportional discount to this tax group's base amount
        const totalBaseAmount = this.getBaseAmount
        const promotionDiscount = this.getTotalPromotionDiscount()
        const discountRatio = promotionDiscount / totalBaseAmount
        const adjustedBaseAmount = baseAmount * (1 - discountRatio)

        // Calculate tax on the adjusted base amount
        const taxAmount = adjustedBaseAmount * parseFloat(tax.rate)
        totalTax += taxAmount
      })

      return totalTax
    },

    isWalkIn() {
      return !this.tableId || this.tableId === 'walk-in'
    },

    displayTableId() {
      return this.isWalkIn ? 'Walk-in' : this.tableId
    },

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

  async mounted() {
    await this.fetchProducts()
    await this.loadCategory()
    await this.fetchCustomers()
    await this.fetchPromotions()
    await this.fetchTaxes() // Add tax fetching

    // Load existing or provided ticket after all data is loaded
    if (this.existingTicket) {
      console.info(
        `LOAD PROVIDEDTICKETD ${JSON.stringify(this.existingTicket)}`
      )
      await this.loadProvidedTicket()
    } else {
      await this.loadExistingTicket()
    }
  },

  watch: {
    cart: {
      handler() {
        // Apply promotions whenever cart changes
        this.applyPromotions()

        // Auto-save logic
        if (!this.dialogMode && this.currentTicket && this.cart.length > 0) {
          clearTimeout(this.autoSaveTimeout)
          this.autoSaveTimeout = setTimeout(() => {
            this.saveTicket(true)
          }, 2000)
        }
      },
      deep: true,
    },
  },

  methods: {
    async fetchTaxes() {
      try {
        const response = await this.$axios.get('/api/tax/active')
        console.log('Taxes response:', response.data)

        const taxData = response.data.data || response.data

        this.taxes = taxData.filter((tax) => {
          // Additional client-side filtering if needed
          const now = new Date()
          const effectiveFrom = new Date(tax.effectiveFrom)
          const effectiveTo = tax.effectiveTo ? new Date(tax.effectiveTo) : null

          return (
            tax.isActive &&
            effectiveFrom <= now &&
            (!effectiveTo || effectiveTo >= now)
          )
        })

        // Find default tax
        this.defaultTax =
          this.taxes.find((tax) => tax.isDefault) || this.taxes[0] || null

        console.log(
          `Loaded ${this.taxes.length} active taxes, default:`,
          this.defaultTax?.name
        )
      } catch (error) {
        console.error('Error fetching taxes:', error)
        this.showMessage(
          'Failed to load tax configurations',
          'error',
          'mdi-alert'
        )
        this.taxes = []
        this.defaultTax = null
      }
    },

    // NEW: Get tax configuration for a product
    getProductTax(product) {
      if (!product || !this.taxes.length) {
        return this.defaultTax
      }

      // If product has a specific tax ID, use that
      if (product.taxId) {
        const productTax = this.taxes.find((tax) => tax.id === product.taxId)
        if (productTax) {
          return productTax
        }
      }

      // Fall back to default tax
      return this.defaultTax
    },

    // NEW: Calculate tax amount based on tax configuration
    calculateTaxAmount(subtotal, tax) {
      if (!tax || !tax.isActive) {
        return 0
      }

      const taxRate = parseFloat(tax.rate)

      if (tax.taxType === 'INC') {
        // Tax inclusive - extract tax from the total
        // If price includes tax: tax = (subtotal * rate) / (1 + rate)
        return (subtotal * taxRate) / (1 + taxRate)
      } else {
        // Tax exclusive - add tax to the subtotal
        // If tax is added to price: tax = subtotal * rate
        return subtotal * taxRate
      }
    },

    // NEW: Get tax breakdown for display
    getTaxBreakdown() {
      if (!this.cart.length || !this.taxes.length) return []

      const breakdown = []
      const taxGroups = new Map()
      const totalBaseAmount = this.getBaseAmount
      const promotionDiscount = this.getTotalPromotionDiscount()
      const discountRatio = promotionDiscount / totalBaseAmount

      this.cart.forEach((item) => {
        const product = this.products.find((p) => p.id === item.id)
        const tax = this.getProductTax(product)

        if (tax && tax.isActive) {
          const taxKey = tax.id
          const itemTotal = item.pro_price * item.quantity

          let itemBaseAmount
          if (tax.taxType === 'INC') {
            // For tax inclusive: extract base amount
            itemBaseAmount = itemTotal / (1 + parseFloat(tax.rate))
          } else {
            // For tax exclusive: item total is the base amount
            itemBaseAmount = itemTotal
          }

          if (!taxGroups.has(taxKey)) {
            taxGroups.set(taxKey, {
              tax: tax,
              baseAmount: 0,
              items: [],
            })
          }

          const group = taxGroups.get(taxKey)
          group.baseAmount += itemBaseAmount
          group.items.push(item)
        }
      })

      taxGroups.forEach((group) => {
        const { tax, baseAmount } = group

        // Apply proportional discount
        const adjustedBaseAmount = baseAmount * (1 - discountRatio)
        const taxAmount = adjustedBaseAmount * parseFloat(tax.rate)

        breakdown.push({
          name: tax.name,
          code: tax.code,
          rate: tax.rate,
          type: tax.taxType,
          baseAmount: adjustedBaseAmount,
          taxAmount: taxAmount,
          itemCount: group.items.length,
        })
      })

      return breakdown
    },
    async loadCategory() {
      this.isloading = true
      this.categoryOptions = []
      await this.$axios
        .get('/api/category/find')
        .then((res) => {
          for (const iterator of res.data) {
            this.categoryOptions.push(iterator)
          }
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er)
        })
      this.isloading = false
    },
    // Promotion Methods
    isProductInPromotion(product) {
      return this.promotions.some((promotion) => {
        if (!promotion.is_active) return false
        const conditions = promotion.conditions
        if (!conditions) return false

        // Check if product is in applicable categories or products
        const inCategories = conditions.applicable_categories?.includes(
          product.pro_category
        )
        const inProducts = conditions.applicable_products?.includes(product.id)
        const noRestrictions =
          !conditions.applicable_categories?.length &&
          !conditions.applicable_products?.length

        return inCategories || inProducts || noRestrictions
      })
    },

    getTotalAfterPromotions() {
      const subtotal = this.getTotalPrice()
      const totalDiscount = this.appliedPromotions.reduce(
        (sum, applied) => sum + applied.discount.amount,
        0
      )
      return Math.max(0, subtotal - totalDiscount)
    },

    getTotalPromotionDiscount() {
      return this.appliedPromotions.reduce(
        (sum, applied) => sum + applied.discount.amount,
        0
      )
    },

    calculateApplicablePromotions() {
      const applicablePromotions = []
      const now = new Date()

      for (const promotion of this.promotions) {
        // Check if promotion is active and within date range
        if (!promotion.is_active) continue
        if (new Date(promotion.start_date) > now) continue
        if (new Date(promotion.end_date) < now) continue
        if (promotion.max_uses && promotion.current_uses >= promotion.max_uses)
          continue

        // Check if promotion applies to current cart
        if (this.isPromotionApplicable(promotion)) {
          applicablePromotions.push(promotion)
        }
      }

      // Sort by priority (higher first)
      return applicablePromotions.sort(
        (a, b) => (b.priority || 1) - (a.priority || 1)
      )
    },

    isPromotionApplicable(promotion) {
      const conditions = promotion.conditions
      if (!conditions) return false

      // Check if cart has applicable products/categories
      const applicableItems = this.cart.filter((item) => {
        // Check categories
        if (
          conditions.applicable_categories &&
          conditions.applicable_categories.length > 0
        ) {
          const product = this.products.find((p) => p.id === item.id)
          if (
            product &&
            conditions.applicable_categories.includes(product.pro_category)
          ) {
            return true
          }
        }

        // Check specific products
        if (
          conditions.applicable_products &&
          conditions.applicable_products.length > 0
        ) {
          if (conditions.applicable_products.includes(item.id)) {
            return true
          }
        }

        // If no specific restrictions, apply to all
        if (
          (!conditions.applicable_categories ||
            conditions.applicable_categories.length === 0) &&
          (!conditions.applicable_products ||
            conditions.applicable_products.length === 0)
        ) {
          return true
        }

        return false
      })

      if (applicableItems.length === 0) return false

      // Check type-specific conditions
      switch (promotion.type) {
        case 'buy_x_get_y':
          const totalQuantity = applicableItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          )
          return totalQuantity >= (conditions.buy_quantity || 0)

        case 'percentage':
        case 'fixed_amount':
          if (conditions.minimum_order) {
            const applicableTotal = applicableItems.reduce(
              (sum, item) => sum + item.pro_price * item.quantity,
              0
            )
            return applicableTotal >= conditions.minimum_order
          }
          return true

        default:
          return true
      }
    },

    applyPromotions() {
      const applicablePromotions = this.calculateApplicablePromotions()
      this.appliedPromotions = []

      for (const promotion of applicablePromotions) {
        const discount = this.calculatePromotionDiscount(promotion)
        if (discount.amount > 0) {
          this.appliedPromotions.push({
            promotion: promotion,
            discount: discount,
          })
        }
      }
    },

    calculatePromotionDiscount(promotion) {
      const applicableItems = this.getApplicableItems(promotion)

      switch (promotion.type) {
        case 'buy_x_get_y':
          return this.calculateBuyXGetYDiscount(promotion, applicableItems)
        case 'percentage':
          return this.calculatePercentageDiscount(promotion, applicableItems)
        case 'fixed_amount':
          return this.calculateFixedAmountDiscount(promotion, applicableItems)
        default:
          return { amount: 0, description: '', items: [] }
      }
    },

    getApplicableItems(promotion) {
      const conditions = promotion.conditions
      return this.cart.filter((item) => {
        if (
          conditions.applicable_categories &&
          conditions.applicable_categories.length > 0
        ) {
          const product = this.products.find((p) => p.id === item.id)
          if (
            product &&
            conditions.applicable_categories.includes(product.pro_category)
          ) {
            return true
          }
        }

        if (
          conditions.applicable_products &&
          conditions.applicable_products.length > 0
        ) {
          if (conditions.applicable_products.includes(item.id)) {
            return true
          }
        }

        if (
          (!conditions.applicable_categories ||
            conditions.applicable_categories.length === 0) &&
          (!conditions.applicable_products ||
            conditions.applicable_products.length === 0)
        ) {
          return true
        }

        return false
      })
    },

    calculateBuyXGetYDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions
      const buyQty = conditions.buy_quantity || 0
      const getQty = conditions.get_quantity || 0

      const totalQuantity = applicableItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
      const eligibleSets = Math.floor(totalQuantity / buyQty)

      if (eligibleSets === 0) return { amount: 0, description: '', items: [] }

      let freeItems = eligibleSets * getQty
      if (conditions.max_free_items && freeItems > conditions.max_free_items) {
        freeItems = conditions.max_free_items
      }

      // Calculate discount based on cheapest applicable items
      const itemPrices = applicableItems
        .flatMap((item) => Array(item.quantity).fill(item.pro_price))
        .sort((a, b) => a - b)

      const discountAmount = itemPrices
        .slice(0, freeItems)
        .reduce((sum, price) => sum + price, 0)

      return {
        amount: discountAmount,
        description: `Buy ${buyQty} Get ${getQty} Free`,
        items: applicableItems,
        freeItems: freeItems,
      }
    },

    calculatePercentageDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions
      const percentage = (conditions.discount_percentage || 0) / 100

      const subtotal = applicableItems.reduce(
        (sum, item) => sum + item.pro_price * item.quantity,
        0
      )

      let discountAmount = subtotal * percentage

      if (
        conditions.max_discount_amount &&
        discountAmount > conditions.max_discount_amount
      ) {
        discountAmount = conditions.max_discount_amount
      }

      return {
        amount: discountAmount,
        description: `${conditions.discount_percentage}% off`,
        items: applicableItems,
      }
    },

    calculateFixedAmountDiscount(promotion, applicableItems) {
      const conditions = promotion.conditions
      const discountAmount = conditions.discount_amount || 0

      return {
        amount: discountAmount,
        description: `${discountAmount} ₭ off`, // FIX: Use your currency symbol instead of $
        items: applicableItems,
      }
    },

    async fetchPromotions() {
      this.loadingPromotions = true
      try {
        const response = await this.$axios.get('/api/promotions')

        // Filter for active promotions client-side
        const allPromotions = response.data.data || response.data || []
        this.promotions = allPromotions.filter((promotion) => {
          const now = new Date()
          return (
            promotion.is_active &&
            new Date(promotion.start_date) <= now &&
            new Date(promotion.end_date) >= now
          )
        })

        console.log('Active promotions loaded:', this.promotions.length)
      } catch (error) {
        console.error('Error fetching promotions:', error)
        this.promotions = []
      } finally {
        this.loadingPromotions = false
      }
    },

    // Notes Dialog Methods
    openNotesDialog() {
      this.orderNotes = this.currentTicket?.notes || this.orderNotes || ''
      this.showNotesDialog = true
    },

    closeNotesDialog() {
      this.showNotesDialog = false
    },

    async handleSaveNotes(notes) {
      this.orderNotes = notes

      if (this.currentTicket) {
        this.savingNotes = true
        try {
          await this.saveTicket(false)
          this.closeNotesDialog()
        } catch (error) {
          console.error('Error saving notes:', error)
        } finally {
          this.savingNotes = false
        }
      } else {
        this.closeNotesDialog()
        this.showMessage(
          'Notes will be saved with the ticket',
          'info',
          'mdi-information'
        )
      }
    },

    async loadProvidedTicket() {
      try {
        console.log('Loading provided ticket:', this.existingTicket)
        this.currentTicket = this.existingTicket
        this.orderNotes = this.currentTicket.notes || ''

        if (this.currentTicket.clientId) {
          await this.loadTicketCustomer(this.currentTicket.clientId)
        }

        await this.loadTicketLines()
        this.showMessage('Ticket loaded successfully', 'success', 'mdi-check')
      } catch (error) {
        console.error('Error loading provided ticket:', error)
        this.showMessage('Failed to load ticket', 'error', 'mdi-alert')
      }
    },

    getProductName(productId) {
      try {
        // FIX: Search in products array instead of filteredProducts
        const product = this.products.find(
          (el) => el.id === parseInt(productId)
        )
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
        // Include tax in the query - note the locationId should be dynamic
        const locationId = this.currentSelectedLocation['id'] || 1 // Use your actual location logic
        const response = await this.$axios.get(
          `product_f/${locationId}?include=tax`
        )
        console.log('Products response:', response.data)

        // Handle both old and new response formats
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
          validateStockOnSale: product.validateStockOnSale === 1,
          saleCurrencyId: product.saleCurrencyId,
          costCurrencyId: product.costCurrencyId,
          taxId: product.taxId, // Include tax ID
          tax: product.tax, // Include tax object if populated
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
      if (this.isWalkIn) {
        console.log('Walk-in mode - no existing ticket to load')
        return
      }

      try {
        const response = await this.$axios.get(
          `api/ticket/table/${this.tableId}/pending`
        )
        if (response.data && response.data.length > 0) {
          this.currentTicket = response.data[0]

          if (this.currentTicket.clientId) {
            await this.loadTicketCustomer(this.currentTicket.clientId)
          }

          await this.loadTicketLines()
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

        // Apply promotions after loading cart
        this.applyPromotions()
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

      this.savingTicket = true

      try {
        const subtotal = this.getTotalPrice()
        const promotionDiscount = this.getTotalPromotionDiscount()
        const afterPromotions = subtotal - promotionDiscount

        // Use dynamic tax calculation
        const tax = this.calculatedTax
        const total = afterPromotions

        // Get tax breakdown for detailed storage
        const taxBreakdown = this.getTaxBreakdown()

        // Create a map of products affected by promotions
        const promotionItemsMap = new Map()

        // Calculate which items are affected by each promotion
        this.appliedPromotions.forEach((applied) => {
          const promotion = applied.promotion
          const discount = applied.discount

          // Get items affected by this promotion
          const affectedItems = this.getApplicableItems(promotion)

          // For "Buy X Get Y" promotions, mark free items
          if (promotion.type === 'buy_x_get_y' && discount.freeItems > 0) {
            const sortedItems = affectedItems
              .flatMap((item) =>
                Array(item.quantity).fill({
                  id: item.id,
                  price: item.pro_price,
                })
              )
              .sort((a, b) => a.price - b.price)

            for (
              let i = 0;
              i < discount.freeItems && i < sortedItems.length;
              i++
            ) {
              const itemId = sortedItems[i].id
              const currentData = promotionItemsMap.get(itemId) || {
                promotionId: promotion.id,
                is_promotion_item: false,
                discount_amount: 0,
                promotion_note: '',
              }

              currentData.is_promotion_item = true
              currentData.discount_amount += sortedItems[i].price
              currentData.promotion_note = discount.description

              promotionItemsMap.set(itemId, currentData)
            }
          } else {
            // For percentage and fixed amount discounts
            affectedItems.forEach((item) => {
              const itemSubtotal = item.pro_price * item.quantity
              const itemDiscountRatio =
                itemSubtotal / this.getApplicableItemsTotal(promotion)
              const itemDiscount = discount.amount * itemDiscountRatio

              const currentData = promotionItemsMap.get(item.id) || {
                promotionId: promotion.id,
                is_promotion_item: false,
                discount_amount: 0,
                promotion_note: '',
              }

              if (itemDiscount > 0) {
                currentData.is_promotion_item = true
                currentData.discount_amount += itemDiscount
                currentData.promotion_note = discount.description
              }

              promotionItemsMap.set(item.id, currentData)
            })
          }
        })

        const ticketData = {
          tableId:
            this.tableId && this.tableId !== 'walk-in'
              ? parseInt(this.tableId)
              : null,
          clientId: this.selectedCustomer ? this.selectedCustomer.id : null,
          status: 'pending',
          subtotal: parseFloat(subtotal.toFixed(2) - tax.toFixed(2)),
          promotionDiscount: parseFloat(promotionDiscount.toFixed(2)),
          tax: parseFloat(tax.toFixed(2)),
          taxType: this.defaultTax.taxType || null,
          total: parseFloat(total.toFixed(2)),
          paymentStatus: 'pending',
          notes:
            this.orderNotes ||
            (this.selectedCustomer
              ? `Customer: ${this.selectedCustomer.name}`
              : 'Walk-in customer'),
          // Store tax breakdown for reporting
          taxBreakdown: taxBreakdown,
          appliedPromotions: this.appliedPromotions.map((applied) => ({
            promotionId: applied.promotion.id,
            promotionName: applied.promotion.name,
            discountAmount: applied.discount.amount,
            description: applied.discount.description,
          })),
          ticketLines: this.cart.map((item) => {
            const promotionData = promotionItemsMap.get(item.id)
            const product = this.products.find((p) => p.id === item.id)
            const productTax = this.getProductTax(product)

            return {
              id: item.ticketLineId || undefined,
              productId: item.id,
              quantity: item.quantity,
              unitPrice: parseFloat(item.pro_price),
              totalPrice: parseFloat(
                (item.pro_price * item.quantity).toFixed(2)
              ),
              status: 'ordered',
              // Add tax information to line items
              taxId: productTax?.id || null,
              taxRate: productTax?.rate || 0,
              taxType: productTax?.taxType || 'INC',
              // Add promotion fields
              promotionId: promotionData?.promotionId || null,
              is_promotion_item: promotionData?.is_promotion_item || false,
              original_price: promotionData?.is_promotion_item
                ? item.pro_price
                : null,
              discount_amount: promotionData?.discount_amount || 0,
              promotion_note: promotionData?.promotion_note || null,
            }
          }),
        }

        let response
        if (this.currentTicket) {
          response = await this.$axios.put(
            `api/ticket/${this.currentTicket.id}`,
            ticketData
          )
          this.currentTicket = response.data.data || response.data
          this.$emit('ticket-updated', this.currentTicket)

          if (!this.dialogMode) {
            this.$emit('reload-data')
          }
          console.info(`SILENT ${silent}`)
          if (!silent) {
            this.showMessage(
              'Ticket updated successfully!',
              'success',
              'mdi-content-save'
            )
            if (this.$toast) {
              this.$toast.success('Ticket saved successfully')
            }
          }
        } else {
          response = await this.$axios.post('api/ticket/', ticketData)
          this.currentTicket = response.data.data || response.data
          this.$emit('ticket-updated', this.currentTicket)

          if (!this.dialogMode) {
            this.$emit('reload-data')
          }

          if (!silent) {
            this.showMessage(
              'Ticket saved successfully!',
              'success',
              'mdi-content-save'
            )
          }
        }
      } catch (error) {
        console.error('Error saving ticket:', error)
        if (!silent) {
          this.showMessage(
            'Failed to save ticket. Please try again.',
            'error',
            'mdi-alert'
          )
        }
      } finally {
        this.savingTicket = false
      }
    },

    getApplicableItemsTotal(promotion) {
      const applicableItems = this.getApplicableItems(promotion)
      return applicableItems.reduce(
        (sum, item) => sum + item.pro_price * item.quantity,
        0
      )
    },
    // Cart management methods
    addToCart(product) {
      console.log('Adding product to cart:', product)

      if (!product.isActive) {
        this.showMessage('Product is not active', 'warning', 'mdi-alert')
        return
      }

      if (product.stock_count <= 0 && product.validateStockOnSale) {
        this.showMessage('Product is out of stock', 'warning', 'mdi-alert')
        return
      }

      const existingItem = this.cart.find((item) => item.id === product.id)

      if (existingItem) {
        console.info(`STOCK VALIDATION REQUEIRE ${product.validateStockOnSale}`)
        if ((existingItem.quantity < product.stock_count) || !product.validateStockOnSale) {
          existingItem.quantity += 1
          if (!existingItem.isFromTicketLine) {
            existingItem.pro_price = parseFloat(product.pro_price)
          }
        } else {
          this.showMessage('Maximum stock reached BBB', 'warning', 'mdi-alert')
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
          validateStockOnSale: product.validateStockOnSale,
          quantity: 1,
          isFromTicketLine: false,
        })
      }
      // Note: applyPromotions() is called via watcher
    },

    updateQuantity(itemId, change) {
      const item = this.cart.find((i) => i.id === itemId)
      if (!item) return

      const newQuantity = item.quantity + change

      if (newQuantity <= 0) {
        this.removeFromCart(itemId)
        return
      }

      if ((newQuantity > item.stock_count) && item.validateStockOnSale) {
        this.showMessage('Maximum stock reached AAA', 'warning', 'mdi-alert')
        return
      }

      item.quantity = newQuantity
      // Note: applyPromotions() is called via watcher
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
      // Note: applyPromotions() is called via watcher
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
      this.appliedPromotions = [] // FIX: Clear applied promotions too

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
      const total = this.getFinalTotal || 0

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
        if (this.currentTicket?.id) {
          await this.$axios.patch(
            `/api/ticket/${this.currentTicket.id}/payment-status`,
            {
              paymentStatus: 'paid',
              paymentId: selectedPaymentMethod.id,
            }
          )
        }

        this.closePaymentDialog()
        this.showPrintConfirmDialog = true

        if (!this.isWalkIn) {
          await this.updateTableStatus('cleaning')
        }

        this.$emit('ticket-updated', this.currentTicket)
        this.$emit('reload-data')
      } catch (error) {
        console.error('Payment processing error:', error)
        this.showMessage('Failed to process payment', 'error', 'mdi-alert')
      } finally {
        this.actionLoading = false
      }
    },

    handlePrintConfirmation(shouldPrint) {
      this.showPrintConfirmDialog = false

      if (shouldPrint) {
        this.printCustomerReceipt()
      } else {
        this.showMessage(
          `Payment of ${this.formatPrice(
            this.paymentAmount
          )} processed successfully`,
          'success',
          'mdi-check-circle'
        )
      }

      this.paymentAmount = 0
    },

    closePaymentDialog() {
      this.showPaymentDialog = false
      this.paymentAmount = 0
    },

    async updateTableStatus(status) {
      if (this.isWalkIn) {
        console.log('Walk-in ticket - skipping table status update')
        return
      }

      try {
        const payload = {
          status,
          timeOccupied: status === 'occupied' ? new Date() : null,
          currentOrderId: status === 'occupied' ? this.currentTicket?.id : null,
        }

        await this.$axios.patch(`api/tables/${this.tableId}/status`, payload)
        await this.loadExistingTicket()
        this.$emit('reload-data')
        this.$emit('reload-table')
      } catch (error) {
        console.error('Error updating table status:', error)
      }
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
        this.loading = true

        const ticketResponse = await this.$axios.get(
          `api/ticket/${this.currentTicket.id}`
        )
        const latestTicket = ticketResponse.data.data || ticketResponse.data

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

        const ticketLinesResponse = await this.$axios.get(
          `api/ticketLine/ticket/${latestTicket.id}`
        )
        const ticketLines =
          ticketLinesResponse.data.data || ticketLinesResponse.data

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

        const ticketForPrint = {
          ...latestTicket,
          client: customerData,
          table: this.isWalkIn
            ? { id: null, number: null, name: 'Walk-in' }
            : {
                id: this.tableId,
                number: this.tableId,
                name: `Table ${this.tableId}`,
              },
          ticketLines: mappedTicketLines,
        }

        // FIX: Use promotion-adjusted calculations for printing
        if (!ticketForPrint.subtotal || !ticketForPrint.promotionDiscount) {
          const subtotal = mappedTicketLines.reduce((total, item) => {
            return total + parseFloat(item.pro_price) * item.quantity
          }, 0)

          // If promotion data is missing, recalculate
          if (!ticketForPrint.promotionDiscount) {
            const promotionDiscount = this.getTotalPromotionDiscount()
            ticketForPrint.promotionDiscount = promotionDiscount
            ticketForPrint.subtotal = subtotal
            // ticketForPrint.tax = (subtotal - promotionDiscount) * 0.085
            // ticketForPrint.total = (subtotal - promotionDiscount) * 1.085
          }
        }

        console.log('Updated ticket for print:', ticketForPrint)
        this.currentTicket = latestTicket
        this.selectedTicket = ticketForPrint
        this.showCustomerPrint = true
      } catch (error) {
        console.error('Error fetching latest ticket data for printing:', error)
        this.showMessage(
          'Failed to load latest ticket data. Using current data for printing.',
          'warning',
          'mdi-alert'
        )

        const ticketForPrint = {
          ...this.currentTicket,
          client: this.selectedCustomer || null,
          table: this.isWalkIn
            ? { id: null, number: null, name: 'Walk-in' }
            : {
                id: this.tableId,
                number: this.tableId,
                name: `Table ${this.tableId}`,
              },
          ticketLines: this.cart,
          subtotal: this.getTotalPrice(),
          promotionDiscount: this.getTotalPromotionDiscount(),
          tax: this.getTotalAfterPromotions() * 0.085,
          total: this.getFinalTotal,
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
    formatTaxDisplay(tax) {
      if (!tax) return 'No Tax'
      const percentage = (parseFloat(tax.rate) * 100).toFixed(2)
      return `${tax.name} (${percentage}% ${tax.taxType})`
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
.promotion-eligible {
  border: 2px solid #4caf50 !important;
}

.promotion-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #4caf50;
  border-radius: 50%;
  padding: 4px;
}

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

/* New utility classes */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Make expansion panels more compact */
.v-expansion-panel-header {
  min-height: 36px !important;
  padding: 8px 12px !important;
}

.v-expansion-panel-content__wrap {
  padding: 8px 12px 12px !important;
}
</style>