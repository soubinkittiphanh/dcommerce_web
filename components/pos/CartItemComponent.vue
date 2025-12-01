<template>
  <v-card flat class="cart-item pa-2" :class="{ 'cart-item-hover': true }">
    <v-row no-gutters align="center">
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

      <v-col cols="4" class="pr-2">
        <div class="text-body-2 font-weight-medium text-wrap">
          {{ item.pro_name }}
        </div>
      </v-col>

      <v-col cols="3">
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

      <v-col cols="4" class="text-right">
        <v-chip
          small
          color="warning"
          outlined
          @click="$emit('price-click', item)"
          class="price-chip"
        >
          {{ formatNumber(item.localPrice * item.qty) }}
        </v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
// We assume getFormatNum is available via a utility file
import { getFormatNum } from '~/common' 

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
  // Emit events are defined in the template: delete, decrease, increase, update-qty, price-click
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
}
</style>