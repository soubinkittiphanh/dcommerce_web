<template>
  <div class="customer-menu-app" :style="themeStyles">
    <!-- Active Table Floating Header -->
    <div class="table-sticky-bar" v-if="currentTable">
      <div class="table-bar-content">
        <div class="table-info">
          <i class="mdi mdi-map-marker-radius table-badge-icon amber--text text--accent-3"></i>
          <div class="table-text">
            <span class="table-title">Table</span>
            <strong class="table-number">{{ currentTable }}</strong>
          </div>
        </div>

        <div class="table-header-actions">
          <button class="header-action-btn mode-btn" @click="toggleViewMode" title="Toggle Book / Grid View">
            <i class="mdi" :class="viewMode === 'book' ? 'mdi-view-grid-outline' : 'mdi-book-open-page-variant-outline'"></i>
            <span class="btn-text">{{ viewMode === 'book' ? 'Grid' : 'Book' }}</span>
          </button>
          <button class="header-action-btn bill-btn" @click="showBillModal = true">
            <i class="mdi mdi-receipt-text-outline"></i>
            <span class="btn-text">Bill</span>
          </button>
          <button class="header-action-btn qr-btn" @click="showBankQrModal = true">
            <i class="mdi mdi-qrcode-scan"></i>
            <span class="btn-text">Pay QR</span>
          </button>
          <button 
            class="call-waiter-action-btn" 
            :class="{ 'is-cooldown': isCallingWaiter }"
            :disabled="isCallingWaiter" 
            @click="callWaiter"
          >
            <i class="mdi" :class="isCallingWaiter ? 'mdi-clock-outline' : 'mdi-bell-ring-outline'"></i>
            <span>{{ isCallingWaiter ? `(${cooldownSeconds}s)` : 'Waiter' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Search Section -->
    <div class="search-sticky-container">
      <div class="search-inner">
        <i class="mdi mdi-magnify search-glass-icon"></i>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search menu, drinks, dishes..." 
          class="search-input-field"
        />
        <button 
          v-if="searchQuery" 
          class="clear-search-btn" 
          @click="searchQuery = ''"
        >
          <i class="mdi mdi-close"></i>
        </button>
      </div>
    </div>

    <v-container class="menu-main-container">
      <!-- Category Pill Tabs -->
      <div class="category-scroll-wrapper" v-if="categories.length > 0">
        <button 
          v-for="category in categories" 
          :key="category"
          class="category-pill-btn"
          :class="{ 'active': selectedCategory === category }"
          @click="selectCategoryAndJump(category)"
        >
          <span class="category-name">{{ category }}</span>
          <span class="category-badge-count">{{ getCategoryCount(category) }}</span>
        </button>
      </div>

      <!-- 📖 DIGITAL MENU BOOK VIEW (SWIPE LEFT / RIGHT) -->
      <div v-if="viewMode === 'book'" class="menu-book-view-wrapper">
        <div class="book-header-strip mb-3 d-flex align-center justify-space-between">
          <div class="book-title-chip">
            <i class="mdi mdi-book-open-page-variant primary--text mr-1"></i>
            <span>Digital Menu Book</span>
          </div>
          <div class="swipe-hint-badge">
            <span>👈 Swipe left / right 👉</span>
          </div>
        </div>

        <!-- Book Page Outer Frame with 3D Depth -->
        <div 
          class="book-page-container"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <!-- Left Floating Page Flipper -->
          <button 
            class="page-flip-btn left-flip" 
            :disabled="currentPage === 1" 
            @click="prevPage"
            title="Previous Page"
          >
            <i class="mdi mdi-chevron-left"></i>
          </button>

          <!-- Right Floating Page Flipper -->
          <button 
            class="page-flip-btn right-flip" 
            :disabled="currentPage === totalPages" 
            @click="nextPage"
            title="Next Page"
          >
            <i class="mdi mdi-chevron-right"></i>
          </button>

          <!-- Book Active Page Spread -->
          <transition :name="pageTransitionName" mode="out-in">
            <div :key="currentPage" class="book-single-page">
              <div class="page-corner-decor top-right"></div>
              <div class="page-corner-decor bottom-left"></div>

              <div class="page-top-header text-center mb-4">
                <span class="restaurant-book-heading">{{ companyName }}</span>
                <div class="page-category-banner mt-1">
                  {{ currentPageCategory }}
                </div>
              </div>

              <!-- Page Products Spreads (4 Items per page) -->
              <div class="book-dishes-spread-grid" v-if="currentPageProducts.length > 0">
                <div 
                  v-for="product in currentPageProducts"
                  :key="product.id || product.productId"
                  class="book-dish-item-card"
                  @click="showProductDetail(product)"
                >
                  <div class="book-dish-img-box">
                    <img 
                      :src="getProductImage(product)" 
                      :alt="product.pro_name"
                      @error="handleImageError"
                    />
                    <div class="book-qty-badge" v-if="getItemCartQty(product) > 0">
                      {{ getItemCartQty(product) }}
                    </div>
                  </div>

                  <div class="book-dish-details">
                    <h3 class="book-dish-title">{{ product.pro_name }}</h3>
                    <p class="book-dish-desc">
                      {{ truncateText(product.pro_desc || 'Freshly prepared with quality ingredients.', 48) }}
                    </p>

                    <div class="book-dish-footer">
                      <div class="book-price font-weight-black">
                        ₭ {{ formatPrice(product.pro_price) }}
                      </div>
                      <button 
                        class="book-add-btn"
                        :class="{ 'in-cart': getItemCartQty(product) > 0 }"
                        @click.stop="addToCart(product)"
                      >
                        <i class="mdi" :class="getItemCartQty(product) > 0 ? 'mdi-check' : 'mdi-plus'"></i>
                        <span>{{ getItemCartQty(product) > 0 ? `(${getItemCartQty(product)})` : 'Add' }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else class="text-center py-10 grey--text">
                <p>No menu items on this page.</p>
              </div>

              <!-- Page Number Footer -->
              <div class="page-footer-bar mt-4">
                <div class="page-number-display">
                  Page <strong>{{ currentPage }}</strong> of <strong>{{ totalPages }}</strong>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Bottom Page Jump Dots -->
        <div class="page-dots-wrapper mt-3">
          <button 
            v-for="p in totalPages" 
            :key="p"
            class="page-dot-btn"
            :class="{ 'active': currentPage === p }"
            @click="goToPage(p)"
          ></button>
        </div>
      </div>

      <!-- 📱 STANDARD GRID VIEW -->
      <div v-else-if="filteredProducts.length > 0" class="menu-products-grid">
        <div 
          v-for="(product, index) in filteredProducts"
          :key="product.id || product.productId"
          class="dish-card"
          @click="showProductDetail(product)"
        >
          <!-- Card Image & Badges -->
          <div class="dish-image-wrapper">
            <img 
              :src="getProductImage(product)" 
              :alt="product.pro_name"
              @error="handleImageError"
              loading="lazy"
            />
            <div class="dish-badge-popular" v-if="index < 4">
              <i class="mdi mdi-star mr-1"></i> Popular
            </div>
            <div class="dish-cart-quantity-badge" v-if="getItemCartQty(product) > 0">
              <i class="mdi mdi-shopping mr-1"></i> {{ getItemCartQty(product) }} in cart
            </div>
          </div>

          <!-- Card Content -->
          <div class="dish-info-content">
            <div class="dish-tag" v-if="product.categ_name">
              {{ product.categ_name }}
            </div>

            <h3 class="dish-title">{{ product.pro_name }}</h3>

            <p class="dish-description">
              {{ truncateText(product.pro_desc || 'Freshly prepared dish crafted with quality ingredients.', 55) }}
            </p>

            <!-- Card Footer & Add Button -->
            <div class="dish-footer d-flex align-center justify-space-between pt-2">
              <div class="price-container">
                <span class="price-symbol">₭</span>
                <span class="price-value">{{ formatPrice(product.pro_price) }}</span>
              </div>
              <button 
                class="quick-add-btn" 
                :class="{ 'in-cart': getItemCartQty(product) > 0 }"
                @click.stop="addToCart(product)"
              >
                <i class="mdi" :class="getItemCartQty(product) > 0 ? 'mdi-check-bold' : 'mdi-plus'"></i>
                <span>{{ getItemCartQty(product) > 0 ? `Add (${getItemCartQty(product)})` : 'Add' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="empty-menu-box" v-if="filteredProducts.length === 0">
        <i class="mdi mdi-silverware-clean empty-icon"></i>
        <h3 class="empty-title">
          {{ searchQuery ? 'No dishes match your search' : 'No menu items available' }}
        </h3>
        <p class="empty-text">
          {{ searchQuery ? 'Try searching for another dish or drink' : 'Please check back later' }}
        </p>
        <button v-if="searchQuery" class="reset-search-btn" @click="searchQuery = ''">
          Clear Search Filter
        </button>
      </div>
    </v-container>

    <!-- Floating Cart FAB Button -->
    <div class="floating-basket-fab" v-if="cartItems.length > 0" @click="showCartModal = true">
      <div class="fab-left">
        <i class="mdi mdi-basket-outline basket-icon"></i>
        <div class="basket-count-info">
          <span class="item-count">{{ cartTotalCount }} Item(s)</span>
          <span class="subtext">View Order Basket</span>
        </div>
      </div>
      <div class="fab-right">
        <span class="total-price">₭ {{ formatPrice(cartTotalPrice) }}</span>
        <i class="mdi mdi-chevron-right fab-arrow"></i>
      </div>
    </div>

    <!-- Product Detail Modal -->
    <div class="modal-backdrop" v-if="selectedProduct" @click="closeDetail">
      <div class="modal-card-box" @click.stop>
        <button class="modal-close-icon" @click="closeDetail"><i class="mdi mdi-close"></i></button>
        
        <div class="modal-hero-img">
          <img :src="getProductImage(selectedProduct)" :alt="selectedProduct.pro_name" />
        </div>

        <div class="modal-details-body">
          <span class="modal-category-tag">{{ selectedProduct.categ_name || 'Category' }}</span>
          <h2 class="modal-dish-title">{{ selectedProduct.pro_name }}</h2>
          <p class="modal-dish-desc">
            {{ selectedProduct.pro_desc || 'A delicious dish made with fresh quality ingredients and prepared with care.' }}
          </p>

          <div class="modal-action-bar">
            <div class="modal-price">
              <span class="symbol">₭</span>
              <span class="amount">{{ formatPrice(selectedProduct.pro_price) }}</span>
            </div>
            <button class="modal-add-btn" @click="addSelectedProductToCart">
              <i class="mdi mdi-basket-plus mr-1"></i> Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Basket / Draft Order Modal -->
    <div class="modal-backdrop" v-if="showCartModal" @click="showCartModal = false">
      <div class="modal-card-box cart-slide-up" @click.stop>
        <button class="modal-close-icon" @click="showCartModal = false"><i class="mdi mdi-close"></i></button>

        <div class="cart-modal-header pa-4">
          <h2 class="cart-title d-flex align-center">
            <i class="mdi mdi-basket-outline primary--text mr-2"></i> Table Basket
          </h2>
          <span class="cart-table-chip" v-if="currentTable">Table {{ currentTable }}</span>
        </div>

        <div class="cart-modal-body pa-4">
          <div v-if="cartItems.length === 0" class="text-center py-6 grey--text">
            <p>Your basket is currently empty.</p>
          </div>

          <div v-else class="cart-items-wrapper">
            <div v-for="(item, index) in cartItems" :key="index" class="cart-item-card mb-3 pa-3">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <div class="font-weight-bold text-subtitle-1">{{ item.pro_name }}</div>
                  <div class="item-unit-price">₭ {{ formatPrice(item.pro_price) }}</div>
                </div>

                <!-- Quantity Controls -->
                <div class="qty-control-box d-flex align-center">
                  <button class="qty-action-btn" @click="decrementCartItem(index)"><i class="mdi mdi-minus"></i></button>
                  <span class="qty-number">{{ item.quantity }}</span>
                  <button class="qty-action-btn" @click="incrementCartItem(index)"><i class="mdi mdi-plus"></i></button>
                </div>
              </div>

              <!-- Note input -->
              <div class="mt-2">
                <input 
                  type="text" 
                  v-model="item.notes" 
                  placeholder="Notes: e.g., less ice, extra spicy..." 
                  class="item-note-field"
                />
              </div>
            </div>

            <!-- Price Breakdown -->
            <div class="cart-price-summary mt-4 pa-3 rounded">
              <div class="d-flex justify-space-between text-h6 font-weight-bold">
                <span>Total Amount:</span>
                <span class="theme-primary-text">₭ {{ formatPrice(cartTotalPrice) }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="cart-modal-footer pa-4">
          <button 
            class="submit-order-btn d-flex align-center justify-center" 
            :disabled="cartItems.length === 0 || isSubmittingDraft"
            @click="submitDraftOrder"
          >
            <i class="mdi mdi-send-fast mr-2"></i>
            <span>{{ isSubmittingDraft ? 'Sending Order...' : 'Send Draft Order to Table' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 🧾 Order Bill Details Modal -->
    <div class="modal-backdrop" v-if="showBillModal" @click="showBillModal = false">
      <div class="modal-card-box bill-modal-box pa-5" @click.stop>
        <button class="modal-close-icon" @click="showBillModal = false"><i class="mdi mdi-close"></i></button>

        <div class="text-center mb-4">
          <div class="bill-icon-badge mb-2">
            <i class="mdi mdi-receipt-text-outline text-h4 primary--text"></i>
          </div>
          <h2 class="font-weight-black text-h5 primary--text">{{ companyName }}</h2>
          <div class="grey--text text-caption">
            <i class="mdi mdi-table-chair mr-1"></i> Table {{ currentTable }} Order Receipt / Bill Summary
          </div>
        </div>

        <v-divider class="my-3"></v-divider>

        <!-- Bill Items Table -->
        <div class="bill-items-list">
          <div v-if="activeTableOrderItems.length === 0" class="text-center py-6 grey--text">
            <i class="mdi mdi-text-box-remove-outline text-h3 mb-2 grey--text"></i>
            <p class="mb-1 font-weight-bold">No items ordered for Table {{ currentTable }} yet.</p>
            <p style="font-size: 0.85rem">Add items from the menu and click "Send Draft Order" to submit.</p>
          </div>

          <div v-else>
            <div class="bill-header-row font-weight-bold mb-2">
              <span class="col-item">Item Name</span>
              <span class="col-qty">Qty</span>
              <span class="col-price">Price</span>
              <span class="col-subtotal">Total</span>
            </div>
            <v-divider class="mb-3"></v-divider>

            <div 
              v-for="(item, idx) in activeTableOrderItems" 
              :key="idx" 
              class="bill-item-row py-2"
            >
              <div class="col-item">
                <div class="font-weight-bold">{{ item.pro_name }}</div>
                <div class="grey--text caption" v-if="item.notes">Note: {{ item.notes }}</div>
              </div>
              <div class="col-qty text-center font-weight-bold">x{{ item.quantity }}</div>
              <div class="col-price text-right">₭ {{ formatPrice(item.pro_price) }}</div>
              <div class="col-subtotal text-right font-weight-bold">₭ {{ formatPrice(item.pro_price * item.quantity) }}</div>
            </div>

            <v-divider class="my-4"></v-divider>

            <!-- Grand Total -->
            <div class="d-flex justify-space-between align-center font-weight-black text-h6">
              <span>Grand Total:</span>
              <span class="theme-primary-text">₭ {{ formatPrice(activeTableOrderTotal) }}</span>
            </div>
          </div>
        </div>

        <!-- Action Footer -->
        <div class="mt-6 text-center">
          <button class="pay-qr-btn w-100 py-3 d-flex align-center justify-center" @click="showBillModal = false; showBankQrModal = true">
            <i class="mdi mdi-qrcode-scan mr-2 text-h6"></i>
            <span>Pay Bill via Bank QR Code</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 💳 Premium Company Bank QR Code Modal -->
    <div class="modal-backdrop" v-if="showBankQrModal" @click="showBankQrModal = false">
      <div class="modal-card-box qr-modal-box pa-6 text-center" @click.stop>
        <button class="modal-close-icon" @click="showBankQrModal = false"><i class="mdi mdi-close"></i></button>

        <div class="qr-card-header mb-3">
          <div class="qr-icon-header-badge mb-2">
            <i class="mdi mdi-qrcode-scan text-h4 primary--text"></i>
          </div>
          <h2 class="font-weight-black text-h5 primary--text">{{ companyName }}</h2>
          <div class="d-flex align-center justify-center caption green--text text--darken-1 font-weight-bold mt-1">
            <i class="mdi mdi-shield-check mr-1 text-subtitle-1"></i> Official Merchant Bank QR Payment
          </div>
        </div>

        <!-- Bank QR Code Image Display with Scanner Border -->
        <div class="company-qr-frame my-3">
          <div class="qr-scanner-overlay">
            <span class="corner top-left"></span>
            <span class="corner top-right"></span>
            <span class="corner bottom-left"></span>
            <span class="corner bottom-right"></span>
          </div>
          <img 
            :src="getCompanyBankQrImage()" 
            alt="Bank QR Code" 
            class="company-qr-img" 
            @error="handleQrImageError"
          />
        </div>

        <!-- Bank Account Card Box -->
        <div class="bank-account-info-box pa-4 rounded-xl my-3 text-left">
          <div class="d-flex align-center justify-space-between mb-2">
            <span class="caption grey--text text--darken-1">Account Holder</span>
            <span class="bank-chip">
              <i class="mdi mdi-bank-outline mr-1"></i> {{ companyBankName }}
            </span>
          </div>
          <div class="font-weight-black text-subtitle-1 text-truncate color-primary-dark">
            {{ companyAccountName }}
          </div>

          <v-divider class="my-2"></v-divider>

          <div class="d-flex align-center justify-space-between">
            <div>
              <div class="caption grey--text text--darken-1">Account Number</div>
              <div class="font-weight-black text-body-1 primary--text">
                {{ companyAccountNumber }}
              </div>
            </div>
            <button class="copy-account-btn" @click="copyAccountNumber">
              <i class="mdi mdi-content-copy mr-1"></i> {{ copiedAccount ? 'Copied!' : 'Copy' }}
            </button>
          </div>
        </div>

        <!-- Total Amount Card -->
        <div class="bill-amount-badge pa-3 rounded-xl mb-4 d-flex justify-space-between align-center" v-if="activeTableOrderTotal > 0">
          <span class="caption grey--text font-weight-bold">Payable Total:</span>
          <div class="font-weight-black text-h6 primary--text">₭ {{ formatPrice(activeTableOrderTotal) }}</div>
        </div>

        <p class="caption grey--text text--darken-1 mb-4">
          <i class="mdi mdi-cellphone-link mr-1"></i> Scan with BCEL One, Lao-Viet Bank, IB, or any Banking App. <br />
          Show your payment receipt slip to staff to confirm.
        </p>

        <button class="modal-add-btn w-100 py-3 font-weight-bold" @click="showBankQrModal = false">
          Done / Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'menu',
  name: 'CustomerMenuScreen',
  data() {
    return {
      products: [],
      searchQuery: '',
      selectedCategory: 'All',
      selectedProduct: null,
      currentTable: '01',
      isCallingWaiter: false,
      cooldownSeconds: 0,
      cooldownTimer: null,
      
      // Cart State
      cartItems: [],
      showCartModal: false,
      isSubmittingDraft: false,

      // Bill & Bank QR Modals
      showBillModal: false,
      showBankQrModal: false,
      companyProfile: null,
      copiedAccount: false,

      // 📖 Book View & Touch Swipe State
      viewMode: 'book', // 'book' or 'grid'
      currentPage: 1,
      itemsPerPage: 4,
      pageTransitionName: 'slide-next',
      touchStartX: 0,
      touchEndX: 0
    }
  },
  computed: {
    themePrimary() {
      return this.$vuetify?.theme?.themes?.light?.primary || 
             this.$store?.state?.theme?.primary_color || 
             '#01532B'
    },
    themeSecondary() {
      return this.$vuetify?.theme?.themes?.light?.secondary || 
             this.$store?.state?.theme?.secondary_color || 
             '#337555'
    },
    themeLightPrimary() {
      return this.$vuetify?.theme?.themes?.light?.lightprimary || 
             this.$store?.state?.theme?.lightprimary_color || 
             '#80a995'
    },
    themeStyles() {
      return {
        '--primary-color': this.themePrimary,
        '--secondary-color': this.themeSecondary,
        '--lightprimary-color': this.themeLightPrimary,
      }
    },
    host() {
      return this.$axios.defaults.baseURL
    },
    companyName() {
      return this.companyProfile?.name || this.companyProfile?.name_la || 'Cafe & Restaurant'
    },
    companyAccountName() {
      return this.companyProfile?.account_name || this.companyProfile?.name || 'K HOOPS CAFE & RESTAURANT'
    },
    companyAccountNumber() {
      return this.companyProfile?.account_no || '010-12-000-1234567-001'
    },
    companyBankName() {
      return this.companyProfile?.bank_name || 'BCEL OnePay / Lao-Viet Bank'
    },
    activeProducts() {
      if (!Array.isArray(this.products) || this.products.length === 0) return []
      return this.products.filter((p) => {
        if (!p) return false
        if (p.isActive === undefined && p.is_active === undefined && p.pro_status === undefined && p.status === undefined) {
          return true
        }
        const isActive = p.isActive || p.is_active || p.status === 'active' || 
                        p.pro_status === 1 || p.pro_status === true || p.status === 1
        return isActive
      })
    },
    categories() {
      const cats = new Set(this.activeProducts.map(p => p.categ_name || 'Other'))
      return ['All', ...Array.from(cats).sort()]
    },
    filteredProducts() {
      let filtered = this.activeProducts

      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(p => 
          (p.categ_name || 'Other') === this.selectedCategory
        )
      }

      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(p => 
          p.pro_name?.toLowerCase().includes(query) ||
          p.pro_desc?.toLowerCase().includes(query) ||
          p.product_code?.toLowerCase().includes(query) ||
          p.categ_name?.toLowerCase().includes(query)
        )
      }

      return filtered
    },

    // 📖 Book View Computeds
    totalPages() {
      return Math.max(1, Math.ceil(this.filteredProducts.length / this.itemsPerPage))
    },

    currentPageProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      return this.filteredProducts.slice(start, start + this.itemsPerPage)
    },

    currentPageCategory() {
      if (this.selectedCategory !== 'All') return this.selectedCategory
      const first = this.currentPageProducts[0]
      return first?.categ_name || 'Featured Menu'
    },

    cartTotalCount() {
      return this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    },
    cartTotalPrice() {
      return this.cartItems.reduce((sum, item) => sum + (item.pro_price * item.quantity), 0)
    },

    activeTableOrderItems() {
      const normCurrent = this.normalizeTable(this.currentTable)
      const allDrafts = JSON.parse(localStorage.getItem('dc_draft_orders') || '[]')
      const activeDraft = allDrafts.find(o => this.normalizeTable(o.table) === normCurrent || o.table === this.currentTable)
      
      const draftItems = activeDraft ? activeDraft.items || [] : []
      const combined = [...draftItems]

      this.cartItems.forEach(cartItem => {
        const pid = cartItem.id || cartItem.productId
        const existing = combined.find(i => (i.id || i.productId) === pid)
        if (existing) {
          existing.quantity += cartItem.quantity
        } else {
          combined.push({ ...cartItem })
        }
      })

      return combined
    },

    activeTableOrderTotal() {
      return this.activeTableOrderItems.reduce((sum, item) => sum + ((item.pro_price || 0) * (item.quantity || 1)), 0)
    }
  },
  async mounted() {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)
      if (isMobile) {
        this.viewMode = 'grid'
      }

      // Dynamically adjust Axios baseURL for network access
      const hostname = window.location.hostname
      if (this.$axios?.defaults?.baseURL?.includes('localhost')) {
        this.$axios.defaults.baseURL = this.$axios.defaults.baseURL.replace('localhost', hostname)
      }
    }

    if (this.$route.query.table) {
      const rawTable = String(this.$route.query.table).trim()
      const digits = rawTable.replace(/\D/g, '')
      this.currentTable = digits ? digits.padStart(2, '0') : rawTable
      localStorage.setItem('dc_current_table', this.currentTable)
    } else if (this.$route.query.tableId) {
      const digits = String(this.$route.query.tableId).replace(/\D/g, '')
      this.currentTable = digits ? digits.padStart(2, '0') : String(this.$route.query.tableId)
      localStorage.setItem('dc_current_table', this.currentTable)
    } else if (localStorage.getItem('dc_current_table')) {
      this.currentTable = localStorage.getItem('dc_current_table')
    }

    if (this.$nuxt) {
      this.$nuxt.$on('call-waiter', this.callWaiter)
      this.$nuxt.$on('open-cart', this.handleOpenCart)
      this.$nuxt.$on('open-info', this.handleOpenInfo)
    }

    await this.loadProducts()
    await this.fetchCompanyProfile()
  },
  methods: {
    toggleViewMode() {
      this.viewMode = this.viewMode === 'book' ? 'grid' : 'book'
      this.currentPage = 1
    },

    selectCategoryAndJump(category) {
      this.selectedCategory = category
      this.currentPage = 1
    },

    // 📖 Book Page Navigation
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.pageTransitionName = 'slide-next'
        this.currentPage++
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.pageTransitionName = 'slide-prev'
        this.currentPage--
      }
    },

    goToPage(p) {
      this.pageTransitionName = p > this.currentPage ? 'slide-next' : 'slide-prev'
      this.currentPage = p
    },

    // 👈 Touch Swipe Gestures
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX
    },

    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX
    },

    handleTouchEnd() {
      const deltaX = this.touchStartX - this.touchEndX
      if (Math.abs(deltaX) > 40 && this.touchEndX !== 0) {
        if (deltaX > 0) {
          // Swiped Left -> Next Page
          this.nextPage()
        } else {
          // Swiped Right -> Prev Page
          this.prevPage()
        }
      }
      this.touchStartX = 0
      this.touchEndX = 0
    },

    async fetchCompanyProfile() {
      try {
        const res = await this.$axios.get('/api/public/company/findAll')
        const list = Array.isArray(res.data) ? res.data : []
        if (list.length > 0) {
          this.companyProfile = list.find(c => c.isActive) || list[0]
        }
      } catch (err) {
        console.warn('Could not load company profile:', err)
      }
    },

    copyAccountNumber() {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(this.companyAccountNumber)
        this.copiedAccount = true
        setTimeout(() => {
          this.copiedAccount = false
        }, 2000)
      }
    },

    getCompanyBankQrImage() {
      if (this.companyProfile?.bank_qr_image) {
        return `${this.host}/${this.companyProfile.bank_qr_image}`
      }
      if (this.companyProfile?.profile_image_path) {
        return `${this.host}/${this.companyProfile.profile_image_path}`
      }
      return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=BANK_PAYMENT_ACCOUNT_${this.currentTable}`
    },

    handleQrImageError(event) {
      event.target.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=BANK_PAYMENT_ACCOUNT_${this.currentTable}`
    },

    normalizeTable(name) {
      if (!name) return ''
      const str = String(name).trim()
      const digits = str.replace(/\D/g, '')
      if (digits) {
        return digits.padStart(2, '0')
      }
      return str.toLowerCase()
    },

    async loadProducts() {
      let loaded = []
      try {
        const response = await this.$axios.get('/product_mobile_f')
        loaded = response.data?.data || response.data?.products || response.data || []
      } catch (err) {
        console.warn('Mobile product API fetch failed, trying secondary endpoints...', err)
      }

      if (!Array.isArray(loaded) || loaded.length === 0) {
        try {
          const response = await this.$axios.get('/product_f/1')
          loaded = response.data?.data || response.data?.products || response.data || []
        } catch (err) {}
      }

      if (!Array.isArray(loaded) || loaded.length === 0) {
        loaded = [
          { id: 1, productId: 1, pro_name: 'Espresso Single', pro_price: 25000, categ_name: 'Coffee', pro_desc: 'Rich & intense single shot espresso', isActive: true },
          { id: 2, productId: 2, pro_name: 'Iced Americano', pro_price: 30000, categ_name: 'Coffee', pro_desc: 'Espresso shots topped with cold water and ice', isActive: true },
          { id: 3, productId: 3, pro_name: 'Iced Cafe Latte', pro_price: 35000, categ_name: 'Coffee', pro_desc: 'Full-bodied espresso with milk and fresh ice', isActive: true },
          { id: 4, productId: 4, pro_name: 'Iced Matcha Latte', pro_price: 38000, categ_name: 'Tea', pro_desc: 'Premium Japanese green tea with steamed milk', isActive: true },
          { id: 5, productId: 5, pro_name: 'Fresh Mango Smoothie', pro_price: 40000, categ_name: 'Beverage', pro_desc: 'Blended fresh tropical ripe mangoes', isActive: true },
          { id: 6, productId: 6, pro_name: 'Butter Croissant', pro_price: 28000, categ_name: 'Bakery', pro_desc: 'Flaky golden brown French butter croissant', isActive: true },
          { id: 7, productId: 7, pro_name: 'Chocolate Lava Cake', pro_price: 45000, categ_name: 'Dessert', pro_desc: 'Warm chocolate cake with molten center', isActive: true },
          { id: 8, productId: 8, pro_name: 'Crispy Club Sandwich', pro_price: 52000, categ_name: 'Food', pro_desc: 'Triple decker sandwich with chicken & bacon', isActive: true },
        ]
      }

      this.products = loaded
    },

    getItemCartQty(product) {
      const pid = product.id || product.productId
      const item = this.cartItems.find(i => (i.id || i.productId) === pid)
      return item ? item.quantity : 0
    },

    addToCart(product) {
      const pid = product.id || product.productId
      const existing = this.cartItems.find(i => (i.id || i.productId) === pid)
      if (existing) {
        existing.quantity++
      } else {
        this.cartItems.push({
          ...product,
          quantity: 1,
          notes: ''
        })
      }
    },

    addSelectedProductToCart() {
      if (this.selectedProduct) {
        this.addToCart(this.selectedProduct)
        this.closeDetail()
        this.showCartModal = true
      }
    },

    incrementCartItem(index) {
      this.cartItems[index].quantity++
    },

    decrementCartItem(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--
      } else {
        this.cartItems.splice(index, 1)
      }
    },

    async submitDraftOrder() {
      if (this.cartItems.length === 0 || this.isSubmittingDraft) return;

      this.isSubmittingDraft = true;

      const orderPayload = {
        table: this.currentTable,
        items: this.cartItems.map(i => ({
          productId: i.id || i.productId,
          pro_name: i.pro_name,
          pro_price: i.pro_price,
          quantity: i.quantity,
          notes: i.notes || ''
        })),
        timestamp: new Date().toISOString()
      };

      try {
        await this.$axios.post('/api/order/draft/add', orderPayload)
      } catch (err) {
        console.error('Failed to submit draft order to server:', err)
      }

      const existingDrafts = JSON.parse(localStorage.getItem('dc_draft_orders') || '[]');
      const filtered = existingDrafts.filter(o => o.table !== this.currentTable);
      filtered.push(orderPayload);
      localStorage.setItem('dc_draft_orders', JSON.stringify(filtered));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('storage'));
      }

      this.isSubmittingDraft = false;
      this.cartItems = [];
      this.showCartModal = false;

      alert(`✅ Draft order sent for Table ${this.currentTable}! Staff will review your order.`);
    },

    async callWaiter() {
      if (this.isCallingWaiter) return;

      const confirmed = confirm(`Call waiter to Table ${this.currentTable}?`);
      if (!confirmed) return;

      this.isCallingWaiter = true;
      this.cooldownSeconds = 60;

      const payload = {
        table: this.currentTable,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        timestamp: new Date().toISOString()
      };

      try {
        await this.$axios.post('/api/tables/waiter-call/add', payload)
      } catch (err) {
        console.error('Failed to submit waiter call to server:', err)
      }

      const existingCalls = JSON.parse(localStorage.getItem('dc_waiter_calls') || '[]');
      if (!existingCalls.some(c => c.table === this.currentTable)) {
        existingCalls.push(payload);
        localStorage.setItem('dc_waiter_calls', JSON.stringify(existingCalls));
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('storage'));
        }
      }

      this.cooldownTimer = setInterval(() => {
        this.cooldownSeconds--;
        if (this.cooldownSeconds <= 0) {
          clearInterval(this.cooldownTimer);
          this.isCallingWaiter = false;
        }
      }, 1000);
    },

    getCategoryCount(category) {
      if (category === 'All') return this.activeProducts.length
      return this.activeProducts.filter(p => 
        (p.categ_name || 'Other') === category
      ).length
    },
    formatPrice(amount) {
      return new Intl.NumberFormat('en-US').format(amount || 0)
    },
    truncateText(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    },
    getProductImage(product) {
      const imageName = product.img_path
      if (imageName) {
        return `${this.host}/${imageName}`
      }
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    },
    handleImageError(event) {
      event.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
    },
    showProductDetail(product) {
      this.selectedProduct = product
      document.body.style.overflow = 'hidden'
    },
    closeDetail() {
      this.selectedProduct = null
      document.body.style.overflow = 'auto'
    },
    handleOpenCart() {
      this.showCartModal = true
    },
    handleOpenInfo() {
      this.showBillModal = true
    }
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto'
    if (this.cooldownTimer) clearInterval(this.cooldownTimer)
    if (this.$nuxt) {
      this.$nuxt.$off('call-waiter', this.callWaiter)
      this.$nuxt.$off('open-cart', this.handleOpenCart)
      this.$nuxt.$off('open-info', this.handleOpenInfo)
    }
  }
}
</script>

