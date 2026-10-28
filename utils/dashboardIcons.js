/**
 * Dashboard Shortcut Icons Registry & Resolver
 */

export const SYSTEM_SVG_ICONS = [
  { key: 'cashier_2.svg', name: 'POS Cashier 2', icon: require('~/assets/icons/cashier_2.svg') },
  { key: 'cashier.svg', name: 'POS Cashier', icon: require('~/assets/icons/cashier.svg') },
  { key: 'cash.svg', name: 'Cash', icon: require('~/assets/icons/cash.svg') },
  { key: 'invoice.svg', name: 'Invoice / Bill', icon: require('~/assets/icons/invoice.svg') },
  { key: 'pay-card.svg', name: 'Payment Card', icon: require('~/assets/icons/pay-card.svg') },
  { key: 'credit-card.svg', name: 'Credit Card', icon: require('~/assets/icons/credit-card.svg') },
  { key: 'stock.svg', name: 'Inventory / Stock', icon: require('~/assets/icons/stock.svg') },
  { key: 'coffee.svg', name: 'Restaurant / Coffee', icon: require('~/assets/icons/coffee.svg') },
  { key: 'patient.svg', name: 'Customer / Client', icon: require('~/assets/icons/patient.svg') },
  { key: 'overview.svg', name: 'Overview / Report', icon: require('~/assets/icons/overview.svg') },
  { key: 'delivery-bike.svg', name: 'Delivery Bike', icon: require('~/assets/icons/delivery-bike.svg') },
  { key: 'barcode-scanner.svg', name: 'Barcode Scanner', icon: require('~/assets/icons/barcode-scanner.svg') },
  { key: 'account-clock.svg', name: 'Account / Clock', icon: require('~/assets/icons/account-clock.svg') },
  { key: 'pos-terminal_2.svg', name: 'POS Terminal', icon: require('~/assets/icons/pos-terminal_2.svg') },
  { key: 'responsive.svg', name: 'Devices', icon: require('~/assets/icons/responsive.svg') },
];

export const COMMON_MDI_ICONS = [
  'mdi-cart',
  'mdi-cash-register',
  'mdi-receipt',
  'mdi-receipt-text-outline',
  'mdi-warehouse',
  'mdi-package-variant-closed',
  'mdi-account-group',
  'mdi-account-multiple',
  'mdi-chart-line',
  'mdi-chart-bar',
  'mdi-chart-pie',
  'mdi-coffee',
  'mdi-silverware-fork-knife',
  'mdi-pill',
  'mdi-bank',
  'mdi-wallet',
  'mdi-credit-card-outline',
  'mdi-truck-delivery',
  'mdi-barcode-scan',
  'mdi-school',
  'mdi-book-education',
  'mdi-file-document-edit-outline',
  'mdi-currency-usd',
  'mdi-calendar-check',
  'mdi-cog-outline',
  'mdi-shield-check',
  'mdi-tag-multiple',
  'mdi-star-outline',
];

/**
 * Resolves icon information for a given shortcut item
 * @param {Object} item Shortcut item with icon and iconType
 * @returns {Object} { isSvg: boolean, src: string|null, mdi: string|null }
 */
export function resolveDashboardIcon(item) {
  if (!item) return { isSvg: false, src: null, mdi: 'mdi-star' };

  const iconName = item.icon || '';
  const isSvg = item.iconType === 'svg' || iconName.endsWith('.svg') || (!iconName.startsWith('mdi-') && !iconName.startsWith('mdi '));

  if (isSvg) {
    const found = SYSTEM_SVG_ICONS.find(i => i.key === iconName || i.key === `${iconName}.svg`);
    if (found) {
      return { isSvg: true, src: found.icon, mdi: null };
    }
    // Fallback if SVG key exists in our library
    try {
      const cleanKey = iconName.replace(/^~\/assets\/icons\//, '').replace(/^\/assets\/icons\//, '');
      const dynamicMatch = SYSTEM_SVG_ICONS.find(i => i.key === cleanKey);
      if (dynamicMatch) {
        return { isSvg: true, src: dynamicMatch.icon, mdi: null };
      }
    } catch (e) {
      // ignore
    }
    // If not matched SVG, fallback to default cashier SVG
    return { isSvg: true, src: require('~/assets/icons/cashier_2.svg'), mdi: null };
  }

  // Material design icon
  const mdi = iconName.startsWith('mdi-') || iconName.startsWith('mdi ') ? iconName : `mdi-${iconName}`;
  return { isSvg: false, src: null, mdi };
}
