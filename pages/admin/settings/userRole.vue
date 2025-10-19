<template>
  <div class="roles-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-left">
        <h1>Role Management</h1>
        <p class="subtitle">Manage user roles and permissions</p>
      </div>
      <div class="header-actions">
        <button @click="refreshRoles" class="btn-secondary">
          <span class="icon">↻</span>
          <span>Refresh</span>
        </button>
        <button @click="openCreateDialog" class="btn-primary">
          <span class="icon">➕</span>
          <span>New Role</span>
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.totalRoles }}</div>
          <div class="stat-label">Total Roles</div>
        </div>
      </div>
      <div class="stat-card stat-active">
        <div class="stat-icon">✓</div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.activeRoles }}</div>
          <div class="stat-label">Active Roles</div>
        </div>
      </div>
      <div class="stat-card stat-users">
        <div class="stat-icon">👤</div>
        <div class="stat-info">
          <div class="stat-value">{{ stats.totalUsers }}</div>
          <div class="stat-label">Total Users</div>
        </div>
      </div>
      <div class="stat-card stat-permissions">
        <div class="stat-icon">🔑</div>
        <div class="stat-info">
          <div class="stat-value">{{ availablePermissions.length }}</div>
          <div class="stat-label">Permissions</div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="filters-section">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search roles..."
        class="search-input"
      />
      <select v-model="statusFilter" class="filter-select">
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="state-container">
      <div class="spinner"></div>
      <p>Loading roles...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="state-container error">
      <div class="error-icon">⚠️</div>
      <h3>Error Loading Roles</h3>
      <p>{{ error }}</p>
      <button @click="fetchRoles" class="btn-retry">Try Again</button>
    </div>

    <!-- Empty State -->
    <div v-else-if="filteredRoles.length === 0" class="state-container empty">
      <div class="empty-icon">👥</div>
      <h3>No roles found</h3>
      <p v-if="searchQuery">Try adjusting your search</p>
      <p v-else>Get started by creating your first role</p>
    </div>

    <!-- Roles Grid -->
    <div v-else class="roles-grid">
      <RoleCard
        v-for="role in filteredRoles"
        :key="role.id"
        :role="role"
        @edit="openEditDialog"
        @delete="confirmDelete"
        @view-users="viewRoleUsers"
        @clone="cloneRole"
        @toggle-status="toggleRoleStatus"
      />
    </div>

    <!-- Pagination -->
    <div v-if="pagination.totalPages > 1" class="pagination">
      <button
        @click="changePage(pagination.currentPage - 1)"
        :disabled="pagination.currentPage === 1"
        class="pagination-btn"
      >
        ← Previous
      </button>
      <span class="pagination-info">
        Page {{ pagination.currentPage }} of {{ pagination.totalPages }}
      </span>
      <button
        @click="changePage(pagination.currentPage + 1)"
        :disabled="pagination.currentPage === pagination.totalPages"
        class="pagination-btn"
      >
        Next →
      </button>
    </div>

    <!-- Create/Edit Role Dialog -->
    <RoleDialog
      :show="showDialog"
      :role="selectedRole"
      :permissions="availablePermissions"
      :mode="dialogMode"
      @close="closeDialog"
      @save="handleSaveRole"
    />

    <!-- Delete Confirmation Dialog -->
    <ConfirmDialog
      :show="showDeleteDialog"
      :title="`Delete Role: ${roleToDelete?.name || ''}`"
      :message="`Are you sure you want to delete this role? This action cannot be undone.`"
      :warning="roleToDelete?.users?.length > 0 ? `Warning: ${roleToDelete.users.length} user(s) are assigned to this role.` : ''"
      @confirm="deleteRole"
      @cancel="showDeleteDialog = false"
    />

    <!-- Users List Dialog -->
    <UsersListDialog
      :show="showUsersDialog"
      :role="selectedRole"
      :users="roleUsers"
      @close="showUsersDialog = false"
    />
  </div>
</template>

