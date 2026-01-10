<template>
  <div class="pl-report-container notosans-lao">
    <!-- Header Section -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary white--text py-3">
            <v-icon color="white" class="mr-2">mdi-chart-line</v-icon>
            <span>ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ (P&L Report)</span>
            <v-spacer />
            <!-- Export to Excel Button -->
            <v-btn 
              color="success" 
              @click="exportToExcel"
              :loading="exporting"
              class="mr-2"
            >
              <v-icon left>mdi-file-excel</v-icon>
              ສົ່ງອອກ Excel
            </v-btn>
            <!-- Refresh Button -->
            <v-btn 
              color="white" 
              text 
              @click="fetchData"
              :loading="loading"
            >
              <v-icon left>mdi-refresh</v-icon>
              ໂຫຼດໃໝ່
            </v-btn>
          </v-card-title>

          <!-- Date Filter Section -->
          <v-card-text class="pa-4">
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="filters.fromDate"
                  label="ວັນທີເລີ່ມຕົ້ນ"
                  type="date"
                  outlined
                  dense
                  prepend-inner-icon="mdi-calendar-start"
                  :rules="[rules.required, rules.validFromDate]"
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="filters.toDate"
                  label="ວັນທີສິ້ນສຸດ"
                  type="date"
                  outlined
                  dense
                  prepend-inner-icon="mdi-calendar-end"
                  :rules="[rules.required, rules.validToDate]"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-btn 
                  color="primary" 
                  block 
                  @click="generateReport"
                  :loading="loading"
                  :disabled="!isValidDateRange"
                >
                  <v-icon left>mdi-chart-box</v-icon>
                  ສ້າງລາຍງານ
                </v-btn>
              </v-col>
              <v-col cols="12" md="2">
                <v-btn 
                  color="secondary" 
                  outlined 
                  block 
                  @click="setCurrentMonth"
                >
                  <v-icon left>mdi-calendar-month</v-icon>
                  ເດືອນນີ້
                </v-btn>
              </v-col>
              <v-col cols="12" md="2">
                <v-btn 
                  color="secondary" 
                  outlined 
                  block 
                  @click="setCurrentYear"
                >
                  <v-icon left>mdi-calendar-range</v-icon>
                  ປີນີ້
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- P&L Summary Cards -->
    <v-row class="mt-4">
      <v-col cols="12" md="2">
        <v-card class="text-center" :loading="loading">
          <v-card-text class="pb-2">
            <v-icon size="40" color="success">mdi-cash-plus</v-icon>
            <h3 class="mt-2 text-subtitle-1">ລາຍຮັບລວມ</h3>
            <p class="text-caption grey--text">Total Revenue</p>
            <h2 class="text-h5 success--text font-weight-bold">
              {{ formatCurrency(totalRevenueLAK) }}
            </h2>
            <p class="text-caption grey--text mt-1">LAK</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn 
              text 
              small 
              color="success" 
              @click="showRevenueDetails = true"
              :disabled="receiveRecords.length === 0"
            >
              <v-icon small left>mdi-eye</v-icon>
              ລາຍລະອຽດ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="2">
        <v-card class="text-center" :loading="loading">
          <v-card-text class="pb-2">
            <v-icon size="40" color="error">mdi-cash-minus</v-icon>
            <h3 class="mt-2 text-subtitle-1">ລາຍຈ່າຍລວມ</h3>
            <p class="text-caption grey--text">Total Expenses</p>
            <h2 class="text-h5 error--text font-weight-bold">
              {{ formatCurrency(totalExpenseLAK) }}
            </h2>
            <p class="text-caption grey--text mt-1">LAK</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn 
              text 
              small 
              color="error" 
              @click="showExpenseDetails = true"
              :disabled="expenseRecords.length === 0"
            >
              <v-icon small left>mdi-eye</v-icon>
              ລາຍລະອຽດ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="2">
        <v-card class="text-center" :loading="loading">
          <v-card-text class="pb-2">
            <v-icon 
              size="40" 
              :color="netProfitLoss >= 0 ? 'success' : 'error'"
            >
              {{ netProfitLoss >= 0 ? 'mdi-trending-up' : 'mdi-trending-down' }}
            </v-icon>
            <h3 class="mt-2 text-subtitle-1">
              {{ netProfitLoss >= 0 ? 'ກຳໄລສຸດທິ' : 'ຂາດທຶນສຸດທິ' }}
            </h3>
            <p class="text-caption grey--text">
              {{ netProfitLoss >= 0 ? 'Net Profit' : 'Net Loss' }}
            </p>
            <h2 
              class="text-h5 font-weight-bold"
              :class="netProfitLoss >= 0 ? 'success--text' : 'error--text'"
            >
              {{ formatCurrency(Math.abs(netProfitLoss)) }}
            </h2>
            <p class="text-caption grey--text mt-1">LAK</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn 
              text 
              small 
              :color="netProfitLoss >= 0 ? 'success' : 'error'"
              @click="showPLBreakdown = true"
              :disabled="!hasData"
            >
              <v-icon small left>mdi-chart-pie</v-icon>
              ວິເຄາະ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="2">
        <v-card class="text-center" :loading="loading">
          <v-card-text class="pb-2">
            <v-icon size="40" color="info">mdi-percent</v-icon>
            <h3 class="mt-2 text-subtitle-1">ອັດຕາກຳໄລ</h3>
            <p class="text-caption grey--text">Profit Margin</p>
            <h2 
              class="text-h5 font-weight-bold"
              :class="profitMargin >= 0 ? 'info--text' : 'error--text'"
            >
              {{ formatPercentage(profitMargin) }}%
            </h2>
            <p class="text-caption grey--text mt-1">
              {{ profitMargin >= 0 ? 'ກຳໄລ' : 'ຂາດທຶນ' }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- NEW: Transaction Code Analysis Cards -->
      <v-col cols="12" md="2">
        <v-card class="text-center" :loading="loading">
          <v-card-text class="pb-2">
            <v-icon size="40" color="purple">mdi-code-tags</v-icon>
            <h3 class="mt-2 text-subtitle-1">ລະຫັດລາຍຮັບ</h3>
            <p class="text-caption grey--text">Revenue Codes</p>
            <h2 class="text-h5 purple--text font-weight-bold">
              {{ Object.keys(revenueByTransactionCode).length }}
            </h2>
            <p class="text-caption grey--text mt-1">ປະເພດ</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn 
              text 
              small 
              color="purple" 
              @click="showRevenueCodeBreakdown = true"
              :disabled="Object.keys(revenueByTransactionCode).length === 0"
            >
              <v-icon small left>mdi-eye</v-icon>
              ວິເຄາະ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="2">
        <v-card class="text-center" :loading="loading">
          <v-card-text class="pb-2">
            <v-icon size="40" color="orange">mdi-code-tags</v-icon>
            <h3 class="mt-2 text-subtitle-1">ລະຫັດລາຍຈ່າຍ</h3>
            <p class="text-caption grey--text">Expense Codes</p>
            <h2 class="text-h5 orange--text font-weight-bold">
              {{ Object.keys(expenseByTransactionCode).length }}
            </h2>
            <p class="text-caption grey--text mt-1">ປະເພດ</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn 
              text 
              small 
              color="orange" 
              @click="showExpenseCodeBreakdown = true"
              :disabled="Object.keys(expenseByTransactionCode).length === 0"
            >
              <v-icon small left>mdi-eye</v-icon>
              ວິເຄາະ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Transaction Code Analysis Charts -->
    <v-row class="mt-4" v-if="hasData">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="success white--text">
            <v-icon color="white" class="mr-2">mdi-chart-donut</v-icon>
            ລາຍຮັບຕາມລະຫັດ Transaction
          </v-card-title>
          <v-card-text>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>ລະຫັດ</th>
                    <th>ຄຳອະທິບາຍ</th>
                    <th class="text-right">ຈຳນວນ (LAK)</th>
                    <th class="text-right">%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="(item, code) in revenueByTransactionCode" 
                    :key="`revenue-${code}`"
                  >
                    <td>
                      <v-chip 
                        small 
                        :color="code === 'UN-ALLOCATED' ? 'grey' : 'success'" 
                        text-color="white"
                      >
                        {{ code }}
                      </v-chip>
                    </td>
                    <td>{{ item.description }}</td>
                    <td class="text-right font-weight-bold">
                      {{ formatCurrency(item.amount) }}
                    </td>
                    <td class="text-right">
                      {{ formatPercentage((item.amount / totalRevenueLAK) * 100) }}%
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="error white--text">
            <v-icon color="white" class="mr-2">mdi-chart-donut</v-icon>
            ລາຍຈ່າຍຕາມລະຫັດ Transaction
          </v-card-title>
          <v-card-text>
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>ລະຫັດ</th>
                    <th>ຄຳອະທິບາຍ</th>
                    <th class="text-right">ຈຳນວນ (LAK)</th>
                    <th class="text-right">%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="(item, code) in expenseByTransactionCode" 
                    :key="`expense-${code}`"
                  >
                    <td>
                      <v-chip 
                        small 
                        :color="code === 'UN-ALLOCATED' ? 'grey' : 'error'" 
                        text-color="white"
                      >
                        {{ code }}
                      </v-chip>
                    </td>
                    <td>{{ item.description }}</td>
                    <td class="text-right font-weight-bold">
                      {{ formatCurrency(item.amount) }}
                    </td>
                    <td class="text-right">
                      {{ formatPercentage((item.amount / totalExpenseLAK) * 100) }}%
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Detailed Breakdown Chart -->
    <v-row class="mt-4" v-if="hasData">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-chart-bar</v-icon>
            ການວິເຄາະລາຍຮັບ ແລະ ລາຍຈ່າຍ
          </v-card-title>
          <v-card-text>
            <!-- Simple bar chart representation -->
            <div class="chart-container">
              <div class="chart-bar-wrapper">
                <div class="chart-label">ລາຍຮັບ</div>
                <div class="chart-bar">
                  <div 
                    class="chart-fill success" 
                    :style="{ width: revenuePercentage + '%' }"
                  ></div>
                </div>
                <div class="chart-value">{{ formatCurrency(totalRevenueLAK) }} LAK</div>
              </div>
              <div class="chart-bar-wrapper">
                <div class="chart-label">ລາຍຈ່າຍ</div>
                <div class="chart-bar">
                  <div 
                    class="chart-fill error" 
                    :style="{ width: expensePercentage + '%' }"
                  ></div>
                </div>
                <div class="chart-value">{{ formatCurrency(totalExpenseLAK) }} LAK</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-information</v-icon>
            ຂໍ້ມູນເພີ່ມເຕີມ
          </v-card-title>
          <v-card-text>
            <v-simple-table dense>
              <tbody>
                <tr>
                  <td class="font-weight-bold">ໄລຍະເວລາ:</td>
                  <td>{{ formatDateRange() }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ຈຳນວນລາຍຮັບ:</td>
                  <td>{{ receiveRecords.length }} ລາຍການ</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ຈຳນວນລາຍຈ່າຍ:</td>
                  <td>{{ expenseRecords.length }} ລາຍການ</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ປະເພດລາຍຮັບ:</td>
                  <td>{{ Object.keys(revenueByTransactionCode).length }} ປະເພດ</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ປະເພດລາຍຈ່າຍ:</td>
                  <td>{{ Object.keys(expenseByTransactionCode).length }} ປະເພດ</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ສະກຸນເງິນທີ່ນຳໃຊ້:</td>
                  <td>{{ uniqueCurrencies.join(', ') }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ສ້າງລາຍງານ:</td>
                  <td>{{ formatDate(new Date()) }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- No Data State -->
    <v-row class="mt-4" v-if="!hasData && !loading">
      <v-col cols="12">
        <v-card>
          <v-card-text class="text-center py-8">
            <v-icon size="64" color="grey">mdi-chart-line-variant</v-icon>
            <h3 class="mt-4 text-h6 grey--text">ບໍ່ມີຂໍ້ມູນໃນໄລຍະທີ່ເລືອກ</h3>
            <p class="text-caption grey--text mt-2">
              ກະລຸນາເລືອກໄລຍະເວລາທີ່ມີຂໍ້ມູນລາຍຮັບ ຫຼື ລາຍຈ່າຍ
            </p>
            <v-btn 
              color="primary" 
              outlined 
              class="mt-4" 
              @click="setCurrentMonth"
            >
              ລອງເບິ່ງເດືອນນີ້
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Revenue Details Dialog -->
    <v-dialog v-model="showRevenueDetails" max-width="1000px" scrollable>
      <v-card>
        <v-card-title class="success white--text">
          <v-icon color="white" class="mr-2">mdi-cash-plus</v-icon>
          ລາຍລະອຽດລາຍຮັບ
          <v-spacer />
          <v-btn icon dark @click="showRevenueDetails = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-data-table
            :headers="revenueHeaders"
            :items="revenueDetailItems"
            :items-per-page="10"
            class="elevation-0"
            dense
          >
            <template v-slot:item.receivedDate="{ item }">
              {{ formatDate(item.receivedDate) }}
            </template>
            <template v-slot:item.originalAmount="{ item }">
              <div class="text-right">
                {{ formatCurrency(item.originalAmount) }}
                <br>
                <small class="grey--text">{{ item.currencyCode }}</small>
              </div>
            </template>
            <template v-slot:item.lakAmount="{ item }">
              <div class="text-right font-weight-bold">
                {{ formatCurrency(item.lakAmount) }}
              </div>
            </template>
            <template v-slot:item.transactionCode="{ item }">
              <v-chip 
                small 
                :color="item.transactionCode === 'UN-ALLOCATED' ? 'grey' : 'success'" 
                text-color="white"
              >
                {{ item.transactionCode }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Expense Details Dialog -->
    <v-dialog v-model="showExpenseDetails" max-width="1000px" scrollable>
      <v-card>
        <v-card-title class="error white--text">
          <v-icon color="white" class="mr-2">mdi-cash-minus</v-icon>
          ລາຍລະອຽດລາຍຈ່າຍ
          <v-spacer />
          <v-btn icon dark @click="showExpenseDetails = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-data-table
            :headers="expenseHeaders"
            :items="expenseDetailItems"
            :items-per-page="10"
            class="elevation-0"
            dense
          >
            <template v-slot:item.settlementDate="{ item }">
              {{ formatDate(item.settlementDate) }}
            </template>
            <template v-slot:item.originalAmount="{ item }">
              <div class="text-right">
                {{ formatCurrency(item.originalAmount) }}
                <br>
                <small class="grey--text">{{ item.currencyCode }}</small>
              </div>
            </template>
            <template v-slot:item.lakAmount="{ item }">
              <div class="text-right font-weight-bold">
                {{ formatCurrency(item.lakAmount) }}
              </div>
            </template>
            <template v-slot:item.transactionCode="{ item }">
              <v-chip 
                small 
                :color="item.transactionCode === 'UN-ALLOCATED' ? 'grey' : 'error'" 
                text-color="white"
              >
                {{ item.transactionCode }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Revenue Code Breakdown Dialog -->
    <v-dialog v-model="showRevenueCodeBreakdown" max-width="800px" scrollable>
      <v-card>
        <v-card-title class="purple white--text">
          <v-icon color="white" class="mr-2">mdi-code-tags</v-icon>
          ວິເຄາະລາຍຮັບຕາມລະຫັດ Transaction
          <v-spacer />
          <v-btn icon dark @click="showRevenueCodeBreakdown = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-card 
            v-for="(item, code) in revenueByTransactionCode" 
            :key="`revenue-card-${code}`"
            class="mb-3"
            outlined
          >
            <v-card-text class="pb-2">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <v-chip 
                    :color="code === 'UN-ALLOCATED' ? 'grey' : 'success'" 
                    text-color="white"
                    class="mb-2"
                  >
                    {{ code }}
                  </v-chip>
                  <div class="text-subtitle-2">{{ item.description }}</div>
                  <div class="text-caption grey--text">{{ item.count }} ລາຍການ</div>
                </div>
                <div class="text-right">
                  <div class="text-h6 success--text font-weight-bold">
                    {{ formatCurrency(item.amount) }} LAK
                  </div>
                  <div class="text-caption">
                    {{ formatPercentage((item.amount / totalRevenueLAK) * 100) }}% ຂອງລາຍຮັບລວມ
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Expense Code Breakdown Dialog -->
    <v-dialog v-model="showExpenseCodeBreakdown" max-width="800px" scrollable>
      <v-card>
        <v-card-title class="orange white--text">
          <v-icon color="white" class="mr-2">mdi-code-tags</v-icon>
          ວິເຄາະລາຍຈ່າຍຕາມລະຫັດ Transaction
          <v-spacer />
          <v-btn icon dark @click="showExpenseCodeBreakdown = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-card 
            v-for="(item, code) in expenseByTransactionCode" 
            :key="`expense-card-${code}`"
            class="mb-3"
            outlined
          >
            <v-card-text class="pb-2">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <v-chip 
                    :color="code === 'UN-ALLOCATED' ? 'grey' : 'error'" 
                    text-color="white"
                    class="mb-2"
                  >
                    {{ code }}
                  </v-chip>
                  <div class="text-subtitle-2">{{ item.description }}</div>
                  <div class="text-caption grey--text">{{ item.count }} ລາຍການ</div>
                </div>
                <div class="text-right">
                  <div class="text-h6 error--text font-weight-bold">
                    {{ formatCurrency(item.amount) }} LAK
                  </div>
                  <div class="text-caption">
                    {{ formatPercentage((item.amount / totalExpenseLAK) * 100) }}% ຂອງລາຍຈ່າຍລວມ
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- P&L Breakdown Dialog -->
    <v-dialog v-model="showPLBreakdown" max-width="600px">
      <v-card>
        <v-card-title class="info white--text">
          <v-icon color="white" class="mr-2">mdi-chart-pie</v-icon>
          ການວິເຄາະກຳໄລ / ຂາດທຶນ
          <v-spacer />
          <v-btn icon dark @click="showPLBreakdown = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-4">
          <div class="breakdown-item">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="font-weight-bold">ລາຍຮັບລວມ:</span>
              <span class="success--text font-weight-bold">
                +{{ formatCurrency(totalRevenueLAK) }} LAK
              </span>
            </div>
          </div>
          <v-divider class="my-3" />
          <div class="breakdown-item">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="font-weight-bold">ລາຍຈ່າຍລວມ:</span>
              <span class="error--text font-weight-bold">
                -{{ formatCurrency(totalExpenseLAK) }} LAK
              </span>
            </div>
          </div>
          <v-divider class="my-3" />
          <div class="breakdown-item">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-h6 font-weight-bold">
                {{ netProfitLoss >= 0 ? 'ກຳໄລສຸດທິ:' : 'ຂາດທຶນສຸດທິ:' }}
              </span>
              <span 
                class="text-h6 font-weight-bold"
                :class="netProfitLoss >= 0 ? 'success--text' : 'error--text'"
              >
                {{ netProfitLoss >= 0 ? '+' : '-' }}{{ formatCurrency(Math.abs(netProfitLoss)) }} LAK
              </span>
            </div>
          </div>
          <div class="mt-4">
            <v-chip
              :color="netProfitLoss >= 0 ? 'success' : 'error'"
              text-color="white"
              small
            >
              ອັດຕາກຳໄລ: {{ formatPercentage(profitMargin) }}%
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Export Progress Snackbar -->
    <v-snackbar
      v-model="showExportProgress"
      :timeout="-1"
      color="info"
      bottom
      right
    >
      <v-icon left>mdi-download</v-icon>
      ກຳລັງສ້າງລາຍງານ Excel...
      <v-progress-linear
        indeterminate
        color="white"
        class="mb-0 mt-2"
      ></v-progress-linear>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'ProfitLossReport',
  
  data() {
    return {
      loading: false,
      exporting: false,
      showExportProgress: false,
      showRevenueDetails: false,
      showExpenseDetails: false,
      showPLBreakdown: false,
      showRevenueCodeBreakdown: false,
      showExpenseCodeBreakdown: false,
      
      // Date filters
      filters: {
        fromDate: '',
        toDate: ''
      },
      
      // Data arrays
      receiveRecords: [],
      expenseRecords: [],
      currencies: [],
      
      // Validation rules
      rules: {
        required: v => !!v || 'ຈຳເປັນຕ້ອງມີ',
        validFromDate: v => {
          if (!v || !this.filters.toDate) return true
          return new Date(v) <= new Date(this.filters.toDate) || 'ວັນທີເລີ່ມຕົ້ນຕ້ອງນ້ອຍກວ່າວັນທີສິ້ນສຸດ'
        },
        validToDate: v => {
          if (!v || !this.filters.fromDate) return true
          return new Date(v) >= new Date(this.filters.fromDate) || 'ວັນທີສິ້ນສຸດຕ້ອງໃຫຍ່ກວ່າວັນທີເລີ່ມຕົ້ນ'
        }
      },
      
      // Table headers
      revenueHeaders: [
        { text: 'ເລກທີໃບຮັບ', value: 'receiptNumber', width: '140px' },
        { text: 'ວັນທີ', value: 'receivedDate', width: '110px' },
        { text: 'ຈຳນວນເງິນ', value: 'originalAmount', align: 'end', width: '130px' },
        { text: 'ຈຳນວນ LAK', value: 'lakAmount', align: 'end', width: '130px' },
        { text: 'ລະຫັດ Txn', value: 'transactionCode', width: '120px' },
        { text: 'ອ້າງອີງ', value: 'referenceNumber', width: '110px' }
      ],
      
      expenseHeaders: [
        { text: 'ລະຫັດ', value: 'id', width: '80px' },
        { text: 'ວັນທີ', value: 'settlementDate', width: '110px' },
        { text: 'ຈຳນວນເງິນ', value: 'originalAmount', align: 'end', width: '130px' },
        { text: 'ຈຳນວນ LAK', value: 'lakAmount', align: 'end', width: '130px' },
        { text: 'ລະຫັດ Txn', value: 'transactionCode', width: '120px' },
        { text: 'ອ້າງອີງ', value: 'reference', width: '110px' }
      ]
    }
  },
  
  computed: {
    /**
     * Check if selected date range is valid
     */
    isValidDateRange() {
      return this.filters.fromDate && 
             this.filters.toDate && 
             new Date(this.filters.fromDate) <= new Date(this.filters.toDate)
    },
    
    /**
     * Check if we have any data to show
     */
    hasData() {
      return this.receiveRecords.length > 0 || this.expenseRecords.length > 0
    },
    
    /**
     * Calculate total revenue in LAK
     * Convert all receive records to LAK using: amount * exchangeRate
     */
    totalRevenueLAK() {
      return this.receiveRecords.reduce((total, record) => {
        const lakAmount = this.convertToLAK(
          record.totalReceivedAmount, 
          record.exchangeRate, 
          record.currency
        )
        return total + lakAmount
      }, 0)
    },
    
    /**
     * Calculate total expenses in LAK
     * Convert all expense records to LAK using: amount * exchangeRate
     */
    totalExpenseLAK() {
      return this.expenseRecords.reduce((total, record) => {
        const lakAmount = this.convertToLAK(
          record.paymentAmount, 
          record.exchangeRate, 
          record.currency
        )
        return total + lakAmount
      }, 0)
    },
    
    /**
     * Calculate net profit/loss
     * P&L = Total Revenue - Total Expenses
     */
    netProfitLoss() {
      return this.totalRevenueLAK - this.totalExpenseLAK
    },
    
    /**
     * Calculate profit margin percentage
     * Profit Margin = (Net Profit / Total Revenue) * 100
     */
    profitMargin() {
      if (this.totalRevenueLAK === 0) return 0
      return (this.netProfitLoss / this.totalRevenueLAK) * 100
    },
    
    /**
     * Calculate revenue percentage for chart display
     */
    revenuePercentage() {
      const total = this.totalRevenueLAK + this.totalExpenseLAK
      return total > 0 ? (this.totalRevenueLAK / total) * 100 : 0
    },
    
    /**
     * Calculate expense percentage for chart display
     */
    expensePercentage() {
      const total = this.totalRevenueLAK + this.totalExpenseLAK
      return total > 0 ? (this.totalExpenseLAK / total) * 100 : 0
    },
    
    /**
     * Get unique currencies used in the report
     */
    uniqueCurrencies() {
      const currencies = new Set()
      
      this.receiveRecords.forEach(record => {
        const code = record.currency?.code || 'LAK'
        currencies.add(code)
      })
      
      this.expenseRecords.forEach(record => {
        const code = record.currency?.code || 'LAK'
        currencies.add(code)
      })
      
      return Array.from(currencies)
    },

    /**
     * NEW: Group revenue by transaction code
     */
    revenueByTransactionCode() {
      const grouped = {}
      
      this.receiveRecords.forEach(record => {
        // Process each receive line for transaction details
        if (record.receiveLines && record.receiveLines.length > 0) {
          record.receiveLines.forEach(line => {
            const transaction = line.transaction
            const txnCode = transaction?.code || 'UN-ALLOCATED'
            const txnDescription = transaction?.description || 'ບໍ່ມີການຈັດສັນປະເພດ'
            
            // Calculate LAK amount for this line
            const lineAmount = this.convertToLAK(
              line.allocatedAmount || 0,
              record.exchangeRate,
              record.currency
            )
            
            if (!grouped[txnCode]) {
              grouped[txnCode] = {
                code: txnCode,
                description: txnDescription,
                amount: 0,
                count: 0
              }
            }
            
            grouped[txnCode].amount += lineAmount
            grouped[txnCode].count += 1
          })
        } else {
          // If no receive lines, treat as unallocated
          const txnCode = 'UN-ALLOCATED'
          const lakAmount = this.convertToLAK(
            record.totalReceivedAmount,
            record.exchangeRate,
            record.currency
          )
          
          if (!grouped[txnCode]) {
            grouped[txnCode] = {
              code: txnCode,
              description: 'ບໍ່ມີການຈັດສັນປະເພດ',
              amount: 0,
              count: 0
            }
          }
          
          grouped[txnCode].amount += lakAmount
          grouped[txnCode].count += 1
        }
      })
      
      // Sort by amount descending
      return Object.keys(grouped)
        .sort((a, b) => grouped[b].amount - grouped[a].amount)
        .reduce((sorted, key) => {
          sorted[key] = grouped[key]
          return sorted
        }, {})
    },

    /**
     * NEW: Group expenses by transaction code
     */
    expenseByTransactionCode() {
      const grouped = {}
      
      this.expenseRecords.forEach(record => {
        // Process each invoice settlement for transaction details
        if (record.invoiceSettlements && record.invoiceSettlements.length > 0) {
          record.invoiceSettlements.forEach(settlement => {
            const transaction = settlement.transaction
            const txnCode = transaction?.code || 'UN-ALLOCATED'
            const txnDescription = transaction?.description || 'ບໍ່ມີການຈັດສັນປະເພດ'
            
            // Calculate LAK amount for this settlement
            const settlementAmount = this.convertToLAK(
              settlement.amount || 0,
              record.exchangeRate,
              record.currency
            )
            
            if (!grouped[txnCode]) {
              grouped[txnCode] = {
                code: txnCode,
                description: txnDescription,
                amount: 0,
                count: 0
              }
            }
            
            grouped[txnCode].amount += settlementAmount
            grouped[txnCode].count += 1
          })
        } else {
          // If no invoice settlements, treat as unallocated
          const txnCode = 'UN-ALLOCATED'
          const lakAmount = this.convertToLAK(
            record.paymentAmount,
            record.exchangeRate,
            record.currency
          )
          
          if (!grouped[txnCode]) {
            grouped[txnCode] = {
              code: txnCode,
              description: 'ບໍ່ມີການຈັດສັນປະເພດ',
              amount: 0,
              count: 0
            }
          }
          
          grouped[txnCode].amount += lakAmount
          grouped[txnCode].count += 1
        }
      })
      
      // Sort by amount descending
      return Object.keys(grouped)
        .sort((a, b) => grouped[b].amount - grouped[a].amount)
        .reduce((sorted, key) => {
          sorted[key] = grouped[key]
          return sorted
        }, {})
    },

    /**
     * NEW: Format revenue data for detail table with transaction codes
     */
    revenueDetailItems() {
      const items = []
      
      this.receiveRecords.forEach(record => {
        if (record.receiveLines && record.receiveLines.length > 0) {
          // Create separate row for each receive line
          record.receiveLines.forEach((line, index) => {
            const transaction = line.transaction
            const txnCode = transaction?.code || 'UN-ALLOCATED'
            const lakAmount = this.convertToLAK(
              line.allocatedAmount || 0,
              record.exchangeRate,
              record.currency
            )
            
            items.push({
              id: `${record.id}-${index}`,
              receiptNumber: record.receiptNumber + (record.receiveLines.length > 1 ? ` (${index + 1})` : ''),
              receivedDate: record.receivedDate,
              originalAmount: line.allocatedAmount || 0,
              currencyCode: record.currency?.code || 'LAK',
              exchangeRate: record.exchangeRate || 1,
              lakAmount: lakAmount,
              transactionCode: txnCode,
              referenceNumber: record.referenceNumber,
              description: line.description
            })
          })
        } else {
          // Single row for record without lines
          const lakAmount = this.convertToLAK(
            record.totalReceivedAmount,
            record.exchangeRate,
            record.currency
          )
          
          items.push({
            id: record.id,
            receiptNumber: record.receiptNumber,
            receivedDate: record.receivedDate,
            originalAmount: record.totalReceivedAmount,
            currencyCode: record.currency?.code || 'LAK',
            exchangeRate: record.exchangeRate || 1,
            lakAmount: lakAmount,
            transactionCode: 'UN-ALLOCATED',
            referenceNumber: record.referenceNumber,
            description: record.notes
          })
        }
      })
      
      return items
    },

    /**
     * NEW: Format expense data for detail table with transaction codes
     */
    expenseDetailItems() {
      const items = []
      
      this.expenseRecords.forEach(record => {
        if (record.invoiceSettlements && record.invoiceSettlements.length > 0) {
          // Create separate row for each settlement
          record.invoiceSettlements.forEach((settlement, index) => {
            const transaction = settlement.transaction
            const txnCode = transaction?.code || 'UN-ALLOCATED'
            const lakAmount = this.convertToLAK(
              settlement.amount || 0,
              record.exchangeRate,
              record.currency
            )
            
            items.push({
              id: `${record.id}-${index}`,
              settlementDate: record.settlementDate,
              originalAmount: settlement.amount || 0,
              currencyCode: record.currency?.code || 'LAK',
              exchangeRate: record.exchangeRate || 1,
              lakAmount: lakAmount,
              transactionCode: txnCode,
              reference: record.reference,
              description: settlement.description
            })
          })
        } else {
          // Single row for record without settlements
          const lakAmount = this.convertToLAK(
            record.paymentAmount,
            record.exchangeRate,
            record.currency
          )
          
          items.push({
            id: record.id,
            settlementDate: record.settlementDate,
            originalAmount: record.paymentAmount,
            currencyCode: record.currency?.code || 'LAK',
            exchangeRate: record.exchangeRate || 1,
            lakAmount: lakAmount,
            transactionCode: 'UN-ALLOCATED',
            reference: record.reference,
            description: record.description
          })
        }
      })
      
      return items
    }
  },
  
  mounted() {
    // Set default to current month
    this.setCurrentMonth()
    // Load initial data
    this.fetchCurrencies()
  },
  
  methods: {
    /**
     * CORE CURRENCY CONVERSION LOGIC
     * Convert any amount to LAK using the exchange rate
     * Formula: amount_lak = amount * exchangeRate
     * If currency is already LAK, exchangeRate should be 1
     */
    convertToLAK(amount, exchangeRate, currency) {
      // Handle null/undefined values safely
      if (!amount || amount === 0) return 0
      
      // If currency is LAK, no conversion needed
      const currencyCode = currency?.code || currency?.name || 'LAK'
      if (currencyCode === 'LAK') {
        return parseFloat(amount) || 0
      }
      
      // Use provided exchange rate, fallback to 1 if missing
      const rate = parseFloat(exchangeRate) || 1
      const convertedAmount = parseFloat(amount) * rate
      
      return convertedAmount || 0
    },
    
    /**
     * Fetch receive records within date range
     */
    async fetchReceiveRecords() {
      try {
        const params = {
          bookingDateFrom: this.filters.fromDate,
          bookingDateTo: this.filters.toDate
        }
        
        const { data } = await this.$axios.get('/api/ar-receive-headers/pl', { params })
        
        if (data?.success) {
          // Filter records by date range on client side as backup
          this.receiveRecords = (data.data.receiveHeaders || []).filter(record => {
            const recordDate = new Date(record.receivedDate || record.bookingDate)
            const fromDate = new Date(this.filters.fromDate)
            const toDate = new Date(this.filters.toDate)
            
            return recordDate >= fromDate && recordDate <= toDate
          })
        } else {
          this.receiveRecords = []
        }
      } catch (error) {
        console.error('Error fetching receive records:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນລາຍຮັບ')
        this.receiveRecords = []
      }
    },
    
    /**
     * Fetch expense records within date range
     */
    async fetchExpenseRecords() {
      try {
        const params = {
          startDate: this.filters.fromDate,
          endDate: this.filters.toDate
        }
        
        const { data } = await this.$axios.get('/api/ap-invoices-settlement/pl', { params })
        
        if (data?.success) {
          // Filter records by date range on client side as backup
          this.expenseRecords = (data.data.settlements || []).filter(record => {
            const recordDate = new Date(record.settlementDate)
            const fromDate = new Date(this.filters.fromDate)
            const toDate = new Date(this.filters.toDate)
            
            return recordDate >= fromDate && recordDate <= toDate
          })
        } else {
          this.expenseRecords = []
        }
      } catch (error) {
        console.error('Error fetching expense records:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນລາຍຈ່າຍ')
        this.expenseRecords = []
      }
    },
    
    /**
     * Fetch currency master data
     */
    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/find')
        this.currencies = data || []
      } catch (error) {
        console.error('Error fetching currencies:', error)
      }
    },
    
    /**
     * Main method to fetch all data and generate report
     */
    async fetchData() {
      if (!this.isValidDateRange) {
        this.$toast.warning('ກະລຸນາເລືອກໄລຍະເວລາທີ່ຖືກຕ້ອງ')
        return
      }
      
      this.loading = true
      try {
        // Fetch both revenue and expense data in parallel
        await Promise.all([
          this.fetchReceiveRecords(),
          this.fetchExpenseRecords()
        ])
        
        this.$toast.success('ໂຫຼດຂໍ້ມູນສຳເລັດ')
      } catch (error) {
        console.error('Error fetching P&L data:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
      } finally {
        this.loading = false
      }
    },
    
    /**
     * Alias for fetchData to maintain semantic clarity
     */
    generateReport() {
      this.fetchData()
    },
    
    /**
     * Set date range to current month
     */
    setCurrentMonth() {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth()
      
      this.filters.fromDate = new Date(year, month, 1).toISOString().split('T')[0]
      this.filters.toDate = new Date(year, month + 1, 0).toISOString().split('T')[0]
    },
    
    /**
     * Set date range to current year
     */
    setCurrentYear() {
      const now = new Date()
      const year = now.getFullYear()
      
      this.filters.fromDate = `${year}-01-01`
      this.filters.toDate = `${year}-12-31`
    },
    
    /**
     * Export P&L report to Excel
     */
    async exportToExcel() {
      if (!this.hasData) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນສຳລັບການສົ່ງອອກ')
        return
      }
      
      this.exporting = true
      this.showExportProgress = true
      
      try {
        const currentDate = new Date().toISOString().split('T')[0]
        const filename = `P&L_Report_TransactionCode_${this.filters.fromDate}_to_${this.filters.toDate}_${currentDate}.xlsx`
        
        await this.generatePLExcel(filename)
        this.$toast.success('ສົ່ງອອກລາຍງານສຳເລັດ')
        
      } catch (error) {
        console.error('Export error:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ')
      } finally {
        this.exporting = false
        this.showExportProgress = false
      }
    },
    
    /**
     * Generate Excel file with P&L data including transaction code breakdown
     */
    async generatePLExcel(filename) {
      try {
        // Try to use XLSX library
        const XLSX = await import('xlsx')
        
        // Summary sheet data
        const summaryData = [
          ['ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ (P&L Report) - ວິເຄາະຕາມລະຫັດ Transaction', '', '', ''],
          ['ໄລຍະເວລາ:', this.formatDateRange(), '', ''],
          ['ສ້າງລາຍງານ:', this.formatDate(new Date()), '', ''],
          ['', '', '', ''],
          ['ລາຍການ', 'ຈຳນວນ (LAK)', 'ອັດຕາ (%)', 'ໝາຍເຫດ'],
          ['ລາຍຮັບລວມ', this.totalRevenueLAK, this.revenuePercentage.toFixed(2), `${this.receiveRecords.length} ລາຍການ`],
          ['ລາຍຈ່າຍລວມ', this.totalExpenseLAK, this.expensePercentage.toFixed(2), `${this.expenseRecords.length} ລາຍການ`],
          ['', '', '', ''],
          [this.netProfitLoss >= 0 ? 'ກຳໄລສຸດທິ' : 'ຂາດທຶນສຸດທິ', Math.abs(this.netProfitLoss), this.formatPercentage(this.profitMargin), this.netProfitLoss >= 0 ? 'ກຳໄລ' : 'ຂາດທຶນ']
        ]
        
        // Revenue by transaction code
        const revenueByCodeData = [
          ['ລາຍຮັບຕາມລະຫັດ Transaction', '', '', ''],
          ['ລະຫັດ', 'ຄຳອະທິບາຍ', 'ຈຳນວນ (LAK)', '% ຂອງລາຍຮັບລວມ'],
          ...Object.keys(this.revenueByTransactionCode).map(code => {
            const item = this.revenueByTransactionCode[code]
            return [
              code,
              item.description,
              item.amount,
              ((item.amount / this.totalRevenueLAK) * 100).toFixed(2)
            ]
          })
        ]
        
        // Expense by transaction code
        const expenseByCodeData = [
          ['ລາຍຈ່າຍຕາມລະຫັດ Transaction', '', '', ''],
          ['ລະຫັດ', 'ຄຳອະທິບາຍ', 'ຈຳນວນ (LAK)', '% ຂອງລາຍຈ່າຍລວມ'],
          ...Object.keys(this.expenseByTransactionCode).map(code => {
            const item = this.expenseByTransactionCode[code]
            return [
              code,
              item.description,
              item.amount,
              ((item.amount / this.totalExpenseLAK) * 100).toFixed(2)
            ]
          })
        ]
        
        // Revenue detail data with transaction codes
        const revenueData = [
          ['ລາຍລະອຽດລາຍຮັບ - ແຍກຕາມ Transaction Code', '', '', '', '', '', ''],
          ['ເລກທີໃບຮັບ', 'ວັນທີ', 'ຈຳນວນເງິນ', 'ສະກຸນເງິນ', 'ອັດຕາແລກປ່ຽນ', 'ຈຳນວນ LAK', 'ລະຫັດ Transaction'],
          ...this.revenueDetailItems.map(item => [
            item.receiptNumber || '',
            this.formatDate(item.receivedDate),
            item.originalAmount || 0,
            item.currencyCode || 'LAK',
            item.exchangeRate || 1,
            item.lakAmount,
            item.transactionCode
          ])
        ]
        
        // Expense detail data with transaction codes
        const expenseData = [
          ['ລາຍລະອຽດລາຍຈ່າຍ - ແຍກຕາມ Transaction Code', '', '', '', '', '', ''],
          ['ລະຫັດ', 'ວັນທີ', 'ຈຳນວນເງິນ', 'ສະກຸນເງິນ', 'ອັດຕາແລກປ່ຽນ', 'ຈຳນວນ LAK', 'ລະຫັດ Transaction'],
          ...this.expenseDetailItems.map(item => [
            item.id || '',
            this.formatDate(item.settlementDate),
            item.originalAmount || 0,
            item.currencyCode || 'LAK',
            item.exchangeRate || 1,
            item.lakAmount,
            item.transactionCode
          ])
        ]
        
        // Create workbook
        const workbook = XLSX.utils.book_new()
        
        // Add sheets
        const summarySheet = XLSX.utils.aoa_to_sheet(summaryData)
        const revenueByCodeSheet = XLSX.utils.aoa_to_sheet(revenueByCodeData)
        const expenseByCodeSheet = XLSX.utils.aoa_to_sheet(expenseByCodeData)
        const revenueSheet = XLSX.utils.aoa_to_sheet(revenueData)
        const expenseSheet = XLSX.utils.aoa_to_sheet(expenseData)
        
        XLSX.utils.book_append_sheet(workbook, summarySheet, 'ສະຫຼຸບ P&L')
        XLSX.utils.book_append_sheet(workbook, revenueByCodeSheet, 'ລາຍຮັບຕາມລະຫັດ')
        XLSX.utils.book_append_sheet(workbook, expenseByCodeSheet, 'ລາຍຈ່າຍຕາມລະຫັດ')
        XLSX.utils.book_append_sheet(workbook, revenueSheet, 'ລາຍຮັບລະອຽດ')
        XLSX.utils.book_append_sheet(workbook, expenseSheet, 'ລາຍຈ່າຍລະອຽດ')
        
        // Set column widths
        const wscols = [
          { wch: 20 }, { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }
        ]
        summarySheet['!cols'] = wscols
        revenueByCodeSheet['!cols'] = wscols
        expenseByCodeSheet['!cols'] = wscols
        revenueSheet['!cols'] = wscols
        expenseSheet['!cols'] = wscols
        
        // Save file
        XLSX.writeFile(workbook, filename)
        
      } catch (xlsxError) {
        // Fallback to CSV
        console.log('XLSX not available, generating CSV')
        const csvData = this.generatePLCSV()
        this.downloadBlob(csvData, filename.replace('.xlsx', '.csv'))
      }
    },
    
    /**
     * Generate CSV fallback
     */
    generatePLCSV() {
      const csvLines = [
        'ລາຍງານກຳໄລ ຫຼື ຂາດທຶນ - ຕາມລະຫັດ Transaction,,,',
        `ໄລຍະເວລາ,${this.formatDateRange()},,`,
        `ລາຍຮັບລວມ,${this.totalRevenueLAK},,`,
        `ລາຍຈ່າຍລວມ,${this.totalExpenseLAK},,`,
        `${this.netProfitLoss >= 0 ? 'ກຳໄລສຸດທິ' : 'ຂາດທຶນສຸດທິ'},${Math.abs(this.netProfitLoss)},,`,
        '',
        'ລາຍຮັບຕາມລະຫັດ Transaction,,,',
        ...Object.keys(this.revenueByTransactionCode).map(code => {
          const item = this.revenueByTransactionCode[code]
          return `${code},${item.description},${item.amount},${((item.amount / this.totalRevenueLAK) * 100).toFixed(2)}%`
        })
      ]
      
      return new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' })
    },
    
    /**
     * Download blob helper
     */
    downloadBlob(blob, filename) {
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    },
    
    // Utility formatting methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount || 0)
    },
    
    formatPercentage(percentage) {
      return parseFloat(percentage || 0).toFixed(2)
    },
    
    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-GB')
    },
    
    formatDateRange() {
      return `${this.formatDate(this.filters.fromDate)} - ${this.formatDate(this.filters.toDate)}`
    }
  }
}
</script>

<style scoped>
/* Noto Sans Lao Font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@100;200;300;400;500;600;700;800;900&display=swap');

.notosans-lao {
  font-family: 'Noto Sans Lao', Arial, sans-serif !important;
}

.notosans-lao * {
  font-family: 'Noto Sans Lao', Arial, sans-serif !important;
}

.pl-report-container {
  padding: 20px;
}

.v-card-title.primary {
  background: linear-gradient(45deg, #1976d2, #1565c0);
}

.v-card-title.success {
  background: linear-gradient(45deg, #4caf50, #66bb6a);
}

.v-card-title.error {
  background: linear-gradient(45deg, #f44336, #ef5350);
}

.v-card-title.purple {
  background: linear-gradient(45deg, #9c27b0, #ba68c8);
}

.v-card-title.orange {
  background: linear-gradient(45deg, #ff9800, #ffb74d);
}

/* Chart Styles */
.chart-container {
  padding: 20px 0;
}

.chart-bar-wrapper {
  margin-bottom: 20px;
}

.chart-label {
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.chart-bar {
  height: 30px;
  background: #f5f5f5;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}

.chart-fill {
  height: 100%;
  border-radius: 15px;
  transition: width 0.5s ease;
}

.chart-fill.success {
  background: linear-gradient(90deg, #4caf50, #66bb6a);
}

.chart-fill.error {
  background: linear-gradient(90deg, #f44336, #ef5350);
}

.chart-value {
  margin-top: 5px;
  font-weight: 600;
  color: #666;
}

/* Breakdown styles */
.breakdown-item {
  padding: 10px 0;
}

/* Export button styling */
.v-btn.success {
  background-color: #4caf50 !important;
  color: white !important;
}

.v-btn.success:hover {
  background-color: #45a049 !important;
}

/* Transaction code chips */
.v-chip.success {
  background-color: #4caf50 !important;
}

.v-chip.error {
  background-color: #f44336 !important;
}

.v-chip.purple {
  background-color: #9c27b0 !important;
}

.v-chip.orange {
  background-color: #ff9800 !important;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .pl-report-container {
    padding: 10px;
  }
  
  .text-h5 {
    font-size: 1.3rem !important;
  }
  
  .text-subtitle-1 {
    font-size: 1rem !important;
  }
}

@media (max-width: 600px) {
  .text-h5 {
    font-size: 1.1rem !important;
  }
  
  .text-subtitle-1 {
    font-size: 0.9rem !important;
  }
  
  /* Stack cards on mobile */
  .v-col.md-2 {
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }
}
</style>