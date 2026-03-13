<template>
  <div v-if="show" class="dialog-overlay" @click.self="closeDialog">
    <div class="dialog-container">
      <div class="dialog-header">
        <h3 class="dialog-title">
          <i class="fas fa-building"></i>
          {{ isEdit ? 'ແກ້ໄຂຂໍ້ມູນກະຊວງ' : 'ເພີ່ມກະຊວງໃໝ່' }}
        </h3>
        <button class="dialog-close" @click="closeDialog">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="dialog-body">
        <form @submit.prevent="submitForm">
          <!-- Basic Information -->
          <div class="form-section">
            <h4 class="section-title">
              <i class="fas fa-info-circle"></i>
              ຂໍ້ມູນພື້ນຖານ
            </h4>
            
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label required">ລະຫັດກະຊວງ</label>
                <input
                  v-model="formData.ministryCode"
                  type="text"
                  class="form-input"
                  placeholder="ປ້ອນລະຫັດກະຊວງ"
                  :class="{ 'error': errors.ministryCode }"
                  required
                />
                <span v-if="errors.ministryCode" class="error-message">
                  {{ errors.ministryCode }}
                </span>
              </div>

              <div class="form-group">
                <label class="form-label required">ປະເພດກະຊວງ</label>
                <select
                  v-model="formData.ministryType"
                  class="form-select"
                  :class="{ 'error': errors.ministryType }"
                  required
                >
                  <option value="">ເລືອກປະເພດ</option>
                  <option value="Ministry">Ministry</option>
                  <option value="Department">Department</option>
                  <option value="Agency">Agency</option>
                  <option value="Commission">Commission</option>
                </select>
                <span v-if="errors.ministryType" class="error-message">
                  {{ errors.ministryType }}
                </span>
              </div>

              <div class="form-group full-width">
                <label class="form-label required">ຊື່ກະຊວງ (ລາວ)</label>
                <input
                  v-model="formData.ministryName"
                  type="text"
                  class="form-input"
                  placeholder="ປ້ອນຊື່ກະຊວງເປັນພາສາລາວ"
                  :class="{ 'error': errors.ministryName }"
                  required
                />
                <span v-if="errors.ministryName" class="error-message">
                  {{ errors.ministryName }}
                </span>
              </div>

              <div class="form-group full-width">
                <label class="form-label">ຊື່ກະຊວງ (ອັງກິດ)</label>
                <input
                  v-model="formData.ministryNameEn"
                  type="text"
                  class="form-input"
                  placeholder="Enter ministry name in English"
                />
              </div>

              <div class="form-group full-width">
                <label class="form-label">ຄຳອະທິບາຍ</label>
                <textarea
                  v-model="formData.description"
                  class="form-textarea"
                  rows="3"
                  placeholder="ປ້ອນຄຳອະທິບາຍກ່ຽວກັບກະຊວງ"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Hierarchy Information -->
          <div class="form-section">
            <h4 class="section-title">
              <i class="fas fa-sitemap"></i>
              ຂໍ້ມູນລຳດັບຊັ້ນ
            </h4>
            
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">ກະຊວງແມ່</label>
                <select
                  v-model="formData.parentMinistryId"
                  class="form-select"
                >
                  <option value="">ບໍ່ມີກະຊວງແມ່</option>
                  <option
                    v-for="ministry in availableParentMinistries"
                    :key="ministry.id"
                    :value="ministry.id"
                  >
                    {{ ministry.ministryName }} ({{ ministry.ministryCode }})
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">ລຳດັບຄວາມສຳຄັນ</label>
                <input
                  v-model.number="formData.priority"
                  type="number"
                  class="form-input"
                  placeholder="0"
                  min="0"
                />
              </div>

              <div class="form-group">
                <label class="form-label">ສະຖານະ</label>
                <select
                  v-model="formData.status"
                  class="form-select"
                  required
                >
                  <option value="Active">ໃຊ້ງານ</option>
                  <option value="Inactive">ປິດໃຊ້ງານ</option>
                  <option value="Restructured">ປັບໂຄງສ້າງ</option>
                  <option value="Merged">ລວມເຂົ້າກັນ</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">ວັນທີ່ສ້າງຕັ້ງ</label>
                <input
                  v-model="formData.establishedDate"
                  type="date"
                  class="form-input"
                />
              </div>
            </div>
          </div>

          <!-- Personnel Information -->
          <div class="form-section">
            <h4 class="section-title">
              <i class="fas fa-user-tie"></i>
              ຂໍ້ມູນບຸກຄະລາກອນ
            </h4>
            
            <div class="form-grid">
              <div class="form-group full-width">
                <label class="form-label">ຊື່ລັດຖະມົນຕີ</label>
                <input
                  v-model="formData.ministerName"
                  type="text"
                  class="form-input"
                  placeholder="ປ້ອນຊື່ລັດຖະມົນຕີ"
                />
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="form-section">
            <h4 class="section-title">
              <i class="fas fa-address-book"></i>
              ຂໍ້ມູນຕິດຕໍ່
            </h4>
            
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">ເບີໂທລະສັບ</label>
                <input
                  v-model="formData.phoneNumber"
                  type="tel"
                  class="form-input"
                  placeholder="020 xxxxxxxx"
                />
              </div>

              <div class="form-group">
                <label class="form-label">ອີເມວ</label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  placeholder="example@gov.la"
                  :class="{ 'error': errors.email }"
                />
                <span v-if="errors.email" class="error-message">
                  {{ errors.email }}
                </span>
              </div>

              <div class="form-group full-width">
                <label class="form-label">ເວັບໄຊຕ໌</label>
                <input
                  v-model="formData.website"
                  type="url"
                  class="form-input"
                  placeholder="https://example.gov.la"
                  :class="{ 'error': errors.website }"
                />
                <span v-if="errors.website" class="error-message">
                  {{ errors.website }}
                </span>
              </div>
            </div>
          </div>

          <!-- Location Information -->
          <div class="form-section">
            <h4 class="section-title">
              <i class="fas fa-map-marker-alt"></i>
              ຂໍ້ມູນທີ່ຕັ້ງ
            </h4>
            
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">ແຂວງ</label>
                <select
                  v-model="formData.province"
                  class="form-select"
                  @change="onProvinceChange"
                >
                  <option value="">ເລືອກແຂວງ</option>
                  <option value="ວຽງຈັນ">ວຽງຈັນ</option>
                  <option value="ລວງພະບາງ">ລວງພະບາງ</option>
                  <option value="ສະຫວັນນະເຂດ">ສະຫວັນນະເຂດ</option>
                  <option value="ຈຳປາສັກ">ຈຳປາສັກ</option>
                  <option value="ອັດຕະປື">ອັດຕະປື</option>
                  <option value="ບໍລິຄຳໄຊ">ບໍລິຄຳໄຊ</option>
                  <option value="ຄຳມ່ວນ">ຄຳມ່ວນ</option>
                  <option value="ຜົ້ງສາລີ">ຜົ້ງສາລີ</option>
                  <option value="ສາລະວັນ">ສາລະວັນ</option>
                  <option value="ເຊກອງ">ເຊກອງ</option>
                  <option value="ຫົວພັນ">ຫົວພັນ</option>
                  <option value="ອຸດົມໄຊ">ອຸດົມໄຊ</option>
                  <option value="ບໍ່ແກ້ວ">ບໍ່ແກ້ວ</option>
                  <option value="ຫຼວງນ້ຳທາ">ຫຼວງນ້ຳທາ</option>
                  <option value="ຫຼວງພະບາງ">ຫຼວງພະບາງ</option>
                  <option value="ໄຊຍະບູລີ">ໄຊຍະບູລີ</option>
                  <option value="ວຽງຈັນ">ວຽງຈັນ</option>
                  <option value="ໄຊສົມບູນ">ໄຊສົມບູນ</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">ເມືອງ</label>
                <input
                  v-model="formData.district"
                  type="text"
                  class="form-input"
                  placeholder="ປ້ອນຊື່ເມືອງ"
                />
              </div>

              <div class="form-group full-width">
                <label class="form-label">ທີ່ຢູ່</label>
                <textarea
                  v-model="formData.address"
                  class="form-textarea"
                  rows="3"
                  placeholder="ປ້ອນທີ່ຢູ່ລາຍລະອຽດ"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Status Toggle -->
          <div class="form-section">
            <div class="form-group">
              <label class="form-checkbox">
                <input
                  v-model="formData.isActive"
                  type="checkbox"
                />
                <span class="checkbox-mark"></span>
                ເປີດໃຊ້ງານ
              </label>
            </div>
          </div>
        </form>
      </div>

      <div class="dialog-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="closeDialog"
          :disabled="loading"
        >
          ຍົກເລີກ
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          @click="submitForm"
          :disabled="loading"
        >
          <i v-if="loading" class="fas fa-spinner fa-spin"></i>
          <i v-else class="fas fa-save"></i>
          {{ loading ? 'ກຳລັງບັນທຶກ...' : (isEdit ? 'ອັບເດດ' : 'ບັນທຶກ') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinistryDialog',
  
  props: {
    show: {
      type: Boolean,
      default: false
    },
    ministry: {
      type: Object,
      default: null
    },
    ministries: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      loading: false,
      errors: {},
      formData: {
        ministryCode: '',
        ministryName: '',
        ministryNameEn: '',
        description: '',
        ministryType: 'Ministry',
        parentMinistryId: null,
        ministerName: '',
        establishedDate: '',
        address: '',
        phoneNumber: '',
        email: '',
        website: '',
        province: '',
        district: '',
        status: 'Active',
        priority: 0,
        isActive: true
      }
    }
  },

  computed: {
    isEdit() {
      return this.ministry && this.ministry.id
    },

    availableParentMinistries() {
      return this.ministries.filter(m => {
        // Exclude current ministry (when editing) and its children
        if (this.isEdit && m.id === this.ministry.id) {
          return false
        }
        // Only show Ministry and Department types as potential parents
        return ['Ministry', 'Department'].includes(m.ministryType)
      })
    }
  },

  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeForm()
        this.clearErrors()
      }
    },

    ministry: {
      handler() {
        if (this.show) {
          this.initializeForm()
        }
      },
      deep: true
    }
  },

  methods: {
    initializeForm() {
      if (this.isEdit) {
        // Edit mode - populate form with existing data
        this.formData = {
          ministryCode: this.ministry.ministryCode || '',
          ministryName: this.ministry.ministryName || '',
          ministryNameEn: this.ministry.ministryNameEn || '',
          description: this.ministry.description || '',
          ministryType: this.ministry.ministryType || 'Ministry',
          parentMinistryId: this.ministry.parentMinistryId || null,
          ministerName: this.ministry.ministerName || '',
          establishedDate: this.ministry.establishedDate ? this.ministry.establishedDate.split('T')[0] : '',
          address: this.ministry.address || '',
          phoneNumber: this.ministry.phoneNumber || '',
          email: this.ministry.email || '',
          website: this.ministry.website || '',
          province: this.ministry.province || '',
          district: this.ministry.district || '',
          status: this.ministry.status || 'Active',
          priority: this.ministry.priority || 0,
          isActive: this.ministry.isActive !== false
        }
      } else {
        // Create mode - reset form
        this.formData = {
          ministryCode: '',
          ministryName: '',
          ministryNameEn: '',
          description: '',
          ministryType: 'Ministry',
          parentMinistryId: null,
          ministerName: '',
          establishedDate: '',
          address: '',
          phoneNumber: '',
          email: '',
          website: '',
          province: '',
          district: '',
          status: 'Active',
          priority: 0,
          isActive: true
        }
      }
    },

    validateForm() {
      this.errors = {}

      // Required fields
      if (!this.formData.ministryCode) {
        this.errors.ministryCode = 'ກະລຸນາປ້ອນລະຫັດກະຊວງ'
      }

      if (!this.formData.ministryName) {
        this.errors.ministryName = 'ກະລຸນາປ້ອນຊື່ກະຊວງ'
      }

      if (!this.formData.ministryType) {
        this.errors.ministryType = 'ກະລຸນາເລືອກປະເພດກະຊວງ'
      }

      // Email validation
      if (this.formData.email && !this.isValidEmail(this.formData.email)) {
        this.errors.email = 'ຮູບແບບອີເມວບໍ່ຖືກຕ້ອງ'
      }

      // Website validation
      if (this.formData.website && !this.isValidUrl(this.formData.website)) {
        this.errors.website = 'ຮູບແບບເວັບໄຊຕ໌ບໍ່ຖືກຕ້ອງ'
      }

      return Object.keys(this.errors).length === 0
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },

    isValidUrl(url) {
      try {
        new URL(url)
        return true
      } catch (e) {
        return false
      }
    },

    async submitForm() {
      if (!this.validateForm()) {
        return
      }

      try {
        this.loading = true

        // Clean up form data
        const submitData = { ...this.formData }
        
        // Convert empty strings to null for optional fields
        Object.keys(submitData).forEach(key => {
          if (submitData[key] === '') {
            submitData[key] = null
          }
        })

        // Convert parentMinistryId to number or null
        if (submitData.parentMinistryId) {
          submitData.parentMinistryId = parseInt(submitData.parentMinistryId)
        }

        let response
        if (this.isEdit) {
          // Update existing ministry
          response = await this.$axios.put(`/api/ministries/${this.ministry.id}`, submitData)
        } else {
          // Create new ministry
          response = await this.$axios.post('/api/ministries', submitData)
        }

        this.$emit('saved', response.data)
        this.closeDialog()
      } catch (error) {
        console.error('Error saving ministry:', error)
        
        if (error.response && error.response.data) {
          if (error.response.data.errors) {
            // Handle validation errors from server
            this.errors = error.response.data.errors
          } else {
            // Handle other server errors
            this.showToast(error.response.data.message || 'ມີຂໍ້ຜິດພາດໃນການບັນທຶກ', 'error')
          }
        } else {
          this.showToast('ມີຂໍ້ຜິດພາດໃນການບັນທຶກ', 'error')
        }
      } finally {
        this.loading = false
      }
    },

    closeDialog() {
      this.$emit('close')
    },

    clearErrors() {
      this.errors = {}
    },

    onProvinceChange() {
      // Clear district when province changes
      this.formData.district = ''
    },

    showToast(message, type = 'info') {
      // Use parent's toast method or fallback
      if (this.$parent && this.$parent.showToast) {
        this.$parent.showToast(message, type)
      } else {
        console.log(`${type}: ${message}`)
      }
    }
  }
}
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.dialog-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dialog-header {
  padding: 20px 24px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
}

