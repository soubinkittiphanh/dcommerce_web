<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="payment" max-width="300px">
      <settlement :user-id="formData.cusId" :amount="paymentAmount" :order-id="OrderIdSelected"
        @closewallet="payment = false" @reload="fetchData()"></settlement>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="12" lg="5">
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
            <div><span> ຈຳນວນ: {{ getFormatNum(countOrder) }} ອໍເດີ</span></div>
            <span> ລາຄາລວມ: {{ totalSale }}</span>
            <div>
              <span> ສ່ວນຫລຸດ: {{ totalSaleOriginal }}</span>
            </div>
            <div>
              <span> ຍອດເຫລືອ: {{ getFormatNum(totalSale.replaceAll(",", "") - totalSaleOriginal.replaceAll(",", ""))
              }}</span>
            </div>
          </v-col>
          <v-col cols="12" lg="5">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
            <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx />
            <v-btn @click="fetchData"> ດຶງລາຍງານ </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-data-table v-if="loaddata" :headers="headers" :search="search" :items="loaddata">
        <template v-slot:[`item.function`]="{ item }">

          <v-btn color="blue darken-1" text @click="editItem(item)
                                                      wallet = true
                                                    ">

            <i class="fas fa-wallet"></i>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  middleware: 'auths',
  data() {
    return {
      payment: false,
      paymentAmount: 0,
      OrderIdSelected: "",
      isedit: false,
      dialog: false,
      isloading: false,
      dialogForm: false,
      message: '',
      valid: true,
      name: '',
      search: '',
      userId: null,
      loaddata: [],
      loadDataNoCancelOrder: [],
      formData: {
        cusId: 10000,
        cusBalance: 0,
      },
      headers: [

        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'txn_date',
          sortable: true,
        },
        {
          text: 'ຈນ ວັນ',
          align: 'center',
          value: 'dueDate',
          sortable: true,
        },
        { text: 'ຊື່ລູກຄ້າ', align: 'center', value: 'cus_name' },
        { text: 'ລະຫັດສິນຄ້າ', align: 'center', value: 'product_id' },
        { text: 'ບ່ອນສົ່ງ', align: 'center', value: 'cus_addr' },
        { text: 'ຈຳນວນ', align: 'center', value: 'product_amount' },
        {
          text: 'ລາຄາ',
          align: 'end',
          value: 'product_price',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫລຸດ',
          align: 'end',
          value: 'product_discount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'end',
          value: 'order_price_total',
          sortable: false,
        },
        {
          text: 'ຂົນສົ່ງ',
          align: 'end',
          value: 'shipping',
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
          value: 'outlet',
          sortable: false,
        },
        {
          text: 'ສະຖານະ',
          align: 'end',
          value: 'recordStatusText',
          sortable: false,
        },

        {
          text: 'ກົດຊຳລະ',
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
    await this.fetchData()
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
      if (!v) this.formData.cusId = '1XXX'
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.fetchData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.fetchData()
    },
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    noCancelData() {
      this.loaddata.forEach(element => {
        console.log(element.recordStatus);
        if (element.recordStatus === 1) {
          console.log("Concept applied");
          this.loadDataNoCancelOrder.push(element)
        }
      });
      return this.loadDataNoCancelOrder;
    },

    totalSale() {
      let total = 0
      this.noCancelData.forEach((el) => {
        total += parseInt(el.order_price_total.replaceAll(',', ''))
      })
      return this.getFormatNum(total)
      // return total
    },
    totalSaleOriginal() {
      let total = 0
      this.noCancelData.forEach((el) => {
        total += parseInt(el.product_discount.replaceAll(',', ''))
      })
      return this.getFormatNum(total)
    },
    countOrder() {
      return this.loadDataNoCancelOrder.length;
    },


  },
  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    codDayCount(fromDate) {
      const sqlTojsDate = fromDate.split('-')[1] + '/' + fromDate.split('-')[2] + '/' + fromDate.split('-')[0]
      const date1 = new Date(sqlTojsDate);
      const date2 = new Date();
      const difference =   date2.getTime()-date1.getTime();
      const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      return TotalDays;
    },
    async fetchData() {
      this.isloading = true
      await this.$axios
        .get('order_by_payment/?fromDate=' + this.date + '&toDate=' + this.date2 + '&paymentCode=COD')
        .then((res) => {
          this.loaddata = res.data.map((el) => {
            return {
              order_id: el.order_id + ' - ' + el.locking_session_id,
              user_id: el.user_id,
              product_id: el.pro_name,
              cus_name: el.name + ' ' + el.tel,
              cus_tel: el.tel,
              cus_addr: el.cus_address,
              shipping: el.shipping,
              payment: el.payment_code,
              product_amount: el.product_amount,
              outlet: el.shop_name,
              shipping_fee: el.shipping_fee_by,
              product_price: this.getFormatNum(el.product_price),
              order_price_total: this.getFormatNum(((el.product_price * el.product_amount) + el.rider_fee) - el.product_discount),
              product_discount: this.getFormatNum(el.product_discount),
              txn_date: el.txn_date.split('T')[0],
              dueDate: this.codDayCount(el.txn_date.split('T')[0]),
              recordStatus: el.record_status,
              recordStatusText: el.record_status===1?'Effeced':el.record_status===2?'Cancel':'Return',
            }

          });
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
    editItem(payload) {
      console.log("Edit test", payload.order_price_total.replaceAll(",", ""));
      this.paymentAmount = +payload.order_price_total.replaceAll(",", "")
      this.OrderIdSelected = payload.order_id
      this.payment = true;
    }
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}
</style>