<template>
  <div>
    <!-- Header Section -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary white--text py-3">
            <v-icon color="white" class="mr-2">mdi-file-document-multiple</v-icon>
            <span>ຈັດການສັນຍາ MOU</span>
            <v-spacer />
            <v-btn 
              color="success" 
              class="mr-2" 
              @click="exportToExcel"
              :loading="exporting"
              :disabled="loading || mous.length === 0"
            >
              <v-icon left>mdi-file-excel</v-icon>
              ສົ່ງອອກ Excel
            </v-btn>
            <v-btn color="white" text @click="openMaintenanceDialog">
              <v-icon left>mdi-plus</v-icon>
              ເພີ່ມສັນຍາ MOU
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-row class="mt-3">
      <v-col cols="12">
        <v-card>
          <v-card-title class="py-3">
            <v-icon class="mr-2">mdi-table</v-icon>
            <span>ລາຍການສັນຍາ MOU</span>
            <v-spacer />
            <v-chip color="primary" outlined class="mr-3">{{ mous.length }} ລາຍການ</v-chip>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
              dense
              outlined
              clearable
              style="max-width: 300px"
            />
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="mous"
            :loading="loading"
            :server-items-length="pagination.totalItems"
            :options.sync="options"
            :footer-props="{
              'items-per-page-options': [10, 25, 50, 100]
            }"
            class="elevation-0"
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ"
          >
            <!-- Job Code -->
            <template v-slot:item.jobCode="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="primary" class="mr-1">mdi-barcode</v-icon>
                <span class="text-caption font-weight-bold">{{ item.jobCode }}</span>
              </div>
            </template>

            <!-- Job Title -->
            <template v-slot:item.jobTitle="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="purple" class="mr-1">mdi-briefcase</v-icon>
                <span class="text-caption">{{ item.jobTitle }}</span>
              </div>
            </template>

            <!-- Company -->
            <template v-slot:item.employerCompany="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="blue" class="mr-1">mdi-office-building</v-icon>
                <span class="text-caption">{{ item.employerCompany }}</span>
              </div>
            </template>

            <!-- Work Location -->
            <template v-slot:item.workLocation="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="orange" class="mr-1">mdi-map-marker</v-icon>
                <span class="text-caption">{{ item.workLocation }}</span>
              </div>
            </template>

            <!-- Number of Workers -->
            <template v-slot:item.numberOfWorkers="{ item }">
              <div class="d-flex align-center justify-center">
                <v-icon x-small color="success" class="mr-1">mdi-account-multiple</v-icon>
                <span class="text-caption font-weight-bold">{{ item.numberOfWorkers }}</span>
              </div>
            </template>

            <!-- Agency -->
            <template v-slot:item.agency="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="indigo" class="mr-1">mdi-domain</v-icon>
                <span class="text-caption">{{ item.agency?.agencyName || '-' }}</span>
              </div>
            </template>

            <!-- Status -->
            <template v-slot:item.jobStatus="{ item }">
              <v-chip
                x-small
                :color="getStatusColor(item.jobStatus)"
                text-color="white"
              >
                <v-icon x-small left>{{ getStatusIcon(item.jobStatus) }}</v-icon>
                {{ formatStatusName(item.jobStatus) }}
              </v-chip>
            </template>

            <!-- Job Batch Stats -->
            <template v-slot:item.jobBatchStats="{ item }">
              <div class="d-flex align-center justify-center">
                <v-chip x-small color="primary" outlined class="mr-1">
                  <v-icon x-small left>mdi-briefcase</v-icon>
                  {{ item.jobBatchStatistics?.totalJobBatches || 0 }}
                </v-chip>
                <v-tooltip bottom v-if="item.jobBatchStatistics?.activeJobBatches">
                  <template v-slot:activator="{ on }">
                    <v-chip x-small color="success" v-on="on">
                      {{ item.jobBatchStatistics.activeJobBatches }}
                    </v-chip>
                  </template>
                  <span>ກຳລັງດຳເນີນ</span>
                </v-tooltip>
              </div>
            </template>

            <!-- Applicant Stats -->
            <template v-slot:item.applicantStats="{ item }">
              <div class="d-flex align-center justify-center gap-1">
                <v-chip x-small color="indigo" outlined>
                  <v-icon x-small left>mdi-account-group</v-icon>
                  {{ item.applicantStatistics?.totalApplicants || 0 }}
                </v-chip>
                <div class="d-flex gap-1">
                  <v-tooltip bottom v-if="item.applicantStatistics?.interview">
                    <template v-slot:activator="{ on }">
                      <v-chip x-small color="orange" v-on="on">
                        {{ item.applicantStatistics.interview }}
                      </v-chip>
                    </template>
                    <span>ສະໝັກ</span>
                  </v-tooltip>
                  <v-tooltip bottom v-if="item.applicantStatistics?.confirm">
                    <template v-slot:activator="{ on }">
                      <v-chip x-small color="success" v-on="on">
                        {{ item.applicantStatistics.confirm }}
                      </v-chip>
                    </template>
                    <span>ກຽມສົ່ງ</span>
                  </v-tooltip>
                </div>
              </div>
            </template>

            <!-- Project Amount -->
            <template v-slot:item.projectAmount="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="green" class="mr-1">mdi-currency-usd</v-icon>
                <span class="text-caption font-weight-medium">
                  {{ formatCurrency(item.projectAmount, item.currency?.code) }}
                </span>
              </div>
            </template>

            <!-- PM Charge -->
            <template v-slot:item.pmCharge="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="teal" class="mr-1">mdi-cash</v-icon>
                <span class="text-caption font-weight-medium">
                  {{ formatCurrency(item.pmCharge, item.currency?.code) }}
                </span>
              </div>
            </template>
            <!-- Invoice amount -->
            <template v-slot:item.invoiceAmount="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="teal" class="mr-1">mdi-cash</v-icon>
                <span class="text-caption font-weight-medium">
                  {{ formatCurrency(item.invoiceStatistics.totalReceivedAmount+item.invoiceStatistics.outstandingAmount, item.currency?.code) }}
                </span>
              </div>
            </template>
            <!-- Paid amount -->
            <template v-slot:item.paidAmount="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="teal" class="mr-1">mdi-cash</v-icon>
                <span class="text-caption font-weight-medium">
                  {{ formatCurrency(item.invoiceStatistics.totalReceivedAmount, item.currency?.code) }}
                </span>
              </div>
            </template>
            <!-- Outstanding -->
            <template v-slot:item.invoiceOutstanding="{ item }">
              <div class="d-flex align-center">
                <v-icon x-small color="teal" class="mr-1">mdi-cash</v-icon>
                <span class="text-caption font-weight-medium">
                  {{ formatCurrency(item.pmCharge-item.invoiceStatistics.totalReceivedAmount, item.currency?.code) }}
                </span>
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
                  <v-list-item @click="editMOU(item)">
                    <v-list-item-icon>
                      <v-icon small color="info">mdi-pencil</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ແກ້ໄຂ</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="viewJobBatches(item)">
                    <v-list-item-icon>
                      <v-icon small color="primary">mdi-briefcase</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>ເບິ່ງ Job Batch</v-list-item-title>
                  </v-list-item>
                  <v-divider />
                  <v-list-item @click="deleteMOU(item)">
                    <v-list-item-icon>
                      <v-icon small color="error">mdi-delete</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="error--text">ລົບ</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Maintenance Dialog -->
    <MouMaintenanceDialog
      v-model="maintenanceDialog"
      :editing-item="editingItem"
      :outStanding="selectedMOUOutstanding"
      @saved="onMOUSaved"
      @cancelled="maintenanceDialog = false"
    />

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">ຢືນຢັນການລົບ</v-card-title>
        <v-card-text>
          ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລົບ MOU "{{ deletingItem?.jobCode }}"?
          ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="deleteDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="error" text @click="confirmDelete">ລົບ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Export Options Dialog -->
    <v-dialog v-model="exportDialog" max-width="700">
      <v-card>
        <v-card-title class="headline">
          <v-icon class="mr-2" color="green">mdi-file-excel</v-icon>
          ສົ່ງອອກຂໍ້ມູນ MOU Excel
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <h4>ເລືອກຂໍ້ມູນທີ່ຕ້ອງການສົ່ງອອກ:</h4>
            </v-col>
            <v-col cols="12" md="6">
              <v-checkbox
                v-model="exportOptions.includeMOUDetails"
                label="ລາຍລະອຽດ MOU"
                hint="ລະຫັດ, ຊື່ງານ, ບໍລິສັດ, ສະຖານທີ່"
                persistent-hint
                hide-details
              />
              <v-checkbox
                v-model="exportOptions.includeWorkerInfo"
                label="ຂໍ້ມູນແຮງງານ"
                hint="ຈຳນວນແຮງງານ, ສະຖານະ, ສັງກັດ"
                persistent-hint
                hide-details
              />
              <v-checkbox
                v-model="exportOptions.includeFinancialData"
                label="ຂໍ້ມູນການເງິນ"
                hint="ມູນຄ່າໂຄງການ, ຄ່າບໍລິການ, ໃບແຈ້ງໜີ້"
                persistent-hint
                hide-details
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-checkbox
                v-model="exportOptions.includeJobBatches"
                label="ສະຖິຕິ Job Batch"
                hint="ຈຳນວນແບັດຈ໌, ສະຖານະ"
                persistent-hint
                hide-details
              />
              <v-checkbox
                v-model="exportOptions.includeApplicants"
                label="ສະຖິຕິຜູ້ສະໝັກ"
                hint="ຈຳນວນຜູ້ສະໝັກ, ສະຖານະການສະໝັກ"
                persistent-hint
                hide-details
              />
              <v-checkbox
                v-model="exportOptions.includeStatistics"
                label="ສະຖິຕິສະຫຼຸບ"
                hint="ສະຫຼຸບທົ່ວໄປ ແລະ ການວິເຄາະ"
                persistent-hint
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-divider class="my-3" />
              <h4>ຕົວເລືອກເພີ່ມເຕີມ:</h4>
              <v-checkbox
                v-model="exportOptions.includeCurrentPageOnly"
                label="ສົ່ງອອກໜ້າປັດຈຸບັນເທົ່ານັ້ນ"
                hint="ຖ້າບໍ່ເລືອກ ຈະສົ່ງອອກທຸກໜ້າ"
                persistent-hint
                hide-details
              />
              <v-checkbox
                v-model="exportOptions.includeCharts"
                label="ສ້າງກຣາຟແລະຕາຕະລາງ"
                hint="ສ້າງກຣາຟສໍາລັບການວິເຄາະ"
                persistent-hint
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="exportOptions.currencyDisplay"
                :items="currencyDisplayOptions"
                label="ແສດງສະກຸນເງິນ"
                outlined
                dense
                hide-details
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="exportDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="success" @click="confirmExport" :loading="exporting">
            <v-icon left>mdi-download</v-icon>
            ສົ່ງອອກ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MouMaintenanceDialog from '~/components/job_fair/mou/maintain/index.vue'

