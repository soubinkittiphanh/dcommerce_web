<template>
  <div>
    <!-- Header Section -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary white--text py-3">
            <v-icon color="white" class="mr-2">mdi-briefcase-outline</v-icon>
            <span>ລະບົບຈັດການ Job Batch</span>
            <v-spacer />
            <v-btn
              color="success"
              class="mr-2"
              @click="exportToExcel"
              :loading="exporting"
              :disabled="loading || jobBatches.length === 0"
            >
              <v-icon left>mdi-file-excel</v-icon>
              ສົ່ງອອກ Excel
            </v-btn>
            <v-btn
              color="white"
              text
              @click="openCreateDialog"
              :disabled="loading"
            >
              <v-icon left>mdi-plus</v-icon>
              ເພີ່ມໃໝ່
            </v-btn>
          </v-card-title>

          <!-- Filters -->
          <v-card-text class="pa-3">
            <v-row dense>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="filters.search"
                  label="ຄົ້ນຫາ"
                  prepend-inner-icon="mdi-magnify"
                  dense
                  outlined
                  hide-details
                  clearable
                  @input="debounceSearch"
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="filters.mouId"
                  :items="mouFilterOptions"
                  :loading="loadingMous"
                  label="ສັນຍາ MOU"
                  prepend-inner-icon="mdi-file-document"
                  dense
                  outlined
                  hide-details
                  clearable
                  item-text="mouName"
                  item-value="id"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.status"
                  :items="statusOptions"
                  label="ສະຖານະ"
                  prepend-inner-icon="mdi-information"
                  dense
                  outlined
                  hide-details
                  clearable
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-menu
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateRangeText"
                      label="ຊ່ວງເວລາ"
                      prepend-inner-icon="mdi-calendar"
                      readonly
                      dense
                      outlined
                      hide-details
                      clearable
                      v-bind="attrs"
                      v-on="on"
                      @click:clear="filters.dateRange = null"
                    />
                  </template>
                  <v-date-picker
                    v-model="filters.dateRange"
                    range
                    @input="dateMenu = false"
                  />
                </v-menu>
              </v-col>
              <v-col cols="12" md="2">
                <v-btn color="secondary" outlined block @click="clearFilters">
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
            <span>ລາຍການ Job Batch</span>
            <v-spacer />
            <v-chip color="primary" outlined> {{ totalItems }} ລາຍການ </v-chip>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="jobBatches"
            :loading="loading"
            :options.sync="tableOptions"
            :server-items-length="totalItems"
            :footer-props="{
              'items-per-page-options': [10, 25, 50, 100],
            }"
            class="elevation-0"
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ"
          >
            <!-- Running Number -->
   <template v-slot:item.runningNo="{ item }">
  <div class="d-flex align-center">
    <v-icon small color="primary" class="mr-2">mdi-numeric</v-icon>
    <v-chip small color="primary" text-color="white" class="font-weight-bold">
      {{ item.runningNo }}
    </v-chip>
  </div>
