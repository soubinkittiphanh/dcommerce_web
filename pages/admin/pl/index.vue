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
              <div class="text-h6 font-weight-black success--text">{{ formatAmount(totalIncome) }} {{ localCurrencyCode }}</div>
              <div class="text-tiny grey--text mt-1">ລວມຍອດຂາຍ ແລະ ລາຍຮັບອື່ນໆ</div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" color="white">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption orange--text text--darken-2 font-weight-bold">ຕົ້ນທຶນຂາຍ (COGS)</span>
                <v-icon color="orange darken-2" small>mdi-package-variant</v-icon>
              </div>
              <div class="text-h6 font-weight-black orange--text text--darken-2">{{ formatAmount(totalCostOfSale) }} {{ localCurrencyCode }}</div>
              <div class="text-tiny grey--text mt-1">ຕົ້ນທຶນສິນຄ້າ + ຄ່າທຳນຽມຕ່າງໆ</div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" color="white">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption error--text font-weight-bold">ລາຍຈ່າຍບໍລິຫານ (OPEX)</span>
                <v-icon color="error" small>mdi-cash-minus</v-icon>
              </div>
              <div class="text-h6 font-weight-black error--text">{{ formatAmount(operatingExpensesOnly) }} {{ localCurrencyCode }}</div>
              <div class="text-tiny grey--text mt-1">ຄ່າໃຊ້ຈ່າຍທົ່ວໄປ ແລະ ບໍລິຫານ</div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" :color="profit >= 0 ? 'primary' : 'warning'" dark>
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption font-weight-bold opacity-80">{{ profit >= 0 ? 'ກຳໄລສຸດທິ (Net Profit)' : 'ຂາດທຶນສຸດທິ (Net Loss)' }}</span>
                <v-icon color="white" small>{{ profit >= 0 ? 'mdi-trophy' : 'mdi-alert-circle' }}</v-icon>
              </div>
              <div class="text-h5 font-weight-black">{{ formatAmount(profit) }} {{ localCurrencyCode }}</div>
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
                  <span class="font-weight-bold">{{ formatAmount(grandSaleTotal) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ສ່ວນຫຼຸດ (Discount)</span>
                  <span>{{ formatAmount(grandSaleDiscountTotal) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຍົກເລີກ/ສົ່ງຄືນ (Return/Cancel)</span>
                  <span>{{ formatAmount(grandSaleCancelTotal) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom">
                  <span class="grey--text font-weight-bold">ຍອດຂາຍສຸດທິ (Net Sales)</span>
                  <span class="font-weight-bold">{{ formatAmount(totalSale) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ລາຍຮັບອື່ນໆ (AR Income)</span>
                  <span>{{ formatAmount(totalFinancialIncome) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ໃບຮັບເງິນ (AR Receive)</span>
                  <span>{{ formatAmount(totalArReceiveAmount) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom">
                  <span class="grey--text font-weight-bold">ລາຍຮັບອື່ນໆລວມ (Other Income)</span>
                  <span class="font-weight-bold success--text">{{ formatAmount(totalOtherIncome) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom primary lighten-5 px-2 rounded mt-2">
                  <span class="primary--text font-weight-bold">ລາຍຮັບລວມ (A)</span>
                  <span class="primary--text font-weight-bold">{{ formatAmount(totalIncome) }} {{ localCurrencyCode }}</span>
                </div>
                
                <div class="mt-4 text-caption font-weight-bold orange--text">ລາຍລະອຽດຕົ້ນທຶນ (COGS Breakdown)</div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຕົ້ນທຶນສິນຄ້າ (Product Cost)</span>
                  <span>{{ formatAmount(productCostOnly) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຄ່າທຳນຽມ COD (COD Fee)</span>
                  <span>{{ formatAmount(totalCODFee) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຄ່າທຳນຽມຍົກເລີກ (Cancel Fee)</span>
                  <span>{{ formatAmount(totalCancelFee) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom orange lighten-5 px-2 rounded mt-1">
                  <span class="orange--text text--darken-3 font-weight-bold">ຕົ້ນທຶນຂາຍລວມ</span>
                  <span class="orange--text text--darken-3 font-weight-bold">{{ formatAmount(totalCostOfSale) }} {{ localCurrencyCode }}</span>
                </div>

                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom mt-4">
                  <span class="grey--text pl-2">- ລາຍຈ່າຍທົ່ວໄປ (AP Expense)</span>
                  <span>{{ formatAmount(totalFinancialExpense) }} {{ localCurrencyCode }}</span>
                </div>
                <div v-if="showApSettlement" class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຊຳລະໃບແຈ້ງໜີ້ (AP Settlement)</span>
                  <span>{{ formatAmount(totalApSettlementAmount) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom">
                  <span class="grey--text font-weight-bold">ລາຍຈ່າຍບໍລິຫານລວມ (OPEX)</span>
                  <span class="font-weight-bold error--text">{{ formatAmount(operatingExpensesOnly) }} {{ localCurrencyCode }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom error lighten-5 px-2 rounded mt-1">
                  <span class="error--text font-weight-bold">ລາຍຈ່າຍລວມທັງໝົດ (B: COGS + OPEX)</span>
                  <span class="error--text font-weight-bold">{{ formatAmount(totalExpense) }} {{ localCurrencyCode }}</span>
                </div>

                <v-divider class="my-4"></v-divider>
                
                <div class="d-flex justify-space-between align-center pa-3 rounded-lg" :class="profit >= 0 ? 'success' : 'error'" dark>
                  <span class="text-subtitle-2 font-weight-bold">ກຳໄລສຸດທິ (A - B)</span>
                  <span class="text-h6 font-weight-black">{{ formatAmount(profit) }} {{ localCurrencyCode }}</span>
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
      arReceiveList: [],
      apSettlementList: [],
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
    ...mapGetters(['currentSelectedLocation', 'findAllCurrency', 'findLocalCurrency', 'findSPF']),
    getSPF() {
      return this.findSPF || this.$store.getters.findSPF || []
    },
    showApSettlement() {
      const spf = (this.getSPF || []).find(
        (s) => s.code === 'AC_AP_SETTLEMENT_PL' || s.code === 'PL_AP_SETTLEMENT' || s.code === 'AC_AP_SETTLEMENT'
      )
      if (!spf) return false
      if (spf.isActive === false || spf.isActive === 0) return false
      if (spf.value !== undefined && spf.value !== null && String(spf.value).trim() !== '') {
        const val = String(spf.value).trim().toUpperCase()
        return val === 'Y' || val === 'YES' || val === 'TRUE' || val === '1'
      }
      return spf.isActive === true || spf.isActive === 1
    },
    localCurrencyCode() {
      return this.findLocalCurrency?.code || 'LAK'
    },
    grandSaleTotal() {
      return this.yearlySale.reduce((total, item) => {
        const itemTotal = parseFloat(item.total || 0)
        const itemDiscount = parseFloat(item.discount || 0)
        
        // Guard against corrupted/astronomical values
        if (Math.abs(itemTotal) > 1e12 || Math.abs(itemDiscount) > 1e12) {
          return total;
        }

        const grossAmount = item.isActive !== false ? (itemTotal + itemDiscount) : itemTotal
        const converted = this.convertToHomeCurrency(grossAmount, item.currencyId, item.exchangeRate)
        return total + converted
      }, 0)
    },
    grandSaleDiscountTotal() {
      return this.yearlySale.filter(el => el.isActive === true).reduce((total, item) => {
        const itemDiscount = parseFloat(item.discount || 0)

        // Guard against corrupted/astronomical values
        if (Math.abs(itemDiscount) > 1e12) {
          return total;
        }

        const converted = this.convertToHomeCurrency(itemDiscount, item.currencyId, item.exchangeRate)
        return total + converted
      }, 0)
    },
    grandSaleCancelTotal() {
      return this.yearlySale.filter(el => el.isActive === false).reduce((total, item) => {
        const itemTotal = parseFloat(item.total || 0)

        // Guard against corrupted/astronomical values
        if (Math.abs(itemTotal) > 1e12) {
          return total;
        }

        const converted = this.convertToHomeCurrency(Math.abs(itemTotal), item.currencyId, item.exchangeRate)
        return total + converted
      }, 0)
    },
    totalSale() {
      return this.grandSaleTotal - (this.grandSaleCancelTotal + this.grandSaleDiscountTotal)
    },
    totalFinancialIncome() {
      return this.incomeList.filter(i => i.isActive !== false).reduce((acc, i) => acc + this.convertToHomeCurrency(i.totalAmount, i.currencyId, i.rate), 0)
    },
    activeArReceiveList() {
      const fromDate = this.date ? new Date(this.date) : null
      const toDate = this.date2 ? new Date(this.date2) : null

      return (this.arReceiveList || []).filter(receipt => {
        if (receipt.status === 'cancelled' || receipt.status === 'voided') return false
        const dStr = receipt.receivedDate || receipt.bookingDate || receipt.createdAt
        if (!dStr) return true
        const d = new Date(dStr.substr(0, 10))
        if (fromDate && d < fromDate) return false
        if (toDate && d > toDate) return false
        return true
      })
    },
    totalArReceiveAmount() {
      return this.activeArReceiveList.reduce((sum, r) => {
        const amt = parseFloat(r.totalReceivedAmount || 0)
        const rate = parseFloat(r.exchangeRate || r.rate || 1)
        return sum + this.convertToHomeCurrency(amt, r.currencyId, rate)
      }, 0)
    },
    totalOtherIncome() {
      return this.totalFinancialIncome + this.totalArReceiveAmount
    },
    totalIncome() {
      return this.totalSale + this.totalOtherIncome
    },
    productCostOnly() {
      let totalCostLAK = 0;
      const localCurrency = this.findLocalCurrency;

      this.yearlySale.filter(sale => sale.isActive === true).forEach(sale => {
        let saleCost = 0;
        const saleRate = sale.exchangeRate || 1;
        
        sale.lines?.forEach(line => {
          const sellingPriceLAK = parseFloat(line.product?.pro_price || 0) * saleRate;
          let lineCost = 0;
          
          if (line.cards && line.cards.length > 0) {
            line.cards.forEach(card => {
              let cardCost = 0;
              const cardRate = card.exchangeRate || 1;
              
              const isForeign = card.currencyId && Number(card.currencyId) !== 1;
              const hasValidLcy = card.costLCY !== undefined && card.costLCY !== null && parseFloat(card.costLCY) > 0 &&
                                  (!isForeign || parseFloat(card.costLCY) > parseFloat(card.cost || 0));

              if (hasValidLcy) {
                cardCost = parseFloat(card.costLCY);
              } else {
                let effectiveRate = cardRate;
                let direction = 'foreign_to_local';
                
                if (effectiveRate === 1 && isForeign) {
                  const dbCurr = this.findAllCurrency?.find(c => c.id === card.currencyId);
                  if (dbCurr && dbCurr.rate) {
                    effectiveRate = parseFloat(dbCurr.rate);
                    direction = dbCurr.exchangeDirection || 'foreign_to_local';
                  }
                }
                
                if (direction === 'local_to_foreign') {
                  cardCost = parseFloat(card.cost || 0) / (effectiveRate || 1);
                } else {
                  cardCost = parseFloat(card.cost || 0) * effectiveRate;
                }
              }
              
              // ✅ Smart Currency Correction
              if (sellingPriceLAK > 0 && cardCost > sellingPriceLAK * 1.5 && cardRate > 10) {
                cardCost = parseFloat(card.cost || 0);
              }
              
              // Guard against corrupted cost values
              if (Math.abs(cardCost) < 1e12) {
                lineCost += cardCost;
              }
            });
          } else {
            // Fallback: Use product cost_price if there are no cards
            const unitCost = parseFloat(line.product?.cost_price || 0);
            const qty = parseFloat(line.quantity || 0);
            lineCost = qty * unitCost * saleRate;
          }
          saleCost += lineCost;
        });
        totalCostLAK += saleCost;
      });

      // Now convert totalCostLAK to the current home currency
      if (!localCurrency || localCurrency.code === 'LAK') {
        return totalCostLAK;
      }
      if (localCurrency.exchangeDirection === 'local_to_foreign') {
        return totalCostLAK * (localCurrency.rate || 1);
      } else {
        return totalCostLAK / (localCurrency.rate || 1);
      }
    },
    totalCODFee() {
      return this.yearlySale.filter(i => i.isActive === true).reduce((acc, i) => {
        const fee = this.convertToHomeCurrency(i.dynamic_customer?.cod_fee || 0, i.currencyId, i.exchangeRate)
        return acc + fee
      }, 0)
    },
    totalCancelFee() {
      return this.yearlySale.filter(i => i.isActive === false).reduce((acc, i) => {
        const fee = this.convertToHomeCurrency(i.dynamic_customer?.cancel_fee || 0, i.currencyId, i.exchangeRate)
        return acc + fee
      }, 0)
    },
    totalCostOfSale() {
      return this.productCostOnly + this.totalCODFee + this.totalCancelFee
    },
    totalFinancialExpense() {
      return this.expenseList.filter(i => i.isActive !== false).reduce((acc, i) => acc + this.convertToHomeCurrency(i.totalAmount, i.currencyId, i.rate), 0)
    },
    activeApSettlementList() {
      const fromDate = this.date ? new Date(this.date) : null
      const toDate = this.date2 ? new Date(this.date2) : null

      return (this.apSettlementList || []).filter(s => {
        if (s.status === 'cancelled') return false
        const dStr = s.settlementDate || s.createdAt
        if (!dStr) return true
        const d = new Date(dStr.substr(0, 10))
        if (fromDate && d < fromDate) return false
        if (toDate && d > toDate) return false
        return true
      })
    },
    totalApSettlementAmount() {
      return this.activeApSettlementList.reduce((sum, s) => {
        const amt = parseFloat(s.paymentAmount || s.baseAmount || 0)
        const rate = parseFloat(s.exchangeRate || 1)
        return sum + this.convertToHomeCurrency(amt, s.currencyId, rate)
      }, 0)
    },
    operatingExpensesOnly() {
      return this.totalFinancialExpense + (this.showApSettlement ? this.totalApSettlementAmount : 0)
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
        if (!this.findAllCurrency || this.findAllCurrency.length === 0) {
          try {
            const response = await this.$axios.get('api/currency/findAll')
            let data = response.data?.data ?? response.data
            if (Array.isArray(data)) {
                data = data.filter(c => c.isActive === true || c.isActive === 1)
            }
            await this.$store.dispatch('initCurrency', data)
          } catch (error) {
            console.error('Failed to load currencies in PL summary screen:', error)
          }
        }
        if (!this.findSPF || this.findSPF.length === 0) {
          try {
            const response = await this.$axios.get('api/SPF/find')
            const spfData = response.data?.data || response.data || []
            await this.$store.dispatch('initSPF', spfData)
          } catch (error) {
            console.error('Failed to load SPF in PL summary screen:', error)
          }
        }
        await this.loadSaleStatistic()
        const params = { date: { startDate: this.date, endDate: this.date2 }, locationId: this.currentSelectedLocation?.id }
        const apParams = { startDate: this.date, endDate: this.date2, limit: 1000, page: 1 }
        const arParams = { bookingDateFrom: this.date, bookingDateTo: this.date2, limit: 1000, page: 1 }

        const [inc, exp, arRec, apSet] = await Promise.all([
          this.$axios.get('/api/finanicial/ar/header/findByDate', { params }).catch(e => { console.warn('AR financial load error:', e); return { data: [] } }),
          this.$axios.get('/api/finanicial/ap/header/findByDate', { params }).catch(e => { console.warn('AP financial load error:', e); return { data: [] } }),
          this.$axios.get('/api/ar-receive-headers', { params: arParams }).catch(e => { console.warn('AR receive load error:', e); return { data: { data: { receiveHeaders: [] } } } }),
          this.showApSettlement
            ? this.$axios.get('/api/ap-invoices-settlement', { params: apParams }).catch(e => { console.warn('AP settlement load error:', e); return { data: { data: { settlements: [] } } } })
            : Promise.resolve({ data: { data: { settlements: [] } } }),
        ])
        this.incomeList = inc.data || []
        this.expenseList = exp.data || []
        this.arReceiveList = arRec.data?.data?.receiveHeaders || arRec.data?.data || arRec.data || []
        this.apSettlementList = apSet.data?.data?.settlements || apSet.data?.data || apSet.data || []
        this.$nextTick(() => { this.renderChart() })
      } catch (e) { swalError2(this.$swal, 'Error', 'Load failed: ' + e) } finally { this.isloading = false }
    },
    convertToHomeCurrency(amount, currencyId, rateFallback = 1) {
      const val = parseFloat(amount || 0);
      if (isNaN(val) || val === 0) return 0;
      
      const localCurrency = this.findLocalCurrency;
      if (!localCurrency) return val * (rateFallback || 1);
      
      const fromCurrency = this.findAllCurrency.find(c => c.id === currencyId);
      
      // Step 1: Convert amount to LAK (base currency of the DB)
      let amountInLAK = val;
      if (fromCurrency) {
        if (fromCurrency.code !== 'LAK') {
          if (fromCurrency.exchangeDirection === 'local_to_foreign') {
            amountInLAK = val / (fromCurrency.rate || 1);
          } else {
            amountInLAK = val * (fromCurrency.rate || 1);
          }
        }
      } else {
        amountInLAK = val * (rateFallback || 1);
      }

      // Step 2: Convert LAK to localCurrency
      if (localCurrency.code === 'LAK') {
        return amountInLAK;
      }
      if (localCurrency.exchangeDirection === 'local_to_foreign') {
        return amountInLAK * (localCurrency.rate || 1);
      } else {
        return amountInLAK / (localCurrency.rate || 1);
      }
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