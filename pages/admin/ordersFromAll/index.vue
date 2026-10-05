<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການບິນຂາຍ ALL</h3>
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
                <v-date-picker v-model="fromDate" no-title @input="menu1 = false"></v-date-picker>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="fromDateLabel" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                    prepend-icon="mdi-calendar" v-bind="attrs" @blur="fromDate = parseDate(fromDateLabel)"
                    v-on="on"></v-text-field>
                </template>
              </v-menu>

              <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
                max-width="290px" min-width="auto">
                <v-date-picker v-model="toDate" no-title @input="menu2 = false"></v-date-picker>
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="toDateLabel" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                    prepend-icon="mdi-calendar" v-bind="attrs" @blur="toDate = parseDate(toDateLabel)"
                    v-on="on"></v-text-field>
                </template>
              </v-menu>

            </v-col>
            <v-col cols="6">
              <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-detailsx />
              <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-detailsx />
              <v-autocomplete item-text="name" item-value="id" :items="customTerminalList" label="ເລືອກຕາມ ຮ້ານ*"
                v-model="terminalId"></v-autocomplete>
              <!-- current LocationId :{{ customTerminalList }} -->
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
                  :gross="getFormatNum(totalSaleRaw - (+this.unpaidCodOrder.saleRawNumber))" :orderDetail="{
        'title': 'ຍອດບິນ',
        'amount': getFormatNum(activeOrderHeaderList.length),
        'sale': getFormatNum(totalSale),
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
          <template v-slot:[`item.bookingDate`]="{ item }">
            {{ item.bookingDate.split('T')[0] }}
            <!-- <v-chip class="ma-2" color="red" text-color="white"> -->
            <h6 :style="{ 'color': countDay(item.bookingDate.split('T')[0]) > item.client.credit ? 'red' : 'green' }">
              {{ countDay(item.bookingDate.split('T')[0]) }}
            </h6>
            <!-- </v-chip> -->
          </template>
          <template v-slot:[`item.client.credit`]="{ item }">
            <v-chip
              v-if="new Date(dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0]) < new Date()"
              class="ma-2" color="red" text-color="white">
              {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
            </v-chip>
            <v-chip v-else class="ma-2" color="green" text-color="white">
              {{ dueDate(item.bookingDate, item.client.credit).toISOString().split('T')[0] }}
            </v-chip>
          </template>
          <template v-slot:[`item.dynamic_customer`]="{ item }">

            <!-- <v-chip class="ma-2" :color="item.dynamic_customer ? 'green' : 'red'" text-color="black">
            {{ item.dynamic_customer ? item.dynamic_customer.name : '' }}
          </v-chip> -->
            <v-avatar :color="item.dynamic_customer ? 'green' : 'red'" size="10">
              <!-- {{ item.dynamic_customer ? item.dynamic_customer.name : '' }} -->
            </v-avatar>
          </template>
          <template v-slot:[`item.payment.payment_code`]="{ item }">
            <div v-if="isMultiPayment(item)">
              <v-chip color="teal darken-1" small dark class="font-weight-medium">
                <v-icon left x-small>mdi-credit-card-multiple</v-icon>
                ຫຼາຍວິທີ ({{ getPaymentMethodsCount(item) }})
              </v-chip>
            </div>
            <div v-else>
              <v-chip :color="getPaymentMethodColor(getPaymentCode(item))" small dark class="font-weight-medium">
                <v-icon left x-small>{{ getPaymentMethodIcon(getPaymentCode(item)) }}</v-icon>
                {{ getPaymentName(item) }}
              </v-chip>
            </div>
          </template>
          <template v-slot:[`item.discount`]="{ item }">
            {{ numberWithCommas(item.discount) }}
          </template>
          <template v-slot:[`item.total`]="{ item }">
            {{ numberWithCommas(item.total + item.discount) }}
          </template>
          <template v-slot:[`item.grandTotal`]="{ item }">
            {{ numberWithCommas(item.total) }}
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
  </div>
</template>
<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth } from '~/common'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      terminalId: 999, //LocationId to filter sale base on current location selected 
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
        {
          text: 'ID ລູກຄ້າ',
          align: 'center',
          value: 'client.id',
          sortable: true,
        },
        {
          text: 'Offline/Online',
          align: 'center',
          value: 'dynamic_customer',
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
        {
          text: 'ຊຳລະດ້ວຍ',
          align: 'center',
          value: 'payment.payment_code',
          sortable: true,
        },
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
          text: 'ລາຄາເຕັມ',
          align: 'end',
          value: 'total',
          sortable: false,
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
          value: 'grandTotal',
          sortable: false,
        },
        // {
        //   text: 'ລວມ',
        //   align: 'end',
        //   value: 'total',
        //   sortable: false,
        // },
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
      fromDate: getFirstDayOfMonth(),
      toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      fromDateLabel: this.formatDate(
        getFirstDayOfMonth()
      ),
      toDateLabel: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },
  async created() {
    this.terminalId = this.findSelectedTerminal
    console.log(`Current terminal select ${this.findSelectedTerminal}`);
    await this.loadData()
  },
  watch: {
    fromDate(val) {
      console.log(`FROM DATE WATCHER VAL ${val}`);
      this.fromDateLabel = this.formatDate(this.fromDate)
      this.loadData()
    },
    toDate(val) {
      console.log(`TO DATE WATCHER ${this.toDate}`);
      this.toDateLabel = this.formatDate(this.toDate)
      this.loadData()
    },
  },
  computed: {
    customTerminalList() {
      let originalTerminalListVanilla = JSON.stringify(this.findAllTerminal)
      let originalTerminalList = JSON.parse(originalTerminalListVanilla)
      const extraTerminal = {
        "id": 999, "code": 1999, "name": "ທັງໝົດ", "description": "", "locationId": 1,
      }
      originalTerminalList.push(extraTerminal)
      console.log(`Terminal customer all len: ${originalTerminalList.length}`);
      return originalTerminalList;
    },
    ...mapGetters([
      'currentSelectedLocation',
      'cartOfProduct',
      'currenctSelectedCategoryId',
      'findAllProduct',
      'currentSelectedCustomer',
      'currentSelectedPayment',
      'findSelectedTerminal',
      'findAllTerminal',
      'findAllLocation',
      'findAllPayment'
    ]),
    activeOrderHeaderList() {
      console.log(`TerminalSelected ${this.terminalId}`);
      const terminal = this.findAllTerminal.find(el => el['id'] == this.terminalId)
      return this.orderHeaderList.filter(el => {
        if (!el || el['isActive'] !== true) return false

        // Check location if terminal is selected
        if (terminal && this.terminalId !== 999 && el['locationId'] != terminal['locationId']) {
          return false
        }

        // Priority 1: Check salePayment table for paymentId == 2
        if (el.payments && Array.isArray(el.payments) && el.payments.length > 0) {
          const paymentIds = el.payments.map((p) => p.paymentId || p.paymentMethod?.id).filter((id) => id != null)
          if (paymentIds.length > 0 && paymentIds.every((id) => id === 2)) return false
          return true
        }

        // Priority 2: Fallback to saleHeader.paymentId
        return el['paymentId'] != 2
      })
    },
    computedDateFormatted() {
      return this.formatDate(this.fromDate)
    },
    totalSale() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += el.total
      })
      return total
    },
    totalSaleRaw() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.cartTotal || 0)
      })
      return total
    },

    totalDiscount() {
      let total = 0
      this.activeOrderHeaderList.forEach((el) => {
        total += parseInt(el.discount || 0)
      })
      return total
    },

    unpaidCodOrder() {
      let txnList = []
      let orderDetail = {}
      this.orderHeaderList.forEach(element => {
        if (element.paymentStatus !== 'PENDING') return
        let isCod = false

        // Priority 1: Check salePayment table
        if (element.payments && Array.isArray(element.payments) && element.payments.length > 0) {
          isCod = element.payments.some((p) => {
            const paymentId = p.paymentId || p.paymentMethod?.id
            const pMethod = p.paymentMethod || (paymentId && this.findAllPayment?.find((pay) => pay.id === paymentId))
            const code = pMethod?.payment_code || p.payment_code || ''
            return code.includes('COD')
          })
        } else {
          // Priority 2: Fallback to saleHeader
          const code =
            element.payment?.payment_code ||
            (element.paymentId && this.findAllPayment?.find((p) => p.id === element.paymentId)?.payment_code) ||
            (typeof element.payment === 'string' ? element.payment : '')
          if (code && code.includes('COD')) {
            isCod = true
          }
        }

        if (isCod) {
          txnList.push(element)
        }
      });
      const totalPrice = txnList.reduce((total, item) => {
        return total + (item.cartTotal || item.total || 0);
      }, 0);
      const totalDiscount = txnList.reduce((total, item) => {
        return total + (item.discount || 0);
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
    isMultiPayment(item) {
      return (
        item &&
        item.payments &&
        Array.isArray(item.payments) &&
        item.payments.length > 1
      )
    },

    getPaymentMethodsCount(item) {
      if (!item) return 0
      if (item.payments && Array.isArray(item.payments) && item.payments.length > 0) {
        return item.payments.length
      }
      return (item.payment || item.paymentId) ? 1 : 0
    },

    getPaymentCode(item) {
      if (!item) return 'N/A'
      if (this.isMultiPayment(item)) {
        return 'MULTI'
      }
      // Priority 1: Check salePayment table first
      if (item.payments && Array.isArray(item.payments) && item.payments.length > 0) {
        const p0 = item.payments[0]
        const paymentId = p0.paymentId || p0.paymentMethodId || p0.payment_id || p0.paymentMethod?.id
        const pMethod = p0.paymentMethod || (paymentId && this.findAllPayment?.find((p) => p.id === paymentId))
        if (pMethod?.payment_code) return pMethod.payment_code
        if (p0.payment_code) return p0.payment_code
      }
      // Priority 2: Fallback to saleHeader
      if (item.payment?.payment_code) return item.payment.payment_code
      if (item.paymentId && this.findAllPayment) {
        const found = this.findAllPayment.find((p) => p.id === item.paymentId)
        if (found?.payment_code) return found.payment_code
      }
      if (typeof item.payment === 'string') return item.payment
      return 'N/A'
    },

    getPaymentName(item) {
      if (!item) return 'N/A'
      // Priority 1: Check salePayment table first
      if (item.payments && Array.isArray(item.payments) && item.payments.length > 0) {
        if (item.payments.length > 1) {
          const names = item.payments
            .map((p) => {
              const paymentId = p.paymentId || p.paymentMethodId || p.payment_id || p.paymentMethod?.id
              const pMethod = p.paymentMethod || (paymentId && this.findAllPayment?.find((pay) => pay.id === paymentId))
              return pMethod?.payment_name || p.payment_name || pMethod?.payment_code || p.payment_code
            })
            .filter(Boolean)
          return names.length > 0 ? names.join(' + ') : 'ຫຼາຍວິທີ'
        } else {
          const p0 = item.payments[0]
          const paymentId = p0.paymentId || p0.paymentMethodId || p0.payment_id || p0.paymentMethod?.id
          const pMethod = p0.paymentMethod || (paymentId && this.findAllPayment?.find((p) => p.id === paymentId))
          if (pMethod?.payment_name) return pMethod.payment_name
          if (p0.payment_name) return p0.payment_name
          if (pMethod?.payment_code) return pMethod.payment_code
          if (p0.payment_code) return p0.payment_code
        }
      }
      // Priority 2: Fallback to saleHeader
      if (item.payment?.payment_name) return item.payment.payment_name
      if (item.payment?.payment_code) return item.payment.payment_code
      if (item.paymentId && this.findAllPayment) {
        const found = this.findAllPayment.find((p) => p.id === item.paymentId)
        if (found?.payment_name) return found.payment_name
        if (found?.payment_code) return found.payment_code
      }
      if (typeof item.payment === 'string') return item.payment
      return 'N/A'
    },

    getPaymentMethodColor(paymentCode) {
      if (!paymentCode) return 'grey'
      const colorMap = {
        CASH: 'green',
        QR: 'purple',
        TRANSFER: 'blue',
        TRANSFER_BCEL: 'blue',
        BCEL: 'blue',
        COD: 'orange',
        CREDIT: 'red',
        CARD: 'indigo',
        BANK: 'teal',
        MOBILE: 'pink',
        MULTI: 'teal darken-1',
      }

      if (colorMap[paymentCode]) {
        return colorMap[paymentCode]
      }

      const code = paymentCode.toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'green'
      if (code.includes('QR') || code.includes('SCAN')) return 'purple'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo'
      if (code.includes('COD') || code.includes('DELIVERY')) return 'orange'
      if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink'

      return 'primary'
    },

    getPaymentMethodIcon(paymentCode) {
      if (!paymentCode) return 'mdi-help-circle'
      const iconMap = {
        CASH: 'mdi-cash',
        QR: 'mdi-qrcode',
        TRANSFER: 'mdi-bank-transfer',
        TRANSFER_BCEL: 'mdi-bank-transfer',
        BCEL: 'mdi-bank',
        COD: 'mdi-truck-delivery',
        CREDIT: 'mdi-credit-card-outline',
        CARD: 'mdi-credit-card',
        BANK: 'mdi-bank',
        MOBILE: 'mdi-cellphone',
        WALLET: 'mdi-wallet',
        MULTI: 'mdi-credit-card-multiple',
      }

      if (iconMap[paymentCode]) {
        return iconMap[paymentCode]
      }

      const code = paymentCode.toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'mdi-cash'
      if (code.includes('QR') || code.includes('SCAN')) return 'mdi-qrcode'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'mdi-bank-transfer'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'mdi-credit-card'
      if (code.includes('COD') || code.includes('DELIVERY')) return 'mdi-truck-delivery'
      if (code.includes('MOBILE') || code.includes('PHONE')) return 'mdi-cellphone'
      if (code.includes('WALLET')) return 'mdi-wallet'
      if (code.includes('MULTI')) return 'mdi-credit-card-multiple'

      return 'mdi-cash-multiple'
    },

    exportToExcel() {
      const exportList = this.activeOrderHeaderList.map(item => ({
        'ເລກບິນ': item.id,
        'ວັນທີ': item.bookingDate ? item.bookingDate.split('T')[0] : '',
        'ລູກຄ້າ': item.client ? item.client.name : '',
        'ເບີໂທ': item.client ? item.client.telephone : (item.cusTel || ''),
        'ຊຳລະດ້ວຍ': this.getPaymentName(item),
        'ສະກຸນເງິນ': item.currency ? item.currency.code : '',
        'ອັດຕາແລກປ່ຽນ': item.exchangeRate || 1,
        'ລາຄາເຕັມ': item.total + (item.discount || 0),
        'ສ່ວນຫຼຸດ': item.discount || 0,
        'ລວມ': item.total,
        'ຜູ້ລົງທຸລະກຳ': item.user ? item.user.cus_name : '',
        'ເວລາລົງ': item.createdAt ? item.createdAt.split('.')[0] : ''
      }))
      const worksheet = this.$xlsx.utils.json_to_sheet(exportList);
      const workbook = this.$xlsx.utils.book_new();
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      this.$xlsx.writeFile(workbook, 'orders_all.xlsx');
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
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    whatsappLink(item) {
      const tel = item.cusTel.trim();
      const completeTel = tel.substring(tel.length - 8);
      this.whatsappContactLink = `https://api.whatsapp.com/send?phone=+85620${completeTel}&text=${encodeURIComponent('ສະບາຍດີ ລູກຄ້າ ')}`;
    },
    getFormatNum(val) {
      return new Intl.NumberFormat().format(val)
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
        startDate: this.fromDate,
        endDate: this.toDate,
        userId: this.userId
      }
      let apiLine = 'api/sale/findByDate'
      if (date.userId) {
        apiLine = 'api/sale/findByDateAndUser'
      }
      await this.$axios
        .get(apiLine, { params: { date } })
        .then((res) => {
          // ****** Clear Old Data
          this.orderHeaderList = []
          for (const iterator of res.data) {
            // if(!iterator['dynamic_customer']){
            //   iterator.dynamic_customer = null;
            // }
            this.orderHeaderList.push(iterator)
          }
          console.log("====> " + this.orderHeaderList.length);
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
    }
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
