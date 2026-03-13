<template>
  <div class="order-section">
    <div class="order-header">
      <h3 class="order-title">Your Order</h3>
      <div class="table-badge" v-if="qrData.tableNumber">
        <v-icon small color="white">mdi-table-furniture</v-icon>
        Table {{ qrData.tableNumber }}
      </div>
    </div>

    <div class="order-items-container">
      <div v-if="items.length > 0" class="items-list">
        <div v-for="(item, index) in items" :key="index" class="order-item" :class="getItemDisplayClass(item)">

          <div v-if="isGiftItem(item)" class="gift-badge-container">
            <div class="gift-badge" :class="isFreeGift(item) ? 'gift-badge-free' : 'gift-badge-special'">
              <v-icon small color="white">mdi-gift</v-icon>
              <span class="gift-text">{{ isFreeGift(item) ? 'FREE GIFT' : 'SPECIAL' }}</span>
            </div>
          </div>

          <div class="item-details">
            <div class="item-name" :class="{ 'gift-item-name-free': isFreeGift(item) }">
              {{ item.name }}
            </div>
            <div class="item-description success--text" v-if="item.tax && item.tax.taxType === 'EXC'">
              (ລວມພາສີແລ້ວ)
            </div>
            <div class="item-description" v-else-if="item.description">{{ item.description }}</div>
          </div>
          <div class="item-quantity">{{ item.quantity }}x</div>
          <div class="item-price">
            {{ isFreeGift(item) ? 'FREE' : formatPrice(calculateInclusiveTotal(item)) }}
          </div>
        </div>
      </div>
    </div>

    <div class="order-summary">
      <div class="summary-line"><span>Subtotal:</span><span>{{ formatPrice(summary.subtotal) }}</span></div>

      <div class="summary-line" v-if="summary.tax > 0">
        <span>Tax (VAT):</span><span class="success--text">+{{ formatPrice(summary.tax) }}</span>
      </div>

      <div v-if="displayDiscount > 0" class="summary-line">
        <span>Discount:</span><span class="discount">-{{ formatPrice(displayDiscount) }}</span>
      </div>
      <div v-if="displayChange > 0" class="summary-line">
        <span>Change:</span><span class="change-positive">{{ formatPrice(displayChange) }}</span>
      </div>
      <div class="summary-total"><span>Total:</span><span>{{ formatPrice(qrData.amount) }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'summary', 'qrData', 'displayDiscount', 'displayChange'],
  methods: {
    // ✅ ALIGNED: Logic to show tax-inclusive total per line, including partial gifts
    calculateInclusiveTotal(item) {
      const basePrice = item.localPrice || item.unitPrice || 0;
      let inclusiveUnitPrice = basePrice;

      // Calculate inclusive unit price if tax is EXC
      if (item.tax && item.tax.taxType === 'EXC') {
        const rate = parseFloat(item.tax.rate || 0);
        inclusiveUnitPrice = basePrice * (1 + rate);
      }

      const qty = item.quantity || 1;
      const giftQty = item.giftQuantity || 0;

      if (item.isGift) {
        // Full gift
        return basePrice * qty;
      } else if (giftQty > 0) {
        // Partial gift
        const regularTotal = (qty - giftQty) * inclusiveUnitPrice;
        const giftTotal = giftQty * (item.giftAmount || 0);
        return regularTotal + giftTotal;
      } else {
        // Standard item
        return inclusiveUnitPrice * qty;
      }
    },
    isGiftItem(item) { return item.isGift === true },
    isFreeGift(item) {
      if (this.isGiftItem(item)) {
        return (item.unitPrice === 0 || item.totalPrice === 0 || item.localPrice === 0);
      }
      return false;
    },
    getItemDisplayClass(item) {
      if (!this.isGiftItem(item)) return 'regular-item'
      return this.isFreeGift(item) ? 'gift-item gift-item-free' : 'gift-item gift-item-special'
    },
    formatPrice(amt) {
      return new Intl.NumberFormat('en-US').format(Math.round(amt || 0)) + ' ₭'
    }
  }
}
</script>

<style scoped>
.order-section {
  flex: 1;
  background: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.order-header {
  padding: 1rem 1.5rem;
  background: #01532B;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-items-container {
  flex: 1;
  padding: 1rem 1.5rem;
  overflow-y: auto;
}

.order-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  transition: all 0.3s;
}

.gift-badge-container {
  position: absolute;
  top: -8px;
  left: -8px;
  z-index: 10;
}

.gift-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.gift-badge-free {
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  animation: giftPulse 2s infinite;
}

.gift-badge-special {
  background: linear-gradient(135deg, #1976d2, #1565c0);
}

.gift-item-free {
  background: #e8f5e8;
  border-color: rgba(76, 175, 80, 0.3);
}

.item-details {
  flex: 1;
}

.item-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #212529;
}

.gift-item-name-free {
  color: #2e7d32;
  font-weight: 700;
}

.item-quantity {
  font-weight: 600;
  color: #01532B;
  margin: 0 0.75rem;
  min-width: 35px;
  text-align: center;
}

.item-price {
  font-weight: 700;
  color: #01532B;
  min-width: 70px;
  text-align: right;
}

.order-summary {
  padding: 1rem 1.5rem;
  border-top: 2px solid #e9ecef;
  background: #f8f9fa;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 700;
  color: #01532B;
  padding-top: 0.75rem;
  border-top: 2px solid #01532B;
  margin-top: 0.5rem;
}

.discount {
  color: #dc3545;
}

.change-positive {
  color: #28a745;
  font-weight: 600;
}

@keyframes giftPulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

@keyframes giftIconSpin {

  0%,
  100% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(15deg);
  }

  40% {
    transform: rotate(-10deg);
  }
}

.free-gift-icon {
  animation: giftIconSpin 3s infinite;
}

.order-items-container::-webkit-scrollbar {
  width: 6px;
}

.order-items-container::-webkit-scrollbar-thumb {
  background: #01532B;
  border-radius: 3px;
}
</style>