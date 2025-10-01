<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog enhanced-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-gift modal-icon"></i>
          <h5 class="modal-title">
            {{ isEditMode ? 'ແກ້ໄຂສະຫວັດດີການ' : 'ເພີ່ມສະຫວັດດີການໃໝ່' }}
          </h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="saveBenefit">
        <div class="modal-body">
          <div class="form-grid">
            <!-- Basic Information Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-info-circle"></i>
                ຂໍ້ມູນພື້ນຖານ
              </h4>
            </div>

            <!-- Benefit Name -->
            <div class="form-group full-width">
              <label class="form-label required">
                <i class="fas fa-tag"></i>
                ຊື່ສະຫວັດດີການ
              </label>
              <input
                v-model="formData.name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.name }"
                placeholder="ເຊັ່ນ: ເງິນເດືອນພື້ນຖານ, ເງິນເດີນທາງ, ປະກັນສຸຂະພາບ"
                required
              />
              <div v-if="errors.name" class="invalid-feedback">
                {{ errors.name }}
              </div>
            </div>

            <!-- Type -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-layer-group"></i>
                ປະເພດສະຫວັດດີການ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.type"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.type }"
                  required
                >
                  <option value="">ເລືອກປະເພດ</option>
                  <option value="salary">ເງິນເດືອນ</option>
                  <option value="allowance">ເງິນອຸດໜູນ</option>
                  <option value="insurance">ປະກັນໄພ</option>
                  <option value="accommodation">ທີ່ພັກ</option>
                  <option value="transportation">ການເດີນທາງ</option>
                  <option value="other">ອື່ນໆ</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.type" class="invalid-feedback">
                {{ errors.type }}
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                {{ getTypeDescription(formData.type) }}
              </div>
            </div>

            <!-- Status -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-toggle-on"></i>
                ສະຖານະ
              </label>
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.isActive"
                  />
                  <span class="checkbox-label">ເປີດໃຊ້ງານ</span>
                </label>
              </div>
              <div class="field-hint" :class="formData.isActive ? 'success' : 'warning'">
                <i :class="formData.isActive ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle'"></i>
                {{ formData.isActive ? 'ສະຫວັດດີການນີ້ສາມາດໃຊ້ໄດ້' : 'ສະຫວັດດີການນີ້ຖືກປິດໃຊ້ງານ' }}
              </div>
            </div>

            <!-- Financial Information Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-coins"></i>
                ຂໍ້ມູນການເງິນ
              </h4>
            </div>

            <!-- Value -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-money-bill-wave"></i>
                ມູນຄ່າ/ຈຳນວນເງິນ
              </label>
              <input
                v-model.number="formData.value"
                type="number"
                class="form-control"
                :class="{ 'is-invalid': errors.value }"
                step="0.01"
                min="0"
                max="999999999.99"
                placeholder="0.00"
              />
              <div v-if="errors.value" class="invalid-feedback">
                {{ errors.value }}
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ໃສ່ຈຳນວນເງິນ ຫຼື ບໍ່ໃສ່ກໍໄດ້ຖ້າບໍ່ມີມູນຄ່າທີ່ແນ່ນອນ
              </div>
            </div>

            <!-- Currency -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-dollar-sign"></i>
                ສະກຸນເງິນ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.currency"
                  class="form-control custom-select"
                >
                  <option value="LAK">ກີບ ລາວ (LAK)</option>
                  <option value="THB">ບາດ ໄທ (THB)</option>
                  <option value="USD">ໂດລາ ສະຫະລັດ (USD)</option>
                  <option value="KRW">ວອນ ເກົາຫຼີ (KRW)</option>
                  <option value="JPY">ເຢນ ຍີ່ປຸ່ນ (JPY)</option>
                  <option value="MYR">ຣິງກິດ ມາເລເຊຍ (MYR)</option>
                  <option value="SGD">ໂດລາ ສິງກະໂປ (SGD)</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div class="field-hint success">
                <i class="fas fa-star"></i>
                ເລືອກສະກຸນເງິນທີ່ກ່ຽວຂ້ອງກັບປະເທດປາຍທາງ
              </div>
            </div>

            <!-- Job Advertisement Association -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-briefcase"></i>
                ການປະກາດຫາງານທີ່ກ່ຽວຂ້ອງ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.jobAdvertiseId"
                  class="form-control custom-select"
                >
                  <option value="">ບໍ່ກ່ຽວຂ້ອງກັບການປະກາດໃດ</option>
                  <option
                    v-for="job in availableJobs"
                    :key="job.id"
                    :value="job.id"
                  >
                    {{ job.title }} - {{ job.country }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ເລືອກການປະກາດຫາງານທີ່ສະຫວັດດີການນີ້ຈະຖືກນຳໃຊ້
              </div>
            </div>

            <!-- Description Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-align-left"></i>
                ລາຍລະອຽດ
              </h4>
            </div>

            <!-- Description -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-file-text"></i>
                ຄຳອະທິບາຍສະຫວັດດີການ
              </label>
              <textarea
                v-model="formData.description"
                class="form-control"
                rows="4"
                placeholder="ອະທິບາຍລາຍລະອຽດຂອງສະຫວັດດີການນີ້..."
                maxlength="1000"
              ></textarea>
              <div class="field-hint">
                <span class="text-counter">{{ formData.description?.length || 0 }}/1000</span>
              </div>
            </div>

            <!-- Notes -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-sticky-note"></i>
                ໝາຍເຫດ
              </label>
              <textarea
                v-model="formData.notes"
                class="form-control"
                rows="3"
                placeholder="ໝາຍເຫດເພີ່ມເຕີມ, ເງື່ອນໄຂພິເສດ..."
                maxlength="500"
              ></textarea>
              <div class="field-hint">
                <span class="text-counter">{{ formData.notes?.length || 0 }}/500</span>
              </div>
            </div>

            <!-- Benefit Preview Section -->
            <div class="form-group full-width">
              <div class="benefit-preview">
                <h5>
                  <i class="fas fa-eye"></i>
                  ຕົວຢ່າງສະຫວັດດີການ
                </h5>
                <div class="preview-card">
                  <div class="preview-header">
                    <div class="preview-name">
                      <i :class="getTypeIcon(formData.type)"></i>
                      <strong>{{ formData.name || 'ຊື່ສະຫວັດດີການ' }}</strong>
                    </div>
                    <div class="preview-status">
                      <span :class="['status-badge', formData.isActive ? 'active' : 'inactive']">
                        <i :class="formData.isActive ? 'fas fa-check-circle' : 'fas fa-times-circle'"></i>
                        {{ formData.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                      </span>
                    </div>
                  </div>
                  
                  <div class="preview-content">
                    <div class="preview-type">
                      <span :class="['type-badge', formData.type]">
                        <i :class="getTypeIcon(formData.type)"></i>
                        {{ formatType(formData.type) || 'ເລືອກປະເພດ' }}
                      </span>
                    </div>
                    
                    <div v-if="formData.value" class="preview-value">
                      <i class="fas fa-coins"></i>
                      <span class="value-amount">{{ formatCurrency(formData.value, formData.currency) }}</span>
                    </div>
                    
                    <div v-if="formData.description" class="preview-description">
                      <i class="fas fa-file-text"></i>
                      <span>{{ truncateText(formData.description, 100) }}</span>
                    </div>
                    
                    <div v-if="selectedJobTitle" class="preview-job">
                      <i class="fas fa-briefcase"></i>
                      <span>{{ selectedJobTitle }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Validation Errors -->
          <div v-if="formErrors.length > 0" class="form-errors">
            <h6>
              <i class="fas fa-exclamation-circle"></i>
              ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດຕໍ່ໄປນີ້:
            </h6>
            <ul>
              <li v-for="error in formErrors" :key="error">{{ error }}</li>
            </ul>
          </div>
        </div>

        <div class="modal-footer enhanced-footer">
          <button
            type="button"
            @click="closeDialog"
            class="btn btn-secondary"
            :disabled="loading"
          >
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="loading || !isFormValid"
          >
            <i v-if="loading" class="fas fa-spinner fa-spin"></i>
            <i
              v-else
              class="fas"
              :class="isEditMode ? 'fa-save' : 'fa-plus'"
            ></i>
            {{ loading ? 'Saving...' : isEditMode ? 'ອັບເດດ' : 'ສ້າງສະຫວັດດີການ' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    benefit: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      loading: false,
      availableJobs: [], // This would be fetched from API
      formData: {
        name: '',
        type: '',
        description: '',
        value: null,
        currency: 'LAK',
        isActive: true,
        notes: '',
        jobAdvertiseId: null,
      },
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    isEditMode() {
      return this.benefit && this.benefit.id
    },

    user() {
      return this.$auth.user || ''
    },

    // Form validation
    isFormValid() {
      return (
        this.formData.name.trim() &&
        this.formData.type &&
        this.formErrors.length === 0
      )
    },

    selectedJobTitle() {
      if (!this.formData.jobAdvertiseId) return null
      const job = this.availableJobs.find(j => j.id == this.formData.jobAdvertiseId)
      return job ? `${job.title} - ${job.country}` : null
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm()
        this.fetchAvailableJobs()
      } else {
        this.resetForm()
      }
    },

    benefit: {
      handler(newVal, oldVal) {
        if (this.visible && newVal !== oldVal) {
          this.$nextTick(() => {
            this.initializeForm()
          })
        }
      },
      deep: true,
    },
  },

  methods: {
    initializeForm() {
      if (this.benefit && this.benefit.id) {
        // Edit mode
        this.formData = {
          name: this.benefit.name || '',
          type: this.benefit.type || '',
          description: this.benefit.description || '',
          value: this.benefit.value || null,
          currency: this.benefit.currency || 'LAK',
          isActive: this.benefit.isActive !== undefined ? this.benefit.isActive : true,
          notes: this.benefit.notes || '',
          jobAdvertiseId: this.benefit.jobAdvertiseId || null,
        }
      } else {
        // Create mode - set defaults
        this.formData = {
          name: '',
          type: '',
          description: '',
          value: null,
          currency: 'LAK',
          isActive: true,
          notes: '',
          jobAdvertiseId: null,
        }
      }

      this.errors = {}
      this.formErrors = []
    },

    resetForm() {
      this.formData = {
        name: '',
        type: '',
        description: '',
        value: null,
        currency: 'LAK',
        isActive: true,
        notes: '',
        jobAdvertiseId: null,
      }
      this.errors = {}
      this.formErrors = []
      this.loading = false
    },

    async fetchAvailableJobs() {
      try {
        const { data } = await this.$axios.get('/api/job-advertises', {
          params: { status: 'active', limit: 100 }
        })
        
        if (data && data.success) {
          this.availableJobs = data.data || []
        }
      } catch (error) {
        console.error('Error fetching job advertisements:', error)
        this.availableJobs = []
      }
    },

    validateForm() {
      this.errors = {}
      this.formErrors = []

      // Required fields validation
      if (!this.formData.name.trim()) {
        this.errors.name = 'ກະລຸນາໃສ່ຊື່ສະຫວັດດີການ'
        this.formErrors.push('Benefit name is required')
      }

      if (!this.formData.type) {
        this.errors.type = 'ກະລຸນາເລືອກປະເພດສະຫວັດດີການ'
        this.formErrors.push('Benefit type selection is required')
      }

      // Value validation
      if (this.formData.value !== null && this.formData.value !== undefined) {
        if (this.formData.value < 0) {
          this.errors.value = 'ມູນຄ່າຕ້ອງເປັນຈຳນວນບວກ'
          this.formErrors.push('Value must be a positive number')
        }
        if (this.formData.value > 999999999.99) {
          this.errors.value = 'ມູນຄ່າສູງເກີນໄປ'
          this.formErrors.push('Value is too large')
        }
      }

      // Text length validation
      if (this.formData.description && this.formData.description.length > 1000) {
        this.formErrors.push('Description must not exceed 1000 characters')
      }

      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters')
      }

      return this.formErrors.length === 0
    },

    async saveBenefit() {
      if (!this.validateForm()) {
        return
      }

      this.loading = true

      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          // Convert empty strings to null for optional fields
          value: this.formData.value || null,
          jobAdvertiseId: this.formData.jobAdvertiseId || null,
        }

        console.log('📤 Submitting benefit data:', submitData)

        // Emit save event to parent
        this.$emit('save', submitData)
      } catch (error) {
        console.error('Form submission error:', error)
        this.formErrors.push('An error occurred while saving. Please try again.')
      } finally {
        this.loading = false
      }
    },

    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    // Utility methods
    formatType(type) {
      const typeLabels = {
        salary: 'ເງິນເດືອນ',
        allowance: 'ເງິນອຸດໜູນ',
        insurance: 'ປະກັນໄພ',
        accommodation: 'ທີ່ພັກ',
        transportation: 'ການເດີນທາງ',
        other: 'ອື່ນໆ',
      }
      return typeLabels[type] || type
    },

    getTypeIcon(type) {
      const typeIcons = {
        salary: 'fas fa-money-bill-wave',
        allowance: 'fas fa-hand-holding-usd',
        insurance: 'fas fa-shield-alt',
        accommodation: 'fas fa-home',
        transportation: 'fas fa-bus',
        other: 'fas fa-ellipsis-h',
      }
      return typeIcons[type] || 'fas fa-gift'
    },

    getTypeDescription(type) {
      const descriptions = {
        salary: 'ເງິນເດືອນປົກກະຕິ ຫຼື ເງິນພື້ນຖານ',
        allowance: 'ເງິນອຸດໜູນພິເສດ ເຊັ່ນ: ເງິນອາຫານ, ເງິນເດີນທາງ',
        insurance: 'ປະກັນສຸຂະພາບ, ປະກັນອຸບັດເຫດ',
        accommodation: 'ທີ່ພັກ, ຫ້ອງພັກ, ຄ່າເຊົ່າ',
        transportation: 'ຄ່າເດີນທາງ, ລົດຮັບສົ່ງ',
        other: 'ສະຫວັດດີການອື່ນໆ ທີ່ບໍ່ຢູ່ໃນປະເພດຂ້າງເທິງ',
      }
      return descriptions[type] || 'ເລືອກປະເພດເພື່ອເບິ່ງຄຳອະທິບາຍ'
    },

    formatCurrency(value, currency = 'LAK') {
      if (!value) return '-'
      
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
      
      try {
        return formatter.format(value)
      } catch (e) {
        return `${Number(value).toLocaleString()} ${currency}`
      }
    },

    truncateText(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    },
  },
}
</script>

