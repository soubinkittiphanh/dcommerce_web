<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="enhanced-dialog" @click.stop>
      <div class="modal-header">
        <h4 class="modal-title">
          <i class="fas fa-file-invoice"></i>
          {{ isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່' }}
        </h4>
        <!-- Audit History Button (only show in edit mode) -->

        <button type="button" class="close-button" @click="handleClose">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="modal-body">
        <!-- Loading State -->
        <div v-if="formLoading" class="loading-state">
          <div class="spinner"></div>
          <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>

        <!-- Single Form View -->
        <div v-else class="invoice-form">
          <form @submit.prevent="handleSubmit">
            <!-- Basic Information Section -->
            <div class="form-section">
              <h5 class="section-title">
                <i class="fas fa-info-circle"></i>
                ຂໍ້ມູນພື້ນຖານ
              </h5>

              <!-- Row 1: Basic Info -->
              <div class="form-row">
                <div class="form-group">
                  <label for="invoiceNumber" class="required"
                    >ເລກທີໃບແຈ້ງໜີ້</label
                  >
                  <input
                    id="invoiceNumber"
                    v-model="form.invoiceNumber"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.invoiceNumber }"
                    placeholder="INV-2025-001"
                    :readonly="isEdit"
                  />
                  <div v-if="errors.invoiceNumber" class="invalid-feedback">
                    {{ errors.invoiceNumber }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="clientId" class="required">ລູກຄ້າ / ຕົວແທນ</label>
                  <v-autocomplete
                    id="agencyId"
                    v-model="form.agencyId"
                    :items="agencies"
                    item-value="id"
                    item-text="name"
                    label="ເລືອກຕົວແທນ"
                    :error="!!errors.agencyId"
                    :error-messages="errors.agencyId"
                    dense
                    outlined
                    clearable
                    hide-details="auto"
                    class="mt-0"
                    @change="onVendorChange"
                  >
                    <template v-slot:item="{ item }">
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ item.name || item.agencyName }}
                          <span class="grey--text text-caption">
                            ({{ item.code || item.agencyCode }})
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <template v-slot:selection="{ item }">
                      {{ item.name || item.agencyName }} ({{
                        item.code || item.agencyCode
                      }})
                    </template>
                  </v-autocomplete>
                  <div v-if="errors.agencyId" class="invalid-feedback">
                    {{ errors.agencyId }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="jobBatchId" class="required">ແບັດຈັອບ</label>
                  <v-autocomplete
                    id="jobBatchId"
                    v-model="form.jobBatchId"
                    :items="jobBatches"
                    item-value="id"
                    item-text="runningNo"
                    :filter="jobBatchFilter"
                    :error="!!errors.jobBatchId"
                    :error-messages="errors.jobBatchId"
                    dense
                    outlined
                    clearable
                    hide-details="auto"
                    placeholder="ເລືອກແບັດຈັອບ"
                    @change="onBatchJobChange"
                  >
                    <template v-slot:item="{ item }">
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ item.runningNo }} ({{
                            item.totalPositions || item.mou?.jobTitle
                          }})
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <template v-slot:selection="{ item }">
                      {{ item.runningNo }} ({{
                        item.totalPositions || item.mou?.jobTitle
                      }})
                    </template>
                  </v-autocomplete>
                </div>
                <div class="form-group">
                  <label for="status">ສະຖານະ</label>
                  <select
                    id="status"
                    v-model="form.status"
                    class="form-control"
                  >
                    <option value="draft">ແບບຮ່າງ</option>
                    <option value="sent">ສົ່ງແລ້ວ</option>
                    <option value="paid">ຈ່າຍແລ້ວ</option>
                    <option value="overdue">ເກີນກຳນົດ</option>
                    <option value="cancelled">ຍົກເລີກ</option>
                  </select>
                </div>
              </div>

              <!-- Row 2: Dates -->
              <div class="form-row">
                <div class="form-group">
                  <label for="invoiceDate" class="required"
                    >ວັນທີໃບແຈ້ງໜີ້</label
                  >
                  <input
                    id="invoiceDate"
                    v-model="form.invoiceDate"
                    type="date"
                    class="form-control"
                    :class="{ 'is-invalid': errors.invoiceDate }"
                    @change="calculateDueDate"
                  />
                  <div v-if="errors.invoiceDate" class="invalid-feedback">
                    {{ errors.invoiceDate }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="dueDate">ວັນທີຄົບກຳນົດ</label>
                  <input
                    id="dueDate"
                    v-model="form.dueDate"
                    type="date"
                    class="form-control"
                    :class="{ 'is-invalid': errors.dueDate }"
                  />
                  <div v-if="errors.dueDate" class="invalid-feedback">
                    {{ errors.dueDate }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="currencyId">ສະກຸນເງິນ</label>
                  <v-autocomplete
                    id="currencyId"
                    v-model="form.currencyId"
                    :items="currencies"
                    item-value="id"
                    item-text="name"
                    :filter="currencyFilter"
                    :error="!!errors.currencyId"
                    :error-messages="errors.currencyId"
                    dense
                    outlined
                    clearable
                    hide-details="auto"
                    placeholder="ເລືອກສະກຸນເງິນ"
                    @change="onCurrencyChange"
                  >
                    <template v-slot:item="{ item }">
                      <v-list-item-content>
                        <v-list-item-title>
                          {{ item.name }} ({{ item.code }})
                        </v-list-item-title>
                      </v-list-item-content>
                    </template>
                    <template v-slot:selection="{ item }">
                      {{ item.name }} ({{ item.code }})
                    </template>
                  </v-autocomplete>
                </div>
                <div class="form-group">
                  <label for="exchangeRate">ອັດຕາແລກປ່ຽນ</label>
                  <input
                    id="exchangeRate"
                    v-model="form.exchangeRate"
                    type="number"
                    step="0.0001"
                    min="0"
                    class="form-control"
                    placeholder="1.0000"
                  />
                </div>
              </div>

              <!-- Row 3: Description -->
              <div class="form-row">
                <div class="form-group full-width">
                  <label for="description">ລາຍລະອຽດ</label>
                  <textarea
                    id="description"
                    v-model="form.description"
                    class="form-control textarea-compact"
                    rows="2"
                    placeholder="ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້..."
                  ></textarea>
                </div>
              </div>

              <!-- Reason field for audit trail (only show when editing) -->
              <div v-if="isEdit" class="form-row">
                <div class="form-group full-width">
                  <label for="reason" class="required">ເຫດຜົນຂອງການແກ້ໄຂ</label>
                  <input
                    id="reason"
                    v-model="form.reason"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.reason }"
                    placeholder="ລະບຸເຫດຜົນຂອງການແກ້ໄຂ..."
                  />
                  <div v-if="errors.reason" class="invalid-feedback">
                    {{ errors.reason }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Line Items Section -->
            <div class="form-section">
              <div class="section-header">
                <h5 class="section-title">
                  <i class="fas fa-list"></i>
                  ລາຍການສິນຄ້າ
                  <span v-if="lineItems.length > 0" class="line-count">{{
                    lineItems.length
                  }}</span>
                </h5>
                <div class="add-line-actions">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    @click="addNewLine"
                  >
                    <i class="fas fa-plus"></i>
                    ເພີ່ມລາຍການ
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click="addMultipleLines(5)"
                  >
                    +5
                  </button>
                </div>
              </div>

              <!-- Empty State -->
              <div v-if="lineItems.length === 0" class="empty-line-state">
                <div class="empty-content">
                  <i class="fas fa-shopping-cart"></i>
                  <h4>ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addNewLine"
                  >
                    <i class="fas fa-plus"></i>
                    ເພີ່ມລາຍການທຳອິດ
                  </button>
                </div>
              </div>

              <!-- Line Items Table -->
              <div v-else class="line-items-table-container">
                <div class="line-items-table">
                  <table class="table table-compact">
                    <thead>
                      <tr>
                        <th style="width: 20px">#</th>
                        <th>ລາຍລະອຽດ *</th>
                        <th>ຈຳນວນ *</th>
                        <th>ລາຄາຕໍ່ຫົວ *</th>
                        <th>DR</th>
                        <th>CR</th>
                        <th>ລວມຕໍ່ແຖວ</th>
                        <th style="width: 40px">ລຶບ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(line, index) in lineItems"
                        :key="line.tempId || line.id"
                        class="line-row"
                      >
                        <td class="line-number">{{ index + 1 }}</td>
                        <td>
                          <input
                            v-model="line.description"
                            type="text"
                            class="form-control form-control-xs"
                            :class="{
                              'is-invalid': errors[`line_${index}_description`],
                            }"
                            placeholder="ລາຍລະອຽດສິນຄ້າ..."
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <input
                            v-model="line.quantity"
                            type="number"
                            step="0.01"
                            min="0"
                            class="form-control form-control-xs"
                            :class="{
                              'is-invalid': errors[`line_${index}_quantity`],
                            }"
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <input
                            v-model="line.unitPrice"
                            type="number"
                            step="0.01"
                            min="0"
                            class="form-control form-control-xs"
                            :class="{
                              'is-invalid': errors[`line_${index}_unitPrice`],
                            }"
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <v-autocomplete
                            v-model="line.DRglAccountId"
                            :items="glAccounts"
                            item-value="id"
                            item-text="accountNumber"
                            label="DR Account"
                            :error="!!errors[`line_${index}_DRglAccountId`]"
                            dense
                            outlined
                            clearable
                            hide-details="auto"
                            class="mt-0"
                          >
                            <template v-slot:item="{ item }">
                              <v-list-item-content>
                                <v-list-item-title>
                                  {{ item.accountNumber }} -
                                  {{ item.accountName }}
                                </v-list-item-title>
                              </v-list-item-content>
                            </template>
                            <template v-slot:selection="{ item }">
                              {{ item.accountNumber }} - {{ item.accountName }}
                            </template>
                          </v-autocomplete>
                          <small
                            v-if="errors[`line_${index}_DRglAccountId`]"
                            class="text-danger d-block mt-1"
                          >
                            {{ errors[`line_${index}_DRglAccountId`] }}
                          </small>
                        </td>

                        <td>
                          <v-autocomplete
                            v-model="line.CRglAccountId"
                            :items="glAccounts"
                            item-value="id"
                            item-text="accountNumber"
                            label="CR Account"
                            :error="!!errors[`line_${index}_CRglAccountId`]"
                            dense
                            outlined
                            clearable
                            hide-details="auto"
                            class="mt-0"
                          >
                            <template v-slot:item="{ item }">
                              <v-list-item-content>
                                <v-list-item-title>
                                  {{ item.accountNumber }} -
                                  {{ item.accountName }}
                                </v-list-item-title>
                              </v-list-item-content>
                            </template>
                            <template v-slot:selection="{ item }">
                              {{ item.accountNumber }} - {{ item.accountName }}
                            </template>
                          </v-autocomplete>
                          <small
                            v-if="errors[`line_${index}_CRglAccountId`]"
                            class="text-danger d-block mt-1"
                          >
                            {{ errors[`line_${index}_CRglAccountId`] }}
                          </small>
                        </td>
                        <td class="line-total">
                          {{ formatCurrency(line.lineTotal || 0) }}
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-xs btn-danger"
                            @click="removeLine(index)"
                            title="ລຶບລາຍການ"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Total Amount Display -->
            <div class="amount-summary">
              <div class="totals-compact">
                <div class="total-item">
                  <span>ລວມຍ່ອຍ:</span>
                  <span class="amount">{{
                    formatCurrency(calculatedSubtotal)
                  }}</span>
                </div>
                <div class="total-item">
                  <span>ພາສີລວມ:</span>
                  <span class="amount">{{
                    formatCurrency(calculatedTax)
                  }}</span>
                </div>
                <div class="total-item">
                  <span>ຍອດສຸດທິ:</span>
                  <span class="amount">{{
                    formatCurrency(calculatedNet)
                  }}</span>
                </div>
                <div class="total-item grand-total">
                  <span>ລວມທັງໝົດ:</span>
                  <span class="amount">{{
                    formatCurrency(calculatedTotal)
                  }}</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="modal-footer">
        <div class="footer-actions">
          <button
            type="button"
            class="btn btn-secondary btn-compact"
            @click="handleClose"
            :disabled="saving"
          >
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          <button
            type="button"
            class="btn btn-primary btn-compact"
            @click="handleSubmit"
            :disabled="saving || !isFormValid"
          >
            <i v-if="saving" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i>
            {{ saving ? 'ກຳລັງບັນທຶກ...' : isEdit ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </button>
          <!-- Print Button (only show in edit mode) -->
          <button
            v-if="isEdit"
            @click="printInvoice"
            class="btn btn-primary btn-compact"
            type="button"
            title="ພິມໃບແຈ້ງໜີ້"
          >
            <i class="fas fa-print"></i>
            <span class="audit-text">ພິມ</span>
          </button>
        </div>
      </div>
    </div>

    <!-- AR INVOICE Audit Dialog -->
    <invoice-audit-dialog
      :visible="showAuditDialog"
      :invoice-id="form.id"
      :invoice-info="invoiceInfoForAudit"
      @close="closeAuditDialog"
    />

    <!-- AR Invoice Printer -->
    <a-r-invoice-printer
      :visible="showInvoicePrinter"
      :invoice-data="selectedInvoice"
      :agencies="agencies"
      :currencies="currencies"
      @close="showInvoicePrinter = false"
    />
  </div>
</template>


<script>
import InvoiceAuditDialog from '~/components/accounting/ar/invoice/audit'
import ARInvoicePrinter from '~/components/accounting/ar/invoice/voucher'

export default {
  name: 'InvoiceHeaderMaintain',
  components: {
    InvoiceAuditDialog,
    ARInvoicePrinter,
  },
  props: {
    glAccounts: { type: Array, default: () => [] },
    visible: {
      type: Boolean,
      default: false,
    },
    invoice: {
      type: Object,
      default: null,
    },
    customers: {
      type: Array,
      default: () => [],
    },
    agencies: {
      type: Array,
      default: () => [],
    },
    jobBatches: {
      type: Array,
      default: () => [],
    },
    currencies: {
      type: Array,
      default: () => [],
    },
    preselectedBatchId: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      selectedVendor: null,
      showAuditDialog: false,
      showInvoicePrinter: false,
      selectedInvoice: null,
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      lineItems: [],
      nextTempId: 1,
      selectedCustomer: null,
      selectedCurrency: null,
      form: {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        clientId: '',
        agencyId: '',
        jobBatchId: '',
        currencyId: '',
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
        status: 'draft',
        description: '',
        reason: '',
      },
    }
  },

  computed: {
    isEdit() {
      return !!(this.invoice && this.invoice.id)
    },
    user() {
      return this.$auth.user || ''
    },
    invoiceInfoForAudit() {
      if (!this.form.id) return null

      return {
        invoiceNumber: this.form.invoiceNumber,
        totalAmount: this.calculatedTotal,
        invoiceDate: this.form.invoiceDate,
        status: this.form.status,
        clientId: this.form.clientId,
        agencyId: this.form.agencyId,
        jobBatchId: this.form.jobBatchId,
        currencyId: this.form.currencyId,
        description: this.form.description,
      }
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal =
          (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0)
        return sum + subtotal
      }, 0)
    },

    calculatedTax() {
      return this.lineItems.reduce(
        (sum, line) => sum + (parseFloat(line.taxAmount) || 0),
        0
      )
    },

    calculatedNet() {
      return this.calculatedSubtotal
    },

    calculatedTotal() {
      return this.lineItems.reduce(
        (sum, line) => sum + (parseFloat(line.lineTotal) || 0),
        0
      )
    },

    isFormValid() {
      const hasValidHeader =
        this.form.invoiceNumber &&
        this.form.invoiceDate &&
        this.form.agencyId &&
        (!this.isEdit || this.form.reason)

      const hasValidLines =
        this.lineItems.length > 0 &&
        this.lineItems.every(
          (line) =>
            line.description &&
            (parseFloat(line.quantity) || 0) > 0 &&
            (parseFloat(line.unitPrice) || 0) >= 0
        )

      return hasValidHeader && hasValidLines
    },
  },

  watch: {
    visible: {
      handler(newVal) {
        if (newVal) {
          this.initializeDialog()
        } else {
          this.resetDialog()
        }
      },
      immediate: true,
    },
    preselectedBatchId: {
      handler(batchId) {
        if (batchId && this.visible && !this.isEdit) {
          this.$nextTick(() => {
            this.form.jobBatchId = batchId
            this.onBatchJobChange()
          })
        }
      },
      immediate: true,
    },
    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog()
        }
      },
    },
  },

  methods: {
    // Print Invoice Method
    printInvoice() {
      if (!this.isEdit) {
        this.$toast?.warning('ກະລຸນາບັນທຶກໃບແຈ້ງໜີ້ກ່ອນພິມ')
        return
      }

      if (this.lineItems.length === 0) {
        this.$toast?.warning('ບໍ່ມີລາຍການສຳລັບພິມ')
        return
      }

      // Prepare complete invoice data
      const invoiceData = {
        id: this.form.id,
        invoiceNumber: this.form.invoiceNumber,
        invoiceDate: this.form.invoiceDate,
        dueDate: this.form.dueDate,
        agencyId: this.form.agencyId,
        jobBatchId: this.form.jobBatchId,
        currencyId: this.form.currencyId,
        exchangeRate: this.form.exchangeRate,
        status: this.form.status,
        description: this.form.description || '',
        lineItems: this.lineItems.map((line) => ({
          description: line.description || '-',
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxAmount: parseFloat(line.taxAmount) || 0,
          lineTotal: parseFloat(line.lineTotal) || 0,
        })),
      }

      // Set data first, then open dialog
      this.selectedInvoice = invoiceData

      // Use nextTick to ensure data is set before dialog opens
      this.$nextTick(() => {
        this.showInvoicePrinter = true
      })
    },

    async requestSequence() {
      try {
        const { data } = await this.$axios.get('/api/ar-invoices/sequence')

        if (data.success) {
          this.form.invoiceNumber = data.data.invoiceNumber
          this.$message.success(
            `Invoice number generated: ${data.data.invoiceNumber}`
          )
          return data.data.invoiceNumber
        }
      } catch (error) {
        console.error('Error getting invoice sequence:', error)
        this.$message.error('Failed to generate invoice number')
        throw error
      }
    },

    updateSelectedVendor() {
      if (this.form.agencyId && this.agencies.length > 0) {
        this.selectedVendor = this.agencies.find(
          (v) => v.id === this.form.agencyId
        )
      } else {
        this.selectedVendor = null
      }
    },

    onVendorChange() {
      this.updateSelectedVendor()
      this.calculateDueDate()
      this.clearFieldError('agencyId')
    },

    openAuditDialog() {
      console.warn(`Opening dialog`)
      this.showAuditDialog = true
    },

    closeAuditDialog() {
      this.showAuditDialog = false
    },

    async initializeDialog() {
      this.activeTab = 'header'
      this.clearErrors()

      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          invoiceDate: this.invoice.invoiceDate
            ? this.invoice.invoiceDate.split('T')[0]
            : '',
          dueDate: this.invoice.dueDate
            ? this.invoice.dueDate.split('T')[0]
            : '',
          agencyId: this.invoice.agencyId,
          jobBatchId: this.invoice.jobBatchId,
          currencyId: this.invoice.currencyId,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          totalAmount: this.invoice.totalAmount || 0.0,
          taxAmount: this.invoice.taxAmount || 0.0,
          netAmount: this.invoice.netAmount || 0.0,
          status: this.invoice.status || 'draft',
          description: this.invoice.description || '',
          reason: '',
        }

        await this.loadLineItems(this.invoice.id)
      } else {
        this.resetForm()

        this.form.invoiceDate = new Date().toISOString().split('T')[0]
        const dueDate = new Date()
        dueDate.setDate(dueDate.getDate() + 30)
        this.form.dueDate = dueDate.toISOString().split('T')[0]

        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'USD') || this.currencies[0]
          this.form.currencyId = defaultCurrency.id
          this.selectedCurrency = defaultCurrency
        }

        this.lineItems = [this.createEmptyLine()]
        this.requestSequence()
      }

      this.updateSelectedCustomer()
      this.updateSelectedCurrency()
    },

    resetDialog() {
      this.resetForm()
      this.lineItems = []
      this.selectedCustomer = null
      this.selectedCurrency = null
      this.selectedInvoice = null
      this.clearErrors()
      this.activeTab = 'header'
      this.formLoading = false
      this.saving = false
    },

    async loadLineItems(invoiceId) {
      try {
        const { data } = await this.$axios.get(
          `/api/ar-invoice-lines/by-header/${invoiceId}`
        )
        this.lineItems = data.data || [this.createEmptyLine()]

        this.lineItems.forEach((line) => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++
          }
        })
      } catch (error) {
        console.error('Error loading line items:', error)
        this.lineItems = [this.createEmptyLine()]
      }
    },

    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        DRglAccountId: null,
        CRglAccountId: null,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0,
      }
    },

    addNewLine() {
      this.lineItems.push(this.createEmptyLine())
    },

    addMultipleLines(count) {
      for (let i = 0; i < count; i++) {
        this.lineItems.push(this.createEmptyLine())
      }
    },

    removeLine(index) {
      if (this.lineItems.length > 1) {
        this.lineItems.splice(index, 1)
        this.updateLineNumbers()
      }
    },

    updateLineNumbers() {
      this.lineItems.forEach((line, index) => {
        line.lineNumber = index + 1
      })
    },

    calculateLineTotal(line) {
      const quantity = parseFloat(line.quantity) || 0
      const unitPrice = parseFloat(line.unitPrice) || 0
      const taxRate = parseFloat(line.taxRate) || 0

      const subtotal = quantity * unitPrice
      const taxAmount = subtotal * (taxRate / 100)
      line.taxAmount = taxAmount
      line.lineTotal = subtotal + taxAmount
    },

    updateSelectedCustomer() {
      if (this.form.agencyId && this.agencies.length > 0) {
        this.selectedCustomer = this.agencies.find(
          (c) => c.id === this.form.agencyId
        )
      } else {
        this.selectedCustomer = null
      }
    },

    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(
          (c) => c.id === this.form.currencyId
        )
        this.form.exchangeRate = this.currencies.find(
          (c) => c.id === this.form.currencyId
        ).rate
      } else {
        this.selectedCurrency = null
      }
    },

    onCustomerChange() {
      this.updateSelectedCustomer()
      this.calculateDueDate()
      this.clearFieldError('agencyId')
    },

    onBatchJobChange() {
      this.clearFieldError('jobBatchId')

      if (!this.form.jobBatchId) {
        return
      }

      const selectedBatch = this.jobBatches.find(
        (batch) => batch.id === this.form.jobBatchId
      )

      if (!selectedBatch) {
        return
      }

      if (
        this.lineItems.length > 0 &&
        this.lineItems.some((line) => line.description)
      ) {
        const shouldClear = confirm(
          'ມີລາຍການສິນຄ້າຢູ່ແລ້ວ. ທ່ານຕ້ອງການແທນທີ່ດ້ວຍລາຍການຈາກ Job Batch ບໍ?'
        )
        if (!shouldClear) {
          return
        }
      }

      this.lineItems = []

      const mou = selectedBatch.mou

      if (!mou) {
        this.showToast('ບໍ່ພົບຂໍ້ມູນ MOU ສຳລັບ Job Batch ນີ້', 'warning')
        this.lineItems = [this.createEmptyLine()]
        return
      }

      const pmCharge = parseFloat(mou.pmCharge) || 0
      const numberOfWorkers = parseFloat(mou.numberOfWorkers) || 1
      const unitPrice =
        numberOfWorkers > 0 ? pmCharge / numberOfWorkers : pmCharge

      const quantity = parseFloat(selectedBatch.totalPositions) || 0

      if (mou.currencyId) {
        this.form.currencyId = mou.currencyId
        this.updateSelectedCurrency()
      }

      const recruitmentLine = {
        tempId: this.nextTempId++,
        lineNumber: 1,
        description: `ຄ່າບໍລິການຮັບສະໝັກງານ - ${mou.jobTitle || 'N/A'} (${
          selectedBatch.runningNo
        }) - ${mou.employerCompany || ''}`,
        quantity: quantity,
        unitPrice: unitPrice,
        DRglAccountId: null,
        CRglAccountId: null,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0,
      }
      this.calculateLineTotal(recruitmentLine)
      this.lineItems.push(recruitmentLine)

      this.updateLineNumbers()

      this.showToast(
        `ເພີ່ມລາຍການຈາກ Job Batch ${
          selectedBatch.runningNo
        } ສຳເລັດແລ້ວ (${quantity} ຕຳແໜ່ງ × ${this.formatCurrency(unitPrice)})`,
        'success'
      )

      this.activeTab = 'lines'
    },

    onCurrencyChange() {
      this.updateSelectedCurrency()
      this.clearFieldError('currencyId')
    },

    calculateDueDate() {
      if (this.form.invoiceDate && this.selectedCustomer?.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate)
        const dueDate = new Date(invoiceDate)
        dueDate.setDate(
          dueDate.getDate() + parseInt(this.selectedCustomer.paymentTerms)
        )
        this.form.dueDate = dueDate.toISOString().split('T')[0]
      }
    },

    validateForm() {
      this.errors = {}

      if (!this.form.invoiceNumber) {
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້'
      }

      if (!this.form.agencyId) {
        this.errors.agencyId = 'ກະລຸນາເລືອກລູກຄ້າ'
      }

      if (!this.form.invoiceDate) {
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້'
      }

      if (this.form.invoiceDate && this.form.dueDate) {
        const invoiceDate = new Date(this.form.invoiceDate)
        const dueDate = new Date(this.form.dueDate)

        if (dueDate <= invoiceDate) {
          this.errors.dueDate = 'ວັນທີຄົບກຳນົດຕ້ອງຫຼັງຈາກວັນທີໃບແຈ້ງໜີ້'
        }
      }

      if (this.lineItems.length === 0) {
        this.errors.lineItems = 'ກະລຸນາເພີ່ມລາຍການສິນຄ້າຢ່າງໜ້ອຍ 1 ລາຍການ'
      } else {
        for (let i = 0; i < this.lineItems.length; i++) {
          const line = this.lineItems[i]
          if (!line.description) {
            this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ'
          }
          if (!line.quantity || parseFloat(line.quantity) <= 0) {
            this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0'
          }
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0) {
            this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ'
          }
        }
      }

      if (this.isEdit && !this.form.reason) {
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ'
      }

      return Object.keys(this.errors).length === 0
    },

    clearErrors() {
      this.errors = {}
    },

    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field)
      }
    },

    handleSubmit() {
      if (!this.validateForm()) {
        if (Object.keys(this.errors).some((key) => key.startsWith('line_'))) {
          this.activeTab = 'lines'
        } else {
          this.activeTab = 'header'
        }
        return
      }

      this.saving = true

      const formData = {
        ...this.form,
        totalAmount: this.calculatedTotal,
        taxAmount: this.calculatedTax,
        netAmount: this.calculatedNet,
        updateUserId: this.user.id,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxRate: parseFloat(line.taxRate) || 0,
        })),
      }

      this.$emit('save', formData)
    },

    handleOverlayClick() {
      if (!this.saving) {
        this.handleClose()
      }
    },

    handleClose() {
      this.$emit('close')
    },

    resetForm() {
      this.form = {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        clientId: '',
        jobBatchId: '',
        currencyId: '',
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
        status: 'draft',
        description: '',
        reason: '',
      }
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`)
      if (this.$toast) {
        this.$toast[type](message)
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`)
        }
      }
    },

    // Add missing filter methods if not present
    jobBatchFilter(item, queryText) {
      const searchText = queryText.toLowerCase()
      return (
        item.runningNo.toLowerCase().includes(searchText) ||
        (item.mou?.jobTitle &&
          item.mou.jobTitle.toLowerCase().includes(searchText))
      )
    },

    currencyFilter(item, queryText) {
      const searchText = queryText.toLowerCase()
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.code.toLowerCase().includes(searchText)
      )
    },
  },
}
</script>


