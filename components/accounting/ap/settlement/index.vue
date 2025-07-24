<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="settlement-dialog" @click.stop>
      <div class="dialog-header">
        <h4>{{ isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ສ້າງການຊຳລະໃໝ່' }}</h4>
        <button @click="closeDialog" class="close-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="dialog-body">
        <form @submit.prevent="submitForm">
          <!-- Basic Settlement Information -->
          <div class="form-section">
            <h5 class="section-title">ຂໍ້ມູນການຊຳລະ</h5>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>ເລກທີການຊຳລະ</label>
                <input
                  v-model="form.settlementNumber"
                  type="text"
                  class="form-control"
                  :disabled="isEditMode"
                  placeholder="ຈະຖືກສ້າງອັດຕະໂນມັດ"
                />
              </div>
              <div class="form-group col-md-6">
                <label>ວັນທີຊຳລະ <span class="required">*</span></label>
                <input
                  v-model="form.settlementDate"
                  type="date"
                  class="form-control"
                  :class="{ 'is-invalid': errors.settlementDate }"
                  required
                />
                <div v-if="errors.settlementDate" class="invalid-feedback">
                  {{ errors.settlementDate }}
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label>ສະກຸນເງິນຊຳລະ <span class="required">*</span></label>
                <select
                  v-model="form.paymentCurrencyId"
                  class="form-control"
                  :class="{ 'is-invalid': errors.paymentCurrencyId }"
                  @change="onPaymentCurrencyChange"
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
                <div v-if="errors.paymentCurrencyId" class="invalid-feedback">
                  {{ errors.paymentCurrencyId }}
                </div>
              </div>
              <div class="form-group col-md-4">
                <label>ຈຳນວນເງິນຊຳລະ <span class="required">*</span></label>
                <input
                  v-model.number="form.paymentAmount"
                  type="number"
                  step="0.01"
                  min="0"
                  class="form-control"
                  :class="{ 'is-invalid': errors.paymentAmount }"
                  @input="calculateBaseAmount"
                  required
                />
                <div v-if="errors.paymentAmount" class="invalid-feedback">
                  {{ errors.paymentAmount }}
                </div>
              </div>
              <div class="form-group col-md-4">
                <label>ອັດຕາແລກປ່ຽນ</label>
                <input
                  v-model.number="form.exchangeRate"
                  type="number"
                  step="0.000001"
                  min="0"
                  class="form-control"
                  :disabled="isSameCurrency"
                  @input="calculateBaseAmount"
                />
                <small class="form-text text-muted">
                  {{
                    isSameCurrency
                      ? 'ສະກຸນເງິນດຽວກັນ'
                      : '1 ' +
                        getPaymentCurrencyCode() +
                        ' = X ' +
                        getBaseCurrencyCode()
                  }}
                </small>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label>ສະກຸນເງິນພື້ນຖານ</label>
                <select
                  v-model="form.baseCurrencyId"
                  class="form-control"
                  @change="onBaseCurrencyChange"
                >
                  <option
                    v-for="currency in currencies"
                    :key="currency.id"
                    :value="currency.id"
                  >
                    {{ currency.code }} - {{ currency.name }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label>ຈຳນວນເງິນພື້ນຖານ</label>
                <input
                  v-model.number="form.baseAmount"
                  type="number"
                  step="0.01"
                  class="form-control"
                  :disabled="true"
                />
              </div>
              <div class="form-group col-md-4">
                <label>ວິທີການຊຳລະ <span class="required">*</span></label>
                <select
                  v-model="form.paymentMethodId"
                  class="form-control"
                  :class="{ 'is-invalid': errors.paymentMethodId }"
                  required
                >
                  <option value="">ເລືອກວິທີການຊຳລະ</option>
                  <option
                    v-for="method in paymentMethods"
                    :key="method.id"
                    :value="method.id"
                  >
                    {{ method.payment_name }}
                  </option>
                </select>
                <div v-if="errors.paymentMethodId" class="invalid-feedback">
                  {{ errors.paymentMethodId }}
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>ບັນຊີທະນາຄານ</label>
                <select v-model="form.bankAccountId" class="form-control">
                  <option value="">ເລືອກບັນຊີທະນາຄານ</option>
                  <option
                    v-for="account in bankAccounts"
                    :key="account.id"
                    :value="account.id"
                  >
                    {{ account.accountNumber }} - {{ account.bankName }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label>ອ້າງອີງ</label>
                <input
                  v-model="form.reference"
                  type="text"
                  class="form-control"
                  placeholder="ຫມາຍເລກອ້າງອີງ"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>ຄຳອະທິບາຍ</label>
                <textarea
                  v-model="form.description"
                  class="form-control"
                  rows="2"
                  placeholder="ຄຳອະທິບາຍການຊຳລະ"
                ></textarea>
              </div>
              <div class="form-group col-md-6">
                <label>ໝາຍເຫດ</label>
                <textarea
                  v-model="form.note"
                  class="form-control"
                  rows="2"
                  placeholder="ໝາຍເຫດເພີ່ມເຕີມ"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Invoice Allocation Section -->
          <div class="form-section">
            <div class="section-header">
              <h5 class="section-title">ການຈັດສັນໃບແຈ້ງໜີ້</h5>
              <button
                type="button"
                @click="showInvoiceSelector = true"
                class="btn btn-sm btn-primary"
              >
                <i class="fas fa-plus"></i> ເພີ່ມໃບແຈ້ງໜີ້
              </button>
            </div>

            <div v-if="selectedInvoices.length === 0" class="no-invoices">
              <i class="fas fa-file-invoice"></i>
              <p>ຍັງບໍ່ໄດ້ເລືອກໃບແຈ້ງໜີ້</p>
              <small
                >ກົດປຸ່ມ "ເພີ່ມໃບແຈ້ງໜີ້"
                ເພື່ອເລືອກໃບແຈ້ງໜີ້ທີ່ຕ້ອງການຊຳລະ</small
              >
            </div>

            <div v-else class="invoice-allocations">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>ເລກທີໃບແຈ້ງໜີ້</th>
                    <th>ຜູ້ຂາຍ</th>
                    <th>ຍອດຄ້າງຈ່າຍ</th>
                    <th>ຈຳນວນຈັດສັນ</th>
                    <th>ອັດຕາແລກປ່ຽນ</th>
                    <th>ຟັງຊັ່ນ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(invoice, index) in selectedInvoices"
                    :key="invoice.id"
                  >
                    <td>{{ invoice.invoiceNumber }}</td>
                    <td>{{ invoice.vendor?.name || 'N/A' }}</td>
                    <td>{{ formatCurrency(invoice.outstandingAmount) }}</td>
                    <td>
                      <input
                        v-model.number="invoice.settledAmount"
                        type="number"
                        step="0.01"
                        min="0"
                        :max="invoice.outstandingAmount"
                        class="form-control form-control-sm"
                        @input="calculateTotals"
                      />
                    </td>
                    <td>
                      <input
                        v-model.number="invoice.exchangeRate"
                        type="number"
                        step="0.000001"
                        min="0"
                        class="form-control form-control-sm"
                        @input="calculateTotals"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        @click="removeInvoice(index)"
                        class="btn btn-sm btn-danger"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="allocation-summary">
                <div class="summary-item">
                  <strong
                    >ລວມຈັດສັນ: {{ formatCurrency(totalAllocated) }}</strong
                  >
                </div>
                <div class="summary-item">
                  <strong
                    >ຍອດເຫຼືອ: {{ formatCurrency(unallocatedAmount) }}</strong
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Form Actions -->
          <div class="form-actions">
            <button
              type="button"
              @click="closeDialog"
              class="btn btn-secondary"
            >
              <i class="fas fa-times"></i> ຍົກເລີກ
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isSubmitting"
            >
              <i class="fas fa-save"></i>
              <span v-if="isSubmitting">ກຳລັງບັນທຶກ...</span>
              <span v-else>{{ isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ' }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Invoice Selector Modal -->
    <div
      v-if="showInvoiceSelector"
      class="invoice-selector-overlay"
      @click="closeInvoiceSelector"
    >
      <div class="invoice-selector-modal" @click.stop>
        <div class="modal-header">
          <h5>ເລືອກໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</h5>
          <button @click="closeInvoiceSelector" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="invoice-filters">
            <div class="row">
              <div class="col-md-6">
                <input
                  v-model="invoiceSearchTerm"
                  type="text"
                  class="form-control"
                  placeholder="ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້..."
                  @input="filterInvoices"
                />
              </div>
              <div class="col-md-6">
                <select
                  v-model="selectedVendorFilter"
                  class="form-control"
                  @change="filterInvoices"
                >
                  <option value="">ທຸກຜູ້ຂາຍ</option>
                  <option
                    v-for="vendor in availableVendors"
                    :key="vendor.id"
                    :value="vendor.id"
                  >
                    {{ vendor.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="invoice-list">
            <table class="table table-sm table-hover">
              <thead>
                <tr>
                  <th>ເລືອກ</th>
                  <th>ເລກທີໃບແຈ້ງໜີ້</th>
                  <th>ຜູ້ຂາຍ</th>
                  <th>ວັນທີຄົບກຳນົດ</th>
                  <th>ຍອດຄ້າງຈ່າຍ</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="invoice in filteredInvoices"
                  :key="invoice.id"
                  :class="{ 'selected-row': isInvoiceSelected(invoice.id) }"
                >
                  <td>
                    <input
                      type="checkbox"
                      :checked="isInvoiceSelected(invoice.id)"
                      @change="toggleInvoiceSelection(invoice, $event)"
                    />
                  </td>
                  <td>{{ invoice.invoiceNumber }}</td>
                  <td>{{ invoice.vendor?.name || 'N/A' }}</td>
                  <td>{{ formatDate(invoice.dueDate) }}</td>
                  <td>{{ formatCurrency(invoice.outstandingAmount) }}</td>
                </tr>
              </tbody>
            </table>

            <div v-if="filteredInvoices.length === 0" class="no-data">
              <p>ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບເງື່ອນໄຂ</p>
            </div>
          </div>

          <div class="modal-actions">
            <button
              type="button"
              @click.stop="closeInvoiceSelector"
              class="btn btn-secondary"
            >
              ຍົກເລີກ
            </button>
            <button
              type="button"
              @click.stop="confirmInvoiceSelection"
              class="btn btn-primary"
            >
              ຢືນຢັນການເລືອກ ({{ tempSelectedInvoices.length }})
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettlementDialog',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    settlement: {
      type: Object,
      default: null,
    },
    outstandingInvoices: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      form: {
        id: null,
        settlementNumber: '',
        settlementDate: new Date().toISOString().split('T')[0],
        paymentAmount: 0,
        baseAmount: 0,
        exchangeRate: 1.0,
        paymentCurrencyId: '',
        baseCurrencyId: '',
        paymentMethodId: '',
        bankAccountId: '',
        reference: '',
        description: '',
        note: '',
        status: 'draft',
      },
      selectedInvoices: [],
      tempSelectedInvoices: [],
      currencies: [],
      paymentMethods: [],
      bankAccounts: [],
      errors: {},
      isSubmitting: false,
      showInvoiceSelector: false,
      invoiceSearchTerm: '',
      selectedVendorFilter: '',
      filteredInvoices: [],
    }
  },

  computed: {
    isEditMode() {
      return !!(this.settlement && this.settlement.id)
    },

    isSameCurrency() {
      return this.form.paymentCurrencyId === this.form.baseCurrencyId
    },

    totalAllocated() {
      return this.selectedInvoices.reduce((sum, invoice) => {
        return sum + parseFloat(invoice.settledAmount || 0)
      }, 0)
    },

    unallocatedAmount() {
      return parseFloat(this.form.baseAmount) - this.totalAllocated
    },

    availableVendors() {
      const vendors = []
      const vendorMap = new Map()

      this.outstandingInvoices.forEach((invoice) => {
        if (invoice.vendor && !vendorMap.has(invoice.vendor.id)) {
          vendorMap.set(invoice.vendor.id, invoice.vendor)
          vendors.push(invoice.vendor)
        }
      })

      return vendors
    },
  },

  watch: {
    visible(newVal, oldVal) {
      console.log('Dialog visibility changed:', oldVal, '->', newVal)
      if (!newVal) {
        console.trace('Dialog closed')
      }
    },

    settlement: {
      handler(newVal) {
        if (newVal) {
          this.loadSettlementData(newVal)
        }
      },
      immediate: true,
    },

    'form.paymentCurrencyId'() {
      this.setDefaultBaseCurrency()
    },
  },

  async mounted() {
    await this.loadReferenceData()
  },

  methods: {
    async initializeDialog() {
      await this.loadReferenceData()

      if (this.settlement) {
        this.loadSettlementData(this.settlement)
      } else {
        this.resetForm()
      }

      this.filteredInvoices = [...this.outstandingInvoices]
    },

    async loadReferenceData() {
      try {
        await Promise.all([
          this.loadCurrencies(),
          this.loadPaymentMethods(),
          this.loadBankAccounts(),
        ])
      } catch (error) {
        console.error('Error loading reference data:', error)
      }
    },

    async loadCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/find')
        this.currencies = data || []

        // Set default base currency (usually LAK)
        if (this.currencies.length > 0 && !this.form.baseCurrencyId) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'LAK') || this.currencies[0]
          this.form.baseCurrencyId = defaultCurrency.id
        }
      } catch (error) {
        console.error('Error loading currencies:', error)
        this.currencies = []
      }
    },

    async loadPaymentMethods() {
      try {
        const { data } = await this.$axios.get('/api/paymentMethod/find')
        this.paymentMethods = data || []
      } catch (error) {
        console.error('Error loading payment methods:', error)
        this.paymentMethods = []
      }
    },

    async loadBankAccounts() {
      try {
        const { data } = await this.$axios.get('/api/bank_account/find')
        this.bankAccounts = data || []
      } catch (error) {
        console.error('Error loading bank accounts:', error)
        this.bankAccounts = []
      }
    },

    loadSettlementData(settlement) {
      this.form = {
        id: settlement.id,
        settlementNumber: settlement.settlementNumber || '',
        settlementDate:
          settlement.settlementDate || new Date().toISOString().split('T')[0],
        paymentAmount: parseFloat(settlement.paymentAmount || 0),
        baseAmount: parseFloat(settlement.baseAmount || 0),
        exchangeRate: parseFloat(settlement.exchangeRate || 1),
        paymentCurrencyId: settlement.paymentCurrencyId || '',
        baseCurrencyId: settlement.baseCurrencyId || '',
        paymentMethodId: settlement.paymentMethodId || '',
        bankAccountId: settlement.bankAccountId || '',
        reference: settlement.reference || '',
        description: settlement.description || '',
        note: settlement.note || '',
        status: settlement.status || 'draft',
      }

      // Load existing invoice allocations
      if (settlement.invoiceSettlements) {
        this.selectedInvoices = settlement.invoiceSettlements.map(
          (allocation) => ({
            id: allocation.invoice.id,
            invoiceNumber: allocation.invoice.invoiceNumber,
            vendor: allocation.invoice.vendor,
            outstandingAmount: parseFloat(
              allocation.invoice.outstandingAmount || 0
            ),
            settledAmount: parseFloat(allocation.settledAmount || 0),
            exchangeRate: parseFloat(allocation.exchangeRate || 1),
          })
        )
      }
    },

    resetForm() {
      this.form = {
        id: null,
        settlementNumber: '',
        settlementDate: new Date().toISOString().split('T')[0],
        paymentAmount: 0,
        baseAmount: 0,
        exchangeRate: 1.0,
        paymentCurrencyId: '',
        baseCurrencyId: this.currencies.find((c) => c.code === 'LAK')?.id || '',
        paymentMethodId: '',
        bankAccountId: '',
        reference: '',
        description: '',
        note: '',
        status: 'draft',
      }
      this.selectedInvoices = []
      this.errors = {}
    },

    setDefaultBaseCurrency() {
      if (!this.form.baseCurrencyId && this.currencies.length > 0) {
        const defaultCurrency =
          this.currencies.find((c) => c.code === 'LAK') || this.currencies[0]
        this.form.baseCurrencyId = defaultCurrency.id
      }
    },

    onPaymentCurrencyChange() {
      this.calculateBaseAmount()
    },

    onBaseCurrencyChange() {
      this.calculateBaseAmount()
    },

    calculateBaseAmount() {
      if (this.isSameCurrency) {
        this.form.exchangeRate = 1.0
        this.form.baseAmount = this.form.paymentAmount
      } else if (this.form.paymentAmount && this.form.exchangeRate) {
        this.form.baseAmount = this.form.paymentAmount / this.form.exchangeRate
      }
    },

    calculateTotals() {
      // This will trigger the computed properties to recalculate
      this.$forceUpdate()
    },

    // Invoice Selection Methods
    filterInvoices() {
      let filtered = [...this.outstandingInvoices]

      // Filter by search term
      if (this.invoiceSearchTerm) {
        const search = this.invoiceSearchTerm.toLowerCase()
        filtered = filtered.filter(
          (invoice) =>
            invoice.invoiceNumber.toLowerCase().includes(search) ||
            invoice.vendor?.name?.toLowerCase().includes(search)
        )
      }

      // Filter by vendor
      if (this.selectedVendorFilter) {
        filtered = filtered.filter(
          (invoice) => invoice.vendor?.id === this.selectedVendorFilter
        )
      }

      this.filteredInvoices = filtered
    },

    toggleInvoiceSelection(invoice, event) {
      const isChecked = event.target.checked

      if (isChecked) {
        if (!this.tempSelectedInvoices.find((inv) => inv.id === invoice.id)) {
          this.tempSelectedInvoices.push({
            ...invoice,
            settledAmount: parseFloat(invoice.outstandingAmount || 0),
            exchangeRate: this.form.exchangeRate || 1,
          })
        }
      } else {
        this.tempSelectedInvoices = this.tempSelectedInvoices.filter(
          (inv) => inv.id !== invoice.id
        )
      }
    },

    isInvoiceSelected(invoiceId) {
      return this.tempSelectedInvoices.some((inv) => inv.id === invoiceId)
    },

    confirmInvoiceSelection() {
      try {
        console.log('confirmInvoiceSelection called')
        console.log('tempSelectedInvoices:', this.tempSelectedInvoices)

        // Add new selections to existing ones (avoid duplicates)
        this.tempSelectedInvoices.forEach((tempInvoice) => {
          if (!this.selectedInvoices.find((inv) => inv.id === tempInvoice.id)) {
            this.selectedInvoices.push(tempInvoice)
          }
        })

        console.log('selectedInvoices after:', this.selectedInvoices)

        this.closeInvoiceSelector()
        this.calculateTotals()

        console.log('confirmInvoiceSelection completed')
      } catch (error) {
        console.error('Error in confirmInvoiceSelection:', error)
      }
    },

    removeInvoice(index) {
      this.selectedInvoices.splice(index, 1)
      this.calculateTotals()
    },

    closeInvoiceSelector() {
      this.showInvoiceSelector = false
      this.tempSelectedInvoices = []
      this.invoiceSearchTerm = ''
      this.selectedVendorFilter = ''
      this.filteredInvoices = [...this.outstandingInvoices]
    },

    // Form Validation
    validateForm() {
      console.log('Starting validation...')
      this.errors = {}

      if (!this.form.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີຊຳລະ'
      }

      if (!this.form.paymentCurrencyId) {
        this.errors.paymentCurrencyId = 'ກະລຸນາເລືອກສະກຸນເງິນຊຳລະ'
      }

      if (!this.form.paymentAmount || this.form.paymentAmount <= 0) {
        this.errors.paymentAmount = 'ກະລຸນາໃສ່ຈຳນວນເງິນຊຳລະທີ່ຖືກຕ້ອງ'
      }

      if (!this.form.paymentMethodId) {
        this.errors.paymentMethodId = 'ກະລຸນາເລືອກວິທີການຊຳລະ'
      }

      // Validate allocations don't exceed payment amount
      if (this.totalAllocated > this.form.baseAmount) {
        this.errors.allocation = 'ຈຳນວນຈັດສັນເກີນຈຳນວນເງິນຊຳລະ'
      }

      const isValid = Object.keys(this.errors).length === 0
      console.log('Validation result:', isValid)
      console.log('Errors:', this.errors)

      return isValid
    },

    // Form Submission
    async submitForm() {
      console.log('submitForm called')
      console.log('Form data:', this.form)
      console.log('Selected invoices:', this.selectedInvoices)

      if (!this.validateForm()) {
        console.log('Validation failed:', this.errors)
        return
      }

      console.log('Validation passed')
      this.isSubmitting = true

      try {
        const formData = {
          ...this.form,
          makerId: this.user.id,
          invoiceAllocations: this.selectedInvoices.map((invoice) => ({
            invoiceId: invoice.id,
            settledAmount: parseFloat(invoice.settledAmount || 0),
            exchangeRate: parseFloat(invoice.exchangeRate || 1),
          })),
        }

        console.log('Emitting save event with data:', formData)
        this.$emit('save', formData)
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        this.isSubmitting = false
      }
    },

    // Dialog Controls
    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      // Only close if clicking on the overlay itself, not the dialog content
      this.closeDialog()
    },

    // Utility Methods
    getPaymentCurrencyCode() {
      const currency = this.currencies.find(
        (c) => c.id === this.form.paymentCurrencyId
      )
      return currency ? currency.code : ''
    },

    getBaseCurrencyCode() {
      const currency = this.currencies.find(
        (c) => c.id === this.form.baseCurrencyId
      )
      return currency ? currency.code : ''
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('en-GB')
    },
  },
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.settlement-dialog {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dialog-header {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
}

.dialog-header h4 {
  margin: 0;
  color: #333;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  color: #333;
  background: rgba(0, 0, 0, 0.1);
}

.dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.form-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #fafafa;
}

