/**
 * Payment Processing Composable
 * Handles single/multi payment processing, transaction creation, and sale management
 */

import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { createMultiPayment } from '~/composables/useMultiPayment-vue2.js'
import { jsDateToMysqlDate } from '~/common'
import { swalSuccess, swalError2 } from '~/common/index'

export function usePaymentProcessing() {
  const store = useStore()

  // State
  const multiPayment = ref(null)
  const isCreatingSale = ref(false)
  const pendingSaleHeaderId = ref(null)

  // Computed
  const currentSelectedCustomer = computed(() => {
    return store.getters.currentSelectedCustomer
  })

  const currentSelectedPayment = computed(() => {
    return store.getters.currentSelectedPayment
  })

  const findSelectedTerminal = computed(() => {
    return store.getters.findSelectedTerminal
  })

  const findAllTerminal = computed(() => {
    return store.getters.findAllTerminal
  })

  const currentTerminal = computed(() => {
    return findAllTerminal.value.find(
      (el) => el['id'] == findSelectedTerminal.value
    )
  })

  // Methods
  const initializeMultiPayment = (axios, formatNumber) => {
    multiPayment.value = createMultiPayment(axios, formatNumber)
  }

  const formSaleHeader = (
    grandTotal,
    discount,
    generateSaleLine,
    user,
    remark = ''
  ) => {
    const today = new Date()
    
    return {
      isActive: true,
      discount: discount,
      total: grandTotal - discount,
      clientId: currentSelectedCustomer.value.id,
      paymentId: currentSelectedPayment.value,
      currencyId: 1,
      lines: generateSaleLine,
      userId: user.id,
      bookingDate: jsDateToMysqlDate(today),
      locationId: currentTerminal.value['locationId'],
      id: pendingSaleHeaderId.value,
      remark: remark,
    }
  }

  const createSaleHeader = async (
    axios,
    grandTotal,
    discount,
    generateSaleLine,
    user,
    findAllProduct
  ) => {
    if (isCreatingSale.value || pendingSaleHeaderId.value) return

    isCreatingSale.value = true

    try {
      const today = new Date()
      const saleHeaderData = {
        isActive: true,
        discount: discount,
        total: grandTotal - discount,
        clientId: currentSelectedCustomer.value.id,
        paymentId: null,
        currencyId: 1,
        lines: generateSaleLine,
        userId: user.id,
        bookingDate: jsDateToMysqlDate(today),
        locationId: currentTerminal.value['locationId'],
        remark: 'Multi-payment transaction',
      }

      const response = await axios.post(
        '/api/sale/create-header-only',
        saleHeaderData
      )

      pendingSaleHeaderId.value =
        response.data.saleHeaderId || response.data.id
        
      console.info(`PENDING SALE HEADER ${pendingSaleHeaderId.value}`)
      return pendingSaleHeaderId.value
    } catch (error) {
      console.error('Error creating sale header:', error)
      
      let errorMessage = 'ບໍ່ສາມາດສ້າງລາຍການຂາຍໄດ້'
      
      if (error.response?.data) {
        const errorData = error.response.data
        
        if (errorData && typeof errorData === 'object') {
          if (
            errorData.stockErrors &&
            Array.isArray(errorData.stockErrors) &&
            errorData.stockErrors.length > 0
          ) {
            const stockError = errorData.stockErrors[0]
            const product = findAllProduct.find(
              (el) => el.id == stockError.productId
            )

            errorMessage = `ຈຳນວນສິນຄ້າ: ${
              product?.pro_name || 'Unknown Product'
            } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${
              stockError.available
            }, ຂາດ: ${stockError.shortage})`
          } else if (errorData.message) {
            errorMessage = errorData.message
          }
        } else if (typeof errorData === 'string') {
          if (errorData.includes('#')) {
            const id = errorData.split('#')[1]
            const product = findAllProduct.find((el) => el.id == id)
            errorMessage = `ຈຳນວນສິນຄ້າ: ${
              product?.pro_name || ''
            } ມີບໍ່ພຽງພໍໃນສາງ`
          } else {
            errorMessage = errorData
          }
        }
      }

      throw new Error(errorMessage)
    } finally {
      isCreatingSale.value = false
    }
  }

  const openMultiPaymentDialog = async (
    axios,
    grandTotal,
    discount,
    generateSaleLine,
    user,
    findAllProduct,
    formatNumber,
    swal
  ) => {
    if (generateSaleLine.length === 0) {
      swalError2(swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
      return false
    }

    try {
      console.log('Opening multi-payment dialog - Cart items:', generateSaleLine.length)

      await createSaleHeader(
        axios,
        grandTotal,
        discount,
        generateSaleLine,
        user,
        findAllProduct
      )

      if (multiPayment.value) {
        await multiPayment.value.initializePayment(
          grandTotal - discount,
          pendingSaleHeaderId.value
        )
      }

      return true
    } catch (error) {
      swalError2(
        swal,
        'Error',
        error.message || 'ບໍ່ສາມາດເປີດໜ້າຈ່າຍເງິນໄດ້'
      )
      return false
    }
  }

  const handleMultiPaymentConfirm = async (
    paymentData,
    axios,
    grandTotal,
    discount,
    generateSaleLine,
    user,
    formatNumber,
    swal,
    showPaymentSuccess,
    printTicket,
    completeTransaction
  ) => {
    try {
      console.log('Processing multi-payment - Cart items:', generateSaleLine.length)

      if (!paymentData || paymentData.length === 0) {
        throw new Error('ຕ້ອງມີການຈ່າຍເງິນຢ່າງໜ້ອຍ 1 ວິທີ')
      }

      const totalPaid = paymentData.reduce(
        (sum, payment) => sum + (payment.amount || 0),
        0
      )
      const expectedTotal = grandTotal - discount

      if (Math.abs(totalPaid - expectedTotal) > 0.01) {
        throw new Error(
          `ຈຳນວນເງິນບໍ່ຄົບ. ຈ່າຍແລ້ວ: ${formatNumber(
            totalPaid
          )}, ຕ້ອງຈ່າຍ: ${formatNumber(expectedTotal)}`
        )
      }

      await axios.post('/api/sale-payment/bulk', paymentData)
      
      const saleHeader = formSaleHeader(
        grandTotal,
        discount,
        generateSaleLine,
        user
      )

      await axios.post('/api/sale/create-line-only', saleHeader)

      // Show success
      showPaymentSuccess()
      swalSuccess(swal, 'ສຳເລັດ', 'ການຈ່າຍເງິນສຳເລັດແລ້ວ')
      
      // Print ticket
      if (printTicket) {
        printTicket()
      }
      
      // Complete transaction
      completeTransaction()
      
      return true
    } catch (error) {
      console.error('Multi-payment error:', error)
      
      let errorMessage = error.message

      if (error.response?.data) {
        if (typeof error.response.data === 'string') {
          errorMessage = error.response.data
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message
        }
      }

      swalError2(swal, 'Error', errorMessage)
      return false
    }
  }

  const handleMultiPaymentCancel = async (axios, swal) => {
    await reversalSale(axios, swal)
  }

  const reversalSale = async (axios, swal) => {
    if (!pendingSaleHeaderId.value) {
      console.info(`Cannot reverse, sale header not found`)
      return
    }

    const form = {
      isActive: false,
      remark: 'UNDO MULTI PAYMENT TXN',
      cancel_fee: 0,
      customerId: null,
    }

    try {
      console.log(`Reversing sale: ${JSON.stringify(form)}`)
      const response = await axios.put(
        `api/sale/reverse/${pendingSaleHeaderId.value}`,
        form
      )
      
      if (response.status === 200) {
        console.log('Sale reversed successfully')
      }
    } catch (error) {
      swalError2(swal, 'Error', 'Something went wrong ' + error)
    }
  }

  const processSinglePayment = async (
    axios,
    grandTotal,
    discount,
    generateSaleLine,
    user,
    findAllProduct,
    swal,
    showPaymentSuccess,
    printTicket,
    completeTransaction
  ) => {
    if (generateSaleLine.length === 0) {
      swalError2(swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
      return false
    }

    if (!currentSelectedPayment.value) {
      swalError2(swal, 'Error', 'ກະລຸນາເລືອກວິທີການຊຳລະ')
      return false
    }

    try {
      console.log('Processing single payment - Cart items:', generateSaleLine.length)

      const result = await postTransactionOriginal(
        axios,
        grandTotal,
        discount,
        generateSaleLine,
        user,
        findAllProduct,
        swal,
        false
      )

      if (result.success) {
        showPaymentSuccess()
        if (printTicket) {
          printTicket()
        }
        completeTransaction()
        return true
      }

      return false
    } catch (error) {
      console.error('Single payment error:', error)
      swalError2(
        swal,
        'Error',
        error.message || 'ເກີດຂໍ້ຜິດພາດໃນການຊຳລະ'
      )
      return false
    }
  }

  const postTransactionOriginal = async (
    axios,
    grandTotal,
    discount,
    generateSaleLine,
    user,
    findAllProduct,
    swal,
    isDeliveryCustomer = false
  ) => {
    if (generateSaleLine.length === 0) {
      swalError2(swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
      return { success: false }
    }

    try {
      const saleHeader = formSaleHeader(
        grandTotal,
        discount,
        generateSaleLine,
        user
      )

      let response
      const isUpdate = saleHeader.id && saleHeader.id !== null

      if (isUpdate) {
        response = await axios.put(`/api/sale/update-v2/${saleHeader.id}`, saleHeader)
      } else {
        console.info(`Creating new sale`)
        response = await axios.post('/api/sale/create', saleHeader)
      }

      // Handle successful response
      let successMessage = ''
      let saleHeaderId = ''

      if (typeof response.data === 'string' && response.data.includes('-')) {
        const parts = response.data.split('-')
        successMessage = parts[0].trim()
        saleHeaderId = parts[1].trim()
      } else if (typeof response.data === 'object') {
        successMessage = isUpdate ? 'Successfully updated' : 'Successfully created'
        saleHeaderId = response.data.id || saleHeader.id
      } else {
        successMessage = isUpdate ? 'Sale updated successfully' : 'Sale created successfully'
        saleHeaderId = saleHeader.id || new Date().getTime()
      }

      swalSuccess(swal, 'Succeed', successMessage)

      return {
        success: true,
        saleHeaderId,
        isUpdate,
      }
    } catch (error) {
      console.error('Transaction error:', error)
      
      let errorMessage = 'Unknown error occurred'

      if (error.response?.data) {
        const errorData = error.response.data

        if (errorData && typeof errorData === 'object') {
          if (
            errorData.stockErrors &&
            Array.isArray(errorData.stockErrors) &&
            errorData.stockErrors.length > 0
          ) {
            const stockError = errorData.stockErrors[0]
            const product = findAllProduct.find(
              (el) => el.id == stockError.productId
            )

            errorMessage = `ຈຳນວນສິນຄ້າ: ${
              product?.pro_name || 'Unknown Product'
            } ມີບໍ່ພຽງພໍໃນສາງ (ຕ້ອງການ: ${stockError.required}, ມີຢູ່: ${
              stockError.available
            }, ຂາດ: ${stockError.shortage})`
          } else if (errorData.message) {
            errorMessage = errorData.message
          } else if (errorData.error) {
            errorMessage = errorData.error
          }
        } else if (typeof errorData === 'string') {
          if (errorData.includes('#')) {
            const id = errorData.split('#')[1]
            const product = findAllProduct.find((el) => el.id == id)
            errorMessage = `ຈຳນວນສິນຄ້າ: ${product?.pro_name || ''} ມີບໍ່ພຽງພໍໃນສາງ`
          } else {
            errorMessage = errorData
          }
        }
      }

      swalError2(swal, 'Error', errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  const handlePaymentError = (error, swal) => {
    console.error('Payment error:', error)
    swalError2(swal, 'Error', error.message || 'ເກີດຂໍ້ຜິດພາດໃນການຊຳລະ')
  }

  const clearPaymentState = () => {
    pendingSaleHeaderId.value = null
    if (multiPayment.value) {
      multiPayment.value.clearPayments()
    }
  }

  const createQuotation = async (
    axios,
    grandTotal,
    discount,
    generateSaleLine,
    user,
    swal
  ) => {
    if (generateSaleLine.length === 0) {
      swalError2(swal, 'Error', 'ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
      return false
    }

    try {
      const saleHeader = formSaleHeader(
        grandTotal,
        discount,
        generateSaleLine,
        user,
        'Quotation'
      )

      const response = await axios.post('/api/quotation/create', saleHeader)
      
      const quotationId = response.data.split('-')[1].toString().trim()
      
      window.open(`/admin/PDFQuotation/${quotationId}`, '_blank')
      
      return true
    } catch (error) {
      swalError2(swal, 'Error', error.message || error)
      return false
    }
  }

  return {
    // State
    multiPayment,
    isCreatingSale,
    pendingSaleHeaderId,
    
    // Computed
    currentSelectedCustomer,
    currentSelectedPayment,
    currentTerminal,
    
    // Methods
    initializeMultiPayment,
    formSaleHeader,
    createSaleHeader,
    openMultiPaymentDialog,
    handleMultiPaymentConfirm,
    handleMultiPaymentCancel,
    processSinglePayment,
    postTransactionOriginal,
    handlePaymentError,
    clearPaymentState,
    createQuotation,
    reversalSale,
  }
}