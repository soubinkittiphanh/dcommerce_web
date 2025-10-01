<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="enhanced-dialog" @click.stop>
      <div class="modal-header">
        <h4 class="modal-title">
          <i class="fas fa-file-invoice"></i>
          {{ isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່' }}
        </h4>
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

        <!-- Tabbed Interface -->
        <div v-else class="invoice-form">
          <!-- Tab Navigation -->
          <div class="tab-navigation">
            <button
              type="button"
              :class="['tab-btn', { active: activeTab === 'header' }]"
              @click="activeTab = 'header'"
            >
              <i class="fas fa-file-alt"></i>
              ຂໍ້ມູນໃບແຈ້ງໜີ້
            </button>
            <button
              type="button"
              :class="['tab-btn', { active: activeTab === 'lines' }]"
              @click="activeTab = 'lines'"
            >
              <i class="fas fa-list"></i>
              ລາຍການສິນຄ້າ
              <span v-if="lineItems.length > 0" class="line-count">{{
                lineItems.length
              }}</span>
            </button>
          </div>

          <!-- Invoice Header Tab -->
          <div v-show="activeTab === 'header'" class="tab-content">
            <form @submit.prevent="handleSubmit">
              <!-- Basic Information Section -->
              <div class="form-section">
                <h5 class="section-title">
                  <i class="fas fa-info-circle"></i>
                  ຂໍ້ມູນພື້ນຖານ
                </h5>
                <div class="form-grid">
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
                    <label for="dueDate" class="required">ວັນທີຄົບກຳນົດ</label>
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
                    <label for="invoiceNumber" class="required"
                      >ເລກທີໃບແຈ້ງໜີ້</label
                    >
                    <input
                      id="invoiceNumber"
                      v-model="form.invoiceNumber"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.invoiceNumber }"
                      placeholder="ເຊັ່ນ: INV-2025-001"
                      :readonly="isEdit"
                    />
                    <div v-if="errors.invoiceNumber" class="invalid-feedback">
                      {{ errors.invoiceNumber }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="vendorInvoiceNumber" class="required"
                      >ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ</label
                    >
                    <input
                      id="vendorInvoiceNumber"
                      v-model="form.vendorInvoiceNumber"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.vendorInvoiceNumber }"
                      placeholder="ເລກທີໃບແຈ້ງໜີ້ຂອງຜູ້ຂາຍ"
                    />
                    <div
                      v-if="errors.vendorInvoiceNumber"
                      class="invalid-feedback"
                    >
                      {{ errors.vendorInvoiceNumber }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="vendorId" class="required">ຜູ້ຂາຍ</label>
                    <select
                      id="vendorId"
                      v-model="form.vendorId"
                      class="form-control"
                      :class="{ 'is-invalid': errors.vendorId }"
                      @change="onVendorChange"
                    >
                      <option value="">ເລືອກຜູ້ຂາຍ</option>
                      <option
                        v-for="vendor in vendors"
                        :key="vendor.id"
                        :value="vendor.id"
                      >
                        {{ vendor.name }} ({{ vendor.vendorCode }})
                      </option>
                    </select>
                    <div v-if="errors.vendorId" class="invalid-feedback">
                      {{ errors.vendorId }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="currencyId" class="required">ສະກຸນເງິນ</label>
                    <select
                      id="currencyId"
                      v-model="form.currencyId"
                      class="form-control"
                      :class="{ 'is-invalid': errors.currencyId }"
                      @change="onCurrencyChange"
                    >
                      <option value="">ເລືອກສະກຸນເງິນ</option>
                      <option
                        v-for="currency in currencies"
                        :key="currency.id"
                        :value="currency.id"
                      >
                        {{ currency.name }} ({{ currency.code }})
                      </option>
                    </select>
                    <div v-if="errors.currencyId" class="invalid-feedback">
                      {{ errors.currencyId }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exchangeRate" class="required">
                      ອັດຕາແລກປ່ຽນ
                      <span v-if="selectedCurrency" class="currency-info">
                        ({{ selectedCurrency.code }} ຕໍ່ LAK)
                      </span>
                    </label>
                    <input
                      id="exchangeRate"
                      v-model="form.exchangeRate"
                      type="number"
                      step="0.0001"
                      min="0"
                      class="form-control"
                      :class="{ 'is-invalid': errors.exchangeRate }"
                      placeholder="1.0000"
                      @blur="calculateExchangeAmounts"
                    />
                    <div v-if="errors.exchangeRate" class="invalid-feedback">
                      {{ errors.exchangeRate }}
                    </div>
                  </div>

                  <div class="form-group span-2">
                    <label for="description">ຄຳອະທິບາຍ</label>
                    <textarea
                      id="description"
                      v-model="form.description"
                      class="form-control"
                      rows="2"
                      placeholder="ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້..."
                    ></textarea>
                  </div>
                </div>

                <!-- Exchange Rate Display -->
                <div
                  v-if="selectedCurrency && form.exchangeRate"
                  class="exchange-display"
                >
                  <div class="exchange-amount">
                    <span class="foreign-amount">
                      {{
                        formatCurrency(
                          calculatedTotal,
                          selectedCurrency?.code || 'USD'
                        )
                      }}
                    </span>
                    <i class="fas fa-arrow-right exchange-arrow"></i>
                    <span class="local-amount">
                      {{
                        formatCurrency(
                          calculatedTotal * parseFloat(form.exchangeRate || 1),
                          'LAK'
                        )
                      }}
                    </span>
                  </div>
                </div>

                <!-- Reason field for edit -->
                <div v-if="isEdit" class="form-group">
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

              <!-- Total Amount Display -->
              <div class="amount-summary">
                <div class="totals-grid">
                  <div class="total-item">
                    <span>ລວມຍ່ອຍ:</span>
                    <span class="amount">{{
                      formatCurrency(calculatedSubtotal, selectedCurrency?.code)
                    }}</span>
                  </div>
                  <div class="total-item">
                    <span>ສ່ວນຫຼຸດ:</span>
                    <span class="amount discount"
                      >-{{
                        formatCurrency(
                          calculatedDiscount,
                          selectedCurrency?.code
                        )
                      }}</span
                    >
                  </div>
                  <div class="total-item">
                    <span>ພາສີ:</span>
                    <span class="amount"
                      >+{{
                        formatCurrency(calculatedTax, selectedCurrency?.code)
                      }}</span
                    >
                  </div>
                  <div class="total-item grand-total">
                    <span>ລວມທັງໝົດ:</span>
                    <span class="amount">{{
                      formatCurrency(calculatedTotal, selectedCurrency?.code)
                    }}</span>
                  </div>
                  <div
                    v-if="
                      selectedCurrency &&
                      selectedCurrency.code !== 'LAK' &&
                      form.exchangeRate
                    "
                    class="total-item local-currency"
                  >
                    <span>ລວມເປັນ LAK:</span>
                    <span class="amount local">{{
                      formatCurrency(
                        calculatedTotal * parseFloat(form.exchangeRate || 1),
                        'LAK'
                      )
                    }}</span>
                  </div>
                </div>
              </div>

              <!-- Compact Audit Trail -->
              <div v-if="isEdit" class="audit-trail-compact">
                <div class="audit-header">
                  <h5>ປະຫວັດການດຳເນີນງານ</h5>
                  <button
                    type="button"
                    class="btn-view-audit"
                    @click="openAuditDialog"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    ເບິ່ງລະອຽດ
                  </button>
                </div>
                <div class="audit-summary">
                  <div class="audit-item">
                    <i class="fas fa-user-edit"></i>
                    <span
                      >ສ້າງໂດຍ: {{ auditTrail.makerName }} ({{
                        auditTrail.createdDate
                      }})</span
                    >
                  </div>
                  <div class="audit-item">
                    <i class="fas fa-user-check"></i>
                    <span>{{
                      auditTrail.isChecked
                        ? `ອະນຸມັດໂດຍ: ${auditTrail.checkerName}`
                        : 'ລໍຖ້າການອະນຸມັດ'
                    }}</span>
                  </div>
                  <div class="status-badge-container">
                    <span
                      :class="['status-badge', `status-${auditTrail.status}`]"
                    >
                      {{ getStatusText(auditTrail.status) }}
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!-- Line Items Tab -->
          <div v-show="activeTab === 'lines'" class="tab-content">
            <div class="line-items-section">
              <!-- Compact Add Line Header -->
              <div class="add-line-header">
                <div class="add-line-actions">
                  <button
                    type="button"
                    class="btn btn-primary btn-add-line"
                    @click="addNewLine"
                  >
                    <i class="fas fa-plus"></i>
                    ເພີ່ມລາຍການ
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    @click="addMultipleLines(3)"
                  >
                    +3
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm"
                    @click="addMultipleLines(5)"
                  >
                    +5
                  </button>
                  <span class="line-count-info"
                    >{{ lineItems.length }} ລາຍການ</span
                  >
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
                    <i class="fas fa-plus-circle"></i>
                    ເພີ່ມລາຍການທຳອິດ
                  </button>
                </div>
              </div>

              <!-- Compact Line Items Table -->
              <div v-else class="line-items-table-container">
                <div class="line-items-table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th style="width: 30px">#</th>
                        <th style="width: 140px">ລາຍລະອຽດ *</th>
                        <th style="width: 60px">ຈຳນວນ *</th>
                        <th style="width: 70px">ລາຄາ *</th>
                        <th style="width: 100px">DR Account *</th>
                        <th style="width: 100px">CR Account *</th>
                        <th style="width: 50px">ຫຼຸດ%</th>
                        <th style="width: 50px">ພາສີ%</th>
                        <th style="width: 80px">ລວມ</th>
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
                            placeholder="ລາຍລະອຽດ..."
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <input
                            v-model="line.quantity"
                            type="number"
                            step="0.001"
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
                          <select
                            v-model="line.DRglAccountId"
                            class="form-control form-control-xs"
                            :class="{
                              'is-invalid':
                                errors[`line_${index}_DRglAccountId`],
                            }"
                          >
                            <option value="">DR Account</option>
                            <option
                              v-for="account in glAccounts"
                              :key="account.id"
                              :value="account.id"
                            >
                              {{ account.accountNumber }} -
                              {{ account.accountName }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <select
                            v-model="line.CRglAccountId"
                            class="form-control form-control-xs"
                            :class="{
                              'is-invalid':
                                errors[`line_${index}_CRglAccountId`],
                            }"
                          >
                            <option value="">CR Account</option>
                            <option
                              v-for="account in glAccounts"
                              :key="account.id"
                              :value="account.id"
                            >
                              {{ account.accountNumber }} -
                              {{ account.accountName }}
                            </option>
                          </select>
                        </td>
                        <td>
                          <input
                            v-model="line.discountRate"
                            type="number"
                            step="0.01"
                            min="0"
                            max="100"
                            class="form-control form-control-xs"
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td>
                          <input
                            v-model="line.taxRate"
                            type="number"
                            step="0.01"
                            min="0"
                            max="100"
                            class="form-control form-control-xs"
                            @blur="calculateLineTotal(line)"
                          />
                        </td>
                        <td class="line-total">
                          {{
                            formatCurrency(
                              line.lineTotal || 0,
                              selectedCurrency?.code
                            )
                          }}
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-xs btn-danger"
                            @click="removeLine(index)"
                            title="ລຶບ"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Compact Totals Summary -->
                <div class="line-totals-summary">
                  <div class="totals-inline">
                    <span class="total-item">
                      ລວມຍ່ອຍ:
                      <strong>{{
                        formatCurrency(
                          calculatedSubtotal,
                          selectedCurrency?.code
                        )
                      }}</strong>
                    </span>
                    <span class="total-item">
                      ສ່ວນຫຼຸດ:
                      <strong class="discount"
                        >-{{
                          formatCurrency(
                            calculatedDiscount,
                            selectedCurrency?.code
                          )
                        }}</strong
                      >
                    </span>
                    <span class="total-item">
                      ພາສີ:
                      <strong
                        >+{{
                          formatCurrency(calculatedTax, selectedCurrency?.code)
                        }}</strong
                      >
                    </span>
                    <span class="total-item grand-total">
                      ລວມທັງໝົດ:
                      <strong>{{
                        formatCurrency(calculatedTotal, selectedCurrency?.code)
                      }}</strong>
                    </span>
                    <span
                      v-if="
                        selectedCurrency &&
                        selectedCurrency.code !== 'LAK' &&
                        form.exchangeRate
                      "
                      class="total-item local-currency"
                    >
                      LAK:
                      <strong>{{
                        formatCurrency(
                          calculatedTotal * parseFloat(form.exchangeRate || 1),
                          'LAK'
                        )
                      }}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <div class="footer-actions">
          <button
            type="button"
            class="btn btn-secondary"
            @click="handleClose"
            :disabled="saving"
          >
            <i class="fas fa-times"></i>
            ຍົກເລີກ
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="handleSubmit"
            :disabled="saving || !isFormValid"
          >
            <i v-if="saving" class="fas fa-spinner fa-spin"></i>
            <i v-else class="fas fa-save"></i>
            {{ saving ? 'ກຳລັງບັນທຶກ...' : isEdit ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Audit Log Dialog -->
    <audit-log-dialog
      :visible="auditDialogVisible"
      :invoice-id="form.id"
      :invoice-info="getInvoiceInfo()"
      @close="closeAuditDialog"
    />
  </div>
</template>

<script>
import AuditLogDialog from '~/components/accounting/ap/invoice/audit'

export default {
  name: 'APInvoiceDialog',
  components: { AuditLogDialog },
  props: {
    visible: { type: Boolean, default: false },
    invoice: { type: Object, default: null },
    vendors: { type: Array, default: () => [] },
    currencies: { type: Array, default: () => [] },
    glAccounts: { type: Array, default: () => [] },
    user: { type: Object, default: null },
  },
  emits: ['close', 'save'],
  data() {
    return {
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      lineItems: [],
      nextTempId: 1,
      selectedVendor: null,
      selectedCurrency: null,
      auditDialogVisible: false,
      form: {
        id: null,
        invoiceNumber: '',
        vendorInvoiceNumber: '',
        vendorId: '',
        invoiceDate: '',
        dueDate: '',
        description: '',
        totalAmount: '',
        exchangeRate: 1.0,
        currencyId: '',
        makerId: '',
        note: '',
        reason: '',
      },
    }
  },
  computed: {
    isEdit() {
      return !!this.invoice
    },
    auditTrail() {
      if (!this.invoice) {
        return {
          makerName: this.user?.cus_name || this.user?.name || 'ຜູ້ໃຊ້ປະຈຸບັນ',
          makerPosition: 'ພະນັກງານບັນຊີ',
          makerEmail: this.user?.cus_email || this.user?.email || '',
          createdDate: new Date().toISOString().split('T')[0],
          createdTime: new Date().toLocaleTimeString('en-GB'),
          isChecked: false,
          isApproved: false,
          checkerName: null,
          checkerPosition: null,
          checkerEmail: null,
          checkedDate: null,
          checkedTime: null,
          checkerComment: null,
        }
      }
      const maker = this.invoice.maker || {}
      const checker = this.invoice.checker || null
      const createdAt = new Date(this.invoice.createdAt)
      const approvedAt = this.invoice.approvedAt
        ? new Date(this.invoice.approvedAt)
        : null

      return {
        makerName: maker.cus_name || 'ບໍ່ມີຂໍ້ມູນ',
        makerPosition: maker.position || 'ພະນັກງານບັນຊີ',
        makerEmail: maker.cus_email || '',
        makerId: maker.cus_id || maker.id,
        createdDate: createdAt.toISOString().split('T')[0],
        createdTime: createdAt.toLocaleTimeString('en-GB'),
        createdDateTime: this.invoice.createdAt,
        checkerName: checker?.cus_name || null,
        checkerPosition: checker?.position || 'ຫົວໜ້າຝ່າຍບັນຊີ',
        checkerEmail: checker?.cus_email || null,
        checkerId: checker?.cus_id || checker?.id || null,
        checkedDate: approvedAt ? approvedAt.toISOString().split('T')[0] : null,
        checkedTime: approvedAt ? approvedAt.toLocaleTimeString('en-GB') : null,
        checkedDateTime: this.invoice.approvedAt,
        isChecked: !!this.invoice.checkerId && !!this.invoice.approvedAt,
        isApproved: this.invoice.status === 'approved',
        checkerComment: this.invoice.checkerComment || null,
        status: this.invoice.status || 'draft',
        version: this.invoice.version || 1,
      }
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal =
          (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0)
        return sum + subtotal
      }, 0)
    },
    calculatedDiscount() {
      return this.lineItems.reduce(
        (sum, line) => sum + (parseFloat(line.discountAmount) || 0),
        0
      )
    },
    calculatedTax() {
      return this.lineItems.reduce(
        (sum, line) => sum + (parseFloat(line.taxAmount) || 0),
        0
      )
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
        this.form.vendorInvoiceNumber &&
        this.form.vendorId &&
        this.form.invoiceDate &&
        this.form.dueDate &&
        this.form.currencyId &&
        this.form.exchangeRate &&
        parseFloat(this.form.exchangeRate) > 0 &&
        (!this.isEdit || this.form.reason)
      const hasValidLines =
        this.lineItems.length > 0 &&
        this.lineItems.every(
          (line) =>
            line.description &&
            (parseFloat(line.quantity) || 0) > 0 &&
            (parseFloat(line.unitPrice) || 0) >= 0 &&
            line.DRglAccountId &&
            line.CRglAccountId
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
    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog()
        }
      },
    },
  },
  methods: {
    async initializeDialog() {
      this.activeTab = 'header'
      this.clearErrors()
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          vendorInvoiceNumber: this.invoice.vendorInvoiceNumber,
          vendorId: this.invoice.vendorId,
          invoiceDate: this.invoice.invoiceDate
            ? this.invoice.invoiceDate.split('T')[0]
            : '',
          dueDate: this.invoice.dueDate
            ? this.invoice.dueDate.split('T')[0]
            : '',
          description: this.invoice.description || '',
          totalAmount: this.invoice.totalAmount,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          currencyId: this.invoice.currencyId,
          makerId: this.invoice.makerId,
          note: this.invoice.note || '',
          reason: '',
        }
        await this.loadLineItems(this.invoice.id)
      } else {
        this.resetForm()
        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'LAK') ||
            this.currencies.find((c) => c.code === 'USD') ||
            this.currencies[0]
          this.form.currencyId = defaultCurrency.id
          this.selectedCurrency = defaultCurrency
          this.form.exchangeRate = defaultCurrency.code === 'LAK' ? 1.0 : 1.0
        }
        this.lineItems = [this.createEmptyLine()]
      }
      this.updateSelectedVendor()
      this.updateSelectedCurrency()
    },
    resetDialog() {
      this.resetForm()
      this.lineItems = []
      this.selectedVendor = null
      this.selectedCurrency = null
      this.clearErrors()
      this.activeTab = 'header'
      this.formLoading = false
      this.saving = false
      this.auditDialogVisible = false
    },
    async loadLineItems(invoiceId) {
      try {
        const { data } = await this.$axios.get(
          `/api/ap-invoices-lines/invoice/${invoiceId}`
        )
        this.lineItems = data.data || [this.createEmptyLine()]
        this.lineItems.forEach((line) => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++
          }
          this.calculateLineTotal(line)
        })
      } catch (error) {
        console.error('Error loading line items:', error)
        this.lineItems = [this.createEmptyLine()]
      }
    },
    openAuditDialog() {
      if (this.form.id) {
        this.auditDialogVisible = true
      }
    },
    closeAuditDialog() {
      this.auditDialogVisible = false
    },
    getInvoiceInfo() {
      if (!this.invoice) return null
      return {
        invoiceNumber: this.form.invoiceNumber,
        vendorInvoiceNumber: this.form.vendorInvoiceNumber,
        totalAmount: this.calculatedTotal,
        status: this.invoice.status,
      }
    },
    createEmptyLine() {
      return {
        tempId: this.nextTempId++,
        lineNumber: this.lineItems.length + 1,
        description: '',
        quantity: 1,
        unitPrice: 0,
        DRglAccountId: '',
        CRglAccountId: '',
        discountRate: 0,
        discountAmount: 0,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0,
        note: '',
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
      const discountRate = parseFloat(line.discountRate) || 0
      const taxRate = parseFloat(line.taxRate) || 0
      const subtotal = quantity * unitPrice
      const discountAmount = subtotal * (discountRate / 100)
      line.discountAmount = discountAmount
      const afterDiscount = subtotal - discountAmount
      const taxAmount = afterDiscount * (taxRate / 100)
      line.taxAmount = taxAmount
      line.lineTotal = afterDiscount + taxAmount
      this.calculateExchangeAmounts()
    },
    calculateExchangeAmounts() {
      this.clearFieldError('exchangeRate')
    },
    updateSelectedVendor() {
      if (this.form.vendorId && this.vendors.length > 0) {
        this.selectedVendor = this.vendors.find(
          (v) => v.id === this.form.vendorId
        )
      } else {
        this.selectedVendor = null
      }
    },
    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(
          (c) => c.id === this.form.currencyId
        )
        if (this.selectedCurrency && this.selectedCurrency.code === 'LAK') {
          this.form.exchangeRate = 1.0
        }
      } else {
        this.selectedCurrency = null
      }
    },
    onVendorChange() {
      this.updateSelectedVendor()
      this.calculateDueDate()
      this.clearFieldError('vendorId')
    },
    onCurrencyChange() {
      this.updateSelectedCurrency()
      this.clearFieldError('currencyId')
      // Update the exchange rate based on 
      console.info(`Currency structure ${JSON.stringify(this.currencies) }`)
      this.form.exchangeRate = this.currencies.find(
        (c) => c.id === this.form.currencyId
      ).rate
      this.calculateExchangeAmounts();
    },
    calculateDueDate() {
      if (this.form.invoiceDate && this.selectedVendor?.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate)
        const dueDate = new Date(invoiceDate)
        dueDate.setDate(
          dueDate.getDate() + parseInt(this.selectedVendor.paymentTerms)
        )
        this.form.dueDate = dueDate.toISOString().split('T')[0]
      }
    },
    validateForm() {
      this.errors = {}
      if (!this.form.invoiceNumber)
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້'
      if (!this.form.vendorInvoiceNumber)
        this.errors.vendorInvoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ'
      if (!this.form.vendorId) this.errors.vendorId = 'ກະລຸນາເລືອກຜູ້ຂາຍ'
      if (!this.form.currencyId) this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ'
      if (!this.form.exchangeRate)
        this.errors.exchangeRate = 'ກະລຸນາໃສ່ອັດຕາແລກປ່ຽນ'
      else if (parseFloat(this.form.exchangeRate) <= 0)
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0'
      if (!this.form.invoiceDate)
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້'
      if (!this.form.dueDate) this.errors.dueDate = 'ກະລຸນາໃສ່ວັນທີຄົບກຳນົດ'
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
          if (!line.description)
            this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ'
          if (!line.quantity || parseFloat(line.quantity) <= 0)
            this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0'
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0)
            this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ'
          if (!line.DRglAccountId)
            this.errors[`line_${i}_DRglAccountId`] = 'ກະລຸນາເລືອກ DR Account'
          if (!line.CRglAccountId)
            this.errors[`line_${i}_CRglAccountId`] = 'ກະລຸນາເລືອກ CR Account'
        }
      }
      if (this.isEdit && !this.form.reason)
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ'
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
        makerId: this.form.makerId || this.user?.id,
        totalAmount: this.calculatedTotal,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          discountRate: parseFloat(line.discountRate) || 0,
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
        vendorInvoiceNumber: '',
        vendorId: '',
        invoiceDate: '',
        dueDate: '',
        description: '',
        totalAmount: '',
        exchangeRate: 1.0,
        currencyId: '',
        makerId: '',
        note: '',
        reason: '',
      }
    },
    formatCurrency(amount, currencyCode = 'USD') {
      const currency = currencyCode || 'USD'
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency === 'LAK' ? 'USD' : currency,
        minimumFractionDigits: currency === 'LAK' ? 0 : 2,
        maximumFractionDigits: currency === 'LAK' ? 0 : 2,
      })
      if (currency === 'LAK') {
        return `₭${new Intl.NumberFormat('en-US').format(amount || 0)}`
      }
      return formatter.format(amount || 0)
    },
    getStatusText(status) {
      const statusMap = {
        draft: 'ຮ່າງ',
        pending: 'ລໍຖ້າການອະນຸມັດ',
        approved: 'ອະນຸມັດແລ້ວ',
        rejected: 'ປະຕິເສດ',
        paid: 'ຈ່າຍແລ້ວ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusMap[status] || status
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
  z-index: 1050;
  padding: 0;
}

.enhanced-dialog {
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Compact Header */
.modal-header {
  padding: 12px 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #01532b 0%, #337555 100%);
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

/* Compact Body */
.modal-body {
  flex: 1;
  overflow: hidden;
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
  overflow: hidden;
}

/* Compact Tab Navigation */
.tab-navigation {
  display: flex;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
}

.tab-btn {
  flex: 1;
  padding: 10px 15px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: #666;
  transition: all 0.2s;
  min-height: 44px;
}

.tab-btn:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.tab-btn.active {
  background: white;
  color: #667eea;
  border-bottom: 2px solid #667eea;
}

.line-count {
  background: #667eea;
  color: white;
  border-radius: 10px;
  padding: 1px 6px;
  font-size: 11px;
  min-width: 18px;
  text-align: center;
}

/* Tab Content */
.tab-content {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

/* Compact Form Sections */
.form-section {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
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

/* Compact Grid Layout */
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
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

.form-group label.required::after {
  content: ' *';
  color: #e74c3c;
}

/* Compact Form Controls */
.form-control {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  transition: border-color 0.2s, box-shadow 0.2s;
  height: 32px;
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

.currency-info {
  font-size: 10px;
  color: #666;
  font-weight: normal;
}

/* Compact Exchange Display */
.exchange-display {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 8px;
  margin: 10px 0;
}

.exchange-amount {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
}

.foreign-amount {
  color: #667eea;
}
.exchange-arrow {
  color: #28a745;
  font-size: 10px;
}
.local-amount {
  color: #28a745;
}

/* Compact Amount Summary */
.amount-summary {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  border-left: 3px solid #667eea;
  margin: 10px 15px;
}

.totals-grid {
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
.total-item .amount.discount {
  color: #e67e22;
}
.total-item .amount.local {
  color: #28a745;
}

/* Compact Audit Trail */
.audit-trail-compact {
  background: #f8f9fa;
  border-radius: 6px;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #e9ecef;
}

.audit-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.audit-header h5 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #333;
}

.btn-view-audit {
  background: #667eea;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.btn-view-audit:hover {
  background: #5a6fd8;
}

.audit-summary {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.audit-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #666;
}

.audit-item i {
  color: #667eea;
  width: 12px;
}

.status-badge-container {
  text-align: right;
}

.status-badge {
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.status-draft {
  background: #e9ecef;
  color: #6c757d;
}
.status-badge.status-pending {
  background: #fff3cd;
  color: #856404;
}
.status-badge.status-approved {
  background: #d1ecf1;
  color: #0c5460;
}

/* Compact Line Items */
.line-items-section {
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.add-line-header {
  margin-bottom: 15px;
}

.add-line-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

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

.btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-add-line {
  font-size: 13px;
  padding: 8px 16px;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 10px;
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

.line-count-info {
  background: #e9ecef;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  color: #666;
  font-weight: 500;
}

.empty-line-state {
  text-align: center;
  padding: 40px 20px;
  background: #f8f9fa;
  border-radius: 6px;
  border: 2px dashed #dee2e6;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-content i {
  font-size: 48px;
  color: #dee2e6;
  margin-bottom: 15px;
}

.empty-content h4 {
  color: #666;
  margin-bottom: 8px;
  font-size: 16px;
}

/* Compact Table */
.line-items-table-container {
  border: 1px solid #e9ecef;
  border-radius: 6px;
  overflow: hidden;
  flex: 1;
  overflow-y: auto;
}

.line-items-table .table {
  margin: 0;
  border-collapse: collapse;
  width: 100%;
  font-size: 11px;
}

.line-items-table .table th {
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  font-weight: 600;
  padding: 6px 4px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
}

.line-items-table .table td {
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

.line-total {
  font-weight: 600;
  text-align: right;
  color: #333;
  font-size: 10px;
}

.line-row {
  transition: background-color 0.2s;
}

.line-row:hover {
  background-color: rgba(102, 126, 234, 0.05);
}

/* Compact Totals Summary */
.line-totals-summary {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 6px;
  border-left: 3px solid #667eea;
  margin-top: 10px;
}

.totals-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
}

.totals-inline .total-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.totals-inline .total-item.grand-total {
  font-weight: 700;
  font-size: 12px;
  color: #333;
}

.totals-inline .total-item strong.discount {
  color: #e67e22;
}

/* Compact Footer */
.modal-footer {
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

/* Responsive Design */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .span-2 {
    grid-column: span 1;
  }

  .totals-grid {
    grid-template-columns: 1fr;
  }

  .totals-inline {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .add-line-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .line-items-table-container {
    overflow-x: auto;
  }

  .line-items-table .table {
    min-width: 700px;
  }

  .footer-actions {
    flex-direction: column;
  }

  .footer-actions .btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .modal-header {
    padding: 10px 15px;
  }

  .modal-title {
    font-size: 14px;
  }

  .form-section {
    padding: 12px;
  }

  .line-items-section {
    padding: 12px;
  }

  .modal-footer {
    padding: 10px 15px;
  }
}
</style>