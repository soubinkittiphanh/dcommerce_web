<template>
  <div id="body">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading quotation...</p>
    </div>

    <!-- Main Content -->
    <div v-else size="A4" class="wrapper page">
      <v-container fluid class="pa-6">
        <!-- Header Section -->
        <div class="header-section mb-6">
          <v-row align="center" class="mb-4">
            <v-col cols="4">
              <div class="logo-container">
                <img v-if="companyLogo" :src="companyLogo" class="company-logo" alt="Company Logo" />
              </div>
            </v-col>
            <v-col cols="8">
              <div class="company-info">
                <h2 class="company-name">{{ companyDataV1?.name || 'PHAIVANH PHARMACY' }}</h2>
                <div class="company-details">
                  <p class="mb-1">{{ companyDataV1?.address || 'Company Address' }}</p>
                  <p class="mb-1">Tel: {{ companyDataV1?.tel || 'Phone Number' }}</p>
                  <p class="mb-0">Email: {{ companyDataV1?.email || 'info@company.com' }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
          
          <!-- Document Title -->
          <div class="document-title text-center mb-4">
            <h1 class="quotation-title">ໃບສະເໜີລາຄາ / QUOTATION</h1>
            <div class="title-underline"></div>
          </div>
        </div>

        <!-- Customer & Quote Information -->
        <div v-if="header" class="info-section mb-5">
          <v-row>
            <v-col cols="6">
              <div class="info-card customer-info">
                <h3 class="section-title">Bill To:</h3>
                <table class="info-table">
                  <tr>
                    <td class="label">Customer ID:</td>
                    <td class="value">{{ safeGet(header, 'client.id', 'N/A') }}</td>
                  </tr>
                  <tr>
                    <td class="label">Customer Name:</td>
                    <td class="value">{{ safeGet(header, 'client.name', 'N/A') }}</td>
                  </tr>
                  <tr>
                    <td class="label">Company:</td>
                    <td class="value">{{ safeGet(header, 'client.company', 'N/A') }}</td>
                  </tr>
                  <tr>
                    <td class="label">Phone:</td>
                    <td class="value">{{ safeGet(header, 'client.telephone', 'N/A') }}</td>
                  </tr>
                </table>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="info-card quote-info">
                <h3 class="section-title">Quote Details:</h3>
                <table class="info-table">
                  <tr>
                    <td class="label">Quote Number:</td>
                    <td class="value quote-number">{{ header.id || 'N/A' }}</td>
                  </tr>
                  <tr>
                    <td class="label">Date:</td>
                    <td class="value">{{ formatDate(header.bookingDate) || 'N/A' }}</td>
                  </tr>
                  <tr>
                    <td class="label">Prepared By:</td>
                    <td class="value">{{ safeGet(header, 'user.cus_name', 'N/A') }}</td>
                  </tr>
                  <tr>
                    <td class="label">Valid Until:</td>
                    <td class="value">{{ formatValidDate(header.bookingDate) || 'N/A' }}</td>
                  </tr>
                </table>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Show message when no header data -->
        <div v-else class="no-data-message">
          <p>No quotation data available. Please check the quotation ID and try again.</p>
        </div>

        <!-- Items Table -->
        <div v-if="header" class="items-section mb-5">
          <h3 class="section-title mb-3">Items & Services</h3>
          <div class="table-container">
            <table class="items-table">
              <thead>
                <tr>
                  <th class="text-center" style="width: 50px">#</th>
                  <th style="width: 250px">Description</th>
                  <th class="text-center" style="width: 80px">Qty</th>
                  <th class="text-center" style="width: 80px">Unit</th>
                  <th class="text-right" style="width: 120px">Unit Price</th>
                  <th class="text-right" style="width: 120px">Amount</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="header.lines && header.lines.length > 0">
                  <tr v-for="(line, i) in header.lines" :key="line.id" class="item-row">
                    <td class="text-center">{{ i + 1 }}</td>
                    <td class="item-description">
                      <div class="product-name">{{ line.product?.pro_name || 'N/A' }}</div>
                    </td>
                    <td class="text-center">{{ line.quantity || 0 }}</td>
                    <td class="text-center">{{ line.unit?.name || 'N/A' }}</td>
                    <td class="text-right">{{ formatCurrency(line.price) }}</td>
                    <td class="text-right amount-cell">{{ formatCurrency((line.total || 0) + (line.discount || 0)) }}</td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    <td colspan="6" class="text-center no-data">No items available</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>

          <!-- Summary Section -->
          <div class="summary-section">
            <v-row>
              <v-col cols="8"></v-col>
              <v-col cols="4">
                <table class="summary-table">
                  <tr>
                    <td class="summary-label">Subtotal:</td>
                    <td class="summary-value">{{ formatCurrency((header.total || 0)) }}</td>
                  </tr>
                  <tr v-if="totalDiscount > 0">
                    <td class="summary-label">Discount:</td>
                    <td class="summary-value discount">-{{ formatCurrency(totalDiscount) }}</td>
                  </tr>
                  <tr class="total-row">
                    <td class="summary-label total-label">Total:</td>
                    <td class="summary-value total-value">{{ formatCurrency((header.total || 0) - totalDiscount) }}</td>
                  </tr>
                </table>
              </v-col>
            </v-row>
          </div>
        </div>

        <!-- Terms & Conditions -->
        <div class="terms-section mb-5">
          <h3 class="section-title mb-3">Terms & Conditions</h3>
          <div class="terms-content">
            <ul class="terms-list">
              <li>This quotation is valid for 30 days from the date of issue</li>
              <li>Prices are in LAK and include all applicable taxes</li>
              <li>Payment terms: 50% deposit required, balance due on delivery</li>
              <li>Delivery time: 7-14 business days after order confirmation</li>
              <li>All products are subject to availability</li>
            </ul>
          </div>
        </div>

        <!-- Signature Section -->
        <div class="signature-section">
          <v-row>
            <v-col cols="6">
              <div class="signature-box">
                <div class="signature-title">Customer Acceptance</div>
                <div class="signature-area">
                  <div class="signature-line"></div>
                  <div class="signature-details">
                    <p>Signature: ___________________</p>
                    <p>Name: _______________________</p>
                    <p>Date: _______________________</p>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="signature-box">
                <div class="signature-title">Authorized By</div>
                <div class="signature-area">
                  <div class="signature-line"></div>
                  <div class="signature-details">
                    <p>{{ header?.user?.cus_name || 'Authorized Representative' }}</p>
                    <p>{{ companyDataV1?.name || 'PHAIVANH PHARMACY' }}</p>
                    <p>Date: {{ currentDate }}</p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Footer -->
        <div class="footer-section text-center mt-4">
          <p class="footer-text">Thank you for your business!</p>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getFormatNum } from '~/common'
