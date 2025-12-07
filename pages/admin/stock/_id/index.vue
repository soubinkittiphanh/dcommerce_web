<template>
  <div class="text-center">
    <h1>ລາຍການ ສະຕັອກສິນຄ້າ</h1>
    <!-- <v-chip color="secondary" outlined x-small>
      <v-icon x-small left>mdi-barcode</v-icon>
      111
    </v-chip> -->
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

    <!-- Enhanced Summary Cards -->
    <v-row class="mb-4">
      <v-col cols="12" sm="6" md="2">
        <v-card class="pa-4" color="success" dark>
          <v-card-title class="text-h6">ພ້ອມໃຊ້</v-card-title>
          <v-card-text>
            <div class="text-h4">{{ summaryStats.available }}</div>
            <div class="text-caption">
              {{ summaryStats.availablePercent }}% ຂອງທັງຫມົດ
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="pa-4" color="warning" dark>
          <v-card-title class="text-h6">ໃຊ້ງານແລ້ວ</v-card-title>
          <v-card-text>
            <div class="text-h4">{{ summaryStats.used }}</div>
            <div class="text-caption">
              {{ summaryStats.usedPercent }}% ຂອງທັງຫມົດ
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="pa-4" color="error" dark>
          <v-card-title class="text-h6">ຖືກລົບ</v-card-title>
          <v-card-text>
            <div class="text-h4">{{ summaryStats.deleted }}</div>
            <div class="text-caption">
              {{ summaryStats.deletedPercent }}% ຂອງທັງຫມົດ
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="pa-4" color="orange" dark>
          <v-card-title class="text-h6">ໝົດອາຍຸ</v-card-title>
          <v-card-text>
            <div class="text-h4">{{ summaryStats.expired }}</div>
            <div class="text-caption">
              {{ summaryStats.expiredPercent }}% ຂອງທັງຫມົດ
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="pa-4" color="amber" dark>
          <v-card-title class="text-h6">ໃກ້ໝົດອາຍຸ</v-card-title>
          <v-card-text>
            <div class="text-h4">{{ summaryStats.expiringSoon }}</div>
            <div class="text-caption">ໃນ 30 ວັນ</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="2">
        <v-card class="pa-4" color="primary" dark>
          <v-card-title class="text-h6">ມູນຄ່າລວມ</v-card-title>
          <v-card-text>
            <div class="text-h4">
              {{ formatNumber(summaryStats.totalCost) }}
            </div>
            <div class="text-caption">ກີບ</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Enhanced Cost Analysis Cards -->
    <v-row class="mb-4">
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title class="text-subtitle-1"
            >ມູນຄ່າສິນຄ້າພ້ອມໃຊ້</v-card-title
          >
          <v-card-text>
            <div class="text-h5 success--text">
              {{ formatNumber(summaryStats.availableCost) }}
            </div>
            <div class="text-caption">ກີບ</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title class="text-subtitle-1"
            >ມູນຄ່າສິນຄ້າໃຊ້ງານແລ້ວ</v-card-title
          >
          <v-card-text>
            <div class="text-h5 warning--text">
              {{ formatNumber(summaryStats.usedCost) }}
            </div>
            <div class="text-caption">ກີບ</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title class="text-subtitle-1"
            >ມູນຄ່າສິນຄ້າໝົດອາຍຸ</v-card-title
          >
          <v-card-text>
            <div class="text-h5 orange--text">
              {{ formatNumber(summaryStats.expiredCost) }}
            </div>
            <div class="text-caption">ກີບ</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-card-title class="text-subtitle-1">ສິນຄ້າມີລະຫັດ Lot</v-card-title>
          <v-card-text>
            <div class="text-h5 info--text">{{ summaryStats.withLot }}</div>
            <div class="text-caption">ລາຍການ</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="12" lg="4">
            <!-- Date Range Filters -->
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
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>

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
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  v-bind="attrs"
                  @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date2"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" lg="4">
            <!-- Search and Filters -->
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="ຊອກຫາ"
              single-line
              hide-details
            />
            <v-text-field
              v-model="userId"
              append-icon="mdi-account"
              label="ລະຫັດແອັດມິນ"
              single-line
              hide-details
            />
            <v-text-field
              v-model="lotFilter"
              append-icon="mdi-barcode"
              label="ຊອກຫາ Lot Number"
              single-line
              hide-details
              @input="applyFilters"
            />
          </v-col>

          <v-col cols="12" lg="4">
            <!-- Status and Action Buttons -->
            <v-select
              v-model="statusFilter"
              :items="statusOptions"
              label="ກັ່ນຕອງສະຖານະ"
              @change="applyFilters"
              clearable
            ></v-select>

            <v-select
              v-model="expiryFilter"
              :items="expiryOptions"
              label="ກັ່ນຕອງອາຍຸການໃຊ້"
              @change="applyFilters"
              clearable
            ></v-select>

            <v-row>
              <v-col>
                <v-btn
                  @click="fetchData"
                  class="primary"
                  size="large"
                  variant="outlined"
                  rounded
                  block
                >
                  <v-icon left>mdi-reload</v-icon>
                  ດຶງລາຍງານ
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  @click="exportToExcel"
                  class="success"
                  size="large"
                  variant="outlined"
                  rounded
                  block
                >
                  <v-icon left>mdi-microsoft-excel</v-icon>
                  Export
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-title>

      <!-- Enhanced Data Table -->
      <v-data-table
        v-if="filteredData"
        :headers="headers"
        :search="search"
        :items="filteredData"
        :items-per-page="15"
        class="elevation-1"
      >
        <template v-slot:[`item.cost`]="{ item }">
          <span class="font-weight-bold">{{ formatNumber(item.cost) }}</span>
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getStatusColor(item.status)" dark small>
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:[`item.lotNumber`]="{ item }">
          <v-chip v-if="item.lotNumber" color="secondary" outlined x-small>
            <v-icon x-small left>mdi-barcode</v-icon>
            {{ item.lotNumber }}
          </v-chip>
          <span v-else class="grey--text">-</span>
        </template>

        <template v-slot:[`item.expiryDate`]="{ item }">
          <div v-if="item.expiryDate">
            <v-chip :color="getExpiryColor(item.expiryDate)" dark x-small>
              <v-icon x-small left>mdi-calendar</v-icon>
              {{ formatDate(item.expiryDate) }}
            </v-chip>
            <div
              class="caption mt-1"
              :class="getExpiryColor(item.expiryDate) + '--text'"
            >
              {{ getExpiryStatus(item.expiryDate) }}
            </div>
          </div>
          <span v-else class="grey--text">-</span>
        </template>

        <template v-slot:[`item.costDetails`]="{ item }">
          <div>
            <div class="font-weight-bold">{{ formatNumber(item.cost) }}</div>
            <div v-if="item.costType" class="caption">
              {{ item.costType === 'perUnit' ? 'ຕໍ່ຫົວໜ່ວຍ' : 'ລວມທັງໝົດ' }}
            </div>
            <div
              v-if="item.totalCost && item.costType === 'perUnit'"
              class="caption grey--text"
            >
              ລວມ: {{ formatNumber(item.totalCost) }}
            </div>
          </div>
        </template>

        <template v-slot:[`item.location`]="{ item }">
          <span v-if="item.srcLocationName">{{ item.srcLocationName }}</span>
          <span v-else class="grey--text">-</span>
        </template>

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>
              ສິນຄ້າທັງຫມົດ: {{ filteredData.length }}
              <span v-if="statusFilter || expiryFilter" class="text-caption">
                (ກັ່ນຕອງ: {{ statusFilter || expiryFilter }})
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
              >
                <v-icon small left>mdi-clock-alert</v-icon>
                ໃກ້ໝົດອາຍຸ
              </v-chip>
              <v-chip
                @click="setQuickFilter('expired')"
                :color="expiryFilter === 'expired' ? 'error' : 'default'"
                small
              >
                <v-icon small left>mdi-calendar-remove</v-icon>
                ໝົດອາຍຸແລ້ວ
              </v-chip>
              <v-chip
                @click="setQuickFilter('withLot')"
                :color="lotFilter ? 'info' : 'default'"
                small
              >
                <v-icon small left>mdi-barcode</v-icon>
                ມີ Lot
              </v-chip>
            </v-chip-group>
          </v-toolbar>
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
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { getFormatNum } from '~/common'

