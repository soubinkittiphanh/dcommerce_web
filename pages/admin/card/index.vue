<template>
  <div class="text-center">
    <div>
      <v-dialog v-model="dialog" width="90%">
        <PurchasingFormCRUD
          :is-update="isEdit"
          :headerId="selectedId"
          @close="triggerDialog"
          :key="apFormKey"
          @close-dialog="dialog = false"
          @reload="loadTxn"
        >
        </PurchasingFormCRUD>
      </v-dialog>
      <v-dialog v-model="receivingDialog" width="90%">
        <ReceivingFormCRUD
          :POTransaction="currentPO"
          sourceAPLID="PO"
          @close="triggerDialog"
          :key="apFormKey"
          @close-dialog="receivingDialog = false"
          @reload="loadTxn"
        >
        </ReceivingFormCRUD>
      </v-dialog>
    </div>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
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
          <v-col cols="6">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-detailsx
            />
            <v-text-field
              v-model="userId"
              append-icon="mdi-magnify"
              label="ລະຫັດຜູ້ຂາຍ"
              single-line
              hide-detailsx
            />
            <v-btn
              @click="loadTxn"
              class="primary"
              size="large"
              variant="outlined"
              rounded
            >
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      <!-- <v-data-table v-if="orderHeaderList" :headers="headers" :search="search" :items="orderHeaderList"> -->
      <v-card-text>
        <!-- <table border="1" v-if="purchaseCurrencyGrouping.length > 0">
          <thead>
            <tr>
              <th>ສະກຸນເງິນ</th>
              <th>ລວມຍອດ</th>
            </tr>
          </thead>
    
        </table> -->
      </v-card-text>
      <v-data-table
        v-if="txnList"
        :headers="headers"
        :search="search"
        :items="txnList"
        item-value="pro_name"
      >
        <!-- Group Header: Product Name -->
        <template v-slot:group-header="{ item }">
          <tr>
            <td colspan="10">
              <strong>{{ item.pro_name }}</strong>
              ({{ item.cardCount }} ບັດ, ລວມຕົ້ນທຶນ
              {{ numberWithCommas(item.totalCost) }})
            </td>
          </tr>
        </template>

        <!-- Card Count -->
        <template v-slot:[`item.cardCount`]="{ item }">
          {{ item.cardCount }}
        </template>

        <!-- Cost Average per Unit -->
        <template v-slot:[`item.costAverage`]="{ item }">
          {{ numberWithCommas(item.totalCost / item.cardCount) }}
        </template>

        <!-- Total Cost -->
        <template v-slot:[`item.totalCost`]="{ item }">
          {{ numberWithCommas(item.totalCost) }}
        </template>

        <!-- Currency Code -->
        <template v-slot:[`item.currency.code`]="{ item }">
          {{ item['currency.code'] }}
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import PoForm from '~/components/po/PoForm.vue'
import PurchasingFormCRUD from '~/components/PurchasingFormCRUD.vue'
import ReceivingFormCRUD from '~/components/ReceivingFormCRUD.vue'
import moment from 'moment'
import {
  swalSuccess,
  swalError2,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
  getFormatNum,
} from '~/common'
export default {
  components: { PoForm, PurchasingFormCRUD, ReceivingFormCRUD },
  mounted() {
    this.loadTxn()
  },
  data() {
    return {
      userId: '',
      search: '',
      isEdit: false,
      dialog: false,
      receivingDialog: false,
      apFormKey: 1,
      isloading: false,
      menu1: false,
      menu2: false,
      txnList: [],
      selectedId: '',
      headers: [
        {
          text: 'ຊື່ສິນຄ້າ', // Product Name
          align: 'left',
          value: 'pro_name', // Updated to match the response structure
          sortable: true,
        },
        {
          text: 'ຈນ ຮັບເຂົ້າ', // Card Count (aggregated)
          align: 'center',
          value: 'cardCount', // Using aggregated card count
        },
        {
          text: 'ສະເລ່ຍຕົ້ນທຶນຕໍ່ໜ່ວຍ', // Total Cost
          align: 'right',
          value: 'costAverage', // Using aggregated total cost
        },
        {
          text: 'ຕົ້ນທຶນ', // Total Cost
          align: 'right',
          value: 'totalCost', // Using aggregated total cost
        },
        {
          text: 'ສະກຸນເງິນ', // Currency
          align: 'center',
          value: 'currency.code', // Currency code
        },
      ],
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
    }
  },
  computed: {
    currentPO() {
      return this.txnList.find((el) => el.id == this.selectedId)
    },

    transformedTxnList() {
      return this.txnList.map((item) => ({
        ...item,
        card_input_date: moment(item.card_input_date).format(
          'DD/MM/YYYY HH:mm'
        ),
        cardStatusIcon:
          item.card_isused === 0
            ? { icon: 'mdi-check-circle', color: 'green' }
            : { icon: 'mdi-close-circle', color: 'red' },
      }))
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadTxn()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadTxn()
    },
  },
  methods: {
    numberWithCommas(value) {
      return getFormatNum(value)
    },
    exportToExcel() {
      // Define headers based on your current data model
      const headerMap = {
        pro_name: 'Product Name',
        cardCount: 'Stock',
        totalCost: 'Total Cost',
        'currency.code': 'Currency Code', // Nested attribute for currency
        costAverage: 'Cost Average', // New header for cost average
      }

      // Transform the data with only required fields and calculate the cost average
      const transformedData = this.txnList.map((item) => {
        let newItem = {}
        Object.keys(headerMap).forEach((key) => {
          if (key === 'costAverage') {
            // Calculate cost average
            newItem[headerMap[key]] = item.cardCount
              ? item.totalCost / item.cardCount
              : 0
          } else if (item.hasOwnProperty(key)) {
            newItem[headerMap[key]] = item[key] || ''
          }
        })
        return newItem
      })

      // Create the worksheet and workbook
      const worksheet = this.$xlsx.utils.json_to_sheet(transformedData)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

      // Download the file
      this.$xlsx.writeFile(workbook, 'data.xlsx')
    },

    triggerDialog() {
      this.apFormKey += 1
      this.selectedId = null
      this.isEdit = false
      this.dialog = true
    },
    editItem(item) {
      console.log(`PO HEADER ID ${item.id}`)
      this.selectedId = item.id
      this.isEdit = true
      this.apFormKey += 1
      this.dialog = true
    },
    receive(item) {
      console.log(`PO HEADER ID ${item.id}`)
      this.selectedId = item.id
      this.isEdit = true
      this.apFormKey += 1
      this.receivingDialog = true
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
    async loadTxn() {
      this.isloading = true

      const params = {
        startDate: this.date,
        endDate: this.date2,
      }

      try {
        const response = await this.$axios.get('/api/card/find/date', {
          params,
        })

        this.txnList = response.data.map((iterator) => ({
          ...iterator,
        }))

        console.log('====> ', this.txnList[0])
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }

      this.isloading = false
    },
  },
}
</script>

<style></style>