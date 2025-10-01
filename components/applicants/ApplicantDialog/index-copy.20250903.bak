<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div
      class="modal-dialog enhanced-dialog"
      :class="{ 'fullscreen-dialog': fullscreen }"
      @click.stop
    >
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
            <!-- Job Batch Selection - Compact -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-briefcase"></i>
                Job Batch
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.jobBatchId"
                  class="form-control custom-select compact"
                  :class="{ 'is-invalid': errors.jobBatchId }"
                >
                  <option value="">ເລືອກ Job Batch</option>
                  <option 
                    v-for="batch in jobBatches" 
                    :key="batch.id" 
                    :value="batch.id"
                  >
                    {{ batch.batchName }}{{ batch.workPlace ? ` - ${batch.workPlace}` : '' }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.jobBatchId" class="invalid-feedback">
                {{ errors.jobBatchId }}
              </div>
            </div>

            <!-- Status -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-flag"></i>
                ສະຖານະ
              </label>
              <div class="custom-select-wrapper">
                <select v-model="formData.status" class="form-control custom-select compact">
                  <option value="INTERVIEW">ສໍາພາດ</option>
                  <option value="REGISTER">ລົງທະບຽນ</option>
                  <option value="rejected">ປະຕິເສດ</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
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
                class="form-control compact"
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
                class="form-control compact"
                :class="{ 'is-invalid': errors.lastName }"
                placeholder="ນາມສະກຸນ"
                required
              />
              <div v-if="errors.lastName" class="invalid-feedback">
                {{ errors.lastName }}
              </div>
            </div>

            <!-- Phone -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-phone"></i>
                ເບີໂທ
              </label>
              <input
                v-model="formData.phone"
                type="tel"
                class="form-control compact"
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
                ເບີສຸກເສີນ
              </label>
              <input
                v-model="formData.emergencyContactNo"
                type="tel"
                class="form-control compact"
                placeholder="+856 20 87654321"
              />
            </div>

            <!-- Gender -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-venus-mars"></i>
                ເພດ
              </label>
              <div class="gender-options compact">
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
                class="form-control compact"
                :class="{ 'is-invalid': errors.age }"
                min="18"
                max="32"
                placeholder="ອາຍຸ"
              />
              <div v-if="errors.age" class="invalid-feedback">
                {{ errors.age }}
              </div>
            </div>

            <!-- Marital Status -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-heart"></i>
                ສະຖານະ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.maritalStatus"
                  class="form-control custom-select compact"
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

            <!-- Work Place -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-building"></i>
                ສະຖານທີ່ເຮັດວຽກ
              </label>
              <input
                v-model="formData.workPlace"
                type="text"
                class="form-control compact"
                placeholder="ບໍລິສັດ / ໂຮງງານ"
              />
            </div>

            <!-- Address -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-home"></i>
                ທີ່ຢູ່
              </label>
              <textarea
                v-model="formData.address"
                class="form-control compact"
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
                class="form-control compact"
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
                class="form-control compact"
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
                class="form-control compact"
                placeholder="ຊື່ແຂວງ"
              />
            </div>

            <!-- Passport Availability -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-passport"></i>
                ໜັງສືເດີນທາງ
              </label>
              <div class="checkbox-group compact">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.passportAvailability"
                  />
                  <span class="checkbox-label">ມີໜັງສືເດີນທາງ</span>
                </label>
              </div>
            </div>

            <!-- Passport Number -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-id-card"></i>
                ເລກໜັງສື
              </label>
              <input
                v-model="formData.passportNo"
                type="text"
                class="form-control compact"
                :disabled="!formData.passportAvailability"
                placeholder="PA1234567"
              />
            </div>

            <!-- Passport Expiry Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-times"></i>
                ໝົດອາຍຸ
              </label>
              <input
                v-model="formData.passportExpiredDate"
                type="date"
                class="form-control compact"
                :disabled="!formData.passportAvailability"
                :min="today"
              />
              <div
                v-if="formData.passportExpiredDate"
                class="field-hint compact"
                :class="isPassportExpired ? 'error' : 'success'"
              >
                <i
                  :class="
                    isPassportExpired
                      ? 'fas fa-exclamation-triangle'
                      : 'fas fa-check-circle'
                  "
                ></i>
                {{
                  isPassportExpired
                    ? 'ໝົດອາຍຸແລ້ວ!'
                    : 'ຍັງໃຊ້ໄດ້'
                }}
              </div>
            </div>

            <!-- Contract Start Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-plus"></i>
                ເລີ່ມສັນຍາ
              </label>
              <input
                v-model="formData.contactStartDate"
                type="date"
                class="form-control compact"
              />
            </div>

            <!-- Contract End Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-minus"></i>
                ສິ້ນສຸດສັນຍາ
              </label>
              <input
                v-model="formData.contactEndDate"
                type="date"
                class="form-control compact"
                :min="formData.contactStartDate"
              />
            </div>

            <!-- Register Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-plus"></i>
                ລົງທະບຽນ
              </label>
              <input
                v-model="formData.registertDate"
                type="datetime-local"
                class="form-control compact"
              />
            </div>

            <!-- Interview Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-comments"></i>
                ວັນສໍາພາດ
              </label>
              <input
                v-model="formData.interviewExamDate"
                type="datetime-local"
                class="form-control compact"
              />
            </div>

            <!-- Passport Photo -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-id-badge"></i>
                ຮູບໜັງສື
              </label>
              <input
                v-model="formData.passportPhoto"
                type="text"
                class="form-control compact"
                placeholder="URL ຮູບໜັງສືເດີນທາງ"
              />
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
                class="form-control compact"
                placeholder="URL ຮູບຜູ້ສະໝັກ"
              />
            </div>

            <!-- Compact Application Summary -->
            <div class="form-group full-width">
              <div class="application-summary compact">
                <h6>
                  <i class="fas fa-clipboard-check"></i>
                  ສະຫລຸບ
                </h6>
                <div class="summary-items compact">
                  <div
                    class="summary-item compact"
                    :class="{
                      complete: formData.firstName && formData.lastName,
                    }"
                  >
                    <i
                      :class="
                        formData.firstName && formData.lastName
                          ? 'fas fa-check'
                          : 'fas fa-times'
                      "
                    ></i>
                    <span>ຊື່-ນາມສະກຸນ</span>
                  </div>
                  <div
                    class="summary-item compact"
                    :class="{ complete: formData.gender }"
                  >
                    <i
                      :class="formData.gender ? 'fas fa-check' : 'fas fa-times'"
                    ></i>
                    <span>ເພດ</span>
                  </div>
                  <div
                    class="summary-item compact"
                    :class="{ complete: formData.phone }"
                  >
                    <i
                      :class="formData.phone ? 'fas fa-check' : 'fas fa-times'"
                    ></i>
                    <span>ເບີໂທ</span>
                  </div>
                  <div
                    class="summary-item compact"
                    :class="{ complete: formData.passportAvailability }"
                  >
                    <i
                      :class="
                        formData.passportAvailability
                          ? 'fas fa-check'
                          : 'fas fa-times'
                      "
                    ></i>
                    <span>ໜັງສື</span>
                  </div>
                  <div
                    class="summary-item bonus compact"
                    :class="{ complete: formData.jobBatchId }"
                  >
                    <i
                      :class="
                        formData.jobBatchId
                          ? 'fas fa-check'
                          : 'fas fa-layer-group'
                      "
                    ></i>
                    <span>Job Batch</span>
                  </div>
                </div>
                <div class="summary-result compact" :class="{ ready: isFormValid }">
                  <i
                    :class="
                      isFormValid
                        ? 'fas fa-thumbs-up'
                        : 'fas fa-exclamation-triangle'
                    "
                  ></i>
                  {{
                    isFormValid
                      ? 'ພ້ອມບັນທຶກ'
                      : 'ຂໍ້ມູນບໍ່ຄົບ'
                  }}
                </div>
              </div>
            </div>
          </div>

          <!-- Compact Form Validation Errors -->
          <div v-if="formErrors.length > 0" class="form-errors compact">
            <h6>
              <i class="fas fa-exclamation-circle"></i>
              ແກ້ໄຂຂໍ້ຜິດພາດ:
            </h6>
            <ul>
              <li v-for="error in formErrors" :key="error">{{ error }}</li>
            </ul>
          </div>
        </div>

        <div class="modal-footer compact">
          <button
            type="button"
            @click="closeDialog"
            class="btn btn-secondary compact"
            :disabled="loading"
          >
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          <button
            type="submit"
            class="btn btn-primary compact"
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
    visible: Boolean,
    applicant: Object,
    fullscreen: {
      type: Boolean,
      default: false,
    },
    // NEW: Job batches data
    jobBatches: {
      type: Array,
      default: () => []
    }
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
        jobBatchId: null,
        status: 'INTERVIEW' // NEW: Default status
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

    // NEW: Get selected job batch details
    selectedJobBatch() {
      if (!this.formData.jobBatchId || !this.jobBatches.length) return null
      return this.jobBatches.find(batch => batch.id == this.formData.jobBatchId)
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
      if (!this.formData.contactStartDate || !this.formData.contactEndDate)
        return null

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
        this.loadJobBatches() // NEW: Load job batches when dialog opens
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

    // NEW: Auto-populate workplace when job batch changes
    'formData.jobBatchId'(newVal) {
      if (newVal && this.selectedJobBatch && this.selectedJobBatch.workPlace) {
        if (!this.formData.workPlace) {
          this.formData.workPlace = this.selectedJobBatch.workPlace
        }
      }
    },
  },

  methods: {
    // NEW: Load job batches
    async loadJobBatches() {
      // If parent doesn't provide job batches, emit event to request them
      if (!this.jobBatches || this.jobBatches.length === 0) {
        this.$emit('load-job-batches')
      }
    },

    // NEW: Format date for display
    formatDate(dateString) {
      if (!dateString) return ''
      try {
        return new Date(dateString).toLocaleDateString('lo-LA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      } catch (error) {
        return dateString
      }
    },

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
          jobBatchId: this.applicant.jobBatchId || null,
          status: this.applicant.status || 'INTERVIEW'
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
        jobBatchId: null,
        status: 'INTERVIEW'
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

      // NEW: Job batch validation (optional but can be added)
      // if (!this.formData.jobBatchId) {
      //   this.errors.jobBatchId = 'ກະລຸນາເລືອກ Job Batch'
      //   this.formErrors.push('Job batch selection is required')
      // }

      // Age validation
      if (
        this.formData.age &&
        (this.formData.age < 18 || this.formData.age > 32)
      ) {
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
      if (
        this.formData.passportAvailability &&
        this.formData.passportExpiredDate
      ) {
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
        this.formErrors.push(
          'An error occurred while saving. Please try again.'
        )
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
/* Existing styles... */
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
.fullscreen-dialog {
  max-width: 100vw !important;
  max-height: 100vh !important;
  width: 100vw !important;
  height: 100vh !important;
  border-radius: 0 !important;
  margin: 0 !important;
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
  padding: 16px;
  max-height: 75vh;
  overflow-y: auto;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #374151;
  font-size: 12px;
}

.form-label.required::after {
  content: '*';
  color: #e74c3c;
  margin-left: 2px;
}

.form-label i {
  color: #6b7280;
  font-size: 10px;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 13px;
  transition: all 0.2s ease;
  background: #fafafa;
  box-sizing: border-box;
}

.form-control.compact {
  padding: 6px 10px;
  font-size: 12px;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
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
  font-size: 10px;
  margin-top: 2px;
}

/* Compact Custom Select */
.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 30px;
}

.select-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6b7280;
  font-size: 10px;
}

/* Compact Radio and Checkbox Options */
.gender-options.compact {
  display: flex;
  gap: 16px;
  margin-top: 4px;
}

.radio-option,
.checkbox-option {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 12px;
  color: #374151;
}

.radio-option input[type='radio'],
.checkbox-option input[type='checkbox'] {
  margin: 0;
  transform: scale(0.9);
}

.radio-label,
.checkbox-label {
  font-weight: 500;
}

.checkbox-group.compact {
  margin-top: 4px;
}

/* Compact Field Hints */
.field-hint.compact {
  margin-top: 3px;
  font-size: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
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

/* Compact Application Summary */
.application-summary.compact {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px;
  margin-top: 8px;
}

.application-summary.compact h6 {
  margin: 0 0 8px 0;
  color: #1e293b;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.application-summary.compact h6 i {
  color: #3b82f6;
  font-size: 12px;
}

.summary-items.compact {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}

.summary-item.compact {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e2e8f0;
  font-size: 11px;
  color: #64748b;
  transition: all 0.2s ease;
}

.summary-item.compact.complete {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
  color: #15803d;
}

.summary-item.compact.complete i {
  color: #22c55e;
}

.summary-item.compact:not(.complete) i {
  color: #ef4444;
}

.summary-item.compact.bonus {
  background: rgba(251, 191, 36, 0.1);
  border-color: #fbbf24;
  color: #d97706;
}

.summary-item.compact.bonus i {
  color: #fbbf24;
}

.summary-result.compact {
  padding: 8px 12px;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #dc2626;
}

.summary-result.compact.ready {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
  color: #15803d;
}

.summary-result.compact i {
  font-size: 12px;
}

/* Compact Form Errors */
.form-errors.compact {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  padding: 12px;
  margin-top: 12px;
}

.form-errors.compact h6 {
  margin: 0 0 6px 0;
  color: #dc2626;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.form-errors.compact ul {
  margin: 0;
  padding-left: 16px;
  color: #dc2626;
  font-size: 11px;
}

/* Compact Modal Footer */
.modal-footer.compact {
  padding: 12px 16px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* Compact Buttons */
.btn.compact {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  font-size: 12px;
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