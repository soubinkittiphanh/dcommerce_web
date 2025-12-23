<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="640"
    persistent
    scrollable
    @keydown.enter="handleEnterKey"
  >
    <v-card class="multi-payment-card elevation-0">
      <!-- Compact Header -->
      <v-card-title class="payment-header primary--text pa-4">
        <v-icon color="primary" class="mr-3">mdi-credit-card-multiple</v-icon>
        <span class="title-text">ການຈ່າຍເງິນຫຼາຍວິທີ</span>
        <v-spacer></v-spacer>
        <div class="total-display">
          <div class="total-label">ທັງໝົດ</div>
          <div class="total-amount">{{ formatNumber(saleTotal) }}</div>
        </div>
      </v-card-title>

      <!-- Debug Info (remove in production) -->
      <div v-if="$attrs.debug" class="debug-info pa-2 grey lighten-4">
        <small>
          Predefined: {{ predefinedPayments.length }} | 
          Show: {{ showPredefinedPayments }} | 
          Enabled: {{ enablePredefinedPayments }}
        </small>
      </div>

      <!-- Compact Payment Summary -->
      <div v-if="payments.length > 0" class="payment-summary">
        <div class="summary-grid">
          <div class="summary-card paid">
            <div class="summary-amount">{{ formatNumber(totalPaid) }}</div>
            <div class="summary-label">ຈ່າຍແລ້ວ</div>
          </div>
          <div class="summary-card" :class="remainingClass">
            <div class="summary-amount">{{ formatNumber(Math.abs(remainingAmount)) }}</div>
            <div class="summary-label">{{ remainingAmount >= 0 ? 'ຍັງຄ້າງ' : 'ເກີນ' }}</div>
          </div>
          <div class="summary-card status">
            <v-icon small :color="statusColor">{{ statusIcon }}</v-icon>
            <div class="summary-label">{{ statusText }}</div>
          </div>
        </div>
      </div>

      <v-card-text class="pa-0">
        <!-- Predefined Payment Methods (Compact) -->
        <div v-if="showPredefinedPayments" class="predefined-section">
          <div class="section-header">
            <v-icon size="18" class="mr-2">mdi-flash</v-icon>
            <span>ວິທີໄເລ່ງດ່ວນ</span>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="quickSplitType" dense class="quick-split-toggle">
              <v-btn small @click="splitEqually" :disabled="isProcessing">
                <v-icon x-small>mdi-equal</v-icon>
              </v-btn>
              <v-btn small @click="setSuggestedSplit" :disabled="isProcessing">
                <v-icon x-small>mdi-pie-chart</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>

          <div class="predefined-payments">
            <div v-for="(payment, index) in predefinedPayments" :key="`pred-${index}`" class="payment-row">
              <v-select
                v-model="payment.paymentId"
                :items="availablePaymentMethods"
                item-text="payment_name"
                item-value="id"
                dense
                outlined
                hide-details
                class="payment-select flex-grow-1 mr-2"
                :placeholder="`ວິທີທີ ${index + 1}`"
              />
              <v-text-field
                v-model.number="payment.amount"
                type="number"
                dense
                outlined
                hide-details
                class="amount-field mr-2"
                :placeholder="getSuggestedAmount(index)"
                suffix="₭"
              />
              <v-text-field
                v-if="requiresReference(payment.paymentId)"
                v-model="payment.referenceNo"
                dense
                outlined
                hide-details
                class="ref-field mr-2"
                placeholder="ເລກອ້າງອີງ"
              />
              <v-btn
                icon
                small
                color="primary"
                @click="addPredefinedPayment(index)"
                :disabled="!canAddPredefinedPayment(index)"
                class="add-btn"
              >
                <v-icon small>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
          
          <!-- Add Both Button -->
          <div class="add-both-section">
            <v-btn
              small
              color="success"
              block
              @click="addBothPredefinedPayments"
              :disabled="!canAddBothPredefined || isProcessing"
              class="add-both-btn"
            >
              <v-icon left small>mdi-plus-circle</v-icon>
              ເພີ່ມທັງສອງວິທີ
            </v-btn>
          </div>
        </div>

        <!-- Additional Payment (Compact) -->
        <div class="additional-section">
          <div class="section-header">
            <v-icon size="18" class="mr-2">mdi-plus</v-icon>
            <span>ເພີ່ມເຕີມ</span>
          </div>

          <div class="payment-row">
            <v-select
              v-model="newPayment.paymentId"
              :items="availablePaymentMethods"
              item-text="payment_name"
              item-value="id"
              dense
              outlined
              hide-details
              class="payment-select flex-grow-1 mr-2"
              placeholder="ເລືອກວິທີຈ່າຍ"
            />
            <v-text-field
              v-model.number="newPayment.amount"
              type="number"
              dense
              outlined
              hide-details
              class="amount-field mr-2"
              placeholder="ຈຳນວນ"
              suffix="₭"
            />
            <v-text-field
              v-if="requiresReferenceForNew"
              v-model="newPayment.referenceNo"
              dense
              outlined
              hide-details
              class="ref-field mr-2"
              placeholder="ເລກອ້າງອີງ"
            />
            <v-btn
              icon
              small
              color="primary"
              @click="addPaymentMethod"
              :disabled="!canAddPayment"
              class="add-btn"
            >
              <v-icon small>mdi-plus</v-icon>
            </v-btn>
          </div>

          <!-- Quick Amount Pills -->
          <div v-if="remainingAmount > 0 && quickAmounts.length > 0" class="quick-amounts">
            <v-chip
              v-for="amount in quickAmounts"
              :key="amount"
              x-small
              @click="setQuickAmount(amount)"
              :disabled="amount > remainingAmount"
              class="quick-chip mr-1"
            >
              {{ formatNumber(amount) }}
            </v-chip>
            <v-chip
              x-small
              color="success"
              text-color="white"
              @click="setQuickAmount(remainingAmount)"
              class="quick-chip"
            >
              <v-icon x-small left>mdi-check</v-icon>
              {{ formatNumber(remainingAmount) }}
            </v-chip>
          </div>
        </div>

        <!-- Payment List (Compact) -->
        <div class="payments-list">
          <div v-if="payments.length === 0" class="empty-state">
            <v-icon color="grey lighten-1" size="32">mdi-credit-card-off-outline</v-icon>
            <div class="empty-text">ເລີ່ມເພີ່ມການຈ່າຍເງິນ</div>
          </div>

          <div v-else class="payment-items">
            <div
              v-for="(payment, index) in payments"
              :key="index"
              class="payment-item"
            >
              <div class="payment-info">
                <div class="payment-icon">
                  <v-icon :color="getPaymentColor(payment.paymentId)" size="20">
                    {{ getPaymentIcon(payment.paymentId) }}
                  </v-icon>
                </div>
                <div class="payment-details">
                  <div class="payment-name">{{ getPaymentName(payment.paymentId) }}</div>
                  <div v-if="payment.referenceNo" class="payment-ref">{{ payment.referenceNo }}</div>
                </div>
              </div>
              <div class="payment-amount">
                <div class="amount">{{ formatNumber(payment.amount) }}</div>
                <div class="percentage">{{ getPaymentPercentage(payment.amount) }}%</div>
              </div>
              <v-btn
                icon
                x-small
                color="error"
                @click="removePayment(index)"
                class="remove-btn"
              >
                <v-icon x-small>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        </div>

        <!-- Validation Message -->
        <div v-if="validationMessage" class="validation-section">
          <v-alert
            :type="validationType"
            dense
            text
            class="ma-3 validation-alert"
          >
            {{ validationMessage }}
          </v-alert>
        </div>
      </v-card-text>

      <!-- Compact Footer -->
      <v-card-actions class="payment-actions">
        <v-btn
          text
          @click="cancelPayment"
          :disabled="isProcessing"
          class="cancel-btn"
        >
          ຍົກເລີກ
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          @click="confirmPayment"
          :disabled="!canConfirmPayment || isProcessing"
          :loading="isProcessing"
          class="confirm-btn"
        >
          <v-icon left small>mdi-check</v-icon>
          ຢືນຢັນ
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
    },
    enablePredefinedPayments: {
      type: Boolean,
      default: true
    },
    defaultPaymentMethods: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      payments: [],
      predefinedPayments: [],
      newPayment: {
        paymentId: null,
        amount: null,
        referenceNo: ''
      },
      isProcessing: false,
      quickSplitType: null
    }
  },

  computed: {
    dialogVisible: {
      get() { return this.value },
      set(val) { this.$emit('input', val) }
    },

    showPredefinedPayments() {
      return this.enablePredefinedPayments && this.predefinedPayments.length > 0
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

    statusColor() {
      if (this.remainingAmount > 0) return 'warning'
      if (this.remainingAmount < 0) return 'error'
      return 'success'
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

    requiresReferenceForNew() {
      return this.requiresReference(this.newPayment.paymentId)
    },

    canAddPayment() {
      return this.newPayment.paymentId && 
             this.newPayment.amount > 0 && 
             this.newPayment.amount <= this.remainingAmount &&
             (!this.requiresReferenceForNew || this.newPayment.referenceNo)
    },

    canConfirmPayment() {
      return this.payments.length > 0 && this.remainingAmount === 0
    },

    canAddBothPredefined() {
      // Check if we have exactly 2 predefined payments and both can be added
      if (this.predefinedPayments.length !== 2) return false
      
      const payment1 = this.predefinedPayments[0]
      const payment2 = this.predefinedPayments[1]
      
      // Both must have valid payment methods and amounts
      const payment1Valid = payment1.paymentId && 
                           payment1.amount > 0 && 
                           (!this.requiresReference(payment1.paymentId) || payment1.referenceNo)
      
      const payment2Valid = payment2.paymentId && 
                           payment2.amount > 0 && 
                           (!this.requiresReference(payment2.paymentId) || payment2.referenceNo)
      
      // Combined amounts should not exceed remaining amount
      const totalAmount = (payment1.amount || 0) + (payment2.amount || 0)
      const amountValid = totalAmount <= this.remainingAmount && totalAmount > 0
      
      return payment1Valid && payment2Valid && amountValid
    },

    validationMessage() {
      if (this.payments.length === 0) return ''
      if (this.remainingAmount > 0) return `ຍັງຄ້າງຈ່າຍ ${this.formatNumber(this.remainingAmount)}`
      if (this.remainingAmount < 0) return `ຈ່າຍເກີນ ${this.formatNumber(Math.abs(this.remainingAmount))}`
      return 'ການຈ່າຍເງິນຄົບຖ້ວນ'
    },

    validationType() {
      if (this.remainingAmount > 0) return 'warning'
      if (this.remainingAmount < 0) return 'error'
      return 'success'
    },

    quickAmounts() {
      const amounts = []
      const remaining = this.remainingAmount
      
      if (remaining >= 100000) amounts.push(50000, 100000)
      else if (remaining >= 50000) amounts.push(20000, 50000)
      else if (remaining >= 20000) amounts.push(10000, 20000)
      else if (remaining >= 10000) amounts.push(5000, 10000)
      
      return [...new Set(amounts)].slice(0, 3)
    }
  },

  watch: {
    value(newVal) {
      if (newVal) {
        this.resetForm()
        this.$nextTick(() => {
          this.initializePredefinedPayments()
        })
      }
    }
  },

  mounted() {
    // Initialize on component mount if dialog is already open
    if (this.value) {
      this.initializePredefinedPayments()
    }
  },

  methods: {
    initializePredefinedPayments() {
      if (!this.enablePredefinedPayments) {
        this.predefinedPayments = []
        return
      }

      // Clear existing predefined payments
      this.predefinedPayments = []
      
      if (this.defaultPaymentMethods.length > 0) {
        // Use provided default payment methods
        this.defaultPaymentMethods.slice(0, 2).forEach((paymentId) => {
          // Verify the payment method exists
          const paymentMethod = this.availablePaymentMethods.find(p => p.id === paymentId)
          if (paymentMethod) {
            this.predefinedPayments.push({
              paymentId: paymentId,
              amount: null,
              referenceNo: ''
            })
          }
        })
      } else if (this.availablePaymentMethods.length > 0) {
        // Auto-select first two available payment methods
        const availableMethods = this.availablePaymentMethods.slice(0, 2)
        availableMethods.forEach((method) => {
          this.predefinedPayments.push({
            paymentId: method.id,
            amount: null,
            referenceNo: ''
          })
        })
      }

      // Auto-suggest amounts (70/30 split by default)
      if (this.predefinedPayments.length >= 2) {
        this.$nextTick(() => {
          this.setSuggestedSplit()
        })
      }
    },

    requiresReference(paymentId) {
      const method = this.paymentMethods.find(p => p.id === paymentId)
      return method && ['BCEL', 'QR', 'CARD'].includes(method.payment_code)
    },

    canAddPredefinedPayment(index) {
      const payment = this.predefinedPayments[index]
      return payment.paymentId && 
             payment.amount > 0 && 
             payment.amount <= this.remainingAmount &&
             (!this.requiresReference(payment.paymentId) || payment.referenceNo)
    },

    addPredefinedPayment(index) {
      if (!this.canAddPredefinedPayment(index)) return

      const predefinedPayment = this.predefinedPayments[index]
      this.payments.push({
        paymentId: predefinedPayment.paymentId,
        amount: predefinedPayment.amount,
        referenceNo: predefinedPayment.referenceNo || null
      })
      
      // Reset amount and reference but keep payment method
      this.predefinedPayments[index] = {
        paymentId: predefinedPayment.paymentId,
        amount: null,
        referenceNo: ''
      }
    },

    addBothPredefinedPayments() {
      if (!this.canAddBothPredefined) return

      // Add both predefined payments in order
      for (let i = 0; i < this.predefinedPayments.length; i++) {
        if (this.canAddPredefinedPayment(i)) {
          this.addPredefinedPayment(i)
        }
      }

      // Optionally show a success message
      this.$nextTick(() => {
        console.log('Both predefined payments added successfully')
        // You could emit an event or show a toast notification here
        // this.$emit('payments-added', 'ເພີ່ມການຈ່າຍເງິນທັງສອງວິທີສຳເລັດແລ້ວ')
      })
    },

    splitEqually() {
      const splitAmount = Math.round(this.saleTotal / 2)
      if (this.predefinedPayments.length >= 2) {
        this.predefinedPayments[0].amount = splitAmount
        this.predefinedPayments[1].amount = this.saleTotal - splitAmount
      }
    },

    setSuggestedSplit() {
      const primaryAmount = Math.round(this.saleTotal * 0.7)
      if (this.predefinedPayments.length >= 2) {
        this.predefinedPayments[0].amount = primaryAmount
        this.predefinedPayments[1].amount = this.saleTotal - primaryAmount
      }
    },

    getSuggestedAmount(index) {
      if (index === 0) return this.formatNumber(Math.round(this.saleTotal * 0.7))
      if (index === 1) return this.formatNumber(Math.round(this.saleTotal * 0.3))
      return ''
    },

    addPaymentMethod() {
      if (!this.canAddPayment) return

      this.payments.push({
        paymentId: this.newPayment.paymentId,
        amount: this.newPayment.amount,
        referenceNo: this.newPayment.referenceNo || null
      })
      this.resetNewPaymentForm()
    },

    removePayment(index) {
      this.payments.splice(index, 1)
    },

    setQuickAmount(amount) {
      this.newPayment.amount = amount
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
      const icons = {
        cash: 'mdi-cash',
        card: 'mdi-credit-card',
        bcel: 'mdi-cellphone',
        qr: 'mdi-qrcode'
      }
      return icons[code] || 'mdi-credit-card'
    },

    getPaymentColor(paymentId) {
      const method = this.paymentMethods.find(p => p.id === paymentId)
      if (!method) return 'grey'
      
      const code = method.payment_code?.toLowerCase()
      const colors = {
        cash: 'green',
        card: 'blue', 
        bcel: 'purple',
        qr: 'orange'
      }
      return colors[code] || 'grey'
    },

    getPaymentPercentage(amount) {
      return ((amount / this.saleTotal) * 100).toFixed(0)
    },

    async confirmPayment() {
      if (!this.canConfirmPayment || this.isProcessing) return

      this.isProcessing = true
      try {
        const paymentData = this.payments.map(payment => ({
          saleHeaderId: this.saleHeaderId,
          paymentId: payment.paymentId,
          amount: payment.amount,
          referenceNo: payment.referenceNo || null
        }))

        this.$emit('confirm-payment', paymentData)
      } catch (error) {
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
      // predefinedPayments will be re-initialized by watch
    },

    resetNewPaymentForm() {
      this.newPayment = { paymentId: null, amount: null, referenceNo: '' }
    },

    handleEnterKey() {
      for (let i = 0; i < this.predefinedPayments.length; i++) {
        if (this.canAddPredefinedPayment(i)) {
          this.addPredefinedPayment(i)
          return
        }
      }
      
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
/* Same styles as before - keeping them for consistency */
.multi-payment-card {
  border-radius: 12px;
  max-height: 85vh;
}

.debug-info {
  font-family: monospace;
  font-size: 10px;
}

/* Compact Header */
.payment-header {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px 20px !important;
}

.title-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.total-display {
  text-align: right;
}

.total-label {
  font-size: 0.7rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.total-amount {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1976d2;
}

/* Compact Summary */
.payment-summary {
  background: #f8f9fa;
  padding: 12px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.summary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  gap: 16px;
  text-align: center;
}

.summary-card {
  padding: 8px;
  border-radius: 8px;
  background: white;
  border: 1px solid #e0e0e0;
}

.summary-amount {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.summary-label {
  font-size: 0.65rem;
  color: #666;
  text-transform: uppercase;
}

.summary-card.paid .summary-amount { color: #4caf50; }
.summary-card.remaining .summary-amount { color: #ff9800; }
.summary-card.overpaid .summary-amount { color: #f44336; }
.summary-card.complete .summary-amount { color: #4caf50; }

/* Sections */
.predefined-section, .additional-section {
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.add-both-section {
  padding: 8px 20px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.add-both-btn {
  text-transform: none !important;
  font-weight: 500;
  height: 36px;
  border-radius: 8px;
}

.add-both-btn:not(:disabled) {
  background: linear-gradient(45deg, #4caf50, #66bb6a) !important;
  color: white !important;
}

.add-both-btn:hover:not(:disabled) {
  background: linear-gradient(45deg, #388e3c, #4caf50) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.quick-split-toggle {
  height: 28px;
}

.quick-split-toggle .v-btn {
  min-width: 28px !important;
  padding: 0 8px !important;
}

/* Payment Rows */
.payment-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.payment-select {
  flex: 2;
}

.amount-field {
  width: 120px;
  flex: 0 0 120px;
}

.ref-field {
  width: 100px;
  flex: 0 0 100px;
}

.add-btn {
  width: 32px !important;
  height: 32px !important;
  min-width: 32px !important;
}

/* Quick Amount Pills */
.quick-amounts {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.quick-chip {
  height: 24px !important;
  font-size: 0.7rem !important;
  cursor: pointer;
}

/* Payment List */
.payments-list {
  max-height: 200px;
  overflow-y: auto;
}

.empty-state {
  text-align: center;
  padding: 32px 20px;
  color: #999;
}

.empty-text {
  font-size: 0.85rem;
  margin-top: 8px;
}

.payment-items {
  padding: 8px 20px;
}

.payment-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 6px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.payment-item:hover {
  background: #e3f2fd;
  transform: translateY(-1px);
}

.payment-info {
  display: flex;
  align-items: center;
  flex: 1;
}

.payment-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 6px;
  margin-right: 12px;
}

.payment-details {
  flex: 1;
}

.payment-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: #333;
  line-height: 1.2;
}

.payment-ref {
  font-size: 0.7rem;
  color: #666;
  margin-top: 2px;
}

.payment-amount {
  text-align: right;
  margin-right: 8px;
}

.amount {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2e7d32;
}

.percentage {
  font-size: 0.7rem;
  color: #666;
}

.remove-btn {
  width: 24px !important;
  height: 24px !important;
  min-width: 24px !important;
}

/* Validation */
.validation-section {
  padding: 0;
}

.validation-alert {
  margin: 12px 20px !important;
  border-radius: 6px;
}

/* Footer */
.payment-actions {
  padding: 12px 20px;
  background: #fafafa;
  border-top: 1px solid #e0e0e0;
}

.cancel-btn, .confirm-btn {
  height: 36px;
  text-transform: none;
  font-weight: 500;
}

.confirm-btn {
  padding: 0 24px;
}

/* Mobile Responsive */
@media (max-width: 600px) {
  .summary-grid {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  
  .summary-card.status {
    grid-column: 1 / -1;
  }
  
  .payment-row {
    flex-direction: column;
    gap: 8px;
  }
  
  .payment-select,
  .amount-field, 
  .ref-field {
    width: 100%;
    flex: 1;
  }
  
  .payment-actions {
    flex-direction: column;
    gap: 8px;
  }
  
  .cancel-btn,
  .confirm-btn {
    width: 100%;
  }
}
</style>