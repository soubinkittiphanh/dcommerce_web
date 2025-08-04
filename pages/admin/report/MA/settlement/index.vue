<template>
  <v-container fluid class="pa-4">
    <!-- Header -->
    <v-row class="mb-4">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold primary--text">
          Settlements Dashboard
        </h1>
        <p class="text-subtitle-1 grey--text">
          Manage and monitor all settlement transactions
        </p>
      </v-col>
      <v-col cols="12" md="4" class="text-right">
        <v-btn color="primary" large @click="openCreateDialog" class="mr-2">
          <v-icon left>mdi-plus</v-icon>
          New Settlement
        </v-btn>
        <v-btn
          color="secondary"
          large
          outlined
          @click="refreshData"
          :loading="loading"
        >
          <v-icon left>mdi-refresh</v-icon>
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <!-- Summary Cards -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="3">
        <v-card color="primary" dark class="text-center" elevation="3">
          <v-card-text class="pb-2">
            <v-icon size="40" class="mb-2">mdi-file-document-multiple</v-icon>
            <div class="text-h4 font-weight-bold">
              {{ stats.totalCount || 0 }}
            </div>
            <div class="text-subtitle-1">Total Settlements</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card color="success" dark class="text-center" elevation="3">
          <v-card-text class="pb-2">
            <v-icon size="40" class="mb-2">mdi-currency-usd</v-icon>
            <div class="text-h5 font-weight-bold">
              ₭{{ formatAmount(stats.totalAmount) || '0.00' }}
            </div>
            <div class="text-subtitle-1">Total Amount</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card color="info" dark class="text-center" elevation="3">
          <v-card-text class="pb-2">
            <v-icon size="40" class="mb-2">mdi-calendar-month</v-icon>
            <div class="text-h4 font-weight-bold">
              {{ stats.thisMonth || 0 }}
            </div>
            <div class="text-subtitle-1">This Month</div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card color="warning" dark class="text-center" elevation="3">
          <v-card-text class="pb-2">
            <v-icon size="40" class="mb-2">mdi-clock-outline</v-icon>
            <div class="text-h4 font-weight-bold">{{ stats.pending || 0 }}</div>
            <div class="text-subtitle-1">Pending</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Charts Row -->
    <v-row class="mb-6">
      <v-col cols="12" md="4">
        <v-card elevation="2">
          <v-card-title class="primary--text">
            <v-icon color="primary" class="mr-2">mdi-chart-donut</v-icon>
            Settlement Methods
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <canvas ref="methodChart" width="100%" height="100%"></canvas>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card elevation="2">
          <v-card-title class="primary--text">
            <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
            Monthly Trends
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px">
            <canvas ref="trendChart" width="100%" height="100%"></canvas>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card elevation="2">
          <v-card-title class="primary--text">
            <v-icon color="primary" class="mr-2">mdi-office-building</v-icon>
            Ministry & Currency Summary
            <v-spacer></v-spacer>
            <v-btn
              icon
              small
              @click="fetchMinistrySummary"
              :loading="loadingMinistrySummary"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px; overflow-y: auto">
            <div v-if="loadingMinistrySummary" class="text-center pa-4">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
              <div class="mt-2 text-caption">Loading summary...</div>
            </div>

            <div
              v-else-if="ministrySummary.length === 0"
              class="text-center pa-4"
            >
              <v-icon size="48" color="grey lighten-2"
                >mdi-information-outline</v-icon
              >
              <div class="mt-2 text-subtitle-2 grey--text">
                No ministry data available
              </div>
            </div>

            <v-expansion-panels v-else accordion flat>
              <v-expansion-panel
                v-for="ministry in ministrySummary"
                :key="ministry.ministryId"
              >
                <v-expansion-panel-header>
                  <div class="d-flex justify-space-between align-center">
                    <div>
                      <div class="font-weight-medium text-subtitle-2">
                        {{
                          ministry.ministryName ||
                          `Ministry #${ministry.ministryId}`
                        }}
                      </div>
                      <div class="text-caption grey--text">
                        {{ ministry.settlementCount }} settlements
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="font-weight-bold success--text">
                        ₭{{ formatAmount(ministry.totalLakEquivalent) }}
                      </div>
                      <div class="text-caption grey--text">
                        {{ ministry.currencies.length }} currencies
                      </div>
                    </div>
                  </div>
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <v-list dense>
                    <v-list-item
                      v-for="currency in ministry.currencies"
                      :key="`${ministry.ministryId}-${currency.currencyId}`"
                      class="px-0"
                    >
                      <v-list-item-avatar size="24">
                        <v-chip
                          x-small
                          :color="getCurrencyColor(currency.currencyCode)"
                          dark
                        >
                          {{ currency.currencyCode || 'LAK' }}
                        </v-chip>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title class="text-body-2">
                          {{ currency.currencyCode || 'LAK' }} -
                          {{ currency.count }} settlements
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-caption">
                          Rate: {{ currency.avgExchangeRate }}
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <div class="text-right">
                          <div class="font-weight-medium text-body-2">
                            {{ currency.currencySymbol
                            }}{{ formatAmount(currency.totalAmount) }}
                          </div>
                          <div class="text-caption success--text">
                            ₭{{ formatAmount(currency.lakEquivalent) }}
                          </div>
                        </div>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Chart Ministry Report -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl">
          <v-card-title class="primary--text py-2 px-4 d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-office-building</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              ລາຍງານ ຕາມກົມ
            </span>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <!-- Export Button -->
            <v-btn
              color="success"
              small
              outlined
              class="mr-2"
              @click="exportMinistryReportToExcel"
              :disabled="!ministrySummaryReport.length"
            >
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn
              icon
              small
              @click="fetchMinistryReport"
              :loading="loadingMinistryReport"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingMinistryReport" class="text-center py-6">
              <v-progress-circular indeterminate color="primary" />
              <div class="mt-2 text-caption">Loading ministry report...</div>
            </div>

            <div
              v-else-if="!ministrySummaryReport.length"
              class="text-center py-6"
            >
              <v-icon size="48" color="grey lighten-2"
                >mdi-information-outline</v-icon
              >
              <div class="mt-2 text-subtitle-2 grey--text">
                No ministry data available
              </div>
            </div>

            <v-simple-table v-else dense>
              <template v-slot:default>
                <thead>
                  <tr class="primary lighten-3">
                    <th class="white--text text-caption font-weight-bold">#</th>
                    <th class="white--text text-caption font-weight-bold">
                      Ministry Code
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Ministry Name
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Count
                    </th>
                    <th
                      v-for="currency in currencyList"
                      :key="'head-' + currency"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      {{ currency }}
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Total (LAK)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in ministrySummaryReport"
                    :key="item.ministryId"
                    :class="{
                      'grey lighten-5': index % 2 === 0,
                      'orange lighten-4': item.ministryId === 'NO_MINISTRY',
                    }"
                  >
                    <td class="text-caption text-center">{{ index + 1 }}</td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text': item.ministryId === 'NO_MINISTRY',
                      }"
                    >
                      {{ item.ministryCode }}
                    </td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text font-italic':
                          item.ministryId === 'NO_MINISTRY',
                      }"
                    >
                      {{ item.ministryName }}
                    </td>
                    <td class="text-body-2 text-right">
                      {{ item.settlementCount }}
                    </td>
                    <td
                      v-for="currency in currencyList"
                      :key="'amt-' + currency"
                      class="text-body-2 text-right"
                    >
                      {{ formatAmount(item.amounts?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>

                  <!-- Totals -->
                  <tr class="primary lighten-4">
                    <td colspan="3" class="font-weight-bold text-caption">
                      ລວມ
                    </td>
                    <td class="text-right font-weight-bold text-body-2">
                      {{
                        ministrySummaryReport.reduce(
                          (sum, m) => sum + m.settlementCount,
                          0
                        )
                      }}
                    </td>
                    <td
                      v-for="currency in currencyList"
                      :key="'sum-' + currency"
                      class="text-right font-weight-bold text-body-2"
                    >
                      {{
                        formatAmount(
                          ministryTotals?.currencyTotals?.[currency] || 0
                        )
                      }}
                    </td>
                    <td
                      class="text-right font-weight-bold text-body-2 primary--text"
                    >
                      {{
                        formatAmount(ministryTotals?.totalLakEquivalent || 0)
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
    <!-- Chart Bank Account Report -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl">
          <v-card-title class="primary--text py-2 px-4 d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-bank</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              ລາຍງານຕາມບັນຊີ ທະນາຄານ
             
            </span>
            <v-spacer></v-spacer>
            <!-- Export Button -->
            <v-btn
              color="success"
              small
              outlined
              class="mr-2"
              @click="exportBankAccountReportToExcel"
              :disabled="!bankAccountSummaryReport.length"
            >
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn
              icon
              small
              @click="fetchBankAccountReport"
              :loading="loadingBankAccountReport"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingBankAccountReport" class="text-center py-6">
              <v-progress-circular indeterminate color="primary" />
              <div class="mt-2 text-caption">
                Loading bank account report...
              </div>
            </div>

            <div
              v-else-if="!bankAccountSummaryReport.length"
              class="text-center py-6"
            >
              <v-icon size="48" color="grey lighten-2"
                >mdi-information-outline</v-icon
              >
              <div class="mt-2 text-subtitle-2 grey--text">
                No bank account data available
              </div>
            </div>

            <v-simple-table v-else dense>
              <template v-slot:default>
                <thead>
                  <tr class="primary lighten-3">
                    <th class="white--text text-caption font-weight-bold">#</th>
                    <th class="white--text text-caption font-weight-bold">
                      Account Number
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Account Name
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Bank Name
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Type
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Count
                    </th>
                    <th
                      v-for="currency in currencyList"
                      :key="'head-' + currency"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      {{ currency }}
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Total (LAK)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in bankAccountSummaryReport"
                    :key="item.bankAccountId"
                    :class="{
                      'grey lighten-5': index % 2 === 0,
                      'orange lighten-4':
                        item.bankAccountId === 'NO_BANK_ACCOUNT',
                    }"
                  >
                    <td class="text-caption text-center">{{ index + 1 }}</td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text': item.bankAccountId === 'NO_BANK_ACCOUNT',
                      }"
                    >
                      {{ item.accountNumber }}
                    </td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text font-italic':
                          item.bankAccountId === 'NO_BANK_ACCOUNT',
                      }"
                    >
                      {{ item.accountName }}
                    </td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text font-italic':
                          item.bankAccountId === 'NO_BANK_ACCOUNT',
                      }"
                    >
                      {{ item.bankName }}
                    </td>
                    <td class="text-body-2">
                      <v-chip
                        x-small
                        :color="item.accountType === 'Cash' ? 'orange' : 'blue'"
                        :text-color="
                          item.accountType === 'Cash' ? 'white' : 'white'
                        "
                      >
                        {{ item.accountType }}
                      </v-chip>
                    </td>
                    <td class="text-body-2 text-right">
                      {{ item.settlementCount }}
                    </td>
                    <td
                      v-for="currency in currencyList"
                      :key="'amt-' + currency"
                      class="text-body-2 text-right"
                    >
                      {{ formatAmount(item.amounts?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>

                  <!-- Totals -->
                  <tr class="primary lighten-4">
                    <td colspan="5" class="font-weight-bold text-caption">
                      ລວມ
                    </td>
                    <td class="text-right font-weight-bold text-body-2">
                      {{
                        bankAccountSummaryReport.reduce(
                          (sum, b) => sum + b.settlementCount,
                          0
                        )
                      }}
                    </td>
                    <td
                      v-for="currency in currencyList"
                      :key="'sum-' + currency"
                      class="text-right font-weight-bold text-body-2"
                    >
                      {{
                        formatAmount(
                          bankAccountTotals?.currencyTotals?.[currency] || 0
                        )
                      }}
                    </td>
                    <td
                      class="text-right font-weight-bold text-body-2 primary--text"
                    >
                      {{
                        formatAmount(bankAccountTotals?.totalLakEquivalent || 0)
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
    <!-- Chart Account Financial Report -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl">
          <v-card-title class="primary--text py-2 px-4 d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-account-multiple</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              ລາຍງານ ຕາມຫົວບັນຊີ
            </span>

            <v-spacer></v-spacer>
            <!-- Export Button -->
            <v-btn
              color="success"
              small
              outlined
              class="mr-2"
              @click="exportChartAccountReportToExcel"
              :disabled="!chartAccountSummaryReport.length"
            >
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn
              icon
              small
              @click="fetchChartAccountReport"
              :loading="loadingChartAccountReport"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingChartAccountReport" class="text-center py-6">
              <v-progress-circular indeterminate color="primary" />
              <div class="mt-2 text-caption">
                Loading chart account report...
              </div>
            </div>

            <div
              v-else-if="!chartAccountSummaryReport.length"
              class="text-center py-6"
            >
              <v-icon size="48" color="grey lighten-2"
                >mdi-information-outline</v-icon
              >
              <div class="mt-2 text-subtitle-2 grey--text">
                No chart account data available
              </div>
            </div>

            <v-simple-table v-else dense>
              <template v-slot:default>
                <thead>
                  <tr class="primary lighten-3">
                    <th class="white--text text-caption font-weight-bold">#</th>
                    <th class="white--text text-caption font-weight-bold">
                      Account Number
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Account Name
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Count
                    </th>
                    <th
                      v-for="currency in currencyList"
                      :key="'head-' + currency"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      {{ currency }}
                    </th>
                    <th
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      Total (LAK)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in chartAccountSummaryReport"
                    :key="item.chartAccountId"
                    :class="{
                      'grey lighten-5': index % 2 === 0,
                      'orange lighten-4':
                        item.chartAccountId === 'NO_CHART_ACCOUNT',
                    }"
                  >
                    <td class="text-caption text-center">{{ index + 1 }}</td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text':
                          item.chartAccountId === 'NO_CHART_ACCOUNT',
                      }"
                    >
                      {{ item.accountNumber }}
                    </td>
                    <td
                      class="text-body-2"
                      :class="{
                        'grey--text font-italic':
                          item.chartAccountId === 'NO_CHART_ACCOUNT',
                      }"
                    >
                      {{ item.accountName }}
                    </td>
                    <td class="text-body-2 text-right">
                      {{ item.settlementCount }}
                    </td>
                    <td
                      v-for="currency in currencyList"
                      :key="'amt-' + currency"
                      class="text-body-2 text-right"
                    >
                      {{ formatAmount(item.amounts?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>

                  <!-- Totals -->
                  <tr class="primary lighten-4">
                    <td colspan="3" class="font-weight-bold text-caption">
                      ລວມ
                    </td>
                    <td class="text-right font-weight-bold text-body-2">
                      {{
                        chartAccountSummaryReport.reduce(
                          (sum, c) => sum + c.settlementCount,
                          0
                        )
                      }}
                    </td>
                    <td
                      v-for="currency in currencyList"
                      :key="'sum-' + currency"
                      class="text-right font-weight-bold text-body-2"
                    >
                      {{
                        formatAmount(
                          chartAccountTotals?.currencyTotals?.[currency] || 0
                        )
                      }}
                    </td>
                    <td
                      class="text-right font-weight-bold text-body-2 primary--text"
                    >
                      {{
                        formatAmount(
                          chartAccountTotals?.totalLakEquivalent || 0
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

    <!-- Filters Card -->
    <v-card class="mb-4" elevation="2">
      <v-card-title class="primary--text">
        <v-icon color="primary" class="mr-2">mdi-filter</v-icon>
        Filters & Search
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="filters.method"
              :items="methodOptions"
              label="Payment Method"
              prepend-icon="mdi-credit-card"
              clearable
              outlined
              dense
              @change="applyFilters"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="filters.dateFrom"
              type="date"
              label="Date From"
              prepend-icon="mdi-calendar"
              outlined
              dense
              @change="applyFilters"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="filters.dateTo"
              type="date"
              label="Date To"
              prepend-icon="mdi-calendar"
              outlined
              dense
              @change="applyFilters"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field
              v-model="searchQuery"
              label="Search settlements..."
              prepend-icon="mdi-magnify"
              outlined
              dense
              clearable
              @input="debounceSearch"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row v-if="hasActiveFilters">
          <v-col cols="12">
            <v-btn small outlined color="grey" @click="clearFilters">
              <v-icon left small>mdi-filter-remove</v-icon>
              Clear All Filters
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Data Table -->
    <v-card elevation="2">
      <v-card-title class="primary--text">
        <v-icon color="primary" class="mr-2">mdi-table</v-icon>
        Settlements List
        <v-spacer></v-spacer>
        <v-chip color="primary" outlined>
          {{ pagination.totalItems }} Total Records
        </v-chip>
      </v-card-title>
      <v-divider></v-divider>

      <v-data-table
        :headers="tableHeaders"
        :items="settlements"
        :loading="loading"
        :server-items-length="pagination.totalItems"
        :options.sync="tableOptions"
        :footer-props="{
          'items-per-page-options': [10, 25, 50, 100],
          'show-current-page': true,
          'show-first-last-page': true,
        }"
        @update:options="onTableOptionsUpdate"
        class="elevation-0"
        loading-text="Loading settlements..."
        no-data-text="No settlements found"
      >
        <!-- Custom header styling -->
        <template v-slot:header="{ props }">
          <thead class="primary lighten-2">
            <tr>
              <th
                v-for="header in props.headers"
                :key="header.text"
                class="white--text font-weight-bold"
                :class="[header.sortable !== false ? 'sortable' : '']"
                @click="
                  header.sortable !== false ? changeSort(header.value) : null
                "
              >
                {{ header.text }}
                <v-icon
                  v-if="header.sortable !== false"
                  color="white"
                  small
                  class="ml-1"
                >
                  {{ getSortIcon(header.value) }}
                </v-icon>
              </th>
            </tr>
          </thead>
        </template>

        <!-- Date formatting -->
        <template v-slot:item.bookingDate="{ item }">
          <v-chip small color="grey lighten-3">
            <v-icon left small>mdi-calendar</v-icon>
            {{ formatDate(item.bookingDate) }}
          </v-chip>
        </template>

        <!-- Amount formatting -->
        <template v-slot:item.amount="{ item }">
          <div>
            <span class="font-weight-bold text-h6 success--text">
              {{ getCurrencySymbol(item.currency?.code)
              }}{{ formatAmount(item.amount) }}
            </span>
            <div
              v-if="item.currency && item.currency.code !== 'LAK'"
              class="text-caption grey--text"
            >
              {{ item.currency.code }} @ {{ item.exchangeRate || 1 }}
            </div>
          </div>
        </template>

        <!-- Method chip -->
        <template v-slot:item.method="{ item }">
          <v-chip :color="getMethodColor(item.method)" small dark>
            <v-icon left x-small>{{ getMethodIcon(item.method) }}</v-icon>
            {{ formatMethod(item.method) }}
          </v-chip>
        </template>

        <!-- Proceeder info -->
        <template v-slot:item.proceeder="{ item }">
          <div v-if="item.proceeder" class="d-flex align-center">
            <v-avatar size="24" class="mr-2" color="primary">
              <span class="white--text text-caption">
                {{
                  getInitials(
                    item.proceeder.cus_name || item.proceeder.cus_email
                  )
                }}
              </span>
            </v-avatar>
            <div>
              <div class="font-weight-medium">
                {{ item.proceeder.cus_name || item.proceeder.cus_email }}
              </div>
              <div class="text-caption grey--text">
                {{ item.proceeder.cus_email }}
              </div>
            </div>
          </div>
          <span v-else class="grey--text">N/A</span>
        </template>

        <!-- Money Advance info -->
        <template v-slot:item.moneyAdvance="{ item }">
          <div v-if="item.moneyAdvance">
            <v-chip x-small color="info" class="mb-1">
              #{{ item.moneyAdvance.id }}
            </v-chip>
            <br />
            <v-chip
              x-small
              :color="getStatusColor(item.moneyAdvance.status)"
              dark
            >
              {{ item.moneyAdvance.status }}
            </v-chip>
          </div>
          <v-chip v-else x-small color="grey" dark> Independent </v-chip>
        </template>

        <!-- Status -->
        <template v-slot:item.status="{ item }">
          <v-chip
            v-if="item.moneyAdvance"
            :color="getStatusColor(item.moneyAdvance.status)"
            small
            dark
          >
            <v-icon left x-small>{{
              getStatusIcon(item.moneyAdvance.status)
            }}</v-icon>
            {{ item.moneyAdvance.status }}
          </v-chip>
          <v-chip v-else color="grey" small dark>
            <v-icon left x-small>mdi-check-circle</v-icon>
            Independent
          </v-chip>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <div class="d-flex">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  x-small
                  color="primary"
                  @click="viewSettlement(item)"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon small>mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>View Details</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  x-small
                  color="secondary"
                  @click="editSettlement(item)"
                  v-bind="attrs"
                  v-on="on"
                  class="ml-1"
                >
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Edit Settlement</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  x-small
                  color="error"
                  @click="confirmDelete(item)"
                  v-bind="attrs"
                  v-on="on"
                  class="ml-1"
                >
                  <v-icon small>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Delete Settlement</span>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Settlement Dialog -->
    <v-dialog v-model="dialog" max-width="900px" persistent scrollable>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon color="white" class="mr-2">
            {{
              dialogMode === 'create'
                ? 'mdi-plus'
                : dialogMode === 'edit'
                ? 'mdi-pencil'
                : 'mdi-eye'
            }}
          </v-icon>
          {{ dialogTitle }}
          <v-spacer></v-spacer>
          <v-btn icon dark @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-6">
          <v-form
            v-if="dialogMode !== 'view'"
            ref="form"
            v-model="formValid"
            lazy-validation
          >
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="settlementForm.bookingDate"
                  type="date"
                  label="Booking Date"
                  prepend-icon="mdi-calendar"
                  :rules="[rules.required]"
                  outlined
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="settlementForm.amount"
                  type="number"
                  step="0.01"
                  label="Amount"
                  prepend-icon="mdi-currency-usd"
                  :rules="[rules.required, rules.positiveNumber]"
                  outlined
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-select
                  v-model="settlementForm.method"
                  :items="methodSelectOptions"
                  label="Payment Method"
                  prepend-icon="mdi-credit-card"
                  :rules="[rules.required]"
                  outlined
                  required
                ></v-select>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="settlementForm.exchangeRate"
                  type="number"
                  step="0.0001"
                  label="Exchange Rate"
                  prepend-icon="mdi-swap-horizontal"
                  placeholder="1.0000"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="settlementForm.notes"
                  label="Notes"
                  prepend-icon="mdi-note-text"
                  rows="3"
                  outlined
                  no-resize
                ></v-textarea>
              </v-col>
            </v-row>
          </v-form>

          <!-- View Mode -->
          <div v-else>
            <v-row>
              <v-col cols="12" md="6">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary">mdi-calendar</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Booking Date</v-list-item-title
                    >
                    <v-list-item-subtitle class="text-h6">{{
                      formatDate(currentSettlement.bookingDate)
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="12" md="6">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="success">mdi-currency-usd</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Amount</v-list-item-title
                    >
                    <v-list-item-subtitle
                      class="text-h5 font-weight-bold success--text"
                    >
                      {{ getCurrencySymbol(currentSettlement.currency?.code)
                      }}{{ formatAmount(currentSettlement.amount) }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="12" md="6">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon :color="getMethodColor(currentSettlement.method)">{{
                      getMethodIcon(currentSettlement.method)
                    }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Payment Method</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      <v-chip
                        :color="getMethodColor(currentSettlement.method)"
                        small
                        dark
                      >
                        {{ formatMethod(currentSettlement.method) }}
                      </v-chip>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col cols="12" md="6">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="info">mdi-swap-horizontal</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Exchange Rate</v-list-item-title
                    >
                    <v-list-item-subtitle class="text-h6">{{
                      currentSettlement.exchangeRate || '1.0000'
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>

              <v-col v-if="currentSettlement.notes" cols="12">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="grey">mdi-note-text</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Notes</v-list-item-title
                    >
                    <v-list-item-subtitle>{{
                      currentSettlement.notes
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn outlined @click="closeDialog">
            {{ dialogMode === 'view' ? 'Close' : 'Cancel' }}
          </v-btn>
          <v-btn
            v-if="dialogMode !== 'view'"
            color="primary"
            :loading="saving"
            :disabled="!formValid"
            @click="saveSettlement"
            class="ml-2"
          >
            <v-icon left>{{
              dialogMode === 'create' ? 'mdi-plus' : 'mdi-content-save'
            }}</v-icon>
            {{ dialogMode === 'create' ? 'Create' : 'Update' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import myExcelMixin from '~/pages/admin/report/MA/mixin/excel.js'
export default {
  name: 'SettlementDashboard',
  mixins: [myExcelMixin],
  data() {
    return {
      // Bank Account Report Data
      loadingBankAccountReport: false,
      bankAccountSummaryReport: [],
      bankAccountTotals: {
        totalLakEquivalent: 0,
        currencyTotals: {},
      },
      dateRange: {
        start: null,
        end: null,
      },
      ministryTotals: {},
      loadingMinistryReport: false,
      settlements: [],
      loading: false,
      saving: false,
      dialog: false,
      formValid: false,

      // Dialog state
      dialogMode: 'create', // create, edit, view
      currentSettlement: {},

      // Form data
      settlementForm: {
        bookingDate: '',
        amount: '',
        method: '',
        exchangeRate: 1,
        notes: '',
        userId: null,
      },

      // Validation rules
      rules: {
        required: (value) => !!value || 'This field is required',
        positiveNumber: (value) =>
          (value && value > 0) || 'Must be greater than 0',
      },

      // Table configuration
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
        sortBy: ['id'],
        sortDesc: [true],
      },

      pagination: {
        totalItems: 0,
      },

      tableHeaders: [
        { text: 'ID', value: 'id', sortable: true, width: '80px' },
        { text: 'Date', value: 'bookingDate', sortable: true, width: '120px' },
        { text: 'Amount', value: 'amount', sortable: true, width: '150px' },
        { text: 'Method', value: 'method', sortable: false, width: '140px' },
        {
          text: 'Proceeder',
          value: 'proceeder',
          sortable: false,
          width: '180px',
        },
        {
          text: 'Money Advance',
          value: 'moneyAdvance',
          sortable: false,
          width: '140px',
        },
        { text: 'Status', value: 'status', sortable: false, width: '120px' },
        { text: 'Actions', value: 'actions', sortable: false, width: '120px' },
      ],

      // Filters
      filters: {
        method: '',
        dateFrom: '',
        dateTo: '',
      },

      searchQuery: '',
      searchTimeout: null,
      currencyList: [],
      // Statistics
      stats: {
        totalCount: 0,
        totalAmount: 0,
        thisMonth: 0,
        pending: 0,
      },

      // Ministry Summary
      ministrySummary: [],
      loadingMinistrySummary: false,

      // Ministry Summary Report
      ministrySummaryReport: [],
      // Chart Account Report
      // Chart Account Report Data (UPDATED)
      loadingChartAccountReport: false,
      chartAccountSummaryReport: [], // Changed from chartAccountReport
      chartAccountTotals: {
        totalLakEquivalent: 0,
        currencyTotals: {},
      },

      // Options
      methodOptions: [
        { text: 'All Methods', value: '' },
        { text: 'Cash Payment', value: 'cash' },
        { text: 'Bank Transfer', value: 'bank_transfer' },
        { text: 'Salary Deduction', value: 'deduction' },
      ],

      methodSelectOptions: [
        { text: 'Cash Payment', value: 'cash' },
        { text: 'Bank Transfer', value: 'bank_transfer' },
        { text: 'Salary Deduction', value: 'deduction' },
      ],

      // Charts
      methodChart: null,
      trendChart: null,
    }
  },

  computed: {
    dialogTitle() {
      const titles = {
        create: 'Create New Settlement',
        edit: 'Edit Settlement',
        view: 'Settlement Details',
      }
      return titles[this.dialogMode] || 'Settlement'
    },

    hasActiveFilters() {
      return (
        this.filters.method ||
        this.filters.dateFrom ||
        this.filters.dateTo ||
        this.searchQuery
      )
    },
  },

  async mounted() {
    await this.loadInitialData()
  },

  methods: {
    async loadInitialData() {
      await Promise.all([
        this.fetchSettlements(),
        this.fetchStats(),
        this.fetchMinistrySummary(),
        this.fetchChartAccountReport(),
        this.fetchMinistryReport(),
        this.fetchBankAccountReport(),
      ])

      this.$nextTick(() => {
        this.initializeCharts()
      })
    },

    async refreshData() {
      await this.loadInitialData()
      this.$toast.success('Data refreshed successfully')
    },

    async fetchSettlements() {
      this.loading = true
      try {
        const params = {
          page: this.tableOptions.page || 1,
          limit: this.tableOptions.itemsPerPage || 10,
          sortBy: this.tableOptions.sortBy?.[0] || 'id',
          sortOrder: this.tableOptions.sortDesc?.[0] ? 'desc' : 'asc',
          ...this.filters,
        }

        if (this.searchQuery) {
          params.search = this.searchQuery
        }

        const response = await this.$axios.get('/api/settlements', { params })

        this.settlements = response.data.data.settlements || []
        this.pagination.totalItems =
          response.data.data.pagination?.totalItems || 0
      } catch (error) {
        console.error('Error fetching settlements:', error)
        this.$toast.error('Failed to load settlements')
      } finally {
        this.loading = false
      }
    },

    async fetchStats() {
      try {
        const response = await this.$axios.get('/api/settlements/stats')
        this.stats = response.data.data || {}
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    },

    async fetchMinistrySummary() {
      this.loadingMinistrySummary = true
      try {
        // Fetch all settlements with currency and ministry data
        const response = await this.$axios.get('/api/settlements', {
          params: {
            limit: 1000, // Get all settlements for comprehensive analysis
            page: 1,
          },
        })

        const settlements = response.data.data?.settlements || []

        // Group settlements by ministry and currency
        const ministryMap = new Map()

        settlements.forEach((settlement) => {
          // Skip settlements without ministry
          if (!settlement.ministry) return

          const ministryId = settlement.ministry.id
          const ministryName =
            settlement.ministry.ministryNameEn ||
            settlement.ministry.ministryName ||
            `Ministry ${ministryId}`

          // Initialize ministry if not exists
          if (!ministryMap.has(ministryId)) {
            ministryMap.set(ministryId, {
              ministryId,
              ministryName,
              ministryCode: settlement.ministry.ministryCode || '',
              settlementCount: 0,
              totalAmount: 0,
              totalLakEquivalent: 0,
              currencies: new Map(),
            })
          }

          const ministry = ministryMap.get(ministryId)

          // Get currency info
          const currency = settlement.currency || {}
          const currencyId = currency.id || null
          const currencyCode = currency.code || 'LAK'
          const currencySymbol = this.getCurrencySymbol(currencyCode)
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1
          const amount = parseFloat(settlement.amount) || 0
          const lakEquivalent = amount * exchangeRate

          // Initialize currency if not exists for this ministry
          if (!ministry.currencies.has(currencyId)) {
            ministry.currencies.set(currencyId, {
              currencyId,
              currencyCode,
              currencySymbol,
              currencyName: currency.name || currencyCode,
              count: 0,
              totalAmount: 0,
              totalExchangeRateSum: 0,
              lakEquivalent: 0,
            })
          }

          const currencyData = ministry.currencies.get(currencyId)

          // Update currency totals
          currencyData.count += 1
          currencyData.totalAmount += amount
          currencyData.totalExchangeRateSum += exchangeRate
          currencyData.lakEquivalent += lakEquivalent

          // Update ministry totals
          ministry.settlementCount += 1
          ministry.totalAmount += amount
          ministry.totalLakEquivalent += lakEquivalent
        })

        // Convert to array format and calculate averages
        this.ministrySummary = Array.from(ministryMap.values())
          .map((ministry) => {
            const currencies = Array.from(ministry.currencies.values()).map(
              (currency) => ({
                ...currency,
                avgExchangeRate:
                  currency.count > 0
                    ? (currency.totalExchangeRateSum / currency.count).toFixed(
                        4
                      )
                    : '1.0000',
              })
            )

            return {
              ...ministry,
              currencies: currencies.sort(
                (a, b) => b.totalAmount - a.totalAmount
              ), // Sort by amount desc
            }
          })
          .sort((a, b) => b.totalLakEquivalent - a.totalLakEquivalent) // Sort ministries by LAK equivalent desc
      } catch (error) {
        console.error('Error fetching ministry summary:', error)
        this.ministrySummary = []
      } finally {
        this.loadingMinistrySummary = false
      }
    },
    async fetchChartAccountReport() {
      try {
        this.loadingChartAccountReport = true

        // Fetch all pages of data (same pattern as ministry/bank account reports)
        let allSettlements = []
        let currentPage = 1
        let totalPages = 1

        do {
          const response = await this.$axios.get('/api/settlements', {
            params: {
              branchId: this.selectedBranchId,
              fromDate: this.dateRange.start,
              toDate: this.dateRange.end,
              isPosted: true,
              include: ['chartAccount', 'currency'],
              page: currentPage,
              limit: 50,
            },
          })

          const pageData = response.data.data?.settlements || []
          allSettlements = allSettlements.concat(pageData)

          // Update pagination info
          const pagination = response.data.data?.pagination
          if (pagination) {
            totalPages = pagination.totalPages
            console.log(
              `Fetched page ${currentPage} of ${totalPages}, got ${pageData.length} settlements`
            )
          }

          currentPage++
        } while (currentPage <= totalPages)

        console.log(
          `Total settlements fetched for chart account report: ${allSettlements.length}`
        )

        const chartAccountMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const chartAccount = settlement.chartAccount

          // Handle both chart account assignments and null chart account
          let chartAccountId, accountNumber, accountName

          if (chartAccount) {
            chartAccountId = chartAccount.id
            accountNumber = chartAccount.accountNumber
            accountName = chartAccount.accountName || chartAccount.accountLLName
          } else {
            // Handle settlements with no chart account
            chartAccountId = 'NO_CHART_ACCOUNT'
            accountNumber = 'N/A'
            accountName = 'No Chart Account Assigned'
          }

          const currencyCode = settlement.currency?.code || 'LAK'
          const exchangeRate = parseFloat(settlement.exchangeRate) || 1
          const amount = parseFloat(settlement.amount) || 0
          const lakEquivalent = amount * exchangeRate

          currencySet.add(currencyCode)

          if (!chartAccountMap.has(chartAccountId)) {
            chartAccountMap.set(chartAccountId, {
              chartAccountId,
              accountNumber,
              accountName,
              settlementCount: 0,
              totalLakEquivalent: 0,
              amounts: {},
            })
          }

          const chartAccountRow = chartAccountMap.get(chartAccountId)
          chartAccountRow.settlementCount += 1
          chartAccountRow.totalLakEquivalent += lakEquivalent
          chartAccountRow.amounts[currencyCode] =
            (chartAccountRow.amounts[currencyCode] || 0) + amount
        })

        this.currencyList = Array.from(currencySet).sort()

        // Sort chart accounts: real accounts first (by account number), then "No Chart Account" at the bottom
        this.chartAccountSummaryReport = Array.from(
          chartAccountMap.values()
        ).sort((a, b) => {
          if (a.chartAccountId === 'NO_CHART_ACCOUNT') return 1
          if (b.chartAccountId === 'NO_CHART_ACCOUNT') return -1

          // Sort by account number if available, otherwise by account name
          if (a.accountNumber && b.accountNumber) {
            return String(a.accountNumber).localeCompare(
              String(b.accountNumber)
            )
          }
          return a.accountName.localeCompare(b.accountName)
        })

        // Log chart account breakdown for debugging
        console.log('Chart account breakdown:')
        this.chartAccountSummaryReport.forEach((chartAccount) => {
          console.log(
            `- ${chartAccount.accountNumber}: ${chartAccount.accountName} (${chartAccount.settlementCount} settlements)`
          )
        })

        this.chartAccountTotals = {
          totalLakEquivalent: this.chartAccountSummaryReport.reduce(
            (sum, c) => sum + c.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.currencyList.forEach((currency) => {
          this.chartAccountTotals.currencyTotals[currency] =
            this.chartAccountSummaryReport.reduce(
              (sum, c) => sum + (c.amounts[currency] || 0),
              0
            )
        })

        console.log(
          `Final chart account report: ${this.chartAccountSummaryReport.length} chart accounts found`
        )
      } catch (err) {
        console.error('Error fetching chart account report:', err)
        this.$toast.error('Failed to fetch chart account report.')
      } finally {
        this.loadingChartAccountReport = false
      }
    },
    async fetchMinistryReport() {
      try {
        this.loadingMinistryReport = true

        // Fetch all pages of data
        let allSettlements = []
        let currentPage = 1
        let totalPages = 1

        do {
          const response = await this.$axios.get('/api/settlements', {
            params: {
              branchId: this.selectedBranchId,
              fromDate: this.dateRange.start,
              toDate: this.dateRange.end,
              isPosted: true,
              include: ['ministry', 'currency'],
              page: currentPage, // Add page parameter
              limit: 50, // Increase items per page to reduce API calls
            },
          })

          const pageData = response.data.data?.settlements || []
          allSettlements = allSettlements.concat(pageData)

          // Update pagination info
          const pagination = response.data.data?.pagination
          if (pagination) {
            totalPages = pagination.totalPages
            console.log(
              `Fetched page ${currentPage} of ${totalPages}, got ${pageData.length} settlements`
            )
          }

          currentPage++
        } while (currentPage <= totalPages)

        console.log(`Total settlements fetched: ${allSettlements.length}`)
        console.log('All settlements:', allSettlements)

        const ministryMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const ministry = settlement.ministry

          // Handle both ministry assignments and null ministry
          let ministryId, ministryName, ministryCode

          if (ministry) {
            ministryId = ministry.id
            ministryName = ministry.ministryName
            ministryCode = ministry.ministryCode
          } else {
            // Handle settlements with no ministry
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
              settlementCount: 0,
              totalLakEquivalent: 0,
              amounts: {},
            })
          }

          const ministryRow = ministryMap.get(ministryId)
          ministryRow.settlementCount += 1
          ministryRow.totalLakEquivalent += lakEquivalent
          ministryRow.amounts[currencyCode] =
            (ministryRow.amounts[currencyCode] || 0) + amount
        })

        this.currencyList = Array.from(currencySet).sort()

        // Sort ministries: real ministries first (alphabetically), then "No Ministry" at the bottom
        this.ministrySummaryReport = Array.from(ministryMap.values()).sort(
          (a, b) => {
            if (a.ministryId === 'NO_MINISTRY') return 1
            if (b.ministryId === 'NO_MINISTRY') return -1
            return a.ministryName.localeCompare(b.ministryName)
          }
        )

        // Log ministry breakdown for debugging
        console.log('Ministry breakdown:')
        this.ministrySummaryReport.forEach((ministry) => {
          console.log(
            `- ${ministry.ministryCode}: ${ministry.ministryName} (${ministry.settlementCount} settlements)`
          )
        })

        this.ministryTotals = {
          totalLakEquivalent: this.ministrySummaryReport.reduce(
            (sum, m) => sum + m.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.currencyList.forEach((currency) => {
          this.ministryTotals.currencyTotals[currency] =
            this.ministrySummaryReport.reduce(
              (sum, m) => sum + (m.amounts[currency] || 0),
              0
            )
        })

        console.log(
          `Final report: ${this.ministrySummaryReport.length} ministries found`
        )
      } catch (err) {
        console.error('Error fetching ministry report:', err)
        this.$toast.error('Failed to fetch ministry report.')
      } finally {
        this.loadingMinistryReport = false
      }
    },
    async fetchBankAccountReport() {
      try {
        this.loadingBankAccountReport = true

        // Fetch all pages of data
        let allSettlements = []
        let currentPage = 1
        let totalPages = 1

        do {
          const response = await this.$axios.get('/api/settlements', {
            params: {
              branchId: this.selectedBranchId,
              fromDate: this.dateRange.start,
              toDate: this.dateRange.end,
              isPosted: true,
              include: ['bankAccount', 'currency'], // Try this first
              page: currentPage,
              limit: 50,
            },
          })

          const pageData = response.data.data?.settlements || []
          allSettlements = allSettlements.concat(pageData)

          // Update pagination info
          const pagination = response.data.data?.pagination
          if (pagination) {
            totalPages = pagination.totalPages
            console.log(
              `Fetched page ${currentPage} of ${totalPages}, got ${pageData.length} settlements`
            )
          }

          currentPage++
        } while (currentPage <= totalPages)

        console.log(
          `Total settlements fetched for bank account report: ${allSettlements.length}`
        )

        // DEBUG: Check what bank account data we have
        console.log('=== BANK ACCOUNT DEBUG ===')
        allSettlements.forEach((settlement, index) => {
          if (settlement.bankAccountId || settlement.bankAccount) {
            console.log(`Settlement ${settlement.id}:`, {
              bankAccountId: settlement.bankAccountId,
              bankAccount: settlement.bankAccount,
              method: settlement.method,
              amount: settlement.amount,
            })
          }
        })

        // Count settlements by method for debugging
        const methodCounts = {}
        allSettlements.forEach((settlement) => {
          const method = settlement.method || 'unknown'
          methodCounts[method] = (methodCounts[method] || 0) + 1
        })
        console.log('Settlement methods:', methodCounts)

        const bankAccountMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const bankAccount = settlement.bankAccount

          // DEBUG: Log each settlement processing
          console.log(`Processing settlement ${settlement.id}:`, {
            hasBankAccount: !!bankAccount,
            bankAccountId: settlement.bankAccountId,
            method: settlement.method,
          })

          // Handle both bank account assignments and null bank account
          let bankAccountId, accountNumber, accountName, bankName, accountType

          if (bankAccount) {
            bankAccountId = bankAccount.id
            accountNumber = bankAccount.accountNumber
            accountName = bankAccount.accountName
            bankName = bankAccount.bankName
            accountType = bankAccount.accountType

            console.log(`Found bank account: ${accountNumber} - ${accountName}`)
          } else {
            // Handle settlements with no bank account (cash transactions)
            bankAccountId = 'NO_BANK_ACCOUNT'
            accountNumber = 'N/A'
            accountName = 'Cash Transaction'
            bankName = 'No Bank'
            accountType = 'Cash'

            console.log(`Cash transaction: ${settlement.method}`)
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
              accountType,
              settlementCount: 0,
              totalLakEquivalent: 0,
              amounts: {},
            })

            console.log(
              `Created new bank account group: ${bankAccountId} - ${accountName}`
            )
          }

          const bankAccountRow = bankAccountMap.get(bankAccountId)
          bankAccountRow.settlementCount += 1
          bankAccountRow.totalLakEquivalent += lakEquivalent
          bankAccountRow.amounts[currencyCode] =
            (bankAccountRow.amounts[currencyCode] || 0) + amount
        })

        console.log(`Bank account groups created: ${bankAccountMap.size}`)
        console.log('Bank account map:', Array.from(bankAccountMap.entries()))

        this.currencyList = Array.from(currencySet).sort()

        // Sort bank accounts: real bank accounts first (by bank name, then account name), then "Cash" at the bottom
        this.bankAccountSummaryReport = Array.from(
          bankAccountMap.values()
        ).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1

          // Sort by bank name first, then by account name
          const bankComparison = a.bankName.localeCompare(b.bankName)
          if (bankComparison !== 0) return bankComparison
          return a.accountName.localeCompare(b.accountName)
        })

        // Log bank account breakdown for debugging
        console.log('Final bank account breakdown:')
        this.bankAccountSummaryReport.forEach((bankAccount) => {
          console.log(
            `- ${bankAccount.accountNumber}: ${bankAccount.accountName} at ${bankAccount.bankName} (${bankAccount.settlementCount} settlements)`
          )
        })

        this.bankAccountTotals = {
          totalLakEquivalent: this.bankAccountSummaryReport.reduce(
            (sum, b) => sum + b.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.currencyList.forEach((currency) => {
          this.bankAccountTotals.currencyTotals[currency] =
            this.bankAccountSummaryReport.reduce(
              (sum, b) => sum + (b.amounts[currency] || 0),
              0
            )
        })

        console.log(
          `Final bank account report: ${this.bankAccountSummaryReport.length} bank accounts found`
        )
        console.log('Final report data:', this.bankAccountSummaryReport)
      } catch (err) {
        console.error('Error fetching bank account report:', err)
        this.$toast.error('Failed to fetch bank account report.')
      } finally {
        this.loadingBankAccountReport = false
      }
    },
    // Table events
    onTableOptionsUpdate(options) {
      this.tableOptions = options
      this.fetchSettlements()
    },

    changeSort(column) {
      if (this.tableOptions.sortBy[0] === column) {
        this.tableOptions.sortDesc[0] = !this.tableOptions.sortDesc[0]
      } else {
        this.tableOptions.sortBy = [column]
        this.tableOptions.sortDesc = [false]
      }
      this.fetchSettlements()
    },

    getSortIcon(column) {
      if (this.tableOptions.sortBy[0] !== column) return 'mdi-sort'
      return this.tableOptions.sortDesc[0]
        ? 'mdi-sort-descending'
        : 'mdi-sort-ascending'
    },

    // Filters
    applyFilters() {
      this.tableOptions.page = 1
      this.fetchSettlements()
    },

    clearFilters() {
      this.filters = {
        method: '',
        dateFrom: '',
        dateTo: '',
      }
      this.searchQuery = ''
      this.applyFilters()
    },

    debounceSearch() {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.applyFilters()
      }, 500)
    },

    // Dialog operations
    openCreateDialog() {
      this.dialogMode = 'create'
      this.settlementForm = {
        bookingDate: new Date().toISOString().split('T')[0],
        amount: '',
        method: '',
        exchangeRate: 1,
        notes: '',
        userId: this.$auth.user?.id || null,
      }
      this.dialog = true
    },

    editSettlement(settlement) {
      this.dialogMode = 'edit'
      this.currentSettlement = settlement
      this.settlementForm = {
        id: settlement.id,
        bookingDate: settlement.bookingDate,
        amount: settlement.amount,
        method: settlement.method,
        exchangeRate: settlement.exchangeRate || 1,
        notes: settlement.notes || '',
        userId: settlement.userId,
      }
      this.dialog = true
    },

    viewSettlement(settlement) {
      this.dialogMode = 'view'
      this.currentSettlement = settlement
      this.dialog = true
    },

    closeDialog() {
      this.dialog = false
      this.dialogMode = 'create'
      this.currentSettlement = {}
      if (this.$refs.form) {
        this.$refs.form.reset()
      }
    },

    async saveSettlement() {
      if (!this.$refs.form.validate()) return

      this.saving = true
      try {
        if (this.dialogMode === 'create') {
          await this.$axios.post('/api/settlements', this.settlementForm)
          this.$toast.success('Settlement created successfully')
        } else {
          await this.$axios.put(
            `/api/settlements/${this.settlementForm.id}`,
            this.settlementForm
          )
          this.$toast.success('Settlement updated successfully')
        }

        this.closeDialog()
        await this.loadInitialData()
      } catch (error) {
        console.error('Error saving settlement:', error)
        this.$toast.error(
          error.response?.data?.message || 'Failed to save settlement'
        )
      } finally {
        this.saving = false
      }
    },

    async confirmDelete(settlement) {
      const confirmed = await this.$swal({
        title: 'Delete Settlement?',
        text: `Are you sure you want to delete settlement #${settlement.id}? This action cannot be undone.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
      })

      if (confirmed.isConfirmed) {
        await this.deleteSettlement(settlement)
      }
    },

    async deleteSettlement(settlement) {
      try {
        await this.$axios.delete(`/api/settlements/${settlement.id}`)
        this.$toast.success('Settlement deleted successfully')
        await this.loadInitialData()
      } catch (error) {
        console.error('Error deleting settlement:', error)
        this.$toast.error('Failed to delete settlement')
      }
    },

    // Chart initialization
    initializeCharts() {
      this.initMethodChart()
      this.initTrendChart()
    },

    initMethodChart() {
      if (!this.$refs.methodChart || !window.Chart) return

      const ctx = this.$refs.methodChart.getContext('2d')
      if (this.methodChart) {
        this.methodChart.destroy()
      }

      // Calculate method distribution from actual settlements data
      const methodCounts = { cash: 0, bank_transfer: 0, deduction: 0 }
      this.settlements.forEach((settlement) => {
        if (methodCounts.hasOwnProperty(settlement.method)) {
          methodCounts[settlement.method]++
        }
      })

      const data = [
        methodCounts.cash,
        methodCounts.bank_transfer,
        methodCounts.deduction,
      ]
      const hasData = data.some((value) => value > 0)

      this.methodChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Cash Payment', 'Bank Transfer', 'Salary Deduction'],
          datasets: [
            {
              data: hasData ? data : [1, 1, 1], // Show equal parts if no data
              backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
              borderWidth: 2,
              borderColor: '#fff',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  if (!hasData) return 'No data available'
                  return context.label + ': ' + context.parsed + ' settlements'
                },
              },
            },
          },
        },
      })
    },

    initTrendChart() {
      if (!this.$refs.trendChart || !window.Chart) return

      const ctx = this.$refs.trendChart.getContext('2d')
      if (this.trendChart) {
        this.trendChart.destroy()
      }

      // Calculate monthly trends from actual settlements data
      const monthlyData = {}
      const currentYear = new Date().getFullYear()

      // Initialize months
      for (let i = 0; i < 12; i++) {
        const month = new Date(currentYear, i, 1).toLocaleDateString('en-US', {
          month: 'short',
        })
        monthlyData[month] = 0
      }

      // Group settlements by month
      this.settlements.forEach((settlement) => {
        const date = new Date(settlement.bookingDate)
        if (date.getFullYear() === currentYear) {
          const month = date.toLocaleDateString('en-US', { month: 'short' })
          const lakEquivalent =
            (parseFloat(settlement.amount) || 0) *
            (parseFloat(settlement.exchangeRate) || 1)
          monthlyData[month] += lakEquivalent
        }
      })

      const labels = Object.keys(monthlyData)
      const data = Object.values(monthlyData)
      const hasData = data.some((value) => value > 0)

      this.trendChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Settlement Amount (LAK Equivalent)',
              data: hasData ? data : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              borderColor: '#01532B', // Your primary color
              backgroundColor: 'rgba(1, 83, 43, 0.1)',
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  if (!hasData) return 'No data available'
                  return 'LAK ' + context.parsed.y.toLocaleString()
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return '₭' + value.toLocaleString()
                },
              },
            },
          },
        },
      })
    },

    // Utility methods
    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    formatAmount(amount) {
      if (!amount) return '0.00'
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },

    formatMethod(method) {
      const methods = {
        cash: 'Cash Payment',
        bank_transfer: 'Bank Transfer',
        deduction: 'Salary Deduction',
      }
      return methods[method] || method
    },

    getMethodColor(method) {
      const colors = {
        cash: 'success',
        bank_transfer: 'primary',
        deduction: 'warning',
      }
      return colors[method] || 'grey'
    },

    getMethodIcon(method) {
      const icons = {
        cash: 'mdi-cash',
        bank_transfer: 'mdi-bank',
        deduction: 'mdi-minus-circle',
      }
      return icons[method] || 'mdi-help-circle'
    },

    getStatusColor(status) {
      const colors = {
        approved: 'success',
        settled: 'primary',
        pending: 'warning',
        rejected: 'error',
      }
      return colors[status] || 'grey'
    },

    getStatusIcon(status) {
      const icons = {
        approved: 'mdi-check-circle',
        settled: 'mdi-check-all',
        pending: 'mdi-clock-outline',
        rejected: 'mdi-close-circle',
      }
      return icons[status] || 'mdi-help-circle'
    },

    getInitials(name) {
      if (!name) return '?'
      return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    },

    getCurrencyColor(currencyCode) {
      const colors = {
        USD: 'success',
        LAK: 'primary',
        THB: 'warning',
        BTH: 'warning', // Same as THB
        EUR: 'info',
        CNY: 'error',
        VND: 'secondary',
      }
      return colors[currencyCode] || 'grey'
    },

    getCurrencySymbol(currencyCode) {
      const symbols = {
        USD: '$',
        LAK: '₭',
        THB: '฿',
        BTH: '฿', // Same as THB (Thai Baht)
        EUR: '€',
        CNY: '¥',
        VND: '₫',
      }
      return symbols[currencyCode] || '₭'
    },
  },
}
</script>

<style scoped>
.v-card {
  transition: all 0.3s ease;
}

.v-card:hover {
  transform: translateY(-2px);
}

.sortable {
  cursor: pointer;
  user-select: none;
}

.sortable:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* Custom table header styling */
.primary.lighten-2 th {
  background-color: var(--v-primary-lighten2) !important;
}

/* Chart Account Table Styling */
.chart-account-table {
  font-family: 'Roboto', sans-serif;
}

.chart-account-table thead th {
  background-color: var(--v-primary-base) !important;
  color: white !important;
  font-weight: bold !important;
  font-size: 0.875rem !important;
  padding: 12px 8px !important;
  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.chart-account-table tbody td {
  padding: 8px !important;
  font-size: 0.8rem !important;
  border-bottom: 1px solid #e0e0e0 !important;
  border-right: 1px solid #f5f5f5 !important;
}

.chart-account-table tbody tr:hover {
  background-color: #f8f9fa !important;
}

.chart-account-table .primary.lighten-4 td {
  background-color: var(--v-primary-lighten4) !important;
  font-weight: bold !important;
  border-top: 2px solid var(--v-primary-base) !important;
}

@media (max-width: 768px) {
  .chart-account-table {
    font-size: 0.75rem;
  }

  .chart-account-table thead th,
  .chart-account-table tbody td {
    padding: 6px 4px !important;
    font-size: 0.7rem !important;
  }
}
</style>