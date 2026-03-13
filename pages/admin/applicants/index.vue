<template>
  <div>
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ລະບົບຈັດການຜູ້ສະໝັກງານ</h1>
        <div class="header-actions">
          <v-btn color="primary" @click="openCreateDialog">
            <v-icon left>mdi-plus</v-icon>
            ເພີ່ມຜູ້ສະໝັກໃໝ່
          </v-btn>
          <v-btn color="success" @click="exportToExcel" :loading="exporting"
            :disabled="loading || filteredApplicants.length === 0">
            <v-icon left>mdi-file-excel</v-icon>
            ສົ່ງອອກ Excel
          </v-btn>
          <v-btn color="info" @click="importDialog = true">
            <v-icon left>mdi-file-import</v-icon>
            ນຳເຂົ້າ Excel
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <v-card class="filter-section">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field v-model="filters.search" label="ຄົ້ນຫາ" placeholder="ຊື່, ເບີໂທ, ໜັງສືເດີນທາງ..." outlined
              dense hide-details prepend-inner-icon="mdi-magnify" />
          </v-col>

          <v-col cols="12" md="3">
            <v-select v-model="filters.jobBatchId" :items="jobBatchOptions" label="Job Batch" outlined dense
              hide-details clearable />
          </v-col>

          <v-col cols="12" md="2">
            <v-select v-model="filters.gender" :items="genderOptions" label="ເພດ" outlined dense hide-details
              clearable />
          </v-col>

          <v-col cols="12" md="2">
            <v-select v-model="filters.status" :items="statusOptions" label="ສະຖານະ" outlined dense hide-details
              clearable />
          </v-col>

          <v-col cols="12" md="2">
            <v-btn color="primary" block @click="applyFilters">
              <v-icon left>mdi-magnify</v-icon>
              ຄົ້ນຫາ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Vuetify Data Table -->
    <v-card class="mt-4">
      <v-card-title class="py-2">
        <v-icon class="mr-2">mdi-table</v-icon>
        <span>ລາຍການຜູ້ສະໝັກງານ</span>
        <v-spacer />
        <v-chip color="primary" outlined> {{ filteredApplicants.length }} ລາຍການ </v-chip>
      </v-card-title>

      <v-data-table :headers="headers" :items="filteredApplicants" :loading="loading" :items-per-page="25"
        :footer-props="{
          'items-per-page-options': [10, 25, 50, 100],
        }" class="elevation-1">
        <!-- ID Column -->
        <template v-slot:item.id="{ item }">
          {{ item.id }}
        </template>

        <!-- Name Column -->
        <template v-slot:item.name="{ item }">
          <div class="applicant-name">
            <strong>{{ getFullName(item) }}</strong>
            <div class="contact-info">
              <span class="phone">{{ item.phone }}</span>
            </div>
          </div>
        </template>

        <!-- Gender Column -->
        <template v-slot:item.gender="{ item }">
          <v-chip small :color="item.gender === 'male' ? 'blue' : 'pink'" text-color="white">
            {{ formatGender(item.gender) }}
          </v-chip>
        </template>

        <!-- Age Column -->
        <template v-slot:item.age="{ item }">
          {{ item.age || '-' }} ປີ
        </template>

        <!-- Contact Column -->
        <template v-slot:item.phone="{ item }">
          <div class="contact-details">
            <v-icon small left>mdi-phone</v-icon>
            {{ item.phone }}
          </div>
        </template>

        <template v-slot:item.batch="{ item }">
          <div class="contact-details">
            <v-icon small left>mdi-office-building</v-icon>
            {{ item.jobBatch?.mou?.jobCode || '' }} - {{ item.jobBatch?.mou?.jobTitle || '' }}
          </div>
        </template>

        <template v-slot:item.employee="{ item }">
          <div class="contact-details">
            <v-icon small left>mdi-account</v-icon>
            {{ item.employee?.agencyName ?? '' }}
          </div>
        </template>

        <!-- Contract Start Date Column -->
        <template v-slot:item.contractStartDate="{ item }">
          <div class="contact-details">
            <v-icon small left>mdi-calendar-start</v-icon>
            {{ item.jobBatch?.batchStartDate || '-' }}
          </div>
        </template>

        <!-- Contract End Date Column -->
        <template v-slot:item.contractEndDate="{ item }">
          <div class="contact-details">
            <v-icon small left>mdi-calendar-end</v-icon>
            {{ item.jobBatch?.batchEndDate || '-' }}
          </div>
        </template>

        <!-- Agency Column -->
        <template v-slot:item.agency="{ item }">
          <div class="contact-details">
            <v-icon small left>mdi-office-building</v-icon>
            {{ item.agency?.agencyName || '-' }}
          </div>
        </template>

        <!-- Deposit Amount Column -->
        <template v-slot:item.depositAmount="{ item }">
          <div class="contact-details">
            <v-icon small left>mdi-cash</v-icon>
            {{ formatCurrency(item.depositAmount) }}
          </div>
        </template>

        <!-- Refund Status Column -->
        <template v-slot:item.isRefund="{ item }">
          <v-chip small :color="item.isRefund ? 'success' : 'warning'" text-color="white" @click="toggleRefund(item)"
            style="cursor: pointer">
            <v-icon left small>
              {{ item.isRefund ? 'mdi-cash-refund' : 'mdi-cash-clock' }}
            </v-icon>
            {{ item.isRefund ? 'ຄືນແລ້ວ' : 'ຍັງບໍ່ຄືນ' }}
          </v-chip>
        </template>

        <!-- Passport Column -->
        <template v-slot:item.passportAvailability="{ item }">
          <v-chip small :color="item.passportAvailability ? 'success' : 'error'" text-color="white">
            <v-icon left small>
              {{
                item.passportAvailability
                  ? 'mdi-check-circle'
                  : 'mdi-close-circle'
              }}
            </v-icon>
            {{ item.passportAvailability ? 'ມີ' : 'ບໍ່ມີ' }}
          </v-chip>
        </template>

        <!-- Passport Receive Column -->
        <template v-slot:item.passportRecieve="{ item }">
          <v-chip small :color="item.passportRecieve === true || item.passportRecieve === 'true'
            ? 'success'
            : 'error'
            " text-color="white">
            <v-icon left small>
              {{
                item.passportRecieve === true || item.passportRecieve === 'true'
                  ? 'mdi-check-circle'
                  : 'mdi-close-circle'
              }}
            </v-icon>
            {{
              item.passportRecieve === true || item.passportRecieve === 'true'
                ? 'ຮັບ'
                : 'ຍັງບໍ່ຮັບ'
            }}
          </v-chip>
        </template>

        <!-- Status Column -->
        <template v-slot:item.status="{ item }">
          <v-chip small :color="getStatusColor(item.status)" text-color="white">
            {{ formatStatus(item.status) }}
          </v-chip>
        </template>

        <!-- Actions Column -->
        <template v-slot:item.actions="{ item }">
          <v-btn icon small color="info" @click="editApplicant(item)">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog for Applicant Form -->
    <v-dialog v-model="showEditDialog" fullscreen persistent>
      <v-card>
        <ApplicantForm :key="dialogKey" :applicant="selectedApplicant" :job-batches="jobBatches"
          @close="closeEditDialog" @save="onApplicantSave" @load-job-batches="loadJobBatches" />
      </v-card>
    </v-dialog>

    <!-- Export Options Dialog -->
    <v-dialog v-model="exportDialog" max-width="600">
      <v-card>
        <v-card-title>
          <v-icon class="mr-2" color="green">mdi-file-excel</v-icon>
          ສົ່ງອອກຂໍ້ມູນຜູ້ສະໝັກ Excel
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <h4>ເລືອກຂໍ້ມູນທີ່ຕ້ອງການສົ່ງອອກ:</h4>
            </v-col>
            <v-col cols="12" md="6">
              <v-checkbox v-model="exportOptions.includePersonalInfo" label="ຂໍ້ມູນສ່ວນຕົວ" hide-details />
              <v-checkbox v-model="exportOptions.includeContactInfo" label="ຂໍ້ມູນຕິດຕໍ່" hide-details />
              <v-checkbox v-model="exportOptions.includeJobInfo" label="ຂໍ້ມູນວຽກງານ" hide-details />
            </v-col>
            <v-col cols="12" md="6">
              <v-checkbox v-model="exportOptions.includeFinancialInfo" label="ຂໍ້ມູນການເງິນ" hide-details />
              <v-checkbox v-model="exportOptions.includeDocuments" label="ຂໍ້ມູນເອກະສານ" hide-details />
              <v-checkbox v-model="exportOptions.includeStatistics" label="ສະຖິຕິສະຫຼຸບ" hide-details />
            </v-col>
            <v-col cols="12">
              <v-divider />
              <h4 class="mt-3">ຟອແມັດວັນທີ:</h4>
              <v-radio-group v-model="exportOptions.dateFormat" row hide-details>
                <v-radio label="DD/MM/YYYY" value="dmy" />
                <v-radio label="YYYY-MM-DD" value="ymd" />
                <v-radio label="MM/DD/YYYY" value="mdy" />
              </v-radio-group>
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

    <!-- Import Dialog -->
    <ImportDialog v-model="importDialog" :job-batches="jobBatches" @imported="fetchApplicants" />
  </div>
