<template>
  <div class="customer-display-container">
    <WelcomeScreen v-if="!showQR" :parsed-company-info="parsedCompanyInfo" :promotions="promotions"
      :special-offers="specialOffers" :wifi-credentials="wifiCredentials" :logo-url="logoUrl"
      :company-logo="companyLogo" :store-name="storeName" :bcel-qr-image="bcelQrImage" :bcel-qr-image2="bcelQrImage2"
      :company-q-r-image-url="companyQRImageUrl" :company-q-r-image-url2="companyQRImageUrl2" />

    <div v-if="showQR" class="qr-payment-screen">
      <div class="payment-layout">
        <OrderSection :items="orderItems" :summary="orderSummary" :qr-data="qrData" :display-discount="displayDiscount"
          :display-change="displayChange" />

        <PaymentSection :qr-data="qrData" :parsed-company-info="parsedCompanyInfo" :converted-amounts="convertedAmounts"
          :time-remaining="timeRemaining" :company-q-r-image-url="companyQRImageUrl" :bcel-qr-image="bcelQrImage"
          :payment-complete="paymentComplete" />
      </div>

      <div class="powered-by-qr">
        <div class="powered-by-container-qr">
          <span class="powered-by-text-qr">Powered by</span>
          <img :src="dcommerceLogoUrl" alt="DCOMMERCE" class="dcommerce-logo-qr" />
          <span class="dcommerce-text-qr">DCOMMERCE</span>
        </div>
      </div>
    </div>

    <SuccessOverlay v-if="paymentComplete" :amount="qrData.amount" :progress="successProgress"
      :success-time-remaining="successTimeRemaining" />
  </div>
</template>

<script>
import WelcomeScreen from '~/components/customer/WelcomeScreen.vue'
import OrderSection from '~/components/customer/OrderSection.vue'
import PaymentSection from '~/components/customer/PaymentSection.vue'
import SuccessOverlay from '~/components/customer/SuccessOverlay.vue'