.dialog-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dialog-close {
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;
}

.dialog-close:hover {
  background-color: #e9ecef;
  color: #333;
}

.dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.dialog-footer {
  padding: 16px 24px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background: #f8f9fa;
}

/* Form Sections */
.form-section {
  margin-bottom: 32px;
}

.form-section:last-child {
  margin-bottom: 0;
}

.section-title {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e9ecef;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  font-weight: 500;
  color: #555;
  font-size: 14px;
}

.form-label.required::after {
  content: ' *';
  color: #dc3545;
}

.form-input,
.form-select,
.form-textarea {
  padding: 10px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: #dc3545;
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  color: #555;
}

.form-checkbox input[type="checkbox"] {
  display: none;
}

.checkbox-mark {
  width: 20px;
  height: 20px;
  border: 2px solid #ced4da;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.form-checkbox input[type="checkbox"]:checked + .checkbox-mark {
  background-color: #007bff;
  border-color: #007bff;
}

.form-checkbox input[type="checkbox"]:checked + .checkbox-mark::after {
  content: '✓';
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.error-message {
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
}

/* Button Styles */
.btn {
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:hover:not(:disabled) {
  background-color: #6c757d;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dialog-overlay {
    padding: 10px;
  }

  .dialog-container {
    max-width: 100%;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .form-group.full-width {
    grid-column: 1;
  }

  .dialog-header {
    padding: 16px 20px;
  }

  .dialog-body {
    padding: 20px;
  }

  .dialog-footer {
    padding: 12px 20px;
    flex-direction: column-reverse;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .dialog-title {
    font-size: 18px;
  }

  .section-title {
    font-size: 14px;
  }

  .form-section {
    margin-bottom: 24px;
  }
}
</style>