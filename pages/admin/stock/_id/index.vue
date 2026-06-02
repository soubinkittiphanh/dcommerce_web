<template>
  <div class="text-center noto-sans-lao">
    <h1 v-if="!isEmbedded">
      <v-chip large label class="ma-0 white--text" color="blue">
        ລາຍການ ສະຕັອກສິນຄ້າ {{ pro_name }}
      </v-chip>
    </h1>

    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="dialog" max-width="300px" persistent>
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <!-- Compact Summary Section -->
    <v-row dense class="mb-2">
      <v-col cols="12">
        <div class="d-flex align-center flex-wrap justify-space-between py-2 px-3 compact-stats-bar">
          <div class="stat-badge d-flex align-center mr-3 py-1 px-2 my-1">
            <v-avatar color="success" size="24" class="mr-2 white--text font-weight-bold ">{{ summaryStats.available }}</v-avatar>
            <span class=" font-weight-medium">ພ້ອມໃຊ້</span>
            <span class=" grey--text ml-2">({{ formatNumber(summaryStats.availableCost) }} ກີບ)</span>
          </div>

          <div class="stat-badge d-flex align-center mr-3 py-1 px-2 my-1">
            <v-avatar color="warning" size="24" class="mr-2 white--text font-weight-bold ">{{ summaryStats.used }}</v-avatar>
            <span class=" font-weight-medium">ໃຊ້ງານແລ້ວ</span>
            <span class=" grey--text ml-2">({{ formatNumber(summaryStats.usedCost) }} ກີບ)</span>
          </div>

          <div class="stat-badge d-flex align-center mr-3 py-1 px-2 my-1">
            <v-avatar color="error" size="24" class="mr-2 white--text font-weight-bold ">{{ summaryStats.deleted }}</v-avatar>
            <span class=" font-weight-medium">ຖືກລົບ</span>
          </div>

          <div class="stat-badge d-flex align-center mr-3 py-1 px-2 my-1">
            <v-avatar color="orange" size="24" class="mr-2 white--text font-weight-bold ">{{ summaryStats.expired }}</v-avatar>
            <span class=" font-weight-medium">ໝົດອາຍຸ</span>
            <span class=" grey--text ml-2">({{ formatNumber(summaryStats.expiredCost) }} ກີບ)</span>
          </div>

          <div class="stat-badge d-flex align-center mr-3 py-1 px-2 my-1">
            <v-avatar color="amber" size="24" class="mr-2 white--text font-weight-bold ">{{ summaryStats.expiringSoon }}</v-avatar>
            <span class=" font-weight-medium">ໃກ້ໝົດອາຍຸ</span>
          </div>

          <div class="stat-badge d-flex align-center mr-3 py-1 px-2 my-1">
            <v-avatar color="info" size="24" class="mr-2 white--text font-weight-bold ">{{ summaryStats.withLot }}</v-avatar>
            <span class=" font-weight-medium">ມີ Lot</span>
          </div>

          <div class="stat-badge d-flex align-center mr-3 py-1 px-2 my-1">
            <v-avatar color="purple" size="24" class="mr-2 white--text font-weight-bold ">{{ summaryStats.withSerial }}</v-avatar>
            <span class=" font-weight-medium">ມີ Serial</span>
          </div>

          <div class="stat-badge d-flex align-center py-1 px-2 ml-auto my-1">
            <span class=" font-weight-bold primary--text mr-1">ມູນຄ່າລວມ:</span>
            <v-chip color="primary" small class="font-weight-bold ">{{ formatNumber(summaryStats.totalCost) }} ກີບ</v-chip>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-card class="compact-filter-card">
      <v-card-title class="pa-3">
        <!-- Date Filters, Search & Admin Row (Highly Compact) -->
        <v-row dense class="ma-0 w-100 align-center">
          <v-col cols="12" sm="6" md="2" class="py-1">
            <v-menu
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted"
                  label="ຈາກວັນທີ:"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  dense
                  outlined
                  hide-details
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                  class="noto-sans-lao"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="2" class="py-1">
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted2"
                  label="ຫາວັນທີ:"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  dense
                  outlined
                  hide-details
                  @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"
                  class="noto-sans-lao"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date2"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6" md="3" class="py-1">
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="ຊອກຫາ"
              dense
              outlined
              hide-details
              class="noto-sans-lao"
            />
          </v-col>

          <v-col cols="12" sm="6" md="3" class="py-1">
            <v-text-field
              v-model="userId"
              prepend-inner-icon="mdi-account"
              label="ລະຫັດແອັດມິນ"
              dense
              outlined
              hide-details
              class="noto-sans-lao"
            />
          </v-col>

          <v-col cols="12" sm="6" md="2" class="py-1">
            <v-btn @click="fetchData" class="primary noto-sans-lao font-weight-bold" height="40" rounded block>
              <v-icon left>mdi-refresh</v-icon>
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-row>

        <!-- Dynamic Filter Row (Compact & Modern Outlined Selects) -->
        <v-row dense class="mt-3 px-2 w-100">
          <v-col cols="6" sm="3" md="2" class="py-1">
            <v-text-field
              v-model="lotFilter"
              prepend-inner-icon="mdi-barcode"
              label="Lot Number"
              dense
              outlined
              hide-details
              @input="applyFilters"
              class="noto-sans-lao"
            />
          </v-col>
          
          <v-col cols="6" sm="3" md="2" class="py-1">
            <v-text-field
              v-model="serialFilter"
              prepend-inner-icon="mdi-numeric"
              label="Serial No"
              dense
              outlined
              hide-details
              @input="applyFilters"
              class="noto-sans-lao"
            />
          </v-col>

          <v-col cols="6" sm="3" md="2" class="py-1">
            <v-select
              v-model="statusFilter"
              :items="statusOptions"
              label="ສະຖານະ"
              dense
              outlined
              hide-details
              @change="applyFilters"
              clearable
              class="noto-sans-lao"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="3" md="2" class="py-1">
            <v-select
              v-model="expiryFilter"
              :items="expiryOptions"
              label="ອາຍຸການໃຊ້"
              dense
              outlined
              hide-details
              @change="applyFilters"
              clearable
              class="noto-sans-lao"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="3" md="1" class="py-1">
            <v-select
              v-model="colorFilter"
              :items="colorOptions"
              item-text="name"
              item-value="id"
              label="ສີ"
              dense
              outlined
              hide-details
              @change="applyFilters"
              clearable
              class="noto-sans-lao"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="3" md="1" class="py-1">
            <v-select
              v-model="sizeFilter"
              :items="sizeOptions"
              item-text="name"
              item-value="id"
              label="ຂະໜາດ"
              dense
              outlined
              hide-details
              @change="applyFilters"
              clearable
              class="noto-sans-lao"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="3" md="2" class="py-1">
            <v-select
              v-model="locationFilter"
              :items="locationOptions"
              item-text="name"
              item-value="name"
              label="ສະຖານທີ່"
              dense
              outlined
              hide-details
              @change="applyFilters"
              clearable
              class="noto-sans-lao"
            ></v-select>
          </v-col>
        </v-row>

        <!-- View Toggle and Export Row (Compact Style) -->
        <v-row dense class="mt-3 px-2 w-100 align-center justify-space-between">
          <v-col cols="12" sm="6" md="4" class="py-1">
            <v-btn-toggle v-model="viewMode" exclusive mandatory dense class="rounded-lg">
              <v-btn value="detail" class="noto-sans-lao" small>
                <v-icon left small>mdi-view-list</v-icon>
                ລາຍລະອຽດ
              </v-btn>
              <v-btn value="summary" class="noto-sans-lao" small>
                <v-icon left small>mdi-chart-bar</v-icon>
                ສະຫຼຸບ
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col cols="6" sm="3" md="3" v-if="viewMode === 'summary'" class="py-1">
            <v-select
              v-model="groupBy"
              :items="groupByOptions"
              label="ຈັດກຸ່ມຕາມ"
              @change="generateSummaryData"
              dense
              outlined
              hide-details
              class="noto-sans-lao"
            ></v-select>
          </v-col>
          <v-col cols="6" sm="3" md="2" class="py-1">
            <v-btn
              @click="exportToExcel"
              class="success noto-sans-lao font-weight-bold"
              small
              outlined
              height="36"
              rounded
              block
            >
              <v-icon left small>mdi-microsoft-excel</v-icon>
              Export
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <!-- Detail View Data Table -->
      <v-data-table
        v-if="viewMode === 'detail' && filteredData"
        :headers="detailHeaders"
        :search="search"
        :items="filteredData"
        :items-per-page="15"
        class="elevation-1 noto-sans-lao"
      >
        <template v-slot:[`item.cost`]="{ item }">
          <span class="font-weight-bold noto-sans-lao">{{ formatNumber(item.cost) }}</span>
        </template>

        <template v-slot:[`item.currencyCode`]="{ item }">
          <v-chip color="info" x-small class="noto-sans-lao font-weight-bold">
            {{ item.currencyCode }}
          </v-chip>
        </template>

        <template v-slot:[`item.exchangeRate`]="{ item }">
          <span class="font-weight-medium text-caption noto-sans-lao">
            {{ formatNumber(item.exchangeRate) }}
          </span>
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getStatusColor(item.status)" dark small class="noto-sans-lao">
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:[`item.input_date_time`]="{ item }">
          <v-chip color="success" small dark style="cursor: pointer" class="noto-sans-lao">
            <v-icon left small>mdi-clock</v-icon>
            {{ item.input_date_time }}
          </v-chip>
        </template>

        <template v-slot:[`item.update_time`]="{ item }">
          <v-chip color="warning" small dark style="cursor: pointer" class="noto-sans-lao">
            <v-icon left small>mdi-clock</v-icon>
            {{ item.update_time }}
          </v-chip>
        </template>

        <template v-slot:[`item.lotNumber`]="{ item }">
          <v-chip v-if="item.lotNumber" color="secondary" outlined x-small class="noto-sans-lao">
            <v-icon x-small left>mdi-barcode</v-icon>
            {{ item.lotNumber }}
          </v-chip>
          <span v-else class="grey--text noto-sans-lao">-</span>
        </template>

        <template v-slot:[`item.serialNo`]="{ item }">
          <v-chip v-if="item.serialNo" color="info" outlined x-small class="noto-sans-lao">
            <v-icon x-small left>mdi-numeric</v-icon>
            {{ item.serialNo }}
          </v-chip>
          <span v-else class="grey--text noto-sans-lao">-</span>
        </template>

        <template v-slot:[`item.colorInfo`]="{ item }">
          <div v-if="item.colorInfo" class="d-flex align-center">
            <div 
              v-if="item.colorInfo.hex_code"
              class="color-preview-small mr-2"
              :style="{ backgroundColor: item.colorInfo.hex_code }"
            ></div>
            <span class="noto-sans-lao">{{ item.colorInfo.name }}</span>
          </div>
          <span v-else class="grey--text noto-sans-lao">-</span>
        </template>

        <template v-slot:[`item.sizeInfo`]="{ item }">
          <div v-if="item.sizeInfo">
            <v-icon x-small left>mdi-ruler</v-icon>
            <span class="noto-sans-lao">{{ item.sizeInfo.name }}</span>
          </div>
          <span v-else class="grey--text noto-sans-lao">-</span>
        </template>

        <template v-slot:[`item.expiryDate`]="{ item }">
          <div v-if="item.expiryDate">
            <v-chip :color="getExpiryColor(item.expiryDate)" dark x-small class="noto-sans-lao">
              <v-icon x-small left>mdi-calendar</v-icon>
              {{ formatDate(item.expiryDate) }}
            </v-chip>
            <div class="caption mt-1 noto-sans-lao" :class="getExpiryColor(item.expiryDate) + '--text'">
              {{ getExpiryStatus(item.expiryDate) }}
            </div>
          </div>
          <span v-else class="grey--text noto-sans-lao">-</span>
        </template>

        <template v-slot:[`item.location`]="{ item }">
          <v-chip v-if="item.location" color="primary" outlined small class="noto-sans-lao">
            <v-icon small left>mdi-map-marker</v-icon>
            {{ item.location }}
          </v-chip>
          <span v-else class="grey--text noto-sans-lao">-</span>
        </template>

        <template v-slot:[`item.function`]="{ item }">
          <v-btn
            v-if="item.status === 'ພ້ອມໃຊ້'"
            @click="delCard(item)"
            color="error"
            small
          >
            <v-icon small>mdi-delete</v-icon>
          </v-btn>
        </template>

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title class="noto-sans-lao">
              ສິນຄ້າທັງຫມົດ: {{ filteredData.length }}
              <span v-if="hasActiveFilters" class="">
                (ກັ່ນຕອງແລ້ວ)
              </span>
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <!-- Quick Filter Chips -->
            <v-chip-group>
              <v-chip
                @click="setQuickFilter('expiring')"
                :color="expiryFilter === 'expiring' ? 'warning' : 'default'"
                small
                class="noto-sans-lao"
              >
                <v-icon small left>mdi-clock-alert</v-icon>
                ໃກ້ໝົດອາຍຸ
              </v-chip>
              <v-chip
                @click="setQuickFilter('expired')"
                :color="expiryFilter === 'expired' ? 'error' : 'default'"
                small
                class="noto-sans-lao"
              >
                <v-icon small left>mdi-calendar-remove</v-icon>
                ໝົດອາຍຸແລ້ວ
              </v-chip>
              <v-chip
                @click="setQuickFilter('withLot')"
                :color="lotFilter ? 'info' : 'default'"
                small
                class="noto-sans-lao"
              >
                <v-icon small left>mdi-barcode</v-icon>
                ມີ Lot
              </v-chip>
              <v-chip
                @click="setQuickFilter('withSerial')"
                :color="serialFilter ? 'purple' : 'default'"
                small
                class="noto-sans-lao"
              >
                <v-icon small left>mdi-numeric</v-icon>
                ມີ Serial
              </v-chip>
            </v-chip-group>
          </v-toolbar>
        </template>
      </v-data-table>

      <!-- Summary View Data Table -->
      <v-data-table
        v-if="viewMode === 'summary' && summaryData"
        :headers="summaryHeaders"
        :items="summaryData"
        :items-per-page="15"
        class="elevation-1 noto-sans-lao"
      >
        <template v-slot:[`item.count`]="{ item }">
          <v-chip color="primary" dark class="noto-sans-lao">{{ item.count }}</v-chip>
        </template>

        <template v-slot:[`item.totalCost`]="{ item }">
          <span class="font-weight-bold noto-sans-lao">{{ formatNumber(item.totalCost) }}</span>
        </template>

        <template v-slot:[`item.avgCost`]="{ item }">
          <span class=" noto-sans-lao">{{ formatNumber(item.avgCost) }}</span>
        </template>

        <template v-slot:[`item.colorInfo`]="{ item }">
          <div v-if="item.colorInfo" class="d-flex align-center">
            <div 
              v-if="item.colorInfo.hex_code"
              class="color-preview-small mr-2"
              :style="{ backgroundColor: item.colorInfo.hex_code }"
            ></div>
            <span class="noto-sans-lao">{{ item.colorInfo.name }}</span>
          </div>
          <span v-else class="grey--text noto-sans-lao">ບໍ່ລະບຸສີ</span>
        </template>

        <template v-slot:[`item.sizeInfo`]="{ item }">
          <div v-if="item.sizeInfo">
            <v-icon x-small left>mdi-ruler</v-icon>
            <span class="noto-sans-lao">{{ item.sizeInfo.name }}</span>
          </div>
          <span v-else class="grey--text noto-sans-lao">ບໍ່ລະບຸຂະໜາດ</span>
        </template>

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title class="noto-sans-lao">
              ສະຫຼຸບຕາມ: {{ getGroupByLabel(groupBy) }} ({{ summaryData.length }} ກຸ່ມ)
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { getFormatNum, getLocalDate } from '~/common'

