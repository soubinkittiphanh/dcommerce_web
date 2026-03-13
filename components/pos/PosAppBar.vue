<template>
  <v-app-bar
    app
    color="primary"
    dark
    clipped-left
    clipped-right
    elevation="8"
    height="80"
    class="app-header"
  >
    <v-container fluid class="pa-3">
      <v-row align="center" no-gutters>
        <!-- Left Section - Menu & Mobile Cart -->
        <v-col cols="12" md="2" class="d-flex align-center">
          <v-btn icon @click="$emit('toggle-drawer')" class="mr-3 menu-btn" large>
            <v-icon size="28">mdi-menu</v-icon>
          </v-btn>

          <!-- Mobile Cart Button -->
          <v-btn
            icon
            @click="$emit('toggle-cart-drawer')"
            class="d-lg-none cart-mobile-btn"
            large
          >
            <v-badge
              v-if="cartItemCount > 0"
              :content="cartItemCount"
              color="error"
              overlap
              dot
            >
              <v-icon size="28">mdi-cart</v-icon>
            </v-badge>
            <v-icon v-else size="28">mdi-cart-outline</v-icon>
          </v-btn>
        </v-col>

        <!-- Right Section - Action Buttons -->
        <v-col cols="12" md="8" lg="9" class="d-flex justify-end">
          <div class="d-flex align-center flex-wrap ga-2">
            <!-- Customer Screen Button -->
            <v-btn
              class="header-btn mr-2"
              :color="isCustomerDisplayOpen ? 'success' : 'white'"
              text
              @click="$emit('open-customer-screen')"
              large
              rounded
            >
              <v-icon left size="20">
                {{
                  isCustomerDisplayOpen
                    ? 'mdi-monitor-eye'
                    : 'mdi-monitor-share'
                }}
              </v-icon>
              <span class="d-none d-sm-inline font-weight-medium">
                {{ isCustomerDisplayOpen ? 'ອັບເດດຈໍ' : 'ຈໍລູກຄ້າ' }}
              </span>
            </v-btn>

            <!-- Navigation Buttons -->
            <v-btn
              v-for="item in headerMenu"
              :key="item.title"
              :to="item.path"
              @click="handleMenuClick(item)"
              text
              class="header-btn"
              :class="{ 'active-route': $route.path === item.path }"
              large
              rounded
            >
              <v-icon left size="20">{{ item.icon }}</v-icon>
              <span class="d-none d-sm-inline font-weight-medium">{{
                item.title
              }}</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'PosAppBar',
  
  props: {
    currentTerminal: Object,
    isCustomerDisplayOpen: Boolean,
    drawer: Boolean,
    cartItemCount: {
      type: Number,
      default: 0
    }
  },

  emits: [
    'toggle-drawer',
    'toggle-cart-drawer',
    'open-customer-screen',
    'set-quotation'
  ],

  data() {
    return {
      headerMenu: [
        {
          title: 'Home',
          path: '/admin',
          icon: 'mdi-home-circle-outline',
          method: null,
        },
        {
          title: 'Orders',
          path: '/admin/ordersFromPos',
          icon: 'mdi-reorder-horizontal',
          method: null,
        },
        {
          title: 'Quotation',
          path: '',
          icon: 'mdi-receipt-text-clock-outline',
          method: 'setQuotation',
        },
        {
          title: 'Logout',
          path: '/admin/logout',
          icon: 'mdi-logout',
          method: null,
        },
      ]
    }
  },

  methods: {
    handleMenuClick(item) {
      if (item.method === 'setQuotation') {
        this.$emit('set-quotation')
      }
    }
  }
}
</script>

<style scoped>
.app-header {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
}

.menu-btn,
.cart-mobile-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.menu-btn:hover,
.cart-mobile-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: scale(1.05);
}

.header-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease;
  margin: 0 2px;
}

.header-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.active-route {
  background: rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
</style>