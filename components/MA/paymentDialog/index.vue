<template>
  <div v-if="show" class="modal-overlay" @click="closeDialog">
    <div class="modal-dialog enhanced-dialog" @click.stop>
      <div class="modal-header">
        <div class="modal-title-section">
          <i class="fas fa-money-bill-wave modal-icon"></i>
          <h5 class="modal-title">
            {{ isEdit ? 'ແກ້ໄຂລາຍຈ່າຍ' : 'ລົງບັນຊີລາຍຈ່າຍ' }}
          </h5>
        </div>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <form @submit.prevent="saveAdvance">
        <div class="modal-body">
          <!-- Loading state for form data -->
          <div v-if="formLoading" class="form-loading">
            <div class="spinner-small"></div>
            <p>Loading form data...</p>
          </div>

          <div v-else class="form-grid">
            <!-- Amount Field -->
            <div class="form-group full-width">
              <label class="form-label required">
                <i class="fas fa-dollar-sign"></i>
                ຈຳນວນເງິນ
              </label>
              <div class="input-group">
                <input
                  v-model="localForm.amount"
                  type="number"
                  step="0.01"
                  min="0"
                  class="form-control"
                  placeholder="Enter amount"
                  required
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    {{ selectedCurrencyCode }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Booking Date -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-calendar"></i>
                Booking date
              </label>
              <input
                v-model="localForm.bookingDate"
                type="date"
                class="form-control"
                :max="today"
                required
              />
            </div>

            <!-- User Selection -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-user"></i>
                ຜູ້ໃຊ້
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="localForm.makerId"
                  class="form-control custom-select"
                  required
                >
                  <option value="">ເລືອກຜູ້ລົງ</option>
                  <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.cus_name }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="users.length === 0" class="field-hint error">
                <i class="fas fa-exclamation-triangle"></i>
                No users available. Please contact administrator.
              </div>
            </div>

            <!-- Ministry Selection -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-building"></i>
                ກົມ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="localForm.ministryId"
                  class="form-control custom-select"
                  @change="updateSelectedMinistry"
                >
                  <option value="">ເລືອກກົມ (ທາງເລືອກ)</option>
                  <option
                    v-for="ministry in ministries"
                    :key="ministry.id"
                    :value="ministry.id"
                  >
                    {{ ministry.ministryCode + ' ' + ministry.ministryName }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="selectedMinistry" class="ministry-info">
                <div class="ministry-details">
                  <div class="ministry-detail-item">
                    <i class="fas fa-building"></i>
                    <span class="ministry-name">{{
                      selectedMinistry.name
                    }}</span>
                  </div>
                  <div
                    v-if="selectedMinistry.code"
                    class="ministry-detail-item"
                  >
                    <i class="fas fa-tag"></i>
                    <span class="ministry-code">{{
                      selectedMinistry.code
                    }}</span>
                  </div>
                  <div
                    v-if="selectedMinistry.description"
                    class="ministry-detail-item"
                  >
                    <i class="fas fa-info-circle"></i>
                    <span class="ministry-description">{{
                      selectedMinistry.description
                    }}</span>
                  </div>
                  <div
                    v-if="selectedMinistry.contact"
                    class="ministry-detail-item"
                  >
                    <i class="fas fa-phone"></i>
                    <span class="ministry-contact">{{
                      selectedMinistry.contact
                    }}</span>
                  </div>
                </div>
              </div>
              <div v-if="ministries.length === 0" class="field-hint warning">
                <i class="fas fa-info-circle"></i>
                No ministries available. You can still create the advance
                without selecting a ministry.
              </div>
            </div>

            <!-- Currency Selection -->
            <div class="form-group">
              <label class="form-label required">
                <i class="fas fa-coins"></i>
                ສະກຸນເງິນ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="localForm.currencyId"
                  class="form-control custom-select"
                  required
                  @change="updateSelectedCurrency"
                >
                  <option value="">ເລືອກສະກຸນເງິນ</option>
                  <option
                    v-for="currency in currencies"
                    :key="currency.id"
                    :value="currency.id"
                  >
                    {{ currency.code }} - {{ currency.name }}
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="currencies.length === 0" class="field-hint error">
                <i class="fas fa-exclamation-triangle"></i>
                No currencies available. Please contact administrator.
              </div>
            </div>

            <!-- Bank Account Selection -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-university"></i>
                ບັນຊີທະນາຄານ
              </label>
              <div class="custom-select-wrapper">
                <select
                  v-model="localForm.bankAccountId"
                  class="form-control custom-select"
                  @change="updateSelectedBankAccount"
                >
                  <option value="">ເລືອກບັນຊີທະນາຄານ (ທາງເລືອກ)</option>
                  <option
                    v-for="account in filteredBankAccounts"
                    :key="account.id"
                    :value="account.id"
                  >
                    {{ account.bankName }} - {{ account.accountNumber }} ({{
                      account.accountName
                    }})
                  </option>
                </select>
                <div class="select-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div v-if="selectedBankAccount" class="bank-account-info">
                <div class="bank-details">
                  <div class="bank-detail-item">
                    <i class="fas fa-building"></i>
                    <span>{{ selectedBankAccount.bankName }}</span>
                    <span v-if="selectedBankAccount.bankBranch" class="branch">
                      ({{ selectedBankAccount.bankBranch }})
                    </span>
                  </div>
                  <div class="bank-detail-item">
                    <i class="fas fa-credit-card"></i>
                    <span>{{ selectedBankAccount.accountNumber }}</span>
                  </div>
                  <div class="bank-detail-item">
                    <i class="fas fa-tag"></i>
                    <span>{{ selectedBankAccount.accountType }}</span>
                  </div>
                  <div class="bank-detail-item">
                    <i class="fas fa-coins"></i>
                    <span>{{ selectedBankAccount.currency }}</span>
                  </div>
                </div>
              </div>
              <div v-if="bankAccounts.length === 0" class="field-hint warning">
                <i class="fas fa-info-circle"></i>
                No bank accounts available. You can still create the advance
                without selecting a bank account.
              </div>
            </div>

            <!-- Purpose Field -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-tag"></i>
                ຈຸດປະສົງ
              </label>
              <input
                v-model="localForm.purpose"
                type="text"
                class="form-control"
                placeholder="ເນື້ອໃນ ການອອກລາຍຈ່າຍ"
                maxlength="255"
              />
              <div class="field-hint">
                <span class="text-counter"
                  >{{ localForm.purpose?.length || 0 }}/255</span
                >
              </div>
            </div>

            <!-- Due Date -->
            <div class="form-group">
              <label class="form-label">
                <i class="fas fa-calendar-alt"></i>
                ວັນຄົບຮອບຄວນຊຳລະ
              </label>
              <input
                v-model="localForm.dueDate"
                type="date"
                class="form-control"
                :min="today"
              />
            </div>

            <!-- Notes Field -->
            <div class="form-group full-width">
              <label class="form-label">
                <i class="fas fa-sticky-note"></i>
                ໂນ໊ດ
              </label>
              <textarea
                v-model="localForm.note"
                class="form-control"
                rows="3"
                placeholder="ລາຍລະອຽດເພີ່ມເຕີມ..."
                maxlength="500"
              ></textarea>
              <div class="field-hint">
                <span class="text-counter"
                  >{{ localForm.note?.length || 0 }}/500</span
                >
              </div>
            </div>
          </div>

          <!-- Form Validation Errors -->
          <div v-if="formErrors.length > 0" class="form-errors">
            <h6>
              <i class="fas fa-exclamation-circle"></i>
              Please fix the following errors:
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
            :disabled="saving"
          >
            <i class="fas fa-times"></i>
            ອອກ
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="saving || formLoading || !isFormValid"
          >
            <i v-if="saving" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas" :class="isEdit ? 'fa-save' : 'fa-plus'"></i>
            {{ saving ? 'Saving...' : isEdit ? 'ບັນທຶກ ການແກ້ໄຂ' : 'ບັນທຶກ' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoneyAdvanceDialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    formData: {
      type: Object,
      default: () => ({
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
      }),
    },
    users: {
      type: Array,
      default: () => [],
    },
    currencies: {
      type: Array,
      default: () => [],
    },
    bankAccounts: {
      type: Array,
      default: () => [],
    },
    ministries: {
      type: Array,
      default: () => [],
    },
    formLoading: {
      type: Boolean,
      default: false,
    },
    saving: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      localForm: {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
      },
      formErrors: [],
    }
  },

  computed: {
    selectedCurrencyCode() {
      if (!this.localForm.currencyId) return 'USD'
      const currency = this.currencies.find(
        (c) => c.id == this.localForm.currencyId
      )
      return currency ? currency.code : 'USD'
    },

    selectedBankAccount() {
      if (!this.localForm.bankAccountId) return null
      return this.bankAccounts.find(
        (account) => account.id == this.localForm.bankAccountId
      )
    },

    selectedMinistry() {
      if (!this.localForm.ministryId) return null
      return this.ministries.find(
        (ministry) => ministry.id == this.localForm.ministryId
      )
    },

    selectedCurrency() {
      if (!this.localForm.currencyId) return null
      return this.currencies.find(
        (currency) => currency.id == this.localForm.currencyId
      )
    },

    // Filter bank accounts by selected currency if possible
    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts
      }

      const currencyCode = this.selectedCurrency.code
      const filtered = this.bankAccounts.filter(
        (account) => account.currency === currencyCode || !account.currency
      )

      // If no accounts match the currency, return all accounts
      return filtered.length > 0 ? filtered : this.bankAccounts
    },

    today() {
      return new Date().toISOString().split('T')[0]
    },

    isFormValid() {
      return (
        this.localForm.amount &&
        parseFloat(this.localForm.amount) > 0 &&
        this.localForm.makerId &&
        this.localForm.currencyId &&
        this.localForm.bookingDate &&
        this.users.length > 0 &&
        this.currencies.length > 0
      )
    },
  },

  watch: {
    show(newVal) {
      if (newVal) {
        this.initForm()
      }
    },

    formData: {
      handler(newVal) {
        if (newVal) {
          this.localForm = { ...newVal }
        }
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    initForm() {
      this.formErrors = []

      if (this.isEdit && this.formData) {
        this.localForm = { ...this.formData }
      } else {
        this.resetForm()
        // Set default booking date to today
        this.localForm.bookingDate = this.today
        // Set default currency if available
        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'USD') || this.currencies[0]
          this.localForm.currencyId = defaultCurrency.id
        }
      }
    },

    resetForm() {
      this.localForm = {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: '',
      }
    },

    validateForm() {
      this.formErrors = []

      if (!this.localForm.amount || parseFloat(this.localForm.amount) <= 0) {
        this.formErrors.push('Amount is required and must be greater than 0')
      }

      if (!this.localForm.makerId) {
        this.formErrors.push('User selection is required')
      }

      if (!this.localForm.currencyId) {
        this.formErrors.push('Currency selection is required')
      }

      if (!this.localForm.bookingDate) {
        this.formErrors.push('Booking date is required')
      }

      if (this.localForm.purpose && this.localForm.purpose.length > 255) {
        this.formErrors.push('Purpose must not exceed 255 characters')
      }

      if (this.localForm.note && this.localForm.note.length > 500) {
        this.formErrors.push('Note must not exceed 500 characters')
      }

      if (this.users.length === 0) {
        this.formErrors.push(
          'No users available. Please contact administrator.'
        )
      }

      if (this.currencies.length === 0) {
        this.formErrors.push(
          'No currencies available. Please contact administrator.'
        )
      }

      return this.formErrors.length === 0
    },

    updateSelectedCurrency() {
      // Reset bank account if currency changes and current bank account doesn't match
      if (this.selectedBankAccount && this.selectedCurrency) {
        const bankCurrency = this.selectedBankAccount.currency
        const selectedCurrency = this.selectedCurrency.code

        if (bankCurrency && bankCurrency !== selectedCurrency) {
          this.localForm.bankAccountId = ''
        }
      }

      this.$emit('currency-changed', this.localForm.currencyId)
    },

    updateSelectedBankAccount() {
      this.$emit('bank-account-changed', this.localForm.bankAccountId)
    },

    updateSelectedMinistry() {
      this.$emit('ministry-changed', this.localForm.ministryId)
    },

    closeDialog() {
      this.$emit('close')
    },

    saveAdvance() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'Please fix the form errors')
        return
      }

      // Clean up empty values
      const formData = { ...this.localForm }
      if (!formData.ministryId) delete formData.ministryId
      if (!formData.bankAccountId) delete formData.bankAccountId
      if (!formData.dueDate) delete formData.dueDate
      if (!formData.purpose) delete formData.purpose
      if (!formData.note) delete formData.note

      this.$emit('save', formData)
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

