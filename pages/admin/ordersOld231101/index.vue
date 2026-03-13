<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogOrderDetail" max-width="1024" persistent>
      <order-detail :key="componentKey" :order-id="selectedOrderId" @close-dialog="handleEvent"></order-detail>
    </v-dialog>
    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()"></cancel-ticket-form>
    </v-dialog>
    <v-card>
      <v-card-title>


        <v-layout row wrap>
          <v-col cols="6">
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>

            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>

          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
            <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx />
            <v-btn @click="loadData" class="primary" size="large" variant="outlined" rounded> ດຶງລາຍງານ </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row wrap>
          <v-row>
            <v-col cols="6" lg="6">
              <order-sumary-card :showTotal="true" 
              :gross="getFormatNum(totalSaleRaw-(+this.unpaidCodOrder.saleRawNumber))"
              :orderDetail="{
                'title': 'ຍອດບິນ',
                'amount': getFormatNum(noCancelData.length), 
                'sale': totalSale, 
                'discount': totalDiscount,
                // 'gross': getFormatNum(totalSale.replaceAll(',', '') - totalDiscount.replaceAll(',', ''))
                'gross': getFormatNum(codFeeTotal)

              }" >

              </order-sumary-card>
            </v-col>
            <v-col cols="6" lg="6">
              <order-sumary-card i :orderDetail="this.unpaidCodOrder">

              </order-sumary-card>
            </v-col>
          </v-row>
        </v-layout>
      </v-card-text>


      <v-data-table  v-if="orderHeaderList" :headers="headers" :search="search" :items="orderHeaderList">
        <template v-slot:[`item.cartTotal`]="{ item }">
          {{ numberWithCommas(item.cartTotal) }}
        </template>
        <template v-slot:[`item.codFee`]="{ item }">
          {{ numberWithCommas(item.codFee) }}
        </template>
        <template v-slot:[`item.net`]="{ item }">
          {{ numberWithCommas(item.net) }}
        </template>
        <template v-slot:[`item.discount`]="{ item }">
          {{ numberWithCommas(item.discount) }}
        </template>
        <template v-slot:[`item.riderFee`]="{ item }">
          {{ numberWithCommas(item.riderFee) }}
        </template>
        <template v-slot:[`item.function`]="{ item }">

          <v-btn color="blue darken-1" text @click="editItem(item)
          wallet = true
            ">

            <i class="fas fa-eye"></i>
          </v-btn>

        </template>
        <template v-slot:[`item.cancel`]="{ item }">

          <v-btn color="blue darken-1" text @click="cancelItem(item)
          wallet = true
            ">
            <i class="fas fa-sync"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.cusTel`]="{ item }">
          <v-btn color="blue darken-1" text @click="whatsappLink(item)">
            {{ item.cusTel }}
            <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
          </v-btn>

        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import OrderDetail from '~/components/OrderDetail.vue'
export default {
  components: { OrderDetail },
  middleware: 'auths',
  data() {
    return {
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrderId: '',
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      dialogForm: false,
      message: '',
      valid: true,
      name: '',
      search: '',
      userId: null,
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',

      headers: [
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'bookingDate',
          sortable: true,
        },
        { text: 'ຊື່ລູກຄ້າ', align: 'center', value: 'cusName' },
        { text: 'ເບີໂທ', align: 'center', value: 'cusTel' },
        { text: 'ບ່ອນສົ່ງ', align: 'center', value: 'cusAddress' },
        {
          text: 'ລາຄາເຕັມ',
          align: 'end',
          value: 'net',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫລຸດ',
          align: 'end',
          value: 'discount',
          sortable: true,
        },
        {
          text: 'ຄ່າຂົນສົ່ງ',
          align: 'end',
          value: 'riderFee',
          sortable: true,
        },
        {
          text: 'COD/Rider Fee',
          align: 'end',
          value: 'codFee',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'end',
          value: 'cartTotal',
          sortable: false,
        },
        {
          text: 'ຂົນສົ່ງ',
          align: 'end',
          value: 'shippingCompany',
          sortable: false,
        },
        {
          text: 'ການຊຳລະ',
          align: 'end',
          value: 'payment',
          sortable: false,
        },
        {
          text: 'ຮ້ານ',
          align: 'end',
          value: 'shopName',
          sortable: false,
        },
        {
          text: 'ໄຣເດີ',
          align: 'end',
          value: 'rider',
          sortable: false,
        },
        {
          text: 'ເຂດ',
          align: 'end',
          value: 'geoname',
          sortable: false,
        },

        {
          text: 'ລາຍລະອຽດ',
          align: 'end',
          value: 'function',
          sortable: false,
        },

        {
          text: 'ຍົກເລີກບິນ',
          align: 'end',
          value: 'cancel',
          sortable: false,
        },
      ],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },
  async created() {
    await this.loadData()
  },
  watch: {

    message(val) {
      if (val != null) {
        this.dialog = true
        return
      }
      this.dialog = false
    },
    isedit(v) {
      if (!v) this.form_data.cus_id = '1XXX'
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadData()
    },
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    totalSale() {
      let total = 0
      this.noCancelData.forEach((el) => {
        console.log("====>", el.cartTotal);
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return this.getFormatNum(total)
      // return total
    },
    totalSaleRaw() {
      let total = 0
      this.noCancelData.forEach((el) => {
        console.log("====>", el.cartTotal);
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return total
      // return total
    },
    totalSaleOriginal() {
      let total = 0
      this.noCancelData.forEach((el) => {
        console.log("====>", el.cartTotal);
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return this.getFormatNum(total)
      // return total
    },
    totalDiscount() {
      let total = 0
      this.noCancelData.forEach((el) => {
        console.log("====>", el.discount);
        total += parseInt(el.discount)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return this.getFormatNum(total)
      // return total
    },
    noCancelData() {
      this.loadDataNoCancelOrder = []
      this.orderHeaderList.forEach(element => {
        console.log(element.recordStatus);
        if (element.recordStatus === 1) {
          console.log("Concept applied");
          this.loadDataNoCancelOrder.push(element)
        }
      });
      return this.loadDataNoCancelOrder;
    },
    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach(element => {
        if (element.paymentStatus === 'PENDING' && element.payment.includes('COD')) {
          console.log("Concept applied");
          txnList.push(element)
        }
      });
      const totalPrice = txnList.reduce((total, item) => {
        return total + item.cartTotal;
      }, 0);
      const totalDiscount = txnList.reduce((total, item) => {
        return total + item.discount;
      }, 0);

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice;
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail;
    },
    codFeeTotal() {
      let sum = this.orderHeaderList.reduce((total, current) => total + current['codFee'], 0);
      return sum
    }
  },

  methods: {
    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    whatsappLink(item) {
      // const completeTel = tel.substring(tel.length-7);
      const tel = item.cusTel.trim();

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    editItem(item) {
      this.componentKey += 1;
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail;
    },
    cancelItem(payload) {
      console.log("Order id", payload.orderId);
      this.componentCancelFormKey += 1;
      this.OrderIdSelected = payload.orderId
      // this.orderLockingSessionId = payload.lockingSessionId;
      this.cancelForm = true;
    },
    handleEvent() {
      this.dialogOrderDetail = false;
    },
    async loadData() {
      this.isloading = true
      await this.$axios
        .get('api/dynamicCustomer/findDymCustomerByBookingDate/?fdate=' + this.date + '&tdate=' + this.date2)
        .then((res) => {
          // ****** Clear Old Data
          this.orderHeaderList = []
          this.orderHeaderList = res.data.allOrder.map((el) => {
            return {
              'net': (el.cart_total),
              'cartTotal': (el.cart_total + el.rider_fee) - (el.discount + el.cod_fee),
              'codFee': el.cod_fee,
              'cusAddress': el.dest_delivery_branch,
              'discount': el.discount,
              'id': el.id,
              'lockingSessionId': el.locking_session_id,
              'cusName': el.name,
              'payment': el.payment_code,
              'riderFee': el.rider_fee,
              'shippingFeeBy': el.shipping_fee_by,
              'shopName': el.outlet_name,
              'shippingCompany': el.source_delivery_branch,
              'cusTel': el.tel,
              'bookingDate': el.txn_date.split('T')[0],
              'recordStatus': el.record_status,
              'orderId': el.order_id,
              'rider': el.rider,
              'geoname': el.geoname+' - '+el.geodesc,
              'paymentStatus': 'PENDING'
            }

          });
          this.codPaid = res.data.codPaid.map((el) => {
            return {
              'net': (el.cart_total),
              'cartTotal': (el.cart_total + el.rider_fee) - (el.discount + el.cod_fee),
              'codFee': el.cod_fee,
              'cusAddress': el.dest_delivery_branch,
              'discount': el.discount,
              'id': el.id,
              'lockingSessionId': el.locking_session_id,
              'cusName': el.name,
              'payment': el.payment_code + ' [PAID]',
              'riderFee': el.rider_fee,
              'shippingFeeBy': el.shipping_fee_by,
              'shopName': el.outlet_name,
              'shippingCompany': el.source_delivery_branch,
              'cusTel': el.tel,
              'bookingDate': el.txn_date.split('T')[0],
              'recordStatus': el.record_status,
              'orderId': el.order_id,
              'rider': el.rider,
              'geoname': el.geoname+' - '+el.geodesc,
              'paymentStatus': 'PAID'
            }

          });

          this.orderHeaderList.push(...this.codPaid);
          console.log(this.orderHeaderList.length);
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}
</style>
