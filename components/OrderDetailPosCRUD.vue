<template>
  <div class="sales-form-container">
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <v-card class="loading-card" color="primary" dark>
        <v-card-text class="text-center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="white"
            indeterminate
            class="mb-4"
          />
          <div class="text-h6">Processing...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="customerDialog" max-width="1200" persistent>
      <customer-list @close-dialog="customerDialog = false" />
    </v-dialog>

    <v-dialog v-model="cancelConfirmDialog" max-width="600" persistent>
      <cancel-ticket-form
        @refresh="$emit('reload')"
        :id="headerId"
        :customerId="onlineCustomerId"
        @close-dialog="cancelConfirmDialog = false"
      />
    </v-dialog>

    <v-dialog v-model="pricingDialog" max-width="800" persistent>
      <pricing-option
        :key="pricingDialogKey"
        :isBackend="true"
        @new-price-update="updatePricing"
        @close-dialog="pricingDialog = false"
        :record-id="productPricingSelected"
      />
    </v-dialog>

    <v-snackbar
      v-model="errorSnackbar"
      :timeout="10000"
      color="error"
      multi-line
      top
      right
    >
      {{ validateErrorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="errorSnackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <v-card class="sales-form-card" elevation="8">
      <v-card-title class="header-section primary white--text">
        <div class="d-flex justify-space-between align-center w-100">
          <div class="d-flex align-center">
            <v-icon large color="white" class="mr-3">
              {{
                isQuotation ? 'mdi-file-document-edit-outline' : 'mdi-receipt'
              }}
            </v-icon>
            <div>
              <h2 class="text-h5 mb-0">
                {{ isQuotation ? 'Quotation' : 'Invoice' }}
                <span class="text-h6 opacity-80"
                  >#{{ transaction.id || 'New' }}</span
                >
              </h2>
              <div class="text-caption opacity-80">
                {{ formattedDate }}
              </div>
            </div>
          </div>

          <div class="d-flex align-center gap-2">
            <v-btn
              v-if="isQuotation"
              color="white"
              outlined
              @click="postToInvoice"
              :disabled="!canConvertToInvoice"
            >
              <v-icon left>mdi-arrow-right</v-icon>
              Convert to Invoice
            </v-btn>

            <v-btn
              color="warning"
              outlined
              @click="cancelOrder"
              :disabled="!canCancel"
            >
              <v-icon left>mdi-cancel</v-icon>
              Cancel
            </v-btn>
            <v-btn
              color="white"
              outlined
              @click="printReceiptDirectly"
              :disabled="!headerId"
              :loading="isPrinting"
              class="mr-2"
            >
              <v-icon left>mdi-receipt-text</v-icon>
              Print Receipt
            </v-btn>
            <v-btn
              color="white"
              outlined
              @click="printInvoiceDirectly"
              :disabled="!headerId"
              :loading="isPrinting"
            >
              <v-icon left>mdi-printer</v-icon>
              Print
            </v-btn>
          </div>
        </div>
      </v-card-title>

      <v-card-text class="form-content">
        <v-card
          :class="['transaction-header', { 'header-error': headerError }]"
          elevation="2"
        >
          <v-card-title class="text-h6 pb-2">
            <v-icon left color="primary">mdi-information</v-icon>
            Transaction Details
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <div class="form-section">
                  <h4 class="section-title">
                    <v-icon small color="primary" class="mr-2"
                      >mdi-calendar</v-icon
                    >
                    Date & Payment
                  </h4>

                  <v-text-field
                    v-model="transaction.bookingDate"
                    type="date"
                    label="Transaction Date"
                    outlined
                    dense
                    required
                    :rules="[rules.required]"
                  />

                  <v-autocomplete
                    v-model="transaction.paymentId"
                    :items="paymentList"
                    item-text="payment_code"
                    item-value="id"
                    label="Payment Method"
                    outlined
                    dense
                    required
                    :rules="[rules.required]"
                  >
                    <template v-slot:selection="{ item }">
                      <v-chip small color="primary" outlined>
                        {{ item.payment_code }}
                      </v-chip>
                    </template>
                  </v-autocomplete>

                  <v-text-field
                    v-model="transaction.discount"
                    label="Header Discount"
                    outlined
                    dense
                    type="number"
                    prefix="$"
                    :rules="[rules.positiveNumber]"
                  />

                  <v-text-field
                    v-if="isQuotation && transaction.referenceNo"
                    v-model="transaction.referenceNo"
                    label="Reference Number"
                    outlined
                    dense
                    readonly
                  />
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <div class="form-section">
                  <h4 class="section-title">
                    <v-icon small color="primary" class="mr-2"
                      >mdi-account</v-icon
                    >
                    Customer & Currency
                  </h4>

                  <v-autocomplete
                    v-model="transaction.clientId"
                    :items="clientList"
                    item-text="company"
                    item-value="id"
                    label="Customer"
                    outlined
                    dense
                    required
                    :rules="[rules.required]"
                  >
                    <template v-slot:selection="{ item }">
                      <div class="d-flex align-center">
                        <v-avatar size="24" color="primary" class="mr-2">
                          <span class="text-caption white--text">
                            {{ item.company.charAt(0) }}
                          </span>
                        </v-avatar>
                        {{ item.company }}
                      </div>
                    </template>
                  </v-autocomplete>

                  <v-autocomplete
                    v-model="transaction.currencyId"
                    :items="currencyList"
                    item-text="code"
                    item-value="id"
                    label="Currency"
                    outlined
                    dense
                    required
                    @input="currencyChange"
                    :rules="[rules.required]"
                  >
                    <template v-slot:selection="{ item }">
                      <v-chip small color="secondary" outlined>
                        {{ item.code }}
                      </v-chip>
                    </template>
                  </v-autocomplete>

                  <v-card color="grey lighten-4" flat class="pa-3">
                    <div class="text-subtitle-2">Exchange Rate</div>
                    <div class="text-h6 primary--text">
                      {{ getFormatNum(transaction.exchangeRate) }}
                    </div>
                  </v-card>
                </div>
              </v-col>

              <v-col cols="12" md="4">
                <div class="form-section">
                  <h4 class="section-title">
                    <v-icon small color="primary" class="mr-2"
                      >mdi-note-text</v-icon
                    >
                    Notes & Summary
                  </h4>

                  <v-textarea
                    v-model="transaction.remark"
                    label="Notes"
                    outlined
                    dense
                    rows="3"
                    auto-grow
                  />

                  <div v-if="transaction.user" class="user-info">
                    <v-card color="grey lighten-5" flat class="pa-3">
                      <div class="text-caption">Created by</div>
                      <div class="text-subtitle-2">
                        {{ transaction.user.cus_name }}
                      </div>
                      <div class="text-caption text--secondary">
                        ID: {{ transaction.user.cus_id }}
                      </div>
                    </v-card>
                  </div>

                  <v-card color="success lighten-4" flat class="pa-3 mt-3">
                    <div class="text-subtitle-2">Total Amount</div>
                    <div class="text-h4 success--text font-weight-bold">
                      {{ formatCurrency(grandTotal) }}
                    </div>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="line-items-card mt-6" elevation="2">
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <v-icon left color="primary">mdi-format-list-bulleted</v-icon>
              <span>Line Items</span>
              <v-chip class="ml-3" small color="primary" outlined>
                {{ transaction.lines.length }} items
              </v-chip>
            </div>

            <v-btn
              color="primary"
              @click="newRow"
              :disabled="!transaction.isActive || !updateAllow"
            >
              <v-icon left>mdi-plus</v-icon>
              Add Item
            </v-btn>
          </v-card-title>

          <v-card-text class="pa-0">
            <v-data-table
              v-if="transaction.lines && transaction.lines.length > 0"
              :headers="enhancedHeaders"
              :items="transaction.lines"
              :search="search"
              item-key="id"
              class="elevation-0 line-items-table"
              hide-default-footer
              :items-per-page="-1"
            >
              <template v-slot:item="{ item, index }">
                <tr
                  :class="[
                    'line-item-row',
                    { 'error-row': errorLineNumber === index },
                  ]"
                >
                  <td class="text-center">
                    <v-chip small color="grey lighten-2">
                      {{ index + 1 }}
                    </v-chip>
                  </td>

                  <td class="product-cell">
                    <v-autocomplete
                      v-model="item.productId"
                      :items="productList"
                      item-text="pro_name"
                      item-value="id"
                      label="Select Product"
                      outlined
                      dense
                      hide-details
                      @input="productChange(item)"
                      :rules="[rules.required]"
                    >
                      <template v-slot:selection="{ item: product }">
                        <div class="product-selection">
                          <div class="font-weight-medium">
                            {{ product.pro_name }}
                          </div>
                          <div class="text-caption text--secondary">
                            barcode: {{ product.barCode }}
                          </div>
                        </div>
                      </template>
                    </v-autocomplete>
                  </td>

                  <td class="quantity-cell">
                    <v-text-field
                      v-model="item.quantity"
                      type="number"
                      label="Qty"
                      outlined
                      dense
                      hide-details
                      @input="quantityChange(item)"
                      :rules="[rules.required, rules.positiveNumber]"
                    />
                  </td>

                  <td class="unit-cell">
                    <v-autocomplete
                      v-model="item.unitId"
                      :items="unitList"
                      item-text="name"
                      item-value="id"
                      label="Unit"
                      outlined
                      dense
                      hide-details
                      @input="unitChange(item)"
                    >
                      <template v-slot:selection="{ item: unit }">
                        <v-chip small color="info" outlined>
                          {{ unit.name }}
                        </v-chip>
                      </template>
                    </v-autocomplete>
                  </td>

                  <td class="rate-cell">
                    <v-text-field
                      v-model="item.unitRate"
                      type="number"
                      label="Rate"
                      outlined
                      dense
                      hide-details
                      @input="unitRateChange(item)"
                      :rules="[rules.positiveNumber]"
                    />
                  </td>

                  <td class="price-cell text-right">
                    <v-chip
                      color="warning"
                      outlined
                      clickable
                      @click="pricingLogig(item)"
                    >
                      <v-icon left small>mdi-currency-usd</v-icon>
                      {{ formatCurrency(item.price) }}
                    </v-chip>
                  </td>

                  <td class="discount-cell">
                    <v-text-field
                      v-model="item.discount"
                      type="number"
                      label="Discount"
                      outlined
                      dense
                      hide-details
                      @input="discountChange(item)"
                      prefix="$"
                    />
                  </td>

                  <td class="total-cell text-right">
                    <div class="total-amount">
                      <span class="text-h6 font-weight-bold">
                        {{ formatCurrency(item.total) }}
                      </span>
                    </div>
                  </td>

                  <td class="action-cell text-center">
                    <v-btn
                      icon
                      color="error"
                      @click="deleteItem(item)"
                      :disabled="!transaction.isActive || !updateAllow"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>

              <template v-slot:no-data>
                <div class="text-center pa-8">
                  <v-icon size="64" color="grey lighten-2"
                    >mdi-package-variant</v-icon
                  >
                  <div class="text-h6 mt-4 grey--text">No items added yet</div>
                  <div class="text-body-2 grey--text">
                    Click "Add Item" to get started
                  </div>
                </div>
              </template>
            </v-data-table>

            <div
              v-if="!transaction.lines || transaction.lines.length === 0"
              class="empty-state"
            >
              <v-card flat color="grey lighten-5" class="text-center pa-12">
                <v-icon size="80" color="grey lighten-1"
                  >mdi-package-variant-closed</v-icon
                >
                <h3 class="text-h5 mt-4 grey--text">No Items Added</h3>
                <p class="text-body-1 grey--text mb-6">
                  Start by adding your first product to this
                  {{ isQuotation ? 'quotation' : 'invoice' }}
                </p>
                <v-btn
                  color="primary"
                  large
                  @click="newRow"
                  :disabled="!transaction.isActive || !updateAllow"
                >
                  <v-icon left>mdi-plus</v-icon>
                  Add First Item
                </v-btn>
              </v-card>
            </div>
          </v-card-text>
        </v-card>

        <v-card
          v-if="transaction.lines && transaction.lines.length > 0"
          class="summary-card mt-6"
          elevation="4"
        >
          <v-card-title class="secondary white--text">
            <v-icon left color="white">mdi-calculator</v-icon>
            Transaction Summary
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="8">
                <div class="summary-details">
                  <div class="summary-row">
                    <span>Subtotal ({{ transaction.lines.length }} items)</span>
                    <span class="font-weight-medium">{{
                      formatCurrency(subtotal)
                    }}</span>
                  </div>
                  <div class="summary-row">
                    <span>Header Discount</span>
                    <span class="font-weight-medium text-error">
                      -{{ formatCurrency(headerDiscount) }}
                    </span>
                  </div>
                  <v-divider class="my-3" />
                  <div class="summary-row total-row">
                    <span class="text-h6">Grand Total</span>
                    <span class="text-h5 font-weight-bold primary--text">
                      {{ formatCurrency(grandTotal) }}
                    </span>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="text-center">
                <div class="grand-total-display">
                  <div class="text-caption grey--text">Total Amount</div>
                  <div class="text-h3 primary--text font-weight-bold">
                    {{ formatCurrency(grandTotal) }}
                  </div>
                  <v-chip color="success" outlined small class="mt-2">
                    {{ selectedCurrencyCode }}
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>

      <v-card-actions class="actions-footer pa-6">
        <v-spacer />
        <v-btn large text color="grey darken-1" @click="toggleDialog">
          <v-icon left>mdi-close</v-icon>
          Cancel
        </v-btn>

        <v-btn
          large
          color="primary"
          @click="postTransaction"
          :disabled="!canSave"
          :loading="isloading"
        >
          <v-icon left>mdi-content-save</v-icon>
          {{ isUpdate ? 'Update' : 'Save' }}
          {{ isQuotation ? 'Quotation' : 'Invoice' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import commaThousand from '@/plugins/comma-thousand'
import { mapActions, mapGetters } from 'vuex'
import PricingOption from '~/components/PricingOption.vue'
import {
  swalSuccess,
  swalError2,
  confirmSwal,
  dayCount,
  getNextDate,
  replaceAll,
} from '~/common'
import CancelTicketForm from './CancelTicketForm.vue'
// UPDATED: Imported both template functions
import { generateInvoiceHTML, generateReceiptHTML } from '~/common/printTemplates'

export default {
  name: 'EnhancedSalesFormWithPrint',
  components: {
    PricingOption,
    CancelTicketForm,
  },

  props: {
    headerId: {
      type: Number,
      default: 0,
    },
    isQuotation: {
      type: Boolean,
      default: false,
    },
    isUpdate: {
      type: Boolean,
      default: false,
    },
    updateAllow: {
      type: Boolean,
      default: true,
    },
  },

  directives: {
    commaThousand,
  },

  async created() {
    await this.initializeForm()
  },

  computed: {
    ...mapGetters([
      'findAllProduct',
      'findAllClient',
      'findAllPayment',
      'findAllUnit',
      'findAllCurrency',
      'findAllTerminal',
      'findSelectedTerminal',
    ]),

    clientList() {
      return this.findAllClient || []
    },

    productList() {
      return this.findAllProduct || []
    },

    paymentList() {
      return this.findAllPayment || []
    },

    unitList() {
      return this.findAllUnit || []
    },

    currencyList() {
      return this.findAllCurrency || []
    },

    currentTerminal() {
      return (
        this.findAllTerminal?.find(
          (el) => el.id === this.findSelectedTerminal
        ) || {}
      )
    },

    user() {
      return this.$auth.user || {}
    },

    apiLine() {
      return this.isQuotation ? 'quotation' : 'sale'
    },

    formattedDate() {
      return this.transaction.bookingDate
        ? new Date(this.transaction.bookingDate).toLocaleDateString()
        : 'Today'
    },

    selectedCurrencyCode() {
      const currency = this.currencyList.find(
        (c) => c.id === this.transaction.currencyId
      )
      return currency?.code || 'USD'
    },

    canSave() {
      return (
        this.transaction.isActive &&
        this.updateAllow &&
        this.transaction.lines?.length > 0 &&
        !this.isloading
      )
    },

    canCancel() {
      return this.isUpdate && this.transaction.isActive
    },

    canConvertToInvoice() {
      return (
        this.isQuotation &&
        this.transaction.lines?.length > 0 &&
        this.transaction.isActive
      )
    },

    subtotal() {
      return (
        this.transaction.lines?.reduce((total, item) => {
          return total + (item.total || 0)
        }, 0) || 0
      )
    },

    headerDiscount() {
      const discount = parseFloat(this.transaction.discount || 0)
      return isNaN(discount) ? 0 : discount
    },

    grandTotal() {
      return Math.max(0, this.subtotal - this.headerDiscount)
    },

    enhancedHeaders() {
      return [
        { text: '#', value: 'index', sortable: false, width: 80, align: 'center' },
        { text: 'Product', value: 'productId', sortable: false, width: 250 },
        { text: 'Quantity', value: 'quantity', sortable: false, width: 120, align: 'center' },
        { text: 'Unit', value: 'unitId', sortable: false, width: 120, align: 'center' },
        { text: 'Rate', value: 'unitRate', sortable: false, width: 100, align: 'center' },
        { text: 'Price', value: 'price', sortable: false, width: 120, align: 'right' },
        { text: 'Discount', value: 'discount', sortable: false, width: 120, align: 'center' },
        { text: 'Total', value: 'total', sortable: false, width: 150, align: 'right' },
        { text: 'Actions', value: 'actions', sortable: false, width: 100, align: 'center' },
      ]
    },

    rules() {
      return {
        required: (value) => !!value || 'This field is required',
        positiveNumber: (value) => {
          if (!value) return true
          const num = parseFloat(value)
          return (!isNaN(num) && num >= 0) || 'Must be a positive number'
        },
        nonZeroNumber: (value) => {
          if (!value) return 'This field is required'
          const num = parseFloat(value)
          return (!isNaN(num) && num > 0) || 'Must be greater than 0'
        },
      }
    },
  },

  data() {
    return {
      isloading: false,
      errorSnackbar: false,
      customerDialog: false,
      cancelConfirmDialog: false,
      pricingDialog: false,
      pricingDialogKey: 1,
      isPrinting: false,
      search: '',
      headerError: false,
      validateErrorMessage: '',
      errorLineNumber: null,
      transaction: {
        isActive: true,
        exchangeRate: 1,
        lines: [],
        bookingDate: new Date().toISOString().substr(0, 10),
        discount: 0,
      },
      productPricingSelected: null,
      onlineCustomerId: null,
    }
  },

  methods: {
    // === INITIALIZATION ===
    async initializeForm() {
      this.isloading = true
      try {
        if (this.isUpdate) {
          console.log('Loading existing record')
          await this.loadTransaction()
        } else {
          this.initializeNewTransaction()
        }
      } catch (error) {
        this.showError('Failed to initialize form', error)
      } finally {
        this.isloading = false
      }
    },

    initializeNewTransaction() {
      const today = new Date().toISOString().substr(0, 10)
      this.transaction = {
        ...this.transaction,
        bookingDate: today,
        clientId: 1,
        paymentId: 1,
        currencyId: 1,
        discount: 0,
      }
      this.newRow()
    },

    // === DIRECT PRINT FUNCTIONALITY ===
    async printInvoiceDirectly() {
      await this.printDocument('invoice')
    },

    async printReceiptDirectly() {
      await this.printDocument('receipt')
    },

    async printDocument(type) {
      if (!this.headerId) {
        this.showError('Please save the transaction first before printing')
        return
      }

      this.isPrinting = true

      try {
        // Fetch invoice data
        const response = await this.$axios.get(`api/sale/find/${this.headerId}`)
        const invoiceData = response.data
        
        // Get company data
        const companyData = this.$store.getters.findAllCompany[0] || {}

        // Generate HTML based on type
        let htmlContent = ''
        console.info(`DATA MODEL ${JSON.stringify(invoiceData)}`)
        if (type === 'receipt') {
          htmlContent = generateReceiptHTML(invoiceData, companyData,this.findAllCurrency)
        } else {
          htmlContent = generateInvoiceHTML(invoiceData, companyData,this.findAllCurrency)
        }

        // Print
        this.openPrintWindow(htmlContent)
      } catch (error) {
        console.error('Error fetching data:', error)
        this.showError('Failed to load data for printing')
      } finally {
        this.isPrinting = false
      }
    },

    openPrintWindow(htmlContent) {
      try {
        const printWindow = window.open('', '_blank', 'width=800,height=600')

        if (!printWindow) {
          this.showError(
            'Unable to open print window. Please check popup blocker settings.'
          )
          return
        }

        printWindow.document.open()
        printWindow.document.write(htmlContent)
        printWindow.document.close()

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print()
              setTimeout(() => {
                printWindow.close()
              }, 100)
            } catch (e) {
              console.error('Print error:', e)
              printWindow.close()
            }
          }, 500)
        }
        
        // Fallback check
        setTimeout(() => {
          if (printWindow && !printWindow.closed) {
             try { printWindow.print() } catch(e) {}
          }
        }, 1000)

      } catch (error) {
        console.error('Error creating print window:', error)
        this.showError('Failed to generate print document')
      }
    },

    // === CURRENCY & PRICING ===
    currencyChange() {
      const currency = this.currencyList.find(
        (el) => el.id === this.transaction.currencyId
      )
      if (currency) {
        this.transaction.exchangeRate = currency.rate || 1
      }
    },

    findCurrency(currencyId) {
      return this.findAllCurrency?.find((el) => el.id === currencyId) || {}
    },

    // === PRODUCT & LINE ITEM MANAGEMENT ===
    productChange(item) {
      const product = this.productList.find((el) => el.id === item.productId)
      if (!product) return

      const currency = this.findCurrency(product.saleCurrencyId)
      const localPrice = (product.pro_price || 0) * (currency.rate || 1)

      this.$set(item, 'price', localPrice)

      if (product.stockUnitId) {
        this.$set(item, 'unitId', product.stockUnitId)
        const unit = this.unitList.find((el) => el.id === product.stockUnitId)
        this.$set(item, 'unitRate', unit?.unitRate || 1)
      } else {
        this.$set(item, 'unitId', null)
        this.$set(item, 'unitRate', 1)
      }

      this.calculateLineTotal(item)
    },

    unitChange(item) {
      const unit = this.unitList.find((el) => el.id === item.unitId)
      if (unit) {
        this.$set(item, 'unitRate', unit.unitRate || 1)
        this.calculateLineTotal(item)
      }
    },

    quantityChange(item) {
      this.calculateLineTotal(item)
    },

    unitRateChange(item) {
      this.calculateLineTotal(item)
    },

    discountChange(item) {
      this.calculateLineTotal(item)
    },

    calculateLineTotal(item) {
      const qty = parseFloat(item.quantity) || 0
      const unitRate = parseFloat(item.unitRate) || 1
      const price = parseFloat(item.price) || 0
      const discount = parseFloat(item.discount) || 0

      const total = Math.max(0, qty * unitRate * price - discount)
      this.$set(item, 'total', total)
    },

    newRow() {
      this.transaction.lines.push({
        quantity: 1,
        unitRate: 1,
        price: 0,
        discount: 0,
        total: 0,
        isActive: true,
        productId: null,
        unitId: null,
      })
    },

    async deleteItem(item) {
      try {
        this.isloading = true
        if (item.id) {
          await this.$axios.delete(`api/${this.apiLine}Line/find/${item.id}`)
        }
        const index = this.transaction.lines.indexOf(item)
        if (index > -1) {
          this.transaction.lines.splice(index, 1)
        }
      } catch (error) {
        this.showError('Failed to delete item', error)
      } finally {
        this.isloading = false
      }
    },

    // === VALIDATION ===
    validateHeader() {
      this.headerError = false
      const errors = []

      if (!this.transaction.currencyId) errors.push('Currency is required')
      if (!this.transaction.paymentId) errors.push('Payment method is required')
      if (!this.transaction.clientId) errors.push('Customer is required')
      if (!this.transaction.lines || this.transaction.lines.length === 0) {
        errors.push('At least one line item is required')
      }

      if (errors.length > 0) {
        this.headerError = true
        this.showError(errors.join(', '))
        return false
      }
      return true
    },

    validateLine(item, lineNumber) {
      const errors = []
      if (!item.productId) errors.push(`Line ${lineNumber}: Product is required`)
      
      const quantity = parseFloat(item.quantity)
      if (!quantity || quantity <= 0) errors.push(`Line ${lineNumber}: Quantity must be positive`)

      const price = parseFloat(item.price)
      if (!item.isGift && (!price || price <= 0)) errors.push(`Line ${lineNumber}: Price must be positive`)

      if (errors.length > 0) {
        this.errorLineNumber = lineNumber - 1
        this.showError(errors.join(', '))
        return false
      }
      return true
    },

    validateAllLines() {
      for (let i = 0; i < this.transaction.lines.length; i++) {
        if (!this.validateLine(this.transaction.lines[i], i + 1)) return false
      }
      this.errorLineNumber = null
      return true
    },

    // === API OPERATIONS ===
    async loadTransaction() {
      try {
        const response = await this.$axios.get(
          `api/${this.apiLine}/find/${this.headerId}`
        )
        this.transaction = response.data
      } catch (error) {
        this.showError('Failed to load transaction', error)
        throw error
      }
    },

    async postTransaction() {
      if (!this.validateHeader() || !this.validateAllLines()) return
      this.isloading = true

      try {
        this.prepareTransactionForSubmit()
        const url = this.isUpdate
          ? `api/${this.apiLine}/update/${this.headerId}`
          : `api/${this.apiLine}/create`
        const method = this.isUpdate ? 'put' : 'post'

        await this.$axios[method](url, this.transaction)
        this.$emit('reload')
        swalSuccess(this.$swal, 'Success', 'Transaction saved successfully')
      } catch (error) {
        this.handleSubmitError(error)
      } finally {
        this.isloading = false
      }
    },

    async postToInvoice() {
      if (!this.validateHeader() || !this.validateAllLines()) return
      this.isloading = true

      try {
        const invoiceData = this.prepareInvoiceFromQuotation()
        await this.$axios.post('api/sale/create', invoiceData)
        this.$emit('reload')
        swalSuccess(this.$swal, 'Success', 'Quotation converted successfully')
      } catch (error) {
        this.handleSubmitError(error)
      } finally {
        this.isloading = false
      }
    },

    prepareTransactionForSubmit() {
      this.transaction.lines.forEach((line) => {
        line.quantity = parseFloat(line.quantity) || 0
        line.unitRate = parseFloat(line.unitRate) || 1
        line.price = parseFloat(line.price) || 0
        line.discount = parseFloat(line.discount) || 0
        line.total = parseFloat(line.total) || 0
      })
      this.transaction.userId = this.user.id
      this.transaction.total = this.grandTotal
      this.transaction.discount = this.headerDiscount
      this.transaction.locationId = this.currentTerminal.locationId
    },

    prepareInvoiceFromQuotation() {
      const invoiceLines = this.transaction.lines.map((line) => ({
        ...line,
        id: null,
      }))
      return {
        ...this.transaction,
        lines: invoiceLines,
        referenceNo: this.headerId,
        userId: this.user.id,
        total: this.grandTotal,
        locationId: this.currentTerminal.locationId,
      }
    },

    handleSubmitError(error) {
      if (error.response?.data) {
        const errorData = error.response.data
        const outOfStockProductId = typeof errorData === 'string' ? errorData.split('#')[1] : null
        
        if (outOfStockProductId) {
          const product = this.productList.find((p) => p.id == outOfStockProductId)
          this.showError(`Insufficient stock for: ${product?.pro_name || 'Unknown'}`)
          this.errorLineNumber = this.transaction.lines.findIndex((line) => line.productId == outOfStockProductId)
        } else {
          this.showError('Failed to save transaction', error)
        }
      } else {
        this.showError('Failed to save transaction', error)
      }
    },

    // === DIALOGS & UI ===
    cancelOrder() {
      if (this.transaction.dynamic_customer) {
        this.onlineCustomerId = this.transaction.dynamic_customer.id
      }
      this.cancelConfirmDialog = true
    },

    pricingLogig(item) {
      this.productPricingSelected = item.productId
      this.pricingDialogKey += 1
      this.pricingDialog = true
    },

    updatePricing(priceInfo) {
      const index = this.transaction.lines.findIndex(
        (line) => line.productId === this.productPricingSelected
      )
      if (index < 0) return

      const line = this.transaction.lines[index]
      const newPrice = parseFloat(priceInfo.amount) || 0

      if (priceInfo.type === 'Price') {
        this.$set(line, 'price', newPrice)
      } else {
        const currentPrice = parseFloat(line.price) || 0
        const updatedPrice = currentPrice * (1 + newPrice / 100)
        this.$set(line, 'price', updatedPrice)
      }
      this.calculateLineTotal(line)
    },

    toggleDialog() {
      this.$emit('close-dialog')
    },

    // === UTILITY METHODS ===
    formatCurrency(amount) {
      const num = parseFloat(amount) || 0
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.selectedCurrencyCode,
        minimumFractionDigits: 2,
      }).format(num)
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val || 0)
    },

    showError(message, error = null) {
      this.validateErrorMessage = message
      this.errorSnackbar = true
      if (error) console.error('Error details:', error)
    },
  },
}
</script>
<style scoped>
.sales-form-container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 20px;
}

