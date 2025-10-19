<template>
  <div v-if="show" class="modal-overlay" @click="$emit('close')">
    <div class="modal-container" @click.stop>
      <!-- Modal Header -->
      <div class="modal-header">
        <div class="header-info">
          <h2 class="modal-title">Users with Role: {{ role?.name || 'N/A' }}</h2>
          <span class="user-count-badge">{{ users.length }} user(s)</span>
        </div>
        <button @click="$emit('close')" class="modal-close">×</button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <!-- Search -->
        <div class="search-section">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search users..."
            class="search-input"
          />
        </div>

        <!-- Empty State -->
        <div v-if="filteredUsers.length === 0" class="empty-state">
          <div class="empty-icon">👥</div>
          <h3>No users found</h3>
          <p v-if="searchQuery">Try adjusting your search</p>
          <p v-else>No users are assigned to this role yet</p>
        </div>

        <!-- Users List -->
        <div v-else class="users-list">
          <div
            v-for="user in filteredUsers"
            :key="user.id"
            class="user-item"
            :class="{ inactive: !user.isActive }"
          >
            <!-- User Avatar -->
            <div class="user-avatar">
              <span class="avatar-text">{{ getUserInitials(user) }}</span>
            </div>

            <!-- User Info -->
            <div class="user-info">
              <div class="user-name">
                {{ user.firstName || user.username }}
                {{ user.lastName || '' }}
                <span v-if="!user.isActive" class="inactive-badge">Inactive</span>
              </div>
              <div class="user-details">
                <span class="detail-item">
                  <span class="detail-icon">📧</span>
                  {{ user.email }}
                </span>
                <span v-if="user.phone" class="detail-item">
                  <span class="detail-icon">📱</span>
                  {{ user.phone }}
                </span>
              </div>
              <div v-if="user.lastLogin" class="user-meta">
                Last login: {{ formatDate(user.lastLogin) }}
              </div>
            </div>

            <!-- User Actions -->
            <div class="user-actions">
              <button
                @click="viewUser(user)"
                class="action-btn btn-view"
                title="View User"
              >
                👁️
              </button>
              <button
                @click="editUser(user)"
                class="action-btn btn-edit"
                title="Edit User"
              >
                ✏️
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer">
        <div class="footer-info">
          <span class="info-text">
            Showing {{ filteredUsers.length }} of {{ users.length }} user(s)
          </span>
        </div>
        <button @click="$emit('close')" class="btn-close">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersListDialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    role: {
      type: Object,
      default: null,
    },
    users: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      searchQuery: '',
    }
  },

  computed: {
    filteredUsers() {
      if (!this.searchQuery) {
        return this.users
      }

      const query = this.searchQuery.toLowerCase()
      return this.users.filter((user) => {
        return (
          user.username?.toLowerCase().includes(query) ||
          user.email?.toLowerCase().includes(query) ||
          user.firstName?.toLowerCase().includes(query) ||
          user.lastName?.toLowerCase().includes(query) ||
          user.phone?.includes(query)
        )
      })
    },
  },

  watch: {
    show(newVal) {
      if (newVal) {
        this.searchQuery = ''
      }
    },
  },

  methods: {
    getUserInitials(user) {
      if (user.firstName && user.lastName) {
        return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase()
      }
      if (user.username) {
        return user.username.substring(0, 2).toUpperCase()
      }
      return '??'
    },

    formatDate(date) {
      if (!date) return 'Never'
      
      const d = new Date(date)
      const now = new Date()
      const diffMs = now - d
      const diffMins = Math.floor(diffMs / 60000)
      const diffHours = Math.floor(diffMins / 60)
      const diffDays = Math.floor(diffHours / 24)

      if (diffMins < 1) return 'Just now'
      if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`
      if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
      if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`

      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    },

    viewUser(user) {
      // Navigate to user detail page or open user detail dialog
      this.$router.push(`/admin/users/${user.id}`)
      this.$emit('close')
    },

    editUser(user) {
      // Navigate to user edit page or open user edit dialog
      this.$router.push(`/admin/users/${user.id}/edit`)
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-container {
  background: white;
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modal Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
  text-transform: capitalize;
}

.user-count-badge {
  background: #4299e1;
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
}

.modal-close {
  background: none;
  border: none;
  font-size: 32px;
  color: #718096;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
  flex-shrink: 0;
}

.modal-close:hover {
  background: #f7fafc;
  color: #2d3748;
}

/* Modal Body */
.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

/* Search */
.search-section {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-state h3 {
  color: #2d3748;
  margin: 0 0 8px 0;
  font-size: 18px;
}

.empty-state p {
  color: #718096;
  margin: 0;
  font-size: 14px;
}

/* Users List */
.users-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.user-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;
}

.user-item:hover {
  background: white;
  border-color: #cbd5e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.user-item.inactive {
  opacity: 0.6;
}

/* User Avatar */
.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-text {
  color: white;
  font-weight: 700;
  font-size: 16px;
}

/* User Info */
.user-info {
  flex: 1;
  min-width: 0;
}

.user-name {
  font-weight: 600;
  color: #1a202c;
  font-size: 15px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.inactive-badge {
  background: #fc8181;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 6px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #4a5568;
}

.detail-icon {
  font-size: 14px;
}

.user-meta {
  font-size: 12px;
  color: #718096;
  font-style: italic;
}

/* User Actions */
.user-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.action-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.btn-view {
  background: #e2e8f0;
}

.btn-view:hover {
  background: #cbd5e0;
}

.btn-edit {
  background: #bee3f8;
}

.btn-edit:hover {
  background: #90cdf4;
}

/* Modal Footer */
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-top: 1px solid #e2e8f0;
}

.footer-info {
  flex: 1;
}

.info-text {
  font-size: 13px;
  color: #718096;
  font-weight: 500;
}

.btn-close {
  padding: 10px 24px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-close:hover {
  background: #3182ce;
}

/* Responsive */
@media (max-width: 768px) {
  .modal-container {
    max-width: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .modal-header {
    padding: 16px;
  }

  .header-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .modal-title {
    font-size: 18px;
  }

  .modal-body {
    padding: 16px;
  }

  .user-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .user-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .modal-footer {
    flex-direction: column-reverse;
    gap: 12px;
    padding: 16px;
  }

  .btn-close {
    width: 100%;
  }
}
</style>