export default {
  middleware: 'auths',
  validate(data) {
    console.info(`DATA PARSING ${JSON.stringify(data)}`)
    console.log('MIXIN ID: ' + data.params.id)
    return /^\d+$/.test(data.params.id)
  },

  watch: {
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
      this.calculateSummaryStats()
      this.applyFilters()
    },
  },

  data() {
    return {
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
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      search: '',
      statusFilter: null,
      expiryFilter: null,
      lotFilter: '',
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
      headers: [
        { text: 'ID', align: 'center', value: 'card_id', width: '80px' },
        { text: 'ລະຫັດສິນຄ້າ', align: 'center', value: 'pro_id' },
        {
          text: 'ຕົ້ນທຶນ',
          align: 'center',
          value: 'costDetails',
          sortable: false,
        },
        { text: 'Lot Number', align: 'center', value: 'lotNumber' },
        { text: 'ວັນໝົດອາຍຸ', align: 'center', value: 'expiryDate' },
        { text: 'ສະຖານທີ່', align: 'center', value: 'location' },
        { text: 'ວັນທີ', align: 'center', value: 'input_date_time' },
        { text: 'Admin', align: 'center', value: 'inputter' },
        { text: 'ສະຖານະ', align: 'center', value: 'status' },
        { text: 'ຜູ້ລົບ', align: 'center', value: 'updater' },
        { text: 'ເວລາລົບ', align: 'center', value: 'update_time' },
        {
          text: 'ລົບ',
          align: 'center',
          value: 'function',
          sortable: false,
          width: '100px',
        },
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
    this.fetchData()
  },

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    user() {
      return this.$auth.user || ''
    },
  },

  methods: {
    formatNumber(value) {
      return getFormatNum(value)
    },

    getStatusColor(status) {
      switch (status) {
        case 'ພ້ອມໃຊ້':
          return 'success'
        case 'ໃຊ້ງານແລ້ວ':
          return 'warning'
        case 'ຖືກລົບ':
          return 'error'
        default:
          return 'grey'
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
      if (diffDays <= 7) return `ອີກ ${diffDays} ວັນໝົດອາຍຸ`
      if (diffDays <= 30) return `ອີກ ${diffDays} ວັນໝົດອາຍຸ`
      return `ອີກ ${diffDays} ວັນໝົດອາຍຸ`
    },

    calculateSummaryStats() {
      const total = this.loaddata.length
      const available = this.loaddata.filter(
        (item) => item.status === 'ພ້ອມໃຊ້'
      ).length
      const used = this.loaddata.filter(
        (item) => item.status === 'ໃຊ້ງານແລ້ວ'
      ).length
      const deleted = this.loaddata.filter(
        (item) => item.status === 'ຖືກລົບ'
      ).length

      // Calculate expired and expiring items
      const today = new Date()
      const thirtyDaysFromNow = new Date(
        today.getTime() + 30 * 24 * 60 * 60 * 1000
      )

      const expired = this.loaddata.filter((item) => {
        return item.expiryDate && new Date(item.expiryDate) < today
      }).length

      const expiringSoon = this.loaddata.filter((item) => {
        if (!item.expiryDate) return false
        const expiry = new Date(item.expiryDate)
        return expiry >= today && expiry <= thirtyDaysFromNow
      }).length

      const withLot = this.loaddata.filter((item) => item.lotNumber).length

      // Calculate costs
      const totalCost = this.loaddata.reduce(
        (sum, item) => sum + parseFloat(item.cost || 0),
        0
      )
      const availableCost = this.loaddata
        .filter((item) => item.status === 'ພ້ອມໃຊ້')
        .reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)
      const usedCost = this.loaddata
        .filter((item) => item.status === 'ໃຊ້ງານແລ້ວ')
        .reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)
      const deletedCost = this.loaddata
        .filter((item) => item.status === 'ຖືກລົບ')
        .reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)
      const expiredCost = this.loaddata
        .filter((item) => item.expiryDate && new Date(item.expiryDate) < today)
        .reduce((sum, item) => sum + parseFloat(item.cost || 0), 0)

      this.summaryStats = {
        available,
        used,
        deleted,
        expired,
        expiringSoon,
        withLot,
        totalCost,
        availableCost,
        usedCost,
        deletedCost,
        expiredCost,
        availablePercent:
          total > 0 ? ((available / total) * 100).toFixed(1) : 0,
        usedPercent: total > 0 ? ((used / total) * 100).toFixed(1) : 0,
        deletedPercent: total > 0 ? ((deleted / total) * 100).toFixed(1) : 0,
        expiredPercent: total > 0 ? ((expired / total) * 100).toFixed(1) : 0,
      }
    },

    applyFilters() {
      let filtered = [...this.loaddata]

      // Status filter
      if (this.statusFilter) {
        filtered = filtered.filter((item) => item.status === this.statusFilter)
      }

      // Expiry filter
      if (this.expiryFilter) {
        const today = new Date()
        const thirtyDaysFromNow = new Date(
          today.getTime() + 30 * 24 * 60 * 60 * 1000
        )

        filtered = filtered.filter((item) => {
          if (!item.expiryDate) return this.expiryFilter === 'valid'

          const expiry = new Date(item.expiryDate)

          switch (this.expiryFilter) {
            case 'expired':
              return expiry < today
            case 'expiring':
              return expiry >= today && expiry <= thirtyDaysFromNow
            case 'valid':
              return expiry > thirtyDaysFromNow
            default:
              return true
          }
        })
      }

      // Lot filter
      if (this.lotFilter) {
        filtered = filtered.filter(
          (item) =>
            item.lotNumber &&
            item.lotNumber.toLowerCase().includes(this.lotFilter.toLowerCase())
        )
      }

      this.filteredData = filtered
    },

    setQuickFilter(filterType) {
      switch (filterType) {
        case 'expiring':
          this.expiryFilter =
            this.expiryFilter === 'expiring' ? null : 'expiring'
          break
        case 'expired':
          this.expiryFilter = this.expiryFilter === 'expired' ? null : 'expired'
          break
        case 'withLot':
          this.lotFilter = this.lotFilter ? '' : 'LOT'
          break
      }
      this.applyFilters()
    },

    async fetchData() {
      this.isloading = true
      const prodId = this.$route.params.id
      console.log('product_id: ' + prodId)

      try {
        const response = await this.$axios.get(
          `card_f/?pro_id=${prodId}&fDate=${this.date}&tDate=${this.date2}&userId=${this.userId}&includeEnhanced=true`
        )

        this.loaddata = response.data.map((el) => {
          return {
            card_id: el.id,
            pro_id: el.product_id,
            card_number: el.card_number,
            cost: el.cost,
            costPerUnit: el.costPerUnit,
            totalCost: el.totalCost,
            costType: el.costType,
            lotNumber: el.lotNumber,
            expiryDate: el.expiryDate,
            srcLocationName: el.location?.name || '',
            inputter: el.inputter + ' ' + (el.cus_name || ''),
            status:
              el.card_isused === 1
                ? 'ໃຊ້ງານແລ້ວ'
                : el.card_isused === 2
                ? 'ຖືກລົບ'
                : 'ພ້ອມໃຊ້',
            input_date_time: el.card_input_date,
            updater: el.update_user,
            update_time: el.update_time,
            function: el.id,
          }
        })

        this.calculateSummaryStats()
        this.applyFilters()
      } catch (error) {
        this.message = error.message || 'Error loading data'
        console.log('Error: ' + error)
      }

      this.isloading = false
    },

    formatDate(date) {
      if (!date) return null
      if (typeof date === 'string' && date.includes('/')) return date

      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${day}/${month}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    exportToExcel() {
      const exportData = this.filteredData.map((item) => ({
        ID: item.card_id,
        ລະຫັດສິນຄ້າ: item.pro_id,
        ຕົ້ນທຶນ: item.cost,
        ຕົ້ນທຶນຕໍ່ຫົວໜ່ວຍ: item.costPerUnit || '',
        ຕົ້ນທຶນລວມ: item.totalCost || '',
        ປະເພດຄ່າໃຊ້ຈ່າຍ: item.costType || '',
        'Lot Number': item.lotNumber || '',
        ວັນໝົດອາຍຸ: item.expiryDate || '',
        ສະຖານທີ່: item.srcLocationName || '',
        ວັນທີ: item.input_date_time,
        Admin: item.inputter,
        ສະຖານະ: item.status,
        ຜູ້ລົບ: item.updater || '',
        ເວລາລົບ: item.update_time || '',
      }))

      const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(
        workbook,
        worksheet,
        'Enhanced Stock Report'
      )

      const filename = `enhanced_stock_report_${this.date}_to_${this.date2}.xlsx`
      this.$xlsx.writeFile(workbook, filename)
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0')
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    async delCard(id) {
      this.isloading = true
      const prodId = this.$route.params.id
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
.text-h4 {
  font-weight: bold;
}

.v-chip--outlined {
  border-width: 1px !important;
}

.caption {
  font-size: 0.75rem !important;
}
</style>