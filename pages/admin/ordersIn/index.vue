
<template>
  <div>
    <v-dialog v-model="formDialog" max-width="1024">
      <order-form :is-create="isCreate" :record-id="entrySelectedId" @close-dialog="handleEvent" @reload-data="loadData"
        :key="componentKey" />
    </v-dialog>
    <v-dialog v-model="statusFormDialog" max-width="ັauto">
      <order-status-form :is-create="isCreate" :record-id="entrySelectedId" @close-dialog="statusFormDialog = false"
        @reload-data="loadData" :key="orderStatusComponentKey" order-status="INVOICED" />
    </v-dialog>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700" :key="dialogKey">
      <youtube-player @close-dialog="guidelineDialog = false" :youtube-link="watchingLink">
      </youtube-player>
    </v-dialog>
    <v-chip class="pa-5" color="primary" label text-color="white">
      <!-- <v-icon start>mdi-label</v-icon> -->
      <v-icon start>mdi mdi-lifebuoy</v-icon>
      <h3>ສາທິດການນຳໃຊ້ລະບົບ</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
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
            <v-row>
              <v-col cols="6">
                <v-btn size="large" variant="outlined" @click="createRecord" class="primary" rounded>
                  <span class="mdi mdi-plus"></span>Create
                </v-btn>

              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6" class="text-right">
                <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
                  <span class="mdi mdi-cloud-download"></span>
                  ດຶງລາຍງານ
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="text-center">
            <v-text-field disabled>
              <template v-slot:label>
                <span style="color: black; font-weight: bolder;">{{ `ອໍເດີທັງໝົດ: ${filterOrders.length} ລາຍການ` }}</span>
              </template>
            </v-text-field>
          </v-col>


        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>

      </v-card-text>


      <v-data-table :headers="headers" :search="search" :items="filterOrders">
        <template v-slot:[`item.bookingDate`]="{ item }">
          {{ item.bookingDate }}
          <!-- <v-chip class="ma-2" color="red" text-color="white"> -->
          <h6 :style="{ 'color': countDay(item.bookingDate) > 30 ? 'red' : 'green' }">
            {{ countDay(item.bookingDate) }}
          </h6>
          <!-- </v-chip> -->
        </template>
        <template v-slot:[`item.updateTimestamp`]="{ item }">
          {{ findReceivingDate(item) }}
        </template>
        <template v-slot:[`item.edit`]="{ item }">
          <v-btn color="primary" text @click="editItem(item)
          isedit = true
            ">
            <i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-btn color="primary" text>
            {{ localStatus.find(el => el['code'] == item.status)['name'] }}
          </v-btn>
        </template>
        <template v-slot:[`item.delivery`]="{ item }">
          <v-btn color="primary" text @click="findOrderByTrackingNumber(item.trackingNumber)
          isedit = true
            ">
            <!-- <FontAwesomeIcon icon="fa-solid fa-truck-fast" /> -->
            <i class="fa fa-truck-fast"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.function`]="{ item }">
          <v-btn color="primary" text @click="findOrderById(item['id'])
          isedit = true
            ">
            <i class="fa fa-wallet"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.notify`]="{ item }">
          <v-btn color="blue darken-1" text @click="whatsappLink(item)">
            <a :href="whatsappContactLink" target="_blank">
              <span class="mdi mdi-whatsapp"></span>
            </a>
          </v-btn>
          {{ item.client.telephone }}
        </template>
        <template v-slot:[`item.link`]="{ item }">
          <a :href="item.link" target="_blank">
            <i class="fa-solid fa-link"></i>
          </a>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm.vue';