<style scoped>
/* Enhanced Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.enhanced-dialog {
  background: white;
  border-radius: 12px;
  max-width: 900px;
  width: 95%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e9ecef;
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: white;
}

.modal-title-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.modal-icon {
  font-size: 20px;
  opacity: 0.9;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s;
  padding: 8px;
  border-radius: 4px;
}

.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

.modal-body {
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

/* Section Headers */
.section-header {
  margin: 24px 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid #e9ecef;
}

.section-header h4 {
  margin: 0;
  color: #495057;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-header i {
  color: #8b5cf6;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.form-label.required::after {
  content: '*';
  color: #e74c3c;
  margin-left: 4px;
}

.form-label i {
  color: #6b7280;
  font-size: 12px;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.2s ease;
  background: #fafafa;
  box-sizing: border-box;
}

.form-control:focus {
  outline: none;
  border-color: #8b5cf6;
  background: white;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.form-control.is-invalid {
  border-color: #e74c3c;
}

.invalid-feedback {
  display: block;
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
}

/* Custom Select */
.custom-select-wrapper {
  position: relative;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 40px;
}

.select-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6b7280;
}

/* Checkbox Options */
.checkbox-group {
  margin-top: 8px;
}

.checkbox-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
}

.checkbox-option input[type='checkbox'] {
  margin: 0;
  width: 18px;
  height: 18px;
}

