<template>
  <div class="cart-footer">
    <!-- Payment Input Section -->
    <!-- <div class="payment-inputs pa-4" v-if="showCheckOut"> -->
    <div class="payment-inputs pa-4">
      <v-row no-gutters class="ga-3">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="discountRawInput"
            @input="handleDiscountInput($event)"
            @blur="handleDiscountBlur()"
            @focus="handleDiscountFocus()"
            label="ສ່ວນຫລຸດ"
            outlined
            dense
            prepend-inner-icon="mdi-percent"
            :suffix="currencySymbol"
            class="discount-input"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="cashReceivedRawInput"
            @input="handleCashReceivedInput($event)"
            @blur="handleCashReceivedBlur()"
            @focus="handleCashReceivedFocus()"
            label="ເງິນທີ່ໄດ້ຮັບ (ສຳລັບເງິນສົດ)"
            outlined
            dense
            prepend-inner-icon="mdi-cash"
            :suffix="currencySymbol"
            class="cash-input"
            :disabled="!isTraditionalCashPayment"
            :hint="
              isTraditionalCashPayment ? '' : 'ສຳລັບການຊຳລະເງິນສົດເທົ່ານັ້ນ'
            "
          />
        </v-col>
      </v-row>
    </div>

    <!-- Total Display with REAL-TIME CALCULATIONS -->
    <div class="total-display pa-4">
      <v-row no-gutters align="center" class="total-row">
        <v-col cols="2">
          <div class="total-label">ຍອດລວມ</div>
          <div class="total-amount">{{ formatNumber(subtotal) }}</div>
        </v-col>
        <v-col cols="2" class="text-center">
          <div class="stat-label">ລາຍການ</div>
          <div class="stat-value">{{ productCart.length }}</div>
        </v-col>
        <v-col cols="2" class="text-center">
          <div class="stat-label">ຊິ້ນ</div>
          <div class="stat-value">{{ formatNumber(totalItems) }}</div>
        </v-col>
        <!-- ✅ REAL-TIME: Show discount if typing or has value -->
        <v-col cols="3" class="text-right" v-if="realTimeDiscountNumber > 0">
          <div class="discount-label">ສ່ວນຫລຸດ</div>
          <div class="discount-amount">-{{ formatNumber(realTimeDiscountNumber) }}</div>
        </v-col>
        <!-- ✅ REAL-TIME: Show change calculation -->
        <v-col cols="3" class="text-right">
          <div class="change-label">ເງິນທອນ</div>
          <div class="change-amount" :class="getChangeClass()">
            {{ formatNumber(realTimeChange) }}
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <!-- ✅ REAL-TIME: Final total with live updates -->
      <v-row no-gutters align="center" class="grand-total-row">
        <v-col cols="8">
          <div class="grand-total-label">ຍອດເງິນລວມ</div>
        </v-col>
        <v-col cols="4" class="text-right">
          <div class="grand-total-amount" :class="{ 'total-highlight': realTimeDiscountNumber > 0 }">
            {{ formatNumber(realTimeFinalTotal) }}
          </div>
        </v-col>
      </v-row>

      <!-- ✅ REAL-TIME: Payment validation status -->
      <div v-if="isTraditionalCashPayment && realTimeCashReceived > 0" class="payment-validation mt-2">
        <v-row no-gutters align="center">
          <v-col cols="6">
            <div class="validation-label">ຈ່າຍແລ້ວ:</div>
          </v-col>
          <v-col cols="6" class="text-right">
            <div class="validation-amount">{{ formatNumber(realTimeCashReceived) }}</div>
          </v-col>
        </v-row>
        
        <v-row no-gutters align="center" v-if="paymentShortfall > 0">
          <v-col cols="6">
            <div class="shortfall-label">ຍັງຂາດ:</div>
          </v-col>
          <v-col cols="6" class="text-right">
            <div class="shortfall-amount">{{ formatNumber(paymentShortfall) }}</div>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- Payment Methods Section -->
    <div class="payment-methods pa-4" v-if="showCheckOut">
      <div class="payment-section-header mb-3">
        <v-row no-gutters align="center">
          <v-col>
            <h4 class="payment-title">ວິທີການຊຳລະ</h4>
          </v-col>
          <v-col cols="auto">
            <v-btn
              color="primary"
              small
              outlined
              @click="openMultiPayment"
              :disabled="productCart.length === 0"
            >
              <v-icon left small>mdi-credit-card-multiple</v-icon>
              ຫຼາຍວິທີ
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <v-row no-gutters class="payment-methods-grid ga-2">
        <v-col
          v-for="payment in paymentList"
          :key="payment.id"
          cols="6"
          sm="4"
          md="6"
          lg="4"
        >
          <v-card
            outlined
            class="payment-card-item"
            :class="{ primary: selectedPayment === payment.id }"
            @click="selectPayment(payment.id)"
          >
            <v-card-text class="pa-2 text-center">
              <v-icon
                size="24"
                :color="selectedPayment === payment.id ? 'white' : 'primary'"
                class="mb-1"
              >
                {{ getPaymentIcon(payment.payment_code) }}
              </v-icon>
              <div class="payment-name">
                {{ payment.payment_name }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons pa-4">
      <v-row no-gutters class="ga-2">
        <v-col cols="6">
          <v-btn
            color="grey"
            outlined
            block
            @click="$emit('toggle-checkout')"
            class="toggle-btn"
          >
            <v-icon left>{{
              showCheckOut ? 'mdi-chevron-up' : 'mdi-chevron-down'
            }}</v-icon>
            {{ showCheckOut ? 'ເຊື່ອງ' : 'ຈ່າຍເງິນ' }}
          </v-btn>
        </v-col>
        <v-col cols="6">
          <!-- ENHANCED: Single payment button with real-time validation -->
          <v-btn
            color="success"
            block
            @click="handleSinglePayment"
            :disabled="!canPaySingleRealTime"
            class="pay-button"
            :class="{ 'payment-ready': canPaySingleRealTime }"
            :loading="processingPayment"
          >
            <v-icon left>mdi-cash-register</v-icon>
            {{ getPaymentButtonTextRealTime }}
          </v-btn>
        </v-col>
      </v-row>

      <!-- Multi-payment button (prominent when collapsed) -->
      <v-row no-gutters class="mt-2" v-if="!showCheckOut">
        <v-col cols="12">
          <v-btn
            color="primary"
            block
            large
            @click="openMultiPayment"
            :disabled="productCart.length === 0"
            class="multi-pay-button"
          >
            <v-icon left>mdi-credit-card-multiple</v-icon>
            ຈ່າຍເງິນຫຼາຍວິທີ
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <!-- Quick stats for collapsed state -->
    <div class="quick-stats pa-0" v-if="!showCheckOut && 1 == 0">
      <v-row no-gutters align="center">
        <v-col cols="4" class="text-center">
          <div class="stat-value">{{ productCart.length }}</div>
          <div class="stat-label">ລາຍການ</div>
        </v-col>
        <v-col cols="4" class="text-center">
          <div class="stat-value">{{ formatNumber(totalItems) }}</div>
          <div class="stat-label">ຊິ້ນ</div>
        </v-col>
        <v-col cols="4" class="text-center">
          <div class="stat-value primary--text">
            {{ formatNumber(realTimeFinalTotal) }}
          </div>
          <div class="stat-label">ລາຄາ</div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartFooterComponent',
  props: {
    productCart: {
      type: Array,
      default: () => [],
    },
    discount: {
      type: [Number, String],
      default: 0,
      validator(value) {
        // Accept empty string, null, undefined, or valid numbers
        return value === '' || value === null || value === undefined || !isNaN(Number(value))
      }
    },
    cashReceived: {
      type: [Number, String], 
      default: 0,
      validator(value) {
        // Accept empty string, null, undefined, or valid numbers
        return value === '' || value === null || value === undefined || !isNaN(Number(value))
      }
    },
    changes: {
      type: String,
      default: '0',
    },
    grandTotal: {
      type: Number,
      required: true,
    },
    currencyList: {
      type: Array,
      default: () => [],
    },
    paymentList: {
      type: Array,
      default: () => [],
    },
    showCheckOut: {
      type: Boolean,
      default: false,
    },
    formatNumber: {
      type: Function,
      required: true,
    },
    selectedPayment: {
      type: [Number, String],
      default: null,
    },
    svgIcon: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      currencySymbol: 'LAK',
      processingPayment: false,
      // Raw input values for number formatting
      discountRawInput: '',
      cashReceivedRawInput: '',
      
      // ✅ NEW: Real-time calculation flags
      isTypingDiscount: false,
      isTypingCash: false,
    }
  },

  computed: {
    // Convert props to numbers safely
    discountNumber() {
      const num = Number(this.discount)
      return isNaN(num) ? 0 : num
    },

    cashReceivedNumber() {
      const num = Number(this.cashReceived)
      return isNaN(num) ? 0 : num
    },

    subtotal() {
      return this.productCart.reduce((sum, item) => {
        return sum + item.qty * item.localPrice
      }, 0)
    },

    totalItems() {
      return this.productCart.reduce((sum, item) => sum + item.qty, 0)
    },

    // ✅ NEW: Real-time calculations while typing
    realTimeDiscountNumber() {
      if (this.isTypingDiscount) {
        const parsed = this.parseInputNumber(this.discountRawInput)
        return parsed || 0
      }
      return this.discountNumber
    },

    realTimeCashReceived() {
      if (this.isTypingCash) {
        const parsed = this.parseInputNumber(this.cashReceivedRawInput)
        return parsed || 0
      }
      return this.cashReceivedNumber
    },

    realTimeFinalTotal() {
      return Math.max(0, this.grandTotal - this.realTimeDiscountNumber)
    },

    realTimeChange() {
      if (this.realTimeCashReceived === 0) return 0
      return Math.max(0, this.realTimeCashReceived - this.realTimeFinalTotal)
    },

    paymentShortfall() {
      if (!this.isTraditionalCashPayment || this.realTimeCashReceived === 0) return 0
      return Math.max(0, this.realTimeFinalTotal - this.realTimeCashReceived)
    },

    selectedPaymentMethod() {
      return this.paymentList.find((p) => p.id === this.selectedPayment)
    },

    isTraditionalCashPayment() {
      return (
        this.selectedPaymentMethod &&
        this.selectedPaymentMethod.payment_code === 'CASH'
      )
    },

    canPaySingle() {
      if (this.productCart.length === 0 || !this.selectedPayment) {
        return false
      }
      return true
    },

    // ✅ NEW: Real-time payment validation
    canPaySingleRealTime() {
      if (this.productCart.length === 0 || !this.selectedPayment) {
        return false
      }

      // For cash payments, ensure sufficient cash received in real-time
      // if (this.isTraditionalCashPayment) {
      //   return this.realTimeCashReceived >= this.realTimeFinalTotal
      // }

      // For non-cash payments, just need selection
      return true
    },

    getPaymentButtonText() {
      if (!this.selectedPaymentMethod) {
        return 'ເລືອກການຊຳລະ'
      }

      if (this.isTraditionalCashPayment) {
        return 'ຊຳລະເງິນສົດ'
      }

      return `ຊຳລະດ້ວຍ ${this.selectedPaymentMethod.payment_name}`
    },

    // ✅ NEW: Real-time payment button text
    getPaymentButtonTextRealTime() {
      if (!this.selectedPaymentMethod) {
        return 'ເລືອກການຊຳລະ'
      }

      if (this.isTraditionalCashPayment) {
        if (this.paymentShortfall > 0) {
          return `ຂາດ ${this.formatNumber(this.paymentShortfall)}`
        }
        return 'ຊຳລະເງິນສົດ'
      }

      return `ຊຳລະດ້ວຍ ${this.selectedPaymentMethod.payment_name}`
    },
  },

  watch: {
    // Initialize raw inputs when props change
    discount: {
      immediate: true,
      handler(newVal) {
        if (!this.isTypingDiscount) {
          if (newVal && newVal > 0) {
            this.discountRawInput = this.formatNumber(this.discountNumber)
          } else {
            this.discountRawInput = ''
          }
        }
      }
    },
    
    cashReceived: {
      immediate: true,
      handler(newVal) {
        if (!this.isTypingCash) {
          if (newVal && newVal > 0) {
            this.cashReceivedRawInput = this.formatNumber(this.cashReceivedNumber)
          } else {
            this.cashReceivedRawInput = ''
          }
        }
      }
    }
  },

  methods: {
    // Number formatting methods (same as multi-payment component)
    parseInputNumber(value) {
      if (!value) return null
      // Remove all non-digit characters except decimal point
      const cleaned = value.toString().replace(/[^\d.]/g, '')
      const parsed = parseFloat(cleaned)
      return isNaN(parsed) ? null : parsed
    },

    // ✅ ENHANCED: Real-time discount field handlers
    handleDiscountInput(value) {
      this.isTypingDiscount = true
      // Parse and emit immediately for real-time updates
      const parsed = this.parseInputNumber(value)
      const cleanValue = parsed || 0
      this.$emit('update:discount', cleanValue)
    },

    handleDiscountFocus() {
      this.isTypingDiscount = true
      // When focusing, show raw number without formatting
      if (this.discountNumber > 0) {
        this.discountRawInput = this.discountNumber.toString()
      } else {
        this.discountRawInput = ''
      }
    },

    handleDiscountBlur() {
      this.isTypingDiscount = false
      // Parse the input value
      const parsed = this.parseInputNumber(this.discountRawInput)
      const cleanValue = parsed || 0
      
      // Emit the clean value to parent
      this.$emit('update:discount', cleanValue)
      
      // Format the display
      if (cleanValue > 0) {
        this.discountRawInput = this.formatNumber(cleanValue)
      } else {
        this.discountRawInput = ''
      }
    },

    // ✅ ENHANCED: Real-time cash received field handlers
    handleCashReceivedInput(value) {
      this.isTypingCash = true
      // Parse and emit immediately for real-time updates
      const parsed = this.parseInputNumber(value)
      const cleanValue = parsed || 0
      this.$emit('update:cash-received', cleanValue)
    },

    handleCashReceivedFocus() {
      this.isTypingCash = true
      // When focusing, show raw number without formatting
      if (this.cashReceivedNumber > 0) {
        this.cashReceivedRawInput = this.cashReceivedNumber.toString()
      } else {
        this.cashReceivedRawInput = ''
      }
    },

    handleCashReceivedBlur() {
      this.isTypingCash = false
      // Parse the input value
      const parsed = this.parseInputNumber(this.cashReceivedRawInput)
      const cleanValue = parsed || 0
      
      // Emit the clean value to parent
      this.$emit('update:cash-received', cleanValue)
      
      // Format the display
      if (cleanValue > 0) {
        this.cashReceivedRawInput = this.formatNumber(cleanValue)
      } else {
        this.cashReceivedRawInput = ''
      }
    },

    // ✅ NEW: Get change amount styling
    getChangeClass() {
      if (this.realTimeChange > 0) {
        return 'change-positive'
      } else if (this.paymentShortfall > 0) {
        return 'change-negative'
      }
      return ''
    },

    selectPayment(paymentId) {
      this.$emit('select-payment', paymentId)
    },

    getPaymentIcon(paymentCode) {
      const iconMap = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        BCEL: 'mdi-cellphone',
        QR: 'mdi-qrcode',
        TRANSFER: 'mdi-bank-transfer',
        CREDIT: 'mdi-credit-card-outline',
      }
      return iconMap[paymentCode?.toUpperCase()] || 'mdi-credit-card'
    },

    /**
     * ENHANCED: Handle single payment processing with real-time validation
     */
    handleSinglePayment() {
      if (!this.canPaySingleRealTime) {
        this.showValidationError()
        return
      }

      this.processingPayment = true

      // Emit event for single payment processing
      this.$emit('process-single-payment')

      // Reset processing state after a delay
      setTimeout(() => {
        this.processingPayment = false
      }, 2000)
    },

    showValidationError() {
      if (this.productCart.length === 0) {
        this.$emit('show-error', 'ກະລຸນາເລືອກສິນຄ້າ')
        return
      }

      if (!this.selectedPayment) {
        this.$emit('show-error', 'ກະລຸນາເລືອກວິທີການຊຳລະ')
        return
      }

      if (
        this.isTraditionalCashPayment &&
        this.realTimeCashReceived < this.realTimeFinalTotal
      ) {
        const needed = this.formatNumber(this.paymentShortfall)
        this.$emit('show-error', `ຈຳນວນເງິນບໍ່ພຽງພໍ ຕ້ອງການອີກ ${needed}`)
        return
      }
    },

    openMultiPayment() {
      if (this.productCart.length === 0) {
        this.$emit('show-error', 'ກະລຸນາເລືອກສິນຄ້າ')
        return
      }

      // Emit event to parent to open multi-payment dialog
      this.$emit('open-multi-payment')
    },
  },
}
</script>

