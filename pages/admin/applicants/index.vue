<template>
  <div class="applicant-summary-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ລະບົບຈັດການຜູ້ສະໝັກງານ</h1>
        <div class="header-actions">
          <button class="btn btn-primary" @click="openCreateDialog">
            <i class="fas fa-plus"></i>
            ເພີ່ມຜູ້ສະໝັກໃໝ່
          </button>
          <button class="btn btn-secondary" @click="exportData">
            <i class="fas fa-download"></i>
            Export
          </button>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="filter-section">
      <div class="filter-row">
        <div class="filter-group">
          <label>ຄົ້ນຫາ:</label>
          <input
            type="text"
            v-model="filters.search"
            class="form-control"
            placeholder="ຊື່, ເບີໂທ, ໜັງສືເດີນທາງ..."
            @input="applyFilters"
          />
        </div>

        <div class="filter-group">
          <label>ເພດ:</label>
          <select v-model="filters.gender" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="male">ຊາຍ</option>
            <option value="female">ຍິງ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ສະຖານະ:</label>
          <select v-model="filters.status" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="INTERVIEW">ສໍາພາດ</option>
            <option value="REGISTER">ລົງທະບຽນ</option>
            <option value="rejected">ປະຕິເສດ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ມີໜັງສືເດີນທາງ:</label>
          <select v-model="filters.passportAvailability" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="true">ມີ</option>
            <option value="false">ບໍ່ມີ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ເມືອງ:</label>
          <select v-model="filters.city" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option v-for="city in availableCities" :key="city" :value="city">{{ city }}</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ສະຖານທີ່ທຳງານ:</label>
          <select v-model="filters.workPlace" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option v-for="place in availableWorkPlaces" :key="place" :value="place">{{ place }}</option>
          </select>
        </div>

        <div class="filter-actions">
          <button class="btn btn-outline-primary" @click="applyFilters">
            <i class="fas fa-search"></i>
            ຄົ້ນຫາ
          </button>
          <button class="btn btn-outline-secondary" @click="resetFilters">
            <i class="fas fa-undo"></i>
            Reset
          </button>
        </div>
      </div>
    </div>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <!-- Total Applicants Card -->
      <div class="summary-card total-applicants">
        <div class="card-icon total">
          <i class="fas fa-users"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.total.count }}</h3>
          <p>ລວມຜູ້ສະໝັກທັງໝົດ</p>
        </div>
      </div>

      <!-- Gender Statistics Cards -->
      <div class="summary-card gender-male">
        <div class="card-icon male">
          <i class="fas fa-male"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.male.count }}</h3>
          <p>ຊາຍ ({{ summaryStats.male.percentage }}%)</p>
        </div>
      </div>

      <div class="summary-card gender-female">
        <div class="card-icon female">
          <i class="fas fa-female"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.female.count }}</h3>
          <p>ຍິງ ({{ summaryStats.female.percentage }}%)</p>
        </div>
      </div>

      <!-- Status Statistics Cards -->
      <div class="summary-card status-interview">
        <div class="card-icon interview">
          <i class="fas fa-comments"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.interview.count }}</h3>
          <p>ລໍຖ້າສໍາພາດ</p>
        </div>
      </div>

      <div class="summary-card status-register">
        <div class="card-icon register">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.register.count }}</h3>
          <p>ລົງທະບຽນແລ້ວ</p>
        </div>
      </div>

      <!-- Passport Card -->
      <div class="summary-card passport-available">
        <div class="card-icon passport">
          <i class="fas fa-passport"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.withPassport.count }}</h3>
          <p>ມີໜັງສືເດີນທາງ</p>
          <small class="passport-rate">{{ summaryStats.withPassport.percentage }}% ຂອງທັງໝົດ</small>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-section">
      <div class="table-header">
        <div class="table-title">
          <h3>ລາຍຊື່ຜູ້ສະໝັກ</h3>
          <span class="record-count">{{ filteredApplicants.length }} ລາຍການ</span>
        </div>
        <div class="table-actions">
          <div class="per-page-selector">
            <label>Show:</label>
            <select v-model="pagination.perPage" @change="updatePagination">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>per page</span>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th @click="sortBy('id')" class="sortable">
                ID
                <i :class="getSortIcon('id')"></i>
              </th>
              <th @click="sortBy('firstName')" class="sortable">
                ຊື່ຜູ້ສະໝັກ
                <i :class="getSortIcon('firstName')"></i>
              </th>
              <th @click="sortBy('gender')" class="sortable">
                ເພດ
                <i :class="getSortIcon('gender')"></i>
              </th>
              <th @click="sortBy('age')" class="sortable">
                ອາຍຸ
                <i :class="getSortIcon('age')"></i>
              </th>
              <th>ຕິດຕໍ່</th>
              <th>ທີ່ຢູ່</th>
              <th>ໜັງສືເດີນທາງ</th>
              <th>ວຽກ</th>
              <th @click="sortBy('status')" class="sortable">
                ສະຖານະ
                <i :class="getSortIcon('status')"></i>
              </th>
              <th @click="sortBy('registertDate')" class="sortable">
                ວັນທີລົງທະບຽນ
                <i :class="getSortIcon('registertDate')"></i>
              </th>
              <th>ຟັງຊັ່ນ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="applicant in paginatedApplicants" :key="applicant.id">
              <td>{{ applicant.id }}</td>
              <td>
                <div class="applicant-name">
                  <strong>{{ getFullName(applicant) }}</strong>
                  <div class="contact-info">
                    <span class="phone">{{ applicant.phone }}</span>
                    <span v-if="applicant.emergencyContactNo" class="emergency-phone">
                      (ຕິດຕໍ່ສຸກເສີນ: {{ applicant.emergencyContactNo }})
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <span :class="['gender-badge', applicant.gender]">
                  {{ formatGender(applicant.gender) }}
                </span>
              </td>
              <td class="age-cell">
                {{ applicant.age || '-' }} ປີ
                <div v-if="applicant.maritalStatus" class="marital-status">
                  {{ formatMaritalStatus(applicant.maritalStatus) }}
                </div>
              </td>
              <td>
                <div class="contact-details">
                  <div class="phone">
                    <i class="fas fa-phone"></i>
                    {{ applicant.phone }}
                  </div>
                  <div v-if="applicant.emergencyContactNo" class="emergency">
                    <i class="fas fa-exclamation-triangle"></i>
                    {{ applicant.emergencyContactNo }}
                  </div>
                </div>
              </td>
              <td>
                <div class="address-details">
                  <div v-if="applicant.address" class="address">
                    {{ truncateText(applicant.address, 20) }}
                  </div>
                  <div class="location-parts">
                    <span v-if="applicant.village">{{ applicant.village }}</span>
                    <span v-if="applicant.city">{{ applicant.city }}</span>
                    <span v-if="applicant.district">{{ applicant.district }}</span>
                  </div>
                </div>
              </td>
              <td>
                <div class="passport-info">
                  <span :class="['passport-status', applicant.passportAvailability ? 'has-passport' : 'no-passport']">
                    <i :class="applicant.passportAvailability ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                    {{ applicant.passportAvailability ? 'ມີ' : 'ບໍ່ມີ' }}
                  </span>
                  <div v-if="applicant.passportNo" class="passport-number">
                    {{ applicant.passportNo }}
                  </div>
                  <div v-if="applicant.passportExpiredDate" class="passport-expiry">
                    ໝົດອາຍຸ: {{ formatDate(applicant.passportExpiredDate) }}
                  </div>
                </div>
              </td>
              <td>
                <div class="work-info">
                  <div v-if="applicant.workPlace" class="workplace">
                    <i class="fas fa-building"></i>
                    {{ applicant.workPlace }}
                  </div>
                  <div v-if="applicant.contactStartDate && applicant.contactEndDate" class="contract-period">
                    {{ formatDate(applicant.contactStartDate) }} - {{ formatDate(applicant.contactEndDate) }}
                  </div>
                </div>
              </td>
              <td>
                <span :class="['status-badge', applicant.status]">
                  {{ formatStatus(applicant.status) }}
                </span>
              </td>
              <td>
                <div class="date-info">
                  <div v-if="applicant.registertDate">
                    {{ formatDate(applicant.registertDate) }}
                  </div>
                  <div v-if="applicant.interviewExamDate" class="interview-date">
                    ສໍາພາດ: {{ formatDate(applicant.interviewExamDate) }}
                  </div>
                </div>
              </td>
              <td class="actions-cell">
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="viewApplicant(applicant)"
                  title="ເບິ່ງລາຍລະອຽດ"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  @click="editApplicant(applicant)"
                  title="ແກ້ໄຂ"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  v-if="applicant.status === 'INTERVIEW'"
                  class="btn btn-sm btn-outline-success"
                  @click="updateToRegister(applicant)"
                  title="ຍ້າຍໄປລົງທະບຽນ"
                >
                  <i class="fas fa-check"></i>
                </button>
                <button
                  v-if="applicant.status !== 'rejected'"
                  class="btn btn-sm btn-outline-danger"
                  @click="rejectApplicant(applicant)"
                  title="ປະຕິເສດ"
                >
                  <i class="fas fa-times"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination-container">
        <div class="pagination-info">
          Showing {{ paginationInfo.start }} to {{ paginationInfo.end }} of
          {{ paginationInfo.total }} entries
        </div>
        <div class="pagination-controls">
          <button
            class="btn btn-sm btn-outline-secondary"
            @click="previousPage"
            :disabled="pagination.currentPage === 1"
          >
            Previous
          </button>

          <span v-for="page in visiblePages" :key="page">
            <button
              v-if="page !== '...'"
              class="btn btn-sm"
              :class="
                page === pagination.currentPage
                  ? 'btn-primary'
                  : 'btn-outline-secondary'
              "
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
            <span v-else class="pagination-ellipsis">...</span>
          </span>

          <button
            class="btn btn-sm btn-outline-secondary"
            @click="nextPage"
            :disabled="pagination.currentPage === totalPages"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Applicant Dialog (for Create/Edit) -->
    <client-only>
      <ApplicantDialog
        :visible="showEditDialog"
        :applicant="selectedApplicant"
        @close="closeEditDialog"
        @save="onApplicantSave"
      />
    </client-only>

    <!-- Applicant View Dialog -->
    <client-only>
      <ApplicantViewDialog
        :visible="showViewDialog"
        :applicant="selectedApplicant"
        @close="closeViewDialog"
      />
    </client-only>

    <!-- Status Update Dialog -->
    <client-only>
      <StatusUpdateDialog
        :visible="showStatusDialog"
        :applicant="selectedApplicant"
        :action="statusAction"
        @close="closeStatusDialog"
        @confirm="onStatusUpdate"
      />
    </client-only>

    <!-- Loading Overlay -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner">
        <i class="fas fa-spinner fa-spin"></i>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicantDialog from '~/components/applicants/ApplicantDialog'
