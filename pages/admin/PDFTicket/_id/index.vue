<template>
  <div id="body">
    <div size="A4" class="wrapper page">
      <v-container>
        <div style="display: flex; justify-content: center;">
          <div class="mt-6 mb-6">
            <img :src="companyLogo" width="200px" />
          </div>
        </div>
        <h1 style="text-align: center;">Laos Friend</h1>
        <p class="text-color" style="font-size: 21pt; font-weight: bold; text-align: center">
          Receipt {{ id }}
        </p>
        <v-divider></v-divider>
        <div v-if="header">
          <v-row>
            <v-col cols="6">
            
            </v-col>
            <v-col cols="6" align-self="end">

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
                <!-- <th style="width: 80px">Unit</th> -->
                <th style="width: 100px">total</th>
              </tr>
            </thead>
            <tbody>
              <div v-if="(header.lines) && header.lines.length > 0" style="display: contents">
                <tr v-for="(line, i) in header.lines" :key="line.id" class="page-break">
                  <td class="text-center">{{ ++i }}</td>
                  <td>{{ line.product['pro_name'] }}</td>
                  <td style="text-align: right;">{{ line.quantity }} X {{ formatNumber(line.price) }}</td>
                 <td style="text-align: right;">{{ formatNumber(line.total) }}</td>
                </tr>
              </div>
              <div v-else style="display: contents">
                <tr>
                  <td colspan="6">ບໍ່ມີຂໍ້ມູນ</td>
                </tr>
              </div>
              <tr v-for="item in currencyList" :key="item.id" class="page-break">

                <td style="text-align: right; font-weight: bold;" colspan="3">{{ item.code }} </td>
                <td style="text-align: right; font-weight: bold;"> {{ formatNumber(header.total/item.rate) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Card rounded -->
        <div style="">
          <v-row no-gutters>
            <v-col cols="5" style="" align-self="end">
              <v-card class="mx-auto ml-0" height="134" width="100%" outlined>
                ເຊັນລູກຄ້າ:
              </v-card>
            </v-col>
            <v-col cols="2"></v-col>
            <v-col cols="5">
              <v-card class="mx-auto" height="134" width="100%" outlined>
                Receiver:
                <h3 v-if="header">Payment: {{ header.payment.payment_name }}</h3>
                <h3 v-for="item in currencyList" :key="item.id">{{ item.code }}:{{ formatNumber(item.rate) }}</h3>
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
import { getFormatNum,swalSuccess,swalError2 } from '~/common'
import { mainCompanyInfo } from '~/common/api'
export default {
  name: 'Quotation',
  layout: 'login',
  // middleware: ['roles/admin_mange_users'],

  data() {
    return {
      id: null,
      header: null,
      // companyLogo: require('~/assets/image/company_logo.jpeg'),
      currencyList:null,
    }
  },

  computed: {
    companyData() {
      console.log(`**********COMPANY DATA ${mainCompanyInfo}**********`)
      return mainCompanyInfo()
    },

    companyLogo() {
      return require(`~/assets/image/${this.companyData.companyLogo}`)
    },
    ...mapGetters(['cartOfProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findAllProduct']),

  },
  async created() {

    // this.id = parseInt(this.$route.query.id)
    this.id = this.$route.params.id
    if (this.id) {
      const empId = Number.isInteger(this.id) ? this.id : null
      await this.$axios
        .get(`api/sale/find/${this.id}`)
        .then((res) => {
          console.log(`Data is loading`);
          this.header = res.data
          console.log(`Data comes ===> ${this.header.payment.payment_name}`);

        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
      await this.loadCurrency()
    }
  },

  methods: {
    formatNumber(val) {
      return getFormatNum(val)
    },
    async loadCurrency() {
      this.isloading = true;
      this.currencyList = []
      console.log("Loading currency ===>");
      await this.$axios
        .get('/api/currency/find')
        .then((res) => {
          for (const iterator of res.data) {
            this.currencyList.push(iterator);
          }
        })
        .catch((er) => {
          console.error('Error: ' + er)
          // swalError2(this.$swal, "Error", er)
        })
      this.isloading = false;
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
  /*.page-footer {*/
  /*  display: none;*/
  /*}*/
}

@media print {

  body,
  .page {
    margin: 0;
    width: 80mm;
    height: auto;
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

.page-footer,
.page-footer-space {
  height: 100px;
}


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
  font-size: 8pt;
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

.d-flex>p {
  margin-bottom: 0;
}

.table-layout {
  table-layout: fixed;
  width: 100%;
}

.table-layout>tbody>tr>td:nth-child(1) {
  width: 130px;
}

.table-layout>tbody>tr>td:nth-child(5) {
  width: 80px;
}

.table-layout>tbody>tr>td:nth-child(6) {
  width: 150px;
}

td {
  word-wrap: break-word;
  vertical-align: top;
  padding-right: 2px;
  padding-left: 2px;
}
</style>
