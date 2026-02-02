<template>
  <div>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <p class="loading-text">ກຳລັງໂຫລດຂໍ້ມູນ...</p>
      </div>
    </v-dialog>

    <v-dialog v-model="terminalDialog" scrollable max-width="500" persistent>
      <v-card class="terminal-dialog">
        <div class="dialog-header" :style="dialogHeaderStyle">
          <h3>ເລືອກ Terminal</h3>
          <v-btn icon small @click="terminalDialog = false"><v-icon color="white">mdi-close</v-icon></v-btn>
        </div>
        <div class="dialog-content">
          <v-radio-group v-model="terminalSelected" class="custom-radio-group">
            <div v-for="terminal in findAllTerminal" :key="terminal.id" 
                 class="terminal-option" :class="{ selected: terminalSelected === terminal.id }"
                 @click="terminalSelected = terminal.id">
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
          <v-btn class="primary-button" :style="primaryButtonStyle" @click="chooseTerminal" :disabled="!terminalSelected">
            ເລືອກ Terminal
          </v-btn>
        </div>
      </v-card>
    </v-dialog>

    <div class="dashboard-container">
      <div class="dashboard-header">
        <div class="header-content">
          <h1 class="dashboard-title">Dashboard Overview</h1>
          <p class="dashboard-subtitle">Business performance and payment tracking</p>
        </div>
        <div class="header-actions">
          <div class="date-display"><v-icon color="primary" class="mr-2">mdi-calendar</v-icon> {{ currentDate }}</div>
        </div>
      </div>

      <section class="quick-actions-section">
        <div class="section-header"><h2 class="section-title">Quick Actions</h2></div>
        <div class="quick-actions-grid">
          <div v-for="(item, index) in menus" :key="index" class="action-card" @click="navigateTo(item.path)">
            <div class="card-icon" :style="cardIconStyle"><img :src="item.svgIcon" alt="" /></div>
            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
            </div>
            <div class="card-overlay"></div>
          </div>
        </div>
      </section>

      <section class="kpi-section">
        <div class="section-header"><h2 class="section-title">Sales Overview</h2></div>
        <div class="kpi-grid">
          <div v-for="(item, index) in menusOverview" :key="index" class="kpi-card" :class="`kpi-card--${index}`">
            <div class="kpi-header">
              <div class="kpi-icon" :style="kpiIconStyle"><v-icon color="white">{{ item.icon }}</v-icon></div>
              <div class="kpi-trend"><v-icon size="18" color="#10B981">mdi-trending-up</v-icon></div>
            </div>
            <div class="kpi-content">
              <h3 class="kpi-title">{{ item.title }}</h3>
              <div class="kpi-value">{{ item.total }}</div>
              
              <div v-if="item.groupedCurrency" class="currency-summary mb-4">
                <v-chip v-for="(amount, code) in item.groupedCurrency" :key="code" class="mr-2 mb-1" x-small label outlined color="primary">
                  <strong>{{ code }}</strong>: {{ numberFormatter(amount) }}
                </v-chip>
              </div>

              <div v-if="item.groupedSales && Object.keys(item.groupedSales).length > 0" class="payment-breakdown">
                <div v-for="(payment, key) in item.groupedSales" :key="key" class="payment-item">
                  <div class="d-flex flex-column">
                    <span class="payment-method">{{ payment.paymentName }}</span>
                    <small class="text--secondary font-weight-bold" style="font-size: 0.7rem; color: #94a3b8;">{{ payment.currencyCode }}</small>
                  </div>
                  <span class="payment-amount font-weight-bold">{{ numberFormatter(payment.amount) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="analytics-section">
        <div class="analytics-grid">
          <div class="chart-card chart-card--large">
            <div class="chart-header"><h3>ສິນຄ້າຂາຍດີຕາມໝວດ</h3></div>
            <div class="chart-container"><div ref="topSaleChart" class="echarts-container"></div></div>
          </div>

          <div class="chart-card chart-card--small">
            <div class="chart-header"><h3>Payment Methods (Local Value)</h3></div>
            <div class="chart-container">
              <apexchart type="donut" height="250" :options="options" :series="paymentSeries"></apexchart>
            </div>
          </div>

          <div class="chart-card full-width" v-if="dailyState">
            <div class="chart-header"><h3>Daily Trend (Converted Local)</h3></div>
            <div class="chart-container">
              <apexchart type="line" height="300" :options="barOptionsForDailyStat" :series="barSeriesForDailyStat"></apexchart>
            </div>
          </div>
        </div>
      </section>

      <section class="inventory-section mt-10" v-if="currentSelectedLocation">
        <div class="section-header">
          <h2 class="section-title">Inventory Alerts</h2>
          <p class="section-description">Items with stock lower than minimum requirement</p>
        </div>
        <div class="inventory-container" :key="minstockComponentsKey">
          <MinStockCard />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { firstAndLastDateOfLast6Months, getFormatNum } from '~/common'
import MinStockCard from '~/components/minStockCard'
import MenuOverview from '~/components/menuOverview'
import { mapActions, mapGetters } from 'vuex'
import * as ECharts from 'echarts'

export default {
  components: { MenuOverview, MinStockCard },
  middleware: 'auths',
  data() {
    return {
      terminalDialog: false,
      terminalSelected: null,
      currentDate: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      yearlySale: [],
      isloading: false,
      dailyState: false,
      minstockComponentsKey: 1,
      topSaleChartInstance: null,

      menusOverview: [
        { title: 'ຍອດຂາຍມື້ນິ (Local Total)', icon: 'mdi-calendar-today', total: '0', groupedSales: {}, groupedCurrency: {} },
        { title: `ຍອດຂາຍເດືອນນີ້`, icon: 'mdi-calendar-month', total: '0', groupedSales: {}, groupedCurrency: {} },
        { title: `ຍອດຂາຍ 6 ເດືອນຫຼັງ`, icon: 'mdi-calendar-range', total: '0', groupedSales: {}, groupedCurrency: {} },
      ],

      options: {
        chart: { type: 'donut', height: 250 },
        labels: [],
        legend: { position: 'bottom' },
        colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe']
      },
      barSeriesForDailyStat: [{ name: 'Sales', data: [] }],
      barOptionsForDailyStat: {
        chart: { type: 'line', toolbar: { show: false } },
        stroke: { curve: 'smooth', width: 4 },
        xaxis: { categories: [] },
        yaxis: { labels: { formatter: (val) => Number(val).toLocaleString() } }
      },

      menus: [
        { title: 'POS', svgIcon: require('~/assets/icons/cashier_2.svg'), path: '/pos/minimart' },
        { title: 'Invoice', svgIcon: require('~/assets/icons/invoice.svg'), path: '/admin/ordersFromPos' },
        { title: 'ລູກຫນີ້', svgIcon: require('~/assets/icons/pay-card.svg'), path: '/admin/ordersFromPosCredit' },
        { title: 'Stock', svgIcon: require('~/assets/icons/stock.svg'), path: '/admin/product/productlist' },
        { title: 'Customer', svgIcon: require('~/assets/icons/patient.svg'), path: '/admin/client' },
      ],
    }
  },

  computed: {
    ...mapGetters(['findAllTerminal', 'findAllLocation', 'findAllPayment', 'findAllCurrency', 'currentSelectedLocation']),
    
    // UI Styling logic
    primaryGradient() {
      const theme = this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark : this.$vuetify.theme.themes.light
      return `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
    },
    primaryColor() { return this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.primary : this.$vuetify.theme.themes.light.primary },
    dialogHeaderStyle() { return { background: this.primaryGradient } },
    primaryButtonStyle() { return { background: this.primaryGradient, color: 'white' } },
    kpiIconStyle() { return { background: this.primaryGradient } },
    cardIconStyle() { return { background: this.primaryGradient } },

    paymentSeries() { return this.paymentMethodData.series },
    paymentLabels() { return this.paymentMethodData.labels },
    paymentMethodData() {
      if (!this.yearlySale.length) return { series: [], labels: [] }
      const grouped = this.saleGroupByPayment(this.yearlySale)
      const data = Object.values(grouped);
      return {
        series: data.map(i => Math.round(i.totalSales)), // Total converted local for chart
        labels: data.map(i => `${i.paymentName} (${i.currencyCode})`)
      }
    }
  },

  watch: {
    paymentLabels(newLabels) { this.options = { ...this.options, labels: newLabels } }
  },

  async created() {
    await this.loadSaleStatistic()
  },

  mounted() {
    this.loadTopSale()
    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    ...mapActions(['setSelectedTerminal', 'setSelectedLocation', 'initProduct']),
    navigateTo(path) { this.$router.push(path) },
    numberFormatter(value) { return getFormatNum(Math.round(value)) },
    handleResize() { this.topSaleChartInstance?.resize() },

    // CORE LOGIC: Converts line totals to local currency
    getLineConvertedAmount(line, currencies, headerCcyId) {
      const lineTotal = Number(line.total || 0)
      const targetCcyId = line.currencyId || headerCcyId
      const ccy = currencies.find(c => Number(c.id) === Number(targetCcyId))
      
      if (!ccy || Number(ccy.isLocalCCY) === 1) return lineTotal
      
      const rate = Number(line.exchangeRate || 1)
      return ccy.exchangeDirection === 'foreign_to_local' ? lineTotal * rate : lineTotal / rate
    },

    getConvertedSaleTotal(sale) {
      const currencies = this.findAllCurrency || []
      let total = 0
      if (sale.lines && sale.lines.length > 0) {
        total = sale.lines.reduce((sum, line) => sum + this.getLineConvertedAmount(line, currencies, sale.currencyId), 0)
      } else {
        total = Number(sale.total || 0)
      }

      if (sale.dynamic_customer) {
        total += (Number(sale.dynamic_customer.rider_fee) || 0)
        total -= (Number(sale.dynamic_customer.cod_fee) || 0)
      }
      return total
    },

    getRawCurrencySummary(saleList) {
      const currencies = this.findAllCurrency || []
      return saleList.reduce((acc, sale) => {
        if (sale.lines) {
          sale.lines.forEach(line => {
            const targetId = line.currencyId || sale.currencyId
            const ccy = currencies.find(c => Number(c.id) === Number(targetId))
            const code = ccy ? ccy.code : '???'
            acc[code] = (acc[code] || 0) + Number(line.total || 0)
          })
        }
        return acc
      }, {})
    },

    saleGroupByPayment(saleList) {
      if (!Array.isArray(saleList)) return {}
      const currencies = this.findAllCurrency || []

      return saleList.reduce((acc, sale) => {
        const headerCcy = currencies.find(c => Number(c.id) === Number(sale.currencyId))
        const headerCode = headerCcy ? headerCcy.code : '???'

        // 1. Multi-payment logic (Detailed)
        if (sale.payments && sale.payments.length > 0) {
          sale.payments.forEach((p) => {
            const pmDetails = this.findAllPayment.find(pm => pm.id === p.paymentId)
            const pName = pmDetails?.payment_name || 'Other'
            const pCcy = currencies.find(c => Number(c.id) === Number(p.currencyId || sale.currencyId))
            const pCode = pCcy ? pCcy.code : headerCode
            const uniqueKey = `${p.paymentId}_${pCode}`

            if (!acc[uniqueKey]) {
              acc[uniqueKey] = { amount: 0, totalSales: 0, paymentName: pName, currencyCode: pCode }
            }
            
            const rawAmt = Number(p.amount || 0)
            acc[uniqueKey].amount += rawAmt
            
            // Calculate converted local value for main KPI cards
            let converted = rawAmt
            if (pCcy && Number(pCcy.isLocalCCY) !== 1) {
              const rate = Number(p.exchangeRate || 1)
              converted = pCcy.exchangeDirection === 'foreign_to_local' ? rawAmt * rate : rawAmt / rate
            }
            acc[uniqueKey].totalSales += converted
          })
        } 
        // 2. Fallback for single payment old data
        else {
          const pName = sale.payment?.payment_name || 'Cash'
          const uniqueKey = `old_${headerCode}`
          if (!acc[uniqueKey]) {
            acc[uniqueKey] = { amount: 0, totalSales: 0, paymentName: pName, currencyCode: headerCode }
          }
          acc[uniqueKey].amount += Number(sale.total || 0)
          acc[uniqueKey].totalSales += this.getConvertedSaleTotal(sale)
        }
        return acc
      }, {})
    },

    async loadSaleStatistic() {
      const dateRange = firstAndLastDateOfLast6Months()
      const todayStr = new Date().toISOString().split('T')[0]
      this.isloading = true
      try {
        const res = await this.$axios.get('api/sale/sumsaleYearly', {
          params: { date: dateRange, locationId: this.currentSelectedLocation?.id }
        })
        this.yearlySale = res.data
        
        const monthFilter = todayStr.split('-')[1]
        const periods = [
          { key: 0, list: this.yearlySale.filter(el => el.bookingDate === todayStr) },
          { key: 1, list: this.yearlySale.filter(el => el.bookingDate.split('-')[1] === monthFilter) },
          { key: 2, list: this.yearlySale }
        ]

        periods.forEach(p => {
          const grouped = this.saleGroupByPayment(p.list)
          const totalConverted = Object.values(grouped).reduce((s, i) => s + i.totalSales, 0)
          this.menusOverview[p.key].total = getFormatNum(Math.round(totalConverted))
          this.menusOverview[p.key].groupedSales = grouped
          this.menusOverview[p.key].groupedCurrency = this.getRawCurrencySummary(p.list)
        })
        this.generateDailyStatisticSale()
        this.monthGroupSale()
      } catch (err) { console.error(err) } finally { this.isloading = false }
    },

    generateDailyStatisticSale() {
      const dailyMap = {}
      const monthStr = new Date().toISOString().split('-')[1]
      this.yearlySale.filter(el => el.bookingDate.split('-')[1] === monthStr).forEach(sale => {
        const d = sale.bookingDate
        dailyMap[d] = (dailyMap[d] || 0) + this.getConvertedSaleTotal(sale)
      })
      const dates = Object.keys(dailyMap).sort()
      this.barSeriesForDailyStat = [{ name: 'Total Local', data: dates.map(d => Math.round(dailyMap[d])) }]
      this.barOptionsForDailyStat = { ...this.barOptionsForDailyStat, xaxis: { categories: dates } }
      this.dailyState = true
    },

    monthGroupSale() {
      let grouped = {}
      this.yearlySale.forEach((sale) => {
        const date = new Date(sale.bookingDate)
        const key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`
        grouped[key] = (grouped[key] || 0) + this.getConvertedSaleTotal(sale)
      })
      const keys = Object.keys(grouped).sort()
      this.barSeriesForMonthlyStat = [{ name: 'Monthly Local', data: keys.map(k => Math.round(grouped[k])) }]
      this.barOptionsForMonthlyStat = { ...this.barOptionsForMonthlyStat, xaxis: { categories: keys } }
    },

    async chooseTerminal() {
      const term = this.findAllTerminal.find(t => t.id === this.terminalSelected)
      const loc = this.findAllLocation.find(l => l.id === term.locationId)
      if (loc) {
        this.setSelectedLocation(loc)
        this.terminalDialog = false
        this.minstockComponentsKey++
        await this.loadProduct(loc.id)
        await this.loadSaleStatistic()
        await this.loadTopSale()
      }
    },

    async loadProduct(locationId) {
      this.isloading = true
      try {
        const res = await this.$axios.get(`product_f/${locationId}`)
        this.initProduct(res.data.data)
      } catch (er) { console.log(er) }
      this.isloading = false
    },

    async loadTopSale() {
      try {
        const res = await this.$axios.get('api/topsaleMinimart/?top=5')
        if(!this.$refs.topSaleChart) return
        if (this.topSaleChartInstance) this.topSaleChartInstance.dispose()
        this.topSaleChartInstance = ECharts.init(this.$refs.topSaleChart)
        const data = res.data.map(el => ({ name: el.categ_name, value: +el.sale_count }))
        this.topSaleChartInstance.setOption({
          tooltip: { trigger: 'item' },
          legend: { orient: 'horizontal', bottom: '0%' },
          series: [{ type: 'pie', radius: ['40%', '70%'], itemStyle: { borderRadius: 10 }, data }]
        })
      } catch (e) { console.error(e) }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

.dashboard-container { max-width: 1440px; margin: 0 auto; padding: 20px; font-family: 'Inter', 'Noto Sans Lao', sans-serif; background: #f8fafc; }
.dashboard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
.dashboard-title { font-size: 2.2rem; font-weight: 700; color: #1e293b; }
.dashboard-subtitle { color: #64748b; }
.date-display { background: white; padding: 10px 20px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); color: #64748b; font-weight: 500; }

.quick-actions-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px; }
.action-card { background: white; padding: 24px; border-radius: 16px; cursor: pointer; transition: all 0.3s ease; border: 1px solid #e2e8f0; position: relative; overflow: hidden; }
.action-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.card-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.card-icon img { width: 24px; filter: brightness(0) invert(1); }

.kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-bottom: 40px; }
.kpi-card { background: white; padding: 24px; border-radius: 16px; border: 1px solid #e2e8f0; position: relative; }
.kpi-header { display: flex; justify-content: space-between; margin-bottom: 16px; }
.kpi-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.kpi-value { font-size: 1.8rem; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
.kpi-title { font-size: 0.9rem; color: #64748b; margin-bottom: 12px; }

.currency-summary { display: flex; flex-wrap: wrap; gap: 6px; }
.payment-breakdown { margin-top: 16px; padding-top: 16px; border-top: 1px dashed #e2e8f0; }
.payment-item { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; color: #475569; }

.analytics-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }
.chart-card { background: white; border-radius: 16px; border: 1px solid #e2e8f0; padding: 20px; grid-column: span 6; }
.chart-card.chart-card--large { grid-column: span 8; }
.chart-card.chart-card--small { grid-column: span 4; }
.chart-card.full-width { grid-column: span 12; }
.chart-header { margin-bottom: 20px; font-weight: 600; color: #1e293b; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
.echarts-container { width: 100%; height: 350px; }

.loading-container { display: flex; flex-direction: column; align-items: center; padding: 30px; background: white; border-radius: 12px; }
.loading-spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #6366f1; border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

.terminal-option { display: flex; align-items: center; padding: 16px; border: 2px solid #f1f5f9; border-radius: 12px; margin-bottom: 12px; cursor: pointer; transition: 0.2s; }
.terminal-option:hover { border-color: #6366f1; }
.terminal-option.selected { border-color: #6366f1; background: #f5f3ff; }
.terminal-info h4 { margin: 0; color: #1e293b; }
.terminal-info p { margin: 0; font-size: 0.8rem; color: #64748b; }
.hidden { display: none; }
</style>