<template>
  <div>
    <!-- Header Section -->
    <div class="primary analysis-header mb-6">
      <div class="d-flex align-center">
        <v-icon large color="white" class="mr-4">mdi-file-clock-outline</v-icon>
        <div>
          <h1 class="font-weight-bold mb-0 white--text">ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</h1>
          <p class="white--text opacity-80 mb-0">AP Invoice Management & Tracking</p>
        </div>
        <v-spacer />
        <v-btn color="white" light large depressed @click="openDialog()" class="rounded-lg">
          <v-icon left color="primary">mdi-plus</v-icon>
          <span class="primary--text font-weight-bold">ສ້າງໃບແຈ້ງໜີ້ໃໝ່</span>
        </v-btn>
      </div>
    </div>

    <!-- Summary Cards -->
    <v-row class="mb-6" dense>
      <v-col cols="12" md="3">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="primary lighten-5" rounded size="48">
                <v-icon color="primary">mdi-invoice-text-outline</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="text-caption grey--text font-weight-bold text-uppercase">Total AP Amount</div>
                <div class="text-h6 font-weight-bold uppercase">{{ formatCurrency(summaryTotals.totalAmount) }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="success lighten-5" rounded size="48">
                <v-icon color="success">mdi-check-circle-outline</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="text-caption grey--text font-weight-bold text-uppercase">Total Paid</div>
                <div class="text-h6 font-weight-bold success--text uppercase">{{ formatCurrency(summaryTotals.totalPaid)
                }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="warning lighten-5" rounded size="48">
                <v-icon color="warning">mdi-clock-outline</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="text-caption grey--text font-weight-bold text-uppercase">Outstanding</div>
                <div class="text-h6 font-weight-bold warning--text uppercase">{{
                  formatCurrency(summaryTotals.totalOutstanding) }}
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="summary-card" elevation="1">
          <v-card-text class="pa-4">
            <div class="d-flex align-center">
              <v-avatar color="error lighten-5" rounded size="48">
                <v-icon color="error">mdi-alert-circle-outline</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="text-caption grey--text font-weight-bold text-uppercase">Overdue Invoices</div>
                <div class="text-h6 font-weight-bold error--text">{{ summaryTotals.overdueCount }} Invoices</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters -->
    <v-card class="filter-card mb-6" elevation="1">
      <v-card-text class="pa-4">
        <v-row dense align="center">
          <v-col cols="12" md="2">
            <v-select v-model="statusFilter" :items="statusOptions" label="ສະຖານະ Status" outlined dense hide-details
              clearable prepend-inner-icon="mdi-filter-variant" @change="onFilterChange" />
          </v-col>
          <v-col cols="12" md="3">
            <v-select v-model="filters.vendorId" :items="agencies" item-text="agencyName" item-value="id"
              label="ຜູ້ຂາຍ Vendor" outlined dense hide-details clearable prepend-inner-icon="mdi-account-outline"
              @change="fetchData">
              <template v-slot:item="{ item }">
                <span>{{ item.agencyCode }} - {{ item.agencyName }}</span>
              </template>
            </v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.startDate" label="ວັນທີເລີ່ມ Start" type="date" outlined dense hide-details
              prepend-inner-icon="mdi-calendar-range" @change="fetchData" />
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.endDate" label="ວັນທີສິ້ນສຸດ End" type="date" outlined dense hide-details
              prepend-inner-icon="mdi-calendar-range" @change="fetchData" />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="searchTerm" label="ຄົ້ນຫາ Search..." outlined dense hide-details clearable
              prepend-inner-icon="mdi-magnify" @input="debounceSearch" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Data Table -->
    <v-row class="mt-3">
      <v-col cols="12">
        <v-card outlined class="filter-card">
          <v-card-title class="py-3 px-4">
            <v-icon class="mr-2" color="primary">mdi-table</v-icon>
            <span class=" font-weight-bold">ລາຍການໃບແຈ້ງໜີ້ (AP Invoice List)</span>
            <v-spacer />
            <v-chip color="primary" small outlined class="font-weight-bold">
              {{ pagination.totalItems }} ລາຍການ
            </v-chip>
          </v-card-title>

          <v-data-table :headers="headers" :items="invoices" :loading="loading" :options.sync="tableOptions"
            :server-items-length="pagination.totalItems" :footer-props="{
              'items-per-page-options': [10, 25, 50, 100],
            }" outlined class="elevation-0 modernize-table" loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ">

            <!-- Invoice Number -->
            <template v-slot:item.invoiceNumber="{ item }">
              <div class="py-2">
                <div class="font-weight-bold primary--text">{{ item.invoiceNumber }}</div>
                <v-chip v-if="isOverdue(item.dueDate) && item.status !== 'paid'" x-small color="error" outlined
                  class="mt-1 font-weight-bold">
                  <v-icon x-small left>mdi-alert-circle</v-icon>
                  OVERDUE
                </v-chip>
              </div>
            </template>

            <!-- Vendor Invoice Number -->
            <template v-slot:item.vendorInvoiceNumber="{ item }">
              <span class="grey--text text--darken-2">{{ item.vendorInvoiceNumber || '-' }}</span>
            </template>

            <!-- Vendor -->
            <template v-slot:item.vendor="{ item }">
              <div v-if="item.agency" class="py-2">
                <div class="font-weight-medium">
                  {{ item.agency.agencyName }}
                </div>
                <div class="text-caption grey--text">
                  Code: {{ item.agency.agencyCode }}
                </div>
              </div>
              <span v-else class="grey--text italic">ບໍ່ໄດ້ລະບຸ</span>
            </template>

            <!-- Invoice Date -->
            <template v-slot:item.invoiceDate="{ item }">
              <span>{{ formatDate(item.invoiceDate) }}</span>
            </template>

            <!-- Due Date -->
            <template v-slot:item.dueDate="{ item }">
              <span :class="{ 'error--text font-weight-bold': isOverdue(item.dueDate) && item.status !== 'paid' }">
                {{ formatDate(item.dueDate) }}
              </span>
            </template>

            <!-- Total Amount -->
            <template v-slot:item.totalAmount="{ item }">
              <div class="text-right">
                <div class="font-weight-bold font-monospace">
                  {{ formatCurrency(item.totalAmount) }}
                </div>
                <div v-if="item.currency" class="text-caption grey--text">
                  {{ item.currency.code }}
                </div>
              </div>
            </template>

            <!-- Paid Amount -->
            <template v-slot:item.paidAmount="{ item }">
              <div class="text-right success--text font-weight-medium font-monospace">
                {{ formatCurrency(item.paidAmount) }}
              </div>
            </template>

            <!-- Outstanding Amount -->
            <template v-slot:item.outstandingAmount="{ item }">
              <div class="text-right warning--text font-weight-bold font-monospace">
                {{ formatCurrency(getOutstandingAmount(item)) }}
              </div>
            </template>

            <!-- Status -->
            <template v-slot:item.status="{ item }">
              <v-chip small outlined :color="getStatusColor(item.status)" class="font-weight-medium">
                <v-icon x-small left>{{ getStatusIcon(item.status) }}</v-icon>
                {{ getStatusInLao(item.status) }}
              </v-chip>
            </template>

            <!-- Maker -->
            <template v-slot:item.maker="{ item }">
              <div class="d-flex align-center">
                <v-avatar size="24" color="grey lighten-3" class="mr-2">
                  <v-icon x-small>mdi-account</v-icon>
                </v-avatar>
                <span class="text-caption">
                  {{ item.maker ? item.maker.cus_name : 'N/A' }}
                </span>
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
                  <v-list-item @click="viewDetails(item)" class="px-3">
                    <v-list-item-icon class="mr-3">
                      <v-icon small color="info">mdi-eye-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ເບິ່ງລາຍລະອຽດ</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="['draft', 'pending'].includes(item.status)" @click="openDialog(item)" class="px-3">
                    <v-list-item-icon class="mr-3">
                      <v-icon small color="warning">mdi-pencil-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="item.status === 'pending'" @click="approveInvoice(item)" class="px-3">
                    <v-list-item-icon class="mr-3">
                      <v-icon small color="success">mdi-check-circle-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ອະນຸມັດ</v-list-item-title>
                  </v-list-item>

                  <v-divider v-if="item.status !== 'cancelled'" />

                  <v-list-item v-if="item.status !== 'cancelled'" @click="cancelInvoice(item)" class="px-3">
                    <v-list-item-icon class="mr-3">
                      <v-icon small color="error">mdi-close-circle-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="error--text">ຍົກເລີກ</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog Component -->
    <APInvoiceDialog :visible="showDialog" :invoice="selectedInvoice" :agencies="agencies" :currencies="currencies"
      :gl-accounts="glAccounts" :user="user" @close="closeDialog" @save="saveInvoice" />

    <!-- Detail Dialog -->
    <v-dialog v-model="showDetailModal" max-width="700px">
      <v-card class="rounded-lg overflow-hidden">
        <v-card-title class="primary white--text py-3 px-4">
          <v-icon color="white" class="mr-2">mdi-information-outline</v-icon>
          <span class="text-h6">ລາຍລະອຽດໃບແຈ້ງໜີ້ (Invoice Details)</span>
          <v-spacer />
          <v-btn icon dark @click="closeDetailModal" small>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-0">
          <v-progress-linear v-if="detailLoading" indeterminate color="primary" />

          <div v-else-if="invoiceDetails" class="pa-4">
            <v-row>
              <v-col cols="12" md="6">
                <div class="text-caption grey--text font-weight-bold uppercase mb-1">Invoice Info</div>
                <div class="d-flex justify-space-between mb-1">
                  <span class="grey--text text--darken-1">ເລກທີໃບແຈ້ງໜີ້:</span>
                  <span class="font-weight-bold">{{ invoiceDetails.invoiceNumber }}</span>
                </div>
                <div class="d-flex justify-space-between mb-1">
                  <span class="grey--text text--darken-1">ເລກທີຜູ້ຂາຍ:</span>
                  <span>{{ invoiceDetails.vendorInvoiceNumber || '-' }}</span>
                </div>
                <div class="d-flex justify-space-between mb-1">
                  <span class="grey--text text--darken-1">ວັນທີ:</span>
                  <span>{{ formatDate(invoiceDetails.invoiceDate) }}</span>
                </div>
                <div class="d-flex justify-space-between">
                  <span class="grey--text text--darken-1">ວັນທີຄົບກຳນົດ:</span>
                  <span :class="{ 'error--text font-weight-bold': isOverdue(invoiceDetails.dueDate) }">
                    {{ formatDate(invoiceDetails.dueDate) }}
                  </span>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-caption grey--text font-weight-bold uppercase mb-1">Vendor & Status</div>
                <div class="mb-1">
                  <div class="grey--text text--darken-1 text-caption">ຜູ້ຂາຍ (Vendor):</div>
                  <div class="font-weight-bold">
                    {{ invoiceDetails.agency?.agencyCode }} - {{ invoiceDetails.agency?.agencyName || 'N/A' }}
                  </div>
                </div>
                <div class="d-flex align-center mt-2">
                  <span class="grey--text text--darken-1 mr-2 text-caption">ສະຖານະ:</span>
                  <v-chip x-small :color="getStatusColor(invoiceDetails.status)" outlined class="font-weight-bold">
                    {{ getStatusInLao(invoiceDetails.status) }}
                  </v-chip>
                </div>
              </v-col>
            </v-row>

            <v-divider class="my-4"></v-divider>

            <div class="text-caption grey--text font-weight-bold uppercase mb-2">Financial Summary</div>
            <v-card outlined class="bg-light pa-3">
              <v-row dense>
                <v-col cols="4" class="text-center">
                  <div class="text-caption grey--text">Total Amount</div>
                  <div class="font-weight-bold font-monospace">{{ formatCurrency(invoiceDetails.totalAmount) }}</div>
                </v-col>
                <v-col cols="4" class="text-center border-left">
                  <div class="text-caption grey--text">Paid Amount</div>
                  <div class="font-weight-bold success--text font-monospace">{{
                    formatCurrency(invoiceDetails.paidAmount) }}
                  </div>
                </v-col>
                <v-col cols="4" class="text-center border-left">
                  <div class="text-caption grey--text">Outstanding</div>
                  <div class="font-weight-bold warning--text font-monospace">{{
                    formatCurrency(getOutstandingAmount(invoiceDetails)) }}</div>
                </v-col>
              </v-row>
            </v-card>

            <div v-if="invoiceDetails.description" class="mt-4">
              <div class="text-caption grey--text font-weight-bold uppercase mb-1">Description</div>
              <p class="text-body-2 grey--text text--darken-2 pa-2 bg-light rounded border">{{
                invoiceDetails.description }}
              </p>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDetailModal">
            ປິດ (Close)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import APInvoiceDialog from '~/components/accounting/ap/invoice/index.vue'
import { swalConfirm } from '~/common'

export default {
  name: 'APInvoiceManagement',
  components: { APInvoiceDialog },

  data() {
    return {
      statusFilter: '',
      statusOptions: [
        { text: 'ຮ່າງ', value: 'draft' },
        { text: 'ຄ້າງອະນຸມັດ', value: 'pending' },
        { text: 'ອະນຸມັດແລ້ວ', value: 'approved' },
        { text: 'ຊຳລະບາງສ່ວນ', value: 'partially_paid' },
        { text: 'ຊຳລະແລ້ວ', value: 'paid' },
        { text: 'ເກີນກຳນົດ', value: 'overdue' },
        { text: 'ຍົກເລີກ', value: 'cancelled' },
      ],
      statusLabels: {
        draft: 'ຮ່າງ',
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        partially_paid: 'ຊຳລະບາງສ່ວນ',
        paid: 'ຊຳລະແລ້ວ',
        overdue: 'ເກີນກຳນົດ',
        cancelled: 'ຍົກເລີກ',
      },
      invoices: [],
      agencies: [],
      glAccounts: [],
      currencies: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10,
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 25,
        sortBy: [],
        sortDesc: [],
      },
      filters: {
        status: '',
        vendorId: '',
        startDate: '',
        endDate: '',
      },
      searchTerm: '',
      loading: false,
      detailLoading: false,
      showDialog: false,
      showDetailModal: false,
      selectedInvoice: null,
      invoiceDetails: null,
      searchTimeout: null,

      headers: [
        {
          text: 'ເລກທີໃບແຈ້ງໜີ້',
          value: 'invoiceNumber',
          sortable: true,
          width: '150px',
        },
        {
          text: 'ເລກທີຜູ້ຂາຍ',
          value: 'vendorInvoiceNumber',
          sortable: false,
          width: '120px',
        },
        {
          text: 'ຜູ້ຂາຍ / Agency',
          value: 'vendor',
          sortable: false,
          width: '180px',
        },
        {
          text: 'ວັນທີໃບແຈ້ງໜີ້',
          value: 'invoiceDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ວັນທີຄົບກຳນົດ',
          value: 'dueDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ຈຳນວນເງິນລວມ',
          value: 'totalAmount',
          sortable: true,
          align: 'end',
          width: '130px',
        },
        {
          text: 'ຈຳນວນທີ່ຈ່າຍແລ້ວ',
          value: 'paidAmount',
          sortable: true,
          align: 'end',
          width: '130px',
        },
        {
          text: 'ຍອດຄ້າງຈ່າຍ',
          value: 'outstandingAmount',
          sortable: false,
          align: 'end',
          width: '130px',
        },
        {
          text: 'ສະຖານະ',
          value: 'status',
          sortable: true,
          width: '120px',
          align: 'center',
        },
        {
          text: 'ຜູ້ລົງບັນຊີ',
          value: 'maker',
          sortable: false,
          width: '120px',
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
      return this.$auth.user || null
    },
    summaryTotals() {
      const summary = {
        totalAmount: 0,
        totalPaid: 0,
        totalOutstanding: 0,
        overdueCount: 0
      }

      this.invoices.forEach(invoice => {
        const total = parseFloat(invoice.totalAmount || 0)
        const paid = parseFloat(invoice.paidAmount || 0)
        const outstanding = total - paid

        summary.totalAmount += total
        summary.totalPaid += paid
        summary.totalOutstanding += outstanding

        if (this.isOverdue(invoice.dueDate) && invoice.status !== 'paid') {
          summary.overdueCount++
        }
      })

      return summary
    }
  },

  watch: {
    tableOptions: {
      handler() {
        this.fetchData()
      },
      deep: true,
    },
  },

  async mounted() {
    // Set default dates before loading data
    this.setDefaultDates()
    await this.loadInitialData()
  },

  methods: {
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
      this.filters.startDate = this.getCurrentMonthStart()
      this.filters.endDate = this.getCurrentMonthEnd()
    },

    getStatusInLao(status) {
      return this.statusLabels[status] || status.toUpperCase()
    },

    getStatusColor(status) {
      const colors = {
        draft: 'grey',
        pending: 'orange',
        approved: 'green',
        partially_paid: 'blue',
        paid: 'teal',
        overdue: 'red',
        cancelled: 'grey darken-2',
      }
      return colors[status] || 'grey'
    },

    getStatusIcon(status) {
      const icons = {
        draft: 'mdi-file-edit-outline',
        pending: 'mdi-clock-outline',
        approved: 'mdi-check-circle-outline',
        partially_paid: 'mdi-minus-circle-outline',
        paid: 'mdi-checkbox-marked-circle-outline',
        overdue: 'mdi-alert-circle-outline',
        cancelled: 'mdi-close-circle-outline',
      }
      return icons[status] || 'mdi-help-circle-outline'
    },

    getOutstandingAmount(invoice) {
      return (
        parseFloat(invoice.totalAmount || 0) -
        parseFloat(invoice.paidAmount || 0)
      )
    },

    isOverdue(dueDate) {
      if (!dueDate) return false
      return new Date(dueDate) < new Date()
    },

    async loadInitialData() {
      await Promise.all([
        this.fetchAgencies(),
        this.fetchCurrencies(),
        this.fetchAccountCharts(),
      ])
    },

    async fetchData() {
      this.loading = true
      try {
        const params = {
          page: this.tableOptions.page,
          limit: this.tableOptions.itemsPerPage,
          ...this.filters,
        }

        if (this.statusFilter) params.status = this.statusFilter
        if (this.searchTerm) params.search = this.searchTerm

        const { data } = await this.$axios.get('/api/ap-invoices', { params })
        this.invoices = data.data.invoices
        this.pagination = data.data.pagination
      } catch (error) {
        console.error(error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
      } finally {
        this.loading = false
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
        this.$toast.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ')
      } finally {
        this.loadingAgencies = false
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

    openDialog(invoice = null) {
      this.selectedInvoice = invoice
      this.showDialog = true
    },

    closeDialog() {
      this.showDialog = false
      this.selectedInvoice = null
    },

    async viewDetails(invoice) {
      this.selectedInvoice = invoice
      this.showDetailModal = true
      this.detailLoading = true

      try {
        const { data } = await this.$axios.get(`/api/ap-invoices/${invoice.id}`)
        this.invoiceDetails = data.data
      } catch (error) {
        console.error(error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍລະອຽດໄດ້')
      } finally {
        this.detailLoading = false
      }
    },

    closeDetailModal() {
      this.showDetailModal = false
      this.invoiceDetails = null
    },

    async saveInvoice(formData) {
      try {
        const auditContext = {
          reason:
            formData.reason ||
            (formData.id ? 'Updated invoice' : 'Created new invoice'),
          userId: this.user?.id,
        }

        if (formData.id) {
          await this.$axios.put(`/api/ap-invoices/${formData.id}`, {
            ...formData,
            ...auditContext,
          })
          this.$toast.success('ອັບເດດສຳເລັດ')
        } else {
          await this.$axios.post('/api/ap-invoices', {
            ...formData,
            ...auditContext,
          })
          this.$toast.success('ສ້າງສຳເລັດ')
        }

        this.closeDialog()
        await this.fetchData()
      } catch (error) {
        console.error(error)
        this.$toast.error(error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດ')
      }
    },

    async approveInvoice(invoice) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການອະນຸມັດ',
          `ທ່ານຕ້ອງການອະນຸມັດໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ແມ່ນບໍ່?`,
          'question'
        )

        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices/${invoice.id}/approve`, {
            checkerId: this.user.id,
            reason: 'Approved by manager',
          })
          this.$toast.success('ອະນຸມັດສຳເລັດ')
          await this.fetchData()
        }
      } catch (error) {
        console.error(error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ')
      }
    },

    async cancelInvoice(invoice) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການຍົກເລີກ',
          `ທ່ານຕ້ອງການຍົກເລີກໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ແມ່ນບໍ່?`,
          'warning'
        )

        if (result.isConfirmed) {
          await this.$axios.post(`/api/ap-invoices/${invoice.id}/cancel`, {
            reason: 'Cancelled by user',
          })
          this.$toast.success('ຍົກເລີກສຳເລັດ')
          await this.fetchData()
        }
      } catch (error) {
        console.error(error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ')
      }
    },

    onFilterChange() {
      this.filters.status = this.statusFilter
      this.tableOptions.page = 1
      this.fetchData()
    },

    resetFilters() {
      this.filters = {
        status: '',
        vendorId: '',
        startDate: this.getCurrentMonthStart(),
        endDate: this.getCurrentMonthEnd()
      }
      this.searchTerm = ''
      this.statusFilter = ''
      this.tableOptions.page = 1
      this.fetchData()
    },

    debounceSearch() {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.tableOptions.page = 1
        this.fetchData()
      }, 500)
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount || 0)
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('en-GB')
    },
  },
}
</script>

<style scoped>
.analysis-header {
  background: var(--v-primary-base);
  color: white;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.filter-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.summary-card {
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #e2e8f0;
}

.summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.05);
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
</style>