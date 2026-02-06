<template>
  <div class="sales-report-container">
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
          <v-icon left>mdi-chart-line</v-icon>
          <h3>ລາຍງານການຂາຍບິນ</h3>
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
        <v-chip
          class="header-chip pa-5"
          color="lightprimary"
          label
          text-color="white"
          elevation="4"
          @click="exportSimplePDFAudit"
        >
          <v-icon left>mdi-file-chart</v-icon>
          <h3>PDF Audit</h3>
        </v-chip>
      </div>
    </div>

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
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="W6KiQWtiqBM"
      >
      </youtube-player>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" max-width="1024">
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

            <!-- Search and User Filters -->
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
                      item-text="cus_name"
                      item-value="id"
                      :items="userList"
                      label="ພະນັກງານຂາຍ"
                      v-model="creteria.userId"
                      prepend-icon="mdi-account"
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
              <div class="d-flex flex-wrap justify-space-between">
                <div class="d-flex flex-wrap">
                  <v-btn
                    class="ma-2"
                    color="white"
                    @click="loadData"
                    rounded
                    elevation="2"
                  >
                    <v-icon left color="primary">mdi-refresh</v-icon>
                    <span class="primary--text font-weight-bold">ດຶງລາຍງານ</span>
                  </v-btn>
                  <v-btn
                    class="ma-2"
                    color="success"
                    @click="exportToExcel"
                    rounded
                    elevation="2"
                    dark
                  >
                    <v-icon left>mdi-microsoft-excel</v-icon>
                    Excel
                  </v-btn>
                </div>
                <div class="d-flex flex-wrap">
                  <v-btn
                    class="ma-2"
                    color="primary"
                    @click="createSale"
                    rounded
                    elevation="2"
                    dark
                  >
                    <v-icon left>mdi-plus</v-icon>
                    ສ້າງການຂາຍ
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
              ສະຫຼຸບລາຍງານ
            </h3>
          </v-col>
        </v-row>

        <v-row class="mb-6">
          <v-col cols="12" md="6">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="primary">
                    <v-icon size="32" color="white">mdi-receipt-text</v-icon>
                  </v-avatar>
                </div>
                <div class="display-1 primary--text font-weight-bold mb-2">
                  {{ getFormatNum(activeOrderHeaderList.length) }}
                </div>
                <div class="subtitle-1 font-weight-medium mb-1">ຈຳນວນບິນທັງໝົດ</div>
                <div class="caption grey--text">ໃນຊ່ວງເວລາທີ່ເລືອກ</div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="metric-card" elevation="8" shaped>
              <v-card-text class="text-center pa-6">
                <div class="d-flex justify-center mb-3">
                  <v-avatar size="64" color="success">
                    <v-icon size="32" color="white">mdi-currency-usd</v-icon>
                  </v-avatar>
                </div>
                <div class="display-1 success--text font-weight-bold mb-2">
                  {{ getFormatNum(totalSale - totalDiscount) }}
                </div>
                <div class="subtitle-1 font-weight-medium mb-1">ລາຍຮັບລວມ</div>
                <div class="caption grey--text">LAK</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Enhanced Order Summary -->
        <v-row class="mb-6" v-if="activeOrderHeaderList.length > 0">
          <v-col cols="12">
            <v-card elevation="6" shaped>
              <v-card-title class="primary white--text">
                <v-icon left color="white">mdi-chart-pie</v-icon>
                <span>ສະຫຼຸບຍອດຂາຍ</span>
                <v-spacer></v-spacer>
                <v-chip color="white" small label text-color="primary">
                  <v-icon left small color="primary">mdi-calculator</v-icon>
                  ຍອດລວມ
                </v-chip>
              </v-card-title>

              <v-card-text class="pa-6">
                <v-row>
                  <v-col cols="12" md="8">
                    <div class="summary-details">
                      <div class="summary-line">
                        <span class="subtitle-1 font-weight-medium">ລວມຍ່ອຍ:</span>
                        <span class="subtitle-1 font-weight-bold">{{ getFormatNum(totalSaleRaw) }}</span>
                      </div>
                      <div class="summary-line">
                        <span class="subtitle-1 font-weight-medium">ສ່ວນຫຼຸດລວມ:</span>
                        <span class="subtitle-1 font-weight-bold text--secondary">{{ getFormatNum(totalDiscount) }}</span>
                      </div>
                      <v-divider class="my-3"></v-divider>
                      <div class="summary-line total">
                        <span class="headline font-weight-bold">ລວມທັງໝົດ:</span>
                        <span class="headline font-weight-bold primary--text">{{ getFormatNum(totalSale - totalDiscount) }}</span>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="text-center">
                      <v-progress-circular
                        :value="100"
                        size="120"
                        width="12"
                        color="primary"
                        class="progress-circle"
                      >
                        <div class="progress-content">
                          <div class="body-2 font-weight-medium">ຍອດສຳເລັດ</div>
                          <div class="headline font-weight-bold primary--text">100%</div>
                        </div>
                      </v-progress-circular>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Enhanced Product Summary -->
        <div v-if="orderLineByUser && orderLineByUser.length > 0" class="mt-8">
          <v-row>
            <v-col cols="12">
              <h3 class="dashboard-title">
                <v-icon left color="lightprimary">mdi-chart-bar</v-icon>
                ລາຍການສິນຄ້າທີ່ຂາຍ
              </h3>
            </v-col>
          </v-row>

          <v-card elevation="6" shaped>
            <v-card-title class="secondary white--text">
              <v-icon left color="white">mdi-package-variant</v-icon>
              <span>ລາຍລະອຽດການຂາຍ</span>
              <v-spacer></v-spacer>
              <v-chip color="white" small label text-color="secondary">
                <v-icon left small color="secondary">mdi-format-list-bulleted</v-icon>
                {{ orderLineByUser.length }} ລາຍການ
              </v-chip>
            </v-card-title>

            <v-card-text class="pa-0">
              <v-data-table
                :headers="enhancedHeaders"
                :search="search"
                :items="orderLineByUser"
                :items-per-page="25"
                class="enhanced-table elevation-0"
                :loading="isloading"
                loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
              >
                <!-- Enhanced table slots -->
                <template v-slot:[`item.header.bookingDate`]="{ item }">
                  <v-chip color="info" small dark>
                    <v-icon left small>mdi-clock</v-icon>
                    {{ item.header.bookingDate.split('T')[0] }}
                  </v-chip>
                </template>

                <template v-slot:[`item.product.pro_name`]="{ item }">
                  <div class="product-info">
                    <div class="font-weight-bold">{{ item.product.pro_name }}</div>
                    <div class="caption grey--text">#{{ item.header.id }}</div>
                  </div>
                </template>

                <template v-slot:[`item.quantity`]="{ item }">
                  <v-chip color="primary" small dark outlined>
                    {{ item.quantity }}
                  </v-chip>
                </template>

                <template v-slot:[`item.discount`]="{ item }">
                  <span class="font-weight-bold text--secondary">
                    {{ numberWithCommas(item.discount) }}
                  </span>
                </template>

                <template v-slot:[`item.total`]="{ item }">
                  <span class="font-weight-bold primary--text">
                    {{ numberWithCommas(item.total) }}
                  </span>
                </template>

                <template v-slot:[`item.user.cus_name`]="{ item }">
                  <div class="user-info">
                    <v-avatar size="24" color="secondary" class="mr-2">
                      <span class="white--text caption">{{ item.user.cus_name.charAt(0) }}</span>
                    </v-avatar>
                    <span class="font-weight-medium">{{ item.user.cus_name }}</span>
                  </div>
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                  <div class="action-buttons">
                    <v-btn icon small color="info" @click="viewItem(item.header)" class="action-btn">
                      <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <v-btn 
                      icon 
                      small 
                      color="success" 
                      @click="whatsappLink(item.header)" 
                      class="action-btn"
                      v-if="item.header.cusTel"
                    >
                      <v-icon>mdi-whatsapp</v-icon>
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
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth } from '~/common'
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
      userList: [],
      creteria: {
        userId: -1,
      },
      enhancedHeaders: [
        {
          text: 'ເລກອໍເດີ',
          align: 'center',
          value: 'header.id',
          sortable: true,
        },
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'header.bookingDate',
          sortable: true,
        },
        {
          text: 'ສິນຄ້າ',
          align: 'left',
          value: 'product.pro_name',
          sortable: true,
        },
        {
          text: 'ຈ/ນ',
          align: 'center',
          value: 'quantity',
          sortable: true,
        },
        {
          text: 'ລາຄາ',
          align: 'right',
          value: 'price',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫຼຸດ',
          align: 'right',
          value: 'discount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'right',
          value: 'total',
          sortable: true,
        },
        {
          text: 'ຜູ້ຂາຍ',
          align: 'left',
          value: 'user.cus_name',
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
    await this.loadUserData()
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
    orderLineByUser() {
      let lines = [];
      for (const iterator of this.activeOrderHeaderList) {
        for (const line of iterator['lines']) {
          line['user'] = iterator.user
          line['header'] = iterator
        }
        lines.push(...iterator['lines'])
      }
      return lines
    },
    ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
    activeOrderHeaderList() {
      return this.orderHeaderList.filter(el => el['isActive'] == true && el['paymentId'] != 2)
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
        total += el.total
      })
      return total
    },
    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.cartTotal)
      })
      return total
    },
    user() {
      return this.$auth.user || ''
    },
    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.discount)
      })
      return total
    },
    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach(element => {
        if (element.paymentStatus === 'PENDING' && element.payment.includes('COD')) {
          txnList.push(element)
        }
      });
      const totalPrice = txnList.reduce((total, item) => {
        return total + item.cartTotal;
      }, 0);
      const totalDiscount = txnList.reduce((total, item) => {
        return total + item.discount;
      }, 0);

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice;
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail;
    },
  },

  methods: {
    exportSimplePDFAudit() {
      // Implementation would go here
      this.$toast.success('PDF audit feature coming soon!')
    },

    exportToExcel() {
      let messageLineExport = []
      for (const iterator of this.orderLineByUser) {
        const user = iterator['user']['cus_name'];
        const product = iterator['product']['pro_name'];
        iterator['userName'] = user
        iterator['productName'] = product
        const newRow = {
          'ສິນຄ້າ': iterator['productName'],
          'ຈຳນວນ': iterator['quantity'],
          'ລາຄາ': iterator['price'],
          'ສ່ວນຫຼຸດ': iterator['discount'],
          'ລວມ': iterator['total'],
          'ຜູ້ຂາຍ': iterator['userName'],
        }
        messageLineExport.push(newRow)
      }
      const worksheet = this.$xlsx.utils.json_to_sheet(messageLineExport);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'sales_report.xlsx');
    },

    createSale() {
      this.componentKey += 1;
      this.selectedOrder = 0
      this.viewTransaction = false;
      this.dialogOrderDetail = true;
    },

    countDay(startDate) {
      return dayCount(startDate)
    },

    dueDate(startDate, day) {
      return getNextDate(startDate, day)
    },

    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    whatsappLink(item) {
      const tel = item.cusTel.trim();
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      window.open(this.whatsappContactLink, '_blank');
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },

    editItem(item) {
      this.componentKey += 1;
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail;
    },

    viewItem(item) {
      this.componentKey += 1;
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true;
    },

    cancelItem(payload) {
      this.componentCancelFormKey += 1;
      this.OrderIdSelected = payload.orderId
      this.cancelForm = true;
    },

    handleEvent() {
      this.dialogOrderDetail = false;
    },

    async loadData() {
      this.isloading = true
      const date = {
        startDate: this.date,
        endDate: this.date2,
        userId: this.creteria.userId
      }
      let apiLine = 'api/sale/findByDate'
      if (date.userId && date.userId !== -1) {
        apiLine = 'api/sale/findByDateAndUser'
      }

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })
        this.orderHeaderList = response.data
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could not load data ' + JSON.stringify(error))
      }

      this.isloading = false
    },

    async loadUserData() {
      this.isloading = true
      let apiLine = 'api/user/find'
      try {
        const response = await this.$axios.get(apiLine);
        this.userList = response.data
        this.userList.push({ id: -1, 'cus_name': 'ທັງຫມົດ' })
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could not load user data ' + JSON.stringify(error))
      }
      this.isloading = false
    },

    formatDate(date) {
      if (!date) return null
      const formattedDate = this.formatDateToISO(date);
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
}
</script>

<style scoped>
/* Enhanced Typography for Vuetify 2 + Nuxt 2 */
.sales-report-container {
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
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-primary-darken1) 100%) !important;
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
  background: linear-gradient(90deg, var(--v-primary-base), var(--v-secondary-base));
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
  background: radial-gradient(circle at 50% 50%, rgba(var(--v-primary-rgb), 0.03) 0%, transparent 70%);
  pointer-events: none;
}

.metric-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-color: var(--v-primary-base);
}

/* Summary Cards */
.summary-details {
  padding: 20px 0;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.summary-line.total {
  border-top: 3px solid var(--v-primary-base);
  border-bottom: none;
  padding-top: 20px;
  margin-top: 16px;
}

.progress-circle {
  position: relative;
}

.progress-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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

.product-info {
  padding: 8px 0;
}

.user-info {
  display: flex;
  align-items: center;
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
}

@media (max-width: 600px) {
  .sales-report-container {
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

.metric-card:nth-child(1) { animation-delay: 0.1s; }
.metric-card:nth-child(2) { animation-delay: 0.2s; }
.metric-card:nth-child(3) { animation-delay: 0.3s; }

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