<template>
  <div class="modern-dashboard">
    <!-- Loading Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading...</p>
      </div>
    </v-dialog>

    <!-- Terminal Selection Dialog -->
    <v-dialog v-model="terminalDialog" scrollable max-width="500" persistent>
      <v-card class="terminal-dialog">
        <div class="dialog-header">
          <h3>ເລືອກ Terminal</h3>
          <v-btn icon small @click="terminalDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        
        <div class="dialog-content">
          <v-radio-group v-model="terminalSelected" class="custom-radio-group">
            <div 
              v-for="terminal in findAllTerminal"
              :key="terminal.id"
              class="terminal-option"
              :class="{ 'selected': terminalSelected === terminal.id }"
              @click="terminalSelected = terminal.id"
            >
              <v-radio :value="terminal.id" class="hidden"></v-radio>
              <div class="terminal-info">
                <h4>{{ terminal.name }}</h4>
                <p>{{ terminal.description }}</p>
              </div>
              <v-icon v-if="terminalSelected === terminal.id" color="primary">mdi-check-circle</v-icon>
            </div>
          </v-radio-group>
        </div>
        
        <div class="dialog-actions">
          <v-btn 
            class="primary-button" 
            @click="chooseTerminal"
            :disabled="!terminalSelected"
          >
            ເລືອກ Terminal
          </v-btn>
        </div>
      </v-card>
    </v-dialog>

    <!-- Main Dashboard Content -->
    <div class="dashboard-container">
      
      <!-- Header Section -->
      <div class="dashboard-header">
        <div class="header-content">
          <h1 class="dashboard-title">Dashboard Overview</h1>
          <p class="dashboard-subtitle">Real-time business insights and analytics</p>
        </div>
        <div class="header-actions">
          <div class="date-display">
            <v-icon>mdi-calendar</v-icon>
            <span>{{ currentDate }}</span>
          </div>
        </div>
      </div>

      <!-- Quick Actions Section -->
      <section class="quick-actions-section">
        <div class="section-header">
          <h2 class="section-title">Quick Actions</h2>
          <p class="section-description">Access your most used features</p>
        </div>
        
        <div class="quick-actions-grid">
          <div
            v-for="(item, index) in menus"
            :key="index"
            class="action-card"
            @click="navigateTo(item.path)"
          >
            <div class="card-icon">
              <img :src="item.svgIcon" alt="" />
            </div>
            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
            </div>
            <div class="card-overlay"></div>
          </div>
        </div>
      </section>

      <!-- KPI Overview Section -->
      <section class="kpi-section">
        <div class="section-header">
          <h2 class="section-title">Sales Overview</h2>
          <p class="section-description">Track your performance metrics</p>
        </div>
        
        <div class="kpi-grid">
          <div
            v-for="(item, index) in menusOverview"
            :key="index"
            class="kpi-card"
            :class="`kpi-card--${index}`"
          >
            <div class="kpi-header">
              <div class="kpi-icon">
                <v-icon>{{ item.icon }}</v-icon>
              </div>
              <div class="kpi-trend">
                <v-icon size="18" color="#10B981">mdi-trending-up</v-icon>
              </div>
            </div>
            
            <div class="kpi-content">
              <h3 class="kpi-title">{{ item.title }}</h3>
              <div class="kpi-value">{{ item.total }}</div>
              
              <!-- Payment Method Breakdown -->
              <div v-if="item.groupedSales && Object.keys(item.groupedSales).length > 0" class="payment-breakdown">
                <div 
                  v-for="(payment, code) in item.groupedSales" 
                  :key="code"
                  class="payment-item"
                >
                  <span class="payment-method">{{ payment.paymentName }}</span>
                  <span class="payment-amount">{{ numberFormatter(payment.totalSales) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Analytics Section -->
      <section class="analytics-section">
        <div class="section-header">
          <h2 class="section-title">Analytics Dashboard</h2>
          <p class="section-description">Detailed insights into your business performance</p>
        </div>
        
        <div class="analytics-grid">
          <!-- Top Categories Chart -->
          <div class="chart-card chart-card--large">
            <div class="chart-header">
              <h3>ສິນຄ້າຂາຍດີຕາມໝວດ</h3>
              <v-btn icon small>
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </div>
            <div class="chart-container">
              <div ref="chart" class="echarts-container"></div>
            </div>
          </div>

          <!-- Daily Sales Trend -->
          <div class="chart-card" v-if="dailyState">
            <div class="chart-header">
              <h3>Daily Sales Trend</h3>
              <div class="chart-period">This Month</div>
            </div>
            <div class="chart-container">
              <apexchart
                type="line"
                height="300"
                :options="barOptionsForDailyStat"
                :series="barSeriesForDailyStat"
              ></apexchart>
            </div>
          </div>

          <!-- Payment Methods -->
          <div class="chart-card chart-card--small">
            <div class="chart-header">
              <h3>Payment Methods</h3>
            </div>
            <div class="chart-container">
              <apexchart 
                type="donut" 
                height="250"
                :options="options" 
                :series="paymentSeries"
              ></apexchart>
            </div>
          </div>

          <!-- Monthly Statistics -->
          <div class="chart-card" v-if="dailyState">
            <div class="chart-header">
              <h3>Monthly Overview</h3>
              <div class="chart-period">{{ new Date().getFullYear() }}</div>
            </div>
            <div class="chart-container">
              <apexchart
                type="line"
                height="300"
                :options="barOptionsForMonthlyStat"
                :series="barSeriesForMonthlyStat"
              ></apexchart>
            </div>
          </div>
        </div>
      </section>

      <!-- Inventory Alert Section -->
      <section class="inventory-section" v-if="currentSelectedLocation">
        <div class="section-header">
          <h2 class="section-title">Inventory Alerts</h2>
          <p class="section-description">Monitor low stock items</p>
        </div>
        
        <div class="inventory-container" :key="minstockComponentsKey">
          <MinStockCard />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {
  generateColorShades,
  firstAndLastDateOfCurrentYear,
  firstAndLastDateOfLast6Months,
  getFirstDayOfMonth,
  today,
  getFormatNum,
} from '~/common'
import { hostName, mainCompanyInfo, mainCompanyInfoV1 } from '~/common/api'
import MinStockCard from '~/components/minStockCard'
import MenuOverview from '~/components/menuOverview'
import { mapActions, mapGetters } from 'vuex'
import * as ECharts from 'echarts'

export default {
  components: {
    MenuOverview,
    MinStockCard,
  },
  middleware: 'auths',
  data() {
    return {
      terminalDialog: false,
      terminalSelected: null,
      currentDate: new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      
      // Chart configurations
      barOptionsForMonthlyStat: {
        colors: ['#10B981'], // Bright green for better visibility
        chart: {
          type: 'line',
          height: 'auto',
          toolbar: { show: false },
          background: 'transparent',
        },
        stroke: {
          curve: 'smooth',
          width: 4, // Increased from 3 to 4
          dashArray: 0
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4, // Increased opacity
            opacityTo: 0.1,
            stops: [0, 90, 100]
          }
        },
        markers: {
          size: 5,
          colors: ['#10B981'],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: [],
          labels: {
            style: {
              fontFamily: 'Noto Sans Lao, sans-serif',
              fontSize: '12px',
              colors: '#6B7280'
            },
          },
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          title: { text: '' },
          labels: {
            formatter: function (value) {
              return value.toLocaleString()
            },
            style: {
              colors: '#6B7280',
              fontSize: '12px'
            }
          }
        },
        grid: {
          show: true,
          borderColor: '#F3F4F6',
          strokeDashArray: 0,
          position: 'back',
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } }
        },
        tooltip: {
          theme: 'light',
          style: {
            fontSize: '12px',
            fontFamily: 'Noto Sans Lao, sans-serif'
          }
        },
        title: {
          text: '',
          style: {
            fontFamily: 'Noto Sans Lao, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            color: '#1F2937'
          },
        },
      },
      
      barSeriesForMonthlyStat: [{
        name: 'Sales',
        data: [],
      }],

      menus: [
        {
          title: 'POS',
          svgIcon: require('~/assets/icons/cashier_2.svg'),
          path: '/pos/minimart',
        },
        {
          title: 'Invoice',
          svgIcon: require('~/assets/icons/invoice.svg'),
          path: '/admin/ordersFromPos',
        },
        {
          title: 'ລູກຫນີ້',
          svgIcon: require('~/assets/icons/pay-card.svg'),
          path: '/admin/ordersFromPosCredit',
        },
        {
          title: 'Stock',
          svgIcon: require('~/assets/icons/stock.svg'),
          path: '/admin/product/productlist'
        },
        {
          title: 'ລາຍງານ ລູກຄ້າຕິດຫນີ້',
          svgIcon: require('~/assets/icons/responsive.svg'),
          path: '/admin/ordersFromPosSummaryByCustomer',
        },
        {
          title: 'Customer',
          svgIcon: require('~/assets/icons/patient.svg'),
          path: '/admin/client',
        },
      ],
      
      yearlySale: [],
      menusOverview: [
        {
          title: 'ຍອດຂາຍມື້ນິ (KIP)',
          icon: 'mdi-calendar-today',
          path: '',
          total: '0',
          groupedSales: {},
        },
        {
          title: `ຍອດຂາຍເດືອນນີ້ - ${new Date().toDateString().split(' ')[1]}/${new Date().toDateString().split(' ')[3]} KIP`,
          icon: 'mdi-calendar-month',
          path: '',
          total: '0',
          cnt: '0',
        },
        {
          title: `ຍອດຂາຍ 6 ເດືອນຫຼັງ - KIP`,
          icon: 'mdi-calendar-range',
          path: '',
          total: '0',
        },
      ],

      minstockComponentsKey: 1,
      isloading: false,
      dailyState: false,
      
      options: {
        chart: {
          type: 'donut',
          height: 250,
        },
        colors: ['#667eea', '#f093fb', '#764ba2', '#4facfe', '#00f2fe'],
        labels: [],
        legend: {
          position: 'bottom',
          fontSize: '12px',
          fontFamily: 'Noto Sans Lao, sans-serif'
        },
        plotOptions: {
          pie: {
            donut: {
              size: '70%'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val.toFixed(1) + '%'
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: { width: 200 },
            legend: { position: 'bottom' }
          },
        }],
      },

      barSeriesForDailyStat: [{
        name: 'Daily Sales',
        data: [],
      }],
      
      barOptionsForDailyStat: {
        colors: ['#3B82F6'], // Bright blue for better visibility
        chart: {
          type: 'line',
          height: 'auto',
          toolbar: { show: false },
          background: 'transparent',
        },
        stroke: {
          curve: 'smooth',
          width: 4, // Increased from 3 to 4
          dashArray: 0
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4, // Increased opacity
            opacityTo: 0.1,
            stops: [0, 90, 100]
          }
        },
        markers: {
          size: 5,
          colors: ['#3B82F6'],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: [],
          labels: {
            style: {
              fontFamily: 'Noto Sans Lao, sans-serif',
              fontSize: '12px',
              colors: '#6B7280'
            },
          },
          axisBorder: { show: false },
          axisTicks: { show: false },
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toLocaleString()
            },
            style: {
              colors: '#6B7280',
              fontSize: '12px'
            }
          }
        },
        grid: {
          show: true,
          borderColor: '#F3F4F6',
          strokeDashArray: 0,
          xaxis: { lines: { show: false } },
          yaxis: { lines: { show: true } }
        },
        tooltip: {
          theme: 'light',
          style: {
            fontSize: '12px',
            fontFamily: 'Noto Sans Lao, sans-serif'
          }
        },
        title: {
          text: '',
          style: {
            fontFamily: 'Noto Sans Lao, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            color: '#1F2937'
          },
        },
      },
    }
  },
  
  async created() {
    await this.loadSaleStatistic()
    this.generateDailyStatisticSale()
    this.init()
  },
  
  async mounted() {
    await this.loadTopSale()
  },
  
  computed: {
    ...mapGetters([
      'findAllTerminal',
      'findSelectedTerminal',
      'currentSelectedLocation',
      'findAllLocation',
    ]),

    // Use computed properties for chart data
    paymentSeries() {
      return this.paymentMethodData.series
    },

    paymentLabels() {
      return this.paymentMethodData.labels
    },
    
    totalSale6M() {
      const totalPrice = this.yearlySale.reduce((total, item) => {
        let rider_fee = 0
        let cod_fee = 0
        if (item.dynamic_customer) {
          rider_fee = item.dynamic_customer.rider_fee
          cod_fee = item.dynamic_customer.cod_fee
        }
        return (total += item.total + rider_fee - cod_fee)
      }, 0)
      return getFormatNum(totalPrice)
    },
    
    totalSaleMTD() {
      const monthSaleList = this.yearlySale.filter(
        (el) => el.bookingDate.split('-')[1] == today.split('-')[1]
      )
      const totalPrice = monthSaleList.reduce((total, item) => {
        let rider_fee = 0
        let cod_fee = 0
        if (item.dynamic_customer) {
          rider_fee = item.dynamic_customer.rider_fee
          cod_fee = item.dynamic_customer.cod_fee
        }
        return (total += item.total + rider_fee - cod_fee)
      }, 0)
      return getFormatNum(totalPrice)
    },

    txnSaleMTD() {
      const monthSaleList = this.yearlySale.filter(
        (el) => el.bookingDate.split('-')[1] == today.split('-')[1]
      )
      const dailyTransactions = monthSaleList.reduce((acc, transaction) => {
        const date = transaction.bookingDate
        const index = acc.findIndex((item) => item.date === date)
        let rider_fee = 0
        let cod_fee = 0
        if (transaction.dynamic_customer) {
          rider_fee = transaction.dynamic_customer.rider_fee
          cod_fee = transaction.dynamic_customer.cod_fee
        }
        if (index === -1) {
          acc.push({
            date,
            transactions: [transaction],
            totalSale: transaction.total + rider_fee - cod_fee,
          })
        } else {
          acc[index].transactions.push(transaction)
          acc[index].totalSale += transaction.total + rider_fee - cod_fee
        }
        return acc
      }, [])
      return dailyTransactions
    },
    
    totalSaleTD() {
      const todaySaleList = this.yearlySale.filter((el) => el.bookingDate == today)
      const totalPrice = todaySaleList.reduce((total, item) => {
        let rider_fee = 0
        let cod_fee = 0
        if (item.dynamic_customer) {
          rider_fee = item.dynamic_customer.rider_fee
          cod_fee = item.dynamic_customer.cod_fee
        }
        return (total += item.total + rider_fee - cod_fee)
      }, 0)
      return getFormatNum(totalPrice)
    },

    // Computed property for payment method chart
    paymentMethodData() {
      if (!this.yearlySale || this.yearlySale.length === 0) {
        return { series: [], labels: [] }
      }
      
      const grouped = this.saleGroupByPayment(this.yearlySale)
      const series = []
      const labels = []
      
      Object.keys(grouped).forEach(code => {
        const payment = grouped[code]
        series.push(payment.totalSales)
        labels.push(payment.paymentName)
      })
      
      return { series, labels }
    },
  },

  watch: {
    // Watch for payment data changes to update chart labels
    paymentLabels: {
      handler(newLabels) {
        this.options.labels = newLabels
      },
      immediate: true
    }
  },

  methods: {
    ...mapActions([
      'setSelectedTerminal',
      'setSelectedLocation',
      'initProduct',
    ]),

    navigateTo(path) {
      this.$router.push(path)
    },
    
    saleGroupByPayment(saleList) {
      if (!Array.isArray(saleList)) {
        throw new Error('Input must be an array')
      }
      return saleList.reduce((acc, sale) => {
        const paymentCode = sale.payment?.payment_code || 'UNKNOWN'
        const total = sale.total || 0

        if (!acc[paymentCode]) {
          acc[paymentCode] = {
            totalSales: 0,
            count: 0,
            paymentName: sale.payment?.payment_name || 'Unknown Payment',
          }
        }

        acc[paymentCode].totalSales += total
        acc[paymentCode].count += 1
        return acc
      }, {})
    },

    async chooseTerminal() {
      this.setSelectedTerminal(this.terminalSelected)
      const location = this.findAllLocation.find(
        (el) =>
          el.id ==
          this.findAllTerminal.find((el) => el.id == this.terminalSelected)[
            'locationId'
          ]
      )
      
      if (location) {
        this.setSelectedLocation(location)
        this.minstockComponentsKey += 1
        this.terminalDialog = false
        await this.loadProduct(location.id)
      }
    },

    async loadProduct(locationId) {
      this.isloading = true
      this.productList = []
      await this.$axios
        .get(`product_f/${locationId}`)
        .then((res) => {
          this.initProduct(res.data.data)
        })
        .catch((er) => {
          console.log('Data: ' + er)
        })
      this.isloading = false
    },

    numberFormatter(value) {
      return getFormatNum(value)
    },

    getRandomColor() {
      const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#a8edea', '#fed6e3']
      return colors[Math.floor(Math.random() * colors.length)]
    },

    async loadTopSale() {
      this.isloading = true
      await this.$axios
        .get('api/topsaleMinimart/?top=' + 5)
        .then((res) => {
          const chart = ECharts.init(this.$refs.chart)
          const option = {
            tooltip: { trigger: 'item' },
            legend: {
              orient: 'horizontal',
              bottom: '0%',
              textStyle: {
                fontFamily: 'Noto Sans Lao, sans-serif',
                fontSize: 12
              }
            },
            series: [
              {
                name: 'Sales by Category',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '45%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'Noto Sans Lao, sans-serif'
                  }
                },
                labelLine: { show: false },
                data: [],
              },
            ],
          }

          const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe']
          
          res.data.forEach((el, index) => {
            const entry = {
              name: el.categ_name,
              value: +el.sale_count,
              itemStyle: {
                color: colors[index % colors.length]
              }
            }
            option.series[0].data.push(entry)
          })

          chart.setOption(option)
        })
        .catch((err) => {
          console.log('error', err)
        })
      this.isloading = false
    },

    async loadSaleStatistic() {
      const date = firstAndLastDateOfLast6Months() // Changed from firstAndLastDateOfCurrentYear()
      this.isloading = true
      await this.$axios
        .get('api/sale/sumsaleYearly', { params: { date } })
        .then((res) => {
          this.yearlySale = [] // Note: keeping the same variable name for compatibility
          for (const iterator of res.data) {
            this.yearlySale.push(iterator)
          }
          
          const monthSaleList = this.yearlySale.filter(
            (el) => el.bookingDate.split('-')[1] == today.split('-')[1]
          )
          const todaySaleList = this.yearlySale.filter(
            (el) => el.bookingDate == today
          )
          
          this.menusOverview[2]['total'] = this.totalSale6M // Updated name
          this.menusOverview[2]['groupedSales'] = this.saleGroupByPayment(this.yearlySale)
          this.menusOverview[1]['total'] = this.totalSaleMTD
          this.menusOverview[1]['groupedSales'] = this.saleGroupByPayment(monthSaleList)
          this.menusOverview[0]['total'] = this.totalSaleTD
          this.menusOverview[0]['groupedSales'] = this.saleGroupByPayment(todaySaleList)
          
          this.monthGroupSale()
        })
        .catch((err) => {
          console.log('error', err)
        })
      this.isloading = false
    },

    async generateDailyStatisticSale() {
      this.isloading = true
      for (const iterator of this.txnSaleMTD) {
        this.barSeriesForDailyStat[0].data.push(iterator['totalSale'])
        this.barOptionsForDailyStat.xaxis.categories.push(iterator['date'])
      }
      this.dailyState = true
      this.isloading = false
    },

    monthGroupSale() {
      let groupedTransactions = {}

      this.yearlySale.forEach((transaction) => {
        const date = new Date(transaction.bookingDate)
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const key = `${year}-${month.toString().padStart(2, '0')}`

        if (!groupedTransactions[key]) {
          groupedTransactions[key] = { total: 0, transactions: [] }
        }

        let rider_fee = 0
        let cod_fee = 0
        if (transaction.dynamic_customer) {
          rider_fee = transaction.dynamic_customer.rider_fee
          cod_fee = transaction.dynamic_customer.cod_fee
        }
        groupedTransactions[key].total += transaction.total + rider_fee - cod_fee
        groupedTransactions[key].transactions.push(transaction)
      })

      const keyList = Object.keys(groupedTransactions)
      for (const iterator of keyList) {
        this.barSeriesForMonthlyStat[0].data.push(groupedTransactions[iterator]['total'])
        this.barOptionsForMonthlyStat.xaxis.categories.push(iterator)
      }
      
      return groupedTransactions
    },

    init() {
      console.log('Dashboard initialized')
    },
  },
}
</script>

