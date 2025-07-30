<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="modal-dialog enhanced-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-briefcase modal-icon"></i>
          <h5 class="modal-title">
            {{ isEditMode ? 'ແກ້ໄຂການປະກາດຫາງານ' : 'ເພີ່ມການປະກາດຫາງານໃໝ່' }}
          </h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="saveJobAdvertise">
        <div class="modal-body">
          <div class="form-grid">
            <!-- Job Information Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-briefcase"></i>
                ຂໍ້ມູນງານ
              </h4>
            </div>

            <!-- Job Title -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-tag"></i>
                ຊື່ວຽກ
              </label>
              <input
                v-model="formData.title"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.title }"
                placeholder="ເຊັ່ນ: ພະນັກງານໂຮງງານ - ເອເລັກໂທນິກ"
                required
              />
              <div v-if="errors.title" class="invalid-feedback">
                {{ errors.title }}
              </div>
            </div>

            <!-- Country -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-globe"></i>
                ປະເທດ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.country"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.country }"
                  required
                >
                  <option value="">ເລືອກປະເທດ</option>
                  <option value="Thailand">ປະເທດໄທ</option>
                  <option value="South Korea">ເກົາຫຼີໃຕ້</option>
                  <option value="Japan">ຍີ່ປຸ່ນ</option>
                  <option value="Taiwan">ໄຕ້ຫວັນ</option>
                  <option value="Malaysia">ມາເລເຊຍ</option>
                  <option value="Singapore">ສິງກະໂປ</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.country" class="invalid-feedback">
                {{ errors.country }}
              </div>
            </div>

            <!-- Province -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-map-marker-alt"></i>
                ແຂວງ/ເມືອງ
              </label>
              <input
                v-model="formData.province"
                type="text"
                class="form-control"
                placeholder="ເຊັ່ນ: ສະລະບູລີ, ບາງກອກ"
              />
            </div>

            <!-- Working Hours -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-clock"></i>
                ຊົ່ວໂມງເຮັດວຽກ
              </label>
              <input
                v-model="formData.workingHours"
                type="text"
                class="form-control"
                placeholder="ເຊັ່ນ: 8 ຊົ່ວໂມງ/ວັນ, 1 ກະ"
              />
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ລະບຸຊົ່ວໂມງເຮັດວຽກຕໍ່ວັນ ແລະ ຈຳນວນກະ
              </div>
            </div>

            <!-- Rest Days -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-day"></i>
                ວັນພັກ
              </label>
              <input
                v-model="formData.restDays"
                type="text"
                class="form-control"
                placeholder="ເຊັ່ນ: 1 ວັນ/ອາທິດ"
              />
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ລະບຸວັນພັກຕໍ່ອາທິດ ຫຼື ຕໍ່ເດືອນ
              </div>
            </div>

            <!-- Max Applicants -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-users"></i>
                ຈຳນວນຄົນຮັບສະໝັກ
              </label>
              <input
                v-model.number="formData.maxApplicants"
                type="number"
                class="form-control"
                min="1"
                max="500"
                placeholder="ເຊັ່ນ: 100"
              />
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ຈຳນວນຄົນສູງສຸດທີ່ຮັບສະໝັກ
              </div>
            </div>

            <!-- Job Description -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-align-left"></i>
                ລາຍລະອຽດວຽກ
              </label>
              <textarea
                v-model="formData.jobDescription"
                class="form-control"
                rows="4"
                placeholder="ອະທິບາຍລາຍລະອຽດວຽກ, ສະພາບແວດລ້ອມການເຮັດວຽກ..."
                maxlength="1000"
              ></textarea>
              <div class="field-hint">
                <span class="text-counter">{{ formData.jobDescription?.length || 0 }}/1000</span>
              </div>
            </div>

            <!-- Requirements Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-clipboard-check"></i>
                ຄຸນສົມບັດຜູ້ສະໝັກ
              </h4>
            </div>

            <!-- Passport Requirement -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-passport"></i>
                ໜັງສືເດີນທາງ
              </label>
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.requiresPassport"
                  />
                  <span class="checkbox-label">ຕ້ອງມີໜັງສືເດີນທາງ</span>
                </label>
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ຈຳເປັນສຳລັບການເດີນທາງໄປເຮັດວຽກຕ່າງປະເທດ
              </div>
            </div>

            <!-- Eyesight Requirement -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-eye"></i>
                ສາຍຕາ
              </label>
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.requiresGoodEyesight"
                  />
                  <span class="checkbox-label">ຕ້ອງມີສາຍຕາດີ</span>
                </label>
              </div>
              <div class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ສຳລັບວຽກທີ່ຕ້ອງການຄວາມລະອຽດ
              </div>
            </div>

            <!-- Language Requirement -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-language"></i>
                ລະດັບພາສາທີ່ຕ້ອງການ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.requiresLanguage"
                  class="form-control custom-select"
                >
                  <option value="none">ບໍ່ຕ້ອງການ</option>
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
                ພາສາທ້ອງຖິ່ນຂອງປະເທດປາຍທາງ
              </div>
            </div>

            <!-- Tattoo Policy -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-paint-brush"></i>
                ນະໂຍບາຍລາຍສັກ
              </label>
              <div class="checkbox-group">
                <label class="checkbox-option">
                  <input
                    type="checkbox"
                    v-model="formData.allowsTattoos"
                  />
                  <span class="checkbox-label">ອະນຸຍາດໃຫ້ມີລາຍສັກ</span>
                </label>
              </div>
              <div class="field-hint warning">
                <i class="fas fa-exclamation-triangle"></i>
                ສ່ວນໃຫຍ່ບໍ່ອະນຸຍາດລາຍສັກນອກເສື້ອຜ້າ
              </div>
            </div>

            <!-- Job Management Section -->
            <div class="section-header full-width">
              <h4>
                <i class="fas fa-cogs"></i>
                ການຈັດການງານ
              </h4>
            </div>

            <!-- Status -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-toggle-on"></i>
                ສະຖານະ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="formData.status"
                  class="form-control custom-select"
                  :class="{ 'is-invalid': errors.status }"
                  required
                >
                  <option value="">ເລືອກສະຖານະ</option>
                  <option value="active">ເປີດຮັບສະໝັກ</option>
                  <option value="inactive">ປິດຊົ່ວຄາວ</option>
                  <option value="closed">ປິດແລ້ວ</option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="errors.status" class="invalid-feedback">
                {{ errors.status }}
              </div>
            </div>

            <!-- Start Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-plus"></i>
                ວັນເລີ່ມຮັບສະໝັກ
              </label>
              <input
                v-model="formData.startDate"
                type="date"
                class="form-control"
                :class="{ 'is-invalid': errors.startDate }"
                :min="todayDate"
              />
              <div v-if="errors.startDate" class="invalid-feedback">
                {{ errors.startDate }}
              </div>
            </div>

            <!-- End Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-minus"></i>
                ວັນສິ້ນສຸດຮັບສະໝັກ
              </label>
              <input
                v-model="formData.endDate"
                type="date"
                class="form-control"
                :class="{ 'is-invalid': errors.endDate }"
                :min="formData.startDate || todayDate"
              />
              <div v-if="errors.endDate" class="invalid-feedback">
                {{ errors.endDate }}
              </div>
              <div v-if="formData.startDate && formData.endDate" class="field-hint info">
                <i class="fas fa-info-circle"></i>
                ໄລຍະເວລາ: {{ calculateDuration() }} ວັນ
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
                placeholder="ຂໍ້ມູນເພີ່ມເຕີມ, ເງື່ອນໄຂພິເສດ..."
                maxlength="500"
              ></textarea>
              <div class="field-hint">
                <span class="text-counter">{{ formData.notes?.length || 0 }}/500</span>
              </div>
            </div>

            <!-- Requirements Summary -->
            <div class="form-group full-width">
              <div class="requirements-summary">
                <h5>
                  <i class="fas fa-clipboard-list"></i>
                  ສະຫລຸບຄຸນສົມບັດຜູ້ສະໝັກ
                </h5>
                <div class="requirements-grid">
                  <div class="requirement-card" :class="{ 'required': formData.requiresPassport }">
                    <div class="requirement-icon">
                      <i class="fas fa-passport"></i>
                    </div>
                    <div class="requirement-content">
                      <h6>ໜັງສືເດີນທາງ</h6>
                      <p>{{ formData.requiresPassport ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ' }}</p>
                    </div>
                  </div>

                  <div class="requirement-card" :class="{ 'required': formData.requiresGoodEyesight }">
                    <div class="requirement-icon">
                      <i class="fas fa-eye"></i>
                    </div>
                    <div class="requirement-content">
                      <h6>ສາຍຕາດີ</h6>
                      <p>{{ formData.requiresGoodEyesight ? 'ຈຳເປັນ' : 'ບໍ່ຈຳເປັນ' }}</p>
                    </div>
                  </div>

                  <div class="requirement-card" :class="{ 'required': formData.requiresLanguage !== 'none' }">
                    <div class="requirement-icon">
                      <i class="fas fa-language"></i>
                    </div>
                    <div class="requirement-content">
                      <h6>ພາສາ</h6>
                      <p>{{ formatLanguageLevel(formData.requiresLanguage) }}</p>
                    </div>
                  </div>

                  <div class="requirement-card" :class="{ 'allowed': formData.allowsTattoos }">
                    <div class="requirement-icon">
                      <i class="fas fa-paint-brush"></i>
                    </div>
                    <div class="requirement-content">
                      <h6>ລາຍສັກ</h6>
                      <p>{{ formData.allowsTattoos ? 'ອະນຸຍາດ' : 'ບໍ່ອະນຸຍາດ' }}</p>
                    </div>
                  </div>
                </div>
                
                <div class="job-summary" :class="{ 'active': formData.status === 'active' }">
                  <i :class="getStatusIcon()"></i>
                  <span>{{ getJobSummaryText() }}</span>
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
            {{ loading ? 'Saving...' : isEditMode ? 'ອັບເດດ' : 'ສ້າງການປະກາດ' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobAdvertiseDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    jobAdvertise: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      loading: false,
      formData: {
        title: '',
        country: '',
        province: '',
        jobDescription: '',
        workingHours: '8 ຊົ່ວໂມງ/ວັນ',
        restDays: '1 ວັນ/ອາທິດ',
        requiresPassport: true,
        requiresGoodEyesight: false,
        requiresLanguage: 'none',
        allowsTattoos: false,
        status: 'active',
        startDate: '',
        endDate: '',
        maxApplicants: null,
        notes: '',
      },
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    isEditMode() {
      return this.jobAdvertise && this.jobAdvertise.id
    },

    user() {
      return this.$auth.user || ''
    },

    todayDate() {
      return new Date().toISOString().split('T')[0]
    },

    // Form validation
    isFormValid() {
      return (
        this.formData.title.trim() &&
        this.formData.country &&
        this.formData.status &&
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

    jobAdvertise: {
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
      if (this.jobAdvertise && this.jobAdvertise.id) {
        // Edit mode
        this.formData = {
          title: this.jobAdvertise.title || '',
          country: this.jobAdvertise.country || '',
          province: this.jobAdvertise.province || '',
          jobDescription: this.jobAdvertise.jobDescription || '',
          workingHours: this.jobAdvertise.workingHours || '8 ຊົ່ວໂມງ/ວັນ',
          restDays: this.jobAdvertise.restDays || '1 ວັນ/ອາທິດ',
          requiresPassport: this.jobAdvertise.requiresPassport || false,
          requiresGoodEyesight: this.jobAdvertise.requiresGoodEyesight || false,
          requiresLanguage: this.jobAdvertise.requiresLanguage || 'none',
          allowsTattoos: this.jobAdvertise.allowsTattoos || false,
          status: this.jobAdvertise.status || 'active',
          startDate: this.jobAdvertise.startDate 
            ? this.jobAdvertise.startDate.split('T')[0] 
            : '',
          endDate: this.jobAdvertise.endDate 
            ? this.jobAdvertise.endDate.split('T')[0] 
            : '',
          maxApplicants: this.jobAdvertise.maxApplicants || null,
          notes: this.jobAdvertise.notes || '',
        }
      } else {
        // Create mode - set defaults
        this.formData = {
          title: '',
          country: '',
          province: '',
          jobDescription: '',
          workingHours: '8 ຊົ່ວໂມງ/ວັນ',
          restDays: '1 ວັນ/ອາທິດ',
          requiresPassport: true,
          requiresGoodEyesight: false,
          requiresLanguage: 'none',
          allowsTattoos: false,
          status: 'active',
          startDate: '',
          endDate: '',
          maxApplicants: null,
          notes: '',
        }
      }

      this.errors = {}
      this.formErrors = []
    },

    resetForm() {
      this.formData = {
        title: '',
        country: '',
        province: '',
        jobDescription: '',
        workingHours: '8 ຊົ່ວໂມງ/ວັນ',
        restDays: '1 ວັນ/ອາທິດ',
        requiresPassport: true,
        requiresGoodEyesight: false,
        requiresLanguage: 'none',
        allowsTattoos: false,
        status: 'active',
        startDate: '',
        endDate: '',
        maxApplicants: null,
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
      if (!this.formData.title.trim()) {
        this.errors.title = 'ກະລຸນາໃສ່ຊື່ວຽກ'
        this.formErrors.push('Job title is required')
      }

      if (!this.formData.country) {
        this.errors.country = 'ກະລຸນາເລືອກປະເທດ'
        this.formErrors.push('Country selection is required')
      }

      if (!this.formData.status) {
        this.errors.status = 'ກະລຸນາເລືອກສະຖານະ'
        this.formErrors.push('Status selection is required')
      }

      // Date validation
      if (this.formData.startDate && this.formData.endDate) {
        const startDate = new Date(this.formData.startDate)
        const endDate = new Date(this.formData.endDate)
        
        if (startDate >= endDate) {
          this.errors.endDate = 'ວັນສິ້ນສຸດຕ້ອງຫຼັງຈາກວັນເລີ່ມຕົ້ນ'
          this.formErrors.push('End date must be after start date')
        }
      }

      // Max applicants validation
      if (this.formData.maxApplicants && (this.formData.maxApplicants < 1 || this.formData.maxApplicants > 500)) {
        this.formErrors.push('Maximum applicants must be between 1 and 500')
      }

      // Text length validation
      if (this.formData.jobDescription && this.formData.jobDescription.length > 1000) {
        this.formErrors.push('Job description must not exceed 1000 characters')
      }

      if (this.formData.notes && this.formData.notes.length > 500) {
        this.formErrors.push('Notes must not exceed 500 characters')
      }

      return this.formErrors.length === 0
    },

    async saveJobAdvertise() {
      if (!this.validateForm()) {
        return
      }

      this.loading = true

      try {
        // Prepare data for submission
        const submitData = {
          ...this.formData,
        }

        console.log('📤 Submitting job advertise data:', submitData)

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
    calculateDuration() {
      if (!this.formData.startDate || !this.formData.endDate) return 0
      const start = new Date(this.formData.startDate)
      const end = new Date(this.formData.endDate)
      const timeDiff = end.getTime() - start.getTime()
      return Math.ceil(timeDiff / (1000 * 3600 * 24))
    },

    formatLanguageLevel(level) {
      const levelLabels = {
        none: 'ບໍ່ຕ້ອງການ',
        basic: 'ພື້ນຖານ',
        intermediate: 'ປານກາງ',
        advanced: 'ສູງ',
      }
      return levelLabels[level] || level
    },

    getStatusIcon() {
      const icons = {
        active: 'fas fa-play-circle text-success',
        inactive: 'fas fa-pause-circle text-warning',
        closed: 'fas fa-stop-circle text-danger',
      }
      return icons[this.formData.status] || 'fas fa-question-circle'
    },

    getJobSummaryText() {
      const summaries = {
        active: 'ພ້ອມເປີດຮັບສະໝັກ - ຜູ້ສະໝັກສາມາດສະໝັກໄດ້',
        inactive: 'ປິດຊົ່ວຄາວ - ຢຸດຮັບສະໝັກຊົ່ວຄາວ',
        closed: 'ປິດແລ້ວ - ບໍ່ຮັບສະໝັກອີກແລ້ວ',
      }
      return summaries[this.formData.status] || 'ສະຖານະບໍ່ຊັດເຈນ'
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
  max-width: 1000px;
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

/* Requirements Summary */
.requirements-summary {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-top: 16px;
}

.requirements-summary h5 {
  margin: 0 0 16px 0;
  color: #1e293b;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.requirements-summary h5 i {
  color: #3b82f6;
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.requirement-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.requirement-card.required {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
}

.requirement-card.allowed {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
}

.requirement-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  color: #64748b;
  font-size: 16px;
  flex-shrink: 0;
}

.requirement-card.required .requirement-icon {
  background: #dcfce7;
  color: #16a34a;
}

.requirement-card.allowed .requirement-icon {
  background: #dbeafe;
  color: #2563eb;
}

.requirement-content {
  flex: 1;
  min-width: 0;
}

.requirement-content h6 {
  margin: 0 0 4px 0;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.requirement-content p {
  margin: 0;
  font-size: 12px;
  color: #64748b;
}

.requirement-card.required .requirement-content h6,
.requirement-card.required .requirement-content p {
  color: #15803d;
}

.requirement-card.allowed .requirement-content h6,
.requirement-card.allowed .requirement-content p {
  color: #1d4ed8;
}

.job-summary {
  padding: 12px 16px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(107, 114, 128, 0.1);
  border: 2px solid #9ca3af;
  color: #374151;
}

.job-summary.active {
  background: rgba(34, 197, 94, 0.1);
  border-color: #22c55e;
  color: #15803d;
}

.job-summary i {
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

/* Status-specific text colors */
.text-success {
  color: #22c55e !important;
}

.text-warning {
  color: #f59e0b !important;
}

.text-danger {
  color: #ef4444 !important;
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

  .requirements-grid {
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