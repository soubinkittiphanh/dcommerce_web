<template>
  <div class="pa-4">
    <!-- Header -->
    <header class="mb-4">
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-3" size="36">mdi-package-variant-closed</v-icon>
          <div>
            <h1 class="text-h5 font-weight-black primary--text mb-0">
              ລາຍງານໜີ້ສິນບັນຈຸພັນລູກຄ້າ / Customer Packaging Debt Statement
            </h1>
            <span class="text-caption grey--text text--darken-1">
              ຕິດຕາມລາຍການສົ່ງອອກ ແລະ ຮັບຄືນ ລັງ-ແກ້ວ ຂອງລູກຄ້າຂາຍສົ່ງ (Wholesale Clients)
            </span>
          </div>
        </div>
        <div class="d-flex align-center mt-2 mt-sm-0">
          <v-btn color="success" outlined @click="exportToExcel" class="rounded-lg mr-2" :disabled="ledgerItems.length === 0">
            <v-icon left small>mdi-file-excel</v-icon> ສົ່ງອອກ Excel
          </v-btn>
          <v-btn color="info" outlined @click="printStatement" class="rounded-lg mr-2" :disabled="ledgerItems.length === 0">
            <v-icon left small>mdi-printer</v-icon> ພິມລາຍງານ
          </v-btn>
          <v-btn color="primary" depressed @click="loadData" :loading="isLoading" class="rounded-lg">
            <v-icon left small>mdi-refresh</v-icon> ໂຫຼດຂໍ້ມູນໃໝ່
          </v-btn>
        </div>
      </div>
    </header>

    <!-- KPI Summary Row -->
    <v-row dense class="mb-4">
      <v-col cols="12" sm="4">
        <v-card class="pa-4 rounded-xl elevation-2 amber lighten-5 border-amber" outlined>
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">ຍອດໜີ້ລັງເປົ່າຄ້າງສົ່ງທັງໝົດ</span>
              <div class="text-h4 font-weight-black amber--text text--darken-4 mt-1">
                {{ numberWithCommas(totalCratesOwed) }}
                <span class="text-subtitle-2 font-weight-medium grey--text text--darken-2">ລັງ</span>
              </div>
              <span class="caption amber--text text--darken-3 font-weight-bold">Total Empty Crates Owed</span>
            </div>
            <v-avatar color="amber darken-2" size="48">
              <v-icon color="white">mdi-cube-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="pa-4 rounded-xl elevation-2 teal lighten-5 border-teal" outlined>
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">ຍອດໜີ້ແກ້ວເປົ່າຄ້າງສົ່ງທັງໝົດ</span>
              <div class="text-h4 font-weight-black teal--text text--darken-4 mt-1">
                {{ numberWithCommas(totalBottlesOwed) }}
                <span class="text-subtitle-2 font-weight-medium grey--text text--darken-2">ແກ້ວ</span>
              </div>
              <span class="caption teal--text text--darken-3 font-weight-bold">Total Empty Bottles Owed</span>
            </div>
            <v-avatar color="teal darken-2" size="48">
              <v-icon color="white">mdi-glass-mug-variant</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="pa-4 rounded-xl elevation-2 blue lighten-5 border-blue" outlined>
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">ລູກຄ້າທີ່ຕິດໜີ້ບັນຈຸພັນ</span>
              <div class="text-h4 font-weight-black blue--text text--darken-4 mt-1">
                {{ numberWithCommas(debtorClientsCount) }}
                <span class="text-subtitle-2 font-weight-medium grey--text text--darken-2">ຮ້ານ</span>
              </div>
              <span class="caption blue--text text--darken-3 font-weight-bold">Active Debtor Clients</span>
            </div>
            <v-avatar color="blue darken-2" size="48">
              <v-icon color="white">mdi-account-group</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters Card -->
    <v-card outlined class="pa-4 mb-4 rounded-xl elevation-1">
      <v-row dense align="center">
        <!-- Customer Select -->
        <v-col cols="12" md="4">
          <v-autocomplete
            v-model="selectedClientId"
            :items="clientList"
            item-text="displayName"
            item-value="id"
            label="ເລືອກລູກຄ້າ (Select Client / Restaurant)"
            outlined
            dense
            hide-details
            @change="loadData"
            prepend-inner-icon="mdi-store"
            class="rounded-lg"
          ></v-autocomplete>
        </v-col>

        <!-- Start Date -->
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="startDate"
            type="date"
            label="ແຕ່ວັນທີ (From Date)"
            outlined
            dense
            hide-details
            @change="loadData"
            class="rounded-lg"
          ></v-text-field>
        </v-col>

        <!-- End Date -->
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="endDate"
            type="date"
            label="ຫາວັນທີ (To Date)"
            outlined
            dense
            hide-details
            @change="loadData"
            class="rounded-lg"
          ></v-text-field>
        </v-col>

        <!-- Search Action -->
        <v-col cols="12" md="2">
          <v-btn color="primary" block depressed @click="loadData" :loading="isLoading" class="rounded-lg">
            <v-icon left small>mdi-magnify</v-icon> ຄົ້ນຫາ
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- Specific Client Balance Cards (If Single Client Selected) -->
    <v-row v-if="selectedClientId !== 'all' && currentBalances.length > 0" class="mb-4" dense>
      <v-col v-for="(bal, idx) in currentBalances" :key="idx" cols="12" sm="6" md="6">
        <v-card class="pa-4 rounded-xl" :color="bal.balanceOwed > 0 ? 'amber lighten-5' : 'teal lighten-5'" outlined>
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="caption grey--text text--darken-2 font-weight-bold">{{ bal.packagingName }}</span>
              <div class="text-h5 font-weight-black mt-1" :class="bal.balanceOwed > 0 ? 'amber--text text--darken-4' : 'teal--text text--darken-4'">
                {{ numberWithCommas(bal.balanceOwed) }} ໜ່ວຍ
              </div>
              <span class="caption font-weight-bold" :class="bal.balanceOwed > 0 ? 'amber--text text--darken-3' : 'teal--text text--darken-3'">
                {{ bal.balanceOwed > 0 ? '⚠️ ລູກຄ້າຕິດໜີ້ລັງ-ແກ້ວ (Client Owes Packaging)' : '✅ ບໍ່ມີໜີ້ຄ້າງ (Settled)' }}
              </span>
            </div>
            <v-avatar :color="bal.balanceOwed > 0 ? 'amber darken-2' : 'teal darken-2'" size="44">
              <v-icon color="white" small>mdi-cube-outline</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Client Debt Summary Table (If All Clients View) -->
    <v-card v-if="selectedClientId === 'all' && allClientsBalances.length > 0" outlined class="rounded-xl overflow-hidden mb-4 elevation-1">
      <v-card-title class="pa-4 grey lighten-4 d-flex justify-space-between align-center">
        <div class="subtitle-1 font-weight-bold">
          <v-icon color="primary" left small>mdi-format-list-numbered</v-icon>
          ສະຫຼຸບຍອດໜີ້ຄ້າງບັນຈຸພັນແຕ່ລະລູກຄ້າ (Clients Outstanding Packaging Debt Summary)
        </div>
        <v-chip small color="primary" outlined class="font-weight-bold">
          {{ allClientsBalances.length }} ລາຍການ
        </v-chip>
      </v-card-title>

      <v-data-table
        :headers="clientSummaryHeaders"
        :items="allClientsBalances"
        :loading="isLoading"
        dense
        class="elevation-0"
      >
        <template v-slot:[`item.clientName`]="{ item }">
          <span class="font-weight-bold primary--text">{{ item.clientName }}</span>
          <span v-if="item.clientCompany" class="caption grey--text"> ({{ item.clientCompany }})</span>
        </template>

        <template v-slot:[`item.clientPhone`]="{ item }">
          <span class="caption">{{ item.clientPhone || '-' }}</span>
        </template>

        <template v-slot:[`item.balanceOwed`]="{ item }">
          <v-chip small :color="item.balanceOwed > 0 ? 'amber darken-3' : 'teal darken-2'" dark class="font-weight-black">
            {{ numberWithCommas(item.balanceOwed) }} ໜ່ວຍ
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
          <v-btn small text color="primary" @click="selectClient(item.clientId)" class="rounded-lg">
            <v-icon left x-small>mdi-eye</v-icon> ເບິ່ງລາຍລະອຽດ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Transaction Movement Ledger Table -->
    <v-card outlined class="rounded-xl overflow-hidden elevation-1">
      <v-card-title class="pa-4 grey lighten-4 d-flex justify-space-between align-center">
        <div class="subtitle-1 font-weight-bold">
          <v-icon color="primary" left small>mdi-history</v-icon>
          ປະຫວັດການເຄື່ອນໄຫວບັນຈຸພັນ (Packaging Movement History)
        </div>
        <div class="caption grey--text">
          ລວມ {{ ledgerItems.length }} ທຸລະກຳ
        </div>
      </v-card-title>

      <v-data-table
        :headers="tableHeaders"
        :items="ledgerItems"
        :loading="isLoading"
        dense
        class="elevation-0"
      >
        <template v-slot:[`item.createdAt`]="{ item }">
          <span class="caption font-weight-medium">{{ formatDateTime(item.createdAt) }}</span>
        </template>

        <template v-slot:[`item.client.name`]="{ item }">
          <span class="font-weight-bold">{{ item.client ? item.client.name : '-' }}</span>
        </template>

        <template v-slot:[`item.transactionType`]="{ item }">
          <v-chip x-small :color="getTransactionTypeColor(item.transactionType)" dark class="font-weight-bold">
            {{ getTransactionTypeLabel(item.transactionType) }}
          </v-chip>
        </template>

        <template v-slot:[`item.qtyChange`]="{ item }">
          <span :class="item.qtyChange > 0 ? 'error--text font-weight-black' : 'success--text font-weight-black'">
            {{ item.qtyChange > 0 ? `+${item.qtyChange}` : item.qtyChange }}
          </span>
        </template>

        <template v-slot:[`item.balanceAfter`]="{ item }">
          <span class="font-weight-black primary--text">
            {{ numberWithCommas(item.balanceAfter) }}
          </span>
        </template>

        <template v-slot:[`item.depositAmount`]="{ item }">
          <span v-if="item.depositAmount > 0" class="caption grey--text">
            {{ numberWithCommas(item.depositAmount) }} LAK
          </span>
          <span v-else class="caption grey--text">-</span>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { printCustomerPackagingStatement } from '~/common/customerPackagingPrintTemplate'
