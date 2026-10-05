<template>
  <div class="money-advance-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <v-icon large color="primary" class="mr-2">mdi-chart-line</v-icon>
          ລາຍງານ ລາຍຈ່າຍລ່ວງໜ້າ
        </h1>
        <p class="page-subtitle">Money Advance Report</p>
      </div>
      <div class="action-buttons">
        <v-btn color="primary" @click="exportToExcel" :loading="exporting" dark class="mr-2">
          <v-icon left>mdi-file-excel</v-icon>
          Export Excel
        </v-btn>
        <v-btn color="primary" @click="printReport" dark>
          <v-icon left>mdi-printer</v-icon>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Filters Card -->
    <v-card class="filter-card mb-4" elevation="1">
      <v-card-title class="filter-title py-2">
        <v-icon small class="mr-2" color="primary">mdi-filter</v-icon>
        ຕົວກອງ (Filters)
      </v-card-title>
      <v-card-text class="pa-3">
        <v-row dense>
          <!-- Date Range -->
          <v-col cols="6" sm="3">
            <v-text-field v-model="filters.fromDate" type="date" label="From" outlined dense hide-details
              @change="applyFilters"></v-text-field>
          </v-col>
          <v-col cols="6" sm="3">
            <v-text-field v-model="filters.toDate" type="date" label="To" outlined dense hide-details
              @change="applyFilters"></v-text-field>
          </v-col>

          <!-- Ministry -->
          <v-col cols="6" sm="2">
            <v-select v-model="filters.ministryId" :items="ministries" item-text="ministryName" item-value="id"
              label="Ministry" clearable outlined dense hide-details @change="applyFilters"></v-select>
          </v-col>

          <!-- Currency -->
          <v-col cols="6" sm="2">
            <v-select v-model="filters.currencyId" :items="currencies" item-text="name" item-value="id" label="Currency"
              clearable outlined dense hide-details @change="applyFilters"></v-select>
          </v-col>

          <!-- Actions -->
          <v-col cols="12" sm="2" class="d-flex align-center">
            <v-btn color="primary" class="white--text mr-2" small depressed @click="applyFilters"
              :loading="loading">
              <v-icon small class="mr-1">mdi-refresh</v-icon>
              ໂຫຼດໃໝ່
            </v-btn>
            <v-btn color="grey lighten-1" class="white--text" small depressed @click="resetFilters">
              <v-icon small>mdi-restore</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="mb-4" dense>
      <v-col cols="12" sm="6" md="3" v-for="(card, index) in summaryCards" :key="index">
        <v-card class="summary-card" elevation="2">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container">
                  <v-icon large :color="card.color || 'primary'">{{ card.vIcon || 'mdi-cash' }}</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">{{ card.title }}</div>
                  <div class="summary-amount primary--text text-truncate">
                    {{ formatCurrency(card.amount) }}
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
        <v-icon color="primary" class="mr-2">mdi-table-large</v-icon>
        ລາຍລະອຽດລາຍງານ (Detailed Report)
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຄົ້ນຫາ..." single-line hide-details
          class="search-field" outlined dense></v-text-field>
      </v-card-title>

      <v-data-table :headers="tableHeaders" :items="reportData" :search="search" :loading="loading" class="report-table"
        :items-per-page="25" :footer-props="{
          itemsPerPageOptions: [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }">
        <!-- Custom slots for better formatting -->
        <template v-slot:item.id="{ item }">
          <span class="date-cell font-weight-bold">{{ formatVoucherNumber(item.id) }}</span>
        </template>

        <template v-slot:item.bookingDate="{ item }">
          <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
        </template>

        <template v-slot:item.amount="{ item }">
          <div class="amount-display">
            <div class="advance-amount font-weight-bold">
              {{ formatCurrency(item.amount) }} {{ item.currencyCode }}
            </div>
            <div v-if="item.currencyCode !== 'LAK'" class="currency-info-sub">
              ({{ formatCurrency(item.lcyEquivalent ?? convertToLocal(item.amount, item.currencyCode, item.exchangeRate)) }} LAK)
            </div>
          </div>
        </template>

        <template v-slot:item.exchangeRate="{ item }">
          <span class="exchange-rate-cell">
            {{ formatExchangeRate(item.exchangeRate) }}
          </span>
        </template>

        <template v-slot:item.settlementAmount="{ item }">
          <div class="amount-display">
            <div class="settlement-amount font-weight-bold">
              {{ formatCurrency(item.settlementAmount || 0) }} {{ item.currencyCode }}
            </div>
            <div v-if="item.currencyCode !== 'LAK'" class="currency-info-sub">
              ({{ formatCurrency(convertToLocal(item.settlementAmount || 0, item.currencyCode, item.exchangeRate)) }} LAK)
            </div>
          </div>
        </template>

        <template v-slot:item.outstandingAmount="{ item }">
          <div class="amount-display">
            <div class="outstanding-amount font-weight-bold">
              {{ formatCurrency(item.outstandingAmount !== undefined ? item.outstandingAmount : (item.amount - (item.settlementAmount || 0))) }} {{ item.currencyCode }}
            </div>
            <div v-if="item.currencyCode !== 'LAK'" class="currency-info-sub">
              ({{ formatCurrency(item.outstandingLcyEquivalent ?? convertToLocal(item.outstandingAmount, item.currencyCode, item.exchangeRate)) }} LAK)
            </div>
          </div>
        </template>

        <template v-slot:item.settlementPercentage="{ item }">
          <div class="settlement-progress">
            <v-progress-linear :value="parseFloat(item.settlementPercentage || 0)"
              :color="getProgressColor(item.settlementPercentage)" height="20" rounded>
              <span class="progress-text">{{ item.settlementPercentage || 0 }}%</span>
            </v-progress-linear>
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" text-color="white" small>
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>

        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{ item.ministry?.ministryName || 'N/A' }}</span>
            <span v-if="item.ministry?.ministryCode" class="ministry-code">{{ item.ministry.ministryCode }}</span>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn small color="primary" @click="viewDetails(item)" class="mr-1">
            <v-icon small>mdi-eye</v-icon>
          </v-btn>
          <v-btn small color="#228B22" dark @click="viewSettlements(item)" v-if="item.settlementCount > 0">
            <v-icon small class="mr-1">mdi-format-list-bulleted</v-icon>
            {{ item.settlementCount }}
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="900px">
      <v-card>
        <v-card-title class="dialog-header primary white--text py-3">
          <v-icon left color="white">mdi-information-outline</v-icon>
          ລາຍລະອຽດລາຍຈ່າຍ (Advance Details)
          <v-spacer></v-spacer>
          <v-btn icon dark @click="detailsDialog = false" class="white--text">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedItem" class="pt-4">
          <v-row>
            <v-col cols="12" sm="6" v-for="(field, index) in detailFields" :key="index" class="py-2">
              <div class="detail-item">
                <strong class="detail-label">{{ field.label }}:</strong>
                <span v-if="field.type === 'chip'">
                  <v-chip :color="field.color(getNestedValue(selectedItem, field.key))" text-color="white" small>
                    {{ field.formatter ? field.formatter(getNestedValue(selectedItem, field.key), selectedItem) : getNestedValue(selectedItem, field.key) }}
                  </v-chip>
                </span>
                <span v-else class="detail-value">
                  {{ field.formatter ? field.formatter(getNestedValue(selectedItem, field.key), selectedItem) : (getNestedValue(selectedItem, field.key) || 'N/A') }}
                </span>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="detail-item">
            <strong class="detail-label">ໝາຍເຫດ (Note):</strong> 
            <span class="detail-value">{{ selectedItem.note || 'ບໍ່ມີໝາຍເຫດ' }}</span>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Settlements Dialog -->
    <v-dialog v-model="settlementsDialog" max-width="900px">
      <v-card>
        <v-card-title class="dialog-header primary white--text py-3">
          <v-icon left color="white">mdi-receipt</v-icon>
          ປະຫວັດການຊຳລະ (Settlement History)
          <v-spacer></v-spacer>
          <v-btn icon dark @click="settlementsDialog = false" class="white--text">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pt-4">
          <v-data-table :headers="settlementHeaders" :items="settlements" :loading="loadingSettlements"
            hide-default-footer class="settlement-table">
            <template v-slot:item.bookingDate="{ item }">
              <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
            </template>
            <template v-slot:item.amount="{ item }">
              <span class="amount-cell settlement-amount font-weight-bold">
                {{ formatCurrency(item.amount) }} {{ item.currencyCode || selectedItem?.currencyCode || 'LAK' }}
              </span>
            </template>
            <template v-slot:item.method="{ item }">
              <v-chip small :color="getMethodColor(item.method)" text-color="white">
                {{ getMethodText(item.method) }}
              </v-chip>
            </template>
            <template v-slot:item.user="{ item }">
              <span>{{ item.user?.cus_name || item.maker?.cus_name || 'N/A' }}</span>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { printMoneyAdvancePaymentReport } from '@/common/moneyAdvancePaymentPrintTemplate'

