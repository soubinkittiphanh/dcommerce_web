<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ຍອດຂາຍພ້ອມຕົນທຶນ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້ </h3>
      </v-chip>
    </div>
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="5yMsQ6gRSkI">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-row>
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
          <v-col cols="6" class="text-right">
          </v-col>
        </v-row>


      </v-card-title>
      <v-card-text>
        <!-- Sold detail -->
        <v-col cols="6" class="text-right">
          <v-row class="primary pa-2 rounded">
            <h4 style="color: white;">Income ລາຍຮັບ</h4>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Gross sale</v-col>
            <v-col cols="6">{{ formatNumber(grandSaleTotal) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Return/Cancel</v-col>
            <v-col cols="6">{{ formatNumber(grandSaleCancelTotal) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Discount</v-col>
            <v-col cols="6">{{ formatNumber(grandSaleDiscountTotal) }}</v-col>
          </v-row>
          <v-row><v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold; font-style: italic;">Net sale</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic;">{{
        formatNumber(grandSaleTotal - (grandSaleCancelTotal + grandSaleDiscountTotal)) }}</v-col>
          </v-row>
        </v-col>
        <!-- Cost of goods sold -->
        <v-col cols="6" class="text-right">
          <v-row class="primary pa-2 rounded">
            <h4 style="color: white;">Cost of goods sold ຕົ້ນທຶນສິນຄ້າ ທີ່ຂາຍໄປ</h4>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Product cost</v-col>
            <v-col cols="6">{{ formatNumber(grandSaleCost) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">COD fee</v-col>
            <v-col cols="6">{{ formatNumber(grandCODCost) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Cancellation fee</v-col>
            <v-col cols="6">{{ formatNumber(grandCancellationCost) }}</v-col>
          </v-row>
          <v-row> <v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold; font-style: italic;">Total cost of goods sold</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic;">{{
        formatNumber(grandSaleCost + grandCODCost + grandCancellationCost) }}</v-col>
          </v-row>
        </v-col>
        <!-- Accounting expense -->
        <v-col cols="6" class="text-right">
          <v-row class="primary pa-2 rounded">
            <h4 style="color: white;">Expense ລາຍຈ່າຍ</h4>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Staff salary </v-col>
            <v-col cols="6">{{ formatNumber(0) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Advertising</v-col>
            <v-col cols="6">{{ formatNumber(0) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Office expense</v-col>
            <v-col cols="6">{{ formatNumber(0) }}</v-col>
          </v-row>
          <v-row> <v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold; font-style: italic;">Total expense</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic;">{{ formatNumber(0) }}</v-col>
          </v-row>
        </v-col>
        <!-- Net profit -->
        <v-col cols="6" class="text-right">
          <v-row class="primary pa-2 rounded">
            <h4 style="color: white;">Net operating profit ກຳໄລສຸດທິ</h4>
          </v-row>
          <!-- <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Product cost</v-col>
            <v-col cols="6">{{ formatNumber(grandSaleTotal) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Rider fee</v-col>
            <v-col cols="6">{{ formatNumber(grandSaleTotal) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Shipping fee</v-col>
            <v-col cols="6">{{ formatNumber(grandSaleTotal) }}</v-col>
          </v-row> -->
          <v-row> <v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold; font-style: italic;">Net operating profit</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic;">{{ formatNumber(netProfit) }}</v-col>
          </v-row>
        </v-col>
      </v-card-text>
      <!-- <v-data-table v-if="loaddata" :headers="headers" :search="search" :items="loaddata" :items-per-page="pageLine">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>ມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ: {{ formatNumber(grandTotalStockValue) }}</v-toolbar-title>
            <v-toolbar-title>ມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ: {{ formatNumber(grandTotalStockValue) }}</v-toolbar-title>
            <v-toolbar-title>ມູນຄ່າສິນຄ້າຄ້າງສະຕັອກ: {{ formatNumber(grandTotalStockValue) }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:[`item.product.pro_price`]="{ item }">
          {{ formatNumber(item.product.pro_price) }}
        </template>
        <template v-slot:[`item.pro_price`]="{ item }">
          {{ formatNumber(item.pro_price) }}
        </template>
        <template v-slot:[`item.cost`]="{ item }">
          {{ formatNumber(item.totalCardValue / item.cardCount) }}
        </template>
        <template v-slot:[`item.totalCardValue`]="{ item }">
          {{ formatNumber(item.totalCardValue) }}
        </template>
      </v-data-table> -->
    </v-card>
  </div>
</template>
<script>
import ProductForm from '~/components/product/ProductForm.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { ticketHtml, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { ProductForm, ProductFormCreate, PriceListForm },
  middleware: 'auths',
  data() {
    return {
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
      menu1: false,
      menu2: false,
      guidelineDialog: false,
      isloading: false,
      dialogMessage: false,
      message: '',
      loaddata: [],
      pageLine: 30,
      search: '',
    }
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
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
  async mounted() {
    await this.fetchData()
  },

  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation']),
    grandSaleTotal() {
      const totalStockValue = this.loaddata.reduce((total, item) => {
        return total + item.total;
      }, 0);
      return totalStockValue;
    },
    grandSaleDiscountTotal() {
      const totalStockValue = this.loaddata.filter(el => el.isActive == true).reduce((total, item) => {
        return total + item.discount;
      }, 0);
      return totalStockValue;
    },
    grandSaleCancelTotal() {
      console.log(`Sale cancel status ${this.loaddata.filter(el => el.isActive == false).length}`);
      const totalStockValue = this.loaddata.filter(el => el.isActive == false).reduce((total, item) => {
        return total + item.total;
      }, 0);
      return totalStockValue;
    },
    grandSaleCost() {
      let totalSaleValue = 0;
      for (const sale of this.loaddata.filter(el => el.isActive == true)) {
        console.log(`Sale ID: ${sale.id}`);
        for (const line of sale.lines) {
          console.log(`  Line ID: ${line.lineId}`);

          let totalLineValue = 0;

          for (const card of line.cards) {
            console.log(`    Card Number: ${card.cardNumber}, Value: ${card.value}`);
            totalLineValue += card.cost;
          }

          console.log(`  Total Line Value: ${totalLineValue}`);
          totalSaleValue += totalLineValue;
        }

        console.log(`Total Sale Value: ${totalSaleValue}`);
      }
      return totalSaleValue;
    },
    grandCODCost() {
      let totalCOD = 0;
      let totalCancelFee = 0;
      for (const sale of this.loaddata.filter(el => el.isActive == true)) {
        console.log(`Sale ID: ${sale.id}`);
        if (sale.dynamic_customer) {
          totalCOD += sale.dynamic_customer.cod_fee;
          totalCancelFee += sale.dynamic_customer.cancel_fee;
        }
        console.log(`Total Sale Value: ${totalCOD}`);
      }
      return totalCOD;
    },
    grandCancellationCost() {
      let totalCancellationFee = 0;
      for (const sale of this.loaddata.filter(el => el.isActive == false)) {
        console.log(`Sale ID: ${sale.id}`);
        if (sale.dynamic_customer) {
          totalCancellationFee += sale.dynamic_customer.cancel_fee;
        }
        console.log(`Total cancellation fee: ${totalCancellationFee}`);
      }
      return totalCancellationFee;
    },
    netProfit() {
      return (this.grandSaleTotal - (this.grandSaleCancelTotal + this.grandSaleDiscountTotal)) - (this.grandSaleCost + this.grandCODCost + this.grandCancellationCost)
    }

  },

  methods: {
    formatNumber(value) {
      return getFormatNum(value)
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
    async fetchData() {
      this.isloading = true
      const date = {
        startDate: this.date,
        endDate: this.date2,
      }
      await this.$axios
        .get(`api/sale/findDetailByDate`, { params: { date } })
        .then((res) => {
          this.loaddata = res.data;
          console.log(`Stock entry count ${this.loaddata.length}`);
        })
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
  },
}
</script>