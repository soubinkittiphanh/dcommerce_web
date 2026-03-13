// /utils/currency-helper.js
export const CurrencyHelper = {
  
  /**
   * Convert amount from foreign currency to local currency
   */
  convertToLocal(amount, fromCurrency, localCurrency) {
    if (!fromCurrency || !localCurrency || fromCurrency.isLocalCCY) {
      return amount; // Already in local currency
    }

    if (fromCurrency.exchangeDirection === 'local_to_foreign') {
      // Rate: 1 local = rate foreign
      // Convert foreign to local: amount / rate
      return amount / fromCurrency.rate;
    } else {
      // Rate: 1 foreign = rate local  
      // Convert foreign to local: amount * rate
      return amount * fromCurrency.rate;
    }
  },

  /**
   * Convert amount from local currency to foreign currency
   */
  convertFromLocal(amount, toCurrency, localCurrency) {
    if (!toCurrency || !localCurrency || toCurrency.isLocalCCY) {
      return amount; // Already in local currency
    }

    if (toCurrency.exchangeDirection === 'local_to_foreign') {
      // Rate: 1 local = rate foreign
      // Convert local to foreign: amount * rate
      return amount * toCurrency.rate;
    } else {
      // Rate: 1 foreign = rate local
      // Convert local to foreign: amount / rate  
      return amount / toCurrency.rate;
    }
  },

  /**
   * Get exchange rate display text
   */
  getRateDisplayText(currency, localCurrency) {
    if (!currency || !localCurrency || currency.isLocalCCY) {
      return '';
    }

    if (currency.exchangeDirection === 'local_to_foreign') {
      return `1 ${localCurrency.code} = ${currency.rate} ${currency.code}`;
    } else {
      return `1 ${currency.code} = ${currency.rate} ${localCurrency.code}`;
    }
  },

  /**
   * Calculate cart total with currency breakdown
   */
  calculateCartTotal(cartItems, currencies) {
    const localCurrency = currencies.find(c => c.isLocalCCY);
    if (!localCurrency) {
      throw new Error('No local currency found');
    }

    let totalInLocal = 0;
    const breakdown = {};

    cartItems.forEach(item => {
      const currency = currencies.find(c => c.id === item.saleCurrencyId);
      const unitPrice = item.pro_price || item.priceList?.amount || 0;
      const subtotalInOriginalCurrency = item.qty * unitPrice;

      if (currency) {
        const subtotalInLocal = this.convertToLocal(
          subtotalInOriginalCurrency, 
          currency, 
          localCurrency
        );
        totalInLocal += subtotalInLocal;

        if (!breakdown[currency.id]) {
          breakdown[currency.id] = {
            currency: currency,
            originalAmount: 0,
            localAmount: 0,
            items: []
          };
        }

        breakdown[currency.id].originalAmount += subtotalInOriginalCurrency;
        breakdown[currency.id].localAmount += subtotalInLocal;
      }
    });

    return { totalInLocal, breakdown: Object.values(breakdown) };
  }
};

export default CurrencyHelper;