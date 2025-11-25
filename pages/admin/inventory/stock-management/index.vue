<!-- Complete UpdatedStockManagement.vue -->
<template>
  <div class="stock-management">
    <!-- Header -->
    <div class="page-header">
      <div class="header-content primary rounded pa-4 mr-4">
        <h1 class="page-title">
          <v-icon large color="white" class="mr-3">mdi-package-variant-plus</v-icon>
          Stock Management
        </h1>
        <p class="page-subtitle">Increase and maintain product inventory</p>
      </div>
      <div class="header-actions">
        <v-btn
          @click="openBulkStockDialog"
          class="mr-2 primary"
          text
        >
          <v-icon left>mdi-playlist-plus</v-icon>
          Bulk Increase
        </v-btn>
        <v-btn
          @click="exportStockReport"
          class="mr-2 success"
          text
        >
          <v-icon left>mdi-download</v-icon>
          Export
        </v-btn>
        <v-btn
          @click="viewStockSummary"
          class="info"
          text
        >
          <v-icon left>mdi-chart-line</v-icon>
          Summary
        </v-btn>
      </div>
    </div>

    <!-- Stock Statistics Cards -->
    <v-row class="mb-4">
      <v-col cols="12" md="3" v-for="(stat, index) in stockStatistics" :key="index">
        <v-card class="stat-card" elevation="2" :color="stat.color" dark>
          <v-card-text>
            <div class="d-flex align-center">
              <v-avatar size="60" color="white" class="mr-3">
                <v-icon size="30" :color="stat.color">{{ stat.icon }}</v-icon>
              </v-avatar>
              <div>
                <h2 class="stat-value">{{ formatNumber(stat.value) }}</h2>
                <p class="stat-label">{{ stat.label }}</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters and Actions -->
    <v-card class="filter-card mb-4" elevation="1">
      <v-card-title class="filter-title primary">
        <v-icon class="mr-2">mdi-filter</v-icon>
        Filters & Actions
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-autocomplete
              v-model="filters.categoryId"
              :items="categories"
              item-text="categ_name"  
              item-value="categ_id"
              label="Filter by Category"
              clearable
              outlined
              dense
              prepend-inner-icon="mdi-shape"
              placeholder="All categories..."
              @change="loadProducts"
            >
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.categ_name }}</v-list-item-title>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="3">
            <v-autocomplete
              v-model="filters.stockLevel"
              :items="stockLevelOptions"
              item-text="text"
              item-value="value"
              label="Stock Level"
              clearable
              outlined
              dense
              prepend-inner-icon="mdi-speedometer"
              placeholder="All levels..."
              @change="loadProducts"
            >
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="filters.search"
              label="Search products..."
              outlined
              dense
              clearable
              append-icon="mdi-magnify"
              @input="debounceSearch"
              placeholder="Type to search..."
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-btn
              @click="resetFilters"
              outlined
              block
              color="warning"
            >
              <v-icon left>mdi-refresh</v-icon>
              Reset
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Products Stock Table -->
    <v-card elevation="2">
      <v-card-title>
        <span class="title">Product Inventory</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="loadProducts">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="products"
        :loading="loading"
        :server-items-length="totalItems"
        :options.sync="options"
        class="stock-table"
        @update:options="loadProducts"
      >
        <!-- Product Info Column -->
        <template v-slot:item.product="{ item }">
          <div class="product-info">
            <div class="d-flex align-center">
              <v-avatar size="40" class="mr-3" color="grey lighten-3">
                <v-img 
                  v-if="item.pro_image_path" 
                  :src="item.pro_image_path"
                  alt="Product Image"
                ></v-img>
                <v-icon v-else color="grey darken-2">mdi-package-variant</v-icon>
              </v-avatar>
              <div>
                <strong>{{ item.pro_name }}</strong>
                <br>
                <small class="text-grey">{{ item.pro_desc || 'No description' }}</small>
                <br>
                <v-chip x-small :color="getCategoryColor(item._category)" outlined>
                  {{ formatCategory(item._category) }}
                </v-chip>
              </div>
            </div>
          </div>
        </template>

        <!-- Current Stock Column -->
        <template v-slot:item.currentStock="{ item }">
          <div class="stock-info">
            <v-chip
              :color="getStockLevelColor(item.stock_count, item.minStock)"
              dark
              class="stock-chip"
            >
              <strong>{{ formatNumber(item.stock_count || 0) }}</strong>
              <span v-if="item.stockUnit" class="ml-1">{{ item.stockUnit.symbol }}</span>
            </v-chip>
            <div class="stock-details">
              <small class="text-caption">
                Min: {{ formatNumber(item.minStock || 0) }}
                <span v-if="item.stockUnit"> {{ item.stockUnit.symbol }}</span>
              </small>
            </div>
          </div>
        </template>

        <!-- Unit Price Column -->
        <template v-slot:item.unitPrice="{ item }">
          <div class="price-info">
            <strong>{{ formatCurrency(item.pro_price || 0) }}</strong>
            <br>
            <small class="text-grey">
              Cost: {{ formatCurrency(item.cost_price || 0) }}
            </small>
          </div>
        </template>

        <!-- Stock Status Column -->
        <template v-slot:item.stockStatus="{ item }">
          <v-chip
            :color="getStockStatusColor(item.stock_count, item.minStock)"
            dark
            small
          >
            <v-icon left small>{{ getStockStatusIcon(item.stock_count, item.minStock) }}</v-icon>
            {{ getStockStatus(item.stock_count, item.minStock) }}
          </v-chip>
        </template>

        <!-- Last Updated Column -->
        <template v-slot:item.lastUpdated="{ item }">
          <div class="date-info">
            <div>{{ formatDate(item.updateTimestamp || item.updatedAt) }}</div>
            <small class="text-grey">{{ formatTimeAgo(item.updateTimestamp || item.updatedAt) }}</small>
          </div>
        </template>

        <!-- Actions Column -->
        <template v-slot:item.actions="{ item }">
          <div class="action-buttons">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon small color="success" @click="openStockIncreaseDialog(item)" v-on="on">
                  <v-icon small>mdi-plus</v-icon>
                </v-btn>
              </template>
              <span>Increase Stock</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon small color="warning" @click="openStockAdjustDialog(item)" v-on="on">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Adjust Stock</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon small color="info" @click="viewStockHistory(item)" v-on="on">
                  <v-icon small>mdi-history</v-icon>
                </v-btn>
              </template>
              <span>View History</span>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Stock Increase Dialog Component -->
    <StockIncreaseDialog
      :dialog.sync="stockIncreaseDialog"
      :selected-product="selectedProduct"
      :saving="saving"
      :currency-symbol="currencySymbol"
      @save="saveStockIncrease"
      @close="closeStockIncreaseDialog"
    />

    <!-- Stock Adjustment Dialog Component -->
    <StockAdjustmentDialog
      :dialog.sync="stockAdjustDialog"
      :selected-product="selectedProduct"
      :saving="saving"
      @save="saveStockAdjustment"
      @close="closeStockAdjustDialog"
    />

    <!-- Bulk Stock Increase Dialog -->
    <v-dialog v-model="bulkStockDialog" max-width="800px" persistent>
      <v-card>
        <v-card-title class="dialog-title primary">
          <v-icon class="mr-2" color="white">mdi-playlist-plus</v-icon>
          <span class="white--text">Bulk Stock Increase</span>
        </v-card-title>

        <v-card-text>
          <v-data-table
            :headers="bulkHeaders"
            :items="bulkStockItems"
            hide-default-footer
            class="bulk-stock-table"
          >
            <template v-slot:item.product="{ item, index }">
              <v-autocomplete
                v-model="item.productId"
                :items="allProducts"
                item-text="pro_name"
                item-value="id"
                label="Select Product"
                dense
                clearable
                placeholder="Search products..."
                @change="updateBulkProduct(index)"
              >
                <template v-slot:item="{ item: product }">
                  <v-list-item-content>
                    <v-list-item-title>{{ product.pro_name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ product.pro_desc }}</v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </template>

            <template v-slot:item.currentStock="{ item }">
              <span>{{ formatNumber(item.currentStock || 0) }}</span>
            </template>

            <template v-slot:item.quantity="{ item }">
              <v-text-field
                v-model.number="item.quantity"
                type="number"
                min="0.01"
                step="0.01"
                dense
                hide-details
                placeholder="0.00"
              ></v-text-field>
            </template>

            <template v-slot:item.costPerUnit="{ item }">
              <v-text-field
                v-model.number="item.costPerUnit"
                type="number"
                min="0"
                step="0.01"
                dense
                hide-details
                placeholder="0.00"
              ></v-text-field>
            </template>

            <template v-slot:item.totalCost="{ item }">
              <strong>{{ formatCurrency((item.quantity || 0) * (item.costPerUnit || 0)) }}</strong>
            </template>

            <template v-slot:item.actions="{ index }">
              <v-btn icon small color="error" @click="removeBulkItem(index)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>

          <v-btn color="primary" text @click="addBulkItem" class="mt-2">
            <v-icon left>mdi-plus</v-icon>
            Add Product
          </v-btn>

          <v-row class="mt-4">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="bulkStockData.supplier"
                label="Supplier/Vendor"
                outlined
                prepend-inner-icon="mdi-truck"
                placeholder="Supplier name..."
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="bulkStockData.referenceNumber"
                label="Reference/Invoice Number"
                outlined
                prepend-inner-icon="mdi-receipt"
                placeholder="Invoice or PO number..."
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <div class="bulk-summary mr-4">
            <strong>Total Items: {{ bulkStockItems.length }}</strong> | 
            <strong>Total Cost: {{ formatCurrency(getBulkTotalCost()) }}</strong>
          </div>
          <v-spacer></v-spacer>
          <v-btn text @click="closeBulkStockDialog">Cancel</v-btn>
          <v-btn
            color="primary"
            :loading="saving"
            :disabled="bulkStockItems.length === 0"
            @click="saveBulkStockIncrease"
          >
            <v-icon left>mdi-check</v-icon>
            Update All Stock
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Stock History Dialog -->
    <v-dialog v-model="stockHistoryDialog" max-width="900px">
      <v-card>
        <v-card-title class="dialog-title info">
          <v-icon class="mr-2" color="white">mdi-history</v-icon>
          <span class="white--text">Stock History - {{ selectedProduct?.pro_name }}</span>
        </v-card-title>

        <v-card-text>
          <v-data-table
            :headers="historyHeaders"
            :items="stockHistory"
            :loading="loadingHistory"
            class="history-table"
            :items-per-page="10"
          >
            <template v-slot:item.type="{ item }">
              <v-chip :color="getHistoryTypeColor(item.transactionType)" dark small>
                <v-icon left x-small>{{ getHistoryTypeIcon(item.transactionType) }}</v-icon>
                {{ item.transactionType.toUpperCase() }}
              </v-chip>
            </template>

            <template v-slot:item.change="{ item }">
              <span :class="item.baseQuantityChange > 0 ? 'success--text' : 'error--text'">
                {{ item.baseQuantityChange > 0 ? '+' : '' }}{{ formatNumber(item.baseQuantityChange) }}
              </span>
            </template>

            <template v-slot:item.newStock="{ item }">
              <strong>{{ formatNumber(item.baseQuantityAfter) }}</strong>
            </template>

            <template v-slot:item.cost="{ item }">
              <span v-if="item.totalCost">{{ formatCurrency(item.totalCost) }}</span>
              <span v-else class="text-grey">-</span>
            </template>

            <template v-slot:item.date="{ item }">
              <div>
                {{ formatDate(item.createdAt) }}
                <br>
                <small class="text-grey">{{ formatTime(item.createdAt) }}</small>
              </div>
            </template>

            <template v-slot:item.notes="{ item }">
              <div class="notes-cell">
                <v-tooltip bottom v-if="item.notes && item.notes.length > 50">
                  <template v-slot:activator="{ on }">
                    <span v-on="on">{{ item.notes.substring(0, 50) }}...</span>
                  </template>
                  <span>{{ item.notes }}</span>
                </v-tooltip>
                <span v-else>{{ item.notes || '-' }}</span>
              </div>
            </template>
          </v-data-table>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="stockHistoryDialog = false">Close</v-btn>
          <v-btn 
            color="primary" 
            text 
            @click="exportProductHistory"
            :loading="exportingHistory"
          >
            <v-icon left>mdi-download</v-icon>
            Export
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Loading Overlay -->
    <v-overlay :value="loading && products.length === 0" absolute>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import StockIncreaseDialog from '~/components/card/stockMaintenance.vue'
