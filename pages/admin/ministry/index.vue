<template>
  <div class="ministry-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">
          <i class="fas fa-building"></i>
          ຈັດການກະຊວງ ແລະ ຫົວໜ່ວຍງານ
        </h1>
        <p class="page-subtitle">ຈັດການຂໍ້ມູນກະຊວງ ແລະ ຫົວໜ່ວຍງານລັດຖະບານ</p>
      </div>
      <div class="header-actions">
        <button
          class="btn btn-secondary"
          @click="showHierarchy = !showHierarchy"
          :disabled="loading"
        >
          <i :class="showHierarchy ? 'fas fa-list' : 'fas fa-sitemap'"></i>
          {{ showHierarchy ? 'ມຸມມອງລາຍການ' : 'ມຸມມອງໂຄງສ້າງ' }}
        </button>
        <button
          class="btn btn-primary"
          @click="openCreateDialog"
          :disabled="loading"
        >
          <i class="fas fa-plus"></i>
          ເພີ່ມກະຊວງໃໝ່
        </button>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="filters-section">
      <div class="filter-row">
        <div class="filter-group">
          <label class="filter-label">ຄົ້ນຫາ</label>
          <div class="search-input-wrapper">
            <i class="fas fa-search search-icon"></i>
            <input
              v-model="filters.search"
              type="text"
              class="search-input"
              placeholder="ຄົ້ນຫາລະຫັດ, ຊື່ກະຊວງ, ຊື່ລັດຖະມົນຕີ..."
              @input="applyFilters"
            />
          </div>
        </div>

        <div class="filter-group">
          <label class="filter-label">ປະເພດ</label>
          <select v-model="filters.ministryType" @change="applyFilters" class="filter-select">
            <option value="">ທັງໝົດ</option>
            <option value="Ministry">Ministry</option>
            <option value="Department">Department</option>
            <option value="Agency">Agency</option>
            <option value="Commission">Commission</option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">ສະຖານະ</label>
          <select v-model="filters.status" @change="applyFilters" class="filter-select">
            <option value="">ທັງໝົດ</option>
            <option value="Active">ໃຊ້ງານ</option>
            <option value="Inactive">ປິດໃຊ້ງານ</option>
            <option value="Restructured">ປັບໂຄງສ້າງ</option>
            <option value="Merged">ລວມເຂົ້າກັນ</option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">ແຂວງ</label>
          <select v-model="filters.province" @change="applyFilters" class="filter-select">
            <option value="">ທັງໝົດ</option>
            <option value="ວຽງຈັນ">ວຽງຈັນ</option>
            <option value="ລວງພະບາງ">ລວງພະບາງ</option>
            <option value="ສະຫວັນນະເຂດ">ສະຫວັນນະເຂດ</option>
            <option value="ຈຳປາສັກ">ຈຳປາສັກ</option>
            <option value="ອື່ນໆ">ອື່ນໆ</option>
          </select>
        </div>

        <div class="filter-actions">
          <button class="btn btn-outline-secondary" @click="resetFilters">
            <i class="fas fa-refresh"></i>
            ລ້າງ
          </button>
        </div>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="stats-section">
      <div class="stat-card">
        <div class="stat-icon stat-icon-primary">
          <i class="fas fa-building"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.total }}</h3>
          <p class="stat-label">ທັງໝົດ</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon stat-icon-success">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.active }}</h3>
          <p class="stat-label">ໃຊ້ງານ</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon stat-icon-info">
          <i class="fas fa-sitemap"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.ministries }}</h3>
          <p class="stat-label">ກະຊວງ</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon stat-icon-warning">
          <i class="fas fa-university"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.departments }}</h3>
          <p class="stat-label">ກົມ</p>
        </div>
      </div>
    </div>

    <!-- Hierarchy View -->
    <div v-if="showHierarchy" class="hierarchy-section">
      <div class="section-header">
        <h3 class="section-title">ໂຄງສ້າງລຳດັບຊັ້ນກະຊວງ</h3>
      </div>
      
      <div class="hierarchy-wrapper">
        <div v-if="loading" class="loading-state">
          <i class="fas fa-spinner fa-spin"></i>
          <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>

        <div v-else-if="hierarchyData.length === 0" class="empty-state">
          <i class="fas fa-building"></i>
          <h3>ບໍ່ມີຂໍ້ມູນກະຊວງ</h3>
          <p>ກົດປຸ່ມ "ເພີ່ມກະຊວງໃໝ່" ເພື່ອເພີ່ມກະຊວງ</p>
        </div>

        <div v-else class="hierarchy-tree">
          <div v-for="ministry in hierarchyData" :key="ministry.id" class="ministry-node">
            <div class="ministry-card" :class="getMinistryTypeClass(ministry.ministryType)">
              <div class="ministry-info">
                <div class="ministry-header">
                  <h4 class="ministry-name">{{ ministry.ministryName }}</h4>
                  <span class="ministry-code">{{ ministry.ministryCode }}</span>
                </div>
                <div class="ministry-details">
                  <p v-if="ministry.ministerName" class="minister-name">
                    <i class="fas fa-user"></i>
                    {{ ministry.ministerName }}
                  </p>
                  <p v-if="ministry.province" class="ministry-location">
                    <i class="fas fa-map-marker-alt"></i>
                    {{ ministry.province }}{{ ministry.district ? `, ${ministry.district}` : '' }}
                  </p>
                </div>
                <div class="ministry-meta">
                  <span class="ministry-type-badge" :class="getMinistryTypeClass(ministry.ministryType)">
                    {{ ministry.ministryType }}
                  </span>
                  <span class="status-badge" :class="getStatusClass(ministry.status)">
                    {{ getStatusText(ministry.status) }}
                  </span>
                </div>
              </div>
              <div class="ministry-actions">
                <button
                  class="btn-icon btn-icon-primary"
                  @click="openEditDialog(ministry)"
                  title="ແກ້ໄຂ"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  class="btn-icon btn-icon-warning"
                  @click="toggleStatus(ministry)"
                  :title="ministry.isActive ? 'ປິດໃຊ້ງານ' : 'ເປີດໃຊ້ງານ'"
                >
                  <i :class="ministry.isActive ? 'fas fa-pause' : 'fas fa-play'"></i>
                </button>
                <button
                  class="btn-icon btn-icon-danger"
                  @click="confirmDelete(ministry)"
                  title="ລຶບ"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
            
            <!-- Sub-ministries -->
            <div v-if="ministry.subMinistries && ministry.subMinistries.length > 0" class="sub-ministries">
              <div v-for="subMinistry in ministry.subMinistries" :key="subMinistry.id" class="sub-ministry-card">
                <div class="sub-ministry-info">
                  <div class="sub-ministry-header">
                    <h5 class="sub-ministry-name">{{ subMinistry.ministryName }}</h5>
                    <span class="sub-ministry-code">{{ subMinistry.ministryCode }}</span>
                  </div>
                  <span class="ministry-type-badge" :class="getMinistryTypeClass(subMinistry.ministryType)">
                    {{ subMinistry.ministryType }}
                  </span>
                </div>
                <div class="sub-ministry-actions">
                  <button
                    class="btn-icon btn-icon-sm btn-icon-primary"
                    @click="openEditDialog(subMinistry)"
                    title="ແກ້ໄຂ"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    class="btn-icon btn-icon-sm btn-icon-danger"
                    @click="confirmDelete(subMinistry)"
                    title="ລຶບ"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div v-else class="table-section">
      <div class="table-header">
        <h3 class="table-title">ລາຍການກະຊວງ ແລະ ຫົວໜ່ວຍງານ</h3>
        <div class="table-info">
          ທັງໝົດ {{ filteredMinistries.length }} ລາຍການ
        </div>
      </div>

      <div class="table-wrapper">
        <div v-if="loading" class="loading-state">
          <i class="fas fa-spinner fa-spin"></i>
          <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>

        <div v-else-if="filteredMinistries.length === 0" class="empty-state">
          <i class="fas fa-building"></i>
          <h3>ບໍ່ມີຂໍ້ມູນກະຊວງ</h3>
          <p>ກົດປຸ່ມ "ເພີ່ມກະຊວງໃໝ່" ເພື່ອເພີ່ມກະຊວງ</p>
        </div>

        <table v-else class="data-table">
          <thead>
            <tr>
              <th>ລະຫັດ</th>
              <th>ຊື່ກະຊວງ</th>
              <th>ປະເພດ</th>
              <th>ລັດຖະມົນຕີ</th>
              <th>ແຂວງ/ເມືອງ</th>
              <th>ຕິດຕໍ່</th>
              <th>ສະຖານະ</th>
              <th>ວັນທີສ້າງ</th>
              <th>ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ministry in paginatedMinistries" :key="ministry.id">
              <td>
                <div class="ministry-code">
                  <i class="fas fa-barcode"></i>
                  {{ ministry.ministryCode }}
                </div>
              </td>
              <td>
                <div class="ministry-info-cell">
                  <div class="ministry-name-primary">{{ ministry.ministryName }}</div>
                  <div v-if="ministry.ministryNameEn" class="ministry-name-en">{{ ministry.ministryNameEn }}</div>
                  <div v-if="ministry.parentMinistry" class="parent-ministry">
                    <i class="fas fa-link"></i>
                    {{ ministry.parentMinistry.ministryName }}
                  </div>
                </div>
              </td>
              <td>
                <span class="ministry-type-badge" :class="getMinistryTypeClass(ministry.ministryType)">
                  {{ ministry.ministryType }}
                </span>
              </td>
              <td>{{ ministry.ministerName || '-' }}</td>
              <td>
                <div v-if="ministry.province || ministry.district" class="location-info">
                  <div v-if="ministry.province">{{ ministry.province }}</div>
                  <div v-if="ministry.district" class="district">{{ ministry.district }}</div>
                </div>
                <span v-else>-</span>
              </td>
              <td>
                <div class="contact-info">
                  <div v-if="ministry.phoneNumber" class="contact-item">
                    <i class="fas fa-phone"></i>
                    {{ ministry.phoneNumber }}
                  </div>
                  <div v-if="ministry.email" class="contact-item">
                    <i class="fas fa-envelope"></i>
                    {{ ministry.email }}
                  </div>
                </div>
              </td>
              <td>
                <span class="status-badge" :class="getStatusClass(ministry.status)">
                  <i :class="getStatusIcon(ministry.status)"></i>
                  {{ getStatusText(ministry.status) }}
                </span>
              </td>
              <td>{{ formatDate(ministry.createdAt) }}</td>
              <td>
                <div class="action-buttons">
                  <button
                    class="btn-icon btn-icon-info"
                    @click="openViewDialog(ministry)"
                    title="ລາຍລະອຽດ"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                  <button
                    class="btn-icon btn-icon-primary"
                    @click="openEditDialog(ministry)"
                    :disabled="loading"
                    title="ແກ້ໄຂ"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    class="btn-icon btn-icon-warning"
                    @click="toggleStatus(ministry)"
                    :disabled="loading"
                    :title="ministry.isActive ? 'ປິດໃຊ້ງານ' : 'ເປີດໃຊ້ງານ'"
                  >
                    <i :class="ministry.isActive ? 'fas fa-pause' : 'fas fa-play'"></i>
                  </button>
                  <button
                    class="btn-icon btn-icon-danger"
                    @click="confirmDelete(ministry)"
                    :disabled="loading"
                    title="ລຶບ"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="pagination-section">
        <div class="pagination-info">
          ສະແດງ {{ (currentPage - 1) * pageSize + 1 }} - {{ Math.min(currentPage * pageSize, filteredMinistries.length) }} 
          ຈາກ {{ filteredMinistries.length }} ລາຍການ
        </div>
        <div class="pagination-controls">
          <button
            class="btn btn-outline-secondary"
            @click="currentPage = 1"
            :disabled="currentPage === 1"
          >
            <i class="fas fa-angle-double-left"></i>
          </button>
          <button
            class="btn btn-outline-secondary"
            @click="currentPage--"
            :disabled="currentPage === 1"
          >
            <i class="fas fa-angle-left"></i>
          </button>
          <span class="page-info">
            ໜ້າ {{ currentPage }} ຈາກ {{ totalPages }}
          </span>
          <button
            class="btn btn-outline-secondary"
            @click="currentPage++"
            :disabled="currentPage === totalPages"
          >
            <i class="fas fa-angle-right"></i>
          </button>
          <button
            class="btn btn-outline-secondary"
            @click="currentPage = totalPages"
            :disabled="currentPage === totalPages"
          >
            <i class="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Ministry Dialog Component -->
    <MinistryDialog
      :show="showDialog"
      :ministry="selectedMinistry"
      :ministries="ministries"
      @close="closeDialog"
      @saved="onMinistrySaved"
    />

    <!-- Ministry View Dialog Component -->
    <MinistryViewDialog
      :show="showViewDialog"
      :ministry="selectedMinistry"
      @close="closeViewDialog"
    />
  </div>
