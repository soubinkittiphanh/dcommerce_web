// constants/pos.js
export const POS_CONSTANTS = {
  DEFAULT_CURRENCY_ID: 1,
  ALL_CATEGORIES_ID: '9999',
  DRAWER_WIDTH: {
    NAVIGATION: 280,
    CART: 480,
  },
  DIALOG_SIZES: {
    TERMINAL: 600,
    QUANTITY: 400,
    CUSTOMER: 1200,
    PRICING: 1200,
    DELIVERY: 1200,
  },
  PAYMENT_METHODS: {
    CASH: 'CASH',
    CARD: 'CARD',
    COD: 'COD',
  },
  SHIPPING_METHODS: {
    RIDER: 'RIDER',
    PICKUP: 'PICKUP',
  },
  TRANSACTION_TYPES: {
    SALE: 'SALE',
    QUOTATION: 'QUOTATION',
  },
}

export const VALIDATION_RULES = {
  quantity: [
    v => v > 0 || 'ຈຳນວນຕ້ອງມາກກວ່າ 0',
    v => Number.isInteger(v) || 'ຈຳນວນຕ້ອງເປັນຕົວເລກເຕັມ',
  ],
  price: [
    v => !!/^\d+$/.test(v) || 'ກະລຸນສາໃສ່ຈຳນວນ ເປັນຕົວເລກ ເທົ່ານັ້ນ',
  ],
  required: [
    v => !!v || 'ຂໍ້ມູນນີ້ບໍ່ສາມາດຫວ່າງເປົ່າໄດ້',
  ],
}

export const API_ENDPOINTS = {
  CATEGORIES: 'category_f',
  PAYMENT_METHODS: '/api/paymentMethod/find',
  CURRENCIES: '/api/currency/find',
  CUSTOMERS: 'api/client/find',
  SALE_CREATE: '/api/sale/create',
  QUOTATION_CREATE: '/api/quotation/create',
}

export const ROUTES = {
  HOME: '/admin',
  ORDERS: '/admin/ordersFromPos',
  LOGOUT: '/admin/logout',
  PDF_QUOTATION: '/admin/PDFQuotation',
  PDF_INVOICE: '/admin/PDFInvoice',
  PDF_TICKET: '/admin/PDFTicket',
}

export const UI_CONFIG = {
  BREAKPOINTS: {
    MOBILE: 600,
    TABLET: 960,
    DESKTOP: 1264,
  },
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 500,
}

export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
}