<style scoped>
/* Maximized dialog with compact components */
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
  z-index: 1050;
  padding: 10px;
}

.enhanced-dialog {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 98vw;
  height: 95vh;
  max-height: 95vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 10px 15px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #A12F8D 0%, #8D2FA1 100%);
  color: white;
  min-height: 50px;
}

.modal-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.audit-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.audit-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.audit-text {
  font-size: 11px;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: #666;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.invoice-form {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Form Sections */
.form-section {
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #e9ecef;
}

.section-title i {
  color: #667eea;
  font-size: 13px;
}

.line-count {
  background: #667eea;
  color: white;
  border-radius: 10px;
  padding: 2px 8px;
  font-size: 11px;
  min-width: 20px;
  text-align: center;
  margin-left: 4px;
}

.add-line-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Compact Form Layout */
.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-bottom: 12px;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  display: block;
  margin-bottom: 3px;
  font-weight: 500;
  color: #333;
  font-size: 12px;
}

.form-group label.required::after {
  content: ' *';
  color: #e74c3c;
}

.form-control {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  transition: border-color 0.2s, box-shadow 0.2s;
  line-height: 1.2;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.form-control.is-invalid {
  border-color: #e74c3c;
  box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.1);
}

.form-control-xs {
  padding: 4px 6px;
  font-size: 12px;
}