import ApplicantViewDialog from '~/components/applicants/ApplicantViewDialog'
import StatusUpdateDialog from '~/components/applicants/StatusUpdateDialog'

export default {
  name: 'ApplicantSummary',
  components: {
    ApplicantDialog,
    ApplicantViewDialog,
    StatusUpdateDialog,
  },
  middleware: 'auths',
  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      showStatusDialog: false,
      selectedApplicant: null,
      statusAction: '', // 'register' or 'reject'

      // Data arrays
      applicants: [],
      filteredApplicants: [],

      // Loading states
      loading: false,

      // Filters
      filters: {
        search: '',
        gender: '',
        status: '',
        passportAvailability: '',
        city: '',
        workPlace: '',
      },

      // Sorting
      sort: {
        field: 'registertDate',
        direction: 'desc',
      },

      // Pagination
      pagination: {
        currentPage: 1,
        perPage: 25,
      },

      // Summary statistics
      summaryStats: {
        total: { count: 0 },
        male: { count: 0, percentage: 0 },
        female: { count: 0, percentage: 0 },
        interview: { count: 0 },
        register: { count: 0 },
        rejected: { count: 0 },
        withPassport: { count: 0, percentage: 0 },
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    availableCities() {
      const cities = [...new Set(this.applicants.map(a => a.city).filter(Boolean))]
      return cities.sort()
    },

    availableWorkPlaces() {
      const workPlaces = [...new Set(this.applicants.map(a => a.workPlace).filter(Boolean))]
      return workPlaces.sort()
    },

    paginatedApplicants() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredApplicants.slice(start, end)
    },

    totalPages() {
      return Math.ceil(
        this.filteredApplicants.length / this.pagination.perPage
      )
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredApplicants.length
      )
      return {
        start,
        end,
        total: this.filteredApplicants.length,
      }
    },

    visiblePages() {
      const pages = []
      const current = this.pagination.currentPage
      const total = this.totalPages

      if (total <= 7) {
        for (let i = 1; i <= total; i++) {
          pages.push(i)
        }
      } else {
        if (current <= 4) {
          for (let i = 1; i <= 5; i++) pages.push(i)
          pages.push('...')
          pages.push(total)
        } else if (current >= total - 3) {
          pages.push(1)
          pages.push('...')
          for (let i = total - 4; i <= total; i++) pages.push(i)
        } else {
          pages.push(1)
          pages.push('...')
          for (let i = current - 1; i <= current + 1; i++) pages.push(i)
          pages.push('...')
          pages.push(total)
        }
      }

      return pages
    },
  },

  mounted() {
    this.fetchApplicants()
  },

  methods: {
    // Data Loading Methods
    async fetchApplicants() {
      this.loading = true
      try {
        const params = {
          page: 1,
          limit: 1000, // Get all for client-side filtering
          isActive: true,
          ...this.filters,
        }

        // Updated API endpoint to match backend
        const { data } = await this.$axios.get('/api/applicant', { params })

        if (data && data.success) {
          this.applicants = data.data.applicants || []
        } else {
          this.applicants = []
        }

        this.applyFilters()
        this.calculateSummaryStats()
      } catch (error) {
        console.error('Error fetching applicants:', error)
        this.showToast('Error loading applicant data', 'error')
        this.applicants = []
      } finally {
        this.loading = false
      }
    },

    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedApplicant = null
      this.showEditDialog = true
    },

    async editApplicant(applicant) {
      this.selectedApplicant = applicant
      this.showEditDialog = true
    },

    viewApplicant(applicant) {
      this.selectedApplicant = applicant
      this.showViewDialog = true
    },

    updateToRegister(applicant) {
      this.selectedApplicant = applicant
      this.statusAction = 'register'
      this.showStatusDialog = true
    },

    rejectApplicant(applicant) {
      this.selectedApplicant = applicant
      this.statusAction = 'reject'
      this.showStatusDialog = true
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedApplicant = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedApplicant = null
    },

    closeStatusDialog() {
      this.showStatusDialog = false
      this.selectedApplicant = null
      this.statusAction = ''
    },

    // Save Handler
    async onApplicantSave(applicantData) {
      try {
        this.loading = true

        let response
        if (this.selectedApplicant && this.selectedApplicant.id) {
          response = await this.$axios.put(
            `/api/applicant/${this.selectedApplicant.id}`,
            applicantData
          )
        } else {
          response = await this.$axios.post('/api/applicant', applicantData)
        }

        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success')
          this.closeEditDialog()
          await this.fetchApplicants()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error('Error saving applicant:', error)
        const errorMessage =
          error.response?.data?.message || error.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    // Status Update Handler
    async onStatusUpdate(statusData) {
      try {
        this.loading = true

        const response = await this.$axios.patch(
          `/api/applicant/${this.selectedApplicant.id}/status`,
          statusData
        )

        if (response.data && response.data.success) {
          this.showToast('ອັບເດດສະຖານະສຳເລັດແລ້ວ', 'success')
          this.closeStatusDialog()
          await this.fetchApplicants()
        } else {
          throw new Error(response.data?.message || 'Status update failed')
        }
      } catch (error) {
        console.error('Error updating status:', error)
        const errorMessage =
          error.response?.data?.message || 
          error.message || 
          'ອັບເດດສະຖານະບໍ່ສຳເລັດ'
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    // Filter and Search Methods
    applyFilters() {
      let filtered = [...this.applicants]

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (applicant) =>
            applicant.firstName.toLowerCase().includes(search) ||
            applicant.lastName.toLowerCase().includes(search) ||
            applicant.phone.includes(search) ||
            (applicant.passportNo && applicant.passportNo.toLowerCase().includes(search))
        )
      }

      // Gender filter
      if (this.filters.gender) {
        filtered = filtered.filter(
          (applicant) => applicant.gender === this.filters.gender
        )
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(
          (applicant) => applicant.status === this.filters.status
        )
      }

      // Passport filter
      if (this.filters.passportAvailability !== '') {
        const hasPassport = this.filters.passportAvailability === 'true'
        filtered = filtered.filter(
          (applicant) => applicant.passportAvailability === hasPassport
        )
      }

      // City filter
      if (this.filters.city) {
        filtered = filtered.filter(
          (applicant) => applicant.city === this.filters.city
        )
      }

      // Work place filter
      if (this.filters.workPlace) {
        filtered = filtered.filter(
          (applicant) => applicant.workPlace === this.filters.workPlace
        )
      }

      this.filteredApplicants = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.filters = {
        search: '',
        gender: '',
        status: '',
        passportAvailability: '',
        city: '',
        workPlace: '',
      }
      this.applyFilters()
    },

    sortBy(field) {
      if (this.sort.field === field) {
        this.sort.direction = this.sort.direction === 'asc' ? 'desc' : 'asc'
      } else {
        this.sort.field = field
        this.sort.direction = 'asc'
      }
      this.sortData()
    },

    sortData() {
      this.filteredApplicants.sort((a, b) => {
        let aVal = a[this.sort.field]
        let bVal = b[this.sort.field]

        if (typeof aVal === 'string') {
          aVal = aVal.toLowerCase()
          bVal = bVal.toLowerCase()
        }

        if (aVal < bVal) return this.sort.direction === 'asc' ? -1 : 1
        if (aVal > bVal) return this.sort.direction === 'asc' ? 1 : -1
        return 0
      })
    },

    getSortIcon(field) {
      if (this.sort.field !== field) return 'fas fa-sort'
      return this.sort.direction === 'asc'
        ? 'fas fa-sort-up'
        : 'fas fa-sort-down'
    },

    calculateSummaryStats() {
      const total = this.filteredApplicants.length
      const male = this.filteredApplicants.filter(a => a.gender === 'male').length
      const female = this.filteredApplicants.filter(a => a.gender === 'female').length
      const interview = this.filteredApplicants.filter(a => a.status === 'INTERVIEW').length
      const register = this.filteredApplicants.filter(a => a.status === 'REGISTER').length
      const rejected = this.filteredApplicants.filter(a => a.status === 'rejected').length
      const withPassport = this.filteredApplicants.filter(a => a.passportAvailability).length

      this.summaryStats = {
        total: { count: total },
        male: { 
          count: male, 
          percentage: total > 0 ? Math.round((male / total) * 100) : 0
        },
        female: { 
          count: female, 
          percentage: total > 0 ? Math.round((female / total) * 100) : 0
        },
        interview: { count: interview },
        register: { count: register },
        rejected: { count: rejected },
        withPassport: { 
          count: withPassport, 
          percentage: total > 0 ? Math.round((withPassport / total) * 100) : 0 
        },
      }
    },

    // Pagination methods
    updatePagination() {
      this.pagination.currentPage = 1
    },

    previousPage() {
      if (this.pagination.currentPage > 1) {
        this.pagination.currentPage--
      }
    },

    nextPage() {
      if (this.pagination.currentPage < this.totalPages) {
        this.pagination.currentPage++
      }
    },

    goToPage(page) {
      this.pagination.currentPage = page
    },

    // Export
    exportData() {
      const csvData = this.convertToCSV(this.filteredApplicants)
      this.downloadCSV(csvData, 'applicants-summary.csv')
    },

    convertToCSV(data) {
      const headers = [
        'ID',
        'First Name',
        'Last Name',
        'Gender',
        'Age',
        'Marital Status',
        'Phone',
        'Emergency Contact',
        'Address',
        'Village',
        'City',
        'District',
        'Passport Available',
        'Passport No',
        'Passport Expiry',
        'Work Place',
        'Contract Start',
        'Contract End',
        'Status',
        'Register Date',
        'Interview Date',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            row.id,
            row.firstName,
            row.lastName,
            row.gender,
            row.age || '',
            row.maritalStatus || '',
            row.phone,
            row.emergencyContactNo || '',
            row.address || '',
            row.village || '',
            row.city || '',
            row.district || '',
            row.passportAvailability ? 'Yes' : 'No',
            row.passportNo || '',
            row.passportExpiredDate || '',
            row.workPlace || '',
            row.contactStartDate || '',
            row.contactEndDate || '',
            row.status,
            row.registertDate || '',
            row.interviewExamDate || '',
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

    // Utility methods
    getFullName(applicant) {
      return `${applicant.firstName} ${applicant.lastName}`
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ'
    },

    formatMaritalStatus(status) {
      const statusLabels = {
        single: 'ໂສດ',
        married: 'ແຕ່ງງານ',
        divorced: 'ຢ່າຮ້າງ',
        widowed: 'ເປັນເມ່າຍ',
      }
      return statusLabels[status] || status
    },

    formatStatus(status) {
      const statusLabels = {
        INTERVIEW: 'ສໍາພາດ',
        REGISTER: 'ລົງທະບຽນ',
        rejected: 'ປະຕິເສດ',
      }
      return statusLabels[status] || status
    },

    truncateText(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    },

    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`)
      if (this.$toast) {
        this.$toast[type](message)
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`)
        } else if (type === 'success') {
          console.log(`✅ ${message}`)
        }
      }
    },
  },
}
</script>

