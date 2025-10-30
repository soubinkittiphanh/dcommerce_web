<template>
  <div class="text-left">
    <v-chip class="pa-5" color="primary" label text-color="white">
      <v-icon start>mdi-label</v-icon>
      <h3>ລາຍການ ຍົກເລີກ</h3>
    </v-chip>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
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
          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="createSale" class="primary" rounded>
              <span class="mdi mdi-plus"></span>Create
            </v-btn>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn @click="loadData" class="primary" size="large" variant="outlined" rounded>
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
                  'amount': getFormatNum(quotationList.length),
                  'sale': getFormatNum(totalSale-totalDiscount),
                  // 'discount': getFormatNum(totalDiscount),
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


      <!-- ************* DATA TABLE ************* -->
      <v-data-table v-if="quotationList" :headers="headers" :search="search" :items="quotationList">
        <!-- UPDATED: Safe booking date template -->
        <template v-slot:[`item.bookingDate`]="{ item }">
          <div class="d-flex flex-column">
            <div class="text-subtitle-2">{{ formatBookingDate(item.bookingDate) }}</div>
            <v-chip :color="getBookingStatusChip(item).color" small text-color="white">
              <v-icon left small>{{ getBookingStatusChip(item).icon }}</v-icon>
              {{ getBookingStatusChip(item).text }}
            </v-chip>
          </div>
        </template>

        <!-- UPDATED: Safe client credit template -->
        <template v-slot:[`item.client.credit`]="{ item }">
          <div class="text-center">
            <div v-if="hasValidClient(item)" class="mb-1">
              <div class="caption">{{ getClientName(item) }}</div>
              <div class="caption">Credit: {{ getClientCredit(item) }} days</div>
            </div>
            <div v-else class="mb-1">
              <div class="caption grey--text">{{ getNoClientText(item) }}</div>
            </div>
            <v-chip :color="getDueDateChip(item).color" small text-color="white">
              <v-icon left small>{{ getDueDateChip(item).icon }}</v-icon>
              {{ getDueDateChip(item).text }}
            </v-chip>
          </div>
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
        <template v-slot:[`item.recid`]="{ item }">
          {{ item.id }}
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" text @click="viewItem(item)
          wallet = true
            ">
<i class="fa-regular fa-pen-to-square"></i>
          </v-btn>

        </template>

      </v-data-table>

    </v-card>
  </div>
