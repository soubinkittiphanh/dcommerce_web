<template>
  <div class="text-left">
    <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-2">
      <div>
        <v-chip class="pa-5" color="primary" label text-color="white">
          <v-icon start>mdi-car-estate</v-icon>
          <h3>ຍອດຂາຍຕົວແທນ ແລະ ກຳໄລຄ່ານາຍໜ້າ (KAOLAO)</h3>
        </v-chip>
        <v-chip class="pa-5" color="deep-purple darken-1" label text-color="white" to="/admin/saleCost">
          <v-icon start>mdi-swap-horizontal</v-icon>
          <h3>ເບິ່ງຍອດຂາຍພ້ອມຕົ້ນທຶນປົກກະຕິ</h3>
        </v-chip>
      </div>
    </div>

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
        <!-- 1. Agency Income (From Commission) -->
        <v-col cols="6" class="text-right">
          <v-row class="primary pa-2 rounded">
            <h4 style="color: white;">Income ລາຍຮັບຕົວແທນ (ຈາກຄ່ານາຍໜ້າ Commission)</h4>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Gross commission (ຄ່ານາຍໜ້າເຕັມ)</v-col>
            <v-col cols="6">{{ formatNumber(totalGrossCommission) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Discount deduction (ຫັກສ່ວນຫຼຸດແຖມລູກຄ້າ)</v-col>
            <v-col cols="6">({{ formatNumber(totalDiscountDeduction) }})</v-col>
          </v-row>
          <v-row><v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold;">Net commission (ຄ່ານາຍໜ້າສຸດທິ)</v-col>
            <v-col cols="6" style="font-weight: bold;">{{
              formatNumber(totalNetCommission) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Other income (AR ລາຍຮັບອື່ນໆ)</v-col>
            <v-col cols="6">{{ formatNumber(totalFinancialIncome) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">AR Receive (ໃບຮັບເງິນ)</v-col>
            <v-col cols="6">{{ formatNumber(totalArReceive) }}</v-col>
          </v-row>
          <v-row><v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold; font-style: italic;">Total Revenue (ລາຍຮັບຕົວແທນລວມ)</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic;">{{
              formatNumber(totalRevenue) }}</v-col>
          </v-row>
        </v-col>

        <!-- 2. Consignment Sales & KAOLAO Remittance -->
        <v-col cols="6" class="text-right">
          <v-row class="deep-purple darken-1 pa-2 rounded">
            <h4 style="color: white;">Consignment Sales & Remittance (ຍອດຂາຍລົດ & ຫັກສົ່ງ ບໍລິສັດ KAOLAO)</h4>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Gross car sale (ຍອດຂາຍລົດລວມ)</v-col>
            <v-col cols="6">{{ formatNumber(grandSaleTotal) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Return/Cancel (ຍົກເລີກ/ສົ່ງຄືນ)</v-col>
            <v-col cols="6">({{ formatNumber(grandSaleCancelTotal) }})</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Customer discount (ສ່ວນຫຼຸດໃຫ້ລູກຄ້າ)</v-col>
            <v-col cols="6">({{ formatNumber(grandSaleDiscountTotal) }})</v-col>
          </v-row>
          <v-row><v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold;">Net car sale collected (ຍອດຂາຍລົດສຸດທິທີ່ເກັບໄດ້)</v-col>
            <v-col cols="6" style="font-weight: bold;">{{
              formatNumber(netSale) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Less Agency Commission (ຫັກຄ່ານາຍໜ້າຕົວແທນໄດ້ຮັບ)</v-col>
            <v-col cols="6">({{ formatNumber(totalNetCommission) }})</v-col>
          </v-row>
          <v-row> <v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold; font-style: italic; color: #512da8;">Payable to KAOLAO (ຍອດຕ້ອງສົ່ງໃຫ້ ບໍລິສັດ KAOLAO)</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic; color: #512da8;">{{
              formatNumber(payableToKaolao) }}</v-col>
          </v-row>
        </v-col>

        <!-- 3. Accounting expense -->
        <v-col cols="6" class="text-right">
          <v-row class="primary pa-2 rounded">
            <h4 style="color: white;">Expense ລາຍຈ່າຍບໍລິຫານ</h4>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Staff salary </v-col>
            <v-col cols="6">{{ formatNumber(staffSalaryExpense) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Advertising</v-col>
            <v-col cols="6">{{ formatNumber(advertisingExpense) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Office expense</v-col>
            <v-col cols="6">{{ formatNumber(officeExpense) }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Other expense</v-col>
            <v-col cols="6">{{ formatNumber(otherExpense) }}</v-col>
          </v-row>
          <v-row v-if="grandCODCost > 0 || grandCancellationCost > 0">
            <v-col cols="2"></v-col>
            <v-col cols="4">COD & Cancel fee</v-col>
            <v-col cols="6">{{ formatNumber(grandCODCost + grandCancellationCost) }}</v-col>
          </v-row>
          <v-row v-if="showApSettlement">
            <v-col cols="2"></v-col>
            <v-col cols="4">AP Settlement (ຊຳລະໃບແຈ້ງໜີ້)</v-col>
            <v-col cols="6">{{ formatNumber(totalApSettlement) }}</v-col>
          </v-row>
          <v-row> <v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold; font-style: italic;">Total expense (ລາຍຈ່າຍບໍລິຫານລວມ)</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic;">{{ formatNumber(totalExpense) }}</v-col>
          </v-row>
        </v-col>

        <!-- 4. Net profit -->
        <v-col cols="6" class="text-right">
          <v-row class="primary pa-2 rounded">
            <h4 style="color: white;">Net operating profit ກຳໄລສຸດທິຕົວຈິງ</h4>
          </v-row>
          <v-row> <v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold; font-style: italic;">Net operating profit (ກຳໄລສຸດທິຕົວແທນ)</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic;" :style="{ color: netProfit >= 0 ? '#2e7d32' : '#c62828' }">{{ formatNumber(netProfit) }}</v-col>
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { getFirstDayOfMonth, getFormatNum } from '~/common'
import { mapGetters } from 'vuex'

export default {
  middleware: 'auths',
  data() {
    return {
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
      menu1: false,
      menu2: false,
      isloading: false,
      dialogMessage: false,
      message: '',
      loaddata: [],
      incomeData: [],
      arReceiveData: [],
      expenseData: [],
      apSettlementData: [],
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
    currentSelectedLocation: {
      handler() {
        this.fetchData()
      },
      deep: true
    }
  },
  async mounted() {
    await this.fetchData()
  },
  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation', 'findAllCurrency', 'findSPF']),
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

    // 1. Vehicle sales collected
    grandSaleTotal() {
      return this.loaddata.reduce((total, item) => {
        const rate = item.exchangeRate || 1
        const itemTotal = parseFloat(item.total || 0)
        const itemDiscount = parseFloat(item.discount || 0)
        if (Math.abs(itemTotal) > 1e12 || Math.abs(itemDiscount) > 1e12) return total
        const grossAmount = item.isActive !== false ? (itemTotal + itemDiscount) : itemTotal
        return total + (grossAmount * rate)
      }, 0)
    },
    grandSaleDiscountTotal() {
      return this.loaddata.filter(el => el.isActive == true).reduce((total, item) => {
        const rate = item.exchangeRate || 1
        const itemDiscount = parseFloat(item.discount || 0)
        if (Math.abs(itemDiscount) > 1e12) return total
        return total + (itemDiscount * rate)
      }, 0)
    },
    grandSaleCancelTotal() {
      return this.loaddata.filter(el => el.isActive == false).reduce((total, item) => {
        const rate = item.exchangeRate || 1
        const itemTotal = parseFloat(item.total || 0)
        if (Math.abs(itemTotal) > 1e12) return total
        return total + (Math.abs(itemTotal) * rate)
      }, 0)
    },
    netSale() {
      return this.grandSaleTotal - (this.grandSaleCancelTotal + this.grandSaleDiscountTotal)
    },

    // 2. Commission Calculations
    commissionLineCalculations() {
      const list = []
      this.loaddata.forEach(sale => {
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
            commBase = commNet * saleRate
          }

          if (commBase === 0 && commNet > 0) {
            commBase = commNet * saleRate
          }

          list.push({
            saleId: sale.id,
            isActive: isSaleActive,
            grossCommission: commGross * saleRate,
            discountDeduction: commDeduction * saleRate,
            netCommission: commBase
          })
        })
      })
      return list
    },

    totalGrossCommission() {
      return this.commissionLineCalculations.filter(l => l.isActive).reduce((sum, l) => sum + l.grossCommission, 0)
    },
    totalDiscountDeduction() {
      return this.commissionLineCalculations.filter(l => l.isActive).reduce((sum, l) => sum + l.discountDeduction, 0)
    },
    totalNetCommission() {
      return this.commissionLineCalculations.filter(l => l.isActive).reduce((sum, l) => sum + l.netCommission, 0)
    },
    payableToKaolao() {
      return Math.max(0, this.netSale - this.totalNetCommission)
    },

    // 3. Other Incomes
    activeIncomeData() {
      return this.incomeData.filter(el => el.isActive !== false)
    },
    totalFinancialIncome() {
      return this.activeIncomeData.reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    activeArReceiveData() {
      const fromDate = this.date ? new Date(this.date) : null
      const toDate = this.date2 ? new Date(this.date2) : null

      return (this.arReceiveData || []).filter(receipt => {
        if (receipt.status === 'cancelled' || receipt.status === 'voided') return false
        const dStr = receipt.receivedDate || receipt.bookingDate || receipt.createdAt
        if (!dStr) return true
        const d = new Date(dStr.substr(0, 10))
        if (fromDate && d < fromDate) return false
        if (toDate && d > toDate) return false
        return true
      })
    },
    totalArReceive() {
      return this.activeArReceiveData.reduce((total, item) => {
        const rate = parseFloat(item.exchangeRate || item.rate || 1)
        return total + ((parseFloat(item.totalReceivedAmount) || 0) * rate)
      }, 0)
    },
    totalOtherIncome() {
      return this.totalFinancialIncome + this.totalArReceive
    },
    totalRevenue() {
      // Real Agency Revenue = Net Commission + Other Income
      return this.totalNetCommission + this.totalOtherIncome
    },

    // 4. Expenses
    grandCODCost() {
      let totalCOD = 0
      for (const sale of this.loaddata.filter(el => el.isActive == true)) {
        if (sale.dynamic_customer) {
          const rate = sale.exchangeRate || 1
          totalCOD += (sale.dynamic_customer.cod_fee || 0) * rate
        }
      }
      return totalCOD
    },
    grandCancellationCost() {
      let totalCancellationFee = 0
      for (const sale of this.loaddata.filter(el => el.isActive == false)) {
        if (sale.dynamic_customer) {
          const rate = sale.exchangeRate || 1
          totalCancellationFee += (sale.dynamic_customer.cancel_fee || 0) * rate
        }
      }
      return totalCancellationFee
    },
    activeExpenseData() {
      return this.expenseData.filter(el => el.isActive !== false)
    },
    staffSalaryExpense() {
      return this.activeExpenseData.filter(item => {
        const name = item.drAccount?.accountName || ''
        return name.toLowerCase().includes('salary') || name.toLowerCase().includes('staff') || name.includes('ພະນັກງານ') || name.includes('ເງິນເດືອນ')
      }).reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    advertisingExpense() {
      return this.activeExpenseData.filter(item => {
        const name = item.drAccount?.accountName || ''
        return name.toLowerCase().includes('advertis') || name.toLowerCase().includes('market') || name.includes('ໂຄສະນາ') || name.includes('ການຕະຫຼາດ')
      }).reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    officeExpense() {
      return this.activeExpenseData.filter(item => {
        const name = item.drAccount?.accountName || ''
        return name.toLowerCase().includes('office') || name.toLowerCase().includes('rent') || name.includes('ຫ້ອງການ') || name.includes('ໂຊຣູມ') || name.includes('ຄ່າເຊົ່າ')
      }).reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    otherExpense() {
      return this.activeExpenseData.filter(item => {
        const name = item.drAccount?.accountName || ''
        const isSalary = name.toLowerCase().includes('salary') || name.toLowerCase().includes('staff') || name.includes('ພະນັກງານ') || name.includes('ເງິນເດືອນ')
        const isAds = name.toLowerCase().includes('advertis') || name.toLowerCase().includes('market') || name.includes('ໂຄສະນາ') || name.includes('ການຕະຫຼາດ')
        const isOffice = name.toLowerCase().includes('office') || name.toLowerCase().includes('rent') || name.includes('ຫ້ອງການ') || name.includes('ໂຊຣູມ') || name.includes('ຄ່າເຊົ່າ')
        return !isSalary && !isAds && !isOffice
      }).reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    totalFinancialExpense() {
      return this.activeExpenseData.reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    activeApSettlementData() {
      const fromDate = this.date ? new Date(this.date) : null
      const toDate = this.date2 ? new Date(this.date2) : null

      return (this.apSettlementData || []).filter(s => {
        if (s.status === 'cancelled') return false
        const dStr = s.settlementDate || s.createdAt
        if (!dStr) return true
        const d = new Date(dStr.substr(0, 10))
        if (fromDate && d < fromDate) return false
        if (toDate && d > toDate) return false
        return true
      })
    },
    totalApSettlement() {
      return this.activeApSettlementData.reduce((total, item) => {
        const rate = parseFloat(item.exchangeRate || 1)
        return total + ((parseFloat(item.paymentAmount || item.baseAmount) || 0) * rate)
      }, 0)
    },
    totalExpense() {
      return this.totalFinancialExpense + this.grandCODCost + this.grandCancellationCost + (this.showApSettlement ? this.totalApSettlement : 0)
    },

    // 5. Net Operating Profit
    netProfit() {
      return this.totalRevenue - this.totalExpense
    }
  },
  methods: {
    formatNumber(value) {
      return getFormatNum(value)
    },
    formatDate(date) {
      if (!date) return null
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0')
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    async fetchData() {
      this.isloading = true
      if (!this.findSPF || this.findSPF.length === 0) {
        try {
          const response = await this.$axios.get('api/SPF/find')
          const spfData = response.data?.data || response.data || []
          await this.$store.dispatch('initSPF', spfData)
        } catch (error) {
          console.error('Failed to load SPF in saleCostCommission screen:', error)
        }
      }
      const date = {
        startDate: this.date,
        endDate: this.date2,
      }
      const locationId = this.currentSelectedLocation?.id
      const incomePromise = this.$axios
        .get(`api/finanicial/ar/header/findByDate`, { params: { date, locationId } })
        .then((res) => {
          this.incomeData = res.data || []
        })
        .catch((err) => {
          console.warn('Error loading AR income in saleCostCommission:', err)
          this.incomeData = []
        })

      const expensePromise = this.$axios
        .get(`api/finanicial/ap/header/findByDate`, { params: { date, locationId } })
        .then((res) => {
          this.expenseData = res.data || []
        })
        .catch((err) => {
          console.warn('Error loading AP expense in saleCostCommission:', err)
          this.expenseData = []
        })

      const arReceivePromise = this.$axios
        .get(`/api/ar-receive-headers`, { params: { bookingDateFrom: this.date, bookingDateTo: this.date2, limit: 1000, page: 1 } })
        .then((res) => {
          this.arReceiveData = res.data?.data?.receiveHeaders || res.data?.data || res.data || []
        })
        .catch((err) => {
          console.warn('Error loading AR receive in saleCostCommission:', err)
          this.arReceiveData = []
        })

      const apSettlementPromise = this.showApSettlement
        ? this.$axios
            .get(`/api/ap-invoices-settlement`, { params: { startDate: this.date, endDate: this.date2, limit: 1000, page: 1 } })
            .then((res) => {
              this.apSettlementData = res.data?.data?.settlements || res.data?.data || res.data || []
            })
            .catch((err) => {
              console.warn('Error loading AP settlement in saleCostCommission:', err)
              this.apSettlementData = []
            })
        : Promise.resolve().then(() => { this.apSettlementData = [] })

      await Promise.all([
        this.$axios.get(`api/sale/findDetailByDate`, { params: { date, locationId } })
          .then((res) => {
            this.loaddata = res.data || []
          }),
        incomePromise,
        expensePromise,
        arReceivePromise,
        apSettlementPromise,
      ])
        .catch((er) => {
          this.message = er
          console.log('Error: ' + er)
        })
      this.isloading = false
    },
  },
}
</script>
