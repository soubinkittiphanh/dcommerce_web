<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-receipt</v-icon>
        <h3>ລາຍງານການຂາຍບິນ</h3>
      </v-chip>
      <v-chip
        class="pa-5"
        color="primary"
        label
        text-color="white"
        @click="guidelineDialog = true"
      >
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Loading Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Guideline Dialog -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="W6KiQWtiqBM"
      >
      </youtube-player>
    </v-dialog>

    <!-- Ticket Detail Dialog -->
    <v-dialog v-model="dialogTicketDetail" max-width="800">
      <v-card>
        <v-card-title
          class="headline"
          style="background-color: primary; color: white"
        >
          <v-icon left color="white">mdi-receipt</v-icon>
          ລາຍລະອຽດບິນ: {{ selectedTicket.ticketNumber }}
        </v-card-title>

        <v-card-text class="pt-4" v-if="selectedTicket">
          <v-row>
            <v-col cols="6">
              <strong>ເລກບິນ:</strong> {{ selectedTicket.ticketNumber }}<br />
              <strong>ວັນທີ:</strong>
              {{ formatDateTime(selectedTicket.createdAt) }}<br />
              <strong>ສະຖານະ:</strong>
              {{ getStatusText(selectedTicket.status) }}
            </v-col>
            <v-col cols="6">
              <strong>ການຈ່າຍເງິນ:</strong>
              {{ getPaymentStatusText(selectedTicket.paymentStatus) }}<br />
              <strong>ລູກຄ້າ:</strong>
              {{ selectedTicket.client?.name || 'ບໍ່ລະບຸ' }}<br />
              <strong>ໂຕະ:</strong>
              {{ selectedTicket.table?.name || 'ບໍ່ລະບຸ' }}
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <h4 class="mb-3">ລາຍການສິນຄ້າ:</h4>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ສິນຄ້າ</th>
                  <th class="text-center">ຈຳນວນ</th>
                  <th class="text-center">ລາຄາ/ໜ່ວຍ</th>
                  <th class="text-right">ລວມ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="line in selectedTicket.ticketLines" :key="line.id">
                  <td>{{ line.product?.pro_name || 'ບໍ່ລະບຸ' }}</td>
                  <td class="text-center">{{ line.quantity }}</td>
                  <td class="text-center">
                    {{ numberWithCommas(line.unitPrice) }}
                  </td>
                  <td class="text-right">
                    {{ numberWithCommas(line.totalPrice) }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <v-divider class="my-4"></v-divider>

          <v-row>
            <v-col cols="8"></v-col>
            <v-col cols="4">
              <div class="text-right">
                <div>
                  <strong
                    >ລວມຍ່ອຍ:
                    {{ numberWithCommas(selectedTicket.subtotal) }}</strong
                  >
                </div>
                <div>
                  <strong
                    >ພາສີ: {{ numberWithCommas(selectedTicket.tax) }}</strong
                  >
                </div>
                <div v-if="selectedTicket.promotionDiscount > 0">
                  <strong
                    >ສ່ວນຫຼຸດ:
                    {{
                      numberWithCommas(selectedTicket.promotionDiscount)
                    }}</strong
                  >
                </div>
                <div class="text-h6">
                  <strong
                    >ລວມທັງໝົດ:
                    {{ numberWithCommas(selectedTicket.total) }}</strong
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="printTicket">
            <v-icon left>mdi-printer</v-icon>
            ພິມບິນ
          </v-btn>
          <v-btn color="grey darken-1" text @click="dialogTicketDetail = false">
            <v-icon left>mdi-close</v-icon>
            ປິດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <!-- Date Range Selectors -->
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
                  label="ຈາກວັນທີ:"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>

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
                  label="ຫາວັນທີ:"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date2"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-details
            />
            <v-select
              v-model="statusFilter"
              :items="statusOptions"
              label="ສະຖານະການຈ່າຍເງິນ"
              clearable
              @change="loadData"
            ></v-select>
          </v-col>

          <v-col cols="6" class="text-left">
            <v-btn
              size="large"
              variant="outlined"
              @click="exportToExcel"
              class="primary"
              rounded
            >
              <span class="mdi mdi-microsoft-excel"></span>Generate Excel
            </v-btn>
            <!-- NEW PDF AUDIT BUTTON -->
            <v-btn
              size="large"
              variant="outlined"
              @click="exportSimplePDFAudit"
              class="success"
              rounded
            >
              <span class="mdi mdi-file-pdf"></span>PDF Audit
            </v-btn>
            <v-btn
              size="large"
              variant="outlined"
              @click="printSummaryReport"
              class="primary"
              rounded
            >
              <span class="mdi mdi-printer"></span>ພິມລາຍງານ
            </v-btn>
          </v-col>

          <v-col cols="6" class="text-right">
            <v-btn
              size="large"
              variant="outlined"
              @click="loadData"
              class="primary"
              rounded
            >
              <span class="mdi mdi-cloud-download"></span>
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>

      <v-divider></v-divider>

      <!-- Summary Cards -->
      <v-card-text>
        <v-layout row wrap>
          <v-row>
            <v-col cols="4" lg="4">
              <v-card color="primary" dark>
                <v-card-text>
                  <div class="text-h4">{{ ticketsSummary.totalTickets }}</div>
                  <div>ຈຳນວນບິນທັງໝົດ</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4" lg="4">
              <v-card color="success" dark>
                <v-card-text>
                  <div class="text-h4">{{ ticketsSummary.paidTickets }}</div>
                  <div>ບິນທີ່ຈ່າຍແລ້ວ</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4" lg="4">
              <v-card color="info" dark>
                <v-card-text>
                  <div class="text-h4">
                    {{ numberWithCommas(ticketsSummary.totalRevenue) }}
                  </div>
                  <div>ລາຍຮັບລວມ</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Payment Type Summary -->
          <v-row v-if="paymentTypeSummary.length > 0" class="mt-4">
            <v-col cols="12" class="text-center">
              <h4 class="mb-3">ສະຫຼຸບຕາມປະເພດການຈ່າຍເງິນ:</h4>
            </v-col>
            <v-col cols="12">
              <v-row justify="center">
                <v-col
                  v-for="(payment, index) in paymentTypeSummary"
                  :key="payment.code"
                  cols="6"
                  md="4"
                  lg="3"
                >
                  <v-card :color="getPaymentCardColor(index)" dark>
                    <v-card-text>
                      <div class="d-flex align-center">
                        <v-icon left>{{
                          getPaymentIcon(payment.payment_code)
                        }}</v-icon>
                        <div class="flex-grow-1">
                          <div class="caption">{{ payment.code }}</div>
                          <div class="caption">{{ payment.count }} ບິນ</div>
                          <div class="text-h6 font-weight-bold">
                            {{ numberWithCommas(payment.amount) }}
                          </div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <!-- Product Summary -->
          <v-row v-if="productSummary.length > 0" class="mt-4">
            <v-col cols="12">
              <h4 class="mb-3">ສະຫຼຸບຕາມສິນຄ້າ:</h4>
            </v-col>
            <v-col cols="12">
              <v-card>
                <v-card-title class="pb-2">
                  <span class="text-h6">ອັນດັບສິນຄ້າຂາຍດີ</span>
                  <v-spacer></v-spacer>
                  <v-chip color="success" small>
                    {{ productSummary.length }} ລາຍການ
                  </v-chip>
                </v-card-title>
                <v-card-text class="pt-0">
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">ອັນດັບ</th>
                          <th class="text-left">ສິນຄ້າ</th>
                          <th class="text-center">ຈຳນວນ</th>
                          <th class="text-right">ຍອດຂາຍ</th>
                          <th class="text-center">%</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(product, index) in productSummary.slice(
                            0,
                            10
                          )"
                          :key="product.id"
                        >
                          <td>
                            <v-chip
                              :color="getProductRankColor(index)"
                              small
                              dark
                              style="min-width: 30px"
                            >
                              {{ index + 1 }}
                            </v-chip>
                          </td>
                          <td class="font-weight-medium">{{ product.name }}</td>
                          <td class="text-center">
                            <v-chip color="blue" small dark>
                              {{ product.quantity }}
                            </v-chip>
                          </td>
                          <td class="text-right font-weight-bold">
                            {{ numberWithCommas(product.total) }}
                          </td>
                          <td class="text-center">
                            <span class="text-caption">
                              {{
                                (
                                  (product.total /
                                    ticketsSummary.totalRevenue) *
                                  100
                                ).toFixed(1)
                              }}%
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>

                  <div
                    v-if="productSummary.length > 10"
                    class="text-center mt-3"
                  >
                    <v-btn
                      small
                      text
                      @click="showAllProducts = !showAllProducts"
                    >
                      {{
                        showAllProducts
                          ? 'ເບິ່ງໜ້ອຍ'
                          : `ເບິ່ງທັງໝົດ (${productSummary.length})`
                      }}
                      <v-icon>{{
                        showAllProducts ? 'mdi-chevron-up' : 'mdi-chevron-down'
                      }}</v-icon>
                    </v-btn>
                  </div>

                  <!-- Extended list when expanded -->
                  <v-simple-table
                    v-if="showAllProducts && productSummary.length > 10"
                    dense
                    class="mt-3"
                  >
                    <template v-slot:default>
                      <tbody>
                        <tr
                          v-for="(product, index) in productSummary.slice(10)"
                          :key="`extended-${product.id}`"
                        >
                          <td>{{ index + 11 }}</td>
                          <td class="font-weight-medium">{{ product.name }}</td>
                          <td class="text-center">
                            <v-chip color="blue" small dark>
                              {{ product.quantity }}
                            </v-chip>
                          </td>
                          <td class="text-right">
                            {{ numberWithCommas(product.total) }}
                          </td>
                          <td class="text-center">
                            <span class="text-caption">
                              {{
                                (
                                  (product.total /
                                    ticketsSummary.totalRevenue) *
                                  100
                                ).toFixed(1)
                              }}%
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-layout>
      </v-card-text>

      <!-- Data Table -->
      <v-data-table
        v-if="filteredTickets"
        :headers="headers"
        :search="search"
        :items="filteredTickets"
        :items-per-page="25"
        class="elevation-1"
      >
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ formatDateTime(item.createdAt) }}
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getStatusColor(item.status)" small dark>
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>

        <template v-slot:[`item.paymentStatus`]="{ item }">
          <v-chip :color="getPaymentStatusColor(item.paymentStatus)" small dark>
            {{ getPaymentStatusText(item.paymentStatus) }}
          </v-chip>
        </template>

        <template v-slot:[`item.payment.payment_name`]="{ item }">
          <v-chip
            v-if="item.payment"
            :color="getPaymentTypeColor(item.payment.payment_code)"
            small
            dark
          >
            <v-icon small left>{{
              getPaymentIcon(item.payment.payment_code)
            }}</v-icon>
            {{ item.payment.payment_name }}
          </v-chip>
          <span v-else>-</span>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          {{ numberWithCommas(item.total) }}
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn icon small @click="viewTicketDetail(item)">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn icon small @click="printSingleTicket(item)">
            <v-icon>mdi-printer</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Hidden print area -->
    <div id="printArea" style="display: none">
      <div id="ticketPrint"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
      statusFilter: 'paid', // Default to show only paid tickets
      showAllProducts: false, // For expanding product list

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
          text: 'ປະເພດການຈ່າຍ',
          align: 'center',
          value: 'payment.payment_name',
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
          align: 'center',
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
    safeTerminals() {
      return Array.isArray(this.findAllTerminal) ? this.findAllTerminal : []
    },
    currentTerminal() {
      if (!this.safeTerminals.length || !this.findSelectedTerminal) {
        return null
      }

      return (
        this.safeTerminals.find(
          (el) => el && el.id == this.findSelectedTerminal
        ) || null
      )
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

    // NEW: Payment type summary
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

      // Convert to array and sort by amount (highest first)
      return Object.values(paymentSummary).sort((a, b) => b.amount - a.amount)
    },

    // NEW: Product summary
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
            productSummary[productId].total += parseFloat(line.totalPrice || 0) // Changed from lineTotal to totalPrice
          })
        }
      })

      // Convert to array and sort by total (highest first)
      return Object.values(productSummary).sort((a, b) => b.total - a.total)
    },
  },

  methods: {
    // NEW: Simple PDF Audit Export Method
    exportSimplePDFAudit() {
      try {
        // Calculate simple summary data
        const totalTickets = this.filteredTickets.length
        const totalItems = this.productSummary.reduce(
          (sum, product) => sum + product.quantity,
          0
        )

        // Group by category (extract from product data in ticket lines)
        const categoryCount = {}
        this.filteredTickets.forEach((ticket) => {
          if (ticket.ticketLines && ticket.ticketLines.length > 0) {
            ticket.ticketLines.forEach((line) => {
              const category =
                line.product?.category?.categ_name || 'Unknown Category'
              categoryCount[category] = (categoryCount[category] || 0) + 1
            })
          }
        })

        // Create simple HTML for PDF
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
            <h2>TICKET AUDIT SUMMARY REPORT</h2>
            <p>Period: ${this.dateFormatted} - ${this.dateFormatted2}</p>
            <p>Generated: ${new Date().toLocaleDateString()}</p>
          </div>

          <div class="summary-box">
            <div class="summary-title">📊 OVERVIEW</div>
            <div class="summary-item">Total Tickets: ${totalTickets}</div>
            <div class="summary-item">Paid Tickets: ${
              this.ticketsSummary.paidTickets
            }</div>
            <div class="summary-item">Total Items Sold: ${totalItems}</div>
            <div class="summary-item">Average Items per Ticket: ${
              totalTickets > 0
                ? Math.round((totalItems / totalTickets) * 100) / 100
                : 0
            }</div>
          </div>

          <div class="section">
            <h3>📂 TICKETS BY CATEGORY</h3>
            <table>
              <tr><th>Category</th><th>Tickets Count</th></tr>
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
            <h3>💳 TICKETS BY PAYMENT METHOD</h3>
            <table>
              <tr><th>Payment Method</th><th>Tickets Count</th></tr>
              ${this.paymentTypeSummary
                .map(
                  (payment) =>
                    `<tr><td>${payment.name}</td><td>${payment.count}</td></tr>`
                )
                .join('')}
            </table>
          </div>

          <div class="section">
            <h3>📦 TOP 10 PRODUCTS BY QUANTITY</h3>
            <table>
              <tr><th>Rank</th><th>Product</th><th>Quantity Sold</th></tr>
              ${this.productSummary
                .slice(0, 10)
                .map(
                  (product, index) =>
                    `<tr><td>${index + 1}</td><td>${product.name}</td><td>${
                      product.quantity
                    }</td></tr>`
                )
                .join('')}
            </table>
          </div>

          <div class="section">
            <h3>🏪 TICKET STATUS BREAKDOWN</h3>
            <table>
              <tr><th>Status</th><th>Count</th></tr>
              ${this.getTicketStatusBreakdown()
                .map(
                  (status) =>
                    `<tr><td>${status.name}</td><td>${status.count}</td></tr>`
                )
                .join('')}
            </table>
          </div>

          <div class="footer">
            <p><strong>NOTE:</strong> This report contains only operational data - no financial amounts</p>
            <p>Generated for external audit purposes</p>
          </div>
        </body>
        </html>`

        // Generate PDF
        this.generatePDFFromHTML(htmlContent)
      } catch (error) {
        console.error('Error generating PDF audit report:', error)
        this.$toast.error('Error generating PDF audit report: ' + error.message)
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

    generatePDFFromHTML(htmlContent) {
      // Method 1: If you have html2pdf library installed
      if (typeof html2pdf !== 'undefined') {
        const opt = {
          margin: 1,
          filename: `ticket_audit_summary_${this.date}_to_${this.date2}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        }
        html2pdf().from(htmlContent).set(opt).save()
      }
      // Method 2: Simple jsPDF fallback
      else if (typeof jsPDF !== 'undefined') {
        const doc = new jsPDF()

        // Simple text-based PDF
        doc.setFontSize(16)
        doc.text('TICKET AUDIT SUMMARY REPORT', 20, 20)

        doc.setFontSize(12)
        doc.text(
          `Period: ${this.dateFormatted} - ${this.dateFormatted2}`,
          20,
          35
        )
        doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 45)

        doc.text('OVERVIEW', 20, 65)
        doc.text(`Total Tickets: ${this.filteredTickets.length}`, 20, 75)
        doc.text(`Paid Tickets: ${this.ticketsSummary.paidTickets}`, 20, 85)

        // Add more content as needed
        doc.save(`ticket_audit_summary_${this.date}_to_${this.date2}.pdf`)
      }
      // Method 3: Browser print fallback
      else {
        const printWindow = window.open('', '_blank')
        printWindow.document.write(htmlContent)
        printWindow.document.close()
        printWindow.print()
      }

      this.$toast.success('PDF audit report generated successfully!')
    },

    async loadData() {
      this.isloading = true

      try {
        const params = {
          startDate: this.date,
          endDate: this.date2,
          include: 'client,table,ticketLines,payment',
          locationId: this.currentSelectedLocation['id'] || 1,
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
      const ticket = this.selectedTicket

      let printContent = `
        <div style="font-family: 'Noto Sans Lao', Arial, sans-serif; width: 300px; margin: 0 auto;">
          <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 15px;">
            <h2 style="margin: 0;">ບິນຂາຍ</h2>
            <p style="margin: 5px 0;">ເລກບິນ: ${ticket.ticketNumber}</p>
            <p style="margin: 5px 0;">ວັນທີ: ${this.formatDateTime(
              ticket.createdAt
            )}</p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 3px 0;"><strong>ລູກຄ້າ:</strong> ${
              ticket.client?.name || 'ບໍ່ລະບຸ'
            }</p>
            <p style="margin: 3px 0;"><strong>ໂຕະ:</strong> ${
              ticket.table?.name || 'ບໍ່ລະບຸ'
            }</p>
          </div>
          
          <div style="border-top: 1px solid #000; border-bottom: 1px solid #000; padding: 10px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 1px solid #000;">
                  <th style="text-align: left; padding: 5px;">ສິນຄ້າ</th>
                  <th style="text-align: center; padding: 5px;">ຈ/ນ</th>
                  <th style="text-align: right; padding: 5px;">ລວມ</th>
                </tr>
              </thead>
              <tbody>
      `

      if (ticket.ticketLines && ticket.ticketLines.length > 0) {
        ticket.ticketLines.forEach((line) => {
          printContent += `
            <tr>
              <td style="padding: 3px; text-align: left;">${
                line.product?.pro_name || 'ບໍ່ລະບຸ'
              }</td>
              <td style="padding: 3px; text-align: center;">${
                line.quantity
              }</td>
              <td style="padding: 3px; text-align: right;">${this.numberWithCommas(
                line.totalPrice
              )}</td>
            </tr>
          `
        })
      }

      printContent += `
              </tbody>
            </table>
          </div>
          
          <div style="margin-top: 15px; text-align: right;">
            <p style="margin: 3px 0;"><strong>ລວມຍ່ອຍ: ${this.numberWithCommas(
              ticket.subtotal
            )}</strong></p>
            <p style="margin: 3px 0;"><strong>ພາສີ: ${this.numberWithCommas(
              ticket.tax
            )}</strong></p>
      `

      if (ticket.promotionDiscount > 0) {
        printContent += `<p style="margin: 3px 0;"><strong>ສ່ວນຫຼຸດ: ${this.numberWithCommas(
          ticket.promotionDiscount
        )}</strong></p>`
      }

      printContent += `
            <div style="border-top: 2px solid #000; margin-top: 10px; padding-top: 10px;">
              <p style="margin: 0; font-size: 18px;"><strong>ລວມທັງໝົດ: ${this.numberWithCommas(
                ticket.total
              )}</strong></p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; border-top: 1px solid #000; padding-top: 10px;">
            <p style="margin: 0; font-size: 12px;">ຂອບໃຈທີ່ໃຊ້ບໍລິການ!</p>
          </div>
        </div>
      `

      const printWindow = window.open('', '_blank')
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Ticket - ${ticket.ticketNumber}</title>
            <style>
              @media print {
                body { margin: 0; }
                @page { margin: 10mm; }
              }
            </style>
          </head>
          <body onload="window.print(); window.close();">
            ${printContent}
          </body>
        </html>
      `)
      printWindow.document.close()
    },

    printSummaryReport() {
      const tickets = this.filteredTickets

      let reportContent = `
        <div style="font-family: 'Noto Sans Lao', Arial, sans-serif; margin: 20px;">
          <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="margin: 0;">ລາຍງານການຂາຍບິນ ${
              this.currentTerminal.name
            }</h1>
            <p style="margin: 10px 0;">ຈາກວັນທີ: ${
              this.dateFormatted
            } ຫາວັນທີ: ${this.dateFormatted2}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3>ສະຫຼຸບລວມ:</h3>
            <p><strong>ຈຳນວນບິນທັງໝົດ:</strong> ${
              this.ticketsSummary.totalTickets
            }</p>
            <p><strong>ບິນທີ່ຈ່າຍແລ້ວ:</strong> ${
              this.ticketsSummary.paidTickets
            }</p>
            <p><strong>ລາຍຮັບລວມ:</strong> ${this.numberWithCommas(
              this.ticketsSummary.totalRevenue
            )}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3>ສະຫຼຸບຕາມປະເພດການຈ່າຍເງິນ:</h3>
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; margin-bottom: 15px;">
              <thead>
                <tr style="background-color: #f0f0f0;">
                  <th style="border: 1px solid #000; padding: 8px; text-align: left;">ປະເພດການຈ່າຍ</th>
                  <th style="border: 1px solid #000; padding: 8px; text-align: center;">ຈຳນວນບິນ</th>
                  <th style="border: 1px solid #000; padding: 8px; text-align: right;">ຍອດເງິນ</th>
                </tr>
              </thead>
              <tbody>
      `

      this.paymentTypeSummary.forEach((payment) => {
        reportContent += `
          <tr>
            <td style="border: 1px solid #000; padding: 5px;">${
              payment.name
            }</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center;">${
              payment.count
            }</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: right;">${this.numberWithCommas(
              payment.amount
            )}</td>
          </tr>
        `
      })

      reportContent += `
              </tbody>
            </table>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3>ສະຫຼຸບຕາມສິນຄ້າ (ອັນດັບ 10 ອັນດັບຫຼັ້ນ):</h3>
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; margin-bottom: 15px;">
              <thead>
                <tr style="background-color: #f0f0f0;">
                  <th style="border: 1px solid #000; padding: 8px; text-align: center;">ອັນດັບ</th>
                  <th style="border: 1px solid #000; padding: 8px; text-align: left;">ສິນຄ້າ</th>
                  <th style="border: 1px solid #000; padding: 8px; text-align: center;">ຈຳນວນ</th>
                  <th style="border: 1px solid #000; padding: 8px; text-align: right;">ຍອດຂາຍ</th>
                  <th style="border: 1px solid #000; padding: 8px; text-align: center;">%</th>
                </tr>
              </thead>
              <tbody>
      `

      this.productSummary.slice(0, 10).forEach((product, index) => {
        const percentage = (
          (product.total / this.ticketsSummary.totalRevenue) *
          100
        ).toFixed(1)
        reportContent += `
          <tr>
            <td style="border: 1px solid #000; padding: 5px; text-align: center;">${
              index + 1
            }</td>
            <td style="border: 1px solid #000; padding: 5px;">${
              product.name
            }</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center;">${
              product.quantity
            }</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: right;">${this.numberWithCommas(
              product.total
            )}</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center;">${percentage}%</td>
          </tr>
        `
      })

      reportContent += `
              </tbody>
            </table>
          </div>
          
          <h3>ລາຍລະອຽດບິນ:</h3>
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
            <thead>
              <tr style="background-color: #f0f0f0;">
                <th style="border: 1px solid #000; padding: 8px; text-align: left;">ເລກບິນ</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: center;">ວັນທີ</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: center;">ປະເພດການຈ່າຍ</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: right;">ລາຄາລວມ</th>
              </tr>
            </thead>
            <tbody>
      `

      tickets.forEach((ticket) => {
        reportContent += `
          <tr>
            <td style="border: 1px solid #000; padding: 5px;">${
              ticket.ticketNumber
            }</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center;">${this.formatDateTime(
              ticket.createdAt
            )}</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center;">${
              ticket.payment?.payment_name || 'ບໍ່ລະບຸ'
            }</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: right;">${this.numberWithCommas(
              ticket.total
            )}</td>
          </tr>
        `
      })

      reportContent += `
            </tbody>
          </table>
          
          <div style="margin-top: 20px; text-align: right;">
            <p><strong>ລວມທັງໝົດ: ${this.numberWithCommas(
              this.ticketsSummary.totalRevenue
            )}</strong></p>
          </div>
        </div>
      `

      const printWindow = window.open('', '_blank')
      printWindow.document.write(`
        <html>
          <head>
            <title>Sales Report</title>
            <style>
              @media print {
                body { margin: 0; }
                @page { margin: 15mm; }
              }
            </style>
          </head>
          <body onload="window.print(); window.close();">
            ${reportContent}
          </body>
        </html>
      `)
      printWindow.document.close()
    },

    exportToExcel() {
      const tickets = this.filteredTickets

      // Create payment summary sheet data
      const paymentSummaryData = this.paymentTypeSummary.map((payment) => ({
        ປະເພດການຈ່າຍ: payment.name,
        ຈຳນວນບິນ: payment.count,
        ຍອດເງິນ: payment.amount,
      }))

      // Create product summary sheet data
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

      // Create detailed tickets data
      const ticketsData = tickets.map((ticket) => ({
        ເລກບິນ: ticket.ticketNumber,
        ວັນທີ: this.formatDateTime(ticket.createdAt),
        ສະຖານະ: this.getStatusText(ticket.status),
        ປະເພດການຈ່າຍ: ticket.payment?.payment_name || 'ບໍ່ລະບຸ',
        ລູກຄ້າ: ticket.client?.name || 'ບໍ່ລະບຸ',
        ໂຕະ: ticket.table?.name || 'ບໍ່ລະບຸ',
        ລາຄາລວມ: ticket.total,
      }))

      const workbook = this.$xlsx.utils.book_new()

      // Add payment summary sheet
      const paymentSummarySheet =
        this.$xlsx.utils.json_to_sheet(paymentSummaryData)
      this.$xlsx.utils.book_append_sheet(
        workbook,
        paymentSummarySheet,
        'Payment Summary'
      )

      // Add product summary sheet
      const productSummarySheet =
        this.$xlsx.utils.json_to_sheet(productSummaryData)
      this.$xlsx.utils.book_append_sheet(
        workbook,
        productSummarySheet,
        'Product Summary'
      )

      // Add tickets detail sheet
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

    // Helper methods for payment types
    getPaymentIcon(paymentCode) {
      const iconMap = {
        CASH: 'mdi-cash',
        CARD: 'mdi-credit-card',
        BANK: 'mdi-bank-transfer',
        MOBILE: 'mdi-cellphone',
        QR: 'mdi-qrcode',
        BCEL: 'mdi-bank',
        LDB: 'mdi-bank',
        ALIPAY: 'mdi-cellphone-nfc',
        WECHAT: 'mdi-wechat',
        UNKNOWN: 'mdi-help-circle',
      }
      return iconMap[paymentCode] || 'mdi-currency-usd'
    },

    getPaymentTypeColor(paymentCode) {
      const colorMap = {
        CASH: 'green',
        CARD: 'blue',
        BANK: 'purple',
        MOBILE: 'orange',
        QR: 'teal',
        BCEL: 'indigo',
        LDB: 'pink',
        ALIPAY: 'cyan',
        WECHAT: 'light-green',
        UNKNOWN: 'grey',
      }
      return colorMap[paymentCode] || 'grey'
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

    getProductRankColor(index) {
      if (index === 0) return 'amber' // Gold for #1
      if (index === 1) return 'grey' // Silver for #2
      if (index === 2) return 'deep-orange' // Bronze for #3
      if (index < 5) return 'blue' // Blue for top 5
      return 'teal' // Teal for others
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
        paid: 'ຈ່າຍແລ້ວ',
        cancel: 'ຍົກເລີກ',
        void: 'ບັດເຖິງ',
      }
      return statusMap[status] || status
    },

    getPaymentStatusText(status) {
      const statusMap = {
        pending: 'ຍັງບໍ່ຈ່າຍ',
        paid: 'ຈ່າຍແລ້ວ',
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
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

@media print {
  .no-print {
    display: none !important;
  }
}
</style>