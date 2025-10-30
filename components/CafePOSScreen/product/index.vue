<template>
  <v-card
    elevation="2"
    hover
    class="text-center pa-4 cursor-pointer product-card"
    height="auto"
    :disabled="
      (!product.isActive || product.stock_count <= 0) &&
      product.validateStockOnSale
    "
    :class="{
      'product-disabled':
        (!product.isActive || product.stock_count <= 0) &&
        product.validateStockOnSale,
      'promotion-eligible': isProductInPromotion(product),
    }"
  >
    <!-- Promotion indicator -->
    <v-icon
      v-if="isProductInPromotion(product)"
      color="success"
      class="promotion-badge"
      small
    >
      mdi-tag
    </v-icon>

    <!-- Product Title -->
    <v-card-title
      class="justify-center text-subtitle-1 pa-1"
      style="line-height: 1.2"
    >
      {{ product.pro_name }}
    </v-card-title>

    <v-card-text class="pa-2">
      <!-- Price Display with Override Option -->
      <div class="price-section mb-2">
        <div class="d-flex align-center justify-center">
          <!-- Base Price -->
          <div
            class="text-h5 font-weight-bold"
            :class="selectedPriceList ? 'text-decoration-line-through grey--text' : 'primary--text'"
          >
            {{ formatPrice(product.pro_price) }}
          </div>
          
          <!-- Effective Price (if different) -->
          <div
            v-if="selectedPriceList && effectivePrice !== product.pro_price"
            class="text-h5 primary--text font-weight-bold ml-2"
          >
            {{ formatPrice(effectivePrice) }}
          </div>
        </div>

        <!-- Price List Selector -->
        <div v-if="availablePriceLists.length > 0" class="mt-2">
          <v-select
            v-model="selectedPriceList"
            :items="priceListOptions"
            item-text="label"
            item-value="value"
            label="Price Grade"
            dense
            outlined
            hide-details
            class="price-list-select"
            @click.stop
            @change="onPriceListChange"
          >
            <template v-slot:prepend-inner>
              <v-icon small color="primary">mdi-tag-multiple</v-icon>
            </template>
            <template v-slot:item="{ item }">
              <div class="d-flex justify-space-between align-center" style="width: 100%">
                <span>{{ item.label }}</span>
                <span class="font-weight-bold primary--text">
                  {{ formatPrice(item.price) }}
                </span>
              </div>
            </template>
          </v-select>
        </div>

        <!-- Custom Price Override Button -->
        <v-btn
          @click.stop="openPriceOverrideDialog"
          text
          x-small
          color="primary"
          class="mt-1"
        >
          <v-icon left x-small>mdi-pencil</v-icon>
          Override Price
        </v-btn>
      </div>

      <!-- Category and Stock Chips -->
      <div class="d-flex justify-space-between align-center mb-2">
        <v-chip
          :color="getCategoryColor(product.categ_name)"
          text-color="white"
          x-small
        >
          {{ product.categ_name }}
        </v-chip>
        <v-chip
          :color="getStockColor(product.stock_count)"
          text-color="white"
          x-small
        >
          {{ product.stock_count }} left
        </v-chip>
      </div>

      <!-- Description -->
      <div
        v-if="product.pro_desc"
        class="caption mt-2 grey--text"
        style="height: 32px; overflow: hidden"
      >
        {{ product.pro_desc }}
      </div>

      <!-- Inactive Badge -->
      <div
        v-if="!product.isActive"
        class="caption mt-1 error--text font-weight-bold"
      >
        INACTIVE
      </div>

      <!-- Add to Cart Button -->
      <v-btn
        @click.stop="handleAddToCart"
        color="primary"
        block
        class="mt-3"
        :disabled="
          (!product.isActive || product.stock_count <= 0) &&
          product.validateStockOnSale
        "
      >
        <v-icon left small>mdi-cart-plus</v-icon>
        Add to Cart
      </v-btn>
    </v-card-text>

    <!-- Price Override Dialog -->
    <v-dialog v-model="showPriceOverrideDialog" max-width="400" @click:outside="closePriceOverrideDialog">
      <v-card>
        <v-card-title class="headline">
          <v-icon left color="primary">mdi-cash-edit</v-icon>
          Override Price
        </v-card-title>
        <v-card-text>
          <div class="mb-3">
            <strong>Product:</strong> {{ product.pro_name }}
          </div>
          <div class="mb-3">
            <strong>Base Price:</strong> {{ formatPrice(product.pro_price) }}
          </div>
          <div v-if="selectedPriceList" class="mb-3">
            <strong>Current Grade:</strong> {{ selectedPriceList.grade }} - {{ formatPrice(effectivePrice) }}
          </div>
          
          <v-text-field
            v-model.number="customPrice"
            label="Custom Price"
            type="number"
            step="100"
            min="0"
            outlined
            dense
            prefix="₭"
            :rules="[
              v => v >= 0 || 'Price must be positive',
              v => v !== null || 'Price is required'
            ]"
          >
            <template v-slot:prepend>
              <v-icon color="primary">mdi-cash</v-icon>
            </template>
          </v-text-field>

          <v-alert
            v-if="customPrice && customPrice !== effectivePrice"
            type="info"
            dense
            text
            class="mt-2"
          >
            Price difference: {{ formatPriceDifference(customPrice - effectivePrice) }}
          </v-alert>

          <v-text-field
            v-model="overrideReason"
            label="Reason for override (optional)"
            outlined
            dense
            counter="200"
            class="mt-3"
          >
            <template v-slot:prepend>
              <v-icon color="primary">mdi-note-text</v-icon>
            </template>
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closePriceOverrideDialog">Cancel</v-btn>
          <v-btn 
            color="primary" 
            @click="applyCustomPrice"
            :disabled="!customPrice || customPrice < 0"
          >
            Apply
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  
  data() {
    return {
      selectedPriceList: null,
      customPrice: null,
      overrideReason: '',
      showPriceOverrideDialog: false
    }
  },
  
  computed: {
    // Get all price lists for this product
    availablePriceLists() {
      // If product has multiple price lists, they should be in an array
      if (Array.isArray(this.product.priceLists)) {
        return this.product.priceLists.filter(pl => pl.isActive)
      }
      // If product has single priceList object
      if (this.product.priceList && this.product.priceList.isActive) {
        return [this.product.priceList]
      }
      return []
    },
    
    // Format price lists for dropdown
    priceListOptions() {
      const options = [
        {
          label: 'Base Price',
          value: null,
          grade: 'Base',
          price: this.product.pro_price
        }
      ]
      
      this.availablePriceLists.forEach(pl => {
        const price = this.calculatePriceListAmount(pl)
        options.push({
          label: `${pl.grade} - ${pl.name}`,
          value: pl,
          grade: pl.grade,
          price: price
        })
      })
      
      return options
    },
    
    // Calculate effective price based on selected price list or custom override
    effectivePrice() {
      // Custom price takes precedence
      if (this.customPrice !== null) {
        return this.customPrice
      }
      
      // Price list selected
      if (this.selectedPriceList) {
        return this.calculatePriceListAmount(this.selectedPriceList)
      }
      
      // Default to base price
      return this.product.pro_price
    }
  },
  
  methods: {
    // Calculate price based on price list type
    calculatePriceListAmount(priceList) {
      if (!priceList) return this.product.pro_price
      
      if (priceList.type === 'Price') {
        // Direct price override
        return priceList.amount
      } else if (priceList.type === 'Percent') {
        // Percentage adjustment
        return this.product.pro_price * (1 + priceList.amount / 100)
      }
      
      return this.product.pro_price
    },
    
    // Handle price list selection change
    onPriceListChange() {
      // Clear custom price when changing price list
      this.customPrice = null
      this.overrideReason = ''
    },
    
    // Open price override dialog
    openPriceOverrideDialog() {
      this.customPrice = this.effectivePrice
      this.overrideReason = ''
      this.showPriceOverrideDialog = true
    },
    
    // Close price override dialog
    closePriceOverrideDialog() {
      this.showPriceOverrideDialog = false
    },
    
    // Apply custom price
    applyCustomPrice() {
      if (this.customPrice && this.customPrice >= 0) {
        this.showPriceOverrideDialog = false
        // The effectivePrice computed property will automatically update
      }
    },
    
    // Handle add to cart with selected price
    handleAddToCart() {
      const cartItem = {
        ...this.product,
        selectedPrice: this.effectivePrice,
        selectedPriceList: this.selectedPriceList,
        customPrice: this.customPrice,
        priceOverrideReason: this.overrideReason || null,
        isPriceOverridden: this.customPrice !== null || this.selectedPriceList !== null
      }
      
      this.$emit('add-to-cart', cartItem)
    },
    
    // Format price display
    formatPrice(amount) {
      if (!amount) return '0 ₭'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(amount)) + ' ₭'
    },
    
    // Format price difference with +/- indicator
    formatPriceDifference(diff) {
      const sign = diff >= 0 ? '+' : ''
      return sign + this.formatPrice(Math.abs(diff))
    },
    
    // Check if product is in promotion
    isProductInPromotion(product) {
      // Your existing logic
      return false
    },
    
    // Get category color
    getCategoryColor(category) {
      // Your existing logic
      return 'primary'
    },
    
    // Get stock color
    getStockColor(count) {
      if (count === 0) return 'error'
      if (count < 10) return 'warning'
      return 'success'
    }
  }
}
</script>

<style scoped>
.product-card {
  position: relative;
  transition: all 0.3s ease;
  min-height: 280px;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.promotion-eligible {
  border: 2px solid #4caf50;
}

.promotion-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}

.price-section {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

.price-list-select {
  font-size: 12px;
}

.price-list-select >>> .v-input__control {
  min-height: 36px !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>