</template>

            <!-- MOU Information -->
            <template v-slot:item.mou="{ item }">
              <div v-if="item.mou" class="d-flex align-center">
                <v-icon small color="primary" class="mr-1"
                  >mdi-file-document</v-icon
                >
                <div>
                  <div class=" font-weight-bold">
                    {{ item.mou.employerCompany }}
                  </div>
                  <div class=" grey--text">
                    {{ item.mou.mouNumber }}
                  </div>
                </div>
              </div>
              <span v-else class=" grey--text">
                <v-icon x-small class="mr-1">mdi-minus-circle</v-icon>
                ບໍ່ມີ MOU
              </span>
            </template>

            <!-- Work Place -->
            <template v-slot:item.workPlace="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="blue" class="mr-1"
                  >mdi-map-marker</v-icon
                >
                <span class="">{{
                  item.mou?.workLocation || '-'
                }}</span>
              </div>
            </template>

            <!-- Job Title -->
            <template v-slot:item.jobTitle="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="purple" class="mr-1"
                  >mdi-briefcase</v-icon
                >
                <span class="">{{
                  item.mou?.jobTitle || '-'
                }}</span>
              </div>
            </template>

            <!-- Status -->
            <template v-slot:item.status="{ item }">
              <v-chip
                x-small
                :color="getStatusColor(item.status)"
                text-color="white"
              >
                <v-icon x-small left>{{ getStatusIcon(item.status) }}</v-icon>
                {{ formatStatus(item.status) }}
              </v-chip>
            </template>

            <!-- Total Positions -->
            <template v-slot:item.totalPositions="{ item }">
              <div class="d-flex align-center justify-center">
                <v-icon x-small color="success" class="mr-1"
                  >mdi-account-multiple</v-icon
                >
                <span class=" font-weight-bold">{{
                  item.totalPositions || 0
                }}</span>
              </div>
            </template>
            <!-- Total Positions -->
            <template v-slot:item.principalAmount="{ item }">
              <div class="d-flex align-center justify-center">
                <v-icon x-small color="success" class="mr-1"
                  >mdi-cash-multiple</v-icon
                >
                <span class=" font-weight-bold">{{
                  formatNumber(item.principalAmount || 0)
                }}</span>
              </div>
            </template>

            <!-- Applicants Count -->
            <template v-slot:item.applicantCount="{ item }">
              <div class="d-flex align-center justify-center">
                <v-icon x-small color="info" class="mr-1"
                  >mdi-account-check</v-icon
                >
                <span class=" font-weight-bold">
                  {{ item.applicantStatistics?.interview || item.applicantStatistics?.total || 0 }}
                  <!-- {{ item.applicantStatistics?.total || 0 }} -->
                </span>
              </div>
            </template>

            <!-- Start Date -->
            <template v-slot:item.batchStartDate="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="green" class="mr-1"
                  >mdi-calendar-start</v-icon
                >
                <span v-if="item.batchStartDate" class="">
                  {{ formatDate(item.batchStartDate) }}
                </span>
                <span v-else class=" grey--text">ບໍ່ມີ</span>
              </div>
            </template>

            <!-- End Date -->
            <template v-slot:item.batchEndDate="{ item }">
              <div class="d-flex align-center">
                <v-icon
                  x-small
                  :color="isOverdue(item.batchEndDate) ? 'error' : 'warning'"
                  class="mr-1"
                >
                  mdi-calendar-end
                </v-icon>
                <span
                  v-if="item.batchEndDate"
                  class=""
                  :class="{ 'error--text': isOverdue(item.batchEndDate) }"
                >
                  {{ formatDate(item.batchEndDate) }}
                </span>
                <span v-else class=" grey--text">ບໍ່ມີ</span>
              </div>
            </template>
            <template v-slot:item.batchDeliveryDate="{ item }">
              <div class="d-flex align-center">
                <v-icon
                  x-small
                  :color="isOverdue(item.batchDeliveryDate) ? 'error' : 'warning'"
                  class="mr-1"
                >
                  mdi-calendar-end
                </v-icon>
                <span
                  v-if="item.batchDeliveryDate"
                  class=""
                  :class="{ 'error--text': isOverdue(item.batchDeliveryDate) }"
                >
                  {{ formatDate(item.batchDeliveryDate) }}
                </span>
                <span v-else class=" grey--text">ບໍ່ມີ</span>
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
      <v-list-item @click="editBatch(item)">
        <v-list-item-icon>
          <v-icon small color="info">mdi-pencil</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
      </v-list-item>
      
      <!-- NEW: Create Invoice Option -->
      <v-list-item @click="createInvoiceFromBatch(item)">
        <v-list-item-icon>
          <v-icon small color="success">mdi-file-invoice-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ສ້າງໃບແຈ້ງໜີ້</v-list-item-title>
      </v-list-item>
      
      <v-list-item @click="updateStatus(item)">
        <v-list-item-icon>
          <v-icon small color="orange">mdi-update</v-icon>
        </v-list-item-icon>
        <v-list-item-title>ອັບເດດສະຖານະ</v-list-item-title>
      </v-list-item>
      <v-divider />
    </v-list>
  </v-menu>
</template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Job Batch Dialog -->
    <job-batch-dialog
      v-model="showDialog"
      :batch="selectedBatch"
      :is-edit="isEdit"
      @saved="onBatchSaved"
      @cancelled="showDialog = false"
    />
