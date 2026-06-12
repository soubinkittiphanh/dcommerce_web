<template>
  <div>
    <!-- Page Header -->
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between mb-6">
          <div>
            <h1 class="font-weight-bold primary--text mb-2">
              ລາຍງານສະຕັອກຍ້ອນຫຼັງ
            </h1>
            <p class="text-subtitle-1 text--secondary mb-0">
              Stock Backdate Report - ກວດສອບຍອດສະຕັອກ ແລະ ມູນຄ່າຍ້ອນຫຼັງ
            </p>
          </div>
          <v-chip
            color="primary"
            outlined
            large
          >
            <v-icon left>mdi-history</v-icon>
            Backdate Audit
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <!-- Filters Section -->
    <v-card class="mb-6" elevation="2">
      <v-card-title class="primary white--text">
        <v-icon left color="white">mdi-filter-variant</v-icon>
        ຕົວກັ່ນຕອງ & ຕັ້ງຄ່າ (Filters)
      </v-card-title>
      <v-card-text class="pa-6">
        <v-row align="end">
          <!-- Target Date Picker -->
          <v-col cols="12" md="4">
            <div>
              <h4 class="text-subtitle-1 font-weight-medium mb-3 primary--text">
                <v-icon small color="primary" class="mr-2">mdi-calendar-clock</v-icon>
                ເລືອກວັນທີ & ເວລາຍ້ອນຫຼັງ *
              </h4>
              <v-text-field
                v-model="targetDatetime"
                type="datetime-local"
                outlined
                dense
                hide-details
                @change="onDatetimeChange"
              />
            </div>
          </v-col>

          <!-- Product AutoComplete Filter -->
          <v-col cols="12" md="4">
            <div>
              <h4 class="text-subtitle-1 font-weight-medium mb-3 primary--text">
                <v-icon small color="primary" class="mr-2">mdi-package-variant-closed</v-icon>
                ເລືອກສິນຄ້າ (Product Filter)
              </h4>
              <v-autocomplete
                v-model="selectedProductId"
                :items="productFilterOptions"
                label="ເລືອກສິນຄ້າ..."
                outlined
                dense
                hide-details
                clearable
                @change="generateReport"
              />
            </div>
          </v-col>

          <!-- Local Table Search -->
          <v-col cols="12" md="4">
            <div>
              <h4 class="text-subtitle-1 font-weight-medium mb-3 primary--text">
                <v-icon small color="primary" class="mr-2">mdi-magnify</v-icon>
                ຄົ້ນຫາໃນຕາຕະລາງ (Search)
              </h4>
              <v-text-field
                v-model="searchText"
                label="ຄົ້ນຫາຊື່ ຫຼື ລະຫັດສິນຄ້າ..."
                outlined
                dense
                hide-details
                prepend-inner-icon="mdi-magnify"
                clearable
              />
            </div>
          </v-col>

          <!-- Action Buttons -->
          <v-col cols="12" class="d-flex justify-space-between align-center mt-4">
            <div class=" text--secondary font-italic">
              * ລະບົບຈະຄິດໄລ່ຍອດສະຕັອກຈາກບັດ (Cards) ທີ່ຖືກຕ້ອງຕາມວັນທີເລືອກ.
            </div>
            <div class="d-flex gap-3">
              <v-btn
                color="primary"
                :loading="loading"
                @click="generateReport"
                large
              >
                <v-icon left>mdi-refresh</v-icon>
                ດຶງລາຍງານ (Fetch Report)
              </v-btn>
              
              <v-btn
                v-if="!loading && reportData.length > 0"
                color="success"
                @click="exportToExcel"
                large
              >
                <v-icon left>mdi-microsoft-excel</v-icon>
                ດາວໂຫຼດ Excel
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Loading State -->
    <v-card v-if="loading" class="text-center pa-12 mb-6" elevation="2">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
        class="mb-4"
      />
      <h3 class="text-h6 primary--text">ກຳລັງຄິດໄລ່ຍອດສະຕັອກຍ້ອນຫຼັງ...</h3>
      <p class="text-body-2 text--secondary">ລະບົບກຳລັງປະມວນຜົນຂໍ້ມູນປະຫວັດສະຕັອກ. ອາດໃຊ້ເວລາຈັກໜ້ອຍ.</p>
    </v-card>

    <!-- Error State -->
    <v-alert
      v-if="error && !loading"
      type="error"
      prominent
      border="left"
      class="mb-6"
    >
      <v-row align="center">
        <v-col class="grow">
          <div class="text-h6">ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ</div>
          <div>{{ error }}</div>
        </v-col>
        <v-col class="shrink">
          <v-btn color="error" outlined dark @click="generateReport">
            ລອງໃໝ່
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>

    <!-- Overview Cards -->
    <v-row v-if="!loading && !error && reportData.length > 0" class="mb-6">
      <!-- Total Products -->
      <v-col cols="12" sm="6" lg="3">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex align-center justify-space-between pa-5">
            <div>
              <div class="text-subtitle-2 text--secondary mb-1">ສິນຄ້າທັງໝົດ</div>
              <div class="text-h5 font-weight-bold primary--text">{{ formattedTotalProducts }} Items</div>
            </div>
            <v-avatar color="primary lighten-4" size="48">
              <v-icon color="primary" size="28">mdi-package-variant</v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Total Backdate Stock -->
      <v-col cols="12" sm="6" lg="3">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex align-center justify-space-between pa-5">
            <div>
              <div class="text-subtitle-2 text--secondary mb-1">ສະຕັອກຍ້ອນຫຼັງລວມ</div>
              <div class="text-h5 font-weight-bold success--text">{{ formatNumber(totals.stockAtBackdate) }} Unit</div>
              <div class=" text--secondary mt-1">
                ສະຕັອກປັດຈຸບັນ: {{ formatNumber(totals.currentStock) }}
              </div>
            </div>
            <v-avatar color="success lighten-4" size="48">
              <v-icon color="success" size="28">mdi-chart-line</v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Total Cost Value -->
      <v-col cols="12" sm="6" lg="3">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex align-center justify-space-between pa-5">
            <div>
              <div class="text-subtitle-2 text--secondary mb-1">ມູນຄ່າຕົ້ນທຶນຍ້ອນຫຼັງ</div>
              <div class="text-h5 font-weight-bold orange--text">{{ formatNumber(totals.costValueAtBackdate) }} {{ currencyCode }}</div>
              <div class=" text--secondary mt-1">
                ຕົ້ນທຶນປັດຈຸບັນ: {{ formatNumber(totals.currentCostValue) }}
              </div>
            </div>
            <v-avatar color="orange lighten-4" size="48">
              <v-icon color="orange" size="28">mdi-currency-usd</v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Total Retail Value -->
      <v-col cols="12" sm="6" lg="3">
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex align-center justify-space-between pa-5">
            <div>
              <div class="text-subtitle-2 text--secondary mb-1">ມູນຄ່າຂາຍຍ້ອນຫຼັງ</div>
              <div class="text-h5 font-weight-bold purple--text">{{ formatNumber(totals.retailValueAtBackdate) }} {{ currencyCode }}</div>
              <div class=" text--secondary mt-1">
                ມູນຄ່າຂາຍປັດຈຸບັນ: {{ formatNumber(totals.currentRetailValue) }}
              </div>
            </div>
            <v-avatar color="purple lighten-4" size="48">
              <v-icon color="purple" size="28">mdi-storefront</v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Main Data Table -->
    <v-card v-if="!loading && !error" class="mb-6" elevation="3">
      <v-card-title class="primary white--text">
        <div class="d-flex justify-space-between align-center w-100">
          <div class="d-flex align-center">
            <v-icon left color="white">mdi-table-clock</v-icon>
            ລາຍລະອຽດສະຕັອກໃນວັນທີ: {{ formatDisplayDatetime }}
          </div>
          <div class="d-flex gap-2">
            <v-chip color="success" small dark>
              <v-icon left small>mdi-arrow-up-bold</v-icon> ສະຕັອກເພີ່ມຂຶ້ນ
            </v-chip>
            <v-chip color="error" small dark>
              <v-icon left small>mdi-arrow-down-bold</v-icon> ສະຕັອກຫຼຸດລົງ
            </v-chip>
          </div>
        </div>
      </v-card-title>

      <!-- Data Table -->
      <v-data-table
        :headers="headers"
        :items="filteredReportData"
        :search="searchText"
        class="elevation-0"
        :items-per-page="20"
        :footer-props="{
          'items-per-page-options': [10, 20, 50, 100, -1],
          'items-per-page-text': 'ຈຳນວນແຖວຕໍ່ໜ້າ:'
        }"
      >
        <!-- Product Code & Name -->
        <template v-slot:item.productName="{ item }">
          <div class="py-2">
            <div class="font-weight-medium text-body-1">{{ item.productName }}</div>
            <div class=" text--secondary font-mono">Code: {{ item.productCode }}</div>
          </div>
        </template>

        <!-- Current Stock -->
        <template v-slot:item.currentStock="{ item }">
          <div class="font-weight-medium text-center">
            {{ formatNumber(item.currentStock) }}
          </div>
        </template>

        <!-- Stock at Backdate -->
        <template v-slot:item.stockAtBackdate="{ item }">
          <div class="text-center">
            <v-chip
              :color="getStockDiffColor(item)"
              small
              label
              dark
              class="font-weight-bold"
            >
              {{ formatNumber(item.stockAtBackdate) }}
            </v-chip>
          </div>
        </template>

        <!-- Stock Difference -->
        <template v-slot:item.stockDiff="{ item }">
          <div class="text-center font-weight-bold" :class="getStockDiffTextClass(item)">
            {{ getStockDiffFormatted(item) }}
          </div>
        </template>

        <!-- Price Columns -->
        <template v-slot:item.retailPrice="{ item }">
          <div class="text-right font-weight-medium">
            {{ formatNumber(item.retailPrice) }}
          </div>
        </template>
        <template v-slot:item.productCostPrice="{ item }">
          <div class="text-right text--secondary">
            {{ formatNumber(item.productCostPrice) }}
          </div>
        </template>

        <!-- Value Columns -->
        <template v-slot:item.costValueAtBackdate="{ item }">
          <div class="text-right font-weight-medium orange--text text--darken-3">
            {{ formatNumber(item.costValueAtBackdate) }}
          </div>
        </template>
        <template v-slot:item.retailValueAtBackdate="{ item }">
          <div class="text-right font-weight-bold purple--text">
            {{ formatNumber(item.retailValueAtBackdate) }}
          </div>
        </template>
      </v-data-table>

      <!-- Empty State -->
      <v-card-text v-if="filteredReportData.length === 0" class="text-center pa-12">
        <v-icon size="64" color="grey lighten-2" class="mb-4">
          mdi-clipboard-text-search-outline
        </v-icon>
        <h3 class="text-h6 mb-2 text--secondary">ບໍ່ມີຂໍ້ມູນສິນຄ້າ</h3>
        <p class="text-body-2 text--secondary">
          ກະລຸນາກວດສອບວັນທີ ຫຼື ຕົວກັ່ນຕອງຄືນໃໝ່.
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getFormatNum } from '~/common/index'

