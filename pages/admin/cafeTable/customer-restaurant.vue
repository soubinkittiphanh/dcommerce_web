<template>
  <v-app class="restaurant-display-container">
    <v-main>
      <!-- 1. WELCOME / IDLE SCREEN -->
      <div v-if="!showQR" class="welcome-screen-layout fill-height d-flex flex-column align-center justify-center pa-12">
        <div class="glass-card welcome-card text-center pa-8 rounded-xl">
          <v-avatar size="100" class="mb-4 elevation-6" color="primary lighten-4">
            <v-img v-if="logoUrl" :src="logoUrl" contain></v-img>
            <v-icon v-else size="64" color="primary">mdi-food-fork-drink</v-icon>
          </v-avatar>

          <h1 class="display-1 font-weight-black white--text mb-2">{{ storeName }}</h1>
          <p class="subtitle-1-lao gold-text font-weight-medium mb-6">ຍິນດີຕ້ອນຮັບ / Welcome to our Restaurant</p>

          <!-- Current Time Clock -->
          <div class="time-display py-3 px-6 mb-6 rounded-lg glass-subcard">
            <div class="text-h3 font-weight-bold white--text">{{ currentTime }}</div>
            <div class="caption-lao grey--text text--lighten-1">{{ currentDate }}</div>
          </div>

          <v-row dense class="justify-center mt-2" style="max-width: 700px; width: 100%;">
            <!-- Left Column: Wi-Fi & Service stacked -->
            <v-col cols="12" md="6" class="pa-2 d-flex flex-column justify-space-between">
              <!-- Wi-Fi Card -->
              <v-card flat class="rounded-lg pa-4 text-left glass-subcard mb-3" dark>
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="mr-2">mdi-wifi</v-icon>
                  <span class="font-weight-bold text-subtitle-2">Wi-Fi Internet</span>
                </div>
                <div class="caption-lao grey--text text--lighten-1">SSID: <span class="white--text font-weight-bold">{{ wifiCredentials.ssid }}</span></div>
                <div class="caption-lao grey--text text--lighten-1">Password: <span class="white--text font-weight-bold">{{ wifiCredentials.password }}</span></div>
              </v-card>

              <!-- Table Service Hint -->
              <v-card flat class="rounded-lg pa-4 text-left glass-subcard fill-height" dark>
                <div class="d-flex align-center mb-2">
                  <v-icon color="amber" class="mr-2">mdi-bell-ring-outline</v-icon>
                  <span class="font-weight-bold text-subtitle-2">ບໍລິການ / Service</span>
                </div>
                <div class="caption-lao grey--text text--lighten-1">{{ serviceMessage }}</div>
              </v-card>
            </v-col>

            <!-- Right Column: Static Transfer QRs -->
            <v-col cols="12" md="6" class="pa-2">
              <v-card flat class="rounded-lg pa-4 text-center glass-subcard fill-height d-flex flex-column justify-center" dark style="min-height: 220px;">
                <div class="d-flex align-center justify-center mb-3">
                  <v-icon color="primary" class="mr-2">mdi-qrcode</v-icon>
                  <span class="font-weight-bold text-subtitle-2">ຊຳລະຜ່ານທະນາຄານ / Transfer QR</span>
                </div>
                <div class="d-flex justify-center align-center flex-grow-1">
                  <div v-if="qr1 || qr2" class="d-flex justify-center align-center" style="width: 100%; gap: 12px;">
                    <div v-if="qr1" class="text-center">
                      <v-img :src="qr1" max-height="110" max-width="110" contain class="rounded-lg border mb-1 white pa-1 mx-auto"></v-img>
                      <div class="caption-lao grey--text text--lighten-2 font-weight-bold line-height-1 mt-1">
                        {{ parsedCompanyInfo?.bank || companyLogo.company?.bank || 'QR 1' }}
                      </div>
                    </div>
                    <div v-if="qr2" class="text-center">
                      <v-img :src="qr2" max-height="110" max-width="110" contain class="rounded-lg border mb-1 white pa-1 mx-auto"></v-img>
                      <div class="caption-lao grey--text text--lighten-2 font-weight-bold line-height-1 mt-1">
                        {{ parsedCompanyInfo?.bank2 || companyLogo.company?.bank2 || 'QR 2' }}
                      </div>
                    </div>
                  </div>
                  <div v-else class="caption-lao grey--text text--lighten-1">
                    ຍັງບໍ່ມີລະຫັດ QR / No QR set in settings
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <div class="powered-by-brand mt-12">
          <span class="grey--text caption-lao text--lighten-1">Powered by DCOMMERCE</span>
        </div>
      </div>

      <!-- 2. ACTIVE CHECKOUT SCREEN (CART DETAILS + PAYMENT QR) -->
      <div v-else class="checkout-screen-layout fill-height pa-6">
        <v-row class="fill-height" dense>
          <!-- Left Column: Cart / Bill Details -->
          <v-col cols="7" class="fill-height pr-3">
            <div class="glass-card bill-card fill-height d-flex flex-column pa-6 rounded-xl">
              <!-- Bill Header -->
              <div class="bill-header d-flex align-center justify-space-between pb-4 border-bottom mb-4">
                <div class="d-flex align-center">
                  <v-avatar size="40" color="primary" class="mr-3">
                    <v-icon color="white">mdi-table-chair</v-icon>
                  </v-avatar>
                  <div>
                    <h2 class="text-h6 font-weight-black white--text line-height-1 mb-1">ລາຍການອາຫານ (Order Details)</h2>
                    <span class="caption-lao gold-text font-weight-bold">
                      {{ qrData.tableNumber && qrData.tableNumber !== 'walk-in' ? `ໂຕະ / Table: ${qrData.tableNumber}` : 'ສັ່ງກັບບ້ານ / Walk-in Order' }}
                    </span>
                  </div>
                </div>
                <v-chip color="primary" text-color="white" small class="font-weight-bold">
                  {{ orderItems.length }} Items
                </v-chip>
              </div>

              <!-- Cart Scrollable list -->
              <div class="flex-grow-1 overflow-y-auto pr-2 mb-4" style="max-height: 480px;">
                <div v-for="item in orderItems" :key="item.id" class="cart-item-row py-3 border-bottom d-flex align-start">
                  <!-- Category Icon representation -->
                  <v-avatar size="44" class="mr-3 glass-subcard" rounded>
                    <v-icon color="primary">mdi-silverware-fork-knife</v-icon>
                  </v-avatar>

                  <div class="flex-grow-1">
                    <div class="text-subtitle-1 font-weight-bold white--text line-height-1 mb-1">{{ item.pro_name }}</div>
                    <div class="caption-lao grey--text">{{ item.categ_name }} • {{ formatNumber(item.pro_price) }}₭ /each</div>

                    <!-- Render choices & modifiers indented -->
                    <div v-if="item.selectedOptions && item.selectedOptions.length > 0" class="options-container mt-2 pa-2 rounded-lg">
                      <div v-for="opt in item.selectedOptions" :key="opt.id" class="caption-lao gold-text d-flex justify-space-between">
                        <span>• {{ opt.optionName }}</span>
                        <span v-if="opt.priceAdjustment > 0" class="success--text font-weight-bold">+{{ formatNumber(opt.priceAdjustment) }}₭</span>
                      </div>
                    </div>
                  </div>

                  <div class="text-right ml-4">
                    <div class="text-subtitle-1 font-weight-black primary--text">x{{ item.quantity }}</div>
                    <div class="caption-lao white--text font-weight-bold">{{ formatNumber(item.pro_price * item.quantity) }}₭</div>
                  </div>
                </div>
              </div>

              <!-- Summary Totals Section -->
              <div class="totals-section pa-4 rounded-xl glass-subcard mt-auto" style="border: 1px solid rgba(255,255,255,0.05)">
                <div class="d-flex justify-space-between mb-2 caption-lao grey--text">
                  <span>ລວມຍອດ (Subtotal)</span>
                  <span class="white--text font-weight-medium">{{ formatNumber(orderSummary.subtotal || qrData.amount) }}₭</span>
                </div>
                <div v-if="displayDiscount > 0" class="d-flex justify-space-between mb-2 caption-lao success--text">
                  <span>ສ່ວນຫຼຸດ (Discount)</span>
                  <span>-{{ formatNumber(displayDiscount) }}₭</span>
                </div>
                <div v-if="orderSummary.tax > 0" class="d-flex justify-space-between mb-2 caption-lao grey--text">
                  <span>ພາສີ (Tax)</span>
                  <span class="white--text font-weight-medium">{{ formatNumber(orderSummary.tax) }}₭</span>
                </div>
                <v-divider class="my-2 border-dashed"></v-divider>
                <div class="d-flex justify-space-between align-center">
                  <span class="text-subtitle-1 font-weight-bold white--text">ຍອດລວມທັງໝົດ (Total)</span>
                  <span class="text-h4 font-weight-black gold-text">{{ formatNumber(qrData.amount) }}₭</span>
                </div>
              </div>
            </div>
          </v-col>

          <!-- Right Column: BCEL Payment QR Code -->
          <v-col cols="5" class="fill-height pl-3">
            <div class="glass-card payment-card fill-height d-flex flex-column pa-6 rounded-xl justify-center text-center">
              <div class="payment-header mb-6">
                <h2 class="text-h5 font-weight-black white--text mb-1">ຊຳລະເງິນ (Scan to Pay)</h2>
                <div class="d-inline-flex align-center px-4 py-1.5 rounded-full primary lighten-5 primary--text caption-lao font-weight-bold">
                  <v-icon small color="primary" class="mr-1">mdi-timer-outline</v-icon>
                  ໝົດເວລາພາຍໃນ: {{ formatTime(timeRemaining) }}
                </div>
              </div>

              <!-- Amount display -->
              <div class="payment-amount-display pa-4 mb-6 rounded-xl glass-subcard">
                <div class="caption-lao grey--text">ຈຳນວນເງິນທີ່ຕ້ອງຊຳລະ (Total Payment)</div>
                <div class="text-h3 font-weight-black gold-text my-2">{{ formatNumber(qrData.amount) }} ₭</div>
                <div class="caption-lao white--text font-weight-bold">Lao Kip (LAK)</div>

                <!-- Multi-currency conversions -->
                <div v-if="convertedAmounts.length" class="currency-conversions mt-3 pt-3 border-top d-flex justify-space-around">
                  <div v-for="alt in convertedAmounts" :key="alt.code" class="caption-lao grey--text text--lighten-1">
                    <span class="font-weight-medium">{{ alt.code }}:</span>
                    <span class="white--text font-weight-bold ml-1">{{ alt.value }}</span>
                  </div>
                </div>
              </div>

              <!-- QR wrapper -->
              <div class="qr-code-wrapper d-flex justify-center mb-4 pa-4 rounded-xl white" style="max-width: 280px; margin: 0 auto;">
                <div v-if="qrData.qrString" class="dynamic-qr-container">
                  <canvas ref="qrcodeCanvas" class="qr-canvas"></canvas>
                  <div class="d-flex align-center justify-center mt-2 font-weight-bold dark-green--text subtitle-2">
                    <v-icon small color="dark-green" class="mr-1">mdi-bank</v-icon>
                    BCEL One QR
                  </div>
                </div>
              </div>

              <!-- Fallback Merchant QRs if available -->
              <div v-if="qr1 || qr2" class="mb-4">
                <div class="caption-lao grey--text mb-2">ຫຼື ຊຳລະຜ່ານບັນຊີຮ້ານ (Or pay to merchant account)</div>
                <div class="d-flex justify-center">
                  <v-dialog max-width="400" v-if="qr1">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn x-small outlined color="primary" class="mx-1 text-none" v-bind="attrs" v-on="on">
                        <v-icon left x-small>mdi-qrcode</v-icon>
                        {{ parsedCompanyInfo?.bank || 'QR 1' }}
                      </v-btn>
                    </template>
                    <v-card class="pa-4 text-center">
                      <div class="text-subtitle-1 font-weight-bold mb-2">{{ parsedCompanyInfo?.bank || 'Mobile Banking' }}</div>
                      <v-img :src="qr1" class="mx-auto rounded-lg" max-width="300" contain></v-img>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="$event.stopPropagation()">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-dialog max-width="400" v-if="qr2">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn x-small outlined color="primary" class="mx-1 text-none" v-bind="attrs" v-on="on">
                        <v-icon left x-small>mdi-qrcode</v-icon>
                        {{ parsedCompanyInfo?.bank2 || 'QR 2' }}
                      </v-btn>
                    </template>
                    <v-card class="pa-4 text-center">
                      <div class="text-subtitle-1 font-weight-bold mb-2">{{ parsedCompanyInfo?.bank2 || 'Mobile Banking 2' }}</div>
                      <v-img :src="qr2" class="mx-auto rounded-lg" max-width="300" contain></v-img>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="$event.stopPropagation()">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </div>

              <!-- Steps Instructions -->
              <div class="steps-instructions px-4 py-2 mt-4 glass-subcard rounded-xl">
                <v-row dense class="justify-center align-center">
                  <v-col cols="4" class="caption-lao grey--text text--lighten-1 border-right py-2">
                    <v-icon color="primary" small class="mb-1">mdi-cellphone-text</v-icon>
                    <div>1. ເຂົ້າແອັບທະນາຄານ</div>
                  </v-col>
                  <v-col cols="4" class="caption-lao grey--text text--lighten-1 border-right py-2">
                    <v-icon color="primary" small class="mb-1">mdi-qrcode-scan</v-icon>
                    <div>2. ສະແກນລະຫັດ QR</div>
                  </v-col>
                  <v-col cols="4" class="caption-lao grey--text text--lighten-1 py-2">
                    <v-icon color="primary" small class="mb-1">mdi-checkbox-marked-circle-outline</v-icon>
                    <div>3. ກວດສອບ ແລະ ຢືນຢັນ</div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- 3. SUCCESS PAYMENT OVERLAY -->
      <v-overlay :value="paymentComplete" opacity="0.95" color="green darken-4" class="text-center success-overlay-card">
        <v-avatar size="130" color="white" class="mb-6 elevation-8 pulse-animation">
          <v-icon size="96" color="success">mdi-check-bold</v-icon>
        </v-avatar>
        <h1 class="display-1 font-weight-bold white--text mb-2">ຊຳລະເງິນສຳເລັດແລ້ວ!</h1>
        <h3 class="headline white--text font-weight-medium mb-4">Payment Successful</h3>
        <p class="subtitle-1-lao gold-text font-weight-bold mb-6">ຈຳນວນເງິນ: {{ formatNumber(qrData.amount) }} ₭</p>
        
        <div class="px-6 py-2 rounded-lg glass-subcard d-inline-block" style="width: 250px;">
          <v-progress-linear :value="successProgress" color="primary" height="6" rounded class="mb-2"></v-progress-linear>
          <span class="caption-lao grey--text text--lighten-2">ກຳລັງກັບຄືນໜ້າຫຼັກ...</span>
        </div>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<script>
