<template>
  <div class="purchasing-form-container">
    <!-- Loading Overlay -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <v-card class="loading-card" color="primary" dark>
        <v-card-text class="text-center">
          <v-progress-circular :size="70" :width="7" color="white" indeterminate class="mb-4" />
          <div class="text-h6">Processing...</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Supplier Dialog -->
    <v-dialog v-model="supplierDialog" max-width="1200" persistent>
      <supplier-list @close-dialog="supplierDialog = false" />
    </v-dialog>

    <!-- Receiving Dialog -->
    <v-dialog v-model="receivingDialog" max-width="1200" persistent>
      <receiving-form @refresh="$emit('reload')" :po-id="headerId" @close-dialog="receivingDialog = false" />
    </v-dialog>

    <!-- Pricing Dialog -->
    <v-dialog v-model="pricingDialog" max-width="800" persistent>
      <pricing-option :key="pricingDialogKey" :isBackend="true" @new-price-update="updatePricing"
        @close-dialog="pricingDialog = false" :record-id="productPricingSelected" />
    </v-dialog>

    <!-- Error Sheet -->
    <v-snackbar v-model="errorSnackbar" :timeout="10000" color="error" multi-line top right>
      {{ validateErrorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="errorSnackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Main Form Card -->
    <v-card class="purchasing-form-card" elevation="8">
      <!-- Header Actions -->
      <v-card-title class="header-section primary white--text">
        <div class="d-flex justify-space-between align-center w-100">
          <div class="d-flex align-center">
            <v-icon large color="white" class="mr-3">
              mdi-file-document-outline
            </v-icon>
            <div>
              <h2 class="text-h5 mb-0">
                Purchase Order
                <span class="text-h6 opacity-80">#{{ transaction.id || 'New' }}</span>
              </h2>
              <div class=" opacity-80">
                {{ formattedDate }}
              </div>
            </div>
          </div>

          <div class="d-flex align-center gap-2">
            <v-btn color="success" outlined @click="postReceiving" :disabled="!canReceive">
              <v-icon left>mdi-check</v-icon>
              Receive Goods
            </v-btn>

            <v-btn color="warning" outlined @click="cancelOrder" :disabled="!canCancel">
              <v-icon left>mdi-cancel</v-icon>
              Cancel
            </v-btn>

            <v-btn color="white" outlined @click="printPurchaseOrderDirectly" :disabled="!headerId"
              :loading="isPrinting">
              <v-icon left>mdi-printer</v-icon>
              Print PO
            </v-btn>
          </div>
        </div>
      </v-card-title>

      <v-card-text class="form-content">
        <!-- Transaction Header -->
        <v-card :class="['transaction-header', { 'header-error': headerError }]" elevation="2">
          <v-card-title class="text-h6 pb-2">
            <v-icon left color="primary">mdi-information</v-icon>
            Purchase Order Details
          </v-card-title>

          <v-card-text>
            <v-row>
              <!-- Left Column -->
              <v-col cols="12" md="4">
                <div class="form-section">
                  <h4 class="section-title">
                    <v-icon small color="primary" class="mr-2">mdi-calendar</v-icon>
                    Date & Terms
                  </h4>

                  <v-text-field v-model="transaction.bookingDate" type="date" label="Order Date" outlined dense required
                    :rules="[rules.required]" />

                  <v-text-field v-model="transaction.expectedDeliveryDate" type="date" label="Expected Delivery"
                    outlined dense />

                  <v-autocomplete v-model="transaction.termId" :items="termsList" item-text="term_name" item-value="id"
                    label="Payment Terms" outlined dense>
                    <template v-slot:selection="{ item }">
                      <v-chip small color="primary" outlined>
                        {{ item.term_name }}
                      </v-chip>
                    </template>
                  </v-autocomplete>

                  <v-text-field v-model="transaction.discount" label="Header Discount" outlined dense type="number"
                    prefix="$" :rules="[rules.positiveNumber]" />
                </div>
              </v-col>

              <!-- Middle Column -->
              <v-col cols="12" md="4">
                <div class="form-section">
                  <h4 class="section-title">
                    <v-icon small color="primary" class="mr-2">mdi-domain</v-icon>
                    Supplier & Currency
                  </h4>

                  <v-autocomplete v-model="transaction.supplierId" :items="supplierList" item-text="name"
                    item-value="id" label="Supplier" outlined dense required :rules="[rules.required]">
                    <template v-slot:selection="{ item }">
                      <div class="d-flex align-center">
                        <v-avatar size="24" color="primary" class="mr-2">
                          <span class=" white--text">
                            {{ (item.name || item.company || '').charAt(0) }}
                          </span>
                        </v-avatar>
                        {{ item.name || item.company }}
                      </div>
                    </template>
                  </v-autocomplete>

                  <v-autocomplete v-model="transaction.currencyId" :items="currencyList" item-text="code"
                    item-value="id" label="Currency" outlined dense required @input="currencyChange"
                    :rules="[rules.required]">
                    <template v-slot:selection="{ item }">
                      <v-chip small color="secondary" outlined>
                        {{ item.code }}
                      </v-chip>
                    </template>
                  </v-autocomplete>

                  <v-card color="grey lighten-4" flat class="pa-3">
                    <div class="">Exchange Rate</div>
                    <div class="text-h6 primary--text">
                      {{ formatNumber(transaction.exchangeRate) }}
                    </div>
                  </v-card>
                </div>
              </v-col>

              <!-- Right Column -->
              <v-col cols="12" md="4">
                <div class="form-section">
                  <h4 class="section-title">
                    <v-icon small color="primary" class="mr-2">mdi-note-text</v-icon>
                    Notes & Status
                  </h4>

                  <v-textarea v-model="transaction.notes" label="Order Notes" outlined dense rows="3" auto-grow />

                  <v-select v-model="transaction.status" :items="statusOptions" label="Status" outlined dense>
                    <template v-slot:selection="{ item }">
                      <v-chip small :color="getStatusColor(item)" outlined>
                        {{ item }}
                      </v-chip>
                    </template>
                  </v-select>

                  <div v-if="transaction.user" class="user-info">
                    <v-card color="grey lighten-5" flat class="pa-3">
                      <div class="">Created by</div>
                      <div class="">
                        {{ transaction.user.cus_name }}
                      </div>
                      <div class=" text--secondary">
                        ID: {{ transaction.user.cus_id }}
                      </div>
                    </v-card>
                  </div>

                  <v-card color="success lighten-4" flat class="pa-3 mt-3">
                    <div class="">Total Amount</div>
                    <div class=" success--text font-weight-bold">
                      {{ formatCurrency(grandTotal) }}
                    </div>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Line Items Section -->
        <v-card class="line-items-card mt-6" elevation="2">
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <v-icon left color="primary">mdi-format-list-bulleted</v-icon>
              <span>Order Items</span>
              <v-chip class="ml-3" small color="primary" outlined>
                {{ transaction.lines.length }} items
              </v-chip>
            </div>

            <v-btn color="primary" @click="newRow" :disabled="!transaction.isActive || !updateAllow">
              <v-icon left>mdi-plus</v-icon>
              Add Item
            </v-btn>
          </v-card-title>

          <v-card-text class="pa-0">
            <!-- Enhanced Data Table -->
            <v-data-table v-if="transaction.lines && transaction.lines.length > 0" :headers="enhancedHeaders"
              :items="transaction.lines" :search="search" item-key="id" class="elevation-0 line-items-table"
              hide-default-footer :items-per-page="-1">
              <!-- Custom row template -->
              <template v-slot:item="{ item, index }">
                <tr :class="['line-item-row', { 'error-row': errorLineNumber === index }]">
                  <!-- Line Number -->
                  <td class="text-center">
                    <v-chip small color="grey lighten-2">
                      {{ index + 1 }}
                    </v-chip>
                  </td>

                  <!-- Product -->
                  <td class="product-cell">
                    <v-autocomplete v-model="item.productId" :items="productList" item-text="pro_name" item-value="id"
                      label="Select Product" outlined dense hide-details @input="productChange(item)"
                      :rules="[rules.required]">
                      <template v-slot:selection="{ item: product }">
                        <div class="product-selection">
                          <div class="font-weight-medium">{{ product.pro_name }}</div>
                          <div class=" text--secondary">
                            ID: {{ product.id }}
                          </div>
                        </div>
                      </template>
                    </v-autocomplete>
                  </td>

                  <!-- Quantity -->
                  <td class="quantity-cell">
                    <v-text-field v-model="item.quantity" type="number" label="Qty" outlined dense hide-details
                      @input="quantityChange(item)" :rules="[rules.required, rules.positiveNumber]" />
                  </td>

                  <!-- Unit -->
                  <td class="unit-cell">
                    <v-autocomplete v-model="item.unitId" :items="unitList" item-text="name" item-value="id"
                      label="Unit" outlined dense hide-details @input="unitChange(item)">
                      <template v-slot:selection="{ item: unit }">
                        <v-chip small color="info" outlined>
                          {{ unit.name }}
                        </v-chip>
                      </template>
                    </v-autocomplete>
                  </td>

                  <!-- Unit Rate -->
                  <td class="rate-cell">
                    <v-text-field v-model="item.unitRate" type="number" label="Rate" outlined dense hide-details
                      @input="unitRateChange(item)" :rules="[rules.positiveNumber]" />
                  </td>

                  <!-- Unit Price -->
                  <td class="price-cell text-right">
                    <v-chip color="warning" outlined clickable @click="pricingLogig(item)">
                      <v-icon left small>mdi-currency-usd</v-icon>
                      {{ formatCurrency(item.unitPrice) }}
                    </v-chip>
                  </td>

                  <!-- Discount -->
                  <td class="discount-cell">
                    <v-text-field v-model="item.discount" type="number" label="Discount" outlined dense hide-details
                      @input="discountChange(item)" prefix="$" />
                  </td>

                  <!-- Total -->
                  <td class="total-cell text-right">
                    <div class="total-amount">
                      <span class="text-h6 font-weight-bold">
                        {{ formatCurrency(item.total) }}
                      </span>
                    </div>
                  </td>

                  <!-- Actions -->
                  <td class="action-cell text-center">
                    <v-btn icon color="error" @click="deleteItem(item)"
                      :disabled="!transaction.isActive || !updateAllow">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>

              <!-- No data state -->
              <template v-slot:no-data>
                <div class="text-center pa-8">
                  <v-icon size="64" color="grey lighten-2">mdi-package-variant</v-icon>
                  <div class="text-h6 mt-4 grey--text">No items added yet</div>
                  <div class="text-body-2 grey--text">Click "Add Item" to get started</div>
                </div>
              </template>
            </v-data-table>

            <!-- Empty state when no lines -->
            <div v-if="!transaction.lines || transaction.lines.length === 0" class="empty-state">
              <v-card flat color="grey lighten-5" class="text-center pa-12">
                <v-icon size="80" color="grey lighten-1">mdi-package-variant-closed</v-icon>
                <h3 class="text-h5 mt-4 grey--text">No Items Added</h3>
                <p class="text-body-1 grey--text mb-6">
                  Start by adding your first product to this purchase order
                </p>
                <v-btn color="primary" large @click="newRow" :disabled="!transaction.isActive || !updateAllow">
                  <v-icon left>mdi-plus</v-icon>
                  Add First Item
                </v-btn>
              </v-card>
            </div>
          </v-card-text>
        </v-card>

        <!-- Summary Card -->
        <v-card v-if="transaction.lines && transaction.lines.length > 0" class="summary-card mt-6" elevation="4">
          <v-card-title class="secondary white--text">
            <v-icon left color="white">mdi-calculator</v-icon>
            Purchase Order Summary
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="8">
                <div class="summary-details">
                  <div class="summary-row">
                    <span>Subtotal ({{ transaction.lines.length }} items)</span>
                    <span class="font-weight-medium">{{ formatCurrency(subtotal) }}</span>
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
                  <div class=" grey--text">Total Amount</div>
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

      <!-- Actions Footer -->
      <v-card-actions class="actions-footer pa-6">
        <v-spacer />
        <v-btn large text color="grey darken-1" @click="toggleDialog">
          <v-icon left>mdi-close</v-icon>
          Cancel
        </v-btn>

        <v-btn large color="primary" @click="postTransaction" :disabled="!canSave" :loading="isloading">
          <v-icon left>mdi-content-save</v-icon>
          {{ isUpdate ? 'Update' : 'Create' }} Purchase Order
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
  getFormatNum
} from '~/common'

export default {
  name: 'EnhancedPurchasingFormWithPrint',
  components: {
    PricingOption
  },

  props: {
    headerId: {
      type: Number,
      default: 0,
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

    supplierList() {
      return this.findAllClient || []
    },

    productList() {
      return this.findAllProduct || []
    },

    unitList() {
      return this.findAllUnit || []
    },

    currencyList() {
      return this.findAllCurrency || []
    },

    termsList() {
      return [
        { id: 1, term_name: 'Net 30' },
        { id: 2, term_name: 'Net 60' },
        { id: 3, term_name: 'COD' },
        { id: 4, term_name: 'Prepaid' }
      ]
    },

    statusOptions() {
      return [
        'Draft',
        'Pending Approval',
        'Approved',
        'Sent to Supplier',
        'Partially Received',
        'Fully Received',
        'Cancelled'
      ]
    },

    currentTerminal() {
      return this.findAllTerminal?.find(
        (el) => el.id === this.findSelectedTerminal
      ) || {}
    },

    user() {
      return this.$auth.user || {}
    },

    formattedDate() {
      return this.transaction.bookingDate
        ? new Date(this.transaction.bookingDate).toLocaleDateString()
        : 'Today'
    },

    selectedCurrencyCode() {
      const currency = this.currencyList.find(c => c.id === this.transaction.currencyId)
      return currency?.code || 'USD'
    },

    canSave() {
      return this.transaction.isActive &&
        this.updateAllow &&
        this.transaction.lines?.length > 0 &&
        !this.isloading
    },

    canCancel() {
      return this.isUpdate && this.transaction.isActive
    },

    canReceive() {
      return this.isUpdate &&
        this.transaction.status &&
        ['Approved', 'Sent to Supplier', 'Partially Received'].includes(this.transaction.status)
    },

    subtotal() {
      return this.transaction.lines?.reduce((total, item) => {
        return total + (item.total || 0)
      }, 0) || 0
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
        {
          text: '#',
          value: 'index',
          sortable: false,
          width: 80,
          align: 'center'
        },
        {
          text: 'Product',
          value: 'productId',
          sortable: false,
          width: 250
        },
        {
          text: 'Quantity',
          value: 'quantity',
          sortable: false,
          width: 120,
          align: 'center'
        },
        {
          text: 'Unit',
          value: 'unitId',
          sortable: false,
          width: 120,
          align: 'center'
        },
        {
          text: 'Rate',
          value: 'unitRate',
          sortable: false,
          width: 100,
          align: 'center'
        },
        {
          text: 'Unit Price',
          value: 'unitPrice',
          sortable: false,
          width: 120,
          align: 'right'
        },
        {
          text: 'Discount',
          value: 'discount',
          sortable: false,
          width: 120,
          align: 'center'
        },
        {
          text: 'Total',
          value: 'total',
          sortable: false,
          width: 150,
          align: 'right'
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
          width: 100,
          align: 'center'
        },
      ]
    },

    rules() {
      return {
        required: value => !!value || 'This field is required',
        positiveNumber: value => {
          if (!value) return true
          const num = parseFloat(value)
          return !isNaN(num) && num >= 0 || 'Must be a positive number'
        },
        nonZeroNumber: value => {
          if (!value) return 'This field is required'
          const num = parseFloat(value)
          return !isNaN(num) && num > 0 || 'Must be greater than 0'
        }
      }
    },
  },

  data() {
    return {
      isloading: false,
      errorSnackbar: false,
      supplierDialog: false,
      receivingDialog: false,
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
        status: 'Draft',
      },

      productPricingSelected: null,
    }
  },

  methods: {
    async initializeForm() {
      this.isloading = true
      try {
        if (this.isUpdate) {
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
        supplierId: null,
        currencyId: 1,
        discount: 0,
        status: 'Draft'
      }
      this.newRow()
    },

    async printPurchaseOrderDirectly() {
      if (!this.headerId) {
        this.showError('Please save the purchase order first before printing')
        return
      }

      this.isPrinting = true

      try {
        const response = await this.$axios.get(`api/purchasing/find/${this.headerId}`)
        const poData = response.data
        this.createAndPrintPurchaseOrder(poData)
      } catch (error) {
        console.error('Error fetching PO data:', error)
        this.showError('Failed to load purchase order data for printing')
      } finally {
        this.isPrinting = false
      }
    },

    createAndPrintPurchaseOrder(poData) {
      try {
        const poHTML = this.generatePurchaseOrderHTML(poData)
        const printWindow = window.open('', '_blank', 'width=800,height=600')

        if (!printWindow) {
          this.showError('Unable to open print window. Please check popup blocker settings.')
          return
        }

        printWindow.document.open()
        printWindow.document.write(poHTML)
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
      } catch (error) {
        console.error('Error creating print PO:', error)
        this.showError('Failed to generate purchase order for printing')
      }
    },

    generatePurchaseOrderHTML(header) {
      const totalDiscount = this.calculateTotalDiscount(header)
      const companyDataV1 = this.$store.getters.findAllCompany?.[0] || {}

      const formatDate = (dateString) => {
        if (!dateString) return 'N/A'
        try {
          const date = new Date(dateString)
          return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })
        } catch (error) {
          return dateString
        }
      }

      const formatNumber = (val) => {
        return new Intl.NumberFormat().format(val || 0)
      }

      const linesHTML = header.lines?.map((line, index) => `
        <tr>
          <td style="text-align: center;">${index + 1}</td>
          <td>
            <strong>${line.product?.pro_name || 'Unknown Product'}</strong><br>
            <small>ID: ${line.product?.pro_id || line.productId}</small>
          </td>
          <td style="text-align: center;">${formatNumber(line.quantity)}</td>
          <td style="text-align: center;">${line.unit?.name || 'ຊີ້ນ'}</td>
          <td style="text-align: right;">${formatNumber(line.unitPrice || line.price)}</td>
          <td style="text-align: right;">${formatNumber(line.discount)}</td>
          <td style="text-align: right;"><strong>${formatNumber(line.total)}</strong></td>
        </tr>
      `).join('') || '<tr><td colspan="7" style="text-align: center; padding: 40px;">No items</td></tr>'

      return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Purchase Order #${header.id}</title>
    <style>
        * { font-family: 'Arial', sans-serif; margin: 0; padding: 0; box-sizing: border-box; }
        body { padding: 20px; background: white; color: #333; line-height: 1.4; }
        .company-header { display: flex; justify-content: space-between; margin-bottom: 30px; padding-bottom: 15px; border-bottom: 3px solid #1976d2; }
        .company-info h2 { color: #1976d2; font-size: 24px; margin-bottom: 8px; font-weight: bold; }
        .company-info p { margin: 4px 0; color: #555; }
        .po-title { text-align: center; margin: 20px 0 30px 0; }
        .po-title h1 { color: #1976d2; font-size: 28px; font-weight: bold; }
        .info-section { display: flex; gap: 30px; margin-bottom: 30px; }
        .info-card { flex: 1; background: #f8f9fa; padding: 20px; border-radius: 8px; }
        .info-header { color: #1976d2; font-size: 16px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #1976d2; padding-bottom: 8px; }
        .info-row { margin-bottom: 8px; }
        .info-row strong { display: inline-block; min-width: 120px; color: #495057; }
        .products-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .products-table th { background: #1976d2; color: white; padding: 12px 8px; text-align: center; font-weight: bold; border: 1px solid #1976d2; font-size: 11px; }
        .products-table td { padding: 10px 8px; border: 1px solid #ddd; vertical-align: top; font-size: 12px; }
        .products-table tr:nth-child(even) { background: #f9f9f9; }
        .summary-section { float: right; width: 300px; margin-bottom: 30px; }
        .summary-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #ddd; }
        .total-row { display: flex; justify-content: space-between; padding: 12px 0; margin-top: 10px; border-top: 2px solid #1976d2; font-weight: bold; font-size: 16px; color: #1976d2; }
        .terms-section { clear: both; margin-top: 40px; padding: 20px; background: #f8f9fa; border-radius: 8px; }
        .terms-header { color: #1976d2; font-weight: bold; margin-bottom: 10px; }
        .signature-section { display: flex; justify-content: space-between; margin-top: 50px; }
        .signature-box { text-align: center; width: 200px; }
        .signature-line { border-bottom: 1px solid #333; height: 50px; margin-bottom: 10px; }
        .footer-section { margin-top: 40px; text-align: center; padding-top: 20px; border-top: 1px solid #ddd; }
        @media print { body { margin: 0; } @page { margin: 1cm; size: A4; } }
    </style>
</head>
<body>
    <div class="company-header">
        <div class="company-info">
            <h2>${companyDataV1.name || 'Company Name'}</h2>
            <p>${companyDataV1.address || 'Company Address'}</p>
            <p>Tel: ${companyDataV1.tel || 'Phone Number'}</p>
        </div>
        <div class="po-info">
            <p><strong>Date:</strong> ${formatDate(new Date())}</p>
            <p><strong>PO #:</strong> ${header.id}</p>
        </div>
    </div>
    
    <div class="po-title">
        <h1>ໃບສັ່ງຊື້ / PURCHASE ORDER</h1>
    </div>
    
    <div class="info-section">
        <div class="info-card">
            <div class="info-header">ຂໍ້ມູນຜູ້ຂາຍ / Supplier Information</div>
            <div class="info-row"><strong>Supplier ID:</strong> ${header.supplier?.id || ''}</div>
            <div class="info-row"><strong>Company:</strong> ${header.supplier?.company || ''}</div>
            <div class="info-row"><strong>Contact:</strong> ${header.supplier?.contact || ''}</div>
            <div class="info-row"><strong>Phone:</strong> ${header.supplier?.telephone || ''}</div>
            <div class="info-row"><strong>Address:</strong> ${header.supplier?.address || ''}</div>
        </div>
        
        <div class="info-card">
            <div class="info-header">ລາຍລະອຽດການສັ່ງຊື້ / Order Details</div>
            <div class="info-row"><strong>PO Number:</strong> ${header.id}</div>
            <div class="info-row"><strong>Order Date:</strong> ${formatDate(header.bookingDate)}</div>
            <div class="info-row"><strong>Prepared By:</strong> ${header.user?.cus_name || 'N/A'}</div>
            <div class="info-row"><strong>Currency:</strong> ${header.currency?.code || 'LAK'}</div>
            <div class="info-row"><strong>Status:</strong> ${header.status || 'Draft'}</div>
        </div>
    </div>
    
    <table class="products-table">
        <thead>
            <tr>
                <th>ລດ / No.</th>
                <th>ລາຍລະອຽດ / Description</th>
                <th>ຈຳນວນ / Qty</th>
                <th>ຫົວໜ່ວຍ / Unit</th>
                <th>ລາຄາຕໍ່ຫົວໜ່ວຍ / Unit Price</th>
                <th>ສ່ວນຫຼຸດ / Discount</th>
                <th>ຈຳນວນເງິນ / Amount</th>
            </tr>
        </thead>
        <tbody>
            ${linesHTML}
        </tbody>
    </table>
    
    <div class="summary-section">
        <div class="summary-row">
            <span>ລວມຍ່ອຍ / Subtotal:</span>
            <span>${formatNumber(header.total + totalDiscount)}</span>
        </div>
        <div class="summary-row">
            <span>ສ່ວນຫຼຸດລວມ / Total Discount:</span>
            <span>-${formatNumber(totalDiscount)}</span>
        </div>
        <div class="total-row">
            <span>ລວມທັງໝົດ / TOTAL:</span>
            <span>${formatNumber(header.total)} ${header.currency?.code || 'LAK'}</span>
        </div>
    </div>
    
    <div class="terms-section">
        <div class="terms-header">Terms & Conditions / ເງື່ອນໄຂ</div>
        <p>1. All prices are in ${header.currency?.code || 'LAK'} and exclude applicable taxes unless stated otherwise.</p>
        <p>2. Payment terms: Net 30 days from invoice date.</p>
        <p>3. Goods must be delivered in good condition and according to specifications.</p>
        ${header.notes ? `<p><strong>Special Instructions:</strong> ${header.notes}</p>` : ''}
    </div>
    
    <div class="signature-section">
        <div class="signature-box">
            <div class="signature-line"></div>
            <p><strong>Prepared By</strong></p>
            <p>${header.user?.cus_name || 'N/A'}</p>
            <p>Date: ${formatDate(new Date())}</p>
        </div>
        <div class="signature-box">
            <div class="signature-line"></div>
            <p><strong>Approved By</strong></p>
            <p>________________________</p>
            <p>Date: _______________</p>
        </div>
    </div>
    
    <div class="footer-section">
        <p><strong>Thank you for your business / ຂອບໃຈທີ່ໃຫ້ການສະໜັບສະໜູນ</strong></p>
    </div>
</body>
</html>
      `
    },

    calculateTotalDiscount(header) {
      if (!header || !header.lines) return 0

      let totalDiscount = 0
      for (const line of header.lines) {
        totalDiscount += line.discount || 0
      }
      totalDiscount += header.discount || 0
      return totalDiscount
    },

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

    productChange(item) {
      const product = this.productList.find(el => el.id === item.productId)
      if (!product) return

      const currency = this.findCurrency(product.purchaseCurrencyId || product.saleCurrencyId)
      const localPrice = (product.pro_purchase_price || product.pro_price || 0) * (currency.rate || 1)

      this.$set(item, 'unitPrice', localPrice)

      if (product.stockUnitId) {
        this.$set(item, 'unitId', product.stockUnitId)

        const unit = this.unitList.find(el => el.id === product.stockUnitId)
        if (unit?.unitRate) {
          this.$set(item, 'unitRate', unit.unitRate)
        } else {
          this.$set(item, 'unitRate', 1)
        }
      } else {
        this.$set(item, 'unitId', null)
        this.$set(item, 'unitRate', 1)
      }

      this.calculateLineTotal(item)
    },

    unitChange(item) {
      const unit = this.unitList.find(el => el.id === item.unitId)
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
      const unitPrice = parseFloat(item.unitPrice) || 0
      const discount = parseFloat(item.discount) || 0

      const total = Math.max(0, (qty * unitRate * unitPrice) - discount)
      this.$set(item, 'total', total)
    },

    newRow() {
      const defaultLine = {
        quantity: 1,
        unitRate: 1,
        unitPrice: 0,
        discount: 0,
        total: 0,
        isActive: true,
        productId: null,
        unitId: null,
      }
      this.transaction.lines.push(defaultLine)
    },

    async deleteItem(item) {
      try {
        this.isloading = true

        if (item.id) {
          await this.$axios.delete(`api/purchasingLine/find/${item.id}`)
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

    getStatusColor(status) {
      const colorMap = {
        'Draft': 'grey',
        'Pending Approval': 'orange',
        'Approved': 'green',
        'Sent to Supplier': 'blue',
        'Partially Received': 'purple',
        'Fully Received': 'success',
        'Cancelled': 'error'
      }
      return colorMap[status] || 'grey'
    },

    postReceiving() {
      this.receivingDialog = true
    },

    cancelOrder() {
      confirmSwal(this.$swal, 'Cancel Order', 'Are you sure you want to cancel this purchase order?', () => {
        this.transaction.status = 'Cancelled'
        this.postTransaction()
      })
    },

    updatePricing(priceInfo) {
      const index = this.transaction.lines.findIndex(
        line => line.productId === this.productPricingSelected
      )

      if (index < 0) return

      const line = this.transaction.lines[index]
      const newPrice = parseFloat(priceInfo.amount) || 0

      if (priceInfo.type === 'Price') {
        this.$set(line, 'unitPrice', newPrice)
      } else {
        const currentPrice = parseFloat(line.unitPrice) || 0
        const updatedPrice = currentPrice * (1 + newPrice / 100)
        this.$set(line, 'unitPrice', updatedPrice)
      }

      this.calculateLineTotal(line)
    },

    async loadTransaction() {
      try {
        const response = await this.$axios.get(`api/purchasing/find/${this.headerId}`)
        this.transaction = response.data
      } catch (error) {
        this.showError('Failed to load purchase order', error)
        throw error
      }
    },

    async postTransaction() {
      if (!this.validateHeader() || !this.validateAllLines()) {
        return
      }

      this.isloading = true

      try {
        this.prepareTransactionForSubmit()

        const url = this.isUpdate
          ? `api/purchasing/update/${this.headerId}`
          : `api/purchasing/create`

        const method = this.isUpdate ? 'put' : 'post'

        const response = await this.$axios[method](url, this.transaction)

        this.$emit('reload')
        swalSuccess(this.$swal, 'Success', 'Purchase order saved successfully')

      } catch (error) {
        this.handleSubmitError(error)
      } finally {
        this.isloading = false
      }
    },

    prepareTransactionForSubmit() {
      this.transaction.lines.forEach(line => {
        line.quantity = parseFloat(line.quantity) || 0
        line.unitRate = parseFloat(line.unitRate) || 1
        line.unitPrice = parseFloat(line.unitPrice) || 0
        line.discount = parseFloat(line.discount) || 0
        line.total = parseFloat(line.total) || 0
      })

      this.transaction.userId = this.user.id
      this.transaction.total = this.grandTotal
      this.transaction.discount = this.headerDiscount
      this.transaction.locationId = this.currentTerminal.locationId
    },

    handleSubmitError(error) {
      console.error('Submit error:', error)
      this.showError('Failed to save purchase order', error)
    },

    validateHeader() {
      this.headerError = false

      const errors = []

      if (!this.transaction.currencyId) {
        errors.push('Currency is required')
      }

      if (!this.transaction.supplierId) {
        errors.push('Supplier is required')
      }

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

      if (!item.productId) {
        errors.push(`Line ${lineNumber}: Product is required`)
      }

      const quantity = parseFloat(item.quantity)
      if (!quantity || quantity <= 0) {
        errors.push(`Line ${lineNumber}: Quantity must be greater than 0`)
      }

      if (errors.length > 0) {
        this.errorLineNumber = lineNumber - 1
        this.showError(errors.join(', '))
        return false
      }

      return true
    },

    validateAllLines() {
      for (let i = 0; i < this.transaction.lines.length; i++) {
        if (!this.validateLine(this.transaction.lines[i], i + 1)) {
          return false
        }
      }
      this.errorLineNumber = null
      return true
    },

    pricingLogig(item) {
      this.productPricingSelected = item.productId
      this.pricingDialogKey += 1
      this.pricingDialog = true
    },

    toggleDialog() {
      this.$emit('close-dialog')
    },

    formatCurrency(amount) {
      const num = parseFloat(amount) || 0
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.selectedCurrencyCode,
        minimumFractionDigits: 2,
      }).format(num)
    },

    getFormatNum(val) {
      return getFormatNum(val)
    },

    formatNumber(val) {
      return new Intl.NumberFormat().format(val || 0)
    },

    showError(message, error = null) {
      this.validateErrorMessage = message
      this.errorSnackbar = true
      if (error) {
        console.error('Error details:', error)
      }
    },
  },
}
</script>

<style scoped>
.purchasing-form-container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 20px;
}

.purchasing-form-card {
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 16px !important;
  overflow: hidden;
}

.header-section {
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-primary-darken2) 100%);
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
  background: linear-gradient(135deg, rgba(var(--v-success-base), 0.1) 0%, rgba(var(--v-success-base), 0.05) 100%);
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
  background: linear-gradient(135deg, rgba(var(--v-primary-base), 0.08) 0%, rgba(var(--v-primary-base), 0.04) 100%);
  padding: 16px 20px;
  margin: 12px -20px;
  border-radius: 8px;
}

.grand-total-display {
  background: linear-gradient(135deg, rgba(var(--v-primary-base), 0.05) 0%, rgba(var(--v-secondary-base), 0.05) 100%);
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

.gap-2>*+* {
  margin-left: 8px;
}

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

.purchasing-form-card {
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

@media (max-width: 768px) {
  .purchasing-form-container {
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