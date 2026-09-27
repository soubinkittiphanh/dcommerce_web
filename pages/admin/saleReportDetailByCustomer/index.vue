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
            <h1 class="font-weight-bold primary--text mb-0">ລາຍງານການຂາຍຕາມລູກຄ້າ</h1>
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
          <v-col cols="12" md="3" class="px-2">
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
          <v-col cols="12" md="2" class="px-2">
            <v-autocomplete v-model="creteria.clientId" :items="customerList" item-text="name" item-value="id"
              label="ເລືອກລູກຄ້າ" prepend-inner-icon="mdi-account" outlined dense hide-details
              class="compact-input" @change="loadData"></v-autocomplete>
          </v-col>

          <!-- Location / Terminal Filter -->
          <v-col cols="12" md="2" class="px-2">
            <v-autocomplete v-model="terminalId" :items="customTerminalList" item-text="name" item-value="id"
              label="ເລືອກຕາມ ຮ້ານ*" prepend-inner-icon="mdi-store" outlined dense hide-details
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
            <div class="grey--text text-uppercase font-weight-bold mb-1">ຈຳນວນບິນທັງໝົດ</div>
            <div class="text-h5 font-weight-black blue--text">{{ numberWithCommas(activeOrderHeaderList.length) }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="green lighten-5" size="56" class="mb-3">
              <v-icon color="green darken-1" size="32">mdi-cash-multiple</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase font-weight-bold mb-1">ຍອດຂາຍສຸດທິ ({{ localCurrency?.code || 'LAK' }})</div>
            <div class="text-h5 font-weight-black green--text">{{ getFormatNum(summaryNetLocal) }}</div>
            <div class="caption grey--text mt-1">ຍອດເຕັມ: {{ getFormatNum(summaryGrossLocal) }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="orange lighten-5" size="56" class="mb-3">
              <v-icon color="orange darken-1" size="32">mdi-sale</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase font-weight-bold mb-1">ສ່ວນຫຼຸດລວມ</div>
            <div class="text-h5 font-weight-black orange--text">{{ getFormatNum(summaryDiscountLocal) }}</div>
            <div class="caption grey--text mt-1">{{ localCurrency?.code || 'LAK' }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="red lighten-5" size="56" class="mb-3">
              <v-icon color="red darken-1" size="32">mdi-credit-card-outline</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase font-weight-bold mb-1">ຍອດຂາຍຕິດໜີ້ (Credit)</div>
            <div class="text-h5 font-weight-black red--text">{{ getFormatNum(summaryCreditLocal) }}</div>
            <div class="caption grey--text mt-1">ຈຳນວນ: {{ creditOrders.length }} ບິນ</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- DATA TABLE -->
    <v-card class="shadow-sm rounded-xl overflow-hidden">
      <v-data-table :headers="headers" :items="orderLineByUser" :search="search" :loading="isloading"
        class="compact-table" :items-per-page="15">

        <template v-slot:[`item.header.id`]="{ item }">
          <span class="font-weight-bold primary--text">#{{ item.header ? item.header.id : item.id }}</span>
        </template>

        <template v-slot:[`item.header.bookingDate`]="{ item }">
          <div class="d-flex align-center">
            <v-icon small color="grey lighten-1" class="mr-1">mdi-clock-outline</v-icon>
            <span>{{ item.header && item.header.bookingDate ? item.header.bookingDate.split('T')[0] : '-' }}</span>
          </div>
        </template>

        <template v-slot:[`item.price`]="{ item }">
          <span class="font-weight-medium grey--text text--darken-2 font-numeric">
            {{ numberWithCommas(item.price) }}
          </span>
        </template>

        <template v-slot:[`item.discount`]="{ item }">
          <span class="orange--text font-weight-medium font-numeric">
            {{ numberWithCommas(item.discount || 0) }}
          </span>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <span class="green--text font-weight-bold font-numeric">
            {{ numberWithCommas(item.total) }}
          </span>
        </template>

        <template v-slot:[`item.paymentMethod`]="{ item }">
          <v-chip v-if="isCreditOrder(item.header)" small color="red" text-color="white" class="font-weight-bold">
            <v-icon left x-small>mdi-credit-card-outline</v-icon>
            ຕິດໜີ້ (CREDIT)
          </v-chip>
          <v-chip v-else small color="primary" outlined class="font-weight-medium">
            {{ getPaymentDisplayName(item.header) }}
          </v-chip>
        </template>

        <template v-slot:[`item.cusTel`]="{ item }">
          <v-btn v-if="item.cusTel || (item.client && item.client.telephone)" small text color="info"
            class="rounded-pill text-none px-2" @click="whatsappLink(item)">
            <v-icon left x-small>mdi-whatsapp</v-icon>
            {{ item.cusTel || (item.client && item.client.telephone) }}
          </v-btn>
          <span v-else class="grey--text">N/A</span>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex gap-1 justify-center">
            <v-btn icon small color="primary" @click="viewItem(item.header)">
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn icon small color="orange" @click="cancelItem({ orderId: item.header ? item.header.id : item.id })">
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
      terminalId: 999,
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
        { text: 'ການຊຳລະ', align: 'center', value: 'paymentMethod', sortable: false },
        { text: 'ຜູ້ຂາຍ', align: 'left', value: 'user.cus_name', sortable: true },
        { text: 'ການດຳເນີນການ', align: 'center', value: 'actions', sortable: false },
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
    this.terminalId = this.findSelectedTerminal || 999
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
    'creteria.clientId'() {
      this.loadData()
    },
  },
  computed: {
    ...mapGetters([
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
      'findLocalCurrency',
      'findAllTerminal',
      'findSelectedTerminal'
    ]),

    localCurrency() {
      return (
        this.findAllCurrency?.find((c) => c.isLocalCCY === true || c.isLocalCCY === 1) ||
        this.findLocalCurrency || { code: 'LAK' }
      )
    },

    customTerminalList() {
      let originalTerminalListVanilla = JSON.stringify(this.findAllTerminal || [])
      let originalTerminalList = JSON.parse(originalTerminalListVanilla)
      const extraTerminal = {
        id: 999,
        code: 1999,
        name: 'ທັງໝົດ',
        description: '',
        locationId: 1,
      }
      originalTerminalList.push(extraTerminal)
      return originalTerminalList
    },

    // Include ALL active sales, including credit invoices (paymentId == 2), filtered by terminal/location
    activeOrderHeaderList() {
      const terminal = this.findAllTerminal?.find(
        (el) => el['id'] == this.terminalId
      )
      if (!terminal || this.terminalId === 999) {
        return this.orderHeaderList.filter((el) => el && el.isActive === true)
      }
      return this.orderHeaderList.filter(
        (el) =>
          el &&
          el.isActive === true &&
          (el.locationId == terminal.locationId || el.terminalId == this.terminalId)
      )
    },

    orderLineByUser() {
      let lines = []
      const searchTerm = this.search?.toLowerCase() || ''

      this.activeOrderHeaderList.forEach((iterator) => {
        iterator['lines']?.forEach((line) => {
          line['user'] = iterator.user
          line['client'] = iterator.client
          line['header'] = iterator
          line['cusTel'] = iterator.client?.telephone || iterator.cusTel || ''

          const matchesSearch =
            !searchTerm ||
            line.product?.pro_name?.toLowerCase().includes(searchTerm) ||
            iterator.id?.toString().includes(searchTerm) ||
            iterator.client?.name?.toLowerCase().includes(searchTerm) ||
            iterator.user?.cus_name?.toLowerCase().includes(searchTerm)

          if (matchesSearch) {
            lines.push(line)
          }
        })
      })
      return lines
    },

    // Currency converted totals
    summaryGrossLocal() {
      return this.activeOrderHeaderList.reduce((sum, header) => {
        return sum + this.calculateHeaderTotalLocal(header) + this.calculateHeaderDiscountLocal(header)
      }, 0)
    },

    summaryDiscountLocal() {
      return this.activeOrderHeaderList.reduce((sum, header) => {
        return sum + this.calculateHeaderDiscountLocal(header)
      }, 0)
    },

    summaryNetLocal() {
      return this.activeOrderHeaderList.reduce((sum, header) => {
        return sum + this.calculateHeaderTotalLocal(header)
      }, 0)
    },

    creditOrders() {
      return this.activeOrderHeaderList.filter((header) => this.isCreditOrder(header))
    },

    summaryCreditLocal() {
      return this.creditOrders.reduce((sum, header) => {
        return sum + this.calculateHeaderTotalLocal(header)
      }, 0)
    },

    totalSale() {
      return this.summaryNetLocal
    },

    totalDiscount() {
      return this.summaryDiscountLocal
    },

    user() {
      return this.$auth.user || ''
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach((element) => {
        if (
          element.paymentStatus === 'PENDING' &&
          (element.payment?.payment_code?.includes('COD') ||
            element.payments?.some((p) => p.paymentMethod?.payment_code?.includes('COD')) ||
            (typeof element.payment === 'string' && element.payment.includes('COD')))
        ) {
          txnList.push(element)
        }
      })
      const totalPrice = txnList.reduce((total, item) => {
        return total + (item.cartTotal || item.total || 0)
      }, 0)
      const totalDiscount = txnList.reduce((total, item) => {
        return total + (item.discount || 0)
      }, 0)

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail
    },
  },

  methods: {
    calculateHeaderTotalLocal(header) {
      if (!header) return 0
      const headerCcy = this.findAllCurrency?.find(
        (c) => Number(c.id) === Number(header.currencyId)
      )
      const isHeaderLocal =
        headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
      const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1

      return Number(header.total || 0) * headerRate
    },

    calculateHeaderDiscountLocal(header) {
      if (!header) return 0
      const headerCcy = this.findAllCurrency?.find(
        (c) => Number(c.id) === Number(header.currencyId)
      )
      const isHeaderLocal =
        headerCcy?.isLocalCCY === true || headerCcy?.isLocalCCY === 1
      const headerRate = isHeaderLocal ? 1 : header.exchangeRate || 1

      return Number(header.discount || 0) * headerRate
    },

    isCreditOrder(header) {
      if (!header) return false
      return (
        header.paymentId === 2 ||
        header.payment?.payment_code === 'CREDIT' ||
        header.payment === 'CREDIT' ||
        header.payments?.some(
          (p) =>
            p.paymentMethod?.payment_code === 'CREDIT' ||
            p.paymentId === 2 ||
            p.payment_id === 2
        )
      )
    },

    getPaymentDisplayName(header) {
      if (!header) return 'N/A'
      if (this.isCreditOrder(header)) {
        return 'ຕິດໜີ້ (CREDIT)'
      }
      if (header.payments && header.payments.length > 1) {
        return `ຫຼາຍວິທີ (${header.payments.length})`
      }
      return (
        header.payment?.payment_name ||
        header.payments?.[0]?.paymentMethod?.payment_name ||
        header.payment?.payment_code ||
        (header.paymentId &&
          this.findAllPayment?.find((p) => p.id === header.paymentId)?.payment_name) ||
        header.payment ||
        'N/A'
      )
    },

    exportToExcel() {
      let messageLineExport = []
      for (const iterator of this.orderLineByUser) {
        const user = iterator['user']?.['cus_name'] || '-'
        const customer = iterator['client']?.['name'] || 'Walk-in'
        const product = iterator['product']?.['pro_name'] || '-'
        const orderId = iterator['header']?.['id'] || '-'
        const date = iterator['header']?.['bookingDate']
          ? iterator['header']['bookingDate'].split('T')[0]
          : ''
        const payment = this.getPaymentDisplayName(iterator['header'])

        const newRow = {
          'ເລກອໍເດີ': orderId,
          'ວັນທີ': date,
          'ລູກຄ້າ': customer,
          'ສິນຄ້າ': product,
          'ຈຳນວນ': iterator['quantity'] || 0,
          'ລາຄາ': iterator['price'] || 0,
          'ສ່ວນຫຼຸດ': iterator['discount'] || 0,
          'ລວມ': iterator['total'] || 0,
          'ການຊຳລະ': payment,
          'ຜູ້ຂາຍ': user,
        }
        messageLineExport.push(newRow)
      }
      const worksheet = this.$xlsx.utils.json_to_sheet(messageLineExport)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Customer Sales')
      this.$xlsx.writeFile(
        workbook,
        `customer_sales_${this.date}_to_${this.date2}.xlsx`
      )
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
      if (value === undefined || value === null) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    whatsappLink(item) {
      const tel = (item.cusTel || item.client?.telephone || '').trim()
      if (!tel) return
      const completeTel = tel.substring(tel.length - 8)
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent(
        'ສະບາຍດີ ລູກຄ້າ '
      )}`
      window.open(this.whatsappContactLink, '_blank')
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val || 0)
    },

    editItem(item) {
      this.componentKey += 1
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail
    },

    viewItem(item) {
      if (!item) return
      this.componentKey += 1
      this.viewTransaction = true
      this.selectedOrder = item.id
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
        clientId: this.creteria.clientId,
      }
      let apiLine = 'api/sale/findByDate'
      if (
        date.clientId &&
        date.clientId !== -1 &&
        date.clientId !== '-1' &&
        Number(date.clientId) > 0
      ) {
        apiLine = 'api/sale/findByDateAndCustomer'
      }

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

    async loadClientData() {
      this.isloading = true
      let apiLine = 'api/client/find'
      try {
        const response = await this.$axios.get(apiLine)
        this.customerList = response.data || []
        this.customerList.unshift({ id: -1, name: 'ທັງຫມົດ' })
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'Could not load data ' + JSON.stringify(error)
        )
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
