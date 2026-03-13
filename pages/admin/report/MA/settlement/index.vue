<template>
  <div class="settlement-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-chart-bar primary--text"></i>
          ລາຍງານ ການຊຳລະ
        </h1>
        <p class="page-subtitle">Settlement Report</p>
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
        <v-btn color="primary" @click="refreshData" :loading="loading" dark>
          <i class="fas fa-sync-alt mr-1"></i>
          Refresh
        </v-btn>
      </div>
    </div>

    <!-- Filters Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title py-2">
        <v-icon small class="mr-2">mdi-filter</v-icon>
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

          <!-- Status -->
          <v-col cols="6" sm="2">
            <v-select v-model="filters.status" :items="statusOptions" label="Status" clearable outlined dense
              hide-details @change="applyFilters"></v-select>
          </v-col>

          <!-- Method -->
          <v-col cols="6" sm="2">
            <v-select v-model="filters.method" :items="methodOptions" label="Method" clearable outlined dense
              hide-details @change="applyFilters"></v-select>
          </v-col>

          <!-- Actions -->
          <v-col cols="12" sm="2" class="d-flex align-center">
            <v-btn color="grey lighten-1" class="white--text mr-1" small depressed @click="applyFilters"
              :loading="loading">
              <v-icon small>mdi-refresh</v-icon>
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
      <v-col cols="12" md="3" v-for="(card, index) in summaryCards" :key="index">
        <v-card class="summary-card" elevation="2">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container">
                  <v-icon large :color="card.color || 'primary'">{{ card.vIcon || 'mdi-chart-areaspline' }}</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">{{ card.title }}</div>
                  <div class="summary-amount primary--text">
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
        ລາຍລະອຽດລາຍງານ (Detailed Report)
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຄົ້ນຫາ..." single-line hide-details
          class="search-field" outlined dense></v-text-field>
      </v-card-title>

      <v-data-table :headers="tableHeaders" :items="settlements" :search="search" :loading="loading"
        :server-items-length="pagination.totalItems" :options.sync="tableOptions" @update:options="onTableOptionsUpdate"
        class="report-table" :footer-props="{
          itemsPerPageOptions: [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }">
        <!-- ID formatting -->
        <template v-slot:item.id="{ item }">
          <span class="date-cell">{{ formatSettlementNumber(item.id) }}</span>
        </template>

        <!-- Date formatting -->
        <template v-slot:item.bookingDate="{ item }">
          <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
        </template>

        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{ item.ministry?.ministryName || 'N/A' }}</span>
            <span class="ministry-code">{{ item.ministry?.ministryCode || '' }}</span>
          </div>
        </template>

        <!-- Amount formatting -->
        <template v-slot:item.amount="{ item }">
          <div class="amount-display">
            <div class="settlement-amount font-weight-bold">
              {{ formatCurrency(item.amount) }} {{ item.currency?.code }}
            </div>
            <div v-if="item.currency && item.currency.code !== 'LAK'" class="currency-info-sub">
              ({{ formatCurrency(convertToLocal(item.amount, item.currency)) }} LAK)
            </div>
          </div>
        </template>

        <!-- Method -->
        <template v-slot:item.method="{ item }">
          <v-chip :color="getMethodColor(item.method)" text-color="white" small>
            <v-icon left x-small>{{ getMethodIcon(item.method) }}</v-icon>
            {{ formatMethod(item.method) }}
          </v-chip>
        </template>

        <!-- Notes -->
        <template v-slot:item.notes="{ item }">
          <span class="notes-cell">{{ item.notes || '-' }}</span>
        </template>

        <!-- Proceeder -->
        <template v-slot:item.proceeder="{ item }">
          <div v-if="item.proceeder" class="proceeder-cell">
            <span class="proceeder-name">{{ item.proceeder.cus_name || item.proceeder.cus_email }}</span>
            <span class="proceeder-email">{{ item.proceeder.cus_email }}</span>
          </div>
          <span v-else class="text-grey">N/A</span>
        </template>

        <!-- Money Advance -->
        <template v-slot:item.moneyAdvance="{ item }">
          <div v-if="item.moneyAdvance" class="advance-cell">
            <v-chip x-small color="primary" text-color="white" class="mb-1">
              #{{ item.moneyAdvance.id }}
            </v-chip>
            <br>
            <v-chip x-small :color="getStatusColor(item.moneyAdvance.status)" text-color="white">
              {{ getStatusText(item.moneyAdvance.status) }}
            </v-chip>
          </div>
          <v-chip v-else x-small color="grey" text-color="white">
            Independent
          </v-chip>
        </template>

        <!-- Status -->
        <template v-slot:item.status="{ item }">
          <v-chip :color="item.moneyAdvance ? getStatusColor(item.moneyAdvance.status) : 'grey'" text-color="white"
            small>
            <v-icon left x-small>
              {{ item.moneyAdvance ? getStatusIcon(item.moneyAdvance.status) : 'mdi-check-circle' }}
            </v-icon>
            {{ item.moneyAdvance ? getStatusText(item.moneyAdvance.status) : 'Independent' }}
          </v-chip>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-btn small color="primary" @click="viewDetails(item)" class="mr-2">
            <i class="fas fa-eye"></i>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Settlement Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="900px">
      <v-card>
        <v-card-title class="dialog-header">
          <i class="fas fa-info-circle"></i>
          ລາຍລະອຽດການຊຳລະ (Settlement Details)
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
                  {{ field.formatter ? field.formatter(getNestedValue(selectedItem, field.key)) :
                    getNestedValue(selectedItem, field.key) || 'N/A' }}
                </span>
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="detail-item">
            <strong>ໝາຍເຫດ:</strong> {{ selectedItem.notes || 'ບໍ່ມີໝາຍເຫດ' }}
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SettlementReport',

  data() {
    return {
      loading: false,
      exporting: false,
      search: '',
      detailsDialog: false,
      selectedItem: null,

      // Filter data
      filters: {
        fromDate: null,
        toDate: null,
        status: null,
        method: null
      },

      // Report data
      settlements: [],
      stats: {
        totalCount: 0,
        totalAmount: 0,
        thisMonth: 0,
        pending: 0
      },

      // Table configuration
      tableOptions: {
        page: 1,
        itemsPerPage: 25,
        sortBy: ['id'],
        sortDesc: [true]
      },

      pagination: {
        totalItems: 0
      },

      // Table headers
      tableHeaders: [
        { text: 'ເລກທີ', value: 'id', width: '100px' },
        { text: 'ກົມ', value: 'ministry', width: '100px' },
        { text: 'ວັນທີ', value: 'bookingDate', width: '100px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '150px' },
        { text: 'ເນື້ອໃນ', value: 'notes', width: '150px' },
        { text: 'ວິທີການຊຳລະ', value: 'method', width: '140px' },
        // { text: 'ຜູ້ດຳເນີນການ', value: 'proceeder', width: '180px' },
        { text: 'ລາຍຈ່າຍ', value: 'moneyAdvance', width: '140px' },
        // { text: 'ສະຖານະ', value: 'status', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' }
      ],

      // Options
      statusOptions: [
        { text: 'ທັງໝົດ', value: null },
        { text: 'ລໍຖ້າອະນຸມັດ', value: 'pending' },
        { text: 'ອະນຸມັດແລ້ວ', value: 'approved' },
        { text: 'ຊຳລະແລ້ວ', value: 'settled' }
      ],

      methodOptions: [
        { text: 'ທັງໝົດ', value: null },
        { text: 'ເງິນສົດ', value: 'cash' },
        { text: 'ໂອນເງິນ', value: 'bank_transfer' },
        { text: 'ຫັກລົບ', value: 'deduction' }
      ]
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency']),

    summaryCards() {
      return [
        {
          title: 'ລວມການຊຳລະ (Qty)',
          amount: this.stats.totalCount || 0,
          vIcon: 'mdi-file-document-multiple',
          color: 'primary'
        },
        {
          title: 'ລວມຈຳນວນເງິນ (LAK)',
          amount: `₭${this.formatCurrency(this.stats.totalAmount)}`,
          vIcon: 'mdi-currency-usd',
          color: 'success'
        },
        {
          title: 'ເດືອນນີ້ (Qty)',
          amount: this.stats.thisMonth || 0,
          vIcon: 'mdi-calendar-month',
          color: 'info'
        },
        {
          title: 'ລໍຖ້າ (Qty)',
          amount: this.stats.pending || 0,
          vIcon: 'mdi-clock-outline',
          color: 'warning'
        }
      ]
    },

    detailFields() {
      return [
        { key: 'bookingDate', label: 'ວັນທີບັນທຶກ', formatter: this.formatDate },
        { key: 'amount', label: 'ຈຳນວນເງິນ', formatter: (val) => `${this.getCurrencySymbol()}${this.formatCurrency(val)}` },
        { key: 'currency.code', label: 'ສະກຸນເງິນ' },
        { key: 'exchangeRate', label: 'ອັດຕາແລກປ່ຽນ', formatter: (val) => val || '1.0000' },
        {
          key: 'method',
          label: 'ວິທີການຊຳລະ',
          type: 'chip',
          formatter: this.formatMethod,
          color: this.getMethodColor
        },
        { key: 'proceeder.cus_name', label: 'ຜູ້ດຳເນີນການ' },
        { key: 'moneyAdvance.id', label: 'ເລກທີລາຍຈ່າຍ', formatter: (val) => val ? `#${val}` : 'Independent' },
        {
          key: 'moneyAdvance.status',
          label: 'ສະຖານະ',
          type: 'chip',
          formatter: this.getStatusText,
          color: this.getStatusColor
        }
      ]
    }
  },

  async created() {
    this.setDefaultDates()
    await this.loadInitialData()
  },

  methods: {
    async loadInitialData() {
      await Promise.all([
        this.fetchSettlements(),
        this.fetchStats()
      ])
    },

    setDefaultDates() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.fromDate = firstDay.toISOString().substr(0, 10)
      this.filters.toDate = now.toISOString().substr(0, 10)
    },

    async applyFilters() {
      this.tableOptions.page = 1
      await this.fetchSettlements()
    },

    resetFilters() {
      this.filters = {
        fromDate: null,
        toDate: null,
        status: null,
        method: null
      }
      this.setDefaultDates()
      this.applyFilters()
    },

    async refreshData() {
      await this.loadInitialData()
      this.$toast.success('Data refreshed successfully')
    },

    async fetchSettlements() {
      this.loading = true
      try {
        const params = {
          page: this.tableOptions.page || 1,
          limit: this.tableOptions.itemsPerPage || 25,
          sortBy: this.tableOptions.sortBy?.[0] || 'id',
          sortOrder: this.tableOptions.sortDesc?.[0] ? 'desc' : 'asc',
          ...this.filters
        }

        // Remove null/empty filter values
        Object.keys(params).forEach(key => {
          if (params[key] === null || params[key] === '') {
            delete params[key]
          }
        })

        const response = await this.$axios.get('/api/settlements', { params })

        this.settlements = response.data.data.settlements || []
        this.pagination.totalItems = response.data.data.pagination?.totalItems || 0
      } catch (error) {
        console.error('Error fetching settlements:', error)
        this.$toast.error('Failed to load settlements')
      } finally {
        this.loading = false
      }
    },

    async fetchStats() {
      try {
        const response = await this.$axios.get('/api/settlements/stats')
        this.stats = response.data.data || {}
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    },

    // Table events
    onTableOptionsUpdate(options) {
      this.tableOptions = options
      this.fetchSettlements()
    },

    // Export method using frontend data
    async exportToExcel() {
      if (!this.settlements.length) {
        this.$toast.warning('No data to export')
        return
      }

      this.exporting = true
      try {
        // Prepare data from frontend
        const exportData = this.settlements.map((item, index) => ({
          '#': index + 1,
          'ເລກທີ': `'${this.formatSettlementNumber(item.id)}`,
          'ວ.ດ.ປ': this.formatDate(item.bookingDate),
          'ເບື້ອງຫນີ້': item.moneyAdvance ? item.moneyAdvance.amount : 0,
          'ເບື້ອງມີ': item.amount,
          'ສະກຸນ': item.currency?.code || 'LAK',
          'ອັດຕາແລກປ່ຽນ': item.exchangeRate || 1,
          'ປະເພດການຊຳລະ': this.formatMethod(item.method),
          'ເລກອ້າງອີກ ລາຍຈ່າຍ': item.moneyAdvance?.id || 'Independent',
          'Notes': item.notes || ''
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
        link.setAttribute('download', `settlement-report-${new Date().toISOString().substr(0, 10)}.csv`)
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
    viewDetails(item) {
      this.selectedItem = item
      this.detailsDialog = true
    },

    // Utility methods
    convertToLocal(amount, currencyObj) {
      if (!amount) return 0
      const code = typeof currencyObj === 'string' ? currencyObj : currencyObj?.code
      if (code === 'LAK') return amount

      const currency = (this.findAllCurrency || []).find(c => c.code === code)
      if (!currency || !currency.rate) return amount

      const rate = parseFloat(currency.rate)
      const direction = currency.exchangeDirection || 'local_to_foreign'

      if (direction === 'local_to_foreign') {
        return amount / rate
      } else {
        return amount * rate
      }
    },

    getNestedValue(obj, path) {
      return path.split('.').reduce((current, key) => current?.[key], obj)
    },

    formatSettlementNumber(id) {
      return String(id).padStart(6, '0')
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('lo-LA')
    },

    formatCurrency(amount) {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },

    formatMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        bank_transfer: 'ໂອນເງິນ',
        deduction: 'ຫັກລົບ'
      }
      return methods[method] || method
    },

    getMethodColor(method) {
      const colors = {
        cash: 'primary',
        bank_transfer: '#228B22',
        deduction: '#F59E0B'
      }
      return colors[method] || 'grey'
    },

    getMethodIcon(method) {
      const icons = {
        cash: 'mdi-cash',
        bank_transfer: 'mdi-bank',
        deduction: 'mdi-minus-circle'
      }
      return icons[method] || 'mdi-help-circle'
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

    getStatusIcon(status) {
      const icons = {
        pending: 'mdi-clock-outline',
        approved: 'mdi-check-circle',
        settled: 'mdi-check-all'
      }
      return icons[status] || 'mdi-help-circle'
    },

    getCurrencySymbol(currencyCode = 'LAK') {
      const symbols = {
        USD: '$',
        LAK: '₭',
        THB: '฿',
        EUR: '€',
        CNY: '¥',
        VND: '₫'
      }
      return symbols[currencyCode] || '₭'
    }
  }
}
</script>

<style scoped>
.settlement-report {
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
  font-size: 12px !important;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #edf2f7 !important;
}

.report-table>>>tbody tr:hover {
  background-color: #f7fafc !important;
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

.settlement-amount {
  color: #228b22;
}

.currency-info-sub {
  font-size: 11px;
  color: #718096;
  margin-top: 2px;
}

.proceeder-cell {
  display: flex;
  flex-direction: column;
}

.proceeder-name {
  font-weight: 600;
  font-size: 13px;
  color: primary;
}

.proceeder-email {
  font-size: 11px;
  color: #666;
  margin-top: 2px;
}

.advance-cell {
  text-align: center;
}

.notes-cell {
  font-size: 13px;
  color: #666;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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