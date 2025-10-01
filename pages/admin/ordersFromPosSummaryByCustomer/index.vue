<template>
  <div class="text-center">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <!-- <v-dialog v-model="dialogOrderDetail" max-width="1024" >
      <OrderDetailPos :key="componentKey" :header="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPos>
    </v-dialog> -->
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
            <!-- <v-row>
              <v-col cols="12"> -->
            <v-autocomplete
              item-text="company"
              item-value="id"
              :items="clientList"
              label="ລູກຄ້າ*"
              v-model="queryPayload.clientId"
            ></v-autocomplete>
            <!-- </v-col>
              <v-col cols="12"> -->
            <v-autocomplete
              item-text="payment_code"
              item-value="id"
              :items="paymentList"
              label="ການຊຳລະ*"
              v-model="queryPayload.paymentId"
            ></v-autocomplete>
            <!-- </v-col>
            </v-row> -->
            <!-- <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx /> -->
            <!-- <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx /> -->
          </v-col>
          <v-col cols="6" class="text-left">
            <v-btn
              size="large"
              variant="outlined"
              @click="generateInvoice"
              class="primary"
              rounded
            >
              <span class="mdi mdi-plusmdi mdi-file-pdf-box"></span>Generate
              invoice
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
          <!-- <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="generateInvoice" class="primary" rounded>
              <span class="mdi mdi-cloud-download"></span>
              Generate invoice
            </v-btn>
          </v-col> -->
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
        v-if="activeOrderHeaderList"
        :headers="headers"
        :search="search"
        :items="activeOrderHeaderList"
      >
        <template v-slot:[`item.bookingDate`]="{ item }">
          {{ item.bookingDate.split('T')[0] }}
          <!-- <v-chip class="ma-2" color="red" text-color="white"> -->
          <h6
            :style="{
              color:
                countDay(item.bookingDate.split('T')[0]) > item.client.credit
                  ? 'red'
                  : 'green',
            }"
          >
            {{ countDay(item.bookingDate.split('T')[0]) }}
          </h6>
          <!-- </v-chip> -->
        </template>
        <template v-slot:[`item.client.credit`]="{ item }">
          <v-chip
            v-if="
              new Date(
                dueDate(item.bookingDate, item.client.credit)
                  .toISOString()
                  .split('T')[0]
              ) < new Date()
            "
            class="ma-2"
            color="red"
            text-color="white"
          >
            {{
              dueDate(item.bookingDate, item.client.credit)
                .toISOString()
                .split('T')[0]
            }}
          </v-chip>
          <v-chip v-else class="ma-2" color="green" text-color="white">
            {{
              dueDate(item.bookingDate, item.client.credit)
                .toISOString()
                .split('T')[0]
            }}
          </v-chip>
        </template>

        <template v-slot:[`item.discount`]="{ item }">
          {{ numberWithCommas(item.discount) }}
        </template>
        <template v-slot:[`item.total`]="{ item }">
          {{ numberWithCommas(item.total) }}
        </template>
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ item.createdAt.split('.')[0] }}
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn
            color="primary"
            text
            @click="
              viewItem(item)
              wallet = true
            "
          >
            <i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.cancel`]="{ item }">
          <v-btn
            color="blue darken-1"
            text
            @click="
              cancelItem(item)
              wallet = true
            "
          >
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
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import { mapGetters } from 'vuex'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
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
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: '',
      queryPayload: {
        clientId: 1,
        paymentId: 2,
      },
      headers: [
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'bookingDate',
          sortable: true,
        },
        {
          text: 'ID ລູກຄ້າ',
          align: 'center',
          value: 'client.id',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ເບີໂທ',
          align: 'center',
          value: 'client.telephone',
          sortable: true,
        },
        // {
        //   text: 'ທີ່ຢູ່',
        //   align: 'center',
        //   value: 'client.address',
        //   sortable: true,
        // },
        {
          text: 'ຊຳລະດ້ວຍ',
          align: 'center',
          value: 'payment.payment_code',
          sortable: true,
        },
        // {
        //   text: 'Due date',
        //   align: 'center',
        //   value: 'client.credit',
        //   sortable: true,
        // },

        {
          text: 'ສະກຸນເງິນ',
          align: 'center',
          value: 'currency.code',
          sortable: true,
        },
        {
          text: 'ອັດຕາແລກປ່ຽນ',
          align: 'center',
          value: 'exchangeRate',
          sortable: true,
        },
        {
          text: 'ສ່ວນຫລຸດ',
          align: 'end',
          value: 'discount',
          sortable: true,
        },

        {
          text: 'ລວມ',
          align: 'end',
          value: 'total',
          sortable: false,
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
    ...mapGetters(['findAllClient', 'findAllPayment']),
    clientList() {
      return this.findAllClient
    },
    paymentList() {
      return this.findAllPayment
    },
    activeOrderHeaderList() {
      return this.orderHeaderList
    },
    computedDateFormatted() {
      return this.formatDate(this.date)
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
    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(
        this.activeOrderHeaderList
      )
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
      this.$xlsx.writeFile(workbook, 'data.xlsx')
    },
    generateInvoice() {
      const date = {
        startDate: this.date,
        endDate: this.date2,
      }
      this.queryPayload.date = date
      window.open(
        `/admin/PDFInvoiceSummary/${1}?payload=${JSON.stringify(
          this.queryPayload
        )}`,
        '_blank'
      )
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
      }
      this.queryPayload.date = date
      await this.$axios
        .post(`api/sale/report/summary`, this.queryPayload)
        .then((res) => {
          // ****** Clear Old Data
          this.orderHeaderList = []
          for (const iterator of res.data) {
            this.orderHeaderList.push(iterator)
          }
          console.log('====> ' + this.orderHeaderList.length)
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
          console.log('Error ===>: ' + er)
        })
      this.isloading = false
    },
    // formatDate(date) {
    //   if (!date) return null
    //   console.warn(`date===> ${date}`)
    //   const [year, month, day] = date.split('-')
    //   return `${month}/${day}/${year}`
    // },
    formatDate(date) {
      if (!date) return null

      // if it's a Date object, convert to ISO YYYY-MM-DD
      const iso = date instanceof Date ? date.toISOString().slice(0, 10) : date

      const [year, month, day] = iso.split('-')
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
