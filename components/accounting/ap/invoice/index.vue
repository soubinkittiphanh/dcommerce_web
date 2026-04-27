<template>
  <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
    <div class="enhanced-dialog" @click.stop>
      <div class="modal-header primary">
        <div class="d-flex align-center">
          <v-avatar color="white" size="32" class="mr-3">
            <v-icon color="primary" small>mdi-file-document-edit</v-icon>
          </v-avatar>
          <div>
            <h4 class="font-weight-bold">
              {{ isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້ (Edit AP Invoice)' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່ (Create New AP Invoice)' }}
            </h4>
            <div class=" white--text opacity-80">{{ isEdit ? `Invoice #: ${form.invoiceNumber}` : `Drafting
              new invoice` }}</div>
          </div>
        </div>
        <v-btn icon dark @click="handleClose" class="close-button">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <div class="modal-body">
        <!-- Loading State -->
        <div v-if="formLoading" class="loading-state">
          <div class="spinner"></div>
          <p>ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>

        <!-- Single Form View -->
        <div v-else class="invoice-content pa-6">
          <form @submit.prevent="handleSubmit">
            <!-- Basic Information Section -->
            <v-card outlined class="form-section-card mb-6">
              <v-card-title class="section-card-title py-3">
                <v-icon small color="primary" class="mr-2">mdi-information-outline</v-icon>
                <span>ຂໍ້ມູນພື້ນຖານ (Basic Information)</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pa-4">
                <v-row dense>
                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">ວັນທີໃບແຈ້ງໜີ້ (Invoice Date)</label>
                      <v-text-field v-model="form.invoiceDate" type="date" outlined dense hide-details="auto"
                        :error-messages="errors.invoiceDate" @change="calculateDueDate" />
                    </div>
                  </v-col>

                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">ເລກທີໃບແຈ້ງໜີ້ (Invoice Number)</label>
                      <v-text-field v-model="form.invoiceNumber" outlined dense hide-details="auto"
                        placeholder="INV-XXXXX" :readonly="isEdit" :error-messages="errors.invoiceNumber" />
                    </div>
                  </v-col>

                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">{{ clientLabel }} (Vendor)</label>
                      <v-autocomplete v-model="form.agencyId" :items="agencies" item-value="id" item-text="agencyName"
                        outlined dense clearable hide-details="auto" :placeholder="formLabel.vendor"
                        :error-messages="errors.agencyId" @change="onVendorChange">
                        <template v-slot:item="{ item }">
                          <small>{{ item.agencyCode }} - {{ item.agencyName }}</small>
                        </template>
                        <template v-slot:selection="{ item }">
                          <small>{{ item.agencyCode }} - {{ item.agencyName }}</small>
                        </template>
                      </v-autocomplete>
                    </div>
                  </v-col>

                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label>ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ (Vendor Ref)</label>
                      <v-text-field v-model="form.vendorInvoiceNumber" outlined dense hide-details="auto"
                        placeholder="Vendor's Invoice #" :error-messages="errors.vendorInvoiceNumber" />
                    </div>
                  </v-col>

                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">ສະກຸນເງິນ (Currency)</label>
                      <v-autocomplete v-model="form.currencyId" :items="currencies" item-value="id" item-text="name"
                        outlined dense clearable hide-details="auto" placeholder="Currency"
                        :error-messages="errors.currencyId" @change="onCurrencyChange">
                        <template v-slot:selection="{ item }">
                          {{ item.name }} ({{ item.code }})
                        </template>
                      </v-autocomplete>
                    </div>
                  </v-col>

                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">ອັດຕາແລກປ່ຽນ (X-Rate)</label>
                      <v-text-field v-model="form.exchangeRate" type="number" outlined dense hide-details="auto"
                        step="0.0001" :error-messages="errors.exchangeRate" @blur="calculateExchangeAmounts">
                        <template v-slot:append>
                          <span class=" grey--text">{{ selectedCurrency?.code || '' }} / LAK</span>
                        </template>
                      </v-text-field>
                    </div>
                  </v-col>

                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label>ວັນທີຄົບກຳນົດ (Due Date)</label>
                      <v-text-field v-model="form.dueDate" type="date" outlined dense hide-details="auto"
                        :error-messages="errors.dueDate" />
                    </div>
                  </v-col>

                  <v-col cols="12" md="12">
                    <div class="form-group custom-input-group">
                      <label>ຄຳອະທິບາຍ (Description)</label>
                      <v-textarea v-model="form.description" outlined dense rows="2" hide-details="auto"
                        placeholder="Enter invoice description..." />
                    </div>
                  </v-col>
                </v-row>

                <!-- Reason field for edit -->
                <v-row v-if="isEdit" dense class="mt-4">
                  <v-col cols="12">
                    <div class="form-group custom-input-group">
                      <label class="required font-weight-bold error--text">ເຫດຜົນຂອງການແກ້ໄຂ (Reason for Edit)</label>
                      <v-text-field v-model="form.reason" outlined dense hide-details="auto"
                        placeholder="ລະບຸເຫດຜົນຂອງການແກ້ໄຂ..." :error-messages="errors.reason" />
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Line Items Section -->
            <v-card outlined class="form-section-card mb-6">
              <v-card-title class="section-card-title py-3 d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <v-icon small color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
                  <span>ລາຍການສິນຄ້າ (Line Items)</span>
                  <v-chip v-if="lineItems.length > 0" x-small color="primary" class="ml-2 px-2">
                    {{ lineItems.length }}
                  </v-chip>
                </div>
                <div class="d-flex align-center">
                  <v-btn small color="primary" depressed @click="addNewLine" class="mr-2">
                    <v-icon left small>mdi-plus</v-icon>
                    ເພີ່ມລາຍການ
                  </v-btn>
                  <v-btn-toggle v-model="multipleLinesCount" mandatory dense h="28px">
                    <v-btn x-small @click="addMultipleLines(3)">+3</v-btn>
                    <v-btn x-small @click="addMultipleLines(5)">+5</v-btn>
                  </v-btn-toggle>
                </div>
              </v-card-title>
              <v-divider></v-divider>

              <!-- Empty State -->
              <v-card-text v-if="lineItems.length === 0" class="pa-10 text-center">
                <v-icon size="64" color="grey lighten-2">mdi-cart-outline</v-icon>
                <h4 class="grey--text text--darken-1 mt-4">ຍັງບໍ່ມີລາຍການສິນຄ້າ</h4>
                <v-btn color="primary" outlined class="mt-4" @click="addNewLine">
                  <v-icon left>mdi-plus-circle</v-icon>
                  ເພີ່ມລາຍການທຳອິດ
                </v-btn>
              </v-card-text>

              <!-- Line Items Table -->
              <div v-else class="line-items-container">
                <v-simple-table dense class="modern-line-table">
                  <thead>
                    <tr>
                      <th class="text-center" width="50">#</th>
                      <th class="text-left">ລາຍລະອຽດ (Description) *</th>
                      <th class="text-left" width="220">ລະຫັດການເງິນ (Account)</th>
                      <th class="text-center" width="100">ຈຳນວນ (Qty) *</th>
                      <th class="text-right" width="150">ລາຄາ (Price) *</th>
                      <th class="text-right" width="150">ລວມ (Total)</th>
                      <th class="text-center" width="60"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(line, index) in lineItems" :key="line.tempId || line.id" class="line-item-row">
                      <td class="text-center grey--text text--darken-1">{{ index + 1 }}</td>
                      <td>
                        <v-text-field v-model="line.description" dense hide-details outlined
                          placeholder="Description..." class="compact-input rounded-md"
                          @blur="calculateLineTotal(line)" />
                      </td>
                      <td>
                        <v-autocomplete v-model="line.txnId"
                          :items="transactionCodes.filter(t => t.type !== 'ALL' && t.isActive)" item-value="id"
                          item-text="code" dense outlined hide-details class="compact-input rounded-md"
                          placeholder="Select Account">
                          <template v-slot:item="{ item }">
                            <small>{{ item.code }} - {{ item.description }}</small>
                          </template>
                          <template v-slot:selection="{ item }">
                            <small>{{ item.code }}</small>
                          </template>
                        </v-autocomplete>
                      </td>
                      <td>
                        <v-text-field v-model="line.quantity" type="number" dense hide-details outlined
                          class="compact-input text-center font-monospace rounded-md"
                          @blur="calculateLineTotal(line)" />
                      </td>
                      <td>
                        <v-text-field v-model="line.unitPrice" type="number" dense hide-details outlined
                          class="compact-input text-right font-monospace rounded-md" @blur="calculateLineTotal(line)" />
                      </td>
                      <td class="text-right font-weight-bold font-monospace pr-4">
                        {{ formatCurrency(line.lineTotal || 0, selectedCurrency?.code) }}
                      </td>
                      <td class="text-center">
                        <v-btn icon x-small color="error" class="hover-shadow" @click="removeLine(index)">
                          <v-icon small>mdi-delete-outline</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-card>

            <!-- Total Amount Display -->
            <div class="modern-amount-summary mt-8">
              <v-row no-gutters justify="end">
                <v-col cols="12" md="5">
                  <v-card outlined class="summary-card-premium overflow-hidden">
                    <div class="pa-5">
                      <div class="d-flex justify-space-between mb-3">
                        <span class="grey--text text--darken-1 font-weight-medium">ລວມຍ່ອຍ (Subtotal):</span>
                        <span class="font-weight-bold font-monospace">{{ formatCurrency(calculatedSubtotal,
                          selectedCurrency?.code)
                          }}</span>
                      </div>
                      <div class="d-flex justify-space-between mb-3 text-warning">
                        <span class="font-weight-medium">ສ່ວນຫຼຸດ (Discount):</span>
                        <span class="font-weight-bold font-monospace">-{{ formatCurrency(calculatedDiscount,
                          selectedCurrency?.code)
                          }}</span>
                      </div>
                      <div class="d-flex justify-space-between mb-0">
                        <span class="grey--text text--darken-1 font-weight-medium">ພາສີ (Tax):</span>
                        <span class="font-weight-bold font-monospace">+{{ formatCurrency(calculatedTax,
                          selectedCurrency?.code)
                          }}</span>
                      </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="total-row-highlight px-5 py-4 d-flex justify-space-between align-center">
                      <div class="d-flex flex-column">
                        <span class="text-h6 font-weight-black white--text mb-0">ລວມທັງໝົດ (Total Amount):</span>
                        <span v-if="selectedCurrency && selectedCurrency.code !== 'LAK'"
                          class=" white--text opacity-80 font-weight-bold">
                          Converted to LAK: {{ formatCurrency(calculatedTotal * parseFloat(form.exchangeRate || 1),
                            'LAK')
                          }}
                        </span>
                      </div>
                      <div class="text-h5 font-weight-black white--text font-monospace">
                        {{ formatCurrency(calculatedTotal, selectedCurrency?.code) }}
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>

            <!-- Compact Audit Trail -->
            <v-card v-if="isEdit" outlined class="audit-trail-card mt-6 pa-4 bg-light">
              <div class="d-flex justify-space-between align-center mb-4">
                <h5 class=" font-weight-bold grey--text text--darken-3">
                  <v-icon small left color="primary">mdi-history</v-icon>
                  ປະຫວັດການດຳເນີນງານ (Operation History)
                </h5>
                <v-btn small text color="primary" @click="openAuditDialog">
                  <v-icon small left>mdi-open-in-new</v-icon>
                  ເບິ່ງລະອຽດ
                </v-btn>
              </div>
              <v-row dense>
                <v-col cols="12" md="4" class="d-flex align-center">
                  <v-icon x-small color="grey" class="mr-2">mdi-account-plus</v-icon>
                  <span class="">
                    <strong>ສ້າງໂດຍ (Maker):</strong> {{ auditTrail.makerName }}
                  </span>
                </v-col>
                <v-col cols="12" md="4" class="d-flex align-center">
                  <v-icon x-small color="grey" class="mr-2">mdi-calendar</v-icon>
                  <span class="">
                    <strong>ວັນທີ (Date):</strong> {{ auditTrail.createdDate }}
                  </span>
                </v-col>
                <v-col cols="12" md="4" class="text-right">
                  <v-chip x-small outlined :color="getStatusColor(auditTrail.status)"
                    class="font-weight-bold uppercase">
                    {{ getStatusText(auditTrail.status) }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-card>
          </form>
        </div>
      </div>

      <div class="modal-footer pa-4">
        <v-spacer></v-spacer>
        <v-btn text color="grey darken-1" @click="handleClose" :disabled="saving" class="mr-2">
          <v-icon left>mdi-close</v-icon>
          ຍົກເລີກ (Cancel)
        </v-btn>
        <v-btn color="primary" @click="handleSubmit" :disabled="saving || !isFormValid" :loading="saving" elevation="2">
          <v-icon left>mdi-content-save</v-icon>
          {{ isEdit ? 'ອັບເດດ (Update)' : 'ບັນທຶກ (Save)' }}
        </v-btn>
      </div>
    </div>

    <!-- Audit Log Dialog -->
    <audit-log-dialog :visible="auditDialogVisible" :invoice-id="form.id" :invoice-info="getInvoiceInfo()"
      @close="closeAuditDialog" />
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
    agencies: { type: Array, default: () => [] },
    currencies: { type: Array, default: () => [] },
    glAccounts: { type: Array, default: () => [] },
    user: { type: Object, default: null },
  },
  emits: ['close', 'save'],
  async mounted() {
    await this.loadTransactionCodes() // Add this
  },
  data() {
    return {
      multipleLinesCount: 0,
      transactionCodes: [],
      loadingTransactionCodes: false, // Add this
      // formLabel: {
      //   vendor: `ເລືອກ ${clientLabel}`, //'ເລືອກຕົວແທນ',
      //   model: '',
      // },
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
        vendorId: null,
        agencyId: '',
        invoiceDate: new Date().toISOString().split('T')[0], // Set today's date
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
    formLabel() {
      return {
        vendor: `ເລືອກ ${this.clientLabel}`,
        model: '',
      }
    },
    clientLabel() {
      const item = this.getSPF.find((spf) => spf.code == 'LABEL_AC_CUS')
      return item?.value || 'ກະຊວງ'
    },
    getSPF() {
      return this.$store.getters.findSPF
    },
    isEdit() {
      return !!this.invoice
    },
    auditTrail() {
      if (!this.invoice) {
        return {
          makerName: this.user?.cus_name || this.user?.name || 'ຜູ້ໃຊ້ປະຈຸບັນ',
          createdDate: new Date().toISOString().split('T')[0],
          isChecked: false,
          checkerName: null,
          status: 'draft',
        }
      }
      const maker = this.invoice.maker || {}
      const checker = this.invoice.checker || null
      const createdAt = new Date(this.invoice.createdAt)
      return {
        makerName: maker.cus_name || 'ບໍ່ມີຂໍ້ມູນ',
        createdDate: createdAt.toISOString().split('T')[0],
        checkerName: checker?.cus_name || null,
        isChecked: !!this.invoice.checkerId && !!this.invoice.approvedAt,
        status: this.invoice.status || 'draft',
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
        this.form.agencyId &&
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
  },
  methods: {
    async loadTransactionCodes() {
      this.loadingTransactionCodes = true
      try {
        const { data } = await this.$axios.get('/api/transaction-codes', {
          params: {
            includeInactive: false,
            // type: 'EXPENSE', // Filter only EXPENSE types for payments
            type: 'EXPENSE', // Filter only EXPENSE types for payments
          },
        })
        this.transactionCodes = data || []
      } catch (error) {
        console.error('Error loading transaction codes:', error)
        this.$toast?.error('ໂຫລດລະຫັດການເງິນບໍ່ສຳເລັດ')
        this.transactionCodes = []
      } finally {
        this.loadingTransactionCodes = false
      }
    },
    getTransactionCodeLabel(txnId) {
      const txn = this.transactionCodes.find((t) => t.id === txnId)
      return txn ? `${txn.code} - ${txn.description}` : ''
    },
    async requestSequence() {
      try {
        const { data } = await this.$axios.get('/api/ap-invoices/sequence')

        if (data && data.success) {
          // Assign the generated invoice number to your form
          this.form.invoiceNumber = data.data.invoiceNumber

          // Optional: Show success message
          this.$toast?.success(
            `Invoice number generated: ${data.data.invoiceNumber}`
          )

          return data.data.invoiceNumber
        }
      } catch (error) {
        console.error('Error getting invoice sequence:', error)
        this.$toast?.error('Failed to generate invoice number')
        throw error
      }
    },
    async initializeDialog() {
      this.clearErrors()
      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          vendorInvoiceNumber: this.invoice.vendorInvoiceNumber,
          vendorId: this.invoice.vendorId,
          agencyId: this.invoice.agencyId,
          invoiceDate: this.invoice.invoiceDate
            ? this.invoice.invoiceDate.split('T')[0]
            : '',
          dueDate: this.invoice.dueDate
            ? this.invoice.dueDate.split('T')[0]
            : new Date().toISOString().split('T')[0],
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
        this.requestSequence()
        this.loadTransactionCodes()
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
          if (!line.tempId) line.tempId = this.nextTempId++
          this.calculateLineTotal(line)
        })
      } catch (error) {
        console.error('Error loading line items:', error)
        this.lineItems = [this.createEmptyLine()]
      }
    },
    openAuditDialog() {
      if (this.form.id) this.auditDialogVisible = true
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
        DRglAccountId: null,
        CRglAccountId: null,
        txnId: null,
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
      if (this.form.agencyId && this.agencies.length > 0) {
        this.selectedVendor = this.agencies.find(
          (v) => v.id === this.form.agencyId
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
      this.clearFieldError('agencyId')
    },
    onCurrencyChange() {
      this.updateSelectedCurrency()
      this.clearFieldError('currencyId')
      const selectedCurrency = this.currencies.find(
        (c) => c.id === this.form.currencyId
      )
      if (selectedCurrency) {
        this.form.exchangeRate = selectedCurrency.rate || 1.0
        this.calculateExchangeAmounts()
      }
    },
    calculateDueDate() {
      if (this.form.invoiceDate && this.selectedVendor) {
        const invoiceDate = new Date(this.form.invoiceDate)
        const dueDate = new Date(invoiceDate)
        const paymentTerms =
          this.selectedVendor.paymentTerms ||
          this.selectedVendor.payment_terms ||
          30
        dueDate.setDate(dueDate.getDate() + parseInt(paymentTerms))
        this.form.dueDate = dueDate.toISOString().split('T')[0]
      }
    },
    validateForm() {
      this.errors = {}
      if (!this.form.invoiceNumber)
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້'
      // if (!this.form.vendorInvoiceNumber)
      //   this.errors.vendorInvoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ'
      if (!this.form.agencyId)
        this.errors.agencyId = `ກະລຸນາເລືອກ${this.formLabel.vendor}`
      if (!this.form.currencyId) this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ'
      if (!this.form.exchangeRate)
        this.errors.exchangeRate = 'ກະລຸນາໃສ່ອັດຕາແລກປ່ຽນ'
      else if (parseFloat(this.form.exchangeRate) <= 0)
        this.errors.exchangeRate = 'ອັດຕາແລກປ່ຽນຕ້ອງຫຼາຍກວ່າ 0'
      if (!this.form.invoiceDate)
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້'
      // if (!this.form.dueDate) this.errors.dueDate = 'ກະລຸນາໃສ່ວັນທີຄົບກຳນົດ'
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
          // if (!line.DRglAccountId)
          //   this.errors[`line_${i}_DRglAccountId`] = 'ກະລຸນາເລືອກ DR Account'
          // if (!line.CRglAccountId)
          //   this.errors[`line_${i}_CRglAccountId`] = 'ກະລຸນາເລືອກ CR Account'
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
      if (!this.validateForm()) return
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
      this.saving = false
    },
    handleOverlayClick() {
      if (!this.saving) this.handleClose()
    },
    handleClose() {
      this.$emit('close')
    },
    resetForm() {
      this.form = {
        id: null,
        invoiceNumber: '',
        vendorInvoiceNumber: '',
        vendorId: null,
        agencyId: '',
        invoiceDate: new Date().toISOString().split('T')[0], // Add this
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
    getStatusColor(status) {
      const colors = {
        draft: 'grey',
        pending: 'orange',
        approved: 'green',
        partially_paid: 'blue',
        paid: 'teal',
        overdue: 'red',
        cancelled: 'grey darken-2',
        rejected: 'error',
      }
      return colors[status] || 'grey'
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
}

.enhanced-dialog {
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
}

.modal-header {
  padding: 12px 24px;
  background-color: var(--v-primary-base);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
  background-color: #f8fafc;
}

.invoice-content {
  max-width: 1400px;
  margin: 0 auto;
}

.form-section-card {
  border-radius: 12px !important;
  background-color: white !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
}

.section-card-title {
  font-size: 0.95rem !important;
  font-weight: 700 !important;
  color: #2d3748 !important;
  background-color: #f1f5f9;
}

.custom-input-group label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 8px;
  display: block;
}

.custom-input-group label.required::after {
  content: ' *';
  color: var(--v-error-base);
}

.line-items-container {
  overflow: hidden;
}

.modern-line-table {
  background: white !important;
}

.modern-line-table th {
  background-color: #f8fafc !important;
  color: #64748b !important;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  height: 52px !important;
  border-bottom: 2px solid #e2e8f0 !important;
}

.line-item-row:hover {
  background-color: #fdfdfd !important;
}

.compact-input ::v-deep .v-input__control {
  min-height: 40px !important;
}

.compact-input ::v-deep .v-input__slot {
  min-height: 40px !important;
  padding: 0 12px !important;
  background-color: #fff !important;
}

.rounded-md {
  border-radius: 8px !important;
}

.font-monospace {
  font-family: 'JetBrains Mono', 'Roboto Mono', monospace !important;
  letter-spacing: -0.5px;
}

.summary-card-premium {
  border-radius: 16px !important;
  background-color: white !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
}

.total-row-highlight {
  background-color: var(--v-primary-base);
}

.audit-trail-card {
  border-radius: 12px !important;
  background-color: #f1f5f9 !important;
  border: 1px solid #e2e8f0 !important;
}

.modal-footer {
  background-color: white;
  border-top: 1px solid #e2e8f0;
  display: flex;
}

.opacity-80 {
  opacity: 0.8;
}

.hover-shadow:hover {
  background-color: rgba(229, 62, 62, 0.05) !important;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>