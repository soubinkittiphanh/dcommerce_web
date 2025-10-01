<template>
  <div>
    <!-- Modal Overlay -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">
            {{ isEdit ? 'ແກ້ໄຂບັນຊີທະນາຄານ' : 'ເພີ່ມບັນຊີທະນາຄານໃໝ່' }}
          </h3>
          <button class="modal-close-btn" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="saveAccount" class="account-form">
            <div class="form-row">
              <!-- Account Number -->
              <div class="form-group">
                <label class="form-label required">ເລກບັນຊີ *</label>
                <div class="input-with-icon">
                  <i class="fas fa-credit-card input-icon"></i>
                  <input
                    type="text"
                    v-model="form.accountNumber"
                    class="form-control"
                    :class="{ 'is-invalid': errors.accountNumber }"
                    placeholder="ໃສ່ເລກບັນຊີ"
                    required
                  />
                </div>
                <div v-if="errors.accountNumber" class="invalid-feedback">
                  {{ errors.accountNumber }}
                </div>
              </div>

              <!-- Account Name -->
              <div class="form-group">
                <label class="form-label required">ຊື່ບັນຊີ *</label>
                <div class="input-with-icon">
                  <i class="fas fa-user input-icon"></i>
                  <input
                    type="text"
                    v-model="form.accountName"
                    class="form-control"
                    :class="{ 'is-invalid': errors.accountName }"
                    placeholder="ໃສ່ຊື່ບັນຊີ"
                    required
                  />
                </div>
                <div v-if="errors.accountName" class="invalid-feedback">
                  {{ errors.accountName }}
                </div>
              </div>
            </div>

            <div class="form-row">
              <!-- Bank Name -->
              <div class="form-group">
                <label class="form-label required">ຊື່ທະນາຄານ *</label>
                <div class="input-with-icon">
                  <i class="fas fa-university input-icon"></i>
                  <select
                    v-model="form.bankName"
                    class="form-control"
                    :class="{ 'is-invalid': errors.bankName }"
                    required
                  >
                    <option value="">ເລືອກທະນາຄານ</option>
                    <option v-for="bank in bankList" :key="bank.code" :value="bank.name">
                      {{ bank.name }}
                    </option>
                  </select>
                </div>
                <div v-if="errors.bankName" class="invalid-feedback">
                  {{ errors.bankName }}
                </div>
              </div>

              <!-- Bank Branch -->
              <div class="form-group">
                <label class="form-label">ສາຂາ</label>
                <div class="input-with-icon">
                  <i class="fas fa-map-marker-alt input-icon"></i>
                  <input
                    type="text"
                    v-model="form.bankBranch"
                    class="form-control"
                    placeholder="ໃສ່ຊື່ສາຂາ (ທາງເລືອກ)"
                  />
                </div>
              </div>
            </div>

            <div class="form-row">
              <!-- Account Type -->
              <div class="form-group">
                <label class="form-label required">ປະເພດບັນຊີ *</label>
                <div class="input-with-icon">
                  <i class="fas fa-list input-icon"></i>
                  <select
                    v-model="form.accountType"
                    class="form-control"
                    :class="{ 'is-invalid': errors.accountType }"
                    required
                  >
                    <option value="">ເລືອກປະເພດບັນຊີ</option>
                    <option value="Saving">Saving Account</option>
                    <option value="Current">Current Account</option>
                    <option value="Fixed Deposit">Fixed Deposit</option>
                  </select>
                </div>
                <div v-if="errors.accountType" class="invalid-feedback">
                  {{ errors.accountType }}
                </div>
              </div>

              <!-- Currency -->
              <div class="form-group">
                <label class="form-label required">ສະກຸນເງິນ *</label>
                <div class="input-with-icon">
                  <i class="fas fa-dollar-sign input-icon"></i>
                  <select
                    v-model="form.currency"
                    class="form-control"
                    :class="{ 'is-invalid': errors.currency }"
                    required
                  >
                    <option value="">ເລືອກສະກຸນເງິນ</option>
                    <option value="LAK">LAK - ກີບ</option>
                    <option value="USD">USD - ໂດລາ</option>
                    <option value="THB">THB - ບາດ</option>
                    <option value="CNY">CNY - ຢວນ</option>
                  </select>
                </div>
                <div v-if="errors.currency" class="invalid-feedback">
                  {{ errors.currency }}
                </div>
              </div>
            </div>

            <!-- Status -->
            <div class="form-group">
              <label class="form-label">ສະຖານະ</label>
              <div class="status-toggle">
                <label class="toggle-switch">
                  <input
                    type="checkbox"
                    v-model="form.isActive"
                    class="toggle-input"
                  />
                  <span class="toggle-slider"></span>
                </label>
                <span class="toggle-label">
                  {{ form.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                </span>
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="closeModal"
            :disabled="loading"
          >
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          
          <button
            type="button"
            class="btn btn-primary"
            @click="saveAccount"
            :disabled="loading || !isFormValid"
          >
            <i v-if="loading" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i>
            {{ isEdit ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankAccountDialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    account: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      showModal: false,
      loading: false,

      form: {
        accountNumber: '',
        accountName: '',
        bankName: '',
        bankBranch: '',
        accountType: '',
        currency: 'LAK',
        isActive: true,
      },

      errors: {},

      // Bank list for dropdown
      bankList: [
        { code: 'BCEL', name: 'ທະນາຄານການຄ້າຕ່າງປະເທດລາວ (BCEL)' },
        { code: 'LDB', name: 'ທະນາຄານພັດທະນາລາວ (LDB)' },
        { code: 'APB', name: 'ທະນາຄານກະເສດຊາວກະສິກອນ (APB)' },
        { code: 'JDB', name: 'ທະນາຄານຮ່ວມພັດທະນາລາວ-ຫວຽດ (JDB)' },
        { code: 'LVB', name: 'ທະນາຄານລາວ-ຫວຽດ (LVB)' },
        { code: 'IBL', name: 'ທະນາຄານອຸດສາຫະກຳ (IBL)' },
        { code: 'STB', name: 'ທະນາຄານເສດຖະກິດລາວ (STB)' },
        { code: 'MPB', name: 'ທະນາຄານມະຫາຊົນ (MPB)' },
        { code: 'LXB', name: 'ທະນາຄານລາວ-ຈີນ (LXB)' },
        { code: 'BMB', name: 'ທະນາຄານເມືອງເຮືອງ (BMB)' },
        { code: 'KKB', name: 'ທະນາຄານຂົງໄຂ (KKB)' },
        { code: 'SACOM', name: 'ທະນາຄານສະຫະກອນ (SACOM)' },
        { code: 'OTHER', name: 'ອື່ນໆ' }
      ]
    }
  },

  computed: {
    isEdit() {
      return !!this.account && !!this.account.id
    },

    isFormValid() {
      return (
        this.form.accountNumber &&
        this.form.accountName &&
        this.form.bankName &&
        this.form.accountType &&
        this.form.currency &&
        Object.keys(this.errors).length === 0
      )
    },
  },

  watch: {
    show(newVal) {
      this.showModal = newVal
      if (newVal) {
        this.initializeForm()
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden'
      } else {
        // Restore body scroll when modal is closed
        document.body.style.overflow = ''
      }
    },

    // Watch form fields for validation
    'form.accountNumber'() {
      this.validateAccountNumber()
    },
    'form.accountName'() {
      this.validateAccountName()
    },
    'form.bankName'() {
      this.validateBankName()
    },
    'form.accountType'() {
      this.validateAccountType()
    },
    'form.currency'() {
      this.validateCurrency()
    },
  },

  beforeDestroy() {
    // Ensure body scroll is restored when component is destroyed
    document.body.style.overflow = ''
  },

  methods: {
    initializeForm() {
      this.errors = {}

      if (this.isEdit) {
        // Pre-populate form with existing account data
        this.form = {
          accountNumber: this.account.accountNumber || '',
          accountName: this.account.accountName || '',
          bankName: this.account.bankName || '',
          bankBranch: this.account.bankBranch || '',
          accountType: this.account.accountType || '',
          currency: this.account.currency || 'LAK',
          isActive: this.account.isActive !== undefined ? this.account.isActive : true,
        }
      } else {
        // Reset form for new account
        this.form = {
          accountNumber: '',
          accountName: '',
          bankName: '',
          bankBranch: '',
          accountType: '',
          currency: 'LAK',
          isActive: true,
        }
      }
    },

    // Validation methods
    validateAccountNumber() {
      if (!this.form.accountNumber) {
        this.$set(this.errors, 'accountNumber', 'ກະລຸນາໃສ່ເລກບັນຊີ')
      } else if (this.form.accountNumber.length < 5) {
        this.$set(this.errors, 'accountNumber', 'ເລກບັນຊີຕ້ອງມີຢ່າງນ້ອຍ 5 ຫຼັກ')
      } else if (!/^[0-9\-]+$/.test(this.form.accountNumber)) {
        this.$set(this.errors, 'accountNumber', 'ເລກບັນຊີຕ້ອງເປັນຕົວເລກເທົ່ານັ້ນ')
      } else {
        this.$delete(this.errors, 'accountNumber')
      }
    },

    validateAccountName() {
      if (!this.form.accountName) {
        this.$set(this.errors, 'accountName', 'ກະລຸນາໃສ່ຊື່ບັນຊີ')
      } else if (this.form.accountName.length < 2) {
        this.$set(this.errors, 'accountName', 'ຊື່ບັນຊີຕ້ອງມີຢ່າງນ້ອຍ 2 ຕົວອັກສອນ')
      } else {
        this.$delete(this.errors, 'accountName')
      }
    },

    validateBankName() {
      if (!this.form.bankName) {
        this.$set(this.errors, 'bankName', 'ກະລຸນາເລືອກທະນາຄານ')
      } else {
        this.$delete(this.errors, 'bankName')
      }
    },

    validateAccountType() {
      if (!this.form.accountType) {
        this.$set(this.errors, 'accountType', 'ກະລຸນາເລືອກປະເພດບັນຊີ')
      } else {
        this.$delete(this.errors, 'accountType')
      }
    },

    validateCurrency() {
      if (!this.form.currency) {
        this.$set(this.errors, 'currency', 'ກະລຸນາເລືອກສະກຸນເງິນ')
      } else {
        this.$delete(this.errors, 'currency')
      }
    },

    validateForm() {
      this.validateAccountNumber()
      this.validateAccountName()
      this.validateBankName()
      this.validateAccountType()
      this.validateCurrency()
      return Object.keys(this.errors).length === 0
    },

    async saveAccount() {
      if (!this.validateForm()) {
        this.showToast('ກະລຸນາກວດສອບຂໍ້ມູນທີ່ໃສ່ອີກຄັ້ງ', 'error')
        return
      }

      try {
        this.loading = true

        const accountData = {
          accountNumber: this.form.accountNumber.trim(),
          accountName: this.form.accountName.trim(),
          bankName: this.form.bankName,
          bankBranch: this.form.bankBranch ? this.form.bankBranch.trim() : null,
          accountType: this.form.accountType,
          currency: this.form.currency,
          isActive: this.form.isActive,
        }

        let response
        if (this.isEdit) {
          // Update existing account
          response = await this.$axios.put(
            `/api/bank_account/update/${this.account.id}`,
            accountData
          )
        } else {
          // Create new account
          response = await this.$axios.post('/api/bank_account/create', accountData)
        }

        // Check if response indicates success
        if (response.data && response.data.success !== false) {
          // Success case
          const successMessage = this.isEdit ? 'ອັບເດດຂໍ້ມູນສຳເລັດແລ້ວ' : 'ບັນທຶກຂໍ້ມູນສຳເລັດແລ້ວ'
          this.showToast(successMessage, 'success')
          
          // Emit saved event and close modal
          this.$emit('saved', response.data)
          this.closeModal()
        } else {
          // Handle API error response (when success: false)
          const errorMessage = response.data.message || 'ມີຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ'
          this.showToast(errorMessage, 'error')
        }

      } catch (error) {
        console.error('Error saving bank account:', error)
        
        // Handle different types of errors
        let errorMessage = 'ມີຂໍ້ຜິດພາດໃນການບັນທຶກຂໍ້ມູນ'
        
        if (error.response) {
          // Server responded with error status
          if (error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message
          } else if (error.response.status === 404) {
            errorMessage = 'ບໍ່ພົບຂໍ້ມູນທີ່ຕ້ອງການ'
          } else if (error.response.status === 403) {
            errorMessage = 'ບໍ່ມີສິດໃນການດຳເນີນການນີ້'
          } else if (error.response.status === 500) {
            errorMessage = 'ມີຂໍ້ຜິດພາດຈາກເຊີເວີ ກະລຸນາລອງໃໝ່ໃນພາຍຫຼັງ'
          } else if (error.response.status === 409) {
            errorMessage = 'ເລກບັນຊີນີ້ມີໃນລະບົບແລ້ວ'
          }
        } else if (error.request) {
          // Network error
          errorMessage = 'ບໍ່ສາມາດເຊື່ອມຕໍ່ກັບເຊີເວີໄດ້ ກະລຸນາກວດສອບການເຊື່ອມຕໍ່ອິນເຕີເນັດ'
        }
        
        this.showToast(errorMessage, 'error')
      } finally {
        this.loading = false
      }
    },

    closeModal() {
      this.showModal = false
      this.$emit('close')

      // Reset form after modal closes
      setTimeout(() => {
        this.initializeForm()
      }, 300)
    },

    showToast(message, type = 'info') {
      if (this.$swal) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: type === 'error' ? 5000 : 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        })

        const iconMap = {
          success: 'success',
          error: 'error',
          warning: 'warning',
          info: 'info'
        }

        Toast.fire({
          icon: iconMap[type] || 'info',
          title: message
        })
      } else {
        console.log(`${type}: ${message}`)
        alert(`${type.toUpperCase()}: ${message}`)
      }
    }
  }
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Modal Header */
.modal-header {
  padding: 20px 20px 16px 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px 8px 0 0;
}

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.modal-close-btn {
  background: none;
  border: none;
  font-size: 18px;
  color: #666;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.modal-close-btn:hover {
  background-color: #e9ecef;
  color: #333;
}