<style scoped>
/* Existing styles remain the same, with additions for new components */

/* Passport Status Styles */
.passport-status.has-passport {
  color: #10b981;
}

.passport-status.no-passport {
  color: #dc2626;
}

.passport-number {
  font-size: 11px;
  font-family: monospace;
  color: #666;
}

.passport-expiry {
  font-size: 11px;
  color: #666;
}

/* Work Info Styles */
.work-info .workplace {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  margin-bottom: 2px;
}

.contract-period {
  font-size: 11px;
  color: #666;
}

/* Address Details Styles */
.address-details .address {
  font-size: 12px;
  margin-bottom: 2px;
}

.location-parts {
  font-size: 11px;
  color: #666;
}

.location-parts span {
  margin-right: 8px;
}

.location-parts span:not(:last-child)::after {
  content: "•";
  margin-left: 8px;
  color: #ccc;
}

/* Marital Status */
.marital-status {
  font-size: 11px;
  color: #666;
  margin-top: 2px;
}

/* Emergency Contact */
.emergency-phone {
  font-size: 11px;
  color: #666;
  margin-left: 8px;
}

.contact-details .emergency {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #f59e0b;
}

/* Date Info Styles */
.date-info .interview-date {
  font-size: 11px;
  color: #666;
  margin-top: 2px;
}

