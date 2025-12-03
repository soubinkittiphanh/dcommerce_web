<template>
  <div class="cart-footer">
    <!-- Payment Input Section -->
    <div class="payment-inputs pa-4" v-if="showCheckOut">
      <v-row no-gutters class="ga-3">
        <v-col cols="12" md="6">
          <v-text-field
            :value="discount"
            @input="$emit('update:discount', $event)"
            label="ສ່ວນຫລຸດ"
            type="number"
            outlined
            dense
            prepend-inner-icon="mdi-percent"
            :suffix="currencySymbol"
            class="discount-input"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            :value="cashReceived"
            @input="$emit('update:cash-received', $event)"
            label="ເງິນທີ່ໄດ້ຮັບ (ສຳລັບເງິນສົດ)"
            type="number"
            outlined
            dense
            prepend-inner-icon="mdi-cash"
            :suffix="currencySymbol"
            class="cash-input"
            :disabled="!isTraditionalCashPayment"
            :hint="isTraditionalCashPayment ? '' : 'ສຳລັບການຊຳລະເງິນສົດເທົ່ານັ້ນ'"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Total Display -->
    <div class="total-display pa-4">
      <v-row no-gutters align="center" class="total-row">
        <v-col cols="6">
          <div class="total-label">ຍອດລວມ</div>
          <div class="total-amount">{{ formatNumber(subtotal) }}</div>
        </v-col>
        <v-col cols="6" class="text-right" v-if="discount > 0">
          <div class="discount-label">ສ່ວນຫລຸດ</div>
          <div class="discount-amount">-{{ formatNumber(discount) }}</div>
        </v-col>
      </v-row>
      
      <v-divider class="my-2"></v-divider>
      
      <v-row no-gutters align="center" class="grand-total-row" v-if="1==0">
        <v-col cols="8">
          <div class="grand-total-label">ຍອດເງິນລວມ</div>
        </v-col>
        <v-col cols="4" class="text-right">
          <div class="grand-total-amount">{{ formatNumber(grandTotal) }}</div>
        </v-col>
      </v-row>

      <!-- Change display for single payment method -->
      <v-row v-if="showCheckOut && isTraditionalCashPayment && cashReceived > 0" no-gutters align="center" class="change-row">
        <v-col cols="8">
          <div class="change-label">ເງິນທອນ</div>
        </v-col>
        <v-col cols="4" class="text-right">
          <div class="change-amount">{{ changes }}</div>
        </v-col>
      </v-row>
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
            :class="{ 'primary': selectedPayment === payment.id }"
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
            <v-icon left>{{ showCheckOut ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            {{ showCheckOut ? 'ເຊື່ອງ' : 'ຈ່າຍເງິນ' }}
          </v-btn>
        </v-col>
        <v-col cols="6">
          <!-- ENHANCED: Single payment button with proper validation -->
          <v-btn
            color="success"
            block
            @click="handleSinglePayment"
            :disabled="!canPaySingle"
            class="pay-button"
            :loading="processingPayment"
          >
            <v-icon left>mdi-cash-register</v-icon>
            {{ getPaymentButtonText }}
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
    <div class="quick-stats pa-3" v-if="!showCheckOut && 1==0" >
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
          <div class="stat-value primary--text">{{ formatNumber(grandTotal) }}</div>
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
      default: () => []
    },
    discount: {
      type: Number,
      default: 0
    },
    cashReceived: {
      type: Number,
      default: 0
    },
    changes: {
      type: String,
      default: '0'
    },
    grandTotal: {
      type: Number,
      required: true
    },
    currencyList: {
      type: Array,
      default: () => []
    },
    paymentList: {
      type: Array,
      default: () => []
    },
    showCheckOut: {
      type: Boolean,
      default: false
    },
    formatNumber: {
      type: Function,
      required: true
    },
    selectedPayment: {
      type: [Number, String],
      default: null
    },
    svgIcon: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      currencySymbol: 'LAK',
      processingPayment: false
    }
  },

  computed: {
    subtotal() {
      return this.productCart.reduce((sum, item) => {
        return sum + (item.qty * item.localPrice)
      }, 0)
    },

    totalItems() {
      return this.productCart.reduce((sum, item) => sum + item.qty, 0)
    },

    selectedPaymentMethod() {
      return this.paymentList.find(p => p.id === this.selectedPayment)
    },

    isTraditionalCashPayment() {
      return this.selectedPaymentMethod && this.selectedPaymentMethod.payment_code === 'CASH'
    },

    canPaySingle() {
      // if (this.productCart.length === 0 || !this.selectedPayment || this.grandTotal <= 0) {
      if (this.productCart.length === 0 || !this.selectedPayment ) {
        return false
      }

      // For cash payments, ensure sufficient cash received
      if (this.isTraditionalCashPayment) {
        this.cashReceived = this.grandTotal - this.discount;
        return this.cashReceived >= (this.grandTotal - this.discount)
      }

      // For non-cash payments, just need selection
      return true
    },

    getPaymentButtonText() {
      if (!this.selectedPaymentMethod) {
        return 'ເລືອກການຊຳລະ'
      }

      if (this.isTraditionalCashPayment) {
        if (this.cashReceived < (this.grandTotal - this.discount)) {
          return 'ໃສ່ຈຳນວນເງິນ'
        }
        return 'ຊຳລະເງິນສົດ'
      }

      return `ຊຳລະດ້ວຍ ${this.selectedPaymentMethod.payment_name}`
    }
  },

  methods: {
    selectPayment(paymentId) {
      this.$emit('select-payment', paymentId)
    },

    getPaymentIcon(paymentCode) {
      const iconMap = {
        'CASH': 'mdi-cash',
        'CARD': 'mdi-credit-card',
        'BCEL': 'mdi-cellphone',
        'QR': 'mdi-qrcode',
        'TRANSFER': 'mdi-bank-transfer',
        'CREDIT': 'mdi-credit-card-outline'
      }
      return iconMap[paymentCode?.toUpperCase()] || 'mdi-credit-card'
    },

    /**
     * ENHANCED: Handle single payment processing
     * This properly validates and processes single payments without opening multi-payment dialog
     */
    handleSinglePayment() {
      if (!this.canPaySingle) {
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

      if (this.isTraditionalCashPayment && this.cashReceived < (this.grandTotal - this.discount)) {
        const needed = this.formatNumber(this.grandTotal - this.discount - this.cashReceived)
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
    }
  }
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
  color: #4caf50;
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
  /* border-color: #1976d2; */
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.payment-card-item--selected {
  /* background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%); */
  color: white;
  /* border-color: #1976d2; */
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
}

.pay-button:disabled {
  opacity: 0.6;
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

/* Responsive adjustments */
@media (max-width: 600px) {
  .payment-methods-grid .v-col {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }
  
  .grand-total-amount {
    font-size: 20px;
  }
}
</style>