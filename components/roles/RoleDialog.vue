<template>
  <div v-if="show" class="modal-overlay" @click="handleClose">
    <div class="modal-container" @click.stop>
      <!-- Modal Header -->
      <div class="modal-header">
        <h2 class="modal-title">
          {{ mode === 'create' ? 'Create New Role' : 'Edit Role' }}
        </h2>
        <button @click="handleClose" class="modal-close">×</button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <!-- Role Name -->
        <div class="form-group">
          <label class="form-label">
            Role Name <span class="required">*</span>
          </label>
          <input
            v-model="formData.name"
            type="text"
            class="form-input"
            placeholder="e.g., cashier, supervisor"
            :class="{ error: errors.name }"
            @input="clearError('name')"
          />
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          <span class="form-hint">Lowercase, no spaces. Use hyphens or underscores.</span>
        </div>

        <!-- Role Level -->
        <div class="form-group">
          <label class="form-label">
            Permission Level <span class="required">*</span>
          </label>
          <div class="level-input-group">
            <input
              v-model.number="formData.level"
              type="number"
              min="0"
              max="100"
              class="form-input level-input"
              :class="{ error: errors.level }"
              @input="clearError('level')"
            />
            <div class="level-indicator" :class="getLevelClass(formData.level)">
              {{ getLevelLabel(formData.level) }}
            </div>
          </div>
          <span v-if="errors.level" class="error-message">{{ errors.level }}</span>
          <div class="level-guide">
            <div class="guide-item">
              <span class="guide-badge level-admin">100</span>
              <span class="guide-text">Admin</span>
            </div>
            <div class="guide-item">
              <span class="guide-badge level-manager">50</span>
              <span class="guide-text">Manager</span>
            </div>
            <div class="guide-item">
              <span class="guide-badge level-supervisor">30</span>
              <span class="guide-text">Supervisor</span>
            </div>
            <div class="guide-item">
              <span class="guide-badge level-staff">10</span>
              <span class="guide-text">Staff</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea
            v-model="formData.description"
            class="form-textarea"
            rows="3"
            placeholder="Describe this role and its responsibilities..."
            :class="{ error: errors.description }"
            @input="clearError('description')"
          ></textarea>
          <span v-if="errors.description" class="error-message">{{
            errors.description
          }}</span>
        </div>

        <!-- Permissions -->
        <div class="form-group permissions-group">
          <div class="permissions-header">
            <label class="form-label">Permissions</label>
            <div class="permissions-actions">
              <button @click="selectAllPermissions" class="link-btn">
                Select All
              </button>
              <span class="separator">|</span>
              <button @click="clearAllPermissions" class="link-btn">
                Clear All
              </button>
            </div>
          </div>

          <!-- Permissions by Category -->
          <div class="permissions-container">
            <div
              v-for="(categoryPerms, category) in groupedPermissions"
              :key="category"
              class="permission-category"
            >
              <div class="category-header" @click="toggleCategory(category)">
                <span class="category-icon">{{
                  expandedCategories.includes(category) ? '▼' : '▶'
                }}</span>
                <span class="category-name">{{ formatCategoryName(category) }}</span>
                <span class="category-count">{{ categoryPerms.length }}</span>
              </div>

              <div
                v-show="expandedCategories.includes(category)"
                class="category-permissions"
              >
                <label
                  v-for="permission in categoryPerms"
                  :key="permission.key"
                  class="permission-item"
                >
                  <input
                    v-model="formData.permissions"
                    type="checkbox"
                    :value="permission.key"
                    class="permission-checkbox"
                  />
                  <div class="permission-info">
                    <span class="permission-label">{{ permission.label }}</span>
                    <span class="permission-description">{{
                      permission.description
                    }}</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Selected Permissions Summary -->
          <div class="selected-summary">
            <span class="summary-label">Selected:</span>
            <span class="summary-count">{{ formData.permissions.length }}</span>
            <span class="summary-text">permission(s)</span>
          </div>
        </div>

        <!-- Active Status -->
        <div class="form-group">
          <label class="form-label checkbox-label">
            <input
              v-model="formData.isActive"
              type="checkbox"
              class="form-checkbox"
            />
            <span>Active Role</span>
          </label>
          <span class="form-hint">Inactive roles cannot be assigned to users</span>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer">
        <button @click="handleClose" class="btn-secondary">Cancel</button>
        <button @click="handleSave" class="btn-primary" :disabled="saving">
          {{ saving ? 'Saving...' : mode === 'create' ? 'Create Role' : 'Save Changes' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoleDialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    role: {
      type: Object,
      default: null,
    },
    permissions: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: String,
      default: 'create', // 'create' or 'edit'
    },
  },

  data() {
    return {
      formData: {
        name: '',
        level: 10,
        permissions: [],
        description: '',
        isActive: true,
      },
      errors: {},
      saving: false,
      expandedCategories: [],
    }
  },

  computed: {
    groupedPermissions() {
      const groups = {}
      
      this.permissions.forEach((permission) => {
        const category = permission.key.split('.')[0]
        if (!groups[category]) {
          groups[category] = []
        }
        groups[category].push(permission)
      })

      return groups
    },
  },

  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeForm()
        // Expand all categories by default
        this.expandedCategories = Object.keys(this.groupedPermissions)
      }
    },
  },

  methods: {
    initializeForm() {
      if (this.mode === 'edit' && this.role) {
        this.formData = {
          id: this.role.id,
          name: this.role.name,
          level: this.role.level || 10,
          permissions: Array.isArray(this.role.permissions)
            ? [...this.role.permissions]
            : [],
          description: this.role.description || '',
          isActive: this.role.isActive !== false,
        }
      } else {
        this.formData = {
          name: '',
          level: 10,
          permissions: [],
          description: '',
          isActive: true,
        }
      }
      this.errors = {}
    },

    validateForm() {
      this.errors = {}

      // Validate name
      if (!this.formData.name || this.formData.name.trim() === '') {
        this.errors.name = 'Role name is required'
      } else if (!/^[a-z0-9_-]+$/.test(this.formData.name)) {
        this.errors.name = 'Role name can only contain lowercase letters, numbers, underscores, and hyphens'
      }

      // Validate level
      if (this.formData.level === null || this.formData.level === undefined) {
        this.errors.level = 'Permission level is required'
      } else if (this.formData.level < 0 || this.formData.level > 100) {
        this.errors.level = 'Level must be between 0 and 100'
      }

      // Validate description length
      if (this.formData.description && this.formData.description.length > 500) {
        this.errors.description = 'Description cannot exceed 500 characters'
      }

      return Object.keys(this.errors).length === 0
    },

    clearError(field) {
      if (this.errors[field]) {
        delete this.errors[field]
      }
    },

    handleSave() {
      if (!this.validateForm()) {
        this.$toast.error('Please fix validation errors')
        return
      }

      // Trim name and convert to lowercase
      const saveData = {
        ...this.formData,
        name: this.formData.name.toLowerCase().trim(),
        description: this.formData.description?.trim() || null,
      }

      this.$emit('save', saveData)
    },

    handleClose() {
      this.$emit('close')
    },

    getLevelClass(level) {
      if (level >= 100) return 'level-admin'
      if (level >= 50) return 'level-manager'
      if (level >= 30) return 'level-supervisor'
      return 'level-staff'
    },

    getLevelLabel(level) {
      if (level >= 100) return 'Admin Level'
      if (level >= 50) return 'Manager Level'
      if (level >= 30) return 'Supervisor Level'
      return 'Staff Level'
    },

    formatCategoryName(category) {
      return category.charAt(0).toUpperCase() + category.slice(1)
    },

    toggleCategory(category) {
      const index = this.expandedCategories.indexOf(category)
      if (index > -1) {
        this.expandedCategories.splice(index, 1)
      } else {
        this.expandedCategories.push(category)
      }
    },

    selectAllPermissions() {
      this.formData.permissions = this.permissions.map((p) => p.key)
    },

    clearAllPermissions() {
      this.formData.permissions = []
    },
  },
}
</script>

