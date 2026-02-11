<template>
  <div class="text-left business-performance-container">
    <!-- Header Section -->
    <div class="header-chips mb-4">
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-chart-line</v-icon>
        <h3>ລາຍງານການປະຕິບັດງານທຸລະກິດ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Dialogs -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="5yMsQ6gRSkI">
      </youtube-player>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>

    <!-- Main Content -->
    <v-card class="main-content-card">
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <!-- Date Range Selection -->
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
            <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary mr-2" rounded>
              <span class="mdi mdi-microsoft-excel"></span>Export Excel
            </v-btn>
            <v-btn size="large" variant="outlined" @click="printReport" class="primary" rounded>
              <span class="mdi mdi-printer"></span>Print Report
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <!-- Key Performance Indicators -->
        <v-row class="mb-4">
          <v-col cols="12">
            <h3 class="mb-3">
              <v-icon left>mdi-speedometer</v-icon>
              ຕົວຊີ້ວັດການປະຕິບັດງານຫຼັກ (KPIs)
            </h3>
          </v-col>
        </v-row>

        <!-- KPI Cards - Same style as grade cards -->
        <v-row>
          <v-col cols="6" md="3">
            <v-card outlined class="grade-summary-card pa-3 text-center elevation-2">
              <v-icon color="success" size="32" class="mb-2">mdi-trending-up</v-icon>
              <div class="grade-badge mb-2">
                <v-chip color="success" dark small label>
                  <strong>ລາຍຮັບສຸດທິ</strong>
                </v-chip>
              </div>
              <h3 class="success--text mb-1">{{ formatNumber(netSale) }} LAK</h3>
              <div class="text--secondary mb-1">Net Revenue</div>
              <v-chip color="success" small outlined class="font-weight-bold">
                {{ totalOrders }} ບິນ
              </v-chip>
              <div class="mt-2">
                <v-progress-linear :value="100" color="success" height="4" rounded></v-progress-linear>
                <div class="mt-1">100% ຂອງຍອດຂາຍ</div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="6" md="3">
            <v-card outlined class="grade-summary-card pa-3 text-center elevation-2">
              <v-icon color="primary" size="32" class="mb-2">mdi-cash</v-icon>
              <div class="grade-badge mb-2">
                <v-chip color="primary" dark small label>
                  <strong>ກຳໄລສຸດທິ</strong>
                </v-chip>
              </div>
              <h3 class="primary--text mb-1">{{ formatNumber(netProfit) }} LAK</h3>
              <div class="text--secondary mb-1">Net Profit</div>
              <v-chip color="primary" small outlined class="font-weight-bold">
                {{ profitMarginPercentage }}% ອັດຕາ
              </v-chip>
              <div class="mt-2">
                <v-progress-linear :value="profitMarginPercentage" color="primary" height="4" rounded></v-progress-linear>
                <div class="mt-1">{{ profitMarginPercentage }}% ອັດຕາກຳໄລ</div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="6" md="3">
            <v-card outlined class="grade-summary-card pa-3 text-center elevation-2">
              <v-icon color="orange" size="32" class="mb-2">mdi-chart-pie</v-icon>
              <div class="grade-badge mb-2">
                <v-chip color="orange" dark small label>
                  <strong>ຕົ້ນທຶນລວມ</strong>
                </v-chip>
              </div>
              <h3 class="orange--text mb-1">{{ formatNumber(totalCOGS + totalExpenses) }} LAK</h3>
              <div class="text--secondary mb-1">Total Costs</div>
              <v-chip color="orange" small outlined class="font-weight-bold">
                {{ costEfficiencyRate }}% ປະສິດທິພາບ
              </v-chip>
              <div class="mt-2">
                <v-progress-linear :value="costRatio" color="orange" height="4" rounded></v-progress-linear>
                <div class="mt-1">{{ costRatio.toFixed(1) }}% ຂອງລາຍຮັບ</div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="6" md="3">
            <v-card outlined class="grade-summary-card pa-3 text-center elevation-2">
              <v-icon color="info" size="32" class="mb-2">mdi-calculator</v-icon>
              <div class="grade-badge mb-2">
                <v-chip color="info" dark small label>
                  <strong>ຄ່າສະເລ່ຍ</strong>
                </v-chip>
              </div>
              <h3 class="info--text mb-1">{{ formatNumber(averageOrderValue) }} LAK</h3>
              <div class="text--secondary mb-1">Average Order Value</div>
              <v-chip color="info" small outlined class="font-weight-bold">
                ຕໍ່ບິນ
              </v-chip>
              <div class="mt-2">
                <v-progress-linear :value="100" color="info" height="4" rounded></v-progress-linear>
                <div class="mt-1">{{ totalOrders }} ຈຳນວນບິນ</div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Financial Statement Section -->
        <v-row class="mt-4">
          <v-col cols="12">
            <h3 class="mb-3">
              <v-icon left>mdi-file-document</v-icon>
              ລາຍງານທາງການເງິນລະອຽດ (Financial Statement)
            </h3>
          </v-col>
        </v-row>

        <!-- Income Section -->
        <v-row>
          <v-col cols="12" md="6">
            <v-card outlined class="grade-summary-card pa-4 elevation-2">
              <div class="grade-badge mb-3">
                <v-chip color="success" dark label>
                  <v-icon left>mdi-trending-up</v-icon>
                  <strong>Income ລາຍຮັບ</strong>
                </v-chip>
              </div>

              <div class="financial-rows">
                <div class="financial-row">
                  <span>Gross Sale</span>
                  <span class="font-weight-bold">{{ formatNumber(grandSaleTotal) }}</span>
                </div>
                <div class="financial-row negative">
                  <span>Return/Cancel</span>
                  <span>({{ formatNumber(grandSaleCancelTotal) }})</span>
                </div>
                <div class="financial-row negative">
                  <span>Discount</span>
                  <span>({{ formatNumber(grandSaleDiscountTotal) }})</span>
                </div>
                <v-divider class="my-2"></v-divider>
                <div class="financial-row">
                  <span>Net Sale</span>
                  <span class="font-weight-bold">{{ formatNumber(netSale) }}</span>
                </div>
                <div class="financial-row">
                  <span>Other Income</span>
                  <span class="font-weight-bold">{{ formatNumber(totalOtherIncome) }}</span>
                </div>
                <v-divider class="my-2"></v-divider>
                <div class="financial-row total">
                  <span class="success--text font-weight-bold">Total Revenue</span>
                  <span class="success--text font-weight-bold">{{ formatNumber(netSale + totalOtherIncome) }}</span>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- Cost of Goods Sold Section -->
          <v-col cols="12" md="6">
            <v-card outlined class="grade-summary-card pa-4 elevation-2">
              <div class="grade-badge mb-3">
                <v-chip color="red" dark label>
                  <v-icon left>mdi-package-variant</v-icon>
                  <strong>Cost of Goods Sold ຕົ້ນທຶນສິນຄ້າ</strong>
                </v-chip>
              </div>

              <div class="financial-rows">
                <div class="financial-row">
                  <span>Product Cost</span>
                  <span class="font-weight-bold">{{ formatNumber(grandSaleCost) }}</span>
                </div>
                <div class="financial-row">
                  <span>COD Fee</span>
                  <span class="font-weight-bold">{{ formatNumber(grandCODCost) }}</span>
                </div>
                <div class="financial-row">
                  <span>Cancellation Fee</span>
                  <span class="font-weight-bold">{{ formatNumber(grandCancellationCost) }}</span>
                </div>
                <v-divider class="my-2"></v-divider>
                <div class="financial-row total">
                  <span class="red--text font-weight-bold">Total COGS</span>
                  <span class="red--text font-weight-bold">{{ formatNumber(totalCOGS) }}</span>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Operating Expenses and Net Profit -->
        <v-row class="mt-2">
          <v-col cols="12" md="6">
            <v-card outlined class="grade-summary-card pa-4 elevation-2">
              <div class="grade-badge mb-3">
                <v-chip color="orange" dark label>
                  <v-icon left>mdi-office-building</v-icon>
                  <strong>Operating Expenses ລາຍຈ່າຍດຳເນີນງານ</strong>
                </v-chip>
              </div>

              <div class="financial-rows">
                <div class="financial-row">
                  <span>Staff Salary</span>
                  <span class="font-weight-bold">{{ formatNumber(staffSalaryExpense) }}</span>
                </div>
                <div class="financial-row">
                  <span>Advertising</span>
                  <span class="font-weight-bold">{{ formatNumber(advertisingExpense) }}</span>
                </div>
                <div class="financial-row">
                  <span>Office Expense</span>
                  <span class="font-weight-bold">{{ formatNumber(officeExpenseAmount) }}</span>
                </div>
                <div class="financial-row">
                  <span>Other Expenses</span>
                  <span class="font-weight-bold">{{ formatNumber(otherExpenses) }}</span>
                </div>
                <v-divider class="my-2"></v-divider>
                <div class="financial-row total">
                  <span class="orange--text font-weight-bold">Total Expenses</span>
                  <span class="orange--text font-weight-bold">{{ formatNumber(totalExpenses) }}</span>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- Net Profit Section -->
          <v-col cols="12" md="6">
            <v-card outlined class="grade-summary-card pa-4 elevation-2" color="primary" dark>
              <div class="grade-badge mb-3">
                <v-chip color="white" dark label>
                  <v-icon left color="primary">mdi-cash-multiple</v-icon>
                  <strong class="primary--text">Net Operating Profit ກຳໄລສຸດທິ</strong>
                </v-chip>
              </div>

              <div class="text-center">
                <h1 class="display-1 font-weight-bold white--text mb-3">
                  {{ formatNumber(netProfit) }} LAK
                </h1>
                <div class="title white--text mb-2">
                  Profit Margin: {{ profitMarginPercentage }}%
                </div>
                <v-progress-linear 
                  :value="Math.min(profitMarginPercentage, 100)" 
                  color="white" 
                  background-color="primary lighten-1"
                  height="8" 
                  rounded
                  class="mb-2"
                ></v-progress-linear>
                <div class="body-2 white--text" style="opacity: 0.8">
                  {{ netProfit >= 0 ? 'ທຸລະກິດມີກຳໄລ' : 'ທຸລະກິດຂາດທຶນ' }}
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Business Health Score Section -->
        <v-row class="mt-4">
          <v-col cols="12">
            <h3 class="mb-3">
              <v-icon left>mdi-heart-pulse</v-icon>
              ຄະແນນສຸຂະພາບທຸລະກິດ (Business Health Score)
            </h3>
          </v-col>
        </v-row>

        <!-- Health Score Cards -->
        <v-row>
          <v-col cols="6" md="3">
            <v-card outlined class="grade-summary-card pa-3 text-center elevation-2">
              <v-icon :color="profitabilityColor" size="32" class="mb-2">mdi-trending-up</v-icon>
              <div class="grade-badge mb-2">
                <v-chip :color="profitabilityColor" dark small label>
                  <strong>ກຳໄລ</strong>
                </v-chip>
              </div>
              <h3 :class="`${profitabilityColor}--text mb-1`">{{ profitabilityScore }}/25</h3>
              <div class="text--secondary mb-1">Profitability</div>
              <v-chip :color="profitabilityColor" small outlined class="font-weight-bold">
                {{ profitabilityGrade }}
              </v-chip>
              <div class="mt-2">
                <v-progress-linear :value="(profitabilityScore/25)*100" :color="profitabilityColor" height="4" rounded></v-progress-linear>
                <div class="mt-1">{{ ((profitabilityScore/25)*100).toFixed(0) }}%</div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="6" md="3">
            <v-card outlined class="grade-summary-card pa-3 text-center elevation-2">
              <v-icon :color="efficiencyColor" size="32" class="mb-2">mdi-speedometer</v-icon>
              <div class="grade-badge mb-2">
                <v-chip :color="efficiencyColor" dark small label>
                  <strong>ປະສິດທິພາບ</strong>
                </v-chip>
              </div>
              <h3 :class="`${efficiencyColor}--text mb-1`">{{ efficiencyScore }}/25</h3>
              <div class="text--secondary mb-1">Efficiency</div>
              <v-chip :color="efficiencyColor" small outlined class="font-weight-bold">
                {{ efficiencyGrade }}
              </v-chip>
              <div class="mt-2">
                <v-progress-linear :value="(efficiencyScore/25)*100" :color="efficiencyColor" height="4" rounded></v-progress-linear>
                <div class="mt-1">{{ ((efficiencyScore/25)*100).toFixed(0) }}%</div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="6" md="3">
            <v-card outlined class="grade-summary-card pa-3 text-center elevation-2">
              <v-icon :color="stabilityColor" size="32" class="mb-2">mdi-shield-check</v-icon>
              <div class="grade-badge mb-2">
                <v-chip :color="stabilityColor" dark small label>
                  <strong>ຄວາມໝັ້ນຄົງ</strong>
                </v-chip>
              </div>
              <h3 :class="`${stabilityColor}--text mb-1`">{{ stabilityScore }}/25</h3>
              <div class="text--secondary mb-1">Stability</div>
              <v-chip :color="stabilityColor" small outlined class="font-weight-bold">
                {{ stabilityGrade }}
              </v-chip>
              <div class="mt-2">
                <v-progress-linear :value="(stabilityScore/25)*100" :color="stabilityColor" height="4" rounded></v-progress-linear>
                <div class="mt-1">{{ ((stabilityScore/25)*100).toFixed(0) }}%</div>
              </div>
            </v-card>
          </v-col>

          <!-- Overall Health Score -->
          <v-col cols="6" md="3">
            <v-card outlined class="grade-summary-card pa-3 text-center elevation-2" :color="overallHealthColor" dark>
              <v-icon color="white" size="32" class="mb-2">mdi-heart</v-icon>
              <div class="grade-badge mb-2">
                <v-chip color="white" dark small label>
                  <strong :class="`${overallHealthColor}--text`">ລວມທັງໝົດ</strong>
                </v-chip>
              </div>
              <h3 class="white--text mb-1">{{ businessHealthScore }}/100</h3>
              <div class="white--text mb-1" style="opacity: 0.8">Overall Health</div>
              <v-chip color="white" small outlined class="font-weight-bold">
                <strong :class="`${overallHealthColor}--text`">{{ overallHealthGrade }}</strong>
              </v-chip>
              <div class="mt-2">
                <v-progress-linear :value="businessHealthScore" color="white" height="4" rounded></v-progress-linear>
                <div class="mt-1 white--text">{{ businessHealthScore }}%</div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Income and Expense Transaction Details -->
        <v-row class="mt-4">
          <v-col cols="12">
            <h3 class="mb-3">
              <v-icon left>mdi-receipt-text</v-icon>
              ລາຍລະອຽດລາຍຮັບ ແລະ ລາຍຈ່າຍ (Transaction Details)
            </h3>
          </v-col>
        </v-row>

        <!-- Income and Expense Cards -->
        <v-row>
          <!-- Income Transactions -->
          <v-col cols="12" md="6">
            <v-card outlined class="grade-summary-card elevation-2">
              <v-card-title class="success darken-1 white--text">
                <v-icon left color="white">mdi-cash-plus</v-icon>
                ລາຍຮັບອື່ນໆ (Other Income)
                <v-spacer></v-spacer>
                <v-chip color="white" dark small>
                  <span class="success--text font-weight-bold">{{ incomeData.length }} ລາຍການ</span>
                </v-chip>
              </v-card-title>
              <v-card-text class="pa-0">
                <div v-if="incomeData.length === 0" class="pa-4 text-center grey--text">
                  <v-icon size="48" color="grey lighten-1">mdi-inbox</v-icon>
                  <div>ບໍ່ມີລາຍຮັບອື່ນໃນໄລຍະນີ້</div>
                </div>
                <div v-else>
                  <div v-for="(income, index) in incomeData.slice(0, 5)" :key="income.id" 
                       class="financial-row pa-3" 
                       :class="{ 'grey lighten-5': index % 2 === 1 }">
                    <div class="flex-grow-1">
                      <div class="font-weight-bold">{{ income.payee }}</div>
                      <div class="caption grey--text">{{ income.notes }}</div>
                      <div class="caption">
                        <v-chip :color="getPaymentColor(income.payment?.payment_code)" 
                                small dark class="mr-1">
                          {{ income.payment?.payment_name }}
                        </v-chip>
                        <span class="grey--text">{{ formatDateShort(income.bookingDate) }}</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="font-weight-bold success--text">
                        +{{ formatNumber(income.totalAmount * income.rate) }}
                      </div>
                      <div class="caption grey--text">
                        {{ income.currency?.code }} 
                        <span v-if="income.rate !== 1">({{ formatNumber(income.rate) }})</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="incomeData.length > 5" class="pa-2 text-center">
                    <v-chip color="success" outlined small>
                      +{{ incomeData.length - 5 }} ລາຍການເພີ່ມເຕີມ
                    </v-chip>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions v-if="totalOtherIncome > 0" class="success lighten-4">
                <v-spacer></v-spacer>
                <div class="font-weight-bold success--text">
                  ລວມ: {{ formatNumber(totalOtherIncome) }} LAK
                </div>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Expense Transactions -->
          <v-col cols="12" md="6">
            <v-card outlined class="grade-summary-card elevation-2">
              <v-card-title class="red darken-1 white--text">
                <v-icon left color="white">mdi-cash-minus</v-icon>
                ລາຍຈ່າຍ (Expenses)
                <v-spacer></v-spacer>
                <v-chip color="white" dark small>
                  <span class="red--text font-weight-bold">{{ expenseData.length }} ລາຍການ</span>
                </v-chip>
              </v-card-title>
              <v-card-text class="pa-0">
                <div v-if="expenseData.length === 0" class="pa-4 text-center grey--text">
                  <v-icon size="48" color="grey lighten-1">mdi-inbox</v-icon>
                  <div>ບໍ່ມີລາຍຈ່າຍໃນໄລຍະນີ້</div>
                </div>
                <div v-else>
                  <div v-for="(expense, index) in expenseData.slice(0, 5)" :key="expense.id" 
                       class="financial-row pa-3" 
                       :class="{ 'grey lighten-5': index % 2 === 1 }">
                    <div class="flex-grow-1">
                      <div class="font-weight-bold">{{ expense.payee }}</div>
                      <div class="caption grey--text">{{ expense.notes }}</div>
                      <div class="caption">
                        <v-chip :color="getPaymentColor(expense.payment?.payment_code)" 
                                small dark class="mr-1">
                          {{ expense.payment?.payment_name }}
                        </v-chip>
                        <span class="grey--text">{{ formatDateShort(expense.bookingDate) }}</span>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="font-weight-bold red--text">
                        -{{ formatNumber(expense.totalAmount * expense.rate) }}
                      </div>
                      <div class="caption grey--text">
                        {{ expense.currency?.code }} 
                        <span v-if="expense.rate !== 1">({{ formatNumber(expense.rate) }})</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="expenseData.length > 5" class="pa-2 text-center">
                    <v-chip color="red" outlined small>
                      +{{ expenseData.length - 5 }} ລາຍການເພີ່ມເຕີມ
                    </v-chip>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions v-if="totalExpenses > 0" class="red lighten-4">
                <v-spacer></v-spacer>
                <div class="font-weight-bold red--text">
                  ລວມ: {{ formatNumber(totalExpenses) }} LAK
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Enhanced Total Summary Card -->
        <v-row class="mt-4">
          <v-col cols="12">
            <v-card outlined class="pa-4" color="success" dark>
              <h4 class="mb-3">
                <v-icon left>mdi-calculator</v-icon>
                ສະຫຼຸບລວມທັງໝົດ (Business Summary)
              </h4>
              <v-row>
                <v-col cols="6" md="2">
                  <div class="text-center">
                    <h2>{{ formatNumber(netSale + totalOtherIncome) }} LAK</h2>
                    <div>ລາຍຮັບລວມ</div>
                  </div>
                </v-col>
                <v-col cols="6" md="2">
                  <div class="text-center">
                    <h2>{{ formatNumber(netProfit) }} LAK</h2>
                    <div>ກຳໄລສຸດທິ</div>
                  </div>
                </v-col>
                <v-col cols="6" md="2">
                  <div class="text-center">
                    <h2>{{ profitMarginPercentage }}%</h2>
                    <div>ອັດຕາກຳໄລ</div>
                  </div>
                </v-col>
                <v-col cols="6" md="2">
                  <div class="text-center">
                    <h2>{{ formatNumber(totalOrders) }}</h2>
                    <div>ຈຳນວນບິນ</div>
                  </div>
                </v-col>
                <v-col cols="6" md="2">
                  <div class="text-center">
                    <h2>{{ formatNumber(averageOrderValue) }} LAK</h2>
                    <div>ຄ່າສະເລ່ຍຕໍ່ບິນ</div>
                  </div>
                </v-col>
                <v-col cols="6" md="2">
                  <div class="text-center">
                    <h2>{{ businessHealthScore }}</h2>
                    <div>ຄະແນນຄວາມສົມບູນຂອງທຸລະກິດ</div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
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
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
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
      // Financial data
      incomeData: [],
      expenseData: [],
      staffSalary: 0,
      advertising: 0,
      officeExpense: 0,
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

    // Sales calculations
    grandSaleTotal() {
      return this.loaddata.reduce((total, item) => total + item.total, 0);
    },
    grandSaleDiscountTotal() {
      return this.loaddata.filter(el => el.isActive == true).reduce((total, item) => total + item.discount, 0);
    },
    grandSaleCancelTotal() {
      return this.loaddata.filter(el => el.isActive == false).reduce((total, item) => total + item.total, 0);
    },
    grandSaleCost() {
      let totalSaleValue = 0;
      for (const sale of this.loaddata.filter(el => el.isActive == true)) {
        for (const line of sale.lines) {
          for (const card of line.cards) {
            totalSaleValue += card.cost;
          }
        }
      }
      return totalSaleValue;
    },
    grandCODCost() {
      let totalCOD = 0;
      for (const sale of this.loaddata.filter(el => el.isActive == true)) {
        if (sale.dynamic_customer) {
          totalCOD += sale.dynamic_customer.cod_fee;
        }
      }
      return totalCOD;
    },
    grandCancellationCost() {
      let totalCancellationFee = 0;
      for (const sale of this.loaddata.filter(el => el.isActive == false)) {
        if (sale.dynamic_customer) {
          totalCancellationFee += sale.dynamic_customer.cancel_fee;
        }
      }
      return totalCancellationFee;
    },

    // Enhanced computations
    netSale() {
      return this.grandSaleTotal - (this.grandSaleCancelTotal + this.grandSaleDiscountTotal);
    },
    totalCOGS() {
      return this.grandSaleCost + this.grandCODCost + this.grandCancellationCost;
    },
    
    // Real financial data calculations
    totalOtherIncome() {
      return this.incomeData
        .filter(income => income.isActive)
        .reduce((total, income) => {
          return total + (income.totalAmount * income.rate);
        }, 0);
    },
    
    totalExpenses() {
      return this.expenseData
        .filter(expense => expense.isActive)
        .reduce((total, expense) => {
          return total + (expense.totalAmount * expense.rate);
        }, 0);
    },
    
    // Categorized expenses based on notes
    expenseByCategory() {
      const categories = {
        staffSalary: 0,
        advertising: 0,
        officeExpense: 0,
        other: 0
      };
      
      this.expenseData
        .filter(expense => expense.isActive)
        .forEach(expense => {
          const amount = expense.totalAmount * expense.rate;
          const notes = (expense.notes || '').toUpperCase();
          
          if (notes.includes('STAFF') || notes.includes('SALARY') || notes.includes('ພະນັກງານ')) {
            categories.staffSalary += amount;
          } else if (notes.includes('ADVERTISING') || notes.includes('ADS') || notes.includes('ໂຄສະນາ')) {
            categories.advertising += amount;
          } else if (notes.includes('OFFICE') || notes.includes('ຫ້ອງການ')) {
            categories.officeExpense += amount;
          } else {
            categories.other += amount;
          }
        });
      
      return categories;
    },
    
    staffSalaryExpense() {
      return this.expenseByCategory.staffSalary;
    },
    
    advertisingExpense() {
      return this.expenseByCategory.advertising;
    },
    
    officeExpenseAmount() {
      return this.expenseByCategory.officeExpense;
    },
    
    otherExpenses() {
      return this.expenseByCategory.other;
    },
    
    netProfit() {
      return this.netSale + this.totalOtherIncome - this.totalCOGS - this.totalExpenses;
    },
    profitMarginPercentage() {
      return this.netSale > 0 ? Math.round((this.netProfit / this.netSale) * 100) : 0;
    },
    totalOrders() {
      return this.loaddata.filter(el => el.isActive).length;
    },
    costRatio() {
      return this.netSale > 0 ? ((this.totalCOGS + this.totalExpenses) / this.netSale) * 100 : 0;
    },
    costEfficiencyRate() {
      return this.netSale > 0 ? Math.round(((this.netSale - this.totalCOGS) / this.netSale) * 100) : 0;
    },
    averageOrderValue() {
      return this.totalOrders > 0 ? this.netSale / this.totalOrders : 0;
    },

    // Business Health Score calculations
    profitabilityScore() {
      const margin = this.profitMarginPercentage;
      if (margin >= 20) return 25;
      if (margin >= 15) return 20;
      if (margin >= 10) return 15;
      if (margin >= 5) return 10;
      if (margin > 0) return 5;
      return 0;
    },
    efficiencyScore() {
      const efficiency = this.costEfficiencyRate;
      if (efficiency >= 80) return 25;
      if (efficiency >= 70) return 20;
      if (efficiency >= 60) return 15;
      if (efficiency >= 50) return 10;
      if (efficiency >= 40) return 5;
      return 0;
    },
    stabilityScore() {
      const returnRate = this.grandSaleCancelTotal / this.grandSaleTotal * 100 || 0;
      if (returnRate <= 2) return 25;
      if (returnRate <= 5) return 20;
      if (returnRate <= 10) return 15;
      if (returnRate <= 15) return 10;
      if (returnRate <= 20) return 5;
      return 0;
    },
    businessHealthScore() {
      return this.profitabilityScore + this.efficiencyScore + this.stabilityScore + 25; // +25 for growth placeholder
    },

    // Health score colors and grades
    profitabilityColor() {
      if (this.profitabilityScore >= 20) return 'success';
      if (this.profitabilityScore >= 15) return 'warning';
      return 'error';
    },
    efficiencyColor() {
      if (this.efficiencyScore >= 20) return 'success';
      if (this.efficiencyScore >= 15) return 'warning';
      return 'error';
    },
    stabilityColor() {
      if (this.stabilityScore >= 20) return 'success';
      if (this.stabilityScore >= 15) return 'warning';
      return 'error';
    },
    overallHealthColor() {
      if (this.businessHealthScore >= 80) return 'success';
      if (this.businessHealthScore >= 60) return 'warning';
      return 'error';
    },

    // Grades
    profitabilityGrade() {
      if (this.profitabilityScore >= 20) return 'A';
      if (this.profitabilityScore >= 15) return 'B';
      if (this.profitabilityScore >= 10) return 'C';
      if (this.profitabilityScore >= 5) return 'D';
      return 'F';
    },
    efficiencyGrade() {
      if (this.efficiencyScore >= 20) return 'A';
      if (this.efficiencyScore >= 15) return 'B';
      if (this.efficiencyScore >= 10) return 'C';
      if (this.efficiencyScore >= 5) return 'D';
      return 'F';
    },
    stabilityGrade() {
      if (this.stabilityScore >= 20) return 'A';
      if (this.stabilityScore >= 15) return 'B';
      if (this.stabilityScore >= 10) return 'C';
      if (this.stabilityScore >= 5) return 'D';
      return 'F';
    },
    overallHealthGrade() {
      if (this.businessHealthScore >= 90) return 'A+';
      if (this.businessHealthScore >= 80) return 'A';
      if (this.businessHealthScore >= 70) return 'B';
      if (this.businessHealthScore >= 60) return 'C';
      if (this.businessHealthScore >= 50) return 'D';
      return 'F';
    },
  },

  methods: {
    formatNumber(value) {
      return getFormatNum(value)
    },
    formatDate(date) {
      if (!date) return null
      const formattedDate = this.formatDateToISO(date);
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date);
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, '0');
      const day = `${date.getDate()}`.padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    async fetchData() {
      this.isloading = true
      const date = {
        startDate: this.date,
        endDate: this.date2,
      }
      
      try {
        // Fetch sales data
        const salesResponse = await this.$axios.get(`api/sale/findDetailByDate`, { params: { date } })
        this.loaddata = salesResponse.data;
        
        // Fetch income data
        try {
          const incomeResponse = await this.$axios.get(`api/finanicial/ar/header/findByDate`, { params: { date } })
          this.incomeData = incomeResponse.data;
          console.log('Income data loaded:', this.incomeData.length, 'transactions');
        } catch (incomeError) {
          console.warn('Could not load income data:', incomeError);
          this.incomeData = [];
        }
        
        // Fetch expense data
        try {
          const expenseResponse = await this.$axios.get(`api/finanicial/ap/header/findByDate`, { params: { date } })
          this.expenseData = expenseResponse.data;
          console.log('Expense data loaded:', this.expenseData.length, 'transactions');
        } catch (expenseError) {
          console.warn('Could not load expense data:', expenseError);
          this.expenseData = [];
        }
        
      } catch (error) {
        this.message = error
        console.log('Error: ' + error)
      }
      
      this.isloading = false
    },
    exportToExcel() {
      // Excel export implementation
      console.log('Exporting to Excel...');
    },
    printReport() {
      // Print implementation
      console.log('Printing report...');
    },
    
    // Payment helper methods
    getPaymentColor(paymentCode) {
      if (!paymentCode) return 'primary';
      
      const colorMap = {
        'CASH': 'green',
        'QR': 'purple',
        'TRANSFER': 'blue',
        'TRANSFER_BCEL': 'blue',
        'BCEL': 'blue',
        'BCEL_TRANSFER': 'blue',
        'COD': 'orange',
        'CREDIT': 'red',
        'CREDIT_CARD': 'red',
        'DEBIT_CARD': 'indigo',
        'CARD': 'indigo',
        'BANK': 'teal',
        'BANK_TRANSFER': 'teal',
        'MOBILE': 'pink',
        'MOBILE_MONEY': 'pink',
        'WALLET': 'amber',
        'DIGITAL_WALLET': 'amber'
      }
      
      if (colorMap[paymentCode]) {
        return colorMap[paymentCode]
      }
      
      const code = paymentCode.toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'green'
      if (code.includes('QR') || code.includes('SCAN')) return 'purple'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue'
      if (code.includes('CARD') || code.includes('CREDIT') || code.includes('DEBIT')) return 'indigo'
      if (code.includes('COD') || code.includes('DELIVERY')) return 'orange'
      if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink'
      if (code.includes('WALLET')) return 'amber'
      
      return 'primary'
    },
    
    formatDateShort(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB');
    },
  },
}
</script>

