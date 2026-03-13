<template>
  <div class="payment-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-money-bill-wave primary--text"></i>
          ລາຍງານການຈ່າຍເງິນລ່ວງໜ້າ
        </h1>
        <p class="page-subtitle">Money Advance Payment Report</p>
      </div>
      <div class="action-buttons">
        <v-btn color="primary" @click="exportToExcel" :loading="exporting" dark>
          <i class="fas fa-file-excel mr-1"></i>
          Export Excel
        </v-btn>
        <v-btn color="primary" @click="printReport" dark>
          <i class="fas fa-print mr-1"></i>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Filters Card -->
    <v-card class="filter-card mb-4 primary" elevation="1">
      <v-card-title class="filter-title py-2">
        <v-icon small class="mr-2">mdi-filter</v-icon>
        ຕົວກອງ (Filters)
      </v-card-title>
      <v-card-text class="pa-3">
        <v-row dense>
          <!-- Date Range -->
          <v-col cols="6" sm="3">
            <v-text-field v-model="filters.fromDate" type="date" label="From" outlined dense hide-details
              :max="filters.toDate || maxDate" @change="applyFilters"></v-text-field>
          </v-col>
          <v-col cols="6" sm="3">
            <v-text-field v-model="filters.toDate" type="date" label="To" outlined dense hide-details
              :min="filters.fromDate" :max="maxDate" @change="applyFilters"></v-text-field>
          </v-col>

          <!-- Ministry -->
          <v-col cols="6" sm="2">
            <v-select v-model="filters.ministryId" :items="ministries" item-text="ministryName" item-value="id"
              label="Ministry" clearable outlined dense hide-details @change="applyFilters"></v-select>
          </v-col>

          <!-- View Mode -->
          <v-col cols="6" sm="2">
            <v-select v-model="viewMode" :items="viewModeOptions" label="View Mode" outlined dense hide-details
              @change="applyFilters"></v-select>
          </v-col>

          <!-- Actions -->
          <v-col cols="12" sm="2" class="d-flex align-center">
            <v-btn class="custom-secondary-btn white--text mr-1" small @click="applyFilters" :loading="loading"
              :disabled="!isDateRangeValid">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
            <v-btn class="custom-secondary-btn white--text" small @click="resetFilters">
              <v-icon small>mdi-restore</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="mb-4" dense>
      <v-col cols="12" md="3" v-for="(card, index) in summaryCards" :key="index">
        <v-card class="summary-card" elevation="2">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container">
                  <v-icon large :color="card.color || 'primary'">{{ card.vIcon || 'mdi-cash-multiple' }}</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">{{ card.title }}</div>
                  <div class="summary-amount primary--text truncate">
                    {{ card.amount }}
                  </div>
                  <div v-if="card.lcyAmount" class="summary-lcy">
                    {{ formatCurrency(card.lcyAmount) }} LAK
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Detailed Report Table -->
    <v-card class="table-card" elevation="2">
      <v-card-title class="table-title">
        <i class="fas fa-table"></i>
        ລາຍລະອຽດການຈ່າຍເງິນ (Payment Details)
        <v-spacer></v-spacer>

        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຄົ້ນຫາ..." single-line hide-details
          class="search-field" outlined dense></v-text-field>
      </v-card-title>

      <v-data-table :headers="tableHeaders" :items="currentDisplayData" :search="search" :loading="loading"
        class="report-table" :items-per-page="viewMode === 'grouped' ? -1 : 25" :footer-props="{
          itemsPerPageOptions: viewMode === 'grouped' ? [-1] : [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }" :hide-default-footer="viewMode === 'grouped'" :custom-sort="customSort">
        <!-- Custom item template for grouped view -->
        <template v-slot:item="{ item }" v-if="viewMode === 'grouped'">
          <!-- Ministry Header Row -->
          <tr v-if="item.isMinistryHeader" class="ministry-header-row">
            <td :colspan="tableHeaders.length" class="ministry-header-cell">
              <div class="ministry-header-content">
                <v-icon color="#2d3748" class="mr-2">mdi-office-building</v-icon>
                <strong>{{ item.ministryName }}</strong>
                <v-spacer></v-spacer>
                <span class="ministry-record-count">{{ item.recordCount }} ລາຍການ</span>
              </div>
            </td>
          </tr>

          <!-- Currency Header Row -->
          <tr v-else-if="item.isCurrencyHeader" class="currency-header-row">
            <td :colspan="tableHeaders.length" class="currency-header-cell">
              <div class="currency-header-content">
                <v-chip small :color="getCurrencyColor(item.currencyCode)" text-color="white" class="mr-2">
                  {{ item.currencyCode }}
                </v-chip>
                <span>{{ item.recordCount }} ລາຍການ ({{ item.recordCount }} Records)</span>
              </div>
            </td>
          </tr>

          <!-- Currency Subtotal Row -->
          <tr v-else-if="item.isCurrencySubtotal" class="currency-subtotal-row">
            <td class="subtotal-label">{{ item.currencyCode }} ລວມຍ່ອຍ</td>
            <td></td>
            <td>
              <v-chip small :color="getCurrencyColor(item.currencyCode)" text-color="white" class="font-weight-bold">
                {{ item.currencyCode }}
              </v-chip>
            </td>
            <td class="subtotal-amount text-right">{{ formatCurrency(item.totalAmount) }}</td>
            <td class="subtotal-amount text-right">{{ formatCurrency(item.totalSettlements) }}</td>
            <td class="subtotal-amount text-right">{{ formatCurrency(item.totalLcy) }}</td>
            <td></td>
            <td></td>
            <td class="subtotal-amount outstanding-amount text-right">{{ formatCurrency(item.totalOutstanding) }}</td>
            <td></td>
          </tr>

          <!-- Ministry Subtotal Row -->
          <tr v-else-if="item.isMinistrySubtotal" class="ministry-subtotal-row">
            <td class="subtotal-label ministry-total-label">
              <strong>ລວມທັງໝົດ</strong>
            </td>
            <td></td>
            <td></td>
            <td class="subtotal-amount ministry-total-amount">
              <strong>{{ formatCurrency(item.totalAmount) }}</strong>
            </td>
            <td class="subtotal-amount ministry-total-amount">
              <strong>{{ formatCurrency(item.totalSettlements) }}</strong>
            </td>
            <td class="subtotal-amount ministry-total-amount">
              <strong>{{ formatCurrency(item.totalLcy) }}</strong>
            </td>
            <td></td>
            <td></td>
            <td class="subtotal-amount ministry-total-amount outstanding-amount">
              <strong>{{ formatCurrency(item.totalOutstanding) }}</strong>
            </td>
            <td></td>
          </tr>

          <!-- Regular Data Row -->
          <tr v-else class="data-row">
            <td>
              <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
            </td>
            <td>
              <div class="ministry-cell">
                <span class="ministry-name">{{ item.ministry?.ministryName || '' }}</span>
                <span class="ministry-code">{{ item.ministry?.ministryCode || '' }}</span>
              </div>
            </td>
            <td>
              <v-chip small :color="getCurrencyColor(item.currencyCode)" text-color="white" class="font-weight-bold">
                {{ item.currencyCode }}
              </v-chip>
            </td>
            <td>
              <div class="amount-display">
                <div class="advance-amount font-weight-bold">
                  {{ formatCurrency(item.amount) }}
                </div>
                <div class="exchange-rate">Rate: {{ formatExchangeRate(item.exchangeRate) }}</div>
              </div>
            </td>
            <td>
              <div class="amount-display">
                <div class="settlement-amount font-weight-bold">
                  {{ formatCurrency(getSettleAmount(item.settlementLine || [])) }}
                </div>
              </div>
            </td>
            <td>
              <div class="amount-display">
                <span class="amount-cell lcy-amount font-weight-bold">{{ formatCurrency(item.lcyEquivalent) }}</span>
              </div>
            </td>
            <td>
              <v-chip small :color="getStatusColor(item.status)" text-color="white" class="text-uppercase">
                {{ getStatusText(item.status) }}
              </v-chip>
            </td>
            <td>
              <div class="settlement-progress">
                <v-progress-linear :value="parseFloat(item.settlementPercentage || 0)"
                  :color="getProgressColor(item.settlementPercentage)" height="20" rounded>
                  <span class="progress-text">{{ item.settlementPercentage || 0 }}%</span>
                </v-progress-linear>
              </div>
            </td>
            <td>
              <span class="amount-cell outstanding-amount">{{ formatCurrency(item.outstandingLcyEquivalent) }}</span>
            </td>
            <td>
              <v-btn small color="primary" @click="viewPaymentDetails(item)">
                <i class="fas fa-eye"></i>
              </v-btn>
            </td>
          </tr>
        </template>

        <!-- Booking Date -->
        <template v-slot:item.bookingDate="{ item }">
          <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
        </template>

        <!-- Ministry -->
        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{ item.ministry?.ministryName || '' }}</span>
            <span class="ministry-code">{{ item.ministry?.ministryCode || '' }}</span>
          </div>
        </template>

        <!-- Currency -->
        <template v-slot:item.currencyCode="{ item }">
          <v-chip small :color="getCurrencyColor(item.currencyCode)" text-color="white">
            {{ item.currencyCode }}
          </v-chip>
        </template>

        <!-- Amount -->
        <template v-slot:item.amount="{ item }">
          <div class="amount-breakdown">
            <span class="amount-cell advance-amount">{{ formatCurrency(item.amount) }}</span>
            <div class="exchange-rate">Rate: {{ formatExchangeRate(item.exchangeRate) }}</div>
          </div>
        </template>

        <!-- Settlement Amount -->
        <template v-slot:item.settleLine="{ item }">
          <span class="amount-cell settlement-amount">
            {{ formatCurrency(getSettleAmount(item.settlementLine || [])) }}
          </span>
        </template>

        <!-- LCY Equivalent -->
        <template v-slot:item.lcyEquivalent="{ item }">
          <span class="amount-cell lcy-amount">{{ formatCurrency(item.lcyEquivalent) }}</span>
        </template>

        <!-- Settlement Status -->
        <template v-slot:item.status="{ item }">
          <v-chip small :color="getStatusColor(item.status)" text-color="white">
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>

        <!-- Settlement Percentage -->
        <template v-slot:item.settlementPercentage="{ item }">
          <div class="settlement-progress">
            <v-progress-linear :value="parseFloat(item.settlementPercentage || 0)"
              :color="getProgressColor(item.settlementPercentage)" height="20" rounded>
              <span class="progress-text">{{ item.settlementPercentage || 0 }}%</span>
            </v-progress-linear>
          </div>
        </template>

        <!-- Outstanding Amount -->
        <template v-slot:item.outstandingLcyEquivalent="{ item }">
          <div class="amount-display">
            <span class="amount-cell outstanding-amount font-weight-bold">
              {{ formatCurrency(item.outstandingLcyEquivalent) }}
            </span>
          </div>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-btn small color="primary" @click="viewPaymentDetails(item)">
            <i class="fas fa-eye"></i>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Payment Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="900px">
      <v-card>
        <v-card-title class="dialog-header">
          <i class="fas fa-money-bill-wave"></i>
          ລາຍລະອຽດການຈ່າຍເງິນ #{{ selectedPayment?.id }}
          <v-spacer></v-spacer>
          <v-btn icon @click="detailsDialog = false" class="close-btn">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedPayment">
          <v-row>
            <v-col cols="6" v-for="(field, index) in detailFields" :key="index">
              <div class="detail-item">
                <strong>{{ field.label }}:</strong>
                <span v-if="field.type === 'chip'">
                  <v-chip :color="field.color(selectedPayment[field.key])" text-color="white" small>
                    {{ field.formatter ? field.formatter(selectedPayment[field.key]) : selectedPayment[field.key] }}
                  </v-chip>
                </span>
                <span v-else>
                  {{ field.formatter ? field.formatter(getNestedValue(selectedPayment, field.key)) :
                    getNestedValue(selectedPayment, field.key) || 'N/A' }}
                </span>
              </div>
            </v-col>
          </v-row>

          <!-- Settlement Details -->
          <div v-if="selectedPayment.settlementLine && selectedPayment.settlementLine.length > 0" class="mt-4">
            <h4>ລາຍການຊຳລະ (Settlement Details)</h4>
            <v-data-table :headers="settlementHeaders" :items="selectedPayment.settlementLine" hide-default-footer
              class="settlement-table">
              <template v-slot:item.bookingDate="{ item }">
                <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
              </template>
              <template v-slot:item.amount="{ item }">
                <span class="amount-cell settlement-amount">{{ formatCurrency(item.amount) }}</span>
              </template>
              <template v-slot:item.method="{ item }">
                <v-chip small color="primary" text-color="white">{{ item.method }}</v-chip>
              </template>
            </v-data-table>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PaymentReport',

  data() {
    return {
      loading: false,
      exporting: false,
      search: '',
      detailsDialog: false,
      selectedPayment: null,
      viewMode: 'flat', // 'flat' or 'grouped'

      // Filter data
      filters: {
        fromDate: null,
        toDate: null,
        ministryId: null
      },

      // Options data
      ministries: [],
      viewModeOptions: [
        { text: 'ແບບລາຍການ', value: 'flat' },
        { text: 'ແບບກຸ່ມ', value: 'grouped' }
      ],

      // Report data
      reportData: [],
      summaryData: {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        totalRecords: 0
      },

      // Table headers
      tableHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate', width: '100px' },
        { text: 'ກະຊວງ', value: 'ministry', width: '200px' },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', width: '80px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '130px' },
        { text: 'ຈຳນວນຮັບ', value: 'settleLine', width: '100px' },
        { text: 'LCY', value: 'lcyEquivalent', width: '120px' },
        { text: 'ສະຖານະ', value: 'status', width: '100px' },
        { text: 'ຊຳລະແລ້ວ %', value: 'settlementPercentage', width: '120px' },
        { text: 'ຄ້າງຊຳລະ', value: 'outstandingLcyEquivalent', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' }
      ],

      settlementHeaders: [
        { text: 'ວັນທີຊຳລະ', value: 'bookingDate' },
        { text: 'ຈຳນວນ', value: 'amount' },
        { text: 'ວິທີການ', value: 'method' },
        { text: 'ໝາຍເຫດ', value: 'notes' }
      ]
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency']),

    summaryCards() {
      return [
        {
          title: 'ລວມລາຍຈ່າຍ',
          amount: this.formatCurrency(this.summaryData.totalAdvancesLcy || 0),
          vIcon: 'mdi-cash-multiple',
          color: 'primary'
        },
        {
          title: 'ລວມຊຳລະ',
          amount: this.formatCurrency(this.summaryData.totalSettlementsLcy || 0),
          vIcon: 'mdi-hand-holding-usd',
          color: 'success'
        },
        {
          title: 'ຄ້າງຊຳລະ',
          amount: this.formatCurrency(this.summaryData.outstandingBalanceLcy || 0),
          vIcon: 'mdi-clock-alert',
          color: 'error'
        },
        {
          title: 'ລວມລາຍການ',
          amount: this.summaryData.totalRecords || 0,
          vIcon: 'mdi-file-document-multiple',
          color: 'info'
        }
      ]
    },

    detailFields() {
      return [
        { key: 'bookingDate', label: 'ວັນທີຈ່າຍ', formatter: this.formatDate },
        { key: 'amount', label: 'ຈຳນວນເງິນ', formatter: (val) => `${this.formatCurrency(val)} ${this.selectedPayment?.currencyCode || ''}` },
        { key: 'lcyEquivalent', label: 'ເທົ່າກັບກີບ', formatter: this.formatCurrency },
        {
          key: 'status',
          label: 'ສະຖານະ',
          type: 'chip',
          formatter: this.getStatusText,
          color: this.getStatusColor
        },
        { key: 'outstandingLcyEquivalent', label: 'ຄ້າງຊຳລະ', formatter: this.formatCurrency },
        { key: 'ministry.ministryName', label: 'ກະຊວງ' }
      ]
    },

    groupedReportData() {
      if (!this.reportData || this.reportData.length === 0) {
        return []
      }

      // Group by ministry first, then by currency
      const grouped = {}

      this.reportData.forEach(item => {
        const ministryKey = item.ministry?.ministryName || 'Unknown Ministry'
        const currencyKey = item.currencyCode || 'Unknown Currency'

        if (!grouped[ministryKey]) {
          grouped[ministryKey] = {}
        }

        if (!grouped[ministryKey][currencyKey]) {
          grouped[ministryKey][currencyKey] = []
        }

        grouped[ministryKey][currencyKey].push(item)
      })

      // Convert to flat array with group headers and subtotals
      const result = []

      Object.keys(grouped).sort().forEach(ministryName => {
        let ministryRecordCount = 0
        let ministryTotalAmount = 0
        let ministryTotalLcy = 0
        let ministryTotalSettlements = 0
        let ministryTotalOutstanding = 0

        // Count total records for ministry
        Object.keys(grouped[ministryName]).forEach(currency => {
          ministryRecordCount += grouped[ministryName][currency].length
        })

        // Ministry header
        result.push({
          isMinistryHeader: true,
          ministryName,
          recordCount: ministryRecordCount,
          id: `ministry-${ministryName}`
        })

        Object.keys(grouped[ministryName]).sort().forEach(currency => {
          const items = grouped[ministryName][currency]

          // Currency subheader
          result.push({
            isCurrencyHeader: true,
            ministryName,
            currencyCode: currency,
            recordCount: items.length,
            id: `currency-${ministryName}-${currency}`
          })

          // Add actual data rows
          items.forEach(item => {
            result.push({
              ...item,
              isDataRow: true
            })
          })

          // Calculate currency subtotals
          const currencyTotalAmount = items.reduce((sum, item) => sum + (item.amount || 0), 0)
          const currencyTotalLcy = items.reduce((sum, item) => sum + (item.lcyEquivalent || 0), 0)
          const currencyTotalSettlements = items.reduce((sum, item) => {
            const settlements = item.settlementLine || []
            return sum + settlements.reduce((settleSum, settle) => settleSum + (settle.amount || 0), 0)
          }, 0)
          const currencyTotalOutstanding = items.reduce((sum, item) => sum + (item.outstandingLcyEquivalent || 0), 0)

          // Currency subtotal row
          result.push({
            isCurrencySubtotal: true,
            ministryName,
            currencyCode: currency,
            totalAmount: currencyTotalAmount,
            totalLcy: currencyTotalLcy,
            totalSettlements: currencyTotalSettlements,
            totalOutstanding: currencyTotalOutstanding,
            recordCount: items.length,
            id: `subtotal-${ministryName}-${currency}`
          })

          ministryTotalAmount += currencyTotalAmount
          ministryTotalLcy += currencyTotalLcy
          ministryTotalSettlements += currencyTotalSettlements
          ministryTotalOutstanding += currencyTotalOutstanding
        })

        // Ministry total row
        result.push({
          isMinistrySubtotal: true,
          ministryName,
          totalAmount: ministryTotalAmount,
          totalLcy: ministryTotalLcy,
          totalSettlements: ministryTotalSettlements,
          totalOutstanding: ministryTotalOutstanding,
          recordCount: ministryRecordCount,
          id: `ministry-total-${ministryName}`
        })
      })

      return result
    },

    currentDisplayData() {
      return this.viewMode === 'grouped' ? this.groupedReportData : this.reportData
    },

    maxDate() {
      return new Date().toISOString().substr(0, 10)
    },

    isDateRangeValid() {
      if (!this.filters.fromDate || !this.filters.toDate) return false
      return new Date(this.filters.fromDate) <= new Date(this.filters.toDate)
    },
  },

  async created() {
    await this.loadInitialData()
    this.setDefaultDateRange()
    await this.applyFilters()
  },

  methods: {
    async loadInitialData() {
      try {
        const response = await this.$axios.get('/api/ministries')
        this.ministries = response.data.data || response.data || []
      } catch (error) {
        console.error('Error loading ministries:', error)
        this.$toast.error('Error loading initial data')
      }
    },

    setDefaultDateRange() {
      const now = new Date()
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.fromDate = firstDayOfMonth.toISOString().substr(0, 10)
      this.filters.toDate = now.toISOString().substr(0, 10)
    },

    async applyFilters() {
      if (!this.filters.fromDate || !this.filters.toDate) {
        this.$toast.warning('ກະລຸນາເລືອກໄລຍະເວລາ')
        return
      }

      if (!this.isDateRangeValid) {
        this.$toast.warning('ໄລຍະເວລາບໍ່ຖືກຕ້ອງ')
        return
      }

      this.loading = true
      try {
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach((key) => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })

        const response = await this.$axios.get(`/api/money-advances/report?${params}`)

        if (response.data && response.data.success) {
          this.reportData = response.data.data || []
          this.summaryData = response.data.summary || this.getDefaultSummary()
        } else {
          this.reportData = response.data.data || response.data || []
          this.summaryData = response.data.summary || this.getDefaultSummary()
        }
      } catch (error) {
        console.error('Error loading report data:', error)
        this.$toast.error('Error loading report data')
        this.reportData = []
        this.summaryData = this.getDefaultSummary()
      } finally {
        this.loading = false
      }
    },

    resetFilters() {
      this.filters = {
        fromDate: null,
        toDate: null,
        ministryId: null
      }
      this.viewMode = 'flat'
      this.setDefaultDateRange()
      this.applyFilters()
    },

    getDefaultSummary() {
      return {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        totalRecords: 0
      }
    },

    // Export using frontend data
    async exportToExcel() {
      if (!this.reportData.length) {
        this.$toast.warning('No data to export')
        return
      }

      this.exporting = true
      try {
        const exportData = this.reportData.map((item, index) => ({
          '#': index + 1,
          'ເລກທີ': `'${String(item.id).padStart(6, '0')}`,
          'ວັນທີ': this.formatDate(item.bookingDate),
          'ກະຊວງ': item.ministry?.ministryName || 'N/A',
          'ລະຫັດກະຊວງ': item.ministry?.ministryCode || 'N/A',
          'ສະກຸນເງິນ': item.currencyCode || 'LAK',
          'ຈຳນວນເງິນ': item.amount,
          'ອັດຕາແລກປ່ຽນ': item.exchangeRate || 1,
          'ເທົ່າກັບກີບ': item.lcyEquivalent,
          'ຈຳນວນຊຳລະ': this.getSettleAmount(item.settlementLine || []),
          'ຄ້າງຊຳລະ': item.outstandingLcyEquivalent,
          'ສະຖານະ': this.getStatusText(item.status),
          'ເປີເຊັນຊຳລະ': `${item.settlementPercentage || 0}%`
        }))

        // Create CSV content
        const headers = Object.keys(exportData[0])
        const csvContent = [
          headers.join(','),
          ...exportData.map((row) =>
            headers.map((header) => `"${(row[header] || '').toString().replace(/"/g, '""')}"`).join(',')
          )
        ].join('\n')

        // Download file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        const filename = this.viewMode === 'grouped'
          ? `payment-report-grouped-${this.filters.fromDate}-to-${this.filters.toDate}.csv`
          : `payment-report-${this.filters.fromDate}-to-${this.filters.toDate}.csv`
        link.setAttribute('download', filename)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        this.$toast.success('Report exported successfully')
      } catch (error) {
        console.error('Error exporting report:', error)
        this.$toast.error('Error exporting report')
      } finally {
        this.exporting = false
      }
    },

    printReport() {
      window.print()
    },

    viewPaymentDetails(item) {
      if (this.isGroupHeader(item) || this.isSubtotalRow(item)) {
        return
      }
      this.selectedPayment = item
      this.detailsDialog = true
    },

    isGroupHeader(item) {
      return item && (item.isMinistryHeader || item.isCurrencyHeader)
    },

    isSubtotalRow(item) {
      return item && (item.isCurrencySubtotal || item.isMinistrySubtotal)
    },

    customSort(items, sortBy, sortDesc) {
      if (this.viewMode === 'grouped') {
        return items
      }

      return items.sort((a, b) => {
        const sortKey = sortBy[0]
        const desc = sortDesc[0]

        let aVal = a[sortKey]
        let bVal = b[sortKey]

        if (typeof aVal === 'string') {
          aVal = aVal.toLowerCase()
          bVal = bVal.toLowerCase()
        }

        if (desc) {
          return aVal < bVal ? 1 : aVal > bVal ? -1 : 0
        } else {
          return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
        }
      })
    },

    // Utility methods
    getNestedValue(obj, path) {
      return path.split('.').reduce((current, key) => current?.[key], obj)
    },

    getSettleAmount(settlements) {
      if (!settlements || !Array.isArray(settlements)) return 0
      return settlements.reduce((total, item) => total + (item.amount || 0), 0)
    },

    formatCurrency(amount) {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },

    formatExchangeRate(rate) {
      if (!rate && rate !== 0) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
      }).format(rate)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-GB')
    },

    getCurrencyColor(currencyCode) {
      const colors = {
        USD: 'primary',
        LAK: 'primary',
        THB: '#228B22',
        EUR: '#006400',
        CNY: '#666'
      }
      return colors[currencyCode] || 'primary'
    },

    getStatusColor(status) {
      const colors = {
        pending: '#32CD32',
        approved: '#228B22',
        settled: 'primary',
        rejected: '#dc3545'
      }
      return colors[status] || '#666'
    },

    getStatusText(status) {
      const texts = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ'
      }
      return texts[status] || status
    },

    getProgressColor(percentage) {
      const percent = parseFloat(percentage || 0)
      if (percent >= 100) return 'primary'
      if (percent >= 50) return '#228B22'
      return '#32CD32'
    }
  }
}
</script>