export default {
  name: 'MouSummary',
  components: {
    MouMaintenanceDialog,
  },

  data() {
    return {
      selectedMOUOutstanding: 0,
      mous: [],
      loading: false,
      search: '',
      maintenanceDialog: false,
      deleteDialog: false,
      editingItem: null,
      deletingItem: null,
      searchTimeout: null,
      exporting: false,
      exportDialog: false,

      exportOptions: {
        includeMOUDetails: true,
        includeWorkerInfo: true,
        includeFinancialData: true,
        includeJobBatches: true,
        includeApplicants: true,
        includeStatistics: true,
        includeCurrentPageOnly: false,
        includeCharts: false,
        currencyDisplay: 'original'
      },

      currencyDisplayOptions: [
        { text: 'ສະກຸນເງິນເດີມ', value: 'original' },
        { text: 'USD ທັງໝົດ', value: 'usd' },
        { text: 'LAK ທັງໝົດ', value: 'lak' }
      ],

      pagination: {
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
      },

      options: {
        page: 1,
        itemsPerPage: 25,
        sortBy: ['createdAt'],
        sortDesc: [true],
      },

      headers: [
        { text: 'ລະຫັດ', value: 'jobCode', width: '100px' },
        { text: 'ລາຍລະອຽດໜ້າວຽກ', value: 'jobTitle', width: '180px' },
        { text: 'ບໍລິສັດນາຍຈ້າງ', value: 'employerCompany', width: '180px' },
        { text: 'ສະຖານທີ່', value: 'workLocation', width: '150px' },
        { text: 'ຈຳນວນແຮງງານ', value: 'numberOfWorkers', width: '120px', align: 'center' },
        { text: 'Agency', value: 'agency', width: '150px' },
        { text: 'ສະຖານະ', value: 'jobStatus', width: '120px' },
        { text: 'ເປີດຮັບແຮງງານ', value: 'jobBatchStats', width: '120px', sortable: false, align: 'center' },
        { text: 'ຜູ້ສະໝັກ', value: 'applicantStats', width: '150px', sortable: false, align: 'center' },
        { text: 'MOU Amount', value: 'projectAmount', width: '130px' },
        { text: 'PM Charge', value: 'pmCharge', width: '120px' },
        { text: 'ຍອດອອກອິນວອຍ', value: 'invoiceAmount', width: '120px' },
        { text: 'ຊຳລະແລ້ວ', value: 'paidAmount', width: '120px' },
        { text: 'ຄ້າງຊຳລະ', value: 'invoiceOutstanding', width: '120px' },
        { text: 'ຄຳສັ່ງ', value: 'actions', sortable: false, width: '80px', align: 'center' },
      ],
    }
  },

  watch: {
    options: {
      handler() {
        this.fetchMOUs()
      },
      deep: true,
    },
    search() {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.options.page = 1
        this.fetchMOUs()
      }, 500)
    },
  },

  mounted() {
    this.fetchMOUs()
  },

  methods: {
    // NEW: Excel Export Methods
    exportToExcel() {
      if (this.mous.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນສໍາລັບການສົ່ງອອກ')
        return
      }
      this.exportDialog = true
    },

    async confirmExport() {
      this.exporting = true
      try {
        const XLSX = await import('xlsx')
        const workbook = XLSX.utils.book_new()

        // Create main MOU data sheet
        if (this.exportOptions.includeMOUDetails || 
            this.exportOptions.includeWorkerInfo || 
            this.exportOptions.includeFinancialData) {
          const mainData = this.prepareMainMOUData()
          const mainSheet = XLSX.utils.json_to_sheet(mainData)
          this.setColumnWidths(mainSheet, this.getMainColumnWidths())
          XLSX.utils.book_append_sheet(workbook, mainSheet, 'ຂໍ້ມູນ MOU')
        }

        // Create financial summary sheet
        if (this.exportOptions.includeFinancialData) {
          const financialData = this.prepareFinancialSummary()
          const financialSheet = XLSX.utils.json_to_sheet(financialData)
          this.setColumnWidths(financialSheet, this.getFinancialColumnWidths())
          XLSX.utils.book_append_sheet(workbook, financialSheet, 'ສະຫຼຸບການເງິນ')
        }

        // Create job batch summary sheet
        if (this.exportOptions.includeJobBatches) {
          const jobBatchData = this.prepareJobBatchSummary()
          const jobBatchSheet = XLSX.utils.json_to_sheet(jobBatchData)
          this.setColumnWidths(jobBatchSheet, this.getJobBatchColumnWidths())
          XLSX.utils.book_append_sheet(workbook, jobBatchSheet, 'ສະຫຼຸບ Job Batch')
        }

        // Create applicant summary sheet
        if (this.exportOptions.includeApplicants) {
          const applicantData = this.prepareApplicantSummary()
          const applicantSheet = XLSX.utils.json_to_sheet(applicantData)
          this.setColumnWidths(applicantSheet, this.getApplicantColumnWidths())
          XLSX.utils.book_append_sheet(workbook, applicantSheet, 'ສະຫຼຸບຜູ້ສະໝັກ')
        }

        // Create statistics overview sheet
        if (this.exportOptions.includeStatistics) {
          const statsData = this.createDetailedStatistics()
          const statsSheet = XLSX.utils.json_to_sheet(statsData)
          this.setColumnWidths(statsSheet, [{ wch: 30 }, { wch: 15 }, { wch: 20 }])
          XLSX.utils.book_append_sheet(workbook, statsSheet, 'ສະຖິຕິສະຫຼຸບ')
        }

        // Create agency performance sheet
        const agencyData = this.createAgencyPerformance()
        const agencySheet = XLSX.utils.json_to_sheet(agencyData)
        this.setColumnWidths(agencySheet, this.getAgencyColumnWidths())
        XLSX.utils.book_append_sheet(workbook, agencySheet, 'ປະສິດທິພາບຕົວແທນ')

        // Generate and download
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
        this.downloadExcelFile(excelBuffer)

        this.$toast.success('ສົ່ງອອກ Excel ສຳເລັດແລ້ວ')
        this.exportDialog = false

      } catch (error) {
        console.error('Export error:', error)
        this.$toast.error('ສົ່ງອອກ Excel ບໍ່ສຳເລັດ: ' + error.message)
      } finally {
        this.exporting = false
      }
    },

    prepareMainMOUData() {
      const dataToExport = this.exportOptions.includeCurrentPageOnly ? 
        this.mous : 
        this.mous // Since we're using loaded data, this is the same

      return dataToExport.map(item => {
        const data = {}

        if (this.exportOptions.includeMOUDetails) {
          data['ລະຫັດງານ'] = item.jobCode || ''
          data['ຊື່ງານ'] = item.jobTitle || ''
          data['ບໍລິສັດນາຍຈ້າງ'] = item.employerCompany || ''
          data['ສະຖານທີ່ເຮັດວຽກ'] = item.workLocation || ''
          data['ລາຍລະອຽດງານ'] = item.jobDescription || ''
          data['ຄວາມຮຽກຮ້ອງ'] = item.requirements || ''
          data['ວັນທີ່ເລີ່ມ MOU'] = item.startDate ? this.formatDate(item.startDate) : ''
          data['ວັນທີ່ສິ້ນສຸດ MOU'] = item.endDate ? this.formatDate(item.endDate) : ''
          data['ສະຖານະ'] = this.formatStatusName(item.jobStatus)
        }

        if (this.exportOptions.includeWorkerInfo) {
          data['ຈຳນວນແຮງງານທີ່ຕ້ອງການ'] = item.numberOfWorkers || 0
          data['ແຮງງານຊາຍ'] = item.maleWorkers || 0
          data['ແຮງງານຍິງ'] = item.femaleWorkers || 0
          data['ອາຍຸຕ່ຳສຸດ'] = item.minAge || ''
          data['ອາຍຸສູງສຸດ'] = item.maxAge || ''
          data['ວຸດທິການສຶກສາ'] = item.educationLevel || ''
          data['ປະສົບການ'] = item.experienceRequired || ''
          data['ຕົວແທນ'] = item.agency?.agencyName || ''
        }

        if (this.exportOptions.includeFinancialData) {
          data['ມູນຄ່າໂຄງການ'] = this.formatCurrencyForExcel(item.projectAmount, item.currency?.code)
          data['ຄ່າບໍລິການ PM'] = this.formatCurrencyForExcel(item.pmCharge, item.currency?.code)
          data['ຍອດອອກອິນວອຍ'] = this.formatCurrencyForExcel(
            (item.invoiceStatistics?.totalReceivedAmount || 0) + (item.invoiceStatistics?.outstandingAmount || 0), 
            item.currency?.code
          )
          data['ຍອດຊຳລະແລ້ວ'] = this.formatCurrencyForExcel(item.invoiceStatistics?.totalReceivedAmount, item.currency?.code)
          data['ຍອດຄ້າງຊຳລະ'] = this.formatCurrencyForExcel(
            (item.pmCharge || 0) - (item.invoiceStatistics?.totalReceivedAmount || 0), 
            item.currency?.code
          )
          data['ສະກຸນເງິນ'] = item.currency?.code || 'USD'
          data['ເປີເຊັນຊຳລະ'] = this.calculatePaymentPercentage(item)
        }

        if (this.exportOptions.includeJobBatches) {
          data['ລວມ Job Batch'] = item.jobBatchStatistics?.totalJobBatches || 0
          data['Job Batch ກຳລັງດຳເນີນ'] = item.jobBatchStatistics?.activeJobBatches || 0
          data['Job Batch ສຳເລັດ'] = item.jobBatchStatistics?.completedJobBatches || 0
        }

        if (this.exportOptions.includeApplicants) {
          data['ລວມຜູ້ສະໝັກ'] = item.applicantStatistics?.totalApplicants || 0
          data['ຜູ້ສະໝັກສຳພາດ'] = item.applicantStatistics?.interview || 0
          data['ຜູ້ສະໝັກຢືນຢັນ'] = item.applicantStatistics?.confirm || 0
          data['ຜູ້ສະໝັກປະຕິເສດ'] = item.applicantStatistics?.rejected || 0
          data['ອັດຕາການຮັບ'] = this.calculateAcceptanceRate(item)
        }

        return data
      })
    },

    prepareFinancialSummary() {
      return this.mous.map(item => ({
        'ລະຫັດງານ': item.jobCode || '',
        'ບໍລິສັດ': item.employerCompany || '',
        'ມູນຄ່າໂຄງການ': item.projectAmount || 0,
        'ຄ່າບໍລິການ PM': item.pmCharge || 0,
        'ຍອດອອກອິນວອຍ': (item.invoiceStatistics?.totalReceivedAmount || 0) + (item.invoiceStatistics?.outstandingAmount || 0),
        'ຍອດຮັບແລ້ວ': item.invoiceStatistics?.totalReceivedAmount || 0,
        'ຍອດຄ້າງຮັບ': (item.pmCharge || 0) - (item.invoiceStatistics?.totalReceivedAmount || 0),
        'ເປີເຊັນຊຳລະ': this.calculatePaymentPercentage(item),
        'ສະກຸນເງິນ': item.currency?.code || 'USD',
        'ສະຖານະການເງິນ': this.getFinancialStatus(item),
        'ວັນທີ່ອັບເດດ': item.updatedAt ? this.formatDate(item.updatedAt) : ''
      }))
    },

    prepareJobBatchSummary() {
      return this.mous.map(item => ({
        'ລະຫັດງານ': item.jobCode || '',
        'ຊື່ງານ': item.jobTitle || '',
        'ບໍລິສັດ': item.employerCompany || '',
        'ລວມ Job Batch': item.jobBatchStatistics?.totalJobBatches || 0,
        'ກຳລັງດຳເນີນ': item.jobBatchStatistics?.activeJobBatches || 0,
        'ສຳເລັດແລ້ວ': item.jobBatchStatistics?.completedJobBatches || 0,
        'ຍົກເລີກ': item.jobBatchStatistics?.cancelledJobBatches || 0,
        'ອັດຕາສຳເລັດ': this.calculateCompletionRate(item),
        'ສະຖານະ': this.formatStatusName(item.jobStatus)
      }))
    },

    prepareApplicantSummary() {
      return this.mous.map(item => ({
        'ລະຫັດງານ': item.jobCode || '',
        'ຊື່ງານ': item.jobTitle || '',
        'ຕ້ອງການ': item.numberOfWorkers || 0,
        'ລວມຜູ້ສະໝັກ': item.applicantStatistics?.totalApplicants || 0,
        'ສຳພາດ': item.applicantStatistics?.interview || 0,
        'ຢືນຢັນ': item.applicantStatistics?.confirm || 0,
        'ປະຕິເສດ': item.applicantStatistics?.rejected || 0,
        'ສົ່ງແລ້ວ': item.applicantStatistics?.deployed || 0,
        'ອັດຕາການຮັບ': this.calculateAcceptanceRate(item),
        'ອັດຕາການສົ່ງ': this.calculateDeploymentRate(item),
        'ຄວາມຄືບໜ້າ': this.getProgressStatus(item)
      }))
    },

    createDetailedStatistics() {
      const stats = this.calculateComprehensiveStats()
      return [
        { 'ລາຍການ': '=== ສະຖິຕິທົ່ວໄປ ===', 'ຈຳນວນ': '', 'ເປີເຊັນ': '' },
        { 'ລາຍການ': 'ລວມ MOU ທັງໝົດ', 'ຈຳນວນ': stats.totalMOUs, 'ເປີເຊັນ': '100%' },
        { 'ລາຍການ': 'MOU ດຳເນີນການ', 'ຈຳນວນ': stats.activeMOUs, 'ເປີເຊັນ': stats.activePercentage + '%' },
        { 'ລາຍການ': 'MOU ສຳເລັດ', 'ຈຳນວນ': stats.completedMOUs, 'ເປີເຊັນ': stats.completedPercentage + '%' },
        { 'ລາຍການ': 'ລວມແຮງງານທີ່ຕ້ອງການ', 'ຈຳນວນ': stats.totalWorkers, 'ເປີເຊັນ': '' },
        { 'ລາຍການ': '', 'ຈຳນວນ': '', 'ເປີເຊັນ': '' },
        { 'ລາຍການ': '=== ສະຖິຕິການເງິນ ===', 'ຈຳນວນ': '', 'ເປີເຊັນ': '' },
        { 'ລາຍການ': 'ລວມມູນຄ່າໂຄງການ (USD)', 'ຈຳນວນ': stats.totalProjectValue, 'ເປີເຊັນ': '' },
        { 'ລາຍການ': 'ລວມຄ່າບໍລິການ (USD)', 'ຈຳນວນ': stats.totalPMCharge, 'ເປີເຊັນ': '' },
        { 'ລາຍການ': 'ລວມໄດ້ຮັບ (USD)', 'ຈຳນວນ': stats.totalReceived, 'ເປີເຊັນ': stats.receivedPercentage + '%' },
        { 'ລາຍການ': 'ລວມຄ້າງຮັບ (USD)', 'ຈຳນວນ': stats.totalOutstanding, 'ເປີເຊັນ': stats.outstandingPercentage + '%' },
        { 'ລາຍການ': '', 'ຈຳນວນ': '', 'ເປີເຊັນ': '' },
        { 'ລາຍການ': '=== ສະຖິຕິ Job Batch ===', 'ຈຳນວນ': '', 'ເປີເຊັນ': '' },
        { 'ລາຍການ': 'ລວມ Job Batch', 'ຈຳນວນ': stats.totalJobBatches, 'ເປີເຊັນ': '' },
        { 'ລາຍການ': 'Job Batch ດຳເນີນການ', 'ຈຳນວນ': stats.activeJobBatches, 'ເປີເຊັນ': stats.activeJobBatchPercentage + '%' },
        { 'ລາຍການ': '', 'ຈຳນວນ': '', 'ເປີເຊັນ': '' },
        { 'ລາຍການ': '=== ສະຖິຕິຜູ້ສະໝັກ ===', 'ຈຳນວນ': '', 'ເປີເຊັນ': '' },
        { 'ລາຍການ': 'ລວມຜູ້ສະໝັກ', 'ຈຳນວນ': stats.totalApplicants, 'ເປີເຊັນ': '' },
        { 'ລາຍການ': 'ຜູ້ສະໝັກສຳພາດ', 'ຈຳນວນ': stats.interviewApplicants, 'ເປີເຊັນ': stats.interviewPercentage + '%' },
        { 'ລາຍການ': 'ຜູ້ສະໝັກຢືນຢັນ', 'ຈຳນວນ': stats.confirmedApplicants, 'ເປີເຊັນ': stats.confirmedPercentage + '%' },
      ]
    },

    createAgencyPerformance() {
      const agencyStats = {}
      
      this.mous.forEach(mou => {
        const agencyName = mou.agency?.agencyName || 'ບໍ່ມີຕົວແທນ'
        
        if (!agencyStats[agencyName]) {
          agencyStats[agencyName] = {
            mouCount: 0,
            totalWorkers: 0,
            totalValue: 0,
            totalReceived: 0,
            totalApplicants: 0,
            confirmedApplicants: 0
          }
        }
        
        agencyStats[agencyName].mouCount++
        agencyStats[agencyName].totalWorkers += mou.numberOfWorkers || 0
        agencyStats[agencyName].totalValue += mou.projectAmount || 0
        agencyStats[agencyName].totalReceived += mou.invoiceStatistics?.totalReceivedAmount || 0
        agencyStats[agencyName].totalApplicants += mou.applicantStatistics?.totalApplicants || 0
        agencyStats[agencyName].confirmedApplicants += mou.applicantStatistics?.confirm || 0
      })

      return Object.entries(agencyStats).map(([agencyName, stats]) => ({
        'ຊື່ຕົວແທນ': agencyName,
        'ຈຳນວນ MOU': stats.mouCount,
        'ລວມແຮງງານ': stats.totalWorkers,
        'ມູນຄ່າລວມ (USD)': stats.totalValue,
        'ໄດ້ຮັບລວມ (USD)': stats.totalReceived,
        'ອັດຕາຊຳລະ': stats.totalValue > 0 ? Math.round((stats.totalReceived / stats.totalValue) * 100) : 0,
        'ລວມຜູ້ສະໝັກ': stats.totalApplicants,
        'ຜູ້ສະໝັກຢືນຢັນ': stats.confirmedApplicants,
        'ອັດຕາຢືນຢັນ': stats.totalApplicants > 0 ? Math.round((stats.confirmedApplicants / stats.totalApplicants) * 100) : 0,
        'ປະສິດທິພາບ': this.getAgencyPerformanceRating(stats)
      }))
    },

    // Helper calculation methods
    calculateComprehensiveStats() {
      const stats = {
        totalMOUs: this.mous.length,
        activeMOUs: 0,
        completedMOUs: 0,
        totalWorkers: 0,
        totalProjectValue: 0,
        totalPMCharge: 0,
        totalReceived: 0,
        totalOutstanding: 0,
        totalJobBatches: 0,
        activeJobBatches: 0,
        totalApplicants: 0,
        interviewApplicants: 0,
        confirmedApplicants: 0
      }

      this.mous.forEach(mou => {
        if (mou.jobStatus === 'in_progress') stats.activeMOUs++
        if (mou.jobStatus === 'completed') stats.completedMOUs++
        
        stats.totalWorkers += mou.numberOfWorkers || 0
        stats.totalProjectValue += this.convertToUSD(mou.projectAmount, mou.currency?.code)
        stats.totalPMCharge += this.convertToUSD(mou.pmCharge, mou.currency?.code)
        stats.totalReceived += this.convertToUSD(mou.invoiceStatistics?.totalReceivedAmount, mou.currency?.code)
        
        stats.totalJobBatches += mou.jobBatchStatistics?.totalJobBatches || 0
        stats.activeJobBatches += mou.jobBatchStatistics?.activeJobBatches || 0
        stats.totalApplicants += mou.applicantStatistics?.totalApplicants || 0
        stats.interviewApplicants += mou.applicantStatistics?.interview || 0
        stats.confirmedApplicants += mou.applicantStatistics?.confirm || 0
      })

      stats.totalOutstanding = stats.totalPMCharge - stats.totalReceived
      stats.activePercentage = stats.totalMOUs > 0 ? Math.round((stats.activeMOUs / stats.totalMOUs) * 100) : 0
      stats.completedPercentage = stats.totalMOUs > 0 ? Math.round((stats.completedMOUs / stats.totalMOUs) * 100) : 0
      stats.receivedPercentage = stats.totalPMCharge > 0 ? Math.round((stats.totalReceived / stats.totalPMCharge) * 100) : 0
      stats.outstandingPercentage = 100 - stats.receivedPercentage
      stats.activeJobBatchPercentage = stats.totalJobBatches > 0 ? Math.round((stats.activeJobBatches / stats.totalJobBatches) * 100) : 0
      stats.interviewPercentage = stats.totalApplicants > 0 ? Math.round((stats.interviewApplicants / stats.totalApplicants) * 100) : 0
      stats.confirmedPercentage = stats.totalApplicants > 0 ? Math.round((stats.confirmedApplicants / stats.totalApplicants) * 100) : 0

      return stats
    },

    calculatePaymentPercentage(item) {
      const total = item.pmCharge || 0
      const received = item.invoiceStatistics?.totalReceivedAmount || 0
      return total > 0 ? Math.round((received / total) * 100) + '%' : '0%'
    },

    calculateAcceptanceRate(item) {
      const total = item.applicantStatistics?.totalApplicants || 0
      const confirmed = item.applicantStatistics?.confirm || 0
      return total > 0 ? Math.round((confirmed / total) * 100) + '%' : '0%'
    },

    calculateCompletionRate(item) {
      const total = item.jobBatchStatistics?.totalJobBatches || 0
      const completed = item.jobBatchStatistics?.completedJobBatches || 0
      return total > 0 ? Math.round((completed / total) * 100) + '%' : '0%'
    },

    calculateDeploymentRate(item) {
      const confirmed = item.applicantStatistics?.confirm || 0
      const deployed = item.applicantStatistics?.deployed || 0
      return confirmed > 0 ? Math.round((deployed / confirmed) * 100) + '%' : '0%'
    },

    getFinancialStatus(item) {
      const percentage = parseFloat(this.calculatePaymentPercentage(item))
      if (percentage >= 100) return 'ຊຳລະຄົບແລ້ວ'
      if (percentage >= 50) return 'ຊຳລະບາງສ່ວນ'
      if (percentage > 0) return 'ເລີ່ມຊຳລະ'
      return 'ຍັງບໍ່ຊຳລະ'
    },

    getProgressStatus(item) {
      const workers = item.numberOfWorkers || 0
      const deployed = item.applicantStatistics?.deployed || 0
      const percentage = workers > 0 ? (deployed / workers) * 100 : 0
      
      if (percentage >= 100) return 'ສຳເລັດ'
      if (percentage >= 75) return 'ໃກ້ສຳເລັດ'
      if (percentage >= 25) return 'ກຳລັງດຳເນີນ'
      return 'ເລີ່ມຕົ້ນ'
    },

    getAgencyPerformanceRating(stats) {
      const paymentRate = stats.totalValue > 0 ? (stats.totalReceived / stats.totalValue) * 100 : 0
      const confirmRate = stats.totalApplicants > 0 ? (stats.confirmedApplicants / stats.totalApplicants) * 100 : 0
      const avgScore = (paymentRate + confirmRate) / 2
      
      if (avgScore >= 80) return 'ດີເລີດ'
      if (avgScore >= 60) return 'ດີ'
      if (avgScore >= 40) return 'ປານກາງ'
      return 'ຕ້ອງປັບປຸງ'
    },

    convertToUSD(amount, currency) {
      if (!amount) return 0
      if (!currency || currency === 'USD') return amount
      
      // Simple conversion rates - in real app, use actual rates
      const rates = { LAK: 0.00005, THB: 0.029, VND: 0.00004 }
      return amount * (rates[currency] || 1)
    },

    formatCurrencyForExcel(amount, currency) {
      if (!amount) return 0
      
      switch (this.exportOptions.currencyDisplay) {
        case 'usd':
          return this.convertToUSD(amount, currency)
        case 'lak':
          return this.convertToUSD(amount, currency) * 20000 // Rough LAK conversion
        default:
          return amount
      }
    },

    // Column width configurations
    setColumnWidths(worksheet, widths) {
      worksheet['!cols'] = widths
    },

    getMainColumnWidths() {
      return [
        { wch: 12 }, { wch: 25 }, { wch: 25 }, { wch: 20 }, { wch: 30 },
        { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 12 },
        { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 18 },
        { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 12 }, { wch: 15 }
      ]
    },

    getFinancialColumnWidths() {
      return [
        { wch: 12 }, { wch: 25 }, { wch: 15 }, { wch: 15 }, { wch: 15 },
        { wch: 15 }, { wch: 15 }, { wch: 12 }, { wch: 12 }, { wch: 18 }, { wch: 15 }
      ]
    },

    getJobBatchColumnWidths() {
      return [
        { wch: 12 }, { wch: 25 }, { wch: 25 }, { wch: 12 }, { wch: 12 },
        { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 15 }
      ]
    },

    getApplicantColumnWidths() {
      return [
        { wch: 12 }, { wch: 25 }, { wch: 12 }, { wch: 12 }, { wch: 12 },
        { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 15 }
      ]
    },

    getAgencyColumnWidths() {
      return [
        { wch: 25 }, { wch: 12 }, { wch: 12 }, { wch: 18 }, { wch: 18 },
        { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 12 }
      ]
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-CA')
    },

    downloadExcelFile(buffer) {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `MOU_Comprehensive_Report_${new Date().toISOString().split('T')[0]}.xlsx`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    },

    // Existing methods...
    async fetchMOUs() {
      this.loading = true
      try {
        const { page, itemsPerPage, sortBy, sortDesc } = this.options
        const params = {
          page,
          limit: itemsPerPage,
          sortBy: sortBy[0] || 'createdAt',
          sortOrder: sortDesc[0] ? 'DESC' : 'ASC',
        }

        if (this.search) {
          params.search = this.search
        }

        const { data } = await this.$axios.get('/api/mous', { params })
        if (data.success) {
          this.mous = data.data.mous
          this.pagination = data.data.pagination
        }
      } catch (error) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
        console.error('Error fetching MOUs:', error)
      } finally {
        this.loading = false
      }
    },

    openMaintenanceDialog() {
      this.editingItem = null
      this.maintenanceDialog = true
    },

    editMOU(item) {
      this.editingItem = { ...item }
      this.selectedMOUOutstanding = item.invoiceStatistics.outstandingAmount
      this.maintenanceDialog = true
    },

    viewJobBatches(item) {
      this.$router.push(`/job-batches?mouId=${item.id}`)
    },

    deleteMOU(item) {
      this.deletingItem = item
      this.deleteDialog = true
    },

    async confirmDelete() {
      try {
        const { data } = await this.$axios.delete(`/api/mous/${this.deletingItem.id}`)
        if (data.success) {
          this.$toast.success('ລົບ MOU ສຳເລັດແລ້ວ')
          await this.fetchMOUs()
        }
      } catch (error) {
        this.$toast.error('ການລົບບໍ່ສຳເລັດ')
        console.error('Error deleting MOU:', error)
      }
      this.deleteDialog = false
      this.deletingItem = null
    },

    async onMOUSaved() {
      this.maintenanceDialog = false
      this.editingItem = null
      await this.fetchMOUs()
    },

    formatStatusName(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        open: 'ເປີດ',
        in_progress: 'ກຳລັງດຳເນີນ',
        completed: 'ສຳເລັດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusMap[status] || status
    },

    getStatusColor(status) {
      const colorMap = {
        draft: 'grey',
        open: 'primary',
        in_progress: 'warning',
        completed: 'success',
        cancelled: 'error',
      }
      return colorMap[status] || 'grey'
    },

    getStatusIcon(status) {
      const iconMap = {
        draft: 'mdi-file-document-outline',
        open: 'mdi-door-open',
        in_progress: 'mdi-progress-clock',
        completed: 'mdi-check-circle',
        cancelled: 'mdi-close-circle',
      }
      return iconMap[status] || 'mdi-help-circle'
    },

    formatCurrency(amount, currencyCode = 'USD') {
      if (!amount) return '-'
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount)
    },
  },
}
</script>

<style scoped>
.v-card-title.primary {
  background: linear-gradient(45deg, #1976d2, #1565c0);
}

.text-caption {
  font-size: 12px !important;
}

.gap-1 {
  gap: 4px;
}
</style>