// utils/pl-calculations.js
/**
 * Profit & Loss Calculation Utilities
 * Handles multi-currency conversion and P&L business logic
 */

/**
 * Convert amount to LAK using exchange rate
 * Formula: amount_lak = amount * exchangeRate
 * @param {number} amount - Original amount
 * @param {number} exchangeRate - Exchange rate to LAK
 * @param {object} currency - Currency object with code/name
 * @returns {number} - Amount in LAK
 */
export function convertToLAK(amount, exchangeRate, currency) {
  // Handle null/undefined values safely
  if (!amount || amount === 0) return 0
  
  // If currency is LAK, no conversion needed
  const currencyCode = currency?.code || currency?.name || 'LAK'
  if (currencyCode === 'LAK') {
    return parseFloat(amount) || 0
  }
  
  // Use provided exchange rate, fallback to 1 if missing
  const rate = parseFloat(exchangeRate) || 1
  const convertedAmount = parseFloat(amount) * rate
  
  return convertedAmount || 0
}

/**
 * Calculate total revenue in LAK from receive records
 * @param {Array} receiveRecords - Array of receive records
 * @returns {number} - Total revenue in LAK
 */
export function calculateTotalRevenueLAK(receiveRecords) {
  if (!Array.isArray(receiveRecords)) return 0
  
  return receiveRecords.reduce((total, record) => {
    const lakAmount = convertToLAK(
      record.totalReceivedAmount, 
      record.exchangeRate, 
      record.currency
    )
    return total + lakAmount
  }, 0)
}

/**
 * Calculate total expenses in LAK from expense records
 * @param {Array} expenseRecords - Array of expense records
 * @returns {number} - Total expenses in LAK
 */
export function calculateTotalExpenseLAK(expenseRecords) {
  if (!Array.isArray(expenseRecords)) return 0
  
  return expenseRecords.reduce((total, record) => {
    const lakAmount = convertToLAK(
      record.paymentAmount, 
      record.exchangeRate, 
      record.currency
    )
    return total + lakAmount
  }, 0)
}

/**
 * Calculate net profit/loss
 * @param {number} totalRevenue - Total revenue in LAK
 * @param {number} totalExpense - Total expense in LAK
 * @returns {number} - Net profit (positive) or loss (negative)
 */
export function calculateNetProfitLoss(totalRevenue, totalExpense) {
  return (totalRevenue || 0) - (totalExpense || 0)
}

/**
 * Calculate profit margin percentage
 * @param {number} netProfit - Net profit/loss amount
 * @param {number} totalRevenue - Total revenue
 * @returns {number} - Profit margin percentage
 */
export function calculateProfitMargin(netProfit, totalRevenue) {
  if (!totalRevenue || totalRevenue === 0) return 0
  return (netProfit / totalRevenue) * 100
}

/**
 * Filter records by date range
 * @param {Array} records - Array of records
 * @param {string} dateField - Field name containing the date
 * @param {string} fromDate - Start date (YYYY-MM-DD)
 * @param {string} toDate - End date (YYYY-MM-DD)
 * @returns {Array} - Filtered records
 */
export function filterRecordsByDateRange(records, dateField, fromDate, toDate) {
  if (!Array.isArray(records) || !fromDate || !toDate) return records || []
  
  const startDate = new Date(fromDate)
  const endDate = new Date(toDate)
  
  return records.filter(record => {
    const recordDate = new Date(record[dateField])
    return recordDate >= startDate && recordDate <= endDate
  })
}

/**
 * Get unique currencies from records
 * @param {Array} receiveRecords - Receive records
 * @param {Array} expenseRecords - Expense records
 * @returns {Array} - Array of unique currency codes
 */
export function getUniqueCurrencies(receiveRecords = [], expenseRecords = []) {
  const currencies = new Set()
  
  receiveRecords.forEach(record => {
    const code = record.currency?.code || 'LAK'
    currencies.add(code)
  })
  
  expenseRecords.forEach(record => {
    const code = record.currency?.code || 'LAK'
    currencies.add(code)
  })
  
  return Array.from(currencies)
}

