<template>
  <!-- <v-container fluid class="receive-summary-container"> -->
  <!-- Header Section -->
  <div>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary white--text py-3">
            <v-icon color="white" class="mr-2">mdi-cash-register</v-icon>
            <span>ລະບົບຈັດການການຮັບຊຳລະ</span>
            <v-spacer />
            <v-btn color="white" text @click="openCreateDialog">
              <v-icon left>mdi-plus</v-icon>
              ເພີ່ມໃໝ່
            </v-btn>
            <v-btn color="white" text @click="exportData">
              <v-icon left>mdi-download</v-icon>
              Export
            </v-btn>
          </v-card-title>

          <!-- Filters -->
          <v-card-text class="pa-3">
            <v-row dense>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="filters.search"
                  label="ຄົ້ນຫາ"
                  placeholder="ເລກທີໃບຮັບ, ເລກອ້າງອີງ..."
                  outlined
                  dense
                  hide-details
                  clearable
                  prepend-inner-icon="mdi-magnify"
                  @input="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.paymentMethod"
                  :items="paymentMethodOptions"
                  label="ວິທີຈ່າຍ"
                  outlined
                  dense
                  hide-details
                  clearable
                  prepend-inner-icon="mdi-cash"
                  @change="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  v-model="filters.bookingDateFrom"
                  label="ວັນທີບັນທຶກຈາກ"
                  type="date"
                  outlined
                  dense
                  hide-details
                  prepend-inner-icon="mdi-calendar-start"
                  @change="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-text-field
                  v-model="filters.bookingDateTo"
                  label="ວັນທີບັນທຶກເຖິງ"
                  type="date"
                  outlined
                  dense
                  hide-details
                  prepend-inner-icon="mdi-calendar-end"
                  @change="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-btn color="secondary" outlined block @click="resetFilters">
                  <v-icon left>mdi-refresh</v-icon>
                  Reset
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-row class="mt-3">
      <v-col cols="12">
        <v-card>
          <v-card-title class="py-2">
            <v-icon class="mr-2">mdi-table</v-icon>
            <span>ລາຍການການຮັບຊຳລະ</span>
            <v-spacer />
            <v-chip color="primary" outlined>
              {{ filteredReceipts.length }} ລາຍການ
            </v-chip>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="filteredReceipts"
            :loading="loading"
            :items-per-page="10"
            class="elevation-0"
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ"
          >
            <!-- Receipt Number -->
            <template v-slot:item.receiptNumber="{ item }">
              <div>
                <div class="font-weight-bold">{{ item.receiptNumber }}</div>
                <div
                  v-if="item.notes"
                  class="text-caption grey--text text-truncate"
                  style="max-width: 150px"
                >
                  {{ item.notes }}
                </div>
              </div>
            </template>

            <!-- Booking Date -->
            <template v-slot:item.bookingDate="{ item }">
              <span class="text-caption">{{
                formatDate(item.bookingDate)
              }}</span>
            </template>

            <!-- Received Date -->
            <template v-slot:item.receivedDate="{ item }">
              <span class="text-caption">{{
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
                <div
                  v-if="item.invoiceHeader.customer"
                  class="text-caption grey--text"
                >
                  {{ item.invoiceHeader.customer.name }}
                </div>
              </div>
              <span v-else class="grey--text text-caption">N/A</span>
            </template>

            <!-- Total Received Amount -->
            <template v-slot:item.totalReceivedAmount="{ item }">
              <div class="text-right">
                <div class="font-weight-bold">
                  {{ formatCurrency(item.totalReceivedAmount) }}
                </div>
                <div
                  v-if="item.receiveLines?.length > 0"
                  class="text-caption grey--text"
                >
                  {{ item.receiveLines.length }} ການແບ່ງປັນ
                </div>
              </div>
            </template>

            <!-- Payment Method -->
            <template v-slot:item.paymentMethod="{ item }">
              <v-chip
                x-small
                :color="getPaymentMethodColor(item.paymentMethod)"
                text-color="white"
              >
                {{ formatPaymentMethod(item.paymentMethod) }}
              </v-chip>
            </template>

            <!-- Reference Number -->
            <template v-slot:item.referenceNumber="{ item }">
              <span
                class="text-caption font-weight-medium"
                style="font-family: monospace"
              >
                {{ item.referenceNumber || '-' }}
              </span>
            </template>
   <template v-slot:item.batch="{ item }">
  <span
    class="text-caption font-weight-medium"
    style="font-family: monospace"
  >
    {{ item.invoiceHeader?.jobbatch?.mou?.agency?.agencyName || '-' }}
    {{ item.invoiceHeader?.jobbatch?.mou?.jobCode || '-' }}
    {{ item.invoiceHeader?.jobbatch?.mou?.jobTitle || '-' }}
  </span>
</template>


            <!-- Inputter -->
            <template v-slot:item.inputter="{ item }">
              <div class="text-caption">
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
              <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon small v-bind="attrs" v-on="on">
                    <v-icon small>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item @click="viewReceipt(item)">
                    <v-list-item-icon>
                      <v-icon small color="info">mdi-eye</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ເບິ່ງລາຍລະອຽດ</v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="editReceipt(item)">
                    <v-list-item-icon>
                      <v-icon small color="warning">mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="printReceipt(item)">
                    <v-list-item-icon>
                      <v-icon small color="success">mdi-printer</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ພິມໃບຮັບ</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Receive Header Maintain Dialog -->
    <client-only>
      <ReceiveHeaderMaintain
        :visible="showEditDialog"
        :receipt="selectedReceipt"
        :gl-accounts="glAccounts"
        :invoices="invoices"
        :currencies="currencies"
        :users="users"
        @close="closeEditDialog"
        @save="onReceiptSave"
      />
    </client-only>

    <!-- Receipt View Dialog -->
    <client-only>
      <ReceiveHeaderView
        :visible="showViewDialog"
        :receipt="selectedReceipt"
        @close="closeViewDialog"
      />
    </client-only>
    <!-- Add this Print Voucher Dialog -->
    <client-only>
      <ARReceivePrinter
        :visible="showPrintDialog"
        :receipt-data="selectedReceiptForPrint"
        :payment-methods="paymentMethods"
        :currencies="currencies"
        :transaction-codes="transactionCodes"
        :gl-accounts="glAccounts"
        :invoices="invoices"
        @close="closePrintDialog"
      />
    </client-only>
  </div>
  <!-- </v-container> -->
</template>

<script>
import ReceiveHeaderMaintain from '~/components/accounting/ar/receive/maintain'
import ReceiveHeaderView from '~/components/accounting/ar/receive/view'
import ARReceivePrinter from '~/components/accounting/ar/receive/voucher' // Add this import
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
      showPrintDialog: false, // Add this
      selectedReceipt: null,
      selectedReceiptForPrint: null, // Add this
      receipts: [],
      filteredReceipts: [],
      invoices: [],
      users: [],
      loading: false,
      paymentMethods: [], // Add this
      transactionCodes: [], // Add this

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
          text: 'Batch info',
          value: 'batch',
          sortable: false,
          width: '120px',
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
  },

  mounted() {
    // Set default dates before loading data
    this.setDefaultDates()
    this.fetchReceipts()
    this.fetchInvoices()
    this.fetchUsers()
    this.fetchAccountCharts()
    this.fetchCurrencies()
    this.fetchPaymentMethods() // Add this
    this.fetchTransactionCodes() // Add this
  },

  methods: {
    // NEW METHOD: Get current month's first day
    getCurrentMonthStart() {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth()
      return new Date(year, month, 1).toISOString().split('T')[0]
    },

    // NEW METHOD: Get current month's last day
    getCurrentMonthEnd() {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth()
      return new Date(year, month + 1, 0).toISOString().split('T')[0]
    },

    // NEW METHOD: Set default dates for current month
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
        const { data } = await this.$axios.get('/api/currency/find')
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
        // Fetch full receipt details with all relations
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

    exportData() {
      const csvData = this.convertToCSV(this.filteredReceipts)
      this.downloadCSV(csvData, 'receipts-export.csv')
    },

    convertToCSV(data) {
      const headers = [
        'Receipt Number',
        'Booking Date',
        'Received Date',
        'Invoice',
        'Amount',
        'Payment Method',
        'Reference',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            `"${row.receiptNumber}"`,
            row.bookingDate,
            row.receivedDate,
            `"${row.invoiceHeader?.invoiceNumber || ''}"`,
            row.totalReceivedAmount,
            row.paymentMethod,
            `"${row.referenceNumber || ''}"`,
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
  },
}
</script>

<style scoped>
.receive-summary-container {
  padding: 20px;
}

.v-card-title.primary {
  background: linear-gradient(45deg, #1976d2, #1565c0);
}

.text-caption {
  font-size: 12px !important;
}
</style>