<style scoped>
/* Import Noto Sans Lao font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

.modern-dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', 'Noto Sans Lao', sans-serif;
}

/* Loading Styles */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f4f6;
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  margin: 0;
  color: #6b7280;
  font-weight: 500;
}

/* Terminal Dialog Styles */
.terminal-dialog {
  border-radius: 16px !important;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.dialog-header h3 {
  margin: 0;
  font-weight: 600;
  font-size: 1.25rem;
}

.dialog-content {
  padding: 1.5rem 2rem;
  max-height: 400px;
  overflow-y: auto;
}

.custom-radio-group .v-input {
  margin: 0;
}

.terminal-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid #f3f4f6;
  border-radius: 12px;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}

.terminal-option:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.terminal-option.selected {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

.terminal-option .hidden {
  display: none;
}

.terminal-info h4 {
  margin: 0 0 0.25rem 0;
  font-weight: 600;
  color: #1f2937;
}

.terminal-info p {
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
}

.dialog-actions {
  padding: 1.5rem 2rem;
  background: #f9fafb;
  display: flex;
  justify-content: flex-end;
}

.primary-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  border-radius: 8px !important;
  padding: 0 2rem !important;
  height: 44px !important;
  font-weight: 600 !important;
  text-transform: none !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4) !important;
  transition: all 0.2s ease !important;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.6) !important;
}