.section-title {
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 8px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.form-group {
  padding: 0 10px;
  margin-bottom: 20px;
}

.col-md-4 {
  flex: 0 0 33.333%;
  max-width: 33.333%;
}
.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.required {
  color: #e74c3c;
}

.form-control {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s ease;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
}

.form-control.is-invalid {
  border-color: #e74c3c;
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 12px;
  color: #e74c3c;
}

.form-text {
  font-size: 12px;
  color: #6c757d;
  margin-top: 5px;
}

.no-invoices {
  text-align: center;
  padding: 40px 20px;
  color: #666;
  background: white;
  border: 2px dashed #ddd;
  border-radius: 8px;
}

.no-invoices i {
  font-size: 36px;
  margin-bottom: 15px;
  opacity: 0.5;
}

.no-invoices p {
  margin: 10px 0 5px 0;
  font-weight: 600;
}

.no-invoices small {
  color: #999;
}

.invoice-allocations {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.table {
  margin: 0;
  border-collapse: collapse;
}

.table th {
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  padding: 12px 10px;
  font-size: 12px;
  white-space: nowrap;
}

.table td {
  padding: 10px;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
  font-size: 12px;
}

.table-sm th,
.table-sm td {
  padding: 8px;
}

.form-control-sm {
  padding: 4px 8px;
  font-size: 12px;
}

.allocation-summary {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #f8f9fa;
  border-top: 1px solid #dee2e6;
  font-size: 14px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-weight: 600;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
}

.btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Invoice Selector Modal */
.invoice-selector-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  padding: 20px;
}

.invoice-selector-modal {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 800px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 15px 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
}

.modal-header h5 {
  margin: 0;
  color: #333;
  font-weight: 600;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.invoice-filters {
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 6px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 10px;
}

.invoice-list {
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #e9ecef;
  border-radius: 6px;
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.selected-row {
  background-color: rgba(0, 123, 255, 0.1) !important;
}

.no-data {
  text-align: center;
  padding: 40px 20px;
  color: #666;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 15px 20px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
}

/* Responsive Design */
@media (max-width: 768px) {
  .settlement-dialog {
    max-width: 95vw;
    max-height: 95vh;
  }

  .form-row {
    flex-direction: column;
  }

  .col-md-4,
  .col-md-6 {
    flex: 1;
    max-width: 100%;
    margin-bottom: 15px;
  }

  .dialog-body {
    padding: 15px;
  }

  .form-section {
    padding: 15px;
  }

  .allocation-summary {
    flex-direction: column;
    gap: 10px;
  }

  .form-actions {
    flex-direction: column-reverse;
  }

  .form-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .invoice-selector-modal {
    max-width: 95vw;
  }

  .col-md-6 {
    flex: 1;
    max-width: 100%;
    margin-bottom: 10px;
  }
}
</style>