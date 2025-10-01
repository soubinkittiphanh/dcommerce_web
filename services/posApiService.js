// services/posApiService.js
import { API_ENDPOINTS } from '~/constants/pos'

export class POSApiService {
  constructor(axios) {
    this.axios = axios
    this.setupInterceptors()
  }

  setupInterceptors() {
    // Request interceptor
    this.axios.interceptors.request.use(
      (config) => {
        // Add any common headers or tokens here
        console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`)
        return config
      },
      (error) => {
        console.error('Request interceptor error:', error)
        return Promise.reject(error)
      }
    )

    // Response interceptor
    this.axios.interceptors.response.use(
      (response) => {
        console.log(`API Response: ${response.status} ${response.config.url}`)
        return response
      },
      (error) => {
        console.error('API Error:', error.response?.status, error.response?.data)
        return Promise.reject(error)
      }
    )
  }

  async getCategories() {
    try {
      const response = await this.axios.get(API_ENDPOINTS.CATEGORIES)
      return {
        success: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
        details: error,
      }
    }
  }

  async getPaymentMethods() {
    try {
      const response = await this.axios.get(API_ENDPOINTS.PAYMENT_METHODS)
      return {
        success: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
        details: error,
      }
    }
  }

  async getCurrencies() {
    try {
      const response = await this.axios.get(API_ENDPOINTS.CURRENCIES)
      return {
        success: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
        details: error,
      }
    }
  }

  async getCustomers() {
    try {
      const response = await this.axios.get(API_ENDPOINTS.CUSTOMERS)
      return {
        success: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
        details: error,
      }
    }
  }

  async createSale(saleData) {
    try {
      // Validate sale data before sending
      const validationError = this.validateSaleData(saleData)
      if (validationError) {
        return {
          success: false,
          error: validationError,
        }
      }

      const response = await this.axios.post(API_ENDPOINTS.SALE_CREATE, saleData)
      return {
        success: true,
        data: response.data,
        transactionId: response.data.split('-')[1]?.trim(),
        message: response.data.split('-')[0]?.trim(),
      }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
        details: error,
      }
    }
  }

  async createQuotation(quotationData) {
    try {
      // Validate quotation data before sending
      const validationError = this.validateQuotationData(quotationData)
      if (validationError) {
        return {
          success: false,
          error: validationError,
        }
      }

      const response = await this.axios.post(API_ENDPOINTS.QUOTATION_CREATE, quotationData)
      return {
        success: true,
        data: response.data,
        quotationId: response.data.split('-')[1]?.trim(),
        message: response.data.split('-')[0]?.trim(),
      }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data || error.message,
        details: error,
      }
    }
  }

  validateSaleData(saleData) {
    if (!saleData) return 'Sale data is required'
    if (!saleData.clientId) return 'Customer is required'
    if (!saleData.paymentId) return 'Payment method is required'
    if (!saleData.lines || !Array.isArray(saleData.lines) || saleData.lines.length === 0) {
      return 'At least one product is required'
    }
    if (!saleData.userId) return 'User ID is required'
    if (!saleData.locationId) return 'Location ID is required'

    // Validate each line item
    for (let i = 0; i < saleData.lines.length; i++) {
      const line = saleData.lines[i]
      if (!line.productId) return `Product ID is required for item ${i + 1}`
      if (!line.quantity || line.quantity <= 0) return `Valid quantity is required for item ${i + 1}`
      if (line.price == null || line.price < 0) return `Valid price is required for item ${i + 1}`
    }

    return null
  }

  validateQuotationData(quotationData) {
    if (!quotationData) return 'Quotation data is required'
    if (!quotationData.clientId) return 'Customer is required'
    if (!quotationData.lines || !Array.isArray(quotationData.lines) || quotationData.lines.length === 0) {
      return 'At least one product is required'
    }
    if (!quotationData.userId) return 'User ID is required'

    // Validate each line item
    for (let i = 0; i < quotationData.lines.length; i++) {
      const line = quotationData.lines[i]
      if (!line.productId) return `Product ID is required for item ${i + 1}`
      if (!line.quantity || line.quantity <= 0) return `Valid quantity is required for item ${i + 1}`
      if (line.price == null || line.price < 0) return `Valid price is required for item ${i + 1}`
    }

    return null
  }

  // Utility method to handle network retries
  async retryRequest(requestFn, maxRetries = 3) {
    let lastError
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await requestFn()
      } catch (error) {
        lastError = error
        if (i === maxRetries - 1) break
        
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000))
      }
    }
    
    throw lastError
  }
}

// Factory function to create service instance
export function createPOSApiService(axios) {
  return new POSApiService(axios)
}

// Simple API functions (alternative to class-based approach)
export const posApi = {
  async getCategories(axios) {
    try {
      const { data } = await axios.get(API_ENDPOINTS.CATEGORIES)
      return { success: true, data }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data || error.message 
      }
    }
  },

  async getPaymentMethods(axios) {
    try {
      const { data } = await axios.get(API_ENDPOINTS.PAYMENT_METHODS)
      return { success: true, data }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data || error.message 
      }
    }
  },

  async getCurrencies(axios) {
    try {
      const { data } = await axios.get(API_ENDPOINTS.CURRENCIES)
      return { success: true, data }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data || error.message 
      }
    }
  },

  async getCustomers(axios) {
    try {
      const { data } = await axios.get(API_ENDPOINTS.CUSTOMERS)
      return { success: true, data }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data || error.message 
      }
    }
  },

  async createSale(axios, saleData) {
    try {
      const { data } = await axios.post(API_ENDPOINTS.SALE_CREATE, saleData)
      return {
        success: true,
        data,
        transactionId: data.split('-')[1]?.trim(),
        message: data.split('-')[0]?.trim(),
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data || error.message 
      }
    }
  },

  async createQuotation(axios, quotationData) {
    try {
      const { data } = await axios.post(API_ENDPOINTS.QUOTATION_CREATE, quotationData)
      return {
        success: true,
        data,
        quotationId: data.split('-')[1]?.trim(),
        message: data.split('-')[0]?.trim(),
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data || error.message 
      }
    }
  },
}