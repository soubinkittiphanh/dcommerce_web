<template>
  <div>
    <!-- Main Money Advance Dialog -->
    <div v-if="show" class="modal-overlay" @click="closeDialog">
      <div class="modal-dialog enhanced-dialog" @click.stop>
        <div class="modal-header">
          <div class="modal-title-section">
            <i class="fas fa-money-bill-wave modal-icon"></i>
            <h5 class="modal-title">
              {{ isEdit ? 'ແກ້ໄຂລາຍຈ່າຍ' : 'ລົງບັນຊີລາຍຈ່າຍ' }}
            </h5>
          </div>

          <div class="modal-header-right">
            <span class="voucher-number">
              ເລກທີ:
              {{ formData.id ? formatVoucherNumber(localForm.id) : '000000' }}
            </span>
            <button @click="closeDialog" class="close-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <form @submit.prevent="saveAdvance">
          <div class="modal-body">
            <!-- Loading state for form data -->
            <div v-if="formLoading" class="form-loading">
              <div class="spinner-small"></div>
              <p>Loading form data...</p>
            </div>

            <div v-else class="form-grid">
              <!-- First Row: Date, Payment Method, Currency -->
              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-calendar"></i>
                  ວັນທີ
                </label>
                <input
                  v-model="localForm.bookingDate"
                  type="date"
                  class="form-control"
                  :max="today"
                  required
                  title="ເລືອກວັນທີ (Select Date)"
                />
                <small
                  class="text-muted"
                  style="
                    font-size: 10px;
                    color: #6b7280;
                    margin-top: 2px;
                    display: block;
                  "
                >
                  ຮູບແບບຈະສະແດງຕາມການຕັ້ງຄ່າຂອງ Browser
                </small>
              </div>

              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-credit-card"></i>
                  ວິທີການຈ່າຍເງິນ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="localForm.method"
                    class="form-control custom-select"
                    required
                    @change="handleMethodChange"
                  >
                    <option value="">ເລືອກວິທີການຊຳລະ</option>
                    <option value="cash">ເງິນສົດ (Cash)</option>
                    <option value="cheque">ເຊັກ (Cheque)</option>
                    <option value="bank_transfer">
                      ໂອນທະນາຄານ (Bank Transfer)
                    </option>
                    <option value="deduction">ຫັກລົບ (Deduction)</option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
                <!-- 🔧 DEBUG: Show current method value -->
                <small class="debug-info" style="font-size: 10px; color: #666; margin-top: 2px; display: block;">
                  Current method: "{{ localForm.method || 'empty' }}"
                </small>
              </div>

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
                      {{ currency.code }}
                    </option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              <!-- Second Row: Exchange Rate, Amount, User -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-exchange-alt"></i>
                  ອັດຕາແລກປ່ຽນ
                </label>
                <input
                  v-model="localForm.exchangeRate"
                  type="number"
                  step="0.000001"
                  min="0"
                  class="form-control"
                  placeholder="ອັດຕາແລກປ່ຽນ"
                />
              </div>

              <div class="form-group">
                <label class="form-label required">
                  <i class="fas fa-dollar-sign"></i>
                  ຈຳນວນເງິນ
                </label>
                <input
                  v-model="localForm.amount"
                  type="number"
                  step="0.01"
                  min="0"
                  class="form-control"
                  placeholder="Enter amount"
                  required
                />
              </div>

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
                    disabled
                  >
                    <option value="">ເລືອກຜູ້ລົງ</option>
                    <option
                      v-for="user in users"
                      :key="user.id"
                      :value="user.id"
                    >
                      {{ user.cus_name }}
                    </option>
                  </select>
                  <div class="select-icon">
                    <i class="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              <!-- Third Row: External Reference Fields -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-external-link-alt"></i>
                  ອີງໃສ່ໃບສະເໜີ / ຖອນ
                </label>
                <input
                  v-model="localForm.externalRef"
                  type="text"
                  class="form-control"
                  placeholder="ອີງໃສ່ໃບສະເໜີ / ຖອນ"
                  maxlength="100"
                />
              </div>

              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-hashtag"></i>
                  ເລກທີ່ໃບສັ່ງຈ່າຍ
                </label>
                <input
                  v-model="localForm.externalRefNo"
                  type="text"
                  class="form-control"
                  placeholder="ເລກທີ່ໃບສັ່ງຈ່າຍ"
                  maxlength="50"
                />
              </div>

              <div class="form-group" v-show="localForm.method === 'cheque'">
                <label
                  class="form-label"
                  :class="{ required: localForm.method === 'cheque' }"
                >
                  <i class="fas fa-money-check"></i>
                  ເລກເຊັກ
                </label>
                <input
                  v-model="localForm.chequeNo"
                  type="text"
                  class="form-control"
                  placeholder="ເລກເຊັກ"
                  maxlength="50"
                  :required="localForm.method === 'cheque'"
                />
              </div>

              <!-- Fourth Row: Receiver Information -->
              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-user-circle"></i>
                  ຊື່ຜູ້ຮັບ
                </label>
                <input
                  v-model="localForm.receiveName"
                  type="text"
                  class="form-control"
                  placeholder="ຊື່ຜູ້ຮັບເງິນ"
                  maxlength="100"
                />
              </div>

              <div class="form-group">
                <label class="form-label">
                  <i class="fas fa-id-card"></i>
                  ເລກບັດປະຈຳຕົວຜູ້ຮັບ
                </label>
                <input
                  v-model="localForm.receiveIDNO"
                  type="text"
                  class="form-control"
                  placeholder="ເລກບັດປະຈຳຕົວ"
                  maxlength="20"
                />
              </div>

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

              <!-- Fifth Row: Ministry and Bank Account -->
              <div class="form-group span-2">
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
                        selectedMinistry.ministryName
                      }}</span>
                    </div>
                    <div
                      v-if="selectedMinistry.ministryCode"
                      class="ministry-detail-item"
                    >
                      <i class="fas fa-tag"></i>
                      <span class="ministry-code">{{
                        selectedMinistry.ministryCode
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="form-group"
                v-show="localForm.method === 'bank_transfer'"
              >
                <label
                  class="form-label"
                  :class="{ required: localForm.method === 'bank_transfer' }"
                >
                  <i class="fas fa-university"></i>
                  ບັນຊີທະນາຄານ
                </label>
                <div class="custom-select-wrapper">
                  <select
                    v-model="localForm.bankAccountId"
                    class="form-control custom-select"
                    @change="updateSelectedBankAccount"
                    :required="localForm.method === 'bank_transfer'"
                  >
                    <option value="">ເລືອກບັນຊີ</option>
                    <option
                      v-for="account in filteredBankAccounts"
                      :key="account.id"
                      :value="account.id"
                    >
                      {{ account.bankName }} - {{ account.accountNumber }}
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
                    </div>
                    <div class="bank-detail-item">
                      <i class="fas fa-credit-card"></i>
                      <span>{{ selectedBankAccount.accountNumber }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sixth Row: Purpose -->
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
              </div>

              <!-- Seventh Row: Notes -->
              <div class="form-group full-width">
                <label class="form-label">
                  <i class="fas fa-sticky-note"></i>
                  ໂນ໊ດ
                </label>
                <textarea
                  v-model="localForm.note"
                  class="form-control"
                  rows="2"
                  placeholder="ລາຍລະອຽດເພີ່ມເຕີມ..."
                  maxlength="500"
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
            <button
              @click.prevent="printAdvanceDetails"
              class="btn btn-sm btn-danger"
              title="Print"
            >
              <i class="fas fa-print"></i>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Voucher Print Component - MOVED OUTSIDE main modal -->
    <VoucherPrintComponent
      v-if="showPrintVoucher && advanceDetails"
      :key="advanceDetails.id"
      :voucher-data="advanceDetails"
      @close="closePrintVoucher"
    />
  </div>
</template>

<script>
import VoucherPrintComponent from '~/components/MA/paymentVoucher'
export default {
  name: 'MoneyAdvanceDialog',
  components: {
    VoucherPrintComponent,
  },
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
        exchangeRate: '',
        method: 'cash', // ✅ Default method
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
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
      advanceDetails: null,
      showPrintVoucher: false,
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
        exchangeRate: '',
        method: 'cash', // ✅ Default method
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
      },
      formErrors: [],
    }
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },
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

    filteredBankAccounts() {
      if (!this.selectedCurrency || !this.bankAccounts.length) {
        return this.bankAccounts
      }

      const currencyCode = this.selectedCurrency.code
      const filtered = this.bankAccounts.filter(
        (account) => account.currency === currencyCode || !account.currency
      )

      return filtered.length > 0 ? filtered : this.bankAccounts
    },

    today() {
      return new Date().toISOString().split('T')[0]
    },

    isFormValid() {
      const validations = {
        'amount exists': !!this.localForm.amount,
        'amount > 0':
          this.localForm.amount && parseFloat(this.localForm.amount) > 0,
        'makerId exists': !!this.localForm.makerId,
        'currencyId exists': !!this.localForm.currencyId,
        'bookingDate exists': !!this.localForm.bookingDate,
        'method exists': !!this.localForm.method, // ✅ Method validation
        'users available': this.users.length > 0,
        'currencies available': this.currencies.length > 0,
        'exchange rate valid':
          !this.localForm.exchangeRate ||
          (this.localForm.exchangeRate &&
            !isNaN(parseFloat(this.localForm.exchangeRate)) &&
            parseFloat(this.localForm.exchangeRate) > 0),
        'externalRef valid':
          !this.localForm.externalRef ||
          this.localForm.externalRef.length <= 100,
        'externalRefNo valid':
          !this.localForm.externalRefNo ||
          this.localForm.externalRefNo.length <= 50,
        'chequeNo valid':
          !this.localForm.chequeNo || this.localForm.chequeNo.length <= 50,
        'receiveName valid':
          !this.localForm.receiveName ||
          this.localForm.receiveName.length <= 100,
        'receiveIDNO valid':
          !this.localForm.receiveIDNO ||
          this.localForm.receiveIDNO.length <= 20,
        // ✅ Conditional validations based on method
        'cheque number required':
          this.localForm.method !== 'cheque' ||
          (this.localForm.method === 'cheque' && !!this.localForm.chequeNo),
        'bank account required':
          this.localForm.method !== 'bank_transfer' ||
          (this.localForm.method === 'bank_transfer' &&
            !!this.localForm.bankAccountId),
      }

      return Object.values(validations).every(Boolean)
    },
  },

  watch: {
    show(newVal) {
      if (newVal) {
        this.initForm()
      }
    },

    // 🔧 FIXED: Enhanced formData watcher to preserve defaults
    formData: {
      handler(newVal) {
        console.info(`Form data is changing...`, newVal)
        if (newVal && typeof newVal === 'object') {
          // 🔧 FIX: Merge with defaults instead of overwriting completely
          this.localForm = {
            ...this.getDefaultForm(), // Start with defaults
            ...newVal // Override with provided data
          }

          // Ensure method defaults to 'cash' if not provided or empty
          if (!this.localForm.method || this.localForm.method === '') {
            this.localForm.method = 'cash'
            console.info('🔧 Setting method to default: cash')
          }

          if (!this.isEdit && !this.localForm.bookingDate) {
            this.localForm.bookingDate = this.today
          }
        }
      },
      deep: true,
      immediate: true,
    },

    // ✅ Watch method changes to clear conditional fields
    'localForm.method'(newMethod, oldMethod) {
      console.info(`Method changed from "${oldMethod}" to "${newMethod}"`)
      if (oldMethod && newMethod !== oldMethod) {
        this.handleMethodChange()
      }
    },
  },

  mounted() {
    console.info('🔧 Component mounted, initializing form...')
    this.initForm()
  },

  methods: {
    // 🔧 NEW: Helper method to get default form structure
    getDefaultForm() {
      return {
        id: null,
        amount: '',
        purpose: '',
        note: '',
        makerId: '',
        currencyId: '',
        dueDate: '',
        bankAccountId: '',
        ministryId: '',
        bookingDate: this.today,
        exchangeRate: '',
        method: 'cash', // ✅ Always default to cash
        externalRef: '',
        externalRefNo: '',
        chequeNo: '',
        receiveName: '',
        receiveIDNO: '',
      }
    },

    formatDisplayDate(dateString) {
      if (!dateString) return ''

      try {
        const date = new Date(dateString)
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()

        // Lao months names (optional)
        const laoMonths = [
          'ມັງກອນ',
          'ກຸມພາ',
          'ມີນາ',
          'ເມສາ',
          'ພຶດສະພາ',
          'ມິຖຸນາ',
          'ກໍລະກົດ',
          'ສິງຫາ',
          'ກັນຍາ',
          'ຕຸລາ',
          'ພະຈິກ',
          'ທັນວາ',
        ]

        // Return format: DD/MM/YYYY
        return `${day}/${month}/${year}`

        // Or with Lao month name: DD ເດືອນ MM ປີ YYYY
        // return `${day} ${laoMonths[date.getMonth()]} ${year}`
      } catch (error) {
        return dateString
      }
    },
    formatVoucherNumber(id) {
      return String(id).padStart(6, '0')
    },
    async fetchAdvanceByid() {
      if (!this.localForm.id)
        return this.showToast('ກະລຸນາບັນທຶກຂໍ້ມູນກ່ອນ', 'error')
      this.loading = true

      try {
        const { data } = await this.$axios.get(
          `/api/money-advances/${this.localForm.id}`
        )
        this.advanceDetails = data.data
      } catch (error) {
        this.showToast('Error fetching money advances', 'error')
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async printAdvanceDetails() {
      await this.fetchAdvanceByid()
      this.showPrintVoucher = true
    },
    closePrintVoucher() {
      this.showPrintVoucher = false
      setTimeout(() => {
        this.advanceDetails = null
      }, 100)
    },

    // 🔧 FIXED: Enhanced initForm method
    initForm() {
      this.formErrors = []
      console.info('🔧 initForm called with formData:', this.formData)
      
      if (this.isEdit && this.formData && this.formData.id) {
        console.info('🔧 Edit mode - copying formData with defaults preserved')
        // In edit mode, merge formData with defaults
        this.localForm = {
          ...this.getDefaultForm(),
          ...this.formData
        }
        
        // Ensure method is set even in edit mode
        if (!this.localForm.method || this.localForm.method === '') {
          this.localForm.method = 'cash'
          console.info('🔧 Edit mode: Setting method to default cash')
        }
      } else {
        console.info('🔧 New mode - using defaults')
        // In new mode, start with defaults
        this.localForm = this.getDefaultForm()

        // Set default currency
        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'LAK') || this.currencies[0]
          this.localForm.currencyId = defaultCurrency.id
        }

        // Set current user
        if (this.user && this.user.id) {
          this.localForm.makerId = this.user.id
        }
      }

      // Always ensure method is set
      if (!this.localForm.method) {
        this.localForm.method = 'cash'
        console.info('🔧 Final fallback: Setting method to cash')
      }

      console.info('🔧 Final localForm:', this.localForm)
    },

    resetForm() {
      console.info('🔧 resetForm called')
      this.localForm = this.getDefaultForm()
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

      // ✅ Method validation
      if (!this.localForm.method) {
        this.formErrors.push('Payment method is required')
      }

      // ✅ Conditional validations based on method
      if (this.localForm.method === 'cheque' && !this.localForm.chequeNo) {
        this.formErrors.push(
          'Cheque number is required when payment method is cheque'
        )
      }

      if (
        this.localForm.method === 'bank_transfer' &&
        !this.localForm.bankAccountId
      ) {
        this.formErrors.push(
          'Bank account is required when payment method is bank transfer'
        )
      }

      if (this.localForm.purpose && this.localForm.purpose.length > 255) {
        this.formErrors.push('Purpose must not exceed 255 characters')
      }

      if (this.localForm.note && this.localForm.note.length > 500) {
        this.formErrors.push('Note must not exceed 500 characters')
      }

      if (
        this.localForm.exchangeRate &&
        parseFloat(this.localForm.exchangeRate) <= 0
      ) {
        this.formErrors.push('Exchange rate must be greater than 0 if provided')
      }

      if (
        this.localForm.externalRef &&
        this.localForm.externalRef.length > 100
      ) {
        this.formErrors.push(
          'External reference must not exceed 100 characters'
        )
      }

      if (
        this.localForm.externalRefNo &&
        this.localForm.externalRefNo.length > 50
      ) {
        this.formErrors.push(
          'External reference number must not exceed 50 characters'
        )
      }

      if (this.localForm.chequeNo && this.localForm.chequeNo.length > 50) {
        this.formErrors.push('Cheque number must not exceed 50 characters')
      }

      if (
        this.localForm.receiveName &&
        this.localForm.receiveName.length > 100
      ) {
        this.formErrors.push('Receiver name must not exceed 100 characters')
      }

      if (
        this.localForm.receiveIDNO &&
        this.localForm.receiveIDNO.length > 20
      ) {
        this.formErrors.push('Receiver ID number must not exceed 20 characters')
      }

      if (
        this.localForm.chequeNo &&
        !/^[a-zA-Z0-9\-\/]*$/.test(this.localForm.chequeNo)
      ) {
        this.formErrors.push(
          'Cheque number can only contain letters, numbers, hyphens, and forward slashes'
        )
      }

      if (
        this.localForm.receiveIDNO &&
        !/^[a-zA-Z0-9]*$/.test(this.localForm.receiveIDNO)
      ) {
        this.formErrors.push(
          'Receiver ID number can only contain letters and numbers'
        )
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
      console.info(
        `select currency: ${
          this.selectedCurrency.code
        } currency list ${JSON.stringify(this.currencies)}`
      )
      this.localForm.exchangeRate =
        this.currencies.find(
          (currency) => currency.code === this.selectedCurrency.code
        ).rate || 1

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

    // ✅ Handle payment method changes
    handleMethodChange() {
      const method = this.localForm.method
      console.info(`🔧 handleMethodChange: ${method}`)

      // Clear conditional fields when method changes
      if (method !== 'cheque') {
        this.localForm.chequeNo = ''
      }
      if (method !== 'bank_transfer') {
        this.localForm.bankAccountId = ''
      }

      // Emit method change event if needed
      this.$emit('method-changed', method)
    },

    closeDialog() {
      this.$emit('close')
    },
    showToast(message, type = 'info') {
      if (this.$toast) {
        this.$toast[type](message)
      } else if (this.$notify) {
        this.$notify({
          title: type === 'error' ? 'Error' : 'Success',
          message: message,
          type: type === 'error' ? 'error' : 'success',
        })
      } else {
        alert(`${type.toUpperCase()}: ${message}`)
      }
    },
    async saveAdvance() {
      if (!this.validateForm()) {
        this.$emit('validation-error', 'Please fix the form errors')
        return
      }
      console.info(`FORM DATA ${JSON.stringify(this.localForm)}`)
      // return
      const formData = { ...this.localForm }
      if (!formData.ministryId) delete formData.ministryId
      if (!formData.bankAccountId) delete formData.bankAccountId
      if (!formData.dueDate) delete formData.dueDate
      if (!formData.purpose) delete formData.purpose
      if (!formData.note) delete formData.note
      if (!formData.exchangeRate) delete formData.exchangeRate
      if (!formData.externalRef) delete formData.externalRef
      if (!formData.externalRefNo) delete formData.externalRefNo
      if (!formData.chequeNo) delete formData.chequeNo
      if (!formData.receiveName) delete formData.receiveName
      if (!formData.receiveIDNO) delete formData.receiveIDNO
      console.info(`FORM DATA ${JSON.stringify(formData)}`)
      if (!this.localForm.id) {
        const response = await this.$axios.post('/api/money-advances', {
          ...formData,
        })

        console.info(`REPONSE DATA ${JSON.stringify(response.data)}`)
        this.localForm.id = response.data.data.id
        this.showToast('Money advance created successfully', 'success')
        return
      }
      this.$emit('save', formData)
    },
  },
}
</script>

<style scoped>
/* Enhanced Modal Styles */
.modal-header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.voucher-number {
  font-size: 14px;
  font-weight: 600;
  color: white;
  opacity: 0.9;
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
  max-width: 95vw;
  width: 95%;
  max-height: 98vh;
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
  padding: 16px 18px;
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
  font-size: 18px;
  opacity: 0.9;
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s;
  padding: 6px;
  border-radius: 4px;
}

.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

.modal-body {
  padding: 16px 18px;
  overflow-y: auto;
  max-height: calc(98vh - 120px);
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
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group.span-2 {
  grid-column: span 2;
}

.form-group.span-3 {
  grid-column: span 3;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #374151;
  font-size: 11px;
}

.form-label.required::after {
  content: '*';
  color: #e74c3c;
  margin-left: 4px;
}

.form-label i {
  color: #6b7280;
  font-size: 11px;
}

.form-control {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 12px;
  transition: all 0.2s ease;
  background: #fafafa;
  box-sizing: border-box;
  height: 32px;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

textarea.form-control {
  height: auto;
  resize: vertical;
  min-height: 60px;
}

.custom-select-wrapper {
  position: relative;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 32px;
}

.select-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6b7280;
  font-size: 12px;
}

/* 🔧 DEBUG: Add debug info styling */
.debug-info {
  font-style: italic;
  color: #666 !important;
  background: #f9f9f9;
  padding: 2px 4px;
  border-radius: 2px;
  font-family: monospace;
}

/* Ministry Info Styles */
.ministry-info {
  margin-top: 6px;
  padding: 6px;
  background: #f0f9ff;
  border-radius: 4px;
  border: 1px solid #bae6fd;
}

.ministry-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
}

.ministry-detail-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #075985;
}

