<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <h5 class="modal-title">
            <i class="fas fa-user-plus"></i>
            {{ isEditMode ? 'ແກ້ໄຂຜູ້ສະໝັກ' : 'ເພີ່ມຜູ້ສະໝັກ' }}
          </h5>
          <button @click="closeDialog" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Compact Stepper -->
        <div class="stepper">
          <div
            class="step"
            :class="{ active: currentStep === 1, completed: currentStep > 1 }"
            @click="goToStep(1)"
          >
            <span class="step-number">{{ currentStep > 1 ? '✓' : '1' }}</span>
            <span class="step-label">ພື້ນຖານ</span>
          </div>
          <div class="step-line" :class="{ completed: currentStep > 1 }"></div>
          <div
            class="step"
            :class="{ active: currentStep === 2, available: step1Valid }"
            @click="step1Valid && goToStep(2)"
          >
            <span class="step-number">2</span>
            <span class="step-label">ລາຍລະອຽດ</span>
          </div>
        </div>

        <form @submit.prevent="saveApplicant">
          <div class="modal-body">
            <!-- Step 1: Basic Info -->
            <div v-show="currentStep === 1">
              <div class="form-grid">
                <div class="form-group">
                  <label>
                    <i class="fas fa-briefcase"></i>
                    Job Batch
                  </label>
                  <select
                    v-model="formData.jobBatchId"
                    :class="{ error: errors.jobBatchId }"
                  >
                    <option value="">ເລືອກ Job Batch</option>
                    <option
                      v-for="batch in jobBatches"
                      :key="batch.id"
                      :value="batch.id"
                    >
                      {{ batch.batchName
                      }}{{ batch.workPlace ? ` - ${batch.workPlace}` : '' }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="required">
                    <i class="fas fa-user"></i>
                    ຊື່
                  </label>
                  <input
                    v-model="formData.firstName"
                    type="text"
                    placeholder="ຊື່ຕົວຈິງ"
                    :class="{ error: errors.firstName }"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="required">
                    <i class="fas fa-user"></i>
                    ນາມສະກຸນ
                  </label>
                  <input
                    v-model="formData.lastName"
                    type="text"
                    placeholder="ນາມສະກຸນ"
                    :class="{ error: errors.lastName }"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="required">
                    <i class="fas fa-venus-mars"></i>
                    ເພດ
                  </label>
                  <div class="radio-group">
                    <label
                      ><input
                        type="radio"
                        v-model="formData.gender"
                        value="male"
                        required
                      />
                      ຊາຍ</label
                    >
                    <label
                      ><input
                        type="radio"
                        v-model="formData.gender"
                        value="female"
                        required
                      />
                      ຍິງ</label
                    >
                  </div>
                </div>

                <div class="form-group">
                  <label>
                    <i class="fas fa-calendar"></i>
                    ອາຍຸ
                  </label>
                  <input
                    v-model.number="formData.age"
                    type="number"
                    min="18"
                    max="32"
                    placeholder="ອາຍຸ"
                  />
                </div>

                <div class="form-group full-width">
                  <label>
                    <i class="fas fa-home"></i>
                    ທີ່ຢູ່
                  </label>
                  <textarea
                    v-model="formData.address"
                    rows="2"
                    placeholder="ທີ່ຢູ່ລະອຽດ..."
                  ></textarea>
                </div>

                <div class="form-group">
                  <label>
                    <i class="fas fa-passport"></i>
                    <input
                      type="checkbox"
                      v-model="formData.passportAvailability"
                    />
                    ມີໜັງສືເດີນທາງ
                  </label>
                </div>

                <!-- Compact Photo Upload -->
                <div class="form-group">
                  <label>
                    <i class="fas fa-camera"></i>
                    ຮູບຜູ້ສະໝັກ
                  </label>
                  <div
                    class="photo-upload"
                    @click="triggerFileInput('applicant')"
                  >
                    <img
                      v-if="formData.applicantPhoto || applicantPhotoPreview"
                      :src="applicantPhotoPreview || formData.applicantPhoto"
                      alt="Applicant"
                    />
                    <div v-else class="photo-placeholder">
                      <i class="fas fa-plus"></i>
                      <span>ເພີ່ມຮູບ</span>
                    </div>
                  </div>
                  <input
                    ref="applicantFileInput"
                    type="file"
                    accept="image/*"
                    @change="handleFileSelect($event, 'applicant')"
                    style="display: none"
                  />
                </div>

                <div v-if="formData.passportAvailability" class="form-group">
                  <label>
                    <i class="fas fa-id-badge"></i>
                    ຮູບໜັງສື
                  </label>
                  <div
                    class="photo-upload"
                    @click="triggerFileInput('passport')"
                  >
                    <img
                      v-if="formData.passportPhoto || passportPhotoPreview"
                      :src="passportPhotoPreview || formData.passportPhoto"
                      alt="Passport"
                    />
                    <div v-else class="photo-placeholder">
                      <i class="fas fa-plus"></i>
                      <span>ເພີ່ມຮູບ</span>
                    </div>
                  </div>
                  <input
                    ref="passportFileInput"
                    type="file"
                    accept="image/*"
                    @change="handleFileSelect($event, 'passport')"
                    style="display: none"
                  />
                </div>
              </div>
            </div>

            <!-- Step 2: Additional Info -->
            <div v-show="currentStep === 2">
              <div class="form-grid">
                <div class="form-group">
                  <label>
                    <i class="fas fa-flag"></i>
                    ສະຖານະ
                  </label>
                  <select v-model="formData.status">
                    <option value="INTERVIEW">Apply</option>
                    <option value="REGISTER">Register</option>
                    <option value="CONFIRM">Confirm</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="required">
                    <i class="fas fa-phone"></i>
                    ເບີໂທ
                  </label>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    placeholder="+856 20 12345678"
                    :class="{ error: errors.phone }"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>
                    <i class="fas fa-exclamation-triangle"></i>
                    ເບີສຸກເສີນ
                  </label>
                  <input
                    v-model="formData.emergencyContactNo"
                    type="tel"
                    placeholder="+856 20 87654321"
                  />
                </div>

                <div class="form-group">
                  <label>
                    <i class="fas fa-heart"></i>
                    ສະຖານະການແຕ່ງງານ
                  </label>
                  <select v-model="formData.maritalStatus">
                    <option value="">ເລືອກ</option>
                    <option value="single">ໂສດ</option>
                    <option value="married">ແຕ່ງງານ</option>
                    <option value="divorced">ຢ່າຮ້າງ</option>
                    <option value="widowed">ເປັນເມ່າຍ</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>
                    <i class="fas fa-building"></i>
                    ສະຖານທີ່ເຮັດວຽກ
                  </label>
                  <input
                    v-model="formData.workPlace"
                    type="text"
                    placeholder="ບໍລິສັດ / ໂຮງງານ"
                  />
                </div>

                <div class="form-group">
                  <label>
                    <i class="fas fa-map-marker-alt"></i>
                    ບ້ານ/ເມືອງ/ແຂວງ
                  </label>
                  <div class="location-group">
                    <input
                      v-model="formData.village"
                      type="text"
                      placeholder="ບ້ານ"
                    />
                    <input
                      v-model="formData.city"
                      type="text"
                      placeholder="ເມືອງ"
                    />
                    <input
                      v-model="formData.district"
                      type="text"
                      placeholder="ແຂວງ"
                    />
                  </div>
                </div>

                <div v-if="formData.passportAvailability" class="form-group">
                  <label>
                    <i class="fas fa-id-card"></i>
                    ເລກ/ໝົດອາຍຸ
                  </label>
                  <div class="passport-group">
                    <input
                      v-model="formData.passportNo"
                      type="text"
                      placeholder="PA1234567"
                    />
                    <input
                      v-model="formData.passportExpiredDate"
                      type="date"
                      :min="today"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label>
                    <i class="fas fa-calendar"></i>
                    ວັນທີສໍາຄັນ
                  </label>
                  <div class="date-group">
                    <input
                      v-model="formData.contactStartDate"
                      type="date"
                      placeholder="ເລີ່ມສັນຍາ"
                    />
                    <input
                      v-model="formData.contactEndDate"
                      type="date"
                      placeholder="ສິ້ນສຸດສັນຍາ"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label>
                    <i class="fas fa-clock"></i>
                    ເວລາ
                  </label>
                  <div class="date-group">
                    <input
                      v-model="formData.registertDate"
                      type="datetime-local"
                      placeholder="ລົງທະບຽນ"
                    />
                    <input
                      v-model="formData.interviewExamDate"
                      type="datetime-local"
                      placeholder="ສໍາພາດ"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Compact Error Display -->
            <div v-if="formErrors.length > 0" class="form-errors">
              <strong>ແກ້ໄຂ:</strong> {{ formErrors.join(', ') }}
            </div>
          </div>

          <div class="modal-footer">
            <div v-if="currentStep === 1" class="actions">
              <button type="button" @click="closeDialog" class="btn secondary">
                ຍົກເລີກ
              </button>
              <button
                type="button"
                @click="saveStep1Only"
                class="btn outline"
                :disabled="!step1Valid || loading"
              >
                {{ loading ? 'ກຳລັງບັນທຶກ...' : 'ບັນທຶກ' }}
              </button>
              <button
                type="button"
                @click="continueToStep2"
                class="btn primary"
                :disabled="!step1Valid"
              >
                ສືບຕໍ່
              </button>
            </div>

            <div v-if="currentStep === 2" class="actions">
              <button type="button" @click="goToStep(1)" class="btn secondary">
                ກັບຄືນ
              </button>
              <button
                type="submit"
                class="btn primary"
                :disabled="!isFormValid || loading"
              >
                {{
                  loading ? 'ກຳລັງບັນທຶກ...' : isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ'
                }}
              </button>
            </div>
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
    jobBatches: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      loading: false,
      currentStep: 1,
      applicantPhotoPreview: null,
      passportPhotoPreview: null,
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
        status: 'INTERVIEW',
      },
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    isEditMode() {
      return this.applicant && this.applicant.id
    },

    today() {
      return new Date().toISOString().split('T')[0]
    },

    step1Valid() {
      return (
        this.formData.firstName.trim() &&
        this.formData.lastName.trim() &&
        this.formData.gender
      )
    },

    isFormValid() {
      const step2Valid =
        this.currentStep === 2
          ? this.formData.phone && this.formData.phone.trim()
          : true
      return this.step1Valid && step2Valid && this.formErrors.length === 0
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeForm()
        this.loadJobBatches()
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

    'formData.passportAvailability'(newVal) {
      if (!newVal) {
        this.formData.passportNo = ''
        this.formData.passportExpiredDate = ''
        this.formData.passportPhoto = ''
        this.passportPhotoPreview = null
      }
    },
  },

  methods: {
    async loadJobBatches() {
      if (!this.jobBatches || this.jobBatches.length === 0) {
        this.$emit('load-job-batches')
      }
    },

    goToStep(step) {
      if (step === 1 || (step === 2 && this.step1Valid)) {
        this.currentStep = step
        this.errors = {}
        this.formErrors = []
      }
    },

    continueToStep2() {
      if (this.step1Valid) {
        this.currentStep = 2
      }
    },

    async saveStep1Only() {
      if (!this.validateStep1()) return

      this.loading = true
      try {
        const submitData = {
          firstName: this.formData.firstName.trim(),
          lastName: this.formData.lastName.trim(),
          gender: this.formData.gender,
          age: this.formData.age || null,
          address: this.formData.address ? this.formData.address.trim() : '',
          passportAvailability: this.formData.passportAvailability,
          jobBatchId: this.formData.jobBatchId,
          status: 'INTERVIEW',
        }

        this.$emit('save', submitData)
      } catch (error) {
        this.formErrors.push('An error occurred while saving')
      } finally {
        this.loading = false
      }
    },

    initializeForm() {
      if (this.applicant && this.applicant.id) {
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
          status: this.applicant.status || 'INTERVIEW',
        }

        if (this.applicant.phone) {
          this.currentStep = 2
        }
      } else {
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
        status: 'INTERVIEW',
      }
      this.applicantPhotoPreview = null
      this.passportPhotoPreview = null
    },

    resetForm() {
      this.resetFormData()
      this.errors = {}
      this.formErrors = []
      this.loading = false
      this.currentStep = 1
    },

    validateStep1() {
      this.errors = {}
      this.formErrors = []

      if (!this.formData.firstName.trim()) {
        this.errors.firstName = true
        this.formErrors.push('ຊື່ຈຳເປັນ')
      }

      if (!this.formData.lastName.trim()) {
        this.errors.lastName = true
        this.formErrors.push('ນາມສະກຸນຈຳເປັນ')
      }

      if (!this.formData.gender) {
        this.errors.gender = true
        this.formErrors.push('ເລືອກເພດ')
      }

      if (
        this.formData.age &&
        (this.formData.age < 18 || this.formData.age > 32)
      ) {
        this.formErrors.push('ອາຍຸ 18-32 ປີ')
      }

      return this.formErrors.length === 0
    },

    validateForm() {
      if (!this.validateStep1()) return false

      if (this.currentStep === 2) {
        if (!this.formData.phone.trim()) {
          this.errors.phone = true
          this.formErrors.push('ເບີໂທຈຳເປັນ')
        }
      }

      return this.formErrors.length === 0
    },

    async saveApplicant() {
      if (!this.validateForm()) return

      this.loading = true
      try {
        const submitData = Object.keys(this.formData).reduce((acc, key) => {
          const value = this.formData[key]
          if (value !== '' && value !== null) {
            acc[key] = value
          }
          return acc
        }, {})

        this.$emit('save', submitData)
      } catch (error) {
        this.formErrors.push('Error saving')
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

    triggerFileInput(type) {
      if (type === 'applicant') {
        this.$refs.applicantFileInput.click()
      } else if (type === 'passport') {
        this.$refs.passportFileInput.click()
      }
    },

    handleFileSelect(event, type) {
      const file = event.target.files[0]
      if (!file) return

      if (!file.type.startsWith('image/')) {
        this.formErrors.push('ເລືອກຮູບພາບ')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        this.formErrors.push('ຮູບໃຫຍ່ເກີນ 5MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        if (type === 'applicant') {
          this.applicantPhotoPreview = e.target.result
        } else if (type === 'passport') {
          this.passportPhotoPreview = e.target.result
        }
      }
      reader.readAsDataURL(file)
    },
  },
}
</script>