.sales-form-card {
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 16px !important;
  overflow: hidden;
}

.header-section {
  background: linear-gradient(
    135deg,
    var(--v-primary-base) 0%,
    var(--v-primary-darken2) 100%
  );
  border-radius: 0 !important;
  padding: 24px !important;
}

.loading-card {
  border-radius: 16px !important;
}

.form-content {
  padding: 32px !important;
}

.transaction-header {
  border-radius: 12px !important;
  transition: all 0.3s ease;
}

.transaction-header.header-error {
  border: 2px solid var(--v-error-base) !important;
  box-shadow: 0 0 0 3px rgba(var(--v-error-base), 0.1);
}

.section-title {
  color: var(--v-primary-base);
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
}

.form-section {
  padding: 8px 0;
}

.user-info {
  margin-top: 16px;
}

.line-items-card {
  border-radius: 12px !important;
}

.line-items-table {
  border-radius: 0 0 12px 12px !important;
}

.line-item-row {
  transition: all 0.2s ease;
}

.line-item-row:hover {
  background-color: rgba(var(--v-primary-base), 0.04) !important;
}

.error-row {
  background-color: rgba(var(--v-error-base), 0.1) !important;
  border-left: 4px solid var(--v-error-base) !important;
}

.product-cell {
  min-width: 250px;
}

