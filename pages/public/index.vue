<template>
  <div class="cafe-menu">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="coffee-icon">☕</span>
            Our Delicious Menu
            <span class="sparkle">✨</span>
          </h1>
          <p class="hero-subtitle">Crafted with love, served with passion</p>
        </div>
      </div>
    </div>

    <v-container fluid class="menu-container">
      <!-- Stats Bar -->
      <div class="stats-bar" v-if="activeProducts.length > 0">
        <div class="stat-item">
          <div class="stat-number">{{ activeProducts.length }}</div>
          <div class="stat-label">Delicious Items</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">🔥</div>
          <div class="stat-label">Fresh Daily</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">⭐</div>
          <div class="stat-label">Premium Quality</div>
        </div>
      </div>

      <!-- Menu Grid -->
      <div class="menu-grid" v-if="activeProducts.length > 0">
        <div 
          v-for="(product, index) in activeProducts"
          :key="product.productId"
          class="menu-item"
          :class="{ 'featured': index % 4 === 0 }"
          @click="previewImg(getProductImage(product))"
        >
          <div class="item-card">
            <!-- Popular Badge -->
            <div class="popular-badge" v-if="index < 3">
              <span>🔥 Popular</span>
            </div>
            
            <!-- Image Container -->
            <div class="image-container">
              <div class="image-wrapper">
                <img 
                  :src="getProductImage(product)" 
                  :alt="product.pro_name"
                  class="product-image"
                  @error="handleImageError"
                />
                <div class="image-overlay">
                  <div class="overlay-content">
                    <div class="zoom-icon">🔍</div>
                    <span>Click to view</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="item-content">
              <h3 class="item-title">{{ product.pro_name }}</h3>
              <p class="item-description">
                {{ product.pro_desc || 'A delightful treat crafted with premium ingredients' }}
              </p>
              
              <!-- Price Section -->
              <div class="price-section">
                <div class="price-container">
                  <span class="currency">LAK</span>
                  <span class="price">{{ formatPrice(product.pro_price) }}</span>
                </div>
                <!-- Action Buttons -->
                <div class="action-buttons">
                  <div class="add-to-cart">
                    <button class="cart-btn" @click.stop="addToCart(product)">
                      <span class="cart-icon">🛒</span>
                      Add
                    </button>
                  </div>
                  <div class="call-waiter-item">
                    <button class="waiter-btn" @click.stop="callWaiterForItem(product)" :disabled="isCallingWaiter">
                      <span class="waiter-icon">👨‍🍳</span>
                      Order
                    </button>
                  </div>
                </div>
              </div>

              <!-- Rating Stars -->
              <div class="rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-count">({{ Math.floor(Math.random() * 50) + 10 }})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="empty-state" v-else>
        <div class="empty-content">
          <div class="empty-icon">🍽️</div>
          <h2>Menu Coming Soon!</h2>
          <p>We're preparing something amazing for you</p>
          <div class="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </v-container>

    <!-- Table Selection Dialog -->
    <div class="table-dialog-overlay" v-if="showTableDialog" @click="closeTableDialog">
      <div class="table-dialog" @click.stop>
        <div class="dialog-header">
          <div class="header-content">
            <div class="header-icons">
              <span class="table-icon">🏠</span>
              <span class="sparkle-icon">✨</span>
            </div>
            <h3 class="header-title">
              <span class="greeting">May I have your</span>
              <span class="highlight">Table Number</span>
              <span class="please">please?</span>
            </h3>
            <p class="header-subtitle">We'll bring your order right to you! 🍽️</p>
          </div>
          <button class="dialog-close" @click="closeTableDialog">×</button>
        </div>
        
        <div class="dialog-content">
          <p class="dialog-subtitle">
            {{ selectedProduct ? `Perfect! Which table for your "${selectedProduct.pro_name}"? 🎯` : 'Choose your table so we can serve you perfectly! 🌟' }}
          </p>
          
          <!-- Table Grid -->
          <div class="tables-grid">
            <div 
              v-for="table in tables" 
              :key="table.number"
              class="table-card"
              :class="{ 'selected': selectedTable === table.number }"
              @click="selectTable(table.number)"
            >
              <div class="table-number">{{ table.number }}</div>
              <div class="table-name">{{ table.name }}</div>
              <div class="table-zone">{{ table.zone }}</div>
              <div class="table-icon-small">🪑</div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="dialog-actions">
            <button class="cancel-btn" @click="closeTableDialog">
              Cancel
            </button>
            <button 
              class="confirm-btn" 
              :disabled="!selectedTable"
              @click="confirmCallWaiter"
              :class="{ 'disabled': !selectedTable }"
            >
              <span class="btn-icon">🔔</span>
              Call Waiter
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Preview Modal -->
    <div class="image-modal" v-if="imageDialog" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">×</button>
        <div class="modal-image-container">
          <img :src="previewImageUrl" alt="Product Preview" class="modal-image" />
        </div>
      </div>
    </div>

    <!-- Floating Action Buttons -->
    <div class="fab-container">
      <!-- Call Waiter Button -->
      <button class="fab call-waiter-fab" @click="callWaiter" :class="{ 'calling': isCallingWaiter }">
        <span v-if="!isCallingWaiter">🔔</span>
        <span v-else class="calling-icon">📞</span>
      </button>
      
      <!-- Scroll to Top Button -->
      <button class="fab scroll-fab" @click="scrollToTop">
        <span>↑</span>
      </button>
    </div>
  </div>
