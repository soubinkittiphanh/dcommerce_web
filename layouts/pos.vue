<template>
  <v-app dark>
    <!-- MINIMART POS.VUE -->
    <!-- Multi-Payment Dialog - ENHANCED -->
    <v-dialog v-model="multiPaymentDialog" max-width="900" persistent>
      <multi-payment-dialog
        v-model="multiPaymentDialog"
        :sale-total="grandTotal - discount"
        :payment-methods="paymentList"
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
    <v-dialog v-model="pricingDialog" max-width="1200">
      <pricing-option
        :key="pricingDialogKey"
        @close-dialog="pricingDialog = false"
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
        </v-row>
        <!-- <v-btn
          class="header-btn mr-2"
          color="warning"
          text
          @click="testCustomerScreenWithCurrentCart"
          large
          rounded
        >
          <v-icon left size="20">mdi-bug</v-icon>
          <span class="d-none d-sm-inline font-weight-medium">DEBUG</span>
        </v-btn> -->
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
          <Nuxt
            :key="productComponentKey"
            @update-cus-screen="openCustomerScreenEnhanced"
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
        <!-- Enhanced Cart Header -->
        <div class="cart-header pa-4" v-if="1 == 0">
          <v-row align="center" no-gutters>
            <v-col>
              <div class="d-flex align-center">
                <v-icon left size="28">mdi-shopping-cart</v-icon>
                <div>
                  <div class="font-weight-bold mb-0">ກະຕ່າສິນຄ້າ</div>
                  <div class="text-caption white--text" style="opacity: 0.8">
                    ລາຍການສິນຄ້າທີ່ເລືອກ
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="auto">
              <v-chip
                color="white"
                text-color="primary"
                label
                class="font-weight-bold"
              >
                {{ productCart.length }} ລາຍການ
              </v-chip>
            </v-col>
          </v-row>
        </div>

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
          :currency-list="currencyList"
          :payment-list="paymentList"
          :show-check-out="showCheckOut"
          :selected-payment="currentPayment"
          :format-number="formatNumber"
          :svg-icon="svgIcon"
          :enablePredefinedPayments="true"
          :defaultPaymentMethods="[14, 15]"
          @update:discount="discount = $event"
          @update:cash-received="cashReceived = $event"
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
      sharedState: Vue.observable({
        saleHeader: 0,
      }),
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
      paymentList: [],
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
      currencyList: [],
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

      // Try to get enhanced company data from terminal/location
      const terminalCompany = this.currentTerminal?.location?.company

      console.warn(
        `POS Terminal company ${JSON.stringify(this.currentTerminal)}`
      )
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
        return `${this.currenctCustomer.company} ${this.currenctCustomer.grade}`.trim()
      } else {
        return `${this.currenctCustomer.name} ${this.currenctCustomer.grade}`.trim()
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
    ]),
    serachModel: {
      get() {
        return this.stateValue
      },
      set(value) {
        this.stateValue = value
        if (value) {
          const lowerCaseSearchValue = value.toLowerCase()
          this.SetSearchKeyword(lowerCaseSearchValue)
        } else {
          this.SetSearchKeyword('')
        }
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
        console.info(`PORUCDDDD ===> ${JSON.stringify(iterator)}`)
        lines.push({
          quantity: iterator.qty,
          unitRate: 1,
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
      const payment = this.paymentList.find(
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
    window.addEventListener('beforeunload', this.checkAllInitData)
    this.terminalSelected = this.findSelectedTerminal
    this.fetchCategory()
    this.loadPayment()
    this.loadCustomer()
    this.loadCurrency()
    this.checkAllInitData()
    this.initializeMultiPayment()
    this.$root.$on('update-cus-screen', this.openCustomerScreenEnhanced)
    // CUSTOMER SCREEN INTEGRATION
    this.$customerWindow = null
    window.addEventListener('message', this.handleCustomerScreenMessage)

    if (this.$vuetify.breakpoint.lgAndUp) {
      this.drawer_right = true
    }
  },

  beforeDestroy() {
    window.removeEventListener('beforeunload', this.checkAllInitData)

    // CUSTOMER SCREEN CLEANUP
    // this.closeCustomerDisplayWindow()
    window.removeEventListener('message', this.handleCustomerScreenMessage)
  },

  watch: {
    cartOfProduct(newVal, oldVal) {
      console.log('Cart changed:', newVal)
      this.sendWelcomeMessage()
    },
    selectedItem(val) {
      if (val != undefined) {
        this.updateSelectedCategoryId(this.categoryList[val]['categ_id'])
      }
    },
  },

  methods: {
    handleGiftConfirm(giftData) {
      // Emit gift configuration to parent component
      console.info(`GIFT DATA ITEM CART logs ${JSON.stringify(giftData)}`)
      console.info(`GIFT DATA ITEM CART logs @POS.vue ${giftData}`)
      // this.$emit('configure-gift', giftData)
      // TODO:Let continue gift feature from here
      //  please sent this data to cart state to modify cart item split normal and gift amount accordingly
      // this.giftDialogOpen = false
      this.$store.commit('setGiftForCartItem', {
        item: giftData.item,
        giftConfig: giftData.giftConfig,
      })
      this.openCustomerScreenEnhanced()
    },
    testCustomerScreenWithCurrentCart() {
      console.log('=== DEBUGGING CUSTOMER SCREEN DATA ===')
      console.log('Current cart:', this.productCart)
      console.log('Product count:', this.productCart.length)
      console.log('All products available:', this.findAllProduct.length)
      console.log('Current terminal:', this.currentTerminal)
      console.log('Grand total:', this.grandTotal)
      console.log('Discount:', this.discount)

      const formattedItems = this.formatOrderItemsForCustomerScreen()
      const formattedSummary = this.formatOrderSummaryForCustomerScreen()

      console.log('Formatted items for customer screen:', formattedItems)
      console.log('Formatted summary for customer screen:', formattedSummary)

      // Send test data
      this.sendQRToCustomerScreen()
      console.log('=== END DEBUG ===')
    },

    // ================================================
    // CUSTOMER SCREEN INTEGRATION METHODS - NEW
    // ================================================

    /**
     * Enhanced customer screen opening with proper company data
     */
    openCustomerScreenEnhanced() {
      console.info(`customer screen called...`)
      try {
        // Prepare company information exactly like PaymentDialog does
        const companyInfo = {
          name: this.companyData.name,
          address: this.companyData.address,
          tel: this.companyData.tel,
          email: this.companyData.email,
          bank: this.companyData.bank,
          accountName: this.companyData.accountName,
          accounts: this.companyData.accounts,
          remark: this.companyData.remark,
        }

        this.sendQRToCustomerScreen()

        // Encode company data for URL (same as PaymentDialog)
        const companyParam = encodeURIComponent(JSON.stringify(companyInfo))
        const customerScreenPath = `/admin/cafeTable/customer?company=${companyParam}`

        // Get screen dimensions
        const screenWidth = window.screen.width
        const screenHeight = window.screen.height

        // Open customer screen window - FULLSCREEN
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

        // Try to enter fullscreen mode
        setTimeout(() => {
          try {
            if (
              this.$customerWindow.document.documentElement.requestFullscreen
            ) {
              this.$customerWindow.document.documentElement.requestFullscreen()
            }
          } catch (e) {
            console.log('Fullscreen not supported or blocked')
          }
        }, 1000)

        // Set up window handlers
        this.setupCustomerWindowHandlers()
        console.log('Customer screen opened successfully')
      } catch (error) {
        console.error('Error opening customer screen:', error)
        swalError2(this.$swal, 'Error', 'Failed to open customer screen')
      }
    },

    /**
     * Set up customer window event handlers
     */
    setupCustomerWindowHandlers() {
      if (!this.$customerWindow) return

      this.$customerWindow.addEventListener('beforeunload', () => {
        console.log('Customer display window is closing')
        this.$customerWindow = null
      })
    },

    /**
     * Send welcome message to customer screen
     */
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
          orderSummary: formattedOrderSummary,
        },
      }
      this.sendToCustomerScreen(message)
    },

    /**
     * Send message to customer screen
     */
    sendToCustomerScreen(message) {
      try {
        // Store in localStorage for persistence
        localStorage.setItem('customerDisplay', JSON.stringify(message))

        // Also send via postMessage if window is open
        if (this.$customerWindow && !this.$customerWindow.closed) {
          this.$customerWindow.postMessage(message, '*')
        }

        console.log('Message sent to customer screen:', message)
      } catch (error) {
        console.error('Failed to send message to customer screen:', error)
      }
    },

    /**
     * Send QR data to customer screen during payment
     */
    sendQRToCustomerScreen() {
      if (!this.productCart.length) {
        console.log('No items in cart for customer screen QR')
        return
      }

      // Format order items BEFORE sending to customer screen
      const formattedOrderItems = this.formatOrderItemsForCustomerScreen()
      const formattedOrderSummary = this.formatOrderSummaryForCustomerScreen()

      console.log(
        'Sending order items to customer screen:',
        formattedOrderItems
      )
      console.log(
        'Sending order summary to customer screen:',
        formattedOrderSummary
      )

      const qrData = {
        amount: this.grandTotal - this.discount,
        tableNumber: this.currentTerminal?.name || 'POS-TERMINAL',
        ticketId: this.lastTransactionSaleHeaderId || null,
        qrString: this.generateQRForCustomerScreen(),
        timestamp: Date.now(),
        // DIRECTLY PASS THE FORMATTED ORDER DATA
        orderItems: formattedOrderItems,
        orderSummary: formattedOrderSummary,
      }

      const message = {
        type: 'SHOW_QR_PAYMENT',
        data: qrData,
      }

      this.sendToCustomerScreen(message)
      console.info(
        `Complete QR data sent to customer screen: ${JSON.stringify(qrData)}`
      )
    },

    /**
     * Generate QR string for customer screen
     */
    generateQRForCustomerScreen() {
      const amount = Math.round(this.grandTotal - this.discount)
      const terminal = this.currentTerminal?.name || 'MART'

      const amountStr = amount.toString().padStart(6, '0')
      const tableStr = terminal.toString().padStart(6, '0')

      // Generate QR string similar to PaymentDialog
      return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812${terminal} payment63041c9f`
    },

    /**
     * Format order items for customer screen display
     */
    formatOrderItemsForCustomerScreen() {
      console.log('Formatting cart items:', this.productCart)
      console.log('Available products for mapping:', this.findAllProduct.length)

      return this.productCart.map((cartItem) => {
        // Find the full product details
        const product = this.findAllProduct.find((p) => p.id === cartItem.id)

        const formattedItem = {
          id: cartItem.id,
          name: product?.pro_name || cartItem.name || `Product ${cartItem.id}`,
          description: product?.pro_desc || cartItem.description || '',
          category: product?.categ_name || 'General',
          quantity: cartItem.qty,
          unitPrice: cartItem.localPrice,
          totalPrice: cartItem.qty * cartItem.localPrice,
          status: 'pending',
        }

        console.log(`Formatted item ${cartItem.id}:`, formattedItem)
        return formattedItem
      })
    },

    /**
     * Format order summary for customer screen
     */
    formatOrderSummaryForCustomerScreen() {
      const subtotal = this.grandTotal
      const discount = this.discount
      const total = subtotal - discount

      const summary = {
        subtotal: subtotal,
        tax: 0, // Add tax calculation if you have it
        taxRate: 0,
        discount: discount,
        total: total,
      }

      console.log('Formatted order summary:', summary)
      return summary
    },

    /**
     * Show payment success on customer screen
     */
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

    /**
     * Hide QR from customer screen
     */
    hideQRPaymentFromCustomerScreen() {
      const message = {
        type: 'HIDE_QR_PAYMENT',
        timestamp: Date.now(),
      }

      this.sendToCustomerScreen(message)
      localStorage.removeItem('customerDisplay')
    },

    /**
     * Check if customer display window is open
     */
    isCustomerDisplayOpen() {
      return this.$customerWindow && !this.$customerWindow.closed
    },

    /**
     * Close customer display window
     */
    closeCustomerDisplayWindow() {
      if (this.$customerWindow && !this.$customerWindow.closed) {
        this.$customerWindow.close()
      }
      this.$customerWindow = null
      localStorage.removeItem('customerDisplay')
    },

    /**
     * Handle messages from customer screen
     */
    handleCustomerScreenMessage(event) {
      try {
        if (event.data && typeof event.data === 'object') {
          console.log('Received message from customer screen:', event.data)
          // Handle any responses from customer screen if needed
        }
      } catch (error) {
        console.error('Error handling customer screen message:', error)
      }
    },

    /**
     * Format company address
     */
    formatCompanyAddress(company) {
      if (!company) return ''

      let formattedAddress = ''
      if (company.address) formattedAddress += company.address
      if (company.village) formattedAddress += `<br>${company.village}`
      if (company.district) formattedAddress += `, ${company.district}`
      if (company.province) formattedAddress += `, ${company.province}`

      return formattedAddress || company.address || ''
    },

    // ================================================
    // EXISTING METHODS WITH CUSTOMER SCREEN INTEGRATION
    // ================================================

    // Keep your existing openCustomerScreen method as backup
    openCustomerScreen() {
      // Redirect to enhanced version
      this.openCustomerScreenEnhanced()
    },

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

        // SHOW QR ON CUSTOMER SCREEN WHEN DIALOG OPENS
        // this.sendQRToCustomerScreen()

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

        console.log(
          'Processing single payment - Cart items:',
          this.productCart.length
        )

        // SHOW QR ON CUSTOMER SCREEN WITH CURRENT CART DATA
        // this.sendQRToCustomerScreen()

        // if (this.currentPaymentCode === 'CASH') {
        //   const totalDue = this.grandTotal - this.discount
        //   if (this.cashReceived < totalDue) {
        //     swalError2(
        //       this.$swal,
        //       'Error',
        //       `ຈຳນວນເງິນບໍ່ພຽງພໍ ຕ້ອງການ ${this.formatNumber(totalDue)}`
        //     )
        //     return
        //   }
        // }

        await this.postTransactionOriginal(false)
      } catch (error) {
        console.error('Single payment error:', error)
        this.hideQRPaymentFromCustomerScreen() // Hide QR on error
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
          currencyId: 1,
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
        console.info(`PENDING SALE HEADER ${this.pendingSaleHeaderId}`)
      } catch (error) {
        console.log('Full error object:', error)
        console.log('Error response:', error.response)
        console.log('Error response data:', error.response?.data)

        // Get the actual error data
        let errorData = null
        let errorMessage = 'ບໍ່ສາມາດສ້າງລາຍການຂາຍໄດ້' // Default Lao message

        if (error.response && error.response.data) {
          errorData = error.response.data
        } else if (error.message) {
          errorMessage = error.message
        }

        console.log('Processed errorData:', errorData)
        console.log('Type of errorData:', typeof errorData)

        // Handle different error response formats
        if (errorData && typeof errorData === 'object') {
          // New JSON format with stockErrors
          if (
            errorData.stockErrors &&
            Array.isArray(errorData.stockErrors) &&
            errorData.stockErrors.length > 0
          ) {
            const stockError = errorData.stockErrors[0] // Get first stock error
            const product = this.findAllProduct.find(
              (el) => el.id == stockError.productId
            )

            errorMessage = `ຈຳນວນສິນຄ້າ: ${
              product?.pro_name || 'Unknown Product'
            } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${
              stockError.available
            }, ຂາດ: ${stockError.shortage})`
          }
          // JSON object with message
          else if (errorData.message) {
            errorMessage = errorData.message
          }
          // JSON object converted to string
          else {
            errorMessage = JSON.stringify(errorData)
          }
        }
        // Handle string responses (old format)
        else if (typeof errorData === 'string') {
          if (errorData.includes && errorData.includes('#')) {
            const id = errorData.split('#')[1]
            const product = this.findAllProduct.find((el) => el.id == id)
            errorMessage = `ຈຳນວນສິນຄ້າ: ${
              product?.pro_name || ''
            } ມີບໍ່ພຽງພໍໃນສາງ`
          } else {
            errorMessage = errorData
          }
        }

        console.log('Final error message:', errorMessage)
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

        console.log(
          'Processing multi-payment - Cart items:',
          this.productCart.length
        )

        // SHOW QR ON CUSTOMER SCREEN BEFORE PROCESSING WITH CURRENT CART DATA
        this.sendQRToCustomerScreen()

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
        // SHOW SUCCESS ON CUSTOMER SCREEN
        this.showPaymentSuccessOnCustomerScreen()
        // set value to trigger load product again to refresh stock count
        this.sharedState.saleHeader = this.lastTransactionSaleHeaderId || now
        swalSuccess(this.$swal, 'ສຳເລັດ', 'ການຈ່າຍເງິນສຳເລັດແລ້ວ')
        this.printDefaultTicket()
        this.completeTransaction()
      } catch (error) {
        console.error('Multi-payment error:', error)
        this.hideQRPaymentFromCustomerScreen() // Hide QR on error

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

      if (this.multiPayment) {
        this.multiPayment.clearPayments()
      }

      // HIDE QR AFTER SUCCESSFUL TRANSACTION
      setTimeout(() => {
        this.hideQRPaymentFromCustomerScreen()
      }, 2000)
    },

    async handleMultiPaymentCancel() {
      this.multiPaymentDialog = false
      // TODO: SHOULD SET saleHeader reverse here
      await this.reversalSale()
    },
    async reversalSale() {
      if (!this.pendingSaleHeaderId) {
        console.info(`Cannot reverse, sale header not fount`)
        return
      }
      this.isLoading = true
      const form = {
        isActive: false,
        remark: 'UNDO MULTI PAYMENT TXN',
        cancel_fee: 0,
      }
      try {
        form.customerId = null
        console.log(`${JSON.stringify(form)}`)
        const response = await this.$axios.put(
          `api/sale/reverse/${this.pendingSaleHeaderId}`,
          form
        )
        if ((response.status = 200)) {
          // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
        }
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
      this.productComponentKey += 1
      this.terminalDialog = false
    },

    openQtyDialog(item) {
      console.info(`selected product ${JSON.stringify(item)}`)
      this.selectedProductId = item.id
      this.newQty = item.qty
      this.qtyDialog = true
    },

    updateQty() {
      console.info(`update qty ... ${this.newQty} ${this.selectedProductId}`)
      if (this.selectedProductId !== null) {
        this.$store.commit('UPDATE_QTY', {
          productId: this.selectedProductId,
          qty: this.newQty,
        })
        // TODO:
        this.openCustomerScreenEnhanced()
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

    deteletProductLocal(product) {
      this.deleteProductFromCart(product)
      this.openCustomerScreenEnhanced()
    },
    decreaseProductAmount(product) {
      this.deleteProduct(product)
      this.openCustomerScreenEnhanced()
    },
    // ADD THESE METHODS TO YOUR minimartPos.vue COMPONENT

    // 1. Replace your existing addProduct method with this enhanced version:
    addProductValidation(product, isGift = false) {
      //TODO: CUSTOMER SCREEN IS NOT UPDATED FROM THIS FUNCTION
      try {
        // Validate product is active
        if (!product.isActive) {
          this.showError('Product is inactive')
          return false
        }

        // Check stock if validation is enabled
        if (product.validateStockOnSale === 1) {
          const productStock = this.findAllProduct.find(
            (p) => p.id === product.id
          )
          if (productStock && productStock.stock <= 0) {
            this.showError('Stock not enough')
            return false
          }
        }

        // NEW: Check card_count limit before adding to cart
        if (!this.validateCardCountForIncrease(product)) {
          return false
        }
        const cartItem = {
          ...product, // copy all product fields
          isGift: isGift,
          lineUUIDCheck: true,
          lineUUID: product.lineUUID || Date.now() + Math.random().toString(16),
        }
        console.info(`DATA MOD: ${JSON.stringify(cartItem)}`)
        // If all validations pass, add to store using Vuex action
        this.$store.dispatch('addProduct', cartItem)
        this.openCustomerScreenEnhanced()

        // Show success feedback with quantity info
        this.showAddSuccessMessage(product)

        return true
      } catch (error) {
        console.error('Error adding product:', error)
        this.showError('Failed to add product to cart')
        return false
      }
    },

    // 2. Add this new validation method:
    // SIMPLE VERSION WITHOUT WARNING MESSAGE

    validateCardCountForIncrease(product) {
      const cardCountLimit = product.card_count

      // If card_count is not defined, null, or 0, don't allow any additions
      if (!cardCountLimit || cardCountLimit <= 0) {
        if (this.$toast) {
          this.$toast.error(
            `Product ${product.pro_name} is not available for purchase`,
            { position: 'bottom-center' }
          )
        }
        return false
      }

      // Find if this product is already in the cart
      const existingCartItem = this.cartOfProduct.find((item) => {
        return item.pro_id === product.pro_id || item.id === product.id
      })

      if (existingCartItem) {
        const currentQty = existingCartItem.qty

        // Check if adding one more would exceed card_count
        if (currentQty >= cardCountLimit) {
          if (this.$toast) {
            this.$toast.error(
              `Cannot add more. You have ${currentQty}/${cardCountLimit} items for ${product.pro_name}`,
              { position: 'bottom-center' }
            )
          }
          return false
        }
        // Removed the warning section that was causing the error
      }

      return true
    },

    // 3. Add this helper method for success messages:
    showAddSuccessMessage(product) {
      if (!this.$toast) return

      const existingItem = this.cartOfProduct.find(
        (item) => item.pro_id === product.pro_id || item.id === product.id
      )

      const newQty = existingItem ? existingItem.qty : 1
      const limit = product.card_count

      if (limit && limit > 0) {
        const remaining = limit - newQty

        if (remaining > 0) {
          this.$toast.success(
            `${product.pro_name} added. ${remaining} more allowed`,
            { position: 'bottom-center' }
          )
        } else {
          this.$toast.success(`${product.pro_name} added. Limit reached!`, {
            position: 'bottom-center',
          })
        }
      } else {
        this.$toast.success(`${product.pro_name} added to cart`)
      }
    },

    // 4. Add this helper method for errors (if you don't have it):
    showError(message) {
      if (this.$toast) {
        this.$toast.error(message)
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

    // 5. OPTIONAL: Add these computed properties for enhanced UI:
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
      this.initiateData(this.$axios)
    },

    printDefaultTicket() {
      const theChanges = this.changes
      defaultTicket({
        productCart: this.productCart,
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: this.discount,
        currencyList: this.currencyList,
        grandTotal: this.grandTotal,
        // companyLogo: this.companyLogo,
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
      // this.saleHeader.discount = this.discount
      // this.saleHeader.remark = remark
      // this.saleHeader.total = this.grandTotal - this.discount
      // this.saleHeader.clientId = this.currenctCustomer.id
      // this.saleHeader.paymentId = this.currentPayment
      // this.saleHeader.currencyId = 1
      // this.saleHeader.lines = this.generateSaleLine
      // this.saleHeader.userId = this.user.id
      // this.saleHeader.bookingDate = jsDateToMysqlDate(today)
      // this.saleHeader.isActive = true
      const today = new Date()
      this.saleHeader.isActive = true
      this.saleHeader.discount = this.discount
      this.saleHeader.total = this.grandTotal - this.discount
      this.saleHeader.clientId = this.currenctCustomer.id
      this.saleHeader.paymentId = this.currentPayment
      this.saleHeader.currencyId = 1
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
          // Update existing sale header
          response = await this.$axios.put(
            `/api/sale/update-v2/${this.saleHeader.id}`,
            this.saleHeader
          )
        } else {
          // Create new sale header
          console.info(`sale created`)
          response = await this.$axios.post('/api/sale/create', this.saleHeader)
        }

        // Handle successful response - both create and update now return similar format
        let successMessage = ''
        let saleHeaderId = ''
        console.info(`TICKET CEATE FUNCTION`)
        if (typeof response.data === 'string' && response.data.includes('-')) {
          // Handle string format: "message - id"
          const parts = response.data.split('-')
          successMessage = parts[0].trim()
          saleHeaderId = parts[1].trim()
        } else if (typeof response.data === 'object') {
          // Handle object format (if your backend returns object)
          successMessage = isUpdate
            ? 'Successfully updated'
            : 'Successfully created'
          saleHeaderId = response.data.id || this.saleHeader.id
        } else {
          // Fallback
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
        console.info(
          `SALE HEADER ${isUpdate ? 'UPDATED' : 'CREATED'} ${
            this.lastTransactionSaleHeaderId || now
          }`
        )

        this.newOrder()
        // set value to trigger load product again to refresh stock count
        this.sharedState.saleHeader = this.lastTransactionSaleHeaderId || now
        localStorage.setItem(
          'saleHeader',
          this.lastTransactionSaleHeaderId || now
        )
        this.discount = 0
        this.cashReceived = 0

        // SHOW SUCCESS ON CUSTOMER SCREEN
        // this.showPaymentSuccessOnCustomerScreen()

        // Hide QR after delay
        // setTimeout(() => {
        //   this.hideQRPaymentFromCustomerScreen()
        // }, 3000)
      } catch (error) {
        console.log('Full error object:', error)
        console.log('Error response:', error.response)
        console.log('Error response data:', error.response?.data)

        // Get the actual error data
        let errorData = null
        let errorMessage = 'Unknown error occurred'

        if (error.response && error.response.data) {
          errorData = error.response.data
        } else if (error.message) {
          errorMessage = error.message
        }

        console.log('Processed errorData:', errorData)
        console.log('Type of errorData:', typeof errorData)

        // Handle different error response formats (works for both create and update)
        if (errorData && typeof errorData === 'object') {
          // New JSON format with stockErrors
          if (
            errorData.stockErrors &&
            Array.isArray(errorData.stockErrors) &&
            errorData.stockErrors.length > 0
          ) {
            const stockError = errorData.stockErrors[0] // Get first stock error
            const product = this.findAllProduct.find(
              (el) => el.id == stockError.productId
            )

            errorMessage = `ຈຳນວນສິນຄ້າ: ${
              product?.pro_name || 'Unknown Product'
            } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${
              stockError.available
            }, ຂາດ: ${stockError.shortage})`
          }
          // JSON object with message
          else if (errorData.message) {
            errorMessage = errorData.message
          }
          // JSON object with error property
          else if (errorData.error) {
            errorMessage = errorData.error
          }
          // JSON object converted to string
          else {
            errorMessage = JSON.stringify(errorData)
          }
        }
        // Handle string responses (old format)
        else if (typeof errorData === 'string') {
          if (errorData.includes('#')) {
            const id = errorData.split('#')[1]
            const product = this.findAllProduct.find((el) => el.id == id)
            errorMessage = `ຈຳນວນສິນຄ້າ: ${
              product?.pro_name || ''
            } ມີບໍ່ພຽງພໍໃນສາງ`
          } else {
            errorMessage = errorData
          }
        }

        console.log('Final error message:', errorMessage)
        swalError2(this.$swal, 'Error', errorMessage)
      }

      this.isloading = false
    },
    generatePrintViewDeliveryCustomer() {
      let txnListHtml = ``
      for (const iterator of this.productCart) {
        const product = this.findAllProduct.find((el) => el.id == iterator.id)
        console.log(`=======${product}======`)
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
      const bookingDateWithTime = today.toISOString
      // let totalHtml = ``
      //*********Payment info tag********/
      let totalHtml = ``
      // let totalHtml = `<div class="ticket">
      //         <div class="product-name"> ${this.onlineCustomerInfo.payment}</div>
      //     <div class="price"></div>
      // </div>`
      for (const iterator of this.currencyList) {
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
    // *********** THE STABLE CODE ONE **********
    // async postTransactionOriginal(isDeliveryCustomer) {
    //   if (this.isloading || this.generateSaleLine == 0) {
    //     if (this.generateSaleLine == 0) {
    //       swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
    //     }
    //     return
    //   }

    //   const today = new Date()
    //   this.isloading = true
    //   this.saleHeader.isActive = true
    //   this.saleHeader.discount = this.discount
    //   this.saleHeader.total = this.grandTotal - this.discount
    //   this.saleHeader.clientId = this.currenctCustomer.id
    //   this.saleHeader.paymentId = this.currentPayment
    //   this.saleHeader.currencyId = 1
    //   this.saleHeader.lines = this.generateSaleLine
    //   this.saleHeader.userId = this.user.id
    //   this.saleHeader.bookingDate = jsDateToMysqlDate(today)
    //   this.saleHeader.locationId = this.currentTerminal['locationId']
    //   this.saleHeader.id = this.pendingSaleHeaderId

    //   try {
    //     const response = await this.$axios.post(
    //       '/api/sale/create',
    //       this.saleHeader
    //     )

    //     // Handle successful response
    //     this.lastTransactionSaleHeaderId = response.data.split('-')[1].trim()
    //     swalSuccess(this.$swal, 'Succeed', response.data.split('-')[0])

    //     if (isDeliveryCustomer) {
    //       this.clearCustomerFormAction()
    //     } else {
    //       try {
    //         this.printDefaultTicket()
    //       } catch (error) {
    //         console.error(`PRINT TICKET FAIL ${error}`)
    //       }
    //     }
    //     const now = new Date()
    //     console.info(
    //       `SALE HEADER CREATED ${this.lastTransactionSaleHeaderId || now}`
    //     )
    //     this.newOrder()
    //     // set value to trigger load product again to refresh stock count
    //     this.sharedState.saleHeader = this.lastTransactionSaleHeaderId || now
    //     localStorage.setItem(
    //       'saleHeader',
    //       this.lastTransactionSaleHeaderId || now
    //     )
    //     this.discount = 0
    //     this.cashReceived = 0

    //     // SHOW SUCCESS ON CUSTOMER SCREEN
    //     this.showPaymentSuccessOnCustomerScreen()

    //     // Hide QR after delay
    //     setTimeout(() => {
    //       this.hideQRPaymentFromCustomerScreen()
    //     }, 3000)
    //   } catch (error) {
    //     console.log('Full error object:', error)
    //     console.log('Error response:', error.response)
    //     console.log('Error response data:', error.response?.data)

    //     // Get the actual error data
    //     let errorData = null
    //     let errorMessage = 'Unknown error occurred'

    //     if (error.response && error.response.data) {
    //       errorData = error.response.data
    //     } else if (error.message) {
    //       errorMessage = error.message
    //     }

    //     console.log('Processed errorData:', errorData)
    //     console.log('Type of errorData:', typeof errorData)

    //     // Handle different error response formats
    //     if (errorData && typeof errorData === 'object') {
    //       // New JSON format with stockErrors
    //       if (
    //         errorData.stockErrors &&
    //         Array.isArray(errorData.stockErrors) &&
    //         errorData.stockErrors.length > 0
    //       ) {
    //         const stockError = errorData.stockErrors[0] // Get first stock error
    //         const product = this.findAllProduct.find(
    //           (el) => el.id == stockError.productId
    //         )

    //         errorMessage = `ຈຳນວນສິນຄ້າ: ${
    //           product?.pro_name || 'Unknown Product'
    //         } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${
    //           stockError.available
    //         }, ຂາດ: ${stockError.shortage})`
    //       }
    //       // JSON object with message
    //       else if (errorData.message) {
    //         errorMessage = errorData.message
    //       }
    //       // JSON object converted to string
    //       else {
    //         errorMessage = JSON.stringify(errorData)
    //       }
    //     }
    //     // Handle string responses (old format)
    //     else if (typeof errorData === 'string') {
    //       if (errorData.includes('#')) {
    //         const id = errorData.split('#')[1]
    //         const product = this.findAllProduct.find((el) => el.id == id)
    //         errorMessage = `ຈຳນວນສິນຄ້າ: ${
    //           product?.pro_name || ''
    //         } ມີບໍ່ພຽງພໍໃນສາງ`
    //       } else {
    //         errorMessage = errorData
    //       }
    //     }

    //     console.log('Final error message:', errorMessage)
    //     swalError2(this.$swal, 'Error', errorMessage)
    //   }

    //   this.isloading = false
    // },

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
            categ_id: '9999',
            categ_name: 'ທັງໝົດ',
            categ_desc: 'ລາຍການສິນຄ້າ ທັງໝົດ',
          })
          this.selectedItem = this.categoryList.length - 1
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isLoading = false
    },

    async loadPayment() {
      this.isloading = true
      this.paymentList = []
      await this.$axios
        .get('/api/paymentMethod/find')
        .then((res) => {
          for (const iterator of res.data) {
            this.paymentList.push(iterator)
          }
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er)
        })
      this.selectePaymentMethod(this.paymentList[0]['id'])
      this.isloading = false
    },

    async loadCurrency() {
      this.isloading = true
      this.currencyList = []
      await this.$axios
        .get('/api/currency/find')
        .then((res) => {
          for (const iterator of res.data) {
            this.currencyList.push(iterator)
          }
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er)
        })
      this.isloading = false
    },

    async loadCustomer() {
      this.isloading = true
      await this.$axios
        .get('api/client/find')
        .then((res) => {
          this.addCustomer(res.data[0])
        })
        .catch((er) => {
          swalError2(this.$swal, 'ເກີດຂໍ້ຜິດພາດ', er.response.data)
        })
      this.isloading = false
    },

    newOrder() {
      this.pendingSaleHeaderId = null
      this.clearCart()
      this.discount = 0
      this.cashReceived = 0
      // this.openCustomerScreenEnhanced()
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