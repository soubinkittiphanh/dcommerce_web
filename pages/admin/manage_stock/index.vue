<template>
  <div class="stock-summary">
    <!-- Header -->
    <div class="page-header">
      <div class="header-content primary rounded pa-4 mr-4">
        <h1 class="page-title">
          <v-icon large color="white" class="mr-3">mdi-chart-line</v-icon>
          Stock Summary & Analytics
        </h1>
        <p class="page-subtitle">Comprehensive inventory overview and insights</p>
      </div>
      <div class="header-actions">
        <v-btn
          @click="refreshData"
          class="mr-2 info"
          text
          :loading="loading"
        >
          <v-icon left>mdi-refresh</v-icon>
          Refresh
        </v-btn>
        <v-btn
          @click="exportSummaryReport"
          class="mr-2 success"
          text
        >
          <v-icon left>mdi-download</v-icon>
          Export Report
        </v-btn>
        <v-btn
          @click="goToStockManagement"
          class="warning"
          text
        >
          <v-icon left>mdi-package-variant-plus</v-icon>
          Manage Stock
        </v-btn>
      </div>
    </div>

    <!-- Key Metrics Cards -->
    <v-row class="mb-4">
      <v-col cols="12" md="3" v-for="(metric, index) in keyMetrics" :key="index">
        <v-card class="metric-card" elevation="3" :color="metric.color" dark>
          <v-card-text>
            <div class="d-flex align-center">
              <v-avatar size="70" color="white" class="mr-4">
                <v-icon size="35" :color="metric.color">{{ metric.icon }}</v-icon>
              </v-avatar>
              <div class="metric-content">
                <h2 class="metric-value">{{ formatMetricValue(metric.value, metric.type) }}</h2>
                <p class="metric-label">{{ metric.label }}</p>
                <div v-if="metric.trend" class="metric-trend">
                  <v-icon small :color="metric.trend.direction === 'up' ? 'success' : 'error'">
                    {{ metric.trend.direction === 'up' ? 'mdi-trending-up' : 'mdi-trending-down' }}
                  </v-icon>
                  <span class="trend-text">{{ metric.trend.percentage }}%</span>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Stock Status Overview -->
    <v-row class="mb-4">
      <v-col cols="12" md="8">
        <v-card elevation="2">
          <v-card-title class="stock-overview-title">
            <v-icon class="mr-2">mdi-chart-donut</v-icon>
            Stock Status Distribution
            <v-spacer></v-spacer>
            <v-btn icon small @click="refreshStockDistribution">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center">
              <!-- Donut Chart Placeholder -->
              <div class="chart-container">
                <canvas ref="stockChart" width="300" height="300"></canvas>
              </div>
              <div class="chart-legend ml-6">
                <div v-for="(status, index) in stockStatusData" :key="index" class="legend-item">
                  <div class="legend-color" :style="{ backgroundColor: status.color }"></div>
                  <div class="legend-content">
                    <div class="legend-label">{{ status.label }}</div>
                    <div class="legend-value">{{ status.count }} items ({{ status.percentage }}%)</div>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <!-- Top Alerts -->
      <v-col cols="12" md="4">
        <v-card elevation="2" class="alerts-card">
          <v-card-title class="alerts-title error">
            <v-icon color="white" class="mr-2">mdi-alert-circle</v-icon>
            <span class="white--text">Stock Alerts</span>
          </v-card-title>
          <v-card-text class="pa-0">
            <v-list dense>
              <v-list-item 
                v-for="(alert, index) in stockAlerts" 
                :key="index"
                @click="goToProduct(alert.product)"
                class="alert-item"
              >
                <v-list-item-avatar>
                  <v-icon :color="alert.severity">{{ alert.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ alert.product.pro_name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ alert.message }} - Stock: {{ formatNumber(alert.product.pro_card_count || 0) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-chip x-small :color="alert.severity" outlined>
                    {{ alert.type }}
                  </v-chip>
                </v-list-item-action>
              </v-list-item>
              
              <v-list-item v-if="stockAlerts.length === 0">
                <v-list-item-content>
                  <v-list-item-title class="text-center success--text">
                    <v-icon color="success">mdi-check-circle</v-icon>
                    No alerts - All stock levels are healthy!
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Category Analysis -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title>
            <v-icon class="mr-2">mdi-shape</v-icon>
            Category Performance Analysis
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="categoryHeaders"
              :items="categoryAnalysis"
              :loading="loadingCategories"
              class="category-table"
              hide-default-footer
            >
              <template v-slot:item.category="{ item }">
                <div class="category-info">
                  <v-chip :color="getCategoryColor(item.category)" outlined class="mr-2">
                    <v-icon left x-small>{{ getCategoryIcon(item.category) }}</v-icon>
                    {{ item.category }}
                  </v-chip>
                </div>
              </template>

              <template v-slot:item.totalProducts="{ item }">
                <strong>{{ formatNumber(item.totalProducts) }}</strong>
              </template>

              <template v-slot:item.totalStock="{ item }">
                <span class="stock-value">{{ formatNumber(item.totalStock) }}</span>
              </template>

              <template v-slot:item.totalValue="{ item }">
                <strong class="value-amount">{{ formatCurrency(item.totalValue) }}</strong>
              </template>

              <template v-slot:item.lowStockItems="{ item }">
                <v-chip 
                  small 
                  :color="item.lowStockItems > 0 ? 'warning' : 'success'"
                  :outlined="item.lowStockItems === 0"
                >
                  {{ item.lowStockItems }}
                </v-chip>
              </template>

              <template v-slot:item.outOfStockItems="{ item }">
                <v-chip 
                  small 
                  :color="item.outOfStockItems > 0 ? 'error' : 'success'"
                  :outlined="item.outOfStockItems === 0"
                >
                  {{ item.outOfStockItems }}
                </v-chip>
              </template>

              <template v-slot:item.averageStockLevel="{ item }">
                <div class="stock-level-bar">
                  <v-progress-linear
                    :value="item.averageStockLevel"
                    :color="getStockLevelColor(item.averageStockLevel)"
                    height="20"
                    rounded
                  >
                    <small class="white--text">{{ Math.round(item.averageStockLevel) }}%</small>
                  </v-progress-linear>
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-btn icon small @click="viewCategoryDetails(item)">
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Recent Stock Movements -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title>
            <v-icon class="mr-2">mdi-history</v-icon>
            Recent Stock Movements
            <v-spacer></v-spacer>
            <v-btn small text @click="viewAllMovements">
              View All
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="movementHeaders"
              :items="recentMovements"
              :loading="loadingMovements"
              class="movements-table"
              hide-default-footer
              :items-per-page="10"
            >
              <template v-slot:item.product="{ item }">
                <div class="movement-product">
                  <strong>{{ item.product.pro_name }}</strong>
                  <br>
                  <small class="text-grey">{{ item.product.pro_desc }}</small>
                </div>
              </template>

              <template v-slot:item.type="{ item }">
                <v-chip :color="getMovementTypeColor(item.type)" dark small>
                  <v-icon left x-small>{{ getMovementTypeIcon(item.type) }}</v-icon>
                  {{ item.type }}
                </v-chip>
              </template>

              <template v-slot:item.change="{ item }">
                <span :class="item.change > 0 ? 'success--text' : 'error--text'">
                  {{ item.change > 0 ? '+' : '' }}{{ formatNumber(Math.abs(item.change)) }}
                  <small>{{ item.unit?.symbol || '' }}</small>
                </span>
              </template>

              <template v-slot:item.newStock="{ item }">
                <strong>{{ formatNumber(item.newStock) }}</strong>
                <small class="text-grey">{{ item.unit?.symbol || '' }}</small>
              </template>

              <template v-slot:item.value="{ item }">
                <span v-if="item.value">{{ formatCurrency(item.value) }}</span>
                <span v-else class="text-grey">--</span>
              </template>

              <template v-slot:item.date="{ item }">
                <div class="date-info">
                  {{ formatDate(item.createdAt) }}
                  <br>
                  <small class="text-grey">{{ formatTime(item.createdAt) }}</small>
                </div>
              </template>

              <template v-slot:item.user="{ item }">
                <div class="user-info">
                  <v-avatar size="24" class="mr-1">
                    <v-icon size="16">mdi-account</v-icon>
                  </v-avatar>
                  {{ item.user?.name || 'System' }}
                </div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Top Performing Products -->
    <v-row class="mb-4">
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title class="success">
            <v-icon color="white" class="mr-2">mdi-trending-up</v-icon>
            <span class="white--text">Top Stock Value Products</span>
          </v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item 
                v-for="(product, index) in topValueProducts" 
                :key="index"
                @click="goToProduct(product)"
              >
                <v-list-item-avatar>
                  <v-chip color="success" outlined small>{{ index + 1 }}</v-chip>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ product.pro_name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    Stock: {{ formatNumber(product.pro_card_count) }} × {{ formatCurrency(product.pro_price) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <div class="text-right">
                    <strong class="success--text">{{ formatCurrency(product.stockValue) }}</strong>
                  </div>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title class="warning">
            <v-icon color="white" class="mr-2">mdi-trending-down</v-icon>
            <span class="white--text">Products Needing Attention</span>
          </v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item 
                v-for="(product, index) in productsNeedingAttention" 
                :key="index"
                @click="goToProduct(product)"
              >
                <v-list-item-avatar>
                  <v-icon :color="getAttentionLevelColor(product.attentionLevel)">
                    {{ getAttentionLevelIcon(product.attentionLevel) }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ product.pro_name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ product.reason }} - Stock: {{ formatNumber(product.pro_card_count || 0) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-chip x-small :color="getAttentionLevelColor(product.attentionLevel)" outlined>
                    {{ product.attentionLevel }}
                  </v-chip>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'StockSummary',
  
  data() {
    return {
      loading: false,
      loadingCategories: false,
      loadingMovements: false,
      
      // Key metrics
      keyMetrics: [
        { 
          label: 'Total Inventory Value', 
          value: 0, 
          type: 'currency', 
          icon: 'mdi-currency-usd', 
          color: 'success',
          trend: { direction: 'up', percentage: 12.5 }
        },
        { 
          label: 'Total Products', 
          value: 0, 
          type: 'number', 
          icon: 'mdi-package-variant', 
          color: 'primary',
          trend: { direction: 'up', percentage: 5.2 }
        },
        { 
          label: 'Low Stock Alerts', 
          value: 0, 
          type: 'number', 
          icon: 'mdi-alert-circle', 
          color: 'warning',
          trend: { direction: 'down', percentage: 8.1 }
        },
        { 
          label: 'Stock Turnover Rate', 
          value: 0, 
          type: 'percentage', 
          icon: 'mdi-rotate-3d-variant', 
          color: 'info',
          trend: { direction: 'up', percentage: 3.7 }
        }
      ],
      
      // Stock status data for chart
      stockStatusData: [
        { label: 'Normal Stock', count: 0, percentage: 0, color: '#4CAF50' },
        { label: 'Low Stock', count: 0, percentage: 0, color: '#FF9800' },
        { label: 'Out of Stock', count: 0, percentage: 0, color: '#F44336' },
        { label: 'Overstock', count: 0, percentage: 0, color: '#2196F3' }
      ],
      
      // Stock alerts
      stockAlerts: [],
      
      // Category analysis
      categoryAnalysis: [],
      categoryHeaders: [
        { text: 'Category', value: 'category', width: '150px' },
        { text: 'Products', value: 'totalProducts', align: 'center', width: '100px' },
        { text: 'Total Stock', value: 'totalStock', align: 'center', width: '120px' },
        { text: 'Total Value', value: 'totalValue', align: 'right', width: '120px' },
        { text: 'Low Stock', value: 'lowStockItems', align: 'center', width: '100px' },
        { text: 'Out of Stock', value: 'outOfStockItems', align: 'center', width: '100px' },
        { text: 'Stock Level', value: 'averageStockLevel', align: 'center', width: '150px' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center', width: '80px' }
      ],
      
      // Recent movements
      recentMovements: [],
      movementHeaders: [
        { text: 'Product', value: 'product', width: '200px' },
        { text: 'Type', value: 'type', align: 'center', width: '120px' },
        { text: 'Change', value: 'change', align: 'center', width: '100px' },
        { text: 'New Stock', value: 'newStock', align: 'center', width: '100px' },
        { text: 'Value', value: 'value', align: 'right', width: '100px' },
        { text: 'Date', value: 'date', align: 'center', width: '140px' },
        { text: 'User', value: 'user', align: 'center', width: '120px' }
      ],
      
      // Top products
      topValueProducts: [],
      productsNeedingAttention: []
    }
  },
  
  async created() {
    await this.loadAllData()
    this.initializeChart()
  },
  
  methods: {
    async loadAllData() {
      this.loading = true
      try {
        await Promise.all([
          this.loadKeyMetrics(),
          this.loadStockDistribution(),
          this.loadStockAlerts(),
          this.loadCategoryAnalysis(),
          this.loadRecentMovements(),
          this.loadTopProducts()
        ])
      } catch (error) {
        this.$toast.error('Error loading summary data')
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    
    async loadKeyMetrics() {
      try {
        const response = await this.$axios.get('/api/stock-transactions/statistics')
        if (response.data.success) {
          const metrics = response.data.data
          this.keyMetrics[0].value = metrics.totalStockValue || 0
          this.keyMetrics[1].value = metrics.totalProducts || 0
          this.keyMetrics[2].value = metrics.lowStockItems || 0
          this.keyMetrics[3].value = metrics.stockTurnoverRate || 0
        }
      } catch (error) {
        console.error('Error loading key metrics:', error)
      }
    },
    
    async loadStockDistribution() {
      try {
        const response = await this.$axios.get('/api/stock-transactions/statistics')
        if (response.data.success) {
          const data = response.data.data
          this.stockStatusData[0].count = data.normalStock || 0
          this.stockStatusData[1].count = data.lowStockItems || 0
          this.stockStatusData[2].count = data.outOfStockItems || 0
          this.stockStatusData[3].count = data.overstock || 0
          
          const total = this.stockStatusData.reduce((sum, item) => sum + item.count, 0)
          this.stockStatusData.forEach(item => {
            item.percentage = total > 0 ? Math.round((item.count / total) * 100) : 0
          })
          
          this.updateChart()
        }
      } catch (error) {
        console.error('Error loading stock distribution:', error)
      }
    },
    
    async loadStockAlerts() {
      try {
        // Get products with low stock or out of stock
        const response = await this.$axios.get('/api/product/find', {
          params: {
            stockLevel: 'low',
            limit: 10
          }
        })
        
        const products = response.data.data?.products || response.data.data || []
        this.stockAlerts = products.map(product => {
          const isOutOfStock = (product.pro_card_count || 0) === 0
          const isLowStock = (product.pro_card_count || 0) <= (product.pro_min_stock || 0)
          
          return {
            product,
            type: isOutOfStock ? 'OUT_OF_STOCK' : 'LOW_STOCK',
            message: isOutOfStock ? 'Out of stock' : 'Low stock level',
            severity: this.getAlertSeverity(isOutOfStock ? 'OUT_OF_STOCK' : 'LOW_STOCK'),
            icon: this.getAlertIcon(isOutOfStock ? 'OUT_OF_STOCK' : 'LOW_STOCK')
          }
        })
      } catch (error) {
        console.error('Error loading stock alerts:', error)
        this.stockAlerts = []
      }
    },
    
    async loadCategoryAnalysis() {
      this.loadingCategories = true
      try {
        // Get category analysis from product data
        const response = await this.$axios.get('/api/product/find', {
          params: { limit: 1000 }
        })
        
        const products = response.data.data?.products || response.data.data || []
        
        // Group by category and calculate statistics
        const categoryStats = {}
        products.forEach(product => {
          const category = product._category || 'Uncategorized'
          if (!categoryStats[category]) {
            categoryStats[category] = {
              category,
              totalProducts: 0,
              totalStock: 0,
              totalValue: 0,
              lowStockItems: 0,
              outOfStockItems: 0,
              averageStockLevel: 0
            }
          }
          
          const stats = categoryStats[category]
          stats.totalProducts++
          stats.totalStock += parseFloat(product.pro_card_count || 0)
          stats.totalValue += parseFloat(product.pro_card_count || 0) * parseFloat(product.pro_price || 0)
          
          if ((product.pro_card_count || 0) === 0) {
            stats.outOfStockItems++
          } else if ((product.pro_card_count || 0) <= (product.pro_min_stock || 0)) {
            stats.lowStockItems++
          }
          
          // Calculate average stock level percentage
          if (product.pro_min_stock && product.pro_max_stock) {
            const currentLevel = (product.pro_card_count || 0)
            const maxLevel = product.pro_max_stock
            stats.averageStockLevel += (currentLevel / maxLevel) * 100
          }
        })
        
        // Convert to array and calculate averages
        this.categoryAnalysis = Object.values(categoryStats).map(stats => ({
          ...stats,
          averageStockLevel: stats.totalProducts > 0 ? stats.averageStockLevel / stats.totalProducts : 0
        }))
        
      } catch (error) {
        console.error('Error loading category analysis:', error)
        this.categoryAnalysis = []
      } finally {
        this.loadingCategories = false
      }
    },
    
    async loadRecentMovements() {
      this.loadingMovements = true
      try {
        const response = await this.$axios.get('/api/stock-transactions/findAll', {
          params: { 
            limit: 10,
            sortBy: 'createdAt',
            sortOrder: 'DESC'
          }
        })
        
        this.recentMovements = (response.data.data?.transactions || response.data.data || []).map(transaction => ({
          id: transaction.id,
          product: transaction.product,
          type: transaction.transactionType.toUpperCase(),
          change: transaction.baseQuantityChange,
          newStock: transaction.baseQuantityAfter,
          value: transaction.totalCost,
          unit: transaction.transactionUnit,
          createdAt: transaction.createdAt,
          user: { name: 'User' } // Add user data if available
        }))
      } catch (error) {
        console.error('Error loading recent movements:', error)
        this.recentMovements = []
      } finally {
        this.loadingMovements = false
      }
    },
    
    async loadTopProducts() {
      try {
        // Get all products and calculate top performers
        const response = await this.$axios.get('/api/product/find', {
          params: { limit: 1000 }
        })
        
        const products = response.data.data?.products || response.data.data || []
        
        // Calculate stock value for each product
        const productsWithValue = products.map(product => ({
          ...product,
          stockValue: (product.pro_card_count || 0) * (product.pro_price || 0)
        }))
        
        // Sort by stock value and get top 5
        this.topValueProducts = productsWithValue
          .filter(p => p.stockValue > 0)
          .sort((a, b) => b.stockValue - a.stockValue)
          .slice(0, 5)
        
        // Find products needing attention (low stock, out of stock)
        this.productsNeedingAttention = products
          .filter(product => {
            const currentStock = product.pro_card_count || 0
            const minStock = product.pro_min_stock || 0
            return currentStock === 0 || currentStock <= minStock
          })
          .map(product => ({
            ...product,
            attentionLevel: (product.pro_card_count || 0) === 0 ? 'CRITICAL' : 'HIGH',
            reason: (product.pro_card_count || 0) === 0 ? 'Out of stock' : 'Low stock level'
          }))
          .slice(0, 5)
        
      } catch (error) {
        console.error('Error loading top products:', error)
      }
    },
    
    // Chart methods
    initializeChart() {
      this.$nextTick(() => {
        this.updateChart()
      })
    },
    
    updateChart() {
      const canvas = this.$refs.stockChart
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 100
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw donut chart
      let startAngle = -Math.PI / 2
      const total = this.stockStatusData.reduce((sum, item) => sum + item.count, 0)
      
      if (total === 0) {
        // Draw empty state
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        ctx.fillStyle = '#e0e0e0'
        ctx.fill()
        
        // Draw center text
        ctx.fillStyle = '#666'
        ctx.font = '16px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('No Data', centerX, centerY)
        return
      }
      
      this.stockStatusData.forEach(item => {
        if (item.count > 0) {
          const angle = (item.count / total) * 2 * Math.PI
          
          ctx.beginPath()
          ctx.arc(centerX, centerY, radius, startAngle, startAngle + angle)
          ctx.arc(centerX, centerY, radius - 30, startAngle + angle, startAngle, true)
          ctx.closePath()
          ctx.fillStyle = item.color
          ctx.fill()
          
          startAngle += angle
        }
      })
      
      // Draw center text
      ctx.fillStyle = '#333'
      ctx.font = 'bold 20px Arial'
      ctx.textAlign = 'center'
      ctx.fillText(total, centerX, centerY - 5)
      ctx.font = '12px Arial'
      ctx.fillText('Total Products', centerX, centerY + 15)
    },
    
    // Utility methods
    getAlertSeverity(type) {
      const severityMap = {
        'OUT_OF_STOCK': 'error',
        'LOW_STOCK': 'warning',
        'EXPIRED': 'error',
        'NEAR_EXPIRY': 'warning'
      }
      return severityMap[type] || 'info'
    },
    
    getAlertIcon(type) {
      const iconMap = {
        'OUT_OF_STOCK': 'mdi-close-circle',
        'LOW_STOCK': 'mdi-alert-circle',
        'EXPIRED': 'mdi-calendar-remove',
        'NEAR_EXPIRY': 'mdi-calendar-alert'
      }
      return iconMap[type] || 'mdi-information'
    },
    
    getCategoryColor(category) {
      const colors = {
        'food': 'green',
        'beverage': 'blue',
        'stock': 'orange',
        'equipment': 'purple',
        'cleaning': 'teal',
        'packaging': 'indigo'
      }
      return colors[category?.toLowerCase()] || 'grey'
    },
    
    getCategoryIcon(category) {
      const icons = {
        'food': 'mdi-food',
        'beverage': 'mdi-cup',
        'stock': 'mdi-package',
        'equipment': 'mdi-tools',
        'cleaning': 'mdi-spray-bottle',
        'packaging': 'mdi-package-variant'
      }
      return icons[category?.toLowerCase()] || 'mdi-shape'
    },
    
    getStockLevelColor(percentage) {
      if (percentage >= 80) return 'success'
      if (percentage >= 60) return 'warning'
      return 'error'
    },
    
    getMovementTypeColor(type) {
      const colors = {
        'INCREASE': 'success',
        'DECREASE': 'warning',
        'ADJUSTMENT': 'info',
        'SALE': 'primary',
        'RETURN': 'purple',
        'TRANSFER': 'teal'
      }
      return colors[type] || 'grey'
    },
    
    getMovementTypeIcon(type) {
      const icons = {
        'INCREASE': 'mdi-plus-circle',
        'DECREASE': 'mdi-minus-circle',
        'ADJUSTMENT': 'mdi-pencil-circle',
        'SALE': 'mdi-cart',
        'RETURN': 'mdi-undo',
        'TRANSFER': 'mdi-transfer'
      }
      return icons[type] || 'mdi-circle'
    },
    
    getAttentionLevelColor(level) {
      const colors = {
        'CRITICAL': 'error',
        'HIGH': 'warning',
        'MEDIUM': 'info'
      }
      return colors[level] || 'grey'
    },
    
    getAttentionLevelIcon(level) {
      const icons = {
        'CRITICAL': 'mdi-alert-circle',
        'HIGH': 'mdi-alert',
        'MEDIUM': 'mdi-information'
      }
      return icons[level] || 'mdi-circle'
    },
    
    // Navigation methods
    goToProduct(product) {
      this.$router.push(`/inventory/product/${product.id}`)
    },
    
    goToStockManagement() {
      this.$router.push('/admin/inventory/stock-management')
    },
    
    viewCategoryDetails(category) {
      this.$router.push(`/inventory/category/${category.id || category.category}`)
    },
    
    viewAllMovements() {
      this.$router.push('/inventory/movements')
    },
    
    // Action methods
    async refreshData() {
      await this.loadAllData()
      this.$toast.success('Data refreshed successfully')
    },
    
    refreshStockDistribution() {
      this.loadStockDistribution()
    },
    
    async exportSummaryReport() {
      try {
        const response = await this.$axios.get('/api/inventory/summary-report', {
          responseType: 'blob'
        })
        
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `inventory-summary-${new Date().toISOString().substr(0, 10)}.xlsx`)
        document.body.appendChild(link)
        link.click()
        link.remove()
        
        this.$toast.success('Summary report exported successfully')
      } catch (error) {
        this.$toast.error('Error exporting summary report')
        console.error(error)
      }
    },
    
    // Formatting methods
    formatMetricValue(value, type) {
      if (type === 'currency') return this.formatCurrency(value)
      if (type === 'percentage') return `${Math.round(value)}%`
      return this.formatNumber(value)
    },
    
    formatNumber(amount) {
      const num = parseFloat(amount || 0)
      return num.toLocaleString('en-US', {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
      })
    },
    
    formatCurrency(amount) {
      return parseFloat(amount || 0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    },
    
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    
    formatTime(date) {
      return new Date(date).toLocaleTimeString()
    }
  }
}
</script>

<style scoped>
.stock-summary {
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f5f7fa;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  min-height: 120px;
  flex-wrap: nowrap;
}

.header-content {
  flex: 1;
  min-width: 0;
  color: white;
}

.page-title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.page-subtitle {
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 16px;
}

.header-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.metric-card {
  transition: transform 0.2s ease;
  height: 140px;
}

.metric-card:hover {
  transform: translateY(-4px);
}

.metric-content {
  flex: 1;
}

.metric-value {
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 4px 0;
}

.metric-label {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

.metric-trend {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.trend-text {
  font-size: 12px;
  margin-left: 4px;
  font-weight: 500;
}

.stock-overview-title,
.alerts-title {
  color: white;
  font-weight: 600;
}

.chart-container {
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-legend {
  flex: 1;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 12px;
}

.legend-content {
  flex: 1;
}

.legend-label {
  font-weight: 600;
  font-size: 14px;
}

.legend-value {
  font-size: 12px;
  color: #666;
}

.alerts-card .v-list-item {
  cursor: pointer;
  transition: background-color 0.2s;
}

.alerts-card .v-list-item:hover {
  background-color: #f5f5f5;
}

.alert-item {
  border-bottom: 1px solid #eeeeee;
}

.category-table,
.movements-table {
  background: white;
  border-radius: 8px;
}

.category-info {
  display: flex;
  align-items: center;
}

.stock-value {
  font-family: 'Roboto Mono', monospace;
}

.value-amount {
  color: #2e7d32;
  font-family: 'Roboto Mono', monospace;
}

.stock-level-bar {
  min-width: 120px;
}

.movement-product {
  min-width: 180px;
}

.date-info {
  min-width: 120px;
  text-align: center;
}

.user-info {
  display: flex;
  align-items: center;
}

/* Responsive Design */
@media (max-width: 960px) {
  .page-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
    min-height: auto;
    padding: 20px;
  }

  .page-title {
    font-size: 24px;
    justify-content: center;
  }

  .header-actions {
    justify-content: center;
    width: 100%;
  }

  .metric-value {
    font-size: 24px;
  }

  .chart-container {
    min-width: 250px;
  }
}

@media (max-width: 768px) {
  .stock-summary {
    padding: 16px;
  }

  .page-title {
    font-size: 20px;
    flex-direction: column;
    gap: 8px;
  }

  .header-actions {
    flex-direction: column;
    width: 100%;
  }

  .chart-container {
    margin-bottom: 16px;
  }

  .legend-item {
    margin-bottom: 12px;
  }
}

@media (max-width: 600px) {
  .page-title {
    white-space: normal;
  }
  
  .page-subtitle {
    white-space: normal;
  }
}
</style>