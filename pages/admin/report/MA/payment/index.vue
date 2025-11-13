<template>
  <div class="money-advance-report">
    <!-- Header -->
    <div class="report-header primary">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-chart-line"></i>
          ລາຍງານ ລາຍຈ່າຍລ່ວງໜ້າ
        </h1>
        <p class="page-subtitle">Money Advance Report</p>
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
          
          <!-- Currency -->
          <v-col cols="6" sm="2">
            <v-select
              v-model="filters.currencyId"
              :items="currencies"
              item-text="name"
              item-value="id"
              label="Currency"
              clearable
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
                    {{ formatCurrency(card.amount) }}
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
        ລາຍລະອຽດລາຍງານ (Detailed Report)
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
        <!-- Custom slots for better formatting -->
        <template v-slot:item.id="{ item }">
          <span class="date-cell">{{ formatVoucherNumber(item.id) }}</span>
        </template>
        
        <template v-slot:item.bookingDate="{ item }">
          <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
        </template>

        <template v-slot:item.amount="{ item }">
          <span class="amount-cell advance-amount">
            {{ formatCurrency(item.amount) }}
          </span>
        </template>

        <template v-slot:item.exchangeRate="{ item }">
          <span class="exchange-rate-cell">
            {{ formatExchangeRate(item.exchangeRate) }}
          </span>
        </template>

        <template v-slot:item.settlementAmount="{ item }">
          <span class="amount-cell settlement-amount">
            {{ formatCurrency(item.settlementAmount || 0) }}
          </span>
        </template>

        <template v-slot:item.outstandingAmount="{ item }">
          <span class="amount-cell outstanding-amount">
            {{ formatCurrency(item.outstandingAmount) }}
          </span>
        </template>

        <template v-slot:item.settlementPercentage="{ item }">
          <div class="settlement-progress">
            <v-progress-linear
              :value="parseFloat(item.settlementPercentage)"
              :color="getProgressColor(item.settlementPercentage)"
              height="20"
              rounded
            >
              <span class="progress-text">{{ item.settlementPercentage }}%</span>
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
            <span class="ministry-code">{{ item.ministry?.ministryCode || '' }}</span>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn small color="primary" @click="viewDetails(item)" class="mr-2">
            <i class="fas fa-eye"></i>
          </v-btn>
          <v-btn
            small
            color="#228B22"
            @click="viewSettlements(item)"
            v-if="item.settlementCount > 0"
          >
            <i class="fas fa-list"></i>
            {{ item.settlementCount }}
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="900px">
      <v-card>
        <v-card-title class="dialog-header">
          <i class="fas fa-info-circle"></i>
          ລາຍລະອຽດລາຍຈ່າຍ (Advance Details)
          <v-spacer></v-spacer>
          <v-btn icon @click="detailsDialog = false" class="close-btn">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedItem">
          <v-row>
            <v-col cols="6" v-for="(field, index) in detailFields" :key="index">
              <div class="detail-item">
                <strong>{{ field.label }}:</strong>
                <span v-if="field.type === 'chip'">
                  <v-chip :color="field.color(selectedItem[field.key])" text-color="white" small>
                    {{ field.formatter ? field.formatter(selectedItem[field.key]) : selectedItem[field.key] }}
                  </v-chip>
                </span>
                <span v-else>
                  {{ field.formatter ? field.formatter(selectedItem[field.key]) : selectedItem[field.key] || 'N/A' }}
                </span>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="detail-item">
            <strong>ໝາຍເຫດ:</strong> {{ selectedItem.note || 'ບໍ່ມີໝາຍເຫດ' }}
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Settlements Dialog -->
    <v-dialog v-model="settlementsDialog" max-width="900px">
      <v-card>
        <v-card-title class="dialog-header">
          <i class="fas fa-receipt"></i>
          ປະຫວັດການຊຳລະ (Settlement History)
          <v-spacer></v-spacer>
          <v-btn icon @click="settlementsDialog = false" class="close-btn">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="settlementHeaders"
            :items="settlements"
            :loading="loadingSettlements"
            hide-default-footer
            class="settlement-table"
          >
            <template v-slot:item.bookingDate="{ item }">
              <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
            </template>
            <template v-slot:item.amount="{ item }">
              <span class="amount-cell settlement-amount">
                {{ formatCurrency(item.amount) }}
              </span>
            </template>
            <template v-slot:item.method="{ item }">
              <v-chip small :color="getMethodColor(item.method)">
                {{ getMethodText(item.method) }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
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
        { text: 'ID', value: 'id', width: '100px' },
        { text: 'ວັນທີ', value: 'bookingDate', width: '100px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '120px' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'exchangeRate', width: '100px' },
        { text: 'ການຊຳລະ', value: 'settlementAmount', width: '120px' },
        { text: 'ຍອດຄ້າງ', value: 'outstandingAmount', width: '120px' },
        { text: '% ຊຳລະ', value: 'settlementPercentage', width: '100px' },
        { text: 'ກະຊວງ', value: 'ministry', width: '150px' },
        { text: 'ຈຸດປະສົງ', value: 'purpose', width: '200px' },
        { text: 'ສະຖານະ', value: 'status', width: '100px' },
        { text: 'ຜູ້ລົງ', value: 'maker.cus_name', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' }
      ],

      settlementHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate' },
        { text: 'ຈຳນວນ', value: 'amount' },
        { text: 'ວິທີການ', value: 'method' },
        { text: 'ໝາຍເຫດ', value: 'notes' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'user.cus_name' }
      ]
    }
  },

  computed: {
    summaryCards() {
      return [
        {
          title: 'ລວມລາຍຈ່າຍ',
          subtitle: 'Total Advances',
          amount: this.summaryData.totalAdvances,
          lcyAmount: this.summaryData.totalAdvancesLcy,
          icon: 'fas fa-cash-register'
        },
        {
          title: 'ລວມການຊຳລະ',
          subtitle: 'Total Settlements',
          amount: this.summaryData.totalSettlements,
          lcyAmount: this.summaryData.totalSettlementsLcy,
          icon: 'fas fa-hand-holding-usd'
        },
        {
          title: 'ຍອດຄ້າງຊຳລະ',
          subtitle: 'Outstanding Balance',
          amount: this.summaryData.outstandingBalance,
          lcyAmount: this.summaryData.outstandingBalanceLcy,
          icon: 'fas fa-exclamation-triangle'
        },
        {
          title: 'ຍອດຍົກມາ',
          subtitle: 'Brought Forward',
          amount: this.summaryData.broughtForward,
          lcyAmount: this.summaryData.broughtForwardLcy,
          icon: 'fas fa-arrow-right'
        }
      ]
    },

    detailFields() {
      return [
        { key: 'bookingDate', label: 'ວັນທີບັນທຶກ', formatter: this.formatDate },
        { key: 'amount', label: 'ຈຳນວນເງິນ', formatter: this.formatCurrency },
        { key: 'currencyCode', label: 'ສະກຸນເງິນ' },
        { key: 'exchangeRate', label: 'ອັດຕາແລກປ່ຽນ', formatter: this.formatExchangeRate },
        { key: 'lcyEquivalent', label: 'ເທົ່າກັບກີບ', formatter: this.formatCurrency },
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
        { key: 'settlementPercentage', label: 'ເປີເຊັນຊຳລະ', formatter: (val) => `${val}%` },
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
          this.$axios.get('/api/currency/find')
        ])

        this.ministries = ministriesRes.data.data || ministriesRes.data
        this.currencies = currenciesRes.data.data || currenciesRes.data
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

        if (response.data.success) {
          this.reportData = response.data.data || []
          this.summaryData = response.data.summary || {}
        } else {
          this.reportData = response.data.data || response.data || []
          this.summaryData = response.data.summary || this.calculateSummary()
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
        totalRecords: this.reportData.length
      }

      this.reportData.forEach((item) => {
        summary.totalAdvances += parseFloat(item.amount || 0)
        summary.totalSettlements += parseFloat(item.settlementAmount || 0)
        summary.outstandingBalance += parseFloat(item.outstandingAmount || 0)
      })

      return summary
    },

    // Export methods - using frontend data instead of making API call
    async exportToExcel() {
      if (!this.reportData.length) {
        this.$toast.warning('No data to export')
        return
      }

      this.exporting = true
      try {
        // Prepare data from frontend instead of calling API
        const exportData = this.reportData.map((item, index) => ({
          'ລດ': index + 1,
          'ເລກທີ': `'${this.formatVoucherNumber(item.id)}`,
          'ວ.ດ.ປ': this.formatDate(item.bookingDate),
          'ເນື້ອໃນລາຍການ': item.purpose || '',
          'Notes': item.note || '',
          'ສະກຸນ': item.currencyCode || 'LAK',
          'ອັດຕາແລກປ່ຽນ': item.exchangeRate || 1,
          'ຍອດຫນີ້': item.amount,
          'ຍອດມີ': item.settlementAmount || 0,
          'ຍອດເຫລືອ': item.outstandingAmount,
          'ລະຫັດ ກະຊວງ': item.ministry?.ministryCode || 'N/A',
          'ກະຊວງ': item.ministry?.ministryName || 'N/A'
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
        link.setAttribute('download', `money-advance-report-${new Date().toISOString().substr(0, 10)}.csv`)
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

    // Dialog methods
    async viewDetails(item) {
      this.selectedItem = item
      this.detailsDialog = true
    },

    async viewSettlements(item) {
      this.loadingSettlements = true
      this.settlementsDialog = true

      try {
        const response = await this.$axios.get(`/api/money-advances/${item.id}/settlements`)
        this.settlements = response.data.data || response.data || []
      } catch (error) {
        console.error('Error loading settlements:', error)
        this.$toast.error('Error loading settlements')
        this.settlements = []
      } finally {
        this.loadingSettlements = false
      }
    },

    // Formatting methods
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0')
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
      return new Date(date).toLocaleDateString('lo-LA')
    },

    // Utility methods
    getProgressColor(percentage) {
      const percent = parseFloat(percentage || 0)
      if (percent >= 100) return 'primary'
      if (percent >= 50) return '#228B22'
      return '#32CD32'
    },

    getStatusColor(status) {
      const colors = {
        pending: '#32CD32',
        approved: '#228B22',
        settled: 'primary'
      }
      return colors[status] || '#666'
    },

    getStatusText(status) {
      const texts = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        settled: 'ຊຳລະແລ້ວ'
      }
      return texts[status] || status
    },

    getMethodColor(method) {
      const colors = {
        cash: 'primary',
        bank_transfer: '#228B22',
        deduction: '#32CD32'
      }
      return colors[method] || 'primary'
    },

    getMethodText(method) {
      const texts = {
        cash: 'ເງິນສົດ',
        bank_transfer: 'ໂອນເງິນ',
        deduction: 'ຫັກລົບ'
      }
      return texts[method] || method
    }
  }
}
</script>

<style scoped>
.money-advance-report {
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

.exchange-rate-cell {
  font-family: monospace;
  font-size: 12px;
  text-align: center;
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

/* Dialog Styling */
.dialog-header {
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
  color: primary;
}

.settlement-table {
  margin-top: 16px;
}

.settlement-table >>> thead th {
  background-color: primary !important;
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
}
</style>