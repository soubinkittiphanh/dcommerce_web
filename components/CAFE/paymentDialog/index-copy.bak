<template>
  <v-dialog v-model="dialogVisible" max-width="600" persistent>
    <v-card>
      <v-card-title class="primary white--text">
        <v-icon left color="white">mdi-credit-card</v-icon>
        Process Payment - Table {{ tableId || '' }}
        <v-spacer></v-spacer>
        <v-btn
          icon
          color="white"
          @click="closeDialog"
          :disabled="actionLoading"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-6">
        <!-- Payment Amount -->
        <v-card outlined class="mb-4">
          <v-card-text class="text-center pa-4">
            <div class="text-h4 font-weight-bold primary--text">
              {{ formatPrice(paymentAmount) }}
            </div>
            <div class="text-subtitle-1 grey--text">Total Amount to Pay</div>
          </v-card-text>
        </v-card>

        <!-- Loading Payment Methods -->
        <div v-if="paymentLoading" class="text-center pa-4">
          <v-progress-circular
            size="48"
            color="primary"
            indeterminate
          ></v-progress-circular>
          <p class="mt-2">Loading payment methods...</p>
        </div>

        <!-- Payment Methods -->
        <div v-else>
          <v-subheader class="px-0">
            <v-icon left>mdi-wallet</v-icon>
            Select Payment Method
          </v-subheader>

          <v-row v-if="paymentList.length > 0">
            <v-col
              v-for="payment in paymentList"
              :key="payment.id"
              cols="6"
              class="pa-1"
            >
              <v-card
                @click="selectedPaymentMethod = payment"
                :color="
                  selectedPaymentMethod?.id === payment.id
                    ? getPaymentColor(payment.payment_code)
                    : ''
                "
                :class="[
                  'payment-method-card cursor-pointer text-center pa-3',
                  selectedPaymentMethod?.id === payment.id
                    ? 'white--text elevation-4'
                    : 'elevation-1',
                ]"
                hover
                height="100"
              >
                <v-icon
                  :color="
                    selectedPaymentMethod?.id === payment.id
                      ? 'white'
                      : getPaymentColor(payment.payment_code)
                  "
                  size="32"
                  class="mb-2"
                >
                  {{ getPaymentIcon(payment.payment_code) }}
                </v-icon>
                <div class="font-weight-medium">
                  {{ payment.payment_name }}
                </div>
                <div class="caption">
                  {{ payment.payment_code }}
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- No Payment Methods -->
          <v-alert v-else type="warning" outlined class="ma-0">
            <div class="d-flex align-center">
              <v-icon left>mdi-alert</v-icon>
              No active payment methods available
            </div>
            <v-btn
              small
              color="warning"
              class="mt-2"
              @click="$emit('retry-payment-methods')"
            >
              <v-icon left small>mdi-refresh</v-icon>
              Retry
            </v-btn>
          </v-alert>

          <!-- Selected Payment Details -->
          <v-card
            v-if="selectedPaymentMethod"
            outlined
            color="grey lighten-5"
            class="mt-4"
          >
            <v-card-text class="pa-3">
              <div class="d-flex align-center">
                <v-icon
                  :color="getPaymentColor(selectedPaymentMethod.payment_code)"
                  class="mr-3"
                >
                  {{ getPaymentIcon(selectedPaymentMethod.payment_code) }}
                </v-icon>
                <div>
                  <div class="font-weight-medium">
                    {{ selectedPaymentMethod.payment_name }}
                  </div>
                  <div class="caption grey--text">
                    {{ selectedPaymentMethod.payment_desc || 'No description' }}
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>

      <v-card-actions class="pa-4">
        <v-btn
          color="grey"
          text
          @click="closeDialog"
          :disabled="actionLoading"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="success"
          large
          @click="confirmPayment"
          :disabled="!selectedPaymentMethod || actionLoading"
          :loading="actionLoading"
        >
          <v-icon left>mdi-check</v-icon>
          Process Payment
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'PaymentDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    tableId: {
      type: [String, Number],
      required: true,
    },
    paymentAmount: {
      type: Number,
      default: 0,
    },
    paymentList: {
      type: Array,
      default: () => [],
    },
    paymentLoading: {
      type: Boolean,
      default: false,
    },
    actionLoading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      selectedPaymentMethod: null,
    }
  },

  computed: {
    dialogVisible: {
      get() {
        return this.show
      },
      set(value) {
        if (!value) {
          this.closeDialog()
        }
      },
    },
  },

  watch: {
    show(newVal) {
      if (!newVal) {
        this.selectedPaymentMethod = null
      }
    },
  },

  methods: {
    closeDialog() {
      this.selectedPaymentMethod = null
      this.$emit('close')
    },

    confirmPayment() {
      if (!this.selectedPaymentMethod) {
        this.$emit('show-message', 'Please select a payment method', 'warning', 'mdi-alert')
        return
      }

      this.$emit('confirm-payment', this.selectedPaymentMethod)
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
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.payment-method-card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.payment-method-card:hover {
  transform: translateY(-2px);
}

.payment-method-card.elevation-4 {
  border: 2px solid rgba(255, 255, 255, 0.3);
}
</style>