<template>
  <div>
    <!-- Multi-Payment Dialog -->
    <v-dialog v-model="multiPaymentDialogModel" max-width="900" persistent>
      <multi-payment-dialog
        v-model="multiPaymentDialogModel"
        :sale-total="grandTotal - discount"
        :payment-methods="paymentList"
        :sale-header-id="pendingSaleHeaderId"
        :format-number="formatNumber"
        @confirm-payment="$emit('confirm-payment', $event)"
        @cancel="$emit('cancel-payment')"
        @payment-error="$emit('payment-error', $event)"
      />
    </v-dialog>

    <!-- Terminal Selection Dialog -->
    <v-dialog v-model="terminalDialogModel" scrollable max-width="700" persistent>
      <v-card class="terminal-dialog elevation-12">
        <v-card-title class="primary white--text py-4">
          <v-icon left size="28">mdi-monitor</v-icon>
          <span>ເລືອກ Terminal</span>
          <v-spacer></v-spacer>
          <v-icon color="white">mdi-lan-connect</v-icon>
        </v-card-title>
        <v-divider class="primary darken-1"></v-divider>
        <v-card-text class="pa-6" style="max-height: 450px">
          <v-radio-group v-model="terminalSelectedModel" class="mt-2">
            <v-card
              v-for="terminal in terminalList"
              :key="terminal.id"
              class="mb-4 terminal-card"
              :class="{
                selected: terminalSelectedModel === terminal.id,
                'elevation-8': terminalSelectedModel === terminal.id,
              }"
              @click="terminalSelectedModel = terminal.id"
              outlined
              hover
            >
              <v-card-text class="pa-4">
                <v-row align="center" no-gutters>
                  <v-col cols="auto" class="mr-3">
                    <v-radio :value="terminal.id" color="primary"></v-radio>
                  </v-col>
                  <v-col>
                    <div class="font-weight-bold mb-1">
                      {{ terminal.name }}
                    </div>
                    <div class="grey--text">
                      {{ terminal.description }}
                    </div>
                  </v-col>
                  <v-col cols="auto">
                    <v-icon
                      v-if="terminalSelectedModel === terminal.id"
                      color="primary"
                      size="24"
                    >
                      mdi-check-circle
                    </v-icon>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn
            color="grey"
            text
            large
            @click="terminalDialogModel = false"
            class="px-6"
          >
            <v-icon left>mdi-close</v-icon>
            ຍົກເລີກ
          </v-btn>
          <v-btn
            color="primary"
            large
            @click="$emit('switch-terminal')"
            :disabled="!terminalSelectedModel"
            class="px-6 ml-2"
          >
            <v-icon left>mdi-check</v-icon>
            ເລືອກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Quantity Update Dialog -->
    <v-dialog v-model="qtyDialogModel" max-width="450px" @keydown.enter="$emit('update-qty')">
      <v-card class="elevation-12">
        <v-card-title class="primary white--text py-4">
          <v-icon left size="24">mdi-counter</v-icon>
          <span>ອັບເດດຈຳນວນ</span>
        </v-card-title>
        <v-card-text class="pa-6">
          <v-text-field
            v-model.number="newQtyModel"
            label="ໃສ່ຈຳນວນໃໝ່"
            type="number"
            outlined
            dense
            autofocus
            :rules="[(v) => v > 0 || 'ຈຳນວນຕ້ອງມາກກວ່າ 0']"
            @keydown.enter="$emit('update-qty')"
            prepend-inner-icon="mdi-numeric"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="qtyDialogModel = false" class="px-4">
            ຍົກເລີກ
          </v-btn>
          <v-btn
            color="primary"
            @click="$emit('update-qty')"
            :disabled="newQtyModel <= 0"
            class="px-4 ml-2"
          >
            <v-icon left small>mdi-check</v-icon>
            ບັນທຶກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Customer List Dialog -->
    <v-dialog v-model="customerDialogModel" max-width="1200">
      <customer-list @close-dialog="$emit('close-customer-dialog')"></customer-list>
    </v-dialog>

    <!-- Pricing Options Dialog -->
    <v-dialog v-model="pricingDialogModel" max-width="1200">
      <pricing-option
        :key="pricingDialogKey"
        @close-dialog="$emit('close-pricing-dialog')"
        :record-id="productPricingSelected"
      ></pricing-option>
    </v-dialog>

    <!-- Delivery Form Dialog -->
    <v-dialog v-model="deliveryFormModel" max-width="1200" persistent>
      <delivery-form
        @post-transaction="$emit('post-transaction', $event)"
        @close-dialog="$emit('close-delivery-form')"
        :key="shippingFormKey"
      ></delivery-form>
    </v-dialog>

    <!-- Loading Indicator Dialog -->
    <v-dialog v-model="loadingModel" hide-overlay persistent width="350">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Quotation Dialog -->
    <v-dialog v-model="quotationModel" hide-overlay width="1200">
      <Quotation></Quotation>
    </v-dialog>
  </div>
