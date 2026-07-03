<template>
  <v-app dark>
    <!-- MINIMART POS.VUE - OPTIMIZED VERSION -->
    <!-- Multi-Payment Dialog - ENHANCED -->
    <v-dialog v-model="multiPaymentDialog" max-width="900" persistent>
      <multi-payment-dialog v-model="multiPaymentDialog" :sale-total="grandTotal - discount - loyaltyDiscountAmount"
        :payment-methods="findAllPayment" :sale-header-id="pendingSaleHeaderId" :format-number="formatNumber"
        @confirm-payment="handleMultiPaymentConfirm" @cancel="handleMultiPaymentCancel"
        @payment-error="handleMultiPaymentError" />
    </v-dialog>

    <!-- NFC Payment Dialog - NEW -->
    <v-dialog v-model="nfcPaymentDialog" max-width="650" persistent>
      <nfc-payment-dialog v-if="nfcPaymentDialog" :sale-total="grandTotal - discount - loyaltyDiscountAmount" :format-number="formatNumber"
        :initial-nfc-uid="initialNfcUid" @cancel="nfcPaymentDialog = false" @confirmed="processNfcSettlement" />
    </v-dialog>

    <v-dialog v-model="showQuotationPrintDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="showQuotationPrintDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Print Quotation Preview</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <div class="grey lighten-3 fill-height pa-4 d-flex justify-center">
          <quotation-print v-if="showQuotationPrintDialog" :record-id="quotationPrintId"
            @close="showQuotationPrintDialog = false" />
        </div>
      </v-card>
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
            <v-card v-for="terminal in findAllTerminal" :key="terminal.id" class="mb-4 terminal-card" :class="{
              selected: terminalSelected === terminal.id,
              'elevation-8': terminalSelected === terminal.id,
            }" @click="terminalSelected = terminal.id" outlined hover>
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
                    <v-icon v-if="terminalSelected === terminal.id" color="primary" size="24">
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
          <v-btn color="grey" text large @click="terminalDialog = false" class="px-6">
            <v-icon left>mdi-close</v-icon>
            ຍົກເລີກ
          </v-btn>
          <v-btn color="primary" large @click="switchTerminalAction" :disabled="!terminalSelected" class="px-6 ml-2">
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
          <v-text-field v-model.number="newQty" label="ໃສ່ຈຳນວນໃໝ່" type="number" outlined dense autofocus
            :rules="[(v) => v > 0 || 'ຈຳນວນຕ້ອງມາກກວ່າ 0']" @keydown.enter="updateQty" prepend-inner-icon="mdi-numeric"
            class=""></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="qtyDialog = false" class="px-4">
            ຍົກເລີກ
          </v-btn>
          <v-btn color="primary" @click="updateQty" :disabled="newQty <= 0" class="px-4 ml-2">
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

    <!-- Variant Selection Dialog - NEW -->
    <v-dialog v-model="variantDialogOpenLocal" max-width="500px" persistent>
      <v-card class="elevation-12 rounded-lg">
        <v-toolbar dark color="primary">
          <v-icon left>mdi-palette-swatch</v-icon>
          <v-toolbar-title class="font-weight-medium">ເລືອກລາຍລະອຽດສິນຄ້າ (Select Variant)</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="closeVariantDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text class="pa-6">
          <div v-if="variantProduct">
            <div class="text-h6 font-weight-bold primary--text mb-2">
              {{ variantProduct.pro_name }}
            </div>
            <div class="grey--text text-caption mb-4">
              SKU: {{ variantProduct.barCode || variantProduct.pro_id }}
            </div>

            <!-- Color Variants Selection -->
            <div v-if="hasColorVariants" class="mb-5">
              <div class="font-weight-bold mb-2 subtitle-1 d-flex align-center">
                <v-icon small class="mr-1" color="primary">mdi-palette</v-icon>
                ເລືອກສີ (Select Color)
              </div>
              <div class="color-swatch-container">
                <div 
                  v-for="color in uniqueColors" 
                  :key="color.id" 
                  class="color-swatch-item"
                  :class="{ 'selected': selectedColorId === color.id }"
                  @click="selectColor(color.id)"
                >
                  <div 
                    class="color-circle" 
                    :style="color.hex_code ? `background-color: ${color.hex_code};` : 'background-color: #e0e0e0;'"
                  >
                    <v-icon v-if="selectedColorId === color.id" color="white" small class="swatch-check">
                      mdi-check
                    </v-icon>
                  </div>
                  <div class="color-name">{{ color.color_name }}</div>
                </div>
              </div>
            </div>

            <!-- Size Variants Selection -->
            <div v-if="hasSizeVariants" class="mb-5">
              <div class="font-weight-bold mb-2 subtitle-1 d-flex align-center">
                <v-icon small class="mr-1" color="primary">mdi-ruler</v-icon>
                ເລືອກຂະໜາດ (Select Size)
              </div>
              <div class="size-chips-container">
                <v-chip
                  v-for="size in uniqueSizes"
                  :key="size.id"
                  filter
                  outlined
                  :color="selectedSizeId === size.id ? 'primary' : 'grey darken-1'"
                  :input-value="selectedSizeId === size.id"
                  @click="selectSize(size.id)"
                  class="font-weight-medium"
                >
                  {{ size.size_name }}
                </v-chip>
              </div>
            </div>

            <v-divider class="my-4"></v-divider>

            <!-- Stock status & Qty adjuster -->
            <v-row align="center" no-gutters>
              <v-col cols="6">
                <!-- Stock Status -->
                <div class="subtitle-2 grey--text">ສະຖານະສິນຄ້າ (Stock Status):</div>
                <div class="mt-1">
                  <v-chip 
                    v-if="selectedColorId || selectedSizeId" 
                    :color="getStockColor(selectedVariantStock)" 
                    text-color="white" 
                    small
                    class="font-weight-bold"
                  >
                    ຍັງເຫຼືອ (Available): {{ selectedVariantStock }}
                  </v-chip>
                  <span v-else class="grey--text text-caption font-italic">
                    ກະລຸນາເລືອກຕົວເລືອກດ້ານເທິງ
                  </span>
                </div>
              </v-col>
              <v-col cols="6" class="d-flex flex-column align-end">
                <div class="subtitle-2 grey--text mb-1">ຈຳນວນ (Quantity):</div>
                <div class="qty-adjuster">
                  <button @click="adjustQty(-1)" :disabled="variantQty <= 1">
                    <v-icon small>mdi-minus</v-icon>
                  </button>
                  <input type="number" v-model.number="variantQty" min="1" :max="selectedVariantStock" readonly />
                  <button @click="adjustQty(1)" :disabled="variantQty >= selectedVariantStock">
                    <v-icon small>mdi-plus</v-icon>
                  </button>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-btn text large color="grey darken-1" @click="closeVariantDialog" class="px-6">
            ຍົກເລີກ (Cancel)
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn 
            color="primary" 
            large 
            :disabled="!isVariantSelectionValid" 
            @click="confirmVariantSelection" 
            class="px-6"
            elevation="2"
          >
            <v-icon left>mdi-cart-plus</v-icon>
            ເພີ່ມໃສ່ກະຕ່າ (Add to Cart)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Pricing Options Dialog -->
    <!-- TODO: New price update selected always call update opencustomer screen, need to resolve this. -->
    <v-dialog v-model="pricingDialog" max-width="1200">
      <pricing-option :key="pricingDialogKey" @close-dialog="pricingDialog = false"
        @new-price-update="openCustomerScreenEnhanced" :record-id="productPricingSelected"></pricing-option>
    </v-dialog>

    <!-- Delivery Form Dialog -->
    <v-dialog v-model="deliveryForm" max-width="1200" persistent>
      <delivery-form @post-transaction="postTransactionForOnlineCustomer" @close-dialog="deliveryForm = false"
        :key="shippingFormKey"></delivery-form>
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
    <v-app-bar app color="primary" dark clipped-left clipped-right elevation="8" height="80" class="app-header">
      <v-container fluid class="pa-0"> <v-row align="center" no-gutters>

          <v-col cols="auto" class="d-flex align-center pl-4">
            <v-btn icon @click="drawer = !drawer" class="mr-1" large>
              <v-icon size="28">mdi-menu</v-icon>
            </v-btn>

            <v-btn text @click="showProductList = !showProductList" class="mr-1 px-2" large>
              <v-icon size="28" left>
                {{ showProductList ? 'mdi-view-list' : 'mdi-view-grid-plus' }}
              </v-icon>
              <span class="d-none d-md-inline font-weight-medium">
                {{ showProductList ? 'ຊ່ອນກາດ' : 'ສະແດງກາດ' }}
              </span>
            </v-btn>

            <v-btn icon @click="drawer_right = !drawer_right" class="d-lg-none" large>
              <v-badge v-if="productCart.length > 0" :content="productCart.length" color="error" overlap small>
                <v-icon size="28">mdi-cart</v-icon>
              </v-badge>
              <v-icon v-else size="28">mdi-cart-outline</v-icon>
            </v-btn>
          </v-col>

          <v-spacer></v-spacer> <v-col cols="auto" class="d-flex justify-end pr-4">
            <div class="d-flex align-center">

              <v-btn class="header-btn mr-2" :color="isCustomerDisplayOpen() ? 'success' : 'rgba(255,255,255,0.1)'"
                depressed @click="openCustomerScreenEnhanced" large rounded>
                <v-icon left size="20">
                  {{ isCustomerDisplayOpen() ? 'mdi-monitor-eye' : 'mdi-monitor-share' }}
                </v-icon>
                <span class="d-none d-sm-inline font-weight-medium">
                  {{ isCustomerDisplayOpen() ? 'ອັບເດດຈໍ' : 'ຈໍລູກຄ້າ' }}
                </span>
              </v-btn>

              <v-btn v-for="item in headerMenu" :key="item.title" :to="item.path" @click="item.method" text
                class="header-btn ml-1" :class="{ 'active-route': $route.path === item.path }" large rounded>
                <v-icon left size="20">{{ item.icon }}</v-icon>
                <span class="d-none d-lg-inline font-weight-medium">{{ item.title }}</span>
              </v-btn>
            </div>
          </v-col>

        </v-row>
      </v-container>
    </v-app-bar>

    <!-- ENHANCED Left Navigation Drawer -->
    <v-navigation-drawer v-if="showProductList" app v-model="drawer" clipped width="300"
      class="drawer-left elevation-8">
      <div class="drawer-header pa-4 ma-0">
        <v-row align="center" no-gutters>
          <v-col cols="auto" class="mr-3">
            <!-- Center Section - Search -->
            <v-text-field v-model="serachModel" clearable clear-icon="mdi-close" prepend-inner-icon="mdi-magnify"
              outlined dense label="ຄົ້ນຫາສິນຄ້າ..." solo-inverted hide-details class="search-field elevation-2" />
          </v-col>
          <!-- <v-btn @click="testSearch" color="error" small class="ml-2">
            🧪 Test Search
          </v-btn> -->
        </v-row>
      </div>
      <!-- Terminal Header -->
      <div class="drawer-header pa-4 ma-0">
        <v-card color="warning" outlined @click="terminalDialog = true" class="terminal-chip elevation-2" hover>
          <v-card-text class="pa-3">
            <v-row align="center" no-gutters>
              <v-col cols="auto" class="mr-3">
                <v-icon color="white darken-2" size="24">mdi-monitor</v-icon>
              </v-col>
              <v-col>
                <div class="font-weight-bold">
                  {{ currentTerminal?.name || 'ເລືອກ Terminal' }}
                </div>
                <div class="">
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
            <v-list-item v-for="(item, i) in categoryList" :key="i" class="category-item mb-1"
              :class="{ 'active-category': selectedItem === i }" rounded>
              <v-list-item-icon class="mr-3">
                <v-icon :color="selectedItem === i ? 'primary' : 'grey'">
                  mdi-tag
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-medium text-wrap"
                  :class="{ 'primary--text': selectedItem === i }">
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
    <v-main class="main-content" v-if="showProductList">
      <div class="main-content-wrapper">
        <v-container fluid class="pa-0 main-container">
          <!-- TODO: customer update screen seems there is a bug -->
          <Nuxt :key="productComponentKey" @update-cus-screen="handleCustScreen" />
        </v-container>
      </div>
    </v-main>

    <!-- ENHANCED Right Navigation Drawer (Cart) -->
    <v-navigation-drawer app right clipped :width="showProductList ? '500' : '100%'" class="cart-drawer elevation-8"
      :permanent="$vuetify.breakpoint.lgAndUp" :temporary="$vuetify.breakpoint.mdAndDown" v-model="drawer_right">
      <div class="cart-container">
        <!-- Enhanced Customer Bar -->
        <div class="customer-bar pa-4">
          <v-row align="center" no-gutters class="ga-2">
            <v-col>
              <v-card color="success" outlined @click="openCustomerDialog" class="customer-chip elevation-2" hover>
                <v-card-text class="pa-3">
                  <v-row align="center" no-gutters>
                    <v-col cols="auto" class="mr-3">
                      <v-icon color="success" size="20">mdi-account-circle</v-icon>
                    </v-col>
                    <v-col>
                      <div class="font-weight-bold text-truncate">
                        {{ customerDisplayName }}
                      </div>
                      <div v-if="currenctCustomer && currenctCustomer.loyaltyPoints !== undefined" class="text-caption">
                        Points: {{ currenctCustomer.loyaltyPoints }}
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
                <v-btn icon color="primary" @click="openDeliveryBox" title="ຈັດສົ່ງ" class="action-btn">
                  <v-icon>mdi-truck-delivery</v-icon>
                </v-btn>

                <v-btn icon color="secondary" @click="loyaltyGuideDialog = true" title="System Guide / ຄູ່ມືລະບົບ" class="action-btn">
                  <v-icon>mdi-settings-transfer</v-icon>
                </v-btn>

                <v-btn icon color="primary" @click="newOrder" title="ອໍເດີໃໝ່" class="action-btn">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>

                <v-btn icon color="grey" @click="drawer_right = false" class="d-lg-none action-btn" title="ປິດ">
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
              <v-row no-gutters align="center" class="font-weight-bold grey--text text--darken-2">
                <v-col cols="1"></v-col>
                <v-col cols="4">ສິນຄ້າ</v-col>
                <v-col cols="3" class="text-center">ຈຳນວນ</v-col>
                <v-col cols="4" class="text-right">ລາຄາ</v-col>
              </v-row>
            </div>

            <div class="cart-items-list flex-grow-1 overflow-y-auto">
              <template v-if="productCart.length > 0">
                <cart-item-component v-for="item in productCart" :key="item.id" :item="item"
                  :format-number="formatNumber" @delete="deteletProductLocal" @update-qty="openQtyDialog"
                  @decrease="decreaseProductAmount" @increase="addProductValidation" @price-click="pricingLogig"
                  @configure-gift="handleGiftConfirm" />
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
        <cart-footer-component :product-cart="productCart" :discount="discount" :cash-received="cashReceived"
          :changes="changes" :grand-total="grandTotal" :currency-list="findAllCurrency" :payment-list="findAllPayment"
          :show-check-out="showCheckOut" :selected-payment="currentPayment" :format-number="formatNumber"
          :svg-icon="svgIcon" :enablePredefinedPayments="true" :defaultPaymentMethods="[14, 15]"
          :current-customer="currenctCustomer"
          @update:discount="handleDiscountUpdate" @update:cash-received="handleCashReceivedUpdate"
          @update:redeemed-points="handleRedeemedPointsUpdate"
          @toggle-checkout="showCheckOut = !showCheckOut" @process-single-payment="processSinglePayment"
          @select-payment="selectePaymentMethod" @open-multi-payment="openMultiPaymentDialog"
          @show-error="handlePaymentError" />
      </div>
    </v-navigation-drawer>
    <SystemGuideDialog v-model="loyaltyGuideDialog" />
  </v-app>
