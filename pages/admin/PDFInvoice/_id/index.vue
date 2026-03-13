<template>
  <div id="invoice-wrapper">
    <div class="invoice-container">
      <div class="invoice-content">
        <!-- Company Header Section -->
        <div class="company-header">
          <v-row align="center" no-gutters>
            <v-col cols="8" class="company-info">
              <div v-if="findAllCompany.length > 0" class="company-details">
                <h2 class="company-name">{{ companyDataV1.name }}</h2>
                <p class="company-address">{{ companyDataV1.address }}</p>
                <p class="company-contact">Tel: {{ companyDataV1.tel || '' }}</p>
              </div>
            </v-col>
            <v-col cols="4" class="text-right">
              <img :src="companyLogo" class="company-logo" />
            </v-col>
          </v-row>
        </div>

        <!-- Invoice Title -->
        <div class="invoice-title">
          <h1>ໃບແຈ້ງໜີ້ / INVOICE</h1>
        </div>

        <!-- Customer and Invoice Info -->
        <div v-if="header" class="invoice-info-section">
          <v-row>
            <v-col cols="12" md="6">
              <div class="info-card customer-info">
                <h3 class="info-header">ຂໍ້ມູນລູກຄ້າ / Customer Information</h3>
                <div class="info-content">
                  <div class="info-row">
                    <span class="label">Customer ID:</span>
                    <span class="value">{{ header.client.id }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Customer Name:</span>
                    <span class="value">{{ header.client.name }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Company:</span>
                    <span class="value">{{ header.client.company }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">ເບີໂທ / Phone:</span>
                    <span class="value">{{ header.client.telephone }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">ທີ່ຢູ່ / Address:</span>
                    <span class="value">{{ header.client.address }}</span>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="info-card invoice-details">
                <h3 class="info-header">ລາຍລະອຽດໃບເກັບເງິນ / Invoice Details</h3>
                <div class="info-content">
                  <div class="info-row">
                    <span class="label">Invoice No:</span>
                    <span class="value invoice-number">{{ header.id }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Date:</span>
                    <span class="value">{{ formatDate(header.bookingDate) }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Location:</span>
                    <span class="value">{{ header.location?.name || 'N/A' }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Prepared By:</span>
                    <span class="value">{{ header.user?.cus_name || 'N/A' }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Payment Method:</span>
                    <span class="value">{{ header.payment?.payment_name || 'N/A' }}</span>
                  </div>
                  <div class="info-row">
                    <span class="label">Currency:</span>
                    <span class="value">{{ header.currency?.code || 'LAK' }}</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Transaction Lines Table -->
        <div v-if="header" class="transaction-section">
          <h3 class="section-header">ລາຍການສິນຄ້າ / Product Details</h3>
          
          <div class="table-responsive">
            <table class="transaction-table">
              <thead>
                <tr>
                  <th class="col-no">ລດ<br>No.</th>
                  <th class="col-description">ລາຍລະອຽດ / Description</th>
                  <th class="col-qty">ຈຳນວນ<br>Qty</th>
                  <th class="col-unit">ຫົວໜ່ວຍ<br>Unit</th>
                  <th class="col-price">ລາຄາ/ຫົວໜ່ວຍ<br>Unit Price</th>
                  <th class="col-discount">ສ່ວນຫຼຸດ<br>Discount</th>
                  <th class="col-amount">ຈຳນວນເງິນ<br>Amount</th>
                </tr>
              </thead>
              <tbody>
                <!-- Transaction Lines -->
                <tr 
                  v-if="header.lines && header.lines.length > 0"
                  v-for="(line, index) in header.lines" 
                  :key="line.id"
                  class="transaction-row"
                  :class="{ 'row-alternate': index % 2 === 1 }"
                >
                  <td class="text-center">{{ index + 1 }}</td>
                  <td class="product-info">
                    <div class="product-name">{{ line.product?.pro_name || 'Unknown Product' }}</div>
                    <div class="product-id">ID: {{ line.product?.pro_id || line.productId }}</div>
                    <div v-if="line.isGift" class="gift-badge">🎁 ຂອງຂວັນ / Gift</div>
                  </td>
                  <td class="text-center">{{ formatNumber(line.quantity) }}</td>
                  <td class="text-center">{{ line.unit?.name || 'ຊີ້ນ' }}</td>
                  <td class="text-right">{{ formatNumber(line.price) }}</td>
                  <td class="text-right">{{ formatNumber(line.discount) }}</td>
                  <td class="text-right amount-cell">{{ formatNumber(line.total) }}</td>
                </tr>
                
                <!-- Empty state -->
                <tr v-if="!header.lines || header.lines.length === 0">
                  <td colspan="7" class="text-center empty-state">
                    <div class="empty-icon">📦</div>
                    <div>ບໍ່ມີຂໍ້ມູນສິນຄ້າ / No product data available</div>
                  </td>
                </tr>

                <!-- Spacing row -->
                <tr class="spacer-row">
                  <td colspan="7"></td>
                </tr>

                <!-- Summary rows -->
                <tr class="summary-row">
                  <td colspan="6" class="summary-label">ລວມຍ່ອຍ / Subtotal:</td>
                  <td class="summary-value">{{ formatNumber(header.total + totalDiscount) }}</td>
                </tr>
                <tr class="summary-row">
                  <td colspan="6" class="summary-label">ສ່ວນຫຼຸດລວມ / Total Discount:</td>
                  <td class="summary-value discount-amount">-{{ formatNumber(totalDiscount) }}</td>
                </tr>
                <tr class="total-row">
                  <td colspan="6" class="total-label">ລວມທັງໝົດ / TOTAL:</td>
                  <td class="total-value">{{ formatNumber(header.total) }} {{ header.currency?.code || 'LAK' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Payment Information -->
        <div v-if="companyDataV1.bank" class="payment-info-section">
          <h3 class="section-header">ຂໍ້ມູນການຊຳລະເງິນ / Payment Information</h3>
          
          <div class="payment-details">
            <div class="payment-card">
              <h4>ການໂອນເງິນ / Bank Transfer</h4>
              <div class="bank-info">
                <div class="bank-row">
                  <span class="bank-label">Bank Name:</span>
                  <span class="bank-value">{{ companyDataV1.bank }}</span>
                </div>
                <div class="bank-row">
                  <span class="bank-label">Account Name:</span>
                  <span class="bank-value">{{ companyDataV1.accountName }}</span>
                </div>
                <div v-if="companyDataV1.accounts" class="account-list">
                  <div class="bank-label">Account Numbers:</div>
                  <ul>
                    <li 
                      v-for="(account, index) in (companyDataV1.accounts || '').split('|').filter(a => a)"
                      :key="index"
                      class="account-item"
                    >
                      {{ account }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Terms and Signature -->
        <div class="footer-section">
          <v-row>
            <v-col cols="12" md="6">
              <div class="terms-section">
                <h4>ເງື່ອນໄຂ / Terms & Conditions</h4>
                <ul class="terms-list">
                  <li>ໃບແຈ້ງໜີ້ນີ້ມີໄວຍາວະ 30 ມື້</li>
                  <li>This quotation is valid for 30 days</li>
                  <li>ການສົ່ງສິນຄ້າໃນໄລຍະ 15 ມື້ຫຼັງຈາກການຢືນຢັນ</li>
                  <li>Delivery within 15 days after order confirmation</li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="signature-section">
                <div class="signature-box customer-signature">
                  <div class="signature-header">ລາຍເຊັນລູກຄ້າ / Customer Signature</div>
                  <div class="signature-space"></div>
                  <div class="signature-footer">Name/Date/Company Stamp</div>
                </div>
                
                <div class="signature-box authorized-signature">
                  <div class="signature-header">ລາຍເຊັນຜູ້ອະນຸມັດ / Authorized By</div>
                  <div class="signature-space"></div>
                  <div class="signature-footer">Name/Date/Position</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Footer -->
        <div class="invoice-footer">
          <div class="footer-text">
            ຂອບໃຈທີ່ເລືອກໃຊ້ບໍລິການຂອງພວກເຮົາ / Thank you for your business
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getFormatNum, jsDateToMysqlDate } from '~/common'
import { mainCompanyInfo, mainCompanyInfoV1 } from '~/common/api'

export default {
  name: 'EnhancedInvoice',
  layout: 'login',

  data() {
    return {
      id: null,
      header: null,
    }
  },

  computed: {
    ...mapGetters([
      'cartOfProduct',
      'currentSelectedCustomer',
      'currentSelectedPayment',
      'findAllProduct',
      'findAllCompany',
    ]),
    
    totalDiscount() {
      if (!this.header || !this.header.lines) return 0;
      
      let totalDiscount = 0
      for (const line of this.header.lines) {
        totalDiscount += line.discount || 0
      }
      totalDiscount += this.header.discount || 0
      return totalDiscount
    },
    
    companyData() {
      const company = mainCompanyInfo()
      console.log('Company info:', company)
      return company
    },
    
    companyDataV1() {
      let comV1 = mainCompanyInfoV1(this.$store)
      console.info('Company data fetch from api V1:', comV1);
      return comV1
    },

    companyLogo() {
      const company = this.companyData

      // 1. Try API logo first (highest priority)
      if (company.apiData && company.apiData.profile_image_path) {
        const baseUrl = this.$axios.defaults.baseURL || ''
        const logoUrl = `${baseUrl}/${company.apiData.profile_image_path}`
        console.log('Using API logo:', logoUrl)
        return logoUrl
      }

      // 2. Try static logo from company data
      if (company.ticketLogo) {
        try {
          const staticLogo = require(`~/assets/image/${company.ticketLogo}`)
          console.log('Using static logo:', company.ticketLogo)
          return staticLogo
        } catch (error) {
          console.warn('Static logo not found:', company.ticketLogo, error)
        }
      }

      // 3. Try dcLogo fallback
      if (company.dcLogo) {
        try {
          const fallbackLogo = require(`~/assets/image/${company.dcLogo}`)
          console.log('Using dcLogo fallback:', company.dcLogo)
          return fallbackLogo
        } catch (error) {
          console.warn('dcLogo not found:', company.dcLogo, error)
        }
      }

      // 4. Final fallback
      console.log('Using final fallback logo')
      return '/static/images/default-logo.png'
    },
  },
  
  async mounted() {
    await this.initiateDataCompany(this.$axios)
  },
  
  async created() {
    await this.initiateDataCompany(this.$axios)
    this.id = this.$route.params.id
    if (this.id) {
      try {
        const response = await this.$axios.get(`api/sale/find/${this.id}`)
        console.log('Sale data loaded:', response.data)
        this.header = response.data
      } catch (error) {
        console.error('Error loading sale data:', error)
        this.message = error
      }
    }
  },

  methods: {
    ...mapActions([
      'initiateDataCompany',
      'setSelectedTerminal',
      'setSelectedLocation',
    ]),
    
    formatNumber(val) {
      return getFormatNum(val)
    },
    
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
      } catch (error) {
        console.error('Date formatting error:', error);
        return dateString;
      }
    },
  },
}
</script>

<style scoped>
/* Reset and force proper scrolling behavior */
* {
  font-family: 'Noto Sans Lao', sans-serif;
  box-sizing: border-box;
}

/* Override any parent container restrictions */
html {
  height: 100% !important;
  overflow: auto !important;
}

body {
  height: 100% !important;
  overflow: auto !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Main wrapper that overrides any parent constraints */
#invoice-wrapper {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: auto !important;
  min-height: 100vh !important;
  overflow: visible !important;
  background: rgb(240, 240, 240);
  padding: 20px;
  z-index: auto !important;
  
  /* Force override any parent container limitations */
  max-width: none !important;
  max-height: none !important;
  transform: none !important;
  clip: none !important;
}

.invoice-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: visible !important;
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
}

.invoice-content {
  padding: 30px;
  overflow: visible !important;
  height: auto;
  width: 100%;
}

/* Company Header */
.company-header {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #246ab2;
}

.company-info {
  padding-right: 20px;
}

.company-name {
  color: #246ab2;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.company-address,
.company-contact {
  margin: 4px 0;
  font-size: 14px;
  color: #555;
  line-height: 1.4;
}

.company-logo {
  max-width: 180px;
  max-height: 100px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Invoice Title */
.invoice-title {
  text-align: center;
  margin: 20px 0 30px 0;
}

.invoice-title h1 {
  color: #246ab2;
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 1px;
}

/* Invoice Info Section */
.invoice-info-section {
  margin-bottom: 30px;
}

.info-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  height: 100%;
  margin-bottom: 15px;
}

.info-header {
  color: #246ab2;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 15px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #246ab2;
}

.info-content {
  line-height: 1.6;
}

.info-row {
  display: flex;
  margin-bottom: 8px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.label {
  font-weight: 600;
  color: #495057;
  min-width: 120px;
  flex-shrink: 0;
  margin-bottom: 4px;
}

.value {
  color: #212529;
  flex: 1;
  word-wrap: break-word;
  min-width: 0;
}

.invoice-number {
  font-weight: bold;
  color: #246ab2;
  font-size: 16px;
}

/* Transaction Section */
.transaction-section {
  margin-bottom: 30px;
}

.section-header {
  color: #246ab2;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 15px 0;
  padding: 10px 0;
  border-bottom: 2px solid #246ab2;
}

.table-responsive {
  overflow-x: auto;
  margin-bottom: 20px;
}

.transaction-table {
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.transaction-table th {
  background: linear-gradient(135deg, #246ab2 0%, #1a5490 100%);
  color: white;
  padding: 12px 8px;
  text-align: center;
  font-weight: 600;
  border: 1px solid #1a5490;
  font-size: 11px;
  line-height: 1.3;
  white-space: nowrap;
}

.transaction-table td {
  padding: 12px 8px;
  border: 1px solid #dee2e6;
  vertical-align: top;
  font-size: 12px;
}

.transaction-row:hover {
  background-color: #f8f9fa;
}

.row-alternate {
  background-color: #fafbfc;
}

.col-no { min-width: 50px; }
.col-description { min-width: 200px; }
.col-qty { min-width: 80px; }
.col-unit { min-width: 80px; }
.col-price { min-width: 100px; }
.col-discount { min-width: 90px; }
.col-amount { min-width: 110px; }

.product-info {
  line-height: 1.4;
}

.product-name {
  font-weight: 600;
  color: #212529;
  margin-bottom: 4px;
  word-wrap: break-word;
}

.product-id {
  font-size: 10px;
  color: #6c757d;
  margin-bottom: 4px;
}

.gift-badge {
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: white;
  padding: 2px 6px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: bold;
  display: inline-block;
}

.text-center { text-align: center; }
.text-right { text-align: right; }

.amount-cell {
  font-weight: 600;
  color: #28a745;
}

.empty-state {
  padding: 40px !important;
  color: #6c757d;
  font-style: italic;
}

.empty-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.spacer-row td {
  padding: 8px !important;
  border: none !important;
}

.summary-row .summary-label {
  text-align: right;
  font-weight: 600;
  color: #495057;
  background-color: #f8f9fa;
  padding: 8px;
}

.summary-row .summary-value {
  text-align: right;
  font-weight: 600;
  background-color: #f8f9fa;
  padding: 8px;
}

.discount-amount {
  color: #dc3545;
}

.total-row .total-label {
  text-align: right;
  font-weight: bold;
  font-size: 14px;
  background: linear-gradient(135deg, #246ab2, #1a5490);
  color: white;
  padding: 12px;
}

.total-row .total-value {
  text-align: right;
  font-weight: bold;
  font-size: 16px;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  padding: 12px;
}

/* Payment Information */
.payment-info-section {
  margin-bottom: 30px;
}

.payment-details {
  margin-top: 15px;
}

.payment-card {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
}

.payment-card h4 {
  color: #246ab2;
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: bold;
}

.bank-info {
  line-height: 1.6;
}

.bank-row {
  display: flex;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.bank-label {
  font-weight: 600;
  color: #495057;
  min-width: 120px;
  flex-shrink: 0;
}

.bank-value {
  color: #212529;
  flex: 1;
  word-wrap: break-word;
}

.account-list {
  margin-top: 12px;
}

.account-list ul {
  margin: 8px 0 0 0;
  padding-left: 20px;
}

.account-item {
  margin-bottom: 4px;
  color: #495057;
  font-family: monospace;
  font-weight: 500;
  word-wrap: break-word;
}

/* Footer Section */
.footer-section {
  margin-bottom: 20px;
}

.terms-section {
  margin-bottom: 20px;
}

.terms-section h4 {
  color: #246ab2;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 10px 0;
}

.terms-list {
  margin: 0;
  padding-left: 20px;
  font-size: 11px;
  line-height: 1.4;
}

.terms-list li {
  margin-bottom: 4px;
  color: #495057;
}

.signature-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.signature-box {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
  background: white;
}

.signature-header {
  font-weight: 600;
  color: #246ab2;
  margin-bottom: 10px;
  font-size: 12px;
}

.signature-space {
  height: 60px;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 8px;
}

.signature-footer {
  font-size: 10px;
  color: #6c757d;
  text-align: center;
}

/* Invoice Footer */
.invoice-footer {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #dee2e6;
}

.footer-text {
  color: #246ab2;
  font-weight: 600;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  #body {
    padding: 10px;
  }
  
  .invoice-content {
    padding: 20px;
  }
  
  .company-name {
    font-size: 20px;
  }
  
  .invoice-title h1 {
    font-size: 24px;
  }
  
  .info-row {
    flex-direction: column;
  }
  
  .label {
    min-width: auto;
    margin-bottom: 2px;
  }
  
  .transaction-table {
    font-size: 10px;
    min-width: 600px;
  }
  
  .transaction-table th,
  .transaction-table td {
    padding: 6px 4px;
  }
  
  .bank-row {
    flex-direction: column;
  }
  
  .bank-label {
    min-width: auto;
    margin-bottom: 4px;
  }
}

/* Print Styles */
@media print {
  #body {
    background: white;
    padding: 0;
  }
  
  .invoice-container {
    box-shadow: none;
    border-radius: 0;
    max-width: none;
  }
  
  .invoice-content {
    padding: 20px;
  }

  @page {
    margin: 1cm;
    size: A4;
  }

  .company-header {
    border-bottom: 2px solid #246ab2;
  }

  .transaction-table {
    box-shadow: none;
  }

  .page-break {
    page-break-inside: avoid;
    page-break-after: auto;
  }

  table {
    page-break-inside: auto;
  }

  tr {
    page-break-inside: avoid;
    page-break-after: auto;
  }

  thead {
    display: table-header-group;
  }

  tfoot {
    display: table-footer-group;
  }
}
</style>