<!-- Invoice Header Dialog (for Create/Edit) -->
<client-only>
  <InvoiceHeaderMaintain
    :visible="showEditDialog"
    :invoice="selectedInvoice"
    :customers="customers"
    :jobBatches="jobBatches"
    :currencies="currencies"
    :preselected-batch-id="preselectedBatchId"
    @close="closeEditDialog"
    @save="onInvoiceSave"
  />
</client-only>
    <!-- Status Update Dialog -->
    <v-dialog v-model="showStatusDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="text-h6">ອັບເດດສະຖານະ</v-card-title>
        <v-card-text>
          <v-select
            v-model="newStatus"
            :items="statusOptions"
            label="ສະຖານະໃໝ່"
            outlined
            dense
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="showStatusDialog = false">ຍົກເລີກ</v-btn>
          <v-btn
            color="primary"
            @click="confirmStatusUpdate"
            :loading="updating"
          >
            ອັບເດດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import JobBatchDialog from '~/components/job_fair/job_batch'
import { debounce } from 'lodash'
import InvoiceHeaderMaintain from '~/components/accounting/ar/invoice/maintain'
import { swalSuccess, swalError2, ticketHtml, getFormatNum } from '~/common'

export default {
  name: 'JobBatchList',
  components: {
    JobBatchDialog,
    InvoiceHeaderMaintain,
  },
  middleware: 'auths',

  data() {
    return {
      showEditDialog: false,  // CHANGE: rename from showInvoiceDialog
      showInvoiceDialog: false, // NEW
      selectedInvoice: null, // NEW
      preselectedBatchId: null, // NEW
      customers: [], // NEW
      currencies: [], // NEW
      loading: false,
      updating: false,
      loadingMous: false,
      dateMenu: false,
      showDialog: false,
      showStatusDialog: false,
      isEdit: false,
      selectedBatch: null,
      newStatus: '',
      jobBatches: [],
      totalItems: 0,
      mouFilterOptions: [],
      exporting: false, // NEW: for Excel export loading state

      filters: {
        search: '',
        mouId: '',
        status: '',
        dateRange: null,
      },

      tableOptions: {
        page: 1,
        itemsPerPage: 25,
        sortBy: ['createdAt'],
        sortDesc: [true],
      },

      headers: [
        {
          text: 'ຮອບຈັດສົ່ງ',
          value: 'runningNo',
          sortable: true,
          width: '100px',
        },
        {
          text: 'ບໍລິສັດນາຍຈ້າງ',
          value: 'mou',
          sortable: false,
          width: '200px',
        },
        {
          text: 'ສະຖານທີ່ວຽກ',
          value: 'workPlace',
          sortable: false,
          width: '150px',
        },
        { text: 'ໜ້າວຽກ', value: 'jobTitle', sortable: false, width: '150px' },
        { text: 'ສະຖານະ', value: 'status', sortable: true, width: '120px' },
        {
          text: 'ມູນຄ່າແບັດຈັອບ',
          value: 'principalAmount',
          sortable: true,
          width: '100px',
          align: 'center',
        },
        {
          text: 'ເປີດຮັບ',
          value: 'totalPositions',
          sortable: true,
          width: '100px',
          align: 'center',
        },
        {
          text: 'ສະໝັກແລ້ວ',
          value: 'applicantCount',
          sortable: false,
          width: '100px',
          align: 'center',
        },
        {
          text: 'ວັນເລີ່ມ',
          value: 'batchStartDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ວັນສິ້ນສຸດ',
          value: 'batchEndDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ວັນທີຈັດສົ່ງແຮງງານ',
          value: 'batchDeliveryDate',
          sortable: true,
          width: '120px',
        },
        {
          text: 'ຄຳສັ່ງ',
          value: 'actions',
          sortable: false,
          width: '80px',
          align: 'center',
        },
      ],

      statusOptions: [
        { text: 'ດຳເນີນການ', value: 'active' },
        { text: 'ສຳເລັດ', value: 'completed' },
        { text: 'ຍົກເລີກ', value: 'cancelled' },
        { text: 'ລໍຖ້າ', value: 'on_hold' },
        { text: 'ເດີນທາງແລ້ວ', value: 'submit' },
      ],
    }
  },

  computed: {
    dateRangeText() {
      if (!this.filters.dateRange || this.filters.dateRange.length === 0)
        return ''
      if (this.filters.dateRange.length === 1) return this.filters.dateRange[0]
      return `${this.filters.dateRange[0]} - ${this.filters.dateRange[1]}`
    },
  },

  watch: {
    tableOptions: {
      handler() {
        this.fetchJobBatches()
      },
      deep: true,
    },
    'filters.mouId'() {
      this.fetchJobBatches()
    },
    'filters.status'() {
      this.fetchJobBatches()
    },
    'filters.dateRange'() {
      this.fetchJobBatches()
    },
  },

  mounted() {
    this.fetchJobBatches()
    this.fetchMouFilterOptions()
    this.loadCustomers() // Add this
    this.loadCurrencies() // Add this
  },

  methods: {
    // NEW: Excel Export Method
    async exportToExcel() {
      if (this.jobBatches.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນສໍາລັບການສົ່ງອອກ')
        return
      }

      this.exporting = true

      try {
        // Import XLSX library dynamically (if using in browser)
        const XLSX = await import('xlsx')
        
        // Prepare data for export
        const excelData = this.prepareExcelData()

        // Create workbook and worksheet
        const workbook = XLSX.utils.book_new()
        
        // Main data sheet
        const worksheet = XLSX.utils.json_to_sheet(excelData)
        
        // Set column widths
        worksheet['!cols'] = [
          { wch: 15 }, // Running No
          { wch: 25 }, // Company
          { wch: 20 }, // MOU Number
          { wch: 20 }, // Work Place
          { wch: 20 }, // Job Title
          { wch: 15 }, // Status
          { wch: 18 }, // Principal Amount
          { wch: 15 }, // Total Positions
          { wch: 15 }, // Applicant Count
          { wch: 15 }, // Start Date
          { wch: 15 }, // End Date
          { wch: 20 }, // Delivery Date
          { wch: 15 }, // Created Date
        ]

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Job Batches')

        // Create summary sheet
        const summaryData = this.createSummaryData()
        const summaryWorksheet = XLSX.utils.json_to_sheet(summaryData)
        summaryWorksheet['!cols'] = [{ wch: 25 }, { wch: 15 }]
        XLSX.utils.book_append_sheet(workbook, summaryWorksheet, 'Summary')

        // Generate Excel file
        const excelBuffer = XLSX.write(workbook, {
          bookType: 'xlsx',
          type: 'array'
        })

        // Create blob and download
        const blob = new Blob([excelBuffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        })

        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `Job_Batches_${this.formatDateForFilename(new Date())}.xlsx`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)

        this.$toast.success('ສົ່ງອອກ Excel ສຳເລັດແລ້ວ')

      } catch (error) {
        console.error('Export error:', error)
        this.$toast.error('ສົ່ງອອກ Excel ບໍ່ສຳເລັດ: ' + error.message)
      } finally {
        this.exporting = false
      }
    },

    // NEW: Prepare data for Excel export
    prepareExcelData() {
      return this.jobBatches.map((item, index) => ({
        'ຮອບຈັດສົ່ງ': item.runningNo || '',
        'ບໍລິສັດນາຍຈ້າງ': item.mou?.employerCompany || '',
        'ເລກທີ MOU': item.mou?.mouNumber || '',
        'ສະຖານທີ່ວຽກ': item.mou?.workLocation || '',
        'ໜ້າວຽກ': item.mou?.jobTitle || '',
        'ສະຖານະ': this.formatStatus(item.status),
        'ມູນຄ່າແບັດຈັອບ': item.principalAmount || 0,
        'ເປີດຮັບ': item.totalPositions || 0,
        'ສະໝັກແລ້ວ': item.applicantStatistics?.interview || item.applicantStatistics?.total || 0,
        'ວັນເລີ່ມ': item.batchStartDate ? this.formatDateForExcel(item.batchStartDate) : '',
        'ວັນສິ້ນສຸດ': item.batchEndDate ? this.formatDateForExcel(item.batchEndDate) : '',
        'ວັນຈັດສົ່ງແຮງງານ': item.batchDeliveryDate ? this.formatDateForExcel(item.batchDeliveryDate) : '',
        'ວັນທີ່ສ້າງ': item.createdAt ? this.formatDateForExcel(item.createdAt) : '',
      }))
    },

    // NEW: Create summary data for the summary sheet
    createSummaryData() {
      const stats = {
        totalBatches: this.jobBatches.length,
        totalPositions: this.jobBatches.reduce((sum, item) => sum + (item.totalPositions || 0), 0),
        totalPrincipalAmount: this.jobBatches.reduce((sum, item) => sum + (item.principalAmount || 0), 0),
        totalApplicants: this.jobBatches.reduce((sum, item) => 
          sum + (item.applicantStatistics?.interview || item.applicantStatistics?.total || 0), 0),
        statusBreakdown: {},
      }

      // Calculate status breakdown
      this.jobBatches.forEach(item => {
        const status = this.formatStatus(item.status)
        stats.statusBreakdown[status] = (stats.statusBreakdown[status] || 0) + 1
      })

      return [
        { 'ລາຍການ': 'ລວມ Job Batch ທັງໝົດ', 'ຈຳນວນ': stats.totalBatches },
        { 'ລາຍການ': 'ລວມຕຳແຫນ່ງວຽກ', 'ຈຳນວນ': stats.totalPositions },
        { 'ລາຍການ': 'ລວມມູນຄ່າແບັດຈ໌', 'ຈຳນວນ': stats.totalPrincipalAmount },
        { 'ລາຍການ': 'ລວມຜູ້ສະໝັກ', 'ຈຳນວນ': stats.totalApplicants },
        { 'ລາຍການ': '', 'ຈຳນວນ': '' },
        { 'ລາຍການ': '=== ສະຖິຕິສະຖານະ ===', 'ຈຳນວນ': '' },
        ...Object.entries(stats.statusBreakdown).map(([status, count]) => ({
          'ລາຍການ': status,
          'ຈຳນວນ': count
        }))
      ]
    },

    // NEW: Format date for Excel (YYYY-MM-DD)
    formatDateForExcel(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-CA')
    },

    // NEW: Format date for filename
    formatDateForFilename(date) {
      return date.toISOString().split('T')[0]
    },

    closeEditDialog() {
      this.showEditDialog = false  // CHANGED: was closeInvoiceDialog
      this.preselectedBatchId = null
      this.selectedInvoice = null
    },

    async createInvoiceFromBatch(batch) {
      // Load required data if not already loaded
      await Promise.all([this.loadCustomers(), this.loadCurrencies()])

      // Set the preselected batch ID
      this.preselectedBatchId = batch.id

      // Clear any existing invoice
      this.selectedInvoice = null

      // Open invoice dialog
      this.showEditDialog = true  // CHANGED: was showInvoiceDialog
    },

    async loadCustomers() {
      if (this.customers.length > 0) return // Already loaded

      try {
        const { data } = await this.$axios.get('/api/client/find')
        if (data) {
          this.customers = data || []
        }
      } catch (error) {
        console.error('Error loading customers:', error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດຂໍ້ມູນລູກຄ້າໄດ້')
      }
    },

    async loadCurrencies() {
      if (this.currencies.length > 0) return // Already loaded

      try {
        const { data } = await this.$axios.get('/api/currency/findAll')
        if (data) {
          this.currencies = data || []
        }
      } catch (error) {
        console.error('Error loading currencies:', error)
        this.$toast.error('ບໍ່ສາມາດໂຫຼດຂໍ້ມູນສະກຸນເງິນໄດ້')
      }
    },

    closeInvoiceDialog() {
      this.showInvoiceDialog = false
      this.preselectedBatchId = null
      this.selectedInvoice = null
    },

    
  async onInvoiceSave(invoiceData) {
    try {
      const endpoint = invoiceData.id
        ? `/api/ar-invoices/${invoiceData.id}`
        : '/api/ar-invoices'
      const method = invoiceData.id ? 'put' : 'post'

      const { data } = await this.$axios[method](endpoint, invoiceData)

      this.$toast.success(
        invoiceData.id
          ? 'ອັບເດດໃບແຈ້ງໜີ້ສຳເລັດແລ້ວ'
          : 'ສ້າງໃບແຈ້ງໜີ້ສຳເລັດແລ້ວ'
      )

      this.closeEditDialog()  // CHANGED: was closeInvoiceDialog
    } catch (error) {
      console.error('Error saving invoice:', error)
      this.$toast.error('ບໍ່ສາມາດບັນທຶກໃບແຈ້ງໜີ້ໄດ້')
    }
  },

    debounceSearch: debounce(function () {
      this.fetchJobBatches()
    }, 500),

    async fetchJobBatches() {
      this.loading = true
      try {
        const params = {
          page: this.tableOptions.page,
          limit: this.tableOptions.itemsPerPage,
          sortBy: this.tableOptions.sortBy[0] || 'createdAt',
          sortOrder: this.tableOptions.sortDesc[0] ? 'DESC' : 'ASC',
          include: 'mou',
        }

        if (this.filters.search) params.search = this.filters.search
        if (this.filters.mouId) params.mouId = this.filters.mouId
        if (this.filters.status) params.status = this.filters.status

        const { data } = await this.$axios.get('/api/batch-job', { params })
        this.jobBatches = data.data.jobBatches
        this.totalItems = data.data.pagination.total
      } catch (error) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
        console.error('Error fetching job batches:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchMouFilterOptions() {
      this.loadingMous = true
      try {
        const { data } = await this.$axios.get('/api/mous', {
          params: { limit: 100, fields: 'id,mouName,mouNumber' },
        })
        this.mouFilterOptions = data.data.mous || data.data || []
      } catch (error) {
        console.error('Error fetching MOU options:', error)
      } finally {
        this.loadingMous = false
      }
    },

    openCreateDialog() {
      this.selectedBatch = null
      this.isEdit = false
      this.showDialog = true
    },

    editBatch(batch) {
      this.selectedBatch = { ...batch }
      this.isEdit = true
      this.showDialog = true
    },

    updateStatus(batch) {
      this.selectedBatch = batch
      this.newStatus = batch.status
      this.showStatusDialog = true
    },

    async confirmStatusUpdate() {
      this.updating = true
      try {
        await this.$axios.patch(
          `/api/batch-job/${this.selectedBatch.id}/status`,
          {
            status: this.newStatus,
          }
        )
        this.$toast.success('ອັບເດດສະຖານະສຳເລັດແລ້ວ')
        this.showStatusDialog = false
        this.fetchJobBatches()
      } catch (error) {
        this.$toast.error('ອັບເດດສະຖານະບໍ່ສຳເລັດ')
        console.error('Error updating status:', error)
      } finally {
        this.updating = false
      }
    },

    async deleteBatch(batch) {
      const confirmed = await this.$confirm(
        `ທ່ານຕ້ອງການລົບ "${batch.batchName}" ແມ່ນບໍ?`,
        { title: 'ຢືນຢັນການລົບ' }
      )

      if (confirmed) {
        try {
          await this.$axios.delete(`/api/batch-job/${batch.id}`)
          this.$toast.success('ລົບສຳເລັດແລ້ວ')
          this.fetchJobBatches()
        } catch (error) {
          this.$toast.error('ການລົບບໍ່ສຳເລັດ')
          console.error('Error deleting batch:', error)
        }
      }
    },

    onBatchSaved() {
      this.showDialog = false
      this.fetchJobBatches()
      this.fetchMouFilterOptions()
    },

    clearFilters() {
      this.filters = {
        search: '',
        mouId: '',
        status: '',
        dateRange: null,
      }
      this.fetchJobBatches()
    },

    getStatusColor(status) {
      const colors = {
        active: 'success',
        completed: 'primary',
        cancelled: 'error',
        on_hold: 'warning',
      }
      return colors[status] || 'grey'
    },

    getStatusIcon(status) {
      const icons = {
        active: 'mdi-play-circle',
        completed: 'mdi-check-circle',
        cancelled: 'mdi-close-circle',
        on_hold: 'mdi-pause-circle',
      }
      return icons[status] || 'mdi-help-circle'
    },
    formatNumber(val) {
      return getFormatNum(val)
    },
    formatStatus(status) {
      const labels = {
        draft: 'ລໍຖ້າ',
        active: 'ດຳເນີນການ',
        completed: 'ສຳເລັດ',
        settled: 'ຊຳລະແລ້ວ',
        submit: 'ເດີນທາງແລ້ວ',
      }
      return labels[status] || status
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('lo-LA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    isOverdue(date) {
      if (!date) return false
      return new Date(date) < new Date()
    },
  },
}
</script>

<style scoped>
.v-card-title.primary {
  background: linear-gradient(45deg, #1976d2, #1565c0);
}

. {
  font-size: 12px !important;
}
</style>