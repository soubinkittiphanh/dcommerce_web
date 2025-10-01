<template>
  <div>
    <!-- Main Payment Dialog -->
    <v-dialog v-model="showDialog" max-width="800" persistent>
      <v-card>
        <!-- Compact Header -->
        <v-card-title class="primary white--text py-2">
          <v-icon left color="white" size="20">mdi-credit-card</v-icon>
          Payment - Table {{ tableNumber }}
          <v-spacer></v-spacer>
          <div class="text-h6 font-weight-bold">{{ formatPrice(amount) }}</div>
          <v-btn icon color="white" @click="closeDialog" :disabled="actionLoading" class="ml-2">
            <v-icon size="20">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <!-- QR Actions Row -->
          <v-row dense class="mb-3">
            <v-col cols="6">
              <v-btn
                block
                @click="showQROnCustomerScreen"
                style="background-color: #01532b !important; color: white !important;"
                class="text-none"
              >
                <v-icon left size="20">mdi-monitor-multiple</v-icon>
                Customer Screen
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn
                block
                @click="showQRDialog = true"
                color="deep-purple"
                class="text-none"
              >
                <v-icon left size="20">mdi-qrcode</v-icon>
                Local QR
              </v-btn>
            </v-col>
          </v-row>

          <!-- Payment Methods -->
          <div v-if="paymentLoading" class="text-center py-2">
            <v-progress-circular size="32" color="primary" indeterminate></v-progress-circular>
            <div class="caption mt-1">Loading...</div>
          </div>
          
          <div v-else>
            <div class="subtitle-2 mb-2">
              <v-icon left size="18">mdi-wallet</v-icon>
              Payment Method
            </div>

            <v-row v-if="paymentMethods.length > 0" dense>
              <v-col
                v-for="payment in paymentMethods"
                :key="payment.id"
                cols="4"
                class="pa-1"
              >
                <v-card
                  @click="selectedPaymentMethod = payment"
                  :color="selectedPaymentMethod?.id === payment.id ? getPaymentColor(payment.payment_code) : ''"
                  :class="[
                    'payment-card cursor-pointer text-center',
                    selectedPaymentMethod?.id === payment.id ? 'white--text elevation-3' : 'elevation-1'
                  ]"
                  hover
                  height="70"
                >
                  <v-card-text class="pa-2">
                    <v-icon
                      :color="selectedPaymentMethod?.id === payment.id ? 'white' : getPaymentColor(payment.payment_code)"
                      size="24"
                    >
                      {{ getPaymentIcon(payment.payment_code) }}
                    </v-icon>
                    <div class="caption font-weight-medium mt-1">
                      {{ payment.payment_name }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- No Payment Methods -->
            <v-alert v-else type="warning" dense class="ma-0">
              No payment methods available
              <v-btn x-small color="warning" class="ml-2" @click="$emit('reload-payment-methods')">
                Retry
              </v-btn>
            </v-alert>
          </div>
        </v-card-text>

        <!-- Compact Actions -->
        <v-card-actions class="pa-3">
          <v-btn text @click="closeDialog" :disabled="actionLoading">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            @click="confirmPayment"
            :disabled="!selectedPaymentMethod || actionLoading"
            :loading="actionLoading"
            class="text-none"
          >
            <v-icon left size="18">mdi-check</v-icon>
            Process Payment
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Minimal QR Dialog -->
    <v-dialog v-model="showQRDialog" max-width="400" persistent>
      <v-card>
        <v-card-title style="background-color: #01532B !important;" class="white--text py-2">
          <v-icon left color="white" size="20">mdi-qrcode</v-icon>
          QR Payment
          <v-spacer></v-spacer>
          <div class="font-weight-bold">{{ formatPrice(amount) }}</div>
          <v-btn icon color="white" @click="showQRDialog = false" class="ml-2">
            <v-icon size="20">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4 text-center">
          <!-- QR Code -->
          <v-card outlined class="pa-2 mb-3" style="border-color: #01532B !important;">
            <img
              :src="qrCodeUrl"
              alt="QR Payment Code"
              style="width: 200px; height: 200px; display: block; margin: 0 auto;"
              @error="onQRError"
            />
          </v-card>

          <!-- Compact Instructions -->
          <div class="caption grey--text mb-3">
            <v-icon small left>mdi-information</v-icon>
            Scan with mobile banking app
          </div>

          <!-- Action Buttons -->
          <v-row dense>
            <v-col cols="4">
              <v-btn small text @click="downloadQR" style="color: #01532B !important;">
                <v-icon small>mdi-download</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn small text @click="shareQR" style="color: #01532B !important;">
                <v-icon small>mdi-share</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn small text @click="copyQRString" style="color: #01532B !important;">
                <v-icon small>{{ copied ? 'mdi-check' : 'mdi-content-copy' }}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'PaymentDialog',
  props: {
    show: { type: Boolean, default: false },
    amount: { type: Number, default: 0 },
    tableNumber: { type: [String, Number], default: '' },
    paymentMethods: { type: Array, default: () => [] },
    paymentLoading: { type: Boolean, default: false },
    actionLoading: { type: Boolean, default: false },
  },
  
  data() {
    return {
      selectedPaymentMethod: null,
      showQRDialog: false,
      copied: false,
      qrString: '00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405100005802LA5907KHAMMAO6260011713a321asS321as2250302120713te rminal000010812test remarks63041c9f',
    }
  },
  
  computed: {
    showDialog: {
      get() { return this.show },
      set(value) { if (!value) this.closeDialog() }
    },
    
    qrCodeUrl() {
      const encodedString = encodeURIComponent(this.currentQRString.replace(/\s/g, ''))
      return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedString}&format=png&margin=10&color=01532B&bgcolor=ffffff`
    },
    
    currentQRString() {
      return this.generateQRString()
    }
  },
  
  watch: {
    show(newVal) {
      if (!newVal) this.resetComponent()
    },
  },
  
  methods: {
    showQROnCustomerScreen() {
      const qrData = {
        amount: this.amount,
        tableNumber: this.tableNumber,
        qrString: this.generateQRString(),
        timestamp: Date.now()
      }
      
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'SHOW_QR_PAYMENT',
        data: qrData
      }))
      
      window.dispatchEvent(new Event('storage'))
      this.$emit('show-message', `QR displayed on customer screen`, 'success', 'mdi-qrcode')
    },

    hideQRFromCustomerScreen() {
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'HIDE_QR_PAYMENT',
        timestamp: Date.now()
      }))
      window.dispatchEvent(new Event('storage'))
    },

    showPaymentSuccessOnCustomerScreen() {
      localStorage.setItem('customerDisplay', JSON.stringify({
        type: 'PAYMENT_SUCCESS',
        data: { amount: this.amount, tableNumber: this.tableNumber },
        timestamp: Date.now()
      }))
      window.dispatchEvent(new Event('storage'))
    },

    generateQRString() {
      if (!this.amount || !this.tableNumber) return this.qrString
      
      const amountStr = Math.round(this.amount).toString().padStart(6, '0')
      const tableStr = this.tableNumber.toString().padStart(6, '0')
      
      return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812Table ${this.tableNumber} payment63041c9f`
    },

    closeDialog() {
      this.hideQRFromCustomerScreen()
      this.resetComponent()
      this.$emit('close')
    },

    resetComponent() {
      this.selectedPaymentMethod = null
      this.showQRDialog = false
      this.copied = false
    },

    confirmPayment() {
      if (!this.selectedPaymentMethod) {
        this.$emit('show-message', 'Please select a payment method', 'warning', 'mdi-alert')
        return
      }
      
      this.showPaymentSuccessOnCustomerScreen()
      this.$emit('confirm-payment', this.selectedPaymentMethod)
    },

    async copyQRString() {
      try {
        const stringToCopy = this.currentQRString
        
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(stringToCopy)
        } else {
          const textArea = document.createElement('textarea')
          textArea.value = stringToCopy
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
        }

        this.copied = true
        setTimeout(() => { this.copied = false }, 2000)
      } catch (err) {
        console.error('Failed to copy QR string:', err)
      }
    },

    downloadQR() {
      const link = document.createElement('a')
      link.href = this.qrCodeUrl
      link.download = `qr-payment-table-${this.tableNumber}-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },

    shareQR() {
      if (navigator.share) {
        navigator.share({
          title: `Payment QR - Table ${this.tableNumber}`,
          text: `Payment QR Code for ${this.formatPrice(this.amount)}`,
          url: this.qrCodeUrl,
        }).catch((err) => console.log('Error sharing:', err))
      } else {
        this.copyQRString()
        this.$emit('show-message', 'QR code details copied!', 'success', 'mdi-check')
      }
    },

    onQRError() {
      this.$emit('show-message', 'Failed to load QR code', 'error', 'mdi-alert')
    },

    formatPrice(amount, includeCurrency = true) {
      const formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount || 0))
      return includeCurrency ? `${formattedNumber} ₭` : formattedNumber
    },

    getPaymentIcon(paymentCode) {
      const icons = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        CREDIT: 'mdi-credit-card-outline',
        DEBIT: 'mdi-credit-card',
        MOBILE: 'mdi-cellphone',
        DIGITAL: 'mdi-wallet',
        BANK: 'mdi-bank',
        CHECK: 'mdi-checkbook',
      }
      return icons[paymentCode] || 'mdi-currency-usd'
    },

    getPaymentColor(paymentCode) {
      const colors = {
        CASH: 'green',
        CARD: 'blue',
        CREDIT: 'purple',
        DEBIT: 'indigo',
        MOBILE: 'orange',
        DIGITAL: 'teal',
        BANK: 'brown',
        CHECK: 'grey',
      }
      return colors[paymentCode] || 'primary'
    },
  },
  
  beforeDestroy() {
    this.hideQRFromCustomerScreen()
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.payment-card {
  transition: all 0.2s ease;
}

.payment-card:hover {
  transform: translateY(-1px);
}

.text-none {
  text-transform: none !important;
}
</style>