export default {
  middleware: 'auths',
  props: {
    isEmbedded: {
      type: Boolean,
      default: false,
    },
    embeddedProductId: {
      type: [String, Number],
      default: null,
    },
    embeddedProductName: {
      type: String,
      default: '',
    },
    embeddedCategory: {
      type: String,
      default: '',
    },
  },
  validate(data) {
    console.log('MIXIN ID: ' + data.params.id)
    return /^\d+$/.test(data.params.id)
  },

  watch: {
    embeddedProductId(newVal) {
      if (this.isEmbedded && newVal) {
        this.pro_name = this.embeddedProductName || 'Unknown Product'
        this.fetchLocations()
        this.fetchData()
      }
    },
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.fetchData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.fetchData()
    },
    loaddata() {
      this.applyFilters()
      this.loadColorSizeOptions()
    },
    viewMode() {
      if (this.viewMode === 'summary') {
        this.generateSummaryData()
      }
    },
  },

  data() {
    return {
      pro_name: '',
      showlist: false,
      isstock: false,
      isloading: false,
      dialogMessage: false,
      dialog: false,
      message: '',
      userId: '',
      selectedStockProductId: '',
      loaddata: [],
      filteredData: [],
      summaryData: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      search: '',
      statusFilter: null,
      expiryFilter: null,
      lotFilter: '',
      serialFilter: '',
      colorFilter: null,
      sizeFilter: null,
      locationFilter: null,
      colorOptions: [],
      sizeOptions: [],
      locations: [],
      viewMode: 'detail', // 'detail' or 'summary'
      groupBy: 'date',
      groupByOptions: [
        { text: 'ວັນທີ', value: 'date' },
        { text: 'ສີ', value: 'color' },
        { text: 'ຂະໜາດ', value: 'size' },
        { text: 'ສີ + ຂະໜາດ', value: 'colorSize' },
        { text: 'Lot Number', value: 'lot' },
        { text: 'ສະຖານະ', value: 'status' },
      ],
      statusOptions: ['ພ້ອມໃຊ້', 'ໃຊ້ງານແລ້ວ', 'ຖືກລົບ'],
      expiryOptions: [
        { text: 'ໝົດອາຍຸແລ້ວ', value: 'expired' },
        { text: 'ໃກ້ໝົດອາຍຸ (30 ວັນ)', value: 'expiring' },
        { text: 'ຍັງໃຊ້ໄດ້', value: 'valid' },
      ],
      summaryStats: {
        available: 0,
        used: 0,
        deleted: 0,
        expired: 0,
        expiringSoon: 0,
        withLot: 0,
        withSerial: 0,
        uniqueVariants: 0,
        totalCost: 0,
        availableCost: 0,
        usedCost: 0,
        deletedCost: 0,
        expiredCost: 0,
        availablePercent: 0,
        usedPercent: 0,
        deletedPercent: 0,
        expiredPercent: 0,
      },
      menu1: false,
      menu2: false,
      detailHeaders: [
        { text: 'ID', align: 'center', value: 'card_id', width: '80px' },
        { text: 'ລະຫັດສິນຄ້າ', align: 'center', value: 'pro_id' },
        { text: 'ຕົ້ນທຶນ', align: 'center', value: 'cost' },
        { text: 'ສະກຸນເງິນ', align: 'center', value: 'currencyCode' },
        { text: 'ອັດຕາແລກປ່ຽນ', align: 'right', value: 'exchangeRate' },
        { text: 'ສີ', align: 'center', value: 'colorInfo' },
        { text: 'ຂະໜາດ', align: 'center', value: 'sizeInfo' },
        { text: 'Lot Number', align: 'center', value: 'lotNumber' },
        { text: 'Serial No', align: 'center', value: 'serialNo' },
        { text: 'ວັນໝົດອາຍຸ', align: 'center', value: 'expiryDate' },
        { text: 'ສະຖານທີ່', align: 'center', value: 'location' },
        { text: 'ວັນທີ', align: 'center', value: 'input_date_time' },
        { text: 'Admin', align: 'center', value: 'inputter' },
        { text: 'ສະຖານະ', align: 'center', value: 'status' },
        { text: 'ຜູ້ລົບ', align: 'center', value: 'updater' },
        { text: 'ເວລາລົບ', align: 'center', value: 'update_time' },
        { text: 'ລົບ', align: 'center', value: 'function', sortable: false, width: '100px' },
      ],
      summaryHeaders: [
        { text: 'ກຸ່ມ', align: 'center', value: 'groupKey', sortable: true },
        { text: 'ຈຳນວນ', align: 'center', value: 'count', sortable: true },
        { text: 'ມູນຄ່າລວມ', align: 'center', value: 'totalCost', sortable: true },
        { text: 'ມູນຄ່າສະເລ່ຍ', align: 'center', value: 'avgCost', sortable: true },
      ],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
    }
  },

  mounted() {
    const productId = this.isEmbedded ? this.embeddedProductId : this.$route.params.id
    const productName = this.isEmbedded ? this.embeddedProductName : this.$route.query.name
    const category = this.isEmbedded ? this.embeddedCategory : this.$route.query.category
    this.pro_name = productName || 'Unknown Product'
    console.log('Product Name:', productName)
    console.log('Product ID:', productId)
    console.log('Category:', category)
    this.fetchLocations()
    this.fetchData()
  },

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    user() {
      return this.$auth.user || ''
    },
    hasActiveFilters() {
      return this.statusFilter || this.expiryFilter || this.lotFilter || 
             this.serialFilter || this.colorFilter || this.sizeFilter || this.locationFilter
    },
    locationOptions() {
      return this.locations.map(loc => ({
        name: loc.name,
        id: loc.id
      }))
    },
  },

  methods: {
    defaultLocationName() {
      // 1. Try store's currentSelectedLocation
      const currentLoc = this.$store.getters.currentSelectedLocation || this.$store.state.selectedLocation
      if (currentLoc && currentLoc.name) {
        return currentLoc.name
      }
      
      // 2. Fall back to looking up the current selected terminal's location
      const selectedTerminalId = this.$store.state.selectedTerminal || this.$store.getters.findSelectedTerminal
      const terminals = this.$store.state.terminalList || this.$store.getters.findAllTerminal || []
      if (selectedTerminalId && terminals.length) {
        const currentTerminal = terminals.find(t => t.id == selectedTerminalId)
        if (currentTerminal && currentTerminal.locationId) {
          const location = this.locations.find(l => l.id == currentTerminal.locationId)
          if (location) {
            return location.name
          }
        }
      }
      
      return null
    },

    async fetchLocations() {
      try {
        const response = await this.$axios.get('api/location/find')
        this.locations = response.data || []
        
        // Set default location filter based on store selectedTerminal / location
        const defaultLoc = this.defaultLocationName()
        if (defaultLoc) {
          this.locationFilter = defaultLoc
          this.applyFilters()
        }
      } catch (error) {
        console.error('Error fetching locations:', error)
      }
    },
    getLocalDate,
    formatNumber(value) {
      return getFormatNum(value)
    },

    // New percentage calculation methods for circular progress
    getExpiringPercentage() {
      const total = this.filteredData ? this.filteredData.length : 0
      return total > 0 ? (this.summaryStats.expiringSoon / total) * 100 : 0
    },

    getCostPercentage(cost) {
      return this.summaryStats.totalCost > 0 ? (cost / this.summaryStats.totalCost) * 100 : 0
    },

    getLotPercentage() {
      const total = this.filteredData ? this.filteredData.length : 0
      return total > 0 ? (this.summaryStats.withLot / total) * 100 : 0
    },

    getSerialPercentage() {
      const total = this.filteredData ? this.filteredData.length : 0
      return total > 0 ? (this.summaryStats.withSerial / total) * 100 : 0
    },

    getVariantPercentage() {
      const maxVariants = 20 // Assume max 20 different variants for calculation
      return this.summaryStats.uniqueVariants > 0 ? (this.summaryStats.uniqueVariants / maxVariants) * 100 : 0
    },

    formatDate(date) {
      if (!date) return null
      console.log("DATE FORMAT METHOD: " + date)
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      console.log("DATE PARSE METHOD: " + date)
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0')
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    getStatusColor(status) {
      switch (status) {
        case 'ພ້ອມໃຊ້': return 'success'
        case 'ໃຊ້ງານແລ້ວ': return 'warning'
        case 'ຖືກລົບ': return 'error'
        default: return 'grey'
      }
    },

    getExpiryColor(expiryDate) {
      if (!expiryDate) return 'grey'
      const today = new Date()
      const expiry = new Date(expiryDate)
      const diffTime = expiry.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays < 0) return 'error'
      if (diffDays <= 7) return 'red'
      if (diffDays <= 30) return 'orange'
      return 'success'
    },

    getExpiryStatus(expiryDate) {
      if (!expiryDate) return ''
      const today = new Date()
      const expiry = new Date(expiryDate)
      const diffTime = expiry.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays < 0) return `ໝົດອາຍຸ ${Math.abs(diffDays)} ວັນແລ້ວ`
      if (diffDays === 0) return 'ໝົດອາຍຸມື້ນີ້'
      if (diffDays <= 30) return `ອີກ ${diffDays} ວັນໝົດອາຍຸ`
      return `ອີກ ${diffDays} ວັນໝົດອາຍຸ`
    },

    getGroupByLabel(groupBy) {
      const option = this.groupByOptions.find(opt => opt.value === groupBy)
      return option ? option.text : groupBy
    },

    loadColorSizeOptions() {
      // Extract unique colors and sizes from loaded data
      const colors = new Map()
      const sizes = new Map()

      this.loaddata.forEach(item => {
        if (item.colorId && item.colorInfo) {
          colors.set(item.colorId, {
            id: item.colorId,
            name: item.colorInfo.name,
            hex_code: item.colorInfo.hex_code
          })
        }
        if (item.sizeId && item.sizeInfo) {
          sizes.set(item.sizeId, {
            id: item.sizeId,
            name: item.sizeInfo.name
          })
        }
      })

      this.colorOptions = Array.from(colors.values())
      this.sizeOptions = Array.from(sizes.values())
    },

    calculateSummaryStats() {
      const dataset = this.filteredData || []
      const total = dataset.length
      const available = dataset.filter(item => item.status === 'ພ້ອມໃຊ້').length
      const used = dataset.filter(item => item.status === 'ໃຊ້ງານແລ້ວ').length
      const deleted = dataset.filter(item => item.status === 'ຖືກລົບ').length

      const today = new Date()
      const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)

      const expired = dataset.filter(item => 
        item.expiryDate && new Date(item.expiryDate) < today
      ).length

      const expiringSoon = dataset.filter(item => {
        if (!item.expiryDate) return false
        const expiry = new Date(item.expiryDate)
        return expiry >= today && expiry <= thirtyDaysFromNow
      }).length

      const withLot = dataset.filter(item => item.lotNumber).length
      const withSerial = dataset.filter(item => item.serialNo).length

      // Calculate unique variants (color + size combinations)
      const variants = new Set()
      dataset.forEach(item => {
        const variant = `${item.colorId || 'none'}_${item.sizeId || 'none'}`
        variants.add(variant)
      })

      // Calculate costs
      const totalCost = dataset.reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)
      const availableCost = dataset
        .filter(item => item.status === 'ພ້ອມໃຊ້')
        .reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)
      const usedCost = dataset
        .filter(item => item.status === 'ໃຊ້ງານແລ້ວ')
        .reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)
      const deletedCost = dataset
        .filter(item => item.status === 'ຖືກລົບ')
        .reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)
      const expiredCost = dataset
        .filter(item => item.expiryDate && new Date(item.expiryDate) < today)
        .reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)

      this.summaryStats = {
        available, used, deleted, expired, expiringSoon, withLot, withSerial,
        uniqueVariants: variants.size,
        totalCost, availableCost, usedCost, deletedCost, expiredCost,
        availablePercent: total > 0 ? ((available / total) * 100).toFixed(1) : 0,
        usedPercent: total > 0 ? ((used / total) * 100).toFixed(1) : 0,
        deletedPercent: total > 0 ? ((deleted / total) * 100).toFixed(1) : 0,
        expiredPercent: total > 0 ? ((expired / total) * 100).toFixed(1) : 0,
      }
    },

    applyFilters() {
      let filtered = [...this.loaddata]

      if (this.statusFilter) {
        filtered = filtered.filter(item => item.status === this.statusFilter)
      }

      if (this.expiryFilter) {
        const today = new Date()
        const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)

        filtered = filtered.filter(item => {
          if (!item.expiryDate) return this.expiryFilter === 'valid'
          const expiry = new Date(item.expiryDate)

          switch (this.expiryFilter) {
            case 'expired': return expiry < today
            case 'expiring': return expiry >= today && expiry <= thirtyDaysFromNow
            case 'valid': return expiry > thirtyDaysFromNow
            default: return true
          }
        })
      }

      if (this.lotFilter) {
        filtered = filtered.filter(item => 
          item.lotNumber && item.lotNumber.toLowerCase().includes(this.lotFilter.toLowerCase())
        )
      }

      if (this.serialFilter) {
        filtered = filtered.filter(item => 
          item.serialNo && item.serialNo.toLowerCase().includes(this.serialFilter.toLowerCase())
        )
      }

      if (this.colorFilter) {
        filtered = filtered.filter(item => item.colorId === this.colorFilter)
      }

      if (this.sizeFilter) {
        filtered = filtered.filter(item => item.sizeId === this.sizeFilter)
      }

      if (this.locationFilter) {
        filtered = filtered.filter(item => item.location === this.locationFilter)
      }

      this.filteredData = filtered
      this.calculateSummaryStats()
    },

    setQuickFilter(filterType) {
      switch (filterType) {
        case 'expiring':
          this.expiryFilter = this.expiryFilter === 'expiring' ? null : 'expiring'
          break
        case 'expired':
          this.expiryFilter = this.expiryFilter === 'expired' ? null : 'expired'
          break
        case 'withLot':
          this.lotFilter = this.lotFilter ? '' : 'LOT'
          break
        case 'withSerial':
          this.serialFilter = this.serialFilter ? '' : 'SER'
          break
      }
      this.applyFilters()
    },

    generateSummaryData() {
      const summary = new Map()

      this.filteredData.forEach(item => {
        let key = ''
        let displayKey = ''

        switch (this.groupBy) {
          case 'date':
            key = item.input_date_time.split(' ')[0] // Extract date part
            displayKey = key
            break
          case 'color':
            key = item.colorId || 'no_color'
            displayKey = item.colorInfo?.name || 'ບໍ່ລະບຸສີ'
            break
          case 'size':
            key = item.sizeId || 'no_size'
            displayKey = item.sizeInfo?.name || 'ບໍ່ລະບຸຂະໜາດ'
            break
          case 'colorSize':
            key = `${item.colorId || 'no_color'}_${item.sizeId || 'no_size'}`
            displayKey = `${item.colorInfo?.name || 'ບໍ່ລະບຸສີ'} - ${item.sizeInfo?.name || 'ບໍ່ລະບຸຂະໜາດ'}`
            break
          case 'lot':
            key = item.lotNumber || 'no_lot'
            displayKey = item.lotNumber || 'ບໍ່ມີ Lot Number'
            break
          case 'status':
            key = item.status
            displayKey = item.status
            break
        }

        if (!summary.has(key)) {
          summary.set(key, {
            groupKey: displayKey,
            count: 0,
            totalCost: 0,
            colorInfo: item.colorInfo,
            sizeInfo: item.sizeInfo
          })
        }

        const group = summary.get(key)
        group.count++
        group.totalCost += parseFloat(item.cost || 0)
      })

      // Convert to array and calculate averages
      this.summaryData = Array.from(summary.values()).map(group => ({
        ...group,
        avgCost: group.count > 0 ? group.totalCost / group.count : 0
      }))

      // Update headers based on groupBy
      this.updateSummaryHeaders()
    },

    updateSummaryHeaders() {
      this.summaryHeaders = [
        { text: 'ກຸ່ມ', align: 'center', value: 'groupKey', sortable: true },
        { text: 'ຈຳນວນ', align: 'center', value: 'count', sortable: true },
        { text: 'ມູນຄ່າລວມ', align: 'center', value: 'totalCost', sortable: true },
        { text: 'ມູນຄ່າສະເລ່ຍ', align: 'center', value: 'avgCost', sortable: true },
      ]

      if (this.groupBy === 'color' || this.groupBy === 'colorSize') {
        this.summaryHeaders.splice(1, 0, { text: 'ສີ', align: 'center', value: 'colorInfo', sortable: false })
      }
      if (this.groupBy === 'size' || this.groupBy === 'colorSize') {
        this.summaryHeaders.splice(-3, 0, { text: 'ຂະໜາດ', align: 'center', value: 'sizeInfo', sortable: false })
      }
    },

    async fetchData() {
      this.isloading = true
      const prodId = this.isEmbedded ? this.embeddedProductId : this.$route.params.id
      console.log('Fetching enhanced data for product_id:', prodId)
      console.log('Date range:', this.date, 'to', this.date2)

      try {
        const response = await this.$axios.get(
          `card_f/?pro_id=${prodId}&fDate=${this.date}&tDate=${this.date2}&userId=${this.userId}&includeEnhanced=true&includeColorSize=true`
        )

        const responseData = response.data.success ? response.data.data : response.data

        this.loaddata = responseData.map(el => ({
          card_id: el.id,
          pro_id: el.product_id,
          card_number: el.card_number,
          cost: el.cost,
          costPerUnit: el.costPerUnit,
          totalCost: el.totalCost,
          costType: el.costType,
          lotNumber: el.lotNumber,
          serialNo: el.serialNo,
          expiryDate: el.expiryDate,
          colorId: el.colorId,
          sizeId: el.sizeId,
          colorInfo: el.color ? { name: el.color.color_name, hex_code: el.color.hex_code } : null,
          sizeInfo: el.size ? { name: el.size.size_name } : null,
          srcLocationName: el.location?.name || '',
          location: el.location?.name || '',
          currencyCode: el.currency ? el.currency.code : 'LAK',
          exchangeRate: el.exchangeRate || 1,
          inputter: el.inputter + ' ' + (el.cus_name || ''),
          status: el.card_isused === 1 ? 'ໃຊ້ງານແລ້ວ' : el.card_isused === 2 ? 'ຖືກລົບ' : 'ພ້ອມໃຊ້',
          input_date_time: this.getLocalDate(el.card_input_date),
          updater: el.update_user,
          update_time: this.getLocalDate(el.update_time),
          function: el.id,
        }))

        this.applyFilters()
        
        console.log('Enhanced data loaded successfully:', this.loaddata.length, 'items')
      } catch (error) {
        this.message = error.message || 'Error loading data'
        console.log('Error: ' + error)
      }

      this.isloading = false
    },

    exportToExcel() {
      const dataToExport = this.viewMode === 'detail' ? this.filteredData : this.summaryData
      const exportData = dataToExport.map(item => {
        if (this.viewMode === 'detail') {
          return {
            ID: item.card_id,
            ລະຫັດສິນຄ້າ: item.pro_id,
            ຕົ້ນທຶນ: item.cost,
            ສະກຸນເງິນ: item.currencyCode || 'LAK',
            ອັດຕາແລກປ່ຽນ: item.exchangeRate || 1,
            ສີ: item.colorInfo?.name || '',
            ຂະໜາດ: item.sizeInfo?.name || '',
            'Lot Number': item.lotNumber || '',
            'Serial Number': item.serialNo || '',
            ວັນໝົດອາຍຸ: item.expiryDate || '',
            ສະຖານທີ່: item.srcLocationName || '',
            ວັນທີ: item.input_date_time,
            Admin: item.inputter,
            ສະຖານະ: item.status,
          }
        } else {
          return {
            ກຸ່ມ: item.groupKey,
            ຈຳນວນ: item.count,
            ມູນຄ່າລວມ: item.totalCost,
            ມູນຄ່າສະເລ່ຍ: item.avgCost,
            ສີ: item.colorInfo?.name || '',
            ຂະໜາດ: item.sizeInfo?.name || '',
          }
        }
      })

      const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(
        workbook,
        worksheet,
        this.viewMode === 'detail' ? 'Stock Detail' : 'Stock Summary'
      )

      const filename = `stock_${this.viewMode}_${this.date}_to_${this.date2}.xlsx`
      this.$xlsx.writeFile(workbook, filename)
    },

    async delCard(id) {
      this.isloading = true
      const user = this.user.id

      try {
        const response = await this.$axios.post('card_x', {
          card_id: id.card_id,
          user_id: user,
        })

        this.message = response.data
        this.fetchData()
      } catch (error) {
        this.message = error.message || 'Error deleting card'
        console.log('Error: ' + error)
      }

      this.isloading = false
    },
  },
}
</script>

