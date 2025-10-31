<template>
  <div class="customer-display-container">
    <!-- Welcome Screen (when no QR is showing) -->
    <div v-if="!showQR" class="welcome-screen">
      <v-row class="fill-height" no-gutters>
        <v-col cols="12" class="left-section">
          <div class="logo-section">
            <!-- Dynamic Company Logo Section -->
            <div class="company-logo-container">
              <!-- Loading State -->
              <div v-if="companyLogo.loading" class="logo-loading-container">
                <v-progress-circular
                  indeterminate
                  size="32"
                  color="#01532B"
                ></v-progress-circular>
                <p class="loading-text">ກຳລັງໂຫຼດໂລໂກ້...</p>
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
              <v-icon
                v-else
                size="80"
                class="dcommerce-green-text fallback-icon"
              >
                mdi-storefront
              </v-icon>
            </div>

            <h1 class="store-name">{{ storeName }}</h1>
            <p class="welcome-text">Customer Display</p>
            <p class="status-text">Ready for QR Payment</p>

            <!-- QR Payment Methods Preview - CONSISTENT POSITIONING -->
            <div class="payment-methods-preview">
              <p class="payment-methods-title">Accepted Payment Methods</p>
              <div class="payment-methods-container">
                <div class="payment-method-item left-qr">
                  <img
                    :src="bflQrImage"
                    alt="BFL Mobile Banking"
                    class="payment-method-logo"
                    @error="onPaymentMethodError"
                  />
                  <span class="payment-method-name">BFL Mobile</span>
                </div>
                <div class="payment-method-spacer"></div>
                <div class="payment-method-item right-qr">
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
        </v-col>
        
        <v-col cols="6" class="right-section" v-if="1==0">
          <!-- Slideshow Section for WiFi and Promotions -->
          <div class="slideshow-section">
            <div class="slideshow-container">
              <!-- WiFi QR Slide -->
              <div
                v-if="currentSlide === 'wifi'"
                class="slide wifi-slide"
                key="wifi"
              >
                <div class="slide-content">
                  <v-icon size="48" class="wifi-icon">mdi-wifi</v-icon>
                  <h3 class="slide-title">Free WiFi</h3>
                  <p class="slide-subtitle">Scan to connect to our WiFi</p>
                  <div class="qr-display">
                    <div class="qr-code-container">
                      <img
                        :src="wifiQrCodeUrl"
                        alt="WiFi QR Code"
                        class="qr-code-image"
                        @error="onQRError"
                      />
                    </div>
                  </div>
                  <div class="wifi-details">
                    <p class="wifi-name">Network: {{ wifiCredentials.ssid }}</p>
                    <p class="wifi-password" v-if="wifiCredentials.password">
                      Password: {{ wifiCredentials.password }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Promotion Slides -->
              <div
                v-else-if="currentSlide.startsWith('promo')"
                class="slide promotion-slide"
                :key="currentSlide"
              >
                <div class="slide-content">
                  <div class="promotion-content">
                    <v-icon size="48" class="promo-icon">{{
                      currentPromotion.icon
                    }}</v-icon>
                    <h3 class="slide-title">{{ currentPromotion.title }}</h3>
                    <p class="slide-subtitle">
                      {{ currentPromotion.subtitle }}
                    </p>
                    <div class="promotion-details">
                      <div
                        class="discount-badge"
                        v-if="currentPromotion.discount"
                      >
                        {{ currentPromotion.discount }}
                      </div>
                      <p class="promotion-description">
                        {{ currentPromotion.description }}
                      </p>
                      <p
                        class="promotion-validity"
                        v-if="currentPromotion.validUntil"
                      >
                        Valid until: {{ currentPromotion.validUntil }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Special Offers Slide -->
              <div
                v-else-if="currentSlide === 'offers'"
                class="slide offers-slide"
                key="offers"
              >
                <div class="slide-content">
                  <v-icon size="48" class="offers-icon"
                    >mdi-tag-multiple</v-icon
                  >
                  <h3 class="slide-title">Today's Special Offers</h3>
                  <div class="offers-grid">
                    <div
                      v-for="(offer, index) in specialOffers"
                      :key="index"
                      class="offer-card"
                    >
                      <div class="offer-discount">{{ offer.discount }}</div>
                      <div class="offer-name">{{ offer.name }}</div>
                      <div class="offer-price">{{ offer.price }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide Indicators -->
            <div class="slide-indicators">
              <div
                v-for="(slide, index) in allSlides"
                :key="index"
                class="indicator"
                :class="{ active: currentSlideIndex === index }"
              ></div>
            </div>
          </div>
        </v-col>
      </v-row>

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
              <v-icon small class="table-icon">mdi-table-furniture</v-icon>
              Table {{ qrData.tableNumber }}
            </div>
          </div>

          <!-- Order Items with proper scrolling -->
          <div class="order-items-container">
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

            <!-- No items fallback with CONSISTENT QR positioning -->
            <div v-else class="no-items-with-slideshow">
              <!-- Mini slideshow when no items - KEEPS SAME POSITIONING -->
              <div class="mini-slideshow">
                <div class="mini-slide" :key="currentSlide">
                  <!-- WiFi QR Mini Slide -->
                  <div v-if="currentSlide === 'wifi'" class="mini-wifi-slide">
                    <v-icon size="32" class="mini-wifi-icon">mdi-wifi</v-icon>
                    <p class="mini-slide-title">Free WiFi Available</p>
                    <div class="mini-qr-container">
                      <img
                        :src="wifiQrCodeUrl"
                        alt="WiFi QR Code"
                        class="mini-qr-code"
                        @error="onQRError"
                      />
                    </div>
                    <p class="mini-wifi-name">{{ wifiCredentials.ssid }}</p>
                  </div>

                  <!-- Promotion Mini Slide -->
                  <div
                    v-else-if="currentSlide.startsWith('promo')"
                    class="mini-promo-slide"
                  >
                    <v-icon size="32" class="mini-promo-icon">{{
                      currentPromotion.icon
                    }}</v-icon>
                    <p class="mini-slide-title">{{ currentPromotion.title }}</p>
                    <div class="mini-discount-badge">
                      {{ currentPromotion.discount }}
                    </div>
                    <p class="mini-promo-desc">
                      {{ currentPromotion.description }}
                    </p>
                  </div>

                  <!-- Offers Mini Slide -->
                  <div
                    v-else-if="currentSlide === 'offers'"
                    class="mini-offers-slide"
                  >
                    <v-icon size="32" class="mini-offers-icon"
                      >mdi-tag-multiple</v-icon
                    >
                    <p class="mini-slide-title">Today's Specials</p>
                    <div class="mini-offers-list">
                      <div
                        v-for="(offer, index) in specialOffers.slice(0, 2)"
                        :key="index"
                        class="mini-offer-item"
                      >
                        <span class="mini-offer-discount">{{
                          offer.discount
                        }}</span>
                        <span class="mini-offer-name">{{ offer.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="loading-orders-text">Loading order details...</p>
            </div>
          </div>

          <!-- Order Summary - Fixed at bottom -->
          <div class="order-summary">
            <div class="summary-line">
              <span class="summary-label">Subtotal:</span>
              <span class="summary-value">{{
                formatPrice(orderSummary.subtotal)
              }}</span>
            </div>
            <div class="summary-line" v-if="orderSummary.tax > 0">
              <span class="summary-label"
                >Tax ({{ orderSummary.taxRate }}%):</span
              >
              <span class="summary-value">{{
                formatPrice(orderSummary.tax)
              }}</span>
            </div>
            <div class="summary-line" v-if="orderSummary.discount > 0">
              <span class="summary-label">Discount:</span>
              <span class="summary-value discount"
                >-{{ formatPrice(orderSummary.discount) }}</span
              >
            </div>
            <div class="summary-total">
              <span class="total-label">Total:</span>
              <span class="total-value">{{ formatPrice(qrData.amount) }}</span>
            </div>
          </div>
        </div>

        <!-- Right Side - QR Payment - CONSISTENT POSITIONING -->
        <div class="payment-section">
          <div class="payment-content">
            <div class="payment-header">
              <h2 class="payment-title">Scan to Pay</h2>
            </div>

            <!-- Amount Display -->
            <div class="amount-display">
              <div class="amount-label">Total Amount</div>
              <div class="amount-value">{{ formatPrice(qrData.amount) }}</div>
              <div class="currency-label">Lao Kip (LAK)</div>
            </div>

            <!-- Large QR Code with Payment Methods - CONSISTENT LEFT-RIGHT POSITIONING -->
            <div class="qr-container">
              <div class="qr-wrapper">
                <div class="qr-payment-methods">
                  <!-- LEFT QR -->
                  <div class="qr-method-item left-qr-payment">
                    <img
                      :src="bflQrImage"
                      alt="BFL Mobile Banking"
                      class="qr-payment-method-logo"
                      @error="onPaymentMethodError"
                    />
                    <span class="qr-method-label">BFL Mobile</span>
                  </div>
                  
                  <!-- CENTER SPACER -->
                  <div class="qr-spacer"></div>
                  
                  <!-- RIGHT QR -->
                  <div class="qr-method-item right-qr-payment">
                    <img
                      :src="bcelQrImage"
                      alt="BCEL Mobile Banking"
                      class="qr-payment-method-logo"
                      @error="onPaymentMethodError"
                    />
                    <span class="qr-method-label">BCEL Mobile</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Instructions -->
            <div class="qr-instructions">
              <div class="instruction-steps">
                <div class="step">
                  <v-icon class="step-icon">mdi-numeric-1-circle</v-icon>
                  <span class="step-text">Open banking app</span>
                </div>
                <div class="step">
                  <v-icon class="step-icon">mdi-numeric-2-circle</v-icon>
                  <span class="step-text">Scan QR code</span>
                </div>
                <div class="step">
                  <v-icon class="step-icon">mdi-numeric-3-circle</v-icon>
                  <span class="step-text">Confirm payment</span>
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
                width="3"
                class="status-spinner"
              ></v-progress-circular>
              <v-icon v-else color="success" size="20" class="status-icon">
                mdi-check-circle
              </v-icon>
              <span
                class="status-text"
                :class="
                  paymentComplete ? 'success--text' : 'dcommerce-green-text'
                "
              >
                {{
                  paymentComplete
                    ? 'Payment Received!'
                    : 'Waiting for payment...'
                }}
              </span>
            </div>

            <!-- Timer -->
            <div
              class="timer-display"
              v-if="timeRemaining > 0 && !paymentComplete"
            >
              <v-icon small class="timer-icon">mdi-timer-outline</v-icon>
              <span class="timer-text"
                >Expires in: {{ formatTime(timeRemaining) }}</span
              >
            </div>
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
        <v-icon size="80" color="white" class="success-icon">
          mdi-check-circle
        </v-icon>
        <h2 class="success-title">Payment Successful!</h2>
        <div class="success-amount">{{ formatPrice(qrData.amount) }}</div>
        <p class="success-message">Thank you for your payment</p>
        <p class="success-submessage">Please keep your receipt</p>

        <div class="success-timer">
          <v-progress-linear
            :value="successProgress"
            color="white"
            background-color="rgba(255,255,255,0.3)"
            height="4"
            rounded
          ></v-progress-linear>
          <p class="success-countdown">
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
        orderItems: [],
        orderSummary: {},
      },
      paymentComplete: false,
      timeRemaining: 300,
      timer: null,
      showCloseButton: process.env.NODE_ENV === 'development',

      successTimeRemaining: 5000,
      successProgress: 0,
      successTimer: null,

      // Sample order data
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

      // Slideshow functionality
      currentSlideIndex: 0,
      slideTimer: null,
      slideInterval: 5000, // 5 seconds per slide

      // WiFi credentials
      wifiCredentials: {
        ssid: 'DCOMMERCE_FREE_WIFI',
        password: 'welcome2024',
        security: 'WPA',
      },

      // Promotions data
      promotions: [
        {
          id: 'promo1',
          title: 'Happy Hour Special',
          subtitle: 'All beverages 30% off',
          description: 'Enjoy 30% discount on all drinks and beverages',
          discount: '30% OFF',
          icon: 'mdi-glass-cocktail',
          validUntil: '6:00 PM',
        },
        {
          id: 'promo2',
          title: 'Student Discount',
          subtitle: 'Show your student ID',
          description: '15% off for all students with valid ID',
          discount: '15% OFF',
          icon: 'mdi-school',
          validUntil: 'Daily',
        },
        {
          id: 'promo3',
          title: 'Weekend Breakfast',
          subtitle: 'Saturday & Sunday special',
          description: 'Buy 2 breakfast items, get 1 free coffee',
          discount: 'Buy 2 Get 1',
          icon: 'mdi-coffee',
          validUntil: 'Weekends',
        },
      ],

      // Special offers
      specialOffers: [
        { name: 'Lao Coffee', discount: '20%', price: '12,000 ₭' },
        { name: 'Fresh Fruit Smoothie', discount: '15%', price: '18,000 ₭' },
        { name: 'Traditional Noodle Soup', discount: '10%', price: '25,000 ₭' },
        { name: 'Grilled Fish', discount: '25%', price: '45,000 ₭' },
      ],
    }
  },

  computed: {
    // Generate WiFi QR code URL
    wifiQrCodeUrl() {
      const wifiString = `WIFI:T:${this.wifiCredentials.security};S:${this.wifiCredentials.ssid};P:${this.wifiCredentials.password};H:false;`
      const encodedString = encodeURIComponent(wifiString)
      return `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodedString}&format=png&margin=10&color=01532B&bgcolor=ffffff`
    },

    // All slides array
    allSlides() {
      const slides = ['wifi']
      this.promotions.forEach((promo) => slides.push(`promo-${promo.id}`))
      slides.push('offers')
      return slides
    },

    // Current slide
    currentSlide() {
      return this.allSlides[this.currentSlideIndex] || 'wifi'
    },

    // Current promotion for promo slides
    currentPromotion() {
      if (this.currentSlide.startsWith('promo')) {
        const promoId = this.currentSlide.replace('promo-', '')
        return (
          this.promotions.find((p) => p.id === promoId) || this.promotions[0]
        )
      }
      return this.promotions[0]
    },

    qrCodeUrl() {
      if (!this.qrData.qrString) return ''
      const encodedString = encodeURIComponent(
        this.qrData.qrString.replace(/\s/g, '')
      )
      return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedString}&format=png&margin=15&color=01532B&bgcolor=ffffff`
    },

    logoUrl() {
      if (this.companyLogo.url) {
        return this.companyLogo.url
      }
      return null
    },

    dcommerceLogoUrl() {
      try {
        return require('~/assets/image/Dcommerce-Logo_DC.png')
      } catch {
        return '/static/images/dcommerce-logo.png'
      }
    },

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
    await this.loadQrPaymentImages()
    await this.loadCompanyLogo()
    this.startSlideshow()
  },

  beforeDestroy() {
    this.cleanup()
  },

  methods: {
    // Slideshow methods
    startSlideshow() {
      this.slideTimer = setInterval(() => {
        this.nextSlide()
      }, this.slideInterval)
    },

    stopSlideshow() {
      if (this.slideTimer) {
        clearInterval(this.slideTimer)
        this.slideTimer = null
      }
    },

    nextSlide() {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.allSlides.length
    },

    async loadCompanyLogo() {
      this.companyLogo.loading = true
      this.companyLogo.error = false

      try {
        const response = await this.$axios.get('/api/public/company/findAll')
        const companies = Array.isArray(response.data) ? response.data : []

        const companyWithImage = companies.find(
          (company) => company.profile_image_path && company.isActive
        )

        if (companyWithImage) {
          this.companyLogo.company = companyWithImage
          const baseUrl = this.$axios.defaults.baseURL || ''
          this.companyLogo.url = `${baseUrl}/${companyWithImage.profile_image_path}`
        }
      } catch (error) {
        console.error('Error loading company logo:', error)
        this.companyLogo.error = true
      } finally {
        this.companyLogo.loading = false
      }
    },

    async loadQrPaymentImages() {
      try {
        const bflModule = await import('~/assets/image/qr_code/BFL_QR.jpeg')
        const bcelModule = await import('~/assets/image/qr_code/BCEL_QR.jpeg')

        this.bflQrImage = bflModule.default
        this.bcelQrImage = bcelModule.default
      } catch (error) {
        console.warn('Failed to load QR payment images:', error)
        this.bflQrImage = '/assets/image/qr_code/BFL_QR.jpeg'
        this.bcelQrImage = '/assets/image/qr_code/BCEL_QR.jpeg'
      }
    },

    onPaymentMethodError(event) {
      console.warn('Payment method image failed to load:', event.target.src)
      event.target.style.display = 'none'

      const parentItem = event.target.closest(
        '.payment-method-item, .qr-payment-method'
      )
      if (parentItem) {
        const nameSpan = parentItem.querySelector(
          '.payment-method-name, .qr-payment-method-text'
        )
        if (nameSpan) {
          nameSpan.style.marginTop = '0'
          const fallbackIcon = document.createElement('div')
          fallbackIcon.innerHTML = '💳'
          fallbackIcon.style.fontSize = '24px'
          fallbackIcon.style.marginBottom = '8px'
          event.target.parentNode.insertBefore(fallbackIcon, event.target)
        }
      }
    },

    onLogoError() {
      console.warn('Company logo failed to load')
      this.companyLogo.url = null
      this.companyLogo.error = true
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

      if (data.ticketId) {
        await this.loadOrderDetailsByTicketId(data.ticketId)
      } else if (data.tableNumber) {
        await this.loadOrderDetails(data.tableNumber)
      }

      this.showQR = true
      this.paymentComplete = false
      this.stopSlideshow() // Stop slideshow when showing QR
      this.startTimer()
    },

    async loadOrderDetailsByTicketId(ticketId) {
      try {
        console.log('Loading order details for ticket ID:', ticketId)

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

        const ticketLinesResponse = await this.$axios.get(
          `/api/ticketLine/ticket/${ticketId}`
        )
        const ticketLines =
          ticketLinesResponse.data.data || ticketLinesResponse.data || []

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

        const currentTicket = tickets[0]
        console.log('Current ticket:', currentTicket)

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

        const ticketLines = currentTicket.ticketLines || []
        this.orderItems = ticketLines
          .map((line) => {
            const product = products.find((p) => p.id === line.productId)
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
          .filter((item) => item.name !== `Product ${item.productId}`)

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
          discount: 0,
          total: currentTicket.total || 0,
        }

        console.log('Order details loaded:', {
          items: this.orderItems.length,
          summary: this.orderSummary,
        })
      } catch (error) {
        console.error('Error loading order details:', error)
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
      this.startSlideshow() // Restart slideshow when hiding QR
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
      this.stopSlideshow()
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
   🎨 BASE STYLES - IMPROVED
   ======================================== */

.customer-display-container {
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  font-family: 'Roboto', 'Arial', sans-serif;
  overflow: hidden;
  position: relative;
}

.dcommerce-green {
  background-color: #01532b !important;
}

.dcommerce-green-text {
  color: #01532b !important;
}

/* ========================================
   🏠 WELCOME SCREEN - CONSISTENT LAYOUT
   ======================================== */

.welcome-screen {
  height: 100vh;
  position: relative;
}

.fill-height {
  height: 100vh;
}

.left-section,
.right-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.left-section {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.right-section {
  justify-content: center;
  align-items: stretch;
}

.logo-section {
  width: 100%;
  max-width: 500px;
}

.company-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
}

.company-logo-image {
  max-width: 160px;
  max-height: 120px;
  width: auto;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
}

.logo-loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 160px;
  border: 2px dashed #ddd;
  border-radius: 8px;
  background-color: #fafafa;
}

.loading-text {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
}

.fallback-icon {
  margin-bottom: 1rem;
}

.store-name {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #01532b;
  margin: 1rem 0;
  letter-spacing: -1px;
  word-wrap: break-word;
  hyphens: auto;
}

.welcome-text {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #6c757d;
  margin: 0.5rem 0;
}

.status-text {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #01532b;
  font-weight: 500;
  margin: 0.5rem 0;
}

/* ========================================
   🏦 PAYMENT METHODS - CONSISTENT POSITIONING
   ======================================== */

.payment-methods-preview {
  margin-top: 2rem;
  text-align: center;
  width: 100%;
}

.payment-methods-title {
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 500;
  color: #01532b;
  margin-bottom: 1.5rem;
}

.payment-methods-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

.payment-method-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 180px;
  height: 220px;
  border: 2px solid rgba(1, 83, 43, 0.1);
}

.payment-method-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border-color: #01532b;
}

.left-qr {
  justify-self: flex-start;
}

.right-qr {
  justify-self: flex-end;
}

.payment-method-spacer {
  width: 60px;
  height: 1px;
  flex-shrink: 0;
}

.payment-method-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.payment-method-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #01532b;
  text-align: center;
}

/* ========================================
   🎭 SLIDESHOW SECTION
   ======================================== */

.slideshow-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.slideshow-container {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideIn 0.5s ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-content {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 500px;
  height: auto;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #01532b;
  margin: 1rem 0;
}

.slide-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
}

/* WiFi Slide Styles */
.wifi-slide .wifi-icon {
  color: #01532b;
  margin-bottom: 1rem;
}

.qr-display {
  margin: 2rem 0;
}

.qr-code-container {
  display: inline-block;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.15);
  border: 3px solid #01532b;
}

.qr-code-image {
  width: 200px;
  height: 200px;
  display: block;
}

.wifi-details {
  margin-top: 1.5rem;
}

.wifi-name,
.wifi-password {
  font-size: 1.1rem;
  font-weight: 600;
  color: #01532b;
  margin: 0.5rem 0;
}

/* Promotion Slide Styles */
.promotion-slide .promo-icon {
  color: #e74c3c;
  margin-bottom: 1rem;
}

.promotion-details {
  margin-top: 1.5rem;
}

.discount-badge {
  display: inline-block;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.promotion-description {
  font-size: 1.1rem;
  color: #495057;
  margin: 1rem 0;
}

.promotion-validity {
  font-size: 0.9rem;
  color: #6c757d;
  font-style: italic;
}

/* Offers Slide Styles */
.offers-slide .offers-icon {
  color: #f39c12;
  margin-bottom: 1rem;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.offer-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  border: 2px solid #dee2e6;
  transition: transform 0.2s ease;
}

.offer-card:hover {
  transform: translateY(-2px);
  border-color: #01532b;
}

.offer-discount {
  background: #01532b;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.offer-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.5rem;
}

.offer-price {
  font-size: 1rem;
  font-weight: 700;
  color: #01532b;
}

/* Slide Indicators */
.slide-indicators {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 1rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(1, 83, 43, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.indicator.active {
  background: #01532b;
  transform: scale(1.2);
}

.indicator:hover {
  background: #01532b;
  transform: scale(1.1);
}

/* ========================================
   💳 QR PAYMENT SCREEN LAYOUT
   ======================================== */

.qr-payment-screen {
  height: 100vh;
  padding: 1rem;
  overflow: hidden;
}

.payment-layout {
  display: flex;
  height: 100%;
  gap: 1rem;
  min-height: 0;
}

/* ========================================
   📋 LEFT SIDE - ORDER DETAILS
   ======================================== */

.order-section {
  flex: 1;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
}

.order-header {
  padding: 1rem 1.5rem;
  background: #01532b;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.order-title {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 600;
  margin: 0;
}

.table-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.table-icon {
  margin-right: 0 !important;
}

.order-items-container {
  flex: 1;
  padding: 1rem 1.5rem;
  overflow-y: auto;
  min-height: 0;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.order-item {
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  transition: background-color 0.2s;
  min-height: 60px;
}

.order-item:hover {
  background-color: #f8f9fa;
}

.item-details {
  flex: 1;
  min-width: 0;
  margin-right: 0.5rem;
}

.item-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #212529;
  margin-bottom: 0.2rem;
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
}

.item-description {
  font-size: 0.75rem;
  color: #6c757d;
  line-height: 1.3;
  word-wrap: break-word;
  hyphens: auto;
  overflow-wrap: break-word;
}

.item-quantity {
  font-weight: 600;
  color: #01532b;
  margin: 0 0.75rem;
  min-width: 35px;
  text-align: center;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.item-price {
  font-weight: 700;
  color: #01532b;
  font-size: 0.9rem;
  min-width: 70px;
  text-align: right;
  flex-shrink: 0;
}

/* ========================================
   🎭 MINI SLIDESHOW (No Order Items)
   ======================================== */

.no-items-with-slideshow {
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.mini-slideshow {
  width: 100%;
  margin-bottom: 1rem;
}

.mini-slide {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

.mini-slide-title {
  font-size: 1rem;
  font-weight: 600;
  color: #01532b;
  margin: 0.5rem 0;
}

/* Mini WiFi Slide */
.mini-wifi-slide .mini-wifi-icon {
  color: #01532b;
  margin-bottom: 0.5rem;
}

.mini-qr-container {
  margin: 1rem 0;
}

.mini-qr-code {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  border: 2px solid #01532b;
}

.mini-wifi-name {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0.5rem 0;
}

/* Mini Promo Slide */
.mini-promo-slide .mini-promo-icon {
  color: #e74c3c;
  margin-bottom: 0.5rem;
}

.mini-discount-badge {
  background: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0.5rem 0;
  display: inline-block;
}

.mini-promo-desc {
  font-size: 0.8rem;
  color: #6c757d;
  margin: 0.5rem 0;
}

/* Mini Offers Slide */
.mini-offers-slide .mini-offers-icon {
  color: #f39c12;
  margin-bottom: 0.5rem;
}

.mini-offers-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.mini-offer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.mini-offer-discount {
  background: #01532b;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
}

.mini-offer-name {
  font-size: 0.8rem;
  color: #495057;
  flex: 1;
  text-align: left;
  margin-left: 0.5rem;
}

.loading-orders-text {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0;
}

.order-summary {
  padding: 1rem 1.5rem;
  border-top: 2px solid #e9ecef;
  background: #f8f9fa;
  flex-shrink: 0;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
}

.summary-label {
  color: #495057;
}

.summary-value {
  font-weight: 500;
  color: #212529;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 700;
  color: #01532b;
  padding-top: 0.75rem;
  border-top: 2px solid #01532b;
  margin-top: 0.5rem;
}

.total-label,
.total-value {
  font-weight: 700;
}

.discount {
  color: #dc3545;
}

/* ========================================
   💰 RIGHT SIDE - QR PAYMENT WITH CONSISTENT POSITIONING
   ======================================== */

.payment-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.payment-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 1rem;
  overflow-y: auto;
}

.payment-header {
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.payment-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  color: #01532b;
  margin: 0;
}

.amount-display {
  background: white;
  padding: 1.2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.15);
  margin-bottom: 1.5rem;
  min-width: 240px;
  flex-shrink: 0;
}

.amount-label {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.3rem;
}

.amount-value {
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 700;
  color: #01532b;
  line-height: 1;
  word-wrap: break-word;
}

.currency-label {
  font-size: 0.8rem;
  color: #6c757d;
  margin-top: 0.3rem;
}

/* ========================================
   📱 QR CODE - CONSISTENT LEFT-RIGHT POSITIONING
   ======================================== */

.qr-container {
  margin-bottom: 1.5rem;
  flex-shrink: 0;
  width: 100%;
}

.qr-wrapper {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 45px rgba(1, 83, 43, 0.2);
  border: 3px solid #01532b;
}

.qr-payment-methods {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.qr-method-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
}

.left-qr-payment {
  justify-self: flex-start;
}

.right-qr-payment {
  justify-self: flex-end;
}

.qr-spacer {
  width: 80px;
  height: 1px;
  flex-shrink: 0;
}

.qr-payment-method-logo {
  width: 160px;
  height: 160px;
  object-fit: contain;
  border-radius: 12px;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.75rem;
}

.qr-payment-method-logo:hover {
  transform: scale(1.05);
}

.qr-method-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #01532b;
  text-align: center;
}

/* ========================================
   📝 INSTRUCTIONS & STATUS
   ======================================== */

.qr-instructions {
  margin-bottom: 1.5rem;
  flex-shrink: 0;
}

.instruction-steps {
  display: flex;
  justify-content: space-around;
  max-width: 360px;
  margin: 0 auto;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #6c757d;
  text-align: center;
  min-width: 80px;
}

.step-icon {
  color: #01532b !important;
  margin-bottom: 0.3rem;
}

.step-text {
  word-wrap: break-word;
  hyphens: auto;
}

.payment-status {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
  flex-shrink: 0;
}

.status-spinner,
.status-icon {
  flex-shrink: 0;
}

.status-text {
  font-weight: 600;
  font-size: 0.9rem;
}

.timer-display {
  font-size: 0.8rem;
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  flex-shrink: 0;
}

.timer-icon {
  flex-shrink: 0;
}

.timer-text {
  font-weight: 500;
}

/* ========================================
   ✅ SUCCESS SCREEN
   ======================================== */

.success-overlay {
  background: rgba(40, 167, 69, 0.95) !important;
  z-index: 9999;
}

.success-content {
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
}

.success-icon {
  animation: successPulse 1s ease-in-out;
  margin-bottom: 1rem;
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
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.success-amount {
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
  word-wrap: break-word;
}

.success-message {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.success-submessage {
  font-size: 0.9rem;
  opacity: 0.9;
}

.success-timer {
  max-width: 280px;
  margin: 1.5rem auto 0;
}

.success-countdown {
  font-size: 0.8rem;
  margin-top: 0.5rem;
  opacity: 0.9;
}

/* ========================================
   🔥 POWERED BY DCOMMERCE
   ======================================== */

.powered-by-welcome {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.powered-by-container-welcome {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.95);
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.powered-by-text-welcome {
  font-size: 0.7rem;
  color: #6c757d;
  font-weight: 400;
}

.dcommerce-logo-welcome {
  height: 16px;
  width: auto;
  object-fit: contain;
}

.dcommerce-text-welcome {
  font-size: 0.8rem;
  font-weight: 700;
  color: #01532b;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.3px;
}

.powered-by-qr {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
}

.powered-by-container-qr {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 12px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
}

.powered-by-text-qr {
  font-size: 0.6rem;
  color: #6c757d;
  font-weight: 400;
}

.dcommerce-logo-qr {
  height: 14px;
  width: auto;
  object-fit: contain;
}

.dcommerce-text-qr {
  font-size: 0.7rem;
  font-weight: 700;
  color: #01532b;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.3px;
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

/* ========================================
   📱 RESPONSIVE DESIGN
   ======================================== */

@media (max-width: 1200px) {
  .payment-layout {
    flex-direction: column;
    gap: 0.8rem;
  }

  .order-section {
    max-height: 45vh;
    min-height: 300px;
  }

  .payment-section {
    min-height: 50vh;
  }

  .qr-payment-method-logo {
    width: 140px;
    height: 140px;
  }

  .payment-method-logo {
    width: 100px;
    height: 100px;
  }

  .qr-code-image {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 768px) {
  .welcome-screen .v-row {
    flex-direction: column;
  }
  
  .left-section,
  .right-section {
    height: 50vh;
    padding: 1rem;
  }

  .qr-payment-screen {
    padding: 0.5rem;
  }

  .payment-layout {
    gap: 0.5rem;
  }

  .payment-methods-container {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .payment-method-spacer {
    display: none;
  }

  .qr-payment-methods {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .qr-spacer {
    display: none;
  }

  .qr-payment-method-logo {
    width: 120px;
    height: 120px;
  }

  .payment-method-logo {
    width: 80px;
    height: 80px;
  }

  .qr-code-image {
    width: 160px;
    height: 160px;
  }

  .offers-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .left-section,
  .right-section {
    padding: 0.5rem;
  }

  .qr-payment-method-logo {
    width: 100px;
    height: 100px;
  }

  .payment-method-logo {
    width: 70px;
    height: 70px;
  }

  .qr-code-image {
    width: 140px;
    height: 140px;
  }

  .slide-content {
    padding: 2rem;
    min-height: 350px;
  }
}

/* ========================================
   🔧 ACCESSIBILITY & CUSTOM SCROLLBAR
   ======================================== */

.payment-method-item:focus,
.qr-payment-method-logo:focus,
.indicator:focus {
  outline: 2px solid #01532b;
  outline-offset: 2px;
}

@media (prefers-contrast: high) {
  .payment-method-item,
  .order-item,
  .slide-content,
  .offer-card {
    border: 2px solid #000;
  }
}

@media (prefers-reduced-motion: reduce) {
  .payment-method-item:hover,
  .qr-payment-method-logo:hover,
  .offer-card:hover {
    transform: none;
  }

  .slide,
  .mini-slide,
  .success-icon {
    animation: none;
  }
}

.order-items-container::-webkit-scrollbar {
  width: 6px;
}

.order-items-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.order-items-container::-webkit-scrollbar-thumb {
  background: #01532b;
  border-radius: 3px;
}

.order-items-container::-webkit-scrollbar-thumb:hover {
  background: #013926;
}

.order-items-container {
  scrollbar-width: thin;
  scrollbar-color: #01532b #f1f1f1;
}
</style>