<style scoped>
.customer-menu-app {
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
  background: #f8fafc;
  color: #1e293b;
  font-family: 'Noto Sans Lao', 'Inter', system-ui, sans-serif;
}

/* Sticky Table Header Bar */
.table-sticky-bar {
  background: var(--primary-color, #01532B);
  color: white;
  padding: 0.65rem 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.table-bar-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.table-info {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.table-badge-icon {
  font-size: 1.5rem;
}

.table-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.table-title {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.85;
}

.table-number {
  font-size: 1.15rem;
  font-weight: 800;
}

.table-header-actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.header-action-btn {
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.45rem 0.85rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: all 0.25s ease;
}

.header-action-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: translateY(-1px);
}

.call-waiter-action-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.45rem 0.85rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
  transition: all 0.3s ease;
}

.call-waiter-action-btn:hover:not(:disabled) {
  background: #dc2626;
  transform: translateY(-1px);
}

.call-waiter-action-btn.is-cooldown {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  box-shadow: none;
  cursor: not-allowed;
}

/* Search Section */
.search-sticky-container {
  padding: 0.75rem 1.25rem;
  background: white;
  border-bottom: 1px solid #f1f5f9;
  position: sticky;
  top: 56px;
  z-index: 90;
}

.search-inner {
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 50px;
  padding: 0.45rem 1rem;
}

.search-inner:focus-within {
  border-color: var(--primary-color, #01532B);
  background: white;
}

.search-glass-icon {
  font-size: 1.1rem;
  margin-right: 0.5rem;
  color: #94a3b8;
}

.search-input-field {
  flex: 1;
  border: none;
  background: none;
  font-size: 0.95rem;
  outline: none;
}

.clear-search-btn {
  background: #cbd5e1;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #475569;
}

/* Category Pills */
.category-scroll-wrapper {
  display: flex;
  gap: 0.6rem;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: none;
}

.category-scroll-wrapper::-webkit-scrollbar {
  display: none;
}

.category-pill-btn {
  background: white;
  border: 1.5px solid #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
  color: #475569;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.category-pill-btn.active {
  background: var(--primary-color, #01532B);
  color: white;
  border-color: var(--primary-color, #01532B);
}

.category-badge-count {
  background: rgba(0, 0, 0, 0.08);
  padding: 0.1rem 0.45rem;
  border-radius: 20px;
  font-size: 0.7rem;
}

.category-pill-btn.active .category-badge-count {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

/* 📖 DIGITAL MENU BOOK VIEW STYLING */
.menu-book-view-wrapper {
  perspective: 1200px;
  margin-top: 0.5rem;
}

.book-title-chip {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 0.4rem 0.9rem;
  border-radius: 30px;
  font-weight: 800;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
}

.swipe-hint-badge {
  background: #f1f5f9;
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
}

.book-page-container {
  position: relative;
  min-height: 480px;
  touch-action: pan-y;
}

.page-flip-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  background: white;
  color: var(--primary-color, #01532B);
  border: 1px solid #e2e8f0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.25s ease;
}

.page-flip-btn:hover:not(:disabled) {
  background: var(--primary-color, #01532B);
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.page-flip-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  box-shadow: none;
}

.left-flip { left: -12px; }
.right-flip { right: -12px; }

.book-single-page {
  background: #ffffff;
  border-radius: 24px;
  padding: 1.8rem 1.5rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  border: 2px solid #e2e8f0;
  position: relative;
  min-height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-corner-decor {
  position: absolute;
  width: 30px;
  height: 30px;
  border-color: var(--primary-color, #01532B);
  border-style: solid;
  opacity: 0.3;
}

.page-corner-decor.top-right { top: 12px; right: 12px; border-width: 2px 2px 0 0; }
.page-corner-decor.bottom-left { bottom: 12px; left: 12px; border-width: 0 0 2px 2px; }

.restaurant-book-heading {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #64748b;
}

.page-category-banner {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--primary-color, #01532B);
  border-bottom: 2px solid var(--primary-color, #01532B);
  padding-bottom: 0.2rem;
}

.book-dishes-spread-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.2rem;
  flex: 1;
}

.book-dish-item-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.25s ease;
}

.book-dish-item-card:hover {
  border-color: var(--primary-color, #01532B);
  transform: translateY(-3px);
}

.book-dish-img-box {
  height: 140px;
  position: relative;
}

.book-dish-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.book-qty-badge {
  position: absolute;
  top: 8px; right: 8px;
  background: var(--primary-color, #01532B);
  color: white;
  border-radius: 50%;
  width: 24px; height: 24px;
  font-weight: 800;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.book-dish-details {
  padding: 0.9rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.book-dish-title {
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.2rem;
}

.book-dish-desc {
  font-size: 0.78rem;
  color: #64748b;
  margin-bottom: 0.6rem;
  flex: 1;
}

.book-dish-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-price {
  color: var(--primary-color, #01532B);
  font-size: 1.05rem;
}

.book-add-btn {
  background: var(--primary-color, #01532B);
  color: white;
  border: none;
  padding: 0.35rem 0.75rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.book-add-btn.in-cart {
  background: var(--secondary-color, #337555);
}

.page-footer-bar {
  border-top: 1px solid #f1f5f9;
  padding-top: 0.6rem;
  text-align: center;
}

.page-number-display {
  font-size: 0.85rem;
  color: #64748b;
}

/* Page Dots */
.page-dots-wrapper {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.page-dot-btn {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #cbd5e1;
  cursor: pointer;
  transition: all 0.25s ease;
}

.page-dot-btn.active {
  background: var(--primary-color, #01532B);
  width: 24px;
  border-radius: 20px;
}

/* Page Slide Transitions */
.slide-next-enter-active, .slide-next-leave-active,
.slide-prev-enter-active, .slide-prev-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-next-enter { opacity: 0; transform: translateX(40px) scale(0.97); }
.slide-next-leave-to { opacity: 0; transform: translateX(-40px) scale(0.97); }
.slide-prev-enter { opacity: 0; transform: translateX(-40px) scale(0.97); }
.slide-prev-leave-to { opacity: 0; transform: translateX(40px) scale(0.97); }

/* Menu Product Grid */
.menu-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.25rem;
}

.dish-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.dish-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.dish-image-wrapper {
  height: 180px;
  position: relative;
  overflow: hidden;
  background: #f8fafc;
}

.dish-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dish-badge-popular {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.dish-cart-quantity-badge {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: var(--primary-color, #01532B);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.dish-info-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.dish-tag {
  color: var(--primary-color, #01532B);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
}

.dish-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.3rem;
}

.dish-description {
  font-size: 0.82rem;
  color: #64748b;
  margin-bottom: 0.75rem;
  flex: 1;
}

.price-symbol {
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748b;
}

.price-value {
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--primary-color, #01532B);
}

.quick-add-btn {
  background: var(--primary-color, #01532B);
  color: white;
  border: none;
  padding: 0.45rem 0.9rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.quick-add-btn.in-cart {
  background: var(--secondary-color, #337555);
}

/* Floating Cart FAB */
.floating-basket-fab {
  position: fixed;
  bottom: 20px;
  right: 15px;
  left: 15px;
  max-width: 500px;
  margin: 0 auto;
  background: var(--primary-color, #01532B);
  color: white;
  padding: 0.85rem 1.3rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 99;
}

.fab-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.basket-icon {
  font-size: 1.4rem;
}

.item-count {
  font-weight: 800;
  font-size: 0.95rem;
}

.subtext {
  font-size: 0.7rem;
  opacity: 0.85;
}

.total-price {
  font-weight: 900;
  font-size: 1.15rem;
}

/* Modal Styling */
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-card-box {
  background: white;
  border-radius: 24px;
  max-width: 520px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.modal-close-icon {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(15, 23, 42, 0.6);
  color: white;
  border: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-hero-img {
  height: 220px;
}

.modal-hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-details-body {
  padding: 1.25rem;
}

.modal-dish-title {
  font-size: 1.4rem;
  font-weight: 900;
  color: #0f172a;
}

.modal-add-btn {
  background: var(--primary-color, #01532B);
  color: white;
  border: none;
  padding: 0.75rem 1.4rem;
  border-radius: 14px;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
}

/* Bill Modal & Premium QR Scanner Frame */
.bill-icon-badge {
  background: #f1f5f9;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bill-items-list {
  max-height: 280px;
  overflow-y: auto;
}

.bill-header-row, .bill-item-row {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.col-item { flex: 2; }
.col-qty { flex: 0.6; }
.col-price { flex: 1.2; }
.col-subtotal { flex: 1.4; }

.pay-qr-btn {
  background: #10b981;
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
}

.qr-icon-header-badge {
  background: #ecfdf5;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Premium QR Scanner Card Frame */
.company-qr-frame {
  background: #ffffff;
  padding: 16px;
  border-radius: 20px;
  display: inline-block;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.qr-scanner-overlay {
  position: absolute;
  top: 10px; left: 10px; right: 10px; bottom: 10px;
  pointer-events: none;
}

.qr-scanner-overlay .corner {
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: var(--primary-color, #01532B);
  border-style: solid;
}

.qr-scanner-overlay .top-left { top: 0; left: 0; border-width: 3px 0 0 3px; border-top-left-radius: 8px; }
.qr-scanner-overlay .top-right { top: 0; right: 0; border-width: 3px 3px 0 0; border-top-right-radius: 8px; }
.qr-scanner-overlay .bottom-left { bottom: 0; left: 0; border-width: 0 0 3px 3px; border-bottom-left-radius: 8px; }
.qr-scanner-overlay .bottom-right { bottom: 0; right: 0; border-width: 0 3px 3px 0; border-bottom-right-radius: 8px; }

.company-qr-img {
  width: 210px;
  height: 210px;
  object-fit: contain;
  border-radius: 10px;
}

.bank-account-info-box {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
}

.bank-chip {
  background: #e2e8f0;
  color: #334155;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
}

.copy-account-btn {
  background: var(--primary-color, #01532B);
  color: white;
  border: none;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}

.bill-amount-badge {
  background: #ecfdf5;
  border: 1.5px solid #a7f3d0;
}

.cart-modal-header {
  background: #f8fafc;
  border-bottom: 1.5px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-title {
  font-size: 1.2rem;
  font-weight: 900;
}

.cart-table-chip {
  background: var(--primary-color, #01532B);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.cart-item-card {
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.qty-control-box {
  background: white;
  border: 1.5px solid #cbd5e1;
  border-radius: 30px;
  padding: 0.15rem 0.5rem;
  gap: 0.5rem;
}

.qty-action-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--primary-color, #01532B);
  cursor: pointer;
}

.qty-number {
  font-weight: 800;
  font-size: 0.9rem;
}

.item-note-field {
  width: 100%;
  background: white;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  outline: none;
}

.submit-order-btn {
  width: 100%;
  background: var(--primary-color, #01532B);
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: 14px;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
}

.empty-menu-box {
  text-align: center;
  padding: 4rem 1.5rem;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #cbd5e1;
}

.reset-search-btn {
  background: var(--primary-color, #01532B);
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
}
</style>