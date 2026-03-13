<template>
  <div id="body">
    <div size="A4" class="wrapper page">
      <div>
        <!-- <div style="display: flex; justify-content: left;">
          <div class="mt-6 mb-6">
            <img src="../../assets/image/app_logo.png" width="200px" />
          </div>
        </div> -->
        <p class="text-color" style="font-size: 21pt; font-weight: bold; text-align: center">
          ໃບສະເໜີລາຄາ
        </p>

        <div style="padding-left: 1cm;padding-right: 1cm">
          <!--title1-->
          <div class="title-space">
            <v-row>
              <v-col cols="6">
                <b class="text-color heading-14">1. ຂໍ້ມູນລູກຄ້າ:</b>

              </v-col>
              <v-col cols="6" style="text-align: right;">

                <b class="text-color heading-14">ຮ້ານ: ຈີທັ່ນ</b>
              </v-col>
              <!-- <v-spacer></v-spacer> -->
            </v-row>
          </div>
          <div>
            <v-row>
              <v-col cols="6">
                <table class="table-layout">
                  <tbody>
                    <tr style="white-space: nowrap">
                      <td> ຊື່: {{ currenctCustomer.name }}</td>
                    </tr>
                    <tr style="white-space: nowrap">
                      <td> ບໍລິສັດ: {{ currenctCustomer.company }}</td>
                    </tr>
                    <tr style="white-space: nowrap">
                      <td> ເບີໂທ: {{ currenctCustomer.telephone }}</td>
                    </tr>
                  </tbody>
                </table>
              </v-col>
              <v-col cols="6" align-self="end">

                <table class="table-layout">
                  <tbody style="text-align: right;">
                    <tr style="white-space: nowrap">
                      <td> ເລກໃບສະເຫນີລາຄາ: {{ currenctCustomer.name }}</td>
                    </tr>
                    <tr style="white-space: nowrap">
                      <td> ວັນທີ: {{ new Date().toDateString() }}</td>
                    </tr>
                    <tr style="white-space: nowrap">
                      <td> ໂທ: 071 999 999</td>
                    </tr>
                  </tbody>
                </table>
              </v-col>
            </v-row>
          </div>




          <!-- title 7 -->
          <div class="title-space">
            <b class="text-color heading-14">2. ລາຍການສິນຄ້າ</b>
          </div>
          <div>
            <table class="table table-layout" style="border-collapse: collapse;" width="100%">
              <thead>
                <tr>
                  <th style="width: 40px">ລ/ດ</th>
                  <th style="width: 180px">ສິນຄ້າ</th>
                  <th style="width: 80px">ຈຳນວນ</th>
                  <th style="width: 100px">ລາຄາຕໍ່ຫນ່ວຍ</th>
                  <th style="width: 70px">ລວມ</th>
                </tr>
              </thead>
              <tbody>
                <div v-if="(productCart) && productCart.length > 0" style="display: contents">
                  <tr v-for="(product, i) in productCart" :key="product.id" class="page-break">
                    <td class="text-center">{{ ++i }}</td>
                    <td>{{ product.pro_name }}</td>
                    <td style="text-align: right;">{{ product.qty }}</td>
                    <td style="text-align: right;">{{ formatNumber(product.pro_price) }}</td>
                    <td style="text-align: right;">{{ formatNumber(product.pro_price * product.qty) }}</td>
                  </tr>
                </div>
                <div v-else style="display: contents">
                  <tr>
                    <td colspan="5">ບໍ່ມີຂໍ້ມູນ</td>
                  </tr>
                </div>

              </tbody>
            </table>
            <div class="pa-2">
              <v-row>
                <v-col cols="12" style="text-align: right; font-weight: bold;font-size: medium;">
                  ລວມລາຄາ: {{ formatNumber(grandTotal) }}
                </v-col>
              </v-row>
            </div>
          </div>
          <!-- title 12 -->
          <v-row no-gutters class="title-space">
            <v-col>
              <!--              <b class="text-color heading-14">12. ສັງເກດຕີລາຄາ ຈຸດດີ ແລະ ຈຸດອ່ອນພື້ນຖານຂອງຕົນເອງ</b>-->
              <b class="text-color heading-14">3. Term and condition</b>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <div>
                This quotation is valid for 30 days
                Delivery in maximum 15 days after confirmation of order
              </div>
              <br>
              <div>
                Confirmed and Accepted by Customer
              </div>

              <div class="mt-10">

                -----------------------------------------------------------------------------

              </div>
              <div>
                Name/signature/company stamp
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { _getMonthDiff, _calculateAge } from '@/helper/Utils'
import { getFormatNum, jsDateToMysqlDate } from '~/common'
export default {
  name: 'EmployeeInfo',
  layout: 'cv',
  // middleware: ['roles/admin_mange_users'],

  data() {
    return {
      // header: require('assets/img/header_report.jpg'),
      id: null,
      age: 0,
      discount: 0,

    }
  },

  computed: {
    ...mapGetters(['cartOfProduct', 'currenctSelectedCategoryId', 'currentSelectedCustomer', 'currentSelectedPayment']),
    currenctCustomer() {
      return this.currentSelectedCustomer
    },
    productCart() {
      return this.cartOfProduct
    },
    grandTotal() {
      // const discountTotal = 0;
      const totalPrice = this.cartOfProduct.reduce((total, item) => {
        // discountTotal+=item.discount
        return total + item.qty * item.pro_price;
      }, 0);
      // this.discount = discountTotal;
      return totalPrice
    },
  },

  async created() {
    this.id = parseInt(this.$route.query.id)
    if (this.id) {
   
        // await this.getQuotation(empId)

    }
  },

  methods: {

  }

}
</script>


<style scoped>
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

.page[size="A4"] {
  width: 21cm;
  /*height: 29.7cm;*/
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
