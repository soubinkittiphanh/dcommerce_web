<template>
  <div class="sales-report-container">
    <!-- MODERN HEADER SECTION -->
    <div class="header-section">
      <div class="d-flex align-center justify-space-between mb-6">
        <div class="d-flex align-center">
          <v-btn icon color="primary" class="mr-4 shadow-sm" @click="$router.back()" large>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <div>
            <h1 class=" font-weight-bold primary--text mb-0">ລາຍງານການຂາຍຕາມຜູ້ຂາຍ</h1>
            <p class="subtitle-2 grey--text mb-0">Sales Performance Tracking by Personnel</p>
          </div>
        </div>
        <div class="d-flex align-center gap-2">
          <v-btn color="secondary" dark class="rounded-lg shadow-sm px-6" @click="guidelineDialog = true">
            <v-icon left>mdi-lifebuoy</v-icon>
            ຄູ່ມືການນຳໃຊ້
          </v-btn>
          <v-btn color="lightprimary" dark class="rounded-lg shadow-sm px-6" @click="exportSimplePDFAudit">
            <v-icon left>mdi-file-chart</v-icon>
            PDF Audit
          </v-btn>
        </div>
      </div>
    </div>

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
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM"></youtube-player>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD @reload="loadData(); dialogOrderDetail = false" :is-quotation="false" :key="componentKey"
        :is-update="viewTransaction" :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()"></cancel-ticket-form>
    </v-dialog>

    <!-- COMPACT ACTION BAR (FILTERS) -->
    <v-card class="filter-strip mb-6 shadow-sm">
      <v-card-text class="pa-3">
        <v-row align="center" no-gutters>
          <!-- Date Pickers -->
          <v-col cols="12" md="4" class="px-2">
            <div class="d-flex align-center gap-2">
              <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ" prepend-inner-icon="mdi-calendar" readonly
                    outlined dense hide-details class="compact-input" v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
              </v-menu>
              <v-icon small class="grey--text">mdi-arrow-right</v-icon>
              <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ" prepend-inner-icon="mdi-calendar" readonly
                    outlined dense hide-details class="compact-input" v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
            </div>
          </v-col>

          <!-- User Filter -->
          <v-col cols="12" md="3" class="px-2">
            <v-autocomplete v-model="creteria.userId" :items="userList" item-text="cus_name" item-value="id"
              label="ພະນັກງານຂາຍ" prepend-inner-icon="mdi-account-tie" outlined dense hide-details
              class="compact-input"></v-autocomplete>
          </v-col>

          <!-- Search -->
          <v-col cols="12" md="2" class="px-2">
            <v-text-field v-model="search" label="ຊອກຫາ..." prepend-inner-icon="mdi-magnify" outlined dense hide-details
              clearable class="compact-input"></v-text-field>
          </v-col>

          <!-- Action Buttons -->
          <v-col cols="12" md="3" class="px-2 text-right d-flex justify-end gap-2">
            <v-btn color="primary" class="rounded-md shadow-sm" icon @click="loadData">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn color="success" class="rounded-md shadow-sm px-4" @click="exportToExcel">
              <v-icon left>mdi-microsoft-excel</v-icon>
              Excel
            </v-btn>
            <v-btn color="primary" dark class="rounded-md shadow-sm px-4" @click="createSale">
              <v-icon left>mdi-plus</v-icon>
              Create
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- SUMMARY DASHBOARD -->
    <v-row class="mb-6">
      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="indigo lighten-5" size="56" class="mb-3">
              <v-icon color="indigo darken-1" size="32">mdi-account-group</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ຈຳນວນບິນທັງໝົດ</div>
            <div class=" font-weight-black indigo--text">{{ numberWithCommas(activeOrderHeaderList.length) }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="green lighten-5" size="56" class="mb-3">
              <v-icon color="green darken-1" size="32">mdi-bank</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ລາຍຮັບລວມ (LAK)</div>
            <div class=" font-weight-black green--text">{{ getFormatNum(totalSale - totalDiscount) }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="deep-purple lighten-5" size="56" class="mb-3">
              <v-icon color="deep-purple darken-1" size="32">mdi-chart-bar-stacked</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ສ່ວນຫຼຸດລວມ</div>
            <div class=" font-weight-black deep-purple--text">{{ getFormatNum(totalDiscount) }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100 border-left-primary">
          <v-card-text class="pa-5">
            <div class="grey--text  font-weight-bold mb-2">Performance Summary</div>
            <div class="d-flex align-center justify-space-between mb-2">
              <span class="">ສະເລ່ຍຕໍ່ບິນ:</span>
              <span class="font-weight-bold primary--text">{{ averageOrderValue }}</span>
            </div>
            <v-divider class="my-2"></v-divider>
            <div class="d-flex align-center justify-space-between">
              <span class="">ຍອດ COD ຄ້າງ:</span>
              <span class="font-weight-bold orange--text">{{ unpaidCodOrder.sale }}</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- DATA TABLE -->
    <v-card class="shadow-sm rounded-xl overflow-hidden">
      <v-data-table :headers="enhancedHeaders" :items="orderLineByUser" :search="search" :loading="isloading"
        class="compact-table" :items-per-page="15">

        <template v-slot:[`item.header.id`]="{ item }">
          <span class="font-weight-bold primary--text">#{{ item.header.id }}</span>
        </template>

        <template v-slot:[`item.header.bookingDate`]="{ item }">
          <v-chip x-small color="grey lighten-4" class="font-weight-medium">
            {{ item.header.bookingDate.split('T')[0] }}
          </v-chip>
        </template>

        <template v-slot:[`item.user.cus_name`]="{ item }">
          <div class="d-flex align-center">
            <v-avatar size="24" color="primary lighten-4" class="mr-2">
              <span class="primary--text  font-weight-bold">{{ item.user.cus_name.charAt(0) }}</span>
            </v-avatar>
            <span class="">{{ item.user.cus_name }}</span>
          </div>
        </template>

        <template v-slot:[`item.price`]="{ item }">
          <span class="font-numeric">{{ numberWithCommas(item.price) }}</span>
        </template>

        <template v-slot:[`item.discount`]="{ item }">
          <span class="orange--text font-numeric text-small">-{{ numberWithCommas(item.discount) }}</span>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <span class="font-weight-bold font-numeric green--text">{{ numberWithCommas(item.total) }}</span>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex gap-1 justify-center">
            <v-btn icon small color="primary" @click="viewItem(item.header)">
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn icon small color="success" @click="whatsappLink(item.header)" v-if="item.header.cusTel">
              <v-icon small>mdi-whatsapp</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
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
    averageOrderValue() {
      if (this.activeOrderHeaderList.length === 0) return '0.00';
      const total = (this.totalSale - this.totalDiscount) / this.activeOrderHeaderList.length;
      return this.getFormatNum(total);
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

.sales-report-container {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Noto Sans Lao', sans-serif;
}

.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
}

.metric-card {
  border-radius: 16px !important;
  border: 1px solid #edf2f7 !important;
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08) !important;
}

.filter-strip {
  border-radius: 12px !important;
  background: white !important;
  border: 1px solid #e2e8f0 !important;
}

.compact-input ::v-deep .v-input__control {
  min-height: 40px !important;
}

.compact-input ::v-deep .v-input__slot {
  background: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
}

.gap-2 {
  gap: 8px;
}

.rounded-md {
  border-radius: 8px !important;
}

.compact-table {
  background: white !important;
}

.compact-table ::v-deep th {
  background-color: #f8fafc !important;
  color: #64748b !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  font-size: 0.75rem !important;
  letter-spacing: 0.025em;
  padding: 12px 16px !important;
}

.compact-table ::v-deep td {
  padding: 12px 16px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.font-numeric {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.011em;
}

.border-left-primary {
  border-left: 4px solid var(--v-primary-base) !important;
}

.gap-1 {
  gap: 4px;
}

.loading-card {
  border-radius: 16px !important;
}
</style>