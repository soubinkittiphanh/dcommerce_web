<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog status-dialog" @click.stop>
      <div class="modal-header" :class="getHeaderClass()">
        <div class="modal-title-section">
          <i :class="getActionIcon()" class="modal-icon"></i>
          <h5 class="modal-title">
            {{ getActionTitle() }}
          </h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="confirmAction">
        <div class="modal-body">
          <div v-if="jobAdvertise" class="status-update-content">
            <!-- Job Information -->
            <div class="job-info">
              <div class="job-title">
                <i class="fas fa-briefcase"></i>
                <strong>{{ jobAdvertise.title }}</strong>
              </div>
              <div class="job-location">
                <i class="fas fa-map-marker-alt"></i>
                {{ jobAdvertise.country }}{{ jobAdvertise.province ? `, ${jobAdvertise.province}` : '' }}
              </div>
              <div class="current-status">
                <span class="status-label">ສະຖານະປັດຈຸບັນ:</span>
                <span :class="['status-badge', jobAdvertise.status]">
                  <i :class="getCurrentStatusIcon()"></i>
                  {{ formatStatus(jobAdvertise.status) }}
                </span>
              </div>
            </div>

            <!-- Action Description -->
            <div class="action-description" :class="getDescriptionClass()">
              <div class="action-icon">
                <i :class="getActionIcon()"></i>
              </div>
              <div class="action-content">
                <h4>{{ getActionTitle() }}</h4>
                <p>{{ getActionDescription() }}</p>
                <div class="new-status">
                  <span class="status-label">ສະຖານະໃໝ່:</span>
                  <span :class="['status-badge', getNewStatus()]">
                    <i :class="getNewStatusIcon()"></i>
                    {{ formatStatus(getNewStatus()) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Action Specific Content -->
            <div v-if="action === 'pause'" class="action-details pause-details">
              <h5>
                <i class="fas fa-pause-circle"></i>
                ເຫດຜົນການຢຸດຊົ່ວຄາວ
              </h5>
              <div class="reason-options">
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="pauseReason"
                    value="quota_reached"
                  />
                  <span class="radio-label">ຈຳນວນຜູ້ສະໝັກເຕັມແລ້ວ</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="pauseReason"
                    value="review_applications"
                  />
                  <span class="radio-label">ຕ້ອງການທົບທວນຄຳສະໝັກ</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="pauseReason"
                    value="internal_review"
                  />
                  <span class="radio-label">ກວດສອບພາຍໃນ</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="pauseReason"
                    value="other"
                  />
                  <span class="radio-label">ອື່ນໆ</span>
                </label>
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ການຢຸດຊົ່ວຄາວສາມາດເປີດໃໝ່ໄດ້ໃນພາຍຫຼັງ
              </div>
            </div>

            <div v-if="action === 'close'" class="action-details close-details">
              <h5>
                <i class="fas fa-stop-circle"></i>
                ເຫດຜົນການປິດ
              </h5>
              <div class="reason-options">
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="closeReason"
                    value="position_filled"
                  />
                  <span class="radio-label">ຕຳແໜ່ງເຕັມແລ້ວ</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="closeReason"
                    value="deadline_passed"
                  />
                  <span class="radio-label">ໝົດກຳນົດເວລາ</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="closeReason"
                    value="project_cancelled"
                  />
                  <span class="radio-label">ໂຄງການຖືກຍົກເລີກ</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="closeReason"
                    value="other"
                  />
                  <span class="radio-label">ອື່ນໆ</span>
                </label>
              </div>
              <div class="field-hint warning">
                <i class="fas fa-exclamation-triangle"></i>
                ການປິດແລ້ວບໍ່ສາມາດເປີດໃໝ່ໄດ້
              </div>
            </div>

            <div v-if="action === 'activate'" class="action-details activate-details">
              <div class="activation-info">
                <div class="info-item">
                  <i class="fas fa-play-circle"></i>
                  <span>ການປະກາດຈະເປີດຮັບສະໝັກໃໝ່</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-users"></i>
                  <span>ຜູ້ສະໝັກສາມາດສະໝັກໄດ້ທັນທີ</span>
                </div>
                <div class="info-item">
                  <i class="fas fa-eye"></i>
                  <span>ການປະກາດຈະສະແດງໃນລາຍການ</span>
                </div>
              </div>
            </div>

            <!-- Additional Notes -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-sticky-note"></i>
                ໝາຍເຫດເພີ່ມເຕີມ
              </label>
              <textarea
                v-model="notes"
                class="form-control"
                rows="3"
                :placeholder="getNotesPlaceholder()"
                maxlength="300"
              ></textarea>
              <div class="field-hint">
                <span class="text-counter">{{ notes?.length || 0 }}/300</span>
              </div>
            </div>

            <!-- Confirmation Checkbox for Destructive Actions -->
            <div v-if="action === 'close'" class="confirmation-section">
              <div class="checkbox-group">
                <label class="checkbox-option danger">
                  <input
                    type="checkbox"
                    v-model="confirmAction"
                    required
                  />
                  <span class="checkbox-label">
                    ຂ້ອຍເຂົ້າໃຈວ່າການປິດການປະກາດນີ້ບໍ່ສາມາດຍົກເລີກໄດ້
                  </span>
                </label>
              </div>
            </div>

            <!-- Impact Summary -->
            <div class="impact-summary" :class="getImpactClass()">
              <h6>
                <i class="fas fa-chart-line"></i>
                ຜົນກະທົບ
              </h6>
              <div class="impact-items">
                <div class="impact-item">
                  <i class="fas fa-users"></i>
                  <span>ຜູ້ສະໝັກປັດຈຸບັນ: {{ jobAdvertise.applicants?.length || 0 }} ຄົນ</span>
                </div>
                <div class="impact-item">
                  <i class="fas fa-clock"></i>
                  <span>{{ getImpactDescription() }}</span>
                </div>
                <div v-if="jobAdvertise.maxApplicants" class="impact-item">
                  <i class="fas fa-target"></i>
                  <span>ເປົ້າໝາຍ: {{ jobAdvertise.maxApplicants }} ຄົນ</span>
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

        <div class="modal-footer">
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
            :class="['btn', getConfirmButtonClass()]"
            :disabled="loading || !isFormValid"
          >
            <i v-if="loading" class="fas fa-spinner fa-spin"></i>
            <i v-else :class="getActionIcon()"></i>
            {{ loading ? 'ກຳລັງປະມວນຜົນ...' : getConfirmButtonText() }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusUpdateDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    jobAdvertise: {
      type: Object,
      default: null,
    },
    action: {
      type: String,
      default: '', // 'pause', 'activate', 'close'
    },
  },

  data() {
    return {
      loading: false,
      pauseReason: '',
      closeReason: '',
      notes: '',
      confirmAction: false,
      formErrors: [],
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },

    isFormValid() {
      if (this.action === 'pause' && !this.pauseReason) {
        return false
      }
      if (this.action === 'close' && (!this.closeReason || !this.confirmAction)) {
        return false
      }
      return true
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.resetForm()
      }
    },
  },

  methods: {
    resetForm() {
      this.pauseReason = ''
      this.closeReason = ''
      this.notes = ''
      this.confirmAction = false
      this.formErrors = []
      this.loading = false
    },

    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    async confirmAction() {
      if (!this.validateForm()) {
        return
      }

      this.loading = true

      try {
        const statusData = {
          status: this.getNewStatus(),
          reason: this.action === 'pause' ? this.pauseReason : this.closeReason,
          notes: this.notes,
          actionType: this.action,
        }

        console.log('📤 Submitting status update:', statusData)

        this.$emit('confirm', statusData)
      } catch (error) {
        console.error('Status update error:', error)
        this.formErrors.push('เกิดข้อผิดพลาดในการอัปเดตสถานะ')
      } finally {
        this.loading = false
      }
    },

    validateForm() {
      this.formErrors = []

      if (this.action === 'pause' && !this.pauseReason) {
        this.formErrors.push('ກະລຸນາເລືອກເຫດຜົນການຢຸດຊົ່ວຄາວ')
      }

      if (this.action === 'close') {
        if (!this.closeReason) {
          this.formErrors.push('ກະລຸນາເລືອກເຫດຜົນການປິດ')
        }
        if (!this.confirmAction) {
          this.formErrors.push('ກະລຸນາຢືນຢັນການປິດການປະກາດ')
        }
      }

      return this.formErrors.length === 0
    },

    // Status and Action Methods
    getNewStatus() {
      const statusMap = {
        pause: 'inactive',
        activate: 'active',
        close: 'closed',
      }
      return statusMap[this.action] || this.jobAdvertise?.status
    },

    getCurrentStatusIcon() {
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle',
      }
      return icons[this.jobAdvertise?.status] || 'fas fa-question-circle'
    },

    getNewStatusIcon() {
      const icons = {
        active: 'fas fa-play-circle',
        inactive: 'fas fa-pause-circle',
        closed: 'fas fa-stop-circle',
      }
      return icons[this.getNewStatus()] || 'fas fa-question-circle'
    },

    getActionIcon() {
      const icons = {
        pause: 'fas fa-pause-circle',
        activate: 'fas fa-play-circle',
        close: 'fas fa-stop-circle',
      }
      return icons[this.action] || 'fas fa-question-circle'
    },

    getActionTitle() {
      const titles = {
        pause: 'ຢຸດການປະກາດຊົ່ວຄາວ',
        activate: 'ເປີດການປະກາດໃໝ່',
        close: 'ປິດການປະກາດ',
      }
      return titles[this.action] || 'ອັບເດດສະຖານະ'
    },

    getActionDescription() {
      const descriptions = {
        pause: 'ການປະກາດຈະຖືກຢຸດຊົ່ວຄາວ ແລະ ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໄດ້ຊົ່ວຄາວ',
        activate: 'ການປະກາດຈະເປີດຮັບສະໝັກໃໝ່ ແລະ ຜູ້ສະໝັກສາມາດສະໝັກໄດ້',
        close: 'ການປະກາດຈະຖືກປິດຖາວອນ ແລະ ບໍ່ສາມາດເປີດໃໝ່ໄດ້',
      }
      return descriptions[this.action] || ''
    },

    getConfirmButtonText() {
      const texts = {
        pause: 'ຢຸດຊົ່ວຄາວ',
        activate: 'ເປີດໃໝ່',
        close: 'ປິດການປະກາດ',
      }
      return texts[this.action] || 'ອັບເດດ'
    },

    getConfirmButtonClass() {
      const classes = {
        pause: 'btn-warning',
        activate: 'btn-success',
        close: 'btn-danger',
      }
      return classes[this.action] || 'btn-primary'
    },

    getHeaderClass() {
      const classes = {
        pause: 'header-warning',
        activate: 'header-success',
        close: 'header-danger',
      }
      return classes[this.action] || ''
    },

    getDescriptionClass() {
      const classes = {
        pause: 'description-warning',
        activate: 'description-success',
        close: 'description-danger',
      }
      return classes[this.action] || ''
    },

    getImpactClass() {
      const classes = {
        pause: 'impact-warning',
        activate: 'impact-success',
        close: 'impact-danger',
      }
      return classes[this.action] || ''
    },

    getNotesPlaceholder() {
      const placeholders = {
        pause: 'ລາຍລະອຽດເພີ່ມເຕີມກ່ຽວກັບການຢຸດຊົ່ວຄາວ...',
        activate: 'ລາຍລະອຽດການເປີດໃໝ່...',
        close: 'ເຫດຜົນລາຍລະອຽດການປິດການປະກາດ...',
      }
      return placeholders[this.action] || 'ໝາຍເຫດ...'
    },

    getImpactDescription() {
      const descriptions = {
        pause: 'ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໃໝ່ໄດ້ຊົ່ວຄາວ',
        activate: 'ຜູ້ສະໝັກສາມາດສະໝັກໄດ້ທັນທີ',
        close: 'ຜູ້ສະໝັກບໍ່ສາມາດສະໝັກໄດ້ອີກ',
      }
      return descriptions[this.action] || ''
    },

    formatStatus(status) {
      const statusLabels = {
        active: 'ເປີດຮັບສະໝັກ',
        inactive: 'ປິດຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ',
      }
      return statusLabels[status] || status
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

.status-dialog {
  background: white;
  border-radius: 12px;
  max-width: 600px;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.modal-header.header-warning {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.modal-header.header-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.modal-header.header-danger {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
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
  font-size: 18px;
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

/* Job Information */
.job-info {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
}

.job-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #1f2937;
  margin-bottom: 8px;
}

.job-title i {
  color: #667eea;
}

.job-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 12px;
}

.job-location i {
  color: #9ca3af;
}

.current-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.status-label {
  color: #374151;
  font-weight: 500;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 4px;
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

/* Action Description */
.action-description {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 24px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
}

.action-description.description-warning {
  background: #fef3c7;
  border-color: #fbbf24;
}

.action-description.description-success {
  background: #d1fae5;
  border-color: #34d399;
}

.action-description.description-danger {
  background: #fee2e2;
  border-color: #f87171;
}

.action-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.description-warning .action-icon {
  background: #f59e0b;
}

.description-success .action-icon {
  background: #10b981;
}

.description-danger .action-icon {
  background: #ef4444;
}

.action-content h4 {
  margin: 0 0 8px 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
}

.action-content p {
  margin: 0 0 12px 0;
  color: #4b5563;
  font-size: 14px;
  line-height: 1.5;
}

.new-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

/* Action Details */
.action-details {
  margin-bottom: 24px;
  padding: 20px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.action-details h5 {
  margin: 0 0 16px 0;
  color: #374151;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.pause-details h5 i {
  color: #f59e0b;
}

.close-details h5 i {
  color: #ef4444;
}

.reason-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.radio-option:hover {
  background: rgba(0, 0, 0, 0.02);
}

.radio-option input[type='radio'] {
  margin: 0;
}

.radio-label {
  font-weight: 500;
}

.activation-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #374151;
}

.info-item i {
  color: #10b981;
  width: 16px;
}

/* Form Elements */
.form-group {
  margin-bottom: 20px;
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
  resize: vertical;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.field-hint {
  margin-top: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.field-hint.info {
  color: #3b82f6;
}

.field-hint.warning {
  color: #f59e0b;
}

.text-counter {
  color: #9ca3af;
  font-size: 11px;
  margin-left: auto;
}

/* Confirmation Section */
.confirmation-section {
  margin-bottom: 24px;
  padding: 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
}

.checkbox-group {
  margin-top: 8px;
}

.checkbox-option {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
}

.checkbox-option.danger {
  color: #dc2626;
  font-weight: 500;
}

.checkbox-option input[type='checkbox'] {
  margin: 0;
  margin-top: 2px;
}

.checkbox-label {
  line-height: 1.4;
}

/* Impact Summary */
.impact-summary {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
}

.impact-summary.impact-warning {
  background: #fef3c7;
  border-color: #fbbf24;
}

.impact-summary.impact-success {
  background: #d1fae5;
  border-color: #34d399;
}

.impact-summary.impact-danger {
  background: #fee2e2;
  border-color: #f87171;
}

.impact-summary h6 {
  margin: 0 0 12px 0;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.impact-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.impact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #4b5563;
}

.impact-item i {
  color: #6b7280;
  width: 14px;
}

/* Form Errors */
.form-errors {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
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
.modal-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
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

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-warning {
  background: #f59e0b;
  color: white;
}

.btn-success {
  background: #10b981;
  color: white;
}

.btn-danger {
  background: #ef4444;
  color: white;
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
  .status-dialog {
    width: 98%;
    margin: 10px;
  }

  .action-description {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .modal-header {
    padding: 16px;
  }

  .modal-body {
    padding: 16px;
  }

  .modal-footer {
    padding: 16px;
    flex-direction: column-reverse;
  }

  .modal-footer .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>