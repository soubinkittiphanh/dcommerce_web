<template>
  <div id="body">
    <div size="A4" class="wrapper page">
      <v-container>
        <div style="display: flex; justify-content: center;">
          <v-row>
            <v-col cols="6">
              <img 
                v-if="companyLogoUrl" 
                :src="companyLogoUrl" 
                :alt="companyDataV1?.name || 'Company Logo'"
                width="200px" 
                class="company-logo"
                @error="handleLogoError"
              />
              <div 
                v-else-if="!isLoading"
                class="logo-placeholder"
              >
                <v-icon size="100" color="grey-lighten-2">mdi-domain</v-icon>
                <div class=" text-grey">No Logo Available</div>
              </div>
            </v-col>
            <v-col cols="6" align-self="end">
              <table class="table-layout" style="font-size: larger; font-weight: bold;">
                <tbody style="text-align: right;">
                  <tr style="white-space: nowrap">
                    <td>{{ companyDataV1?.name || 'N/A' }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>{{ companyDataV1?.address || 'N/A' }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Tel: {{ companyDataV1?.tel || 'N/A' }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Email: {{ companyDataV1?.email || 'N/A' }}</td>
                  </tr>
                </tbody>
              </table>
            </v-col>
          </v-row>
        </div>
        
        <p class="text-color" style="font-size: 21pt; font-weight: bold; text-align: center">
          ໃບສະເໜີລາຄາ / QUOTATION
        </p>
        <v-divider></v-divider>
        
        <div v-if="header">
          <v-row>
            <v-col cols="6">
              <table class="table-layout" style="font-size: 12pt; font-weight: bold;">
                <tbody>
                  <tr style="white-space: nowrap">
                    <td>Customer ID: {{ header.client?.id || 'N/A' }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Customer Name: {{ header.client?.name || 'N/A' }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Company: {{ header.client?.company || 'N/A' }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>ເບີໂທ: {{ header.client?.telephone || 'N/A' }}</td>
                  </tr>
                </tbody>
              </table>
            </v-col>
            <v-col cols="6" align-self="end">
              <table class="table-layout" style="font-size: 12pt; font-weight: bold;">
                <tbody style="text-align: right;">
                  <tr style="white-space: nowrap">
                    <td>Quotation No: {{ header.id || 'N/A' }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Date: {{ formatDate(header.bookingDate) || 'N/A' }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Prepare By: {{ header.user?.cus_name || 'N/A' }}</td>
                  </tr>
                </tbody>
              </table>
            </v-col>
          </v-row>
        </div>
        <v-divider></v-divider>
        
        <div v-if="header">
          <table class="table table-layout" style="border-collapse: collapse;" width="100%">
            <thead>
              <tr>
                <th style="width: 40px">#</th>
                <th style="width: 180px">Description</th>
                <th style="width: 80px">Qty</th>
                <th style="width: 80px">Unit</th>
                <th style="width: 100px">Price</th>
                <th style="width: 70px">Amount</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="header.lines && header.lines.length > 0">
                <tr v-for="(line, i) in header.lines" :key="line.id" class="page-break">
                  <td class="text-center">{{ i + 1 }}</td>
                  <td>{{ line.product?.pro_name || 'N/A' }}</td>
                  <td style="text-align: right;">{{ line.quantity || 0 }}</td>
                  <td style="text-align: right;">{{ line.unit?.name || 'N/A' }}</td>
                  <td style="text-align: right;">{{ formatNumber(line.price) }}</td>
                  <td style="text-align: right;">{{ formatNumber((line.total || 0) + (line.discount || 0)) }}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td colspan="6" class="text-center text-grey">ບໍ່ມີຂໍ້ມູນ</td>
                </tr>
              </template>
              <tr class="page-break">
                <td style="text-align: right; font-weight: bold;" colspan="5">Discount</td>
                <td style="text-align: right; font-weight: bold;">{{ formatNumber(totalDiscount) }}</td>
              </tr>
              <tr class="page-break total-row">
                <td style="text-align: right; font-weight: bold;" colspan="5">ລາຄາລວມ</td>
                <td style="text-align: right; font-weight: bold;">{{ formatNumber((header.total || 0) - totalDiscount) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <v-row no-gutters class="mt-4">
          <v-col>
            <div class="signature-note">
              Name/signature/company stamp
            </div>
          </v-col>
        </v-row>
        
        <div class="signature-section">
          <v-row no-gutters>
            <v-col cols="5" style="" align-self="end">
              <v-card class="mx-auto ml-0 signature-box" height="134" width="100%" outlined>
                <div class="signature-label">Customer Acceptance (sign below):</div>
              </v-card>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="5">
              <v-card class="mx-auto signature-box" height="134" width="100%" outlined>
                <div class="signature-label">Approved By:</div>
              </v-card>
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
  name: 'Quotation',
  layout: 'login',

  data() {
    return {
      id: null,
      header: null,
      isLoading: true,
      logoLoadError: false,
    }
  },

  computed: {
    ...mapGetters(['currentSelectedLocation']),

    companyData() {
      console.log(`**********COMPANY DATA ${mainCompanyInfo}**********`)
      return mainCompanyInfo()
    },
    
    companyDataV1() {
      try {
        let comV1 = mainCompanyInfoV1(this.$store)
        console.log('Company Data V1:', comV1)
        return comV1 || {}
      } catch (error) {
        console.error('Error loading company data:', error)
        return {}
      }
    },

    // New computed property for API-based logo
    companyLogoUrl() {
      try {
        // First try to get from current selected location company data
        if (this.currentSelectedLocation?.company?.profile_image_path) {
          const imagePath = this.currentSelectedLocation.company.profile_image_path
          // Convert relative path to full URL
          return this.buildImageUrl(imagePath)
        }
        
        // Fallback to companyDataV1 if available
        if (this.companyDataV1?.profile_image_path) {
          const imagePath = this.companyDataV1.profile_image_path
          return this.buildImageUrl(imagePath)
        }

        // Final fallback to assets (original behavior)
        const logoName = this.companyData?.companyLogo
        if (logoName && !this.logoLoadError) {
          return require(`~/assets/image/${logoName}`)
        }
        
        return null
      } catch (error) {
        console.error('Error loading company logo:', error)
        this.logoLoadError = true
        return null
      }
    },

    totalDiscount() {
      if (!this.header || !this.header.lines) return 0
      
      let totalDiscount = 0
      for (const iterator of this.header.lines) {
        totalDiscount += iterator.discount || 0
      }
      totalDiscount += this.header.discount || 0
      return totalDiscount
    }
  },

  async created() {
    try {
      await this.initiateDataCompany(this.$axios)
      this.id = this.$route.params.id
      
      if (this.id) {
        await this.loadQuotationData()
      }
    } catch (error) {
      console.error('Error in created hook:', error)
    } finally {
      this.isLoading = false
    }
  },

  methods: {
    ...mapActions(['initiateDataCompany', 'setSelectedTerminal', 'setSelectedLocation']),
    
    buildImageUrl(imagePath) {
      if (!imagePath) return null
      
      // Remove any leading slashes to avoid double slashes
      const cleanPath = imagePath.replace(/^\/+/, '')
      
      // Build the full URL based on your API base URL
      // Adjust this URL pattern to match your backend setup
      const baseUrl = process.env.API_BASE_URL || this.$axios.defaults.baseURL || ''
      
      // Remove '/api' if it exists in baseURL for file serving
      const fileBaseUrl = baseUrl.replace('/api', '')
      
      return `${fileBaseUrl}/${cleanPath}`
    },
    
    async loadQuotationData() {
      try {
        const response = await this.$axios.get(`api/quotation/find/${this.id}`)
        this.header = response.data
        console.log('Quotation data loaded:', this.header)
      } catch (error) {
        console.error('Error loading quotation data:', error)
        this.$toast.error('Failed to load quotation data')
      }
    },
    
    handleLogoError(event) {
      console.error('Logo failed to load:', event.target.src)
      this.logoLoadError = true
      
      // Optionally try to load from a different source or show placeholder
      event.target.style.display = 'none'
    },
    
    formatNumber(val) {
      if (val === null || val === undefined || isNaN(val)) return '0'
      return getFormatNum(val)
    },

    formatDate(dateString) {
      if (!dateString) return 'N/A'
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-GB') // DD/MM/YYYY format
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
  font-family: 'Noto Sans Lao';
}

#body {
  font-size: 12px;
}

.company-logo {
  max-width: 200px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 120px;
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
}

.signature-section {
  margin-top: 40px;
}

.signature-box {
  padding: 10px;
}

.signature-label {
  font-weight: bold;
  color: #333;
}

.signature-note {
  font-weight: bold;
  margin-bottom: 20px;
  color: #555;
}

.total-row {
  background-color: #f5f5f5;
  font-size: 14pt;
}

.title-space {
  margin: 4px 0px;
}

.heading-14 {
  font-size: 16px;
}

.text-color {
  color: #246AB2;
}

.page-break {
  page-break-inside: avoid;
  page-break-after: auto
}

@media screen {
  /* Screen styles */
}

@media print {
  body,
  .page {
    margin: 0;
  }

  table {
    page-break-inside: auto;
  }

  tr {
    page-break-inside: avoid;
    page-break-after: auto
  }

  td {
    page-break-inside: avoid;
    page-break-after: auto
  }

  thead {
    display: table-header-group
  }

  tfoot {
    display: table-footer-group
  }

  #page-break {
    clear: both;
    page-break-after: always;
  }

  @page {
    margin: 1cm 0cm 0.2cm 0cm;
  }

  .signature-section {
    page-break-inside: avoid;
  }

  .company-logo {
    max-width: 180px;
  }
}

.page-footer,
.page-footer-space {
  height: 100px;
}

.page-footer {
  position: fixed;
  bottom: 0;
  width: 21cm;
}

.table td,
th {
  border: 1px solid black;
  text-align: left;
  padding: 8px;
}

.table th {
  font-size: 11pt;
  text-align: center;
  background-color: #f8f9fa;
}

.table td {
  font-size: 12pt;
}

* {
  font-family: Phetsarath OT;
}

#body {
  background: rgb(204, 204, 204);
}

.page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.page[size="A4"] {
  width: 21cm;
}

.page[size="A4"][layout="landscape"] {
  width: 29.7cm;
  height: 21cm;
}

.page[size="A3"] {
  width: 29.7cm;
  height: 42cm;
}

.page[size="A3"][layout="landscape"] {
  width: 42cm;
  height: 29.7cm;
}

.page[size="A5"] {
  width: 14.8cm;
  height: 21cm;
}

.page[size="A5"][layout="landscape"] {
  width: 21cm;
  height: 14.8cm;
}

.d-flex > p {
  margin-bottom: 0;
}

.table-layout {
  table-layout: fixed;
  width: 100%;
}

.table-layout > tbody > tr > td:nth-child(1) {
  width: 130px;
}

.table-layout > tbody > tr > td:nth-child(5) {
  width: 80px;
}

.table-layout > tbody > tr > td:nth-child(6) {
  width: 150px;
}

td {
  word-wrap: break-word;
  vertical-align: top;
  padding-right: 2px;
  padding-left: 2px;
}

/* Enhanced styling for better visual hierarchy */
.v-divider {
  margin: 16px 0;
  border-color: #246AB2;
  border-width: 1px;
}

.text-grey {
  color: #757575;
}
</style>