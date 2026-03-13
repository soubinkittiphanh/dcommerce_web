<template>
  <v-app>
    <v-main class="grey lighten-4">
      <v-container fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8">
            <v-card class="elevation-12" rounded="xl">
              <v-toolbar color="primary" dark flat>
                <v-icon large left>mdi-monitor-dashboard</v-icon>
                <v-toolbar-title class=" font-weight-bold">
                  {{ companyInfo ? companyInfo.name : 'DCOMMERCE POS' }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-chip :color="isConnected ? 'success' : 'error'" small>
                  {{ isConnected ? 'CONNECTED' : 'DISCONNECTED' }}
                </v-chip>
              </v-toolbar>

              <v-card-text class="pa-6">
                <v-alert v-if="!showQR" type="info" border="left" colored-border elevation="2">
                  <div class="text-h6">Welcome to {{ companyInfo?.name || 'our store' }}</div>
                  <p>Waiting for items to be added to cart...</p>
                </v-alert>

                <div v-if="showQR">
                  <v-row>
                    <v-col cols="7">
                      <h3 class="text-h6 mb-4">Current Order</h3>
                      <v-divider class="mb-4"></v-divider>
                      
                      <div v-if="orderItems.length > 0">
                        <div v-for="(item, i) in orderItems" :key="i" class="d-flex justify-space-between mb-2">
                          <span>{{ item.quantity }}x {{ item.name }}</span>
                          <span class="font-weight-bold">{{ formatPrice(item.totalPrice) }}</span>
                        </div>
                        
                        <v-divider class="my-4"></v-divider>
                        
                        <div class="d-flex justify-space-between  primary--text font-weight-black">
                          <span>TOTAL:</span>
                          <span>{{ formatPrice(qrData.amount) }}</span>
                        </div>
                      </div>
                      <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
                    </v-col>

                    <v-col cols="5" class="text-center">
                      <div class="pa-4 grey lighten-3 rounded-lg">
                        <h3 class="mb-3">Scan to Pay</h3>
                        <div v-if="qrData.qrString" class="white pa-2 d-inline-block rounded-lg">
                           <img :src="qrCodeUrl" width="200" height="200" />
                        </div>
                        <v-icon v-else size="150" color="grey lighten-1">mdi-qrcode-scan</v-icon>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>

              <v-expansion-panels flat>
                <v-expansion-panel class="grey lighten-5">
                  <v-expansion-panel-header class="grey--text">Debug: Raw Data Received</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <pre style="font-size: 10px; overflow: auto; max-height: 150px;">{{ lastMessage }}</pre>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
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
      companyInfo: null
    }
  },
  computed: {
    qrCodeUrl() {
      if (!this.qrData.qrString) return '';
      const encoded = encodeURIComponent(this.qrData.qrString.trim());
      return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}`;
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