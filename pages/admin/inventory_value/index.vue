<template>
  <div class="inventory-value-container px-4 py-4">
    <!-- Page Header -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-6">
      <div class="d-flex align-center">
        <v-avatar color="primary lighten-5" size="52" class="mr-3 elevation-1">
          <v-icon color="primary" size="30">mdi-warehouse</v-icon>
        </v-avatar>
        <div>
          <div class="d-flex align-center flex-wrap gap-2">
            <h1 class="text-h5 font-weight-black primary--text mb-0">ລາຍການສິນຄ້າ ພ້ອມມູນຄ່າສຕັອກ</h1>
            <v-chip small color="primary" outlined class="font-weight-bold ml-2">
              <v-icon left x-small>mdi-map-marker</v-icon>
              {{ currentSelectedLocation?.name || 'ທຸກສາຂາ' }}
            </v-chip>
          </div>
          <span class="caption grey--text text--darken-1">
            ຕິດຕາມຈຳນວນ ແລະ ມູນຄ່າຕົ້ນທຶນສະຕັອກສິນຄ້າຄົງເຫຼືອແບບ Real-time
          </span>
        </div>
      </div>
      <div class="d-flex align-center mt-3 mt-sm-0 gap-2">
        <v-btn
          color="warning"
          outlined
          @click="rebuildStock"
          rounded
          class="font-weight-bold mr-2 text-none"
          :loading="isloading"
        >
          <v-icon left small>mdi-database-sync</v-icon>
          Rebuild Stock
        </v-btn>
        <v-btn
          color="primary"
          outlined
          rounded
          class="font-weight-bold text-none"
          @click="guidelineDialog = true"
        >
          <v-icon left small>mdi-lifebuoy</v-icon>
          ຄູ່ມືການນຳໃຊ້
        </v-btn>
      </div>
    </div>

    <!-- Summary KPI Cards (4 Executive Cards) -->
    <v-row class="mb-4" dense>
      <!-- Card 1: Total Inventory Valuation -->
      <v-col cols="12" sm="6" md="3" class="py-2">
        <v-card class="elevation-2 rounded-xl pa-4 stat-card-value h-100">
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="text-caption font-weight-bold text-uppercase tracking-wider primary--text text--darken-2">
                ມູນຄ່າຕົ້ນທຶນສະຕັອກ
              </span>
              <h2 class="text-h5 font-weight-black mt-1 primary--text">
                {{ formatCurrency(grandTotalStockValue) }}
              </h2>
              <div class="text-tiny grey--text text--darken-1 mt-1">
                ຕົ້ນທຶນສະເລ່ຍຕາມສິນຄ້າຕົວຈິງ
              </div>
            </div>
            <v-avatar color="primary" size="44" class="elevation-2">
              <v-icon color="white" size="24">mdi-database-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- Card 2: Total Units in Stock -->
      <v-col cols="12" sm="6" md="3" class="py-2">
        <v-card class="elevation-2 rounded-xl pa-4 stat-card-items h-100">
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="text-caption font-weight-bold text-uppercase tracking-wider success--text text--darken-2">
                ຈຳນວນສິນຄ້າທັງໝົດ
              </span>
              <h2 class="text-h5 font-weight-black mt-1 success--text">
                {{ formatNumber(totalStockItems) }} <span class="text-subtitle-2 font-weight-bold">ຊິ້ນ</span>
              </h2>
              <div class="text-tiny grey--text text--darken-1 mt-1">
                ຈຳນວນສິນຄ້າພ້ອມຂາຍໃນສາງ
              </div>
            </div>
            <v-avatar color="success" size="44" class="elevation-2">
              <v-icon color="white" size="24">mdi-package-variant-closed</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- Card 3: Total Product SKUs -->
      <v-col cols="12" sm="6" md="3" class="py-2">
        <v-card class="elevation-2 rounded-xl pa-4 stat-card-products h-100">
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="text-caption font-weight-bold text-uppercase tracking-wider warning--text text--darken-3">
                ລາຍການສິນຄ້າ (SKUs)
              </span>
              <h2 class="text-h5 font-weight-black mt-1 warning--text text--darken-3">
                {{ formatNumber(totalUniqueProducts) }} <span class="text-subtitle-2 font-weight-bold">ລາຍການ</span>
              </h2>
              <div class="text-tiny grey--text text--darken-1 mt-1">
                ລາຍການສິນຄ້າທີ່ມີປະຫວັດສະຕັອກ
              </div>
            </div>
            <v-avatar color="warning" size="44" class="elevation-2">
              <v-icon color="white" size="24">mdi-tag-multiple-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- Card 4: Potential Retail Value & Est. Margin -->
      <v-col cols="12" sm="6" md="3" class="py-2">
        <v-card class="elevation-2 rounded-xl pa-4 stat-card-retail h-100">
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="text-caption font-weight-bold text-uppercase tracking-wider deep-purple--text text--darken-2">
                ມູນຄ່າຂາຍໜ້າຮ້ານ
              </span>
              <h2 class="text-h5 font-weight-black mt-1 deep-purple--text">
                {{ formatCurrency(grandTotalRetailValue) }}
              </h2>
              <div class="text-tiny deep-purple--text text--darken-1 mt-1 font-weight-medium">
                ກຳໄລຄາດຄະເນ: +{{ formatCurrency(potentialGrossProfit) }} ({{ potentialMargin }}%)
              </div>
            </div>
            <v-avatar color="deep-purple" size="44" class="elevation-2">
              <v-icon color="white" size="24">mdi-cash-register</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialogs -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="5yMsQ6gRSkI" />
    </v-dialog>
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator />
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null" />
    </v-dialog>
    <v-dialog v-model="isstock" max-width="600px">
      <card-form
        :key="stockFormKey"
        :product-id="selectedProductId"
        :id="selectedId"
        :cost="selectedProductCost"
        :product-name="selectedProductName"
        @close-dialog="isstock = false"
        @reload="fetchData"
      />
    </v-dialog>
    <v-dialog v-model="editProductForm" max-width="1200px">
      <product-form
        :key="productFormKey"
        @close-dialog="editProductForm = false"
        :header-id="selectedProductId"
        @refresh="fetchData"
        :isEdit="editProductForm"
      />
    </v-dialog>
    <v-dialog v-model="productFormCreate" max-width="1200px">
      <product-form-create @close-dialog="productFormCreate = false" @refresh="fetchData" />
    </v-dialog>
    <v-dialog v-model="priceListDialog" max-width="1200px">
      <price-list-form
        :key="priceListFormKey"
        @close-dialog="priceListDialog = false"
        :record-id="pricingRecordId"
        @refresh="fetchData"
      />
    </v-dialog>

    <!-- Main List & Table Card -->
    <v-card class="elevation-3 rounded-xl overflow-hidden mt-2">
      <!-- Toolbar: Filters, Search & Actions -->
      <v-card-title class="py-4 px-6 border-bottom grey lighten-5">
        <v-row align="center" dense>
          <!-- Search Field -->
          <v-col cols="12" md="4" class="py-1">
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="ຄົ້ນຫາລະຫັດ ຫຼື ຊື່ສິນຄ້າ..."
              single-line
              hide-details
              outlined
              dense
              clearable
              class="rounded-lg bg-white custom-search"
            />
          </v-col>

          <!-- Quick Stock Status Filter Chips -->
          <v-col cols="12" md="4" class="py-1 d-flex align-center flex-wrap gap-1">
            <v-chip-group
              v-model="selectedStatusFilter"
              mandatory
              active-class="primary--text font-weight-bold"
            >
              <v-chip small filter value="ALL" outlined>
                ທັງໝົດ ({{ stockList.length }})
              </v-chip>
              <v-chip small filter value="IN_STOCK" color="success" outlined>
                ພ້ອມຂາຍ ({{ inStockCount }})
              </v-chip>
              <v-chip small filter value="LOW_STOCK" color="warning" outlined>
                ໃກ້ໝົດ ({{ lowStockCount }})
              </v-chip>
              <v-chip small filter value="OUT_OF_STOCK" color="error" outlined>
                ໝົດສະຕັອກ ({{ outOfStockCount }})
              </v-chip>
            </v-chip-group>
          </v-col>

          <!-- Action Buttons -->
          <v-col cols="12" md="4" class="text-right py-1 d-flex justify-end align-center gap-2">
            <!-- Print Report -->
            <v-btn
              color="primary"
              depressed
              @click="printReport"
              rounded
              height="38"
              class="px-4 font-weight-bold text-none mr-2"
              :loading="isloading"
            >
              <v-icon left small>mdi-printer</v-icon>
              Print Report
            </v-btn>

            <!-- Export Excel -->
            <v-btn
              color="success"
              depressed
              dark
              @click="exportToExcel"
              rounded
              height="38"
              class="px-4 font-weight-bold text-none mr-2"
              :loading="exportLoading"
            >
              <v-icon left small>mdi-file-excel</v-icon>
              Export Excel
            </v-btn>

            <!-- Refresh -->
            <v-btn
              icon
              outlined
              color="grey darken-2"
              height="38"
              width="38"
              @click="fetchData"
              title="ໂຫຼດຂໍ້ມູນໃໝ່"
            >
              <v-icon small>mdi-refresh</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <!-- Data Table -->
      <v-data-table
        :headers="headers"
        :search="search"
        :items="filteredStockList"
        :items-per-page="pageLine"
        :loading="isloading"
        class="custom-table"
        no-data-text="ບໍ່ພົບຂໍ້ມູນສິນຄ້າ"
        no-results-text="ບໍ່ພົບລາຍການທີ່ຄົ້ນຫາ"
      >
        <!-- Index Column -->
        <template v-slot:[`item.index`]="{ index }">
          <span class="grey--text font-weight-bold font-mono text-caption">{{ index + 1 }}</span>
        </template>

        <!-- Product ID / Code -->
        <template v-slot:[`item.product_id`]="{ item }">
          <v-chip
            x-small
            outlined
            color="grey darken-3"
            class="font-mono font-weight-bold px-2"
          >
            {{ item.product_id || item.product?.pro_id || '-' }}
          </v-chip>
        </template>

        <!-- Product Name -->
        <template v-slot:[`item.product.pro_name`]="{ item }">
          <div class="py-2">
            <span class="font-weight-bold text-body-2 d-block text-truncate" style="max-width: 280px;">
              {{ item.product?.pro_name || '-' }}
            </span>
            <span v-if="item.product?.barCode" class="text-tiny grey--text">
              Barcode: {{ item.product.barCode }}
            </span>
          </div>
        </template>

        <!-- Stock Status Chip -->
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            v-if="parseInt(item.cardCount || 0) > 10"
            x-small
            color="success"
            outlined
            class="font-weight-bold"
          >
            <v-icon left x-small>mdi-check-circle</v-icon>
            ພ້ອມຂາຍ
          </v-chip>
          <v-chip
            v-else-if="parseInt(item.cardCount || 0) > 0"
            x-small
            color="warning"
            outlined
            class="font-weight-bold"
          >
            <v-icon left x-small>mdi-alert-circle</v-icon>
            ໃກ້ໝົດ
          </v-chip>
          <v-chip
            v-else
            x-small
            color="error"
            outlined
            class="font-weight-bold"
          >
            <v-icon left x-small>mdi-close-circle</v-icon>
            ໝົດສະຕັອກ
          </v-chip>
        </template>

        <!-- Stock Count -->
        <template v-slot:[`item.cardCount`]="{ item }">
          <span
            class="font-weight-black font-mono text-body-2"
            :class="parseInt(item.cardCount || 0) <= 0 ? 'error--text' : 'grey--text text--darken-3'"
          >
            {{ formatNumber(item.cardCount) }}
          </span>
        </template>

        <!-- Retail Price -->
        <template v-slot:[`item.product.pro_price`]="{ item }">
          <span class="font-mono font-weight-medium">
            {{ formatCurrency(item.product?.pro_price) }}
          </span>
        </template>

        <!-- Average Unit Cost -->
        <template v-slot:[`item.cost`]="{ item }">
          <span class="font-mono grey--text text--darken-2">
            {{ formatCurrency(item.cardCount > 0 ? (item.totalCardValue / item.cardCount) : 0) }}
          </span>
        </template>

        <!-- Total Cost Valuation -->
        <template v-slot:[`item.totalCardValue`]="{ item }">
          <span class="font-weight-black font-mono text-subtitle-2 primary--text">
            {{ formatCurrency(item.totalCardValue) }}
          </span>
        </template>

        <!-- Potential Retail Value -->
        <template v-slot:[`item.retailValue`]="{ item }">
          <span class="font-weight-medium font-mono text-caption grey--text text--darken-3">
            {{ formatCurrency(parseInt(item.cardCount || 0) * parseFloat(item.product?.pro_price || 0)) }}
          </span>
        </template>

        <!-- Actions -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                small
                color="primary"
                v-bind="attrs"
                v-on="on"
                @click="editStock(item)"
              >
                <v-icon small>mdi-history</v-icon>
              </v-btn>
            </template>
            <span>ກວດສອບ Stock Cards ລະອຽດ</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import ProductForm from '~/components/product/ProductForm.vue'
