<template>
  <div class="payment-section">
    <!-- Symmetric Top Header mirroring OrderSection -->
    <div class="payment-header">
      <h2 class="payment-title">Scan to Pay</h2>
      <div class="timer-badge" v-if="timeRemaining > 0 && !paymentComplete">
        <v-icon small color="white" class="mr-1">mdi-timer-outline</v-icon>
        Expires in: {{ formatTime(timeRemaining) }}
      </div>
    </div>

    <!-- Symmetric Content Container -->
    <div class="payment-content">
      <div class="amount-display">
        <div class="amount-label">Total Amount</div>
        <div class="amount-value">{{ formatPrice(qrData.amount) }}</div>
        <div class="currency-label">Lao Kip (LAK)</div>

        <div v-if="convertedAmounts.length" class="multi-currency-section">
          <div v-for="alt in convertedAmounts" :key="alt.code" class="alt-currency-row">
            <span class="alt-label">≈ {{ alt.code }}:</span>
            <span class="alt-value">{{ alt.value }}</span>
          </div>
        </div>
      </div>

      <div class="qr-container">
        <div class="qr-wrapper">
          <div v-if="qrData.isDynamic" class="dynamic-qr-container">
            <canvas ref="qrcodeCanvas" class="qr-canvas"></canvas>
            <div class="dynamic-label">
              <v-icon small color="#01532B" class="mr-1">mdi-bank</v-icon>
              <span>Dynamic Bank QR</span>
            </div>
          </div>
          <div v-else class="qr-payment-methods" :class="{ 'dual-qr': hasTwoQrs }">
            <div v-if="qr1" class="qr-method-item">
              <img :src="qr1" class="qr-payment-method-logo" />
              <span class="qr-method-label">{{ parsedCompanyInfo?.bank || 'Mobile Banking' }}</span>
            </div>
            <div v-if="qr2" class="qr-method-item">
              <img :src="qr2" class="qr-payment-method-logo" />
              <span class="qr-method-label">{{ parsedCompanyInfo?.bank2 || 'Mobile Banking 2' }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="qr-instructions">
        <div class="instruction-steps">
          <div class="step"><v-icon class="step-icon">mdi-numeric-1-circle</v-icon><span>Open App</span></div>
          <div class="step"><v-icon class="step-icon">mdi-numeric-2-circle</v-icon><span>Scan QR</span></div>
          <div class="step"><v-icon class="step-icon">mdi-numeric-3-circle</v-icon><span>Confirm</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  props: ['qrData', 'parsedCompanyInfo', 'convertedAmounts', 'timeRemaining', 'companyQRImageUrl', 'companyQRImageUrl2', 'bcelQrImage', 'bcelQrImage2', 'paymentComplete'],
  computed: {
    qr1() {
      return this.companyQRImageUrl || this.bcelQrImage
    },
    qr2() {
      return this.companyQRImageUrl2 || this.bcelQrImage2
    },
    hasTwoQrs() {
      return !!(this.qr1 && this.qr2)
    }
  },
  watch: {
    'qrData.qrString': {
      handler(newVal) {
        if (newVal && this.qrData.isDynamic) {
          this.$nextTick(() => {
            this.renderQR()
          })
        }
      },
      immediate: true
    }
  },
  methods: {
    async renderQR() {
      if (!this.$refs.qrcodeCanvas || !this.qrData.qrString) return
      try {
        await QRCode.toCanvas(this.$refs.qrcodeCanvas, this.qrData.qrString, {
          width: 230,
          margin: 2,
          color: {
            dark: '#01532B',
            light: '#FFFFFF'
          }
        })
      } catch (err) {
        console.error('QR rendering failed', err)
      }
    },
    formatPrice(amt, currencyCode = 'LAK') {
      const symbols = {
        'LAK': '₭',
        'THB': '฿',
        'USD': '$',
      };
      const symbol = symbols[currencyCode] || currencyCode;
      const formatted = new Intl.NumberFormat('en-US').format(amt || 0);
      return `${formatted} ${symbol}`;
    },
    formatTime(sec) {
      const mins = Math.floor(sec / 60);
      const secs = (sec % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
    }
  }
}
</script>

<style scoped>
.payment-section {
  flex: 1;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.payment-header {
  padding: 1rem 1.5rem;
  background: #01532B;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payment-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.timer-badge {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.payment-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1.5rem;
}

.amount-display {
  background: #f8f9fa;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  width: 100%;
  max-width: 380px;
  text-align: center;
}

.amount-label {
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 2px;
}

.amount-value {
  font-size: 2rem;
  font-weight: 700;
  color: #01532B;
}

.currency-label {
  font-size: 0.75rem;
  color: #888;
}

.qr-wrapper {
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  border: 2px solid #01532B;
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.08);
}

.qr-payment-methods {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.qr-method-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.qr-payment-method-logo {
  width: 230px;
  height: 230px;
  object-fit: contain;
}

.qr-method-label {
  font-weight: 600;
  color: #666;
  font-size: 0.9rem;
}

.dynamic-qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-canvas {
  width: 230px !important;
  height: 230px !important;
}

.dynamic-label {
  margin-top: 10px;
  font-weight: 600;
  color: #01532B;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.multi-currency-section {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px dashed rgba(1, 83, 43, 0.2);
}

.alt-currency-row {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #555;
}

.instruction-steps {
  display: flex;
  gap: 1rem;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: #666;
}

.step-icon {
  color: #01532B !important;
}
</style>