<template>
  <v-dialog 
    v-model="visible" 
    fullscreen
    persistent 
    scrollable
    transition="dialog-bottom-transition"
  >
    <!-- Main Card - Only show when data is valid -->
    <v-card v-if="hasValidData" class="d-flex flex-column" style="height: 100vh;">
      <!-- Header -->
      <v-card-title class="primary white--text py-3 flex-shrink-0">
        <v-icon left color="white">mdi-printer</v-icon>
        <span>ໃບຮັບເງິນ - Payment Receipt</span>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <!-- Print Area - Scrollable -->
      <v-card-text class="pa-0 flex-grow-1 overflow-y-auto">
        <div id="receipt-print-area" class="receipt-container">
          <!-- Company Header -->
          <div class="receipt-header">
            <div class="header-flex">
              <!-- Left Side - Dynamic Company Logo -->
              <div class="header-left">
                <!-- Loading State -->
                <div v-if="companyLogo.loading" class="logo-placeholder">
                  <v-progress-circular
                    indeterminate
                    size="24"
                    color="primary"
                  ></v-progress-circular>
                </div>
                <!-- Company Logo -->
                <img
                  v-else
                  :src="finalLogoUrl"
                  alt="Company Logo"
                  class="company-logo"
                  @error="onLogoError"
                />
              </div>

              <!-- Center - Company Info -->
              <div class="header-center">
                <h2 class="company-name">{{ companyName }}</h2>
                <p class="company-address">{{ companyAddress }}</p>
                <p class="company-contact">{{ companyContact }}</p>
              </div>

              <!-- Right Side - Receipt Title -->
              <div class="header-right">
                <div class="receipt-title">
                  <h3>PAYMENT RECEIPT</h3>
                  <h4>ໃບຮັບເງິນ</h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Receipt Info Grid -->
          <div class="receipt-info-grid">
            <div class="info-section">
              <h5>Receipt Details:</h5>
              <div class="info-row">
                <span class="label">Receipt No:</span>
                <span class="value">{{ safeReceiptData.receiptNumber || '-' }}</span>
              </div>
              <div class="info-row">
                <span class="label">Booking Date:</span>
                <span class="value">{{ formatDate(safeReceiptData.bookingDate) }}</span>
              </div>
              <div class="info-row">
                <span class="label">Received Date:</span>
                <span class="value">{{ formatDate(safeReceiptData.receivedDate) }}</span>
              </div>
              <div class="info-row">
                <span class="label">Reference No:</span>
                <span class="value">{{ safeReceiptData.referenceNumber || '-' }}</span>
              </div>
            </div>
            <div class="info-section">
              <h5>Payment Information:</h5>
              <div class="info-row">
                <span class="label">Payment Method:</span>
                <span class="value">{{ getPaymentMethodName(safeReceiptData.paymentId) }}</span>
              </div>
              <div class="info-row">
                <span class="label">Currency:</span>
                <span class="value">{{ getCurrencyInfo }}</span>
              </div>
              <div class="info-row">
                <span class="label">Exchange Rate:</span>
                <span class="value">{{ formatNumber(safeReceiptData.exchangeRate) }}</span>
              </div>
              <div v-if="safeReceiptData.invoiceHeaderId" class="info-row">
                <span class="label">Invoice Ref:</span>
                <span class="value">{{ getInvoiceNumber }}</span>
              </div>
            </div>
          </div>

          <!-- Allocation Lines Table -->
          <table class="receipt-table">
            <thead>
              <tr>
                <th width="5%">#</th>
                <th width="35%">Description</th>
                <th width="15%">Transaction Code</th>
                <th width="10%" class="text-right">DR Account</th>
                <th width="10%" class="text-right">CR Account</th>
                <th width="10%" class="text-center">Date</th>
                <th width="15%" class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(line, index) in safeAllocationLines" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ line.description || '-' }}</td>
                <td>{{ getTransactionCode(line.txnId) }}</td>
                <td class="text-right">{{ getGLAccount(line.DRglAccountId) }}</td>
                <td class="text-right">{{ getGLAccount(line.CRglAccountId) }}</td>
                <td class="text-center">{{ formatDate(line.allocationDate) }}</td>
                <td class="text-right">{{ formatCurrency(line.allocatedAmount) }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="total-row">
                <td colspan="6" class="text-right"><strong>Total Amount Received:</strong></td>
                <td class="text-right"><strong>{{ formatCurrency(totalAmount) }}</strong></td>
              </tr>
            </tfoot>
          </table>

          <!-- Amount in Words -->
          <div class="amount-words">
            <strong>Amount in Words:</strong> {{ amountInWords }}
          </div>

          <!-- Notes -->
          <div v-if="safeReceiptData.notes" class="receipt-notes">
            <strong>Notes:</strong> {{ safeReceiptData.notes }}
          </div>

          <!-- Signatures -->
          <div class="signature-section">
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Received By</p>
              <p class="signature-name">{{ receivedBy }}</p>
              <p class="signature-date">{{ formatDate(safeReceiptData.receivedDate) }}</p>
            </div>
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Prepared By</p>
              <p class="signature-name">{{ preparedBy }}</p>
              <p class="signature-date">{{ formatDate(safeReceiptData.bookingDate) }}</p>
            </div>
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Authorized By</p>
              <p class="signature-name">_________________</p>
              <p class="signature-date">Date: ___________</p>
            </div>
          </div>
        </div>
      </v-card-text>

      <!-- Actions - Fixed at bottom -->
      <v-card-actions class="pa-4 flex-shrink-0">
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">
          <v-icon left>mdi-close</v-icon>
          ປິດ
        </v-btn>
        <v-btn color="primary" @click="printReceipt">
          <v-icon left>mdi-printer</v-icon>
          ພິມ
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Empty/Loading State -->
    <v-card v-else class="d-flex flex-column" style="height: 100vh;">
      <v-card-text class="text-center pa-8">
        <v-progress-circular
          v-if="visible"
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
        <v-icon v-else size="64" color="grey lighten-1">
          mdi-file-document-outline
        </v-icon>
        <p class="mt-4 grey--text">
          {{ visible ? 'ກຳລັງໂຫຼດຂໍ້ມູນ...' : 'ບໍ່ມີຂໍ້ມູນສຳລັບພິມ' }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">ປິດ</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { hostName, mainCompanyInfoV1, mainCompanyInfo } from '~/common/api'
import companyLogoMixin from '~/mixins/companyLogoMixin'

export default {
  name: 'ARReceivePrinterWithLogo',
  
  mixins: [companyLogoMixin],
  
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    receiptData: {
      type: Object,
      required: false,
      default: null
    },
    paymentMethods: {
      type: Array,
      default: () => []
    },
    currencies: {
      type: Array,
      default: () => []
    },
    transactionCodes: {
      type: Array,
      default: () => []
    },
    glAccounts: {
      type: Array,
      default: () => []
    },
    invoices: {
      type: Array,
      default: () => []
    },
    companyDataV1: {
      type: Object,
      default: () => ({})
    }
  },
  
  computed: {
    companyDataV1() {
      console.log(
        `**********COMPANY DATA V1 PDFINVOICE ${mainCompanyInfo}**********`
      )
      let comV1 = mainCompanyInfoV1(this.$store)
      console.info(`Company data fetch from api V1 ${comV1}`)
      return comV1
    },

    hasValidData() {
      return this.receiptData && this.receiptData.id
    },
    
    safeReceiptData() {
      return this.receiptData || {}
    },
    
    safeAllocationLines() {
      return this.safeReceiptData.allocationLines || this.safeReceiptData.receiveLines || []
    },
    
    // Company information
    companyName() {
      return this.companyDataV1.name
    },

    companyAddress() {
      return this.companyDataV1.address
    },

    companyContact() {
      const tel = this.companyDataV1?.tel || '+856 20 XXXX XXXX'
      const email = this.companyDataV1?.email || 'info@company.com'
      return `Tel: ${tel} | Email: ${email}`
    },
    
    receivedBy() {
      return this.safeReceiptData.receivedBy?.cus_name || 
             this.safeReceiptData.inputter?.cus_name || 
             '-'
    },
    
    preparedBy() {
      return this.safeReceiptData.inputter?.cus_name || 
             this.safeReceiptData.preparedBy?.cus_name || 
             '-'
    },
    
    getCurrencyInfo() {
      const currencyId = this.safeReceiptData.currencyId
      if (!currencyId) return 'USD'
      
      const currency = this.currencies.find(c => c.id === currencyId)
      return currency ? `${currency.name} (${currency.code})` : 'USD'
    },
    
    getInvoiceNumber() {
      const invoiceId = this.safeReceiptData.invoiceHeaderId
      if (!invoiceId) return '-'
      
      const invoice = this.invoices.find(inv => inv.id === invoiceId)
      return invoice?.invoiceNumber || '-'
    },
    
    totalAmount() {
      return this.safeAllocationLines.reduce((sum, line) => {
        return sum + (parseFloat(line.allocatedAmount) || 0)
      }, 0)
    },
    
    amountInWords() {
      return this.numberToWords(this.totalAmount) + ' Only'
    }
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        // Load the first company logo when dialog opens
        this.loadFirstCompanyLogo()
      }
    }
  },
  
  methods: {
    getPaymentMethodName(paymentId) {
      if (!paymentId) return '-'
      const method = this.paymentMethods.find(m => m.id === paymentId)
      return method?.name || method?.methodName || '-'
    },
    
    getTransactionCode(txnId) {
      if (!txnId) return '-'
      const txn = this.transactionCodes.find(t => t.id === txnId)
      return txn?.code || txn?.transactionCode || '-'
    },
    
    getGLAccount(accountId) {
      if (!accountId) return '-'
      const account = this.glAccounts.find(a => a.id === accountId)
      return account?.accountCode || account?.code || '-'
    },
    
    formatDate(date) {
      if (!date) return '-'
      try {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short', 
          day: 'numeric'
        })
      } catch {
        return '-'
      }
    },
    
    formatNumber(value) {
      if (!value && value !== 0) return '0'
      return parseFloat(value).toLocaleString()
    },
    
    formatCurrency(value) {
      if (!value && value !== 0) return '$0.00'
      return `$${parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`
    },
    
    numberToWords(num) {
      // Simplified number to words conversion
      if (num === 0) return 'Zero'
      if (num < 1000) return `${Math.floor(num)} Dollars`
      if (num < 1000000) return `${Math.floor(num / 1000)} Thousand Dollars`
      return `${Math.floor(num / 1000000)} Million Dollars`
    },
    
    printReceipt() {
      const printContent = document.getElementById('receipt-print-area')
      if (!printContent) {
        this.$toast.error('Print content not found')
        return
      }
      
      const printWindow = window.open('', '_blank')
      printWindow.document.write(`
        <html>
        <head>
          <title>Payment Receipt - ${this.safeReceiptData.receiptNumber}</title>
          <style>
            * { 
              margin: 0; 
              padding: 0; 
              box-sizing: border-box; 
            }
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.4; 
              color: #333; 
            }
            .receipt-container { 
              background: white; 
              padding: 20px; 
              max-width: 900px; 
              margin: 0 auto; 
            }
            .receipt-header { 
              margin-bottom: 20px; 
              border-bottom: 3px solid primary; 
              padding-bottom: 15px; 
            }
            .header-flex { 
              display: flex; 
              align-items: center; 
              justify-content: space-between; 
              gap: 20px; 
            }
            .header-left { 
              flex-shrink: 0; 
            }
            .header-center { 
              flex: 1; 
              text-align: left; 
            }
            .header-right { 
              flex-shrink: 0; 
              text-align: right; 
            }
            .company-logo { 
              width: 100px; 
              height: auto; 
              object-fit: contain; 
              display: block; 
              max-height: 80px; 
            }
            .company-name { 
              margin: 0 0 8px 0; 
              font-size: 20px; 
              font-weight: bold; 
              color: primary; 
            }
            .company-address, .company-contact { 
              margin: 3px 0; 
              font-size: 11px; 
              color: #666; 
            }
            .receipt-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px; 
              color: #333; 
            }
            .receipt-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .receipt-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              margin: 20px 0; 
            }
            .info-section h5 { 
              margin: 0 0 10px; 
              font-size: 14px; 
              font-weight: bold; 
              border-bottom: 1px solid #ddd; 
              padding-bottom: 5px; 
            }
            .info-row { 
              padding: 3px 0; 
              font-size: 12px; 
            }
            .label { 
              font-weight: bold; 
              margin-right: 10px; 
            }
            .receipt-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .receipt-table th, .receipt-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .receipt-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .receipt-table .text-center { 
              text-align: center; 
            }
            .receipt-table .text-right { 
              text-align: right; 
            }
            .total-row td { 
              background-color: #f9f9f9; 
              font-size: 12px; 
            }
            .amount-words { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
              border-left: 3px solid primary; 
            }
            .receipt-notes { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #fff9e6; 
            }
            .signature-section { 
              display: flex; 
              justify-content: space-between; 
              margin-top: 40px; 
              page-break-inside: avoid; 
            }
            .signature-box { 
              text-align: center; 
              flex: 1; 
            }
            .signature-line { 
              border-top: 1px solid #000; 
              margin: 60px 20px 10px; 
            }
            .signature-label { 
              font-weight: bold; 
              margin: 5px 0; 
            }
            .signature-name { 
              margin: 5px 0; 
            }
            .signature-date { 
              font-size: 11px; 
              color: #666; 
            }
          }
        </style>
      `)
      printWindow.document.write('</head><body>')
      printWindow.document.write(printContent.innerHTML)
      printWindow.document.write('</body></html>')
      printWindow.document.close()
      
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)
    }
  }
}
</script>

