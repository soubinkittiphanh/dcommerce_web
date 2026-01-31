<template>
  <div class="quotation-wrapper">
    <div class="d-print-none text-center mb-4 pa-2 white elevation-2 rounded">
      <div v-if="loading" class="d-flex justify-center align-center">
        <v-progress-circular indeterminate color="primary" size="20" width="2"></v-progress-circular>
        <span class="ml-2 grey--text text-caption">ກຳລັງໂຫຼດ...</span>
      </div>
      <div v-else>
        <v-btn color="primary" @click="print" small>
          <v-icon left small>mdi-printer</v-icon> ພິມ (Print)
        </v-btn>
        <v-btn color="error" text @click="$emit('close')" small class="ml-2">
          <v-icon left small>mdi-close</v-icon> ປິດ (Close)
        </v-btn>
      </div>
    </div>

    <div id="printable-area" class="white pa-4 elevation-1">
      <div size="A4" class="page">
        <v-container class="pa-0">
          <div class="d-flex justify-space-between mb-2">
            <div style="width: 40%">
              <img 
                v-if="companyLogoUrl" 
                :src="companyLogoUrl" 
                class="company-logo"
                @error="handleLogoError"
              />
              <div v-else class="logo-placeholder">
                <span class="text-caption grey--text">ບໍ່ມີໂລໂກ້</span>
              </div>
            </div>

            <div style="width: 60%; text-align: right;" class="company-info">
              <div class="font-weight-bold">{{ company.name || 'N/A' }}</div>
              <div>{{ formattedCompanyAddress }}</div>
              <div>ໂທ: {{ company.tel || 'N/A' }}</div>
              <div v-if="company.email">ອີເມວ: {{ company.email }}</div>
            </div>
          </div>
          
          <div class="text-center my-3">
            <h2 class="text-color text-uppercase" style="font-size: 18pt; letter-spacing: 1px;">ໃບສະເໜີລາຄາ / QUOTATION</h2>
            <div class="divider-line"></div>
          </div>
          
          <div v-if="header" class="info-grid mb-3">
            <div class="info-box">
              <table class="info-table">
                <tr><td class="label">ລະຫັດລູກຄ້າ:</td><td>{{ header.client?.id || '-' }}</td></tr>
                <tr><td class="label">ຊື່ລູກຄ້າ:</td><td>{{ header.client?.name || '-' }}</td></tr>
                <tr><td class="label">ບໍລິສັດ:</td><td>{{ header.client?.company || '-' }}</td></tr>
                <tr><td class="label">ເບີໂທ:</td><td>{{ header.client?.telephone || '-' }}</td></tr>
              </table>
            </div>

            <div class="info-box">
              <table class="info-table right-align">
                <tr><td class="label">ເລກທີ:</td><td>{{ header.id || '-' }}</td></tr>
                <tr><td class="label">ວັນທີ:</td><td>{{ formatDate(header.bookingDate) }}</td></tr>
                <tr><td class="label">ຜູ້ອອກເອກະສານ:</td><td>{{ header.user?.cus_name || '-' }}</td></tr>
              </table>
            </div>
          </div>
          
          <div v-if="header">
            <table class="main-table" width="100%">
              <thead>
                <tr>
                  <th style="width: 40px">#</th>
                  <th>ລາຍການ (Description)</th>
                  <th style="width: 60px">ຈຳນວນ</th>
                  <th style="width: 60px">ໜ່ວຍ</th>
                  <th style="width: 90px">ລາຄາ</th>
                  <th style="width: 90px">ລວມ</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="header.lines && header.lines.length > 0">
                  <tr v-for="(line, i) in header.lines" :key="line.id">
                    <td class="text-center">{{ i + 1 }}</td>
                    <td>{{ line.product?.pro_name || '-' }}</td>
                    <td class="text-right">{{ line.quantity || 0 }}</td>
                    <td class="text-center">{{ line.unit?.name || '-' }}</td>
                    <td class="text-right">{{ formatNumber(line.price) }}</td>
                    <td class="text-right">{{ formatNumber((line.total || 0) + (line.discount || 0)) }}</td>
                  </tr>
                </template>
                <template v-else>
                  <tr><td colspan="6" class="text-center text-grey py-4">ບໍ່ມີຂໍ້ມູນສິນຄ້າ</td></tr>
                </template>
              </tbody>
              
              <tfoot>
                <tr v-if="totalDiscount > 0">
                  <td colspan="4" class="no-border"></td>
                  <td class="text-right font-weight-bold label-cell">ສ່ວນຫຼຸດ:</td>
                  <td class="text-right">{{ formatNumber(totalDiscount) }}</td>
                </tr>
                <tr class="total-row">
                  <td colspan="4" class="no-border">
                    </td>
                  <td class="text-right font-weight-bold label-cell">ລາຄາລວມ:</td>
                  <td class="text-right font-weight-bold total-cell">{{ formatNumber((header.total || 0) - totalDiscount) }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div class="signature-section mt-5">
            <div class="d-flex justify-space-between">
              <div class="signature-box text-center">
                <div class="font-weight-bold mb-10">ຜູ້ຕົກລົງຊື້ (Customer)</div>
                <div class="signature-line"></div>
                <div class="text-caption mt-1">ວັນທີ: ...........................</div>
              </div>

              <div class="signature-box text-center">
                <div class="font-weight-bold mb-10">ຜູ້ອະນຸມັດ (Authorized By)</div>
                <div class="signature-line"></div>
                <div class="text-caption mt-1">ວັນທີ: ...........................</div>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getFormatNum } from '~/common'

