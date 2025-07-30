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
              <div class="form-group col-md-6">
                <label>ສະຖານະ</label>
                <select
                  v-model="form.status"
                  class="form-control"
                  :disabled="!canModifyStatus"
                >
                  <option value="draft">ຮ່າງ</option>
                  <option value="pending">ລໍຖ້າການອະນຸມັດ</option>
                  <option value="approved">ອະນຸມັດແລ້ວ</option>
                  <option value="completed">ສຳເລັດແລ້ວ</option>
                  <option value="cancelled">ຍົກເລີກ</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
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
              <div class="form-group col-md-6">
                <label>ຈຳນວນເງິນພື້ນຖານ <span class="required">*</span></label>
                <input
                  v-model.number="form.baseAmount"
                  type="number"
                  step="0.01"
                  min="0"
                  class="form-control"
                  :class="{ 'is-invalid': errors.baseAmount }"
                  @input="calculateUnallocatedAmount"
                  required
                />
                <div v-if="errors.baseAmount" class="invalid-feedback">
                  {{ errors.baseAmount }}
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
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
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>ອ້າງອີງ</label>
                <input
                  v-model="form.reference"
                  type="text"
                  class="form-control"
                  maxlength="100"
                  placeholder="ຫມາຍເລກອ້າງອີງ"
                />
              </div>
              <div class="form-group col-md-6">
                <label>ຜູ້ສ້າງ</label>
                <input
                  v-model="makerName"
                  type="text"
                  class="form-control"
                  :disabled="true"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label>ຄຳອະທິບາຍ</label>
                <textarea
                  v-model="form.description"
                  class="form-control"
                  rows="3"
                  placeholder="ຄຳອະທິບາຍການຊຳລະ"
                ></textarea>
              </div>
              <div class="form-group col-md-6">
                <label>ໝາຍເຫດ</label>
                <textarea
                  v-model="form.note"
                  class="form-control"
                  rows="3"
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
                :disabled="!canModifyAllocations"
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
                        :disabled="!canModifyAllocations"
                        @input="calculateTotals"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        @click="removeInvoice(index)"
                        class="btn btn-sm btn-danger"
                        :disabled="!canModifyAllocations"
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

          <!-- Approval Section (for authorized users) -->
          <div v-if="showApprovalSection" class="form-section">
            <h5 class="section-title">ການອະນຸມັດ</h5>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>ຜູ້ອະນຸມັດ</label>
                <input
                  v-model="checkerName"
                  type="text"
                  class="form-control"
                  :disabled="true"
                />
              </div>
              <div class="form-group col-md-6">
                <label>ໝາຍເຫດການອະນຸມັດ</label>
                <textarea
                  v-model="form.approvalNote"
                  class="form-control"
                  rows="2"
                  placeholder="ໝາຍເຫດການອະນຸມັດ"
                  :disabled="!canApprove"
                ></textarea>
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
              v-if="canApprove && form.status === 'pending'"
              type="button"
              @click="approveSettlement"
              class="btn btn-success"
              :disabled="isSubmitting"
            >
              <i class="fas fa-check"></i> ອະນຸມັດ
            </button>
            
            <button
              v-if="canComplete && ['pending', 'approved'].includes(form.status)"
              type="button"
              @click="completeSettlement"
              class="btn btn-info"
              :disabled="isSubmitting"
            >
              <i class="fas fa-check-circle"></i> ສຳເລັດ
            </button>
            
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isSubmitting || !canModify"
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
        settlementDate: new Date().toISOString().split('T')[0],
        paymentAmount: 0,
        baseAmount: 0,
        paymentMethodId: '',
        bankAccountId: '',
        reference: '',
        description: '',
        note: '',
        status: 'draft',
        makerId: null,
        checkerId: null,
        approvalNote: '',
      },
      selectedInvoices: [],
      tempSelectedInvoices: [],
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

    canModify() {
      return ['draft', 'pending'].includes(this.form.status)
    },

    canModifyStatus() {
      // Only allow status changes if user has appropriate permissions
      return this.user.canManageSettlements || this.form.makerId === this.user.id
    },

    canModifyAllocations() {
      return this.canModify
    },

    canApprove() {
      return this.user.canApproveSettlements && this.form.status === 'pending'
    },

    canComplete() {
      return this.user.canCompleteSettlements && ['pending', 'approved'].includes(this.form.status)
    },

    showApprovalSection() {
      return this.isEditMode && ['pending', 'approved', 'completed'].includes(this.form.status)
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

    makerName() {
      if (this.isEditMode && this.settlement?.maker) {
        return this.settlement.maker.fullName || this.settlement.maker.username
      }
      return this.user.fullName || this.user.username
    },

    checkerName() {
      if (this.isEditMode && this.settlement?.checker) {
        return this.settlement.checker.fullName || this.settlement.checker.username
      }
      return ''
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) {
        this.initializeDialog()
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
          this.loadPaymentMethods(),
          this.loadBankAccounts(),
        ])
      } catch (error) {
        console.error('Error loading reference data:', error)
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
        settlementDate: settlement.settlementDate || new Date().toISOString().split('T')[0],
        paymentAmount: parseFloat(settlement.paymentAmount || 0),
        baseAmount: parseFloat(settlement.baseAmount || 0),
        paymentMethodId: settlement.paymentMethodId || '',
        bankAccountId: settlement.bankAccountId || '',
        reference: settlement.reference || '',
        description: settlement.description || '',
        note: settlement.note || '',
        status: settlement.status || 'draft',
        makerId: settlement.makerId || this.user.id,
        checkerId: settlement.checkerId || null,
        approvalNote: settlement.approvalNote || '',
      }

      // Load existing invoice allocations
      if (settlement.invoiceSettlements) {
        this.selectedInvoices = settlement.invoiceSettlements.map(
          (allocation) => ({
            id: allocation.invoice.id,
            invoiceNumber: allocation.invoice.invoiceNumber,
            vendor: allocation.invoice.vendor,
            outstandingAmount: parseFloat(allocation.invoice.outstandingAmount || 0),
            settledAmount: parseFloat(allocation.amount || 0), // Using 'amount' from InvoiceSettlementLine model
          })
        )
      }
    },

    resetForm() {
      this.form = {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        paymentAmount: 0,
        baseAmount: 0,
        paymentMethodId: '',
        bankAccountId: '',
        reference: '',
        description: '',
        note: '',
        status: 'draft',
        makerId: this.user.id,
        checkerId: null,
        approvalNote: '',
      }
      this.selectedInvoices = []
      this.errors = {}
    },

    calculateBaseAmount() {
      // If payment amount changes, update base amount
      // This is a simplified calculation - you may want to add currency conversion logic
      if (this.form.paymentAmount) {
        this.form.baseAmount = this.form.paymentAmount
      }
    },

    calculateUnallocatedAmount() {
      // Trigger reactive updates
      this.$forceUpdate()
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
        // Add new selections to existing ones (avoid duplicates)
        this.tempSelectedInvoices.forEach((tempInvoice) => {
          if (!this.selectedInvoices.find((inv) => inv.id === tempInvoice.id)) {
            this.selectedInvoices.push(tempInvoice)
          }
        })

        this.closeInvoiceSelector()
        this.calculateTotals()
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
      this.errors = {}

      if (!this.form.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີຊຳລະ'
      }

      if (!this.form.paymentAmount || this.form.paymentAmount <= 0) {
        this.errors.paymentAmount = 'ກະລຸນາໃສ່ຈຳນວນເງິນຊຳລະທີ່ຖືກຕ້ອງ'
      }

      if (!this.form.baseAmount || this.form.baseAmount <= 0) {
        this.errors.baseAmount = 'ກະລຸນາໃສ່ຈຳນວນເງິນພື້ນຖານທີ່ຖືກຕ້ອງ'
      }

      if (!this.form.paymentMethodId) {
        this.errors.paymentMethodId = 'ກະລຸນາເລືອກວິທີການຊຳລະ'
      }

      // Validate reference length
      if (this.form.reference && this.form.reference.length > 100) {
        this.errors.reference = 'ຫມາຍເລກອ້າງອີງຍາວເກີນ 100 ຕົວອັກສອນ'
      }

      // Validate allocations don't exceed payment amount
      if (this.totalAllocated > this.form.baseAmount) {
        this.errors.allocation = 'ຈຳນວນຈັດສັນເກີນຈຳນວນເງິນຊຳລະ'
      }

      return Object.keys(this.errors).length === 0
    },

    // Form Submission
    async submitForm() {
      if (!this.validateForm()) {
        return
      }

      this.isSubmitting = true

      try {
        const formData = {
          ...this.form,
          makerId: this.form.makerId || this.user.id,
          invoiceAllocations: this.selectedInvoices.map((invoice) => ({
            invoiceId: invoice.id,
            amount: parseFloat(invoice.settledAmount || 0), // Using 'amount' field from model
          })),
        }

        this.$emit('save', formData)
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        this.isSubmitting = false
      }
    },

    // Settlement Actions
    async approveSettlement() {
      if (!this.canApprove) return

      this.isSubmitting = true
      try {
        const approvalData = {
          id: this.form.id,
          status: 'approved',
          checkerId: this.user.id,
          approvalNote: this.form.approvalNote,
        }

        this.$emit('approve', approvalData)
      } catch (error) {
        console.error('Error approving settlement:', error)
      } finally {
        this.isSubmitting = false
      }
    },

    async completeSettlement() {
      if (!this.canComplete) return

      this.isSubmitting = true
      try {
        const completionData = {
          id: this.form.id,
          status: 'completed',
        }

        this.$emit('complete', completionData)
      } catch (error) {
        console.error('Error completing settlement:', error)
      } finally {
        this.isSubmitting = false
      }
    },

    // Dialog Controls
    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    // Utility Methods
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

.btn-success {
  background: #28a745;
  color: white;
}

.btn-info {
  background: #17a2b8;
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