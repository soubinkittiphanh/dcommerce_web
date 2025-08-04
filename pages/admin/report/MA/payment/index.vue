<template>
  <div class="money-advance-report">
    <!-- Header -->
    <div class="report-header">
      <div class="title-section">
        <h1 class="page-title">
          <i class="fas fa-chart-line"></i>
          ລາຍງານ ລາຍຈ່າຍລ່ວງໜ້າ
        </h1>
        <p class="page-subtitle">Money Advance Report</p>
      </div>
      <div class="action-buttons">
        <v-btn color="success" @click="exportToExcel" :loading="exporting">
          <i class="fas fa-file-excel"></i>
          Export Excel
        </v-btn>
        <v-btn color="primary" @click="printReport">
          <i class="fas fa-print"></i>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Filters Card -->
    <v-card class="filter-card mb-4" elevation="2">
      <v-card-title class="filter-title">
        <i class="fas fa-filter"></i>
        ຕົວກອງ (Filters)
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-menu
              v-model="fromDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.fromDate"
                  label="ຈາກວັນທີ (From Date)"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.fromDate"
                @input="fromDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="3">
            <v-menu
              v-model="toDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.toDate"
                  label="ຫາວັນທີ (To Date)"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.toDate"
                @input="toDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.ministryId"
              :items="ministries"
              item-text="ministryName"
              item-value="id"
              label="ກະຊວງ (Ministry)"
              prepend-icon="mdi-office-building"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.currencyId"
              :items="currencies"
              item-text="name"
              item-value="id"
              label="ສະກຸນເງິນ (Currency)"
              prepend-icon="mdi-currency-usd"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.status"
              :items="statusOptions"
              item-text="text"
              item-value="value"
              label="ສະຖານະ (Status)"
              prepend-icon="mdi-flag"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.makerId"
              :items="users"
              item-text="cus_name"
              item-value="id"
              label="ຜູ້ລົງບັນທຶກ (Maker)"
              prepend-icon="mdi-account"
              clearable
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <div class="filter-actions">
              <v-btn color="primary" @click="applyFilters" :loading="loading">
                <i class="fas fa-search"></i>
                ຄົ້ນຫາ
              </v-btn>
              <v-btn color="secondary" @click="resetFilters">
                <i class="fas fa-undo"></i>
                ຣີເຊັດ
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Enhanced Summary Cards -->

    <v-row class="mb-4" dense>
      <!-- Total Advances -->
      <v-col cols="12" md="3">
        <v-card color="blue lighten-5" class="pa-4" elevation="2">
          <v-row align="center">
            <v-col cols="3">
              <v-icon large color="blue darken-2">mdi-cash</v-icon>
            </v-col>
            <v-col cols="9">
              <div class="text-subtitle-1 font-weight-bold">ລວມລາຍຈ່າຍ</div>
              <div class="caption mb-1">Total Advances</div>
              <div class="text-h6 font-weight-bold">
                {{ formatCurrency(summaryData.totalAdvances) }}
              </div>
              <div v-if="summaryData.totalAdvancesLcy" class="caption">
                LCY: {{ formatCurrency(summaryData.totalAdvancesLcy) }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Total Settlements -->
      <v-col cols="12" md="3">
        <v-card color="green lighten-5" class="pa-4" elevation="2">
          <v-row align="center">
            <v-col cols="3">
              <v-icon large color="green darken-2">mdi-cash-refund</v-icon>
            </v-col>
            <v-col cols="9">
              <div class="text-subtitle-1 font-weight-bold">ລວມການຊຳລະ</div>
              <div class="caption mb-1">Total Settlements</div>
              <div class="text-h6 font-weight-bold">
                {{ formatCurrency(summaryData.totalSettlements) }}
              </div>
              <div v-if="summaryData.totalSettlementsLcy" class="caption">
                LCY: {{ formatCurrency(summaryData.totalSettlementsLcy) }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Outstanding Balance -->
      <v-col cols="12" md="3">
        <v-card color="red lighten-5" class="pa-4" elevation="2">
          <v-row align="center">
            <v-col cols="3">
              <v-icon large color="red darken-2">mdi-alert-circle</v-icon>
            </v-col>
            <v-col cols="9">
              <div class="text-subtitle-1 font-weight-bold">ຍອດຄ້າງຊຳລະ</div>
              <div class="caption mb-1">Outstanding Balance</div>
              <div class="text-h6 font-weight-bold">
                {{ formatCurrency(summaryData.outstandingBalance) }}
              </div>
              <div v-if="summaryData.outstandingBalanceLcy" class="caption">
                LCY: {{ formatCurrency(summaryData.outstandingBalanceLcy) }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Brought Forward -->
      <v-col cols="12" md="3">
        <v-card color="orange lighten-5" class="pa-4" elevation="2">
          <v-row align="center">
            <v-col cols="3">
              <v-icon large color="orange darken-2"
                >mdi-arrow-right-bold</v-icon
              >
            </v-col>
            <v-col cols="9">
              <div class="text-subtitle-1 font-weight-bold">ຍອດຍົກມາ</div>
              <div class="caption mb-1">Brought Forward</div>
              <div class="text-h6 font-weight-bold">
                {{ formatCurrency(summaryData.broughtForward) }}
              </div>
              <div v-if="summaryData.broughtForwardLcy" class="caption">
                LCY: {{ formatCurrency(summaryData.broughtForwardLcy) }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional Summary Cards -->
    <v-row class="additional-summary mb-4" v-if="summaryData.totalRecords">
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number">{{ summaryData.totalRecords || 0 }}</h3>
            <p class="stats-label">ທັງໝົດ<br />Total Records</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number text-success">
              {{ summaryData.fullySettledCount || 0 }}
            </h3>
            <p class="stats-label">ຊຳລະເຕັມ<br />Fully Settled</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number text-warning">
              {{ summaryData.partiallySettledCount || 0 }}
            </h3>
            <p class="stats-label">ຊຳລະບາງສ່ວນ<br />Partial</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number text-error">
              {{ summaryData.unsettledCount || 0 }}
            </h3>
            <p class="stats-label">ຍັງບໍ່ຊຳລະ<br />Unsettled</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number text-error">
              {{ summaryData.overdueCount || 0 }}
            </h3>
            <p class="stats-label">ເກີນກຳນົດ<br />Overdue</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="2">
        <v-card class="stats-card" elevation="2">
          <v-card-text class="text-center">
            <h3 class="stats-number">
              {{ summaryData.averageSettlementPercentage || 0 }}%
            </h3>
            <p class="stats-label">ເຄື່ອງຊຳລະ<br />Avg Settlement</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Currency Breakdown Card -->
    <v-card
      class="currency-breakdown-card mb-4"
      elevation="2"
      v-if="
        summaryData.currencyBreakdown &&
        summaryData.currencyBreakdown.length > 0
      "
    >
      <v-card-title>
        <i class="fas fa-coins"></i>
        ສະຫຼູບຕາມສະກຸນເງິນ (Currency Breakdown)
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            v-for="currency in summaryData.currencyBreakdown"
            :key="currency.currencyCode"
            cols="12"
            md="4"
          >
            <v-card outlined>
              <v-card-text>
                <div class="currency-summary">
                  <h4>
                    {{ currency.currencyCode }} - {{ currency.currencyName }}
                  </h4>
                  <div class="currency-details">
                    <p>
                      <strong>ລວມລາຍຈ່າຍ:</strong>
                      {{ formatCurrency(currency.totalAdvances) }}
                    </p>
                    <p>
                      <strong>ລວມຊຳລະ:</strong>
                      {{ formatCurrency(currency.totalSettlements) }}
                    </p>
                    <p>
                      <strong>ຍອດຄ້າງ:</strong>
                      {{ formatCurrency(currency.outstandingBalance) }}
                    </p>
                    <p>
                      <strong>ເທົ່າກັບກີບ:</strong>
                      {{ formatCurrency(currency.lcyEquivalent) }}
                    </p>
                    <p><strong>ຈຳນວນ:</strong> {{ currency.count }} ລາຍການ</p>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Ministry Breakdown Chart -->
    <!-- <v-card class="chart-card mb-4" elevation="2">
      <v-card-title>
        <i class="fas fa-chart-pie"></i>
        ລາຍງານຕາມກົມ (Ministry Breakdown)
      </v-card-title>
      <v-card-text>
        <div class="chart-container">
          <canvas ref="ministryChart" width="400" height="200"></canvas>
        </div>
      </v-card-text>
    </v-card> -->
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
              :loading="exporting"
            >
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn
              icon
              small
              @click="refreshMinistryReport"
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
          <v-card-title class="secondary--text py-2 px-4 d-flex align-center">
            <v-icon color="secondary" class="mr-2">mdi-bank</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              ລາຍງານ ບັນຊີທະນາຄານ
            </span>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <!-- Export Button -->
            <v-btn
              color="success"
              small
              outlined
              class="mr-2"
              @click="exportBankAccountReportToExcel"
              :disabled="!bankAccountSummaryReport.length"
              :loading="exporting"
            >
              <v-icon small left>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>
            <v-btn
              icon
              small
              @click="refreshBankAccountReport"
              :loading="loadingBankAccountReport"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingBankAccountReport" class="text-center py-6">
              <v-progress-circular indeterminate color="secondary" />
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
                  <tr class="secondary lighten-3">
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
                      v-for="currency in bankAccountCurrencyList"
                      :key="'bank-head-' + currency"
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
                    <td class="text-body-2">
                      {{ item.bankName }}
                    </td>
                    <td class="text-body-2">
                      <v-chip small outlined>
                        {{ item.accountType }}
                      </v-chip>
                    </td>
                    <td class="text-body-2 text-right">
                      {{ item.settlementCount }}
                    </td>
                    <td
                      v-for="currency in bankAccountCurrencyList"
                      :key="'bank-amt-' + currency"
                      class="text-body-2 text-right"
                    >
                      {{ formatAmount(item.amounts?.[currency] || 0) }}
                    </td>
                    <td class="text-right font-weight-bold success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>

                  <!-- Totals -->
                  <tr class="secondary lighten-4">
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
                      v-for="currency in bankAccountCurrencyList"
                      :key="'bank-sum-' + currency"
                      class="text-right font-weight-bold text-body-2"
                    >
                      {{
                        formatAmount(
                          bankAccountTotals?.currencyTotals?.[currency] || 0
                        )
                      }}
                    </td>
                    <td
                      class="text-right font-weight-bold text-body-2 secondary--text"
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

    <!-- Monthly Trend Chart -->
    <!-- <v-card class="chart-card mb-4" elevation="2">
      <v-card-title>
        <i class="fas fa-chart-line"></i>
        ແນວໂນ້ມລາຍເດືອນ (Monthly Trend)
      </v-card-title>
      <v-card-text>
        <div class="chart-container">
          <canvas ref="trendChart" width="400" height="200"></canvas>
        </div>
      </v-card-text>
    </v-card> -->

    <!-- Enhanced Detailed Report Table -->
    <v-card class="table-card" elevation="2">
      <v-card-title class="table-title">
        <i class="fas fa-table"></i>
        ລາຍລະອຽດລາຍງານ (Detailed Report)
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາ..."
          single-line
          hide-details
          class="search-field"
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="tableHeaders"
        :items="reportData"
        :search="search"
        :loading="loading"
        class="report-table"
        :items-per-page="25"
        :footer-props="{
          itemsPerPageOptions: [10, 25, 50, 100],
          itemsPerPageText: 'ແຖວຕໍ່ໜ້າ:',
        }"
      >
        <!-- Custom slots for better formatting -->
        <template v-slot:item.bookingDate="{ item }">
          <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
        </template>

        <template v-slot:item.amount="{ item }">
          <span class="amount-cell advance-amount">
            {{ formatCurrency(item.amount) }}
          </span>
        </template>

        <template v-slot:item.currencyCode="{ item }">
          <v-chip small outlined>
            {{ item.currencyCode || 'N/A' }}
          </v-chip>
        </template>

        <template v-slot:item.exchangeRate="{ item }">
          <span class="exchange-rate-cell">
            {{ formatExchangeRate(item.exchangeRate) }}
          </span>
        </template>

        <template v-slot:item.lcyEquivalent="{ item }">
          <span class="amount-cell lcy-amount">
            {{ formatCurrency(item.lcyEquivalent) }}
          </span>
        </template>

        <template v-slot:item.settlementAmount="{ item }">
          <span class="amount-cell settlement-amount">
            {{ formatCurrency(item.settlementAmount || 0) }}
          </span>
        </template>

        <template v-slot:item.outstandingAmount="{ item }">
          <span class="amount-cell outstanding-amount">
            {{ formatCurrency(item.outstandingAmount) }}
          </span>
        </template>

        <template v-slot:item.settlementPercentage="{ item }">
          <div class="settlement-progress">
            <v-progress-linear
              :value="parseFloat(item.settlementPercentage)"
              :color="getProgressColor(item.settlementPercentage)"
              height="20"
              rounded
            >
              <span class="progress-text"
                >{{ item.settlementPercentage }}%</span
              >
            </v-progress-linear>
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" text-color="white" small>
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>

        <template v-slot:item.daysOverdue="{ item }">
          <v-chip
            v-if="item.daysOverdue > 0"
            color="red"
            text-color="white"
            small
          >
            {{ item.daysOverdue }} ມື້
          </v-chip>
          <span v-else class="text-success">-</span>
        </template>

        <template v-slot:item.ministry="{ item }">
          <div class="ministry-cell">
            <span class="ministry-name">{{
              item.ministry?.ministryName || 'N/A'
            }}</span>
            <span class="ministry-code">{{
              item.ministry?.ministryCode || ''
            }}</span>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn small color="primary" @click="viewDetails(item)" class="mr-2">
            <i class="fas fa-eye"></i>
          </v-btn>
          <v-btn
            small
            color="success"
            @click="viewSettlements(item)"
            v-if="item.settlementCount > 0"
          >
            <i class="fas fa-list"></i>
            {{ item.settlementCount }}
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Enhanced Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="900px">
      <v-card>
        <v-card-title>
          <i class="fas fa-info-circle"></i>
          ລາຍລະອຽດລາຍຈ່າຍ (Advance Details)
          <v-spacer></v-spacer>
          <v-btn icon @click="detailsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedItem">
          <v-row>
            <v-col cols="6">
              <div class="detail-item">
                <strong>ວັນທີບັນທຶກ:</strong>
                {{ formatDate(selectedItem.bookingDate) }}
              </div>
              <div class="detail-item">
                <strong>ຈຳນວນເງິນ:</strong>
                {{ formatCurrency(selectedItem.amount) }}
              </div>
              <div class="detail-item">
                <strong>ສະກຸນເງິນ:</strong>
                {{ selectedItem.currencyCode || 'N/A' }}
              </div>
              <div class="detail-item">
                <strong>ອັດຕາແລກປ່ຽນ:</strong>
                {{ formatExchangeRate(selectedItem.exchangeRate) }}
              </div>
              <div class="detail-item">
                <strong>ເທົ່າກັບກີບ:</strong>
                {{ formatCurrency(selectedItem.lcyEquivalent) }}
              </div>
              <div class="detail-item">
                <strong>ຈຸດປະສົງ:</strong> {{ selectedItem.purpose || 'N/A' }}
              </div>
            </v-col>
            <v-col cols="6">
              <div class="detail-item">
                <strong>ກະຊວງ:</strong>
                {{ selectedItem.ministry?.ministryName || 'N/A' }}
              </div>
              <div class="detail-item">
                <strong>ສະຖານະ:</strong>
                <v-chip
                  :color="getStatusColor(selectedItem.status)"
                  text-color="white"
                  small
                >
                  {{ getStatusText(selectedItem.status) }}
                </v-chip>
              </div>
              <div class="detail-item">
                <strong>ຈຳນວນຊຳລະ:</strong>
                {{ formatCurrency(selectedItem.settlementAmount) }}
              </div>
              <div class="detail-item">
                <strong>ຍອດຄ້າງ:</strong>
                {{ formatCurrency(selectedItem.outstandingAmount) }}
              </div>
              <div class="detail-item">
                <strong>ເປີເຊັນຊຳລະ:</strong>
                {{ selectedItem.settlementPercentage }}%
              </div>
              <div class="detail-item">
                <strong>ຜູ້ລົງບັນທຶກ:</strong>
                {{ selectedItem.maker?.cus_name || 'N/A' }}
              </div>
            </v-col>
          </v-row>
          <v-divider class="my-4"></v-divider>
          <div class="detail-item">
            <strong>ໝາຍເຫດ:</strong> {{ selectedItem.note || 'ບໍ່ມີໝາຍເຫດ' }}
          </div>
          <div class="detail-item" v-if="selectedItem.daysOverdue > 0">
            <strong>ເກີນກຳນົດ:</strong>
            <v-chip color="red" text-color="white" small>
              {{ selectedItem.daysOverdue }} ມື້
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Settlements Dialog -->
    <v-dialog v-model="settlementsDialog" max-width="900px">
      <v-card>
        <v-card-title>
          <i class="fas fa-receipt"></i>
          ປະຫວັດການຊຳລະ (Settlement History)
          <v-spacer></v-spacer>
          <v-btn icon @click="settlementsDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="settlementHeaders"
            :items="settlements"
            :loading="loadingSettlements"
            hide-default-footer
            class="settlement-table"
          >
            <template v-slot:item.bookingDate="{ item }">
              <span class="date-cell">{{ formatDate(item.bookingDate) }}</span>
            </template>
            <template v-slot:item.amount="{ item }">
              <span class="amount-cell settlement-amount">
                {{ formatCurrency(item.amount) }}
              </span>
            </template>
            <template v-slot:item.method="{ item }">
              <v-chip small :color="getMethodColor(item.method)">
                {{ getMethodText(item.method) }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// Import Chart.js with auto registration (includes all components)
import Chart from 'chart.js/auto'

export default {
  name: 'MoneyAdvanceReport',

  data() {
    return {
      // NEW: Bank Account Report Data
      bankAccountSummaryReport: [],
      bankAccountTotals: {
        currencyTotals: {},
        totalLakEquivalent: 0,
      },
      bankAccountCurrencyList: [],
      loadingBankAccountReport: false,
      // Ministry Report Data
      ministrySummaryReport: [],
      ministryTotals: {
        currencyTotals: {},
        totalLakEquivalent: 0,
      },
      currencyList: [],
      loadingMinistryReport: false,

      // Main Report Data
      loading: false,
      exporting: false,
      loadingSettlements: false,
      search: '',
      fromDateMenu: false,
      toDateMenu: false,
      detailsDialog: false,
      settlementsDialog: false,
      selectedItem: null,
      settlements: [],

      // Filter data
      filters: {
        fromDate: null,
        toDate: null,
        ministryId: null,
        currencyId: null,
        status: null,
        makerId: null,
      },

      // Options data
      ministries: [],
      currencies: [],
      users: [],
      statusOptions: [
        { text: 'ລໍຖ້າອະນຸມັດ (Pending)', value: 'pending' },
        { text: 'ອະນຸມັດແລ້ວ (Approved)', value: 'approved' },
        { text: 'ຊຳລະແລ້ວ (Settled)', value: 'settled' },
      ],

      // Report data
      reportData: [],
      summaryData: {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        broughtForward: 0,
        totalAdvancesLcy: 0,
        totalSettlementsLcy: 0,
        outstandingBalanceLcy: 0,
        broughtForwardLcy: 0,
        totalRecords: 0,
        fullySettledCount: 0,
        partiallySettledCount: 0,
        unsettledCount: 0,
        overdueCount: 0,
        averageSettlementPercentage: 0,
        currencyBreakdown: [],
      },

      // Chart instances
      ministryChart: null,
      trendChart: null,

      // Enhanced Table headers
      tableHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate', width: '100px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', width: '120px' },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', width: '80px' },
        { text: 'ອັດຕາແລກປ່ຽນ', value: 'exchangeRate', width: '100px' },
        { text: 'ເທົ່າກັບກີບ', value: 'lcyEquivalent', width: '120px' },
        { text: 'ການຊຳລະ', value: 'settlementAmount', width: '120px' },
        { text: 'ຍອດຄ້າງ', value: 'outstandingAmount', width: '120px' },
        { text: '% ຊຳລະ', value: 'settlementPercentage', width: '100px' },
        { text: 'ກະຊວງ', value: 'ministry', width: '150px' },
        { text: 'ຈຸດປະສົງ', value: 'purpose', width: '200px' },
        { text: 'ສະຖານະ', value: 'status', width: '100px' },
        { text: 'ເກີນກຳນົດ', value: 'daysOverdue', width: '80px' },
        { text: 'ຜູ້ລົງ', value: 'maker.cus_name', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px' },
      ],

      settlementHeaders: [
        { text: 'ວັນທີ', value: 'bookingDate' },
        { text: 'ຈຳນວນ', value: 'amount' },
        { text: 'ວິທີການ', value: 'method' },
        { text: 'ໝາຍເຫດ', value: 'notes' },
        { text: 'ຜູ້ດຳເນີນການ', value: 'user.cus_name' },
      ],
    }
  },

  async created() {
    await this.loadInitialData()
    this.setDefaultDates()
    await this.applyFilters()
  },

  mounted() {
    this.$nextTick(() => {
      this.initializeCharts()
    })
  },

  beforeDestroy() {
    // Clean up chart instances
    if (this.ministryChart) {
      this.ministryChart.destroy()
    }
    if (this.trendChart) {
      this.trendChart.destroy()
    }
  },

  methods: {
    // ========================================
    // BANK ACCOUNT REPORT METHODS
    // ========================================

    /**
     * Transform API response data into bank account report format
     * @param {Object} responseData - The API response containing settlement data
     * @returns {Object} Processed bank account report data
     */
    processBankAccountReportData(responseData) {
      if (
        !responseData ||
        !responseData.data ||
        !Array.isArray(responseData.data)
      ) {
        return {
          bankAccountSummaryReport: [],
          bankAccountTotals: { currencyTotals: {}, totalLakEquivalent: 0 },
          bankAccountCurrencyList: [],
        }
      }

      const data = responseData.data
      const bankAccountMap = new Map()
      const currencySet = new Set()
      const currencyTotals = {}

      // Process each settlement record
      data.forEach((record) => {
        const bankAccount = record.bankAccount
        const currency = record.currency
        const settlementAmount = record.settlementAmount || 0
        const lakEquivalent = record.settlementLcyEquivalent || 0
        const settlementCount = record.settlementCount || 0

        // Handle bank account information
        const bankAccountId = bankAccount?.id || 'NO_BANK_ACCOUNT'
        const accountNumber = bankAccount?.accountNumber || 'N/A'
        const accountName = bankAccount?.accountName || 'No Bank Account'
        const bankName = bankAccount?.bankName || 'No Bank Specified'
        const accountType = bankAccount?.accountType || 'N/A'

        // Track currencies
        const currencyCode = currency?.code || 'UNKNOWN'
        currencySet.add(currencyCode)

        // Initialize bank account entry if not exists
        if (!bankAccountMap.has(bankAccountId)) {
          bankAccountMap.set(bankAccountId, {
            bankAccountId,
            accountNumber,
            accountName,
            bankName,
            accountType,
            settlementCount: 0,
            amounts: {},
            totalLakEquivalent: 0,
          })
        }

        // Get bank account entry
        const bankAccountEntry = bankAccountMap.get(bankAccountId)

        // Aggregate data
        bankAccountEntry.settlementCount += settlementCount
        bankAccountEntry.totalLakEquivalent += lakEquivalent

        // Aggregate by currency
        if (!bankAccountEntry.amounts[currencyCode]) {
          bankAccountEntry.amounts[currencyCode] = 0
        }
        bankAccountEntry.amounts[currencyCode] += settlementAmount

        // Track currency totals
        if (!currencyTotals[currencyCode]) {
          currencyTotals[currencyCode] = 0
        }
        currencyTotals[currencyCode] += settlementAmount
      })

      // Convert map to array and sort
      const bankAccountSummaryReport = Array.from(bankAccountMap.values()).sort(
        (a, b) => {
          // Put "NO_BANK_ACCOUNT" at the end
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1
          // Sort by bank name, then account number
          const bankComparison = a.bankName.localeCompare(b.bankName)
          if (bankComparison !== 0) return bankComparison
          return a.accountNumber.localeCompare(b.accountNumber)
        }
      )

      // Calculate total LAK equivalent
      const totalLakEquivalent = bankAccountSummaryReport.reduce(
        (sum, bankAccount) => sum + bankAccount.totalLakEquivalent,
        0
      )

      return {
        bankAccountSummaryReport,
        bankAccountTotals: {
          currencyTotals,
          totalLakEquivalent,
        },
        bankAccountCurrencyList: Array.from(currencySet).sort(),
      }
    },

    /**
     * Refresh bank account report with current data
     */
    async refreshBankAccountReport() {
      this.loadingBankAccountReport = true

      try {
        // Process current reportData for bank account report
        const processedData = this.processBankAccountReportData({
          data: this.reportData,
        })

        // Update component data
        this.bankAccountSummaryReport = processedData.bankAccountSummaryReport
        this.bankAccountTotals = processedData.bankAccountTotals
        this.bankAccountCurrencyList = processedData.bankAccountCurrencyList

        this.$toast.success('Bank account report refreshed successfully')
      } catch (error) {
        console.error('Error refreshing bank account report:', error)
        this.$toast.error('Failed to refresh bank account report')
      } finally {
        this.loadingBankAccountReport = false
      }
    },

    /**
     * Export bank account report to Excel
     */
    async exportBankAccountReportToExcel() {
      if (!this.bankAccountSummaryReport.length) {
        this.$toast.warning('No bank account data to export')
        return
      }

      this.exporting = true
      try {
        // Prepare data for export
        const exportData = this.bankAccountSummaryReport.map((item, index) => {
          const row = {
            '#': index + 1,
            'Account Number': item.accountNumber,
            'Account Name': item.accountName,
            'Bank Name': item.bankName,
            'Account Type': item.accountType,
            Count: item.settlementCount,
          }

          // Add currency columns
          this.bankAccountCurrencyList.forEach((currency) => {
            row[currency] = this.formatAmount(item.amounts?.[currency] || 0)
          })

          row['Total (LAK)'] = this.formatAmount(item.totalLakEquivalent || 0)

          return row
        })

        // Add totals row
        const totalsRow = {
          '#': '',
          'Account Number': '',
          'Account Name': '',
          'Bank Name': 'ລວມ (Total)',
          'Account Type': '',
          Count: this.bankAccountSummaryReport.reduce(
            (sum, b) => sum + b.settlementCount,
            0
          ),
        }

        this.bankAccountCurrencyList.forEach((currency) => {
          totalsRow[currency] = this.formatAmount(
            this.bankAccountTotals?.currencyTotals?.[currency] || 0
          )
        })

        totalsRow['Total (LAK)'] = this.formatAmount(
          this.bankAccountTotals?.totalLakEquivalent || 0
        )

        exportData.push(totalsRow)

        // Export to CSV (you can replace with Excel library)
        await this.exportToExcelBankAccount(exportData, 'Bank_Account_Report')

        this.$toast.success('Bank account report exported successfully')
      } catch (error) {
        console.error('Error exporting bank account report:', error)
        this.$toast.error('Failed to export bank account report')
      } finally {
        this.exporting = false
      }
    },

    /**
     * Helper method for Bank Account Excel export
     */
    async exportToExcelBankAccount(data, filename) {
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
    // ========================================
    // MINISTRY REPORT METHODS
    // ========================================

    /**
     * Transform API response data into ministry report format
     * @param {Object} responseData - The API response containing settlement data
     * @returns {Object} Processed ministry report data
     */
    processMinistryReportData(responseData) {
      if (
        !responseData ||
        !responseData.data ||
        !Array.isArray(responseData.data)
      ) {
        return {
          ministrySummaryReport: [],
          ministryTotals: { currencyTotals: {}, totalLakEquivalent: 0 },
          currencyList: [],
        }
      }

      const data = responseData.data
      const ministryMap = new Map()
      const currencySet = new Set()
      const currencyTotals = {}

      // Process each settlement record
      data.forEach((record) => {
        const ministry = record.ministry
        const currency = record.currency
        const settlementAmount = record.settlementAmount || 0
        const lakEquivalent = record.settlementLcyEquivalent || 0
        const settlementCount = record.settlementCount || 0

        // Handle ministry information
        const ministryId = ministry?.id || 'NO_MINISTRY'
        const ministryCode = ministry?.ministryCode || 'N/A'
        const ministryName = ministry?.ministryName || 'No Ministry Assigned'

        // Track currencies
        const currencyCode = currency?.code || 'UNKNOWN'
        currencySet.add(currencyCode)

        // Initialize ministry entry if not exists
        if (!ministryMap.has(ministryId)) {
          ministryMap.set(ministryId, {
            ministryId,
            ministryCode,
            ministryName,
            settlementCount: 0,
            amounts: {},
            totalLakEquivalent: 0,
          })
        }

        // Get ministry entry
        const ministryEntry = ministryMap.get(ministryId)

        // Aggregate data
        ministryEntry.settlementCount += settlementCount
        ministryEntry.totalLakEquivalent += lakEquivalent

        // Aggregate by currency
        if (!ministryEntry.amounts[currencyCode]) {
          ministryEntry.amounts[currencyCode] = 0
        }
        ministryEntry.amounts[currencyCode] += settlementAmount

        // Track currency totals
        if (!currencyTotals[currencyCode]) {
          currencyTotals[currencyCode] = 0
        }
        currencyTotals[currencyCode] += settlementAmount
      })

      // Convert map to array and sort
      const ministrySummaryReport = Array.from(ministryMap.values()).sort(
        (a, b) => {
          // Put "NO_MINISTRY" at the end
          if (a.ministryId === 'NO_MINISTRY') return 1
          if (b.ministryId === 'NO_MINISTRY') return -1
          // Sort by ministry code
          return a.ministryCode.localeCompare(b.ministryCode)
        }
      )

      // Calculate total LAK equivalent
      const totalLakEquivalent = ministrySummaryReport.reduce(
        (sum, ministry) => sum + ministry.totalLakEquivalent,
        0
      )

      return {
        ministrySummaryReport,
        ministryTotals: {
          currencyTotals,
          totalLakEquivalent,
        },
        currencyList: Array.from(currencySet).sort(),
      }
    },

    /**
     * Refresh ministry report with current data
     */
    async refreshMinistryReport() {
      this.loadingMinistryReport = true

      try {
        // Process current reportData for ministry report
        const processedData = this.processMinistryReportData({
          data: this.reportData,
        })

        // Update component data
        this.ministrySummaryReport = processedData.ministrySummaryReport
        this.ministryTotals = processedData.ministryTotals
        this.currencyList = processedData.currencyList

        this.$toast.success('Ministry report refreshed successfully')
      } catch (error) {
        console.error('Error refreshing ministry report:', error)
        this.$toast.error('Failed to refresh ministry report')
      } finally {
        this.loadingMinistryReport = false
      }
    },

    /**
     * Export ministry report to Excel
     */
    async exportMinistryReportToExcel() {
      if (!this.ministrySummaryReport.length) {
        this.$toast.warning('No data to export')
        return
      }

      this.exporting = true
      try {
        // Prepare data for export
        const exportData = this.ministrySummaryReport.map((item, index) => {
          const row = {
            '#': index + 1,
            'Ministry Code': item.ministryCode,
            'Ministry Name': item.ministryName,
            Count: item.settlementCount,
          }

          // Add currency columns
          this.currencyList.forEach((currency) => {
            row[currency] = this.formatAmount(item.amounts?.[currency] || 0)
          })

          row['Total (LAK)'] = this.formatAmount(item.totalLakEquivalent || 0)

          return row
        })

        // Add totals row
        const totalsRow = {
          '#': '',
          'Ministry Code': '',
          'Ministry Name': 'ລວມ (Total)',
          Count: this.ministrySummaryReport.reduce(
            (sum, m) => sum + m.settlementCount,
            0
          ),
        }

        this.currencyList.forEach((currency) => {
          totalsRow[currency] = this.formatAmount(
            this.ministryTotals?.currencyTotals?.[currency] || 0
          )
        })

        totalsRow['Total (LAK)'] = this.formatAmount(
          this.ministryTotals?.totalLakEquivalent || 0
        )

        exportData.push(totalsRow)

        // Export to CSV (you can replace with Excel library)
        await this.exportToExcelMinistry(exportData, 'Ministry_Report')

        this.$toast.success('Ministry report exported successfully')
      } catch (error) {
        console.error('Error exporting ministry report:', error)
        this.$toast.error('Failed to export ministry report')
      } finally {
        this.exporting = false
      }
    },

    /**
     * Helper method for Excel export - CSV implementation
     * Replace with your preferred Excel library (xlsx, exceljs, etc.)
     */
    async exportToExcelMinistry(data, filename) {
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

    // ========================================
    // MAIN REPORT METHODS
    // ========================================

    async loadInitialData() {
      try {
        // Load ministries, currencies, and users in parallel
        const [ministriesRes, currenciesRes, usersRes] = await Promise.all([
          this.$axios.get('/api/ministries'),
          this.$axios.get('/api/currency/find'),
          this.$axios.get('/api/user/find'),
        ])

        this.ministries = ministriesRes.data.data || ministriesRes.data
        this.currencies = currenciesRes.data.data || currenciesRes.data
        this.users = usersRes.data.data || usersRes.data
      } catch (error) {
        console.error('Error loading initial data:', error)
        this.$toast.error('Error loading initial data')
      }
    },

    setDefaultDates() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.fromDate = firstDay.toISOString().substr(0, 10)
      this.filters.toDate = now.toISOString().substr(0, 10)
    },

    // ========================================
    // UPDATED MAIN REPORT METHODS
    // ========================================

    async applyFilters() {
      this.loading = true
      try {
        // Build query params
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach((key) => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })

        const response = await this.$axios.get(
          `/api/money-advances/report?${params}`
        )

        // Handle different response structures
        if (response.data.success) {
          this.reportData = response.data.data || []
          this.summaryData = response.data.summary || {}
        } else {
          this.reportData = response.data.data || response.data || []
          this.summaryData = response.data.summary || this.calculateSummary()
        }

        // Process ministry report data with the same dataset
        const processedMinistryData = this.processMinistryReportData({
          data: this.reportData,
        })
        this.ministrySummaryReport = processedMinistryData.ministrySummaryReport
        this.ministryTotals = processedMinistryData.ministryTotals
        this.currencyList = processedMinistryData.currencyList

        // Process bank account report data with the same dataset
        const processedBankAccountData = this.processBankAccountReportData({
          data: this.reportData,
        })
        this.bankAccountSummaryReport =
          processedBankAccountData.bankAccountSummaryReport
        this.bankAccountTotals = processedBankAccountData.bankAccountTotals
        this.bankAccountCurrencyList =
          processedBankAccountData.bankAccountCurrencyList

        // Update charts after data is loaded
        this.$nextTick(() => {
          this.updateCharts()
        })
      } catch (error) {
        console.error('Error loading report data:', error)
        this.$toast.error('Error loading report data')
      } finally {
        this.loading = false
      }
    },

    resetFilters() {
      this.filters = {
        fromDate: null,
        toDate: null,
        ministryId: null,
        currencyId: null,
        status: null,
        makerId: null,
      }
      this.setDefaultDates()
      this.applyFilters() // This will also update ministry report
    },

    calculateSummary() {
      // Fallback summary calculation if not provided by API
      const summary = {
        totalAdvances: 0,
        totalSettlements: 0,
        outstandingBalance: 0,
        totalRecords: this.reportData.length,
        fullySettledCount: 0,
        partiallySettledCount: 0,
        unsettledCount: 0,
        overdueCount: 0,
      }

      this.reportData.forEach((item) => {
        summary.totalAdvances += parseFloat(item.amount || 0)
        summary.totalSettlements += parseFloat(item.settlementAmount || 0)
        summary.outstandingBalance += parseFloat(item.outstandingAmount || 0)

        if (item.isFullySettled) summary.fullySettledCount++
        else if (item.settlementAmount > 0) summary.partiallySettledCount++
        else summary.unsettledCount++

        if (item.daysOverdue > 0) summary.overdueCount++
      })

      return summary
    },

    // ========================================
    // CHART METHODS
    // ========================================

    initializeCharts() {
      if (this.$refs.ministryChart && this.$refs.trendChart) {
        this.createMinistryChart()
        this.createTrendChart()
      }
    },

    createMinistryChart() {
      const ctx = this.$refs.ministryChart.getContext('2d')

      // Destroy existing chart if it exists
      if (this.ministryChart) {
        this.ministryChart.destroy()
      }

      this.ministryChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#FF6384',
                '#C9CBCF',
              ],
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
          },
        },
      })
    },

    createTrendChart() {
      const ctx = this.$refs.trendChart.getContext('2d')

      // Destroy existing chart if it exists
      if (this.trendChart) {
        this.trendChart.destroy()
      }

      this.trendChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
              label: 'ລາຍຈ່າຍລ່ວງໜ້າ',
              data: [],
              borderColor: '#36A2EB',
              backgroundColor: 'rgba(54, 162, 235, 0.1)',
              tension: 0.1,
            },
            {
              label: 'ການຊຳລະ',
              data: [],
              borderColor: '#4BC0C0',
              backgroundColor: 'rgba(75, 192, 192, 0.1)',
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
    },

    updateCharts() {
      if (this.ministryChart && this.trendChart) {
        // Update ministry chart
        const ministryData = this.groupByMinistry()
        this.ministryChart.data.labels = ministryData.labels
        this.ministryChart.data.datasets[0].data = ministryData.data
        this.ministryChart.update()

        // Update trend chart
        const trendData = this.groupByMonth()
        this.trendChart.data.labels = trendData.labels
        this.trendChart.data.datasets[0].data = trendData.advances
        this.trendChart.data.datasets[1].data = trendData.settlements
        this.trendChart.update()
      }
    },

    groupByMinistry() {
      const grouped = {}
      this.reportData.forEach((item) => {
        const ministry = item.ministry?.ministryName || 'ບໍ່ລະບຸກະຊວງ'
        if (!grouped[ministry]) {
          grouped[ministry] = 0
        }
        grouped[ministry] += parseFloat(item.lcyEquivalent || item.amount || 0)
      })

      return {
        labels: Object.keys(grouped),
        data: Object.values(grouped),
      }
    },

    groupByMonth() {
      const grouped = {}
      this.reportData.forEach((item) => {
        const month = new Date(item.bookingDate).toISOString().substr(0, 7)
        if (!grouped[month]) {
          grouped[month] = { advances: 0, settlements: 0 }
        }
        grouped[month].advances += parseFloat(
          item.lcyEquivalent || item.amount || 0
        )
        grouped[month].settlements += parseFloat(
          item.settlementLcyEquivalent || item.settlementAmount || 0
        )
      })

      const sortedMonths = Object.keys(grouped).sort()
      return {
        labels: sortedMonths,
        advances: sortedMonths.map((month) => grouped[month].advances),
        settlements: sortedMonths.map((month) => grouped[month].settlements),
      }
    },

    // ========================================
    // DIALOG METHODS
    // ========================================

    async viewDetails(item) {
      this.selectedItem = item
      this.detailsDialog = true
    },

    async viewSettlements(item) {
      this.loadingSettlements = true
      this.settlementsDialog = true

      try {
        const response = await this.$axios.get(
          `/api/money-advances/${item.id}/settlements`
        )
        this.settlements = response.data.data || response.data || []
      } catch (error) {
        console.error('Error loading settlements:', error)
        this.$toast.error('Error loading settlements')
        this.settlements = []
      } finally {
        this.loadingSettlements = false
      }
    },

    // ========================================
    // EXPORT METHODS
    // ========================================

    async exportToExcel() {
      this.exporting = true
      try {
        const params = new URLSearchParams()
        Object.keys(this.filters).forEach((key) => {
          if (this.filters[key]) {
            params.append(key, this.filters[key])
          }
        })

        const response = await this.$axios.get(
          `/api/money-advances/report/export?${params}`,
          {
            responseType: 'blob',
          }
        )

        // Create download link
        const blob = new Blob([response.data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `money-advance-report-${new Date()
          .toISOString()
          .substr(0, 10)}.xlsx`
        link.click()

        // Clean up
        window.URL.revokeObjectURL(link.href)
        this.$toast.success('Report exported successfully')
      } catch (error) {
        console.error('Error exporting report:', error)
        this.$toast.error('Error exporting report')
      } finally {
        this.exporting = false
      }
    },

    printReport() {
      window.print()
    },

    // ========================================
    // FORMATTING METHODS
    // ========================================

    formatAmount(amount) {
      if (!amount || amount === 0) return '0'

      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    formatCurrency(amount) {
      if (!amount && amount !== 0) return '0.00'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    formatExchangeRate(rate) {
      if (!rate && rate !== 0) return '1.0000'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 4,
        maximumFractionDigits: 4,
      }).format(rate)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('lo-LA')
    },

    // ========================================
    // UTILITY METHODS
    // ========================================

    getProgressColor(percentage) {
      const percent = parseFloat(percentage || 0)
      if (percent >= 100) return 'green'
      if (percent >= 50) return 'orange'
      return 'red'
    },

    getStatusColor(status) {
      const colors = {
        pending: 'orange',
        approved: 'blue',
        settled: 'green',
      }
      return colors[status] || 'grey'
    },

    getStatusText(status) {
      const texts = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        settled: 'ຊຳລະແລ້ວ',
      }
      return texts[status] || status
    },

    getMethodColor(method) {
      const colors = {
        cash: 'green',
        bank_transfer: 'blue',
        deduction: 'orange',
      }
      return colors[method] || 'grey'
    },

    getMethodText(method) {
      const texts = {
        cash: 'ເງິນສົດ',
        bank_transfer: 'ໂອນເງິນ',
        deduction: 'ຫັກລົບ',
      }
      return texts[method] || method
    },
  },
}
</script>