<style scoped>
/* Using Noto Sans Lao font family for all text */
.business-performance-container {
  font-family: 'Noto Sans Lao', sans-serif;
}

.text-h5,
.grey,
* {
  font-family: 'Noto Sans Lao', sans-serif;
}

.header-chips {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.main-content-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Grade Summary Cards Styling - Same as the original design */
.grade-summary-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.grade-summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

.grade-badge {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grade-summary-card .v-icon {
  margin-bottom: 8px;
}

.grade-summary-card h3 {
  font-weight: 600;
  letter-spacing: -0.5px;
  font-family: 'Noto Sans Lao', sans-serif;
}

.grade-summary-card .v-progress-linear {
  border-radius: 4px;
}

/* Financial rows styling */
.financial-rows {
  width: 100%;
}

.financial-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  font-family: 'Noto Sans Lao', sans-serif;
}

.financial-row:last-child {
  border-bottom: none;
}

.financial-row.negative span:last-child {
  color: #f44336;
}

.financial-row.total {
  background: #f8f9fa;
  padding: 12px 16px;
  margin: 8px -16px 0;
  border-radius: 8px;
}

/* Responsive design improvements */
@media (max-width: 960px) {
  .header-chips {
    flex-direction: column;
    gap: 8px;
  }
  
  .grade-summary-card {
    margin-bottom: 16px;
  }

  .grade-summary-card h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .financial-row {
    font-size: 0.9rem;
  }

  .grade-summary-card h3 {
    font-size: 1.1rem;
  }
}

@media print {
  .v-btn,
  .v-text-field,
  .v-select {
    display: none !important;
  }
}
</style>