.product-selection {
  max-width: 200px;
  overflow: hidden;
}

.quantity-cell,
.unit-cell,
.rate-cell,
.discount-cell {
  min-width: 120px;
}

.price-cell,
.total-cell {
  min-width: 140px;
}

.action-cell {
  min-width: 80px;
}

.total-amount {
  font-family: 'Roboto Mono', monospace;
  background: linear-gradient(
    135deg,
    rgba(var(--v-success-base), 0.1) 0%,
    rgba(var(--v-success-base), 0.05) 100%
  );
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 4px solid var(--v-success-base);
}

.summary-card {
  border-radius: 12px !important;
  border: 1px solid rgba(var(--v-primary-base), 0.1);
}

.summary-details {
  font-family: 'Roboto', sans-serif;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.summary-row:last-child {
  border-bottom: none;
}

.total-row {
  background: linear-gradient(
    135deg,
    rgba(var(--v-primary-base), 0.08) 0%,
    rgba(var(--v-primary-base), 0.04) 100%
  );
  padding: 16px 20px;
  margin: 12px -20px;
  border-radius: 8px;
}

.grand-total-display {
  background: linear-gradient(
    135deg,
    rgba(var(--v-primary-base), 0.05) 0%,
    rgba(var(--v-secondary-base), 0.05) 100%
  );
  padding: 24px;
  border-radius: 16px;
  border: 2px dashed rgba(var(--v-primary-base), 0.2);
}

.actions-footer {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.empty-state {
  margin: 32px 0;
}

.gap-2 > * + * {
  margin-left: 8px;
}

/* Enhanced animations */
.line-item-row {
  animation: slideInFromLeft 0.3s ease-out;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.sales-form-card {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sales-form-container {
    padding: 12px;
  }

  .form-content {
    padding: 16px !important;
  }

  .header-section {
    padding: 16px !important;
  }

  .header-section .d-flex {
    flex-direction: column;
    gap: 16px;
  }

  .product-cell {
    min-width: 200px;
  }

  .quantity-cell,
  .unit-cell,
  .rate-cell,
  .discount-cell {
    min-width: 100px;
  }
}

@media (max-width: 480px) {
  .line-items-table {
    font-size: 0.875rem;
  }

  .total-amount {
    font-size: 0.8rem;
    padding: 6px 8px;
  }
}
</style>