.ministry-detail-item i {
  color: #0ea5e9;
  width: 12px;
  flex-shrink: 0;
}

.ministry-name {
  font-weight: 600;
}

.ministry-code {
  font-family: monospace;
  background: #e0f2fe;
  padding: 1px 4px;
  border-radius: 2px;
}

/* Bank Account Info Styles */
.bank-account-info {
  margin-top: 6px;
  padding: 6px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e9ecef;
}

.bank-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
}

.bank-detail-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #6b7280;
}

.bank-detail-item i {
  color: #667eea;
  width: 12px;
}

.form-errors {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  padding: 12px;
  margin-top: 16px;
}

.form-errors h6 {
  margin: 0 0 8px 0;
  color: #dc2626;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.form-errors ul {
  margin: 0;
  padding-left: 16px;
  color: #dc2626;
  font-size: 11px;
}

.enhanced-footer {
  padding: 12px 18px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn {
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
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
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
@media (max-width: 1024px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-group.span-2,
  .form-group.span-3 {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .enhanced-dialog {
    width: 98%;
    margin: 10px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-group.span-2,
  .form-group.span-3 {
    grid-column: 1;
  }

  .modal-header {
    padding: 14px 16px;
  }

  .modal-body {
    padding: 14px 16px;
  }

  .enhanced-footer {
    padding: 14px 16px;
    flex-direction: column-reverse;
  }

  .enhanced-footer .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>