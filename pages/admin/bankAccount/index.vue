<template>
  <div class="bank-account-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">
          <i class="fas fa-university"></i>
          ຈັດການບັນຊີທະນາຄານ
        </h1>
        <p class="page-subtitle">ຈັດການຂໍ້ມູນບັນຊີທະນາຄານທັງໝົດ</p>
      </div>
      <div class="header-actions">
        <button
          class="btn btn-primary"
          @click="openCreateDialog"
          :disabled="loading"
        >
          <i class="fas fa-plus"></i>
          ເພີ່ມບັນຊີໃໝ່
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
              placeholder="ຄົ້ນຫາເລກບັນຊີ, ຊື່ບັນຊີ, ທະນາຄານ..."
              @input="applyFilters"
            />
          </div>
        </div>

        <div class="filter-group">
          <label class="filter-label">ສະກຸນເງິນ</label>
          <select v-model="filters.currency" @change="applyFilters" class="filter-select">
            <option value="">ທັງໝົດ</option>
            <option value="LAK">LAK</option>
            <option value="USD">USD</option>
            <option value="THB">THB</option>
            <option value="CNY">CNY</option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">ປະເພດບັນຊີ</label>
          <select v-model="filters.accountType" @change="applyFilters" class="filter-select">
            <option value="">ທັງໝົດ</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
            <option value="Fixed Deposit">Fixed Deposit</option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">ສະຖານະ</label>
          <select v-model="filters.isActive" @change="applyFilters" class="filter-select">
            <option value="">ທັງໝົດ</option>
            <option value="true">ໃຊ້ງານ</option>
            <option value="false">ປິດໃຊ້ງານ</option>
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
          <i class="fas fa-university"></i>
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
        <div class="stat-icon stat-icon-warning">
          <i class="fas fa-pause-circle"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.inactive }}</h3>
          <p class="stat-label">ປິດໃຊ້ງານ</p>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon stat-icon-info">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.currencies }}</h3>
          <p class="stat-label">ສະກຸນເງິນ</p>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="table-section">
      <div class="table-header">
        <h3 class="table-title">ລາຍການບັນຊີທະນາຄານ</h3>
        <div class="table-info">
          ທັງໝົດ {{ filteredAccounts.length }} ລາຍການ
        </div>
      </div>

      <div class="table-wrapper">
        <div v-if="loading" class="loading-state">
          <i class="fas fa-spinner fa-spin"></i>
          <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>

        <div v-else-if="filteredAccounts.length === 0" class="empty-state">
          <i class="fas fa-university"></i>
          <h3>ບໍ່ມີຂໍ້ມູນບັນຊີທະນາຄານ</h3>
          <p>ກົດປຸ່ມ "ເພີ່ມບັນຊີໃໝ່" ເພື່ອເພີ່ມບັນຊີທະນາຄານ</p>
        </div>

        <table v-else class="data-table">
          <thead>
            <tr>
              <th>ເລກບັນຊີ</th>
              <th>ຊື່ບັນຊີ</th>
              <th>ທະນາຄານ</th>
              <th>ສາຂາ</th>
              <th>ປະເພດ</th>
              <th>ສະກຸນເງິນ</th>
              <th>ສະຖານະ</th>
              <th>ວັນທີສ້າງ</th>
              <th>ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in paginatedAccounts" :key="account.id">
              <td>
                <div class="account-number">
                  <i class="fas fa-credit-card"></i>
                  {{ account.accountNumber }}
                </div>
              </td>
              <td>
                <div class="account-name">
                  {{ account.accountName }}
                </div>
              </td>
              <td>
                <div class="bank-info">
                  <i class="fas fa-university"></i>
                  {{ account.bankName }}
                </div>
              </td>
              <td>{{ account.bankBranch || '-' }}</td>
              <td>
                <span class="account-type-badge" :class="getAccountTypeClass(account.accountType)">
                  {{ account.accountType }}
                </span>
              </td>
              <td>
                <span class="currency-badge" :class="getCurrencyClass(account.currency)">
                  {{ account.currency }}
                </span>
              </td>
              <td>
                <span class="status-badge" :class="account.isActive ? 'status-active' : 'status-inactive'">
                  <i :class="account.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                  {{ account.isActive ? 'ໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                </span>
              </td>
              <td>{{ formatDate(account.createdAt) }}</td>
              <td>
                <div class="action-buttons">
                  <button
                    class="btn-icon btn-icon-primary"
                    @click="openEditDialog(account)"
                    :disabled="loading"
                    title="ແກ້ໄຂ"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button
                    class="btn-icon btn-icon-warning"
                    @click="toggleStatus(account)"
                    :disabled="loading"
                    :title="account.isActive ? 'ປິດໃຊ້ງານ' : 'ເປີດໃຊ້ງານ'"
                  >
                    <i :class="account.isActive ? 'fas fa-pause' : 'fas fa-play'"></i>
                  </button>
                  <button
                    class="btn-icon btn-icon-danger"
                    @click="confirmDelete(account)"
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
          ສະແດງ {{ (currentPage - 1) * pageSize + 1 }} - {{ Math.min(currentPage * pageSize, filteredAccounts.length) }} 
          ຈາກ {{ filteredAccounts.length }} ລາຍການ
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

    <!-- Bank Account Dialog Component -->
    <BankAccountDialog
      :show="showDialog"
      :account="selectedAccount"
      @close="closeDialog"
      @saved="onAccountSaved"
    />
  </div>
