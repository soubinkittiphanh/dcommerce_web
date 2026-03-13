<template>
  <div class="text-center">

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogOrderDetail" max-width="1024" persistent>
      <order-detail :key="componentOrderItemKey" :order-id="selectedOrderId" @close-dialog="handleEvent"></order-detail>
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
            <!-- <v-btn @click="loadData"> ດຶງລາຍງານ </v-btn> -->
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ດຶງລາຍງານ
            </v-btn>
            <!-- <v-btn @click="loadData"> ດຶງລາຍງານ </v-btn> -->
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row wrap>
          <v-row>

            <v-col cols="6" lg="6">
              <order-sumary-card :orderDetail="this.orderDetailProp">

              </order-sumary-card>
            </v-col>
            <v-col cols="6" lg="6">
              <!-- <order-sumary-card :orderDetail="this.unpaidCodOrder">

              </order-sumary-card> -->
            </v-col>
          </v-row>
        </v-layout>
      </v-card-text>

      <v-data-table :headers="headers" :search="search" :items="orderHeaderList">
        <template v-slot:[`item.function`]="{ item }">

          <v-btn color="blue darken-1" text @click="editItem(item)
          wallet = true
            ">
            <i class="fas fa-eye"></i>
          </v-btn>

        </template>
        <template v-slot:[`item.cusTel`]="{ item }">

          <v-btn color="blue darken-1" text @click="whatsappLink(item)">
            {{ item.cusTel }}
            <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
          </v-btn>

        </template>
        <template v-slot:[`item.discount`]="{ item }">


          {{numberWithFormat(item.discount) }}

        </template>
        <template v-slot:[`item.cartTotal`]="{ item }">

            {{numberWithFormat(item.cartTotal) }}
            

        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import OrderDetail from '~/components/OrderDetail.vue'
import { getFormatNum } from '~/common'
export default {
  components: { OrderDetail },
  middleware: 'auths',
  data() {
    return {
      whatsappContactLink: '',
      componentOrderItemKey: 1,
      dialogOrderDetail: false,
      selectedOrderId: '',
      wallet: false,
      dialog: false,
      isloading: false,
      dialogForm: false,
      valid: true,
      name: '',
      search: '',
      userId: null,
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
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
        { text: 'ສາເຫດຍົກເລີກ', align: 'center', value: 'cancelReason' },
        {
          text: 'ສ່ວນຫລຸດ',
          align: 'end',
          value: 'discount',
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
          text: 'ລາຍລະອຽດ',
          align: 'end',
          value: 'function',
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
    orderDetailProp() {

      let orderDetail = {}

      const totalPrice = this.orderHeaderList.reduce((total, item) => {
        console.log("cart_total: ",item.cartTotal);
        return total + item.cartTotal;
      }, 0);
      const totalDiscount = this.orderHeaderList.reduce((total, item) => {
        console.log("discount: ",item.discount);
        return total + item.discount;
      }, 0);

      orderDetail.amount = this.orderHeaderList.length
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(totalPrice - totalDiscount)
      orderDetail.title = 'ຍອດບິນ ຍົກເລີກ'
      return orderDetail;
    }
  },
  beforeEnter() {
    console.log("Hook is being called");
    this.refreshComponent();
  },
  methods: {
    numberWithFormat(val){
      return getFormatNum(val)
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
      this.componentOrderItemKey += 1;
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail;
    },
    handleEvent() {
      this.dialogOrderDetail = false;
    },
    async loadData() {
      this.isloading = true
      await this.$axios
        .get('/api/findCancelOrderByDate/?fDate=' + this.date + '&tDate=' + this.date2)
        .then((res) => {
          // return console.log('Data => ', res.data);
          this.orderHeaderList = res.data.map((el) => {
            return {
              'cartTotal': el.cart_total,
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
              'cancelReason': el.cancel_reason,
              'paymentStatus': 'PENDING'
            }

          });

          console.log(this.orderHeaderList.length);
          this.isloading = false
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
          this.isloading = false
        })
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

