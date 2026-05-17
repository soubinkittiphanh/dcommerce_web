<template>
  <div class="report-container">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator />
    </v-dialog>

    <!-- Header Section -->
    <header class="report-header pb-4">
      <div class="d-flex justify-space-between align-end flex-wrap">
        <div>
          <div class="d-flex align-center mb-1">
            <v-icon color="primary" class="mr-2" size="28">mdi-chart-areaspline</v-icon>
            <span class="text-overline font-weight-bold primary--text">ລາຍງານການເງິນ</span>
          </div>
          <h1 class="text-h4 font-weight-black primary--text mb-1">ລາຍງານສະຫຼຸບຍອດຂາຍ</h1>
          <p class="text-body-2 grey--text text--darken-2 mb-0">
            ສະຫຼຸບຂໍ້ມູນການຂາຍລະອຽດຕາມວັນ, ສະກຸນເງິນ ແລະ ປະເພດການຊຳລະ
          </p>
        </div>
        <div class="d-flex mt-3 mt-md-0">
          <v-btn color="success" dark @click="exportToExcel" class="mr-2 action-btn">
            <v-icon left>mdi-microsoft-excel</v-icon>
            Export Excel
          </v-btn>
          <v-btn color="primary" dark @click="fetchData" :loading="isloading" class="action-btn">
            <v-icon left>mdi-refresh</v-icon>
            Refresh
          </v-btn>
        </div>
      </div>
    </header>

    <!-- Overview Cards -->
    <v-row class="mb-6" dense>
      <!-- Grand Total Card -->
      <v-col cols="12" md="4">
        <v-card class="stat-card main-stat" color="primary" dark elevation="2">
          <div class="card-content pa-4">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-caption opacity-80">ຍອດຂາຍທັງໝົດ ({{ localCurrencyCode }})</span>
              <v-icon color="white" size="32">mdi-cash-multiple</v-icon>
            </div>
            <div class="amount-display d-flex align-baseline">
              <span class="text-h4 font-weight-black mr-2">{{ formatNumber(grandTotalLAK) }}</span>
              <span class="text-subtitle-1 opacity-70">{{ localCurrencyCode }}</span>
            </div>
            <div class="mt-2 d-flex align-center">
              <v-chip x-small color="white" light class="font-weight-black px-2 mr-2">
                {{ paymentStats.length }} ຊ່ອງທາງ
              </v-chip>
              <span class="text-caption white--text opacity-70">ຈາກທຸລະກຳທັງໝົດ</span>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Payment Stats Cards -->
      <v-col v-for="(stat, index) in paymentStats" :key="index" cols="12" sm="6" md="2">
        <v-card outlined class="stat-card payment-stat-card h-100">
          <div class="pa-3">
            <div class="d-flex justify-space-between mb-2">
              <v-avatar :color="getPaymentColor(stat.code) + '20'" size="32">
                <v-icon :color="getPaymentColor(stat.code)" size="18">{{ stat.icon }}</v-icon>
              </v-avatar>
              <div class="text-right overflow-hidden">
                <span class="text-caption font-weight-bold grey--text text--darken-1 text-truncate d-block">{{ stat.title }}</span>
                <div class="font-weight-black text-subtitle-1 primary--text text-truncate">{{ formatNumber(stat.total) }}</div>
              </div>
            </div>
            <v-progress-linear 
              :value="stat.percentage" 
              :color="getPaymentColor(stat.code)" 
              height="4" 
              rounded 
              class="mb-2"
            ></v-progress-linear>
            <div class="d-flex justify-space-between align-center">
              <span class="text-caption grey--text">{{ stat.count }} ລາຍການ</span>
              <span class="text-caption font-weight-black" :style="{ color: getPaymentColor(stat.code) }">{{ stat.percentage.toFixed(1) }}%</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters Section -->
    <v-card class="filter-card pa-4 mb-6" outlined>
      <v-row align="center" dense>
        <v-col cols="12" md="3">
          <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field 
                v-model="fromDate" 
                label="ຈາກວັນທີ" 
                prepend-inner-icon="mdi-calendar" 
                readonly 
                v-bind="attrs" 
                v-on="on" 
                outlined 
                dense
                hide-details 
                class="custom-input"
              ></v-text-field>
            </template>
            <v-date-picker v-model="fromDate" @input="menu1 = false" color="primary"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="3">
          <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field 
                v-model="toDate" 
                label="ຫາວັນທີ" 
                prepend-inner-icon="mdi-calendar" 
                readonly 
                v-bind="attrs" 
                v-on="on" 
                outlined 
                dense
                hide-details 
                class="custom-input"
              ></v-text-field>
            </template>
            <v-date-picker v-model="toDate" @input="menu2 = false" color="primary"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn color="primary" block @click="fetchData" :loading="isloading" class="action-btn">
            <v-icon left>mdi-magnify</v-icon>
            ຄົ້ນຫາ
          </v-btn>
        </v-col>
        <v-col cols="12" md="4">
           <v-text-field 
            v-model="search" 
            label="ຄົ້ນຫາໄວໃນຕາຕະລາງ..." 
            prepend-inner-icon="mdi-filter" 
            clearable 
            hide-details 
            outlined 
            dense
            class="custom-input"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>

    <!-- Table Section -->
    <v-card class="table-container-card" outlined>
      <v-data-table 
        :headers="dynamicHeaders" 
        :items="pivotedRows" 
        :items-per-page="15"
        class="custom-modern-table" 
        :search="search"
        :footer-props="{ 'items-per-page-options': [15, 30, 50, -1] }"
      >
        <template v-slot:[`item.bookingDate`]="{ item }">
          <div class="date-cell d-flex align-center">
            <v-icon small color="primary" class="mr-2">mdi-calendar-text</v-icon>
            <span class="font-weight-bold grey--text text--darken-3">{{ formatDateDisplay(item.bookingDate) }}</span>
          </div>
        </template>

        <template v-slot:[`item.currencyCode`]="{ item }">
          <v-chip small :color="item.currencyCode === localCurrencyCode ? 'primary' : 'grey'" 
            outlined
            class="font-weight-black"
          >
            {{ item.currencyCode }}
          </v-chip>
        </template>

        <!-- Dynamic Payment Type Columns -->
        <template v-for="col in paymentColumns" v-slot:[`item.${col}`]="{ item }">
          <div :key="col" class="text-right font-weight-medium grey--text text--darken-4">
            {{ formatNumber(item[col] || 0) }}
          </div>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <div class="text-right total-cell pa-2">
            <span class="text-subtitle-1 font-weight-black primary--text">{{ formatNumber(item.total) }}</span>
            <span class="text-caption ml-1 font-weight-bold grey--text">{{ item.currencyCode }}</span>
          </div>
        </template>

        <template v-slot:no-data>
          <div class="empty-state pa-8 text-center">
            <v-icon size="64" color="grey lighten-3" class="mb-2">mdi-database-off</v-icon>
            <h3 class="text-subtitle-1 grey--text">ບໍ່ພົບຂໍ້ມູນການຂາຍ</h3>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { getFormatNum } from '~/common'