<style scoped>
.cart-footer {
  background: white;
  border-top: 1px solid #e0e0e0;
}

.payment-inputs {
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}

.total-display {
  background: white;
}

.total-row {
  margin-bottom: 8px;
}

.total-label,
.discount-label,
.change-label {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.total-amount,
.discount-amount,
.change-amount {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.discount-amount {
  color: #ff9800;
}

.change-amount {
  transition: color 0.3s ease;
}

/* ✅ NEW: Real-time change styling */
.change-positive {
  color: #4caf50 !important;
  font-weight: 700;
}

.change-negative {
  color: #f44336 !important;
  font-weight: 700;
}

.grand-total-label {
  font-size: 18px;
  font-weight: 700;
  color: #333;
}

.grand-total-amount {
  font-size: 24px;
  font-weight: 700;
  color: #1976d2;
  transition: all 0.3s ease;
}

/* ✅ NEW: Total highlight animation */
.total-highlight {
  color: #4caf50 !important;
  transform: scale(1.02);
  text-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
}

/* ✅ NEW: Payment validation styling */
.payment-validation {
  background: rgba(76, 175, 80, 0.05);
  border-radius: 8px;
  padding: 8px 12px;
  border-left: 4px solid #4caf50;
}

.validation-label,
.shortfall-label {
  font-size: 12px;
  font-weight: 500;
  color: #666;
}

.validation-amount {
  font-size: 14px;
  font-weight: 600;
  color: #4caf50;
}

.shortfall-amount {
  font-size: 14px;
  font-weight: 600;
  color: #f44336;
}

.payment-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.payment-methods-grid {
  margin-top: 12px;
}

.payment-card-item {
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
}

.payment-card-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.payment-card-item--selected {
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

.payment-name {
  font-weight: 600;
  font-size: 11px;
  line-height: 1.2;
}

.pay-button {
  font-weight: 600;
  text-transform: none;
  transition: all 0.3s ease;
}

.pay-button:disabled {
  opacity: 0.6;
}

/* ✅ NEW: Payment ready animation */
.payment-ready {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3) !important;
}

.multi-pay-button {
  font-weight: 600;
  text-transform: none;
}

.toggle-btn {
  text-transform: none;
}

.quick-stats {
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
}

.stat-value {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
}

.stat-label {
  font-size: 12px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* ✅ NEW: Input field enhancements */
.discount-input input {
  font-weight: 600;
}

.cash-input input {
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .payment-methods-grid .v-col {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }

  .grand-total-amount {
    font-size: 20px;
  }
  
  .total-row .v-col {
    margin-bottom: 8px;
  }
}
</style>