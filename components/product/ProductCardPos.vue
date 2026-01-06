<template>
  <div>
    <v-hover v-slot:default="{ hover }" open-delay="100">
      <v-card
        :elevation="hover ? 16 : 4"
        hover
        outlined
        class="ma-0 text-center cursor-pointer product-card d-flex flex-column position-relative overflow-hidden"
        height="220"
        :disabled="
          (!product.isActive || stock <= 0) && product.validateStockOnSale == 1
        "
        :class="{
          'product-disabled':
            (!product.isActive || stock <= 0) &&
            product.validateStockOnSale == 1,
          'promotion-eligible': isProductInPromotion(product),
          'customer-grade-pricing': getCustomerGradePrice(product),
        }"
        @click="handleCardClick"
      >
        <!-- Background Image -->
        <div
          class="product-background ma-0"
          :class="{
            'grayscale-filter':
              (!product.isActive || stock <= 0) &&
              product.validateStockOnSale == 1,
          }"
          :style="
            !imageError
              ? `background-image: url('${host}/uploads/${imagePath}')`
              : ''
          "
        ></div>

        <!-- Fallback for missing image -->
        <div v-if="imageError" class="broken-image-background">
          <v-icon size="48" color="grey lighten-2"
            >mdi-image-broken-variant</v-icon
          >
        </div>

        <!-- Content Overlay -->
        <div
          class="content-overlay d-flex flex-column justify-space-between fill-height"
        >
          <!-- Top Section - Badges -->
          <div class="top-section pa-2">
            <!-- Promotion indicator -->
            <v-icon
              v-if="isProductInPromotion(product)"
              color="success"
              class="promotion-badge"
              small
            >
              mdi-tag
            </v-icon>

            <!-- Customer Grade Badge -->
            <v-chip
              v-if="getCustomerGradePrice(product)"
              x-small
              :color="getGradeColor(selectedCustomer?.grade)"
              text-color="white"
              class="grade-price-badge"
            >
              <v-icon x-small left>mdi-account-star</v-icon>
              Grade {{ selectedCustomer?.grade }}
            </v-chip>

            <!-- Price List Badge (if available) -->
            <v-chip
              v-else-if="hasAvailablePriceLists(product)"
              x-small
              color="purple"
              text-color="white"
              class="price-list-badge"
            >
              <v-icon x-small left>mdi-tag-multiple</v-icon>
              {{ getProductPriceLists(product).length }} prices
            </v-chip>

            <!-- Stock chip in top right -->
            <v-chip
              :color="getStockColor(stock)"
              text-color="white"
              x-small
              class="stock-chip-overlay"
            >
              {{ stock }}
            </v-chip>
          </div>

          <!-- Bottom Section - Product Info with enhanced readability -->
          <div class="bottom-section-enhanced">
            <!-- Text readability backdrop -->
            <div class="text-backdrop"></div>

            <!-- Product Name with enhanced visibility -->
            <div class="product-name-enhanced">
              <div class="product-name-text enhanced-text">
                {{ productName }}
              </div>
            </div>

            <!-- Price and Actions Section -->
            <div class="price-actions-enhanced">
              <!-- Enhanced Price Display -->
              <div class="price-section-enhanced">
                <!-- Show customer grade price if available -->
                <div v-if="getCustomerGradePrice(product)" class="text-center">
                  <!-- Base price (struck through) -->
                  <div
                    class="caption text-decoration-line-through price-text enhanced-text"
                    style="opacity: 0.85"
                  >
                    {{ formatNumber(product.localPrice || product.pro_price) }}
                  </div>
                  <!-- Customer grade price (highlighted) -->
                  <div
                    class="subtitle-2 font-weight-bold price-text enhanced-text price-highlight"
                  >
                    {{ formatNumber(getCustomerGradePrice(product)) }}
                  </div>
                </div>
                <!-- Default price display -->
                <div v-else>
                  <div
                    class="subtitle-2 font-weight-bold price-text enhanced-text price-highlight"
                  >
                    {{ formatNumber(product.localPrice || product.pro_price) }}
                  </div>
                  <!-- Show price range if price lists available -->
                  <div
                    v-if="hasAvailablePriceLists(product)"
                    class="caption price-text enhanced-text"
                    style="opacity: 0.85"
                  >
                    {{ getPriceRangeText(product) }}
                  </div>
                </div>

                <!-- Action Button (moved inline with price) -->
                <div
                  v-if="
                    hasAvailablePriceLists(product) ||
                    !getCustomerGradePrice(product)
                  "
                  class="d-inline-block ml-2"
                >
                  <v-btn
                    @click.stop="handlePriceSelection"
                    color="primary"
                    outlined
                    x-small
                    icon
                    :disabled="
                      (!product.isActive || stock <= 0) &&
                      product.validateStockOnSale == 1
                    "
                    class="price-select-btn-enhanced"
                  >
                    <v-icon x-small>mdi-tag-multiple</v-icon>
                  </v-btn>
                </div>
              </div>

              <!-- Status Indicators -->
              <div v-if="!product.isActive" class="status-overlay-enhanced">
                <v-chip
                  x-small
                  color="error"
                  text-color="white"
                  class="status-chip-enhanced"
                >
                  INACTIVE
                </v-chip>
              </div>
              <div
                v-else-if="stock <= 0 && product.validateStockOnSale == 1"
                class="status-overlay-enhanced"
              >
                <v-chip
                  x-small
                  color="warning"
                  text-color="white"
                  class="status-chip-enhanced"
                >
                  OUT OF STOCK
                </v-chip>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getFormatNum } from '../../common/index'
