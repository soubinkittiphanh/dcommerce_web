<template>
  <div class="trial-balance-container">
    <!-- Header Section -->
    <v-row class="mb-4">
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between mb-2">
          <div>
            <h1 class="font-weight-black primary--text text-h4 mb-1">ໃບດຸ່ນດ່ຽງທົດລອງ</h1>
            <p class="text-subtitle-1 text--secondary">Trial Balance Report</p>
          </div>
          <v-chip :color="isBalanced ? 'success' : 'error'" class="pa-5 font-weight-bold" label text-color="white">
            <v-icon left>{{ isBalanced ? 'mdi-check-decagram' : 'mdi-alert-decagram' }}</v-icon>
            {{ isBalanced ? 'ບັນຊີສົມດຸນ (Balanced)' : 'ບັນຊີບໍ່ສົມດຸນ (Out of Balance)' }}
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <!-- Loading Indicator -->
    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Date Selection & Actions Card -->
    <v-card class="mb-6 rounded-xl elevation-2">
      <v-card-text class="pa-5">
        <v-row align="center">
          <v-col cols="12" md="4" class="py-0">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted"
                  label="ຂໍ້ມູນ ນະ ວັນທີ (As of Date):"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-inner-icon="mdi-calendar-clock"
                  outlined
                  dense
                  v-bind="attrs"
                  @blur="asOfDate = parseDate(dateFormatted)"
                  v-on="on"
                  hide-details
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="asOfDate"
                no-title
                @input="menu = false; fetchData()"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="8" class="text-right py-0">
            <v-btn color="primary" outlined class="mr-2 rounded-lg font-weight-bold" @click="fetchData">
              <v-icon left>mdi-refresh</v-icon> ໂຫຼດຄືນ
            </v-btn>
            <v-btn color="success" class="mr-2 rounded-lg font-weight-bold" @click="exportToExcel">
              <v-icon left>mdi-microsoft-excel</v-icon> ສົ່ງອອກ Excel
            </v-btn>
            <v-btn color="secondary" class="rounded-lg font-weight-bold" @click="printReport">
              <v-icon left>mdi-printer</v-icon> ພິມລາຍງານ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Metrics Cards -->
    <v-row class="mb-6">
      <!-- Total Debits Card -->
      <v-col cols="12" md="4">
        <v-card class="rounded-xl elevation-2 metric-card border-left-debit pa-4">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="metric-title font-weight-medium grey--text text--darken-2">ເດບິດລວມ (Total Debits)</div>
            <v-avatar color="success lighten-5" size="40">
              <v-icon color="success">mdi-plus-box-outline</v-icon>
            </v-avatar>
          </div>
          <h2 class="text-h4 font-weight-bold success--text">{{ formatCurrency(totalDebits) }} {{ homeCurrencyCode }}</h2>
        </v-card>
      </v-col>

      <!-- Total Credits Card -->
      <v-col cols="12" md="4">
        <v-card class="rounded-xl elevation-2 metric-card border-left-credit pa-4">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="metric-title font-weight-medium grey--text text--darken-2">ເຄຣດິດລວມ (Total Credits)</div>
            <v-avatar color="error lighten-5" size="40">
              <v-icon color="error">mdi-minus-box-outline</v-icon>
            </v-avatar>
          </div>
          <h2 class="text-h4 font-weight-bold error--text">{{ formatCurrency(totalCredits) }} {{ homeCurrencyCode }}</h2>
        </v-card>
      </v-col>

      <!-- Variance Card -->
      <v-col cols="12" md="4">
        <v-card class="rounded-xl elevation-2 metric-card border-left-variance pa-4" :class="{'out-of-balance-bg': !isBalanced}">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="metric-title font-weight-medium grey--text text--darken-2">ສ່ວນຕ່າງ (Difference)</div>
            <v-avatar :color="isBalanced ? 'primary lighten-5' : 'warning lighten-5'" size="40">
              <v-icon :color="isBalanced ? 'primary' : 'warning'">{{ isBalanced ? 'mdi-scale-balance' : 'mdi-scale-unbalance' }}</v-icon>
            </v-avatar>
          </div>
          <h2 class="text-h4 font-weight-bold" :class="isBalanced ? 'primary--text' : 'warning--text'">{{ formatCurrency(variance) }} {{ homeCurrencyCode }}</h2>
        </v-card>
      </v-col>
    </v-row>

    <!-- Accounts Balance Table -->
    <v-card class="rounded-xl elevation-3 statement-card overflow-hidden">
      <v-card-title class="primary white--text py-4 px-6 d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-icon color="white" class="mr-3">mdi-book-open-outline</v-icon>
          <span class="text-h6 font-weight-bold">ລາຍລະອຽດບັນຊີດຸ່ນດ່ຽງ (Trial Balance Ledger Accounts)</span>
        </div>
        <div class="text-subtitle-2 white--text opacity-85">
          ນະ ວັນທີ: {{ formatDate(asOfDate) }}
        </div>
      </v-card-title>

      <v-card-text class="pa-4">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="ຄົ້ນຫາບັນຊີ (Search Accounts)..."
          outlined
          dense
          hide-details
          class="mb-4"
        ></v-text-field>

        <v-data-table
          :headers="headers"
          :items="accounts"
          :search="search"
          :loading="loading"
          class="trial-balance-table elevation-0"
          :items-per-page="50"
        >
          <template v-slot:[`item.accountNumber`]="{ item }">
            <v-chip small color="primary lighten-5" text-color="primary" class="font-weight-black">
              {{ item.accountNumber }}
            </v-chip>
          </template>

          <template v-slot:[`item.accountType`]="{ item }">
            <v-chip x-small outlined :color="getTypeColor(item.accountType)" class="font-weight-bold">
              {{ getTypeText(item.accountType) }}
            </v-chip>
          </template>

          <template v-slot:[`item.debitBalance`]="{ item }">
            <span v-if="item.debitBalance > 0" class="success--text font-weight-bold text-subtitle-1">
              {{ formatCurrency(item.debitBalance) }}
            </span>
            <span v-else class="grey--text lighten-2">-</span>
          </template>

          <template v-slot:[`item.creditBalance`]="{ item }">
            <span v-if="item.creditBalance > 0" class="error--text font-weight-bold text-subtitle-1">
              {{ formatCurrency(item.creditBalance) }}
            </span>
            <span v-else class="grey--text lighten-2">-</span>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { generateTrialBalanceHTML } from '~/common/printTemplates'