.primary-button:disabled {
  opacity: 0.6;
  transform: none !important;
  box-shadow: none !important;
}

/* Dashboard Container */
.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header Section */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.header-content {
  flex: 1;
}

.dashboard-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #1f2937 0%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dashboard-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  font-weight: 400;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.date-display {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  color: #6b7280;
  font-weight: 500;
}

/* Section Styles */
.section-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.section-description {
  color: #6b7280;
  margin: 0;
  font-size: 1rem;
}

/* Quick Actions Section */
.quick-actions-section {
  margin-bottom: 4rem;
}

.quick-actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.action-card {
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

.action-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.action-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  padding: 1rem;
}

.card-icon img {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-content h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  flex: 1;
}

.arrow-icon {
  color: #6b7280;
  transition: transform 0.3s ease;
}

.action-card:hover .arrow-icon {
  transform: translateX(4px);
  color: #667eea;
}

/* KPI Section */
.kpi-section {
  margin-bottom: 4rem;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.kpi-card {
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.kpi-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.kpi-card--0::before { background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); }
.kpi-card--1::before { background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%); }
.kpi-card--2::before { background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%); }

.kpi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.15);
}

.kpi-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.kpi-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.kpi-trend {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #10B981;
  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.1);
}

.kpi-content {
  flex: 1;
}

