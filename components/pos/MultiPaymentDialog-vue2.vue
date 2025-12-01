<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="800"
    persistent
    scrollable
    @keydown.enter="handleEnterKey"
  >
    <v-card class="multi-payment-card">
      <!-- Header -->
      <v-card-title class="payment-header primary white--text">
        <v-icon left size="24">mdi-credit-card-multiple</v-icon>
        <span class="title-text">ການຈ່າຍເງິນຫຼາຍວິທີ</span>
        <v-spacer></v-spacer>
        <v-chip color="white" text-color="primary" class="total-chip">
          <v-icon left small>mdi-currency-usd</v-icon>
          {{ formatNumber(saleTotal) }}
        </v-chip>
      </v-card-title>

      <!-- Payment Summary Bar -->
      <v-card-text class="payment-summary pa-3" v-if="payments.length > 0">
        <v-row align="center" no-gutters class="summary-row">
          <v-col cols="4" class="summary-item">
            <div class="summary-label">ຈ່າຍແລ້ວ</div>
            <div class="summary-value paid">{{ formatNumber(totalPaid) }}</div>
          </v-col>
          <v-col cols="4" class="summary-item">
            <div class="summary-label">ຍັງຄ້າງ</div>
            <div class="summary-value" :class="remainingClass">{{ formatNumber(remainingAmount) }}</div>
          </v-col>
          <v-col cols="4" class="summary-item">
            <div class="summary-label">ສະຖານະ</div>
            <v-chip small :color="statusChipColor" :text-color="statusTextColor">
              <v-icon left x-small>{{ statusIcon }}</v-icon>
              {{ statusText }}
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Payment Methods List -->
      <v-card-text class="payment-content pa-0">
        <div class="payment-list-container">
          <!-- Add Payment Section -->
          <div class="add-payment-section pa-4">
            <v-row align="center" no-gutters class="ga-3">
              <v-col cols="12" md="4">
                <v-select
                  v-model="newPayment.paymentId"
                  :items="availablePaymentMethods"
                  item-text="payment_name"
                  item-value="id"
                  label="ເລືອກວິທີຈ່າຍເງິນ"
                  outlined
                  dense
                  prepend-inner-icon="mdi-credit-card"
                  class="payment-select"
                  :disabled="isProcessing"
                />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model.number="newPayment.amount"
                  label="ຈຳນວນເງິນ"
                  type="number"
                  outlined
                  dense
                  prepend-inner-icon="mdi-currency-usd"
                  :suffix="currencySymbol"
                  :rules="amountRules"
                  @keydown.enter="addPaymentMethod"
                  :disabled="isProcessing"
                  class="amount-input"
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="newPayment.referenceNo"
                  label="ເລກອ້າງອີງ (ຖ້າມີ)"
                  outlined
                  dense
                  prepend-inner-icon="mdi-barcode"
                  :disabled="isProcessing || !requiresReference"
                  placeholder="ເບີໂທ/ລະຫັດ"
                  class="reference-input"
                />
              </v-col>
              <v-col cols="12" md="1">
                <v-btn
                  color="primary"
                  @click="addPaymentMethod"
                  :disabled="!canAddPayment || isProcessing"
                  icon
                  class="add-btn"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <!-- Quick Amount Buttons -->
            <v-row v-if="remainingAmount > 0" class="mt-2">
              <v-col cols="12">
                <div class="quick-amounts">
                  <v-chip
                    v-for="amount in quickAmounts"
                    :key="amount"
                    small
                    outlined
                    color="primary"
                    @click="setQuickAmount(amount)"
                    class="mr-2 mb-1 quick-amount-chip"
                    :disabled="amount > remainingAmount"
                  >
                    {{ formatNumber(amount) }}
                  </v-chip>
                  <v-chip
                    v-if="remainingAmount > 0"
                    small
                    color="success"
                    @click="setQuickAmount(remainingAmount)"
                    class="mr-2 mb-1"
                  >
                    <v-icon left x-small>mdi-check-all</v-icon>
                    {{ formatNumber(remainingAmount) }}
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </div>

          <v-divider></v-divider>

          <!-- Existing Payments List -->
          <div class="existing-payments">
            <div v-if="payments.length === 0" class="empty-state pa-6 text-center">
              <v-icon size="64" color="grey lighten-2">mdi-credit-card-off</v-icon>
              <p class="text-body-2 grey--text mt-3">ຍັງບໍ່ມີການຈ່າຍເງິນ</p>
              <p class="text-caption grey--text">ເລືອກວິທີຈ່າຍເງິນ ແລະ ໃສ່ຈຳນວນເງິນຂ້າງເທິງ</p>
            </div>

            <div v-else class="payment-items">
              <v-card
                v-for="(payment, index) in payments"
                :key="index"
                outlined
                class="payment-item ma-3"
                :class="{ 'payment-item--selected': selectedPaymentIndex === index }"
              >
                <v-card-text class="pa-3">
                  <v-row align="center" no-gutters>
                    <v-col cols="1">
                      <v-avatar size="32" :color="getPaymentColor(payment.paymentId)" class="white--text">
                        <v-icon small>{{ getPaymentIcon(payment.paymentId) }}</v-icon>
                      </v-avatar>
                    </v-col>
                    <v-col cols="4" class="pl-3">
                      <div class="payment-name">{{ getPaymentName(payment.paymentId) }}</div>
                      <div v-if="payment.referenceNo" class="payment-ref">{{ payment.referenceNo }}</div>
                    </v-col>
                    <v-col cols="5" class="text-right">
                      <div class="payment-amount">{{ formatNumber(payment.amount) }}</div>
                      <div class="payment-percentage">{{ getPaymentPercentage(payment.amount) }}%</div>
                    </v-col>
                    <v-col cols="2" class="text-right">
                      <v-btn
                        icon
                        small
                        color="error"
                        @click="removePayment(index)"
                        :disabled="isProcessing"
                        class="remove-btn"
                      >
                        <v-icon small>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </div>
      </v-card-text>

      <!-- Footer Actions -->
      <v-divider></v-divider>
      <v-card-actions class="payment-actions pa-4">
        <div class="validation-messages" v-if="validationMessage">
          <v-alert
            :type="validationType"
            dense
            text
            class="mb-2"
            :icon="validationIcon"
          >
            {{ validationMessage }}
          </v-alert>
        </div>

        <v-spacer></v-spacer>
        
        <v-btn
          color="grey"
          text
          @click="cancelPayment"
          :disabled="isProcessing"
          class="cancel-btn"
        >
          <v-icon left>mdi-close</v-icon>
          ຍົກເລີກ
        </v-btn>

        <v-btn
          color="success"
          @click="confirmPayment"
          :disabled="!canConfirmPayment || isProcessing"
          :loading="isProcessing"
          class="confirm-btn ml-3"
        >
          <v-icon left>mdi-check-circle</v-icon>
          ຢືນຢັນການຈ່າຍເງິນ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'MultiPaymentDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    saleTotal: {
      type: Number,
      required: true
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    saleHeaderId: {
      type: [Number, String],
      default: null
    },
    formatNumber: {
      type: Function,
      default: (val) => new Intl.NumberFormat('en-US').format(val)
    }
  },

  data() {
    return {
      payments: [],
      newPayment: {
        paymentId: null,
        amount: null,
        referenceNo: ''
      },
      isProcessing: false,
      selectedPaymentIndex: null,
      currencySymbol: 'LAK',
      amountRules: [
        v => !!v || 'ຈຳນວນເງິນຕ້ອງບໍ່ວ່າງ',
        v => v > 0 || 'ຈຳນວນເງິນຕ້ອງມາກກວ່າ 0',
      ]
    }
  },

  computed: {
    dialogVisible: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },

    totalPaid() {
      return this.payments.reduce((sum, payment) => sum + (payment.amount || 0), 0)
    },

    remainingAmount() {
      return this.saleTotal - this.totalPaid
    },

    remainingClass() {
      if (this.remainingAmount > 0) return 'remaining'
      if (this.remainingAmount < 0) return 'overpaid'
      return 'complete'
    },

    statusChipColor() {
      if (this.remainingAmount > 0) return 'warning'
      if (this.remainingAmount < 0) return 'error'
      return 'success'
    },

    statusTextColor() {
      return 'white'
    },

    statusIcon() {
      if (this.remainingAmount > 0) return 'mdi-clock'
      if (this.remainingAmount < 0) return 'mdi-alert'
      return 'mdi-check-circle'
    },

    statusText() {
      if (this.remainingAmount > 0) return 'ຍັງຄ້າງ'
      if (this.remainingAmount < 0) return 'ເກີນ'
      return 'ຄົບ'
    },

    availablePaymentMethods() {
      return this.paymentMethods.filter(method => method.is_active !== false)
    },

    requiresReference() {
      const selectedMethod = this.paymentMethods.find(p => p.id === this.newPayment.paymentId)
      return selectedMethod && (selectedMethod.payment_code === 'BCEL' || selectedMethod.payment_code === 'QR' || selectedMethod.payment_code === 'CARD')
    },

    canAddPayment() {
      return this.newPayment.paymentId && 
             this.newPayment.amount > 0 && 
             this.newPayment.amount <= this.remainingAmount &&
             (!this.requiresReference || this.newPayment.referenceNo)
    },

    canConfirmPayment() {
      return this.payments.length > 0 && this.remainingAmount === 0
    },

    validationMessage() {
      if (this.payments.length === 0) return ''
      if (this.remainingAmount > 0) return `ຍັງຄ້າງຈ່າຍ ${this.formatNumber(this.remainingAmount)}`
      if (this.remainingAmount < 0) return `ຈ່າຍເກີນ ${this.formatNumber(Math.abs(this.remainingAmount))} - ກະລຸນາແກ້ໄຂ`
      return 'ການຈ່າຍເງິນຄົບຖ້ວນແລ້ວ'
    },

    validationType() {
      if (this.remainingAmount > 0) return 'warning'
      if (this.remainingAmount < 0) return 'error'
      return 'success'
    },

    validationIcon() {
      if (this.remainingAmount > 0) return 'mdi-clock'
      if (this.remainingAmount < 0) return 'mdi-alert'
      return 'mdi-check-circle'
    },

    quickAmounts() {
      const amounts = []
      const remaining = this.remainingAmount
      
      if (remaining >= 100000) amounts.push(50000, 100000)
      if (remaining >= 50000) amounts.push(20000, 50000)
      if (remaining >= 20000) amounts.push(10000, 20000)
      if (remaining >= 10000) amounts.push(5000, 10000)
      
      return [...new Set(amounts)].sort((a, b) => a - b).slice(0, 4)
    }
  },

  watch: {
    value(newVal) {
      if (newVal) {
        this.resetForm()
      }
    },

    'newPayment.paymentId'() {
      // Auto-focus amount field when payment method is selected
      this.$nextTick(() => {
        const amountInput = this.$el.querySelector('.amount-input input')
        if (amountInput) amountInput.focus()
      })
    }
  },

  methods: {
    addPaymentMethod() {
      if (!this.canAddPayment) return

      const payment = {
        paymentId: this.newPayment.paymentId,
        amount: this.newPayment.amount,
        referenceNo: this.newPayment.referenceNo || null
      }

      this.payments.push(payment)
      this.resetNewPaymentForm()

      // Auto-focus payment method dropdown for next entry
      this.$nextTick(() => {
        const selectInput = this.$el.querySelector('.payment-select input')
        if (selectInput) selectInput.focus()
      })
    },

    removePayment(index) {
      this.payments.splice(index, 1)
    },

    setQuickAmount(amount) {
      this.newPayment.amount = amount
      
      // Auto-add if payment method is already selected
      if (this.newPayment.paymentId && this.canAddPayment) {
        this.addPaymentMethod()
      }
    },

    getPaymentName(paymentId) {
      const method = this.paymentMethods.find(p => p.id === paymentId)
      return method ? method.payment_name : 'Unknown'
    },

    getPaymentIcon(paymentId) {
      const method = this.paymentMethods.find(p => p.id === paymentId)
      if (!method) return 'mdi-credit-card'
      
      const code = method.payment_code?.toLowerCase()
      switch (code) {
        case 'cash': return 'mdi-cash'
        case 'card': return 'mdi-credit-card'
        case 'bcel': return 'mdi-cellphone'
        case 'qr': return 'mdi-qrcode'
        default: return 'mdi-credit-card'
      }
    },

    getPaymentColor(paymentId) {
      const method = this.paymentMethods.find(p => p.id === paymentId)
      if (!method) return 'grey'
      
      const code = method.payment_code?.toLowerCase()
      switch (code) {
        case 'cash': return 'green'
        case 'card': return 'blue'
        case 'bcel': return 'purple'
        case 'qr': return 'orange'
        default: return 'grey'
      }
    },

    getPaymentPercentage(amount) {
      return ((amount / this.saleTotal) * 100).toFixed(1)
    },

    async confirmPayment() {
      if (!this.canConfirmPayment || this.isProcessing) return

      this.isProcessing = true

      try {
        // First, let's make sure we have the payments in the right format
        console.log('Payments before confirmation:', this.payments)
        console.log('Sale Header ID:', this.saleHeaderId)
        
        if (this.payments.length === 0) {
          throw new Error('ຕ້ອງມີການຈ່າຍເງິນຢ່າງໜ້ອຍ 1 ວິທີ')
        }

        if (this.remainingAmount !== 0) {
          throw new Error('ຈຳນວນເງິນຈ່າຍບໍ່ຄົບ')
        }

        // Emit the payment data directly to parent component
        const paymentData = this.payments.map(payment => ({
          saleHeaderId: this.saleHeaderId,
          paymentId: payment.paymentId,
          amount: payment.amount,
          referenceNo: payment.referenceNo || null
        }))

        console.log('Submitting payment data:', paymentData)
        
        // Emit to parent for processing
        this.$emit('confirm-payment', paymentData)
        
      } catch (error) {
        console.error('Payment confirmation error:', error)
        this.$emit('payment-error', error)
      } finally {
        this.isProcessing = false
      }
    },

    cancelPayment() {
      this.resetForm()
      this.$emit('cancel')
      this.dialogVisible = false
    },

    resetForm() {
      this.payments = []
      this.resetNewPaymentForm()
      this.isProcessing = false
      this.selectedPaymentIndex = null
    },

    resetNewPaymentForm() {
      this.newPayment = {
        paymentId: null,
        amount: null,
        referenceNo: ''
      }
    },

    handleEnterKey() {
      if (this.canAddPayment) {
        this.addPaymentMethod()
      } else if (this.canConfirmPayment) {
        this.confirmPayment()
      }
    }
  }
}
</script>

