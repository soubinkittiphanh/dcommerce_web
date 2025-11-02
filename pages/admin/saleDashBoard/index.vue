<template>
  <div class="dashboard-container">
    <!-- Header Section -->
    <div class="dashboard-header">
      <div class="header-content">
        <h1 class="dashboard-title">Business Dashboard</h1>
        
        <!-- Date Range Selector -->
        <div class="date-selector">
          <label class="date-label">
            <CalendarIcon class="icon" />
            Period:
          </label>
          
          <!-- Quick Select Dropdown -->
          <v-select
            v-model="selectedPeriod" 
            @change="handlePeriodChange"
            :items="periodOptions"
            label="Select Period"
            outlined
            dense
            style="min-width: 200px;"
          ></v-select>
          
          <!-- Custom Date Range Inputs with Vuetify -->
          <div v-if="selectedPeriod === 'custom' || selectedPeriod === 'between_dates'" class="date-range-container">
            <div class="vuetify-date-inputs">
              <!-- Start Date Picker -->
              <div class="date-picker-wrapper">
                <v-menu
                  v-model="startDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="startDateFormatted"
                      label="ຈາກວັນທີ: (From Date)"
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      @blur="customStartDate = parseDate(startDateFormatted)"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="customStartDate"
                    :max="customEndDate || today"
                    @input="startDateMenu = false; updateStartDateFormatted()"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
              </div>
              
              <!-- End Date Picker -->
              <div class="date-picker-wrapper">
                <v-menu
                  v-model="endDateMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="endDateFormatted"
                      label="ຫາວັນທີ: (To Date)"
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      outlined
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      @blur="customEndDate = parseDate(endDateFormatted)"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="customEndDate"
                    :min="customStartDate"
                    :max="today"
                    @input="endDateMenu = false; updateEndDateFormatted()"
                    no-title
                    scrollable
                  ></v-date-picker>
                </v-menu>
              </div>
              
              <!-- Action Buttons -->
              <div class="date-action-buttons">
                <v-btn 
                  @click="applyDateRange"
                  :disabled="!customStartDate || !customEndDate"
                  color="primary"
                  small
                  outlined
                >
                  <v-icon left small>mdi-check</v-icon>
                  Apply
                </v-btn>
                
                <v-btn 
                  @click="clearDateRange"
                  color="grey"
                  small
                  outlined
                >
                  <v-icon left small>mdi-close</v-icon>
                  Clear
                </v-btn>
              </div>
            </div>
            
            <!-- Quick Date Range Buttons -->
            <div class="quick-date-chips">
              <v-chip-group>
                <v-chip @click="setQuickRange('last7days')" small outlined>Last 7 Days</v-chip>
                <v-chip @click="setQuickRange('last30days')" small outlined>Last 30 Days</v-chip>
                <v-chip @click="setQuickRange('last90days')" small outlined>Last 90 Days</v-chip>
                <v-chip @click="setQuickRange('thisyear')" small outlined>This Year</v-chip>
              </v-chip-group>
            </div>
          </div>
          
          <!-- Date Range Display -->
          <div v-if="dateRangeDisplay" class="date-range-display">
            <v-alert
              dense
              outlined
              type="info"
              class="ma-0"
            >
              <span class="range-text">{{ dateRangeDisplay }}</span>
            </v-alert>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading dashboard data...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <p class="error-message">{{ error }}</p>
      <button @click="loadDashboardData" class="retry-button">Retry</button>
    </div>

    <!-- Dashboard Content -->
    <div v-else-if="dashboardData" class="dashboard-content">
      
      <!-- Key Metrics Cards -->
      <div class="metrics-grid">
        <MetricCard
          title="Total Revenue"
          :value="formatCurrency(dashboardData.financial.totalRevenue)"
          :subtitle="`${dashboardData.financial.totalOrders} orders`"
          icon="dollar-sign"
          color="#3B82F6"
          :trend="comparisonData?.revenue"
        />
        
        <MetricCard
          title="Average Order Value"
          :value="formatCurrency(dashboardData.financial.averageOrderValue)"
          subtitle="Per order"
          icon="shopping-cart"
          color="#10B981"
          :trend="comparisonData?.avgOrderValue"
        />
        
        <MetricCard
          title="Pending Payments"
          :value="formatCurrency(dashboardData.financial.pendingPayments)"
          :subtitle="`${dashboardData.orders.byPaymentStatus.pending} orders`"
          icon="alert-triangle"
          color="#F59E0B"
          :alert="dashboardData.financial.pendingPayments > 0"
        />
        
        <MetricCard
          title="Profit Margin"
          :value="`${dashboardData.financial.profitMargin.toFixed(1)}%`"
          :subtitle="formatCurrency(dashboardData.financial.totalProfit)"
          icon="trending-up"
          color="#8B5CF6"
          :trend="comparisonData?.profitMargin"
        />
      </div>

      <!-- Charts Section -->
      <div class="charts-section">
        <!-- Revenue Chart -->
        <div class="chart-container revenue-chart">
          <h3 class="chart-title">Revenue Trends</h3>
          <client-only>
            <apexchart
              type="line"
              height="350"
              :options="revenueChartOptions"
              :series="revenueChartSeries"
            />
          </client-only>
        </div>

        <!-- Order Status Chart -->
        <div class="chart-container order-status-chart">
          <h3 class="chart-title">Order Status Distribution</h3>
          <client-only>
            <apexchart
              type="donut"
              height="350"
              :options="orderStatusChartOptions"
              :series="orderStatusChartSeries"
            />
          </client-only>
        </div>
      </div>

      <!-- Analytics Grid -->
      <div class="analytics-grid">
        <!-- Top Products -->
        <div class="analytics-card">
          <h3 class="card-title">Top Performing Products</h3>
          <div class="products-list">
            <div 
              v-for="product in dashboardData.products.topRevenue.slice(0, 5)" 
              :key="product.id"
              class="product-item"
            >
              <div class="product-info">
                <h4 class="product-name">{{ product.name }}</h4>
                <p class="product-details">
                  Qty: {{ product.totalQuantity }} | 
                  Profit: {{ formatCurrency(product.totalProfit) }}
                </p>
              </div>
              <div class="product-revenue">
                {{ formatCurrency(product.totalRevenue) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Category Performance Chart -->
        <div class="analytics-card">
          <h3 class="card-title">Category Performance</h3>
          <client-only>
            <apexchart
              type="bar"
              height="300"
              :options="categoryChartOptions"
              :series="categoryChartSeries"
            />
          </client-only>
        </div>

        <!-- Alerts Panel -->
        <div class="analytics-card alerts-panel" v-if="1==0">
          <h3 class="card-title">Alerts & Notifications</h3>
          <div v-if="dashboardData.alerts.length === 0" class="no-alerts">
            <CheckCircleIcon class="success-icon" />
            <p>All systems running smoothly!</p>
          </div>
          <div v-else class="alerts-list">
            <div 
              v-for="alert in dashboardData.alerts" 
              :key="alert.timestamp"
              :class="['alert-item', `alert-${alert.type}`]"
            >
              <AlertTriangleIcon class="alert-icon" />
              <div class="alert-content">
                <p class="alert-message">{{ alert.message }}</p>
                <span class="alert-time">{{ formatRelativeTime(alert.timestamp) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Hourly Sales Pattern -->
        <div class="analytics-card">
          <h3 class="card-title">Hourly Sales Pattern</h3>
          <client-only>
            <apexchart
              type="area"
              height="300"
              :options="hourlyChartOptions"
              :series="hourlyChartSeries"
            />
          </client-only>
        </div>
      </div>

      <!-- Recent Orders Table -->
      <div class="recent-orders-section">
        <h3 class="section-title">Recent Orders</h3>
        <div class="table-container">
          <table class="orders-table">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Status</th>
                <th>Items</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Time</th>
                <th>Staff</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in recentOrders" :key="order.id">
                <td class="order-number">{{ order.ticketNumber }}</td>
                <td>
                  <span :class="['status-badge', `status-${order.status}`]">
                    {{ order.status }}
                  </span>
                </td>
                <td class="order-items">
                  {{ getOrderItemsSummary(order.ticketLines) }}
                </td>
                <td class="order-total">{{ formatCurrency(order.total) }}</td>
                <td>
                  <span :class="['payment-badge', `payment-${order.paymentStatus}`]">
                    {{ order.paymentStatus }}
                  </span>
                </td>
                <td class="order-time">{{ formatTime(order.createdAt) }}</td>
                <td class="order-staff">{{ order.createUser?.cus_name || 'N/A' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetricCard from '~/components/dashboard/MetricCard.vue'
import { CalendarIcon, AlertTriangleIcon, CheckCircleIcon } from 'vue-feather-icons'

export default {
  name: 'Dashboard',
  components: {
    MetricCard,
    CalendarIcon,
    AlertTriangleIcon,
    CheckCircleIcon
  },
  
  data() {
    return {
      selectedPeriod: 'current_month',
      customStartDate: '',
      customEndDate: '',
      startDateFormatted: '',
      endDateFormatted: '',
      startDateMenu: false,
      endDateMenu: false,
      today: new Date().toISOString().substr(0, 10), // Use simple substr for reliable today
      dashboardData: null,
      comparisonData: null,
      loading: false,
      error: null,
      recentOrders: [],
      realTimeInterval: null,
      dateRangeDisplay: '',
      periodOptions: [
        { text: 'Today', value: 'today' },
        { text: 'Yesterday', value: 'yesterday' },
        { text: 'This Week', value: 'this_week' },
        { text: 'Last Week', value: 'last_week' },
        { text: 'This Month', value: 'current_month' },
        { text: 'Last Month', value: 'last_month' },
        { text: 'Custom Range', value: 'custom' },
        { text: 'Between Dates', value: 'between_dates' }
      ]
    }
  },

  computed: {
    // Revenue Chart Configuration
    revenueChartOptions() {
      return {
        chart: {
          id: 'revenue-chart',
          toolbar: { show: false },
          zoom: { enabled: false }
        },
        colors: ['#3B82F6', '#10B981'],
        dataLabels: { enabled: false },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        xaxis: {
          categories: this.getChartCategories(),
          labels: {
            style: { colors: '#6B7280' }
          }
        },
        yaxis: {
          labels: {
            style: { colors: '#6B7280' },
            formatter: (value) => this.formatCurrency(value)
          }
        },
        grid: {
          borderColor: '#E5E7EB',
          strokeDashArray: 4
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right'
        },
        tooltip: {
          y: {
            formatter: (value) => this.formatCurrency(value)
          }
        }
      }
    },

    revenueChartSeries() {
      return [
        {
          name: 'Revenue',
          data: this.getRevenueData()
        },
        {
          name: 'Profit',
          data: this.getProfitData()
        }
      ]
    },

    // Order Status Chart Configuration
    orderStatusChartOptions() {
      if (!this.dashboardData) return {}
      
      return {
        chart: {
          type: 'donut'
        },
        labels: ['Pending', 'Preparing', 'Completed', 'Cancelled'],
        colors: ['#F59E0B', '#3B82F6', '#10B981', '#EF4444'],
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          pie: {
            donut: {
              size: '70%'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(val) {
            return Math.round(val) + '%'
          }
        }
      }
    },

    orderStatusChartSeries() {
      if (!this.dashboardData) return []
      
      const orders = this.dashboardData.orders.byStatus
      console.log('Order status data:', orders) // Debug log
      
      const seriesData = [
        orders.pending || 0,
        orders.preparing || 0,
        orders.completed || 0,
        orders.cancelled || 0
      ]
      
      console.log('Chart series data:', seriesData) // Debug log
      return seriesData
    },

    // Category Performance Chart
    categoryChartOptions() {
      return {
        chart: {
          type: 'bar',
          toolbar: { show: false }
        },
        colors: ['#8B5CF6'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: this.getCategoryNames(),
          labels: {
            style: { colors: '#6B7280' }
          }
        },
        yaxis: {
          labels: {
            style: { colors: '#6B7280' },
            formatter: (value) => this.formatCurrency(value)
          }
        },
        grid: {
          borderColor: '#E5E7EB'
        }
      }
    },

    categoryChartSeries() {
      return [{
        name: 'Revenue',
        data: this.getCategoryRevenue()
      }]
    },

    // Hourly Sales Chart
    hourlyChartOptions() {
      return {
        chart: {
          type: 'area',
          toolbar: { show: false }
        },
        colors: ['#06B6D4'],
        dataLabels: { enabled: false },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: Array.from({length: 24}, (_, i) => `${i}:00`),
          labels: {
            style: { colors: '#6B7280' }
          }
        },
        yaxis: {
          labels: {
            style: { colors: '#6B7280' }
          }
        },
        grid: {
          borderColor: '#E5E7EB'
        }
      }
    },

    hourlyChartSeries() {
      return [{
        name: 'Orders',
        data: this.getHourlyData()
      }]
    }
  },

  async mounted() {
    // Set today using simple method that definitely works
    this.today = new Date().toISOString().substr(0, 10)
    console.log('Dashboard mounted - Today is:', this.today) // Debug log
    
    this.updateDateRangeDisplay()
    await this.loadDashboardData()
    this.setupRealTimeUpdates()
  },

  beforeDestroy() {
    if (this.realTimeInterval) {
      clearInterval(this.realTimeInterval)
    }
  },

  methods: {
    async loadDashboardData() {
      this.loading = true
      this.error = null
      
      try {
        const dateRange = this.getDateRange()
        
        // Fetch main dashboard data
        const response = await this.$axios.get('/api/ticket/find', {
          params: {
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            include: 'client,table,ticketLines,payment'
          }
        })

        if (response.data.success) {
          this.dashboardData = this.processDashboardData(response.data.tickets || [])
          this.recentOrders = (response.data.tickets || []).slice(0, 10)
          
          // Load comparison data
          await this.loadComparisonData()
        } else {
          throw new Error('Failed to load dashboard data')
        }
        
      } catch (error) {
        this.error = error.message || 'An error occurred while loading dashboard data'
        console.error('Dashboard loading error:', error)
      } finally {
        this.loading = false
      }
    },

    async loadComparisonData() {
      try {
        const previousPeriod = this.getPreviousPeriod()
        const dateRange = this.getDateRange(previousPeriod)
        
        const response = await this.$axios.get('/api/ticket/find', {
          params: {
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            include: 'client,table,ticketLines,payment'
          }
        })

        if (response.data.success) {
          const previousData = this.processDashboardData(response.data.tickets || [])
          this.comparisonData = this.calculateComparison(this.dashboardData, previousData)
        }
      } catch (error) {
        console.error('Failed to load comparison data:', error)
      }
    },

    handlePeriodChange() {
      if (this.selectedPeriod !== 'custom' && this.selectedPeriod !== 'between_dates') {
        this.updateDateRangeDisplay()
        this.loadDashboardData()
      }
    },

    handleCustomDateChange() {
      this.updateDateRangeDisplay()
      // Only auto-load if both dates are selected
      if (this.customStartDate && this.customEndDate) {
        this.loadDashboardData()
      }
    },

    applyDateRange() {
      if (this.customStartDate && this.customEndDate) {
        this.updateDateRangeDisplay()
        this.loadDashboardData()
      } else {
        this.$toast?.error?.('Please select both start and end dates') // Optional toast notification
      }
    },

    clearDateRange() {
      this.customStartDate = ''
      this.customEndDate = ''
      this.dateRangeDisplay = ''
      this.selectedPeriod = 'current_month'
      this.loadDashboardData()
    },

    setQuickRange(range) {
      const now = new Date()
      const today = this.getCurrentLocalDate()
      
      switch (range) {
        case 'last7days':
          const last7Days = new Date(now)
          last7Days.setDate(now.getDate() - 7)
          const l7Year = last7Days.getFullYear()
          const l7Month = String(last7Days.getMonth() + 1).padStart(2, '0')
          const l7Day = String(last7Days.getDate()).padStart(2, '0')
          this.customStartDate = `${l7Year}-${l7Month}-${l7Day}`
          this.customEndDate = today
          break
          
        case 'last30days':
          const last30Days = new Date(now)
          last30Days.setDate(now.getDate() - 30)
          const l30Year = last30Days.getFullYear()
          const l30Month = String(last30Days.getMonth() + 1).padStart(2, '0')
          const l30Day = String(last30Days.getDate()).padStart(2, '0')
          this.customStartDate = `${l30Year}-${l30Month}-${l30Day}`
          this.customEndDate = today
          break
          
        case 'last90days':
          const last90Days = new Date(now)
          last90Days.setDate(now.getDate() - 90)
          const l90Year = last90Days.getFullYear()
          const l90Month = String(last90Days.getMonth() + 1).padStart(2, '0')
          const l90Day = String(last90Days.getDate()).padStart(2, '0')
          this.customStartDate = `${l90Year}-${l90Month}-${l90Day}`
          this.customEndDate = today
          break
          
        case 'thisyear':
          const startOfYear = new Date(now.getFullYear(), 0, 1)
          const syYear = startOfYear.getFullYear()
          const syMonth = String(startOfYear.getMonth() + 1).padStart(2, '0')
          const syDay = String(startOfYear.getDate()).padStart(2, '0')
          this.customStartDate = `${syYear}-${syMonth}-${syDay}`
          this.customEndDate = today
          break
      }
      
      // Update formatted versions
      this.updateStartDateFormatted()
      this.updateEndDateFormatted()
      
      this.selectedPeriod = 'between_dates'
      this.updateDateRangeDisplay()
      this.loadDashboardData()
    },

    updateDateRangeDisplay() {
      if (this.selectedPeriod === 'custom' || this.selectedPeriod === 'between_dates') {
        if (this.customStartDate && this.customEndDate) {
          const startDate = new Date(this.customStartDate)
          const endDate = new Date(this.customEndDate)
          
          const formatDate = (date) => {
            return date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })
          }
          
          this.dateRangeDisplay = `${formatDate(startDate)} - ${formatDate(endDate)}`
          
          // Calculate number of days
          const diffTime = Math.abs(endDate - startDate)
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
          this.dateRangeDisplay += ` (${diffDays} day${diffDays !== 1 ? 's' : ''})`
        } else {
          this.dateRangeDisplay = 'Select date range'
        }
      } else {
        // Display range for predefined periods
        const range = this.getDateRange()
        const startDate = new Date(range.startDate)
        const endDate = new Date(range.endDate)
        
        const formatDate = (date) => {
          return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          })
        }
        
        if (range.startDate === range.endDate) {
          this.dateRangeDisplay = startDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
        } else {
          this.dateRangeDisplay = `${formatDate(startDate)} - ${formatDate(endDate)}`
        }
      }
    },

    setupRealTimeUpdates() {
      // Update every 30 seconds for critical metrics
      this.realTimeInterval = setInterval(() => {
        if (this.selectedPeriod === 'today') {
          this.loadDashboardData()
        }
      }, 30000)
    },

    getDateRange(period = null) {
      const targetPeriod = period || this.selectedPeriod
      const now = new Date()
      const today = this.getCurrentLocalDate()
      
      // Handle custom date ranges
      if ((targetPeriod === 'custom' || targetPeriod === 'between_dates') && this.customStartDate && this.customEndDate) {
        return {
          startDate: this.customStartDate,
          endDate: this.customEndDate
        }
      }
      
      switch (targetPeriod) {
        case 'today':
          return {
            startDate: today,
            endDate: today
          }
        
        case 'yesterday':
          const yesterday = new Date(now)
          yesterday.setDate(now.getDate() - 1)
          const year = yesterday.getFullYear()
          const month = String(yesterday.getMonth() + 1).padStart(2, '0')
          const day = String(yesterday.getDate()).padStart(2, '0')
          const yesterdayFormatted = `${year}-${month}-${day}`
          return {
            startDate: yesterdayFormatted,
            endDate: yesterdayFormatted
          }
        
        case 'this_week':
          const startOfWeek = new Date(now)
          startOfWeek.setDate(now.getDate() - now.getDay())
          const weekStartYear = startOfWeek.getFullYear()
          const weekStartMonth = String(startOfWeek.getMonth() + 1).padStart(2, '0')
          const weekStartDay = String(startOfWeek.getDate()).padStart(2, '0')
          return {
            startDate: `${weekStartYear}-${weekStartMonth}-${weekStartDay}`,
            endDate: today
          }
        
        case 'last_week':
          const lastWeekEnd = new Date(now)
          lastWeekEnd.setDate(now.getDate() - now.getDay() - 1)
          const lastWeekStart = new Date(lastWeekEnd)
          lastWeekStart.setDate(lastWeekEnd.getDate() - 6)
          
          const lwsYear = lastWeekStart.getFullYear()
          const lwsMonth = String(lastWeekStart.getMonth() + 1).padStart(2, '0')
          const lwsDay = String(lastWeekStart.getDate()).padStart(2, '0')
          
          const lweYear = lastWeekEnd.getFullYear()
          const lweMonth = String(lastWeekEnd.getMonth() + 1).padStart(2, '0')
          const lweDay = String(lastWeekEnd.getDate()).padStart(2, '0')
          
          return {
            startDate: `${lwsYear}-${lwsMonth}-${lwsDay}`,
            endDate: `${lweYear}-${lweMonth}-${lweDay}`
          }
        
        case 'current_month':
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
          const somYear = startOfMonth.getFullYear()
          const somMonth = String(startOfMonth.getMonth() + 1).padStart(2, '0')
          const somDay = String(startOfMonth.getDate()).padStart(2, '0')
          return {
            startDate: `${somYear}-${somMonth}-${somDay}`,
            endDate: today
          }
        
        case 'last_month':
          const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
          const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0)
          
          const lmsYear = lastMonthStart.getFullYear()
          const lmsMonth = String(lastMonthStart.getMonth() + 1).padStart(2, '0')
          const lmsDay = String(lastMonthStart.getDate()).padStart(2, '0')
          
          const lmeYear = lastMonthEnd.getFullYear()
          const lmeMonth = String(lastMonthEnd.getMonth() + 1).padStart(2, '0')
          const lmeDay = String(lastMonthEnd.getDate()).padStart(2, '0')
          
          return {
            startDate: `${lmsYear}-${lmsMonth}-${lmsDay}`,
            endDate: `${lmeYear}-${lmeMonth}-${lmeDay}`
          }
        
        default:
          const defaultStart = new Date(now.getFullYear(), now.getMonth(), 1)
          const dsYear = defaultStart.getFullYear()
          const dsMonth = String(defaultStart.getMonth() + 1).padStart(2, '0')
          const dsDay = String(defaultStart.getDate()).padStart(2, '0')
          return {
            startDate: `${dsYear}-${dsMonth}-${dsDay}`,
            endDate: today
          }
      }
    },

    getPreviousPeriod() {
      switch (this.selectedPeriod) {
        case 'today':
          return 'yesterday'
        case 'this_week':
          return 'last_week'
        case 'current_month':
          return 'last_month'
        default:
          return 'last_month'
      }
    },

    processDashboardData(tickets) {
      console.log('=== Processing Dashboard Data ===')
      console.log('Total tickets to process:', tickets.length)
      
      const metrics = {
        financial: {
          totalRevenue: 0,
          totalSubtotal: 0,
          totalTax: 0,
          totalOrders: tickets.length,
          averageOrderValue: 0,
          pendingPayments: 0,
          completedPayments: 0,
          profitMargin: 0,
          totalProfit: 0
        },
        orders: {
          byStatus: {
            pending: 0,
            preparing: 0,
            completed: 0,
            cancelled: 0
          },
          byPaymentStatus: {
            pending: 0,
            completed: 0,
            failed: 0
          },
          hourlyDistribution: {}
        },
        products: {
          topSelling: [],
          topRevenue: [],
          lowStock: [],
          categoryPerformance: {}
        },
        alerts: []
      }

      const productStats = {}
      const categoryStats = {}
      const hourlyStats = Array(24).fill(0)

      // Debug: Log all ticket statuses first
      console.log('Ticket statuses:', tickets.map(t => ({ 
        id: t.id, 
        number: t.ticketNumber, 
        status: t.status,
        paymentStatus: t.paymentStatus 
      })))

      tickets.forEach((ticket, index) => {
        console.log(`Processing ticket ${index + 1}/${tickets.length}: ${ticket.ticketNumber}`)
        
        // Financial calculations
        metrics.financial.totalRevenue += ticket.total || 0
        metrics.financial.totalSubtotal += ticket.subtotal || 0
        metrics.financial.totalTax += ticket.tax || 0
        
        // Payment status tracking
        const paymentStatus = ticket.paymentStatus?.toLowerCase() || 'unknown'
        if (paymentStatus === 'pending') {
          metrics.financial.pendingPayments += ticket.total || 0
          metrics.orders.byPaymentStatus.pending++
        } else if (paymentStatus === 'completed' || paymentStatus === 'paid') {
          metrics.financial.completedPayments += ticket.total || 0
          metrics.orders.byPaymentStatus.completed++
        } else if (paymentStatus === 'failed') {
          metrics.orders.byPaymentStatus.failed++
        }
        
        // Order status tracking - FIXED to handle actual API statuses
        const orderStatus = ticket.status?.toLowerCase()?.trim() || 'pending'
        console.log(`  Original status: "${ticket.status}" -> Normalized: "${orderStatus}"`)
        
        switch (orderStatus) {
          case 'pending':
            metrics.orders.byStatus.pending++
            console.log(`  ✅ Incremented pending count to ${metrics.orders.byStatus.pending}`)
            break
          case 'preparing':
            metrics.orders.byStatus.preparing++
            console.log(`  ✅ Incremented preparing count to ${metrics.orders.byStatus.preparing}`)
            break
          case 'paid':
          case 'completed':
          case 'complete':
            metrics.orders.byStatus.completed++
            console.log(`  ✅ Incremented completed count to ${metrics.orders.byStatus.completed}`)
            break
          case 'cancelled':
          case 'canceled':
            metrics.orders.byStatus.cancelled++
            console.log(`  ✅ Incremented cancelled count to ${metrics.orders.byStatus.cancelled}`)
            break
          default:
            console.warn(`  ⚠️ Unknown status "${orderStatus}", defaulting to pending`)
            metrics.orders.byStatus.pending++
            break
        }
        
        // Hourly distribution
        const orderHour = new Date(ticket.createdAt).getHours()
        if (orderHour >= 0 && orderHour < 24) {
          hourlyStats[orderHour]++
        }
        
        // Process ticket lines (products)
        if (ticket.ticketLines && Array.isArray(ticket.ticketLines)) {
          ticket.ticketLines.forEach(line => {
            const product = line.product
            if (!product) return
            
            const productId = product.id
            const categoryName = product.category?.categ_name || 'Unknown'
            
            // Product statistics
            if (!productStats[productId]) {
              productStats[productId] = {
                id: productId,
                name: product.pro_name,
                category: categoryName,
                totalQuantity: 0,
                totalRevenue: 0,
                totalProfit: 0,
                currentStock: product.stock_count,
                minStock: product.minStock,
                costPrice: product.cost_price,
                salePrice: product.pro_price,
                profitPerUnit: (product.pro_price || 0) - (product.cost_price || 0)
              }
            }
            
            productStats[productId].totalQuantity += line.quantity || 0
            productStats[productId].totalRevenue += line.totalPrice || 0
            productStats[productId].totalProfit += (line.quantity || 0) * productStats[productId].profitPerUnit
            
            // Category statistics
            if (!categoryStats[categoryName]) {
              categoryStats[categoryName] = {
                name: categoryName,
                totalRevenue: 0,
                totalProfit: 0
              }
            }
            
            categoryStats[categoryName].totalRevenue += line.totalPrice || 0
            categoryStats[categoryName].totalProfit += (line.quantity || 0) * productStats[productId].profitPerUnit
            
            // Stock alerts
            if (product.stock_count <= product.minStock) {
              const alertType = product.stock_count === 0 ? 'critical' : 'warning'
              const alertMessage = product.stock_count === 0 
                ? `${product.pro_name} is out of stock`
                : `${product.pro_name} is running low (${product.stock_count} remaining)`
              
              metrics.alerts.push({
                type: alertType,
                category: 'inventory',
                message: alertMessage,
                productId: product.id,
                productName: product.pro_name,
                currentStock: product.stock_count,
                minStock: product.minStock,
                timestamp: new Date().toISOString()
              })
            }
          })
        }
      })

      // Calculate derived metrics
      metrics.financial.averageOrderValue = metrics.financial.totalOrders > 0 
        ? metrics.financial.totalRevenue / metrics.financial.totalOrders 
        : 0
      
      metrics.financial.totalProfit = Object.values(productStats).reduce((sum, product) => sum + product.totalProfit, 0)
      metrics.financial.profitMargin = metrics.financial.totalRevenue > 0 
        ? (metrics.financial.totalProfit / metrics.financial.totalRevenue) * 100 
        : 0

      // Process product arrays
      const productsArray = Object.values(productStats)
      
      metrics.products.topSelling = productsArray
        .sort((a, b) => b.totalQuantity - a.totalQuantity)
        .slice(0, 10)
      
      metrics.products.topRevenue = productsArray
        .sort((a, b) => b.totalRevenue - a.totalRevenue)
        .slice(0, 10)
      
      metrics.products.lowStock = productsArray
        .filter(product => product.currentStock <= product.minStock)
        .sort((a, b) => (a.currentStock / a.minStock) - (b.currentStock / b.minStock))

      metrics.products.categoryPerformance = Object.values(categoryStats)
        .sort((a, b) => b.totalRevenue - a.totalRevenue)

      metrics.orders.hourlyDistribution = hourlyStats

      // Payment alerts
      if (metrics.financial.pendingPayments > 0) {
        metrics.alerts.push({
          type: 'warning',
          category: 'payment',
          message: `${metrics.orders.byPaymentStatus.pending} orders with pending payments (${this.formatCurrency(metrics.financial.pendingPayments)})`,
          amount: metrics.financial.pendingPayments,
          count: metrics.orders.byPaymentStatus.pending,
          timestamp: new Date().toISOString()
        })
      }

      // Final debug logging
      console.log('=== Final Order Status Counts ===')
      console.log('Pending:', metrics.orders.byStatus.pending)
      console.log('Preparing:', metrics.orders.byStatus.preparing)
      console.log('Completed:', metrics.orders.byStatus.completed)
      console.log('Cancelled:', metrics.orders.byStatus.cancelled)
      console.log('Total counted:', Object.values(metrics.orders.byStatus).reduce((a, b) => a + b, 0))
      console.log('Expected total:', tickets.length)

      return metrics
    },

    calculateComparison(current, previous) {
      const calculateChange = (curr, prev) => {
        if (prev === 0) return curr > 0 ? 100 : 0
        return ((curr - prev) / prev) * 100
      }

      return {
        revenue: calculateChange(current.financial.totalRevenue, previous.financial.totalRevenue),
        orders: calculateChange(current.financial.totalOrders, previous.financial.totalOrders),
        avgOrderValue: calculateChange(current.financial.averageOrderValue, previous.financial.averageOrderValue),
        profitMargin: calculateChange(current.financial.profitMargin, previous.financial.profitMargin)
      }
    },

    // Chart data methods
    getChartCategories() {
      // Generate categories based on selected period
      switch (this.selectedPeriod) {
        case 'today':
        case 'yesterday':
          return Array.from({length: 24}, (_, i) => `${i}:00`)
        case 'this_week':
        case 'last_week':
          return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        default:
          return ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      }
    },

    getRevenueData() {
      // Mock data - replace with actual revenue breakdown
      switch (this.selectedPeriod) {
        case 'today':
        case 'yesterday':
          return Array(24).fill(0).map((_, i) => 
            this.dashboardData?.orders.hourlyDistribution[i] * (this.dashboardData?.financial.averageOrderValue || 0) || 0
          )
        default:
          return [85000, 120000, 95000, 160000] // Sample weekly data
      }
    },

    getProfitData() {
      // Mock data - replace with actual profit breakdown
      const revenueData = this.getRevenueData()
      const profitMargin = this.dashboardData?.financial.profitMargin || 20
      return revenueData.map(revenue => revenue * (profitMargin / 100))
    },

    getCategoryNames() {
      return this.dashboardData?.products.categoryPerformance.map(cat => cat.name) || []
    },

    getCategoryRevenue() {
      return this.dashboardData?.products.categoryPerformance.map(cat => cat.totalRevenue) || []
    },

    getHourlyData() {
      return this.dashboardData?.orders.hourlyDistribution || Array(24).fill(0)
    },

    // Utility methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LAK',
        minimumFractionDigits: 0
      }).format(amount || 0).replace('LAK', '₭')
    },

    formatTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
    },

    formatRelativeTime(timestamp) {
      const now = new Date()
      const time = new Date(timestamp)
      const diffInMinutes = Math.floor((now - time) / (1000 * 60))
      
      if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`
      } else if (diffInMinutes < 1440) {
        return `${Math.floor(diffInMinutes / 60)} hours ago`
      } else {
        return `${Math.floor(diffInMinutes / 1440)} days ago`
      }
    },

    updateStartDateFormatted() {
      if (this.customStartDate) {
        this.startDateFormatted = this.formatDate(this.customStartDate)
        this.updateDateRangeDisplay()
        if (this.customEndDate) {
          this.loadDashboardData()
        }
      }
    },

    updateEndDateFormatted() {
      if (this.customEndDate) {
        this.endDateFormatted = this.formatDate(this.customEndDate)
        this.updateDateRangeDisplay()
        if (this.customStartDate) {
          this.loadDashboardData()
        }
      }
    },

    formatDate(date) {
      if (!date) return ''
      
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return ''
      
      // Handle MM/DD/YYYY format
      const [month, day, year] = date.split('/')
      if (month && day && year) {
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
      return date
    },

    getCurrentLocalDate() {
      // Get current date in YYYY-MM-DD format using local timezone
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    getOrderItemsSummary(ticketLines) {
      if (!ticketLines || ticketLines.length === 0) return 'No items'
      
      const items = ticketLines.map(line => line.product?.pro_name).filter(Boolean)
      if (items.length <= 2) {
        return items.join(', ')
      } else {
        return `${items.slice(0, 2).join(', ')} +${items.length - 2} more`
      }
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background-color: #f9fafb;
}

.dashboard-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827;
  margin: 0;
}

.date-selector {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
}

.date-label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

.date-range-container {
  width: 100%;
  margin-top: 1rem;
}

.vuetify-date-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  align-items: start;
  margin-bottom: 1rem;
}

.date-picker-wrapper {
  min-width: 200px;
}

.date-action-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: start;
  margin-top: 0.5rem;
}

.quick-date-chips {
  margin-bottom: 1rem;
}

.date-range-display {
  margin-top: 1rem;
  width: 100%;
}

.range-text {
  font-weight: 500;
}

.loading-container, .error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid #e5e7eb;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  color: #dc2626;
  font-weight: 500;
}

.retry-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
}

.retry-button:hover {
  background: #2563eb;
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.charts-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-container {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.chart-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.analytics-card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
}

.products-list {
  space-y: 0.75rem;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
}

.product-name {
  font-weight: 500;
  color: #111827;
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
}

.product-details {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
}

.product-revenue {
  font-weight: 600;
  color: #059669;
}

.alerts-panel .no-alerts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  color: #6b7280;
}

.success-icon {
  width: 2rem;
  height: 2rem;
  color: #059669;
}

.alerts-list {
  space-y: 0.75rem;
}

.alert-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border-left: 4px solid;
}

.alert-critical {
  background: #fef2f2;
  border-left-color: #dc2626;
}

.alert-warning {
  background: #fffbeb;
  border-left-color: #f59e0b;
}

.alert-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.125rem;
}

.alert-critical .alert-icon {
  color: #dc2626;
}

.alert-warning .alert-icon {
  color: #f59e0b;
}

.alert-message {
  font-weight: 500;
  color: #111827;
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
}

.alert-time {
  font-size: 0.75rem;
  color: #6b7280;
}

.recent-orders-section {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
}

.table-container {
  overflow-x: auto;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
}

.orders-table th {
  background: #f9fafb;
  padding: 0.75rem;
  text-align: left;
  font-weight: 500;
  color: #374151;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
}

.orders-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
}

.order-number {
  font-weight: 500;
  color: #111827;
}

.status-badge, .payment-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
}

.status-pending {
  background: #f3f4f6;
  color: #374151;
}

.status-preparing {
  background: #fef3c7;
  color: #92400e;
}

.status-completed {
  background: #d1fae5;
  color: #065f46;
}

.payment-pending {
  background: #fef2f2;
  color: #991b1b;
}

.payment-completed {
  background: #d1fae5;
  color: #065f46;
}

.order-items {
  color: #6b7280;
}

.order-total {
  font-weight: 500;
  color: #111827;
}

.order-time, .order-staff {
  color: #6b7280;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
  }

  .date-selector {
    width: 100%;
  }

  .vuetify-date-inputs {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .date-picker-wrapper {
    width: 100%;
    min-width: auto;
  }

  .date-action-buttons {
    flex-direction: row;
    justify-content: center;
  }

  .charts-section {
    grid-template-columns: 1fr;
  }

  .analytics-grid {
    grid-template-columns: 1fr;
  }

  .orders-table {
    font-size: 0.75rem;
  }

  .orders-table th,
  .orders-table td {
    padding: 0.5rem;
  }
}
</style>