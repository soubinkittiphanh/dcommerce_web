<template>
  <div class="text-center">
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
          </v-col>
          <v-col cols="6">
            <v-text-field
              disabled
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-detailsx
            />
            <v-text-field
              disabled
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
      <v-card-text>
        <v-card>
          <div ref="plchart" style="width: 100%; height: 400px"></div>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import * as ECharts from 'echarts'
import {
  swalSuccess,
  swalError2,
  dayCount,
  getNextDate,
  getFirstDayOfMonth,
  firstAndLastDateOfCurrentYear,
  getFormatNum,
} from '~/common'
export default {
  mounted() {
    this.loadTxn()

  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadTxn()
      this.loadSaleStatistic()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadTxn()
      this.loadSaleStatistic()
    },
  },
  data() {
    return {
      userId: '',
      search: '',
      isEdit: false,
      dialog: false,
      apFormKey: 1,
      isloading: false,
      txnList: [],
      selectedId: '',
      expenseList: [],
      incomeList: [],
      yearlySale: [],
      menu1: false,
      menu2: false,
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
    totalIncome() {
      let total = this.incomeList.reduce((total, item) => {
        return total + item.totalAmount * item.rate
      }, 0)
      return total + this.totalSale
    },
    totalSale() {
      let total = this.yearlySale.reduce((total, item) => {
        return total + (item.total - item.discount)
      }, 0)
      return total
    },
    totalCostOfSale() {
      let total = this.yearlySale.reduce((total, item) => {
        let totalCost = 0
        item.lines.forEach((line) => {
          line.cards.forEach((card) => {
            totalCost += card.cost
          })
        })

        return total + totalCost
      }, 0)
      console.info(`total cost of sale: ${total}`)
      return total
    },
    totalExpense() {
      let total = this.expenseList.reduce((total, item) => {
        return total + item.totalAmount * item.rate
      }, 0)
      return total + this.totalCostOfSale
    },
    profit() {
      return this.totalIncome - this.totalExpense
    },
  },
  methods: {
    formatAmount(value) {
      return getFormatNum(value)
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
    numberWithFormat(val) {
      return getFormatNum(val)
    },

    async loadTxn() {
      this.isloading = true
      try {
        this.loadSaleStatistic()
        const date = {
          startDate: this.date,
          endDate: this.date2,
        }
        const incomeResponse = await this.$axios.get(
          '/api/finanicial/ar/header/findByDate',
          { params: { date } }
        )
        const expenseResponse = await this.$axios.get(
          '/api/finanicial/ap/header/findByDate',
          { params: { date } }
        )
        this.expenseList = expenseResponse.data
        this.incomeList = incomeResponse.data

        const chart = ECharts.init(this.$refs.plchart)
        const PLoption = {
          tooltip: {
            trigger: 'item',
          },
          legend: {
            top: '5%',
            left: 'center',
            // doesn't perfectly work with our tricks, disable it
            selectedMode: false,
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              center: ['50%', '70%'],
              // adjust the start angle
              startAngle: 180,
              label: {
                show: true,
                formatter(param) {
                  // correct the percentage
                  return param.name + ' (' + param.percent * 2 + '%)'
                },
              },
              data: [
                {
                  value: this.totalIncome,
                  name: `ລາຍຮັບ \n ${this.formatAmount(this.totalIncome)}`,
                },
                {
                  value: this.totalExpense,
                  name: `ລາຍຈ່າຍ \n ${this.formatAmount(this.totalExpense)}`,
                },
                {
                  value: Math.abs(this.profit),
                  name: `ກຳໄລ/ຂາດທຶນ \n ${this.formatAmount(this.profit)}`,
                },
                {
                  // make an record to fill the bottom 50%
                  value:
                    this.totalExpense +
                    this.totalIncome +
                    Math.abs(this.profit),
                  itemStyle: {
                    // stop the chart from rendering this piece
                    color: 'none',
                    decal: {
                      symbol: 'none',
                    },
                  },
                  label: {
                    show: false,
                  },
                },
              ],
            },
          ],
        }

        chart.setOption(PLoption)
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could no load data ' + error)
      }

      this.isloading = false
    },
    async loadSaleStatistic() {
      //   const date = {startDate:"",endDate:""};//firstAndLastDateOfCurrentYear()
      const date = {
        startDate: this.date,
        endDate: this.date2,
      }
      this.isloading = true
      await this.$axios
        .get('api/sale/sumsaleYearly', { params: { date } })
        .then((res) => {
          this.yearlySale = []
          for (const iterator of res.data) {
            this.yearlySale.push(iterator)
          }
        })
        .catch((err) => {
          console.log('error', err)
        })
      this.isloading = false
    },
  },
}
</script>

<style></style>