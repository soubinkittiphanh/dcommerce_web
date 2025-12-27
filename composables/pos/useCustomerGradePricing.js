/**
 * Customer Grade Pricing Composable
 * Handles customer-specific pricing based on grade levels
 */

import { computed } from 'vue'
import { useStore } from 'vuex'

export function useCustomerGradePricing() {
  const store = useStore()

  // Computed properties
  const productPriceList = computed(() => {
    return store.state.productPriceList || []
  })

  const effectiveCustomer = computed(() => {
    return store.getters.currentSelectedCustomer
  })

  // Methods
  const getCustomerGradePrice = (product) => {
    console.group('🏷️ [GRADE PRICING] Getting customer grade price')
    
    // Log input parameters
    console.info('📦 [INPUT] Product:', {
      id: product?.id,
      name: product?.pro_name || product?.name,
      originalPrice: product?.localPrice || product?.pro_price
    })
    
    console.info('👤 [CUSTOMER] Effective customer:', {
      customer: effectiveCustomer.value,
      hasGrade: !!effectiveCustomer.value?.grade,
      grade: effectiveCustomer.value?.grade,
      customerName: effectiveCustomer.value?.name || effectiveCustomer.value?.company
    })
    
    // Check for effective customer and grade
    if (!effectiveCustomer.value?.grade) {
      console.warn('⚠️ [VALIDATION] No effective customer or customer grade found')
      console.groupEnd()
      return null
    }
    
    // Get product price list from Vuex store
    if (!Array.isArray(productPriceList.value)) {
      console.warn('⚠️ [STORE] productPriceList in store is not an array:', typeof productPriceList.value)
      console.groupEnd()
      return null
    }
    
    console.info(`📊 [STORE] ProductPriceList from store length: ${productPriceList.value.length}`)
    
    // Find the product in the store's price list
    const productWithPricing = productPriceList.value.find(p => p.id === product.id)
    
    if (!productWithPricing) {
      console.info(`ℹ️ [SEARCH] Product ID ${product.id} not found in store productPriceList`)
      console.groupEnd()
      return null
    }
    
    console.info(`💰 [FOUND_PRODUCT] Product with pricing:`, {
      id: productWithPricing.id,
      name: productWithPricing.pro_name,
      hasPriceLists: !!productWithPricing.priceLists,
      priceListsCount: productWithPricing.priceLists?.length || 0
    })
    
    // Check if product has priceLists array
    if (!Array.isArray(productWithPricing.priceLists)) {
      console.info('ℹ️ [VALIDATION] Product has no priceLists array')
      console.groupEnd()
      return null
    }
    
    // Log available grade pricing options
    console.info('💰 [AVAILABLE_PRICES] Available price lists:', 
      productWithPricing.priceLists.map(priceList => ({
        id: priceList.id,
        name: priceList.name,
        grade: priceList.grade,
        amount: priceList.amount,
        type: priceList.type,
        isActive: priceList.isActive
      }))
    )
    
    // Filter active price lists only
    const activePriceLists = productWithPricing.priceLists.filter(pl => pl.isActive)
    console.info(`📋 [ACTIVE_PRICES] Active price lists count: ${activePriceLists.length}`)
    
    // Search for matching grade
    const customerGrade = effectiveCustomer.value.grade
    console.info('🔍 [SEARCH] Looking for grade:', customerGrade)
    
    const matchingPriceList = activePriceLists.find(priceList => {
      const matches = priceList.grade === customerGrade
      console.info(`🔍 [COMPARE] Grade "${priceList.grade}" === "${customerGrade}": ${matches}`)
      return matches
    })
    
    // Log result
    if (matchingPriceList) {
      console.info('✅ [SUCCESS] Found matching grade price:', {
        priceListId: matchingPriceList.id,
        name: matchingPriceList.name,
        grade: matchingPriceList.grade,
        amount: matchingPriceList.amount,
        type: matchingPriceList.type,
        originalPrice: product.localPrice || product.pro_price,
        discount: (product.localPrice || product.pro_price) - matchingPriceList.amount
      })
      
      console.groupEnd()
      return {
        price: matchingPriceList.amount,
        priceListId: matchingPriceList.id,
        gradeName: matchingPriceList.name,
        grade: matchingPriceList.grade
      }
    } else {
      console.warn('❌ [NOT_FOUND] No grade price found for customer grade:', {
        customerGrade: customerGrade,
        availableGrades: activePriceLists.map(pl => pl.grade)
      })
      
      console.groupEnd()
      return null
    }
  }

  const getProductPricingData = (product) => {
    if (!Array.isArray(productPriceList.value)) {
      console.warn('Store productPriceList is not available')
      return null
    }
    
    return productPriceList.value.find(p => p.id === product.id)
  }

  const hasAvailablePriceLists = (product) => {
    const productPricingData = getProductPricingData(product)
    return productPricingData && 
           Array.isArray(productPricingData.priceLists) && 
           productPricingData.priceLists.some(pl => pl.isActive)
  }

  const getProductPriceLists = (product) => {
    const productPricingData = getProductPricingData(product)
    return productPricingData?.priceLists?.filter(pl => pl.isActive) || []
  }

  const getPriceRangeText = (product, formatNumber) => {
    const priceLists = getProductPriceLists(product)
    if (priceLists.length === 0) return ''

    const prices = priceLists.map(pl => pl.amount)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)

    if (minPrice === maxPrice) {
      return `Special: ${formatNumber ? formatNumber(minPrice) : minPrice}`
    }

    return `${formatNumber ? formatNumber(minPrice) : minPrice} - ${formatNumber ? formatNumber(maxPrice) : maxPrice}`
  }

  const applyGradePricingToProduct = (product) => {
    const gradePricing = getCustomerGradePrice(product)
    
    if (gradePricing) {
      console.log(`Applied grade pricing: ${gradePricing.price} (was ${product.localPrice || product.pro_price})`)
      
      return {
        ...product,
        localPrice: gradePricing.price,
        priceListId: gradePricing.priceListId,
        originalPrice: product.localPrice || product.pro_price,
        appliedGrade: gradePricing.grade,
        gradeName: gradePricing.gradeName,
        hasPriceOverride: true
      }
    }

    return {
      ...product,
      hasPriceOverride: false
    }
  }

  const getDiscountAmount = (product) => {
    const gradePricing = getCustomerGradePrice(product)
    
    if (gradePricing) {
      const originalPrice = product.localPrice || product.pro_price
      return originalPrice - gradePricing.price
    }
    
    return 0
  }

  const getDiscountPercentage = (product) => {
    const discountAmount = getDiscountAmount(product)
    const originalPrice = product.localPrice || product.pro_price
    
    if (originalPrice > 0 && discountAmount > 0) {
      return Math.round((discountAmount / originalPrice) * 100)
    }
    
    return 0
  }

  const formatGradePriceDisplay = (product, formatNumber) => {
    const gradePricing = getCustomerGradePrice(product)
    const originalPrice = product.localPrice || product.pro_price
    
    if (!gradePricing) {
      return {
        displayPrice: formatNumber ? formatNumber(originalPrice) : originalPrice,
        hasDiscount: false,
        originalPrice: null,
        discountAmount: 0,
        discountPercentage: 0
      }
    }

    const discountAmount = originalPrice - gradePricing.price
    const discountPercentage = Math.round((discountAmount / originalPrice) * 100)

    return {
      displayPrice: formatNumber ? formatNumber(gradePricing.price) : gradePricing.price,
      hasDiscount: true,
      originalPrice: formatNumber ? formatNumber(originalPrice) : originalPrice,
      discountAmount: formatNumber ? formatNumber(discountAmount) : discountAmount,
      discountPercentage: `${discountPercentage}%`,
      gradeName: gradePricing.gradeName,
      grade: gradePricing.grade
    }
  }

  return {
    // Computed
    productPriceList,
    effectiveCustomer,
    
    // Methods
    getCustomerGradePrice,
    getProductPricingData,
    hasAvailablePriceLists,
    getProductPriceLists,
    getPriceRangeText,
    applyGradePricingToProduct,
    getDiscountAmount,
    getDiscountPercentage,
    formatGradePriceDisplay,
  }
}