<template>
  <div class="settlement-report-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">Settlement Report & Analytics</h1>
        <div class="header-actions">
          <button class="btn btn-secondary" @click="refreshData">
            <i class="fas fa-sync-alt"></i>
            Refresh
          </button>
          <button class="btn btn-success" @click="exportReport">
            <i class="fas fa-file-excel"></i>
            Export Report
          </button>
          <button class="btn btn-primary" @click="printReport">
            <i class="fas fa-print"></i>
            Print Report
          </button>
        </div>
      </div>
    </div>

    <!-- Report Filters -->
    <div class="filter-section">
      <div class="filter-row">
        <div class="filter-group">
          <label>Report Period:</label>
          <select v-model="reportPeriod" @change="updateDateRange" class="form-control">
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
        
        <div class="filter-group" v-if="reportPeriod === 'custom'">
          <label>From Date:</label>
          <input type="date" v-model="customDateRange.start" class="form-control">
        </div>
        
        <div class="filter-group" v-if="reportPeriod === 'custom'">
          <label>To Date:</label>
          <input type="date" v-model="customDateRange.end" class="form-control">
        </div>



        <div class="filter-actions">
          <button class="btn btn-outline-primary" @click="generateReport">
            <i class="fas fa-chart-bar"></i>
            Generate Report
          </button>
        </div>
      </div>
    </div>

    <!-- Key Metrics Dashboard -->
    <div class="metrics-dashboard">
      <div class="metric-card outstanding">
        <div class="metric-icon">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <div class="metric-content">
          <h3>{{ formatCurrency(metrics.totalOutstanding) }}</h3>
          <p>Total Outstanding</p>
          <span class="metric-subtitle">{{ metrics.outstandingCount }} advances</span>
        </div>
        <div class="metric-trend" :class="metrics.outstandingTrend.direction">
          <i :class="getTrendIcon(metrics.outstandingTrend.direction)"></i>
          <span>{{ metrics.outstandingTrend.percentage }}%</span>
        </div>
      </div>

      <div class="metric-card advances">
        <div class="metric-icon">
          <i class="fas fa-hand-holding-usd"></i>
        </div>
        <div class="metric-content">
          <h3>{{ formatCurrency(metrics.totalAdvances) }}</h3>
          <p>Total Advances</p>
          <span class="metric-subtitle">{{ metrics.advancesCount }} requests</span>
        </div>
        <div class="metric-trend" :class="metrics.advancesTrend.direction">
          <i :class="getTrendIcon(metrics.advancesTrend.direction)"></i>
          <span>{{ metrics.advancesTrend.percentage }}%</span>
        </div>
      </div>

      <div class="metric-card settled">
        <div class="metric-icon">
          <i class="fas fa-check-double"></i>
        </div>
        <div class="metric-content">
          <h3>{{ formatCurrency(metrics.totalSettled) }}</h3>
          <p>Total Settled</p>
          <span class="metric-subtitle">{{ metrics.settledCount }} completed</span>
        </div>
        <div class="metric-trend" :class="metrics.settledTrend.direction">
          <i :class="getTrendIcon(metrics.settledTrend.direction)"></i>
          <span>{{ metrics.settledTrend.percentage }}%</span>
        </div>
      </div>

      <div class="metric-card efficiency">
        <div class="metric-icon">
          <i class="fas fa-tachometer-alt"></i>
        </div>
        <div class="metric-content">
          <h3>{{ metrics.averageSettlementDays }}</h3>
          <p>Avg Settlement Days</p>
          <span class="metric-subtitle">Processing time</span>
        </div>
        <div class="metric-trend" :class="metrics.efficiencyTrend.direction">
          <i :class="getTrendIcon(metrics.efficiencyTrend.direction)"></i>
          <span>{{ metrics.efficiencyTrend.percentage }}%</span>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="charts-section">
      <div class="chart-container">
        <div class="chart-header">
          <h3>Settlement Trend Analysis</h3>
          <div class="chart-controls">
            <button 
              v-for="period in ['7d', '30d', '90d']" 
              :key="period"
              class="btn btn-sm"
              :class="chartPeriod === period ? 'btn-primary' : 'btn-outline-secondary'"
              @click="updateChartPeriod(period)"
            >
              {{ period }}
            </button>
          </div>
        </div>
        <div class="chart-content">
          <!-- Chart placeholder - you can integrate with Chart.js or similar -->
          <div class="chart-placeholder">
            <i class="fas fa-chart-line"></i>
            <p>Settlement trends over {{ chartPeriod }}</p>
          </div>
        </div>
      </div>

      <div class="chart-container">
        <div class="chart-header">
          <h3>Monthly Trend Analysis</h3>
        </div>
        <div class="chart-content">
          <div class="trend-summary">
            <div class="trend-item">
              <span class="trend-label">This Month:</span>
              <span class="trend-value">{{ formatCurrency(metrics.totalAdvances) }}</span>
            </div>
            <div class="trend-item">
              <span class="trend-label">Outstanding:</span>
              <span class="trend-value outstanding">{{ formatCurrency(metrics.totalOutstanding) }}</span>
            </div>
            <div class="trend-item">
              <span class="trend-label">Settled:</span>
              <span class="trend-value settled">{{ formatCurrency(metrics.totalSettled) }}</span>
            </div>
            <div class="trend-item">
              <span class="trend-label">Settlement Rate:</span>
              <span class="trend-value">{{ statistics.settlementRate }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Advance Listing -->
    <div class="detailed-listing">
      <div class="listing-header">
        <h3>Detailed Advance Listing</h3>
        <div class="listing-controls">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search advances..."
              class="form-control"
            >
          </div>
          <select v-model="statusFilter" class="form-control">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="outstanding">Outstanding</option>
            <option value="settled">Settled</option>
          </select>
        </div>
      </div>

      <!-- Outstanding Alerts -->
      <div v-if="overdueAdvances.length > 0" class="alert-section">
        <div class="alert alert-warning">
          <i class="fas fa-exclamation-triangle"></i>
          <strong>{{ overdueAdvances.length }} Overdue Advances</strong> - 
          Total amount: {{ formatCurrency(overdueTotal) }}
          <button class="btn btn-sm btn-outline-warning ml-2" @click="showOverdueDetails = !showOverdueDetails">
            {{ showOverdueDetails ? 'Hide' : 'Show' }} Details
          </button>
        </div>
        
        <div v-if="showOverdueDetails" class="overdue-details">
          <div v-for="advance in overdueAdvances" :key="advance.id" class="overdue-item">
            <span class="employee-name">{{ advance.employeeName }}</span>
            <span class="advance-amount">{{ formatCurrency(advance.amount) }}</span>
            <span class="days-overdue">{{ advance.daysOverdue }} days overdue</span>
            <button class="btn btn-sm btn-warning" @click="sendReminder(advance)">
              Send Reminder
            </button>
          </div>
        </div>
      </div>

      <!-- Advances Table -->
      <div class="table-container">
        <table class="advances-table">
          <thead>
            <tr>
              <th @click="sortBy('id')" class="sortable">
                Advance ID
                <i :class="getSortIcon('id')"></i>
              </th>
              <th @click="sortBy('employeeName')" class="sortable">
                Employee
                <i :class="getSortIcon('employeeName')"></i>
              </th>
              <th @click="sortBy('requestDate')" class="sortable">
                Request Date
                <i :class="getSortIcon('requestDate')"></i>
              </th>
              <th @click="sortBy('amount')" class="sortable">
                Amount
                <i :class="getSortIcon('amount')"></i>
              </th>
              <th @click="sortBy('outstanding')" class="sortable">
                Outstanding
                <i :class="getSortIcon('outstanding')"></i>
              </th>
              <th @click="sortBy('status')" class="sortable">
                Status
                <i :class="getSortIcon('status')"></i>
              </th>
              <th>Days Pending</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="advance in paginatedAdvances" :key="advance.id">
              <td>{{ advance.id }}</td>
              <td>
                <div class="employee-info">
                  <strong>{{ advance.employeeName }}</strong>
                  <small>{{ advance.employeeId }}</small>
                </div>
              </td>
              <td>{{ formatDate(advance.requestDate) }}</td>
              <td class="amount-cell">{{ formatCurrency(advance.amount) }}</td>
              <td class="outstanding-cell" :class="advance.outstanding > 0 ? 'has-outstanding' : ''">
                {{ formatCurrency(advance.outstanding) }}
              </td>
              <td>
                <span :class="['status-badge', advance.status]">
                  {{ advance.status }}
                </span>
              </td>
              <td class="days-cell" :class="getDaysClass(advance.daysPending)">
                {{ advance.daysPending }} days
              </td>
              <td class="actions-cell">
                <button 
                  class="btn btn-sm btn-outline-primary"
                  @click="viewAdvanceDetails(advance)"
                  title="View Details"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button 
                  v-if="advance.status === 'outstanding'"
                  class="btn btn-sm btn-outline-warning"
                  @click="sendReminder(advance)"
                  title="Send Reminder"
                >
                  <i class="fas fa-bell"></i>
                </button>
                <button 
                  v-if="advance.status === 'approved'"
                  class="btn btn-sm btn-outline-success"
                  @click="markAsSettled(advance)"
                  title="Mark as Settled"
                >
                  <i class="fas fa-check"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination-container">
        <div class="pagination-info">
          Showing {{ paginationInfo.start }} to {{ paginationInfo.end }} of {{ filteredAdvances.length }} advances
        </div>
        <div class="pagination-controls">
          <button 
            class="btn btn-sm btn-outline-secondary"
            @click="previousPage"
            :disabled="currentPage === 1"
          >
            Previous
          </button>
          
          <span v-for="page in visiblePages" :key="page">
            <button 
              v-if="page !== '...'"
              class="btn btn-sm"
              :class="page === currentPage ? 'btn-primary' : 'btn-outline-secondary'"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
            <span v-else class="pagination-ellipsis">...</span>
          </span>
          
          <button 
            class="btn btn-sm btn-outline-secondary"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Summary Statistics -->
    <div class="summary-statistics">
      <div class="stat-group">
        <h4>Payment Statistics</h4>
        <div class="stat-items">
          <div class="stat-item">
            <span class="stat-label">Average Advance Amount:</span>
            <span class="stat-value">{{ formatCurrency(statistics.avgAdvanceAmount) }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Largest Outstanding:</span>
            <span class="stat-value">{{ formatCurrency(statistics.largestOutstanding) }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Settlement Rate:</span>
            <span class="stat-value">{{ statistics.settlementRate }}%</span>
          </div>
        </div>
      </div>

      <div class="stat-group">
        <h4>Performance Metrics</h4>
        <div class="stat-items">
          <div class="stat-item">
            <span class="stat-label">Average Processing Time:</span>
            <span class="stat-value">{{ statistics.avgProcessingTime }} days</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">On-time Settlement Rate:</span>
            <span class="stat-value">{{ statistics.onTimeRate }}%</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Total Employees with Advances:</span>
            <span class="stat-value">{{ statistics.totalEmployees }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Overlay -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Generating Report...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettlementReport',
  data() {
    return {
      loading: false,
      reportPeriod: 'month',
      customDateRange: {
        start: '',
        end: ''
      },
      selectedDepartment: '',
      searchQuery: '',
      statusFilter: '',
      chartPeriod: '30d',
      showOverdueDetails: false,
      currentPage: 1,
      itemsPerPage: 25,
      
      // Sorting
      sort: {
        field: 'requestDate',
        direction: 'desc'
      },

      // Data
      advances: [],

      // Metrics
      metrics: {
        totalOutstanding: 0,
        outstandingCount: 0,
        totalAdvances: 0,
        advancesCount: 0,
        totalSettled: 0,
        settledCount: 0,
        averageSettlementDays: 0,
        outstandingTrend: { direction: 'up', percentage: 12 },
        advancesTrend: { direction: 'up', percentage: 8 },
        settledTrend: { direction: 'down', percentage: 5 },
        efficiencyTrend: { direction: 'down', percentage: 3 }
      },

      // Statistics
      statistics: {
        avgAdvanceAmount: 0,
        largestOutstanding: 0,
        settlementRate: 0,
        avgProcessingTime: 0,
        onTimeRate: 0,
        totalEmployees: 0
      },

      // Department breakdown - removed since no department grouping
      // departmentStats: []
    }
  },

  computed: {
    filteredAdvances() {
      let filtered = [...this.advances]

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(advance => 
          advance.employeeName.toLowerCase().includes(query) ||
          advance.id.toString().includes(query)
        )
      }

      // Status filter
      if (this.statusFilter) {
        filtered = filtered.filter(advance => advance.status === this.statusFilter)
      }

      return this.sortAdvances(filtered)
    },

    paginatedAdvances() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredAdvances.slice(start, end)
    },

    totalPages() {
      return Math.ceil(this.filteredAdvances.length / this.itemsPerPage)
    },

    paginationInfo() {
      const start = (this.currentPage - 1) * this.itemsPerPage + 1
      const end = Math.min(start + this.itemsPerPage - 1, this.filteredAdvances.length)
      return { start, end, total: this.filteredAdvances.length }
    },

    visiblePages() {
      const pages = []
      const current = this.currentPage
      const total = this.totalPages
      
      if (total <= 7) {
        for (let i = 1; i <= total; i++) {
          pages.push(i)
        }
      } else {
        if (current <= 4) {
          for (let i = 1; i <= 5; i++) pages.push(i)
          pages.push('...')
          pages.push(total)
        } else if (current >= total - 3) {
          pages.push(1)
          pages.push('...')
          for (let i = total - 4; i <= total; i++) pages.push(i)
        } else {
          pages.push(1)
          pages.push('...')
          for (let i = current - 1; i <= current + 1; i++) pages.push(i)
          pages.push('...')
          pages.push(total)
        }
      }
      
      return pages
    },

    overdueAdvances() {
      return this.advances.filter(advance => 
        advance.status === 'outstanding' && advance.daysPending > 30
      )
    },

    overdueTotal() {
      return this.overdueAdvances.reduce((sum, advance) => sum + advance.outstanding, 0)
    }
  },

  mounted() {
    this.initializeReport()
  },

  methods: {
    async initializeReport() {
      this.loading = true
      try {
        await Promise.all([
          this.fetchAdvances(),
          this.calculateMetrics(),
          this.calculateStatistics()
        ])
      } catch (error) {
        console.error('Error initializing report:', error)
        this.showToast('Error loading report data', 'error')
      } finally {
        this.loading = false
      }
    },

    async fetchAdvances() {
      try {
        const response = await this.$axios.get('/api/money-advances/report', {
          params: {
            period: this.reportPeriod,
            startDate: this.customDateRange.start,
            endDate: this.customDateRange.end
          }
        })
        this.advances = Array.isArray(response.data.data) ? response.data.data : []
      } catch (error) {
        console.error('Error fetching advances:', error)
        this.advances = []
      }
    },

    calculateMetrics() {
      if (!Array.isArray(this.advances)) return

      const metrics = {
        totalOutstanding: 0,
        outstandingCount: 0,
        totalAdvances: 0,
        advancesCount: this.advances.length,
        totalSettled: 0,
        settledCount: 0,
        averageSettlementDays: 0
      }

      let totalDays = 0
      let settledCount = 0

      this.advances.forEach(advance => {
        metrics.totalAdvances += advance.amount
        
        if (advance.status === 'outstanding') {
          metrics.totalOutstanding += advance.outstanding
          metrics.outstandingCount++
        }
        
        if (advance.status === 'settled') {
          metrics.totalSettled += advance.amount
          metrics.settledCount++
          totalDays += advance.settlementDays || 0
          settledCount++
        }
      })

      if (settledCount > 0) {
        metrics.averageSettlementDays = Math.round(totalDays / settledCount)
      }

      this.metrics = { ...this.metrics, ...metrics }
    },

    calculateStatistics() {
      if (!Array.isArray(this.advances) || this.advances.length === 0) return

      const stats = {
        avgAdvanceAmount: this.advances.reduce((sum, a) => sum + a.amount, 0) / this.advances.length,
        largestOutstanding: Math.max(...this.advances.map(a => a.outstanding || 0)),
        settlementRate: (this.advances.filter(a => a.status === 'settled').length / this.advances.length) * 100,
        avgProcessingTime: this.advances.reduce((sum, a) => sum + (a.daysPending || 0), 0) / this.advances.length,
        onTimeRate: (this.advances.filter(a => (a.daysPending || 0) <= 30).length / this.advances.length) * 100,
        totalEmployees: new Set(this.advances.map(a => a.employeeId)).size
      }

      this.statistics = {
        avgAdvanceAmount: Math.round(stats.avgAdvanceAmount),
        largestOutstanding: stats.largestOutstanding,
        settlementRate: Math.round(stats.settlementRate),
        avgProcessingTime: Math.round(stats.avgProcessingTime),
        onTimeRate: Math.round(stats.onTimeRate),
        totalEmployees: stats.totalEmployees
      }
    },

    sortAdvances(advances) {
      return advances.sort((a, b) => {
        let aVal = a[this.sort.field]
        let bVal = b[this.sort.field]
        
        if (typeof aVal === 'string') {
          aVal = aVal.toLowerCase()
          bVal = bVal.toLowerCase()
        }
        
        if (aVal < bVal) return this.sort.direction === 'asc' ? -1 : 1
        if (aVal > bVal) return this.sort.direction === 'asc' ? 1 : -1
        return 0
      })
    },

    // Event handlers
    updateDateRange() {
      const today = new Date()
      const ranges = {
        today: { start: today, end: today },
        week: { start: new Date(today.setDate(today.getDate() - 7)), end: new Date() },
        month: { start: new Date(today.getFullYear(), today.getMonth(), 1), end: new Date() },
        quarter: { start: new Date(today.getFullYear(), Math.floor(today.getMonth() / 3) * 3, 1), end: new Date() },
        year: { start: new Date(today.getFullYear(), 0, 1), end: new Date() }
      }
      
      if (ranges[this.reportPeriod]) {
        this.customDateRange.start = this.formatDateForInput(ranges[this.reportPeriod].start)
        this.customDateRange.end = this.formatDateForInput(ranges[this.reportPeriod].end)
      }
    },

    async generateReport() {
      await this.initializeReport()
    },

    async refreshData() {
      await this.initializeReport()
      this.showToast('Report data refreshed', 'success')
    },

    updateChartPeriod(period) {
      this.chartPeriod = period
      // Update chart data based on period
    },

    sortBy(field) {
      if (this.sort.field === field) {
        this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc'
      } else {
        this.sort.field = field
        this.sort.direction = 'asc'
      }
    },

    getSortIcon(field) {
      if (this.sort.field !== field) return 'fas fa-sort'
      return this.sort.direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down'
    },

    getTrendIcon(direction) {
      return direction === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'
    },

    getDaysClass(days) {
      if (days > 60) return 'critical'
      if (days > 30) return 'warning'
      if (days > 14) return 'caution'
      return 'normal'
    },

    // Navigation methods
    previousPage() {
      if (this.currentPage > 1) this.currentPage--
    },

    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++
    },

    goToPage(page) {
      this.currentPage = page
    },

    // Action methods
    viewAdvanceDetails(advance) {
      this.$router.push(`/advances/${advance.id}`)
    },

    async sendReminder(advance) {
      try {
        await this.$axios.post(`/api/advances/${advance.id}/reminder`)
        this.showToast('Reminder sent successfully', 'success')
      } catch (error) {
        console.error('Error sending reminder:', error)
        this.showToast('Error sending reminder', 'error')
      }
    },

    async markAsSettled(advance) {
      const result = await this.swalConfirm(
        Swal,
        'Mark as Settled',
        `Mark advance ${advance.id} as settled?`,
        'question',
        'ບໍ່',
        'ຕົກລົງ'
      )
      
      if (result.isConfirmed) {
        try {
          await this.$axios.put(`/api/advances/${advance.id}/settle`)
          this.showToast('Advance marked as settled', 'success')
          await this.fetchAdvances()
          this.calculateMetrics()
          this.calculateStatistics()
        } catch (error) {
          console.error('Error settling advance:', error)
          this.showToast('Error settling advance', 'error')
        }
      }
    },

    exportReport() {
      const csvData = this.convertReportToCSV()
      this.downloadCSV(csvData, `settlement-report-${new Date().toISOString().split('T')[0]}.csv`)
    },

    printReport() {
      window.print()
    },

    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LAK'
      }).format(amount || 0)
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },

    formatDateForInput(date) {
      return date.toISOString().split('T')[0]
    },

    convertReportToCSV() {
      const headers = [
        'Advance ID', 'Employee', 'Request Date', 
        'Amount', 'Outstanding', 'Status', 'Days Pending'
      ]
      
      const csvContent = [
        headers.join(','),
        ...this.filteredAdvances.map(advance => [
          advance.id,
          advance.employeeName,
          advance.requestDate,
          advance.amount,
          advance.outstanding,
          advance.status,
          advance.daysPending
        ].join(','))
      ].join('\n')
      
      return csvContent
    },

    downloadCSV(csvContent, filename) {
      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.click()
      window.URL.revokeObjectURL(url)
    },

    showToast(message, type = 'info') {
      // Implementation depends on your toast library
      console.log(`${type}: ${message}`)
    }
  }
}
</script>

