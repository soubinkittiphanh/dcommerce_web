<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog status-dialog" @click.stop>
      <div class="modal-header" :class="headerClass">
        <div class="modal-title-section">
          <i :class="headerIcon" class="modal-icon"></i>
          <h5 class="modal-title">{{ modalTitle }}</h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="confirmAction">
        <div class="modal-body">
          <div v-if="!applicant" class="empty-state">
            <i class="fas fa-user-slash"></i>
            <p>ບໍ່ພົບຂໍ້ມູນຜູ້ສະໝັກ</p>
          </div>

          <div v-else class="status-update-content">
            <!-- Applicant Summary -->
            <div class="applicant-summary">
              <div class="applicant-info">
                <div class="applicant-avatar">
                  <i class="fas fa-user-circle"></i>
                </div>
                <div class="applicant-details">
                  <h4 class="applicant-name">{{ getFullName() }}</h4>
                  <div class="applicant-meta">
                    <span class="meta-item">
                      <i class="fas fa-venus-mars"></i>
                      {{ formatGender(applicant.gender) }}
                    </span>
                    <span class="meta-item">
                      <i class="fas fa-birthday-cake"></i>
                      {{ calculateAge() }} ປີ
                    </span>
                    <span class="meta-item">
                      <i class="fas fa-phone"></i>
                      {{ applicant.phone }}
                    </span>
                  </div>
                  <div class="current-status">
                    ສະຖານະປັດຈຸບັນ: 
                    <span :class="['status-badge', applicant.status]">
                      {{ formatStatus(applicant.status) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Description -->
            <div class="action-description" :class="actionClass">
              <div class="action-icon">
                <i :class="actionIcon"></i>
              </div>
              <div class="action-content">
                <h5 class="action-title">{{ actionTitle }}</h5>
                <p class="action-message">{{ actionMessage }}</p>
              </div>
            </div>

            <!-- Eligibility Check (for approval) -->
            <div v-if="action === 'approve'" class="eligibility-check">
              <h6 class="eligibility-title">
                <i class="fas fa-clipboard-check"></i>
                ການກວດສອບຄຸນສົມບັດ
              </h6>
              <div class="eligibility-items">
                <div class="eligibility-item" :class="{ 'valid': isAgeValid }">
                  <i :class="isAgeValid ? 'fas fa-check' : 'fas fa-times'"></i>
                  <span>ອາຍຸ 18-32 ປີ ({{ calculateAge() }} ປີ)</span>
                </div>
                <div class="eligibility-item" :class="{ 'valid': applicant.hasPassport }">
                  <i :class="applicant.hasPassport ? 'fas fa-check' : 'fas fa-times'"></i>
                  <span>ມີໜັງສືເດີນທາງ</span>
                </div>
                <div class="eligibility-item" :class="{ 'valid': applicant.healthStatus === 'good' }">
                  <i :class="applicant.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times'"></i>
                  <span>ສຸຂະພາບດີ</span>
                </div>
                <div class="eligibility-item" :class="{ 'valid': applicant.eyesightGood }">
                  <i :class="applicant.eyesightGood ? 'fas fa-check' : 'fas fa-times'"></i>
                  <span>ສາຍຕາດີ</span>
                </div>
                <div class="eligibility-item" :class="{ 'valid': !applicant.hasVisibleTattoos }">
                  <i :class="!applicant.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times'"></i>
                  <span>ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ</span>
                </div>
                <div v-if="hasChineseLanguageBonus" class="eligibility-item bonus">
                  <i class="fas fa-star"></i>
                  <span>ໂບນັສພາສາຈີນ ({{ formatLanguageLevel(applicant.chineseLanguageLevel) }})</span>
                </div>
              </div>
              
              <div class="eligibility-result" :class="{ 'eligible': isEligible }">
                <i :class="isEligible ? 'fas fa-thumbs-up' : 'fas fa-exclamation-triangle'"></i>
                <span v-if="isEligible">
                  ຜູ້ສະໝັກມີຄຸນສົມບັດຄົບຖ້ວນ
                </span>
                <span v-else>
                  ⚠️ ຜູ້ສະໝັກຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ
                </span>
              </div>
            </div>

            <!-- Gender Quota Check (for approval) -->
            <div v-if="action === 'approve'" class="quota-check">
              <h6 class="quota-title">
                <i class="fas fa-users"></i>
                ການກວດສອບໂຄຕ້າ
              </h6>
              <div class="quota-info">
                <div class="quota-item" :class="genderQuotaClass">
                  <div class="quota-icon">
                    <i :class="applicant.gender === 'male' ? 'fas fa-male' : 'fas fa-female'"></i>
                  </div>
                  <div class="quota-content">
                    <div class="quota-text">
                      ໂຄຕ້າ{{ formatGender(applicant.gender) }}: 
                      <span class="quota-numbers">
                        {{ getCurrentGenderCount() }}/{{ getMaxGenderQuota() }}
                      </span>
                    </div>
                    <div class="quota-status" :class="quotaStatusClass">
                      {{ quotaStatusMessage }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Notes Section -->
            <div class="notes-section">
              <label class="form-label" :class="{ 'required': action === 'reject' }">
                <i class="fas fa-sticky-note"></i>
                ໝາຍເຫດ
                <span v-if="action === 'reject'" class="required-note">(ຈຳເປັນສຳລັບການປະຕິເສດ)</span>
              </label>
              <textarea
                v-model="formData.notes"
                class="form-control"
                :class="{ 'is-invalid': errors.notes }"
                rows="4"
                :placeholder="notesPlaceholder"
                maxlength="500"
                :required="action === 'reject'"
              ></textarea>
              <div v-if="errors.notes" class="invalid-feedback">
                {{ errors.notes }}
              </div>
              <div class="field-hint">
                <span class="text-counter">{{ formData.notes?.length || 0 }}/500</span>
              </div>
            </div>

            <!-- Warning for rejection -->
            <div v-if="action === 'reject'" class="warning-section">
              <div class="warning-content">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                  <strong>ຄຳເຕືອນ:</strong> 
                  ການປະຕິເສດຜູ້ສະໝັກບໍ່ສາມາດຍົກເລີກໄດ້. 
                  ກະລຸນາໃສ່ເຫດຜົນທີ່ຊັດເຈນໃນໝາຍເຫດ.
                </div>
              </div>
            </div>

            <!-- Confirmation checkbox for approval -->
            <div v-if="action === 'approve' && !isEligible" class="confirmation-section">
              <label class="confirmation-checkbox">
                <input
                  type="checkbox"
                  v-model="formData.forceApprove"
                  :required="action === 'approve' && !isEligible"
                />
                <span class="checkbox-label">
                  ຂ້ອຍຢືນຢັນວ່າຕ້ອງການອະນຸມັດຜູ້ສະໝັກຄົນນີ້ ເຖິງແມ່ນວ່າຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ
                </span>
              </label>
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
            :class="['btn', confirmButtonClass]"
            :disabled="loading || !isFormValid"
          >
            <i v-if="loading" class="fas fa-spinner fa-spin"></i>
            <i v-else :class="confirmButtonIcon"></i>
            {{ loading ? 'ກຳລັງດຳເນີນການ...' : confirmButtonText }}
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
    applicant: {
      type: Object,
      default: null,
    },
    action: {
      type: String,
      default: '', // 'approve' or 'reject'
    },
  },

  data() {
    return {
      loading: false,
      formData: {
        notes: '',
        forceApprove: false,
      },
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    // Modal styling based on action
    headerClass() {
      return this.action === 'approve' ? 'approve-header' : 'reject-header'
    },

    headerIcon() {
      return this.action === 'approve' ? 'fas fa-check-circle' : 'fas fa-times-circle'
    },

    modalTitle() {
      return this.action === 'approve' ? 'ອະນຸມັດຜູ້ສະໝັກ' : 'ປະຕິເສດຜູ້ສະໝັກ'
    },

    actionClass() {
      return this.action === 'approve' ? 'approve-action' : 'reject-action'
    },

    actionIcon() {
      return this.action === 'approve' ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down'
    },

    actionTitle() {
      return this.action === 'approve' ? 'ອະນຸມັດການສະໝັກ' : 'ປະຕິເສດການສະໝັກ'
    },

    actionMessage() {
      if (this.action === 'approve') {
        return 'ທ່ານກຳລັງຈະອະນຸມັດຜູ້ສະໝັກຄົນນີ້. ກະລຸນາກວດສອບຄຸນສົມບັດກ່ອນດຳເນີນການ.'
      } else {
        return 'ທ່ານກຳລັງຈະປະຕິເສດຜູ້ສະໝັກຄົນນີ້. ການກະທຳນີ້ບໍ່ສາມາດຍົກເລີກໄດ້.'
      }
    },

    notesPlaceholder() {
      if (this.action === 'approve') {
        return 'ໝາຍເຫດສຳລັບການອະນຸມັດ (ທາງເລືອກ)...'
      } else {
        return 'ເຫດຜົນໃນການປະຕິເສດ (ຈຳເປັນ)...'
      }
    },

    confirmButtonClass() {
      return this.action === 'approve' ? 'btn-success' : 'btn-danger'
    },

    confirmButtonIcon() {
      return this.action === 'approve' ? 'fas fa-check' : 'fas fa-times'
    },

    confirmButtonText() {
      return this.action === 'approve' ? 'ອະນຸມັດ' : 'ປະຕິເສດ'
    },

    // Eligibility checks
    isAgeValid() {
      const age = this.calculateAge()
      return age >= 18 && age <= 32
    },

    hasChineseLanguageBonus() {
      return this.applicant && 
             this.applicant.chineseLanguageLevel && 
             !['none', 'basic'].includes(this.applicant.chineseLanguageLevel)
    },

    isEligible() {
      if (!this.applicant) return false
      return (
        this.isAgeValid &&
        this.applicant.hasPassport &&
        this.applicant.healthStatus === 'good' &&
        this.applicant.eyesightGood &&
        !this.applicant.hasVisibleTattoos
      )
    },

    // Gender quota checks
    genderQuotaClass() {
      const currentCount = this.getCurrentGenderCount()
      const maxQuota = this.getMaxGenderQuota()
      return currentCount >= maxQuota ? 'quota-full' : 'quota-available'
    },

    quotaStatusClass() {
      const currentCount = this.getCurrentGenderCount()
      const maxQuota = this.getMaxGenderQuota()
      return currentCount >= maxQuota ? 'quota-exceeded' : 'quota-ok'
    },

    quotaStatusMessage() {
      const currentCount = this.getCurrentGenderCount()
      const maxQuota = this.getMaxGenderQuota()
      
      if (currentCount >= maxQuota) {
        return '⚠️ ໂຄຕ້າເຕັມແລ້ວ'
      } else {
        return `✓ ຍັງມີບ່ອນວ່າງ ${maxQuota - currentCount} ບ່ອນ`
      }
    },

    // Form validation
    isFormValid() {
      if (this.action === 'reject' && !this.formData.notes.trim()) {
        return false
      }
      
      if (this.action === 'approve' && !this.isEligible && !this.formData.forceApprove) {
        return false
      }

      return this.formErrors.length === 0
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm()
      } else {
        this.resetForm()
      }
    },

    applicant: {
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
      this.formData = {
        notes: '',
        forceApprove: false,
      }
      this.errors = {}
      this.formErrors = []
    },

    resetForm() {
      this.formData = {
        notes: '',
        forceApprove: false,
      }
      this.errors = {}
      this.formErrors = []
      this.loading = false
    },

    validateForm() {
      this.errors = {}
      this.formErrors = []

      // Notes validation for rejection
      if (this.action === 'reject' && !this.formData.notes.trim()) {
        this.errors.notes = 'ກະລຸນາໃສ່ເຫດຜົນໃນການປະຕິເສດ'
        this.formErrors.push('Rejection reason is required')
      }

      // Notes length validation
      if (this.formData.notes && this.formData.notes.length > 500) {
        this.errors.notes = 'ໝາຍເຫດບໍ່ຄວນເກີນ 500 ຕົວອັກສອນ'
        this.formErrors.push('Notes must not exceed 500 characters')
      }

      // Force approve validation
      if (this.action === 'approve' && !this.isEligible && !this.formData.forceApprove) {
        this.formErrors.push('Please confirm approval for applicant without full qualifications')
      }

      return this.formErrors.length === 0
    },

    async confirmAction() {
      if (!this.validateForm()) {
        return
      }

      this.loading = true

      try {
        const statusData = {
          status: this.action === 'approve' ? 'approved' : 'rejected',
          notes: this.formData.notes.trim(),
        }

        console.log('📤 Updating status:', statusData)

        // Emit confirm event to parent
        this.$emit('confirm', statusData)
      } catch (error) {
        console.error('Status update error:', error)
        this.formErrors.push('An error occurred while updating status. Please try again.')
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
    getFullName() {
      if (!this.applicant) return ''
      return `${this.applicant.firstName} ${this.applicant.lastName}`
    },

    calculateAge() {
      if (!this.applicant || !this.applicant.dateOfBirth) return 0
      const today = new Date()
      const birthDate = new Date(this.applicant.dateOfBirth)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },

    formatGender(gender) {
      return gender === 'male' ? 'ຊາຍ' : 'ຍິງ'
    },

    formatStatus(status) {
      const statusLabels = {
        pending: 'ລໍຖ້າ',
        approved: 'ອະນຸມັດ',
        rejected: 'ປະຕິເສດ',
      }
      return statusLabels[status] || status
    },

    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ມີ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ',
      }
      return levelLabels[level] || level
    },

    // Mock gender quota methods - replace with actual data
    getCurrentGenderCount() {
      // This should come from props or API call in real implementation
      return this.applicant?.gender === 'male' ? 15 : 45
    },

    getMaxGenderQuota() {
      return this.applicant?.gender === 'male' ? 30 : 70
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

.status-dialog {
  background: white;
  border-radius: 12px;
  max-width: 700px;
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
  color: white;
}

.modal-header.approve-header {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.modal-header.reject-header {
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

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  color: #6b7280;
}

.empty-state i {
  font-size: 48px;
  margin-bottom: 16px;
  color: #d1d5db;
}

.empty-state p {
  font-size: 16px;
  margin: 0;
}

/* Applicant Summary */
.applicant-summary {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.applicant-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.applicant-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  flex-shrink: 0;
}

.applicant-details {
  flex: 1;
}

.applicant-name {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
}

.applicant-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 8px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #64748b;
}

.meta-item i {
  color: #94a3b8;
  width: 12px;
}

.current-status {
  font-size: 14px;
  color: #475569;
  font-weight: 500;
}

/* Action Description */
.action-description {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 2px solid;
}

.action-description.approve-action {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
}

.action-description.reject-action {
  background: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
}

.action-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 16px;
  flex-shrink: 0;
}

.approve-action .action-icon {
  background: rgba(16, 185, 129, 0.2);
  color: #059669;
}

.reject-action .action-icon {
  background: rgba(239, 68, 68, 0.2);
  color: #dc2626;
}

.action-content {
  flex: 1;
}

.action-title {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
}

.action-message {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.4;
}

/* Eligibility Check */
.eligibility-check {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.eligibility-title {
  margin: 0 0 16px 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 6px;
}

.eligibility-title i {
  color: #3b82f6;
}

.eligibility-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.eligibility-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid #fecaca;
  font-size: 13px;
  color: #374151;
}

.eligibility-item.valid {
  background: rgba(34, 197, 94, 0.05);
  border-color: #bbf7d0;
}

.eligibility-item.bonus {
  background: rgba(251, 191, 36, 0.05);
  border-color: #fde68a;
}

.eligibility-item i {
  color: #ef4444;
  width: 16px;
  flex-shrink: 0;
}

.eligibility-item.valid i {
  color: #22c55e;
}

.eligibility-item.bonus i {
  color: #f59e0b;
}

.eligibility-result {
  padding: 12px 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid #ef4444;
  color: #dc2626;
}

.eligibility-result.eligible {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
  color: #15803d;
}

/* Quota Check */
.quota-check {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.quota-title {
  margin: 0 0 16px 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 6px;
}

.quota-title i {
  color: #8b5cf6;
}

.quota-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
  background: rgba(139, 92, 246, 0.05);
  border: 2px solid #ede9fe;
}

.quota-item.quota-full {
  background: rgba(239, 68, 68, 0.05);
  border-color: #fecaca;
}

.quota-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-right: 16px;
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  flex-shrink: 0;
}

.quota-item.quota-full .quota-icon {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.quota-content {
  flex: 1;
}

.quota-text {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 4px;
}

.quota-numbers {
  font-family: monospace;
  color: #8b5cf6;
}

.quota-item.quota-full .quota-numbers {
  color: #dc2626;
}

.quota-status {
  font-size: 12px;
  font-weight: 500;
}

.quota-status.quota-ok {
  color: #059669;
}

.quota-status.quota-exceeded {
  color: #dc2626;
}

/* Notes Section */
.notes-section {
  margin-bottom: 24px;
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

.required-note {
  color: #dc2626;
  font-size: 12px;
  font-weight: normal;
  font-style: italic;
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

.form-control.is-invalid {
  border-color: #e74c3c;
}

.invalid-feedback {
  display: block;
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
}

.field-hint {
  margin-top: 6px;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
}

.text-counter {
  color: #9ca3af;
  font-size: 11px;
}

/* Warning Section */
.warning-section {
  background: rgba(251, 191, 36, 0.1);
  border: 2px solid #fbbf24;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
}

.warning-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #92400e;
}

.warning-content i {
  color: #f59e0b;
  font-size: 18px;
  margin-top: 2px;
  flex-shrink: 0;
}

/* Confirmation Section */
.confirmation-section {
  background: rgba(239, 68, 68, 0.05);
  border: 2px solid #fecaca;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
}

.confirmation-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  line-height: 1.4;
}

.confirmation-checkbox input[type='checkbox'] {
  margin: 0;
  margin-top: 2px;
  flex-shrink: 0;
}

.checkbox-label {
  font-weight: 500;
}

/* Status Badges */
.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.pending {
  background-color: #fef3c7;
  color: #d97706;
}

.status-badge.approved {
  background-color: #d1fae5;
  color: #065f46;
}

.status-badge.rejected {
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
.modal-footer {
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

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.btn-danger {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
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
  .status-dialog {
    width: 98%;
    margin: 10px;
  }

  .applicant-info {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .applicant-meta {
    justify-content: center;
    flex-wrap: wrap;
  }

  .action-description {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }

  .action-icon {
    margin-right: 0;
  }

  .eligibility-items {
    grid-template-columns: 1fr;
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