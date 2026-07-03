<template>
  <v-overlay :value="true" class="success-overlay" opacity="0.95">
    <div class="success-content">
      <v-icon size="80" color="white" class="success-icon">mdi-check-circle</v-icon>
      <h2 class="success-title">Payment Successful!</h2>
      <div class="success-amount">{{ formatPrice(amount) }}</div>
      <p class="success-message">Thank you for your payment</p>
      
      <div class="success-timer">
        <v-progress-linear :value="progress" color="white" height="4" rounded />
        <p class="success-countdown">Screen will reset in {{ Math.ceil(successTimeRemaining / 1000) }}s</p>
      </div>
    </div>
  </v-overlay>
</template>

<script>
export default {
  props: ['amount', 'progress', 'successTimeRemaining', 'localCurrencyCode'],
  methods: {
    formatPrice(amt) {
      const code = this.localCurrencyCode || 'LAK';
      const symbols = {
        'LAK': '₭',
        'THB': '฿',
        'USD': '$',
      };
      const symbol = symbols[code] || code;
      const formatted = new Intl.NumberFormat('en-US').format(amt || 0);
      return `${formatted} ${symbol}`;
    }
  }
}
</script>

<style scoped>
.success-overlay { background: rgba(40, 167, 69, 0.95) !important; z-index: 9999; }
.success-content { text-align: center; color: white; }
.success-icon { animation: pulse 1s ease-in-out; }
.success-amount { font-size: 2rem; font-weight: 700; margin: 1rem 0; }
@keyframes pulse { 0% { transform: scale(0.8); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
</style>