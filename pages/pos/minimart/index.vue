<template>
  <div class="pa-0">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <v-card class="pa-4">
      <!-- Debug Info -->
      <!-- <v-row v-if="showDebugInfo">
        <v-col cols="12">
          <div class="text-caption grey--text mb-2">
            Total Products: {{ findAllProduct.length }} | Search: "{{
              searchKeyword
            }}" | Category: {{ currenctSelectedCategoryId }} | Filtered:
            {{ filterProduct.length }}
          </div>
        </v-col>
      </v-row> -->

      <!-- Products Grid -->
      <v-row v-if="filterProduct.length > 0">
        <v-col cols="12">
          <div class="row">
            <div
              v-for="item in displayedProducts"
              :key="item.id"
              class="col-12 col-md-3 col-sm-6 col-xs-6 text-center product-item"
            >
              <product-card-pos
                :product="item"
                :productName="item.pro_name"
                :imagePath="item.img_name"
                :stock="item.card_count"
              />
            </div>
          </div>

          <!-- Load More Button -->
          <div v-if="hasMoreProducts" class="text-center mt-4">
            <v-btn
              @click="loadMoreProducts"
              :loading="loadingMore"
              color="primary"
              outlined
              block
            >
              ເບິ່ງເພີ່ມເຕີມ ({{
                filterProduct.length - displayLimit
              }}
              ຍັງເຫລືອ)
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- No Products Found -->
      <v-row v-else>
        <v-col cols="12">
          <div class="text-center pa-8">
            <v-icon size="64" color="grey lighten-2"
              >mdi-package-variant</v-icon
            >
            <div class="mt-2 text-h6 grey--text">ບໍ່ພົບຂໍ້ມູນ</div>
            <div class="mt-2 text-body-2 grey--text">
              <span v-if="isSearchActive">ລອງຄົ້ນຫາດ້ວຍຄຳອື່ນ</span>
              <span v-else-if="isCategoryFiltered">ບໍ່ມີສິນຄ້າໃນປະເພດນີ້</span>
              <span v-else>ບໍ່ມີສິນຄ້າ</span>
            </div>
            <v-btn
              v-if="isSearchActive || isCategoryFiltered"
              @click="clearFilters"
              color="primary"
              outlined
              class="mt-4"
            >
              ລົບຕົວກອງ
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { getFormatNum, swalError2, swalSuccess } from '~/common'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import {  mainCompanyInfo, mainCompanyInfoV1 } from '~/common/api'

