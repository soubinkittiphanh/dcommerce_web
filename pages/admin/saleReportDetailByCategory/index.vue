<template>
  <div class="sales-report-container">
    <!-- MODERNIZED HEADER SECTION -->
    <v-card outlined class="rounded-lg shadow-sm mb-6 header-bar">
      <v-card-title class="pa-4 d-flex align-center grey lighten-5">
        <v-avatar color="primary lighten-5" size="48" class="mr-4">
          <v-icon color="primary">mdi-shape-outline</v-icon>
        </v-avatar>
        <div class="d-flex flex-column">
          <span class="text-h6 font-weight-bold grey--text text--darken-3">Category Sales Report</span>
          <span class="caption grey--text">ລາຍງານການຂາຍລະອຽດຕາມໝວດໝູ່ສິນຄ້າ</span>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <v-btn color="info" dark @click="printA4" depressed small class="mr-2 action-btn">
            <v-icon left small>mdi-printer</v-icon>ພິມ A4 (Print)
          </v-btn>
          <v-btn color="primary" @click="createSale" depressed small class="mr-2 action-btn">
            <v-icon left small>mdi-plus</v-icon>ສ້າງການຂາຍ
          </v-btn>
          <v-menu offset-y left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="secondary" outlined small v-bind="attrs" v-on="on" class="action-btn">
                <v-icon left small>mdi-export</v-icon>ສົ່ງອອກລາຍງານ
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item @click="exportToExcel">
                <v-list-item-icon><v-icon color="success">mdi-microsoft-excel</v-icon></v-list-item-icon>
                <v-list-item-title>Excel Report</v-list-item-title>
              </v-list-item>
              <v-list-item @click="exportAuditReport">
                <v-list-item-icon><v-icon color="warning">mdi-file-chart</v-icon></v-list-item-icon>
                <v-list-item-title>Audit Excel</v-list-item-title>
              </v-list-item>
              <v-list-item @click="exportSimplePDFReport">
                <v-list-item-icon><v-icon color="info">mdi-file-pdf</v-icon></v-list-item-icon>
                <v-list-item-title>PDF Summary</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn icon color="secondary" class="ml-2" @click="guidelineDialog = true">
            <v-icon>mdi-help-circle-outline</v-icon>
          </v-btn>
        </div>
      </v-card-title>
    </v-card>

    <!-- DIALOGS -->
    <v-dialog v-model="isloading" hide-overlay persistent width="320">
      <v-card class="loading-card">
        <v-card-text class="text-center pa-6">
          <v-progress-circular size="48" color="primary" indeterminate></v-progress-circular>
          <div class="mt-4 font-weight-medium">ກຳລັງໂຫຼດຂໍ້ມູນ...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM">
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD
        @reload="loadData(); dialogOrderDetail = false"
        :is-quotation="false"
        :key="componentKey"
        :is-update="viewTransaction"
        :headerId="selectedOrder"
        @close-dialog="dialogOrderDetail = false"
      >
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form
        :id="OrderIdSelected"
        :key="componentCancelFormKey"
        @close-dialog="cancelForm = false"
        @reload="cancelForm = false; loadData()"
      ></cancel-ticket-form>
    </v-dialog>

    <!-- Category Products Detail Dialog -->
    <v-dialog v-model="categoryDetailDialog" max-width="900">
      <v-card class="rounded-xl overflow-hidden" v-if="selectedCategory">
        <v-card-title class="primary white--text pa-4">
          <v-icon left color="white">mdi-shape</v-icon>
          ລາຍການສິນຄ້າໃນໝວດ: {{ selectedCategory.categoryName }} ({{ selectedCategory.products ? selectedCategory.products.length : 0 }} ລາຍການ)
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="categoryDetailDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-4">
          <v-data-table
            :headers="productHeaders"
            :items="selectedCategory.products || []"
            dense
            :items-per-page="10"
            class="inner-table"
          >
            <template v-slot:[`item.totalQTY`]="{ item }">
              <v-chip x-small :color="getQuantityColor(item.totalQTY)" dark label>{{ item.totalQTY }}</v-chip>
            </template>
            <template v-slot:[`item.avgPrice`]="{ item }">
              <span class="font-weight-bold">{{ numberWithCommas(Math.round(item.totalPriceLocal / (item.totalQTY || 1))) }}</span>
            </template>
            <template v-slot:[`item.totalDiscountLocal`]="{ item }">
              <span class="warning--text font-weight-bold">{{ numberWithCommas(item.totalDiscountLocal) }}</span>
            </template>
            <template v-slot:[`item.totalAmountLocal`]="{ item }">
              <span class="success--text font-weight-black">{{ numberWithCommas(item.totalAmountLocal) }}</span>
            </template>
          </v-data-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-4 grey lighten-5 justify-space-between">
          <span class="caption grey--text">ໝວດໝູ່ ID: #{{ selectedCategory.categoryId }}</span>
          <v-btn color="primary" outlined small @click="categoryDetailDialog = false">ປິດ (Close)</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- COMPACT FILTER STRIP -->
    <v-card outlined class="rounded-lg shadow-sm mb-6">
      <v-card-text class="pa-4 grey lighten-4">
        <v-row dense class="align-center">
          <v-col cols="12" md="2">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted"
                  label="From"
                  prepend-inner-icon="mdi-calendar-start"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  dense
                  hide-details
                  readonly
                  class="white-input"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="2">
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted2"
                  label="To"
                  prepend-inner-icon="mdi-calendar-end"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  dense
                  hide-details
                  readonly
                  class="white-input"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="3">
            <v-autocomplete
              v-model="creteria.categoryId"
              :items="categoryList"
              item-text="categ_name"
              item-value="categ_id"
              label="Category (ໝວດໝູ່)"
              prepend-inner-icon="mdi-shape"
              outlined
              dense
              hide-details
              clearable
              class="white-input"
              @change="loadData"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="search"
              label="Search categories, products..."
              prepend-inner-icon="mdi-magnify"
              outlined
              dense
              hide-details
              clearable
              class="white-input"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="1" class="text-right">
            <v-btn color="primary" icon @click="loadData" :loading="isloading" class="elevation-1 white">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>

    <!-- MODERN SUMMARY DASHBOARD -->
    <v-row class="mb-4">
      <!-- Active Sales Breakdown -->
      <v-col cols="12" md="4">
        <v-card outlined class="rounded-lg shadow-sm h-100">
          <v-card-title class="pa-3 grey lighten-5 caption font-weight-bold d-flex align-center">
            <v-icon left color="success" small>mdi-cash-check</v-icon>
            ACTIVE SALES SUMMARY
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-4">
            <div class="text-h5 font-weight-black success--text mb-4">
              {{ formatNumber(salesStatistics[0].totalLocal) }}
              <small class="caption grey--text">{{ localCurrency?.code }}</small>
            </div>
            <div class="currency-breakdown-container">
              <div
                v-for="(val, code) in salesStatistics[0].groupedCurrency"
                :key="code"
                class="breakdown-row pa-2 mb-2 rounded grey lighten-5 border"
              >
                <div class="d-flex justify-space-between align-center">
                  <span class="caption font-weight-bold">{{ code }}</span>
                  <span class="caption font-weight-black">{{ formatNumber(val.original) }}</span>
                </div>
                <div v-if="code !== localCurrency?.code" class="text-right grey--text" style="font-size: 0.65rem;">
                  ≈ {{ formatNumber(val.local) }} {{ localCurrency?.code }}
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Key Metrics Grid -->
      <v-col cols="12" md="8">
        <v-row dense>
          <v-col cols="6" sm="3">
            <v-card outlined class="metric-card pa-3 text-center rounded-lg h-100">
              <v-icon color="primary" class="mb-2">mdi-shape</v-icon>
              <div class="text-h6 font-weight-bold">{{ activeOrderHeaderList.length }}</div>
              <div class="caption grey--text font-weight-bold">Category Lines</div>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card outlined class="metric-card pa-3 text-center rounded-lg h-100">
              <v-icon color="success" class="mb-2">mdi-cart-arrow-down</v-icon>
              <div class="text-h6 font-weight-bold">{{ getTotalQuantity() }}</div>
              <div class="caption grey--text font-weight-bold">Total QTY</div>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card outlined class="metric-card pa-3 text-center rounded-lg h-100">
              <v-icon color="warning" class="mb-2">mdi-sale</v-icon>
              <div class="text-h6 font-weight-bold">{{ numberWithCommas(totalDiscount) }}</div>
              <div class="caption grey--text font-weight-bold">Total Discount</div>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card outlined class="metric-card pa-3 text-center rounded-lg h-100">
              <v-icon color="secondary" class="mb-2">mdi-finance</v-icon>
              <div class="text-h6 font-weight-bold">{{ numberWithCommas(totalSale - totalDiscount) }}</div>
              <div class="caption grey--text font-weight-bold">Net Revenue</div>
            </v-card>
          </v-col>

          <v-col cols="12" class="mt-2">
            <v-card outlined class="pa-4 rounded-lg grey lighten-5 d-flex align-center justify-space-around">
              <div class="text-center">
                <div class="caption grey--text font-weight-bold">Avg Price</div>
                <div class="text-subtitle-1 font-weight-black primary--text">{{ getAveragePrice() }}</div>
              </div>
              <v-divider vertical class="mx-4"></v-divider>
              <div class="text-center">
                <div class="caption grey--text font-weight-bold">Avg Discount</div>
                <div class="text-subtitle-1 font-weight-black warning--text">{{ getAverageDiscount() }}%</div>
              </div>
              <v-divider vertical class="mx-4"></v-divider>
              <div class="text-center">
                <div class="caption grey--text font-weight-bold">Avg Rev / Category</div>
                <div class="text-subtitle-1 font-weight-black success--text">{{ getAverageRevenue() }}</div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- SALES DETAILS TABLE -->
    <v-card outlined class="rounded-lg shadow-sm">
      <v-card-title class="pa-4 grey lighten-5 caption font-weight-bold d-flex align-center">
        <v-icon left color="primary" small>mdi-format-list-bulleted</v-icon>
        DETAILED CATEGORY SALES
        <v-spacer></v-spacer>
        <v-chip color="primary lighten-5" small label text-color="primary" class="font-weight-bold">
          {{ activeOrderHeaderList.length }} CATEGORIES FOUND
        </v-chip>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        v-if="activeOrderHeaderList"
        :headers="enhancedHeaders"
        :search="search"
        :items="activeOrderHeaderList"
        :items-per-page="50"
        show-expand
        single-expand
        item-key="categoryId"
        dense
        class="compact-table"
      >
        <!-- Expanded Category Products Slot -->
        <template #expanded-item="{ headers: tableHeaders, item }">
          <td :colspan="tableHeaders.length" class="expanded-row-cell pa-4">
            <v-card flat outlined class="rounded-lg">
              <v-card-title class="subtitle-2 font-weight-bold py-2 px-4 grey lighten-4 d-flex align-center">
                <v-icon left small color="primary">mdi-package-variant-closed</v-icon>
                ລາຍການສິນຄ້າໃນໝວດ: {{ item.categoryName }} ({{ item.products ? item.products.length : 0 }} ລາຍການ)
              </v-card-title>
              <v-divider></v-divider>
              <v-data-table
                :headers="productHeaders"
                :items="item.products || []"
                dense
                hide-default-footer
                :items-per-page="-1"
                class="inner-table"
              >
                <template v-slot:[`item.totalQTY`]="{ item: prodItem }">
                  <v-chip x-small :color="getQuantityColor(prodItem.totalQTY)" dark label>{{ prodItem.totalQTY }}</v-chip>
                </template>
                <template v-slot:[`item.avgPrice`]="{ item: prodItem }">
                  <span>{{ numberWithCommas(Math.round(prodItem.totalPriceLocal / (prodItem.totalQTY || 1))) }}</span>
                </template>
                <template v-slot:[`item.totalDiscountLocal`]="{ item: prodItem }">
                  <span class="warning--text font-weight-bold">{{ numberWithCommas(prodItem.totalDiscountLocal) }}</span>
                </template>
                <template v-slot:[`item.totalAmountLocal`]="{ item: prodItem }">
                  <span class="success--text font-weight-bold">{{ numberWithCommas(prodItem.totalAmountLocal) }}</span>
                </template>
              </v-data-table>
            </v-card>
          </td>
        </template>

        <!-- Category Row Columns -->
        <template v-slot:[`item.categoryId`]="{ item }">
          <span class="caption grey--text font-weight-bold">#{{ item.categoryId }}</span>
        </template>
        <template v-slot:[`item.categoryName`]="{ item }">
          <div class="d-flex flex-column py-1">
            <span class="text-body-2 font-weight-bold">{{ item.categoryName || 'ບໍ່ມີໝວດໝູ່' }}</span>
            <span class="caption grey--text">{{ item.productCount }} ລາຍການສິນຄ້າ</span>
          </div>
        </template>
        <template v-slot:[`item.productCount`]="{ item }">
          <v-chip small color="info lighten-5" class="info--text font-weight-bold" label>
            {{ item.productCount }} ລາຍການ
          </v-chip>
        </template>
        <template v-slot:[`item.totalQTY`]="{ item }">
          <v-chip x-small :color="getQuantityColor(item.totalQTY)" dark label>{{ item.totalQTY }}</v-chip>
        </template>
        <template v-slot:[`item.totalPriceLocal`]="{ item }">
          <span class="font-weight-bold">{{ numberWithCommas(Math.round(item.totalPriceLocal / (item.totalQTY || 1))) }}</span>
        </template>
        <template v-slot:[`item.totalDiscountLocal`]="{ item }">
          <span class="warning--text font-weight-bold">{{ numberWithCommas(item.totalDiscountLocal) }}</span>
        </template>
        <template v-slot:[`item.totalAmountLocal`]="{ item }">
          <span class="success--text font-weight-black">{{ numberWithCommas(item.totalAmountLocal) }}</span>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn icon x-small color="info" @click="viewCategoryDetails(item)" title="View Products">
            <v-icon x-small>mdi-eye</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- CANCELED SECTION - COMPACT TOGGLE -->
    <v-expansion-panels flat class="mt-4">
      <v-expansion-panel class="rounded-lg border shadow-sm">
        <v-expansion-panel-header class="grey lighten-5 py-2">
          <div class="d-flex align-center">
            <v-icon left color="error" small>mdi-cancel</v-icon>
            <span class="caption font-weight-bold error--text">
              CANCELED CATEGORIES ({{ canceledOrderHeaderList.length }})
            </span>
            <v-spacer></v-spacer>
            <span class="caption grey--text mr-4">
              Total impact: {{ formatNumber(canceledStatistics[0].totalLocal) }} {{ localCurrency?.code }}
            </span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-0">
          <v-data-table
            :headers="enhancedHeaders"
            :items="canceledOrderHeaderList"
            dense
            class="compact-table no-shadow"
          >
            <template v-slot:[`item.totalAmountLocal`]="{ item }">
              <span class="grey--text font-weight-bold">{{ numberWithCommas(item.totalAmountLocal) }}</span>
            </template>
          </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
  swalSuccess,
  swalError2,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common/index'
