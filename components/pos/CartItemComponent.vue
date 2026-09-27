<template>
  <v-card flat class="cart-item pa-2" :class="{ 'cart-item-hover': true }">
    <v-row no-gutters align="center">
      <v-col cols="1">
        <v-btn icon small color="error" @click="$emit('delete', item)" title="ລົບອອກ">
          <v-icon small>mdi-delete</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="4" class="pr-2">
        <div class="font-weight-medium text-wrap">
          {{ item.pro_name }}
          <v-chip v-if="item.isGift" x-small color="pink" text-color="white" class="ml-1 gift-indicator">
            <v-icon x-small left>mdi-gift</v-icon>GIFT
          </v-chip>
          <v-chip v-else-if="item.giftQuantity > 0" x-small color="purple" text-color="white"
            class="ml-1 gift-indicator">
            <v-icon x-small left>mdi-gift-outline</v-icon>{{ item.giftQuantity }}/{{ item.qty }} GIFT
          </v-chip>

          <!-- Unit Selector Dropdown Menu -->
          <v-menu offset-y v-if="item.productUnits && item.productUnits.length > 0">
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                x-small
                class="ml-1 px-2 font-weight-bold cursor-pointer"
                color="primary"
                v-bind="attrs"
                v-on="on"
                outlined
              >
                {{ item.unitSymbol || item.baseUnit?.name || item.stockUnit?.name || item.baseUnit?.symbol || item.stockUnit?.symbol || 'pcs' }}
                <v-icon x-small right class="ml-1">mdi-chevron-down</v-icon>
              </v-chip>
            </template>
            <v-list dense>
              <!-- Base unit option -->
              <v-list-item @click="selectUnit(null)">
                <v-list-item-title class="font-weight-bold">
                  {{ getBaseUnitName(item) }} (Base) - {{ formatNumber(item.pro_price) }}
                </v-list-item-title>
              </v-list-item>
              <!-- Mapped unit options -->
              <v-list-item
                v-for="pu in item.productUnits"
                :key="pu.id"
                @click="selectUnit(pu)"
              >
                <v-list-item-title>
                  {{ pu.unit?.name || pu.unit?.symbol || 'pcs' }} - {{ formatNumber(pu.price) }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- Standard static chip if no other units -->
          <v-chip
            v-else
            x-small
            class="ml-1 px-2 font-weight-bold"
            color="grey darken-1"
            outlined
          >
            {{ item.unitSymbol || item.baseUnit?.name || item.stockUnit?.name || item.baseUnit?.symbol || item.stockUnit?.symbol || 'pcs' }}
          </v-chip>
          
          <!-- Variant tags -->
          <div v-if="item.color || item.size" class="mt-1 d-flex flex-wrap align-center">
            <v-chip v-if="item.color" x-small outlined class="mr-1 py-0 px-1" style="height: 18px;">
              <div 
                v-if="item.color.hex_code" 
                class="color-preview-tiny mr-1"
                :style="`background-color: ${item.color.hex_code};`"
              ></div>
              <v-icon v-else x-small left class="mr-1">mdi-palette</v-icon>
              {{ item.color.name || item.color.color_name }}
            </v-chip>
            <v-chip v-if="item.size" x-small outlined class="py-0 px-1" style="height: 18px;">
              <v-icon x-small left class="mr-1">mdi-ruler</v-icon>
              {{ item.size.name || item.size.size_name }}
            </v-chip>
          </div>
        </div>

        <div v-if="item.tax" class=" grey--text">
          <v-icon x-small>mdi-label-percent-outline</v-icon>
          {{ item.tax.name }} ({{ item.tax.taxType }})
        </div>
      </v-col>

      <v-col cols="2">
        <div class="d-flex align-center justify-center">
          <v-btn icon x-small @click="$emit('decrease', item)" :disabled="item.qty <= 1">
            <v-icon small>mdi-minus</v-icon>
          </v-btn>
          <v-btn text small @click="$emit('update-qty', item)" class="mx-1 qty-btn" min-width="40">
            {{ item.qty }}
          </v-btn>
          <v-btn icon x-small @click="$emit('increase', item)">
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="1" class="text-center">
        <v-btn icon small :color="item.isGift || item.giftQuantity > 0 ? 'pink' : 'grey'" @click="handleGiftClick"
          class="gift-btn">
          <v-icon small :class="{ 'gift-active': item.isGift || item.giftQuantity > 0 }">
            {{ getGiftIcon() }}
          </v-icon>
        </v-btn>
      </v-col>

      <v-col cols="4" class="text-right">
        <div class="d-flex flex-column align-end">
          <v-chip small :color="item.isGift ? 'pink' : 'warning'" outlined @click="$emit('price-click', item)"
            class="price-chip mb-1" :class="{ 'gift-price': item.isGift }">
            <v-icon v-if="item.isGift" x-small left>mdi-gift</v-icon>
            {{ getPriceDisplay() }}
          </v-chip>

          <div v-if="item.tax && item.tax.taxType === 'EXC' && !item.isGift" class="success--text"
            style="font-size: 0.7rem;">
            (ລວມພາສີແລ້ວ)
          </div>

          <div v-if="item.giftQuantity > 0 && !item.isGift" class="gift-breakdown">
            <div class="pink--text">
              <v-icon x-small>mdi-gift</v-icon> {{ item.giftQuantity }} × {{ getGiftPriceDisplay() }}
            </div>
            <div class="grey--text">
              <v-icon x-small>mdi-cash</v-icon> {{ item.qty - item.giftQuantity }} × {{
                formatNumber(getInclusiveUnitPrice()) }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Gift Dialog -->
    <GiftDialog v-model="giftDialogOpen" :item="item" :format-number="formatNumber" @confirm-gift="handleGiftConfirm" />
  </v-card>
</template>

<script>
// We assume getFormatNum is available via a utility file
import { getFormatNum } from '~/common'
import GiftDialog from '~/components/card/GiftDialog.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartItem',

  components: {
    GiftDialog,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
    // The main layout passes its formatNumber method to keep consistency
    formatNumber: {
      type: Function,
      required: true,
    },
  },

  data() {
    return {
      giftDialogOpen: false,
    }
  },
  computed: {
    ...mapGetters(['currentSelectedCustomer', 'cartOfProduct', 'findAllCurrency', 'findAllUnit']),
  },
  methods: {
    getInclusiveUnitPrice() {
      const basePrice = this.item.localPrice;
      if (this.item.tax && this.item.tax.taxType === 'EXC') {
        const rate = parseFloat(this.item.tax.rate || 0);
        return basePrice * (1 + rate);
      }
      return basePrice;
    },
    handleGiftClick() {
      if (this.item.isGift || this.item.giftQuantity > 0) {
        // If item has gift settings, open dialog to modify
        this.giftDialogOpen = true
      } else {
        // If no gift settings, open dialog to create gift
        this.giftDialogOpen = true
      }
    },

    handleGiftConfirm(giftData) {
      // Emit gift configuration to parent component
      console.info(`GIFT DATA ITEM CART logs ${JSON.stringify(giftData)}`)
      console.info(`GIFT DATA ITEM CART logs ${giftData}`)
      this.$emit('configure-gift', giftData)
      //  please sent this data to cart state to modify cart item split normal and gift amount accordingly
      this.giftDialogOpen = false
    },

    getGiftButtonTitle() {
      if (this.item.isGift) {
        return 'ແກ້ໄຂການຕັ້ງຄ່າຂອງຂວັນ'
      } else if (this.item.giftQuantity > 0) {
        return 'ແກ້ໄຂຂອງຂວັນບາງສ່ວນ'
      } else {
        return 'ກຳນົດເປັນຂອງຂວັນ'
      }
    },

    getGiftIcon() {
      if (this.item.isGift) {
        return 'mdi-gift'
      } else if (this.item.giftQuantity > 0) {
        return 'mdi-gift-outline'
      } else {
        return 'mdi-gift-outline'
      }
    },
    findCurrency(currencyId) {
      return this.findAllCurrency.find((el) => el.id == currencyId)
    },
    getPriceDisplay() {
      const currency = this.findCurrency(this.item.saleCurrencyId);
      const currencyCode = currency ? currency.code : '';
      const inclusivePrice = this.getInclusiveUnitPrice();

      if (this.item.isGift) {
        // Gifts usually stay at their configured giftAmount (often 0)
        const displayTotal = this.item.localPrice * this.item.qty;
        return displayTotal === 0 ? 'FREE' : `${this.formatNumber(displayTotal)}${currencyCode}`;
      } else if (this.item.giftQuantity > 0) {
        // Mixed pricing
        const regularTotal = (this.item.qty - this.item.giftQuantity) * inclusivePrice;
        const giftTotal = this.item.giftQuantity * (this.item.giftAmount || 0);
        return `${this.formatNumber(regularTotal + giftTotal)}${currencyCode}`;
      } else {
        // Standard item (Total = inclusive price * qty)
        return `${this.formatNumber(inclusivePrice * this.item.qty)}${currencyCode}`;
      }
    },

    getGiftPriceDisplay() {
      if (this.item.giftAmount === 0) return 'FREE';
      return this.formatNumber(this.item.giftAmount);
    },
    getBaseUnitName(item) {
      const baseUnit = this.findAllUnit.find(u => u.id === (item.baseUnitId || item.stockUnitId))
      return baseUnit ? (baseUnit.name || baseUnit.symbol) : 'pcs'
    },
    selectUnit(pu) {
      const stockUnit = this.findAllUnit.find(u => u.id === (this.item.stockUnitId || this.item.baseUnitId))
      const stockRate = parseFloat(stockUnit?.conversionRate || 1.0)

      const baseUnit = this.findAllUnit.find(u => u.id === (this.item.baseUnitId || this.item.stockUnitId))
      const baseRate = parseFloat(baseUnit?.conversionRate || 1.0)
      
      if (!pu) {
        // Switch back to base unit (rate relative to stock unit)
        const baseSymbol = baseUnit ? baseUnit.symbol : (this.item.baseUnit?.symbol || this.item.stockUnit?.symbol || 'pcs')
        const baseId = this.item.baseUnitId || this.item.stockUnitId
        const relRate = stockRate > 0 ? (baseRate / stockRate) : 1.0
        this.$emit('change-unit', {
          lineUUID: this.item.lineUUID,
          unitId: baseId,
          unitRate: relRate,
          unitSymbol: baseSymbol,
          localPrice: this.item.pro_price
        })
      } else {
        // Switch to mapped unit (rate relative to stock unit)
        const targetRate = parseFloat(pu.unit?.conversionRate || 1.0)
        const relRate = stockRate > 0 ? (targetRate / stockRate) : targetRate
        this.$emit('change-unit', {
          lineUUID: this.item.lineUUID,
          unitId: pu.unitId,
          unitRate: relRate,
          unitSymbol: pu.unit?.symbol || 'pcs',
          localPrice: Number(pu.price) || this.item.pro_price
        })
      }
    },
  },

  // Emit events: delete, decrease, increase, update-qty, price-click, configure-gift
}
</script>

<style scoped>
/* Scoped styles for the cart item container */
.cart-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background-color 0.2s ease;
}

.cart-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
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

.gift-breakdown {
  font-size: 10px;
  line-height: 1.2;
}

.gift-breakdown div {
  margin: 1px 0;
}

@keyframes gift-pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes gift-glow {
  0% {
    box-shadow: 0 0 5px rgba(233, 30, 99, 0.5);
  }

  100% {
    box-shadow: 0 0 20px rgba(233, 30, 99, 0.8);
  }
}

/* Enhanced hover effects */
.cart-item-hover:hover .gift-btn {
  background-color: rgba(233, 30, 99, 0.1) !important;
}

/* Color preview styles */
.color-preview-tiny {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    display: inline-block;
    vertical-align: middle;
}
</style>