export default {
  name: 'ProductList',
  layout: 'pos',
  middleware: 'auths',
  inject: ['sharedState'],

  data() {
    return {
      productPriceList: [],
      barcode: '',
      timer: null,
      tab: null,
      searh: '',
      productSelectedList: [],
      isloading: false,
      pageLine: 30,
      search: '',
      productSelectedFromBarcode: null,

      // Performance optimization properties
      debouncedKeyword: '',
      searchTimeout: null,
      displayLimit: 50,
      loadingMore: false,
      showDebugInfo: process.env.NODE_ENV === 'development',
    }
  },

  watch: {
    'sharedState.saleHeader'(newVal, oldVal) {
      console.log('Count changed:', newVal, oldVal)
      // ONLY reload if really necessary
      // if (this.findAllProduct.length === 0) {
        this.loadProduct()
      // }
    },

    searchKeyword: {
      handler(newVal) {
        console.log(`🔍 Store search keyword changed: "${newVal}"`)
        this.handleSearchKeywordChange(newVal)
        // NO PRODUCT RELOAD - just filter existing products
      },
      immediate: true,
    },

    currenctSelectedCategoryId: {
      handler(newVal, oldVal) {
        console.log(`📁 Category changed from ${oldVal} to ${newVal}`)
        if (newVal !== oldVal) {
          this.resetDisplayLimit()
          // NO PRODUCT RELOAD - just filter existing products
        }
      },
    },

    // Watch for when products are loaded
    findAllProduct: {
      handler(newProducts, oldProducts) {
        if (newProducts && newProducts.length !== (oldProducts?.length || 0)) {
          console.log(`📦 Products changed: ${newProducts.length} products`)
          this.resetDisplayLimit()
          // NO RELOAD - just reset display
        }
      },
    },
  },

  beforeDestroy() {
    window.removeEventListener('storage', this.handleStorageChange)
    window.removeEventListener('keydown', this.handleKeyDown)
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout)
    }
  },

  async mounted() {
    const startTime = performance.now()

    await this.loadProduct()

    window.addEventListener('storage', this.handleStorageChange)
    window.addEventListener('keydown', this.handleKeyDown)

    const mountTime = performance.now() - startTime
    console.warn(`Component mounted in ${mountTime.toFixed(2)}ms`)
    console.warn(`Company info:`, mainCompanyInfoV1(this.$store))
  },

  computed: {
    ...mapGetters({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findAllProduct: 'findAllProduct',
      findSelectedTerminal: 'findSelectedTerminal',
      currentSelectedCustomer: 'currentSelectedCustomer',
    }),

    effectiveCustomer() {
      return this.currentSelectedCustomer
    },

    currentTerminal() {
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },

    // FIXED: Proper filtering logic that handles all cases
    filterProduct() {
      const keyword = this.searchKeyword || ''
      const categoryId = this.currenctSelectedCategoryId
      const allProducts = this.findAllProduct || []

      console.log(`🔍 FILTERING DEBUG:`)
      console.log(`  - Total products: ${allProducts.length}`)
      console.log(`  - Search keyword: "${keyword}"`)
      console.log(`  - Category ID: ${categoryId}`)
      console.log(`  - Keyword length: ${keyword.length}`)
      console.log(
        `  - Is keyword empty: ${!keyword || keyword.trim().length === 0}`
      )

      // If no products loaded, return empty
      if (!allProducts || allProducts.length === 0) {
        console.log(`  - No products available`)
        return []
      }

      let filteredProducts = [...allProducts] // Start with all products

      // Apply category filter first (if not "All Categories")
      if (categoryId && categoryId !== 9999) {
        console.log(`  - Applying category filter: ${categoryId}`)
        filteredProducts = filteredProducts.filter((product) => {
          const productCategory = product.pro_category
          return productCategory === categoryId
        })
        console.log(
          `  - After category filter: ${filteredProducts.length} products`
        )
      } else {
        console.log(`  - No category filter (showing all categories)`)
      }

      // Apply search filter (only if keyword exists and is not empty)
      if (keyword && keyword.trim().length > 0) {
        const searchTerm = keyword.trim().toLowerCase()
        console.log(`  - Applying search filter: "${searchTerm}"`)

        filteredProducts = filteredProducts.filter((product) => {
          const productName = (product.pro_name || '').toLowerCase()
          const barcode = (product.barCode || '').toLowerCase()

          const nameMatch = productName.includes(searchTerm)
          const barcodeMatch = barcode.includes(searchTerm)

          return nameMatch || barcodeMatch
        })
        console.log(
          `  - After search filter: ${filteredProducts.length} products`
        )
      } else {
        console.log(`  - No search filter (keyword empty or whitespace)`)
      }

      console.log(`  - FINAL RESULT: ${filteredProducts.length} products`)
      return filteredProducts
    },

    displayedProducts() {
      return this.filterProduct.slice(0, this.displayLimit)
    },

    hasMoreProducts() {
      return this.filterProduct.length > this.displayLimit
    },

    isSearchActive() {
      const keyword = this.searchKeyword || ''
      return keyword.trim().length > 0
    },

    isCategoryFiltered() {
      return this.currenctSelectedCategoryId !== 9999
    },
  },

  methods: {
    ...mapActions(['addProduct']),

    handleSearchKeywordChange(keyword) {
      // Clear any pending timeout
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }

      // Debounce the keyword update
      this.searchTimeout = setTimeout(() => {
        this.debouncedKeyword = keyword || ''
        this.resetDisplayLimit()
        console.log(`🔍 Debounced keyword updated: "${this.debouncedKeyword}"`)
      }, 300)
    },

    resetDisplayLimit() {
      this.displayLimit = 50
    },

    loadMoreProducts() {
      this.loadingMore = true

      setTimeout(() => {
        this.displayLimit = Math.min(
          this.displayLimit + 50,
          this.filterProduct.length
        )
        this.loadingMore = false
      }, 100)
    },

    clearFilters() {
      console.log(`🧹 Clearing all filters`)
      this.$store.commit('SetSearchKeyword', '')
      this.$store.commit('setSelecteCategoryId', 9999)
      this.debouncedKeyword = ''
      this.resetDisplayLimit()
    },

    findCurrency(currencyId) {
      return this.findAllCurrency.find((el) => el.id == currencyId)
    },

    async handleStorageChange(event) {
      if (event.key === 'saleHeader') {
        console.log('myValue changed:', event.newValue)
      }
    },

    findProductFromBarcode(barcode, isGift = false) {
      const startTime = performance.now()

      console.log(`🔍 Searching for barcode: ${barcode}`)
      console.log(`📦 Total products to search: ${this.findAllProduct.length}`)

      const foundProduct = this.findAllProduct.find(
        (product) => product.barCode === barcode
      )

      const searchTime = performance.now() - startTime
      console.log(`⏱️ Barcode search took ${searchTime.toFixed(2)}ms`)

      if (foundProduct) {
        console.log(`✅ Found product: ${foundProduct.pro_name}`)

        let customerPrice = null

        if (this.effectiveCustomer?.grade && foundProduct?.priceLists?.length) {
          const gradePrice = foundProduct.priceLists.find(
            (priceList) =>
              priceList.grade === this.effectiveCustomer.grade &&
              priceList.isActive !== false &&
              priceList.type === 'Price'
          )
          customerPrice = gradePrice?.amount || null
        }

        const cartItem = {
          ...foundProduct,
          localPrice:
            customerPrice || foundProduct.localPrice || foundProduct.pro_price,
          isGift: isGift,
          lineUUIDCheck: false,
          priceListId: null,
          lineUUID: Date.now() + Math.random().toString(16),
        }

        console.info(`🛒 Adding product to cart: ${foundProduct.pro_name}`)
        this.addProduct(cartItem)

        if (this.$swal) {
          this.$swal.fire({
            title: 'Product Added!',
            text: `${foundProduct.pro_name} added to cart`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          })
        }
      } else {
        console.warn(`❌ Product not found for barcode: ${barcode}`)

        if (this.$swal) {
          this.$swal.fire({
            title: 'Product Not Found',
            text: `No product found with barcode: ${barcode}`,
            icon: 'error',
            timer: 2000,
            showConfirmButton: false,
          })
        }
      }
    },

    handleKeyDown(event) {
      if (this.timer) {
        clearInterval(this.timer)
      }

      if (event.key === 'Enter') {
        if (this.barcode) {
          this.findProductFromBarcode(this.barcode)
        }
        this.barcode = ''
        return
      }

      if (event.key !== 'Shift') {
        this.barcode += event.key
      }

      this.timer = setInterval(() => (this.barcode = ''), 20)
    },

    async loadProduct() {
      console.warn('PRODUCT is being reloaded...')
      this.isloading = true

      try {
        console.info(`current location selected ${JSON.stringify(this.currentSelectedLocation)}`)
        await this.$store.dispatch(
          'initializeProductsByLocation',
          this.currentSelectedLocation['id']
        )
        console.log(`✅ Products loaded: ${this.findAllProduct.length}`)
      } catch (error) {
        console.error('Error loading products:', error)
        swalError2(this.$swal, 'Error', 'Failed to load products')
      } finally {
        this.isloading = false
      }
    },
  },
}
</script>

<style scoped>
.product-item {
  margin-bottom: 16px;
  transition: transform 0.2s ease;
}

.product-item:hover {
  transform: translateY(-2px);
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

/* Performance optimizations */
.product-item {
  contain: layout;
  will-change: transform;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .product-item {
    margin-bottom: 12px;
  }
}

/* Loading states */
.v-btn--loading {
  pointer-events: none;
}

/* Grid styling */
.row {
  margin: -8px;
}

.row > [class*='col'] {
  padding: 8px;
}
</style>