export default {
  middleware: 'auths',
  data() {
    return {
      search: '',
      loading: false,
      menu: false,
      asOfDate: new Date().toISOString().split('T')[0],
      dateFormatted: this.formatDate(new Date().toISOString().split('T')[0]),
      accounts: [],
      totalDebits: 0,
      totalCredits: 0,
      homeCurrencyCode: 'LAK',
      headers: [
        { text: 'ລະຫັດບັນຊີ (Code)', value: 'accountNumber', align: 'left', width: '150px' },
        { text: 'ຊື່ບັນຊີ (Account Name)', value: 'accountName', align: 'left' },
        { text: 'ປະເພດບັນຊີ (Type)', value: 'accountType', align: 'center', width: '150px' },
        { text: 'ຍອດເດບິດ (Debit Balance)', value: 'debitBalance', align: 'right', width: '200px' },
        { text: 'ຍອດເຄຣດິດ (Credit Balance)', value: 'creditBalance', align: 'right', width: '200px' }
      ]
    }
  },
  computed: {
    isBalanced() {
      return Math.abs(this.totalDebits - this.totalCredits) < 0.01;
    },
    variance() {
      return Math.abs(this.totalDebits - this.totalCredits);
    }
  },
  watch: {
    asOfDate(val) {
      this.dateFormatted = this.formatDate(val)
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/api/gl/reports/trial-balance', {
          params: { asOfDate: this.asOfDate }
        })
        if (data && data.success) {
          this.accounts = data.accounts || []
          this.totalDebits = data.totalDebits || 0
          this.totalCredits = data.totalCredits || 0
        }
      } catch (error) {
        console.error('Error fetching trial balance:', error)
        this.$toast.error('ບໍ່ສາມາດດຶງຂໍ້ມູນໃບດຸ່ນດ່ຽງທົດລອງໄດ້')
      } finally {
        this.loading = false
      }
    },
    formatCurrency(val) {
      if (val === undefined || val === null) return '0.00'
      return parseFloat(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    },
    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    getTypeColor(type) {
      switch (type) {
        case 'Asset': return 'info'
        case 'Liability': return 'warning'
        case 'Equity': return 'purple'
        case 'Revenue': return 'success'
        case 'Expense': return 'error'
        default: return 'grey'
      }
    },
    getTypeText(type) {
      const mapping = {
        Asset: 'ຊັບສິນ (Asset)',
        Liability: 'ໜີ້ສິນ (Liability)',
        Equity: 'ສ່ວນທຶນ (Equity)',
        Revenue: 'ລາຍຮັບ (Revenue)',
        Expense: 'ລາຍຈ່າຍ (Expense)'
      }
      return mapping[type] || type
    },
    exportToExcel() {
      import('~/plugins/xlsx').then(({ exportTableToExcel }) => {
        const excelHeaders = ['Account Code', 'Account Name', 'Account Type', 'Debit Balance', 'Credit Balance']
        const excelData = this.accounts.map(acc => [
          acc.accountNumber,
          acc.accountName,
          acc.accountType,
          acc.debitBalance,
          acc.creditBalance
        ])
        // Append totals row
        excelData.push(['', 'TOTAL', '', this.totalDebits, this.totalCredits])

        const filename = `trial_balance_${this.asOfDate}.xlsx`
        const wsData = [excelHeaders, ...excelData]
        
        // Dynamic loading from simple client script helper
        const XLSX = require('xlsx')
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.aoa_to_sheet(wsData)
        XLSX.utils.book_append_sheet(wb, ws, 'Trial Balance')
        XLSX.writeFile(wb, filename)
        this.$toast.success('ສົ່ງອອກ Excel ສຳເລັດແລ້ວ')
      }).catch(err => {
        console.error('XLSX plugin error:', err)
        this.$toast.error('ມີຂໍ້ຜິດພາດໃນການສົ່ງອອກ Excel')
      })
    },
    async printReport() {
      this.loading = true
      try {
        let company = {};
        try {
          const response = await this.$axios.get('/api/public/company/findAll')
          const data = response.data?.data ?? response.data
          company = data?.[0] || {}
        } catch (e) {
          const response = await this.$axios.get('api/company/findAll')
          company = response.data?.[0] || {}
        }

        const reportHTML = generateTrialBalanceHTML(
          this.accounts,
          this.asOfDate,
          this.totalDebits,
          this.totalCredits,
          this.homeCurrencyCode,
          company
        )

        const printWindow = window.open('', '_blank', 'width=900,height=800')
        if (!printWindow) return
        printWindow.document.open()
        printWindow.document.write(reportHTML)
        printWindow.document.close()

        setTimeout(() => {
          try {
            printWindow.print()
            setTimeout(() => printWindow.close(), 200)
          } catch (e) {
            printWindow.close()
          }
        }, 500)
      } catch (error) {
        console.error('Print error:', error)
        this.$toast.error('ບໍ່ສາມາດພິມລາຍງານໄດ້ ' + error.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.trial-balance-container {
  max-width: 1200px;
  margin: 0 auto;
}

.metric-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.border-left-debit {
  border-left: 6px solid #4CAF50;
}

.border-left-credit {
  border-left: 6px solid #FF5252;
}

.border-left-variance {
  border-left: 6px solid #009688;
}

.out-of-balance-bg {
  background-color: #FFF3E0 !important;
  border-left: 6px solid #FF9800 !important;
}

.statement-card {
  border-radius: 16px;
}

@media print {
  body * {
    visibility: hidden;
  }
  .trial-balance-table, .trial-balance-table * {
    visibility: visible;
  }
  .trial-balance-table {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
