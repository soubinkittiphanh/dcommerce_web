<template>
  <div class="ap-settlement-container notosans-lao">
    <div class="primary analysis-header mb-4">
      <div class="d-flex justify-space-between align-center">
        <div>
          <h1 class=" font-weight-bold mb-1 white--text">
            <v-icon color="white" class="mr-2">mdi-file-invoice-dollar</v-icon>
            ລະບົບຈັດການໃບທວງໜີ້
          </h1>
          <p class="text-body-2 opacity-80 mb-0 white--text">ເບິ່ງ ແລະ ຈັດການໃບທວງໜີ້ລູກຄ້າທັງໝົດ</p>
        </div>
        <div class="d-flex gap-2 align-center">
          <v-btn color="white" text small @click="exportData" class="mr-2">
            <v-icon left small>mdi-download</v-icon>Export
          </v-btn>
          <v-btn color="white" light depressed @click="openCreateDialog" class="rounded-lg font-weight-medium">
            <v-icon left small>mdi-plus</v-icon>ເພີ່ມໃໝ່
          </v-btn>
        </div>
      </div>

      <!-- Quick Summary Cards -->
      <v-row class="mt-6">
        <v-col cols="12" sm="6" md="3">
          <v-card class="summary-card-premium" elevation="0">
            <v-card-text class="d-flex align-center pa-4">
              <v-avatar color="info lighten-4" size="48" class="rounded-lg">
                <v-icon color="info" size="28">mdi-file-document-multiple</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">ລວມໃບແຈ້ງໜີ້</div>
                <div class="font-weight-bold info--text uppercase">{{ formatCurrency(summaryTotals.totalInvoices) }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-card class="summary-card-premium" elevation="0">
            <v-card-text class="d-flex align-center pa-4">
              <v-avatar color="success lighten-4" size="48" class="rounded-lg">
                <v-icon color="success" size="28">mdi-cash-check</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">ຈ່າຍແລ້ວ (Settled)</div>
                <div class="font-weight-bold success--text uppercase">{{ formatCurrency(summaryTotals.totalSettled) }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-card class="summary-card-premium" elevation="0">
            <v-card-text class="d-flex align-center pa-4">
              <v-avatar color="warning lighten-4" size="48" class="rounded-lg">
                <v-icon color="warning" size="28">mdi-clock-alert</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">ຄ້າງຊຳລະ (Outstanding)</div>
                <div class="font-weight-bold warning--text uppercase">{{ formatCurrency(summaryTotals.totalOutstanding)
                  }}</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-card class="summary-card-premium" elevation="0">
            <v-card-text class="d-flex align-center pa-4">
              <v-avatar color="error lighten-4" size="48" class="rounded-lg">
                <v-icon color="error" size="28">mdi-alert-circle</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">ເກີນກຳນົດ (Overdue)</div>
                <div class="font-weight-bold error--text uppercase">{{ formatCurrency(summaryTotals.totalOverdue) }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Filter Section -->
    <v-card class="mb-6 filter-card" elevation="0">
      <v-card-text class="pa-4">
        <v-row dense align="center">
          <v-col cols="12" md="3">
            <v-text-field v-model="filters.search" label="ຄົ້ນຫາ" placeholder="ເລກທີໃບແຈ້ງໜີ້, ລູກຄ້າ..." outlined dense
              hide-details clearable prepend-inner-icon="mdi-magnify" @input="applyFilters" />
          </v-col>
          <v-col cols="12" md="3">
            <v-select v-model="filters.agencyId" :items="agencies" item-text="name" item-value="id" label="ລູກຄ້າ"
              outlined dense hide-details clearable prepend-inner-icon="mdi-account" @change="applyFilters" />
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.dateFrom" label="ວັນທີເລີ່ມຕົ້ນ" type="date" outlined dense hide-details
              prepend-inner-icon="mdi-calendar-start" @change="applyFilters" />
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.dateTo" label="ວັນທີສິ້ນສຸດ" type="date" outlined dense hide-details
              prepend-inner-icon="mdi-calendar-end" @change="applyFilters" />
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

    <!-- Table Section -->
    <v-card class="dashboard-card" elevation="0" outlined>
      <v-card-title class="py-3 bg-light border-bottom">
        <v-icon color="primary" class="mr-2">mdi-table</v-icon>
        <span class="font-weight-bold ">ລາຍການໃບແຈ້ງໜີ້</span>
        <v-spacer />
        <v-chip color="primary" class="font-weight-medium" small>
          {{ filteredInvoices.length }} ລາຍການ
        </v-chip>
      </v-card-title>

      <v-data-table :headers="headers" :items="paginatedInvoices" :loading="loading" :items-per-page="10"
        class="elevation-0 modernize-table notosans-lao" loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..." no-data-text="ບໍ່ມີຂໍ້ມູນ">
        <template v-slot:item.invoiceNumber="{ item }">
          <div>
            <div class="font-weight-bold">{{ item.invoiceNumber }}</div>
            <div v-if="item.description" class=" grey--text text-truncate" style="max-width: 200px">
              {{ item.description }}
            </div>
          </div>
        </template>

        <template v-slot:item.invoiceDate="{ item }">
          <span class="">{{
            formatDate(item.invoiceDate)
          }}</span>
        </template>

        <template v-slot:item.customer="{ item }">
          <div v-if="item.agency">
            <div class="font-weight-medium">
              <v-icon x-small class="mr-1">mdi-account</v-icon>
              {{ item.agency.agencyName }}
            </div>
            <div v-if="item.agency.email" class=" grey--text">
              {{ item.agency.email }}
            </div>
          </div>
          <span v-else class="grey--text ">N/A</span>
        </template>

        <template v-slot:item.dueDate="{ item }">
          <span class="" :class="{
            'error--text font-weight-bold':
              getDueDateClass(item.dueDate, item.status) ===
              'overdue-date',
            'warning--text font-weight-medium':
              getDueDateClass(item.dueDate, item.status) === 'due-soon',
          }">
            {{ formatDate(item.dueDate) }}
          </span>
        </template>

        <template v-slot:item.totalAmount="{ item }">
          <div class="text-right">
            <div class="font-weight-bold">
              {{ formatCurrency(item.totalAmount) }}
            </div>
            <div class=" grey--text">
              Net: {{ formatCurrency(item.netAmount) }}
              <span v-if="item.taxAmount > 0">
                | Tax: {{ formatCurrency(item.taxAmount) }}</span>
            </div>
          </div>
        </template>

        <template v-slot:item.settledAmount="{ item }">
          <div class="text-right font-weight-bold success--text">
            {{ formatCurrency(item.settledAmount) }}
          </div>
        </template>

        <template v-slot:item.outstandingAmount="{ item }">
          <div class="text-right font-weight-bold" :class="{
            'error--text': item.outstandingAmount > 0 && item.status !== 'paid',
          }">
            {{ formatCurrency(item.outstandingAmount) }}
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip x-small :color="getStatusColor(item.status)" text-color="white">
            {{ formatStatus(item.status) }}
          </v-chip>
        </template>

        <template v-slot:item.maker="{ item }">
          <div class="">
            <div>{{ item.maker ? item.maker.cus_name : 'N/A' }}</div>
            <div v-if="item.createdAt" class="grey--text">
              {{ formatDate(item.createdAt) }}
            </div>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon small v-bind="attrs" v-on="on">
                <v-icon small>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item @click="viewInvoice(item)">
                <v-list-item-icon>
                  <v-icon small color="info">mdi-eye</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ເບິ່ງລາຍລະອຽດ</v-list-item-title>
              </v-list-item>

              <v-list-item @click="editInvoice(item)">
                <v-list-item-icon>
                  <v-icon small color="warning">mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </v-card>

    <InvoiceHeaderMaintain :gl-accounts="glAccounts" :visible="showEditDialog" :invoice="selectedInvoice"
      :agencies="agencies.filter(agency => agency.agencyType != 'Employee')" :jobBatches="jobBatches"
      :currencies="currencies" @close="closeEditDialog" @save="onInvoiceSave" />

    <client-only>
      <InvoiceHeaderView :visible="showViewDialog" :invoice="selectedInvoice" @close="closeViewDialog" />
    </client-only>
  </div>
</template>

<script>
import InvoiceHeaderMaintain from '~/components/accounting/ar/invoice/maintain'
import InvoiceHeaderView from '~/components/accounting/ar/invoice/view'

export default {
  name: 'InvoiceHeaderSummary',
  components: {
    InvoiceHeaderMaintain,
    InvoiceHeaderView,
  },

  data() {
    return {
      glAccounts: [],
      showEditDialog: false,
      showViewDialog: false,
      selectedInvoice: null,
      invoices: [],
      filteredInvoices: [],
      customers: [],
      agencies: [],
      jobBatches: [],
      currencies: [],
      loading: false,

      filters: {
        search: '',
        agencyId: '',
        dateFrom: '',
        dateTo: '',
      },

      sort: {
        field: 'invoiceDate',
        direction: 'desc',
      },

      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      headers: [
        {
          text: 'ເລກທີໃບແຈ້ງໜີ້',
          value: 'invoiceNumber',
          sortable: true,
          width: '200px',
        },
        {
          text: 'ວັນທີແຈ້ງໜີ້',
          value: 'invoiceDate',
          sortable: true,
          width: '120px',
        },
        { text: 'ລູກຄ້າ', value: 'customer', sortable: false, width: '200px' },
        {
          text: 'ວັນທີຄົບກຳນົດ',
          value: 'dueDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ຍອດລວມ',
          value: 'totalAmount',
          sortable: true,
          align: 'end',
          width: '180px',
        },
        {
          text: 'ຍອດຊຳລະແລ້ວ',
          value: 'settledAmount',
          sortable: true,
          align: 'end',
          width: '180px',
        },
        {
          text: 'ຍອດຄ້າງຊຳລະ',
          value: 'outstandingAmount',
          sortable: true,
          align: 'end',
          width: '180px',
        },
        {
          text: 'ສະຖານະ',
          value: 'status',
          sortable: true,
          width: '120px',
          align: 'center',
        },
        { text: 'ຜູ້ສ້າງ', value: 'maker', sortable: false, width: '150px' },
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

    paginatedInvoices() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredInvoices.slice(start, end)
    },

    totalPages() {
      return Math.ceil(this.filteredInvoices.length / this.pagination.perPage)
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredInvoices.length
      )
      return {
        start: this.filteredInvoices.length > 0 ? start : 0,
        end,
        total: this.filteredInvoices.length,
      }
    },

    summaryTotals() {
      return this.filteredInvoices.reduce(
        (acc, invoice) => {
          acc.totalInvoices += (invoice.totalAmount || 0)
          acc.totalSettled += (invoice.settledAmount || 0)
          acc.totalOutstanding += (invoice.outstandingAmount || 0)

          if (this.getDueDateClass(invoice.dueDate, invoice.status) === 'overdue-date') {
            acc.totalOverdue += (invoice.outstandingAmount || 0)
          }

          return acc
        },
        { totalInvoices: 0, totalSettled: 0, totalOutstanding: 0, totalOverdue: 0 }
      )
    },
  },

  mounted() {
    // Set default dates before loading data
    this.setDefaultDates()
    this.fetchInvoices()
    this.fetchCustomers()
    this.fetchAgencies()
    this.fetchJobBatches()
    this.fetchCurrencies()
    this.fetchAccountCharts()
  },

  methods: {
    /**
     * Calculates the settled and outstanding amounts for each invoice.
     * @param {Array<Object>} invoices - The array of invoice objects from the API.
     * @returns {Array<Object>} The updated array of invoice objects.
     */
    calculateAmounts(invoices) {
      return invoices.map((invoice) => {
        // Calculate total settled amount from receiveHeaders
        const settledAmount = (invoice.receiveHeaders || []).reduce(
          (sum, header) => {
            // Use totalReceivedAmount from the header, as per the structure
            const totalReceived = header.totalReceivedAmount || 0;
            return sum + totalReceived;
          },
          0
        )

        const totalAmount = invoice.totalAmount || 0
        const outstandingAmount = totalAmount - settledAmount;

        return {
          ...invoice,
          settledAmount: settledAmount,
          outstandingAmount: outstandingAmount,
        }
      })
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
      this.filters.dateFrom = this.getCurrentMonthStart()
      this.filters.dateTo = this.getCurrentMonthEnd()
    },

    async fetchAccountCharts() {
      try {
        const { data } = await this.$axios.get('/api/accountChart/find')
        this.glAccounts = data || []
      } catch (error) {
        console.error(error)
      }
    },

    async fetchInvoices() {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/api/ar-invoices', {
          params: { page: 1, limit: 1000 },
        })

        if (data && data.success) {
          // Calculate amounts when data is fetched
          this.invoices = this.calculateAmounts(data.data.invoices || [])
        } else {
          this.invoices = []
        }

        this.applyFilters()
      } catch (error) {
        console.error(error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
      } finally {
        this.loading = false
      }
    },

    async fetchCustomers() {
      try {
        const { data } = await this.$axios.get('/api/client/find')
        this.customers = data || []
      } catch (error) {
        console.error(error)
      }
    },

    async fetchAgencies() {
      this.loadingAgencies = true
      try {
        const response = await this.$axios.$get('/api/agency')
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data
        }
      } catch (error) {
        console.error('Error fetching agencies:', error)
        this.$toast?.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ')
      } finally {
        this.loadingAgencies = false
      }
    },

    async fetchJobBatches() {
      try {
        const { data } = await this.$axios.get('/api/batch-job', {
          params: { include: 'mou' },
        })
        this.jobBatches = data.data.jobBatches || []
      } catch (error) {
        console.error(error)
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

    openCreateDialog() {
      this.selectedInvoice = null
      this.showEditDialog = true
    },

    editInvoice(invoice) {
      this.selectedInvoice = invoice
      this.showEditDialog = true
    },

    viewInvoice(invoice) {
      this.selectedInvoice = invoice
      this.showViewDialog = true
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedInvoice = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedInvoice = null
    },

    async onInvoiceSave(invoiceData) {
      try {
        this.loading = true

        let response
        if (this.selectedInvoice?.id) {
          response = await this.$axios.put(
            `/api/ar-invoices/${this.selectedInvoice.id}`,
            invoiceData
          )
        } else {
          response = await this.$axios.post('/api/ar-invoices', invoiceData)
        }

        if (response.data?.success) {
          this.$toast.success('ບັນທຶກສຳເລັດ')
          this.closeEditDialog()
          await this.fetchInvoices()
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
      let filtered = [...this.invoices]

      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (inv) =>
            inv.invoiceNumber.toLowerCase().includes(search) ||
            inv.description?.toLowerCase().includes(search) ||
            inv.customer?.name.toLowerCase().includes(search)
        )
      }

      if (this.filters.agencyId) {
        filtered = filtered.filter(
          (inv) => inv.agencyId == this.filters.agencyId // Corrected from customerId to agencyId
        )
      }

      if (this.filters.dateFrom || this.filters.dateTo) {
        filtered = filtered.filter((inv) => {
          const invoiceDate = new Date(inv.invoiceDate)
          const dateFrom = this.filters.dateFrom
            ? new Date(this.filters.dateFrom)
            : null
          const dateTo = this.filters.dateTo
            ? new Date(this.filters.dateTo)
            : null

          if (dateFrom && invoiceDate < dateFrom) return false
          if (dateTo && invoiceDate > dateTo) return false
          return true
        })
      }

      // Recalculate amounts on filtered data (although already done in fetch, this is safer for manipulation)
      this.filteredInvoices = this.calculateAmounts(filtered)
      this.pagination.currentPage = 1
    },

    resetFilters() {
      this.filters = {
        search: '',
        agencyId: '',
        dateFrom: this.getCurrentMonthStart(),
        dateTo: this.getCurrentMonthEnd(),
      }
      this.applyFilters()
    },

    updatePagination() {
      this.pagination.currentPage = 1
    },

    exportData() {
      // NOTE: Update convertToCSV if you want to include Settle and Outstanding amounts in export
      const csvData = this.convertToCSV(this.filteredInvoices)
      this.downloadCSV(csvData, 'invoices-export.csv')
    },

    convertToCSV(data) {
      const headers = [
        'Invoice Number',
        'Invoice Date',
        'Due Date',
        'Customer',
        'Total Amount',
        'Settled Amount', // Added to export
        'Outstanding Amount', // Added to export
        'Status',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            `"${row.invoiceNumber}"`,
            row.invoiceDate,
            row.dueDate || '',
            `"${row.agency?.agencyName || ''}"`, // Changed from customer?.name to agency?.agencyName
            row.totalAmount,
            row.settledAmount, // Added to export
            row.outstandingAmount, // Added to export
            row.status,
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
      if (amount === null || amount === undefined) return '0.00'
      // Ensure amount is a number before formatting
      return parseFloat(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    },

    formatStatus(status) {
      const labels = {
        draft: 'ແບບຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
      }
      return labels[status] || status
    },

    getStatusColor(status) {
      const colors = {
        draft: 'grey',
        sent: 'info',
        paid: 'success',
        overdue: 'error',
        cancelled: 'grey darken-2',
      }
      return colors[status] || 'grey'
    },

    getDueDateClass(dueDate, status) {
      if (!dueDate || status === 'paid' || status === 'cancelled') return ''

      const today = new Date()
      today.setHours(0, 0, 0, 0) // Normalize today

      const due = new Date(dueDate)
      due.setHours(0, 0, 0, 0) // Normalize due date

      if (due < today) return 'overdue-date'
      // Due in 7 days or less
      if (due <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000))
        return 'due-soon'
      return ''
    },
  },
}
</script>

<style scoped>
.analysis-header {
  background: var(--v-primary-base);
  color: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}


.ap-settlement-container {
  padding: 00px;
}

.filter-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.summary-card-premium {
  border-radius: 16px !important;
  background-color: white !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
}

.dashboard-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.modernize-table ::v-deep th {
  background-color: #f8fafc !important;
  color: #64748b !important;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
}

.modernize-table ::v-deep td {
  font-size: 0.875rem !important;
  padding: 12px 16px !important;
}

.font-monospace {
  font-family: 'JetBrains Mono', 'Roboto Mono', monospace !important;
}

.v-chip.font-weight-medium {
  font-size: 0.7rem !important;
  text-transform: uppercase;
  letter-spacing: 0.025em;
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

/* Export button styling */
.v-btn.success {
  background-color: #4caf50 !important;
  color: white !important;
}

.v-btn.success:hover {
  background-color: #45a049 !important;
}
</style>