import StockAdjustmentDialog from '~/components/card/stockAdjustMent.vue'

export default {
  name: 'StockManagement',
  
  components: {
    StockIncreaseDialog,
    StockAdjustmentDialog
  },
  
  data() {
    return {
      // Loading states
      loading: false,
      saving: false,
      deleting: false,
      loadingHistory: false,
      exportingHistory: false,
      
      // Data
      products: [],
      allProducts: [],
      categories: [],
      stockHistory: [],
      
      // Statistics
      stockStatistics: [
        { label: 'Total Products', value: 0, icon: 'mdi-package-variant', color: 'primary' },
        { label: 'Low Stock Items', value: 0, icon: 'mdi-alert-circle', color: 'warning' },
        { label: 'Out of Stock', value: 0, icon: 'mdi-close-circle', color: 'error' },
        { label: 'Total Stock Value', value: 0, icon: 'mdi-currency-usd', color: 'success' }
      ],
      
      // Pagination
      options: {},
      totalItems: 0,
      
      // Filters
      filters: {
        categoryId: null,
        stockLevel: null,
        search: ''
      },
      
      stockLevelOptions: [
        { text: 'Out of Stock', value: 'out' },
        { text: 'Low Stock', value: 'low' },
        { text: 'Normal Stock', value: 'normal' },
        { text: 'Overstock', value: 'over' }
      ],
      
      // Dialogs
      stockIncreaseDialog: false,
      stockAdjustDialog: false,
      bulkStockDialog: false,
      stockHistoryDialog: false,
      
      // Selected product
      selectedProduct: null,
      currencySymbol: '$',
      
      // Bulk stock operations
      bulkStockItems: [],
      bulkStockData: {
        supplier: '',
        referenceNumber: ''
      },
      
      // Table headers
      headers: [
        { text: 'Product', value: 'product', sortable: false, width: '280px' },
        { text: 'Current Stock', value: 'currentStock', align: 'center', width: '130px' },
        { text: 'Price/Cost', value: 'unitPrice', align: 'right', width: '120px' },
        { text: 'Status', value: 'stockStatus', align: 'center', width: '120px' },
        { text: 'Last Updated', value: 'lastUpdated', align: 'center', width: '140px' },
        { text: 'Actions', value: 'actions', sortable: false, align: 'center', width: '150px' }
      ],
      
      bulkHeaders: [
        { text: 'Product', value: 'product', width: '30%' },
        { text: 'Current Stock', value: 'currentStock', align: 'center', width: '15%' },
        { text: 'Quantity to Add', value: 'quantity', align: 'center', width: '15%' },
        { text: 'Cost per Unit', value: 'costPerUnit', align: 'center', width: '15%' },
        { text: 'Total Cost', value: 'totalCost', align: 'right', width: '15%' },
        { text: '', value: 'actions', sortable: false, align: 'center', width: '10%' }
      ],
      
      historyHeaders: [
        { text: 'Date', value: 'date', width: '140px' },
        { text: 'Type', value: 'type', width: '120px' },
        { text: 'Change', value: 'change', align: 'center', width: '100px' },
        { text: 'New Stock', value: 'newStock', align: 'center', width: '100px' },
        { text: 'Cost', value: 'cost', align: 'right', width: '100px' },
        { text: 'Notes', value: 'notes', width: '200px' }
      ],
      
      // Debounced search
      debounceSearch: null
    }
  },
  
  created() {
    this.debounceSearch = debounce(this.loadProducts, 500)
    this.loadInitialData()
  },
  
  methods: {
    async loadInitialData() {
      try {
        await Promise.all([
          this.loadProducts(),
          this.loadCategories(),
          this.loadStatistics()
        ])
      } catch (error) {
        this.$toast.error('Error loading initial data')
        console.error(error)
      }
    },
    
    async loadProducts() {
      this.loading = true
      try {
        const { page = 1, itemsPerPage = 10, sortBy = [], sortDesc = [] } = this.options
        
        const params = {
          page,
          limit: itemsPerPage,
          ...(this.filters.categoryId && { categoryId: this.filters.categoryId }),
          ...(this.filters.stockLevel && { stockLevel: this.filters.stockLevel }),
          ...(this.filters.search && { search: this.filters.search }),
          ...(sortBy.length && { sortBy: sortBy[0] }),
          ...(sortDesc.length && { sortOrder: sortDesc[0] ? 'DESC' : 'ASC' })
        }
        
        const response = await this.$axios.get('/api/product/find', { params })
        
        if (response.data.success) {
          this.products = response.data.data.products
          this.totalItems = response.data.data.pagination.totalItems
        } else {
          this.products = response.data || response.data.data || []
          this.totalItems = this.products.length
        }
        
        // Load all products for bulk operations (only once)
        if (!this.allProducts.length) {
          const allResponse = await this.$axios.get('/api/product/find', { 
            params: { limit: 1000, isActive: 1 } 
          })
          this.allProducts = allResponse.data.data?.products || allResponse.data.data || allResponse.data || []
        }
        
      } catch (error) {
        this.$toast.error('Error loading products')
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    
    async loadCategories() {
      try {
        const response = await this.$axios.get('/api/category/find', {
          params: { isActive: 1 }
        })
        this.categories = response.data.data || response.data || []
      } catch (error) {
        console.error('Error loading categories:', error)
      }
    },
    
    async loadStatistics() {
      try {
        const response = await this.$axios.get('/api/stock-transactions/statistics')
        if (response.data.success) {
          const stats = response.data.data
          this.stockStatistics[0].value = stats.totalProducts || 0
          this.stockStatistics[1].value = stats.lowStockItems || 0
          this.stockStatistics[2].value = stats.outOfStockItems || 0
          this.stockStatistics[3].value = stats.totalStockValue || 0
        }
      } catch (error) {
        console.error('Error loading statistics:', error)
      }
    },
    
    // Stock level and status methods
    getStockLevelColor(currentStock, minStock) {
      if (!currentStock || currentStock === 0) return 'error'
      if (currentStock <= minStock) return 'warning'
      return 'success'
    },
    
    getStockStatus(currentStock, minStock) {
      if (!currentStock || currentStock === 0) return 'OUT OF STOCK'
      if (currentStock <= minStock) return 'LOW STOCK'
      return 'NORMAL'
    },
    
    getStockStatusColor(currentStock, minStock) {
      if (!currentStock || currentStock === 0) return 'error'
      if (currentStock <= minStock) return 'warning'
      return 'success'
    },
    
    getStockStatusIcon(currentStock, minStock) {
      if (!currentStock || currentStock === 0) return 'mdi-close-circle'
      if (currentStock <= minStock) return 'mdi-alert-circle'
      return 'mdi-check-circle'
    },
    
    getCategoryColor(category) {
      const colors = {
        'food': 'green',
        'beverage': 'blue',
        'stock': 'orange',
        'product': 'purple',
        'service': 'indigo'
      }
      return colors[category?.toLowerCase()] || 'grey'
    },

    formatCategory(category) {
      if (!category) return 'No category'
      return category.charAt(0).toUpperCase() + category.slice(1)
    },
    
    // Stock increase operations
    openStockIncreaseDialog(product) {
      this.selectedProduct = product
      this.stockIncreaseDialog = true
    },
    
    closeStockIncreaseDialog() {
      this.stockIncreaseDialog = false
      this.selectedProduct = null
    },
    
    async saveStockIncrease(data) {
      this.saving = true
      try {
        const response = await this.$axios.post('/api/stock-transactions/stock-increase', data)
        
        if (response.data.success) {
          this.$toast.success(`Stock increased successfully for ${this.selectedProduct.pro_name}`)
          await Promise.all([
            this.loadProducts(),
            this.loadStatistics()
          ])
          this.closeStockIncreaseDialog()
        } else {
          throw new Error(response.data.message || 'Failed to increase stock')
        }
      } catch (error) {
        const message = error.response?.data?.message || error.message || 'Error increasing stock'
        this.$toast.error(message)
        console.error(error)
      } finally {
        this.saving = false
      }
    },
    
    // Stock adjustment operations
    openStockAdjustDialog(product) {
      this.selectedProduct = product
      this.stockAdjustDialog = true
    },
    
    closeStockAdjustDialog() {
      this.stockAdjustDialog = false
      this.selectedProduct = null
    },
    
    async saveStockAdjustment(data) {
      this.saving = true
      try {
        const response = await this.$axios.post('/api/stock-transactions/stock-adjust', data)
        
        if (response.data.success) {
          this.$toast.success(`Stock adjusted successfully for ${this.selectedProduct.pro_name}`)
          await Promise.all([
            this.loadProducts(),
            this.loadStatistics()
          ])
          this.closeStockAdjustDialog()
        } else {
          throw new Error(response.data.message || 'Failed to adjust stock')
        }
      } catch (error) {
        const message = error.response?.data?.message || error.message || 'Error adjusting stock'
        this.$toast.error(message)
        console.error(error)
      } finally {
        this.saving = false
      }
    },
    
    // Bulk operations
    openBulkStockDialog() {
      this.bulkStockItems = [this.getEmptyBulkItem()]
      this.bulkStockData = {
        supplier: '',
        referenceNumber: ''
      }
      this.bulkStockDialog = true
    },
    
    closeBulkStockDialog() {
      this.bulkStockDialog = false
      this.bulkStockItems = []
    },
    
    addBulkItem() {
      this.bulkStockItems.push(this.getEmptyBulkItem())
    },
    
    removeBulkItem(index) {
      if (this.bulkStockItems.length > 1) {
        this.bulkStockItems.splice(index, 1)
      }
    },
    
    updateBulkProduct(index) {
      const item = this.bulkStockItems[index]
      const product = this.allProducts.find(p => p.id === item.productId)
      if (product) {
        item.currentStock = product.stock_count || 0
        item.costPerUnit = product.cost_price || product.pro_price || 0
      }
    },
    
    getEmptyBulkItem() {
      return {
        productId: null,
        currentStock: 0,
        quantity: null,
        costPerUnit: null
      }
    },
    
    getBulkTotalCost() {
      return this.bulkStockItems.reduce((total, item) => {
        return total + ((item.quantity || 0) * (item.costPerUnit || 0))
      }, 0)
    },
    
    async saveBulkStockIncrease() {
      const validItems = this.bulkStockItems.filter(item => 
        item.productId && item.quantity > 0
      )
      
      if (validItems.length === 0) {
        this.$toast.warning('Please add at least one valid product with quantity')
        return
      }
      
      this.saving = true
      try {
        const data = {
          items: validItems.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            costPerUnit: item.costPerUnit || 0
          })),
          supplier: this.bulkStockData.supplier,
          referenceNumber: this.bulkStockData.referenceNumber
        }
        
        const response = await this.$axios.post('/api/stock-transactions/bulk-stock-increase', data)
        
        if (response.data.success) {
          this.$toast.success(`Bulk stock increase completed for ${validItems.length} products`)
          await Promise.all([
            this.loadProducts(),
            this.loadStatistics()
          ])
          this.closeBulkStockDialog()
        }
      } catch (error) {
        const message = error.response?.data?.message || 'Error with bulk stock increase'
        this.$toast.error(message)
        console.error(error)
      } finally {
        this.saving = false
      }
    },
    
    // Stock history
    async viewStockHistory(product) {
      this.selectedProduct = product
      this.stockHistoryDialog = true
      
      this.loadingHistory = true
      try {
        const response = await this.$axios.get(`/api/stock-transactions/product/${product.id}`)
        this.stockHistory = response.data.data || response.data || []
      } catch (error) {
        this.$toast.error('Error loading stock history')
        console.error(error)
      } finally {
        this.loadingHistory = false
      }
    },
    
    getHistoryTypeColor(type) {
      const colors = {
        'purchase': 'success',
        'sale': 'primary',
        'adjustment': 'warning',
        'recipe_deduction': 'info',
        'return': 'purple',
        'transfer': 'orange'
      }
      return colors[type?.toLowerCase()] || 'grey'
    },
    
    getHistoryTypeIcon(type) {
      const icons = {
        'purchase': 'mdi-plus-circle',
        'sale': 'mdi-cart',
        'adjustment': 'mdi-pencil-circle',
        'recipe_deduction': 'mdi-minus-circle',
        'return': 'mdi-undo',
        'transfer': 'mdi-swap-horizontal'
      }
      return icons[type?.toLowerCase()] || 'mdi-circle'
    },
    
    async exportProductHistory() {
      if (!this.selectedProduct) return
      
      this.exportingHistory = true
      try {
        const response = await this.$axios.get(
          `/api/stock-transactions/export?productIds=${this.selectedProduct.id}`,
          { responseType: 'blob' }
        )
        
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${this.selectedProduct.pro_name}-history-${new Date().toISOString().substr(0, 10)}.xlsx`)
        document.body.appendChild(link)
        link.click()
        link.remove()
        
        this.$toast.success('Stock history exported successfully')
      } catch (error) {
        this.$toast.error('Error exporting stock history')
        console.error(error)
      } finally {
        this.exportingHistory = false
      }
    },
    
    // Utility methods
    resetFilters() {
      this.filters = {
        categoryId: null,
        stockLevel: null,
        search: ''
      }
      this.loadProducts()
    },
    
    async exportStockReport() {
      try {
        const response = await this.$axios.get('/api/stock-transactions/export', {
          responseType: 'blob',
          params: this.filters
        })
        
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `stock-report-${new Date().toISOString().substr(0, 10)}.xlsx`)
        document.body.appendChild(link)
        link.click()
        link.remove()
        
        this.$toast.success('Stock report exported successfully')
      } catch (error) {
        this.$toast.error('Error exporting stock report')
        console.error(error)
      }
    },
    
    viewStockSummary() {
      this.$router.push('/inventory/summary')
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
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    
    formatTime(date) {
      if (!date) return '-'
      return new Date(date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
    },
    
    formatTimeAgo(date) {
      if (!date) return '-'
      const now = new Date()
      const past = new Date(date)
      const diffInHours = (now - past) / (1000 * 60 * 60)
      
      if (diffInHours < 1) {
        return 'Just now'
      } else if (diffInHours < 24) {
        return `${Math.floor(diffInHours)} hours ago`
      } else {
        const diffInDays = Math.floor(diffInHours / 24)
        return `${diffInDays} days ago`
      }
    }
  }
}
</script>

<style scoped>
.stock-management {
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
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
  overflow: visible;
}

.page-subtitle {
  margin: 8px 0 0 0;
  opacity: 0.9;
  font-size: 16px;
  white-space: nowrap;
}

.header-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

.stat-card {
  transition: transform 0.2s ease;
  height: 100%;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
}

.stat-label {
  margin: 4px 0 0 0;
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.3;
}

.filter-card {
  background: #f8f9fa;
}

.filter-title {
  color: white;
  font-weight: 600;
}

.product-info {
  min-height: 60px;
  display: flex;
  align-items: center;
}

.stock-info {
  text-align: center;
}

.stock-chip {
  font-weight: bold;
  min-width: 80px;
}

.stock-details {
  margin-top: 4px;
}

.price-info {
  text-align: right;
  line-height: 1.4;
}

.date-info {
  text-align: center;
  line-height: 1.4;
}

.action-buttons {
  display: flex;
  gap: 4px;
  justify-content: center;
  flex-wrap: nowrap;
}

.dialog-title {
  color: white;
  font-weight: 600;
}

.bulk-stock-table {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.bulk-summary {
  font-size: 14px;
  color: #666;
}

.history-table {
  max-height: 500px;
}

.notes-cell {
  max-width: 200px;
  word-wrap: break-word;
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
    flex-direction: row;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }

  .stock-table .v-data-table__wrapper {
    overflow-x: auto;
  }
}

@media (max-width: 768px) {
  .stock-management {
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

  .action-buttons {
    flex-direction: column;
    gap: 2px;
  }

  .action-buttons .v-btn {
    min-width: 36px;
    width: 36px;
    height: 36px;
  }

  .stat-value {
    font-size: 24px;
  }

  .stat-label {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 18px;
  }

  .stat-value {
    font-size: 20px;
  }

  .headers {
    font-size: 12px;
  }

  .product-info {
    min-height: 50px;
  }

  .product-info .v-avatar {
    width: 32px !important;
    height: 32px !important;
  }
}

/* Table improvements */
.v-data-table >>> .v-data-table__wrapper {
  border-radius: 8px;
}

.v-data-table >>> thead > tr > th {
  font-weight: 600 !important;
  color: #1976d2 !important;
}

.v-data-table >>> tbody > tr:hover {
  background-color: #f5f5f5 !important;
}

/* Loading overlay */
.v-overlay--absolute {
  border-radius: 8px;
}
</style>