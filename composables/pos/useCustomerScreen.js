/**
 * Customer Screen Management Composable
 * Handles dual monitor customer display functionality
 */

import { ref, computed } from 'vue'
import { swalError2 } from '~/common/index'
import { mainCompanyInfo } from '~/common/api'

export function useCustomerScreen() {
  // State
  const customerWindow = ref(null)

  // Computed
  const isCustomerDisplayOpen = computed(() => {
    return customerWindow.value && !customerWindow.value.closed
  })

  // Methods
  const setupCustomerWindowHandlers = () => {
    if (!customerWindow.value) return

    customerWindow.value.addEventListener('beforeunload', () => {
      console.log('Customer display window is closing')
      customerWindow.value = null
    })
  }

  const sendToCustomerScreen = (message) => {
    try {
      // Store in localStorage for persistence
      localStorage.setItem('customerDisplay', JSON.stringify(message))

      // Also send via postMessage if window is open
      if (customerWindow.value && !customerWindow.value.closed) {
        customerWindow.value.postMessage(message, '*')
      }

      console.log('Message sent to customer screen:', message)
    } catch (error) {
      console.error('Failed to send message to customer screen:', error)
    }
  }

  const formatCompanyAddress = (company) => {
    if (!company) return ''

    let formattedAddress = ''
    if (company.address) formattedAddress += company.address
    if (company.village) formattedAddress += `<br>${company.village}`
    if (company.district) formattedAddress += `, ${company.district}`
    if (company.province) formattedAddress += `, ${company.province}`

    return formattedAddress || company.address || ''
  }

  const getCompanyData = (currentTerminal) => {
    const baseCompany = mainCompanyInfo()
    const terminalCompany = currentTerminal?.location?.company

    const baseUrl = process.env.NUXT_ENV_BASE_URL || ''
    
    return {
      name: terminalCompany?.name || baseCompany?.name || 'DCOMMERCE MART',
      address: 
        formatCompanyAddress(terminalCompany) ||
        baseCompany?.address ||
        '123 Main Street',
      tel: terminalCompany?.tel || baseCompany?.tel || '',
      email: terminalCompany?.email || baseCompany?.email || '',
      bank: terminalCompany?.bank || baseCompany?.bank || '',
      accountName: terminalCompany?.accountName || baseCompany?.accountName || '',
      accounts: terminalCompany?.accounts || baseCompany?.accounts || '',
      remark: terminalCompany?.remark || baseCompany?.remark || '',
      term_condition: terminalCompany?.term_condition || baseCompany?.term_condition || '',
      ticketLogo: `${baseUrl}/${terminalCompany?.profile_image_path}` || 'default-logo.png',
    }
  }

  const openCustomerScreenEnhanced = async (currentTerminal) => {
    console.info(`Customer screen called...`)
    
    try {
      const companyData = getCompanyData(currentTerminal)
      
      // Prepare company information
      const companyInfo = {
        name: companyData.name,
        address: companyData.address,
        tel: companyData.tel,
        email: companyData.email,
        bank: companyData.bank,
        accountName: companyData.accountName,
        accounts: companyData.accounts,
        remark: companyData.remark,
      }

      // Encode company data for URL
      const companyParam = encodeURIComponent(JSON.stringify(companyInfo))
      const customerScreenPath = `/admin/cafeTable/customer?company=${companyParam}`

      // Get screen dimensions
      const screenWidth = window.screen.width
      const screenHeight = window.screen.height

      // Open customer screen window - FULLSCREEN
      customerWindow.value = window.open(
        customerScreenPath,
        'CustomerDisplay',
        `width=${screenWidth},height=${screenHeight},left=0,top=0,resizable=yes,scrollbars=no,location=no,menubar=no,toolbar=no,status=no,titlebar=no,fullscreen=yes`
      )

      if (!customerWindow.value) {
        throw new Error('Please allow popups for customer display')
      }

      // Try to enter fullscreen mode
      setTimeout(() => {
        try {
          if (customerWindow.value?.document?.documentElement?.requestFullscreen) {
            customerWindow.value.document.documentElement.requestFullscreen()
          }
        } catch (e) {
          console.log('Fullscreen not supported or blocked')
        }
      }, 1000)

      setupCustomerWindowHandlers()
      console.log('Customer screen opened successfully')
      
      return true
    } catch (error) {
      console.error('Error opening customer screen:', error)
      return false
    }
  }

  const formatOrderItemsForCustomerScreen = (productCart, findAllProduct) => {
    console.log('Formatting cart items:', productCart)

    return productCart.map((cartItem) => {
      const product = findAllProduct.find((p) => p.id === cartItem.id)

      return {
        id: cartItem.id,
        name: product?.pro_name || cartItem.name || `Product ${cartItem.id}`,
        description: product?.pro_desc || cartItem.description || '',
        category: product?.categ_name || 'General',
        quantity: cartItem.qty,
        unitPrice: cartItem.localPrice,
        totalPrice: cartItem.qty * cartItem.localPrice,
        status: 'pending',
        isGift: cartItem.isGift || false,
      }
    })
  }

  const formatOrderSummaryForCustomerScreen = (grandTotal, discount) => {
    return {
      subtotal: grandTotal,
      tax: 0,
      taxRate: 0, 
      discount: discount,
      total: grandTotal - discount,
    }
  }

  const generateQRForCustomerScreen = (grandTotal, discount, currentTerminal) => {
    const amount = Math.round(grandTotal - discount)
    const terminal = currentTerminal?.name || 'MART'

    const amountStr = amount.toString().padStart(6, '0')
    const tableStr = terminal.toString().padStart(6, '0')

    return `00020101021238640016A0052662846625770108701404180203002032 1IDB-000000000001417- M5204511453034185405${amountStr}05802LA5907KHAMMAO6260011713a321asS321as2250302120713terminal${tableStr}0812${terminal} payment63041c9f`
  }

  const sendQRToCustomerScreen = (productCart, findAllProduct, grandTotal, discount, currentTerminal, lastTransactionSaleHeaderId) => {
    if (!productCart.length) {
      console.log('No items in cart for customer screen QR')
      return
    }

    const formattedOrderItems = formatOrderItemsForCustomerScreen(productCart, findAllProduct)
    const formattedOrderSummary = formatOrderSummaryForCustomerScreen(grandTotal, discount)

    const qrData = {
      amount: grandTotal - discount,
      tableNumber: currentTerminal?.name || 'POS-TERMINAL',
      ticketId: lastTransactionSaleHeaderId || null,
      qrString: generateQRForCustomerScreen(grandTotal, discount, currentTerminal),
      timestamp: Date.now(),
      orderItems: formattedOrderItems,
      orderSummary: formattedOrderSummary,
    }

    const message = {
      type: 'SHOW_QR_PAYMENT',
      data: qrData,
    }

    sendToCustomerScreen(message)
    console.info(`Complete QR data sent to customer screen: ${JSON.stringify(qrData)}`)
  }

  const sendWelcomeMessage = (productCart, findAllProduct, grandTotal, discount, companyData) => {
    const formattedOrderItems = formatOrderItemsForCustomerScreen(productCart, findAllProduct)
    const formattedOrderSummary = formatOrderSummaryForCustomerScreen(grandTotal, discount)

    const message = {
      type: 'SHOW_QR_PAYMENT', 
      data: {
        amount: grandTotal - discount,
        storeName: companyData.name,
        timestamp: Date.now(),
        orderItems: formattedOrderItems,
        orderSummary: formattedOrderSummary,
      },
    }
    
    sendToCustomerScreen(message)
  }

  const showPaymentSuccessOnCustomerScreen = (grandTotal, discount, currentTerminal) => {
    const message = {
      type: 'PAYMENT_SUCCESS',
      data: {
        amount: grandTotal - discount,
        tableNumber: currentTerminal?.name || 'POS',
      },
      timestamp: Date.now(),
    }

    sendToCustomerScreen(message)
  }

  const hideQRPaymentFromCustomerScreen = () => {
    const message = {
      type: 'HIDE_QR_PAYMENT',
      timestamp: Date.now(),
    }

    sendToCustomerScreen(message)
    localStorage.removeItem('customerDisplay')
  }

  const closeCustomerDisplayWindow = () => {
    if (customerWindow.value && !customerWindow.value.closed) {
      customerWindow.value.close()
    }
    customerWindow.value = null
    localStorage.removeItem('customerDisplay')
  }

  const handleCustomerScreenMessage = (event) => {
    try {
      if (event.data && typeof event.data === 'object') {
        console.log('Received message from customer screen:', event.data)
      }
    } catch (error) {
      console.error('Error handling customer screen message:', error)
    }
  }

  return {
    // State
    customerWindow,
    
    // Computed
    isCustomerDisplayOpen,
    
    // Methods
    openCustomerScreenEnhanced,
    sendQRToCustomerScreen, 
    sendWelcomeMessage,
    showPaymentSuccessOnCustomerScreen,
    hideQRPaymentFromCustomerScreen,
    closeCustomerDisplayWindow,
    handleCustomerScreenMessage,
    formatOrderItemsForCustomerScreen,
    formatOrderSummaryForCustomerScreen,
    getCompanyData,
  }
}