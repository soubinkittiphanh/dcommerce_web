<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="settlement-dialog" @click.stop>
      <div class="dialog-header">
        <h4>{{ isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ສ້າງການຊຳລະໃໝ່' }}</h4>
        <div class="header-actions">
          <button
            v-if="isEditMode"
            @click="openAuditDialog"
            class="audit-btn"
            type="button"
            :title="'ເບິ່ງປະຫວັດການດຳເນີນງານ'"
          >
            <i class="fas fa-history"></i>
            <span class="audit-text">ປະຫວັດ</span>
          </button>
          <button @click="closeDialog" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div class="dialog-body">
        <form @submit.prevent="submitForm">
          <!-- Basic Settlement Information -->
          <div class="form-section">
            <h5 class="section-title">
              <i class="fas fa-credit-card"></i>
              ຂໍ້ມູນການຊຳລະ
            </h5>

            <div class="form-grid">
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
                <label>ອ້າງອີງ</label>
                <input
                  v-model="form.reference"
                  type="text"
                  class="form-control"
                  maxlength="100"
                  placeholder="ຫມາຍເລກອ້າງອີງ"
                />
              </div>
              <div class="form-group">
                <label>ຜູ້ສ້າງ</label>
                <input
                  v-model="makerName"
                  type="text"
                  class="form-control"
                  :disabled="true"
                />
              </div>
              <div class="form-group span-2">
                <label>ຄຳອະທິບາຍ</label>
                <textarea
                  v-model="form.description"
                  class="form-control"
                  rows="2"
                  placeholder="ຄຳອະທິບາຍການຊຳລະ"
                ></textarea>
              </div>
              <div class="form-group span-2">
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
              <h5 class="section-title">
                <i class="fas fa-file-invoice-dollar"></i>
                ການຈັດສັນໃບແຈ້ງໜີ້
              </h5>
              <div class="section-actions">
                <button
                  type="button"
                  @click="showInvoiceSelector = true"
                  class="btn btn-primary btn-sm"
                  :disabled="!canModifyAllocations"
                >
                  <i class="fas fa-plus"></i> ເພີ່ມໃບແຈ້ງໜີ້
                </button>
                <div class="allocation-info">
                  <span class="info-item">
                    ຈັດສັນ: <strong>{{ formatCurrency(totalAllocated) }}</strong>
                  </span>
                  <span class="info-item">
                    ເຫຼືອ: <strong>{{ formatCurrency(unallocatedAmount) }}</strong>
                  </span>
                </div>
              </div>
            </div>

            <div v-if="selectedInvoices.length === 0" class="no-invoices">
              <i class="fas fa-file-invoice"></i>
              <p>ຍັງບໍ່ໄດ້ເລືອກໃບແຈ້ງໜີ້</p>
              <button type="button" class="btn btn-primary btn-sm" @click="showInvoiceSelector = true">
                <i class="fas fa-plus-circle"></i>
                ເລືອກໃບແຈ້ງໜີ້
              </button>
            </div>

            <div v-else class="invoice-allocations">
              <table class="table">
                <thead>
                  <tr>
                    <th style="width: 30px">#</th>
                    <th style="width: 120px">ເລກທີໃບແຈ້ງໜີ້</th>
                    <th style="width: 100px">ຜູ້ຂາຍ</th>
                    <th style="width: 80px">ຍອດຄ້າງຈ່າຍ</th>
                    <th style="width: 80px">ຈຳນວນຈັດສັນ</th>
                    <th style="width: 40px">ລຶບ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(invoice, index) in selectedInvoices" :key="invoice.id">
                    <td class="line-number">{{ index + 1 }}</td>
                    <td>{{ invoice.invoiceNumber }}</td>
                    <td>{{ invoice.vendor?.name || 'N/A' }}</td>
                    <td class="amount-cell">{{ formatCurrency(invoice.outstandingAmount) }}</td>
                    <td>
                      <input
                        v-model.number="invoice.settledAmount"
                        type="number"
                        step="0.01"
                        min="0"
                        :max="invoice.outstandingAmount"
                        class="form-control form-control-xs"
                        :disabled="!canModifyAllocations"
                        @input="calculateTotals"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        @click="removeInvoice(index)"
                        class="btn btn-xs btn-danger"
                        :disabled="!canModifyAllocations"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Compact Allocation Summary -->
              <div class="allocation-summary">
                <div class="totals-inline">
                  <span class="total-item">
                    ລວມຈັດສັນ: <strong>{{ formatCurrency(totalAllocated) }}</strong>
                  </span>
                  <span class="total-item">
                    ຍອດເຫຼືອ: <strong>{{ formatCurrency(unallocatedAmount) }}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Compact Approval Section -->
          <div v-if="showApprovalSection" class="form-section">
            <h5 class="section-title">
              <i class="fas fa-check-circle"></i>
              ການອະນຸມັດ
            </h5>
            <div class="form-grid">
              <div class="form-group">
                <label>ຜູ້ອະນຸມັດ</label>
                <input
                  v-model="checkerName"
                  type="text"
                  class="form-control"
                  :disabled="true"
                />
              </div>
              <div class="form-group">
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
        </form>
      </div>

      <!-- Compact Footer Actions -->
      <div class="dialog-footer">
        <div class="footer-actions">
          <button type="button" @click="closeDialog" class="btn btn-secondary">
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
            @click="submitForm"
          >
            <i class="fas fa-save"></i>
            <span v-if="isSubmitting">ກຳລັງບັນທຶກ...</span>
            <span v-else>{{ isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Compact Invoice Selector Modal -->
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
            <div class="filter-grid">
              <input
                v-model="invoiceSearchTerm"
                type="text"
                class="form-control"
                placeholder="ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້..."
                @input="filterInvoices"
              />
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

          <div class="invoice-list">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th style="width: 40px">ເລືອກ</th>
                  <th style="width: 120px">ເລກທີໃບແຈ້ງໜີ້</th>
                  <th style="width: 100px">ຜູ້ຂາຍ</th>
                  <th style="width: 80px">ວັນທີຄົບກຳນົດ</th>
                  <th style="width: 80px">ຍອດຄ້າງຈ່າຍ</th>
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
                  <td class="amount-cell">{{ formatCurrency(invoice.outstandingAmount) }}</td>
                </tr>
              </tbody>
            </table>

            <div v-if="filteredInvoices.length === 0" class="no-data">
              <p>ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບເງື່ອນໄຂ</p>
            </div>
          </div>

          <div class="modal-actions">
            <button type="button" @click.stop="closeInvoiceSelector" class="btn btn-secondary">
              ຍົກເລີກ
            </button>
            <button type="button" @click.stop="confirmInvoiceSelection" class="btn btn-primary">
              ຢືນຢັນການເລືອກ ({{ tempSelectedInvoices.length }})
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Settlement Audit Dialog -->
    <settlement-audit-dialog
      :visible="showAuditDialog"
      :settlement-id="form.id"
      :settlement-info="settlementInfoForAudit"
      @close="closeAuditDialog"
    />
  </div>
</template>

<script>
import SettlementAuditDialog from '~/components/accounting/ap/settlement/audit'

export default {
  name: 'SettlementDialog',
  components: { SettlementAuditDialog },
  props: {
    visible: { type: Boolean, default: false },
    settlement: { type: Object, default: null },
    outstandingInvoices: { type: Array, default: () => [] },
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
      showAuditDialog: false,
      invoiceSearchTerm: '',
      selectedVendorFilter: '',
      filteredInvoices: [],
    }
  },
  computed: {
    user() { return this.$auth.user || '' },
    isEditMode() { return !!(this.settlement && this.settlement.id) },
    canModify() { return ['draft', 'pending'].includes(this.form.status) },
    canModifyStatus() { return this.user.canManageSettlements || this.form.makerId === this.user.id },
    canModifyAllocations() { return this.canModify },
    canApprove() { return this.user.canApproveSettlements && this.form.status === 'pending' },
    canComplete() { return this.user.canCompleteSettlements && ['pending', 'approved'].includes(this.form.status) },
    showApprovalSection() { return this.isEditMode && ['pending', 'approved', 'completed'].includes(this.form.status) },
    totalAllocated() {
      return this.selectedInvoices.reduce((sum, invoice) => {
        return sum + parseFloat(invoice.settledAmount || 0)
      }, 0)
    },
    unallocatedAmount() { return parseFloat(this.form.baseAmount) - this.totalAllocated },
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
        return this.settlement.maker.cus_name || this.settlement.maker.username
      }
      return this.user.cus_name || this.user.username
    },
    checkerName() {
      if (this.isEditMode && this.settlement?.checker) {
        return this.settlement.checker.fullName || this.settlement.checker.username
      }
      return ''
    },
    settlementInfoForAudit() {
      if (!this.isEditMode) return null
      return {
        settlementId: this.form.id,
        paymentAmount: this.form.paymentAmount,
        baseAmount: this.form.baseAmount,
        settlementDate: this.form.settlementDate,
        status: this.form.status,
        reference: this.form.reference,
        description: this.form.description,
        note: this.form.note,
      }
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
        await Promise.all([this.loadPaymentMethods(), this.loadBankAccounts()])
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
      if (settlement.invoiceSettlements) {
        this.selectedInvoices = settlement.invoiceSettlements.map((allocation) => ({
          id: allocation.invoice.id,
          invoiceNumber: allocation.invoice.invoiceNumber,
          vendor: allocation.invoice.vendor,
          outstandingAmount: parseFloat(allocation.invoice.outstandingAmount || 0),
          settledAmount: parseFloat(allocation.amount || 0),
        }))
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
      if (this.form.paymentAmount) {
        this.form.baseAmount = this.form.paymentAmount
      }
    },
    calculateUnallocatedAmount() { this.$forceUpdate() },
    calculateTotals() { this.$forceUpdate() },
    openAuditDialog() {
      if (!this.isEditMode) {
        this.$toast?.warning('ບໍ່ສາມາດເບິ່ງປະຫວັດການດຳເນີນງານໄດ້ ເນື່ອງຈາກຍັງບໍ່ໄດ້ບັນທຶກການຊຳລະ')
        return
      }
      this.showAuditDialog = true
    },
    closeAuditDialog() { this.showAuditDialog = false },
    filterInvoices() {
      let filtered = [...this.outstandingInvoices]
      if (this.invoiceSearchTerm) {
        const search = this.invoiceSearchTerm.toLowerCase()
        filtered = filtered.filter(invoice =>
          invoice.invoiceNumber.toLowerCase().includes(search) ||
          invoice.vendor?.name?.toLowerCase().includes(search)
        )
      }
      if (this.selectedVendorFilter) {
        filtered = filtered.filter(invoice => invoice.vendor?.id === this.selectedVendorFilter)
      }
      this.filteredInvoices = filtered
    },
    toggleInvoiceSelection(invoice, event) {
      const isChecked = event.target.checked
      if (isChecked) {
        if (!this.tempSelectedInvoices.find(inv => inv.id === invoice.id)) {
          this.tempSelectedInvoices.push({
            ...invoice,
            settledAmount: parseFloat(invoice.outstandingAmount || 0),
          })
        }
      } else {
        this.tempSelectedInvoices = this.tempSelectedInvoices.filter(inv => inv.id !== invoice.id)
      }
    },
    isInvoiceSelected(invoiceId) {
      return this.tempSelectedInvoices.some(inv => inv.id === invoiceId)
    },
    confirmInvoiceSelection() {
      try {
        this.tempSelectedInvoices.forEach(tempInvoice => {
          if (!this.selectedInvoices.find(inv => inv.id === tempInvoice.id)) {
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
    validateForm() {
      this.errors = {}
      if (!this.form.settlementDate) this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີຊຳລະ'
      if (!this.form.paymentAmount || this.form.paymentAmount <= 0) this.errors.paymentAmount = 'ກະລຸນາໃສ່ຈຳນວນເງິນຊຳລະທີ່ຖືກຕ້ອງ'
      if (!this.form.baseAmount || this.form.baseAmount <= 0) this.errors.baseAmount = 'ກະລຸນາໃສ່ຈຳນວນເງິນພື້ນຖານທີ່ຖືກຕ້ອງ'
      if (!this.form.paymentMethodId) this.errors.paymentMethodId = 'ກະລຸນາເລືອກວິທີການຊຳລະ'
      if (this.form.reference && this.form.reference.length > 100) this.errors.reference = 'ຫມາຍເລກອ້າງອີງຍາວເກີນ 100 ຕົວອັກສອນ'
      if (this.totalAllocated > this.form.baseAmount) this.errors.allocation = 'ຈຳນວນຈັດສັນເກີນຈຳນວນເງິນຊຳລະ'
      return Object.keys(this.errors).length === 0
    },
    async submitForm() {
      if (!this.validateForm()) return
      this.isSubmitting = true
      try {
        const formData = {
          ...this.form,
          makerId: this.form.makerId || this.user.id,
          invoiceAllocations: this.selectedInvoices.map(invoice => ({
            invoiceId: invoice.id,
            amount: parseFloat(invoice.settledAmount || 0),
          })),
        }
        this.$emit('save', formData)
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        this.isSubmitting = false
      }
    },
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
        const completionData = { id: this.form.id, status: 'completed' }
        this.$emit('complete', completionData)
      } catch (error) {
        console.error('Error completing settlement:', error)
      } finally {
        this.isSubmitting = false
      }
    },
    closeDialog() { this.$emit('close') },
    handleOverlayClick() { this.closeDialog() },
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
/* Full Screen Layout */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0;
}

.settlement-dialog {
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Compact Header */
.dialog-header {
  padding: 12px 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg,  #01532B 0%, #337555 100%);
  color: white;
  min-height: 50px;
}

.dialog-header h4 {
  margin: 0;
  font-weight: 600;
  font-size: 16px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.audit-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
}

.audit-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.audit-text {
  font-size: 11px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: white;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Compact Body */
.dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

.form-section {
  margin: 0;
  padding: 15px;
  border-bottom: 1px solid #e9ecef;
  background: #fafafa;
}

.section-title {
  color: #333;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #17a2b8;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.section-title i {
  color: #17a2b8;
  font-size: 13px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 10px;
}

.section-actions {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.allocation-info {
  display: flex;
  gap: 12px;
  font-size: 11px;
}

.info-item {
  padding: 4px 8px;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
}

/* Compact Grid Layout */
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.span-2 {
  grid-column: span 2;
}

.form-group {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  margin-bottom: 3px;
  font-weight: 500;
  color: #333;
  font-size: 12px;
}

.required {
  color: #e74c3c;
}

/* Compact Form Controls */
.form-control {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  transition: border-color 0.2s ease;
  height: 32px;
}

.form-control:focus {
  outline: none;
  border-color: #17a2b8;
  box-shadow: 0 0 0 2px rgba(23, 162, 184, 0.1);
}

.form-control:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
}

.form-control.is-invalid {
  border-color: #e74c3c;
}

.form-control-xs {
  padding: 4px 6px;
  font-size: 11px;
  height: 28px;
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 2px;
  font-size: 10px;
  color: #e74c3c;
}

/* Compact No Invoices State */
.no-invoices {
  text-align: center;
  padding: 30px 20px;
  color: #666;
  background: white;
  border: 2px dashed #ddd;
  border-radius: 6px;
}

.no-invoices i {
  font-size: 32px;
  margin-bottom: 10px;
  opacity: 0.5;
}

.no-invoices p {
  margin: 8px 0;
  font-weight: 600;
  font-size: 14px;
}

/* Compact Invoice Allocations Table */
.invoice-allocations {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.table {
  margin: 0;
  border-collapse: collapse;
  font-size: 11px;
}

.table th {
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  font-weight: 600;
  padding: 6px 4px;
  font-size: 10px;
  white-space: nowrap;
  text-align: center;
}

.table td {
  padding: 4px;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
}

.line-number {
  text-align: center;
  font-weight: 600;
  color: #666;
  font-size: 10px;
}

.amount-cell {
  text-align: right;
  font-weight: 500;
  font-size: 10px;
}

/* Compact Allocation Summary */
.allocation-summary {
  background: #f8f9fa;
  padding: 10px;
  border-top: 1px solid #dee2e6;
}

.totals-inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  flex-wrap: wrap;
  gap: 10px;
}

.total-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Compact Buttons */
.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.btn-primary { background: #007bff; color: white; }
.btn-secondary { background: #6c757d; color: white; }
.btn-success { background: #28a745; color: white; }
.btn-info { background: #17a2b8; color: white; }
.btn-danger { background: #dc3545; color: white; }

.btn-sm {
  padding: 4px 8px;
  font-size: 11px;
}

.btn-xs {
  width: 24px;
  height: 24px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

.btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Compact Footer */
.dialog-footer {
  padding: 12px 20px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  min-height: 56px;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* Compact Invoice Selector Modal */
.invoice-selector-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  padding: 20px;
}

.invoice-selector-modal {
  background: white;
  border-radius: 6px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 800px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 12px 15px;
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
  font-size: 14px;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}

.invoice-filters {
  margin-bottom: 15px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 4px;
}

.filter-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.invoice-list {
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #e9ecef;
  border-radius: 4px;
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.selected-row {
  background-color: rgba(23, 162, 184, 0.1) !important;
}

.no-data {
  text-align: center;
  padding: 30px 20px;
  color: #666;
  font-size: 13px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 15px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .span-2 {
    grid-column: span 1;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .section-actions {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  
  .allocation-info {
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }
  
  .totals-inline {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  
  .footer-actions {
    flex-direction: column;
  }
  
  .footer-actions .btn {
    width: 100%;
    justify-content: center;
  }
  
  .invoice-selector-modal {
    max-width: 95vw;
  }
  
  .filter-grid {
    grid-template-columns: 1fr;
  }
  
  .invoice-list {
    overflow-x: auto;
  }
  
  .table {
    min-width: 500px;
  }
}

@media (max-width: 480px) {
  .dialog-header {
    padding: 10px 15px;
  }
  
  .dialog-header h4 {
    font-size: 14px;
  }
  
  .header-actions {
    gap: 6px;
  }
  
  .audit-text {
    display: none;
  }
  
  .dialog-body {
    padding: 0;
  }
  
  .form-section {
    padding: 12px;
  }
  
  .dialog-footer {
    padding: 10px 15px;
  }
}
</style>