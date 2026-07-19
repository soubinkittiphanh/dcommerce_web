<!-- pages/products/prices.vue -->
<template>
  <div class="price-manager">
    <!-- Notification -->
    <div v-if="notification.show" :class="`notification notification-${notification.type}`">
      {{ notification.message }}
    </div>

    <!-- Header -->
    <div class="header">
      <h2>Product Price Management</h2>
      <div class="controls">
        <input v-model="searchTerm" type="text" placeholder="Search products..." class="search" />
        <select v-model="locationFilter" class="location-filter">
          <option value="">All Locations</option>
          <option v-for="location in availableLocations" :key="location" :value="location">
            {{ getLocationDisplay(location) }}
          </option>
        </select>
        <button @click="handleClearFilters" class="btn filter-clear">
          Clear Filters
        </button>
        <button @click="handleClearChanges" :disabled="!hasChanges" class="btn clear">
          Clear Changes
        </button>
        <button @click="handleSave" :disabled="!hasChanges || saving" class="btn save">
          {{ saving ? 'Saving...' : `Save (${changeCount})` }}
        </button>
      </div>
    </div>

    <!-- Status -->
    <div v-if="changeCount > 0" class="status">
      {{ changeCount }} products have unsaved changes
    </div>

    <!-- Filter Status -->
    <div v-if="hasActiveFilters" class="filter-status">
      Showing {{ products.length }} of {{ allProducts.length }} products
      <span v-if="searchTerm">(search: "{{ searchTerm }}")</span>
      <span v-if="locationFilter">(location: "{{ getLocationDisplay(locationFilter) }}")</span>
    </div>

    <!-- Products Table -->
    <div class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th width="40">#</th>
            <th>Product Name</th>
            <th width="120">Location</th>
            <th width="120">Barcode</th>
            <th width="100">Cost ($)</th>
            <th width="100">New Cost</th>
            <th width="100">Sale ($)</th>
            <th width="100">New Sale</th>
            <th width="140">Created</th>
            <th width="60">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="10" class="loading">Loading products...</td>
          </tr>
          <tr v-else-if="products.length === 0">
            <td colspan="10" class="empty">
              No products found
              <button v-if="hasActiveFilters" @click="handleClearFilters" class="btn">Clear Filters</button>
            </td>
          </tr>
          <tr 
            v-else
            v-for="(product, index) in products" 
            :key="product.id"
            :class="{ changed: hasChange(product.id) }"
          >
            <td class="line-number">{{ product.id }}</td>
            <td class="product">
              <div class="name">{{ product.pro_name }}</div>
              <div v-if="product.pro_desc" class="desc">{{ product.pro_desc }}</div>
            </td>
            <td class="location">
              <span class="location-badge" :class="`location-${product.location}`">
                {{ getLocationDisplay(product.location) }}
              </span>
            </td>
            <td class="barcode">{{ product.barCode || '-' }}</td>
            <td class="price">{{ format(product.cost_price) }}</td>
            <td>
              <input 
                v-model="changes[product.id].cost_price"
                type="number" 
                step="0.01" 
                min="0"
                class="input"
                :placeholder="format(product.cost_price)"
              />
            </td>
            <td class="price">{{ format(product.pro_price) }}</td>
            <td>
              <input 
                v-model="changes[product.id].sale_price"
                type="number" 
                step="0.01" 
                min="0"
                class="input"
                :placeholder="format(product.pro_price)"
              />
            </td>
            <td class="created-time">{{ formatDateTime(product.createdAt) }}</td>
            <td class="status">
              <span v-if="hasChange(product.id)" class="changed-badge">●</span>
              <button 
                v-if="hasChange(product.id)"
                @click="clearChange(product.id)"
                class="clear-btn"
                title="Clear changes"
              >
                ×
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer Info -->
    <div class="footer">
      {{ products.length }} products {{ hasActiveFilters ? 'found' : 'total' }}
      <span v-if="availableLocations.length > 1">
        • {{ availableLocations.length }} locations
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPrices',
  
  head: () => ({ title: 'Product Price Management' }),

  data() {
    return {
      products: [],
      allProducts: [],
      loading: true,
      saving: false,
      searchTerm: '',
      locationFilter: '',
      changes: {},
      notification: { message: '', type: '', show: false }
    }
  },

  computed: {
    hasChanges() {
      return this.changeCount > 0
    },
    
    changeCount() {
      return Object.keys(this.changes).filter(id => this.hasChange(id)).length
    },

    availableLocations() {
      const locations = [...new Set(this.allProducts.map(p => p.location).filter(Boolean))]
      return locations.sort()
    },

    hasActiveFilters() {
      return this.searchTerm.trim() !== '' || this.locationFilter !== ''
    }
  },

  watch: {
    searchTerm: {
      handler() {
        this.filterProducts()
      },
      immediate: true
    },

    locationFilter: {
      handler() {
        this.filterProducts()
      },
      immediate: true
    }
  },

  async mounted() {
    await this.fetchProducts()
  },

  methods: {
    async fetchProducts() {
      try {
        const { data } = await this.$axios.get('/api/product-temps', {
          params: { isActive: 'true', sortBy: 'createdAt', sortOrder: 'ASC' }
        })
        
        if (data.success) {
          this.allProducts = data.data
          this.initializeChanges()
          this.filterProducts()
        } else {
          this.notify('Failed to load products', 'error')
        }
      } catch (error) {
        console.error('Error:', error)
        this.notify('Error loading products', 'error')
      } finally {
        this.loading = false
      }
    },

    initializeChanges() {
      this.changes = {}
      this.allProducts.forEach(product => {
        this.$set(this.changes, product.id, {
          id: product.id,
          cost_price: '',
          sale_price: ''
        })
      })
    },

    filterProducts() {
      let filtered = [...this.allProducts]
      
      // Apply search filter
      if (this.searchTerm.trim()) {
        const search = this.searchTerm.toLowerCase()
        filtered = filtered.filter(p => 
          (p.pro_name && p.pro_name.toLowerCase().includes(search)) ||
          (p.pro_desc && p.pro_desc.toLowerCase().includes(search)) ||
          (p.barCode && p.barCode.toLowerCase().includes(search)) ||
          (p.product_code && p.product_code.toLowerCase().includes(search)) ||
          (p.location && p.location.toLowerCase().includes(search))
        )
      }

      // Apply location filter
      if (this.locationFilter) {
        filtered = filtered.filter(p => p.location === this.locationFilter)
      }

      this.products = filtered
    },

    handleClearFilters() {
      this.searchTerm = ''
      this.locationFilter = ''
      this.notify('Filters cleared', 'info')
    },

    hasChange(productId) {
      const change = this.changes[productId]
      return change && (change.cost_price || change.sale_price)
    },

    clearChange(productId) {
      this.$set(this.changes, productId, {
        id: productId,
        cost_price: '',
        sale_price: ''
      })
    },

    handleClearChanges() {
      this.initializeChanges()
      this.notify('All changes cleared', 'info')
    },

    async handleSave() {
      const updates = Object.values(this.changes)
        .filter(change => change.cost_price || change.sale_price)
      
      if (updates.length === 0) return

      this.saving = true
      try {
        const { data } = await this.$axios.patch('/api/product-temps/bulk-update-prices', {
          updates
        })
        
        if (data.success) {
          this.notify(`Updated ${data.summary.successful} products`, 'success')
          
          // Update product data and clear changes for successful updates
          data.results.filter(r => r.success).forEach(result => {
            const product = this.allProducts.find(p => p.id === result.id)
            if (product && result.product) {
              product.cost_price = result.product.cost_price
              product.pro_price = result.product.pro_price
            }
            this.clearChange(result.id)
          })
          
          // Refilter products to update display
          this.filterProducts()
          
          if (data.summary.failed > 0) {
            this.notify(`${data.summary.failed} updates failed`, 'warning')
          }
        } else {
          this.notify('Failed to update prices', 'error')
        }
      } catch (error) {
        console.error('Error:', error)
        this.notify('Error saving prices', 'error')
      } finally {
        this.saving = false
      }
    },

    notify(message, type = 'info') {
      this.notification = { message, type, show: true }
      setTimeout(() => this.notification.show = false, 3000)
    },

    getLocationDisplay(location) {
      const locationMap = {
        'shop': 'ຮ້ານບຸນລວຍ',
        'store': 'ສາງຫນອງບຶກ'
      }
      return locationMap[location] || location || 'No location'
    },

    format(value) {
      return value ? `$${parseFloat(value).toFixed(2)}` : '$0.00'
    },

    formatDateTime(dateString) {
      if (!dateString) return '-'
      
      try {
        const date = new Date(dateString)
        // Format as local date and time
        return date.toLocaleString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      } catch (error) {
        console.error('Error formatting date:', error)
        return '-'
      }
    }
  }
}
</script>