.checkbox-label {
  font-weight: 500;
}

/* Field Hints */
.field-hint {
  margin-top: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.field-hint.error {
  color: #e74c3c;
}

.field-hint.warning {
  color: #f39c12;
}

.field-hint.info {
  color: #3b82f6;
}

.field-hint.success {
  color: #28a745;
}

.text-counter {
  color: #9ca3af;
  font-size: 11px;
  margin-left: auto;
}

/* Benefit Preview */
.benefit-preview {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-top: 16px;
}

.benefit-preview h5 {
  margin: 0 0 16px 0;
  color: #1e293b;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.benefit-preview h5 i {
  color: #3b82f6;
}

.preview-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.preview-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #374151;
}

.preview-name strong {
  color: #111827;
}

.preview-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.preview-type,
.preview-value,
.preview-description,
.preview-job {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
}

.preview-value .value-amount {
  color: #059669;
  font-weight: 600;
}

/* Type Badge */
.type-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.type-badge.salary {
  background-color: #dcfce7;
  color: #16a34a;
}

.type-badge.allowance {
  background-color: #dbeafe;
  color: #2563eb;
}

.type-badge.insurance {
  background-color: #f3e8ff;
  color: #9333ea;
}

.type-badge.accommodation {
  background-color: #fef3c7;
  color: #d97706;
}

.type-badge.transportation {
  background-color: #e0f2fe;
  color: #0891b2;
}

.type-badge.other {
  background-color: #f1f5f9;
  color: #64748b;
}

/* Status Badge */
.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.status-badge.active {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.inactive {
  background-color: #fee2e2;
  color: #dc2626;
}

/* Form Errors */
.form-errors {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
}

.form-errors h6 {
  margin: 0 0 10px 0;
  color: #dc2626;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.form-errors ul {
  margin: 0;
  padding-left: 20px;
  color: #dc2626;
  font-size: 13px;
}

/* Modal Footer */
.enhanced-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Buttons */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-size: 14px;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.fa-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-dialog {
    width: 98%;
    margin: 10px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .preview-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .modal-header {
    padding: 16px;
  }

  .modal-body {
    padding: 16px;
  }

  .enhanced-footer {
    padding: 16px;
    flex-direction: column-reverse;
  }

  .enhanced-footer .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>