import { hostName } from '~/common/api'

export default {
  name: 'ProductCardPosEnhanced',
  props: {
    imagePath: { type: String, default: 'default-product.png' },
    productName: { type: String, default: '' },
    product: { type: Object, default: () => ({}) },
    stock: { type: Number, default: 0 },
    selectedCustomer: { type: Object, default: null },
    promotions: { type: Array, default: () => [] },
    priceLists: { type: Array, default: () => [] },
  },

  data() {
    return {
      imageError: false,
      imageLoading: true,
    }
  },

  computed: {
    ...mapGetters(['currentSelectedCustomer', 'cartOfProduct']),

    host() {
      return hostName()
    },

    effectiveCustomer() {
      return this.selectedCustomer || this.currentSelectedCustomer
    },
  },

  mounted() {
    this.checkImage()
  },

  methods: {
    ...mapActions(['addProduct']),

    handleCardClick() {
      // Default card click behavior - could be quick add or open product details
      this.handleQuickAdd()
    },

    // Final improved methods to replace in your component

    handleQuickAdd(isGift = false) {
      console.info(`DATA ADD FROM PRODUCT CART .....`)
      if (!this.validateProductAvailability()) {
        return
      }

      // Check card_count limit before adding to cart
      if (!this.validateCardCount()) {
        return
      }

      // Use customer grade price if available, otherwise use default price
      const productToAdd = {
        ...this.product,
        localPrice:
          this.getCustomerGradePrice(this.product) ||
          this.product.localPrice ||
          this.product.pro_price,
        isGift: isGift,
        lineUUIDCheck: false,
        priceListId: null,
        lineUUID: Date.now() + Math.random().toString(16), //TODO: Resolve this logic issue for adding new item
      }

      console.info(`CART PRODUCT ${JSON.stringify(this.cartOfProduct)}`)
      this.addProduct(productToAdd)
      console.info(`EMIT CUSTOMER SCREEN `)
      // this.$emit('update-customer-screen')
      this.$root.$emit('update-cus-screen')
      // this.$emit('update-cus-screen')

      // Show success feedback with quantity info
      if (this.$toast) {
        const existingItem = this.cartOfProduct.find(
          (item) => item.pro_id === this.product.pro_id
        )
        const newQty = existingItem ? existingItem.qty + 1 : 1
        const limit = this.product.card_count

        if (limit && limit > 0) {
          const remaining = limit - newQty
          this.$toast.success(
            `${this.productName} added to cart. ${
              remaining > 0 ? `${remaining} more allowed` : 'Limit reached'
            }`,
            { position: 'bottom-center' }
          )
        } else {
          this.$toast.success(`${this.productName} added to cart`, {
            position: 'bottom-center',
          })
        }
      }
    },

    validateCardCount() {
      const cardCountLimit = this.product.card_count
      console.info(`product det ${JSON.stringify(this.product)}`)
      // If card_count is not defined, null, or 0, don't allow any additions
      if ((!cardCountLimit || cardCountLimit <= 0) && this.product.validateStockOnSale==1) {
        if (this.$toast) {
          this.$toast.error(`This product is not available for purchase`)
        }
        return false
      }

      // Find if this product is already in the cart
      const existingCartItem = this.cartOfProduct.find(
        (item) => item.pro_id === this.product.pro_id
      )

      if (existingCartItem) {
        const currentQty = existingCartItem.qty

        // Check if adding one more would exceed card_count
        if (currentQty >= cardCountLimit) {
          if (this.$toast) {
            this.$toast.error(
              `Cannot add more. You have ${currentQty}/${cardCountLimit} items for ${this.product.pro_name}`,
              { position: 'bottom-center' }
            )
          }
          return false
        }
      }

      return true
    },

    handlePriceSelection() {
      if (!this.validateProductAvailability()) {
        return
      }

      // Emit event for parent to handle price selection dialog
      this.$emit('open-price-selector', this.product)
    },

    validateProductAvailability() {
      if (!this.product.isActive) {
        this.showError('Product is inactive')
        return false
      }

      if (this.stock <= 0 && this.product.validateStockOnSale == 1) {
        this.showError('Stock not enough')
        return false
      }

      return true
    },

    showError(message) {
      if (this.$toast) {
        this.$toast.error(message)
      } else if (this.$swal) {
        this.$swal.fire({
          icon: 'error',
          title: 'Error',
          text: message,
          timer: 2000,
        })
      } else {
        alert(message)
      }
    },

    handleImageError() {
      this.imageError = true
      this.imageLoading = false
    },

    handleImageLoad() {
      this.imageError = false
      this.imageLoading = false
    },

    // Preload image to detect errors
    checkImage() {
      const img = new Image()
      img.onload = this.handleImageLoad
      img.onerror = this.handleImageError
      img.src = `${this.host}/uploads/${this.imagePath}`
    },

    formatNumber(val) {
      return getFormatNum(val)
    },

    // Promotion-related methods
    isProductInPromotion(product) {
      if (!this.promotions || this.promotions.length === 0) return false
      return this.promotions.some(
        (promo) =>
          promo.productId === product.id &&
          promo.isActive &&
          new Date() >= new Date(promo.startDate) &&
          new Date() <= new Date(promo.endDate)
      )
    },

    // Customer grade pricing methods
    // Customer grade pricing methods
    getCustomerGradePrice(product) {
      // TODO: PLEASE CHECK THIS LOGIC CAREFULLY IMPACT PERFORMANCE
      console.group('🏷️ [GRADE PRICING] Getting customer grade price')

      // Log input parameters
      console.info('📦 [INPUT] Product:', {
        id: product?.id,
        name: product?.pro_name || product?.name,
        hasGradePricing: !!product?.gradePricing,
        gradePricingCount: product?.gradePricing?.length || 0,
      })

      console.info('👤 [CUSTOMER] Effective customer:', {
        customer: this.effectiveCustomer,
        hasGrade: !!this.effectiveCustomer?.grade,
        grade: this.effectiveCustomer?.grade,
        customerName:
          this.effectiveCustomer?.name || this.effectiveCustomer?.company,
      })

      // Check for effective customer and grade
      if (!this.effectiveCustomer?.grade) {
        console.warn(
          '⚠️ [VALIDATION] No effective customer or customer grade found'
        )
        console.groupEnd()
        return null
      }

      // Check for product grade pricing
      if (!product.gradePricing) {
        console.info(
          'ℹ️ [VALIDATION] Product has no grade pricing configuration'
        )
        console.groupEnd()
        return null
      }

      // Log available grade pricing options
      console.info(
        '💰 [AVAILABLE PRICES] Grade pricing options:',
        product.gradePricing.map((pricing) => ({
          grade: pricing.grade,
          price: pricing.price,
          isActive: pricing.isActive !== false,
        }))
      )

      // Search for matching grade
      console.info(
        '🔍 [SEARCH] Looking for grade:',
        this.effectiveCustomer.grade
      )

      const gradePrice = product.gradePricing.find((pricing) => {
        const matches = pricing.grade === this.effectiveCustomer.grade
        console.info(
          `🔍 [COMPARE] Grade "${pricing.grade}" === "${this.effectiveCustomer.grade}": ${matches}`
        )
        return matches
      })

      // Log result
      if (gradePrice) {
        console.info('✅ [SUCCESS] Found matching grade price:', {
          grade: gradePrice.grade,
          price: gradePrice.price,
          originalPrice: product.localPrice || product.pro_price,
          discount:
            (product.localPrice || product.pro_price) - gradePrice.price,
        })

        console.groupEnd()
        return gradePrice.price
      } else {
        console.warn(
          '❌ [NOT_FOUND] No grade price found for customer grade:',
          {
            customerGrade: this.effectiveCustomer.grade,
            availableGrades: product.gradePricing.map((p) => p.grade),
          }
        )

        console.groupEnd()
        return null
      }
    },

    getGradeColor(grade) {
      const gradeColors = {
        A: 'green',
        B: 'blue',
        C: 'orange',
        D: 'red',
      }
      return gradeColors[grade] || 'grey'
    },

    // Price list methods
    hasAvailablePriceLists(product) {
      if (!this.priceLists || this.priceLists.length === 0) return false
      return this.priceLists.some(
        (priceList) => priceList.productId === product.id && priceList.isActive
      )
    },

    getProductPriceLists(product) {
      if (!this.priceLists) return []
      return this.priceLists.filter(
        (priceList) => priceList.productId === product.id && priceList.isActive
      )
    },

    getPriceRangeText(product) {
      const priceLists = this.getProductPriceLists(product)
      if (priceLists.length === 0) return ''

      const prices = priceLists.map((pl) => pl.price)
      const minPrice = Math.min(...prices)
      const maxPrice = Math.max(...prices)

      if (minPrice === maxPrice) {
        return `Special: ${this.formatNumber(minPrice)}`
      }

      return `${this.formatNumber(minPrice)} - ${this.formatNumber(maxPrice)}`
    },

    // Stock color coding
    getStockColor(stockCount) {
      if (stockCount <= 0) return 'error'
      if (stockCount <= 5) return 'warning'
      if (stockCount <= 20) return 'orange'
      return 'success'
    },
  },
}
</script>

