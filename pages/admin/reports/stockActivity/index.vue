<template>
  <div class="stock-activity-report pa-4">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div>
        <h1 class="text-h5 font-weight-bold primary--text">
          <v-icon color="primary" class="mr-2">mdi-history</v-icon>
          ລາຍງານການຮັບເຂົ້າສະຕັອກ (Stock Activity Create)
        </h1>
        <div class="text-subtitle-2 grey--text">
          Stock Receiving Activity Report
        </div>
      </div>
      <div>
        <v-btn color="success" outlined @click="exportToExcel" :disabled="!reportData.length" :loading="exporting">
          <v-icon left>mdi-file-excel</v-icon> Export Excel
        </v-btn>
        <v-btn color="primary" class="ml-2" @click="printReport" :disabled="!reportData.length">
          <v-icon left>mdi-printer</v-icon> Print
        </v-btn>
      </div>
    </div>

    <!-- Filters -->
    <v-card class="mb-4" elevation="1">
      <v-card-text>
        <v-row align="center">
          <!-- Date Range -->
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.dateFrom" type="date" label="ຈາກວັນທີ (From Date)" outlined dense hide-details clearable @change="fetchData"></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.dateTo" type="date" label="ເຖິງວັນທີ (To Date)" outlined dense hide-details clearable @change="fetchData"></v-text-field>
          </v-col>
          
          <!-- Product Autocomplete -->
          <v-col cols="12" md="3">
            <v-autocomplete
              v-model="filters.productId"
              :items="products"
              item-text="pro_name"
              item-value="id"
              label="ສິນຄ້າ (Product)"
              outlined
              dense
              hide-details
              clearable
              @change="fetchData"
            >
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.pro_name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.pro_id }}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>

          <!-- Lot Number Text Field -->
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.lotNumber" label="ເລກລ໋ອດ (Lot Number)" outlined dense hide-details clearable @change="fetchData"></v-text-field>
          </v-col>

          <!-- User Autocomplete -->
          <v-col cols="12" md="2">
            <v-autocomplete
              v-model="filters.inputter"
              :items="users"
              item-text="cus_name"
              item-value="id"
              label="ຜູ້ບັນທຶກ (User Create)"
              outlined
              dense
              hide-details
              clearable
              @change="fetchData"
            ></v-autocomplete>
          </v-col>

          <!-- View Mode Toggle -->
          <v-col cols="12" md="2">
            <v-select
              v-model="filters.viewMode"
              :items="[ {text: 'ສະຫຼຸບ (Summary)', value: 'summary'}, {text: 'ລາຍລະອຽດ (Detail)', value: 'detail'} ]"
              label="ຮູບແບບ (View)"
              outlined
              dense
              hide-details
            ></v-select>
          </v-col>

          <v-col cols="12" md="1">
            <v-btn color="primary" @click="fetchData" :loading="loading" elevation="0" block>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Section -->
    <v-row class="mb-4" v-if="reportData.length">
      <v-col cols="12" md="4">
        <v-card color="primary" dark elevation="2">
          <v-card-text class="d-flex justify-space-between align-center">
            <div>
              <div class="text-subtitle-1">ຈຳນວນທັງໝົດ (Total QTY)</div>
              <div class="text-h4 font-weight-bold">{{ formatCurrency(totalQuantity) }}</div>
            </div>
            <v-icon size="48" color="white" style="opacity: 0.8">mdi-package-variant</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="success" dark elevation="2">
          <v-card-text class="d-flex justify-space-between align-center">
            <div>
              <div class="text-subtitle-1">ຕົ້ນທຶນລວມທັງໝົດ (Grand Total Cost)</div>
              <div class="text-h4 font-weight-bold">{{ formatCurrency(grandTotalCost) }}</div>
            </div>
            <v-icon size="48" color="white" style="opacity: 0.8">mdi-currency-usd</v-icon>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Table -->
    <v-card elevation="1">
      <v-data-table
        :headers="headers"
        :items="displayedData"
        :loading="loading"
        loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
        no-data-text="ບໍ່ພົບຂໍ້ມູນ"
        :items-per-page="50"
        :footer-props="{'items-per-page-options': [25, 50, 100, -1]}"
        class="elevation-0"
      >
        <template v-slot:item.index="{ item }">
          {{ reportData.indexOf(item) + 1 }}
        </template>

        <template v-slot:item.createdAt="{ item }">
          {{ formatDateTime(item.createdAt) }}
        </template>

        <template v-slot:item.lotNumber="{ item }">
          <v-chip v-if="item.lotNumber" small outlined color="primary">
            {{ item.lotNumber }}
          </v-chip>
          <span v-else class="grey--text">-</span>
        </template>

        <template v-slot:item.product="{ item }">
          <div class="font-weight-medium">{{ item.product ? item.product.pro_name : 'Unknown' }}</div>
          <div class="text-caption grey--text">{{ item.product ? item.product.pro_id : '' }}</div>
        </template>

        <template v-slot:item.stockCardQty="{ item }">
          {{ formatCurrency(item.stockCardQty || 1) }}
        </template>

        <template v-slot:item.costPerUnit="{ item }">
          <div>{{ formatCurrency(item.costPerUnit || item.cost) }}</div>
        </template>

        <template v-slot:item.totalCost="{ item }">
          <div class="font-weight-bold">{{ formatCurrency(item.totalCost || item.cost) }}</div>
        </template>
        
        <template v-slot:item.currency="{ item }">
          <v-chip x-small>{{ item.currency ? item.currency.code : 'LAK' }}</v-chip>
        </template>

        <template v-slot:item.creator="{ item }">
          <v-avatar size="24" color="grey lighten-2" class="mr-2" v-if="item.creator">
            <span class="text-caption">{{ item.creator.cus_name ? item.creator.cus_name.charAt(0).toUpperCase() : 'U' }}</span>
          </v-avatar>
          <span>{{ item.creator ? item.creator.cus_name : 'Unknown User' }}</span>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'StockActivityReport',
  data() {
    const today = new Date()
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0]
    const currentDay = today.toISOString().split('T')[0]

    return {
      loading: false,
      exporting: false,
      filters: {
        dateFrom: firstDay,
        dateTo: currentDay,
        productId: null,
        lotNumber: '',
        inputter: null,
        viewMode: 'summary'
      },
      products: [],
      users: [],
      reportData: [],
      headers: [
        { text: 'ລຳດັບ (No.)', value: 'index', width: '80px', sortable: false },
        { text: 'ວັນທີບັນທຶກ (Date Create)', value: 'createdAt', width: '160px' },
        { text: 'ເລກລ໋ອດ (Lot No)', value: 'lotNumber', width: '130px' },
        { text: 'ສິນຄ້າ (Product)', value: 'product' },
        { text: 'ຈຳນວນ (Qty)', value: 'stockCardQty', align: 'center', width: '100px' },
        { text: 'ຕົ້ນທຶນຕໍ່ໜ່ວຍ (Cost/Unit)', value: 'costPerUnit', align: 'right', width: '140px' },
        { text: 'ຕົ້ນທຶນລວມ (Total Cost)', value: 'totalCost', align: 'right', width: '140px' },
        { text: 'ສະກຸນເງິນ (Currency)', value: 'currency', align: 'center', width: '120px' },
        { text: 'ຜູ້ບັນທຶກ (User Create)', value: 'creator', width: '180px' }
      ]
    }
  },
  computed: {
    displayedData() {
      if (this.filters.viewMode === 'detail') {
        return this.reportData
      }
      
      const groups = {}
      this.reportData.forEach(item => {
        let key = item.locking_session_id
        if (!key) {
          const timeKey = item.createdAt ? item.createdAt.substring(0, 16) : 'unknown'
          key = `${item.product ? item.product.id : 'no_product'}_${timeKey}`
        }

        if (!groups[key]) {
          groups[key] = {
            ...item,
            stockCardQty: 0,
            aggregatedTotalCost: 0
          }
        }
        
        groups[key].stockCardQty += (item.stockCardQty || 1)
        groups[key].aggregatedTotalCost += (item.costPerUnit || item.cost || 0)
      })

      return Object.values(groups).map(g => ({
        ...g,
        totalCost: g.aggregatedTotalCost
      }))
    },
    totalQuantity() {
      return this.displayedData.reduce((sum, item) => sum + (item.stockCardQty || 1), 0)
    },
    grandTotalCost() {
      return this.displayedData.reduce((sum, item) => sum + (item.totalCost || item.cost || 0), 0)
    }
  },
  async created() {
    await Promise.all([
      this.loadProducts(),
      this.loadUsers()
    ])
    this.fetchData()
  },
  methods: {
    async loadProducts() {
      try {
        const res = await this.$axios.get('/api/product/find')
        this.products = res.data.data || res.data || []
      } catch (error) {
        console.error('Error loading products:', error)
      }
    },
    async loadUsers() {
      try {
        const res = await this.$axios.get('/api/user/find')
        this.users = res.data.data || res.data || []
      } catch (error) {
        console.error('Error loading users:', error)
      }
    },
    async fetchData() {
      this.loading = true
      try {
        const params = {
          dateFrom: this.filters.dateFrom || undefined,
          dateTo: this.filters.dateTo || undefined,
          productId: this.filters.productId || undefined,
          lotNumber: this.filters.lotNumber || undefined,
          inputter: this.filters.inputter || undefined
        }
        
        // Remove empty strings
        Object.keys(params).forEach(key => {
          if (params[key] === '') {
            delete params[key]
          }
        })

        const response = await this.$axios.get('/api/card/find', { params })
        this.reportData = response.data.data || response.data || []
      } catch (error) {
        console.error('Error fetching stock activities:', error)
        this.$toast.error('Failed to load stock activities')
      } finally {
        this.loading = false
      }
    },
    formatDateTime(dateStr) {
      if (!dateStr) return '-'
      const d = new Date(dateStr)
      if (isNaN(d.getTime())) return String(dateStr)
      const yy = d.getFullYear()
      const mm = String(d.getMonth() + 1).padStart(2, '0')
      const dd = String(d.getDate()).padStart(2, '0')
      const hh = String(d.getHours()).padStart(2, '0')
      const mnt = String(d.getMinutes()).padStart(2, '0')
      return `${dd}/${mm}/${yy} ${hh}:${mnt}`
    },
    formatCurrency(value) {
      if (!value && value !== 0) return '-'
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value)
    },
    exportToExcel() {
      if (!this.displayedData.length) return
      this.exporting = true

      try {
        const exportData = this.displayedData.map((row, index) => ({
          '#': index + 1,
          'ວັນທີບັນທຶກ (Date Create)': this.formatDateTime(row.createdAt),
          'ເລກລ໋ອດ (Lot No)': row.lotNumber || '-',
          'ລະຫັດສິນຄ້າ (Product ID)': row.product ? row.product.pro_id : '',
          'ຊື່ສິນຄ້າ (Product Name)': row.product ? row.product.pro_name : '',
          'ຈຳນວນ (Qty)': row.stockCardQty || 1,
          'ຕົ້ນທຶນຕໍ່ໜ່ວຍ (Cost/Unit)': row.costPerUnit || row.cost || 0,
          'ຕົ້ນທຶນລວມ (Total Cost)': row.totalCost || row.cost || 0,
          'ສະກຸນເງິນ (Currency)': row.currency ? row.currency.code : 'LAK',
          'ຜູ້ບັນທຶກ (User Create)': row.creator ? row.creator.cus_name : 'Unknown User'
        }))

        if (this.$xlsx) {
          const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
          const workbook = this.$xlsx.utils.book_new()
          this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Stock Activities')
          this.$xlsx.writeFile(workbook, `stock_activity_report_${this.filters.dateFrom}_${this.filters.dateTo}.xlsx`)
          this.$toast.success('Exported to Excel')
        } else {
          // Fallback to CSV
          const headers = Object.keys(exportData[0])
          const csvContent = [
            headers.join(','),
            ...exportData.map(row => headers.map(header => `"${(row[header] || 0).toString().replace(/"/g, '""')}"`).join(','))
          ].join('\n')

          const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
          const link = document.createElement('a')
          const url = URL.createObjectURL(blob)
          link.setAttribute('href', url)
          link.setAttribute('download', `stock_activity_report.csv`)
          link.style.visibility = 'hidden'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
          
          this.$toast.success('Exported to CSV')
        }
      } catch (err) {
        console.error(err)
        this.$toast.error('Export failed')
      } finally {
        this.exporting = false
      }
    },
    printReport() {
      window.print()
    }
  }
}
</script>

<style scoped>
.stock-activity-report * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

@media print {
  .v-card {
    box-shadow: none !important;
  }
  .v-btn,
  .v-input,
  header,
  .v-navigation-drawer {
    display: none !important;
  }
  .stock-activity-report {
    padding: 0;
  }
}
</style>
