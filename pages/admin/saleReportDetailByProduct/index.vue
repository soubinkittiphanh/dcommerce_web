<template>
  <div>
    <!-- MODERNIZED HEADER SECTION -->
    <v-card outlined class="rounded-lg shadow-sm mb-6 header-bar">
      <v-card-title class="pa-4 d-flex align-center grey lighten-5">
        <v-avatar color="primary lighten-5" size="48" class="mr-4">
          <v-icon color="primary">mdi-package-variant</v-icon>
        </v-avatar>
        <div class="d-flex flex-column">
          <span class="text-h6 font-weight-bold grey--text text--darken-3">Product Sales Report</span>
          <span class=" grey--text">ລາຍງານການຂາຍລະອຽດຕາມສິນຄ້າ</span>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <v-btn color="primary" @click="createSale" depressed small class="mr-2">
            <v-icon left small>mdi-plus</v-icon>ສ້າງການຂາຍ
          </v-btn>
          <v-menu offset-y left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="secondary" outlined small v-bind="attrs" v-on="on">
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
          <div class="mt-4">ກຳລັງໂຫຼດຂໍ້ມູນ...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM">
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD @reload="
        loadData()
      dialogOrderDetail = false
        " :is-quotation="false" :key="componentKey" :is-update="viewTransaction" :headerId="selectedOrder"
        @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="
          cancelForm = false
        loadData()
          "></cancel-ticket-form>
    </v-dialog>

    <!-- ENHANCED MAIN CONTENT -->
    <!-- COMPACT FILTER STRIP -->
    <v-card outlined class="rounded-lg shadow-sm mb-6">
      <v-card-text class="pa-4 grey lighten-4">
        <v-row dense class="align-center">
          <v-col cols="12" md="2">
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
              min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="From" prepend-inner-icon="mdi-calendar-start"
                  v-bind="attrs" v-on="on" outlined dense hide-details readonly></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="2">
            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
              min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="To" prepend-inner-icon="mdi-calendar-end" v-bind="attrs"
                  v-on="on" outlined dense hide-details readonly></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="3">
            <v-autocomplete v-model="creteria.productId" :items="productList" item-text="pro_name" item-value="id"
              label="Product" prepend-inner-icon="mdi-package" outlined dense hide-details clearable
              @change="loadData"></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="search" label="Search report items..." prepend-inner-icon="mdi-magnify" outlined
              dense hide-details clearable></v-text-field>
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
          <v-card-title class="pa-3 grey lighten-5  font-weight-bold d-flex align-center">
            <v-icon left color="success" small>mdi-cash-check</v-icon>
            ACTIVE SALES SUMMARY
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-4">
            <div class=" font-weight-black success--text mb-4">{{ formatNumber(salesStatistics[0].totalLocal) }}
              <small class=" grey--text">{{ localCurrency?.code }}</small>
            </div>
            <div class="currency-breakdown-container">
              <div v-for="(val, code) in salesStatistics[0].groupedCurrency" :key="code"
                class="breakdown-row pa-2 mb-2 rounded grey lighten-5 border">
                <div class="d-flex justify-space-between align-center">
                  <span class=" font-weight-bold">{{ code }}</span>
                  <span class=" font-weight-black">{{ formatNumber(val.original) }}</span>
                </div>
                <div v-if="code !== localCurrency?.code" class="text-right grey--text" style="font-size: 0.65rem;">≈ {{
                  formatNumber(val.local) }} {{ localCurrency?.code }}</div>
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
              <v-icon color="primary" class="mb-2">mdi-package-variant</v-icon>
              <div class="text-h6 font-weight-bold">{{ activeOrderHeaderList.length }}</div>
              <div class=" grey--text font-weight-bold">Product Lines</div>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card outlined class="metric-card pa-3 text-center rounded-lg h-100">
              <v-icon color="success" class="mb-2">mdi-cart-arrow-down</v-icon>
              <div class="text-h6 font-weight-bold">{{ getTotalQuantity() }}</div>
              <div class=" grey--text font-weight-bold">Total QTY</div>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card outlined class="metric-card pa-3 text-center rounded-lg h-100">
              <v-icon color="warning" class="mb-2">mdi-sale</v-icon>
              <div class="text-h6 font-weight-bold">{{ numberWithCommas(totalDiscount) }}</div>
              <div class=" grey--text font-weight-bold">Total Discount</div>
            </v-card>
          </v-col>
          <v-col cols="6" sm="3">
            <v-card outlined class="metric-card pa-3 text-center rounded-lg h-100">
              <v-icon color="secondary" class="mb-2">mdi-finance</v-icon>
              <div class="text-h6 font-weight-bold">{{ numberWithCommas(totalSale - totalDiscount) }}</div>
              <div class=" grey--text font-weight-bold">Net Revenue</div>
            </v-card>
          </v-col>

          <v-col cols="12" class="mt-2">
            <v-card outlined class="pa-4 rounded-lg grey lighten-5 d-flex align-center justify-space-around">
              <div class="text-center">
                <div class=" grey--text font-weight-bold">Avg Price</div>
                <div class="text-subtitle-1 font-weight-black primary--text">{{ getAveragePrice() }}</div>
              </div>
              <v-divider vertical class="mx-4"></v-divider>
              <div class="text-center">
                <div class=" grey--text font-weight-bold">Avg Discount</div>
                <div class="text-subtitle-1 font-weight-black warning--text">{{ getAverageDiscount() }}%</div>
              </div>
              <v-divider vertical class="mx-4"></v-divider>
              <div class="text-center">
                <div class=" grey--text font-weight-bold">Avg Rev / Item</div>
                <div class="text-subtitle-1 font-weight-black success--text">{{ getAverageRevenue() }}</div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- SALES DETAILS TABLE -->
    <v-card outlined class="rounded-lg shadow-sm">
      <v-card-title class="pa-4 grey lighten-5  font-weight-bold d-flex align-center">
        <v-icon left color="primary" small>mdi-format-list-bulleted</v-icon>
        DETAILED PRODUCT SALES
        <v-spacer></v-spacer>
        <v-chip color="primary lighten-5" small label text-color="primary" class="font-weight-bold">
          {{ activeOrderHeaderList.length }} ITEMS FOUND
        </v-chip>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table v-if="activeOrderHeaderList" :headers="enhancedHeaders" :search="search"
        :items="activeOrderHeaderList" :items-per-page="50" dense class="compact-table">
        <template v-slot:[`item.bookingDate`]="{ item }">
          <span class=" grey--text font-weight-bold">{{ getBookingDate(item) }}</span>
        </template>
        <template v-slot:[`item.product.pro_name`]="{ item }">
          <div class="d-flex flex-column py-1">
            <span class="text-body-2 font-weight-bold">{{ item.product.pro_name || '' }}</span>
            <span class=" grey--text">{{ item.product.category ? item.product.category.categ_name : 'No Category'
            }}</span>
          </div>
        </template>
        <template v-slot:[`item.totalQTY`]="{ item }">
          <v-chip x-small :color="getQuantityColor(item.totalQTY)" dark label>{{ item.totalQTY }}</v-chip>
        </template>
        <template v-slot:[`item.totalPriceLocal`]="{ item }">
          <span class="font-weight-bold">{{ numberWithCommas(item.totalPriceLocal / item.totalQTY) }}</span>
        </template>
        <template v-slot:[`item.totalDiscountLocal`]="{ item }">
          <span class="warning--text font-weight-bold">{{ numberWithCommas(item.totalDiscountLocal) }}</span>
        </template>
        <template v-slot:[`item.totalAmountLocal`]="{ item }">
          <span class="success--text font-weight-black">{{ numberWithCommas(item.totalAmountLocal) }}</span>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn icon x-small color="info" @click="viewItem(item)"><v-icon x-small>mdi-eye</v-icon></v-btn>
          <v-btn icon x-small color="primary" @click="editItem(item)"><v-icon x-small>mdi-pencil</v-icon></v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- CANCELED SECTION - COMPACT TOGGLE -->
    <v-expansion-panels flat class="mt-4">
      <v-expansion-panel class="rounded-lg border shadow-sm">
        <v-expansion-panel-header class="grey lighten-5 py-2">
          <div class="d-flex align-center">
            <v-icon left color="error" small>mdi-cancel</v-icon>
            <span class=" font-weight-bold error--text">CANCELED TICKETS ({{
              canceledOrderHeaderList.length
            }})</span>
            <v-spacer></v-spacer>
            <span class=" grey--text mr-4">Total impact: {{ formatNumber(canceledStatistics[0].totalLocal) }} {{
              localCurrency?.code }}</span>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pa-0">
          <v-data-table :headers="enhancedHeaders" :items="canceledOrderHeaderList" dense
            class="compact-table no-shadow">
            <!-- Simplified slots for canceled -->
            <template v-slot:[`item.totalAmountLocal`]="{ item }"><span class="grey--text font-weight-bold">{{
              numberWithCommas(item.totalAmountLocal) }}</span></template>
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
      productList: [],
      creteria: {
        productId: -1,
      },
      enhancedHeaders: [
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'bookingDate',
          sortable: true,
        },
        {
          text: 'ສິນຄ້າ',
          align: 'left',
          value: 'product.pro_name',
          sortable: true,
        },
        {
          text: 'ຈຳນວນ',
          align: 'center',
          value: 'totalQTY',
          sortable: true,
        },
        { text: 'ລາຄາ/ໜ່ວຍ', align: 'right', value: 'totalPriceLocal', sortable: true },
        { text: 'ສ່ວນຫຼຸດ', align: 'right', value: 'totalDiscountLocal', sortable: true },
        { text: 'ລວມສຸດທິ', align: 'right', value: 'totalAmountLocal', sortable: true },
        {
          text: 'ການດຳເນີນການ',
          align: 'center',
          value: 'actions',
          sortable: false,
        },
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
    await this.loadData()
    await this.loadProduct()
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
      'findAllCurrency',
      'findAllTerminal',
      'findSelectedTerminal',
    ]),

    localCurrency() {
      return this.findAllCurrency?.find(c => c.isLocalCCY === true || c.isLocalCCY === 1);
    },

    activeOrderHeaderList() {
      const productMap = {};

      this.orderHeaderList.forEach((order) => {
        if (!order.isActive) return;
        if (order.status?.toLowerCase() === 'cancel' || order.status?.toLowerCase() === 'canceled') return;

        // Apply global search filter at order level (basic) or line level
        const searchMatchesOrder = !this.search ||
          order.orderNumber?.toLowerCase().includes(this.search.toLowerCase()) ||
          order.customerName?.toLowerCase().includes(this.search.toLowerCase());

        order.lines?.forEach((line) => {
          if (!line.product) return;

          // Apply Product Selection Filter (Strict)
          if (this.creteria.productId && this.creteria.productId !== -1 && line.product.id !== this.creteria.productId) return;

          // Apply Search Filter (Strictly on product name or category)
          const searchMatchesLine = searchMatchesOrder ||
            line.product.pro_name?.toLowerCase().includes(this.search.toLowerCase()) ||
            line.product.category?.categ_name?.toLowerCase().includes(this.search.toLowerCase());

          if (!searchMatchesLine) return;

          const productId = line.product.id;
          const lineCurrency = this.findAllCurrency?.find(c => c.id === line.currencyId);
          const isLocal = lineCurrency?.isLocalCCY === true || lineCurrency?.isLocalCCY === 1;
          const rate = isLocal ? 1 : (line.exchangeRate || 1);

          if (!productMap[productId]) {
            productMap[productId] = {
              product: line.product,
              bookingDate: order.bookingDate,
              totalQTY: 0,
              totalPriceLocal: 0,
              totalDiscountLocal: 0,
              totalAmountLocal: 0,
              header: order,
              currencySummaries: {} // Track for statistics
            };
          }

          const qty = line.quantity || 0;
          const lineTotal = (line.price * qty);
          const cCode = lineCurrency?.code || (this.localCurrency?.code || 'LAK');

          if (!productMap[productId].currencySummaries[cCode]) {
            productMap[productId].currencySummaries[cCode] = { original: 0, local: 0 };
          }

          productMap[productId].totalQTY += qty;
          productMap[productId].totalPriceLocal += (lineTotal * rate);
          productMap[productId].totalDiscountLocal += (line.discount * rate);
          productMap[productId].totalAmountLocal += (line.total * rate);

          productMap[productId].currencySummaries[cCode].original += lineTotal;
          productMap[productId].currencySummaries[cCode].local += (lineTotal * rate);
        });
      });

      return Object.values(productMap);
    },

    canceledOrderHeaderList() {
      const productMap = {};

      this.orderHeaderList.forEach((order) => {
        if (order.isActive && order.status?.toLowerCase() !== 'cancel' && order.status?.toLowerCase() !== 'canceled') return;

        // Apply basic search filter
        const searchMatchesOrder = !this.search ||
          order.orderNumber?.toLowerCase().includes(this.search.toLowerCase());

        order.lines?.forEach((line) => {
          if (!line.product) return;

          if (this.creteria.productId && this.creteria.productId !== -1 && line.product.id !== this.creteria.productId) return;

          const searchMatchesLine = searchMatchesOrder ||
            line.product.pro_name?.toLowerCase().includes(this.search.toLowerCase());

          if (!searchMatchesLine) return;

          const productId = line.product.id;
          const lineCurrency = this.findAllCurrency?.find(c => c.id === line.currencyId);
          const isLocal = lineCurrency?.isLocalCCY === true || lineCurrency?.isLocalCCY === 1;
          const rate = isLocal ? 1 : (line.exchangeRate || 1);

          if (!productMap[productId]) {
            productMap[productId] = {
              product: line.product,
              bookingDate: order.bookingDate,
              totalQTY: 0,
              totalPriceLocal: 0,
              totalDiscountLocal: 0,
              totalAmountLocal: 0,
              header: order,
              currencySummaries: {}
            };
          }

          const qty = line.quantity || 0;
          const lineTotal = (line.price * qty);
          const cCode = lineCurrency?.code || (this.localCurrency?.code || 'LAK');

          if (!productMap[productId].currencySummaries[cCode]) {
            productMap[productId].currencySummaries[cCode] = { original: 0, local: 0 };
          }

          productMap[productId].totalQTY += qty;
          productMap[productId].totalPriceLocal += (lineTotal * rate);
          productMap[productId].totalDiscountLocal += (line.discount * rate);
          productMap[productId].totalAmountLocal += (line.total * rate);

          productMap[productId].currencySummaries[cCode].original += lineTotal;
          productMap[productId].currencySummaries[cCode].local += (lineTotal * rate);
        });
      });

      return Object.values(productMap);
    },

    // NEW: Sales Statistics with Currency Breakdown
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

    computedDateFormatted() {
      return this.formatDate(this.date)
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

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach((element) => {
        const paymentStatus =
          element.paymentStatus ||
          (element.header && element.header.paymentStatus)
        const payment =
          element.payment || (element.header && element.header.payment)

        if (paymentStatus === 'PENDING' && payment && payment.includes('COD')) {
          txnList.push(element)
        }
      })

      const totalPrice = txnList.reduce((total, item) => {
        const amount = item.totalAmount || item.cartTotal || 0
        return total + amount
      }, 0)

      const totalDiscount = txnList.reduce((total, item) => {
        const discount = item.discount || item.totalDiscount || 0
        return total + discount
      }, 0)

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice
      orderDetail.sale = this.numberWithCommas(totalPrice)
      orderDetail.discount = this.numberWithCommas(totalDiscount)
      orderDetail.gross = this.numberWithCommas(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail
    },
  },

  methods: {
    formatNumber(val) {
      return new Intl.NumberFormat().format(Math.round(val || 0));
    },

    getBookingDate(item) {
      if (item.header && item.header.bookingDate) {
        return item.header.bookingDate.split('T')[0]
      } else if (item.bookingDate) {
        return item.bookingDate.split('T')[0]
      }
      return 'N/A'
    },

    getTotalQuantity() {
      return this.activeOrderHeaderList.reduce((sum, item) => {
        const quantity = parseInt(item.totalQTY || item.quantity || 0)
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

    exportToExcel() {
      let messageLineExport = []
      for (const iterator of this.activeOrderHeaderList) {
        const product = iterator['product']['pro_name']
        const avgPrice = iterator['totalPriceLocal'] / iterator['totalQTY']
        const discountPercentage = this.getDiscountPercentage(
          iterator['totalDiscountLocal'],
          iterator['totalPriceLocal']
        )

        const newRow = {
          ສິນຄ້າ: product,
          ຫມວດໝູ່: iterator['product']['category']
            ? iterator['product']['category']['categ_name']
            : 'ບໍ່ມີໝວດໝູ່',
          ຈຳນວນ: iterator['totalQTY'],
          'ລາຄາ/ໜ່ວຍ': Math.round(avgPrice),
          'ສ່ວນຫຼຸດ (%)': discountPercentage + '%',
          'ສ່ວນຫຼຸດ (ເງິນ)': iterator['totalDiscountLocal'],
          ລວມສຸດທິ: iterator['totalAmountLocal'],
          ສະກຸນເງິນ: this.localCurrency?.code,
        }
        messageLineExport.push(newRow)
      }

      const worksheet = this.$xlsx.utils.json_to_sheet(messageLineExport)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(
        workbook,
        worksheet,
        'Product Sales Report'
      )
      this.$xlsx.writeFile(
        workbook,
        `product_sales_report_${this.date}_to_${this.date2}.xlsx`
      )
    },

    exportSimplePDFReport() {
      try {
        const totalTickets = this.activeOrderHeaderList.length
        const totalItems = this.getTotalQuantity()

        const productCount = {}
        const categoryCount = {}

        this.activeOrderHeaderList.forEach((item) => {
          const productName = item.product?.pro_name || 'Other'
          productCount[productName] =
            (productCount[productName] || 0) + parseInt(item.totalQTY || 0)

          const categoryName =
            item.product?.category?.categ_name || 'Unknown Category'
          categoryCount[categoryName] =
            (categoryCount[categoryName] || 0) + parseInt(item.totalQTY || 0)
        })

        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; }
            .summary-box { border: 1px solid #ddd; padding: 15px; margin: 10px 0; background-color: #f9f9f9; }
            .summary-title { font-weight: bold; font-size: 14px; color: #333; margin-bottom: 10px; }
            .summary-item { margin: 5px 0; }
            .section { margin: 20px 0; }
            .footer { text-align: center; font-size: 12px; color: #666; margin-top: 30px; }
            table { width: 100%; border-collapse: collapse; margin: 10px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f0f0f0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>PRODUCT SALES AUDIT REPORT</h2>
            <p>Period: ${this.dateFormatted} - ${this.dateFormatted2}</p>
            <p>Generated: ${new Date().toLocaleDateString()}</p>
          </div>

          <div class="summary-box">
            <div class="summary-title">📊 OVERVIEW</div>
            <div class="summary-item">Total Product Lines: ${totalTickets}</div>
            <div class="summary-item">Total Items Sold: ${totalItems}</div>
            <div class="summary-item">Average Quantity per Product: ${totalTickets > 0
            ? Math.round((totalItems / totalTickets) * 100) / 100
            : 0
          }</div>
            <div class="summary-item">Average Discount Rate: ${this.getAverageDiscount()}%</div>
          </div>

          <div class="section">
            <h3>📂 SALES BY CATEGORY</h3>
            <table>
              <tr><th>Category</th><th>Quantity Sold</th></tr>
              ${Object.entries(categoryCount)
            .sort(([, a], [, b]) => b - a)
            .map(
              ([category, count]) =>
                `<tr><td>${category}</td><td>${count}</td></tr>`
            )
            .join('')}
            </table>
          </div>

          <div class="section">
            <h3>📦 TOP SELLING PRODUCTS</h3>
            <table>
              <tr><th>Product</th><th>Quantity Sold</th></tr>
              ${Object.entries(productCount)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 15)
            .map(
              ([product, count]) =>
                `<tr><td>${product}</td><td>${count}</td></tr>`
            )
            .join('')}
            </table>
          </div>

          <div class="footer">
            <p><strong>NOTE:</strong> This report contains sales quantity data for audit purposes</p>
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
          filename: `product_audit_summary_${this.date}_to_${this.date2}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        }
        html2pdf().from(htmlContent).set(opt).save()
      } else if (typeof jsPDF !== 'undefined') {
        const doc = new jsPDF()
        doc.setFontSize(16)
        doc.text('PRODUCT SALES AUDIT REPORT', 20, 20)
        doc.setFontSize(12)
        doc.text(
          `Period: ${this.dateFormatted} - ${this.dateFormatted2}`,
          20,
          35
        )
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 45)
        doc.text('OVERVIEW', 20, 65)
        doc.text(
          `Total Product Lines: ${this.activeOrderHeaderList.length}`,
          20,
          75
        )
        doc.text(`Total Items: ${this.getTotalQuantity()}`, 20, 85)
        doc.save(`product_audit_summary_${this.date}_to_${this.date2}.pdf`)
      } else {
        const printWindow = window.open('', '_blank')
        printWindow.document.write(htmlContent)
        printWindow.document.close()
        printWindow.print()
      }

      this.$toast.success('PDF report generated successfully!')
    },

    exportAuditReport() {
      try {
        const categoryStats = {}
        const productStats = {}

        this.activeOrderHeaderList.forEach((item) => {
          const category = item.product?.category?.categ_name || 'Unknown'
          const product = item.product?.pro_name || 'Unknown'
          const quantity = parseInt(item.totalQTY || 0)

          if (!categoryStats[category])
            categoryStats[category] = { count: 0, quantity: 0 }
          categoryStats[category].count += 1
          categoryStats[category].quantity += quantity

          if (!productStats[product])
            productStats[product] = { count: 0, quantity: 0 }
          productStats[product].count += 1
          productStats[product].quantity += quantity
        })

        const auditData = []

        auditData.push({
          'Report Type': 'Product Sales External Audit Report',
          Period: `${this.dateFormatted} - ${this.dateFormatted2}`,
          'Generated On': new Date().toLocaleDateString(),
          'Generated By': this.user?.name || 'System',
          Location: this.currentSelectedLocation?.name || 'All Locations',
        })

        auditData.push({})
        auditData.push({ 'Report Type': '=== SALES BY CATEGORY ===' })

        Object.entries(categoryStats).forEach(([category, stats]) => {
          auditData.push({
            Category: category,
            'Product Lines': stats.count,
            'Total Quantity': stats.quantity,
          })
        })

        auditData.push({})
        auditData.push({ 'Report Type': '=== TOP PRODUCTS BY QUANTITY ===' })

        Object.entries(productStats)
          .sort(([, a], [, b]) => b.quantity - a.quantity)
          .slice(0, 20)
          .forEach(([product, stats]) => {
            auditData.push({
              Product: product,
              'Sales Count': stats.count,
              'Total Quantity': stats.quantity,
            })
          })

        auditData.push({})
        auditData.push({
          'Report Type': '=== SUMMARY ===',
          'Total Product Lines': this.activeOrderHeaderList.length,
          'Total Quantity Sold': this.getTotalQuantity(),
          'Unique Products': Object.keys(productStats).length,
          'Unique Categories': Object.keys(categoryStats).length,
          'Average Discount Rate': this.getAverageDiscount() + '%',
        })

        const worksheet = this.$xlsx.utils.json_to_sheet(auditData)
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(
          workbook,
          worksheet,
          'Product Audit Report'
        )

        const filename = `product_audit_report_${this.date}_to_${this.date2}.xlsx`
        this.$xlsx.writeFile(workbook, filename)

        this.$toast.success('Product audit report exported successfully!')
      } catch (error) {
        console.error('Error generating audit report:', error)
        this.$toast.error('Error generating audit report: ' + error.message)
      }
    },

    createSale() {
      this.componentKey += 1
      this.selectedOrder = 0
      this.viewTransaction = false
      this.dialogOrderDetail = true
    },

    countDay(startDate) {
      return dayCount(startDate)
    },

    dueDate(startDate, day) {
      return getNextDate(startDate, day)
    },

    numberWithCommas(value) {
      return getFormatNum(value)
    },

    editItem(item) {
      this.componentKey += 1
      let itemId
      if (item.orderId) {
        itemId = item.orderId.toString()
      } else if (item.header && item.header.id) {
        itemId = item.header.id.toString()
      } else if (item.id) {
        itemId = item.id.toString()
      }
      this.selectedOrderId = itemId
      this.dialogOrderDetail = !this.dialogOrderDetail
    },

    viewItem(item) {
      this.componentKey += 1
      this.viewTransaction = true
      let selectedId
      if (item.header && item.header.id) {
        selectedId = item.header.id
      } else if (item.id) {
        selectedId = item.id
      }
      this.selectedOrder = selectedId
      this.dialogOrderDetail = true
    },

    cancelItem(payload) {
      this.componentCancelFormKey += 1
      this.OrderIdSelected = payload.orderId
      this.cancelForm = true
    },

    handleEvent() {
      this.dialogOrderDetail = false
    },

    async loadData() {
      this.isloading = true
      const locationId = this.currentSelectedLocation?.id || 1
      const date = {
        startDate: this.date,
        endDate: this.date2,
        productId: this.creteria.productId,
        locationId: locationId,
      }

      let apiLine = 'api/sale/findByDate'
      if (date.productId && date.productId !== -1) {
        apiLine = 'api/sale/findByDateAndProduct'
      }

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })
        this.orderHeaderList = response.data
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'Could not load data ' + JSON.stringify(error)
        )
      }

      this.isloading = false
    },

    async loadProduct() {
      if (!this.currentSelectedLocation?.id) return
      this.isloading = true
      try {
        const response = await this.$axios.get(
          `product_f/${this.currentSelectedLocation.id}?include=priceList`
        )

        this.productList = response.data.data || []
        this.productList.unshift({ id: -1, pro_name: 'ທັງຫມົດ' })
      } catch (error) {
        console.error('Product load error:', error)
        swalError2(
          this.$swal,
          'Error',
          'Could not load product data: ' +
          (error.message || JSON.stringify(error))
        )
        this.productList = [{ id: -1, pro_name: 'ທັງຫມົດ' }]
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

.compact-table>>>.v-data-table__wrapper {
  border-radius: 0 0 8px 8px;
}

.compact-table>>>thead th {
  background-color: #f8f9fa !important;
  text-transform: uppercase;
  font-size: 0.75rem !important;
  font-weight: bold !important;
  color: #5f6368 !important;
}

.compact-table>>>tbody td {
  font-size: 0.875rem !important;
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