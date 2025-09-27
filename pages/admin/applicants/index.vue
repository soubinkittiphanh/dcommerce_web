<template>
  <div class="applicant-summary-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ລະບົບຈັດການຜູ້ສະໝັກງານ</h1>
        <div class="header-actions">
          <v-btn color="primary" @click="openCreateDialog">
            <v-icon left>mdi-plus</v-icon>
            ເພີ່ມຜູ້ສະໝັກໃໝ່
          </v-btn>
          <v-btn color="secondary" @click="exportData">
            <v-icon left>mdi-download</v-icon>
            Export
          </v-btn>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <v-card class="filter-section">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="filters.search"
              label="ຄົ້ນຫາ"
              placeholder="ຊື່, ເບີໂທ, ໜັງສືເດີນທາງ..."
              outlined
              dense
              hide-details
              prepend-inner-icon="mdi-magnify"
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.jobBatchId"
              :items="jobBatchOptions"
              label="Job Batch"
              outlined
              dense
              hide-details
              clearable
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-select
              v-model="filters.gender"
              :items="genderOptions"
              label="ເພດ"
              outlined
              dense
              hide-details
              clearable
            />
          </v-col>

          <v-col cols="12" md="2">
            <v-select
              v-model="filters.status"
              :items="statusOptions"
              label="ສະຖານະ"
              outlined
              dense
              hide-details
              clearable
            />
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
      <v-data-table
        :headers="headers"
        :items="filteredApplicants"
        :loading="loading"
        :items-per-page="25"
        :footer-props="{
          'items-per-page-options': [10, 25, 50, 100],
        }"
        class="elevation-1"
      >
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

        <!-- Job Batch Column -->
        <!-- <template v-slot:item.jobBatch="{ item }">
          <div v-if="item.jobBatch" class="job-batch-info">
            <v-chip small color="primary" outlined>
              <v-icon left small>mdi-briefcase</v-icon>
              {{ item.jobBatch.batchName }}
            </v-chip>
          </div>
          <div v-else>
            <v-chip small outlined>
              <v-icon left small>mdi-minus-circle</v-icon>
              ບໍ່ມີ Job Batch
            </v-chip>
          </div>
        </template> -->

        <!-- Gender Column -->
        <template v-slot:item.gender="{ item }">
          <v-chip
            small
            :color="item.gender === 'male' ? 'blue' : 'pink'"
            text-color="white"
          >
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

        <!-- Address Column -->
        <template v-slot:item.address="{ item }">
          <div v-if="item.address">
            {{ truncateText(item.address, 20) }}
          </div>
        </template>

        <!-- Passport Column -->
        <template v-slot:item.passportAvailability="{ item }">
          <v-chip
            small
            :color="item.passportAvailability ? 'success' : 'error'"
            text-color="white"
          >
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
        <ApplicantForm
          :key="dialogKey"
          :applicant="selectedApplicant"
          :job-batches="jobBatches"
          @close="closeEditDialog"
          @save="onApplicantSave"
          @load-job-batches="loadJobBatches"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ApplicantForm from '~/components/applicants/ApplicantDialog'

export default {
  name: 'ApplicantSummary',
  components: { ApplicantForm },
  middleware: 'auths',

  data() {
    return {
      showEditDialog: false,
      selectedApplicant: null,
      dialogKey: 0, // Add this
      applicants: [],
      filteredApplicants: [],
      jobBatches: [],
      loading: false,
      filters: {
        search: '',
        gender: '',
        status: '',
        jobBatchId: '',
      },
      headers: [
        { text: 'ID', value: 'id', sortable: true },
        { text: 'ຊື່ຜູ້ສະໝັກ', value: 'name', sortable: true },
        // { text: 'Job Batch', value: 'jobBatch', sortable: false },
        { text: 'ເພດ', value: 'gender', sortable: true },
        { text: 'ອາຍຸ', value: 'age', sortable: true },
        { text: 'ຕິດຕໍ່', value: 'phone', sortable: false },
        { text: 'ທີ່ຢູ່', value: 'address', sortable: false },
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
        { text: 'ໜັງສືເດີນທາງ', value: 'passportAvailability', sortable: true },
        { text: 'ສະຖານະ', value: 'status', sortable: true },
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
          text: `${b.mou.jobCode} ${b.runningNo}${
            b.workPlace ? ` - ${b.workPlace}` : ''
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
      this.dialogKey++ // Increment key to force re-render
      this.showEditDialog = true
    },

    editApplicant(applicant) {
      this.selectedApplicant = applicant
      this.dialogKey++ // Increment key to force re-render
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