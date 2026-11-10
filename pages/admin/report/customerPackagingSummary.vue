<template>
  <div class="customer-packaging-summary pa-4">
    <!-- Top Header -->
    <v-card outlined class="pa-4 mb-4 rounded-xl elevation-1 bg-white">
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-avatar color="teal lighten-5" size="48" class="mr-3">
            <v-icon color="teal darken-2" size="28">mdi-package-variant-closed</v-icon>
          </v-avatar>
          <div>
            <h1 class="text-h5 font-weight-black teal--text text--darken-4 mb-0">
              ລາຍງານສະຫຼຸບດຸນດ່ຽງບັນຈຸພັນ ແລະ ໜີ້ລູກຄ້າ
            </h1>
            <span class="text-caption grey--text text--darken-1">
              Customer Packaging Balance, Stock & Movement Overview (ສາງ, ໜີ້ລູກຄ້າ ແລະ ການເຄື່ອນໄຫວ)
            </span>
          </div>
        </div>

        <div class="d-flex align-center flex-wrap mt-3 mt-md-0">
          <v-btn
            color="success"
            outlined
            class="rounded-lg mr-2"
            :loading="isExporting"
            @click="exportToExcel"
          >
            <v-icon left small>mdi-file-excel</v-icon>
            Export Excel
          </v-btn>
          <v-btn
            color="primary"
            outlined
            class="rounded-lg mr-2"
            @click="printReport"
          >
            <v-icon left small>mdi-printer</v-icon>
            ພິມລາຍງານ (Print)
          </v-btn>
          <v-btn
            color="teal darken-2"
            dark
            depressed
            class="rounded-lg"
            :loading="isLoading"
            @click="loadData"
          >
            <v-icon left small>mdi-refresh</v-icon>
            ໂຫຼດໃໝ່ (Refresh)
          </v-btn>
        </div>
      </div>

      <v-divider class="my-3"></v-divider>

      <!-- Criteria Date Range & Filters Bar -->
      <v-row dense align="center">
        <!-- Start Date -->
        <v-col cols="12" sm="6" md="3">
          <v-menu
            v-model="menuStartDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                label="ແຕ່ວັນທີ (Start Date)"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                dense
                hide-details
                v-bind="attrs"
                v-on="on"
                class="rounded-lg"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="startDate"
              no-title
              scrollable
              @input="menuStartDate = false; loadData()"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <!-- End Date -->
        <v-col cols="12" sm="6" md="3">
          <v-menu
            v-model="menuEndDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                label="ຫາວັນທີ (End Date)"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                dense
                hide-details
                v-bind="attrs"
                v-on="on"
                class="rounded-lg"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="endDate"
              no-title
              scrollable
              @input="menuEndDate = false; loadData()"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <!-- Location Filter -->
        <v-col cols="12" sm="6" md="3">
          <v-select
            v-model="selectedLocationId"
            :items="locationOptions"
            item-text="name"
            item-value="id"
            label="ສາຂາ / ສາງ (Location)"
            prepend-inner-icon="mdi-warehouse"
            outlined
            dense
            hide-details
            class="rounded-lg"
            @change="loadData"
          ></v-select>
        </v-col>

        <!-- Quick Search -->
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="searchKeyword"
            label="ຄົ້ນຫາສິນຄ້າ ຫຼື ລູກຄ້າ (Search)"
            prepend-inner-icon="mdi-magnify"
            clearable
            outlined
            dense
            hide-details
            class="rounded-lg"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>

    <!-- Top KPI Cards -->
    <v-row dense class="mb-4">
      <v-col cols="12" sm="6" md="3">
        <v-card outlined class="rounded-xl pa-4 bg-teal-soft">
          <div class="d-flex justify-space-between align-center">
            <div>
              <div class="caption font-weight-bold grey--text text--darken-2">📦 ໃນສາງທັງໝົດ (Stock On-Hand)</div>
              <div class="text-h5 font-weight-black teal--text text--darken-3 mt-1">
                {{ numberWithCommas(kpiTotals.totalStockWarehouse) }}
              </div>
            </div>
            <v-avatar color="teal lighten-4" size="44">
              <v-icon color="teal darken-2">mdi-store</v-icon>
            </v-avatar>
          </div>
          <div class="caption text--secondary mt-2">ລັງ ແລະ ແກ້ວເປົ່າພ້ອມໝູນວຽນ</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card outlined class="rounded-xl pa-4 bg-amber-soft">
          <div class="d-flex justify-space-between align-center">
            <div>
              <div class="caption font-weight-bold grey--text text--darken-2">🏪 ໜີ້ລູກຄ້າຄ້າງທັງໝົດ (Customer Debt)</div>
              <div class="text-h5 font-weight-black amber--text text--darken-4 mt-1">
                {{ numberWithCommas(kpiTotals.totalCustomerDebt) }}
              </div>
            </div>
            <v-avatar color="amber lighten-4" size="44">
              <v-icon color="amber darken-4">mdi-account-clock</v-icon>
            </v-avatar>
          </div>
          <div class="caption text--secondary mt-2">ຈາກລູກຄ້າ {{ debtorClientsCount }} ຮ້ານ</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card outlined class="rounded-xl pa-4 bg-blue-soft">
          <div class="d-flex justify-space-between align-center">
            <div>
              <div class="caption font-weight-bold grey--text text--darken-2">📥 ຮັບຄືນໃນງວດ (Movement IN)</div>
              <div class="text-h5 font-weight-black blue--text text--darken-3 mt-1">
                +{{ numberWithCommas(kpiTotals.periodReturnedIn) }}
              </div>
            </div>
            <v-avatar color="blue lighten-4" size="44">
              <v-icon color="blue darken-2">mdi-arrow-bottom-left-bold-box</v-icon>
            </v-avatar>
          </div>
          <div class="caption text--secondary mt-2">ຮັບຄືນຈາກລູກຄ້າຊ່ວງວັນທີເລືອກ</div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card outlined class="rounded-xl pa-4 bg-purple-soft">
          <div class="d-flex justify-space-between align-center">
            <div>
              <div class="caption font-weight-bold grey--text text--darken-2">📤 ສົ່ງອອກໃນງວດ (Movement OUT)</div>
              <div class="text-h5 font-weight-black deep-purple--text text--darken-2 mt-1">
                -{{ numberWithCommas(kpiTotals.periodDeliveredOut) }}
              </div>
            </div>
            <v-avatar color="purple lighten-4" size="44">
              <v-icon color="deep-purple darken-2">mdi-arrow-top-right-bold-box</v-icon>
            </v-avatar>
          </div>
          <div class="caption text--secondary mt-2">ສົ່ງອອກໃຫ້ລູກຄ້າຊ່ວງວັນທີເລືອກ</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- SECTION 1: PACKAGING PRODUCT & CATEGORY SUMMARY TABLE -->
    <v-card outlined class="rounded-xl mb-4 bg-white elevation-1">
      <div class="pa-4 d-flex justify-space-between align-center flex-wrap border-bottom">
        <div class="d-flex align-center">
          <v-icon color="teal darken-2" class="mr-2">mdi-format-list-bulleted-type</v-icon>
          <div>
            <div class="text-subtitle-1 font-weight-black teal--text text--darken-4">
              1. ຕາຕະລາງດຸນດ່ຽງບັນຈຸພັນຕາມໝວດໝູ່ (Packaging Assets: Stock vs Customer Ledger vs Movement)
            </div>
            <div class="text-caption grey--text">
              ສະຫຼຸບຈຳນວນໃນສາງ, ໜີ້ຄ້າງໃນບັນຊີລູກຄ້າ, ແລະ ຍອດເຄື່ອນໄຫວເຂົ້າ-ອອກຕາມຊ່ວງວັນທີ
            </div>
          </div>
        </div>
        <v-chip color="teal" outlined label class="font-weight-bold mt-2 mt-sm-0">
          ທັງໝົດ {{ filteredPackagingList.length }} ລາຍການບັນຈຸພັນ
        </v-chip>
      </div>

      <div class="table-responsive-wrapper">
        <v-simple-table dense class="custom-report-table">
          <thead>
            <tr class="teal lighten-5">
              <th class="text-center font-weight-bold" style="width: 50px;">ລ/ດ</th>
              <th class="font-weight-bold">ໝວດໝູ່ (Category)</th>
              <th class="font-weight-bold">ລາຍການບັນຈຸພັນ (Packaging Item)</th>
              <th class="text-center font-weight-bold">ບາໂຄ້ດ (Barcode)</th>
              <th class="text-right font-weight-bold teal--text text--darken-3">📦 ໃນສາງ (Stock)</th>
              <th class="text-right font-weight-bold amber--text text--darken-4">🏪 ໜີ້ລູກຄ້າ (Customer Ledger)</th>
              <th class="text-right font-weight-bold blue--text text--darken-3">📥 ຮັບຄືນ (Movement IN)</th>
              <th class="text-right font-weight-bold deep-purple--text text--darken-2">📤 ສົ່ງອອກ (Movement OUT)</th>
              <th class="text-right font-weight-bold">⚖️ ດຸນງວດ (Net Delta)</th>
              <th class="text-right font-weight-bold primary--text">🔄 ລວມໝູນວຽນ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="isLoading">
              <td colspan="10" class="text-center py-6">
                <v-progress-circular indeterminate color="teal" size="32"></v-progress-circular>
                <div class="caption grey--text mt-2">ກຳລັງໂຫຼດຂໍ້ມູນດຸນດ່ຽງບັນຈຸພັນ...</div>
              </td>
            </tr>
            <tr v-else-if="filteredPackagingList.length === 0">
              <td colspan="10" class="text-center py-6 grey--text">
                ບໍ່ພົບຂໍ້ມູນບັນຈຸພັນຕາມເງື່ອນໄຂທີ່ເລືອກ
              </td>
            </tr>
            <tr
              v-for="(row, idx) in filteredPackagingList"
              :key="row.productId"
              class="table-row-hover"
            >
              <td class="text-center font-weight-medium">{{ idx + 1 }}</td>
              <td>
                <v-chip x-small label color="grey lighten-3" class="font-weight-bold">
                  {{ row.categoryName }}
                </v-chip>
              </td>
              <td>
                <div class="font-weight-bold primary--text">{{ row.name }}</div>
              </td>
              <td class="text-center caption grey--text text--darken-1">{{ row.barCode || '-' }}</td>
              <!-- In Stock -->
              <td class="text-right font-weight-bold teal--text text--darken-2">
                {{ numberWithCommas(row.emptyStockWarehouse) }}
              </td>
              <!-- In Customer Ledger -->
              <td class="text-right font-weight-bold amber--text text--darken-4">
                {{ numberWithCommas(row.wholesaleCustomerDebt) }}
              </td>
              <!-- Movement IN -->
              <td class="text-right font-weight-bold blue--text text--darken-2">
                +{{ numberWithCommas(row.periodReturnedIn) }}
              </td>
              <!-- Movement OUT -->
              <td class="text-right font-weight-bold deep-purple--text text--darken-2">
                -{{ numberWithCommas(row.periodDeliveredOut) }}
              </td>
              <!-- Net Movement -->
              <td
                class="text-right font-weight-bold"
                :class="row.netMovement >= 0 ? 'success--text' : 'error--text'"
              >
                {{ row.netMovement > 0 ? '+' : '' }}{{ numberWithCommas(row.netMovement) }}
              </td>
              <!-- Total Circulation -->
              <td class="text-right font-weight-black primary--text">
                {{ numberWithCommas(row.totalCirculation) }}
              </td>
            </tr>
          </tbody>
          <!-- Summary Footer -->
          <tfoot v-if="filteredPackagingList.length > 0">
            <tr class="teal lighten-5 font-weight-black">
              <td colspan="4" class="text-center font-weight-black teal--text text--darken-4">
                ລວມຍອດທັງໝົດ (Grand Total):
              </td>
              <td class="text-right teal--text text--darken-4 font-weight-black">
                {{ numberWithCommas(kpiTotals.totalStockWarehouse) }}
              </td>
              <td class="text-right amber--text text--darken-4 font-weight-black">
                {{ numberWithCommas(kpiTotals.totalCustomerDebt) }}
              </td>
              <td class="text-right blue--text text--darken-4 font-weight-black">
                +{{ numberWithCommas(kpiTotals.periodReturnedIn) }}
              </td>
              <td class="text-right deep-purple--text text--darken-4 font-weight-black">
                -{{ numberWithCommas(kpiTotals.periodDeliveredOut) }}
              </td>
              <td
                class="text-right font-weight-black"
                :class="kpiTotals.totalNetMovement >= 0 ? 'success--text' : 'error--text'"
              >
                {{ kpiTotals.totalNetMovement > 0 ? '+' : '' }}{{ numberWithCommas(kpiTotals.totalNetMovement) }}
              </td>
              <td class="text-right primary--text font-weight-black">
                {{ numberWithCommas(kpiTotals.totalStockWarehouse + kpiTotals.totalCustomerDebt) }}
              </td>
            </tr>
          </tfoot>
        </v-simple-table>
      </div>
    </v-card>

    <!-- SECTION 2: CUSTOMER OUTSTANDING DEBT TABLE -->
    <v-card outlined class="rounded-xl bg-white elevation-1">
      <div class="pa-4 d-flex justify-space-between align-center flex-wrap border-bottom">
        <div class="d-flex align-center">
          <v-icon color="amber darken-3" class="mr-2">mdi-account-group</v-icon>
          <div>
            <div class="text-subtitle-1 font-weight-black amber--text text--darken-4">
              2. ຕາຕະລາງລູກຄ້າ ແລະ ຍອດໜີ້ຄ້າງບັນຈຸພັນ (Customer Packaging Outstanding Debt & Movements)
            </div>
            <div class="text-caption grey--text">
              ລາຍຊື່ລູກຄ້າທັງໝົດທີ່ມີໜີ້ບັນຈຸພັນຄ້າງ ຫຼື ມີການເຄື່ອນໄຫວໃນຊ່ວງວັນທີທີ່ເລືອກ
            </div>
          </div>
        </div>
        <div class="d-flex align-center mt-2 mt-sm-0">
          <v-text-field
            v-model="customerTableSearch"
            prepend-inner-icon="mdi-magnify"
            placeholder="ຄົ້ນຫາຊື່ລູກຄ້າ / ເບີໂທ..."
            outlined
            dense
            hide-details
            clearable
            class="rounded-lg mr-2"
            style="max-width: 260px;"
          ></v-text-field>
          <v-chip color="amber darken-3" outlined label class="font-weight-bold">
            {{ filteredCustomerRows.length }} ລູກຄ້າ
          </v-chip>
        </div>
      </div>

      <div class="table-responsive-wrapper">
        <v-simple-table dense class="custom-report-table">
          <thead>
            <tr class="amber lighten-5">
              <th class="text-center font-weight-bold" style="width: 50px;">ລ/ດ</th>
              <th class="font-weight-bold">ຊື່ລູກຄ້າ (Customer)</th>
              <th class="font-weight-bold">ຮ້ານ / ບໍລິສັດ (Company)</th>
              <th class="font-weight-bold">ເບີໂທ (Phone)</th>
              <th class="font-weight-bold">ລາຍລະອຽດໜີ້ຕາມບັນຈຸພັນ (Outstanding by Item)</th>
              <th class="text-right font-weight-bold amber--text text--darken-4">ລວມໜີ້ຄ້າງ (Total Debt)</th>
              <th class="text-right font-weight-bold deep-purple--text text--darken-2">📤 ສົ່ງອອກ (Out)</th>
              <th class="text-right font-weight-bold blue--text text--darken-3">📥 ຮັບຄືນ (In)</th>
              <th class="text-center font-weight-bold" style="width: 120px;">ຈັດການ (Action)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="isLoading">
              <td colspan="9" class="text-center py-6">
                <v-progress-circular indeterminate color="amber darken-3" size="32"></v-progress-circular>
                <div class="caption grey--text mt-2">ກຳລັງໂຫຼດລາຍຊື່ລູກຄ້າຕິດໜີ້...</div>
              </td>
            </tr>
            <tr v-else-if="filteredCustomerRows.length === 0">
              <td colspan="9" class="text-center py-6 grey--text">
                ບໍ່ມີລູກຄ້າຕິດໜີ້ບັນຈຸພັນ ຫຼື ບໍ່ພົບຂໍ້ມູນຕາມຄຳຄົ້ນຫາ
              </td>
            </tr>
            <tr
              v-for="(client, idx) in filteredCustomerRows"
              :key="client.clientId"
              class="table-row-hover"
            >
              <td class="text-center font-weight-medium">{{ idx + 1 }}</td>
              <td>
                <div class="font-weight-bold grey--text text--darken-3">{{ client.clientName }}</div>
              </td>
              <td>{{ client.clientCompany || '-' }}</td>
              <td>
                <span class="caption">{{ client.clientPhone || '-' }}</span>
              </td>
              <!-- Packaging breakdown chips -->
              <td>
                <div class="d-flex flex-wrap" style="gap: 4px;">
                  <v-chip
                    v-for="item in client.items"
                    :key="item.packagingProductId"
                    x-small
                    label
                    color="amber lighten-4"
                    class="amber--text text--darken-4 font-weight-bold"
                  >
                    {{ item.packagingName }}: {{ numberWithCommas(item.balanceOwed) }}
                  </v-chip>
                  <span v-if="client.items.length === 0" class="caption grey--text">
                    ບໍ່ມີໜີ້ຄ້າງປັດຈຸບັນ
                  </span>
                </div>
              </td>
              <!-- Total Debt Owed -->
              <td class="text-right font-weight-black amber--text text--darken-4">
                {{ numberWithCommas(client.totalBalanceOwed) }}
              </td>
              <!-- Period Out -->
              <td class="text-right font-weight-bold deep-purple--text text--darken-2">
                {{ client.periodOut > 0 ? `-${numberWithCommas(client.periodOut)}` : '0' }}
              </td>
              <!-- Period In -->
              <td class="text-right font-weight-bold blue--text text--darken-2">
                {{ client.periodIn > 0 ? `+${numberWithCommas(client.periodIn)}` : '0' }}
              </td>
              <!-- Actions -->
              <td class="text-center">
                <v-btn
                  x-small
                  color="teal darken-2"
                  outlined
                  class="rounded-pill font-weight-bold"
                  @click="openCustomerLedger(client)"
                >
                  <v-icon left x-small>mdi-history</v-icon>
                  Ledger
                </v-btn>
              </td>
            </tr>
          </tbody>
          <!-- Footer -->
          <tfoot v-if="filteredCustomerRows.length > 0">
            <tr class="amber lighten-5 font-weight-black">
              <td colspan="5" class="text-center font-weight-black amber--text text--darken-4">
                ລວມຍອດໜີ້ລູກຄ້າທັງໝົດ (Total Client Debt):
              </td>
              <td class="text-right amber--text text--darken-4 font-weight-black">
                {{ numberWithCommas(kpiTotals.totalCustomerDebt) }}
              </td>
              <td class="text-right deep-purple--text text--darken-4 font-weight-black">
                -{{ numberWithCommas(kpiTotals.periodDeliveredOut) }}
              </td>
              <td class="text-right blue--text text--darken-4 font-weight-black">
                +{{ numberWithCommas(kpiTotals.periodReturnedIn) }}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </v-simple-table>
      </div>
    </v-card>

    <!-- CUSTOMER LEDGER DETAIL MODAL -->
    <v-dialog v-model="ledgerDialog" max-width="850px" scrollable>
      <v-card v-if="selectedClientForModal" class="rounded-xl">
        <v-card-title class="teal darken-2 white--text pa-4">
          <div class="d-flex align-center justify-space-between w-100">
            <div class="d-flex align-center">
              <v-icon color="white" class="mr-2">mdi-account-clock</v-icon>
              <div>
                <div class="text-h6 font-weight-bold mb-0">
                  ປະຫວັດການເຄື່ອນໄຫວ: {{ selectedClientForModal.clientName }}
                </div>
                <div class="text-caption white--text opacity-90">
                  {{ selectedClientForModal.clientCompany || '' }} | ເບີໂທ: {{ selectedClientForModal.clientPhone || '-' }}
                </div>
              </div>
            </div>
            <v-btn icon dark @click="ledgerDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card-title>

        <v-card-text class="pa-4">
          <div class="d-flex justify-space-between align-center mb-3 flex-wrap">
            <div class="caption font-weight-bold grey--text">
              ຊ່ວງວັນທີ: {{ startDate }} ຫາ {{ endDate }}
            </div>
            <div class="caption font-weight-bold amber--text text--darken-4">
              ຍອດໜີ້ຄ້າງປັດຈຸບັນ: {{ numberWithCommas(selectedClientForModal.totalBalanceOwed) }} ໜ່ວຍ
            </div>
          </div>

          <v-simple-table dense class="border rounded-lg">
            <thead>
              <tr class="grey lighten-4">
                <th class="font-weight-bold">ວັນທີ/ເວລາ</th>
                <th class="font-weight-bold">ປະເພດທຸລະກຳ</th>
                <th class="font-weight-bold">ບັນຈຸພັນ</th>
                <th class="text-right font-weight-bold">ຈຳນວນປ່ຽນແປງ</th>
                <th class="text-right font-weight-bold">ຍອດໜີ້ສະສົມ</th>
                <th class="text-right font-weight-bold">ຄ່າມັດຈຳ (LAK)</th>
                <th class="font-weight-bold">ໝາຍເຫດ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="clientModalLedger.length === 0">
                <td colspan="7" class="text-center py-4 grey--text">
                  ບໍ່ມີການເຄື່ອນໄຫວໃນຊ່ວງວັນທີທີ່ເລືອກ
                </td>
              </tr>
              <tr v-for="item in clientModalLedger" :key="item.id">
                <td class="caption">{{ formatDateTime(item.createdAt) }}</td>
                <td>
                  <v-chip
                    x-small
                    label
                    :color="getTransactionTypeColor(item.transactionType)"
                    dark
                    class="font-weight-bold"
                  >
                    {{ getTransactionTypeLabel(item.transactionType) }}
                  </v-chip>
                </td>
                <td class="font-weight-medium">{{ item.packagingProduct?.pro_name || '-' }}</td>
                <td
                  class="text-right font-weight-bold"
                  :class="item.qtyChange > 0 ? 'deep-purple--text' : 'teal--text text--darken-2'"
                >
                  {{ item.qtyChange > 0 ? `+${item.qtyChange}` : item.qtyChange }}
                </td>
                <td class="text-right font-weight-bold">{{ numberWithCommas(item.balanceAfter) }}</td>
                <td class="text-right">{{ numberWithCommas(item.depositAmount || 0) }}</td>
                <td class="caption grey--text">{{ item.notes || '-' }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>

        <v-card-actions class="pa-4 grey lighten-4 justify-end">
          <v-btn color="grey darken-1" text @click="ledgerDialog = false">ປິດ (Close)</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ExcelJS from 'exceljs'

export default {
  name: 'CustomerPackagingSummaryReport',
  layout: 'default',
  middleware: 'auths',
  data() {
    return {
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      menuStartDate: false,
      menuEndDate: false,
      selectedLocationId: 'all',
      searchKeyword: '',
      customerTableSearch: '',
      isLoading: false,
      isExporting: false,

      // Raw datasets
      matrixList: [],
      customerSummaryList: [],
      ledgerItems: [],
      categoriesMap: {},

      // Dialog
      ledgerDialog: false,
      selectedClientForModal: null,
      clientModalLedger: []
    }
  },
  computed: {
    ...mapGetters(['findAllLocation']),
    locationOptions() {
      return [
        { id: 'all', name: '🏢 ທຸກສາຂາ/ສາງ (All Locations)' },
        ...(this.findAllLocation || []).map(l => ({ id: l.id, name: l.name }))
      ]
    },
    debtorClientsCount() {
      const set = new Set()
      for (const item of this.customerSummaryList) {
        if (Number(item.balanceOwed) > 0 && item.clientId) {
          set.add(item.clientId)
        }
      }
      return set.size
    },
    // Merged Packaging Asset List with Period In/Out
    packagingAssetsData() {
      // 1. Calculate Period Movement IN / OUT per packagingProductId from ledgerItems
      const periodMap = {}
      for (const item of this.ledgerItems) {
        const pId = item.packagingProductId || item.packagingProduct?.id
        if (!pId) continue
        if (!periodMap[pId]) {
          periodMap[pId] = { periodReturnedIn: 0, periodDeliveredOut: 0 }
        }
        const qty = Number(item.qtyChange) || 0
        if (item.transactionType === 'RETURNED_IN' || qty < 0) {
          periodMap[pId].periodReturnedIn += Math.abs(qty)
        } else if (item.transactionType === 'DELIVERED_OUT' || qty > 0) {
          periodMap[pId].periodDeliveredOut += Math.abs(qty)
        }
      }

      // 2. Map matrixList
      return this.matrixList.map(m => {
        const pId = m.productId
        const period = periodMap[pId] || { periodReturnedIn: 0, periodDeliveredOut: 0 }
        const emptyStockWarehouse = Number(m.emptyStockWarehouse) || 0
        const wholesaleCustomerDebt = Number(m.wholesaleCustomerDebt) || 0
        const periodReturnedIn = period.periodReturnedIn
        const periodDeliveredOut = period.periodDeliveredOut
        const netMovement = periodDeliveredOut - periodReturnedIn
        const totalCirculation = emptyStockWarehouse + wholesaleCustomerDebt

        // Category lookup
        const categoryName = this.categoriesMap[m.categoryId] || m.categoryName || 'ບັນຈຸພັນ (Packaging)'

        return {
          productId: pId,
          name: m.name,
          barCode: m.barCode,
          categoryName,
          emptyStockWarehouse,
          wholesaleCustomerDebt,
          periodReturnedIn,
          periodDeliveredOut,
          netMovement,
          totalCirculation
        }
      })
    },
    filteredPackagingList() {
      if (!this.searchKeyword) return this.packagingAssetsData
      const q = this.searchKeyword.toLowerCase().trim()
      return this.packagingAssetsData.filter(p =>
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.barCode && p.barCode.toLowerCase().includes(q)) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(q))
      )
    },
    // Merged Customer Data with Balance and Period In/Out
    customerRows() {
      // Group customer summary by clientId
      const clientMap = {}

      for (const item of this.customerSummaryList) {
        const cId = item.clientId
        if (!cId) continue
        if (!clientMap[cId]) {
          clientMap[cId] = {
            clientId: cId,
            clientName: item.clientName || `ລູກຄ້າ #${cId}`,
            clientCompany: item.clientCompany,
            clientPhone: item.clientPhone,
            totalBalanceOwed: 0,
            items: [],
            periodOut: 0,
            periodIn: 0
          }
        }
        const owed = Number(item.balanceOwed) || 0
        if (owed > 0) {
          clientMap[cId].items.push({
            packagingProductId: item.packagingProductId,
            packagingName: item.packagingName,
            balanceOwed: owed
          })
          clientMap[cId].totalBalanceOwed += owed
        }
      }

      // Add movement from ledgerItems
      for (const item of this.ledgerItems) {
        const cId = item.clientId
        if (!cId) continue
        if (!clientMap[cId]) {
          clientMap[cId] = {
            clientId: cId,
            clientName: item.client?.name || `ລູກຄ້າ #${cId}`,
            clientCompany: item.client?.company,
            clientPhone: item.client?.telephone,
            totalBalanceOwed: 0,
            items: [],
            periodOut: 0,
            periodIn: 0
          }
        }
        const qty = Number(item.qtyChange) || 0
        if (item.transactionType === 'DELIVERED_OUT' || qty > 0) {
          clientMap[cId].periodOut += Math.abs(qty)
        } else if (item.transactionType === 'RETURNED_IN' || qty < 0) {
          clientMap[cId].periodIn += Math.abs(qty)
        }
      }

      // Return list sorted by totalBalanceOwed DESC
      return Object.values(clientMap)
        .filter(c => c.totalBalanceOwed > 0 || c.periodOut > 0 || c.periodIn > 0)
        .sort((a, b) => b.totalBalanceOwed - a.totalBalanceOwed)
    },
    filteredCustomerRows() {
      let list = this.customerRows
      const q = (this.customerTableSearch || this.searchKeyword || '').toLowerCase().trim()
      if (q) {
        list = list.filter(c =>
          (c.clientName && c.clientName.toLowerCase().includes(q)) ||
          (c.clientCompany && c.clientCompany.toLowerCase().includes(q)) ||
          (c.clientPhone && c.clientPhone.toLowerCase().includes(q))
        )
      }
      return list
    },
    kpiTotals() {
      let totalStockWarehouse = 0
      let totalCustomerDebt = 0
      let periodReturnedIn = 0
      let periodDeliveredOut = 0

      for (const p of this.packagingAssetsData) {
        totalStockWarehouse += p.emptyStockWarehouse
        totalCustomerDebt += p.wholesaleCustomerDebt
        periodReturnedIn += p.periodReturnedIn
        periodDeliveredOut += p.periodDeliveredOut
      }

      return {
        totalStockWarehouse,
        totalCustomerDebt,
        periodReturnedIn,
        periodDeliveredOut,
        totalNetMovement: periodDeliveredOut - periodReturnedIn
      }
    }
  },
  async created() {
    await this.loadCategories()
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
        case 'DELIVERED_OUT': return 'deep-purple'
        case 'RETURNED_IN': return 'teal darken-2'
        case 'PAID_DEPOSIT': return 'blue darken-2'
        case 'REFUNDED_DEPOSIT': return 'purple darken-2'
        case 'WRITE_OFF': return 'error'
        default: return 'grey'
      }
    },
    getTransactionTypeLabel(type) {
      switch (type) {
        case 'DELIVERED_OUT': return 'ສົ່ງອອກ'
        case 'RETURNED_IN': return 'ຮັບຄືນ'
        case 'PAID_DEPOSIT': return 'ຈ່າຍມັດຈຳ'
        case 'REFUNDED_DEPOSIT': return 'ຄືນມັດຈຳ'
        case 'WRITE_OFF': return 'ຕັດສູນ'
        default: return type
      }
    },
    async loadCategories() {
      try {
        const res = await this.$axios.get('/api/category/find')
        const cats = Array.isArray(res.data) ? res.data : (res.data?.rows || [])
        const map = {}
        for (const c of cats) {
          const id = c.categ_id || c.id
          if (id) {
            map[id] = c.categ_name || c.name
          }
        }
        this.categoriesMap = map
      } catch (err) {
        console.warn('Could not load categories:', err.message)
      }
    },
    async loadData() {
      this.isLoading = true
      try {
        const locationQuery = this.selectedLocationId && this.selectedLocationId !== 'all'
          ? `?locationId=${this.selectedLocationId}`
          : ''

        const [matrixRes, summaryRes, ledgerRes] = await Promise.all([
          this.$axios.get(`/api/packaging/matrix${locationQuery}`),
          this.$axios.get('/api/packaging/customer/summary'),
          this.$axios.get(`/api/packaging/customer/ledger?startDate=${this.startDate}&endDate=${this.endDate}`)
        ])

        this.matrixList = matrixRes.data || []
        this.customerSummaryList = summaryRes.data || []
        this.ledgerItems = ledgerRes.data || []
      } catch (err) {
        console.error('Failed to load packaging overview data:', err)
        if (this.$toast) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນດຸນດ່ຽງບັນຈຸພັນ')
        }
      } finally {
        this.isLoading = false
      }
    },
    openCustomerLedger(client) {
      this.selectedClientForModal = client
      this.clientModalLedger = this.ledgerItems.filter(item => item.clientId === client.clientId)
      this.ledgerDialog = true
    },
    printReport() {
      window.print()
    },
    async exportToExcel() {
      this.isExporting = true
      try {
        const workbook = new ExcelJS.Workbook()

        // -------------------------------------------------------------
        // SHEET 1: Packaging Items Overview
        // -------------------------------------------------------------
        const wsAssets = workbook.addWorksheet('Packaging Stock & Movement')

        // Title
        const titleRow1 = wsAssets.addRow(['ລາຍງານສະຫຼຸບດຸນດ່ຽງບັນຈຸພັນ (Packaging Balance & Movement Overview)'])
        titleRow1.font = { size: 14, bold: true, color: { argb: 'FF0F766E' } }
        wsAssets.addRow([`ຊ່ວງວັນທີ: ${this.startDate} ຫາ ${this.endDate}`, `ສາຂາ/ສາງ: ${this.selectedLocationId === 'all' ? 'ທຸກສາຂາ' : this.selectedLocationId}`])
        wsAssets.addRow([])

        // Table Header
        const header1 = wsAssets.addRow([
          'ລ/ດ',
          'ໝວດໝູ່ (Category)',
          'ລາຍການບັນຈຸພັນ (Packaging Item)',
          'ບາໂຄ້ດ (Barcode)',
          'ໃນສາງ (Stock On-Hand)',
          'ໜີ້ລູກຄ້າຄ້າງ (Customer Ledger)',
          'ຮັບຄືນໃນງວດ (Movement IN)',
          'ສົ່ງອອກໃນງວດ (Movement OUT)',
          'ດຸນງວດ (Net Delta)',
          'ລວມໝູນວຽນ (Total Circulation)'
        ])
        header1.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        header1.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF0F766E' }
        }

        this.filteredPackagingList.forEach((p, idx) => {
          wsAssets.addRow([
            idx + 1,
            p.categoryName,
            p.name,
            p.barCode || '-',
            p.emptyStockWarehouse,
            p.wholesaleCustomerDebt,
            p.periodReturnedIn,
            p.periodDeliveredOut,
            p.netMovement,
            p.totalCirculation
          ])
        })

        // Total Row
        const totRow1 = wsAssets.addRow([
          'ລວມ',
          '-',
          'ລວມຍອດທັງໝົດ',
          '-',
          this.kpiTotals.totalStockWarehouse,
          this.kpiTotals.totalCustomerDebt,
          this.kpiTotals.periodReturnedIn,
          this.kpiTotals.periodDeliveredOut,
          this.kpiTotals.totalNetMovement,
          this.kpiTotals.totalStockWarehouse + this.kpiTotals.totalCustomerDebt
        ])
        totRow1.font = { bold: true }
        totRow1.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFE6FFFA' }
        }

        // Auto width
        wsAssets.columns.forEach(col => {
          let maxLen = 0
          col.eachCell({ includeEmpty: true }, cell => {
            const l = cell.value ? cell.value.toString().length : 10
            if (l > maxLen) maxLen = l
          })
          col.width = Math.min(Math.max(maxLen + 3, 12), 35)
        })

        // -------------------------------------------------------------
        // SHEET 2: Customer Outstanding Debt
        // -------------------------------------------------------------
        const wsClients = workbook.addWorksheet('Customer Outstanding Debt')

        const titleRow2 = wsClients.addRow(['ລາຍຊື່ລູກຄ້າ ແລະ ຍອດໜີ້ຄ້າງບັນຈຸພັນ (Customer Packaging Outstanding Debt)'])
        titleRow2.font = { size: 14, bold: true, color: { argb: 'FFB45309' } }
        wsClients.addRow([`ຊ່ວງວັນທີ: ${this.startDate} ຫາ ${this.endDate}`])
        wsClients.addRow([])

        const header2 = wsClients.addRow([
          'ລ/ດ',
          'ຊື່ລູກຄ້າ (Customer)',
          'ຮ້ານ / ບໍລິສັດ (Company)',
          'ເບີໂທ (Phone)',
          'ລາຍລະອຽດໜີ້ຕາມບັນຈຸພັນ (Breakdown)',
          'ລວມໜີ້ຄ້າງ (Total Debt)',
          'ສົ່ງອອກໃນງວດ (Out)',
          'ຮັບຄືນໃນງວດ (In)'
        ])
        header2.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        header2.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFB45309' }
        }

        this.filteredCustomerRows.forEach((c, idx) => {
          const breakdownText = c.items.map(it => `${it.packagingName}: ${it.balanceOwed}`).join(' | ') || '-'
          wsClients.addRow([
            idx + 1,
            c.clientName,
            c.clientCompany || '-',
            c.clientPhone || '-',
            breakdownText,
            c.totalBalanceOwed,
            c.periodOut,
            c.periodIn
          ])
        })

        const totRow2 = wsClients.addRow([
          'ລວມ',
          '-',
          'ລວມຍອດໜີ້ທັງໝົດ',
          '-',
          '-',
          this.kpiTotals.totalCustomerDebt,
          this.kpiTotals.periodDeliveredOut,
          this.kpiTotals.periodReturnedIn
        ])
        totRow2.font = { bold: true }
        totRow2.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFEF3C7' }
        }

        wsClients.columns.forEach(col => {
          let maxLen = 0
          col.eachCell({ includeEmpty: true }, cell => {
            const l = cell.value ? cell.value.toString().length : 10
            if (l > maxLen) maxLen = l
          })
          col.width = Math.min(Math.max(maxLen + 3, 12), 40)
        })

        // Download
        const buffer = await workbook.xlsx.writeBuffer()
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Customer_Packaging_Summary_${this.startDate}_${this.endDate}.xlsx`
        a.click()
        window.URL.revokeObjectURL(url)
      } catch (err) {
        console.error('Export Excel failed:', err)
        if (this.$toast) {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການ Export Excel')
        }
      } finally {
        this.isExporting = false
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.bg-teal-soft {
  background-color: #f0fdfa !important;
  border: 1px solid #ccfbf1 !important;
}

.bg-amber-soft {
  background-color: #fffbeb !important;
  border: 1px solid #fef3c7 !important;
}

.bg-blue-soft {
  background-color: #eff6ff !important;
  border: 1px solid #dbeafe !important;
}

.bg-purple-soft {
  background-color: #faf5ff !important;
  border: 1px solid #f3e8ff !important;
}

.table-responsive-wrapper {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.custom-report-table {
  border-collapse: collapse;
  width: 100%;
}

.custom-report-table th,
.custom-report-table td {
  padding: 10px 14px !important;
  font-size: 0.85rem !important;
  border-bottom: 1px solid #f1f5f9;
}

.table-row-hover:hover {
  background-color: #f8fafc !important;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0 !important;
}

@media print {
  .v-btn,
  .v-text-field,
  .v-select,
  .v-divider,
  header {
    display: none !important;
  }
  .customer-packaging-summary {
    padding: 0 !important;
  }
  .v-card {
    border: none !important;
    box-shadow: none !important;
  }
}
</style>