.form-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #666;
}

.spinner-small {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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

.input-group {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
}

.input-group .form-control {
  border-radius: 0;
  border-right: none;
}

.input-group-append {
  display: flex;
}

.input-group-text {
  background: #f8f9fa;
  border: 2px solid #e5e7eb;
  border-left: none;
  padding: 12px 16px;
  font-weight: 600;
  color: #6b7280;
  font-size: 14px;
}

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

.field-hint {
  margin-top: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
}

.field-hint.error {
  color: #e74c3c;
}

.field-hint.warning {
  color: #f39c12;
}

.text-counter {
  color: #9ca3af;
  font-size: 11px;
  margin-left: auto;
}

/* Ministry Info Styles */
.ministry-info {
  margin-top: 12px;
  padding: 12px;
  background: #f0f9ff;
  border-radius: 8px;
  border: 1px solid #bae6fd;
}

.ministry-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.ministry-detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #075985;
}

.ministry-detail-item i {
  color: #0ea5e9;
  width: 14px;
  flex-shrink: 0;
}

.ministry-name {
  font-weight: 600;
}

.ministry-code {
  font-family: monospace;
  background: #e0f2fe;
  padding: 2px 6px;
  border-radius: 4px;
}

.ministry-description {
  font-style: italic;
  color: #0369a1;
}

.ministry-contact {
  font-family: monospace;
}

/* Bank Account Info Styles */
.bank-account-info {
  margin-top: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.bank-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.bank-detail-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
}

.bank-detail-item i {
  color: #667eea;
  width: 12px;
}

.bank-detail-item .branch {
  font-style: italic;
  color: #9ca3af;
}

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

.enhanced-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

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

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-dialog {
    width: 98%;
    margin: 10px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .bank-details {
    grid-template-columns: 1fr;
  }

  .ministry-details {
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