import { mainCompanyInfo } from '~/common/api'
import { generateCategorySalesReportHTML } from '~/common/printTemplates'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'

export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      guidelineDialog: false,
      viewTransaction: false,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      valid: true,
      name: '',
      search: '',
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',
      categoryList: [],
      selectedCategory: null,
      categoryDetailDialog: false,
      creteria: {
        categoryId: -1,
      },
      enhancedHeaders: [
        {
          text: 'ລະຫັດໝວດ',
          align: 'center',
          value: 'categoryId',
          sortable: true,
        },
        {
          text: 'ໝວດໝູ່ສິນຄ້າ',
          align: 'left',
          value: 'categoryName',
          sortable: true,
        },
        {
          text: 'ຈຳນວນສິນຄ້າ',
          align: 'center',
          value: 'productCount',
          sortable: true,
        },
        {
          text: 'ຈຳນວນຂາຍ',
          align: 'center',
          value: 'totalQTY',
          sortable: true,
        },
        { text: 'ລາຄາສະເລ່ຍ/ໜ່ວຍ', align: 'right', value: 'totalPriceLocal', sortable: true },
        { text: 'ສ່ວນຫຼຸດ', align: 'right', value: 'totalDiscountLocal', sortable: true },
        { text: 'ລວມສຸດທິ', align: 'right', value: 'totalAmountLocal', sortable: true },
        { text: 'ລາຍລະອຽດ', value: 'data-table-expand', align: 'center', sortable: false },
        {
          text: 'ຈັດການ',
          align: 'center',
          value: 'actions',
          sortable: false,
        },
      ],
      productHeaders: [
        { text: 'ID ສິນຄ້າ', value: 'productId', align: 'center' },
        { text: 'ຊື່ສິນຄ້າ (Product Name)', value: 'productName', align: 'left' },
        { text: 'ຈຳນວນຂາຍ (QTY)', value: 'totalQTY', align: 'center' },
        { text: 'ລາຄາສະເລ່ຍ (Avg Price)', value: 'avgPrice', align: 'right' },
        { text: 'ສ່ວນຫຼຸດ (Discount)', value: 'totalDiscountLocal', align: 'right' },
        { text: 'ຍອດຂາຍລວມ (Total Sales)', value: 'totalAmountLocal', align: 'right' },
      ],
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },

  async created() {
    await this.loadCategories()
    await this.loadData()
  },

  watch: {
    isedit(v) {
      if (!v) this.form_data.cus_id = '1XXX'
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadData()
    },
  },

  computed: {
    ...mapGetters([
      'findAllCurrency',
      'currentSelectedLocation',
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllTerminal',
      'findSelectedTerminal',
    ]),

    localCurrency() {
      return this.findAllCurrency?.find(c => c.isLocalCCY === true || c.isLocalCCY === 1);
    },

    categoryMapLookup() {
      const map = new Map();
      if (Array.isArray(this.categoryList)) {
        this.categoryList.forEach(c => {
          const id = c.categ_id ?? c.id;
          if (id !== undefined && id !== null && id !== -1 && id !== '-1') {
            map.set(String(id), c);
            map.set(Number(id), c);
          }
        });
      }
      return map;
    },

    activeOrderHeaderList() {
      const categoryMap = {};

      this.orderHeaderList.forEach((order) => {
        if (!order.isActive) return;
        if (order.status?.toLowerCase() === 'cancel' || order.status?.toLowerCase() === 'canceled') return;

        const searchMatchesOrder = !this.search ||
          order.orderNumber?.toLowerCase().includes(this.search.toLowerCase()) ||
          order.customerName?.toLowerCase().includes(this.search.toLowerCase());

        order.lines?.forEach((line) => {
          if (!line.product) return;

          const { categoryId, categoryName, categoryObj } = this.getCategoryForProduct(line.product);

          // Apply Category Filter Selection
          if (this.creteria.categoryId !== undefined && this.creteria.categoryId !== null && this.creteria.categoryId !== -1 && this.creteria.categoryId !== '-1') {
            if (String(categoryId) !== String(this.creteria.categoryId) && Number(categoryId) !== Number(this.creteria.categoryId)) {
              return;
            }
          }

          // Search Filter (on category name or product name/code/barcode)
          const searchMatchesLine = searchMatchesOrder ||
            String(categoryId).toLowerCase().includes(this.search.toLowerCase()) ||
            categoryName.toLowerCase().includes(this.search.toLowerCase()) ||
            (line.product.pro_name && line.product.pro_name.toLowerCase().includes(this.search.toLowerCase())) ||
            (line.product.barCode && line.product.barCode.toLowerCase().includes(this.search.toLowerCase())) ||
            (line.product.product_code && line.product.product_code.toLowerCase().includes(this.search.toLowerCase()));

          if (!searchMatchesLine) return;

          const lineCurrency = this.findAllCurrency?.find(c => c.id === line.currencyId);
          const isLocal = lineCurrency?.isLocalCCY === true || lineCurrency?.isLocalCCY === 1;
          const rate = isLocal ? 1 : (line.exchangeRate || 1);

          if (!categoryMap[categoryId]) {
            categoryMap[categoryId] = {
              categoryId,
              categoryName,
              category: categoryObj,
              bookingDate: order.bookingDate,
              totalQTY: 0,
              totalPriceLocal: 0,
              totalDiscountLocal: 0,
              totalAmountLocal: 0,
              productsMap: {},
              currencySummaries: {},
            };
          }

          const qty = line.quantity || 0;
          const lineTotal = (line.price * qty);
          const cCode = lineCurrency?.code || (this.localCurrency?.code || 'LAK');

          if (!categoryMap[categoryId].currencySummaries[cCode]) {
            categoryMap[categoryId].currencySummaries[cCode] = { original: 0, local: 0 };
          }

          categoryMap[categoryId].totalQTY += qty;
          categoryMap[categoryId].totalPriceLocal += (lineTotal * rate);
          categoryMap[categoryId].totalDiscountLocal += ((line.discount || 0) * rate);
          categoryMap[categoryId].totalAmountLocal += ((line.total || 0) * rate);

          categoryMap[categoryId].currencySummaries[cCode].original += lineTotal;
          categoryMap[categoryId].currencySummaries[cCode].local += (lineTotal * rate);

          // Track products under this category
          const productId = line.product.id || line.product.pro_id;
          if (!categoryMap[categoryId].productsMap[productId]) {
            categoryMap[categoryId].productsMap[productId] = {
              productId,
              productName: line.product.pro_name || 'ບໍ່ມີຊື່',
              product: line.product,
              totalQTY: 0,
              totalPriceLocal: 0,
              totalDiscountLocal: 0,
              totalAmountLocal: 0,
            };
          }

          const prod = categoryMap[categoryId].productsMap[productId];
          prod.totalQTY += qty;
          prod.totalPriceLocal += (lineTotal * rate);
          prod.totalDiscountLocal += ((line.discount || 0) * rate);
          prod.totalAmountLocal += ((line.total || 0) * rate);
        });
      });

      return Object.values(categoryMap).map(cat => {
        const productsList = Object.values(cat.productsMap).sort((a, b) => b.totalQTY - a.totalQTY);
        return {
          ...cat,
          products: productsList,
          productCount: productsList.length,
        };
      }).sort((a, b) => b.totalAmountLocal - a.totalAmountLocal);
    },

    canceledOrderHeaderList() {
      const categoryMap = {};

      this.orderHeaderList.forEach((order) => {
        if (order.isActive && order.status?.toLowerCase() !== 'cancel' && order.status?.toLowerCase() !== 'canceled') return;

        const searchMatchesOrder = !this.search ||
          order.orderNumber?.toLowerCase().includes(this.search.toLowerCase());

        order.lines?.forEach((line) => {
          if (!line.product) return;

          const { categoryId, categoryName, categoryObj } = this.getCategoryForProduct(line.product);

          if (this.creteria.categoryId !== undefined && this.creteria.categoryId !== null && this.creteria.categoryId !== -1 && this.creteria.categoryId !== '-1') {
            if (String(categoryId) !== String(this.creteria.categoryId) && Number(categoryId) !== Number(this.creteria.categoryId)) {
              return;
            }
          }

          const searchMatchesLine = searchMatchesOrder ||
            String(categoryId).toLowerCase().includes(this.search.toLowerCase()) ||
            categoryName.toLowerCase().includes(this.search.toLowerCase()) ||
            (line.product.pro_name && line.product.pro_name.toLowerCase().includes(this.search.toLowerCase()));

          if (!searchMatchesLine) return;

          const lineCurrency = this.findAllCurrency?.find(c => c.id === line.currencyId);
          const isLocal = lineCurrency?.isLocalCCY === true || lineCurrency?.isLocalCCY === 1;
          const rate = isLocal ? 1 : (line.exchangeRate || 1);

          if (!categoryMap[categoryId]) {
            categoryMap[categoryId] = {
              categoryId,
              categoryName,
              category: categoryObj,
              bookingDate: order.bookingDate,
              totalQTY: 0,
              totalPriceLocal: 0,
              totalDiscountLocal: 0,
              totalAmountLocal: 0,
              productsMap: {},
              currencySummaries: {},
            };
          }

          const qty = line.quantity || 0;
          const lineTotal = (line.price * qty);
          const cCode = lineCurrency?.code || (this.localCurrency?.code || 'LAK');

          if (!categoryMap[categoryId].currencySummaries[cCode]) {
            categoryMap[categoryId].currencySummaries[cCode] = { original: 0, local: 0 };
          }

          categoryMap[categoryId].totalQTY += qty;
          categoryMap[categoryId].totalPriceLocal += (lineTotal * rate);
          categoryMap[categoryId].totalDiscountLocal += ((line.discount || 0) * rate);
          categoryMap[categoryId].totalAmountLocal += ((line.total || 0) * rate);

          categoryMap[categoryId].currencySummaries[cCode].original += lineTotal;
          categoryMap[categoryId].currencySummaries[cCode].local += (lineTotal * rate);

          const productId = line.product.id || line.product.pro_id;
          if (!categoryMap[categoryId].productsMap[productId]) {
            categoryMap[categoryId].productsMap[productId] = {
              productId,
              productName: line.product.pro_name || 'ບໍ່ມີຊື່',
              product: line.product,
              totalQTY: 0,
              totalPriceLocal: 0,
              totalDiscountLocal: 0,
              totalAmountLocal: 0,
            };
          }

          const prod = categoryMap[categoryId].productsMap[productId];
          prod.totalQTY += qty;
          prod.totalPriceLocal += (lineTotal * rate);
          prod.totalDiscountLocal += ((line.discount || 0) * rate);
          prod.totalAmountLocal += ((line.total || 0) * rate);
        });
      });

      return Object.values(categoryMap).map(cat => {
        const productsList = Object.values(cat.productsMap).sort((a, b) => b.totalQTY - a.totalQTY);
        return {
          ...cat,
          products: productsList,
          productCount: productsList.length,
        };
      });
    },

    salesStatistics() {
      const grouped = { totalLocal: 0, count: this.activeOrderHeaderList.length, groupedCurrency: {} };

      this.activeOrderHeaderList.forEach(item => {
        for (const [code, val] of Object.entries(item.currencySummaries)) {
          if (!grouped.groupedCurrency[code]) {
            grouped.groupedCurrency[code] = { original: 0, local: 0 };
          }
          grouped.groupedCurrency[code].original += val.original;
          grouped.groupedCurrency[code].local += val.local;
          grouped.totalLocal += val.local;
        }
      });

      return [grouped];
    },

    canceledStatistics() {
      const grouped = { totalLocal: 0, count: this.canceledOrderHeaderList.length, groupedCurrency: {} };

      this.canceledOrderHeaderList.forEach(item => {
        for (const [code, val] of Object.entries(item.currencySummaries)) {
          if (!grouped.groupedCurrency[code]) {
            grouped.groupedCurrency[code] = { original: 0, local: 0 };
          }
          grouped.groupedCurrency[code].original += val.original;
          grouped.groupedCurrency[code].local += val.local;
          grouped.totalLocal += val.local;
        }
      });

      return [grouped];
    },

    currencyList() {
      return this.findAllCurrency
    },

    totalSale() {
      return this.activeOrderHeaderList.reduce((sum, item) => sum + (item.totalAmountLocal || 0), 0);
    },

    totalSaleRaw() {
      return this.totalSale + this.totalDiscount;
    },

    user() {
      return this.$auth.user || ''
    },

    totalDiscount() {
      return this.activeOrderHeaderList.reduce((sum, item) => sum + (item.totalDiscountLocal || 0), 0);
    },
  },

  methods: {
    formatNumber(val) {
      return new Intl.NumberFormat().format(Math.round(val || 0));
    },

    numberWithCommas(value) {
      return getFormatNum(value);
    },

    getCategoryForProduct(product) {
      if (!product) {
        return {
          categoryId: 'uncategorized',
          categoryName: 'ບໍ່ມີໝວດໝູ່ (No Category)',
          categoryObj: null,
        };
      }

      // 1. Check direct product category field: pro_category, categoryCategId, categoryId, etc.
      const catId = product.pro_category ??
        product.categoryCategId ??
        product.categoryId ??
        product.category_id ??
        (product.category ? (product.category.categ_id ?? product.category.id) : null);

      let categoryId = 'uncategorized';
      let categoryName = 'ບໍ່ມີໝວດໝູ່ (No Category)';
      let categoryObj = null;

      if (catId !== null && catId !== undefined && catId !== '') {
        categoryId = catId;
        const foundCategory = this.categoryMapLookup.get(String(catId)) || this.categoryMapLookup.get(Number(catId));
        if (foundCategory) {
          categoryName = foundCategory.categ_name || foundCategory.name || `ໝວດ #${catId}`;
          categoryObj = foundCategory;
        } else if (product.categ_name) {
          categoryName = product.categ_name;
        } else if (product.category && (product.category.categ_name || product.category.name)) {
          categoryName = product.category.categ_name || product.category.name;
          categoryObj = product.category;
        } else {
          categoryName = `ໝວດ #${catId}`;
        }
      } else if (product.category && (product.category.categ_name || product.category.name)) {
        categoryName = product.category.categ_name || product.category.name;
        categoryId = product.category.categ_id ?? product.category.id ?? 'uncategorized';
        categoryObj = product.category;
      } else if (product.categ_name) {
        categoryName = product.categ_name;
      }

      return { categoryId, categoryName, categoryObj };
    },

    getTotalQuantity() {
      return this.activeOrderHeaderList.reduce((sum, item) => {
        const quantity = parseInt(item.totalQTY || 0)
        return sum + quantity
      }, 0)
    },

    getAveragePrice() {
      if (this.activeOrderHeaderList.length === 0) return '0'
      const totalQuantity = this.getTotalQuantity()
      if (totalQuantity === 0) return '0'
      const avgPrice = this.totalSaleRaw / totalQuantity
      return this.numberWithCommas(Math.round(avgPrice))
    },

    getAverageDiscount() {
      if (!this.totalSaleRaw || this.totalSaleRaw === 0) return '0'
      return ((this.totalDiscount / this.totalSaleRaw) * 100).toFixed(1)
    },

    getAverageRevenue() {
      if (this.activeOrderHeaderList.length === 0) return '0'
      const avgRevenue = this.totalSale / this.activeOrderHeaderList.length
      return this.numberWithCommas(Math.round(avgRevenue))
    },

    getQuantityColor(quantity) {
      if (quantity >= 100) return 'success'
      if (quantity >= 50) return 'warning'
      if (quantity >= 20) return 'info'
      return 'primary'
    },

    getDiscountPercentage(discount, totalPrice) {
      if (totalPrice === 0) return '0'
      return ((discount / (totalPrice + discount)) * 100).toFixed(1)
    },

    viewCategoryDetails(item) {
      this.selectedCategory = item;
      this.categoryDetailDialog = true;
    },

    printA4() {
      try {
        const companyData = this.$store.getters.findAllCompany?.[0] || mainCompanyInfo() || {}
        if (this.$auth && this.$auth.user) {
          companyData.user = this.$auth.user.cus_name || this.$auth.user.name
        }

        const htmlContent = generateCategorySalesReportHTML(
          this.activeOrderHeaderList,
          companyData,
          this.date,
          this.date2,
          this.localCurrency
        )

        const printWindow = window.open('', '_blank')
        printWindow.document.write(htmlContent)
        printWindow.document.close()

        printWindow.onload = function () {
          printWindow.print()
          printWindow.close()
        }

        setTimeout(() => {
          if (!printWindow.closed) {
            printWindow.print()
          }
        }, 800)

        this.$toast.success('ກຳລັງເປີດໜ້າພິມລາຍງານ A4...')
      } catch (error) {
        console.error('Print A4 error:', error)
        this.$toast.error('ບໍ່ສາມາດພິມລາຍງານໄດ້: ' + error.message)
      }
    },

    exportToExcel() {
      try {
        let exportData = []
        for (const cat of this.activeOrderHeaderList) {
          const avgPrice = cat.totalPriceLocal / (cat.totalQTY || 1)
          const discountPercentage = this.getDiscountPercentage(
            cat.totalDiscountLocal,
            cat.totalPriceLocal
          )

          // Category Summary Row
          exportData.push({
            'ລະຫັດ (ID)': cat.categoryId,
            'ໝວດໝູ່ / ສິນຄ້າ': cat.categoryName,
            'ຈຳນວນລາຍການ': cat.productCount,
            'ຈຳນວນຂາຍ (QTY)': cat.totalQTY,
            'ລາຄາສະເລ່ຍ/ໜ່ວຍ': Math.round(avgPrice),
            'ສ່ວນຫຼຸດ (%)': discountPercentage + '%',
            'ສ່ວນຫຼຸດ (ເງິນ)': cat.totalDiscountLocal,
            'ລວມສຸດທິ': cat.totalAmountLocal,
            'ສະກຸນເງິນ': this.localCurrency?.code || 'LAK',
            'ປະເພດ': 'ໝວດໝູ່ (Category)',
          })

          // Nested Products
          if (cat.products && cat.products.length > 0) {
            cat.products.forEach(p => {
              const pAvgPrice = p.totalPriceLocal / (p.totalQTY || 1)
              const pDiscountPercentage = this.getDiscountPercentage(
                p.totalDiscountLocal,
                p.totalPriceLocal
              )
              exportData.push({
                'ລະຫັດ (ID)': p.productId,
                'ໝວດໝູ່ / ສິນຄ້າ': `   ↳ ${p.productName}`,
                'ຈຳນວນລາຍການ': '',
                'ຈຳນວນຂາຍ (QTY)': p.totalQTY,
                'ລາຄາສະເລ່ຍ/ໜ່ວຍ': Math.round(pAvgPrice),
                'ສ່ວນຫຼຸດ (%)': pDiscountPercentage + '%',
                'ສ່ວນຫຼຸດ (ເງິນ)': p.totalDiscountLocal,
                'ລວມສຸດທິ': p.totalAmountLocal,
                'ສະກຸນເງິນ': this.localCurrency?.code || 'LAK',
                'ປະເພດ': 'ສິນຄ້າ (Product)',
              })
            })
          }
        }

        const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Category Sales Report')
        this.$xlsx.writeFile(workbook, `category_sales_report_${this.date}_to_${this.date2}.xlsx`)
        this.$toast.success('Excel report exported successfully!')
      } catch (error) {
        console.error('Export Excel error:', error)
        this.$toast.error('Could not export to Excel: ' + error.message)
      }
    },

    exportAuditReport() {
      try {
        const auditData = []

        auditData.push({
          'Report Type': 'Category Sales External Audit Report',
          Period: `${this.dateFormatted} - ${this.dateFormatted2}`,
          'Generated On': new Date().toLocaleDateString(),
          'Generated By': this.user?.name || this.user?.cus_name || 'System',
          Location: this.currentSelectedLocation?.name || 'All Locations',
        })

        auditData.push({})
        auditData.push({ 'Report Type': '=== SALES BY CATEGORY ===' })

        this.activeOrderHeaderList.forEach((cat) => {
          auditData.push({
            Category: cat.categoryName,
            'Category ID': cat.categoryId,
            'Product Lines': cat.productCount,
            'Total Quantity': cat.totalQTY,
            'Total Discount': cat.totalDiscountLocal,
            'Net Revenue': cat.totalAmountLocal,
          })
        })

        auditData.push({})
        auditData.push({ 'Report Type': '=== TOP CATEGORIES BY REVENUE ===' })

        const topCategories = [...this.activeOrderHeaderList].sort((a, b) => b.totalAmountLocal - a.totalAmountLocal)
        topCategories.slice(0, 10).forEach((cat) => {
          auditData.push({
            Category: cat.categoryName,
            'Total Quantity': cat.totalQTY,
            'Net Revenue': cat.totalAmountLocal,
          })
        })

        auditData.push({})
        auditData.push({
          'Report Type': '=== SUMMARY ===',
          'Total Categories': this.activeOrderHeaderList.length,
          'Total Quantity Sold': this.getTotalQuantity(),
          'Total Discount': this.totalDiscount,
          'Net Revenue': this.totalSale,
          'Average Discount Rate': this.getAverageDiscount() + '%',
        })

        const worksheet = this.$xlsx.utils.json_to_sheet(auditData)
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Category Audit Report')

        const filename = `category_audit_report_${this.date}_to_${this.date2}.xlsx`
        this.$xlsx.writeFile(workbook, filename)

        this.$toast.success('Category audit report exported successfully!')
      } catch (error) {
        console.error('Error generating audit report:', error)
        this.$toast.error('Error generating audit report: ' + error.message)
      }
    },

    exportSimplePDFReport() {
      try {
        const totalCategories = this.activeOrderHeaderList.length
        const totalItems = this.getTotalQuantity()

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
            .header { text-align: center; border-bottom: 2px solid #0f766e; padding-bottom: 10px; margin-bottom: 20px; }
            .header h2 { color: #0f766e; margin-bottom: 4px; }
            .summary-box { border: 1px solid #ddd; padding: 15px; margin: 10px 0; background-color: #f8fafc; border-radius: 6px; }
            .summary-title { font-weight: bold; font-size: 14px; color: #0f766e; margin-bottom: 10px; }
            .summary-item { margin: 5px 0; font-size: 12px; }
            .section { margin: 20px 0; }
            .section h3 { color: #334155; font-size: 14px; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; }
            .footer { text-align: center; font-size: 11px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 11px; }
            th, td { border: 1px solid #e2e8f0; padding: 8px; text-align: left; }
            th { background-color: #0f766e; color: white; font-weight: bold; }
            tr:nth-child(even) { background-color: #f8fafc; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>CATEGORY SALES AUDIT REPORT</h2>
            <p>Period: ${this.dateFormatted} - ${this.dateFormatted2}</p>
            <p>Generated: ${new Date().toLocaleDateString()}</p>
          </div>

          <div class="summary-box">
            <div class="summary-title">📊 OVERVIEW</div>
            <div class="summary-item">Total Categories: ${totalCategories}</div>
            <div class="summary-item">Total Items Sold: ${totalItems}</div>
            <div class="summary-item">Average Quantity per Category: ${totalCategories > 0 ? (Math.round((totalItems / totalCategories) * 100) / 100) : 0}</div>
            <div class="summary-item">Average Discount Rate: ${this.getAverageDiscount()}%</div>
            <div class="summary-item">Net Revenue: ${this.numberWithCommas(this.totalSale)} ${this.localCurrency?.code || 'LAK'}</div>
          </div>

          <div class="section">
            <h3>📂 SALES BY CATEGORY</h3>
            <table>
              <tr>
                <th>Category</th>
                <th style="text-align: center;">Product Lines</th>
                <th style="text-align: center;">Quantity Sold</th>
                <th style="text-align: right;">Total Discount</th>
                <th style="text-align: right;">Net Revenue (${this.localCurrency?.code || 'LAK'})</th>
              </tr>
              ${this.activeOrderHeaderList.map(cat => `
                <tr>
                  <td><strong>${cat.categoryName}</strong></td>
                  <td style="text-align: center;">${cat.productCount}</td>
                  <td style="text-align: center;">${cat.totalQTY}</td>
                  <td style="text-align: right;">${this.numberWithCommas(cat.totalDiscountLocal)}</td>
                  <td style="text-align: right;"><strong>${this.numberWithCommas(cat.totalAmountLocal)}</strong></td>
                </tr>
              `).join('')}
            </table>
          </div>

          <div class="footer">
            <p><strong>NOTE:</strong> This report contains sales category data for audit purposes</p>
            <p>Generated for external compliance and inventory tracking</p>
          </div>
        </body>
        </html>`

        this.generatePDFFromHTML(htmlContent)
      } catch (error) {
        console.error('Error generating PDF report:', error)
        this.$toast.error('Error generating PDF report: ' + error.message)
      }
    },

    generatePDFFromHTML(htmlContent) {
      if (typeof html2pdf !== 'undefined') {
        const opt = {
          margin: 1,
          filename: `category_audit_summary_${this.date}_to_${this.date2}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        }
        html2pdf().from(htmlContent).set(opt).save()
      } else if (typeof jsPDF !== 'undefined') {
        const doc = new jsPDF()
        doc.setFontSize(16)
        doc.text('CATEGORY SALES AUDIT REPORT', 20, 20)
        doc.setFontSize(12)
        doc.text(`Period: ${this.dateFormatted} - ${this.dateFormatted2}`, 20, 35)
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 45)
        doc.text('OVERVIEW', 20, 65)
        doc.text(`Total Categories: ${this.activeOrderHeaderList.length}`, 20, 75)
        doc.text(`Total Items: ${this.getTotalQuantity()}`, 20, 85)
        doc.save(`category_audit_summary_${this.date}_to_${this.date2}.pdf`)
      } else {
        const printWindow = window.open('', '_blank')
        printWindow.document.write(htmlContent)
        printWindow.document.close()
        printWindow.print()
      }

      this.$toast.success('PDF report generated successfully!')
    },

    createSale() {
      this.componentKey += 1
      this.selectedOrder = 0
      this.viewTransaction = false
      this.dialogOrderDetail = true
    },

    async loadData() {
      this.isloading = true
      const locationId = this.currentSelectedLocation?.id || 1
      const date = {
        startDate: this.date,
        endDate: this.date2,
        locationId: locationId,
      }

      const apiLine = 'api/sale/findByDate'

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })
        this.orderHeaderList = response.data || []
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'Could not load data ' + JSON.stringify(error)
        )
      }

      this.isloading = false
    },

    async loadCategories() {
      this.isloading = true
      try {
        let categories = []
        try {
          const response = await this.$axios.get('/api/category/findAll')
          categories = response.data?.data || response.data || []
        } catch (e) {
          const response = await this.$axios.get('api/category/find')
          categories = response.data?.data || response.data || []
        }

        this.categoryList = (Array.isArray(categories) ? categories : []).map(c => ({
          categ_id: c.categ_id ?? c.id,
          categ_name: c.categ_name ?? c.name ?? `ໝວດ #${c.categ_id || c.id}`,
          ...c
        }))
        this.categoryList.unshift({ categ_id: -1, categ_name: 'ທັງຫມົດ (All)' })
      } catch (error) {
        console.error('Category load error:', error)
        this.categoryList = [{ categ_id: -1, categ_name: 'ທັງຫມົດ (All)' }]
      }
      this.isloading = false
    },

    formatDate(date) {
      if (!date) return null
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0')
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },
  },
}
</script>

<style scoped>
.sales-report-container {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.shadow-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
}

.metric-card {
  transition: all 0.2s ease-in-out;
  border-left: 4px solid var(--v-primary-base) !important;
}

.metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12) !important;
}

