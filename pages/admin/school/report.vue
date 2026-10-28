<template>
  <v-container class="school-billing-dashboard pa-0 ma-0" fluid>
    <!-- Top Header Banner -->
    <v-card class="pa-4 mb-4 rounded-xl header-banner-card elevation-1" outlined>
      <div class="d-flex flex-wrap align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="header-icon-box mr-3">
            <v-icon size="32" color="primary">mdi-chart-box-outline</v-icon>
          </div>
          <div>
            <div class="d-flex align-center flex-wrap">
              <h1 class="text-h5 font-weight-bold primary--text mb-0">
                ລາຍງານການເງິນ ແລະ ສະຫຼຸບຍອດປິດກະເປົາ
              </h1>
              <span class="caption grey--text text--darken-1 ml-2 font-weight-medium">(Financial & Shift Reports)</span>
            </div>
            <p class="text-caption grey--text text--darken-1 mb-0 mt-1">
              ກວດສອບຍອດເງິນສົດໃນລີ້ນຊັກ, ຍອດຕື່ມ-ຖອນບັດນັກຮຽນ, ການມອບເງິນສົດເຂົ້າບັນຊີກາງ ແລະ ສະຫຼຸບປິດ Shift ແຕ່ລະ Cashier
            </p>
          </div>
        </div>

        <!-- Active Shift Indicator & Quick Actions -->
        <div class="d-flex align-center flex-wrap mt-2 mt-sm-0">
          <v-btn color="teal darken-1" dark class="mr-3 font-weight-bold rounded-lg" elevation="2" small @click="openCashDropFromReport(null)">
            <v-icon left small>mdi-bank-transfer-out</v-icon>
            ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop)
          </v-btn>
          <v-chip v-if="activeShift" color="success" text-color="white" class="px-3 font-weight-bold mr-2 shift-active-chip" small elevation="1">
            <span class="live-dot mr-2"></span>
            <v-icon left x-small>mdi-cash-register</v-icon>
            Shift #{{ activeShift.id }} | ເປີດ: {{ formatCurrency(activeShift.openingCash) }} LAK
          </v-chip>
          <v-chip v-else color="error" text-color="white" class="px-3 font-weight-bold mr-2" small elevation="1" to="/admin/school/shift">
            <v-icon left x-small>mdi-cash-register-off</v-icon>
            ບໍ່ມີກະເປົາເປີດ (No Active Shift)
          </v-chip>
          <v-btn color="primary" outlined to="/admin/school/shift" small class="rounded-lg">
            <v-icon left small>mdi-cogs</v-icon>
            ຈັດການ Shift
          </v-btn>
        </div>
      </div>
    </v-card>

    <!-- Main Navigation Tabs -->
    <v-card class="mb-4 pa-1 rounded-xl nav-tabs-card elevation-0" outlined>
      <v-tabs v-model="activeTab" background-color="transparent" color="primary" slider-size="3" slider-color="primary" class="modern-tabs" show-arrows>
        <v-tab class="font-weight-bold rounded-lg text-body-2 tab-item">
          <v-icon left small color="primary">mdi-cash-multiple</v-icon>
          ສະຫຼຸບຍອດ Cashier (Cash Position)
        </v-tab>
        <v-tab class="font-weight-bold rounded-lg text-body-2 tab-item">
          <v-icon left small color="info">mdi-chart-timeline-variant</v-icon>
          ຍອດເກັບເງິນປະຈຳວັນ (Daily Collections)
        </v-tab>
        <v-tab class="font-weight-bold rounded-lg text-body-2 tab-item">
          <v-icon left small color="error">mdi-account-alert-outline</v-icon>
          ຄ້າງຊຳລະສະສົມ (Outstanding)
        </v-tab>
        <v-tab class="font-weight-bold rounded-lg text-body-2 tab-item">
          <v-icon left small color="deep-purple">mdi-google-classroom</v-icon>
          ຕາມຊັ້ນ & ຫ້ອງຮຽນ (Class & Room)
        </v-tab>
        <v-tab class="font-weight-bold rounded-lg text-body-2 tab-item">
          <v-icon left small color="teal">mdi-tag-text-outline</v-icon>
          ຕາມປະເພດຄ່າທໍານຽມ (Fee Items)
        </v-tab>
      </v-tabs>
    </v-card>

    <v-tabs-items v-model="activeTab" class="bg-transparent">
      <!-- TAB 1: CASH POSITION & SHIFT SUMMARY PER USER -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6 rounded-xl">
          <!-- Filter and Action Bar -->
          <v-card outlined class="pa-3 mb-4 rounded-xl filter-toolbar-card">
            <v-row align="center" dense>
              <v-col cols="12" sm="3" md="2">
                <v-text-field
                  v-model="cashPositionFilters.startDate"
                  type="date"
                  label="ແຕ່ວັນທີ (Start Date)"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-calendar-start"
                  @change="fetchCashPositionReport"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="3" md="2">
                <v-text-field
                  v-model="cashPositionFilters.endDate"
                  type="date"
                  label="ຫາວັນທີ (End Date)"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-calendar-end"
                  @change="fetchCashPositionReport"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="3">
                <v-select
                  v-model="cashPositionFilters.userId"
                  :items="userOptions"
                  item-text="name"
                  item-value="id"
                  label="ເລືອກ Cashier / User"
                  outlined
                  dense
                  hide-details="auto"
                  clearable
                  prepend-inner-icon="mdi-account"
                  @change="fetchCashPositionReport"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2" md="1">
                <v-btn
                  color="primary"
                  block
                  depressed
                  class="rounded-lg font-weight-bold"
                  :loading="loadingCashPosition"
                  @click="fetchCashPositionReport"
                >
                  <v-icon left small>mdi-magnify</v-icon>
                  ຄົ້ນຫາ
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="12" md="4" class="text-right d-flex justify-end mt-2 mt-md-0">
                <v-btn
                  color="primary"
                  outlined
                  class="mr-2 rounded-lg font-weight-bold"
                  :disabled="loadingCashPosition"
                  @click="printCashPositionReport"
                >
                  <v-icon left small>mdi-printer</v-icon>
                  ພິມລາຍງານ (Print)
                </v-btn>
                <v-btn
                  color="success"
                  outlined
                  class="rounded-lg font-weight-bold"
                  :disabled="loadingCashPosition || filteredUsers.length === 0"
                  @click="exportToCSV"
                >
                  <v-icon left small>mdi-file-excel</v-icon>
                  Export Excel
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <!-- KPI Summary Cards -->
          <v-row dense class="mb-4">
            <!-- 1. Total Opening Float -->
            <v-col cols="12" sm="6" md="2">
              <v-card class="pa-3 elevation-1 rounded-xl kpi-metric-card kpi-card-slate" outlined>
                <div class="d-flex align-center justify-space-between mb-2">
                  <span class="caption font-weight-bold grey--text text--darken-2">ເງິນເປີດກະເປົາລວມ</span>
                  <div class="kpi-icon-circle icon-slate">
                    <v-icon small color="blue-grey darken-1">mdi-cash-lock</v-icon>
                  </div>
                </div>
                <div class="text-h6 font-weight-bold blue-grey--text text--darken-4 text-tabular">
                  {{ formatCurrency(cashPositionSummary.totalOpeningCash) }}
                  <span class="caption font-weight-regular grey--text ml-1">LAK</span>
                </div>
                <div class="caption grey--text mt-1">Opening Float ລວມ</div>
              </v-card>
            </v-col>

            <!-- 2. Wallet Topup IN -->
            <v-col cols="12" sm="6" md="2">
              <v-card class="pa-3 elevation-1 rounded-xl kpi-metric-card kpi-card-emerald" outlined>
                <div class="d-flex align-center justify-space-between mb-2">
                  <span class="caption font-weight-bold success--text text--darken-3">ຕື່ມເງິນບັດ (Topup IN)</span>
                  <div class="kpi-icon-circle icon-emerald">
                    <v-icon small color="success darken-1">mdi-arrow-down-bold-circle</v-icon>
                  </div>
                </div>
                <div class="text-h6 font-weight-bold success--text text--darken-3 text-tabular">
                  +{{ formatCurrency(cashPositionSummary.totalTopupIn) }}
                  <span class="caption font-weight-regular success--text ml-1">LAK</span>
                </div>
                <div class="caption grey--text mt-1">ເງິນສົດຮັບເຂົ້າບັດນັກຮຽນ</div>
              </v-card>
            </v-col>

            <!-- 3. Wallet Withdraw OUT -->
            <v-col cols="12" sm="6" md="2">
              <v-card class="pa-3 elevation-1 rounded-xl kpi-metric-card kpi-card-rose" outlined>
                <div class="d-flex align-center justify-space-between mb-2">
                  <span class="caption font-weight-bold error--text text--darken-2">ຖອນເງິນບັດ (Withdraw)</span>
                  <div class="kpi-icon-circle icon-rose">
                    <v-icon small color="error">mdi-arrow-up-bold-circle</v-icon>
                  </div>
                </div>
                <div class="text-h6 font-weight-bold error--text text--darken-3 text-tabular">
                  -{{ formatCurrency(cashPositionSummary.totalWithdrawOut) }}
                  <span class="caption font-weight-regular error--text ml-1">LAK</span>
                </div>
                <div class="caption grey--text mt-1">ເງິນສົດຈ່າຍຄືນນັກຮຽນ</div>
              </v-card>
            </v-col>

            <!-- 4. POS Cash Sales -->
            <v-col cols="12" sm="6" md="2">
              <v-card class="pa-3 elevation-1 rounded-xl kpi-metric-card kpi-card-sky" outlined>
                <div class="d-flex align-center justify-space-between mb-2">
                  <span class="caption font-weight-bold info--text text--darken-3">POS ຂາຍເງິນສົດ</span>
                  <div class="kpi-icon-circle icon-sky">
                    <v-icon small color="info darken-1">mdi-cart-check</v-icon>
                  </div>
                </div>
                <div class="text-h6 font-weight-bold info--text text--darken-3 text-tabular">
                  +{{ formatCurrency(cashPositionSummary.totalPosCashSales) }}
                  <span class="caption font-weight-regular info--text ml-1">LAK</span>
                </div>
                <div class="caption grey--text mt-1">ຍອດຂາຍເງິນສົດໜ້າຮ້ານ</div>
              </v-card>
            </v-col>

            <!-- 5. Net Expected Cash in Drawers (HERO CARD) -->
            <v-col cols="12" sm="12" md="4">
              <v-card class="pa-3 elevation-2 rounded-xl kpi-hero-card white--text">
                <div class="d-flex align-center justify-space-between mb-2">
                  <div class="caption font-weight-bold text-uppercase hero-badge">
                    <v-icon x-small color="white" class="mr-1">mdi-safe</v-icon>
                    ເງິນສົດລວມທີ່ຄວນມີໃນລີ້ນຊັກ
                  </div>
                  <div class="kpi-icon-circle icon-hero">
                    <v-icon small color="white">mdi-cash-register</v-icon>
                  </div>
                </div>
                <div class="text-h5 font-weight-bold text-white text-tabular mb-1">
                  {{ formatCurrency(cashPositionSummary.grandExpectedCashInDrawers) }}
                  <span class="text-subtitle-2 font-weight-regular ml-1">LAK</span>
                </div>
                <div class="caption hero-subtext d-flex align-center justify-space-between">
                  <span>ສູດຄິດໄລ່: ເປີດ + ຕື່ມ + POS - ຖອນ</span>
                  <span class="font-weight-bold">Grand Expected Cash</span>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="mb-4"></v-divider>

          <!-- Per-User Cash Position Table -->
          <v-data-table
            :headers="cashPositionHeaders"
            :items="filteredUsers"
            :loading="loadingCashPosition"
            no-data-text="ບໍ່ມີຂໍ້ມູນການເຄື່ອນໄຫວໃນຊ່ວງວັນທີນີ້"
            class="elevation-0 modern-report-table rounded-xl"
            dense
            :items-per-page="15"
          >
            <!-- User Name / Info -->
            <template #[`item.userName`]="{ item }">
              <div class="d-flex align-center py-2">
                <v-avatar size="32" color="primary lighten-5" class="mr-2">
                  <span class="primary--text font-weight-bold caption">{{ (item.userName || 'U').charAt(0).toUpperCase() }}</span>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-subtitle-2 primary--text">{{ item.userName }}</div>
                  <div class="caption grey--text">{{ item.userCode }}</div>
                </div>
              </div>
            </template>

            <!-- Shift Status -->
            <template #[`item.shift`]="{ item }">
              <v-chip
                v-if="item.shift && item.shift.status === 'OPEN'"
                color="success"
                text-color="white"
                x-small
                class="font-weight-bold px-2"
              >
                <span class="table-live-dot mr-1"></span>
                OPEN #{{ item.shift.id }}
              </v-chip>
              <v-chip
                v-else-if="item.shift && item.shift.status === 'CLOSED'"
                color="blue-grey lighten-4"
                text-color="blue-grey darken-3"
                x-small
                class="font-weight-bold px-2"
              >
                CLOSED #{{ item.shift.id }}
              </v-chip>
              <span v-else class="grey--text caption">-</span>
            </template>

            <!-- Opening Float -->
            <template #[`item.openingCash`]="{ item }">
              <span class="font-weight-medium text-tabular">{{ formatCurrency(item.openingCash) }}</span>
            </template>

            <!-- Topup IN -->
            <template #[`item.topupIn`]="{ item }">
              <span class="font-weight-bold success--text text-tabular">
                +{{ formatCurrency(item.topupIn) }}
              </span>
              <span v-if="item.topupCount > 0" class="caption grey--text ml-1">({{ item.topupCount }})</span>
            </template>

            <!-- Withdraw OUT -->
            <template #[`item.withdrawOut`]="{ item }">
              <span v-if="item.withdrawOut > 0" class="font-weight-bold error--text text-tabular">
                -{{ formatCurrency(item.withdrawOut) }}
              </span>
              <span v-else class="grey--text">0</span>
              <span v-if="item.withdrawCount > 0" class="caption grey--text ml-1">({{ item.withdrawCount }})</span>
            </template>

            <!-- POS Cash -->
            <template #[`item.posCashSales`]="{ item }">
              <span class="text-tabular">{{ formatCurrency(item.posCashSales) }}</span>
            </template>

            <!-- Total Cash IN -->
            <template #[`item.totalCashIn`]="{ item }">
              <strong class="teal--text text--darken-2 text-tabular">+{{ formatCurrency(item.totalCashIn) }}</strong>
            </template>

            <!-- Total Cash OUT -->
            <template #[`item.totalCashOut`]="{ item }">
              <strong :class="item.totalCashOut > 0 ? 'red--text' : 'grey--text'" class="text-tabular">-{{ formatCurrency(item.totalCashOut) }}</strong>
            </template>

            <!-- Expected Cash In Drawer -->
            <template #[`item.expectedCashInDrawer`]="{ item }">
              <v-chip color="green lighten-5" text-color="green darken-4" small class="font-weight-bold text-tabular expected-cash-chip">
                {{ formatCurrency(item.expectedCashInDrawer) }} LAK
              </v-chip>
            </template>

            <!-- Actual Closing Cash -->
            <template #[`item.actualClosingCash`]="{ item }">
              <span v-if="item.actualClosingCash !== null" class="font-weight-bold text-tabular">
                {{ formatCurrency(item.actualClosingCash) }}
              </span>
              <span v-else class="grey--text caption">ຍັງບໍ່ປິດ</span>
            </template>

            <!-- Variance -->
            <template #[`item.variance`]="{ item }">
              <span
                v-if="item.variance !== null"
                :class="item.variance === 0 ? 'success--text' : (item.variance > 0 ? 'primary--text font-weight-bold' : 'error--text font-weight-bold')"
                class="text-tabular"
              >
                {{ item.variance > 0 ? '+' : '' }}{{ formatCurrency(item.variance) }}
              </span>
              <span v-else class="grey--text">-</span>
            </template>

            <!-- Non-Cash NFC -->
            <template #[`item.posNfcSales`]="{ item }">
              <span class="purple--text font-weight-medium text-tabular">{{ formatCurrency(item.posNfcSales) }}</span>
            </template>

            <!-- Actions -->
            <template #[`item.actions`]="{ item }">
              <div class="d-flex align-center justify-center">
                <v-tooltip bottom>
                  <template #[`activator`]="{ on, attrs }">
                    <v-btn
                      icon
                      color="teal darken-1"
                      small
                      v-bind="attrs"
                      v-on="on"
                      @click="openCashDropFromReport(item)"
                    >
                      <v-icon small>mdi-bank-transfer-out</v-icon>
                    </v-btn>
                  </template>
                  <span>ມອບເງິນສົດ (Cash Drop)</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template #[`activator`]="{ on, attrs }">
                    <v-btn
                      icon
                      color="primary"
                      small
                      v-bind="attrs"
                      v-on="on"
                      @click="openUserDrilldown(item)"
                    >
                      <v-icon small>mdi-format-list-bulleted</v-icon>
                    </v-btn>
                  </template>
                  <span>ລາຍການຍ່ອຍ (Drilldown)</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template #[`activator`]="{ on, attrs }">
                    <v-btn
                      icon
                      color="blue-grey"
                      small
                      v-bind="attrs"
                      v-on="on"
                      @click="printUserSlip(item)"
                    >
                      <v-icon small>mdi-receipt</v-icon>
                    </v-btn>
                  </template>
                  <span>ພິມ Slip ປິດກະເປົາ</span>
                </v-tooltip>
              </div>
            </template>

            <!-- Summary Table Footer -->
            <template #[`body.append`]>
              <tr class="font-weight-bold grand-total-row">
                <td colspan="2" class="text-center py-3">ຍອດລວມທັງໝົດ (Grand Total)</td>
                <td class="text-right text-tabular">{{ formatCurrency(cashPositionSummary.totalOpeningCash) }}</td>
                <td class="text-right success--text text-tabular">+{{ formatCurrency(cashPositionSummary.totalTopupIn) }}</td>
                <td class="text-right error--text text-tabular">-{{ formatCurrency(cashPositionSummary.totalWithdrawOut) }}</td>
                <td class="text-right text-tabular">{{ formatCurrency(cashPositionSummary.totalPosCashSales) }}</td>
                <td class="text-right teal--text text--darken-3 text-tabular">+{{ formatCurrency(cashPositionSummary.grandTotalCashIn) }}</td>
                <td class="text-right red--text text-tabular">-{{ formatCurrency(cashPositionSummary.grandTotalCashOut) }}</td>
                <td class="text-right font-weight-bold green--text text--darken-4 text-tabular grand-total-highlight">
                  {{ formatCurrency(cashPositionSummary.grandExpectedCashInDrawers) }} LAK
                </td>
                <td class="text-right text-tabular">{{ cashPositionSummary.grandActualClosingCash ? formatCurrency(cashPositionSummary.grandActualClosingCash) : '-' }}</td>
                <td class="text-right text-tabular">-</td>
                <td class="text-right purple--text text-tabular">{{ formatCurrency(cashPositionSummary.totalPosNfcSales) }}</td>
                <td></td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>

      <!-- TAB 2: DAILY PAYMENT COLLECTIONS -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6 rounded-xl">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <div class="subpage-icon-box mr-3 bg-info-light">
                <v-icon color="info">mdi-chart-timeline-variant</v-icon>
              </div>
              <div>
                <h2 class="text-subtitle-1 font-weight-bold mb-0">ຍອດເກັບເງິນປະຈຳວັນ (Daily Collection Summary)</h2>
                <span class="caption grey--text">ລວມຍອດຮັບຊຳລະແຕ່ລະ Cashier ແລະ ຮູບແບບການຊຳລະ</span>
              </div>
            </div>
            <v-btn icon color="primary" class="rounded-lg" @click="fetchDailyReport">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </div>

          <v-card outlined class="pa-3 mb-4 rounded-xl filter-toolbar-card">
            <v-row align="center" dense>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="reportDate"
                  type="date"
                  label="ເລືອກວັນທີ (Select Date)"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-calendar"
                  @change="fetchDailyReport"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <v-data-table
            :headers="dailyReportHeaders"
            :items="dailyCollections"
            :loading="loadingDailyReport"
            no-data-text="ບໍ່ມີຍອດເກັບເງິນໃນວັນທີນີ້"
            class="elevation-0 modern-report-table rounded-xl mb-4"
            dense
            hide-default-footer
          >
            <template #[`item.cashier`]="{ item }">
              <div class="d-flex align-center py-1">
                <v-avatar size="28" color="primary lighten-5" class="mr-2">
                  <v-icon x-small color="primary">mdi-account</v-icon>
                </v-avatar>
                <span class="font-weight-medium">{{ item.cashier }}</span>
              </div>
            </template>
            <template #[`item.paymentMethod`]="{ item }">
              <v-chip
                :color="item.paymentMethod === 'CASH' ? 'success' : (item.paymentMethod === 'NFC' ? 'purple' : 'info')"
                outlined
                small
                class="font-weight-bold"
              >
                {{ item.paymentMethod }}
              </v-chip>
            </template>
            <template #[`item.totalAmount`]="{ item }">
              <span class="font-weight-bold text-tabular">{{ formatCurrency(item.totalAmount) }} LAK</span>
            </template>
          </v-data-table>

          <!-- Grand Total Banner -->
          <v-card class="pa-4 rounded-xl total-summary-banner elevation-1" outlined>
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <v-icon color="success" size="32" class="mr-3">mdi-cash-check</v-icon>
                <div>
                  <div class="font-weight-bold text-subtitle-1">ຍອດເກັບລວມທັງໝົດປະຈຳວັນ:</div>
                  <div class="caption grey--text">Total Daily Collections Across All Channels</div>
                </div>
              </div>
              <strong class="text-h5 success--text text--darken-3 font-weight-bold text-tabular">
                {{ formatCurrency(dailyReportTotal) }} LAK
              </strong>
            </div>
          </v-card>
        </v-card>
      </v-tab-item>

      <!-- TAB 3: OUTSTANDING BALANCES -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6 rounded-xl">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <div class="subpage-icon-box mr-3 bg-error-light">
                <v-icon color="error">mdi-account-alert-outline</v-icon>
              </div>
              <div>
                <h2 class="text-subtitle-1 font-weight-bold text-error mb-0">ຄ້າງຊຳລະສະສົມ (Outstanding Balances)</h2>
                <span class="caption grey--text">ກວດສອບນັກຮຽນ ແລະ ໃບບິນທີ່ຍັງບໍ່ທັນຊຳລະຄົບ</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-btn color="error" outlined small class="mr-2 rounded-lg font-weight-bold" @click="printOutstandingReport">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="error" class="rounded-lg" @click="fetchOutstandingReport">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <v-card outlined class="pa-3 mb-4 rounded-xl filter-toolbar-card">
            <v-row dense align="center">
              <v-col cols="12" sm="4">
                <v-select
                  v-model="outstandingFilters.classId"
                  :items="classes"
                  item-text="name"
                  item-value="id"
                  label="ຊັ້ນຮຽນ (Class)"
                  outlined
                  dense
                  hide-details="auto"
                  clearable
                  prepend-inner-icon="mdi-google-classroom"
                  @change="fetchOutstandingReport"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  v-model="outstandingFilters.feeItemId"
                  :items="feeItems"
                  item-text="name"
                  item-value="id"
                  label="ຄ່າທໍານຽມ (Fee Item)"
                  outlined
                  dense
                  hide-details="auto"
                  clearable
                  prepend-inner-icon="mdi-tag-text-outline"
                  @change="fetchOutstandingReport"
                ></v-select>
              </v-col>
            </v-row>
          </v-card>

          <v-data-table
            :headers="outstandingReportHeaders"
            :items="outstandingInvoices"
            :loading="loadingOutstandingReport"
            no-data-text="ບໍ່ມີຍອດຄ້າງຊຳລະ"
            class="elevation-0 modern-report-table rounded-xl"
            :items-per-page="10"
          >
            <template #[`item.student`]="{ item }">
              <div v-if="item.student" class="d-flex align-center py-1">
                <v-avatar size="30" color="primary lighten-5" class="mr-2">
                  <v-icon small color="primary">mdi-school</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-medium">{{ item.student.name || item.studentName }}</div>
                  <v-chip x-small color="primary" outlined class="mt-1">ID: {{ item.student.studentId || item.studentId }}</v-chip>
                </div>
              </div>
            </template>
            <template #[`item.invoiceNumber`]="{ item }">
              <div class="font-weight-medium">{{ item.invoiceNumber }}</div>
              <div v-if="item.feeItemDetail" class="caption teal--text font-weight-bold">{{ item.feeItemDetail }}</div>
            </template>
            <template #[`item.parent`]="{ item }">
              <div v-if="item.student && item.student.parentName" class="caption">
                <div class="font-weight-medium">{{ item.student.parentName }}</div>
                <div class="d-flex align-center text-info font-weight-bold mt-1">
                  <v-icon x-small color="info" class="mr-1">mdi-phone</v-icon>
                  {{ item.student.parentPhone }}
                </div>
              </div>
              <div v-else-if="item.parentName" class="caption">
                <div class="font-weight-medium">{{ item.parentName }}</div>
                <div class="d-flex align-center text-info font-weight-bold mt-1">
                  <v-icon x-small color="info" class="mr-1">mdi-phone</v-icon>
                  {{ item.parentPhone }}
                </div>
              </div>
              <span v-else class="grey--text">-</span>
            </template>
            <template #[`item.balanceAmount`]="{ item }">
              <span class="text-error font-weight-bold text-tabular">{{ formatCurrency(item.balanceAmount) }} LAK</span>
            </template>
            <template #[`item.dueDate`]="{ item }">
              <v-chip
                v-if="isOverdue(item.dueDate)"
                color="error lighten-5"
                text-color="error darken-2"
                small
                class="font-weight-bold"
              >
                <v-icon x-small color="error" class="mr-1">mdi-alert-circle</v-icon>
                {{ formatDate(item.dueDate) }} (ກາຍກຳນົດ)
              </v-chip>
              <span v-else class="caption text-tabular">{{ formatDate(item.dueDate) }}</span>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>

      <!-- TAB 4: CLASS & ROOM SUMMARY -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6 rounded-xl">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <div class="subpage-icon-box mr-3 bg-purple-light">
                <v-icon color="deep-purple">mdi-google-classroom</v-icon>
              </div>
              <div>
                <h2 class="text-subtitle-1 font-weight-bold mb-0">ລາຍງານຍອດເກັບເງິນຕາມຊັ້ນຮຽນ ແລະ ຫ້ອງຮຽນ</h2>
                <span class="caption grey--text">Class & Room Invoice Collection Summary</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-btn color="primary" outlined small class="mr-2 rounded-lg font-weight-bold" @click="printClassRoomSummary">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="primary" class="rounded-lg" @click="fetchClassRoomSummary">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <v-divider class="mb-4"></v-divider>

          <v-data-table
            :headers="classRoomSummaryHeaders"
            :items="classRoomSummary"
            :loading="loadingClassRoomSummary"
            no-data-text="ບໍ່ມີຂໍ້ມູນຍອດເກັບເງິນຕາມຊັ້ນ ແລະ ຫ້ອງ"
            class="elevation-0 modern-report-table rounded-xl"
            dense
          >
            <template #[`item.className`]="{ item }">
              <span class="font-weight-bold">{{ item.className }}</span>
            </template>
            <template #[`item.roomName`]="{ item }">
              <v-chip small color="info lighten-5" text-color="info darken-3" class="font-weight-medium">
                {{ item.roomName }}
              </v-chip>
            </template>
            <template #[`item.totalAmount`]="{ item }">
              <span class="text-tabular">{{ formatCurrency(item.totalAmount) }} LAK</span>
            </template>
            <template #[`item.paidAmount`]="{ item }">
              <span class="text-success font-weight-bold text-tabular">{{ formatCurrency(item.paidAmount) }} LAK</span>
            </template>
            <template #[`item.balanceAmount`]="{ item }">
              <span class="text-error font-weight-bold text-tabular">{{ formatCurrency(item.balanceAmount) }} LAK</span>
            </template>
            <template #[`item.completion`]="{ item }">
              <div class="d-flex align-center">
                <v-progress-linear
                  :value="getCompletionPercentage(item)"
                  color="success"
                  height="16"
                  rounded
                  class="progress-gradient"
                >
                  <template #default="{ value }">
                    <strong class="white--text" style="font-size: 10px;">{{ Math.round(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>

      <!-- TAB 5: FEE ITEM SUMMARY -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6 rounded-xl">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <div class="subpage-icon-box mr-3 bg-teal-light">
                <v-icon color="teal">mdi-tag-text-outline</v-icon>
              </div>
              <div>
                <h2 class="text-subtitle-1 font-weight-bold mb-0">ລາຍງານຍອດເກັບເງິນຕາມປະເພດຄ່າທໍານຽມ</h2>
                <span class="caption grey--text">Fee Item Collection Summary</span>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-btn color="primary" outlined small class="mr-2 rounded-lg font-weight-bold" @click="printFeeItemSummary">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="primary" class="rounded-lg" @click="fetchFeeItemSummary">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <v-divider class="mb-4"></v-divider>

          <v-data-table
            :headers="feeItemSummaryHeaders"
            :items="feeItemSummary"
            :loading="loadingFeeItemSummary"
            no-data-text="ບໍ່ມີຂໍ້ມູນຍອດເກັບເງິນຕາມປະເພດຄ່າທໍານຽມ"
            class="elevation-0 modern-report-table rounded-xl"
            dense
          >
            <template #[`item.feeItemName`]="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="teal" class="mr-2">mdi-tag</v-icon>
                <span class="font-weight-bold">{{ item.feeItemName }}</span>
              </div>
            </template>
            <template #[`item.totalBilled`]="{ item }">
              <span class="text-tabular">{{ formatCurrency(item.totalBilled) }} LAK</span>
            </template>
            <template #[`item.totalPaid`]="{ item }">
              <span class="text-success font-weight-bold text-tabular">{{ formatCurrency(item.totalPaid) }} LAK</span>
            </template>
            <template #[`item.totalPending`]="{ item }">
              <span class="text-error font-weight-bold text-tabular">{{ formatCurrency(item.totalPending) }} LAK</span>
            </template>
            <template #[`item.completion`]="{ item }">
              <div class="d-flex align-center">
                <v-progress-linear
                  :value="getFeeItemCompletionPercentage(item)"
                  color="teal"
                  height="16"
                  rounded
                  class="progress-gradient"
                >
                  <template #default="{ value }">
                    <strong class="white--text" style="font-size: 10px;">{{ Math.round(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <!-- TRANSACTION DRILLDOWN MODAL -->
    <v-dialog v-model="drilldownDialog" max-width="880px" scrollable>
      <v-card v-if="selectedUserDrilldown" class="rounded-xl overflow-hidden">
        <v-card-title class="dialog-header-primary white--text font-weight-bold d-flex justify-space-between align-center py-3">
          <div class="d-flex align-center">
            <v-avatar size="32" color="white" class="mr-2">
              <v-icon color="primary" small>mdi-account-details</v-icon>
            </v-avatar>
            <span>ລາຍການເຄື່ອນໄຫວລະອຽດ: {{ selectedUserDrilldown.userName }} ({{ selectedUserDrilldown.userCode }})</span>
          </div>
          <v-btn icon dark small @click="drilldownDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <!-- Summary Metric Cards in Dialog -->
          <v-row dense class="mb-3">
            <v-col cols="4">
              <v-card class="pa-3 rounded-lg text-center bg-slate-light" outlined>
                <div class="caption grey--text text--darken-1 mb-1">ເງິນເປີດກະເປົາ:</div>
                <div class="font-weight-bold text-subtitle-1 text-tabular">{{ formatCurrency(selectedUserDrilldown.openingCash) }} LAK</div>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="pa-3 rounded-lg text-center bg-emerald-light" outlined>
                <div class="caption success--text text--darken-2 mb-1">ລວມຮັບເຂົ້າ (Cash IN):</div>
                <div class="font-weight-bold success--text text-subtitle-1 text-tabular">+{{ formatCurrency(selectedUserDrilldown.totalCashIn) }} LAK</div>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="pa-3 rounded-lg text-center bg-teal-light" outlined>
                <div class="caption teal--text text--darken-2 mb-1">ເງິນສົດຄວນມີໃນລີ້ນຊັກ:</div>
                <div class="font-weight-bold teal--text text--darken-3 text-subtitle-1 text-tabular">{{ formatCurrency(selectedUserDrilldown.expectedCashInDrawer) }} LAK</div>
              </v-card>
            </v-col>
          </v-row>

          <v-tabs v-model="drilldownTab" color="primary" dense class="mb-2">
            <v-tab class="font-weight-bold">
              <v-badge :content="selectedUserDrilldown.transactions.topups.length" :value="selectedUserDrilldown.transactions.topups.length" color="success" inline>
                ຕື່ມເງິນບັດ (Top-up IN)
              </v-badge>
            </v-tab>
            <v-tab class="font-weight-bold">
              <v-badge :content="selectedUserDrilldown.transactions.withdrawals.length" :value="selectedUserDrilldown.transactions.withdrawals.length" color="error" inline>
                ຖອນເງິນບັດ (Withdraw OUT)
              </v-badge>
            </v-tab>
            <v-tab class="font-weight-bold">
              <v-badge :content="selectedUserDrilldown.transactions.posSales.length" :value="selectedUserDrilldown.transactions.posSales.length" color="info" inline>
                POS ຂາຍສິນຄ້າ
              </v-badge>
            </v-tab>
            <v-tab class="font-weight-bold">
              <v-badge :content="selectedUserDrilldown.transactions.feePayments.length" :value="selectedUserDrilldown.transactions.feePayments.length" color="teal" inline>
                ຄ່າຮຽນ (Fee Payments)
              </v-badge>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="drilldownTab" class="mt-2">
            <!-- 1. Topups List -->
            <v-tab-item>
              <v-simple-table dense class="dialog-table">
                <thead>
                  <tr>
                    <th>ເວລາ</th>
                    <th>ລະຫັດນັກຮຽນ</th>
                    <th>ຊື່ນັກຮຽນ / ບັນຊີ</th>
                    <th>ຄຳອະທິບາຍ</th>
                    <th class="text-right">ຈຳນວນເງິນ (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="t in selectedUserDrilldown.transactions.topups" :key="t.id">
                    <td class="caption">{{ formatDateTime(t.createdAt) }}</td>
                    <td><v-chip x-small color="primary" outlined>{{ t.studentCode || '-' }}</v-chip></td>
                    <td class="font-weight-medium">{{ t.studentName }}</td>
                    <td class="caption grey--text">{{ t.description }}</td>
                    <td class="text-right font-weight-bold success--text text-tabular">+{{ formatCurrency(t.amount) }}</td>
                  </tr>
                  <tr v-if="selectedUserDrilldown.transactions.topups.length === 0">
                    <td colspan="5" class="text-center py-4 grey--text">ບໍ່ມີລາຍການຕື່ມເງິນ</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>

            <!-- 2. Withdrawals List -->
            <v-tab-item>
              <v-simple-table dense class="dialog-table">
                <thead>
                  <tr>
                    <th>ເວລາ</th>
                    <th>ລະຫັດນັກຮຽນ</th>
                    <th>ຊື່ນັກຮຽນ / ບັນຊີ</th>
                    <th>ຄຳອະທິບາຍ</th>
                    <th class="text-right">ຈຳນວນເງິນ (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="w in selectedUserDrilldown.transactions.withdrawals" :key="w.id">
                    <td class="caption">{{ formatDateTime(w.createdAt) }}</td>
                    <td><v-chip x-small color="error" outlined>{{ w.studentCode || '-' }}</v-chip></td>
                    <td class="font-weight-medium">{{ w.studentName }}</td>
                    <td class="caption grey--text">{{ w.description }}</td>
                    <td class="text-right font-weight-bold error--text text-tabular">-{{ formatCurrency(w.amount) }}</td>
                  </tr>
                  <tr v-if="selectedUserDrilldown.transactions.withdrawals.length === 0">
                    <td colspan="5" class="text-center py-4 grey--text">ບໍ່ມີລາຍການຖອນເງິນ</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>

            <!-- 3. POS Sales List -->
            <v-tab-item>
              <v-simple-table dense class="dialog-table">
                <thead>
                  <tr>
                    <th>ເວລາ</th>
                    <th>ເລກບິນ (Ref No)</th>
                    <th>ຮູບແບບການຊຳລະ</th>
                    <th class="text-right">ຍອດຂາຍ (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="s in selectedUserDrilldown.transactions.posSales" :key="s.id">
                    <td class="caption">{{ formatDateTime(s.createdAt) }}</td>
                    <td>{{ s.referenceNo || '#' + s.id }}</td>
                    <td>
                      <v-chip x-small :color="s.paymentCode === 'CASH' ? 'success' : (s.paymentCode === 'NFC' ? 'purple' : 'info')" text-color="white">
                        {{ s.paymentName || s.paymentCode }}
                      </v-chip>
                    </td>
                    <td class="text-right font-weight-bold text-tabular">{{ formatCurrency(s.total) }}</td>
                  </tr>
                  <tr v-if="selectedUserDrilldown.transactions.posSales.length === 0">
                    <td colspan="4" class="text-center py-4 grey--text">ບໍ່ມີລາຍການຂາຍ POS</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>

            <!-- 4. Fee Payments List -->
            <v-tab-item>
              <v-simple-table dense class="dialog-table">
                <thead>
                  <tr>
                    <th>ເວລາ</th>
                    <th>ເລກໃບບິນ (Ref No)</th>
                    <th>ຮູບແບບການຊຳລະ</th>
                    <th class="text-right">ຈຳນວນເງິນ (LAK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="f in selectedUserDrilldown.transactions.feePayments" :key="f.id">
                    <td class="caption">{{ formatDateTime(f.createdAt) }}</td>
                    <td>{{ f.referenceNo || '#' + f.id }}</td>
                    <td><v-chip x-small color="info" outlined>{{ f.paymentName || f.paymentCode }}</v-chip></td>
                    <td class="text-right font-weight-bold teal--text text-tabular">+{{ formatCurrency(f.amount) }}</td>
                  </tr>
                  <tr v-if="selectedUserDrilldown.transactions.feePayments.length === 0">
                    <td colspan="4" class="text-center py-4 grey--text">ບໍ່ມີລາຍການຊຳລະຄ່າຮຽນ</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>

        <v-card-actions class="pa-4 grey lighten-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" outlined small class="mr-2 rounded-lg font-weight-bold" @click="printUserSlip(selectedUserDrilldown)">
            <v-icon left small>mdi-printer</v-icon>
            ພິມ Slip
          </v-btn>
          <v-btn color="grey darken-1" text small class="rounded-lg" @click="drilldownDialog = false">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- CASH DROP / REMITTANCE TO CENTRAL ACCOUNT MODAL -->
    <v-dialog v-model="cashDropDialog" max-width="580px" persistent>
      <v-card class="rounded-xl overflow-hidden">
        <v-card-title class="dialog-header-emerald white--text font-weight-bold py-3">
          <v-icon left color="white">mdi-bank-transfer-out</v-icon>
          ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop to Central Vault)
        </v-card-title>
        <v-card-text class="pt-4">
          <!-- Target Cashier Info -->
          <v-card v-if="selectedUserForCashDrop" class="pa-3 mb-4 rounded-lg bg-teal-light" outlined>
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <v-avatar size="32" color="teal lighten-4" class="mr-2">
                  <v-icon small color="teal darken-2">mdi-account</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-subtitle-2 teal--text text--darken-4">{{ selectedUserForCashDrop.userName }}</div>
                  <div class="caption grey--text">{{ selectedUserForCashDrop.userCode }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="caption grey--text">ເງິນສົດຄວນມີໃນລີ້ນຊັກ</div>
                <div class="font-weight-bold teal--text text--darken-3 text-subtitle-2 text-tabular">{{ formatCurrency(selectedUserForCashDrop.expectedCashInDrawer) }} LAK</div>
              </div>
            </div>
          </v-card>

          <v-form ref="cashDropForm">
            <!-- Source Till Account -->
            <v-select
              v-model="cashDropFields.fromAccountId"
              :items="availableTillAccounts"
              item-text="displayName"
              item-value="id"
              label="ບັນຊີຕົ້ນທາງ / ລີ້ນຊັກ (From Till Account) *"
              outlined
              dense
              class="mb-2"
              prepend-inner-icon="mdi-cash-register"
              :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີຕົ້ນທາງ']"
            ></v-select>

            <!-- Destination Central Account -->
            <v-select
              v-model="cashDropFields.toAccountId"
              :items="availableCentralAccounts"
              item-text="displayName"
              item-value="id"
              label="ບັນຊີປາຍທາງ / ຕູ້ເຊບກາງ (To Central Account) *"
              outlined
              dense
              class="mb-2"
              prepend-inner-icon="mdi-safe"
              :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີປາຍທາງ']"
            ></v-select>

            <!-- Amount & Quick Presets -->
            <div class="mb-1 d-flex justify-space-between align-center">
              <span class="caption font-weight-bold grey--text text--darken-2">ຈຳນວນເງິນສົດທີ່ມອບ (Amount) *</span>
              <div class="d-flex gap-1">
                <v-btn x-small color="success" outlined class="mr-1 rounded-pill font-weight-bold" @click="fillMaxCashDrop">
                  ມອບໝົດ
                </v-btn>
                <v-btn x-small color="primary" outlined class="rounded-pill font-weight-bold" @click="fillNetSalesDrop">
                  ມອບສະເພາະຍອດຂາຍ
                </v-btn>
              </div>
            </div>
            <v-text-field
              :value="formatInputAmount(cashDropFields.amount)"
              outlined
              dense
              suffix="LAK"
              class="mb-2"
              prepend-inner-icon="mdi-currency-usd"
              :rules="[v => cashDropFields.amount > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0']"
              @input="onAmountInput($event, cashDropFields, 'amount')"
            ></v-text-field>

            <!-- Receiver Name -->
            <v-text-field
              v-model="cashDropFields.receiverName"
              label="ຊື່ຜູ້ຮັບມອບ / ຫົວໜ້າການເງິນ (Receiver Name) *"
              outlined
              dense
              class="mb-2"
              prepend-inner-icon="mdi-account-check"
              :rules="[v => !!v || 'ກະລຸນາລະບຸຊື່ຜູ້ຮັບມອບ']"
            ></v-text-field>

            <!-- Remarks -->
            <v-textarea
              v-model="cashDropFields.description"
              label="ໝາຍເຫດ (Remarks)"
              outlined
              dense
              rows="2"
              hide-details="auto"
              prepend-inner-icon="mdi-note-text-outline"
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-4 grey lighten-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text class="rounded-lg" @click="cashDropDialog = false">ຍົກເລີກ</v-btn>
          <v-btn
            color="success darken-1"
            class="font-weight-bold rounded-lg px-4"
            depressed
            :loading="savingCashDrop"
            @click="submitCashDrop"
          >
            <v-icon left small>mdi-check</v-icon>
            ຢືນຢັນການມອບເງິນສົດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {
  generateClassRoomSummaryReportHTML,
  generateFeeItemSummaryReportHTML,
  generateOutstandingBalancesReportHTML,
  generateCashPositionReportHTML,
  generateUserShiftSummarySlipHTML,
  generateCashDropVoucherHTML
} from '~/common/printTemplates';

export default {
  name: 'SchoolReportsPage',
  middleware: 'auths',
  data() {
    const today = new Date().toISOString().split('T')[0];
    return {
      activeTab: 0,
      activeShift: null,

      // Cash Position State
      cashPositionFilters: {
        startDate: today,
        endDate: today,
        userId: null
      },
      cashPositionSummary: {
        totalOpeningCash: 0,
        totalTopupIn: 0,
        totalWithdrawOut: 0,
        totalPosCashSales: 0,
        totalPosNfcSales: 0,
        totalPosTransferSales: 0,
        totalFeeCash: 0,
        totalFeeTransfer: 0,
        grandTotalCashIn: 0,
        grandTotalCashOut: 0,
        grandNetCashMovement: 0,
        grandExpectedCashInDrawers: 0,
        grandActualClosingCash: 0,
        activeShiftCount: 0,
        activeUserCount: 0
      },
      cashPositionUsers: [],
      loadingCashPosition: false,

      // Cash Drop State
      cashDropDialog: false,
      savingCashDrop: false,
      selectedUserForCashDrop: null,
      bankAccounts: [],
      cashDropFields: {
        fromAccountId: 125,
        toAccountId: 124,
        amount: 0,
        receiverName: 'ຫົວໜ້າການເງິນ / ຜູ້ອຳນວຍການ',
        description: 'ມອບເງິນສົດປິດກະເປົາປະຈຳວັນ ເຂົ້າບັນຊີກາງ (End-of-day Cash Drop)'
      },

      // Drilldown dialog
      drilldownDialog: false,
      drilldownTab: 0,
      selectedUserDrilldown: null,

      // Other reports
      reportDate: today,
      dailyReportTotal: 0,
      dailyCollections: [],
      loadingDailyReport: false,

      outstandingFilters: {
        classId: null,
        feeItemId: null
      },
      classes: [],
      feeItems: [],
      outstandingInvoices: [],
      loadingOutstandingReport: false,

      classRoomSummary: [],
      loadingClassRoomSummary: false,

      feeItemSummary: [],
      loadingFeeItemSummary: false,

      // Table Headers
      cashPositionHeaders: [
        { text: 'Cashier / ຜູ້ໃຊ້', value: 'userName', width: '160px' },
        { text: 'Shift', value: 'shift', align: 'center', width: '90px' },
        { text: 'ເງິນເລີ່ມຕົ້ນ (Float)', value: 'openingCash', align: 'right' },
        { text: 'ຕື່ມເງິນ (+IN)', value: 'topupIn', align: 'right' },
        { text: 'ຖອນເງິນ (-OUT)', value: 'withdrawOut', align: 'right' },
        { text: 'POS ເງິນສົດ (+)', value: 'posCashSales', align: 'right' },
        { text: 'ລວມຮັບເຂົ້າ (Cash IN)', value: 'totalCashIn', align: 'right' },
        { text: 'ລວມຈ່າຍ (Cash OUT)', value: 'totalCashOut', align: 'right' },
        { text: 'ເງິນສົດຄວນມີໃນລີ້ນຊັກ', value: 'expectedCashInDrawer', align: 'right' },
        { text: 'ປິດຕົວຈິງ', value: 'actualClosingCash', align: 'right' },
        { text: 'ຜົນຕ່າງ', value: 'variance', align: 'right' },
        { text: 'ຂາຍບັດ NFC', value: 'posNfcSales', align: 'right' },
        { text: 'ຈັດການ', value: 'actions', align: 'center', sortable: false, width: '110px' }
      ],
      dailyReportHeaders: [
        { text: 'ແຄັດເຊຍ (Cashier)', value: 'cashier' },
        { text: 'ຮູບແບບການຊຳລະ', value: 'paymentMethod', align: 'center' },
        { text: 'ຍອດເກັບລວມ', value: 'totalAmount', align: 'right' }
      ],
      outstandingReportHeaders: [
        { text: 'ນັກຮຽນ (Student)', value: 'student' },
        { text: 'ເລກໃບບິນ', value: 'invoiceNumber' },
        { text: 'ຜູ້ປົກຄອງ (Parent Contact)', value: 'parent' },
        { text: 'ຍອດຄ້າງຊຳລະ', value: 'balanceAmount', align: 'right' },
        { text: 'ວັນຄົບກຳນົດ', value: 'dueDate', align: 'center' }
      ],
      classRoomSummaryHeaders: [
        { text: 'ຊັ້ນຮຽນ (Class)', value: 'className' },
        { text: 'ຫ້ອງຮຽນ (Room)', value: 'roomName' },
        { text: 'ຈຳນວນໃບບິນ (Invoices)', value: 'totalInvoices', align: 'center' },
        { text: 'ຊຳລະແລ້ວ (Paid Invoices)', value: 'paidCount', align: 'center' },
        { text: 'ຍັງຄ້າງຊຳລະ (Pending)', value: 'pendingCount', align: 'center' },
        { text: 'ຍອດລວມທັງໝົດ (Total Bill)', value: 'totalAmount', align: 'right' },
        { text: 'ຊຳລະແລ້ວ (Total Paid)', value: 'paidAmount', align: 'right' },
        { text: 'ຍອດຄ້າງຊຳລະ (Total Pending)', value: 'balanceAmount', align: 'right' },
        { text: 'ເປີເຊັນຊຳລະ (% Paid)', value: 'completion', align: 'center', width: '150px' }
      ],
      feeItemSummaryHeaders: [
        { text: 'ປະເພດຄ່າທໍານຽມ (Fee Item)', value: 'feeItemName' },
        { text: 'ຈຳນວນລາຍການ (Count)', value: 'lineCount', align: 'center' },
        { text: 'ຍອດລວມທັງໝົດ (Total Billed)', value: 'totalBilled', align: 'right' },
        { text: 'ຊຳລະແລ້ວ (Total Paid)', value: 'totalPaid', align: 'right' },
        { text: 'ຍອດຄ້າງຊຳລະ (Total Pending)', value: 'totalPending', align: 'right' },
        { text: 'ເປີເຊັນຊຳລະ (% Paid)', value: 'completion', align: 'center', width: '150px' }
      ]
    }
  },
  computed: {
    userOptions() {
      const opts = [{ id: null, name: 'ທຸກຄົນ (All Users)' }];
      this.cashPositionUsers.forEach(u => {
        opts.push({ id: u.userId, name: `${u.userName} (${u.userCode})` });
      });
      return opts;
    },
    filteredUsers() {
      let list = this.cashPositionUsers;
      if (this.cashPositionFilters.userId) {
        list = list.filter(u => u.userId === this.cashPositionFilters.userId);
      } else {
        // By default show active users
        list = list.filter(u => u.openingCash > 0 || u.totalCashIn > 0 || u.totalCashOut > 0 || u.posNfcSales > 0 || u.shift);
      }
      return list;
    },
    availableTillAccounts() {
      return this.bankAccounts
        .filter(a => a.studentId === null)
        .map(a => ({
          id: a.id,
          displayName: `${a.accountNumber} - ${a.accountName} (ຍອດ: ${this.formatCurrency(a.balance)} LAK)`
        }));
    },
    availableCentralAccounts() {
      return this.bankAccounts
        .filter(a => a.studentId === null && a.id !== this.cashDropFields.fromAccountId)
        .map(a => ({
          id: a.id,
          displayName: `${a.accountNumber} - ${a.accountName} (ຍອດ: ${this.formatCurrency(a.balance)} LAK)`
        }));
    }
  },
  mounted() {
    this.checkActiveShift();
    this.loadBankAccounts();
    this.fetchCashPositionReport();
    this.loadClasses();
    this.loadFeeItems();
    this.fetchDailyReport();
    this.fetchOutstandingReport();
    this.fetchClassRoomSummary();
    this.fetchFeeItemSummary();
  },
  methods: {
    formatCurrency(value) {
      if (!value && value !== 0) return '0';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    },
    formatInputAmount(value) {
      if (!value && value !== 0) return '';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    },
    onAmountInput(value, formFields, fieldName) {
      const digits = String(value || '').replace(/\D/g, '');
      const number = digits ? parseInt(digits, 10) : 0;
      formFields[fieldName] = number;
    },
    formatDate(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleDateString('en-GB');
    },
    formatDateTime(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleString('en-GB');
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    },

    async loadBankAccounts() {
      try {
        const res = await this.$axios.get('/api/bank_account/find');
        this.bankAccounts = res.data || [];
        const till = this.bankAccounts.find(a => a.id === 125 || a.accountName.toLowerCase().includes('2') || a.accountType === 'Merchant');
        const central = this.bankAccounts.find(a => a.id === 124 || a.accountName.toLowerCase().includes('cash') || a.id !== till?.id);
        if (till) this.cashDropFields.fromAccountId = till.id;
        if (central) this.cashDropFields.toAccountId = central.id;
      } catch (err) {
        console.error('Error loading bank accounts:', err);
      }
    },

    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
      } catch (err) {
        this.activeShift = null;
      }
    },

    // 1. Fetch Cash Position Report
    async fetchCashPositionReport() {
      this.loadingCashPosition = true;
      try {
        const res = await this.$axios.get('/api/school/reports/cash-position', {
          params: {
            startDate: this.cashPositionFilters.startDate,
            endDate: this.cashPositionFilters.endDate,
            userId: this.cashPositionFilters.userId
          }
        });
        this.cashPositionSummary = res.data.summary || this.cashPositionSummary;
        this.cashPositionUsers = res.data.users || [];
      } catch (err) {
        console.error('Error fetching cash position report:', err);
        this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍງານຍອດເງິນສົດ Cash Position ໄດ້');
      } finally {
        this.loadingCashPosition = false;
      }
    },

    openUserDrilldown(user) {
      this.selectedUserDrilldown = user;
      this.drilldownTab = 0;
      this.drilldownDialog = true;
    },

    openCashDropFromReport(user) {
      this.selectedUserForCashDrop = user || this.filteredUsers[0] || null;
      if (this.selectedUserForCashDrop) {
        this.cashDropFields.amount = this.selectedUserForCashDrop.expectedCashInDrawer || 0;
        this.cashDropFields.description = `ມອບເງິນສົດປິດກະເປົາ ${this.selectedUserForCashDrop.userName} (${this.selectedUserForCashDrop.userCode}) ເຂົ້າບັນຊີກາງ`;
      } else {
        this.cashDropFields.amount = this.cashPositionSummary.grandExpectedCashInDrawers || 0;
      }
      this.cashDropDialog = true;
    },

    fillMaxCashDrop() {
      if (this.selectedUserForCashDrop) {
        this.cashDropFields.amount = this.selectedUserForCashDrop.expectedCashInDrawer;
      } else {
        this.cashDropFields.amount = this.cashPositionSummary.grandExpectedCashInDrawers;
      }
    },

    fillNetSalesDrop() {
      if (this.selectedUserForCashDrop) {
        const net = Math.max(0, this.selectedUserForCashDrop.expectedCashInDrawer - this.selectedUserForCashDrop.openingCash);
        this.cashDropFields.amount = net;
      } else {
        const net = Math.max(0, this.cashPositionSummary.grandExpectedCashInDrawers - this.cashPositionSummary.totalOpeningCash);
        this.cashDropFields.amount = net;
      }
    },

    async submitCashDrop() {
      if (!this.$refs.cashDropForm.validate()) return;
      this.savingCashDrop = true;
      try {
        const uid = this.selectedUserForCashDrop ? this.selectedUserForCashDrop.userId : (this.activeShift?.userId || 1);
        const res = await this.$axios.post('/api/transactions/transfer', {
          fromAccountId: this.cashDropFields.fromAccountId,
          toAccountId: this.cashDropFields.toAccountId,
          amount: this.cashDropFields.amount,
          userId: uid,
          receiverName: this.cashDropFields.receiverName,
          description: this.cashDropFields.description
        });

        this.$toast.success('ມອບເງິນສົດເຂົ້າບັນຊີກາງສຳເລັດແລ້ວ!');
        this.cashDropDialog = false;
        this.loadBankAccounts();
        this.fetchCashPositionReport();

        // Print Remittance Voucher
        const transferPayload = {
          ...res.data.transfer,
          cashierName: this.selectedUserForCashDrop ? this.selectedUserForCashDrop.userName : 'DC Auto',
          description: this.cashDropFields.description
        };
        this.printCashDropVoucher(transferPayload);

      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ການມອບເງິນສົດບໍ່ສຳເລັດ');
      } finally {
        this.savingCashDrop = false;
      }
    },

    printCashDropVoucher(transferData) {
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateCashDropVoucherHTML(transferData, companyData);
        
        const printWindow = window.open('', '_blank', 'width=800,height=700');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('Failed to generate cash drop voucher print view');
      }
    },

    printCashPositionReport() {
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const reportData = {
          startDate: this.cashPositionFilters.startDate,
          endDate: this.cashPositionFilters.endDate,
          summary: this.cashPositionSummary,
          users: this.filteredUsers
        };
        const htmlContent = generateCashPositionReportHTML(reportData, companyData, this.cashPositionFilters);

        const printWindow = window.open('', '_blank', 'width=1024,height=768');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('Failed to generate cash position report print view');
      }
    },

    printUserSlip(user) {
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateUserShiftSummarySlipHTML(user, companyData);

        const printWindow = window.open('', '_blank', 'width=400,height=600');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('Failed to generate user slip print view');
      }
    },

    exportToCSV() {
      if (!this.filteredUsers || this.filteredUsers.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນທີ່ຈະ Export');
        return;
      }

      const rows = [
        ['Cashier Name', 'User Code', 'Shift Status', 'Opening Float (LAK)', 'Top-up In (LAK)', 'Top-up Count', 'Withdraw Out (LAK)', 'Withdraw Count', 'POS Cash Sales (LAK)', 'Total Cash In (LAK)', 'Total Cash Out (LAK)', 'Expected Cash in Drawer (LAK)', 'Actual Closing Cash (LAK)', 'Variance (LAK)', 'POS NFC Sales (LAK)']
      ];

      this.filteredUsers.forEach(u => {
        rows.push([
          `"${u.userName}"`,
          `"${u.userCode}"`,
          `"${u.shift ? u.shift.status : 'NONE'}"`,
          u.openingCash,
          u.topupIn,
          u.topupCount,
          u.withdrawOut,
          u.withdrawCount,
          u.posCashSales,
          u.totalCashIn,
          u.totalCashOut,
          u.expectedCashInDrawer,
          u.actualClosingCash !== null ? u.actualClosingCash : '',
          u.variance !== null ? u.variance : '',
          u.posNfcSales
        ]);
      });

      // Total Row
      rows.push([
        '"GRAND TOTAL"',
        '""',
        '""',
        this.cashPositionSummary.totalOpeningCash,
        this.cashPositionSummary.totalTopupIn,
        '',
        this.cashPositionSummary.totalWithdrawOut,
        '',
        this.cashPositionSummary.totalPosCashSales,
        this.cashPositionSummary.grandTotalCashIn,
        this.cashPositionSummary.grandTotalCashOut,
        this.cashPositionSummary.grandExpectedCashInDrawers,
        this.cashPositionSummary.grandActualClosingCash || '',
        '',
        this.cashPositionSummary.totalPosNfcSales
      ]);

      const csvContent = '\uFEFF' + rows.map(e => e.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `Cash_Position_Report_${this.cashPositionFilters.startDate}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.$toast.success('Export CSV ສຳເລັດແລ້ວ');
    },

    // Existing Report Loaders
    async loadClasses() {
      try {
        const res = await this.$axios.get('/api/school/classes');
        this.classes = (res.data || []).filter(c => c.isActive !== false);
      } catch (err) {
        console.error('Error fetching classes:', err);
      }
    },
    async loadFeeItems() {
      try {
        const res = await this.$axios.get('/api/school/fee-items');
        this.feeItems = (res.data || []).filter(f => f.isActive !== false);
      } catch (err) {
        console.error('Error fetching fee items:', err);
      }
    },
    async fetchDailyReport() {
      this.loadingDailyReport = true;
      try {
        const res = await this.$axios.get('/api/school/reports/daily-collections', {
          params: { date: this.reportDate }
        });
        const list = res.data?.collections || [];
        this.dailyCollections = list;
        this.dailyReportTotal = list.reduce((sum, item) => sum + Number(item.totalAmount || 0), 0);
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingDailyReport = false;
      }
    },
    async fetchOutstandingReport() {
      this.loadingOutstandingReport = true;
      try {
        const res = await this.$axios.get('/api/school/reports/overdue-balances', {
          params: {
            classId: this.outstandingFilters.classId,
            feeItemId: this.outstandingFilters.feeItemId
          }
        });
        this.outstandingInvoices = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingOutstandingReport = false;
      }
    },
    async fetchClassRoomSummary() {
      this.loadingClassRoomSummary = true;
      try {
        const res = await this.$axios.get('/api/school/reports/class-room-summary');
        this.classRoomSummary = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingClassRoomSummary = false;
      }
    },
    getCompletionPercentage(item) {
      if (!item.totalAmount) return 0;
      return (item.paidAmount / item.totalAmount) * 100;
    },
    printClassRoomSummary() {
      if (!this.classRoomSummary || this.classRoomSummary.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນທີ່ຈະພິມ');
        return;
      }
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateClassRoomSummaryReportHTML(this.classRoomSummary, companyData);
        
        const printWindow = window.open('', '_blank', 'width=1024,height=768');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('Failed to generate print view');
      }
    },
    async fetchFeeItemSummary() {
      this.loadingFeeItemSummary = true;
      try {
        const res = await this.$axios.get('/api/school/reports/fee-item-summary');
        this.feeItemSummary = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingFeeItemSummary = false;
      }
    },
    getFeeItemCompletionPercentage(item) {
      if (!item.totalBilled) return 0;
      return (item.totalPaid / item.totalBilled) * 100;
    },
    printFeeItemSummary() {
      if (!this.feeItemSummary || this.feeItemSummary.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນທີ່ຈະພິມ');
        return;
      }
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateFeeItemSummaryReportHTML(this.feeItemSummary, companyData);
        
        const printWindow = window.open('', '_blank', 'width=1024,height=768');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('Failed to generate print view');
      }
    },
    printOutstandingReport() {
      if (!this.outstandingInvoices || this.outstandingInvoices.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນທີ່ຈະພິມ');
        return;
      }
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        
        const selectedClass = this.classes.find(c => c.id === this.outstandingFilters.classId);
        const selectedFeeItem = this.feeItems.find(f => f.id === this.outstandingFilters.feeItemId);
        
        const filterNames = {
          className: selectedClass ? selectedClass.name : '',
          feeItemName: selectedFeeItem ? selectedFeeItem.name : ''
        };

        const htmlContent = generateOutstandingBalancesReportHTML(
          this.outstandingInvoices,
          companyData,
          filterNames
        );
        
        const printWindow = window.open('', '_blank', 'width=1024,height=768');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('Failed to generate print view');
      }
    }
  }
}
</script>

<style scoped>
.school-billing-dashboard {
  margin: 0 !important;
  padding: 0 !important;
}

.school-billing-dashboard * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

/* Header Banner Card */
.header-banner-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03) !important;
}

.header-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c7d2fe;
}

/* Live Pulsing Dot Indicator */
.live-dot {
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  animation: pulse-green 1.8s infinite;
}

.table-live-dot {
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 50%;
  display: inline-block;
  animation: pulse-white 1.8s infinite;
}

@keyframes pulse-green {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}

@keyframes pulse-white {
  0% {
    opacity: 0.6;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}

/* Modern Segmented Tabs */
.nav-tabs-card {
  background: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
}

.modern-tabs >>> .v-tabs-bar {
  background-color: transparent !important;
}

.modern-tabs .tab-item {
  letter-spacing: normal;
  text-transform: none;
  min-height: 42px;
  margin: 0 4px;
  transition: all 0.25s ease;
  border-radius: 8px !important;
}

.modern-tabs >>> .v-tab--active {
  background-color: #ffffff !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
}

/* Filter Toolbar */
.filter-toolbar-card {
  background: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
}

/* KPI Metric Cards */
.kpi-metric-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 104px;
}

.kpi-metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px -2px rgba(0, 0, 0, 0.08) !important;
}

.kpi-card-slate {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
  border: 1px solid #e2e8f0 !important;
}

.kpi-card-emerald {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%) !important;
  border: 1px solid #bbf7d0 !important;
}

.kpi-card-rose {
  background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%) !important;
  border: 1px solid #fecdd3 !important;
}

.kpi-card-sky {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%) !important;
  border: 1px solid #bae6fd !important;
}

/* Hero Card (Grand Expected Cash) */
.kpi-hero-card {
  background: linear-gradient(135deg, #065f46 0%, #047857 50%, #0d9488 100%) !important;
  border: none !important;
  box-shadow: 0 10px 25px -5px rgba(4, 120, 87, 0.35) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.kpi-hero-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -4px rgba(4, 120, 87, 0.45) !important;
}

.hero-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 0.5px;
}

.hero-subtext {
  color: #a7f3d0 !important;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 4px;
}

/* KPI Icon Circles */
.kpi-icon-circle {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-slate {
  background: rgba(71, 85, 105, 0.12);
}

.icon-emerald {
  background: rgba(16, 185, 129, 0.18);
}

.icon-rose {
  background: rgba(244, 63, 94, 0.18);
}

.icon-sky {
  background: rgba(14, 165, 233, 0.18);
}

.icon-hero {
  background: rgba(255, 255, 255, 0.22);
}

/* Subpage Icon Boxes */
.subpage-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-info-light {
  background-color: #e0f2fe;
}

.bg-error-light {
  background-color: #ffe4e6;
}

.bg-purple-light {
  background-color: #f3e8ff;
}

.bg-teal-light {
  background-color: #ccfbf1;
}

.bg-slate-light {
  background-color: #f1f5f9;
}

.bg-emerald-light {
  background-color: #dcfce7;
}

/* Tabular Numerals for Finance */
.text-tabular {
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.2px;
}

/* Modern Report Table */
.modern-report-table {
  border: 1px solid #e2e8f0 !important;
  overflow: hidden;
}

.modern-report-table >>> th {
  background-color: #f8fafc !important;
  color: #475569 !important;
  font-weight: 700 !important;
  font-size: 12px !important;
  white-space: nowrap;
}

.modern-report-table >>> tbody tr:hover {
  background-color: #f8fafc !important;
}

/* Grand Total Row Footer */
.grand-total-row {
  background-color: #f1f5f9 !important;
  border-top: 2px solid #cbd5e1 !important;
}

.grand-total-highlight {
  background-color: #dcfce7 !important;
  font-size: 13px !important;
}

/* Expected Cash Chip */
.expected-cash-chip {
  border: 1px solid #a7f3d0 !important;
}

/* Total Summary Banner (Tab 2) */
.total-summary-banner {
  background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%) !important;
  border: 1px solid #a7f3d0 !important;
}

/* Dialog Headers */
.dialog-header-primary {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%) !important;
}

.dialog-header-emerald {
  background: linear-gradient(135deg, #065f46 0%, #059669 100%) !important;
}

.dialog-table >>> th {
  background-color: #f8fafc !important;
  font-weight: 700 !important;
  font-size: 12px !important;
}

/* Progress Linear Gradient */
.progress-gradient >>> .v-progress-linear__determinate {
  background: linear-gradient(90deg, #10b981 0%, #059669 100%) !important;
}
</style>