export default {
  name: 'MoneyAdvanceReport',

  data() {
    return {
      loading: false,
      exporting: false,
      loadingSettlements: false,
      search: '',
      detailsDialog: false,
      settlementsDialog: false,
      selectedItem: null,
      settlements: [],

      // Filter data
      filters: {
        fromDate: null,
        toDate: null,
        ministryId: null,
        currencyId: null
      },

      // Options data
      ministries: [],
      currencies: [],

      // Report data
      reportData: [],
      summaryData: {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        broughtForward: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        broughtForwardLcy: 0
      },

      // Table headers
      tableHeaders: [
        { text: 'ID', value: 'id', width: '90px' },
        { text: 'ວັນທີ', value: 'bookingDate', width: '100px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '130px', align: 'right' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'exchangeRate', width: '100px', align: 'center' },
        { text: 'ການຊຳລະ', value: 'settlementAmount', width: '130px', align: 'right' },
        { text: 'ຍອດຄ້າງ', value: 'outstandingAmount', width: '130px', align: 'right' },
        { text: '% ຊຳລະ', value: 'settlementPercentage', width: '100px', align: 'center' },
        { text: 'ກະຊວງ', value: 'ministry', width: '160px' },
        { text: 'ຈຸດປະສົງ', value: 'purpose', width: '200px' },
        { text: 'ສະຖານະ', value: 'status', width: '100px', align: 'center' },
        { text: 'ຜູ້ລົງ', value: 'maker.cus_name', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '120px', align: 'center' }
      ],

      settlementHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate' },
        { text: 'ຈຳນວນ', value: 'amount', align: 'right' },
        { text: 'ວິທີການ', value: 'method', align: 'center' },
        { text: 'ໝາຍເຫດ', value: 'notes' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'user' }
      ]
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency', 'findAllCompany']),

    summaryCards() {
      return [
        {
          title: 'ລວມລາຍຈ່າຍ',
          amount: this.summaryData.totalAdvances,
          lcyAmount: this.summaryData.totalAdvancesLcy,
          vIcon: 'mdi-cash-register',
          color: 'primary'
        },
        {
          title: 'ລວມການຊຳລະ',
          amount: this.summaryData.totalSettlements,
          lcyAmount: this.summaryData.totalSettlementsLcy,
          vIcon: 'mdi-hand-holding-usd',
          color: '#228B22'
        },
        {
          title: 'ຍອດຄ້າງຊຳລະ',
          amount: this.summaryData.outstandingBalance,
          lcyAmount: this.summaryData.outstandingBalanceLcy,
          vIcon: 'mdi-alert-circle',
          color: '#e53e3e'
        },
        {
          title: 'ຍອດຍົກມາ',
          amount: this.summaryData.broughtForward,
          lcyAmount: this.summaryData.broughtForwardLcy,
          vIcon: 'mdi-arrow-right-bold-circle',
          color: '#3182ce'
        }
      ]
    },

    detailFields() {
      return [
        { key: 'id', label: 'ເລກທີໃບເບີກ', formatter: this.formatVoucherNumber },
        { key: 'bookingDate', label: 'ວັນທີບັນທຶກ', formatter: this.formatDate },
        { key: 'amount', label: 'ຈຳນວນເງິນ', formatter: this.formatCurrency },
        { key: 'currencyCode', label: 'ສະກຸນເງິນ' },
        { key: 'exchangeRate', label: 'ອັດຕາແລກປ່ຽນ', formatter: this.formatExchangeRate },
        { 
          key: 'lcyEquivalent', 
          label: 'ເທົ່າກັບກີບ (LAK)', 
          formatter: (val, item) => this.formatCurrency(val ?? this.convertToLocal(item.amount, item.currencyCode, item.exchangeRate))
        },
        { key: 'purpose', label: 'ຈຸດປະສົງ' },
        { key: 'ministry.ministryName', label: 'ກະຊວງ', formatter: (val) => val || 'N/A' },
        {
          key: 'status',
          label: 'ສະຖານະ',
          type: 'chip',
          formatter: this.getStatusText,
          color: this.getStatusColor
        },
        { key: 'settlementAmount', label: 'ຈຳນວນຊຳລະ', formatter: this.formatCurrency },
        { key: 'outstandingAmount', label: 'ຍອດຄ້າງ', formatter: this.formatCurrency },
        { key: 'settlementPercentage', label: 'ເປີເຊັນຊຳລະ', formatter: (val) => `${val || 0}%` },
        { key: 'maker.cus_name', label: 'ຜູ້ລົງບັນທຶກ', formatter: (val) => val || 'N/A' }
      ]
    }
  },

  async created() {
    await this.loadInitialData()
    this.setDefaultDates()
    await this.applyFilters()
  },

  methods: {
    async loadInitialData() {
      try {
        const [ministriesRes, currenciesRes] = await Promise.all([
          this.$axios.get('/api/ministries'),
          this.$axios.get('/api/currency/findAll')
        ])

        this.ministries = ministriesRes.data.data || ministriesRes.data || []
        this.currencies = currenciesRes.data.data || currenciesRes.data || []
      } catch (error) {
        console.error('Error loading initial data:', error)
        this.$toast.error('Error loading initial data')
      }
    },

    setDefaultDates() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.fromDate = firstDay.toISOString().substr(0, 10)
      this.filters.toDate = now.toISOString().substr(0, 10)
    },

    async applyFilters() {
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
          this.summaryData = response.data.summary || this.calculateSummary()
        } else {
          this.reportData = response.data?.data || response.data || []
          this.summaryData = response.data?.summary || this.calculateSummary()
        }
      } catch (error) {
        console.error('Error loading report data:', error)
        this.$toast.error('Error loading report data')
      } finally {
        this.loading = false
      }
    },

    resetFilters() {
      this.filters = {
        fromDate: null,
        toDate: null,
        ministryId: null,
        currencyId: null
      }
      this.setDefaultDates()
      this.applyFilters()
    },

    calculateSummary() {
      const summary = {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        broughtForward: 0,
        broughtForwardLcy: 0,
        totalRecords: this.reportData.length
      }

      this.reportData.forEach((item) => {
        const amount = parseFloat(item.amount || 0)
        const settle = parseFloat(item.settlementAmount || 0)
        const outstanding = parseFloat(item.outstandingAmount !== undefined ? item.outstandingAmount : (amount - settle))

        summary.totalAdvances += amount
        summary.totalSettlements += settle
        summary.outstandingBalance += outstanding

        const lcyAdv = parseFloat(item.lcyEquivalent ?? this.convertToLocal(amount, item.currencyCode, item.exchangeRate))
        const lcySet = parseFloat(item.settlementLcyEquivalent ?? this.convertToLocal(settle, item.currencyCode, item.exchangeRate))
        const lcyOut = parseFloat(item.outstandingLcyEquivalent ?? this.convertToLocal(outstanding, item.currencyCode, item.exchangeRate))

        summary.totalAdvancesLcy += isNaN(lcyAdv) ? 0 : lcyAdv
        summary.totalSettlementsLcy += isNaN(lcySet) ? 0 : lcySet
        summary.outstandingBalanceLcy += isNaN(lcyOut) ? 0 : lcyOut
      })

      return summary
    },

    // Export methods with UTF-8 BOM for Excel compatibility
    async exportToExcel() {
      if (!this.reportData.length) {
        this.$toast.warning('No data to export')
        return
      }

      this.exporting = true
      try {
        const exportData = this.reportData.map((item, index) => ({
          'ລດ': index + 1,
          'ເລກທີ': `'${this.formatVoucherNumber(item.id)}`,
          'ວ.ດ.ປ': this.formatDate(item.bookingDate),
          'ເນື້ອໃນລາຍການ': item.purpose || '',
          'Notes': item.note || '',
          'ສະກຸນ': item.currencyCode || 'LAK',
          'ອັດຕາແລກປ່ຽນ': item.exchangeRate || 1,
          'ຍອດຫນີ້': item.amount ?? 0,
          'ເທົ່າກັບກີບ': item.lcyEquivalent ?? this.convertToLocal(item.amount, item.currencyCode, item.exchangeRate),
          'ຍອດມີ': item.settlementAmount ?? 0,
          'ຍອດເຫລືອ': item.outstandingAmount ?? (item.amount - (item.settlementAmount || 0)),
          'ລະຫັດ ກະຊວງ': item.ministry?.ministryCode || 'N/A',
          'ກະຊວງ': item.ministry?.ministryName || 'N/A',
          'ສະຖານະ': this.getStatusText(item.status),
          'ຜູ້ລົງ': item.maker?.cus_name || 'N/A'
        }))

        const headers = Object.keys(exportData[0])
        const csvContent = [
          headers.join(','),
          ...exportData.map((row) =>
            headers.map((header) => {
              const val = row[header] ?? ''
              return `"${val.toString().replace(/"/g, '""')}"`
            }).join(',')
          )
        ].join('\n')

        // Prepend UTF-8 BOM so Excel properly displays Lao characters
        const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        const dateStr = new Date().toISOString().substr(0, 10)
        link.setAttribute('download', `money-advance-report-${this.filters.fromDate || dateStr}-to-${this.filters.toDate || dateStr}.csv`)
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

    // Print report using dedicated template
    printReport() {
      if (!this.reportData.length) {
        this.$toast.warning('No data to print')
        return
      }

      const selectedMinistry = this.ministries.find(m => m.id === this.filters.ministryId)
      const selectedCurrency = this.currencies.find(c => c.id === this.filters.currencyId)
      const company = (this.findAllCompany && this.findAllCompany.length > 0) ? this.findAllCompany[0] : {}
      const user = this.$auth?.user || this.$store.state.user || {}

      printMoneyAdvancePaymentReport({
        reportData: this.reportData,
        summaryData: this.summaryData,
        filters: this.filters,
        companyData: company,
        user: user,
        ministryName: selectedMinistry ? `${selectedMinistry.ministryName}${selectedMinistry.ministryCode ? ` (${selectedMinistry.ministryCode})` : ''}` : '',
        currencyName: selectedCurrency ? selectedCurrency.name : ''
      })
    },

    // Dialog methods
    viewDetails(item) {
      this.selectedItem = item
      this.detailsDialog = true
    },

    async viewSettlements(item) {
      this.selectedItem = item
      this.loadingSettlements = true
      this.settlementsDialog = true

      try {
        const response = await this.$axios.get(`/api/money-advances/${item.id}/settlements`)
        this.settlements = response.data?.data || response.data || []
      } catch (error) {
        console.error('Error loading settlements:', error)
        this.$toast.error('Error loading settlements')
        this.settlements = []
      } finally {
        this.loadingSettlements = false
      }
    },

    // Utility methods
    getNestedValue(obj, path) {
      if (!obj || !path) return ''
      return path.split('.').reduce((current, key) => (current ? current[key] : undefined), obj)
    },

    formatVoucherNumber(id) {
      if (!id && id !== 0) return '-'
      return String(id).padStart(6, '0')
    },

    formatCurrency(amount) {
      if (!amount && amount !== 0) return '0.00'
      const num = typeof amount === 'number' ? amount : parseFloat(amount)
      if (isNaN(num)) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(num)
    },

    formatExchangeRate(rate) {
      if (!rate && rate !== 0) return '1.0000'
      const num = typeof rate === 'number' ? rate : parseFloat(rate)
      if (isNaN(num)) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4
      }).format(num)
    },

    formatDate(date) {
      if (!date) return ''
      try {
        const d = new Date(date)
        if (isNaN(d.getTime())) return date
        const day = String(d.getDate()).padStart(2, '0')
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const year = d.getFullYear()
        return `${day}/${month}/${year}`
      } catch (e) {
        return date
      }
    },

    convertToLocal(amount, currencyCode, exchangeRate) {
      if (!amount) return 0
      if (currencyCode === 'LAK') return amount

      if (exchangeRate && parseFloat(exchangeRate) > 0) {
        return amount * parseFloat(exchangeRate)
      }

      const currency = (this.findAllCurrency || []).find(c => c.code === currencyCode)
      if (!currency || !currency.rate) return amount

      const rate = parseFloat(currency.rate)
      const direction = currency.exchangeDirection || 'local_to_foreign'

      if (direction === 'local_to_foreign') {
        return amount / rate
      } else {
        return amount * rate
      }
    },

    getProgressColor(percentage) {
      const percent = parseFloat(percentage || 0)
      if (percent >= 100) return 'primary'
      if (percent >= 50) return '#228B22'
      return '#32CD32'
    },

    getStatusColor(status) {
      const colors = {
        pending: '#e65100',
        approved: '#228B22',
        settled: 'primary',
        rejected: '#e53e3e'
      }
      return colors[status] || '#718096'
    },

    getStatusText(status) {
      const texts = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        settled: 'ຊຳລະແລ້ວ',
        rejected: 'ປະຕິເສດ'
      }
      return texts[status] || status || '-'
    },

    getMethodColor(method) {
      const colors = {
        cash: 'primary',
        bank_transfer: '#228B22',
        deduction: '#3182ce'
      }
      return colors[method] || 'primary'
    },

    getMethodText(method) {
      const texts = {
        cash: 'ເງິນສົດ',
        bank_transfer: 'ໂອນເງິນ',
        deduction: 'ຫັກລົບ'
      }
      return texts[method] || method || '-'
    }
  }
}
</script>

