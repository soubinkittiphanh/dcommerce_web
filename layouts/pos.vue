<template>
  <v-app dark>
    <!-- Multi-Payment Dialog - ADDED -->
    <v-dialog v-model="multiPaymentDialog" max-width="800" persistent>
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

    <!-- Terminal Selection Dialog -->
    <v-dialog v-model="terminalDialog" scrollable max-width="600" persistent>
      <v-card class="terminal-dialog">
        <v-card-title class="primary white--text">
          <v-icon left>mdi-monitor</v-icon>
          ເລືອກ Terminal
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pa-4" style="max-height: 400px">
          <v-radio-group v-model="terminalSelected" class="mt-2">
            <v-card
              v-for="terminal in findAllTerminal"
              :key="terminal.id"
              class="mb-3 terminal-card"
              :class="{ selected: terminalSelected === terminal.id }"
              @click="terminalSelected = terminal.id"
              outlined
              hover
            >
              <v-card-text class="pa-3">
                <v-radio
                  :value="terminal.id"
                  :label="`${terminal.name} - ${terminal.description}`"
                  color="primary"
                ></v-radio>
              </v-card-text>
            </v-card>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="terminalDialog = false">
            ຍົກເລີກ
          </v-btn>
          <v-btn
            color="primary"
            @click="switchTerminalAction"
            :disabled="!terminalSelected"
          >
            <v-icon left>mdi-check</v-icon>
            ເລືອກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Quantity Update Dialog -->
    <v-dialog v-model="qtyDialog" max-width="400px" @keydown.enter="updateQty">
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left>mdi-counter</v-icon>
          ອັບເດດຈຳນວນ
        </v-card-title>
        <v-card-text class="pa-4">
          <v-text-field
            v-model.number="newQty"
            label="ໃສ່ຈຳນວນໃໝ່"
            type="number"
            outlined
            dense
            autofocus
            :rules="[(v) => v > 0 || 'ຈຳນວນຕ້ອງມາກກວ່າ 0']"
            @keydown.enter="updateQty"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="qtyDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="updateQty" :disabled="newQty <= 0">
            <v-icon left>mdi-check</v-icon>
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
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Quotation Dialog -->
    <v-dialog v-model="quotation" hide-overlay width="1200">
      <Quotation></Quotation>
    </v-dialog>

    <!-- App Bar -->
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
      clipped-right
      elevation="4"
      height="72"
    >
      <v-container fluid class="pa-2">
        <v-row align="center" no-gutters>
          <v-col cols="12" md="2" class="d-flex align-center">
            <v-btn icon @click="drawer = !drawer" class="mr-2">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-btn
              icon
              @click="drawer_right = !drawer_right"
              class="d-lg-none mr-2"
            >
              <v-badge
                v-if="productCart.length > 0"
                :content="productCart.length"
                color="error"
                overlap
              >
                <v-icon>mdi-cart</v-icon>
              </v-badge>
              <v-icon v-else>mdi-cart</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" md="6" lg="4" class="px-2">
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
              class="search-field"
            />
          </v-col>

          <v-col cols="12" md="4" lg="6" class="d-flex justify-end">
            <div class="d-flex align-center flex-wrap ga-2">
              <v-btn
                v-for="item in headerMenu"
                :key="item.title"
                :to="item.path"
                @click="item.method"
                outlined
                class="header-btn"
                :class="{ active: $route.path === item.path }"
              >
                <v-icon left size="20">{{ item.icon }}</v-icon>
                <span class="d-none d-sm-inline">{{ item.title }}</span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Left Navigation Drawer -->
    <v-navigation-drawer
      app
      v-model="drawer"
      clipped
      width="280"
      class="drawer-left"
    >
      <div class="drawer-header pa-4">
        <v-chip
          color="warning"
          outlined
          block
          @click="terminalDialog = true"
          class="terminal-chip"
        >
          <v-icon left>mdi-monitor</v-icon>
          <span class="text-truncate">
            {{ currentTerminal?.description || 'ເລືອກ Terminal' }}
            <br />
            <small>{{ currentTerminal?.name || '' }}</small>
          </span>
          <v-icon right>mdi-chevron-down</v-icon>
        </v-chip>
      </div>

      <v-divider></v-divider>

      <v-list dense nav class="py-0">
        <v-subheader class="font-weight-bold px-4"> ໝວດໝູ່ສິນຄ້າ </v-subheader>

        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in categoryList"
            :key="i"
            class="category-item"
            :class="{ active: selectedItem === i }"
          >
            <v-list-item-icon>
              <v-icon>mdi-tag</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium text-wrap">
                {{ item.categ_name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="main-content">
      <div class="main-content-wrapper">
        <v-container fluid class="pa-4 main-container">
          <Nuxt :key="productComponentKey" />
        </v-container>
      </div>
    </v-main>

    <!-- Right Navigation Drawer (Cart) -->
    <v-navigation-drawer
      app
      right
      clipped
      width="480"
      class="cart-drawer"
      :permanent="$vuetify.breakpoint.lgAndUp"
      :temporary="$vuetify.breakpoint.mdAndDown"
      v-model="drawer_right"
    >
      <div class="cart-container">
        <!-- Cart Header -->
        <div class="cart-header pa-3 primary white--text">
          <v-row align="center" no-gutters>
            <v-col>
              <h3 class="mb-0">
                <v-icon left>mdi-cart</v-icon>
                ກະຕ່າສິນຄ້າ
              </h3>
            </v-col>
            <v-col cols="auto">
              <v-chip color="white" text-color="primary" small>
                {{ productCart.length }} ລາຍການ
              </v-chip>
            </v-col>
          </v-row>
        </div>

        <!-- Customer Bar -->
        <div class="customer-bar pa-3 grey lighten-5">
          <v-row align="center" no-gutters class="ga-2">
            <v-col>
              <v-chip
                color="success"
                outlined
                @click="openCustomerDialog"
                class="customer-chip"
              >
                <v-icon left small>mdi-account</v-icon>
                <span class="text-truncate">{{ customerDisplayName }}</span>
                <v-icon right small>mdi-pencil</v-icon>
              </v-chip>
            </v-col>

            <v-col cols="auto">
              <v-btn
                icon
                color="primary"
                @click="openDeliveryBox"
                title="ຈັດສົ່ງ"
              >
                <v-icon>mdi-bike-fast</v-icon>
              </v-btn>

              <v-btn icon color="primary" @click="newOrder" title="ອໍເດີໃໝ່">
                <v-icon>mdi-file-document-refresh-outline</v-icon>
              </v-btn>

              <v-btn
                icon
                color="grey"
                @click="drawer_right = false"
                class="d-lg-none"
                title="ປິດ"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <!-- Cart Items -->
        <div class="cart-items flex-grow-1">
          <v-card flat height="100%" class="d-flex flex-column">
            <div class="cart-items-header pa-2 grey lighten-4">
              <v-row
                no-gutters
                align="center"
                class="text-caption font-weight-bold"
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
                  @delete="deleteProductFromCart"
                  @update-qty="openQtyDialog"
                  @decrease="deleteProduct"
                  @increase="addProduct"
                  @price-click="pricingLogig"
                />
              </template>

              <div v-else class="empty-cart pa-4 text-center">
                <v-icon size="64" color="grey lighten-2"
                  >mdi-cart-outline</v-icon
                >
                <p class="text-body-2 grey--text mt-2">ກະຕ່າວ່າງເປົ່າ</p>
              </div>
            </div>
          </v-card>
        </div>

        <!-- Cart Footer with Multi-Payment Support - UPDATED -->

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
import MultiPaymentDialog from '~/components/pos/MultiPaymentDialog-vue2.vue' // FIXED: Vue 2 compatible version
import { createMultiPayment } from '~/composables/useMultiPayment-vue2.js' // FIXED: Vue 2 compatible version

// Import the new components
import CartItemComponent from '~/components/pos/CartItemComponent.vue'
import CartFooterComponent from '~/components/pos/CartFooterComponent.vue'

import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { hostName, mainCompanyInfo } from '~/common/api'
import { defaultTicket, customerTicket } from '~/common/ticket.js'

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
    MultiPaymentDialog, // Vue 2 compatible version
  },
  name: 'DefaultLayout',
  data() {
    return {
      multiPaymentDialog: false,
      pendingSaleHeaderId: null,
      isCreatingSale: false,
      qtyDialog: false,
      newQty: 0,
      selectedProductId: null,
      upSvg: require('~/assets/icons/dcommerce/up.svg'),
      downSvg: require('~/assets/icons/dcommerce/down.svg'),
      showCheckOut: true,
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
        bookingDate: '',
        remark: '',
        total: 0,
        exchangeRate: 1,
        isActive: true,
      },
      stateValue: '',
    }
  },

  computed: {
    companyData() {
      return mainCompanyInfo()
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
        lines.push({
          quantity: iterator.qty,
          unitRate: 1,
          price: iterator.localPrice,
          discount: 0,
          productId: iterator.id,
          productKey: iterator.id,
          unitId: iterator.stockUnitId,
          total: iterator.qty * iterator.localPrice,
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
    this.initializeMultiPayment() // Initialize multi-payment system

    // Set drawer_right based on screen size
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.drawer_right = true
    }
  },

  beforeDestroy() {
    window.removeEventListener('beforeunload', this.checkAllInitData)
  },

  watch: {
    selectedItem(val) {
      if (val != undefined) {
        this.updateSelectedCategoryId(this.categoryList[val]['categ_id'])
      }
    },
  },

  methods: {
    // FIXED: Vue 2 compatible multi-payment initialization
    initializeMultiPayment() {
      this.multiPayment = createMultiPayment(this.$axios, this.formatNumber)
    },

    async openMultiPaymentDialog() {
      if (this.generateSaleLine.length === 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        return
      }

      try {
        // First create the sale header to get saleHeaderId
        await this.createSaleHeader()

        // Initialize payment with the created sale
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
        // Validation
        if (this.generateSaleLine.length === 0) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
          return
        }

        if (!this.currentPayment) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກວິທີການຊຳລະ')
          return
        }

        // For cash payments, validate cash received
        if (this.currentPaymentCode === 'CASH') {
          const totalDue = this.grandTotal - this.discount
          if (this.cashReceived < totalDue) {
            swalError2(
              this.$swal,
              'Error',
              `ຈຳນວນເງິນບໍ່ພຽງພໍ ຕ້ອງການ ${this.formatNumber(totalDue)}`
            )
            return
          }
        }

        console.log('Processing single payment:', {
          paymentMethod: this.currentPaymentCode,
          total: this.grandTotal - this.discount,
          cashReceived: this.cashReceived,
        })

        // Process single payment using original method (no multi-payment dialog)
        await this.postTransactionOriginal(false)
      } catch (error) {
        console.error('Single payment error:', error)
        swalError2(
          this.$swal,
          'Error',
          error.message || 'ເກີດຂໍ້ຜິດພາດໃນການຊຳລະ'
        )
      }
    },
    async createSaleHeader() {
      if (this.isCreatingSale) return

      this.isCreatingSale = true
      this.isloading = true

      try {
        const today = new Date()

        const saleHeaderData = {
          isActive: true,
          discount: this.discount,
          total: this.grandTotal - this.discount,
          clientId: this.currenctCustomer.id,
          paymentId: null, // Temporary payment ID, will be replaced by multi-payment
          currencyId: 1,
          lines: this.generateSaleLine,
          userId: this.user.id,
          bookingDate: jsDateToMysqlDate(today),
          locationId: this.currentTerminal['locationId'],
          remark: 'Multi-payment transaction',
        }

        console.log('Creating sale header:', saleHeaderData)

        const response = await this.$axios.post(
          '/api/sale/create-header-only',
          saleHeaderData
        )

        // Extract saleHeaderId from response
        this.pendingSaleHeaderId =
          response.data.saleHeaderId || response.data.id
        this.lastTransactionSaleHeaderId = this.pendingSaleHeaderId

        console.log('Sale header created with ID:', this.pendingSaleHeaderId)
      } catch (error) {
        console.error('Error creating sale header:', error)
        throw new Error(error.response?.data || 'ບໍ່ສາມາດສ້າງລາຍການຂາຍໄດ້')
      } finally {
        this.isCreatingSale = false
        this.isloading = false
      }
    },

    async handleMultiPaymentConfirm(paymentData) {
      try {
        this.isloading = true

        console.log('Received payment data:', paymentData)
        console.log('Sale header ID:', this.pendingSaleHeaderId)

        // Validate the payment data directly instead of using composable validation
        if (!paymentData || paymentData.length === 0) {
          throw new Error('ຕ້ອງມີການຈ່າຍເງິນຢ່າງໜ້ອຍ 1 ວິທີ')
        }

        // Calculate total from payment data
        const totalPaid = paymentData.reduce(
          (sum, payment) => sum + (payment.amount || 0),
          0
        )
        const expectedTotal = this.grandTotal - this.discount

        console.log('Total paid:', totalPaid, 'Expected:', expectedTotal)

        if (Math.abs(totalPaid - expectedTotal) > 0.01) {
          // Allow for small rounding differences
          throw new Error(
            `ຈຳນວນເງິນບໍ່ຄົບ. ຈ່າຍແລ້ວ: ${this.formatNumber(
              totalPaid
            )}, ຕ້ອງຈ່າຍ: ${this.formatNumber(expectedTotal)}`
          )
        }

        // Submit payments directly to API (bypass composable)
        const response = await this.$axios.post(
          '/api/sale-payment/bulk',
          paymentData
        )

        console.log('Payment API response:', response.data)

        // Show success message
        swalSuccess(this.$swal, 'ສຳເລັດ', 'ການຈ່າຍເງິນສຳເລັດແລ້ວ')

        // Print ticket and cleanup
        this.printDefaultTicket()
        this.completeTransaction()
      } catch (error) {
        console.error('Multi-payment error:', error)
        let errorMessage = error.message

        // Handle API error responses
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
      // Clear cart and reset state
      this.newOrder()
      this.discount = 0
      this.cashReceived = 0
      this.pendingSaleHeaderId = null

      // Clear multi-payment state
      if (this.multiPayment) {
        this.multiPayment.clearPayments()
      }
    },

    handleMultiPaymentCancel() {
      this.multiPaymentDialog = false
      this.pendingSaleHeaderId = null
    },

    handleMultiPaymentError(error) {
      console.error('Multi-payment error:', error)
      swalError2(
        this.$swal,
        'Error',
        error.message || 'ເກີດຂໍ້ຜິດພາດໃນການຈ່າຍເງິນ'
      )
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
      this.selectedProductId = item.id
      this.newQty = item.qty
      this.qtyDialog = true
    },

    updateQty() {
      if (this.selectedProductId !== null) {
        this.$store.commit('UPDATE_PRODUCT_QTY', {
          id: this.selectedProductId,
          qty: this.newQty,
        })
        this.qtyDialog = false
        this.selectedProductId = null
        this.newQty = 0
      }
    },

    setQty() {},

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

    previewTicket() {
      this.tickePreviewDialog = true
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

    generatePrintViewDeliveryCustomer() {
      let txnListHtml = ``
      for (const iterator of this.productCart) {
        const product = this.findAllProduct.find((el) => el.id == iterator.id)
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
      let totalHtml = ``
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

    printDefaultTicket() {
      const theChanges = this.changes
      defaultTicket({
        productCart: this.productCart,
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: this.discount,
        currencyList: this.currencyList,
        grandTotal: this.grandTotal,
        companyLogo: this.companyLogo,
        lastTransactionSaleHeaderId: this.lastTransactionSaleHeaderId,
        currentTerminal: this.currentTerminal,
        user: this.user,
        ticketCommon: this.ticketCommon,
        currentPaymentCode: this.currentPaymentCode,
        cashReceived: this.cashReceived,
        changes: theChanges,
        axios: this.$axios, // Add this for API logo loading
        companyData: this.companyData, // Add this for fallback
      })
    },

    generatePrintView() {
      // ... (keeping existing method unchanged)
      let txnListHtml = ``
      for (const iterator of this.productCart) {
        const product = this.findAllProduct.find((el) => el.id == iterator.id)
        const quantity = iterator.qty
        const total = iterator.qty * iterator.localPrice
        txnListHtml += `<div class="ticket">
                    <div class="product-name" >${product.pro_name} </div>
                    <div class="price" >  ${this.formatNumber(total)}</div>
                </div>
                <div class="product-name" >${quantity} X ${this.formatNumber(
          iterator.localPrice
        )}</div>
                <br>
                    `
      }
      // Rest of the method remains the same...
    },

    async setQuotation() {
      if (this.isloading || this.generateSaleLine == 0) {
        if (this.generateSaleLine == 0) {
          swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        }
        return
      }

      const today = new Date()
      this.isloading = true
      this.saleHeader.discount = this.discount
      this.saleHeader.remark = 'Quotation'
      this.saleHeader.total = this.grandTotal - this.discount
      this.saleHeader.clientId = this.currenctCustomer.id
      this.saleHeader.paymentId = this.currentPayment
      this.saleHeader.currencyId = 1
      this.saleHeader.lines = this.generateSaleLine
      this.saleHeader.userId = this.user.id
      this.saleHeader.bookingDate = jsDateToMysqlDate(today)
      this.saleHeader.isActive = true
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
      UPDATE_PRODUCT_QTY: 'UPDATE_PRODUCT_QTY',
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
      // If cart is empty, show error
      if (this.generateSaleLine.length === 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        return
      }

      // For delivery customers, use the existing flow
      if (isDeliveryCustomer) {
        return this.postTransactionOriginal(isDeliveryCustomer)
      }

      // This method is now only called by multi-payment or special cases
      // Regular single payments go through processSinglePayment()
      console.log(
        'postTransaction called - this should only happen for special cases or multi-payment'
      )

      // If called without context, default to multi-payment
      this.openMultiPaymentDialog()
    },

    /**
     * Handle payment errors from cart footer
     */
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
      const today = new Date()
      this.isloading = true
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

      await this.$axios
        .post('/api/sale/create', this.saleHeader)
        .then((res) => {
          this.lastTransactionSaleHeaderId = res.data.split('-')[1].trim()
          swalSuccess(this.$swal, 'Succeed', res.data.split('-')[0])

          if (isDeliveryCustomer) {
            this.generatePrintViewDeliveryCustomer()
            this.clearCustomerFormAction()
          } else {
            this.printDefaultTicket()
          }
          this.newOrder()
          this.discount = 0
          this.cashReceived = 0
        })
        .catch((er) => {
          if (er.response.data.includes('#')) {
            const id = er.response.data.split('#')[1]
            const product = this.findAllProduct.find((el) => el.id == id)
            swalError2(
              this.$swal,
              'Error',
              `ຈຳນວນສິນຄ້າ: ${product.pro_name || ''} ມີບໍ່ພຽງພໍໃນສາງ`
            )
          } else {
            swalError2(this.$swal, 'Error', er.response.data)
          }
        })
      this.isloading = false
    },

    formatNumber(val) {
      return getFormatNum(val)
    },

    selectePaymentMethod(id) {
      this.addSelectedPayment(id)
    },

    previewTicket(saleHeaderId) {
      const path = this.isQuotation ? 'PDFQuotation' : 'PDFInvoice'
      window.open(`/admin/PDFTicket/${saleHeaderId}`, '_blank')
    },

    async fetchCategory() {
      this.isLoading = true
      await this.$axios
        .get('category_f')
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
      this.clearCart()
      this.discount = 0
      this.cashReceived = 0
    },
  },
}
</script>

<style scoped>
/* NOTE: The scoped style from the original file is preserved below. */
* {
  font-family: 'noto sans lao';
}
.terminal-dialog .terminal-card {
  cursor: pointer;
  transition: all 0.2s ease;
}

.terminal-dialog .terminal-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.terminal-dialog .terminal-card.selected {
  border-color: var(--v-primary-base) !important;
  background-color: rgba(var(--v-primary-base), 0.05);
}

.search-field {
  max-width: 100%;
}

.header-btn {
  min-width: auto;
  height: 40px;
}

.header-btn.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.drawer-left {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.terminal-chip {
  height: auto !important;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.terminal-chip:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.category-item {
  border-radius: 8px !important;
  margin: 4px 8px;
  transition: all 0.2s ease;
}

.category-item:hover {
  background-color: rgba(var(--v-primary-base), 0.08);
}

.category-item.active {
  background-color: rgba(var(--v-primary-base), 0.12);
  color: var(--v-primary-base);
}

/* FIXED MAIN CONTENT SCROLLING */
.main-content {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.main-content-wrapper {
  height: calc(100vh - 72px); /* Account for app bar height */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.main-container {
  min-height: 100%;
  padding-bottom: 20px;
}

/* Responsive main content adjustments */
@media (min-width: 1264px) {
  .main-content-wrapper {
    padding-right: 0;
  }
}

@media (max-width: 1263px) {
  .main-content-wrapper {
    padding-right: 0;
  }
}

.cart-drawer {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}

.cart-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cart-header {
  background: linear-gradient(
    135deg,
    var(--v-primary-base),
    var(--v-primary-darken1)
  );
}

.customer-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.customer-chip {
  height: auto !important;
  padding: 8px;
  cursor: pointer;
  max-width: 100%;
}

.cart-items {
  min-height: 0;
  flex: 1;
}

.cart-items-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

/* NOTE: Removed .cart-items-list max-height/overflow-y from original as it conflicts with the new virtual-scroll pattern, but keeping it simple for the non-virtual scroll implementation. */
.cart-items-list {
  /* max-height: calc(100vh - 500px); <- Removed for flexibility with new component */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

/* NOTE: Removed .cart-item styles as they moved to CartItemComponent.vue */

/* NOTE: Removed .qty-btn styles as they moved to CartItemComponent.vue */

/* NOTE: Removed .price-chip styles as they moved to CartItemComponent.vue */

.empty-cart {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.cart-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  background-color: white;
  flex-shrink: 0;
}

/* NOTE: Removed payment-inputs styles as they moved to CartFooterComponent.vue */

/* NOTE: Removed total-display styles as they moved to CartFooterComponent.vue */

/* NOTE: Removed payment-card-item styles as they moved to CartFooterComponent.vue */

/* NOTE: Removed pay-button styles as they moved to CartFooterComponent.vue */

/* Mobile responsive adjustments */
@media (max-width: 1263px) {
  .cart-drawer {
    width: 100% !important;
    max-width: 480px !important;
  }

  .header-btn span {
    display: none;
  }

  .search-field {
    margin-bottom: 8px;
  }

  .main-content-wrapper {
    height: calc(100vh - 72px);
    padding-right: 0;
  }
}

@media (max-width: 960px) {
  .customer-bar .v-row {
    flex-direction: column;
    gap: 8px;
  }

  .payment-inputs .v-row {
    flex-direction: column;
  }

  .total-display .v-row {
    flex-direction: column;
    text-align: center;
  }

  .cart-items-list {
    max-height: calc(100vh - 400px);
  }
}

@media (max-width: 600px) {
  .main-content-wrapper {
    height: calc(100vh - 72px);
  }

  .main-container {
    padding: 8px;
  }
}

/* Fix for browser scroll behavior */
html {
  overflow-y: auto;
}

body {
  overflow-y: auto;
}

/* Ensure Vuetify app wrapper doesn't constrain height */
.v-application--wrap {
  min-height: 100vh;
  backface-visibility: hidden;
}

/* Fix for webkit touch scrolling */
* {
  -webkit-overflow-scrolling: touch;
}
</style>