<style scoped>
.product-card {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 220px !important; /* Fixed height for all cards */
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25) !important;
}

.product-card:hover .content-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.05) 70%,
    rgba(0, 0, 0, 0.4) 100%
  ) !important;
}

.product-card:hover .text-backdrop {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  ) !important;
}

.product-disabled {
  opacity: 0.6;
  cursor: not-allowed !important;
  pointer-events: none;
}

.promotion-eligible {
  border: 2px solid #4caf50 !important;
}

.customer-grade-pricing {
  border: 2px solid #2196f3 !important;
}

/* Background Image Styling */
.product-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.broken-image-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.content-overlay {
  position: relative;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0.3) 100%
  );
  transition: background 0.3s ease;
}

/* Enhanced bottom section with better contrast */
.bottom-section-enhanced {
  position: relative;
  margin-top: auto;
  padding: 6px;
}

/* Text backdrop for guaranteed readability */
.text-backdrop {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  transition: background 0.3s ease;
  z-index: 1;
}

/* Enhanced text styling with multiple contrast techniques */
.enhanced-text {
  position: relative;
  z-index: 2;
  /* Multiple text shadow layers for maximum contrast */
  text-shadow: 0 0 3px rgba(0, 0, 0, 1), 0 0 6px rgba(0, 0, 0, 0.8),
    1px 1px 2px rgba(0, 0, 0, 0.9), -1px -1px 2px rgba(0, 0, 0, 0.9),
    1px -1px 2px rgba(0, 0, 0, 0.9), -1px 1px 2px rgba(0, 0, 0, 0.9);
  color: white !important;
  font-weight: bold;
}