.textarea-compact {
  resize: vertical;
  min-height: 50px;
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 3px;
  font-size: 11px;
  color: #e74c3c;
}

/* Line Items */
.empty-line-state {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 2px dashed #dee2e6;
  margin-top: 12px;
}

.empty-content i {
  font-size: 40px;
  color: #dee2e6;
  margin-bottom: 12px;
}

.empty-content h4 {
  color: #666;
  margin-bottom: 8px;
  font-size: 15px;
}

.line-items-table-container {
  border: 1px solid #e9ecef;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 12px;
  max-height: 400px;
  overflow-y: auto;
}

.line-items-table .table {
  margin: 0;
  border-collapse: collapse;
  width: 100%;
}

.table-compact {
  font-size: 12px;
}

.line-items-table .table th {
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  font-weight: 600;
  padding: 6px 4px;
  font-size: 11px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;
}

.line-items-table .table td {
  padding: 4px;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
  font-size: 11px;
}

.line-number {
  text-align: center;
  font-weight: 600;
  color: #666;
}

.line-total,
.tax-amount {
  font-weight: 600;
  text-align: right;
  color: #333;
  font-size: 11px;
}

.line-row {
  transition: background-color 0.2s;
}

.line-row:hover {
  background-color: rgba(102, 126, 234, 0.05);
}