.header-bar {
  border-top: 4px solid var(--v-primary-base) !important;
}

.action-btn {
  text-transform: none;
  font-weight: 600;
  border-radius: 6px;
}

.white-input >>> .v-input__control > .v-input__slot {
  background-color: white !important;
}

.currency-breakdown-container {
  max-height: 200px;
  overflow-y: auto;
}

.breakdown-row {
  transition: background 0.2s;
}

.breakdown-row:hover {
  background: #f0f4f8 !important;
}

.compact-table >>> .v-data-table__wrapper {
  border-radius: 0 0 8px 8px;
}

.compact-table >>> thead th {
  background-color: #f8f9fa !important;
  text-transform: uppercase;
  font-size: 0.75rem !important;
  font-weight: bold !important;
  color: #5f6368 !important;
}

.compact-table >>> tbody td {
  font-size: 0.875rem !important;
}

.expanded-row-cell {
  background-color: #fafbfc !important;
}

.inner-table >>> thead th {
  background-color: #f1f3f4 !important;
  font-size: 0.72rem !important;
  font-weight: bold !important;
  color: #475569 !important;
}

.inner-table >>> tbody td {
  font-size: 0.8rem !important;
}

.border {
  border: 1px solid #e0e0e0 !important;
}

/* Scrollbar styling */
.currency-breakdown-container::-webkit-scrollbar {
  width: 4px;
}

.currency-breakdown-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
</style>
