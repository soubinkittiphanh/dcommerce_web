<template>
  <div class="pl-report-container">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <v-card color="primary" dark rounded="xl">
        <v-card-text class="text-center pa-6">
          <v-progress-circular :size="50" :width="5" color="white" indeterminate class="mb-3" />
          <div class="text-h6 font-weight-bold">ກຳລັງປະມວນຜົນ...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-card class="report-main-card" outlined rounded="lg">
      <v-card-title class="pa-4 d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-chart-box-outline</v-icon>
          <span class="text-h6 font-weight-black primary--text">ລາຍງານ ກຳໄລ - ຂາດທຶນ (P&L)</span>
        </div>
        
        <div class="d-flex align-center flex-wrap gap-2">
          <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ" prepend-inner-icon="mdi-calendar" readonly 
                v-bind="attrs" v-on="on" outlined dense hide-details class="custom-input compact-width"></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false" color="primary"></v-date-picker>
          </v-menu>

          <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ" prepend-inner-icon="mdi-calendar" readonly 
                v-bind="attrs" v-on="on" outlined dense hide-details class="custom-input compact-width"></v-text-field>
            </template>
            <v-date-picker v-model="date2" no-title @input="menu2 = false" color="primary"></v-date-picker>
          </v-menu>

          <v-btn color="primary" depressed class="action-btn px-6" @click="loadTxn" :loading="isloading">
            <v-icon left small>mdi-refresh</v-icon>ດຶງລາຍງານ
          </v-btn>
        </div>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-6 grey lighten-5">
        <v-row dense>
          <!-- Financial Breakdown Summary -->
          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" color="white">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption grey--text font-weight-bold">ລາຍຮັບລວມ (Revenue)</span>
                <v-icon color="success" small>mdi-arrow-up-bold-circle</v-icon>
              </div>
              <div class="text-h6 font-weight-black success--text">{{ formatAmount(totalIncome) }}</div>
              <div class="text-tiny grey--text mt-1">ລວມຍອດຂາຍ ແລະ ລາຍຮັບອື່ນໆ</div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" color="white">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption orange--text text--darken-2 font-weight-bold">ຕົ້ນທຶນຂາຍ (COGS)</span>
                <v-icon color="orange darken-2" small>mdi-package-variant</v-icon>
              </div>
              <div class="text-h6 font-weight-black orange--text text--darken-2">{{ formatAmount(totalCostOfSale) }}</div>
              <div class="text-tiny grey--text mt-1">ຕົ້ນທຶນສິນຄ້າ + ຄ່າທຳນຽມຕ່າງໆ</div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" color="white">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption error--text font-weight-bold">ລາຍຈ່າຍບໍລິຫານ (OPEX)</span>
                <v-icon color="error" small>mdi-cash-minus</v-icon>
              </div>
              <div class="text-h6 font-weight-black error--text">{{ formatAmount(operatingExpensesOnly) }}</div>
              <div class="text-tiny grey--text mt-1">ຄ່າໃຊ້ຈ່າຍທົ່ວໄປ ແລະ ບໍລິຫານ</div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" :color="profit >= 0 ? 'primary' : 'warning'" dark>
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption font-weight-bold opacity-80">{{ profit >= 0 ? 'ກຳໄລສຸດທິ (Net Profit)' : 'ຂາດທຶນສຸດທິ (Net Loss)' }}</span>
                <v-icon color="white" small>{{ profit >= 0 ? 'mdi-trophy' : 'mdi-alert-circle' }}</v-icon>
              </div>
              <div class="text-h5 font-weight-black">{{ formatAmount(profit) }}</div>
              <div class="text-tiny opacity-70 mt-1">ຜົນໄດ້ຮັບຫຼັງຈາກຫັກລາຍຈ່າຍທັງໝົດ</div>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-4">
          <!-- Main Chart -->
          <v-col cols="12" md="8">
            <v-card class="pa-4 chart-container rounded-lg h-100" flat outlined>
              <div class="d-flex align-center mb-6">
                <v-icon left color="primary" small>mdi-chart-donut</v-icon>
                <span class="text-subtitle-1 font-weight-bold primary--text">ວິເຄາະສັດສ່ວນ ລາຍຮັບ - ລາຍຈ່າຍ</span>
              </div>
              <div ref="plchart" style="width: 100%; height: 400px"></div>
            </v-card>
          </v-col>

          <!-- Quick Analysis Table -->
          <v-col cols="12" md="4">
            <v-card class="pa-4 rounded-lg h-100" flat outlined>
              <div class="d-flex align-center mb-4">
                <v-icon left color="primary" small>mdi-list-status</v-icon>
                <span class="text-subtitle-1 font-weight-bold primary--text">ສະຫຼຸບຕົວເລກ</span>
              </div>
              
              <div class="analysis-list">
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom">
                  <span class="grey--text">ຍອດຂາຍລວມ (Gross Sales)</span>
                  <span class="font-weight-bold">{{ formatAmount(grandSaleTotal) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ສ່ວນຫຼຸດ (Discount)</span>
                  <span>{{ formatAmount(grandSaleDiscountTotal) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຍົກເລີກ/ສົ່ງຄືນ (Return/Cancel)</span>
                  <span>{{ formatAmount(grandSaleCancelTotal) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom">
                  <span class="grey--text font-weight-bold">ຍອດຂາຍສຸດທິ (Net Sales)</span>
                  <span class="font-weight-bold">{{ formatAmount(totalSale) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom">
                  <span class="grey--text">ລາຍຮັບອື່ນໆ (Other Income)</span>
                  <span class="font-weight-bold">{{ formatAmount(totalIncome - totalSale) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom primary lighten-5 px-2 rounded mt-2">
                  <span class="primary--text font-weight-bold">ລາຍຮັບລວມ (A)</span>
                  <span class="primary--text font-weight-bold">{{ formatAmount(totalIncome) }}</span>
                </div>
                
                <div class="mt-4 text-caption font-weight-bold orange--text">ລາຍລະອຽດຕົ້ນທຶນ (COGS Breakdown)</div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຕົ້ນທຶນສິນຄ້າ (Product Cost)</span>
                  <span>{{ formatAmount(productCostOnly) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຄ່າທຳນຽມ COD (COD Fee)</span>
                  <span>{{ formatAmount(totalCODFee) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຄ່າທຳນຽມຍົກເລີກ (Cancel Fee)</span>
                  <span>{{ formatAmount(totalCancelFee) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom orange lighten-5 px-2 rounded mt-1">
                  <span class="orange--text text--darken-3 font-weight-bold">ຕົ້ນທຶນຂາຍລວມ</span>
                  <span class="orange--text text--darken-3 font-weight-bold">{{ formatAmount(totalCostOfSale) }}</span>
                </div>

                <div class="analysis-item d-flex justify-space-between py-2 mt-4 border-bottom">
                  <span class="grey--text">ລາຍຈ່າຍບໍລິຫານ (OPEX)</span>
                  <span class="font-weight-bold error--text">{{ formatAmount(operatingExpensesOnly) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom error lighten-5 px-2 rounded mt-1">
                  <span class="error--text font-weight-bold">ລາຍຈ່າຍລວມ (B)</span>
                  <span class="error--text font-weight-bold">{{ formatAmount(totalExpense) }}</span>
                </div>

                <v-divider class="my-4"></v-divider>
                
                <div class="d-flex justify-space-between align-center pa-3 rounded-lg" :class="profit >= 0 ? 'success' : 'error'" dark>
                  <span class="text-subtitle-2 font-weight-bold">ກຳໄລສຸດທິ (A - B)</span>
                  <span class="text-h6 font-weight-black">{{ formatAmount(profit) }}</span>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import * as ECharts from 'echarts'
import { mapGetters } from 'vuex'
import { swalError2, getFirstDayOfMonth, getFormatNum } from '~/common'

export default {
  name: 'ProfitLossReport',
  mounted() { this.loadTxn() },
  watch: {
    date() { this.dateFormatted = this.formatDate(this.date); this.loadTxn() },
    date2() { this.dateFormatted2 = this.formatDate(this.date2); this.loadTxn() },
    currentSelectedLocation: {
      handler() {
        this.loadTxn()
      },
      deep: true
    }
  },
  data() {
    return {
      isloading: false,
      expenseList: [],
      incomeList: [],
      yearlySale: [],
      menu1: false,
      menu2: false,
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
      dateFormatted2: this.formatDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)),
    }
  },
  computed: {
    ...mapGetters(['currentSelectedLocation']),
    grandSaleTotal() {
      // ✅ Normalize to LAK: (total + discount) * exchangeRate for active, total * rate for inactive
      return this.yearlySale.reduce((total, item) => {
        const rate = item.exchangeRate || 1
        const itemTotal = parseFloat(item.total || 0)
        const itemDiscount = parseFloat(item.discount || 0)
        
        // Guard against corrupted/astronomical values
        if (Math.abs(itemTotal) > 1e12 || Math.abs(itemDiscount) > 1e12) {
          return total;
        }

        const grossAmount = item.isActive !== false ? (itemTotal + itemDiscount) : itemTotal
        return total + (grossAmount * rate)
      }, 0)
    },
    grandSaleDiscountTotal() {
      // ✅ Normalize to LAK: discount * exchangeRate
      return this.yearlySale.filter(el => el.isActive === true).reduce((total, item) => {
        const rate = item.exchangeRate || 1
        const itemDiscount = parseFloat(item.discount || 0)

        // Guard against corrupted/astronomical values
        if (Math.abs(itemDiscount) > 1e12) {
          return total;
        }

        return total + (itemDiscount * rate)
      }, 0)
    },
    grandSaleCancelTotal() {
      // ✅ Normalize to LAK: total * exchangeRate
      return this.yearlySale.filter(el => el.isActive === false).reduce((total, item) => {
        const rate = item.exchangeRate || 1
        const itemTotal = parseFloat(item.total || 0)

        // Guard against corrupted/astronomical values
        if (Math.abs(itemTotal) > 1e12) {
          return total;
        }

        // Cancelled/returned sales should be represented as positive amounts in the summary list
        return total + (Math.abs(itemTotal) * rate)
      }, 0)
    },
    totalSale() {
      return this.grandSaleTotal - (this.grandSaleCancelTotal + this.grandSaleDiscountTotal)
    },
    totalIncome() {
      const otherIncome = this.incomeList.filter(i => i.isActive !== false).reduce((acc, i) => acc + i.totalAmount * i.rate, 0)
      return otherIncome + this.totalSale
    },
    productCostOnly() {
      let totalCost = 0;
      this.yearlySale.filter(sale => sale.isActive === true).forEach(sale => {
        let saleCost = 0;
        const saleRate = sale.exchangeRate || 1;
        
        sale.lines?.forEach(line => {
          const sellingPriceLAK = parseFloat(line.product?.pro_price || 0) * saleRate;
          
          line.cards?.forEach(card => {
            let cardCost = 0;
            const cardRate = card.exchangeRate || 1;
            
            if (card.costLCY !== undefined && card.costLCY !== null) {
              cardCost = parseFloat(card.costLCY);
            } else {
              cardCost = parseFloat(card.cost || 0) * cardRate;
            }
            
            // ✅ Smart Currency Correction
            if (sellingPriceLAK > 0 && cardCost > sellingPriceLAK * 1.5 && cardRate > 10) {
              cardCost = parseFloat(card.cost || 0);
            }
            
            // Guard against corrupted cost values
            if (Math.abs(cardCost) < 1e12) {
              saleCost += cardCost;
            }
          });
        });
        totalCost += saleCost;
      });
      return totalCost;
    },
    totalCODFee() {
      return this.yearlySale.filter(i => i.isActive === true).reduce((acc, i) => {
        const fee = (i.dynamic_customer?.cod_fee || 0) * (i.exchangeRate || 1)
        return acc + fee
      }, 0)
    },
    totalCancelFee() {
      return this.yearlySale.filter(i => i.isActive === false).reduce((acc, i) => {
        const fee = (i.dynamic_customer?.cancel_fee || 0) * (i.exchangeRate || 1)
        return acc + fee
      }, 0)
    },
    totalCostOfSale() {
      return this.productCostOnly + this.totalCODFee + this.totalCancelFee
    },
    operatingExpensesOnly() {
      return this.expenseList.filter(i => i.isActive !== false).reduce((acc, i) => acc + i.totalAmount * i.rate, 0)
    },
    totalExpense() { return this.operatingExpensesOnly + this.totalCostOfSale },
    profit() { return this.totalIncome - this.totalExpense }
  },
  methods: {
    formatAmount(v) { return getFormatNum(v) },
    formatDate(d) { if (!d) return null; const [y, m, d_] = this.formatDateToISO(d).split('-'); return `${m}/${d_}/${y}` },
    formatDateToISO(d) { if (!(d instanceof Date)) d = new Date(d); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` },
    async loadTxn() {
      this.isloading = true
      try {
        await this.loadSaleStatistic()
        const params = { date: { startDate: this.date, endDate: this.date2 }, locationId: this.currentSelectedLocation?.id }
        const [inc, exp] = await Promise.all([
          this.$axios.get('/api/finanicial/ar/header/findByDate', { params }),
          this.$axios.get('/api/finanicial/ap/header/findByDate', { params })
        ])
        this.incomeList = inc.data; this.expenseList = exp.data
        this.$nextTick(() => { this.renderChart() })
      } catch (e) { swalError2(this.$swal, 'Error', 'Load failed: ' + e) } finally { this.isloading = false }
    },
    async loadSaleStatistic() {
      // Corrected: includeCards should be a top-level parameter for the API
      const params = { 
        date: { startDate: this.date, endDate: this.date2 }, 
        locationId: this.currentSelectedLocation?.id,
        includeCards: true 
      }
      try { 
        // Using findDetailByDate for maximum consistency with the saleCost report
        const res = await this.$axios.get('api/sale/findDetailByDate', { params })
        this.yearlySale = res.data 
      } catch (e) { console.error('Sale stat load error', e) }
    },
    renderChart() {
      const dom = this.$refs.plchart; if (!dom) return
      const chart = ECharts.init(dom)
      const opt = {
        tooltip: { trigger: 'item', backgroundColor: '#fff', textStyle: { color: '#333' } },
        legend: { bottom: '0%', left: 'center', textStyle: { fontFamily: 'noto sans lao' } },
        color: ['#4caf50', '#ff9800', '#f44336', '#1976d2'],
        series: [{
          name: 'P&L Breakdown', type: 'pie', radius: ['40%', '70%'], center: ['50%', '55%'], startAngle: 180, avoidLabelOverlap: false,
          itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 2 },
          label: { show: true, formatter: '{b}\n{d}%', fontFamily: 'noto sans lao', fontWeight: 'bold' },
          data: [
            { value: this.totalSale, name: 'ຍອດຂາຍ' },
            { value: this.totalCostOfSale, name: 'ຕົ້ນທຶນຂາຍ' },
            { value: this.operatingExpensesOnly, name: 'ລາຍຈ່າຍບໍລິຫານ' },
            { value: Math.max(0, this.profit), name: 'ກຳໄລ' },
            { value: this.totalExpense + this.totalIncome + Math.abs(this.profit), itemStyle: { color: 'none', decal: { symbol: 'none' } }, label: { show: false } }
          ]
        }]
      }
      chart.setOption(opt); window.addEventListener('resize', chart.resize)
    }
  }
}
</script>

<style scoped>
.pl-report-container { font-family: 'noto sans lao', sans-serif !important; background-color: #fafafa; padding: 12px; }
.pl-report-container * { font-family: 'noto sans lao', sans-serif !important; }
.report-main-card { border-radius: 12px; background: white; }
.custom-input>>>fieldset { border-color: #eee !important; }
.compact-width { max-width: 160px; }
.stat-box { border: 1px solid #f0f0f0; transition: all 0.2s; }
.stat-box:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.action-btn { text-transform: none; font-weight: 700; border-radius: 8px; }
.border-bottom { border-bottom: 1px solid #f5f5f5; }
.text-tiny { font-size: 0.65rem; }
.opacity-80 { opacity: 0.8; }
.opacity-70 { opacity: 0.7; }
</style>