/* Compact Amount Summary */
.amount-summary {
  background: #f8f9fa;
  padding: 12px 20px;
  border-radius: 0;
  border-top: 2px solid #667eea;
  border-bottom: 1px solid #f0f0f0;
}

.totals-compact {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 8px;
}

.total-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
}

.total-item.grand-total {
  font-weight: 600;
  font-size: 13px;
  border-top: 1px solid #667eea;
  padding-top: 6px;
  margin-top: 4px;
  grid-column: 1 / -1;
}

.total-item .amount {
  font-weight: 600;
  color: #333;
}

/* Buttons */
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
  line-height: 1.2;
}

.btn-compact {
  padding: 5px 10px;
  font-size: 12px;
}

.btn-sm {
  padding: 5px 10px;
  font-size: 11px;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-outline-secondary {
  background: white;
  color: #6c757d;
  border: 1px solid #6c757d;
}

.btn-danger {
  background: #dc3545;
  color: white;
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

.modal-footer {
  padding: 10px 15px;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  min-height: 50px;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-dialog {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
  }

  .modal-overlay {
    padding: 0;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .totals-compact {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .add-line-actions {
    width: 100%;
    justify-content: flex-start;
  }

  .footer-actions {
    flex-direction: column;
  }

  .footer-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .line-items-table-container {
    overflow-x: auto;
  }

  .line-items-table .table {
    min-width: 600px;
  }
}

@media (max-width: 480px) {
  .modal-header {
    padding: 8px 10px;
  }

  .modal-title {
    font-size: 14px;
  }

  .form-section {
    padding: 12px 15px;
  }

  .amount-summary {
    padding: 10px 15px;
  }

  .modal-footer {
    padding: 8px 10px;
  }
}
</style>