/* Status Badge Updates */
.status-badge.INTERVIEW {
  background-color: #fef3c7;
  color: #d97706;
}

.status-badge.REGISTER {
  background-color: #d1fae5;
  color: #065f46;
}

/* Summary Card Updates */
.summary-card.status-interview .card-icon.interview {
  background: #fef3c7;
  color: #d97706;
}

.summary-card.status-register .card-icon.register {
  background: #d1fae5;
  color: #065f46;
}

.summary-card.passport-available .card-icon.passport {
  background: #dbeafe;
  color: #3b82f6;
}

.passport-rate {
  font-size: 12px;
  opacity: 0.8;
  margin-top: 4px;
  display: block;
}

/* Rest of the existing CSS styles remain the same */
.applicant-summary-container {
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* Header Styles */
.page-header {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  margin: 0;
  color: #333;
  font-size: 28px;
  font-weight: 600;
}

.header-actions {
  display: flex;
  gap: 12px;
}

/* Filter Styles */
.filter-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filter-row {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 150px;
}

.filter-group label {
  font-weight: 500;
  color: #555;
  font-size: 14px;
}

.filter-actions {
  display: flex;
  gap: 8px;
  align-self: flex-end;
}

/* Enhanced Summary Card Styles */
.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.summary-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.summary-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Total Applicants Card */
.summary-card.total-applicants {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.summary-card.total-applicants .card-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Gender Cards */
.summary-card.gender-male {
  border-left: 4px solid #3b82f6;
}

.summary-card.gender-female {
  border-left: 4px solid #ec4899;
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 20px;
  flex-shrink: 0;
}

.card-icon.total {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.card-icon.male {
  background: #dbeafe;
  color: #3b82f6;
}

.card-icon.female {
  background: #fce7f3;
  color: #ec4899;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-content h3 {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 700;
  word-break: break-word;
}

.card-content p {
  margin: 0;
  font-size: 14px;
}

/* Table Styles */
.table-section {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.table-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-title h3 {
  margin: 0;
  color: #333;
}

.record-count {
  color: #666;
  font-size: 14px;
  margin-left: 8px;
}

.per-page-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.data-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
}

.data-table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s;
}

.data-table th.sortable:hover {
  background-color: #e9ecef;
}

.data-table th i {
  margin-left: 8px;
  opacity: 0.5;
}

/* Applicant Name Cell */
.applicant-name strong {
  display: block;
  font-size: 14px;
  color: #333;
}

.contact-info {
  font-size: 12px;
  color: #666;
  margin-top: 2px;
}

.phone {
  font-family: monospace;
}

/* Contact Details */
.contact-details {
  font-size: 12px;
  color: #666;
}

.contact-details .phone {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

.contact-details i {
  width: 12px;
  color: #999;
}

/* Age Cell */
.age-cell {
  font-weight: 600;
  color: #495057;
}

/* Badges */
.gender-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.gender-badge.male {
  background-color: #dbeafe;
  color: #3b82f6;
}

.gender-badge.female {
  background-color: #fce7f3;
  color: #ec4899;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.rejected {
  background-color: #fee2e2;
  color: #dc2626;
}

.actions-cell {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

/* Pagination */
.pagination-container {
  padding: 20px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination-info {
  color: #666;
  font-size: 14px;
}

.pagination-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.pagination-ellipsis {
  padding: 6px 12px;
  color: #666;
}

/* Button Styles */
.btn {
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #5a6268;
  border-color: #5a6268;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:hover {
  background-color: #6c757d;
  color: white;
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
  background-color: transparent;
}

.btn-outline-info:hover {
  background-color: #17a2b8;
  color: white;
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
  background-color: transparent;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: white;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
  background-color: transparent;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

/* Form Controls */
.form-control {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loading-spinner {
  background: white;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
}

.loading-spinner i {
  font-size: 32px;
  color: #007bff;
  margin-bottom: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .applicant-summary-container {
    padding: 10px;
  }

  .header-content {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .filter-row {
    flex-direction: column;
    gap: 16px;
  }

  .filter-group {
    width: 100%;
    min-width: auto;
  }

  .summary-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .summary-card {
    padding: 20px;
  }

  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
    margin-right: 16px;
  }

  .table-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .pagination-container {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .actions-cell {
    flex-direction: column;
    gap: 4px;
  }
}
</style>