</template>

<script>
import CustomerList from '~/components/customer/CustomerList.vue'
import Quotation from '~/components/quotation'
import QuotationPrint from '~/components/quotation/QuotationPrint.vue' // Add this
import PricingOption from '~/components/PricingOption.vue'
import LoadingIndicator from '~/components/LoadingIndicator.vue'
import DeliveryForm from '~/components/deliveryForm.vue'
import MultiPaymentDialog from '~/components/pos/MultiPaymentDialog-vue2.vue'
import NfcPaymentDialog from '~/components/pos/NfcPaymentDialog.vue'
import CurrencyHelper from '~/utils/currency-helper'
import { createMultiPayment } from '~/composables/useMultiPayment-vue2.js'
import {
  generateInvoiceHTML,
  generateReceiptHTML,
} from '~/common/printTemplates'

// Import the components
import CartItemComponent from '~/components/pos/CartItemComponent.vue'
import CartFooterComponent from '~/components/pos/CartFooterComponent.vue'

import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { mainCompanyInfo } from '~/common/api'
import {
  defaultTicket,
  customerTicket,
  deliveryCustomerTicket,
} from '~/common/ticket.js'
import Vue from 'vue'
import { getFormatNum, jsDateToMysqlDate, ticketHtml } from '~/common'
import SystemGuideDialog from '~/components/common/SystemGuideDialog.vue'
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
    QuotationPrint,
    PricingOption,
    LoadingIndicator,
    DeliveryForm,
    CartItemComponent,
    CartFooterComponent,
    MultiPaymentDialog,
    NfcPaymentDialog,
    SystemGuideDialog,
  },
  name: 'DefaultLayout',
  provide() {
    return {
      sharedState: this.sharedState,
    }
  },
  data() {
    return {
      showProductList: true,
      showQuotationPrintDialog: false,
      quotationPrintId: null,
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
      nfcPaymentDialog: false,
      initialNfcUid: '',
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
      // paymentList: [],
      selectedItem: 0,
      shippingFormKey: 1,
      // currencyList: [],
      saleHeader: {
        id: null,
        bookingDate: '',
        remark: '',
        total: 0,
        exchangeRate: 1,
        isActive: true,
        qrRequestId: null,
      },
      stateValue: '',

      // CUSTOMER SCREEN INTEGRATION - NEW
      $customerWindow: null,
      qrPolling: null,
      currentDynamicQR: null,
      lastQRTotal: 0,
      redeemedPoints: 0,
      loyaltyGuideDialog: false,
      selectedColorId: null,
      selectedSizeId: null,
      variantQty: 1,
    }
  },

  computed: {
    variantDialogOpenLocal: {
      get() {
        return this.$store.getters.variantDialogOpen
      },
      set(val) {
        this.$store.commit('SET_VARIANT_DIALOG', val)
      }
    },
    variantProduct() {
      return this.$store.getters.variantProduct
    },
    variantCards() {
      return this.$store.getters.variantCards || []
    },
    uniqueColors() {
      const colorsMap = new Map()
      this.variantCards.forEach(card => {
        if (card.color) {
          colorsMap.set(card.color.id, card.color)
        }
      })
      return Array.from(colorsMap.values())
    },
    uniqueSizes() {
      const sizesMap = new Map()
      this.variantCards.forEach(card => {
        if (this.selectedColorId && card.colorId !== this.selectedColorId) {
          return
        }
        if (card.size) {
          sizesMap.set(card.size.id, card.size)
        }
      })
      return Array.from(sizesMap.values()).sort((a, b) => (a.size_order || 0) - (b.size_order || 0))
    },
    hasColorVariants() {
      return this.uniqueColors.length > 0
    },
    hasSizeVariants() {
      return this.uniqueSizes.length > 0
    },
    selectedVariantStock() {
      if (!this.variantProduct) return 0
      let filtered = this.variantCards
      if (this.hasColorVariants && this.selectedColorId) {
        filtered = filtered.filter(c => c.colorId === this.selectedColorId)
      }
      if (this.hasSizeVariants && this.selectedSizeId) {
        filtered = filtered.filter(c => c.sizeId === this.selectedSizeId)
      }
      return filtered.length
    },
    isVariantSelectionValid() {
      if (!this.variantProduct) return false
      if (this.hasColorVariants && !this.selectedColorId) return false
      if (this.hasSizeVariants && !this.selectedSizeId) return false
      return this.variantQty > 0 && this.variantQty <= this.selectedVariantStock
    },
    getSPF() {
      return this.$store.getters.findSPF
    },
    paperSize() {
      const item = this.getSPF.find((spf) => spf.code == 'PAPER_SIZE')
      return item?.value || '80mm'
    },
    isDynamicQREnabled() {
      const item = this.getSPF.find((spf) => spf.code == 'DYN_QR')
      return item?.value === 'Y'
    },
    dynamicQRConfigs() {
      const getVal = (code) => this.getSPF.find((s) => s.code === code)?.value
      
      // Allow overriding the callback URL via SPF for production/staging environments
      let callbackUrl = getVal('DYN_CallbackUrl')
      
      if (!callbackUrl) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        const cleanBase = baseUrl.replace(/\/+$/, '')
        callbackUrl = `${cleanBase}/api/v1/direct/callback`
      }


      console.info(`CALLBACK URL ${callbackUrl}`)

      return {
        memberId: getVal('DYN_MemberId') || 'KOKKOKMOV',
        merchantId: getVal('DYN_MerchantId'),
        password: getVal('DYN_Password'),
        callbackUrl: callbackUrl,
      }
    },
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
        showLogoOnTicket: terminalCompany?.showLogoOnTicket || baseCompany?.showLogoOnTicket || '',
        ticketQRcode: terminalCompany?.ticketQRcode || baseCompany?.ticketQRcode || false,
        ticketLayout: terminalCompany?.ticketLayout || baseCompany?.ticketLayout || 'classic',
        ticketLogo:
          `${baseUrl}/${terminalCompany.profile_image_path}` ||
          'default-logo.png',
        qrCode:
          `${baseUrl}/${terminalCompany.bank_qr_image_path}` ||
          'default-logo.png',
        qrCode2:
          terminalCompany.bank_qr_image_path_2 ? `${baseUrl}/${terminalCompany.bank_qr_image_path_2}` : null,
      }
    },

    changes() {
      const changeValue =
        this.cashReceived == 0
          ? 0
          : this.cashReceived - (this.grandTotal - this.discount - this.loyaltyDiscountAmount)
      return this.formatNumber(changeValue)
    },
    ticketCommon() {
      return ticketHtml()
    },
    customerDisplayName() {
      if (this.currenctCustomer === null) {
        return 'Walk-in Customer'
      }

      const name = this.currenctCustomer.name || ''
      const company = this.currenctCustomer.company ? ` (${this.currenctCustomer.company})` : ''
      const grade = this.currenctCustomer.grade ?? 'NO GRADE'

      return `${name}${company} ${grade}`.trim()
    },
    user() {
      return this.$auth.user || ''
    },
    headerMenu() {
      // Determine the dynamic home path based on the SPF HOME configuration or user's group configuration
      const homePageSpf = (this.findSPF || []).find((spf) => spf.code === 'HOME' && spf.isActive)
      const homePath = homePageSpf?.value || this.user?.userGroup?.homePage || '/admin';

      return [
        {
          title: 'Home',
          path: homePath,
          icon: 'mdi-home-circle-outline',
          method: () => { },
        },
        {
          title: 'Orders',
          path: '/admin/ordersFromPos',
          icon: 'mdi-reorder-horizontal',
          method: () => { },
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
          method: () => { },
        },
      ];
    },
    ...mapState(['productSearchKeyboard']),
    ...mapGetters([
      'findAllprinters',
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
      'findSPF',
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

        const originalPrice = iterator.localPrice || 0
        const lineSubtotalOriginal = iterator.qty * originalPrice

        const taxAmountOriginal = this.calculateLineTaxAmount(iterator)
        const taxType = iterator.tax?.taxType || 'INC'

        const totalOriginal = taxType === 'EXC' ? lineSubtotalOriginal + taxAmountOriginal : lineSubtotalOriginal

        lines.push({
          quantity: iterator.qty,
          unitRate: 1,
          currencyId: iterator.saleCurrencyId,
          exchangeRate: currency.rate || 1,
          price: originalPrice,
          discount: 0,
          validateStockOnSale: iterator.validateStockOnSale,
          productId: iterator.id,
          productKey: iterator.id,
          unitId: iterator.stockUnitId,
          colorId: iterator.colorId || null,
          sizeId: iterator.sizeId || null,
          total: totalOriginal,
          taxRate: iterator.tax?.rate || 0,
          taxAmount: taxAmountOriginal,
          taxType: taxType,
          isGift: iterator.isGift,
          priceListId: iterator.priceListId,
          isActive: true,
        })
      }

      if (this.loyaltyDiscountAmount > 0) {
        const redeemProduct = (this.findAllProduct || []).find((p) => p.id === 999)
        lines.push({
          quantity: 1,
          unitRate: 1,
          currencyId: this.findLocalCurrency.id,
          exchangeRate: this.findLocalCurrency.rate || 1,
          price: -this.loyaltyDiscountAmount,
          discount: 0,
          validateStockOnSale: false,
          productId: 999,
          productKey: 999,
          unitId: redeemProduct ? redeemProduct.stockUnitId : 1,
          colorId: null,
          sizeId: null,
          total: -this.loyaltyDiscountAmount,
          taxRate: 0,
          taxAmount: 0,
          taxType: 'INC',
          isGift: false,
          priceListId: null,
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
      const localCurrency = this.findAllCurrency.find(c => c.isLocalCCY) || { id: 6, rate: 1 }
      const totalPrice = this.cartOfProduct.reduce((total, item) => {
        const currency = this.findCurrency(item.saleCurrencyId)
        const lineSubtotalOriginal = item.qty * item.localPrice
        const lineSubtotalLocal = CurrencyHelper.convertToLocal(lineSubtotalOriginal, currency, localCurrency)

        const taxAmountOriginal = this.calculateLineTaxAmount(item)
        const taxAmountLocal = CurrencyHelper.convertToLocal(taxAmountOriginal, currency, localCurrency)

        const taxType = item.tax?.taxType || 'INC'
        const lineTotalLocal = taxType === 'EXC' ? lineSubtotalLocal + taxAmountLocal : lineSubtotalLocal

        return total + lineTotalLocal
      }, 0)
      return totalPrice
    },
    loyaltyDiscountAmount() {
      if (!this.redeemedPoints) return 0
      const spfRate = (this.findSPF || []).find(
        (spf) => spf.code === 'LOYALTY_REDEEM_RATE' && spf.isActive
      )
      const redeemRate = spfRate ? parseFloat(spfRate.value) || 10 : 10
      return this.redeemedPoints * redeemRate
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
    this.setupGlobalNfcListener()
    // this.$root.$on('update-cus-screen', this.openCustomerScreenEnhanced)

    // CUSTOMER SCREEN INTEGRATION
    this.$customerWindow = null
    window.addEventListener('message', this.handleCustomerScreenMessage)

    // Auto-sync if customer display is already open
    if (this.isCustomerDisplayOpen()) {
      this.batchUpdateCustomerScreen()
    }

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
    this.stopDynamicQRPolling()
    this.removeGlobalNfcListener()

    // PERFORMANCE OPTIMIZATION: Clear timeouts and caches
    if (this.customerScreenUpdateTimeout) {
      clearTimeout(this.customerScreenUpdateTimeout)
    }
    this.productLookupCache.clear()
  },

  watch: {
    variantDialogOpenLocal(newVal) {
      if (newVal) {
        this.selectedColorId = null
        this.selectedSizeId = null
        this.variantQty = 1
      }
    },
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

    nfcPaymentDialog(isOpen) {
      if (!isOpen) {
        // Clear initial UID when dialog closes
        this.initialNfcUid = '';
        // Re-setup global listener after a short delay to ensure the dialog's listener cleanup has finished
        setTimeout(() => {
          this.setupGlobalNfcListener();
        }, 500);
      }
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
    selectColor(colorId) {
      this.selectedColorId = colorId
      this.selectedSizeId = null // Reset size when color changes
      this.variantQty = 1
    },
    selectSize(sizeId) {
      this.selectedSizeId = sizeId
      this.variantQty = 1
    },
    adjustQty(amount) {
      const newQty = this.variantQty + amount
      if (newQty >= 1 && newQty <= this.selectedVariantStock) {
        this.variantQty = newQty
      }
    },
    closeVariantDialog() {
      this.$store.commit('CLEAR_VARIANT_DATA')
    },
    confirmVariantSelection() {
      if (!this.isVariantSelectionValid) return

      const colorInfo = this.uniqueColors.find(c => c.id === this.selectedColorId)
      const sizeInfo = this.uniqueSizes.find(s => s.id === this.selectedSizeId)
      const productName = this.variantProduct.pro_name
      
      const productToAdd = {
        ...this.variantProduct,
        colorId: this.selectedColorId,
        sizeId: this.selectedSizeId,
        color: colorInfo ? { name: colorInfo.color_name, hex_code: colorInfo.hex_code } : null,
        size: sizeInfo ? { name: sizeInfo.size_name, size_code: sizeInfo.size_code } : null,
        qty: this.variantQty,
        hasVariantSelected: true
      }
      
      this.$store.dispatch('addProduct', productToAdd)
      this.closeVariantDialog()

      // Show success message
      this.$toast.success(`${productName} added to cart`, {
        position: 'bottom-center',
        duration: 800,
        dismissible: true,
      })
    },
    getStockColor(stockCount) {
      if (stockCount <= 0) return 'error'
      if (stockCount <= 5) return 'warning'
      if (stockCount <= 20) return 'orange'
      return 'success'
    },
    findCurrency(currencyId) {
      return this.findAllCurrency.find((el) => el.id == currencyId) || { code: '', rate: 1 }
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

        console.info(`PRODUCT DET CART ADD INCRESE ${JSON.stringify(product)}`)
        // Check card_count limit before adding to cart
        if (!this.validateCardCountForIncrease(product)) {
          return false
        }
        const cartItem = {
          ...product,
          qty: 1,
          isGift,
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
      if (this.productLookupCache.size === 0) {
        this.buildProductLookupCache()
      }

      return this.productCart.map((cartItem) => {
        const product = this.productLookupCache.get(cartItem.id)
        const currency = this.findAllCurrency.find(c => c.id === cartItem.saleCurrencyId)

        return {
          id: cartItem.id,
          name: product?.pro_name || cartItem.name || `Product ${cartItem.id}`,
          description: product?.pro_desc || cartItem.description || '',
          category: product?.categ_name || 'General',
          quantity: cartItem.qty,
          unitPrice: cartItem.localPrice,
          localPrice: cartItem.localPrice, // Added for clarity
          currencyCode: currency?.code || 'LAK',
          isGift: cartItem.isGift,
          giftQuantity: cartItem.giftQuantity || 0, // Added to handle partial gifts
          giftAmount: cartItem.giftAmount || 0, // Added for gift pricing
          // ✅ FIX: Ensure the tax object is passed so OrderSection can calculate inclusive price
          tax: cartItem.tax || null,
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

    // openCustomerScreenEnhanced() {
    //   console.info(`COMPANY ${JSON.stringify(this.companyData)}`)
    //   try {
    //     const companyInfo = {
    //       name: this.companyData.name,
    //       address: this.companyData.address,
    //       tel: this.companyData.tel,
    //       email: this.companyData.email,
    //       bank: this.companyData.bank,
    //       accountName: this.companyData.accountName,
    //       accounts: this.companyData.accounts,
    //       remark: this.companyData.remark,
    //       qrCode: this.companyData.qrCode,
    //     }

    //     this.batchUpdateCustomerScreen() // Use batched update

    //     const companyParam = encodeURIComponent(JSON.stringify(companyInfo))
    //     const customerScreenPath = `#/admin/cafeTable/customer?company=${companyParam}`
    //     // const customerScreenPath = `#/admin/cafeTable/customerv1?company=${companyParam}`
    //     const screenWidth = window.screen.width
    //     const screenHeight = window.screen.height

    //     this.$customerWindow = window.open(
    //       customerScreenPath,
    //       'CustomerDisplay',
    //       `width=${screenWidth},height=${screenHeight},left=0,top=0,resizable=yes,scrollbars=no,location=no,menubar=no,toolbar=no,status=no,titlebar=no,fullscreen=yes`
    //     )

    //     if (!this.$customerWindow) {
    //       swalError2(
    //         this.$swal,
    //         'Error',
    //         'Please allow popups for customer display'
    //       )
    //       return
    //     }

    //     setTimeout(() => {
    //       if (this.productCart.length > 0) {
    //         this.batchUpdateCustomerScreen() // Use batched update
    //       } else {
    //         this.sendWelcomeMessage()
    //       }
    //     }, 1000)

    //     this.setupCustomerWindowHandlers()
    //     console.log('Customer screen opened successfully')
    //   } catch (error) {
    //     console.error('Error opening customer screen:', error)
    //     swalError2(this.$swal, 'Error', 'Failed to open customer screen')
    //   }
    // },
    async openCustomerScreenEnhanced() {
      console.info(`COMPANY ${JSON.stringify(this.companyData)}`)
      try {
        let x = 0,
          y = 0,
          width = window.screen.width,
          height = window.screen.height

        // 1. Check if we are running inside Electron
        if (window.posApi && typeof window.posApi.getScreens === 'function') {
          const screens = await window.posApi.getScreens()
          const secondary = screens.find((s) => !s.isPrimary) || screens[0]

          // Use Electron's physical coordinates
          x = secondary.bounds.x
          y = secondary.bounds.y
          width = secondary.bounds.width
          height = secondary.bounds.height
          console.log(`Electron detected. Target monitor: ${secondary.id}`)
        } else {
          // 2. Fallback for Browser Mode
          console.warn(
            'posApi not found. Running in browser mode. Using default screen coordinates.'
          )
          // In a browser, we usually just open it at 0,0 on the current screen
          x = 0
          y = 0
        }

        const companyParam = encodeURIComponent(
          JSON.stringify(this.companyData)
        )
        const currencyParam = encodeURIComponent(
          JSON.stringify(this.findAllCurrency)
        )
        const customerScreenPath = `#/admin/cafeTable/customer?company=${companyParam}&currencies=${currencyParam}`

        this.$customerWindow = window.open(
          customerScreenPath,
          'CustomerDisplay',
          `width=${width},height=${height},left=${x},top=${y},resizable=yes,scrollbars=no,fullscreen=yes`
        )

        if (!this.$customerWindow) {
          this.$toast.error('Please allow popups for customer display')
          return
        }

        this.setupCustomerWindowHandlers()
        localStorage.setItem('customerDisplayOpen', 'true')
        this.batchUpdateCustomerScreen()
      } catch (error) {
        console.error('Error opening customer screen:', error)
      }
    },

    setupCustomerWindowHandlers() {
      if (!this.$customerWindow) return

      this.$customerWindow.addEventListener('beforeunload', () => {
        console.log('Customer display window is closing')
        this.$customerWindow = null
        localStorage.setItem('customerDisplayOpen', 'false')
      })
    },

    sendWelcomeMessage() {
      const formattedOrderItems = this.formatOrderItemsForCustomerScreen()
      const formattedOrderSummary = this.formatOrderSummaryForCustomerScreen()

      const message = {
        type: 'SHOW_QR_PAYMENT',
        data: {
          amount: this.grandTotal - this.discount - this.loyaltyDiscountAmount,
          storeName: this.companyData.name,
          timestamp: Date.now(),
          orderItems: formattedOrderItems,
          discount: this.discount + this.loyaltyDiscountAmount,
          change: this.changes,
          orderSummary: formattedOrderSummary,
          currencyList: this.findAllCurrency, // Added for dynamic currency sync
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

    async sendQRToCustomerScreen() {
      if (!this.productCart.length) {
        this.hideQRPaymentFromCustomerScreen()
        return
      }

      const formattedOrderItems = this.formatOrderItemsForCustomerScreen()
      const formattedOrderSummary = this.formatOrderSummaryForCustomerScreen()

      // ✅ FIX: QR Amount must match the summary total (including tax)
      const totalWithTax = formattedOrderSummary.total
      let qrString = this.generateQRForCustomerScreen(totalWithTax)
      let dynamicQRData = this.currentDynamicQR

      // Handle Dynamic QR if enabled
      if (this.isDynamicQREnabled) {
        // ONLY GENERATE IF TOTAL CHANGED OR COOLDOWN EXPIRED OR NO QR YET
        const shouldRegenerate = !this.currentDynamicQR || this.lastQRTotal !== totalWithTax

        if (shouldRegenerate) {
          try {
            const timestamp = Date.now()
            const random = Math.floor(Math.random() * 1000)
            const billNumber = `POS-${timestamp}-${random}`

            const response = await this.$axios.post(`api/qr/generate`, {
              txnAmount: totalWithTax,
              billNumber: billNumber,
              purposeOfTxn: `POS Order ${this.currentTerminal?.name || ''}`,
              memberId: this.dynamicQRConfigs.memberId,
              merchantId: this.dynamicQRConfigs.merchantId,
              password: this.dynamicQRConfigs.password,
              callbackUrl: this.dynamicQRConfigs.callbackUrl,
              storeLabel: this.currentTerminal?.name || 'POS',
              terminalLabel: this.currentTerminal?.name || 'POS'
            })

            if (response.data.success) {
              this.currentDynamicQR = response.data.data
              this.lastQRTotal = totalWithTax
              this.saleHeader.qrRequestId = response.data.data.requestId
              qrString = response.data.data.qrString
              dynamicQRData = response.data.data
              this.startDynamicQRPolling(billNumber)
            }
          } catch (error) {
            console.error('Failed to generate dynamic QR:', error)
            // Fallback to static QR if dynamic fails
          }
        } else {
          // Use cached values
          qrString = this.currentDynamicQR.qrString
        }
      }

      const qrData = {
        amount: totalWithTax,
        tableNumber: this.currentTerminal?.name || 'POS-TERMINAL',
        ticketId: this.lastTransactionSaleHeaderId || null,
        qrString: qrString,
        isDynamic: !!dynamicQRData,
        dynamicQRData: dynamicQRData,
        timestamp: Date.now(),
        orderItems: formattedOrderItems,
        orderSummary: formattedOrderSummary,
        currencyList: this.findAllCurrency
      }

      const message = { type: 'SHOW_QR_PAYMENT', data: qrData }
      this.sendToCustomerScreen(message)
    },

    generateQRForCustomerScreen(totalAmount) {
      const amount = Math.round(totalAmount)
      const terminal = this.currentTerminal?.name || 'MART'

      const amountStr = amount.toString().padStart(6, '0')
      const tableStr = terminal.toString().padStart(6, '0')

      return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812${terminal} payment63041c9f`
    },

    formatOrderSummaryForCustomerScreen() {
      const totalPriceWithTax = this.grandTotal
      const discount = this.discount

      // Calculate total tax just for display
      let totalTaxLAK = 0
      this.productCart.forEach((item) => {
        const currency = this.findAllCurrency.find((c) => c.id === item.saleCurrencyId)
        const itemTax = this.calculateLineTaxAmount(item)

        totalTaxLAK += currency?.isLocalCCY
          ? itemTax
          : CurrencyHelper.convertToLocal(itemTax, currency, this.findLocalCurrency)
      })

      const total = Math.max(0, totalPriceWithTax - discount - this.loyaltyDiscountAmount)
      const changeValue = this.cashReceived == 0 ? 0 : this.cashReceived - total

      return {
        subtotal: totalPriceWithTax - totalTaxLAK, // Subtotal (EXC Tax)
        tax: totalTaxLAK,
        discount: discount + this.loyaltyDiscountAmount,
        total: total,
        change: changeValue,
      }
    },

    showPaymentSuccessOnCustomerScreen() {
      const message = {
        type: 'PAYMENT_SUCCESS',
        data: {
          amount: this.grandTotal - this.discount - this.loyaltyDiscountAmount,
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

      this.stopDynamicQRPolling()
      this.currentDynamicQR = null
      this.lastQRTotal = 0
      this.sendToCustomerScreen(message)
      localStorage.removeItem('customerDisplay')
    },

    startDynamicQRPolling(billNumber) {
      this.stopDynamicQRPolling()
      this.qrPolling = setInterval(() => {
        this.checkDynamicQRPaymentStatus(billNumber)
      }, 3000)
    },

    stopDynamicQRPolling() {
      if (this.qrPolling) {
        clearInterval(this.qrPolling)
        this.qrPolling = null
      }
    },

    async checkDynamicQRPaymentStatus(billNumber) {
      try {
        const response = await this.$axios.get(`api/qr/payment-status/${billNumber}`)
        if (response.data.success && response.data.data.isPaid) {
          this.stopDynamicQRPolling()
          this.showPaymentSuccessOnCustomerScreen()
          this.$toast.success('Payment Received Successfully!')

          // You might want to auto-process the payment here if appropriate
          // For now, we just update the customer screen
        }
      } catch (error) {
        console.error('Error checking QR payment status:', error)
      }
    },

    isCustomerDisplayOpen() {
      const isWindowOpen = this.$customerWindow && !this.$customerWindow.closed
      const isLocalStorageOpen = localStorage.getItem('customerDisplayOpen') === 'true'
      return !!(isWindowOpen || isLocalStorageOpen)
    },

    closeCustomerDisplayWindow() {
      if (this.$customerWindow && !this.$customerWindow.closed) {
        this.$customerWindow.close()
      }
      this.$customerWindow = null
      localStorage.setItem('customerDisplayOpen', 'false')
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

        const paymentMethod = this.findAllPayment.find(p => p.id === this.currentPayment);
        if (paymentMethod && (paymentMethod.payment_code === 'NFC' || paymentMethod.payment_code === 'WALLET')) {
          this.nfcPaymentDialog = true;
          return;
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
          total: this.grandTotal - this.discount - this.loyaltyDiscountAmount,
          clientId: this.currenctCustomer.id,
          paymentId: null,
          currencyId: this.findLocalCurrency.id, //TODO: update currency DYNAMICALLY
          exchangeRate: this.findLocalCurrency.rate, //TODO: update currency DYNAMICALLY
          lines: this.generateSaleLine,
          userId: this.user.id,
          bookingDate: jsDateToMysqlDate(today),
          locationId: this.currentTerminal['locationId'],
          remark: 'Multi-payment transaction',
          qrRequestId: this.saleHeader.qrRequestId,
          redeemedPoints: this.redeemedPoints,
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

            errorMessage = `ຈຳນວນສິນຄ້າ: ${product?.pro_name || 'Unknown Product'
              } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${stockError.available
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
        const expectedTotal = this.grandTotal - this.discount - this.loyaltyDiscountAmount

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
        discount: Number(this.discount) + Number(this.loyaltyDiscountAmount),
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
        paperWidth: this.paperSize,
        printers: this.findAllprinters,
      })
    },

    formSaleHeader(remark = '') {
      const today = new Date()
      this.saleHeader.isActive = true
      this.saleHeader.discount = this.discount
      this.saleHeader.total = this.grandTotal - this.discount - this.loyaltyDiscountAmount
      this.saleHeader.redeemedPoints = this.redeemedPoints
      this.saleHeader.clientId = this.currenctCustomer.id
      this.saleHeader.paymentId = this.currentPayment
      this.saleHeader.currencyId = this.findLocalCurrency.id
      this.saleHeader.exchangeRate = this.findLocalCurrency.rate
      this.saleHeader.lines = this.generateSaleLine
      this.saleHeader.userId = this.user.id
      this.saleHeader.bookingDate = jsDateToMysqlDate(today)
      this.saleHeader.locationId = this.currentTerminal['locationId']
      this.saleHeader.id = this.pendingSaleHeaderId
      // Ensure qrRequestId is preserved or set if it exists in data
      if (this.saleHeader.qrRequestId === undefined) {
        this.saleHeader.qrRequestId = null
      }
    },

    async setQuotation() {
      // 1. Validation
      if (this.isloading || this.generateSaleLine.length == 0) {
        swalError2(this.$swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
        return
      }

      this.isloading = true

      // 2. Prepare Data
      this.formSaleHeader('Quotation')

      try {
        // 3. Send to API
        const res = await this.$axios.post(
          '/api/quotation/create',
          this.saleHeader
        )

        // 4. Extract ID
        // Assuming response format is "Success - 123" or similar based on your original code
        const rawId = res.data.toString()
        const quotationId = rawId.includes('-')
          ? rawId.split('-')[1].trim()
          : rawId

        // 5. Open In-App Dialog instead of Window.open
        this.quotationPrintId = quotationId
        this.showQuotationPrintDialog = true
      } catch (er) {
        swalError2(this.$swal, 'Error', er)
      } finally {
        this.isloading = false
      }
    },

    handleRedeemedPointsUpdate(val) {
      this.redeemedPoints = val;
      this.batchUpdateCustomerScreen();
    },

    openCustomerDialog() {
      this.customerDialog = true
    },

    setupGlobalNfcListener() {
      if (typeof window !== 'undefined' && window.posApi && window.posApi.onNfcScan) {
        console.log('Setting up Global NFC Listener in POS Layout');
        window.posApi.onNfcScan((uid) => {
          // Only trigger if cart not empty and no dialog is currently open
          if (this.productCart.length > 0 && !this.nfcPaymentDialog && !this.multiPaymentDialog) {
            this.handleGlobalNfcScan(uid);
          }
        });
      }
    },

    removeGlobalNfcListener() {
      if (typeof window !== 'undefined' && window.posApi && window.posApi.removeNfcListener) {
        window.posApi.removeNfcListener();
      }
    },

    handleGlobalNfcScan(uid) {
      console.log('Global NFC Scan detected:', uid);
      
      // 1. Find NFC Payment Method
      const nfcPayment = this.findAllPayment.find(p => p.payment_code === 'NFC');
      
      if (nfcPayment) {
        // 2. Automatically select NFC payment method
        this.selectePaymentMethod(nfcPayment.id);
        
        // 3. Store UID and open dialog
        this.initialNfcUid = uid;
        this.nfcPaymentDialog = true;
      } else {
        console.warn('Payment method with code "NFC" not found in the system.');
        this.$toast?.error('Payment method "NFC" not found. Please check configuration.');
      }
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

    async processNfcSettlement(nfcData) {
      try {
        await this.postTransactionOriginal(false, nfcData);
        this.nfcPaymentDialog = false;
      } catch (error) {
        console.error('NFC Settlement error:', error);
      }
    },

    async postTransactionOriginal(isDeliveryCustomer, nfcData = null) {
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
          console.log(`saleHeader ${JSON.stringify(this.saleHeader)}`)
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
        }

        this.lastTransactionSaleHeaderId = saleHeaderId

        // Handle NFC Double Entry BEFORE asking to print
        if (nfcData) {
          try {
            await this.$axios.post('/api/transactions/settlement', {
              studentAccountId: nfcData.studentAccountId,
              shopAccountId: nfcData.shopAccountId,
              amount: nfcData.amount,
              saleHeaderId: saleHeaderId
            });
            console.log("NFC settlement double-entry complete for sale", saleHeaderId);
          } catch (nfcSettlementErr) {
            console.error("NFC Settlement failed!", nfcSettlementErr);
            swalError2(this.$swal, 'Error', 'ການຕັດເງິນຜ່ານບັດລົ້ມເຫຼວ (NFC Settlement Failed)');
            this.isloading = false;
            // Optionally: Reverse the created sale
            return;
          }
        }

        // 1. Show Success Message
        await swalSuccess(this.$swal, 'Succeed', successMessage)

        // 2. ASK USER: Do you want to print?
        const confirmPrint = await this.$swal.fire({
          title: 'ພິມບິນ?',
          text: 'ທ່ານຕ້ອງການພິມໃບຮັບເງິນຫຼືບໍ່?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ພິມ (Print)',
          cancelButtonText: 'ບໍ່ພິມ (No)',
        })

        // 3. If User clicked "Print"
        if (confirmPrint.isConfirmed) {
          if (isDeliveryCustomer) {
            this.generatePrintViewDeliveryCustomer()
            this.clearCustomerFormAction()
          } else {
            try {
              const PRINTFORMAT = this.findSPF.find(
                (spf) => spf.code == 'TICKET_FORM'
              )
              if (PRINTFORMAT && PRINTFORMAT.value == 'FORMAL') {
                const saleResponse = await this.$axios.get(
                  `api/sale/find/${saleHeaderId}`
                )
                const invoiceData = saleResponse.data
                const fixCompanyData = this.currentTerminal?.location?.company

                let htmlContent = generateReceiptHTML(
                  invoiceData,
                  fixCompanyData,
                  this.findAllCurrency
                )
                this.openPrintWindow(htmlContent)
              } else {
                this.printDefaultTicket()
              }
            } catch (error) {
              console.error(`PRINT TICKET FAIL ${error}`)
            }
          }
        } else if (isDeliveryCustomer) {
          // If it's delivery but they didn't print, still need to clear the form
          this.clearCustomerFormAction()
        }

        // 4. Finalize the order state
        const now = new Date()
        this.newOrder()
        this.sharedState.saleHeader = this.lastTransactionSaleHeaderId || now
        localStorage.setItem(
          'saleHeader',
          this.lastTransactionSaleHeaderId || now
        )
        this.discount = 0
        this.cashReceived = 0

        // Update customer screen
        this.showPaymentSuccessOnCustomerScreen()
        setTimeout(() => {
          this.hideQRPaymentFromCustomerScreen()
        }, 2000)
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

              errorMessage = `ຈຳນວນສິນຄ້າ: ${product?.pro_name || 'Unknown Product'
                } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${stockError.available
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
              errorMessage = `ຈຳນວນສິນຄ້າ: ${product?.pro_name || ''
                } ມີບໍ່ພຽງພໍໃນສາງ`
            } else {
              errorMessage = errorData
            }
          }
        }

        swalError2(this.$swal, 'Error', errorMessage)
        // ... (Error handling remains the same)
        console.error(error)
      }

      this.isloading = false
    },
    openPrintWindow(htmlContent) {
      if (window.posApi && typeof window.posApi.printReceipt === 'function') {
        const printers = this.findAllprinters || this.$store.state.printers || [];
        const printer = printers.find(p => p.type === 'ticket' && p.is_active) || printers.find(p => p.is_active);
        const printerName = printer?.printer_name || '';
        const paperWidth = this.paperSize || '80mm';
        window.posApi.printReceipt({
          printerName,
          html: htmlContent,
          width: paperWidth
        });
        return;
      }

      try {
        const printWindow = window.open('', '_blank', 'width=800,height=600')

        if (!printWindow) {
          this.showError(
            'Unable to open print window. Please check popup blocker settings.'
          )
          return
        }

        printWindow.document.open()
        printWindow.document.write(htmlContent)
        printWindow.document.close()

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print()
              setTimeout(() => {
                printWindow.close()
              }, 100)
            } catch (e) {
              console.error('Print error:', e)
              printWindow.close()
            }
          }, 500)
        }

        // Fallback check
        setTimeout(() => {
          if (printWindow && !printWindow.closed) {
            try {
              printWindow.print()
            } catch (e) { }
          }
        }, 1000)
      } catch (error) {
        console.error('Error creating print window:', error)
        this.showError('Failed to generate print document')
      }
    },
    generatePrintViewDeliveryCustomer() {
      console.log('🚚 Printing Delivery Customer Ticket via Ticket.js Module')

      // Call the centralized module function
      deliveryCustomerTicket({
        onlineCustomerInfo: this.onlineCustomerInfo,
        productCart: this.productCart,
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: this.discount,
        grandTotal: this.grandTotal,
        currencyList: this.findAllCurrency,
        ticketCommon: this.ticketCommon,
        paperWidth: this.paperSize,
        printers: this.findAllprinters, // Ensure you pass the printers for Electron logic
      })
    },

    formatNumber(val) {
      return getFormatNum(val)
    },

    /**
     * Calculates the tax amount for a single sale line item.
     * Handles both Inclusive (INC) and Exclusive (EXC) tax types.
     */
    calculateLineTaxAmount(item) {
      if (!item.tax) return 0

      const qty = parseFloat(item.qty) || 0
      const price = parseFloat(item.localPrice) || 0
      const taxRate = parseFloat(item.tax.rate || 0) // Expecting decimal (e.g., 0.1 for 10%) or percentage
      const taxType = item.tax.taxType || 'INC'

      const lineSubtotal = qty * price

      // Determination: If taxRate is > 1 it's likely a percentage (e.g. 10 instead of 0.1)
      const normalizedRate = taxRate > 1 ? taxRate / 100 : taxRate

      if (taxType === 'EXC') {
        // Exclusive: Tax is added on top of the price
        return lineSubtotal * normalizedRate
      } else {
        // Inclusive: Price already contains the tax
        // Formula: Tax = Total - (Total / (1 + Rate))
        return lineSubtotal - lineSubtotal / (1 + normalizedRate)
      }
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
            `📁 Category ID will be: ${this.categoryList[this.selectedItem]['categ_id']
            }`
          )
        })
        .catch((er) => {
          console.log('error: ' + er.response.data)
        })
      this.isLoading = false
    },


    async loadCustomer() {
      this.addCustomer(this.findAllClient[0])
    },

    newOrder() {
      this.pendingSaleHeaderId = null
      this.clearCart()
      this.discount = 0
      this.cashReceived = 0

      // PERFORMANCE OPTIMIZATION: Clear cache and update customer screen
      this.productLookupCache.clear()
      this.saleHeader.qrRequestId = null
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

/* Variant Dialog Styles */
.color-swatch-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 8px 4px;
}

.color-swatch-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
  width: 64px;
}

.color-swatch-item:hover {
  transform: translateY(-2px);
}

.color-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.color-swatch-item.selected .color-circle {
  transform: scale(1.08);
  border-color: var(--v-primary-base);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15), 0 0 0 3px rgba(var(--v-primary-base-rgb), 0.3);
}

.swatch-check {
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  background-color: rgba(0,0,0,0.25);
  border-radius: 50%;
  padding: 2px;
}

.color-name {
  font-size: 11px;
  margin-top: 6px;
  color: #555;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.size-chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px 4px;
}

.qty-adjuster {
  display: flex;
  align-items: center;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  overflow: hidden;
  max-width: 150px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
}

.qty-adjuster button {
  width: 42px;
  height: 40px;
  background: #f8f9fa;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-adjuster button:hover:not(:disabled) {
  background-color: #e9ecef;
}

.qty-adjuster button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qty-adjuster input {
  width: 50px;
  height: 40px;
  text-align: center;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  background: white;
}

/* Chrome, Safari, Edge, Opera */
.qty-adjuster input::-webkit-outer-spin-button,
.qty-adjuster input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.qty-adjuster input[type=number] {
  -moz-appearance: textfield;
}

/* Stock status color-code indicator preview inside checkout */
.color-preview-tiny {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    display: inline-block;
    vertical-align: middle;
}
</style>