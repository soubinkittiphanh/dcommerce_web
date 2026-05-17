<template>
  <div class="po-container">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text class="text-center pa-4">
          <v-progress-circular :size="40" :width="4" color="white" indeterminate class="mb-2" />
          <div class="text-body-1 font-weight-bold">ກຳລັງໂຫຼດ...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="guidelineDialog" max-width="800">
      <v-card rounded="lg">
        <v-toolbar color="primary" dark flat dense>
          <v-toolbar-title class="text-body-1 font-weight-bold">ຄູ່ມືການນຳໃຊ້</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon small @click="guidelineDialog = false"><v-icon small>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <youtube-player youtube-link="W6KiQWtiqBM" @close-dialog="guidelineDialog = false" />
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <PurchasingFormCRUD @reload="loadTxn(); dialog = false" :key="apFormKey" :is-update="isEdit"
        :headerId="selectedId" @close-dialog="dialog = false" />
    </v-dialog>

    <v-dialog v-model="receivingDialog" width="90%" scrollable>
      <ReceivingFormCRUD :POTransaction="currentPO" sourceAPLID="PO" @close="triggerDialog" :key="apFormKey"
        @close-dialog="receivingDialog = false" @reload="loadTxn" />
    </v-dialog>

    <!-- Header Section -->
    <header class="report-header pb-2">
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2" size="24">mdi-clipboard-list-outline</v-icon>
          <div>
            <h1 class="text-h5 font-weight-black primary--text mb-0">ລາຍການບິນສັ່ງຊື້</h1>
            <span class="text-caption grey--text text--darken-1">ຈັດການ ແລະ ຕິດຕາມໃບສັ່ງຊື້ສິນຄ້າ</span>
          </div>
          <v-btn text x-small color="primary" class="ml-2 font-weight-bold" @click="guidelineDialog = true">
            <v-icon left x-small>mdi-help-circle</v-icon>ຄູ່ມື
          </v-btn>
        </div>
        <div class="d-flex align-center">
          <v-btn color="success" dark small depressed @click="triggerDialog" class="action-btn px-4 mr-2">
            <v-icon left small>mdi-plus</v-icon>ສ້າງໃບໃໝ່
          </v-btn>
          <v-btn color="primary" small depressed @click="loadTxn" :loading="isloading" class="action-btn px-2">
            <v-icon small>mdi-refresh</v-icon>
          </v-btn>
        </div>
      </div>
    </header>

    <!-- Overview Statistics -->
    <v-row class="mb-3" dense>
      <!-- Total Orders Summary -->
      <v-col cols="12" md="3">
        <v-card class="stat-card main-stat" color="primary" dark flat>
          <div class="pa-3 d-flex align-center justify-space-between">
            <div>
              <span class="text-caption opacity-80">ໃບສັ່ງຊື້ທັງໝົດ</span>
              <div class="text-h5 font-weight-black">{{ totalOrders }}</div>
              <div class="text-caption font-weight-bold">{{ formatCurrency(totalOrderValue) }}</div>
            </div>
            <v-avatar color="rgba(255,255,255,0.2)" size="40">
              <v-icon color="white" small>mdi-file-document</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- Status Quick Stats -->
      <v-col v-for="statusStat in statusStatistics.slice(0, 3)" :key="statusStat.status" cols="12" sm="4" md="3">
        <v-card outlined class="stat-card status-card" @click="filterByStatus(statusStat.status)">
          <div class="pa-2 px-3">
            <div class="d-flex justify-space-between align-center mb-1">
              <div class="d-flex align-center">
                <v-icon :color="statusStat.color" size="16" class="mr-1">{{ statusStat.icon }}</v-icon>
                <span class="text-caption font-weight-bold grey--text text--darken-1">{{ statusStat.label }}</span>
              </div>
              <span class="text-caption font-weight-black" :style="{ color: getStatusColor(statusStat.status) }">{{ statusStat.percentage.toFixed(1) }}%</span>
            </div>
            <div class="font-weight-black text-body-2" :class="statusStat.color + '--text'">{{ formatNumber(statusStat.amount) }}</div>
            <v-progress-linear :value="statusStat.percentage" :color="statusStat.color" height="3" rounded class="mt-1"></v-progress-linear>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-3" dense>
      <!-- Timeline Analysis -->
      <v-col cols="12" md="7">
        <v-card outlined class="compact-card">
          <div class="d-flex align-center pa-2 border-bottom">
            <v-icon x-small color="primary" class="mr-1">mdi-chart-timeline-variant</v-icon>
            <span class="text-caption font-weight-bold">ວິເຄາະໄລຍະເວລາ</span>
            <v-spacer></v-spacer>
            <div class="d-flex">
              <v-btn x-small text color="orange" @click="filterByStatus('Pending Approval')">ລໍອະນຸມັດ</v-btn>
              <v-btn x-small text color="green" @click="filterByStatus('Approved')">ອະນຸມັດ</v-btn>
              <v-btn x-small text color="grey" @click="clearStatusFilter">ທັງໝົດ</v-btn>
            </div>
          </div>
          <div class="pa-2">
            <v-row dense>
              <v-col cols="4" class="text-center">
                <div class="text-body-2 font-weight-black orange--text">{{ pendingOrdersCount }}</div>
                <div class="text-tiny grey--text">ລໍອະນຸມັດ</div>
                <v-progress-linear :value="pendingOrdersPercentage" color="orange" height="2" class="mt-1"></v-progress-linear>
              </v-col>
              <v-col cols="4" class="text-center border-left">
                <div class="text-body-2 font-weight-black green--text">{{ approvedOrdersCount }}</div>
                <div class="text-tiny grey--text">ອະນຸມັດແລ້ວ</div>
                <v-progress-linear :value="approvedOrdersPercentage" color="green" height="2" class="mt-1"></v-progress-linear>
              </v-col>
              <v-col cols="4" class="text-center border-left">
                <div class="text-body-2 font-weight-black success--text">{{ receivedOrdersCount }}</div>
                <div class="text-tiny grey--text">ຮັບເຄື່ອງແລ້ວ</div>
                <v-progress-linear :value="receivedOrdersPercentage" color="success" height="2" class="mt-1"></v-progress-linear>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>

      <!-- Currency Summary -->
      <v-col cols="12" md="5">
        <v-card outlined class="compact-card">
          <div class="d-flex align-center pa-2 border-bottom">
            <v-icon x-small color="primary" class="mr-1">mdi-currency-usd-circle</v-icon>
            <span class="text-caption font-weight-bold">ສະຫຼຸບສະກຸນເງິນ</span>
          </div>
          <v-simple-table dense class="currency-table-compact">
            <tbody>
              <tr v-for="currency in purchaseCurrencyGrouping.slice(0, 2)" :key="currency.code">
                <td><span class="text-tiny font-weight-black primary--text">{{ currency.code }}</span></td>
                <td class="text-center text-tiny">{{ currency.count }} ບິນ</td>
                <td class="text-right text-tiny font-weight-black">{{ numberWithCommas(currency.amount) }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters Section -->
    <v-card class="filter-card pa-2 mb-3" outlined>
      <v-row align="center" dense>
        <v-col cols="12" md="2">
          <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ" prepend-inner-icon="mdi-calendar" readonly 
                v-bind="attrs" v-on="on" outlined dense hide-details class="compact-input"></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false" color="primary" dense></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="2">
          <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ" prepend-inner-icon="mdi-calendar" readonly 
                v-bind="attrs" v-on="on" outlined dense hide-details class="compact-input"></v-text-field>
            </template>
            <v-date-picker v-model="date2" no-title @input="menu2 = false" color="primary" dense></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="2">
          <v-select v-model="selectedStatusFilter" :items="statusFilterOptions" item-text="label" item-value="value"
            label="ສະຖານະ" clearable outlined dense hide-details class="compact-input"></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="search" label="ຄົ້ນຫາບິນ, ຜູ້ຂາຍ..." prepend-inner-icon="mdi-magnify" 
            clearable outlined dense hide-details class="compact-input"></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="d-flex">
          <v-btn color="success" outlined @click="printPurchaseReport" class="mr-1 px-2" small height="40">
            <v-icon small>mdi-printer</v-icon>
          </v-btn>
          <v-btn color="primary" block @click="loadTxn" :loading="isloading" class="font-weight-bold" small height="40">
            ດຶງຂໍ້ມູນ
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- Data Table Section -->
    <v-card class="table-card" outlined>
      <v-data-table :headers="enhancedHeaders" :search="search" :items="filteredPurchaseOrders" :loading="isloading"
        class="compact-table" :items-per-page="10" dense
        :footer-props="{ 'items-per-page-options': [10, 20, 50, -1] }">
        
        <template v-slot:[`item.id`]="{ item }">
          <span class="text-caption font-weight-black primary--text">#{{ item.id }}</span>
        </template>

        <template v-slot:[`item.bookingDate`]="{ item }">
          <span class="text-tiny grey--text text--darken-3">{{ item.bookingDate }}</span>
        </template>

        <template v-slot:[`item.status`]="{ item }">
          <v-chip x-small :color="getStatusColor(item.status)" dark class="font-weight-black">
            {{ getStatusLabel(item.status) }}
          </v-chip>
        </template>

        <template v-slot:[`item.currency.code`]="{ item }">
          <span class="text-tiny font-weight-black grey--text">{{ item.currency?.code || 'LAK' }}</span>
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <span class="text-caption font-weight-black success--text">{{ numberWithCommas(item.total) }}</span>
        </template>

        <template v-slot:[`item.function`]="{ item }">
          <div class="d-flex justify-center">
            <v-btn icon x-small color="primary" @click="editItem(item)"><v-icon x-small>mdi-pencil</v-icon></v-btn>
            <v-btn icon x-small color="info" @click="printPurchaseOrder(item)" :loading="printingId === item.id"><v-icon x-small>mdi-printer</v-icon></v-btn>
            <v-btn icon x-small color="orange" @click="viewItem(item)"><v-icon x-small>mdi-eye</v-icon></v-btn>
          </div>
        </template>

        <template v-slot:[`item.postReceiving`]="{ item }">
          <v-btn x-small depressed color="success" :disabled="!canReceiveGoods(item)" @click="receive(item)" class="font-weight-bold px-2">
            ຮັບເຄື່ອງ
          </v-btn>
        </template>

        <template v-slot:no-data>
          <div class="text-center pa-6">
            <v-icon size="48" color="grey lighten-3">mdi-file-document-outline</v-icon>
            <div class="text-caption grey--text mt-2">ບໍ່ພົບຂໍ້ມູນ</div>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import PurchasingFormCRUD from '~/components/PurchasingFormCRUD.vue'
import ReceivingFormCRUD from '~/components/ReceivingFormCRUD.vue'
import { swalError2, getFirstDayOfMonth, getFormatNum } from '~/common'

export default {
  name: 'PurchaseOrdersDashboard',
  components: {
    PurchasingFormCRUD,
    ReceivingFormCRUD
  },
  data() {
    return {
      userId: "",
      search: "",
      isEdit: false,
      dialog: false,
      receivingDialog: false,
      guidelineDialog: false,
      apFormKey: 1,
      isloading: false,
      printingId: null,
      menu1: false,
      menu2: false,
      txnList: [],
      selectedId: '',
      selectedStatusFilter: null,
      enhancedHeaders: [
        { text: 'ເລກບິນ', value: 'id', align: 'center', sortable: true, width: '80px' },
        { text: 'ວັນທີ', value: 'bookingDate', align: 'center', sortable: true, width: '100px' },
        { text: 'ຜູ້ຂາຍ', value: 'vendor.company', align: 'left', width: '150px' },
        { text: 'ເນື້ອໃນ', value: 'notes', align: 'left', width: '120px' },
        { text: 'ສະກຸນ', value: 'currency.code', align: 'center', width: '70px' },
        { text: 'ຍອດລວມ', value: 'total', align: 'right', sortable: true, width: '100px' },
        { text: 'ສະຖານະ', value: 'status', align: 'center', width: '100px' },
        { text: 'ຈັດການ', value: 'function', align: 'center', sortable: false, width: '100px' },
        { text: 'ຮັບເຄື່ອງ', value: 'postReceiving', align: 'center', sortable: false, width: '100px' },
      ],
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
      dateFormatted2: this.formatDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)),
    }
  },
  computed: {
    currentPO() { return this.txnList.find(el => el.id == this.selectedId) },
    filteredPurchaseOrders() {
      if (!this.selectedStatusFilter) return this.txnList
      return this.txnList.filter(item => item.status === this.selectedStatusFilter)
    },
    totalOrders() { return this.txnList.length },
    totalOrderValue() { return this.txnList.reduce((sum, order) => sum + (order.total || 0), 0) },
    statusStatistics() {
      const stats = {}; let totalAmount = 0
      this.txnList.forEach(item => {
        const status = item.status || 'Draft'; const amount = item.total || 0
        if (!stats[status]) { stats[status] = { status, label: this.getStatusLabel(status), amount: 0, count: 0, color: this.getStatusColor(status), icon: this.getStatusIcon(status) } }
        stats[status].amount += amount; stats[status].count += 1; totalAmount += amount
      })
      Object.values(stats).forEach(stat => { stat.percentage = totalAmount > 0 ? (stat.amount / totalAmount) * 100 : 0 })
      return Object.values(stats).sort((a, b) => b.amount - a.amount)
    },
    statusFilterOptions() {
      const options = [{ label: 'ທັງໝົດ', value: null }]
      const statuses = [...new Set(this.txnList.map(item => item.status).filter(Boolean))]
      statuses.forEach(status => { options.push({ label: this.getStatusLabel(status), value: status }) })
      return options
    },
    purchaseCurrencyGrouping() {
      const sumByCurrency = {}; let totalAmount = 0
      this.txnList.forEach(transaction => {
        const { total, currency } = transaction; const currencyCode = currency?.code || 'LAK'
        if (!sumByCurrency[currencyCode]) { sumByCurrency[currencyCode] = { code: currencyCode, amount: 0, count: 0 } }
        sumByCurrency[currencyCode].amount += total || 0; sumByCurrency[currencyCode].count += 1; totalAmount += total || 0
      })
      Object.values(sumByCurrency).forEach(currency => { currency.percentage = totalAmount > 0 ? (currency.amount / totalAmount) * 100 : 0 })
      return Object.values(sumByCurrency).sort((a, b) => b.amount - a.amount)
    },
    pendingOrdersCount() { return this.txnList.filter(item => item.status === 'Pending Approval').length },
    approvedOrdersCount() { return this.txnList.filter(item => item.status === 'Approved').length },
    receivedOrdersCount() { return this.txnList.filter(item => item.status === 'Fully Received' || item.status === 'Partially Received').length },
    pendingOrdersPercentage() { return this.totalOrders > 0 ? (this.pendingOrdersCount / this.totalOrders) * 100 : 0 },
    approvedOrdersPercentage() { return this.totalOrders > 0 ? (this.approvedOrdersCount / this.totalOrders) * 100 : 0 },
    receivedOrdersPercentage() { return this.totalOrders > 0 ? (this.receivedOrdersCount / this.totalOrders) * 100 : 0 },
    localCurrencyCode() { return this.$store.getters.findAllCurrency?.find(c => c.isLocalCCY)?.code || 'LAK' }
  },
  watch: {
    date() { this.dateFormatted = this.formatDate(this.date); this.loadTxn() },
    date2() { this.dateFormatted2 = this.formatDate(this.date2); this.loadTxn() },
  },
  mounted() { this.loadTxn() },
  methods: {
    numberWithCommas(value) { return getFormatNum(value) },
    formatNumber(val) { return new Intl.NumberFormat().format(val || 0) },
    formatCurrency(amount) { return new Intl.NumberFormat('lo-LA', { style: 'currency', currency: 'LAK', minimumFractionDigits: 0 }).format(amount || 0) },
    triggerDialog() { this.apFormKey += 1; this.selectedId = null; this.isEdit = false; this.dialog = true },
    editItem(item) { this.selectedId = item.id; this.isEdit = true; this.apFormKey += 1; this.dialog = true },
    viewItem(item) { this.selectedId = item.id; this.isEdit = true; this.apFormKey += 1; this.dialog = true },
    receive(item) { this.selectedId = item.id; this.isEdit = true; this.apFormKey += 1; this.receivingDialog = true },
    async printPurchaseOrder(item) {
      this.printingId = item.id
      try {
        const response = await this.$axios.get(`/api/purchasing/find/${item.id}`)
        this.createAndPrintPurchaseOrder(response.data)
      } catch (error) { swalError2(this.$swal, 'Error', 'Failed to print') } finally { this.printingId = null }
    },
    createAndPrintPurchaseOrder(poData) {
      const poHTML = this.generatePurchaseOrderHTML(poData); const printWindow = window.open('', '_blank', 'width=800,height=600')
      if (!printWindow) return; printWindow.document.open(); printWindow.document.write(poHTML); printWindow.document.close()
      printWindow.onload = () => { setTimeout(() => { try { printWindow.print(); setTimeout(() => printWindow.close(), 100) } catch (e) { printWindow.close() } }, 500) }
    },
    generatePurchaseOrderHTML(header) {
      const fmt = (val) => new Intl.NumberFormat().format(val || 0)
      const linesHTML = header.lines?.map((line, index) => `<tr><td>${index + 1}</td><td>${line.product?.pro_name || ''}</td><td>${fmt(line.quantity)}</td><td>${line.unit?.name || ''}</td><td>${fmt(line.unitPrice)}</td><td>${fmt(line.total)}</td></tr>`).join('') || ''
      return `<html><head><style>body{font-family:'noto sans lao',sans-serif;margin:20px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;font-size:12px}th{background:#f5f5f5}.header{text-align:center}</style></head><body><div class="header"><h1>PO #${header.id}</h1></div><table><thead><tr><th>No.</th><th>Product</th><th>Qty</th><th>Unit</th><th>Price</th><th>Total</th></tr></thead><tbody>${linesHTML}</tbody></table><div style="text-align:right"><h3>Total: ${fmt(header.total)} ${header.currency?.code || 'LAK'}</h3></div></body></html>`
    },
    printPurchaseReport() {
      const reportHTML = this.generatePurchaseReportHTML(); const printWindow = window.open('', '_blank', 'width=800,height=600')
      if (!printWindow) return; printWindow.document.open(); printWindow.document.write(reportHTML); printWindow.document.close()
      printWindow.onload = () => { setTimeout(() => { try { printWindow.print(); setTimeout(() => printWindow.close(), 100) } catch (e) { printWindow.close() } }, 500) }
    },
    generatePurchaseReportHTML() {
      const fmt = (val) => new Intl.NumberFormat().format(val || 0)
      const stHTML = this.statusStatistics.map(s => `<tr><td>${s.label}</td><td align="center">${s.count}</td><td align="right">${fmt(s.amount)}</td><td align="center">${s.percentage.toFixed(1)}%</td></tr>`).join('')
      return `<html><head><style>body{font-family:'noto sans lao',sans-serif;margin:20px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;font-size:12px}th{background:#f5f5f5}.header{text-align:center}</style></head><body><div class="header"><h1>Purchase Summary</h1><p>${this.dateFormatted} - ${this.dateFormatted2}</p></div><table><thead><tr><th>Status</th><th>Count</th><th>Amount</th><th>%</th></tr></thead><tbody>${stHTML}</tbody></table></body></html>`
    },
    filterByStatus(status) { this.selectedStatusFilter = (this.selectedStatusFilter === status) ? null : status },
    clearStatusFilter() { this.selectedStatusFilter = null },
    getStatusLabel(status) {
      const labels = { 'Draft': 'ຮ່າງ', 'Pending Approval': 'ລໍອະນຸມັດ', 'Approved': 'ອະນຸມັດ', 'Sent to Supplier': 'ສົ່ງຜູ້ຂາຍ', 'Partially Received': 'ຮັບບາງສ່ວນ', 'Fully Received': 'ຮັບຄົບ', 'Cancelled': 'ຍົກເລີກ' }
      return labels[status] || status
    },
    getStatusColor(status) {
      const colors = { 'Draft': 'grey', 'Pending Approval': 'orange', 'Approved': 'green', 'Sent to Supplier': 'blue', 'Partially Received': 'purple', 'Fully Received': 'success', 'Cancelled': 'error' }
      return colors[status] || 'grey'
    },
    getStatusIcon(status) {
      const icons = { 'Draft': 'mdi-file-edit', 'Pending Approval': 'mdi-clock', 'Approved': 'mdi-check-circle', 'Sent to Supplier': 'mdi-truck', 'Partially Received': 'mdi-package-down', 'Fully Received': 'mdi-package-check', 'Cancelled': 'mdi-cancel' }
      return icons[status] || 'mdi-help'
    },
    canReceiveGoods(item) { return ['Approved', 'Sent to Supplier', 'Partially Received'].includes(item.status) },
    formatDate(date) { if (!date) return null; const [y, m, d] = this.formatDateToISO(date).split('-'); return `${m}/${d}/${y}` },
    parseDate(date) { if (!date) return null; const [m, d, y] = date.split('/'); return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}` },
    formatDateToISO(date) { if (!(date instanceof Date)) date = new Date(date); return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}` },
    async loadTxn() {
      this.isloading = true
      try {
        const response = await this.$axios.get("/api/purchasing/findByDate", { params: { date: { startDate: this.date, endDate: this.date2 } } })
        this.txnList = response.data.map(i => ({ ...i, bookingDate: i.bookingDate.split('T')[0] }))
      } catch (error) { swalError2(this.$swal, 'Error', 'Failed to load') } finally { this.isloading = false }
    }
  }
}
</script>

