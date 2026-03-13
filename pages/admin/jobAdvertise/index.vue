<template>
  <div class="job-advertise-summary-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">ລະບົບຈັດການການປະກາດຫາງານ</h1>
        <div class="header-actions">
          <button class="btn btn-primary" @click="openCreateDialog">
            <i class="fas fa-plus"></i>
            ເພີ່ມການປະກາດໃໝ່
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
            placeholder="ຊື່ວຽກ, ປະເທດ..."
            @input="applyFilters"
          />
        </div>

        <div class="filter-group">
          <label>ປະເທດ:</label>
          <select v-model="filters.country" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="Thailand">ປະເທດໄທ</option>
            <option value="South Korea">ເກົາຫຼີໃຕ້</option>
            <option value="Japan">ຍີ່ປຸ່ນ</option>
            <option value="Taiwan">ໄຕ້ຫວັນ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ສະຖານະ:</label>
          <select v-model="filters.status" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="active">ເປີດຮັບສະໝັກ</option>
            <option value="inactive">ປິດຊົ່ວຄາວ</option>
            <option value="closed">ປິດແລ້ວ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ຕ້ອງການໜັງສືເດີນທາງ:</label>
          <select v-model="filters.requiresPassport" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="true">ຕ້ອງການ</option>
            <option value="false">ບໍ່ຕ້ອງການ</option>
          </select>
        </div>

        <div class="filter-group">
          <label>ລະດັບພາສາ:</label>
          <select v-model="filters.requiresLanguage" class="form-control" @change="applyFilters">
            <option value="">ທັງໝົດ</option>
            <option value="none">ບໍ່ຕ້ອງການ</option>
            <option value="basic">ພື້ນຖານ</option>
            <option value="intermediate">ປານກາງ</option>
            <option value="advanced">ສູງ</option>
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
      <!-- Total Jobs Card -->
      <div class="summary-card total-jobs">
        <div class="card-icon total">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.total.count }}</h3>
          <p>ລວມການປະກາດທັງໝົດ</p>
        </div>
      </div>

      <!-- Active Jobs -->
      <div class="summary-card status-active">
        <div class="card-icon active">
          <i class="fas fa-play-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.active.count }}</h3>
          <p>ເປີດຮັບສະໝັກ ({{ summaryStats.active.percentage }}%)</p>
        </div>
      </div>

      <!-- Inactive Jobs -->
      <div class="summary-card status-inactive">
        <div class="card-icon inactive">
          <i class="fas fa-pause-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.inactive.count }}</h3>
          <p>ປິດຊົ່ວຄາວ ({{ summaryStats.inactive.percentage }}%)</p>
        </div>
      </div>

      <!-- Closed Jobs -->
      <div class="summary-card status-closed">
        <div class="card-icon closed">
          <i class="fas fa-stop-circle"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.closed.count }}</h3>
          <p>ປິດແລ້ວ ({{ summaryStats.closed.percentage }}%)</p>
        </div>
      </div>

      <!-- Country Distribution -->
      <div class="summary-card country-stats">
        <div class="card-icon country">
          <i class="fas fa-globe-asia"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.countries.count }}</h3>
          <p>ປະເທດປາຍທາງ</p>
          <small class="country-info">{{ summaryStats.countries.top }}</small>
        </div>
      </div>

      <!-- With Benefits Card -->
      <div class="summary-card benefits-stats">
        <div class="card-icon benefits">
          <i class="fas fa-gift"></i>
        </div>
        <div class="card-content">
          <h3>{{ summaryStats.withBenefits.count }}</h3>
          <p>ມີສະຫວັດດີການ</p>
          <small class="benefits-rate">{{ summaryStats.withBenefits.percentage }}% ຂອງທັງໝົດ</small>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-section">
      <div class="table-header">
        <div class="table-title">
          <h3>ລາຍການການປະກາດຫາງານ</h3>
          <span class="record-count">{{ filteredJobAdvertises.length }} ລາຍການ</span>
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
              <th @click="sortBy('title')" class="sortable">
                ຊື່ວຽກ
                <i :class="getSortIcon('title')"></i>
              </th>
              <th @click="sortBy('country')" class="sortable">
                ປະເທດ/ເມືອງ
                <i :class="getSortIcon('country')"></i>
              </th>
              <th>ເງື່ອນໄຂວຽກ</th>
              <th>ຄຸນສົມບັດຕ້ອງການ</th>
              <th @click="sortBy('status')" class="sortable">
                ສະຖານະ
                <i :class="getSortIcon('status')"></i>
              </th>
              <th>ຜູ້ສະໝັກ</th>
              <th @click="sortBy('createdAt')" class="sortable">
                ວັນທີສ້າງ
                <i :class="getSortIcon('createdAt')"></i>
              </th>
              <th>ຟັງຊັ່ນ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="job in paginatedJobAdvertises" :key="job.id">
              <td>{{ job.id }}</td>
              <td>
                <div class="job-title">
                  <strong>{{ job.title }}</strong>
                  <div class="job-description">
                    {{ truncateText(job.jobDescription, 50) }}
                  </div>
                </div>
              </td>
              <td>
                <div class="location-info">
                  <div class="country">
                    <i class="fas fa-map-marker-alt"></i>
                    {{ job.country }}
                  </div>
                  <div v-if="job.province" class="province">
                    {{ job.province }}
                  </div>
                </div>
              </td>
              <td>
                <div class="work-conditions">
                  <div class="work-hours">
                    <i class="fas fa-clock"></i>
                    {{ job.workingHours || '8 ຊົ່ວໂມງ/ວັນ' }}
                  </div>
                  <div class="rest-days">
                    <i class="fas fa-calendar-day"></i>
                    {{ job.restDays || '1 ວັນ/ອາທິດ' }}
                  </div>
                </div>
              </td>
              <td>
                <div class="requirements">
                  <span
                    v-if="job.requiresPassport"
                    class="requirement-item passport"
                    title="ຕ້ອງມີໜັງສືເດີນທາງ"
                  >
                    <i class="fas fa-passport"></i>
                  </span>
                  <span
                    v-if="job.requiresGoodEyesight"
                    class="requirement-item eyesight"
                    title="ຕ້ອງມີສາຍຕາດີ"
                  >
                    <i class="fas fa-eye"></i>
                  </span>
                  <span
                    v-if="job.requiresLanguage && job.requiresLanguage !== 'none'"
                    class="requirement-item language"
                    :title="`ຕ້ອງການພາສາ: ${formatLanguageLevel(job.requiresLanguage)}`"
                  >
                    <i class="fas fa-language"></i>
                  </span>
                  <span
                    v-if="!job.allowsTattoos"
                    class="requirement-item no-tattoo"
                    title="ບໍ່ອະນຸຍາດລາຍສັກ"
                  >
                    <i class="fas fa-ban"></i>
                  </span>
                </div>
              </td>
              <td>
                <span :class="['status-badge', job.status]">
                  {{ formatStatus(job.status) }}
                </span>
              </td>
              <td class="applicants-cell">
                <div class="applicant-count">
                  <i class="fas fa-users"></i>
                  {{ job.applicants ? job.applicants.length : 0 }}
                  <span v-if="job.maxApplicants" class="max-count">
                    / {{ job.maxApplicants }}
                  </span>
                </div>
              </td>
              <td>{{ formatDate(job.createdAt) }}</td>
              <td class="actions-cell">
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="viewJob(job)"
                  title="ເບິ່ງລາຍລະອຽດ"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  @click="editJob(job)"
                  title="ແກ້ໄຂ"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  v-if="job.status === 'active'"
                  class="btn btn-sm btn-outline-warning"
                  @click="pauseJob(job)"
                  title="ຢຸດຊົ່ວຄາວ"
                >
                  <i class="fas fa-pause"></i>
                </button>
                <button
                  v-if="job.status === 'inactive'"
                  class="btn btn-sm btn-outline-success"
                  @click="activateJob(job)"
                  title="ເປີດອີກຄັ້ງ"
                >
                  <i class="fas fa-play"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="closeJob(job)"
                  title="ປິດ"
                >
                  <i class="fas fa-stop"></i>
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

    <!-- Job Advertise Dialog (for Create/Edit) -->
    <client-only>
      <JobAdvertiseDialog
        :visible="showEditDialog"
        :jobAdvertise="selectedJob"
        @close="closeEditDialog"
        @save="onJobSave"
      />
    </client-only>

    <!-- Job View Dialog -->
    <client-only>
      <JobViewDialog
        :visible="showViewDialog"
        :jobAdvertise="selectedJob"
        @close="closeViewDialog"
      />
    </client-only>

    <!-- Status Update Dialog -->
    <client-only>
      <StatusUpdateDialog
        :visible="showStatusDialog"
        :jobAdvertise="selectedJob"
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
import JobAdvertiseDialog from '~/components/jobAdvertise/maintain'
import JobViewDialog from '~/components/jobAdvertise/view'
import StatusUpdateDialog from '~/components/jobAdvertise/statusUpdate'

