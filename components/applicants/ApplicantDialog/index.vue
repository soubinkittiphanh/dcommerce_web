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
            <!-- Basic Identification Section -->
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
            </div>

            <!-- Age -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar"></i>
                ອາຍຸ
              </label>
              <input
                v-model.number="formData.age"
                type="number"
                class="form-control"
                :class="{ 'is-invalid': errors.age }"
                min="18"
                max="32"
                placeholder="ອາຍຸ"
              />
              <div v-if="errors.age" class="invalid-feedback">
                {{ errors.age }}
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ອາຍຸທີ່ເໝາະສົມ: 18-32 ປີ
              </div>
            </div>

            <!-- Marital Status -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-heart"></i>
                ສະຖານະການແຕ່ງງານ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.maritalStatus"
                  class="form-control custom-select"
                >
                  <option value="">ເລືອກສະຖານະ</option>
                  <option value="single">ໂສດ</option>
                  <option value="married">ແຕ່ງງານ</option>
                  <option value="divorced">ຢ່າຮ້າງ</option>
                  <option value="widowed">ເປັນເມ່າຍ</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
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

            <!-- Emergency Contact -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-exclamation-triangle"></i>
                ເບີໂທສຸກເສີນ
              </label>
              <input
                v-model="formData.emergencyContactNo"
                type="tel"
                class="form-control"
                placeholder="+856 20 87654321"
              />
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ເບີໂທຄອບຄົວ ຫຼື ຄົນໃກ້ຊິດ
              </div>
            </div>

            <!-- Address Information Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-map-marker-alt"></i>
                ຂໍ້ມູນທີ່ຢູ່
              </h4>
            </div>

            <!-- Address -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-home"></i>
                ທີ່ຢູ່ລະອຽດ
              </label>
              <textarea
                v-model="formData.address"
                class="form-control"
                rows="2"
                placeholder="ທີ່ຢູ່ລະອຽດ..."
              ></textarea>
            </div>

            <!-- Village -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-home"></i>
                ບ້ານ
              </label>
              <input
                v-model="formData.village"
                type="text"
                class="form-control"
                placeholder="ຊື່ບ້ານ"
              />
            </div>

            <!-- City -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-city"></i>
                ເມືອງ
              </label>
              <input
                v-model="formData.city"
                type="text"
                class="form-control"
                placeholder="ຊື່ເມືອງ"
              />
            </div>

            <!-- District -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-map"></i>
                ແຂວງ
              </label>
              <input
                v-model="formData.district"
                type="text"
                class="form-control"
                placeholder="ຊື່ແຂວງ"
              />
            </div>

            <!-- Passport Information Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-passport"></i>
                ຂໍ້ມູນໜັງສືເດີນທາງ
              </h4>
            </div>

            <!-- Passport Availability -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-passport"></i>
                ມີໜັງສືເດີນທາງ
              </label>
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.passportAvailability"
                  />
                  <span class="checkbox-label">ມີໜັງສືເດີນທາງ</span>
                </label>
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ຈຳເປັນຕ້ອງມີໜັງສືເດີນທາງ
              </div>
            </div>

            <!-- Passport Number -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-id-card"></i>
                ເລກໜັງສືເດີນທາງ
              </label>
              <input
                v-model="formData.passportNo"
                type="text"
                class="form-control"
                :disabled="!formData.passportAvailability"
                placeholder="PA1234567"
              />
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ໃສ່ຖ້າມີໜັງສືເດີນທາງ
              </div>
            </div>

            <!-- Passport Expiry Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-times"></i>
                ວັນໝົດອາຍຸໜັງສືເດີນທາງ
              </label>
              <input
                v-model="formData.passportExpiredDate"
                type="date"
                class="form-control"
                :disabled="!formData.passportAvailability"
                :min="today"
              />
              <div v-if="formData.passportExpiredDate" class="field-hint" :class="isPassportExpired ? 'error' : 'success'">
                <i :class="isPassportExpired ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle'"></i>
                {{ isPassportExpired ? 'ໜັງສືເດີນທາງໝົດອາຍຸແລ້ວ!' : 'ໜັງສືເດີນທາງຍັງໃຊ້ໄດ້' }}
              </div>
            </div>

            <!-- Work Information Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-briefcase"></i>
                ຂໍ້ມູນການເຮັດວຽກ
              </h4>
            </div>

            <!-- Work Place -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-building"></i>
                ສະຖານທີ່ເຮັດວຽກ
              </label>
              <input
                v-model="formData.workPlace"
                type="text"
                class="form-control"
                placeholder="ບໍລິສັດ / ໂຮງງານ"
              />
            </div>

            <!-- Contract Start Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-plus"></i>
                ວັນເລີ່ມສັນຍາ
              </label>
              <input
                v-model="formData.contactStartDate"
                type="date"
                class="form-control"
              />
            </div>

            <!-- Contract End Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-minus"></i>
                ວັນສິ້ນສຸດສັນຍາ
              </label>
              <input
                v-model="formData.contactEndDate"
                type="date"
                class="form-control"
                :min="formData.contactStartDate"
              />
              <div v-if="contractDuration" class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ໄລຍະສັນຍາ: {{ contractDuration }} ເດືອນ
              </div>
            </div>

            <!-- Application Dates Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-calendar-check"></i>
                ວັນທີສຳຄັນ
              </h4>
            </div>

            <!-- Register Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-plus"></i>
                ວັນທີລົງທະບຽນ
              </label>
              <input
                v-model="formData.registertDate"
                type="datetime-local"
                class="form-control"
              />
            </div>

            <!-- Interview Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-comments"></i>
                ວັນທີສໍາພາດ
              </label>
              <input
                v-model="formData.interviewExamDate"
                type="datetime-local"
                class="form-control"
              />
            </div>

            <!-- Photos Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-camera"></i>
                ຮູບຖ່າຍ
              </h4>
            </div>

            <!-- Passport Photo -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-id-badge"></i>
                ຮູບໜັງສືເດີນທາງ
              </label>
              <input
                v-model="formData.passportPhoto"
                type="text"
                class="form-control"
                placeholder="URL ຫຼື path ຂອງຮູບໜັງສືເດີນທາງ"
              />
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ຮູບຖ່າຍຂະໜາດ passport
              </div>
            </div>

            <!-- Applicant Photo -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-user-circle"></i>
                ຮູບຜູ້ສະໝັກ
              </label>
              <input
                v-model="formData.applicantPhoto"
                type="text"
                class="form-control"
                placeholder="URL ຫຼື path ຂອງຮູບຜູ້ສະໝັກ"
              />
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ຮູບຖ່າຍຕົວຈິງຂອງຜູ້ສະໝັກ
              </div>
            </div>

            <!-- Application Summary -->
            <div class="form-group full-width">
              <div class="application-summary">
                <h5>
                  <i class="fas fa-clipboard-check"></i>
                  ສະຫລຸບຂໍ້ມູນ
                </h5>
                <div class="summary-items">
                  <div class="summary-item" :class="{ 'complete': formData.firstName && formData.lastName }">
                    <i :class="formData.firstName && formData.lastName ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ຊື່ ແລະ ນາມສະກຸນ</span>
                  </div>
                  <div class="summary-item" :class="{ 'complete': formData.gender }">
                    <i :class="formData.gender ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ເພດ</span>
                  </div>
                  <div class="summary-item" :class="{ 'complete': formData.phone }">
                    <i :class="formData.phone ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ເບີໂທລະສັບ</span>
                  </div>
                  <div class="summary-item" :class="{ 'complete': formData.passportAvailability }">
                    <i :class="formData.passportAvailability ? 'fas fa-check' : 'fas fa-times'"></i>
                    <span>ໜັງສືເດີນທາງ</span>
                  </div>
                  <div v-if="formData.passportAvailability && formData.passportNo" class="summary-item bonus">
                    <i class="fas fa-star"></i>
                    <span>ລະບຸເລກໜັງສືເດີນທາງ</span>
                  </div>
                  <div v-if="formData.workPlace" class="summary-item bonus">
                    <i class="fas fa-briefcase"></i>
                    <span>ມີສະຖານທີ່ເຮັດວຽກ</span>
                  </div>
                </div>
                <div class="summary-result" :class="{ 'ready': isFormValid }">
                  <i :class="isFormValid ? 'fas fa-thumbs-up' : 'fas fa-exclamation-triangle'"></i>
                  {{ isFormValid ? 'ຂໍ້ມູນພ້ອມສຳລັບບັນທຶກ' : 'ກະລຸນາຕື່ມຂໍ້ມູນຂ້ັນຕຳ' }}
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
            {{ loading ? 'ກຳລັງບັນທຶກ...' : isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ' }}
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
        age: null,
        maritalStatus: '',
        phone: '',
        emergencyContactNo: '',
        address: '',
        village: '',
        city: '',
        district: '',
        passportAvailability: false,
        passportNo: '',
        passportExpiredDate: '',
        workPlace: '',
        contactStartDate: '',
        contactEndDate: '',
        registertDate: '',
        interviewExamDate: '',
        passportPhoto: '',
        applicantPhoto: '',
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

    today() {
      return new Date().toISOString().split('T')[0]
    },

    // Passport expiry validation
    isPassportExpired() {
      if (!this.formData.passportExpiredDate) return false
      const today = new Date()
      const expiryDate = new Date(this.formData.passportExpiredDate)
      return expiryDate <= today
    },

    // Contract duration calculation
    contractDuration() {
      if (!this.formData.contactStartDate || !this.formData.contactEndDate) return null
      
      const startDate = new Date(this.formData.contactStartDate)
      const endDate = new Date(this.formData.contactEndDate)
      
      const diffTime = Math.abs(endDate - startDate)
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))
      
      return diffMonths
    },

    // Form validation
    isFormValid() {
      return (
        this.formData.firstName.trim() &&
        this.formData.lastName.trim() &&
        this.formData.gender &&
        this.formData.phone.trim() &&
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

    // Auto-clear passport fields when availability is false
    'formData.passportAvailability'(newVal) {
      if (!newVal) {
        this.formData.passportNo = ''
        this.formData.passportExpiredDate = ''
        this.formData.passportPhoto = ''
      }
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
          age: this.applicant.age || null,
          maritalStatus: this.applicant.maritalStatus || '',
          phone: this.applicant.phone || '',
          emergencyContactNo: this.applicant.emergencyContactNo || '',
          address: this.applicant.address || '',
          village: this.applicant.village || '',
          city: this.applicant.city || '',
          district: this.applicant.district || '',
          passportAvailability: this.applicant.passportAvailability || false,
          passportNo: this.applicant.passportNo || '',
          passportExpiredDate: this.applicant.passportExpiredDate
            ? this.applicant.passportExpiredDate.split('T')[0]
            : '',
          workPlace: this.applicant.workPlace || '',
          contactStartDate: this.applicant.contactStartDate
            ? this.applicant.contactStartDate.split('T')[0]
            : '',
          contactEndDate: this.applicant.contactEndDate
            ? this.applicant.contactEndDate.split('T')[0]
            : '',
          registertDate: this.applicant.registertDate
            ? this.applicant.registertDate.slice(0, 16)
            : '',
          interviewExamDate: this.applicant.interviewExamDate
            ? this.applicant.interviewExamDate.slice(0, 16)
            : '',
          passportPhoto: this.applicant.passportPhoto || '',
          applicantPhoto: this.applicant.applicantPhoto || '',
        }
      } else {
        // Create mode - set defaults
        this.resetFormData()
      }

      this.errors = {}
      this.formErrors = []
    },

    resetFormData() {
      this.formData = {
        firstName: '',
        lastName: '',
        gender: '',
        age: null,
        maritalStatus: '',
        phone: '',
        emergencyContactNo: '',
        address: '',
        village: '',
        city: '',
        district: '',
        passportAvailability: false,
        passportNo: '',
        passportExpiredDate: '',
        workPlace: '',
        contactStartDate: '',
        contactEndDate: '',
        registertDate: '',
        interviewExamDate: '',
        passportPhoto: '',
        applicantPhoto: '',
      }
    },

    resetForm() {
      this.resetFormData()
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

      if (!this.formData.phone.trim()) {
        this.errors.phone = 'ກະລຸນາໃສ່ເບີໂທລະສັບ'
        this.formErrors.push('Phone number is required')
      }

      // Age validation
      if (this.formData.age && (this.formData.age < 18 || this.formData.age > 32)) {
        this.errors.age = 'ອາຍຸຕ້ອງຢູ່ລະຫວ່າງ 18-32 ປີ'
        this.formErrors.push('Age must be between 18-32 years')
      }

      // Contract date validation
      if (this.formData.contactStartDate && this.formData.contactEndDate) {
        const startDate = new Date(this.formData.contactStartDate)
        const endDate = new Date(this.formData.contactEndDate)
        
        if (endDate <= startDate) {
          this.formErrors.push('Contract end date must be after start date')
        }
      }

      // Passport validation
      if (this.formData.passportAvailability && this.formData.passportExpiredDate) {
        if (this.isPassportExpired) {
          this.formErrors.push('Passport is expired')
        }
      }

      return this.formErrors.length === 0
    },

    async saveApplicant() {
      if (!this.validateForm()) {
        return
      }

      this.loading = true

      try {
        // Prepare data for submission - clean up empty strings and nulls
        const submitData = Object.keys(this.formData).reduce((acc, key) => {
          const value = this.formData[key]
          if (value !== '' && value !== null) {
            acc[key] = value
          }
          return acc
        }, {})

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
  background: linear-gradient(135deg, #01532b 0%, #337555 100%);
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

.form-control:disabled {
  background: #f8f9fa;
  color: #6c757d;
  opacity: 0.7;
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

/* Application Summary */
.application-summary {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-top: 16px;
}

.application-summary h5 {
  margin: 0 0 16px 0;
  color: #1e293b;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.application-summary h5 i {
  color: #3b82f6;
}

.summary-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.summary-item {
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

.summary-item.complete {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
  color: #15803d;
}

.summary-item.complete i {
  color: #22c55e;
}

.summary-item:not(.complete) i {
  color: #ef4444;
}

.summary-item.bonus {
  background: rgba(251, 191, 36, 0.1);
  border-color: #fbbf24;
  color: #d97706;
}

.summary-item.bonus i {
  color: #fbbf24;
}

.summary-result {
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

.summary-result.ready {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
  color: #15803d;
}

.summary-result i {
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
  background: linear-gradient(135deg, #01532b 0%, #337555 100%);
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

  .summary-items {
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