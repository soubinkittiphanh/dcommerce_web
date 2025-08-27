<template>
  <div class="payment-report">
    <!-- Header -->
    <div class="report-header">
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

    <!-- Simplified Filter Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title d-flex align-center">
        <v-icon class="mr-2">mdi-filter</v-icon>
        ຕົວກອງ (Filters)
      </v-card-title>

      <v-card-text class="pa-4">
        <v-row>
          <!-- From Date -->
          <v-col cols="12" md="4">
            <v-text-field
              v-model="filters.fromDate"
              type="date"
              label="ຈາກວັນທີ (From Date)"
              outlined
              dense
              :rules="[rules.required, rules.dateRange]"
              :max="filters.toDate || maxDate"
              @change="applyFilters"
            ></v-text-field>
          </v-col>

          <!-- To Date -->
          <v-col cols="12" md="4">
            <v-text-field
              v-model="filters.toDate"
              type="date"
              label="ເຖິງວັນທີ (To Date)"
              outlined
              dense
              :rules="[rules.required, rules.dateRange]"
              :min="filters.fromDate"
              :max="maxDate"
              @change="applyFilters"
            ></v-text-field>
          </v-col>

          <!-- Ministry Select -->
          <v-col cols="12" md="4">
            <v-select
              v-model="filters.ministryId"
              :items="ministries"
              item-text="ministryName"
              item-value="id"
              label="Ministry"
              clearable
              outlined
              dense
              @change="applyFilters"
            ></v-select>
          </v-col>
        </v-row>

        <!-- Buttons Row -->
        <v-row class="mt-2">
          <v-col cols="12" md="3">
            <v-btn
              class="custom-primary-bg white--text"
              block
              outlined
              @click="applyFilters"
              :loading="loading"
              :disabled="!isDateRangeValid"
            >
              <v-icon left color="white">mdi-refresh</v-icon>
              Refresh
            </v-btn>
          </v-col>
          
          <v-col cols="12" md="3">
            <v-btn
              class="custom-secondary-btn"
              block
              outlined
              @click="resetFilters"
              color="grey lighten-1"
            >
              <v-icon left>mdi-restore</v-icon>
              Reset
            </v-btn>
          </v-col>
        </v-row>

        <!-- Date Range Display -->
        <v-row v-if="filters.fromDate && filters.toDate" class="mt-2">
          <v-col cols="12">
            <v-alert type="info" dense outlined class="date-range-alert">
              <div class="d-flex align-center">
                <v-icon class="mr-2">mdi-calendar-range</v-icon>
                <span>
                  ໄລຍະເວລາທີ່ເລືອກ: {{ formattedFromDate }} ເຖິງ
                  {{ formattedToDate }} ({{ daysBetween }} ວັນ)
                </span>
              </div>
            </v-alert>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="summary-cards mb-4">
      <v-col cols="12" md="3">
        <v-card class="summary-card advance-card" elevation="4">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-money-bill-wave"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມລາຍຈ່າຍ</h3>
                <p class="summary-subtitle">Total Advances</p>
                <h2 class="summary-amount">
                  {{ formatCurrency(summaryData.totalAdvancesLcy) }}
                </h2>
                <p class="summary-lcy">LAK</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card settlement-card" elevation="4">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-hand-holding-usd"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມຊຳລະ</h3>
                <p class="summary-subtitle">Total Settlements</p>
                <h2 class="summary-amount">
                  {{ formatCurrency(summaryData.totalSettlementsLcy) }}
                </h2>
                <p class="summary-lcy">LAK</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card outstanding-card" elevation="4">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ຄ້າງຊຳລະ</h3>
                <p class="summary-subtitle">Outstanding</p>
                <h2 class="summary-amount">
                  {{ formatCurrency(summaryData.outstandingBalanceLcy) }}
                </h2>
                <p class="summary-lcy">LAK</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="summary-card records-card" elevation="4">
          <v-card-text>
            <div class="summary-content">
              <div class="summary-icon">
                <i class="fas fa-file-invoice"></i>
              </div>
              <div class="summary-details">
                <h3 class="summary-title">ລວມລາຍການ</h3>
                <p class="summary-subtitle">Total Records</p>
                <h2 class="summary-amount">
                  {{ summaryData.totalRecords || 0 }}
                </h2>
                <p class="summary-lcy">Records</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Payment Report Table -->
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
        :items="reportData"
        :search="search"
        :loading="loading"
        class="report-table"
        :items-per-page="25"
        :footer-props="{
          itemsPerPageOptions: [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }"
      >
        <!-- Booking Date -->
        <template v-slot:item.bookingDate="{ item }">
          <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
        </template>

        <!-- Ministry -->
        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{ item.ministry?.ministryName || '' }}</span>
            <span class="ministry-code">{{ item.ministry?.ministryCode || ''}}</span>
          </div>
        </template>

        <!-- Currency -->
        <template v-slot:item.currencyCode="{ item }">
          <v-chip
            small
            :color="getCurrencyColor(item.currencyCode)"
            text-color="white"
          >
            {{ item.currencyCode }}
          </v-chip>
        </template>

        <!-- Amount -->
        <template v-slot:item.amount="{ item }">
          <div class="amount-breakdown">
            <span class="amount-cell">{{ formatCurrency(item.amount) }}</span>
            <div class="exchange-rate">
              Rate: {{ formatExchangeRate(item.exchangeRate) }}
            </div>
          </div>
        </template>

        <!-- LCY Equivalent -->
        <template v-slot:item.lcyEquivalent="{ item }">
          <span class="amount-cell lcy-amount">
            {{ formatCurrency(item.lcyEquivalent) }}
          </span>
        </template>

        <!-- Settlement Status -->
        <template v-slot:item.status="{ item }">
          <v-chip
            small
            :color="getStatusColor(item.status)"
            text-color="white"
          >
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>

        <!-- Settlement Percentage -->
        <template v-slot:item.settlementPercentage="{ item }">
          <v-progress-linear
            :value="parseFloat(item.settlementPercentage)"
            :color="getProgressColor(item.settlementPercentage)"
            height="20"
            rounded
          >
            <span class="progress-text">{{ item.settlementPercentage }}%</span>
          </v-progress-linear>
        </template>

        <!-- Outstanding Amount -->
        <template v-slot:item.outstandingLcyEquivalent="{ item }">
          <span
            class="amount-cell"
            :class="item.outstandingLcyEquivalent > 0 ? 'outstanding-amount' : 'settled-amount'"
          >
            {{ formatCurrency(item.outstandingLcyEquivalent) }}
          </span>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-btn
            small
            class="custom-action-btn"
            @click="viewPaymentDetails(item)"
          >
            <i class="fas fa-eye"></i>
            ລາຍລະອຽດ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Payment Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="1000px">
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
          <!-- Payment Summary -->
          <v-row class="mb-4">
            <v-col cols="12">
              <h3 class="section-title">ຂໍ້ມູນການຈ່າຍເງິນ (Payment Information)</h3>
              <v-divider class="custom-divider mb-3"></v-divider>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ວັນທີຈ່າຍ:</strong>
                <p>{{ formatDate(selectedPayment.bookingDate) }}</p>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ຈຳນວນເງິນ:</strong>
                <p>
                  {{ formatCurrency(selectedPayment.amount) }}
                  {{ selectedPayment.currencyCode }}
                </p>
                <small>LCY: {{ formatCurrency(selectedPayment.lcyEquivalent) }}</small>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ສະຖານະ:</strong>
                <p>{{ getStatusText(selectedPayment.status) }}</p>
              </div>
            </v-col>
            <v-col cols="6" md="3">
              <div class="detail-stat">
                <strong>ຄ້າງຊຳລະ:</strong>
                <p class="outstanding-text">
                  {{ formatCurrency(selectedPayment.outstandingLcyEquivalent) }} LAK
                </p>
              </div>
            </v-col>
          </v-row>

          <!-- Settlement Details -->
          <v-row v-if="selectedPayment.settlementLine && selectedPayment.settlementLine.length > 0">
            <v-col cols="12">
              <h3 class="section-title">ລາຍການຊຳລະ (Settlement Details)</h3>
              <v-divider class="custom-divider mb-3"></v-divider>
              <v-data-table
                :headers="settlementHeaders"
                :items="selectedPayment.settlementLine"
                hide-default-footer
                class="detail-table"
              >
                <template v-slot:item.bookingDate="{ item }">
                  <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
                </template>
                <template v-slot:item.amount="{ item }">
                  <span class="amount-cell">{{ formatCurrency(item.amount) }}</span>
                </template>
                <template v-slot:item.method="{ item }">
                  <v-chip small color="#01532B" text-color="white">
                    {{ item.method }}
                  </v-chip>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
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

      // Filter data
      filters: {
        fromDate: null,
        toDate: null,
        ministryId: null,
      },

      // Validation rules
      rules: {
        required: (value) => !!value || 'ກະລຸນາເລືອກວັນທີ',
        dateRange: () => {
          if (!this.filters.fromDate || !this.filters.toDate) return true
          return (
            new Date(this.filters.fromDate) <= new Date(this.filters.toDate) ||
            'ວັນທີເລີ່ມຕົ້ນຕ້ອງນ້ອຍກວ່າວັນທີສິ້ນສຸດ'
          )
        },
      },

      // Options data
      ministries: [],

      // Report data
      reportData: [],
      summaryData: {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        totalRecords: 0,
      },

      // Table headers for simplified payment view
      tableHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate', width: '100px' },
        { text: 'ກະຊວງ', value: 'ministry', width: '200px' },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', width: '80px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '130px' },
        { text: 'LCY', value: 'lcyEquivalent', width: '120px' },
        { text: 'ສະຖານະ', value: 'status', width: '100px' },
        { text: 'ຊຳລະແລ້ວ %', value: 'settlementPercentage', width: '120px' },
        { text: 'ຄ້າງຊຳລະ', value: 'outstandingLcyEquivalent', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' },
      ],

      settlementHeaders: [
        { text: 'ວັນທີຊຳລະ', value: 'bookingDate' },
        { text: 'ຈຳນວນ', value: 'amount' },
        { text: 'ວິທີການ', value: 'method' },
        { text: 'ໝາຍເຫດ', value: 'notes' },
      ],
    }
  },

  computed: {
    formattedFromDate() {
      return this.filters.fromDate
        ? this.formatDisplayDate(this.filters.fromDate)
        : ''
    },

    formattedToDate() {
      return this.filters.toDate
        ? this.formatDisplayDate(this.filters.toDate)
        : ''
    },

    maxDate() {
      return new Date().toISOString().substr(0, 10)
    },

    isDateRangeValid() {
      if (!this.filters.fromDate || !this.filters.toDate) return false
      return new Date(this.filters.fromDate) <= new Date(this.filters.toDate)
    },

    daysBetween() {
      if (!this.filters.fromDate || !this.filters.toDate) return 0
      const from = new Date(this.filters.fromDate)
      const to = new Date(this.filters.toDate)
      const timeDiff = to.getTime() - from.getTime()
      return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1
    },
  },

  async created() {
    await this.loadInitialData()
    this.setDefaultDateRange()
    this.applyFilters()
  },

  methods: {
    async loadInitialData() {
      try {
        const response = await this.$axios.get('/api/ministries')
        this.ministries = response.data.data
      } catch (error) {
        console.error('Error loading ministries:', error)
        this.$toast.error('Error loading initial data')
      }
    },

    setDefaultDateRange() {
      const now = new Date()
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
      const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

      this.filters.fromDate = firstDayOfMonth.toISOString().substr(0, 10)
      this.filters.toDate = lastDayOfMonth.toISOString().substr(0, 10)
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
        params.append('fromDate', this.filters.fromDate)
        params.append('toDate', this.filters.toDate)
        
        if (this.filters.ministryId) {
          params.append('ministryId', this.filters.ministryId)
        }

        console.log('Fetching data with params:', params.toString())

        // Updated API endpoint to match your actual endpoint
        const response = await this.$axios.get(
          `/api/money-advances/report?${params}`
        )

        console.log('API Response:', response.data)

        if (response.data && response.data.success && response.data.data) {
          this.reportData = response.data.data
          this.summaryData = response.data.summary || this.getDefaultSummary()
          
          console.log('Data loaded successfully:', this.reportData.length, 'records')
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error('Error loading report data:', error)
        this.reportData = []
        this.summaryData = this.getDefaultSummary()
        
        if (error.response) {
          const status = error.response.status
          const message = error.response.data?.message || 'Server error'
          this.$toast.error(`Error ${status}: ${message}`)
        } else if (error.request) {
          this.$toast.error('Network error. Please check your connection.')
        } else {
          this.$toast.error('Error loading report data')
        }
      } finally {
        this.loading = false
      }
    },

    resetFilters() {
      this.filters = {
        fromDate: null,
        toDate: null,
        ministryId: null,
      }
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
        totalRecords: 0,
      }
    },

    viewPaymentDetails(item) {
      this.selectedPayment = item
      this.detailsDialog = true
    },

    async exportToExcel() {
      this.exporting = true
      try {
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach((key) => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })

        const response = await this.$axios.get(
          `/api/money-advances/report/export?${params}`,
          { responseType: 'blob' }
        )

        const blob = new Blob([response.data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `payment-report-${this.filters.fromDate}-to-${this.filters.toDate}.xlsx`
        link.click()
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

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    formatExchangeRate(rate) {
      if (!rate) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      }).format(rate)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-GB')
    },

    formatDisplayDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    },

    getCurrencyColor(currencyCode) {
      const colors = {
        USD: '#01532B',
        LAK: '#01532B',
        THB: '#228B22',
        EUR: '#006400',
        CNY: '#666',
      }
      return colors[currencyCode] || '#01532B'
    },

    getStatusColor(status) {
      switch (status) {
        case 'settled':
          return '#28a745'
        case 'pending':
          return '#ffc107'
        case 'approved':
          return '#17a2b8'
        case 'rejected':
          return '#dc3545'
        default:
          return '#6c757d'
      }
    },

    getStatusText(status) {
      switch (status) {
        case 'settled':
          return 'ຊຳລະແລ້ວ'
        case 'pending':
          return 'ລໍຖ້າ'
        case 'approved':
          return 'ອະນຸມັດ'
        case 'rejected':
          return 'ປະຕິເສດ'
        default:
          return status
      }
    },

    getProgressColor(percentage) {
      const percent = parseFloat(percentage)
      if (percent === 100) return '#28a745'
      if (percent >= 50) return '#ffc107'
      return '#dc3545'
    },
  },
}
</script>

