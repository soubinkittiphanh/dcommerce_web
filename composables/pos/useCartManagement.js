/**
 * Cart Management Composable
 * Handles product cart operations, validation, and gift configurations
 */

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useCustomerGradePricing } from './useCustomerGradePricing'

export function useCartManagement() {
  const store = useStore()
  const { applyGradePricingToProduct } = useCustomerGradePricing()

  // Computed properties
  const cartOfProduct = computed(() => {
    return store.getters.cartOfProduct || []
  })

  const findAllProduct = computed(() => {
    return store.getters.findAllProduct || []
  })

  // Methods
  const showError = (message, toast, swal) => {
    if (toast) {
      toast.error(message)
    } else if (swal) {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        timer: 2000,
        timerProgressBar: true,
      })
    } else {
      alert(message)
    }
  }

  const showSuccess = (message, toast) => {
    if (toast) {
      toast.success(message)
    }
  }

  const validateCardCountForIncrease = (product, toast) => {
    const cardCountLimit = product.card_count

    // If card_count is not defined, null, or 0, don't allow any additions
    if (!cardCountLimit || cardCountLimit <= 0) {
      if (toast) {
        toast.error(
          `Product ${product.pro_name} is not available for purchase`,
          { position: 'bottom-center' }
        )
      }
      return false
    }

    // Find if this product is already in the cart
    const existingCartItem = cartOfProduct.value.find((item) => {
      return item.pro_id === product.pro_id || item.id === product.id
    })

    if (existingCartItem) {
      const currentQty = existingCartItem.qty

      // Check if adding one more would exceed card_count
      if (currentQty >= cardCountLimit) {
        if (toast) {
          toast.error(
            `Cannot add more. You have ${currentQty}/${cardCountLimit} items for ${product.pro_name}`,
            { position: 'bottom-center' }
          )
        }
        return false
      }
    }

    return true
  }

  const validateProductStock = (product) => {
    if (product.validateStockOnSale === 1) {
      const productStock = findAllProduct.value.find(
        (p) => p.id === product.id
      )
      if (productStock && productStock.stock <= 0) {
        return {
          valid: false,
          message: 'Stock not enough'
        }
      }
    }
    return { valid: true }
  }

  const validateProductActive = (product) => {
    if (!product.isActive) {
      return {
        valid: false,
        message: 'Product is inactive'
      }
    }
    return { valid: true }
  }

  const addProductValidation = (product, isGift = false, toast, swal) => {
    try {
      // Validate product is active
      const activeValidation = validateProductActive(product)
      if (!activeValidation.valid) {
        showError(activeValidation.message, toast, swal)
        return false
      }

      // Check stock if validation is enabled
      const stockValidation = validateProductStock(product)
      if (!stockValidation.valid) {
        showError(stockValidation.message, toast, swal)
        return false
      }

      // Check card_count limit before adding to cart
      if (!validateCardCountForIncrease(product, toast)) {
        return false
      }

      // Apply customer grade pricing if available
      const productWithPricing = applyGradePricingToProduct(product)

      const cartItem = {
        ...productWithPricing, // Use product with applied pricing
        isGift: isGift,
        lineUUIDCheck: true,
        lineUUID: product.lineUUID || Date.now() + Math.random().toString(16),
      }

      console.info(`Adding product to cart: ${JSON.stringify(cartItem)}`)
      
      // Add to store using Vuex action
      store.dispatch('addProduct', cartItem)

      // Show success feedback
      showAddSuccessMessage(product, toast)

      return true
    } catch (error) {
      console.error('Error adding product:', error)
      showError('Failed to add product to cart', toast, swal)
      return false
    }
  }

  const showAddSuccessMessage = (product, toast) => {
    if (!toast) return

    const existingItem = cartOfProduct.value.find(
      (item) => item.pro_id === product.pro_id || item.id === product.id
    )

    const newQty = existingItem ? existingItem.qty : 1
    const limit = product.card_count

    if (limit && limit > 0) {
      const remaining = limit - newQty

      if (remaining > 0) {
        toast.success(
          `${product.pro_name} added. ${remaining} more allowed`,
          { position: 'bottom-center' }
        )
      } else {
        toast.success(`${product.pro_name} added. Limit reached!`, {
          position: 'bottom-center',
        })
      }
    } else {
      toast.success(`${product.pro_name} added to cart`)
    }
  }

  const canAddProductToCart = (product) => {
    if (!product.card_count || product.card_count <= 0) return false

    const existingCartItem = cartOfProduct.value.find(
      (item) => item.pro_id === product.pro_id || item.id === product.id
    )

    if (!existingCartItem) return true

    return existingCartItem.qty < product.card_count
  }

  const getProductAvailabilityStatus = (product) => {
    if (!product.card_count || product.card_count <= 0) return 'unavailable'

    const existingCartItem = cartOfProduct.value.find(
      (item) => item.pro_id === product.pro_id || item.id === product.id
    )

    if (!existingCartItem) return 'available'

    const currentQty = existingCartItem.qty
    const limit = product.card_count

    if (currentQty >= limit) return 'limit-reached'
    if (currentQty >= limit - 1) return 'near-limit'

    return 'available'
  }

  const deleteProductFromCart = (product) => {
    store.dispatch('deleteProductFromCart', product)
  }

  const decreaseProductAmount = (product) => {
    store.dispatch('deleteProduct', product)
  }

  const updateProductQuantity = (productId, qty) => {
    store.commit('UPDATE_QTY', {
      productId: productId,
      qty: qty,
    })
  }

  const clearCart = () => {
    store.dispatch('clearCart')
  }

  const handleGiftConfiguration = (giftData) => {
    store.commit('setGiftForCartItem', {
      item: giftData.item,
      giftConfig: giftData.giftConfig,
    })
  }

  const generateSaleLines = () => {
    const lines = []
    for (const iterator of cartOfProduct.value) {
      lines.push({
        quantity: iterator.qty,
        unitRate: 1,
        price: iterator.localPrice,
        discount: 0,
        validateStockOnSale: iterator.validateStockOnSale,
        productId: iterator.id,
        productKey: iterator.id,
        unitId: iterator.stockUnitId,
        total: iterator.qty * iterator.localPrice,
        isGift: iterator.isGift || false,
        priceListId: iterator.priceListId || null,
        isActive: true,
      })
    }
    return lines
  }

  const calculateGrandTotal = () => {
    const totalPrice = cartOfProduct.value.reduce((total, item) => {
      return total + item.qty * item.localPrice
    }, 0)
    return totalPrice
  }

  const getCartItemCount = () => {
    return cartOfProduct.value.length
  }

  const getCartTotalItems = () => {
    return cartOfProduct.value.reduce((total, item) => {
      return total + item.qty
    }, 0)
  }

  const findCartItemById = (productId) => {
    return cartOfProduct.value.find(item => item.id === productId)
  }

  const findCartItemByLineUUID = (lineUUID) => {
    return cartOfProduct.value.find(item => item.lineUUID === lineUUID)
  }

  const hasItemsInCart = () => {
    return cartOfProduct.value.length > 0
  }

  const validateCartForCheckout = () => {
    if (!hasItemsInCart()) {
      return {
        valid: false,
        message: 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ'
      }
    }

    // Check for any invalid items
    const invalidItems = cartOfProduct.value.filter(item => {
      return !item.isActive || (item.validateStockOnSale === 1 && item.stock <= 0)
    })

    if (invalidItems.length > 0) {
      return {
        valid: false,
        message: 'Some items in cart are no longer available',
        invalidItems
      }
    }

    return { valid: true }
  }

  return {
    // Computed
    cartOfProduct,
    findAllProduct,
    
    // Validation methods
    validateCardCountForIncrease,
    validateProductStock,
    validateProductActive,
    validateCartForCheckout,
    
    // Cart manipulation methods
    addProductValidation,
    deleteProductFromCart,
    decreaseProductAmount,
    updateProductQuantity,
    clearCart,
    handleGiftConfiguration,
    
    // Cart analysis methods
    canAddProductToCart,
    getProductAvailabilityStatus,
    generateSaleLines,
    calculateGrandTotal,
    getCartItemCount,
    getCartTotalItems,
    findCartItemById,
    findCartItemByLineUUID,
    hasItemsInCart,
    
    // Utility methods
    showError,
    showSuccess,
    showAddSuccessMessage,
  }
}