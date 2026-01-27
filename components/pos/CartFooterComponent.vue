<template>
  <div class="cart-footer">
    <!-- Payment Input Section -->
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
            :suffix="localCurrency?.code || 'LAK'"
            class="discount-input"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="cashReceivedRawInput"
            @input="handleCashReceivedInput($event)"
            @blur="handleCashReceivedBlur()"
            @focus="handleCashReceivedFocus()"
            :label="`ເງິນທີ່ໄດ້ຮັບ (${localCurrency?.code || 'LAK'})`"
            outlined
            dense
            prepend-inner-icon="mdi-cash"
            :suffix="localCurrency?.code || 'LAK'"
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
          <div class="total-amount">
            {{ formatNumber(subtotalInLocalCurrency) }}
            {{ localCurrency?.code }}
          </div>
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
          <div class="discount-amount">
            -{{ formatNumber(realTimeDiscountNumber) }}
            {{ localCurrency?.code }}
          </div>
        </v-col>
        <!-- ✅ REAL-TIME: Show change calculation -->
        <v-col cols="3" class="text-right">
          <div class="change-label">ເງິນທອນ</div>
          <div class="change-amount" :class="getChangeClass()">
            {{ formatNumber(realTimeChange) }} {{ localCurrency?.code }}
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <!-- ✅ ENHANCED: Show currency breakdown with proper conversions -->
      <div v-if="currencyBreakdown.length > 1" class="currency-breakdown mb-3">
        <v-row no-gutters>
          <v-col cols="12">
            <div class="breakdown-header mb-2">
              <small class="text--secondary font-weight-bold">
                <v-icon small left>mdi-calculator</v-icon>
                ການແຍກຕາມສະກຸນເງິນ
              </small>
            </div>
            <v-row
              no-gutters
              v-for="item in currencyBreakdown"
              :key="item.currency.id"
              class="currency-line"
            >
              <v-col cols="8">
                <span
                  class="currency-name"
                  :class="{
                    'primary--text font-weight-bold': item.currency.isLocalCCY,
                  }"
                >
                  {{ item.currency.name }} ({{ item.currency.code }})
                  <v-chip
                    v-if="item.currency.isLocalCCY"
                    x-small
                    color="success"
                    class="ml-1"
                    >Local</v-chip
                  >
                </span>
              </v-col>
              <v-col cols="4" class="text-right">
                <span
                  class="currency-amount"
                  :class="{
                    'primary--text font-weight-bold': item.currency.isLocalCCY,
                  }"
                >
                  {{ formatNumber(item.originalAmount) }}
                  {{ item.currency.code }}
                </span>
                <div v-if="!item.currency.isLocalCCY" class="conversion-note">
                  <small class="text--secondary">
                    ≈ {{ formatNumber(item.localAmount) }}
                    {{ localCurrency?.code }}
                    <v-tooltip activator="parent" location="top">
                      Rate: {{ getRateDisplayText(item.currency) }}
                    </v-tooltip>
                  </small>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="mt-2"></v-divider>
      </div>

      <!-- ✅ REAL-TIME: Final total with live updates -->
      <v-row no-gutters align="center" class="grand-total-row">
        <v-col cols="8">
          <div class="grand-total-label">ຍອດເງິນລວມ</div>
        </v-col>
        <v-col cols="4" class="text-right">
          <div
            class="grand-total-amount"
            :class="{ 'total-highlight': realTimeDiscountNumber > 0 }"
          >
            {{ formatNumber(realTimeFinalTotal) }}
            <span class="currency-code">{{
              localCurrency?.code || 'LAK'
            }}</span>
          </div>
        </v-col>
      </v-row>

      <!-- Optional: Show other currency equivalents -->
      <v-row no-gutters v-if="availableCurrencies.length > 1" class="mt-1">
        <v-col cols="12">
          <v-expansion-panels flat tile>
            <v-expansion-panel>
              <v-expansion-panel-header class="pa-2 min-height-auto">
                <small class="text--secondary">
                  <v-icon small left>mdi-currency-usd</v-icon>
                  ເບິ່ງຍອດລວມ ສະກຸນອື່ນໆ
                </small>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pt-2">
                <div
                  v-for="currency in currencyConversions"
                  :key="currency.id"
                  class="d-flex justify-space-between py-1"
                  :class="{
                    'primary--text font-weight-bold': currency.isLocal,
                  }"
                >
                  <span class="currency-info">
                    {{ currency.name }} ({{ currency.code }})
                    <v-chip
                      v-if="currency.isLocal"
                      x-small
                      color="success"
                      class="ml-1"
                      >Local</v-chip
                    >
                  </span>
                  <span class="currency-amount">
                    {{ formatNumber(currency.convertedAmount) }}
                    {{ currency.code }}
                    <v-tooltip activator="parent" location="top">
                      {{ getRateDisplayText(currency) }}
                    </v-tooltip>
                  </span>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <!-- ✅ REAL-TIME: Payment validation status -->
      <div
        v-if="isTraditionalCashPayment && realTimeCashReceived > 0"
        class="payment-validation mt-2"
      >
        <v-row no-gutters align="center">
          <v-col cols="6">
            <div class="validation-label">ຈ່າຍແລ້ວ:</div>
          </v-col>
          <v-col cols="6" class="text-right">
            <div class="validation-amount">
              {{ formatNumber(realTimeCashReceived) }} {{ localCurrency?.code }}
            </div>
          </v-col>
        </v-row>

        <v-row no-gutters align="center" v-if="paymentShortfall > 0">
          <v-col cols="6">
            <div class="shortfall-label">ຍັງຂາດ:</div>
          </v-col>
          <v-col cols="6" class="text-right">
            <div class="shortfall-amount">
              {{ formatNumber(paymentShortfall) }} {{ localCurrency?.code }}
            </div>
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
              <div
                :class="{
                  'text-white': selectedPayment === payment.id,
                  'text-primary': selectedPayment !== payment.id,
                }"
                class="payment-name"
              >
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
import { mapActions, mapGetters } from 'vuex'
import CurrencyHelper from '@/utils/currency-helper'
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
        return (
          value === '' ||
          value === null ||
          value === undefined ||
          !isNaN(Number(value))
        )
      },
    },
    cashReceived: {
      type: [Number, String],
      default: 0,
      validator(value) {
        return (
          value === '' ||
          value === null ||
          value === undefined ||
          !isNaN(Number(value))
        )
      },
    },
    changes: {
      type: String,
      default: '0',
    },
    grandTotal: {
      type: Number,
      required: true,
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
      processingPayment: false,
      discountRawInput: '',
      cashReceivedRawInput: '',
      isTypingDiscount: false,
      isTypingCash: false,
    }
  },

  mounted() {
    if (!this.selectedPayment && this.paymentList.length > 0) {
      this.$emit('select-payment', this.paymentList[0].id)
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency']),

    // Convert props to numbers safely
    discountNumber() {
      const num = Number(this.discount)
      return isNaN(num) ? 0 : num
    },

    cashReceivedNumber() {
      const num = Number(this.cashReceived)
      return isNaN(num) ? 0 : num
    },

    // Get the local currency
    localCurrency() {
      return this.findAllCurrency.find((currency) => currency.isLocalCCY)
    },

    // ✅ FIXED: Calculate subtotal with proper currency conversions
    subtotalInLocalCurrency() {
      let totalInLocal = 0
      
      this.productCart.forEach(item => {
        const currencyId = item.saleCurrencyId
        const currency = this.findAllCurrency.find(c => c.id === currencyId)
        
        if (currency) {
          // Use the current localPrice (updated by price selection)
          const itemTotalInItemCurrency = item.qty * (item.localPrice || 0)
          
          // Convert to local currency only if needed
          if (currency.isLocalCCY) {
            // Already in local currency
            totalInLocal += itemTotalInItemCurrency
          } else {
            // Convert from item's currency to local currency
            const convertedAmount = this.convertToLocalCurrency(itemTotalInItemCurrency, currency)
            totalInLocal += convertedAmount
          }
        } else {
          console.warn(`Currency not found for item ${item.pro_name}, currency ID: ${currencyId}`)
          // Fallback - assume it's already in local currency
          totalInLocal += item.qty * (item.localPrice || 0)
        }
      })
      
      return totalInLocal
    },

    totalItems() {
      return this.productCart.reduce((sum, item) => sum + item.qty, 0)
    },

    // ✅ ENHANCED: Calculate subtotals by original currency with proper conversion logic
    subtotalsByCurrency() {
      const subtotals = {}
      
      this.productCart.forEach(item => {
        const currencyId = item.saleCurrencyId
        const currency = this.findAllCurrency.find(c => c.id === currencyId)
        
        if (currency) {
          // The amount in the item's original currency
          const amountInItemCurrency = item.qty * (item.localPrice || 0)
          
          // Convert to local currency for total calculation
          let amountInLocal
          if (currency.isLocalCCY) {
            amountInLocal = amountInItemCurrency
          } else {
            amountInLocal = this.convertToLocalCurrency(amountInItemCurrency, currency)
          }
          
          if (!subtotals[currencyId]) {
            subtotals[currencyId] = {
              currency: currency,
              originalAmount: 0,
              localAmount: 0
            }
          }
          
          subtotals[currencyId].originalAmount += amountInItemCurrency
          subtotals[currencyId].localAmount += amountInLocal
        }
      })
      
      return subtotals
    },


    // ✅ ENHANCED: Get currency breakdown for display
    currencyBreakdown() {
      const breakdown = Object.values(this.subtotalsByCurrency)
      return breakdown.sort((a, b) => {
        if (a.currency.isLocalCCY) return -1
        if (b.currency.isLocalCCY) return 1
        return a.currency.name.localeCompare(b.currency.name)
      })
    },

    // Real-time calculations while typing
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
      return Math.max(0, this.subtotalInLocalCurrency - this.realTimeDiscountNumber)
    },

    realTimeChange() {
      if (this.realTimeCashReceived === 0) return 0
      return Math.max(0, this.realTimeCashReceived - this.realTimeFinalTotal)
    },

    paymentShortfall() {
      if (!this.isTraditionalCashPayment || this.realTimeCashReceived === 0)
        return 0
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

    canPaySingleRealTime() {
      if (this.productCart.length === 0 || !this.selectedPayment) {
        return false
      }
      return true
    },

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

    availableCurrencies() {
      return this.findAllCurrency.filter((currency) => currency.isActive)
    },

    // ✅ ENHANCED: Show currency conversions for reference with proper conversion logic
    currencyConversions() {
      if (!this.localCurrency) return []

      return this.availableCurrencies.map((currency) => {
        let convertedAmount

        if (currency.isLocalCCY) {
          // This IS the local currency, use the total as-is
          convertedAmount = this.realTimeFinalTotal
        } else {
          // Convert FROM local currency TO this currency
          convertedAmount = this.convertFromLocalCurrency(this.realTimeFinalTotal, currency)
        }

        return {
          ...currency,
          convertedAmount,
          isLocal: currency.isLocalCCY,
        }
      })
    },
  },

  watch: {
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
      },
    },

    cashReceived: {
      immediate: true,
      handler(newVal) {
        if (!this.isTypingCash) {
          if (newVal && newVal > 0) {
            this.cashReceivedRawInput = this.formatNumber(
              this.cashReceivedNumber
            )
          } else {
            this.cashReceivedRawInput = ''
          }
        }
      },
    },
  },

  methods: {
    // ✅ NEW: Currency conversion helper methods
    // Replace your existing conversion methods with these:
    convertToLocalCurrency(amount, fromCurrency) {
      return CurrencyHelper.convertToLocal(
        amount,
        fromCurrency,
        this.localCurrency
      )
    },

    convertFromLocalCurrency(amount, toCurrency) {
      return CurrencyHelper.convertFromLocal(
        amount,
        toCurrency,
        this.localCurrency
      )
    },

    getRateDisplayText(currency) {
      return CurrencyHelper.getRateDisplayText(currency, this.localCurrency)
    },

    // Number formatting methods
    parseInputNumber(value) {
      if (!value) return null
      const cleaned = value.toString().replace(/[^\d.]/g, '')
      const parsed = parseFloat(cleaned)
      return isNaN(parsed) ? null : parsed
    },

    handleDiscountInput(value) {
      this.isTypingDiscount = true
      const parsed = this.parseInputNumber(value)
      const cleanValue = parsed || 0
      this.$emit('update:discount', cleanValue)
    },

    handleDiscountFocus() {
      this.isTypingDiscount = true
      if (this.discountNumber > 0) {
        this.discountRawInput = this.discountNumber.toString()
      } else {
        this.discountRawInput = ''
      }
    },

    handleDiscountBlur() {
      this.isTypingDiscount = false
      const parsed = this.parseInputNumber(this.discountRawInput)
      const cleanValue = parsed || 0
      this.$emit('update:discount', cleanValue)

      if (cleanValue > 0) {
        this.discountRawInput = this.formatNumber(cleanValue)
      } else {
        this.discountRawInput = ''
      }
    },

    handleCashReceivedInput(value) {
      this.isTypingCash = true
      const parsed = this.parseInputNumber(value)
      const cleanValue = parsed || 0
      this.$emit('update:cash-received', cleanValue)
    },

    handleCashReceivedFocus() {
      this.isTypingCash = true
      if (this.cashReceivedNumber > 0) {
        this.cashReceivedRawInput = this.cashReceivedNumber.toString()
      } else {
        this.cashReceivedRawInput = ''
      }
    },

    handleCashReceivedBlur() {
      this.isTypingCash = false
      const parsed = this.parseInputNumber(this.cashReceivedRawInput)
      const cleanValue = parsed || 0
      this.$emit('update:cash-received', cleanValue)

      if (cleanValue > 0) {
        this.cashReceivedRawInput = this.formatNumber(cleanValue)
      } else {
        this.cashReceivedRawInput = ''
      }
    },

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

    handleSinglePayment() {
      if (!this.canPaySingleRealTime) {
        this.showValidationError()
        return
      }

      this.processingPayment = true
      this.$emit('process-single-payment')

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
      this.$emit('open-multi-payment')
    },
  },
}
</script>

<style scoped>
.currency-breakdown {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
}

.breakdown-header {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

.currency-line {
  padding: 4px 0;
  border-bottom: 1px solid #f0f0f0;
}

.currency-line:last-child {
  border-bottom: none;
}

.currency-name {
  font-size: 14px;
}

.currency-amount {
  font-size: 14px;
  font-weight: 500;
}

.conversion-note {
  font-size: 11px;
  line-height: 1.2;
  margin-top: 2px;
}

.grand-total-amount {
  font-size: 18px;
  font-weight: bold;
}

.currency-code {
  font-size: 14px;
  font-weight: normal;
  opacity: 0.8;
}

.total-highlight {
  color: #4caf50 !important;
}
</style>