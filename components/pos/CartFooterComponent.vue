<template>
  <div class="cart-footer">
    <div class="payment-inputs pa-3">
      <v-row v-if="currentCustomer && currentCustomer.loyaltyPoints > 0" no-gutters class="ga-2 mb-2">
        <v-col cols="12">
          <v-card outlined class="loyalty-card pa-2" color="blue-grey lighten-5">
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <v-icon color="primary" small class="mr-1">mdi-star-circle</v-icon>
                <span class="text-caption font-weight-bold">Points: {{ currentCustomer.loyaltyPoints }}</span>
              </div>
              <v-btn x-small color="primary" :outlined="!showRedeem" @click="toggleRedeem">
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
          <v-text-field
            ref="discountField"
            v-model="discountRawInput"
            readonly
            inputmode="none"
            label="ສ່ວນຫລຸດ"
            outlined
            dense
            hide-details
            :prepend-inner-icon="discountType === 'percent' ? 'mdi-percent' : 'mdi-cash'"
            class="compact-input"
            @input="handleDiscountInput($event)"
            @blur="handleDiscountBlur()"
            @focus="handleDiscountFocus()"
            @click="openKeypad('discount')"
          >
            <template #append>
              <v-btn-toggle
                v-model="discountType"
                mandatory
                dense
                active-class="primary white--text"
                class="discount-toggle-btn-group elevation-0"
                style="height: 24px; border: none; background: transparent; margin-top: -2px;"
                @change="onDiscountTypeChange"
                @click.native.stop
              >
                <v-btn x-small value="flat" class="px-2" style="min-width: 28px; height: 24px; font-size: 11px;" @click.stop>
                  {{ localCurrency?.symbol || '₭' }}
                </v-btn>
                <v-btn x-small value="percent" class="px-2" style="min-width: 28px; height: 24px; font-size: 11px;" @click.stop>
                  %
                </v-btn>
              </v-btn-toggle>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field ref="cashReceivedField" v-model="cashReceivedRawInput" readonly inputmode="none"
            :label="`ຮັບເງິນ (${localCurrency?.code || 'LAK'})`" outlined dense
            hide-details prepend-inner-icon="mdi-cash" :suffix="localCurrency?.code || 'LAK'" class="compact-input"
            :disabled="!isTraditionalCashPayment" @input="handleCashReceivedInput($event)" @blur="handleCashReceivedBlur()"
            @focus="handleCashReceivedFocus()" @click="openKeypad('cashReceived')" />
        </v-col>
      </v-row>
      <div v-if="discountType === 'percent' && percentValue > 0" style="font-size: 10px; line-height: 1;" class="grey--text mt-1 px-1 text-right">
        ≈ -{{ formatNumber(realTimeDiscountNumber) }} {{ localCurrency?.code || 'LAK' }}
      </div>
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

      <div v-if="realTimeDiscountNumber > 0" class="d-flex justify-space-between align-center mb-0 breakdown-row">
        <div class="breakdown-label error--text">ສ່ວນຫລຸດ (Discount) <span v-if="discountType === 'percent'">({{ percentValue }}%)</span></div>
        <div class="breakdown-value error--text font-weight-medium">-{{ formatNumber(realTimeDiscountNumber) }}</div>
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
          <!-- Other Currency Grand Totals -->
          <div v-if="otherCurrenciesGrandTotals.length > 0" class="other-currencies-total mt-1" style="font-size: 11px; line-height: 1;">
            <span v-for="curr in otherCurrenciesGrandTotals" :key="curr.code" class="grey--text text--darken-1 ml-2 font-weight-bold">
              ≈ {{ formatNumber(curr.amount) }} {{ curr.code }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showCheckOut" class="payment-methods pa-3">
      <div class="d-flex align-center justify-space-between mb-2">
        <h4 class="payment-title grey--text text--darken-2">ວິທີການຊຳລະ</h4>
        <v-btn color="primary" x-small outlined :disabled="productCart.length === 0" @click="openMultiPayment">
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
          <v-btn color="grey lighten-1" outlined block small class="rounded-lg" @click="$emit('toggle-checkout')">
            <v-icon small>{{ showCheckOut ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8">
          <v-btn color="success" block small :disabled="!canPaySingleRealTime" :loading="processingPayment"
            class="pay-btn rounded-lg elevation-2" @click="handleSinglePayment">
            <strong>{{ getPaymentButtonTextRealTime }}</strong>
          </v-btn>
        </v-col>
      </v-row>

      <v-btn v-if="!showCheckOut" color="primary" block small outlined :disabled="productCart.length === 0"
        class="mt-2 rounded-lg" @click="openMultiPayment">
        <v-icon left small>mdi-credit-card-multiple</v-icon>ຈ່າຍເງິນຫຼາຍວິທີ
      </v-btn>
    </div>

    <!-- Custom Virtual Keypad Dialog -->
    <numeric-keypad-dialog
      v-model="keypadOpen"
      :title="keypadTitle"
      :initial-value="keypadInitialValue"
      :suffix="keypadSuffix"
      :presets="keypadPresets"
      @confirm="handleKeypadConfirm"
      @cancel="handleKeypadCancel"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NumericKeypadDialog from './dialogs/NumericKeypadDialog.vue'
import CurrencyHelper from '@/utils/currency-helper'

export default {
  name: 'CartFooterComponent',
  components: {
    NumericKeypadDialog
  },
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
      pointsToRedeem: 0,
      
      discountType: 'flat',
      percentValue: 0,
      flatValue: 0,

      // Keypad settings
      keypadOpen: false,
      keypadTarget: '',
      keypadTitle: '',
      keypadInitialValue: 0,
      keypadSuffix: '',
      keypadPresets: []
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
      if (this.discountType === 'percent') {
        const pct = this.isTypingDiscount ? (this.parseInputNumber(this.discountRawInput) || 0) : this.percentValue
        return Math.round(this.grandTotalBeforeDiscount * pct / 100)
      }
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

    grandTotalBeforeDiscount() {
      return this.pureSubtotalLAK + this.totalTaxLAK
    },

    realTimeFinalTotal() {
      const total = this.grandTotalBeforeDiscount - this.realTimeDiscountNumber - this.loyaltyDiscountAmount
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
    },

    otherCurrenciesGrandTotals() {
      if (!this.localCurrency) return []
      const others = this.findAllCurrency.filter((c) => !c.isLocalCCY && c.isActive !== false)
      return others.map((curr) => {
        const converted = CurrencyHelper.convertFromLocal(
          this.realTimeFinalTotal,
          curr,
          this.localCurrency
        )
        return {
          code: curr.code,
          symbol: curr.symbol,
          amount: converted
        }
      })
    },

    discountPresets() {
      if (this.discountType === 'percent') {
        return [
          { label: '5%', value: 5, action: 'set' },
          { label: '10%', value: 10, action: 'set' },
          { label: '15%', value: 15, action: 'set' },
          { label: '20%', value: 20, action: 'set' },
          { label: '25%', value: 25, action: 'set' },
          { label: '50%', value: 50, action: 'set' }
        ]
      }
      return [
        { label: '1,000', value: 1000, action: 'set' },
        { label: '5,000', value: 5000, action: 'set' },
        { label: '10,000', value: 10000, action: 'set' },
        { label: '20,000', value: 20000, action: 'set' },
        { label: '50,000', value: 50000, action: 'set' },
        { label: '100,000', value: 100000, action: 'set' }
      ]
    },

    cashReceivedPresets() {
      const finalTotal = this.realTimeFinalTotal || 0
      const list = []
      
      if (finalTotal > 0) {
        list.push({
          label: 'ພໍດີ (Exact)',
          value: finalTotal,
          action: 'set'
        })
      }
      
      const notes = [10000, 20000, 50000, 100000, 200000, 500000]
      notes.forEach(note => {
        if (note >= finalTotal || note === 50000 || note === 100000 || note === 500000) {
          list.push({
            label: note.toLocaleString(),
            value: note,
            action: 'set'
          })
        }
      })
      
      list.push({ label: '+10,000', value: 10000, action: 'add' })
      list.push({ label: '+50,000', value: 50000, action: 'add' })
      list.push({ label: '+100,000', value: 100000, action: 'add' })
      
      return list
    }
  },

  watch: {
    discount(newVal) {
      if (newVal === 0) {
        this.percentValue = 0
        this.flatValue = 0
        this.discountType = 'flat'
      } else {
        const expectedFlat = Math.round(this.grandTotalBeforeDiscount * this.percentValue / 100)
        if (this.discountType === 'percent' && Math.abs(newVal - expectedFlat) > 1) {
          this.discountType = 'flat'
          this.flatValue = newVal
        } else if (this.discountType === 'flat') {
          this.flatValue = newVal
        }
      }
      if (!this.isTypingDiscount) {
        this.updateDiscountRawInput()
      }
    },
    grandTotalBeforeDiscount(newTotal) {
      if (this.discountType === 'percent' && this.percentValue > 0) {
        const calculatedDiscount = Math.round(newTotal * this.percentValue / 100)
        this.$emit('update:discount', calculatedDiscount)
      }
    },
    cashReceived(newVal) {
      if (!this.isTypingCash) {
        this.cashReceivedRawInput = newVal > 0 ? this.formatNumber(Number(newVal)) : ''
      }
    },
    pointsToRedeem(val) {
      const max = this.currentCustomer?.loyaltyPoints || 0;
      if (val > max) this.pointsToRedeem = max;
      if (val < 0) this.pointsToRedeem = 0;
      this.$emit('update:redeemed-points', this.pointsToRedeem);
    }
  },

  mounted() {
    this.flatValue = Number(this.discount || 0)
    this.updateDiscountRawInput()
    this.cashReceivedRawInput = this.cashReceived > 0 ? this.formatNumber(Number(this.cashReceived)) : ''
  },

  methods: {
    parseInputNumber(value) {
      if (!value) return 0
      return parseFloat(value.toString().replace(/,/g, ''))
    },

    formatInputNumber(value) {
      if (value === null || value === undefined || value === '') return ''

      // Remove all characters except digits and the first decimal point
      const cleanValue = value.toString().replace(/,/g, '')

      // If it's just a minus sign or empty, return as is
      if (cleanValue === '-' || cleanValue === '') return cleanValue

      // Split into integer and decimal parts
      const parts = cleanValue.split('.')

      // Format the integer part with commas
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      // Rejoin with decimal part if it exists
      return parts.length > 1 ? parts.join('.') : parts[0]
    },

    updateDiscountRawInput() {
      if (this.discountType === 'percent') {
        this.discountRawInput = this.percentValue > 0 ? `${this.percentValue}%` : ''
      } else {
        this.discountRawInput = this.flatValue > 0 ? this.formatNumber(Number(this.flatValue)) : ''
      }
    },

    onDiscountTypeChange(type) {
      this.discountType = type
      if (type === 'percent') {
        if (this.grandTotalBeforeDiscount > 0 && this.flatValue > 0) {
          this.percentValue = Math.min(100, Math.round((this.flatValue / this.grandTotalBeforeDiscount) * 100))
        } else {
          this.percentValue = 0
        }
        const calculatedDiscount = Math.round(this.grandTotalBeforeDiscount * this.percentValue / 100)
        this.$emit('update:discount', calculatedDiscount)
      } else {
        if (this.grandTotalBeforeDiscount > 0 && this.percentValue > 0) {
          this.flatValue = Math.round(this.grandTotalBeforeDiscount * this.percentValue / 100)
        } else {
          this.flatValue = 0
        }
        this.$emit('update:discount', this.flatValue)
      }
      this.updateDiscountRawInput()
    },

    handleDiscountInput(val) {
      this.isTypingDiscount = true
      const numericValue = this.parseInputNumber(val)
      if (this.discountType === 'percent') {
        this.percentValue = Math.min(100, Math.max(0, numericValue || 0))
        const calculatedDiscount = Math.round(this.grandTotalBeforeDiscount * this.percentValue / 100)
        this.$emit('update:discount', calculatedDiscount)
      } else {
        this.flatValue = numericValue || 0
        this.$emit('update:discount', this.flatValue)
      }
      this.discountRawInput = this.formatInputNumber(val)
    },

    handleDiscountBlur() {
      this.isTypingDiscount = false
      this.updateDiscountRawInput()
    },

    handleDiscountFocus() {
      this.isTypingDiscount = true
      if (this.discountType === 'percent') {
        this.discountRawInput = this.percentValue > 0 ? this.percentValue.toString() : ''
      } else {
        this.discountRawInput = this.flatValue > 0 ? this.flatValue.toString() : ''
      }
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
    },

    // Custom Keypad Logic
    openKeypad(target) {
      if (this.keypadOpen && this.keypadTarget === target) return
      this.keypadTarget = target
      if (target === 'discount') {
        this.keypadTitle = this.discountType === 'percent' ? 'ສ່ວນຫລຸດ (%)' : 'ສ່ວນຫລຸດ (Discount)'
        this.keypadInitialValue = this.discountType === 'percent' ? this.percentValue : this.discount
        this.keypadSuffix = this.discountType === 'percent' ? '%' : (this.localCurrency?.code || 'LAK')
        this.keypadPresets = this.discountPresets
      } else if (target === 'cashReceived') {
        this.keypadTitle = 'ຮັບເງິນ (Cash Received)'
        this.keypadInitialValue = this.cashReceived || this.realTimeFinalTotal
        this.keypadSuffix = this.localCurrency?.code || 'LAK'
        this.keypadPresets = this.cashReceivedPresets
      }
      this.keypadOpen = true
      // Blur fields on next tick so they can be clicked again
      this.$nextTick(() => {
        this.blurFields()
      })
    },

    handleKeypadConfirm(value) {
      if (this.keypadTarget === 'discount') {
        if (this.discountType === 'percent') {
          this.percentValue = Math.min(100, Math.max(0, value || 0))
          const calculatedDiscount = Math.round(this.grandTotalBeforeDiscount * this.percentValue / 100)
          this.$emit('update:discount', calculatedDiscount)
          this.updateDiscountRawInput()
        } else {
          this.flatValue = value || 0
          this.$emit('update:discount', this.flatValue)
          this.updateDiscountRawInput()
        }
      } else if (this.keypadTarget === 'cashReceived') {
        this.isTypingCash = true
        this.$emit('update:cash-received', value || 0)
        this.cashReceivedRawInput = this.formatInputNumber(value)
        this.$nextTick(() => {
          this.isTypingCash = false
          this.cashReceivedRawInput = value > 0 ? this.formatNumber(Number(value)) : ''
        })
      }
      this.blurFields()
      this.keypadOpen = false
    },

    handleKeypadCancel() {
      this.blurFields()
      this.keypadOpen = false
    },

    blurFields() {
      if (this.$refs.discountField) {
        this.$refs.discountField.blur()
      }
      if (this.$refs.cashReceivedField) {
        this.$refs.cashReceivedField.blur()
      }
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

.discount-toggle-btn-group {
  border: 1px solid rgba(0, 0, 0, 0.12) !important;
  border-radius: 4px;
  overflow: hidden;
  background-color: transparent !important;
}

.discount-toggle-btn-group ::v-deep .v-btn {
  border: none !important;
  height: 24px !important;
  background-color: transparent !important;
  color: rgba(0, 0, 0, 0.6) !important;
  transition: all 0.2s ease;
}

.discount-toggle-btn-group ::v-deep .v-btn--active {
  background-color: #01532B !important; /* using the app primary green */
  color: white !important;
  font-weight: bold;
}
</style>