<template>
  <div>
    <!-- Modal Overlay -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container enhanced-dialog" @click.stop>
        <div class="modal-header">
          <div class="modal-title-section">
            <i class="fas fa-money-check-alt modal-icon"></i>
            <h5 class="modal-title">
              {{ isEdit ? 'ແກ້ໄຂລາຍຮັບ' : 'ລົງລາຍຮັບ ການຊຳລະ' }}
            </h5>
          </div>
          <button class="close-btn" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <form @submit.prevent="saveSettlement">
          <div class="modal-body">
            <!-- Loading state for form data -->
            <div v-if="formLoading" class="form-loading">
              <div class="spinner-small"></div>
              <p>Loading form data...</p>
            </div>

            <div v-else class="form-grid">
              <!-- Booking Date Field -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-calendar-check"></i>
                  ວັນທີບັນທຶກ
                </label>
                <input
                  v-model="form.bookingDate"
                  type="date"
                  class="form-control"
                  :class="{ 'is-invalid': errors.bookingDate }"
                  :max="today"
                  required
                />
                <div v-if="errors.bookingDate" class="invalid-feedback">
                  {{ errors.bookingDate }}
                </div>
                <div class="field-hint">
                  <i class="fas fa-info-circle"></i>
                  ວັນທີທີ່ຕ້ອງການບັນທຶກລາຍການນີ້
                </div>
              </div>

              <!-- Settlement Date -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-calendar-alt"></i>
                  Time stamp
                </label>
                <input
                  v-model="form.settlementDate"
                  type="datetime-local"
                  class="form-control"
                  :min="minSettlementDate"
                />
                <div class="field-hint">
                  <i class="fas fa-info-circle"></i>
                  ວັນທີ ແລະ ເວລາທີ່ປະຕິບັດການຊຳລະຈິງ
                </div>
              </div>

              <!-- Amount Field -->
              <div class="form-group full-width">
                <label class="form-label required">
                  <i class="fas fa-dollar-sign"></i>
                  ຈຳນວນເງິນ
                </label>
                <div class="input-group">
                  <input
                    v-model="form.amount"
                    type="number"
                    step="0.01"
                    min="0"
                    class="form-control"
                    :class="{ 'is-invalid': errors.amount }"
                    placeholder="0.00"
                    required
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      {{ selectedCurrencyCode }}
                    </span>
                  </div>
                </div>
                <div v-if="errors.amount" class="invalid-feedback">
                  {{ errors.amount }}
                </div>
              </div>

              <!-- Settlement Method -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-credit-card"></i>
                  ວິທີການຊຳລະ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="form.method"
                    class="form-control custom-select"
                    :class="{ 'is-invalid': errors.method }"
                    required
                  >
                    <option value="">ເລືອກວິທີການຊຳລະ</option>
                    <option value="cash">Cash</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="deduction">Deduction</option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div v-if="errors.method" class="invalid-feedback">
                  {{ errors.method }}
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
                    v-model="form.currencyId"
                    class="form-control custom-select"
                    :class="{ 'is-invalid': errors.currencyId }"
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
                <div v-if="errors.currencyId" class="invalid-feedback">
                  {{ errors.currencyId }}
                </div>
                <div v-if="currencies.length === 0" class="field-hint error">
                  <i class="fas fa-exclamation-triangle"></i>
                  No currencies available. Please contact administrator.
                </div>
              </div>

              <!-- Proceeder Selection -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-user"></i>
                  ຜູ້ລົງບັນຊີ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="form.userId"
                    class="form-control custom-select"
                    :class="{ 'is-invalid': errors.userId }"
                    :disabled="formLoading"
                    required
                  >
                    <option value="">ເລືອກຜູ້ລົງບັນຊີ</option>
                    <option
                      v-for="user in users"
                      :key="user.id"
                      :value="user.id"
                    >
                      {{ user.name || user.cus_name }}
                    </option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div v-if="errors.userId" class="invalid-feedback">
                  {{ errors.userId }}
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
                    v-model="form.ministryId"
                    class="form-control custom-select"
                    :class="{ 'is-invalid': errors.ministryId }"
                    :disabled="loadingMinistries"
                    @change="updateSelectedMinistry"
                  >
                    <option value="">ເລືອກກົມ / ໜ່ວຍງານ (ທາງເລືອກ)</option>
                    <option
                      v-for="ministry in ministries"
                      :key="ministry.id"
                      :value="ministry.id"
                    >
                      {{ ministry.ministryCode }} - {{ ministry.ministryName }}
                    </option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div v-if="loadingMinistries" class="field-hint">
                  <i class="fas fa-spinner fa-spin"></i> Loading ministries...
                </div>
                <div
                  v-if="ministries.length === 0 && !loadingMinistries"
                  class="field-hint warning"
                >
                  <i class="fas fa-info-circle"></i>
                  No ministries available. You can still create the settlement
                  without selecting a ministry.
                </div>
                <div v-if="errors.ministryId" class="invalid-feedback">
                  {{ errors.ministryId }}
                </div>
              </div>

              <!-- Chart Account Selection -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-book"></i>
                  ບັນຊີລວມ (Chart Account)
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="form.chartAccountId"
                    class="form-control custom-select"
                    :class="{ 'is-invalid': errors.chartAccountId }"
                    :disabled="loadingChartAccounts"
                    @change="updateSelectedChartAccount"
                  >
                    <option value="">ເລືອກບັນຊີລວມ (ທາງເລືອກ)</option>
                    <option
                      v-for="chartAccount in chartAccounts"
                      :key="chartAccount.id"
                      :value="chartAccount.id"
                    >
                      {{ chartAccount.accountNumber }} -
                      {{ chartAccount.accountName }}
                    </option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div v-if="loadingChartAccounts" class="field-hint">
                  <i class="fas fa-spinner fa-spin"></i> Loading chart
                  accounts...
                </div>
                <div
                  v-if="chartAccounts.length === 0 && !loadingChartAccounts"
                  class="field-hint warning"
                >
                  <i class="fas fa-info-circle"></i>
                  No chart accounts available. You can still create the
                  settlement without selecting a chart account.
                </div>
                <div v-if="errors.chartAccountId" class="invalid-feedback">
                  {{ errors.chartAccountId }}
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
                    v-model="form.bankAccountId"
                    class="form-control custom-select"
                    @change="updateSelectedBankAccount"
                  >
                    <option value="">ເລືອກບັນຊີທະນາຄານ (ທາງເລືອກ)</option>
                    <option
                      v-for="account in bankAccounts"
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
                      <span
                        v-if="selectedBankAccount.bankBranch"
                        class="branch"
                      >
                        ({{ selectedBankAccount.bankBranch }})
                      </span>
                    </div>
                    <div class="bank-detail-item">
                      <i class="fas fa-credit-card"></i>
                      <span>{{ selectedBankAccount.accountNumber }}</span>
                    </div>
                    <div class="bank-detail-item">
                      <i class="fas fa-user"></i>
                      <span>{{ selectedBankAccount.accountName }}</span>
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
                <div
                  v-if="bankAccounts.length === 0"
                  class="field-hint warning"
                >
                  <i class="fas fa-info-circle"></i>
                  No bank accounts available. You can still create the
                  settlement without selecting a bank account.
                </div>
              </div>

              <!-- Money Advance Selection -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-link"></i>
                  ເຊື່ອມຕໍ່ກັບ ລາຍຈ່າຍ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="form.moneyAdvanceId"
                    class="form-control custom-select"
                    :disabled="loadingAdvances"
                  >
                    <option value="">ບໍ່ເຊື່ອມຕໍ່</option>
                    <option
                      v-for="advance in moneyAdvances"
                      :key="advance.id"
                      :value="advance.id"
                    >
                      {{ advance.displayText }}
                    </option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <div v-if="loadingAdvances" class="field-hint">
                  <i class="fas fa-spinner fa-spin"></i> Loading advances...
                </div>
                <!-- Debug info - remove in production -->
                <div
                  v-if="isEdit && showDebugInfo"
                  class="debug-info"
                  style="font-size: 12px; color: #666; margin-top: 5px"
                >
                  Debug - Expected ID: {{ settlement?.moneyAdvanceId }}, Current
                  Form ID: {{ form.moneyAdvanceId }} <br />Available IDs:
                  {{ moneyAdvances.map((a) => a.id).join(', ') }}
                </div>
              </div>

              <!-- Ministry Info Display -->
              <div v-if="selectedMinistry" class="form-group full-width">
                <div class="info-card ministry-info">
                  <div class="info-header">
                    <i class="fas fa-building"></i>
                    <span>ຂໍ້ມູນກະຊວງ / ໜ່ວຍງານ</span>
                  </div>
                  <div class="info-details">
                    <div class="info-item">
                      <span class="label">ລະຫັດ:</span>
                      <span class="value">{{
                        selectedMinistry.ministryCode
                      }}</span>
                    </div>
                    <div class="info-item">
                      <span class="label">ຊື່:</span>
                      <span class="value">{{
                        selectedMinistry.ministryName
                      }}</span>
                    </div>
                    <div v-if="selectedMinistry.description" class="info-item">
                      <span class="label">ລາຍລະອຽດ:</span>
                      <span class="value">{{
                        selectedMinistry.description
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Chart Account Info Display -->
              <div v-if="selectedChartAccount" class="form-group full-width">
                <div class="info-card chart-account-info">
                  <div class="info-header">
                    <i class="fas fa-book"></i>
                    <span>ຂໍ້ມູນບັນຊີລວມ</span>
                  </div>
                  <div class="info-details">
                    <div class="info-item">
                      <span class="label">ລະຫັດບັນຊີ:</span>
                      <span class="value">{{
                        selectedChartAccount.accountNumber
                      }}</span>
                    </div>
                    <div class="info-item">
                      <span class="label">ຊື່ບັນຊີ:</span>
                      <span class="value">{{
                        selectedChartAccount.accountName
                      }}</span>
                    </div>
                    <div
                      v-if="selectedChartAccount.accountType"
                      class="info-item"
                    >
                      <span class="label">ປະເພດ:</span>
                      <span class="value">{{
                        selectedChartAccount.accountType
                      }}</span>
                    </div>
                    <div class="info-item">
                      <span class="label">ສະຖານະ:</span>
                      <span class="value">{{
                        selectedChartAccount.isActive ? 'Active' : 'Inactive'
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Notes Field -->
              <div class="form-group full-width">
                <label class="form-label">
                  <i class="fas fa-sticky-note"></i>
                  ບັນທຶກເພີ່ມເຕີມ
                </label>
                <textarea
                  v-model="form.notes"
                  class="form-control"
                  rows="3"
                  placeholder="ບັນທຶກເພີ່ມເຕີມ..."
                ></textarea>
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
              @click="closeModal"
              class="btn btn-secondary"
              :disabled="loading"
            >
              <i class="fas fa-times"></i>
              ຍົກເລີກ
            </button>

            <!-- Print Button - Only show for existing settlements -->
            <button
              v-if="isEdit"
              type="button"
              class="btn btn-info"
              @click="printVoucher"
              :disabled="loading"
            >
              <i class="fas fa-print"></i>
              ພິມ
            </button>

            <button
              type="submit"
              class="btn btn-primary"
              :disabled="loading || formLoading || !isFormValid"
            >
              <i v-if="loading" class="fas fa-spinner fa-spin"></i>
              <i v-else class="fas" :class="isEdit ? 'fa-save' : 'fa-plus'"></i>
              {{
                loading ? 'Saving...' : isEdit ? 'ບັນທຶກ ການແກ້ໄຂ' : 'ບັນທຶກ'
              }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Voucher Print Component -->
    <VoucherPrintComponent
      v-if="showPrintDialog"
      :settlement="currentSettlement"
      @close="closePrintDialog"
    />
  </div>
</template>

<script>
export default {
  name: 'SettlementDialog',

  components: {
    VoucherPrintComponent: () => import('~/components/MA/paymentVoucher'),
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    settlement: {
      type: Object,
      default: null,
    },
    users: {
      type: Array,
      default: () => [],
      required: true,
    },
    currencies: {
      type: Array,
      default: () => [],
      required: true,
    },
    bankAccounts: {
      type: Array,
      default: () => [],
      required: true,
    },
    ministries: {
      type: Array,
      default: () => [],
      required: false,
    },
    chartAccounts: {
      type: Array,
      default: () => [],
      required: false,
    },
    formLoading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showModal: false,
      showPrintDialog: false,
      currentSettlement: null,
      loading: false,
      loadingAdvances: false,
      loadingMinistries: false,
      loadingChartAccounts: false,
      showDebugInfo: false, // Set to true for debugging

      form: {
        bookingDate: '',
        amount: '',
        method: '',
        userId: '',
        currencyId: '',
        bankAccountId: '',
        moneyAdvanceId: '',
        ministryId: '',
        chartAccountId: '',
        settlementDate: '',
        notes: '',
      },

      moneyAdvances: [],
      errors: {},
      formErrors: [],
    }
  },

  computed: {
    isEdit() {
      return !!this.settlement && !!this.settlement.id
    },

    selectedCurrencyCode() {
      if (!this.form.currencyId) return 'USD'
      const currency = this.currencies.find((c) => c.id == this.form.currencyId)
      return currency ? currency.code : 'USD'
    },

    selectedBankAccount() {
      if (!this.form.bankAccountId) return null
      return this.bankAccounts.find(
        (account) => account.id == this.form.bankAccountId
      )
    },

    selectedMinistry() {
      if (!this.form.ministryId) return null
      return this.ministries.find(
        (ministry) => ministry.id == this.form.ministryId
      )
    },

    selectedChartAccount() {
      if (!this.form.chartAccountId) return null
      return this.chartAccounts.find(
        (chartAccount) => chartAccount.id == this.form.chartAccountId
      )
    },

    today() {
      return new Date().toISOString().split('T')[0]
    },

    minSettlementDate() {
      // If booking date is set, settlement date should be >= booking date
      if (this.form.bookingDate) {
        return this.form.bookingDate + 'T00:00'
      }
      return null
    },

    isFormValid() {
      return (
        this.form.bookingDate &&
        this.form.amount &&
        this.form.method &&
        this.form.userId &&
        this.form.currencyId &&
        this.users.length > 0 &&
        this.currencies.length > 0 &&
        Object.keys(this.errors).length === 0
      )
    },
  },

  watch: {
    async show(newVal) {
      this.showModal = newVal
      if (newVal) {
        // Initialize form asynchronously to ensure proper loading order
        await this.initializeForm()
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },

    // Watch for prop changes
    users: {
      handler(newUsers) {
        console.log('Users updated:', newUsers.length)
      },
      immediate: true,
    },

    currencies: {
      handler(newCurrencies) {
        console.log('Currencies updated:', newCurrencies.length)
        if (newCurrencies.length > 0 && !this.form.currencyId && !this.isEdit) {
          const defaultCurrency =
            newCurrencies.find((c) => c.code === 'USD') || newCurrencies[0]
          this.form.currencyId = defaultCurrency.id
        }
      },
      immediate: true,
    },

    bankAccounts: {
      handler(newBankAccounts) {
        console.log('Bank accounts updated:', newBankAccounts.length)
      },
      immediate: true,
    },

    ministries: {
      handler(newMinistries) {
        console.log('Ministries updated:', newMinistries.length)
      },
      immediate: true,
    },

    chartAccounts: {
      handler(newChartAccounts) {
        console.log('Chart accounts updated:', newChartAccounts.length)
      },
      immediate: true,
    },

    // Add a watcher for moneyAdvances to validate the selected ID
    moneyAdvances: {
      handler(newAdvances) {
        console.log('MoneyAdvances updated:', newAdvances.length)
        this.validateMoneyAdvanceId()
      },
      immediate: true,
    },

    // Watch for changes in moneyAdvanceId
    'form.moneyAdvanceId': {
      handler(newVal) {
        console.log('MoneyAdvanceId changed to:', newVal)
        if (newVal) {
          const advance = this.moneyAdvances.find((a) => a.id == newVal)
          console.log('Selected advance:', advance)
        }
      },
      immediate: true,
    },

    // Form validation watchers
    'form.bookingDate'() {
      this.validateBookingDate()
    },
    'form.amount'() {
      this.validateAmount()
    },
    'form.method'() {
      this.validateMethod()
    },
    'form.userId'() {
      this.validateUser()
    },
    'form.currencyId'() {
      this.validateCurrency()
    },

    // Update settlement date min when booking date changes
    'form.bookingDate'(newBookingDate) {
      if (newBookingDate && this.form.settlementDate) {
        const bookingDateTime = new Date(newBookingDate + 'T00:00')
        const settlementDateTime = new Date(this.form.settlementDate)

        // If settlement date is before booking date, update it
        if (settlementDateTime < bookingDateTime) {
          this.form.settlementDate =
            newBookingDate + 'T' + settlementDateTime.toTimeString().slice(0, 5)
        }
      }
    },
  },

  mounted() {
    const now = new Date()
    const today = now.toISOString().split('T')[0]

    // Set default dates
    this.form.bookingDate = today
    this.form.settlementDate = now.toISOString().slice(0, 16)

    // Load ministries and chart accounts if not provided as props
    if (!this.ministries.length) {
      this.loadMinistries()
    }
    if (!this.chartAccounts.length) {
      this.loadChartAccounts()
    }
  },

  beforeDestroy() {
    document.body.style.overflow = ''
  },

  methods: {
    async initializeForm() {
      this.errors = {}
      this.formErrors = []

      // Load money advances first before initializing form
      await this.loadMoneyAdvances()

      if (this.isEdit && this.settlement) {
        console.log(
          'Initializing form for edit with settlement:',
          this.settlement
        )

        this.form = {
          bookingDate: this.settlement.bookingDate || this.today,
          amount: this.settlement.amount || '',
          method: this.settlement.method || '',
          userId: this.settlement.userId || this.settlement.proceeder?.id || '',
          currencyId: this.settlement.currencyId || '',
          bankAccountId: this.settlement.bankAccountId || '',
          moneyAdvanceId: this.settlement.moneyAdvanceId || '',
          ministryId: this.settlement.ministryId || '',
          chartAccountId: this.settlement.chartAccountId || '',
          settlementDate:
            this.settlement.settlementDate ||
            this.settlement.createdAt?.slice(0, 16) ||
            new Date().toISOString().slice(0, 16),
          notes: this.settlement.notes || '',
        }

        this.currentSettlement = this.settlement

        // Ensure moneyAdvanceId is properly set after loading advances
        if (this.settlement.moneyAdvanceId) {
          console.log(
            'Setting moneyAdvanceId from settlement:',
            this.settlement.moneyAdvanceId
          )

          // Use nextTick to ensure DOM is updated
          this.$nextTick(() => {
            // Ensure the ID is the correct type (string/number consistency)
            const advanceId = String(this.settlement.moneyAdvanceId)
            const numericAdvanceId = Number(this.settlement.moneyAdvanceId)

            // Check if the advance exists in our loaded list
            const foundAdvance = this.moneyAdvances.find(
              (advance) =>
                advance.id == advanceId || advance.id == numericAdvanceId
            )

            if (foundAdvance) {
              this.form.moneyAdvanceId = foundAdvance.id
              console.log('MoneyAdvanceId set to:', this.form.moneyAdvanceId)
            } else {
              console.warn(
                'MoneyAdvance not found in loaded advances:',
                this.settlement.moneyAdvanceId
              )
              console.log(
                'Available advances:',
                this.moneyAdvances.map((a) => ({ id: a.id, type: typeof a.id }))
              )
            }
          })
        }
      } else {
        this.resetForm()
        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'USD') || this.currencies[0]
          this.form.currencyId = defaultCurrency.id
        }
      }
    },

    resetForm() {
      const now = new Date()
      const today = now.toISOString().split('T')[0]

      this.form = {
        bookingDate: today,
        amount: '',
        method: '',
        userId: '',
        currencyId: '',
        bankAccountId: '',
        moneyAdvanceId: '',
        ministryId: '',
        chartAccountId: '',
        settlementDate: now.toISOString().slice(0, 16),
        notes: '',
      }
      this.errors = {}
      this.formErrors = []
    },

    async loadMoneyAdvances() {
      try {
        this.loadingAdvances = true
        console.log('Loading money advances...')

        const response = await this.$axios.get('/api/money-advances')
        console.log('Money advances API response:', response.data)

        if (
          response.data &&
          response.data.success &&
          response.data.data &&
          response.data.data.advances
        ) {
          this.moneyAdvances = response.data.data.advances.map((advance) => ({
            // Ensure consistent data type - convert to string for consistency
            id: String(advance.id),
            displayText: `#${advance.id} - ${this.formatCurrency(
              advance.amount,
              advance.currency?.code || 'USD'
            )} (${advance.status})`,
            originalId: advance.id, // Keep original for debugging
          }))

          console.log('Money advances loaded:', this.moneyAdvances)

          // If we're editing and have a settlement with moneyAdvanceId, validate it
          if (this.isEdit && this.settlement?.moneyAdvanceId) {
            console.log(
              'Looking for advance ID:',
              this.settlement.moneyAdvanceId
            )
            const foundAdvance = this.moneyAdvances.find(
              (advance) =>
                advance.id == this.settlement.moneyAdvanceId ||
                advance.originalId == this.settlement.moneyAdvanceId
            )
            console.log('Found advance:', foundAdvance)
          }
        } else {
          console.log('No money advances found in response')
          this.moneyAdvances = []
        }
      } catch (error) {
        console.error('Error loading money advances:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ Money Advance', 'error')
        this.moneyAdvances = []
      } finally {
        this.loadingAdvances = false
      }
    },

    async loadMinistries() {
      if (this.ministries.length > 0) return // Use props if available

      try {
        this.loadingMinistries = true
        console.log('Loading ministries...')

        const response = await this.$axios.get('/api/ministries')
        console.log('Ministries API response:', response.data)

        if (response.data && response.data.success && response.data.data) {
          this.$emit('ministries-loaded', response.data.data)
        } else {
          console.log('No ministries found in response')
        }
      } catch (error) {
        console.error('Error loading ministries:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນກະຊວງ', 'error')
      } finally {
        this.loadingMinistries = false
      }
    },

    async loadChartAccounts() {
      if (this.chartAccounts.length > 0) return // Use props if available

      try {
        this.loadingChartAccounts = true
        console.log('Loading chart accounts...')

        const response = await this.$axios.get('/api/accountChart/find')
        console.log('Chart accounts API response:', response.data)

        if (response.data && response.data.success && response.data.data) {
          // Transform the data to match expected structure
          const chartAccountsData = Array.isArray(response.data.data)
            ? response.data.data
            : []

          // Ensure we have the correct field mapping
          const transformedData = chartAccountsData.map((account) => ({
            id: account.id,
            accountNumber: account.accountNumber,
            accountName: account.accountName || account.accountLLName,
            accountType: account.accountType,
            isActive: account.isActive,
            createdAt: account.createdAt,
            updateTimestamp: account.updateTimestamp,
          }))

          this.$emit('chart-accounts-loaded', transformedData)
        } else {
          console.log('No chart accounts found in response')
        }
      } catch (error) {
        console.error('Error loading chart accounts:', error)
        this.showToast('ມີຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນບັນຊີລວມ', 'error')
      } finally {
        this.loadingChartAccounts = false
      }
    },

    // Add a method to check if moneyAdvanceId exists in loaded advances
    validateMoneyAdvanceId() {
      if (this.form.moneyAdvanceId) {
        const exists = this.moneyAdvances.some(
          (advance) =>
            advance.id == this.form.moneyAdvanceId ||
            advance.originalId == this.form.moneyAdvanceId
        )
        if (!exists) {
          console.warn(
            'MoneyAdvance ID not found in loaded advances:',
            this.form.moneyAdvanceId
          )
          console.log(
            'Available advances:',
            this.moneyAdvances.map((a) => ({
              id: a.id,
              originalId: a.originalId,
              idType: typeof a.id,
            }))
          )
          // Optionally clear the invalid ID
          // this.form.moneyAdvanceId = ''
        }
      }
    },

    // Validation methods
    validateBookingDate() {
      if (!this.form.bookingDate) {
        this.$set(this.errors, 'bookingDate', 'ກະລຸນາເລືອກວັນທີບັນທຶກ')
      } else {
        const bookingDate = new Date(this.form.bookingDate)
        const today = new Date()
        today.setHours(0, 0, 0, 0) // Reset time to start of day for comparison

        if (bookingDate > today) {
          this.$set(
            this.errors,
            'bookingDate',
            'ວັນທີບັນທຶກບໍ່ສາມາດເປັນວັນອະນາຄົດໄດ້'
          )
        } else {
          this.$delete(this.errors, 'bookingDate')
        }
      }
    },

    validateAmount() {
      const amount = parseFloat(this.form.amount)
      if (!this.form.amount) {
        this.$set(this.errors, 'amount', 'ກະລຸນາໃສ່ຈຳນວນເງິນ')
      } else if (isNaN(amount) || amount <= 0) {
        this.$set(this.errors, 'amount', 'ຈຳນວນເງິນຕ້ອງເປັນຕົວເລກທີ່ໃຫຍ່ກວ່າ 0')
      } else if (!/^\d+(\.\d{1,2})?$/.test(this.form.amount)) {
        this.$set(
          this.errors,
          'amount',
          'ຈຳນວນເງິນສາມາດມີທົດສະນິຍົມໄດ້ສູງສຸດ 2 ຕຳແໜ່ງ'
        )
      } else {
        this.$delete(this.errors, 'amount')
      }
    },

    validateMethod() {
      if (!this.form.method) {
        this.$set(this.errors, 'method', 'ກະລຸນາເລືອກວິທີການຊຳລະ')
      } else {
        this.$delete(this.errors, 'method')
      }
    },

    validateUser() {
      if (!this.form.userId) {
        this.$set(this.errors, 'userId', 'ກະລຸນາເລືອກຜູ້ລົງບັນຊີ')
      } else {
        this.$delete(this.errors, 'userId')
      }
    },

    validateCurrency() {
      if (!this.form.currencyId) {
        this.$set(this.errors, 'currencyId', 'ກະລຸນາເລືອກສະກຸນເງິນ')
      } else {
        this.$delete(this.errors, 'currencyId')
      }
    },

    validateForm() {
      this.formErrors = []

      if (!this.form.bookingDate) {
        this.formErrors.push('Booking date is required')
      } else {
        const bookingDateStr = this.form.bookingDate
        const todayStr = new Date().toISOString().split('T')[0]

        if (bookingDateStr > todayStr) {
          this.formErrors.push('Booking date cannot be in the future')
        }
      }

      if (!this.form.amount || parseFloat(this.form.amount) <= 0) {
        this.formErrors.push('Amount is required and must be greater than 0')
      }

      if (!this.form.method) {
        this.formErrors.push('Payment method is required')
      }

      if (!this.form.userId) {
        this.formErrors.push('User selection is required')
      }

      if (!this.form.currencyId) {
        this.formErrors.push('Currency selection is required')
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
      this.$emit('currency-changed', this.form.currencyId)
    },

    updateSelectedBankAccount() {
      this.$emit('bank-account-changed', this.form.bankAccountId)
    },

    updateSelectedMinistry() {
      this.$emit('ministry-changed', this.form.ministryId)
    },

    updateSelectedChartAccount() {
      this.$emit('chart-account-changed', this.form.chartAccountId)
    },

    async saveSettlement() {
      if (!this.validateForm()) {
        this.$emit(
          'validation-error',
          'Please fix the form errors before saving'
        )
        return
      }

      const settlementData = {
        bookingDate: this.form.bookingDate,
        amount: parseFloat(this.form.amount),
        method: this.form.method,
        userId: this.form.userId,
        currencyId: this.form.currencyId,
        bankAccountId: this.form.bankAccountId || null,
        moneyAdvanceId: this.form.moneyAdvanceId || null,
        ministryId: this.form.ministryId || null,
        chartAccountId: this.form.chartAccountId || null,
        settlementDate: this.form.settlementDate,
        notes: this.form.notes || null,
      }

      console.log('Saving settlement data:', settlementData)
      this.$emit('save', settlementData)
    },

    printVoucher() {
      if (this.currentSettlement) {
        this.showPrintDialog = true
      } else {
        this.showToast('ບໍ່ສາມາດພິມໄດ້ ກະລຸນາບັນທຶກຂໍ້ມູນກ່ອນ', 'warning')
      }
    },

    closePrintDialog() {
      this.showPrintDialog = false
    },

    closeModal() {
      this.showModal = false
      this.$emit('close')

      setTimeout(() => {
        this.resetForm()
      }, 300)
    },

    formatCurrency(amount, code = 'LAK') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: code,
      }).format(amount || 0)
    },

    showToast(message, type = 'info') {
      if (this.$toast) {
        switch (type) {
          case 'success':
            this.$toast.success(message, {
              duration: 3000,
              position: 'top-right',
            })
            break
          case 'error':
            this.$toast.error(message, {
              duration: 5000,
              position: 'top-right',
            })
            break
          case 'warning':
            this.$toast.warning(message, {
              duration: 4000,
              position: 'top-right',
            })
            break
          default:
            this.$toast.info(message, {
              duration: 3000,
              position: 'top-right',
            })
        }
      } else {
        console.log(`${type}: ${message}`)
        alert(`${type.toUpperCase()}: ${message}`)
      }
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
  max-width: 800px;
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

.form-control:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
}

.form-control.is-invalid {
  border-color: #e74c3c;
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
}

.field-hint.error {
  color: #e74c3c;
}

.field-hint.warning {
  color: #f39c12;
}

.invalid-feedback {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
}

.debug-info {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 8px;
  margin-top: 8px;
  font-family: monospace;
  word-break: break-all;
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

/* Info Card Styles for Ministry and Chart Account */
.info-card {
  margin-top: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  overflow: hidden;
}

.info-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
}

.ministry-info .info-header {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
}

.chart-account-info .info-header {
  background: linear-gradient(135deg, #fd7e14 0%, #ffc107 100%);
}

.info-details {
  padding: 12px 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.info-item .label {
  font-weight: 600;
  color: #6b7280;
  min-width: 80px;
}

.info-item .value {
  color: #374151;
  flex: 1;
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

.btn-info {
  background: #17a2b8;
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

  .bank-details,
  .info-details {
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