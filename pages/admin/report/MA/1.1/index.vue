<template>
  <div>
    <!-- Compact Header -->
    <div class="header">
      <div>
        <h2>Balance Report - Money Advances</h2>
        <small>{{ formatPeriod() }}</small>
      </div>
      <div class="header-actions">
        <button @click="exportToExcel" :disabled="loading" class="btn-export">
          📊 Export
        </button>
        <button @click="printReport" class="btn-print">🖨️ Print</button>
        <!-- <button @click="validateReport" class="btn-print">🖨️ TEST</button> -->
      </div>
    </div>

    <!-- Compact Filters -->
    <div class="filters">
      <select v-model="filters.month" @change="applyFilters">
        <option v-for="month in months" :key="month.value" :value="month.value">
          {{ month.text }}
        </option>
      </select>
      
      <select v-model="filters.year" @change="applyFilters">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
      
      <select v-model="filters.ministryId" @change="applyFilters">
        <option value="">All Ministries</option>
        <option v-for="ministry in ministries" :key="ministry.id" :value="ministry.id">
          {{ ministry.ministryCode }} - {{ ministry.ministryName }}
        </option>
      </select>
      
      <select v-model="filters.currencyId" @change="applyFilters">
        <option value="">All Currencies</option>
        <option v-for="currency in currencies" :key="currency.id" :value="currency.id">
          {{ currency.code }}
        </option>
      </select>

      <button @click="resetFilters" class="btn-reset">🔄</button>
    </div>

    <!-- Currency Summary Cards -->
    <div class="summary-cards" v-if="currencySummaries.length">
      <h3>Summary by Currency</h3>
      <div class="cards-grid">
        <div v-for="curr in currencySummaries" :key="curr.currencyCode" class="summary-card">
          <div class="card-header">
            <span class="currency">{{ curr.currencyCode }}</span>
            <span class="total">{{ formatAmount(curr.endingBalance) }}</span>
          </div>
          <div class="card-details">
            <div class="detail">
              <span>Brought Forward:</span>
              <span>{{ formatAmount(curr.balanceForward) }}</span>
            </div>
            <div class="detail advance">
              <span>+ New Advances:</span>
              <span>{{ formatAmount(curr.newAdvances) }}</span>
            </div>
            <div class="detail settlement">
              <span>- Settlements:</span>
              <span>{{ formatAmount(curr.newSettlements) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-container">
      <div class="table-header">
        <h3>Detailed Report</h3>
        <input 
          v-model="search" 
          placeholder="Search..."
          class="search-input"
        >
      </div>
      
      <div v-if="loading" class="loading">Loading...</div>
      
      <table v-else class="data-table">
        <thead>
          <tr>
            <th>Ministry</th>
            <th>Currency</th>
            <th>Brought Forward</th>
            <th>New Advances</th>
            <th>Settlements</th>
            <th>Ending Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredData" :key="`${item.ministryId}-${item.currencyId}`">
            <td>
              <div class="ministry-cell">
                <strong>{{ item.ministryCode }}</strong>
                <small>{{ item.ministryName }}</small>
              </div>
            </td>
            <td>
              <span class="currency-badge">{{ item.currencyCode }}</span>
            </td>
            <td class="amount">{{ formatAmount(item.balanceForward) }}</td>
            <td class="amount advance">{{ formatAmount(item.newAdvances) }}</td>
            <td class="amount settlement">{{ formatAmount(item.newSettlements) }}</td>
            <td class="amount ending" :class="getBalanceClass(item.endingBalance)">
              {{ formatAmount(item.endingBalance) }}
            </td>
            <td>
              <button @click="viewDetails(item)" class="btn-sm">👁️</button>
              <!-- <button @click="viewTransactions(item)" class="btn-sm">📋</button> -->
            </td>
          </tr>
        </tbody>
        <tfoot v-if="filteredData.length">
          <tr class="total-row">
            <td colspan="2"><strong>TOTAL</strong></td>
            <td class="amount"><strong>{{ formatAmount(totals.balanceForward) }}</strong></td>
            <td class="amount"><strong>{{ formatAmount(totals.newAdvances) }}</strong></td>
            <td class="amount"><strong>{{ formatAmount(totals.newSettlements) }}</strong></td>
            <td class="amount"><strong>{{ formatAmount(totals.endingBalance) }}</strong></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Details Modal -->
    <div v-if="detailsDialog" class="modal-overlay" @click="detailsDialog = false">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h3>Balance Details</h3>
          <button @click="detailsDialog = false" class="btn-close">✕</button>
        </div>
        <div class="modal-body" v-if="selectedItem">
          <div class="detail-grid">
            <div class="detail-item">
              <label>Ministry:</label>
              <span>{{ selectedItem.ministryCode }} - {{ selectedItem.ministryName }}</span>
            </div>
            <div class="detail-item">
              <label>Currency:</label>
              <span>{{ selectedItem.currencyCode }}</span>
            </div>
            <div class="detail-item">
              <label>Brought Forward:</label>
              <span>{{ formatAmount(selectedItem.balanceForward) }}</span>
            </div>
            <div class="detail-item">
              <label>New Advances:</label>
              <span class="advance">{{ formatAmount(selectedItem.newAdvances) }}</span>
            </div>
            <div class="detail-item">
              <label>Settlements:</label>
              <span class="settlement">{{ formatAmount(selectedItem.newSettlements) }}</span>
            </div>
            <div class="detail-item">
              <label>Ending Balance:</label>
              <span class="ending" :class="getBalanceClass(selectedItem.endingBalance)">
                {{ formatAmount(selectedItem.endingBalance) }}
              </span>
            </div>
          </div>
          
          <div class="calculation">
            <h4>Calculation:</h4>
            <div class="calc-formula">
              {{ formatAmount(selectedItem.balanceForward) }} + 
              {{ formatAmount(selectedItem.newAdvances) }} - 
              {{ formatAmount(selectedItem.newSettlements) }} = 
              <strong>{{ formatAmount(selectedItem.endingBalance) }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BalanceReport',
  
  data() {
    return {
      loading: false,
      search: '',
      detailsDialog: false,
      selectedItem: null,
      
      filters: {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        ministryId: '',
        currencyId: ''
      },
      
      months: [
        { text: 'January', value: 1 },
        { text: 'February', value: 2 },
        { text: 'March', value: 3 },
        { text: 'April', value: 4 },
        { text: 'May', value: 5 },
        { text: 'June', value: 6 },
        { text: 'July', value: 7 },
        { text: 'August', value: 8 },
        { text: 'September', value: 9 },
        { text: 'October', value: 10 },
        { text: 'November', value: 11 },
        { text: 'December', value: 12 }
      ],
      
      years: [],
      ministries: [],
      currencies: [],
      reportData: [],
      currencySummaries: []
    }
  },
  
  computed: {
    // Add endingBalance to each item from reportData
    reportDataWithBalance() {
      return this.reportData.map(item => ({
        ...item,
        endingBalance: parseFloat(item.balanceForward || 0) + 
                      parseFloat(item.newAdvances || 0) - 
                      parseFloat(item.newSettlements || 0)
      }))
    },

    filteredData() {
      if (!this.search) return this.reportDataWithBalance
      
      return this.reportDataWithBalance.filter(item => 
        item.ministryName.toLowerCase().includes(this.search.toLowerCase()) ||
        item.ministryCode.toLowerCase().includes(this.search.toLowerCase()) ||
        item.currencyCode.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    
    totals() {
      return this.filteredData.reduce((acc, item) => {
        acc.balanceForward += parseFloat(item.balanceForward || 0)
        acc.newAdvances += parseFloat(item.newAdvances || 0)
        acc.newSettlements += parseFloat(item.newSettlements || 0)
        acc.endingBalance += parseFloat(item.endingBalance || 0)
        return acc
      }, {
        balanceForward: 0,
        newAdvances: 0,
        newSettlements: 0,
        endingBalance: 0
      })
    }
  },
  
  async created() {
    this.initializeYears()
    await this.loadInitialData()
    await this.applyFilters()
  },
  
  methods: {
    initializeYears() {
      const currentYear = new Date().getFullYear()
      for (let i = currentYear; i >= currentYear - 5; i--) {
        this.years.push(i)
      }
    },
    
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
        this.$toast.error('Error loading data')
      }
    },
    
    async applyFilters() {
      this.loading = true
      try {
        const monthStart = `${this.filters.year}-${String(this.filters.month).padStart(2, '0')}-01`
        const lastDay = new Date(this.filters.year, this.filters.month, 0).getDate()
        const monthEnd = `${this.filters.year}-${String(this.filters.month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`
        
        const params = new URLSearchParams({
          monthStart,
          monthEnd
        })
        
        if (this.filters.ministryId) params.append('ministryId', this.filters.ministryId)
        if (this.filters.currencyId) params.append('currencyId', this.filters.currencyId)
        
        const response = await this.$axios.get(`/api/money-advances/report/balance-report?${params}`)
        
        if (response.data.success) {
          this.reportData = response.data.data || []
          this.calculateCurrencySummaries()
        }
      } catch (error) {
        console.error('Error loading report:', error)
        this.$toast.error('Error loading report')
      } finally {
        this.loading = false
      }
    },
    async validateReport() {
      this.loading = true
      try {
        const monthStart = `${this.filters.year}-${String(this.filters.month).padStart(2, '0')}-01`
        const lastDay = new Date(this.filters.year, this.filters.month, 0).getDate()
        const monthEnd = `${this.filters.year}-${String(this.filters.month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`
        
        const params = new URLSearchParams({
          monthStart,
          monthEnd
        })
        
        if (this.filters.ministryId) params.append('ministryId', this.filters.ministryId)
        if (this.filters.currencyId) params.append('currencyId', this.filters.currencyId)
        
        const response = await this.$axios.get(`/api/money-advances/report/validate-balance-continuity?year=2024&month=12`)
        
        if (response.data.success) {
          this.reportData = response.data.data || []
          this.calculateCurrencySummaries()
        }
      } catch (error) {
        console.error('Error loading report:', error)
        this.$toast.error('Error loading report')
      } finally {
        this.loading = false
      }
    },
    
    calculateCurrencySummaries() {
      const summaryMap = new Map()
      
      // Use reportDataWithBalance to get calculated endingBalance
      this.reportDataWithBalance.forEach(item => {
        const key = item.currencyCode
        if (!summaryMap.has(key)) {
          summaryMap.set(key, {
            currencyCode: item.currencyCode,
            currencyName: item.currencyName,
            balanceForward: 0,
            newAdvances: 0,
            newSettlements: 0,
            endingBalance: 0
          })
        }
        
        const summary = summaryMap.get(key)
        summary.balanceForward += parseFloat(item.balanceForward || 0)
        summary.newAdvances += parseFloat(item.newAdvances || 0)
        summary.newSettlements += parseFloat(item.newSettlements || 0)
        summary.endingBalance += parseFloat(item.endingBalance || 0)
      })
      
      this.currencySummaries = Array.from(summaryMap.values())
    },
    
    resetFilters() {
      this.filters = {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        ministryId: '',
        currencyId: ''
      }
      this.applyFilters()
    },
    
    formatAmount(amount) {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount)
    },
    
    formatPeriod() {
      const monthName = this.months.find(m => m.value === this.filters.month)?.text
      return `${monthName} ${this.filters.year}`
    },
    
    getBalanceClass(balance) {
      const amount = parseFloat(balance || 0)
      if (amount > 0) return 'positive'
      if (amount < 0) return 'negative'
      return 'zero'
    },
    
    viewDetails(item) {
      this.selectedItem = item
      this.detailsDialog = true
    },
    
    viewTransactions(item) {
      // Implement transaction view
      console.log('View transactions for:', item)
    },
    
    exportToExcel() {
      if (!this.reportDataWithBalance.length) {
        this.$toast.warning('No data to export')
        return
      }
      
      const exportData = this.reportDataWithBalance.map((item, index) => ({
        'No': index + 1,
        'Ministry Code': item.ministryCode,
        'Ministry Name': item.ministryName,
        'Currency': item.currencyCode,
        'Brought Forward': item.balanceForward,
        'New Advances': item.newAdvances,
        'Settlements': item.newSettlements,
        'Ending Balance': item.endingBalance
      }))
      
      const headers = Object.keys(exportData[0])
      const csvContent = [
        headers.join(','),
        ...exportData.map(row =>
          headers.map(header => `"${(row[header] || '').toString().replace(/"/g, '""')}"`).join(',')
        )
      ].join('\n')
      
      const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `balance-report-${this.formatPeriod().replace(' ', '-')}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      
      this.$toast.success('Export successful')
    },
    
    printReport() {
      window.print()
    }
  }
}
</script>

<style scoped>
.balance-report {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e9ecef;
}

.header h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 24px;
  font-weight: 600;
}

.header small {
  color: #6c757d;
  font-size: 14px;
}

.header-actions {
  display: flex;
  gap: 10px;
}

/* Buttons */
button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-export {
  background: #28a745;
  color: white;
}

.btn-export:hover {
  background: #218838;
}

.btn-print {
  background: #6c757d;
  color: white;
}

.btn-print:hover {
  background: #545b62;
}

.btn-reset {
  background: #007bff;
  color: white;
  padding: 6px 12px;
}

.btn-reset:hover {
  background: #0056b3;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
  margin: 0 2px;
  background: #f8f9fa;
  color: #495057;
}

.btn-sm:hover {
  background: #e9ecef;
}

.btn-close {
  background: #dc3545;
  color: white;
  padding: 6px 10px;
  border-radius: 50%;
}

/* Filters */
.filters {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  align-items: center;
  flex-wrap: wrap;
}

select, input {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  background: white;
}

select:focus, input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* Summary Cards */
.summary-cards {
  margin-bottom: 30px;
}

.summary-cards h3 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 600;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.summary-card {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
}

.currency {
  font-size: 18px;
  font-weight: 700;
  color: #007bff;
}

.total {
  font-size: 20px;
  font-weight: 700;
  font-family: monospace;
  color: #2c3e50;
}

.card-details .detail {
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  font-size: 14px;
}

.card-details .detail span:last-child {
  font-family: monospace;
  font-weight: 600;
}

/* Table */
.table-container {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.table-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
}

.search-input {
  width: 250px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  background: #2c3e50;
  color: white;
  padding: 12px 8px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
}

.data-table td {
  padding: 12px 8px;
  border-bottom: 1px solid #e9ecef;
  font-size: 14px;
}

.data-table tr:hover {
  background: #f8f9fa;
}

.ministry-cell strong {
  display: block;
  color: #2c3e50;
  font-size: 13px;
}

.ministry-cell small {
  color: #6c757d;
  font-size: 12px;
}

.currency-badge {
  background: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.amount {
  text-align: right;
  font-family: monospace;
  font-weight: 600;
}

.advance {
  color: #28a745;
}

.settlement {
  color: #dc3545;
}

.ending {
  font-size: 15px;
}

.positive {
  color: #28a745;
}

.negative {
  color: #dc3545;
}

.zero {
  color: #6c757d;
}

.total-row td {
  background: #f8f9fa;
  font-weight: 600;
  border-top: 2px solid #2c3e50;
}

/* Loading */
.loading {
  text-align: center;
  padding: 40px;
  color: #6c757d;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
}

.modal-header h3 {
  margin: 0;
  color: #2c3e50;
}

.modal-body {
  padding: 20px;
}

.detail-grid {
  display: grid;
  gap: 15px;
  margin-bottom: 25px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f8f9fa;
}

.detail-item label {
  font-weight: 600;
  color: #495057;
}

.detail-item span {
  font-family: monospace;
}

.calculation {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
}

.calculation h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.calc-formula {
  font-family: monospace;
  font-size: 16px;
  font-weight: 600;
  color: #495057;
}

/* Responsive */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .filters {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  .table-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .search-input {
    width: 100%;
  }
  
  .data-table {
    font-size: 13px;
  }
  
  .data-table th,
  .data-table td {
    padding: 8px 4px;
  }
}

@media print {
  .header-actions,
  .filters,
  .btn-sm {
    display: none !important;
  }
}
</style>