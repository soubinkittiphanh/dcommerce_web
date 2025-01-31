<template>
  <div id="body">
    <div size="A4" class="wrapper page">
      <v-container>
        <div style="display: flex; justify-content: center">
          <v-row>
            <v-col cols="6">
              <img :src="companyLogo" width="200px" />
            </v-col>
            <v-col cols="6" align-self="end">
              <table
                class="table-layout"
                style="font-size: larger; font-weight: bold"
              >
                <tbody style="text-align: right">
                  <tr style="white-space: nowrap">
                    <td>{{ this.companyData.name }}</td>
                  </tr>
                  <!-- <tr style="white-space: nowrap">
                    <td> Laos Friend</td>
                  </tr> -->
                  <tr style="white-space: nowrap">
                    <td>{{ this.companyData.address }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Tel: {{ this.companyData.tel }}</td>
                  </tr>
                  <!-- <tr style="white-space: nowrap">
                    <td> 020 2337-8899</td>
                  </tr> -->
                </tbody>
              </table>
            </v-col>
          </v-row>
        </div>
        <p
          class="text-color"
          style="font-size: 21pt; font-weight: bold; text-align: center"
        >
          ໃບແຈ້ງໜີ້ / Invoice
        </p>
        <v-divider></v-divider>
        <div v-if="client">
          <v-row>
            <v-col cols="6">
              <table
                class="table-layout"
                style="font-size: 12pt; font-weight: bold"
              >
                <tbody>
                  <tr style="white-space: nowrap">
                    <td>Customer ID: {{ client.id }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Customer Name: {{ client.name }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Company: {{ client.company }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>ເບີໂທ: {{ client.telephone }}</td>
                  </tr>
                </tbody>
              </table>
            </v-col>
            <v-col cols="6" align-self="end">
              <table
                class="table-layout"
                style="font-size: 12pt; font-weight: bold"
              >
                <tbody style="text-align: right">
                  <!-- <tr style="white-space: nowrap">
                    <td> Invoice No: NOOOO</td>
                  </tr> -->
                  <tr style="white-space: nowrap">
                    <td>Date of issue: {{ todayDate }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>
                      Invoice from date: {{ queryPayload.date.startDate }}
                    </td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>to: {{ queryPayload.date.endDate }}</td>
                  </tr>
                  <tr style="white-space: nowrap">
                    <td>Prepare By: {{ user.cus_name }}</td>
                  </tr>
                </tbody>
              </table>
            </v-col>
          </v-row>
        </div>
        <v-divider></v-divider>
        <div v-if="header">
          <table
            class="table table-layout"
            style="border-collapse: collapse"
            width="100%"
          >
            <thead>
              <tr>
                <th style="width: 40px">ລດ</th>
                <th style="width: 80px">DATE</th>
                <th style="width: 180px">INVOICE No.</th>
                <!-- <th style="width: 80px">DISCOUNT</th> -->
                <!-- <th style="width: 100px">PAID</th> -->
                <th style="width: 70px">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <div v-if="allInvoices.length > 0" style="display: contents">
                <tr
                  v-for="(header, i) in allInvoices"
                  :key="header.id"
                  class="page-break"
                >
                  <td class="text-center">{{ ++i }}</td>
                  <td>{{ header.bookingDate }}</td>
                  <td style="text-align: right">No.{{ header.id }}</td>
                  <!-- <td style="text-align: right;">{{ formatNumber(header.discount) }}</td> -->
                  <!-- <td style="text-align: right;">{{ formatNumber(header.total) }}</td> -->
                  <td style="text-align: right">
                    {{ formatNumber(header.total) }}
                  </td>
                </tr>
              </div>
              <div v-else style="display: contents">
                <tr>
                  <td colspan="6">ບໍ່ມີຂໍ້ມູນ</td>
                </tr>
              </div>
              <tr class="page-break">
                <td style="text-align: right; font-weight: bold" colspan="3">
                  Discount
                </td>
                <td style="text-align: right; font-weight: bold">
                  {{ formatNumber(grand.totalDiscount) }}
                </td>
              </tr>
              <tr class="page-break">
                <td style="text-align: right; font-weight: bold" colspan="3">
                  ລາຄາລວມ
                </td>
                <td style="text-align: right; font-weight: bold">
                  {{ formatNumber(grand.grandTotal - grand.totalDiscount) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- title 12 -->
        <v-row no-gutters class="title-space">
          <v-col> </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <div>
              <h3>PAYMENT METHOD</h3>
            </div>
          </v-col>
        </v-row>
        <div>
          <v-row no-gutters>
            <v-col cols="5" style="" align-self="end">
              <v-card class="mx-auto pa-10" height="134" width="100%" outlined>
                <h4>BANK TRANSFER:</h4>
                <!-- <h4>BANK NAME: LAO DEVELOPMENT BANK</h4>
                <h4>- ACCOUNT NUMBER: 999-99-99-9999</h4>
                <h4>- ACCOUNT NAME: CHITHANH MINIMART</h4>
                <h4>- CURRENCY: LAK</h4>
                <v-divider></v-divider> -->
                <h4>BANK NAME: BCEL BANK</h4>
                <br />
                <h4>- ACCOUNT NUMBER: 050-12-00-00239021-001</h4>
                <h4>- CURRENCY: LAK</h4>
                <h4>- ACCOUNT NAME: MS. VANIDA VIPHAVADY</h4>
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
import { mapGetters } from 'vuex'
// import { _getMonthDiff, _calculateAge } from '@/helper/Utils'
import { getFormatNum, jsDateToMysqlDate } from '~/common'
import { mainCompanyInfo } from '~/common/api'
export default {
  name: 'Quotation',
  layout: 'login',
  // middleware: ['roles/admin_mange_users'],

  data() {
    return {
      id: null,
      header: null,
      allInvoices: [],
      client: null,
      // companyLogo: require(`~/assets/image/${companyData.dcLogo}`),
      queryPayload: {
        clientId: 1,
        paymentId: 2,
      },
    }
  },

  computed: {
    companyData() {
      console.log(`**********COMPANY DATA ${mainCompanyInfo}**********`)
      return mainCompanyInfo()
    },

    companyLogo() {
      return require(`~/assets/image/${this.companyData.dcLogo}`)
    },
    ...mapGetters([
      'cartOfProduct',
      'currentSelectedCustomer',
      'currentSelectedPayment',
      'findAllProduct',
    ]),
    grand() {
      let totalDiscount = 0
      let grandTotal = 0
      for (const iterator of this.allInvoices) {
        totalDiscount += iterator['discount']
        grandTotal += iterator['total']
      }
      totalDiscount += this.header.discount
      return { totalDiscount, grandTotal }
    },
    user() {
      return this.$auth.user || 'N/A'
    },
    todayDate() {
      const today = new Date().toISOString().substr(0, 10)
      return today
    },
  },
  async created() {
    // this.id = parseInt(this.$route.query.id)
    // this.id = this.$route.params.id
    const payloadString = this.$route.query.payload
    console.log(`=====> PAYLOAD ${payloadString}`)
    const payload = payloadString ? JSON.parse(payloadString) : null
    this.queryPayload = payload
    if (payload) {
      await this.$axios
        .post(`api/sale/report/summary/`, payload)
        .then((res) => {
          this.allInvoices = []
          console.log(`Data is loading comes ${res.data}`)
          this.client = res.data[0]['client']
          for (const iterator of res.data) {
            this.header = iterator
            this.allInvoices.push(this.header)
          }
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    }
  },

  methods: {
    formatNumber(val) {
      return getFormatNum(val)
    },
  },
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
  color: #246ab2;
}

.page-break {
  page-break-inside: avoid;
  page-break-after: auto;
}

@media screen {
  /*.page-footer {*/
  /*  display: none;*/
  /*}*/
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
    page-break-after: auto;
  }

  td {
    page-break-inside: avoid;
    page-break-after: auto;
  }

  thead {
    display: table-header-group;
  }

  tfoot {
    display: table-footer-group;
  }

  #page-break {
    clear: both;
    page-break-after: always;
  }

  @page {
    /*size: 8.5in 8.5in;*/
    /*size: auto;*/
    /*margin: 0 30px 0 0 !important;*/
    margin: 1cm 0cm 0.2cm 0cm;
  }

  @page :first {
    /*margin-top: 0 !important;*/
    /*margin-bottom: 1cm !important;*/
  }
}

/*@page {*/
/*  size: auto;*/
/*  margin-top: 50px !important;*/
/*}*/

/*@page :first {*/
/*  margin-top: 50px !important;*/
/*}*/

.page-footer,
.page-footer-space {
  height: 100px;
}

/*.page {*/
/*  page-break-after: always;*/
/*}*/

.page-footer {
  position: fixed;
  bottom: 0;
  width: 21cm;
  /*border-top: 1px solid black;*/
  /*background: yellow; */
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
  /* font-weight: bold; */
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
  /*box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);*/
}

.page[size='A4'] {
  width: 21cm;
  /*height: 29.7cm;*/
}

.page[size='A4'][layout='landscape'] {
  width: 29.7cm;
  height: 21cm;
}

.page[size='A3'] {
  width: 29.7cm;
  height: 42cm;
}

.page[size='A3'][layout='landscape'] {
  width: 42cm;
  height: 29.7cm;
}

.page[size='A5'] {
  width: 14.8cm;
  height: 21cm;
}

.page[size='A5'][layout='landscape'] {
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