</template>

<script>
import BankAccountDialog from '~/components/bank/bankAccount'

export default {
  name: 'BankAccountPage',
  
  components: {
    BankAccountDialog
  },

  data() {
    return {
      loading: false,
      showDialog: false,
      selectedAccount: null,
      
      accounts: [],
      filteredAccounts: [],
      
      // Pagination
      currentPage: 1,
      pageSize: 10,
      
      // Filters
      filters: {
        search: '',
        currency: '',
        accountType: '',
        isActive: ''
      },
      
      // Statistics
      statistics: {
        total: 0,
        active: 0,
        inactive: 0,
        currencies: 0
      }
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.filteredAccounts.length / this.pageSize)
    },
    
    paginatedAccounts() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.filteredAccounts.slice(start, end)
    }
  },

  async mounted() {
    await this.fetchAccounts()
  },

  methods: {
    async fetchAccounts() {
      try {
        this.loading = true
        const response = await this.$axios.get('/api/bank_account/findAll')
        
        if (response.data) {
          this.accounts = response.data || []
        } else {
          this.accounts = []
        }
        
        this.applyFilters()
        this.calculateStatistics()
      } catch (error) {
        console.error('Error fetching bank accounts:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ', 'error')
        this.accounts = []
      } finally {
        this.loading = false
      }
    },

    applyFilters() {
      let filtered = [...this.accounts]

      // Search filter
      if (this.filters.search) {
        const searchLower = this.filters.search.toLowerCase()
        filtered = filtered.filter(account =>
          account.accountNumber.toLowerCase().includes(searchLower) ||
          account.accountName.toLowerCase().includes(searchLower) ||
          account.bankName.toLowerCase().includes(searchLower) ||
          (account.bankBranch && account.bankBranch.toLowerCase().includes(searchLower))
        )
      }

      // Currency filter
      if (this.filters.currency) {
        filtered = filtered.filter(account => account.currency === this.filters.currency)
      }

      // Account type filter
      if (this.filters.accountType) {
        filtered = filtered.filter(account => account.accountType === this.filters.accountType)
      }

      // Status filter
      if (this.filters.isActive !== '') {
        const isActive = this.filters.isActive === 'true'
        filtered = filtered.filter(account => account.isActive === isActive)
      }

      this.filteredAccounts = filtered
      this.currentPage = 1 // Reset to first page
    },

    resetFilters() {
      this.filters = {
        search: '',
        currency: '',
        accountType: '',
        isActive: ''
      }
      this.applyFilters()
    },

    calculateStatistics() {
      this.statistics.total = this.accounts.length
      this.statistics.active = this.accounts.filter(account => account.isActive).length
      this.statistics.inactive = this.accounts.filter(account => !account.isActive).length
      
      const uniqueCurrencies = [...new Set(this.accounts.map(account => account.currency))]
      this.statistics.currencies = uniqueCurrencies.length
    },

    openCreateDialog() {
      this.selectedAccount = null
      this.showDialog = true
    },

    openEditDialog(account) {
      this.selectedAccount = account
      this.showDialog = true
    },

    closeDialog() {
      this.showDialog = false
      this.selectedAccount = null
    },

    async onAccountSaved(response) {
      try {
        if (response && response.success !== false) {
          this.showToast('ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ', 'success')
          await this.fetchAccounts()
        } else {
          const errorMessage = response?.message || 'ການບັນທຶກບໍ່ສຳເລັດ'
          this.showToast(errorMessage, 'error')
        }
      } catch (error) {
        console.error('Error in onAccountSaved:', error)
        this.showToast('ມີຂໍ້ຜິດພາດຢ່າງບໍ່ຄາດຄິດ', 'error')
      }
    },

    async toggleStatus(account) {
      try {
        const response = await this.$axios.put(`/api/bank_account/${account.id}/toggle-status`)
        
        if (response.data && response.data.success) {
          const status = account.isActive ? 'ປິດໃຊ້ງານ' : 'ເປີດໃຊ້ງານ'
          this.showToast(`${status}ສຳເລັດແລ້ວ`, 'success')
          await this.fetchAccounts()
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການປ່ຽນສະຖານະ', 'error')
        }
      } catch (error) {
        console.error('Error toggling status:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການປ່ຽນສະຖານະ', 'error')
      }
    },

    confirmDelete(account) {
      if (this.$swal) {
        this.$swal.fire({
          title: 'ຢືນຢັນການລຶບ',
          text: `ທ່ານຕ້ອງການລຶບບັນຊີ "${account.accountNumber}" ແມ່ນບໍ?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'ລຶບ',
          cancelButtonText: 'ຍົກເລີກ'
        }).then((result) => {
          if (result.isConfirmed) {
            this.deleteAccount(account)
          }
        })
      } else {
        if (confirm(`ທ່ານຕ້ອງການລຶບບັນຊີ "${account.accountNumber}" ແມ່ນບໍ?`)) {
          this.deleteAccount(account)
        }
      }
    },

    async deleteAccount(account) {
      try {
        const response = await this.$axios.delete(`/api/bank_account/${account.id}`)
        
        if (response.data && response.data.success) {
          this.showToast('ລຶບຂໍ້ມູນສຳເລັດແລ້ວ', 'success')
          await this.fetchAccounts()
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການລຶບຂໍ້ມູນ', 'error')
        }
      } catch (error) {
        console.error('Error deleting account:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການລຶບຂໍ້ມູນ', 'error')
      }
    },

    getAccountTypeClass(type) {
      const classes = {
        'Saving': 'type-saving',
        'Current': 'type-current',
        'Fixed Deposit': 'type-fixed'
      }
      return classes[type] || 'type-default'
    },

    getCurrencyClass(currency) {
      const classes = {
        'LAK': 'currency-lak',
        'USD': 'currency-usd',
        'THB': 'currency-thb',
        'CNY': 'currency-cny'
      }
      return classes[currency] || 'currency-default'
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
.bank-account-page {
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

.account-number {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: monospace;
  font-weight: 500;
}

.account-name {
  font-weight: 500;
}

.bank-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.account-type-badge,
.currency-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.type-saving { background-color: #d4edda; color: #155724; }
.type-current { background-color: #d1ecf1; color: #0c5460; }
.type-fixed { background-color: #fff3cd; color: #856404; }

.currency-lak { background-color: #e7f3ff; color: #0056b3; }
.currency-usd { background-color: #d4edda; color: #155724; }
.currency-thb { background-color: #fff3cd; color: #856404; }
.currency-cny { background-color: #f8d7da; color: #721c24; }

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

.action-buttons {
  display: flex;
  gap: 8px;
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
  .bank-account-page {
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

  .table-wrapper {
    overflow-x: scroll;
  }

  .data-table {
    min-width: 800px;
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

  .action-buttons {
    flex-direction: column;
    gap: 4px;
  }
}
</style>