export default {
  name: 'StockBackdateReport',
  middleware: 'auths',
  layout: 'default',

  head() {
    return {
      title: 'ລາຍງານສະຕັອກຍ້ອນຫຼັງ - Stock Backdate Report',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Stock Backdate Report - ກວດສອບຍອດສະຕັອກ ແລະ ມູນຄ່າຕົ້ນທຶນ/ມູນຄ່າຂາຍຍ້ອນຫຼັງ'
        }
      ]
    }
  },

  data() {
    return {
      targetDatetime: '',
      selectedProductId: null,
      searchText: '',
      reportData: [],
      productsList: [],
      loading: false,
      error: null
    }
  },

  computed: {
    ...mapGetters(['findAllCurrency', 'findAllProduct']),

    currencyCode() {
      const localCcy = this.findAllCurrency?.find(c => c.isLocalCCY === true || c.isLocalCCY === 1)
      return localCcy?.code || 'LAK'
    },

    productFilterOptions() {
      // Create options list for autocomplete product filter
      const list = this.productsList.map(p => ({
        text: `[${p.pro_id}] ${p.pro_name}`,
        value: p.id
      }))
      return list
    },

    filteredReportData() {
      // Client-side quick filter in case product selector isn't used
      return this.reportData
    },

    formattedTotalProducts() {
      return this.filteredReportData.length
    },

    totals() {
      const sums = {
        stockAtBackdate: 0,
        currentStock: 0,
        costValueAtBackdate: 0,
        retailValueAtBackdate: 0,
        currentCostValue: 0,
        currentRetailValue: 0
      }

      this.filteredReportData.forEach(item => {
        sums.stockAtBackdate += Number(item.stockAtBackdate || 0)
        sums.currentStock += Number(item.currentStock || 0)
        sums.costValueAtBackdate += Number(item.costValueAtBackdate || 0)
        sums.retailValueAtBackdate += Number(item.retailValueAtBackdate || 0)
        sums.currentCostValue += Number(item.currentStock || 0) * Number(item.productCostPrice || 0)
        sums.currentRetailValue += Number(item.currentStock || 0) * Number(item.retailPrice || 0)
      })

      return sums
    },

    formatDisplayDatetime() {
      if (!this.targetDatetime) return 'N/A'
      try {
        const d = new Date(this.targetDatetime)
        return d.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })
      } catch {
        return this.targetDatetime
      }
    },

    headers() {
      return [
        { text: 'ສິນຄ້າ / Product', value: 'productName', align: 'left', sortable: true, width: '25%' },
        { text: 'ສະຕັອກປັດຈຸບັນ', value: 'currentStock', align: 'center', sortable: true },
        { text: 'ສະຕັອກຍ້ອນຫຼັງ', value: 'stockAtBackdate', align: 'center', sortable: true },
        { text: 'ສ່ວນຕ່າງ (Diff)', value: 'stockDiff', align: 'center', sortable: false },
        { text: 'ລາຄາຕົ້ນທຶນ', value: 'productCostPrice', align: 'right', sortable: true },
        { text: 'ລາຄາຂາຍຍ່ອຍ', value: 'retailPrice', align: 'right', sortable: true },
        { text: 'ມູນຄ່າຕົ້ນທຶນຍ້ອນຫຼັງ', value: 'costValueAtBackdate', align: 'right', sortable: true },
        { text: 'ມູນຄ່າຂາຍຍ້ອນຫຼັງ', value: 'retailValueAtBackdate', align: 'right', sortable: true }
      ]
    }
  },

  mounted() {
    this.initializeDefaultDatetime()
    this.loadProductsList()
    this.generateReport()
  },

  methods: {
    initializeDefaultDatetime() {
      // Set to current local datetime in format YYYY-MM-DDTHH:mm
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      this.targetDatetime = `${year}-${month}-${day}T${hours}:${minutes}`
    },

    async loadProductsList() {
      try {
        // Try getting products from store first
        if (this.findAllProduct && this.findAllProduct.length > 0) {
          this.productsList = this.findAllProduct
        } else {
          const res = await this.$axios.get('/api/product/find')
          this.productsList = res.data || []
        }
      } catch (err) {
        console.error('Error loading products list:', err)
      }
    },

    onDatetimeChange() {
      this.generateReport()
    },

    async generateReport() {
      if (!this.targetDatetime) return

      this.loading = true
      this.error = null

      try {
        // Backend expects standard ISO String representing selected local datetime
        const dateParam = new Date(this.targetDatetime).toISOString()
        const params = { date: dateParam }
        
        if (this.selectedProductId) {
          params.productId = this.selectedProductId
        }

        const res = await this.$axios.get('/api/backdateStockReport', { params })
        if (res.data && res.data.success) {
          this.reportData = res.data.data || []
        } else {
          throw new Error(res.data?.message || 'Failed to fetch backdate report')
        }
      } catch (err) {
        console.error('Error fetching backdate report:', err)
        this.error = err.response?.data?.message || err.message || 'ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນລາຍງານ'
      } finally {
        this.loading = false
      }
    },

    formatNumber(val) {
      return getFormatNum(Math.round(val || 0))
    },

    getStockDiff(item) {
      return Number(item.stockAtBackdate || 0) - Number(item.currentStock || 0)
    },

    getStockDiffFormatted(item) {
      const diff = this.getStockDiff(item)
      if (diff === 0) return '0'
      return diff > 0 ? `+${this.formatNumber(diff)}` : this.formatNumber(diff)
    },

    getStockDiffColor(item) {
      const diff = this.getStockDiff(item)
      if (diff === 0) return 'grey darken-1'
      return diff > 0 ? 'success' : 'error'
    },

    getStockDiffTextClass(item) {
      const diff = this.getStockDiff(item)
      if (diff === 0) return 'grey--text text--darken-1'
      return diff > 0 ? 'success--text' : 'error--text'
    },

    exportToExcel() {
      if (!this.$xlsx) {
        this.$toast.error('ລະບົບ Excel plugin ບໍ່ພ້ອມໃຊ້ງານ')
        return
      }

      try {
        const rows = this.filteredReportData.map(item => {
          const diff = this.getStockDiff(item)
          return {
            'ລະຫັດສິນຄ້າ (Product Code)': item.productCode,
            'ຊື່ສິນຄ້າ (Product Name)': item.productName,
            'ສະຕັອກປັດຈຸບັນ (Current Stock)': Number(item.currentStock || 0),
            'ສະຕັອກຍ້ອນຫຼັງ (Stock at Backdate)': Number(item.stockAtBackdate || 0),
            'ສ່ວນຕ່າງສະຕັອກ (Stock Difference)': diff,
            'ລາຄາຕົ້ນທຶນ (Cost Price)': Number(item.productCostPrice || 0),
            'ລາຄາຂາຍຍ່ອຍ (Retail Price)': Number(item.retailPrice || 0),
            'ມູນຄ່າຕົ້ນທຶນຍ້ອນຫຼັງ (Cost Value at Backdate)': Number(item.costValueAtBackdate || 0),
            'ມູນຄ່າຂາຍຍ້ອນຫຼັງ (Retail Value at Backdate)': Number(item.retailValueAtBackdate || 0)
          }
        })

        const summaryRow = {
          'ລະຫັດສິນຄ້າ (Product Code)': 'ລວມ (Total)',
          'ຊື່ສິນຄ້າ (Product Name)': `${this.filteredReportData.length} Items`,
          'ສະຕັອກປັດຈຸບັນ (Current Stock)': this.totals.currentStock,
          'ສະຕັອກຍ້ອນຫຼັງ (Stock at Backdate)': this.totals.stockAtBackdate,
          'ສ່ວນຕ່າງສະຕັອກ (Stock Difference)': this.totals.stockAtBackdate - this.totals.currentStock,
          'ລາຄາຕົ້ນທຶນ (Cost Price)': '',
          'ລາຄາຂາຍຍ່ອຍ (Retail Price)': '',
          'ມູນຄ່າຕົ້ນທຶນຍ້ອນຫຼັງ (Cost Value at Backdate)': this.totals.costValueAtBackdate,
          'ມູນຄ່າຂາຍຍ້ອນຫຼັງ (Retail Value at Backdate)': this.totals.retailValueAtBackdate
        }

        const worksheet = this.$xlsx.utils.json_to_sheet([...rows, {}, summaryRow])
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Stock Backdate Report')

        const sanitizedDate = this.targetDatetime.replace(/[:T]/g, '_')
        const filename = `stock_backdate_report_${sanitizedDate}.xlsx`
        this.$xlsx.writeFile(workbook, filename)

        this.$toast.success('ດາວໂຫຼດໄຟລ໌ Excel ສຳເລັດແລ້ວ!')
      } catch (err) {
        console.error('Error exporting to Excel:', err)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການດາວໂຫຼດ Excel: ' + err.message)
      }
    }
  }
}
</script>

<style scoped>
.font-mono {
  font-family: monospace, sans-serif !important;
}
.gap-2 {
  gap: 8px;
}
.gap-3 {
  gap: 12px;
}
.w-100 {
  width: 100%;
}
</style>