import PriceListForm from '~/components/PriceListForm.vue'
import ProductFormCreate from '~/components/product/ProductFormCreate.vue'
import { getFormatNum } from '~/common'
import { swalSuccess, swalError2 } from '~/util/myUtil'
import { mapGetters } from 'vuex'
import { mainCompanyInfo } from '~/common/api'
import { printInventoryValueReport, generateInventoryValueReportHTML } from '~/common/inventoryValuePrintTemplate'

export default {
  name: 'InventoryValueReport',
  components: { ProductForm, ProductFormCreate, PriceListForm },
  middleware: 'auths',
  data() {
    return {
      exportLoading: false,
      stockList: [],
      priceListDialog: false,
      priceListFormKey: 1,
      guidelineDialog: false,
      pricingRecordId: null,
      productFormCreate: false,
      productFormKey: 1,
      isstock: false,
      selectedId: 0,
      selectedProductCost: 0,
      selectedProductName: '',
      isloading: false,
      dialogMessage: false,
      message: '',
      selectedStockProductId: '',
      loaddata: [],
      carddata: [],
      cardType: [],
      content: null,
      selectedCardType: '',
      pageLine: 30,
      search: '',
      selectedStatusFilter: 'ALL',
      editProductForm: false,
      selectedProductId: null,
      stockFormKey: 1,
      timer: null,
      headers: [
        { text: 'ລ/ດ', align: 'center', value: 'index', sortable: false, width: '50px' },
        { text: 'ລະຫັດສິນຄ້າ', align: 'center', value: 'product_id', width: '130px' },
        { text: 'ຊື່ສິນຄ້າ', align: 'left', value: 'product.pro_name' },
        { text: 'ສະຖານະ', align: 'center', value: 'status', sortable: false, width: '100px' },
        { text: 'ຈຳນວນສະຕັອກ', align: 'right', value: 'cardCount', width: '120px' },
        { text: 'ລາຄາຂາຍ', align: 'right', value: 'product.pro_price', width: '130px' },
        { text: 'ຕົ້ນທຶນສະເລ່ຍ', align: 'right', value: 'cost', width: '130px' },
        { text: 'ມູນຄ່າຕົ້ນທຶນລວມ', align: 'right', value: 'totalCardValue', width: '150px' },
        { text: 'ມູນຄ່າຂາຍລວມ', align: 'right', value: 'retailValue', sortable: false, width: '140px' },
        { text: 'ຈັດການ', align: 'center', value: 'actions', sortable: false, width: '80px' },
      ],
    }
  },
  watch: {
    message(val) {
      if (val != null) {
        this.dialogMessage = true
        return
      }
      this.dialogMessage = false
    },
    currentSelectedLocation: {
      handler() {
        this.fetchData()
      },
      deep: true
    }
  },
  async mounted() {
    await this.loadCardCategory()
    await this.fetchData()
  },
  computed: {
    ...mapGetters(['currentSelectedLocation', 'findAllLocation', 'findLocalCurrency', 'findAllCurrency']),

    localCurrencyCode() {
      return this.findLocalCurrency?.code || 'LAK'
    },

    grandTotalStockValue() {
      return this.stockList.reduce((total, item) => {
        return total + parseFloat(item.totalCardValue || 0)
      }, 0)
    },

    totalStockItems() {
      return this.stockList.reduce((sum, item) => sum + parseInt(item.cardCount || 0, 10), 0)
    },

    totalUniqueProducts() {
      return this.stockList.length
    },

    grandTotalRetailValue() {
      return this.stockList.reduce((sum, item) => {
        const qty = parseInt(item.cardCount || 0, 10)
        const price = parseFloat(item.product?.pro_price || 0)
        return sum + (qty * price)
      }, 0)
    },

    potentialGrossProfit() {
      return this.grandTotalRetailValue - this.grandTotalStockValue
    },

    potentialMargin() {
      if (this.grandTotalRetailValue <= 0) return '0.0'
      return ((this.potentialGrossProfit / this.grandTotalRetailValue) * 100).toFixed(1)
    },

    inStockCount() {
      return this.stockList.filter(item => parseInt(item.cardCount || 0, 10) > 10).length
    },

    lowStockCount() {
      return this.stockList.filter(item => {
        const c = parseInt(item.cardCount || 0, 10)
        return c > 0 && c <= 10
      }).length
    },

    outOfStockCount() {
      return this.stockList.filter(item => parseInt(item.cardCount || 0, 10) <= 0).length
    },

    filteredStockList() {
      if (this.selectedStatusFilter === 'IN_STOCK') {
        return this.stockList.filter(item => parseInt(item.cardCount || 0, 10) > 10)
      } else if (this.selectedStatusFilter === 'LOW_STOCK') {
        return this.stockList.filter(item => {
          const c = parseInt(item.cardCount || 0, 10)
          return c > 0 && c <= 10
        })
      } else if (this.selectedStatusFilter === 'OUT_OF_STOCK') {
        return this.stockList.filter(item => parseInt(item.cardCount || 0, 10) <= 0)
      }
      return this.stockList
    }
  },
  methods: {
    formatNumber(value) {
      if (value === undefined || value === null) return '0'
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value)
    },

    formatCurrency(value) {
      const currencyCode = this.localCurrencyCode
      if (value === undefined || value === null || isNaN(value)) {
        return `0 ${currencyCode === 'LAK' ? '₭' : currencyCode}`
      }
      try {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currencyCode,
          minimumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
          maximumFractionDigits: currencyCode === 'LAK' ? 0 : 2,
        }).format(value)
      } catch (error) {
        const formatted = this.formatNumber(value)
        return currencyCode === 'LAK' ? `${formatted} ₭` : `${formatted} ${currencyCode}`
      }
    },

    async fetchData() {
      this.isloading = true
      try {
        const res = await this.$axios.get('api/card/find/count/group_by_product')
        this.stockList = Array.isArray(res.data) ? res.data : []
      } catch (er) {
        this.message = er
        console.error('Fetch stock error:', er)
      } finally {
        this.isloading = false
      }
    },

    async printReport() {
      this.isloading = true
      try {
        if (!this.findAllCurrency || this.findAllCurrency.length === 0) {
          try {
            const response = await this.$axios.get('api/currency/findAll')
            let data = response.data?.data ?? response.data
            if (Array.isArray(data)) {
              data = data.filter(c => c.isActive === true || c.isActive === 1)
            }
            await this.$store.dispatch('initCurrency', data)
          } catch (error) {
            console.error('Failed to load currencies in print:', error)
          }
        }

        const companyData = mainCompanyInfo() || {}
        const currencyList = this.findAllCurrency || []
        const filters = {
          search: this.search,
          userName: this.$store.state.auth?.user?.cus_name || this.$store.state.auth?.user?.name || 'Admin',
          locationName: this.currentSelectedLocation?.name || 'ສາງໃຫຍ່ (Main Warehouse)'
        }

        // Print items reflecting active filter/search
        const itemsToPrint = (this.search || this.selectedStatusFilter !== 'ALL')
          ? this.filteredStockList
          : this.stockList

        printInventoryValueReport({
          stockList: itemsToPrint,
          companyData,
          currencyList,
          filters
        })
      } catch (error) {
        console.error('Print report error:', error)
        swalError2(this.$swal, 'Error', 'Failed to generate print: ' + (error.message || error))
      } finally {
        this.isloading = false
      }
    },

    async exportToExcel() {
      this.exportLoading = true
      try {
        const XLSX = await import('xlsx')
        const currencyCode = this.localCurrencyCode
        const isLAK = currencyCode === 'LAK'
        const numFmt = isLAK ? '#,##0' : '#,##0.00'

        const itemsToExport = (this.search || this.selectedStatusFilter !== 'ALL')
          ? this.filteredStockList
          : this.stockList

        const exportData = itemsToExport.map((item, index) => {
          const qty = parseInt(item.cardCount || 0, 10)
          const costVal = parseFloat(item.totalCardValue || 0)
          const retail = parseFloat(item.product?.pro_price || 0)
          const avgCost = qty > 0 ? costVal / qty : 0

          return {
            'ລຳດັບ': index + 1,
            'Product ID': item.product_id || item.product?.pro_id || '',
            'ຊື່ສິນຄ້າ': item.product?.pro_name || '',
            'ລາຄາຂາຍ': retail,
            'ຈຳນວນສະຕັອກ': qty,
            'ຕົ້ນທຶນສະເລ່ຍ': avgCost,
            'ມູນຄ່າຕົ້ນທຶນລວມ': costVal,
            'ມູນຄ່າຂາຍລວມ': qty * retail,
          }
        })

        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.aoa_to_sheet([])

        // Header style
        const headerStyle = {
          fill: { fgColor: { rgb: '1E3A8A' } },
          font: { bold: true, color: { rgb: 'FFFFFF' }, sz: 11 },
          alignment: { horizontal: 'center', vertical: 'center' }
        }

        const title = `ລາຍງານສະຕັອກ ແລະ ມູນຄ່າສິນຄ້າ - ${new Date().toLocaleDateString('lo-LA')}`
        XLSX.utils.sheet_add_aoa(ws, [[title]], { origin: 'A1' })
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 7 } }]

        const headers = [
          'ລຳດັບ',
          'Product ID',
          'ຊື່ສິນຄ້າ',
          `ລາຄາຂາຍ (${currencyCode})`,
          'ຈຳນວນສະຕັອກ',
          `ຕົ້ນທຶນສະເລ່ຍ (${currencyCode})`,
          `ມູນຄ່າຕົ້ນທຶນລວມ (${currencyCode})`,
          `ມູນຄ່າຂາຍລວມ (${currencyCode})`
        ]
        XLSX.utils.sheet_add_aoa(ws, [headers], { origin: 'A3' })

        // Data rows
        exportData.forEach((row, index) => {
          const rowData = Object.values(row)
          XLSX.utils.sheet_add_aoa(ws, [rowData], { origin: `A${index + 4}` })
        })

        // Summary row
        const totalQty = exportData.reduce((s, r) => s + r['ຈຳນວນສະຕັອກ'], 0)
        const totalCost = exportData.reduce((s, r) => s + r['ມູນຄ່າຕົ້ນທຶນລວມ'], 0)
        const totalRetail = exportData.reduce((s, r) => s + r['ມູນຄ່າຂາຍລວມ'], 0)
        const summaryData = ['', '', 'ລວມທັງໝົດ', '', totalQty, '', totalCost, totalRetail]
        XLSX.utils.sheet_add_aoa(ws, [summaryData], { origin: `A${exportData.length + 4}` })

        ws['!cols'] = [
          { wch: 8 },
          { wch: 14 },
          { wch: 35 },
          { wch: 16 },
          { wch: 15 },
          { wch: 18 },
          { wch: 20 },
          { wch: 20 },
        ]

        XLSX.utils.book_append_sheet(wb, ws, 'Inventory Valuation')
        const now = new Date()
        const dateStr = now.toISOString().split('T')[0]
        const filename = `Inventory_Valuation_${dateStr}.xlsx`

        XLSX.writeFile(wb, filename)
        swalSuccess(this.$swal, 'ສຳເລັດ', `Export ຂໍ້ມູນສຳເລັດ: ${filename}`)
      } catch (error) {
        console.error('Export error:', error)
        swalError2(this.$swal, 'ຜິດພາດ', 'ເກີດຂໍ້ຜິດພາດໃນການ Export ຂໍ້ມູນ: ' + error.message)
      } finally {
        this.exportLoading = false
      }
    },

    editStock(idx) {
      const proId = idx.product?.pro_id || idx.product_id
      if (proId) {
        this.$router.push(`/admin/stock/${proId}`)
      }
    },

    loadCardCategory() {
      this.isloading = true
      this.$axios
        .get('stockcate_f')
        .then((res) => {
          this.cardType = (res.data || []).map((el) => ({
            card_type_code: el.card_type_code,
            card_type_name: el.card_type_name,
          }))
          if (this.cardType.length > 0) {
            this.selectedCardType = this.cardType[0].card_type_code
          }
        })
        .catch((er) => {
          console.error('Load category error:', er)
        })
        .finally(() => {
          this.isloading = false
        })
    },

    async rebuildStock() {
      if (!this.isloading) {
        this.isloading = true
        try {
          await this.$axios.put('/api/product/stockcount')
          swalSuccess(this.$swal, 'Succeed', 'ປັບປຸງສະຕັອກສຳເລັດ')
          await this.fetchData()
        } catch (error) {
          swalError2(this.$swal, 'Error', error.response?.data || error.message)
        } finally {
          this.isloading = false
        }
      }
    }
  }
}
</script>

