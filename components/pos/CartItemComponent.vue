<template>
  <v-card flat class="cart-item pa-2" :class="{ 'cart-item-hover': true }">
    <v-row no-gutters align="center">
      <!-- Delete Button -->
      <v-col cols="1">
        <v-btn
          icon
          small
          color="error"
          @click="$emit('delete', item)"
          title="ລົບອອກ"
        >
          <v-icon small>mdi-delete</v-icon>
        </v-btn>
      </v-col>

      <!-- Product Name -->
      <v-col cols="4" class="pr-2">
        <div class="font-weight-medium text-wrap">
          {{ item.pro_name }}
          <!-- Gift indicator -->
          <v-chip
            v-if="item.isGift"
            x-small
            color="pink"
            text-color="white"
            class="ml-1 gift-indicator"
          >
            <v-icon x-small left>mdi-gift</v-icon>
            GIFT
          </v-chip>
        </div>
      </v-col>

      <!-- Quantity Controls -->
      <v-col cols="2">
        <div class="d-flex align-center justify-center">
          <v-btn
            icon
            x-small
            @click="$emit('decrease', item)"
            :disabled="item.qty <= 1"
          >
            <v-icon small>mdi-minus</v-icon>
          </v-btn>
          <v-btn
            text
            small
            @click="$emit('update-qty', item)"
            class="mx-1 qty-btn"
            min-width="40"
          >
            {{ item.qty }}
          </v-btn>
          <v-btn icon x-small @click="$emit('increase', item)">
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-col>

      <!-- Gift Action Button -->
      <v-col cols="1" class="text-center">
        <v-btn
          icon
          small
          :color="item.isGift ? 'pink' : 'grey'"
          @click="$emit('toggle-gift', item)"
          :title="item.isGift ? 'ຍົກເລີກຂອງຂວັນ' : 'ກຳນົດເປັນຂອງຂວັນ'"
          class="gift-btn"
        >
          <v-icon small :class="{ 'gift-active': item.isGift }">
            {{ item.isGift ? 'mdi-gift' : 'mdi-gift-outline' }}
          </v-icon>
        </v-btn>
      </v-col>

      <!-- Price -->
      <v-col cols="4" class="text-right">
        <v-chip
          small
          :color="item.isGift ? 'pink' : 'warning'"
          outlined
          @click="$emit('price-click', item)"
          class="price-chip"
          :class="{ 'gift-price': item.isGift }"
        >
          <v-icon v-if="item.isGift" x-small left>mdi-gift</v-icon>
          {{ item.isGift ? 'FREE' : formatNumber(item.localPrice * item.qty) }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// We assume getFormatNum is available via a utility file
import { getFormatNum } from '~/common' 
import GiftDialog from '~/components/card/GiftDialog.vue'


export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    // The main layout passes its formatNumber method to keep consistency
    formatNumber: {
      type: Function,
      required: true
    }
  },
  // Emit events: delete, decrease, increase, update-qty, price-click, toggle-gift
}
</script>

<style scoped>
/* Scoped styles for the cart item container */
.cart-item {
  border-bottom: 1px solid rgba(0,0,0,0.06);
  transition: background-color 0.2s ease;
}

.cart-item:hover {
  background-color: rgba(0,0,0,0.02);
}

.qty-btn {
  background-color: rgba(var(--v-primary-base), 0.1) !important;
  border-radius: 4px;
  font-weight: bold;
}

.price-chip {
  cursor: pointer;
  transition: all 0.3s ease;
}

.gift-price {
  background-color: rgba(233, 30, 99, 0.1) !important;
  border-color: #e91e63 !important;
  color: #e91e63 !important;
}

.gift-btn {
  transition: all 0.3s ease;
}

.gift-btn:hover {
  transform: scale(1.1);
}

.gift-active {
  animation: gift-pulse 2s infinite;
}

.gift-indicator {
  animation: gift-glow 2s infinite alternate;
}

@keyframes gift-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes gift-glow {
  0% { box-shadow: 0 0 5px rgba(233, 30, 99, 0.5); }
  100% { box-shadow: 0 0 20px rgba(233, 30, 99, 0.8); }
}

/* Enhanced hover effects */
.cart-item-hover:hover .gift-btn {
  background-color: rgba(233, 30, 99, 0.1) !important;
}
</style>