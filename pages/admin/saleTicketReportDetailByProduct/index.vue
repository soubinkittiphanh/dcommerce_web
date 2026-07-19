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
            <h1 class=" font-weight-bold primary--text mb-0">ລາຍງານລາຍລະອຽດບິນຂາຍ</h1>
            <p class="subtitle-2 grey--text mb-0">Ticket Details & Payment Summary</p>
          </div>
        </div>
        <div class="d-flex align-center gap-2">
          <v-btn color="secondary" dark class="rounded-lg shadow-sm px-6" @click="guidelineDialog = true">
            <v-icon left>mdi-lifebuoy</v-icon>
            ຄູ່ມືການນຳໃຊ້
          </v-btn>
          <v-btn color="info" dark class="rounded-lg shadow-sm px-6" @click="exportSimplePDFAudit">
            <v-icon left>mdi-file-pdf</v-icon>
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

    <v-dialog v-model="dialogTicketDetail" max-width="900">
      <v-card class="ticket-detail-card elevation-4 rounded-xl overflow-hidden">
        <v-card-title class="primary white--text pa-4">
          <v-icon left color="white">mdi-receipt</v-icon>
          ລາຍລະອຽດບິນ: {{ selectedTicket.ticketNumber }}
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="dialogTicketDetail = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-6" v-if="selectedTicket">
          <v-row>
            <v-col cols="12" md="6">
              <div class="detail-group mb-4">
                <div class="grey--text  font-weight-bold mb-1">ບິນເລກທີ / ວັນທີ</div>
                <div class="body-1 font-weight-bold">#{{ selectedTicket.ticketNumber }} | {{
                  formatDateTime(selectedTicket.createdAt) }}</div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="detail-group mb-4 text-right">
                <div class="grey--text  font-weight-bold mb-1">ສະຖານະການຈ່າຍ</div>
                <v-chip :color="getPaymentStatusColor(selectedTicket.paymentStatus)" small dark>{{
                  getPaymentStatusText(selectedTicket.paymentStatus) }}</v-chip>
              </div>
            </v-col>
          </v-row>

          <v-simple-table class="compact-table border rounded-lg mb-4">
            <thead>
              <tr>
                <th class="text-left">ລາຍການ</th>
                <th class="text-center">ຈຳນວນ</th>
                <th class="text-right">ລາຄາ</th>
                <th class="text-right">ລວມ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="line in selectedTicket.ticketLines" :key="line.id">
                <td>{{ line.product?.pro_name }}</td>
                <td class="text-center">{{ line.quantity }}</td>
                <td class="text-right">{{ numberWithCommas(line.unitPrice) }}</td>
                <td class="text-right font-weight-bold">{{ numberWithCommas(line.totalPrice) }}</td>
              </tr>
            </tbody>
          </v-simple-table>

          <div class="d-flex justify-end">
            <div style="width: 240px">
              <div class="d-flex justify-space-between mb-1">
                <span class="grey--text">ລວມຍ່ອຍ:</span>
                <span class="font-numeric">{{ numberWithCommas(selectedTicket.subtotal) }}</span>
              </div>
              <div class="d-flex justify-space-between mb-1" v-if="selectedTicket.promotionDiscount > 0">
                <span class="orange--text">ສ່ວນຫຼຸດ:</span>
                <span class="orange--text font-numeric">-{{ numberWithCommas(selectedTicket.promotionDiscount) }}</span>
              </div>
              <v-divider class="my-2"></v-divider>
              <div class="d-flex justify-space-between">
                <span class="font-weight-bold">ລວມທັງໝົດ:</span>
                <span class="text-h6 font-weight-black primary--text">{{ numberWithCommas(selectedTicket.total)
                }}</span>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pa-4 grey lighten-5">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="printTicket" class="px-6 rounded-lg">
            <v-icon left>mdi-printer</v-icon>
            ພິມບິນ
          </v-btn>
          <v-btn outlined @click="dialogTicketDetail = false" class="px-6 rounded-lg ml-2">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
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

          <!-- Status Filter -->
          <v-col cols="12" md="3" class="px-2">
            <v-select v-model="statusFilter" :items="statusOptions" label="ສະຖານະການຈ່າຍເງິນ"
              prepend-inner-icon="mdi-credit-card-check" outlined dense hide-details class="compact-input"
              @change="loadData"></v-select>
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
            <v-btn color="secondary" class="rounded-md shadow-sm px-4" @click="printSummaryReport">
              <v-icon left>mdi-printer</v-icon>
              ລາຍງານ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- SUMMARY DASHBOARD -->
    <v-row class="mb-6">
      <v-col cols="12" md="4">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="indigo lighten-5" size="56" class="mb-3">
              <v-icon color="indigo darken-1" size="32">mdi-receipt-text</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ບິນທັງໝົດ</div>
            <div class=" font-weight-black indigo--text">{{ ticketsSummary.totalTickets }}</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="green lighten-5" size="56" class="mb-3">
              <v-icon color="green darken-1" size="32">mdi-check-circle-outline</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ບິນທີ່ຊຳລະແລ້ວ</div>
            <div class=" font-weight-black green--text">{{ ticketsSummary.paidTickets }}</div>
            <div class=" grey--text mt-1">{{ ((ticketsSummary.paidTickets / (ticketsSummary.totalTickets || 1)) *
              100).toFixed(1) }}% ຂອງທັງໝົດ</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="metric-card shadow-sm h-100">
          <v-card-text class="pa-5 text-center">
            <v-avatar color="primary lighten-5" size="56" class="mb-3">
              <v-icon color="primary darken-1" size="32">mdi-cash-multiple</v-icon>
            </v-avatar>
            <div class="grey--text text-uppercase  font-weight-bold mb-1">ລາຍຮັບລວມ (LAK)</div>
            <div class=" font-weight-black primary--text">{{ formatCurrency(ticketsSummary.totalRevenue) }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- PAYMENT TYPE BREAKDOWN (Compact Row) -->
    <v-row class="mb-6" v-if="paymentTypeSummary.length > 0">
      <v-col v-for="(payment, index) in paymentTypeSummary" :key="payment.code" cols="12" sm="6" md="3">
        <v-card class="shadow-sm rounded-lg border-left-indicator"
          :style="{ '--indicator-color': getPaymentCardColor(index) }">
          <v-card-text class="py-3 px-4 d-flex align-center">
            <v-icon :color="getPaymentCardColor(index)" class="mr-3">{{ getPaymentIcon(payment.code) }}</v-icon>
            <div class="flex-grow-1">
              <div class=" grey--text">{{ payment.name || payment.code }}</div>
              <div class="body-2 font-weight-black">{{ numberWithCommas(payment.amount) }}</div>
            </div>
            <div class="text-right">
              <div class=" primary--text font-weight-bold">{{ payment.count }} ບິນ</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- DATA TABLE -->
    <v-card class="shadow-sm rounded-xl overflow-hidden">
      <v-data-table :headers="headers" :items="filteredTickets" :search="search" :loading="isloading"
        class="compact-table" :items-per-page="15">

        <template v-slot:[`item.createdAt`]="{ item }">
          <v-chip x-small color="grey lighten-4" class="font-weight-medium">
            {{ formatDateTime(item.createdAt) }}
          </v-chip>
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getStatusColor(item.status)" x-small dark>{{ getStatusText(item.status) }}</v-chip>
        </template>

        <template v-slot:[`item.paymentStatus`]="{ item }">
          <v-chip :color="getPaymentStatusColor(item.paymentStatus)" x-small dark>{{
            getPaymentStatusText(item.paymentStatus) }}</v-chip>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <span class="font-weight-bold font-numeric">{{ numberWithCommas(item.total) }}</span>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex gap-1 justify-center">
            <v-btn icon small color="primary" @click="viewTicketDetail(item)">
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
            <v-btn icon small color="success" @click="printSingleTicket(item)">
              <v-icon small>mdi-printer</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Printing Area -->
    <div id="printArea" style="display: none">
      <div id="ticketPrint"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { ticketPrinter } from '~/utils/ticketPrinter'
import {
  swalSuccess,
  swalError2,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common/index'

export default {
  middleware: 'auths',
  data() {
    return {
      guidelineDialog: false,
      dialogTicketDetail: false,
      selectedTicket: {},
      isloading: false,
      search: '',
      ticketsList: [],
      statusFilter: 'paid',
      showAllProducts: false,

      statusOptions: [
        { text: 'ທັງໝົດ', value: null },
        { text: 'ຈ່າຍແລ້ວ', value: 'paid' },
        { text: 'ຍັງບໍ່ຈ່າຍ', value: 'pending' },
        { text: 'ຍົກເລີກ', value: 'cancel' },
        { text: 'ຄືນເງິນ', value: 'refunded' },
      ],

      headers: [
        {
          text: 'ເລກບິນ',
          align: 'center',
          value: 'ticketNumber',
          sortable: true,
        },
        {
          text: 'ວັນທີ-ເວລາ',
          align: 'center',
          value: 'createdAt',
          sortable: true,
        },
        {
          text: 'ສະຖານະ',
          align: 'center',
          value: 'status',
          sortable: true,
        },
        {
          text: 'ການຊຳລະ',
          align: 'center',
          value: 'paymentStatus',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ໂຕະ',
          align: 'center',
          value: 'table.name',
          sortable: true,
        },
        {
          text: 'ລາຄາລວມ',
          align: 'right',
          value: 'total',
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
  },

  watch: {
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
      'findAllTerminal',
      'findSelectedTerminal',
      'currentSelectedLocation',
      'findAllLocation',
    ]),
    companyInfo() {
      const currentTerminal = this.findAllTerminal?.find(
        (el) => el.id == this.findSelectedTerminal
      )
      const company = currentTerminal?.location?.company
      return {
        name: company?.name || 'Restaurant Name',
        address: company?.address || 'Vientiane, Laos',
        tel: company?.tel || '',
        email: company?.email || '',
        term_condition: company?.term_condition || ''
      }
    },
    user() {
      return this.$auth.user || ''
    },

    filteredTickets() {
      if (!this.statusFilter) {
        return this.ticketsList
      }
      return this.ticketsList.filter(
        (ticket) => ticket.paymentStatus === this.statusFilter
      )
    },

    ticketsSummary() {
      const summary = {
        totalTickets: this.ticketsList.length,
        paidTickets: this.ticketsList.filter((t) => t.paymentStatus === 'paid')
          .length,
        totalRevenue: this.ticketsList
          .filter((t) => t.paymentStatus === 'paid')
          .reduce((sum, ticket) => sum + parseFloat(ticket.total || 0), 0),
      }
      return summary
    },

    paymentTypeSummary() {
      const paidTickets = this.ticketsList.filter(
        (t) => t.paymentStatus === 'paid'
      )
      const paymentSummary = {}

      paidTickets.forEach((ticket) => {
        const paymentType = ticket.payment?.payment_name || 'ບໍ່ລະບຸ'
        const paymentCode = ticket.payment?.payment_code || 'UNKNOWN'

        if (!paymentSummary[paymentCode]) {
          paymentSummary[paymentCode] = {
            name: paymentType,
            code: paymentCode,
            count: 0,
            amount: 0,
          }
        }

        paymentSummary[paymentCode].count += 1
        paymentSummary[paymentCode].amount += parseFloat(ticket.total || 0)
      })

      return Object.values(paymentSummary).sort((a, b) => b.amount - a.amount)
    },

    productSummary() {
      const paidTickets = this.ticketsList.filter(
        (t) => t.paymentStatus === 'paid'
      )
      const productSummary = {}

      paidTickets.forEach((ticket) => {
        if (ticket.ticketLines && ticket.ticketLines.length > 0) {
          ticket.ticketLines.forEach((line) => {
            const productName = line.product?.pro_name || 'ບໍ່ລະບຸ'
            const productId = line.product?.id || 'unknown'

            if (!productSummary[productId]) {
              productSummary[productId] = {
                name: productName,
                id: productId,
                quantity: 0,
                total: 0,
              }
            }

            productSummary[productId].quantity += parseInt(line.quantity || 0)
            productSummary[productId].total += parseFloat(line.totalPrice || 0)
          })
        }
      })

      return Object.values(productSummary).sort((a, b) => b.total - a.total)
    },
  },

  methods: {
    // Payment filter methods
    filterByPaymentType(paymentCode) {
      // Toggle behavior - if already selected, clear filter
      if (this.statusFilter === paymentCode) {
        this.statusFilter = null
      } else {
        // Find the corresponding status filter value
        const paymentMapping = {
          CASH: 'paid',
          QR: 'paid',
          TRANSFER: 'paid',
          CARD: 'paid',
        }
        this.statusFilter = paymentMapping[paymentCode] || 'paid'
      }
      this.loadData()
    },

    // Enhanced export methods
    exportSimplePDFAudit() {
      try {
        const categoryCount = {}
        this.filteredTickets.forEach((ticket) => {
          ticket.ticketLines?.forEach((line) => {
            const category = line.product?.category?.categ_name || 'Unknown'
            categoryCount[category] = (categoryCount[category] || 0) + 1
          })
        })

        const auditData = {
          dateRange: `${this.dateFormatted} - ${this.dateFormatted2}`,
          totalTickets: this.filteredTickets.length,
          paidTickets: this.ticketsSummary.paidTickets,
          totalItems: this.productSummary.reduce(
            (sum, p) => sum + p.quantity,
            0
          ),
          categoryCount,
          paymentTypeSummary: this.paymentTypeSummary,
          productSummary: this.productSummary.slice(0, 10),
          statusBreakdown: this.getTicketStatusBreakdown(),
        }

        ticketPrinter.printAudit(auditData)
        this.$toast.success('PDF audit report generated!')
      } catch (error) {
        console.error(error)
        this.$toast.error('Failed to generate audit.')
      }
    },

    getTicketStatusBreakdown() {
      const statusBreakdown = {}
      this.filteredTickets.forEach((ticket) => {
        const status = this.getPaymentStatusText(ticket.paymentStatus)
        statusBreakdown[status] = (statusBreakdown[status] || 0) + 1
      })
      return Object.entries(statusBreakdown).map(([name, count]) => ({
        name,
        count,
      }))
    },

    async loadData() {
      this.isloading = true
      try {
        const params = {
          startDate: this.date,
          endDate: this.date2,
          include: 'client,table,ticketLines,payment',
          locationId: this.currentSelectedLocation?.id || 1,
        }

        const response = await this.$axios.get('api/ticket/find', { params })
        this.ticketsList = response.data.data || response.data || []
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'Could not load ticket data: ' + error.message
        )
        this.ticketsList = []
      }
      this.isloading = false
    },

    viewTicketDetail(ticket) {
      this.selectedTicket = ticket
      this.dialogTicketDetail = true
    },

    printSingleTicket(ticket) {
      this.selectedTicket = ticket
      this.printTicket()
    },

    printTicket() {
      // ✅ FIXED: Change printSingle to printCustomerReceipt to match ticketPrinter.js
      ticketPrinter.printCustomerReceipt(this.selectedTicket, {
        companyInfo: this.companyInfo, // Make sure you have this in computed
        formatPrice: (amt) => this.numberWithCommas(amt) + '₭',
        formatPrintDate: (date) => new Date(date).toLocaleDateString('en-GB'),
        formatPrintTime: (date) =>
          new Date(date).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        getQueNo: (num) => {
          const parts = num?.split('-')[0]?.split('/')
          return parts?.length === 2
            ? (parseInt(parts[0]) * parseInt(parts[1])).toString()
            : num
        },
      })
    },

    printSummaryReport() {
      const data = {
        startDate: this.dateFormatted,
        endDate: this.dateFormatted2,
        summary: this.ticketsSummary,
        paymentSummary: this.paymentTypeSummary,
        productSummary: this.productSummary.slice(0, 10),
        tickets: this.filteredTickets,
        formatDateTime: this.formatDateTime,
        numberWithCommas: this.numberWithCommas,
      }
      ticketPrinter.printSummary(data)
    },

    exportToExcel() {
      const tickets = this.filteredTickets

      const paymentSummaryData = this.paymentTypeSummary.map((payment) => ({
        ປະເພດການຊຳລະ: payment.name,
        ຈຳນວນບິນ: payment.count,
        ຍອດເງິນ: payment.amount,
      }))

      const productSummaryData = this.productSummary.map((product, index) => ({
        ອັນດັບ: index + 1,
        ສິນຄ້າ: product.name,
        ຈຳນວນ: product.quantity,
        ຍອດຂາຍ: product.total,
        ເປີເຊັນ:
          ((product.total / this.ticketsSummary.totalRevenue) * 100).toFixed(
            1
          ) + '%',
      }))

      const ticketsData = tickets.map((ticket) => ({
        ເລກບິນ: ticket.ticketNumber,
        ວັນທີ: this.formatDateTime(ticket.createdAt),
        ສະຖານະ: this.getStatusText(ticket.status),
        ລູກຄ້າ: ticket.client?.name || 'ບໍ່ລະບຸ',
        ໂຕະ: ticket.table?.name || 'ບໍ່ລະບຸ',
        ລາຄາລວມ: ticket.total,
      }))

      const workbook = this.$xlsx.utils.book_new()
      const paymentSummarySheet =
        this.$xlsx.utils.json_to_sheet(paymentSummaryData)
      this.$xlsx.utils.book_append_sheet(
        workbook,
        paymentSummarySheet,
        'Payment Summary'
      )

      const productSummarySheet =
        this.$xlsx.utils.json_to_sheet(productSummaryData)
      this.$xlsx.utils.book_append_sheet(
        workbook,
        productSummarySheet,
        'Product Summary'
      )

      const ticketsSheet = this.$xlsx.utils.json_to_sheet(ticketsData)
      this.$xlsx.utils.book_append_sheet(
        workbook,
        ticketsSheet,
        'Ticket Details'
      )

      this.$xlsx.writeFile(
        workbook,
        `ticket_report_${this.date}_${this.date2}.xlsx`
      )
    },

    // Helper methods for Vuetify theme colors
    getPaymentCardVuetifyColor(index) {
      const colors = [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
      ]
      return colors[index % colors.length]
    },

    getProductRankVuetifyColor(index) {
      if (index === 0) return 'success' // Gold equivalent
      if (index === 1) return 'secondary' // Silver equivalent
      if (index === 2) return 'warning' // Bronze equivalent
      if (index < 5) return 'primary' // Top 5
      return 'info' // Others
    },

    formatCurrency(amount) {
      return this.numberWithCommas(amount)
    },

    // Payment filter methods
    getPaymentIcon(paymentCode) {
      const iconMap = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        BANK: 'mdi-bank-transfer',
        QR: 'mdi-qrcode',
        TRANSFER: 'mdi-bank-transfer',
        UNKNOWN: 'mdi-help-circle',
      }
      return iconMap[paymentCode] || 'mdi-currency-usd'
    },

    getPaymentCardColor(index) {
      const colors = [
        'teal',
        'orange',
        'purple',
        'pink',
        'cyan',
        'indigo',
        'deep-orange',
        'light-green',
      ]
      return colors[index % colors.length]
    },

    getPaymentCardIconColor(index) {
      return 'white'
    },

    getProductRankColor(index) {
      if (index === 0) return 'amber'
      if (index === 1) return 'grey'
      if (index === 2) return 'deep-orange'
      if (index < 5) return 'blue'
      return 'teal'
    },

    // Helper methods
    formatDateTime(dateStr) {
      if (!dateStr) return '-'
      const date = new Date(dateStr)
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    },

    getStatusText(status) {
      const statusMap = {
        pending: 'ລໍຖ້າ',
        preparing: 'ກຳລັງກະກຽມ',
        ready: 'ພ້ອມແລ້ວ',
        served: 'ສົ່ງແລ້ວ',
        paid: 'ຊຳລະແລ້ວ',
        cancel: 'ຍົກເລີກ',
        void: 'ບັດເຖິງ',
      }
      return statusMap[status] || status
    },

    getPaymentStatusText(status) {
      const statusMap = {
        pending: 'ຍັງບໍ່ຊຳລະ',
        paid: 'ຊຳລະແລ້ວ',
        refunded: 'ຄືນເງິນ',
        cancel: 'ຍົກເລີກ',
      }
      return statusMap[status] || status
    },

    getStatusColor(status) {
      const colorMap = {
        pending: 'orange',
        preparing: 'blue',
        ready: 'purple',
        served: 'teal',
        paid: 'green',
        cancel: 'red',
        void: 'grey',
      }
      return colorMap[status] || 'grey'
    },

    getPaymentStatusColor(status) {
      const colorMap = {
        pending: 'orange',
        paid: 'green',
        refunded: 'blue',
        cancel: 'red',
      }
      return colorMap[status] || 'grey'
    },

    numberWithCommas(value) {
      return getFormatNum(value)
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
    getPaymentCardColor(index) {
      const colors = ['#3f51b5', '#4caf50', '#ff9800', '#9c27b0', '#f44336', '#00bcd4']
      return colors[index % colors.length]
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

.border-left-indicator {
  border-left: 4px solid var(--indicator-color) !important;
}

.loading-card {
  border-radius: 16px !important;
}
</style>