.product-name-enhanced {
  position: relative;
  z-index: 2;
  margin-bottom: 4px;
}

.product-name-text {
  font-size: 0.85rem !important;
  line-height: 1.1;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-block;
  max-width: 100%;
  word-wrap: break-word;
  backdrop-filter: blur(2px);
}

/* Enhanced price section */
.price-actions-enhanced {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.price-section-enhanced {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.price-text {
  padding: 3px 8px;
  border-radius: 4px;
  margin: 2px;
  display: inline-block;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
}

.price-highlight {
  background: rgba(0, 0, 0, 0.6) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

/* Enhanced action button */
.price-select-btn-enhanced {
  height: 24px !important;
  width: 24px !important;
  min-width: 24px !important;
  background: rgba(255, 255, 255, 0.95) !important;
  border: 2px solid var(--v-primary-base) !important;
  margin-left: 4px;
}

/* Enhanced status indicators */
.status-overlay-enhanced {
  position: relative;
  z-index: 2;
  margin-top: 4px;
  text-align: center;
}

.status-chip-enhanced {
  font-size: 0.65rem !important;
  height: 18px !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
}

/* Badge positioning */
.promotion-badge {
  position: absolute;
  top: 8px;
  right: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.grade-price-badge {
  position: absolute;
  top: 8px;
  left: 8px;
}

.price-list-badge {
  position: absolute;
  top: 8px;
  left: 8px;
}

.stock-chip-overlay {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 0.7rem;
  height: 20px;
  min-width: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Grayscale filter ONLY for disabled products */
.grayscale-filter {
  filter: grayscale(100%) brightness(0.7);
}

/* Animation for adding to cart */
.product-card.adding {
  animation: pulse-green 0.6s ease-in-out;
}

@keyframes pulse-green {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .product-card {
    height: 200px !important;
  }

  .product-name-text {
    font-size: 0.8rem !important;
    padding: 3px 6px;
  }

  .price-text {
    font-size: 0.75rem !important;
    padding: 2px 6px;
  }

  .price-select-btn-enhanced {
    height: 20px !important;
    width: 20px !important;
    min-width: 20px !important;
  }

  .bottom-section-enhanced {
    padding: 4px;
  }
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  .enhanced-text {
    /* Inverted shadows for dark backgrounds */
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.8),
      0 0 6px rgba(255, 255, 255, 0.6), 1px 1px 2px rgba(255, 255, 255, 0.7),
      -1px -1px 2px rgba(255, 255, 255, 0.7),
      1px -1px 2px rgba(255, 255, 255, 0.7),
      -1px 1px 2px rgba(255, 255, 255, 0.7);
    color: black !important;
  }
}
</style>