<style scoped>
/* Same styles as before - they remain the same */
.multi-payment-card {
  min-height: 600px;
  display: flex;
  flex-direction: column;
}

.payment-header {
  background: linear-gradient(135deg, var(--v-primary-base), var(--v-primary-darken1));
  padding: 20px;
}

.title-text {
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Noto Sans Lao', sans-serif;
}

.total-chip {
  font-weight: 600;
  font-size: 1.1rem;
}

.payment-summary {
  background-color: #f8f9fa;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.summary-row {
  text-align: center;
}

.summary-item {
  padding: 0 16px;
}

.summary-label {
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.summary-value {
  font-size: 1.1rem;
  font-weight: 600;
}

.summary-value.paid {
  color: #4caf50;
}

.summary-value.remaining {
  color: #ff9800;
}

.summary-value.overpaid {
  color: #f44336;
}

.summary-value.complete {
  color: #4caf50;
}

.payment-content {
  flex: 1;
  min-height: 400px;
}

.add-payment-section {
  background-color: #fafafa;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.payment-select, .amount-input, .reference-input {
  transition: all 0.2s ease;
}

.add-btn {
  height: 40px;
  width: 40px;
}

.quick-amounts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.quick-amount-chip {
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-amount-chip:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.existing-payments {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.empty-state {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.payment-item {
  transition: all 0.2s ease;
  border-radius: 12px;
}

.payment-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.payment-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
}

.payment-ref {
  font-size: 0.8rem;
  color: #666;
  margin-top: 2px;
}

.payment-amount {
  font-weight: 700;
  font-size: 1.1rem;
  color: #2e7d32;
}

.payment-percentage {
  font-size: 0.75rem;
  color: #666;
}

.payment-actions {
  background-color: #fafafa;
  border-top: 1px solid rgba(0,0,0,0.08);
}

.cancel-btn {
  min-width: 120px;
}

.confirm-btn {
  min-width: 180px;
  font-weight: 600;
}

/* Mobile responsive styles remain the same */
@media (max-width: 960px) {
  .add-payment-section .v-row {
    flex-direction: column;
  }
  
  .payment-actions {
    flex-direction: column;
    gap: 12px;
  }
  
  .cancel-btn, .confirm-btn {
    width: 100%;
  }
}
</style>