<script>
import RoleCard from '~/components/roles/RoleCard.vue'
import RoleDialog from '~/components/roles/RoleDialog.vue'
import ConfirmDialog from '~/components/shared/ConfirmDialog.vue'
import UsersListDialog from '~/components/roles/UsersListDialog.vue'

export default {
  name: 'RolesPage',

  components: {
    RoleCard,
    RoleDialog,
    ConfirmDialog,
    UsersListDialog,
  },

  data() {
    return {
      roles: [],
      loading: true,
      error: null,

      // Filters
      searchQuery: '',
      statusFilter: '',

      // Dialogs
      showDialog: false,
      showDeleteDialog: false,
      showUsersDialog: false,
      dialogMode: 'create', // 'create' or 'edit'
      selectedRole: null,
      roleToDelete: null,
      roleUsers: [],

      // Permissions
      availablePermissions: [],

      // Pagination
      pagination: {
        currentPage: 1,
        totalPages: 1,
        limit: 12,
      },
    }
  },

  computed: {
    filteredRoles() {
      let filtered = this.roles

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filtered = filtered.filter(
          (role) =>
            role.name.toLowerCase().includes(query) ||
            role.description?.toLowerCase().includes(query)
        )
      }

      // Status filter
      if (this.statusFilter) {
        const isActive = this.statusFilter === 'active'
        filtered = filtered.filter((role) => role.isActive === isActive)
      }

      return filtered
    },

    stats() {
      const totalUsers = this.roles.reduce(
        (sum, role) => sum + (role.users?.length || 0),
        0
      )

      return {
        totalRoles: this.roles.length,
        activeRoles: this.roles.filter((r) => r.isActive).length,
        totalUsers: totalUsers,
      }
    },
  },

  async mounted() {
    await this.fetchRoles()
    await this.fetchPermissions()
  },

  methods: {
    async fetchRoles() {
      this.loading = true
      this.error = null

      try {
        const params = {
          page: this.pagination.currentPage,
          limit: this.pagination.limit,
          sort: 'level:desc',
        }

        if (this.statusFilter) {
          params.isActive = this.statusFilter === 'active'
        }

        const response = await this.$axios.get('/api/role', { params })

        this.roles = response.data.data || []

        const paginationData = response.data.pagination
        if (paginationData) {
          this.pagination = {
            ...this.pagination,
            totalPages: paginationData.totalPages || 1,
            currentPage: paginationData.currentPage || 1,
          }
        }
      } catch (error) {
        console.error('Error fetching roles:', error)
        this.error =
          error.response?.data?.message || 'Failed to load roles'
      } finally {
        this.loading = false
      }
    },

    async fetchPermissions() {
      try {
        const response = await this.$axios.get('/api/role/permissions')
        
        // Flatten permissions object into array
        const permissionsObj = response.data.data || {}
        this.availablePermissions = Object.values(permissionsObj).flat()
      } catch (error) {
        console.error('Error fetching permissions:', error)
      }
    },

    async refreshRoles() {
      await this.fetchRoles()
      this.$toast.success('Roles refreshed')
    },

    async changePage(page) {
      if (page >= 1 && page <= this.pagination.totalPages) {
        this.pagination.currentPage = page
        await this.fetchRoles()
      }
    },

    openCreateDialog() {
      this.dialogMode = 'create'
      this.selectedRole = null
      this.showDialog = true
    },

    openEditDialog(role) {
      this.dialogMode = 'edit'
      this.selectedRole = { ...role }
      this.showDialog = true
    },

    closeDialog() {
      this.showDialog = false
      this.selectedRole = null
    },

    async handleSaveRole(roleData) {
      try {
        if (this.dialogMode === 'create') {
          await this.$axios.post('/api/role', roleData)
          this.$toast.success('Role created successfully')
        } else {
          await this.$axios.put(`/api/role/${roleData.id}`, roleData)
          this.$toast.success('Role updated successfully')
        }

        this.closeDialog()
        await this.fetchRoles()
      } catch (error) {
        console.error('Error saving role:', error)
        const message =
          error.response?.data?.message || 'Failed to save role'
        this.$toast.error(message)
      }
    },

    confirmDelete(role) {
      this.roleToDelete = role
      this.showDeleteDialog = true
    },

    async deleteRole() {
      if (!this.roleToDelete) return

      try {
        await this.$axios.delete(`/api/role/${this.roleToDelete.id}`)
        this.$toast.success('Role deleted successfully')
        this.showDeleteDialog = false
        this.roleToDelete = null
        await this.fetchRoles()
      } catch (error) {
        console.error('Error deleting role:', error)
        const message =
          error.response?.data?.message || 'Failed to delete role'
        this.$toast.error(message)
      }
    },

    async cloneRole(role) {
      const newName = prompt(
        `Enter name for cloned role:`,
        `${role.name}-copy`
      )

      if (!newName || newName.trim() === '') {
        return
      }

      try {
        await this.$axios.post(`/api/role/${role.id}/clone`, {
          name: newName.trim(),
        })
        this.$toast.success('Role cloned successfully')
        await this.fetchRoles()
      } catch (error) {
        console.error('Error cloning role:', error)
        const message =
          error.response?.data?.message || 'Failed to clone role'
        this.$toast.error(message)
      }
    },

    async toggleRoleStatus(role) {
      try {
        const endpoint = role.isActive ? 'deactivate' : 'activate'
        await this.$axios.patch(`/api/role/${role.id}/${endpoint}`)

        const action = role.isActive ? 'deactivated' : 'activated'
        this.$toast.success(`Role ${action} successfully`)

        await this.fetchRoles()
      } catch (error) {
        console.error('Error toggling role status:', error)
        const message =
          error.response?.data?.message || 'Failed to update role status'
        this.$toast.error(message)
      }
    },

    async viewRoleUsers(role) {
      try {
        const response = await this.$axios.get(`/api/role/${role.id}/users`)
        this.roleUsers = response.data.data || []
        this.selectedRole = role
        this.showUsersDialog = true
      } catch (error) {
        console.error('Error fetching role users:', error)
        this.$toast.error('Failed to load users')
      }
    },
  },
}
</script>

