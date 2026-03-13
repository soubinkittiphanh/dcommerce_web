<!-- components/ProductPriceManager.vue -->
<template>
  <div class="product-price-manager">
    <!-- Notification -->
    <transition name="slide-right">
      <div
        v-if="notification.show"
        :class="`notification notification-${notification.type}`"
      >
        {{ notification.message }}
      </div>
    </transition>

    <!-- Header -->
    <div class="page-header">
      <h1>Product Price Management</h1>
      <p>Update cost prices and sale prices for multiple products</p>
    </div>

    <!-- Search and Controls -->
    <div class="controls-section">
      <div class="search-container">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search by product name or barcode..."
          class="search-input"
        />
      </div>
      
      <div class="action-buttons">
        <button
          @click="handleClearChanges"
          class="btn btn-secondary"
          :disabled="!hasAnyChanges"
        >
          Clear Changes
        </button>
        <button
          @click="handleBulkSave"
          class="btn btn-primary"
          :disabled="!canSave"
        >
          {{ saving ? 'Saving...' : `Save Changes (${pendingChanges})` }}
        </button>
      </div>
    </div>

    <!-- Summary Info -->
    <transition name="fade">
      <div v-if="pendingChanges > 0" class="summary-info">
        <span class="pending-changes">
          {{ pendingChanges }} pending changes • {{ selectedProducts.size }} products selected
        </span>
      </div>
    </transition>

    <!-- Loading State -->
    <div v-if="loading && products.length === 0" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading products...</p>
    </div>

    <!-- Products Table -->
    <div v-else class="table-container">
      <table class="products-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                :checked="selectAll"
                @change="handleSelectAll"
                :disabled="products.length === 0"
              />
            </th>
            <th>Product Name</th>
            <th>Barcode</th>
            <th>Current Cost Price</th>
            <th>New Cost Price</th>
            <th>Current Sale Price</th>
            <th>New Sale Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products"
            :key="product.id"
            :class="{ 'row-changed': hasProductChanges(product.id) }"
          >
            <td>
              <input
                type="checkbox"
                :checked="selectedProducts.has(product.id)"
                @change="(e) => handleProductSelect(product.id, e.target.checked)"
              />
            </td>
            <td class="product-name">
              <strong>{{ product.pro_name }}</strong>
              <div v-if="product.pro_desc" class="product-desc">
                {{ product.pro_desc }}
              </div>
            </td>
            <td class="barcode">{{ product.barCode || 'N/A' }}</td>
            <td class="current-price">{{ formatCurrency(product.cost_price) }}</td>
            <td>
              <input
                :value="getPriceChange(product.id, 'cost_price')"
                @input="(e) => handlePriceChange(product.id, 'cost_price', e.target.value)"
                @blur="validatePrice"
                type="number"
                step="0.01"
                min="0"
                :placeholder="formatCurrency(product.cost_price)"
                class="price-input"
              />
            </td>
            <td class="current-price">{{ formatCurrency(product.pro_price) }}</td>
            <td>
              <input
                :value="getPriceChange(product.id, 'sale_price')"
                @input="(e) => handlePriceChange(product.id, 'sale_price', e.target.value)"
                @blur="validatePrice"
                type="number"
                step="0.01"
                min="0"
                :placeholder="formatCurrency(product.pro_price)"
                class="price-input"
              />
            </td>
            <td>
              <button
                v-if="hasProductChanges(product.id)"
                @click="clearProductChanges(product.id)"
                class="btn-clear-row"
                title="Clear changes for this product"
              >
                ✕
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination">
      <button
        @click="handlePageChange(currentPage - 1)"
        :disabled="currentPage === 1"
        class="btn btn-secondary"
      >
        Previous
      </button>
      
      <span class="page-info">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      
      <button
        @click="handlePageChange(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="btn btn-secondary"
      >
        Next
      </button>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && products.length === 0" class="empty-state">
      <p>No products found</p>
      <button
        v-if="searchTerm"
        @click="clearSearch"
        class="btn btn-primary"
      >
        Clear Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPriceManager',
  
  data() {
    return {
      products: [],
      loading: true,
      saving: false,
      searchTerm: '',
      currentPage: 1,
      totalPages: 1,
      priceChanges: {},
      selectAll: false,
      selectedProducts: new Set(),
      notification: {
        message: '',
        type: '',
        show: false
      },
      searchDebounce: null
    }
  },

  computed: {
    pendingChanges() {
      return this.getSelectedChanges().length
    },

    hasAnyChanges() {
      return Object.keys(this.priceChanges).length > 0
    },

    canSave() {
      return !this.saving && this.pendingChanges > 0 && this.selectedProducts.size > 0
    }
  },

  watch: {
    searchTerm(newVal) {
      clearTimeout(this.searchDebounce)
      this.searchDebounce = setTimeout(() => {
        if (this.currentPage === 1) {
          this.fetchProducts(1, newVal)
        } else {
          this.currentPage = 1
        }
      }, 500)
    },

    currentPage(newVal) {
      this.fetchProducts(newVal, this.searchTerm)
    },

    selectedProducts: {
      handler(newVal) {
        this.selectAll = newVal.size === this.products.length && this.products.length > 0
      },
      deep: true
    }
  },

  async mounted() {
    await this.fetchProducts(1, this.searchTerm)
  },

  beforeDestroy() {
    if (this.searchDebounce) {
      clearTimeout(this.searchDebounce)
    }
  },

  methods: {
    // Fetch products from API
    async fetchProducts(page = 1, search = '') {
      this.loading = true
      try {
        const response = await this.$axios.get('/api/product-temps', {
          params: {
            page,
            limit: 50,
            search
          }
        })
        
        if (response.data.success) {
          this.products = response.data.data
          this.totalPages = response.data.pagination.totalPages
          this.currentPage = response.data.pagination.currentPage
        } else {
          this.showNotification('Failed to load products', 'error')
        }
      } catch (error) {
        console.error('Error fetching products:', error)
        this.showNotification('Error loading products', 'error')
      } finally {
        this.loading = false
      }
    },

    // Show notification
    showNotification(message, type = 'info') {
      this.notification = { message, type, show: true }
      setTimeout(() => {
        this.notification.show = false
      }, 4000)
    },

    // Handle price change input
    handlePriceChange(productId, field, value) {
      if (!this.priceChanges[productId]) {
        this.$set(this.priceChanges, productId, { id: productId })
      }
      this.$set(this.priceChanges[productId], field, value)
    },

    // Validate price input
    validatePrice(event) {
      const value = event.target.value
      if (value && (isNaN(value) || parseFloat(value) < 0)) {
        this.showNotification('Please enter a valid price (0 or greater)', 'warning')
        event.target.focus()
      }
    },

    // Get price change value
    getPriceChange(productId, field) {
      return this.priceChanges[productId]?.[field] || ''
    },

    // Check if product has changes
    hasProductChanges(productId) {
      const changes = this.priceChanges[productId]
      return changes && (
        (changes.cost_price !== undefined && changes.cost_price !== '') ||
        (changes.sale_price !== undefined && changes.sale_price !== '')
      )
    },

    // Clear changes for specific product
    clearProductChanges(productId) {
      this.$delete(this.priceChanges, productId)
      
      // Remove from selected if no changes
      const newSelected = new Set(this.selectedProducts)
      newSelected.delete(productId)
      this.selectedProducts = newSelected
    },

    // Handle individual product selection
    handleProductSelect(productId, isSelected) {
      const newSet = new Set(this.selectedProducts)
      if (isSelected) {
        newSet.add(productId)
      } else {
        newSet.delete(productId)
      }
      this.selectedProducts = newSet
    },

    // Handle select all
    handleSelectAll() {
      if (this.selectAll) {
        this.selectedProducts = new Set()
      } else {
        this.selectedProducts = new Set(this.products.map(p => p.id))
      }
    },

    // Handle page change
    handlePageChange(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.currentPage = newPage
      }
    },

    // Get changes for selected products only
    getSelectedChanges() {
      return Object.values(this.priceChanges).filter(change => {
        return this.selectedProducts.has(change.id) && (
          (change.cost_price !== undefined && change.cost_price !== '') ||
          (change.sale_price !== undefined && change.sale_price !== '')
        )
      })
    },

    // Handle bulk save
    async handleBulkSave() {
      const changes = this.getSelectedChanges()
      
      if (changes.length === 0) {
        this.showNotification('No price changes to save', 'warning')
        return
      }

      if (this.selectedProducts.size === 0) {
        this.showNotification('Please select products to update', 'warning')
        return
      }

      this.saving = true
      try {
        const response = await this.$axios.patch('/api/product-temps/bulk-update-prices', {
          updates: changes
        })
        
        if (response.data.success) {
          this.showNotification(
            `Successfully updated ${response.data.summary.successful} products`, 
            'success'
          )
          
          if (response.data.summary.failed > 0) {
            this.showNotification(
              `${response.data.summary.failed} updates failed`, 
              'warning'
            )
          }

          // Clear changes for successful updates
          const successfulIds = response.data.results
            .filter(r => r.success)
            .map(r => r.id)
          
          successfulIds.forEach(id => {
            this.$delete(this.priceChanges, id)
          })

          // Update products with new values
          this.products = this.products.map(product => {
            const update = response.data.results.find(r => r.id === product.id && r.success)
            return update ? { ...product, ...update.product } : product
          })

          this.selectedProducts = new Set()
        } else {
          this.showNotification(response.data.message || 'Failed to update prices', 'error')
        }
      } catch (error) {
        console.error('Error saving prices:', error)
        this.showNotification('Error saving prices', 'error')
      } finally {
        this.saving = false
      }
    },

    // Clear all changes
    handleClearChanges() {
      this.priceChanges = {}
      this.selectedProducts = new Set()
      this.showNotification('All changes cleared', 'info')
    },

    // Clear search
    clearSearch() {
      this.searchTerm = ''
    },

    // Format currency
    formatCurrency(value) {
      return value ? `$${parseFloat(value).toFixed(2)}` : '$0.00'
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/product-price-manager.css';

/* Vue transition styles */
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter, .slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>