import QRCode from 'qrcode'
import { getFormatNum } from '~/common'

export default {
  name: 'CustomerRestaurantScreen',
  layout: 'empty',
  data() {
    return {
      currentTime: '',
      currentDate: '',
      clockInterval: null,
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
        ssid: 'FREE_WIFI_RESTUARANT',
        password: 'welcome2026',
        security: 'WPA',
      },
      serviceMessage: 'ກະລຸນາເລືອກເມນູອາຫານ ແລະ ແຈ້ງພະນັກງານເພື່ອສັ່ງຊື້.',
      currencyList: [],
    }
  },

  computed: {
    qr1() {
      return this.companyQRImageUrl || this.bcelQrImage
    },
    qr2() {
      return this.companyQRImageUrl2 || this.bcelQrImage2
    },
    storeName() {
      return this.companyLogo.company?.name || this.parsedCompanyInfo?.name || 'DCOMMERCE CAFE'
    },
    displayDiscount() {
      return this.orderSummary.discount || this.qrData.discount || 0
    },
    displayChange() {
      return this.orderSummary.change || this.qrData.change || 0
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
      if (this.parsedCompanyInfo?.ticketLogo) {
        return this.parsedCompanyInfo.ticketLogo
      }
      if (this.companyLogo.url) return this.companyLogo.url
      if (this.parsedCompanyInfo?.profile_image_path) {
        const baseUrl = (this.$axios.defaults.baseURL || '').replace(/\/+$/, '')
        const path = this.parsedCompanyInfo.profile_image_path.replace(/^\/+/, '')
        return `${baseUrl}/${path}`
      }
      return null
    },
    convertedAmounts() {
      if (!this.qrData.amount || !this.currencyList) return []

      const symbols = {
        'LAK': '₭',
        'THB': '฿',
        'USD': '$',
      }

      return this.currencyList
        .filter((c) => c.isActive && !c.isLocalCCY)
        .map((curr) => {
          let val = 0
          if (curr.exchangeDirection === 'foreign_to_local') {
            val = this.qrData.amount / curr.rate
          } else {
            val = this.qrData.amount * curr.rate
          }

          const symbol = symbols[curr.code] || curr.code
          const formatted = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: curr.code === 'THB' ? 0 : 2,
            maximumFractionDigits: 2,
          }).format(val)

          return {
            code: curr.code,
            value: `${formatted} ${symbol}`,
          }
        })
    },
  },

  watch: {
    qrData: {
      handler(newVal) {
        if (newVal && newVal.qrString) {
          this.$nextTick(() => {
            this.renderQR()
          })
        }
      },
      deep: true,
      immediate: true,
    },
  },

  created() {
    if (process.client) {
      const savedUrl = localStorage.getItem('api_base_url')
      if (savedUrl) {
        this.$axios.setBaseURL(savedUrl)
      }
    }
  },

  mounted() {
    this.updateClock()
    this.clockInterval = setInterval(this.updateClock, 1000)
    window.addEventListener('storage', this.handleStorageChange)
    window.addEventListener('message', this.handleWindowMessage)
    this.checkForExistingQR()
    this.loadCompanyLogo()
    this.loadWifiAndServiceFromSpf()
    
    localStorage.setItem('customerDisplayOpen', 'true')
    window.addEventListener('beforeunload', this.handleUnload)

    if (this.parsedCurrencies && this.parsedCurrencies.length > 0) {
      this.currencyList = this.parsedCurrencies
    }

    // Handshake: Alert parent window we are fully loaded and ready
    if (window.opener) {
      window.opener.postMessage({ type: 'CUSTOMER_SCREEN_READY' }, '*')
    }
  },

  updated() {
    this.$nextTick(() => {
      if (this.qrData && this.qrData.qrString) {
        this.renderQR()
      }
    })
  },

  beforeDestroy() {
    if (this.clockInterval) clearInterval(this.clockInterval)
    this.cleanup()
  },

  methods: {
    formatNumber(val) {
      return getFormatNum(val)
    },

    formatTime(seconds) {
      const mins = Math.floor(seconds / 60)
      const secs = seconds % 60
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`
    },

    updateClock() {
      const now = new Date()
      this.currentTime = now.toTimeString().split(' ')[0]
      
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      this.currentDate = now.toLocaleDateString('la-LA', options)
    },

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
      const data = localStorage.getItem('customerDisplay')
      if (data) {
        try {
          this.handleDisplayMessage(JSON.parse(data))
        } catch (e) {}
      }
    },

    handleDisplayMessage(message) {
      if (message.type === 'SHOW_QR_PAYMENT') this.displayQR(message.data)
      else if (message.type === 'HIDE_QR_PAYMENT') this.hideQR()
      else if (message.type === 'PAYMENT_SUCCESS') this.showPaymentSuccess()
    },

    async displayQR(data) {
      this.qrData = { ...data, timestamp: Date.now() }

      if (data.currencyList) {
        this.currencyList = data.currencyList
      }

      if (data.orderItems && data.orderItems.length > 0) {
        this.orderItems = data.orderItems
      } else if (data.ticketId) {
        try {
          await this.loadOrderDetailsByTicketId(data.ticketId)
        } catch (e) {
          console.warn('Failed to load order items by ticket ID:', e)
        }
      } else if (data.tableNumber && data.tableNumber !== 'walk-in') {
        try {
          await this.loadOrderDetails(data.tableNumber)
        } catch (e) {
          console.warn('Failed to load order items by table number:', e)
        }
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
        const res = await this.$axios.get(`/api/ticket/table/${tableNumber}/pending`)
        const tickets = res.data || []
        if (tickets.length > 0) {
          this.orderItems = tickets[0].ticketLines || []
        }
      } catch (e) {
        console.error('Table details error', e)
      }
    },

    async renderQR() {
      if (!this.$refs.qrcodeCanvas || !this.qrData.qrString) return
      try {
        await QRCode.toCanvas(this.$refs.qrcodeCanvas, this.qrData.qrString, {
          width: 220,
          margin: 1,
          color: {
            dark: '#1e1b18',
            light: '#ffffff',
          },
        })
      } catch (err) {
        console.error('Error rendering QR code canvas:', err)
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

     async loadWifiAndServiceFromSpf() {
      try {
        const res = await this.$axios.get('/api/public/spf/find')
        const spfRecords = res.data.data || res.data || []
        
        // Find the record for WIFI_INFO
        const wifiRecord = spfRecords.find(r => r.code === 'WIFI_INFO' && r.isActive)
        if (wifiRecord && wifiRecord.value) {
          try {
            const parsedWifi = JSON.parse(wifiRecord.value)
            if (parsedWifi.ssid) this.wifiCredentials.ssid = parsedWifi.ssid
            if (parsedWifi.password) this.wifiCredentials.password = parsedWifi.password
          } catch (e) {
            // Fallback to raw value if it is not a JSON string
            console.warn('WIFI_INFO value is not JSON, parsing error:', e)
          }
        }

        // Find the record for SERVICE_MESSAGE
        const serviceRecord = spfRecords.find(r => r.code === 'SERVICE_MESSAGE' && r.isActive)
        if (serviceRecord && serviceRecord.value) {
          this.serviceMessage = serviceRecord.value
        }
      } catch (e) {
        console.error('Failed to load Wi-Fi and service credentials from SPF parameter:', e)
      }
    },

    async loadCompanyLogo() {
      try {
        this.companyLogo.loading = true
        const res = await this.$axios.get('/api/public/company/findAll')
        let comp = res.data.find((c) => c.isActive && c.profile_image_path)
        if (!comp) {
          comp = res.data.find((c) => c.isActive)
        }
        if (comp) {
          this.companyLogo.company = comp
          const baseUrl = (this.$axios.defaults.baseURL || '').replace(/\/+$/, '')
          if (comp.profile_image_path) {
            const path = comp.profile_image_path.replace(/^\/+/, '')
            this.companyLogo.url = `${baseUrl}/${path}`
          }
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
      window.removeEventListener('message', this.handleWindowMessage)
      window.removeEventListener('beforeunload', this.handleUnload)
      this.stopTimer()
      this.stopSuccessTimer()
    },

    handleUnload() {
      localStorage.setItem('customerDisplayOpen', 'false')
    },

    handleWindowMessage(event) {
      if (event.data && event.data.type) {
        console.log('Customer screen received window message:', event.data)
        this.handleDisplayMessage(event.data)
      }
    },
  },
}
</script>

<style scoped>
.restaurant-display-container {
  width: 100% !important;
  min-height: 100vh;
  height: 100vh;
  /* Premium Dark Charcoal & Gold Restaurant Palette */
  background: linear-gradient(135deg, #181614 0%, #0d0c0b 100%) !important;
  font-family: 'noto sans lao', 'Outfit', sans-serif;
  overflow: hidden;
  position: relative;
}

/* Glassmorphism Styles */
.glass-card {
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
}

.glass-subcard {
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

.welcome-card {
  max-width: 580px;
  width: 100%;
}

.gold-text {
  color: #d4af37 !important; /* Gold */
}

.dark-green--text {
  color: #01532b !important;
}

.border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.border-right {
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}

.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.border-dashed {
  border-top: 1px dashed rgba(255, 255, 255, 0.1) !important;
}

.options-container {
  background: rgba(212, 175, 55, 0.05) !important; /* Soft gold overlay */
  border: 1px solid rgba(212, 175, 55, 0.15);
}

.checkout-screen-layout {
  height: 100vh;
  overflow: hidden;
}

.qr-canvas {
  width: 220px !important;
  height: 220px !important;
}

.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(76, 175, 80, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}

.line-height-1 {
  line-height: 1.2;
}

.caption-lao {
  font-size: 0.8rem !important;
  font-family: 'noto sans lao', 'Outfit', sans-serif !important;
}

.subtitle-1-lao {
  font-size: 1.15rem !important;
  font-family: 'noto sans lao', 'Outfit', sans-serif !important;
}
</style>
