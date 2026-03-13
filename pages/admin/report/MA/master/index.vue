<template>
  <div class="payment-settlement-analysis">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <v-icon large color="primary" class="mr-2">mdi-chart-areaspline</v-icon>
          ການວິເຄາະການຊຳລະ ແລະລາຍຮັບ
        </h1>
        <p class="page-subtitle">Payment & Settlement Analysis</p>
      </div>
    </div>

    <!-- Simplified Monthly Filter -->
    <v-card class="filter-card mb-6" elevation="1">
      <v-card-title class="filter-title">
        <v-icon color="primary" class="mr-2">mdi-calendar-month</v-icon>
        ເລືອກເດືອນ (Monthly Filter)
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-6">
        <v-row align="center">
          <v-col cols="12" md="3">
            <v-select v-model="selectedYear" :items="yearOptions" label="Select Year" outlined dense hide-details
              prepend-inner-icon="mdi-calendar" @change="onDateChange"></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select v-model="selectedMonthNum" :items="monthOptions" item-text="name" item-value="value"
              label="Select Month" outlined dense hide-details prepend-inner-icon="mdi-calendar-range"
              @change="onDateChange"></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex align-center">
              <v-chip color="primary" label class="mr-4 px-4 font-weight-bold" large>
                <v-icon left>mdi-calendar-check</v-icon>
                {{ formattedSelectedMonth }}
              </v-chip>
              <v-btn color="primary" @click="fetchAllReports" :loading="loading" large depressed class="mr-2 px-6">
                <v-icon left>mdi-magnify</v-icon>
                ວິເຄາະຂໍ້ມູນ
              </v-btn>
              <v-btn color="grey lighten-2" @click="resetMonth" large depressed class="px-6">
                <v-icon left>mdi-restore</v-icon>
                ຣີເຊັດ
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Loading Indicator -->
    <v-row justify="center" v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
        <div class="mt-2">Loading reports...</div>
      </v-col>
    </v-row>

    <!-- BALANCE FORWARD SECTION -->
    <div class="analysis-section-header">
      <div class="d-flex align-center">
        <v-icon color="primary" class="mr-3">mdi-balance-scale</v-icon>
        <span class=" font-weight-bold">ຍອດຍົກມາ (BALANCE FORWARD)</span>
      </div>
    </div>

    <!-- Balance Forward Summary Cards -->
    <v-row class="mb-6" dense>
      <v-col cols="12" md="4">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container">
                  <v-icon large color="primary">mdi-calendar-minus</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">ຍອດຍົກມາທັງໝົດ</div>
                  <div class="summary-amount primary--text truncate">
                    {{ formatAmount(balanceForwardData.totals.totalLakEquivalent) }}
                  </div>
                  <div class="summary-lcy">LAK Equivalent</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container">
                  <v-icon large color="success">mdi-office-building</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">ກະຊວງມີຍອດ</div>
                  <div class="summary-amount success--text truncate">
                    {{balanceForwardData.byMinistry.filter((m) => m.totalLakEquivalent !== 0).length}}
                  </div>
                  <div class="summary-lcy">Ministries with Balance</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container">
                  <v-icon large color="info">mdi-university</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">ບັນຊີມີຍອດ</div>
                  <div class="summary-amount info--text truncate">
                    {{balanceForwardData.byBankAccount.filter((b) => b.totalLakEquivalent !== 0).length}}
                  </div>
                  <div class="summary-lcy">Accounts with Balance</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Balance Forward by Ministry -->
    <v-row class="mb-6" dense>
      <v-col cols="12">
        <v-card elevation="1" class="report-table-card">
          <v-card-title class="pa-4">
            <v-icon color="primary" class="mr-2">mdi-office-building</v-icon>
            <span class=" font-weight-bold">
              ຍອດຍົກມາ ຕາມກົມ ({{ balanceForwardData.byMinistry.length }})
            </span>
            <v-spacer></v-spacer>
            <v-btn color="success" small depressed class="mr-2 px-4" @click="exportReport('balance-ministry')"
              :disabled="!balanceForwardData.byMinistry.length" :loading="exporting">
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn icon small @click="fetchBalanceForward" :loading="loadingBalanceForward">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingBalanceForward" class="text-center py-6">
              <v-progress-circular indeterminate color="success" />
              <div class="mt-2 ">Loading balance forward...</div>
            </div>

            <div v-else-if="!balanceForwardData.byMinistry.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">
                No balance forward data
              </div>
            </div>

            <v-simple-table class="report-table" dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="50">#</th>
                    <th class="text-left">MINISTRY CODE</th>
                    <th class="text-left">MINISTRY NAME</th>
                    <th v-for="currency in Object.keys(balanceForwardData.totals.currencyTotals)"
                      :key="'bf-min-' + currency" class="text-right">
                      {{ currency }}
                    </th>
                    <th class="text-right">BALANCE (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(
item, index
                    ) in balanceForwardData.byMinistry.filter(
  (m) => m.totalLakEquivalent !== 0
)" :key="item.ministryId" :class="{
  'grey lighten-5': index % 2 === 0,
  'green lighten-5': item.totalLakEquivalent > 0,
  'red lighten-5': item.totalLakEquivalent < 0,
}">
                    <td class=" text-center">{{ index + 1 }}</td>
                    <td class="">{{ item.ministryCode }}</td>
                    <td class="">{{ item.ministryName }}</td>
                    <td v-for="currency in Object.keys(
                      balanceForwardData.totals.currencyTotals
                    )" :key="'bf-min-amt-' + currency" class=" text-right">
                      {{ formatAmount(item.amounts?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold" :class="item.totalLakEquivalent >= 0
                      ? 'success--text'
                      : 'error--text'
                      ">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- PAYMENT SECTION -->
    <div class="analysis-section-header mt-8">
      <div class="d-flex align-center">
        <v-icon color="primary" class="mr-3">mdi-credit-card-outline</v-icon>
        <span class=" font-weight-bold">ລາຍຈ່າຍ (PAYMENTS)</span>
      </div>
    </div>

    <!-- Payment by Ministry -->
    <v-row class="mb-6" dense>
      <v-col cols="12">
        <v-card elevation="1" class="report-table-card">
          <v-card-title class="pa-4">
            <v-icon color="primary" class="mr-2">mdi-office-building</v-icon>
            <span class=" font-weight-bold">ລາຍຈ່າຍ ຕາມກົມ</span>
            <v-spacer></v-spacer>
            <v-btn color="success" small depressed class="mr-2 px-4" @click="exportReport('payment-ministry')"
              :disabled="!paymentMinistryReport.length" :loading="exporting">
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn icon small @click="fetchPaymentMinistryReport" :loading="loadingPaymentMinistry">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingPaymentMinistry" class="text-center py-6">
              <v-progress-circular indeterminate color="primary" />
              <div class="mt-2 text-caption">Loading payment by ministry...</div>
            </div>

            <div v-else-if="!paymentMinistryReport.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">No payment data available</div>
            </div>

            <v-simple-table v-else class="report-table" dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="50">#</th>
                    <th class="text-left">MINISTRY CODE</th>
                    <th class="text-left">MINISTRY NAME</th>
                    <th class="text-right">COUNT</th>
                    <th v-for="currency in paymentCurrencyList" :key="'pay-min-' + currency" class="text-right">
                      {{ currency }}
                    </th>
                    <th class="text-right">TOTAL (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in paymentMinistryReport" :key="item.ministryId"
                    :class="{ 'highlight-row': item.ministryId === 'NO_MINISTRY' }">
                    <td class="text-center grey--text text--darken-1">{{ index + 1 }}</td>
                    <td class="font-weight-medium">{{ item.ministryCode }}</td>
                    <td class="text-truncate" style="max-width: 250px;">{{ item.ministryName }}</td>
                    <td class="text-right">{{ item.count }}</td>
                    <td v-for="currency in paymentCurrencyList" :key="'pay-min-amt-' + currency"
                      class="text-right font-monospace">
                      <div class="font-weight-medium">{{ formatAmount(item.amounts?.[currency] || 0) }}</div>
                      <div class="text-caption grey--text" v-if="currency !== 'LAK'">
                        ≈ {{ formatAmount(convertToLocal(item.amounts?.[currency] || 0, currency)) }}
                      </div>
                    </td>
                    <td class="text-right font-weight-bold font-monospace primary--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                  <!-- Totals -->
                  <tr class="total-row">
                    <td colspan="3" class="text-right font-weight-bold">ລວມທັງໝົດ</td>
                    <td class="text-right font-weight-bold">{{paymentMinistryReport.reduce((sum, m) => sum + m.count,
                      0)}}</td>
                    <td v-for="currency in paymentCurrencyList" :key="'pay-min-sum-' + currency"
                      class="text-right font-weight-bold font-monospace">
                      {{ formatAmount(paymentMinistryTotals?.currencyTotals?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold font-monospace primary--text">
                      {{ formatAmount(paymentMinistryTotals?.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Payment by Bank Account -->
    <v-row class="mb-6" dense>
      <v-col cols="12">
        <v-card elevation="1" class="report-table-card">
          <v-card-title class="pa-4">
            <v-icon color="primary" class="mr-2">mdi-bank</v-icon>
            <span class=" font-weight-bold">ລາຍຈ່າຍ ຕາມບັນຊີທະນາຄານ</span>
            <v-spacer></v-spacer>
            <v-btn color="success" small depressed class="mr-2 px-4" @click="exportReport('payment-bank')"
              :disabled="!paymentBankReport.length" :loading="exporting">
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn icon small @click="fetchPaymentBankReport" :loading="loadingPaymentBank">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingPaymentBank" class="text-center py-6">
              <v-progress-circular indeterminate color="primary" />
              <div class="mt-2 text-caption">Loading payment by bank account...</div>
            </div>

            <div v-else-if="!paymentBankReport.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">No payment bank data available</div>
            </div>

            <v-simple-table v-else class="report-table" dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="50">#</th>
                    <th class="text-left">ACCOUNT NUMBER</th>
                    <th class="text-left">ACCOUNT NAME</th>
                    <th class="text-left">BANK NAME</th>
                    <th class="text-right">COUNT</th>
                    <th v-for="currency in paymentCurrencyList" :key="'pay-bank-' + currency" class="text-right">
                      {{ currency }}
                    </th>
                    <th class="text-right">TOTAL (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in paymentBankReport" :key="item.bankAccountId"
                    :class="{ 'highlight-row': item.bankAccountId === 'NO_BANK_ACCOUNT' }">
                    <td class="text-center grey--text text--darken-1">{{ index + 1 }}</td>
                    <td class="font-weight-medium">{{ item.accountNumber }}</td>
                    <td>{{ item.accountName }}</td>
                    <td>{{ item.bankName }}</td>
                    <td class="text-right">{{ item.count }}</td>
                    <td v-for="currency in paymentCurrencyList" :key="'pay-bank-amt-' + currency"
                      class="text-right font-monospace">
                      <div class="font-weight-medium">{{ formatAmount(item.amounts?.[currency] || 0) }}</div>
                      <div class="text-caption grey--text" v-if="currency !== 'LAK'">
                        ≈ {{ formatAmount(convertToLocal(item.amounts?.[currency] || 0, currency)) }}
                      </div>
                    </td>
                    <td class="text-right font-weight-bold font-monospace primary--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                  <!-- Totals -->
                  <tr class="total-row">
                    <td colspan="4" class="text-right font-weight-bold">ລວມທັງໝົດ</td>
                    <td class="text-right font-weight-bold">{{paymentBankReport.reduce((sum, b) => sum + b.count, 0)}}
                    </td>
                    <td v-for="currency in paymentCurrencyList" :key="'pay-bank-sum-' + currency"
                      class="text-right font-weight-bold font-monospace">
                      {{ formatAmount(paymentBankTotals?.currencyTotals?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold font-monospace primary--text">
                      {{ formatAmount(paymentBankTotals?.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- SETTLEMENT SECTION -->
    <div class="analysis-section-header mt-8">
      <div class="d-flex align-center">
        <v-icon color="success" class="mr-3">mdi-receipt-outline</v-icon>
        <span class=" font-weight-bold">ລາຍຮັບ (SETTLEMENTS)</span>
      </div>
    </div>

    <!-- Settlement by Ministry -->
    <v-row class="mb-6" dense>
      <v-col cols="12">
        <v-card elevation="1" class="report-table-card">
          <v-card-title class="pa-4">
            <v-icon color="success" class="mr-2">mdi-office-building</v-icon>
            <span class=" font-weight-bold">ລາຍຮັບ ຕາມກົມ</span>
            <v-spacer></v-spacer>
            <v-btn color="success" small depressed class="mr-2 px-4" @click="exportReport('settlement-ministry')"
              :disabled="!settlementMinistryReport.length" :loading="exporting">
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn icon small @click="fetchSettlementMinistryReport" :loading="loadingSettlementMinistry">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingSettlementMinistry" class="text-center py-6">
              <v-progress-circular indeterminate color="success" />
              <div class="mt-2 text-caption">Loading settlement by ministry...</div>
            </div>

            <div v-else-if="!settlementMinistryReport.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">No settlement data available</div>
            </div>

            <v-simple-table v-else class="report-table" dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="50">#</th>
                    <th class="text-left">MINISTRY CODE</th>
                    <th class="text-left">MINISTRY NAME</th>
                    <th class="text-right">COUNT</th>
                    <th v-for="currency in settlementCurrencyList" :key="'set-min-' + currency" class="text-right">
                      {{ currency }}
                    </th>
                    <th class="text-right">TOTAL (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in settlementMinistryReport" :key="item.ministryId"
                    :class="{ 'highlight-row': item.ministryId === 'NO_MINISTRY' }">
                    <td class="text-center grey--text text--darken-1">{{ index + 1 }}</td>
                    <td class="font-weight-medium">{{ item.ministryCode }}</td>
                    <td class="text-truncate" style="max-width: 250px;">{{ item.ministryName }}</td>
                    <td class="text-right">{{ item.count }}</td>
                    <td v-for="currency in settlementCurrencyList" :key="'set-min-amt-' + currency"
                      class="text-right font-monospace">
                      <div class="font-weight-medium">{{ formatAmount(item.amounts?.[currency] || 0) }}</div>
                      <div class="text-caption grey--text" v-if="currency !== 'LAK'">
                        ≈ {{ formatAmount(convertToLocal(item.amounts?.[currency] || 0, currency)) }}
                      </div>
                    </td>
                    <td class="text-right font-weight-bold font-monospace success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                  <!-- Totals -->
                  <tr class="total-row">
                    <td colspan="3" class="text-right font-weight-bold">ລວມທັງໝົດ</td>
                    <td class="text-right font-weight-bold">{{settlementMinistryReport.reduce((sum, m) => sum +
                      m.count, 0)}}</td>
                    <td v-for="currency in settlementCurrencyList" :key="'set-min-sum-' + currency"
                      class="text-right font-weight-bold font-monospace">
                      {{ formatAmount(settlementMinistryTotals?.currencyTotals?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold font-monospace success--text">
                      {{ formatAmount(settlementMinistryTotals?.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Settlement by Bank Account -->
    <v-row class="mb-6" dense>
      <v-col cols="12">
        <v-card elevation="1" class="report-table-card">
          <v-card-title class="pa-4">
            <v-icon color="success" class="mr-2">mdi-bank</v-icon>
            <span class=" font-weight-bold">ລາຍຮັບ ຕາມບັນຊີທະນາຄານ</span>
            <v-spacer></v-spacer>
            <v-btn color="success" small depressed class="mr-2 px-4" @click="exportReport('settlement-bank')"
              :disabled="!settlementBankReport.length" :loading="exporting">
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn icon small @click="fetchSettlementBankReport" :loading="loadingSettlementBank">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingSettlementBank" class="text-center py-6">
              <v-progress-circular indeterminate color="success" />
              <div class="mt-2 text-caption">Loading settlement by bank account...</div>
            </div>

            <div v-else-if="!settlementBankReport.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">No settlement bank data available</div>
            </div>

            <v-simple-table v-else class="report-table" dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="50">#</th>
                    <th class="text-left">ACCOUNT NUMBER</th>
                    <th class="text-left">ACCOUNT NAME</th>
                    <th class="text-left">BANK NAME</th>
                    <th class="text-right">COUNT</th>
                    <th v-for="currency in settlementCurrencyList" :key="'set-bank-' + currency" class="text-right">
                      {{ currency }}
                    </th>
                    <th class="text-right">TOTAL (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in settlementBankReport" :key="item.bankAccountId"
                    :class="{ 'highlight-row': item.bankAccountId === 'NO_BANK_ACCOUNT' }">
                    <td class="text-center grey--text text--darken-1">{{ index + 1 }}</td>
                    <td class="font-weight-medium">{{ item.accountNumber }}</td>
                    <td>{{ item.accountName }}</td>
                    <td>{{ item.bankName }}</td>
                    <td class="text-right">{{ item.count }}</td>
                    <td v-for="currency in settlementCurrencyList" :key="'set-bank-amt-' + currency"
                      class="text-right font-monospace">
                      <div class="font-weight-medium">{{ formatAmount(item.amounts?.[currency] || 0) }}</div>
                      <div class="text-caption grey--text" v-if="currency !== 'LAK'">
                        ≈ {{ formatAmount(convertToLocal(item.amounts?.[currency] || 0, currency)) }}
                      </div>
                    </td>
                    <td class="text-right font-weight-bold font-monospace success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                  <!-- Totals -->
                  <tr class="total-row">
                    <td colspan="4" class="text-right font-weight-bold">ລວມທັງໝົດ</td>
                    <td class="text-right font-weight-bold">{{settlementBankReport.reduce((sum, b) => sum + b.count, 0)
                      }}</td>
                    <td v-for="currency in settlementCurrencyList" :key="'set-bank-sum-' + currency"
                      class="text-right font-weight-bold font-monospace">
                      {{ formatAmount(settlementBankTotals?.currencyTotals?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold font-monospace success--text">
                      {{ formatAmount(settlementBankTotals?.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Settlement by Chart Account -->
    <v-row class="mb-6" dense>
      <v-col cols="12">
        <v-card elevation="1" class="report-table-card">
          <v-card-title class="pa-4">
            <v-icon color="success" class="mr-2">mdi-chart-tree</v-icon>
            <span class=" font-weight-bold">ລາຍຮັບ ຕາມບັນຊີຜັງ</span>
            <v-spacer></v-spacer>
            <v-btn color="success" small depressed class="mr-2 px-4" @click="exportReport('settlement-chart')"
              :disabled="!settlementChartReport.length" :loading="exporting">
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn icon small @click="fetchSettlementChartReport" :loading="loadingSettlementChart">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingSettlementChart" class="text-center py-6">
              <v-progress-circular indeterminate color="success" />
              <div class="mt-2 text-caption">Loading settlement by chart account...</div>
            </div>

            <div v-else-if="!settlementChartReport.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">No chart account data available</div>
            </div>

            <v-simple-table v-else class="report-table" dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="50">#</th>
                    <th class="text-left">CHART ACCOUNT CODE</th>
                    <th class="text-left">CHART ACCOUNT NAME</th>
                    <th class="text-right">COUNT</th>
                    <th v-for="currency in settlementCurrencyList" :key="'set-chart-' + currency" class="text-right">
                      {{ currency }}
                    </th>
                    <th class="text-right">TOTAL (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in settlementChartReport" :key="item.chartAccountId"
                    :class="{ 'highlight-row': item.chartAccountId === 'NO_CHART_ACCOUNT' }">
                    <td class="text-center grey--text text--darken-1">{{ index + 1 }}</td>
                    <td class="font-weight-medium">{{ item.chartAccountCode }}</td>
                    <td>{{ item.chartAccountName }}</td>
                    <td class="text-right">{{ item.count }}</td>
                    <td v-for="currency in settlementCurrencyList" :key="'set-chart-amt-' + currency"
                      class="text-right font-monospace">
                      <div class="font-weight-medium">{{ formatAmount(item.amounts?.[currency] || 0) }}</div>
                      <div class="text-caption grey--text" v-if="currency !== 'LAK'">
                        ≈ {{ formatAmount(convertToLocal(item.amounts?.[currency] || 0, currency)) }}
                      </div>
                    </td>
                    <td class="text-right font-weight-bold font-monospace success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                  <!-- Totals -->
                  <tr class="total-row">
                    <td colspan="3" class="text-right font-weight-bold">ລວມທັງໝົດ</td>
                    <td class="text-right font-weight-bold">{{settlementChartReport.reduce((sum, c) => sum + c.count,
                      0)}}</td>
                    <td v-for="currency in settlementCurrencyList" :key="'set-chart-sum-' + currency"
                      class="text-right font-weight-bold font-monospace">
                      {{ formatAmount(settlementChartTotals?.currencyTotals?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold font-monospace success--text">
                      {{ formatAmount(settlementChartTotals?.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- OUTSTANDING BALANCE SECTION -->
    <div class="analysis-section-header mt-8">
      <div class="d-flex align-center">
        <v-icon color="error" class="mr-3">mdi-calculator-variant</v-icon>
        <span class=" font-weight-bold">ຍອດຄົງເຫຼືອ (OUTSTANDING BALANCE)</span>
      </div>
    </div>

    <!-- Outstanding Balance Summary Cards -->
    <v-row class="mb-6" dense>
      <v-col cols="12" md="4">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container error">
                  <v-icon large color="white">mdi-scale-balance</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">ຍອດຄົງເຫຼືອທັງໝົດ</div>
                  <div class="summary-amount error--text truncate">
                    {{ formatAmount(outstandingBalanceData.totals.totalLakEquivalent) }}
                  </div>
                  <div class="summary-lcy">Total LAK</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container warning">
                  <v-icon large color="white">mdi-office-building</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">ກະຊວງມີຍອດຄົງເຫຼືອ</div>
                  <div class="summary-amount warning--text truncate">
                    {{outstandingBalanceData.byMinistry.filter((m) => Math.abs(m.totalLakEquivalent) > 0.01).length}}
                  </div>
                  <div class="summary-lcy">Ministries</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <v-row align="center" no-gutters>
              <v-col cols="3">
                <div class="summary-icon-container info">
                  <v-icon large color="white">mdi-bank</v-icon>
                </div>
              </v-col>
              <v-col cols="9">
                <div class="summary-details pl-2">
                  <div class="summary-title text-uppercase">ບັນຊີມີຍອດຄົງເຫຼືອ</div>
                  <div class="summary-amount info--text truncate">
                    {{outstandingBalanceData.byBankAccount.filter((b) => Math.abs(b.totalLakEquivalent) > 0.01).length
                    }}
                  </div>
                  <div class="summary-lcy">Bank Accounts</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Outstanding Balance by Ministry -->
    <v-row class="mb-6" dense>
      <v-col cols="12">
        <v-card elevation="1" class="report-table-card">
          <v-card-title class="pa-4">
            <v-icon color="error" class="mr-2">mdi-office-building</v-icon>
            <span class=" font-weight-bold">
              ຍອດຄົງເຫຼືອ ຕາມກົມ ({{ outstandingBalanceData.byMinistry.length }})
            </span>
            <v-spacer></v-spacer>
            <v-btn color="success" small depressed class="mr-2 px-4" @click="exportReport('outstanding-ministry')"
              :disabled="!outstandingBalanceData.byMinistry.length" :loading="exporting">
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn icon small @click="calculateOutstandingBalance" :loading="loadingOutstandingBalance">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingOutstandingBalance" class="text-center py-6">
              <v-progress-circular indeterminate color="success" />
              <div class="mt-2 ">
                Loading outstanding balance...
              </div>
            </div>

            <div v-else-if="!outstandingBalanceData.byMinistry.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">
                No outstanding balance data
              </div>
            </div>

            <v-simple-table v-else class="report-table" dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="50">#</th>
                    <th class="text-left">MINISTRY CODE</th>
                    <th class="text-left">MINISTRY NAME</th>
                    <th v-for="currency in Object.keys(outstandingBalanceData.totals.currencyTotals)"
                      :key="'out-min-' + currency" class="text-right">
                      {{ currency }}
                    </th>
                    <th class="text-right">OUTSTANDING (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(
item, index
                    ) in outstandingBalanceData.byMinistry.filter(
  (m) => Math.abs(m.totalLakEquivalent) > 0.01
)" :key="item.ministryId" :class="{
  'grey lighten-5': index % 2 === 0,
  'green lighten-5': item.totalLakEquivalent > 0,
  'red lighten-5': item.totalLakEquivalent < 0,
}">
                    <td class=" text-center">{{ index + 1 }}</td>
                    <td class="">{{ item.ministryCode }}</td>
                    <td class="">{{ item.ministryName }}</td>
                    <td v-for="currency in Object.keys(
                      outstandingBalanceData.totals.currencyTotals
                    )" :key="'out-min-amt-' + currency" class=" text-right">
                      {{ formatAmount(item.amounts?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold" :class="item.totalLakEquivalent >= 0
                      ? 'success--text'
                      : 'error--text'
                      ">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                  <!-- Totals Row -->
                  <tr class="success lighten-4">
                    <td colspan="3" class="font-weight-bold ">
                      ລວມ
                    </td>
                    <td v-for="currency in Object.keys(
                      outstandingBalanceData.totals.currencyTotals
                    )" :key="'out-min-sum-' + currency" class="text-right font-weight-bold ">
                      {{
                        formatAmount(
                          outstandingBalanceData.totals.currencyTotals[
                          currency
                          ] || 0
                        )
                      }}
                    </td>
                    <td class="text-right font-weight-bold " :class="outstandingBalanceData.totals.totalLakEquivalent >= 0
                      ? 'success--text'
                      : 'error--text'
                      ">
                      {{
                        formatAmount(
                          outstandingBalanceData.totals.totalLakEquivalent || 0
                        )
                      }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Outstanding Balance by Bank Account -->
    <v-row class="mb-6" dense>
      <v-col cols="12">
        <v-card elevation="1" class="report-table-card">
          <v-card-title class="pa-4">
            <v-icon color="error" class="mr-2">mdi-bank</v-icon>
            <span class=" font-weight-bold">
              ຍອດຄົງເຫຼືອ ຕາມບັນຊີທະນາຄານ
            </span>
            <v-spacer></v-spacer>
            <v-btn color="success" small depressed class="mr-2 px-4" @click="exportReport('outstanding-bank')"
              :disabled="!outstandingBalanceData.byBankAccount.length" :loading="exporting">
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn icon small @click="calculateOutstandingBalance" :loading="loadingOutstandingBalance">
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingOutstandingBalance" class="text-center py-6">
              <v-progress-circular indeterminate color="error" />
              <div class="mt-2 text-caption">Loading outstanding balance...</div>
            </div>

            <div v-else-if="!outstandingBalanceData.byBankAccount.length" class="text-center py-6">
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">No outstanding balance data</div>
            </div>

            <v-simple-table v-else class="report-table" dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center" width="50">#</th>
                    <th class="text-left">ACCOUNT NUMBER</th>
                    <th class="text-left">ACCOUNT NAME</th>
                    <th class="text-left">BANK NAME</th>
                    <th v-for="currency in Object.keys(outstandingBalanceData.totals.currencyTotals)"
                      :key="'out-bank-' + currency" class="text-right">
                      {{ currency }}
                    </th>
                    <th class="text-right">OUTSTANDING (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in outstandingBalanceData.byBankAccount.filter((b) => Math.abs(b.totalLakEquivalent) > 0.01)"
                    :key="item.bankAccountId">
                    <td class="text-center grey--text text--darken-1">{{ index + 1 }}</td>
                    <td class="font-weight-medium">{{ item.accountNumber }}</td>
                    <td>{{ item.accountName }}</td>
                    <td>{{ item.bankName }}</td>
                    <td v-for="currency in Object.keys(outstandingBalanceData.totals.currencyTotals)"
                      :key="'out-bank-amt-' + currency" class="text-right font-monospace">
                      <div class="font-weight-medium">{{ formatAmount(item.amounts?.[currency] || 0) }}</div>
                      <div class="text-caption grey--text" v-if="currency !== 'LAK'">
                        ≈ {{ formatAmount(convertToLocal(item.amounts?.[currency] || 0, currency)) }}
                      </div>
                    </td>
                    <td class="text-right font-weight-bold font-monospace"
                      :class="item.totalLakEquivalent >= 0 ? 'success--text' : 'error--text'">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                  <!-- Totals Row -->
                  <tr class="total-row">
                    <td colspan="4" class="text-right font-weight-bold">ລວມທັງໝົດ</td>
                    <td v-for="currency in Object.keys(outstandingBalanceData.totals.currencyTotals)"
                      :key="'out-bank-sum-' + currency" class="text-right font-weight-bold font-monospace">
                      {{ formatAmount(outstandingBalanceData.totals.currencyTotals[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold font-monospace"
                      :class="outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'success--text' : 'error--text'">
                      {{ formatAmount(outstandingBalanceData.totals.totalLakEquivalent || 0) }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PaymentSettlementAnalysis',

  data() {
    return {
      // Outstanding Balance Data (NEW)
      outstandingBalanceData: {
        byMinistry: [],
        byBankAccount: [],
        byCurrency: [],
        totals: { totalLakEquivalent: 0, currencyTotals: {} },
      },
      loadingOutstandingBalance: false,
      loading: false,
      exporting: false,
      selectedBranchId: 1, // You can make this dynamic if needed

      // Monthly Date Selection (dropdowns)
      selectedYear: new Date().getFullYear(),
      selectedMonthNum: new Date().getMonth() + 1,

      // Month options for dropdown
      monthOptions: [
        { name: 'January', value: 1 },
        { name: 'February', value: 2 },
        { name: 'March', value: 3 },
        { name: 'April', value: 4 },
        { name: 'May', value: 5 },
        { name: 'June', value: 6 },
        { name: 'July', value: 7 },
        { name: 'August', value: 8 },
        { name: 'September', value: 9 },
        { name: 'October', value: 10 },
        { name: 'November', value: 11 },
        { name: 'December', value: 12 },
      ],

      // Balance Forward Data (new)
      balanceForwardData: {
        byMinistry: [],
        byBankAccount: [],
        byCurrency: [],
        totals: { totalLakEquivalent: 0, currencyTotals: {} },
      },
      loadingBalanceForward: false,

      // Payment Data
      paymentMinistryReport: [],
      paymentMinistryTotals: { currencyTotals: {}, totalLakEquivalent: 0 },
      paymentBankReport: [],
      paymentBankTotals: { currencyTotals: {}, totalLakEquivalent: 0 },
      paymentCurrencyList: [],
      loadingPaymentMinistry: false,
      loadingPaymentBank: false,

      // Settlement Data
      settlementMinistryReport: [],
      settlementMinistryTotals: { currencyTotals: {}, totalLakEquivalent: 0 },
      settlementBankReport: [],
      settlementBankTotals: { currencyTotals: {}, totalLakEquivalent: 0 },
      settlementChartReport: [],
      settlementChartTotals: { currencyTotals: {}, totalLakEquivalent: 0 },
      settlementCurrencyList: [],
      loadingSettlementMinistry: false,
      loadingSettlementBank: false,
      loadingSettlementChart: false,
    }
  },

  computed: {
    yearOptions() {
      const currentYear = new Date().getFullYear()
      const years = []
      for (let i = currentYear - 5; i <= currentYear + 2; i++) {
        years.push(i)
      }
      return years
    },

    // Convert dropdowns to YYYY-MM format for existing methods
    selectedMonth() {
      const monthStr = this.selectedMonthNum.toString().padStart(2, '0')
      return `${this.selectedYear}-${monthStr}`
    },

    maxDate() {
      // Restrict selection to current month or earlier
      const now = new Date()
      return now.toISOString().substr(0, 7) // YYYY-MM format
    },

    formattedSelectedMonth() {
      const monthName =
        this.monthOptions.find((m) => m.value === this.selectedMonthNum)
          ?.name || 'Invalid'
      return `${monthName} ${this.selectedYear}`
    },
  },

  async created() {
    this.setDefaultMonth()
    await this.fetchAllReports()
  },

  methods: {
    async calculateOutstandingBalance() {
      try {
        this.loadingOutstandingBalance = true

        console.log('Calculating outstanding balance...')

        // We need balance forward, current payments, and current settlements
        const balanceForward = this.balanceForwardData
        const currentPayments = this.paymentMinistryReport
        const currentSettlements = this.settlementMinistryReport

        // Create maps for easy lookup
        const ministryBalanceMap = new Map()
        const bankAccountBalanceMap = new Map()
        const allCurrencies = new Set()

        // Start with balance forward by ministry
        balanceForward.byMinistry.forEach((item) => {
          ministryBalanceMap.set(item.ministryId, {
            ministryId: item.ministryId,
            ministryCode: item.ministryCode,
            ministryName: item.ministryName,
            amounts: { ...item.amounts },
            totalLakEquivalent: item.totalLakEquivalent,
          })

          Object.keys(item.amounts || {}).forEach((currency) => {
            allCurrencies.add(currency)
          })
        })

        // Start with balance forward by bank account
        balanceForward.byBankAccount.forEach((item) => {
          bankAccountBalanceMap.set(item.bankAccountId, {
            bankAccountId: item.bankAccountId,
            accountNumber: item.accountNumber,
            accountName: item.accountName,
            bankName: item.bankName,
            amounts: { ...item.amounts },
            totalLakEquivalent: item.totalLakEquivalent,
          })

          Object.keys(item.amounts || {}).forEach((currency) => {
            allCurrencies.add(currency)
          })
        })

        // Add current month payments (positive to balance)
        currentPayments.forEach((payment) => {
          const ministryId = payment.ministryId

          if (!ministryBalanceMap.has(ministryId)) {
            ministryBalanceMap.set(ministryId, {
              ministryId,
              ministryCode: payment.ministryCode,
              ministryName: payment.ministryName,
              amounts: {},
              totalLakEquivalent: 0,
            })
          }

          const ministryBalance = ministryBalanceMap.get(ministryId)
          ministryBalance.totalLakEquivalent += payment.totalLakEquivalent

          Object.keys(payment.amounts || {}).forEach((currency) => {
            allCurrencies.add(currency)
            ministryBalance.amounts[currency] =
              (ministryBalance.amounts[currency] || 0) +
              payment.amounts[currency]
          })
        })

        // Add current month payments to bank accounts
        this.paymentBankReport.forEach((payment) => {
          const bankAccountId = payment.bankAccountId

          if (!bankAccountBalanceMap.has(bankAccountId)) {
            bankAccountBalanceMap.set(bankAccountId, {
              bankAccountId,
              accountNumber: payment.accountNumber,
              accountName: payment.accountName,
              bankName: payment.bankName,
              amounts: {},
              totalLakEquivalent: 0,
            })
          }

          const bankBalance = bankAccountBalanceMap.get(bankAccountId)
          bankBalance.totalLakEquivalent += payment.totalLakEquivalent

          Object.keys(payment.amounts || {}).forEach((currency) => {
            allCurrencies.add(currency)
            bankBalance.amounts[currency] =
              (bankBalance.amounts[currency] || 0) + payment.amounts[currency]
          })
        })

        // Subtract current month settlements (negative to balance)
        currentSettlements.forEach((settlement) => {
          const ministryId = settlement.ministryId

          if (!ministryBalanceMap.has(ministryId)) {
            ministryBalanceMap.set(ministryId, {
              ministryId,
              ministryCode: settlement.ministryCode,
              ministryName: settlement.ministryName,
              amounts: {},
              totalLakEquivalent: 0,
            })
          }

          const ministryBalance = ministryBalanceMap.get(ministryId)
          ministryBalance.totalLakEquivalent -= settlement.totalLakEquivalent

          Object.keys(settlement.amounts || {}).forEach((currency) => {
            allCurrencies.add(currency)
            ministryBalance.amounts[currency] =
              (ministryBalance.amounts[currency] || 0) -
              settlement.amounts[currency]
          })
        })

        // Subtract current month settlements from bank accounts
        this.settlementBankReport.forEach((settlement) => {
          const bankAccountId = settlement.bankAccountId

          if (!bankAccountBalanceMap.has(bankAccountId)) {
            bankAccountBalanceMap.set(bankAccountId, {
              bankAccountId,
              accountNumber: settlement.accountNumber,
              accountName: settlement.accountName,
              bankName: settlement.bankName,
              amounts: {},
              totalLakEquivalent: 0,
            })
          }

          const bankBalance = bankAccountBalanceMap.get(bankAccountId)
          bankBalance.totalLakEquivalent -= settlement.totalLakEquivalent

          Object.keys(settlement.amounts || {}).forEach((currency) => {
            allCurrencies.add(currency)
            bankBalance.amounts[currency] =
              (bankBalance.amounts[currency] || 0) -
              settlement.amounts[currency]
          })
        })

        // Calculate currency totals
        const currencyTotals = {}
        Array.from(allCurrencies).forEach((currency) => {
          currencyTotals[currency] = Array.from(
            ministryBalanceMap.values()
          ).reduce(
            (sum, ministry) => sum + (ministry.amounts[currency] || 0),
            0
          )
        })

        // Calculate total LAK equivalent
        const totalLakEquivalent = Array.from(
          ministryBalanceMap.values()
        ).reduce((sum, ministry) => sum + ministry.totalLakEquivalent, 0)

        // Set outstanding balance data
        this.outstandingBalanceData = {
          byMinistry: Array.from(ministryBalanceMap.values()).sort((a, b) => {
            if (a.ministryId === 'NO_MINISTRY') return 1
            if (b.ministryId === 'NO_MINISTRY') return -1
            return a.ministryName.localeCompare(b.ministryName)
          }),
          byBankAccount: Array.from(bankAccountBalanceMap.values()).sort(
            (a, b) => {
              if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
              if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1
              const bankComparison = a.bankName.localeCompare(b.bankName)
              if (bankComparison !== 0) return bankComparison
              return a.accountName.localeCompare(b.accountName)
            }
          ),
          byCurrency: Array.from(allCurrencies).map((currency) => ({
            currency,
            amount: currencyTotals[currency] || 0,
          })),
          totals: {
            currencyTotals,
            totalLakEquivalent,
          },
        }

        console.log('Outstanding balance calculated successfully')
      } catch (error) {
        console.error('Error calculating outstanding balance:', error)
        this.$toast.error('Failed to calculate outstanding balance')
      } finally {
        this.loadingOutstandingBalance = false
      }
    },
    setDefaultMonth() {
      const now = new Date()
      this.selectedYear = now.getFullYear()
      this.selectedMonthNum = now.getMonth() + 1
    },

    onDateChange() {
      console.log('Date changed to:', this.selectedMonth)
      this.fetchAllReports()
    },

    resetMonth() {
      this.setDefaultMonth()
      this.fetchAllReports()
    },

    getDateRanges() {
      if (!this.selectedMonth) return { current: {}, previous: {} }

      const [year, month] = this.selectedMonth.split('-')
      const currentYear = parseInt(year)
      const currentMonth = parseInt(month)

      // Current month range
      const currentStart = new Date(currentYear, currentMonth - 1, 1)
      const currentEnd = new Date(currentYear, currentMonth, 0) // Last day of current month

      // Previous month range (for balance forward)
      const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear
      const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1
      const previousStart = new Date(previousYear, 0, 1) // From beginning of year
      const previousEnd = new Date(currentYear, currentMonth - 1, 0) // Last day of previous month

      return {
        current: {
          start: currentStart.toISOString().substr(0, 10),
          end: currentEnd.toISOString().substr(0, 10),
        },
        previous: {
          start: previousStart.toISOString().substr(0, 10),
          end: previousEnd.toISOString().substr(0, 10),
        },
      }
    },

    // 3. UPDATE fetchAllReports method to include outstanding balance calculation
    // Replace the existing fetchAllReports method with this updated version:

    async fetchAllReports() {
      this.loading = true
      try {
        // Fetch all base reports first
        await Promise.all([
          this.fetchBalanceForward(),
          this.fetchPaymentMinistryReport(),
          this.fetchPaymentBankReport(),
          this.fetchSettlementMinistryReport(),
          this.fetchSettlementBankReport(),
          this.fetchSettlementChartReport(),
        ])

        // Calculate outstanding balance after all data is loaded
        await this.calculateOutstandingBalance()

        this.$toast.success('All reports loaded successfully')
      } catch (error) {
        console.error('Error loading reports:', error)
        this.$toast.error('Error loading some reports')
      } finally {
        this.loading = false
      }
    },
    // ========================================
    // BALANCE FORWARD METHODS
    // ========================================

    async fetchBalanceForward() {
      try {
        this.loadingBalanceForward = true

        console.log('Calculating balance forward...')

        const dateRanges = this.getDateRanges()
        if (!dateRanges.previous.start) {
          console.log('No date selected for balance forward')
          return
        }

        // Fetch payments and settlements from beginning of year to end of previous month
        const [paymentsData, settlementsData] = await Promise.all([
          this.fetchPaymentsForPeriod(
            dateRanges.previous.start,
            dateRanges.previous.end
          ),
          this.fetchSettlementsForPeriod(
            dateRanges.previous.start,
            dateRanges.previous.end
          ),
        ])

        console.log(
          `Balance Forward - Payments: ${paymentsData.length}, Settlements: ${settlementsData.length}`
        )

        // Calculate balance forward
        this.calculateBalanceForward(paymentsData, settlementsData)

        console.log('Balance forward calculated successfully')
      } catch (err) {
        console.error('Error calculating balance forward:', err)
        this.$toast.error('Failed to calculate balance forward')
      } finally {
        this.loadingBalanceForward = false
      }
    },

    async fetchPaymentsForPeriod(startDate, endDate) {
      let allPayments = []
      let currentPage = 1
      let totalPages = 1

      do {
        const response = await this.$axios.get('/api/money-advances', {
          params: {
            branchId: this.selectedBranchId,
            fromDate: startDate,
            toDate: endDate,
            include: ['ministry', 'currency', 'bankAccount'],
            page: currentPage,
            limit: 50,
          },
        })

        const pageData = response.data.data?.advances || []
        allPayments = allPayments.concat(pageData)

        const pagination = response.data.data?.pagination
        if (pagination) {
          totalPages = pagination.totalPages
        }

        currentPage++
      } while (currentPage <= totalPages)

      return allPayments
    },

    async fetchSettlementsForPeriod(startDate, endDate) {
      let allSettlements = []
      let currentPage = 1
      let totalPages = 1

      do {
        const response = await this.$axios.get('/api/settlements', {
          params: {
            branchId: this.selectedBranchId,
            fromDate: startDate,
            toDate: endDate,
            isPosted: true,
            include: ['ministry', 'currency', 'bankAccount'],
            page: currentPage,
            limit: 50,
          },
        })

        const pageData = response.data.data?.settlements || []
        allSettlements = allSettlements.concat(pageData)

        const pagination = response.data.data?.pagination
        if (pagination) {
          totalPages = pagination.totalPages
        }

        currentPage++
      } while (currentPage <= totalPages)

      return allSettlements
    },

    calculateBalanceForward(payments, settlements) {
      const ministryMap = new Map()
      const bankAccountMap = new Map()
      const currencyTotals = {}

      // Process payments (positive balances)
      payments.forEach((payment) => {
        const ministry = payment.ministry
        const bankAccount = payment.bankAccount
        const currencyCode = payment.currency?.code || 'LAK'
        const exchangeRate = parseFloat(payment.exchangeRate) || 1
        const amount = parseFloat(payment.amount) || 0
        const lakEquivalent = amount * exchangeRate

        // Ministry balance
        const ministryId = ministry?.id || 'NO_MINISTRY'
        const ministryCode = ministry?.ministryCode || 'N/A'
        const ministryName = ministry?.ministryName || 'No Ministry Assigned'

        if (!ministryMap.has(ministryId)) {
          ministryMap.set(ministryId, {
            ministryId,
            ministryCode,
            ministryName,
            amounts: {},
            totalLakEquivalent: 0,
          })
        }

        const ministryEntry = ministryMap.get(ministryId)
        ministryEntry.amounts[currencyCode] =
          (ministryEntry.amounts[currencyCode] || 0) + amount
        ministryEntry.totalLakEquivalent += lakEquivalent

        // Bank Account balance
        const bankAccountId = bankAccount?.id || 'NO_BANK_ACCOUNT'
        const accountNumber = bankAccount?.accountNumber || 'N/A'
        const accountName = bankAccount?.accountName || 'Cash Transaction'
        const bankName = bankAccount?.bankName || 'No Bank'

        if (!bankAccountMap.has(bankAccountId)) {
          bankAccountMap.set(bankAccountId, {
            bankAccountId,
            accountNumber,
            accountName,
            bankName,
            amounts: {},
            totalLakEquivalent: 0,
          })
        }

        const bankAccountEntry = bankAccountMap.get(bankAccountId)
        bankAccountEntry.amounts[currencyCode] =
          (bankAccountEntry.amounts[currencyCode] || 0) + amount
        bankAccountEntry.totalLakEquivalent += lakEquivalent

        // Currency totals
        currencyTotals[currencyCode] =
          (currencyTotals[currencyCode] || 0) + amount
      })

      // Process settlements (subtract from balances)
      settlements.forEach((settlement) => {
        const ministry = settlement.ministry
        const bankAccount = settlement.bankAccount
        const currencyCode = settlement.currency?.code || 'LAK'
        const exchangeRate = parseFloat(settlement.exchangeRate) || 1
        const amount = parseFloat(settlement.amount) || 0
        const lakEquivalent = amount * exchangeRate

        // Ministry balance
        const ministryId = ministry?.id || 'NO_MINISTRY'
        const ministryCode = ministry?.ministryCode || 'N/A'
        const ministryName = ministry?.ministryName || 'No Ministry Assigned'

        if (!ministryMap.has(ministryId)) {
          ministryMap.set(ministryId, {
            ministryId,
            ministryCode,
            ministryName,
            amounts: {},
            totalLakEquivalent: 0,
          })
        }

        const ministryEntry = ministryMap.get(ministryId)
        ministryEntry.amounts[currencyCode] =
          (ministryEntry.amounts[currencyCode] || 0) - amount
        ministryEntry.totalLakEquivalent -= lakEquivalent

        // Bank Account balance
        const bankAccountId = bankAccount?.id || 'NO_BANK_ACCOUNT'
        const accountNumber = bankAccount?.accountNumber || 'N/A'
        const accountName = bankAccount?.accountName || 'Cash Transaction'
        const bankName = bankAccount?.bankName || 'No Bank'

        if (!bankAccountMap.has(bankAccountId)) {
          bankAccountMap.set(bankAccountId, {
            bankAccountId,
            accountNumber,
            accountName,
            bankName,
            amounts: {},
            totalLakEquivalent: 0,
          })
        }

        const bankAccountEntry = bankAccountMap.get(bankAccountId)
        bankAccountEntry.amounts[currencyCode] =
          (bankAccountEntry.amounts[currencyCode] || 0) - amount
        bankAccountEntry.totalLakEquivalent -= lakEquivalent

        // Currency totals
        currencyTotals[currencyCode] =
          (currencyTotals[currencyCode] || 0) - amount
      })

      // Calculate total LAK equivalent properly
      const totalLakEquivalent = Array.from(ministryMap.values()).reduce(
        (sum, m) => sum + m.totalLakEquivalent,
        0
      )

      // Set balance forward data
      this.balanceForwardData = {
        byMinistry: Array.from(ministryMap.values()).sort((a, b) => {
          if (a.ministryId === 'NO_MINISTRY') return 1
          if (b.ministryId === 'NO_MINISTRY') return -1
          return a.ministryName.localeCompare(b.ministryName)
        }),
        byBankAccount: Array.from(bankAccountMap.values()).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1
          const bankComparison = a.bankName.localeCompare(b.bankName)
          if (bankComparison !== 0) return bankComparison
          return a.accountName.localeCompare(b.accountName)
        }),
        totals: {
          currencyTotals,
          totalLakEquivalent,
        },
      }

      console.log('Balance Forward Data:', this.balanceForwardData)
    },

    // ========================================
    // PAYMENT REPORTS
    // ========================================

    async fetchPaymentMinistryReport() {
      try {
        this.loadingPaymentMinistry = true

        console.log('Fetching payment ministry report...')

        const dateRanges = this.getDateRanges()
        if (!dateRanges.current.start) {
          console.log('No month selected')
          return
        }

        const allPayments = await this.fetchPaymentsForPeriod(
          dateRanges.current.start,
          dateRanges.current.end
        )

        console.log(`Current month payments: ${allPayments.length}`)

        // Process payment ministry data
        const ministryMap = new Map()
        const currencySet = new Set()

        allPayments.forEach((advance) => {
          const ministry = advance.ministry
          let ministryId, ministryName, ministryCode

          if (ministry) {
            ministryId = ministry.id
            ministryName = ministry.ministryName
            ministryCode = ministry.ministryCode
          } else {
            ministryId = 'NO_MINISTRY'
            ministryName = 'No Ministry Assigned'
            ministryCode = 'N/A'
          }

          const currencyCode = advance.currency?.code || 'LAK'
          const exchangeRate = parseFloat(advance.exchangeRate) || 1
          const amount = parseFloat(advance.amount) || 0
          const lakEquivalent = amount * exchangeRate

          currencySet.add(currencyCode)

          if (!ministryMap.has(ministryId)) {
            ministryMap.set(ministryId, {
              ministryId,
              ministryName,
              ministryCode,
              count: 0,
              totalLakEquivalent: 0,
              amounts: {},
            })
          }

          const ministryRow = ministryMap.get(ministryId)
          ministryRow.count += 1
          ministryRow.totalLakEquivalent += lakEquivalent
          ministryRow.amounts[currencyCode] =
            (ministryRow.amounts[currencyCode] || 0) + amount
        })

        this.paymentCurrencyList = Array.from(currencySet).sort()
        this.paymentMinistryReport = Array.from(ministryMap.values()).sort(
          (a, b) => {
            if (a.ministryId === 'NO_MINISTRY') return 1
            if (b.ministryId === 'NO_MINISTRY') return -1
            return a.ministryName.localeCompare(b.ministryName)
          }
        )

        console.log(
          `Payment ministry report: ${this.paymentMinistryReport.length} ministries`
        )

        // Calculate totals
        this.paymentMinistryTotals = {
          totalLakEquivalent: this.paymentMinistryReport.reduce(
            (sum, m) => sum + m.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.paymentCurrencyList.forEach((currency) => {
          this.paymentMinistryTotals.currencyTotals[currency] =
            this.paymentMinistryReport.reduce(
              (sum, m) => sum + (m.amounts[currency] || 0),
              0
            )
        })
      } catch (err) {
        console.error('Error fetching payment ministry report:', err)
        this.$toast.error(
          'Failed to fetch payment ministry report: ' + err.message
        )
      } finally {
        this.loadingPaymentMinistry = false
      }
    },

    async fetchPaymentBankReport() {
      try {
        this.loadingPaymentBank = true

        console.log('Fetching payment bank report...')

        const dateRanges = this.getDateRanges()
        if (!dateRanges.current.start) return

        const allPayments = await this.fetchPaymentsForPeriod(
          dateRanges.current.start,
          dateRanges.current.end
        )

        console.log(
          `Current month payments for bank report: ${allPayments.length}`
        )

        // Process payment bank data
        const bankAccountMap = new Map()
        const currencySet = new Set()

        allPayments.forEach((advance) => {
          const bankAccount = advance.bankAccount
          let bankAccountId, accountNumber, accountName, bankName

          if (bankAccount) {
            bankAccountId = bankAccount.id
            accountNumber = bankAccount.accountNumber
            accountName = bankAccount.accountName
            bankName = bankAccount.bankName
          } else {
            bankAccountId = 'NO_BANK_ACCOUNT'
            accountNumber = 'N/A'
            accountName = 'Cash Transaction'
            bankName = 'No Bank'
          }

          const currencyCode = advance.currency?.code || 'LAK'
          const exchangeRate = parseFloat(advance.exchangeRate) || 1
          const amount = parseFloat(advance.amount) || 0
          const lakEquivalent = amount * exchangeRate

          currencySet.add(currencyCode)

          if (!bankAccountMap.has(bankAccountId)) {
            bankAccountMap.set(bankAccountId, {
              bankAccountId,
              accountNumber,
              accountName,
              bankName,
              count: 0,
              totalLakEquivalent: 0,
              amounts: {},
            })
          }

          const bankAccountRow = bankAccountMap.get(bankAccountId)
          bankAccountRow.count += 1
          bankAccountRow.totalLakEquivalent += lakEquivalent
          bankAccountRow.amounts[currencyCode] =
            (bankAccountRow.amounts[currencyCode] || 0) + amount
        })

        this.paymentCurrencyList = Array.from(currencySet).sort()
        this.paymentBankReport = Array.from(bankAccountMap.values()).sort(
          (a, b) => {
            if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
            if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1
            const bankComparison = a.bankName.localeCompare(b.bankName)
            if (bankComparison !== 0) return bankComparison
            return a.accountName.localeCompare(b.accountName)
          }
        )

        console.log(
          `Payment bank report: ${this.paymentBankReport.length} bank accounts`
        )

        // Calculate totals
        this.paymentBankTotals = {
          totalLakEquivalent: this.paymentBankReport.reduce(
            (sum, b) => sum + b.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.paymentCurrencyList.forEach((currency) => {
          this.paymentBankTotals.currencyTotals[currency] =
            this.paymentBankReport.reduce(
              (sum, b) => sum + (b.amounts[currency] || 0),
              0
            )
        })
      } catch (err) {
        console.error('Error fetching payment bank report:', err)
        this.$toast.error('Failed to fetch payment bank report: ' + err.message)
      } finally {
        this.loadingPaymentBank = false
      }
    },

    // ========================================
    // SETTLEMENT REPORTS
    // ========================================

    async fetchSettlementMinistryReport() {
      try {
        this.loadingSettlementMinistry = true

        const dateRanges = this.getDateRanges()
        if (!dateRanges.current.start) return

        const allSettlements = await this.fetchSettlementsForPeriod(
          dateRanges.current.start,
          dateRanges.current.end
        )

        // Process settlement ministry data
        const ministryMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const ministry = settlement.ministry
          let ministryId, ministryName, ministryCode

          if (ministry) {
            ministryId = ministry.id
            ministryName = ministry.ministryName
            ministryCode = ministry.ministryCode
          } else {
            ministryId = 'NO_MINISTRY'
            ministryName = 'No Ministry Assigned'
            ministryCode = 'N/A'
          }

          const currencyCode = settlement.currency?.code || 'LAK'
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1
          const amount = parseFloat(settlement.amount) || 0
          const lakEquivalent = amount * exchangeRate

          currencySet.add(currencyCode)

          if (!ministryMap.has(ministryId)) {
            ministryMap.set(ministryId, {
              ministryId,
              ministryName,
              ministryCode,
              count: 0,
              totalLakEquivalent: 0,
              amounts: {},
            })
          }

          const ministryRow = ministryMap.get(ministryId)
          ministryRow.count += 1
          ministryRow.totalLakEquivalent += lakEquivalent
          ministryRow.amounts[currencyCode] =
            (ministryRow.amounts[currencyCode] || 0) + amount
        })

        this.settlementCurrencyList = Array.from(currencySet).sort()
        this.settlementMinistryReport = Array.from(ministryMap.values()).sort(
          (a, b) => {
            if (a.ministryId === 'NO_MINISTRY') return 1
            if (b.ministryId === 'NO_MINISTRY') return -1
            return a.ministryName.localeCompare(b.ministryName)
          }
        )

        // Calculate totals
        this.settlementMinistryTotals = {
          totalLakEquivalent: this.settlementMinistryReport.reduce(
            (sum, m) => sum + m.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.settlementCurrencyList.forEach((currency) => {
          this.settlementMinistryTotals.currencyTotals[currency] =
            this.settlementMinistryReport.reduce(
              (sum, m) => sum + (m.amounts[currency] || 0),
              0
            )
        })
      } catch (err) {
        console.error('Error fetching settlement ministry report:', err)
        this.$toast.error('Failed to fetch settlement ministry report.')
      } finally {
        this.loadingSettlementMinistry = false
      }
    },

    async fetchSettlementBankReport() {
      try {
        this.loadingSettlementBank = true

        const dateRanges = this.getDateRanges()
        if (!dateRanges.current.start) return

        const allSettlements = await this.fetchSettlementsForPeriod(
          dateRanges.current.start,
          dateRanges.current.end
        )

        // Process settlement bank data
        const bankAccountMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const bankAccount = settlement.bankAccount
          let bankAccountId, accountNumber, accountName, bankName

          if (bankAccount) {
            bankAccountId = bankAccount.id
            accountNumber = bankAccount.accountNumber
            accountName = bankAccount.accountName
            bankName = bankAccount.bankName
          } else {
            bankAccountId = 'NO_BANK_ACCOUNT'
            accountNumber = 'N/A'
            accountName = 'Cash Transaction'
            bankName = 'No Bank'
          }

          const currencyCode = settlement.currency?.code || 'LAK'
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1
          const amount = parseFloat(settlement.amount) || 0
          const lakEquivalent = amount * exchangeRate

          currencySet.add(currencyCode)

          if (!bankAccountMap.has(bankAccountId)) {
            bankAccountMap.set(bankAccountId, {
              bankAccountId,
              accountNumber,
              accountName,
              bankName,
              count: 0,
              totalLakEquivalent: 0,
              amounts: {},
            })
          }

          const bankAccountRow = bankAccountMap.get(bankAccountId)
          bankAccountRow.count += 1
          bankAccountRow.totalLakEquivalent += lakEquivalent
          bankAccountRow.amounts[currencyCode] =
            (bankAccountRow.amounts[currencyCode] || 0) + amount
        })

        this.settlementCurrencyList = Array.from(currencySet).sort()
        this.settlementBankReport = Array.from(bankAccountMap.values()).sort(
          (a, b) => {
            if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
            if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1
            const bankComparison = a.bankName.localeCompare(b.bankName)
            if (bankComparison !== 0) return bankComparison
            return a.accountName.localeCompare(b.accountName)
          }
        )

        // Calculate totals
        this.settlementBankTotals = {
          totalLakEquivalent: this.settlementBankReport.reduce(
            (sum, b) => sum + b.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.settlementCurrencyList.forEach((currency) => {
          this.settlementBankTotals.currencyTotals[currency] =
            this.settlementBankReport.reduce(
              (sum, b) => sum + (b.amounts[currency] || 0),
              0
            )
        })
      } catch (err) {
        console.error('Error fetching settlement bank report:', err)
        this.$toast.error('Failed to fetch settlement bank report.')
      } finally {
        this.loadingSettlementBank = false
      }
    },

    async fetchSettlementChartReport() {
      try {
        this.loadingSettlementChart = true

        const dateRanges = this.getDateRanges()
        if (!dateRanges.current.start) return

        const allSettlements = await this.fetchSettlementsForPeriod(
          dateRanges.current.start,
          dateRanges.current.end
        )

        // Process settlement chart account data
        const chartAccountMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const chartAccount = settlement.chartAccount
          let chartAccountId, chartAccountCode, chartAccountName

          if (chartAccount) {
            chartAccountId = chartAccount.id
            chartAccountCode = chartAccount.accountCode || chartAccount.code
            chartAccountName = chartAccount.accountName || chartAccount.name
          } else {
            chartAccountId = 'NO_CHART_ACCOUNT'
            chartAccountCode = 'N/A'
            chartAccountName = 'No Chart Account'
          }

          const currencyCode = settlement.currency?.code || 'LAK'
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1
          const amount = parseFloat(settlement.amount) || 0
          const lakEquivalent = amount * exchangeRate

          currencySet.add(currencyCode)

          if (!chartAccountMap.has(chartAccountId)) {
            chartAccountMap.set(chartAccountId, {
              chartAccountId,
              chartAccountCode,
              chartAccountName,
              count: 0,
              totalLakEquivalent: 0,
              amounts: {},
            })
          }

          const chartAccountRow = chartAccountMap.get(chartAccountId)
          chartAccountRow.count += 1
          chartAccountRow.totalLakEquivalent += lakEquivalent
          chartAccountRow.amounts[currencyCode] =
            (chartAccountRow.amounts[currencyCode] || 0) + amount
        })

        this.settlementCurrencyList = Array.from(currencySet).sort()
        this.settlementChartReport = Array.from(chartAccountMap.values()).sort(
          (a, b) => {
            if (a.chartAccountId === 'NO_CHART_ACCOUNT') return 1
            if (b.chartAccountId === 'NO_CHART_ACCOUNT') return -1
            return a.chartAccountCode.localeCompare(b.chartAccountCode)
          }
        )

        // Calculate totals
        this.settlementChartTotals = {
          totalLakEquivalent: this.settlementChartReport.reduce(
            (sum, c) => sum + c.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.settlementCurrencyList.forEach((currency) => {
          this.settlementChartTotals.currencyTotals[currency] =
            this.settlementChartReport.reduce(
              (sum, c) => sum + (c.amounts[currency] || 0),
              0
            )
        })
      } catch (err) {
        console.error('Error fetching settlement chart report:', err)
        this.$toast.error('Failed to fetch settlement chart report.')
      } finally {
        this.loadingSettlementChart = false
      }
    },

    // ========================================
    // UTILITY METHODS
    // ========================================

    formatAmount(amount) {
      if (!amount || amount === 0) return '0'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    async exportReport(reportType) {
      this.exporting = true
      try {
        let data = []
        let filename = ''

        switch (reportType) {
          case 'balance-ministry':
            data = this.prepareExportData(
              this.balanceForwardData.byMinistry,
              Object.keys(this.balanceForwardData.totals.currencyTotals),
              'ministry'
            )
            filename = 'Balance_Forward_By_Ministry'
            break
          case 'payment-ministry':
            data = this.prepareExportData(
              this.paymentMinistryReport,
              this.paymentCurrencyList,
              'ministry'
            )
            filename = 'Payment_By_Ministry'
            break
          case 'payment-bank':
            data = this.prepareExportData(
              this.paymentBankReport,
              this.paymentCurrencyList,
              'bank'
            )
            filename = 'Payment_By_Bank_Account'
            break
          case 'settlement-ministry':
            data = this.prepareExportData(
              this.settlementMinistryReport,
              this.settlementCurrencyList,
              'ministry'
            )
            filename = 'Settlement_By_Ministry'
            break
          case 'settlement-bank':
            data = this.prepareExportData(
              this.settlementBankReport,
              this.settlementCurrencyList,
              'bank'
            )
            filename = 'Settlement_By_Bank_Account'
            break
          case 'settlement-chart':
            data = this.prepareExportData(
              this.settlementChartReport,
              this.settlementCurrencyList,
              'chart'
            )
            filename = 'Settlement_By_Chart_Account'
            break

          case 'outstanding-ministry':
            data = this.prepareExportData(
              this.outstandingBalanceData.byMinistry,
              Object.keys(this.outstandingBalanceData.totals.currencyTotals),
              'ministry'
            )
            filename = 'Outstanding_Balance_By_Ministry'
            break
          case 'outstanding-bank':
            data = this.prepareExportData(
              this.outstandingBalanceData.byBankAccount,
              Object.keys(this.outstandingBalanceData.totals.currencyTotals),
              'bank'
            )
            filename = 'Outstanding_Balance_By_Bank_Account'
            break
        }

        await this.exportToCSV(data, filename)
        this.$toast.success(`${filename} exported successfully`)
      } catch (error) {
        console.error('Error exporting report:', error)
        this.$toast.error('Failed to export report')
      } finally {
        this.exporting = false
      }
    },

    prepareExportData(reportData, currencyList, type) {
      return reportData.map((item, index) => {
        const row = { '#': index + 1 }

        if (type === 'ministry') {
          row['Ministry Code'] = item.ministryCode
          row['Ministry Name'] = item.ministryName
        } else if (type === 'bank') {
          row['Account Number'] = item.accountNumber
          row['Account Name'] = item.accountName
          row['Bank Name'] = item.bankName
        } else if (type === 'chart') {
          row['Chart Account Code'] = item.chartAccountCode
          row['Chart Account Name'] = item.chartAccountName
        }

        if (item.count !== undefined) {
          row['Count'] = item.count
        }

        currencyList.forEach((currency) => {
          row[currency] = this.formatAmount(item.amounts?.[currency] || 0)
        })

        row['Total (LAK)'] = this.formatAmount(item.totalLakEquivalent || 0)

        return row
      })
    },

    async exportToCSV(data, filename) {
      if (data.length === 0) return

      const headers = Object.keys(data[0])
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          headers.map((header) => `"${row[header] || ''}"`).join(',')
        ),
      ].join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute(
        'download',
        `${filename}-${new Date().toISOString().substr(0, 10)}.csv`
      )
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    },
  },
}
</script>

<style scoped>
.payment-settlement-analysis {
  padding: 0;

  .analysis-page {
    background-color: #f8f9fa;
    min-height: 100vh;
  }

  .report-header {
    margin-bottom: 24px;
  }

  .analysis-section-header {
    padding: 16px 0 8px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid #e0e0e0;
  }

  /* Filter Card Styles */
  .filter-card {
    border-radius: 12px;
    overflow: hidden;
  }

  .filter-title {
    font-size: 14px;
    font-weight: 600;
    color: #5f6368;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Summary Card Styles */
  .summary-card {
    border-radius: 12px;
    transition: transform 0.2s;
  }

  .summary-card:hover {
    transform: translateY(-2px);
  }

  .summary-icon-container {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .summary-details {
    display: flex;
    flex-direction: column;
  }

  .summary-title {
    font-size: 11px;
    font-weight: 600;
    color: #70757a;
    margin-bottom: 4px;
  }

  .summary-amount {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
  }

  .summary-lcy {
    font-size: 11px;
    color: #70757a;
    margin-top: 2px;
  }

  /* Table Styles */
  .report-table-card {
    border-radius: 12px;
    overflow: hidden;
  }

  .report-table thead th {
    background-color: #f8f9fa !important;
    color: #5f6368 !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    height: 44px !important;
    border-bottom: 2px solid #e0e0e0 !important;
  }

  .report-table tbody td {
    font-size: 13px !important;
    height: 48px !important;
    color: #3c4043;
  }

  .report-table tbody tr:hover {
    background-color: #f1f3f4 !important;
  }

  .total-row {
    background-color: #f8f9fa !important;
  }

  .total-row td {
    border-top: 2px solid #e0e0e0 !important;
  }

  .highlight-row {
    background-color: #fff9c4 !important;
  }

  /* Utilities */
  .font-monospace {
    font-family: 'Roboto Mono', monospace !important;
    letter-spacing: -0.5px;
  }

  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 960px) {
    .summary-amount {
      font-size: 18px;
    }
  }
}
</style>