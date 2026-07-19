<template>
  <div class="text-left">
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍການໂອນສິນຄ້າຂ້າມສ້າງ</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <!-- <v-dialog v-model="dialogOrderDetail" max-width="1024">
      <transfer-view-form @reload="loadData()
      dialogOrderDetail = false" :is-quotation="false" :key="componentKey" :is-update="viewTransaction"
        :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </transfer-view-form>
    </v-dialog> -->
    <v-bottom-sheet
      v-model="dialogOrderDetail"
      persistent
      fullscreen
      content-class="transfer-bottom-sheet-content"
    >
      <transfer-form @reload="loadData()
    dialogOrderDetail = false" :is-quotation="false" :key="componentKey" :is-update="viewTransaction"
        :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </transfer-form>
    </v-bottom-sheet>


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
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="createSale" class="primary" rounded>
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row wrap>
          <v-row>
            <v-col cols="6" lg="6">
              <order-sumary-card-pos suffix="ລາຍການ" :orderDetail="{
      'title': 'ສະຫຼຸບການໂອນສິນຄ້າ (Transfer Summary)',
      'amount': getFormatNum(activeheaderList.length),
      'sale': getFormatNum(totalSale)
    }">

              </order-sumary-card-pos>
            </v-col>
            <!-- <v-col cols="6" lg="6">
              <order-sumary-card i :orderDetail="this.unpaidCodOrder">

              </order-sumary-card>
            </v-col> -->
          </v-row>
        </v-layout>
      </v-card-text>

      <!-- <v-divider></v-divider> -->



      <v-data-table v-if="activeheaderList" :headers="headers" :search="search" :items="activeheaderList">
        <template v-slot:[`item.bookingDate`]="{ item }">
          {{ item.bookingDate.split('T')[0] }}
        </template>

        <template v-slot:[`item.total`]="{ item }">
          {{ numberWithCommas(calculateTransferTotal(item)) }}
        </template>
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ item.createdAt.split('.')[0] }}
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" text @click="viewItem(item)
    wallet = true
      ">
            <i class="fa-regular fa-pen-to-square"></i>
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
import { swalError2, dayCount, getNextDate, getFirstDayOfMonth } from '~/common'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { OrderSumaryCardPos },
  middleware: 'auths',
  data() {
    return {
      viewTransaction: false,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      dialogForm: false,

      valid: true,
      name: '',
      search: '',
      userId: null,
      headerList: [],
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
        {
          text: 'remark',
          align: 'center',
          value: 'remark',
          sortable: true,
        },
        {
          text: 'from',
          align: 'center',
          value: 'srcLocation.name',
          sortable: true,
        },
        {
          text: 'to',
          align: 'center',
          value: 'desLocation.name',
          sortable: true,
        },
        {
          text: 'ມູນຄ່າລວມ (Total Cost)',
          align: 'end',
          value: 'total',
          sortable: true,
        },
        {
          text: 'ຜູ້ລົງທຸລະກຳ',
          align: 'end',
          value: 'user.cus_name',
          sortable: false,
        },
        {
          text: 'ເວລາລົງ',
          align: 'end',
          value: 'createdAt',
          sortable: false,
        },
        {
          text: 'View/Update',
          align: 'end',
          value: 'id',
          sortable: false,
        },
      ],
      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        // new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        //   .toISOString()
        //   .substr(0, 10)
        getFirstDayOfMonth()
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
    activeheaderList() {
      return this.headerList.filter(el => el.isActive === true && el.paymentId !== 2)
    },
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    totalSale() {
      let total = 0
      this.activeheaderList.forEach((el) => {
        total += this.calculateTransferTotal(el)
      })
      return total
    },
    totalSaleRaw() {
      let total = 0
      this.activeheaderList.forEach((el) => {
        total += this.calculateTransferTotal(el)
      })
      return total
    },

    totalDiscount() {
      let total = 0
      this.activeheaderList.forEach((el) => {
        const val = parseFloat(String(el.discount || 0).replace(/,/g, '')) || 0
        total += val
      })
      return total
    },

    unpaidCodOrder() {
      const txnList = []
      const orderDetail = {}
      this.headerList.forEach(element => {
        const paymentStr = element.payment 
          ? (typeof element.payment === 'object' ? element.payment.payment_code : String(element.payment))
          : '';
        if (element.paymentStatus === 'PENDING' && paymentStr && paymentStr.includes('COD')) {
          console.log("Concept applied");
          txnList.push(element)
        }
      });
      const totalPrice = txnList.reduce((total, item) => {
        const val = parseFloat(String(item.total || 0).replace(/,/g, '')) || 0
        return total + val;
      }, 0);
      const totalDiscount = txnList.reduce((total, item) => {
        const val = parseFloat(String(item.discount || 0).replace(/,/g, '')) || 0
        return total + val;
      }, 0);

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice;
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail;
    },
  },

  methods: {
    createSale() {
      this.componentKey += 1;
      this.selectedOrder = 0
      this.viewTransaction = false;
      this.dialogOrderDetail = true;
    },
    countDay(startDate) {
      return dayCount(startDate)
    },
    dueDate(startDate, day) {
      console.log("DATE ", startDate, " to ", day);
      return getNextDate(startDate, day)
    },
    numberWithCommas(value) {
      if (value === undefined || value === null) return '0';
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    calculateTransferTotal(item) {
      if (!item || !item.lines || !Array.isArray(item.lines)) return 0
      return item.lines
        .filter(line => line.isActive !== false)
        .reduce((sum, line) => {
          const lineTotal = parseFloat(String(line.total || 0).replace(/,/g, '')) || 0
          return sum + lineTotal
        }, 0)
    },
    editItem(item) {
      this.componentKey += 1;
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail;
    },
    viewItem(item) {
      this.componentKey += 1;
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true;
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
      const date = {
        startDate: this.date,
        endDate: this.date2
      }
      await this.$axios
        .get(`api/transfer/findByDate`, { params: { date } })
        .then((res) => {
          // ****** Clear Old Data
          this.headerList = []
          for (const iterator of res.data) {
            this.headerList.push(iterator)
          }
          console.log("====> " + this.headerList.length);
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },
    formatDate(date) {
      if (!date) return null
      console.log("DATE FORMAT METHOD1: " + date);
      const formattedDate = this.formatDateToISO(date);
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      console.log("DATE PARSE METHOD1: " + date);
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
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

<style>
.transfer-bottom-sheet-content {
  border-radius: 24px 24px 0 0 !important;
  overflow: hidden;
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.15) !important;
  background: transparent !important;
}
</style>
