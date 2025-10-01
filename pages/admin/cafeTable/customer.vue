<template>
  <div class="customer-display-container">
    <!-- Welcome Screen (when no QR is showing) -->
    <div v-if="!showQR" class="welcome-screen">
      <div class="logo-section">
        <v-icon size="120" class="dcommerce-green-text mb-4">mdi-storefront</v-icon>
        <h1 class="store-name">DCOMMERCE CAFE</h1>
        <p class="welcome-text">Customer Display</p>
        <p class="status-text">Ready for QR Payment</p>
      </div>
      <div class="waiting-animation">
        <v-progress-circular 
          indeterminate 
          color="#01532B" 
          size="64" 
          width="4"
          class="mb-4"
        ></v-progress-circular>
        <p class="waiting-text">Waiting for payment request...</p>
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
              <v-icon size="48" color="grey lighten-2" class="mb-2">mdi-cart-outline</v-icon>
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
              <span class="discount">-{{ formatPrice(orderSummary.discount) }}</span>
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
          </div>

          <!-- Amount Display -->
          <div class="amount-display">
            <div class="amount-label">Total Amount</div>
            <div class="amount-value">{{ formatPrice(qrData.amount) }}</div>
            <div class="currency-label">Lao Kip (LAK)</div>
          </div>

          <!-- QR Code -->
          <div class="qr-container">
            <div class="qr-wrapper">
              <img 
                :src="qrCodeUrl" 
                alt="Payment QR Code"
                class="qr-code-image"
                @error="onQRError"
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
              color="#01532B" 
              size="20"
              class="mr-2"
            ></v-progress-circular>
            <v-icon v-else color="success" size="20" class="mr-2">mdi-check-circle</v-icon>
            <span class="status-text" :class="paymentComplete ? 'success--text' : 'dcommerce-green-text'">
              {{ paymentComplete ? 'Payment Received!' : 'Waiting for payment...' }}
            </span>
          </div>

          <!-- Timer -->
          <div class="timer-display" v-if="timeRemaining > 0 && !paymentComplete">
            <v-icon small class="mr-1">mdi-timer-outline</v-icon>
            <span class="timer-text">Expires in: {{ formatTime(timeRemaining) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Success Overlay -->
    <v-overlay v-if="paymentComplete" class="success-overlay">
      <div class="success-content">
        <v-icon size="100" color="white" class="mb-4 success-icon">mdi-check-circle</v-icon>
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
          <p class="caption mt-2">Screen will reset in {{ Math.ceil(successTimeRemaining / 1000) }}s</p>
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
      showQR: false,
      qrData: {
        amount: 0,
        tableNumber: '',
        qrString: '',
        timestamp: null,
        orderItems: [], // Add order items to QR data
        orderSummary: {}
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
        discount: 0
      }
    }
  },
  
  computed: {
    qrCodeUrl() {
      if (!this.qrData.qrString) return ''
      const encodedString = encodeURIComponent(this.qrData.qrString.replace(/\s/g, ''))
      return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedString}&format=png&margin=15&color=01532B&bgcolor=ffffff`
    }
  },
  
  mounted() {
    this.setupCommunication()
    this.checkForExistingQR()
  },
  
  beforeDestroy() {
    this.cleanup()
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
        timestamp: Date.now()
      }
      
      // Load order details if table number is provided
      if (data.tableNumber) {
        await this.loadOrderDetails(data.tableNumber)
      }
      
      this.showQR = true
      this.paymentComplete = false
      this.startTimer()
    },

    async loadOrderDetails(tableNumber) {
      try {
        console.log('Loading order details for table:', tableNumber)
        
        // Get pending tickets for the table
        const ticketResponse = await this.$axios.get(`/api/ticket/table/${tableNumber}/pending`)
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
          const productData = productsResponse.data.data || productsResponse.data
          products = productData.map(product => ({
            id: product.id,
            name: product.pro_name,
            description: product.pro_desc || '',
            category: product.categ_name || 'General',
            price: product.pro_price || 0
          }))
          console.log('Products loaded for mapping:', products.length)
        } catch (error) {
          console.warn('Could not fetch products for mapping:', error)
        }

        // Process ticket lines into order items
        const ticketLines = currentTicket.ticketLines || []
        this.orderItems = ticketLines.map(line => {
          const product = products.find(p => p.id === line.productId)
          console.log(` [LINE] ${JSON.stringify(products)} `)
          console.log(` LINE ${JSON.stringify(line)} `)
          console.log(` product ${JSON.stringify(product)} `)
          return {
            id: line.id,
            name: product?.name || `Product ${line.productId}`,
            description: product?.description || line.specialInstructions || '',
            quantity: line.quantity,
            unitPrice: line.unitPrice,
            totalPrice: line.totalPrice,
            status: line.status
          }
        }).filter(item => item.name !== `Product ${item.productId}`) // Filter out items without product names

        // Set order summary from ticket data
        this.orderSummary = {
          subtotal: currentTicket.subtotal || 0,
          tax: currentTicket.tax || 0,
          taxRate: currentTicket.subtotal > 0 ? ((currentTicket.tax || 0) / currentTicket.subtotal * 100).toFixed(1) : 0,
          discount: 0, // Add discount calculation if available in your ticket model
          total: currentTicket.total || 0
        }
        
        console.log('Order details loaded:', {
          items: this.orderItems.length,
          summary: this.orderSummary
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
    }
  }
}
</script>

<style scoped>
.customer-display-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  font-family: 'Roboto', 'Arial', sans-serif;
  overflow: hidden;
}

.dcommerce-green {
  background-color: #01532B !important;
}

.dcommerce-green-text {
  color: #01532B !important;
}

/* Welcome Screen */
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
  color: #01532B;
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
  color: #01532B;
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

/* QR Payment Screen Layout */
.qr-payment-screen {
  height: 100vh;
  padding: 1.5rem;
}

.payment-layout {
  display: flex;
  height: 100%;
  gap: 2rem;
}

/* Left Side - Order Details */
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
  background: #01532B;
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
  color: #01532B;
  margin: 0 1rem;
  min-width: 40px;
  text-align: center;
}

.item-price {
  font-weight: 700;
  color: #01532B;
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
  color: #01532B;
  padding-top: 0.75rem;
  border-top: 2px solid #01532B;
  margin-top: 0.75rem;
}

.discount {
  color: #dc3545;
}

/* Right Side - QR Payment */
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
  color: #01532B;
  margin: 0;
}

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
  color: #01532B;
  line-height: 1;
}

.currency-label {
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 0.5rem;
}

.qr-container {
  margin-bottom: 1.5rem;
}

.qr-wrapper {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 45px rgba(1, 83, 43, 0.2);
  border: 3px solid #01532B;
}

.qr-code-image {
  width: 240px;
  height: 240px;
  display: block;
}

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
  color: #01532B !important;
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

/* Success Screen */
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
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
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

/* Responsive */
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
}
</style>