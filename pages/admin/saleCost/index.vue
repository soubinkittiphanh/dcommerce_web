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
            <v-col cols="6">({{ formatNumber(grandSaleCancelTotal) }})</v-col>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4">Discount</v-col>
            <v-col cols="6">({{ formatNumber(grandSaleDiscountTotal) }})</v-col>
          </v-row>
          <v-row><v-col cols="2"></v-col> <v-col cols="10">
              <hr style="border-width: 0.1px;">
            </v-col> </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="4" style="font-weight: bold;">Net sale (ຍອດຂາຍສຸດທິ)</v-col>
            <v-col cols="6" style="font-weight: bold;">{{
              formatNumber(netSale) }}</v-col>
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
            <v-col cols="4" style="font-weight: bold; font-style: italic;">Total Revenue (ລາຍຮັບລວມ)</v-col>
            <v-col cols="6" style="font-weight: bold; font-style: italic;">{{
              formatNumber(totalRevenue) }}</v-col>
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
    grandSaleTotal() {
      // ✅ Normalize to LAK: (total + discount) * exchangeRate for active, total * rate for inactive
      return this.loaddata.reduce((total, item) => {
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
      return this.loaddata.filter(el => el.isActive == true).reduce((total, item) => {
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
      console.log(`Sale cancel status ${this.loaddata.filter(el => el.isActive == false).length}`);
      // ✅ Normalize to LAK: total * exchangeRate
      return this.loaddata.filter(el => el.isActive == false).reduce((total, item) => {
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
    grandSaleCost() {
      let totalCost = 0;

      this.loaddata.filter(sale => sale.isActive === true).forEach(sale => {
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
              
              // ✅ Smart Currency Correction:
              // If the calculated cost in LAK is > 1.5x the retail selling price of the item, 
              // and a non-LAK exchange rate (> 10) was applied, it means a LAK cost (e.g. 185,000 Kip) 
              // was entered under a foreign currency product settings and incorrectly multiplied by the rate (e.g. 687).
              // We fall back to the raw cost value (which is the actual LAK cost entered by the user).
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
        console.log(`Sale ID: ${sale.id} | Cost: ${saleCost}`);
        totalCost += saleCost;
      });
      return totalCost;
    },
    grandCODCost() {
      let totalCOD = 0;
      for (const sale of this.loaddata.filter(el => el.isActive == true)) {
        if (sale.dynamic_customer) {
          const rate = sale.exchangeRate || 1;
          totalCOD += (sale.dynamic_customer.cod_fee || 0) * rate;
        }
      }
      return totalCOD;
    },
    grandCancellationCost() {
      let totalCancellationFee = 0;
      for (const sale of this.loaddata.filter(el => el.isActive == false)) {
        if (sale.dynamic_customer) {
          const rate = sale.exchangeRate || 1;
          totalCancellationFee += (sale.dynamic_customer.cancel_fee || 0) * rate;
        }
      }
      return totalCancellationFee;
    },
    netSale() {
      return this.grandSaleTotal - (this.grandSaleCancelTotal + this.grandSaleDiscountTotal)
    },
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
      return this.netSale + this.totalOtherIncome
    },
    totalCOGS() {
      return this.grandSaleCost + this.grandCODCost + this.grandCancellationCost
    },
    netProfit() {
      return this.totalRevenue - (this.totalCOGS + this.totalExpense)
    },
    activeExpenseData() {
      return this.expenseData.filter(el => el.isActive !== false)
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
      return this.totalFinancialExpense + (this.showApSettlement ? this.totalApSettlement : 0)
    },
    staffSalaryExpense() {
      return this.activeExpenseData.filter(item => {
        const name = item.drAccount?.accountName || ''
        return name.toLowerCase().includes('salary') || name.toLowerCase().includes('staff') || name.includes('ພະນັກງານ')
      }).reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    advertisingExpense() {
      return this.activeExpenseData.filter(item => {
        const name = item.drAccount?.accountName || ''
        return name.toLowerCase().includes('advertis') || name.toLowerCase().includes('market') || name.includes('ໂຄສະນາ')
      }).reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    officeExpense() {
      return this.activeExpenseData.filter(item => {
        const name = item.drAccount?.accountName || ''
        return name.toLowerCase().includes('office') || name.includes('ຫ້ອງການ')
      }).reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
    },
    otherExpense() {
      return this.activeExpenseData.filter(item => {
        const name = item.drAccount?.accountName || ''
        const isSalary = name.toLowerCase().includes('salary') || name.toLowerCase().includes('staff') || name.includes('ພະນັກງານ')
        const isAds = name.toLowerCase().includes('advertis') || name.toLowerCase().includes('market') || name.includes('ໂຄສະນາ')
        const isOffice = name.toLowerCase().includes('office') || name.includes('ຫ້ອງການ')
        return !isSalary && !isAds && !isOffice
      }).reduce((total, item) => {
        const rate = item.rate || 1
        return total + ((parseFloat(item.totalAmount) || 0) * rate)
      }, 0)
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
      if (!this.findSPF || this.findSPF.length === 0) {
        try {
          const response = await this.$axios.get('api/SPF/find')
          const spfData = response.data?.data || response.data || []
          await this.$store.dispatch('initSPF', spfData)
        } catch (error) {
          console.error('Failed to load SPF in saleCost screen:', error)
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
          this.incomeData = res.data || [];
        })
        .catch((err) => {
          console.warn('Error loading AR income in saleCost:', err);
          this.incomeData = [];
        })

      const expensePromise = this.$axios
        .get(`api/finanicial/ap/header/findByDate`, { params: { date, locationId } })
        .then((res) => {
          this.expenseData = res.data || [];
        })
        .catch((err) => {
          console.warn('Error loading AP expense in saleCost:', err);
          this.expenseData = [];
        })

      const arReceivePromise = this.$axios
        .get(`/api/ar-receive-headers`, { params: { bookingDateFrom: this.date, bookingDateTo: this.date2, limit: 1000, page: 1 } })
        .then((res) => {
          this.arReceiveData = res.data?.data?.receiveHeaders || res.data?.data || res.data || [];
        })
        .catch((err) => {
          console.warn('Error loading AR receive in saleCost:', err);
          this.arReceiveData = [];
        })

      const apSettlementPromise = this.showApSettlement
        ? this.$axios
            .get(`/api/ap-invoices-settlement`, { params: { startDate: this.date, endDate: this.date2, limit: 1000, page: 1 } })
            .then((res) => {
              this.apSettlementData = res.data?.data?.settlements || res.data?.data || res.data || [];
            })
            .catch((err) => {
              console.warn('Error loading AP settlement in saleCost:', err);
              this.apSettlementData = [];
            })
        : Promise.resolve().then(() => { this.apSettlementData = [] });

      await Promise.all([
        this.$axios.get(`api/sale/findDetailByDate`, { params: { date, locationId } })
          .then((res) => {
            this.loaddata = res.data || [];
            console.log(`Stock entry count ${this.loaddata.length}`);
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