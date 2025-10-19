<template>
  <v-container fluid class="pa-4">
    <!-- Header -->
    <v-row class="mb-4">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold banking-primary--text">
          ກະດານ ລາຍຮັບ
        </h1>
        <p class="text-subtitle-1 grey--text">
          Manage and monitor all settlement transactions
        </p>
      </v-col>
      <v-col cols="12" md="4" class="text-right">
        <v-btn
          color="#01532B"
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
        <v-card color="#01532B" dark class="text-center summary-card" elevation="3">
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
        <v-card color="#059669" dark class="text-center summary-card" elevation="3">
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
        <v-card color="#0D7C66" dark class="text-center summary-card" elevation="3">
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
        <v-card color="#F59E0B" dark class="text-center summary-card" elevation="3">
          <v-card-text class="pb-2">
            <v-icon size="40" class="mb-2">mdi-clock-outline</v-icon>
            <div class="text-h4 font-weight-bold">{{ stats.pending || 0 }}</div>
            <div class="text-subtitle-1">Pending</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Ministry Report -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl report-card">
          <v-card-title class="banking-primary--text py-2 px-4 d-flex align-center report-header">
            <v-icon color="#01532B" class="mr-2">mdi-office-building</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              ລາຍງານ ຕາມກົມ
            </span>
            <v-spacer></v-spacer>

            <!-- Export Button -->
            <v-btn
              color="#059669"
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
              color="#01532B"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider class="banking-divider"></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingMinistryReport" class="text-center py-6">
              <v-progress-circular indeterminate color="#01532B" />
              <div class="mt-2 text-caption">Loading ministry report...</div>
            </div>

            <div
              v-else-if="!ministrySummaryReport.length"
              class="text-center py-6"
            >
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">
                No ministry data available
              </div>
            </div>

            <v-simple-table v-else dense class="banking-table">
              <template v-slot:default>
                <thead>
                  <tr class="banking-table-header">
                    <th class="white--text text-caption font-weight-bold">#</th>
                    <th class="white--text text-caption font-weight-bold">
                      Ministry Code
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Ministry Name
                    </th>
                    <th class="white--text text-caption font-weight-bold text-right">
                      Count
                    </th>
                    <th
                      v-for="currency in currencyList"
                      :key="'head-' + currency"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      {{ currency }}
                    </th>
                    <th class="white--text text-caption font-weight-bold text-right">
                      Total (LAK)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in ministrySummaryReport"
                    :key="item.ministryId"
                    :class="{
                      'banking-row-even': index % 2 === 0,
                      'banking-row-special': item.ministryId === 'NO_MINISTRY',
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
                    <td class="text-right font-weight-bold banking-success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>

                  <!-- Totals -->
                  <tr class="banking-table-footer">
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
                    <td class="text-right font-weight-bold text-body-2 banking-primary--text">
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

    <!-- Bank Account Report -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl report-card">
          <v-card-title class="banking-primary--text py-2 px-4 d-flex align-center report-header">
            <v-icon color="#01532B" class="mr-2">mdi-bank</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              ລາຍງານ ຕາມບັນຊີທະນາຄານ
            </span>
            <v-spacer></v-spacer>
            <!-- Export Button -->
            <v-btn
              color="#059669"
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
              color="#01532B"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider class="banking-divider"></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingBankAccountReport" class="text-center py-6">
              <v-progress-circular indeterminate color="#01532B" />
              <div class="mt-2 text-caption">
                Loading bank account report...
              </div>
            </div>

            <div
              v-else-if="!bankAccountSummaryReport.length"
              class="text-center py-6"
            >
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">
                No bank account data available
              </div>
            </div>

            <v-simple-table v-else dense class="banking-table">
              <template v-slot:default>
                <thead>
                  <tr class="banking-table-header">
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
                    <th class="white--text text-caption font-weight-bold text-right">
                      Count
                    </th>
                    <th
                      v-for="currency in currencyList"
                      :key="'head-' + currency"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      {{ currency }}
                    </th>
                    <th class="white--text text-caption font-weight-bold text-right">
                      Total (LAK)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in bankAccountSummaryReport"
                    :key="item.bankAccountId"
                    :class="{
                      'banking-row-even': index % 2 === 0,
                      'banking-row-special': item.bankAccountId === 'NO_BANK_ACCOUNT',
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
                        :color="item.accountType === 'Cash' ? '#F59E0B' : '#01532B'"
                        text-color="white"
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
                    <td class="text-right font-weight-bold banking-success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>

                  <!-- Totals -->
                  <tr class="banking-table-footer">
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
                    <td class="text-right font-weight-bold text-body-2 banking-primary--text">
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

    <!-- Chart Account Report -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card elevation="2" class="rounded-xl report-card">
          <v-card-title class="banking-primary--text py-2 px-4 d-flex align-center report-header">
            <v-icon color="#01532B" class="mr-2">mdi-account-multiple</v-icon>
            <span class="text-subtitle-1 font-weight-medium">
              ລາຍງານ ຕາມຫົວບັນຊີ
            </span>

            <v-spacer></v-spacer>
            <!-- Export Button -->
            <v-btn
              color="#059669"
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
              color="#01532B"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>

          <v-divider class="banking-divider"></v-divider>

          <v-card-text class="pa-0">
            <div v-if="loadingChartAccountReport" class="text-center py-6">
              <v-progress-circular indeterminate color="#01532B" />
              <div class="mt-2 text-caption">
                Loading chart account report...
              </div>
            </div>

            <div
              v-else-if="!chartAccountSummaryReport.length"
              class="text-center py-6"
            >
              <v-icon size="48" color="grey lighten-2">mdi-information-outline</v-icon>
              <div class="mt-2 text-subtitle-2 grey--text">
                No chart account data available
              </div>
            </div>

            <v-simple-table v-else dense class="banking-table">
              <template v-slot:default>
                <thead>
                  <tr class="banking-table-header">
                    <th class="white--text text-caption font-weight-bold">#</th>
                    <th class="white--text text-caption font-weight-bold">
                      Account Number
                    </th>
                    <th class="white--text text-caption font-weight-bold">
                      Account Name
                    </th>
                    <th class="white--text text-caption font-weight-bold text-right">
                      Count
                    </th>
                    <th
                      v-for="currency in currencyList"
                      :key="'head-' + currency"
                      class="white--text text-caption font-weight-bold text-right"
                    >
                      {{ currency }}
                    </th>
                    <th class="white--text text-caption font-weight-bold text-right">
                      Total (LAK)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(item, index) in chartAccountSummaryReport"
                    :key="item.chartAccountId"
                    :class="{
                      'banking-row-even': index % 2 === 0,
                      'banking-row-special': item.chartAccountId === 'NO_CHART_ACCOUNT',
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
                    <td class="text-right font-weight-bold banking-success--text">
                      {{ formatAmount(item.totalLakEquivalent || 0) }}
                    </td>
                  </tr>

                  <!-- Totals -->
                  <tr class="banking-table-footer">
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
                    <td class="text-right font-weight-bold text-body-2 banking-primary--text">
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

    <!-- Data Table -->
    <v-card elevation="2" class="data-table-card">
      <v-card-title class="banking-primary--text data-table-header">
        <v-icon color="#01532B" class="mr-2">mdi-table</v-icon>
        ລາຍຮັບ
        <v-spacer></v-spacer>
        <v-chip color="#01532B" outlined>
          {{ pagination.totalItems }} Total Records
        </v-chip>
      </v-card-title>
      <v-divider class="banking-divider"></v-divider>

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
        class="elevation-0 banking-data-table"
        loading-text="Loading settlements..."
        no-data-text="No settlements found"
      >
        <!-- Custom header styling -->
        <template v-slot:header="{ props }">
          <thead class="banking-table-header">
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
          <v-chip small color="#F3F4F6" class="date-chip">
            <v-icon left small color="#01532B">mdi-calendar</v-icon>
            {{ formatDate(item.bookingDate) }}
          </v-chip>
        </template>

        <!-- Amount formatting -->
        <template v-slot:item.amount="{ item }">
          <div>
            <span class="font-weight-bold text-h6 banking-success--text">
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
            <v-avatar size="24" class="mr-2" color="#01532B">
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
            <v-chip x-small color="#01532B" class="mb-1" dark>
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
                  color="#01532B"
                  @click="viewSettlement(item)"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon small>mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>View Details</span>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Settlement Dialog -->
    <v-dialog v-model="dialog" max-width="900px" persistent scrollable>
      <v-card>
        <v-card-title class="dialog-header white--text">
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
                  color="#01532B"
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
                  color="#01532B"
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
                  color="#01532B"
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
                  color="#01532B"
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
                  color="#01532B"
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
                    <v-icon color="#01532B">mdi-calendar</v-icon>
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
                    <v-icon color="#059669">mdi-currency-usd</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold"
                      >Amount</v-list-item-title
                    >
                    <v-list-item-subtitle
                      class="text-h5 font-weight-bold banking-success--text"
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
                    <v-icon color="#01532B">mdi-swap-horizontal</v-icon>
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
            color="#01532B"
            :loading="saving"
            :disabled="!formValid"
            @click="saveSettlement"
            class="ml-2"
            dark
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
      // Loading states
      loading: false,
      saving: false,
      loadingMinistryReport: false,
      loadingBankAccountReport: false,
      loadingChartAccountReport: false,

      // Dialog state
      dialog: false,
      formValid: false,
      dialogMode: 'create', // create, edit, view
      currentSettlement: {},

      // Data
      settlements: [],
      stats: {
        totalCount: 0,
        totalAmount: 0,
        thisMonth: 0,
        pending: 0,
      },

      // Reports
      ministrySummaryReport: [],
      ministryTotals: {},
      bankAccountSummaryReport: [],
      bankAccountTotals: {
        totalLakEquivalent: 0,
        currencyTotals: {},
      },
      chartAccountSummaryReport: [],
      chartAccountTotals: {
        totalLakEquivalent: 0,
        currencyTotals: {},
      },
      currencyList: [],

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

      // Options
      methodSelectOptions: [
        { text: 'Cash Payment', value: 'cash' },
        { text: 'Bank Transfer', value: 'bank_transfer' },
        { text: 'Salary Deduction', value: 'deduction' },
      ],
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
  },

  async mounted() {
    await this.loadInitialData()
  },

  methods: {
    async loadInitialData() {
      await Promise.all([
        this.fetchSettlements(),
        this.fetchStats(),
        this.fetchChartAccountReport(),
        this.fetchMinistryReport(),
        this.fetchBankAccountReport(),
      ])
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

    async fetchChartAccountReport() {
      try {
        this.loadingChartAccountReport = true

        let allSettlements = []
        let currentPage = 1
        let totalPages = 1

        do {
          const response = await this.$axios.get('/api/settlements', {
            params: {
              isPosted: true,
              include: ['chartAccount', 'currency'],
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

        const chartAccountMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const chartAccount = settlement.chartAccount

          let chartAccountId, accountNumber, accountName

          if (chartAccount) {
            chartAccountId = chartAccount.id
            accountNumber = chartAccount.accountNumber
            accountName = chartAccount.accountName || chartAccount.accountLLName
          } else {
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

        this.chartAccountSummaryReport = Array.from(
          chartAccountMap.values()
        ).sort((a, b) => {
          if (a.chartAccountId === 'NO_CHART_ACCOUNT') return 1
          if (b.chartAccountId === 'NO_CHART_ACCOUNT') return -1

          if (a.accountNumber && b.accountNumber) {
            return String(a.accountNumber).localeCompare(
              String(b.accountNumber)
            )
          }
          return a.accountName.localeCompare(b.accountName)
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

        let allSettlements = []
        let currentPage = 1
        let totalPages = 1

        do {
          const response = await this.$axios.get('/api/settlements', {
            params: {
              isPosted: true,
              include: ['ministry', 'currency'],
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

        this.ministrySummaryReport = Array.from(ministryMap.values()).sort(
          (a, b) => {
            if (a.ministryId === 'NO_MINISTRY') return 1
            if (b.ministryId === 'NO_MINISTRY') return -1
            return a.ministryName.localeCompare(b.ministryName)
          }
        )

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

        let allSettlements = []
        let currentPage = 1
        let totalPages = 1

        do {
          const response = await this.$axios.get('/api/settlements', {
            params: {
              isPosted: true,
              include: ['bankAccount', 'currency'],
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

        const bankAccountMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const bankAccount = settlement.bankAccount

          let bankAccountId, accountNumber, accountName, bankName, accountType

          if (bankAccount) {
            bankAccountId = bankAccount.id
            accountNumber = bankAccount.accountNumber
            accountName = bankAccount.accountName
            bankName = bankAccount.bankName
            accountType = bankAccount.accountType
          } else {
            bankAccountId = 'NO_BANK_ACCOUNT'
            accountNumber = 'N/A'
            accountName = 'Cash Transaction'
            bankName = 'No Bank'
            accountType = 'Cash'
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
          }

          const bankAccountRow = bankAccountMap.get(bankAccountId)
          bankAccountRow.settlementCount += 1
          bankAccountRow.totalLakEquivalent += lakEquivalent
          bankAccountRow.amounts[currencyCode] =
            (bankAccountRow.amounts[currencyCode] || 0) + amount
        })

        this.currencyList = Array.from(currencySet).sort()

        this.bankAccountSummaryReport = Array.from(
          bankAccountMap.values()
        ).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1

          const bankComparison = a.bankName.localeCompare(b.bankName)
          if (bankComparison !== 0) return bankComparison
          return a.accountName.localeCompare(b.accountName)
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
        cash: '#01532B',
        bank_transfer: '#059669',
        deduction: '#F59E0B',
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
        approved: '#059669',
        settled: '#01532B',
        pending: '#F59E0B',
        rejected: '#DC2626',
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

    getCurrencySymbol(currencyCode) {
      const symbols = {
        USD: '$',
        LAK: '₭',
        THB: '฿',
        BTH: '฿',
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
/* All the existing CSS styles remain the same */
.banking-primary--text {
  color: #01532B !important;
}

.banking-success--text {
  color: #059669 !important;
}

.summary-card {
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(1, 83, 43, 0.15);
}

.report-card {
  border-left: 4px solid #01532B;
}

.report-header {
  background: linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%);
  font-weight: 600;
}

.banking-table {
  font-family: 'Roboto', sans-serif;
}

.banking-table-header {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
}

.banking-table-header th {
  background: transparent !important;
  color: white !important;
  font-weight: bold !important;
  font-size: 0.875rem !important;
  padding: 12px 8px !important;
  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.banking-table tbody td {
  padding: 8px !important;
  font-size: 0.8rem !important;
  border-bottom: 1px solid #e0e0e0 !important;
  border-right: 1px solid #f5f5f5 !important;
}

.banking-table tbody tr:hover {
  background-color: rgba(1, 83, 43, 0.05) !important;
}

.banking-row-even {
  background-color: #f8f9fa !important;
}

.banking-row-special {
  background-color: #FEF3C7 !important;
}

.banking-table-footer {
  background: linear-gradient(90deg, rgba(1, 83, 43, 0.1) 0%, rgba(1, 83, 43, 0.15) 100%) !important;
  border-top: 2px solid #01532B !important;
}

.banking-table-footer td {
  background: transparent !important;
  font-weight: bold !important;
  border-top: 2px solid #01532B !important;
}

.data-table-card {
  border-left: 4px solid #01532B;
}

.data-table-header {
  background: linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%);
  font-weight: 600;
}

.banking-data-table {
  background: white;
}

.date-chip {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.75rem;
}

.banking-divider {
  border-color: #01532B !important;
  border-width: 2px !important;
}

.dialog-header {
  background: linear-gradient(135deg, #01532B 0%, #0D4F3C 100%) !important;
  color: white !important;
  font-weight: 600;
}

.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;
}

.sortable:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* Form styling */
.v-text-field >>> .v-input__control .v-input__slot:before {
  border-color: #01532B !important;
}

.v-text-field >>> .v-label {
  color: #01532B !important;
}

.v-select >>> .v-input__control .v-input__slot:before {
  border-color: #01532B !important;
}

.v-select >>> .v-label {
  color: #01532B !important;
}

.v-textarea >>> .v-input__control .v-input__slot:before {
  border-color: #01532B !important;
}

.v-textarea >>> .v-label {
  color: #01532B !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .banking-table {
    font-size: 0.75rem;
  }

  .banking-table-header th,
  .banking-table tbody td {
    padding: 6px 4px !important;
    font-size: 0.7rem !important;
  }

  .summary-card {
    margin-bottom: 16px;
  }

  .report-card {
    margin-bottom: 16px;
  }
}
</style>