/* Modal Body */
.modal-body {
  padding: 24px;
}

.account-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
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

.input-with-icon {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 14px;
  z-index: 1;
}

.form-control {
  padding: 10px 12px 10px 40px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
  background-color: #fff;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.form-control.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
}

/* Status Toggle */
.status-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.toggle-slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.toggle-input:checked + .toggle-slider {
  background-color: #28a745;
}

.toggle-input:checked + .toggle-slider:before {
  transform: translateX(24px);
}

.toggle-label {
  font-weight: 500;
  color: #555;
}

/* Modal Footer */
.modal-footer {
  padding: 16px 24px 24px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
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
  .modal-overlay {
    padding: 10px;
  }

  .modal-container {
    max-height: 95vh;
  }

  .modal-header {
    padding: 16px;
  }

  .modal-body {
    padding: 20px 16px;
  }

  .modal-footer {
    padding: 12px 16px 16px 16px;
    flex-direction: column-reverse;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .modal-title {
    font-size: 18px;
  }

  .account-form {
    gap: 16px;
  }

  .form-group {
    gap: 6px;
  }

  .toggle-switch {
    width: 40px;
    height: 20px;
  }

  .toggle-slider:before {
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
  }

  .toggle-input:checked + .toggle-slider:before {
    transform: translateX(20px);
  }
}
</style>