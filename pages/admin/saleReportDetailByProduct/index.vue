<template>
  <div>
    <!-- ENHANCED HEADER SECTION -->
    <div class="header-section">
      <div class="header-chips-container">
        <v-chip
          class="header-chip pa-5"
          color="primary"
          label
          text-color="white"
          elevation="4"
        >
          <v-icon left>mdi-package-variant</v-icon>
          <h3>ລາຍງານການຂາຍຕາມສິນຄ້າ</h3>
        </v-chip>
        <v-chip
          class="header-chip pa-5"
          color="secondary"
          label
          text-color="white"
          elevation="4"
          @click="guidelineDialog = true"
        >
          <v-icon left>mdi-help-circle</v-icon>
          <h3>ຄູ່ມືການນຳໃຊ້</h3>
        </v-chip>
      </div>
    </div>

    <!-- DIALOGS -->
    <v-dialog v-model="isloading" hide-overlay persistent width="320">
      <v-card class="loading-card">
        <v-card-text class="text-center pa-6">
          <v-progress-circular
            size="48"
            color="primary"
            indeterminate
          ></v-progress-circular>
          <div class="mt-4">ກຳລັງໂຫຼດຂໍ້ມູນ...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="W6KiQWtiqBM"
      >
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD
        @reload="
          loadData()
          dialogOrderDetail = false
        "
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
        @reload="
          cancelForm = false
          loadData()
        "
      ></cancel-ticket-form>
    </v-dialog>

    <!-- ENHANCED MAIN CONTENT -->
    <v-card class="main-card">
      <!-- Enhanced Filters Section -->
      <v-card-title class="filter-section pa-6">
        <v-container fluid>
          <v-row>
            <!-- Date Range Filters -->
            <v-col cols="12" md="6">
              <div class="filter-group">
                <h4 class="filter-title white--text mb-3">
                  <v-icon left color="white">mdi-calendar-range</v-icon>
                  ຊ່ວງເວລາ
                </h4>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-menu
                      ref="menu1"
                      v-model="menu1"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dateFormatted"
                          label="ຈາກວັນທີ"
                          hint="MM/DD/YYYY"
                          persistent-hint
                          prepend-icon="mdi-calendar-start"
                          outlined
                          dense
                          background-color="white"
                          v-bind="attrs"
                          @blur="date = parseDate(dateFormatted)"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        no-title
                        color="primary"
                        @input="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-menu
                      ref="menu2"
                      v-model="menu2"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dateFormatted2"
                          label="ຫາວັນທີ"
                          hint="MM/DD/YYYY"
                          persistent-hint
                          prepend-icon="mdi-calendar-end"
                          outlined
                          dense
                          background-color="white"
                          v-bind="attrs"
                          @blur="date2 = parseDate(dateFormatted2)"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date2"
                        no-title
                        color="primary"
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <!-- Search and Product Filters -->
            <v-col cols="12" md="6">
              <div class="filter-group">
                <h4 class="filter-title white--text mb-3">
                  <v-icon left color="white">mdi-filter</v-icon>
                  ຟິລເຕີ
                </h4>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="search"
                      prepend-icon="mdi-magnify"
                      label="ຊອກຫາ"
                      outlined
                      dense
                      clearable
                      background-color="white"
                    />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      item-text="pro_name"
                      item-value="id"
                      :items="productList"
                      label="ສິນຄ້າ"
                      v-model="creteria.productId"
                      prepend-icon="mdi-package"
                      outlined
                      dense
                      clearable
                      background-color="white"
                      @change="loadData"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>

          <!-- Action Buttons -->
          <v-row class="mt-3">
            <v-col cols="12">
              <div class="d-flex flex-wrap justify-space-between align-center">
                <div class="d-flex flex-wrap">
                  <v-btn
                    class="ma-2 action-btn"
                    color="white"
                    @click="loadData"
                    rounded
                    elevation="3"
                  >
                    <v-icon left color="primary">mdi-refresh</v-icon>
                    <span class="primary--text font-weight-bold"
                      >ດຶງລາຍງານ</span
                    >
                  </v-btn>
                  <v-btn
                    class="ma-2 action-btn"
                    color="success"
                    @click="exportToExcel"
                    rounded
                    elevation="3"
                    dark
                  >
                    <v-icon left>mdi-microsoft-excel</v-icon>
                    <span class="font-weight-bold">Excel ລາຍງານ</span>
                  </v-btn>
                </div>
                <div class="d-flex flex-wrap">
                  <v-btn
                    class="ma-2 action-btn"
                    color="warning"
                    @click="exportAuditReport"
                    rounded
                    elevation="3"
                    dark
                  >
                    <v-icon left>mdi-file-chart</v-icon>
                    <span class="font-weight-bold">Audit Report</span>
                  </v-btn>
                  <v-btn
                    class="ma-2 action-btn"
                    color="info"
                    @click="exportSimplePDFReport"
                    rounded
                    elevation="3"
                    dark
                  >
                    <v-icon left>mdi-file-pdf</v-icon>
                    <span class="font-weight-bold">PDF Summary</span>
                  </v-btn>
                  <v-btn
                    class="ma-2 action-btn"
                    color="primary"
                    @click="createSale"
                    rounded
                    elevation="3"
                    dark
                  >
                    <v-icon left>mdi-plus</v-icon>
                    <span class="font-weight-bold">ສ້າງການຂາຍ</span>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>

      <v-divider></v-divider>

      <!-- Enhanced Summary Dashboard -->
      <v-card-text class="pa-6">
        <!-- Key Metrics Cards -->
        <v-row class="mb-6">
          <v-col cols="12">
            <h3 class="dashboard-title">
              <v-icon left color="primary">mdi-chart-box</v-icon>
              ສະຫຼຸບລາຍງານສິນຄ້າ
            </h3>
          </v-col>
        </v-row>

        <v-row class="mb-6">
          <v-col cols="12" md="3">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="primary">
                    <v-icon size="32" color="white">mdi-package-variant</v-icon>
                  </v-avatar>
                </div>
                <div class="display-1 primary--text font-weight-bold mb-2">
                  {{ activeOrderHeaderList.length }}
                </div>
                <div class="font-weight-medium mb-1">ຈຳນວນສິນຄ້າ</div>
                <div class=" grey--text">ທີ່ມີການຂາຍ</div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="success">
                    <v-icon size="32" color="white">mdi-cart</v-icon>
                  </v-avatar>
                </div>
                <div class="display-1 success--text font-weight-bold mb-2">
                  {{ getTotalQuantity() }}
                </div>
                <div class="font-weight-medium mb-1">ຈຳນວນທີ່ຂາຍ</div>
                <div class=" grey--text">ລວມທັງໝົດ</div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="warning">
                    <v-icon size="32" color="white">mdi-percent</v-icon>
                  </v-avatar>
                </div>
                <div class="display-1 warning--text font-weight-bold mb-2">
                  {{ numberWithCommas(totalDiscount) }}
                </div>
                <div class="font-weight-medium mb-1">ສ່ວນຫຼຸດລວມ</div>
                <div class=" grey--text">LAK</div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="secondary">
                    <v-icon size="32" color="white">mdi-currency-usd</v-icon>
                  </v-avatar>
                </div>
                <div class="display-1 secondary--text font-weight-bold mb-2">
                  {{ numberWithCommas(totalSale - totalDiscount) }}
                </div>
                <div class="font-weight-medium mb-1">ລາຍຮັບສຸດທິ</div>
                <div class=" grey--text">LAK</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Enhanced Sales Summary with Visual Charts -->
        <v-row class="mb-6">
          <v-col cols="12" md="8">
            <v-card elevation="6" shaped>
              <v-card-title class="primary white--text">
                <v-icon left color="white">mdi-chart-pie</v-icon>
                <span>ສະຫຼຸບຍອດຂາຍ</span>
                <v-spacer></v-spacer>
                <v-chip color="white" small label text-color="primary">
                  <v-icon left small color="primary">mdi-calculator</v-icon>
                  ລາຍລະອຽດ
                </v-chip>
              </v-card-title>

              <v-card-text class="pa-6">
                <div class="summary-details">
                  <div class="summary-line">
                    <div class="d-flex align-center">
                      <v-icon color="primary" class="mr-3">mdi-cash</v-icon>
                      <span class="font-weight-medium">ຍອດຂາຍລວມ:</span>
                    </div>
                    <span class=" font-weight-bold primary--text">{{
                      numberWithCommas(totalSaleRaw)
                    }}</span>
                  </div>
                  <div class="summary-line">
                    <div class="d-flex align-center">
                      <v-icon color="warning" class="mr-3"
                        >mdi-tag-remove</v-icon
                      >
                      <span class="font-weight-medium">ສ່ວນຫຼຸດລວມ:</span>
                    </div>
                    <span class="font-weight-bold warning--text">{{
                      numberWithCommas(totalDiscount)
                    }}</span>
                  </div>
                  <v-divider class="my-4"></v-divider>
                  <div class="summary-line total-line">
                    <div class="d-flex align-center">
                      <v-icon color="success" class="mr-3"
                        >mdi-check-circle</v-icon
                      >
                      <span class=" font-weight-bold">ລວມສຸດທິ:</span>
                    </div>
                    <span class=" font-weight-bold success--text">{{
                      numberWithCommas(totalSale - totalDiscount)
                    }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card elevation="6" shaped class="performance-card">
              <v-card-title class="secondary white--text text-center">
                <v-icon left color="white">mdi-trending-up</v-icon>
                <span>ປະສິດທິພາບ</span>
              </v-card-title>
              <v-card-text class="text-center pa-6">
                <div class="performance-metrics">
                  <div class="metric-item mb-4">
                    <div class="metric-label">ລາຄາສະເລ່ຍຕໍ່ໜ່ວຍ</div>
                    <div class="metric-value primary--text">
                      {{ getAveragePrice() }}
                    </div>
                  </div>
                  <div class="metric-item mb-4">
                    <div class="metric-label">ສ່ວນຫຼຸດສະເລ່ຍ</div>
                    <div class="metric-value warning--text">
                      {{ getAverageDiscount() }}%
                    </div>
                  </div>
                  <div class="metric-item">
                    <div class="metric-label">ລາຍຮັບສະເລ່ຍຕໍ່ລາຍການ</div>
                    <div class="metric-value success--text">
                      {{ getAverageRevenue() }}
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Enhanced Product Sales Table -->
        <div class="mt-8">
          <v-row>
            <v-col cols="12">
              <h3 class="dashboard-title">
                <v-icon left color="lightprimary">mdi-table</v-icon>
                ລາຍລະອຽດການຂາຍຕາມສິນຄ້າ
              </h3>
            </v-col>
          </v-row>

          <v-card elevation="6" shaped>
            <v-card-title class="secondary white--text">
              <v-icon left color="white">mdi-format-list-bulleted</v-icon>
              <span>ຕາຕະລາງລາຍການສິນຄ້າ</span>
              <v-spacer></v-spacer>
              <v-chip color="white" small label text-color="secondary">
                <v-icon left small color="secondary">mdi-package</v-icon>
                {{ activeOrderHeaderList.length }} ລາຍການ
              </v-chip>
            </v-card-title>

            <v-card-text class="pa-0">
              <v-data-table
                v-if="activeOrderHeaderList"
                :headers="enhancedHeaders"
                :search="search"
                :items="activeOrderHeaderList"
                :items-per-page="25"
                class="enhanced-table elevation-0"
                :loading="isloading"
                loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
              >
                <!-- Enhanced table slots -->
                <template v-slot:[`item.bookingDate`]="{ item }">
                  <v-chip color="info" small dark>
                    <v-icon left small>mdi-clock</v-icon>
                    {{ getBookingDate(item) }}
                  </v-chip>
                </template>

                <template v-slot:[`item.product.pro_name`]="{ item }">
                  <div class="product-info">
                    <div
                      class="font-weight-bold text-truncate"
                      style="max-width: 200px"
                    >
                      {{ item.product.pro_name || '' }}
                    </div>
                    <div class=" grey--text">
                      {{
                        item.product.category
                          ? item.product.category.categ_name
                          : 'ບໍ່ມີໝວດໝູ່'
                      }}
                    </div>
                  </div>
                </template>

                <template v-slot:[`item.totalQTY`]="{ item }">
                  <v-chip
                    :color="getQuantityColor(item.totalQTY)"
                    small
                    dark
                    outlined
                  >
                    <v-icon left small>mdi-counter</v-icon>
                    {{ item.totalQTY }}
                  </v-chip>
                </template>

                <template v-slot:[`item.totalPrice`]="{ item }">
                  <div class="price-info">
                    <div class="font-weight-bold">
                      {{ numberWithCommas(item.totalPrice / item.totalQTY) }}
                    </div>
                    <div class=" grey--text">ລາຄາ/ໜ່ວຍ</div>
                  </div>
                </template>

                <template v-slot:[`item.totalDiscount`]="{ item }">
                  <div class="discount-info">
                    <span class="font-weight-bold warning--text">
                      {{ numberWithCommas(item.totalDiscount) }}
                    </span>
                    <div class=" grey--text">
                      {{
                        getDiscountPercentage(
                          item.totalDiscount,
                          item.totalPrice
                        )
                      }}%
                    </div>
                  </div>
                </template>

                <template v-slot:[`item.totalAmount`]="{ item }">
                  <div class="total-info">
                    <span class="font-weight-bold success--text ">
                      {{ numberWithCommas(item.totalAmount) }}
                    </span>
                    <div class=" grey--text">LAK</div>
                  </div>
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                  <div class="action-buttons">
                    <v-btn
                      icon
                      small
                      color="info"
                      @click="viewItem(item)"
                      class="action-btn"
                    >
                      <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      small
                      color="primary"
                      @click="editItem(item)"
                      class="action-btn"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </div>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
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
        {
          text: 'ລາຄາ/ໜ່ວຍ',
          align: 'right',
          value: 'totalPrice',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫຼຸດ',
          align: 'right',
          value: 'totalDiscount',
          sortable: true,
        },
        {
          text: 'ລວມສຸດທິ',
          align: 'right',
          value: 'totalAmount',
          sortable: true,
        },
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
      'currentSelectedLocation',
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
      'findAllTerminal',
      'findSelectedTerminal',
    ]),

    activeOrderHeaderList() {
      // Transform the raw order data into product-aggregated data
      const productMap = {}

      this.orderHeaderList.forEach((order) => {
        if (!order.isActive) return

        order.lines?.forEach((line) => {
          if (!line.product) return // Skip if product is missing

          const productId = line.product.id

          if (!productMap[productId]) {
            productMap[productId] = {
              product: line.product,
              bookingDate: order.bookingDate,
              totalQTY: 0,
              totalPrice: 0,
              totalDiscount: 0,
              totalAmount: 0,
              orderId: order.id,
              header: order,
            }
          }

          productMap[productId].totalQTY += line.quantity || 0
          productMap[productId].totalPrice += line.price * line.quantity || 0
          productMap[productId].totalDiscount += line.discount || 0
          productMap[productId].totalAmount += line.total || 0
        })
      })

      return Object.values(productMap)
    },

    computedDateFormatted() {
      return this.formatDate(this.date)
    },

    currencyList() {
      return this.findAllCurrency
    },

    totalSale() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.totalAmount || 0)
      })
      return total
    },

    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.totalAmount || 0)
      })
      return total
    },

    user() {
      return this.$auth.user || ''
    },

    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.totalDiscount)
      })
      return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach((element) => {
        // Handle different data structures for payment status
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
    // Helper method to safely get booking date from different data structures
    getBookingDate(item) {
      if (item.header && item.header.bookingDate) {
        return item.header.bookingDate.split('T')[0]
      } else if (item.bookingDate) {
        return item.bookingDate.split('T')[0]
      }
      return 'N/A'
    },

    // Enhanced calculation methods
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
      if (this.activeOrderHeaderList.length === 0) return '0'
      const totalSales = this.totalSaleRaw + this.totalDiscount
      if (totalSales === 0) return '0'
      return ((this.totalDiscount / totalSales) * 100).toFixed(1)
    },

    getAverageRevenue() {
      if (this.activeOrderHeaderList.length === 0) return '0'
      const avgRevenue =
        (this.totalSale - this.totalDiscount) /
        this.activeOrderHeaderList.length
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

    // Export methods
    exportToExcel() {
      let messageLineExport = []
      for (const iterator of this.activeOrderHeaderList) {
        const product = iterator['product']['pro_name']
        const avgPrice = iterator['totalPrice'] / iterator['totalQTY']
        const discountPercentage = this.getDiscountPercentage(
          iterator['totalDiscount'],
          iterator['totalPrice']
        )

        const newRow = {
          ສິນຄ້າ: product,
          ຫມວດໝູ່: iterator['product']['category']
            ? iterator['product']['category']['categ_name']
            : 'ບໍ່ມີໝວດໝູ່',
          ຈຳນວນ: iterator['totalQTY'],
          'ລາຄາ/ໜ່ວຍ': Math.round(avgPrice),
          'ສ່ວນຫຼຸດ (%)': discountPercentage + '%',
          'ສ່ວນຫຼຸດ (ເງິນ)': iterator['totalDiscount'],
          ລວມສຸດທິ: iterator['totalAmount'],
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

        // Product and category counting
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
            <div class="summary-item">Average Quantity per Product: ${
              totalTickets > 0
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
                .slice(0, 15) // Top 15 only
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
      // Same PDF generation logic as before
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

        // Header info
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

    // Other methods
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
      // Handle different data structures
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
      // Handle different data structures
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
      const date = {
        startDate: this.date,
        endDate: this.date2,
        productId: this.creteria.productId,
        locationId: this.currentSelectedLocation['id'] || 1,
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
      this.isloading = true
      try {
        const response = await this.$axios.get(
          `product_f/${this.currentSelectedLocation.id}?include=priceList`
        )

        // The products are directly in response.data.data (it's an array)
        this.productList = response.data.data || []

        // Add "All" option at the beginning
        this.productList.unshift({ id: -1, pro_name: 'ທັງຫມົດ' })
      } catch (error) {
        console.error('Product load error:', error)
        swalError2(
          this.$swal,
          'Error',
          'Could not load product data: ' +
            (error.message || JSON.stringify(error))
        )
        this.productList = [{ id: -1, pro_name: 'ທັງຫມົດ' }] // Fallback with at least the "All" option
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
/* Enhanced Typography for Vuetify 2 + Nuxt 2 */
.product-sales-container {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 20px;
}

/* Header Section */
.header-section {
  margin-bottom: 32px;
}

.header-chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
}

.header-chip {
  font-size: 16px !important;
  font-weight: 600 !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 12px !important;
}

.header-chip:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Main Card */
.main-card {
  border-radius: 16px !important;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  background: white;
}

/* Filter Section */
.filter-section {
  background: linear-gradient(
    135deg,
    var(--v-primary-base) 0%,
    var(--v-primary-darken1) 100%
  ) !important;
  color: white !important;
  position: relative;
}

.filter-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  pointer-events: none;
}

.filter-group {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.filter-title {
  font-weight: 700;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

/* Action Buttons */
.action-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: none !important;
  font-weight: 600;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Dashboard Styling */
.dashboard-title {
  font-size: 2rem !important;
  font-weight: 800 !important;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  color: var(--v-primary-base);
  position: relative;
}

.dashboard-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--v-primary-base),
    var(--v-secondary-base)
  );
  border-radius: 2px;
}

/* Metrics Cards */
.metric-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  border-radius: 20px !important;
  background: linear-gradient(135deg, white 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(var(--v-primary-rgb), 0.03) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.metric-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: var(--v-primary-base);
}

/* Performance Card */
.performance-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.performance-metrics {
  padding: 16px 0;
}

.metric-item {
  text-align: center;
  padding: 8px 0;
}

.metric-label {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 4px;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
}

/* Summary Details */
.summary-details {
  padding: 20px 0;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.total-line {
  border-top: 3px solid var(--v-success-base);
  border-bottom: none;
  padding-top: 24px;
  margin-top: 16px;
  background: rgba(var(--v-success-rgb), 0.05);
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
}

/* Enhanced Table */
.enhanced-table {
  border-radius: 0 !important;
  background: transparent;
}

.enhanced-table >>> .v-data-table__wrapper {
  border-radius: 0 0 12px 12px;
  overflow: hidden;
}

.enhanced-table >>> .v-data-table-header {
  background: var(--v-secondary-base) !important;
}

.enhanced-table >>> .v-data-table-header th {
  color: white !important;
  font-weight: 600 !important;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2) !important;
}

.enhanced-table >>> tbody tr:hover {
  background-color: rgba(var(--v-primary-rgb), 0.08) !important;
}

.enhanced-table >>> tbody tr {
  transition: all 0.2s ease;
}

/* Table Content Styling */
.product-info {
  padding: 8px 0;
}

.price-info,
.discount-info,
.total-info {
  text-align: right;
}

.action-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.action-btn {
  transition: all 0.2s ease;
  border-radius: 8px !important;
}

.action-btn:hover {
  transform: scale(1.15);
}

/* Loading Card */
.loading-card {
  border-radius: 16px !important;
  background: white;
}

/* Responsive Design */
@media (max-width: 960px) {
  .header-chips-container {
    flex-direction: column;
  }

  .header-chip {
    justify-content: center;
  }

  .filter-group {
    margin-bottom: 20px;
  }

  .dashboard-title {
    font-size: 1.5rem !important;
  }

  .metric-value {
    font-size: 1.25rem;
  }
}

@media (max-width: 600px) {
  .product-sales-container {
    padding: 12px;
  }

  .main-card {
    border-radius: 12px !important;
  }

  .filter-group {
    padding: 16px;
  }

  .metric-card {
    border-radius: 16px !important;
  }

  .summary-line {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
}

/* Animation Classes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.metric-card {
  animation: fadeInUp 0.6s ease-out;
}

.metric-card:nth-child(1) {
  animation-delay: 0.1s;
}
.metric-card:nth-child(2) {
  animation-delay: 0.2s;
}
.metric-card:nth-child(3) {
  animation-delay: 0.3s;
}
.metric-card:nth-child(4) {
  animation-delay: 0.4s;
}

.enhanced-table {
  animation: slideInRight 0.8s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: var(--v-primary-base);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--v-primary-darken1);
}

/* Vuetify 2 Compatibility */
.text-h5,
.grey {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
}

table {
  border: 1px solid rgba(0, 0, 0, 0.05);
}
</style>