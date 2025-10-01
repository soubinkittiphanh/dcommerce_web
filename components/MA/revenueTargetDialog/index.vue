<template>
  <div v-if="show" class="dialog-overlay" @click="handleOverlayClick">
    <div class="dialog-container" @click.stop>
      <div class="dialog-header">
        <h2 class="dialog-title">
          {{ target ? 'ແກ້ໄຂເປົ້າໝາຍລາຍຮັບ' : 'ສ້າງເປົ້າໝາຍລາຍຮັບ' }}
        </h2>
        <button class="dialog-close" @click="closeDialog">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="dialog-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label for="name" class="required">ຊື່ເປົ້າໝາຍລາຍຮັບ</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.name }"
                placeholder="ກະລຸນາໃສ່ຊື່ເປົ້າໝາຍ"
                required
              />
              <div v-if="errors.name" class="invalid-feedback">
                {{ errors.name }}
              </div>
            </div>

            <div class="form-group">
              <label for="year" class="required">ປີ</label>
              <select
                id="year"
                v-model="form.year"
                class="form-control"
                :class="{ 'is-invalid': errors.year }"
                required
              >
                <option value="">ເລືອກປີ</option>
                <option v-for="year in availableYears" :key="year" :value="year">
                  {{ year }}
                </option>
              </select>
              <div v-if="errors.year" class="invalid-feedback">
                {{ errors.year }}
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="parentMinistryId" class="required">ກະຊວງ/ຫົວໜ່ວຍງານ</label>
              <select
                id="parentMinistryId"
                v-model="form.parentMinistryId"
                class="form-control"
                :class="{ 'is-invalid': errors.parentMinistryId }"
                required
              >
                <option value="">ເລືອກກະຊວງ/ຫົວໜ່ວຍງານ</option>
                <option
                  v-for="ministry in ministries"
                  :key="ministry.id"
                  :value="ministry.id"
                >
                  {{ ministry.ministryCode }} ({{ ministry.ministryName }})
                </option>
              </select>
              <div v-if="errors.parentMinistryId" class="invalid-feedback">
                {{ errors.parentMinistryId }}
              </div>
            </div>

            <div class="form-group">
              <label for="chartAccountId" class="required">ບັນຊີລາຍຮັບ</label>
              <select
                id="chartAccountId"
                v-model="form.chartAccountId"
                class="form-control"
                :class="{ 'is-invalid': errors.chartAccountId }"
                required
              >
                <option value="">ເລືອກບັນຊີລາຍຮັບ </option>
                <option
                  v-for="account in chartAccounts"
                  :key="account.id"
                  :value="account.id"
                >
                  {{ account.accountNumber }} - {{ account.accountName }}
                </option>
              </select>
              <div v-if="errors.chartAccountId" class="invalid-feedback">
                {{ errors.chartAccountId }}
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="currencyId" class="required">ສະກຸນເງິນ</label>
              <select
                id="currencyId"
                v-model="form.currencyId"
                class="form-control"
                :class="{ 'is-invalid': errors.currencyId }"
                @change="onCurrencyChange"
                required
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
              <div v-if="errors.currencyId" class="invalid-feedback">
                {{ errors.currencyId }}
              </div>
            </div>

            <div class="form-group">
              <label for="exchangeRate" class="required">
                ອັດຕາແລກປ່ຽນ
                <span v-if="selectedCurrency" class="exchange-rate-info">
                  ({{ selectedCurrency.code }} to LAK)
                </span>
              </label>
              <div class="exchange-rate-wrapper">
                <input
                  id="exchangeRate"
                  v-model="form.exchangeRate"
                  type="number"
                  step="0.01"
                  min="1"
                  class="form-control"
                  :class="{ 'is-invalid': errors.exchangeRate }"
                  :placeholder="selectedCurrency ? `Rate for ${selectedCurrency.code}` : '1.00'"
                  :readonly="isExchangeRateReadonly"
                  required
                />
                <button
                  v-if="selectedCurrency && selectedCurrency.code !== 'LAK'"
                  type="button"
                  class="btn-refresh-rate"
                  @click="refreshExchangeRate"
                  :disabled="refreshingRate"
                  :title="'ອັບເດດອັດຕາແລກປ່ຽນ ' + selectedCurrency.code"
                >
                  <i :class="['fas', refreshingRate ? 'fa-spinner fa-spin' : 'fa-sync-alt']"></i>
                </button>
              </div>
              <div v-if="errors.exchangeRate" class="invalid-feedback">
                {{ errors.exchangeRate }}
              </div>
              <div v-if="exchangeRateUpdated" class="exchange-rate-updated">
                <i class="fas fa-check-circle"></i>
                ອັດຕາແລກປ່ຽນໄດ້ຮັບການອັບເດດ
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="targetAmount" class="required">ຈຳນວນເປົ້າໝາຍ</label>
              <input
                id="targetAmount"
                v-model="form.targetAmount"
                type="number"
                step="0.01"
                min="0"
                class="form-control"
                :class="{ 'is-invalid': errors.targetAmount }"
                placeholder="0.00"
                required
              />
              <div v-if="errors.targetAmount" class="invalid-feedback">
                {{ errors.targetAmount }}
              </div>
            </div>

            <!-- <div class="form-group">
              <label for="isActive">ສະຖານະ</label>
              <div class="checkbox-wrapper">
                <input
                  id="isActive"
                  v-model="form.isActive"
                  type="checkbox"
                  class="form-checkbox"
                />
                <label for="isActive" class="checkbox-label">
                  ເປີດໃຊ້ງານ
                </label>
              </div>
            </div> -->
          </div>

          <div class="form-group">
            <label for="remark">ຫມາຍເຫດ</label>
            <textarea
              id="remark"
              v-model="form.remark"
              class="form-control"
              rows="3"
              placeholder="ໃສ່ຫມາຍເຫດ (ຖ້າມີ)..."
            ></textarea>
          </div>

          <!-- Calculated Values Display -->
          <div v-if="form.targetAmount && form.exchangeRate" class="calculation-section">
            <h4>ການຄິດໄລ່</h4>
            <div class="calculation-grid">
              <div class="calculation-item">
                <label>ຍອດເປົ້າໝາຍເປັນ LAK:</label>
                <span class="calculation-value">
                  {{ formatCurrency(calculateLAKAmount()) }}
                </span>
              </div>
              <div class="calculation-item">
                <label>ຍອດເປົ້າໝາຍເປັນ USD:</label>
                <span class="calculation-value">
                  {{ formatUSD(calculateUSDAmount()) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Display Selected Information -->
          <div v-if="selectedMinistry || selectedChartAccount || selectedCurrency" class="selected-info-section">
            <h4>ຂໍ້ມູນທີ່ເລືອກ</h4>
            <div class="info-grid">
              <div v-if="selectedMinistry" class="info-item">
                <label>ກະຊວງ/ຫົວໜ່ວຍງານ:</label>
                <span class="info-value">
                  {{ selectedMinistry.ministryCode }} ({{ selectedMinistry.ministryName }})
                </span>
              </div>
              <div v-if="selectedChartAccount" class="info-item">
                <label>ບັນຊີລາຍຮັບ:</label>
                <span class="info-value">
                  {{ selectedChartAccount.accountNumber }} - {{ selectedChartAccount.accountName }}
                </span>
              </div>
              <div v-if="selectedCurrency" class="info-item">
                <label>ສະກຸນເງິນ:</label>
                <span class="info-value">
                  {{ selectedCurrency.code }} - {{ selectedCurrency.name }}
                  <span v-if="selectedCurrency.rate" class="currency-rate">
                    (Rate: {{ selectedCurrency.rate }})
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div class="dialog-footer">
            <button type="button" class="btn btn-secondary" @click="closeDialog">
              ຍົກເລີກ
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="formLoading || !isFormValid"
            >
              <i v-if="formLoading" class="fas fa-spinner fa-spin"></i>
              {{ target ? 'ອັບເດດ' : 'ບັນທຶກ' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RevenueTargetDialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    target: {
      type: Object,
      default: null,
    },
    currencies: {
      type: Array,
      default: () => [],
    },
    ministries: {
      type: Array,
      default: () => [],
    },
    chartAccounts: {
      type: Array,
      default: () => [],
    },
    formLoading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      form: {
        name: '',
        year: '',
        targetAmount: '',
        exchangeRate: '',
        currencyId: '',
        parentMinistryId: '',
        chartAccountId: '',
        remark: '',
        isActive: true,
      },
      errors: {},
      currentYear: new Date().getFullYear(),
      refreshingRate: false,
      exchangeRateUpdated: false,
      manualRateChange: false,
    }
  },

  computed: {
    availableYears() {
      const years = []
      for (let i = 0; i < 10; i++) {
        years.push(this.currentYear + i)
      }
      return years
    },

    isFormValid() {
      return (
        this.form.name &&
        this.form.year &&
        this.form.targetAmount &&
        this.form.exchangeRate &&
        this.form.currencyId &&
        this.form.parentMinistryId &&
        this.form.chartAccountId &&
        parseFloat(this.form.targetAmount) >= 0 &&
        parseFloat(this.form.exchangeRate) >= 1
      )
    },

    selectedMinistry() {
      return this.ministries.find(m => m.id === parseInt(this.form.parentMinistryId))
    },

    selectedChartAccount() {
      return this.chartAccounts.find(a => a.id === parseInt(this.form.chartAccountId))
    },

    selectedCurrency() {
      return this.currencies.find(c => c.id === parseInt(this.form.currencyId))
    },

    isExchangeRateReadonly() {
      // Make exchange rate readonly for LAK currency since it should always be 1
      return this.selectedCurrency && this.selectedCurrency.code === 'LAK'
    },
  },

  watch: {
    show(newVal) {
      if (newVal) {
        this.initializeForm()
      }
    },

    target: {
      handler() {
        if (this.show) {
          this.initializeForm()
        }
      },
      deep: true,
    },

    'form.exchangeRate'() {
      // Reset the update indicator when user manually changes the rate
      if (!this.refreshingRate) {
        this.exchangeRateUpdated = false
      }
    },
  },

  methods: {
    initializeForm() {
      if (this.target) {
        // Edit mode
        this.form = {
          name: this.target.name || '',
          year: this.target.year || '',
          targetAmount: this.target.targetAmount || '',
          exchangeRate: this.target.exchangeRate || '',
          currencyId: this.target.currencyId || '',
          parentMinistryId: this.target.parentMinistryId || '',
          chartAccountId: this.target.chartAccountId || '',
          remark: this.target.remark || '',
          isActive: this.target.isActive !== false,
        }
        // Set initial exchange rate if currency is already selected
        this.$nextTick(() => {
          if (this.form.currencyId) {
            this.updateExchangeRateFromCurrency()
          }
        })
      } else {
        // Create mode
        this.form = {
          name: '',
          year: this.currentYear,
          targetAmount: '',
          exchangeRate: '',
          currencyId: '',
          parentMinistryId: '',
          chartAccountId: '',
          remark: '',
          isActive: true,
        }
      }
      this.errors = {}
      this.exchangeRateUpdated = false
      this.manualRateChange = false
    },

    onCurrencyChange() {
      this.updateExchangeRateFromCurrency()
    },

    updateExchangeRateFromCurrency() {
      const currency = this.selectedCurrency
      console.log(`currency ${JSON.stringify( this.currencies )}`)
      console.log(`Exchange rate ${currency.rate}`)
      if (currency) {
        if (currency.code === 'LAK') {
          // LAK to LAK rate is always 1
          this.form.exchangeRate = '1'
        } else if (currency.rate) {
          // Use the rate from currency object
          this.form.exchangeRate = currency.rate.toString()
        } else if (currency.exchangeRate) {
          // Alternative property name for exchange rate
          this.form.exchangeRate = currency.exchangeRate.toString()
        } else {
          // Default rates for common currencies if no rate is provided
          const defaultRates = {
            'USD': '21000',
            'EUR': '23000',
            'THB': '600',
            'CNY': '2900',
            'VND': '0.85',
          }
          this.form.exchangeRate = defaultRates[currency.code] || '1'
        }
        
        // Clear validation errors for exchange rate
        if (this.errors.exchangeRate) {
          delete this.errors.exchangeRate
        }
      }
    },

    async refreshExchangeRate() {
      if (!this.selectedCurrency || this.selectedCurrency.code === 'LAK') return

      this.refreshingRate = true
      this.exchangeRateUpdated = false

      try {
        // Emit event to parent to fetch latest exchange rate
        this.$emit('refresh-exchange-rate', {
          currencyId: this.selectedCurrency.id,
          currencyCode: this.selectedCurrency.code,
          callback: this.handleExchangeRateUpdate
        })
      } catch (error) {
        console.error('Error refreshing exchange rate:', error)
        this.$emit('show-error', 'ບໍ່ສາມາດອັບເດດອັດຕາແລກປ່ຽນໄດ້')
      } finally {
        this.refreshingRate = false
      }
    },

    handleExchangeRateUpdate(newRate) {
      if (newRate && newRate > 0) {
        this.form.exchangeRate = newRate.toString()
        this.exchangeRateUpdated = true
        
        // Hide the update indicator after 3 seconds
        setTimeout(() => {
          this.exchangeRateUpdated = false
        }, 3000)
      }
      this.refreshingRate = false
    },

    validateForm() {
      this.errors = {}

      if (!this.form.name || this.form.name.trim().length < 2) {
        this.errors.name = 'ຊື່ເປົ້າໝາຍຕ້ອງມີຢ່າງນ້ອຍ 2 ຕົວອັກສອນ'
      }

      if (!this.form.year) {
        this.errors.year = 'ກະລຸນາເລືອກປີ'
      }

      if (!this.form.targetAmount || parseFloat(this.form.targetAmount) < 0) {
        this.errors.targetAmount = 'ຈຳນວນເປົ້າໝາຍຕ້ອງເປັນຕົວເລກບວກ'
      }

      if (!this.form.exchangeRate || parseFloat(this.form.exchangeRate) < 1) {
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງເປັນຕົວເລກທີ່ມາກກວ່າ 1'
      }

      if (!this.form.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ'
      }

      if (!this.form.parentMinistryId) {
        this.errors.parentMinistryId = 'ກະລຸນາເລືອກກະຊວງ/ຫົວໜ່ວຍງານ'
      }

      if (!this.form.chartAccountId) {
        this.errors.chartAccountId = 'ກະລຸນາເລືອກບັນຊີລາຍຮັບ'
      }

      return Object.keys(this.errors).length === 0
    },

    async handleSubmit() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'ກະລຸນາແກ້ໄຂຂໍ້ຜິດພາດ')
        return
      }

      const formData = {
        name: this.form.name.trim(),
        year: parseInt(this.form.year),
        targetAmount: parseFloat(this.form.targetAmount),
        exchangeRate: parseFloat(this.form.exchangeRate),
        currencyId: parseInt(this.form.currencyId),
        parentMinistryId: parseInt(this.form.parentMinistryId),
        chartAccountId: parseInt(this.form.chartAccountId),
        remark: this.form.remark.trim(),
        isActive: this.form.isActive,
      }

      this.$emit('save', formData)
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    closeDialog() {
      this.$emit('close')
    },

    calculateLAKAmount() {
      const amount = parseFloat(this.form.targetAmount) || 0
      const rate = parseFloat(this.form.exchangeRate) || 1
      return amount * rate
    },

    calculateUSDAmount() {
      const amount = parseFloat(this.form.targetAmount) || 0
      const rate = parseFloat(this.form.exchangeRate) || 1
      
      // If the selected currency is USD, return the original amount
      if (this.selectedCurrency && this.selectedCurrency.code === 'USD') {
        return amount
      }
      
      // Convert to USD (assuming USD rate is around 21000 LAK)
      const usdRate = 21000
      const lakAmount = amount * rate
      return lakAmount / usdRate
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('lo-LA', {
        style: 'currency',
        currency: 'LAK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount || 0)
    },

    formatUSD(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },
  },
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
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.dialog-header {
  padding: 20px 24px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 12px 12px 0 0;
}

.dialog-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
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
  padding: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  font-size: 14px;
}

.form-group label.required::after {
  content: ' *';
  color: #dc3545;
}

.exchange-rate-info {
  font-weight: 400;
  color: #6c757d;
  font-size: 12px;
}

.exchange-rate-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-refresh-rate {
  background: #17a2b8;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
}

.btn-refresh-rate:hover:not(:disabled) {
  background: #138496;
}

.btn-refresh-rate:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.exchange-rate-updated {
  color: #28a745;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
}

.currency-rate {
  font-size: 12px;
  color: #6c757d;
}

.form-control {
  padding: 10px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
  background-color: white;
  flex: 1;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.form-control.is-invalid {
  border-color: #dc3545;
}

.form-control.is-invalid:focus {
  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
}

.form-control:readonly {
  background-color: #e9ecef;
  opacity: 1;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.form-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkbox-label {
  cursor: pointer;
  margin: 0;
  font-weight: normal;
}

.calculation-section {
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  margin: 20px 0;
}

.calculation-section h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #495057;
}

.calculation-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.calculation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.calculation-item label {
  font-size: 13px;
  color: #666;
  margin: 0;
}

.calculation-value {
  font-weight: 600;
  color: #28a745;
  font-size: 14px;
}

.selected-info-section {
  background-color: #e7f3ff;
  padding: 16px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #007bff;
}

.selected-info-section h4 {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #0056b3;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #b3d7ff;
}

.info-item label {
  font-size: 13px;
  color: #0056b3;
  margin: 0;
  font-weight: 500;
}

.info-value {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.dialog-footer {
  padding: 20px 24px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background-color: #f8f9fa;
  border-radius: 0 0 12px 12px;
}

.btn {
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn:disabled {
  opacity: 0.6;
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

.btn-secondary {
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #5a6268;
  border-color: #5a6268;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dialog-overlay {
    padding: 10px;
  }

  .dialog-container {
    max-width: 100%;
  }

  .dialog-header,
  .dialog-body,
  .dialog-footer {
    padding: 16px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .calculation-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .calculation-item,
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .dialog-footer {
    flex-direction: column-reverse;
    gap: 8px;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .exchange-rate-wrapper {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .btn-refresh-rate {
    align-self: flex-end;
    width: auto;
  }
}

@media (max-width: 480px) {
  .dialog-title {
    font-size: 18px;
  }

  .form-control {
    padding: 8px 10px;
    font-size: 16px; /* Prevents zoom on iOS */
  }

  .calculation-section,
  .selected-info-section {
    padding: 12px;
  }

  .calculation-item,
  .info-item {
    padding: 6px 8px;
  }
}

/* Animation */
.dialog-overlay {
  animation: fadeIn 0.3s ease;
}

.dialog-container {
  animation: slideIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>