</template>
<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth } from '~/common'
import OrderDetailPos from '~/components/OrderDetailPos.vue'
import OrderDetailPosCRUD from '~/components/OrderDetailPosCRUD.vue'
import OrderSumaryCardPos from '~/components/orderSumaryCardPos.vue'
export default {
  components: { OrderDetailPos, OrderSumaryCardPos, OrderDetailPosCRUD },
  middleware: 'auths',
  data() {
    return {
      whatsappContactLink: '',
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      isedit: false,
      dialog: false,
      isloading: false,
      dialogForm: false,
      viewTransaction: false,
      valid: true,
      name: '',
      search: '',
      userId: null,
      orderHeaderList: [],
      loadDataNoCancelOrder: [],
      codPaid: [],
      componentCancelFormKey: 1,
      cancelForm: false,
      OrderIdSelected: 0,

      headers: [
        {
          text: 'recid',
          align: 'center',
          value: 'recid',
          sortable: true,
        },
        {
          text: 'ວັນທີ',
          align: 'center',
          value: 'bookingDate',
          sortable: true,
        },
        {
          text: 'Noted',
          align: 'center',
          value: 'remark',
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
      date: getFirstDayOfMonth(),
      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        // new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        //   .toISOString()
        //   .substr(0, 10)
        getFirstDayOfMonth()//this will get first date of current month
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

    quotationList() {
      // return this.orderHeaderList.filter(el => el['isActive'] != true)
      return this.orderHeaderList.filter(el => el['isActive'] == false)

    },
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    totalSale() {
      let total = 0
      this.quotationList.forEach((el) => {
        total += el.total
      })
      return total
      // return total
    },
    totalSaleRaw() {
      let total = 0
      this.quotationList.forEach((el) => {
        console.log("====>", el.cartTotal);
        total += parseInt(el.cartTotal)
      })
      console.log('Price total: ' + total)
      // return previousValue.cartTotal + currentValue.cartTotal
      return total
      // return total
    },


    totalDiscount() {
      let total = 0
      this.quotationList.forEach((el) => {
        total += parseInt(el.discount)
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
    // ===== EXISTING METHODS =====
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
      this.selectedOrder = item.orderId.toString()
      this.dialogOrderDetail = !this.dialogOrderDetail;
    },
    viewItem(item) {
      this.componentKey += 1;
      this.viewTransaction = true
      this.selectedOrder = item.id
      this.dialogOrderDetail = true;
    },
    createSale() {
      this.componentKey += 1;
      this.selectedOrder = 0
      this.viewTransaction = false;
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
    },

    // ===== NEW SAFE CLIENT HANDLING METHODS =====
    
    // Check if item has valid client data
    hasValidClient(item) {
      return item && 
             item.client && 
             typeof item.client === 'object' && 
             item.client.credit !== undefined && 
             item.client.credit !== null
    },

    // Get client credit with default fallback
    getClientCredit(item) {
      if (!this.hasValidClient(item)) {
        return 0 // Default credit days
      }
      return parseInt(item.client.credit) || 0
    },

    // Get client name safely
    getClientName(item) {
      if (!item.client) {
        return 'Walk-in Customer'
      }
      return item.client.name || 'Unnamed Client'
    },

    // Get message for items without client
    getNoClientText(item) {
      if (!item.client) {
        return 'Walk-in Customer'
      } else if (typeof item.client.credit === 'undefined') {
        return 'No Credit Info'
      }
      return 'Unknown Client'
    },

    // Format booking date safely
    formatBookingDate(bookingDate) {
      if (!bookingDate) return 'Invalid Date'
      try {
        return bookingDate.split('T')[0]
      } catch (error) {
        console.warn('Error formatting booking date:', error)
        return 'Invalid Date'
      }
    },

    // Get booking status chip with comprehensive logic
    getBookingStatusChip(item) {
      if (!item.bookingDate) {
        return { color: 'grey', icon: 'mdi-calendar-remove', text: 'No Date' }
      }

      const dayCount = this.countDay(item.bookingDate.split('T')[0])
      
      if (!this.hasValidClient(item)) {
        return { 
          color: 'grey', 
          icon: 'mdi-account-off', 
          text: `${dayCount} days - No Client` 
        }
      }
      
      const creditDays = this.getClientCredit(item)
      
      if (dayCount > creditDays + 7) {
        return { 
          color: 'red', 
          icon: 'mdi-alert-circle', 
          text: `${dayCount} days - Overdue` 
        }
      } else if (dayCount > creditDays) {
        return { 
          color: 'orange', 
          icon: 'mdi-clock-alert', 
          text: `${dayCount} days - Past Due` 
        }
      } else if (dayCount > creditDays - 3) {
        return { 
          color: 'yellow', 
          icon: 'mdi-clock', 
          text: `${dayCount} days - Due Soon` 
        }
      } else {
        return { 
          color: 'green', 
          icon: 'mdi-check-circle', 
          text: `${dayCount} days - OK` 
        }
      }
    },

    // Get due date chip with comprehensive status
    getDueDateChip(item) {
      if (!this.hasValidClient(item)) {
        return { 
          color: 'grey', 
          icon: 'mdi-calendar-remove', 
          text: 'No Due Date' 
        }
      }
      
      try {
        const dueDate = this.dueDate(item.bookingDate, this.getClientCredit(item))
        const dueDateStr = dueDate.toISOString().split('T')[0]
        const today = new Date()
        const dueDateOnly = new Date(dueDateStr)
        const todayOnly = new Date(today.toISOString().split('T')[0])
        
        const daysDifference = Math.ceil((dueDateOnly - todayOnly) / (1000 * 60 * 60 * 24))
        
        if (daysDifference < 0) {
          return {
            color: 'red',
            icon: 'mdi-calendar-alert',
            text: `${Math.abs(daysDifference)} days overdue`
          }
        } else if (daysDifference === 0) {
          return {
            color: 'orange',
            icon: 'mdi-calendar-today',
            text: 'Due today'
          }
        } else if (daysDifference <= 3) {
          return {
            color: 'yellow',
            icon: 'mdi-calendar-clock',
            text: `Due in ${daysDifference} days`
          }
        } else {
          return {
            color: 'green',
            icon: 'mdi-calendar-check',
            text: dueDateStr
          }
        }
      } catch (error) {
        console.warn('Error calculating due date:', error)
        return { 
          color: 'grey', 
          icon: 'mdi-calendar-remove', 
          text: 'Invalid Date' 
        }
      }
    },

    // Safe wrapper for countDay method
    safeCountDay(bookingDate) {
      try {
        if (!bookingDate) return 0
        return this.countDay(bookingDate.split('T')[0])
      } catch (error) {
        console.warn('Error counting days:', error)
        return 0
      }
    },

    // Safe wrapper for dueDate method
    safeDueDate(bookingDate, credit) {
      try {
        if (!bookingDate || credit === undefined) return new Date()
        return this.dueDate(bookingDate, credit)
      } catch (error) {
        console.warn('Error calculating due date:', error)
        return new Date() // Return today as fallback
      }
    },

    // Validate client data and return detailed validation info
    validateClientData(item) {
      const validation = {
        hasClient: false,
        hasCredit: false,
        hasValidCredit: false,
        creditValue: 0,
        errors: []
      }
      
      if (!item) {
        validation.errors.push('Item is null or undefined')
        return validation
      }
      
      if (!item.client) {
        validation.errors.push('Client is null or undefined')
        return validation
      }
      
      validation.hasClient = true
      
      if (item.client.credit === undefined || item.client.credit === null) {
        validation.errors.push('Client credit is null or undefined')
        return validation
      }
      
      validation.hasCredit = true
      
      const creditValue = parseInt(item.client.credit)
      if (isNaN(creditValue) || creditValue < 0) {
        validation.errors.push('Client credit is not a valid positive number')
        return validation
      }
      
      validation.hasValidCredit = true
      validation.creditValue = creditValue
      
      return validation
    },

    // Get comprehensive client display information
    getClientDisplayInfo(item) {
      const validation = this.validateClientData(item)
      
      return {
        name: validation.hasClient ? (item.client.name || 'Unnamed Client') : 'Walk-in Customer',
        credit: validation.hasValidCredit ? validation.creditValue : 0,
        status: validation.hasValidCredit ? 'Valid' : 'Invalid',
        errors: validation.errors,
        color: validation.hasValidCredit ? 'primary' : 'grey'
      }
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

/* Enhanced styles for status chips */
.v-chip.v-size--small {
  font-size: 0.75rem;
}

.v-chip .v-icon {
  margin-right: 4px;
}

/* Better spacing for client info */
.caption {
  line-height: 1.2;
  font-size: 0.75rem;
}

/* Status colors for different states */
.booking-status-chip {
  transition: all 0.3s ease;
}

.booking-status-chip:hover {
  transform: scale(1.05);
}
</style>