<style scoped>
.full-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: white; /* or any */
  z-index: 9999;
}

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
}

.modal-dialog {
  background: white;
  border-radius: 8px;
  max-width: 800px;
  width: 95%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  background: #01532b;
  color: white;
}

.modal-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  opacity: 0.8;
}

.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

/* Compact Stepper */
.stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s;
}

.step.active {
  background: rgba(1, 83, 43, 0.1);
  color: #01532b;
}

.step.completed {
  color: #059669;
}

.step:not(.available) {
  opacity: 0.5;
  cursor: not-allowed;
}

.step-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}

.step.active .step-number {
  background: #01532b;
  color: white;
}

.step.completed .step-number {
  background: #059669;
  color: white;
}

.step-label {
  font-size: 14px;
  font-weight: 500;
}

.step-line {
  width: 60px;
  height: 2px;
  background: #e5e7eb;
  margin: 0 16px;
}

.step-line.completed {
  background: #059669;
}

.modal-body {
  padding: 20px;
  max-height: 60vh;
  overflow-y: auto;
  flex: 1;
}

/* Compact Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.form-group label.required::after {
  content: '*';
  color: #ef4444;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background: #fafafa;
  transition: all 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #01532b;
  background: white;
  box-shadow: 0 0 0 2px rgba(1, 83, 43, 0.1);
}

.form-group input.error,
.form-group select.error {
  border-color: #ef4444;
}

.form-group textarea {
  resize: vertical;
  min-height: 60px;
}

/* Radio Group */
.radio-group {
  display: flex;
  gap: 16px;
  margin-top: 4px;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 0;
  font-weight: 500;
  cursor: pointer;
}

