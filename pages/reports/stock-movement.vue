<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between mb-6">
          <div>
            <h1 class="font-weight-bold primary--text mb-2">
              ການເຄື່ອນໄຫວສະຕັອກ
            </h1>
            <p class="text-subtitle-1 text--secondary mb-0">
              Track inventory movements by location and date
            </p>
          </div>
          <v-chip
            color="primary"
            outlined
            large
          >
            <v-icon left>mdi-chart-line</v-icon>
            Analytics
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <!-- Filters Section -->
    <v-card class="mb-6" elevation="2">
      <v-card-title class="primary white--text">
        <v-icon left color="white">mdi-filter-variant</v-icon>
        Filters & Settings
      </v-card-title>
      <v-card-text class="pa-6">
        <v-row>
          <!-- Date Range -->
          <v-col cols="12" md="6" lg="4">
            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-medium mb-3 primary--text">
                <v-icon small color="primary" class="mr-2">mdi-calendar-range</v-icon>
                Date Range
              </h4>
              <v-row dense>
                <v-col cols="6">
                  <v-text-field
                    v-model="dateFrom"
                    type="date"
                    label="From Date"
                    outlined
                    dense
                    hide-details
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="dateTo"
                    type="date"
                    label="To Date"
                    outlined
                    dense
                    hide-details
                  />
                </v-col>
              </v-row>
            </div>
          </v-col>

          <!-- Location Filter -->
          <v-col cols="12" md="6" lg="4">
            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-medium mb-3 primary--text">
                <v-icon small color="primary" class="mr-2">mdi-map-marker</v-icon>
                Location
              </h4>
              <v-select
                v-model="selectedLocation"
                :items="locationOptions"
                label="Select Location"
                outlined
                dense
                hide-details
                clearable
                @change="generateReport"
              />
            </div>
          </v-col>

          <!-- Category Filter -->
          <v-col cols="12" md="6" lg="4">
            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-medium mb-3 primary--text">
                <v-icon small color="primary" class="mr-2">mdi-tag</v-icon>
                Category
              </h4>
              <v-select
                v-model="selectedCategory"
                :items="categoryOptions"
                label="Select Category"
                outlined
                dense
                hide-details
                clearable
                @change="generateReport"
              />
            </div>
          </v-col>

          <!-- Product Search -->
          <v-col cols="12" md="6" lg="4">
            <div class="mb-4">
              <h4 class="text-subtitle-1 font-weight-medium mb-3 primary--text">
                <v-icon small color="primary" class="mr-2">mdi-magnify</v-icon>
                Search
              </h4>
              <v-text-field
                v-model="productSearch"
                label="Search products..."
                outlined
                dense
                hide-details
                prepend-inner-icon="mdi-magnify"
                @input="filterProducts"
              />
            </div>
          </v-col>

          <!-- Action Buttons -->
          <v-col cols="12" md="6" lg="8" class="d-flex align-end">
            <div class="d-flex gap-3">
              <v-btn
                color="primary"
                :loading="loading"
                @click="generateReport"
                large
              >
                <v-icon left>mdi-chart-bar</v-icon>
                Generate Report
              </v-btn>
              
              <v-btn
                v-if="!loading && filteredStockMovements.length > 0"
                color="secondary"
                outlined
                @click="exportToCSV"
              >
                <v-icon left>mdi-download</v-icon>
                Export CSV
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Loading State -->
    <v-card v-if="loading" class="text-center pa-12 mb-6" elevation="2">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
        class="mb-4"
      />
      <h3 class="text-h6 primary--text">Loading stock movement data...</h3>
      <p class="text-body-2 text--secondary">This may take a few moments</p>
    </v-card>

    <!-- Error State -->
    <v-alert
      v-if="error && !loading"
      type="error"
      prominent
      border="left"
      class="mb-6"
    >
      <v-row align="center">
        <v-col class="grow">
          <div class="text-h6">Error Loading Data</div>
          <div>{{ error }}</div>
        </v-col>
        <v-col class="shrink">
          <v-btn color="error" @click="generateReport">
            Try Again
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>

    <!-- Main Data Table -->
    <v-card v-if="!loading && !error" class="mb-6" elevation="3">
      <!-- Table Header -->
      <v-card-title class="primary white--text">
        <div class="d-flex justify-space-between align-center w-100">
          <div class="d-flex align-center">
            <v-icon left color="white">mdi-table</v-icon>
            Stock Movements: {{ formatDateRange() }}
          </div>
          
          <!-- Legend -->
          <div class="d-flex gap-3">
            <v-chip color="success" small outlined dark>
              <v-icon left small>mdi-arrow-up</v-icon>
              Stock In
            </v-chip>
            <v-chip color="error" small outlined dark>
              <v-icon left small>mdi-arrow-down</v-icon>
              Sold
            </v-chip>
            <v-chip color="info" small outlined dark>
              <v-icon left small>mdi-scale-balance</v-icon>
              Balance
            </v-chip>
          </div>
        </div>
      </v-card-title>

      <!-- Data Table -->
      <v-data-table
        :headers="tableHeaders"
        :items="flattenedData"
        class="elevation-0"
        hide-default-footer
        :items-per-page="-1"
        dense
      >
        <!-- Product Name -->
        <template v-slot:item.product_name="{ item }">
          <div class="py-2">
            <div class="font-weight-medium text-body-1">{{ item.product_name }}</div>
            <div class="text-caption text--secondary">ID: {{ item.product_id }}</div>
          </div>
        </template>

        <!-- Location -->
        <template v-slot:item.location_name="{ item }">
          <v-chip
            :color="getLocationColor(item.location_id)"
            small
            outlined
          >
            <v-icon left small>mdi-map-marker</v-icon>
            {{ item.location_name }}
          </v-chip>
        </template>

        <!-- Current Stock -->
        <template v-slot:item.current_stock="{ item }">
          <v-chip
            :color="item.current_stock <= item.min_stock ? 'error' : 'success'"
            small
            :outlined="item.current_stock > item.min_stock"
          >
            {{ item.current_stock }}
          </v-chip>
        </template>

        <!-- Dynamic date columns - FIXED: Moved v-for to individual slot templates -->
        <template v-slot:item.stockData="{ item }">
          <div class="d-flex">
            <div
              v-for="date in reportDates"
              :key="`movement-${item.product_id}-${item.location_id}-${date}`"
              class="movement-cell flex-grow-1"
            >
              <div class="d-flex flex-column align-center gap-1 pa-2">
                <div class="text-caption font-weight-medium">{{ formatDate(date) }}</div>
                <v-chip
                  v-if="getDateData(item, date).stockIn > 0"
                  color="success"
                  x-small
                  dark
                >
                  +{{ getDateData(item, date).stockIn }}
                </v-chip>
                <v-chip
                  v-if="getDateData(item, date).sold > 0"
                  color="error"
                  x-small
                  dark
                >
                  -{{ getDateData(item, date).sold }}
                </v-chip>
                <div class="text-caption text--secondary font-weight-medium">
                  Bal: {{ getDateData(item, date).endBalance }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </v-data-table>

      <!-- No Data State -->
      <v-card-text v-if="filteredStockMovements.length === 0" class="text-center pa-12">
        <v-icon size="64" color="grey lighten-2" class="mb-4">
          mdi-inbox-outline
        </v-icon>
        <h3 class="text-h6 mb-2 text--secondary">No Data Found</h3>
        <p class="text-body-2 text--secondary">
          No stock movements found for the selected criteria.<br>
          Try adjusting your filters or date range.
        </p>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row v-if="!loading && !error && filteredStockMovements.length > 0">
      <!-- Location Summary -->
      <v-col cols="12" lg="8">
        <v-card elevation="2">
          <v-card-title class="secondary white--text">
            <v-icon left color="white">mdi-map-marker-multiple</v-icon>
            Summary by Location
          </v-card-title>
          <v-card-text class="pa-0">
            <v-row dense class="ma-0">
              <v-col
                v-for="locationSummary in locationSummaries"
                :key="locationSummary.locationId"
                cols="12"
                sm="6"
                md="4"
                class="pa-2"
              >
                <v-card outlined class="h-100">
                  <v-card-text class="pa-4">
                    <div class="d-flex align-center justify-space-between mb-3">
                      <h4 class="text-subtitle-1 font-weight-medium">
                        {{ locationSummary.locationName }}
                      </h4>
                      <v-chip :color="getLocationColor(locationSummary.locationId)" x-small>
                        {{ locationSummary.productCount }} items
                      </v-chip>
                    </div>
                    
                    <div class="d-flex flex-column gap-2">
                      <div class="d-flex justify-space-between">
                        <span class="text-body-2 text--secondary">Stock In:</span>
                        <v-chip color="success" x-small>+{{ locationSummary.totalStockIn }}</v-chip>
                      </div>
                      <div class="d-flex justify-space-between">
                        <span class="text-body-2 text--secondary">Sold:</span>
                        <v-chip color="error" x-small>-{{ locationSummary.totalSold }}</v-chip>
                      </div>
                      <div class="d-flex justify-space-between">
                        <span class="text-body-2 font-weight-medium">Net:</span>
                        <v-chip
                          :color="locationSummary.netMovement >= 0 ? 'success' : 'error'"
                          x-small
                        >
                          {{ locationSummary.netMovement >= 0 ? '+' : '' }}{{ locationSummary.netMovement }}
                        </v-chip>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Overall Stats -->
      <v-col cols="12" lg="4">
        <v-card elevation="2" class="h-100">
          <v-card-title class="lightprimary white--text">
            <v-icon left color="white">mdi-chart-pie</v-icon>
            Overall Statistics
          </v-card-title>
          <v-card-text class="pa-4">
            <div class="d-flex flex-column gap-4">
              <div class="text-center">
                <div class="text-h3 font-weight-bold primary--text">{{ totalProducts }}</div>
                <div class="text-body-2 text--secondary">Total Products</div>
              </div>
              
              <v-divider />
              
              <div class="d-flex justify-space-between align-center">
                <span class="text-body-1">Total Stock In:</span>
                <v-chip color="success" small>+{{ totalStockIn }}</v-chip>
              </div>
              
              <div class="d-flex justify-space-between align-center">
                <span class="text-body-1">Total Sold:</span>
                <v-chip color="error" small>-{{ totalSold }}</v-chip>
              </div>
              
              <v-divider />
              
              <div class="d-flex justify-space-between align-center">
                <span class="text-h6 font-weight-medium">Net Movement:</span>
                <v-chip
                  :color="netMovement >= 0 ? 'success' : 'error'"
                  large
                >
                  {{ netMovement >= 0 ? '+' : '' }}{{ netMovement }}
                </v-chip>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'StockMovementReport',

  data() {
    return {
      dateFrom: '',
      dateTo: '',
      stockMovements: [],
      reportDates: [],
      loading: false,
      error: null,
      categories: [],
      locations: [],
      selectedCategory: '',
      selectedLocation: '',
      productSearch: '',
      filteredStockMovements: [],
    }
  },

  computed: {
    locationOptions() {
      return this.locations.map(location => ({
        text: location.name,
        value: location.id
      }))
    },

    categoryOptions() {
      console.info(`category list ${JSON.stringify(this.categories)}`)
      return this.categories.map(category => ({
        text: category.categ_name,
        value: category.categ_id
      }))
    },

    tableHeaders() {
      return [
        {
          text: 'Product',
          value: 'product_name',
          sortable: true,
          width: 250
        },
        {
          text: 'Location',
          value: 'location_name',
          sortable: true,
          width: 200
        },
        {
          text: 'Current Stock',
          value: 'current_stock',
          sortable: true,
          width: 150,
          align: 'center'
        },
        {
          text: 'Daily Movements',
          value: 'stockData',
          sortable: false,
          width: 'auto',
          align: 'center'
        }
      ]
    },

    flattenedData() {
      const data = []
      this.filteredStockMovements.forEach(product => {
        product.locations.forEach(location => {
          data.push({
            product_id: product.id,
            product_name: product.pro_name,
            location_id: location.locationId,
            location_name: location.locationName,
            current_stock: location.currentStock || 0,
            min_stock: product.minStock || 0,
            movements: location.movements || []
          })
        })
      })
      return data
    },

    locationSummaries() {
      const summaryMap = new Map()

      this.filteredStockMovements.forEach((product) => {
        product.locations.forEach((location) => {
          const key = location.locationId || 'unknown'
          if (!summaryMap.has(key)) {
            summaryMap.set(key, {
              locationId: location.locationId,
              locationName: location.locationName,
              productCount: 0,
              totalStockIn: 0,
              totalSold: 0,
              netMovement: 0,
            })
          }

          const summary = summaryMap.get(key)
          summary.productCount += 1
          summary.totalStockIn += location.totalStockIn || 0
          summary.totalSold += location.totalSold || 0
          summary.netMovement = summary.totalStockIn - summary.totalSold
        })
      })

      return Array.from(summaryMap.values())
    },

    totalProducts() {
      return this.filteredStockMovements.length
    },

    totalStockIn() {
      return this.filteredStockMovements.reduce((total, product) => {
        return total + product.locations.reduce((locationTotal, location) => {
          return locationTotal + (location.totalStockIn || 0)
        }, 0)
      }, 0)
    },

    totalSold() {
      return this.filteredStockMovements.reduce((total, product) => {
        return total + product.locations.reduce((locationTotal, location) => {
          return locationTotal + (location.totalSold || 0)
        }, 0)
      }, 0)
    },

    netMovement() {
      return this.totalStockIn - this.totalSold
    },
  },

  mounted() {
    this.initializeDates()
    this.loadCategories()
    this.generateReport()
  },

  methods: {
    initializeDates() {
      const today = new Date()
      const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)

      this.dateTo = today.toISOString().split('T')[0]
      this.dateFrom = lastWeek.toISOString().split('T')[0]

      this.generateDateRange()
    },

    generateDateRange() {
      const dates = []
      const start = new Date(this.dateFrom)
      const end = new Date(this.dateTo)

      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        dates.push(new Date(d).toISOString().split('T')[0])
      }

      this.reportDates = dates
    },

    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    },

    formatDateRange() {
      return `${this.formatDate(this.dateFrom)} - ${this.formatDate(this.dateTo)}`
    },

    getLocationColor(locationId) {
      const colors = ['primary', 'secondary', 'success', 'info', 'warning']
      return colors[(locationId || 0) % colors.length]
    },

    getDateData(item, date) {
      const movement = item.movements.find(m => m.date === date)
      return {
        stockIn: movement ? movement.stockIn : 0,
        sold: movement ? movement.sold : 0,
        startBalance: movement ? movement.startBalance : 0,
        endBalance: movement ? movement.endBalance : 0
      }
    },

    async generateReport() {
      if (!this.dateFrom || !this.dateTo) return

      this.loading = true
      this.error = null
      this.generateDateRange()

      try {
        await this.fetchStockMovements()
        this.filterProducts()
      } catch (error) {
        console.error('Error generating report:', error)
        this.error = error.response?.data?.error || 'Failed to generate stock movement report'
      } finally {
        this.loading = false
      }
    },

    async fetchStockMovements() {
      const params = {
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
      }

      if (this.selectedCategory) params.categoryId = this.selectedCategory
      if (this.selectedLocation) params.locationId = this.selectedLocation

      const response = await this.$axios.get('/api/card/stock-movements', {
        params,
      })
      
      this.stockMovements = response.data.stockMovements || []
      this.locations = response.data.locations || []
    },

    async loadCategories() {
      try {
        const response = await this.$axios.get('/api/category/find')
        this.categories = response.data
      } catch (error) {
        console.error('Error loading categories:', error)
      }
    },

    filterProducts() {
      let filtered = [...this.stockMovements]

      if (this.productSearch) {
        const search = this.productSearch.toLowerCase()
        filtered = filtered.filter(
          (product) =>
            product.pro_name.toLowerCase().includes(search) ||
            product.id.toString().includes(search)
        )
      }

      this.filteredStockMovements = filtered
    },

    exportToCSV() {
      const headers = [
        'Product Name',
        'Product ID',
        'Location',
        'Location ID',
        ...this.reportDates.flatMap((date) => [
          `${this.formatDate(date)} - Stock In`,
          `${this.formatDate(date)} - Sold`,
          `${this.formatDate(date)} - Start Balance`,
          `${this.formatDate(date)} - End Balance`,
        ]),
      ]

      const rows = []
      this.filteredStockMovements.forEach((product) => {
        product.locations.forEach((location) => {
          rows.push([
            product.pro_name,
            product.id,
            location.locationName,
            location.locationId || 'N/A',
            ...this.reportDates.flatMap((date) => [
              this.getLocationStockIn(location, date),
              this.getLocationSold(location, date),
              this.getLocationStartBalance(location, date),
              this.getLocationEndBalance(location, date),
            ]),
          ])
        })
      })

      const csvContent = [headers, ...rows]
        .map((row) => row.map((cell) => `"${cell}"`).join(','))
        .join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `stock-movement-${this.dateFrom}-to-${this.dateTo}.csv`
      a.click()
      window.URL.revokeObjectURL(url)
    },

    // Helper methods for backward compatibility
    getLocationStockIn(location, date) {
      const movement = location.movements.find((m) => m.date === date)
      return movement ? movement.stockIn : 0
    },

    getLocationSold(location, date) {
      const movement = location.movements.find((m) => m.date === date)
      return movement ? movement.sold : 0
    },

    getLocationStartBalance(location, date) {
      const movement = location.movements.find((m) => m.date === date)
      return movement ? movement.startBalance : 0
    },

    getLocationEndBalance(location, date) {
      const movement = location.movements.find((m) => m.date === date)
      return movement ? movement.endBalance : 0
    },
  },
}
</script>

<style scoped>
.stock-movement-report {
  background-color: #fafafa;
  min-height: 100vh;
}

.movement-cell {
  min-width: 120px;
  border-right: 1px solid #e0e0e0;
}

.gap-3 {
  gap: 12px;
}

.gap-1 {
  gap: 4px;
}

.gap-2 {
  gap: 8px;
}

.gap-4 {
  gap: 16px;
}

.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .movement-cell {
    min-width: 100px;
  }
}
</style>