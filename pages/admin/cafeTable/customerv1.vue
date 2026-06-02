<template>
  <v-app class="customer-app">
    <v-main class="customer-main">
      <v-container fluid fill-height class="pa-0 d-flex flex-column align-stretch">
        
        <!-- Premium Glassmorphic Header -->
        <header class="custom-header d-flex align-center justify-space-between px-8 py-5">
          <div class="d-flex align-center">
            <div class="logo-wrapper mr-4 d-flex align-center justify-center">
              <v-icon size="28" color="success">mdi-storefront-outline</v-icon>
            </div>
            <div>
              <h1 class="store-name font-weight-black white--text">
                {{ companyInfo ? companyInfo.name : 'DCOMMERCE POS' }}
              </h1>
              <span class="store-subtitle text-caption font-weight-medium">CUSTOMER SECONDARY DISPLAY</span>
            </div>
          </div>
          
          <div class="d-flex align-center">
            <!-- Pulsing Connection status chip -->
            <div class="connection-status-dot px-4 py-2 rounded-pill d-flex align-center" :class="isConnected ? 'status-online' : 'status-offline'">
              <span class="pulse-dot mr-2"></span>
              <span class="status-text font-weight-bold text-caption">
                {{ isConnected ? 'LIVE SYNCED' : 'OFFLINE' }}
              </span>
            </div>
          </div>
        </header>

        <!-- Dynamic Main Content Area -->
        <div class="content-body flex-grow-1 d-flex flex-column justify-center px-8 pb-8">
          
          <!-- State 1: IDLE WELCOME SCREEN (showQR is false) -->
          <v-row v-if="!showQR" class="welcome-screen fill-height align-center" no-gutters>
            <!-- Left Side: Warm Welcome & Promo Showcase -->
            <v-col cols="12" md="7" class="pr-md-6 mb-6 mb-md-0 d-flex align-stretch">
              <div class="welcome-card pa-8 rounded-xl glass-card text-left d-flex flex-column justify-center elevation-5 w-100">
                <div class="welcome-icon-wrap mb-4 d-flex align-center justify-center">
                  <v-icon size="44" color="warning">mdi-coffee-to-go-outline</v-icon>
                </div>
                <h2 class="text-h3 font-weight-black white--text mb-3 text-glow">
                  Welcome to {{ companyInfo?.name || 'our store' }}
                </h2>
                <p class="text-h6 grey--text text--lighten-2 mb-8 leading-relaxed">
                  We are ready to serve you! Please place your order at the counter. Items added to your cart will appear here instantly.
                </p>
                
                <v-divider class="grey-divider my-6"></v-divider>
                
                <!-- Specials Showcase -->
                <h3 class="specials-title text-subtitle-2 font-weight-bold grey--text text--lighten-1 mb-4 uppercase-tracking">
                  TODAY'S SELECTIONS
                </h3>
                <v-row>
                  <v-col cols="12" sm="6" v-for="(spec, idx) in specials" :key="idx" class="py-2 pr-4">
                    <div class="spec-item-card d-flex align-center pa-4 rounded-xl">
                      <div class="spec-icon-box mr-4 pa-3 rounded-lg" :class="spec.color">
                        <v-icon color="white" size="22">{{ spec.icon }}</v-icon>
                      </div>
                      <div>
                        <div class="spec-name font-weight-bold white--text text-body-1">{{ spec.name }}</div>
                        <div class="spec-desc text-caption grey--text text--lighten-1">{{ spec.desc }}</div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <!-- Right Side: WiFi & Branding Info -->
            <v-col cols="12" md="5" class="pl-md-6 d-flex align-stretch">
              <div class="info-card pa-8 rounded-xl glass-card text-center d-flex flex-column justify-space-between elevation-5 w-100">
                <div class="my-auto">
                  <div class="wifi-icon-wrap mb-4 d-inline-flex align-center justify-center">
                    <v-icon size="48" color="success">mdi-wifi</v-icon>
                  </div>
                  <h3 class="text-h4 font-weight-black white--text mb-2">Free Guest WiFi</h3>
                  <p class="grey--text text--lighten-2 text-body-1 mb-8">
                    Enjoy high-speed internet while waiting for your order.
                  </p>
                  
                  <div class="wifi-details-box pa-5 rounded-xl mb-4 w-100">
                    <div class="d-flex justify-space-between align-center mb-3 px-2">
                      <span class="grey--text font-weight-bold text-caption uppercase-tracking">SSID Network:</span>
                      <span class="white--text font-weight-bold text-body-1">{{ wifiInfo.ssid }}</span>
                    </div>
                    <v-divider class="grey-divider opacity-20 mb-3"></v-divider>
                    <div class="d-flex justify-space-between align-center px-2">
                      <span class="grey--text font-weight-bold text-caption uppercase-tracking">Password:</span>
                      <span class="white--text font-weight-bold text-body-1 d-flex align-center">
                        {{ wifiInfo.password }}
                        <v-icon small color="success" class="ml-2">mdi-check-decagram</v-icon>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="brand-footer mt-auto pt-8">
                  <span class="text-overline grey--text text--darken-1 d-block mb-1">POWERED BY</span>
                  <div class="d-flex align-center justify-center gap-1 font-weight-black text-subtitle-1 success--text">
                    <v-icon color="success" class="mr-1" size="20">mdi-monitor-dashboard</v-icon>
                    DCOMMERCE SYSTEM
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- State 2: ACTIVE ORDER & PAYMENT SCREEN (showQR is true) -->
          <v-row v-if="showQR" class="active-order-screen fill-height align-stretch" no-gutters>
            <!-- Left Side: Order Receipt Section (60%) -->
            <v-col cols="12" md="7" class="pr-md-4 d-flex flex-column mb-6 mb-md-0">
              <div class="receipt-card rounded-xl glass-card pa-6 flex-grow-1 d-flex flex-column elevation-5 overflow-hidden">
                <!-- Receipt Header -->
                <div class="d-flex justify-space-between align-center mb-4">
                  <div class="d-flex align-center">
                    <v-icon color="success" class="mr-3" size="28">mdi-text-box-check-outline</v-icon>
                    <span class="font-weight-black white--text text-h5">Order Summary</span>
                  </div>
                  <span class="item-count-badge px-4 py-1.5 rounded-pill text-caption font-weight-bold white--text">
                    {{ orderItems.length }} {{ orderItems.length === 1 ? 'Item' : 'Items' }}
                  </span>
                </div>
                
                <v-divider class="grey-divider mb-5"></v-divider>

                <!-- Scrollable Order Items Container -->
                <div class="receipt-items flex-grow-1 overflow-y-auto pr-2 mb-4">
                  <div v-if="orderItems.length > 0">
                    <div v-for="(item, i) in orderItems" :key="i" class="receipt-item-row d-flex align-center justify-space-between py-3.5 px-5 mb-3 rounded-xl">
                      <div class="d-flex align-center flex-grow-1 mr-4">
                        <div class="qty-badge mr-4 d-flex align-center justify-center font-weight-bold">
                          {{ item.quantity }}
                        </div>
                        <div class="text-left">
                          <span class="item-name font-weight-bold white--text text-body-1 d-block mb-0.5">{{ item.name }}</span>
                          <span class="item-unit-price grey--text text-caption" v-if="item.price">
                            {{ formatPrice(item.price) }} / unit
                          </span>
                        </div>
                      </div>
                      <div class="item-total-price font-weight-black white--text text-h6 text-right">
                        {{ formatPrice(item.totalPrice) }}
                      </div>
                    </div>
                  </div>
                  <div v-else class="d-flex flex-column align-center justify-center fill-height py-8 text-center">
                    <v-progress-circular indeterminate color="success" size="48" width="4" class="mb-4"></v-progress-circular>
                    <span class="grey--text text-body-1">Assembling your order items...</span>
                  </div>
                </div>

                <!-- Receipt Bottom Totals -->
                <div class="receipt-footer mt-auto">
                  <v-divider class="grey-divider mb-4"></v-divider>
                  
                  <div class="totals-breakdown mb-4 px-2">
                    <div class="d-flex justify-space-between text-body-1 grey--text text--lighten-1 mb-2">
                      <span>Subtotal</span>
                      <span class="font-weight-bold white--text">{{ formatPrice(qrData.amount) }}</span>
                    </div>
                    <div class="d-flex justify-space-between text-body-1 grey--text text--lighten-1 mb-2" v-if="qrData.discount > 0">
                      <span>Discount Received</span>
                      <span class="font-weight-bold error--text">-{{ formatPrice(qrData.discount) }}</span>
                    </div>
                  </div>

                  <div class="grand-total-card pa-5 rounded-xl d-flex justify-space-between align-center">
                    <div>
                      <span class="grand-total-label font-weight-bold text-caption grey--text text--lighten-2 uppercase-tracking d-block mb-1">TOTAL AMOUNT DUE</span>
                      <span class="grand-total-val font-weight-black success--text text-glow">
                        {{ formatPrice(qrData.amount) }}
                      </span>
                    </div>
                    <div class="grand-total-icon-box d-flex align-center justify-center rounded-xl pa-3">
                      <v-icon size="36" color="success">mdi-credit-card-check-outline</v-icon>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>

            <!-- Right Side: Pay / QR Code Section (40%) -->
            <v-col cols="12" md="5" class="pl-md-4 d-flex flex-column">
              <div class="qr-payment-card rounded-xl glass-card pa-6 flex-grow-1 d-flex flex-column align-center justify-center text-center elevation-5">
                
                <div class="qr-icon-wrap mb-4 d-flex align-center justify-center">
                  <v-icon color="success" size="32">mdi-qrcode-scan</v-icon>
                </div>
                <h3 class="text-h4 font-weight-black white--text mb-2">Scan &amp; Pay</h3>
                <p class="grey--text text--lighten-2 text-body-2 mb-6">
                  Verify the amount on the left and scan the QR code using BCEL One or any banking application to complete payment.
                </p>

                <!-- Premium Scanner Frame Overlay Mockup -->
                <div class="qr-outer-frame pa-5 mb-8 rounded-2xl p-relative">
                  <div class="corner-border tl"></div>
                  <div class="corner-border tr"></div>
                  <div class="corner-border bl"></div>
                  <div class="corner-border br"></div>
                  
                  <div class="qr-inner-box bg-white pa-4 rounded-xl d-inline-block elevation-4 p-relative overflow-hidden">
                    <img v-if="qrData.qrString" :src="qrCodeUrl" width="220" height="220" class="qr-img p-relative d-block" alt="Payment QR Code" />
                    <div v-else class="qr-placeholder d-flex align-center justify-center fill-height" style="width: 220px; height: 220px;">
                      <v-icon size="120" color="grey lighten-2">mdi-qrcode-scan</v-icon>
                    </div>
                    
                    <!-- Scan Active Laser Overlay Line (Animation) -->
                    <div class="laser-scanner-line" v-if="qrData.qrString"></div>
                  </div>
                </div>

                <div class="payment-instructions px-5 py-4 rounded-xl w-100 d-flex align-center justify-center">
                  <v-icon small color="success" class="mr-3">mdi-shield-check-outline</v-icon>
                  <span class="grey--text text--lighten-1 text-caption text-left leading-snug">
                    Encrypted and secure direct mobile banking payment powered by standard QR protocol.
                  </span>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Debug Raw Data Expandable Bottom Bar -->
        <v-expansion-panels flat class="debug-panel-dock">
          <v-expansion-panel class="transparent-panel">
            <v-expansion-panel-header class="text-caption font-weight-bold grey--text text--darken-2 py-2 px-8 d-flex align-center">
              <v-icon small color="grey darken-2" class="mr-2">mdi-console-line</v-icon>
              SOCKET DIAGNOSTICS &amp; METRICS (RAW DATA VIEW)
            </v-expansion-panel-header>
            <v-expansion-panel-content class="px-8 py-2">
              <div class="debug-console pa-4 rounded-lg">
                <pre class="debug-pre">{{ lastMessage }}</pre>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      showQR: false,
      isConnected: false,
      lastMessage: 'No data received yet',
      orderItems: [],
      qrData: { amount: 0, qrString: '' },
      companyInfo: null,
      wifiInfo: {
        ssid: 'DCOMMERCE_GUEST_WIFI',
        password: 'welcome_dcommerce'
      },
      specials: [
        {
          name: 'Iced Caramel Latte',
          desc: 'Premium coffee with rich home-made caramel sauce.',
          icon: 'mdi-coffee',
          color: 'amber darken-2'
        },
        {
          name: 'Ceremonial Matcha',
          desc: 'Authentic stoneground Japanese matcha whisked perfectly.',
          icon: 'mdi-leaf',
          color: 'green darken-3'
        },
        {
          name: 'Supreme Croissant',
          desc: 'Buttery, flaky French pastry baked fresh every morning.',
          icon: 'mdi-croissant',
          color: 'orange darken-3'
        },
        {
          name: 'Organic Fruit Smoothie',
          desc: 'Refreshing medley of cold-pressed local sweet berries.',
          icon: 'mdi-food-apple-outline',
          color: 'pink darken-2'
        }
      ]
    }
  },
  computed: {
    qrCodeUrl() {
      if (!this.qrData.qrString) return '';
      const encoded = encodeURIComponent(this.qrData.qrString.trim());
      return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encoded}`;
    }
  },
  mounted() {
    this.isConnected = true;
    this.parseUrlCompany();
    
    // 1. Listen for Storage events (for data updates)
    window.addEventListener('storage', this.handleStorage);
    
    // 2. Listen for postMessage (for real-time Electron updates)
    window.addEventListener('message', this.handleMessage);

    // 3. Initial Check
    const existing = localStorage.getItem('customerDisplay');
    if (existing) this.processData(JSON.parse(existing));

    // 4. Handshake: Tell POS we are ready
    if (window.opener) {
      window.opener.postMessage({ type: 'CUSTOMER_SCREEN_READY' }, '*');
    }
  },
  methods: {
    parseUrlCompany() {
      // Robust parsing for Hash Mode
      try {
        const hash = window.location.hash;
        if (hash.includes('?')) {
          const params = new URLSearchParams(hash.split('?')[1]);
          const companyStr = params.get('company');
          if (companyStr) {
            this.companyInfo = JSON.parse(decodeURIComponent(companyStr));
          }
        }
      } catch (e) {
        console.error("URL Parsing error", e);
      }
    },
    handleStorage(e) {
      if (e.key === 'customerDisplay' && e.newValue) {
        this.processData(JSON.parse(e.newValue));
      }
    },
    handleMessage(e) {
      if (e.data && e.data.type) {
        this.processData(e.data);
      }
    },
    processData(message) {
      this.lastMessage = JSON.stringify(message, null, 2);
      if (message.type === 'SHOW_QR_PAYMENT') {
        this.showQR = true;
        this.qrData = message.data;
        this.orderItems = message.data.orderItems || [];
      } else if (message.type === 'HIDE_QR_PAYMENT') {
        this.showQR = false;
        this.orderItems = [];
      }
    },
    formatPrice(val) {
      return new Intl.NumberFormat().format(val) + ' ₭';
    }
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.handleStorage);
    window.removeEventListener('message', this.handleMessage);
  }
}
</script>

<style scoped>
/* Main Framework Settings */
.customer-app {
  background: radial-gradient(circle at 10% 20%, #08120d 0%, #0d1217 100%) !important;
  font-family: 'Noto Sans Lao', sans-serif !important;
  min-height: 100vh;
  overflow: hidden;
}

.customer-main {
  background: transparent !important;
  min-height: 100vh;
}

/* Header UI Styles */
.custom-header {
  background: rgba(13, 20, 26, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.logo-wrapper {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 12px;
  width: 44px;
  height: 44px;
}

.store-name {
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
}

.store-subtitle {
  color: #8a9ca8;
  letter-spacing: 0.1em;
  font-size: 0.7rem;
  display: block;
}

/* Connection Badge */
.connection-status-dot {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
}

.status-online {
  border-color: rgba(16, 185, 129, 0.2);
  background: rgba(16, 185, 129, 0.05);
}
.status-online .status-text {
  color: #10b981;
}
.status-online .pulse-dot {
  background-color: #10b981;
  box-shadow: 0 0 10px #10b981;
  animation: pulse 2s infinite;
}

.status-offline {
  border-color: rgba(239, 68, 68, 0.2);
  background: rgba(239, 68, 68, 0.05);
}
.status-offline .status-text {
  color: #ef4444;
}
.status-offline .pulse-dot {
  background-color: #ef4444;
  box-shadow: 0 0 10px #ef4444;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

/* Animations */
@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: 0.5;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);
  }
  70% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(0.9);
    opacity: 0.5;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

/* Content Panel Utilities */
.content-body {
  position: relative;
  overflow: hidden;
}

/* Glassmorphism Cards */
.glass-card {
  background: rgba(15, 23, 30, 0.45) !important;
  backdrop-filter: blur(25px) saturate(110%);
  -webkit-backdrop-filter: blur(25px) saturate(110%);
  border: 1px solid rgba(255, 255, 255, 0.06) !important;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(16, 185, 129, 0.15) !important;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3) !important;
}

.grey-divider {
  border-color: rgba(255, 255, 255, 0.08) !important;
}

/* Welcome Screen Left Column */
.welcome-icon-wrap {
  width: 72px;
  height: 72px;
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 20px;
}

.text-glow {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.leading-relaxed {
  line-height: 1.6;
}

.uppercase-tracking {
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

/* Specials Cards styling */
.spec-item-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.spec-item-card:hover {
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.08);
}

.spec-icon-box {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.1);
}

/* Welcome Screen Right Column: WiFi Card */
.wifi-icon-wrap {
  width: 80px;
  height: 80px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.18);
  border-radius: 50%;
  animation: pulse-slow 3s infinite ease-in-out;
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.1);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 0 20px 5px rgba(16, 185, 129, 0.15);
  }
}

.wifi-details-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Active Order Screen: Receipt Details */
.item-count-badge {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #10b981 !important;
}

.receipt-items {
  max-height: 45vh;
}

.receipt-item-row {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.2s ease;
}

.receipt-item-row:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(16, 185, 129, 0.2);
  transform: scale(1.008);
}

.qty-badge {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: #10b981;
  font-size: 0.95rem;
}

.item-name {
  letter-spacing: -0.01em;
}

.totals-breakdown {
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  padding-top: 16px;
}

.grand-total-card {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 100%);
  border: 1.5px solid rgba(16, 185, 129, 0.25);
}

.grand-total-val {
  font-size: 2.5rem;
  line-height: 1.1;
  color: #10b981 !important;
  font-weight: 900 !important;
}

.grand-total-icon-box {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

/* Active Order Screen: QR & Payment Section */
.qr-icon-wrap {
  width: 60px;
  height: 60px;
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.18);
  border-radius: 18px;
}

.qr-outer-frame {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: inline-block;
  position: relative;
  box-shadow: inset 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Photo Scanner Reticle/Corner Accents */
.corner-border {
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: #10b981;
  border-style: solid;
  border-width: 0;
  pointer-events: none;
}
.corner-border.tl {
  top: 10px;
  left: 10px;
  border-top-width: 4px;
  border-left-width: 4px;
  border-top-left-radius: 8px;
}
.corner-border.tr {
  top: 10px;
  right: 10px;
  border-top-width: 4px;
  border-right-width: 4px;
  border-top-right-radius: 8px;
}
.corner-border.bl {
  bottom: 10px;
  left: 10px;
  border-bottom-width: 4px;
  border-left-width: 4px;
  border-bottom-left-radius: 8px;
}
.corner-border.br {
  bottom: 10px;
  right: 10px;
  border-bottom-width: 4px;
  border-right-width: 4px;
  border-bottom-right-radius: 8px;
}

.qr-inner-box {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.qr-img {
  mix-blend-mode: multiply;
}

/* Scanning active laser animation overlay */
.laser-scanner-line {
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to bottom, rgba(16, 185, 129, 0), rgba(16, 185, 129, 0.95) 50%, rgba(16, 185, 129, 0));
  box-shadow: 0 0 15px 4px rgba(16, 185, 129, 0.6);
  z-index: 10;
  animation: laser-scan 4s infinite linear;
}

@keyframes laser-scan {
  0% {
    top: 0%;
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

.payment-instructions {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

/* Debug Diagnostic Docker drawer */
.debug-panel-dock {
  background: rgba(5, 7, 10, 0.7) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.04) !important;
  margin-top: auto;
}

.transparent-panel {
  background: transparent !important;
}

.transparent-panel ::v-deep .v-expansion-panel-header {
  background: transparent !important;
  color: #4b5a66 !important;
}

.transparent-panel ::v-deep .v-expansion-panel-header:hover {
  color: #8a9ca8 !important;
}

.debug-console {
  background: #04080b;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
}

.debug-pre {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 0.72rem;
  color: #10b981;
  overflow: auto;
  max-height: 120px;
  margin: 0;
}

/* Scrollbar customization */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.01);
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.3);
}

/* Responsiveness adjustments for smaller secondary screens */
@media (max-height: 700px) {
  .receipt-items {
    max-height: 30vh;
  }
  .qr-outer-frame {
    transform: scale(0.85);
    margin-bottom: 12px !important;
  }
  .store-name {
    font-size: 1.25rem;
  }
}
</style>