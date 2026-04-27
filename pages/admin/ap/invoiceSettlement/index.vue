<template>
  <div>
    <!-- Header Section -->
    <div class="primary analysis-header mb-6">
      <div class="d-flex align-center">
        <v-icon large color="white" class="mr-4">mdi-cash-multiple</v-icon>
        <div>
          <h1 class="font-weight-bold mb-0 white--text">ການຊຳລະໜີ້ (AP Settlement)</h1>
          <p class="white--text opacity-80 mb-0">AP Settlement & Payment Tracking</p>
        </div>
        <v-spacer />
        <v-btn color="white" text @click="refreshData" :loading="loading" class="mr-2">
          <v-icon left>mdi-refresh</v-icon>ໂຫຼດໃໝ່
        </v-btn>
        <v-btn color="success" outlined dark @click="exportToExcel" :loading="exporting" class="mr-2 white"
          elevation="0">
          <v-icon left>mdi-file-excel</v-icon>ສົ່ງອອກ Excel
        </v-btn>
        <v-btn color="white" light large depressed @click="openDialog()" class="rounded-lg">
          <v-icon left color="primary">mdi-plus</v-icon>
          <span class="primary--text font-weight-bold">ເພີ່ມໃໝ່</span>
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
                <v-icon color="primary">mdi-cash-multiple</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">Total Settlement Amount</div>
                <div class="font-weight-bold uppercase">{{ formatCurrency(summaryTotals.totalAmount) }}</div>
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
                <div class="grey--text font-weight-bold text-uppercase">Completed Settlements</div>
                <div class="font-weight-bold success--text uppercase">{{ formatCurrency(summaryTotals.totalCompleted) }}
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
              <v-avatar color="warning lighten-5" rounded size="48">
                <v-icon color="warning">mdi-clock-outline</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">Pending Approval</div>
                <div class="font-weight-bold warning--text uppercase">{{ formatCurrency(summaryTotals.totalPending) }}
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
                <v-icon color="error">mdi-close-circle-outline</v-icon>
              </v-avatar>
              <div class="ml-4">
                <div class="grey--text font-weight-bold text-uppercase">Cancelled</div>
                <div class="font-weight-bold error--text">{{ summaryTotals.cancelledCount }} records</div>
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
            <v-select v-model="statusFilter" :items="statusOptions" label="ສະຖານະ" outlined dense hide-details clearable
              prepend-inner-icon="mdi-flag" @change="onFilterChange" />
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.startDate" label="ວັນທີເລີ່ມຕົ້ນ" type="date" outlined dense hide-details
              prepend-inner-icon="mdi-calendar-start" @change="fetchData" />
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field v-model="filters.endDate" label="ວັນທີສິ້ນສຸດ" type="date" outlined dense hide-details
              prepend-inner-icon="mdi-calendar-end" @change="fetchData" />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="searchTerm" label="ຄົ້ນຫາອ້າງອີງ" outlined dense hide-details clearable
              prepend-inner-icon="mdi-magnify" @input="debounceSearch" />
          </v-col>
          <v-col cols="12" md="2">
            <v-btn color="info" outlined block @click="getOutstandingInvoices()">
              <v-icon left small>mdi-file-invoice</v-icon>
              ໃບແຈ້ງໜີ້ຄ້າງ
            </v-btn>
          </v-col>
          <v-col cols="12" md="1">
            <v-btn color="secondary" outlined block @click="resetFilters">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
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
            <span class="font-weight-bold">ລາຍການການຊຳລະ</span>
            <v-spacer />
            <v-chip color="primary" small outlined class="font-weight-bold">
              {{ pagination.totalItems }} ລາຍການ
            </v-chip>
          </v-card-title>

          <v-data-table :headers="headers" :items="settlements" :loading="loading" :options.sync="tableOptions"
            :server-items-length="pagination.totalItems" :footer-props="{
              'items-per-page-options': [10, 25, 50, 100],
            }" outlined class="elevation-0 modernize-table" loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ">
            <!-- ID -->
            <template v-slot:item.id="{ item }">
              <span class="font-weight-bold">#{{ item.id }}</span>
            </template>

            <!-- Settlement Date -->
            <template v-slot:item.settlementDate="{ item }">
              <span class="">{{
                formatDate(item.settlementDate)
              }}</span>
            </template>

            <!-- Payment Amount -->
            <template v-slot:item.paymentAmount="{ item }">
              <div class="text-right font-weight-bold">
                {{ formatCurrency(item.paymentAmount) }}
                <br>
                <small class="grey--text">{{ item.currency?.code || 'LAK' }}</small>
              </div>
            </template>

            <!-- Base Amount -->
            <template v-slot:item.baseAmount="{ item }">
              <div class="text-right">
                {{ formatCurrency(item.baseAmount) }}
                <br>
                <small class="grey--text">LAK</small>
              </div>
            </template>

            <!-- Status -->
            <template v-slot:item.status="{ item }">
              <v-chip small outlined :color="getStatusColor(item.status)" class="font-weight-medium">
                {{ getStatusInLao(item.status) }}
              </v-chip>
            </template>

            <!-- Reference -->
            <template v-slot:item.reference="{ item }">
              <span class="">{{ item.reference || 'N/A' }}</span>
            </template>

            <!-- Description -->
            <template v-slot:item.description="{ item }">
              <span class=" grey--text">
                {{ item.description || 'N/A' }}
              </span>
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
                  <v-list-item @click="viewDetails(item)">
                    <v-list-item-icon>
                      <v-icon small color="info">mdi-eye</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ເບິ່ງລາຍລະອຽດ</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="['draft', 'pending'].includes(item.status)" @click="openDialog(item)">
                    <v-list-item-icon>
                      <v-icon small color="warning">mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="item.status === 'pending'" @click="approveSettlement(item)">
                    <v-list-item-icon>
                      <v-icon small color="success">mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ອະນຸມັດ</v-list-item-title>
                  </v-list-item>

                  <v-list-item v-if="item.status === 'approved'" @click="completeSettlement(item)">
                    <v-list-item-icon>
                      <v-icon small color="primary">mdi-check-all</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ສຳເລັດ</v-list-item-title>
                  </v-list-item>

                  <v-divider v-if="
                    ['draft', 'pending', 'approved'].includes(item.status)
                  " />

                  <v-list-item v-if="
                    ['draft', 'pending', 'approved'].includes(item.status)
                  " @click="cancelSettlement(item)">
                    <v-list-item-icon>
                      <v-icon small color="error">mdi-close</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ຍົກເລີກ</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Settlement Dialog -->
    <SettlementDialog :visible="showDialog" :currencies="currencies" :settlement="selectedSettlement"
      :gl-accounts="glAccounts" :outstanding-invoices="outstandingInvoices" :user="user" @close="closeDialog"
      @save="saveSettlement" />

    <!-- Outstanding Invoices Dialog -->
    <v-dialog v-model="showOutstandingModal" max-width="900px" scrollable>
      <v-card>
        <v-card-title class="primary ma-2">
          <v-icon color="white" class="mr-2">mdi-file-invoice</v-icon>
          ໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ
          <v-spacer />
          <v-btn icon dark @click="closeOutstandingModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-progress-linear v-if="outstandingLoading" indeterminate color="primary" />

          <div v-else>
            <!-- Filters -->
            <v-row dense class="mb-3">
              <v-col cols="12" md="6">
                <v-select v-model="outstandingFilters.vendorId" :items="agencies" item-text="name" item-value="id"
                  label="ຜູ້ຂາຍ" outlined dense clearable prepend-inner-icon="mdi-account"
                  @change="getOutstandingInvoices(false)" />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="outstandingSearch" label="ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້" outlined dense clearable
                  prepend-inner-icon="mdi-magnify" @input="filterOutstandingInvoices" />
              </v-col>
            </v-row>

            <!-- Outstanding Invoices Table -->
            <v-data-table :headers="outstandingHeaders" :items="filteredOutstandingInvoices" :items-per-page="10"
              class="elevation-1" dense>
              <template v-slot:item.invoiceNumber="{ item }">
                <span class="font-weight-medium">{{ item.invoiceNumber }}</span>
              </template>

              <template v-slot:item.vendor="{ item }">
                <span class="">{{
                  item.vendor?.name || 'N/A'
                }}</span>
              </template>

              <template v-slot:item.dueDate="{ item }">
                <span class="">{{ formatDate(item.dueDate) }}</span>
              </template>

              <template v-slot:item.outstandingAmount="{ item }">
                <span class="font-weight-bold">
                  {{ formatCurrency(item.outstandingAmount) }}
                </span>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-btn small color="primary" @click="selectInvoiceForSettlement(item)">
                  <v-icon small left>mdi-plus</v-icon>
                  ເລືອກ
                </v-btn>
              </template>
            </v-data-table>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Detail Dialog -->
    <v-dialog v-model="showDetailModal" max-width="700px" scrollable>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon color="white" class="mr-2">mdi-information</v-icon>
          ລາຍລະອຽດການຊຳລະ
          <v-spacer />
          <v-btn icon dark @click="closeDetailModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-progress-linear v-if="detailLoading" indeterminate color="primary" />

          <div v-else-if="settlementDetails">
            <!-- Basic Info -->
            <v-simple-table dense>
              <tbody>
                <tr>
                  <td class="font-weight-bold" width="40%">ID ການຊຳລະ:</td>
                  <td>#{{ settlementDetails.id }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ວັນທີຊຳລະ:</td>
                  <td>{{ formatDate(settlementDetails.settlementDate) }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ຈຳນວນເງິນຊຳລະ:</td>
                  <td class="font-weight-bold">
                    {{ formatCurrency(settlementDetails.paymentAmount) }}
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ຈຳນວນເງິນພື້ນຖານ:</td>
                  <td>{{ formatCurrency(settlementDetails.baseAmount) }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ສະຖານະ:</td>
                  <td>
                    <v-chip x-small :color="getStatusColor(settlementDetails.status)" text-color="white">
                      {{ getStatusInLao(settlementDetails.status) }}
                    </v-chip>
                  </td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ອ້າງອີງ:</td>
                  <td>{{ settlementDetails.reference || 'N/A' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ຄຳອະທິບາຍ:</td>
                  <td>{{ settlementDetails.description || 'N/A' }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">ໝາຍເຫດ:</td>
                  <td>{{ settlementDetails.note || 'N/A' }}</td>
                </tr>
              </tbody>
            </v-simple-table>

            <!-- Invoice Allocations -->
            <div v-if="settlementDetails.invoiceSettlements?.length > 0" class="mt-4">
              <v-divider class="mb-3" />
              <h4 class="mb-3">ການຈັດສັນໃບແຈ້ງໜີ້</h4>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th>ເລກທີໃບແຈ້ງໜີ້</th>
                    <th class="text-right">ຈຳນວນທີ່ຈັດສັນ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="allocation in settlementDetails.invoiceSettlements" :key="allocation.id">
                    <td>{{ getInvoiceNumber(allocation) }}</td>
                    <td class="text-right font-weight-medium">
                      {{ formatCurrency(allocation.amount) }}
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Export Progress Snackbar -->
    <v-snackbar v-model="showExportProgress" :timeout="-1" color="info" bottom right>
      <v-icon left>mdi-download</v-icon>
      ກຳລັງສ້າງໄຟລ້ Excel...
      <v-progress-linear indeterminate color="white" class="mb-0 mt-2"></v-progress-linear>
    </v-snackbar>
  </div>
</template>

<script>
import SettlementDialog from '~/components/accounting/ap/settlement/index.vue'
import { swalConfirm } from '~/common'

export default {
  name: 'SettlementManagement',
  components: { SettlementDialog },

  data() {
    return {
      glAccounts: [],
      currencies: [],
      statusFilter: '',
      statusOptions: [
        { text: 'ຮ່າງ', value: 'draft' },
        { text: 'ຄ້າງອະນຸມັດ', value: 'pending' },
        { text: 'ອະນຸມັດແລ້ວ', value: 'approved' },
        { text: 'ສຳເລັດແລ້ວ', value: 'completed' },
        { text: 'ຍົກເລີກ', value: 'cancelled' },
      ],
      statusLabels: {
        draft: 'ຮ່າງ',
        pending: 'ຄ້າງອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        completed: 'ສຳເລັດແລ້ວ',
        cancelled: 'ຍົກເລີກ',
      },
      settlements: [],
      agencies: [],
      outstandingInvoices: [],
      filteredOutstandingInvoices: [],
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
        startDate: '',
        endDate: '',
      },
      outstandingFilters: {
        vendorId: '',
      },
      searchTerm: '',
      outstandingSearch: '',
      loading: false,
      exporting: false,
      showExportProgress: false,
      detailLoading: false,
      outstandingLoading: false,
      showDialog: false,
      showDetailModal: false,
      showOutstandingModal: false,
      selectedSettlement: null,
      settlementDetails: null,
      searchTimeout: null,

      headers: [
        { text: 'ID', value: 'id', sortable: true, width: '80px' },
        {
          text: 'ວັນທີຊຳລະ',
          value: 'settlementDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ຈຳນວນເງິນຊຳລະ',
          value: 'paymentAmount',
          sortable: true,
          align: 'end',
          width: '150px',
        },
        {
          text: 'ຈຳນວນເງິນພື້ນຖານ',
          value: 'baseAmount',
          sortable: true,
          align: 'end',
          width: '150px',
        },
        {
          text: 'ສະຖານະ',
          value: 'status',
          sortable: true,
          width: '120px',
          align: 'center',
        },
        {
          text: 'ອ້າງອີງ',
          value: 'reference',
          sortable: false,
          width: '150px',
        },
        {
          text: 'ຄຳອະທິບາຍ',
          value: 'description',
          sortable: false,
          width: '200px',
        },
        {
          text: 'ຟັງຊັ່ນ',
          value: 'actions',
          sortable: false,
          width: '80px',
          align: 'center',
        },
      ],

      outstandingHeaders: [
        { text: 'ເລກທີໃບແຈ້ງໜີ້', value: 'invoiceNumber', sortable: true },
        { text: 'ຜູ້ຂາຍ', value: 'vendor', sortable: false },
        { text: 'ວັນທີຄົບກຳນົດ', value: 'dueDate', sortable: true },
        {
          text: 'ຍອດຄ້າງຈ່າຍ',
          value: 'outstandingAmount',
          sortable: true,
          align: 'end',
        },
        {
          text: 'ເລືອກ',
          value: 'actions',
          sortable: false,
          align: 'center',
          width: '120px',
        },
      ],
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },
    summaryTotals() {
      const summary = {
        totalAmount: 0,
        totalCompleted: 0,
        totalPending: 0,
        cancelledCount: 0
      }

      this.settlements.forEach(s => {
        const amount = parseFloat(s.paymentAmount || 0)
        summary.totalAmount += amount
        if (s.status === 'completed' || s.status === 'approved') {
          summary.totalCompleted += amount
        } else if (s.status === 'pending') {
          summary.totalPending += amount
        } else if (s.status === 'cancelled') {
          summary.cancelledCount++
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

  created() {
    this.getOutstandingInvoices(false)
    this.fetchAccountCharts()
  },

  methods: {
    // NEW METHOD: Refresh data
    async refreshData() {
      try {
        this.$toast.info('ກຳລັງໂຫຼດຂໍ້ມູນໃໝ່...')
        await Promise.all([
          this.fetchData(),
          this.getOutstandingInvoices(false),
          this.fetchAgencies(),
          this.fetchCurrencies()
        ])
        this.$toast.success('ໂຫຼດຂໍ້ມູນໃໝ່ສຳເລັດ')
      } catch (error) {
        console.error('Error refreshing data:', error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນໃໝ່')
      }
    },

    // NEW METHOD: Export to Excel
    async exportToExcel() {
      this.exporting = true
      this.showExportProgress = true

      try {
        // Prepare export parameters
        const exportParams = {
          ...this.filters,
          status: this.statusFilter,
          search: this.searchTerm,
          export: true,
          // Get all data for export (remove pagination)
          page: 1,
          limit: this.pagination.totalItems || 1000
        }

        // Create filename with current date
        const currentDate = new Date().toISOString().split('T')[0]
        const filename = `AP_Settlement_Report_${currentDate}.xlsx`

        // Method 1: If your API supports direct Excel export
        try {
          const response = await this.$axios.get('/api/ap-invoices-settlement/export', {
            params: exportParams,
            responseType: 'blob'
          })

          this.downloadBlob(response.data, filename)
          this.$toast.success('ສົ່ງອອກ Excel ສຳເລັດ')
          return
        } catch (apiError) {
          console.log('API export not available, using client-side export')
        }

        // Method 2: Client-side Excel generation if API doesn't support export
        const { data } = await this.$axios.get('/api/ap-invoices-settlement', {
          params: exportParams
        })

        const settlements = data.data.settlements || []
        await this.generateExcelFromData(settlements, filename)

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

    // Client-side Excel generation
    async generateExcelFromData(settlements, filename) {
      // This requires installing xlsx library: npm install xlsx
      // If not available, we'll create a CSV instead

      try {
        // Try to use XLSX if available
        const XLSX = await import('xlsx')

        const exportData = settlements.map((settlement, index) => ({
          'ລຳດັບ': index + 1,
          'ID ການຊຳລະ': settlement.id,
          'ວັນທີຊຳລະ': this.formatDate(settlement.settlementDate),
          'ຈຳນວນເງິນຊຳລະ': settlement.paymentAmount,
          'ສະກຸນເງິນ': settlement.currency?.code || 'LAK',
          'ຈຳນວນເງິນພື້ນຖານ (LAK)': settlement.baseAmount,
          'ອັດຕາແລກປ່ຽນ': settlement.exchangeRate,
          'ສະຖານະ': this.getStatusInLao(settlement.status),
          'ອ້າງອີງ': settlement.reference || '',
          'ຄຳອະທິບາຍ': settlement.description || '',
          'ໝາຍເຫດ': settlement.note || '',
          'ຜູ້ສ້າງ': settlement.maker?.cus_name || '',
          'ວັນທີສ້າງ': this.formatDate(settlement.createdAt),
          'ຜູ້ກວດສອບ': settlement.checker?.cus_name || '',
          'ຈຳນວນໃບແຈ້ງໜີ້': settlement.invoiceSettlements?.length || 0
        }))

        const worksheet = XLSX.utils.json_to_sheet(exportData)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, 'AP Settlements')

        // Add some styling
        const wscols = [
          { wch: 8 }, // ລຳດັບ
          { wch: 12 }, // ID
          { wch: 12 }, // ວັນທີຊຳລະ
          { wch: 15 }, // ຈຳນວນເງິນຊຳລະ
          { wch: 10 }, // ສະກຸນເງິນ
          { wch: 18 }, // ຈຳນວນເງິນພື້ນຖານ
          { wch: 12 }, // ອັດຕາແລກປ່ຽນ
          { wch: 12 }, // ສະຖານະ
          { wch: 15 }, // ອ້າງອີງ
          { wch: 25 }, // ຄຳອະທິບາຍ
          { wch: 20 }, // ໝາຍເຫດ
          { wch: 15 }, // ຜູ້ສ້າງ
          { wch: 15 }, // ວັນທີສ້າງ
          { wch: 15 }, // ຜູ້ກວດສອບ
          { wch: 12 }  // ຈຳນວນໃບແຈ້ງໜີ້
        ]
        worksheet['!cols'] = wscols

        XLSX.writeFile(workbook, filename)

      } catch (xlsxError) {
        // Fallback to CSV if XLSX not available
        console.log('XLSX not available, generating CSV')
        await this.generateCSVFromData(settlements, filename.replace('.xlsx', '.csv'))
      }
    },

    // Fallback CSV generation
    async generateCSVFromData(settlements, filename) {
      const csvHeaders = [
        'ລຳດັບ',
        'ID ການຊຳລະ',
        'ວັນທີຊຳລະ',
        'ຈຳນວນເງິນຊຳລະ',
        'ສະກຸນເງິນ',
        'ຈຳນວນເງິນພື້ນຖານ (LAK)',
        'ອັດຕາແລກປ່ຽນ',
        'ສະຖານະ',
        'ອ້າງອີງ',
        'ຄຳອະທິບາຍ',
        'ໝາຍເຫດ',
        'ຜູ້ສ້າງ',
        'ວັນທີສ້າງ',
        'ຜູ້ກວດສອບ',
        'ຈຳນວນໃບແຈ້ງໜີ້'
      ]

      const csvRows = settlements.map((settlement, index) => [
        index + 1,
        settlement.id,
        this.formatDate(settlement.settlementDate),
        settlement.paymentAmount,
        settlement.currency?.code || 'LAK',
        settlement.baseAmount,
        settlement.exchangeRate,
        this.getStatusInLao(settlement.status),
        settlement.reference || '',
        settlement.description || '',
        settlement.note || '',
        settlement.maker?.cus_name || '',
        this.formatDate(settlement.createdAt),
        settlement.checker?.cus_name || '',
        settlement.invoiceSettlements?.length || 0
      ])

      const csvContent = [csvHeaders, ...csvRows]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\n')

      const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' })
      this.downloadBlob(blob, filename)
    },

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
      this.filters.startDate = this.getCurrentMonthStart()
      this.filters.endDate = this.getCurrentMonthEnd()
    },

    async fetchAccountCharts() {
      try {
        const { data } = await this.$axios.get('/api/accountChart/find')
        this.glAccounts = data || []
      } catch (error) {
        console.error(error)
      }
    },
    getStatusInLao(status) {
      if (!status) return 'N/A'
      return this.statusLabels[status] || status.toUpperCase()
    },

    getStatusColor(status) {
      const colors = {
        draft: 'grey',
        pending: 'orange',
        approved: 'green',
        completed: 'teal',
        cancelled: 'red',
      }
      return colors[status] || 'grey'
    },

    getInvoiceNumber(allocation) {
      return allocation.invoiceLineItem?.invoice?.invoiceNumber || 'N/A'
    },

    async loadInitialData() {
      await Promise.all([this.fetchAgencies()])
      await Promise.all([this.fetchCurrencies()])
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

        const { data } = await this.$axios.get('/api/ap-invoices-settlement', {
          params,
        })
        this.settlements = data.data.settlements
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

    async getOutstandingInvoices(showOutstandingModal = true) {
      this.outstandingLoading = true
      this.showOutstandingModal = showOutstandingModal

      try {
        const params = {}
        if (this.outstandingFilters.vendorId) {
          params.vendorId = this.outstandingFilters.vendorId
        }

        const { data } = await this.$axios.get(
          '/api/ap-invoices-settlement/invoices/outstanding',
          { params }
        )
        this.outstandingInvoices = data.data || []
        this.filteredOutstandingInvoices = [...this.outstandingInvoices]
      } catch (error) {
        console.error(error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດໃບແຈ້ງໜີ້ຄ້າງຈ່າຍໄດ້')
      } finally {
        this.outstandingLoading = false
      }
    },

    filterOutstandingInvoices() {
      if (!this.outstandingSearch) {
        this.filteredOutstandingInvoices = [...this.outstandingInvoices]
        return
      }

      const search = this.outstandingSearch.toLowerCase()
      this.filteredOutstandingInvoices = this.outstandingInvoices.filter(
        (invoice) =>
          invoice.invoiceNumber.toLowerCase().includes(search) ||
          invoice.vendorInvoiceNumber?.toLowerCase().includes(search) ||
          invoice.vendor?.name?.toLowerCase().includes(search)
      )
    },

    selectInvoiceForSettlement(invoice) {
      this.closeOutstandingModal()
      this.openDialog(null, [invoice])
    },

    openDialog(settlement = null, preSelectedInvoices = []) {
      this.selectedSettlement = settlement
      this.showDialog = true
    },

    closeDialog() {
      this.showDialog = false
      this.selectedSettlement = null
    },

    closeOutstandingModal() {
      this.showOutstandingModal = false
      this.outstandingFilters.vendorId = ''
      this.outstandingSearch = ''
    },

    async viewDetails(settlement) {
      this.selectedSettlement = settlement
      this.showDetailModal = true
      this.detailLoading = true

      try {
        const { data } = await this.$axios.get(
          `/api/ap-invoices-settlement/${settlement.id}`
        )
        this.settlementDetails = data.data
      } catch (error) {
        console.error(error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍລະອຽດໄດ້')
      } finally {
        this.detailLoading = false
      }
    },

    closeDetailModal() {
      this.showDetailModal = false
      this.settlementDetails = null
    },

    async saveSettlement(formData) {
      try {
        const auditContext = {
          reason:
            formData.reason ||
            (formData.id ? 'Updated settlement' : 'Created new settlement'),
          userId: this.user?.id,
        }

        let response
        if (formData.id) {
          response = await this.$axios.put(
            `/api/ap-invoices-settlement/${formData.id}`,
            {
              ...formData,
              ...auditContext,
            }
          )
          this.$toast.success('ອັບເດດສຳເລັດ')
        } else {
          response = await this.$axios.post('/api/ap-invoices-settlement', {
            ...formData,
            ...auditContext,
          })
          const created = response.data?.data
          this.$toast.success(
            created?.id ? `ສ້າງສຳເລັດ: #${created.id}` : 'ສ້າງສຳເລັດ'
          )
        }

        this.closeDialog()
        await this.fetchData()
      } catch (error) {
        console.error(error)
        this.$toast.error(error.response?.data?.message || 'ເກີດຂໍ້ຜິດພາດ')
      }
    },

    async approveSettlement(settlement) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການອະນຸມັດ',
          `ທ່ານຕ້ອງການອະນຸມັດການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`,
          'question'
        )

        if (result.isConfirmed) {
          await this.$axios.post(
            `/api/ap-invoices-settlement/${settlement.id}/approve`
          )
          this.$toast.success('ອະນຸມັດສຳເລັດ')
          await this.fetchData()
        }
      } catch (error) {
        console.error(error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ')
      }
    },

    async completeSettlement(settlement) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການສຳເລັດ',
          `ທ່ານຕ້ອງການສຳເລັດການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`,
          'question'
        )

        if (result.isConfirmed) {
          await this.$axios.post(
            `/api/ap-invoices-settlement/${settlement.id}/complete`
          )
          this.$toast.success('ສຳເລັດສຳເລັດ')
          await this.fetchData()
        }
      } catch (error) {
        console.error(error)
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ')
      }
    },

    async cancelSettlement(settlement) {
      try {
        const result = await swalConfirm(
          this.$swal,
          'ຢືນຢັນການຍົກເລີກ',
          `ທ່ານຕ້ອງການຍົກເລີກການຊຳລະ #${settlement.id} ແມ່ນບໍ່?`,
          'warning'
        )

        if (result.isConfirmed) {
          await this.$axios.delete(
            `/api/ap-invoices-settlement/${settlement.id}`
          )
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
        startDate: this.getCurrentMonthStart(),
        endDate: this.getCurrentMonthEnd()
      }
      this.searchTerm = ''
      this.statusFilter = ''
      this.tableOptions.page = 1
      this.fetchData()
    },

    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/findAll')
        this.currencies = data || []
      } catch (error) {
        console.error(error)
      }
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

.ap-settlement-container {
  padding: 20px;
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

/* Export button styling */
.v-btn.success {
  background-color: #4caf50 !important;
  color: white !important;
}

.v-btn.success:hover {
  background-color: #45a049 !important;
}
</style>