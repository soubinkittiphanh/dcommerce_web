<template>
  <div id="body">
    <div size="A4" class="wrapper page">
      <v-container class="print-container">
        
        <!-- Header: Logo & Company Details -->
        <div class="header-section">
          <v-row align="center" no-gutters>
            <v-col cols="3">
              <img v-if="companyLogo" :src="companyLogo" class="company-logo" alt="Logo" />
              <div v-else class="logo-placeholder">
                <v-icon size="60" color="grey lighten-2">mdi-domain</v-icon>
              </div>
            </v-col>
            <v-col cols="9" class="text-right company-info">
              <h2 class="company-name">{{ companyDataV1.name || 'Company Name' }}</h2>
              <p class="company-address">{{ companyDataV1.address || 'Company Address' }}</p>
              <p class="company-contact">
                <span v-if="companyDataV1.tel">Tel: {{ companyDataV1.tel }}</span>
                <span v-if="companyDataV1.email" class="ml-3">Email: {{ companyDataV1.email }}</span>
              </p>
            </v-col>
          </v-row>
        </div>

        <div class="divider-bar"></div>

        <!-- Document Title -->
        <div class="document-title-container">
          <h1 class="document-title">ໃບຮັບສິນຄ້າເຂົ້າສາງ</h1>
          <h2 class="document-title-en">GOODS RECEIPT NOTE (GRN)</h2>
        </div>

        <!-- Document Info Metadata -->
        <div v-if="header" class="info-section">
          <v-row>
            <!-- Vendor Info Card -->
            <v-col cols="6">
              <div class="info-card vendor-card">
                <div class="card-header">
                  <v-icon small class="mr-1 white--text">mdi-truck-delivery-outline</v-icon>
                  ຜູ້ສະໜອງ / Supplier Details
                </div>
                <div class="card-body px-4 py-3">
                  <div class="vendor-name-row mb-1">
                    <strong>{{ header.vendor ? header.vendor.name : 'N/A' }}</strong>
                  </div>
                  <div class="vendor-detail-row" v-if="header.vendor && header.vendor.address">
                    <span class="detail-label">ທີ່ຢູ່ / Address:</span>
                    <span class="detail-value">{{ header.vendor.address }}</span>
                  </div>
                  <div class="vendor-detail-row" v-if="header.vendor && header.vendor.tel">
                    <span class="detail-label">ເບີໂທ / Tel:</span>
                    <span class="detail-value">{{ header.vendor.tel }}</span>
                  </div>
                </div>
              </div>
            </v-col>

            <!-- Metadata Info Card -->
            <v-col cols="6">
              <div class="info-card meta-card">
                <div class="card-header">
                  <v-icon small class="mr-1 white--text">mdi-file-document-info-outline</v-icon>
                  ລາຍລະອຽດເອກະສານ / Voucher Details
                </div>
                <div class="card-body px-4 py-2">
                  <div class="meta-row">
                    <span class="meta-label">ເລກທີ / Rec ID:</span>
                    <strong class="meta-value">#{{ header.id }}</strong>
                  </div>
                  <div class="meta-row" v-if="header.poHeaderId">
                    <span class="meta-label">ເລກບິນ PO Ref:</span>
                    <span class="meta-value">#{{ header.poHeaderId }}</span>
                  </div>
                  <div class="meta-row">
                    <span class="meta-label">ວັນທີຮັບ / Date:</span>
                    <span class="meta-value">{{ formatDate(header.bookingDate) }}</span>
                  </div>
                  <div class="meta-row">
                    <span class="meta-label">ສາງ / Warehouse:</span>
                    <span class="meta-value">{{ getLocationName(header.locationId) }}</span>
                  </div>
                  <div class="meta-row">
                    <span class="meta-label">ຜູ້ຮັບເຄື່ອງ / Prepared By:</span>
                    <span class="meta-value">{{ getPreparedByName() }}</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Table of Products -->
        <div v-if="header" class="table-section">
          <table class="receipt-table">
            <thead>
              <tr>
                <th class="col-idx">ລຳດັບ<br>No.</th>
                <th class="col-code">ລະຫັດ<br>Code</th>
                <th class="col-desc">ລາຍລະອຽດສິນຄ້າ<br>Description</th>
                <th class="col-qty">ຈຳນວນ<br>Qty</th>
                <th class="col-unit">ຫົວໜ່ວຍ<br>Unit</th>
                <th class="col-price">ລາຄາຕໍ່ໜ່ວຍ<br>Unit Price</th>
                <th class="col-amt">ມູນຄ່າ<br>Amount</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="header.lines && header.lines.length > 0">
                <tr v-for="(line, i) in header.lines" :key="line.id" class="item-row page-break">
                  <td class="text-center">{{ i + 1 }}</td>
                  <td class="text-center">{{ getProductCode(line) }}</td>
                  <td class="product-info">
                    <div class="product-name">{{ getProductName(line) }}</div>
                  </td>
                  <td class="text-right font-weight-bold">{{ formatNumber(line.qty || line.quantity) }}</td>
                  <td class="text-center">{{ getUnitName(line) }}</td>
                  <td class="text-right">{{ formatNumber(getLineOriginalPrice(line)) }}</td>
                  <td class="text-right font-weight-bold amount-cell">{{ formatNumber(getLineOriginalTotal(line)) }}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="7" class="text-center py-6 text-grey">
                    ບໍ່ມີຂໍ້ມູນສິນຄ້າ / No receiving items available
                  </td>
                </tr>
              </template>

              <!-- Spacing/Divider Row -->
              <tr class="spacer-row">
                <td colspan="7"></td>
              </tr>

              <!-- Grand Total Row -->
              <tr class="total-row page-break">
                <td colspan="6" class="text-right font-weight-bold">ຍອດລວມທັງໝົດ / Grand Total:</td>
                <td class="text-right font-weight-bold grand-total-value">
                  {{ formatNumber(header.total) }} {{ (findCurrency(header.currencyId) || {}).code }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Currency Breakdown / Remarks -->
        <div v-if="header" class="footer-details-section">
          <v-row>
            <v-col cols="7">
              <div v-if="header.notes" class="notes-box">
                <strong>ໝາຍເຫດ / Notes:</strong>
                <p class="notes-content mt-1">{{ header.notes }}</p>
              </div>
            </v-col>
            <v-col cols="5">
              <div v-if="totalsByCurrency.length > 0" class="currency-breakdown-box">
                <div class="box-title">ລາຍລະອຽດສະກຸນເງິນ / Currency Breakdown</div>
                <div class="breakdown-list">
                  <div v-for="c in totalsByCurrency" :key="c.code" class="breakdown-row">
                    <span class="ccy-code">{{ c.code }}:</span>
                    <strong class="ccy-val">{{ formatNumber(c.total) }}</strong>
                  </div>
                  <div class="breakdown-row exchange-rate-row" v-if="header.exchangeRate && header.exchangeRate !== 1">
                    <span class="ccy-code text-caption">Exchange Rate:</span>
                    <span class="ccy-val text-caption">1 {{ (findCurrency(header.currencyId) || {}).code }} = {{ formatNumber(header.exchangeRate) }} LAK</span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Signature Boxes -->
        <div class="signature-section mt-12">
          <v-row no-gutters>
            <v-col cols="4" class="px-2">
              <div class="signature-box text-center">
                <p class="signature-title">ຜູ້ອະນຸມັດ / Approver</p>
                <div class="signature-space"></div>
                <p class="signature-name">...................................................</p>
                <p class="signature-date">ວັນທີ (Date): ......./......./.......</p>
              </div>
            </v-col>
            <v-col cols="4" class="px-2">
              <div class="signature-box text-center">
                <p class="signature-title">ຜູ້ກວດຮັບ / Inspector</p>
                <div class="signature-space"></div>
                <p class="signature-name">...................................................</p>
                <p class="signature-date">ວັນທີ (Date): ......./......./.......</p>
              </div>
            </v-col>
            <v-col cols="4" class="px-2">
              <div class="signature-box text-center">
                <p class="signature-title">ຜູ້ມອບເຄື່ອງ / Deliverer</p>
                <div class="signature-space"></div>
                <p class="signature-name">...................................................</p>
                <p class="signature-date">ວັນທີ (Date): ......./......./.......</p>
              </div>
            </v-col>
          </v-row>
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
  name: 'PDFReceiving',
  layout: 'login',

  data() {
    return {
      id: null,
      header: null,
    }
  },

  computed: {
    ...mapGetters(['findAllProduct', 'findAllUnit', 'findAllCurrency', 'findAllLocation', 'findAllCompany']),

    companyData() {
      try {
        return mainCompanyInfo() || {}
      } catch (e) {
        return {}
      }
    },
    
    companyDataV1() {
      try {
        const comV1 = mainCompanyInfoV1(this.$store)
        return comV1 || {}
      } catch (e) {
        return {}
      }
    },
    
    companyLogo() {
      try {
        if (this.companyDataV1?.profile_image_path) {
          const imagePath = this.companyDataV1.profile_image_path
          return this.buildImageUrl(imagePath)
        }
        const logoName = this.companyData?.companyLogo
        if (logoName) {
          return require(`~/assets/image/${logoName}`)
        }
        return null
      } catch (error) {
        console.error('Error loading company logo:', error)
        return null
      }
    },

    totalsByCurrency() {
      if (!this.header || !this.header.lines) return []
      const breakdown = {}
      this.header.lines.forEach(item => {
        const currency = this.getLineCurrency(item)
        const code = currency.code || 'LAK'
        if (!breakdown[code]) {
          breakdown[code] = {
            code,
            total: 0
          }
        }
        breakdown[code].total += parseFloat(item.total || 0)
      })
      return Object.values(breakdown).filter(b => b.total > 0)
    }
  },
  
  async created() {
    this.id = this.$route.params.id
    
    // First attempt: read receiving data from localStorage
    const cachedData = localStorage.getItem(`receiving_print_${this.id}`)
    if (cachedData) {
      try {
        this.header = JSON.parse(cachedData)
        console.log('Loaded receiving print data from cache:', this.header)
      } catch (e) {
        console.error('Failed to parse cached receiving print data:', e)
      }
    }

    // Fallback: If not in cache, fetch from API
    if (!this.header && this.id) {
      try {
        const res = await this.$axios.get(`api/receiving/find/${this.id}`)
        console.log('Loaded receiving print data from API:', res.data)
        this.header = res.data
      } catch (er) {
        console.error('Error loading receiving print from API:', er)
      }
    }

    // Load Vuex background metadata asynchronously
    this.initiateData(this.$axios).catch((err) => {
      console.error('Error in initiateData background load:', err)
    })
  },

  methods: {
    ...mapActions(['initiateData']),
    
    buildImageUrl(imagePath) {
      if (!imagePath) return null
      const cleanPath = imagePath.replace(/^\/+/, '')
      const baseUrl = process.env.API_BASE_URL || this.$axios.defaults.baseURL || ''
      const fileBaseUrl = baseUrl.replace('/api', '')
      return `${fileBaseUrl}/${cleanPath}`
    },

    getProductName(line) {
      if (line.product && line.product.pro_name) {
        return line.product.pro_name
      }
      if (this.findAllProduct && this.findAllProduct.length > 0) {
        const prod = this.findAllProduct.find(p => String(p.id) === String(line.productId))
        return prod ? prod.pro_name : 'N/A'
      }
      return 'N/A'
    },
    
    getProductCode(line) {
      if (line.product && line.product.pro_id) {
        return line.product.pro_id
      }
      if (this.findAllProduct && this.findAllProduct.length > 0) {
        const prod = this.findAllProduct.find(p => String(p.id) === String(line.productId))
        return prod ? prod.pro_id : ''
      }
      return ''
    },
    
    getUnitName(line) {
      if (line.unit && line.unit.name) {
        return line.unit.name
      }
      if (this.findAllUnit && this.findAllUnit.length > 0) {
        const unit = this.findAllUnit.find(u => String(u.id) === String(line.unitId))
        return unit ? unit.name : 'N/A'
      }
      return 'N/A'
    },

    getLocationName(locationId) {
      if (!locationId) return 'N/A'
      if (this.findAllLocation && this.findAllLocation.length > 0) {
        const loc = this.findAllLocation.find(l => String(l.id) === String(locationId))
        return loc ? loc.name : 'N/A'
      }
      return 'N/A'
    },

    getPreparedByName() {
      if (this.header?.user) {
        return this.header.user.cus_name || this.header.user.cus_id || 'N/A'
      }
      return this.$auth?.user?.cus_name || 'N/A'
    },

    getLineCurrency(item) {
      if (item.currencyId) {
        return this.findCurrency(item.currencyId);
      }
      const p = item.product || this.findAllProduct.find(el => String(el.id) === String(item.productId))
      if (!p) return { code: 'LAK', rate: 1 }
      return this.findCurrency(p.costCurrencyId || p.purchaseCurrencyId || p.saleCurrencyId)
    },

    findCurrency(currencyId) {
      return this.findAllCurrency.find(el => String(el.id) === String(currencyId)) || { code: 'LAK', rate: 1 };
    },

    getLineOriginalPrice(item) {
      return parseFloat(item.price || 0)
    },

    getLineOriginalTotal(item) {
      return parseFloat(item.total || 0)
    },

    formatNumber(val) {
      if (val === undefined || val === null || isNaN(val)) return '0'
      return getFormatNum(val)
    },
    
    formatDate(dateString) {
      if (!dateString) return 'N/A'
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-GB') // DD/MM/YYYY
      } catch (error) {
        console.error('Error formatting date:', error)
        return dateString
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans Lao', 'Phetsarath OT', sans-serif;
}

#body {
  background: #f0f2f5;
  padding: 20px 0;
  min-height: 100vh;
}

.page {
  background: white;
  display: block;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

.page[size="A4"] {
  width: 21cm;
  min-height: 29.7cm;
  padding: 1.5cm;
  box-sizing: border-box;
}

/* Header design */
.header-section {
  margin-bottom: 15px;
}

.company-logo {
  max-width: 150px;
  max-height: 80px;
  object-fit: contain;
}

.logo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 60px;
  border: 1px dashed #ccc;
  background-color: #fafafa;
  border-radius: 4px;
}

.company-name {
  font-size: 16pt;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 4px 0;
}

.company-address {
  font-size: 9.5pt;
  color: #64748b;
  margin: 0 0 2px 0;
  line-height: 1.4;
}

.company-contact {
  font-size: 9pt;
  color: #64748b;
  margin: 0;
}

.divider-bar {
  height: 3px;
  background: linear-gradient(90deg, #0284c7, #38bdf8);
  margin: 15px 0;
  border-radius: 2px;
}

/* Document Title */
.document-title-container {
  text-align: center;
  margin: 20px 0 25px 0;
}

.document-title {
  font-size: 20pt;
  font-weight: 800;
  color: #0369a1;
  margin: 0;
}

.document-title-en {
  font-size: 11pt;
  font-weight: 600;
  color: #475569;
  letter-spacing: 2px;
  margin: 2px 0 0 0;
}

/* Metadata Cards */
.info-card {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
}

.card-header {
  background-color: #0369a1;
  color: white;
  padding: 6px 12px;
  font-size: 9.5pt;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.vendor-name-row {
  font-size: 11pt;
  color: #1e293b;
}

.vendor-detail-row {
  font-size: 9pt;
  margin-top: 4px;
  display: flex;
}

.detail-label {
  color: #64748b;
  width: 90px;
  flex-shrink: 0;
}

.detail-value {
  color: #334155;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px dashed #e2e8f0;
  font-size: 9pt;
}

.meta-row:last-child {
  border-bottom: none;
}

.meta-label {
  color: #64748b;
}

.meta-value {
  color: #1e293b;
  font-weight: 600;
}

/* Table styling */
.table-section {
  margin-top: 25px;
}

.receipt-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 9pt;
  margin-bottom: 25px;
}

.receipt-table th {
  background-color: #f1f5f9;
  color: #1e293b;
  border: 1px solid #cbd5e1;
  padding: 8px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
}

.receipt-table td {
  border: 1px solid #e2e8f0;
  padding: 8px;
  color: #334155;
  vertical-align: middle;
}

.col-idx { width: 5%; }
.col-code { width: 12%; }
.col-desc { width: 38%; }
.col-qty { width: 10%; }
.col-unit { width: 10%; }
.col-price { width: 12%; }
.col-amt { width: 13%; }

.product-name {
  font-weight: 700;
  color: #1e293b;
}

.item-row:nth-child(even) {
  background-color: #f8fafc;
}

.amount-cell {
  color: #0f172a;
}

.spacer-row td {
  border: none;
  height: 10px;
}

.total-row td {
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 10px 8px;
  font-size: 10pt;
}

.grand-total-value {
  color: #0369a1;
  font-size: 11pt;
}

/* Footer details block */
.footer-details-section {
  margin-top: 15px;
}

.notes-box {
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 12px;
  background-color: #fafafa;
  min-height: 80px;
  font-size: 9pt;
}

.notes-content {
  color: #475569;
  white-space: pre-wrap;
}

.currency-breakdown-box {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background-color: #f8fafc;
  overflow: hidden;
}

.currency-breakdown-box .box-title {
  background-color: #f1f5f9;
  border-bottom: 1px solid #cbd5e1;
  padding: 6px 12px;
  font-size: 8.5pt;
  font-weight: 700;
  color: #475569;
}

.breakdown-list {
  padding: 8px 12px;
}

.breakdown-row {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 9pt;
  color: #334155;
}

.exchange-rate-row {
  border-top: 1px dashed #cbd5e1;
  margin-top: 4px;
  padding-top: 6px;
  color: #64748b;
}

/* Signature boxes */
.signature-box {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 12px;
  background-color: #f8fafc;
}

.signature-title {
  font-weight: 700;
  color: #334155;
  margin: 0 0 10px 0;
  font-size: 9.5pt;
}

.signature-space {
  height: 55px;
}

.signature-name {
  margin: 5px 0 2px 0;
  color: #475569;
}

.signature-date {
  font-size: 8pt;
  color: #64748b;
  margin: 0;
}

.page-break {
  page-break-inside: avoid;
  page-break-after: auto;
}

/* Print CSS override */
@media print {
  #body {
    background: white;
    padding: 0;
  }
  
  .page {
    box-shadow: none;
    margin: 0;
    width: 100%;
    padding: 0;
  }
  
  .page[size="A4"] {
    width: 100%;
    min-height: 100%;
  }

  .receipt-table th {
    background-color: #f1f5f9 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .card-header {
    background-color: #0369a1 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .signature-box {
    background-color: #f8fafc !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .notes-box {
    background-color: #fafafa !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .currency-breakdown-box {
    background-color: #f8fafc !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .currency-breakdown-box .box-title {
    background-color: #f1f5f9 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  @page {
    size: A4;
    margin: 1.2cm 1cm 1cm 1cm;
  }
}
</style>
