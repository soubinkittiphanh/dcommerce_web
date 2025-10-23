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
        <span>ໃບຄຳສັ່ງຈ່າຍ - Payment Voucher</span>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <!-- Print Area -->
      <v-card-text class="pa-0">
        <div id="voucher-print-area" class="voucher-container">
          <!-- Company Header -->
          <div class="voucher-header">
            <div class="header-flex">
              <!-- Left Side - Logo -->
              <div class="header-left">
                <img
                  :src="require('@/assets/image/MPWT/PWT.png')"
                  alt="Company Logo"
                  class="company-logo"
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
                <div class="voucher-title">
                  <h3>PAYMENT VOUCHER</h3>
                  <h4>ໃບຄຳສັ່ງຈ່າຍ</h4>
                </div>
              </div>
            </div>
          </div>

          <!-- Voucher Info -->
          <div class="voucher-info-grid">
            <div class="info-row">
              <span class="label">Voucher No:</span>
              <span class="value">{{ safeVoucherData.reference || '-' }}</span>
            </div>
            <div class="info-row">
              <span class="label">Date:</span>
              <span class="value">{{
                formatDate(safeVoucherData.settlementDate)
              }}</span>
            </div>
            <div class="info-row">
              <span class="label">Payment Method:</span>
              <span class="value">{{
                getPaymentMethodName(safeVoucherData.paymentMethodId)
              }}</span>
            </div>
            <div class="info-row">
              <span class="label">Bank Account:</span>
              <span class="value">{{
                getBankAccountInfo(safeVoucherData.bankAccountId)
              }}</span>
            </div>
          </div>

          <!-- Payment Details Table -->
          <table class="voucher-table">
            <thead>
              <tr>
                <th width="5%">#</th>
                <th width="15%">Invoice No</th>
                <th width="15%">Agency</th>
                <th width="10%">Txn Code</th>
                <th width="30%">Description</th>
                <th width="10%" class="text-right">DR</th>
                <th width="10%" class="text-right">CR</th>
                <th width="15%" class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(line, index) in safeSettlementLines" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td>{{ line.invoiceNumber || '-' }}</td>
                <td>{{ line.agencyName || line.agency?.agencyName || '-' }}</td>
                <td>{{ getTransactionCode(line.txnId) }}</td>
                <td>{{ line.description || '-' }}</td>
                <td class="text-right">
                  {{ getGLAccount(line.DRglAccountId) }}
                </td>
                <td class="text-right">
                  {{ getGLAccount(line.CRglAccountId) }}
                </td>
                <td class="text-right">{{ formatCurrency(line.amount) }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="total-row">
                <td colspan="7" class="text-right">
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

          <!-- Description -->
          <div v-if="safeVoucherData.description" class="voucher-description">
            <strong>Description:</strong> {{ safeVoucherData.description }}
          </div>

          <!-- Signatures -->
          <div class="signature-section">
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Prepared By</p>
              <p class="signature-name">{{ makerName }}</p>
              <p class="signature-date">
                {{ formatDate(safeVoucherData.createdAt) }}
              </p>
            </div>
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Approved By</p>
              <p class="signature-name">{{ checkerName }}</p>
              <p class="signature-date">
                {{
                  safeVoucherData.approvedDate
                    ? formatDate(safeVoucherData.approvedDate)
                    : ''
                }}
              </p>
            </div>
            <div class="signature-box">
              <div class="signature-line"></div>
              <p class="signature-label">Received By</p>
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
        <v-btn color="primary" @click="printVoucher">
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
  name: 'PaymentVoucherPrinter',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    voucherData: {
      type: Object,
      required: false,
      default: null,
    },
    paymentMethods: {
      type: Array,
      default: () => [],
    },
    bankAccounts: {
      type: Array,
      default: () => [],
    },
    transactionCodes: {
      type: Array,
      default: () => [],
    },
    glAccounts: {
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
    // Check if we have valid data
    hasValidData() {
      return this.voucherData && this.voucherData.id
    },

    // Safe accessor for voucher data
    safeVoucherData() {
      return this.voucherData || {}
    },

    // Safe accessor for settlement lines
    safeSettlementLines() {
      return this.safeVoucherData.settlementLines || []
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

    // Maker information
    makerName() {
      return this.safeVoucherData.maker?.cus_name || '-'
    },

    // Checker information
    checkerName() {
      return this.safeVoucherData.checker?.cus_name || '-'
    },

    // Calculate total amount
    totalAmount() {
      return this.safeSettlementLines.reduce(
        (sum, line) => sum + (parseFloat(line.amount) || 0),
        0
      )
    },

    // Amount in words
    amountInWords() {
      if (this.totalAmount === 0) return 'Zero Kip Only'
      return `${this.formatCurrency(this.totalAmount)} Kip Only`
    },
  },

  methods: {
    // Format date
    formatDate(date) {
      if (!date) return '-'
      try {
        return new Date(date).toLocaleDateString('en-GB')
      } catch (e) {
        return '-'
      }
    },

    // Format currency
    formatCurrency(amount) {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    // Get payment method name
    getPaymentMethodName(id) {
      if (!id) return '-'
      const method = this.paymentMethods.find((m) => m.id === id)
      return method?.payment_name || '-'
    },

    // Get bank account info
    getBankAccountInfo(id) {
      if (!id) return '-'
      const account = this.bankAccounts.find((a) => a.id === id)
      return account ? `${account.accountNumber} - ${account.bankName}` : '-'
    },

    // Get transaction code
    getTransactionCode(id) {
      if (!id) return '-'
      const txn = this.transactionCodes.find((t) => t.id === id)
      return txn?.code || '-'
    },

    // Get GL account
    getGLAccount(id) {
      if (!id) return '-'
      const account = this.glAccounts.find((a) => a.id === id)
      return account?.accountNumber || '-'
    },

    // Print voucher
    printVoucher() {
      if (!this.hasValidData) {
        this.$toast?.error('ບໍ່ມີຂໍ້ມູນສຳລັບພິມ')
        return
      }

      const printContent = document.getElementById('voucher-print-area')
      if (!printContent) {
        this.$toast?.error('ບໍ່ພົບເນື້ອຫາສຳລັບພິມ')
        return
      }

      const printWindow = window.open('', '', 'height=600,width=800')

      printWindow.document.write('<html><head><title>Payment Voucher</title>')
      printWindow.document.write(`
        <style>
          @media print {
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: Arial, sans-serif; 
            }
            .voucher-container { 
              max-width: 100%; 
            }
            .voucher-header { 
              margin-bottom: 20px; 
              border-bottom: 2px solid #01532B; 
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
            }
            .company-name { 
              margin: 0 0 5px 0; 
              font-size: 22px; 
              font-weight: bold;
              color: #01532B;
            }
            .company-address, .company-contact { 
              margin: 3px 0; 
              font-size: 11px;
              color: #666;
            }
            .voucher-title h3 { 
              margin: 0 0 5px 0; 
              font-size: 18px;
              color: #333;
            }
            .voucher-title h4 { 
              margin: 0; 
              font-size: 14px; 
              color: #666; 
            }
            .voucher-info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 10px; 
              margin: 20px 0; 
            }
            .info-row { 
              padding: 5px 0; 
            }
            .label { 
              font-weight: bold; 
              margin-right: 10px; 
            }
            .voucher-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 20px 0; 
            }
            .voucher-table th, .voucher-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              font-size: 11px; 
            }
            .voucher-table th { 
              background-color: #f5f5f5; 
              font-weight: bold; 
              text-align: left; 
            }
            .voucher-table .text-center { 
              text-align: center; 
            }
            .voucher-table .text-right { 
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
              border-left: 3px solid #01532B; 
            }
            .voucher-description { 
              margin: 15px 0; 
              padding: 10px; 
              background-color: #f9f9f9; 
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
    },
  },
}
</script>

<style scoped>
.voucher-container {
  background: white;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.voucher-header {
  margin-bottom: 30px;
  border-bottom: 3px solid #01532B;
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
}

.company-name {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: bold;
  color: #01532B;
}

.company-address,
.company-contact {
  margin: 5px 0;
  font-size: 13px;
  color: #666;
}

.voucher-title h3 {
  margin: 0 0 5px 0;
  font-size: 20px;
  color: #333;
}

.voucher-title h4 {
  margin: 0;
  font-size: 16px;
  color: #666;
}

.voucher-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 25px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.info-row {
  display: flex;
  padding: 5px 0;
}

.label {
  font-weight: 600;
  color: #333;
  min-width: 130px;
}

.value {
  color: #666;
}

.voucher-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 13px;
}

.voucher-table th,
.voucher-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.voucher-table th {
  background-color: #01532B;
  color: white;
  font-weight: 600;
  text-align: left;
}

.voucher-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.voucher-table .text-center {
  text-align: center;
}

.voucher-table .text-right {
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
  border-left: 4px solid #01532B;
  font-size: 14px;
}

.voucher-description {
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
  .voucher-container {
    padding: 20px;
  }
}
</style>