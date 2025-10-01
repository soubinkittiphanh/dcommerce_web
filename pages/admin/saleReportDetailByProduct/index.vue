<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການບິນຂາຍ</h3>
      </v-chip>
      <!-- <v-spacer></v-spacer> -->
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="dialogOrderDetail" max-width="1024">
      <OrderDetailPosCRUD @reload="loadData()
      dialogOrderDetail = false" :is-quotation="false" :key="componentKey" :is-update="viewTransaction"
        :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>


    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()"></cancel-ticket-form>
    </v-dialog>
    <div>


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
              <v-autocomplete item-text="pro_name" item-value="id" :items="productList" label="ສິນຄ້າ*"
                v-model="creteria.productId"></v-autocomplete>
            </v-col>
            <v-col cols="6" class="text-left">
              <v-btn size="large" variant="outlined" @click="createSale" class="primary" rounded>
                <span class="mdi mdi-plus"></span>Create
              </v-btn>
              <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary" rounded>
                <span class="mdi mdi-microsoft-excel"></span>Generate excel file
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
                <order-sumary-card-pos :showTotal="true"
                  :gross="numberWithCommas(totalSaleRaw - (+this.unpaidCodOrder.saleRawNumber))" :orderDetail="{
        'title': 'ຍອດບິນ',
        'amount': numberWithCommas(activeOrderHeaderList.length),
        'sale': numberWithCommas(totalSale - totalDiscount),
        // 'discount': getFormatNum(totalDiscount),
        // 'gross': getFormatNum(totalSale.replaceAll(',', '') - totalDiscount.replaceAll(',', ''))
        // 'gross': getFormatNum(totalSale - totalDiscount)

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



        <v-data-table v-if="activeOrderHeaderList" :headers="headers" :search="search" :items="activeOrderHeaderList">
          <!-- <template v-slot:[`item.bookingDate`]="{ item }">
            {{ item.bookingDate.split('T')[0] }}
            <h6 :style="{ 'color': countDay(item.bookingDate.split('T')[0]) > item.client.credit ? 'red' : 'green' }">
              {{ countDay(item.bookingDate.split('T')[0]) }}
            </h6>
          </template> -->
          <!-- <template v-slot:[`item.client.credit`]="{ item }">
            <v-chip
              v-if="new Date(dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()"
              class="ma-2" color="red" text-color="white">
              {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
            </v-chip>
            <v-chip v-else class="ma-2" color="green" text-color="white">
              {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
            </v-chip>
          </template> -->
          <!-- <template v-slot:[`item.dynamic_customer`]="{ item }">
            <v-avatar :color="item.dynamic_customer ? 'green' : 'red'" size="10">
            </v-avatar>
          </template> -->
          <template v-slot:[`item.totalDiscount`]="{ item }">
            {{ numberWithCommas(item.totalDiscount) }}
          </template>
          <template v-slot:[`item.totalAmount`]="{ item }">
            {{ numberWithCommas(item.totalAmount) }}
          </template>
          <template v-slot:[`item.totalPrice`]="{ item }">
            {{ numberWithCommas(item.totalPrice / item.totalQTY) }}
          </template>

        </v-data-table>

      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common/index'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      guidelineDialog: false,
      viewTransaction: false,
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      wallet: false,
      isedit: false,
      dialog: false,
      isloading: false,
      valid: true,
      name: '',
      search: '',
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',

      productList: [],
      creteria: {
        productId: -1,
      },
      headers: [

        // {
        //   text: 'ເລກອໍເດີ',
        //   align: 'center',
        //   value: 'header_id',
        //   sortable: true,
        // },
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'header.bookingDate',
          sortable: true,
        },
        {
          text: 'ສິນຄ້າ',
          align: 'center',
          value: 'product.pro_name',
          sortable: true,
        },
        {
          text: 'ຈ/ນ',
          align: 'center',
          value: 'totalQTY',
          sortable: true,
        },
        {
          text: 'ລາຄາ',
          align: 'center',
          value: 'totalPrice',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫຼຸດ',
          align: 'center',
          value: 'totalDiscount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'center',
          value: 'totalAmount',
          sortable: true,
        },
        // {
        //   text: 'ຜູ້ຂາຍ',
        //   align: 'center',
        //   value: 'header.user.cus_name',
        //   sortable: true,
        // },
        // {
        //   text: 'ອັດຕາແລກປ່ຽນ',
        //   align: 'center',
        //   value: 'exchangeRate',
        //   sortable: true,
        // },
        // {
        //   text: 'ສ່ວນຫລຸດ',
        //   align: 'end',
        //   value: 'discount',
        //   sortable: true,
        // },

        // {
        //   text: 'ລວມ',
        //   align: 'end',
        //   value: 'total',
        //   sortable: false,
        // },
        // {
        //   text: 'ຜູ້ລົງທຸລະກຳ',
        //   align: 'end',
        //   value: 'user.cus_name',
        //   sortable: false,
        // },
        // {
        //   text: 'ເວລາລົງ',
        //   align: 'end',
        //   value: 'createdAt',
        //   sortable: false,
        // },
        // {
        //   text: 'View/Update',
        //   align: 'end',
        //   value: 'id',
        //   sortable: false,
        // },
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
    await this.loadProduct()
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
    ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
    activeOrderHeaderList() {
      return this.orderHeaderList.filter(el => el['header']['isActive'] == true)
    },
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    currencyList() {
      return this.findAllCurrency
    },
    totalSale() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += el.totalAmount
      })
      return total
    },
    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        console.log("====>", el.totalAmount);
        total += parseInt(el.totalAmount)
      })
      console.log('Price total: ' + total)
      return total
      // return total
    },
    user() {
      return this.$auth.user || ''
    },
    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.totalDiscount)
      })
      return total
      // return total
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
        return total + item.totalAmount;
      }, 0);
      const totalDiscount = txnList.reduce((total, item) => {
        return total + item.discount;
      }, 0);

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice;
      orderDetail.sale = this.numberWithCommas(totalPrice)
      orderDetail.discount = this.numberWithCommas(totalDiscount)
      orderDetail.gross = this.numberWithCommas(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail;
    },
  },

  methods: {
    exportToExcel() {
      let messageLineExport = [];
      for (const iterator of this.activeOrderHeaderList) {
        const product = iterator['product']['pro_name'];
        iterator['productName'] = product;
        iterator['totalQTY'] = iterator['totalQTY'];
        iterator['price'] = iterator['totalPrice'] / iterator['totalQTY'];
        iterator['totalDiscount'] = iterator['totalDiscount'];
        iterator['totalAmount'] = iterator['totalAmount'];
        const newRow = {
          'productName': iterator['productName'],
          'totalQTY': iterator['totalQTY'],
          'price': iterator['price'],
          'totalDiscount': iterator['totalDiscount'],
          'totalAmount': iterator['totalAmount'],
        }
        messageLineExport.push(newRow);
      }
      const worksheet = this.$xlsx.utils.json_to_sheet(messageLineExport);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'data.xlsx');
    },
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
      return getFormatNum(value)
    },

    // getFormatNum(val) {
    //   return new Intl.NumberFormat().format(val)
    // },
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
        endDate: this.date2,
        productId: this.creteria.productId
      }
      let apiLine = 'api/sale/findByDate'
      if (date.productId) {
        apiLine = 'api/sale/findByDateAndProduct'
      }

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })
        this.orderHeaderList = response.data
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + error['text'])
      }

      this.isloading = false
    },
    async loadProduct() {
      this.isloading = true
      let apiLine = 'api/product/find'
      try {
        const response = await this.$axios.get(apiLine);
        this.productList = response.data
        this.productList.push({ id: -1, 'pro_name': 'ທັງຫມົດ' })
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + JSON.stringify(error))
      }
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