</template>

<script>
import { hostName } from '~/common/api'

export default {
  layout: 'menu',
  name: 'RestaurantMenuScreen',
  data() {
    return {
      products: [],
      imageDialog: false,
      previewImageUrl: '',
      isCallingWaiter: false,
      waiterCallCount: 0,
      showTableDialog: false,
      selectedTable: '',
      selectedProduct: null,
      tables: [
        { number: 'T01', name: 'Table 1', zone: 'Window Side' },
        { number: 'T02', name: 'Table 2', zone: 'Window Side' },
        { number: 'T03', name: 'Table 3', zone: 'Center' },
        { number: 'T04', name: 'Table 4', zone: 'Center' },
        { number: 'T05', name: 'Table 5', zone: 'Corner' },
        { number: 'T06', name: 'Table 6', zone: 'Corner' },
        { number: 'T07', name: 'Table 7', zone: 'Outdoor' },
        { number: 'T08', name: 'Table 8', zone: 'Outdoor' },
        { number: 'T09', name: 'Table 9', zone: 'VIP' },
        { number: 'T10', name: 'Table 10', zone: 'VIP' },
        { number: 'BAR1', name: 'Bar Seat 1', zone: 'Bar Counter' },
        { number: 'BAR2', name: 'Bar Seat 2', zone: 'Bar Counter' },
      ]
    }
  },
  computed: {
    host() {
      return hostName()
    },
    activeProducts() {
      return this.products.filter((p) => {
        const isActive = p.isActive || p.is_active || p.status === 'active' || p.pro_status === 1 || p.pro_status === true
        return isActive
      })
    },
  },
  async mounted() {
    try {
      const response = await this.$axios.get('/product_mobile_f')
      this.products = response.data?.data || response.data?.products || response.data || []
    } catch (err) {
      console.error('Error loading products:', err)
    }
  },
  methods: {
    formatPrice(amount) {
      return new Intl.NumberFormat('en-US').format(amount || 0)
    },
    getProductImage(product) {
      const imageName = product.img_path
      if (imageName) {
        return `${this.host}/${imageName}`
      }
      return 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
    },
    previewImg(imageUrl) {
      this.previewImageUrl = imageUrl
      this.imageDialog = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.imageDialog = false
      document.body.style.overflow = 'auto'
    },
    addToCart(product) {
      // Add your cart functionality here
      console.log('Added to cart:', product.pro_name)
      // You can emit an event or call a store action
    },
    handleImageError(event) {
      event.target.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop'
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    callWaiter() {
      if (this.isCallingWaiter) return;
      
      this.selectedProduct = null;
      this.showTableDialog = true;
    },
    callWaiterForItem(product) {
      if (this.isCallingWaiter) return;
      
      this.selectedProduct = product;
      this.showTableDialog = true;
    },
    selectTable(tableNumber) {
      this.selectedTable = tableNumber;
    },
    closeTableDialog() {
      this.showTableDialog = false;
      this.selectedTable = '';
      this.selectedProduct = null;
    },
    confirmCallWaiter() {
      if (!this.selectedTable) return;
      
      const table = this.tables.find(t => t.number === this.selectedTable);
      const productName = this.selectedProduct ? this.selectedProduct.pro_name : '';
      
      this.isCallingWaiter = true;
      this.waiterCallCount++;
      this.showTableDialog = false;
      
      // Show notification with table info
      let message = `🔔 Waiter called to ${table.name} (${table.zone})!`;
      if (productName) {
        message += ` For "${productName}".`;
      }
      
      this.showNotification(message, 'success');
      
      // Simulate waiter response time
      setTimeout(() => {
        this.isCallingWaiter = false;
        this.showNotification(`👨‍🍳 Waiter is heading to ${table.name}!`, 'info');
      }, 3000);
      
      // Reset selections
      this.selectedTable = '';
      this.selectedProduct = null;
      
      // Here you would make an API call to notify the restaurant system
      // await this.$axios.post('/call-waiter', { 
      //   tableNumber: this.selectedTable,
      //   productId: this.selectedProduct?.productId,
      //   timestamp: new Date().toISOString()
      // });
      
      console.log('Waiter called:', {
        table: table,
        product: this.selectedProduct,
        timestamp: new Date().toISOString()
      });
    },
    showNotification(message, type = 'info') {
      // Create a simple notification system
      const notification = document.createElement('div');
      notification.className = `notification notification-${type}`;
      notification.innerHTML = `
        <div class="notification-content">
          <span>${message}</span>
          <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
      `;
      
      document.body.appendChild(notification);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 5000);
    }
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.cafe-menu {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

/* Hero Section */
.hero-section {
  height: 300px;
  background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), 
              url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=300&fit=crop') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  animation: fadeInUp 1s ease-out;
}

.coffee-icon, .sparkle {
  display: inline-block;
  animation: bounce 2s infinite;
}

.sparkle {
  animation-delay: 0.5s;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.3s both;
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

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Menu Container */
.menu-container {
  padding: 2rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Stats Bar */
.stats-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #6366f1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 500;
}

/* Menu Grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

/* Menu Item */
.menu-item {
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: slideInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.menu-item:nth-child(1) { animation-delay: 0.1s; }
.menu-item:nth-child(2) { animation-delay: 0.2s; }
.menu-item:nth-child(3) { animation-delay: 0.3s; }
.menu-item:nth-child(4) { animation-delay: 0.4s; }
.menu-item:nth-child(5) { animation-delay: 0.5s; }
.menu-item:nth-child(6) { animation-delay: 0.6s; }

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.menu-item:hover {
  transform: translateY(-10px) scale(1.02);
}

.menu-item.featured {
  grid-column: span 2;
}

.item-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.item-card:hover {
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

/* Popular Badge */
.popular-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 3;
  box-shadow: 0 4px 12px rgba(255,107,107,0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Image Container */
.image-container {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
}

.menu-item:hover .product-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.menu-item:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.zoom-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  animation: zoomPulse 1.5s infinite;
}

@keyframes zoomPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Item Content */
.item-content {
  padding: 1.5rem;
}

.item-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.item-description {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* Price Section */
.price-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.price-container {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.currency {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 500;
}

.price {
  font-size: 1.8rem;
  font-weight: bold;
  color: #059669;
  text-shadow: 0 2px 4px rgba(5,150,105,0.2);
}

.add-to-cart {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
}

.call-waiter-item {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease 0.1s;
}

.menu-item:hover .add-to-cart,
.menu-item:hover .call-waiter-item {
  opacity: 1;
  transform: translateX(0);
}

.action-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.cart-btn, .waiter-btn {
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.cart-btn {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 4px 15px rgba(99,102,241,0.3);
}

.cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99,102,241,0.4);
}

.waiter-btn {
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: white;
  box-shadow: 0 4px 15px rgba(245,158,11,0.3);
}

.waiter-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245,158,11,0.4);
}

.waiter-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cart-icon, .waiter-icon {
  font-size: 1.1rem;
}

/* Rating */
.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  color: #fbbf24;
  font-size: 0.9rem;
}

.rating-count {
  color: #6b7280;
  font-size: 0.8rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  backdrop-filter: blur(10px);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.empty-content h2 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.empty-content p {
  color: #6b7280;
  margin-bottom: 2rem;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.loading-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6366f1;
  animation: dotBounce 1.4s infinite ease-in-out;
}

.loading-dots span:nth-child(1) { animation-delay: -0.32s; }
.loading-dots span:nth-child(2) { animation-delay: -0.16s; }

@keyframes dotBounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

/* Table Selection Dialog */
.table-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
  backdrop-filter: blur(8px);
}

.table-dialog {
  background: rgba(255, 255, 255, 0.98);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow: hidden;
  animation: dialogSlide 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(20px);
}

@keyframes dialogSlide {
  from {
    transform: scale(0.8) translateY(60px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.dialog-header {
  padding: 2.5rem 2rem 1.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  position: relative;
  overflow: hidden;
}

.dialog-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  animation: headerShimmer 4s infinite;
}

@keyframes headerShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.header-content {
  text-align: center;
  flex: 1;
  z-index: 2;
}

.header-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.table-icon {
  font-size: 2.5rem;
  animation: bounce 2s infinite;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.sparkle-icon {
  font-size: 1.8rem;
  animation: sparkle 2s infinite ease-in-out;
  animation-delay: 0.5s;
}

@keyframes sparkle {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    opacity: 0.8;
  }
  50% { 
    transform: scale(1.3) rotate(180deg);
    opacity: 1;
  }
}

.header-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: titleGlow 3s infinite ease-in-out;
}

@keyframes titleGlow {
  0%, 100% { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
  50% { text-shadow: 2px 2px 20px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.2); }
}

.greeting {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.9;
  animation: fadeInSlide 1s ease-out;
}

.highlight {
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(45deg, #fff, #fbbf24, #fff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s infinite, popIn 1s ease-out 0.3s both;
  text-transform: uppercase;
  letter-spacing: 2px;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes popIn {
  0% { 
    transform: scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: scale(1);
    opacity: 1;
  }
}

.please {
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.95;
  font-style: italic;
  animation: fadeInSlide 1s ease-out 0.6s both;
}

@keyframes fadeInSlide {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-subtitle {
  margin: 1rem 0 0 0;
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 400;
  animation: fadeInSlide 1s ease-out 0.9s both;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.dialog-close {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.dialog-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.dialog-content {
  padding: 2rem;
  overflow-y: auto;
  max-height: 60vh;
}

.dialog-subtitle {
  text-align: center;
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.tables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.table-card {
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.table-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.table-card:hover::before {
  opacity: 1;
}

.table-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  border-color: rgba(99,102,241,0.3);
}

.table-card.selected {
  border-color: #6366f1;
  background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1));
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(99,102,241,0.3);
}

.table-card.selected::before {
  opacity: 1;
}

.table-number {
  font-size: 1.3rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.table-card.selected .table-number {
  color: #6366f1;
}

.table-name {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.table-zone {
  font-size: 0.8rem;
  color: #9ca3af;
  margin-bottom: 0.5rem;
}

.table-icon-small {
  font-size: 1.5rem;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.table-card:hover .table-icon-small,
.table-card.selected .table-icon-small {
  opacity: 1;
  transform: scale(1.2);
}

.dialog-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
}

.cancel-btn, .confirm-btn {
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cancel-btn {
  background: rgba(107, 114, 128, 0.1);
  color: #6b7280;
  border: 2px solid rgba(107, 114, 128, 0.2);
}

.cancel-btn:hover {
  background: rgba(107, 114, 128, 0.2);
  transform: translateY(-2px);
}

.confirm-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  box-shadow: 0 4px 15px rgba(16,185,129,0.3);
}

.confirm-btn:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16,185,129,0.4);
}

.confirm-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: 0 4px 15px rgba(16,185,129,0.2);
}

.btn-icon {
  font-size: 1.1rem;
  animation: ringBell 2s infinite;
}

@keyframes ringBell {
  0%, 90%, 100% { transform: rotate(0deg); }
  5%, 15% { transform: rotate(15deg); }
  10% { transform: rotate(-15deg); }
}

/* Image Modal */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.close-btn {
  position: absolute;
  top: -50px;
  right: -10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

/* Floating Action Buttons */
.fab-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fab {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.scroll-fab {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  box-shadow: 0 8px 25px rgba(99,102,241,0.3);
}

.scroll-fab:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 12px 35px rgba(99,102,241,0.4);
}

.call-waiter-fab {
  background: linear-gradient(135deg, #10b981, #059669);
  box-shadow: 0 8px 25px rgba(16,185,129,0.3);
  position: relative;
  overflow: hidden;
}

.call-waiter-fab:hover:not(.calling) {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 12px 35px rgba(16,185,129,0.4);
}

.call-waiter-fab.calling {
  animation: waiterPulse 1s infinite;
  background: linear-gradient(135deg, #f59e0b, #f97316);
}

.calling-icon {
  animation: phoneRing 0.5s infinite;
}

@keyframes waiterPulse {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 8px 25px rgba(245,158,11,0.3);
  }
  50% { 
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(245,158,11,0.5);
  }
}

@keyframes phoneRing {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

/* Notification Styles */
.notification {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  z-index: 2000;
  animation: notificationSlide 0.3s ease;
  max-width: 400px;
}

.notification-success {
  border-left: 4px solid #10b981;
}

.notification-info {
  border-left: 4px solid #3b82f6;
}

.notification-content {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.notification-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #6b7280;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.notification-close:hover {
  background: rgba(0,0,0,0.1);
  color: #374151;
}

@keyframes notificationSlide {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .menu-grid {
    grid-template-columns: 1fr;
  }
  
  .menu-item.featured {
    grid-column: span 1;
  }
  
  .stats-bar {
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .price-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .add-to-cart,
  .call-waiter-item {
    opacity: 1;
    transform: translateX(0);
  }

  .table-dialog {
    width: 95%;
    margin: 1rem;
  }
  
  .dialog-header {
    padding: 2rem 1.5rem 1.5rem;
  }
  
  .header-title {
    font-size: 1.5rem;
  }
  
  .highlight {
    font-size: 1.8rem;
  }
  
  .header-icons {
    margin-bottom: 0.5rem;
  }
  
  .table-icon {
    font-size: 2rem;
  }
  
  .dialog-content {
    padding: 1.5rem;
  }
  
  .tables-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.75rem;
  }
  
  .table-card {
    padding: 1rem 0.75rem;
  }
  
  .dialog-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .cancel-btn, .confirm-btn {
    width: 100%;
    justify-content: center;
    padding: 1rem 2rem;
  }

  .notification {
    top: 1rem;
    right: 1rem;
    left: 1rem;
    max-width: none;
  }
}

@media (max-width: 480px) {
  .menu-container {
    padding: 1rem 0.5rem;
  }
  
  .hero-section {
    height: 200px;
  }
  
  .image-container {
    height: 200px;
  }
  
  .fab-container {
    bottom: 1rem;
    right: 1rem;
  }
  
  .fab {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  
  .action-buttons {
    justify-content: center;
  }
}
</style>