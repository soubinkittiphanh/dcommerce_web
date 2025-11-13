<template>
  <div class="payment-report">
    <!-- Header -->
    <div class="report-header primary">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-money-bill-wave"></i>
          ລາຍງານການຈ່າຍເງິນລ່ວງໜ້າ
        </h1>
        <p class="page-subtitle">Money Advance Payment Report</p>
      </div>
      <div class="action-buttons">
        <v-btn
          class="custom-btn export-btn"
          @click="exportToExcel"
          :loading="exporting"
        >
          <i class="fas fa-file-excel"></i>
          Export Excel
        </v-btn>
        <v-btn class="custom-btn print-btn" @click="printReport">
          <i class="fas fa-print"></i>
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
            <v-text-field
              v-model="filters.fromDate"
              type="date"
              label="From"
              outlined
              dense
              hide-details
              dark
              :max="filters.toDate || maxDate"
              @change="applyFilters"
            ></v-text-field>
          </v-col>
          <v-col cols="6" sm="3">
            <v-text-field
              v-model="filters.toDate"
              type="date"
              label="To"
              outlined
              dense
              hide-details
              dark
              :min="filters.fromDate"
              :max="maxDate"
              @change="applyFilters"
            ></v-text-field>
          </v-col>
          
          <!-- Ministry -->
          <v-col cols="6" sm="2">
            <v-select
              v-model="filters.ministryId"
              :items="ministries"
              item-text="ministryName"
              item-value="id"
              label="Ministry"
              clearable
              outlined
              dense
              hide-details
              dark
              @change="applyFilters"
            ></v-select>
          </v-col>
          
          <!-- View Mode -->
          <v-col cols="6" sm="2">
            <v-select
              v-model="viewMode"
              :items="viewModeOptions"
              label="View Mode"
              outlined
              dense
              hide-details
              dark
              @change="applyFilters"
            ></v-select>
          </v-col>
          
          <!-- Actions -->
          <v-col cols="12" sm="2" class="d-flex align-center">
            <v-btn
              class="custom-secondary-btn white--text mr-1"
              small
              @click="applyFilters"
              :loading="loading"
              :disabled="!isDateRangeValid"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
            <v-btn
              class="custom-secondary-btn white--text"
              small
              @click="resetFilters"
            >
              <v-icon small>mdi-restore</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="mb-4" dense>
      <v-col cols="12" md="3" v-for="(card, index) in summaryCards" :key="index">
        <v-card class="summary-card primary" elevation="4">
          <v-card-text class="pa-4">
            <v-row align="center">
              <v-col cols="3">
                <div class="summary-icon">
                  <i :class="card.icon"></i>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details">
                  <div class="summary-title">{{ card.title }}</div>
                  <div class="summary-subtitle">{{ card.subtitle }}</div>
                  <div class="summary-amount">
                    {{ card.amount }}
                  </div>
                  <div v-if="card.lcyAmount" class="summary-lcy">
                    LCY: {{ formatCurrency(card.lcyAmount) }}
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
        
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາ..."
          single-line
          hide-details
          class="search-field"
          outlined
          dense
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="tableHeaders"
        :items="currentDisplayData"
        :search="search"
        :loading="loading"
        class="report-table"
        :items-per-page="viewMode === 'grouped' ? -1 : 25"
        :footer-props="{
          itemsPerPageOptions: viewMode === 'grouped' ? [-1] : [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }"
        :hide-default-footer="viewMode === 'grouped'"
        :custom-sort="customSort"
      >
        <!-- Custom item template for grouped view -->
        <template v-slot:item="{ item }" v-if="viewMode === 'grouped'">
          <!-- Ministry Header Row -->
          <tr v-if="item.isMinistryHeader" class="ministry-header-row">
            <td :colspan="tableHeaders.length" class="ministry-header-cell">
              <div class="ministry-header-content">
                <v-icon color="white" class="mr-2">mdi-office-building</v-icon>
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
              <v-chip small :color="getCurrencyColor(item.currencyCode)" text-color="white">
                {{ item.currencyCode }}
              </v-chip>
            </td>
            <td class="subtotal-amount">{{ formatCurrency(item.totalAmount) }}</td>
            <td class="subtotal-amount">{{ formatCurrency(item.totalSettlements) }}</td>
            <td class="subtotal-amount">{{ formatCurrency(item.totalLcy) }}</td>
            <td></td>
            <td></td>
            <td class="subtotal-amount outstanding-amount">{{ formatCurrency(item.totalOutstanding) }}</td>
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
              <v-chip small :color="getCurrencyColor(item.currencyCode)" text-color="white">
                {{ item.currencyCode }}
              </v-chip>
            </td>
            <td>
              <div class="amount-breakdown">
                <span class="amount-cell">{{ formatCurrency(item.amount) }}</span>
                <div class="exchange-rate">Rate: {{ formatExchangeRate(item.exchangeRate) }}</div>
              </div>
            </td>
            <td>
              <div class="amount-column">
                <span class="amount-cell">{{ formatCurrency(getSettleAmount(item.settlementLine || [])) }}</span>
              </div>
            </td>
            <td>
              <span class="amount-cell lcy-amount">{{ formatCurrency(item.lcyEquivalent) }}</span>
            </td>
            <td>
              <v-chip small :color="getStatusColor(item.status)" text-color="white">
                {{ getStatusText(item.status) }}
              </v-chip>
            </td>
            <td>
              <div class="settlement-progress">
                <v-progress-linear
                  :value="parseFloat(item.settlementPercentage || 0)"
                  :color="getProgressColor(item.settlementPercentage)"
                  height="20"
                  rounded
                >
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
            <v-progress-linear
              :value="parseFloat(item.settlementPercentage || 0)"
              :color="getProgressColor(item.settlementPercentage)"
              height="20"
              rounded
            >
              <span class="progress-text">{{ item.settlementPercentage || 0 }}%</span>
            </v-progress-linear>
          </div>
        </template>

        <!-- Outstanding Amount -->
        <template v-slot:item.outstandingLcyEquivalent="{ item }">
          <span class="amount-cell outstanding-amount">
            {{ formatCurrency(item.outstandingLcyEquivalent) }}
          </span>
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
                  {{ field.formatter ? field.formatter(getNestedValue(selectedPayment, field.key)) : getNestedValue(selectedPayment, field.key) || 'N/A' }}
                </span>
              </div>
            </v-col>
          </v-row>
          
          <!-- Settlement Details -->
          <div v-if="selectedPayment.settlementLine && selectedPayment.settlementLine.length > 0" class="mt-4">
            <h4>ລາຍການຊຳລະ (Settlement Details)</h4>
            <v-data-table
              :headers="settlementHeaders"
              :items="selectedPayment.settlementLine"
              hide-default-footer
              class="settlement-table"
            >
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
    maxDate() {
      return new Date().toISOString().substr(0, 10)
    },

    isDateRangeValid() {
      if (!this.filters.fromDate || !this.filters.toDate) return false
      return new Date(this.filters.fromDate) <= new Date(this.filters.toDate)
    },

    summaryCards() {
      return [
        {
          title: 'ລວມລາຍຈ່າຍ',
          subtitle: 'Total Advances',
          amount: this.formatCurrency(this.summaryData.totalAdvancesLcy || 0),
          icon: 'fas fa-money-bill-wave'
        },
        {
          title: 'ລວມຊຳລະ',
          subtitle: 'Total Settlements',
          amount: this.formatCurrency(this.summaryData.totalSettlementsLcy || 0),
          icon: 'fas fa-hand-holding-usd'
        },
        {
          title: 'ຄ້າງຊຳລະ',
          subtitle: 'Outstanding',
          amount: this.formatCurrency(this.summaryData.outstandingBalanceLcy || 0),
          icon: 'fas fa-clock'
        },
        {
          title: 'ລວມລາຍການ',
          subtitle: 'Total Records',
          amount: this.summaryData.totalRecords || 0,
          icon: 'fas fa-file-invoice'
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
    }
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

/* Header Section */
.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  color: white;
  border-radius: 8px;
}

.title-section h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.title-section p {
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 16px;
}

.custom-btn {
  color: primary !important;
  border: 1px solid white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-btn:hover {
  background-color: white !important;
  color: primary !important;
}

/* Filter Card */
.filter-card {
  background: white;
  border-radius: 8px;
}

.filter-title {
  color: white;
  font-weight: 600;
}

.custom-secondary-btn {
  background-color: #6c757d !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-secondary-btn:hover {
  background-color: #5a6268 !important;
}

/* Summary Cards */
.summary-card {
  height: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-2px);
}

.summary-icon {
  font-size: 48px;
  opacity: 0.9;
  margin-right: 16px;
  color: white;
}

.summary-details .summary-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.summary-details .summary-subtitle {
  margin: 4px 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.summary-details .summary-amount {
  margin: 8px 0 0 0;
  font-size: 24px;
  font-weight: 700;
  color: white;
}

.summary-lcy {
  font-size: 11px;
  opacity: 0.9;
  margin-top: 4px !important;
  color: rgba(255, 255, 255, 0.9);
}

/* Main Table Section */
.table-card {
  margin-bottom: 24px;
  border-radius: 8px;
}

.table-title {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
  color: white !important;
  font-weight: 600;
}

.search-field {
  max-width: 300px;
}

.search-field >>> input {
  color: white !important;
}

.search-field >>> .v-icon {
  color: white !important;
}

.report-table {
  background: white;
}

.report-table >>> thead {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
}

.report-table >>> thead th {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
  color: white !important;
  font-weight: 600 !important;
  border-bottom: none !important;
  font-size: 0.875rem !important;
}

.report-table >>> tbody tr:hover {
  background-color: rgba(1, 83, 43, 0.1) !important;
}

/* Table Cell Styling */
.date-cell {
  font-family: monospace;
  font-size: 13px;
  color: primary;
}

.amount-cell {
  font-family: monospace;
  font-weight: 600;
  text-align: right;
  display: block;
}

.advance-amount {
  color: primary;
}

.settlement-amount {
  color: #228b22;
}

.outstanding-amount {
  color: #dc3545;
}

.lcy-amount {
  color: primary;
}

.ministry-cell {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 600;
  font-size: 13px;
  color: primary;
}

.ministry-code {
  font-size: 11px;
  color: #666;
  font-family: monospace;
  background: #f8f9fa;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
  display: inline-block;
  width: fit-content;
}

.amount-breakdown {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.exchange-rate {
  font-size: 11px;
  color: #666;
  margin-top: 4px;
  font-style: italic;
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

/* Grouped View Styles */
.ministry-header-row {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
}

.ministry-header-cell {
  padding: 16px !important;
  border: none !important;
}

.ministry-header-content {
  display: flex;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.ministry-record-count {
  font-size: 14px;
  opacity: 0.9;
  font-weight: 500;
}

.currency-header-row {
  background: rgba(1, 83, 43, 0.1) !important;
}

.currency-header-cell {
  padding: 12px 16px !important;
  border-left: 4px solid #01532B !important;
}

.currency-header-content {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #01532B;
  font-size: 14px;
}

.currency-subtotal-row,
.ministry-subtotal-row {
  background: rgba(1, 83, 43, 0.05) !important;
  border-top: 1px solid rgba(1, 83, 43, 0.2) !important;
}

.currency-subtotal-row td,
.ministry-subtotal-row td {
  padding: 8px 16px !important;
  font-weight: 600 !important;
  color: #01532B;
}

.ministry-subtotal-row {
  background: rgba(1, 83, 43, 0.15) !important;
  border-top: 2px solid #01532B !important;
  border-bottom: 2px solid #01532B !important;
}

.ministry-total-label {
  font-size: 16px !important;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ministry-total-amount {
  font-size: 16px !important;
  font-family: monospace;
}

.subtotal-label {
  font-weight: 600;
  color: #01532B;
  text-align: left;
  padding-left: 24px !important;
}

.subtotal-amount {
  font-family: monospace;
  font-weight: 600;
  text-align: right;
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

.settlement-table >>> thead th {
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