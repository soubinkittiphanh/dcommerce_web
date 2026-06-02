<template>
  <div>
    <!-- Print Dialog - MUST be at the TOP level, separate from main modal -->
    <client-only>
      <ARReceivePrinter
        :visible="showPrintDialog"
        :receipt-data="selectedReceiptForPrint"
        :payment-methods="paymentMethods"
        :currencies="currencies"
        :transaction-codes="transactionCodes"
        :gl-accounts="glAccounts"
        :invoices="invoices"
        @close="closePrintDialog"
      />
    </client-only>

    <!-- Main Receipt Modal Dialog -->
    <v-dialog
      :value="visible"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
      persistent
    >
      <v-card class="d-flex flex-column receipt-modal-card">
        <!-- Dialog Header -->
        <v-card-title class="modal-header px-6 py-4 grey lighten-5 border-bottom">
          <div class="d-flex align-center w-100">
            <v-avatar color="primary lighten-5" size="40" class="mr-3">
              <v-icon color="primary">mdi-cash-register</v-icon>
            </v-avatar>
            <div class="flex-grow-1">
              <h4 class="text-h6 font-weight-bold grey--text text--darken-3 mb-0">
                {{ isEdit ? 'ແກ້ໄຂການຮັບຊຳລະ (Edit AR Receipt)' : 'ເພີ່ມການຮັບຊຳລະໃໝ່ (Create New AR Receipt)' }}
              </h4>
              <div class="text-caption grey--text text--darken-1 mt-0">
                {{ isEdit ? `Receipt #: ${form.receiptNumber}` : 'Drafting new receipt' }}
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
            <span class="text-body-1 grey--text text--darken-1">ກຳລັງໂຫຼດຂໍ້ມູນ... (Loading...)</span>
          </div>

          <!-- Single Form View -->
          <div v-else class="receipt-form">
            <form @submit.prevent="handleSubmit">
              <!-- Receipt Information Section Card -->
              <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
                <v-card-title class="text-subtitle-1 font-weight-bold primary--text pa-4 pb-2">
                  <v-icon left color="primary">mdi-information-outline</v-icon>
                  ຂໍ້ມູນການຮັບຊຳລະ (Receipt Information)
                </v-card-title>

                <v-card-text class="pa-4">
                  <v-row dense>
                    <!-- Booking Date -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.bookingDate"
                        type="date"
                        label="ວັນທີບັນທຶກ (Booking Date)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.bookingDate"
                        required
                      />
                    </v-col>

                    <!-- Receipt Number -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.receiptNumber"
                        type="text"
                        label="ເລກທີໃບຮັບ (Receipt Number)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.receiptNumber"
                        placeholder="RCP-2025-001"
                        :readonly="isEdit"
                        required
                      />
                    </v-col>

                    <!-- Payment Method -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-autocomplete
                        v-model="form.paymentId"
                        :items="paymentMethods"
                        item-value="id"
                        item-text="payment_name"
                        label="ວິທີການຊຳລະ (Payment Method)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.paymentId"
                        clearable
                        placeholder="ເລືອກວິທີການຊຳລະ"
                        required
                      >
                        <template v-slot:item="{ item }">
                          <v-list-item-content>
                            <v-list-item-title>
                              {{ item.payment_name }}
                            </v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-autocomplete>
                    </v-col>

                    <!-- Currency -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-autocomplete
                        v-model="form.currencyId"
                        :items="currencies"
                        item-value="id"
                        item-text="name"
                        label="ສະກຸນເງິນ (Currency)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.currencyId"
                        clearable
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
                    </v-col>

                    <!-- Exchange Rate -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.exchangeRate"
                        type="number"
                        step="0.0001"
                        min="0"
                        label="ອັດຕາແລກປ່ຽນ (Exchange Rate)"
                        outlined
                        dense
                        hide-details="auto"
                        placeholder="1.0000"
                      />
                    </v-col>

                    <!-- Reference Number -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.referenceNumber"
                        type="text"
                        label="ເລກອ້າງອີງ (Reference Number)"
                        outlined
                        dense
                        hide-details="auto"
                        placeholder="ເລກອ້າງອີງ..."
                      />
                    </v-col>

                    <!-- Received Date -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.receivedDate"
                        type="date"
                        label="ວັນທີຮັບເງິນ (Received Date)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.receivedDate"
                        required
                      />
                    </v-col>

                    <!-- Invoice Selector (Optional) -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <div class="d-flex align-center">
                        <v-autocomplete
                          v-model="form.invoiceHeaderId"
                          :items="invoices"
                          item-value="id"
                          item-text="invoiceNumber"
                          label="ໃບແຈ້ງໜີ້ (Invoice - Optional)"
                          outlined
                          dense
                          hide-details="auto"
                          clearable
                          placeholder="ເລືອກໃບແຈ້ງໜີ້ (ຖ້າມີ)"
                          class="flex-grow-1 mr-2"
                          @change="onInvoiceChange"
                        >
                          <template v-slot:item="{ item }">
                            <v-list-item-content class="py-1">
                              <v-list-item-title class="font-weight-bold text-body-2">
                                {{ item.invoiceNumber }}
                              </v-list-item-title>
                              <v-list-item-subtitle class="text-caption">
                                {{ item.customer ? item.customer.name : 'N/A' }} | {{ formatCurrency(item.totalAmount) }}
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                          <template v-slot:selection="{ item }">
                            {{ item.invoiceNumber }} - {{ item.customer ? item.customer.name : 'N/A' }}
                          </template>
                        </v-autocomplete>
                        <v-btn
                          color="primary"
                          outlined
                          depressed
                          height="40"
                          @click="openInvoiceBrowser"
                          title="ເລືອກໃບແຈ້ງໜີ້"
                        >
                          <v-icon left>mdi-magnify</v-icon>
                          ຄົ້ນຫາ
                        </v-btn>
                      </div>
                    </v-col>

                    <!-- Notes -->
                    <v-col cols="12" :md="isEdit ? 6 : 12">
                      <v-textarea
                        v-model="form.notes"
                        label="ໝາຍເຫດ (Notes)"
                        outlined
                        dense
                        rows="2"
                        auto-grow
                        hide-details="auto"
                        placeholder="ໝາຍເຫດກ່ຽວກັບການຮັບຊຳລະ..."
                      />
                    </v-col>

                    <!-- Reason for editing (only show when editing) -->
                    <v-col v-if="isEdit" cols="12" md="6">
                      <v-text-field
                        v-model="form.reason"
                        label="ເຫດຜົນຂອງການແກ້ໄຂ (Reason for Edit)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.reason"
                        placeholder="ລະບຸເຫດຜົນຂອງການແກ້ໄຂ..."
                        required
                      />
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <!-- Payment Allocation Section Card -->
              <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
                <v-card-title class="pa-4 d-flex justify-space-between align-center border-bottom grey lighten-5">
                  <div class="d-flex align-center">
                    <v-icon left color="success">mdi-format-list-bulleted</v-icon>
                    <span class="text-subtitle-1 font-weight-bold grey--text text--darken-3">
                      ການແບ່ງປັນຊຳລະ (Payment Allocation)
                    </span>
                    <v-chip v-if="allocationLines.length > 0" color="success" x-small class="ml-2 font-weight-bold white--text">
                      {{ allocationLines.length }} ລາຍການ
                    </v-chip>
                  </div>

                  <div class="d-flex align-center">
                    <v-btn
                      color="primary"
                      small
                      depressed
                      class="mr-2 px-3 rounded-lg"
                      @click="addManualLine"
                    >
                      <v-icon left small>mdi-plus</v-icon>
                      ເພີ່ມລາຍການ
                    </v-btn>

                    <!-- Quick Actions Group -->
                    <div v-if="selectedInvoice && hasInvoiceLines" class="d-flex">
                      <v-btn-toggle dense rounded class="mr-2 border white">
                        <v-btn small text color="primary" @click="allocateFullAmount" title="ແບ່ງປັນຍອດເຕັມ">
                          <v-icon left small>mdi-cash-multiple</v-icon>
                          ຍອດເຕັມ
                        </v-btn>
                        <v-btn small text color="success" @click="allocateEqually" title="ແບ່ງເທົ່າກັນ">
                          <v-icon left small>mdi-equal-box</v-icon>
                          ແບ່ງເທົ່າກັນ
                        </v-btn>
                        <v-btn small text color="info" @click="allocateProportionally" title="ແບ່ງຕາມອັດຕາສ່ວນ">
                          <v-icon left small>mdi-percent</v-icon>
                          ອັດຕາສ່ວນ
                        </v-btn>
                        <v-btn small text color="warning" @click="clearAllAllocations" title="ລົບລ້າງ">
                          <v-icon left small>mdi-eraser</v-icon>
                          ລົບລ້າງ
                        </v-btn>
                      </v-btn-toggle>
                    </div>
                  </div>
                </v-card-title>

                <!-- Empty State -->
                <div v-if="allocationLines.length === 0" class="d-flex flex-column align-center justify-center py-10 grey lighten-5 border-dashed rounded-b-lg m-4">
                  <v-icon size="64" color="grey lighten-1" class="mb-3">mdi-playlist-remove</v-icon>
                  <h4 class="text-subtitle-1 font-weight-bold grey--text text--darken-2 mb-1">
                    ຍັງບໍ່ມີລາຍການແບ່ງປັນ (No Allocations)
                  </h4>
                  <p class="text-body-2 grey--text text--darken-1 mb-4 text-center" style="max-width: 320px;">
                    ເລືອກໃບແຈ້ງໜີ້ເພື່ອໂຫຼດລາຍການອັດຕະໂນມັດ ຫຼື ເພີ່ມລາຍການດ້ວຍຕົນເອງ
                  </p>
                  <v-btn
                    color="primary"
                    depressed
                    class="rounded-lg"
                    @click="addManualLine"
                  >
                    <v-icon left>mdi-plus-circle-outline</v-icon>
                    ເພີ່ມລາຍການທຳອິດ
                  </v-btn>
                </div>

                <!-- Allocation Lines Table Display -->
                <v-card-text v-else class="pa-4">
                  <div class="allocation-notice px-4 py-2 mb-4 d-flex align-center rounded blue lighten-5 blue--text text--darken-3 text-caption">
                    <v-icon small color="blue darken-2" class="mr-2">mdi-information-outline</v-icon>
                    <span>ໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ (ລາຍການຈາກໃບແຈ້ງໜີ້ ຫຼື ລາຍການທີ່ເພີ່ມເອງ)</span>
                  </div>

                  <div class="allocation-table-container border rounded-lg overflow-hidden">
                    <table class="table-compact-vuetify">
                      <thead>
                        <tr>
                          <th style="width: 40px" class="text-center">#</th>
                          <th style="width: 250px">ລາຍລະອຽດ (Description) *</th>
                          <th style="width: 140px" class="text-right">ຍອດອ້າງອີງ (Ref)</th>
                          <th style="width: 140px">ຍອດຊຳລະ (Allocated) *</th>
                          <th style="width: 220px">ລະຫັດການເງິນ (Financial Code) *</th>
                          <th style="width: 180px" v-if="enableGL">DR Account</th>
                          <th style="width: 180px" v-if="enableGL">CR Account</th>
                          <th style="width: 50px" class="text-center">ລຶບ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(allocation, index) in allocationLines"
                          :key="allocation.tempId"
                          class="allocation-row"
                        >
                          <td class="text-center font-weight-bold grey--text">{{ index + 1 }}</td>
                          <td>
                            <!-- If from invoice line -->
                            <div v-if="allocation.invoiceLine" class="invoice-line-display pa-1">
                              <div class="line-description font-weight-bold text-truncate text-body-2 grey--text text--darken-3" style="max-width: 230px;" :title="allocation.invoiceLine.description">
                                {{ allocation.invoiceLine.description || 'N/A' }}
                              </div>
                              <div class="line-details grey--text text-caption" style="font-size: 11px !important;">
                                ຈຳນວນ: {{ formatNumber(allocation.invoiceLine.quantity || 0) }} × {{ formatCurrency(allocation.invoiceLine.unitPrice || 0) }}
                                <span v-if="(allocation.invoiceLine.taxRate || 0) > 0" class="ml-1 font-weight-medium text-caption info--text">
                                  (+ ພາສີ {{ allocation.invoiceLine.taxRate }}%)
                                </span>
                              </div>
                            </div>
                            <!-- Manual entry description -->
                            <div v-else class="pa-1">
                              <v-text-field
                                v-model="allocation.description"
                                dense
                                outlined
                                hide-details="auto"
                                :error="!!errors[`allocation_${index}_description`]"
                                placeholder="ລາຍລະອຽດການແບ່ງປັນ..."
                              />
                            </div>
                          </td>
                          <td class="text-right font-weight-bold success--text pr-4">
                            <span v-if="allocation.invoiceLine">
                              {{ formatCurrency(allocation.invoiceLine.lineTotal) }}
                            </span>
                            <span v-else class="text-muted grey--text">-</span>
                          </td>
                          <td>
                            <div class="pa-1">
                              <v-text-field
                                v-model="allocation.allocatedAmount"
                                type="number"
                                step="0.01"
                                min="0"
                                dense
                                outlined
                                hide-details="auto"
                                :error="!!errors[`allocation_${index}_allocatedAmount`]"
                                @blur="validateAllocation(allocation, index)"
                                placeholder="0.00"
                                class="font-weight-bold text-right-input"
                              />
                            </div>
                          </td>
                          <td>
                            <div class="pa-1">
                              <v-autocomplete
                                v-model="allocation.txnId"
                                :items="transactionCodes.filter((t) => t.type === 'INCOME' && t.isActive)"
                                item-value="id"
                                item-text="code"
                                :loading="loadingTransactionCodes"
                                :disabled="loadingTransactionCodes"
                                :error="!allocation.txnId && errors.settlementLines"
                                dense
                                outlined
                                hide-details="auto"
                                placeholder="ເລືອກລະຫັດການເງິນ"
                              >
                                <template v-slot:item="{ item }">
                                  <v-list-item-content class="py-1">
                                    <v-list-item-title class="text-caption font-weight-bold">{{ item.code }}</v-list-item-title>
                                    <v-list-item-subtitle class="text-caption">{{ item.description }}</v-list-item-subtitle>
                                  </v-list-item-content>
                                </template>
                                <template v-slot:selection="{ item }">
                                  <span class="text-caption font-weight-bold">{{ item.code }}</span>
                                </template>
                              </v-autocomplete>
                            </div>
                          </td>
                          <!-- DR Account -->
                          <td v-if="enableGL">
                            <div class="pa-1">
                              <v-autocomplete
                                v-model="allocation.DRglAccountId"
                                :items="glAccounts"
                                item-value="id"
                                item-text="accountNumber"
                                :error="!!errors[`line_${index}_DRglAccountId`]"
                                dense
                                outlined
                                hide-details="auto"
                                placeholder="DR Account"
                              >
                                <template v-slot:item="{ item }">
                                  <v-list-item-content class="py-1">
                                    <v-list-item-title class="text-caption font-weight-bold">{{ item.accountNumber }}</v-list-item-title>
                                    <v-list-item-subtitle class="text-caption">{{ item.accountName }}</v-list-item-subtitle>
                                  </v-list-item-content>
                                </template>
                                <template v-slot:selection="{ item }">
                                  <span class="text-caption font-weight-medium">{{ item.accountNumber }}</span>
                                </template>
                              </v-autocomplete>
                            </div>
                          </td>
                          <!-- CR Account -->
                          <td v-if="enableGL">
                            <div class="pa-1">
                              <v-autocomplete
                                v-model="allocation.CRglAccountId"
                                :items="glAccounts"
                                item-value="id"
                                item-text="accountNumber"
                                :error="!!errors[`line_${index}_CRglAccountId`]"
                                dense
                                outlined
                                hide-details="auto"
                                placeholder="CR Account"
                              >
                                <template v-slot:item="{ item }">
                                  <v-list-item-content class="py-1">
                                    <v-list-item-title class="text-caption font-weight-bold">{{ item.accountNumber }}</v-list-item-title>
                                    <v-list-item-subtitle class="text-caption">{{ item.accountName }}</v-list-item-subtitle>
                                  </v-list-item-content>
                                </template>
                                <template v-slot:selection="{ item }">
                                  <span class="text-caption font-weight-medium">{{ item.accountNumber }}</span>
                                </template>
                              </v-autocomplete>
                            </div>
                          </td>
                          <td class="text-center">
                            <v-btn icon color="error" x-small @click="removeLine(index)" title="ລຶບລາຍການ">
                              <v-icon small>mdi-trash-can-outline</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Total Amount Dashboard Card Summary -->
              <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white" style="border-left: 5px solid #28a745 !important;">
                <v-card-text class="pa-4 grey lighten-5">
                  <v-row dense class="align-center justify-space-between text-center text-sm-left">
                    <v-col cols="12" sm="4" class="px-4 py-2 border-sm-right">
                      <div class="text-subtitle-2 grey--text text--darken-2 font-weight-bold">ຍອດທີ່ຮັບ (Total Received)</div>
                      <div class="text-h5 font-weight-black success--text mt-1">
                        {{ formatCurrency(form.totalReceivedAmount) }}
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4" class="px-4 py-2 border-sm-right">
                      <div class="text-subtitle-2 grey--text text--darken-2 font-weight-bold">ລວມການແບ່ງປັນ (Allocated)</div>
                      <div class="text-h5 font-weight-black primary--text mt-1">
                        {{ formatCurrency(calculatedAllocatedTotal) }}
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4" class="px-4 py-2">
                      <div class="text-subtitle-2 grey--text text--darken-2 font-weight-bold">ສະຖານະ (Status)</div>
                      <div class="d-flex align-center justify-center justify-sm-start mt-2">
                        <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                        <span class="text-h6 font-weight-bold success--text">ສົມດຸນ (Balanced)</span>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </form>
          </div>
        </v-card-text>

        <!-- Dialog Footer Actions -->
        <v-card-actions class="modal-footer px-6 py-4 grey lighten-5 border-top d-flex justify-end">
          <v-btn
            color="grey darken-1"
            outlined
            depressed
            class="px-6 rounded-lg font-weight-bold mr-2"
            @click="handleClose"
            :disabled="saving"
          >
            <v-icon left>mdi-close</v-icon>
            ຍົກເລີກ
          </v-btn>
          
          <v-btn
            v-if="isEdit"
            color="info"
            depressed
            class="px-6 rounded-lg font-weight-bold mr-2"
            @click="printReceipt"
            title="ພິມໃບຮັບເງິນ"
          >
            <v-icon left>mdi-printer</v-icon>
            ພິມ
          </v-btn>

          <v-btn
            color="primary"
            depressed
            class="px-6 rounded-lg font-weight-bold"
            @click="handleSubmit"
            :disabled="saving || !isFormValid"
            :loading="saving"
          >
            <v-icon left>mdi-content-save-outline</v-icon>
            {{ saving ? 'ກຳລັງບັນທຶກ...' : isEdit ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Invoice Browser dialog over v-dialog -->
    <v-dialog
      :value="showInvoiceBrowser"
      max-width="1000px"
      scrollable
      persistent
    >
      <v-card class="rounded-lg overflow-hidden white">
        <!-- Dialog Title -->
        <v-card-title class="modal-header px-6 py-4 grey lighten-5 border-bottom">
          <div class="d-flex align-center w-100">
            <v-avatar color="primary lighten-5" size="40" class="mr-3">
              <v-icon color="primary">mdi-file-find-outline</v-icon>
            </v-avatar>
            <div class="flex-grow-1">
              <h4 class="text-h6 font-weight-bold grey--text text--darken-3 mb-0">
                ເລືອກໃບແຈ້ງໜີ້ (Select Invoice)
              </h4>
            </div>
            <v-btn icon color="grey darken-2" @click="closeInvoiceBrowser">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card-title>

        <!-- Dialog Content -->
        <v-card-text class="pa-0 d-flex flex-column" style="height: 70vh;">
          <!-- Compact Search Bar -->
          <div class="search-section pa-4 border-bottom grey lighten-4">
            <v-text-field
              v-model="invoiceSearchQuery"
              label="ຄົ້ນຫາເລກໃບແຈ້ງໜີ້, ຊື່ລູກຄ້າ, ຫຼື ລາຍລະອຽດ..."
              prepend-inner-icon="mdi-magnify"
              outlined
              dense
              hide-details
              clearable
              class="white"
            />
          </div>

          <!-- Invoice List / Table Wrapper -->
          <div class="flex-grow-1 overflow-y-auto pa-4">
            <!-- Loading State -->
            <div v-if="invoiceBrowserLoading" class="d-flex flex-column align-center justify-center py-12">
              <v-progress-circular indeterminate color="primary" size="48" class="mb-3" />
              <span class="text-body-2 grey--text">ກຳລັງໂຫຼດໃບແຈ້ງໜີ້...</span>
            </div>

            <!-- Table -->
            <div v-else-if="searchFilteredInvoices.length > 0" class="invoice-table-container border rounded-lg overflow-hidden">
              <table class="table-compact-vuetify">
                <thead>
                  <tr>
                    <th style="width: 150px">ເລກໃບແຈ້ງໜີ້</th>
                    <th>ລູກຄ້າ (Customer)</th>
                    <th style="width: 120px">ວັນທີໃບແຈ້ງໜີ້</th>
                    <th style="width: 120px">ຄົບກຳໜົດ</th>
                    <th style="width: 150px" class="text-right">ຍອດເງິນ (Amount)</th>
                    <th style="width: 100px" class="text-center">ສະຖານະ</th>
                    <th style="width: 100px" class="text-center">ເລືອກ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="invoice in searchFilteredInvoices"
                    :key="invoice.id"
                    class="invoice-row"
                  >
                    <td class="font-weight-bold primary--text">
                      {{ invoice.invoiceNumber }}
                    </td>
                    <td>
                      <div class="customer-info">
                        <div class="customer-name font-weight-medium text-body-2 grey--text text--darken-3">
                          {{ invoice.customer ? invoice.customer.name : 'N/A' }}
                        </div>
                        <div
                          v-if="invoice.customer && invoice.customer.email"
                          class="customer-email grey--text text-caption"
                        >
                          {{ invoice.customer.email }}
                        </div>
                      </div>
                    </td>
                    <td>{{ formatDate(invoice.invoiceDate) }}</td>
                    <td>{{ formatDate(invoice.dueDate) }}</td>
                    <td class="text-right font-weight-bold success--text pr-4">
                      {{ formatCurrency(invoice.totalAmount) }}
                    </td>
                    <td class="text-center">
                      <v-chip
                        x-small
                        class="font-weight-bold"
                        :color="invoice.status === 'paid' ? 'success' : invoice.status === 'overdue' ? 'error' : 'warning'"
                        outlined
                        label
                      >
                        {{ getStatusLabel(invoice.status) }}
                      </v-chip>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-xs"
                        @click="selectInvoiceFromBrowser(invoice)"
                        :disabled="invoice.id === form.invoiceHeaderId"
                      >
                        <i class="fas fa-check"></i>
                        {{
                          invoice.id === form.invoiceHeaderId
                            ? 'ເລືອກແລ້ວ'
                            : 'ເລືອກ'
                        }}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          <!-- No Results -->
          <div v-else class="no-results-state">
            <div class="empty-content">
              <i class="fas fa-file-invoice"></i>
              <h4>
                {{ invoiceSearchQuery ? 'ບໍ່ພົບໃບແຈ້ງໜີ້' : 'ບໍ່ມີໃບແຈ້ງໜີ້' }}
              </h4>
              <p>
                {{
                  invoiceSearchQuery
                    ? `ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ຕົງກັບ "${invoiceSearchQuery}"`
                    : 'ບໍ່ມີໃບແຈ້ງໜີ້ທີ່ສາມາດເລືອກໄດ້'
                }}
              </p>
            </div>
          </div>
        </div>
      </v-card-text>

        <div class="modal-footer">
          <div class="footer-info">
            <span v-if="searchFilteredInvoices.length > 0" class="result-count">
              ພົບ {{ searchFilteredInvoices.length }} ໃບແຈ້ງໜີ້
            </span>
          </div>
          <div class="footer-actions">
            <button
              type="button"
              class="btn btn-secondary btn-compact"
              @click="closeInvoiceBrowser"
            >
              <i class="fas fa-times"></i>
              ປິດ
            </button>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ARReceivePrinter from '~/components/accounting/ar/receive/voucher'

export default {
  name: 'ReceiveHeaderMaintain',
  components: {
    ARReceivePrinter,
  },
  props: {
    glAccounts: { type: Array, default: () => [] },
    visible: { type: Boolean, default: false },
    receipt: { type: Object, default: null },
    currencies: { type: Array, default: () => [] },
    invoices: { type: Array, default: () => [] },
    users: { type: Array, default: () => [] },
  },

  data() {
    return {
      showPrintDialog: false,
      selectedReceiptForPrint: null,
      selectedCurrency: null,
      paymentMethods: [],
      transactionCodes: [],
      loadingTransactionCodes: false,
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      allocationLines: [],
      nextTempId: 1,
      selectedInvoice: null,

      // Invoice Browser
      showInvoiceBrowser: false,
      invoiceBrowserLoading: false,
      filteredInvoices: [],
      invoiceSearchQuery: '',

      form: {
        id: null,
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        currencyId: '',
        exchangeRate: 1.0,
        totalReceivedAmount: 0.0,
        paymentId: null,
        referenceNumber: '',
        notes: '',
        inputterId: '',
        reason: '',
      },
    }
  },

  computed: {
        enableGL() {
      const spf = this.getSPF.find((spf) => spf.code === 'AC_AR_GL_ENABLE')
      return spf?.value === 'Y'
    },
    getSPF() {
      return this.$store.getters.findSPF
    },
    isEdit() {
      return !!(this.receipt && this.receipt.id)
    },
    
    user() {
      return this.$auth.user || {}
    },
    
    calculatedAllocatedTotal() {
      return this.allocationLines.reduce((sum, allocation) => {
        return sum + (parseFloat(allocation.allocatedAmount) || 0)
      }, 0)
    },

    allocationBalance() {
      return 0 // Always 0 since totalReceivedAmount = calculatedAllocatedTotal
    },

    autoCalculatedTotal() {
      return this.calculatedAllocatedTotal
    },

    availableInvoiceLines() {
      return this.selectedInvoice ? this.selectedInvoice.invoiceLines || [] : []
    },

    hasInvoiceLines() {
      return this.allocationLines.some((line) => line.invoiceLine !== null)
    },

    isFormValid() {
      const hasValidHeader =
        this.form.receiptNumber &&
        this.form.bookingDate &&
        this.form.receivedDate &&
        this.form.paymentId &&
        (!this.isEdit || this.form.reason)

      const hasValidAllocations =
        this.allocationLines.length > 0 &&
        this.allocationLines.some((allocation) => {
          const hasDescription = allocation.invoiceLine || allocation.description
          const hasValidAmount = (parseFloat(allocation.allocatedAmount) || 0) > 0
          const hasDate = allocation.allocationDate
          return hasDescription && hasValidAmount && hasDate
        }) &&
        (parseFloat(this.form.totalReceivedAmount) || 0) > 0

      return hasValidHeader && hasValidAllocations
    },

    searchFilteredInvoices() {
      if (!this.invoiceSearchQuery) {
        return this.filteredInvoices
      }

      const query = this.invoiceSearchQuery.toLowerCase()
      return this.filteredInvoices.filter(
        (invoice) =>
          invoice.invoiceNumber.toLowerCase().includes(query) ||
          (invoice.client && invoice.client.name.toLowerCase().includes(query)) ||
          (invoice.agency && invoice.agency.agencyName.toLowerCase().includes(query)) ||
          (invoice.description && invoice.description.toLowerCase().includes(query))
      )
    },

    // NEW: Get allocation summary
    allocationSummary() {
      return this.getAllocationSummary()
    },
  },

  async mounted() {
    await this.loadTransactionCodes()
    await this.loadPaymentMethods()
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

    receipt: {
      handler() {
        if (this.visible) {
          this.initializeDialog()
        }
      },
    },

    // Auto-update totalReceivedAmount when allocation lines change
    calculatedAllocatedTotal: {
      handler(newTotal) {
        this.form.totalReceivedAmount = newTotal
      },
      immediate: true,
    },

    // Update allocation dates when received date changes
    'form.receivedDate': {
      handler(newDate) {
        if (newDate && this.allocationLines.length > 0) {
          this.allocationLines.forEach((allocation) => {
            if (!allocation.allocationDate || allocation.allocationDate === '') {
              allocation.allocationDate = newDate
            }
          })
        }
      },
    },
  },

  methods: {
    // =====================================================
    // PRINT AND VOUCHER METHODS
    // =====================================================
    closePrintDialog() {
      this.showPrintDialog = false
      this.selectedReceiptForPrint = null
    },

    printReceipt() {
      console.log('🖨️ Print button clicked')

      if (!this.isEdit) {
        this.showToast('ກະລຸນາບັນທຶກການຮັບຊຳລະກ່ອນພິມ', 'warning')
        return
      }

      if (this.allocationLines.length === 0) {
        this.showToast('ບໍ່ມີລາຍການສຳລັບພິມ', 'warning')
        return
      }

      console.log('📝 Preparing receipt data...')

      const receiptData = {
        id: this.form.id,
        receiptNumber: this.form.receiptNumber,
        bookingDate: this.form.bookingDate,
        receivedDate: this.form.receivedDate,
        invoiceHeaderId: this.form.invoiceHeaderId,
        paymentId: this.form.paymentId,
        currencyId: this.form.currencyId,
        exchangeRate: this.form.exchangeRate,
        totalReceivedAmount: this.form.totalReceivedAmount,
        referenceNumber: this.form.referenceNumber || '',
        notes: this.form.notes || '',
        allocationLines: this.allocationLines.map((line) => ({
          description: line.description || line.invoiceLine?.description || '-',
          allocatedAmount: parseFloat(line.allocatedAmount) || 0,
          allocationDate: line.allocationDate,
          quantity: line.quantity || null,
          unitPrice: line.unitPrice || null,
          lineTotal: line.lineTotal || null,
          txnId: line.txnId,
          DRglAccountId: line.DRglAccountId,
          CRglAccountId: line.CRglAccountId,
          notes: line.notes || '',
          isFromInvoice: line.isFromInvoice || false,
          invoiceLineNumber: line.invoiceLine?.lineNumber || null,
        })),
        selectedInvoice: this.selectedInvoice,
        inputter: {
          cus_name: this.user?.cus_name || this.user?.username || '-',
        },
      }

      console.log('📊 Receipt data prepared:', receiptData)

      this.selectedReceiptForPrint = receiptData
      this.$nextTick(() => {
        console.log('🚀 Opening print dialog...')
        this.showPrintDialog = true
      })
    },

    // =====================================================
    // SEQUENCE AND REFERENCE DATA LOADING
    // =====================================================
    async requestSequence() {
      try {
        const { data } = await this.$axios.get('/api/ar-receive-headers/sequence')

        if (data.success) {
          this.form.receiptNumber = data.data.invoiceNumber
          this.$message?.success(`Receipt number generated: ${data.data.invoiceNumber}`)
          return data.data.invoiceNumber
        }
      } catch (error) {
        console.error('Error getting receipt sequence:', error)
        this.$message?.error('Failed to generate receipt number')
        throw error
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

    async loadTransactionCodes() {
      this.loadingTransactionCodes = true
      try {
        const { data } = await this.$axios.get('/api/transaction-codes', {
          params: {
            includeInactive: false,
            type: 'INCOME', // Changed to INCOME for AR receive
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

    // =====================================================
    // CURRENCY HANDLING
    // =====================================================
    onCurrencyChange() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find((c) => c.id === this.form.currencyId)
        console.info(`Currency structure ${JSON.stringify(this.currencies)}`)
        
        if (this.selectedCurrency) {
          this.form.exchangeRate = this.selectedCurrency.rate || 1.0
          console.log('✅ Currency updated:', this.selectedCurrency.code, 'Rate:', this.form.exchangeRate)
        }
      } else {
        this.selectedCurrency = null
        this.form.exchangeRate = 1.0
      }
    },

    // =====================================================
    // ENHANCED INVOICE SELECTION AND POPULATION
    // =====================================================
    async updateSelectedInvoice() {
      console.info('🔍 updateSelectedInvoice called')
      console.log('📝 Current form.invoiceHeaderId:', this.form.invoiceHeaderId)
      console.log('📋 Available invoices:', this.invoices.length)

      // Clear previous selection
      this.selectedInvoice = null

      if (!this.form.invoiceHeaderId) {
        console.log('❌ No invoice selected')
        if (!this.isEdit) {
          this.allocationLines = []
          this.clearInvoiceRelatedFields()
        }
        return
      }

      // Better ID comparison handling both string and number
      const invoiceId = parseInt(this.form.invoiceHeaderId)
      console.log('🔍 Looking for invoice ID:', invoiceId)

      // Find the selected invoice
      this.selectedInvoice = this.invoices.find((inv) => {
        console.log('🔍 Comparing:', inv.id, 'with', invoiceId)
        return inv.id === invoiceId
      })

      if (!this.selectedInvoice) {
        console.log('❌ Invoice not found in main invoices array, trying to load from API...')
        await this.loadInvoiceById(invoiceId)
      }

      if (!this.selectedInvoice) {
        console.log('❌ Could not find or load selected invoice')
        this.showToast('ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ເລືອກ', 'error')
        return
      }

      console.log('✅ Selected invoice found:', this.selectedInvoice.invoiceNumber)
      console.log('📄 Invoice details:', {
        id: this.selectedInvoice.id,
        invoiceNumber: this.selectedInvoice.invoiceNumber,
        totalAmount: this.selectedInvoice.totalAmount,
        currencyId: this.selectedInvoice.currencyId,
        agencyId: this.selectedInvoice.agencyId,
        lineCount: this.selectedInvoice.invoiceLines?.length || 0
      })

      // POPULATE HEADER DETAILS FROM SELECTED INVOICE
      await this.populateHeaderFromInvoice()

      // Check if invoice lines exist and load if needed
      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('🔄 Loading invoice lines...')
        await this.loadSelectedInvoiceLines()
      }

      // CREATE ALLOCATION LINES FROM INVOICE LINES
      if (this.selectedInvoice.invoiceLines && this.selectedInvoice.invoiceLines.length > 0) {
        console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines')
        console.info(`SELECTED INVOICE DETAILS: ${JSON.stringify(this.selectedInvoice)}`)

        // Only auto-create allocation lines for new records
        if (!this.isEdit) {
          this.createAllocationLinesFromInvoice()
        } else {
          console.log('ℹ️ Edit mode - not auto-creating allocation lines')
        }
      } else {
        console.log('❌ No invoice lines available')
        this.showToast('ໃບແຈ້ງໜີ້ນີ້ບໍ່ມີລາຍການສິນຄ້າ', 'warning')
      }

      console.log('📊 Final allocation lines count:', this.allocationLines.length)
    },

    // NEW METHOD: Populate header details from selected invoice
    async populateHeaderFromInvoice() {
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice to populate header from')
        return
      }

      console.log('🔄 Populating header details from invoice...')

      try {
        // Set currency from invoice
        if (this.selectedInvoice.currencyId) {
          console.log('💱 Setting currency from invoice:', this.selectedInvoice.currencyId)
          this.form.currencyId = this.selectedInvoice.currencyId
          
          // Find and set the selected currency
          this.selectedCurrency = this.currencies.find(c => c.id === this.selectedInvoice.currencyId)
          
          if (this.selectedCurrency) {
            console.log('✅ Currency found:', this.selectedCurrency.code, 'Rate:', this.selectedCurrency.rate)
            this.form.exchangeRate = this.selectedCurrency.rate || 1.0
          } else {
            console.log('⚠️ Currency not found in currencies list')
            // Try to use rate from invoice if available
            this.form.exchangeRate = this.selectedInvoice.exchangeRate || 1.0
          }
        }

        // Set reference number based on invoice number
        if (!this.form.referenceNumber && this.selectedInvoice.invoiceNumber) {
          this.form.referenceNumber = `REF-${this.selectedInvoice.invoiceNumber}`
        }

        // Set notes with invoice details
        if (!this.form.notes) {
          const agency = this.selectedInvoice.agency
          const client = this.selectedInvoice.client
          const customerInfo = agency ? 
            `${agency.agencyName} (${agency.agencyCode})` : 
            client ? `${client.name}` : 'Unknown Customer'
          
          this.form.notes = `Payment for ${this.selectedInvoice.invoiceNumber} - ${customerInfo}`
          
          if (this.selectedInvoice.description) {
            this.form.notes += ` - ${this.selectedInvoice.description}`
          }
        }

        console.log('✅ Header populated successfully:', {
          currencyId: this.form.currencyId,
          exchangeRate: this.form.exchangeRate,
          referenceNumber: this.form.referenceNumber,
          notes: this.form.notes
        })

        // Trigger currency change event to update related fields
        this.onCurrencyChange()

      } catch (error) {
        console.error('❌ Error populating header from invoice:', error)
        this.showToast('ມີປັນຫາໃນການໂຫຼດຂໍ້ມູນຈາກໃບແຈ້ງໜີ້', 'error')
      }
    },

    // ENHANCED: Better allocation lines creation with full invoice line data
    createAllocationLinesFromInvoice() {
      console.log('🔧 createAllocationLinesFromInvoice called')

      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice')
        return
      }

      if (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0) {
        console.log('❌ No invoice lines available')
        this.allocationLines = []
        return
      }

      console.log('✅ Creating allocation lines from', this.selectedInvoice.invoiceLines.length, 'invoice lines')

      this.allocationLines = this.selectedInvoice.invoiceLines.map((line, index) => {
        const allocation = {
          tempId: this.nextTempId++,
          lineNumber: index + 1,
          invoiceLineId: line.id,
          invoiceLine: line, // Store the full line object for display
          
          // Enhanced line details
          description: line.description || `Line ${line.lineNumber}`,
          quantity: line.quantity || 1,
          unitPrice: line.unitPrice || 0,
          lineTotal: line.lineTotal || 0,
          
          // Start with the full line amount as suggested allocation
          allocatedAmount: line.lineTotal || 0,
          
          // GL Account information from invoice line
          DRglAccountId: line.DRglAccountId || null,
          CRglAccountId: line.CRglAccountId || null,
          txnId: line.txnId || null,
          
          // Tax information
          taxRate: line.taxRate || 0,
          taxAmount: line.taxAmount || 0,
          
          // Dates
          allocationDate: this.form.receivedDate || new Date().toISOString().split('T')[0],
          
          // Notes with line details
          notes: `Invoice Line ${line.lineNumber}: ${line.description}${line.quantity > 1 ? ` (${line.quantity} × ${line.unitPrice})` : ''}`,
          
          // Additional flags
          isManual: false,
          isFromInvoice: true,
          
          // Store invoice reference for context
          invoiceNumber: this.selectedInvoice.invoiceNumber,
          invoiceId: this.selectedInvoice.id,
        }

        console.log(`📝 Created allocation ${index + 1}:`, {
          lineNumber: allocation.lineNumber,
          invoiceLineId: allocation.invoiceLineId,
          description: allocation.description,
          lineTotal: allocation.lineTotal,
          allocatedAmount: allocation.allocatedAmount,
          txnId: allocation.txnId
        })

        return allocation
      })

      console.log('🎉 Successfully created', this.allocationLines.length, 'allocation lines')
      console.log('💰 Total suggested allocation:', this.calculatedAllocatedTotal)

      // Force reactivity update
      this.$forceUpdate()
    },

    // ENHANCED: Better invoice loading with complete data
    async loadInvoiceById(invoiceId) {
      try {
        console.log('🔄 Loading invoice by ID:', invoiceId)

        const { data } = await this.$axios.get(`/api/ar-invoices/${invoiceId}`, {
          params: {
            include: ['client', 'agency', 'currency', 'invoiceLines', 'maker', 'updateUser'],
          },
        })

        console.log('📥 API response for single invoice:', data)

        if (data.success && data.data) {
          this.selectedInvoice = data.data
          console.log('✅ Invoice loaded successfully:', this.selectedInvoice.invoiceNumber)
        } else if (data.invoiceNumber) {
          this.selectedInvoice = data
          console.log('✅ Invoice loaded (alt structure):', this.selectedInvoice.invoiceNumber)
        }

        // Ensure invoice lines are properly structured
        if (this.selectedInvoice && (!this.selectedInvoice.invoiceLines || this.selectedInvoice.invoiceLines.length === 0)) {
          console.log('🔄 Invoice lines missing, loading separately...')
          await this.loadSelectedInvoiceLines()
        }

      } catch (error) {
        console.error('❌ Error loading invoice by ID:', error)
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error')
      }
    },

    // ENHANCED: Better invoice lines loading with validation
    async loadSelectedInvoiceLines() {
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice to load lines for')
        return
      }

      try {
        console.log('🔄 Loading invoice lines for:', this.selectedInvoice.invoiceNumber)

        const { data } = await this.$axios.get(`/api/ar-invoice-lines/by-header/${this.selectedInvoice.id}`)

        console.log('📥 Invoice lines API response:', data)

        // Handle different possible response structures
        if (data.success && data.data && Array.isArray(data.data)) {
          this.selectedInvoice.invoiceLines = data.data
          console.log('✅ Invoice lines loaded:', data.data.length)
        } else if (Array.isArray(data)) {
          this.selectedInvoice.invoiceLines = data
          console.log('✅ Invoice lines loaded (alt structure):', data.length)
        } else {
          console.warn('❓ Unexpected response structure:', data)
          this.selectedInvoice.invoiceLines = []
        }

        // Log detailed line information
        if (this.selectedInvoice.invoiceLines && this.selectedInvoice.invoiceLines.length > 0) {
          console.log('📄 Invoice lines details:')
          this.selectedInvoice.invoiceLines.forEach((line, index) => {
            console.log(`  Line ${index + 1}:`, {
              id: line.id,
              lineNumber: line.lineNumber,
              description: line.description,
              quantity: line.quantity,
              unitPrice: line.unitPrice,
              lineTotal: line.lineTotal,
              txnId: line.txnId,
              DRglAccountId: line.DRglAccountId,
              CRglAccountId: line.CRglAccountId
            })
          })
        }

      } catch (error) {
        console.error('❌ Error loading invoice lines:', error)
        this.selectedInvoice.invoiceLines = []
        this.showToast('ມີປັນຫາໃນການໂຫຼດລາຍການໃບແຈ້ງໜີ້', 'error')
      }
    },

    // NEW METHOD: Clear invoice-related fields when no invoice selected
    clearInvoiceRelatedFields() {
      console.log('🧹 Clearing invoice-related fields')
      this.form.referenceNumber = ''
      this.form.notes = ''
      console.log('✅ Invoice-related fields cleared')
    },

    // ENHANCED: Better invoice change handler with error handling
    async onInvoiceChange() {
      console.log('🔄 onInvoiceChange triggered')
      
      try {
        await this.updateSelectedInvoice()
        this.clearFieldError('invoiceHeaderId')

        // Switch to allocations tab if lines were created
        if (this.allocationLines.length > 0) {
          console.log('🔄 Switching to allocations tab')
          this.$nextTick(() => {
            this.activeTab = 'allocations'
          })
        }
      } catch (error) {
        console.error('❌ Error in onInvoiceChange:', error)
        this.showToast('ມີປັນຫາໃນການປ່ຽນໃບແຈ້ງໜີ້', 'error')
      }
    },

    // =====================================================
    // LINE MANAGEMENT METHODS
    // =====================================================
    addManualLine() {
      const newLine = {
        tempId: this.nextTempId++,
        lineNumber: this.allocationLines.length + 1,
        invoiceLineId: null,
        invoiceLine: null,
        description: '',
        allocatedAmount: 0,
        quantity: null,
        unitPrice: null,
        lineTotal: null,
        DRglAccountId: null,
        CRglAccountId: null,
        txnId: null,
        allocationDate: this.form.receivedDate || new Date().toISOString().split('T')[0],
        notes: '',
        isManual: true,
        isFromInvoice: false,
      }

      this.allocationLines.push(newLine)
      console.log('✅ Added manual line:', newLine)
    },

    removeLine(index) {
      if (confirm('ທ່ານຕ້ອງການລຶບລາຍການນີ້ບໍ່?')) {
        this.allocationLines.splice(index, 1)

        // Renumber lines
        this.allocationLines.forEach((line, idx) => {
          line.lineNumber = idx + 1
        })

        // Clear errors for this line
        this.clearFieldError(`allocation_${index}_description`)
        this.clearFieldError(`allocation_${index}_allocatedAmount`)
        this.clearFieldError(`allocation_${index}_allocationDate`)

        console.log('🗑️ Removed line at index:', index)
      }
    },

    // =====================================================
    // ALLOCATION HELPER METHODS
    // =====================================================
    allocateFullAmount() {
      this.allocateFullAmountFromInvoice()
    },

    allocateFullAmountFromInvoice() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return

      console.log('💰 Allocating full amounts from invoice lines')

      this.allocationLines.forEach((allocation) => {
        if (allocation.invoiceLine && allocation.invoiceLine.lineTotal) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0
          allocation.allocatedAmount = lineTotal
          console.log(`  Line ${allocation.lineNumber}: ${lineTotal}`)
        }
      })

      console.log('✅ Full allocation completed. Total:', this.calculatedAllocatedTotal)
    },

    allocateEqually() {
      if (this.allocationLines.length === 0) return

      const totalToAllocate = this.selectedInvoice ? 
        parseFloat(this.selectedInvoice.totalAmount) || 0 : 
        this.calculatedAllocatedTotal || 1000 // Default amount if no invoice

      const amountPerLine = totalToAllocate / this.allocationLines.length

      this.allocationLines.forEach((allocation) => {
        allocation.allocatedAmount = amountPerLine.toFixed(2)
      })
    },

    allocateProportionally() {
      this.allocateFullAmountFromInvoice() // Same as full allocation for AR
    },

    clearAllAllocations() {
      this.allocationLines.forEach((allocation) => {
        allocation.allocatedAmount = 0
      })
    },

    // =====================================================
    // VALIDATION METHODS
    // =====================================================
    getRemainingAmount(allocation) {
      if (!allocation.invoiceLine) return 0
      const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0
      const allocated = parseFloat(allocation.allocatedAmount) || 0
      return lineTotal - allocated
    },

    isFullyAllocated(allocation) {
      if (!allocation.invoiceLine) return false
      return this.getRemainingAmount(allocation) === 0
    },

    isOverAllocated(allocation) {
      if (!allocation.invoiceLine) return false
      return this.getRemainingAmount(allocation) < 0
    },

    validateAllocation(allocation, index) {
      this.validateAllocationAgainstInvoice(allocation, index)
    },

    validateAllocationAgainstInvoice(allocation, index) {
      if (!allocation.invoiceLine) {
        // For manual lines, just ensure amount is positive
        const amount = parseFloat(allocation.allocatedAmount) || 0
        if (amount <= 0) {
          this.errors[`allocation_${index}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0'
        } else {
          this.clearFieldError(`allocation_${index}_allocatedAmount`)
        }
        return
      }

      // For invoice lines, validate against line total
      const amount = parseFloat(allocation.allocatedAmount) || 0
      const maxAllowed = parseFloat(allocation.invoiceLine.lineTotal) || 0

      if (amount > maxAllowed) {
        this.errors[`allocation_${index}_allocatedAmount`] = `ຈຳນວນເກີນກວ່າທີ່ເຫຼືອ (ສູງສຸດ: ${this.formatCurrency(maxAllowed)})`
      } else if (amount <= 0) {
        this.errors[`allocation_${index}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0'
      } else {
        this.clearFieldError(`allocation_${index}_allocatedAmount`)
      }
    },

    // =====================================================
    // INVOICE BROWSER METHODS
    // =====================================================
    async openInvoiceBrowser() {
      console.log('🔄 Opening invoice browser')
      this.showInvoiceBrowser = true
      this.invoiceBrowserLoading = true
      this.invoiceSearchQuery = ''

      try {
        const { data } = await this.$axios.get('/api/ar-invoices', {
          params: {
            status: ['draft', 'sent'],
            include: ['client', 'agency', 'currency', 'invoiceLines'],
            limit: 100,
          },
        })

        console.log('📥 Invoice browser API response:', data)

        if (data.success && data.data && data.data.invoices && Array.isArray(data.data.invoices)) {
          this.filteredInvoices = data.data.invoices
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices for browser')
        } else if (data.success && data.data && Array.isArray(data.data)) {
          this.filteredInvoices = data.data
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (alt structure)')
        } else if (Array.isArray(data)) {
          this.filteredInvoices = data
          console.log('✅ Loaded', this.filteredInvoices.length, 'invoices (direct array)')
        } else {
          console.warn('❓ Unexpected response structure:', data)
          this.filteredInvoices = []
        }
      } catch (error) {
        console.error('❌ Error loading invoices for browser:', error)
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error')
        this.filteredInvoices = []
      } finally {
        this.invoiceBrowserLoading = false
      }
    },

    async selectInvoiceFromBrowser(invoice) {
      console.log('🎯 Selecting invoice from browser:', invoice.invoiceNumber)

      this.form.invoiceHeaderId = invoice.id

      const existingIndex = this.invoices.findIndex((inv) => inv.id === invoice.id)
      if (existingIndex === -1) {
        console.log('➕ Adding invoice to main array')
        this.invoices.push(invoice)
      } else {
        console.log('🔄 Updating existing invoice in main array')
        this.invoices[existingIndex] = invoice
      }

      this.closeInvoiceBrowser()
      await this.onInvoiceChange()
      this.clearFieldError('invoiceHeaderId')
    },

    closeInvoiceBrowser() {
      this.showInvoiceBrowser = false
      this.filteredInvoices = []
      this.invoiceSearchQuery = ''
    },

    // =====================================================
    // FORM LIFECYCLE METHODS
    // =====================================================
    async initializeDialog() {
      this.activeTab = 'header'
      this.clearErrors()

      if (this.receipt) {
        this.form = {
          id: this.receipt.id,
          receiptNumber: this.receipt.receiptNumber,
          bookingDate: this.receipt.bookingDate ? this.receipt.bookingDate.split('T')[0] : '',
          receivedDate: this.receipt.receivedDate ? this.receipt.receivedDate.split('T')[0] : '',
          invoiceHeaderId: this.receipt.invoiceHeaderId,
          totalReceivedAmount: this.receipt.totalReceivedAmount || 0.0,
          paymentId: this.receipt.paymentId || null,
          currencyId: this.receipt.currencyId || null,
          exchangeRate: this.receipt.exchangeRate || 1,
          referenceNumber: this.receipt.referenceNumber || '',
          notes: this.receipt.notes || '',
          inputterId: this.receipt.inputterId || '',
          reason: '',
        }

        await this.loadAllocationLines(this.receipt.id)
        await this.updateSelectedInvoice()
      } else {
        this.resetForm()

        const today = new Date().toISOString().split('T')[0]
        this.form.bookingDate = today
        this.form.receivedDate = today

        this.allocationLines = []

        if (this.user && this.user.id) {
          this.form.inputterId = this.user.id
        }
        this.requestSequence()
      }
    },

    resetDialog() {
      this.resetForm()
      this.allocationLines = []
      this.selectedInvoice = null
      this.selectedReceiptForPrint = null
      this.clearErrors()
      this.activeTab = 'header'
      this.formLoading = false
      this.saving = false
      this.showInvoiceBrowser = false
      this.showPrintDialog = false
      this.filteredInvoices = []
      this.invoiceSearchQuery = ''
    },

    async loadAllocationLines(receiptId) {
      try {
        const { data } = await this.$axios.get(`/api/ar-receive-lines/by-header/${receiptId}`)
        this.allocationLines = data.data || []

        this.allocationLines.forEach((allocation) => {
          if (!allocation.tempId) {
            allocation.tempId = this.nextTempId++
          }
          if (allocation.allocationDate) {
            allocation.allocationDate = allocation.allocationDate.split('T')[0]
          }
        })
      } catch (error) {
        console.error('Error loading allocation lines:', error)
        this.allocationLines = []
      }
    },

    // =====================================================
    // VALIDATION AND SUBMISSION
    // =====================================================
    validateForm() {
      this.errors = {}

      // Header validation
      if (!this.form.receiptNumber) {
        this.errors.receiptNumber = 'ກະລຸນາໃສ່ເລກທີໃບຮັບ'
      }

      if (!this.form.bookingDate) {
        this.errors.bookingDate = 'ກະລຸນາໃສ່ວັນທີບັນທຶກ'
      }

      if (!this.form.receivedDate) {
        this.errors.receivedDate = 'ກະລຸນາໃສ່ວັນທີຮັບເງິນ'
      }

      if (!this.form.paymentId) {
        this.errors.paymentId = 'ກະລຸນາເລືອກວິທີຈ່າຍ'
      }

      // Date validation
      if (this.form.bookingDate && this.form.receivedDate) {
        const bookingDate = new Date(this.form.bookingDate)
        const receivedDate = new Date(this.form.receivedDate)

        if (receivedDate < bookingDate) {
          this.errors.receivedDate = 'ວັນທີຮັບເງິນຕ້ອງບໍ່ກ່ອນວັນທີບັນທຶກ'
        }
      }

      // Allocation validation
      if (this.allocationLines.length === 0) {
        this.errors.allocations = 'ກະລຸນາເພີ່ມການແບ່ງປັນຢ່າງໜ້ອຍ 1 ລາຍການ'
      } else {
        let hasValidAllocation = false
        let totalAllocated = 0

        for (let i = 0; i < this.allocationLines.length; i++) {
          const allocation = this.allocationLines[i]

          if (!allocation.invoiceLine && !allocation.description) {
            this.errors[`allocation_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດ'
          }

          const allocatedAmount = parseFloat(allocation.allocatedAmount) || 0

          if (allocatedAmount <= 0) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0'
          } else {
            hasValidAllocation = true
            totalAllocated += allocatedAmount
          }

          if (!allocation.allocationDate) {
            this.errors[`allocation_${i}_allocationDate`] = 'ກະລຸນາໃສ່ວັນທີແບ່ງປັນ'
          }

          if (allocation.invoiceLine && this.isOverAllocated(allocation)) {
            this.errors[`allocation_${i}_allocatedAmount`] = 'ຍອດແບ່ງປັນເກີນກວ່າທີ່ເຫຼືອ'
          }
        }

        if (!hasValidAllocation) {
          this.errors.allocations = 'ຢ່າງໜ້ອຍຕ້ອງມີ 1 ລາຍການທີ່ມີຍອດແບ່ງປັນ'
        }

        if (totalAllocated <= 0) {
          this.errors.totalReceivedAmount = 'ຍອດລວມການແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0'
        }
      }

      if (this.isEdit && !this.form.reason) {
        this.errors.reason = 'ກະລຸນາລະບຸເຫດຜົນຂອງການແກ້ໄຂ'
      }

      return Object.keys(this.errors).length === 0
    },

    handleSubmit() {
      if (!this.validateForm()) {
        this.showToast('ກະລຸນາກວດສອບຂໍ້ມູນທີ່ໃສ່', 'error')
        return
      }

      this.saving = true

      const validAllocationLines = this.allocationLines.filter((allocation) => {
        const amount = parseFloat(allocation.allocatedAmount) || 0
        return amount > 0
      })

      if (this.isEdit) {
        this.form.updateUserId = this.user.id
      } else {
        this.form.inputterId = this.user.id
      }

      const formData = {
        ...this.form,
        totalReceivedAmount: parseFloat(this.form.totalReceivedAmount) || 0,
        allocationLines: validAllocationLines.map((allocation, index) => ({
          id: allocation.id || null,
          tempId: allocation.tempId,
          lineNumber: index + 1,
          invoiceLineId: allocation.invoiceLineId || null,
          description: allocation.invoiceLine ? allocation.invoiceLine.description : allocation.description,
          allocatedAmount: parseFloat(allocation.allocatedAmount) || 0,
          allocationDate: allocation.allocationDate,
          quantity: allocation.quantity || null,
          unitPrice: allocation.unitPrice || null,
          lineTotal: allocation.lineTotal || null,
          DRglAccountId: allocation.DRglAccountId || null,
          CRglAccountId: allocation.CRglAccountId || null,
          txnId: allocation.txnId || null,
          notes: allocation.notes || '',
          isManual: !allocation.invoiceLineId,
          isFromInvoice: allocation.isFromInvoice || false,
        })),
      }

      console.log('💾 Submitting form data:', formData)
      this.$emit('save', formData)
    },

    // =====================================================
    // UTILITY METHODS
    // =====================================================
    getTransactionCodeLabel(txnId) {
      const txn = this.transactionCodes.find((t) => t.id === txnId)
      return txn ? `${txn.code} - ${txn.description}` : ''
    },

    getAllocationSummary() {
      const summary = {
        totalLines: this.allocationLines.length,
        invoiceLines: 0,
        manualLines: 0,
        totalAllocated: 0,
        totalInvoiceAmount: 0,
        allocationPercentage: 0
      }

      this.allocationLines.forEach(allocation => {
        const amount = parseFloat(allocation.allocatedAmount) || 0
        summary.totalAllocated += amount

        if (allocation.invoiceLine) {
          summary.invoiceLines++
          summary.totalInvoiceAmount += parseFloat(allocation.invoiceLine.lineTotal) || 0
        } else {
          summary.manualLines++
        }
      })

      if (summary.totalInvoiceAmount > 0) {
        summary.allocationPercentage = (summary.totalAllocated / summary.totalInvoiceAmount) * 100
      }

      return summary
    },

    clearErrors() {
      this.errors = {}
    },

    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field)
      }
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
        receiptNumber: '',
        bookingDate: '',
        receivedDate: '',
        invoiceHeaderId: '',
        totalReceivedAmount: 0.0,
        paymentId: null,
        currencyId: null,
        exchangeRate: 1,
        referenceNumber: '',
        notes: '',
        inputterId: this.user?.id || '',
        reason: '',
      }
    },

    // =====================================================
    // FORMATTING METHODS
    // =====================================================
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.selectedCurrency?.code || 'USD',
      }).format(amount || 0)
    },

    formatNumber(number) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(number || 0)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    },

    getStatusLabel(status) {
      const statusLabels = {
        draft: 'ຮ່າງ',
        sent: 'ສົ່ງແລ້ວ',
        paid: 'ຈ່າຍແລ້ວ',
        overdue: 'ເກີນກຳໜົດ',
        cancelled: 'ຍົກເລີກ',
      }
      return statusLabels[status] || status
    },

    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`)
      if (this.$toast) {
        if (typeof this.$toast[type] === 'function') {
          this.$toast[type](message)
        } else {
          console.log(message)
        }
      } else {
        if (type === 'error') {
          alert(`Error: ${message}`)
        }
      }
    },
  },
}
</script>
<style scoped>
/* Premium scrollbar integration for high-end feel */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Modal and layout styling */
.receipt-modal-card {
  background-color: #f8fafc !important;
  height: 100vh;
}

.modal-header {
  border-bottom: 1px solid #e2e8f0 !important;
  background-color: #ffffff !important;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05) !important;
}

.modal-body {
  background-color: #f1f5f9 !important;
}

.modal-footer {
  border-top: 1px solid #e2e8f0 !important;
  background-color: #ffffff !important;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.05) !important;
}

/* Border separator for summary panel cards */
@media (min-width: 600px) {
  .border-sm-right {
    border-right: 1px solid #e2e8f0;
  }
}

/* Allocation & Invoice browser table styles */
.allocation-table-container,
.invoice-table-container {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #ffffff;
  overflow: hidden;
}

.table-compact-vuetify {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  color: #334155;
}

.table-compact-vuetify th {
  background-color: #f8fafc;
  color: #475569;
  font-weight: 600;
  font-size: 12px;
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
  white-space: nowrap;
}

.table-compact-vuetify td {
  padding: 6px 12px;
  vertical-align: middle;
  border-bottom: 1px solid #f1f5f9;
}

/* Perfect alignment row transitions */
.allocation-row,
.invoice-row {
  transition: background-color 0.15s ease-in-out;
}

.allocation-row:hover,
.invoice-row:hover {
  background-color: #f8fafc;
}

.invoice-row td {
  padding: 12px;
}

/* Deep overrides for extremely ultra-compact form fields inside table */
.table-compact-vuetify ::v-deep .v-input--dense .v-input__control {
  min-height: 32px !important;
}

.table-compact-vuetify ::v-deep .v-input--dense .v-text-field__details {
  display: none !important;
}

.table-compact-vuetify ::v-deep .v-input--outlined .v-input__slot {
  min-height: 32px !important;
  padding: 0 10px !important;
  background-color: #ffffff !important;
  border-color: #cbd5e1 !important;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.table-compact-vuetify ::v-deep .v-input--outlined.v-input--is-focused .v-input__slot {
  border-color: #10b981 !important;
}

.table-compact-vuetify ::v-deep .v-input--outlined .v-input__append-inner {
  margin-top: 4px !important;
}

.table-compact-vuetify ::v-deep .v-select__selection--comma {
  font-size: 12px;
  margin: 3px 4px 3px 0;
  color: #334155;
}

.table-compact-vuetify ::v-deep input {
  font-size: 12px;
  height: 32px !important;
  color: #334155 !important;
}

/* Right alignment for currency and input amount values */
.text-right-input ::v-deep input {
  text-align: right !important;
  font-weight: 700 !important;
  color: #059669 !important;
}

/* Details and descriptions inner text alignment */
.invoice-line-display {
  line-height: 1.4;
}

.line-description {
  font-weight: 600;
  color: #1e293b;
}

.line-details {
  font-size: 11px;
  color: #64748b;
}

/* Premium blue informational notice callout */
.allocation-notice {
  background-color: #eff6ff;
  border-left: 4px solid #3b82f6;
  border-radius: 6px;
  color: #1e40af;
  font-weight: 500;
}

/* Search bar styling inside sub-dialogs */
.search-section {
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

/* Customer card fields inside lists */
.customer-info {
  line-height: 1.4;
}

.customer-name {
  font-size: 13px;
  font-weight: 600;
  color: #1e293b;
}

.customer-email {
  font-size: 11px;
  color: #64748b;
}

/* Status chips/badges inside non-Vuetify sub-tables */
.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: 0.05em;
}

/* Clean retrofitted legacy-compatible button styles */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
}

.btn-xs {
  padding: 4px 10px;
  font-size: 11px;
  height: 24px;
}

.btn-compact {
  padding: 6px 14px;
  font-size: 13px;
  height: 32px;
}

.btn-primary {
  background-color: #10b981;
  color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(16, 185, 129, 0.05);
}

.btn-primary:hover:not(:disabled) {
  background-color: #059669;
}

.btn-primary:disabled {
  background-color: #cbd5e1;
  color: #94a3b8;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: #64748b;
  color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(100, 116, 139, 0.05);
}

.btn-secondary:hover:not(:disabled) {
  background-color: #475569;
}

.btn-secondary:disabled {
  background-color: #cbd5e1;
  color: #94a3b8;
  cursor: not-allowed;
}

/* Empty states stylized gracefully */
.no-results-state {
  text-align: center;
  padding: 48px 24px;
  background-color: #f8fafc;
  border: 2px dashed #e2e8f0;
  border-radius: 12px;
  margin: 16px;
}

.empty-content i {
  font-size: 44px;
  color: #cbd5e1;
  margin-bottom: 16px;
  display: block;
}

.empty-content h4 {
  font-size: 16px;
  font-weight: 700;
  color: #475569;
  margin-bottom: 6px;
}

.empty-content p {
  font-size: 13px;
  color: #94a3b8;
  margin: 0;
}
</style>