<style scoped>
/* All the existing styles from your original component */
.payment-report {
  padding: 0;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  background: #01532b;
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
  color: #01532b !important;
  border: 1px solid white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.custom-btn:hover {
  background-color: white !important;
  color: #01532b !important;
}

.filter-card {
  background: white;
  border-radius: 8px;
}

.filter-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.custom-primary-bg {
  background-color: #01532b !important;
}

.custom-secondary-btn {
  background-color: #6c757d !important;
  color: white !important;
  font-weight: 500 !important;
  text-transform: none !important;
}

.date-range-alert {
  background-color: rgba(1, 83, 43, 0.1) !important;
  border-color: #01532b !important;
  color: #01532b !important;
}

.summary-cards {
  margin-bottom: 24px;
}

.summary-card {
  height: 140px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.summary-content {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
}

.summary-icon {
  font-size: 48px;
  opacity: 0.9;
  margin-right: 16px;
  color: white;
}

.summary-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.summary-details p {
  margin: 4px 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.summary-details h2 {
  margin: 8px 0 0 0;
  font-size: 24px;
  font-weight: 700;
  color: white;
}

.advance-card,
.settlement-card,
.outstanding-card,
.records-card {
  background: #01532b;
  color: white;
}

.table-card {
  margin-bottom: 24px;
  border-radius: 8px;
}

.table-title {
  background: #01532b;
  color: white;
  font-weight: 600;
}

.search-field {
  max-width: 300px;
}

.report-table >>> thead th {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 600 !important;
  border-bottom: none !important;
}

.report-table >>> tbody tr:hover {
  background-color: rgba(1, 83, 43, 0.1) !important;
}

.ministry-cell {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 600;
  font-size: 14px;
  color: #01532b;
}

.ministry-code {
  font-size: 11px;
  color: #666;
  font-family: 'Courier New', monospace;
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
  align-items: center;
}

.amount-cell {
  font-family: 'Courier New', monospace;
  font-weight: 700;
  font-size: 14px;
}

.exchange-rate {
  font-size: 11px;
  color: #666;
  margin-top: 4px;
  font-style: italic;
}

.lcy-amount {
  color: #01532b !important;
}

.outstanding-amount {
  color: #dc3545 !important;
}

.settled-amount {
  color: #28a745 !important;
}

.progress-text {
  font-size: 12px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.custom-action-btn {
  background-color: #01532b !important;
  color: white !important;
  font-weight: 600 !important;
  text-transform: none !important;
  font-size: 12px !important;
  border-radius: 8px !important;
}

.dialog-header {
  background: #01532b !important;
  color: white !important;
  font-weight: 600 !important;
}

.close-btn {
  color: white !important;
}

.section-title {
  color: #01532b;
  font-weight: 700;
  font-size: 18px;
}

.custom-divider {
  border-color: #01532b !important;
  opacity: 0.3 !important;
}

.detail-stat {
  text-align: center;
  padding: 16px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  border-left: 4px solid #01532b;
  transition: all 0.3s ease;
}

.detail-stat strong {
  display: block;
  margin-bottom: 12px;
  color: #01532b;
  font-size: 15px;
  font-weight: 700;
}

.detail-stat p {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Courier New', monospace;
}

.detail-stat small {
  display: block;
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  font-style: italic;
}

.date-cell {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  font-weight: 500;
  color: #01532b;
}

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

  .summary-content {
    flex-direction: column;
    text-align: center;
    padding: 12px;
  }

  .summary-details h2 {
    font-size: 20px;
  }
}
</style>