<style scoped>
.inventory-value-container {
  font-family: 'Noto Sans Lao', sans-serif !important;
  background-color: #fafafa;
}

.inventory-value-container * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.font-mono {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;
}

.stat-card-value {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-left: 5px solid #2563eb;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card-value:hover,
.stat-card-items:hover,
.stat-card-products:hover,
.stat-card-retail:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08) !important;
}

.stat-card-items {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-left: 5px solid #16a34a;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card-products {
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
  border-left: 5px solid #d97706;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card-retail {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  border-left: 5px solid #9333ea;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.text-tiny {
  font-size: 0.7rem;
}

.rounded-xl {
  border-radius: 14px !important;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0 !important;
}

.custom-search ::v-deep fieldset {
  border-color: #cbd5e1 !important;
}

.custom-table ::v-deep th {
  font-weight: 700 !important;
  color: #1e293b !important;
  background-color: #f8fafc !important;
  font-size: 0.78rem !important;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border-bottom: 2px solid #e2e8f0 !important;
}

.custom-table ::v-deep td {
  border-bottom: 1px solid #f1f5f9 !important;
}

.custom-table ::v-deep tr:hover {
  background-color: #f8fafc !important;
}

.gap-1 {
  gap: 4px;
}

.gap-2 {
  gap: 8px;
}
</style>
