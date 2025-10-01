
<template>
  <div>
    <v-dialog v-model="formDialog" max-width="1024">
      <order-form :is-create="isCreate" :record-id="entrySelectedId" @close-dialog="handleEvent" @reload-data="loadData"
        :key="componentKey" />
    </v-dialog>
    <v-dialog v-model="statusFormDialog" max-width="1024">
      <order-status-form :is-create="isCreate" :record-id="entrySelectedId" order-status="INVOICED"
        @close-dialog="statusFormDialog = false" @reload-data="loadData" :key="orderStatusComponentKey" />
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
        <template v-slot:[`item.edit`]="{ item }">
          <v-btn color="primary" text @click="editItem(item)
          isedit = true
            ">
            <i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.updateTimestamp`]="{ item }">
          {{ findInvoicingDate(item) }}
        </template>
        <template v-slot:[`item.notify`]="{ item }">
          <v-btn color="blue darken-1" text @click="whatsappLink(item)">
            <a :href="whatsappContactLink" target="_blank">
              <span class="mdi mdi-whatsapp"></span>
            </a>
          </v-btn>
          {{ item.client.telephone }}
        </template>
        <template v-slot:[`item.print`]="{ item }">
          <v-btn color="primary" text @click="printTicket(item)">
            <i class="fa-solid fa-print"></i>
          </v-btn>
        </template>
        <template v-slot:[`item.link`]="{ item }">
          <a :href="item.link" target="_blank">
            <i class="fa-solid fa-link"></i>
          </a>
        </template>
        <template v-slot:[`item.histories`]="{ item }">
          <v-btn color="primary" text @click="printTicket(item)">
            <i class="fa-solid fa-clock-rotate-left"></i>
            {{ item.histories.length }}
          </v-btn>

        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-btn color="primary" text>
            {{ localStatus.find(el => el['code'] == item.status)['name'] }}
          </v-btn>
        </template>
      </v-data-table>
      <canvas ref="barcodeCanvas" :style="{ display: showCanvas ? 'block' : 'none' }"></canvas>
    </v-card>
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm.vue';
import { mapActions, mapGetters } from 'vuex'
import { hostName,mainCompanyInfo } from '~/common/api'
import OrderStatusForm from '@/components/OrderStatusForm.vue';
import { ticketHtml, jsDateToMysqlDate, swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
export default {
  components: {
    OrderForm,
    OrderStatusForm
  },
  data() {
    return {
      timer: null,
      barcodeImage: '',
      showCanvas: false,
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
          text: 'ວັນທີສັ່ງອອກບິນ',
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
          align: 'center',
          value: 'notify',
          sortable: false,
        },
        // {
        //   text: 'ຮັບຊຳລະ',
        //   align: 'center',
        //   value: 'function',
        //   sortable: false,
        // },

        {
          text: 'Print',
          align: 'center',
          value: 'print',
          sortable: false,
        },
        {
          text: 'ແກ້ໄຂ',
          align: 'center',
          value: 'edit',
          sortable: false,
        },
        {
          text: 'ສະຖານະ',
          align: 'end',
          value: 'status',
          sortable: false,
        },
        {
          text: 'ປະຫວັດອໍເດີ',
          align: 'end',
          value: 'histories',
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
    companyData() {
      console.log(`**********COMPANY DATA ${mainCompanyInfo}**********`)
      return mainCompanyInfo()
    },

    companyLogo() {
      return require(`~/assets/image/${this.companyData.ticketLogo}`)
    },
    localStatus() {
      const status = [
        { 'name': 'ຍັງບໍ່ເຂົ້າສາງ', 'code': 'ORDERED' },
        { 'name': 'ເຄື່ອງເຂົ້າສາງ', 'code': 'RECEIVED' },
        { 'name': 'ຮັບແລ້ວ', 'code': 'INVOICED' },
      ];
      return status;
    },
    ticketCommon() {
      return ticketHtml();
    },
    filterOrders() {
      return this.entries.filter(el => el['status'] == 'INVOICED')
    },
    user() {
      return this.$auth.user || ''
    },
    currentTerminal() {
      return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
    },
    ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),

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
  methods: {
    findInvoicingDate(order) {
      let invoicingDate = order['updateTimestamp'].split('T')[0]
      let orderWithInvoicedDate = null
      if (order['histories'].length > 0) {
        orderWithInvoicedDate = order['histories'].find(el => el['status'] == 'INVOICED')
        if (orderWithInvoicedDate != undefined) {
          console.log(`ORDER STATUS: ${orderWithInvoicedDate['status']} ORDER INVOICED DATE ${orderWithInvoicedDate['updateTimestamp']}`);
          invoicingDate = orderWithInvoicedDate['updateTimestamp'].split('T')[0]
        }
      }
      return invoicingDate;
    },
    ...mapActions(['addOrderToConformPaymentList', 'setSelectedTerminal', 'setSelectedLocation']),
    formatNumber(val) {
      return getFormatNum(val)
    },
    generateBarcodeImage(barcode) {
      // Generate a random 12-digit number as the barcode value
      // Get the canvas element using the ref attribute
      const canvas = this.$refs.barcodeCanvas;
      console.log(`.....Canvas logger.....`);
      console.log(canvas);
      console.log(canvas.width, canvas.height);
      // Set the canvas width and height to match the paper size
      canvas.width = 40;
      canvas.height = 20;
      // Generate the barcode image using JsBarcode
      JsBarcode(canvas, barcode, {
        format: 'code128',
        displayValue: true,
        fontSize: 20,
        // margin: 10
      });

      // Convert the canvas to a data URL and set it as the barcodeImage data property
      this.barcodeImage = canvas.toDataURL();
    },
    printTicket(item) {
      this.generateBarcodeImage(item['trackingNumber'])
      let txnListHtml = ``
      const price = item.shippingFee * item.shippingRate;
      // for (const iterator of this.productCart) {
      //   const product = this.findAllProduct.find(el => el.id == iterator.id)
      //   console.log(`=======${product}======`);
      //   const quantity = iterator.qty
      //   const total = iterator.qty * iterator.localPrice
      // txnListHtml += `<div style="font-size: 14px;">${product.pro_name} x${quantity} - ${this.formatNumber(total)}</div>`
      txnListHtml +=
        `<div class="ticket">
                    <div class="product-name">${item.name}</div>
                    <div class="price">  ${this.formatNumber(price)}</div>
                </div>
                <div class="product-name">${item.trackingNumber} X ${this.formatNumber(price)}</div>
                <br>
                    `
      // }
      // const discountHtml = `<div class="ticket">
      //               <div class="product-name">ສ່ວນຫລຸດ </div>
      //               <div class="price"> - ${this.formatNumber(this.discount)}</div>
      //           </div>`
      const today = new Date()
      const bookingDate = jsDateToMysqlDate(today)
      const bookingDateWithTime = today.toISOString
      let totalHtml = `
      <div class="ticket">
                    <div class="product-name"></div>
                <div class="price">THB ${this.formatNumber((item['shippingFee'] * item['shippingRate']))}</div>
            </div>`

      const windowContent = `
         ${this.ticketCommon.header}
            <body>
                <div style="text-align: center;">
                    <img src="${this.companyLogo}" alt="Description of the image" width="100" height="100">
                </div>
                <h3> ເຈ້ນ່ອງ ຂົນສົ່ງ ໄທ-ລາວ </h3>
                <h3> ໃບຮັບເງິນ</h3>
                <h5> ວັນທີ ${today.toLocaleString()}</h5>
                <h5> ເລກບິນ: ${item.id} </h5>
                <h5> Tel ${this.currentTerminal['location']['company']['tel']}</h5>
                <h5> ຜູ້ຂາຍ: ${this.user.cus_name}  </h5>
                <h5> ຜູ້ຮັບ: ${item['client']['name']}  </h5>
                <hr style="margin-top: 50px;"> </hr>
                ${txnListHtml}
                <hr> </hr>
                ${totalHtml}
                <h2 style="text-align: center; margin-top: 50px;">  <img src="${this.barcodeImage}"> </h2>
                <h2 style="text-align: center; margin-top: 50px;"> THANKYOU </h2>
                
            </body>
            </html>
        `

      const printWin = window.open(
        '',
        '',
        'left=0,top=0,width=2480,height=3508,toolbar=0,scrollbars=0,status=0'
      )
      printWin.document.open()
      printWin.document.write(windowContent)

      setTimeout(() => {
        printWin.print()
        printWin.close()
      }, 1000)

    },
    handleKeyDown(event) {
      if (this.timer) {
        clearInterval(this.timer)
      }
      if (event.key == 'Enter') {
        if (this.barcode) {
          // ************ Find product from this barcode and add to cart ************ //
          this.findOrderByTrackingNumber(this.barcode.toLocaleUpperCase())
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
          // return this.changeOrderStatus('INVOICED', order['id'])
          this.orderStatusComponentKey += 1;
          this.entrySelectedId = order.id;
          this.statusFormDialog = true;
          this.isCreate = false;
          this.addOrderToConformPaymentList(order)
        }else{
          return swalError2(this.$swal, "Error", `Tracking number ${barcode.toUpperCase()} ບໍ່ພົບໃນລະບົບ`);
        }
      }
    },
    async changeOrderStatus(orderStatus, orderId) {
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
      await this.$axios.get("api/order/findAllByDate", { params: { date } }).then(response => {
        this.isloading = true
        this.entries = response.data

      }).catch(error => {
        console.log("Error ", error);
      })
      this.isloading = false
    }
  }
}
</script>