export default {
  name: 'CustomerScreen',
  layout: 'empty',
  components: {
    WelcomeScreen,
    OrderSection,
    PaymentSection,
    SuccessOverlay,
  },
  data() {
    return {
      bcelQrImage: null,
      bcelQrImage2: null,
      showQR: false,
      paymentComplete: false,
      qrData: {
        amount: 0,
        tableNumber: '',
        qrString: '',
        discount: 0,
        change: 0,
      },
      orderItems: [],
      orderSummary: {
        subtotal: 0,
        tax: 0,
        taxRate: 8.5,
        discount: 0,
        change: 0,
      },
      timeRemaining: 300,
      timer: null,
      successTimeRemaining: 5000,
      successProgress: 0,
      successTimer: null,
      companyLogo: { url: null, company: null, loading: false, error: false },
      wifiCredentials: {
        ssid: 'DCOMMERCE_FREE_WIFI',
        password: 'welcome2024',
        security: 'WPA',
      },
      promotions: [
        {
          id: 'promo1',
          title: 'Happy Hour Special',
          subtitle: 'All beverages 30% off',
          description: 'Enjoy 30% discount',
          discount: '30% OFF',
          icon: 'mdi-glass-cocktail',
          validUntil: '6:00 PM',
        },
        {
          id: 'promo2',
          title: 'Student Discount',
          subtitle: 'Show student ID',
          description: '15% off for students',
          discount: '15% OFF',
          icon: 'mdi-school',
          validUntil: 'Daily',
        },
        {
          id: 'promo3',
          title: 'Weekend Breakfast',
          subtitle: 'Sat & Sun special',
          description: 'Buy 2, get 1 free coffee',
          discount: 'Buy 2 Get 1',
          icon: 'mdi-coffee',
          validUntil: 'Weekends',
        },
      ],
      specialOffers: [
        { name: 'Lao Coffee', discount: '20%', price: '12,000 ₭' },
        { name: 'Fresh Fruit Smoothie', discount: '15%', price: '18,000 ₭' },
        { name: 'Traditional Noodle Soup', discount: '10%', price: '25,000 ₭' },
        { name: 'Grilled Fish', discount: '25%', price: '45,000 ₭' },
      ],
      currencyList: [],
    }
  },
  computed: {
    convertedAmounts() {
      if (!this.qrData.amount || !this.currencyList) return []

      const symbols = {
        'LAK': '₭',
        'THB': '฿',
        'USD': '$',
      };

      return this.currencyList
        .filter((c) => c.isActive && !c.isLocalCCY)
        .map((curr) => {
          // ✅ Handle both local_to_foreign and foreign_to_local directions
          let val = 0
          if (curr.exchangeDirection === 'foreign_to_local') {
            val = this.qrData.amount / curr.rate
          } else {
            val = this.qrData.amount * curr.rate
          }

          const symbol = symbols[curr.code] || curr.code;
          const formatted = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: curr.code === 'THB' ? 0 : 2,
            maximumFractionDigits: 2,
          }).format(val);

          return {
            code: curr.code,
            value: `${formatted} ${symbol}`,
          }
        })
    },
    parsedCompanyInfo() {
      if (this.$route.query.company) {
        try {
          return JSON.parse(decodeURIComponent(this.$route.query.company))
        } catch (e) {
          return null
        }
      }
      return null
    },
    parsedCurrencies() {
      if (this.$route.query.currencies) {
        try {
          return JSON.parse(decodeURIComponent(this.$route.query.currencies))
        } catch (e) {
          return []
        }
      }
      return []
    },
    companyQRImageUrl() {
      return this.parsedCompanyInfo?.qrCode || null
    },
    companyQRImageUrl2() {
      return this.parsedCompanyInfo?.qrCode2 || null
    },
    logoUrl() {
      // Prioritize the full URL passed from the POS in the query string
      if (this.parsedCompanyInfo?.ticketLogo) {
        return this.parsedCompanyInfo.ticketLogo
      }
      // Fallback to the logo fetched from the API
      if (this.companyLogo.url) return this.companyLogo.url

      // Secondary fallback using the profile_image_path from query string
      if (this.parsedCompanyInfo?.profile_image_path) {
        const baseUrl = (this.$axios.defaults.baseURL || '').replace(/\/+$/, '')
        const path = this.parsedCompanyInfo.profile_image_path.replace(/^\/+/, '')
        return `${baseUrl}/${path}`
      }
      return null
    },
    storeName() {
      return this.companyLogo.company?.name || 'DCOMMERCE CAFE'
    },
    displayDiscount() {
      return this.orderSummary.discount || this.qrData.discount || 0
    },
    displayChange() {
      return this.orderSummary.change || this.qrData.change || 0
    },
    dcommerceLogoUrl() {
      try {
        return require('~/assets/image/Dcommerce-Logo_DC.png')
      } catch {
        return '/static/images/dcommerce-logo.png'
      }
    },
  },
  mounted() {
    window.addEventListener('storage', this.handleStorageChange)
    this.checkForExistingQR() // FIXED: Named correctly to match methods
    this.loadCompanyLogo()
    
    // Set open state for POS sync
    localStorage.setItem('customerDisplayOpen', 'true')
    window.addEventListener('beforeunload', this.handleUnload)

    // Initialize currencyList from URL if present
    if (this.parsedCurrencies && this.parsedCurrencies.length > 0) {
      this.currencyList = this.parsedCurrencies
    }
  },
  beforeDestroy() {
    this.cleanup()
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === 'customerDisplay' && event.newValue) {
        try {
          this.handleDisplayMessage(JSON.parse(event.newValue))
        } catch (e) {
          console.error('Storage parse error', e)
        }
      }
    },
    checkForExistingQR() {
      // FIXED: Renamed to match mounted()
      const data = localStorage.getItem('customerDisplay')
      if (data) {
        try {
          this.handleDisplayMessage(JSON.parse(data))
        } catch (e) { }
      }
    },
    handleDisplayMessage(message) {
      if (message.type === 'SHOW_QR_PAYMENT') this.displayQR(message.data)
      else if (message.type === 'HIDE_QR_PAYMENT') this.hideQR()
      else if (message.type === 'PAYMENT_SUCCESS') this.showPaymentSuccess()
    },
    async displayQR(data) {
      this.qrData = { ...data, timestamp: Date.now() }
      this.qrData = { ...data, timestamp: Date.now() }

      // Ensure we capture the currency list from the POS message
      if (data.currencyList) {
        this.currencyList = data.currencyList
      }

      if (data.orderItems && data.orderItems.length > 0) {
        this.orderItems = data.orderItems
      } else if (data.ticketId) {
        await this.loadOrderDetailsByTicketId(data.ticketId)
      } else if (data.tableNumber) {
        await this.loadOrderDetails(data.tableNumber)
      }

      this.orderSummary = data.orderSummary || {
        subtotal: data.subtotal || data.amount,
        tax: data.tax || 0,
        discount: data.discount || 0,
        change: data.change || 0,
      }

      this.showQR = true
      this.paymentComplete = false
      this.startTimer()
    },
    async loadOrderDetailsByTicketId(id) {
      try {
        const res = await this.$axios.get(`/api/ticketLine/ticket/${id}`)
        this.orderItems = res.data.data || res.data
      } catch (e) {
        console.error('Ticket line error', e)
      }
    },
    async loadOrderDetails(tableNumber) {
      try {
        const res = await this.$axios.get(
          `/api/ticket/table/${tableNumber}/pending`
        )
        const tickets = res.data || []
        if (tickets.length > 0) {
          this.orderItems = tickets[0].ticketLines || []
        }
      } catch (e) {
        console.error('Table details error', e)
      }
    },
    startTimer() {
      this.stopTimer()
      this.timeRemaining = 300
      this.timer = setInterval(() => {
        this.timeRemaining--
        if (this.timeRemaining <= 0) this.hideQR()
      }, 1000)
    },
    stopTimer() {
      if (this.timer) clearInterval(this.timer)
    },
    showPaymentSuccess() {
      this.paymentComplete = true
      this.stopTimer()
      this.startSuccessTimer()
    },
    startSuccessTimer() {
      this.successTimeRemaining = 5000
      this.successTimer = setInterval(() => {
        this.successTimeRemaining -= 100
        this.successProgress = ((5000 - this.successTimeRemaining) / 5000) * 100
        if (this.successTimeRemaining <= 0) this.hideQR()
      }, 100)
    },
    stopSuccessTimer() {
      if (this.successTimer) clearInterval(this.successTimer)
    },
    hideQR() {
      this.showQR = false
      this.paymentComplete = false
      this.stopTimer()
      this.stopSuccessTimer()
      localStorage.removeItem('customerDisplay')
    },
    async loadCompanyLogo() {
      try {
        this.companyLogo.loading = true
        const res = await this.$axios.get('/api/public/company/findAll')
        // Prioritize active company with profile image to ensure we get the logo
        let comp = res.data.find((c) => c.isActive && c.profile_image_path)

        // If not found, just get ANY active company for the QR code
        if (!comp) {
          comp = res.data.find((c) => c.isActive)
        }

        if (comp) {
          this.companyLogo.company = comp
          const baseUrl = (this.$axios.defaults.baseURL || '').replace(/\/+$/, '')

          // Set profile logo
          if (comp.profile_image_path) {
            const path = comp.profile_image_path.replace(/^\/+/, '')
            this.companyLogo.url = `${baseUrl}/${path}`
          }

          // Set BCEL QR Image dynamically
          if (comp.bank_qr_image_path) {
            const path = comp.bank_qr_image_path.replace(/^\/+/, '')
            this.bcelQrImage = `${baseUrl}/${path}`
          }

          if (comp.bank_qr_image_path_2) {
            const path = comp.bank_qr_image_path_2.replace(/^\/+/, '')
            this.bcelQrImage2 = `${baseUrl}/${path}`
          }
        }
      } catch (e) {
        this.companyLogo.error = true
        console.error('Logo loading error:', e)
      } finally {
        this.companyLogo.loading = false
      }
    },
    cleanup() {
      window.removeEventListener('storage', this.handleStorageChange)
      window.removeEventListener('beforeunload', this.handleUnload)
      this.stopTimer()
      this.stopSuccessTimer()
    },
    handleUnload() {
      localStorage.setItem('customerDisplayOpen', 'false')
    },
  },
}
</script>

<style scoped>
.customer-display-container {
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  font-family: 'noto sans lao', sans-serif;
  overflow: hidden;
  position: relative;
}

.qr-payment-screen {
  height: 100vh;
  padding: 1rem;
  overflow: hidden;
}

.payment-layout {
  display: flex;
  height: 100%;
  gap: 1rem;
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
  gap: 6px;
  background: rgba(255, 255, 255, 0.95);
  padding: 6px 12px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dcommerce-logo-qr {
  height: 14px;
  width: auto;
}

.dcommerce-text-qr {
  font-size: 0.7rem;
  font-weight: 700;
  color: #01532b;
}

@media (max-width: 1200px) {
  .payment-layout {
    flex-direction: column;
  }
}
</style>