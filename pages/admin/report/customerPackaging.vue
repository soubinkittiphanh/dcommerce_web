<template>
  <div class="pa-4">
    <!-- Header -->
    <header class="mb-4">
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-3" size="36">mdi-package-variant-closed</v-icon>
          <div>
            <h1 class="text-h5 font-weight-black primary--text mb-0">
              ລາຍງານໜີ້ສິນບັນຈຸພັນລູກຄ້າ / Customer Packaging Debt Statement
            </h1>
            <span class="text-caption grey--text text--darken-1">
              ຕິດຕາມລາຍການສົ່ງອອກ ແລະ ຮັບຄືນ ລັງ-ແກ້ວ ຂອງລູກຄ້າຂາຍສົ່ງ (Wholesale Clients)
            </span>
          </div>
        </div>
        <div class="d-flex align-center mt-2 mt-sm-0 flex-wrap">
          <v-btn
            color="amber darken-3"
            outlined
            class="rounded-lg mr-2 font-weight-bold"
            :loading="isRebuilding"
            @click="confirmRebuildBalances"
          >
            <v-icon left small>mdi-database-refresh</v-icon> ຄິດໄລ່ຍອດໜີ້ຄືນ (Rebuild)
          </v-btn>
          <v-btn color="success" outlined @click="exportToExcel" class="rounded-lg mr-2" :disabled="ledgerItems.length === 0">
            <v-icon left small>mdi-file-excel</v-icon> ສົ່ງອອກ Excel
          </v-btn>
          <v-btn color="info" outlined @click="printStatement" class="rounded-lg mr-2" :disabled="ledgerItems.length === 0">
            <v-icon left small>mdi-printer</v-icon> ພິມລາຍງານ
          </v-btn>
          <v-btn color="primary" depressed @click="loadData" :loading="isLoading" class="rounded-lg">
            <v-icon left small>mdi-refresh</v-icon> ໂຫຼດຂໍ້ມູນໃໝ່
          </v-btn>
        </div>
      </div>
    </header>

    <!-- KPI Summary Row with Item Mini-Breakdowns -->
    <v-row dense class="mb-4">
      <!-- KPI 1: Crates Owed -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 amber lighten-5 border-amber d-flex flex-column justify-space-between" outlined>
          <div>
            <div class="d-flex justify-space-between align-start">
              <div>
                <span class="caption grey--text text--darken-2 font-weight-bold">ຍອດໜີ້ລັງເປົ່າຄ້າງສົ່ງ</span>
                <div class="text-h5 font-weight-black amber--text text--darken-4 mt-1">
                  {{ numberWithCommas(totalCratesOwed) }}
                  <span class="text-caption font-weight-medium grey--text text--darken-2">ລັງ</span>
                </div>
                <span class="caption amber--text text--darken-3 font-weight-bold">Total Empty Crates Owed</span>
              </div>
              <v-avatar color="amber darken-2" size="40">
                <v-icon color="white">mdi-cube-outline</v-icon>
              </v-avatar>
            </div>

            <!-- Mini Breakdown of Crates -->
            <div v-if="cratesBreakdown.length > 0" class="mt-2 pt-1 border-top-dashed">
              <div
                v-for="(p, idx) in cratesBreakdown.slice(0, 2)"
                :key="'crate-break-' + idx"
                class="caption d-flex justify-space-between text-truncate amber--text text--darken-4 py-0"
              >
                <span class="text-truncate mr-1">• {{ p.productName }}</span>
                <span class="font-weight-bold">{{ numberWithCommas(p.totalOwed) }}</span>
              </div>
              <div v-if="cratesBreakdown.length > 2" class="caption grey--text font-italic">
                + ອີກ {{ cratesBreakdown.length - 2 }} ລາຍການ...
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- KPI 2: Bottles Owed -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 teal lighten-5 border-teal d-flex flex-column justify-space-between" outlined>
          <div>
            <div class="d-flex justify-space-between align-start">
              <div>
                <span class="caption grey--text text--darken-2 font-weight-bold">ຍອດໜີ້ແກ້ວເປົ່າຄ້າງສົ່ງ</span>
                <div class="text-h5 font-weight-black teal--text text--darken-4 mt-1">
                  {{ numberWithCommas(totalBottlesOwed) }}
                  <span class="text-caption font-weight-medium grey--text text--darken-2">ແກ້ວ</span>
                </div>
                <span class="caption teal--text text--darken-3 font-weight-bold">Total Empty Bottles Owed</span>
              </div>
              <v-avatar color="teal darken-2" size="40">
                <v-icon color="white">mdi-glass-mug-variant</v-icon>
              </v-avatar>
            </div>

            <!-- Mini Breakdown of Bottles -->
            <div v-if="bottlesBreakdown.length > 0" class="mt-2 pt-1 border-top-dashed">
              <div
                v-for="(p, idx) in bottlesBreakdown.slice(0, 2)"
                :key="'bottle-break-' + idx"
                class="caption d-flex justify-space-between text-truncate teal--text text--darken-4 py-0"
              >
                <span class="text-truncate mr-1">• {{ p.productName }}</span>
                <span class="font-weight-bold">{{ numberWithCommas(p.totalOwed) }}</span>
              </div>
              <div v-if="bottlesBreakdown.length > 2" class="caption grey--text font-italic">
                + ອີກ {{ bottlesBreakdown.length - 2 }} ລາຍການ...
              </div>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- KPI 3: Period Movement & Deposit -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 indigo lighten-5 border-indigo d-flex flex-column justify-space-between" outlined>
          <div>
            <div class="d-flex justify-space-between align-start">
              <div>
                <span class="caption grey--text text--darken-2 font-weight-bold">ການເຄື່ອນໄຫວໃນຊ່ວງເວລາ</span>
                <div class="text-h5 font-weight-black indigo--text text--darken-4 mt-1">
                  {{ periodSummary.netDelta > 0 ? '+' : '' }}{{ numberWithCommas(periodSummary.netDelta) }}
                  <span class="text-caption font-weight-medium grey--text text--darken-2">ໜ່ວຍ</span>
                </div>
                <div class="caption indigo--text text--darken-3 font-weight-bold mt-1">
                  ສົ່ງອອກ: +{{ numberWithCommas(periodSummary.deliveredOut) }} | ຮັບຄືນ: -{{ numberWithCommas(periodSummary.returnedIn) }}
                </div>
              </div>
              <v-avatar color="indigo darken-2" size="40">
                <v-icon color="white">mdi-swap-horizontal</v-icon>
              </v-avatar>
            </div>
            <div class="mt-2 pt-1 border-top-dashed caption grey--text text--darken-2">
              <span>ຄ່າມັດຈຳສະສົມ: </span>
              <span class="font-weight-bold indigo--text text--darken-4">{{ numberWithCommas(periodSummary.totalDeposit) }} LAK</span>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- KPI 4: Active Debtor Clients -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="pa-4 rounded-xl elevation-2 h-100 blue lighten-5 border-blue d-flex flex-column justify-space-between" outlined>
          <div>
            <div class="d-flex justify-space-between align-start">
              <div>
                <span class="caption grey--text text--darken-2 font-weight-bold">ລູກຄ້າທີ່ຕິດໜີ້ບັນຈຸພັນ</span>
                <div class="text-h5 font-weight-black blue--text text--darken-4 mt-1">
                  {{ numberWithCommas(debtorClientsCount) }}
                  <span class="text-caption font-weight-medium grey--text text--darken-2">ຮ້ານ</span>
                </div>
                <span class="caption blue--text text--darken-3 font-weight-bold">Active Debtor Clients</span>
              </div>
              <v-avatar color="blue darken-2" size="40">
                <v-icon color="white">mdi-account-group</v-icon>
              </v-avatar>
            </div>
            <div class="mt-2 pt-1 border-top-dashed caption blue--text text--darken-3 font-weight-medium">
              <span>ລວມ {{ packagingBreakdownList.filter(p => p.totalOwed > 0).length }} ລາຍການບັນຈຸພັນທີ່ຕິດໜີ້</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters Card -->
    <v-card outlined class="pa-4 mb-4 rounded-xl elevation-1">
      <v-row dense align="center">
        <!-- Customer Select -->
        <v-col cols="12" md="4">
          <v-autocomplete
            v-model="selectedClientId"
            :items="clientList"
            item-text="displayName"
            item-value="id"
            label="ເລືອກລູກຄ້າ (Select Client / Restaurant)"
            outlined
            dense
            hide-details
            @change="loadData"
            prepend-inner-icon="mdi-store"
            class="rounded-lg"
          ></v-autocomplete>
        </v-col>

        <!-- Start Date -->
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="startDate"
            type="date"
            label="ແຕ່ວັນທີ (From Date)"
            outlined
            dense
            hide-details
            @change="loadData"
            class="rounded-lg"
          ></v-text-field>
        </v-col>

        <!-- End Date -->
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="endDate"
            type="date"
            label="ຫາວັນທີ (To Date)"
            outlined
            dense
            hide-details
            @change="loadData"
            class="rounded-lg"
          ></v-text-field>
        </v-col>

        <!-- Search Action -->
        <v-col cols="12" md="2">
          <v-btn color="primary" block depressed @click="loadData" :loading="isLoading" class="rounded-lg">
            <v-icon left small>mdi-magnify</v-icon> ຄົ້ນຫາ
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- Specific Customer Profile Header Card (When Single Client Selected) -->
    <v-card
      v-if="selectedClientObj"
      class="pa-4 mb-4 rounded-xl elevation-2 amber lighten-5 border-amber"
      outlined
    >
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-avatar color="amber darken-3" size="48" class="mr-3 elevation-2">
            <v-icon color="white">mdi-store</v-icon>
          </v-avatar>
          <div>
            <div class="d-flex align-center flex-wrap">
              <span class="text-h6 font-weight-black amber--text text--darken-4 mr-2">
                {{ selectedClientObj.name }}
              </span>
              <v-chip x-small color="amber darken-4" dark class="font-weight-bold">
                {{ selectedClientObj.company || 'Wholesale Client' }}
              </v-chip>
            </div>
            <div class="caption grey--text text--darken-3 mt-1">
              <v-icon x-small color="grey darken-2">mdi-phone</v-icon> {{ selectedClientObj.telephone || 'ບໍ່ມີເບີໂທ' }}
            </div>
          </div>
        </div>

        <div class="d-flex align-center mt-2 mt-sm-0 flex-wrap">
          <div v-for="bal in packagingBreakdownList" :key="bal.productId || bal.productName" class="mr-3 mb-1 text-right">
            <span class="caption grey--text text--darken-2 font-weight-bold d-block">
              ໜີ້ຄ້າງ {{ bal.productName }}:
            </span>
            <v-chip
              :color="bal.totalOwed > 0 ? 'amber darken-3' : 'teal darken-2'"
              dark
              label
              class="font-weight-black text-body-2"
            >
              <v-icon x-small left>{{ getPackagingIcon(bal.productName) }}</v-icon>
              {{ numberWithCommas(bal.totalOwed) }}
            </v-chip>
          </div>
        </div>
      </div>
    </v-card>

    <!-- Dedicated Packaging Asset Breakdown Section -->
    <v-card outlined class="pa-4 mb-4 rounded-xl elevation-1 bg-gradient-breakdown">
      <div class="d-flex justify-space-between align-center mb-3 flex-wrap">
        <div class="d-flex align-center">
          <v-avatar size="36" color="teal darken-3" class="mr-3 elevation-1">
            <v-icon color="white">mdi-format-list-bulleted-type</v-icon>
          </v-avatar>
          <div>
            <div class="text-subtitle-1 font-weight-black primary--text d-flex align-center flex-wrap">
              <span>ສະຫຼຸບໜີ້ສິນບັນຈຸພັນແຍກຕາມແຕ່ລະລາຍການ (Packaging Breakdown by Asset)</span>
              <v-chip x-small color="teal darken-2" dark class="ml-2 font-weight-bold">
                {{ packagingBreakdownList.length }} ລາຍການບັນຈຸພັນ
              </v-chip>
            </div>
            <span class="caption grey--text text--darken-2">
              ລາຍລະອຽດຍອດໜີ້ຄ້າງສົ່ງສະສົມ ແລະ ຈຳນວນການເຄື່ອນໄຫວໃນຊ່ວງເວລາແຍກຕາມແຕ່ລະບັນຈຸພັນ
            </span>
          </div>
        </div>

        <div class="d-flex align-center caption grey--text text--darken-2 my-1">
          <v-chip x-small outlined color="amber darken-3" class="mr-2 font-weight-bold">
            <v-icon x-small left>mdi-alert-circle-outline</v-icon> ຍອດໜີ້ຄ້າງ (Owed)
          </v-chip>
          <v-chip x-small outlined color="teal darken-2" class="font-weight-bold">
            <v-icon x-small left>mdi-check-circle-outline</v-icon> ຊຳລະຄົບ (Settled)
          </v-chip>
        </div>
      </div>

      <!-- Breakdown Grid Cards for Each Packaging Product -->
      <v-row v-if="packagingBreakdownList.length > 0" dense>
        <v-col
          v-for="item in packagingBreakdownList"
          :key="'summary-card-' + (item.productId || item.productName)"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            outlined
            class="pa-3 rounded-lg fill-height d-flex flex-column justify-space-between border-item-card"
          >
            <div>
              <!-- Product Title & Barcode -->
              <div class="d-flex align-center justify-space-between mb-2">
                <div class="d-flex align-center text-truncate mr-2">
                  <v-avatar size="32" color="teal lighten-5" class="mr-2 flex-shrink-0">
                    <v-icon small color="teal darken-2">{{ getPackagingIcon(item.productName) }}</v-icon>
                  </v-avatar>
                  <div class="text-truncate">
                    <div class="font-weight-black text-body-2 text-truncate primary--text" :title="item.productName">
                      {{ item.productName }}
                    </div>
                    <span class="caption grey--text text-truncate">{{ item.barCode || 'ບັນຈຸພັນ' }}</span>
                  </div>
                </div>
                <v-chip
                  x-small
                  label
                  :color="item.totalOwed > 0 ? 'amber lighten-4' : 'teal lighten-4'"
                  :class="item.totalOwed > 0 ? 'amber--text text--darken-4' : 'teal--text text--darken-4'"
                  class="font-weight-black"
                >
                  {{ item.totalOwed > 0 ? '⚠️ ຄ້າງສົ່ງ' : '✅ ຄົບ' }}
                </v-chip>
              </div>

              <v-divider class="my-2"></v-divider>

              <!-- Outstanding Debt Balance Row -->
              <div class="d-flex justify-space-between align-center py-1">
                <span class="caption amber--text text--darken-4 font-weight-bold">
                  <v-icon x-small color="amber darken-4">mdi-scale-balance</v-icon> ຍອດໜີ້ຄ້າງສົ່ງ:
                </span>
                <span class="font-weight-black text-body-1" :class="item.totalOwed > 0 ? 'amber--text text--darken-4' : 'teal--text text--darken-4'">
                  {{ numberWithCommas(item.totalOwed) }}
                  <span class="caption font-weight-normal grey--text">ໜ່ວຍ</span>
                </span>
              </div>

              <!-- Debtor Clients Count Row (if all clients view) -->
              <div v-if="selectedClientId === 'all'" class="d-flex justify-space-between align-center py-1">
                <span class="caption grey--text text--darken-2 font-weight-medium">
                  <v-icon x-small color="grey">mdi-account-multiple</v-icon> ລູກຄ້າທີ່ຕິດໜີ້:
                </span>
                <span class="caption font-weight-bold primary--text">
                  {{ numberWithCommas(item.debtorCount) }} ຮ້ານ
                </span>
              </div>

              <!-- Period Movement Row -->
              <div class="d-flex justify-space-between align-center py-1 border-top-dashed mt-1">
                <span class="caption grey--text text--darken-2 font-weight-medium">
                  ການເຄື່ອນໄຫວໃນຊ່ວງ:
                </span>
                <div class="text-right caption">
                  <span class="red--text text--darken-3 font-weight-bold mr-1">+{{ numberWithCommas(item.periodDeliveredOut) }}</span>
                  <span class="grey--text">/</span>
                  <span class="teal--text text--darken-3 font-weight-bold ml-1">-{{ numberWithCommas(item.periodReturnedIn) }}</span>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <div v-else class="text-center py-4 grey--text">
        <v-icon large color="grey lighten-1">mdi-package-variant-closed</v-icon>
        <div class="caption mt-1">ບໍ່ມີຍອດໜີ້ສິນຄ້າບັນຈຸພັນຄ້າງສົ່ງ</div>
      </div>
    </v-card>

    <!-- Client Debt Summary Table (If All Clients View) -->
    <v-card v-if="selectedClientId === 'all' && allClientsBalances.length > 0" outlined class="rounded-xl overflow-hidden mb-4 elevation-1">
      <v-card-title class="pa-4 grey lighten-4 d-flex justify-space-between align-center">
        <div class="subtitle-1 font-weight-bold">
          <v-icon color="primary" left small>mdi-format-list-numbered</v-icon>
          ສະຫຼຸບຍອດໜີ້ຄ້າງບັນຈຸພັນແຕ່ລະລູກຄ້າ (Clients Outstanding Packaging Debt Summary)
        </div>
        <v-chip small color="primary" outlined class="font-weight-bold">
          {{ allClientsBalances.length }} ລາຍການ
        </v-chip>
      </v-card-title>

      <v-data-table
        :headers="clientSummaryHeaders"
        :items="allClientsBalances"
        :loading="isLoading"
        dense
        class="elevation-0"
      >
        <template v-slot:[`item.clientName`]="{ item }">
          <span class="font-weight-bold primary--text">{{ item.clientName }}</span>
          <span v-if="item.clientCompany" class="caption grey--text"> ({{ item.clientCompany }})</span>
        </template>

        <template v-slot:[`item.clientPhone`]="{ item }">
          <span class="caption">{{ item.clientPhone || '-' }}</span>
        </template>

        <template v-slot:[`item.balanceOwed`]="{ item }">
          <v-chip small :color="item.balanceOwed > 0 ? 'amber darken-3' : 'teal darken-2'" dark class="font-weight-black">
            {{ numberWithCommas(item.balanceOwed) }} ໜ່ວຍ
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn small text color="primary" @click="selectClient(item.clientId)" class="rounded-lg">
            <v-icon left x-small>mdi-eye</v-icon> ເບິ່ງລາຍລະອຽດ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Transaction Movement Ledger Table -->
    <v-card outlined class="rounded-xl overflow-hidden elevation-1">
      <v-card-title class="pa-4 grey lighten-4 d-flex justify-space-between align-center">
        <div class="subtitle-1 font-weight-bold">
          <v-icon color="primary" left small>mdi-history</v-icon>
          ປະຫວັດການເຄື່ອນໄຫວບັນຈຸພັນ (Packaging Movement History)
        </div>
        <div class="caption grey--text">
          ລວມ {{ ledgerItems.length }} ທຸລະກຳ
        </div>
      </v-card-title>

      <div class="table-responsive-wrapper">
        <v-data-table
          :headers="tableHeaders"
          :items="ledgerItems"
          :loading="isLoading"
          dense
          class="elevation-0"
          style="min-width: 1250px;"
        >
          <template v-slot:[`item.createdAt`]="{ item }">
            <span class="caption font-weight-medium">{{ formatDateTime(item.createdAt) }}</span>
          </template>

          <template v-slot:[`item.client.name`]="{ item }">
            <span class="font-weight-bold">{{ item.client ? item.client.name : '-' }}</span>
          </template>

          <template v-slot:[`item.transactionType`]="{ item }">
            <v-chip x-small :color="getTransactionTypeColor(item.transactionType)" dark class="font-weight-bold">
              {{ getTransactionTypeLabel(item.transactionType) }}
            </v-chip>
          </template>

          <template v-slot:[`item.packagingProduct.pro_name`]="{ item }">
            <div class="d-flex align-center py-1">
              <v-avatar size="28" color="teal lighten-5" class="mr-2 flex-shrink-0">
                <v-icon small color="teal darken-2">{{ getPackagingIcon(item.packagingProduct ? item.packagingProduct.pro_name : '') }}</v-icon>
              </v-avatar>
              <span class="font-weight-bold caption primary--text" style="word-break: break-word;">
                {{ item.packagingProduct ? item.packagingProduct.pro_name : '-' }}
              </span>
            </div>
          </template>

          <template v-slot:[`item.qtyChange`]="{ item }">
            <span :class="item.qtyChange > 0 ? 'error--text font-weight-black' : 'success--text font-weight-black'">
              {{ item.qtyChange > 0 ? `+${item.qtyChange}` : item.qtyChange }}
            </span>
          </template>

          <template v-slot:[`item.balanceAfter`]="{ item }">
            <span class="font-weight-black primary--text">
              {{ numberWithCommas(item.balanceAfter) }}
            </span>
          </template>

          <template v-slot:[`item.depositAmount`]="{ item }">
            <span v-if="item.depositAmount > 0" class="caption grey--text">
              {{ numberWithCommas(item.depositAmount) }} LAK
            </span>
            <span v-else class="caption grey--text">-</span>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<script>
