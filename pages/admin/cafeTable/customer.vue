<template>
  <div class="customer-display-container">
    <!-- Welcome Screen (when no QR is showing) -->
    <div v-if="!showQR" class="welcome-screen">
      <div class="logo-section">
        <!-- Dynamic Company Logo Section -->
        <div class="company-logo-container mb-4">
          <!-- Loading State -->
          <div v-if="companyLogo.loading" class="logo-loading-container">
            <v-progress-circular
              indeterminate
              size="32"
              color="#A12F8D"
            ></v-progress-circular>
            <p class="mt-2 text-caption grey--text">ກຳລັງໂຫຼດໂລໂກ້...</p>
          </div>
          <!-- Company Logo -->
          <img
            v-else-if="logoUrl"
            :src="logoUrl"
            alt="Company Logo"
            class="company-logo-image"
            @error="onLogoError"
          />
          <!-- Fallback Icon -->
          <v-icon v-else size="120" class="dcommerce-green-text mb-4">
            mdi-storefront
          </v-icon>
        </div>

        <h1 class="store-name">{{ storeName }}</h1>
        <p class="welcome-text">Customer Display</p>
        <p class="status-text">Ready for QR Payment</p>

        <!-- QR Payment Methods Preview -->
        <div class="payment-methods-preview">
          <p class="payment-methods-title">Accepted Payment Methods</p>
          <div class="payment-methods-container">
            <div class="payment-method-item">
              <img
                :src="bflQrImage"
                alt="BFL Mobile Banking"
                class="payment-method-logo"
                @error="onPaymentMethodError"
              />
              <span class="payment-method-name">BFL Mobile</span>
            </div>
            <div class="payment-method-item">
              <img
                :src="bcelQrImage"
                alt="BCEL Mobile Banking"
                class="payment-method-logo"
                @error="onPaymentMethodError"
              />
              <span class="payment-method-name">BCEL Mobile</span>
            </div>
          </div>
        </div>
      </div>

      <div class="waiting-animation">
        <v-progress-circular
          indeterminate
          color="#A12F8D"
          size="64"
          width="4"
          class="mb-4"
        ></v-progress-circular>
        <p class="waiting-text">Waiting for payment request...</p>
      </div>

      <!-- Powered by DCOMMERCE Section for Welcome Screen -->
      <div class="powered-by-welcome">
        <div class="powered-by-container-welcome">
          <span class="powered-by-text-welcome">Powered by</span>
          <img
            :src="dcommerceLogoUrl"
            alt="DCOMMERCE Logo"
            class="dcommerce-logo-welcome"
          />
          <span class="dcommerce-text-welcome">DCOMMERCE</span>
        </div>
      </div>
    </div>

    <!-- QR Payment Screen with Order Details -->
    <div v-if="showQR" class="qr-payment-screen">
      <div class="payment-layout">
        <!-- Left Side - Order Details -->
        <div class="order-section">
          <div class="order-header">
            <h3 class="order-title">Your Order</h3>
            <div class="table-badge" v-if="qrData.tableNumber">
              <v-icon small class="mr-1">mdi-table-furniture</v-icon>
              Table {{ qrData.tableNumber }}
            </div>
          </div>

          <!-- Order Items -->
          <div class="order-items">
            <div v-if="orderItems.length > 0" class="items-list">
              <div
                v-for="(item, index) in orderItems"
                :key="index"
                class="order-item"
              >
                <div class="item-details">
                  <div class="item-name">{{ item.name }}</div>
                  <div class="item-description" v-if="item.description">
                    {{ item.description }}
                  </div>
                </div>
                <div class="item-quantity">{{ item.quantity }}x</div>
                <div class="item-price">{{ formatPrice(item.totalPrice) }}</div>
              </div>
            </div>

            <!-- No items fallback -->
            <div v-else class="no-items">
              <v-icon size="48" color="grey lighten-2" class="mb-2"
                >mdi-cart-outline</v-icon
              >
              <p class="grey--text">Loading order details...</p>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="order-summary">
            <div class="summary-line">
              <span>Subtotal:</span>
              <span>{{ formatPrice(orderSummary.subtotal) }}</span>
            </div>
            <div class="summary-line" v-if="orderSummary.tax > 0">
              <span>Tax ({{ orderSummary.taxRate }}%):</span>
              <span>{{ formatPrice(orderSummary.tax) }}</span>
            </div>
            <div class="summary-line" v-if="orderSummary.discount > 0">
              <span>Discount:</span>
              <span class="discount"
                >-{{ formatPrice(orderSummary.discount) }}</span
              >
            </div>
            <div class="summary-total">
              <span>Total:</span>
              <span>{{ formatPrice(qrData.amount) }}</span>
            </div>
          </div>
        </div>

        <!-- Right Side - QR Payment -->
        <div class="payment-section">
          <div class="payment-header">
            <h2 class="payment-title">Scan to Pay</h2>

            <!-- QR Payment Methods -->
          </div>

          <!-- Amount Display -->
          <div class="amount-display">
            <div class="amount-label">Total Amount</div>
            <div class="amount-value">{{ formatPrice(qrData.amount) }}</div>
            <div class="currency-label">Lao Kip (LAK)</div>
          </div>

          <!-- QR Code -->
          <!-- <div class="qr-container">
            <div class="qr-wrapper">
              <img
                :src="qrCodeUrl"
                alt="Payment QR Code"
                class="qr-code-image"
                @error="onQRError"
              />
            </div>
          </div> -->
          <div class="qr-container">
            <div class="qr-wrapper">
              <img
                :src="bflQrImage"
                alt="BFL Mobile Banking"
                class="qr-payment-method-logo"
                @error="onPaymentMethodError"
              />
              <img
                :src="bcelQrImage"
                alt="BCEL Mobile Banking"
                class="qr-payment-method-logo"
                @error="onPaymentMethodError"
              />
            </div>
          </div>


          <!-- Instructions -->
          <div class="qr-instructions">
            <div class="instruction-steps">
              <div class="step">
                <v-icon class="step-icon">mdi-numeric-1-circle</v-icon>
                Open banking app
              </div>
              <div class="step">
                <v-icon class="step-icon">mdi-numeric-2-circle</v-icon>
                Scan QR code
              </div>
              <div class="step">
                <v-icon class="step-icon">mdi-numeric-3-circle</v-icon>
                Confirm payment
              </div>
            </div>
          </div>

          <!-- Payment Status -->
          <div class="payment-status">
            <v-progress-circular
              v-if="!paymentComplete"
              indeterminate
              color="#A12F8D"
              size="20"
              class="mr-2"
            ></v-progress-circular>
            <v-icon v-else color="success" size="20" class="mr-2"
              >mdi-check-circle</v-icon
            >
            <span
              class="status-text"
              :class="
                paymentComplete ? 'success--text' : 'dcommerce-green-text'
              "
            >
              {{
                paymentComplete ? 'Payment Received!' : 'Waiting for payment...'
              }}
            </span>
          </div>

          <!-- Timer -->
          <div
            class="timer-display"
            v-if="timeRemaining > 0 && !paymentComplete"
          >
            <v-icon small class="mr-1">mdi-timer-outline</v-icon>
            <span class="timer-text"
              >Expires in: {{ formatTime(timeRemaining) }}</span
            >
          </div>
        </div>
      </div>

      <!-- Powered by DCOMMERCE Section for QR Screen -->
      <div class="powered-by-qr">
        <div class="powered-by-container-qr">
          <span class="powered-by-text-qr">Powered by</span>
          <img
            :src="dcommerceLogoUrl"
            alt="DCOMMERCE Logo"
            class="dcommerce-logo-qr"
          />
          <span class="dcommerce-text-qr">DCOMMERCE</span>
        </div>
      </div>
    </div>

    <!-- Payment Success Overlay -->
    <v-overlay v-if="paymentComplete" class="success-overlay">
      <div class="success-content">
        <v-icon size="100" color="white" class="mb-4 success-icon"
          >mdi-check-circle</v-icon
        >
        <h2 class="success-title">Payment Successful!</h2>
        <div class="success-amount">{{ formatPrice(qrData.amount) }}</div>
        <p class="success-message">Thank you for your payment</p>
        <p class="success-submessage">Please keep your receipt</p>

        <div class="success-timer mt-4">
          <v-progress-linear
            :value="successProgress"
            color="white"
            background-color="rgba(255,255,255,0.3)"
            height="4"
            rounded
          ></v-progress-linear>
          <p class="caption mt-2">
            Screen will reset in {{ Math.ceil(successTimeRemaining / 1000) }}s
          </p>
        </div>
      </div>
    </v-overlay>
  </div>
