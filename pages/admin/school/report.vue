<template>
  <v-container class="school-billing-dashboard pa-6" fluid>
    <!-- Top Header -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon size="38" color="primary" class="mr-2">mdi-chart-box-outline</v-icon>
          ລາຍງານການເງິນ ແລະ ສະຫຼຸບຍອດປິດກະເປົາ (Financial & Shift Reports)
        </h1>
        <p class="text-subtitle-1 grey--text text--darken-1 mb-0">
          ກວດສອບຍອດເງິນສົດໃນລີ້ນຊັກ, ຍອດຕື່ມ-ຖອນບັດນັກຮຽນ, ການມອບເງິນສົດເຂົ້າບັນຊີກາງ ແລະ ສະຫຼຸບປິດ Shift ແຕ່ລະ Cashier
        </p>
      </div>

      <!-- Active Shift Indicator & Quick Links -->
      <div class="d-flex align-center">
        <v-btn color="success" class="mr-3" @click="openCashDropFromReport(null)" elevation="1">
          <v-icon left small>mdi-bank-transfer-out</v-icon>
          ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop)
        </v-btn>
        <v-chip v-if="activeShift" color="success" dark class="px-4 py-2 font-weight-bold mr-3" elevation="1">
          <v-icon left small>mdi-cash-register</v-icon>
          Shift ປະຈຸບັນ: #{{ activeShift.id }} | ເປີດ: {{ formatCurrency(activeShift.openingCash) }} LAK
        </v-chip>
        <v-chip v-else color="error" dark class="px-4 py-2 font-weight-bold mr-3" elevation="1" to="/admin/school/shift">
          <v-icon left small>mdi-cash-register-off</v-icon>
          ບໍ່ມີກະເປົາເປີດ (No Active Shift)
        </v-chip>
        <v-btn color="primary" outlined to="/admin/school/shift" small>
          <v-icon left small>mdi-cogs</v-icon>
          ຈັດການ Shift
        </v-btn>
      </div>
    </div>

    <!-- Main Navigation Tabs -->
    <v-tabs v-model="activeTab" background-color="transparent" color="primary" class="mb-4" slider-color="primary">
      <v-tab class="font-weight-bold">
        <v-icon left>mdi-cash-multiple</v-icon>
        ສະຫຼຸບຍອດເງິນສົດແຕ່ລະ Cashier (Cash Position per User)
      </v-tab>
      <v-tab class="font-weight-bold">
        <v-icon left>mdi-chart-line</v-icon>
        ຍອດເກັບເງິນປະຈຳວັນ (Daily Collections)
      </v-tab>
      <v-tab class="font-weight-bold">
        <v-icon left>mdi-account-cash</v-icon>
        ຄ້າງຊຳລະສະສົມ (Outstanding Balances)
      </v-tab>
      <v-tab class="font-weight-bold">
        <v-icon left>mdi-google-classroom</v-icon>
        ຕາມຊັ້ນຮຽນ & ຫ້ອງຮຽນ (Class & Room)
      </v-tab>
      <v-tab class="font-weight-bold">
        <v-icon left>mdi-tag-text-outline</v-icon>
        ຕາມປະເພດຄ່າທໍານຽມ (Fee Items)
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab">
      <!-- TAB 1: CASH POSITION & SHIFT SUMMARY PER USER -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6">
          <!-- Filter and Action Bar -->
          <v-row align="center" dense class="mb-3">
            <v-col cols="12" sm="3" md="2">
              <v-text-field v-model="cashPositionFilters.startDate" type="date" label="ແຕ່ວັນທີ (Start Date)" outlined dense
                hide-details @change="fetchCashPositionReport"></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="2">
              <v-text-field v-model="cashPositionFilters.endDate" type="date" label="ຫາວັນທີ (End Date)" outlined dense
                hide-details @change="fetchCashPositionReport"></v-text-field>
            </v-col>
            <v-col cols="12" sm="4" md="3">
              <v-select v-model="cashPositionFilters.userId" :items="userOptions" item-text="name" item-value="id"
                label="ເລືອກ Cashier / User" outlined dense hide-details clearable @change="fetchCashPositionReport"></v-select>
            </v-col>
            <v-col cols="12" sm="2" md="1">
              <v-btn color="primary" block @click="fetchCashPositionReport" :loading="loadingCashPosition">
                <v-icon left small>mdi-magnify</v-icon>
                ຄົ້ນຫາ
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="12" md="4" class="text-right d-flex justify-end">
              <v-btn color="primary" outlined class="mr-2" @click="printCashPositionReport" :disabled="loadingCashPosition">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn color="success" outlined @click="exportToCSV" :disabled="loadingCashPosition || filteredUsers.length === 0">
                <v-icon left small>mdi-file-excel</v-icon>
                Export Excel
              </v-btn>
            </v-col>
          </v-row>

          <!-- KPI Summary Cards -->
          <v-row dense class="mb-4">
            <!-- 1. Total Opening Float -->
            <v-col cols="6" sm="4" md="2">
              <v-card class="pa-3 text-center elevation-1 rounded-lg" style="background: #f8fafc; border: 1px solid #e2e8f0;">
                <div class="caption font-weight-bold grey--text text--darken-2 mb-1">
                  <v-icon small color="blue-grey" class="mr-1">mdi-cash-lock</v-icon>
                  ເງິນເປີດກະເປົາລວມ
                </div>
                <div class="text-subtitle-1 font-weight-bold blue-grey--text text--darken-3">
                  {{ formatCurrency(cashPositionSummary.totalOpeningCash) }} <span class="caption">LAK</span>
                </div>
              </v-card>
            </v-col>

            <!-- 2. Wallet Topup IN -->
            <v-col cols="6" sm="4" md="2">
              <v-card class="pa-3 text-center elevation-1 rounded-lg" style="background: #f0fdf4; border: 1px solid #bbf7d0;">
                <div class="caption font-weight-bold success--text text--darken-2 mb-1">
                  <v-icon small color="success" class="mr-1">mdi-arrow-down-bold-circle</v-icon>
                  ຕື່ມເງິນບັດ (Deposit IN)
                </div>
                <div class="text-subtitle-1 font-weight-bold success--text text--darken-3">
                  +{{ formatCurrency(cashPositionSummary.totalTopupIn) }} <span class="caption">LAK</span>
                </div>
              </v-card>
            </v-col>

            <!-- 3. Wallet Withdraw OUT -->
            <v-col cols="6" sm="4" md="2">
              <v-card class="pa-3 text-center elevation-1 rounded-lg" style="background: #fef2f2; border: 1px solid #fecaca;">
                <div class="caption font-weight-bold error--text text--darken-2 mb-1">
                  <v-icon small color="error" class="mr-1">mdi-arrow-up-bold-circle</v-icon>
                  ຖອນເງິນບັດ (Withdraw OUT)
                </div>
                <div class="text-subtitle-1 font-weight-bold error--text text--darken-3">
                  -{{ formatCurrency(cashPositionSummary.totalWithdrawOut) }} <span class="caption">LAK</span>
                </div>
              </v-card>
            </v-col>

            <!-- 4. POS Cash Sales -->
            <v-col cols="6" sm="4" md="2">
              <v-card class="pa-3 text-center elevation-1 rounded-lg" style="background: #f0f9ff; border: 1px solid #bae6fd;">
                <div class="caption font-weight-bold info--text text--darken-2 mb-1">
                  <v-icon small color="info" class="mr-1">mdi-cart-check</v-icon>
                  POS ຂາຍເງິນສົດ
                </div>
                <div class="text-subtitle-1 font-weight-bold info--text text--darken-3">
                  +{{ formatCurrency(cashPositionSummary.totalPosCashSales) }} <span class="caption">LAK</span>
                </div>
              </v-card>
            </v-col>

            <!-- 5. Net Expected Cash in Drawers -->
            <v-col cols="12" sm="8" md="4">
              <v-card class="pa-3 text-center elevation-2 rounded-lg white--text" style="background: linear-gradient(135deg, #0f766e, #047857);">
                <div class="caption font-weight-bold text-uppercase mb-1" style="color: #a7f3d0;">
                  <v-icon small color="#a7f3d0" class="mr-1">mdi-safe</v-icon>
                  ເງິນສົດລວມທີ່ຄວນມີໃນລີ້ນຊັກ (Grand Expected Cash)
                </div>
                <div class="text-h6 font-weight-bold text-white">
                  {{ formatCurrency(cashPositionSummary.grandExpectedCashInDrawers) }} <span class="text-subtitle-2">LAK</span>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="mb-4"></v-divider>

          <!-- Per-User Cash Position Table -->
          <v-data-table :headers="cashPositionHeaders" :items="filteredUsers" :loading="loadingCashPosition"
            no-data-text="ບໍ່ມີຂໍ້ມູນການເຄື່ອນໄຫວໃນຊ່ວງວັນທີນີ້" class="elevation-0" dense :items-per-page="15">
            <!-- User Name / Info -->
            <template v-slot:item.userName="{ item }">
              <div class="py-1">
                <span class="font-weight-bold text-subtitle-2 primary--text">{{ item.userName }}</span>
                <span class="caption grey--text ml-1">({{ item.userCode }})</span>
              </div>
            </template>

            <!-- Shift Status -->
            <template v-slot:item.shift="{ item }">
              <v-chip v-if="item.shift && item.shift.status === 'OPEN'" color="success" text-color="white" x-small class="font-weight-bold">
                OPEN #{{ item.shift.id }}
              </v-chip>
              <v-chip v-else-if="item.shift && item.shift.status === 'CLOSED'" color="grey darken-1" text-color="white" x-small>
                CLOSED #{{ item.shift.id }}
              </v-chip>
              <span v-else class="grey--text caption">-</span>
            </template>

            <!-- Opening Float -->
            <template v-slot:item.openingCash="{ item }">
              <span class="font-weight-medium">{{ formatCurrency(item.openingCash) }}</span>
            </template>

            <!-- Topup IN -->
            <template v-slot:item.topupIn="{ item }">
              <span class="font-weight-bold success--text">
                +{{ formatCurrency(item.topupIn) }}
              </span>
              <span v-if="item.topupCount > 0" class="caption grey--text ml-1">({{ item.topupCount }})</span>
            </template>

            <!-- Withdraw OUT -->
            <template v-slot:item.withdrawOut="{ item }">
              <span v-if="item.withdrawOut > 0" class="font-weight-bold error--text">
                -{{ formatCurrency(item.withdrawOut) }}
              </span>
              <span v-else class="grey--text">0</span>
              <span v-if="item.withdrawCount > 0" class="caption grey--text ml-1">({{ item.withdrawCount }})</span>
            </template>

            <!-- POS Cash -->
            <template v-slot:item.posCashSales="{ item }">
              <span>{{ formatCurrency(item.posCashSales) }}</span>
            </template>

            <!-- Total Cash IN -->
            <template v-slot:item.totalCashIn="{ item }">
              <strong class="teal--text text--darken-2">+{{ formatCurrency(item.totalCashIn) }}</strong>
            </template>

            <!-- Total Cash OUT -->
            <template v-slot:item.totalCashOut="{ item }">
              <strong :class="item.totalCashOut > 0 ? 'red--text' : 'grey--text'">-{{ formatCurrency(item.totalCashOut) }}</strong>
            </template>

            <!-- Expected Cash In Drawer -->
            <template v-slot:item.expectedCashInDrawer="{ item }">
              <v-chip color="green lighten-5" text-color="green darken-4" small class="font-weight-bold">
                {{ formatCurrency(item.expectedCashInDrawer) }} LAK
              </v-chip>
            </template>

            <!-- Actual Closing Cash -->
            <template v-slot:item.actualClosingCash="{ item }">
              <span v-if="item.actualClosingCash !== null" class="font-weight-bold">
                {{ formatCurrency(item.actualClosingCash) }}
              </span>
              <span v-else class="grey--text caption">ຍັງບໍ່ປິດ</span>
            </template>

            <!-- Variance -->
            <template v-slot:item.variance="{ item }">
              <span v-if="item.variance !== null" :class="item.variance === 0 ? 'success--text' : (item.variance > 0 ? 'primary--text font-weight-bold' : 'error--text font-weight-bold')">
                {{ item.variance > 0 ? '+' : '' }}{{ formatCurrency(item.variance) }}
              </span>
              <span v-else class="grey--text">-</span>
            </template>

            <!-- Non-Cash NFC -->
            <template v-slot:item.posNfcSales="{ item }">
              <span class="purple--text font-weight-medium">{{ formatCurrency(item.posNfcSales) }}</span>
            </template>

            <!-- Actions -->
            <template v-slot:item.actions="{ item }">
              <div class="d-flex align-center">
                <v-btn icon color="success" small @click="openCashDropFromReport(item)" title="ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop)">
                  <v-icon small>mdi-bank-transfer-out</v-icon>
                </v-btn>
                <v-btn icon color="primary" small @click="openUserDrilldown(item)" title="ເບິ່ງລາຍການຍ່ອຍ (Drilldown)">
                  <v-icon small>mdi-format-list-bulleted</v-icon>
                </v-btn>
                <v-btn icon color="teal" small @click="printUserSlip(item)" title="ພິມ Slip ປິດກະເປົາ (Print Slip)">
                  <v-icon small>mdi-receipt</v-icon>
                </v-btn>
              </div>
            </template>

            <!-- Summary Table Footer -->
            <template v-slot:body.append>
              <tr class="font-weight-bold grey lighten-4">
                <td colspan="3" class="text-center">ຍອດລວມທັງໝົດ (Grand Total)</td>
                <td class="text-right">{{ formatCurrency(cashPositionSummary.totalOpeningCash) }}</td>
                <td class="text-right success--text">+{{ formatCurrency(cashPositionSummary.totalTopupIn) }}</td>
                <td class="text-right error--text">-{{ formatCurrency(cashPositionSummary.totalWithdrawOut) }}</td>
                <td class="text-right">{{ formatCurrency(cashPositionSummary.totalPosCashSales) }}</td>
                <td class="text-right teal--text text--darken-3">+{{ formatCurrency(cashPositionSummary.grandTotalCashIn) }}</td>
                <td class="text-right red--text">-{{ formatCurrency(cashPositionSummary.grandTotalCashOut) }}</td>
                <td class="text-right font-weight-bold green--text text--darken-4" style="font-size: 13px;">
                  {{ formatCurrency(cashPositionSummary.grandExpectedCashInDrawers) }} LAK
                </td>
                <td class="text-right">{{ cashPositionSummary.grandActualClosingCash ? formatCurrency(cashPositionSummary.grandActualClosingCash) : '-' }}</td>
                <td class="text-right">-</td>
                <td class="text-right purple--text">{{ formatCurrency(cashPositionSummary.totalPosNfcSales) }}</td>
                <td></td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>

      <!-- TAB 2: DAILY PAYMENT COLLECTIONS -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
              <span class="text-subtitle-1 font-weight-bold">ຍອດເກັບເງິນປະຈຳວັນ (Daily Collection Summary)</span>
            </div>
            <v-btn icon color="primary" @click="fetchDailyReport">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </div>

          <v-row align="center" class="mb-4">
            <v-col cols="12" sm="4">
              <v-text-field v-model="reportDate" type="date" label="ເລືອກວັນທີ (Select Date)" outlined dense
                hide-details @change="fetchDailyReport"></v-text-field>
            </v-col>
          </v-row>

          <v-divider class="mb-4"></v-divider>

          <v-data-table :headers="dailyReportHeaders" :items="dailyCollections" :loading="loadingDailyReport"
            no-data-text="ບໍ່ມີຍອດເກັບເງິນໃນວັນທີນີ້" class="elevation-0" dense hide-default-footer>
            <template v-slot:item.cashier="{ item }">
              <span class="font-weight-medium">{{ item.cashier }}</span>
            </template>
            <template v-slot:item.paymentMethod="{ item }">
              <v-chip color="info" outlined small>{{ item.paymentMethod }}</v-chip>
            </template>
            <template v-slot:item.totalAmount="{ item }">
              <span class="font-weight-bold">{{ formatCurrency(item.totalAmount) }} LAK</span>
            </template>
          </v-data-table>

          <v-alert type="success" text class="mt-4 mb-0" icon="mdi-cash">
            <div class="d-flex justify-space-between align-center">
              <span class="font-weight-bold text-subtitle-1">ຍອດເກັບລວມທັງໝົດ:</span>
              <strong class="text-h6 text-success">{{ formatCurrency(dailyReportTotal) }} LAK</strong>
            </div>
          </v-alert>
        </v-card>
      </v-tab-item>

      <!-- TAB 3: OUTSTANDING BALANCES -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-icon color="error" class="mr-2">mdi-account-cash</v-icon>
              <span class="text-subtitle-1 font-weight-bold text-error">ຄ້າງຊຳລະສະສົມ (Outstanding Balances)</span>
            </div>
            <div class="d-flex align-center">
              <v-btn color="error" outlined small @click="printOutstandingReport" class="mr-2">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="error" @click="fetchOutstandingReport">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <v-row dense class="mb-2">
            <v-col cols="12" sm="4">
              <v-select v-model="outstandingFilters.classId" :items="classes" item-text="name" item-value="id"
                label="ຊັ້ນຮຽນ (Class)" outlined dense hide-details clearable @change="fetchOutstandingReport"></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select v-model="outstandingFilters.feeItemId" :items="feeItems" item-text="name" item-value="id"
                label="ຄ່າທໍານຽມ (Fee Item)" outlined dense hide-details clearable @change="fetchOutstandingReport"></v-select>
            </v-col>
          </v-row>

          <v-divider class="mb-4"></v-divider>

          <v-data-table :headers="outstandingReportHeaders" :items="outstandingInvoices"
            :loading="loadingOutstandingReport" no-data-text="ບໍ່ມີຍອດຄ້າງຊຳລະ" class="elevation-0" :items-per-page="10">
            <template v-slot:item.student="{ item }">
              <div v-if="item.student" class="font-weight-medium">
                {{ item.student.name || item.studentName }}
                <div class="caption grey--text">ID: {{ item.student.studentId || item.studentId }}</div>
              </div>
            </template>
            <template v-slot:item.invoiceNumber="{ item }">
              <div class="font-weight-medium">{{ item.invoiceNumber }}</div>
              <div v-if="item.feeItemDetail" class="caption teal--text font-weight-bold">{{ item.feeItemDetail }}</div>
            </template>
            <template v-slot:item.parent="{ item }">
              <div v-if="item.student && item.student.parentName" class="caption">
                {{ item.student.parentName }}
                <div class="text-info font-weight-bold">{{ item.student.parentPhone }}</div>
              </div>
              <div v-else-if="item.parentName" class="caption">
                {{ item.parentName }}
                <div class="text-info font-weight-bold">{{ item.parentPhone }}</div>
              </div>
              <span v-else class="grey--text">-</span>
            </template>
            <template v-slot:item.balanceAmount="{ item }">
              <span class="text-error font-weight-bold">{{ formatCurrency(item.balanceAmount) }} LAK</span>
            </template>
            <template v-slot:item.dueDate="{ item }">
              <span :class="isOverdue(item.dueDate) ? 'text-error font-weight-bold' : ''">
                {{ formatDate(item.dueDate) }}
              </span>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>

      <!-- TAB 4: CLASS & ROOM SUMMARY -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-icon color="primary" class="mr-2">mdi-google-classroom</v-icon>
              <span class="text-subtitle-1 font-weight-bold">ລາຍງານຍອດເກັບເງິນຕາມຊັ້ນຮຽນ ແລະ ຫ້ອງຮຽນ (Class & Room Invoice Summary)</span>
            </div>
            <div class="d-flex align-center">
              <v-btn color="primary" outlined small @click="printClassRoomSummary" class="mr-2">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="primary" @click="fetchClassRoomSummary">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <v-divider class="mb-4"></v-divider>

          <v-data-table :headers="classRoomSummaryHeaders" :items="classRoomSummary" :loading="loadingClassRoomSummary"
            no-data-text="ບໍ່ມີຂໍ້ມູນຍອດເກັບເງິນຕາມຊັ້ນ ແລະ ຫ້ອງ" class="elevation-0" dense>
            <template v-slot:item.className="{ item }">
              <span class="font-weight-bold">{{ item.className }}</span>
            </template>
            <template v-slot:item.roomName="{ item }">
              <span class="font-weight-medium text-info">{{ item.roomName }}</span>
            </template>
            <template v-slot:item.totalAmount="{ item }">
              <span>{{ formatCurrency(item.totalAmount) }} LAK</span>
            </template>
            <template v-slot:item.paidAmount="{ item }">
              <span class="text-success font-weight-bold">{{ formatCurrency(item.paidAmount) }} LAK</span>
            </template>
            <template v-slot:item.balanceAmount="{ item }">
              <span class="text-error font-weight-bold">{{ formatCurrency(item.balanceAmount) }} LAK</span>
            </template>
            <template v-slot:item.completion="{ item }">
              <div class="d-flex align-center">
                <v-progress-linear :value="getCompletionPercentage(item)" color="success" height="15" rounded>
                  <template v-slot:default="{ value }">
                    <strong class="white--text" style="font-size: 9px;">{{ Math.round(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>

      <!-- TAB 5: FEE ITEM SUMMARY -->
      <v-tab-item>
        <v-card outlined class="pa-4 elevation-1 mb-6">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-icon color="teal" class="mr-2">mdi-cash-multiple</v-icon>
              <span class="text-subtitle-1 font-weight-bold">ລາຍງານຍອດເກັບເງິນຕາມປະເພດຄ່າທໍານຽມ (Fee Item Invoice Summary)</span>
            </div>
            <div class="d-flex align-center">
              <v-btn color="primary" outlined small @click="printFeeItemSummary" class="mr-2">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="primary" @click="fetchFeeItemSummary">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <v-divider class="mb-4"></v-divider>

          <v-data-table :headers="feeItemSummaryHeaders" :items="feeItemSummary" :loading="loadingFeeItemSummary"
            no-data-text="ບໍ່ມີຂໍ້ມູນຍອດເກັບເງິນຕາມປະເພດຄ່າທໍານຽມ" class="elevation-0" dense>
            <template v-slot:item.feeItemName="{ item }">
              <span class="font-weight-bold">{{ item.feeItemName }}</span>
            </template>
            <template v-slot:item.totalBilled="{ item }">
              <span>{{ formatCurrency(item.totalBilled) }} LAK</span>
            </template>
            <template v-slot:item.totalPaid="{ item }">
              <span class="text-success font-weight-bold">{{ formatCurrency(item.totalPaid) }} LAK</span>
            </template>
            <template v-slot:item.totalPending="{ item }">
              <span class="text-error font-weight-bold">{{ formatCurrency(item.totalPending) }} LAK</span>
            </template>
            <template v-slot:item.completion="{ item }">
              <div class="d-flex align-center">
                <v-progress-linear :value="getFeeItemCompletionPercentage(item)" color="success" height="15" rounded>
                  <template v-slot:default="{ value }">
                    <strong class="white--text" style="font-size: 9px;">{{ Math.round(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <!-- TRANSACTION DRILLDOWN MODAL -->
    <v-dialog v-model="drilldownDialog" max-width="850px" scrollable>
      <v-card v-if="selectedUserDrilldown">
        <v-card-title class="primary white--text font-weight-bold d-flex justify-space-between align-center">
          <div class="d-flex align-center">
            <v-icon left color="white">mdi-account-details</v-icon>
            <span>ລາຍການເຄື່ອນໄຫວລະອຽດ: {{ selectedUserDrilldown.userName }} ({{ selectedUserDrilldown.userCode }})</span>
          </div>
          <v-btn icon dark @click="drilldownDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <!-- Summary Header in Dialog -->
          <v-row dense class="mb-3">
            <v-col cols="4">
              <div class="caption grey--text">ເງິນເປີດກະເປົາ:</div>
              <div class="font-weight-bold">{{ formatCurrency(selectedUserDrilldown.openingCash) }} LAK</div>
            </v-col>
            <v-col cols="4">
              <div class="caption grey--text">ລວມຮັບເຂົ້າ (Cash IN):</div>
              <div class="font-weight-bold success--text">+{{ formatCurrency(selectedUserDrilldown.totalCashIn) }} LAK</div>
            </v-col>
            <v-col cols="4">
              <div class="caption grey--text">ເງິນສົດຄວນມີໃນລີ້ນຊັກ:</div>
              <div class="font-weight-bold teal--text text--darken-3">{{ formatCurrency(selectedUserDrilldown.expectedCashInDrawer) }} LAK</div>
            </v-col>
          </v-row>

          <v-tabs v-model="drilldownTab" color="primary" dense>
            <v-tab>
              <v-badge :content="selectedUserDrilldown.transactions.topups.length" :value="selectedUserDrilldown.transactions.topups.length" color="success" inline>
                ຕື່ມເງິນບັດ (Top-up IN)
              </v-badge>
            </v-tab>
            <v-tab>
              <v-badge :content="selectedUserDrilldown.transactions.withdrawals.length" :value="selectedUserDrilldown.transactions.withdrawals.length" color="error" inline>
                ຖອນເງິນບັດ (Withdraw OUT)
              </v-badge>
            </v-tab>
            <v-tab>
              <v-badge :content="selectedUserDrilldown.transactions.posSales.length" :value="selectedUserDrilldown.transactions.posSales.length" color="info" inline>
                POS ຂາຍສິນຄ້າ
              </v-badge>
            </v-tab>
            <v-tab>
              <v-badge :content="selectedUserDrilldown.transactions.feePayments.length" :value="selectedUserDrilldown.transactions.feePayments.length" color="teal" inline>
                ຄ່າຮຽນ (Fee Payments)
              </v-badge>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="drilldownTab" class="mt-3">
            <!-- 1. Topups List -->
            <v-tab-item>
              <v-simple-table dense>
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
                    <td>{{ formatDateTime(t.createdAt) }}</td>
                    <td><v-chip x-small color="primary" outlined>{{ t.studentCode || '-' }}</v-chip></td>
                    <td class="font-weight-medium">{{ t.studentName }}</td>
                    <td class="caption grey--text">{{ t.description }}</td>
                    <td class="text-right font-weight-bold success--text">+{{ formatCurrency(t.amount) }}</td>
                  </tr>
                  <tr v-if="selectedUserDrilldown.transactions.topups.length === 0">
                    <td colspan="5" class="text-center py-4 grey--text">ບໍ່ມີລາຍການຕື່ມເງິນ</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>

            <!-- 2. Withdrawals List -->
            <v-tab-item>
              <v-simple-table dense>
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
                    <td>{{ formatDateTime(w.createdAt) }}</td>
                    <td><v-chip x-small color="error" outlined>{{ w.studentCode || '-' }}</v-chip></td>
                    <td class="font-weight-medium">{{ w.studentName }}</td>
                    <td class="caption grey--text">{{ w.description }}</td>
                    <td class="text-right font-weight-bold error--text">-{{ formatCurrency(w.amount) }}</td>
                  </tr>
                  <tr v-if="selectedUserDrilldown.transactions.withdrawals.length === 0">
                    <td colspan="5" class="text-center py-4 grey--text">ບໍ່ມີລາຍການຖອນເງິນ</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>

            <!-- 3. POS Sales List -->
            <v-tab-item>
              <v-simple-table dense>
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
                    <td>{{ formatDateTime(s.createdAt) }}</td>
                    <td>{{ s.referenceNo || '#' + s.id }}</td>
                    <td>
                      <v-chip x-small :color="s.paymentCode === 'CASH' ? 'success' : (s.paymentCode === 'NFC' ? 'purple' : 'info')" text-color="white">
                        {{ s.paymentName || s.paymentCode }}
                      </v-chip>
                    </td>
                    <td class="text-right font-weight-bold">{{ formatCurrency(s.total) }}</td>
                  </tr>
                  <tr v-if="selectedUserDrilldown.transactions.posSales.length === 0">
                    <td colspan="4" class="text-center py-4 grey--text">ບໍ່ມີລາຍການຂາຍ POS</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>

            <!-- 4. Fee Payments List -->
            <v-tab-item>
              <v-simple-table dense>
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
                    <td>{{ formatDateTime(f.createdAt) }}</td>
                    <td>{{ f.referenceNo || '#' + f.id }}</td>
                    <td><v-chip x-small color="info" outlined>{{ f.paymentName || f.paymentCode }}</v-chip></td>
                    <td class="text-right font-weight-bold teal--text">+{{ formatCurrency(f.amount) }}</td>
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
          <v-btn color="primary" outlined small @click="printUserSlip(selectedUserDrilldown)" class="mr-2">
            <v-icon left small>mdi-printer</v-icon>
            ພິມ Slip
          </v-btn>
          <v-btn color="grey darken-1" text small @click="drilldownDialog = false">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- CASH DROP / REMITTANCE TO CENTRAL ACCOUNT MODAL -->
    <v-dialog v-model="cashDropDialog" max-width="560px" persistent>
      <v-card>
        <v-card-title class="success darken-1 white--text font-weight-bold">
          <v-icon left color="white">mdi-bank-transfer-out</v-icon>
          ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop to Central Vault)
        </v-card-title>
        <v-card-text class="pt-4">
          <!-- Target Cashier Info -->
          <v-alert v-if="selectedUserForCashDrop" type="info" text dense class="mb-3">
            <div class="d-flex justify-space-between align-center">
              <span>Cashier: <strong>{{ selectedUserForCashDrop.userName }}</strong> ({{ selectedUserForCashDrop.userCode }})</span>
              <span>ເງິນສົດຄວນມີ: <strong>{{ formatCurrency(selectedUserForCashDrop.expectedCashInDrawer) }} LAK</strong></span>
            </div>
          </v-alert>

          <v-form ref="cashDropForm">
            <!-- Source Till Account -->
            <v-select v-model="cashDropFields.fromAccountId" :items="availableTillAccounts" item-text="displayName" item-value="id"
              label="ບັນຊີຕົ້ນທາງ / ລີ້ນຊັກ (From Till Account) *" outlined dense class="mb-2" :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີຕົ້ນທາງ']"></v-select>

            <!-- Destination Central Account -->
            <v-select v-model="cashDropFields.toAccountId" :items="availableCentralAccounts" item-text="displayName" item-value="id"
              label="ບັນຊີປາຍທາງ / ຕູ້ເຊບກາງ (To Central Account) *" outlined dense class="mb-2" :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີປາຍທາງ']"></v-select>

            <!-- Amount & Quick Presets -->
            <div class="mb-1 d-flex justify-space-between align-center">
              <span class="caption font-weight-bold grey--text text--darken-2">ຈຳນວນເງິນສົດທີ່ມອບ (Amount) *</span>
              <div class="d-flex gap-1">
                <v-btn x-small color="success" outlined @click="fillMaxCashDrop" class="mr-1">
                  ມອບໝົດ
                </v-btn>
                <v-btn x-small color="primary" outlined @click="fillNetSalesDrop">
                  ມອບສະເພາະຍອດຂາຍ
                </v-btn>
              </div>
            </div>
            <v-text-field :value="formatInputAmount(cashDropFields.amount)" @input="onAmountInput($event, cashDropFields, 'amount')"
              outlined dense suffix="LAK" class="mb-2" :rules="[v => cashDropFields.amount > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0']"></v-text-field>

            <!-- Receiver Name -->
            <v-text-field v-model="cashDropFields.receiverName" label="ຊື່ຜູ້ຮັບມອບ / ຫົວໜ້າການເງິນ (Receiver Name) *"
              outlined dense class="mb-2" :rules="[v => !!v || 'ກະລຸນາລະບຸຊື່ຜູ້ຮັບມອບ']"></v-text-field>

            <!-- Remarks -->
            <v-textarea v-model="cashDropFields.description" label="ໝາຍເຫດ (Remarks)" outlined dense rows="2" hide-details></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-4 grey lighten-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="cashDropDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="success darken-1" class="font-weight-bold" @click="submitCashDrop" :loading="savingCashDrop">
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
.school-billing-dashboard * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
</style>
