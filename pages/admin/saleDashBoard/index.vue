<template>
  <div class="dashboard-container">
    <!-- Header Section -->
    <div class="dashboard-header">
      <div class="header-content">
        <h1 class="dashboard-title">Business Dashboard</h1>
        
        <!-- Date Range Selector -->
        <div class="date-selector">
          <label class="date-label">
            <v-icon>mdi-calendar</v-icon>
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
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <p class="mt-4">Loading dashboard data...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <v-alert type="error" prominent class="mb-4">
        <h3>Dashboard Error</h3>
        <p>{{ error }}</p>
      </v-alert>
      <v-btn @click="loadDashboardData" color="primary">
        <v-icon left>mdi-refresh</v-icon>
        Retry
      </v-btn>
    </div>

    <!-- Dashboard Content -->
    <div v-else-if="dashboardData" class="dashboard-content">
      
      <!-- Key Metrics Cards using Vuetify -->
      <div class="metrics-grid">
        <v-card class="metric-card">
          <v-card-text class="text-center">
            <v-avatar size="60" color="primary" class="mb-3">
              <v-icon size="30" color="white">mdi-currency-usd</v-icon>
            </v-avatar>
            <h3 class="text-h4 primary--text font-weight-bold">
              {{ formatCurrency(dashboardData.financial.totalRevenue) }}
            </h3>
            <p class="text-h6 mb-2">Total Revenue</p>
            <p class="text-body-2 grey--text">{{ dashboardData.financial.totalOrders }} orders</p>
            <v-chip
              v-if="comparisonData && comparisonData.revenue !== undefined"
              :color="comparisonData.revenue >= 0 ? 'success' : 'error'"
              small
              dark
            >
              <v-icon left small>
                {{ comparisonData.revenue >= 0 ? 'mdi-trending-up' : 'mdi-trending-down' }}
              </v-icon>
              {{ Math.abs(comparisonData.revenue).toFixed(1) }}%
            </v-chip>
          </v-card-text>
        </v-card>
        
        <v-card class="metric-card">
          <v-card-text class="text-center">
            <v-avatar size="60" color="success" class="mb-3">
              <v-icon size="30" color="white">mdi-shopping-cart</v-icon>
            </v-avatar>
            <h3 class="text-h4 success--text font-weight-bold">
              {{ formatCurrency(dashboardData.financial.averageOrderValue) }}
            </h3>
            <p class="text-h6 mb-2">Average Order Value</p>
            <p class="text-body-2 grey--text">Per order</p>
            <v-chip
              v-if="comparisonData && comparisonData.avgOrderValue !== undefined"
              :color="comparisonData.avgOrderValue >= 0 ? 'success' : 'error'"
              small
              dark
            >
              <v-icon left small>
                {{ comparisonData.avgOrderValue >= 0 ? 'mdi-trending-up' : 'mdi-trending-down' }}
              </v-icon>
              {{ Math.abs(comparisonData.avgOrderValue).toFixed(1) }}%
            </v-chip>
          </v-card-text>
        </v-card>
        
        <v-card class="metric-card" :class="{ 'alert-card': dashboardData.financial.pendingPayments > 0 }">
          <v-card-text class="text-center">
            <v-avatar 
              size="60" 
              :color="dashboardData.financial.pendingPayments > 0 ? 'warning' : 'grey'"
              class="mb-3"
            >
              <v-icon size="30" color="white">mdi-alert-circle</v-icon>
            </v-avatar>
            <h3 
              class="text-h4 font-weight-bold"
              :class="dashboardData.financial.pendingPayments > 0 ? 'warning--text' : 'grey--text'"
            >
              {{ formatCurrency(dashboardData.financial.pendingPayments) }}
            </h3>
            <p class="text-h6 mb-2">Pending Payments</p>
            <p class="text-body-2 grey--text">{{ dashboardData.orders.byPaymentStatus.pending || 0 }} orders</p>
            <v-chip
              v-if="dashboardData.financial.pendingPayments > 0"
              color="warning"
              small
              dark
            >
              <v-icon left small>mdi-clock-alert</v-icon>
              Action Required
            </v-chip>
          </v-card-text>
        </v-card>
        
        <v-card class="metric-card">
          <v-card-text class="text-center">
            <v-avatar size="60" color="secondary" class="mb-3">
              <v-icon size="30" color="white">mdi-trending-up</v-icon>
            </v-avatar>
            <h3 class="text-h4 secondary--text font-weight-bold">
              {{ dashboardData.financial.profitMargin.toFixed(1) }}%
            </h3>
            <p class="text-h6 mb-2">Profit Margin</p>
            <p class="text-body-2 grey--text">{{ formatCurrency(dashboardData.financial.totalProfit) }}</p>
            <v-chip
              v-if="comparisonData && comparisonData.profitMargin !== undefined"
              :color="comparisonData.profitMargin >= 0 ? 'success' : 'error'"
              small
              dark
            >
              <v-icon left small>
                {{ comparisonData.profitMargin >= 0 ? 'mdi-trending-up' : 'mdi-trending-down' }}
              </v-icon>
              {{ Math.abs(comparisonData.profitMargin).toFixed(1) }}%
            </v-chip>
          </v-card-text>
        </v-card>
      </div>

      <!-- Charts Section -->
      <div class="charts-section">
        <!-- Revenue Chart with ApexCharts -->
        <v-card class="chart-container">
          <v-card-title class="primary white--text">
            <v-icon left color="white">mdi-chart-line</v-icon>
            Revenue Trends
            <v-spacer></v-spacer>
            <v-chip color="white" small text-color="primary" outlined>
              Live Data
            </v-chip>
          </v-card-title>
          <v-card-text class="pa-6">
            <!-- ApexCharts Implementation -->
            <client-only>
              <apexchart
                v-if="revenueChartSeries && revenueChartSeries.length > 0"
                type="line"
                height="350"
                :options="revenueChartOptions"
                :series="revenueChartSeries"
              />
              <div v-else class="chart-placeholder">
                <v-icon size="64" color="grey lighten-2">mdi-chart-line</v-icon>
                <p class="text-h6 grey--text mt-4">No Revenue Data</p>
                <p class="text-body-2 grey--text">Select a different date range</p>
              </div>
            </client-only>
          </v-card-text>
        </v-card>

        <!-- Order Status Chart -->
        <v-card class="chart-container">
          <v-card-title class="secondary white--text">
            <v-icon left color="white">mdi-pie-chart</v-icon>
            Order Status Distribution
          </v-card-title>
          <v-card-text class="pa-4">
            <!-- ApexCharts Donut Chart -->
            <client-only>
              <apexchart
                v-if="orderStatusChartSeries && orderStatusChartSeries.some(val => val > 0)"
                type="donut"
                height="350"
                :options="orderStatusChartOptions"
                :series="orderStatusChartSeries"
              />
              <div v-else class="order-status-summary">
                <div 
                  v-for="(value, status) in dashboardData.orders.byStatus" 
                  :key="status"
                  class="status-item d-flex justify-space-between align-center mb-3"
                >
                  <div class="d-flex align-center">
                    <v-chip :color="getStatusColor(status)" small dark class="mr-2">
                      {{ status }}
                    </v-chip>
                  </div>
                  <span class="font-weight-bold">{{ value }}</span>
                </div>
                <v-divider class="my-3"></v-divider>
                <div class="d-flex justify-space-between">
                  <span class="font-weight-medium">Total Orders:</span>
                  <span class="font-weight-bold">{{ dashboardData.financial.totalOrders }}</span>
                </div>
              </div>
            </client-only>
          </v-card-text>
        </v-card>
      </div>

      <!-- Analytics Grid -->
      <div class="analytics-grid">
        <!-- Top Products -->
        <v-card class="analytics-card">
          <v-card-title class="info white--text">
            <v-icon left color="white">mdi-trophy</v-icon>
            Top Performing Products
          </v-card-title>
          <v-card-text class="pa-0">
            <div v-if="!dashboardData.products.topRevenue || dashboardData.products.topRevenue.length === 0" 
                 class="text-center pa-8">
              <v-icon size="64" color="grey lighten-2">mdi-package-variant</v-icon>
              <p class="text-h6 grey--text mt-4">No product data available</p>
            </div>
            <v-list v-else three-line>
              <div 
                v-for="(product, index) in dashboardData.products.topRevenue.slice(0, 5)" 
                :key="product.id"
              >
                <v-list-item>
                  <v-list-item-avatar>
                    <v-avatar :color="getProductRankColor(index)" size="40">
                      <span class="white--text font-weight-bold">{{ index + 1 }}</span>
                    </v-avatar>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                      {{ product.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Qty: {{ product.totalQuantity }} | 
                      Profit: {{ formatCurrency(product.totalProfit) }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <div class="text-h6 font-weight-bold primary--text">
                      {{ formatCurrency(product.totalRevenue) }}
                    </div>
                  </v-list-item-action>
                </v-list-item>
                <v-divider v-if="index < 4"></v-divider>
              </div>
            </v-list>
          </v-card-text>
        </v-card>

        <!-- Category Performance with ApexCharts -->
        <v-card class="analytics-card">
          <v-card-title class="success white--text">
            <v-icon left color="white">mdi-chart-bar</v-icon>
            Category Performance
          </v-card-title>
          <v-card-text class="pa-4">
            <client-only>
              <apexchart
                v-if="categoryChartSeries && categoryChartSeries[0].data.length > 0"
                type="bar"
                height="300"
                :options="categoryChartOptions"
                :series="categoryChartSeries"
              />
              <div v-else class="text-center pa-8">
                <v-icon size="64" color="grey lighten-2">mdi-chart-bar</v-icon>
                <p class="text-h6 grey--text mt-4">No category data available</p>
              </div>
            </client-only>
          </v-card-text>
        </v-card>

        <!-- Hourly Sales Pattern with ApexCharts -->
        <v-card class="analytics-card">
          <v-card-title class="warning white--text">
            <v-icon left color="white">mdi-clock-time-four</v-icon>
            Hourly Sales Pattern
            <v-spacer></v-spacer>
            <v-chip color="white" small text-color="warning" outlined>
              {{ selectedPeriod === 'today' ? 'Real-time' : 'Historical' }}
            </v-chip>
          </v-card-title>
          <v-card-text class="pa-4">
            <client-only>
              <apexchart
                v-if="hourlyChartSeries && hourlyChartSeries[0].data.some(val => val > 0)"
                type="area"
                height="300"
                :options="hourlyChartOptions"
                :series="hourlyChartSeries"
              />
              <div v-else class="hourly-summary">
                <p class="text-center text-body-1 grey--text mb-4">Business Hours Overview</p>
                <v-row>
                  <v-col 
                    cols="6" 
                    sm="4" 
                    md="3" 
                    v-for="(value, index) in getHourlyData().slice(8, 20)" 
                    :key="index"
                    class="text-center mb-2"
                  >
                    <div class="hourly-item pa-2">
                      <div class="text-h6 font-weight-bold">{{ value }}</div>
                      <div class="text-caption grey--text">{{ (index + 8) }}:00</div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </client-only>
          </v-card-text>
        </v-card>
      </div>

      <!-- Recent Orders Table -->
      <v-card class="recent-orders-section">
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-receipt</v-icon>
          Recent Orders
          <v-spacer></v-spacer>
          <v-chip color="white" small text-color="primary" outlined>
            {{ recentOrders.length }} orders
          </v-chip>
        </v-card-title>
        
        <v-card-text class="pa-0">
          <v-data-table
            :headers="orderHeaders"
            :items="recentOrders"
            :items-per-page="10"
            class="orders-table"
            no-data-text="No recent orders found"
            :loading="loading"
            loading-text="Loading orders..."
          >
            <template v-slot:[`item.ticketNumber`]="{ item }">
              <v-chip color="primary" small outlined class="font-weight-bold">
                #{{ item.ticketNumber }}
              </v-chip>
            </template>

            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                :color="getStatusColor(item.status)"
                small
                dark
              >
                {{ item.status }}
              </v-chip>
            </template>

            <template v-slot:[`item.items`]="{ item }">
              <div class="items-summary">
                {{ getOrderItemsSummary(item.ticketLines) }}
              </div>
            </template>

            <template v-slot:[`item.total`]="{ item }">
              <span class="font-weight-bold">{{ formatCurrency(item.total) }}</span>
            </template>

            <template v-slot:[`item.paymentStatus`]="{ item }">
              <v-chip
                :color="getPaymentStatusColor(item.paymentStatus)"
                small
                dark
              >
                {{ item.paymentStatus }}
              </v-chip>
            </template>

            <template v-slot:[`item.createdAt`]="{ item }">
              <div class="text-body-2">
                <div>{{ formatTime(item.createdAt) }}</div>
                <div class="text-caption grey--text">{{ formatDate(item.createdAt) }}</div>
              </div>
            </template>

            <template v-slot:[`item.createUser`]="{ item }">
              <div class="d-flex align-center">
                <v-avatar size="24" color="grey lighten-2" class="mr-2">
                  <v-icon size="16">mdi-account</v-icon>
                </v-avatar>
                <span>{{ item.createUser?.cus_name || 'N/A' }}</span>
              </div>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </div>

    <!-- Default State - Show when no data loaded -->
    <div v-else class="default-state">
      <div class="text-center pa-8">
        <v-icon size="80" color="grey lighten-2">mdi-view-dashboard</v-icon>
        <h3 class="text-h5 grey--text mt-4">Welcome to Dashboard</h3>
        <p class="text-body-1 grey--text">Select a date range to view analytics</p>
        <v-btn @click="loadDashboardData" color="primary" class="mt-4">
          <v-icon left>mdi-refresh</v-icon>
          Load Data
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  
  data() {
    return {
      selectedPeriod: 'current_month',
      customStartDate: '',
      customEndDate: '',
      startDateFormatted: '',
      endDateFormatted: '',
      startDateMenu: false,
      endDateMenu: false,
      today: new Date().toISOString().substr(0, 10),
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
      ],

      orderHeaders: [
        { text: 'Order #', value: 'ticketNumber', sortable: false },
        { text: 'Status', value: 'status', sortable: true },
        { text: 'Items', value: 'items', sortable: false },
        { text: 'Total', value: 'total', sortable: true },
        { text: 'Payment', value: 'paymentStatus', sortable: true },
        { text: 'Time', value: 'createdAt', sortable: true },
        { text: 'Staff', value: 'createUser', sortable: false }
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
        colors: ['#1976D2', '#4CAF50'], // Primary and Success colors
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
      const revenueData = this.getRevenueData()
      const profitData = this.getProfitData()
      
      return [
        {
          name: 'Revenue',
          data: revenueData
        },
        {
          name: 'Profit',
          data: profitData
        }
      ]
    },

    // Order Status Chart Configuration
    orderStatusChartOptions() {
      return {
        chart: {
          type: 'donut'
        },
        labels: ['Pending', 'Preparing', 'Completed', 'Cancelled'],
        colors: ['#FF9800', '#2196F3', '#4CAF50', '#F44336'],
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
      return [
        orders.pending || 0,
        orders.preparing || 0,
        orders.completed || 0,
        orders.cancelled || 0
      ]
    },

    // Category Performance Chart
    categoryChartOptions() {
      return {
        chart: {
          type: 'bar',
          toolbar: { show: false }
        },
        colors: ['#4CAF50'],
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
        colors: ['#FF9800'],
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
    this.today = new Date().toISOString().substr(0, 10)
    console.log('Dashboard mounted - Today is:', this.today)
    
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
        console.log('Loading dashboard data...')
        const dateRange = this.getDateRange()
        
        console.log('Date range:', dateRange)
        
        const response = await this.$axios.get('/api/ticket/find', {
          params: {
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            include: 'client,table,ticketLines,payment,createUser'
          }
        })

        console.log('API Response:', response.data)

        if (response.data) {
          const tickets = response.data.data || response.data.tickets || response.data || []
          console.log('Tickets found:', tickets.length)
          
          this.dashboardData = this.processDashboardData(tickets)
          this.recentOrders = tickets.slice(0, 10)
          
          console.log('Dashboard data processed:', this.dashboardData)
          
          await this.loadComparisonData()
          
          if (this.$toast) {
            this.$toast.success('Dashboard data loaded successfully')
          }
        } else {
          throw new Error('No data received from API')
        }
        
      } catch (error) {
        this.error = error.message || 'An error occurred while loading dashboard data'
        console.error('Dashboard loading error:', error)
        if (this.$toast) {
          this.$toast.error('Failed to load dashboard data: ' + error.message)
        }
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

        if (response.data) {
          const tickets = response.data.data || response.data.tickets || response.data || []
          const previousData = this.processDashboardData(tickets)
          this.comparisonData = this.calculateComparison(this.dashboardData, previousData)
        }
      } catch (error) {
        console.error('Failed to load comparison data:', error)
      }
    },

    // Chart data methods
    getChartCategories() {
      switch (this.selectedPeriod) {
        case 'today':
        case 'yesterday':
          return Array.from({length: 24}, (_, i) => `${i}:00`)
        case 'this_week':
        case 'last_week':
          return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        default:
          return Array.from({length: 30}, (_, i) => `Day ${i + 1}`)
      }
    },

    getRevenueData() {
      switch (this.selectedPeriod) {
        case 'today':
        case 'yesterday':
          // Return hourly revenue data
          const hourlyRevenue = Array(24).fill(0)
          if (this.dashboardData?.orders.hourlyDistribution) {
            this.dashboardData.orders.hourlyDistribution.forEach((orders, hour) => {
              hourlyRevenue[hour] = orders * (this.dashboardData.financial.averageOrderValue || 0)
            })
          }
          return hourlyRevenue
        case 'this_week':
        case 'last_week':
          // Mock weekly data - you can enhance this with real daily breakdowns
          const avgDaily = this.dashboardData?.financial.totalRevenue / 7 || 0
          return Array(7).fill(0).map(() => avgDaily * (0.8 + Math.random() * 0.4))
        default:
          // Mock monthly data - you can enhance this with real daily breakdowns
          const avgDailyMonth = this.dashboardData?.financial.totalRevenue / 30 || 0
          return Array(30).fill(0).map(() => avgDailyMonth * (0.8 + Math.random() * 0.4))
      }
    },

    getProfitData() {
      const revenueData = this.getRevenueData()
      const profitMargin = (this.dashboardData?.financial.profitMargin || 20) / 100
      return revenueData.map(revenue => revenue * profitMargin)
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

    // All other methods remain the same...
    handlePeriodChange() {
      console.log('Period changed to:', this.selectedPeriod)
      if (this.selectedPeriod !== 'custom' && this.selectedPeriod !== 'between_dates') {
        this.updateDateRangeDisplay()
        this.loadDashboardData()
      }
    },

    applyDateRange() {
      if (this.customStartDate && this.customEndDate) {
        this.updateDateRangeDisplay()
        this.loadDashboardData()
      } else {
        if (this.$toast) {
          this.$toast.error('Please select both start and end dates')
        } else {
          alert('Please select both start and end dates')
        }
      }
    },

    clearDateRange() {
      this.customStartDate = ''
      this.customEndDate = ''
      this.startDateFormatted = ''
      this.endDateFormatted = ''
      this.dateRangeDisplay = ''
      this.selectedPeriod = 'current_month'
      this.updateDateRangeDisplay()
      this.loadDashboardData()
    },

    setQuickRange(range) {
      const now = new Date()
      const today = this.getCurrentLocalDate()
      
      switch (range) {
        case 'last7days':
          const last7Days = new Date(now)
          last7Days.setDate(now.getDate() - 7)
          this.customStartDate = this.formatDateToISO(last7Days)
          this.customEndDate = today
          break
          
        case 'last30days':
          const last30Days = new Date(now)
          last30Days.setDate(now.getDate() - 30)
          this.customStartDate = this.formatDateToISO(last30Days)
          this.customEndDate = today
          break
          
        case 'last90days':
          const last90Days = new Date(now)
          last90Days.setDate(now.getDate() - 90)
          this.customStartDate = this.formatDateToISO(last90Days)
          this.customEndDate = today
          break
          
        case 'thisyear':
          const startOfYear = new Date(now.getFullYear(), 0, 1)
          this.customStartDate = this.formatDateToISO(startOfYear)
          this.customEndDate = today
          break
      }
      
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
              month: 'short',
              day: 'numeric'
            })
          }
          
          this.dateRangeDisplay = `${formatDate(startDate)} - ${formatDate(endDate)}`
          
          const diffTime = Math.abs(endDate - startDate)
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
          this.dateRangeDisplay += ` (${diffDays} day${diffDays !== 1 ? 's' : ''})`
        } else {
          this.dateRangeDisplay = 'Select date range'
        }
      } else {
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
            month: 'short',
            day: 'numeric'
          })
        } else {
          this.dateRangeDisplay = `${formatDate(startDate)} - ${formatDate(endDate)}`
        }
      }
    },

    setupRealTimeUpdates() {
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
      
      if ((targetPeriod === 'custom' || targetPeriod === 'between_dates') && this.customStartDate && this.customEndDate) {
        return {
          startDate: this.customStartDate,
          endDate: this.customEndDate
        }
      }
      
      switch (targetPeriod) {
        case 'today':
          return { startDate: today, endDate: today }
        case 'yesterday':
          const yesterday = new Date(now)
          yesterday.setDate(now.getDate() - 1)
          const yesterdayFormatted = this.formatDateToISO(yesterday)
          return { startDate: yesterdayFormatted, endDate: yesterdayFormatted }
        case 'current_month':
          const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
          return { startDate: this.formatDateToISO(startOfMonth), endDate: today }
        default:
          const defaultStart = new Date(now.getFullYear(), now.getMonth(), 1)
          return { startDate: this.formatDateToISO(defaultStart), endDate: today }
      }
    },

    getPreviousPeriod() {
      switch (this.selectedPeriod) {
        case 'today': return 'yesterday'
        case 'this_week': return 'last_week'
        case 'current_month': return 'last_month'
        default: return 'last_month'
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
          byStatus: { pending: 0, preparing: 0, completed: 0, cancelled: 0 },
          byPaymentStatus: { pending: 0, completed: 0, failed: 0 },
          hourlyDistribution: Array(24).fill(0)
        },
        products: {
          topSelling: [],
          topRevenue: [],
          lowStock: [],
          categoryPerformance: []
        },
        alerts: []
      }

      const productStats = {}
      const categoryStats = {}

      tickets.forEach((ticket, index) => {
        console.log(`Processing ticket ${index + 1}/${tickets.length}: ${ticket.ticketNumber}`)
        
        metrics.financial.totalRevenue += ticket.total || 0
        metrics.financial.totalSubtotal += ticket.subtotal || 0
        metrics.financial.totalTax += ticket.tax || 0
        
        const paymentStatus = ticket.paymentStatus?.toLowerCase() || 'unknown'
        if (paymentStatus === 'pending') {
          metrics.financial.pendingPayments += ticket.total || 0
          metrics.orders.byPaymentStatus.pending++
        } else if (paymentStatus === 'completed' || paymentStatus === 'paid') {
          metrics.financial.completedPayments += ticket.total || 0
          metrics.orders.byPaymentStatus.completed++
        }
        
        const orderStatus = ticket.status?.toLowerCase()?.trim() || 'pending'
        switch (orderStatus) {
          case 'pending': metrics.orders.byStatus.pending++; break
          case 'preparing': metrics.orders.byStatus.preparing++; break
          case 'paid':
          case 'completed':
          case 'complete': metrics.orders.byStatus.completed++; break
          case 'cancelled':
          case 'canceled': metrics.orders.byStatus.cancelled++; break
          default: metrics.orders.byStatus.pending++; break
        }
        
        const orderHour = new Date(ticket.createdAt).getHours()
        if (orderHour >= 0 && orderHour < 24) {
          metrics.orders.hourlyDistribution[orderHour]++
        }

        if (ticket.ticketLines && Array.isArray(ticket.ticketLines)) {
          ticket.ticketLines.forEach(line => {
            const product = line.product
            if (!product) return
            
            const productId = product.id
            const categoryName = product.category?.categ_name || 'Unknown'
            
            if (!productStats[productId]) {
              productStats[productId] = {
                id: productId,
                name: product.pro_name,
                category: categoryName,
                totalQuantity: 0,
                totalRevenue: 0,
                totalProfit: 0
              }
            }
            
            productStats[productId].totalQuantity += line.quantity || 0
            productStats[productId].totalRevenue += line.totalPrice || 0
            
            if (!categoryStats[categoryName]) {
              categoryStats[categoryName] = {
                name: categoryName,
                totalRevenue: 0,
                totalProfit: 0
              }
            }
            
            categoryStats[categoryName].totalRevenue += line.totalPrice || 0
          })
        }
      })

      metrics.financial.averageOrderValue = metrics.financial.totalOrders > 0 
        ? metrics.financial.totalRevenue / metrics.financial.totalOrders 
        : 0
      
      metrics.financial.totalProfit = Object.values(productStats).reduce((sum, product) => sum + product.totalProfit, 0)
      metrics.financial.profitMargin = metrics.financial.totalRevenue > 0 
        ? (metrics.financial.totalProfit / metrics.financial.totalRevenue) * 100 
        : 0

      const productsArray = Object.values(productStats)
      
      metrics.products.topSelling = productsArray
        .sort((a, b) => b.totalQuantity - a.totalQuantity)
        .slice(0, 10)
      
      metrics.products.topRevenue = productsArray
        .sort((a, b) => b.totalRevenue - a.totalRevenue)
        .slice(0, 10)

      metrics.products.categoryPerformance = Object.values(categoryStats)
        .sort((a, b) => b.totalRevenue - a.totalRevenue)

      console.log('Final processed data:', metrics)
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

    // Helper methods for styling
    getStatusColor(status) {
      const statusMap = {
        pending: 'warning',
        preparing: 'info',
        completed: 'success',
        paid: 'success',
        cancelled: 'error',
        canceled: 'error'
      }
      return statusMap[status?.toLowerCase()] || 'grey'
    },

    getPaymentStatusColor(status) {
      const statusMap = {
        pending: 'warning',
        completed: 'success',
        paid: 'success',
        failed: 'error',
        refunded: 'info'
      }
      return statusMap[status?.toLowerCase()] || 'grey'
    },

    getProductRankColor(index) {
      const colors = ['success', 'secondary', 'warning', 'info', 'primary']
      return colors[index % colors.length]
    },

    // Utility methods
    formatCurrency(amount) {
      if (!amount) return '0 ₭'
      if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1) + 'M ₭'
      } else if (amount >= 1000) {
        return (amount / 1000).toFixed(1) + 'K ₭'
      }
      return new Intl.NumberFormat().format(amount) + ' ₭'
    },

    formatTime(timestamp) {
      if (!timestamp) return ''
      return new Date(timestamp).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
    },

    formatDate(timestamp) {
      if (!timestamp) return ''
      return new Date(timestamp).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    getCurrentLocalDate() {
      const now = new Date()
      return this.formatDateToISO(now)
    },

    updateStartDateFormatted() {
      if (this.customStartDate) {
        this.startDateFormatted = this.formatDate(this.customStartDate)
        this.updateDateRangeDisplay()
      }
    },

    updateEndDateFormatted() {
      if (this.customEndDate) {
        this.endDateFormatted = this.formatDate(this.customEndDate)
        this.updateDateRangeDisplay()
      }
    },

    parseDate(date) {
      if (!date) return ''
      const [month, day, year] = date.split('/')
      if (month && day && year) {
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
      return date
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
/* All the same CSS as before */
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

.loading-container, .error-container, .default-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
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

.metric-card {
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-4px);
}

.alert-card {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 193, 7, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 193, 7, 0); }
}

.charts-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.chart-container {
  transition: all 0.3s ease;
}

.chart-container:hover {
  transform: translateY(-2px);
}

.chart-placeholder {
  text-align: center;
  padding: 2rem;
  background: #fafafa;
  border-radius: 8px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.order-status-summary {
  padding: 1rem;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.analytics-card {
  transition: all 0.3s ease;
}

.analytics-card:hover {
  transform: translateY(-2px);
}

.hourly-summary {
  padding: 1rem 0;
}

.hourly-item {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.hourly-item:hover {
  background: rgba(0, 0, 0, 0.1);
}

.recent-orders-section {
  margin-bottom: 2rem;
}

.orders-table >>> tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.04) !important;
}

.items-summary {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

  .items-summary {
    max-width: 120px;
  }
}
</style>