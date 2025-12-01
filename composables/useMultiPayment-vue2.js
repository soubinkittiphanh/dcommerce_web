// composables/useMultiPayment.js - Vue 2 Compatible Version

export function createMultiPayment(axios, formatNumber) {
  // State object (Vue 2 compatible)
  const state = {
    payments: [],
    isProcessing: false,
    currentSaleHeaderId: null,
    saleTotal: 0,
    paymentMethods: [],
    validationErrors: [],
    lastTransactionId: null
  }

  // Helper functions
  const getTotalPaid = () => {
    return state.payments.reduce((sum, payment) => sum + (payment.amount || 0), 0)
  }

  const getRemainingAmount = () => {
    return state.saleTotal - getTotalPaid()
  }

  const isPaymentComplete = () => {
    return getRemainingAmount() === 0 && state.payments.length > 0
  }

  const isOverpaid = () => {
    return getRemainingAmount() < 0
  }

  const isUnderpaid = () => {
    return getRemainingAmount() > 0 && state.payments.length > 0
  }

  const getPaymentSummary = () => {
    const totalPaid = getTotalPaid()
    const remaining = getRemainingAmount()
    
    const summary = {
      total: state.saleTotal,
      paid: totalPaid,
      remaining: remaining,
      status: 'pending',
      percentage: state.saleTotal > 0 ? (totalPaid / state.saleTotal) * 100 : 0
    }

    if (isPaymentComplete()) summary.status = 'complete'
    else if (isOverpaid()) summary.status = 'overpaid'
    else if (isUnderpaid()) summary.status = 'partial'

    return summary
  }

  // Validation
  const validatePayments = () => {
    const errors = []
    const remaining = getRemainingAmount()

    if (state.payments.length === 0) {
      errors.push('ຕ້ອງມີການຈ່າຍເງິນຢ່າງໜ້ອຍ 1 ວິທີ')
    }

    if (isOverpaid()) {
      errors.push(`ຈ່າຍເງິນເກີນ ${formatNumber(Math.abs(remaining))}`)
    }

    if (isUnderpaid()) {
      errors.push(`ຍັງຄ້າງຈ່າຍ ${formatNumber(remaining)}`)
    }

    // Validate individual payments
    state.payments.forEach((payment, index) => {
      if (!payment.paymentId) {
        errors.push(`ການຈ່າຍເງິນລຳດັບ ${index + 1}: ຕ້ອງເລືອກວິທີຈ່າຍເງິນ`)
      }

      if (!payment.amount || payment.amount <= 0) {
        errors.push(`ການຈ່າຍເງິນລຳດັບ ${index + 1}: ຈຳນວນເງິນຕ້ອງມາກກວ່າ 0`)
      }

      // Check if payment method requires reference number
      const method = state.paymentMethods.find(p => p.id === payment.paymentId)
      if (method && requiresReference(method) && !payment.referenceNo) {
        errors.push(`${method.payment_name}: ຕ້ອງໃສ່ເລກອ້າງອີງ`)
      }
    })

    state.validationErrors = errors
    return errors.length === 0
  }

  const requiresReference = (paymentMethod) => {
    const codesRequiringRef = ['BCEL', 'QR', 'CARD', 'TRANSFER']
    return codesRequiringRef.includes(paymentMethod.payment_code?.toUpperCase())
  }

  // Payment management
  const addPayment = (payment) => {
    const newPayment = {
      paymentId: payment.paymentId,
      amount: Number(payment.amount),
      referenceNo: payment.referenceNo || null,
      id: Date.now() + Math.random() // Temporary ID for UI
    }

    state.payments.push(newPayment)
    return newPayment
  }

  const removePayment = (index) => {
    if (index >= 0 && index < state.payments.length) {
      state.payments.splice(index, 1)
    }
  }

  const updatePayment = (index, updates) => {
    if (index >= 0 && index < state.payments.length) {
      Object.assign(state.payments[index], updates)
    }
  }

  const clearPayments = () => {
    state.payments = []
    state.validationErrors = []
    state.currentSaleHeaderId = null
    state.saleTotal = 0
    state.lastTransactionId = null
  }

  // API methods
  const submitPayments = async (saleHeaderId) => {
    if (state.isProcessing) {
      throw new Error('ກຳລັງປະມວນຜົນ...')
    }

    if (!validatePayments()) {
      throw new Error(state.validationErrors.join(', '))
    }

    state.isProcessing = true

    try {
      // Prepare payload for bulk payment creation
      const paymentData = state.payments.map(payment => ({
        saleHeaderId: saleHeaderId,
        paymentId: payment.paymentId,
        amount: payment.amount,
        referenceNo: payment.referenceNo
      }))

      console.log('Submitting payments:', paymentData)

      const response = await axios.post('/api/sale-payment/bulk', paymentData)
      
      state.lastTransactionId = saleHeaderId
      
      return {
        success: true,
        data: response.data,
        message: 'ການຈ່າຍເງິນສຳເລັດແລ້ວ',
        transactionId: saleHeaderId
      }

    } catch (error) {
      console.error('Payment submission error:', error)
      
      let errorMessage = 'ເກີດຂໍ້ຜິດພາດໃນການຈ່າຍເງິນ'
      
      if (error.response?.data) {
        if (typeof error.response.data === 'string') {
          errorMessage = error.response.data
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error
        }
      } else if (error.message) {
        errorMessage = error.message
      }

      throw new Error(errorMessage)
    } finally {
      state.isProcessing = false
    }
  }

  const fetchPaymentMethods = async () => {
    try {
      const response = await axios.get('/api/paymentMethod/find')
      state.paymentMethods = response.data.filter(method => method.is_active !== false)
      return state.paymentMethods
    } catch (error) {
      console.error('Failed to fetch payment methods:', error)
      throw new Error('ບໍ່ສາມາດໂຫຼດວິທີຈ່າຍເງິນໄດ້')
    }
  }

  const fetchSalePayments = async (saleHeaderId) => {
    try {
      const response = await axios.get(`/api/sale-payment/${saleHeaderId}`)
      return response.data
    } catch (error) {
      console.error('Failed to fetch sale payments:', error)
      throw new Error('ບໍ່ສາມາດໂຫຼດຂໍ້ມູນການຈ່າຍເງິນໄດ້')
    }
  }

  // Initialize payment session
  const initializePayment = async (saleTotal, saleHeaderId = null) => {
    state.saleTotal = Number(saleTotal)
    state.currentSaleHeaderId = saleHeaderId
    state.payments = []
    state.validationErrors = []

    // Load payment methods if not already loaded
    if (state.paymentMethods.length === 0) {
      await fetchPaymentMethods()
    }

    return {
      saleTotal: state.saleTotal,
      paymentMethods: state.paymentMethods
    }
  }

  // Utility functions
  const getPaymentMethodName = (paymentId) => {
    const method = state.paymentMethods.find(p => p.id === paymentId)
    return method ? method.payment_name : 'Unknown'
  }

  const getPaymentMethodCode = (paymentId) => {
    const method = state.paymentMethods.find(p => p.id === paymentId)
    return method ? method.payment_code : 'UNKNOWN'
  }

  const getPaymentIcon = (paymentId) => {
    const code = getPaymentMethodCode(paymentId).toLowerCase()
    const iconMap = {
      'cash': 'mdi-cash',
      'card': 'mdi-credit-card',
      'bcel': 'mdi-cellphone',
      'qr': 'mdi-qrcode',
      'transfer': 'mdi-bank-transfer'
    }
    return iconMap[code] || 'mdi-credit-card'
  }

  const getQuickAmounts = (remaining) => {
    const amounts = []
    
    if (remaining >= 500000) amounts.push(100000, 200000, 500000)
    else if (remaining >= 100000) amounts.push(50000, 100000)
    else if (remaining >= 50000) amounts.push(20000, 50000)
    else if (remaining >= 20000) amounts.push(10000, 20000)
    else if (remaining >= 10000) amounts.push(5000, 10000)
    else amounts.push(1000, 5000)
    
    return [...new Set(amounts)].filter(a => a <= remaining).sort((a, b) => a - b)
  }

  // Export the object with all functions and state
  return {
    // State
    state,
    
    // Computed-like functions
    getTotalPaid,
    getRemainingAmount,
    isPaymentComplete,
    isOverpaid,
    isUnderpaid,
    getPaymentSummary,
    
    // Actions
    addPayment,
    removePayment,
    updatePayment,
    clearPayments,
    validatePayments,
    submitPayments,
    initializePayment,
    fetchPaymentMethods,
    fetchSalePayments,
    
    // Utilities
    getPaymentMethodName,
    getPaymentMethodCode,
    getPaymentIcon,
    getQuickAmounts,
    requiresReference
  }
}

// For backward compatibility, export as useMultiPayment
export const useMultiPayment = createMultiPayment

// Additional utility functions that can be used independently
export const paymentUtils = {
  formatCurrency: (amount, currency = 'LAK') => {
    return new Intl.NumberFormat('lo-LA', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0
    }).format(amount)
  },

  calculateChange: (paid, total) => {
    return Math.max(0, paid - total)
  },

  validateAmount: (amount, max = Infinity, min = 0) => {
    const num = Number(amount)
    if (isNaN(num)) return { valid: false, message: 'ຈຳນວນເງິນບໍ່ຖືກຕ້ອງ' }
    if (num < min) return { valid: false, message: `ຈຳນວນເງິນຕ້ອງຢ່າງໜ້ອຍ ${min}` }
    if (num > max) return { valid: false, message: `ຈຳນວນເງິນເກີນຈາກ ${max}` }
    return { valid: true }
  },

  generatePaymentReference: () => {
    return 'PAY-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4).toUpperCase()
  }
}

export default createMultiPayment