.kpi-title {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 0.5rem 0;
  font-weight: 500;
}

.kpi-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.payment-breakdown {
  border-top: 1px solid #f3f4f6;
  padding-top: 1rem;
}

.payment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f9fafb;
}

.payment-item:last-child {
  border-bottom: none;
}

.payment-method {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.payment-amount {
  font-weight: 600;
  color: #1f2937;
  font-size: 0.875rem;
}

/* Analytics Section */
.analytics-section {
  margin-bottom: 4rem;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

.chart-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  overflow: hidden;
  transition: all 0.3s ease;
}

.chart-card:hover {
  box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.15);
}

.chart-card--large {
  grid-column: span 8;
}

.chart-card--small {
  grid-column: span 4;
}

.chart-card:not(.chart-card--large):not(.chart-card--small) {
  grid-column: span 6;
}

@media (max-width: 1024px) {
  .chart-card--large,
  .chart-card--small,
  .chart-card {
    grid-column: span 12;
  }
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 0 2rem;
  border-bottom: 1px solid #f3f4f6;
  margin-bottom: 1rem;
}

.chart-header h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
}

.chart-period {
  font-size: 0.875rem;
  color: #6b7280;
  background: #f9fafb;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-weight: 500;
}

.chart-container {
  padding: 0 2rem 2rem 2rem;
}

.echarts-container {
  width: 100%;
  height: 400px;
}

/* Inventory Section */
.inventory-section {
  margin-bottom: 2rem;
}

.inventory-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-container {
    padding: 0rem;
  }
  
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .dashboard-title {
    font-size: 2rem;
  }
  
  .quick-actions-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .kpi-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .action-card,
  .kpi-card {
    padding: 1.5rem;
  }
  
  .card-icon {
    width: 56px;
    height: 56px;
  }
  
  .kpi-value {
    font-size: 1.75rem;
  }
  
  .chart-header {
    padding: 1rem 1.5rem 0 1.5rem;
  }
  
  .chart-container {
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
}

/* Animation for cards */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.action-card,
.kpi-card,
.chart-card {
  animation: slideInUp 0.6s ease-out;
}

.action-card:nth-child(1) { animation-delay: 0.1s; }
.action-card:nth-child(2) { animation-delay: 0.2s; }
.action-card:nth-child(3) { animation-delay: 0.3s; }
.action-card:nth-child(4) { animation-delay: 0.4s; }
.action-card:nth-child(5) { animation-delay: 0.5s; }
.action-card:nth-child(6) { animation-delay: 0.6s; }
</style>