import OrderStatusForm from '@/components/OrderStatusForm.vue';
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
export default {
  components: {
    OrderForm,
    OrderStatusForm
  },
  data() {
    return {
      timer: null,
      barcode: '',
      statusFormDialog: false,
      whatsappContactLink: '',
      guidelineDialog: false,
      componentKey: 1,
      orderStatusComponentKey: 1,
      watchingLink: 'OEGkC4zNgpY',
      selectedRiderId: "",
      formDialog: false,
      entries: [],
      search: '',
      entrySelectedId: 0,
      isCreate: false,
      isloading: false,
      dialogKey: 1,
      headers: [
        {
          text: 'ວັນທີສັ່ງ',
          align: 'left',
          value: 'bookingDate',
          sortable: true,
        },
        {
          text: 'ວັນທີຮັບເຄື່ອງ',
          align: 'left',
          value: 'updateTimestamp',
          sortable: true,
        },
        {
          text: 'ຊືລູກຄ້າ',
          align: 'left',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ລາຍການສິນຄ້າ',
          align: 'left',
          value: 'name',
          sortable: true,
        },
        // { text: 'Note', align: 'center', value: 'note' },
        { text: 'Tracking', align: 'center', value: 'trackingNumber' },
        { text: 'Link', align: 'center', value: 'link' },
        {
          text: 'ແຈ້ງລູກຄ້າ',
          align: 'end',
          value: 'notify',
          sortable: false,
        },
        {
          text: 'ຝາກຂົນສົ່ງ',
          align: 'center',
          value: 'delivery',
          sortable: false,
        },
        {
          text: 'ຮັບຊຳລະ',
          align: 'center',
          value: 'function',
          sortable: false,
        },
        {
          text: 'ແກ້ໄຂ',
          align: 'end',
          value: 'edit',
          sortable: false,
        },
        {
          text: 'ສະຖານະ',
          align: 'end',
          value: 'status',
          sortable: false,
        },
      ],
      menu1: false,
      menu2: false,
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        getFirstDayOfMonth()
      ),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
    }
  },
  mounted() {
    this.loadData()
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  computed: {
    localStatus() {
      const status = [
        { 'name': 'ຍັງບໍ່ເຂົ້າສາງ', 'code': 'ORDERED' },
        { 'name': 'ເຄື່ອງເຂົ້າສາງ', 'code': 'RECEIVED' },
        { 'name': 'ຮັບແລ້ວ', 'code': 'INVOICED' },
      ];
      return status;
    },
    filterOrders() {
      return this.entries.filter(el => el['status'] == 'RECEIVED')
    },
    user() {
      return this.$auth.user || ''
    },
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
    },
    ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
    orderTemplate() {
      const today = new Date().toISOString().substr(0, 10);
      const locationId = this.currentTerminal['locationId']
      orderTemp = {
        "id": null,
        "bookingDate": today,
        "name": "",
        "note": "",
        "trackingNumber": "",
        "link": "",
        "price": 0,
        "priceRate": 1,
        "shippingFee": 0,
        "shippingRate": 1,
        "status": "RECEIVED",
        "isActive": true,
        "riderId": null,
        "locationId": locationId,
        "userId": this.user.id,
        "currencyId": 1,
        "shippingFeeCurrencyId": 1,
        "vendorId": null,
        "paymentId": 1,
        "client": {
          "id": 61,
          "name": "ແບ້"
        }
      }
      return orderTemp;
    }
  },
  watch: {
    formDialog(val) {
      console.log(`STATUS FORM TRIGGER ${val}`);
      if (val) {
        console.log(`STATUS EQ TRUE TRIGGER ${val}`);
        window.removeEventListener('keydown', this.handleKeyDown);
      } else {
        console.log(`STATUS EQ FALSE TRIGGER ${val}`);
        window.addEventListener('keydown', this.handleKeyDown);
      }
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
  methods: {
    addShipping(orderId) {

    },
    findReceivingDate(order) {
      let receivingDate = order['updateTimestamp'].split('T')[0]
      let orderWithReceivingDate = null
      if (order['histories'].length > 0) {
        orderWithReceivingDate = order['histories'].find(el => el['status'] == 'RECEIVED')
        if (orderWithReceivingDate != undefined) {
          console.log(`ORDER STATUS: ${orderWithReceivingDate['status']} ORDER RECEIVING DATE ${orderWithReceivingDate['updateTimestamp']}`);
          receivingDate = orderWithReceivingDate['updateTimestamp'].split('T')[0]
        }
      }
      return receivingDate;
    },
    ...mapActions(['addOrderToConformPaymentList', 'setSelectedTerminal', 'setSelectedLocation']),
    handleKeyDown(event) {
      console.log(`BACORD SCANING....`);
      if (this.timer) {
        clearInterval(this.timer)
      }
      if (event.key == 'Enter') {
        if (this.barcode) {
          // ************ Find product from this barcode and add to cart ************ //
          // this.findProductFromBarcode(this.barcode)
          // Handle barcode [Receiving, Invoicing]
          console.log(`BACORD SCAN RESULT: ${this.barcode}`);
          this.findOrderByTrackingNumber(this.barcode.toUpperCase())
        }
        this.barcode = '';
        return
      }
      if (event.key != 'Shift') {
        this.barcode += event.key;
      }
      this.timer = setInterval(() => this.barcode = '', 20);
    },
    findOrderByTrackingNumber(barcode) {
      const regex = /^[A-Za-z0-9]*$/;
      const isValid = regex.test(barcode); // Should return true
      if (!isValid) {
        //  Lao character handle
        return swalError2(this.$swal, "Error", 'ລະບົບບໍ່ເຂົ້າໃຈພາສາລາວ ກະລຸນາປ່ງນພາສາ ເປັນພາສາອັງກິດ ກ່ອນສະແກນ');
      } else {
        const order = this.entries.find(el => el['trackingNumber'].toUpperCase() == barcode.toUpperCase())
        if (order != undefined) {
          this.orderStatusComponentKey += 1;
          this.entrySelectedId = order.id;
          this.statusFormDialog = true;
          this.isCreate = false;
          this.addOrderToConformPaymentList(order)
        } else {
          return swalError2(this.$swal, "Error", `Tracking number ${barcode.toUpperCase()} ບໍ່ພົບໃນລະບົບ`);
          // No order found hadler here
        }
      }
    },
    findOrderById(orderId) {
      const order = this.entries.find(el => el['id'] == orderId)
      if (order != undefined) {
        this.orderStatusComponentKey += 1;
        this.entrySelectedId = order.id;
        this.statusFormDialog = true;
        this.isCreate = false;
        this.addOrderToConformPaymentList(order)
      } else {
        // No order found hadler here
      }
    },
    async changeOrderStatusDirect(orderStatus, orderId) {
      this.isloading = true
      try {
        const response = await this.$axios.put(`api/order/changeStatus/${orderId}`, { status: orderStatus })
        swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
      } catch (error) {
        console.log(`Cannot change order status with error ${error}`);
        swalError2(this.$swal, "Error", `ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ${error}`);
      }
      this.isloading = false
    },
    exportToExcel() {
      const worksheet = this.$xlsx.utils.json_to_sheet(this.entries);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'data.xlsx');
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    countDay(startDate) {
      return dayCount(startDate)
    },
    viewItem(item) {
      this.updateViewCount(item.id)
      this.watchingLink = item.youtubeLink
      this.dialogKey += 1;
      this.guidelineDialog = true;
    },

    createRecord() {
      this.componentKey += 1;
      this.entrySelectedId = 0
      this.isCreate = true
      this.formDialog = true;
    },
    notfoundScanning() {
      if (order != undefined) {
        this.orderStatusComponentKey += 1;
        this.entrySelectedId = order.id;
        this.statusFormDialog = true;
        this.isCreate = false;
        this.addOrderToConformPaymentList(order)
      } else {
        // No order found hadler here
      }
    },
    handleEvent() {
      this.formDialog = false;
    },
    editItem(item) {
      this.componentKey += 1;
      this.entrySelectedId = item.id;
      this.formDialog = true;
      this.isCreate = false;
    },
    changeOrderStatus(item) {
      this.orderStatusComponentKey += 1;
      this.entrySelectedId = item.id;
      this.statusFormDialog = true;
      this.isCreate = false;
    },
    whatsappLink(item) {
      console.log(`******** customer tel ${item} *******`);
      const tel = item.client.telephone.trim();
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent(`ສະບາຍດີ ລູກຄ້າ ${item.client.name} \n ອໍເດີ 🛒 : ${item.trackingNumber} \n ສິນຄ້າ: ${item.name} \n ວັນທີສັ່ງ: ${item.bookingDate} \n ລິ້ງ: ${item.link} \n 🔔🔔🔔 ເຄຶ່ອງມາຮອດສາງແລ້ວ 🔔🔔🔔`)}`;
      // return `https://api.whatsapp.com/send?phone=${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    async loadData() {
      this.formDialog = false;
      const date = {
        startDate: this.date,
        endDate: this.date2,
        userId: this.userId
      }
      this.isloading = true
      await this.$axios.get("api/order/findAllByDate", { params: { date } }).then(response => {
        this.entries = response.data
      }).catch(error => {
        console.log("Error ", error);
      })
      this.isloading = false
    }
  }
}
</script>
