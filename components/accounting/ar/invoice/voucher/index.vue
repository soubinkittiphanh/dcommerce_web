<template>
  <v-dialog
    v-model="visible"
    fullscreen
    persistent
    scrollable
    transition="dialog-bottom-transition"
  >
    <!-- Main Card - Only show when data is valid -->
    <v-card v-if="hasValidData">
      <!-- Header -->
      <v-card-title class="primary white--text py-3">
        <v-icon left color="white">mdi-printer</v-icon>
        <span>ໃບແຈ້ງໜີ້ - Invoice</span>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <!-- Print Area -->
      <v-card-text class="pa-0">
        <div id="invoice-print-area" class="invoice-container">
          <!-- Company Header -->
          <div class="invoice-header">
            <div class="header-flex">
              <!-- Left Side - Company Logo (Dynamic) -->
              <div class="header-left">
                <!-- Dynamic Company Logo -->
                <img
                  v-if="companyLogoUrl"
                  :src="companyLogoUrl"
                  alt="Company Logo"
                  class="company-logo"
                  @error="onLogoError"
                />
                <!-- Fallback Logo -->
                <img
                  v-else
                  :src="fallbackLogoUrl"
                  alt="Company Logo"
                  class="company-logo fallback-logo"
                />
              </div>

              <!-- Center - Company Info -->
              <div class="header-center">
                <h2 class="company-name">{{ companyName }}</h2>
                <p class="company-address">{{ companyAddress }}</p>
                <p class="company-contact">{{ companyContact }}</p>
              </div>

              <!-- Right Side - Invoice Title -->
              <div class="header-right">
                <div class="invoice-title">
                  <h3>INVOICE</h3>
                  <h4>ໃບແຈ້ງໜີ້</h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Invoice Info Grid -->
          <div class="invoice-info-grid">
            <div class="info-section">
              <h5>Bill To:</h5>
              <p class="client-name">{{ getClientName }}</p>
              <p class="client-details">{{ getClientDetails }}</p>
            </div>
            <div class="info-section">
              <div class="info-row">
                <span class="label">Invoice No:</span>
                <span class="value">{{
                  safeInvoiceData.invoiceNumber || '-'
                }}</span>
              </div>
              <div class="info-row">
                <span class="label">Invoice Date:</span>
                <span class="value">{{
                  formatDate(safeInvoiceData.invoiceDate)
                }}</span>
              </div>
              <div class="info-row">
                <span class="label">Due Date:</span>
                <span class="value">{{
                  formatDate(safeInvoiceData.dueDate)
                }}</span>
              </div>
              <div class="info-row">
                <span class="label">Status:</span>
                <span :class="['status-badge', safeInvoiceData.status]">
                  {{ getStatusLabel(safeInvoiceData.status) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Line Items Table -->
          <table class="invoice-table">
            <thead>
              <tr>
                <th width="5%">#</th>
                <th width="40%">Description</th>
                <th width="10%" class="text-right">Quantity</th>
                <th width="15%" class="text-right">Unit Price</th>
                <th width="10%" class="text-right">Tax</th>
                <th width="20%" class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(line, index) in safeLineItems" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ line.description || '-' }}</td>
                <td class="text-right">{{ formatNumber(line.quantity) }}</td>
                <td class="text-right">{{ formatCurrency(line.unitPrice) }}</td>
                <td class="text-right">{{ formatCurrency(line.taxAmount) }}</td>
                <td class="text-right">{{ formatCurrency(line.lineTotal) }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="subtotal-row">
                <td colspan="5" class="text-right">
                  <strong>Subtotal:</strong>
                </td>
                <td class="text-right">
                  <strong>{{ formatCurrency(subtotal) }}</strong>
                </td>
              </tr>
              <tr class="tax-row">
                <td colspan="5" class="text-right">
                  <strong>Total Tax:</strong>
                </td>
                <td class="text-right">
                  <strong>{{ formatCurrency(totalTax) }}</strong>
                </td>
              </tr>
              <tr class="total-row">
                <td colspan="5" class="text-right">
                  <strong>Total Amount:</strong>
                </td>
                <td class="text-right">
                  <strong>{{ formatCurrency(totalAmount) }}</strong>
                </td>
              </tr>
            </tfoot>
          </table>

          <!-- Amount in Words -->
          <div class="amount-words">
            <strong>Amount in Words:</strong> {{ amountInWords }}
          </div>

          <!-- Description/Notes -->
          <div v-if="safeInvoiceData.description" class="invoice-notes">
            <strong>Notes:</strong> {{ safeInvoiceData.description }}
          </div>

          <!-- Footer Info -->
          <div class="invoice-footer">
            <div class="footer-section">
              <p><strong>Payment Terms:</strong> {{ paymentTerms }}</p>
              <p><strong>Currency:</strong> {{ getCurrencyInfo }}</p>
            </div>
            <div class="footer-section signature-area">
              <div class="signature-line"></div>
              <p class="signature-label">Authorized Signature</p>
              <p class="signature-date">
                Date: {{ formatDate(safeInvoiceData.invoiceDate) }}
              </p>
            </div>
          </div>
        </div>
      </v-card-text>

      <!-- Actions -->
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">
          <v-icon left>mdi-close</v-icon>
          ປິດ
        </v-btn>
        <v-btn color="primary" @click="printInvoice">
          <v-icon left>mdi-printer</v-icon>
          ພິມ
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Empty/Loading State -->
    <v-card v-else>
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

export default {
  name: 'ARInvoicePrinter',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    invoiceData: {
      type: Object,
      required: false,
      default: null,
    },
    agencies: {
      type: Array,
      default: () => [],
    },
    currencies: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      logoLoadError: false,
      companies: [], // Store companies list
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
      return this.invoiceData && this.invoiceData.id
    },

    safeInvoiceData() {
      return this.invoiceData || {}
    },

    safeLineItems() {
      return this.safeInvoiceData.lineItems || []
    },

    // Company Logo Logic
    firstCompanyWithImage() {
      return this.companies.find(company => 
        company.profile_image_path && 
        company.isActive
      )
    },

    companyLogoUrl() {
      if (this.logoLoadError) return null
      
      const firstCompany = this.firstCompanyWithImage
      if (firstCompany && firstCompany.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        return `${baseUrl}/${firstCompany.profile_image_path}`
      }
      return null
    },

    fallbackLogoUrl() {
      // Return your default logo
      return require('@/assets/image/MPWT/PWT.png')
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

    getClientName() {
      const agencyId = this.safeInvoiceData.agencyId
      if (!agencyId) return '-'

      const agency = this.agencies.find((a) => a.id === agencyId)
      return agency?.agencyName || agency?.name || '-'
    },

    getClientDetails() {
      const agencyId = this.safeInvoiceData.agencyId
      if (!agencyId) return ''

      const agency = this.agencies.find((a) => a.id === agencyId)
      if (!agency) return ''

      const parts = []
      if (agency.address) parts.push(agency.address)
      if (agency.phone) parts.push(`Tel: ${agency.phone}`)
      if (agency.email) parts.push(`Email: ${agency.email}`)

      return parts.join(' | ')
    },

    getCurrencyInfo() {
      const currencyId = this.safeInvoiceData.currencyId
      if (!currencyId) return 'USD'

      const currency = this.currencies.find((c) => c.id === currencyId)
      return currency ? `${currency.name} (${currency.code})` : 'USD'
    },

    paymentTerms() {
      const invoiceDate = new Date(this.safeInvoiceData.invoiceDate)
      const dueDate = new Date(this.safeInvoiceData.dueDate)

      if (!isNaN(invoiceDate) && !isNaN(dueDate)) {
        const days = Math.round((dueDate - invoiceDate) / (1000 * 60 * 60 * 24))
        return `Net ${days} days`
      }

      return 'Net 30 days'
    },

    subtotal() {
      return this.safeLineItems.reduce((sum, line) => {
        const qty = parseFloat(line.quantity) || 0
        const price = parseFloat(line.unitPrice) || 0
        return sum + qty * price
      }, 0)
    },

    totalTax() {
      return this.safeLineItems.reduce(
        (sum, line) => sum + (parseFloat(line.taxAmount) || 0),
        0
      )
    },

    totalAmount() {
      return this.safeLineItems.reduce(
        (sum, line) => sum + (parseFloat(line.lineTotal) || 0),
        0
      )
    },

    amountInWords() {
      // Implement your number-to-words conversion
      return this.numberToWords(this.totalAmount) + ' Only'
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.loadCompanies()
      }
    }
  },

  methods: {
    // Load companies to get the first one with image
    async loadCompanies() {
      try {
        const response = await this.$axios.get('/api/company/findAll')
        this.companies = Array.isArray(response.data) ? response.data : []
        console.log('Companies loaded for invoice:', this.companies.length)
      } catch (error) {
        console.error('Error loading companies for invoice:', error)
        this.companies = []
      }
    },

    onLogoError() {
      console.warn('Company logo failed to load, using fallback')
      this.logoLoadError = true
    },

    getStatusLabel(status) {
      const labels = {
        draft: 'Draft',
        sent: 'Sent',
        paid: 'Paid',
        overdue: 'Overdue',
      }
      return labels[status] || status || 'Unknown'
    },

    formatDate(date) {
      if (!date) return '-'
      try {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
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
      return `${parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`
    },

    numberToWords(num) {
      // Simplified number to words - you can expand this
      if (num === 0) return 'Zero'
      if (num < 1000) return `${Math.floor(num)} ${this.getCurrencyInfo}`
      if (num < 1000000) return `${Math.floor(num / 1000)} Thousand ${this.getCurrencyInfo}`
      return `${Math.floor(num / 1000000)} Million ${this.getCurrencyInfo}`
    },

    printInvoice() {
      const printContent = document.getElementById('invoice-print-area')
      if (!printContent) {
        this.$toast.error('Print content not found')
        return
      }

      const printWindow = window.open('', '_blank')
      printWindow.document.write(`
        <html>
        <head>
          <title>Invoice - ${this.safeInvoiceData.invoiceNumber}</title>
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
            .invoice-container { 
              background: white; 
              padding: 20px; 
              max-width: 900px; 
              margin: 0 auto; 
            }
            .invoice-header { 
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
            .invoice-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px; 
              color: #333; 
            }
            .invoice-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .invoice-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              margin: 20px 0; 
              padding: 15px; 
              background-color: #f9f9f9; 
              border-radius: 4px; 
            }
            .info-section h5 { 
              margin: 0 0 10px; 
              font-size: 12px; 
              font-weight: 600; 
              color: #333; 
              border-bottom: 1px solid #ddd; 
              padding-bottom: 5px; 
            }
            .client-name { 
              font-weight: 600; 
              font-size: 12px; 
              margin: 5px 0; 
            }
            .client-details { 
              font-size: 10px; 
              color: #666; 
              margin: 5px 0; 
            }
            .info-row { 
              display: flex; 
              padding: 3px 0; 
              font-size: 10px; 
            }
            .label { 
              font-weight: 600; 
              color: #333; 
              min-width: 80px; 
            }
            .value { 
              color: #666; 
            }
            .status-badge { 
              display: inline-block; 
              padding: 2px 8px; 
              border-radius: 10px; 
              font-size: 9px; 
              font-weight: 600; 
            }
            .status-badge.paid { 
              background: #d4edda; 
              color: #155724; 
            }
            .status-badge.sent { 
              background: #d1ecf1; 
              color: #0c5460; 
            }
            .status-badge.draft { 
              background: #f8f9fa; 
              color: #6c757d; 
            }
            .status-badge.overdue { 
              background: #f8d7da; 
              color: #721c24; 
            }
            .invoice-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .invoice-table th, .invoice-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .invoice-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .invoice-table .text-center { 
              text-align: center; 
            }
            .invoice-table .text-right { 
              text-align: right; 
            }
            .subtotal-row td, .tax-row td, .total-row td { 
              background-color: #f9f9f9; 
              font-size: 12px; 
            }
            .amount-words { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
              border-left: 3px solid primary; 
            }
            .invoice-notes { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #fff9e6; 
            }
            .invoice-footer { 
              display: flex; 
              justify-content: space-between; 
              margin-top: 40px; 
              padding-top: 20px; 
              border-top: 1px solid #ddd; 
            }
            .footer-section { 
              font-size: 12px; 
            }
            .signature-line { 
              border-top: 1px solid #000; 
              margin: 60px 20px 10px; 
              width: 200px; 
            }
            .signature-label { 
              font-weight: bold; 
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
    },
  },
}
</script>

<style scoped>
.invoice-container {
  background: white;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.invoice-header {
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

.company-logo {
  width: 120px;
  height: auto;
  object-fit: contain;
  display: block;
  max-height: 100px;
  border-radius: 4px;
}

.fallback-logo {
  opacity: 0.8;
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

.invoice-title h3 {
  margin: 0 0 5px 0;
  font-size: 20px;
  color: #333;
}

.invoice-title h4 {
  margin: 0;
  font-size: 16px;
  color: #666;
}

.invoice-info-grid {
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

.client-name {
  font-weight: 600;
  font-size: 14px;
  margin: 5px 0;
}

.client-details {
  font-size: 12px;
  color: #666;
  margin: 5px 0;
}

.info-row {
  display: flex;
  padding: 5px 0;
  font-size: 12px;
}

.label {
  font-weight: 600;
  color: #333;
  min-width: 100px;
}

.value {
  color: #666;
}

.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.status-badge.paid {
  background: #d4edda;
  color: #155724;
}

.status-badge.sent {
  background: #d1ecf1;
  color: #0c5460;
}

.status-badge.draft {
  background: #f8f9fa;
  color: #6c757d;
}

.status-badge.overdue {
  background: #f8d7da;
  color: #721c24;
}

.invoice-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 13px;
}

.invoice-table th,
.invoice-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.invoice-table th {
  background-color: primary;
  color: white;
  font-weight: 600;
  text-align: left;
}

.invoice-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.invoice-table .text-center {
  text-align: center;
}

.invoice-table .text-right {
  text-align: right;
}

.subtotal-row td,
.tax-row td {
  background-color: #f8f9fa;
  font-weight: 500;
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

.invoice-notes {
  margin: 20px 0;
  padding: 15px;
  background-color: #fff9e6;
  border-radius: 4px;
  font-size: 13px;
}

.invoice-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.footer-section {
  font-size: 12px;
}

.footer-section p {
  margin: 5px 0;
}

.signature-area {
  text-align: center;
}

.signature-line {
  border-top: 2px solid #333;
  margin: 80px 10px 15px;
  width: 200px;
}

.signature-label {
  font-weight: 600;
  margin: 8px 0;
  font-size: 13px;
  color: #333;
}

.signature-date {
  font-size: 12px;
  color: #666;
}

@media print {
  .invoice-container {
    padding: 20px;
  }
  
  .company-logo {
    width: 100px;
    max-height: 80px;
  }
}
</style>