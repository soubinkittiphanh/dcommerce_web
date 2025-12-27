<template>
  <v-navigation-drawer
    app
    right
    clipped
    width="500"
    class="cart-drawer elevation-8"
    :permanent="$vuetify.breakpoint.lgAndUp"
    :temporary="$vuetify.breakpoint.mdAndDown"
    v-model="drawerModel"
  >
    <div class="cart-container">
      <!-- Enhanced Customer Bar -->
      <div class="customer-bar pa-4">
        <v-row align="center" no-gutters class="ga-2">
          <v-col>
            <v-card
              color="success"
              outlined
              @click="$emit('open-customer-dialog')"
              class="customer-chip elevation-2"
              hover
            >
              <v-card-text class="pa-3">
                <v-row align="center" no-gutters>
                  <v-col cols="auto" class="mr-3">
                    <v-icon color="success" size="20">mdi-account-circle</v-icon>
                  </v-col>
                  <v-col>
                    <div class="font-weight-bold text-truncate">
                      {{ customerDisplayName }}
                    </div>
                  </v-col>
                  <v-col cols="auto">
                    <v-icon color="success" small>mdi-pencil</v-icon>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="auto">
            <div class="d-flex ga-2">
              <v-btn
                icon
                color="primary"
                @click="$emit('open-delivery-box')"
                title="ຈັດສົ່ງ"
                class="action-btn"
              >
                <v-icon>mdi-truck-delivery</v-icon>
              </v-btn>

              <v-btn
                icon
                color="primary"
                @click="$emit('new-order')"
                title="ອໍເດີໃໝ່"
                class="action-btn"
              >
                <v-icon>mdi-refresh</v-icon>
              </v-btn>

              <v-btn
                icon
                color="grey"
                @click="drawerModel = false"
                class="d-lg-none action-btn"
                title="ປິດ"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Cart Items -->
      <div class="cart-items flex-grow-1">
        <v-card flat height="100%" class="d-flex flex-column">
          <!-- Enhanced Header -->
          <div class="cart-items-header pa-3 grey lighten-4">
            <v-row
              no-gutters
              align="center"
              class="text-caption font-weight-bold grey--text text--darken-2"
            >
              <v-col cols="1"></v-col>
              <v-col cols="4">ສິນຄ້າ</v-col>
              <v-col cols="3" class="text-center">ຈຳນວນ</v-col>
              <v-col cols="4" class="text-right">ລາຄາ</v-col>
            </v-row>
          </div>

          <div class="cart-items-list flex-grow-1 overflow-y-auto">
            <template v-if="productCart.length > 0">
              <cart-item-component
                v-for="item in productCart"
                :key="item.lineUUID || item.id"
                :item="item"
                :format-number="formatNumber"
                @delete="$emit('delete-product', $event)"
                @update-qty="$emit('update-qty', $event)"
                @decrease="$emit('decrease-product', $event)"
                @increase="$emit('increase-product', $event)"
                @price-click="$emit('price-click', $event)"
                @configure-gift="$emit('configure-gift', $event)"
              />
            </template>

            <!-- Enhanced Empty Cart -->
            <div v-else class="empty-cart pa-6 text-center">
              <v-icon size="80" color="grey lighten-2" class="mb-4">
                mdi-cart-outline
              </v-icon>
              <div class="grey--text mb-2">ກະຕ່າວ່າງເປົ່າ</div>
              <div class="grey--text">ເລືອກສິນຄ້າເພື່ອເພີ່ມໃສ່ກະຕ່າ</div>
            </div>
          </div>
        </v-card>
      </div>

      <!-- Enhanced Cart Footer -->
      <cart-footer-component
        :product-cart="productCart"
        :discount="discountModel"
        :cash-received="cashReceivedModel"
        :changes="changes"
        :grand-total="grandTotal"
        :currency-list="currencyList"
        :payment-list="paymentList"
        :show-check-out="showCheckOut"
        :selected-payment="currentPayment"
        :format-number="formatNumber"
        :svg-icon="svgIcon"
        :enablePredefinedPayments="true"
        :defaultPaymentMethods="[14, 15]"
        @update:discount="$emit('update:discount', $event)"
        @update:cash-received="$emit('update:cash-received', $event)"
        @toggle-checkout="$emit('toggle-checkout')"
        @process-single-payment="$emit('process-single-payment')"
        @select-payment="$emit('select-payment', $event)"
        @open-multi-payment="$emit('open-multi-payment')"
        @show-error="$emit('show-error', $event)"
      />
    </div>
  </v-navigation-drawer>
</template>

<script>
import CartItemComponent from '~/components/pos/CartItemComponent.vue'
import CartFooterComponent from '~/components/pos/CartFooterComponent.vue'

export default {
  name: 'PosCartDrawer',
  
  components: {
    CartItemComponent,
    CartFooterComponent,
  },

  props: {
    modelValue: Boolean,
    productCart: {
      type: Array,
      default: () => []
    },
    customerDisplayName: {
      type: String,
      default: 'Walk-in Customer'
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
      type: [String, Number],
      default: 0
    },
    grandTotal: {
      type: Number,
      default: 0
    },
    currencyList: {
      type: Array,
      default: () => []
    },
    paymentList: {
      type: Array,
      default: () => []
    },
    showCheckOut: Boolean,
    currentPayment: [String, Number],
    svgIcon: String,
    formatNumber: {
      type: Function,
      required: true
    }
  },

  emits: [
    'update:modelValue',
    'update:discount',
    'update:cash-received',
    'open-customer-dialog',
    'open-delivery-box',
    'new-order',
    'delete-product',
    'update-qty',
    'decrease-product',
    'increase-product',
    'price-click',
    'configure-gift',
    'toggle-checkout',
    'process-single-payment',
    'select-payment',
    'open-multi-payment',
    'show-error'
  ],

  computed: {
    drawerModel: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },

    discountModel: {
      get() {
        return this.discount
      },
      set(value) {
        this.$emit('update:discount', value)
      }
    },

    cashReceivedModel: {
      get() {
        return this.cashReceived
      },
      set(value) {
        this.$emit('update:cash-received', value)
      }
    },

    cartItemCount() {
      return this.productCart.length
    },

    cartTotalItems() {
      return this.productCart.reduce((total, item) => total + item.qty, 0)
    },

    hasItemsInCart() {
      return this.productCart.length > 0
    }
  }
}
</script>

<style scoped>
.cart-drawer {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.customer-chip {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px !important;
}

.customer-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3) !important;
}

.customer-bar {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.action-btn {
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: scale(1.1);
}

.cart-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cart-items {
  min-height: 0;
  flex: 1;
}

.cart-items-header {
  background: linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.06);
}

.cart-items-list {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.empty-cart {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 250px;
}

/* Responsive Design */
@media (max-width: 1263px) {
  .cart-drawer {
    width: 100% !important;
    max-width: 500px !important;
  }
}

@media (max-width: 960px) {
  .customer-bar .v-row {
    flex-direction: column;
    gap: 12px;
  }

  .cart-items-list {
    max-height: calc(100vh - 450px);
  }
}

/* Custom Scrollbar */
.cart-items-list::-webkit-scrollbar {
  width: 6px;
}

.cart-items-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.cart-items-list::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #c1c1c1 0%, #a8a8a8 100%);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.cart-items-list::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #a8a8a8 0%, #909090 100%);
}
</style>