<style scoped>
.po-container {
  font-family: 'noto sans lao', sans-serif !important;
  background-color: #fafafa;
  min-height: 100vh;
  padding: 8px;
}

.po-container * { font-family: 'noto sans lao', sans-serif !important; }

.report-header { border-bottom: 1px solid #eee; margin-bottom: 8px; }
.action-btn { text-transform: none; font-weight: 700; border-radius: 4px; }

.stat-card { border-radius: 8px; overflow: hidden; }
.main-stat { background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-primary-darken1) 100%); }

.compact-card { border-radius: 8px; background: white; }
.border-bottom { border-bottom: 1px solid #eee; }
.border-left { border-left: 1px solid #eee; }
.text-tiny { font-size: 0.65rem; }

.currency-table-compact td { padding: 4px 12px !important; }

.filter-card { border-radius: 8px; background: white; }
.compact-input>>>.v-input__slot { min-height: 36px !important; font-size: 0.8rem; }
.compact-input>>>.v-label { font-size: 0.8rem; top: 8px !important; }

.table-card { border-radius: 8px; overflow: hidden; }
.compact-table>>>thead th { background-color: #f5f5f5 !important; font-weight: 700 !important; font-size: 0.75rem; padding: 8px 12px !important; height: 40px !important; }
.compact-table>>>tbody td { padding: 8px 12px !important; height: 40px !important; }

.opacity-80 { opacity: 0.8; }
</style>