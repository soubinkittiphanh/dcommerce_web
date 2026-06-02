<template>
  <div class="ap-settlement-container notosans-lao">
    <!-- Header Section -->
    <div class="d-flex align-center mb-6">
      <v-avatar color="primary lighten-5" rounded size="48" class="mr-4">
        <v-icon color="primary" large>mdi-cash-register</v-icon>
      </v-avatar>
      <div>
        <h1 class="text-h5 font-weight-bold mb-1 primary--text">ລະບົບຈັດການການຮັບຊຳລະ</h1>
        <p class="text-caption grey--text text--darken-1 mb-0">AR Receipt Settlement & Payment Management</p>
      </div>
      <v-spacer />
      <v-btn color="grey lighten-4" text @click="refreshData" :loading="loading" class="mr-2 rounded-lg text--secondary font-weight-bold">
        <v-icon left>mdi-refresh</v-icon>ໂຫຼດໃໝ່
      </v-btn>
      <v-btn color="success" outlined @click="exportToExcel" :loading="exporting" class="mr-2 rounded-lg font-weight-bold">
        <v-icon left>mdi-file-excel</v-icon>ສົ່ງອອກ Excel
      </v-btn>
      <v-btn color="primary" depressed large @click="openCreateDialog" class="rounded-lg font-weight-bold">
        <v-icon left>mdi-plus</v-icon>ເພີ່ມໃໝ່
      </v-btn>
    </div>

    <!-- Summary Cards -->
    <v-row class="mb-6" dense>
      <v-col cols="12" md="3">
        <v-card class="summary-card total-ap" elevation="1">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="primary lighten-5" rounded size="48">
                <v-icon color="primary">mdi-wallet-plus</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">ຮັບຊຳລະທັງໝົດ</div>
                <div class="font-weight-bold uppercase">{{ formatCurrency(summaryTotals.totalReceived) }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="summary-card total-paid" elevation="1">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="success lighten-5" rounded size="48">
                <v-icon color="success">mdi-cash</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">ເງິນສົດ (Cash)</div>
                <div class="font-weight-bold success--text uppercase">{{ formatCurrency(summaryTotals.totalCash) }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="summary-card outstanding" elevation="1">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="warning lighten-5" rounded size="48">
                <v-icon color="warning">mdi-bank-transfer</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">ໂອນ (Transfer)</div>
                <div class="font-weight-bold warning--text uppercase">{{ formatCurrency(summaryTotals.totalBankTransfer) }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="summary-card overdue" elevation="1">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="error lighten-5" rounded size="48">
                <v-icon color="error">mdi-credit-card</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">ອື່ນໆ (Other)</div>
                <div class="font-weight-bold error--text uppercase">{{ formatCurrency(summaryTotals.totalOther) }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filter Section -->
    <v-card class="mb-6 filter-card" elevation="0">
      <v-card-text class="pa-4">
        <v-row dense align="center">
          <v-col cols="12" md="3">
            <v-text-field v-model="filters.search" label="ຄົ້ນຫາ" placeholder="ເລກທີໃບຮັບ, ເລກອ້າງອີງ..." outlined dense
              hide-details clearable prepend-inner-icon="mdi-magnify" @input="applyFilters" />
          </v-col>
          <v-col cols="12" md="2">
            <v-select v-model="filters.paymentMethod" :items="paymentMethodOptions" label="ວິທີຈ່າຍ" outlined dense
              hide-details clearable prepend-inner-icon="mdi-cash" @change="applyFilters" />
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.bookingDateFrom" label="ວັນທີບັນທຶກຈາກ" type="date" outlined dense
              hide-details prepend-inner-icon="mdi-calendar-start" @change="applyFilters" />
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.bookingDateTo" label="ວັນທີບັນທຶກເຖິງ" type="date" outlined dense
              hide-details prepend-inner-icon="mdi-calendar-end" @change="applyFilters" />
          </v-col>
          <v-col cols="12" md="2">
            <v-btn color="secondary" outlined block @click="resetFilters">
              <v-icon left>mdi-refresh</v-icon>
              Reset
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Data Table -->
    <v-card class="dashboard-card" elevation="0" outlined>
      <v-card-title class="py-3 bg-light border-bottom">
        <v-icon color="primary" class="mr-2">mdi-table</v-icon>
        <span class="font-weight-bold text-subtitle-1">ລາຍການການຮັບຊຳລະ</span>
        <v-spacer />
        <v-chip color="primary" class="font-weight-medium" small>
          {{ filteredReceipts.length }} ລາຍການ
        </v-chip>
      </v-card-title>

      <v-data-table :headers="headers" :items="filteredReceipts" :loading="loading" :items-per-page="10"
        class="elevation-0 notosans-lao modernize-table" loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..." no-data-text="ບໍ່ມີຂໍ້ມູນ">
        <!-- Receipt Number -->
        <template v-slot:item.receiptNumber="{ item }">
          <div>
            <div class="font-weight-bold">{{ item.receiptNumber }}</div>
            <div v-if="item.notes" class=" grey--text text-truncate" style="max-width: 150px">
              {{ item.notes }}
            </div>
          </div>
        </template>

        <!-- Booking Date -->
        <template v-slot:item.bookingDate="{ item }">
          <span class="">{{
            formatDate(item.bookingDate)
            }}</span>
        </template>

        <!-- Received Date -->
        <template v-slot:item.receivedDate="{ item }">
          <span class="">{{
            formatDate(item.receivedDate)
            }}</span>
        </template>

        <!-- Invoice -->
        <template v-slot:item.invoice="{ item }">
          <div v-if="item.invoiceHeader">
            <div class="font-weight-medium">
              <v-icon x-small class="mr-1">mdi-file-invoice</v-icon>
              {{ item.invoiceHeader.invoiceNumber }}
            </div>
            <div v-if="item.invoiceHeader.customer" class=" grey--text">
              {{ item.invoiceHeader.customer.name }}
            </div>
          </div>
          <span v-else class="grey--text ">N/A</span>
        </template>

        <!-- Total Received Amount -->
        <template v-slot:item.totalReceivedAmount="{ item }">
          <div class="text-right">
            <div class="font-weight-bold">
              {{ formatCurrency(item.totalReceivedAmount) }}
            </div>
            <div class=" grey--text">
              {{ getCurrencyCode(item) }}
            </div>
            <div v-if="item.receiveLines?.length > 0" class=" grey--text">
              {{ item.receiveLines.length }} ການແບ່ງປັນ
            </div>
          </div>
        </template>

        <!-- Payment Method -->
        <template v-slot:item.paymentMethod="{ item }">
          <v-chip x-small :color="getPaymentMethodColor(item.paymentMethod)" text-color="white">
            {{ formatPaymentMethod(item.paymentMethod) }}
          </v-chip>
        </template>

        <!-- Reference Number -->
        <template v-slot:item.referenceNumber="{ item }">
          <span class=" font-weight-medium" style="font-family: monospace">
            {{ item.referenceNumber || '-' }}
          </span>
        </template>

        <!-- Status -->
        <template v-slot:item.status="{ item }">
          <v-chip small outlined :color="getStatusColor(item.status)" class="font-weight-medium">
            <v-icon x-small left>{{ getStatusIcon(item.status) }}</v-icon>
            {{ getStatusInLao(item.status) }}
          </v-chip>
        </template>

        <template v-slot:item.batch="{ item }">
          <div class="">
            <div class="font-weight-medium">
              {{ item.invoiceHeader?.jobbatch?.mou?.agency?.agencyName || '-' }}
            </div>
            <div class="grey--text">
              {{ item.invoiceHeader?.jobbatch?.mou?.jobCode || '-' }}
            </div>
            <div class="grey--text">
              {{ item.invoiceHeader?.jobbatch?.mou?.jobTitle || '-' }}
            </div>
          </div>
        </template>

        <!-- Inputter -->
        <template v-slot:item.inputter="{ item }">
          <div class="">
            <div>
              {{ item.inputter?.username || item.maker?.username || 'N/A' }}
            </div>
            <div v-if="item.createdAt" class="grey--text">
              {{ formatDate(item.createdAt) }}
            </div>
          </div>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-menu bottom left offset-y transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon small v-bind="attrs" v-on="on" color="grey darken-1">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense class="py-0">
              <v-list-item @click="viewReceipt(item)" class="px-3">
                <v-list-item-icon class="mr-3">
                  <v-icon small color="info">mdi-eye-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ເບິ່ງລາຍລະອຽດ</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="!item.status || item.status === 'active'" @click="editReceipt(item)" class="px-3">
                <v-list-item-icon class="mr-3">
                  <v-icon small color="warning">mdi-pencil-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
              </v-list-item>

              <v-list-item @click="printReceipt(item)" class="px-3">
                <v-list-item-icon class="mr-3">
                  <v-icon small color="success">mdi-printer-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ພິມໃບຮັບ</v-list-item-title>
              </v-list-item>

              <v-divider v-if="!item.status || item.status === 'active'" />

              <v-list-item v-if="!item.status || item.status === 'active'" @click="voidReceiptAction(item)" class="px-3">
                <v-list-item-icon class="mr-3">
                  <v-icon small color="error">mdi-alert-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="error--text">ໂມຄະ (Void)</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="!item.status || item.status === 'active'" @click="cancelReceiptAction(item)" class="px-3">
                <v-list-item-icon class="mr-3">
                  <v-icon small color="grey darken-2">mdi-close-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="grey--text text--darken-3">ຍົກເລີກ (Cancel)</v-list-item-title>
              </v-list-item>

              <v-list-item v-if="item.status === 'voided' || item.status === 'cancelled'" @click="reactivateReceiptAction(item)" class="px-3">
                <v-list-item-icon class="mr-3">
                  <v-icon small color="success">mdi-play-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="success--text">ເປີດໃຊ້ຄືນ (Reactivate)</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </v-card>

    <!-- Receive Header Maintain Dialog -->
    <client-only>
      <ReceiveHeaderMaintain :visible="showEditDialog" :receipt="selectedReceipt" :gl-accounts="glAccounts"
        :invoices="invoices" :currencies="currencies" :users="users" @close="closeEditDialog" @save="onReceiptSave" />
    </client-only>

    <!-- Receipt View Dialog -->
    <client-only>
      <ReceiveHeaderView :visible="showViewDialog" :receipt="selectedReceipt" @close="closeViewDialog" />
    </client-only>

    <!-- Add this Print Voucher Dialog -->
    <client-only>
      <ARReceivePrinter :visible="showPrintDialog" :receipt-data="selectedReceiptForPrint"
        :payment-methods="paymentMethods" :currencies="currencies" :transaction-codes="transactionCodes"
        :gl-accounts="glAccounts" :invoices="invoices" @close="closePrintDialog" />
    </client-only>

    <!-- Export Progress Snackbar -->
    <v-snackbar v-model="showExportProgress" :timeout="-1" color="info" bottom right>
      <v-icon left>mdi-download</v-icon>
      ກຳລັງສ້າງໄຟລ້ Excel...
      <v-progress-linear indeterminate color="white" class="mb-0 mt-2"></v-progress-linear>
    </v-snackbar>
  </div>
</template>

<script>
import ReceiveHeaderMaintain from '~/components/accounting/ar/receive/maintain'
import ReceiveHeaderView from '~/components/accounting/ar/receive/view'
import ARReceivePrinter from '~/components/accounting/ar/receive/voucher'
import { swalConfirm } from '~/common'

export default {
  name: 'ReceiveHeaderSummary',
  components: {
    ARReceivePrinter,
    ReceiveHeaderMaintain,
    ReceiveHeaderView,
  },

  data() {
    return {
      currencies: [],
      glAccounts: [],
      showEditDialog: false,
      showViewDialog: false,
      showPrintDialog: false,
      selectedReceipt: null,
      selectedReceiptForPrint: null,
      receipts: [],
      filteredReceipts: [],
      invoices: [],
      users: [],
      loading: false,
      exporting: false,
      showExportProgress: false,
      paymentMethods: [],
      transactionCodes: [],

      filters: {
        search: '',
        paymentMethod: '',
        bookingDateFrom: '',
        bookingDateTo: '',
      },

      sort: {
        field: 'bookingDate',
        direction: 'desc',
      },

      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      paymentMethodOptions: [
        { text: 'ເງິນສົດ', value: 'cash' },
        { text: 'ເຊັກ', value: 'check' },
        { text: 'ໂອນເງິນທະນາຄານ', value: 'bank_transfer' },
        { text: 'ບັດເຄຣດິດ', value: 'credit_card' },
        { text: 'ອື່ນໆ', value: 'other' },
      ],

      headers: [
        {
          text: 'ເລກທີໃບຮັບ',
          value: 'receiptNumber',
          sortable: true,
          width: '180px',
        },
        {
          text: 'ວັນທີບັນທຶກ',
          value: 'bookingDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ວັນທີຮັບເງິນ',
          value: 'receivedDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ໃບແຈ້ງໜີ້',
          value: 'invoice',
          sortable: false,
          width: '200px',
        },
        {
          text: 'ຍອດເງິນ',
          value: 'totalReceivedAmount',
          sortable: true,
          align: 'end',
          width: '150px',
        },
        {
          text: 'ວິທີຈ່າຍ',
          value: 'paymentMethod',
          sortable: true,
          width: '130px',
          align: 'center',
        },
        {
          text: 'ເລກອ້າງອີງ',
          value: 'referenceNumber',
          sortable: false,
          width: '120px',
        },
        {
          text: 'ສະຖານະ',
          value: 'status',
          sortable: true,
          width: '120px',
          align: 'center',
        },
        {
          text: 'Batch info',
          value: 'batch',
          sortable: false,
          width: '200px',
        },
        {
          text: 'ຜູ້ບັນທຶກ',
          value: 'inputter',
          sortable: false,
          width: '150px',
        },
        {
          text: 'ຟັງຊັ່ນ',
          value: 'actions',
          sortable: false,
          width: '80px',
          align: 'center',
        },
      ],
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    paginatedReceipts() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredReceipts.slice(start, end)
    },

    totalPages() {
      return Math.ceil(this.filteredReceipts.length / this.pagination.perPage)
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredReceipts.length
      )
      return {
        start: this.filteredReceipts.length > 0 ? start : 0,
        end,
        total: this.filteredReceipts.length,
      }
    },

    summaryTotals() {
      return this.filteredReceipts.reduce(
        (acc, receipt) => {
          acc.totalReceived += (receipt.totalReceivedAmount || 0)

          if (receipt.paymentMethod === 'cash') {
            acc.totalCash += (receipt.totalReceivedAmount || 0)
          } else if (receipt.paymentMethod === 'bank_transfer') {
            acc.totalBankTransfer += (receipt.totalReceivedAmount || 0)
          } else {
            acc.totalOther += (receipt.totalReceivedAmount || 0)
          }

          return acc
        },
        { totalReceived: 0, totalCash: 0, totalBankTransfer: 0, totalOther: 0 }
      )
    },
  },

  mounted() {
    this.setDefaultDates()
    this.fetchReceipts()
    this.fetchInvoices()
    this.fetchUsers()
    this.fetchAccountCharts()
    this.fetchCurrencies()
    this.fetchPaymentMethods()
    this.fetchTransactionCodes()
  },

  methods: {
    // NEW METHOD: Refresh all data
    async refreshData() {
      try {
        this.$toast.info('ກຳລັງໂຫຼດຂໍ້ມູນໃໝ່...')
        await Promise.all([
          this.fetchReceipts(),
          this.fetchInvoices(),
          this.fetchUsers(),
          this.fetchAccountCharts(),
          this.fetchCurrencies(),
          this.fetchPaymentMethods(),
          this.fetchTransactionCodes()
        ])
        this.$toast.success('ໂຫຼດຂໍ້ມູນໃໝ່ສຳເລັດ')
      } catch (error) {
        console.error('Error refreshing data:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນໃໝ່')
      }
    },

    // ENHANCED METHOD: Export to Excel with detailed data
    async exportToExcel() {
      this.exporting = true
      this.showExportProgress = true

      try {
        const currentDate = new Date().toISOString().split('T')[0]
        const filename = `AR_Receive_Report_${currentDate}.xlsx`

        // Try API export first (if available)
        try {
          const exportParams = {
            ...this.filters,
            export: true
          }

          const response = await this.$axios.get('/api/ar-receive-headers/export', {
            params: exportParams,
            responseType: 'blob'
          })

          this.downloadBlob(response.data, filename)
          this.$toast.success('ສົ່ງອອກ Excel ສຳເລັດ')
          return
        } catch (apiError) {
          console.log('API export not available, using client-side export')
        }

        // Fallback to client-side export
        await this.generateExcelFromData(this.filteredReceipts, filename)
        this.$toast.success('ສົ່ງອອກ Excel ສຳເລັດ')

      } catch (error) {
        console.error('Export error:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ Excel')
      } finally {
        this.exporting = false
        this.showExportProgress = false
      }
    },

    // Helper method to download blob
    downloadBlob(blob, filename) {
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    },

    // Enhanced Excel generation with detailed data
    async generateExcelFromData(receipts, filename) {
      try {
        // Try to use XLSX if available
        const XLSX = await import('xlsx')

        const exportData = receipts.map((receipt, index) => ({
          'ລຳດັບ': index + 1,
          'ເລກທີໃບຮັບ': receipt.receiptNumber || '',
          'ວັນທີບັນທຶກ': this.formatDate(receipt.bookingDate),
          'ວັນທີຮັບເງິນ': this.formatDate(receipt.receivedDate),
          'ເລກທີໃບແຈ້ງໜີ້': receipt.invoiceHeader?.invoiceNumber || '',
          'ລູກຄ້າ': receipt.invoiceHeader?.customer?.name || '',
          'ຍອດເງິນຮັບ': receipt.totalReceivedAmount || 0,
          'ສະກຸນເງິນ': this.getCurrencyCode(receipt),
          'ວິທີການຊຳລະ': this.formatPaymentMethod(receipt.paymentMethod),
          'ເລກອ້າງອີງ': receipt.referenceNumber || '',
          'ຊື່ບໍລິສັດ': receipt.invoiceHeader?.jobbatch?.mou?.agency?.agencyName || '',
          'ລະຫັດວຽກ': receipt.invoiceHeader?.jobbatch?.mou?.jobCode || '',
          'ຊື່ວຽກ': receipt.invoiceHeader?.jobbatch?.mou?.jobTitle || '',
          'ຈຳນວນການແບ່ງປັນ': receipt.receiveLines?.length || 0,
          'ໝາຍເຫດ': receipt.notes || '',
          'ຜູ້ບັນທຶກ': receipt.inputter?.username || receipt.maker?.username || '',
          'ຜູ້ກວດສອບ': receipt.checker?.username || '',
          'ວັນທີສ້າງ': this.formatDate(receipt.createdAt),
          'ວັນທີອັບເດດ': this.formatDate(receipt.updateTimestamp),
          'ສະຖານະ': receipt.status || 'active'
        }))

        // Add detailed receive lines if available
        const detailedData = []
        receipts.forEach((receipt, receiptIndex) => {
          if (receipt.receiveLines && receipt.receiveLines.length > 0) {
            receipt.receiveLines.forEach((line, lineIndex) => {
              detailedData.push({
                'ລຳດັບໃບຮັບ': receiptIndex + 1,
                'ເລກທີໃບຮັບ': receipt.receiptNumber,
                'ລຳດັບລາຍການ': lineIndex + 1,
                'ລາຍການ': line.description || '',
                'ຈຳນວນເງິນ': line.receivedAmount || 0,
                'ບັນຊີ GL': line.glAccount?.accountCode || '',
                'ຊື່ບັນຊີ GL': line.glAccount?.accountName || '',
                'ຄຳອະທິບາຍລາຍການ': line.lineDescription || '',
                'ອັດຕາພາສີ': line.taxRate || 0,
                'ຈຳນວນພາສີ': line.taxAmount || 0
              })
            })
          }
        })

        const workbook = XLSX.utils.book_new()

        // Summary sheet
        const summarySheet = XLSX.utils.json_to_sheet(exportData)
        XLSX.utils.book_append_sheet(workbook, summarySheet, 'ສະຫຼຸບການຮັບ')

        // Detail sheet (if we have line items)
        if (detailedData.length > 0) {
          const detailSheet = XLSX.utils.json_to_sheet(detailedData)
          XLSX.utils.book_append_sheet(workbook, detailSheet, 'ລາຍລະອຽດການຮັບ')
        }

        // Set column widths for better readability
        const wscols = [
          { wch: 8 },  // ລຳດັບ
          { wch: 15 }, // ເລກທີໃບຮັບ
          { wch: 12 }, // ວັນທີບັນທຶກ
          { wch: 12 }, // ວັນທີຮັບເງິນ
          { wch: 15 }, // ເລກທີໃບແຈ້ງໜີ້
          { wch: 25 }, // ລູກຄ້າ
          { wch: 15 }, // ຍອດເງິນຮັບ
          { wch: 10 }, // ສະກຸນເງິນ
          { wch: 15 }, // ວິທີການຊຳລະ
          { wch: 15 }, // ເລກອ້າງອີງ
          { wch: 25 }, // ຊື່ບໍລິສັດ
          { wch: 12 }, // ລະຫັດວຽກ
          { wch: 20 }, // ຊື່ວຽກ
          { wch: 12 }, // ຈຳນວນການແບ່ງປັນ
          { wch: 25 }, // ໝາຍເຫດ
          { wch: 15 }, // ຜູ້ບັນທຶກ
          { wch: 15 }, // ຜູ້ກວດສອບ
          { wch: 15 }, // ວັນທີສ້າງ
          { wch: 15 }, // ວັນທີອັບເດດ
          { wch: 10 }  // ສະຖານະ
        ]
        summarySheet['!cols'] = wscols

        XLSX.writeFile(workbook, filename)

      } catch (xlsxError) {
        // Fallback to CSV if XLSX not available
        console.log('XLSX not available, generating CSV')
        await this.generateCSVFromData(receipts, filename.replace('.xlsx', '.csv'))
      }
    },

    // Enhanced CSV generation
    async generateCSVFromData(receipts, filename) {
      const csvHeaders = [
        'ລຳດັບ',
        'ເລກທີໃບຮັບ',
        'ວັນທີບັນທຶກ',
        'ວັນທີຮັບເງິນ',
        'ເລກທີໃບແຈ້ງໜີ້',
        'ລູກຄ້າ',
        'ຍອດເງິນຮັບ',
        'ສະກຸນເງິນ',
        'ວິທີການຊຳລະ',
        'ເລກອ້າງອີງ',
        'ຊື່ບໍລິສັດ',
        'ລະຫັດວຽກ',
        'ຊື່ວຽກ',
        'ຈຳນວນການແບ່ງປັນ',
        'ໝາຍເຫດ',
        'ຜູ້ບັນທຶກ',
        'ວັນທີສ້າງ'
      ]

      const csvRows = receipts.map((receipt, index) => [
        index + 1,
        receipt.receiptNumber || '',
        this.formatDate(receipt.bookingDate),
        this.formatDate(receipt.receivedDate),
        receipt.invoiceHeader?.invoiceNumber || '',
        receipt.invoiceHeader?.customer?.name || '',
        receipt.totalReceivedAmount || 0,
        this.getCurrencyCode(receipt),
        this.formatPaymentMethod(receipt.paymentMethod),
        receipt.referenceNumber || '',
        receipt.invoiceHeader?.jobbatch?.mou?.agency?.agencyName || '',
        receipt.invoiceHeader?.jobbatch?.mou?.jobCode || '',
        receipt.invoiceHeader?.jobbatch?.mou?.jobTitle || '',
        receipt.receiveLines?.length || 0,
        receipt.notes || '',
        receipt.inputter?.username || receipt.maker?.username || '',
        this.formatDate(receipt.createdAt)
      ])

      const csvContent = [csvHeaders, ...csvRows]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\n')

      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      this.downloadBlob(blob, filename)
    },

    // Helper method to get currency code
    getCurrencyCode(receipt) {
      // Try to get from receive lines first
      if (receipt.receiveLines && receipt.receiveLines.length > 0) {
        const firstLine = receipt.receiveLines[0]
        if (firstLine.currency) {
          return firstLine.currency.code || firstLine.currency.name || 'LAK'
        }
      }

      // Try to get from invoice
      if (receipt.invoiceHeader && receipt.invoiceHeader.currency) {
        return receipt.invoiceHeader.currency.code || receipt.invoiceHeader.currency.name || 'LAK'
      }

      // Default to LAK
      return 'LAK'
    },

    getCurrentMonthStart() {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth()
      return new Date(year, month, 1).toISOString().split('T')[0]
    },

    getCurrentMonthEnd() {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth()
      return new Date(year, month + 1, 0).toISOString().split('T')[0]
    },

    setDefaultDates() {
      this.filters.bookingDateFrom = this.getCurrentMonthStart()
      this.filters.bookingDateTo = this.getCurrentMonthEnd()
    },

    async fetchPaymentMethods() {
      try {
        const { data } = await this.$axios.get('/api/payment/find')
        this.paymentMethods = data || []
      } catch (error) {
        console.error('Error fetching payment methods:', error)
      }
    },

    async fetchTransactionCodes() {
      try {
        const { data } = await this.$axios.get('/api/transaction-codes')
        this.transactionCodes = data?.data || []
      } catch (error) {
        console.error('Error fetching transaction codes:', error)
      }
    },

    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/findAll')
        this.currencies = data || []
      } catch (error) {
        console.error(error)
      }
    },

    async fetchAccountCharts() {
      try {
        const { data } = await this.$axios.get('/api/accountChart/find')
        this.glAccounts = data || []
      } catch (error) {
        console.error(error)
      }
    },

    async fetchReceipts() {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/api/ar-receive-headers', {
          params: { page: 1, limit: 1000 },
        })

        if (data?.success) {
          this.receipts = data.data.receiveHeaders || []
        } else {
          this.receipts = []
        }

        this.applyFilters()
      } catch (error) {
        console.error(error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
      } finally {
        this.loading = false
      }
    },

    async fetchInvoices() {
      try {
        const { data } = await this.$axios.get('/api/ar-invoices')
        if (data?.success) {
          this.invoices = data.data.invoices || []
        }
      } catch (error) {
        console.error(error)
      }
    },

    async fetchUsers() {
      try {
        const { data } = await this.$axios.get('/api/user/find')
        this.users = Array.isArray(data) ? data : data?.data || []
      } catch (error) {
        console.error(error)
      }
    },

    openCreateDialog() {
      this.selectedReceipt = null
      this.showEditDialog = true
    },

    editReceipt(receipt) {
      this.selectedReceipt = receipt
      this.showEditDialog = true
    },

    viewReceipt(receipt) {
      this.selectedReceipt = receipt
      this.showViewDialog = true
    },

    async printReceipt(receipt) {
      try {
        const { data } = await this.$axios.get(
          `/api/ar-receive-headers/${receipt.id}`
        )

        if (data?.success) {
          this.selectedReceiptForPrint = data.data
          this.showPrintDialog = true
        } else {
          this.$toast.error('ບໍ່ສາມາດໂຫຼດຂໍ້ມູນໃບຮັບໄດ້')
        }
      } catch (error) {
        console.error('Error loading receipt for print:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
      }
    },

    closePrintDialog() {
      this.showPrintDialog = false
      this.selectedReceiptForPrint = null
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedReceipt = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedReceipt = null
    },

    async onReceiptSave(receiptData) {
      try {
        this.loading = true

        let response
        if (this.selectedReceipt?.id) {
          response = await this.$axios.put(
            `/api/ar-receive-headers/${this.selectedReceipt.id}`,
            receiptData
          )
        } else {
          response = await this.$axios.post(
            '/api/ar-receive-headers',
            receiptData
          )
        }

        if (response.data?.success) {
          this.$toast.success('ບັນທຶກສຳເລັດ')
          this.closeEditDialog()
          await this.fetchReceipts()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error(error)
        this.$toast.error(error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດ')
      } finally {
        this.loading = false
      }
    },

    applyFilters() {
      let filtered = [...this.receipts]

      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (r) =>
            r.receiptNumber.toLowerCase().includes(search) ||
            r.referenceNumber?.toLowerCase().includes(search) ||
            r.notes?.toLowerCase().includes(search)
        )
      }

      if (this.filters.paymentMethod) {
        filtered = filtered.filter(
          (r) => r.paymentMethod === this.filters.paymentMethod
        )
      }

      if (this.filters.bookingDateFrom || this.filters.bookingDateTo) {
        filtered = filtered.filter((r) => {
          const bookingDate = new Date(r.bookingDate)
          const dateFrom = this.filters.bookingDateFrom
            ? new Date(this.filters.bookingDateFrom)
            : null
          const dateTo = this.filters.bookingDateTo
            ? new Date(this.filters.bookingDateTo)
            : null

          if (dateFrom && bookingDate < dateFrom) return false
          if (dateTo && bookingDate > dateTo) return false
          return true
        })
      }

      this.filteredReceipts = filtered
      this.pagination.currentPage = 1
    },

    resetFilters() {
      this.filters = {
        search: '',
        paymentMethod: '',
        bookingDateFrom: this.getCurrentMonthStart(),
        bookingDateTo: this.getCurrentMonthEnd(),
      }
      this.applyFilters()
    },

    updatePagination() {
      this.pagination.currentPage = 1
    },

    // Legacy export method (kept for compatibility)
    exportData() {
      this.exportToExcel()
    },

    convertToCSV(data) {
      const headers = [
        'Receipt Number',
        'Booking Date',
        'Received Date',
        'Invoice',
        'Customer',
        'Amount',
        'Currency',
        'Payment Method',
        'Reference',
        'Agency',
        'Job Code',
        'Job Title'
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            `"${row.receiptNumber}"`,
            row.bookingDate,
            row.receivedDate,
            `"${row.invoiceHeader?.invoiceNumber || ''}"`,
            `"${row.invoiceHeader?.customer?.name || ''}"`,
            row.totalReceivedAmount,
            `"${this.getCurrencyCode(row)}"`,
            `"${this.formatPaymentMethod(row.paymentMethod)}"`,
            `"${row.referenceNumber || ''}"`,
            `"${row.invoiceHeader?.jobbatch?.mou?.agency?.agencyName || ''}"`,
            `"${row.invoiceHeader?.jobbatch?.mou?.jobCode || ''}"`,
            `"${row.invoiceHeader?.jobbatch?.mou?.jobTitle || ''}"`,
          ].join(',')
        ),
      ].join('\n')
      return csvContent
    },

    downloadCSV(csvContent, filename) {
      const blob = new Blob([csvContent], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.click()
      window.URL.revokeObjectURL(url)
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-GB')
    },

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },

    formatPaymentMethod(method) {
      const methods = {
        cash: 'ເງິນສົດ',
        check: 'ເຊັກ',
        bank_transfer: 'ໂອນທະນາຄານ',
        credit_card: 'ບັດເຄຣດິດ',
        other: 'ອື່ນໆ',
      }
      return methods[method] || method
    },

    getPaymentMethodColor(method) {
      const colors = {
        cash: 'success',
        bank_transfer: 'info',
        check: 'warning',
        credit_card: 'error',
        other: 'grey',
      }
      return colors[method] || 'grey'
    },

    getStatusInLao(status) {
      const labels = {
        active: 'ໃຊ້ງານຢູ່',
        voided: 'ຖືກໂມຄະ',
        cancelled: 'ຍົກເລີກແລ້ວ',
      }
      return labels[status] || (status ? status.toUpperCase() : 'ACTIVE')
    },

    getStatusColor(status) {
      const colors = {
        active: 'success',
        voided: 'error',
        cancelled: 'grey darken-2',
      }
      return colors[status] || 'success'
    },

    getStatusIcon(status) {
      const icons = {
        active: 'mdi-check-circle-outline',
        voided: 'mdi-alert-circle-outline',
        cancelled: 'mdi-close-circle-outline',
      }
      return icons[status] || 'mdi-help-circle-outline'
    },

    async voidReceiptAction(receipt) {
      try {
        const { value: reason } = await this.$swal.fire({
          title: 'ຢືນຢັນການໂມຄະ (Void Receipt)',
          text: `ທ່ານຕ້ອງການປ່ຽນສະຖານະໃບຮັບ ${receipt.receiptNumber} ເປັນ ໂມຄະ ແມ່ນບໍ່?`,
          icon: 'warning',
          input: 'text',
          inputPlaceholder: 'ກະລຸນາລະບຸເຫດຜົນ...',
          showCancelButton: true,
          confirmButtonColor: '#ef4444',
          cancelButtonColor: '#3b82f6',
          confirmButtonText: 'ຢືນຢັນ',
          cancelButtonText: 'ຍົກເລີກ',
          inputValidator: (value) => {
            if (!value) {
              return 'ກະລຸນາປ້ອນເຫດຜົນກ່ອນ!'
            }
          }
        })

        if (reason) {
          this.loading = true
          await this.$axios.post(`/api/ar-receive-headers/${receipt.id}/void`, {
            reason: reason,
            userId: this.user?.id
          })
          this.$toast.success('ປ່ຽນສະຖານະເປັນ ໂມຄະ ສຳເລັດ')
          await this.fetchReceipts()
        }
      } catch (error) {
        console.error(error)
        this.$toast.error(error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດ')
      } finally {
        this.loading = false
      }
    },

    async cancelReceiptAction(receipt) {
      try {
        const { value: reason } = await this.$swal.fire({
          title: 'ຢືນຢັນການຍົກເລີກ (Cancel Receipt)',
          text: `ທ່ານຕ້ອງການປ່ຽນສະຖານະໃບຮັບ ${receipt.receiptNumber} ເປັນ ຍົກເລີກ ແມ່ນບໍ່?`,
          icon: 'warning',
          input: 'text',
          inputPlaceholder: 'ກະລຸນາລະບຸເຫດຜົນ...',
          showCancelButton: true,
          confirmButtonColor: '#ef4444',
          cancelButtonColor: '#3b82f6',
          confirmButtonText: 'ຢືນຢັນ',
          cancelButtonText: 'ຍົກເລີກ',
          inputValidator: (value) => {
            if (!value) {
              return 'ກະລຸນາປ້ອນເຫດຜົນກ່ອນ!'
            }
          }
        })

        if (reason) {
          this.loading = true
          await this.$axios.post(`/api/ar-receive-headers/${receipt.id}/cancel`, {
            reason: reason,
            userId: this.user?.id
          })
          this.$toast.success('ປ່ຽນສະຖານະເປັນ ຍົກເລີກ ສຳເລັດ')
          await this.fetchReceipts()
        }
      } catch (error) {
        console.error(error)
        this.$toast.error(error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດ')
      } finally {
        this.loading = false
      }
    },

    async reactivateReceiptAction(receipt) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການເປີດໃຊ້ຄືນ',
          `ທ່ານຕ້ອງການເປີດໃຊ້ງານໃບຮັບ ${receipt.receiptNumber} ຄືນໃໝ່ແມ່ນບໍ່?`,
          'question'
        )

        if (result.isConfirmed) {
          this.loading = true
          await this.$axios.post(`/api/ar-receive-headers/${receipt.id}/reactivate`, {
            reason: 'Reactivated from UI',
            userId: this.user?.id
          })
          this.$toast.success('ເປີດໃຊ້ງານໃບຮັບຄືນໃໝ່ສຳເລັດ')
          await this.fetchReceipts()
        }
      } catch (error) {
        console.error(error)
        this.$toast.error(error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດ')
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
/* Noto Sans Lao Font Configuration */
/* Typography & Noto Sans Lao */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Lao:wght@300;400;500;600;700&display=swap');

.filter-card {
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
}

.summary-card {
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(226, 232, 240, 0.8);
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.summary-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: transparent;
  transition: all 0.3s;
}

.summary-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.summary-card:hover::before {
  width: 6px;
}

.summary-card.total-ap::before { background: var(--v-primary-base) !important; }
.summary-card.total-paid::before { background: var(--v-success-base, #10b981) !important; }
.summary-card.outstanding::before { background: var(--v-warning-base, #f59e0b) !important; }
.summary-card.overdue::before { background: var(--v-error-base, #ef4444) !important; }

.dashboard-card {
  border-radius: 16px;
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.modernize-table ::v-deep th {
  background-color: #f8fafc !important;
  color: #475569 !important;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  border-bottom: 2px solid #e2e8f0 !important;
  padding: 16px !important;
}

.modernize-table ::v-deep td {
  font-size: 0.875rem !important;
  padding: 16px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.modernize-table ::v-deep tr:hover {
  background-color: #f8fafc !important;
}

.font-monospace {
  font-family: 'JetBrains Mono', 'Roboto Mono', monospace !important;
  font-size: 0.9rem;
}

.v-chip.font-weight-medium {
  font-size: 0.7rem !important;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-weight: 600;
}

.border-left {
  border-left: 1px solid #e2e8f0;
}

.bg-light {
  background-color: #f8fafc !important;
}

.opacity-80 {
  opacity: 0.8;
}

.uppercase {
  text-transform: uppercase;
}

/* Enhanced font weight for better Lao text readability */
.font-weight-bold {
  font-weight: 600 !important;
}

.font-weight-medium {
  font-weight: 500 !important;
}

/* Apply professional typography globally in current container */
div {
  font-family: 'Inter', 'Noto Sans Lao', sans-serif !important;
}
</style>