import { mainCompanyInfo, mainCompanyInfoV1 } from '~/common/api'

export default {
  name: 'Quotation',
  layout: 'login',

  data() {
    return {
      id: null,
      header: null,
      isLoading: true,
      // Cache variables to prevent re-computation
      _companyDataCache: null,
      _companyDataV1Cache: null,
      _companyLogoCache: null,
      _currentDate: null,
    }
  },

  computed: {
    companyData() {
      // Cache the result to prevent constant re-computation
      if (!this._companyDataCache) {
        try {
          this._companyDataCache = mainCompanyInfo() || {}
        } catch (error) {
          console.error('Error loading company data:', error)
          this._companyDataCache = {}
        }
      }
      return this._companyDataCache
    },
    companyDataV1() {
      // Cache the result to prevent constant re-computation
      if (!this._companyDataV1Cache) {
        try {
          this._companyDataV1Cache = mainCompanyInfoV1(this.$store) || {}
        } catch (error) {
          console.error('Error loading company data V1:', error)
          this._companyDataV1Cache = {}
        }
      }
      return this._companyDataV1Cache
    },
    companyLogo() {
      // Use a safer approach for logo loading
      if (!this._companyLogoCache) {
        try {
          const logoName = this.companyData?.companyLogo
          if (logoName) {
            // Use a safer method that won't cause webpack issues
            this._companyLogoCache = `/assets/image/${logoName}`
          } else {
            this._companyLogoCache = null
          }
        } catch (error) {
          console.error('Error loading company logo:', error)
          this._companyLogoCache = null
        }
      }
      return this._companyLogoCache
    },
    ...mapGetters(['cartOfProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findAllProduct']),
    totalDiscount() {
      if (!this.header || !this.header.lines) return 0
      
      let totalDiscount = 0
      for (const iterator of this.header.lines) {
        totalDiscount += iterator.discount || 0
      }
      totalDiscount += this.header.discount || 0
      return totalDiscount
    },
    // Add a computed property for current date to prevent constant re-renders
    currentDate() {
      if (!this._currentDate) {
        this._currentDate = new Date().toLocaleDateString('en-GB')
      }
      return this._currentDate
    }
  },

  async created() {
    try {
      // Initialize current date first
      this._currentDate = new Date().toLocaleDateString('en-GB')
      
      // Load company data with timeout
      const companyDataPromise = this.initiateDataCompany(this.$axios)
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Company data load timeout')), 10000)
      )
      
      await Promise.race([companyDataPromise, timeoutPromise])
      
      this.id = this.$route.params.id
      
      if (this.id) {
        await this.loadQuotationData()
      }
    } catch (error) {
      console.error('Error in created hook:', error)
      // Don't break the component, just log the error
    } finally {
      this.isLoading = false
    }
  },

  methods: {
    ...mapActions(['initiateDataCompany', 'setSelectedTerminal', 'setSelectedLocation']),
    
    async loadQuotationData() {
      if (!this.id) return
      
      try {
        // Add timeout for API calls
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 15000) // 15 second timeout
        
        const response = await this.$axios.get(`api/quotation/find/${this.id}`, {
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        this.header = response.data
        console.log('Quotation data loaded:', this.header)
      } catch (error) {
        if (error.name === 'AbortError') {
          console.error('Request timeout')
        } else {
          console.error('Error loading quotation data:', error)
        }
        // Show user-friendly error without breaking the component
        if (this.$toast && typeof this.$toast.error === 'function') {
          this.$toast.error('Failed to load quotation data')
        }
      }
    },
    
    formatNumber(val) {
      if (val === null || val === undefined || isNaN(val)) return '0'
      return getFormatNum(val)
    },

    formatCurrency(val) {
      if (val === null || val === undefined || isNaN(val)) return '₭0.00'
      return '₭' + this.formatNumber(val)
    },

    formatDate(dateStr) {
      if (!dateStr) return ''
      try {
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-GB') // DD/MM/YYYY format
      } catch (error) {
        return dateStr
      }
    },

    formatValidDate(dateStr) {
      if (!dateStr) return ''
      try {
        const date = new Date(dateStr)
        date.setDate(date.getDate() + 30) // Add 30 days
        return date.toLocaleDateString('en-GB')
      } catch (error) {
        return ''
      }
    },

    // Method to clear caches if needed
    clearCaches() {
      this._companyDataCache = null
      this._companyDataV1Cache = null
      this._companyLogoCache = null
    },

    // Safe getter for nested properties
    safeGet(obj, path, defaultValue = '') {
      return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : defaultValue
      }, obj)
    }
  },

  // Add beforeDestroy to clean up
  beforeDestroy() {
    // Clear any caches to prevent memory leaks
    this.clearCaches()
  }
}
</script>

