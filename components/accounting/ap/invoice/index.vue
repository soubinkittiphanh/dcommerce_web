<template>
  <div>
    <!-- Main AP Invoice Dialog -->
    <v-dialog
      :value="visible"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
      persistent
    >
      <v-card class="d-flex flex-column invoice-modal-card">
        <!-- Dialog Header -->
        <v-card-title class="modal-header px-6 py-4 grey lighten-5 border-bottom">
          <div class="d-flex align-center w-100">
            <v-avatar color="primary lighten-5" size="40" class="mr-3">
              <v-icon color="primary">mdi-file-document-edit</v-icon>
            </v-avatar>
            <div class="flex-grow-1">
              <h4 class="text-subtitle-1 font-weight-bold grey--text text--darken-3 mb-0">
                {{ isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້ (Edit AP Invoice)' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່ (Create New AP Invoice)' }}
              </h4>
              <div class="text-caption grey--text text--darken-1 mt-0">
                {{ isEdit ? `Invoice #: ${form.invoiceNumber}` : `Drafting new invoice` }}
              </div>
            </div>
            <v-btn icon color="grey darken-2" @click="handleClose">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card-title>

        <!-- Dialog Scrollable Body -->
        <v-card-text class="modal-body pa-6 grey lighten-4" style="flex: 1; overflow-y: auto;">
          <!-- Loading State -->
          <div v-if="formLoading" class="d-flex flex-column align-center justify-center py-12">
            <v-progress-circular indeterminate size="64" color="primary" class="mb-4" />
            <span class="text-body-1 grey--text text--darken-1">ກຳລັງໂຫຼດຂໍ້ມູນ...</span>
          </div>

          <!-- Single Form View -->
          <div v-else class="invoice-form">
            <form @submit.prevent="handleSubmit">
              <!-- Basic Information Section -->
              <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
                <v-card-title class="text-subtitle-1 font-weight-bold primary--text pa-4 pb-2">
                  <v-icon left color="primary">mdi-information-outline</v-icon>
                  <span>ຂໍ້ມູນພື້ນຖານ (Basic Information)</span>
                </v-card-title>

                <v-card-text class="pa-4">
                  <v-row dense>
                    <!-- Invoice Date -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.invoiceDate"
                        type="date"
                        label="ວັນທີໃບແຈ້ງໜີ້ (Invoice Date) *"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.invoiceDate"
                        required
                        @change="calculateDueDate"
                      />
                    </v-col>

                    <!-- Invoice Number -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.invoiceNumber"
                        label="ເລກທີໃບແຈ້ງໜີ້ (Invoice Number) *"
                        outlined
                        dense
                        hide-details="auto"
                        placeholder="INV-XXXXX"
                        :readonly="isEdit"
                        :error-messages="errors.invoiceNumber"
                        required
                      />
                    </v-col>

                    <!-- Vendor (Agency) -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-autocomplete
                        v-model="form.agencyId"
                        :items="agencies"
                        item-value="id"
                        item-text="agencyName"
                        :label="`${clientLabel} (Vendor) *`"
                        outlined
                        dense
                        clearable
                        hide-details="auto"
                        :placeholder="formLabel.vendor"
                        :error-messages="errors.agencyId"
                        required
                        @change="onVendorChange"
                      >
                        <template v-slot:item="{ item }">
                          <small>{{ item.agencyCode }} - {{ item.agencyName }}</small>
                        </template>
                        <template v-slot:selection="{ item }">
                          <small>{{ item.agencyCode }} - {{ item.agencyName }}</small>
                        </template>
                      </v-autocomplete>
                    </v-col>

                    <!-- Vendor Ref (vendorInvoiceNumber) -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.vendorInvoiceNumber"
                        label="ເລກທີໃບແຈ້ງໜີ້ຜູ້ຂາຍ (Vendor Ref)"
                        outlined
                        dense
                        hide-details="auto"
                        placeholder="Vendor's Invoice #"
                        :error-messages="errors.vendorInvoiceNumber"
                      />
                    </v-col>

                    <!-- Currency -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-autocomplete
                        v-model="form.currencyId"
                        :items="currencies"
                        item-value="id"
                        item-text="name"
                        label="ສະກຸນເງິນ (Currency) *"
                        outlined
                        dense
                        clearable
                        hide-details="auto"
                        placeholder="Currency"
                        :error-messages="errors.currencyId"
                        required
                        @change="onCurrencyChange"
                      >
                        <template v-slot:selection="{ item }">
                          {{ item.name }} ({{ item.code }})
                        </template>
                      </v-autocomplete>
                    </v-col>

                    <!-- Exchange Rate (X-Rate) -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.exchangeRate"
                        type="number"
                        step="0.0001"
                        label="ອັດຕາແລກປ່ຽນ (X-Rate) *"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.exchangeRate"
                        required
                        @blur="calculateExchangeAmounts"
                      >
                        <template v-slot:append>
                          <span class="grey--text font-weight-medium text-caption">{{ selectedCurrency?.code || '' }} / LAK</span>
                        </template>
                      </v-text-field>
                    </v-col>

                    <!-- Due Date -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.dueDate"
                        type="date"
                        label="ວັນທີຄົບກຳນົດ (Due Date)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.dueDate"
                      />
                    </v-col>

                    <!-- Description -->
                    <v-col cols="12" :md="isEdit ? 6 : 12">
                      <v-textarea
                        v-model="form.description"
                        label="ຄຳອະທິບາຍ (Description)"
                        outlined
                        dense
                        rows="2"
                        auto-grow
                        hide-details="auto"
                        placeholder="Enter invoice description..."
                      />
                    </v-col>

                    <!-- Edit Reason (conditional) -->
                    <v-col v-if="isEdit" cols="12" md="6">
                      <v-text-field
                        v-model="form.reason"
                        label="ເຫດຜົນຂອງການແກ້ໄຂ (Reason for Edit) *"
                        outlined
                        dense
                        hide-details="auto"
                        placeholder="ລະບຸເຫດຜົນຂອງການແກ້ໄຂ..."
                        :error-messages="errors.reason"
                        required
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <!-- Line Items Section Card -->
              <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
                <v-card-title class="pa-4 d-flex justify-space-between align-center border-bottom grey lighten-5">
                  <div class="d-flex align-center">
                    <v-icon left color="success">mdi-format-list-bulleted</v-icon>
                    <span class="text-subtitle-1 font-weight-bold grey--text text--darken-3">
                      ລາຍການສິນຄ້າ (Line Items)
                    </span>
                    <v-chip v-if="lineItems.length > 0" color="success" x-small class="ml-2 font-weight-bold white--text">
                      {{ lineItems.length }} ລາຍການ
                    </v-chip>
                  </div>

                  <div class="d-flex align-center">
                    <v-btn
                      color="primary"
                      small
                      depressed
                      class="mr-2 px-3 rounded-lg"
                      @click="addNewLine"
                    >
                      <v-icon left small>mdi-plus</v-icon>
                      ເພີ່ມລາຍການ
                    </v-btn>
                    <v-btn-toggle v-model="multipleLinesCount" mandatory dense h="28px" class="rounded-lg">
                      <v-btn x-small outlined color="grey darken-1" @click="addMultipleLines(3)">+3</v-btn>
                      <v-btn x-small outlined color="grey darken-1" @click="addMultipleLines(5)">+5</v-btn>
                    </v-btn-toggle>
                  </div>
                </v-card-title>

                <!-- Empty State -->
                <div v-if="lineItems.length === 0" class="d-flex flex-column align-center justify-center py-10 grey lighten-5 border-dashed rounded-b-lg m-4">
                  <v-icon size="64" color="grey lighten-1" class="mb-3">mdi-playlist-remove</v-icon>
                  <h4 class="text-subtitle-1 font-weight-bold grey--text text--darken-2 mb-1">
                    ຍັງບໍ່ມີລາຍການສິນຄ້າ (No Line Items)
                  </h4>
                  <p class="text-body-2 grey--text text--darken-1 mb-4 text-center">
                    ກະລຸນາເພີ່ມລາຍການສິນຄ້າຢ່າງໜ້ອຍ 1 ລາຍການ
                  </p>
                  <v-btn color="primary" outlined class="rounded-lg" @click="addNewLine">
                    <v-icon left>mdi-plus-circle</v-icon>
                    ເພີ່ມລາຍການທຳອິດ
                  </v-btn>
                </div>

                <!-- Line Items Table -->
                <div v-else class="line-items-container">
                  <div class="table-compact-vuetify">
                    <v-simple-table dense class="modern-line-table">
                      <thead>
                        <tr>
                          <th class="text-center" style="width: 50px">#</th>
                          <th class="text-left">ລາຍລະອຽດ (Description) *</th>
                          <th class="text-left" style="width: 220px">ລະຫັດການເງິນ (Account)</th>
                          <th class="text-center" style="width: 100px">ຈຳນວນ (Qty) *</th>
                          <th class="text-right" style="width: 150px">ລາຄາ (Price) *</th>
                          <th class="text-right" style="width: 150px">ລວມ (Total)</th>
                          <th class="text-center" style="width: 60px"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(line, index) in lineItems" :key="line.tempId || line.id" class="line-item-row">
                          <td class="text-center grey--text text--darken-1">{{ index + 1 }}</td>
                          <td>
                            <v-text-field
                              v-model="line.description"
                              dense
                              hide-details="auto"
                              outlined
                              placeholder="Description..."
                              class="compact-input rounded-md"
                              @blur="calculateLineTotal(line)"
                            />
                          </td>
                          <td>
                            <v-autocomplete
                              v-model="line.txnId"
                              :items="transactionCodes.filter(t => t.type !== 'ALL' && t.isActive)"
                              item-value="id"
                              item-text="code"
                              dense
                              outlined
                              hide-details="auto"
                              class="compact-input rounded-md"
                              placeholder="Select Account"
                            >
                              <template v-slot:item="{ item }">
                                <small>{{ item.code }} - {{ item.description }}</small>
                              </template>
                              <template v-slot:selection="{ item }">
                                <small>{{ item.code }}</small>
                              </template>
                            </v-autocomplete>
                          </td>
                          <td>
                            <v-text-field
                              v-model="line.quantity"
                              type="number"
                              dense
                              hide-details="auto"
                              outlined
                              class="compact-input text-center-input font-monospace rounded-md"
                              @blur="calculateLineTotal(line)"
                            />
                          </td>
                          <td>
                            <v-text-field
                              v-model="line.unitPrice"
                              type="number"
                              dense
                              hide-details="auto"
                              outlined
                              class="compact-input text-right-input font-monospace rounded-md"
                              @blur="calculateLineTotal(line)"
                            />
                          </td>
                          <td class="text-right font-weight-bold font-monospace pr-4 total-amount-cell">
                            {{ formatCurrency(line.lineTotal || 0, selectedCurrency?.code) }}
                          </td>
                          <td class="text-center">
                            <v-btn icon color="error" class="hover-shadow" small @click="removeLine(index)">
                              <v-icon small>mdi-trash-can-outline</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </div>
                </div>
              </v-card>

              <!-- Total Amount Summary Card -->
              <div class="modern-amount-summary mt-6">
                <v-row no-gutters justify="end">
                  <v-col cols="12" md="6" lg="5">
                    <v-card outlined class="summary-card-premium overflow-hidden rounded-xl bg-white shadow-lg">
                      <div class="pa-5">
                        <div class="d-flex justify-space-between mb-3 text-body-2">
                          <span class="grey--text text--darken-1 font-weight-medium">ລວມຍ່ອຍ (Subtotal):</span>
                          <span class="font-weight-bold font-monospace text-subtitle-2 grey--text text--darken-3">
                            {{ formatCurrency(calculatedSubtotal, selectedCurrency?.code) }}
                          </span>
                        </div>
                        <div class="d-flex justify-space-between mb-3 text-body-2 text-warning">
                          <span class="font-weight-medium">ສ່ວນຫຼຸດ (Discount):</span>
                          <span class="font-weight-bold font-monospace text-subtitle-2">
                            -{{ formatCurrency(calculatedDiscount, selectedCurrency?.code) }}
                          </span>
                        </div>
                        <div class="d-flex justify-space-between mb-0 text-body-2">
                          <span class="grey--text text--darken-1 font-weight-medium">ພາສີ (Tax):</span>
                          <span class="font-weight-bold font-monospace text-subtitle-2 grey--text text--darken-3">
                            +{{ formatCurrency(calculatedTax, selectedCurrency?.code) }}
                          </span>
                        </div>
                      </div>
                      <v-divider></v-divider>
                      <div class="total-row-highlight px-5 py-4 d-flex justify-space-between align-center">
                        <div class="d-flex flex-column">
                          <span class="text-subtitle-1 font-weight-black white--text mb-0">ລວມທັງໝົດ (Total Amount):</span>
                          <span v-if="selectedCurrency && selectedCurrency.code !== 'LAK'" class="white--text opacity-80 font-weight-bold text-caption mt-1">
                            Converted to LAK: {{ formatCurrency(calculatedTotal * parseFloat(form.exchangeRate || 1), 'LAK') }}
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

              <!-- Audit Trail Section -->
              <v-card v-if="isEdit" outlined class="audit-trail-card mt-6 pa-4 grey lighten-5">
                <div class="d-flex justify-space-between align-center mb-3">
                  <h5 class="subtitle-2 font-weight-bold grey--text text--darken-3 mb-0">
                    <v-icon small left color="primary">mdi-history</v-icon>
                    ປະຫວັດການດຳເນີນງານ (Operation History)
                  </h5>
                  <v-btn small text color="primary" class="rounded-lg px-2" @click="openAuditDialog">
                    <v-icon small left>mdi-open-in-new</v-icon>
                    ເບິ່ງລະອຽດ
                  </v-btn>
                </div>
                <v-row dense class="text-body-2">
                  <v-col cols="12" sm="4" class="d-flex align-center">
                    <v-icon x-small color="grey" class="mr-2">mdi-account-plus</v-icon>
                    <span>
                      <strong>ສ້າງໂດຍ (Maker):</strong> {{ auditTrail.makerName }}
                    </span>
                  </v-col>
                  <v-col cols="12" sm="4" class="d-flex align-center">
                    <v-icon x-small color="grey" class="mr-2">mdi-calendar</v-icon>
                    <span>
                      <strong>ວັນທີ (Date):</strong> {{ auditTrail.createdDate }}
                    </span>
                  </v-col>
                  <v-col cols="12" sm="4" class="text-right">
                    <v-chip x-small outlined :color="getStatusColor(auditTrail.status)" class="font-weight-bold uppercase">
                      {{ getStatusText(auditTrail.status) }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-card>
            </form>
          </div>
        </v-card-text>

        <!-- Dialog Action Buttons -->
        <v-card-actions class="modal-footer px-6 py-4 grey lighten-5 border-top">
          <v-spacer></v-spacer>
          <v-btn text color="grey darken-1" class="px-4 rounded-lg font-weight-bold" @click="handleClose" :disabled="saving">
            <v-icon left>mdi-close</v-icon>
            ຍົກເລີກ (Cancel)
          </v-btn>
          <v-btn color="primary" class="px-5 rounded-lg font-weight-bold elevation-1" @click="handleSubmit" :disabled="saving || !isFormValid" :loading="saving">
            <v-icon left>mdi-content-save</v-icon>
            {{ isEdit ? 'ອັບເດດ (Update)' : 'ບັນທຶກ (Save)' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
      const item = this.getSPF.find((spf) => spf.code === 'LABEL_AC_CUS')
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
.invoice-modal-card {
  border-radius: 0 !important;
  background-color: #f8fafc !important;
}

.modal-header {
  background-color: #ffffff !important;
  border-bottom: 1px solid #e2e8f0 !important;
  min-height: 72px;
}

.modal-body {
  background-color: #f8fafc !important;
}

.invoice-form {
  max-width: 1400px;
  margin: 0 auto;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0 !important;
}

.border-top {
  border-top: 1px solid #e2e8f0 !important;
}

.shadow-sm {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
}

.rounded-lg {
  border-radius: 12px !important;
}

.rounded-xl {
  border-radius: 16px !important;
}

.border-dashed {
  border: 2px dashed #cbd5e1 !important;
}

/* Ultra compact table overrides */
.table-compact-vuetify ::v-deep .v-data-table__wrapper {
  overflow-x: auto;
}

.table-compact-vuetify ::v-deep table {
  width: 100%;
  border-collapse: collapse;
}

.table-compact-vuetify ::v-deep table th {
  background-color: #f1f5f9 !important;
  color: #475569 !important;
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  height: 40px !important;
  border-bottom: 2px solid #cbd5e1 !important;
  padding: 0 8px !important;
}

.table-compact-vuetify ::v-deep table td {
  height: 48px !important;
  padding: 4px 8px !important;
  border-bottom: 1px solid #e2e8f0 !important;
}

.line-item-row:hover {
  background-color: #f8fafc !important;
}

/* Precise 32px height inline inputs for lines table */
.compact-input ::v-deep .v-input__control {
  min-height: 32px !important;
}

.compact-input ::v-deep .v-input__slot {
  min-height: 32px !important;
  padding: 0 8px !important;
  background-color: #ffffff !important;
}

.compact-input ::v-deep input {
  height: 32px !important;
  font-size: 0.825rem !important;
}

.compact-input ::v-deep .v-autocomplete__content {
  font-size: 0.825rem !important;
}

.compact-input ::v-deep .v-input__append-inner {
  margin-top: 4px !important;
}

.rounded-md {
  border-radius: 6px !important;
}

/* Table Input Alignments */
.text-center-input ::v-deep input {
  text-align: center !important;
}

.text-right-input ::v-deep input {
  text-align: right !important;
  color: #059669 !important;
  font-weight: 700 !important;
}

.font-monospace {
  font-family: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace !important;
  font-size: 0.85rem !important;
  letter-spacing: -0.5px;
}

.total-amount-cell {
  color: #059669 !important;
  font-size: 0.9rem !important;
}

/* Premium summary dashboard card */
.summary-card-premium {
  border-left: 5px solid #10b981 !important;
  border: 1px solid #e2e8f0;
}

.total-row-highlight {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
}

.audit-trail-card {
  border-radius: 12px !important;
  border: 1px solid #e2e8f0 !important;
}

.modal-footer {
  background-color: #ffffff !important;
  border-top: 1px solid #e2e8f0 !important;
}

.opacity-80 {
  opacity: 0.8;
}

.hover-shadow:hover {
  background-color: rgba(239, 68, 68, 0.08) !important;
}

/* Scrollbar styles */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>