<template>
  <div class="payment-section">
    <div class="payment-content">
      <div class="payment-header">
        <h2 class="payment-title">Scan to Pay</h2>
      </div>

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
          <div v-else class="qr-payment-methods">
            <div class="qr-method-item">
              <img v-if="companyQRImageUrl" :src="companyQRImageUrl" class="qr-payment-method-logo" />
              <img v-else :src="bcelQrImage" class="qr-payment-method-logo" />
              <span class="qr-method-label">{{ parsedCompanyInfo?.bank || 'Mobile Banking' }}</span>
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

      <div class="timer-display" v-if="timeRemaining > 0 && !paymentComplete">
        <v-icon small class="timer-icon">mdi-timer-outline</v-icon>
        <span class="timer-text">Expires in: {{ formatTime(timeRemaining) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  props: ['qrData', 'parsedCompanyInfo', 'convertedAmounts', 'timeRemaining', 'companyQRImageUrl', 'bcelQrImage', 'paymentComplete'],
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
          width: 250,
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
    formatPrice(amt) { return new Intl.NumberFormat('en-US').format(amt || 0) + ' ₭' },
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
  display: flex;
  flex-direction: column;
}

.payment-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
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
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.15);
  width: 100%;
  max-width: 320px;
}

.amount-value {
  font-size: 2.2rem;
  font-weight: 700;
  color: #01532B;
}

.qr-wrapper {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 3px solid #01532B;
  box-shadow: 0 15px 45px rgba(1, 83, 43, 0.2);
}

.qr-payment-method-logo {
  width: 250px;
  height: 250px;
  object-fit: contain;
}

.dynamic-qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-canvas {
  width: 250px !important;
  height: 250px !important;
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
  margin-top: 12px;
  padding-top: 8px;
  border-top: 1px dashed rgba(1, 83, 43, 0.2);
}

.alt-currency-row {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  color: #555;
}

.instruction-steps {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
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