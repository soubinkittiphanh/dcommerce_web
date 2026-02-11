<template>
  <div class="customer-menu">
    <!-- Welcome Banner -->
    <div class="welcome-banner">
      <div class="banner-content">
        <h1 class="welcome-title">
          <span class="emoji">👋</span>
          Welcome!
        </h1>
        <p class="welcome-subtitle">Browse our delicious menu</p>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="search-section">
      <div class="search-wrapper">
        <span class="search-icon">🔍</span>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search dishes..." 
          class="search-input"
        />
        <button 
          v-if="searchQuery" 
          class="clear-btn" 
          @click="searchQuery = ''"
        >
          ×
        </button>
      </div>
    </div>

    <v-container class="menu-container">
      <!-- Category Tabs -->
      <div class="category-tabs" v-if="categories.length > 0">
        <button 
          v-for="category in categories" 
          :key="category"
          class="category-tab"
          :class="{ 'active': selectedCategory === category }"
          @click="selectedCategory = category"
        >
          <span class="tab-text">{{ category }}</span>
          <span class="tab-count">{{ getCategoryCount(category) }}</span>
        </button>
      </div>

      <!-- Menu Items Grid -->
      <div class="menu-grid" v-if="filteredProducts.length > 0">
        <div 
          v-for="(product, index) in filteredProducts"
          :key="product.id || product.productId"
          class="menu-card"
          :style="{ animationDelay: `${index * 0.05}s` }"
          @click="showProductDetail(product)"
        >
          <!-- Image -->
          <div class="card-image">
            <img 
              :src="getProductImage(product)" 
              :alt="product.pro_name"
              @error="handleImageError"
              loading="lazy"
            />
            <div class="image-badge" v-if="index < 5">
              <span>⭐ Popular</span>
            </div>
          </div>

          <!-- Content -->
          <div class="card-content">
            <!-- Category Tag -->
            <div class="category-badge" v-if="product.categ_name">
              {{ product.categ_name }}
            </div>

            <!-- Title -->
            <h3 class="product-name">{{ product.pro_name }}</h3>

            <!-- Description -->
            <p class="product-description">
              {{ truncateText(product.pro_desc || 'Delicious dish made with quality ingredients', 60) }}
            </p>

            <!-- Price & Rating -->
            <div class="card-footer">
              <div class="price-tag">
                <span class="currency">₭</span>
                <span class="price">{{ formatPrice(product.pro_price) }}</span>
              </div>
              <div class="rating-badge">
                <span class="star">⭐</span>
                <span class="rating-value">4.{{ Math.floor(Math.random() * 9) + 1 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="empty-state" v-else>
        <div class="empty-icon">{{ searchQuery ? '🔍' : '🍽️' }}</div>
        <h3 class="empty-title">
          {{ searchQuery ? 'No dishes found' : 'No menu items available' }}
        </h3>
        <p class="empty-text">
          {{ searchQuery ? 'Try searching for something else' : 'Please check back later' }}
        </p>
        <button v-if="searchQuery" class="reset-btn" @click="searchQuery = ''">
          Clear Search
        </button>
      </div>
    </v-container>

    <!-- Product Detail Modal (View Only) -->
    <div class="detail-modal" v-if="selectedProduct" @click="closeDetail">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeDetail">×</button>
        
        <div class="modal-image">
          <img :src="getProductImage(selectedProduct)" :alt="selectedProduct.pro_name" />
        </div>

        <div class="modal-body">
          <div class="modal-category">{{ selectedProduct.categ_name }}</div>
          <h2 class="modal-title">{{ selectedProduct.pro_name }}</h2>
          <p class="modal-description">
            {{ selectedProduct.pro_desc || 'A delicious dish made with quality ingredients and served with care.' }}
          </p>

          <div class="modal-footer">
            <div class="modal-price">
              <span class="currency">₭</span>
              <span class="amount">{{ formatPrice(selectedProduct.pro_price) }}</span>
            </div>
            <div class="modal-rating">
              <span class="stars">⭐⭐⭐⭐⭐</span>
              <span class="rating-text">({{ Math.floor(Math.random() * 50) + 10 }} reviews)</span>
            </div>
          </div>

          <div class="info-note">
            <span class="note-icon">ℹ️</span>
            <span>Scan QR code at your table to place an order</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hostName } from '~/common/api'

export default {
  layout: 'menu',
  name: 'CustomerMenuScreen',
  data() {
    return {
      products: [],
      searchQuery: '',
      selectedCategory: 'All',
      selectedProduct: null,
    }
  },
  computed: {
    host() {
      return this.$axios.defaults.baseURL
    },
    activeProducts() {
      return this.products.filter((p) => {
        const isActive = p.isActive || p.is_active || p.status === 'active' || 
                        p.pro_status === 1 || p.pro_status === true
        return isActive
      })
    },
    categories() {
      const cats = new Set(this.activeProducts.map(p => p.categ_name || 'Other'))
      return ['All', ...Array.from(cats).sort()]
    },
    filteredProducts() {
      let filtered = this.activeProducts

      // Filter by category
      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(p => 
          (p.categ_name || 'Other') === this.selectedCategory
        )
      }

      // Filter by search
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(p => 
          p.pro_name?.toLowerCase().includes(query) ||
          p.pro_desc?.toLowerCase().includes(query) ||
          p.categ_name?.toLowerCase().includes(query)
        )
      }

      return filtered
    }
  },
  async mounted() {
    await this.loadProducts()
  },
  methods: {
    async loadProducts() {
      try {
        const response = await this.$axios.get('/product_mobile_f')
        this.products = response.data?.data || response.data?.products || response.data || []
      } catch (err) {
        console.error('Error loading products:', err)
      }
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
    }
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.customer-menu {
  min-height: 100vh;
}

/* Welcome Banner */
.welcome-banner {
  background: linear-gradient(135deg, primary 0%, secondary 100%);
  padding: 3rem 1.5rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.welcome-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.05)"/></svg>');
  opacity: 0.3;
}

