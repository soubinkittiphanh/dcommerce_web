/**
 * Data Management Composable
 * Handles API calls, data loading, and store management
 */

import { ref } from 'vue'
import { useStore } from 'vuex'
import { getFormatNum } from '~/common'
import { swalError2 } from '~/common/index'

export function useDataManagement() {
  const store = useStore()

  // State
  const isLoading = ref(false)
  const categoryList = ref([])
  const paymentList = ref([])
  const currencyList = ref([])

  // Methods
  const formatCurrency = (val) => {
    return getFormatNum(val)
  }

  const loadCategories = async (axios, swal) => {
    isLoading.value = true
    
    try {
      const response = await axios.get('api/category/find')
      
      categoryList.value = response.data.map((el) => ({
        categ_id: el.categ_id,
        categ_name: el.categ_name,
        categ_desc: el.categ_desc,
      }))
      
      // Add "All" category
      categoryList.value.push({
        categ_id: '9999',
        categ_name: 'ທັງໝົດ',
        categ_desc: 'ລາຍການສິນຄ້າ ທັງໝົດ',
      })
      
      return categoryList.value
    } catch (error) {
      console.error('Error loading categories:', error.response?.data || error)
      if (swal) {
        swalError2(swal, 'Error', 'Failed to load categories')
      }
      return []
    } finally {
      isLoading.value = false
    }
  }

  const loadPaymentMethods = async (axios, swal) => {
    isLoading.value = true
    paymentList.value = []
    
    try {
      const response = await axios.get('/api/paymentMethod/find')
      
      for (const iterator of response.data) {
        paymentList.value.push(iterator)
      }
      
      // Set default payment method
      if (paymentList.value.length > 0) {
        store.dispatch('addSelectedPayment', paymentList.value[0].id)
      }
      
      return paymentList.value
    } catch (error) {
      console.error('Error loading payment methods:', error)
      if (swal) {
        swalError2(swal, 'Error', 'Failed to load payment methods')
      }
      return []
    } finally {
      isLoading.value = false
    }
  }

  const loadCurrencies = async (axios, swal) => {
    isLoading.value = true
    currencyList.value = []
    
    try {
      const response = await axios.get('/api/currency/find')
      
      for (const iterator of response.data) {
        currencyList.value.push(iterator)
      }
      
      return currencyList.value
    } catch (error) {
      console.error('Error loading currencies:', error)
      if (swal) {
        swalError2(swal, 'Error', 'Failed to load currencies')
      }
      return []
    } finally {
      isLoading.value = false
    }
  }

  const loadCustomers = async (axios, swal) => {
    isLoading.value = true
    
    try {
      const response = await axios.get('api/client/find')
      
      // Set default customer
      if (response.data.length > 0) {
        store.dispatch('addCustomer', response.data[0])
      }
      
      return response.data
    } catch (error) {
      console.error('Error loading customers:', error.response?.data || error)
      if (swal) {
        swalError2(swal, 'Error', error.response?.data || 'Failed to load customers')
      }
      return []
    } finally {
      isLoading.value = false
    }
  }

  const loadProductPriceList = async (axios, swal) => {
    console.info(`fetch priceList initialize`)
    
    try {
      const response = await axios.get('api/product/find')
      console.info(`fetch priceList initialize response ${JSON.stringify(response.data)}`)
      
      await store.dispatch('initProductPrices', response.data.data.products)
      return response.data.data.products
    } catch (error) {
      console.error(`PriceList initialization failed: ${error.message || error}`)
      
      if (swal) {
        await store.dispatch('addError', `PriceList initialization failed: ${error.message || error}`)
        swalError2(swal, 'Error', 'Failed to load product price list')
      }
      
      throw error
    }
  }

  const initializeAllData = async (axios, swal) => {
    try {
      isLoading.value = true
      
      // Initialize main data from store
      await store.dispatch('initiateData', axios)
      
      // Load additional data
      await Promise.all([
        loadCategories(axios, swal),
        loadPaymentMethods(axios, swal),
        loadCurrencies(axios, swal),
        loadCustomers(axios, swal),
        loadProductPriceList(axios, swal),
      ])
      
      console.log('All data initialized successfully')
      return true
    } catch (error) {
      console.error('Error initializing data:', error)
      if (swal) {
        swalError2(swal, 'Error', 'Failed to initialize application data')
      }
      return false
    } finally {
      isLoading.value = false
    }
  }

  const refreshProductData = async (axios, swal) => {
    try {
      await loadProductPriceList(axios, swal)
      await store.dispatch('initiateData', axios)
      console.log('Product data refreshed')
      return true
    } catch (error) {
      console.error('Error refreshing product data:', error)
      return false
    }
  }

  const refreshStoreData = async (axios) => {
    try {
      await store.dispatch('initiateData', axios)
      console.log('Store data refreshed')
      return true
    } catch (error) {
      console.error('Error refreshing store data:', error)
      return false
    }
  }

  // Validation methods
  const validateDataIntegrity = () => {
    const issues = []
    
    if (categoryList.value.length === 0) {
      issues.push('No categories loaded')
    }
    
    if (paymentList.value.length === 0) {
      issues.push('No payment methods loaded')
    }
    
    if (currencyList.value.length === 0) {
      issues.push('No currencies loaded')
    }
    
    const terminals = store.getters.findAllTerminal || []
    if (terminals.length === 0) {
      issues.push('No terminals loaded')
    }
    
    const products = store.getters.findAllProduct || []
    if (products.length === 0) {
      issues.push('No products loaded')
    }
    
    return {
      isValid: issues.length === 0,
      issues: issues
    }
  }

  const getDataLoadingStatus = () => {
    return {
      isLoading: isLoading.value,
      categoriesLoaded: categoryList.value.length > 0,
      paymentsLoaded: paymentList.value.length > 0,
      currenciesLoaded: currencyList.value.length > 0,
      storeDataLoaded: (store.getters.findAllTerminal || []).length > 0,
    }
  }

  // Error handling
  const handleApiError = (error, context = 'API call') => {
    console.error(`${context} failed:`, error)
    
    let errorMessage = 'Unknown error occurred'
    
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
    
    return {
      success: false,
      error: errorMessage,
      originalError: error
    }
  }

  // Retry mechanism
  const retryApiCall = async (apiCall, maxRetries = 3, delay = 1000) => {
    let lastError = null
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await apiCall()
      } catch (error) {
        lastError = error
        
        if (attempt === maxRetries) {
          break
        }
        
        console.warn(`API call attempt ${attempt} failed, retrying in ${delay}ms...`)
        await new Promise(resolve => setTimeout(resolve, delay))
        delay *= 2 // Exponential backoff
      }
    }
    
    throw lastError
  }

  // Cache management
  const clearDataCache = () => {
    categoryList.value = []
    paymentList.value = []
    currencyList.value = []
  }

  return {
    // State
    isLoading,
    categoryList,
    paymentList,
    currencyList,
    
    // Data loading methods
    loadCategories,
    loadPaymentMethods,
    loadCurrencies,
    loadCustomers,
    loadProductPriceList,
    initializeAllData,
    refreshProductData,
    refreshStoreData,
    
    // Utility methods
    formatCurrency,
    validateDataIntegrity,
    getDataLoadingStatus,
    handleApiError,
    retryApiCall,
    clearDataCache,
  }
}