<style scoped>
/* Global Styles */
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Loading Styles */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  color: #2c5aa0;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e0e0e0;
  border-top: 4px solid #2c5aa0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#body {
  background: #f5f5f5;
  font-size: 14px;
  line-height: 1.4;
}

.page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  min-height: 29.7cm;
}

.page[size="A4"] {
  width: 21cm;
}

.no-data-message {
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-style: italic;
}

/* Header Styles */
.header-section {
  border-bottom: 3px solid #2c5aa0;
  padding-bottom: 20px;
}

.logo-container {
  text-align: left;
}

.company-logo {
  max-width: 180px;
  max-height: 100px;
  object-fit: contain;
}

.company-info {
  text-align: right;
}

.company-name {
  font-size: 28px;
  font-weight: 700;
  color: #2c5aa0;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.company-details p {
  color: #666;
  font-size: 14px;
  margin-bottom: 4px;
}

.document-title {
  margin-top: 30px;
}

.quotation-title {
  font-size: 32px;
  font-weight: 700;
  color: #2c5aa0;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.title-underline {
  width: 200px;
  height: 4px;
  background: linear-gradient(to right, #2c5aa0, #64b5f6);
  margin: 0 auto;
  border-radius: 2px;
}

/* Info Section Styles */
.info-section {
  margin: 30px 0;
}

.info-card {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  height: 180px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #2c5aa0;
  margin-bottom: 15px;
  border-bottom: 2px solid #2c5aa0;
  padding-bottom: 5px;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
}

.info-table td {
  padding: 6px 0;
  border: none;
}

.info-table .label {
  font-weight: 600;
  color: #555;
  width: 40%;
}

.info-table .value {
  color: #333;
  font-weight: 500;
}

.quote-number {
  font-size: 18px;
  font-weight: 700;
  color: #2c5aa0;
}

/* Items Table Styles */
.items-section {
  margin: 30px 0;
}

.table-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.items-table thead {
  background: linear-gradient(135deg, #2c5aa0, #1e3d72);
  color: white;
}

.items-table th {
  padding: 15px 12px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  border: none;
}

.items-table tbody tr:nth-child(even) {
  background: #f8f9fa;
}

.items-table tbody tr:hover {
  background: #e3f2fd;
}

.items-table td {
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.item-description {
  font-weight: 500;
}

.product-name {
  color: #333;
  font-size: 14px;
}

.amount-cell {
  font-weight: 600;
  color: #2c5aa0;
}

.no-data {
  padding: 30px !important;
  color: #999;
  font-style: italic;
}

/* Summary Styles */
.summary-section {
  margin-top: 20px;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
}

.summary-table td {
  padding: 8px 12px;
  border: none;
}

.summary-label {
  text-align: right;
  font-weight: 500;
  color: #555;
}

.summary-value {
  text-align: right;
  font-weight: 600;
  color: #333;
  width: 120px;
}

.total-row {
  border-top: 2px solid #2c5aa0;
  background: #f8f9fa;
}

.total-label {
  font-size: 16px;
  font-weight: 700;
  color: #2c5aa0 !important;
}

.total-value {
  font-size: 18px;
  font-weight: 700;
  color: #2c5aa0 !important;
}

.discount {
  color: #f44336 !important;
}

/* Terms & Conditions */
.terms-section {
  margin: 30px 0;
}

.terms-content {
  background: #f8f9fa;
  border-left: 4px solid #2c5aa0;
  padding: 20px;
  border-radius: 0 8px 8px 0;
}

.terms-list {
  margin: 0;
  padding-left: 20px;
  color: #555;
}

.terms-list li {
  margin-bottom: 8px;
  line-height: 1.5;
}

/* Signature Section */
.signature-section {
  margin: 40px 0 20px 0;
}

.signature-box {
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  height: 140px;
  background: #fafafa;
}

.signature-title {
  font-weight: 600;
  color: #2c5aa0;
  margin-bottom: 15px;
  text-align: center;
  font-size: 16px;
}

.signature-area {
  height: 80px;
}

.signature-line {
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
  height: 40px;
}

.signature-details p {
  margin: 4px 0;
  font-size: 12px;
  color: #666;
}

/* Footer */
.footer-section {
  border-top: 1px solid #e0e0e0;
  padding-top: 15px;
}

.footer-text {
  color: #2c5aa0;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
}

/* Print Styles */
@media print {
  #body {
    background: white;
  }
  
  .page {
    box-shadow: none;
    margin: 0;
  }

  @page {
    margin: 1cm;
    size: A4;
  }

  .info-card {
    background: white !important;
    border: 1px solid #ccc !important;
  }

  .terms-content {
    background: white !important;
  }

  .signature-box {
    background: white !important;
  }

  .items-table tbody tr:nth-child(even) {
    background: #f9f9f9 !important;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .company-name {
    font-size: 24px;
  }
  
  .quotation-title {
    font-size: 28px;
  }
  
  .info-card {
    height: auto;
    margin-bottom: 20px;
  }
}
</style>