.banner-content {
  position: relative;
  z-index: 2;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.emoji {
  font-size: 2.5rem;
  animation: wave 2s infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(0deg); }
}

.welcome-subtitle {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.95;
  font-weight: 400;
}

/* Search Section */
.search-section {
  padding: 1.5rem 1.5rem 1rem;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 80px;
  z-index: 50;
  backdrop-filter: blur(10px);
}

.search-wrapper {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  background: #f8fafc;
  border-radius: 50px;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.search-wrapper:focus-within {
  box-shadow: 0 4px 20px rgba(1, 83, 43, 0.15);
  background: white;
}

.search-icon {
  font-size: 1.2rem;
  margin-right: 0.75rem;
  opacity: 0.6;
}

.search-input {
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  outline: none;
  color: #1f2937;
}

.search-input::placeholder {
  color: #9ca3af;
}

.clear-btn {
  background: rgba(0, 0, 0, 0.1);
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #6b7280;
}

.clear-btn:hover {
  background: rgba(0, 0, 0, 0.15);
}

/* Menu Container */
.menu-container {
  max-width: 1200px;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
}

/* Category Tabs */
.category-tabs {
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 1rem 0 1.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.category-tabs::-webkit-scrollbar {
  display: none;
}

.category-tab {
  background: white;
  border: 2px solid #e5e7eb;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.category-tab:hover {
  border-color: primary;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(1, 83, 43, 0.15);
}

.category-tab.active {
  background: linear-gradient(135deg, primary, secondary);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(1, 83, 43, 0.3);
}

.tab-count {
  background: rgba(0, 0, 0, 0.1);
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.category-tab.active .tab-count {
  background: rgba(255, 255, 255, 0.25);
}

/* Menu Grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.menu-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInUp 0.5s ease-out both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Card Image */
.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #f3f4f6;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.menu-card:hover .card-image img {
  transform: scale(1.1);
}

.image-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(239, 68, 68, 0.95);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

/* Card Content */
.card-content {
  padding: 1.25rem;
}

.category-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(1, 83, 43, 0.1), rgba(51, 117, 85, 0.1));
  color: primary;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
}

.product-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-description {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 1rem 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
}

.price-tag {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.currency {
  font-size: 0.85rem;
  color: #6b7280;
  font-weight: 600;
}

.price {
  font-size: 1.5rem;
  font-weight: 800;
  color: #059669;
}

.rating-badge {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: #fef3c7;
  padding: 0.35rem 0.65rem;
  border-radius: 20px;
}

.star {
  font-size: 0.9rem;
}

.rating-value {
  font-size: 0.85rem;
  font-weight: 700;
  color: #92400e;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  animation: fadeIn 0.5s ease-out;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}

.empty-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin: 0 0 0.5rem 0;
}

.empty-text {
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 1.5rem 0;
}

.reset-btn {
  background: linear-gradient(135deg, primary, secondary);
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(1, 83, 43, 0.3);
  transition: all 0.3s ease;
}

.reset-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(1, 83, 43, 0.4);
}

/* Detail Modal */
.detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.3s ease;
  backdrop-filter: blur(8px);
}

.modal-content {
  background: white;
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalSlide {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.modal-image {
  height: 300px;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 2rem;
}

.modal-category {
  display: inline-block;
  background: linear-gradient(135deg, rgba(1, 83, 43, 0.1), rgba(51, 117, 85, 0.1));
  color: primary;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.modal-description {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  margin: 0 0 1.5rem 0;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 2px solid #f3f4f6;
  margin-bottom: 1rem;
}

.modal-price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.modal-price .currency {
  font-size: 1.1rem;
  color: #6b7280;
  font-weight: 600;
}

.modal-price .amount {
  font-size: 2.25rem;
  font-weight: 900;
  color: #059669;
}

.modal-rating {
  text-align: right;
}

.stars {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.rating-text {
  font-size: 0.85rem;
  color: #6b7280;
}

.info-note {
  background: linear-gradient(135deg, #dbeafe, #e0e7ff);
  padding: 1rem 1.25rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #1e40af;
  font-weight: 500;
  border: 1px solid rgba(30, 64, 175, 0.2);
}

.note-icon {
  font-size: 1.25rem;
}

/* Responsive */
@media (max-width: 768px) {
  .welcome-title {
    font-size: 2rem;
  }

  .menu-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }

  .search-section {
    top: 70px;
  }

  .category-tabs {
    padding: 0.75rem 0 1rem;
  }

  .modal-content {
    border-radius: 20px 20px 0 0;
    max-height: 95vh;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-price .amount {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .welcome-banner {
    padding: 2rem 1rem 1.5rem;
  }

  .welcome-title {
    font-size: 1.75rem;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }

  .modal-body {
    padding: 1.5rem;
  }
}
</style>