<template>
  <v-app dark>
    <!-- MINIMART POS.VUE - OPTIMIZED VERSION -->
    <!-- Multi-Payment Dialog - ENHANCED -->
    <v-dialog v-model="multiPaymentDialog" max-width="900" persistent>
      <multi-payment-dialog
        v-model="multiPaymentDialog"
        :sale-total="grandTotal - discount"
        :payment-methods="findAllPayment"
        :sale-header-id="pendingSaleHeaderId"
        :format-number="formatNumber"
        @confirm-payment="handleMultiPaymentConfirm"
        @cancel="handleMultiPaymentCancel"
        @payment-error="handleMultiPaymentError"
      />
    </v-dialog>

    <!-- Terminal Selection Dialog - ENHANCED -->
    <v-dialog v-model="terminalDialog" scrollable max-width="700" persistent>
      <v-card class="terminal-dialog elevation-12">
        <v-card-title class="primary white--text py-4">
          <v-icon left size="28">mdi-monitor</v-icon>
          <span class="">ເລືອກ Terminal</span>
          <v-spacer></v-spacer>
          <v-icon color="white">mdi-lan-connect</v-icon>
        </v-card-title>
        <v-divider class="primary darken-1"></v-divider>
        <v-card-text class="pa-6" style="max-height: 450px">
          <v-radio-group v-model="terminalSelected" class="mt-2">
            <v-card
              v-for="terminal in findAllTerminal"
              :key="terminal.id"
              class="mb-4 terminal-card"
              :class="{
                selected: terminalSelected === terminal.id,
                'elevation-8': terminalSelected === terminal.id,
              }"
              @click="terminalSelected = terminal.id"
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
                      v-if="terminalSelected === terminal.id"
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
            @click="terminalDialog = false"
            class="px-6"
          >
            <v-icon left>mdi-close</v-icon>
            ຍົກເລີກ
          </v-btn>
          <v-btn
            color="primary"
            large
            @click="switchTerminalAction"
            :disabled="!terminalSelected"
            class="px-6 ml-2"
          >
            <v-icon left>mdi-check</v-icon>
            ເລືອກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Quantity Update Dialog - ENHANCED -->
    <v-dialog v-model="qtyDialog" max-width="450px" @keydown.enter="updateQty">
      <v-card class="elevation-12">
        <v-card-title class="primary white--text py-4">
          <v-icon left size="24">mdi-counter</v-icon>
          <span class="">ອັບເດດຈຳນວນ</span>
        </v-card-title>
        <v-card-text class="pa-6">
          <v-text-field
            v-model.number="newQty"
            label="ໃສ່ຈຳນວນໃໝ່"
            type="number"
            outlined
            dense
            autofocus
            :rules="[(v) => v > 0 || 'ຈຳນວນຕ້ອງມາກກວ່າ 0']"
            @keydown.enter="updateQty"
            prepend-inner-icon="mdi-numeric"
            class=""
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="qtyDialog = false" class="px-4">
            ຍົກເລີກ
          </v-btn>
          <v-btn
            color="primary"
            @click="updateQty"
            :disabled="newQty <= 0"
            class="px-4 ml-2"
          >
            <v-icon left small>mdi-check</v-icon>
            ບັນທຶກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Customer List Dialog -->
    <v-dialog v-model="customerDialog" max-width="1200">
      <customer-list @close-dialog="customerDialog = false"></customer-list>
    </v-dialog>

    <!-- Pricing Options Dialog -->
    <!-- TODO: New price update selected always call update opencustomer screen, need to resolve this. -->
    <v-dialog v-model="pricingDialog" max-width="1200">
      <pricing-option
        :key="pricingDialogKey"
        @close-dialog="pricingDialog = false"
        @new-price-update="openCustomerScreenEnhanced"
        :record-id="productPricingSelected"
      ></pricing-option>
    </v-dialog>

    <!-- Delivery Form Dialog -->
    <v-dialog v-model="deliveryForm" max-width="1200" persistent>
      <delivery-form
        @post-transaction="postTransactionForOnlineCustomer"
        @close-dialog="deliveryForm = false"
        :key="shippingFormKey"
      ></delivery-form>
    </v-dialog>

    <!-- Loading Indicator Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="350">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Quotation Dialog -->
    <v-dialog v-model="quotation" hide-overlay width="1200">
      <Quotation></Quotation>
    </v-dialog>

    <!-- ENHANCED App Bar -->
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
      clipped-right
      elevation="8"
      height="80"
      class="app-header"
    >
      <v-container fluid class="pa-3">
        <v-row align="center" no-gutters>
          <!-- Left Section - Menu & Mobile Cart -->
          <v-col cols="12" md="2" class="d-flex align-center">
            <v-btn icon @click="drawer = !drawer" class="mr-3 menu-btn" large>
              <v-icon size="28">mdi-menu</v-icon>
            </v-btn>

            <!-- Mobile Cart Button -->
            <v-btn
              icon
              @click="drawer_right = !drawer_right"
              class="d-lg-none cart-mobile-btn"
              large
            >
              <v-badge
                v-if="productCart.length > 0"
                :content="productCart.length"
                color="error"
                overlap
                dot
              >
                <v-icon size="28">mdi-cart</v-icon>
              </v-badge>
              <v-icon v-else size="28">mdi-cart-outline</v-icon>
            </v-btn>
          </v-col>

          <!-- Right Section - Action Buttons -->
          <v-col cols="12" md="8" lg="9" class="d-flex justify-end">
            <div class="d-flex align-center flex-wrap ga-2">
              <!-- Customer Screen Button - ENHANCED -->
              <v-btn
                class="header-btn mr-2"
                :color="isCustomerDisplayOpen() ? 'success' : 'white'"
                text
                @click="openCustomerScreenEnhanced"
                large
                rounded
              >
                <v-icon left size="20">
                  {{
                    isCustomerDisplayOpen()
                      ? 'mdi-monitor-eye'
                      : 'mdi-monitor-share'
                  }}
                </v-icon>
                <span class="d-none d-sm-inline font-weight-medium">
                  {{ isCustomerDisplayOpen() ? 'ອັບເດດຈໍ' : 'ຈໍລູກຄ້າ' }}
                </span>
              </v-btn>

              <!-- Navigation Buttons -->
              <v-btn
                v-for="item in headerMenu"
                :key="item.title"
                :to="item.path"
                @click="item.method"
                text
                class="header-btn"
                :class="{ 'active-route': $route.path === item.path }"
                large
                rounded
              >
                <v-icon left size="20">{{ item.icon }}</v-icon>
                <span class="d-none d-sm-inline font-weight-medium">{{
                  item.title
                }}</span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- ENHANCED Left Navigation Drawer -->
    <v-navigation-drawer
      app
      v-model="drawer"
      clipped
      width="300"
      class="drawer-left elevation-8"
    >
      <div class="drawer-header pa-4 ma-0">
        <v-row align="center" no-gutters>
          <v-col cols="auto" class="mr-3">
            <!-- Center Section - Search -->
            <v-text-field
              v-model="serachModel"
              clearable
              clear-icon="mdi-close"
              prepend-inner-icon="mdi-magnify"
              outlined
              dense
              label="ຄົ້ນຫາສິນຄ້າ..."
              solo-inverted
              hide-details
              class="search-field elevation-2"
            />
          </v-col>
          <!-- <v-btn @click="testSearch" color="error" small class="ml-2">
            🧪 Test Search
          </v-btn> -->
        </v-row>
      </div>
      <!-- Terminal Header -->
      <div class="drawer-header pa-4 ma-0">
        <v-card
          color="warning"
          outlined
          @click="terminalDialog = true"
          class="terminal-chip elevation-2"
          hover
        >
          <v-card-text class="pa-3">
            <v-row align="center" no-gutters>
              <v-col cols="auto" class="mr-3">
                <v-icon color="white darken-2" size="24">mdi-monitor</v-icon>
              </v-col>
              <v-col>
                <div class="font-weight-bold">
                  {{ currentTerminal?.name || 'ເລືອກ Terminal' }}
                </div>
                <div class="text-caption">
                  {{ currentTerminal?.description || 'ກະລຸນາເລືອກ Terminal' }}
                </div>
              </v-col>
              <v-col cols="auto">
                <v-icon color="orange darken-2">mdi-chevron-down</v-icon>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>

      <v-divider class="mx-4"></v-divider>

      <!-- Categories List -->
      <div class="pa-4">
        <div class="font-weight-bold mb-3 primary--text">ໝວດໝູ່ສິນຄ້າ</div>

        <v-list dense nav class="transparent">
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(item, i) in categoryList"
              :key="i"
              class="category-item mb-1"
              :class="{ 'active-category': selectedItem === i }"
              rounded
            >
              <v-list-item-icon class="mr-3">
                <v-icon :color="selectedItem === i ? 'primary' : 'grey'">
                  mdi-tag
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-medium text-wrap"
                  :class="{ 'primary--text': selectedItem === i }"
                >
                  {{ item.categ_name }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon v-if="selectedItem === i">
                <v-icon color="primary" small>mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>

    <!-- ENHANCED Main Content -->
    <v-main class="main-content">
      <div class="main-content-wrapper">
        <v-container fluid class="pa-0 main-container">
          <!-- TODO: customer update screen seems there is a bug -->
          <Nuxt
            :key="productComponentKey"
            @update-cus-screen="handleCustScreen"
          />
        </v-container>
      </div>
    </v-main>

    <!-- ENHANCED Right Navigation Drawer (Cart) -->
    <v-navigation-drawer
      app
      right
      clipped
      width="500"
      class="cart-drawer elevation-8"
      :permanent="$vuetify.breakpoint.lgAndUp"
      :temporary="$vuetify.breakpoint.mdAndDown"
      v-model="drawer_right"
    >
      <div class="cart-container">
        <!-- Enhanced Customer Bar -->
        <div class="customer-bar pa-4">
          <v-row align="center" no-gutters class="ga-2">
            <v-col>
              <v-card
                color="success"
                outlined
                @click="openCustomerDialog"
                class="customer-chip elevation-2"
                hover
              >
                <v-card-text class="pa-3">
                  <v-row align="center" no-gutters>
                    <v-col cols="auto" class="mr-3">
                      <v-icon color="success" size="20"
                        >mdi-account-circle</v-icon
                      >
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
                  @click="openDeliveryBox"
                  title="ຈັດສົ່ງ"
                  class="action-btn"
                >
                  <v-icon>mdi-truck-delivery</v-icon>
                </v-btn>

                <v-btn
                  icon
                  color="primary"
                  @click="newOrder"
                  title="ອໍເດີໃໝ່"
                  class="action-btn"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>

                <v-btn
                  icon
                  color="grey"
                  @click="drawer_right = false"
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
                  :key="item.id"
                  :item="item"
                  :format-number="formatNumber"
                  @delete="deteletProductLocal"
                  @update-qty="openQtyDialog"
                  @decrease="decreaseProductAmount"
                  @increase="addProductValidation"
                  @price-click="pricingLogig"
                  @configure-gift="handleGiftConfirm"
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
          :discount="discount"
          :cash-received="cashReceived"
          :changes="changes"
          :grand-total="grandTotal"
          :currency-list="findAllCurrency"
          :payment-list="findAllPayment"
          :show-check-out="showCheckOut"
          :selected-payment="currentPayment"
          :format-number="formatNumber"
          :svg-icon="svgIcon"
          :enablePredefinedPayments="true"
          :defaultPaymentMethods="[14, 15]"
          @update:discount="handleDiscountUpdate"
          @update:cash-received="handleCashReceivedUpdate"
          @toggle-checkout="showCheckOut = !showCheckOut"
          @process-single-payment="processSinglePayment"
          @select-payment="selectePaymentMethod"
          @open-multi-payment="openMultiPaymentDialog"
          @show-error="handlePaymentError"
        />
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import CustomerList from '~/components/customer/CustomerList.vue'
import Quotation from '~/components/quotation'
import PricingOption from '~/components/PricingOption.vue'
import LoadingIndicator from '~/components/LoadingIndicator.vue'
import DeliveryForm from '~/components/DeliveryForm.vue'
import MultiPaymentDialog from '~/components/pos/MultiPaymentDialog-vue2.vue'
import { createMultiPayment } from '~/composables/useMultiPayment-vue2.js'

// Import the components
import CartItemComponent from '~/components/pos/CartItemComponent.vue'
import CartFooterComponent from '~/components/pos/CartFooterComponent.vue'

import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { hostName, mainCompanyInfo } from '~/common/api'
import { defaultTicket, customerTicket } from '~/common/ticket.js'
import Vue from 'vue'
import { getFormatNum, jsDateToMysqlDate, ticketHtml } from '~/common'
import {
  swalSuccess,
  swalError2,
  toastNotification,
  confirmSwal,
} from '~/common/index'
import _ from 'lodash' // Import lodash for debouncing

export default {
  components: {
    CustomerList,
    Quotation,
    PricingOption,
    LoadingIndicator,
    DeliveryForm,
    CartItemComponent,
    CartFooterComponent,
    MultiPaymentDialog,
  },
  name: 'DefaultLayout',
  provide() {
    return {
      sharedState: this.sharedState,
    }
  },
  data() {
    return {
      // PERFORMANCE OPTIMIZATION: Add new properties
      updateCustomerScreenDebounced: null,
      customerScreenUpdateTimeout: null,
      productLookupCache: new Map(),
      lastCartUpdateTime: 0,

      multiPaymentCodes: '',
      sharedState: Vue.observable({
        saleHeader: 0,
      }),
      customerScreenSyncInterval: null,
      multiPaymentDialog: false,
      pendingSaleHeaderId: null,
      isCreatingSale: false,
      qtyDialog: false,
      newQty: 0,
      selectedProductId: null,
      upSvg: require('~/assets/icons/dcommerce/up.svg'),
      downSvg: require('~/assets/icons/dcommerce/down.svg'),
      showCheckOut: false,
      productPricingSelected: null,
      pricingDialogKey: 1,
      pricingDialog: false,
      onlineCustomerInfo: {},
      tickePreviewDialog: false,
      deliveryForm: false,
      productComponentKey: 1,
      terminalDialog: false,
      terminalSelected: null,
      search: '',
      svgIcon: require('~/assets/icons/cash.svg'),
      lastTransactionSaleHeaderId: 0,
      drawer: true,
      isloading: false,
      drawer_right: false,
      fixed: true,
      title: 'App name & Logo',
      customerDialog: false,
      discount: 0,
      cashReceived: 0,
      priceRule: [
        (v) => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
      ],
      categoryList: [],
      quotation: false,
      // paymentList: [],
      selectedItem: 0,
      headerMenu: [
        {
          title: 'Home',
          path: '/admin',
          icon: 'mdi-home-circle-outline',
          method: () => {},
        },
        {
          title: 'Orders',
          path: '/admin/ordersFromPos',
          icon: 'mdi-reorder-horizontal',
          method: () => {},
        },
        {
          title: 'Quotation',
          path: '',
          icon: 'mdi-receipt-text-clock-outline',
          method: this.setQuotation,
        },
        {
          title: 'Logout',
          path: '/admin/logout',
          icon: 'mdi-logout',
          method: () => {},
        },
      ],
      shippingFormKey: 1,
      // currencyList: [],
      saleHeader: {
        id: null,
        bookingDate: '',
        remark: '',
        total: 0,
        exchangeRate: 1,
        isActive: true,
      },
      stateValue: '',

      // CUSTOMER SCREEN INTEGRATION - NEW
      $customerWindow: null,
    }
  },

  computed: {
    // ENHANCED COMPANY DATA FOR CUSTOMER SCREEN
    companyData() {
      const baseCompany = mainCompanyInfo()
      const terminalCompany = this.currentTerminal?.location?.company
      console.info(`TERMINAL COMPAYMEN ${JSON.stringify(terminalCompany)}`)

      const baseUrl = this.$axios.defaults.baseURL || ''
      return {
        name: terminalCompany?.name || baseCompany?.name || 'DCOMMERCE MART',
        address:
          this.formatCompanyAddress(terminalCompany) ||
          baseCompany?.address ||
          '123 Main Street',
        tel: terminalCompany?.tel || baseCompany?.tel || '',
        email: terminalCompany?.email || baseCompany?.email || '',
        bank: terminalCompany?.bank || baseCompany?.bank || '',
        accountName:
          terminalCompany?.accountName || baseCompany?.accountName || '',
        accounts: terminalCompany?.accounts || baseCompany?.accounts || '',
        remark: terminalCompany?.remark || baseCompany?.remark || '',
        ticketLogo:
          `${baseUrl}/${terminalCompany.profile_image_path}` ||
          'default-logo.png',
        qrCode:
          `${baseUrl}/${terminalCompany.bank_qr_image_path}` ||
          'default-logo.png',
      }
    },

    changes() {
      const changeValue =
        this.cashReceived == 0
          ? 0
          : this.cashReceived - (this.grandTotal - this.discount)
      return this.formatNumber(changeValue)
    },

    companyLogo() {
      return require(`~/assets/image/${this.companyData.ticketLogo}`)
    },
    ticketCommon() {
      return ticketHtml()
    },
    customerDisplayName() {
      if (this.currenctCustomer === null) {
        return 'Walk-in Customer'
      }

      if (this.currenctCustomer.company) {
        return `${this.currenctCustomer.company} ${
          this.currenctCustomer.grade ?? 'NO GRADE'
        }`.trim()
      } else {
        return `${this.currenctCustomer.name} ${
          this.currenctCustomer.grade ?? 'NO GRADE'
        }`.trim()
      }
    },
    user() {
      return this.$auth.user || ''
    },
    ...mapState(['productSearchKeyboard']),
    ...mapGetters([
      'currentSelectedLocation',
      'cartOfProduct',
      'currenctSelectedCategoryId',
      'findAllProduct',
      'currentSelectedCustomer',
      'currentSelectedPayment',
      'findSelectedTerminal',
      'findAllTerminal',
      'findAllLocation',
      'findAllPayment',
      'findAllCurrency',
      'findLocalCurrency',
      'findAllClient',
    ]),
    serachModel: {
      get() {
        return this.stateValue
      },
      set(value) {
        this.stateValue = value
        console.log(`🔍 Layout: Setting search to "${value}"`)
        if (value) {
          const lowerCaseSearchValue = value.toLowerCase()
          this.SetSearchKeyword(lowerCaseSearchValue)
        } else {
          this.SetSearchKeyword('')
        }

        // REMOVED: Don't force update the child component
        // this.productComponentKey += 1  // <-- REMOVE THIS LINE
      },
    },

    currenctCustomer() {
      return this.currentSelectedCustomer
    },
    currentTerminal() {
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },
    productCart() {
      return this.cartOfProduct
    },
    generateSaleLine() {
      let lines = []

      for (const iterator of this.productCart) {
        const currency = this.findCurrency(iterator.saleCurrencyId)
        console.info(`currency model ${JSON.stringify(currency)}`)
        lines.push({
          quantity: iterator.qty,
          unitRate: 1,
          currencyId: iterator.saleCurrencyId,
          exchangeRate: currency.rate || 1,
          price: iterator.localPrice,
          discount: 0,
          validateStockOnSale: iterator.validateStockOnSale,
          productId: iterator.id,
          productKey: iterator.id,
          unitId: iterator.stockUnitId,
          total: iterator.qty * iterator.localPrice,
          isGift: iterator.isGift,
          priceListId: iterator.priceListId,
          isActive: true,
        })
      }
      return lines
    },
    selectedCategoryId() {
      return this.currenctSelectedCategoryId
    },
    currentPayment() {
      return this.currentSelectedPayment
    },
    currentPaymentCode() {
      if (this.multiPaymentCodes) {
        return this.multiPaymentCodes
      }

      const payment = this.findAllPayment.find(
        (el) => el.id == this.currentSelectedPayment
      )
      if (payment == undefined) return ''
      return payment['payment_code']
    },
    grandTotal() {
      const totalPrice = this.cartOfProduct.reduce((total, item) => {
        return total + item.qty * item.localPrice
      }, 0)
      return totalPrice
    },
  },

  mounted() {
    // PERFORMANCE OPTIMIZATION: Enhanced debounced customer screen updates
    this.updateCustomerScreenDebounced = _.debounce(() => {
      if (this.isCustomerDisplayOpen()) {
        this.sendQRToCustomerScreen()
      }
    }, 300) // Increased delay for better performance

    window.addEventListener('beforeunload', this.checkAllInitData)
    this.terminalSelected = this.findSelectedTerminal
    this.startCustomerScreenSync()
    this.fetchCategory()
    // this.loadPayment()
    this.loadCustomer()
    // this.loadCurrency()
    this.checkAllInitData()
    this.initializeMultiPayment()
    // this.$root.$on('update-cus-screen', this.openCustomerScreenEnhanced)

    // CUSTOMER SCREEN INTEGRATION
    this.$customerWindow = null
    window.addEventListener('message', this.handleCustomerScreenMessage)

    if (this.$vuetify.breakpoint.lgAndUp) {
      this.drawer_right = true
    }

    // PERFORMANCE OPTIMIZATION: Build initial product lookup cache
    this.buildProductLookupCache()
  },

  beforeDestroy() {
    window.removeEventListener('beforeunload', this.checkAllInitData)
    this.stopCustomerScreenSync()
    window.removeEventListener('message', this.handleCustomerScreenMessage)

    // PERFORMANCE OPTIMIZATION: Clear timeouts and caches
    if (this.customerScreenUpdateTimeout) {
      clearTimeout(this.customerScreenUpdateTimeout)
    }
    this.productLookupCache.clear()
  },

  watch: {
    // PERFORMANCE OPTIMIZATION: Debounced watchers
    cartOfProduct: {
      handler: _.debounce(function (newVal, oldVal) {
        this.lastCartUpdateTime = Date.now()
        if (this.isCustomerDisplayOpen()) {
          this.batchUpdateCustomerScreen()
        }
      }, 250),
      deep: true,
      immediate: false,
    },

    discount: {
      handler: _.debounce(function (newVal, oldVal) {
        if (this.isCustomerDisplayOpen() && this.productCart.length > 0) {
          this.batchUpdateCustomerScreen()
        }
      }, 200),
      immediate: false,
    },

    cashReceived: {
      handler: _.debounce(function (newVal, oldVal) {
        if (this.isCustomerDisplayOpen() && this.productCart.length > 0) {
          this.batchUpdateCustomerScreen()
        }
      }, 200),
      immediate: false,
    },

    // PERFORMANCE OPTIMIZATION: Rebuild cache when products change
    findAllProduct: {
      handler: _.debounce(function (newVal, oldVal) {
        this.buildProductLookupCache()
      }, 500),
      immediate: false,
    },

    // FIXED: Don't trigger component reload on category change
    selectedItem(val) {
      if (val != undefined) {
        const categoryId = this.categoryList[val]['categ_id']
        console.log(`📁 Layout: Category changing to ${categoryId}`)

        // Clear search when changing to "All" category
        if (categoryId === 9999) {
          console.log(`📁 Layout: Switching to "All" - clearing search`)
          this.stateValue = ''
          this.SetSearchKeyword('')
        }

        this.updateSelectedCategoryId(categoryId)

        // REMOVED: Don't force component reload
        // this.productComponentKey += 1  // <-- REMOVE THIS LINE
      }
    },

    // Also watch for store changes to keep things in sync
    'productCart.length': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.batchUpdateCustomerScreen()
        }
      },
    },

    // Add this watcher to debug store state
    '$store.getters.searchKeyword': {
      handler(newVal) {
        console.log(`🔍 Layout: Store searchKeyword changed to "${newVal}"`)
      },
    },
  },

  methods: {
    findCurrency(currencyId) {
      return this.findAllCurrency.find((el) => el.id == currencyId)
    },
    testSeartestSearch() {
      console.log('🧪 Layout: Testing search functionality')
      console.log(`Current serachModel: "${this.serachModel}"`)
      console.log(`Store keyword: "${this.$store.getters.searchKeyword}"`)
      console.log(`Current stateValue: "${this.stateValue}"`)
      console.log(`Selected category: ${this.currenctSelectedCategoryId}`)

      // Force set a search term
      this.serachModel = 'test'

      setTimeout(() => {
        console.log(
          `After setting "test": "${this.$store.getters.searchKeyword}"`
        )
      }, 100)

      // REMOVED: Don't force component reload
      // this.productComponentKey += 1  // <-- REMOVE THIS LINE
    },

    // Add method to reset everything
    resetSearchAndCategory() {
      console.log(`🧹 Layout: Resetting search and category`)
      this.stateValue = ''
      this.SetSearchKeyword('')
      this.selectedItem = this.categoryList.length - 1 // Set to "All"
      this.productComponentKey += 1
    },

    // PERFORMANCE OPTIMIZATION: New optimized methods
    handleCustScreen() {
      if (this.isCustomerDisplayOpen()) {
        this.batchUpdateCustomerScreen()
      }
    },
    /**
     * Build product lookup cache for fast access
     */
    buildProductLookupCache() {
      this.productLookupCache.clear()
      if (this.findAllProduct && Array.isArray(this.findAllProduct)) {
        this.findAllProduct.forEach((product) => {
          this.productLookupCache.set(product.id, product)
        })
      }
      console.log(
        `Product lookup cache built with ${this.productLookupCache.size} products`
      )
    },

    /**
     * Batch customer screen updates to reduce frequency
     */
    batchUpdateCustomerScreen() {
      // Cancel any pending updates
      if (this.customerScreenUpdateTimeout) {
        clearTimeout(this.customerScreenUpdateTimeout)
      }

      // Schedule single update
      this.customerScreenUpdateTimeout = setTimeout(() => {
        if (this.isCustomerDisplayOpen()) {
          this.sendQRToCustomerScreen()
        }
        this.customerScreenUpdateTimeout = null
      }, 150)
    },

    /**
     * Optimized product validation and addition
     */
    addProductValidation(product, isGift = false) {
      try {
        // Validate product is active
        if (!product.isActive) {
          this.showError('Product is inactive')
          return false
        }

        // Check stock if validation is enabled
        if (product.validateStockOnSale === 1) {
          const productStock =
            this.productLookupCache.get(product.id) ||
            this.findAllProduct.find((p) => p.id === product.id)
          if (productStock && productStock.stock <= 0) {
            this.showError('Stock not enough')
            return false
          }
        }

        // Check card_count limit before adding to cart
        if (!this.validateCardCountForIncrease(product)) {
          return false
        }

        const cartItem = {
          ...product,
          isGift: isGift,
          lineUUIDCheck: true,
          lineUUID: product.lineUUID || Date.now() + Math.random().toString(16),
        }

        // Add to store using Vuex action
        console.info(`product adding ${JSON.stringify(cartItem)}`)
        this.$store.dispatch('addProduct', cartItem)

        // PERFORMANCE OPTIMIZATION: Single optimized success message
        this.showOptimizedSuccessMessage(product)

        // PERFORMANCE OPTIMIZATION: Single batched customer screen update
        if (this.isCustomerDisplayOpen()) {
          this.batchUpdateCustomerScreen()
        }

        return true
      } catch (error) {
        console.error('Error adding product:', error)
        this.showError('Failed to add product to cart')
        return false
      }
    },

    /**
     * Optimized success message with reduced duration
     */
    showOptimizedSuccessMessage(product) {
      if (!this.$toast) return

      const existingItem = this.cartOfProduct.find(
        (item) => item.pro_id === product.pro_id || item.id === product.id
      )

      const newQty = existingItem ? existingItem.qty : 1
      const limit = product.card_count

      if (limit && limit > 0) {
        const remaining = limit - newQty

        this.$toast.success(
          remaining > 0
            ? `${product.pro_name} added (${remaining} more)`
            : `${product.pro_name} added (limit reached)`,
          {
            position: 'bottom-center',
            duration: 800, // Reduced duration for faster interaction
            dismissible: true,
          }
        )
      } else {
        this.$toast.success(`${product.pro_name} added`, {
          position: 'bottom-center',
          duration: 800,
          dismissible: true,
        })
      }
    },

    /**
     * Optimized card count validation
     */
    validateCardCountForIncrease(product) {
      const cardCountLimit = product.card_count

      if (
        (!cardCountLimit || cardCountLimit <= 0) &&
        product.validateStockOnSale == 1
      ) {
        if (this.$toast) {
          this.$toast.error(`Product ${product.pro_name} is not available`, {
            position: 'bottom-center',
            duration: 1500,
          })
        }
        return false
      }

      // Use cached lookup if available
      const existingCartItem = this.cartOfProduct.find((item) => {
        return item.pro_id === product.pro_id || item.id === product.id
      })

      if (existingCartItem) {
        const currentQty = existingCartItem.qty

        if (currentQty >= cardCountLimit && product.validateStockOnSale == 1) {
          if (this.$toast) {
            this.$toast.error(
              `Cannot add more. You have ${currentQty}/${cardCountLimit} items`,
              { position: 'bottom-center', duration: 1500 }
            )
          }
          return false
        }
      }

      return true
    },

    /**
     * Optimized customer screen updates with cached data
     */
    formatOrderItemsForCustomerScreen() {
      // Rebuild cache if empty
      if (this.productLookupCache.size === 0) {
        this.buildProductLookupCache()
      }

      return this.productCart.map((cartItem) => {
        // Fast cache lookup instead of array.find()
        const product = this.productLookupCache.get(cartItem.id)

        return {
          id: cartItem.id,
          name: product?.pro_name || cartItem.name || `Product ${cartItem.id}`,
          description: product?.pro_desc || cartItem.description || '',
          category: product?.categ_name || 'General',
          quantity: cartItem.qty,
          unitPrice: cartItem.localPrice,
          isGift: cartItem.isGift,
          totalPrice: cartItem.qty * cartItem.localPrice,
          status: 'pending',
        }
      })
    },

    /**
     * Optimized product deletion with batched updates
     */
    deteletProductLocal(product) {
      this.deleteProductFromCart(product)
      this.batchUpdateCustomerScreen()
    },

    decreaseProductAmount(product) {
      this.deleteProduct(product)
      this.batchUpdateCustomerScreen()
    },

    // PERFORMANCE OPTIMIZATION: Throttled discount and cash updates
    handleDiscountUpdate: _.throttle(function (value) {
      this.discount = value
      if (this.isCustomerDisplayOpen() && this.productCart.length > 0) {
        this.batchUpdateCustomerScreen()
      }
    }, 200),

    handleCashReceivedUpdate: _.throttle(function (value) {
      this.cashReceived = value
      if (this.isCustomerDisplayOpen() && this.productCart.length > 0) {
        this.batchUpdateCustomerScreen()
      }
    }, 200),

    // Keep all your existing methods but with performance optimizations where applicable
    startCustomerScreenSync() {
      this.customerScreenSyncInterval = setInterval(() => {
        if (this.isCustomerDisplayOpen() && this.productCart.length > 0) {
          this.sendQRToCustomerScreen()
        }
      }, 8000) // Increased from 5000ms to 8000ms for better performance
    },

    stopCustomerScreenSync() {
      if (this.customerScreenSyncInterval) {
        clearInterval(this.customerScreenSyncInterval)
        this.customerScreenSyncInterval = null
      }
    },

    handleGiftConfirm(giftData) {
      this.$store.commit('setGiftForCartItem', {
        item: giftData.item,
        giftConfig: giftData.giftConfig,
      })
      this.batchUpdateCustomerScreen() // Use batched update
    },

    openCustomerScreenEnhanced() {
      console.info(`COMPANY ${JSON.stringify(this.companyData)}`)
      try {
        const companyInfo = {
          name: this.companyData.name,
          address: this.companyData.address,
          tel: this.companyData.tel,
          email: this.companyData.email,
          bank: this.companyData.bank,
          accountName: this.companyData.accountName,
          accounts: this.companyData.accounts,
          remark: this.companyData.remark,
          qrCode: this.companyData.qrCode,
        }

        this.batchUpdateCustomerScreen() // Use batched update

        const companyParam = encodeURIComponent(JSON.stringify(companyInfo))
        const customerScreenPath = `/admin/cafeTable/customer?company=${companyParam}`

        const screenWidth = window.screen.width
        const screenHeight = window.screen.height

        this.$customerWindow = window.open(
          customerScreenPath,
          'CustomerDisplay',
          `width=${screenWidth},height=${screenHeight},left=0,top=0,resizable=yes,scrollbars=no,location=no,menubar=no,toolbar=no,status=no,titlebar=no,fullscreen=yes`
        )

        if (!this.$customerWindow) {
          swalError2(
            this.$swal,
            'Error',
            'Please allow popups for customer display'
          )
          return
        }

        setTimeout(() => {
          if (this.productCart.length > 0) {
            this.batchUpdateCustomerScreen() // Use batched update
          } else {
            this.sendWelcomeMessage()
          }
        }, 1000)

        this.setupCustomerWindowHandlers()
        console.log('Customer screen opened successfully')
      } catch (error) {
        console.error('Error opening customer screen:', error)
        swalError2(this.$swal, 'Error', 'Failed to open customer screen')
      }
    },

    setupCustomerWindowHandlers() {
      if (!this.$customerWindow) return

      this.$customerWindow.addEventListener('beforeunload', () => {
        console.log('Customer display window is closing')
        this.$customerWindow = null
      })
    },

    sendWelcomeMessage() {
      const formattedOrderItems = this.formatOrderItemsForCustomerScreen()
      const formattedOrderSummary = this.formatOrderSummaryForCustomerScreen()

      const message = {
        type: 'SHOW_QR_PAYMENT',
        data: {
          amount: this.grandTotal - this.discount,
          storeName: this.companyData.name,
          timestamp: Date.now(),
          orderItems: formattedOrderItems,
          discount: this.discount,
          change: this.changes,
          orderSummary: formattedOrderSummary,
        },
      }
      this.sendToCustomerScreen(message)
    },

    sendToCustomerScreen(message) {
      try {
        localStorage.setItem('customerDisplay', JSON.stringify(message))

        if (this.$customerWindow && !this.$customerWindow.closed) {
          this.$customerWindow.postMessage(message, '*')
        }

        console.log('Message sent to customer screen:', message)
      } catch (error) {
        console.error('Failed to send message to customer screen:', error)
      }
    },

    sendQRToCustomerScreen() {
      if (!this.productCart.length) {
        console.log('No items in cart for customer screen QR')
        return
      }

      const formattedOrderItems = this.formatOrderItemsForCustomerScreen()
      const formattedOrderSummary = this.formatOrderSummaryForCustomerScreen()

      const qrData = {
        amount: this.grandTotal - this.discount,
        tableNumber: this.currentTerminal?.name || 'POS-TERMINAL',
        ticketId: this.lastTransactionSaleHeaderId || null,
        qrString: this.generateQRForCustomerScreen(),
        timestamp: Date.now(),
        orderItems: formattedOrderItems,
        orderSummary: formattedOrderSummary,
      }

      const message = {
        type: 'SHOW_QR_PAYMENT',
        data: qrData,
      }

      this.sendToCustomerScreen(message)
    },

    generateQRForCustomerScreen() {
      const amount = Math.round(this.grandTotal - this.discount)
      const terminal = this.currentTerminal?.name || 'MART'

      const amountStr = amount.toString().padStart(6, '0')
      const tableStr = terminal.toString().padStart(6, '0')

      return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812${terminal} payment63041c9f`
    },

    formatOrderSummaryForCustomerScreen() {
      const subtotal = this.grandTotal
      const discount = this.discount
      const changeValue =
        this.cashReceived == 0
          ? 0
          : this.cashReceived - (this.grandTotal - this.discount)
      const total = subtotal - discount

      return {
        subtotal: subtotal,
        tax: 0,
        taxRate: 0,
        discount: discount,
        total: total,
        change: changeValue,
      }
    },

    showPaymentSuccessOnCustomerScreen() {
      const message = {
        type: 'PAYMENT_SUCCESS',
        data: {
          amount: this.grandTotal - this.discount,
          tableNumber: this.currentTerminal?.name || 'POS',
        },
        timestamp: Date.now(),
      }

      this.sendToCustomerScreen(message)
    },

    hideQRPaymentFromCustomerScreen() {
      const message = {
        type: 'HIDE_QR_PAYMENT',
        timestamp: Date.now(),
      }

      this.sendToCustomerScreen(message)
      localStorage.removeItem('customerDisplay')
    },

    isCustomerDisplayOpen() {
      return this.$customerWindow && !this.$customerWindow.closed
    },

    closeCustomerDisplayWindow() {
      if (this.$customerWindow && !this.$customerWindow.closed) {
        this.$customerWindow.close()
      }
      this.$customerWindow = null
      localStorage.removeItem('customerDisplay')
    },

    handleCustomerScreenMessage(event) {
      try {
        if (event.data && typeof event.data === 'object') {
          console.log('Received message from customer screen:', event.data)
        }
      } catch (error) {
        console.error('Error handling customer screen message:', error)
      }
    },

    formatCompanyAddress(company) {
      if (!company) return ''

      let formattedAddress = ''
      if (company.address) formattedAddress += company.address
      if (company.village) formattedAddress += `<br>${company.village}`
      if (company.district) formattedAddress += `, ${company.district}`
      if (company.province) formattedAddress += `, ${company.province}`

      return formattedAddress || company.address || ''
    },

    // Keep all your existing methods with minimal changes
    initializeMultiPayment() {
      this.multiPayment = createMultiPayment(this.$axios, this.formatNumber)
    },

    async openMultiPaymentDialog() {
      if (this.generateSaleLine.length === 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        return
      }

      try {
        console.log(
          'Opening multi-payment dialog - Cart items:',
          this.productCart.length
        )

        await this.createSaleHeader()
        await this.multiPayment.initializePayment(
          this.grandTotal - this.discount,
          this.pendingSaleHeaderId
        )

        this.multiPaymentDialog = true
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          error.message || 'ບໍ່ສາມາດເປີດໜ້າຈ່າຍເງິນໄດ້'
        )
      }
    },

    async processSinglePayment() {
      try {
        if (this.generateSaleLine.length === 0) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
          return
        }

        if (!this.currentPayment) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກວິທີການຊຳລະ')
          return
        }

        await this.postTransactionOriginal(false)
      } catch (error) {
        console.error('Single payment error:', error)
        this.hideQRPaymentFromCustomerScreen()
        swalError2(
          this.$swal,
          'Error',
          error.message || 'ເກີດຂໍ້ຜິດພາດໃນການຊຳລະ'
        )
      }
    },

    async createSaleHeader() {
      if (this.isCreatingSale || this.pendingSaleHeaderId) return

      this.isCreatingSale = true
      this.isloading = true

      try {
        const today = new Date()
        const saleHeaderData = {
          isActive: true,
          discount: this.discount,
          total: this.grandTotal - this.discount,
          clientId: this.currenctCustomer.id,
          paymentId: null,
          currencyId: this.findLocalCurrency.id, //TODO: update currency DYNAMICALLY
          exchangeRate: this.findLocalCurrency.rate, //TODO: update currency DYNAMICALLY
          lines: this.generateSaleLine,
          userId: this.user.id,
          bookingDate: jsDateToMysqlDate(today),
          locationId: this.currentTerminal['locationId'],
          remark: 'Multi-payment transaction',
        }

        const response = await this.$axios.post(
          '/api/sale/create-header-only',
          saleHeaderData
        )

        this.pendingSaleHeaderId =
          response.data.saleHeaderId || response.data.id
        this.lastTransactionSaleHeaderId = this.pendingSaleHeaderId
      } catch (error) {
        let errorMessage = 'ບໍ່ສາມາດສ້າງລາຍການຂາຍໄດ້'

        if (error.response && error.response.data) {
          const errorData = error.response.data

          if (
            errorData.stockErrors &&
            Array.isArray(errorData.stockErrors) &&
            errorData.stockErrors.length > 0
          ) {
            const stockError = errorData.stockErrors[0]
            const product =
              this.productLookupCache.get(stockError.productId) ||
              this.findAllProduct.find((el) => el.id == stockError.productId)

            errorMessage = `ຈຳນວນສິນຄ້າ: ${
              product?.pro_name || 'Unknown Product'
            } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${
              stockError.available
            }, ຂາດ: ${stockError.shortage})`
          } else if (errorData.message) {
            errorMessage = errorData.message
          }
        }

        console.error('Error creating sale header:', error)
        throw new Error(errorMessage)
      } finally {
        this.isCreatingSale = false
        this.isloading = false
      }
    },

    async handleMultiPaymentConfirm(paymentData) {
      try {
        this.isloading = true

        this.batchUpdateCustomerScreen() // Use batched update

        if (!paymentData || paymentData.length === 0) {
          throw new Error('ຕ້ອງມີການຈ່າຍເງິນຢ່າງໜ້ອຍ 1 ວິທີ')
        }

        const totalPaid = paymentData.reduce(
          (sum, payment) => sum + (payment.amount || 0),
          0
        )
        const expectedTotal = this.grandTotal - this.discount

        if (Math.abs(totalPaid - expectedTotal) > 0.01) {
          throw new Error(
            `ຈຳນວນເງິນບໍ່ຄົບ. ຈ່າຍແລ້ວ: ${this.formatNumber(
              totalPaid
            )}, ຕ້ອງຈ່າຍ: ${this.formatNumber(expectedTotal)}`
          )
        }

        await this.$axios.post('/api/sale-payment/bulk', paymentData)
        this.formSaleHeader('')
        const response = await this.$axios.post(
          '/api/sale/create-line-only',
          this.saleHeader
        )

        this.showPaymentSuccessOnCustomerScreen()
        this.sharedState.saleHeader =
          this.lastTransactionSaleHeaderId || Date.now()
        swalSuccess(this.$swal, 'ສຳເລັດ', 'ການຈ່າຍເງິນສຳເລັດແລ້ວ')

        const paymentCodes = paymentData
          .map((payment) => {
            const foundPayment = this.findAllPayment.find(
              (p) => p.id === payment.paymentId
            )
            return foundPayment ? foundPayment.payment_code : null
          })
          .filter((code) => code !== null)

        this.multiPaymentCodes = paymentCodes.join(' + ')
        this.printDefaultTicket()
        this.completeTransaction()
      } catch (error) {
        console.error('Multi-payment error:', error)
        this.hideQRPaymentFromCustomerScreen()

        let errorMessage = error.message
        if (error.response?.data) {
          if (typeof error.response.data === 'string') {
            errorMessage = error.response.data
          } else if (error.response.data.message) {
            errorMessage = error.response.data.message
          }
        }

        swalError2(this.$swal, 'Error', errorMessage)
      } finally {
        this.isloading = false
        this.multiPaymentDialog = false
      }
    },

    completeTransaction() {
      this.newOrder()
      this.discount = 0
      this.cashReceived = 0
      this.pendingSaleHeaderId = null
      this.multiPaymentCodes = ''

      if (this.multiPayment) {
        this.multiPayment.clearPayments()
      }

      setTimeout(() => {
        this.hideQRPaymentFromCustomerScreen()
      }, 2000)
    },

    async handleMultiPaymentCancel() {
      this.multiPaymentDialog = false
      await this.reversalSale()
    },

    async reversalSale() {
      if (!this.pendingSaleHeaderId) {
        return
      }
      this.isLoading = true
      const form = {
        isActive: false,
        remark: 'UNDO MULTI PAYMENT TXN',
        cancel_fee: 0,
        customerId: null,
      }

      try {
        const response = await this.$axios.put(
          `api/sale/reverse/${this.pendingSaleHeaderId}`,
          form
        )
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Something went wrong ' + error)
      }
      this.isLoading = false
    },

    handleMultiPaymentError(error) {
      console.error('Multi-payment error:', error)
      swalError2(this.$swal, 'Error', error.message || 'ເກີດຂໍ້ຜິດພາດໃນການຊຳລະ')
    },

    switchTerminalAction() {
      this.setSelectedTerminal(this.terminalSelected)
      const location = this.findAllLocation.find(
        (el) =>
          el.id ==
          this.findAllTerminal.find((el) => el.id == this.terminalSelected)[
            'locationId'
          ]
      )
      this.setSelectedLocation(location)

      // ONLY reload when terminal actually changes (this makes sense)
      this.productComponentKey += 1
      this.terminalDialog = false

      this.buildProductLookupCache()
    },

    openQtyDialog(item) {
      this.selectedProductId = item.id
      this.newQty = item.qty
      this.qtyDialog = true
    },

    updateQty() {
      if (this.selectedProductId !== null) {
        this.$store.commit('UPDATE_QTY', {
          productId: this.selectedProductId,
          qty: this.newQty,
        })
        this.batchUpdateCustomerScreen() // Use batched update
        this.qtyDialog = false
        this.selectedProductId = null
        this.newQty = 0
      }
    },

    pricingLogig(item) {
      this.productPricingSelected = item.id
      this.pricingDialogKey += 1
      this.pricingDialog = true
    },

    openDeliveryBox() {
      if (this.cartOfProduct.length <= 0)
        return swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
      this.shippingFormKey += 1
      this.deliveryForm = true
    },

    ...mapActions([
      'initiateData',
      'setSelectedTerminal',
      'setSelectedLocation',
      'clearCustomerFormAction',
      'setSelectedPayment',
      'deleteProduct',
      'addProduct',
      'clearCart',
      'updateSelectedCategoryId',
      'deleteProductFromCart',
      'addSelectedPayment',
      'addCustomer',
    ]),

    // PERFORMANCE OPTIMIZATION: Enhanced helper methods
    showError(message) {
      if (this.$toast) {
        this.$toast.error(message, { duration: 2000 })
      } else if (this.$swal) {
        this.$swal.fire({
          icon: 'error',
          title: 'Error',
          text: message,
          timer: 2000,
          timerProgressBar: true,
        })
      } else {
        alert(message)
      }
    },

    canAddProductToCart(product) {
      if (!product.card_count || product.card_count <= 0) return false

      const existingCartItem = this.cartOfProduct.find(
        (item) => item.pro_id === product.pro_id || item.id === product.id
      )

      if (!existingCartItem) return true
      return existingCartItem.qty < product.card_count
    },

    getProductAvailabilityStatus(product) {
      if (!product.card_count || product.card_count <= 0) return 'unavailable'

      const existingCartItem = this.cartOfProduct.find(
        (item) => item.pro_id === product.pro_id || item.id === product.id
      )

      if (!existingCartItem) return 'available'

      const currentQty = existingCartItem.qty
      const limit = product.card_count

      if (currentQty >= limit) return 'limit-reached'
      if (currentQty >= limit - 1) return 'near-limit'

      return 'available'
    },

    checkAllInitData() {
      if (this.findAllTerminal.length == 0) {
        this.initData()
      }
      if (!this.currentSelectedLocation) {
        this.terminalDialog = true
      }
    },

    initData() {
      console.info(`INIT CALLING...`)
      this.initiateData(this.$axios)
    },

    printDefaultTicket() {
      const theChanges = this.changes
      console.info(`poduct cart DET ${JSON.stringify(this.productCart)}`)
      defaultTicket({
        productCart: this.productCart,
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: this.discount,
        currencyList: this.findAllCurrency,
        grandTotal: this.grandTotal,
        lastTransactionSaleHeaderId: this.lastTransactionSaleHeaderId,
        currentTerminal: {
          ...this.currentTerminal,
          baseURL: this.$axios.defaults.baseURL,
        },
        user: this.user,
        ticketCommon: this.ticketCommon,
        currentPaymentCode: this.currentPaymentCode,
        cashReceived: this.cashReceived,
        changes: theChanges,
        axios: this.$axios,
        companyData: this.companyData,
      })
    },

    formSaleHeader(remark = '') {
      const today = new Date()
      this.saleHeader.isActive = true
      this.saleHeader.discount = this.discount
      this.saleHeader.total = this.grandTotal - this.discount
      this.saleHeader.clientId = this.currenctCustomer.id
      this.saleHeader.paymentId = this.currentPayment
      this.saleHeader.currencyId = this.findLocalCurrency.id
      this.saleHeader.exchangeRate = this.findLocalCurrency.rate
      this.saleHeader.lines = this.generateSaleLine
      this.saleHeader.userId = this.user.id
      this.saleHeader.bookingDate = jsDateToMysqlDate(today)
      this.saleHeader.locationId = this.currentTerminal['locationId']
      this.saleHeader.id = this.pendingSaleHeaderId
    },

    async setQuotation() {
      if (this.isloading || this.generateSaleLine == 0) {
        if (this.generateSaleLine == 0) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        }
        return
      }

      this.isloading = true
      this.formSaleHeader('Quotation')
      await this.$axios
        .post('/api/quotation/create', this.saleHeader)
        .then((res) => {
          this.lastTransactionSaleHeaderId = res.data
            .split('-')[1]
            .toString()
            .trim()
          window.open(
            `/admin/PDFQuotation/${this.lastTransactionSaleHeaderId}`,
            '_blank'
          )
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er)
        })
      this.isloading = false
    },

    openCustomerDialog() {
      this.customerDialog = true
    },

    ...mapMutations({
      SetSearchKeyword: 'SetSearchKeyword',
      UPDATE_QTY: 'UPDATE_QTY',
    }),

    async postTransactionForOnlineCustomer(payload) {
      this.saleHeader.customerForm = payload.customerForm
      this.discount = payload.customerForm.discount
      this.onlineCustomerInfo = payload.customerInfo
      await this.postTransaction(true)
      delete this.saleHeader.customerForm
      this.deliveryForm = false
    },

    async postTransaction(isDeliveryCustomer = false) {
      if (this.generateSaleLine.length === 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        return
      }

      if (isDeliveryCustomer) {
        return this.postTransactionOriginal(isDeliveryCustomer)
      }

      this.openMultiPaymentDialog()
    },

    handlePaymentError(errorMessage) {
      swalError2(this.$swal, 'Error', errorMessage)
    },

    async postTransactionOriginal(isDeliveryCustomer) {
      if (this.isloading || this.generateSaleLine == 0) {
        if (this.generateSaleLine == 0) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        }
        return
      }

      this.isloading = true
      this.formSaleHeader('')

      try {
        let response
        const isUpdate = this.saleHeader.id && this.saleHeader.id !== null

        if (isUpdate) {
          response = await this.$axios.put(
            `/api/sale/update-v2/${this.saleHeader.id}`,
            this.saleHeader
          )
        } else {
          response = await this.$axios.post('/api/sale/create', this.saleHeader)
        }

        let successMessage = ''
        let saleHeaderId = ''

        if (typeof response.data === 'string' && response.data.includes('-')) {
          const parts = response.data.split('-')
          successMessage = parts[0].trim()
          saleHeaderId = parts[1].trim()
        } else if (typeof response.data === 'object') {
          successMessage = isUpdate
            ? 'Successfully updated'
            : 'Successfully created'
          saleHeaderId = response.data.id || this.saleHeader.id
        } else {
          successMessage = isUpdate
            ? 'Sale updated successfully'
            : 'Sale created successfully'
          saleHeaderId = this.saleHeader.id || new Date().getTime()
        }

        this.lastTransactionSaleHeaderId = saleHeaderId
        swalSuccess(this.$swal, 'Succeed', successMessage)

        if (isDeliveryCustomer) {
          this.generatePrintViewDeliveryCustomer()
          this.clearCustomerFormAction()
        } else {
          try {
            this.printDefaultTicket()
          } catch (error) {
            console.error(`PRINT TICKET FAIL ${error}`)
          }
        }

        const now = new Date()
        this.newOrder()
        this.sharedState.saleHeader = this.lastTransactionSaleHeaderId || now
        localStorage.setItem(
          'saleHeader',
          this.lastTransactionSaleHeaderId || now
        )
        this.discount = 0
        this.cashReceived = 0
      } catch (error) {
        let errorMessage = 'Unknown error occurred'

        if (error.response && error.response.data) {
          const errorData = error.response.data

          if (errorData && typeof errorData === 'object') {
            if (
              errorData.stockErrors &&
              Array.isArray(errorData.stockErrors) &&
              errorData.stockErrors.length > 0
            ) {
              const stockError = errorData.stockErrors[0]
              const product =
                this.productLookupCache.get(stockError.productId) ||
                this.findAllProduct.find((el) => el.id == stockError.productId)

              errorMessage = `ຈຳນວນສິນຄ້າ: ${
                product?.pro_name || 'Unknown Product'
              } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${
                stockError.available
              }, ຂາດ: ${stockError.shortage})`
            } else if (errorData.message) {
              errorMessage = errorData.message
            } else if (errorData.error) {
              errorMessage = errorData.error
            } else {
              errorMessage = JSON.stringify(errorData)
            }
          } else if (typeof errorData === 'string') {
            if (errorData.includes('#')) {
              const id = errorData.split('#')[1]
              const product =
                this.productLookupCache.get(parseInt(id)) ||
                this.findAllProduct.find((el) => el.id == id)
              errorMessage = `ຈຳນວນສິນຄ້າ: ${
                product?.pro_name || ''
              } ມີບໍ່ພຽງພໍໃນສາງ`
            } else {
              errorMessage = errorData
            }
          }
        }

        swalError2(this.$swal, 'Error', errorMessage)
      }

      this.isloading = false
    },

    generatePrintViewDeliveryCustomer() {
      let txnListHtml = ``
      for (const iterator of this.productCart) {
        // Use cached lookup
        const product =
          this.productLookupCache.get(iterator.id) ||
          this.findAllProduct.find((el) => el.id == iterator.id)
        const quantity = iterator.qty
        const total = iterator.qty * iterator.localPrice
        txnListHtml += `<div class="ticket">
                    <div class="product-name">${product.pro_name} </div>
                    <div class="price"> ${quantity} ${
          this.onlineCustomerInfo.payment == 'COD'
            ? ' X ' + this.formatNumber(total)
            : ''
        }</div>
                </div>`
      }

      const discountHtml = `<div class="ticket">
                    <div class="product-name">ສ່ວນຫລຸດ </div>
                    <div class="price"> - ${this.formatNumber(
                      this.discount
                    )}</div>
                </div>`
      const riderFeeHtml = `<div class="ticket">
                    <div class="product-name">ຄ່າສົ່ງ </div>
                    <div class="price">${this.formatNumber(
                      this.onlineCustomerInfo.riderFee
                    )}</div>
                </div>`
      const today = new Date()
      const bookingDate = jsDateToMysqlDate(today)

      let totalHtml = ``

      for (const iterator of this.findAllCurrency) {
        if (
          iterator.code == 'LAK' &&
          (this.onlineCustomerInfo.payment == 'COD' ||
            this.onlineCustomerInfo.shipping == 'RIDER')
        ) {
          totalHtml += `
                                    <div class="ticket">
                                        <div class="product-name"> </div>
                                    <div class="price-total"> <h5>ຍອດລວມ(${
                                      this.onlineCustomerInfo.payment
                                    }): ${this.formatNumber(
            (this.grandTotal +
              +this.onlineCustomerInfo.riderFee -
              this.discount) /
              iterator.rate
          )}  </h5> </div>
                                </div>
                                    `
        }
      }

      const windowContent = `
         ${this.ticketCommon.header}
            <body>
                <h5> ວັນທີ: ${today.toLocaleString()}</h5>
                <h5> ຮ້ານ: ${this.onlineCustomerInfo.branch} </h5>
                <h5> ເບີໂທ: ${this.onlineCustomerInfo.branchTel} </h5>
                <hr> </hr>
                <h5> ຜູ້ຮັບ: ${this.onlineCustomerInfo.name}</h5>
                <h5> ໂທ: ${this.onlineCustomerInfo.tel} </h5>
                <h5> ຂົນສົ່ງ: ${this.onlineCustomerInfo.shipping} </h5>
                <h5> ບ່ອນສົ່ງ: ${this.onlineCustomerInfo.address} </h5>
              ${
                this.onlineCustomerInfo.shipping == 'RIDER'
                  ? ``
                  : `<h5> ຄ່າຝາກ: ${this.onlineCustomerInfo.shippingFeeBy}</h5>`
              }  
                <hr> </hr>
                ${txnListHtml}
                ${this.onlineCustomerInfo.riderFee > 0 ? riderFeeHtml : ''}
                ${
                  this.discount > 0 && this.onlineCustomerInfo.payment == 'COD'
                    ? discountHtml
                    : ''
                }
                <hr> </hr>
                ${totalHtml}
            </body>
            </html>
        `
      const printWin = window.open(
        '',
        '',
        'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0'
      )
      printWin.document.open()
      printWin.document.write(windowContent)

      setTimeout(() => {
        printWin.print()
        printWin.close()
      }, 1000)
    },

    formatNumber(val) {
      return getFormatNum(val)
    },

    selectePaymentMethod(id) {
      this.addSelectedPayment(id)
    },

    async fetchCategory() {
      this.isLoading = true
      await this.$axios
        .get('api/category/find')
        .then((res) => {
          this.categoryList = res.data.map((el) => {
            return {
              categ_id: el.categ_id,
              categ_name: el.categ_name,
              categ_desc: el.categ_desc,
            }
          })
          this.categoryList.push({
            categ_id: 9999, // Make sure this is a number, not string
            categ_name: 'ທັງໝົດ',
            categ_desc: 'ລາຍການສິນຄ້າ ທັງໝົດ',
          })

          // Set to "All" category by default
          this.selectedItem = this.categoryList.length - 1
          console.log(
            `📁 Categories loaded, selectedItem set to: ${this.selectedItem}`
          )
          console.log(
            `📁 Category ID will be: ${
              this.categoryList[this.selectedItem]['categ_id']
            }`
          )
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isLoading = false
    },

    // async loadCurrency() {
    //   this.isloading = true
    //   this.currencyList = []
    //   await this.$axios
    //     .get('/api/currency/findAll')
    //     .then((res) => {
    //       for (const iterator of res.data) {
    //         this.currencyList.push(iterator)
    //       }
    //     })
    //     .catch((er) => {
    //       swalError2(this.$swal, 'Error', er)
    //     })
    //   this.isloading = false
    // },

    async loadCustomer() {
      this.addCustomer(this.findAllClient[0])
      // this.isloading = true
      // await this.$axios
      //   .get('api/client/find')
      //   .then((res) => {
      //     this.addCustomer(res.data[0])
      //   })
      //   .catch((er) => {
      //     swalError2(this.$swal, 'ເກີດຂໍ້ຜິດພາດ', er.response.data)
      //   })
      // this.isloading = false
    },

    newOrder() {
      this.pendingSaleHeaderId = null
      this.clearCart()
      this.discount = 0
      this.cashReceived = 0

      // PERFORMANCE OPTIMIZATION: Clear cache and update customer screen
      this.productLookupCache.clear()
      this.buildProductLookupCache()
    },
  },
}
</script>

<style scoped>
/* Enhanced UI Styling */
* {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
}

/* App Header Enhancements */
.app-header {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
}

.menu-btn,
.cart-mobile-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.menu-btn:hover,
.cart-mobile-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: scale(1.05);
}

.search-field {
  border-radius: 12px !important;
  transition: all 0.3s ease;
}

.search-field:focus-within {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.header-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease;
  margin: 0 2px;
}

.header-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.active-route {
  background: rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

/* Enhanced Left Drawer */
.drawer-left {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%) !important;
  border-right: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.terminal-chip {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px !important;
}

.terminal-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 152, 0, 0.3) !important;
}

.category-item {
  border-radius: 12px !important;
  margin: 4px 0;
  transition: all 0.3s ease;
}

.category-item:hover {
  transform: translateX(4px);
}

.active-category {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform: translateX(6px);
}

/* Enhanced Main Content */
.main-content {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.main-content-wrapper {
  height: calc(100vh - 80px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.main-container {
  min-height: 100%;
}

/* Enhanced Cart Drawer */
.cart-drawer {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.cart-header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

/* Enhanced Dialog Styling */
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

/* Responsive Design Enhancements */
@media (max-width: 1263px) {
  .cart-drawer {
    width: 100% !important;
    max-width: 500px !important;
  }

  .header-btn span {
    display: none;
  }

  .search-field {
    margin-bottom: 8px;
  }

  .main-content-wrapper {
    height: calc(100vh - 80px);
    padding-right: 0;
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

@media (max-width: 600px) {
  .main-content-wrapper {
    height: calc(100vh - 80px);
  }

  .app-header {
    height: 70px !important;
  }

  .main-content-wrapper {
    height: calc(100vh - 70px);
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #c1c1c1 0%, #a8a8a8 100%);
  border-radius: 3px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #a8a8a8 0%, #909090 100%);
}

/* Smooth Animations */
.v-application * {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced Focus States */
.v-btn:focus::before {
  opacity: 0.12;
}

.v-text-field--outlined.v-input--is-focused .v-input__control .v-input__slot {
  border: 2px solid var(--v-primary-base) !important;
  border-color: var(--v-primary-base) !important;
}
</style>