<style scoped>
/* All your existing styles remain the same */
.money-advance-report {
  padding: 0;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
}

.title-section h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.title-section p {
  margin: 5px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.action-buttons .v-btn {
  color: white !important;
}

.filter-card {
  background: white;
}

.filter-title {
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
}

.filter-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
}

.summary-cards {
  margin-bottom: 24px;
}

.summary-card {
  height: 160px;
  position: relative;
  overflow: hidden;
}

.summary-content {
  display: flex;
  align-items: center;
  height: 100%;
}

.summary-icon {
  font-size: 48px;
  opacity: 0.8;
  margin-right: 16px;
}

.summary-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.summary-details p {
  margin: 4px 0;
  font-size: 12px;
  color: white;
}

.summary-details h2 {
  margin: 8px 0 0 0;
  font-size: 24px;
  font-weight: 700;
}

.summary-lcy {
  font-size: 11px;
  opacity: 0.8;
  margin-top: 4px !important;
}

.advance-card {
  background: linear-gradient(135deg, #01532b 0%, #01532b 100%);
  color: white;
}

.settlement-card {
  background: linear-gradient(135deg, #01532b 0%, #01532b 100%);
  color: white;
}

.outstanding-card {
  background: linear-gradient(135deg, #01532b 0%, #01532b 100%);
  color: white;
}

.brought-forward-card {
  background: linear-gradient(135deg, #01532b 0%, #01532b 100%);
  color: white;
}

.additional-summary {
  margin-bottom: 24px;
}

.stats-card {
  height: 100px;
}

.stats-number {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.stats-label {
  font-size: 11px;
  margin: 4px 0 0 0;
  line-height: 1.2;
}

.currency-breakdown-card {
  margin-bottom: 24px;
}

.currency-summary h4 {
  margin: 0 0 12px 0;
  color: #495057;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

.currency-details p {
  margin: 4px 0;
  font-size: 13px;
}

.chart-card {
  margin-bottom: 24px;
}

.chart-container {
  height: 300px;
  position: relative;
}

.table-card {
  margin-bottom: 24px;
}

.table-title {
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
}

.search-field {
  max-width: 300px;
}

.report-table {
  background: white;
}

.date-cell {
  font-family: monospace;
  font-size: 13px;
}

.amount-cell {
  font-family: monospace;
  font-weight: 600;
  text-align: right;
  display: block;
}

.exchange-rate-cell {
  font-family: monospace;
  font-size: 12px;
  text-align: center;
  display: block;
}

.advance-amount {
  color: #667eea;
}

.settlement-amount {
  color: #28a745;
}

.outstanding-amount {
  color: #dc3545;
}

.lcy-amount {
  color: #6f42c1;
}

.settlement-progress {
  width: 100%;
}

.progress-text {
  font-size: 11px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.ministry-cell {
  display: flex;
  flex-direction: column;
}

.ministry-name {
  font-weight: 600;
  font-size: 13px;
}

.ministry-code {
  font-size: 11px;
  color: #666;
  font-family: monospace;
}

.detail-item {
  margin-bottom: 12px;
  font-size: 14px;
}

.detail-item strong {
  color: #495057;
}

.settlement-table {
  margin-top: 16px;
}

@media print {
  .action-buttons,
  .filter-card,
  .v-btn {
    display: none !important;
  }

  .summary-cards,
  .additional-summary,
  .currency-breakdown-card {
    page-break-inside: avoid;
  }

  .chart-card {
    page-break-inside: avoid;
  }
}

@media (max-width: 768px) {
  .report-header {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .summary-content {
    flex-direction: column;
    text-align: center;
  }

  .summary-icon {
    margin-right: 0;
    margin-bottom: 8px;
    color: white;
  }

  .chart-container {
    height: 250px;
  }

  .filter-actions {
    flex-direction: column;
    width: 100%;
  }

  .filter-actions .v-btn {
    width: 100%;
  }

  .stats-card {
    height: 80px;
  }

  .stats-number {
    font-size: 18px;
  }

  .stats-label {
    font-size: 10px;
  }
}
</style>