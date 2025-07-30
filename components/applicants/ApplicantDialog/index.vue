<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog enhanced-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-user-plus modal-icon"></i>
          <h5 class="modal-title">
            {{ isEditMode ? 'ແກ້ໄຂຂໍ້ມູນຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກໃໝ່' }}
          </h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="saveApplicant">
        <div class="modal-body">
          <div class="form-grid">
            <!-- Personal Information Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-user"></i>
                ຂໍ້ມູນສ່ວນຕົວ
              </h4>
            </div>

            <!-- First Name -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-user"></i>
                ຊື່
              </label>
              <input
                v-model="formData.firstName"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.firstName }"
                placeholder="ຊື່ຕົວຈິງ"
                required
              />
              <div v-if="errors.firstName" class="invalid-feedback">
                {{ errors.firstName }}
              </div>
            </div>

            <!-- Last Name -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-user"></i>
                ນາມສະກຸນ
              </label>
              <input
                v-model="formData.lastName"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.lastName }"
                placeholder="ນາມສະກຸນ"
                required
              />
              <div v-if="errors.lastName" class="invalid-feedback">
                {{ errors.lastName }}
              </div>
            </div>

            <!-- Gender -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-venus-mars"></i>
                ເພດ
              </label>
              <div class="gender-options">
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="formData.gender"
                    value="male"
                    required
                  />
                  <span class="radio-label">ຊາຍ</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    v-model="formData.gender"
                    value="female"
                    required
                  />
                  <span class="radio-label">ຍິງ</span>
                </label>
              </div>
              <div v-if="errors.gender" class="invalid-feedback">
                {{ errors.gender }}
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ໂຄຕ້າ: ຊາຍ 30 ຄົນ, ຍິງ 70 ຄົນ
              </div>
            </div>

            <!-- Date of Birth -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-calendar"></i>
                ວັນເດືອນປີເກີດ
              </label>
              <input
                v-model="formData.dateOfBirth"
                type="date"
                class="form-control"
                :class="{ 'is-invalid': errors.dateOfBirth }"
                :max="maxBirthDate"
                :min="minBirthDate"
                required
              />
              <div v-if="errors.dateOfBirth" class="invalid-feedback">
                {{ errors.dateOfBirth }}
              </div>
              <div v-if="formData.dateOfBirth" class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ອາຍຸ: {{ calculatedAge }} ປີ
                {{ calculatedAge >= 18 && calculatedAge <= 32 ? '✓ ອາຍຸເໝາະສົມ' : '⚠️ ອາຍຸບໍ່ຖືກຕ້ອງ (18-32 ປີ)' }}
              </div>
            </div>

            <!-- Contact Information Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-address-book"></i>
                ຂໍ້ມູນການຕິດຕໍ່
              </h4>
            </div>

            <!-- Phone -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-phone"></i>
                ເບີໂທລະສັບ
              </label>
              <input
                v-model="formData.phone"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors.phone }"
                placeholder="+856 20 12345678"
                required
              />
              <div v-if="errors.phone" class="invalid-feedback">
                {{ errors.phone }}
              </div>
            </div>

            <!-- Email -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-envelope"></i>
                ອີເມວ
              </label>
              <input
                v-model="formData.email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
                placeholder="example@email.com"
              />
              <div v-if="errors.email" class="invalid-feedback">
                {{ errors.email }}
              </div>
            </div>

            <!-- Address -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-map-marker-alt"></i>
                ທີ່ຢູ່
              </label>
              <textarea
                v-model="formData.address"
                class="form-control"
                rows="2"
                placeholder="ບ້ານ, ເມືອງ, ແຂວງ..."
              ></textarea>
            </div>

            <!-- Requirements Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-clipboard-check"></i>
                ເງື່ອນໄຂຄຸນສົມບັດ
              </h4>
            </div>

            <!-- Passport -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-passport"></i>
                ມີໜັງສືເດີນທາງ
              </label>
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.hasPassport"
                  />
                  <span class="checkbox-label">ມີໜັງສືເດີນທາງ</span>
                </label>
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ຈຳເປັນຕ້ອງມີໜັງສືເດີນທາງ
              </div>
            </div>

            <!-- Health Status -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-heartbeat"></i>
                ສະຖານະສຸຂະພາບ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.healthStatus"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.healthStatus }"
                  required
                >
                  <option value="">ເລືອກສະຖານະສຸຂະພາບ</option>
                  <option value="good">ດີ</option>
                  <option value="fair">ປານກາງ</option>
                  <option value="poor">ບໍ່ດີ</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.healthStatus" class="invalid-feedback">
                {{ errors.healthStatus }}
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ສຸຂະພາບແຂງແຮງ ບໍ່ຕຸຍເກີນໄປ
              </div>
            </div>

            <!-- Eyesight -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-eye"></i>
                ສາຍຕາ
              </label>
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.eyesightGood"
                  />
                  <span class="checkbox-label">ສາຍຕາດີ</span>
                </label>
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ຈະມີການກວດສາຍຕາກ່ອນ
              </div>
            </div>

            <!-- Chinese Language Level -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-language"></i>
                ລະດັບພາສາຈີນ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.chineseLanguageLevel"
                  class="form-control custom-select"
                >
                  <option value="none">ບໍ່ມີ</option>
                  <option value="basic">ພື້ນຖານ</option>
                  <option value="intermediate">ປານກາງ</option>
                  <option value="advanced">ສູງ</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div class="field-hint success">
                <i class="fas fa-star"></i>
                ຖ້າສາມາດສື່ສານພາສາຈີນໄດ້ພິຈາລະນາພິເສດ
              </div>
            </div>

            <!-- Tattoos -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-paint-brush"></i>
                ລາຍສັກ
              </label>
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.hasVisibleTattoos"
                  />
                  <span class="checkbox-label">ມີລາຍສັກນອກເສື້ອຜ້າ</span>
                </label>
              </div>
              <div class="field-hint warning">
                <i class="fas fa-exclamation-triangle"></i>
                ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ
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
                placeholder="ລາຍລະອຽດເພີ່ມເຕີມ..."
                maxlength="500"
              ></textarea>
              <div class="field-hint">
                <span class="text-counter">{{ formData.notes?.length || 0 }}/500</span>
              </div>
            </div>

            <!-- Eligibility Summary -->
            <div class="form-group full-width">
              <div class="eligibility-summary">
                <h5>
                  <i class="fas fa-clipboard-check"></i>
                  ສະຫລຸບຄຸນສົມບັດ
                </h5>
                <div class="eligibility-items">
                  <div class="eligibility-item" :class="{ 'valid': isAgeValid }">
                    <i :class="isAgeValid ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ອາຍຸ 18-32 ປີ</span>
                  </div>
                  <div class="eligibility-item" :class="{ 'valid': formData.hasPassport }">
                    <i :class="formData.hasPassport ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ມີໜັງສືເດີນທາງ</span>
                  </div>
                  <div class="eligibility-item" :class="{ 'valid': formData.healthStatus === 'good' }">
                    <i :class="formData.healthStatus === 'good' ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ສຸຂະພາບດີ</span>
                  </div>
                  <div class="eligibility-item" :class="{ 'valid': formData.eyesightGood }">
                    <i :class="formData.eyesightGood ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ສາຍຕາດີ</span>
                  </div>
                  <div class="eligibility-item" :class="{ 'valid': !formData.hasVisibleTattoos }">
                    <i :class="!formData.hasVisibleTattoos ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ບໍ່ມີລາຍສັກນອກເສື້ອຜ້າ</span>
                  </div>
                  <div v-if="hasChineseLanguageBonus" class="eligibility-item bonus">
                    <i class="fas fa-star"></i>
                    <span>ໂບນັສພາສາຈີນ</span>
                  </div>
                </div>
                <div class="eligibility-result" :class="{ 'eligible': isEligible }">
                  <i :class="isEligible ? 'fas fa-thumbs-up' : 'fas fa-thumbs-down'"></i>
                  {{ isEligible ? 'ມີຄຸນສົມບັດເໝາະສົມ' : 'ຍັງບໍ່ມີຄຸນສົມບັດຄົບຖ້ວນ' }}
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
            {{ loading ? 'Saving...' : isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicantDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    applicant: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      loading: false,
      formData: {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        hasPassport: false,
        healthStatus: 'good',
        eyesightGood: true,
        chineseLanguageLevel: 'none',
        hasVisibleTattoos: false,
        notes: '',
      },
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    isEditMode() {
      return this.applicant && this.applicant.id
    },

    user() {
      return this.$auth.user || ''
    },

    // Age validation
    calculatedAge() {
      if (!this.formData.dateOfBirth) return 0
      const today = new Date()
      const birthDate = new Date(this.formData.dateOfBirth)
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },

    isAgeValid() {
      return this.calculatedAge >= 18 && this.calculatedAge <= 32
    },

    // Date range for age validation
    maxBirthDate() {
      // 18 years ago
      const date = new Date()
      date.setFullYear(date.getFullYear() - 18)
      return date.toISOString().split('T')[0]
    },

    minBirthDate() {
      // 32 years ago
      const date = new Date()
      date.setFullYear(date.getFullYear() - 32)
      return date.toISOString().split('T')[0]
    },

    // Eligibility checks
    hasChineseLanguageBonus() {
      return this.formData.chineseLanguageLevel && 
             !['none', 'basic'].includes(this.formData.chineseLanguageLevel)
    },

    isEligible() {
      return (
        this.isAgeValid &&
        this.formData.hasPassport &&
        this.formData.healthStatus === 'good' &&
        this.formData.eyesightGood &&
        !this.formData.hasVisibleTattoos
      )
    },

    // Form validation
    isFormValid() {
      return (
        this.formData.firstName.trim() &&
        this.formData.lastName.trim() &&
        this.formData.gender &&
        this.formData.dateOfBirth &&
        this.isAgeValid &&
        this.formData.phone.trim() &&
        this.formData.healthStatus &&
        this.formErrors.length === 0
      )
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
      if (this.applicant && this.applicant.id) {
        // Edit mode
        this.formData = {
          firstName: this.applicant.firstName || '',
          lastName: this.applicant.lastName || '',
          gender: this.applicant.gender || '',
          dateOfBirth: this.applicant.dateOfBirth 
            ? this.applicant.dateOfBirth.split('T')[0] 
            : '',
          phone: this.applicant.phone || '',
          email: this.applicant.email || '',
          address: this.applicant.address || '',
          hasPassport: this.applicant.hasPassport || false,
          healthStatus: this.applicant.healthStatus || 'good',
          eyesightGood: this.applicant.eyesightGood || false,
          chineseLanguageLevel: this.applicant.chineseLanguageLevel || 'none',
          hasVisibleTattoos: this.applicant.hasVisibleTattoos || false,
          notes: this.applicant.notes || '',
        }
      } else {
        // Create mode - set defaults
        this.formData = {
          firstName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          phone: '',
          email: '',
          address: '',
          hasPassport: false,
          healthStatus: 'good',
          eyesightGood: true,
          chineseLanguageLevel: 'none',
          hasVisibleTattoos: false,
          notes: '',
        }
      }

      this.errors = {}
      this.formErrors = []
    },

    resetForm() {
      this.formData = {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        address: '',
        hasPassport: false,
        healthStatus: 'good',
        eyesightGood: true,
        chineseLanguageLevel: 'none',
        hasVisibleTattoos: false,
        notes: '',
      }
      this.errors = {}
      this.formErrors = []
      this.loading = false
    },

    validateForm() {
      this.errors = {}
      this.formErrors = []

      // Required fields validation
      if (!this.formData.firstName.trim()) {
        this.errors.firstName = 'ກະລຸນາໃສ່ຊື່'
        this.formErrors.push('First name is required')
      }

      if (!this.formData.lastName.trim()) {
        this.errors.lastName = 'ກະລຸນາໃສ່ນາມສະກຸນ'
        this.formErrors.push('Last name is required')
      }

      if (!this.formData.gender) {
        this.errors.gender = 'ກະລຸນາເລືອກເພດ'
        this.formErrors.push('Gender selection is required')
      }

      if (!this.formData.dateOfBirth) {
        this.errors.dateOfBirth = 'ກະລຸນາເລືອກວັນເກີດ'
        this.formErrors.push('Date of birth is required')
      } else if (!this.isAgeValid) {
        this.errors.dateOfBirth = 'ອາຍຸຕ້ອງຢູ່ລະຫວ່າງ 18-32 ປີ'
        this.formErrors.push('Age must be between 18-32 years')
      }

      if (!this.formData.phone.trim()) {
        this.errors.phone = 'ກະລຸນາໃສ່ເບີໂທລະສັບ'
        this.formErrors.push('Phone number is required')
      }

      if (this.formData.email && !this.isValidEmail(this.formData.email)) {
        this.errors.email = 'ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ'
        this.formErrors.push('Invalid email format')
      }

      if (!this.formData.healthStatus) {
        this.errors.healthStatus = 'ກະລຸນາເລືອກສະຖານະສຸຂະພາບ'
        this.formErrors.push('Health status is required')
      }

      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters')
      }

      return this.formErrors.length === 0
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },

    async saveApplicant() {
      if (!this.validateForm()) {
        return
      }

      this.loading = true

      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
          applicationDate: this.isEditMode ? 
            this.applicant.applicationDate : 
            new Date().toISOString().split('T')[0],
        }

        console.log('📤 Submitting applicant data:', submitData)

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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  color: #667eea;
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

/* Radio and Checkbox Options */
.gender-options {
  display: flex;
  gap: 20px;
  margin-top: 8px;
}

.radio-option, .checkbox-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
}

.radio-option input[type='radio'],
.checkbox-option input[type='checkbox'] {
  margin: 0;
}

.radio-label, .checkbox-label {
  font-weight: 500;
}

.checkbox-group {
  margin-top: 8px;
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

/* Eligibility Summary */
.eligibility-summary {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-top: 16px;
}

.eligibility-summary h5 {
  margin: 0 0 16px 0;
  color: #1e293b;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.eligibility-summary h5 i {
  color: #3b82f6;
}

.eligibility-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.eligibility-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e2e8f0;
  font-size: 13px;
  color: #64748b;
  transition: all 0.2s ease;
}

.eligibility-item.valid {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
  color: #15803d;
}

.eligibility-item.valid i {
  color: #22c55e;
}

.eligibility-item:not(.valid) i {
  color: #ef4444;
}

.eligibility-item.bonus {
  background: rgba(251, 191, 36, 0.1);
  border-color: #fbbf24;
  color: #d97706;
}

.eligibility-item.bonus i {
  color: #fbbf24;
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

.eligibility-result i {
  font-size: 16px;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

  .gender-options {
    flex-direction: column;
    gap: 12px;
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