<style scoped>
.money-advance-report {
  padding: 0;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.page-title {
  font-size: 22px;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  display: flex;
  align-items: center;
}

.page-subtitle {
  color: #718096;
  margin: 2px 0 0;
  font-size: 13px;
}

.filter-card {
  border-radius: 8px;
  background-color: white !important;
}

.filter-title {
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px solid #edf2f7;
  padding: 10px 16px;
  color: #2d3748 !important;
}

.summary-card {
  border-radius: 8px;
  border: 1px solid #edf2f7;
  height: 100%;
}

.summary-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 52px;
  background-color: #f7fafc;
  border-radius: 10px;
}

.summary-details .summary-title {
  font-size: 11px;
  color: #718096;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.summary-details .summary-amount {
  font-size: 18px;
  font-weight: 700;
  margin-top: 2px;
}

.summary-lcy {
  font-size: 11px;
  color: #a0aec0;
}

.table-card {
  border-radius: 8px;
}

.table-title {
  font-size: 16px;
  font-weight: 600;
  padding: 12px 16px;
}

.report-table {
  background: white;
  border-radius: 8px;
}

.report-table >>> thead th {
  background-color: #f8fafc !important;
  color: #4a5568 !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  font-size: 12px !important;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #edf2f7 !important;
}

.report-table >>> tbody tr:hover {
  background-color: #f7fafc !important;
}