<style scoped>
.price-manager {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #eee;
}

.header h2 {
  margin: 0;
  color: #333;
  font-weight: 600;
}

.controls {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.search {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
  font-size: 14px;
}

.search:focus {
  outline: none;
  border-color: #007bff;
}

.location-filter {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  min-width: 140px;
}

.location-filter:focus {
  outline: none;
  border-color: #007bff;
}

/* Buttons */
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn.filter-clear {
  background: #6f42c1;
  color: white;
}

.btn.filter-clear:hover:not(:disabled) {
  background: #5a32a3;
}

.btn.clear {
  background: #6c757d;
  color: white;
}

.btn.clear:hover:not(:disabled) {
  background: #5a6268;
}

.btn.save {
  background: #007bff;
  color: white;
  font-weight: 500;
}

.btn.save:hover:not(:disabled) {
  background: #0056b3;
}

/* Notification */
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

.notification-success { background: #28a745; }
.notification-error { background: #dc3545; }
.notification-warning { background: #ffc107; color: #000; }
.notification-info { background: #17a2b8; }

@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Status */
.status {
  background: #fff3cd;
  color: #856404;
  padding: 8px 15px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #ffeaa7;
}

.filter-status {
  background: #e7f3ff;
  color: #004085;
  padding: 8px 15px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #b8daff;
}

/* Table */
.table-wrapper {
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
  max-height: 70vh;
  overflow-y: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.table thead th {
  background: #f8f9fa;
  padding: 12px 8px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #dee2e6;
  position: sticky;
  top: 0;
  z-index: 10;
}

.table tbody td {
  padding: 10px 8px;
  border-bottom: 1px solid #dee2e6;
  vertical-align: top;
}

.table tbody tr:hover {
  background: #f8f9fa;
}

.table tbody tr.changed {
  background: #fff8dc;
}

/* Table Cells */
.line-number {
  color: #6c757d;
  font-size: 12px;
  text-align: center;
  width: 40px;
}

.product .name {
  font-weight: 500;
  color: #333;
}

.product .desc {
  font-size: 12px;
  color: #6c757d;
  margin-top: 2px;
}

.location {
  width: 120px;
}

.location-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  background: #e9ecef;
  color: #495057;
}

.location-badge.location-shop {
  background: #d4edda;
  color: #155724;
}

.location-badge.location-store {
  background: #cce5ff;
  color: #004085;
}

.location-badge.location-warehouse {
  background: #f8d7da;
  color: #721c24;
}

.location-badge.location-online {
  background: #fff3cd;
  color: #856404;
}

.barcode {
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #6c757d;
}

.price {
  font-family: 'Courier New', monospace;
  color: #28a745;
  font-weight: 500;
}

.input {
  width: 90px;
  padding: 4px 6px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 13px;
  font-family: 'Courier New', monospace;
}

.input:focus {
  outline: none;
  border-color: #007bff;
}

.created-time {
  font-size: 12px;
  color: #6c757d;
  white-space: nowrap;
}

.status {
  text-align: center;
  width: 60px;
}

.changed-badge {
  color: #ffc107;
  font-size: 16px;
  margin-right: 5px;
}

.clear-btn {
  background: none;
  border: none;
  color: #dc3545;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.clear-btn:hover {
  background: #f8f9fa;
}

/* Loading/Empty States */
.loading, .empty {
  text-align: center;
  padding: 40px;
  color: #6c757d;
}

/* Footer */
.footer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  text-align: center;
  color: #6c757d;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
  
  .controls {
    justify-content: center;
  }
  
  .search {
    width: 150px;
  }
  
  .location-filter {
    min-width: 120px;
  }
  
  .table-wrapper {
    overflow-x: auto;
  }
  
  .table {
    min-width: 900px;
  }
  
  .input {
    width: 70px;
  }
  
  .created-time {
    font-size: 11px;
  }
  
  .location-badge {
    font-size: 10px;
    padding: 2px 6px;
  }
}

@media (max-width: 1200px) {
  .controls {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .btn {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  .search, .location-filter {
    font-size: 13px;
  }
}
</style>