import { printCustomerPackagingStatement } from '~/common/customerPackagingPrintTemplate'
import ExcelJS from 'exceljs'

export default {
  name: 'CustomerPackagingReport',
  layout: 'default',
  middleware: 'auths',
  data() {
    return {
      selectedClientId: 'all',
      clientList: [],
      currentBalances: [],
      allClientsBalances: [],
      ledgerItems: [],
      startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      isLoading: false,
      isRebuilding: false,
      clientSummaryHeaders: [
        { text: 'ຊື່ລູກຄ້າ / ຮ້ານ', value: 'clientName' },
        { text: 'ເບີໂທ', value: 'clientPhone', width: '130px' },
        { text: 'ບັນຈຸພັນ', value: 'packagingName', width: '240px' },
        { text: 'ຍອດໜີ້ຄ້າງ (Balance Owed)', value: 'balanceOwed', align: 'center', width: '160px' },
        { text: 'ຈັດການ', value: 'actions', align: 'center', width: '140px', sortable: false }
      ],
      tableHeaders: [
        { text: 'ວັນທີ/ເວລາ', value: 'createdAt', width: '150px' },
        { text: 'ລູກຄ້າ', value: 'client.name', width: '180px' },
        { text: 'ປະເພດທຸລະກຳ', value: 'transactionType', width: '150px' },
        { text: 'ບັນຈຸພັນ (Packaging Item)', value: 'packagingProduct.pro_name', width: '280px' },
        { text: 'ຈຳນວນປ່ຽນແປງ', value: 'qtyChange', align: 'center', width: '130px' },
        { text: 'ຍອດໜີ້ສະສົມ', value: 'balanceAfter', align: 'center', width: '130px' },
        { text: 'ຄ່າມັດຈຳ', value: 'depositAmount', align: 'end', width: '140px' },
        { text: 'ໝາຍເຫດ', value: 'notes', minWidth: '180px' }
      ]
    }
  },
  computed: {
    totalCratesOwed() {
      const target = this.selectedClientId === 'all' ? this.allClientsBalances : this.currentBalances
      return target
        .filter(b => {
          if (!b.packagingName || !(b.balanceOwed > 0)) return false
          const lower = b.packagingName.toLowerCase()
          return lower.includes('ລັງ') || lower.includes('crate') || lower.includes('box')
        })
        .reduce((sum, b) => sum + (b.balanceOwed || 0), 0)
    },
    totalBottlesOwed() {
      const target = this.selectedClientId === 'all' ? this.allClientsBalances : this.currentBalances
      return target
        .filter(b => {
          if (!b.packagingName || !(b.balanceOwed > 0)) return false
          const lower = b.packagingName.toLowerCase()
          return lower.includes('ແກ້ວ') || lower.includes('ຂວດ') || lower.includes('bottle')
        })
        .reduce((sum, b) => sum + (b.balanceOwed || 0), 0)
    },
    debtorClientsCount() {
      if (this.selectedClientId !== 'all') {
        return this.currentBalances.some(b => b.balanceOwed > 0) ? 1 : 0
      }
      const uniqueClients = new Set(
        this.allClientsBalances
          .filter(b => b.balanceOwed > 0)
          .map(b => b.clientId)
      )
      return uniqueClients.size
    },
    packagingBreakdownList() {
      const target = this.selectedClientId === 'all' ? this.allClientsBalances : this.currentBalances
      const map = {}
      for (const b of target) {
        const id = b.packagingProductId || b.packagingName
        if (!id) continue
        if (!map[id]) {
          map[id] = {
            productId: b.packagingProductId,
            productName: b.packagingName || 'ບັນຈຸພັນ',
            barCode: b.barCode,
            totalOwed: 0,
            debtorClients: new Set(),
            periodDeliveredOut: 0,
            periodReturnedIn: 0
          }
        }
        const owed = Number(b.balanceOwed) || 0
        if (owed > 0) {
          map[id].totalOwed += owed
          if (b.clientId) {
            map[id].debtorClients.add(b.clientId)
          }
        }
      }

      for (const item of this.ledgerItems) {
        const pId = item.packagingProductId || item.packagingProduct?.id
        const pName = item.packagingProduct?.pro_name
        const entry = (pId && map[pId]) || Object.values(map).find(m => m.productName === pName)
        if (entry) {
          const qty = Number(item.qtyChange) || 0
          if (item.transactionType === 'DELIVERED_OUT' || qty > 0) {
            entry.periodDeliveredOut += Math.abs(qty)
          } else if (item.transactionType === 'RETURNED_IN' || qty < 0) {
            entry.periodReturnedIn += Math.abs(qty)
          }
        }
      }

      return Object.values(map).map(m => ({
        ...m,
        debtorCount: m.debtorClients.size > 0 ? m.debtorClients.size : (m.totalOwed > 0 ? 1 : 0)
      })).sort((a, b) => b.totalOwed - a.totalOwed)
    },
    cratesBreakdown() {
      return this.packagingBreakdownList.filter(p => {
        const lower = (p.productName || '').toLowerCase()
        return lower.includes('ລັງ') || lower.includes('crate') || lower.includes('box')
      })
    },
    bottlesBreakdown() {
      return this.packagingBreakdownList.filter(p => {
        const lower = (p.productName || '').toLowerCase()
        return lower.includes('ແກ້ວ') || lower.includes('ຂວດ') || lower.includes('bottle')
      })
    },
    periodSummary() {
      let deliveredOut = 0
      let returnedIn = 0
      let totalDeposit = 0
      for (const item of this.ledgerItems) {
        const qty = Number(item.qtyChange) || 0
        if (item.transactionType === 'DELIVERED_OUT' || qty > 0) {
          deliveredOut += Math.abs(qty)
        } else if (item.transactionType === 'RETURNED_IN' || qty < 0) {
          returnedIn += Math.abs(qty)
        }
        totalDeposit += Number(item.depositAmount) || 0
      }
      return {
        deliveredOut,
        returnedIn,
        netDelta: deliveredOut - returnedIn,
        totalDeposit
      }
    },
    selectedClientObj() {
      if (!this.selectedClientId || this.selectedClientId === 'all') return null
      return this.clientList.find(c => c.id === this.selectedClientId)
    }
  },
  async created() {
    await this.loadClients()
    await this.loadData()
  },
  methods: {
    numberWithCommas(value) {
      if (value === undefined || value === null) return '0'
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    formatDateTime(dt) {
      if (!dt) return '-'
      return dt.replace('T', ' ').substr(0, 16)
    },
    getTransactionTypeColor(type) {
      switch (type) {
        case 'DELIVERED_OUT': return 'amber darken-3'
        case 'RETURNED_IN': return 'teal darken-2'
        case 'PAID_DEPOSIT': return 'blue darken-2'
        case 'REFUNDED_DEPOSIT': return 'purple darken-2'
        case 'WRITE_OFF': return 'error'
        default: return 'grey'
      }
    },
    getTransactionTypeLabel(type) {
      switch (type) {
        case 'DELIVERED_OUT': return 'ສົ່ງອອກ (ຕິດໜີ້)'
        case 'RETURNED_IN': return 'ຮັບຄືນ (ຕັດໜີ້)'
        case 'PAID_DEPOSIT': return 'ຈ່າຍມັດຈຳ'
        case 'REFUNDED_DEPOSIT': return 'ຄືນມັດຈຳ'
        case 'WRITE_OFF': return 'ຕັດສູນ'
        default: return type
      }
    },
    getPackagingIcon(name) {
      if (!name) return 'mdi-package-variant-closed'
      const lower = name.toLowerCase()
      if (lower.includes('ລັງ') || lower.includes('crate') || lower.includes('box')) return 'mdi-cube-outline'
      if (lower.includes('ແກ້ວ') || lower.includes('ຂວດ') || lower.includes('bottle')) return 'mdi-glass-mug-variant'
      if (lower.includes('ຖັງ') || lower.includes('keg') || lower.includes('barrel') || lower.includes('drum')) return 'mdi-barrel'
      if (lower.includes('ກະຕ່າ') || lower.includes('basket')) return 'mdi-basket-outline'
      if (lower.includes('ພາເລັດ') || lower.includes('pallet')) return 'mdi-pallet'
      return 'mdi-package-variant-closed'
    },
    async loadClients() {
      try {
        const res = await this.$axios.get('/api/client/find')
        const clients = (Array.isArray(res.data) ? res.data : (res.data?.rows || [])).map(c => ({
          id: c.id,
          name: c.name,
          company: c.company,
          telephone: c.telephone,
          displayName: `${c.name || ''} ${c.company ? '- ' + c.company : ''} (${c.telephone || 'ບໍ່ມີເບີ'})`
        }))
        this.clientList = [
          { id: 'all', displayName: '👥 ລູກຄ້າທັງໝົດ (All Customers Summary)' },
          ...clients
        ]
      } catch (err) {
        console.error('Failed to load clients:', err)
      }
    },
    selectClient(clientId) {
      this.selectedClientId = clientId
      this.loadData()
    },
    async loadData() {
      this.isLoading = true
      try {
        if (!this.selectedClientId || this.selectedClientId === 'all') {
          // Load all clients balances and ledger
          const [summaryRes, ledgerRes] = await Promise.all([
            this.$axios.get('/api/packaging/customer/summary'),
            this.$axios.get(`/api/packaging/customer/ledger?startDate=${this.startDate}&endDate=${this.endDate}`)
          ])
          this.allClientsBalances = summaryRes.data || []
          this.currentBalances = summaryRes.data || []
          this.ledgerItems = ledgerRes.data || []
        } else {
          // Load specific client balance and ledger
          const [balRes, ledgerRes] = await Promise.all([
            this.$axios.get(`/api/packaging/customer/balance/${this.selectedClientId}`),
            this.$axios.get(`/api/packaging/customer/ledger/${this.selectedClientId}?startDate=${this.startDate}&endDate=${this.endDate}`)
          ])
          this.currentBalances = balRes.data || []
          this.ledgerItems = ledgerRes.data || []
        }
      } catch (err) {
        console.error('Failed to load customer packaging data:', err)
      } finally {
        this.isLoading = false
      }
    },
    loadLedger() {
      return this.loadData()
    },
    async confirmRebuildBalances() {
      const isAll = !this.selectedClientId || this.selectedClientId === 'all'
      const clientName = isAll ? 'ລູກຄ້າທັງໝົດ' : (this.selectedClientObj ? this.selectedClientObj.displayName : `ລູກຄ້າ #${this.selectedClientId}`)

      const promptMsg = isAll
        ? 'ລະບົບຈະຄິດໄລ່ຍອດໜີ້ສະສົມ (balanceAfter) ຄືນໃໝ່ທັງໝົດຕາມລຳດັບທຸລະກຳແຕ່ຕົ້ນຈົນເຖິງປັດຈຸບັນ. ທ່ານຕ້ອງການດຳເນີນການຕໍ່ຫຼືບໍ່?'
        : `ລະບົບຈະຄິດໄລ່ຍອດໜີ້ສະສົມ (balanceAfter) ຂອງ [${clientName}] ຄືນໃໝ່ຕາມລຳດັບທຸລະກຳແຕ່ຕົ້ນ. ທ່ານຕ້ອງການດຳເນີນການຕໍ່ຫຼືບໍ່?`

      let confirmed = false
      if (this.$swal) {
        const res = await this.$swal({
          title: 'ຢືນຢັນການຄິດໄລ່ຍອດໜີ້ຄືນ (Rebuild)?',
          text: promptMsg,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d97706',
          cancelButtonColor: '#94a3b8',
          confirmButtonText: 'ແມ່ນແລ້ວ, ຄິດໄລ່ຄືນ',
          cancelButtonText: 'ຍົກເລີກ'
        })
        confirmed = res.isConfirmed
      } else {
        confirmed = confirm(promptMsg)
      }

      if (!confirmed) return

      this.isRebuilding = true
      try {
        const payload = {
          clientId: isAll ? null : this.selectedClientId
        }
        const res = await this.$axios.post('/api/packaging/customer/rebuild-balances', payload)
        if (res.data?.success) {
          const successMsg = `ຄິດໄລ່ຍອດໜີ້ຄືນສຳເລັດ! ກວດສອບ ${res.data.accountsChecked} ບັນຊີ, ແກ້ໄຂແລ້ວ ${res.data.recordsUpdated} ລາຍການ.`
          if (this.$swal) {
            this.$swal({
              icon: 'success',
              title: 'ສຳເລັດ',
              text: successMsg,
              timer: 3500
            })
          } else if (this.$toast) {
            this.$toast.success(successMsg)
          }
          await this.loadData()
        }
      } catch (err) {
        console.error('Rebuild balanceAfter error:', err)
        const errMsg = 'ເກີດຂໍ້ຜິດພາດໃນການຄິດໄລ່ຍອດໜີ້ຄືນ: ' + (err.response?.data?.message || err.message)
        if (this.$swal) {
          this.$swal({ icon: 'error', title: 'ຜິດພາດ', text: errMsg })
        } else if (this.$toast) {
          this.$toast.error(errMsg)
        }
      } finally {
        this.isRebuilding = false
      }
    },
    printStatement() {
      const isAll = !this.selectedClientId || this.selectedClientId === 'all'
      const client = isAll ? null : this.clientList.find(c => c.id === this.selectedClientId)

      const company = this.$store?.state?.company || {
        name: 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency',
        tel: '020-XXXXXXXX',
        address: 'ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ'
      }

      const user = this.$store?.state?.auth?.user || {
        name: this.$auth?.user?.name || 'Admin'
      }

      printCustomerPackagingStatement({
        isAllClients: isAll,
        selectedClient: client,
        currentBalances: this.currentBalances,
        allClientsBalances: this.allClientsBalances,
        ledgerItems: this.ledgerItems,
        startDate: this.startDate,
        endDate: this.endDate,
        companyData: company,
        user: user,
        totalCratesOwed: this.totalCratesOwed,
        totalBottlesOwed: this.totalBottlesOwed,
        debtorClientsCount: this.debtorClientsCount
      })
    },
    async exportToExcel() {
      try {
        const workbook = new ExcelJS.Workbook()
        const worksheet = workbook.addWorksheet('Packaging Debt Statement')

        const isAll = !this.selectedClientId || this.selectedClientId === 'all'
        const client = isAll ? null : this.clientList.find(c => c.id === this.selectedClientId)
        const clientName = client ? client.displayName : 'ທັງໝົດ (All)'

        // Title Rows
        const titleRow = worksheet.addRow(['ລາຍງານໜີ້ສິນບັນຈຸພັນລູກຄ້າ / Customer Packaging Debt Statement'])
        titleRow.font = { size: 14, bold: true, color: { argb: 'FF0F766E' } }
        worksheet.addRow([`ລູກຄ້າ: ${clientName}`, `ແຕ່ວັນທີ: ${this.startDate}`, `ຫາວັນທີ: ${this.endDate}`])
        worksheet.addRow([])

        // Table Headers
        const headerRow = worksheet.addRow([
          'ລ/ດ (No)',
          'ວັນທີ/ເວລາ (Date)',
          'ລູກຄ້າ (Client)',
          'ປະເພດທຸລະກຳ (Type)',
          'ບັນຈຸພັນ (Packaging Item)',
          'ຈຳນວນປ່ຽນແປງ (Qty Change)',
          'ຍອດໜີ້ສະສົມ (Running Balance)',
          'ຄ່າມັດຈຳ (Deposit LAK)',
          'ໝາຍເຫດ (Notes)'
        ])

        headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        headerRow.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF0F766E' }
        }

        // Add Data Rows
        this.ledgerItems.forEach((item, idx) => {
          worksheet.addRow([
            idx + 1,
            this.formatDateTime(item.createdAt),
            item.client?.name || '-',
            this.getTransactionTypeLabel(item.transactionType),
            item.packagingProduct?.pro_name || '-',
            item.qtyChange > 0 ? `+${item.qtyChange}` : item.qtyChange,
            item.balanceAfter,
            Number(item.depositAmount) || 0,
            item.notes || '-'
          ])
        })

        // Auto column width
        worksheet.columns.forEach(column => {
          let maxLength = 0
          column.eachCell({ includeEmpty: true }, cell => {
            const columnLength = cell.value ? cell.value.toString().length : 10
            if (columnLength > maxLength) {
              maxLength = columnLength
            }
          })
          column.width = Math.min(Math.max(maxLength + 3, 12), 40)
        })

        const buffer = await workbook.xlsx.writeBuffer()
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Packaging_Debt_Statement_${this.startDate}_${this.endDate}.xlsx`
        a.click()
        window.URL.revokeObjectURL(url)
      } catch (err) {
        console.error('Excel export error:', err)
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.subtitle-1,
.subtitle-2,
::v-deep .subtitle-1,
::v-deep .subtitle-2 {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.caption,
.text-caption,
::v-deep .caption,
::v-deep .text-caption {
  font-size: 0.75rem !important;
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.table-responsive-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.border-amber {
  border: 1px solid #ffe082 !important;
}
.border-teal {
  border: 1px solid #b2dfdb !important;
}
.border-blue {
  border: 1px solid #bbdefb !important;
}
.border-indigo {
  border: 1px solid #c5cae9 !important;
}
.border-top-dashed {
  border-top: 1px dashed #cbd5e1 !important;
}
.bg-gradient-breakdown {
  background: linear-gradient(135deg, #f8fafc 0%, #f0fdfa 100%) !important;
  border: 1.5px solid #ccfbf1 !important;
}
.border-item-card {
  border: 1px solid #e2e8f0 !important;
  background-color: #ffffff !important;
  transition: all 0.2s ease-in-out;
}
.border-item-card:hover {
  border-color: #0d9488 !important;
  box-shadow: 0 4px 12px rgba(13, 148, 136, 0.12) !important;
}

@media print {
  .v-btn,
  .v-text-field,
  .v-autocomplete,
  header {
    display: none !important;
  }
}
</style>