</template>

<script>
import CustomerList from '~/components/customer/CustomerList.vue'
import Quotation from '~/components/quotation'
import PricingOption from '~/components/PricingOption.vue'
import LoadingIndicator from '~/components/LoadingIndicator.vue'
import DeliveryForm from '~/components/deliveryForm.vue'
import MultiPaymentDialog from '~/components/pos/MultiPaymentDialog-vue2.vue'

export default {
  name: 'PosDialogs',
  components: {
    CustomerList,
    Quotation,
    PricingOption,
    LoadingIndicator,
    DeliveryForm,
    MultiPaymentDialog,
  },

  props: {
    multiPaymentDialog: Boolean,
    terminalDialog: Boolean,
    qtyDialog: Boolean,
    customerDialog: Boolean,
    pricingDialog: Boolean,
    deliveryForm: Boolean,
    quotation: Boolean,
    loading: Boolean,
    terminalSelected: [String, Number],
    newQty: [String, Number],
    pricingDialogKey: [String, Number],
    productPricingSelected: [String, Number],
    shippingFormKey: [String, Number],
    pendingSaleHeaderId: [String, Number],
    paymentList: Array,
    terminalList: Array,
    grandTotal: Number,
    discount: Number,
    formatNumber: Function,
  },

  emits: [
    'update:multiPaymentDialog',
    'update:terminalDialog',
    'update:qtyDialog',
    'update:customerDialog',
    'update:pricingDialog',
    'update:deliveryForm',
    'update:quotation',
    'update:loading',
    'update:terminalSelected',
    'update:newQty',
    'confirm-payment',
    'cancel-payment',
    'payment-error',
    'switch-terminal',
    'update-qty',
    'close-customer-dialog',
    'close-pricing-dialog',
    'post-transaction',
    'close-delivery-form',
  ],

  computed: {
    multiPaymentDialogModel: {
      get() {
        return this.multiPaymentDialog
      },
      set(value) {
        this.$emit('update:multiPaymentDialog', value)
      }
    },

    terminalDialogModel: {
      get() {
        return this.terminalDialog
      },
      set(value) {
        this.$emit('update:terminalDialog', value)
      }
    },

    qtyDialogModel: {
      get() {
        return this.qtyDialog
      },
      set(value) {
        this.$emit('update:qtyDialog', value)
      }
    },

    customerDialogModel: {
      get() {
        return this.customerDialog
      },
      set(value) {
        this.$emit('update:customerDialog', value)
      }
    },

    pricingDialogModel: {
      get() {
        return this.pricingDialog
      },
      set(value) {
        this.$emit('update:pricingDialog', value)
      }
    },

    deliveryFormModel: {
      get() {
        return this.deliveryForm
      },
      set(value) {
        this.$emit('update:deliveryForm', value)
      }
    },

    quotationModel: {
      get() {
        return this.quotation
      },
      set(value) {
        this.$emit('update:quotation', value)
      }
    },

    loadingModel: {
      get() {
        return this.loading
      },
      set(value) {
        this.$emit('update:loading', value)
      }
    },

    terminalSelectedModel: {
      get() {
        return this.terminalSelected
      },
      set(value) {
        this.$emit('update:terminalSelected', value)
      }
    },

    newQtyModel: {
      get() {
        return this.newQty
      },
      set(value) {
        this.$emit('update:newQty', value)
      }
    },
  },
}
</script>

<style scoped>
.terminal-dialog .terminal-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px !important;
}

.terminal-dialog .terminal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.terminal-dialog .terminal-card.selected {
  transform: translateY(-2px);
}
</style>