</template>

<script>
import ApplicantForm from '~/components/applicants/ApplicantDialog'
import ImportDialog from '~/components/applicants/ImportDialog'

export default {
  name: 'ApplicantSummary',
  components: { ApplicantForm, ImportDialog },
  middleware: 'auths',

  data() {
    return {
      showEditDialog: false,
      selectedApplicant: null,
      dialogKey: 0,
      applicants: [],
      filteredApplicants: [],
      jobBatches: [],
      loading: false,
      exporting: false,
      exportDialog: false,
      importDialog: false,

      exportOptions: {
        includePersonalInfo: true,
        includeContactInfo: true,
        includeJobInfo: true,
        includeFinancialInfo: true,
        includeDocuments: true,
        includeStatistics: true,
        dateFormat: 'dmy'
      },

      filters: {
        search: '',
        gender: '',
        status: '',
        jobBatchId: '',
      },

      headers: [
        { text: 'ID', value: 'id', sortable: true },
        { text: 'ຊື່ຜູ້ສະໝັກ', value: 'name', sortable: true },
        { text: 'ເພດ', value: 'gender', sortable: true },
        { text: 'ອາຍຸ', value: 'age', sortable: true },
        { text: 'ຕິດຕໍ່', value: 'phone', sortable: false },
        { text: 'Job batch', value: 'batch', sortable: false },
        {
          text: 'ວັນທີ່ເລີມຕົ້ນສັນຍາ',
          value: 'contractStartDate',
          sortable: false,
        },
        {
          text: 'ວັນທີ່ສິນສຸດສັນຍາ',
          value: 'contractEndDate',
          sortable: false,
        },
        { text: 'ຕົວແທນສັນຫາ', value: 'agency', sortable: false },
        { text: 'ມັດຈຳ', value: 'depositAmount', sortable: true },
        { text: 'ຄືນມັດຈຳ', value: 'isRefund', sortable: true },
        { text: 'ໜັງສືເດີນທາງ', value: 'passportAvailability', sortable: true },
        { text: 'ຮັບພາດສະປອດແລ້ວ', value: 'passportRecieve', sortable: true },
        { text: 'ສະຖານະ', value: 'status', sortable: true },
        { text: 'ຜູ້ຮັບຜິດຊອບ', value: 'employee', sortable: true },
        { text: 'ຟັງຊັ່ນ', value: 'actions', sortable: false, align: 'center' },
      ],

      genderOptions: [
        { text: 'ທັງໝົດ', value: '' },
        { text: 'ຊາຍ', value: 'male' },
        { text: 'ຍິງ', value: 'female' },
      ],

      statusOptions: [
        { text: 'ທັງໝົດ', value: '' },
        { text: 'ສໍາພາດ', value: 'INTERVIEW' },
        { text: 'ລົງທະບຽນ', value: 'REGISTER' },
        { text: 'ປະຕິເສດ', value: 'rejected' },
      ],
    }
  },

  computed: {
    jobBatchOptions() {
      const batches = this.jobBatches
        .filter((b) => b.id)
        .map((b) => ({
          text: `${b.mou.jobCode} ${b.runningNo}${b.workPlace ? ` - ${b.workPlace}` : ''
            }`,
          value: b.id,
        }))
      return [{ text: 'ທັງໝົດ', value: '' }, ...batches]
    },
  },

  mounted() {
    this.fetchApplicants()
    this.loadJobBatches()
  },

  methods: {
    // NEW: Excel Export Methods
    exportToExcel() {
      if (this.filteredApplicants.length === 0) {
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

        // Create main data sheet
        if (this.exportOptions.includePersonalInfo ||
          this.exportOptions.includeContactInfo ||
          this.exportOptions.includeJobInfo) {
          const mainData = this.prepareMainExcelData()
          const mainSheet = XLSX.utils.json_to_sheet(mainData)
          this.setColumnWidths(mainSheet, this.getMainColumnWidths())
          XLSX.utils.book_append_sheet(workbook, mainSheet, 'ຂໍ້ມູນຜູ້ສະໝັກ')
        }

        // Create financial data sheet
        if (this.exportOptions.includeFinancialInfo) {
          const financialData = this.prepareFinancialData()
          const financialSheet = XLSX.utils.json_to_sheet(financialData)
          this.setColumnWidths(financialSheet, this.getFinancialColumnWidths())
          XLSX.utils.book_append_sheet(workbook, financialSheet, 'ຂໍ້ມູນການເງິນ')
        }

        // Create documents status sheet
        if (this.exportOptions.includeDocuments) {
          const documentsData = this.prepareDocumentsData()
          const documentsSheet = XLSX.utils.json_to_sheet(documentsData)
          this.setColumnWidths(documentsSheet, this.getDocumentsColumnWidths())
          XLSX.utils.book_append_sheet(workbook, documentsSheet, 'ສະຖານະເອກະສານ')
        }

        // Create statistics sheet
        if (this.exportOptions.includeStatistics) {
          const statsData = this.createStatisticsData()
          const statsSheet = XLSX.utils.json_to_sheet(statsData)
          this.setColumnWidths(statsSheet, [{ wch: 30 }, { wch: 15 }])
          XLSX.utils.book_append_sheet(workbook, statsSheet, 'ສະຖິຕິ')
        }

        // Create job batch summary sheet
        const jobBatchData = this.createJobBatchSummary()
        const jobBatchSheet = XLSX.utils.json_to_sheet(jobBatchData)
        this.setColumnWidths(jobBatchSheet, this.getJobBatchColumnWidths())
        XLSX.utils.book_append_sheet(workbook, jobBatchSheet, 'ສະຫຼຸບ Job Batch')

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

    prepareMainExcelData() {
      return this.filteredApplicants.map(item => {
        const data = {}

        if (this.exportOptions.includePersonalInfo) {
          data['ID'] = item.id || ''
          data['ຊື່'] = item.firstName || ''
          data['ນາມສະກຸນ'] = item.lastName || ''
          data['ເພດ'] = this.formatGender(item.gender)
          data['ອາຍຸ'] = item.age || ''
          data['ວັນເກີດ'] = item.dateOfBirth ? this.formatDateForExcel(item.dateOfBirth) : ''
          data['ສັນຊາດ'] = item.nationality || ''
          data['ທີ່ຢູ່'] = item.address || ''
        }

        if (this.exportOptions.includeContactInfo) {
          data['ເບີໂທ'] = item.phone || ''
          data['ອີເມລ'] = item.email || ''
          data['ຜູ້ຕິດຕໍ່ສຸກເສີນ'] = item.emergencyContact || ''
          data['ເບີໂທສຸກເສີນ'] = item.emergencyPhone || ''
        }

        if (this.exportOptions.includeJobInfo) {
          data['ລະຫັດງານ'] = item.jobBatch?.mou?.jobCode || ''
          data['ຊື່ວຽກ'] = item.jobBatch?.mou?.jobTitle || ''
          data['ບໍລິສັດ'] = item.jobBatch?.mou?.employerCompany || ''
          data['ສະຖານທີ່ເຮັດວຽກ'] = item.jobBatch?.mou?.workLocation || ''
          data['Job Batch'] = item.jobBatch?.runningNo || ''
          data['ວັນເລີ່ມສັນຍາ'] = item.jobBatch?.batchStartDate ? this.formatDateForExcel(item.jobBatch.batchStartDate) : ''
          data['ວັນສິ້ນສຸດສັນຍາ'] = item.jobBatch?.batchEndDate ? this.formatDateForExcel(item.jobBatch.batchEndDate) : ''
          data['ຕົວແທນ'] = item.agency?.agencyName || ''
          data['ຜູ້ຮັບຜິດຊອບ'] = item.employee?.agencyName || ''
          data['ສະຖານະ'] = this.formatStatus(item.status)
        }

        return data
      })
    },

    prepareFinancialData() {
      return this.filteredApplicants.map(item => ({
        'ID': item.id || '',
        'ຊື່ເຕັມ': this.getFullName(item),
        'Job Batch': item.jobBatch?.runningNo || '',
        'ມັດຈຳ': item.depositAmount || 0,
        'ສະຖານະມັດຈຳ': item.isRefund ? 'ຄືນແລ້ວ' : 'ຍັງບໍ່ຄືນ',
        'ວັນທີ່ຄືນມັດຈຳ': item.refundDate ? this.formatDateForExcel(item.refundDate) : '',
        'ຄ່າບໍລິການ': item.serviceCharge || 0,
        'ຄ່າປະກັນໄພ': item.insuranceFee || 0,
        'ຄ່າໃຊ້ຈ່າຍອື່ນໆ': item.otherFees || 0,
        'ລວມຄ່າໃຊ້ຈ່າຍ': (item.serviceCharge || 0) + (item.insuranceFee || 0) + (item.otherFees || 0),
        'ໝາຍເຫດການເງິນ': item.financialNotes || ''
      }))
    },

    prepareDocumentsData() {
      return this.filteredApplicants.map(item => ({
        'ID': item.id || '',
        'ຊື່ເຕັມ': this.getFullName(item),
        'ໜັງສືເດີນທາງ': item.passportAvailability ? 'ມີ' : 'ບໍ່ມີ',
        'ເລກໜັງສືເດີນທາງ': item.passportNumber || '',
        'ວັນໝົດອາຍຸພາສະປອດ': item.passportExpiry ? this.formatDateForExcel(item.passportExpiry) : '',
        'ຮັບພາສະປອດແລ້ວ': (item.passportRecieve === true || item.passportRecieve === 'true') ? 'ຮັບແລ້ວ' : 'ຍັງບໍ່ຮັບ',
        'ວັນທີ່ຮັບພາສະປອດ': item.passportReceiveDate ? this.formatDateForExcel(item.passportReceiveDate) : '',
        'ໃບຢັ້ງຢືນການຮຽນ': item.educationCertificate ? 'ມີ' : 'ບໍ່ມີ',
        'ໃບຢັ້ງຢືນສຸຂະພາບ': item.healthCertificate ? 'ມີ' : 'ບໍ່ມີ',
        'ໃບຢັ້ງຢືນຄວາມປະພຶດ': item.policeClearance ? 'ມີ' : 'ບໍ່ມີ',
        'ເອກະສານອື່ນໆ': item.otherDocuments || '',
        'ໝາຍເຫດເອກະສານ': item.documentNotes || ''
      }))
    },

    createStatisticsData() {
      const stats = this.calculateStatistics()
      return [
        { 'ລາຍການ': '=== ສະຖິຕິທົ່ວໄປ ===', 'ຈຳນວນ': '' },
        { 'ລາຍການ': 'ລວມຜູ້ສະໝັກທັງໝົດ', 'ຈຳນວນ': stats.total },
        { 'ລາຍການ': 'ຜູ້ສະໝັກຊາຍ', 'ຈຳນວນ': stats.male },
        { 'ລາຍການ': 'ຜູ້ສະໝັກຍິງ', 'ຈຳນວນ': stats.female },
        { 'ລາຍການ': 'ອາຍຸສະເລ່ຍ', 'ຈຳນວນ': stats.averageAge },
        { 'ລາຍການ': '', 'ຈຳນວນ': '' },
        { 'ລາຍການ': '=== ສະຖິຕິສະຖານະ ===', 'ຈຳນວນ': '' },
        ...Object.entries(stats.statusBreakdown).map(([status, count]) => ({
          'ລາຍການ': status,
          'ຈຳນວນ': count
        })),
        { 'ລາຍການ': '', 'ຈຳນວນ': '' },
        { 'ລາຍການ': '=== ສະຖິຕິການເງິນ ===', 'ຈຳນວນ': '' },
        { 'ລາຍການ': 'ລວມມັດຈຳທັງໝົດ', 'ຈຳນວນ': stats.totalDeposit },
        { 'ລາຍການ': 'ມັດຈຳທີ່ຄືນແລ້ວ', 'ຈຳນວນ': stats.refundedDeposit },
        { 'ລາຍການ': 'ມັດຈຳຄ້າງຄືນ', 'ຈຳນວນ': stats.pendingRefund },
        { 'ລາຍການ': '', 'ຈຳນວນ': '' },
        { 'ລາຍການ': '=== ສະຖິຕິເອກະສານ ===', 'ຈຳນວນ': '' },
        { 'ລາຍການ': 'ມີພາສະປອດ', 'ຈຳນວນ': stats.hasPassport },
        { 'ລາຍການ': 'ບໍ່ມີພາສະປອດ', 'ຈຳນວນ': stats.noPassport },
        { 'ລາຍການ': 'ຮັບພາສະປອດແລ້ວ', 'ຈຳນວນ': stats.passportReceived },
        { 'ລາຍການ': 'ຍັງບໍ່ຮັບພາສະປອດ', 'ຈຳນວນ': stats.passportNotReceived },
      ]
    },

    createJobBatchSummary() {
      const jobBatchStats = {}

      this.filteredApplicants.forEach(applicant => {
        const batchKey = applicant.jobBatch ?
          `${applicant.jobBatch.mou?.jobCode || 'N/A'} - ${applicant.jobBatch.runningNo}` :
          'ບໍ່ມີ Job Batch'

        if (!jobBatchStats[batchKey]) {
          jobBatchStats[batchKey] = {
            company: applicant.jobBatch?.mou?.employerCompany || 'N/A',
            jobTitle: applicant.jobBatch?.mou?.jobTitle || 'N/A',
            total: 0,
            interview: 0,
            register: 0,
            rejected: 0,
            totalDeposit: 0,
            refundedCount: 0
          }
        }

        jobBatchStats[batchKey].total++
        if (applicant.status === 'INTERVIEW') jobBatchStats[batchKey].interview++
        if (applicant.status === 'REGISTER') jobBatchStats[batchKey].register++
        if (applicant.status === 'rejected') jobBatchStats[batchKey].rejected++

        jobBatchStats[batchKey].totalDeposit += applicant.depositAmount || 0
        if (applicant.isRefund) jobBatchStats[batchKey].refundedCount++
      })

      return Object.entries(jobBatchStats).map(([batchKey, stats]) => ({
        'Job Batch': batchKey,
        'ບໍລິສັດ': stats.company,
        'ຕຳແຫນ່ງວຽກ': stats.jobTitle,
        'ລວມຜູ້ສະໝັກ': stats.total,
        'ສໍາພາດ': stats.interview,
        'ລົງທະບຽນ': stats.register,
        'ປະຕິເສດ': stats.rejected,
        'ລວມມັດຈຳ': stats.totalDeposit,
        'ຄືນມັດຈຳແລ້ວ': stats.refundedCount,
        'ຄືນມັດຈຳແລ້ວ (%)': stats.total > 0 ? Math.round((stats.refundedCount / stats.total) * 100) : 0
      }))
    },

    calculateStatistics() {
      const stats = {
        total: this.filteredApplicants.length,
        male: 0,
        female: 0,
        totalAge: 0,
        validAgeCount: 0,
        statusBreakdown: {},
        totalDeposit: 0,
        refundedDeposit: 0,
        hasPassport: 0,
        noPassport: 0,
        passportReceived: 0,
        passportNotReceived: 0
      }

      this.filteredApplicants.forEach(applicant => {
        // Gender stats
        if (applicant.gender === 'male') stats.male++
        if (applicant.gender === 'female') stats.female++

        // Age stats
        if (applicant.age) {
          stats.totalAge += applicant.age
          stats.validAgeCount++
        }

        // Status breakdown
        const status = this.formatStatus(applicant.status)
        stats.statusBreakdown[status] = (stats.statusBreakdown[status] || 0) + 1

        // Financial stats
        stats.totalDeposit += applicant.depositAmount || 0
        if (applicant.isRefund) {
          stats.refundedDeposit += applicant.depositAmount || 0
        }

        // Document stats
        if (applicant.passportAvailability) {
          stats.hasPassport++
        } else {
          stats.noPassport++
        }

        if (applicant.passportRecieve === true || applicant.passportRecieve === 'true') {
          stats.passportReceived++
        } else {
          stats.passportNotReceived++
        }
      })

      stats.averageAge = stats.validAgeCount > 0 ?
        Math.round(stats.totalAge / stats.validAgeCount * 10) / 10 : 0
      stats.pendingRefund = stats.totalDeposit - stats.refundedDeposit

      return stats
    },

    setColumnWidths(worksheet, widths) {
      worksheet['!cols'] = widths
    },

    getMainColumnWidths() {
      const widths = []
      if (this.exportOptions.includePersonalInfo) {
        widths.push(
          { wch: 8 },   // ID
          { wch: 15 },  // First Name
          { wch: 15 },  // Last Name
          { wch: 10 },  // Gender
          { wch: 8 },   // Age
          { wch: 12 },  // DOB
          { wch: 12 },  // Nationality
          { wch: 25 }   // Address
        )
      }
      if (this.exportOptions.includeContactInfo) {
        widths.push(
          { wch: 15 },  // Phone
          { wch: 20 },  // Email
          { wch: 20 },  // Emergency Contact
          { wch: 15 }   // Emergency Phone
        )
      }
      if (this.exportOptions.includeJobInfo) {
        widths.push(
          { wch: 15 },  // Job Code
          { wch: 20 },  // Job Title
          { wch: 25 },  // Company
          { wch: 20 },  // Work Location
          { wch: 12 },  // Job Batch
          { wch: 15 },  // Start Date
          { wch: 15 },  // End Date
          { wch: 20 },  // Agency
          { wch: 20 },  // Employee
          { wch: 12 }   // Status
        )
      }
      return widths.length > 0 ? widths : [{ wch: 15 }]
    },

    getFinancialColumnWidths() {
      return [
        { wch: 8 },   // ID
        { wch: 20 },  // Name
        { wch: 12 },  // Job Batch
        { wch: 15 },  // Deposit
        { wch: 15 },  // Refund Status
        { wch: 15 },  // Refund Date
        { wch: 15 },  // Service Charge
        { wch: 15 },  // Insurance
        { wch: 15 },  // Other Fees
        { wch: 15 },  // Total
        { wch: 25 }   // Notes
      ]
    },

    getDocumentsColumnWidths() {
      return [
        { wch: 8 },   // ID
        { wch: 20 },  // Name
        { wch: 12 },  // Passport Available
        { wch: 15 },  // Passport Number
        { wch: 15 },  // Passport Expiry
        { wch: 15 },  // Passport Received
        { wch: 15 },  // Receive Date
        { wch: 15 },  // Education Cert
        { wch: 15 },  // Health Cert
        { wch: 15 },  // Police Clearance
        { wch: 20 },  // Other Docs
        { wch: 25 }   // Notes
      ]
    },

    getJobBatchColumnWidths() {
      return [
        { wch: 20 },  // Job Batch
        { wch: 25 },  // Company
        { wch: 20 },  // Job Title
        { wch: 12 },  // Total
        { wch: 12 },  // Interview
        { wch: 12 },  // Register
        { wch: 12 },  // Rejected
        { wch: 18 },  // Total Deposit
        { wch: 15 },  // Refunded Count
        { wch: 15 }   // Refund %
      ]
    },

    formatDateForExcel(date) {
      if (!date) return ''
      const d = new Date(date)

      switch (this.exportOptions.dateFormat) {
        case 'dmy':
          return d.toLocaleDateString('en-GB') // DD/MM/YYYY
        case 'ymd':
          return d.toLocaleDateString('en-CA') // YYYY-MM-DD
        case 'mdy':
          return d.toLocaleDateString('en-US') // MM/DD/YYYY
        default:
          return d.toLocaleDateString('en-GB')
      }
    },

    downloadExcelFile(buffer) {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Applicants_Report_${new Date().toISOString().split('T')[0]}.xlsx`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    },

    // Existing methods...
    formatCurrency(amount) {
      if (!amount) return '0 ກີບ'
      return new Intl.NumberFormat('lo-LA').format(amount) + ' ກີບ'
    },

    async toggleRefund(applicant) {
      try {
        const newRefundStatus = !applicant.isRefund
        const confirmMessage = newRefundStatus
          ? 'ຢືນຢັນການຄືນມັດຈຳ?'
          : 'ຍົກເລີກການຄືນມັດຈຳ?'

        if (!confirm(confirmMessage)) return

        this.loading = true
        const response = await this.$axios.put(
          `/api/applicants/${applicant.id}`,
          { isRefund: newRefundStatus }
        )

        if (response.data?.success) {
          applicant.isRefund = newRefundStatus
          this.$toast?.success(
            newRefundStatus ? 'ຄືນມັດຈຳສຳເລັດ' : 'ຍົກເລີກການຄືນມັດຈຳແລ້ວ'
          )
        }
      } catch (error) {
        console.error('Error toggling refund:', error)
        this.$toast?.error('ການດຳເນີນການບໍ່ສຳເລັດ')
      } finally {
        this.loading = false
      }
    },

    async loadJobBatches() {
      try {
        const { data } = await this.$axios.get('/api/batch-job')
        this.jobBatches = data?.success ? data.data.jobBatches || [] : []
      } catch (error) {
        console.error('Error loading job batches:', error)
        this.jobBatches = []
      }
    },

    async fetchApplicants() {
      this.loading = true
      try {
        const { data } = await this.$axios.get('/api/applicants', {
          params: { page: 1, limit: 1000, isActive: true },
        })
        this.applicants = data?.success ? data.data.applicants || [] : []
        this.applyFilters()
      } catch (error) {
        console.error('Error fetching applicants:', error)
        this.applicants = []
      } finally {
        this.loading = false
      }
    },

    openCreateDialog() {
      this.selectedApplicant = null
      this.dialogKey++
      this.showEditDialog = true
    },

    editApplicant(applicant) {
      this.selectedApplicant = applicant
      this.dialogKey++
      this.showEditDialog = true
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedApplicant = null
    },

    async onApplicantSave(applicantData) {
      try {
        this.loading = true
        const url = this.selectedApplicant?.id
          ? `/api/applicants/${this.selectedApplicant.id}`
          : '/api/applicants'
        const method = this.selectedApplicant?.id ? 'put' : 'post'
        const response = await this.$axios[method](url, applicantData)

        if (response.data?.success) {
          this.$toast?.success('ການບັນທຶກສຳເລັດແລ້ວ')
          this.closeEditDialog()
          await this.fetchApplicants()
        }
      } catch (error) {
        console.error('Error saving applicant:', error)
        this.$toast?.error(
          error.response?.data?.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
        )
      } finally {
        this.loading = false
      }
    },

    applyFilters() {
      let filtered = [...this.applicants]

      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (a) =>
            a.firstName.toLowerCase().includes(search) ||
            a.lastName.toLowerCase().includes(search) ||
            a.phone.includes(search)
        )
      }

      if (this.filters.gender) {
        filtered = filtered.filter((a) => a.gender === this.filters.gender)
      }

      if (this.filters.status) {
        filtered = filtered.filter((a) => a.status === this.filters.status)
      }

      if (this.filters.jobBatchId) {
        filtered = filtered.filter(
          (a) => a.jobBatchId?.toString() === this.filters.jobBatchId.toString()
        )
      }

      this.filteredApplicants = filtered
    },

    // Legacy export method (kept for compatibility)
    exportData() {
      const csvData = this.convertToCSV(this.filteredApplicants)
      this.downloadCSV(csvData, 'applicants.csv')
    },

    convertToCSV(data) {
      const headers = [
        'ID',
        'First Name',
        'Last Name',
        'Gender',
        'Phone',
        'Status',
      ]
      const rows = data.map((r) =>
        [r.id, r.firstName, r.lastName, r.gender, r.phone, r.status].join(',')
      )
      return [headers.join(','), ...rows].join('\n')
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

    getFullName(applicant) {
      return `${applicant.firstName} ${applicant.lastName}`
    },

    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ'
    },

    formatStatus(status) {
      const labels = {
        INTERVIEW: 'ສໍາພາດ',
        REGISTER: 'ລົງທະບຽນ',
        rejected: 'ປະຕິເສດ',
      }
      return labels[status] || status
    },

    getStatusColor(status) {
      const colors = {
        INTERVIEW: 'warning',
        REGISTER: 'success',
        rejected: 'error',
      }
      return colors[status] || 'grey'
    },

    truncateText(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    },
  },
}
</script>

<style scoped>
.applicant-summary-container {
  padding: 20px;
}

.page-header {
  margin-bottom: 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.filter-section {
  margin-bottom: 20px;
}

.applicant-name {
  display: flex;
  flex-direction: column;
}

.contact-info {
  font-size: 12px;
  color: #666;
}

.contact-details {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
}
</style>