<template>
  <div class="cart-footer">
    <div class="payment-inputs pa-3">
      <v-row no-gutters class="ga-2 mb-2" v-if="currentCustomer && currentCustomer.loyaltyPoints > 0">
        <v-col cols="12">
          <v-card outlined class="loyalty-card pa-2" color="blue-grey lighten-5">
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <v-icon color="primary" small class="mr-1">mdi-star-circle</v-icon>
                <span class="text-caption font-weight-bold">Points: {{ currentCustomer.loyaltyPoints }}</span>
              </div>
              <v-btn x-small color="primary" @click="toggleRedeem" :outlined="!showRedeem">
                {{ showRedeem ? 'Cancel' : 'Redeem' }}
              </v-btn>
            </div>
            <v-expand-transition>
              <div v-if="showRedeem" class="mt-2">
                <v-row no-gutters align="center">
                  <v-col cols="8">
                    <v-text-field v-model.number="pointsToRedeem" label="Points to use" type="number" dense
                      hide-details outlined class="compact-input" :max="currentCustomer.loyaltyPoints" />
                  </v-col>
                  <v-col cols="4" class="text-right">
                    <div class="text-caption success--text font-weight-bold">
                       -{{ formatNumber(loyaltyDiscountAmount) }}
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="ga-2">
        <v-col cols="12" md="6">
          <v-text-field v-model="discountRawInput" @input="handleDiscountInput($event)" @blur="handleDiscountBlur()"
            @focus="handleDiscountFocus()" label="ສ່ວນຫລຸດ" outlined dense hide-details prepend-inner-icon="mdi-percent"
            :suffix="localCurrency?.code || 'LAK'" class="compact-input" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="cashReceivedRawInput" @input="handleCashReceivedInput($event)"
            @blur="handleCashReceivedBlur()" @focus="handleCashReceivedFocus()"
            :label="`ຮັບເງິນ (${localCurrency?.code || 'LAK'})`" outlined dense hide-details
            prepend-inner-icon="mdi-cash" :suffix="localCurrency?.code || 'LAK'" class="compact-input"
            :disabled="!isTraditionalCashPayment" />
        </v-col>
      </v-row>
    </div>

    <div class="summary-section pa-3 grey lighten-5">
      <div class="d-flex justify-space-between align-center mb-1">
        <div class="item-stats grey--text text--darken-1 font-weight-medium">
          <v-icon small class="mr-1">mdi-tag-outline</v-icon>
          {{ productCart.length }} ລາຍການ ({{ totalQty }} QTY)
        </div>
        <div class="text-right">
          <div class="subtotal-label grey--text text--darken-1">ມູນຄ່າສິນຄ້າ</div>
          <div class="subtotal-amount font-weight-bold">{{ formatNumber(pureSubtotalLAK) }}</div>
        </div>
      </div>

      <div v-if="totalTaxLAK > 0" class="d-flex justify-space-between align-center mb-1">
        <div class="stat-label success--text">ອາກອນ (Tax)</div>
        <div class="stat-value success--text font-weight-bold">+{{ formatNumber(totalTaxLAK) }}</div>
      </div>

      <!-- Currency Breakdown -->
      <div v-if="currencyBreakdown.length > 1" class="currency-breakdown-section mt-1 pt-1">
        <div v-for="curr in currencyBreakdown" :key="curr.code"
          class="d-flex justify-space-between align-center mb-0 breakdown-row">
          <div class="breakdown-label grey--text">{{ curr.code }} Total</div>
          <div class="breakdown-value grey--text text--darken-2 font-weight-medium">
            {{ formatNumber(curr.amount) }} {{ curr.code }}
          </div>
        </div>
      </div>

      <div class="d-flex justify-space-between align-end mt-2 pt-2 border-top">
        <div class="change-info">
          <div class="change-label grey--text text--darken-1">ເງິນທອນ</div>
          <div class="change-amount" :class="getChangeClass()">
            {{ formatNumber(realTimeChange) }} <small>{{ localCurrency?.code }}</small>
          </div>
        </div>
        <div class="grand-total-info text-right">
          <div class="grand-total-label primary--text font-weight-bold">ຍອດລວມທັງໝົດ</div>
          <div class="grand-total-amount primary--text" :class="{ 'total-highlight': realTimeDiscountNumber > 0 }">
            {{ formatNumber(realTimeFinalTotal) }}
            <span class="currency-label">{{ localCurrency?.code }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="payment-methods pa-3" v-if="showCheckOut">
      <div class="d-flex align-center justify-space-between mb-2">
        <h4 class="payment-title grey--text text--darken-2">ວິທີການຊຳລະ</h4>
        <v-btn color="primary" x-small outlined @click="openMultiPayment" :disabled="productCart.length === 0">
          <v-icon left x-small>mdi-credit-card-multiple</v-icon>ຫຼາຍວິທີ
        </v-btn>
      </div>

      <v-row no-gutters class="ga-2">
        <v-col v-for="payment in paymentList" :key="payment.id" cols="4">
          <v-card flat outlined class="payment-node" :class="{ 'selected-payment': selectedPayment === payment.id }"
            @click="selectPayment(payment.id)">
            <div class="pa-2 text-center">
              <v-icon small :color="selectedPayment === payment.id ? 'primary' : 'grey darken-1'">
                {{ getPaymentIcon(payment.payment_code) }}
              </v-icon>
              <div class="payment-node-name" :class="{ 'primary--text': selectedPayment === payment.id }">
                {{ payment.payment_name }}
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="footer-actions pa-3 pt-0">
      <v-row no-gutters class="ga-2">
        <v-col cols="4">
          <v-btn color="grey lighten-1" outlined block small @click="$emit('toggle-checkout')" class="rounded-lg">
            <v-icon small>{{ showCheckOut ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8">
          <v-btn color="success" block small @click="handleSinglePayment" :disabled="!canPaySingleRealTime"
            :loading="processingPayment" class="pay-btn rounded-lg elevation-2">
            <strong>{{ getPaymentButtonTextRealTime }}</strong>
          </v-btn>
        </v-col>
      </v-row>

      <v-btn v-if="!showCheckOut" color="primary" block small outlined @click="openMultiPayment"
        :disabled="productCart.length === 0" class="mt-2 rounded-lg">
        <v-icon left small>mdi-credit-card-multiple</v-icon>ຈ່າຍເງິນຫຼາຍວິທີ
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CurrencyHelper from '@/utils/currency-helper'

export default {
  name: 'CartFooterComponent',
  props: {
    productCart: { type: Array, default: () => [] },
    discount: { type: [Number, String], default: 0 },
    cashReceived: { type: [Number, String], default: 0 },
    formatNumber: { type: Function, required: true },
    selectedPayment: { type: [Number, String], default: null },
    paymentList: { type: Array, default: () => [] },
    showCheckOut: { type: Boolean, default: true },
    currentCustomer: { type: Object, default: null }
  },

  data() {
    return {
      processingPayment: false,
      discountRawInput: '',
      cashReceivedRawInput: '',
      isTypingDiscount: false,
      isTypingCash: false,
      showRedeem: false,
      pointsToRedeem: 0
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency', 'findSPF']),

    localCurrency() {
      return this.findAllCurrency.find((c) => c.isLocalCCY)
    },

    pureSubtotalLAK() {
      return this.productCart.reduce((sum, item) => {
        const currency = this.findAllCurrency.find(c => c.id === item.saleCurrencyId)
        const lineTotal = item.qty * (item.localPrice || 0)
        return sum + (currency?.isLocalCCY ? lineTotal : CurrencyHelper.convertToLocal(lineTotal, currency, this.localCurrency))
      }, 0)
    },

    totalTaxLAK() {
      return this.productCart.reduce((sum, item) => {
        if (item.tax?.taxType === 'EXC') {
          const currency = this.findAllCurrency.find(c => c.id === item.saleCurrencyId)
          const rate = parseFloat(item.tax.rate || 0)
          const itemTax = (item.qty * item.localPrice) * rate
          return sum + (currency?.isLocalCCY ? itemTax : CurrencyHelper.convertToLocal(itemTax, currency, this.localCurrency))
        }
        return sum
      }, 0)
    },

    realTimeDiscountNumber() {
      return this.isTypingDiscount ? (this.parseInputNumber(this.discountRawInput) || 0) : Number(this.discount || 0)
    },

    realTimeCashReceived() {
      return this.isTypingCash ? (this.parseInputNumber(this.cashReceivedRawInput) || 0) : Number(this.cashReceived || 0)
    },

    loyaltyDiscountAmount() {
      if (!this.showRedeem) return 0;
      const spfRate = (this.findSPF || []).find(
        (spf) => spf.code === 'LOYALTY_REDEEM_RATE' && spf.isActive
      )
      const redeemRate = spfRate ? parseFloat(spfRate.value) || 10 : 10;
      return this.pointsToRedeem * redeemRate;
    },

    realTimeFinalTotal() {
      const total = (this.pureSubtotalLAK + this.totalTaxLAK) - this.realTimeDiscountNumber - this.loyaltyDiscountAmount
      return Math.max(0, total)
    },

    realTimeChange() {
      if (this.realTimeCashReceived === 0) return 0
      return Math.max(0, this.realTimeCashReceived - this.realTimeFinalTotal)
    },

    isTraditionalCashPayment() {
      const method = this.paymentList.find(p => p.id === this.selectedPayment)
      return method?.payment_code === 'CASH'
    },

    paymentShortfall() {
      return Math.max(0, this.realTimeFinalTotal - this.realTimeCashReceived)
    },

    canPaySingleRealTime() {
      return this.productCart.length > 0 && this.selectedPayment !== null
    },

    getPaymentButtonTextRealTime() {
      const method = this.paymentList.find(p => p.id === this.selectedPayment)
      return method ? `ຊຳລະ (${method.payment_name})` : 'ເລືອກການຊຳລະ'
    },

    totalQty() {
      return this.productCart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0)
    },

    currencyBreakdown() {
      const breakdown = {}

      this.productCart.forEach(item => {
        const currency = this.findAllCurrency.find(c => c.id === item.saleCurrencyId)
        if (!currency) return

        if (!breakdown[currency.code]) {
          breakdown[currency.code] = {
            code: currency.code,
            amount: 0
          }
        }

        const lineSubtotal = item.qty * (item.localPrice || 0)
        let lineTotal = lineSubtotal

        // Include tax if exclusive
        if (item.tax?.taxType === 'EXC') {
          const rate = parseFloat(item.tax.rate || 0)
          lineTotal += (lineSubtotal * rate)
        }

        breakdown[currency.code].amount += lineTotal
      })

      return Object.values(breakdown)
    }
  },

  methods: {
    parseInputNumber(value) {
      if (!value) return 0
      return parseFloat(value.toString().replace(/,/g, ''))
    },

    formatInputNumber(value) {
      if (value === null || value === undefined || value === '') return ''

      // Remove all characters except digits and the first decimal point
      let cleanValue = value.toString().replace(/,/g, '')

      // If it's just a minus sign or empty, return as is
      if (cleanValue === '-' || cleanValue === '') return cleanValue

      // Split into integer and decimal parts
      const parts = cleanValue.split('.')

      // Format the integer part with commas
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      // Rejoin with decimal part if it exists
      return parts.length > 1 ? parts.join('.') : parts[0]
    },

    handleDiscountInput(val) {
      this.isTypingDiscount = true
      const numericValue = this.parseInputNumber(val)
      this.discountRawInput = this.formatInputNumber(val)
      this.$emit('update:discount', numericValue || 0)
    },

    handleDiscountBlur() {
      this.isTypingDiscount = false
      this.discountRawInput = this.discount > 0 ? this.formatNumber(Number(this.discount)) : ''
    },

    handleDiscountFocus() {
      this.isTypingDiscount = true
      this.discountRawInput = this.discount > 0 ? this.discount.toString() : ''
    },

    handleCashReceivedInput(val) {
      this.isTypingCash = true
      const numericValue = this.parseInputNumber(val)
      this.cashReceivedRawInput = this.formatInputNumber(val)
      this.$emit('update:cash-received', numericValue || 0)
    },

    handleCashReceivedBlur() {
      this.isTypingCash = false
      this.cashReceivedRawInput = this.cashReceived > 0 ? this.formatNumber(Number(this.cashReceived)) : ''
    },

    handleCashReceivedFocus() {
      this.isTypingCash = true
      this.cashReceivedRawInput = this.cashReceived > 0 ? this.cashReceived.toString() : ''
    },

    selectPayment(id) { this.$emit('select-payment', id) },

    getPaymentIcon(code) {
      const icons = { CASH: 'mdi-cash', QR: 'mdi-qrcode', CARD: 'mdi-credit-card' }
      return icons[code?.toUpperCase()] || 'mdi-bank'
    },

    getChangeClass() {
      return this.realTimeChange > 0 ? 'success--text font-weight-bold' : (this.paymentShortfall > 0 ? 'error--text' : '')
    },

    handleSinglePayment() {
      this.processingPayment = true
      this.$emit('process-single-payment')
      setTimeout(() => { this.processingPayment = false }, 2000)
    },

    openMultiPayment() { this.$emit('open-multi-payment') },

    toggleRedeem() {
      this.showRedeem = !this.showRedeem;
      if (!this.showRedeem) {
        this.pointsToRedeem = 0;
      }
      this.$emit('update:redeemed-points', this.pointsToRedeem);
    }
  },
  watch: {
    pointsToRedeem(val) {
      const max = this.currentCustomer?.loyaltyPoints || 0;
      if (val > max) this.pointsToRedeem = max;
      if (val < 0) this.pointsToRedeem = 0;
      this.$emit('update:redeemed-points', this.pointsToRedeem);
    }
  }
}
</script>

<style scoped>
.cart-footer {
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.compact-input ::v-deep .v-input__control {
  min-height: 36px !important;
}

.compact-input ::v-deep .v-label {
  font-size: 13px;
}

.summary-section {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.item-stats {
  font-size: 12px;
}

.subtotal-label,
.change-label {
  font-size: 11px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.subtotal-amount {
  font-size: 14px;
}

.change-amount {
  font-size: 16px;
  font-weight: 700;
}

.grand-total-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.grand-total-amount {
  font-size: 24px;
  font-weight: 800;
  line-height: 1;
}

.currency-label {
  font-size: 14px;
  font-weight: 500;
  margin-left: 2px;
}

.currency-breakdown-section {
  border-top: 1px solid rgba(0, 0, 0, 0.03);
}

.breakdown-row {
  line-height: 1.2;
}

.breakdown-label,
.breakdown-value {
  font-size: 10px;
}

.border-top {
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
}

.payment-title {
  font-size: 13px;
  font-weight: 700;
}

.payment-node {
  border-radius: 8px !important;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fdfdfd !important;
}

.payment-node:hover {
  background: #f5f5f5 !important;
  border-color: var(--v-primary-base) !important;
}

.selected-payment {
  background: #f0f7ff !important;
  border-color: var(--v-primary-base) !important;
  border-width: 2px;
}

.payment-node-name {
  font-size: 10px;
  font-weight: 700;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pay-btn {
  height: 40px !important;
  font-size: 14px !important;
}

.total-highlight {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}
</style>