export default {
  name: 'JobAdvertiseSummary',
  components: {
    JobAdvertiseDialog,
    JobViewDialog,
    StatusUpdateDialog,
  },
  middleware: 'auths',
  data() {
    return {
      // Dialog visibility states
      showEditDialog: false,
      showViewDialog: false,
      showStatusDialog: false,
      selectedJob: null,
      statusAction: '', // 'pause', 'activate', 'close'

      // Data arrays
      jobAdvertises: [],
      filteredJobAdvertises: [],

      // Loading states
      loading: false,

      // Filters
      filters: {
        search: '',
        country: '',
        status: '',
        requiresPassport: '',
        requiresLanguage: '',
      },

      // Sorting
      sort: {
        field: 'createdAt',
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
        active: { count: 0, percentage: 0 },
        inactive: { count: 0, percentage: 0 },
        closed: { count: 0, percentage: 0 },
        countries: { count: 0, top: '' },
        withBenefits: { count: 0, percentage: 0 },
      },
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    paginatedJobAdvertises() {
      const start = (this.pagination.currentPage - 1) * this.pagination.perPage
      const end = start + this.pagination.perPage
      return this.filteredJobAdvertises.slice(start, end)
    },

    totalPages() {
      return Math.ceil(
        this.filteredJobAdvertises.length / this.pagination.perPage
      )
    },

    paginationInfo() {
      const start =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const end = Math.min(
        start + this.pagination.perPage - 1,
        this.filteredJobAdvertises.length
      )
      return {
        start,
        end,
        total: this.filteredJobAdvertises.length,
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
    this.fetchJobAdvertises()
  },

  methods: {
    // Data Loading Methods
    async fetchJobAdvertises() {
      this.loading = true
      try {
        const params = {
          page: 1,
          limit: 1000, // Get all for client-side filtering
          ...this.filters,
        }

        const { data } = await this.$axios.get('/api/job-advertises', { params })

        if (data && data.success) {
          this.jobAdvertises = data.data || []
        } else {
          this.jobAdvertises = []
        }

        this.applyFilters()
        this.calculateSummaryStats()
      } catch (error) {
        console.error('Error fetching job advertisements:', error)
        this.showToast('Error loading job advertisement data', 'error')
        this.jobAdvertises = []
      } finally {
        this.loading = false
      }
    },

    // Dialog Control Methods
    async openCreateDialog() {
      this.selectedJob = null
      this.showEditDialog = true
    },

    async editJob(job) {
      this.selectedJob = job
      this.showEditDialog = true
    },

    viewJob(job) {
      this.selectedJob = job
      this.showViewDialog = true
    },

    pauseJob(job) {
      this.selectedJob = job
      this.statusAction = 'pause'
      this.showStatusDialog = true
    },

    activateJob(job) {
      this.selectedJob = job
      this.statusAction = 'activate'
      this.showStatusDialog = true
    },

    closeJob(job) {
      this.selectedJob = job
      this.statusAction = 'close'
      this.showStatusDialog = true
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.selectedJob = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedJob = null
    },

    closeStatusDialog() {
      this.showStatusDialog = false
      this.selectedJob = null
      this.statusAction = ''
    },

    // Save Handler
    async onJobSave(jobData) {
      try {
        this.loading = true

        let response
        if (this.selectedJob && this.selectedJob.id) {
          response = await this.$axios.put(
            `/api/job-advertises/${this.selectedJob.id}`,
            jobData
          )
        } else {
          response = await this.$axios.post('/api/job-advertises', jobData)
        }

        if (response.data && response.data.success) {
          this.showToast('ການບັນທຶກສຳເລັດແລ້ວ', 'success')
          this.closeEditDialog()
          await this.fetchJobAdvertises()
        } else {
          throw new Error(response.data?.message || 'Save failed')
        }
      } catch (error) {
        console.error('Error saving job advertisement:', error)
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
          `/api/job-advertises/${this.selectedJob.id}/status`,
          statusData
        )

        if (response.data && response.data.success) {
          this.showToast('ອັບເດດສະຖານະສຳເລັດແລ້ວ', 'success')
          this.closeStatusDialog()
          await this.fetchJobAdvertises()
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
      let filtered = [...this.jobAdvertises]

      // Search filter
      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        filtered = filtered.filter(
          (job) =>
            job.title.toLowerCase().includes(search) ||
            job.country.toLowerCase().includes(search) ||
            (job.province && job.province.toLowerCase().includes(search)) ||
            (job.jobDescription && job.jobDescription.toLowerCase().includes(search))
        )
      }

      // Country filter
      if (this.filters.country) {
        filtered = filtered.filter(
          (job) => job.country === this.filters.country
        )
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(
          (job) => job.status === this.filters.status
        )
      }

      // Passport requirement filter
      if (this.filters.requiresPassport !== '') {
        const requiresPassport = this.filters.requiresPassport === 'true'
        filtered = filtered.filter(
          (job) => job.requiresPassport === requiresPassport
        )
      }

      // Language requirement filter
      if (this.filters.requiresLanguage) {
        filtered = filtered.filter(
          (job) => job.requiresLanguage === this.filters.requiresLanguage
        )
      }

      this.filteredJobAdvertises = filtered
      this.sortData()
      this.pagination.currentPage = 1
      this.calculateSummaryStats()
    },

    resetFilters() {
      this.filters = {
        search: '',
        country: '',
        status: '',
        requiresPassport: '',
        requiresLanguage: '',
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
      this.filteredJobAdvertises.sort((a, b) => {
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
      const total = this.filteredJobAdvertises.length
      const active = this.filteredJobAdvertises.filter(j => j.status === 'active').length
      const inactive = this.filteredJobAdvertises.filter(j => j.status === 'inactive').length
      const closed = this.filteredJobAdvertises.filter(j => j.status === 'closed').length
      
      // Count unique countries
      const countries = [...new Set(this.filteredJobAdvertises.map(j => j.country))]
      const countryCount = {}
      this.filteredJobAdvertises.forEach(j => {
        countryCount[j.country] = (countryCount[j.country] || 0) + 1
      })
      const topCountry = Object.keys(countryCount).reduce((a, b) => 
        countryCount[a] > countryCount[b] ? a : b, ''
      )
      
      // Count jobs with benefits
      const withBenefits = this.filteredJobAdvertises.filter(j => 
        j.benefits && j.benefits.length > 0
      ).length

      this.summaryStats = {
        total: { count: total },
        active: { 
          count: active, 
          percentage: total > 0 ? Math.round((active / total) * 100) : 0
        },
        inactive: { 
          count: inactive, 
          percentage: total > 0 ? Math.round((inactive / total) * 100) : 0
        },
        closed: { 
          count: closed, 
          percentage: total > 0 ? Math.round((closed / total) * 100) : 0
        },
        countries: { 
          count: countries.length,
          top: topCountry ? `${topCountry} (${countryCount[topCountry]})` : ''
        },
        withBenefits: { 
          count: withBenefits, 
          percentage: total > 0 ? Math.round((withBenefits / total) * 100) : 0 
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
      const csvData = this.convertToCSV(this.filteredJobAdvertises)
      this.downloadCSV(csvData, 'job-advertises-summary.csv')
    },

    convertToCSV(data) {
      const headers = [
        'ID',
        'Title',
        'Country',
        'Province',
        'Job Description',
        'Working Hours',
        'Rest Days',
        'Requires Passport',
        'Requires Good Eyesight',
        'Language Requirement',
        'Allows Tattoos',
        'Status',
        'Start Date',
        'End Date',
        'Max Applicants',
        'Created Date',
      ]
      const csvContent = [
        headers.join(','),
        ...data.map((row) =>
          [
            row.id,
            `"${row.title}"`,
            row.country,
            row.province || '',
            `"${(row.jobDescription || '').replace(/"/g, '""')}"`,
            row.workingHours || '',
            row.restDays || '',
            row.requiresPassport ? 'Yes' : 'No',
            row.requiresGoodEyesight ? 'Yes' : 'No',
            row.requiresLanguage || '',
            row.allowsTattoos ? 'Yes' : 'No',
            row.status,
            row.startDate || '',
            row.endDate || '',
            row.maxApplicants || '',
            this.formatDate(row.createdAt),
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
    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    formatStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ',
      }
      return statusLabels[status] || status
    },

    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ຕ້ອງການ',
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
.job-advertise-summary-container {
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

/* Total Jobs Card */
.summary-card.total-jobs {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.summary-card.total-jobs .card-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Status Cards */
.summary-card.status-active {
  border-left: 4px solid #10b981;
}

.summary-card.status-inactive {
  border-left: 4px solid #f59e0b;
}

.summary-card.status-closed {
  border-left: 4px solid #ef4444;
}

/* Country and Benefits Cards */
.summary-card.country-stats {
  border-left: 4px solid #3b82f6;
}

.summary-card.benefits-stats {
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

.card-icon.active {
  background: #d1fae5;
  color: #10b981;
}

.card-icon.inactive {
  background: #fef3c7;
  color: #f59e0b;
}

.card-icon.closed {
  background: #fee2e2;
  color: #ef4444;
}

.card-icon.country {
  background: #dbeafe;
  color: #3b82f6;
}

.card-icon.benefits {
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

.country-info, .benefits-rate {
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

/* Job Title Cell */
.job-title strong {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.job-description {
  font-size: 12px;
  color: #666;
}

/* Location Info */
.location-info .country {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: #495057;
  margin-bottom: 2px;
}

.location-info .province {
  font-size: 12px;
  color: #666;
  margin-left: 16px;
}

/* Work Conditions */
.work-conditions {
  font-size: 12px;
  color: #666;
}

.work-conditions .work-hours,
.work-conditions .rest-days {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 2px;
}

.work-conditions i {
  width: 12px;
  color: #999;
}

/* Requirements */
.requirements {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.requirement-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 10px;
}

.requirement-item.passport {
  background-color: #dbeafe;
  color: #3b82f6;
}

.requirement-item.eyesight {
  background-color: #fef3c7;
  color: #d97706;
}

.requirement-item.language {
  background-color: #dcfce7;
  color: #16a34a;
}

.requirement-item.no-tattoo {
  background-color: #fee2e2;
  color: #dc2626;
}

/* Status Badge */
.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.active {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.inactive {
  background-color: #fef3c7;
  color: #d97706;
}

.status-badge.closed {
  background-color: #fee2e2;
  color: #dc2626;
}

/* Applicants Cell */
.applicants-cell {
  font-weight: 600;
  color: #495057;
}

.applicant-count {
  display: flex;
  align-items: center;
  gap: 4px;
}

.max-count {
  color: #666;
  font-weight: normal;
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

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
  background-color: transparent;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  color: #212529;
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
  .job-advertise-summary-container {
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

  .requirements {
    flex-direction: column;
    gap: 4px;
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