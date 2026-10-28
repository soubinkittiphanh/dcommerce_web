<template>
  <div class="pos-order-wrapper" :style="themeCssVariables">
    <!-- Global Loading Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="320">
      <v-card class="rounded-xl overflow-hidden pa-4 text-center glass-card" elevation="12">
        <v-card-text class="d-flex flex-column align-center justify-center py-4">
          <v-progress-circular :size="64" :width="6" color="primary" indeterminate class="mb-4" />
          <div class="text-subtitle-1 font-weight-bold text--primary">ກຳລັງປະມວນຜົນ...</div>
          <div class="caption grey--text">ກະລຸນາລໍຖ້າຈັກໜ່ອຍ (Processing transaction)</div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Customer Selector Dialog -->
    <v-dialog v-model="customerDialog" max-width="1200" persistent>
      <customer-list @close-dialog="customerDialog = false" />
    </v-dialog>

    <!-- Cancel Order Confirmation Dialog -->
    <v-dialog v-model="cancelConfirmDialog" max-width="600" persistent>
      <cancel-ticket-form
        :id="headerId"
        :customer-id="onlineCustomerId"
        @refresh="$emit('reload')"
        @close-dialog="cancelConfirmDialog = false"
      />
    </v-dialog>

    <!-- Pricing Adjustment Dialog -->
    <v-dialog v-model="pricingDialog" max-width="800" persistent>
      <pricing-option
        :key="pricingDialogKey"
        :is-backend="true"
        :record-id="productPricingSelected"
        @new-price-update="updatePricing"
        @close-dialog="pricingDialog = false"
      />
    </v-dialog>

    <!-- Multi-Payment Details Dialog -->
    <v-dialog v-model="multiPaymentDialog" max-width="620" persistent>
      <v-card class="rounded-2xl overflow-hidden dialog-card">
        <div class="dialog-header-gradient px-5 py-4 d-flex justify-space-between align-center">
          <div class="d-flex align-center">
            <div class="header-icon-box mr-3">
              <v-icon color="white">mdi-credit-card-multiple</v-icon>
            </div>
            <div>
              <h3 class="text-subtitle-1 font-weight-bold white--text mb-0">ລາຍລະອຽດການຊຳລະ (Payment Split)</h3>
              <div class="caption white--text opacity-80">ແບ່ງຊຳລະຫຼາຍວິທີໃນບິນດຽວ</div>
            </div>
          </div>
          <v-btn icon dark small class="hover-scale" @click="multiPaymentDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-card-text class="pa-5">
          <!-- Total Overview Pill -->
          <div class="split-overview-card pa-4 mb-4 rounded-xl d-flex justify-space-between align-center">
            <div>
              <div class="caption text-uppercase font-weight-bold grey--text text--darken-1">ຍອດລວມທັງໝົດ (Grand Total)</div>
              <div class="text-h5 font-weight-black primary--text mt-1">
                {{ formatCurrency(grandTotal) }}
              </div>
            </div>
            <v-chip color="primary lighten-4" text-color="primary" class="font-weight-bold">
              {{ paymentDetailsList.length }} ວິທີການຊຳລະ
            </v-chip>
          </div>

          <!-- Split Visual Proportion Bar -->
          <div v-if="paymentDetailsList.length > 0" class="mb-4">
            <div class="caption font-weight-bold grey--text text--darken-2 mb-1 d-flex justify-space-between">
              <span>ອັດຕາສ່ວນການຊຳລະ:</span>
              <span>100%</span>
            </div>
            <div class="split-proportion-bar rounded-pill overflow-hidden d-flex">
              <div
                v-for="(pay, idx) in paymentDetailsList"
                :key="'bar-' + idx"
                :style="{
                  width: pay.percentage + '%',
                  backgroundColor: getPaymentMethodHexColor(pay.code),
                }"
                class="split-bar-segment"
                :title="`${pay.code}: ${pay.percentage.toFixed(1)}%`"
              ></div>
            </div>
          </div>

          <!-- Split Payment Cards -->
          <div class="subtitle-2 font-weight-bold grey--text text--darken-2 mb-2 d-flex align-center">
            <v-icon x-small color="primary" class="mr-1">mdi-format-list-bulleted</v-icon>
            ລາຍການວິທີຊຳລະທີ່ນຳໃຊ້
          </div>

          <div class="payment-splits-container">
            <div
              v-for="(pay, idx) in paymentDetailsList"
              :key="'card-' + idx"
              class="split-method-card pa-3 mb-2 rounded-xl"
            >
              <div class="d-flex justify-space-between align-center mb-1">
                <div class="d-flex align-center">
                  <v-chip small :color="getPaymentMethodColor(pay.code)" dark class="font-weight-bold mr-2">
                    <v-icon left x-small>{{ getPaymentMethodIcon(pay.code) }}</v-icon>
                    {{ pay.code }}
                  </v-chip>
                  <span class="font-weight-bold body-2 grey--text text--darken-3">{{ pay.name || pay.code }}</span>
                </div>
                <div class="text-right">
                  <span class="font-weight-black subtitle-1 primary--text">
                    {{ numberWithCommas(pay.amount) }}
                  </span>
                  <span class="caption grey--text ml-1">{{ pay.currencyCode }}</span>
                </div>
              </div>

              <div class="d-flex justify-space-between align-center caption grey--text mt-2 pt-2 border-top-light">
                <span v-if="pay.exchangeRate && pay.exchangeRate !== 1">Rate: {{ pay.exchangeRate }}</span>
                <span v-else>ອັດຕາສ່ວນ: {{ pay.percentage.toFixed(1) }}% ຂອງຍອດລວມ</span>
                <span v-if="pay.createdAt">
                  <v-icon x-small class="mr-1">mdi-clock-outline</v-icon>
                  {{ pay.createdAt.split('T')[0] }}
                </span>
              </div>
            </div>
          </div>

          <!-- Action to switch to single payment -->
          <div v-if="isUpdate && updateAllow" class="mt-4 pt-3 border-top-light">
            <div v-if="!showSinglePaymentOverride">
              <v-btn text small color="primary" class="text-none font-weight-bold" @click="showSinglePaymentOverride = true">
                <v-icon left small>mdi-swap-horizontal</v-icon>
                ປ່ຽນເປັນຊຳລະແບບດຽວ (Switch to Single Payment)
              </v-btn>
            </div>
            <div v-else class="pa-4 rounded-xl blue-light-box mt-2">
              <div class="caption font-weight-bold primary--text mb-2 d-flex align-center">
                <v-icon small color="primary" class="mr-1">mdi-alert-circle-outline</v-icon>
                ເລືອກວິທີຊຳລະດຽວເພື່ອທົດແທນ (Override to Single Payment Method):
              </div>
              <v-autocomplete
                v-model="overrideSinglePaymentId"
                :items="paymentList"
                item-text="payment_code"
                item-value="id"
                label="Payment Method"
                outlined
                dense
                hide-details
                class="mb-3 bg-white rounded-lg"
              >
                <template #selection="{ item }">
                  <div class="d-flex align-center">
                    <v-icon x-small left :color="getPaymentMethodColor(item.payment_code)">{{ getPaymentMethodIcon(item.payment_code) }}</v-icon>
                    <span class="font-weight-bold">{{ item.payment_code }}</span>
                    <span v-if="item.payment_name" class="caption grey--text ml-1">({{ item.payment_name }})</span>
                  </div>
                </template>
              </v-autocomplete>
              <div class="d-flex justify-end gap-2">
                <v-btn text small @click="showSinglePaymentOverride = false">ຍົກເລີກ</v-btn>
                <v-btn small color="primary" elevation="2" :disabled="!overrideSinglePaymentId" @click="applySinglePaymentOverride">
                  ຢືນຢັນປ່ຽນວິທີ
                </v-btn>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pa-4 bg-light-surface justify-end border-top-light">
          <v-btn color="grey darken-2" text class="text-none font-weight-bold" @click="multiPaymentDialog = false">
            ປິດ (Close)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Error Snackbar -->
    <v-snackbar v-model="errorSnackbar" :timeout="6000" color="error" rounded="lg" top right elevation="8">
      <div class="d-flex align-center">
        <v-icon left>mdi-alert-circle</v-icon>
        <span class="font-weight-medium">{{ validateErrorMessage }}</span>
      </div>
      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="errorSnackbar = false">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <!-- TOP STICKY APP BAR (Enterprise Header) -->
    <div class="pos-sticky-header">
      <div class="header-content-inner d-flex align-center justify-space-between flex-wrap gap-3">
        <!-- Document Identifiers & Status -->
        <div class="d-flex align-center flex-wrap gap-3">
          <v-btn icon class="mr-1 close-circle-btn" title="Close / ປິດ" @click="toggleDialog">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>

          <div class="document-badge" :class="isQuotation ? 'badge-quotation' : 'badge-invoice'">
            <v-icon color="white" small class="mr-1">
              {{ isQuotation ? 'mdi-file-document-edit-outline' : 'mdi-receipt' }}
            </v-icon>
            <span>{{ isQuotation ? 'QUOTATION' : 'INVOICE' }}</span>
          </div>

          <div>
            <div class="d-flex align-center gap-2">
              <h1 class="document-number mb-0">
                #{{ transaction.id || 'NEW-ORDER' }}
              </h1>
              <v-chip
                small
                :color="orderStatusColor"
                text-color="white"
                class="font-weight-bold text-uppercase px-2 status-pill"
              >
                <v-icon left x-small>{{ orderStatusIcon }}</v-icon>
                {{ orderStatusLabel }}
              </v-chip>
            </div>
            <div class="document-meta caption grey--text text--darken-1 d-flex align-center gap-3">
              <span><v-icon x-small class="mr-1">mdi-calendar</v-icon>{{ formattedDate }}</span>
              <span v-if="transaction.user">
                <v-icon x-small class="mr-1">mdi-account</v-icon>{{ transaction.user.cus_name || transaction.user.username }}
              </span>
              <span v-if="currentTerminal && currentTerminal.name">
                <v-icon x-small class="mr-1">mdi-cash-register</v-icon>{{ currentTerminal.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- Integrated Barcode Search Input -->
        <div class="barcode-search-wrapper flex-grow-1 mx-md-4">
          <v-text-field
            ref="barcodeInput"
            v-model="barcodeSearch"
            prepend-inner-icon="mdi-barcode-scan"
            placeholder="Scan Barcode / ຍິງບາໂຄດສິນຄ້າ... [Enter]"
            outlined
            dense
            hide-details
            clearable
            class="barcode-scanner-input"
            @keyup.enter="handleBarcodeScan"
          >
            <template #append>
              <v-chip x-small color="grey lighten-3" text-color="grey darken-2" class="font-weight-bold enter-chip">
                ↵ Enter
              </v-chip>
            </template>
          </v-text-field>
        </div>

        <!-- Header Action Controls -->
        <div class="header-action-group d-flex align-center gap-2">
          <!-- Convert Quotation Button -->
          <v-btn
            v-if="isQuotation"
            color="indigo darken-1"
            dark
            depressed
            small
            :disabled="!canConvertToInvoice"
            class="action-btn text-none font-weight-bold"
            @click="postToInvoice"
          >
            <v-icon left small>mdi-file-swap</v-icon>
            Convert to Invoice
          </v-btn>

          <!-- Cancel Order Button -->
          <v-btn
            v-if="canCancel"
            color="error"
            outlined
            small
            class="action-btn text-none font-weight-bold"
            @click="cancelOrder"
          >
            <v-icon left small>mdi-close-circle-outline</v-icon>
            Cancel Order
          </v-btn>

          <!-- Direct Print Receipt (Thermal) -->
          <v-btn
            color="primary"
            dark
            depressed
            small
            :disabled="!headerId"
            :loading="isPrinting"
            class="action-btn text-none font-weight-bold"
            @click="printReceiptDirectly"
          >
            <v-icon left small>mdi-receipt-text-outline</v-icon>
            Print Receipt
          </v-btn>

          <!-- Direct Print Formal Invoice (A4) -->
          <v-btn
            color="blue-grey darken-2"
            dark
            depressed
            small
            :disabled="!headerId"
            :loading="isPrinting"
            class="action-btn text-none font-weight-bold"
            @click="printInvoiceDirectly"
          >
            <v-icon left small>mdi-printer-outline</v-icon>
            Print A4
          </v-btn>

          <!-- Primary Save / Update Button -->
          <v-btn
            color="primary"
            depressed
            small
            :disabled="!canSave"
            :loading="isloading"
            class="save-btn action-btn text-none font-weight-bold px-4"
            @click="postTransaction"
          >
            <v-icon left small>mdi-content-save-check</v-icon>
            {{ isUpdate ? 'Update Order' : 'Complete Sale' }}
          </v-btn>

          <!-- Top-Right Close Button -->
          <v-btn icon small class="ml-1" title="Close" @click="toggleDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <!-- MAIN WORKSPACE CONTENT -->
    <div class="pos-body-container">
      <v-row class="ma-0" dense>
        <!-- LEFT COLUMN: LINE ITEMS & CART (70% on Desktop) -->
        <v-col cols="12" lg="8" xl="8" class="pa-2">
          <v-card class="order-content-card rounded-2xl overflow-hidden" elevation="2">
            <!-- Table Header Toolbar -->
            <div class="table-header-toolbar pa-4 d-flex align-center justify-space-between flex-wrap gap-2">
              <div class="d-flex align-center">
                <div class="icon-circle-sm mr-2 primary lighten-5">
                  <v-icon small color="primary">mdi-basket-outline</v-icon>
                </div>
                <div>
                  <h2 class="text-subtitle-1 font-weight-bold text--primary mb-0">
                    ລາຍການສິນຄ້າ (Order Items)
                  </h2>
                  <div class="caption grey--text">
                    ທັງໝົດ <strong>{{ transaction.lines ? transaction.lines.length : 0 }}</strong> ລາຍການ ({{ totalUnitsCount }} ຊິ້ນ)
                  </div>
                </div>
              </div>

              <div class="d-flex align-center gap-2">
                <!-- Search within lines -->
                <v-text-field
                  v-if="transaction.lines && transaction.lines.length > 5"
                  v-model="lineFilterSearch"
                  placeholder="Filter items..."
                  prepend-inner-icon="mdi-magnify"
                  outlined
                  dense
                  hide-details
                  style="max-width: 180px;"
                  class="filter-input-sm"
                />

                <v-btn
                  color="primary"
                  outlined
                  small
                  :disabled="!transaction.isActive || !updateAllow"
                  class="text-none font-weight-bold add-row-btn"
                  @click="newRow"
                >
                  <v-icon left small>mdi-plus</v-icon>
                  ເພີ່ມສິນຄ້າ (Add Row)
                </v-btn>
              </div>
            </div>

            <!-- Modern High-Density Line Items Table -->
            <div class="table-scroll-wrapper">
              <table v-if="filteredLines.length > 0" class="pos-modern-table">
                <thead>
                  <tr>
                    <th class="text-center th-index">#</th>
                    <th class="text-left th-product">ສິນຄ້າ (Product)</th>
                    <th class="text-center th-qty">ຈຳນວນ (Qty)</th>
                    <th class="text-center th-unit">ຫົວໜ່ວຍ (Unit)</th>
                    <th class="text-center th-rate">ອັດຕາ (Rate)</th>
                    <th class="text-right th-price">ລາຄາ (Price)</th>
                    <th class="text-center th-disc">ສ່ວນຫຼຸດ (Disc)</th>
                    <th class="text-right th-total">ລວມ (Total)</th>
                    <th class="text-center th-action">ລຶບ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in filteredLines"
                    :key="index"
                    :class="['pos-table-row', { 'error-highlight-row': errorLineNumber === index }]"
                  >
                    <!-- Index -->
                    <td class="text-center">
                      <span class="index-pill">{{ index + 1 }}</span>
                    </td>

                    <!-- Product Selector -->
                    <td class="td-product">
                      <v-autocomplete
                        v-model="item.productId"
                        :items="productList"
                        item-text="pro_name"
                        item-value="id"
                        placeholder="Select or Search Product..."
                        outlined
                        dense
                        hide-details
                        :rules="[rules.required]"
                        class="product-picker-field"
                        @input="productChange(item)"
                      >
                        <template #selection="{ item: product }">
                          <div class="d-flex flex-column text-truncate py-1">
                            <span class="font-weight-bold body-2 text--primary text-truncate">
                              {{ product.pro_name }}
                            </span>
                            <span v-if="product.barCode" class="caption grey--text text-truncate font-mono">
                              <v-icon x-small color="grey">mdi-barcode</v-icon> {{ product.barCode }}
                            </span>
                          </div>
                        </template>
                        <template #item="{ item: product }">
                          <div class="d-flex justify-space-between align-center w-100 py-1">
                            <div class="d-flex flex-column text-truncate mr-2">
                              <span class="font-weight-medium body-2 text-truncate">{{ product.pro_name }}</span>
                              <span v-if="product.barCode" class="caption grey--text">Code: {{ product.barCode }}</span>
                            </div>
                            <v-chip x-small color="primary lighten-5" text-color="primary" class="font-weight-bold">
                              {{ numberWithCommas(product.pro_price) }}
                            </v-chip>
                          </div>
                        </template>
                      </v-autocomplete>
                    </td>

                    <!-- Quantity with Steppers -->
                    <td class="td-qty text-center">
                      <div class="qty-stepper-box d-flex align-center justify-center">
                        <button
                          type="button"
                          class="qty-step-btn"
                          :disabled="!transaction.isActive || !updateAllow || item.quantity <= 1"
                          @click="decrementQuantity(item)"
                        >
                          <v-icon x-small>mdi-minus</v-icon>
                        </button>
                        <input
                          v-model.number="item.quantity"
                          type="number"
                          class="qty-step-input font-mono font-weight-bold"
                          min="1"
                          @input="quantityChange(item)"
                        />
                        <button
                          type="button"
                          class="qty-step-btn"
                          :disabled="!transaction.isActive || !updateAllow"
                          @click="incrementQuantity(item)"
                        >
                          <v-icon x-small>mdi-plus</v-icon>
                        </button>
                      </div>
                    </td>

                    <!-- Unit Selector -->
                    <td class="td-unit text-center">
                      <v-autocomplete
                        v-model="item.unitId"
                        :items="unitList"
                        item-text="name"
                        item-value="id"
                        placeholder="Unit"
                        outlined
                        dense
                        hide-details
                        class="compact-input-field"
                        @input="unitChange(item)"
                      >
                        <template #selection="{ item: unit }">
                          <span class="font-weight-medium caption">{{ unit.name }}</span>
                        </template>
                      </v-autocomplete>
                    </td>

                    <!-- Unit Rate -->
                    <td class="td-rate text-center">
                      <v-text-field
                        v-model.number="item.unitRate"
                        type="number"
                        outlined
                        dense
                        hide-details
                        class="compact-input-field text-center font-mono"
                        @input="unitRateChange(item)"
                      />
                    </td>

                    <!-- Price (Manual Input & Pricing Option) -->
                    <td class="td-price text-right">
                      <div class="d-flex align-center justify-end w-100">
                        <v-text-field
                          v-model.number="item.price"
                          type="number"
                          placeholder="0"
                          min="0"
                          step="any"
                          outlined
                          dense
                          hide-details
                          :disabled="!transaction.isActive || !updateAllow"
                          class="compact-input-field text-right font-mono flex-grow-1"
                          style="min-width: 140px;"
                          @input="priceChange(item)"
                          @focus="$event.target.select()"
                        />
                        <v-btn
                          icon
                          x-small
                          color="amber darken-3"
                          class="ml-1 flex-shrink-0"
                          title="Click to adjust price or add discount %"
                          :disabled="!transaction.isActive || !updateAllow"
                          @click="pricingLogig(item)"
                        >
                          <v-icon small>mdi-pencil</v-icon>
                        </v-btn>
                      </div>
                    </td>

                    <!-- Line Discount -->
                    <td class="td-disc text-center">
                      <v-text-field
                        v-model.number="item.discount"
                        type="number"
                        placeholder="0"
                        outlined
                        dense
                        hide-details
                        class="compact-input-field font-mono"
                        @input="discountChange(item)"
                      />
                    </td>

                    <!-- Line Total -->
                    <td class="td-total text-right">
                      <div class="line-total-chip font-mono font-weight-bold">
                        {{ formatCurrency(item.total, item.currencyId) }}
                      </div>
                    </td>

                    <!-- Action (Delete Row) -->
                    <td class="td-action text-center">
                      <v-btn
                        icon
                        x-small
                        color="error"
                        :disabled="!transaction.isActive || !updateAllow"
                        class="delete-row-btn"
                        title="Remove item"
                        @click="deleteItem(item)"
                      >
                        <v-icon small>mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Empty Cart State -->
              <div v-else class="empty-cart-state py-12 text-center">
                <div class="empty-icon-bubble mx-auto mb-3">
                  <v-icon size="48" color="grey lighten-1">mdi-cart-off</v-icon>
                </div>
                <h3 class="text-subtitle-1 font-weight-bold grey--text text--darken-2 mb-1">
                  ຍັງບໍ່ມີລາຍການສິນຄ້າໃນບິນ (No items in this order)
                </h3>
                <p class="caption grey--text mb-4">
                  ກະລຸນາຍິງບາໂຄດສິນຄ້າ ຫຼື ຄລິກປຸ່ມ "ເພີ່ມສິນຄ້າ" ເພື່ອເລີ່ມຕົ້ນສ້າງລາຍການ
                </p>
                <div class="d-flex justify-center gap-2">
                  <v-btn
                    color="primary"
                    depressed
                    small
                    :disabled="!transaction.isActive || !updateAllow"
                    class="text-none font-weight-bold"
                    @click="newRow"
                  >
                    <v-icon left small>mdi-plus</v-icon>
                    ເພີ່ມສິນຄ້າທຳອິດ (Add First Item)
                  </v-btn>
                </div>
              </div>
            </div>

            <!-- Table Footer Quick Bar -->
            <div v-if="transaction.lines && transaction.lines.length > 0" class="table-quick-footer pa-3 px-4 d-flex justify-space-between align-center border-top-light">
              <div class="caption grey--text d-flex align-center gap-3">
                <span>ລວມທັງໝົດ: <strong class="primary--text">{{ transaction.lines.length }}</strong> ລາຍການ</span>
                <span>ຈຳນວນລວມ: <strong class="primary--text">{{ totalUnitsCount }}</strong> ຊິ້ນ</span>
              </div>
              <v-btn
                text
                x-small
                color="primary"
                :disabled="!transaction.isActive || !updateAllow"
                class="font-weight-bold text-none"
                @click="newRow"
              >
                <v-icon left x-small>mdi-plus</v-icon>
                + ເພີ່ມແຖວໃໝ່
              </v-btn>
            </div>
          </v-card>
        </v-col>

        <!-- RIGHT COLUMN: ORDER DETAILS, CUSTOMER & TOTALS (30% on Desktop) -->
        <v-col cols="12" lg="4" xl="4" class="pa-2">
          <!-- CARD 1: CUSTOMER & TRANSACTION METADATA -->
          <v-card class="sidebar-meta-card rounded-2xl overflow-hidden mb-3" elevation="2">
            <div class="card-section-header px-4 py-3 d-flex align-center justify-space-between border-bottom-light">
              <div class="d-flex align-center">
                <v-icon small color="primary" class="mr-2">mdi-account-circle-outline</v-icon>
                <span class="subtitle-2 font-weight-bold text--primary">ຂໍ້ມູນລູກຄ້າ & ເລກທີບິນ</span>
              </div>
              <v-btn text x-small color="primary" class="font-weight-bold" @click="customerDialog = true">
                ເລືອກລູກຄ້າ
              </v-btn>
            </div>

            <v-card-text class="pa-4">
              <!-- Customer Autocomplete -->
              <div class="mb-3">
                <label class="input-field-label">ລູກຄ້າ (Customer) *</label>
                <v-autocomplete
                  v-model="transaction.clientId"
                  :items="clientList"
                  item-text="company"
                  item-value="id"
                  outlined
                  dense
                  hide-details
                  required
                  :rules="[rules.required]"
                  class="rounded-lg"
                  prepend-inner-icon="mdi-account"
                />
              </div>

              <!-- Booking Date & Reference No -->
              <v-row dense class="mb-1">
                <v-col cols="6">
                  <label class="input-field-label">ວັນທີ (Date) *</label>
                  <v-text-field
                    v-model="transaction.bookingDate"
                    type="date"
                    outlined
                    dense
                    hide-details
                    required
                    :rules="[rules.required]"
                    class="rounded-lg"
                  />
                </v-col>
                <v-col cols="6">
                  <label class="input-field-label">ເລກອ້າງອີງ (Ref #)</label>
                  <v-text-field
                    v-model="transaction.referenceNo"
                    placeholder="Ref No."
                    outlined
                    dense
                    hide-details
                    class="rounded-lg"
                  />
                </v-col>
              </v-row>

              <!-- Notes / Remarks -->
              <div class="mt-2">
                <label class="input-field-label">ໝາຍເຫດ (Notes / Remarks)</label>
                <v-textarea
                  v-model="transaction.remark"
                  placeholder="Order notes, customer delivery info..."
                  outlined
                  dense
                  rows="2"
                  hide-details
                  class="rounded-lg"
                />
              </div>
            </v-card-text>
          </v-card>

          <!-- CARD 2: PAYMENT METHOD & CURRENCY -->
          <v-card class="sidebar-meta-card rounded-2xl overflow-hidden mb-3" elevation="2">
            <div class="card-section-header px-4 py-3 d-flex align-center justify-space-between border-bottom-light">
              <div class="d-flex align-center">
                <v-icon small color="primary" class="mr-2">mdi-credit-card-outline</v-icon>
                <span class="subtitle-2 font-weight-bold text--primary">ວິທີຊຳລະ & ສະກຸນເງິນ</span>
              </div>
              <v-chip x-small color="primary lighten-5" text-color="primary" class="font-weight-bold">
                {{ selectedCurrencyCode }}
              </v-chip>
            </div>

            <v-card-text class="pa-4">
              <!-- Currency & Exchange Rate -->
              <v-row dense class="mb-3">
                <v-col cols="7">
                  <label class="input-field-label">ສະກຸນເງິນ (Currency) *</label>
                  <v-autocomplete
                    v-model="transaction.currencyId"
                    :items="currencyList"
                    item-text="code"
                    item-value="id"
                    outlined
                    dense
                    hide-details
                    :rules="[rules.required]"
                    class="rounded-lg"
                    @input="currencyChange"
                  />
                </v-col>
                <v-col cols="5">
                  <label class="input-field-label">ອັດຕາແລກປ່ຽນ (Rate)</label>
                  <v-text-field
                    v-model="transaction.exchangeRate"
                    outlined
                    dense
                    hide-details
                    readonly
                    class="rounded-lg font-mono text-center grey lighten-4"
                  />
                </v-col>
              </v-row>

              <!-- Payment Method Field -->
              <div>
                <label class="input-field-label">ວິທີການຊຳລະ (Payment Method) *</label>

                <!-- Multi-Payment Card/Widget -->
                <div
                  v-if="isMultiPayment"
                  class="multi-payment-widget pa-3 rounded-xl d-flex flex-column"
                  @click="multiPaymentDialog = true"
                >
                  <div class="d-flex justify-space-between align-center mb-2">
                    <div class="d-flex align-center">
                      <v-icon small color="primary" class="mr-1">mdi-credit-card-multiple</v-icon>
                      <span class="caption font-weight-bold primary--text">
                        ແບ່ງຊຳລະ ({{ paymentDetailsList.length }} ວິທີ)
                      </span>
                    </div>
                    <v-chip x-small color="primary" dark class="font-weight-bold">
                      Split Details
                    </v-chip>
                  </div>

                  <!-- Stacked Progress Bar -->
                  <div class="split-proportion-bar rounded-pill overflow-hidden d-flex mb-2" style="height: 6px;">
                    <div
                      v-for="(pay, idx) in paymentDetailsList"
                      :key="'minibar-' + idx"
                      :style="{
                        width: pay.percentage + '%',
                        backgroundColor: getPaymentMethodHexColor(pay.code),
                      }"
                    ></div>
                  </div>

                  <!-- Payment Summary Chips -->
                  <div class="d-flex flex-wrap gap-1">
                    <v-chip
                      v-for="(p, pidx) in paymentDetailsList"
                      :key="'chip-' + pidx"
                      x-small
                      :color="getPaymentMethodColor(p.code)"
                      dark
                      class="font-weight-bold"
                    >
                      {{ p.code }}: {{ numberWithCommas(p.amount) }}
                    </v-chip>
                  </div>
                </div>

                <!-- Single Payment Selector -->
                <v-autocomplete
                  v-else
                  v-model="transaction.paymentId"
                  :items="paymentList"
                  item-text="payment_code"
                  item-value="id"
                  placeholder="Select Payment..."
                  outlined
                  dense
                  hide-details
                  required
                  :rules="[rules.required]"
                  class="rounded-lg"
                >
                  <template #selection="{ item }">
                    <div class="d-flex align-center">
                      <v-chip x-small :color="getPaymentMethodColor(item.payment_code)" dark class="mr-2 font-weight-bold">
                        <v-icon left x-small>{{ getPaymentMethodIcon(item.payment_code) }}</v-icon>
                        {{ item.payment_code }}
                      </v-chip>
                      <span class="font-weight-bold body-2">{{ item.payment_name || item.payment_code }}</span>
                    </div>
                  </template>
                  <template #item="{ item }">
                    <div class="d-flex align-center py-1">
                      <v-chip x-small :color="getPaymentMethodColor(item.payment_code)" dark class="mr-2 font-weight-bold">
                        <v-icon left x-small>{{ getPaymentMethodIcon(item.payment_code) }}</v-icon>
                        {{ item.payment_code }}
                      </v-chip>
                      <span>{{ item.payment_name || item.payment_code }}</span>
                    </div>
                  </template>
                </v-autocomplete>
              </div>
            </v-card-text>
          </v-card>

          <!-- CARD 3: FINANCIAL SUMMARY & HERO GRAND TOTAL -->
          <v-card class="financial-hero-card rounded-2xl overflow-hidden" elevation="3">
            <div class="px-4 py-3 d-flex align-center justify-space-between bg-primary-gradient white--text">
              <div class="d-flex align-center">
                <v-icon small color="white" class="mr-2">mdi-calculator-variant-outline</v-icon>
                <span class="subtitle-2 font-weight-bold">ສະຫຼຸບຍອດເງິນ (Summary)</span>
              </div>
              <v-icon small color="white" class="opacity-80">mdi-cash-multiple</v-icon>
            </div>

            <v-card-text class="pa-4">
              <!-- Subtotal Line -->
              <div class="d-flex justify-space-between align-center py-2 border-bottom-dotted">
                <span class="body-2 grey--text text--darken-2">ຍອດລວມສິນຄ້າ (Subtotal):</span>
                <span class="subtitle-2 font-weight-bold font-mono">{{ formatCurrency(subtotal) }}</span>
              </div>

              <!-- Header Discount Input Line -->
              <div class="d-flex justify-space-between align-center py-2 border-bottom-dotted">
                <div class="d-flex align-center">
                  <span class="body-2 grey--text text--darken-2 mr-2">ສ່ວນຫຼຸດບິນ (Discount):</span>
                </div>
                <div style="max-width: 140px;">
                  <v-text-field
                    v-model.number="transaction.discount"
                    type="number"
                    placeholder="0"
                    outlined
                    dense
                    hide-details
                    prefix="-"
                    :rules="[rules.positiveNumber]"
                    class="font-mono text-right rounded-lg discount-input-field"
                  />
                </div>
              </div>

              <!-- Currency Breakdown (if multi-currency lines) -->
              <div v-if="currencyBreakdown.length > 1" class="currency-split-box my-3 pa-2 rounded-lg">
                <div class="caption font-weight-bold grey--text text--darken-2 mb-1">
                  <v-icon x-small>mdi-chart-pie</v-icon> ແຍກຕາມສະກຸນເງິນ:
                </div>
                <div
                  v-for="curr in currencyBreakdown"
                  :key="curr.code"
                  class="d-flex justify-space-between align-center caption py-1"
                >
                  <span class="grey--text">{{ curr.code }}:</span>
                  <span class="font-weight-bold font-mono">
                    {{ formatCurrency(curr.amount, currencyList.find(c => c.code === curr.code)?.id) }}
                  </span>
                </div>
              </div>

              <!-- Multi-Payment Summary Breakdown in sidebar -->
              <div v-if="isMultiPayment" class="split-summary-box my-3 pa-2 rounded-lg">
                <div class="d-flex justify-space-between align-center mb-1">
                  <span class="caption font-weight-bold primary--text">
                    <v-icon x-small color="primary">mdi-credit-card-multiple</v-icon> ວິທີການຊຳລະແບ່ງຈ່າຍ:
                  </span>
                  <a class="caption primary--text text-decoration-none font-weight-bold" style="cursor: pointer;" @click="multiPaymentDialog = true">
                    ລາຍລະອຽດ
                  </a>
                </div>
                <div
                  v-for="(pay, pIdx) in paymentDetailsList"
                  :key="'sum-pay-' + pIdx"
                  class="d-flex justify-space-between align-center caption py-1"
                >
                  <span class="grey--text text--darken-2">{{ pay.code }}:</span>
                  <span class="font-weight-bold primary--text font-mono">
                    {{ numberWithCommas(pay.amount) }} {{ pay.currencyCode }}
                  </span>
                </div>
              </div>

              <!-- GRAND TOTAL HERO DISPLAY -->
              <div class="grand-total-hero-box pa-4 mt-3 rounded-2xl text-center">
                <div class="caption text-uppercase font-weight-bold tracking-wider opacity-90 white--text">
                  ຍອດລວມທັງໝົດທີ່ຕ້ອງຊຳລະ (Grand Total)
                </div>
                <div class="text-h4 font-weight-black white--text my-1 font-mono tracking-tight grand-total-text">
                  {{ formatCurrency(grandTotal) }}
                </div>
                <div class="d-flex justify-center align-center mt-2">
                  <v-chip x-small color="white" text-color="primary" class="font-weight-bold">
                    {{ selectedCurrencyCode }}
                  </v-chip>
                  <span v-if="transaction.exchangeRate && transaction.exchangeRate !== 1" class="caption white--text opacity-80 ml-2">
                    (Rate: {{ transaction.exchangeRate }})
                  </span>
                </div>
              </div>
            </v-card-text>

            <!-- Bottom Action Footer inside Sidebar -->
            <div class="pa-4 bg-light-surface border-top-light d-flex flex-column gap-2">
              <v-btn
                large
                block
                color="primary"
                depressed
                :disabled="!canSave"
                :loading="isloading"
                class="save-btn-large text-none font-weight-bold rounded-xl"
                @click="postTransaction"
              >
                <v-icon left>mdi-check-circle-outline</v-icon>
                {{ isUpdate ? 'ບັນທຶກການແກ້ໄຂ (Update Order)' : 'ສຳເລັດການຂາຍ (Save Order)' }}
              </v-btn>

              <div class="d-flex justify-space-between gap-2">
                <v-btn
                  outlined
                  small
                  color="grey darken-2"
                  class="flex-grow-1 text-none font-weight-medium rounded-lg"
                  @click="toggleDialog"
                >
                  <v-icon left small>mdi-close</v-icon>
                  ປິດ (Close)
                </v-btn>

                <v-btn
                  v-if="headerId"
                  outlined
                  small
                  color="primary"
                  :loading="isPrinting"
                  class="flex-grow-1 text-none font-weight-bold rounded-lg"
                  @click="printReceiptDirectly"
                >
                  <v-icon left small>mdi-receipt</v-icon>
                  Print Slip
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CancelTicketForm from './CancelTicketForm.vue'
import commaThousand from '@/plugins/comma-thousand'
import PricingOption from '~/components/PricingOption.vue'
import { swalSuccess } from '~/common'
import { generateInvoiceHTML, generateReceiptHTML } from '~/common/printTemplates'
import CurrencyHelper from '~/utils/currency-helper'

export default {
  name: 'EnhancedSalesFormWithPrint',
  components: {
    PricingOption,
    CancelTicketForm,
  },

  directives: {
    commaThousand,
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
      lineFilterSearch: '',
      headerError: false,
      validateErrorMessage: '',
      errorLineNumber: null,
      multiPaymentDialog: false,
      showSinglePaymentOverride: false,
      overrideSinglePaymentId: null,
      transaction: {
        isActive: true,
        exchangeRate: 1,
        lines: [],
        bookingDate: new Date().toISOString().substr(0, 10),
        discount: 0,
        referenceNo: '',
      },
      productPricingSelected: null,
      selectedLineForPricing: null,
      onlineCustomerId: null,
      barcodeSearch: '',
    }
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

    primaryColor() {
      const theme = this.$vuetify?.theme?.currentTheme || this.$vuetify?.theme?.themes?.light || {}
      return theme.primary || '#01532B'
    },

    secondaryColor() {
      const theme = this.$vuetify?.theme?.currentTheme || this.$vuetify?.theme?.themes?.light || {}
      return theme.secondary || '#337555'
    },

    lightprimaryColor() {
      const theme = this.$vuetify?.theme?.currentTheme || this.$vuetify?.theme?.themes?.light || {}
      return theme.lightprimary || '#80a995'
    },

    themeCssVariables() {
      const primary = this.primaryColor
      const secondary = this.secondaryColor
      const lightprimary = this.lightprimaryColor
      const rgb = this.hexToRgb(primary)
      return {
        '--pos-primary': primary,
        '--pos-secondary': secondary,
        '--pos-lightprimary': lightprimary,
        '--pos-primary-rgb': rgb,
      }
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

    orderStatusLabel() {
      if (!this.transaction.isActive) return 'ຍົກເລີກແລ້ວ (Cancelled)'
      if (this.isQuotation) return 'ໃບສະເໜີລາຄາ (Quotation)'
      if (this.isUpdate) return 'ສຳເລັດແລ້ວ (Completed)'
      return 'ຮ່າງໃໝ່ (New Draft)'
    },

    orderStatusColor() {
      if (!this.transaction.isActive) return 'error'
      if (this.isQuotation) return 'indigo'
      if (this.isUpdate) return 'success'
      return 'amber darken-2'
    },

    orderStatusIcon() {
      if (!this.transaction.isActive) return 'mdi-close-circle'
      if (this.isQuotation) return 'mdi-file-document-outline'
      if (this.isUpdate) return 'mdi-check-circle'
      return 'mdi-clock-outline'
    },

    totalUnitsCount() {
      if (!this.transaction?.lines) return 0
      return this.transaction.lines.reduce(
        (sum, item) => sum + (parseFloat(item.quantity) || 0),
        0
      )
    },

    filteredLines() {
      if (!this.transaction.lines) return []
      if (!this.lineFilterSearch) return this.transaction.lines

      const query = this.lineFilterSearch.toLowerCase().trim()
      return this.transaction.lines.filter((line) => {
        const prod = this.productList.find((p) => p.id === line.productId)
        if (!prod) return false
        return (
          prod.pro_name?.toLowerCase().includes(query) ||
          prod.barCode?.toLowerCase().includes(query)
        )
      })
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
      if (!this.transaction.lines) return 0

      const localCurrency = this.currencyList.find((c) => c.isLocalCCY) || {
        id: 1,
        rate: 1,
      }
      const headerCurrency =
        this.currencyList.find((c) => c.id === this.transaction.currencyId) ||
        localCurrency

      return this.transaction.lines.reduce((total, item) => {
        const lineCurrency =
          this.currencyList.find((c) => c.id === item.currencyId) || localCurrency
        const lineTotal = item.total || 0

        const localAmount = CurrencyHelper.convertToLocal(
          lineTotal,
          lineCurrency,
          localCurrency
        )
        const headerAmount = CurrencyHelper.convertFromLocal(
          localAmount,
          headerCurrency,
          localCurrency
        )

        return total + headerAmount
      }, 0)
    },

    headerDiscount() {
      const discount = parseFloat(this.transaction.discount || 0)
      return isNaN(discount) ? 0 : discount
    },

    grandTotal() {
      return Math.max(0, this.subtotal - this.headerDiscount)
    },

    currencyBreakdown() {
      const breakdown = {}
      if (!this.transaction.lines) return []

      this.transaction.lines.forEach((item) => {
        const currency = this.currencyList.find((c) => c.id === item.currencyId)
        const code = currency?.code || '???'

        if (!breakdown[code]) {
          breakdown[code] = { code, symbol: this.getSymbol(code), amount: 0 }
        }
        breakdown[code].amount += item.total || 0
      })

      return Object.values(breakdown)
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

    isMultiPayment() {
      if (this.transaction?.payments && Array.isArray(this.transaction.payments)) {
        return this.transaction.payments.length > 1
      }
      return false
    },

    paymentDetailsList() {
      if (!this.transaction?.payments || !Array.isArray(this.transaction.payments)) {
        return []
      }
      const total = this.grandTotal || 1
      return this.transaction.payments.map((p) => {
        const payId = p.paymentId || p.payment_id || p.id
        const payObj = this.paymentList.find((x) => x.id === payId) || {}
        const currObj =
          this.currencyList.find((c) => c.id === (p.currencyId || p.currency_id)) ||
          {}
        const amount = parseFloat(p.amount || p.total || 0)
        const percentage = total > 0 ? (amount / total) * 100 : 0
        return {
          id: payId,
          code: payObj.payment_code || p.payment_code || p.code || 'SPLIT',
          name: payObj.payment_name || p.payment_name || '',
          amount,
          currencyCode: currObj.code || p.currency_code || this.selectedCurrencyCode,
          exchangeRate: p.exchangeRate || p.exchange_rate || 1,
          percentage: Math.min(100, Math.max(0, percentage)),
          createdAt: p.createdAt || p.created_at || '',
        }
      })
    },

    multiPaymentSummaryText() {
      if (!this.paymentDetailsList.length) return 'Multi-Payment'
      return this.paymentDetailsList.map((p) => p.code).join(' + ')
    },
  },

  async created() {
    await this.initializeForm()
  },

  methods: {
    // === INITIALIZATION ===
    async initializeForm() {
      this.isloading = true
      try {
        if (!this.findAllCurrency || this.findAllCurrency.length === 0) {
          try {
            const response = await this.$axios.get('api/currency/findAll')
            let data = response.data?.data ?? response.data
            if (Array.isArray(data)) {
              data = data.filter((c) => c.isActive === true || c.isActive === 1)
            }
            await this.$store.dispatch('initCurrency', data)
          } catch (error) {
            console.error('Failed to load currencies in Order Detail:', error)
          }
        }
        if (
          !this.$store.getters.findAllCompany ||
          this.$store.getters.findAllCompany.length === 0
        ) {
          try {
            const response = await this.$axios.get('api/public/company/findAll')
            const data = response.data?.data ?? response.data
            await this.$store.dispatch('initCompany', data)
          } catch (error) {
            console.error('Failed to load company data in Order Detail:', error)
          }
        }

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
        clientId: 1,
        paymentId: 1,
        currencyId: 1,
        discount: 0,
        referenceNo: '',
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
        const response = await this.$axios.get(`api/sale/find/${this.headerId}`)
        const invoiceData = response.data
        const companyData = this.$store.getters.findAllCompany[0] || {}

        let htmlContent = ''
        if (type === 'receipt') {
          htmlContent = generateReceiptHTML(
            invoiceData,
            companyData,
            this.findAllCurrency,
            '80mm'
          )
        } else {
          htmlContent = generateInvoiceHTML(
            invoiceData,
            companyData,
            this.findAllCurrency
          )
        }

        this.openPrintWindow(htmlContent, type)
      } catch (error) {
        console.error('Error fetching data:', error)
        this.showError('Failed to load data for printing')
      } finally {
        this.isPrinting = false
      }
    },

    openPrintWindow(htmlContent, type) {
      if (
        type === 'receipt' &&
        window.posApi &&
        typeof window.posApi.printReceipt === 'function'
      ) {
        const printers = this.$store.state.printers || []
        const printer =
          printers.find((p) => p.type === 'ticket' && (p.is_active || p.isActive)) ||
          printers.find((p) => p.is_active || p.isActive)
        const printerName = printer?.printerName || printer?.printer_name || ''
        window.posApi.printReceipt({
          printerName,
          html: htmlContent,
          width: '80mm',
        })
        return
      }

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

        setTimeout(() => {
          if (printWindow && !printWindow.closed) {
            try {
              printWindow.print()
            } catch (e) {}
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

    // === BARCODE SCANNING ===
    handleBarcodeScan() {
      if (!this.barcodeSearch) return

      try {
        const barcode = this.barcodeSearch.trim()
        const product = this.productList.find(
          (p) => p.barCode === barcode || p.pro_code === barcode
        )

        if (product) {
          this.addProductToLines(product)
          this.barcodeSearch = ''
          this.$nextTick(() => {
            if (this.$refs.barcodeInput) {
              this.$refs.barcodeInput.focus()
            }
          })
        } else {
          this.showError(`Product with barcode "${barcode}" not found`)
        }
      } catch (error) {
        console.error('Barcode scan error:', error)
      }
    },

    addProductToLines(product) {
      const existingLine = this.transaction.lines.find(
        (l) => l.productId === product.id
      )

      if (existingLine) {
        existingLine.quantity = (parseFloat(existingLine.quantity) || 0) + 1
        this.calculateLineTotal(existingLine)
        swalSuccess(this.$swal, 'Updated', `${product.pro_name} quantity increased`)
      } else {
        const newLine = {
          quantity: 1,
          unitRate: 1,
          price: 0,
          discount: 0,
          total: 0,
          isActive: true,
          productId: product.id,
          unitId: null,
        }
        this.transaction.lines.push(newLine)
        this.productChange(newLine)
        swalSuccess(this.$swal, 'Added', `${product.pro_name} added to list`)
      }
    },

    incrementQuantity(item) {
      if (!this.transaction.isActive || !this.updateAllow) return
      const current = parseFloat(item.quantity) || 0
      item.quantity = current + 1
      this.quantityChange(item)
    },

    decrementQuantity(item) {
      if (!this.transaction.isActive || !this.updateAllow) return
      const current = parseFloat(item.quantity) || 0
      if (current > 1) {
        item.quantity = current - 1
        this.quantityChange(item)
      }
    },

    // === PRODUCT & LINE ITEM MANAGEMENT ===
    productChange(item) {
      const product = this.productList.find((el) => el.id === item.productId)
      if (!product) return

      const currency = this.findCurrency(product.saleCurrencyId)
      this.$set(item, 'price', product.pro_price || 0)
      this.$set(item, 'currencyId', product.saleCurrencyId || 1)
      this.$set(item, 'exchangeRate', currency?.rate || 1)

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

    priceChange(item) {
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
      if (!this.transaction.paymentId && !this.isMultiPayment) {
        errors.push('Payment method is required')
      }
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
        if (
          !this.transaction.paymentId &&
          this.transaction.payments &&
          this.transaction.payments.length === 1
        ) {
          this.transaction.paymentId =
            this.transaction.payments[0].paymentId ||
            this.transaction.payments[0].payment_id
        }
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
        const product = this.productList.find((el) => el.id === line.productId)
        if (product) {
          if (!line.currencyId) {
            const currency = this.findCurrency(product.saleCurrencyId)
            this.$set(line, 'currencyId', product.saleCurrencyId || 1)
            this.$set(line, 'exchangeRate', currency?.rate || 1)
          }
        }
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
      if (!this.isMultiPayment && this.transaction.paymentId) {
        if (
          this.transaction.payments &&
          Array.isArray(this.transaction.payments) &&
          this.transaction.payments.length > 0
        ) {
          this.transaction.payments = [
            {
              ...this.transaction.payments[0],
              paymentId: this.transaction.paymentId,
              amount: this.grandTotal,
            },
          ]
        }
      }
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
        const outOfStockProductId =
          typeof errorData === 'string' ? errorData.split('#')[1] : null

        if (outOfStockProductId) {
          const product = this.productList.find(
            (p) => String(p.id) === String(outOfStockProductId)
          )
          this.showError(
            `Insufficient stock for: ${product?.pro_name || 'Unknown'}`
          )
          this.errorLineNumber = this.transaction.lines.findIndex(
            (line) => String(line.productId) === String(outOfStockProductId)
          )
        } else {
          this.showError(`Failed to save transaction ${error}`, error)
        }
      } else {
        this.showError(`Failed to save transaction ${error}`, error)
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
      this.selectedLineForPricing = item
      this.productPricingSelected = item.productId
      this.pricingDialogKey += 1
      this.pricingDialog = true
    },

    updatePricing(priceInfo) {
      let line = this.selectedLineForPricing
      if (!line) {
        const index = this.transaction.lines.findIndex(
          (l) => l.productId === this.productPricingSelected
        )
        if (index >= 0) line = this.transaction.lines[index]
      }
      if (!line) return

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
    formatCurrency(amount, currencyId = null) {
      const num = parseFloat(amount) || 0

      let code = this.selectedCurrencyCode
      if (currencyId) {
        const currency = this.currencyList.find((c) => c.id === currencyId)
        if (currency) code = currency.code
      }

      const symbols = {
        LAK: '₭',
        THB: '฿',
        USD: '$',
      }

      const symbol = symbols[code] || code
      const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: code === 'LAK' ? 0 : 2,
        maximumFractionDigits: 2,
      }).format(num)

      return `${formatted} ${symbol}`
    },

    getSymbol(code) {
      const symbols = { LAK: '₭', THB: '฿', USD: '$' }
      return symbols[code] || code
    },

    getFormatNum(val) {
      return new Intl.NumberFormat().format(val || 0)
    },

    showError(message, error = null) {
      this.validateErrorMessage = message
      this.errorSnackbar = true
      if (error) console.error('Error details:', error)
    },

    applySinglePaymentOverride() {
      if (!this.overrideSinglePaymentId) return
      this.transaction.paymentId = this.overrideSinglePaymentId
      this.transaction.payments = [
        {
          paymentId: this.overrideSinglePaymentId,
          amount: this.grandTotal,
          currencyId: this.transaction.currencyId,
          exchangeRate: this.transaction.exchangeRate || 1,
        },
      ]
      this.showSinglePaymentOverride = false
      this.multiPaymentDialog = false
      swalSuccess(
        this.$swal,
        'Updated',
        'Payment method switched to single payment'
      )
    },

    getPaymentMethodColor(paymentCode) {
      if (!paymentCode) return 'grey'
      const colorMap = {
        CASH: 'green darken-1',
        QR: 'purple darken-1',
        TRANSFER: 'blue darken-2',
        TRANSFER_BCEL: 'blue darken-2',
        BCEL: 'blue darken-2',
        COD: 'orange darken-2',
        CREDIT: 'red darken-1',
        CARD: 'indigo darken-1',
        BANK: 'teal darken-2',
        MOBILE: 'pink darken-1',
        MULTI: 'teal darken-2',
      }

      if (colorMap[paymentCode]) {
        return colorMap[paymentCode]
      }

      const code = paymentCode.toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'green darken-1'
      if (code.includes('QR') || code.includes('SCAN')) return 'purple darken-1'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'blue darken-2'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'indigo darken-1'
      if (code.includes('COD') || code.includes('DELIVERY')) return 'orange darken-2'
      if (code.includes('MOBILE') || code.includes('PHONE')) return 'pink darken-1'

      return 'primary'
    },

    hexToRgb(hex) {
      if (!hex || typeof hex !== 'string') return '1, 83, 43'
      const cleanHex = hex.replace('#', '')
      if (cleanHex.length === 3) {
        const r = parseInt(cleanHex[0] + cleanHex[0], 16)
        const g = parseInt(cleanHex[1] + cleanHex[1], 16)
        const b = parseInt(cleanHex[2] + cleanHex[2], 16)
        return `${r}, ${g}, ${b}`
      }
      if (cleanHex.length === 6) {
        const r = parseInt(cleanHex.substring(0, 2), 16)
        const g = parseInt(cleanHex.substring(2, 4), 16)
        const b = parseInt(cleanHex.substring(4, 6), 16)
        return `${r}, ${g}, ${b}`
      }
      return '1, 83, 43'
    },

    getPaymentMethodHexColor(paymentCode) {
      if (!paymentCode) return '#94a3b8'
      const code = paymentCode.toUpperCase()
      if (code.includes('CASH')) return '#16a34a'
      if (code.includes('BCEL') || code.includes('TRANSFER')) return '#2563eb'
      if (code.includes('QR')) return '#9333ea'
      if (code.includes('CARD') || code.includes('CREDIT')) return '#4f46e5'
      if (code.includes('COD')) return '#ea580c'
      return this.primaryColor || '#01532b'
    },

    getPaymentMethodIcon(paymentCode) {
      if (!paymentCode) return 'mdi-help-circle'
      const iconMap = {
        CASH: 'mdi-cash',
        QR: 'mdi-qrcode',
        TRANSFER: 'mdi-bank-transfer',
        TRANSFER_BCEL: 'mdi-bank-transfer',
        BCEL: 'mdi-bank',
        COD: 'mdi-truck-delivery',
        CREDIT: 'mdi-credit-card-outline',
        CARD: 'mdi-credit-card',
        BANK: 'mdi-bank',
        MOBILE: 'mdi-cellphone',
        WALLET: 'mdi-wallet',
        MULTI: 'mdi-credit-card-multiple',
      }

      if (iconMap[paymentCode]) {
        return iconMap[paymentCode]
      }

      const code = paymentCode.toUpperCase()
      if (code.includes('CASH') || code.includes('MONEY')) return 'mdi-cash'
      if (code.includes('QR') || code.includes('SCAN')) return 'mdi-qrcode'
      if (code.includes('TRANSFER') || code.includes('BANK') || code.includes('BCEL')) return 'mdi-bank-transfer'
      if (code.includes('CARD') || code.includes('CREDIT')) return 'mdi-credit-card'
      if (code.includes('COD') || code.includes('DELIVERY')) return 'mdi-truck-delivery'
      if (code.includes('MOBILE') || code.includes('PHONE')) return 'mdi-cellphone'
      if (code.includes('WALLET')) return 'mdi-wallet'
      if (code.includes('MULTI')) return 'mdi-credit-card-multiple'

      return 'mdi-cash-multiple'
    },
numberWithCommas(value) {
  return (Math.round(Number(value) || 0)).toLocaleString('en-US')
},
    // numberWithCommas(val) {
    //   if (val === null || val === undefined || isNaN(val)) return '0'
    //   return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    // },
  },
}
</script>

<style>
/* Global & Vuetify Dialog portal font overrides for Noto Sans Lao */
.v-application .caption,
.v-application .text-caption,
.caption,
.text-caption,
.dialog-card,
.dialog-card *,
.dialog-card .caption,
.loading-card,
.loading-card * {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
  letter-spacing: normal !important;
}

.v-application .dialog-card .subtitle-1,
.v-application .dialog-card .subtitle-2,
.v-application .dialog-card .body-1,
.v-application .dialog-card .body-2 {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}
</style>

<style scoped>
/* Master Container & Fonts - Strict Noto Sans Lao for Lao typography */
.pos-order-wrapper,
.pos-order-wrapper * {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', -apple-system, sans-serif;
}

.pos-order-wrapper {
  background-color: #f1f5f9;
  min-height: 100vh;
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
  color: #1e293b;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Specific fix for Vuetify .caption class */
.caption,
.text-caption,
.pos-order-wrapper .caption,
.dialog-card .caption,
::v-deep .caption,
::v-deep .text-caption {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
  letter-spacing: normal !important;
}

.pos-order-wrapper .subtitle-1,
.pos-order-wrapper .subtitle-2,
.pos-order-wrapper .body-1,
.pos-order-wrapper .body-2,
.pos-order-wrapper .text-subtitle-1,
.pos-order-wrapper .text-subtitle-2,
.pos-order-wrapper .text-h4,
.pos-order-wrapper .text-h5,
.pos-order-wrapper .text-h6,
.pos-order-wrapper h1,
.pos-order-wrapper h2,
.pos-order-wrapper h3,
.pos-order-wrapper p,
.pos-order-wrapper span,
.pos-order-wrapper label,
.pos-order-wrapper input,
.pos-order-wrapper textarea {
  font-family: 'Noto Sans Lao', 'noto sans lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.font-mono {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace, 'Noto Sans Lao' !important;
}

.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }

/* Sticky Top Enterprise App Bar */
.pos-sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
  padding: 10px 16px;
}

.header-content-inner {
  max-width: 1720px;
  margin: 0 auto;
}

.close-circle-btn {
  background: #f1f5f9 !important;
  color: #475569 !important;
  transition: all 0.2s ease;
}

.close-circle-btn:hover {
  background: #e2e8f0 !important;
  color: #0f172a !important;
  transform: translateX(-2px);
}

.document-badge {
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
}

.badge-invoice {
  background: linear-gradient(135deg, var(--pos-primary, #01532b) 0%, var(--pos-secondary, #059669) 100%);
  color: #ffffff;
}

.badge-quotation {
  background: linear-gradient(135deg, #4338ca 0%, #6366f1 100%);
  color: #ffffff;
}

.document-number {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
}

.status-pill {
  font-size: 0.7rem;
  letter-spacing: 0.02em;
}

/* Barcode Scanner Input Box */
.barcode-search-wrapper {
  max-width: 480px;
  min-width: 260px;
}

.barcode-scanner-input >>> .v-input__slot {
  background-color: #f8fafc !important;
  border-radius: 24px !important;
  border: 1.5px solid #cbd5e1 !important;
  transition: all 0.25s ease !important;
  min-height: 40px !important;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);
}

.barcode-scanner-input >>> .v-input__slot:focus-within {
  border-color: var(--pos-primary, #01532b) !important;
  background-color: #ffffff !important;
  box-shadow: 0 0 0 3px rgba(var(--pos-primary-rgb, 1, 83, 43), 0.18) !important;
}

.barcode-scanner-input >>> input {
  font-size: 0.88rem !important;
  font-weight: 600 !important;
}

.enter-chip {
  letter-spacing: 0.02em;
}

/* Action Buttons */
.action-btn {
  border-radius: 8px !important;
  transition: all 0.2s ease !important;
}

.action-btn:hover {
  transform: translateY(-1px);
}

.save-btn {
  background: linear-gradient(135deg, var(--pos-primary, #01532b) 0%, var(--pos-secondary, #047857) 100%) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 10px rgba(var(--pos-primary-rgb, 1, 83, 43), 0.25) !important;
}

/* Main Body Layout */
.pos-body-container {
  max-width: 1720px;
  margin: 0 auto;
  width: 100%;
  padding: 12px 8px;
  flex: 1;
}

.order-content-card,
.sidebar-meta-card,
.financial-hero-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04) !important;
}

/* Toolbar & Icons */
.table-header-toolbar {
  background: #ffffff;
  border-bottom: 1px solid #f1f5f9;
}

.icon-circle-sm {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-section-header {
  background: #f8fafc;
}

.add-row-btn {
  border-radius: 8px !important;
}

/* Table Design */
.table-scroll-wrapper {
  overflow-x: auto;
  width: 100%;
}

.pos-modern-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.875rem;
}

.pos-modern-table th {
  background: #f8fafc;
  color: #475569;
  font-weight: 700;
  font-size: 0.76rem;
  letter-spacing: 0.03em;
  padding: 10px 12px;
  border-bottom: 1px solid #e2e8f0;
  white-space: nowrap;
}

.pos-modern-table td {
  padding: 8px 10px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: middle;
}

.pos-table-row {
  transition: background-color 0.15s ease;
}

.pos-table-row:hover {
  background-color: #f8fafc;
}

.error-highlight-row {
  background-color: #fef2f2 !important;
  border-left: 3px solid #ef4444;
}

/* Table Columns Widths */
.th-index { width: 44px; }
.th-product { min-width: 260px; }
.th-qty { width: 130px; }
.th-unit { width: 110px; }
.th-rate { width: 80px; }
.th-price { width: 195px; min-width: 195px; }
.td-price { width: 195px; min-width: 195px; }
.th-disc { width: 95px; }
.th-total { width: 195px; min-width: 195px; }
.td-total { width: 195px; min-width: 195px; }
.th-action { width: 48px; }

.index-pill {
  display: inline-block;
  min-width: 22px;
  height: 22px;
  line-height: 22px;
  border-radius: 50%;
  background: #f1f5f9;
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 700;
}

/* Product Picker */
.product-picker-field >>> .v-input__slot {
  min-height: 38px !important;
  background-color: #f8fafc !important;
  border-radius: 8px !important;
}

/* Quantity Stepper */
.qty-stepper-box {
  background: #f1f5f9;
  border-radius: 8px;
  padding: 2px;
  border: 1px solid #e2e8f0;
}

.qty-step-btn {
  width: 28px;
  height: 28px;
  background: #ffffff;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #334155;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.15s ease;
}

.qty-step-btn:hover:not(:disabled) {
  background: var(--pos-primary, #01532b);
  color: #ffffff;
}

.qty-step-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.qty-step-input {
  width: 44px;
  border: none;
  background: transparent;
  text-align: center;
  font-size: 0.95rem;
  color: #0f172a;
  outline: none;
}

.compact-input-field >>> .v-input__slot {
  min-height: 36px !important;
  border-radius: 8px !important;
  padding: 0 8px !important;
}

.compact-input-field.text-right >>> input {
  text-align: right;
}

.compact-input-field.text-center >>> input {
  text-align: center;
}

.compact-input-field >>> input[type='number']::-webkit-outer-spin-button,
.compact-input-field >>> input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.compact-input-field >>> input[type='number'] {
  -moz-appearance: textfield;
}

/* Pricing Badge */
.pricing-badge-btn {
  background: #fffbeb;
  border: 1px solid #fde68a;
  color: #b45309;
  padding: 6px 10px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.pricing-badge-btn:hover {
  background: #fef3c7;
  border-color: #f59e0b;
  transform: scale(1.02);
}

.line-total-chip {
  color: var(--pos-primary, #01532b);
  font-size: 0.98rem;
  background: rgba(var(--pos-primary-rgb, 1, 83, 43), 0.08);
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid rgba(var(--pos-primary-rgb, 1, 83, 43), 0.2);
  display: inline-block;
  white-space: nowrap;
}

.delete-row-btn {
  transition: transform 0.15s ease;
}

.delete-row-btn:hover {
  transform: scale(1.15);
}

/* Empty State */
.empty-icon-bubble {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cbd5e1;
}

/* Sidebar Styling */
.input-field-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: #475569;
  margin-bottom: 4px;
  letter-spacing: 0.02em;
}

.border-bottom-light {
  border-bottom: 1px solid #f1f5f9;
}

.border-bottom-dotted {
  border-bottom: 1px dashed #e2e8f0;
}

.border-top-light {
  border-top: 1px solid #f1f5f9;
}

.bg-light-surface {
  background-color: #f8fafc;
}

.bg-primary-gradient {
  background: linear-gradient(135deg, var(--pos-primary, #01532b) 0%, var(--pos-secondary, #047857) 100%);
}

/* Multi-Payment Widget */
.multi-payment-widget {
  background: rgba(var(--pos-primary-rgb, 1, 83, 43), 0.05);
  border: 1.5px solid rgba(var(--pos-primary-rgb, 1, 83, 43), 0.3);
  cursor: pointer;
  transition: all 0.2s ease;
}

.multi-payment-widget:hover {
  background: rgba(var(--pos-primary-rgb, 1, 83, 43), 0.1);
  border-color: var(--pos-primary, #01532b);
  box-shadow: 0 2px 8px rgba(var(--pos-primary-rgb, 1, 83, 43), 0.2);
}

.split-proportion-bar {
  background: #e2e8f0;
  height: 8px;
}

.split-bar-segment {
  height: 100%;
  transition: width 0.3s ease;
}

/* Grand Total Hero Box */
.grand-total-hero-box {
  background: linear-gradient(135deg, var(--pos-primary, #01532b) 0%, var(--pos-secondary, #064e3b) 100%);
  box-shadow: 0 10px 25px -5px rgba(var(--pos-primary-rgb, 1, 83, 43), 0.4);
}

.grand-total-text {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.save-btn-large {
  background: linear-gradient(135deg, var(--pos-primary, #01532b) 0%, var(--pos-secondary, #059669) 100%) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(var(--pos-primary-rgb, 1, 83, 43), 0.3) !important;
}

.currency-split-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.split-summary-box {
  background: rgba(var(--pos-primary-rgb, 1, 83, 43), 0.06);
  border: 1px solid rgba(var(--pos-primary-rgb, 1, 83, 43), 0.2);
}

.dialog-card {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
}

.dialog-header-gradient {
  background: linear-gradient(135deg, var(--pos-primary, #01532b) 0%, var(--pos-secondary, #047857) 100%);
}

.header-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.split-overview-card {
  background: rgba(var(--pos-primary-rgb, 1, 83, 43), 0.06);
  border: 1px solid rgba(var(--pos-primary-rgb, 1, 83, 43), 0.15);
}

.split-method-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.blue-light-box {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
}

/* Animations */
.pos-table-row {
  animation: fadeInRow 0.2s ease-out;
}

@keyframes fadeInRow {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Styles */
@media (max-width: 960px) {
  .pos-sticky-header {
    padding: 8px 12px;
  }
  .barcode-search-wrapper {
    order: 3;
    max-width: 100%;
    width: 100%;
    margin-top: 6px;
  }
  .header-action-group {
    flex-wrap: wrap;
  }
  .pos-body-container {
    padding: 6px;
  }
}
</style>