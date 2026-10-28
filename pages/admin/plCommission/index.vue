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
        <div class="d-flex align-center flex-wrap gap-2">
          <v-icon color="primary" class="mr-2">mdi-chart-box-outline</v-icon>
          <span class="text-h6 font-weight-black primary--text">ລາຍງານ ກຳໄລ - ຂາດທຶນ ຕົວແທນ (Agency P&L - Commission)</span>
          <v-chip small color="deep-purple lighten-5" text-color="deep-purple darken-3" class="font-weight-bold ml-2">
            <v-icon left x-small color="deep-purple darken-3">mdi-handshake</v-icon>
            ຫັກສົ່ງຍອດຂາຍໃຫ້ ບໍລິສັດ KAOLAO
          </v-chip>
        </div>
        
        <div class="d-flex align-center flex-wrap gap-2">
          <!-- Switch to Original Traditional P&L -->
          <v-btn
            outlined
            color="grey darken-2"
            class="action-btn text-none"
            to="/admin/pl"
            exact
            small
          >
            <v-icon left small>mdi-swap-horizontal</v-icon>
            ເບິ່ງ P&L ປົກກະຕິ (Traditional P&L)
          </v-btn>

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

      <!-- Model Concept Banner -->
      <div class="px-6 pt-4 pb-0">
        <v-alert
          dense
          text
          color="deep-purple"
          class="rounded-lg mb-0"
        >
          <div class="d-flex align-center justify-space-between flex-wrap">
            <div class="d-flex align-center">
              <v-icon color="deep-purple" class="mr-2">mdi-information</v-icon>
              <span class="caption deep-purple--text text--darken-3">
                <strong>ຮູບແບບຕົວແທນຂາຍລົດ:</strong> ລາຍຮັບຕົວແທນແມ່ນຄິດໄລ່ຈາກ <strong>ຄ່ານາຍໜ້າ (Commission) ສຸດທິ</strong> ເທົ່ານັ້ນ, ລາຄາຂາຍລົດຫຼັງຫັກຄ່ານາຍໜ້າຕ້ອງ <strong>ສົ່ງຄືນໃຫ້ ບໍລິສັດ KAOLAO</strong>.
              </span>
            </div>
            <span class="caption font-weight-bold deep-purple--text">
              ກຳໄລສຸດທິ = ລາຍຮັບຄ່ານາຍໜ້າ + ລາຍຮັບອື່ນໆ - ລາຍຈ່າຍບໍລິຫານ
            </span>
          </div>
        </v-alert>
      </div>

      <v-card-text class="pa-6 grey lighten-5">
        <v-row dense>
          <!-- Financial Breakdown Summary Cards -->
          <!-- 1. Total Agency Revenue (Commission + Other Income) -->
          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" color="white">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption teal--text text--darken-3 font-weight-bold">ລາຍຮັບຕົວແທນ (Agency Revenue)</span>
                <v-icon color="teal darken-2" small>mdi-cash-multiple</v-icon>
              </div>
              <div class="text-h6 font-weight-black teal--text text--darken-4">{{ formatAmount(totalAgencyRevenue) }} {{ localCurrencyCode }}</div>
              <div class="text-tiny grey--text mt-1">ຄ່ານາຍໜ້າສຸດທິ {{ formatAmount(totalNetCommission) }} + ລາຍຮັບອື່ນໆ</div>
            </v-card>
          </v-col>

          <!-- 2. Remittance Payable to KAOLAO -->
          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" color="white">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption deep-purple--text text--darken-2 font-weight-bold">ຍອດສົ່ງ KAOLAO (Remittance)</span>
                <v-icon color="deep-purple darken-2" small>mdi-bank-transfer-out</v-icon>
              </div>
              <div class="text-h6 font-weight-black deep-purple--text text--darken-3">{{ formatAmount(payableToKaolao) }} {{ localCurrencyCode }}</div>
              <div class="text-tiny grey--text mt-1">ຍອດຂາຍລົດທີ່ຕ້ອງສົ່ງຄືນ KAOLAO</div>
            </v-card>
          </v-col>

          <!-- 3. Operating Expenses (OPEX) -->
          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" color="white">
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption error--text font-weight-bold">ລາຍຈ່າຍບໍລິຫານ (OPEX)</span>
                <v-icon color="error" small>mdi-cash-minus</v-icon>
              </div>
              <div class="text-h6 font-weight-black error--text">{{ formatAmount(operatingExpensesOnly) }} {{ localCurrencyCode }}</div>
              <div class="text-tiny grey--text mt-1">ເງິນເດືອນ, ການຕະຫຼາດ ແລະ ໂຊຣູມ</div>
            </v-card>
          </v-col>

          <!-- 4. Real Net Profit -->
          <v-col cols="12" sm="6" md="3">
            <v-card flat class="stat-box pa-4 rounded-lg h-100" :color="netProfit >= 0 ? 'primary' : 'warning'" dark>
              <div class="d-flex justify-space-between mb-2">
                <span class="text-caption font-weight-bold opacity-80">{{ netProfit >= 0 ? 'ກຳໄລສຸດທິຕົວແທນ (Net Profit)' : 'ຂາດທຶນສຸດທິ (Net Loss)' }}</span>
                <v-icon color="white" small>{{ netProfit >= 0 ? 'mdi-trophy' : 'mdi-alert-circle' }}</v-icon>
              </div>
              <div class="text-h5 font-weight-black">{{ formatAmount(netProfit) }} {{ localCurrencyCode }}</div>
              <div class="text-tiny opacity-70 mt-1">ຜົນໄດ້ຮັບຕົວຈິງຫຼັງຫັກລາຍຈ່າຍທັງໝົດ</div>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-4">
          <!-- Main EChart -->
          <v-col cols="12" md="8">
            <v-card class="pa-4 chart-container rounded-lg h-100" flat outlined>
              <div class="d-flex align-center justify-space-between mb-4">
                <div class="d-flex align-center">
                  <v-icon left color="primary" small>mdi-chart-donut</v-icon>
                  <span class="text-subtitle-1 font-weight-bold primary--text">ວິເຄາະສັດສ່ວນ ລາຍຮັບຕົວແທນ - ລາຍຈ່າຍ (Agency P&L)</span>
                </div>
                <v-chip x-small color="grey lighten-3" class="font-weight-bold">
                  {{ localCurrencyCode }}
                </v-chip>
              </div>
              <div ref="plchart" style="width: 100%; height: 420px"></div>
            </v-card>
          </v-col>

          <!-- Quick Analysis Table -->
          <v-col cols="12" md="4">
            <v-card class="pa-4 rounded-lg h-100" flat outlined>
              <div class="d-flex align-center mb-4">
                <v-icon left color="primary" small>mdi-list-status</v-icon>
                <span class="text-subtitle-1 font-weight-bold primary--text">ສະຫຼຸບຕົວເລກຕົວແທນ KAOLAO</span>
              </div>
              
              <div class="analysis-list">
                <!-- Vehicle Sales Section -->
                <div class="text-caption font-weight-bold blue--text text--darken-3 mb-1">1. ຍອດຂາຍລົດຕົວແທນ (Car Sales)</div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">ຍອດຂາຍລວມ (Gross Car Sales)</span>
                  <span class="font-weight-medium">{{ formatAmount(grandSaleTotal) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ສ່ວນຫຼຸດໃຫ້ລູກຄ້າ (Discount)</span>
                  <span class="error--text">({{ formatAmount(grandSaleDiscountTotal) }})</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຍົກເລີກ/ສົ່ງຄືນ (Return/Cancel)</span>
                  <span class="error--text">({{ formatAmount(grandSaleCancelTotal) }})</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom font-weight-bold">
                  <span class="grey--text pl-2">ຍອດຂາຍສຸດທິທີ່ເກັບໄດ້ (Net Collected)</span>
                  <span class="blue--text text--darken-3">{{ formatAmount(totalSale) }}</span>
                </div>

                <!-- Remittance to KAOLAO -->
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom deep-purple lighten-5 px-2 rounded mt-2">
                  <span class="deep-purple--text text--darken-3 font-weight-bold">ຍອດຕ້ອງສົ່ງໃຫ້ KAOLAO</span>
                  <span class="deep-purple--text text--darken-3 font-weight-bold">{{ formatAmount(payableToKaolao) }} {{ localCurrencyCode }}</span>
                </div>

                <!-- Commission Revenue Section -->
                <div class="mt-4 text-caption font-weight-bold teal--text text--darken-3 mb-1">2. ລາຍຮັບຕົວແທນ (Commission & Others)</div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">ຄ່ານາຍໜ້າເຕັມ (Gross Commission)</span>
                  <span>{{ formatAmount(totalGrossCommission) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຫັກສ່ວນຫຼຸດແຖມລູກຄ້າ (Deduction)</span>
                  <span class="error--text">({{ formatAmount(totalDiscountDeduction) }})</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom font-weight-bold teal--text text--darken-3">
                  <span class="pl-2">ຄ່ານາຍໜ້າສຸດທິ (Net Commission)</span>
                  <span>{{ formatAmount(totalNetCommission) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">+ ລາຍຮັບອື່ນໆ (AR Income & Receipts)</span>
                  <span>{{ formatAmount(totalOtherIncome) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom teal lighten-5 px-2 rounded mt-2">
                  <span class="teal--text text--darken-4 font-weight-bold">ລວມລາຍຮັບຕົວແທນ (A)</span>
                  <span class="teal--text text--darken-4 font-weight-bold">{{ formatAmount(totalAgencyRevenue) }} {{ localCurrencyCode }}</span>
                </div>

                <!-- OPEX Section -->
                <div class="mt-4 text-caption font-weight-bold error--text mb-1">3. ລາຍຈ່າຍບໍລິຫານ (Operating Expenses)</div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ເງິນເດືອນພະນັກງານ (Salary)</span>
                  <span>{{ formatAmount(staffSalaryExpense) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ການຕະຫຼາດ & ໂຄສະນາ (Marketing)</span>
                  <span>{{ formatAmount(advertisingExpense) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ໂຊຣູມ & ຫ້ອງການ (Office/Showroom)</span>
                  <span>{{ formatAmount(officeExpense) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ລາຍຈ່າຍອື່ນໆ & COD (Other Expenses)</span>
                  <span>{{ formatAmount(otherExpense + totalCODFee + totalCancelFee) }}</span>
                </div>
                <div v-if="showApSettlement" class="analysis-item d-flex justify-space-between py-1 text-caption border-bottom">
                  <span class="grey--text pl-2">- ຊຳລະໃບແຈ້ງໜີ້ (AP Settlement)</span>
                  <span>{{ formatAmount(totalApSettlementAmount) }}</span>
                </div>
                <div class="analysis-item d-flex justify-space-between py-2 border-bottom error lighten-5 px-2 rounded mt-1">
                  <span class="error--text font-weight-bold">ລວມລາຍຈ່າຍບໍລິຫານ (B: OPEX)</span>
                  <span class="error--text font-weight-bold">{{ formatAmount(operatingExpensesOnly) }} {{ localCurrencyCode }}</span>
                </div>

                <v-divider class="my-3"></v-divider>
                
                <!-- Bottom Net Profit -->
                <div class="d-flex justify-space-between align-center pa-3 rounded-lg" :class="netProfit >= 0 ? 'success' : 'error'" dark>
                  <span class="text-subtitle-2 font-weight-bold">ກຳໄລສຸດທິຕົວແທນ (A - B)</span>
                  <span class="text-h6 font-weight-black">{{ formatAmount(netProfit) }} {{ localCurrencyCode }}</span>
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
  name: 'AgencyProfitLossReport',
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

    // Vehicle Sales Calculations
    grandSaleTotal() {
      return this.yearlySale.reduce((total, item) => {
        const itemTotal = parseFloat(item.total || 0)
        const itemDiscount = parseFloat(item.discount || 0)
        if (Math.abs(itemTotal) > 1e12 || Math.abs(itemDiscount) > 1e12) return total
        const grossAmount = item.isActive !== false ? (itemTotal + itemDiscount) : itemTotal
        const converted = this.convertToHomeCurrency(grossAmount, item.currencyId, item.exchangeRate)
        return total + converted
      }, 0)
    },
    grandSaleDiscountTotal() {
      return this.yearlySale.filter(el => el.isActive === true).reduce((total, item) => {
        const itemDiscount = parseFloat(item.discount || 0)
        if (Math.abs(itemDiscount) > 1e12) return total
        const converted = this.convertToHomeCurrency(itemDiscount, item.currencyId, item.exchangeRate)
        return total + converted
      }, 0)
    },
    grandSaleCancelTotal() {
      return this.yearlySale.filter(el => el.isActive === false).reduce((total, item) => {
        const itemTotal = parseFloat(item.total || 0)
        if (Math.abs(itemTotal) > 1e12) return total
        const converted = this.convertToHomeCurrency(Math.abs(itemTotal), item.currencyId, item.exchangeRate)
        return total + converted
      }, 0)
    },
    totalSale() {
      return this.grandSaleTotal - (this.grandSaleCancelTotal + this.grandSaleDiscountTotal)
    },

    // Commission Calculations
    commissionLineCalculations() {
      const list = []
      this.yearlySale.forEach(sale => {
        const saleRate = parseFloat(sale.exchangeRate) || 1
        const saleCurrencyId = sale.currencyId || 1
        const isSaleActive = sale.isActive !== false

        let orderGross = 0
        ;(sale.lines || []).forEach(l => {
          orderGross += (parseFloat(l.price || 0) * parseFloat(l.quantity || 1))
        })
        const headerDiscount = (parseFloat(sale.discount) || 0) + (parseFloat(sale.loyaltyDiscount) || 0)

        ;(sale.lines || []).forEach(line => {
          const product = line.product || {}
          const qty = parseFloat(line.quantity || 1)
          const price = parseFloat(line.price || product.pro_price || 0)
          const lineGross = price * qty
          const lineDirectDiscount = parseFloat(line.discount || 0)
          const allocatedHeaderDiscount = (headerDiscount > 0 && orderGross > 0)
            ? Math.round(((lineGross / orderGross) * headerDiscount) * 100) / 100
            : 0
          const effectiveDiscount = Math.min(lineGross, lineDirectDiscount + allocatedHeaderDiscount)
          const lineNet = Math.max(0, lineGross - effectiveDiscount)

          let commGross = parseFloat(line.commissionGrossAmount || 0)
          let commDeduction = parseFloat(line.commissionDiscountDeduction || 0)
          let commNet = parseFloat(line.commissionAmount || 0)
          let commBase = parseFloat(line.commissionBaseAmount || 0)

          const hasSnapshot = line.hasCommission && (commNet > 0 || commGross > 0 || commBase > 0 || commDeduction > 0)

          if (!hasSnapshot && (product.hasCommission || line.hasCommission)) {
            const commType = line.commissionType || product.commissionType || 'fixed'
            const commVal = parseFloat(line.commissionRate || product.commissionValue || 0)

            if (commType === 'percentage') {
              commGross = (lineGross * commVal) / 100
              commNet = (lineNet * commVal) / 100
              commDeduction = Math.max(0, commGross - commNet)
            } else {
              commGross = commVal * qty
              const impact = product.commissionDiscountImpact || 'deduct_full'
              const discountRate = product.commissionDiscountRate !== undefined ? (parseFloat(product.commissionDiscountRate) || 0) : 100
              const minFloor = parseFloat(product.commissionMinFloor || 0)

              if (effectiveDiscount > 0) {
                if (impact === 'deduct_full') {
                  commDeduction = effectiveDiscount
                } else if (impact === 'deduct_shared') {
                  commDeduction = effectiveDiscount * (discountRate / 100)
                } else if (impact === 'proportional') {
                  commDeduction = lineGross > 0 ? (effectiveDiscount / lineGross) * commGross : 0
                }
              }
              commDeduction = Math.min(commGross, Math.max(0, commDeduction))
              commNet = Math.max(minFloor, commGross - commDeduction)
            }
            commBase = this.convertToHomeCurrency(commNet, saleCurrencyId, saleRate)
          }

          if (commBase === 0 && commNet > 0) {
            commBase = this.convertToHomeCurrency(commNet, saleCurrencyId, saleRate)
          }

          const payableToKaolao = isSaleActive ? Math.max(0, lineNet - commNet) : 0
          const payableToKaolaoBase = this.convertToHomeCurrency(payableToKaolao, saleCurrencyId, saleRate)

          list.push({
            saleId: sale.id,
            isActive: isSaleActive,
            quantity: qty,
            grossCommissionBase: this.convertToHomeCurrency(commGross, saleCurrencyId, saleRate),
            discountDeductionBase: this.convertToHomeCurrency(commDeduction, saleCurrencyId, saleRate),
            netCommissionBase: commBase,
            payableToKaolaoBase: payableToKaolaoBase
          })
        })
      })
      return list
    },

    totalGrossCommission() {
      return this.commissionLineCalculations.filter(l => l.isActive).reduce((sum, l) => sum + l.grossCommissionBase, 0)
    },
    totalDiscountDeduction() {
      return this.commissionLineCalculations.filter(l => l.isActive).reduce((sum, l) => sum + l.discountDeductionBase, 0)
    },
    totalNetCommission() {
      return this.commissionLineCalculations.filter(l => l.isActive).reduce((sum, l) => sum + l.netCommissionBase, 0)
    },
    payableToKaolao() {
      return Math.max(0, this.totalSale - this.totalNetCommission)
    },

    // Incomes
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
    totalAgencyRevenue() {
      // In Agency Model: Agency Revenue = Net Commission + Other Income
      return this.totalNetCommission + this.totalOtherIncome
    },

    // Expenses
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
    activeExpenseList() {
      return (this.expenseList || []).filter(i => i.isActive !== false)
    },
    staffSalaryExpense() {
      return this.activeExpenseList.filter(item => {
        const name = item.drAccount?.accountName || item.accountName || ''
        return name.toLowerCase().includes('salary') || name.toLowerCase().includes('staff') || name.includes('ພະນັກງານ') || name.includes('ເງິນເດືອນ')
      }).reduce((acc, i) => acc + this.convertToHomeCurrency(i.totalAmount, i.currencyId, i.rate), 0)
    },
    advertisingExpense() {
      return this.activeExpenseList.filter(item => {
        const name = item.drAccount?.accountName || item.accountName || ''
        return name.toLowerCase().includes('advertis') || name.toLowerCase().includes('market') || name.includes('ໂຄສະນາ') || name.includes('ການຕະຫຼາດ')
      }).reduce((acc, i) => acc + this.convertToHomeCurrency(i.totalAmount, i.currencyId, i.rate), 0)
    },
    officeExpense() {
      return this.activeExpenseList.filter(item => {
        const name = item.drAccount?.accountName || item.accountName || ''
        return name.toLowerCase().includes('office') || name.toLowerCase().includes('rent') || name.includes('ຫ້ອງການ') || name.includes('ໂຊຣູມ') || name.includes('ຄ່າເຊົ່າ')
      }).reduce((acc, i) => acc + this.convertToHomeCurrency(i.totalAmount, i.currencyId, i.rate), 0)
    },
    otherExpense() {
      return this.activeExpenseList.filter(item => {
        const name = item.drAccount?.accountName || item.accountName || ''
        const isSalary = name.toLowerCase().includes('salary') || name.toLowerCase().includes('staff') || name.includes('ພະນັກງານ') || name.includes('ເງິນເດືອນ')
        const isAds = name.toLowerCase().includes('advertis') || name.toLowerCase().includes('market') || name.includes('ໂຄສະນາ') || name.includes('ການຕະຫຼາດ')
        const isOffice = name.toLowerCase().includes('office') || name.toLowerCase().includes('rent') || name.includes('ຫ້ອງການ') || name.includes('ໂຊຣູມ') || name.includes('ຄ່າເຊົ່າ')
        return !isSalary && !isAds && !isOffice
      }).reduce((acc, i) => acc + this.convertToHomeCurrency(i.totalAmount, i.currencyId, i.rate), 0)
    },
    totalFinancialExpense() {
      return this.activeExpenseList.reduce((acc, i) => acc + this.convertToHomeCurrency(i.totalAmount, i.currencyId, i.rate), 0)
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
      return this.totalFinancialExpense + this.totalCODFee + this.totalCancelFee + (this.showApSettlement ? this.totalApSettlementAmount : 0)
    },
    netProfit() {
      return this.totalAgencyRevenue - this.operatingExpensesOnly
    }
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
            console.error('Failed to load currencies in Agency PL screen:', error)
          }
        }
        if (!this.findSPF || this.findSPF.length === 0) {
          try {
            const response = await this.$axios.get('api/SPF/find')
            const spfData = response.data?.data || response.data || []
            await this.$store.dispatch('initSPF', spfData)
          } catch (error) {
            console.error('Failed to load SPF in Agency PL screen:', error)
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
      const params = { 
        date: { startDate: this.date, endDate: this.date2 }, 
        locationId: this.currentSelectedLocation?.id,
        includeCards: true 
      }
      try { 
        const res = await this.$axios.get('api/sale/findDetailByDate', { params })
        this.yearlySale = res.data || []
      } catch (e) { console.error('Sale stat load error', e) }
    },
    renderChart() {
      const dom = this.$refs.plchart; if (!dom) return
      const chart = ECharts.init(dom)
      const opt = {
        tooltip: { trigger: 'item', backgroundColor: '#fff', textStyle: { color: '#333' } },
        legend: { bottom: '0%', left: 'center', textStyle: { fontFamily: 'noto sans lao' } },
        color: ['#00897b', '#673ab7', '#e53935', '#43a047'],
        series: [{
          name: 'Agency Breakdown', type: 'pie', radius: ['40%', '70%'], center: ['50%', '52%'], startAngle: 180, avoidLabelOverlap: false,
          itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 2 },
          label: { show: true, formatter: '{b}\n{d}%', fontFamily: 'noto sans lao', fontWeight: 'bold' },
          data: [
            { value: this.totalNetCommission, name: 'ຄ່ານາຍໜ້າສຸດທິ' },
            { value: this.payableToKaolao, name: 'ຍອດສົ່ງ KAOLAO' },
            { value: this.operatingExpensesOnly, name: 'ລາຍຈ່າຍບໍລິຫານ' },
            { value: Math.max(0, this.netProfit), name: 'ກຳໄລສຸດທິຕົວແທນ' },
            { value: this.totalSale + this.operatingExpensesOnly + Math.abs(this.netProfit), itemStyle: { color: 'none', decal: { symbol: 'none' } }, label: { show: false } }
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