/* Table Cell Styling */
.date-cell {
  font-family: monospace;
  font-size: 13px;
  color: #2d3748;
}

.amount-cell {
  font-family: monospace;
  font-weight: 600;
  text-align: right;
  display: block;
}

.exchange-rate-cell {
  font-family: monospace;
  font-size: 12px;
  text-align: center;
  display: block;
  color: #718096;
}

.amount-display {
  text-align: right;
}

.currency-info-sub {
  font-size: 11px;
  color: #718096;
  margin-top: 2px;
}

.settlement-progress {
  width: 100%;
}

.progress-text {
  font-size: 11px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.ministry-cell {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 600;
  font-size: 13px;
  color: #2d3748;
}

.ministry-code {
  font-size: 11px;
  color: #666;
  font-family: monospace;
  background: #f8f9fa;
  padding: 1px 6px;
  border-radius: 4px;
  margin-top: 2px;
  display: inline-block;
  width: fit-content;
}

/* Dialog Styling */
.dialog-header {
  font-weight: 600 !important;
}

.detail-item {
  margin-bottom: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.detail-label {
  color: #4a5568;
  min-width: 130px;
  font-weight: 600;
}

.detail-value {
  color: #1a202c;
}

.settlement-table {
  margin-top: 8px;
}

.settlement-table >>> thead th {
  background-color: var(--v-primary-base, #01532B) !important;
  color: white !important;
  font-weight: 600 !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .report-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .action-buttons {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
}
</style>