export default {
  name: 'QuotationPrint',
  props: {
    recordId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      header: null,
      loading: false,
    }
  },
  computed: {
    ...mapGetters(['currentSelectedLocation']),
    
    company() {
      return this.currentSelectedLocation?.company || {}
    },

    formattedCompanyAddress() {
      const c = this.company
      const parts = [c.address, c.village, c.district, c.province]
      return parts.filter(p => p && p.trim()).join(', ') || 'N/A'
    },

    companyLogoUrl() {
      try {
        if (this.company?.profile_image_path) {
          return this.buildImageUrl(this.company.profile_image_path)
        }
        return null
      } catch (error) { return null }
    },

    totalDiscount() {
      if (!this.header?.lines) return 0
      let discount = this.header.lines.reduce((acc, line) => acc + (line.discount || 0), 0)
      return discount + (this.header.discount || 0)
    }
  },
  watch: {
    recordId: {
      immediate: true,
      handler(val) {
        if(val) this.loadQuotationData()
      }
    }
  },
  methods: {
    print() {
      window.print()
    },
    
    async loadQuotationData() {
      this.loading = true
      try {
        const response = await this.$axios.get(`api/quotation/find/${this.recordId}`)
        this.header = response.data
        
        await this.$nextTick()
        setTimeout(() => { this.print() }, 800)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        this.loading = false
      }
    },

    formatNumber(val) {
      return getFormatNum(val)
    },
    
    formatDate(dateString) {
      if (!dateString) return ''
      try {
        return new Date(dateString).toLocaleDateString('en-GB')
      } catch (e) { return dateString }
    },
    
    buildImageUrl(imagePath) {
      if (!imagePath) return null
      const cleanPath = imagePath.replace(/^\/+/, '')
      const baseUrl = process.env.API_BASE_URL || this.$axios.defaults.baseURL || ''
      return `${baseUrl.replace('/api', '')}/${cleanPath}`
    },
    
    handleLogoError(e) {
      e.target.style.display = 'none'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap');

/* Base Print Styles */
* {
  font-family: 'Noto Sans Lao', sans-serif !important;
  color: #000;
  box-sizing: border-box;
}

.text-color { color: #246AB2; }

/* Images */
.company-logo {
  max-width: 150px; /* Smaller Logo */
  max-height: 80px;
  object-fit: contain;
}

.logo-placeholder {
  width: 100px;
  height: 60px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Company Info Text */
.company-info { font-size: 11px; line-height: 1.4; }
.company-info .text-h6 { font-size: 14px !important; margin-bottom: 2px; }

/* Divider */
.divider-line {
  height: 2px;
  background-color: #246AB2;
  margin: 5px 0 10px 0;
}

/* Header Info Grid */
.info-grid {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
}
.info-box { width: 48%; }
.info-table { width: 100%; border-collapse: collapse; }
.info-table td { padding: 1px 0; vertical-align: top; }
.info-table .label { font-weight: bold; width: 80px; white-space: nowrap; }
.info-table.right-align .label { text-align: right; padding-right: 8px; width: 100px; }
.info-table.right-align td:last-child { text-align: right; }

/* Main Table (Compact) */
.main-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}

.main-table th {
  background-color: #f0f0f0;
  border: 1px solid #000;
  padding: 4px; /* Reduced padding */
  font-weight: bold;
  text-align: center;
}

.main-table td {
  border: 1px solid #000;
  padding: 3px 5px; /* Compact padding */
  vertical-align: middle;
}

.main-table tfoot .no-border { border: none; }
.main-table tfoot .label-cell { border: 1px solid #000; background: #fafafa; }
.main-table tfoot .total-cell { border: 1px solid #000; font-size: 12px; }

/* Signature Section */
.signature-section { margin-top: 20px; }
.signature-box { width: 40%; }
.signature-line {
  border-bottom: 1px dotted #000;
  margin: 40px 10px 5px 10px; /* Spacing for signature */
}

/* Print Logic */
@media print {
  @page {
    margin: 0.5cm; /* Minimal margins */
    size: A4;
  }
  
  body * { visibility: hidden; }
  
  #printable-area, #printable-area * {
    visibility: visible;
  }
  
  #printable-area {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    margin: 0; padding: 0;
    background: white;
  }
  
  .d-print-none { display: none !important; }
}
</style>