/**
 * Validate exchange rate
 * @param {number} rate - Exchange rate value
 * @returns {boolean} - True if valid
 */
export function isValidExchangeRate(rate) {
  const numericRate = parseFloat(rate)
  return !isNaN(numericRate) && numericRate > 0
}

/**
 * Format currency for display
 * @param {number} amount - Amount to format
 * @param {number} decimals - Number of decimal places
 * @returns {string} - Formatted currency string
 */
export function formatCurrency(amount, decimals = 2) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount || 0)
}

/**
 * Create P&L summary object
 * @param {Array} receiveRecords - Receive records
 * @param {Array} expenseRecords - Expense records
 * @returns {object} - P&L summary
 */
export function createPLSummary(receiveRecords, expenseRecords) {
  const totalRevenue = calculateTotalRevenueLAK(receiveRecords)
  const totalExpense = calculateTotalExpenseLAK(expenseRecords)
  const netProfitLoss = calculateNetProfitLoss(totalRevenue, totalExpense)
  const profitMargin = calculateProfitMargin(netProfitLoss, totalRevenue)
  
  return {
    totalRevenue,
    totalExpense,
    netProfitLoss,
    profitMargin,
    isProfitable: netProfitLoss >= 0,
    revenueCount: receiveRecords.length,
    expenseCount: expenseRecords.length,
    currencies: getUniqueCurrencies(receiveRecords, expenseRecords)
  }
}

/**
 * Default date range utilities
 */
export const dateRangeUtils = {
  getCurrentMonth() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    
    return {
      fromDate: new Date(year, month, 1).toISOString().split('T')[0],
      toDate: new Date(year, month + 1, 0).toISOString().split('T')[0]
    }
  },
  
  getCurrentYear() {
    const year = new Date().getFullYear()
    return {
      fromDate: `${year}-01-01`,
      toDate: `${year}-12-31`
    }
  },
  
  getLastMonth() {
    const now = new Date()
    const year = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear()
    const month = now.getMonth() === 0 ? 11 : now.getMonth() - 1
    
    return {
      fromDate: new Date(year, month, 1).toISOString().split('T')[0],
      toDate: new Date(year, month + 1, 0).toISOString().split('T')[0]
    }
  },
  
  getQuarter(quarterNumber, year) {
    const quarters = {
      1: { start: '01-01', end: '03-31' },
      2: { start: '04-01', end: '06-30' },
      3: { start: '07-01', end: '09-30' },
      4: { start: '10-01', end: '12-31' }
    }
    
    const quarter = quarters[quarterNumber]
    if (!quarter) throw new Error('Invalid quarter number')
    
    return {
      fromDate: `${year}-${quarter.start}`,
      toDate: `${year}-${quarter.end}`
    }
  }
}

/**
 * Data validation utilities
 */
export const validationUtils = {
  validateDateRange(fromDate, toDate) {
    if (!fromDate || !toDate) {
      return { isValid: false, error: 'ຈຳເປັນຕ້ອງມີວັນທີເລີ່ມຕົ້ນ ແລະ ວັນທີສິ້ນສຸດ' }
    }
    
    const start = new Date(fromDate)
    const end = new Date(toDate)
    
    if (start > end) {
      return { isValid: false, error: 'ວັນທີເລີ່ມຕົ້ນຕ້ອງນ້ອຍກວ່າວັນທີສິ້ນສຸດ' }
    }
    
    return { isValid: true, error: null }
  },
  
  validateRecords(records, type) {
    if (!Array.isArray(records)) {
      return { isValid: false, error: `Invalid ${type} records format` }
    }
    
    const requiredFields = type === 'receive' 
      ? ['totalReceivedAmount', 'receivedDate'] 
      : ['paymentAmount', 'settlementDate']
    
    const invalidRecords = records.filter(record => 
      requiredFields.some(field => !record[field])
    )
    
    if (invalidRecords.length > 0) {
      return { 
        isValid: false, 
        error: `${invalidRecords.length} ${type} records missing required fields` 
      }
    }
    
    return { isValid: true, error: null }
  }
}