<style scoped>
/* Modal Overlay */
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
  padding: 0; /* Remove padding for full screen */
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

/* Modal Container */
.modal-container {
  background: white;
  border-radius: 0; /* Remove border radius for full screen */
  width: 100vw;
  height: 100vh;
  max-width: none;
  max-height: none;
  display: flex;
  flex-direction: column;
  box-shadow: none;
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

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
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

/* Form Groups */
.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
  font-size: 14px;
}

.required {
  color: #e53e3e;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: #fc8181;
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.error-message {
  display: block;
  color: #e53e3e;
  font-size: 12px;
  margin-top: 6px;
  font-weight: 500;
}

.form-hint {
  display: block;
  font-size: 12px;
  color: #718096;
  margin-top: 6px;
  font-style: italic;
}

/* Level Input */
.level-input-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.level-input {
  flex: 0 0 120px;
}

.level-indicator {
  flex: 1;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
}

.level-indicator.level-admin {
  background: #fed7d7;
  color: #c53030;
}

.level-indicator.level-manager {
  background: #feebc8;
  color: #c05621;
}

.level-indicator.level-supervisor {
  background: #bee3f8;
  color: #2c5282;
}

.level-indicator.level-staff {
  background: #e2e8f0;
  color: #2d3748;
}

/* Level Guide */
.level-guide {
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.guide-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.guide-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
}

.guide-badge.level-admin {
  background: #fed7d7;
  color: #c53030;
}

.guide-badge.level-manager {
  background: #feebc8;
  color: #c05621;
}

.guide-badge.level-supervisor {
  background: #bee3f8;
  color: #2c5282;
}

.guide-badge.level-staff {
  background: #e2e8f0;
  color: #2d3748;
}

.guide-text {
  font-size: 12px;
  color: #4a5568;
  font-weight: 500;
}

/* Checkbox */
.checkbox-label {
  display: flex !important;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 400 !important;
}

.form-checkbox {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

/* Permissions */
.permissions-group {
  margin-top: 32px;
}

.permissions-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.permissions-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.link-btn {
  background: none;
  border: none;
  color: #4299e1;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s;
}

.link-btn:hover {
  background: #ebf8ff;
  color: #2c5282;
}

.separator {
  color: #cbd5e0;
}

.permissions-container {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.permission-category {
  border-bottom: 1px solid #e2e8f0;
}

.permission-category:last-child {
  border-bottom: none;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f7fafc;
  cursor: pointer;
  transition: all 0.2s;
}

.category-header:hover {
  background: #edf2f7;
}

.category-icon {
  font-size: 12px;
  color: #718096;
  width: 16px;
}

.category-name {
  flex: 1;
  font-weight: 600;
  color: #2d3748;
  font-size: 14px;
}

.category-count {
  background: #e2e8f0;
  color: #4a5568;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.category-permissions {
  padding: 8px;
}

.permission-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
}

.permission-item:hover {
  background: #f7fafc;
}

.permission-checkbox {
  cursor: pointer;
  margin-top: 2px;
  flex-shrink: 0;
}

.permission-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.permission-label {
  font-weight: 500;
  color: #2d3748;
  font-size: 14px;
}

.permission-description {
  font-size: 12px;
  color: #718096;
}

/* Selected Summary */
.selected-summary {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 12px;
  background: #ebf8ff;
  border-radius: 6px;
}

.summary-label {
  font-weight: 600;
  color: #2c5282;
  font-size: 13px;
}

.summary-count {
  background: #4299e1;
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
}

.summary-text {
  color: #2c5282;
  font-size: 13px;
}

/* Modal Footer */
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #e2e8f0;
}

.btn-primary,
.btn-secondary {
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #4299e1;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #3182ce;
}

.btn-primary:disabled {
  background: #cbd5e0;
  cursor: not-allowed;
}

.btn-secondary {
  background: #e2e8f0;
  color: #2d3748;
}

.btn-secondary:hover {
  background: #cbd5e0;
}

/* Responsive */
@media (max-width: 768px) {
  .modal-container {
    max-width: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .modal-body {
    padding: 16px;
  }

  .level-input-group {
    flex-direction: column;
    align-items: stretch;
  }

  .level-input {
    flex: 1;
  }

  .permissions-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .modal-footer {
    flex-direction: column-reverse;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>