</template>

<script>
import MinistryDialog from '~/components/ministry/MinistryDialog'
import MinistryViewDialog from '~/components/ministry/MinistryViewDialog'

export default {
  name: 'MinistryPage',
  
  components: {
    MinistryDialog,
    MinistryViewDialog
  },

  data() {
    return {
      loading: false,
      showDialog: false,
      showViewDialog: false,
      selectedMinistry: null,
      showHierarchy: false,
      
      ministries: [],
      hierarchyData: [],
      filteredMinistries: [],
      
      // Pagination
      currentPage: 1,
      pageSize: 10,
      
      // Filters
      filters: {
        search: '',
        ministryType: '',
        status: '',
        province: ''
      },
      
      // Statistics
      statistics: {
        total: 0,
        active: 0,
        ministries: 0,
        departments: 0
      }
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.filteredMinistries.length / this.pageSize)
    },
    
    paginatedMinistries() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.filteredMinistries.slice(start, end)
    }
  },

  async mounted() {
    await this.fetchMinistries()
    await this.fetchHierarchy()
  },

  methods: {
    async fetchMinistries() {
      try {
        this.loading = true
        const response = await this.$axios.get('/api/ministries')
        
        if (response.data && response.data.success) {
          this.ministries = response.data.data || []
        } else {
          this.ministries = []
        }
        
        this.applyFilters()
        this.calculateStatistics()
      } catch (error) {
        console.error('Error fetching ministries:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ', 'error')
        this.ministries = []
      } finally {
        this.loading = false
      }
    },

    async fetchHierarchy() {
      try {
        const response = await this.$axios.get('/api/ministries/hierarchy')
        
        if (response.data && response.data.success) {
          this.hierarchyData = response.data.data || []
        } else {
          this.hierarchyData = []
        }
      } catch (error) {
        console.error('Error fetching hierarchy:', error)
        this.hierarchyData = []
      }
    },

    applyFilters() {
      let filtered = [...this.ministries]

      // Search filter
      if (this.filters.search) {
        const searchLower = this.filters.search.toLowerCase()
        filtered = filtered.filter(ministry =>
          ministry.ministryCode.toLowerCase().includes(searchLower) ||
          ministry.ministryName.toLowerCase().includes(searchLower) ||
          (ministry.ministryNameEn && ministry.ministryNameEn.toLowerCase().includes(searchLower)) ||
          (ministry.ministerName && ministry.ministerName.toLowerCase().includes(searchLower)) ||
          (ministry.description && ministry.description.toLowerCase().includes(searchLower))
        )
      }

      // Ministry type filter
      if (this.filters.ministryType) {
        filtered = filtered.filter(ministry => ministry.ministryType === this.filters.ministryType)
      }

      // Status filter
      if (this.filters.status) {
        filtered = filtered.filter(ministry => ministry.status === this.filters.status)
      }

      // Province filter
      if (this.filters.province) {
        filtered = filtered.filter(ministry => ministry.province === this.filters.province)
      }

      this.filteredMinistries = filtered
      this.currentPage = 1 // Reset to first page
    },

    resetFilters() {
      this.filters = {
        search: '',
        ministryType: '',
        status: '',
        province: ''
      }
      this.applyFilters()
    },

    calculateStatistics() {
      this.statistics.total = this.ministries.length
      this.statistics.active = this.ministries.filter(ministry => ministry.status === 'Active').length
      this.statistics.ministries = this.ministries.filter(ministry => ministry.ministryType === 'Ministry').length
      this.statistics.departments = this.ministries.filter(ministry => ministry.ministryType === 'Department').length
    },

    openCreateDialog() {
      this.selectedMinistry = null
      this.showDialog = true
    },

    openEditDialog(ministry) {
      this.selectedMinistry = ministry
      this.showDialog = true
    },

    openViewDialog(ministry) {
      this.selectedMinistry = ministry
      this.showViewDialog = true
    },

    closeDialog() {
      this.showDialog = false
      this.selectedMinistry = null
    },

    closeViewDialog() {
      this.showViewDialog = false
      this.selectedMinistry = null
    },

    async onMinistrySaved(response) {
      try {
        if (response && response.success !== false) {
          this.showToast('ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ', 'success')
          await this.fetchMinistries()
          await this.fetchHierarchy()
        } else {
          const errorMessage = response?.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
          this.showToast(errorMessage, 'error')
        }
      } catch (error) {
        console.error('Error in onMinistrySaved:', error)
        this.showToast('ມີຂໍ້ຜິດພາດຢ່າງບໍ່ຄາດຄິດ', 'error')
      }
    },

    async toggleStatus(ministry) {
      try {
        const response = await this.$axios.put(`/api/ministries/${ministry.id}/toggle-status`)
        
        if (response.data && response.data.success) {
          const status = ministry.isActive ? 'ປິດໃຊ້ງານ' : 'ເປີດໃຊ້ງານ'
          this.showToast(`${status}ສຳເລັດແລ້ວ`, 'success')
          await this.fetchMinistries()
          await this.fetchHierarchy()
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການປ່ຽນສະຖານະ', 'error')
        }
      } catch (error) {
        console.error('Error toggling status:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການປ່ຽນສະຖານະ', 'error')
      }
    },

    confirmDelete(ministry) {
      if (this.$swal) {
        this.$swal.fire({
          title: 'ຢືນຢັນການລຶບ',
          text: `ທ່ານຕ້ອງການລຶບ "${ministry.ministryName}" ແມ່ນບໍ?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ລຶບ',
          cancelButtonText: 'ຍົກເລີກ'
        }).then((result) => {
          if (result.isConfirmed) {
            this.deleteMinistry(ministry)
          }
        })
      } else {
        if (confirm(`ທ່ານຕ້ອງການລຶບ "${ministry.ministryName}" ແມ່ນບໍ?`)) {
          this.deleteMinistry(ministry)
        }
      }
    },

    async deleteMinistry(ministry) {
      try {
        const response = await this.$axios.delete(`/api/ministries/${ministry.id}`)
        
        if (response.data && response.data.success) {
          this.showToast('ລຶບຂໍ້ມູນສຳເລັດແລ້ວ', 'success')
          await this.fetchMinistries()
          await this.fetchHierarchy()
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການລຶບຂໍ້ມູນ', 'error')
        }
      } catch (error) {
        console.error('Error deleting ministry:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການລຶບຂໍ້ມູນ', 'error')
      }
    },

    getMinistryTypeClass(type) {
      const classes = {
        'Ministry': 'type-ministry',
        'Department': 'type-department',
        'Agency': 'type-agency',
        'Commission': 'type-commission'
      }
      return classes[type] || 'type-default'
    },

    getStatusClass(status) {
      const classes = {
        'Active': 'status-active',
        'Inactive': 'status-inactive',
        'Restructured': 'status-restructured',
        'Merged': 'status-merged'
      }
      return classes[status] || 'status-default'
    },

    getStatusIcon(status) {
      const icons = {
        'Active': 'fas fa-check-circle',
        'Inactive': 'fas fa-times-circle',
        'Restructured': 'fas fa-sync-alt',
        'Merged': 'fas fa-merge'
      }
      return icons[status] || 'fas fa-question-circle'
    },

    getStatusText(status) {
      const texts = {
        'Active': 'ໃຊ້ງານ',
        'Inactive': 'ປິດໃຊ້ງານ',
        'Restructured': 'ປັບໂຄງສ້າງ',
        'Merged': 'ລວມເຂົ້າກັນ'
      }
      return texts[status] || status
    },

    formatDate(dateString) {
      if (!dateString) return '-'
      const date = new Date(dateString)
      return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    },

    showToast(message, type = 'info') {
      if (this.$swal) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: type === 'error' ? 5000 : 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        })

        const iconMap = {
          success: 'success',
          error: 'error',
          warning: 'warning',
          info: 'info'
        }

        Toast.fire({
          icon: iconMap[type] || 'info',
          title: message
        })
      } else {
        console.log(`${type}: ${message}`)
        alert(`${type.toUpperCase()}: ${message}`)
      }
    }
  }
}
</script>

<style scoped>
.ministry-page {
  padding: 24px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

/* Page Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  flex: 1;
}

.page-title {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-subtitle {
  margin: 0;
  color: #666;
  font-size: 16px;
}

.header-actions {
  display: flex;
  gap: 12px;
}

/* Filters Section */
.filters-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.filter-row {
  display: flex;
  gap: 16px;
  align-items: end;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
}

.filter-label {
  font-weight: 500;
  color: #555;
  font-size: 14px;
}

.search-input-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 14px;
}

.search-input {
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.filter-select {
  padding: 10px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;
}

.filter-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.filter-actions {
  display: flex;
  align-items: end;
}

/* Statistics Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
}

.stat-icon-primary { background-color: #007bff; }
.stat-icon-success { background-color: #28a745; }
.stat-icon-warning { background-color: #ffc107; }
.stat-icon-info { background-color: #17a2b8; }

.stat-content {
  flex: 1;
}

.stat-number {
  margin: 0 0 4px 0;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.stat-label {
  margin: 0;
  color: #666;
  font-size: 14px;
}

/* Hierarchy Section */
.hierarchy-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  margin-bottom: 24px;
}

.section-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
}

.section-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.hierarchy-wrapper {
  padding: 20px;
}

.hierarchy-tree {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ministry-node {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
}

.ministry-card {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.ministry-card.type-ministry { border-left: 4px solid #007bff; }
.ministry-card.type-department { border-left: 4px solid #28a745; }
.ministry-card.type-agency { border-left: 4px solid #ffc107; }
.ministry-card.type-commission { border-left: 4px solid #17a2b8; }

.ministry-info {
  flex: 1;
}

.ministry-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.ministry-name {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.ministry-code {
  background: #6c757d;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-family: monospace;
}

.ministry-details {
  margin-bottom: 12px;
}

.minister-name,
.ministry-location {
  margin: 4px 0;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ministry-meta {
  display: flex;
  gap: 8px;
  align-items: center;
}

.ministry-actions {
  display: flex;
  gap: 8px;
}

.sub-ministries {
  background: white;
  padding: 16px;
}

.sub-ministry-card {
  padding: 12px 16px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
}

.sub-ministry-card:last-child {
  margin-bottom: 0;
}

.sub-ministry-info {
  flex: 1;
}

.sub-ministry-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.sub-ministry-name {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.sub-ministry-code {
  background: #6c757d;
  color: white;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-family: monospace;
}

.sub-ministry-actions {
  display: flex;
  gap: 4px;
}

/* Table Section */
.table-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.table-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.table-info {
  color: #666;
  font-size: 14px;
}

.table-wrapper {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e9ecef;
}

.data-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.data-table td {
  font-size: 14px;
  color: #555;
}

.ministry-code {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: monospace;
  font-weight: 500;
}

.ministry-info-cell {
  max-width: 250px;
}

.ministry-name-primary {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.ministry-name-en {
  font-size: 13px;
  color: #666;
  font-style: italic;
  margin-bottom: 4px;
}

.parent-ministry {
  font-size: 12px;
  color: #007bff;
  display: flex;
  align-items: center;
  gap: 4px;
}

.location-info .district {
  font-size: 13px;
  color: #666;
}

.contact-info {
  max-width: 200px;
}

.contact-item {
  font-size: 12px;
  color: #666;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.ministry-type-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.type-ministry { background-color: #e7f3ff; color: #0056b3; }
.type-department { background-color: #d4edda; color: #155724; }
.type-agency { background-color: #fff3cd; color: #856404; }
.type-commission { background-color: #d1ecf1; color: #0c5460; }

.status-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.status-active {
  background-color: #d4edda;
  color: #155724;
}

.status-inactive {
  background-color: #f8d7da;
  color: #721c24;
}

.status-restructured {
  background-color: #fff3cd;
  color: #856404;
}

.status-merged {
  background-color: #d1ecf1;
  color: #0c5460;
}

.action-buttons {
  display: flex;
  gap: 6px;
}

.btn-icon {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: all 0.2s;
}

.btn-icon-sm {
  width: 24px;
  height: 24px;
  font-size: 10px;
}

.btn-icon:hover {
  transform: translateY(-1px);
}

.btn-icon:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-icon-primary {
  background-color: #007bff;
  color: white;
}

.btn-icon-primary:hover:not(:disabled) {
  background-color: #0056b3;
}

.btn-icon-info {
  background-color: #17a2b8;
  color: white;
}

.btn-icon-info:hover:not(:disabled) {
  background-color: #138496;
}

.btn-icon-warning {
  background-color: #ffc107;
  color: #333;
}

.btn-icon-warning:hover:not(:disabled) {
  background-color: #e0a800;
}

.btn-icon-danger {
  background-color: #dc3545;
  color: white;
}

.btn-icon-danger:hover:not(:disabled) {
  background-color: #c82333;
}

/* Loading and Empty States */
.loading-state,
.empty-state {
  padding: 60px 20px;
  text-align: center;
  color: #666;
}

.loading-state i {
  font-size: 32px;
  margin-bottom: 16px;
  color: #007bff;
}

.empty-state i {
  font-size: 64px;
  margin-bottom: 16px;
  color: #ccc;
}

.empty-state h3 {
  margin: 0 0 8px 0;
  font-size: 20px;
  color: #333;
}

.empty-state p {
  margin: 0;
  font-size: 16px;
}

/* Pagination */
.pagination-section {
  padding: 20px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination-info {
  font-size: 14px;
  color: #666;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-info {
  padding: 0 16px;
  font-size: 14px;
  color: #666;
}

/* Button Styles */
.btn {
  padding: 10px 20px;
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
  background-color: #545b62;
  border-color: #545b62;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:hover:not(:disabled) {
  background-color: #6c757d;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ministry-page {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .filter-row {
    flex-direction: column;
    gap: 12px;
  }

  .filter-group {
    min-width: auto;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }

  .ministry-card {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .ministry-actions {
    justify-content: center;
  }

  .sub-ministry-card {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  .sub-ministry-actions {
    justify-content: center;
  }

  .table-wrapper {
    overflow-x: scroll;
  }

  .data-table {
    min-width: 1000px;
  }

  .pagination-section {
    flex-direction: column;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 24px;
  }

  .stat-card {
    padding: 16px;
  }

  .stat-number {
    font-size: 20px;
  }

  .ministry-card {
    padding: 16px;
  }

  .ministry-name {
    font-size: 16px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 4px;
  }
}
</style>