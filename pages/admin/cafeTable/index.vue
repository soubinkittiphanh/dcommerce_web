<template>
  <v-container fluid class="pa-0 fill-height">
    <v-row no-gutters class="fill-height">
      <!-- Left Panel - Table Layout -->
      <v-col cols="8" class="d-flex flex-column">
        <!-- Header -->
        <v-card class="ma-0 rounded-0" elevation="1">
          <v-card-title class="primary white--text">
            <v-icon left color="white">mdi-table-furniture</v-icon>
            Table Management
            <v-spacer></v-spacer>
            <v-chip color="success" text-color="white" class="mr-2">
              <v-icon left small>mdi-check-circle</v-icon>
              ໂຕະວ່າງ: {{ availableTables }}
            </v-chip>
            <v-chip color="warning" text-color="white" class="mr-2">
              <v-icon left small>mdi-clock</v-icon>
              ມີແຂກ: {{ occupiedTables }}
            </v-chip>
            <v-chip color="error" text-color="white" class="mr-2">
              <v-icon left small>mdi-silverware-clean</v-icon>
              ອະນາໄມ: {{ cleaningTables }}
            </v-chip>
            <v-chip color="info" text-color="white">
              <v-icon left small>mdi-bookmark</v-icon>
              ຈອງແລ້ວ: {{ reservedTables }}
            </v-chip>
          </v-card-title>
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
            <p class="mt-4 text-h6">Loading tables...</p>
          </div>
        </v-card>

        <!-- Table Layout Grid -->
        <v-card
          v-else
          class="flex-grow-1 ma-0 rounded-0"
          style="overflow-y: auto"
        >
          <v-card-text class="pa-4">
            <v-row v-if="tables.length > 0">
              <v-col
                v-for="table in tables"
                :key="table.id"
                cols="3"
                class="pa-2"
              >
                <v-card
                  @click="selectTable(table)"
                  :color="getTableColor(table.status)"
                  :class="[
                    'text-center pa-4 cursor-pointer table-card',
                    selectedTable && selectedTable.id === table.id
                      ? 'elevation-8'
                      : 'elevation-2',
                  ]"
                  height="150"
                  hover
                >
                  <v-card-title class="justify-center white--text text-h4 pa-2">
                    {{ table.number }}
                  </v-card-title>
                  <v-card-text class="pa-2 white--text">
                    <div class="text-h6 font-weight-bold mb-1">
                      {{ getStatusText(table.status) }}
                    </div>
                    <div v-if="table.capacity" class="caption">
                      <v-icon small color="white">mdi-account-multiple</v-icon>
                      {{ table.capacity }} seats
                    </div>
                    <div v-if="table.orderTotal" class="caption mt-1">
                      <v-icon small color="white">mdi-currency-usd</v-icon>
                      ${{ table.orderTotal.toFixed(2) }}
                    </div>
                    <div v-if="table.timeOccupied" class="caption">
                      <v-icon small color="white">mdi-clock-outline</v-icon>
                      {{ formatTime(table.timeOccupied) }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <div v-else class="text-center pa-8">
              <v-icon size="64" color="grey">mdi-table-furniture</v-icon>
              <p class="text-h6 mt-4 grey--text">No tables found</p>
              <v-btn color="primary" @click="fetchTables">
                <v-icon left>mdi-refresh</v-icon>
                Refresh Tables
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Right Panel - Table Details & Actions -->
      <v-col cols="4" class="d-flex flex-column">
        <v-card
          class="flex-grow-1 ma-0 rounded-0 d-flex flex-column"
          elevation="2"
        >
          <!-- Table Info Header -->
          <v-card-title v-if="selectedTable" class="secondary white--text">
            <v-icon left color="white">mdi-table-chair</v-icon>
            Table {{ selectedTable.number }}
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="white" v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="changeTableStatus('available')">
                  <v-list-item-icon>
                    <v-icon color="success">mdi-check-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Mark Available</v-list-item-title>
                </v-list-item>
                <v-list-item @click="changeTableStatus('cleaning')">
                  <v-list-item-icon>
                    <v-icon color="error">mdi-silverware-clean</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Mark for Cleaning</v-list-item-title>
                </v-list-item>
                <v-list-item @click="changeTableStatus('reserved')">
                  <v-list-item-icon>
                    <v-icon color="info">mdi-bookmark</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Mark Reserved</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>

          <v-card-title v-else class="secondary white--text justify-center">
            <v-icon color="white" class="mr-2">mdi-hand-pointing-right</v-icon>
            Select a Table
          </v-card-title>

          <!-- Table Details -->
          <v-card-text v-if="selectedTable" class="flex-grow-1 pa-4">
            <!-- Table Info -->
            <v-card outlined class="mb-3">
              <v-card-subtitle>Table Information</v-card-subtitle>
              <v-card-text>
                <v-row dense>
                  <v-col cols="6">
                    <div class="text-caption grey--text">Status</div>
                    <v-chip
                      :color="getTableColor(selectedTable.status)"
                      text-color="white"
                      small
                    >
                      {{ getStatusText(selectedTable.status) }}
                    </v-chip>
                  </v-col>
                  <v-col cols="6">
                    <div class="text-caption grey--text">Capacity</div>
                    <div class="font-weight-medium">
                      {{ selectedTable.capacity }} seats
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="text-caption grey--text">Table Number</div>
                    <div class="font-weight-medium">
                      #{{ selectedTable.number }}
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="text-caption grey--text">Current Total</div>
                    <div
                      class="font-weight-bold text-h6"
                      :class="getTotalAmountColor()"
                    >
                      {{ formatPrice(selectedTable.currentTotal || 0) }}
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="text-caption grey--text">Created</div>
                    <div class="font-weight-medium">
                      {{ formatDate(selectedTable.createdAt) }}
                    </div>
                  </v-col>
                  <v-col v-if="selectedTable.currentOrderId" cols="6">
                    <div class="text-caption grey--text">Items in Order</div>
                    <div class="font-weight-medium">
                      {{ selectedTable.itemCount || 0 }} items
                    </div>
                  </v-col>
                  <v-col v-if="selectedTable.customerName" cols="12">
                    <div class="text-caption grey--text">Customer</div>
                    <div class="font-weight-medium">
                      {{ selectedTable.customerName }}
                    </div>
                  </v-col>
                  <v-col v-if="selectedTable.currentOrderId" cols="12">
                    <div class="text-caption grey--text">Current Order ID</div>
                    <div
                      class="font-weight-medium d-flex justify-space-between align-center"
                    >
                      <span>#{{ selectedTable.currentOrderId }}</span>
                      <v-chip
                        :color="getOrderStatusColor(selectedTable.orderStatus)"
                        text-color="white"
                        x-small
                        v-if="selectedTable.orderStatus"
                      >
                        {{ selectedTable.orderStatus }}
                      </v-chip>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Current Order -->
            <v-card
              v-if="selectedTable.order && selectedTable.order.length > 0"
              outlined
              class="mb-3"
            >
              <v-card-subtitle>
                Current Order
                <v-spacer></v-spacer>
                <v-chip color="primary" text-color="white" small>
                  {{ selectedTable.order.length }} items
                </v-chip>
              </v-card-subtitle>
              <v-card-text style="max-height: 200px; overflow-y: auto">
                <div
                  v-for="item in selectedTable.order"
                  :key="item.id"
                  class="d-flex justify-space-between mb-2"
                >
                  <div>
                    <div class="font-weight-medium">{{ item.name }}</div>
                    <div class="text-caption grey--text">
                      Qty: {{ item.quantity }}
                    </div>
                  </div>
                  <div class="font-weight-bold primary--text">
                    ${{ formatPrice(item.unitPrice * item.quantity) }}
                  </div>
                </div>
                <v-divider class="my-2"></v-divider>
                <div
                  class="d-flex justify-space-between text-h6 font-weight-bold"
                >
                  <span>Total:</span>
                  <span class="primary--text"
                    >${{ formatPrice(selectedTable.currentTotal || 0) }}</span
                  >
                </div>
              </v-card-text>
            </v-card>

            <!-- Customer Input -->
            <v-card
              v-if="selectedTable.status === 'available'"
              outlined
              class="mb-3"
            >
              <v-card-subtitle>Seat Customer</v-card-subtitle>
              <v-card-text>
                <v-text-field
                  v-model="customerName"
                  label="Customer Name"
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                  v-model="partySize"
                  label="Party Size"
                  type="number"
                  outlined
                  dense
                  prepend-inner-icon="mdi-account-group"
                  :max="selectedTable.capacity"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-card-text>

          <!-- Action Buttons -->
          <v-card-actions v-if="selectedTable" class="pa-4">
            <div class="w-100">
              <!-- Available Table Actions -->
              <div v-if="selectedTable.status === 'available'">
                <v-btn
                  @click="seatCustomer"
                  color="primary"
                  block
                  large
                  class="mb-2"
                  :disabled="!customerName"
                  :loading="actionLoading"
                >
                  <v-icon left>mdi-account-plus</v-icon>
                  Seat Customer
                </v-btn>
              </div>

              <!-- Occupied Table Actions -->
              <div v-else-if="selectedTable.status === 'occupied'">
                <v-btn
                  @click="openPOS"
                  color="primary"
                  block
                  large
                  class="mb-2"
                >
                  <v-icon left>mdi-cash-register</v-icon>
                  Add Items
                </v-btn>
                <v-btn
                  @click="processPayment"
                  color="success"
                  block
                  large
                  class="mb-2"
                  :disabled="
                    !selectedTable.currentTotal ||
                    selectedTable.currentTotal === 0
                  "
                  :loading="actionLoading"
                >
                  <v-icon left>mdi-credit-card</v-icon>
                  Process Payment
                </v-btn>
                <v-btn
                  @click="printCustomerReceipt"
                  color="info"
                  block
                  class="mb-2"
                  :disabled="
                    !selectedTable.currentTotal ||
                    selectedTable.currentTotal === 0
                  "
                  :loading="actionLoading"
                >
                  <v-icon left>mdi-printer</v-icon>
                  Print Receipt
                </v-btn>
              </div>

              <!-- Cleaning Table Actions -->
              <div v-else-if="selectedTable.status === 'cleaning'">
                <v-btn
                  @click="markTableClean"
                  color="success"
                  block
                  large
                  :loading="actionLoading"
                >
                  <v-icon left>mdi-check-circle</v-icon>
                  Mark Clean & Available
                </v-btn>
              </div>

              <!-- Reserved Table Actions -->
              <div v-else-if="selectedTable.status === 'reserved'">
                <v-btn
                  @click="seatReservedCustomer"
                  color="primary"
                  block
                  large
                  class="mb-2"
                  :loading="actionLoading"
                >
                  <v-icon left>mdi-account-check</v-icon>
                  Seat Reserved Customer
                </v-btn>
                <v-btn
                  @click="cancelReservation"
                  color="warning"
                  block
                  :loading="actionLoading"
                >
                  <v-icon left>mdi-cancel</v-icon>
                  Cancel Reservation
                </v-btn>
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

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

    <!-- Payment Dialog -->

    <UnifiedPaymentDialog
      :show="showPaymentDialog"
      :table-number="selectedTable ? selectedTable.id : null"
      :amount="paymentAmount"
      :payment-methods="paymentList"
      :payment-loading="paymentLoading"
      :action-loading="actionLoading"
      :enable-q-r="false"
      @close="closePaymentDialog"
      @confirm-payment="handlePaymentConfirmation"
      @reload-payment-methods="loadPaymentMethods"
      @show-message="showMessage"
    />

    <!-- Print Ticket Dialog -->
    <PrintTicketDialog
      :show="showCustomerPrint"
      :ticket="selectedTicket"
      :restaurant-info="restaurantConfig"
      @close="closePrintDialog"
      @printed="onPrintSuccess"
    />

    <!-- POS Dialog -->
    <v-dialog v-model="showPOSDialog" fullscreen>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>
            <v-icon left>mdi-cash-register</v-icon>
            POS - Table {{ selectedTable ? selectedTable.number : '' }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="closePOS">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pa-0">
          <CafePOSScreen
            @reload-data="loadTableTicketData(selectedTable.id)"
            @reload-table="fetchTables"
            :tableId="selectedTable ? selectedTable.id : null"
            :key="`pos-${selectedTable?.id}`"
            v-if="selectedTable && showPOSDialog"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

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
import UnifiedPaymentDialog from '@/components/CAFE/paymentDialogFront'

export default {
  components: {
    PrintTicketDialog,
    UnifiedPaymentDialog,
  },
  name: 'OperationsTableScreen',
  data() {
    return {
      showPrintConfirmDialog: false,
      // Print related
      showCustomerPrint: false,
      selectedTicket: null,

      // Restaurant configuration
      restaurantConfig: {
        name: 'Your Restaurant Name',
        address:
          '123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567',
      },
      selectedTable: null,
      customerName: 'Walk-in',
      partySize: 1,
      showPOSDialog: false,
      loading: false,
      actionLoading: false,
      tables: [],
      // Payment dialog data
      showPaymentDialog: false,
      paymentList: [],
      // Removed selectedPaymentMethod since it's now handled in PaymentDialog component
      paymentLoading: false,
      paymentAmount: 0,
      snackbar: {
        show: false,
        message: '',
        color: 'success',
        icon: 'mdi-check-circle',
        timeout: 4000,
      },
    }
  },
  computed: {
    availableTables() {
      return this.tables.filter((table) => table.status === 'available').length
    },
    occupiedTables() {
      return this.tables.filter((table) => table.status === 'occupied').length
    },
    cleaningTables() {
      return this.tables.filter((table) => table.status === 'cleaning').length
    },
    reservedTables() {
      return this.tables.filter((table) => table.status === 'reserved').length
    },
  },
  mounted() {
    this.fetchTables()
  },
  methods: {
    // Handle print confirmation response
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

    // Silent table status change (without showing message)
    async changeTableStatusSilent(status) {
      try {
        const payload = {
          status,
          timeOccupied: status === 'occupied' ? new Date() : null,
          currentOrderId:
            status === 'occupied' ? this.selectedTable.currentOrderId : null,
        }

        await this.$axios.patch(
          `api/tables/${this.selectedTable.id}/status`,
          payload
        )

        if (status === 'available') {
          this.selectedTable.customerName = null
          this.selectedTable.timeOccupied = null
          this.selectedTable.order = []
          this.selectedTable.orderTotal = 0
          this.selectedTable.currentOrderId = null
        }

        this.selectedTable.status = status
        this.fetchTables()
      } catch (error) {
        console.error('Failed to update table status silently:', error)
      }
    },

    async printCustomerReceipt() {
      console.log('Print customer receipt clicked')

      if (!this.selectedTable || !this.selectedTable.currentOrderId) {
        this.showMessage(
          'No active order found for this table',
          'warning',
          'mdi-alert'
        )
        return
      }

      try {
        this.actionLoading = true

        console.log('Fetching latest ticket data before printing...')
        const ticketResponse = await this.$axios.get(
          `api/ticket/${this.selectedTable.currentOrderId}`
        )
        const latestTicket = ticketResponse.data.data || ticketResponse.data

        // Fetch customer data if exists
        let customerData = null
        if (latestTicket.clientId) {
          try {
            const customerResponse = await this.$axios.get(
              `api/client/find/${latestTicket.clientId}`
            )
            customerData = customerResponse.data.data || customerResponse.data
          } catch (error) {
            console.warn('Could not fetch customer data:', error)
            customerData = this.selectedTable.customerName
              ? {
                  name: this.selectedTable.customerName,
                }
              : null
          }
        }

        // Fetch the latest ticket lines
        const ticketLinesResponse = await this.$axios.get(
          `api/ticketLine/ticket/${latestTicket.id}`
        )
        const ticketLines =
          ticketLinesResponse.data.data || ticketLinesResponse.data

        // Fetch products for mapping
        let products = []
        try {
          const productsResponse = await this.$axios.get('product_f/1')
          const productData =
            productsResponse.data.data || productsResponse.data
          products = productData.map((product) => ({
            id: product.id,
            pro_id: product.pro_id,
            pro_name: product.pro_name,
            categ_name: product.categ_name,
            stock_count: product.card_count || 0,
            isActive: product.pro_status === 1,
          }))
        } catch (error) {
          console.warn('Could not fetch products for mapping:', error)
        }

        // Map ticket lines
        const mappedTicketLines = ticketLines
          .map((line) => {
            const product = products.find((p) => p.id === line.productId)
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

        // Build the complete ticket object for printing
        const ticketForPrint = {
          ...latestTicket,
          client: customerData,
          table: {
            id: this.selectedTable.id,
            number: this.selectedTable.number,
            name: `Table ${this.selectedTable.number}`,
          },
          ticketLines: mappedTicketLines,
        }

        // Calculate totals if missing
        if (!ticketForPrint.subtotal) {
          const subtotal = mappedTicketLines.reduce((total, item) => {
            return total + parseFloat(item.pro_price) * item.quantity
          }, 0)
          ticketForPrint.subtotal = subtotal
          ticketForPrint.tax = subtotal * 0.085
          ticketForPrint.total = subtotal + subtotal * 0.085
        }

        console.log('Updated ticket for print:', ticketForPrint)
        console.log('Ticket lines count:', mappedTicketLines.length)

        // Update the selected table with latest data
        this.selectedTable.currentTotal = latestTicket.total
        this.selectedTable.order = mappedTicketLines

        // Use PrintTicketDialog component
        this.selectedTicket = ticketForPrint
        this.showCustomerPrint = true

        this.showMessage(
          'Receipt prepared for printing!',
          'success',
          'mdi-printer'
        )
      } catch (error) {
        console.error('Error fetching latest ticket data for printing:', error)
        this.showMessage(
          'Failed to load latest ticket data. Please try again.',
          'warning',
          'mdi-alert'
        )
      } finally {
        this.actionLoading = false
      }
    },

    closePrintDialog() {
      this.showCustomerPrint = false
      this.selectedTicket = null
    },

    onPrintSuccess(ticket) {
      console.log('Ticket printed successfully:', ticket.id)
      this.showMessage(
        'Receipt printed successfully!',
        'success',
        'mdi-printer'
      )
    },

    // Core table methods
    async fetchTables() {
      this.loading = true
      try {
        const response = await this.$axios.get('api/tables')
        console.log('Tables response:', response.data)

        const tableData = response.data.data || response.data

        this.tables = tableData.map((table) => ({
          id: table.id,
          name: table.name,
          number: table.number,
          capacity: table.capacity,
          status: table.status,
          timeOccupied: table.timeOccupied
            ? new Date(table.timeOccupied)
            : null,
          currentOrderId: table.currentOrderId,
          createdAt: table.createdAt,
          updateTimestamp: table.updateTimestamp,
          customerName: null,
          order: [],
          orderTotal: 0,
        }))

        this.showMessage(`Loaded ${this.tables.length} tables successfully!`)
      } catch (error) {
        console.error('Error fetching tables:', error)
        this.showMessage(
          'Failed to load tables. Please try again.',
          'error',
          'mdi-alert'
        )
      } finally {
        this.loading = false
      }
    },

    async selectTable(table) {
      this.selectedTable = { ...table }
      this.partySize = 1
      await this.loadTableTicketData(table.id)
    },

    async loadTableTicketData(tableId) {
      console.info(`Loading data ${tableId}`)
      try {
        const response = await this.$axios.get(
          `api/ticket/table/${tableId}/pending`
        )
        const pendingTickets = response.data || []

        if (pendingTickets.length > 0) {
          const currentTicket = pendingTickets[0]
          this.selectedTable.currentTotal = currentTicket.total || 0
          this.selectedTable.currentOrderId = currentTicket.id
          this.selectedTable.orderStatus = currentTicket.status

          try {
            const linesResponse = await this.$axios.get(
              `api/ticketLine/ticket/${currentTicket.id}`
            )
            const lines = linesResponse.data.data || linesResponse.data || []
            this.selectedTable.order = lines
            this.selectedTable.itemCount = lines.reduce(
              (sum, line) => sum + line.quantity,
              0
            )
          } catch (linesError) {
            console.log('Could not fetch ticket lines:', linesError)
            this.selectedTable.itemCount = 0
          }
        } else {
          this.selectedTable.currentTotal = 0
          this.selectedTable.currentOrderId = null
          this.selectedTable.orderStatus = null
          this.selectedTable.itemCount = 0
        }
      } catch (error) {
        console.log('No pending tickets for table:', tableId)
        this.selectedTable.currentTotal = 0
        this.selectedTable.currentOrderId = null
        this.selectedTable.orderStatus = null
        this.selectedTable.itemCount = 0
      }
    },

    // Customer seating methods
    async seatCustomer() {
      if (!this.customerName.trim()) {
        this.showMessage('Please enter a customer name', 'warning', 'mdi-alert')
        return
      }

      this.actionLoading = true
      try {
        const seatData = {
          customerName: this.customerName.trim(),
          partySize: parseInt(this.partySize) || 1,
        }

        await this.$axios.post(
          `api/tables/${this.selectedTable.id}/seat-customer`,
          seatData
        )

        this.selectedTable.status = 'occupied'
        this.selectedTable.customerName = this.customerName.trim()
        this.selectedTable.timeOccupied = new Date()

        this.showMessage(
          `${this.customerName} has been seated at Table ${this.selectedTable.number}`,
          'success',
          'mdi-check-circle'
        )

        this.customerName = ''
        this.partySize = 1
        this.fetchTables()
      } catch (error) {
        console.error('Error seating customer:', error)
        if (error.response?.status === 400) {
          const message =
            error.response.data?.message || 'Invalid seating request'
          this.showMessage(message, 'error', 'mdi-alert')
        } else {
          this.showMessage(
            'Failed to seat customer. Please try again.',
            'error',
            'mdi-alert'
          )
        }
      } finally {
        this.actionLoading = false
      }
    },

    // Table status methods
    async changeTableStatus(status) {
      this.actionLoading = true
      try {
        const payload = {
          status,
          timeOccupied: status === 'occupied' ? new Date() : null,
          currentOrderId:
            status === 'occupied' ? this.selectedTable.currentOrderId : null,
        }

        await this.$axios.patch(
          `api/tables/${this.selectedTable.id}/status`,
          payload
        )

        if (status === 'available') {
          this.selectedTable.customerName = null
          this.selectedTable.timeOccupied = null
          this.selectedTable.order = []
          this.selectedTable.orderTotal = 0
          this.selectedTable.currentOrderId = null
        }

        this.selectedTable.status = status
        this.showMessage(
          `Table ${this.selectedTable.number} marked as ${this.getStatusText(
            status
          )}`
        )
        this.fetchTables()
      } catch (error) {
        this.showMessage(
          'Failed to update table status. Please try again.',
          'error',
          'mdi-alert'
        )
      } finally {
        this.actionLoading = false
      }
    },

    markTableClean() {
      this.changeTableStatus('available')
    },

    seatReservedCustomer() {
      this.changeTableStatus('occupied')
    },

    cancelReservation() {
      this.changeTableStatus('available')
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
      const total =
        this.selectedTable.currentTotal || this.selectedTable.orderTotal || 0

      if (total <= 0) {
        this.showMessage('No amount to process', 'warning', 'mdi-alert')
        return
      }

      this.paymentAmount = total
      await this.loadPaymentMethods()
      this.showPaymentDialog = true
    },

    // Updated method to handle payment confirmation from PaymentDialog component
    async handlePaymentConfirmation(selectedPaymentMethod) {
      this.actionLoading = true

      try {
        if (this.selectedTable.currentOrderId) {
          await this.$axios.patch(
            `/api/ticket/${this.selectedTable.currentOrderId}/payment-status`,
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

        // Update table status to cleaning
        await this.changeTableStatusSilent('cleaning')
      } catch (error) {
        console.error('Payment processing error:', error)
        this.showMessage('Failed to process payment', 'error', 'mdi-alert')
      } finally {
        this.actionLoading = false
      }
    },

    // Legacy method - keep for backward compatibility but simplified
    async confirmPayment() {
      // This method is now handled by PaymentDialog component
      // Kept for any legacy calls that might still exist
      console.warn(
        'confirmPayment method is deprecated. Use handlePaymentConfirmation instead.'
      )
    },

    closePaymentDialog() {
      this.showPaymentDialog = false
      this.paymentAmount = 0
    },

    // POS methods
    openPOS() {
      this.showPOSDialog = true
    },

    closePOS() {
      this.showPOSDialog = false
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

    getTableColor(status) {
      const colors = {
        available: 'success',
        occupied: 'warning',
        cleaning: 'error',
        reserved: 'info',
      }
      return colors[status] || 'grey'
    },

    getStatusText(status) {
      const texts = {
        available: 'Available',
        occupied: 'Occupied',
        cleaning: 'Cleaning',
        reserved: 'Reserved',
      }
      return texts[status] || 'Unknown'
    },

    getPaymentIcon(paymentCode) {
      const icons = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        CREDIT: 'mdi-credit-card-outline',
        DEBIT: 'mdi-credit-card',
        MOBILE: 'mdi-cellphone',
        DIGITAL: 'mdi-wallet',
        BANK: 'mdi-bank',
        CHECK: 'mdi-checkbook',
      }
      return icons[paymentCode] || 'mdi-currency-usd'
    },

    getPaymentColor(paymentCode) {
      const colors = {
        CASH: 'green',
        CARD: 'blue',
        CREDIT: 'purple',
        DEBIT: 'indigo',
        MOBILE: 'orange',
        DIGITAL: 'teal',
        BANK: 'brown',
        CHECK: 'grey',
      }
      return colors[paymentCode] || 'primary'
    },

    formatTime(time) {
      if (!time) return ''
      const diff = Date.now() - time.getTime()
      const minutes = Math.floor(diff / 60000)
      const hours = Math.floor(minutes / 60)

      if (hours > 0) {
        return `${hours}h ${minutes % 60}m`
      }
      return `${minutes}m`
    },

    formatDate(dateString) {
      if (!dateString) return ''
      return new Date(dateString).toLocaleDateString()
    },

    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount || 0))

      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber
    },

    getTotalAmountColor() {
      const total = this.selectedTable.currentTotal || 0
      if (total === 0) return 'grey--text'
      if (total > 100) return 'success--text'
      return 'primary--text'
    },

    getOrderStatusColor(status) {
      const colors = {
        pending: 'orange',
        preparing: 'blue',
        ready: 'green',
        served: 'purple',
        paid: 'success',
      }
      return colors[status] || 'grey'
    },
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

.table-card:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

.payment-method-card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.payment-method-card:hover {
  transform: translateY(-2px);
}

.payment-method-card.elevation-4 {
  border: 2px solid rgba(255, 255, 255, 0.3);
}
</style>