<style scoped>
/* Apply Noto Sans Lao font globally */
.noto-sans-lao {
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Global font override */
* {
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Circular stat card styling */
.circular-stat-card {
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  background: #fafafa;
}

.circular-stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Stat label styling */
.stat-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 8px;
}

/* Text styling overrides */
.text-h5,
h1, h2, h3, h4, h5, h6 {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.v-chip--outlined {
  border-width: 1px !important;
}

.caption {
  font-size: 0.75rem !important;
  font-family: 'Noto Sans Lao', sans-serif;
}

.color-preview-small {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid #ddd;
  display: inline-block;
}

/* Data table font override */
.v-data-table {
  font-family: 'Noto Sans Lao', sans-serif;
}

.v-data-table th,
.v-data-table td {
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Button font override */
.v-btn {
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Form element font override */
.v-text-field,
.v-select {
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Enhanced responsiveness */
@media (max-width: 768px) {
  .circular-stat-card {
    margin-bottom: 16px;
  }
  
  .v-progress-circular {
    margin-top: 8px !important;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
}

/* Improve text readability */
.text--secondary {
  color: rgba(0, 0, 0, 0.6) !important;
}

/* Card title spacing */
.v-card-title {
  font-family: 'Noto Sans Lao', sans-serif;
  word-break: break-word;
}

/* Compact Layout Styling Override */
.compact-stats-bar {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.stat-badge {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.stat-badge:hover {
  background: #f1f3f5;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.compact-filter-card {
  border-radius: 8px !important;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05) !important;
}

.w-100 {
  width: 100%;
}
</style>