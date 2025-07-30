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
            placeholder="ຊື່, ເບີໂທ, ອີເມວ..."
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
            <option value="pending">ລໍຖ້າ</option>
            <option value="approved">ອະນຸມັດ</option>
            <option value="rejected">ປະຕິເສດ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ມີໜັງສືເດີນທາງ:</label>
          <select v-model="filters.hasPassport" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="true">ມີ</option>
            <option value="false">ບໍ່ມີ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ລະດັບພາສາຈີນ:</label>
          <select v-model="filters.chineseLanguageLevel" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="none">ບໍ່ມີ</option>
            <option value="basic">ພື້ນຖານ</option>
            <option value="intermediate">ປານກາງ</option>
            <option value="advanced">ສູງ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ຊ່ວງອາຍຸ:</label>
          <div class="age-range">
            <input
              type="number"
              v-model.number="filters.minAge"
              class="form-control age-input"
              placeholder="18"
              min="18"
              max="32"
              @input="applyFilters"
            />
            <span class="age-separator">-</span>
            <input
              type="number"
              v-model.number="filters.maxAge"
              class="form-control age-input"
              placeholder="32"
              min="18"
              max="32"
              @input="applyFilters"
            />
          </div>
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
          <small class="quota-info">ໂຄຕ້າ: {{ summaryStats.male.quota }}/30</small>
        </div>
      </div>

      <div class="summary-card gender-female">
        <div class="card-icon female">
          <i class="fas fa-female"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.female.count }}</h3>
          <p>ຍິງ ({{ summaryStats.female.percentage }}%)</p>
          <small class="quota-info">ໂຄຕ້າ: {{ summaryStats.female.quota }}/70</small>
        </div>
      </div>

      <!-- Status Statistics Cards -->
      <div class="summary-card status-pending">
        <div class="card-icon pending">
          <i class="fas fa-clock"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.pending.count }}</h3>
          <p>ລໍຖ້າການພິຈາລະນາ</p>
        </div>
      </div>

      <div class="summary-card status-approved">
        <div class="card-icon approved">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.approved.count }}</h3>
          <p>ອະນຸມັດແລ້ວ</p>
        </div>
      </div>

      <!-- Eligibility Card -->
      <div class="summary-card eligibility">
        <div class="card-icon eligible">
          <i class="fas fa-star"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.eligible.count }}</h3>
          <p>ຜູ້ມີຄຸນສົມບັດ</p>
          <small class="eligibility-rate">{{ summaryStats.eligible.percentage }}% ຂອງທັງໝົດ</small>
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
              <th @click="sortBy('dateOfBirth')" class="sortable">
                ອາຍຸ
                <i :class="getSortIcon('dateOfBirth')"></i>
              </th>
              <th>ຕິດຕໍ່</th>
              <th>ພາສາຈີນ</th>
              <th>ຄຸນສົມບັດ</th>
              <th @click="sortBy('status')" class="sortable">
                ສະຖານະ
                <i :class="getSortIcon('status')"></i>
              </th>
              <th @click="sortBy('applicationDate')" class="sortable">
                ວັນທີສະໝັກ
                <i :class="getSortIcon('applicationDate')"></i>
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
                  </div>
                </div>
              </td>
              <td>
                <span :class="['gender-badge', applicant.gender]">
                  {{ formatGender(applicant.gender) }}
                </span>
              </td>
              <td class="age-cell">
                {{ calculateAge(applicant.dateOfBirth) }} ປີ
              </td>
              <td>
                <div class="contact-details">
                  <div v-if="applicant.email" class="email">
                    <i class="fas fa-envelope"></i>
                    {{ applicant.email }}
                  </div>
                  <div v-if="applicant.address" class="address">
                    <i class="fas fa-map-marker-alt"></i>
                    {{ truncateText(applicant.address, 30) }}
                  </div>
                </div>
              </td>
              <td>
                <span :class="['language-badge', applicant.chineseLanguageLevel]">
                  {{ formatLanguageLevel(applicant.chineseLanguageLevel) }}
                </span>
              </td>
              <td>
                <div class="qualifications">
                  <span
                    v-if="applicant.hasPassport"
                    class="qualification-item passport"
                    title="ມີໜັງສືເດີນທາງ"
                  >
                    <i class="fas fa-passport"></i>
                  </span>
                  <span
                    v-if="applicant.healthStatus === 'good'"
                    class="qualification-item health"
                    title="ສຸຂະພາບດີ"
                  >
                    <i class="fas fa-heart"></i>
                  </span>
                  <span
                    v-if="applicant.eyesightGood"
                    class="qualification-item eyesight"
                    title="ສາຍຕາດີ"
                  >
                    <i class="fas fa-eye"></i>
                  </span>
                  <span
                    v-if="!applicant.hasVisibleTattoos"
                    class="qualification-item no-tattoo"
                    title="ບໍ່ມີລາຍສັກ"
                  >
                    <i class="fas fa-check-circle"></i>
                  </span>
                </div>
              </td>
              <td>
                <span :class="['status-badge', applicant.status]">
                  {{ formatStatus(applicant.status) }}
                </span>
              </td>
              <td>{{ formatDate(applicant.applicationDate) }}</td>
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
                  v-if="applicant.status === 'pending'"
                  class="btn btn-sm btn-outline-success"
                  @click="approveApplicant(applicant)"
                  title="ອະນຸມັດ"
                >
                  <i class="fas fa-check"></i>
                </button>
                <button
                  v-if="applicant.status === 'pending'"
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

  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      showStatusDialog: false,
      selectedApplicant: null,
      statusAction: '', // 'approve' or 'reject'

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
        hasPassport: '',
        chineseLanguageLevel: '',
        minAge: '',
        maxAge: '',
      },

      // Sorting
      sort: {
        field: 'applicationDate',
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
        male: { count: 0, percentage: 0, quota: 0 },
        female: { count: 0, percentage: 0, quota: 0 },
        pending: { count: 0 },
        approved: { count: 0 },
        rejected: { count: 0 },
        eligible: { count: 0, percentage: 0 },
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
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
          ...this.filters,
        }

        const { data } = await this.$axios.get('/api/applicants', { params })

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

    approveApplicant(applicant) {
      this.selectedApplicant = applicant
      this.statusAction = 'approve'
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
            `/api/applicants/${this.selectedApplicant.id}`,
            applicantData
          )
        } else {
          response = await this.$axios.post('/api/applicants', applicantData)
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
          `/api/applicants/${this.selectedApplicant.id}/status`,
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
            (applicant.email && applicant.email.toLowerCase().includes(search))
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
      if (this.filters.hasPassport !== '') {
        const hasPassport = this.filters.hasPassport === 'true'
        filtered = filtered.filter(
          (applicant) => applicant.hasPassport === hasPassport
        )
      }

      // Chinese language filter
      if (this.filters.chineseLanguageLevel) {
        filtered = filtered.filter(
          (applicant) => 
            applicant.chineseLanguageLevel === this.filters.chineseLanguageLevel
        )
      }

      // Age range filter
      if (this.filters.minAge || this.filters.maxAge) {
        filtered = filtered.filter((applicant) => {
          const age = this.calculateAge(applicant.dateOfBirth)
          const minAge = this.filters.minAge || 0
          const maxAge = this.filters.maxAge || 100
          return age >= minAge && age <= maxAge
        })
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
        hasPassport: '',
        chineseLanguageLevel: '',
        minAge: '',
        maxAge: '',
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

        // Special handling for calculated age
        if (this.sort.field === 'dateOfBirth') {
          aVal = this.calculateAge(a.dateOfBirth)
          bVal = this.calculateAge(b.dateOfBirth)
        }

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
      const pending = this.filteredApplicants.filter(a => a.status === 'pending').length
      const approved = this.filteredApplicants.filter(a => a.status === 'approved').length
      const rejected = this.filteredApplicants.filter(a => a.status === 'rejected').length
      
      // Calculate eligible applicants (based on requirements)
      const eligible = this.filteredApplicants.filter(applicant => {
        const age = this.calculateAge(applicant.dateOfBirth)
        return (
          age >= 18 && age <= 32 &&
          applicant.hasPassport &&
          applicant.healthStatus === 'good' &&
          applicant.eyesightGood &&
          !applicant.hasVisibleTattoos
        )
      }).length

      this.summaryStats = {
        total: { count: total },
        male: { 
          count: male, 
          percentage: total > 0 ? Math.round((male / total) * 100) : 0,
          quota: Math.min(male, 30)
        },
        female: { 
          count: female, 
          percentage: total > 0 ? Math.round((female / total) * 100) : 0,
          quota: Math.min(female, 70)
        },
        pending: { count: pending },
        approved: { count: approved },
        rejected: { count: rejected },
        eligible: { 
          count: eligible, 
          percentage: total > 0 ? Math.round((eligible / total) * 100) : 0 
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
        'Date of Birth',
        'Age',
        'Phone',
        'Email',
        'Has Passport',
        'Health Status',
        'Eyesight Good',
        'Chinese Language',
        'Has Tattoos',
        'Status',
        'Application Date',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            row.id,
            row.firstName,
            row.lastName,
            row.gender,
            row.dateOfBirth,
            this.calculateAge(row.dateOfBirth),
            row.phone,
            row.email || '',
            row.hasPassport ? 'Yes' : 'No',
            row.healthStatus,
            row.eyesightGood ? 'Yes' : 'No',
            row.chineseLanguageLevel,
            row.hasVisibleTattoos ? 'Yes' : 'No',
            row.status,
            row.applicationDate,
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

    calculateAge(dateOfBirth) {
      if (!dateOfBirth) return 0
      const today = new Date()
      const birthDate = new Date(dateOfBirth)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
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

    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        rejected: 'ປະຕິເສດ',
      }
      return statusLabels[status] || status
    },

    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ມີ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ',
      }
      return levelLabels[level] || level
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

.age-range {
  display: flex;
  align-items: center;
  gap: 8px;
}

.age-input {
  width: 80px;
}

.age-separator {
  color: #666;
  font-weight: bold;
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

/* Status Cards */
.summary-card.status-pending {
  border-left: 4px solid #f59e0b;
}

.summary-card.status-approved {
  border-left: 4px solid #10b981;
}

/* Eligibility Card */
.summary-card.eligibility {
  border-left: 4px solid #8b5cf6;
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

.card-icon.pending {
  background: #fef3c7;
  color: #f59e0b;
}

.card-icon.approved {
  background: #d1fae5;
  color: #10b981;
}

.card-icon.eligible {
  background: #ede9fe;
  color: #8b5cf6;
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

.quota-info, .eligibility-rate {
  font-size: 12px;
  opacity: 0.8;
  margin-top: 4px;
  display: block;
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

.contact-details .email,
.contact-details .address {
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

.language-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.language-badge.none {
  background-color: #f3f4f6;
  color: #6b7280;
}

.language-badge.basic {
  background-color: #fef3c7;
  color: #d97706;
}

.language-badge.intermediate {
  background-color: #dbeafe;
  color: #2563eb;
}

.language-badge.advanced {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.pending {
  background-color: #fef3c7;
  color: #d97706;
}

.status-badge.approved {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.rejected {
  background-color: #fee2e2;
  color: #dc2626;
}

/* Qualifications */
.qualifications {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.qualification-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 10px;
}

.qualification-item.passport {
  background-color: #dbeafe;
  color: #3b82f6;
}

.qualification-item.health {
  background-color: #dcfce7;
  color: #16a34a;
}

.qualification-item.eyesight {
  background-color: #fef3c7;
  color: #d97706;
}

.qualification-item.no-tattoo {
  background-color: #d1fae5;
  color: #059669;
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

  .filter-actions {
    flex-direction: row;
    width: 100%;
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

  .card-content h3 {
    font-size: 20px;
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

  .pagination-controls {
    flex-wrap: wrap;
  }

  .actions-cell {
    flex-direction: column;
    gap: 4px;
  }

  .qualifications {
    flex-direction: column;
    gap: 4px;
  }

  .age-range {
    flex-direction: column;
    gap: 8px;
  }

  .age-input {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .summary-card {
    flex-direction: column;
    text-align: center;
  }

  .card-icon {
    margin: 0 auto 16px auto;
  }
}
</style>