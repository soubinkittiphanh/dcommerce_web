<template>
  <v-app light>
    <v-main class="menu-layout" :style="themeStyles">
      <!-- Main Content -->
      <div class="menu-content">
        <Nuxt />
      </div>

      <!-- Bottom Navigation -->
      <div class="bottom-nav">
        <button class="bottom-nav-btn" @click="goToHome">
          <span class="nav-icon"><i class="mdi mdi-storefront-outline"></i></span>
          <span class="nav-label">Home</span>
        </button>
        <button class="bottom-nav-btn" @click="goToMenu">
          <span class="nav-icon"><i class="mdi mdi-silverware-fork-knife"></i></span>
          <span class="nav-label">Menu</span>
        </button>
        <button class="bottom-nav-btn fab-btn" @click="callWaiter" title="Call Waiter">
          <span class="nav-icon"><i class="mdi mdi-bell-ring-outline"></i></span>
        </button>
        <button class="bottom-nav-btn" @click="goToCart">
          <span class="nav-icon"><i class="mdi mdi-shopping-outline"></i></span>
          <span class="nav-label">Cart</span>
        </button>
        <button class="bottom-nav-btn" @click="goToInfo">
          <span class="nav-icon"><i class="mdi mdi-receipt-text-outline"></i></span>
          <span class="nav-label">Bill</span>
        </button>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'MenuLayout',
  data() {
    return {
      restaurantName: 'Cafe & Restaurant',
      cartItemCount: 0,
    }
  },
  computed: {
    themeStyles() {
      const primary = this.$vuetify?.theme?.themes?.light?.primary || 
                      this.$store?.state?.theme?.primary_color || 
                      '#01532B'
      const secondary = this.$vuetify?.theme?.themes?.light?.secondary || 
                        this.$store?.state?.theme?.secondary_color || 
                        '#337555'
      return {
        '--primary-color': primary,
        '--secondary-color': secondary
      }
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    getCurrentTableNumber() {
      if (this.$route.query.table) return this.$route.query.table
      const local = typeof window !== 'undefined' ? localStorage.getItem('dc_current_table') : null
      return local || '01'
    },
    goToHome() {
      if (typeof window !== 'undefined') {
        const table = this.getCurrentTableNumber()
        if (this.$route.path.includes('/e-menu')) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          window.location.hash = `#/e-menu?table=${encodeURIComponent(table)}`
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    },
    goToMenu() {
      if (typeof window !== 'undefined') {
        const table = this.getCurrentTableNumber()
        if (this.$route.path.includes('/e-menu')) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          window.location.hash = `#/e-menu?table=${encodeURIComponent(table)}`
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    },
    openCart() {
      if (this.$nuxt) {
        this.$nuxt.$emit('open-cart')
      }
    },
    callWaiter() {
      if (this.$nuxt) {
        this.$nuxt.$emit('call-waiter')
      }
      this.$emit('call-waiter')
    },
    goToCart() {
      if (this.$nuxt) {
        this.$nuxt.$emit('open-cart')
      }
    },
    goToInfo() {
      if (this.$nuxt) {
        this.$nuxt.$emit('open-info')
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
}

.menu-layout {
  background: linear-gradient(135deg, primary 0%, secondary 100%);
  min-height: 100vh;
  padding-bottom: 80px;
  position: relative;
}

/* Top Navigation */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 100;
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.restaurant-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  background: linear-gradient(135deg, primary, secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-actions {
  display: flex;
  gap: 0.75rem;
}

.nav-btn {
  background: rgba(99, 102, 241, 0.1);
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.nav-btn:hover {
  background: rgba(99, 102, 241, 0.2);
  transform: scale(1.1);
}

.cart-btn {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.cart-btn span:first-child {
  filter: brightness(0) invert(1);
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Main Content */
.menu-content {
  padding-top: 80px;
  padding-bottom: 100px;
  min-height: 100vh;
}

/* Bottom Navigation */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 0.5rem;
  z-index: 100;
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.bottom-nav-btn {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  flex: 1;
  max-width: 80px;
}

.bottom-nav-btn:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-2px);
}

.bottom-nav-btn.active {
  background: rgba(99, 102, 241, 0.15);
}

.fab-btn {
  position: relative;
  top: -20px;
  background: linear-gradient(135deg, var(--primary-color, #01532B), var(--secondary-color, #337555));
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  flex: initial;
  max-width: none;
}

.fab-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 35px rgba(16, 185, 129, 0.4);
}

.fab-btn .nav-icon {
  font-size: 1.8rem;
  filter: brightness(0) invert(1);
}

.fab-btn .nav-label {
  display: none;
}

.nav-icon {
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.bottom-nav-btn:hover .nav-icon {
  transform: scale(1.2);
}

.nav-label {
  font-size: 0.7rem;
  color: #6b7280;
  font-weight: 500;
  transition: all 0.3s ease;
}

.bottom-nav-btn:hover .nav-label {
  color: #6366f1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-content {
    padding: 0.75rem 1rem;
  }

  .restaurant-name {
    font-size: 1.2rem;
  }

  .logo-icon {
    font-size: 1.5rem;
  }

  .menu-content {
    padding-top: 70px;
  }

  .bottom-nav-btn {
    padding: 0.5rem 0.25rem;
  }

  .nav-label {
    font-size: 0.65rem;
  }
}

@media (max-width: 480px) {
  .nav-content {
    padding: 0.5rem 0.75rem;
  }

  .restaurant-name {
    font-size: 1rem;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
  }

  .fab-btn {
    width: 56px;
    height: 56px;
    top: -18px;
  }
}
</style>