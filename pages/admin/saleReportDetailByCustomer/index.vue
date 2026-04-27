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
            <h1 class=" font-weight-bold primary--text mb-0">ລາຍງານການຂາຍຕາມລູກຄ້າ</h1>
            <p class="subtitle-2 grey--text mb-0">Customer Sales Performance Analysis</p>
          </div>
        </div>
        <div class="d-flex align-center gap-2">
          <v-btn color="secondary" dark class="rounded-lg shadow-sm px-6" @click="guidelineDialog = true">
            <v-icon left>mdi-lifebuoy</v-icon>
            ຄູ່ມືການນຳໃຊ້
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

          <!-- Customer Filter -->
          <v-col cols="12" md="3" class="px-2">
            <v-autocomplete v-model="creteria.clientId" :items="customerList" item-text="name" item-value="id"
              label="ເລືອກລູກຄ້າ" prepend-inner-icon="mdi-account" outlined dense hide-details
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
            <v-avatar color="blue lighten-5" size="56" class="mb-3">
              <v-icon color="blue darken-1" size="32">mdi-receipt-text</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ຈຳນວນບິນທັງໝົດ</div>
            <div class=" font-weight-black blue--text">{{ numberWithCommas(activeOrderHeaderList.length) }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="green lighten-5" size="56" class="mb-3">
              <v-icon color="green darken-1" size="32">mdi-cash-multiple</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ຍອດຂາຍລວມ (LAK)</div>
            <div class=" font-weight-black green--text">{{ getFormatNum(totalSale - totalDiscount) }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="orange lighten-5" size="56" class="mb-3">
              <v-icon color="orange darken-1" size="32">mdi-sale</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ສ່ວນຫຼຸດລວມ</div>
            <div class=" font-weight-black orange--text">{{ getFormatNum(totalDiscount) }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5">
            <div class="d-flex align-center justify-space-between mb-2">
              <div class="grey--text  font-weight-bold">ຍອດບິນ COD ຄ້າງຊຳລະ</div>
              <v-chip x-small color="orange" dark class="font-weight-bold">PENDING</v-chip>
            </div>
            <div class="text-h5 font-weight-bold mb-1">{{ unpaidCodOrder.sale }}</div>
            <div class=" grey--text d-flex align-center justify-space-between">
              <span>ຈຳນວນ: {{ unpaidCodOrder.amount }} ບິນ</span>
              <v-icon x-small color="orange">mdi-truck-delivery</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- DATA TABLE -->
    <v-card class="shadow-sm rounded-xl overflow-hidden">
      <v-data-table :headers="headers" :items="orderLineByUser" :search="search" :loading="isloading"
        class="compact-table" :items-per-page="15">

        <template v-slot:[`item.header.id`]="{ item }">
          <span class="font-weight-bold primary--text">#{{ item.header.id }}</span>
        </template>

        <template v-slot:[`item.header.bookingDate`]="{ item }">
          <div class="d-flex align-center">
            <v-icon small color="grey lighten-1" class="mr-1">mdi-clock-outline</v-icon>
            <span>{{ item.header.bookingDate.split('T')[0] }}</span>
          </div>
        </template>

        <template v-slot:[`item.price`]="{ item }">
          <span class="font-weight-medium grey--text text--darken-2 font-numeric">
            {{ numberWithCommas(item.price) }}
          </span>
        </template>

        <template v-slot:[`item.discount`]="{ item }">
          <span class="orange--text font-weight-medium font-numeric">
            {{ numberWithCommas(item.discount) }}
          </span>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <span class="green--text font-weight-bold font-numeric">
            {{ numberWithCommas(item.total) }}
          </span>
        </template>

        <template v-slot:[`item.cusTel`]="{ item }">
          <v-btn small text color="info" class="rounded-pill text-none px-2" @click="whatsappLink(item)">
            <v-icon left x-small>mdi-whatsapp</v-icon>
            {{ item.cusTel }}
          </v-btn>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex gap-1 justify-center">
            <v-btn icon small color="primary" @click="viewItem(item.header)">
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn icon small color="orange" @click="cancelItem({ orderId: item.header.id })">
              <v-icon small>mdi-cancel</v-icon>
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
      customerList: [],
      creteria: {
        clientId: -1,
      },
      headers: [
        { text: 'ເລກອໍເດີ', align: 'center', value: 'header.id', sortable: true },
        { text: 'ວັນທີ', align: 'start', value: 'header.bookingDate', sortable: true },
        { text: 'ລູກຄ້າ', align: 'left', value: 'client.name', sortable: true },
        { text: 'ສິນຄ້າ', align: 'left', value: 'product.pro_name', sortable: true },
        { text: 'ຈ/ນ', align: 'center', value: 'quantity', sortable: true },
        { text: 'ລາຄາ', align: 'right', value: 'price', sortable: true },
        { text: 'ສ່ວນຫຼຸດ', align: 'right', value: 'discount', sortable: true },
        { text: 'ລວມ', align: 'right', value: 'total', sortable: true },
        { text: 'ຜູ້ຂາຍ', align: 'left', value: 'user.cus_name', sortable: true },
        { text: 'ການດຳເນີນການ', align: 'center', value: 'actions', sortable: false },
      ],
      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        // new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        //   .toISOString()
        //   .substr(0, 10)
        getFirstDayOfMonth()
      ),
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
    // this.creteria.userId = this.user['id']
    await this.loadData()
    await this.loadClientData()
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
      const searchTerm = this.search?.toLowerCase() || '';

      this.activeOrderHeaderList.forEach((iterator) => {
        // Filter lines based on search if needed (already mostly handled by v-data-table)
        iterator['lines']?.forEach((line) => {
          line['user'] = iterator.user;
          line['client'] = iterator.client;
          line['header'] = iterator;

          // Search logic for nesting
          const matchesSearch = !searchTerm ||
            line.product?.pro_name?.toLowerCase().includes(searchTerm) ||
            iterator.id?.toString().includes(searchTerm) ||
            iterator.client?.name?.toLowerCase().includes(searchTerm);

          if (matchesSearch) {
            lines.push(line);
          }
        });
      });
      return lines;
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
      // return total
    },
    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        console.log("====>", el.cartTotal);
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return total
      // return total
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
      // return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach(element => {
        if (element.paymentStatus === 'PENDING' && element.payment.includes('COD')) {
          console.log("Concept applied");
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
    exportToExcel() {
      let messageLineExport = []
      for (const iterator of this.orderLineByUser) {
        const user = iterator['user']['cus_name'];
        const customer = iterator['client']['name'];
        const product = iterator['product']['pro_name'];
        iterator['userName'] = user
        iterator['customer'] = customer
        iterator['productName'] = product
        const newRow = {
          'ສິນຄ້າ': iterator['productName'],
          'ຈຳນວນ': iterator['quantity'],
          'ລາຄາ': iterator['price'],
          'ສ່ວນຫຼຸດ': iterator['discount'],
          'ລວມ': iterator['total'],
          'ຜູ້ຂາຍ': iterator['userName'],
          'ລູກຄ້າ': iterator['customer'],
        }
        messageLineExport.push(newRow)

      }
      const worksheet = this.$xlsx.utils.json_to_sheet(messageLineExport);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'data.xlsx');
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
      console.log("DATE ", startDate, " to ", day);
      return getNextDate(startDate, day)
    },
    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    whatsappLink(item) {
      // const completeTel = tel.substring(tel.length-7);
      const tel = item.cusTel.trim();

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
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
      console.log("Order id", payload.orderId);
      this.componentCancelFormKey += 1;
      this.OrderIdSelected = payload.orderId
      // this.orderLockingSessionId = payload.lockingSessionId;
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
        clientId: this.creteria.clientId
      }
      let apiLine = 'api/sale/findByDate'
      if (date.clientId) {
        apiLine = 'api/sale/findByDateAndCustomer'
      }

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })
        this.orderHeaderList = response.data
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + JSON.stringify(error))
      }

      this.isloading = false
    },
    async loadClientData() {
      this.isloading = true
      let apiLine = 'api/client/find'
      try {
        const response = await this.$axios.get(apiLine);
        this.customerList = response.data
        this.customerList.push({ id: -1, 'name': 'ທັງຫມົດ' })
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + JSON.stringify(error))
      }
      this.isloading = false
    },
    formatDate(date) {
      if (!date) return null
      console.log("DATE FORMAT METHOD1: " + date);
      const formattedDate = this.formatDateToISO(date);
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      console.log("DATE PARSE METHOD1: " + date);
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
}
</script>

<style scoped>
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

.loading-card {
  border-radius: 16px !important;
}
</style>