<style scoped>
.payment-report {
  padding: 0;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
}

.page-subtitle {
  color: #718096;
  margin: 4px 0 0;
}

.filter-card {
  border-radius: 8px;
  background-color: white !important;
}

.filter-title {
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #edf2f7;
  padding: 12px 16px;
  color: #2d3748 !important;
}

.summary-card {
  border-radius: 8px;
  border: 1px solid #edf2f7;
}

.summary-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  background-color: #f7fafc;
  border-radius: 12px;
}

.summary-details .summary-title {
  font-size: 11px;
  color: #718096;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.summary-details .summary-amount {
  font-size: 20px;
  font-weight: 700;
  margin-top: 2px;
}

.summary-lcy {
  font-size: 11px;
  color: #a0aec0;
}

.report-table {
  background: white;
  border-radius: 8px;
}

.report-table>>>thead th {
  background-color: #f8fafc !important;
  color: #4a5568 !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  font-size: 11px !important;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #edf2f7 !important;
}

.report-table>>>tbody tr:hover {
  background-color: #f7fafc !important;
}

.amount-display {
  text-align: right;
  display: flex;
  flex-direction: column;
}

.progress-text {
  font-size: 11px;
  font-weight: 700;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.ministry-header-row {
  background-color: #f1f5f9 !important;
}

.ministry-header-cell {
  padding: 12px 16px !important;
  border-bottom: 1px solid #e2e8f0 !important;
}

.ministry-header-content {
  display: flex;
  align-items: center;
  color: #1e293b;
  font-size: 16px;
  font-weight: 700;
}

.ministry-record-count {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

.currency-header-row {
  background-color: #f8fafc !important;
}

.currency-header-content {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #475569;
  font-size: 13px;
}

.currency-subtotal-row {
  background-color: #fdfdfd !important;
  border-top: 1px dashed #e2e8f0 !important;
}

.currency-subtotal-row td {
  color: #475569;
  font-weight: 700;
  font-size: 13px;
}

.ministry-subtotal-row {
  background-color: #f8fafc !important;
  border-top: 2px solid #cbd5e1 !important;
}

.ministry-subtotal-row td {
  color: #1e293b !important;
  font-weight: 800 !important;
  font-size: 14px !important;
}

.subtotal-amount {
  font-family: monospace;
}

.data-row {
  transition: background-color 0.2s ease;
}

.data-row:hover {
  background-color: rgba(1, 83, 43, 0.05) !important;
}

/* Dialog Styling */
.dialog-header {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
  color: white !important;
  font-weight: 600 !important;
}

.close-btn {
  color: white !important;
}

.detail-item {
  margin-bottom: 12px;
  font-size: 14px;
}

.detail-item strong {
  color: #01532B;
}

.settlement-table {
  margin-top: 16px;
}

.settlement-table>>>thead th {
  background-color: #01532B !important;
  color: white !important;
  font-weight: 600 !important;
}

/* Print styles */
@media print {

  .action-buttons,
  .filter-card,
  .v-btn {
    display: none !important;
  }

  .summary-cards {
    page-break-inside: avoid;
  }

  .report-header {
    color: white !important;
    -webkit-print-color-adjust: exact;
  }

  .ministry-header-row {
    background: #f0f0f0 !important;
    -webkit-print-color-adjust: exact;
  }

  .ministry-header-content {
    color: #000 !important;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .report-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    padding: 16px;
  }

  .title-section h1 {
    font-size: 24px;
  }

  .action-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }

  .summary-icon {
    margin-right: 0;
    margin-bottom: 8px;
    font-size: 40px;
  }

  .summary-details .summary-amount {
    font-size: 20px;
  }

  .ministry-header-content {
    font-size: 16px;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
}
</style>