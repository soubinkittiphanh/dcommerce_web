<template>
  <div class="ministry-settlement-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-building primary--text"></i>
          ລາຍງານຊຳລະຕາມກະຊວງ
        </h1>
        <p class="page-subtitle">Ministry Settlement Report</p>
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
            <v-text-field v-model="filters.startDate" type="date" label="From" outlined dense hide-details
              @change="loadDashboardData"></v-text-field>
          </v-col>
          <v-col cols="6" sm="3">
            <v-text-field v-model="filters.endDate" type="date" label="To" outlined dense hide-details
              @change="loadDashboardData"></v-text-field>
          </v-col>

          <!-- Ministry -->
          <v-col cols="6" sm="2">
            <v-select v-model="filters.ministryId" :items="ministries" item-text="ministryName" item-value="id"
              label="Ministry" clearable outlined dense hide-details @change="loadDashboardData"></v-select>
          </v-col>

          <!-- Method -->
          <v-col cols="6" sm="2">
            <v-select v-model="filters.method" :items="settlementMethods" label="Method" clearable outlined dense
              hide-details @change="loadDashboardData"></v-select>
          </v-col>

          <!-- Actions -->
          <v-col cols="12" sm="2" class="d-flex align-center">
            <v-btn color="grey lighten-1" class="white--text mr-1" small depressed @click="loadDashboardData"
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
                  <v-icon large :color="card.color || 'primary'">{{ card.vIcon || 'mdi-office-building' }}</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">{{ card.title }}</div>
                  <div class="summary-amount primary--text truncate">
                    {{ card.amount }}
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Currency Breakdown Cards -->
    <v-row class="mb-4" v-if="!loading && currencyBreakdown.length > 0 && 1 == 0">
      <v-col cols="12">
        <v-card elevation="2" class="currency-breakdown-card">
          <v-card-title class="currency-title">
            <i class="fas fa-coins"></i>
            ການແຈກຢາຍຕາມສະກຸນເງິນ (Currency Breakdown)
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="currency in currencyBreakdown" :key="currency.currencyCode || currency.currencyId" cols="12"
                md="4" lg="3">
                <v-card class="currency-card" elevation="1" outlined>
                  <v-card-text class="pa-3">
                    <div class="currency-summary">
                      <h4>
                        {{ currency.currencyCode || 'LAK' }}
                        {{ getCurrencyFlag(currency.currencyCode) }}
                      </h4>
                      <p><strong>Amount:</strong> {{ formatCurrency(currency.totalAmount, currency.currencyCode) }}</p>
                      <p><strong>LAK Equivalent:</strong> {{ formatCurrency(currency.lakEquivalent) }}</p>
                      <p><strong>Count:</strong> {{ currency.count }} ການຊຳລະ</p>
                      <p><strong>Percentage:</strong> {{ Math.round((currency.lakEquivalent / totalLakAmount) * 100) }}%
                      </p>
                    </div>
                  </v-card-text>
                </v-card>
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
        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຄົ້ນຫາກະຊວງ..." single-line hide-details
          class="search-field" outlined dense></v-text-field>
      </v-card-title>

      <v-data-table :headers="tableHeaders" :items="filteredMinistries" :search="search" :loading="loading"
        class="report-table" :items-per-page="25" :footer-props="{
          itemsPerPageOptions: [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }">
        <!-- Ministry Code -->
        <template v-slot:item.ministryCode="{ item }">
          <span class="ministry-code">{{ item.ministry?.ministryCode || 'N/A' }}</span>
        </template>

        <!-- Ministry Name -->
        <template v-slot:item.ministryName="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{ item.ministry?.ministryName || 'Unknown Ministry' }}</span>
            <span class="ministry-type">{{ item.ministry?.ministryType || 'N/A' }}</span>
          </div>
        </template>

        <!-- Count -->
        <template v-slot:item.count="{ item }">
          <v-chip small color="#228B22" text-color="white">
            {{ item.count }}
          </v-chip>
        </template>

        <!-- USD Amount -->
        <template v-slot:item.usd="{ item }">
          <span class="amount-cell">{{ formatCurrency(item.amounts?.USD || 0) }}</span>
        </template>

        <!-- LAK Amount -->
        <template v-slot:item.lak="{ item }">
          <span class="amount-cell">{{ formatCurrency(item.amounts?.LAK || 0) }}</span>
        </template>

        <!-- THB Amount -->
        <template v-slot:item.thb="{ item }">
          <span class="amount-cell">{{ formatCurrency(item.amounts?.THB || 0) }}</span>
        </template>

        <!-- CNY Amount -->
        <template v-slot:item.cny="{ item }">
          <span class="amount-cell">{{ formatCurrency(item.amounts?.CNY || 0) }}</span>
        </template>

        <!-- EUR Amount -->
        <template v-slot:item.eur="{ item }">
          <span class="amount-cell">{{ formatCurrency(item.amounts?.EUR || 0) }}</span>
        </template>

        <!-- Total LAK -->
        <template v-slot:item.totalLak="{ item }">
          <span class="amount-cell lcy-amount font-weight-bold">{{ formatCurrency(item.totalLak || 0) }}</span>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-btn small color="primary" @click="selectMinistry(item.ministryId)" dark>
            <v-icon small class="mr-1">mdi-eye</v-icon>
            ເບິ່ງ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Settlement Details Dialog -->
    <v-dialog v-model="settlementDialog" max-width="1200px" scrollable>
      <v-card v-if="selectedMinistry">
        <v-card-title class="dialog-header">
          <i class="fas fa-building"></i>
          ລາຍລະອຽດການຊຳລະ - {{ selectedMinistry.ministryName }}
          <v-spacer></v-spacer>
          <v-btn icon @click="closeDialog" class="close-btn">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text v-if="selectedMinistry">
          <!-- Summary Stats -->
          <v-row class="mb-4">
            <v-col cols="6" v-for="(field, index) in detailFields" :key="index">
              <div class="detail-item">
                <strong>{{ field.label }}:</strong>
                <span>{{ field.formatter ? field.formatter(field.value) : field.value || 'N/A' }}</span>
              </div>
            </v-col>
          </v-row>

          <!-- Settlement Details Table -->
          <div v-if="selectedSettlements.length > 0" class="mt-4">
            <h4>ລາຍການຊຳລະ (Settlement Details)</h4>
            <v-data-table :headers="settlementHeaders" :items="selectedSettlements" :loading="loadingDetails"
              class="settlement-table" :items-per-page="10" :footer-props="{
                itemsPerPageOptions: [5, 10, 25, 50],
                itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
              }">
              <template v-slot:item.bookingDate="{ item }">
                <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
              </template>
              <template v-slot:item.currency="{ item }">
                <v-chip small :color="getCurrencyColor(item.currency?.code)" text-color="white">
                  {{ item.currency?.code || 'LAK' }}
                </v-chip>
              </template>
              <template v-slot:item.amount="{ item }">
                <span class="amount-cell">{{ formatCurrency(item.amount, item.currency?.code) }}</span>
              </template>
              <template v-slot:item.method="{ item }">
                <v-chip small :color="getMethodColor(item.method)" text-color="white">
                  {{ formatMethod(item.method) }}
                </v-chip>
              </template>
              <template v-slot:item.proceeder="{ item }">
                <span>{{ item.proceeder?.name || 'N/A' }}</span>
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
  name: 'MinistrySettlementReport',

  data() {
    return {
      loading: false,
      exporting: false,
      loadingDetails: false,
      search: '',
      settlementDialog: false,

      // Filter data
      filters: {
        startDate: null,
        endDate: null,
        method: '',
        ministryId: null
      },

      // Options data
      ministries: [],
      settlementMethods: [
        { text: 'ທັງໝົດ', value: '' },
        { text: 'ເງິນສົດ', value: 'cash' },
        { text: 'ໂອນເງິນ', value: 'bank_transfer' },
        { text: 'ຫັກລົບ', value: 'deduction' }
      ],

      // Report data
      ministryStats: [],
      selectedMinistry: null,
      selectedSettlements: [],
      settlementSummary: {
        totalAmount: 0,
        settlementCount: 0
      },
      currencyBreakdown: [],
      currencyList: [],

      // Table headers - fixed structure
      tableHeaders: [
        { text: '#', value: 'index', width: '50px' },
        { text: 'ລະຫັດ', value: 'ministryCode', width: '100px' },
        { text: 'ກະຊວງ', value: 'ministryName', width: '250px' },
        { text: 'ຈຳນວນ', value: 'count', width: '80px' },
        { text: 'USD', value: 'usd', width: '100px', align: 'right' },
        { text: 'LAK', value: 'lak', width: '100px', align: 'right' },
        { text: 'THB', value: 'thb', width: '100px', align: 'right' },
        { text: 'CNY', value: 'cny', width: '100px', align: 'right' },
        { text: 'EUR', value: 'eur', width: '100px', align: 'right' },
        { text: 'Total (LAK)', value: 'totalLak', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' }
      ],

      settlementHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate', width: '120px' },
        { text: 'ສະກຸນເງິນ', value: 'currency', width: '80px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '130px' },
        { text: 'ວິທີການ', value: 'method', width: '120px' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'proceeder', width: '150px' },
        { text: 'ໝາຍເຫດ', value: 'notes', width: '200px' }
      ]
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency']),

    summaryCards() {
      return [
        {
          title: 'ທັງໝົດກະຊວງ',
          amount: this.ministryStats.length,
          vIcon: 'mdi-office-building',
          color: 'primary'
        },
        {
          title: 'ຈຳນວນການຊຳລະ',
          amount: this.totalSettlementsCount,
          vIcon: 'mdi-swap-horizontal',
          color: 'success'
        },
        {
          title: 'ສະກຸນເງິນທີ່ໃຊ້',
          amount: this.uniqueCurrencies,
          vIcon: 'mdi-currency-usd',
          color: 'warning'
        },
        {
          title: 'ລາວກີບ (LAK)',
          amount: this.formatCurrency(this.totalLakAmount),
          vIcon: 'mdi-calculator',
          color: 'info'
        }
      ]
    },

    filteredMinistries() {
      let filtered = this.ministryStats

      if (this.search) {
        filtered = filtered.filter(ministry =>
          ministry.ministry?.ministryName?.toLowerCase().includes(this.search.toLowerCase()) ||
          ministry.ministry?.ministryCode?.toLowerCase().includes(this.search.toLowerCase()) ||
          ministry.ministry?.ministryType?.toLowerCase().includes(this.search.toLowerCase())
        )
      }

      return filtered.map((item, index) => ({
        ...item,
        index: index + 1
      }))
    },

    totalSettlementsCount() {
      return this.ministryStats.reduce((sum, ministry) => sum + parseInt(ministry.count || 0), 0)
    },

    totalLakAmount() {
      return this.ministryStats.reduce((sum, ministry) => sum + (ministry.totalLak || 0), 0)
    },

    uniqueCurrencies() {
      const currencies = new Set()
      this.ministryStats.forEach(ministry => {
        Object.keys(ministry.amounts || {}).forEach(currency => {
          currencies.add(currency)
        })
      })
      return currencies.size
    },

    detailFields() {
      if (!this.selectedMinistry) return []

      return [
        { label: 'ລະຫັດກະຊວງ', value: this.selectedMinistry.ministryCode },
        { label: 'ຈຳນວນການຊຳລະ', value: this.settlementSummary.settlementCount },
        { label: 'ລວມຈຳນວນເງິນ', value: this.settlementSummary.totalAmount, formatter: this.formatCurrency },
        { label: 'ປະເພດກະຊວງ', value: this.selectedMinistry.ministryType },
        {
          label: 'ຄ່າສະເລ່ຍ',
          value: this.settlementSummary.settlementCount > 0 ?
            this.settlementSummary.totalAmount / this.settlementSummary.settlementCount : 0,
          formatter: this.formatCurrency
        },
        { label: 'ລາຍລະອຽດ', value: this.selectedMinistry.description }
      ]
    }
  },

  async created() {
    await this.loadInitialData()
    this.setDefaultDates()
    await this.loadDashboardData()
  },

  methods: {
    async loadInitialData() {
      try {
        const [ministriesRes, currenciesRes] = await Promise.all([
          this.$axios.get('/api/ministries'),
          this.$axios.get('/api/currency/findAll')
        ])

        this.ministries = ministriesRes.data.data || ministriesRes.data
        const currencies = currenciesRes.data.data || currenciesRes.data
        this.currencyList = currencies.map(currency => ({
          code: currency.code,
          name: currency.name,
          id: currency.id
        }))
      } catch (error) {
        console.error('Error loading initial data:', error)
        this.$toast.error('Error loading initial data')
      }
    },

    setDefaultDates() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.startDate = firstDay.toISOString().substr(0, 10)
      this.filters.endDate = now.toISOString().substr(0, 10)
    },

    groupSettlementsByMinistry(settlements) {
      const grouped = {}

      settlements.forEach(settlement => {
        const ministryId = settlement.ministryId || 'NO_MINISTRY'

        if (!grouped[ministryId]) {
          grouped[ministryId] = {
            ministryId: ministryId,
            ministry: settlement.ministry || {
              ministryCode: 'N/A',
              ministryName: 'Unknown Ministry',
              ministryType: 'N/A',
              description: 'N/A'
            },
            count: 0,
            amounts: {},
            totalLak: 0
          }
        }

        const ministry = grouped[ministryId]
        ministry.count += 1

        const currencyCode = settlement.currency?.code || 'LAK'
        if (!ministry.amounts[currencyCode]) {
          ministry.amounts[currencyCode] = 0
        }

        ministry.amounts[currencyCode] += parseFloat(settlement.amount || 0)

        const exchangeRate = settlement.exchangeRate || 1
        const lakAmount = parseFloat(settlement.amount || 0) * exchangeRate
        ministry.totalLak += lakAmount
      })

      return Object.values(grouped)
    },

    async loadDashboardData() {
      this.loading = true
      try {
        const params = new URLSearchParams()
        if (this.filters.startDate) params.append('fromDate', this.filters.startDate)
        if (this.filters.endDate) params.append('toDate', this.filters.endDate)
        if (this.filters.method) params.append('method', this.filters.method)
        if (this.filters.ministryId) params.append('ministryId', this.filters.ministryId)

        const response = await this.$axios.get(`/api/settlements?${params}`)

        if (response.data.success) {
          const settlements = response.data.data.settlements || []
          this.ministryStats = this.groupSettlementsByMinistry(settlements)
          await this.calculateCurrencyBreakdown()
        }
      } catch (error) {
        console.error('Error loading dashboard data:', error)
        this.$toast.error('Failed to load ministry reports')
      } finally {
        this.loading = false
      }
    },

    async calculateCurrencyBreakdown() {
      try {
        const params = new URLSearchParams()
        if (this.filters.startDate) params.append('startDate', this.filters.startDate)
        if (this.filters.endDate) params.append('endDate', this.filters.endDate)
        if (this.filters.method) params.append('method', this.filters.method)
        if (this.filters.ministryId) params.append('ministryId', this.filters.ministryId)

        const response = await this.$axios.get(`/api/settlements/currency-breakdown?${params}`)

        if (response.data.success) {
          this.currencyBreakdown = response.data.data.currencies || []
        }
      } catch (error) {
        console.error('Error calculating currency breakdown:', error)
        this.currencyBreakdown = []
      }
    },

    async selectMinistry(ministryId) {
      this.loadingDetails = true
      this.settlementDialog = true

      try {
        const response = await this.$axios.get(`/api/settlements/by-ministry/${ministryId}`)

        if (response.data.success) {
          this.selectedSettlements = response.data.data.settlements || []
          this.settlementSummary = response.data.data.summary || {}

          const stat = this.ministryStats.find(s => s.ministryId == ministryId)
          this.selectedMinistry = stat ? stat.ministry : null
        }
      } catch (error) {
        console.error('Error loading ministry settlements:', error)
        this.$toast.error('Failed to load settlement details')
      } finally {
        this.loadingDetails = false
      }
    },

    resetFilters() {
      this.filters = {
        startDate: null,
        endDate: null,
        method: '',
        ministryId: null
      }
      this.setDefaultDates()
      this.loadDashboardData()
    },

    closeDialog() {
      this.settlementDialog = false
      this.selectedMinistry = null
      this.selectedSettlements = []
    },

    // Export using frontend data
    async exportToExcel() {
      if (!this.ministryStats.length) {
        this.$toast.warning('No data to export')
        return
      }

      this.exporting = true
      try {
        const exportData = this.ministryStats.map((item, index) => ({
          '#': index + 1,
          'ລະຫັດກະຊວງ': item.ministry?.ministryCode || 'N/A',
          'ຊື່ກະຊວງ': item.ministry?.ministryName || 'Unknown Ministry',
          'ປະເພດ': item.ministry?.ministryType || 'N/A',
          'ຈຳນວນການຊຳລະ': item.count,
          'USD': item.amounts?.USD || 0,
          'LAK': item.amounts?.LAK || 0,
          'THB': item.amounts?.THB || 0,
          'CNY': item.amounts?.CNY || 0,
          'EUR': item.amounts?.EUR || 0,
          'Total (LAK)': item.totalLak || 0
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
        link.setAttribute('download', `ministry-settlement-report-${this.filters.startDate}-${this.filters.endDate}.csv`)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        this.$toast.success('Ministry Report exported successfully!')
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

    // Utility methods
    formatCurrency(amount, currencyCode = 'LAK') {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },

    formatMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        bank_transfer: 'ໂອນເງິນ',
        deduction: 'ຫັກລົບ'
      }
      return methods[method] || method
    },

    getCurrencyColor(currencyCode) {
      const colors = {
        LAK: 'primary',
        USD: '#228B22',
        THB: '#32CD32',
        CNY: '#006400',
        EUR: '#9ACD32'
      }
      return colors[currencyCode] || 'primary'
    },

    getMethodColor(method) {
      const colors = {
        cash: 'primary',
        bank_transfer: '#228B22',
        deduction: '#32CD32'
      }
      return colors[method] || 'primary'
    },

    getCurrencyFlag(currencyCode) {
      const flags = {
        LAK: '🇱🇦',
        USD: '🇺🇸',
        THB: '🇹🇭',
        CNY: '🇨🇳',
        EUR: '🇪🇺'
      }
      return flags[currencyCode] || '🏳️'
    }
  }
}
</script>

<style scoped>
.ministry-settlement-report {
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

/* Filter Card */
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
  border-radius: 8px;
  border: 1px solid #edf2f7;
}

.summary-card:hover {
  transform: translateY(-2px);
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

.summary-icon {
  font-size: 48px;
  opacity: 0.9;
  margin-right: 16px;
  color: white;
}

.summary-details .summary-title {
  font-size: 11px;
  color: #718096;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.summary-details .summary-subtitle {
  margin: 4px 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.summary-details .summary-amount {
  font-size: 20px;
  font-weight: 700;
  margin-top: 2px;
}

.summary-lcy {
  font-size: 11px;
  opacity: 0.9;
  margin-top: 4px !important;
  color: rgba(255, 255, 255, 0.9);
}

/* Currency Breakdown */
.currency-breakdown-card {
  margin-bottom: 24px;
  border-radius: 8px;
}

.currency-title {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
  color: white;
  font-weight: 600;
}

.currency-card {
  transition: all 0.3s ease;
  border-radius: 8px;
}

.currency-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.2);
  border-color: #01532B;
}

.currency-summary h4 {
  margin: 0 0 12px 0;
  color: #01532B;
  border-bottom: 1px solid #01532B;
  padding-bottom: 8px;
  font-weight: 600;
}

.currency-summary p {
  margin: 4px 0;
  font-size: 13px;
}

.currency-summary strong {
  color: #01532B;
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

.search-field>>>input {
  color: white !important;
}

.search-field>>>.v-icon {
  color: white !important;
}

.report-table {
  background: white;
  border-radius: 8px;
}

.report-table>>>thead {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
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

/* Table Cell Styling */
.ministry-code {
  font-family: monospace;
  font-weight: 600;
  color: #4a5568;
}

.ministry-cell {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 700;
  color: #2d3748;
}

.ministry-type {
  font-size: 11px;
  color: #718096;
}

.amount-cell {
  font-family: monospace;
  font-weight: 700;
  text-align: right;
  display: block;
}

.lcy-amount {
  color: #01532B !important;
}

.date-cell {
  font-family: monospace;
  font-size: 13px;
  color: #01532B;
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