/* Location & Date Groups */
.location-group,
.passport-group,
.date-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 8px;
}

/* Compact Photo Upload */
.photo-upload {
  width: 80px;
  height: 80px;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s;
}

.photo-upload:hover {
  border-color: #01532b;
}

.photo-upload img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  font-size: 12px;
}

.photo-placeholder i {
  font-size: 18px;
}

/* Compact Error Display */
.form-errors {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 8px 12px;
  border-radius: 6px;
  margin-top: 16px;
  font-size: 13px;
}

.modal-footer {
  padding: 16px 20px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn.primary {
  background: #01532b;
  color: white;
}

.btn.primary:hover:not(:disabled) {
  background: #064e3b;
}

.btn.secondary {
  background: #6b7280;
  color: white;
}

.btn.outline {
  background: transparent;
  border: 1px solid #01532b;
  color: #01532b;
}

.btn.outline:hover:not(:disabled) {
  background: #01532b;
  color: white;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .modal-dialog {
    width: 98%;
    max-height: 95vh;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stepper {
    padding: 12px;
  }

  .step-line {
    width: 40px;
    margin: 0 12px;
  }

  .modal-body {
    padding: 16px;
  }

  .location-group,
  .passport-group,
  .date-group {
    grid-template-columns: 1fr;
  }

  .actions {
    flex-wrap: wrap;
  }

  .btn {
    flex: 1;
    min-width: 120px;
  }
}
</style>