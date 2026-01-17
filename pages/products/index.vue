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

    <!-- Products Table -->
    <div class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th width="40">#</th>
            <th>Product Name</th>
            <th width="120">Barcode</th>
            <th width="100">Cost ($)</th>
            <th width="100">New Cost</th>
            <th width="100">Sale ($)</th>
            <th width="100">New Sale</th>
            <th width="60">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="8" class="loading">Loading products...</td>
          </tr>
          <tr v-else-if="products.length === 0">
            <td colspan="8" class="empty">
              No products found
              <button v-if="searchTerm" @click="searchTerm = ''" class="btn">Clear Search</button>
            </td>
          </tr>
          <tr 
            v-else
            v-for="(product, index) in products" 
            :key="product.id"
            :class="{ changed: hasChange(product.id) }"
          >
            <td class="line-number">{{ index + 1 }}</td>
            <td class="product">
              <div class="name">{{ product.pro_name }}</div>
              <div v-if="product.pro_desc" class="desc">{{ product.pro_desc }}</div>
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
      {{ products.length }} products {{ searchTerm ? 'found' : 'total' }}
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
    }
  },

  watch: {
    searchTerm: {
      handler(val) {
        this.filterProducts(val)
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
          params: { isActive: 'true', sortBy: 'pro_name', sortOrder: 'ASC' }
        })
        
        if (data.success) {
          this.allProducts = data.data
          this.initializeChanges()
          this.filterProducts(this.searchTerm)
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

    filterProducts(term) {
      if (!term.trim()) {
        this.products = [...this.allProducts]
        return
      }
      
      const search = term.toLowerCase()
      this.products = this.allProducts.filter(p => 
        p.pro_name.toLowerCase().includes(search) ||
        (p.pro_desc && p.pro_desc.toLowerCase().includes(search)) ||
        (p.barCode && p.barCode.toLowerCase().includes(search))
      )
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
          this.filterProducts(this.searchTerm)
          
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

    format(value) {
      return value ? `$${parseFloat(value).toFixed(2)}` : '$0.00'
    }
  }
}
</script>

<style scoped>
.price-manager {
  max-width: 1200px;
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

/* Buttons */
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  
  .table-wrapper {
    overflow-x: auto;
  }
  
  .table {
    min-width: 700px;
  }
  
  .input {
    width: 70px;
  }
}
</style>