import ExcelJS from 'exceljs'

export default {
  name: 'CustomerPackagingReport',
  layout: 'default',
  middleware: 'auths',
  data() {
    return {
      selectedClientId: 'all',
      clientList: [],
      currentBalances: [],
      allClientsBalances: [],
      ledgerItems: [],
      startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      isLoading: false,
      clientSummaryHeaders: [
        { text: 'ຊື່ລູກຄ້າ / ຮ້ານ', value: 'clientName' },
        { text: 'ເບີໂທ', value: 'clientPhone', width: '130px' },
        { text: 'ບັນຈຸພັນ', value: 'packagingName' },
        { text: 'ຍອດໜີ້ຄ້າງ (Balance Owed)', value: 'balanceOwed', align: 'center', width: '160px' },
        { text: 'ຈັດການ', value: 'actions', align: 'center', width: '140px', sortable: false }
      ],
      tableHeaders: [
        { text: 'ວັນທີ/ເວລາ', value: 'createdAt', width: '150px' },
        { text: 'ລູກຄ້າ', value: 'client.name', width: '180px' },
        { text: 'ປະເພດທຸລະກຳ', value: 'transactionType', width: '160px' },
        { text: 'ບັນຈຸພັນ', value: 'packagingProduct.pro_name' },
        { text: 'ຈຳນວນປ່ຽນແປງ', value: 'qtyChange', align: 'center', width: '130px' },
        { text: 'ຍອດໜີ້ສະສົມ', value: 'balanceAfter', align: 'center', width: '130px' },
        { text: 'ຄ່າມັດຈຳ', value: 'depositAmount', align: 'end', width: '130px' },
        { text: 'ໝາຍເຫດ', value: 'notes' }
      ]
    }
  },
  computed: {
    totalCratesOwed() {
      const target = this.selectedClientId === 'all' ? this.allClientsBalances : this.currentBalances
      return target
        .filter(b => b.packagingName && b.packagingName.includes('ລັງ') && (b.balanceOwed > 0))
        .reduce((sum, b) => sum + (b.balanceOwed || 0), 0)
    },
    totalBottlesOwed() {
      const target = this.selectedClientId === 'all' ? this.allClientsBalances : this.currentBalances
      return target
        .filter(b => b.packagingName && b.packagingName.includes('ແກ້ວ') && (b.balanceOwed > 0))
        .reduce((sum, b) => sum + (b.balanceOwed || 0), 0)
    },
    debtorClientsCount() {
      if (this.selectedClientId !== 'all') {
        return this.currentBalances.some(b => b.balanceOwed > 0) ? 1 : 0
      }
      const uniqueClients = new Set(
        this.allClientsBalances
          .filter(b => b.balanceOwed > 0)
          .map(b => b.clientId)
      )
      return uniqueClients.size
    }
  },
  async created() {
    await this.loadClients()
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
        case 'DELIVERED_OUT': return 'amber darken-3'
        case 'RETURNED_IN': return 'teal darken-2'
        case 'PAID_DEPOSIT': return 'blue darken-2'
        case 'REFUNDED_DEPOSIT': return 'purple darken-2'
        case 'WRITE_OFF': return 'error'
        default: return 'grey'
      }
    },
    getTransactionTypeLabel(type) {
      switch (type) {
        case 'DELIVERED_OUT': return 'ສົ່ງອອກ (ຕິດໜີ້)'
        case 'RETURNED_IN': return 'ຮັບຄືນ (ຕັດໜີ້)'
        case 'PAID_DEPOSIT': return 'ຈ່າຍມັດຈຳ'
        case 'REFUNDED_DEPOSIT': return 'ຄືນມັດຈຳ'
        case 'WRITE_OFF': return 'ຕັດສູນ'
        default: return type
      }
    },
    async loadClients() {
      try {
        const res = await this.$axios.get('/api/client/find')
        const clients = (Array.isArray(res.data) ? res.data : (res.data?.rows || [])).map(c => ({
          id: c.id,
          name: c.name,
          company: c.company,
          telephone: c.telephone,
          displayName: `${c.name || ''} ${c.company ? '- ' + c.company : ''} (${c.telephone || 'ບໍ່ມີເບີ'})`
        }))
        this.clientList = [
          { id: 'all', displayName: '👥 ລູກຄ້າທັງໝົດ (All Customers Summary)' },
          ...clients
        ]
      } catch (err) {
        console.error('Failed to load clients:', err)
      }
    },
    selectClient(clientId) {
      this.selectedClientId = clientId
      this.loadData()
    },
    async loadData() {
      this.isLoading = true
      try {
        if (!this.selectedClientId || this.selectedClientId === 'all') {
          // Load all clients balances and ledger
          const [summaryRes, ledgerRes] = await Promise.all([
            this.$axios.get('/api/packaging/customer/summary'),
            this.$axios.get(`/api/packaging/customer/ledger?startDate=${this.startDate}&endDate=${this.endDate}`)
          ])
          this.allClientsBalances = summaryRes.data || []
          this.currentBalances = summaryRes.data || []
          this.ledgerItems = ledgerRes.data || []
        } else {
          // Load specific client balance and ledger
          const [balRes, ledgerRes] = await Promise.all([
            this.$axios.get(`/api/packaging/customer/balance/${this.selectedClientId}`),
            this.$axios.get(`/api/packaging/customer/ledger/${this.selectedClientId}?startDate=${this.startDate}&endDate=${this.endDate}`)
          ])
          this.currentBalances = balRes.data || []
          this.ledgerItems = ledgerRes.data || []
        }
      } catch (err) {
        console.error('Failed to load customer packaging data:', err)
      } finally {
        this.isLoading = false
      }
    },
    loadLedger() {
      return this.loadData()
    },
    printStatement() {
      const isAll = !this.selectedClientId || this.selectedClientId === 'all'
      const client = isAll ? null : this.clientList.find(c => c.id === this.selectedClientId)

      const company = this.$store?.state?.company || {
        name: 'ຕົວແທນຈຳໜ່າຍ ເບຍລາວ / Beerlao Agency',
        tel: '020-XXXXXXXX',
        address: 'ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ'
      }

      const user = this.$store?.state?.auth?.user || {
        name: this.$auth?.user?.name || 'Admin'
      }

      printCustomerPackagingStatement({
        isAllClients: isAll,
        selectedClient: client,
        currentBalances: this.currentBalances,
        allClientsBalances: this.allClientsBalances,
        ledgerItems: this.ledgerItems,
        startDate: this.startDate,
        endDate: this.endDate,
        companyData: company,
        user: user,
        totalCratesOwed: this.totalCratesOwed,
        totalBottlesOwed: this.totalBottlesOwed,
        debtorClientsCount: this.debtorClientsCount
      })
    },
    async exportToExcel() {
      try {
        const workbook = new ExcelJS.Workbook()
        const worksheet = workbook.addWorksheet('Packaging Debt Statement')

        const isAll = !this.selectedClientId || this.selectedClientId === 'all'
        const client = isAll ? null : this.clientList.find(c => c.id === this.selectedClientId)
        const clientName = client ? client.displayName : 'ທັງໝົດ (All)'

        // Title Rows
        const titleRow = worksheet.addRow(['ລາຍງານໜີ້ສິນບັນຈຸພັນລູກຄ້າ / Customer Packaging Debt Statement'])
        titleRow.font = { size: 14, bold: true, color: { argb: 'FF0F766E' } }
        worksheet.addRow([`ລູກຄ້າ: ${clientName}`, `ແຕ່ວັນທີ: ${this.startDate}`, `ຫາວັນທີ: ${this.endDate}`])
        worksheet.addRow([])

        // Table Headers
        const headerRow = worksheet.addRow([
          'ລ/ດ (No)',
          'ວັນທີ/ເວລາ (Date)',
          'ລູກຄ້າ (Client)',
          'ປະເພດທຸລະກຳ (Type)',
          'ບັນຈຸພັນ (Packaging Item)',
          'ຈຳນວນປ່ຽນແປງ (Qty Change)',
          'ຍອດໜີ້ສະສົມ (Running Balance)',
          'ຄ່າມັດຈຳ (Deposit LAK)',
          'ໝາຍເຫດ (Notes)'
        ])

        headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } }
        headerRow.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF0F766E' }
        }

        // Add Data Rows
        this.ledgerItems.forEach((item, idx) => {
          worksheet.addRow([
            idx + 1,
            this.formatDateTime(item.createdAt),
            item.client?.name || '-',
            this.getTransactionTypeLabel(item.transactionType),
            item.packagingProduct?.pro_name || '-',
            item.qtyChange > 0 ? `+${item.qtyChange}` : item.qtyChange,
            item.balanceAfter,
            Number(item.depositAmount) || 0,
            item.notes || '-'
          ])
        })

        // Auto column width
        worksheet.columns.forEach(column => {
          let maxLength = 0
          column.eachCell({ includeEmpty: true }, cell => {
            const columnLength = cell.value ? cell.value.toString().length : 10
            if (columnLength > maxLength) {
              maxLength = columnLength
            }
          })
          column.width = Math.min(Math.max(maxLength + 3, 12), 40)
        })

        const buffer = await workbook.xlsx.writeBuffer()
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `Packaging_Debt_Statement_${this.startDate}_${this.endDate}.xlsx`
        a.click()
        window.URL.revokeObjectURL(url)
      } catch (err) {
        console.error('Excel export error:', err)
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.subtitle-1,
.subtitle-2,
::v-deep .subtitle-1,
::v-deep .subtitle-2 {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.caption,
.text-caption,
::v-deep .caption,
::v-deep .text-caption {
  font-size: 0.75rem !important;
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

@media print {
  .v-btn,
  .v-text-field,
  .v-autocomplete,
  header {
    display: none !important;
  }
}
</style>