<style scoped>
.settlement-report-container {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* Header Styles */
.page-header {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  margin: 0;
  color: #333;
  font-size: 28px;
  font-weight: 600;
}

.header-actions {
  display: flex;
  gap: 12px;
}

/* Filter Styles */
.filter-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.filter-row {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-group label {
  font-weight: 500;
  color: #555;
  font-size: 14px;
}

.filter-actions {
  display: flex;
  gap: 8px;
  align-self: flex-end;
}

/* Metrics Dashboard */
.metrics-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.metric-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #007bff, #0056b3);
}

.metric-card.outstanding::before {
  background: linear-gradient(90deg, #dc3545, #c82333);
}

.metric-card.advances::before {
  background: linear-gradient(90deg, #28a745, #1e7e34);
}

.metric-card.settled::before {
  background: linear-gradient(90deg, #17a2b8, #138496);
}

.metric-card.efficiency::before {
  background: linear-gradient(90deg, #ffc107, #e0a800);
}

.metric-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 20px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  color: #495057;
}

.metric-content {
  flex: 1;
}

.metric-content h3 {
  margin: 0 0 4px 0;
  font-size: 28px;
  font-weight: 700;
  color: #333;
}

.metric-content p {
  margin: 0 0 4px 0;
  color: #666;
  font-size: 16px;
  font-weight: 500;
}

.metric-subtitle {
  color: #999;
  font-size: 12px;
}

.metric-trend {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.metric-trend.up {
  background: #d4edda;
  color: #155724;
}

.metric-trend.down {
  background: #f8d7da;
  color: #721c24;
}

.metric-trend i {
  margin-bottom: 2px;
}

/* Charts Section */
.charts-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.chart-container {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
}

.chart-header h3 {
  margin: 0;
  color: #333;
  font-size: 18px;
}

.chart-controls {
  display: flex;
  gap: 8px;
}

.chart-content {
  height: 300px;
}

.chart-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  background: #f8f9fa;
  border: 2px dashed #dee2e6;
  border-radius: 6px;
}

.chart-placeholder i {
  font-size: 48px;
  margin-bottom: 15px;
  opacity: 0.5;
}

/* Trend Summary */
.trend-summary {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
}

.trend-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #007bff;
}

.trend-label {
  font-weight: 500;
  color: #666;
}

.trend-value {
  font-weight: 600;
  color: #333;
  font-size: 16px;
}

.trend-value.outstanding {
  color: #dc3545;
}

.trend-value.settled {
  color: #28a745;
}

/* Department Breakdown - Remove since not using departments */


/* Detailed Listing */
.detailed-listing {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.listing-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.listing-header h3 {
  margin: 0;
  color: #333;
}

.listing-controls {
  display: flex;
  gap: 15px;
  align-items: center;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-box i {
  position: absolute;
  left: 12px;
  color: #666;
  z-index: 1;
}

.search-box input {
  padding-left: 35px;
  min-width: 250px;
}

/* Alert Section */
.alert-section {
  margin: 20px;
}

.alert {
  padding: 15px 20px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.alert-warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

.alert i {
  font-size: 18px;
}

.overdue-details {
  margin-top: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
}

.overdue-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #dee2e6;
}

.overdue-item:last-child {
  border-bottom: none;
}

.employee-name {
  font-weight: 500;
  color: #333;
}

.advance-amount {
  color: #dc3545;
  font-weight: 600;
}

.days-overdue {
  color: #856404;
  font-size: 14px;
}

/* Table Styles */
.table-container {
  overflow-x: auto;
}

.advances-table {
  width: 100%;
  border-collapse: collapse;
}

.advances-table th,
.advances-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.advances-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
  position: sticky;
  top: 0;
  z-index: 10;
}

.advances-table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
}

.advances-table th.sortable:hover {
  background-color: #e9ecef;
}

.advances-table th i {
  margin-left: 8px;
  opacity: 0.5;
}

.employee-info {
  display: flex;
  flex-direction: column;
}

.employee-info strong {
  color: #333;
  font-size: 14px;
}

.employee-info small {
  color: #666;
  font-size: 12px;
}

.amount-cell {
  font-weight: 600;
  color: #28a745;
}

.outstanding-cell {
  font-weight: 600;
}

.outstanding-cell.has-outstanding {
  color: #dc3545;
}

.days-cell {
  font-weight: 500;
}

.days-cell.normal {
  color: #28a745;
}

.days-cell.caution {
  color: #ffc107;
}

.days-cell.warning {
  color: #fd7e14;
}

.days-cell.critical {
  color: #dc3545;
  background: #f8d7da;
  padding: 4px 8px;
  border-radius: 4px;
}

.actions-cell {
  display: flex;
  gap: 8px;
}

/* Status Badges */
.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
}

.status-badge.pending {
  background-color: #fff3cd;
  color: #856404;
}

.status-badge.approved {
  background-color: #d1ecf1;
  color: #0c5460;
}

.status-badge.outstanding {
  background-color: #f8d7da;
  color: #721c24;
}

.status-badge.settled {
  background-color: #d4edda;
  color: #155724;
}

/* Pagination */
.pagination-container {
  padding: 20px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination-info {
  color: #666;
  font-size: 14px;
}

.pagination-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.pagination-ellipsis {
  padding: 6px 12px;
  color: #666;
}

/* Summary Statistics */
.summary-statistics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-group {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.stat-group h4 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 18px;
  padding-bottom: 10px;
  border-bottom: 2px solid #007bff;
}

.stat-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f1f1f1;
}

.stat-item:last-child {
  border-bottom: none;
}

.stat-label {
  color: #666;
  font-weight: 500;
}

.stat-value {
  color: #333;
  font-weight: 600;
  font-size: 16px;
}

/* Button Styles */
.btn {
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
}

.btn-success {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
  background-color: transparent;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: white;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
  background-color: transparent;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  color: #212529;
}

.btn-warning {
  background-color: #ffc107;
  color: #212529;
  border-color: #ffc107;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

/* Form Controls */
.form-control {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loading-spinner {
  background: white;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
}

.loading-spinner i {
  font-size: 32px;
  color: #007bff;
  margin-bottom: 16px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .charts-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .settlement-report-container {
    padding: 10px;
  }
  
  .header-content {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  
  .filter-row {
    flex-direction: column;
    gap: 16px;
  }
  
  .filter-group {
    width: 100%;
  }
  
  .metrics-dashboard {
    grid-template-columns: 1fr;
  }
  
  .listing-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  
  .listing-controls {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
  
  .search-box input {
    min-width: 100%;
  }
  
  .summary-statistics {
    grid-template-columns: 1fr;
  }
  
  .actions-cell {
    flex-direction: column;
    gap: 4px;
  }
}

@media (max-width: 480px) {
  .metric-card {
    flex-direction: column;
    text-align: center;
  }
  
  .metric-icon {
    margin-right: 0;
    margin-bottom: 12px;
  }
  
  .advances-table {
    font-size: 12px;
  }
  
  .advances-table th,
  .advances-table td {
    padding: 8px 4px;
  }
}

/* Print Styles */
@media print {
  .header-actions,
  .filter-section,
  .chart-controls,
  .actions-cell,
  .pagination-container {
    display: none !important;
  }
  
  .settlement-report-container {
    background: white;
    padding: 0;
  }
  
  .page-header,
  .detailed-listing,
  .summary-statistics {
    box-shadow: none;
    margin-bottom: 20px;
  }
}
</style>