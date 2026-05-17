<template>
  <div class="purchasing-form-container">
    <!-- Loading Overlay -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <v-card color="primary" dark rounded="xl">
        <v-card-text class="text-center pa-6">
          <v-progress-circular :size="50" :width="5" color="white" indeterminate class="mb-3" />
          <div class="text-h6 font-weight-bold">ກຳລັງປະມວນຜົນ...</div>
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
    <v-snackbar v-model="errorSnackbar" :timeout="6000" color="error" rounded="pill" top right>
      <v-icon left>mdi-alert-circle</v-icon>
      {{ validateErrorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="errorSnackbar = false">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Main Form Card -->
    <v-card class="purchasing-form-card" flat tile min-height="100vh" color="white">
      <!-- Premium Header Section -->
      <v-card-title class="primary pa-4 elevation-2">
        <div class="d-flex justify-space-between align-center w-100">
          <div class="d-flex align-center">
            <v-btn icon color="white" @click="toggleDialog" class="mr-2">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <div>
              <h2 class="text-h6 font-weight-black white--text mb-0 d-flex align-center">
                <v-icon left color="white" small>mdi-file-document-edit</v-icon>
                <span style="color: white !important;">{{ isUpdate ? 'ແກ້ໄຂໃບສັ່ງຊື້' : 'ສ້າງໃບສັ່ງຊື້ໃໝ່' }}</span>
                <v-chip v-if="transaction.id" x-small color="rgba(255,255,255,0.2)" class="ml-2 white--text font-weight-bold">
                  #{{ transaction.id }}
                </v-chip>
              </h2>
              <div class="text-caption white--text" style="opacity: 0.9; color: white !important;">
                {{ isUpdate ? 'Update existing purchase order information' : 'Create a new purchase order for suppliers' }}
              </div>
            </div>
          </div>

          <div class="d-flex align-center header-actions">
            <v-btn v-if="isUpdate" color="success" depressed small class="action-btn mx-1" @click="postReceiving" :disabled="!canReceive">
              <v-icon left small>mdi-package-variant</v-icon>ຮັບເຄື່ອງ
            </v-btn>
            <v-btn v-if="isUpdate" color="error" depressed small class="action-btn mx-1" @click="cancelOrder" :disabled="!canCancel">
              <v-icon left small>mdi-cancel</v-icon>ຍົກເລີກ
            </v-btn>
            <v-btn color="info" depressed small class="action-btn mx-1" @click="printPurchaseOrderDirectly" :disabled="!headerId" :loading="isPrinting">
              <v-icon left small>mdi-printer</v-icon>ພິມ PO
            </v-btn>
          </div>
        </div>
      </v-card-title>

      <v-card-text class="pa-4 pt-6">
        <v-row dense>
          <!-- Left Panel: General Info -->
          <v-col cols="12" md="4">
            <v-card outlined class="info-section-card h-100 pa-4" rounded="lg">
              <div class="d-flex align-center mb-4">
                <v-avatar color="primary" size="32" class="mr-2">
                  <v-icon color="white" small>mdi-information-variant</v-icon>
                </v-avatar>
                <span class="text-subtitle-2 font-weight-black primary--text">ຂໍ້ມູນພື້ນຖານ</span>
              </div>
              
              <v-row dense>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field v-model="transaction.bookingDate" type="date" label="ວັນທີສັ່ງຊື້" outlined dense hide-details class="custom-input mb-3" />
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-autocomplete v-model="transaction.supplierId" :items="supplierList" item-text="name" item-value="id"
                    label="ຜູ້ຂາຍ / Supplier" outlined dense hide-details class="custom-input mb-3" required :rules="[rules.required]">
                    <template v-slot:selection="{ item }">
                      <span class="text-body-2 font-weight-bold">{{ item.name || item.company }}</span>
                    </template>
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-autocomplete v-model="transaction.currencyId" :items="currencyList" item-text="code" item-value="id"
                    label="ສະກຸນເງິນ" outlined dense hide-details class="custom-input mb-3" @input="currencyChange">
                    <template v-slot:selection="{ item }">
                      <v-chip x-small color="primary" label class="font-weight-bold">{{ item.code }}</v-chip>
                    </template>
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-select v-model="transaction.status" :items="statusOptions" label="ສະຖານະ" outlined dense hide-details class="custom-input">
                    <template v-slot:selection="{ item }">
                      <v-chip x-small :color="getStatusColor(item)" dark class="font-weight-black">{{ item }}</v-chip>
                    </template>
                  </v-select>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Center Panel: Additional Details -->
          <v-col cols="12" md="4">
            <v-card outlined class="info-section-card h-100 pa-4" rounded="lg">
              <div class="d-flex align-center mb-4">
                <v-avatar color="info" size="32" class="mr-2">
                  <v-icon color="white" small>mdi-truck-delivery-outline</v-icon>
                </v-avatar>
                <span class="text-subtitle-2 font-weight-black info--text">ລາຍລະອຽດເພີ່ມເຕີມ</span>
              </div>

              <v-row dense>
                <v-col cols="12" sm="6" md="12">
                  <v-text-field v-model="transaction.expectedDeliveryDate" type="date" label="ວັນທີຄາດວ່າຈະສົ່ງ" outlined dense hide-details class="custom-input mb-3" />
                </v-col>
                <v-col cols="12" sm="6" md="12">
                  <v-autocomplete v-model="transaction.termId" :items="termsList" item-text="term_name" item-value="id"
                    label="ເງື່ອນໄຂການຊຳລະ" outlined dense hide-details class="custom-input mb-3" />
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="transaction.notes" label="ໝາຍເຫດ" outlined dense rows="3" hide-details class="custom-input" />
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Right Panel: Financial Summary -->
          <v-col cols="12" md="4">
            <v-card outlined class="info-section-card h-100 pa-4 financial-panel" rounded="lg">
              <div class="d-flex align-center mb-4">
                <v-avatar color="success" size="32" class="mr-2">
                  <v-icon color="white" small>mdi-calculator</v-icon>
                </v-avatar>
                <span class="text-subtitle-2 font-weight-black success--text">ສະຫຼຸບການເງິນ</span>
              </div>

              <div class="financial-metrics pa-4 rounded-lg grey lighten-4">
                <div class="d-flex justify-space-between align-center mb-2">
                  <span class="text-caption grey--text">ລວມຍ່ອຍ</span>
                  <span class="text-body-2 font-weight-bold">{{ formatCurrency(subtotal) }}</span>
                </div>
                <div class="d-flex justify-space-between align-center mb-3">
                  <span class="text-caption grey--text">ສ່ວນຫຼຸດບິນ</span>
                  <div style="width: 120px">
                    <v-text-field v-model="transaction.discount" type="number" dense outlined hide-details 
                      prefix="₭" class="mini-input text-right" dir="rtl" />
                  </div>
                </div>
                <v-divider class="mb-3" />
                <div class="d-flex justify-space-between align-end">
                  <span class="text-subtitle-1 font-weight-black primary--text">ລວມທັງໝົດ</span>
                  <div class="text-right">
                    <div class="text-h5 font-weight-black primary--text lh-1">{{ formatCurrency(grandTotal) }}</div>
                    <span class="text-caption grey--text font-weight-bold">({{ selectedCurrencyCode }})</span>
                  </div>
                </div>
              </div>

              <div v-if="transaction.user" class="mt-4 d-flex align-center">
                <v-icon x-small color="grey" class="mr-1">mdi-account-circle</v-icon>
                <span class="text-tiny grey--text">ສ້າງໂດຍ: {{ transaction.user.cus_name }}</span>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Line Items Section -->
        <v-card outlined class="mt-4 rounded-lg overflow-hidden">
          <v-toolbar flat dense color="grey lighten-4">
            <v-icon small color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
            <span class="text-caption font-weight-black grey--text text--darken-3">ລາຍການສິນຄ້າ ({{ transaction.lines.length }})</span>
            <v-spacer></v-spacer>
            <v-btn color="primary" small depressed class="action-btn" @click="newRow" :disabled="!transaction.isActive || !updateAllow">
              <v-icon left x-small>mdi-plus-circle</v-icon>ເພີ່ມລາຍການ
            </v-btn>
          </v-toolbar>

          <v-data-table :headers="enhancedHeaders" :items="transaction.lines" class="modern-form-table" hide-default-footer :items-per-page="-1" dense>
            <template v-slot:item="{ item, index }">
              <tr :class="['form-row', { 'error-row': errorLineNumber === index }]">
                <td class="text-center font-weight-black grey--text text-tiny">{{ index + 1 }}</td>
                
                <td class="product-col">
                  <v-autocomplete v-model="item.productId" :items="productList" item-text="pro_name" item-value="id"
                    outlined dense hide-details @input="productChange(item)" class="table-input">
                    <template v-slot:selection="{ item: p }">
                      <span class="text-tiny font-weight-bold">{{ p.pro_name }}</span>
                    </template>
                  </v-autocomplete>
                </td>

                <td class="qty-col">
                  <v-text-field v-model="item.quantity" type="number" outlined dense hide-details 
                    @input="quantityChange(item)" class="table-input text-center" />
                </td>

                <td class="unit-col">
                  <v-autocomplete v-model="item.unitId" :items="unitList" item-text="name" item-value="id"
                    outlined dense hide-details @input="unitChange(item)" class="table-input text-center" />
                </td>

                <td class="price-col text-right">
                  <v-btn text small block class="price-btn text-right font-weight-black" @click="pricingLogig(item)">
                    {{ numberWithCommas(item.unitPrice) }}
                  </v-btn>
                </td>

                <td class="discount-col">
                  <v-text-field v-model="item.discount" type="number" outlined dense hide-details 
                    @input="discountChange(item)" class="table-input" />
                </td>

                <td class="total-col text-right font-weight-black primary--text">
                  {{ numberWithCommas(item.total) }}
                </td>

                <td class="text-center">
                  <v-btn icon x-small color="error" @click="deleteItem(item)" :disabled="!transaction.isActive || !updateAllow">
                    <v-icon x-small>mdi-delete-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
            
            <template v-slot:no-data>
              <div class="text-center pa-10">
                <v-icon size="48" color="grey lighten-3">mdi-package-variant-closed</v-icon>
                <div class="text-caption grey--text mt-2">ຍັງບໍ່ມີລາຍການສິນຄ້າ</div>
                <v-btn text x-small color="primary" @click="newRow" class="mt-2 font-weight-bold">ກົດເພື່ອເພີ່ມ</v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-card-text>

      <!-- Fixed Actions Footer -->
      <v-divider></v-divider>
      <v-card-actions class="pa-4 grey lighten-5">
        <v-btn depressed color="grey" text @click="toggleDialog" class="px-6 font-weight-bold">ຍົກເລີກ</v-btn>
        <v-spacer></v-spacer>
        <div class="d-flex align-center mr-6">
          <span class="text-caption grey--text mr-2">ຍອດລວມທັງໝົດ:</span>
          <span class="text-h6 font-weight-black success--text">{{ formatCurrency(grandTotal) }}</span>
        </div>
        <v-btn color="primary" depressed large @click="postTransaction" :disabled="!canSave" :loading="isloading" class="px-10 action-btn elevation-2">
          <v-icon left>mdi-check-circle</v-icon>
          {{ isUpdate ? 'ບັນທຶກການແກ້ໄຂ' : 'ຢືນຢັນການສ້າງໃບສັ່ງຊື້' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import commaThousand from '@/plugins/comma-thousand'
import { mapActions, mapGetters } from 'vuex'
import PricingOption from '~/components/PricingOption.vue'
import { swalSuccess, swalError2, confirmSwal, getFormatNum } from '~/common'

export default {
  name: 'PurchasingFormCRUD',
  components: { PricingOption },
  props: {
    headerId: { type: Number, default: 0 },
    isUpdate: { type: Boolean, default: false },
    updateAllow: { type: Boolean, default: true },
  },
  directives: { commaThousand },
  data() {
    return {
      isloading: false,
      errorSnackbar: false,
      supplierDialog: false,
      receivingDialog: false,
      pricingDialog: false,
      pricingDialogKey: 1,
      isPrinting: false,
      headerError: false,
      validateErrorMessage: '',
      errorLineNumber: null,
      transaction: { isActive: true, exchangeRate: 1, lines: [], bookingDate: new Date().toISOString().substr(0, 10), discount: 0, status: 'Draft' },
      productPricingSelected: null,
      enhancedHeaders: [
        { text: '#', value: 'index', align: 'center', sortable: false, width: '40px' },
        { text: 'ສິນຄ້າ / Product', value: 'productId', align: 'left', sortable: false },
        { text: 'ຈຳນວນ', value: 'quantity', align: 'center', sortable: false, width: '90px' },
        { text: 'ຫົວໜ່ວຍ', value: 'unitId', align: 'center', sortable: false, width: '100px' },
        { text: 'ລາຄາ', value: 'unitPrice', align: 'right', sortable: false, width: '120px' },
        { text: 'ສ່ວນຫຼຸດ', value: 'discount', align: 'center', sortable: false, width: '100px' },
        { text: 'ລວມ', value: 'total', align: 'right', sortable: false, width: '120px' },
        { text: '', value: 'actions', align: 'center', sortable: false, width: '50px' },
      ],
    }
  },
  computed: {
    ...mapGetters(['findAllProduct', 'findAllClient', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
    supplierList() { return this.findAllClient || [] },
    productList() { return this.findAllProduct || [] },
    unitList() { return this.findAllUnit || [] },
    currencyList() { return this.findAllCurrency || [] },
    termsList() { return [{ id: 1, term_name: 'Net 30' }, { id: 2, term_name: 'Net 60' }, { id: 3, term_name: 'COD' }, { id: 4, term_name: 'Prepaid' }] },
    statusOptions() { return ['Draft', 'Pending Approval', 'Approved', 'Sent to Supplier', 'Partially Received', 'Fully Received', 'Cancelled'] },
    currentTerminal() { return this.findAllTerminal?.find(el => el.id === this.findSelectedTerminal) || {} },
    user() { return this.$auth.user || {} },
    selectedCurrencyCode() { return this.currencyList.find(c => c.id === this.transaction.currencyId)?.code || 'LAK' },
    canSave() { return this.transaction.isActive && this.updateAllow && this.transaction.lines?.length > 0 && !this.isloading },
    canCancel() { return this.isUpdate && this.transaction.isActive },
    canReceive() { return this.isUpdate && this.transaction.status && ['Approved', 'Sent to Supplier', 'Partially Received'].includes(this.transaction.status) },
    subtotal() { return this.transaction.lines?.reduce((total, item) => total + (item.total || 0), 0) || 0 },
    headerDiscount() { const d = parseFloat(this.transaction.discount || 0); return isNaN(d) ? 0 : d },
    grandTotal() { return Math.max(0, this.subtotal - this.headerDiscount) },
    rules() { return { required: v => !!v || 'Required', positiveNumber: v => !v || (parseFloat(v) >= 0 || '>= 0') } }
  },
  async created() { await this.initializeForm() },
  methods: {
    numberWithCommas(v) { return getFormatNum(v) },
    formatNumber(v) { return new Intl.NumberFormat().format(v || 0) },
    formatCurrency(v) { return new Intl.NumberFormat('lo-LA', { style: 'currency', currency: this.selectedCurrencyCode, minimumFractionDigits: 0 }).format(v || 0) },
    async initializeForm() {
      this.isloading = true
      try { if (this.isUpdate) { await this.loadTransaction() } else { this.initializeNewTransaction() } }
      catch (e) { this.showError('Initialization failed', e) } finally { this.isloading = false }
    },
    initializeNewTransaction() {
      this.transaction = { ...this.transaction, bookingDate: new Date().toISOString().substr(0, 10), supplierId: null, currencyId: this.currencyList.find(c => c.isLocalCCY)?.id || 1, discount: 0, status: 'Draft' }
      this.newRow()
    },
    async printPurchaseOrderDirectly() {
      this.isPrinting = true
      try { const res = await this.$axios.get(`api/purchasing/find/${this.headerId}`); this.createAndPrintPurchaseOrder(res.data) }
      catch (e) { this.showError('Print failed') } finally { this.isPrinting = false }
    },
    createAndPrintPurchaseOrder(poData) {
      const poHTML = this.generatePurchaseOrderHTML(poData); const win = window.open('', '_blank', 'width=800,height=600')
      if (!win) return; win.document.open(); win.document.write(poHTML); win.document.close()
      win.onload = () => { setTimeout(() => { try { win.print(); setTimeout(() => win.close(), 100) } catch (e) { win.close() } }, 500) }
    },
    generatePurchaseOrderHTML(header) {
      const company = this.$store.getters.findAllCompany?.[0] || {}
      const fmt = (v) => new Intl.NumberFormat().format(v || 0)
      const lines = header.lines?.map((l, i) => `
        <tr>
          <td align="center">${i + 1}</td>
          <td><strong>${l.product?.pro_name || ''}</strong><br><small style="color: #666">PID: ${l.product?.pro_id || ''}</small></td>
          <td align="center">${fmt(l.quantity)}</td>
          <td align="center">${l.unit?.name || ''}</td>
          <td align="right">${fmt(l.unitPrice)}</td>
          <td align="right">${fmt(l.discount)}</td>
          <td align="right"><strong>${fmt(l.total)}</strong></td>
        </tr>`).join('')

      return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap');
          body { font-family: 'Noto Sans Lao', sans-serif; padding: 0; margin: 0; color: #333; font-size: 12px; line-height: 1.6; }
          .page { width: 210mm; min-height: 297mm; padding: 15mm; margin: 0 auto; background: white; }
          .header { display: flex; justify-content: space-between; border-bottom: 3px solid #1976d2; padding-bottom: 20px; margin-bottom: 20px; }
          .company-info h1 { color: #1976d2; margin: 0; font-size: 24px; text-transform: uppercase; }
          .company-info p { margin: 2px 0; color: #666; }
          .po-label { text-align: right; }
          .po-label h2 { color: #1976d2; margin: 0; font-size: 28px; }
          .po-label p { margin: 2px 0; font-weight: bold; }
          
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px; }
          .info-box { background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee; }
          .info-box h3 { margin: 0 0 10px 0; font-size: 14px; color: #1976d2; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
          .info-row { display: flex; margin-bottom: 4px; }
          .info-row span:first-child { width: 100px; font-weight: bold; color: #555; }
          
          table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          th { background: #1976d2; color: white; padding: 12px 8px; font-size: 11px; text-transform: uppercase; border: 1px solid #1976d2; }
          td { padding: 10px 8px; border: 1px solid #eee; }
          tr:nth-child(even) { background: #fafafa; }
          
          .footer { display: flex; justify-content: space-between; }
          .terms { width: 60%; font-size: 10px; color: #777; }
          .totals { width: 35%; }
          .total-row { display: flex; justify-content: space-between; padding: 5px 0; }
          .grand-total { border-top: 2px solid #1976d2; margin-top: 10px; padding-top: 10px; font-size: 16px; font-weight: bold; color: #1976d2; }
          
          .signatures { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 60px; text-align: center; }
          .sig-box { border-top: 1px solid #333; padding-top: 10px; }
          @media print { .page { margin: 0; padding: 10mm; box-shadow: none; } }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="header">
            <div class="company-info">
              <h1>${company.name || 'D-COMMERCE'}</h1>
              <p>${company.address || 'Vientiane, Lao PDR'}</p>
              <p>ໂທ: ${company.tel || '-'}</p>
              <p>Email: ${company.email || '-'}</p>
            </div>
            <div class="po-label">
              <h2>ໃບສັ່ງຊື້</h2>
              <p>PURCHASE ORDER</p>
              <p style="font-size: 16px; color: #666"># ${header.id}</p>
            </div>
          </div>

          <div class="info-grid">
            <div class="info-box">
              <h3>ຂໍ້ມູນຜູ້ຂາຍ / SUPPLIER</h3>
              <div class="info-row"><span>ຊື່ບໍລິສັດ:</span> <span>${header.vendor?.company || '-'}</span></div>
              <div class="info-row"><span>ຜູ້ຕິດຕໍ່:</span> <span>${header.vendor?.contact || '-'}</span></div>
              <div class="info-row"><span>ເບີໂທ:</span> <span>${header.vendor?.telephone || '-'}</span></div>
              <div class="info-row"><span>ທີ່ຢູ່:</span> <span>${header.vendor?.address || '-'}</span></div>
            </div>
            <div class="info-box">
              <h3>ລາຍລະອຽດ / DETAILS</h3>
              <div class="info-row"><span>ວັນທີ:</span> <span>${header.bookingDate}</span></div>
              <div class="info-row"><span>ກຳນົດສົ່ງ:</span> <span>${header.deliveryDate || '-'}</span></div>
              <div class="info-row"><span>ສະກຸນເງິນ:</span> <span>${header.currency?.code || 'LAK'}</span></div>
              <div class="info-row"><span>ສະຖານະ:</span> <span>${header.status}</span></div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th width="40">ລຳດັບ</th>
                <th>ລາຍການສິນຄ້າ / DESCRIPTION</th>
                <th width="60">ຈຳນວນ</th>
                <th width="80">ຫົວໜ່ວຍ</th>
                <th width="100">ລາຄາ</th>
                <th width="80">ສ່ວນຫຼຸດ</th>
                <th width="120">ລວມ</th>
              </tr>
            </thead>
            <tbody>
              ${lines}
            </tbody>
          </table>

          <div class="footer">
            <div class="terms">
              <h4 style="margin: 0 0 5px 0; color: #333">ເງື່ອນໄຂ / TERMS & CONDITIONS</h4>
              <p>1. ກະລຸນາສົ່ງສິນຄ້າຕາມກຳນົດເວລາທີ່ລະບຸໄວ້.</p>
              <p>2. ສິນຄ້າຕ້ອງຢູ່ໃນສະພາບສົມບູນ ແລະ ຖືກຕ້ອງຕາມມາດຕະຖານ.</p>
              <p>3. ກະລຸນາແນບໃບສັ່ງຊື້ສະບັບນີ້ມານຳໃນເວລາມາສົ່ງສິນຄ້າ.</p>
              ${header.notes ? `<p><strong>ໝາຍເຫດ:</strong> ${header.notes}</p>` : ''}
            </div>
            <div class="totals">
              <div class="total-row"><span>ລວມຍ່ອຍ (Subtotal):</span> <span>${fmt(header.total + (header.discount || 0))}</span></div>
              <div class="total-row"><span>ສ່ວນຫຼຸດ (Discount):</span> <span>-${fmt(header.discount || 0)}</span></div>
              <div class="total-row grand-total">
                <span>ລວມທັງໝົດ:</span>
                <span>${fmt(header.total)} ${header.currency?.code || 'LAK'}</span>
              </div>
            </div>
          </div>

          <div class="signatures">
            <div class="sig-box">
              <p>ຜູ້ຈັດຊື້</p>
              <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
            </div>
            <div class="sig-box">
              <p>ຜູ້ກວດກາ</p>
              <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
            </div>
            <div class="sig-box">
              <p>ຜູ້ນຳໃຊ້/ຮອງອຳນວຍການ</p>
              <p style="margin-top: 40px; font-size: 10px; color: #999">(ລາຍເຊັນ ແລະ ຊື່ແຈ້ງ)</p>
            </div>
          </div>
        </div>
      </body>
      </html>`
    },
    currencyChange() { const c = this.currencyList.find(el => el.id === this.transaction.currencyId); if (c) this.transaction.exchangeRate = c.rate || 1 },
    findCurrency(id) { return this.findAllCurrency?.find(el => el.id === id) || {} },
    productChange(item) {
      const p = this.productList.find(el => el.id === item.productId); if (!p) return
      const c = this.findCurrency(p.purchaseCurrencyId || p.saleCurrencyId)
      this.$set(item, 'unitPrice', (p.pro_purchase_price || p.pro_price || 0) * (c.rate || 1))
      if (p.stockUnitId) { this.$set(item, 'unitId', p.stockUnitId); const u = this.unitList.find(el => el.id === p.stockUnitId); this.$set(item, 'unitRate', u?.unitRate || 1) }
      else { this.$set(item, 'unitId', null); this.$set(item, 'unitRate', 1) }
      this.calculateLineTotal(item)
    },
    unitChange(item) { const u = this.unitList.find(el => el.id === item.unitId); if (u) { this.$set(item, 'unitRate', u.unitRate || 1); this.calculateLineTotal(item) } },
    quantityChange(item) { this.calculateLineTotal(item) },
    unitRateChange(item) { this.calculateLineTotal(item) },
    discountChange(item) { this.calculateLineTotal(item) },
    calculateLineTotal(item) {
      const q = parseFloat(item.quantity) || 0; const r = parseFloat(item.unitRate) || 1; const p = parseFloat(item.unitPrice) || 0; const d = parseFloat(item.discount) || 0
      this.$set(item, 'total', Math.max(0, (q * r * p) - d))
    },
    newRow() { this.transaction.lines.push({ quantity: 1, unitRate: 1, unitPrice: 0, discount: 0, total: 0, isActive: true, productId: null, unitId: null }) },
    async deleteItem(item) {
      try { this.isloading = true; if (item.id) await this.$axios.delete(`api/purchasingLine/find/${item.id}`); const i = this.transaction.lines.indexOf(item); if (i > -1) this.transaction.lines.splice(i, 1) }
      catch (e) { this.showError('Delete failed') } finally { this.isloading = false }
    },
    getStatusColor(s) { const colors = { 'Draft': 'grey', 'Pending Approval': 'orange', 'Approved': 'green', 'Sent to Supplier': 'blue', 'Partially Received': 'purple', 'Fully Received': 'success', 'Cancelled': 'error' }; return colors[s] || 'grey' },
    postReceiving() { this.receivingDialog = true },
    cancelOrder() { confirmSwal(this.$swal, 'Cancel Order', 'Are you sure?', () => { this.transaction.status = 'Cancelled'; this.postTransaction() }) },
    updatePricing(info) {
      const idx = this.transaction.lines.findIndex(l => l.productId === this.productPricingSelected); if (idx < 0) return
      const l = this.transaction.lines[idx]; const np = parseFloat(info.amount) || 0
      if (info.type === 'Price') { this.$set(l, 'unitPrice', np) }
      else { const cp = parseFloat(l.unitPrice) || 0; this.$set(l, 'unitPrice', cp * (1 + np / 100)) }
      this.calculateLineTotal(l)
    },
    async loadTransaction() {
      try {
        const res = await this.$axios.get(`api/purchasing/find/${this.headerId}`)
        const data = res.data
        
        // Reverse map backend status to frontend label
        const reverseStatusMap = {
          'PENDING': 'Pending Approval',
          'PARTIAL': 'Partially Received',
          'COMPLETED': 'Fully Received'
        }

        // Map backend to frontend expectations
        this.transaction = {
          ...data,
          supplierId: data.vendorId,
          expectedDeliveryDate: data.deliveryDate,
          status: reverseStatusMap[data.status] || data.status || 'Draft',
          lines: data.lines?.map(l => ({
            ...l,
            quantity: l.qty || 1,
            unitRate: l.rate || 1,
            unitPrice: l.price || 0,
            total: l.total || 0,
            discount: l.discount || 0
          })) || []
        }
      } catch (e) {
        this.showError('Failed to load transaction', e)
      }
    },
    async postTransaction() {
      if (!this.validateHeader() || !this.validateAllLines()) return
      this.isloading = true
      try {
        // Map frontend fields to backend requirements
        const payload = {
          ...this.transaction,
          vendorId: this.transaction.supplierId,
          deliveryDate: this.transaction.expectedDeliveryDate || this.transaction.bookingDate,
          userId: this.user.id,
          total: this.grandTotal,
          discount: this.headerDiscount,
          locationId: this.currentTerminal.locationId,
          lines: this.transaction.lines.map(l => ({
            ...l,
            qty: parseFloat(l.quantity) || 0,
            rate: parseFloat(l.unitRate) || 1,
            price: parseFloat(l.unitPrice) || 0,
            discount: parseFloat(l.discount) || 0,
            total: parseFloat(l.total) || 0
          }))
        }

        // Map frontend status to backend ENUM
        const statusMap = {
          'Draft': 'PENDING',
          'Pending Approval': 'PENDING',
          'Approved': 'PENDING',
          'Sent to Supplier': 'PENDING',
          'Partially Received': 'PARTIAL',
          'Fully Received': 'COMPLETED',
          'Cancelled': 'PENDING'
        }
        payload.status = statusMap[this.transaction.status] || 'PENDING'

        const url = this.isUpdate ? `api/purchasing/update/${this.headerId}` : `api/purchasing/create`
        await this.$axios[this.isUpdate ? 'put' : 'post'](url, payload)
        
        this.$emit('reload'); swalSuccess(this.$swal, 'Success', 'Saved successfully')
      } catch (e) { this.showError('Save failed', e) } finally { this.isloading = false }
    },
    validateHeader() { if (!this.transaction.currencyId || !this.transaction.supplierId || this.transaction.lines?.length === 0) { this.showError('Please fill required fields'); return false }; return true },
    validateLine(item, n) { if (!item.productId || parseFloat(item.quantity) <= 0) { this.errorLineNumber = n - 1; this.showError(`Line ${n} invalid`); return false }; return true },
    validateAllLines() { for (let i = 0; i < this.transaction.lines.length; i++) { if (!this.validateLine(this.transaction.lines[i], i + 1)) return false }; this.errorLineNumber = null; return true },
    pricingLogig(item) { this.productPricingSelected = item.productId; this.pricingDialogKey += 1; this.pricingDialog = true },
    toggleDialog() { this.$emit('close-dialog') },
    showError(m, e = null) { this.validateErrorMessage = m; this.errorSnackbar = true; if (e) console.error(e) }
  },
}
</script>

<style scoped>
.purchasing-form-container {
  font-family: 'noto sans lao', sans-serif !important;
  background-color: white;
  min-height: 100vh;
}

.purchasing-form-container * {
  font-family: 'noto sans lao', sans-serif !important;
}

.form-header-premium {
  background-color: var(--v-primary-base) !important;
}

.action-btn {
  text-transform: none;
  font-weight: 700;
  border-radius: 6px;
}

.info-section-card {
  background: white;
  border-color: #eee !important;
}

.custom-input>>>fieldset {
  border-color: #eee !important;
}

.financial-panel {
  background: linear-gradient(to bottom, #fff, #f9f9f9);
}

.financial-metrics {
  border: 1px solid #e0e0e0;
}

.mini-input>>>.v-input__slot {
  min-height: 28px !important;
  font-size: 0.75rem;
}

.modern-form-table>>>thead th {
  background-color: #f5f5f5 !important;
  font-weight: 700 !important;
  font-size: 0.7rem;
  height: 36px !important;
  color: #666 !important;
}

.modern-form-table>>>tbody td {
  padding: 4px 8px !important;
  height: 44px !important;
}

.table-input>>>.v-input__slot {
  min-height: 32px !important;
  font-size: 0.75rem;
}

.price-btn {
  text-transform: none;
  font-size: 0.75rem !important;
  color: var(--v-primary-base) !important;
}

.error-row {
  background-color: #fff5f5 !important;
}

.lh-1 { line-height: 1; }
.text-tiny { font-size: 0.65rem; }
.opacity-70 { opacity: 0.7; }

.financial-metrics .v-text-field--outlined >>> fieldset {
  border-color: transparent !important;
  background: rgba(0,0,0,0.03);
}

.financial-metrics .v-text-field--outlined:hover >>> fieldset {
  border-color: var(--v-primary-base) !important;
}
</style>