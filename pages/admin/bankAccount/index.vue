<template>
  <div class="bank-account-page">
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
              placeholder="ຄົ້ນຫາເລກບັນຊີ, ຊື່ບັນຊີ..."
              @input="applyFilters"
            />
          </div>
        </div>

        <div class="filter-group">
          <label class="filter-label">ທະນາຄານ</label>
          <select v-model="filters.bankId" @change="applyFilters" class="filter-select">
            <option value="">ທັງໝົດ</option>
            <option v-for="bank in bankList" :key="bank.id" :value="bank.id">
              {{ bank.bank_name }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label class="filter-label">ສະກຸນເງິນ</label>
          <select v-model="filters.currency" @change="applyFilters" class="filter-select">
            <option value="">ທັງໝົດ</option>
            <option value="LAK">LAK</option>
            <option value="USD">USD</option>
            <option value="THB">THB</option>
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
            <i class="fas fa-redo"></i> ລ້າງ
          </button>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="stat-card">
        <div class="stat-icon stat-icon-primary"><i class="fas fa-university"></i></div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.total }}</h3>
          <p class="stat-label">ທັງໝົດ</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon stat-icon-success"><i class="fas fa-check-circle"></i></div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.active }}</h3>
          <p class="stat-label">ໃຊ້ງານ</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon stat-icon-info"><i class="fas fa-dollar-sign"></i></div>
        <div class="stat-content">
          <h3 class="stat-number">{{ statistics.currencies }}</h3>
          <p class="stat-label">ສະກຸນເງິນ</p>
        </div>
      </div>
    </div>

    <div class="table-section">
      <div class="table-header">
        <h3 class="table-title">ລາຍການບັນຊີທະນາຄານ</h3>
        <div class="table-info">ທັງໝົດ {{ filteredAccounts.length }} ລາຍການ</div>
      </div>

      <div class="table-wrapper">
        <div v-if="loading" class="loading-state">
          <i class="fas fa-spinner fa-spin"></i>
          <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>

        <div v-else-if="filteredAccounts.length === 0" class="empty-state">
          <i class="fas fa-university"></i>
          <h3>ບໍ່ມີຂໍ້ມູນບັນຊີທະນາຄານ</h3>
        </div>

        <table v-else class="data-table">
          <thead>
            <tr>
              <th>ເລກບັນຊີ</th>
              <th>ຊື່ບັນຊີ</th>
              <th>ທະນາຄານ</th>
              <th>ສະກຸນເງິນ</th>
              <th>ສະຖານະ</th>
              <th>ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in paginatedAccounts" :key="account.id">
              <td><div class="account-number">{{ account.accountNumber }}</div></td>
              <td><div class="account-name">{{ account.accountName }}</div></td>
              <td>
                <div class="bank-info">
                  <strong>{{ getBankName(account.bankId) }}</strong>
                </div>
              </td>
              <td>
                <span class="currency-badge" :class="getCurrencyClass(account.currency)">
                  {{ account.currency }}
                </span>
              </td>
              <td>
                <span class="status-badge" :class="account.isActive ? 'status-active' : 'status-inactive'">
                  {{ account.isActive ? 'ໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                </span>
              </td>
              <td>
                <div class="action-buttons">
                  <button class="btn-icon btn-icon-primary" @click="openEditDialog(account)" title="ແກ້ໄຂ">
                    <i class="fas fa-edit"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      </div>

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
  components: { BankAccountDialog },
  middleware: 'auths',
  
  data() {
    return {
      loading: false,
      showDialog: false,
      selectedAccount: null,
      accounts: [],
      filteredAccounts: [],
      bankList: [], // Dynamic Bank Master Data
      currentPage: 1,
      pageSize: 10,
      filters: {
        search: '',
        bankId: '',
        currency: '',
        isActive: ''
      },
      statistics: { total: 0, active: 0, currencies: 0 }
    }
  },

  computed: {
    totalPages() { return Math.ceil(this.filteredAccounts.length / this.pageSize) },
    paginatedAccounts() {
      const start = (this.currentPage - 1) * this.pageSize
      return this.filteredAccounts.slice(start, start + this.pageSize)
    }
  },

  async mounted() {
    // Fetch both Bank Master and Accounts together
    await Promise.all([this.fetchBanks(), this.fetchAccounts()])
  },

  methods: {
    async fetchBanks() {
      try {
        const res = await this.$axios.get('/api/bank/find')
        this.bankList = res.data || []
      } catch (e) {
        console.error("Failed to load banks", e)
      }
    },

    async fetchAccounts() {
      this.loading = true
      try {
        const res = await this.$axios.get('/api/bank_account/findAll')
        this.accounts = res.data || []
        this.applyFilters()
        this.calculateStatistics()
      } finally {
        this.loading = false
      }
    },

    getBankName(bankId) {
      const bank = this.bankList.find(b => b.id === bankId)
      return bank ? bank.bank_name : 'Unknown Bank'
    },

    applyFilters() {
      let filtered = [...this.accounts]

      if (this.filters.search) {
        const s = this.filters.search.toLowerCase()
        filtered = filtered.filter(a => 
          a.accountNumber.toLowerCase().includes(s) || 
          a.accountName.toLowerCase().includes(s)
        )
      }

      if (this.filters.bankId) {
        filtered = filtered.filter(a => a.bankId === parseInt(this.filters.bankId))
      }

      if (this.filters.currency) {
        filtered = filtered.filter(a => a.currency === this.filters.currency)
      }

      if (this.filters.isActive !== '') {
        filtered = filtered.filter(a => a.isActive === (this.filters.isActive === 'true'))
      }

      this.filteredAccounts = filtered
      this.currentPage = 1
    },

    calculateStatistics() {
      this.statistics.total = this.accounts.length
      this.statistics.active = this.accounts.filter(a => a.isActive).length
      const uniqueCurrencies = [...new Set(this.accounts.map(a => a.currency))]
      this.statistics.currencies = uniqueCurrencies.length
    },

    resetFilters() {
      this.filters = { search: '', bankId: '', currency: '', isActive: '' }
      this.applyFilters()
    },

    openCreateDialog() { this.selectedAccount = null; this.showDialog = true; },
    openEditDialog(account) { this.selectedAccount = account; this.showDialog = true; },
    closeDialog() { this.showDialog = false; this.selectedAccount = null; },
    
    async onAccountSaved() {
      await this.fetchAccounts()
      this.showToast('ບັນທຶກສຳເລັດ', 'success')
    },

    getCurrencyClass(currency) {
      return { 'currency-lak': currency === 'LAK', 'currency-usd': currency === 'USD', 'currency-thb': currency === 'THB' }
    },

    showToast(message, type = 'info') {
      if (this.$swal) {
        this.$swal.fire({ toast: true, position: 'top-end', icon: type, title: message, showConfirmButton: false, timer: 3000 })
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