<style scoped>
.receipt-container {
  background: white;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.receipt-header {
  margin-bottom: 30px;
  border-bottom: 3px solid primary;
  padding-bottom: 15px;
}

.header-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.header-left {
  flex-shrink: 0;
}

.header-center {
  flex: 1;
  text-align: left;
}

.header-right {
  flex-shrink: 0;
  text-align: right;
}

.logo-placeholder {
  width: 120px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ddd;
  border-radius: 4px;
}

.company-logo {
  width: 120px;
  height: auto;
  object-fit: contain;
  display: block;
  max-height: 100px;
  border-radius: 4px;
}

.company-name {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: bold;
  color: primary;
}

.company-address,
.company-contact {
  margin: 5px 0;
  font-size: 13px;
  color: #666;
}

.receipt-title h3 {
  margin: 0 0 5px 0;
  font-size: 20px;
  color: #333;
}

.receipt-title h4 {
  margin: 0;
  font-size: 16px;
  color: #666;
}

.receipt-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 25px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.info-section h5 {
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

.info-row {
  display: flex;
  padding: 5px 0;
  font-size: 12px;
}

.label {
  font-weight: 600;
  color: #333;
  min-width: 120px;
}

.value {
  color: #666;
}

.receipt-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 13px;
}

.receipt-table th,
.receipt-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.receipt-table th {
  background-color: primary;
  color: white;
  font-weight: 600;
  text-align: left;
}

.receipt-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.receipt-table .text-center {
  text-align: center;
}

.receipt-table .text-right {
  text-align: right;
}

.total-row td {
  background-color: #e8f5e9;
  font-weight: bold;
  font-size: 14px;
}

.amount-words {
  margin: 20px 0;
  padding: 15px;
  background-color: #f0f4ff;
  border-left: 4px solid primary;
  font-size: 14px;
}

.receipt-notes {
  margin: 20px 0;
  padding: 15px;
  background-color: #fff9e6;
  border-radius: 4px;
  font-size: 13px;
}

.signature-section {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  gap: 40px;
}

.signature-box {
  text-align: center;
  flex: 1;
}

.signature-line {
  border-top: 2px solid #333;
  margin: 80px 10px 15px;
}

.signature-label {
  font-weight: 600;
  margin: 8px 0;
  font-size: 13px;
  color: #333;
}

.signature-name {
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
}

.signature-date {
  font-size: 12px;
  color: #666;
}

@media print {
  .receipt-container {
    padding: 20px;
  }
  
  .company-logo {
    width: 100px;
    max-height: 80px;
  }
}
</style>