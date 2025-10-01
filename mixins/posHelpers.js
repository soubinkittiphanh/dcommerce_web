// mixins/posHelpers.js
export const posHelpers = {
  methods: {
    formatNumber(value) {
      if (value == null || isNaN(value)) return '0'
      return new Intl.NumberFormat('en-US').format(value)
    },

    formatCurrency(value, currencyCode = 'LAK') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
      }).format(value)
    },

    jsDateToMysqlDate(date) {
      return date.toISOString().split('T')[0]
    },

    debounce(func, delay) {
      let timeoutId
      return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func.apply(this, args), delay)
      }
    },

    validateQuantity(qty) {
      const quantity = parseInt(qty)
      return !isNaN(quantity) && quantity > 0 ? quantity : 0
    },

    generateTransactionId() {
      return `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    },

    calculateItemTotal(item) {
      return (item.qty || 0) * (item.localPrice || 0)
    },

    calculateSubtotal(items) {
      return items.reduce((total, item) => total + this.calculateItemTotal(item), 0)
    },

    calculateTotalWithDiscount(subtotal, discount = 0) {
      return Math.max(0, subtotal - discount)
    },
  },
}

// mixins/transaction.js
export const transactionMixin = {
  methods: {
    buildSaleHeader(type = 'SALE') {
      const today = new Date()
      return {
        bookingDate: this.jsDateToMysqlDate(today),
        remark: type === 'QUOTATION' ? 'Quotation' : '',
        total: this.grandTotal - this.transaction.discount,
        exchangeRate: 1,
        isActive: true,
        clientId: this.currentCustomer?.id,
        paymentId: this.currentPayment,
        currencyId: 1,
        userId: this.user?.id,
        locationId: this.currentTerminal?.locationId,
        discount: this.transaction.discount,
        lines: this.generateSaleLines,
      }
    },

    async processPayment(transactionData) {
      try {
        const response = await this.$axios.post('/api/sale/create', transactionData)
        return {
          success: true,
          data: response.data,
          transactionId: response.data.split('-')[1]?.trim(),
        }
      } catch (error) {
        return {
          success: false,
          error: error.response?.data || error.message,
        }
      }
    },

    async createQuotationRecord(quotationData) {
      try {
        const response = await this.$axios.post('/api/quotation/create', quotationData)
        return {
          success: true,
          data: response.data,
          quotationId: response.data.split('-')[1]?.trim(),
        }
      } catch (error) {
        return {
          success: false,
          error: error.response?.data || error.message,
        }
      }
    },

    validateTransaction() {
      const errors = []
      
      if (!this.productCart.length) {
        errors.push('ກະລຸນາເລືອກສິນຄ້າ 1 ຢ່າງຂື້ນໄປ')
      }
      
      if (!this.currentCustomer) {
        errors.push('ກະລຸນາເລືອກລູກຄ້າ')
      }
      
      if (!this.currentPayment) {
        errors.push('ກະລຸນາເລືອກວິທີການຊຳລະ')
      }

      if (this.transaction.discount < 0) {
        errors.push('ສ່ວນຫລຸດບໍ່ສາມາດຕໍ່າກວ່າ 0')
      }

      if (this.transaction.discount > this.grandTotal) {
        errors.push('ສ່ວນຫລຸດບໍ່ສາມາດສູງກວ່າຍອດລວມ')
      }

      return errors
    },

    resetTransaction() {
      this.transaction.discount = 0
      this.transaction.cashReceived = 0
      this.selectedProduct = { id: null, qty: 0 }
      this.onlineCustomerInfo = {}
    },
  },
}

// mixins/print.js
export const printMixin = {
  methods: {
    printDefaultTicket() {
      const ticketData = {
        productCart: this.productCart,
        findAllProduct: this.findAllProduct,
        formatNumber: this.formatNumber,
        discount: this.transaction.discount,
        currencyList: this.currencyList,
        grandTotal: this.grandTotal,
        companyLogo: this.companyLogo,
        lastTransactionId: this.lastTransactionId,
        currentTerminal: this.currentTerminal,
        user: this.user,
        ticketCommon: this.ticketCommon,
        currentPaymentCode: this.currentPaymentCode,
        cashReceived: this.transaction.cashReceived,
        changes: this.calculatedChanges,
      }
      
      this.generateTicketHTML(ticketData)
    },

    printDeliveryTicket() {
      const deliveryData = {
        productCart: this.productCart,
        onlineCustomerInfo: this.onlineCustomerInfo,
        discount: this.transaction.discount,
        grandTotal: this.grandTotal,
        formatNumber: this.formatNumber,
        currencyList: this.currencyList,
        findAllProduct: this.findAllProduct,
      }
      
      this.generateDeliveryTicketHTML(deliveryData)
    },

    generateTicketHTML(data) {
      const transactionListHTML = this.buildTransactionListHTML(data)
      const totalsHTML = this.buildTotalsHTML(data)
      const headerHTML = this.buildTicketHeaderHTML(data)
      
      const ticketHTML = `
        ${data.ticketCommon.header}
        <body>
          ${headerHTML}
          <hr>
          ${transactionListHTML}
          <hr>
          ${totalsHTML}
          <h2 style="text-align: center; margin-top: 50px;">THANK YOU</h2>
        </body>
        </html>
      `
      
      this.printHTML(ticketHTML)
    },

    generateDeliveryTicketHTML(data) {
      const transactionListHTML = this.buildDeliveryTransactionListHTML(data)
      const deliveryInfoHTML = this.buildDeliveryInfoHTML(data)
      const totalsHTML = this.buildDeliveryTotalsHTML(data)
      
      const deliveryHTML = `
        ${this.ticketCommon.header}
        <body>
          ${deliveryInfoHTML}
          <hr>
          ${transactionListHTML}
          <hr>
          ${totalsHTML}
        </body>
        </html>
      `
      
      this.printHTML(deliveryHTML)
    },

    buildTransactionListHTML(data) {
      return data.productCart.map(item => {
        const product = data.findAllProduct.find(p => p.id === item.id)
        const total = item.qty * item.localPrice
        return `
          <div class="ticket">
            <div class="product-name">${product?.pro_name || 'Unknown Product'}</div>
            <div class="price">${data.formatNumber(total)}</div>
          </div>
          <div class="product-name">${item.qty} X ${data.formatNumber(item.localPrice)}</div>
          <br>
        `
      }).join('')
    },

    buildDeliveryTransactionListHTML(data) {
      return data.productCart.map(item => {
        const product = data.findAllProduct.find(p => p.id === item.id)
        const total = item.qty * item.localPrice
        return `
          <div class="ticket">
            <div class="product-name">${product?.pro_name || 'Unknown Product'}</div>
            <div class="price">${item.qty} ${data.onlineCustomerInfo.payment === 'COD' ? ' X ' + data.formatNumber(total) : ''}</div>
          </div>
        `
      }).join('')
    },

    buildTicketHeaderHTML(data) {
      const today = new Date()
      return `
        <h3>ໃບຮັບເງິນ</h3>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="flex: 0 0 auto;">
            <img src="${data.companyLogo}" alt="Company Logo" width="100" height="100">
          </div>
          <div style="flex: 1; text-align: right;">
            <h5>ວັນທີ: ${today.toLocaleString()}</h5>
            <h5>ເລກທີ: ${data.lastTransactionId}</h5>
            <h5>ເບີໂທຮ້ານ: ${data.currentTerminal?.location?.company?.tel || ''}</h5>
            <h5>ຜູ້ຂາຍ: ${data.user?.cus_name || ''}</h5>
          </div>
        </div>
      `
    },

    buildDeliveryInfoHTML(data) {
      const today = new Date()
      return `
        <h5>ວັນທີ: ${today.toLocaleString()}</h5>
        <h5>ຮ້ານ: ${data.onlineCustomerInfo.branch}</h5>
        <h5>ເບີໂທ: ${data.onlineCustomerInfo.branchTel}</h5>
        <h5>ຜູ້ຮັບ: ${data.onlineCustomerInfo.name}</h5>
        <h5>ໂທ: ${data.onlineCustomerInfo.tel}</h5>
        <h5>ຂົນສົ່ງ: ${data.onlineCustomerInfo.shipping}</h5>
        <h5>ບ່ອນສົ່ງ: ${data.onlineCustomerInfo.address}</h5>
        ${data.onlineCustomerInfo.shipping !== 'RIDER' ? `<h5>ຄ່າຝາກ: ${data.onlineCustomerInfo.shippingFeeBy}</h5>` : ''}
      `
    },

    buildTotalsHTML(data) {
      const discountHTML = data.discount > 0 ? `
        <div class="ticket">
          <div class="product-name">ສ່ວນຫລຸດ</div>
          <div class="price">- ${data.formatNumber(data.discount)}</div>
        </div>
      ` : ''

      const currencyTotalsHTML = data.currencyList.map(currency => `
        <div class="ticket">
          <div class="product-name"></div>
          <div class="price-footer">${currency.code} ${data.formatNumber((data.grandTotal - data.discount) / currency.rate)}</div>
        </div>
      `).join('')

      return `
        ${discountHTML}
        <div class="ticket">
          <div class="product-name"></div>
          <div class="price-total"><h5>ຊຳລະດ້ວຍ: ${data.currentPaymentCode}</h5></div>
        </div>
        <div class="ticket">
          <div class="product-name"></div>
          <div class="price-total"><h5>ຮັບຊຳລະ: ${data.formatNumber(data.cashReceived)}</h5></div>
        </div>
        <div class="ticket">
          <div class="product-name"></div>
          <div class="price-total"><h5>ເງິນທອນ: ${data.changes}</h5></div>
        </div>
        ${currencyTotalsHTML}
      `
    },

    buildDeliveryTotalsHTML(data) {
      const discountHTML = data.discount > 0 && data.onlineCustomerInfo.payment === 'COD' ? `
        <div class="ticket">
          <div class="product-name">ສ່ວນຫລຸດ</div>
          <div class="price">- ${data.formatNumber(data.discount)}</div>
        </div>
      ` : ''

      const riderFeeHTML = data.onlineCustomerInfo.riderFee > 0 ? `
        <div class="ticket">
          <div class="product-name">ຄ່າສົ່ງ</div>
          <div class="price">${data.formatNumber(data.onlineCustomerInfo.riderFee)}</div>
        </div>
      ` : ''

      const totalHTML = data.currencyList
        .filter(currency => currency.code === 'LAK' && (data.onlineCustomerInfo.payment === 'COD' || data.onlineCustomerInfo.shipping === 'RIDER'))
        .map(currency => `
          <div class="ticket">
            <div class="product-name"></div>
            <div class="price-total">
              <h5>ຍອດລວມ(${data.onlineCustomerInfo.payment}): ${data.formatNumber((data.grandTotal + +data.onlineCustomerInfo.riderFee - data.discount) / currency.rate)}</h5>
            </div>
          </div>
        `).join('')

      return `${riderFeeHTML}${discountHTML}${totalHTML}`
    },

    printHTML(htmlContent) {
      const printWindow = window.open('', '', 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0')
      if (printWindow) {
        printWindow.document.open()
        printWindow.document.write(htmlContent)
        printWindow.document.close()
        
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 1000)
      }
    },
  },
}