<template>
  <div id="body">
    <div size="A4" class="wrapper page">
      <v-container>
        <div style="display: flex; justify-content: center;">
          <v-row>
            <v-col cols="6">
              <img v-if="companyLogo" :src="companyLogo" width="200px" />
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
                </tbody>
              </table>
            </v-col>
          </v-row>
        </div>
        <!-- <h1 style="text-align: center;">PHAIVANH PHARMACY</h1> -->
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
                    <td>Date: {{ header.bookingDate || 'N/A' }}</td>
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
                  <td colspan="6">ບໍ່ມີຂໍ້ມູນ</td>
                </tr>
              </template>
              <tr class="page-break">
                <td style="text-align: right; font-weight: bold;" colspan="5">Discount</td>
                <td style="text-align: right; font-weight: bold;">{{ formatNumber(totalDiscount) }}</td>
              </tr>
              <tr class="page-break">
                <td style="text-align: right; font-weight: bold;" colspan="5">ລາຄາລວມ</td>
                <td style="text-align: right; font-weight: bold;">{{ formatNumber((header.total || 0) - totalDiscount) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <v-row no-gutters>
          <v-col>
            <div>
              Name/signature/company stamp
            </div>
          </v-col>
        </v-row>
        <div style="">
          <v-row no-gutters>
            <v-col cols="5" style="" align-self="end">
              <v-card class="mx-auto ml-0" height="134" width="100%" outlined>
                Customer Acceptance (sign below):
              </v-card>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="5">
              <v-card class="mx-auto" height="134" width="100%" outlined>
                Approved By:
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
    }
  },

  computed: {
    companyData() {
      console.log(`**********COMPANY DATA ${mainCompanyInfo}**********`)
      return mainCompanyInfo()
    },
    companyDataV1() {
      try {
        let comV1 = mainCompanyInfoV1(this.$store)
        return comV1 || {}
      } catch (error) {
        console.error('Error loading company data:', error)
        return {}
      }
    },
    companyLogo() {
      try {
        const logoName = this.companyData?.companyLogo
        return logoName ? require(`~/assets/image/${logoName}`) : null
      } catch (error) {
        console.error('Error loading company logo:', error)
        return null
      }
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
    
    async loadQuotationData() {
      try {
        const response = await this.$axios.get(`api/quotation/find/${this.id}`)
        this.header = response.data
        console.log('Quotation data loaded:', this.header)
      } catch (error) {
        console.error('Error loading quotation data:', error)
        // You might want to show a user-friendly error message here
        this.$toast.error('Failed to load quotation data')
      }
    },
    
    formatNumber(val) {
      if (val === null || val === undefined || isNaN(val)) return '0'
      return getFormatNum(val)
    },
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
</style>