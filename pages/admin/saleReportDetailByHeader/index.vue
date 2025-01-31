<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການບິນຂາຍ</h3>
      </v-chip>
      <!-- <v-spacer></v-spacer> -->
      <v-chip
        class="pa-5"
        color="primary"
        label
        text-color="white"
        @click="guidelineDialog = true"
      >
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player
        @close-dialog="guidelineDialog = false"
        youtube-link="W6KiQWtiqBM"
      >
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="dialogOrderDetail" max-width="1024">
      <OrderDetailPosCRUD
        @reload="
          loadData()
          dialogOrderDetail = false
        "
        :is-quotation="false"
        :key="componentKey"
        :is-update="viewTransaction"
        :headerId="selectedOrder"
        @close-dialog="dialogOrderDetail = false"
      >
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form
        :id="OrderIdSelected"
        :key="componentCancelFormKey"
        @close-dialog="cancelForm = false"
        @reload=";(cancelForm = false), loadData()"
      ></cancel-ticket-form>
    </v-dialog>
    <div>
      <v-card>
        <v-card-title>
          <v-layout row wrap>
            <v-col cols="6">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="ຈາກວັນທີ:"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>

              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted2"
                    label="ຫາວັນທີ:"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date2 = parseDate(dateFormatted2)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date2"
                  no-title
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="ຊອກຫາ"
                single-line
                hide-detailsx
              />
              <v-autocomplete
                item-text="name"
                item-value="id"
                :items="customerList"
                label="ລູກຄ້າ*"
                v-model="creteria.clientId"
              ></v-autocomplete>
              <!-- payment criteria -->
              <v-autocomplete
                item-text="payment_code"
                item-value="id"
                :items="paymentList"
                label="payment*"
                v-model="creteria.paymentId"
              ></v-autocomplete>
            </v-col>

            <v-col cols="6" class="text-left">
              <v-btn
                size="large"
                variant="outlined"
                @click="createSale"
                class="primary"
                rounded
              >
                <span class="mdi mdi-plus"></span>Create
              </v-btn>
              <v-btn
                size="large"
                variant="outlined"
                @click="exportToExcel"
                class="primary"
                rounded
              >
                <span class="mdi mdi-microsoft-excel"></span>Generate excel file
              </v-btn>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn
                size="large"
                variant="outlined"
                @click="loadData"
                class="primary"
                rounded
              >
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
                <order-sumary-card-pos
                  :showTotal="true"
                  :gross="
                    getFormatNum(
                      totalSaleRaw - +this.unpaidCodOrder.saleRawNumber
                    )
                  "
                  :orderDetail="{
                    title: 'ຍອດບິນ',
                    amount: getFormatNum(activeOrderHeaderList.length),
                    sale: getFormatNum(totalSale - totalDiscount),
                    // 'discount': getFormatNum(totalDiscount),
                    // 'gross': getFormatNum(totalSale.replaceAll(',', '') - totalDiscount.replaceAll(',', ''))
                    // 'gross': getFormatNum(totalSale - totalDiscount)
                  }"
                >
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

        <v-data-table
          v-if="orderLineByUser"
          :headers="headers"
          :search="search"
          :items="orderLineByUser"
        >
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
          <template v-slot:[`item.discount`]="{ item }">
            {{ numberWithCommas(item.discount) }}
          </template>
          <template v-slot:[`item.total`]="{ item }">
            {{ numberWithCommas(item.total) }}
          </template>
          <template v-slot:[`item.cards`]="{ item }">
            {{ numberWithCommas(calculateTotalCost(item.cards)) }}
          </template>
          <template v-slot:[`item.price`]="{ item }">
            {{ numberWithCommas(item.total) }}
          </template>
          <template v-slot:[`item.profit`]="{ item }">
            {{ numberWithCommas(item.total - calculateTotalCost(item.cards)) }}
          </template>
          <!-- <template v-slot:[`item.id`]="{ item }">
            <v-btn color="primary" text @click="viewItem(item)
            wallet = true
              ">
              <i class="fa-regular fa-pen-to-square"></i>
            </v-btn>
          </template> -->
          <template v-slot:[`item.cusTel`]="{ item }">
            <v-btn color="blue darken-1" text @click="whatsappLink(item)">
              {{ item.cusTel }}
              <a :href="whatsappContactLink" target="_blank">Whatsapp</a>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import {
  swalSuccess,
  swalError2,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
} from '~/common'
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
      customerList: [],
      creteria: {
        clientId: -1,
        paymentId: -1,
      },
      headers: [
        {
          text: 'ເລກອໍເດີ',
          align: 'center',
          value: 'header.id',
          sortable: true,
        },
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'header.bookingDate',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ຊຳລະ',
          align: 'center',
          value: 'payment',
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
          value: 'quantity',
          sortable: true,
        },

        {
          text: 'ລາຄາ',
          align: 'right',
          value: 'price',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫຼຸດ',
          align: 'right',
          value: 'discount',
          sortable: true,
        },
        {
          text: 'ລວມ',
          align: 'right',
          value: 'total',
          sortable: true,
        },
        {
          text: 'ຕົ້ນທຶນ',
          align: 'right',
          value: 'cards',
          sortable: true,
        },
        {
          text: 'ກຳໄລ',
          align: 'right',
          value: 'profit',
          sortable: true,
        },
        {
          text: 'ຜູ້ຂາຍ',
          align: 'center',
          value: 'user.cus_name',
          sortable: true,
        },
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
    // this.creteria.userId = this.user['id']
    await this.loadData()
    await this.loadClientData()
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
    paymentList() {
      return [
        { id: -1, payment_code: 'All', payment_name: 'ທັງໝົດ' },
        ...this.findAllPayment,
      ]
    },
    orderLineByUser() {
      let lines = []
      for (const iterator of this.activeOrderHeaderList) {
        console.log(`Header user: ${JSON.stringify(iterator.user)}`)
        for (const line of iterator['lines']) {
          //Assign inputter
          line['user'] = iterator.user
          line['client'] = iterator.client
          line['payment'] = iterator['payment']['payment_code']
        }
        lines.push(...iterator['lines'])
      }
      console.log(`Total line count: ${lines.length}`)
      console.log(`Total line count: ${JSON.stringify(lines)}`)
      return lines
    },
    ...mapGetters([
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
      'findAllTerminal',
      'findSelectedTerminal',
    ]),
    activeOrderHeaderList() {
      // return this.orderHeaderList.filter(el => el['isActive'] == true && el['paymentId'] != 2)
      console.log(`PAYMENT ID: ${this.creteria.paymentId}`)

      if (this.creteria.paymentId < 1) {
        return this.orderHeaderList.filter((el) => el['isActive'] == true)
      } else {
        return this.orderHeaderList.filter(
          (el) =>
            el['isActive'] == true && el.paymentId == this.creteria.paymentId
        )
      }
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
        total += el.total
      })
      return total
      // return total
    },
    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        console.log('====>', el.cartTotal)
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return total
      // return total
    },
    user() {
      return this.$auth.user || ''
    },
    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.discount)
      })
      return total
      // return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach((element) => {
        if (
          element.paymentStatus === 'PENDING' &&
          element.payment.includes('COD')
        ) {
          console.log('Concept applied')
          txnList.push(element)
        }
      })
      const totalPrice = txnList.reduce((total, item) => {
        return total + item.cartTotal
      }, 0)
      const totalDiscount = txnList.reduce((total, item) => {
        return total + item.discount
      }, 0)

      orderDetail.amount = txnList.length
      orderDetail.saleRawNumber = totalPrice
      orderDetail.sale = this.getFormatNum(totalPrice)
      orderDetail.discount = this.getFormatNum(totalDiscount)
      orderDetail.gross = this.getFormatNum(0)
      orderDetail.title = 'ຍອດບິນ COD'
      return orderDetail
    },
  },

  methods: {
    calculateTotalCost(cards) {
      if (Array.isArray(cards)) {
        return cards.reduce((acc, curr) => acc + curr.cost, 0)
      } else {
        return 0 // Handle cases where cards is not an array
      }
    },
    exportToExcel() {
      let messageLineExport = []
      for (const iterator of this.orderLineByUser) {
        // console.log(`ITERATOR ${JSON.stringify(iterator)}`)
        const user = iterator['user']['cus_name']
        const customer = iterator['client']['name']
        const product = iterator['product']['pro_name']
        // const payment = iterator['payment']['payment_code']
        iterator['userName'] = user
        iterator['customer'] = customer
        iterator['productName'] = product
        const newRow = {
          ສິນຄ້າ: iterator['productName'],
          ຈຳນວນ: iterator['quantity'],
          ລາຄາ: iterator['price'],
          ສ່ວນຫຼຸດ: iterator['discount'],
          ລວມ: iterator['total'],
          ຕົ້ນທຶນ: this.calculateTotalCost(iterator['cards']),
          ກຳໄລ: iterator['total'] - this.calculateTotalCost(iterator['cards']),
          ຜູ້ຂາຍ: iterator['userName'],
          ລູກຄ້າ: iterator['customer'],
          ຊຳລະ: iterator['payment'],
        }
        messageLineExport.push(newRow)
      }
      const worksheet = this.$xlsx.utils.json_to_sheet(messageLineExport)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
      this.$xlsx.writeFile(workbook, 'data.xlsx')
    },
    createSale() {
      this.componentKey += 1
      this.selectedOrder = 0
      this.viewTransaction = false
      this.dialogOrderDetail = true
    },
    countDay(startDate) {
      return dayCount(startDate)
    },
    dueDate(startDate, day) {
      console.log('DATE ', startDate, ' to ', day)
      return getNextDate(startDate, day)
    },
    numberWithCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    whatsappLink(item) {
      // const completeTel = tel.substring(tel.length-7);
      const tel = item.cusTel.trim()

      // console.log("Customer tel: ",tel);
      const completeTel = tel.substring(tel.length - 8)
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent(
        'ສະບາຍດີ ລູກຄ້າ '
      )}`
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
    },
    editItem(item) {
      this.componentKey += 1
      this.selectedOrderId = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail
    },
    viewItem(item) {
      this.componentKey += 1
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true
    },
    cancelItem(payload) {
      console.log('Order id', payload.orderId)
      this.componentCancelFormKey += 1
      this.OrderIdSelected = payload.orderId
      // this.orderLockingSessionId = payload.lockingSessionId;
      this.cancelForm = true
    },
    handleEvent() {
      this.dialogOrderDetail = false
    },
    async loadData() {
      this.isloading = true
      const date = {
        startDate: this.date,
        endDate: this.date2,
        clientId: this.creteria.clientId,
      }
      let apiLine = 'api/sale/findByDate'
      if (date.clientId) {
        apiLine = 'api/sale/findByDateAndCustomer'
      }

      try {
        const response = await this.$axios.get(apiLine, { params: { date } })
        this.orderHeaderList = response.data
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'Could no load data ' + JSON.stringify(error)
        )
      }

      this.isloading = false
    },
    async loadClientData() {
      this.isloading = true
      let apiLine = 'api/client/find'
      try {
        const response = await this.$axios.get(apiLine)
        this.customerList = response.data
        this.customerList.push({ id: -1, name: 'ທັງຫມົດ' })
      } catch (error) {
        swalError2(
          this.$swal,
          'Error',
          'Could no load data ' + JSON.stringify(error)
        )
      }
      this.isloading = false
    },
    formatDate(date) {
      if (!date) return null
      console.log('DATE FORMAT METHOD1: ' + date)
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      console.log('DATE PARSE METHOD1: ' + date)
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0') // Months are 0-indexed
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
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
