<template>
  <v-dialog
    :value="visible"
    @input="(val) => !val && $emit('close')"
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
        <span>ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ - AP Invoice Voucher</span>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <!-- Print Area -->
      <v-card-text class="pa-0">
        <div id="ap-invoice-print-area" class="invoice-container">
          <!-- Company Header -->
          <div class="invoice-header">
            <div class="header-flex">
              <!-- Left Side - Company Logo (Dynamic) -->
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

              <!-- Right Side - Voucher Title -->
              <div class="header-right">
                <div class="invoice-title">
                  <h3>AP INVOICE VOUCHER</h3>
                  <h4>ໃບສະເໜີຈ່າຍ</h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Invoice Info Grid -->
          <div class="invoice-info-grid">
            <div class="info-section">
              <h5>Vendor Info / ຜູ້ສະໜອງ:</h5>
              <div v-if="safeInvoiceData.vendor">
                <p class="client-name">{{ safeInvoiceData.vendor.name }}</p>
                <p class="client-details" v-if="safeInvoiceData.vendor.address">
                  {{ safeInvoiceData.vendor.address }}
                </p>
                <p class="client-details" v-if="safeInvoiceData.vendor.phone">
                  Tel: {{ safeInvoiceData.vendor.phone }}
                </p>
              </div>
              <div v-else-if="safeInvoiceData.agency">
                <p class="client-name">{{ safeInvoiceData.agency.agencyName }}</p>
                <p class="client-details">Code: {{ safeInvoiceData.agency.agencyCode }}</p>
              </div>
              <div v-else>
                <p class="client-name italic grey--text">ບໍ່ໄດ້ລະບຸ</p>
              </div>
            </div>
            <div class="info-section">
              <div class="info-row">
                <span class="label">Invoice No:</span>
                <span class="value font-weight-bold">{{
                  safeInvoiceData.invoiceNumber || '-'
                }}</span>
              </div>
              <div class="info-row">
                <span class="label">Vendor Inv No:</span>
                <span class="value">{{
                  safeInvoiceData.vendorInvoiceNumber || '-'
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
                <span class="value">
                  <v-chip x-small :color="getStatusColor(safeInvoiceData.status)" dark class="font-weight-bold">
                    {{ getStatusInLao(safeInvoiceData.status) }}
                  </v-chip>
                </span>
              </div>
            </div>
          </div>

          <!-- Line Items Table -->
          <table class="invoice-table">
            <thead>
              <tr style="background-color: #1976D2; color: white;">
                <th width="5%">#</th>
                <th width="20%">Txn Code</th>
                <th width="40%">Description</th>
                <th width="10%" class="text-right">Quantity</th>
                <th width="10%" class="text-right">Unit Price</th>
                <th width="15%" class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(line, index) in lines" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ getTransactionCode(line.txnId) }}</td>
                <td>{{ line.description || '-' }}</td>
                <td class="text-right">{{ formatNumber(line.quantity) }}</td>
                <td class="text-right">{{ formatCurrency(line.unitPrice) }}</td>
                <td class="text-right font-weight-bold">{{ formatCurrency(line.lineTotal || (line.quantity * line.unitPrice)) }}</td>
              </tr>
              <tr v-if="lines.length === 0">
                <td colspan="6" class="text-center py-4 grey--text italic">
                  ບໍ່ມີລາຍການສິນຄ້າ
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="subtotal-row">
                <td colspan="5" class="text-right">
                  <strong>Total Amount / ຍອດລວມ:</strong>
                </td>
                <td class="text-right font-weight-bold">
                  {{ formatCurrency(safeInvoiceData.totalAmount) }} {{ getCurrencyCode }}
                </td>
              </tr>
              <tr class="tax-row">
                <td colspan="5" class="text-right">
                  <strong>Paid Amount / ຈ່າຍແລ້ວ:</strong>
                </td>
                <td class="text-right success--text">
                  {{ formatCurrency(safeInvoiceData.paidAmount) }} {{ getCurrencyCode }}
                </td>
              </tr>
              <tr class="total-row" style="background-color: #ffebee;">
                <td colspan="5" class="text-right">
                  <strong class="red--text">Outstanding / ຄ້າງຈ່າຍ:</strong>
                </td>
                <td class="text-right red--text font-weight-bold">
                  {{ formatCurrency(getOutstandingAmount(safeInvoiceData)) }} {{ getCurrencyCode }}
                </td>
              </tr>
            </tfoot>
          </table>

          <!-- Amount in Words -->
          <div class="amount-words">
            <strong>Amount in Words:</strong> {{ amountInWords }} {{ getCurrencyCode }}
          </div>

          <!-- Notes -->
          <div v-if="safeInvoiceData.description" class="invoice-notes">
            <strong>Notes / ໝາຍເຫດ:</strong> {{ safeInvoiceData.description }}
          </div>

          <!-- Signatures -->
          <div class="signature-section">
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Prepared By (ຜູ້ບັນທຶກ)</p>
              <p class="signature-name">{{ makerName }}</p>
              <p class="signature-date">
                Date: {{ formatDate(safeInvoiceData.createdAt) }}
              </p>
            </div>
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Approved By (ຜູ້ອະນຸມັດ)</p>
              <p class="signature-name">_________________</p>
              <p class="signature-date">Date: ___________</p>
            </div>
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Received By (ຜູ້ຮັບເງິນ)</p>
              <p class="signature-name">_________________</p>
              <p class="signature-date">Date: ___________</p>
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
import { mainCompanyInfoV1 } from '~/common/api'
import companyLogoMixin from '~/mixins/companyLogoMixin'

export default {
  name: 'APInvoicePrinter',

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
    currencies: {
      type: Array,
      default: () => [],
    },
    transactionCodes: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      lines: [],
      loadingLines: false,
    }
  },

  computed: {
    companyDataV1() {
      return mainCompanyInfoV1(this.$store)
    },

    hasValidData() {
      return this.invoiceData && this.invoiceData.id
    },

    safeInvoiceData() {
      return this.invoiceData || {}
    },

    companyName() {
      return this.companyDataV1?.name || ''
    },

    companyAddress() {
      return this.companyDataV1?.address || ''
    },

    companyContact() {
      const tel = this.companyDataV1?.tel || '+856 20 XXXX XXXX'
      const email = this.companyDataV1?.email || 'info@company.com'
      return `Tel: ${tel} | Email: ${email}`
    },

    makerName() {
      return this.safeInvoiceData.maker?.cus_name || '-'
    },

    getCurrencyCode() {
      const currencyId = this.safeInvoiceData.currencyId
      if (!currencyId) return 'LAK'
      const curr = this.currencies.find(c => c.id === currencyId)
      return curr ? curr.code : 'LAK'
    },

    amountInWords() {
      const amount = parseFloat(this.safeInvoiceData.totalAmount || 0)
      if (amount === 0) return 'Zero Only'
      return `${this.formatCurrency(amount)} Only`
    },
  },

  watch: {
    async visible(newVal) {
      if (newVal) {
        this.loadFirstCompanyLogo()
        await this.loadInvoiceLines()
      }
    },
  },

  methods: {
    async loadInvoiceLines() {
      if (!this.invoiceData?.id) return
      this.loadingLines = true
      try {
        const { data } = await this.$axios.get(`/api/ap-invoices-lines/invoice/${this.invoiceData.id}`)
        this.lines = data.data || []
      } catch (error) {
        console.error('Error loading AP invoice lines:', error)
        this.lines = []
      } finally {
        this.loadingLines = false
      }
    },

    getOutstandingAmount(invoice) {
      return (
        parseFloat(invoice.totalAmount || 0) -
        parseFloat(invoice.paidAmount || 0)
      )
    },

    getStatusInLao(status) {
      const statusLabels = {
        draft: 'ຮ່າງ',
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        partially_paid: 'ຊຳລະບາງສ່ວນ',
        paid: 'ຊຳລະແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusLabels[status] || status || 'N/A'
    },

    getStatusColor(status) {
      const colors = {
        draft: 'grey',
        pending: 'orange',
        approved: 'green',
        partially_paid: 'blue',
        paid: 'teal',
        overdue: 'red',
        cancelled: 'grey darken-2',
      }
      return colors[status] || 'grey'
    },

    getTransactionCode(id) {
      if (!id) return '-'
      const txn = this.transactionCodes.find((t) => t.id === id)
      return txn ? `${txn.code} - ${txn.description}` : '-'
    },

    formatDate(date) {
      if (!date) return '-'
      try {
        return new Date(date).toLocaleDateString('en-GB')
      } catch {
        return '-'
      }
    },

    formatNumber(value) {
      if (!value && value !== 0) return '0'
      return parseFloat(value).toLocaleString()
    },

    formatCurrency(value) {
      if (!value && value !== 0) return '0.00'
      return parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },

    printInvoice() {
      const printContent = document.getElementById('ap-invoice-print-area')
      if (!printContent) {
        this.$toast?.error('Print content not found')
        return
      }

      const printWindow = window.open('', '_blank')
      if (!printWindow) {
        this.$toast?.error('Please allow popups for this site.')
        return
      }

      printWindow.document.write(`
        <html>
        <head>
          <title>AP Invoice Voucher - ${this.safeInvoiceData.invoiceNumber}</title>
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
              border-bottom: 3px solid #1976D2;
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
              max-height: 80px;
            }
            .company-name { 
              margin: 0 0 5px 0; 
              font-size: 22px; 
              font-weight: bold;
              color: #1976D2;
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
              font-weight: bold;
              font-size: 12px;
            }
            .client-details {
              font-size: 11px;
              color: #666;
            }
            .info-row { 
              padding: 3px 0; 
              font-size: 11px;
            }
            .label { 
              font-weight: bold; 
              margin-right: 10px; 
              min-width: 120px;
              display: inline-block;
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
            .subtotal-row td, .tax-row td { 
              background-color: #f9f9f9; 
            }
            .total-row td {
              background-color: #ffebee;
            }
            .amount-words { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
              border-left: 3px solid #1976D2; 
              font-size: 12px;
            }
            .invoice-notes { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #fff9e6; 
              font-size: 11px;
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
              font-size: 11px;
            }
            .signature-name { 
              margin: 5px 0; 
              font-size: 11px;
            }
            .signature-date { 
              font-size: 10px; 
              color: #666; 
            }
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
.invoice-container {
  background: white;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.invoice-header {
  margin-bottom: 30px;
  border-bottom: 3px solid #1976D2;
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
  color: #1976D2;
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
  min-width: 120px;
}

.value {
  color: #666;
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
  background-color: #1976D2;
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
  background-color: #ffebee;
  font-weight: bold;
  font-size: 14px;
}

.amount-words {
  margin: 20px 0;
  padding: 15px;
  background-color: #f0f4ff;
  border-left: 4px solid #1976D2;
  font-size: 14px;
}

.invoice-notes {
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
  .invoice-container {
    padding: 20px;
  }

  .company-logo {
    width: 100px;
    max-height: 80px;
  }
}
</style>