import * as XLSX from 'xlsx'

export default {
  middleware: 'auths',
  data() {
    return {
      isloading: false,
      search: '',
      menu1: false,
      menu2: false,
      fromDate: new Date().toISOString().substr(0, 10),
      toDate: new Date().toISOString().substr(0, 10),
      loaddata: [],
    }
  },
  computed: {
    localCurrencyCode() {
      const local = this.$store.getters.findAllCurrency?.find(c => c.isLocalCCY)
      return local ? local.code : 'LAK'
    },

    pivotedInfo() {
      const pivoted = {}
      const paymentTypes = new Set()

      this.loaddata.forEach(item => {
        const key = `${item.bookingDate}_${item.currencyCode}`
        if (!pivoted[key]) {
          pivoted[key] = {
            bookingDate: item.bookingDate,
            currencyCode: item.currencyCode,
            total: 0
          }
        }
        const pType = item.paymentType || 'Other'
        paymentTypes.add(pType)
        pivoted[key][pType] = (pivoted[key][pType] || 0) + parseFloat(item.totalAmount)
        pivoted[key].total += parseFloat(item.totalAmount)
      })

      return {
        rows: Object.values(pivoted).sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate)),
        columns: Array.from(paymentTypes).sort()
      }
    },

    pivotedRows() {
      return this.pivotedInfo.rows
    },

    paymentColumns() {
      return this.pivotedInfo.columns
    },

    dynamicHeaders() {
      const base = [
        { text: 'ວັນທີ', value: 'bookingDate', align: 'start', sortable: true, class: 'header-style' },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', align: 'center', sortable: true, class: 'header-style' }
      ]

      const paymentCols = this.paymentColumns.map(col => ({
        text: col,
        value: col,
        align: 'end',
        sortable: true,
        class: 'header-style'
      }))

      const total = [{ text: 'ລວມທັງໝົດ', value: 'total', align: 'end', sortable: true, class: 'header-style primary--text' }]

      return [...base, ...paymentCols, ...total]
    },

    paymentStats() {
      const stats = {}

      this.loaddata.forEach(item => {
        const code = item.paymentCode || 'OTHER'
        if (!stats[code]) {
          stats[code] = {
            title: item.paymentType || 'ອື່ນໆ',
            code: code,
            total: 0,
            count: 0,
            icon: this.getPaymentIcon(code)
          }
        }

        if (item.currencyCode === this.localCurrencyCode) {
          stats[code].total += parseFloat(item.totalAmount)
        }
        stats[code].count += parseInt(item.transactionCount)
      })

      const totalValue = Object.values(stats).reduce((acc, s) => acc + s.total, 0)

      return Object.values(stats).map(s => ({
        ...s,
        percentage: totalValue > 0 ? (s.total / totalValue) * 100 : 0
      }))
    },

    grandTotalLAK() {
      return this.paymentStats.reduce((acc, s) => acc + s.total, 0)
    }
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    formatNumber(val) {
      return getFormatNum(Math.round(val))
    },
    formatDateDisplay(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    },
    getPaymentIcon(code) {
      const icons = {
        CASH: 'mdi-cash',
        TRANSFER: 'mdi-bank-transfer',
        TRANSFER_BCEL: 'mdi-bank',
        QR: 'mdi-qrcode',
        CARD: 'mdi-credit-card',
        COD: 'mdi-truck-delivery'
      }
      return icons[code] || 'mdi-wallet'
    },
    getPaymentColor(code) {
      const colors = {
        CASH: '#10B981',
        TRANSFER: '#3B82F6',
        TRANSFER_BCEL: '#1D4ED8',
        QR: '#8B5CF6',
        CARD: '#F59E0B',
        COD: '#64748B'
      }
      return colors[code] || '#94A3B8'
    },
    async fetchData() {
      this.isloading = true
      try {
        const res = await this.$axios.get('api/dailySaleSummary', {
          params: { fromDate: this.fromDate, toDate: this.toDate }
        })
        this.loaddata = res.data
      } catch (err) {
        console.error(err)
      } finally {
        this.isloading = false
      }
    },
    exportToExcel() {
      const dataToExport = this.pivotedRows.map(row => {
        const item = {
          'ວັນທີ': this.formatDateDisplay(row.bookingDate),
          'ສະກຸນເງິນ': row.currencyCode
        }
        this.paymentColumns.forEach(col => {
          item[col] = row[col] || 0
        })
        item['ລວມທັງໝົດ'] = row.total
        return item
      })

      const ws = XLSX.utils.json_to_sheet(dataToExport)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'Sale Summary')
      XLSX.writeFile(wb, `Sale_Summary_${this.fromDate}_to_${this.toDate}.xlsx`)
    }
  }
}
</script>

<style scoped>
.report-container {
  font-family: 'noto sans lao', sans-serif !important;
  background-color: #fafafa;
  min-height: 100vh;
  padding: 16px;
}

.report-container * {
  font-family: 'noto sans lao', sans-serif !important;
}

/* Header */
.report-header {
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
}

.action-btn {
  text-transform: none;
  font-weight: 700;
  border-radius: 8px;
}

/* Stat Cards */
.stat-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.main-stat {
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-primary-darken1) 100%);
}

.payment-stat-card {
  background: white;
}

/* Filters */
.filter-card {
  border-radius: 12px;
  background: white;
}

/* Table */
.table-container-card {
  border-radius: 12px;
  overflow: hidden;
}

.custom-modern-table>>>thead th.header-style {
  background-color: #f5f5f5 !important;
  color: #333 !important;
  font-weight: 700 !important;
  text-transform: none;
  font-size: 0.85rem;
  padding: 12px 16px !important;
}

.custom-modern-table>>>tbody td {
  padding: 12px 16px !important;
}

.total-cell {
  background-color: rgba(var(--v-primary-base), 0.05);
}

.opacity-80 { opacity: 0.8; }
.opacity-70 { opacity: 0.7; }

.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
