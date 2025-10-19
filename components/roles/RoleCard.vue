<template>
  <div class="role-card" :class="{ inactive: !role.isActive }">
    <!-- Card Header -->
    <div class="card-header">
      <div class="role-info">
        <div class="role-name">
          <span class="name-text">{{ role.name }}</span>
          <span v-if="!role.isActive" class="inactive-badge">Inactive</span>
        </div>
        <div class="role-level">
          <span class="level-badge" :class="getLevelClass(role.level)">
            Level {{ role.level }}
          </span>
        </div>
      </div>
      <div class="card-actions">
        <button @click.stop="$emit('edit', role)" class="action-icon" title="Edit">
          ✏️
        </button>
        <button
          @click.stop="showMenu = !showMenu"
          class="action-icon"
          title="More"
        >
          ⋮
        </button>
        
        <!-- Dropdown Menu -->
        <div v-if="showMenu" class="dropdown-menu" @click.stop>
          <button @click="handleClone" class="menu-item">
            <span class="menu-icon">📋</span>
            <span>Clone Role</span>
          </button>
          <button @click="handleViewUsers" class="menu-item">
            <span class="menu-icon">👥</span>
            <span>View Users ({{ role.users?.length || 0 }})</span>
          </button>
          <button @click="handleToggleStatus" class="menu-item">
            <span class="menu-icon">{{ role.isActive ? '🔒' : '✓' }}</span>
            <span>{{ role.isActive ? 'Deactivate' : 'Activate' }}</span>
          </button>
          <button
            v-if="!isSystemRole"
            @click="handleDelete"
            class="menu-item danger"
          >
            <span class="menu-icon">🗑️</span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Card Body -->
    <div class="card-body">
      <p v-if="role.description" class="role-description">
        {{ role.description }}
      </p>
      <p v-else class="role-description empty">No description available</p>

      <!-- Permissions Preview -->
      <div class="permissions-section">
        <h4 class="section-title">Permissions</h4>
        <div v-if="role.permissions && role.permissions.length > 0" class="permissions-list">
          <span
            v-for="(permission, index) in displayPermissions"
            :key="index"
            class="permission-tag"
          >
            {{ formatPermission(permission) }}
          </span>
          <span
            v-if="role.permissions.length > maxDisplayPermissions"
            class="permission-tag more"
          >
            +{{ role.permissions.length - maxDisplayPermissions }} more
          </span>
        </div>
        <p v-else class="no-permissions">No permissions assigned</p>
      </div>

      <!-- Users Count -->
      <div class="users-section">
        <div class="users-info">
          <span class="users-icon">👥</span>
          <span class="users-count">
            {{ role.users?.length || 0 }} {{ role.users?.length === 1 ? 'user' : 'users' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Card Footer -->
    <div class="card-footer">
      <button @click="$emit('edit', role)" class="footer-btn btn-edit">
        Edit Role
      </button>
      <button @click="handleViewUsers" class="footer-btn btn-users">
        View Users
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoleCard',

  props: {
    role: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showMenu: false,
      maxDisplayPermissions: 5,
    }
  },

  computed: {
    isSystemRole() {
      const systemRoles = ['admin', 'superadmin', 'manager', 'staff']
      return systemRoles.includes(this.role.name)
    },

    displayPermissions() {
      if (!this.role.permissions) return []
      return this.role.permissions.slice(0, this.maxDisplayPermissions)
    },
  },

  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', this.closeMenu)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu)
  },

  methods: {
    closeMenu() {
      this.showMenu = false
    },

    getLevelClass(level) {
      if (level >= 100) return 'level-admin'
      if (level >= 50) return 'level-manager'
      if (level >= 30) return 'level-supervisor'
      return 'level-staff'
    },

    formatPermission(permission) {
      // Convert 'ticket.create' to 'Create Tickets'
      const parts = permission.split('.')
      if (parts.length === 2) {
        const action = parts[1].charAt(0).toUpperCase() + parts[1].slice(1)
        const resource = parts[0].charAt(0).toUpperCase() + parts[0].slice(1)
        return `${action} ${resource}`
      }
      return permission
    },

    handleClone() {
      this.showMenu = false
      this.$emit('clone', this.role)
    },

    handleViewUsers() {
      this.showMenu = false
      this.$emit('view-users', this.role)
    },

    handleToggleStatus() {
      this.showMenu = false
      this.$emit('toggle-status', this.role)
    },

    handleDelete() {
      this.showMenu = false
      this.$emit('delete', this.role)
    },
  },
}
</script>

<style scoped>
.role-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}

.role-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: #4299e1;
}

.role-card.inactive {
  opacity: 0.7;
  border-color: #cbd5e0;
}

/* Card Header */
.card-header {
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.role-info {
  flex: 1;
}

.role-name {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.name-text {
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  text-transform: capitalize;
}

.inactive-badge {
  background: #fc8181;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.role-level {
  display: flex;
  align-items: center;
}

.level-badge {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.level-admin {
  background: #fed7d7;
  color: #c53030;
}

.level-manager {
  background: #feebc8;
  color: #c05621;
}

.level-supervisor {
  background: #bee3f8;
  color: #2c5282;
}

.level-staff {
  background: #e2e8f0;
  color: #2d3748;
}

.card-actions {
  display: flex;
  gap: 8px;
  position: relative;
}

.action-icon {
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s;
}

.action-icon:hover {
  background: #f7fafc;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  min-width: 180px;
  z-index: 10;
  margin-top: 4px;
}

.menu-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  color: #2d3748;
  transition: all 0.2s;
  text-align: left;
}

.menu-item:hover {
  background: #f7fafc;
}

.menu-item.danger {
  color: #e53e3e;
}

.menu-item.danger:hover {
  background: #fff5f5;
}

.menu-icon {
  font-size: 16px;
}

/* Card Body */
.card-body {
  padding: 20px;
  flex: 1;
}

.role-description {
  color: #4a5568;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.role-description.empty {
  color: #a0aec0;
  font-style: italic;
}

.permissions-section {
  margin-bottom: 16px;
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 12px 0;
}

.permissions-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.permission-tag {
  background: #ebf8ff;
  color: #2c5282;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.permission-tag.more {
  background: #e2e8f0;
  color: #4a5568;
}

.no-permissions {
  color: #a0aec0;
  font-size: 13px;
  font-style: italic;
  margin: 0;
}

.users-section {
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.users-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.users-icon {
  font-size: 18px;
}

.users-count {
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
}

/* Card Footer */
.card-footer {
  padding: 16px 20px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 8px;
}

.footer-btn {
  flex: 1;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-edit {
  background: #4299e1;
  color: white;
}

.btn-edit:hover {
  background: #3182ce;
}

.btn-users {
  background: #e2e8f0;
  color: #2d3748;
}

.btn-users:hover {
  background: #cbd5e0;
}

/* Responsive */
@media (max-width: 768px) {
  .role-card {
    margin-bottom: 16px;
  }

  .card-footer {
    flex-direction: column;
  }
}
</style>