<template>
  <div class="ma-ledger-report pa-4">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div>
        <h1 class="text-h5 font-weight-bold primary--text">
          <v-icon color="primary" class="mr-2">mdi-clipboard-text-clock</v-icon>
          ລາຍງານການຈ່າຍເງິນລາຍທຸລະກຳ (Transaction Ledger)
        </h1>
        <div class="text-subtitle-2 grey--text">
          Ministry Money Advance & Settlement Ledger
        </div>
      </div>
      <div>
        <v-btn color="success" outlined @click="exportToExcel" :disabled="!ledgerEntries.length" :loading="exporting">
          <v-icon left>mdi-file-excel</v-icon> Export Excel
        </v-btn>
        <v-btn color="primary" class="ml-2" @click="printReport" :disabled="!ledgerEntries.length">
          <v-icon left>mdi-printer</v-icon> Print
        </v-btn>
      </div>
    </div>

    <!-- Filters -->
    <v-card class="mb-4" elevation="1">
      <v-card-text>
        <v-row align="center">
          <v-col cols="12" md="3">
            <v-select v-model="filters.ministryId" :items="[{id: 'ALL', ministryName: 'ທັງໝົດ (All Ministries)'}, ...ministries]" item-text="ministryName" item-value="id"
              label="ເລືອກກະຊວງ (Ministry)" outlined dense hide-details clearable></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="filters.fromDate" type="date" label="ຕັ້ງແຕ່ວັນທີ (From Date)" outlined dense
              hide-details></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="filters.toDate" type="date" label="ເຖິງວັນທີ (To Date)" outlined dense
              hide-details></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn color="primary" @click="fetchLedger" :loading="loading" elevation="0" block>
              <v-icon left>mdi-magnify</v-icon> ຄົ້ນຫາ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Cards -->
    <v-row class="mb-4" v-if="ledgerEntries.length > 0">
      <v-col cols="12" md="3">
        <v-card color="grey lighten-4" elevation="0">
          <v-card-text>
            <div class="text-subtitle-2 grey--text text--darken-2">ຍອດຍົກມາ (Brought Forward)</div>
            <div class="text-h6 font-weight-bold">{{ formatCurrency(broughtForward) }}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card color="blue lighten-5" elevation="0">
          <v-card-text>
            <div class="text-subtitle-2 primary--text">ລາຍຈ່າຍທັງໝົດ (Total Advances)</div>
            <div class="text-h6 font-weight-bold primary--text">{{ formatCurrency(totalAdvances) }}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card color="green lighten-5" elevation="0">
          <v-card-text>
            <div class="text-subtitle-2 success--text">ຮັບຊຳລະທັງໝົດ (Total Settlements)</div>
            <div class="text-h6 font-weight-bold success--text">{{ formatCurrency(totalSettlements) }}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card color="orange lighten-5" elevation="0">
          <v-card-text>
            <div class="text-subtitle-2 warning--text text--darken-2">ຍອດຄົງເຫຼືອປັດຈຸບັນ (Outstanding)</div>
            <div class="text-h6 font-weight-bold warning--text text--darken-2">{{ formatCurrency(currentOutstanding) }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Table -->
    <v-card elevation="1">
      <v-data-table :headers="headers" :items="ledgerEntries" :loading="loading" loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
        no-data-text="ບໍ່ພົບຂໍ້ມູນໃນຊ່ວງເວລານີ້" :items-per-page="50" :footer-props="{
          'items-per-page-options': [25, 50, 100, -1]
        }" class="elevation-0" disable-sort>
        <template v-slot:item.index="{ item }">
          {{ ledgerEntries.indexOf(item) + 1 }}
        </template>

        <template v-slot:item.date="{ item }">
          {{ formatDate(item.date) }}
        </template>

        <template v-slot:item.type="{ item }">
          <v-chip small :color="item.type === 'ADVANCE' ? 'primary' : (item.type === 'SETTLEMENT' ? 'success' : 'grey')"
            text-color="white">
            {{ getTypeText(item.type) }}
          </v-chip>
        </template>

        <template v-slot:item.description="{ item }">
          <div class="font-weight-medium">{{ item.description }}</div>
          <div class="text-caption grey--text">{{ item.referenceNo }}</div>
        </template>

        <template v-slot:item.advanceAmount="{ item }">
          <span v-if="item.advanceAmount > 0" class="primary--text font-weight-medium">
            {{ formatCurrency(item.advanceAmount) }}
          </span>
          <span v-else>-</span>
        </template>

        <template v-slot:item.settleAmount="{ item }">
          <span v-if="item.settleAmount > 0" class="success--text font-weight-medium">
            {{ formatCurrency(item.settleAmount) }}
          </span>
          <span v-else>-</span>
        </template>

        <template v-slot:item.balance="{ item }">
          <span :class="{ 'error--text': item.balance > 0, 'font-weight-bold': true }">
            {{ formatCurrency(item.balance) }}
          </span>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MoneyAdvanceLedgerReport',
  data() {
    return {
      loading: false,
      exporting: false,
      ministries: [],
      filters: {
        ministryId: 'ALL',
        fromDate: '',
        toDate: ''
      },
      ledgerEntries: [],
      broughtForward: 0,
      totalAdvances: 0,
      totalSettlements: 0,
      currentOutstanding: 0,
      headers: [
        { text: 'ລຳດັບ (No.)', value: 'index', width: '80px', align: 'center' },
        { text: 'ວັນທີ', value: 'date', width: '120px' },
        { text: 'ກະຊວງ (Ministry)', value: 'ministryLabel', width: '180px' },
        { text: 'ປະເພດທຸລະກຳ', value: 'type', width: '120px' },
        { text: 'ລາຍລະອຽດ / ເລກທີ', value: 'description' },
        { text: 'ຈຳນວນເງິນຈ່າຍ (Dr)', value: 'advanceAmount', align: 'right', width: '150px' },
        { text: 'ຈຳນວນເງິນຮັບຊຳລະ (Cr)', value: 'settleAmount', align: 'right', width: '150px' },
        { text: 'ຍອດຄົງເຫຼືອ (Balance)', value: 'balance', align: 'right', width: '150px' }
      ]
    }
  },
  created() {
    this.setDefaultDates()
    this.fetchMinistries()
  },
  methods: {
    setDefaultDates() {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
      this.filters.fromDate = firstDay.toISOString().substr(0, 10)
      this.filters.toDate = now.toISOString().substr(0, 10)
    },
    async fetchMinistries() {
      try {
        const response = await this.$axios.get('/api/ministries')
        if (response.data && response.data.success) {
          this.ministries = response.data.data || []
        } else {
          this.ministries = response.data || []
        }
      } catch (error) {
        console.error('Error fetching ministries', error)
      }
    },
    async fetchAllPaginated(url, params) {
      let results = []
      let page = 1
      let totalPages = 1
      do {
        const response = await this.$axios.get(url, { params: { ...params, page, limit: 100 } })
        let data = response.data?.data
        if (!data) data = response.data // fallback

        let items = []
        if (data.advances) items = data.advances
        else if (data.settlements) items = data.settlements
        else if (Array.isArray(data)) items = data

        results = results.concat(items)
        if (data.pagination) totalPages = data.pagination.totalPages
        else totalPages = 1 // No pagination found, assume all loaded

        page++
      } while (page <= totalPages)
      return results
    },
    async fetchLedger() {
      if (!this.filters.ministryId) {
        this.$toast.info('ກະລຸນາເລືອກກະຊວງ (Please select a ministry)')
        return
      }
      if (!this.filters.fromDate || !this.filters.toDate) {
        this.$toast.info('ກະລຸນາເລືອກວັນທີ (Please select a date range)')
        return
      }

      this.loading = true
      try {
        // Fetch all transactions up to the 'toDate'
        // We will filter out the ones after 'toDate' just in case, and segregate those before 'fromDate' for Brought Forward
        const [advances, settlements] = await Promise.all([
          this.fetchAllPaginated('/api/money-advances', {
            ...(this.filters.ministryId !== 'ALL' && { ministryId: this.filters.ministryId }),
            toDate: this.filters.toDate,
            include: ['ministry']
          }),
          this.fetchAllPaginated('/api/settlements', {
            ...(this.filters.ministryId !== 'ALL' && { ministryId: this.filters.ministryId }),
            toDate: this.filters.toDate,
            isPosted: true,
            include: ['ministry', 'advance']
          })
        ])

        const fromDateObj = new Date(this.filters.fromDate)
        const toDateObj = new Date(this.filters.toDate)
        toDateObj.setHours(23, 59, 59, 999)

        let bfAmount = 0
        let periodAdvances = 0
        let periodSettlements = 0
        const periodTransactions = []

        // Process Advances
        advances.forEach(adv => {
          const tDate = new Date(adv.bookingDate || adv.createdAt)
          // Always use LCY if mult-currency is possible, or default amount
          const amount = adv.lcyEquivalent || parseFloat(adv.amount || 0)

          if (tDate < fromDateObj) {
            bfAmount += amount
          } else if (tDate <= toDateObj) {
            periodAdvances += amount
            periodTransactions.push({
              date: tDate,
              type: 'ADVANCE',
              ministryLabel: adv.ministry?.ministryName || '-',
              description: adv.purpose || 'ເບີກຈ່າຍເງິນລາຍໜ້າ',
              referenceNo: `MA-${String(adv.id).padStart(6, '0')}`,
              advanceAmount: amount,
              settleAmount: 0,
              originalDoc: adv
            })
          }
        })

        // Process Settlements
        settlements.forEach(set => {
          const tDate = new Date(set.bookingDate || set.createdAt)
          const amount = set.lcyEquivalent || parseFloat(set.amount || 0)

          if (tDate < fromDateObj) {
            bfAmount -= amount
          } else if (tDate <= toDateObj) {
            periodSettlements += amount
            periodTransactions.push({
              date: tDate,
              type: 'SETTLEMENT',
              ministryLabel: set.ministry?.ministryName || '-',
              description: set.notes || 'ຮັບຊຳລະເງິນຄືນ',
              referenceNo: `MAS-${String(set.id).padStart(6, '0')}`,
              advanceAmount: 0,
              settleAmount: amount,
              originalDoc: set
            })
          }
        })

        // Sort period transactions by date asc
        periodTransactions.sort((a, b) => a.date - b.date)

        // Calculate running balance
        let runningBalance = bfAmount

        const finalEntries = []
        // Add Brought Forward Row if > 0 or if there are transactions
        finalEntries.push({
          date: fromDateObj,
          type: 'BF',
          ministryLabel: '-',
          description: 'ຍອດຍົກມາ (Brought Forward)',
          referenceNo: '-',
          advanceAmount: 0,
          settleAmount: 0,
          balance: bfAmount
        })

        periodTransactions.forEach(tx => {
          runningBalance += tx.advanceAmount
          runningBalance -= tx.settleAmount
          tx.balance = runningBalance
          finalEntries.push(tx)
        })

        this.broughtForward = bfAmount
        this.totalAdvances = periodAdvances
        this.totalSettlements = periodSettlements
        this.currentOutstanding = runningBalance
        this.ledgerEntries = finalEntries

      } catch (error) {
        console.error('Error computing ledger:', error)
        this.$toast.error('ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້ (Failed to load data)')
      } finally {
        this.loading = false
      }
    },
    formatDate(dateVal) {
      if (!dateVal) return '-'
      const d = new Date(dateVal)
      if (isNaN(d.getTime())) return String(dateVal)
      const yy = d.getFullYear()
      const mm = String(d.getMonth() + 1).padStart(2, '0')
      const dd = String(d.getDate()).padStart(2, '0')
      return `${dd}/${mm}/${yy}`
    },
    formatCurrency(value) {
      if (!value && value !== 0) return '-'
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value)
    },
    getTypeText(type) {
      switch (type) {
        case 'BF': return 'ຍົກມາ (B/F)'
        case 'ADVANCE': return 'ເບີກຈ່າຍ (Advance)'
        case 'SETTLEMENT': return 'ຊຳລະ (Settle)'
        default: return type
      }
    },
    exportToExcel() {
      if (!this.ledgerEntries.length) return
      this.exporting = true

      try {
        const ministryName = this.filters.ministryId === 'ALL'
          ? 'ທັງໝົດ (All Ministries)'
          : (this.ministries.find(m => m.id === this.filters.ministryId)?.ministryName || 'Unknown')

        const exportData = this.ledgerEntries.map((row, index) => ({
          '#': index + 1,
          'ວັນທີ': this.formatDate(row.date),
          'ກະຊວງ': row.ministryLabel !== '-' && row.ministryLabel ? row.ministryLabel : ministryName,
          'ປະເພດ': this.getTypeText(row.type),
          'ລາຍລະອຽດ': row.description,
          'ເລກທີເອກະສານ': row.referenceNo,
          'ຈຳນວນເງິນຈ່າຍ (Dr)': row.advanceAmount,
          'ຈຳນວນເງິນຮັບ (Cr)': row.settleAmount,
          'ຍອດຄົງເຫຼືອ': row.balance
        }))

        const headers = Object.keys(exportData[0])
        const csvContent = [
          headers.join(','),
          ...exportData.map(row => headers.map(header => `"${(row[header] || 0).toString().replace(/"/g, '""')}"`).join(','))
        ].join('\n')

        const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', `ledger_report_${ministryName}_${this.filters.fromDate}_${this.filters.toDate}.csv`)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        this.$toast.success('Exported to CSV')
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
.ma-ledger-report * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

@media print {
  .v-card {
    box-shadow: none !important;
  }

  .v-btn,
  .v-input {
    display: none !important;
  }

  .ma-ledger-report {
    padding: 0;
  }
}
</style>