</template>
<script>
export default {
  name: 'CustomerScreen',
  layout: 'empty',

  data() {
    return {
      bflQrImage: require('~/assets/image/qr_code/BFL_QR.jpeg'),
      bcelQrImage: require('~/assets/image/qr_code/BCEL_QR.jpeg'),
      showQR: false,
      qrData: {
        amount: 0,
        tableNumber: '',
        qrString: '',
        timestamp: null,
        orderItems: [], // Add order items to QR data
        orderSummary: {},
      },
      paymentComplete: false,
      timeRemaining: 300,
      timer: null,
      showCloseButton: process.env.NODE_ENV === 'development',

      successTimeRemaining: 5000,
      successProgress: 0,
      successTimer: null,

      // Sample order data (will be replaced by actual data from QR)
      orderItems: [],
      orderSummary: {
        subtotal: 0,
        tax: 0,
        taxRate: 8.5,
        discount: 0,
      },

      // Company logo management
      companyLogo: {
        url: null,
        company: null,
        loading: false,
        error: false,
      },
    }
  },

  computed: {
    qrCodeUrl() {
      if (!this.qrData.qrString) return ''
      const encodedString = encodeURIComponent(
        this.qrData.qrString.replace(/\s/g, '')
      )
      return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedString}&format=png&margin=15&color=01532B&bgcolor=ffffff`
    },

    // Dynamic logo URL with fallback
    logoUrl() {
      if (this.companyLogo.url) {
        return this.companyLogo.url
      }
      // Return null to show fallback icon
      return null
    },

    // DCOMMERCE logo URL
    dcommerceLogoUrl() {
      try {
        return require('~/assets/image/Dcommerce-Logo_DC.png')
      } catch {
        // Fallback to a default or online logo
        return '/static/images/dcommerce-logo.png'
      }
    },

    // Store name based on company data
    storeName() {
      if (this.companyLogo.company?.name) {
        return this.companyLogo.company.name
      }
      return 'DCOMMERCE CAFE'
    },
  },

  async mounted() {
    this.setupCommunication()
    this.checkForExistingQR()
    // Load company logo when component mounts
    // this.loadCompanyLogo()
    await this.loadQrPaymentImages()
  },

  beforeDestroy() {
    this.cleanup()
  },

  methods: {
    async loadQrPaymentImages() {
      try {
        // Option 1: Using dynamic imports (recommended for Nuxt.js)
        const bflModule = await import('~/assets/image/qr_code/BFL_QR.jpeg')
        const bcelModule = await import('~/assets/image/qr_code/BCEL_QR.jpeg')

        this.bflQrImage = bflModule.default
        this.bcelQrImage = bcelModule.default
      } catch (error) {
        console.warn('Failed to load QR payment images:', error)

        // Fallback to static paths
        this.bflQrImage = '/assets/image/qr_code/BFL_QR.jpeg'
        this.bcelQrImage = '/assets/image/qr_code/BCEL_QR.jpeg'
      }
    },

    onPaymentMethodError(event) {
      console.warn('Payment method image failed to load:', event.target.src)

      // Hide the broken image
      event.target.style.display = 'none'

      // Show the parent container with a fallback icon or text
      const parentItem = event.target.closest(
        '.payment-method-item, .qr-payment-method'
      )
      if (parentItem) {
        const nameSpan = parentItem.querySelector(
          '.payment-method-name, .qr-payment-method-text'
        )
        if (nameSpan) {
          nameSpan.style.marginTop = '0'
          // Add a fallback icon if needed
          const fallbackIcon = document.createElement('div')
          fallbackIcon.innerHTML = '💳'
          fallbackIcon.style.fontSize = '24px'
          fallbackIcon.style.marginBottom = '8px'
          event.target.parentNode.insertBefore(fallbackIcon, event.target)
        }
      }
    },
    // Handle logo loading error
    onLogoError() {
      console.warn('Company logo failed to load')
      this.companyLogo.url = null
      this.companyLogo.error = true
    },

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
    setupCommunication() {
      window.addEventListener('storage', this.handleStorageChange)
      this.checkForExistingQR()
    },

    handleStorageChange(event) {
      if (event.key === 'customerDisplay') {
        const data = event.newValue
        if (data) {
          try {
            const message = JSON.parse(data)
            this.handleDisplayMessage(message)
          } catch (error) {
            console.error('Error parsing customer display data:', error)
          }
        }
      }
    },

    checkForExistingQR() {
      const customerDisplayData = localStorage.getItem('customerDisplay')
      if (customerDisplayData) {
        try {
          const message = JSON.parse(customerDisplayData)
          this.handleDisplayMessage(message)
        } catch (error) {
          console.error('Error parsing existing customer display data:', error)
        }
      }
    },

    handleDisplayMessage(message) {
      console.log('Customer screen received message:', message)

      if (message.type === 'SHOW_QR_PAYMENT') {
        this.displayQR(message.data)
      } else if (message.type === 'HIDE_QR_PAYMENT') {
        this.hideQR()
      } else if (message.type === 'PAYMENT_SUCCESS') {
        this.showPaymentSuccess()
      }
    },

    async displayQR(data) {
      console.log('Displaying QR for:', data)

      this.qrData = {
        ...data,
        timestamp: Date.now(),
      }

      // Load order details if table number is provided
      if (data.ticketId) {
        console.info(`TICKET ID ${data.ticketId}`)
        await this.loadOrderDetailsByTicketId(data.ticketId)
      } else if (data.tableNumber) {
        await this.loadOrderDetails(data.tableNumber)
      }

      this.showQR = true
      this.paymentComplete = false
      this.startTimer()
    },
    async loadOrderDetailsByTicketId(ticketId) {
      try {
        console.log('Loading order details for ticket ID:', ticketId)

        // 1️⃣ Get ticket info by ID
        const ticketResponse = await this.$axios.get(`/api/ticket/${ticketId}`)
        const currentTicket = ticketResponse.data.data || ticketResponse.data

        if (!currentTicket) {
          console.warn('No ticket found for ID:', ticketId)
          this.orderItems = []
          this.orderSummary = {
            subtotal: 0,
            tax: 0,
            taxRate: 0,
            discount: 0,
            total: 0,
          }
          return
        }

        // 2️⃣ Get ticket lines
        const ticketLinesResponse = await this.$axios.get(
          `/api/ticketLine/ticket/${ticketId}`
        )
        const ticketLines =
          ticketLinesResponse.data.data || ticketLinesResponse.data || []

        // 3️⃣ Fetch product list (for mapping)
        let products = []
        try {
          const productsResponse = await this.$axios.get('/api/product/find')
          const productData =
            productsResponse.data.data || productsResponse.data
          products = productData.map((p) => ({
            id: p.id,
            name: p.pro_name,
            description: p.pro_desc || '',
            category: p.categ_name || 'General',
            price: p.pro_price || 0,
          }))
        } catch (error) {
          console.warn('Could not fetch products for mapping:', error)
        }

        // 4️⃣ Map ticket lines to display items
        this.orderItems = ticketLines.map((line) => {
          const product = products.find((p) => p.id === line.productId)
          return {
            id: line.id,
            name: product?.name || `Product ${line.productId}`,
            description: product?.description || line.specialInstructions || '',
            category: product?.category || 'General',
            quantity: line.quantity,
            unitPrice: line.unitPrice,
            totalPrice: line.totalPrice || line.unitPrice * line.quantity,
            status: line.status,
          }
        })

        // 5️⃣ Set order summary
        const subtotal = currentTicket.subtotal || 0
        const tax = currentTicket.tax || currentTicket.taxAmount || 0
        const total = currentTicket.total || subtotal + tax

        this.orderSummary = {
          subtotal,
          tax,
          taxRate: subtotal > 0 ? ((tax / subtotal) * 100).toFixed(2) : 0,
          discount: currentTicket.discount || 0,
          total,
        }

        console.log('Order details loaded successfully:', {
          ticket: currentTicket.id,
          items: this.orderItems.length,
          summary: this.orderSummary,
        })
      } catch (error) {
        console.error('Error loading order details by ticket ID:', error)
        this.orderItems = []
        this.orderSummary = {
          subtotal: 0,
          tax: 0,
          taxRate: 0,
          discount: 0,
          total: 0,
        }
      }
    },

    async loadOrderDetails(tableNumber) {
      try {
        console.log('Loading order details for table:', tableNumber)

        // Get pending tickets for the table
        const ticketResponse = await this.$axios.get(
          `/api/ticket/table/${tableNumber}/pending`
        )
        const tickets = ticketResponse.data || []

        if (tickets.length === 0) {
          console.log('No pending tickets found for table:', tableNumber)
          this.orderItems = []
          this.orderSummary = { subtotal: 0, tax: 0, taxRate: 0, discount: 0 }
          return
        }

        const currentTicket = tickets[0] // Get the first pending ticket
        console.log('Current ticket:', currentTicket)

        // Get product details for mapping
        let products = []
        try {
          const productsResponse = await this.$axios.get('/api/product/find')
          const productData =
            productsResponse.data.data || productsResponse.data
          products = productData.map((product) => ({
            id: product.id,
            name: product.pro_name,
            description: product.pro_desc || '',
            category: product.categ_name || 'General',
            price: product.pro_price || 0,
          }))
          console.log('Products loaded for mapping:', products.length)
        } catch (error) {
          console.warn('Could not fetch products for mapping:', error)
        }

        // Process ticket lines into order items
        const ticketLines = currentTicket.ticketLines || []
        this.orderItems = ticketLines
          .map((line) => {
            const product = products.find((p) => p.id === line.productId)
            console.log(` [LINE] ${JSON.stringify(products)} `)
            console.log(` LINE ${JSON.stringify(line)} `)
            console.log(` product ${JSON.stringify(product)} `)
            return {
              id: line.id,
              name: product?.name || `Product ${line.productId}`,
              description:
                product?.description || line.specialInstructions || '',
              quantity: line.quantity,
              unitPrice: line.unitPrice,
              totalPrice: line.totalPrice,
              status: line.status,
            }
          })
          .filter((item) => item.name !== `Product ${item.productId}`) // Filter out items without product names

        // Set order summary from ticket data
        this.orderSummary = {
          subtotal: currentTicket.subtotal || 0,
          tax: currentTicket.tax || 0,
          taxRate:
            currentTicket.subtotal > 0
              ? (
                  ((currentTicket.tax || 0) / currentTicket.subtotal) *
                  100
                ).toFixed(1)
              : 0,
          discount: 0, // Add discount calculation if available in your ticket model
          total: currentTicket.total || 0,
        }

        console.log('Order details loaded:', {
          items: this.orderItems.length,
          summary: this.orderSummary,
        })
      } catch (error) {
        console.error('Error loading order details:', error)
        // Fallback to empty order
        this.orderItems = []
        this.orderSummary = { subtotal: 0, tax: 0, taxRate: 0, discount: 0 }
      }
    },

    hideQR() {
      console.log('Hiding QR display')
      this.showQR = false
      this.paymentComplete = false
      this.orderItems = []
      this.stopTimer()
      this.stopSuccessTimer()
      localStorage.removeItem('customerDisplay')
    },

    showPaymentSuccess() {
      console.log('Showing payment success')
      this.paymentComplete = true
      this.stopTimer()
      this.startSuccessTimer()
    },

    startTimer() {
      this.timeRemaining = 300
      this.timer = setInterval(() => {
        this.timeRemaining--
        if (this.timeRemaining <= 0) {
          this.hideQR()
        }
      }, 1000)
    },

    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },

    startSuccessTimer() {
      this.successTimeRemaining = 5000
      this.successProgress = 0

      this.successTimer = setInterval(() => {
        this.successTimeRemaining -= 100
        this.successProgress = ((5000 - this.successTimeRemaining) / 5000) * 100

        if (this.successTimeRemaining <= 0) {
          this.hideQR()
        }
      }, 100)
    },

    stopSuccessTimer() {
      if (this.successTimer) {
        clearInterval(this.successTimer)
        this.successTimer = null
      }
    },

    cleanup() {
      window.removeEventListener('storage', this.handleStorageChange)
      this.stopTimer()
      this.stopSuccessTimer()
    },

    formatPrice(amount) {
      if (!amount) return '0 ₭'
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount))
      return `${formattedNumber} ₭`
    },

    formatTime(seconds) {
      const mins = Math.floor(seconds / 60)
      const secs = seconds % 60
      return `${mins}:${secs.toString().padStart(2, '0')}`
    },

    onQRError() {
      console.error('Failed to load QR code image')
    },
  },
}
</script>

<style scoped>
/* ========================================
   🎨 BASE STYLES
   ======================================== */

.customer-display-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  font-family: 'Roboto', 'Arial', sans-serif;
  overflow: hidden;
}

.dcommerce-green {
  background-color: #A12F8D !important;
}

.dcommerce-green-text {
  color: #A12F8D !important;
}

/* ========================================
   🏠 WELCOME SCREEN STYLES
   ======================================== */

.welcome-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.logo-section {
  margin-bottom: 3rem;
}

.store-name {
  font-size: 3rem;
  font-weight: 700;
  color: #A12F8D;
  margin: 1rem 0;
  letter-spacing: -1px;
}

.welcome-text {
  font-size: 1.5rem;
  color: #6c757d;
  margin: 0.5rem 0;
}

.status-text {
  font-size: 1.2rem;
  color: #A12F8D;
  font-weight: 500;
  margin: 0.5rem 0;
}

.waiting-animation {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.waiting-text {
  font-size: 1.1rem;
  color: #6c757d;
  margin: 0;
}

/* ========================================
   🏦 PAYMENT METHODS PREVIEW (WELCOME SCREEN)
   ======================================== */

.payment-methods-preview {
  margin-top: 32px;
  text-align: center;
  animation: fadeInUp 0.6s ease-out;
}

.payment-methods-title {
  font-size: 16px;
  font-weight: 500;
  color: #A12F8D;
  margin-bottom: 16px;
}

.payment-methods-container {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.payment-method-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-width: 100px;
  animation: fadeIn 0.4s ease-out;
}

.payment-method-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.payment-method-logo {
  width: 248px;
  height: 248px;
  object-fit: contain;
  margin-bottom: 8px;
  border-radius: 8px;
}

.payment-method-name {
  font-size: 12px;
  font-weight: 500;
  color: #333;
  text-align: center;
}

/* ========================================
   💳 QR PAYMENT SCREEN LAYOUT
   ======================================== */

.qr-payment-screen {
  height: 100vh;
  padding: 1.5rem;
}

.payment-layout {
  display: flex;
  height: 100%;
  gap: 2rem;
}

/* ========================================
   📋 LEFT SIDE - ORDER DETAILS
   ======================================== */

.order-section {
  flex: 1;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.order-header {
  padding: 1.5rem;
  background: #A12F8D;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.table-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.order-items {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.items-list {
  space-y: 1rem;
}

.order-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  margin-bottom: 0.75rem;
  transition: background-color 0.2s;
}

.order-item:hover {
  background-color: #f8f9fa;
}

.item-details {
  flex: 1;
}

.item-name {
  font-weight: 600;
  font-size: 1rem;
  color: #212529;
  margin-bottom: 0.25rem;
}

.item-description {
  font-size: 0.85rem;
  color: #6c757d;
}

.item-quantity {
  font-weight: 600;
  color: #A12F8D;
  margin: 0 1rem;
  min-width: 40px;
  text-align: center;
}

.item-price {
  font-weight: 700;
  color: #A12F8D;
  font-size: 1rem;
  min-width: 80px;
  text-align: right;
}

.no-items {
  text-align: center;
  padding: 3rem 1rem;
}

.order-summary {
  padding: 1.5rem;
  border-top: 2px solid #e9ecef;
  background: #f8f9fa;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  color: #A12F8D;
  padding-top: 0.75rem;
  border-top: 2px solid #A12F8D;
  margin-top: 0.75rem;
}

.discount {
  color: #dc3545;
}

/* ========================================
   💰 RIGHT SIDE - QR PAYMENT
   ======================================== */

.payment-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.payment-header {
  margin-bottom: 1.5rem;
}

.payment-title {
  font-size: 2rem;
  font-weight: 700;
  color: #A12F8D;
  margin: 0;
}

/* ========================================
   🏦 QR PAYMENT METHODS (QR SCREEN)
   ======================================== */

.qr-payment-methods {
  margin-top: 16px;
  margin-bottom: 24px;
}

.payment-methods-subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  text-align: center;
}

.qr-payment-methods-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.qr-payment-method {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(1, 83, 43, 0.05);
  border: 1px solid rgba(1, 83, 43, 0.1);
  border-radius: 8px;
  transition: all 0.2s ease;
  animation: slideInDown 0.3s ease-out;
}

.qr-payment-method:hover {
  background: rgba(1, 83, 43, 0.1);
  border-color: rgba(1, 83, 43, 0.2);
  transform: translateY(-1px);
}

.qr-payment-method-logo {
  width: 240px;
  height: 240px;
  object-fit: contain;
  border-radius: 4px;
}

.qr-payment-method-text {
  font-size: 12px;
  font-weight: 500;
  color: #A12F8D;
}

/* ========================================
   💵 AMOUNT DISPLAY
   ======================================== */

.amount-display {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(1, 83, 43, 0.15);
  margin-bottom: 2rem;
  min-width: 280px;
}

.amount-label {
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.amount-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #A12F8D;
  line-height: 1;
}

.currency-label {
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 0.5rem;
}

/* ========================================
   📱 QR CODE SECTION
   ======================================== */

.qr-container {
  margin-bottom: 1.5rem;
}

.qr-wrapper {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 45px rgba(1, 83, 43, 0.2);
  border: 3px solid #A12F8D;
}

.qr-code-image {
  width: 240px;
  height: 240px;
  display: block;
}

/* ========================================
   📝 INSTRUCTIONS & STATUS
   ======================================== */

.qr-instructions {
  margin-bottom: 1.5rem;
}

.instruction-steps {
  display: flex;
  justify-content: space-around;
  max-width: 400px;
  margin: 0 auto;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.85rem;
  color: #6c757d;
  text-align: center;
}

.step-icon {
  color: #A12F8D !important;
  margin-bottom: 0.5rem;
}

.payment-status {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.status-text {
  font-weight: 600;
}

.timer-display {
  font-size: 0.9rem;
  color: #6c757d;
}

.timer-text {
  font-weight: 500;
}

/* ========================================
   ✅ SUCCESS SCREEN
   ======================================== */

.success-overlay {
  background: rgba(40, 167, 69, 0.95) !important;
}

.success-content {
  text-align: center;
  color: white;
  padding: 3rem;
  max-width: 600px;
}

.success-icon {
  animation: successPulse 1s ease-in-out;
}

@keyframes successPulse {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.success-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.success-amount {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.success-message {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.success-submessage {
  font-size: 1rem;
  opacity: 0.9;
}

.success-timer {
  max-width: 300px;
  margin: 0 auto;
}

/* ========================================
   🏢 COMPANY LOGO STYLES
   ======================================== */

.company-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.company-logo-image {
  max-width: 200px;
  width: 60%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
}

.logo-loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 200px;
  margin: 0 auto;
  border: 2px dashed #ddd;
  border-radius: 8px;
  background-color: #fafafa;
}

/* ========================================
   🔥 POWERED BY DCOMMERCE - WELCOME SCREEN
   ======================================== */

.powered-by-welcome {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.powered-by-container-welcome {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px 20px;
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.powered-by-text-welcome {
  font-size: 12px;
  color: #6c757d;
  font-weight: 400;
  font-family: 'noto sans lao', sans-serif;
}

.dcommerce-logo-welcome {
  height: 20px;
  width: auto;
  object-fit: contain;
}

.dcommerce-text-welcome {
  font-size: 14px;
  font-weight: 700;
  color: #A12F8D;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.5px;
}

/* ========================================
   🔥 POWERED BY DCOMMERCE - QR SCREEN
   ======================================== */

.powered-by-qr {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.powered-by-container-qr {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
}

.powered-by-text-qr {
  font-size: 10px;
  color: #6c757d;
  font-weight: 400;
}

.dcommerce-logo-qr {
  height: 16px;
  width: auto;
  object-fit: contain;
}

.dcommerce-text-qr {
  font-size: 12px;
  font-weight: 700;
  color: #A12F8D;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.5px;
}

/* ========================================
   🎭 ANIMATIONS
   ======================================== */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========================================
   🎨 HOVER EFFECTS
   ======================================== */

.powered-by-container-welcome:hover .dcommerce-text-welcome,
.powered-by-container-qr:hover .dcommerce-text-qr {
  color: #0056b3;
  transition: color 0.3s ease;
}

.powered-by-container-welcome:hover .dcommerce-logo-welcome,
.powered-by-container-qr:hover .dcommerce-logo-qr {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* ========================================
   🔧 ERROR HANDLING FOR PAYMENT METHOD IMAGES
   ======================================== */

.payment-method-logo[src=''],
.qr-payment-method-logo[src=''] {
  display: none;
}

/* ========================================
   🌟 ACCESSIBILITY IMPROVEMENTS
   ======================================== */

.payment-method-item:focus,
.qr-payment-method:focus {
  outline: 2px solid #A12F8D;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .payment-method-item {
    border: 2px solid #000;
  }

  .qr-payment-method {
    border: 2px solid #A12F8D;
  }
}

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .payment-method-item:hover,
  .qr-payment-method:hover {
    transform: none;
  }

  .payment-methods-preview,
  .payment-method-item,
  .qr-payment-method {
    animation: none;
  }
}

/* ========================================
   📱 RESPONSIVE DESIGN
   ======================================== */

@media (max-width: 1200px) {
  .payment-layout {
    flex-direction: column;
    gap: 1rem;
  }

  .order-section {
    max-height: 40vh;
  }

  .qr-code-image {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .qr-payment-screen {
    padding: 1rem;
  }

  .order-item {
    padding: 0.75rem;
  }

  .item-name {
    font-size: 0.9rem;
  }

  .amount-value {
    font-size: 2rem;
  }

  .powered-by-welcome {
    bottom: 20px;
  }

  .powered-by-container-welcome {
    padding: 8px 16px;
  }

  .powered-by-qr {
    bottom: 15px;
    right: 15px;
  }

  .powered-by-container-qr {
    padding: 6px 12px;
  }

  /* Payment methods responsive */
  .payment-methods-container {
    gap: 16px;
  }

  .payment-method-item {
    min-width: 80px;
    padding: 8px;
  }

  .payment-method-logo {
    width: 240px;
    height: 240px;
  }

  .payment-method-name {
    font-size: 11px;
  }

  .qr-payment-methods-container {
    gap: 12px;
  }

  .qr-payment-method {
    padding: 6px 10px;
  }

  .qr-payment-method-logo {
    width: 240px;
    height: 240px;
  }

  .qr-payment-method-text {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .payment-methods-container {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .payment-method-item {
    width: 120px;
  }

  .qr-payment-methods-container {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
}
</style>