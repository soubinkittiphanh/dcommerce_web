<template>
  <div class="master-analysis-page">
    <!-- Top Action Bar / Page Header -->
    <div class="page-top-bar d-flex flex-wrap align-center justify-space-between mb-4">
      <div class="title-wrapper d-flex align-center">
        <div class="title-icon-box mr-3">
          <v-icon color="primary" large>mdi-chart-box-outline</v-icon>
        </div>
        <div>
          <h1 class="page-title font-weight-bold mb-0">
            ການວິເຄາະການຊຳລະ ແລະລາຍຮັບ
          </h1>
          <p class="page-subtitle text--secondary mb-0">
            Master Payment, Settlement & Outstanding Balance Analysis
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="top-actions d-flex align-center flex-wrap mt-2 mt-sm-0">
        <v-btn
          color="indigo"
          outlined
          class="mr-2 px-3 text-none rounded-lg"
          to="/admin/report/MA/period"
        >
          <v-icon left small>mdi-calendar-lock-outline</v-icon>
          ໜ້າຈັດການງວດ (Period Maintenance)
        </v-btn>

        <v-btn
          color="primary"
          class="mr-2 px-4 text-none elevation-1 rounded-lg"
          :loading="loading"
          @click="fetchAllReports"
        >
          <v-icon left small>mdi-refresh</v-icon>
          ໂຫຼດໃໝ່ (Analyze)
        </v-btn>

        <!-- Export Menu -->
        <v-menu offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              outlined
              class="mr-2 px-3 text-none rounded-lg"
              :disabled="loading"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>mdi-file-excel</v-icon>
              Export
              <v-icon right small>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list dense class="py-1">
            <v-list-item @click="exportReport('master-ministry')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="primary">mdi-file-table-box-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="font-weight-bold">0. ບົດລາຍງານສັງລວມຕາມກົມ (Master 7 Columns)</v-list-item-title>
            </v-list-item>
            <v-divider class="my-1"></v-divider>
            <v-list-item @click="exportReport('balance-ministry')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="primary">mdi-office-building</v-icon>
              </v-list-item-icon>
              <v-list-item-title>1. ຍອດຍົກມາ ຕາມກົມ (Balance Forward)</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportReport('payment-ministry')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="amber darken-2">mdi-credit-card</v-icon>
              </v-list-item-icon>
              <v-list-item-title>2. ລາຍຈ່າຍ ຕາມກົມ (Payments)</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportReport('payment-bank')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="amber darken-2">mdi-bank</v-icon>
              </v-list-item-icon>
              <v-list-item-title>3. ລາຍຈ່າຍ ຕາມບັນຊີ (Payment Bank)</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportReport('settlement-ministry')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="success">mdi-receipt</v-icon>
              </v-list-item-icon>
              <v-list-item-title>4. ລາຍຮັບ ຕາມກົມ (Settlements)</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportReport('settlement-bank')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="success">mdi-bank</v-icon>
              </v-list-item-icon>
              <v-list-item-title>5. ລາຍຮັບ ຕາມບັນຊີ (Settlement Bank)</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportReport('settlement-chart')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="success">mdi-chart-tree</v-icon>
              </v-list-item-icon>
              <v-list-item-title>6. ລາຍຮັບ ຕາມຜັງບັນຊີ (Chart Account)</v-list-item-title>
            </v-list-item>
            <v-divider class="my-1"></v-divider>
            <v-list-item @click="exportReport('outstanding-ministry')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="error">mdi-scale-balance</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="font-weight-bold">7. ຍອດຄົງເຫຼືອ ຕາມກົມ (Outstanding)</v-list-item-title>
            </v-list-item>
            <v-list-item @click="exportReport('outstanding-bank')">
              <v-list-item-icon class="mr-2">
                <v-icon small color="error">mdi-bank</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="font-weight-bold">8. ຍອດຄົງເຫຼືອ ຕາມບັນຊີ (Outstanding)</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          color="secondary"
          outlined
          class="px-3 text-none rounded-lg"
          @click="printSummary"
        >
          <v-icon left small>mdi-printer</v-icon>
          Print
        </v-btn>
      </div>
    </div>

    <!-- Date Navigator & Quick Control Bar -->
    <v-card class="control-card mb-4 pa-2" elevation="0" outlined>
      <v-row no-gutters align="center" justify="space-between" class="control-row">
        <!-- Quick Month Switcher -->
        <v-col cols="12" md="6" class="d-flex align-center flex-wrap py-1">
          <div class="navigator-pill-group d-flex align-center mr-3 mb-1 mb-sm-0">
            <v-btn
              icon
              small
              class="nav-arrow"
              title="Previous Month"
              @click="goToPreviousMonth"
            >
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>

            <div class="current-period-chip d-flex align-center px-3 py-1">
              <v-icon small color="primary" class="mr-1">mdi-calendar-check</v-icon>
              <span class="period-text font-weight-bold">{{ formattedSelectedMonth }}</span>
            </div>

            <v-btn
              icon
              small
              class="nav-arrow"
              title="Next Month"
              @click="goToNextMonth"
            >
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
          </div>

          <!-- Compact Year/Month Dropdowns -->
          <div class="dropdowns-group d-flex align-center flex-grow-1" style="max-width: 320px;">
            <v-select
              v-model="selectedMonthNum"
              :items="monthOptions"
              item-text="name"
              item-value="value"
              label="ເດືອນ (Month)"
              dense
              outlined
              hide-details
              class="mr-2 custom-select rounded-lg"
              @change="onDateChange"
            />
            <v-select
              v-model="selectedYear"
              :items="yearOptions"
              label="ປີ (Year)"
              dense
              outlined
              hide-details
              class="custom-select rounded-lg"
              @change="onDateChange"
            />
          </div>
        </v-col>

        <!-- Period Status, Date Filter & Actions -->
        <v-col cols="12" md="6" class="d-flex align-center justify-md-end flex-wrap py-1 mt-2 mt-md-0">
          <!-- Period Status Chip -->
          <v-chip
            v-if="periodInfo.isClosed"
            small
            color="green lighten-5"
            text-color="green darken-3"
            class="font-weight-bold mr-2 mb-1 mb-sm-0"
          >
            <v-icon small left color="green darken-2">mdi-lock</v-icon>
            ປິດງວດແລ້ວ (Closed)
          </v-chip>
          <v-chip
            v-else
            small
            color="blue lighten-5"
            text-color="blue darken-3"
            class="font-weight-bold mr-2 mb-1 mb-sm-0"
          >
            <v-icon small left color="blue">mdi-progress-clock</v-icon>
            ງວດປະຈຸບັນ (Active)
          </v-chip>

          <div class="range-info-badge mr-2 mb-1 mb-sm-0">
            <span class="range-label">ງວດ:</span>
            <span class="range-value">{{ dateRangesText }}</span>
          </div>

          <!-- Period Actions Menu -->
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                outlined
                color="primary"
                class="rounded-lg text-none mr-2 mb-1 mb-sm-0"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon small left>mdi-cog-sync-outline</v-icon>
                ຈັດການງວດ
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item v-if="!periodInfo.isClosed" @click="closePeriodDialog = true">
                <v-list-item-icon class="mr-2">
                  <v-icon small color="green darken-2">mdi-lock-check</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ປິດງວດບັນຊີ (Close Period)</v-list-item-title>
              </v-list-item>
              <v-list-item v-if="periodInfo.isClosed" @click="reopenPeriodDialog = true">
                <v-list-item-icon class="mr-2">
                  <v-icon small color="amber darken-3">mdi-lock-open-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ເປີດງວດຄືນ (Reopen Period)</v-list-item-title>
              </v-list-item>
              <v-list-item @click="backfillDialog = true">
                <v-list-item-icon class="mr-2">
                  <v-icon small color="primary">mdi-database-sync</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ຄິດໄລ່ຍອດຄືນທັງໝົດ (Backfill & Sync)</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn
            text
            small
            color="grey darken-1"
            class="reset-btn rounded-lg text-none"
            @click="resetMonth"
          >
            <v-icon left small>mdi-restore</v-icon>
            ເດືອນປະຈຸບັນ
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- EXECUTIVE FINANCIAL FLOW SUMMARY (The 4 Bridge Cards) -->
    <div class="financial-bridge-container mb-4">
      <v-row dense>
        <!-- 1. Balance Forward -->
        <v-col cols="12" sm="6" lg="3">
          <v-card class="kpi-card kpi-balance-forward" elevation="0" outlined>
            <div class="kpi-body pa-3">
              <div class="d-flex justify-space-between align-start mb-1">
                <span class="kpi-title text-uppercase">1. ຍອດຍົກມາ (BF)</span>
                <v-avatar size="32" color="blue lighten-5" class="kpi-avatar">
                  <v-icon small color="blue darken-2">mdi-calendar-minus</v-icon>
                </v-avatar>
              </div>
              <div class="kpi-value text-truncate font-weight-bold blue--text text--darken-3">
                {{ formatAmount(balanceForwardData.totals.totalLakEquivalent) }}
                <span class="kpi-unit">LAK</span>
              </div>
              <div class="kpi-meta d-flex align-center justify-space-between text--secondary">
                <span>{{ activeBalanceForwardMinistries.length }} ກົມມີຍອດ</span>
                <v-chip x-small color="blue lighten-4" text-color="blue darken-3">
                  ຕັ້ງແຕ່ຕົ້ນປີ
                </v-chip>
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- 2. Current Month Payments -->
        <v-col cols="12" sm="6" lg="3">
          <v-card class="kpi-card kpi-payments" elevation="0" outlined>
            <div class="kpi-body pa-3">
              <div class="d-flex justify-space-between align-start mb-1">
                <span class="kpi-title text-uppercase">+ 2. ລາຍຈ່າຍປະຈຳເດືອນ</span>
                <v-avatar size="32" color="amber lighten-5" class="kpi-avatar">
                  <v-icon small color="amber darken-3">mdi-cash-plus</v-icon>
                </v-avatar>
              </div>
              <div class="kpi-value text-truncate font-weight-bold amber--text text--darken-3">
                {{ formatAmount(paymentMinistryTotals.totalLakEquivalent) }}
                <span class="kpi-unit">LAK</span>
              </div>
              <div class="kpi-meta d-flex align-center justify-space-between text--secondary">
                <span>{{ totalPaymentCount }} ລາຍການ</span>
                <v-chip x-small color="amber lighten-4" text-color="amber darken-4">
                  ເດືອນ {{ selectedMonthNum }}
                </v-chip>
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- 3. Current Month Settlements -->
        <v-col cols="12" sm="6" lg="3">
          <v-card class="kpi-card kpi-settlements" elevation="0" outlined>
            <div class="kpi-body pa-3">
              <div class="d-flex justify-space-between align-start mb-1">
                <span class="kpi-title text-uppercase">- 3. ລາຍຮັບປະຈຳເດືອນ</span>
                <v-avatar size="32" color="green lighten-5" class="kpi-avatar">
                  <v-icon small color="green darken-2">mdi-cash-check</v-icon>
                </v-avatar>
              </div>
              <div class="kpi-value text-truncate font-weight-bold green--text text--darken-3">
                {{ formatAmount(settlementMinistryTotals.totalLakEquivalent) }}
                <span class="kpi-unit">LAK</span>
              </div>
              <div class="kpi-meta d-flex align-center justify-space-between text--secondary">
                <span>{{ totalSettlementCount }} ລາຍການ</span>
                <v-chip x-small color="green lighten-4" text-color="green darken-3">
                  ເດືອນ {{ selectedMonthNum }}
                </v-chip>
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- 4. Outstanding Ending Balance -->
        <v-col cols="12" sm="6" lg="3">
          <v-card
            class="kpi-card kpi-outstanding"
            :class="outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'border-purple' : 'border-red'"
            elevation="0"
            outlined
          >
            <div class="kpi-body pa-3">
              <div class="d-flex justify-space-between align-start mb-1">
                <span class="kpi-title text-uppercase">= 4. ຍອດຄົງເຫຼືອທ້າຍເດືອນ</span>
                <v-avatar
                  size="32"
                  :color="outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'purple lighten-5' : 'red lighten-5'"
                  class="kpi-avatar"
                >
                  <v-icon
                    small
                    :color="outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'purple darken-2' : 'red darken-2'"
                  >
                    mdi-scale-balance
                  </v-icon>
                </v-avatar>
              </div>
              <div
                class="kpi-value text-truncate font-weight-bold"
                :class="outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'purple--text text--darken-3' : 'red--text text--darken-3'"
              >
                {{ formatAmount(outstandingBalanceData.totals.totalLakEquivalent) }}
                <span class="kpi-unit">LAK</span>
              </div>
              <div class="kpi-meta d-flex align-center justify-space-between text--secondary">
                <span>{{ activeOutstandingMinistries.length }} ກົມມີຍອດຄ້າງ</span>
                <v-chip
                  x-small
                  :color="outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'purple lighten-4' : 'red lighten-4'"
                  :text-color="outstandingBalanceData.totals.totalLakEquivalent >= 0 ? 'purple darken-3' : 'red darken-3'"
                >
                  Ending Balance
                </v-chip>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- MAIN TABBED INTERFACE -->
    <v-card class="main-content-card rounded-xl elevation-0 mb-6" outlined>
      <!-- Navigation Tabs Header -->
      <v-tabs
        v-model="activeTab"
        background-color="grey lighten-5"
        color="primary"
        class="custom-tabs px-2 pt-1 border-bottom"
        show-arrows
      >
        <v-tab class="font-weight-medium text-none">
          <v-icon left small>mdi-view-dashboard-outline</v-icon>
          ພາບລວມ (Overview)
        </v-tab>
        <v-tab class="font-weight-medium text-none">
          <v-icon left small>mdi-office-building</v-icon>
          ຕາມກົມ (By Ministry)
          <v-chip x-small color="grey lighten-3" class="ml-1 font-weight-bold">
            {{ activeOutstandingMinistries.length }}
          </v-chip>
        </v-tab>
        <v-tab class="font-weight-medium text-none">
          <v-icon left small>mdi-bank</v-icon>
          ຕາມບັນຊີທະນາຄານ (By Bank)
          <v-chip x-small color="grey lighten-3" class="ml-1 font-weight-bold">
            {{ paymentBankReport.length }}
          </v-chip>
        </v-tab>
        <v-tab class="font-weight-medium text-none">
          <v-icon left small>mdi-chart-tree</v-icon>
          ຕາມຜັງບັນຊີ (By Chart Account)
        </v-tab>
        <v-tab class="font-weight-medium text-none">
          <v-icon left small>mdi-table-large</v-icon>
          ທຸກຕາຕະລາງ (All Tables View)
        </v-tab>
      </v-tabs>

      <!-- TAB 1: EXECUTIVE OVERVIEW -->
      <v-tabs-items v-model="activeTab">
        <v-tab-item class="pa-4">
          <!-- Flow Equation Banner -->
          <div class="equation-banner pa-4 mb-4 rounded-lg grey lighten-4 d-flex flex-wrap align-center justify-space-between">
            <div class="eq-block">
              <div class="eq-sub text--secondary">ຍອດຍົກມາ (BF)</div>
              <div class="eq-val blue--text font-weight-bold">
                {{ formatAmount(balanceForwardData.totals.totalLakEquivalent) }} ₭
              </div>
            </div>
            <div class="eq-sign font-weight-bold text--secondary">+</div>
            <div class="eq-block">
              <div class="eq-sub text--secondary">ລາຍຈ່າຍ (Payment)</div>
              <div class="eq-val amber--text text--darken-3 font-weight-bold">
                {{ formatAmount(paymentMinistryTotals.totalLakEquivalent) }} ₭
              </div>
            </div>
            <div class="eq-sign font-weight-bold text--secondary">-</div>
            <div class="eq-block">
              <div class="eq-sub text--secondary">ລາຍຮັບ (Settlement)</div>
              <div class="eq-val green--text text--darken-2 font-weight-bold">
                {{ formatAmount(settlementMinistryTotals.totalLakEquivalent) }} ₭
              </div>
            </div>
            <div class="eq-sign font-weight-bold text--secondary">=</div>
            <div class="eq-block">
              <div class="eq-sub text--secondary">ຍອດຄົງເຫຼືອທ້າຍງວດ</div>
              <div class="eq-val purple--text font-weight-bold">
                {{ formatAmount(outstandingBalanceData.totals.totalLakEquivalent) }} ₭
              </div>
            </div>
          </div>

          <!-- Overview Grids (Top Ministries and Bank Accounts) -->
          <v-row dense>
            <!-- Top Outstanding Ministries -->
            <v-col cols="12" md="6">
              <v-card class="mini-overview-card rounded-lg h-100" outlined>
                <v-card-title class="py-2 px-3 subtitle-2 font-weight-bold d-flex justify-space-between">
                  <span class="d-flex align-center">
                    <v-icon small color="error" class="mr-1">mdi-alert-circle-outline</v-icon>
                    5 ອັນດັບກົມ ຍອດຄົງເຫຼືອສູງສຸດ
                  </span>
                  <v-btn text x-small color="primary" @click="activeTab = 1">
                    ເບິ່ງທັງໝົດ
                    <v-icon x-small right>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pa-0">
                  <v-simple-table dense class="mini-table">
                    <thead>
                      <tr>
                        <th>ກົມ (Ministry)</th>
                        <th class="text-right">ຍອດຍົກມາ</th>
                        <th class="text-right">ລາຍຈ່າຍ</th>
                        <th class="text-right">ຍອດຄົງເຫຼືອ (LAK)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in topOutstandingMinistries"
                        :key="'top-min-' + item.ministryId"
                      >
                        <td class="font-weight-medium text-truncate" style="max-width: 180px;">
                          {{ item.ministryCode }} - {{ item.ministryName }}
                        </td>
                        <td class="text-right text--secondary font-monospace">
                          {{ formatAmount(getMinistryBF(item.ministryId)) }}
                        </td>
                        <td class="text-right text--secondary font-monospace">
                          {{ formatAmount(getMinistryPayment(item.ministryId)) }}
                        </td>
                        <td class="text-right font-weight-bold font-monospace error--text">
                          {{ formatAmount(item.totalLakEquivalent) }}
                        </td>
                      </tr>
                      <tr v-if="!topOutstandingMinistries.length">
                        <td colspan="4" class="text-center py-4 grey--text">
                          ບໍ່ມີຍອດຄົງເຫຼືອຄ້າງ
                        </td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Bank Accounts Summary Snapshot -->
            <v-col cols="12" md="6">
              <v-card class="mini-overview-card rounded-lg h-100" outlined>
                <v-card-title class="py-2 px-3 subtitle-2 font-weight-bold d-flex justify-space-between">
                  <span class="d-flex align-center">
                    <v-icon small color="info" class="mr-1">mdi-bank</v-icon>
                    ສະພາບຄ່ອງບັນຊີທະນາຄານ (Bank Accounts)
                  </span>
                  <v-btn text x-small color="primary" @click="activeTab = 2">
                    ເບິ່ງທັງໝົດ
                    <v-icon x-small right>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pa-0">
                  <v-simple-table dense class="mini-table">
                    <thead>
                      <tr>
                        <th>ບັນຊີ (Account)</th>
                        <th>ທະນາຄານ</th>
                        <th class="text-right">ລາຍຈ່າຍ</th>
                        <th class="text-right">ລາຍຮັບ</th>
                        <th class="text-right">ຄົງເຫຼືອ (LAK)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in (outstandingBalanceData.byBankAccount || []).slice(0, 5)"
                        :key="'top-bank-' + item.bankAccountId"
                      >
                        <td class="font-weight-medium text-truncate" style="max-width: 140px;">
                          {{ item.accountNumber }}
                        </td>
                        <td class="text-truncate" style="max-width: 100px;">
                          {{ item.bankName }}
                        </td>
                        <td class="text-right font-monospace amber--text text--darken-4">
                          {{ formatAmount(getBankPayment(item.bankAccountId)) }}
                        </td>
                        <td class="text-right font-monospace green--text text--darken-3">
                          {{ formatAmount(getBankSettlement(item.bankAccountId)) }}
                        </td>
                        <td class="text-right font-weight-bold font-monospace purple--text">
                          {{ formatAmount(item.totalLakEquivalent) }}
                        </td>
                      </tr>
                      <tr v-if="!(outstandingBalanceData.byBankAccount || []).length">
                        <td colspan="5" class="text-center py-4 grey--text">
                          ບໍ່ມີຂໍ້ມູນບັນຊີ
                        </td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Master Ministry Analysis Flow Summary (7 Columns) -->
          <v-card class="mt-4 rounded-lg" outlined>
            <v-card-title class="py-2 px-3 subtitle-2 font-weight-bold d-flex flex-wrap justify-space-between align-center">
              <span class="d-flex align-center">
                <v-icon small color="primary" class="mr-2">mdi-file-table-box-multiple</v-icon>
                ບົດລາຍງານສັງລວມ ຕາມກົມ (Master Ministry Analysis - 7 ຖັນ)
              </span>
              <div class="mt-1 mt-sm-0">
                <v-btn small color="success" outlined class="mr-2 rounded-lg text-none" @click="exportReport('master-ministry')">
                  <v-icon small left>mdi-file-excel</v-icon>
                  Export
                </v-btn>
                <v-btn small color="secondary" outlined class="rounded-lg text-none" @click="printSummary">
                  <v-icon small left>mdi-printer</v-icon>
                  Print
                </v-btn>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-simple-table dense class="modern-report-table">
              <thead>
                <tr>
                  <th class="text-center" width="50">#</th>
                  <th>ຊື່ກະຊວງ / ກົມ (Ministry Name)</th>
                  <th class="text-right" width="160">ຍອດຍົກມາ (BF)</th>
                  <th class="text-right" width="160">ລາຍຈ່າຍ (Payment in LAK)</th>
                  <th class="text-right" width="160">ລາຍຮັບ / ຊຳລະ (Settlement)</th>
                  <th class="text-right font-weight-bold" width="180">ຍອດຄົງເຫຼືອທ້າຍງວດ (Closing)</th>
                  <th class="text-center" width="100">ໝາຍເຫດ (Remark)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, idx) in masterMinistrySummary"
                  :key="'overview-master-' + row.ministryId + '-' + idx"
                  :class="{ 'highlight-special-row': row.ministryId === 'NO_MINISTRY' }"
                >
                  <td class="text-center grey--text">{{ idx + 1 }}</td>
                  <td>
                    <span class="font-weight-medium" v-if="row.ministryCode && row.ministryCode !== 'N/A'">
                      {{ row.ministryCode }} - 
                    </span>
                    <span class="font-weight-bold">{{ row.ministryName }}</span>
                  </td>
                  <td class="text-right font-monospace blue--text text--darken-3">
                    {{ formatAmount(row.balanceForward) }}
                  </td>
                  <td class="text-right font-monospace amber--text text--darken-4">
                    {{ formatAmount(row.payment) }}
                  </td>
                  <td class="text-right font-monospace green--text text--darken-3">
                    {{ formatAmount(row.settlement) }}
                  </td>
                  <td
                    class="text-right font-weight-bold font-monospace"
                    :class="row.closingBalance >= 0 ? 'purple--text text--darken-3' : 'error--text'"
                  >
                    {{ formatAmount(row.closingBalance) }}
                  </td>
                  <td class="text-center grey--text text--lighten-1">{{ row.remark }}</td>
                </tr>
                <tr v-if="!masterMinistrySummary.length">
                  <td colspan="7" class="text-center py-6 grey--text">
                    <v-icon small color="grey lighten-1">mdi-inbox-outline</v-icon>
                    ບໍ່ມີຂໍ້ມູນ
                  </td>
                </tr>
                <tr v-if="masterMinistrySummary.length" class="table-subtotal-row font-weight-bold">
                  <td colspan="2" class="text-right font-weight-bold">ລວມຍອດທັງໝົດ (Total LAK):</td>
                  <td class="text-right font-monospace font-weight-bold blue--text text--darken-3">
                    {{ formatAmount(masterMinistryTotals.totalBalanceForward) }} ₭
                  </td>
                  <td class="text-right font-monospace font-weight-bold amber--text text--darken-4">
                    {{ formatAmount(masterMinistryTotals.totalPayment) }} ₭
                  </td>
                  <td class="text-right font-monospace font-weight-bold green--text text--darken-3">
                    {{ formatAmount(masterMinistryTotals.totalSettlement) }} ₭
                  </td>
                  <td class="text-right font-monospace font-weight-bold purple--text text--darken-3">
                    {{ formatAmount(masterMinistryTotals.totalClosingBalance) }} ₭
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-tab-item>

        <!-- TAB 2: BY MINISTRY REPORT -->
        <v-tab-item class="pa-4">
          <div class="sub-filter-bar d-flex flex-wrap align-center justify-space-between mb-3">
            <!-- Sub tabs / Segmented view -->
            <v-btn-toggle
              v-model="ministrySubView"
              mandatory
              dense
              class="rounded-lg sub-toggle mb-2 mb-sm-0"
            >
              <v-btn small class="text-none">
                <v-icon small left color="primary">mdi-file-table-box-multiple</v-icon>
                ສັງລວມ 7 ຖັນ (Master Flow)
              </v-btn>
              <v-btn small class="text-none">
                <v-icon small left color="error">mdi-scale-balance</v-icon>
                ຍອດຄົງເຫຼືອ (Outstanding)
              </v-btn>
              <v-btn small class="text-none">
                <v-icon small left color="amber darken-3">mdi-cash-plus</v-icon>
                ລາຍຈ່າຍ (Payments)
              </v-btn>
              <v-btn small class="text-none">
                <v-icon small left color="green darken-2">mdi-cash-check</v-icon>
                ລາຍຮັບ (Settlements)
              </v-btn>
              <v-btn small class="text-none">
                <v-icon small left color="blue darken-2">mdi-calendar-minus</v-icon>
                ຍອດຍົກມາ (BF)
              </v-btn>
            </v-btn-toggle>

            <!-- Search & Actions -->
            <div class="d-flex align-center">
              <v-text-field
                v-model="searchMinistryText"
                dense
                outlined
                hide-details
                placeholder="ຄົ້ນຫາກົມ (Search ministry...)"
                prepend-inner-icon="mdi-magnify"
                class="search-input mr-2 rounded-lg"
                clearable
                style="max-width: 250px;"
              />
              <v-btn
                small
                color="success"
                outlined
                class="rounded-lg text-none"
                @click="exportActiveMinistryTab"
              >
                <v-icon small left>mdi-file-excel</v-icon>
                Export
              </v-btn>
            </div>
          </div>

          <!-- Ministry Sub-table Content -->
          <v-card outlined class="table-container-card rounded-lg">
            <!-- Master 7-Column Table View (subView === 0) -->
            <v-simple-table v-if="ministrySubView === 0" dense class="modern-report-table">
              <thead>
                <tr>
                  <th class="text-center" width="50">#</th>
                  <th>ຊື່ກະຊວງ / ກົມ (Ministry Name)</th>
                  <th class="text-right" width="160">ຍອດຍົກມາ (Balance Forward)</th>
                  <th class="text-right" width="160">ລາຍຈ່າຍ (Payment in LAK)</th>
                  <th class="text-right" width="160">ລາຍຮັບ / ຊຳລະ (Settlement)</th>
                  <th class="text-right font-weight-bold" width="180">ຍອດຄົງເຫຼືອທ້າຍງວດ (Closing)</th>
                  <th class="text-center" width="120">ໝາຍເຫດ (Remark)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, idx) in masterMinistrySummary"
                  :key="'master-min-' + row.ministryId + '-' + idx"
                  :class="{ 'highlight-special-row': row.ministryId === 'NO_MINISTRY' }"
                >
                  <td class="text-center grey--text">{{ idx + 1 }}</td>
                  <td>
                    <span class="font-weight-medium" v-if="row.ministryCode && row.ministryCode !== 'N/A'">
                      {{ row.ministryCode }} - 
                    </span>
                    <span class="font-weight-bold">{{ row.ministryName }}</span>
                  </td>
                  <td class="text-right font-monospace blue--text text--darken-3">
                    {{ formatAmount(row.balanceForward) }}
                  </td>
                  <td class="text-right font-monospace amber--text text--darken-4">
                    {{ formatAmount(row.payment) }}
                  </td>
                  <td class="text-right font-monospace green--text text--darken-3">
                    {{ formatAmount(row.settlement) }}
                  </td>
                  <td
                    class="text-right font-weight-bold font-monospace"
                    :class="row.closingBalance >= 0 ? 'purple--text text--darken-3' : 'error--text'"
                  >
                    {{ formatAmount(row.closingBalance) }}
                  </td>
                  <td class="text-center grey--text text--lighten-1">{{ row.remark }}</td>
                </tr>
                <tr v-if="!masterMinistrySummary.length">
                  <td colspan="7" class="text-center py-6 grey--text">
                    <v-icon small color="grey lighten-1">mdi-inbox-outline</v-icon>
                    ບໍ່ມີຂໍ້ມູນ
                  </td>
                </tr>
                <!-- Subtotal Row -->
                <tr v-if="masterMinistrySummary.length" class="table-subtotal-row font-weight-bold">
                  <td colspan="2" class="text-right font-weight-bold">ລວມຍອດທັງໝົດ (Total LAK):</td>
                  <td class="text-right font-monospace font-weight-bold blue--text text--darken-3">
                    {{ formatAmount(masterMinistryTotals.totalBalanceForward) }} ₭
                  </td>
                  <td class="text-right font-monospace font-weight-bold amber--text text--darken-4">
                    {{ formatAmount(masterMinistryTotals.totalPayment) }} ₭
                  </td>
                  <td class="text-right font-monospace font-weight-bold green--text text--darken-3">
                    {{ formatAmount(masterMinistryTotals.totalSettlement) }} ₭
                  </td>
                  <td class="text-right font-monospace font-weight-bold purple--text text--darken-3">
                    {{ formatAmount(masterMinistryTotals.totalClosingBalance) }} ₭
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </v-simple-table>

            <!-- Currency Breakdown Sub-table View (subView > 0) -->
            <v-simple-table v-else dense class="modern-report-table">
              <thead>
                <tr>
                  <th class="text-center" width="50">#</th>
                  <th>ລະຫັດກົມ (Code)</th>
                  <th>ຊື່ກົມ (Ministry Name)</th>
                  <th v-if="ministrySubView === 2 || ministrySubView === 3" class="text-center" width="80">ຈຳນວນ</th>
                  <th
                    v-for="curr in activeMinistryCurrencyList"
                    :key="'min-th-' + curr"
                    class="text-right"
                  >
                    {{ curr }}
                  </th>
                  <th class="text-right font-weight-bold">ລວມມູນຄ່າ (LAK)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, idx) in activeMinistryTableRows"
                  :key="'min-row-' + row.ministryId + '-' + idx"
                  :class="{ 'highlight-special-row': row.ministryId === 'NO_MINISTRY' }"
                >
                  <td class="text-center grey--text">{{ idx + 1 }}</td>
                  <td class="font-weight-medium">{{ row.ministryCode }}</td>
                  <td class="text-truncate" style="max-width: 280px;">{{ row.ministryName }}</td>
                  <td v-if="ministrySubView === 2 || ministrySubView === 3" class="text-center">
                    <v-chip x-small>{{ row.count || 0 }}</v-chip>
                  </td>
                  <td
                    v-for="curr in activeMinistryCurrencyList"
                    :key="'min-td-' + curr"
                    class="text-right font-monospace"
                  >
                    {{ formatAmount(row.amounts?.[curr] || 0) }}
                  </td>
                  <td
                    class="text-right font-weight-bold font-monospace"
                    :class="getAmountColorClass(row.totalLakEquivalent, ministrySubView)"
                  >
                    {{ formatAmount(row.totalLakEquivalent || 0) }}
                  </td>
                </tr>
                <tr v-if="!activeMinistryTableRows.length">
                  <td :colspan="4 + activeMinistryCurrencyList.length" class="text-center py-6 grey--text">
                    <v-icon small color="grey lighten-1">mdi-inbox-outline</v-icon>
                    ບໍ່ມີຂໍ້ມູນ
                  </td>
                </tr>
                <!-- Subtotal Row -->
                <tr v-if="activeMinistryTableRows.length" class="table-subtotal-row font-weight-bold">
                  <td colspan="3" class="text-right font-weight-bold">ລວມທັງໝົດ (Total):</td>
                  <td v-if="ministrySubView === 2 || ministrySubView === 3" class="text-center font-weight-bold">
                    {{ activeMinistryTableRows.reduce((sum, r) => sum + (r.count || 0), 0) }}
                  </td>
                  <td
                    v-for="curr in activeMinistryCurrencyList"
                    :key="'min-sum-' + curr"
                    class="text-right font-monospace font-weight-bold"
                  >
                    {{ formatAmount(activeMinistryTotals.currencyTotals?.[curr] || 0) }}
                  </td>
                  <td
                    class="text-right font-monospace font-weight-bold"
                    :class="getAmountColorClass(activeMinistryTotals.totalLakEquivalent, ministrySubView)"
                  >
                    {{ formatAmount(activeMinistryTotals.totalLakEquivalent || 0) }} ₭
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-tab-item>

        <!-- TAB 3: BY BANK ACCOUNT REPORT -->
        <v-tab-item class="pa-4">
          <div class="sub-filter-bar d-flex flex-wrap align-center justify-space-between mb-3">
            <v-btn-toggle
              v-model="bankSubView"
              mandatory
              dense
              class="rounded-lg sub-toggle mb-2 mb-sm-0"
            >
              <v-btn small class="text-none">
                <v-icon small left color="error">mdi-scale-balance</v-icon>
                ຍອດຄົງເຫຼືອ (Outstanding)
              </v-btn>
              <v-btn small class="text-none">
                <v-icon small left color="amber darken-3">mdi-cash-plus</v-icon>
                ລາຍຈ່າຍ (Payments)
              </v-btn>
              <v-btn small class="text-none">
                <v-icon small left color="green darken-2">mdi-cash-check</v-icon>
                ລາຍຮັບ (Settlements)
              </v-btn>
              <v-btn small class="text-none">
                <v-icon small left color="primary">mdi-calendar-minus</v-icon>
                ຍອດຍົກມາ (BF)
              </v-btn>
            </v-btn-toggle>

            <div class="d-flex align-center">
              <v-text-field
                v-model="searchBankText"
                dense
                outlined
                hide-details
                placeholder="ຄົ້ນຫາບັນຊີ (Search account...)"
                prepend-inner-icon="mdi-magnify"
                class="search-input mr-2 rounded-lg"
                clearable
                style="max-width: 250px;"
              />
              <v-btn
                small
                color="success"
                outlined
                class="rounded-lg text-none"
                @click="exportActiveBankTab"
              >
                <v-icon small left>mdi-file-excel</v-icon>
                Export
              </v-btn>
            </div>
          </div>

          <v-card outlined class="table-container-card rounded-lg">
            <v-simple-table dense class="modern-report-table">
              <thead>
                <tr>
                  <th class="text-center" width="50">#</th>
                  <th>ເລກບັນຊີ (Account No.)</th>
                  <th>ຊື່ບັນຊີ (Account Name)</th>
                  <th>ທະນາຄານ (Bank)</th>
                  <th v-if="bankSubView === 1 || bankSubView === 2" class="text-center" width="80">ຈຳນວນ</th>
                  <th
                    v-for="curr in activeBankCurrencyList"
                    :key="'bank-th-' + curr"
                    class="text-right"
                  >
                    {{ curr }}
                  </th>
                  <th class="text-right font-weight-bold">ລວມມູນຄ່າ (LAK)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, idx) in activeBankTableRows"
                  :key="'bank-row-' + row.bankAccountId + '-' + idx"
                  :class="{ 'highlight-special-row': row.bankAccountId === 'NO_BANK_ACCOUNT' }"
                >
                  <td class="text-center grey--text">{{ idx + 1 }}</td>
                  <td class="font-weight-medium font-monospace">{{ row.accountNumber }}</td>
                  <td class="text-truncate" style="max-width: 220px;">{{ row.accountName }}</td>
                  <td>{{ row.bankName }}</td>
                  <td v-if="bankSubView === 1 || bankSubView === 2" class="text-center">
                    <v-chip x-small>{{ row.count || 0 }}</v-chip>
                  </td>
                  <td
                    v-for="curr in activeBankCurrencyList"
                    :key="'bank-td-' + curr"
                    class="text-right font-monospace"
                  >
                    {{ formatAmount(row.amounts?.[curr] || 0) }}
                  </td>
                  <td
                    class="text-right font-weight-bold font-monospace"
                    :class="getAmountColorClass(row.totalLakEquivalent, bankSubView)"
                  >
                    {{ formatAmount(row.totalLakEquivalent || 0) }}
                  </td>
                </tr>
                <tr v-if="!activeBankTableRows.length">
                  <td :colspan="5 + activeBankCurrencyList.length" class="text-center py-6 grey--text">
                    <v-icon small color="grey lighten-1">mdi-inbox-outline</v-icon>
                    ບໍ່ມີຂໍ້ມູນ
                  </td>
                </tr>
                <tr v-if="activeBankTableRows.length" class="table-subtotal-row font-weight-bold">
                  <td colspan="4" class="text-right font-weight-bold">ລວມທັງໝົດ (Total):</td>
                  <td v-if="bankSubView === 1 || bankSubView === 2" class="text-center font-weight-bold">
                    {{ activeBankTableRows.reduce((sum, r) => sum + (r.count || 0), 0) }}
                  </td>
                  <td
                    v-for="curr in activeBankCurrencyList"
                    :key="'bank-sum-' + curr"
                    class="text-right font-monospace font-weight-bold"
                  >
                    {{ formatAmount(activeBankTotals.currencyTotals?.[curr] || 0) }}
                  </td>
                  <td
                    class="text-right font-monospace font-weight-bold"
                    :class="getAmountColorClass(activeBankTotals.totalLakEquivalent, bankSubView)"
                  >
                    {{ formatAmount(activeBankTotals.totalLakEquivalent || 0) }} ₭
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-tab-item>

        <!-- TAB 4: BY CHART ACCOUNT -->
        <v-tab-item class="pa-4">
          <div class="sub-filter-bar d-flex flex-wrap align-center justify-space-between mb-3">
            <div class="d-flex align-center">
              <v-icon color="success" class="mr-2">mdi-chart-tree</v-icon>
              <span class="subtitle-2 font-weight-bold">ລາຍຮັບ ຕາມຜັງບັນຊີ (Settlement by Chart Account)</span>
            </div>
            <div class="d-flex align-center">
              <v-text-field
                v-model="searchChartText"
                dense
                outlined
                hide-details
                placeholder="ຄົ້ນຫາຜັງບັນຊີ..."
                prepend-inner-icon="mdi-magnify"
                class="search-input mr-2 rounded-lg"
                clearable
                style="max-width: 250px;"
              />
              <v-btn
                small
                color="success"
                outlined
                class="rounded-lg text-none"
                @click="exportReport('settlement-chart')"
              >
                <v-icon small left>mdi-file-excel</v-icon>
                Export
              </v-btn>
            </div>
          </div>

          <v-card outlined class="table-container-card rounded-lg">
            <v-simple-table dense class="modern-report-table">
              <thead>
                <tr>
                  <th class="text-center" width="50">#</th>
                  <th>ລະຫັດບັນຊີ (Account Code)</th>
                  <th>ຊື່ຜັງບັນຊີ (Account Name)</th>
                  <th class="text-center" width="80">ຈຳນວນ</th>
                  <th
                    v-for="curr in settlementCurrencyList"
                    :key="'chart-th-' + curr"
                    class="text-right"
                  >
                    {{ curr }}
                  </th>
                  <th class="text-right font-weight-bold">ລວມມູນຄ່າ (LAK)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, idx) in filteredSettlementChartRows"
                  :key="'chart-row-' + row.chartAccountId + '-' + idx"
                  :class="{ 'highlight-special-row': row.chartAccountId === 'NO_CHART_ACCOUNT' }"
                >
                  <td class="text-center grey--text">{{ idx + 1 }}</td>
                  <td class="font-weight-medium font-monospace">{{ row.chartAccountCode }}</td>
                  <td>{{ row.chartAccountName }}</td>
                  <td class="text-center">
                    <v-chip x-small>{{ row.count }}</v-chip>
                  </td>
                  <td
                    v-for="curr in settlementCurrencyList"
                    :key="'chart-td-' + curr"
                    class="text-right font-monospace"
                  >
                    {{ formatAmount(row.amounts?.[curr] || 0) }}
                  </td>
                  <td class="text-right font-weight-bold font-monospace green--text text--darken-3">
                    {{ formatAmount(row.totalLakEquivalent || 0) }}
                  </td>
                </tr>
                <tr v-if="!filteredSettlementChartRows.length">
                  <td :colspan="5 + settlementCurrencyList.length" class="text-center py-6 grey--text">
                    <v-icon small color="grey lighten-1">mdi-inbox-outline</v-icon>
                    ບໍ່ມີຂໍ້ມູນ
                  </td>
                </tr>
                <tr v-if="filteredSettlementChartRows.length" class="table-subtotal-row font-weight-bold">
                  <td colspan="3" class="text-right font-weight-bold">ລວມທັງໝົດ:</td>
                  <td class="text-center font-weight-bold">
                    {{ filteredSettlementChartRows.reduce((sum, r) => sum + r.count, 0) }}
                  </td>
                  <td
                    v-for="curr in settlementCurrencyList"
                    :key="'chart-sum-' + curr"
                    class="text-right font-monospace font-weight-bold"
                  >
                    {{ formatAmount(settlementChartTotals.currencyTotals?.[curr] || 0) }}
                  </td>
                  <td class="text-right font-monospace font-weight-bold green--text text--darken-3">
                    {{ formatAmount(settlementChartTotals.totalLakEquivalent || 0) }} ₭
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card>
        </v-tab-item>

        <!-- TAB 5: ALL TABLES (COLLAPSIBLE ACCORDION VIEW) -->
        <v-tab-item class="pa-4">
          <v-expansion-panels multiple accordion class="all-tables-expansion">
            <!-- 1. Balance Forward Ministry -->
            <v-expansion-panel>
              <v-expansion-panel-header class="py-3 subtitle-2 font-weight-bold">
                <span class="d-flex align-center">
                  <v-icon color="primary" small class="mr-2">mdi-calendar-minus</v-icon>
                  1. ຍອດຍົກມາ ຕາມກົມ (Balance Forward by Ministry)
                </span>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-0">
                <v-simple-table dense class="modern-report-table">
                  <thead>
                    <tr>
                      <th width="50">#</th>
                      <th>Code</th>
                      <th>Ministry</th>
                      <th v-for="c in Object.keys(balanceForwardData?.totals?.currencyTotals || {})" :key="'all-bf-m-' + c" class="text-right">
                        {{ c }}
                      </th>
                      <th class="text-right">Balance (LAK)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in (balanceForwardData?.byMinistry || [])" :key="'bf-m-' + item.ministryId">
                      <td>{{ i + 1 }}</td>
                      <td>{{ item.ministryCode }}</td>
                      <td>{{ item.ministryName }}</td>
                      <td v-for="c in Object.keys(balanceForwardData?.totals?.currencyTotals || {})" :key="'bf-m-c-' + c" class="text-right font-monospace">
                        {{ formatAmount(item.amounts?.[c] || 0) }}
                      </td>
                      <td class="text-right font-weight-bold font-monospace blue--text text--darken-3">
                        {{ formatAmount(item.totalLakEquivalent || 0) }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- 2. Payment Ministry -->
            <v-expansion-panel>
              <v-expansion-panel-header class="py-3 subtitle-2 font-weight-bold">
                <span class="d-flex align-center">
                  <v-icon color="amber darken-3" small class="mr-2">mdi-cash-plus</v-icon>
                  2. ລາຍຈ່າຍ ຕາມກົມ (Payment by Ministry)
                </span>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-0">
                <v-simple-table dense class="modern-report-table">
                  <thead>
                    <tr>
                      <th width="50">#</th>
                      <th>Code</th>
                      <th>Ministry</th>
                      <th class="text-center">Count</th>
                      <th v-for="c in paymentCurrencyList" :key="'all-pay-m-' + c" class="text-right">
                        {{ c }}
                      </th>
                      <th class="text-right">Total (LAK)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in paymentMinistryReport" :key="'pay-m-' + item.ministryId">
                      <td>{{ i + 1 }}</td>
                      <td>{{ item.ministryCode }}</td>
                      <td>{{ item.ministryName }}</td>
                      <td class="text-center">{{ item.count }}</td>
                      <td v-for="c in paymentCurrencyList" :key="'pay-m-c-' + c" class="text-right font-monospace">
                        {{ formatAmount(item.amounts?.[c] || 0) }}
                      </td>
                      <td class="text-right font-weight-bold font-monospace amber--text text--darken-3">
                        {{ formatAmount(item.totalLakEquivalent || 0) }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- 3. Settlement Ministry -->
            <v-expansion-panel>
              <v-expansion-panel-header class="py-3 subtitle-2 font-weight-bold">
                <span class="d-flex align-center">
                  <v-icon color="green darken-2" small class="mr-2">mdi-cash-check</v-icon>
                  3. ລາຍຮັບ ຕາມກົມ (Settlement by Ministry)
                </span>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-0">
                <v-simple-table dense class="modern-report-table">
                  <thead>
                    <tr>
                      <th width="50">#</th>
                      <th>Code</th>
                      <th>Ministry</th>
                      <th class="text-center">Count</th>
                      <th v-for="c in settlementCurrencyList" :key="'all-set-m-' + c" class="text-right">
                        {{ c }}
                      </th>
                      <th class="text-right">Total (LAK)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in settlementMinistryReport" :key="'set-m-' + item.ministryId">
                      <td>{{ i + 1 }}</td>
                      <td>{{ item.ministryCode }}</td>
                      <td>{{ item.ministryName }}</td>
                      <td class="text-center">{{ item.count }}</td>
                      <td v-for="c in settlementCurrencyList" :key="'set-m-c-' + c" class="text-right font-monospace">
                        {{ formatAmount(item.amounts?.[c] || 0) }}
                      </td>
                      <td class="text-right font-weight-bold font-monospace green--text text--darken-3">
                        {{ formatAmount(item.totalLakEquivalent || 0) }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- 4. Outstanding Ministry -->
            <v-expansion-panel>
              <v-expansion-panel-header class="py-3 subtitle-2 font-weight-bold">
                <span class="d-flex align-center">
                  <v-icon color="error" small class="mr-2">mdi-scale-balance</v-icon>
                  4. ຍອດຄົງເຫຼືອ ຕາມກົມ (Outstanding Balance by Ministry)
                </span>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pa-0">
                <v-simple-table dense class="modern-report-table">
                  <thead>
                    <tr>
                      <th width="50">#</th>
                      <th>Code</th>
                      <th>Ministry</th>
                      <th v-for="c in Object.keys(outstandingBalanceData?.totals?.currencyTotals || {})" :key="'all-out-m-' + c" class="text-right">
                        {{ c }}
                      </th>
                      <th class="text-right">Outstanding (LAK)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in (outstandingBalanceData?.byMinistry || [])" :key="'out-m-' + item.ministryId">
                      <td>{{ i + 1 }}</td>
                      <td>{{ item.ministryCode }}</td>
                      <td>{{ item.ministryName }}</td>
                      <td v-for="c in Object.keys(outstandingBalanceData?.totals?.currencyTotals || {})" :key="'out-m-c-' + c" class="text-right font-monospace">
                        {{ formatAmount(item.amounts?.[c] || 0) }}
                      </td>
                      <td class="text-right font-weight-bold font-monospace purple--text text--darken-3">
                        {{ formatAmount(item.totalLakEquivalent || 0) }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- Dialog 1: Close Period Dialog -->
    <v-dialog v-model="closePeriodDialog" max-width="500" persistent>
      <v-card class="rounded-xl pa-2">
        <v-card-title class="headline font-weight-bold d-flex align-center">
          <v-avatar color="green lighten-5" size="38" class="mr-3">
            <v-icon color="green darken-2">mdi-lock-check</v-icon>
          </v-avatar>
          ປິດງວດບັນຊີ (Close Period)
        </v-card-title>
        <v-card-text class="pt-3">
          <p class="text-subtitle-1 mb-2">
            ທ່ານຕ້ອງການປິດງວດບັນຊີສຳລັບ <strong>{{ formattedSelectedMonth }}</strong> ແທ້ບໍ?
          </p>
          <v-alert type="info" text dense class="mb-3">
            ການປິດງວດຈະລັອກຍອດຍົກມາ, ລາຍຈ່າຍ, ລາຍຮັບ ແລະ ຄິດໄລ່ຍອດເຫຼືອທ້າຍງວດເພື່ອຍົກຍອດໄປເດືອນຖັດໄປຢ່າງເປັນທາງການ.
          </v-alert>
          <v-textarea
            v-model="closePeriodNote"
            label="ໝາຍເຫດການປິດງວດ (Optional Note)"
            outlined
            dense
            rows="2"
            hide-details
            class="rounded-lg"
          />
        </v-card-text>
        <v-card-actions class="px-4 pb-3">
          <v-spacer />
          <v-btn text class="rounded-lg text-none" @click="closePeriodDialog = false" :disabled="submittingClosePeriod">
            ຍົກເລີກ
          </v-btn>
          <v-btn color="success" class="rounded-lg text-none font-weight-bold px-4" @click="handleClosePeriod" :loading="submittingClosePeriod">
            <v-icon left small>mdi-lock</v-icon>
            ຢືນຢັນປິດງວດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog 2: Reopen Period Dialog -->
    <v-dialog v-model="reopenPeriodDialog" max-width="480" persistent>
      <v-card class="rounded-xl pa-2">
        <v-card-title class="headline font-weight-bold d-flex align-center">
          <v-avatar color="amber lighten-5" size="38" class="mr-3">
            <v-icon color="amber darken-3">mdi-lock-open-variant</v-icon>
          </v-avatar>
          ເປີດງວດຄືນ (Reopen Period)
        </v-card-title>
        <v-card-text class="pt-3">
          <p class="text-subtitle-1 mb-2">
            ທ່ານຕ້ອງການປົດລັອກເປີດງວດບັນຊີ <strong>{{ formattedSelectedMonth }}</strong> ຄືນແທ້ບໍ?
          </p>
          <v-alert type="warning" text dense>
            ເມື່ອເປີດງວດຄືນ ລະບົບຈະອະນຸຍາດໃຫ້ມີການແກ້ໄຂ ແລະ ປັບປຸງຍອດຄືນໃໝ່.
          </v-alert>
        </v-card-text>
        <v-card-actions class="px-4 pb-3">
          <v-spacer />
          <v-btn text class="rounded-lg text-none" @click="reopenPeriodDialog = false" :disabled="submittingReopenPeriod">
            ຍົກເລີກ
          </v-btn>
          <v-btn color="warning" class="rounded-lg text-none font-weight-bold px-4" @click="handleReopenPeriod" :loading="submittingReopenPeriod">
            <v-icon left small>mdi-lock-open</v-icon>
            ຢືນຢັນເປີດງວດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog 3: Backfill / Sync Dialog -->
    <v-dialog v-model="backfillDialog" max-width="500" persistent>
      <v-card class="rounded-xl pa-2">
        <v-card-title class="headline font-weight-bold d-flex align-center">
          <v-avatar color="blue lighten-5" size="38" class="mr-3">
            <v-icon color="primary">mdi-database-sync</v-icon>
          </v-avatar>
          ຄິດໄລ່ຍອດຄືນທັງໝົດ (Backfill & Sync)
        </v-card-title>
        <v-card-text class="pt-3">
          <p class="text-subtitle-1 mb-2">
            ລະບົບຈະຄິດໄລ່ຍອດຍົກມາ ແລະ ຍອດທ້າຍງວດຍ້ອນຫຼັງທຸກໆເດືອນຕັ້ງແຕ່ເລີ່ມຕົ້ນຈົນຮອດປະຈຸບັນ.
          </p>
          <v-alert type="info" text dense>
            ໃຊ້ງານເມື່ອມີການເພີ່ມ ຫຼື ແກ້ໄຂທຸລະກຳຍ້ອນຫຼັງຫຼາຍລາຍການ ເພື່ອໃຫ້ຍອດທຸກເດືອນຕໍ່ເນື່ອງກັນ 100%.
          </v-alert>
        </v-card-text>
        <v-card-actions class="px-4 pb-3">
          <v-spacer />
          <v-btn text class="rounded-lg text-none" @click="backfillDialog = false" :disabled="submittingBackfill">
            ຍົກເລີກ
          </v-btn>
          <v-btn color="primary" class="rounded-lg text-none font-weight-bold px-4" @click="handleBackfill" :loading="submittingBackfill">
            <v-icon left small>mdi-play</v-icon>
            ເລີ່ມຄິດໄລ່
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { printMasterMinistryAnalysisReport } from '@/common/moneyAdvanceMasterPrintTemplate'

export default {
  name: 'PaymentSettlementAnalysis',

  data() {
    return {
      activeTab: 0,
      ministrySubView: 0, // 0: Master Flow, 1: Outstanding, 2: Payments, 3: Settlements, 4: BF
      bankSubView: 0,     // 0: Outstanding, 1: Payments, 2: Settlements, 3: BF
      searchMinistryText: '',
      searchBankText: '',
      searchChartText: '',

      loading: false,
      exporting: false,
      selectedBranchId: 1,

      // Period State & Management Dialogs
      periodInfo: {
        isClosed: false,
        closedAt: null,
        closedBy: null,
        note: ''
      },
      closePeriodDialog: false,
      closePeriodNote: '',
      submittingClosePeriod: false,
      reopenPeriodDialog: false,
      submittingReopenPeriod: false,
      backfillDialog: false,
      submittingBackfill: false,

      // Monthly Date Selection (dropdowns)
      selectedYear: new Date().getFullYear(),
      selectedMonthNum: new Date().getMonth() + 1,

      monthOptions: [
        { name: 'ມັງກອນ (January)', value: 1 },
        { name: 'ກຸມພາ (February)', value: 2 },
        { name: 'ມີນາ (March)', value: 3 },
        { name: 'ເມສາ (April)', value: 4 },
        { name: 'ພຶດສະພາ (May)', value: 5 },
        { name: 'ມິຖຸນາ (June)', value: 6 },
        { name: 'ກໍລະກົດ (July)', value: 7 },
        { name: 'ສິງຫາ (August)', value: 8 },
        { name: 'ກັນຍາ (September)', value: 9 },
        { name: 'ຕຸລາ (October)', value: 10 },
        { name: 'ພະຈິກ (November)', value: 11 },
        { name: 'ທັນວາ (December)', value: 12 },
      ],

      // Balance Forward Data
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

      // Outstanding Balance Data
      outstandingBalanceData: {
        byMinistry: [],
        byBankAccount: [],
        byCurrency: [],
        totals: { totalLakEquivalent: 0, currencyTotals: {} },
      },
      loadingOutstandingBalance: false,
    }
  },

  computed: {
    ...mapGetters(['findAllCompany']),

    yearOptions() {
      const currentYear = new Date().getFullYear()
      const years = []
      for (let i = currentYear - 5; i <= currentYear + 2; i++) {
        years.push(i)
      }
      return years
    },

    selectedMonth() {
      const monthStr = this.selectedMonthNum.toString().padStart(2, '0')
      return `${this.selectedYear}-${monthStr}`
    },

    formattedSelectedMonth() {
      const monthObj = this.monthOptions.find((m) => m.value === this.selectedMonthNum)
      const monthName = monthObj ? monthObj.name.split(' ')[0] : 'Invalid'
      return `${monthName} ${this.selectedYear}`
    },

    dateRangesText() {
      const ranges = this.getDateRanges()
      return `${ranges.current.start || '-'} ຫາ ${ranges.current.end || '-'}`
    },

    totalPaymentCount() {
      return this.paymentMinistryReport.reduce((sum, m) => sum + (m.count || 0), 0)
    },

    totalSettlementCount() {
      return this.settlementMinistryReport.reduce((sum, m) => sum + (m.count || 0), 0)
    },

    activeBalanceForwardMinistries() {
      return (this.balanceForwardData?.byMinistry || []).filter((m) => Math.abs(m?.totalLakEquivalent || 0) > 0.01)
    },

    activeOutstandingMinistries() {
      return (this.outstandingBalanceData?.byMinistry || []).filter((m) => Math.abs(m?.totalLakEquivalent || 0) > 0.01)
    },

    topOutstandingMinistries() {
      return [...(this.outstandingBalanceData?.byMinistry || [])]
        .sort((a, b) => (b?.totalLakEquivalent || 0) - (a?.totalLakEquivalent || 0))
        .slice(0, 5)
    },

    // Master 7-Column Ministry Summary (BF, Payment, Settlement, Closing Balance)
    masterMinistrySummary() {
      const ministryMap = new Map()

      const getOrSetMinistry = (id, code, name) => {
        const key = id || 'NO_MINISTRY'
        if (!ministryMap.has(key)) {
          ministryMap.set(key, {
            ministryId: key,
            ministryCode: code || 'N/A',
            ministryName: name || 'Unknown Ministry',
            balanceForward: 0,
            payment: 0,
            settlement: 0,
            closingBalance: 0,
            remark: '',
          })
        }
        return ministryMap.get(key)
      }

      // 1. Balance Forward
      (this.balanceForwardData?.byMinistry || []).forEach((item) => {
        const min = getOrSetMinistry(item.ministryId, item.ministryCode, item.ministryName)
        min.balanceForward = parseFloat(item.totalLakEquivalent || 0)
      });

      // 2. Payments (converted to LAK)
      (this.paymentMinistryReport || []).forEach((item) => {
        const min = getOrSetMinistry(item.ministryId, item.ministryCode, item.ministryName)
        min.payment = parseFloat(item.totalLakEquivalent || 0)
      });

      // 3. Settlements (converted to LAK)
      (this.settlementMinistryReport || []).forEach((item) => {
        const min = getOrSetMinistry(item.ministryId, item.ministryCode, item.ministryName)
        min.settlement = parseFloat(item.totalLakEquivalent || 0)
      });

      // 4. Closing Balance
      (this.outstandingBalanceData?.byMinistry || []).forEach((item) => {
        const min = getOrSetMinistry(item.ministryId, item.ministryCode, item.ministryName)
        min.closingBalance = parseFloat(item.totalLakEquivalent || 0)
      })

      // Fallback closing calculation
      ministryMap.forEach((min) => {
        if (
          min.closingBalance === 0 &&
          (min.balanceForward !== 0 || min.payment !== 0 || min.settlement !== 0)
        ) {
          min.closingBalance = min.balanceForward + min.payment - min.settlement
        }
      })

      const list = Array.from(ministryMap.values())
      list.sort((a, b) => {
        if (a.ministryId === 'NO_MINISTRY') return 1
        if (b.ministryId === 'NO_MINISTRY') return -1
        return (a.ministryName || '').localeCompare(b.ministryName || '')
      })

      if (!this.searchMinistryText) return list

      const q = this.searchMinistryText.toLowerCase().trim()
      return list.filter(
        (r) =>
          (r.ministryCode && r.ministryCode.toLowerCase().includes(q)) ||
          (r.ministryName && r.ministryName.toLowerCase().includes(q))
      )
    },

    masterMinistryTotals() {
      const rows = this.masterMinistrySummary || []
      return {
        totalBalanceForward: rows.reduce((s, r) => s + (r.balanceForward || 0), 0),
        totalPayment: rows.reduce((s, r) => s + (r.payment || 0), 0),
        totalSettlement: rows.reduce((s, r) => s + (r.settlement || 0), 0),
        totalClosingBalance: rows.reduce((s, r) => s + (r.closingBalance || 0), 0),
      }
    },

    // Active Ministry Sub-View Table Properties (for multi-currency breakdown subviews)
    activeMinistryCurrencyList() {
      switch (this.ministrySubView) {
        case 2: // Payments
          return this.paymentCurrencyList || []
        case 3: // Settlements
          return this.settlementCurrencyList || []
        case 4: // Balance Forward
          return Object.keys(this.balanceForwardData?.totals?.currencyTotals || {})
        default: // Outstanding (1)
          return Object.keys(this.outstandingBalanceData?.totals?.currencyTotals || {})
      }
    },

    activeMinistryTableRows() {
      let rawList = []
      switch (this.ministrySubView) {
        case 2:
          rawList = this.paymentMinistryReport || []
          break
        case 3:
          rawList = this.settlementMinistryReport || []
          break
        case 4:
          rawList = this.balanceForwardData?.byMinistry || []
          break
        default:
          rawList = this.outstandingBalanceData?.byMinistry || []
          break
      }

      if (!this.searchMinistryText) return rawList

      const query = this.searchMinistryText.toLowerCase().trim()
      return rawList.filter(
        (r) =>
          (r?.ministryCode && r.ministryCode.toLowerCase().includes(query)) ||
          (r?.ministryName && r.ministryName.toLowerCase().includes(query))
      )
    },

    activeMinistryTotals() {
      switch (this.ministrySubView) {
        case 2:
          return this.paymentMinistryTotals || { currencyTotals: {}, totalLakEquivalent: 0 }
        case 3:
          return this.settlementMinistryTotals || { currencyTotals: {}, totalLakEquivalent: 0 }
        case 4:
          return this.balanceForwardData?.totals || { currencyTotals: {}, totalLakEquivalent: 0 }
        default:
          return this.outstandingBalanceData?.totals || { currencyTotals: {}, totalLakEquivalent: 0 }
      }
    },

    // Active Bank Sub-View Table Properties
    activeBankCurrencyList() {
      switch (this.bankSubView) {
        case 1:
          return this.paymentCurrencyList || []
        case 2:
          return this.settlementCurrencyList || []
        case 3:
          return Object.keys(this.balanceForwardData?.totals?.currencyTotals || {})
        default:
          return Object.keys(this.outstandingBalanceData?.totals?.currencyTotals || {})
      }
    },

    activeBankTableRows() {
      let rawList = []
      switch (this.bankSubView) {
        case 1:
          rawList = this.paymentBankReport || []
          break
        case 2:
          rawList = this.settlementBankReport || []
          break
        case 3:
          rawList = this.balanceForwardData?.byBankAccount || []
          break
        default:
          rawList = this.outstandingBalanceData?.byBankAccount || []
          break
      }

      if (!this.searchBankText) return rawList

      const query = this.searchBankText.toLowerCase().trim()
      return rawList.filter(
        (r) =>
          (r?.accountNumber && r.accountNumber.toLowerCase().includes(query)) ||
          (r?.accountName && r.accountName.toLowerCase().includes(query)) ||
          (r?.bankName && r.bankName.toLowerCase().includes(query))
      )
    },

    activeBankTotals() {
      switch (this.bankSubView) {
        case 1:
          return this.paymentBankTotals || { currencyTotals: {}, totalLakEquivalent: 0 }
        case 2:
          return this.settlementBankTotals || { currencyTotals: {}, totalLakEquivalent: 0 }
        case 3:
          return this.balanceForwardData?.totals || { currencyTotals: {}, totalLakEquivalent: 0 }
        default:
          return this.outstandingBalanceData?.totals || { currencyTotals: {}, totalLakEquivalent: 0 }
      }
    },

    filteredSettlementChartRows() {
      if (!this.searchChartText) return this.settlementChartReport
      const query = this.searchChartText.toLowerCase().trim()
      return this.settlementChartReport.filter(
        (r) =>
          (r.chartAccountCode && r.chartAccountCode.toLowerCase().includes(query)) ||
          (r.chartAccountName && r.chartAccountName.toLowerCase().includes(query))
      )
    },
  },

  async created() {
    if (this.$route.query.year && this.$route.query.month) {
      this.selectedYear = parseInt(this.$route.query.year)
      this.selectedMonthNum = parseInt(this.$route.query.month)
    } else {
      this.setDefaultMonth()
    }
    await this.fetchAllReports()
  },

  methods: {
    setDefaultMonth() {
      const now = new Date()
      this.selectedYear = now.getFullYear()
      this.selectedMonthNum = now.getMonth() + 1
    },

    goToPreviousMonth() {
      if (this.selectedMonthNum === 1) {
        this.selectedMonthNum = 12
        this.selectedYear -= 1
      } else {
        this.selectedMonthNum -= 1
      }
      this.fetchAllReports()
    },

    goToNextMonth() {
      if (this.selectedMonthNum === 12) {
        this.selectedMonthNum = 1
        this.selectedYear += 1
      } else {
        this.selectedMonthNum += 1
      }
      this.fetchAllReports()
    },

    onDateChange() {
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
      const currentEnd = new Date(currentYear, currentMonth, 0)

      // Previous month range (for balance forward)
      const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear
      const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1
      const previousStart = new Date(previousYear, 0, 1)
      const previousEnd = new Date(currentYear, currentMonth - 1, 0)

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

    async fetchAllReports() {
      this.loading = true
      try {
        const response = await this.$axios.get('/api/pwt/period-balances/master-summary', {
          params: {
            branchId: this.selectedBranchId,
            year: this.selectedYear,
            month: this.selectedMonthNum,
          },
        })

        if (response.data && response.data.success) {
          const data = response.data
          this.periodInfo = data.period || {
            isClosed: false,
            closedAt: null,
            closedBy: null,
            note: '',
          }
          this.balanceForwardData = data.balanceForward || this.balanceForwardData
          this.paymentMinistryReport = data.currentAdvances?.byMinistry || []
          this.paymentMinistryTotals = data.currentAdvances?.totals || { currencyTotals: {}, totalLakEquivalent: 0 }
          this.paymentBankReport = data.currentAdvances?.byBankAccount || []
          this.paymentBankTotals = data.currentAdvances?.totals || { currencyTotals: {}, totalLakEquivalent: 0 }
          this.settlementMinistryReport = data.currentSettlements?.byMinistry || []
          this.settlementMinistryTotals = data.currentSettlements?.totals || { currencyTotals: {}, totalLakEquivalent: 0 }
          this.settlementBankReport = data.currentSettlements?.byBankAccount || []
          this.settlementBankTotals = data.currentSettlements?.totals || { currencyTotals: {}, totalLakEquivalent: 0 }
          this.outstandingBalanceData = data.closingBalance || this.outstandingBalanceData

          // Fetch chart accounts for Tab 3 breakdown
          this.fetchSettlementChartReport()
        } else {
          await this.loadLegacyReports()
        }
      } catch (error) {
        console.warn('Using legacy report loader fallback:', error)
        await this.loadLegacyReports()
      } finally {
        this.loading = false
      }
    },

    async loadLegacyReports() {
      await Promise.all([
        this.fetchBalanceForward(),
        this.fetchPaymentMinistryReport(),
        this.fetchPaymentBankReport(),
        this.fetchSettlementMinistryReport(),
        this.fetchSettlementBankReport(),
        this.fetchSettlementChartReport(),
      ])
      await this.calculateOutstandingBalance()
    },

    async handleClosePeriod() {
      try {
        this.submittingClosePeriod = true
        const response = await this.$axios.post('/api/pwt/period-balances/close-period', {
          branchId: this.selectedBranchId,
          year: this.selectedYear,
          month: this.selectedMonthNum,
          note: this.closePeriodNote,
        })

        if (response.data && response.data.success) {
          if (this.$toast) {
            this.$toast.success('ປິດງວດບັນຊີສຳເລັດແລ້ວ (Period Closed)')
          }
          this.closePeriodDialog = false
          this.closePeriodNote = ''
          await this.fetchAllReports()
        }
      } catch (err) {
        console.error('Error closing period:', err)
        if (this.$toast) {
          this.$toast.error(err.response?.data?.message || 'Error closing period')
        }
      } finally {
        this.submittingClosePeriod = false
      }
    },

    async handleReopenPeriod() {
      try {
        this.submittingReopenPeriod = true
        const response = await this.$axios.post('/api/pwt/period-balances/reopen-period', {
          branchId: this.selectedBranchId,
          year: this.selectedYear,
          month: this.selectedMonthNum,
        })

        if (response.data && response.data.success) {
          if (this.$toast) {
            this.$toast.success('ເປີດງວດຄືນສຳເລັດ (Period Reopened)')
          }
          this.reopenPeriodDialog = false
          await this.fetchAllReports()
        }
      } catch (err) {
        console.error('Error reopening period:', err)
        if (this.$toast) {
          this.$toast.error(err.response?.data?.message || 'Error reopening period')
        }
      } finally {
        this.submittingReopenPeriod = false
      }
    },

    async handleBackfill() {
      try {
        this.submittingBackfill = true
        const response = await this.$axios.post('/api/pwt/period-balances/backfill', {
          branchId: this.selectedBranchId,
        })

        if (response.data && response.data.success) {
          if (this.$toast) {
            this.$toast.success(response.data.message || 'ຄິດໄລ່ຍອດຄືນທັງໝົດສຳເລັດ')
          }
          this.backfillDialog = false
          await this.fetchAllReports()
        }
      } catch (err) {
        console.error('Error during backfill:', err)
        if (this.$toast) {
          this.$toast.error(err.response?.data?.message || 'Error running backfill')
        }
      } finally {
        this.submittingBackfill = false
      }
    },

    // ========================================
    // BALANCE FORWARD METHODS
    // ========================================

    async fetchBalanceForward() {
      try {
        this.loadingBalanceForward = true
        const dateRanges = this.getDateRanges()
        if (!dateRanges.previous.start) return

        const [paymentsData, settlementsData] = await Promise.all([
          this.fetchPaymentsForPeriod(dateRanges.previous.start, dateRanges.previous.end),
          this.fetchSettlementsForPeriod(dateRanges.previous.start, dateRanges.previous.end),
        ])

        this.calculateBalanceForward(paymentsData, settlementsData)
      } catch (err) {
        console.error('Error calculating balance forward:', err)
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
            limit: 100,
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
            isActive: 'true',
            include: ['ministry', 'currency', 'bankAccount'],
            page: currentPage,
            limit: 100,
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

      payments.forEach((payment) => {
        const ministry = payment.ministry
        const bankAccount = payment.bankAccount
        const currencyCode = payment.currency?.code || 'LAK'
        const exchangeRate = parseFloat(payment.exchangeRate) || 1
        const amount = parseFloat(payment.amount) || 0
        const lakEquivalent = amount * exchangeRate

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
        ministryEntry.amounts[currencyCode] = (ministryEntry.amounts[currencyCode] || 0) + amount
        ministryEntry.totalLakEquivalent += lakEquivalent

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
        bankAccountEntry.amounts[currencyCode] = (bankAccountEntry.amounts[currencyCode] || 0) + amount
        bankAccountEntry.totalLakEquivalent += lakEquivalent

        currencyTotals[currencyCode] = (currencyTotals[currencyCode] || 0) + amount
      })

      settlements.forEach((settlement) => {
        const ministry = settlement.ministry
        const bankAccount = settlement.bankAccount
        const currencyCode = settlement.currency?.code || 'LAK'
        const exchangeRate = parseFloat(settlement.exchangeRate) || 1
        const amount = parseFloat(settlement.amount) || 0
        const lakEquivalent = amount * exchangeRate

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
        ministryEntry.amounts[currencyCode] = (ministryEntry.amounts[currencyCode] || 0) - amount
        ministryEntry.totalLakEquivalent -= lakEquivalent

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
        bankAccountEntry.amounts[currencyCode] = (bankAccountEntry.amounts[currencyCode] || 0) - amount
        bankAccountEntry.totalLakEquivalent -= lakEquivalent

        currencyTotals[currencyCode] = (currencyTotals[currencyCode] || 0) - amount
      })

      const totalLakEquivalent = Array.from(ministryMap.values()).reduce(
        (sum, m) => sum + m.totalLakEquivalent,
        0
      )

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
    },

    // ========================================
    // PAYMENT REPORTS
    // ========================================

    async fetchPaymentMinistryReport() {
      try {
        this.loadingPaymentMinistry = true
        const dateRanges = this.getDateRanges()
        if (!dateRanges.current.start) return

        const allPayments = await this.fetchPaymentsForPeriod(
          dateRanges.current.start,
          dateRanges.current.end
        )

        const ministryMap = new Map()
        const currencySet = new Set()

        allPayments.forEach((advance) => {
          const ministry = advance.ministry
          const ministryId = ministry?.id || 'NO_MINISTRY'
          const ministryName = ministry?.ministryName || 'No Ministry Assigned'
          const ministryCode = ministry?.ministryCode || 'N/A'

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
          ministryRow.amounts[currencyCode] = (ministryRow.amounts[currencyCode] || 0) + amount
        })

        this.paymentCurrencyList = Array.from(currencySet).sort()
        this.paymentMinistryReport = Array.from(ministryMap.values()).sort((a, b) => {
          if (a.ministryId === 'NO_MINISTRY') return 1
          if (b.ministryId === 'NO_MINISTRY') return -1
          return a.ministryName.localeCompare(b.ministryName)
        })

        this.paymentMinistryTotals = {
          totalLakEquivalent: this.paymentMinistryReport.reduce(
            (sum, m) => sum + m.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.paymentCurrencyList.forEach((currency) => {
          this.paymentMinistryTotals.currencyTotals[currency] = this.paymentMinistryReport.reduce(
            (sum, m) => sum + (m.amounts[currency] || 0),
            0
          )
        })
      } catch (err) {
        console.error('Error fetching payment ministry report:', err)
      } finally {
        this.loadingPaymentMinistry = false
      }
    },

    async fetchPaymentBankReport() {
      try {
        this.loadingPaymentBank = true
        const dateRanges = this.getDateRanges()
        if (!dateRanges.current.start) return

        const allPayments = await this.fetchPaymentsForPeriod(
          dateRanges.current.start,
          dateRanges.current.end
        )

        const bankAccountMap = new Map()
        const currencySet = new Set()

        allPayments.forEach((advance) => {
          const bankAccount = advance.bankAccount
          const bankAccountId = bankAccount?.id || 'NO_BANK_ACCOUNT'
          const accountNumber = bankAccount?.accountNumber || 'N/A'
          const accountName = bankAccount?.accountName || 'Cash Transaction'
          const bankName = bankAccount?.bankName || 'No Bank'

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
          bankAccountRow.amounts[currencyCode] = (bankAccountRow.amounts[currencyCode] || 0) + amount
        })

        this.paymentBankReport = Array.from(bankAccountMap.values()).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1
          const bankComparison = a.bankName.localeCompare(b.bankName)
          if (bankComparison !== 0) return bankComparison
          return a.accountName.localeCompare(b.accountName)
        })

        this.paymentBankTotals = {
          totalLakEquivalent: this.paymentBankReport.reduce(
            (sum, b) => sum + b.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.paymentCurrencyList.forEach((currency) => {
          this.paymentBankTotals.currencyTotals[currency] = this.paymentBankReport.reduce(
            (sum, b) => sum + (b.amounts[currency] || 0),
            0
          )
        })
      } catch (err) {
        console.error('Error fetching payment bank report:', err)
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

        const ministryMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const ministry = settlement.ministry
          const ministryId = ministry?.id || 'NO_MINISTRY'
          const ministryName = ministry?.ministryName || 'No Ministry Assigned'
          const ministryCode = ministry?.ministryCode || 'N/A'

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
          ministryRow.amounts[currencyCode] = (ministryRow.amounts[currencyCode] || 0) + amount
        })

        this.settlementCurrencyList = Array.from(currencySet).sort()
        this.settlementMinistryReport = Array.from(ministryMap.values()).sort((a, b) => {
          if (a.ministryId === 'NO_MINISTRY') return 1
          if (b.ministryId === 'NO_MINISTRY') return -1
          return a.ministryName.localeCompare(b.ministryName)
        })

        this.settlementMinistryTotals = {
          totalLakEquivalent: this.settlementMinistryReport.reduce(
            (sum, m) => sum + m.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.settlementCurrencyList.forEach((currency) => {
          this.settlementMinistryTotals.currencyTotals[currency] = this.settlementMinistryReport.reduce(
            (sum, m) => sum + (m.amounts[currency] || 0),
            0
          )
        })
      } catch (err) {
        console.error('Error fetching settlement ministry report:', err)
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

        const bankAccountMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const bankAccount = settlement.bankAccount
          const bankAccountId = bankAccount?.id || 'NO_BANK_ACCOUNT'
          const accountNumber = bankAccount?.accountNumber || 'N/A'
          const accountName = bankAccount?.accountName || 'Cash Transaction'
          const bankName = bankAccount?.bankName || 'No Bank'

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
          bankAccountRow.amounts[currencyCode] = (bankAccountRow.amounts[currencyCode] || 0) + amount
        })

        this.settlementBankReport = Array.from(bankAccountMap.values()).sort((a, b) => {
          if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
          if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1
          const bankComparison = a.bankName.localeCompare(b.bankName)
          if (bankComparison !== 0) return bankComparison
          return a.accountName.localeCompare(b.accountName)
        })

        this.settlementBankTotals = {
          totalLakEquivalent: this.settlementBankReport.reduce(
            (sum, b) => sum + b.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.settlementCurrencyList.forEach((currency) => {
          this.settlementBankTotals.currencyTotals[currency] = this.settlementBankReport.reduce(
            (sum, b) => sum + (b.amounts[currency] || 0),
            0
          )
        })
      } catch (err) {
        console.error('Error fetching settlement bank report:', err)
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

        const chartAccountMap = new Map()
        const currencySet = new Set()

        allSettlements.forEach((settlement) => {
          const chartAccount = settlement.chartAccount
          const chartAccountId = chartAccount?.id || 'NO_CHART_ACCOUNT'
          const chartAccountCode = chartAccount?.accountNumber || chartAccount?.code || 'N/A'
          const chartAccountName = chartAccount?.accountName || chartAccount?.name || 'No Chart Account'

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
          chartAccountRow.amounts[currencyCode] = (chartAccountRow.amounts[currencyCode] || 0) + amount
        })

        this.settlementCurrencyList = Array.from(currencySet).sort()
        this.settlementChartReport = Array.from(chartAccountMap.values()).sort((a, b) => {
          if (a.chartAccountId === 'NO_CHART_ACCOUNT') return 1
          if (b.chartAccountId === 'NO_CHART_ACCOUNT') return -1
          return a.chartAccountCode.localeCompare(b.chartAccountCode)
        })

        this.settlementChartTotals = {
          totalLakEquivalent: this.settlementChartReport.reduce(
            (sum, c) => sum + c.totalLakEquivalent,
            0
          ),
          currencyTotals: {},
        }

        this.settlementCurrencyList.forEach((currency) => {
          this.settlementChartTotals.currencyTotals[currency] = this.settlementChartReport.reduce(
            (sum, c) => sum + (c.amounts[currency] || 0),
            0
          )
        })
      } catch (err) {
        console.error('Error fetching settlement chart report:', err)
      } finally {
        this.loadingSettlementChart = false
      }
    },

    // ========================================
    // OUTSTANDING BALANCE CALCULATION
    // ========================================

    async calculateOutstandingBalance() {
      try {
        this.loadingOutstandingBalance = true

        const balanceForward = this.balanceForwardData
        const currentPayments = this.paymentMinistryReport
        const currentSettlements = this.settlementMinistryReport

        const ministryBalanceMap = new Map()
        const bankAccountBalanceMap = new Map()
        const allCurrencies = new Set()

        // 1. Balance Forward
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

        // 2. Add Current Payments (+)
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
              (ministryBalance.amounts[currency] || 0) + payment.amounts[currency]
          })
        })

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

        // 3. Subtract Current Settlements (-)
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
              (ministryBalance.amounts[currency] || 0) - settlement.amounts[currency]
          })
        })

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
              (bankBalance.amounts[currency] || 0) - settlement.amounts[currency]
          })
        })

        const currencyTotals = {}
        Array.from(allCurrencies).forEach((currency) => {
          currencyTotals[currency] = Array.from(ministryBalanceMap.values()).reduce(
            (sum, ministry) => sum + (ministry.amounts[currency] || 0),
            0
          )
        })

        const totalLakEquivalent = Array.from(ministryBalanceMap.values()).reduce(
          (sum, ministry) => sum + ministry.totalLakEquivalent,
          0
        )

        this.outstandingBalanceData = {
          byMinistry: Array.from(ministryBalanceMap.values()).sort((a, b) => {
            if (a.ministryId === 'NO_MINISTRY') return 1
            if (b.ministryId === 'NO_MINISTRY') return -1
            return a.ministryName.localeCompare(b.ministryName)
          }),
          byBankAccount: Array.from(bankAccountBalanceMap.values()).sort((a, b) => {
            if (a.bankAccountId === 'NO_BANK_ACCOUNT') return 1
            if (b.bankAccountId === 'NO_BANK_ACCOUNT') return -1
            const bankComparison = a.bankName.localeCompare(b.bankName)
            if (bankComparison !== 0) return bankComparison
            return a.accountName.localeCompare(b.accountName)
          }),
          byCurrency: Array.from(allCurrencies).map((currency) => ({
            currency,
            amount: currencyTotals[currency] || 0,
          })),
          totals: {
            currencyTotals,
            totalLakEquivalent,
          },
        }
      } catch (error) {
        console.error('Error calculating outstanding balance:', error)
      } finally {
        this.loadingOutstandingBalance = false
      }
    },

    // Helper lookup methods for Overview table
    getMinistryBF(ministryId) {
      const found = this.balanceForwardData.byMinistry.find((m) => m.ministryId === ministryId)
      return found ? found.totalLakEquivalent : 0
    },

    getMinistryPayment(ministryId) {
      const found = this.paymentMinistryReport.find((m) => m.ministryId === ministryId)
      return found ? found.totalLakEquivalent : 0
    },

    getBankPayment(bankAccountId) {
      const found = this.paymentBankReport.find((b) => b.bankAccountId === bankAccountId)
      return found ? found.totalLakEquivalent : 0
    },

    getBankSettlement(bankAccountId) {
      const found = this.settlementBankReport.find((b) => b.bankAccountId === bankAccountId)
      return found ? found.totalLakEquivalent : 0
    },

    getAmountColorClass(amount, subViewIndex) {
      if (subViewIndex === 2) return 'amber--text text--darken-3' // Payment
      if (subViewIndex === 3) return 'green--text text--darken-3' // Settlement
      if (subViewIndex === 4) return 'blue--text text--darken-3'  // BF
      // Outstanding
      if (amount > 0) return 'error--text'
      if (amount < 0) return 'success--text'
      return 'grey--text text--darken-2'
    },

    formatAmount(amount) {
      if (!amount || amount === 0) return '0'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(amount)
    },

    printSummary() {
      if (!this.masterMinistrySummary || !this.masterMinistrySummary.length) {
        this.showToast('ບໍ່ມີຂໍ້ມູນໃນການພິມລາຍງານ (No data to print)', 'warning')
        return
      }

      const company =
        this.findAllCompany && this.findAllCompany.length > 0
          ? this.findAllCompany[0]
          : {}
      const user = this.$auth?.user || this.$store?.state?.user || {}

      printMasterMinistryAnalysisReport({
        masterData: this.masterMinistrySummary,
        totals: this.masterMinistryTotals,
        selectedMonthText: this.formattedSelectedMonth,
        dateRangeText: this.dateRangesText,
        companyData: company,
        user: user,
      })
    },

    exportActiveMinistryTab() {
      switch (this.ministrySubView) {
        case 0:
          this.exportReport('master-ministry')
          break
        case 1:
          this.exportReport('outstanding-ministry')
          break
        case 2:
          this.exportReport('payment-ministry')
          break
        case 3:
          this.exportReport('settlement-ministry')
          break
        case 4:
          this.exportReport('balance-ministry')
          break
        default:
          this.exportReport('master-ministry')
          break
      }
    },

    exportActiveBankTab() {
      switch (this.bankSubView) {
        case 1:
          this.exportReport('payment-bank')
          break
        case 2:
          this.exportReport('settlement-bank')
          break
        case 3:
          this.exportReport('balance-ministry')
          break
        default:
          this.exportReport('outstanding-bank')
          break
      }
    },

    async exportReport(reportType) {
      this.exporting = true
      try {
        let data = []
        let filename = ''

        switch (reportType) {
          case 'master-ministry':
            data = this.masterMinistrySummary.map((item, index) => ({
              '#': index + 1,
              'ຊື່ກະຊວງ / ກົມ':
                item.ministryCode && item.ministryCode !== 'N/A'
                  ? `${item.ministryCode} - ${item.ministryName}`
                  : item.ministryName,
              'ຍອດຍົກມາ (Balance Forward)': item.balanceForward,
              'ລາຍຈ່າຍ (Payment in LAK)': item.payment,
              'ລາຍຮັບ / ຊຳລະ (Settlement)': item.settlement,
              'ຍອດຄົງເຫຼືອທ້າຍງວດ (Closing Balance)': item.closingBalance,
              'ໝາຍເຫດ (Remark)': item.remark || '',
            }))
            filename = `Master_Ministry_Analysis_${this.selectedMonth}`
            break
          case 'balance-ministry':
            data = this.prepareExportData(
              this.balanceForwardData.byMinistry,
              Object.keys(this.balanceForwardData.totals.currencyTotals),
              'ministry'
            )
            filename = `Balance_Forward_Ministry_${this.selectedMonth}`
            break
          case 'payment-ministry':
            data = this.prepareExportData(
              this.paymentMinistryReport,
              this.paymentCurrencyList,
              'ministry'
            )
            filename = `Payment_Ministry_${this.selectedMonth}`
            break
          case 'payment-bank':
            data = this.prepareExportData(
              this.paymentBankReport,
              this.paymentCurrencyList,
              'bank'
            )
            filename = `Payment_Bank_Account_${this.selectedMonth}`
            break
          case 'settlement-ministry':
            data = this.prepareExportData(
              this.settlementMinistryReport,
              this.settlementCurrencyList,
              'ministry'
            )
            filename = `Settlement_Ministry_${this.selectedMonth}`
            break
          case 'settlement-bank':
            data = this.prepareExportData(
              this.settlementBankReport,
              this.settlementCurrencyList,
              'bank'
            )
            filename = `Settlement_Bank_Account_${this.selectedMonth}`
            break
          case 'settlement-chart':
            data = this.prepareExportData(
              this.settlementChartReport,
              this.settlementCurrencyList,
              'chart'
            )
            filename = `Settlement_Chart_Account_${this.selectedMonth}`
            break
          case 'outstanding-ministry':
            data = this.prepareExportData(
              this.outstandingBalanceData.byMinistry,
              Object.keys(this.outstandingBalanceData.totals.currencyTotals),
              'ministry'
            )
            filename = `Outstanding_Balance_Ministry_${this.selectedMonth}`
            break
          case 'outstanding-bank':
            data = this.prepareExportData(
              this.outstandingBalanceData.byBankAccount,
              Object.keys(this.outstandingBalanceData.totals.currencyTotals),
              'bank'
            )
            filename = `Outstanding_Balance_Bank_Account_${this.selectedMonth}`
            break
        }

        await this.exportToCSV(data, filename)
        this.showToast(`${filename} exported successfully`, 'success')
      } catch (error) {
        console.error('Error exporting report:', error)
        this.showToast('Error exporting report', 'error')
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
      if (!data || data.length === 0) return

      const headers = Object.keys(data[0])
      const csvContent = [
        '\uFEFF' + headers.join(','),
        ...data.map((row) =>
          headers.map((header) => `"${(row[header] || '').toString().replace(/"/g, '""')}"`).join(',')
        ),
      ].join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `${filename}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    },

    showToast(message, type = 'info') {
      if (this.$toast) {
        if (type === 'warning') {
          if (typeof this.$toast.warning === 'function') {
            this.$toast.warning(message)
          } else if (typeof this.$toast.info === 'function') {
            this.$toast.info(message)
          } else {
            this.$toast.show(message)
          }
        } else if (typeof this.$toast[type] === 'function') {
          this.$toast[type](message)
        } else {
          this.$toast.show(message)
        }
      } else if (this.$swal) {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          icon: type === 'warning' ? 'warning' : type,
          title: message,
        })
      } else {
        console.log(`[${type}] ${message}`)
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

.master-analysis-page {
  font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', 'noto sans lao', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
  padding: 8px 12px;
  color: #1e293b;
}

.master-analysis-page * {
  font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', 'noto sans lao', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Top bar */
.title-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-title {
  font-size: 20px;
  letter-spacing: -0.2px;
  color: #0f172a;
}

.page-subtitle {
  font-size: 12px;
  color: #64748b;
}

/* Control Card */
.control-card {
  background-color: #ffffff !important;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}

.current-period-chip {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  font-size: 13px;
  color: #1e40af;
}

.nav-arrow {
  background: #f1f5f9;
  margin: 0 4px;
}

.range-info-badge {
  font-size: 12px;
  padding: 4px 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}

.range-label {
  color: #64748b;
  margin-right: 4px;
}

.range-value {
  font-weight: 600;
  color: #334155;
}

/* KPI Bridge Cards */
.kpi-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
}

.kpi-balance-forward {
  border-left: 4px solid #3b82f6;
}

.kpi-payments {
  border-left: 4px solid #f59e0b;
}

.kpi-settlements {
  border-left: 4px solid #10b981;
}

.kpi-outstanding.border-purple {
  border-left: 4px solid #8b5cf6;
}

.kpi-outstanding.border-red {
  border-left: 4px solid #ef4444;
}

.kpi-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: #64748b;
}

.kpi-value {
  font-size: 20px;
  line-height: 1.3;
  font-family: 'Roboto Mono', 'SFMono-Regular', Consolas, 'Noto Sans Lao', monospace !important;
}

.kpi-unit {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  margin-left: 2px;
}

.kpi-meta {
  font-size: 11px;
  margin-top: 4px;
}

/* Main Content Card & Tabs */
.main-content-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0;
}

/* Equation Banner */
.equation-banner {
  border: 1px solid #e2e8f0;
}

.eq-block {
  text-align: center;
  flex: 1;
  min-width: 140px;
}

.eq-sub {
  font-size: 11px;
  font-weight: 600;
}

.eq-val {
  font-size: 17px;
  font-family: 'Roboto Mono', 'SFMono-Regular', Consolas, 'Noto Sans Lao', monospace !important;
}

.eq-sign {
  font-size: 20px;
  padding: 0 8px;
}

/* Mini Overview Cards */
.mini-overview-card {
  border: 1px solid #e2e8f0;
}

.mini-table thead th {
  background-color: #f8fafc !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  color: #475569 !important;
  height: 34px !important;
  border-bottom: 1px solid #e2e8f0 !important;
}

.mini-table tbody td {
  font-size: 12px !important;
  height: 38px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

/* Sub filter bar */
.sub-toggle .v-btn {
  border-color: #e2e8f0 !important;
  background-color: #f8fafc !important;
  font-size: 12px !important;
}

.sub-toggle .v-btn--active {
  background-color: #ffffff !important;
  color: #2563eb !important;
  font-weight: 700 !important;
}

/* Modern Report Table */
.table-container-card {
  border: 1px solid #e2e8f0;
  overflow-x: auto;
}

.modern-report-table thead th {
  background-color: #f8fafc !important;
  color: #475569 !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  height: 40px !important;
  border-bottom: 2px solid #e2e8f0 !important;
}

.modern-report-table tbody td {
  font-size: 12px !important;
  height: 42px !important;
  border-bottom: 1px solid #f1f5f9 !important;
  color: #334155;
}

.modern-report-table tbody tr:hover {
  background-color: #f8fafc !important;
}

.highlight-special-row {
  background-color: #fffbeb !important;
}

.table-subtotal-row {
  background-color: #f8fafc !important;
  border-top: 2px solid #cbd5e1 !important;
}

.table-subtotal-row td {
  font-size: 13px !important;
  border-top: 2px solid #cbd5e1 !important;
}

/* Typography & Monospace Numbers */
.font-monospace {
  font-family: 'Roboto Mono', 'SFMono-Regular', Consolas, 'Noto Sans Lao', monospace !important;
}

/* Print Styling */
@media print {
  .page-top-bar .top-actions,
  .control-card,
  .custom-tabs,
  .sub-filter-bar {
    display: none !important;
  }

  .main-content-card {
    border: none !important;
    box-shadow: none !important;
  }
}
</style>