<style scoped>
.roles-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  background: #f7fafc;
  min-height: 100vh;
}

/* Page Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-left h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px 0;
}

.subtitle {
  color: #718096;
  font-size: 14px;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.btn-primary,
.btn-secondary,
.btn-retry {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-primary {
  background: #4299e1;
  color: white;
}

.btn-primary:hover {
  background: #3182ce;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #e2e8f0;
  color: #2d3748;
}

.btn-secondary:hover {
  background: #cbd5e0;
}

.btn-retry {
  background: #4299e1;
  color: white;
}

.icon {
  font-size: 18px;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
  border-left: 4px solid #4299e1;
  transition: all 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.stat-card.stat-active {
  border-left-color: #48bb78;
}

.stat-card.stat-users {
  border-left-color: #ed8936;
}

.stat-card.stat-permissions {
  border-left-color: #9f7aea;
}

.stat-icon {
  font-size: 36px;
  opacity: 0.9;
}

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 13px;
  color: #718096;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Filters */
.filters-section {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.search-input,
.filter-select {
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s;
  background: white;
}

.search-input {
  flex: 1;
  min-width: 250px;
}

.filter-select {
  min-width: 150px;
}

.search-input:focus,
.filter-select:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

/* State Container */
.state-container {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e2e8f0;
  border-top-color: #4299e1;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.state-container p {
  color: #718096;
  font-size: 16px;
  margin: 0;
}

.state-container.error .error-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.state-container.error h3 {
  color: #e53e3e;
  margin: 0 0 12px 0;
}

.state-container.empty .empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.state-container.empty h3 {
  color: #2d3748;
  margin: 0 0 8px 0;
}

/* Roles Grid */
.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
}

.pagination-btn {
  padding: 10px 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #4299e1;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
  background: #4299e1;
  color: white;
  border-color: #4299e1;
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-info {
  color: #718096;
  font-size: 14px;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .roles-page {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 16px;
  }

  .header-actions {
    width: 100%;
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .filters-section {
    flex-direction: column;
  }

  .search-input,
  .filter-select {
    width: 100%;
  }

  .roles-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>