<template>
  <div class="container">
    <div class="qr-generator">
      <h1>🏦 Lao Bank QR Generator</h1>
      <p class="subtitle">Generate QR code for payments</p>

      <!-- QR Generation Form -->
      <div v-if="!qrGenerated" class="form-card">
        <h2>Payment Information</h2>

        <form @submit.prevent="generateQR">
          <!-- Member ID -->
          <div class="form-group">
            <label>Member ID</label>
            <input
              v-model="formData.memberId"
              type="text"
              placeholder="e.g., KOKKOKMOV"
              required
            />
          </div>

          <!-- Transaction Amount -->
          <div class="form-group">
            <label>Amount (LAK)</label>
            <input
              v-model.number="formData.txnAmount"
              type="number"
              placeholder="e.g., 20"
              required
              min="1"
            />
          </div>

          <!-- Purpose -->
          <div class="form-group">
            <label>Purpose</label>
            <input
              v-model="formData.purposeOfTxn"
              type="text"
              placeholder="e.g., Coffee and pastry"
            />
          </div>

          <!-- Bill Number -->
          <div class="form-group">
            <label>Bill Number</label>
            <input
              v-model="formData.billNumber"
              type="text"
              placeholder="e.g., 123123413"
              required
            />
            <button
              type="button"
              class="btn-secondary"
              @click="generateBillNumber"
            >
              Auto Generate
            </button>
          </div>

          <!-- Merchant ID -->
          <div class="form-group">
            <label>Merchant ID</label>
            <input
              v-model="formData.merchantId"
              type="text"
              placeholder="e.g., 000000000001749"
              required
            />
          </div>

          <!-- Store Label -->
          <div class="form-group">
            <label>Store Label</label>
            <input
              v-model="formData.storeLabel"
              type="text"
              placeholder="e.g., Order06989-004-003"
              required
            />
          </div>

          <!-- Terminal Label -->
          <div class="form-group">
            <label>Terminal Label</label>
            <input
              v-model="formData.terminalLabel"
              type="text"
              placeholder="e.g., terminal00001"
              required
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn-primary"
            :disabled="loading"
          >
            <span v-if="loading">⏳ Generating QR...</span>
            <span v-else>🎯 Generate QR Code</span>
          </button>
        </form>

        <!-- Error Message -->
        <div v-if="error" class="error-box">
          <strong>❌ Error:</strong> {{ error }}
        </div>
      </div>

      <!-- QR Code Display -->
      <div v-if="qrGenerated" class="qr-result">
        <!-- Payment Success Banner -->
        <div v-if="paymentStatus" class="payment-success-banner">
          <div class="success-icon">✅</div>
          <div class="success-content">
            <h2>Payment Received!</h2>
            <p class="payer-name">Paid by: {{ paymentStatus.paymentAccountName }}</p>
            <p class="payment-time">{{ formatDate(paymentStatus.paidAt) }}</p>
          </div>
        </div>

        <!-- Waiting for Payment -->
        <div v-else-if="isCheckingPayment" class="payment-waiting">
          <div class="spinner"></div>
          <p>Waiting for payment...</p>
        </div>

        <div class="success-header">
          <h2>✅ QR Code Generated!</h2>
          <button class="btn-secondary" @click="resetForm">
            Generate Another
          </button>
        </div>

        <!-- QR Code Image -->
        <div class="qr-display">
          <div ref="qrcode" class="qr-code"></div>
          <p class="qr-label">Scan to Pay</p>
          <p v-if="isCheckingPayment" class="checking-status">⏳ Checking payment status...</p>
        </div>

        <!-- Payment Details -->
        <div class="details-card">
          <h3>Payment Details</h3>
          <div class="detail-row">
            <span class="label">Bill Number:</span>
            <span class="value">{{ qrData.billNumber }}</span>
          </div>
          <div class="detail-row">
            <span class="label">QR ID:</span>
            <span class="value">{{ qrData.qrId }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Amount:</span>
            <span class="value">{{ formatAmount(qrData.txnAmount) }} LAK</span>
          </div>
          <div class="detail-row">
            <span class="label">Status:</span>
            <span class="value status-badge">{{ qrData.status }}</span>
          </div>
        </div>

        <!-- QR String -->
        <div class="qr-string-box">
          <h4>QR String:</h4>
          <textarea
            :value="qrData.qrString"
            readonly
            rows="3"
            class="qr-string-textarea"
          ></textarea>
          <button class="btn-copy" @click="copyQRString">
            📋 Copy QR String
          </button>
        </div>

        <!-- Actions -->
        <div class="action-buttons">
          <button class="btn-primary" @click="downloadQR">
            💾 Download QR Code
          </button>
          <button class="btn-secondary" @click="printQR">
            🖨️ Print QR Code
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'QRGenerator',
  data() {
    return {
      formData: {
        memberId: 'KOKKOKMOV',
        txnAmount: 20,
        purposeOfTxn: 'test ib QR',
        billNumber: '',
        merchantId: '000000000001749',
        storeLabel: 'Order06989-004-003',
        terminalLabel: 'terminal00001'
        // callbackUrl will be set by backend automatically
      },
      loading: false,
      error: null,
      qrGenerated: false,
      qrData: null,
      // Payment polling
      paymentPolling: null,
      paymentStatus: null,
      isCheckingPayment: false
    }
  },
  mounted() {
    // Auto-generate bill number on mount
    this.generateBillNumber()
  },
  beforeDestroy() {
    // Clear polling when component is destroyed
    this.stopPaymentPolling()
  },
  methods: {
    /**
     * Generate unique bill number
     */
    generateBillNumber() {
      const timestamp = Date.now()
      const random = Math.floor(Math.random() * 1000)
      this.formData.billNumber = `BILL-${timestamp}-${random}`
    },

    /**
     * Generate QR Code
     */
    async generateQR() {
      this.loading = true
      this.error = null

      try {
        // Call API to generate QR (backend will set callback URL)
        const response = await this.$axios.post(
          `api/qr/generate`,
          this.formData
        )

        if (response.data.success) {
          this.qrData = response.data.data
          this.qrGenerated = true

          // Generate QR code image
          this.$nextTick(() => {
            this.renderQRCode()
          })

          // Show success message
          this.$toast.success('QR code generated successfully!', {
            duration: 3000
          })

          // Start polling for payment
          this.startPaymentPolling()
        } else {
          this.error = response.data.message || 'Failed to generate QR code'
        }
      } catch (err) {
        console.error('QR Generation Error:', err)
        this.error = err.response?.data?.message || err.message || 'Failed to connect to server'
      } finally {
        this.loading = false
      }
    },

    /**
     * Start polling for payment status
     */
    startPaymentPolling() {
      // Stop any existing polling
      this.stopPaymentPolling()

      this.isCheckingPayment = true

      // Poll every 2 seconds
      this.paymentPolling = setInterval(async () => {
        await this.checkPaymentStatus()
      }, 2000)

      console.log('Started payment polling...')
    },

    /**
     * Stop payment polling
     */
    stopPaymentPolling() {
      if (this.paymentPolling) {
        clearInterval(this.paymentPolling)
        this.paymentPolling = null
        this.isCheckingPayment = false
        console.log('Stopped payment polling')
      }
    },

    /**
     * Check payment status
     */
    async checkPaymentStatus() {
      try {
        const response = await this.$axios.get(
          `api/qr/payment-status/${this.qrData.billNumber}`
        )

        if (response.data.success) {
          const status = response.data.data

          if (status.isPaid) {
            // Payment successful!
            this.stopPaymentPolling()
            this.paymentStatus = status.paymentDetails

            // Show success notification
            this.$toast.success(`✅ Payment Received from ${status.paymentDetails.paymentAccountName}!`, {
              duration: 5000
            })

            // Play success sound (optional)
            this.playSuccessSound()
          }
        }
      } catch (err) {
        console.error('Error checking payment status:', err)
      }
    },

    /**
     * Play success sound
     */
    playSuccessSound() {
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWP0fPVgjMGH3DA7uaZUQ0PVKro7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxLEgtJouHyvWAhBjWM0fPTgjMGHm7A7+OZUQ0PVKno7KxL')
        audio.play()
      } catch (e) {
        // Silently fail if audio doesn't work
      }
    },

    /**
     * Render QR Code from string
     */
    async renderQRCode() {
      if (!this.qrData?.qrString) return

      try {
        // Clear previous QR code
        this.$refs.qrcode.innerHTML = ''

        // Generate QR code
        await QRCode.toCanvas(this.qrData.qrString, {
          errorCorrectionLevel: 'L',
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        }).then(canvas => {
          this.$refs.qrcode.appendChild(canvas)
        })
      } catch (err) {
        console.error('QR Render Error:', err)
        this.error = 'Failed to render QR code'
      }
    },

    /**
     * Copy QR string to clipboard
     */
    async copyQRString() {
      try {
        await navigator.clipboard.writeText(this.qrData.qrString)
        this.$toast.success('QR string copied to clipboard!', {
          duration: 2000
        })
      } catch (err) {
        console.error('Copy Error:', err)
        this.$toast.error('Failed to copy', {
          duration: 2000
        })
      }
    },

    /**
     * Download QR code as image
     */
    downloadQR() {
      const canvas = this.$refs.qrcode.querySelector('canvas')
      if (!canvas) return

      const url = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = `QR-${this.qrData.billNumber}.png`
      link.href = url
      link.click()

      this.$toast.success('QR code downloaded!', {
        duration: 2000
      })
    },

    /**
     * Print QR code
     */
    printQR() {
      const canvas = this.$refs.qrcode.querySelector('canvas')
      if (!canvas) return

      const printWindow = window.open('', '_blank')
      printWindow.document.write(`
        <html>
          <head>
            <title>QR Code - ${this.qrData.billNumber}</title>
            <style>
              body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                margin: 0;
                font-family: Arial, sans-serif;
              }
              h1 { margin-bottom: 10px; }
              p { margin: 5px 0; color: #666; }
              img { margin: 20px 0; }
            </style>
          </head>
          <body>
            <h1>Lao Bank QR Payment</h1>
            <p>Bill Number: ${this.qrData.billNumber}</p>
            <p>Amount: ${this.formatAmount(this.qrData.txnAmount)} LAK</p>
            <img src="${canvas.toDataURL('image/png')}" />
            <p>Scan to Pay</p>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    },

    /**
     * Reset form
     */
    resetForm() {
      this.stopPaymentPolling()
      this.qrGenerated = false
      this.qrData = null
      this.paymentStatus = null
      this.error = null
      this.generateBillNumber()
    },

    /**
     * Format amount with thousand separator
     */
    formatAmount(amount) {
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    },

    /**
     * Format date
     */
    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.qr-generator {
  background: #f8f9fa;
  min-height: 100vh;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 2.5rem;
}

.subtitle {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 40px;
  font-size: 1.1rem;
}

.form-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-card h2 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #34495e;
  font-weight: 600;
  font-size: 0.95rem;
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #3498db;
}

.readonly-input {
  background: #f8f9fa !important;
  cursor: not-allowed;
  color: #6c757d;
}

.help-text {
  display: block;
  margin-top: 5px;
  font-size: 0.85rem;
  color: #6c757d;
}

.btn-primary {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 10px;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  padding: 8px 16px;
  background: #95a5a6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 5px;
}

.btn-secondary:hover {
  background: #7f8c8d;
}

.error-box {
  margin-top: 20px;
  padding: 15px;
  background: #fee;
  border: 2px solid #fcc;
  border-radius: 8px;
  color: #c33;
}

.qr-result {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.payment-success-banner {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  animation: slideDown 0.5s ease-out;
}

.success-icon {
  font-size: 4rem;
  animation: bounce 1s ease infinite;
}

.success-content h2 {
  margin: 0 0 10px 0;
  font-size: 1.8rem;
}

.payer-name {
  font-size: 1.2rem;
  margin: 5px 0;
  font-weight: 600;
}

.payment-time {
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 0;
}

.payment-waiting {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  text-align: center;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.checking-status {
  color: #667eea;
  font-weight: 600;
  margin-top: 10px;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.success-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.success-header h2 {
  color: #27ae60;
  margin: 0;
}

.qr-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
}

.qr-code {
  margin-bottom: 15px;
}

.qr-label {
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 600;
}

.details-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.details-card h3 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-row .label {
  color: #7f8c8d;
  font-weight: 600;
}

.detail-row .value {
  color: #2c3e50;
  font-weight: 500;
}

.status-badge {
  background: #27ae60;
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
}

.qr-string-box {
  margin: 20px 0;
}

.qr-string-box h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.qr-string-textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  resize: vertical;
  box-sizing: border-box;
}

.btn-copy {
  width: 100%;
  padding: 10px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 0.95rem;
}

.btn-copy:hover {
  background: #2980b9;
}

.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .action-buttons {
    grid-template-columns: 1fr;
  }

  .success-header {
    flex-direction: column;
    gap: 15px;
  }

  .success-header button {
    width: 100%;
  }
}
</style>