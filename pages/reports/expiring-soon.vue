<template>
  <div>
    <!-- Title Section -->
    <v-row class="mb-4">
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between mb-4">
          <div>
            <h1 class="font-weight-bold primary--text mb-2">
              ລາຍງານສິນຄ້າໃກ້ໝົດອາຍຸ & ໝົດອາຍຸ
            </h1>
            <p class="text-subtitle-1 text--secondary mb-0">
              ຕິດຕາມ ແລະ ກວດສອບສິນຄ້າທີ່ໃກ້ໝົດອາຍຸ ແລະ ໝົດອາຍຸແລ້ວໃນຄັງສິນຄ້າ
            </p>
          </div>
          <v-chip color="danger" dark large>
            <v-icon left>mdi-alert-decagram</v-icon>
            Expiry Alerts
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <!-- KPI Summary Cards -->
    <v-row class="mb-6">
      <!-- Total Affected Products -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto card-kpi" elevation="3" outlined color="blue-grey lighten-5">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="  mb-4 font-weight-bold grey--text text--darken-1">
                ສິນຄ້າທັງໝົດທີ່ມີບັນຫາ
              </div>
              <v-list-item-title class="text-h3 font-weight-bold blue-grey--text text--darken-3">
                {{ totalAffectedProducts }}
              </v-list-item-title>
              <v-list-item-subtitle class="mt-2 text-body-2">
                ...ລາຍການສິນຄ້າທີ່ມີການແຈ້ງເຕືອນ
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-avatar size="64" color="blue-grey lighten-4">
              <v-icon size="40" color="blue-grey darken-2">mdi-package-variant-closed</v-icon>
            </v-avatar>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Expired Count Card -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto card-kpi" elevation="3" outlined color="red lighten-5">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="  mb-4 font-weight-bold red--text text--darken-2">
                ໝົດອາຍຸແລ້ວ (Expired)
              </div>
              <v-list-item-title class="text-h3 font-weight-bold red--text text--darken-3">
                {{ totalExpiredCount }}
              </v-list-item-title>
              <v-list-item-subtitle class="mt-2 text-body-2">
                ຈຳນວນຊິ້ນສິນຄ້າທີ່ໝົດອາຍຸແລ້ວ
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-avatar size="64" color="red lighten-4">
              <v-icon size="40" color="red darken-2">mdi-clock-alert</v-icon>
            </v-avatar>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- Expiring Soon Card -->
      <v-col cols="12" sm="4">
        <v-card class="mx-auto card-kpi" elevation="3" outlined color="orange lighten-5">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="  mb-4 font-weight-bold orange--text text--darken-3">
                ໃກ້ໝົດອາຍຸ (Expiring Soon)
              </div>
              <v-list-item-title class="text-h3 font-weight-bold orange--text text--darken-4">
                {{ totalExpiringSoonCount }}
              </v-list-item-title>
              <v-list-item-subtitle class="mt-2 text-body-2">
                ພາຍໃນ {{ daysThreshold }} ວັນຕໍ່ໜ້າ
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-avatar size="64" color="orange lighten-4">
              <v-icon size="40" color="orange darken-3">mdi-calendar-clock</v-icon>
            </v-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters Section -->
    <v-card class="mb-6" elevation="2">
      <v-card-title class="primary white--text py-3">
        <v-icon left color="white">mdi-filter-variant</v-icon>
        <span class="text-subtitle-1 font-weight-bold">ຄົ້ນຫາ & ຕັ້ງຄ່າການກອງ</span>
      </v-card-title>
      <v-card-text class="pa-4">
        <v-row align="center">
          <!-- Product Search -->
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="search"
              label="ຄົ້ນຫາສິນຄ້າ (ຊື່ ຫຼື ລະຫັດ)"
              outlined
              dense
              hide-details
              prepend-inner-icon="mdi-magnify"
              clearable
            />
          </v-col>

          <!-- Day Threshold Selector -->
          <v-col cols="12" sm="4">
            <v-select
              v-model="daysThreshold"
              :items="thresholdOptions"
              label="ກຳນົດໄລຍະເວລາໃກ້ໝົດອາຍຸ"
              outlined
              dense
              hide-details
              prepend-inner-icon="mdi-history"
              @change="fetchReportData"
            />
          </v-col>

          <!-- Expiry Status Filter -->
          <v-col cols="12" sm="4">
            <v-select
              v-model="statusFilter"
              :items="statusOptions"
              label="ສະຖານະການໝົດອາຍຸ"
              outlined
              dense
              hide-details
              prepend-inner-icon="mdi-shield-alert-outline"
            />
          </v-col>
        </v-row>

        <v-row class="mt-2" justify="end">
          <v-col cols="auto" class="d-flex gap-2">
            <v-btn
              class="px-5 font-weight-bold"
              color="primary"
              :loading="loading"
              @click="fetchReportData"
            >
              <v-icon left>mdi-refresh</v-icon>
              ໂຫຼດຄືນໃໝ່
            </v-btn>

            <v-btn
              v-if="filteredProducts.length > 0"
              class="px-5 font-weight-bold"
              color="success"
              @click="exportToExcel"
            >
              <v-icon left>mdi-microsoft-excel</v-icon>
              ດາວໂຫຼດ Excel
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Main Products Table -->
    <v-card elevation="2">
      <v-data-table
        :headers="headers"
        :items="filteredProducts"
        :search="search"
        :loading="loading"
        :expanded.sync="expanded"
        show-expand
        item-key="product_id"
        class="elevation-1 table-products"
        @item-expanded="onRowExpanded"
      >
        <!-- Expanded Row for Batch Details -->
        <template #expanded-item="{ item }">
          <td :colspan="headers.length" class="pa-4 bg-expanded">
            <v-card outlined class="elevation-1">
              <v-card-title class="py-2 px-4 grey lighten-3 d-flex justify-space-between align-center">
                <span class="text-subtitle-2 font-weight-bold grey--text text--darken-3">
                  <v-icon small class="mr-2">mdi-buffer</v-icon>
                  ລາຍລະອຽດແຕ່ລະລັອດ/ຊຸດສິນຄ້າ (Batches & Lots for: {{ item.pro_name }})
                </span>
                <v-chip small color="primary" class="font-weight-bold">
                  ທັງໝົດ {{ batchLoadingMap[item.product_id] ? '...' : (batchesMap[item.product_id] || []).length }} ລັອດ
                </v-chip>
              </v-card-title>
              <v-card-text class="pa-0">
                <!-- Inner Loading -->
                <div v-if="batchLoadingMap[item.product_id]" class="d-flex justify-center align-center py-6">
                  <v-progress-circular indeterminate color="primary" class="mr-2"></v-progress-circular>
                  <span>ກຳລັງໂຫຼດລາຍລະອຽດລັອດສິນຄ້າ...</span>
                </div>

                <!-- Inner Empty -->
                <div v-else-if="!(batchesMap[item.product_id] || []).length" class="text-center py-6 grey--text">
                  <v-icon large class="mb-2">mdi-package-variant</v-icon>
                  <div>ບໍ່ພົບລາຍການລັອດທີ່ຍັງເຫຼືອສະຕັອກ</div>
                </div>

                <!-- Inner Table -->
                <v-simple-table v-else dense class="table-batches">
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left font-weight-bold">ລັອດ/Batch Number</th>
                        <th class="text-left font-weight-bold">Serial Number</th>
                        <th class="text-left font-weight-bold">ບ່ອນເກັບສິນຄ້າ (Location)</th>
                        <th class="text-right font-weight-bold">ຈຳນວນ</th>
                        <th class="text-right font-weight-bold">ຕົ້ນທຶນ</th>
                        <th class="text-center font-weight-bold">ວັນໝົດອາຍຸ</th>
                        <th class="text-center font-weight-bold">ໄລຍະເວລາເຫຼືອ</th>
                        <th class="text-center font-weight-bold">ສະຖານະ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="batch in batchesMap[item.product_id]" :key="batch.id">
                        <td>{{ batch.lotNumber || 'N/A' }}</td>
                        <td>{{ batch.serialNo || 'N/A' }}</td>
                        <td>
                          <v-chip x-small outlined color="blue-grey" class="font-weight-bold">
                            <v-icon x-small class="mr-1">mdi-map-marker</v-icon>
                            {{ batch.location ? batch.location.name : 'ຄັງຫຼັກ (Main)' }}
                          </v-chip>
                        </td>
                        <td class="text-right font-weight-bold">
                          {{ getFormatNum(batch.stockCardQty || 1) }}
                        </td>
                        <td class="text-right primary--text font-weight-bold">
                          {{ getFormatNum(batch.cost) }}
                        </td>
                        <td class="text-center">{{ formatDate(batch.expiryDate) }}</td>
                        <td class="text-center font-weight-bold">
                          <span :class="getDaysRemainingClass(batch.expiryDate)">
                            {{ getDaysRemainingText(batch.expiryDate) }}
                          </span>
                        </td>
                        <td class="text-center">
                          <v-chip
                            small
                            :color="getExpiryBadgeColor(batch.expiryDate)"
                            dark
                            class="font-weight-bold"
                          >
                            {{ isExpired(batch.expiryDate) ? 'ໝົດອາຍຸແລ້ວ' : 'ໃກ້ໝົດອາຍຸ' }}
                          </v-chip>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </td>
        </template>

        <!-- Columns Custom Templates -->
        <template v-slot:item.pro_id="{ item }">
          <span class="font-weight-bold grey--text text--darken-2">
            {{ item.pro_id }}
          </span>
        </template>

        <template v-slot:item.pro_name="{ item }">
          <div class="font-weight-bold text-subtitle-2">
            {{ item.pro_name }}
          </div>
        </template>

        <template v-slot:item.pro_price="{ item }">
          <span class="font-weight-bold primary--text">
            {{ getFormatNum(item.pro_price) }}
          </span>
        </template>

        <template v-slot:item.cardCount="{ item }">
          <v-chip small outlined color="primary" class="font-weight-bold">
            {{ getFormatNum(item.cardCount) }}
          </v-chip>
        </template>

        <template v-slot:item.expiredCount="{ item }">
          <v-chip
            v-if="item.expiredCount > 0"
            color="red"
            dark
            small
            class="font-weight-bold"
          >
            {{ getFormatNum(item.expiredCount) }}
          </v-chip>
          <span v-else class="grey--text text--lighten-1">-</span>
        </template>

        <template v-slot:item.expiringSoonCount="{ item }">
          <v-chip
            v-if="item.expiringSoonCount > 0"
            color="orange"
            dark
            small
            class="font-weight-bold"
          >
            {{ getFormatNum(item.expiringSoonCount) }}
          </v-chip>
          <span v-else class="grey--text text--lighten-1">-</span>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip
            v-if="item.expiredCount > 0"
            color="red"
            outlined
            small
            class="font-weight-bold"
          >
            <v-icon left x-small>mdi-alert-circle</v-icon> Danger (ມີໝົດອາຍຸ)
          </v-chip>
          <v-chip
            v-else-if="item.expiringSoonCount > 0"
            color="orange"
            outlined
            small
            class="font-weight-bold"
          >
            <v-icon left x-small>mdi-alert</v-icon> Warning (ໃກ້ໝົດອາຍຸ)
          </v-chip>
          <v-chip
            v-else
            color="success"
            outlined
            small
            class="font-weight-bold"
          >
            <v-icon left x-small>mdi-check-circle</v-icon> Normal
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  middleware: 'auths',
  data() {
    return {
      loading: false,
      search: '',
      daysThreshold: 30,
      statusFilter: 'all',
      products: [],
      expanded: [],
      batchesMap: {}, // product_id -> Array of batches
      batchLoadingMap: {}, // product_id -> Boolean

      // Threshold dropdown options
      thresholdOptions: [
        { text: 'ພາຍໃນ 15 ວັນຕໍ່ໜ້າ', value: 15 },
        { text: 'ພາຍໃນ 30 ວັນຕໍ່ໜ້າ (ມາດຕະຖານ)', value: 30 },
        { text: 'ພາຍໃນ 60 ວັນຕໍ່ໜ້າ', value: 60 },
        { text: 'ພາຍໃນ 90 ວັນຕໍ່ໜ້າ', value: 90 },
      ],

      // Expiry filter dropdown options
      statusOptions: [
        { text: 'ທັງໝົດທີ່ມີການແຈ້ງເຕືອນ (All)', value: 'all' },
        { text: 'ສະເພາະສິນຄ້າທີ່ໝົດອາຍຸແລ້ວ (Expired)', value: 'expired' },
        { text: 'ສະເພາະສິນຄ້າທີ່ໃກ້ໝົດອາຍຸ (Expiring soon)', value: 'expiring' },
      ],

      // Main Table Headers (flat keys for ESLint compatibility)
      headers: [
        { text: 'ລະຫັດສິນຄ້າ (ID)', align: 'start', value: 'pro_id', width: '150px' },
        { text: 'ຊື່ສິນຄ້າ (Product Name)', align: 'start', value: 'pro_name' },
        { text: 'ລາຄາຂາຍ (Price)', align: 'end', value: 'pro_price', width: '120px' },
        { text: 'ສະຕັອກທັງໝົດ', align: 'right', value: 'cardCount', width: '130px' },
        { text: 'ໝົດອາຍຸແລ້ວ', align: 'center', value: 'expiredCount', width: '120px' },
        { text: 'ໃກ້ໝົດອາຍຸ', align: 'center', value: 'expiringSoonCount', width: '120px' },
        { text: 'ສະຖານະ', align: 'center', value: 'status', width: '160px', sortable: false },
        { text: '', value: 'data-table-expand' },
      ],
    }
  },

  computed: {
    // Filter products list based on status filters and search string
    filteredProducts() {
      return this.products.filter((product) => {
        // Must have either expired or expiring soon items to be included in this report
        const hasExpiryIssue = product.expiredCount > 0 || product.expiringSoonCount > 0
        if (!hasExpiryIssue) return false

        // Apply status filter
        if (this.statusFilter === 'expired' && product.expiredCount === 0) {
          return false
        }
        if (this.statusFilter === 'expiring' && product.expiringSoonCount === 0) {
          return false
        }

        return true
      })
    },

    // KPI: Total number of products with expiry issues
    totalAffectedProducts() {
      return this.filteredProducts.length
    },

    // KPI: Sum of all expired items across filtered products
    totalExpiredCount() {
      return this.filteredProducts.reduce((sum, item) => sum + Number(item.expiredCount || 0), 0)
    },

    // KPI: Sum of all expiring soon items across filtered products
    totalExpiringSoonCount() {
      return this.filteredProducts.reduce((sum, item) => sum + Number(item.expiringSoonCount || 0), 0)
    },
  },

  async created() {
    await this.fetchReportData()
  },

  methods: {
    // Format numeric values with grouping commas
    getFormatNum(val) {
      if (val === undefined || val === null) return '0'
      return new Intl.NumberFormat().format(val)
    },

    // Fetch the summary grouped by products from backend api
    async fetchReportData() {
      this.loading = true
      this.expanded = [] // Reset expanded items when data changes
      try {
        const response = await this.$axios.get(`/api/card/find/count/group_by_product?days=${this.daysThreshold}`)
        const rawProducts = response.data || []
        // Flatten nested product properties for clean UI rendering and flat table slot references
        this.products = rawProducts.map((item) => {
          return {
            ...item,
            pro_id: item.product ? item.product.pro_id : 'N/A',
            pro_name: item.product ? item.product.pro_name : 'N/A',
            pro_price: item.product ? item.product.pro_price : 0,
          }
        })
      } catch (err) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນລາຍງານ: ' + (err.response?.data?.message || err.message))
      } finally {
        this.loading = false
      }
    },

    // Callback event when product row is expanded to fetch details on demand
    async onRowExpanded({ item, value }) {
      // value is boolean indicating expansion state
      if (!value) return // If row is collapsed, do nothing

      const productId = item.product_id

      // If we already loaded this product's batches, don't fetch again
      if (this.batchesMap[productId]) return

      this.$set(this.batchLoadingMap, productId, true)
      try {
        // Fetch only active, unused stock cards of this product
        const response = await this.$axios.get(`/api/card/find`, {
          params: {
            productId,
            card_isused: 0,
            includeExpired: true,
            days: this.daysThreshold,
          },
        })

        // Filter the details on client to only show expired or expiring soon batches
        const allBatches = response.data || []
        const expiringOrExpired = allBatches.filter((b) => {
          if (!b.expiryDate) return false
          const expiryTime = new Date(b.expiryDate).getTime()
          const nowTime = new Date().getTime()
          const diffDays = (expiryTime - nowTime) / (1000 * 3600 * 24)

          // Is expired or falls within threshold days
          return diffDays < this.daysThreshold
        })

        this.$set(this.batchesMap, productId, expiringOrExpired)
      } catch (err) {
        this.$toast.error('ບໍ່ສາມາດດຶງຂໍ້ມູນລັອດສິນຄ້າໄດ້')
      } finally {
        this.$set(this.batchLoadingMap, productId, false)
      }
    },

    // Helper: format standard ISO date string to DD/MM/YYYY
    formatDate(dateStr) {
      if (!dateStr) return 'N/A'
      try {
        const [year, month, day] = dateStr.split('-')
        if (year && month && day) {
          return `${day}/${month}/${year}`
        }
        const date = new Date(dateStr)
        const d = String(date.getDate()).padStart(2, '0')
        const m = String(date.getMonth() + 1).padStart(2, '0')
        const y = date.getFullYear()
        return `${d}/${m}/${y}`
      } catch (e) {
        return dateStr
      }
    },

    // Helper: check if a date is already in the past
    isExpired(expiryDate) {
      if (!expiryDate) return false
      const expiry = new Date(expiryDate)
      expiry.setHours(23, 59, 59, 999) // include the expiration day fully
      return expiry < new Date()
    },

    // Helper: calculate days remaining / elapsed and format message
    getDaysRemainingText(expiryDate) {
      if (!expiryDate) return 'N/A'
      const expiry = new Date(expiryDate)
      expiry.setHours(0, 0, 0, 0)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const diffTime = expiry.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays < 0) {
        return `ກາຍກຳນົດ ${Math.abs(diffDays)} ວັນ`
      } else if (diffDays === 0) {
        return 'ໝົດອາຍຸມື້ນີ້'
      } else {
        return `ເຫຼືອ ${diffDays} ວັນ`
      }
    },

    // Helper: CSS classes for days remaining info
    getDaysRemainingClass(expiryDate) {
      if (this.isExpired(expiryDate)) {
        return 'red--text font-weight-bold'
      }
      const days = this.getDaysRemainingInt(expiryDate)
      if (days <= 10) {
        return 'orange--text text--darken-3 font-weight-bold'
      }
      return 'amber--text text--darken-4 font-weight-bold'
    },

    // Helper: get raw integer difference of days
    getDaysRemainingInt(expiryDate) {
      if (!expiryDate) return 0
      const expiry = new Date(expiryDate)
      const today = new Date()
      const diffTime = expiry - today
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    },

    // Helper: color string for badge
    getExpiryBadgeColor(expiryDate) {
      return this.isExpired(expiryDate) ? 'red darken-2' : 'orange darken-2'
    },

    // Excel Export implementation
    async exportToExcel() {
      if (!this.$xlsx) {
        this.$toast.error('ລະບົບ Excel plugin ບໍ່ພ້ອມໃຊ້ງານ')
        return
      }

      this.loading = true
      try {
        const headers = [
          'ລະຫັດສິນຄ້າ (Pro ID)',
          'ຊື່ສິນຄ້າ (Product Name)',
          'ລາຄາຂາຍ (Price)',
          'ລັອດ/Batch Number',
          'Serial Number',
          'ບ່ອນເກັບສິນຄ້າ (Location)',
          'ຈຳນວນ (Qty)',
          'ຕົ້ນທຶນ (Cost)',
          'ວັນໝົດອາຍຸ (Expiry Date)',
          'ຈຳນວນວັນທີ່ເຫຼືອ (Days Left)',
          'ສະຖານະ (Status)',
        ]

        const rows = []

        // To export a complete list of all expiring items, we fetch details for each affected product.
        for (const item of this.filteredProducts) {
          const productId = item.product_id
          let batches = this.batchesMap[productId]

          // If detail is not loaded, fetch it synchronously for exporting
          if (!batches) {
            try {
              const res = await this.$axios.get(`/api/card/find`, {
                params: {
                  productId,
                  card_isused: 0,
                  includeExpired: true,
                  days: this.daysThreshold,
                },
              })
              const allBatches = res.data || []
              batches = allBatches.filter((b) => {
                if (!b.expiryDate) return false
                const expiryTime = new Date(b.expiryDate).getTime()
                const nowTime = new Date().getTime()
                const diffDays = (expiryTime - nowTime) / (1000 * 3600 * 24)
                return diffDays < this.daysThreshold
              })
              this.$set(this.batchesMap, productId, batches)
            } catch (err) {
              batches = []
            }
          }

          const proName = item.pro_name
          const proIdStr = item.pro_id
          const price = Number(item.pro_price || 0)

          batches.forEach((batch) => {
            const isExp = this.isExpired(batch.expiryDate)
            const daysLeft = this.getDaysRemainingInt(batch.expiryDate)
            const statusLabel = isExp ? 'ໝົດອາຍຸແລ້ວ (Expired)' : 'ໃກ້ໝົດອາຍຸ (Expiring)'

            rows.push([
              proIdStr,
              proName,
              price,
              batch.lotNumber || 'N/A',
              batch.serialNo || 'N/A',
              batch.location ? batch.location.name : 'ຄັງຫຼັກ (Main)',
              Number(batch.stockCardQty || 1),
              Number(batch.cost || 0),
              this.formatDate(batch.expiryDate),
              daysLeft,
              statusLabel,
            ])
          })
        }

        const worksheetData = [headers, ...rows]
        const worksheet = this.$xlsx.utils.aoa_to_sheet(worksheetData)
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Expiring Products')

        const filename = `expiring-products-alert-${this.daysThreshold}-days.xlsx`
        this.$xlsx.writeFile(workbook, filename)
        this.$toast.success('ດາວໂຫຼດໄຟລ໌ Excel ສຳເລັດແລ້ວ!')
      } catch (err) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການດາວໂຫຼດ Excel: ' + err.message)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.card-kpi {
  transition: transform 0.2s;
}
.card-kpi:hover {
  transform: translateY(-2px);
}
.bg-expanded {
  background-color: #fafafa !important;
}
.table-products >>> th {
  background-color: #f1f3f5 !important;
  color: #343a40 !important;
  font-family: 'Noto Sans Lao', sans-serif !important;
  font-size: 0.9rem !important;
}
.table-products >>> td {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
.table-batches th {
  background-color: #eceff1 !important;
  color: #455a64 !important;
  font-family: 'Noto Sans Lao', sans-serif !important;
  font-size: 0.85rem !important;
  height: 36px !important;
}
.table-batches td {
  font-family: 'Noto Sans Lao', sans-serif !important;
  font-size: 0.85rem !important;
  height: 36px !important;
}
h1, p, div, span, select, input {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
</style>
