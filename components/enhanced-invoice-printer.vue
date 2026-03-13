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
              <!-- Left Side - Dynamic Company Logo -->
              <div class="header-left">
                <div v-if="companyLogo.loading" class="logo-placeholder">
                  <v-progress-circular
                    indeterminate
                    size="24"
                    color="primary"
                  ></v-progress-circular>
                </div>
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
import {  mainCompanyInfoV1, mainCompanyInfo } from '~/common/api'
import companyLogoMixin from '~/mixins/companyLogoMixin'

export default {
  name: 'ARInvoicePrinterWithLogo',
  
  mixins: [companyLogoMixin],

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
      return this.numberToWords(this.totalAmount) + ' Only'
    },
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
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; line-height: 1.4; color: #333; }
            .invoice-container { background: white; padding: 20px; max-width: 900px; margin: 0 auto; }
            .invoice-header { margin-bottom: 20px; border-bottom: 3px solid primary; padding-bottom: 15px; }
            .header-flex { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
            .company-logo { width: 100px; height: auto; object-fit: contain; display: block; max-height: 80px; }
            .company-name { margin: 0 0 8px 0; font-size: 20px; font-weight: bold; color: primary; }
            .invoice-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            .invoice-table th, .invoice-table td { border: 1px solid #ddd; padding: 8px; font-size: 11px; }
            .invoice-table th { background-color: #f5f5f5; font-weight: bold; text-align: left; }
            /* Add other necessary print styles here */
          </style>
        </head>
        <body>
      `)
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
/* Same styles as before with addition for logo placeholder */
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

/* Rest of your existing styles... */
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

/* Add rest of your styles here... */
</style>