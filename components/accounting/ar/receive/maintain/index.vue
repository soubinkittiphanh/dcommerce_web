
<!-- Replace your entire template section with this -->
<template>
  <div>
    <!-- Main Receipt Modal -->
    <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
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
      <div class="enhanced-dialog" @click.stop>
        <div class="modal-header">
          <h4 class="modal-title">
            <i class="fas fa-receipt"></i>
            {{ isEdit ? 'ແກ້ໄຂການຮັບຊຳລະ' : 'ເພີ່ມການຮັບຊຳລະໃໝ່' }}
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

          <!-- Single Form View -->
          <div v-else class="receipt-form">
            <form @submit.prevent="handleSubmit">
              <!-- Receipt Information Section -->
              <div class="form-section">
                <h5 class="section-title">
                  <i class="fas fa-info-circle"></i>
                  ຂໍ້ມູນການຮັບຊຳລະ
                </h5>

                <!-- Row 1: Basic Info -->
                <div class="form-row">
                  <div class="form-group">
                    <label for="bookingDate" class="required"
                      >ວັນທີບັນທຶກ</label
                    >
                    <input
                      id="bookingDate"
                      v-model="form.bookingDate"
                      type="date"
                      class="form-control"
                      :class="{ 'is-invalid': errors.bookingDate }"
                    />
                    <div v-if="errors.bookingDate" class="invalid-feedback">
                      {{ errors.bookingDate }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="receiptNumber" class="required"
                      >ເລກທີໃບຮັບ</label
                    >
                    <input
                      id="receiptNumber"
                      v-model="form.receiptNumber"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.receiptNumber }"
                      placeholder="RCP-2025-001"
                      :readonly="isEdit"
                    />
                    <div v-if="errors.receiptNumber" class="invalid-feedback">
                      {{ errors.receiptNumber }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="paymentId" class="required">ວິທີການຊຳລະ</label>
                    <v-autocomplete
                      id="paymentId"
                      v-model="form.paymentId"
                      :items="paymentMethods"
                      item-value="id"
                      item-text="payment_name"
                      :error="!!errors.paymentId"
                      :error-messages="errors.paymentId"
                      dense
                      outlined
                      clearable
                      hide-details="auto"
                      placeholder="ເລືອກວິທີການຊຳລະ"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ item.payment_name }}
                          </v-list-item-title>
                        </v-list-item-content>
                      </template>
                      <template v-slot:selection="{ item }">
                        {{ item.payment_name }}
                      </template>
                    </v-autocomplete>
                  </div>
                  <div class="form-group">
                    <label for="currencyId">ສະກຸນເງິນ</label>
                    <v-autocomplete
                      id="currencyId"
                      v-model="form.currencyId"
                      :items="currencies"
                      item-value="id"
                      item-text="name"
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
                  <div class="form-group">
                    <label for="referenceNumber">ເລກອ້າງອີງ</label>
                    <input
                      id="referenceNumber"
                      v-model="form.referenceNumber"
                      type="text"
                      class="form-control"
                      placeholder="ເລກອ້າງອີງ..."
                    />
                  </div>
                </div>

                <!-- Row 3: Dates and Amount -->
                <div class="form-row">
                  <div class="form-group">
                    <label for="receivedDate" class="required"
                      >ວັນທີຮັບເງິນ</label
                    >
                    <input
                      id="receivedDate"
                      v-model="form.receivedDate"
                      type="date"
                      class="form-control"
                      :class="{ 'is-invalid': errors.receivedDate }"
                    />
                    <div v-if="errors.receivedDate" class="invalid-feedback">
                      {{ errors.receivedDate }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="invoiceHeaderId">ໃບແຈ້ງໜີ້ (ທາງເລືອກ)</label>
                    <div class="d-flex align-items-start invoice-selector">
                      <v-autocomplete
                        id="invoiceHeaderId"
                        v-model="form.invoiceHeaderId"
                        :items="invoices"
                        item-value="id"
                        item-text="invoiceNumber"
                        dense
                        outlined
                        clearable
                        hide-details
                        placeholder="ເລືອກໃບແຈ້ງໜີ້ (ຖ້າມີ)"
                        class="flex-grow-1"
                        @change="onInvoiceChange"
                      >
                        <template v-slot:item="{ item }">
                          <v-list-item-content>
                            <v-list-item-title>
                              {{ item.invoiceNumber }} -
                              {{ item.customer ? item.customer.name : 'N/A' }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                              {{ formatCurrency(item.totalAmount) }}
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </template>
                        <template v-slot:selection="{ item }">
                          {{ item.invoiceNumber }} -
                          {{ item.customer ? item.customer.name : 'N/A' }}
                          ({{ formatCurrency(item.totalAmount) }})
                        </template>
                      </v-autocomplete>
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-sm ml-2"
                        style="height: 40px; margin-top: 0"
                        @click="openInvoiceBrowser"
                        title="ເລືອກໃບແຈ້ງໜີ້"
                      >
                        <i class="fas fa-search"></i>
                        ຄົ້ນຫາ
                      </button>
                    </div>
                    <small class="form-text text-muted mt-2">
                      <i class="fas fa-info-circle"></i>
                      ເລືອກໃບແຈ້ງໜີ້ເພື່ອໂຫຼດລາຍການອັດຕະໂນມັດ
                    </small>
                  </div>
                  <!-- <div class="form-group">
                    <label for="totalReceivedAmount" class="auto-calculated">
                      <i class="fas fa-calculator"></i>
                      ຍອດເງິນທີ່ຮັບ
                    </label>
                    <input
                      id="totalReceivedAmount"
                      v-model="form.totalReceivedAmount"
                      type="number"
                      step="0.01"
                      class="form-control auto-calculated-field"
                      :class="{ 'is-invalid': errors.totalReceivedAmount }"
                      readonly
                      disabled
                    />
                    <small class="form-text text-muted">
                      <i class="fas fa-info-circle"></i>
                      ຄຳນວນອັດຕະໂນມັດ
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="inputterId">ຜູ້ບັນທຶກ</label>
                    <select
                      id="inputterId"
                      v-model="form.inputterId"
                      class="form-control"
                      disabled
                    >
                      <option value="">ເລືອກຜູ້ບັນທຶກ</option>
                      <option
                        v-for="user in users"
                        :key="user.id"
                        :value="user.id"
                      >
                        {{ user.cus_name }} - {{ user.cus_email }}
                      </option>
                    </select>
                  </div> -->

                  <div class="form-group">
                    <label for="notes">ໝາຍເຫດ</label>
                    <textarea
                      id="notes"
                      v-model="form.notes"
                      class="form-control textarea-compact"
                      rows="2"
                      placeholder="ໝາຍເຫດກ່ຽວກັບການຮັບຊຳລະ..."
                    ></textarea>
                  </div>

                  <!-- Reason field for audit trail (only show when editing) -->
                  <div v-if="isEdit" class="form-group">
                    <label for="reason" class="required"
                      >ເຫດຜົນຂອງການແກ້ໄຂ</label
                    >
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

              <!-- Payment Allocation Section -->
              <div class="form-section">
                <div class="section-header">
                  <h5 class="section-title">
                    <i class="fas fa-list"></i>
                    ການແບ່ງປັນຊຳລະ
                    <span
                      v-if="allocationLines.length > 0"
                      class="line-count"
                      >{{ allocationLines.length }}</span
                    >
                  </h5>
                  <div class="action-buttons">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      @click="addManualLine"
                    >
                      <i class="fas fa-plus"></i>
                      ເພີ່ມລາຍການ
                    </button>
                    <div
                      v-if="selectedInvoice && hasInvoiceLines"
                      class="quick-allocation-actions"
                    >
                      <button
                        type="button"
                        class="btn btn-outline-primary btn-xs"
                        @click="allocateFullAmount"
                        title="ແບ່ງປັນຍອດເຕັມ"
                      >
                        <i class="fas fa-file-invoice-dollar"></i>
                        ຍອດເຕັມ
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-success btn-xs"
                        @click="allocateEqually"
                        title="ແບ່ງເທົ່າກັນ"
                      >
                        <i class="fas fa-equals"></i>
                        ແບ່ງເທົ່າກັນ
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-info btn-xs"
                        @click="allocateProportionally"
                        title="ແບ່ງຕາມອັດຕາສ່ວນ"
                      >
                        <i class="fas fa-percentage"></i>
                        ຕາມອັດຕາສ່ວນ
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-warning btn-xs"
                        @click="clearAllAllocations"
                      >
                        <i class="fas fa-eraser"></i>
                        ລົບລ້າງ
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Empty State -->
                <div
                  v-if="allocationLines.length === 0"
                  class="no-invoice-state"
                >
                  <div class="empty-content">
                    <i class="fas fa-list"></i>
                    <h4>ຍັງບໍ່ມີລາຍການແບ່ງປັນ</h4>
                    <p>
                      ເລືອກໃບແຈ້ງໜີ້ເພື່ອໂຫຼດລາຍການອັດຕະໂນມັດ ຫຼື
                      ເພີ່ມລາຍການດ້ວຍຕົນເອງ
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="addManualLine"
                    >
                      <i class="fas fa-plus-circle"></i>
                      ເພີ່ມລາຍການທຳອິດ
                    </button>
                  </div>
                </div>

                <!-- Allocation Lines Display -->
                <div v-else class="allocation-table-container">
                  <div class="allocation-notice">
                    <i class="fas fa-info-circle"></i>
                    <span
                      >ໃສ່ຍອດແບ່ງປັນສຳລັບແຕ່ລະລາຍການ (ລາຍການຈາກໃບແຈ້ງໜີ້ ຫຼື
                      ລາຍການທີ່ເພີ່ມເອງ)</span
                    >
                  </div>

                  <div class="allocation-table">
                    <table class="table table-compact">
                      <thead>
                        <tr>
                          <th style="width: 30px">#</th>
                          <th style="width: 200px">ລາຍລະອຽດ *</th>
                          <th style="width: 80px">ຍອດອ້າງອີງ</th>
                          <th style="width: 90px">ຍອດຊຳລະ *</th>
                          <!-- <th style="width: 90px">ວັນທີແບ່ງປັນ *</th> -->
                          <!-- <th style="width: 120px">ໝາຍເຫດ</th> -->
                          <th>ລະຫັດການເງິນ <span class="required">*</span></th>
                          <!-- <th>DR</th>
                          <th>CR</th> -->
                          <th style="width: 50px">ລຶບ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(allocation, index) in allocationLines"
                          :key="allocation.tempId"
                          class="allocation-row"
                        >
                          <td class="line-number">{{ index + 1 }}</td>
                          <td>
                            <!-- If from invoice line -->
                            <div
                              v-if="allocation.invoiceLine"
                              class="invoice-line-display"
                            >
                              <div class="line-description">
                                <strong>{{
                                  allocation.invoiceLine.description || 'N/A'
                                }}</strong>
                              </div>
                              <div class="line-details">
                                ຈຳນວນ:
                                {{
                                  formatNumber(
                                    allocation.invoiceLine.quantity || 0
                                  )
                                }}
                                ×
                                {{
                                  formatCurrency(
                                    allocation.invoiceLine.unitPrice || 0
                                  )
                                }}
                                <span
                                  v-if="
                                    (allocation.invoiceLine.taxRate || 0) > 0
                                  "
                                >
                                  + ພາສີ {{ allocation.invoiceLine.taxRate }}%
                                </span>
                              </div>
                            </div>
                            <!-- Manual entry -->
                            <div v-else>
                              <input
                                v-model="allocation.description"
                                type="text"
                                class="form-control form-control-xs"
                                :class="{
                                  'is-invalid':
                                    errors[`allocation_${index}_description`],
                                }"
                                placeholder="ລາຍລະອຽດການແບ່ງປັນ..."
                              />
                              <div
                                v-if="errors[`allocation_${index}_description`]"
                                class="invalid-feedback"
                              >
                                {{ errors[`allocation_${index}_description`] }}
                              </div>
                            </div>
                          </td>
                          <td class="invoice-line-total">
                            <span v-if="allocation.invoiceLine">
                              {{
                                formatCurrency(allocation.invoiceLine.lineTotal)
                              }}
                            </span>
                            <span v-else class="text-muted">-</span>
                          </td>
                          <td>
                            <input
                              v-model="allocation.allocatedAmount"
                              type="number"
                              step="0.01"
                              min="0"
                              :max="
                                allocation.invoiceLine &&
                                allocation.invoiceLine.lineTotal
                                  ? allocation.invoiceLine.lineTotal
                                  : ''
                              "
                              class="form-control form-control-xs"
                              :class="{
                                'is-invalid':
                                  errors[`allocation_${index}_allocatedAmount`],
                              }"
                              @blur="validateAllocation(allocation, index)"
                              placeholder="0.00"
                            />
                            <div
                              v-if="
                                errors[`allocation_${index}_allocatedAmount`]
                              "
                              class="invalid-feedback"
                            >
                              {{
                                errors[`allocation_${index}_allocatedAmount`]
                              }}
                            </div>
                          </td>
                          <!-- <td>
                            <input
                              v-model="allocation.allocationDate"
                              type="date"
                              class="form-control form-control-xs"
                              :class="{
                                'is-invalid':
                                  errors[`allocation_${index}_allocationDate`],
                              }"
                            />
                          </td> -->
                          <!-- <td>
                            <input
                              v-model="allocation.notes"
                              type="text"
                              class="form-control form-control-xs"
                              placeholder="ໝາຍເຫດ..."
                            />
                          </td> -->
                          <td>
                            <v-autocomplete
                              v-model="allocation.txnId"
                              :items="
                                transactionCodes.filter(
                                  (t) => t.type === 'INCOME' && t.isActive
                                )
                              "
                              item-value="id"
                              item-text="code"
                              :label="
                                loadingTransactionCodes
                                  ? 'ກຳລັງໂຫຼດ...'
                                  : 'ເລືອກລະຫັດການເງິນ'
                              "
                              :loading="loadingTransactionCodes"
                              :disabled="loadingTransactionCodes"
                              :error="
                                !allocation.txnId && errors.settlementLines
                              "
                              dense
                              outlined
                              clearable
                              hide-details="auto"
                              class="mt-0"
                            >
                              <template v-slot:item="{ item }">
                                <v-list-item-content>
                                  <v-list-item-title>
                                    {{ item.code }} - {{ item.description }}
                                  </v-list-item-title>
                                </v-list-item-content>
                              </template>
                              <template v-slot:selection="{ item }">
                                {{ item.code }} - {{ item.description }}
                              </template>
                            </v-autocomplete>
                            <small
                              v-if="!allocation.txnId && errors.settlementLines"
                              class="text-danger d-block"
                            >
                              ກະລຸນາເລືອກລະຫັດການເງິນ
                            </small>
                          </td>

                          <!-- <td>
                            <v-autocomplete
                              v-model="allocation.DRglAccountId"
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
                                {{ item.accountNumber }} -
                                {{ item.accountName }}
                              </template>
                            </v-autocomplete>
                          </td>

                          <td>
                            <v-autocomplete
                              v-model="allocation.CRglAccountId"
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
                                {{ item.accountNumber }} -
                                {{ item.accountName }}
                              </template>
                            </v-autocomplete>
                          </td> -->
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
                    <span>ຍອດທີ່ຮັບ:</span>
                    <span class="amount received">{{
                      formatCurrency(form.totalReceivedAmount)
                    }}</span>
                  </div>
                  <div class="total-item">
                    <span>ລວມການແບ່ງປັນ:</span>
                    <span class="amount allocated">{{
                      formatCurrency(calculatedAllocatedTotal)
                    }}</span>
                  </div>
                  <div class="total-item success-balance">
                    <span>ສະຖານະ:</span>
                    <span class="amount balance balanced">
                      <i class="fas fa-check-circle"></i>
                      ສົມດຸນ
                    </span>
                  </div>
                </div>
                <div class="balance-info">
                  <i class="fas fa-info-circle"></i>
                  <span
                    >ຍອດທີ່ຮັບຈະຖືກຄຳນວນອັດຕະໂນມັດຈາກລວມຍອດການແບ່ງປັນທັງໝົດ</span
                  >
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
            <!-- Add Print Button (only show in edit mode) -->
            <button
              v-if="isEdit"
              @click="printReceipt"
              class="audit-btn"
              type="button"
              title="ພິມໃບຮັບເງິນ"
            >
              <i class="fas fa-print"></i>
              <span class="audit-text">ພິມ</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Invoice Browser Modal (unchanged) -->
    <div
      v-if="showInvoiceBrowser"
      class="modal-overlay"
      @click="closeInvoiceBrowser"
    >
      <div class="invoice-browser-dialog" @click.stop>
        <div class="modal-header">
          <h4 class="modal-title">
            <i class="fas fa-search"></i>
            ເລືອກໃບແຈ້ງໜີ້
          </h4>
          <button
            type="button"
            class="close-button"
            @click="closeInvoiceBrowser"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body">
          <!-- Compact Search Bar -->
          <div class="search-section">
            <div class="search-input-group">
              <i class="fas fa-search search-icon"></i>
              <input
                v-model="invoiceSearchQuery"
                type="text"
                class="form-control search-input"
                placeholder="ຄົ້ນຫາເລກໃບແຈ້ງໜີ້, ຊື່ລູກຄ້າ, ຫຼື ລາຍລະອຽດ..."
              />
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="invoiceBrowserLoading" class="loading-state">
            <div class="spinner"></div>
            <p>ກຳລັງໂຫຼດໃບແຈ້ງໜີ້...</p>
          </div>

          <!-- Compact Invoice List -->
          <div
            v-else-if="searchFilteredInvoices.length > 0"
            class="invoice-list"
          >
            <div class="invoice-table-container">
              <table class="table table-compact">
                <thead>
                  <tr>
                    <th style="width: 120px">ເລກໃບແຈ້ງໜີ້</th>
                    <th style="width: 180px">ລູກຄ້າ</th>
                    <th style="width: 80px">ວັນທີ</th>
                    <th style="width: 80px">ຄົບກຳໜົດ</th>
                    <th style="width: 90px">ຍອດເງິນ</th>
                    <th style="width: 70px">ສະຖານະ</th>
                    <th style="width: 70px">ເລືອກ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="invoice in searchFilteredInvoices"
                    :key="invoice.id"
                    class="invoice-row"
                  >
                    <td>
                      <strong>{{ invoice.invoiceNumber }}</strong>
                    </td>
                    <td>
                      <div class="customer-info">
                        <div class="customer-name">
                          {{ invoice.customer ? invoice.customer.name : 'N/A' }}
                        </div>
                        <div
                          v-if="invoice.customer && invoice.customer.email"
                          class="customer-email"
                        >
                          {{ invoice.customer.email }}
                        </div>
                      </div>
                    </td>
                    <td>{{ formatDate(invoice.invoiceDate) }}</td>
                    <td>{{ formatDate(invoice.dueDate) }}</td>
                    <td class="amount-cell">
                      {{ formatCurrency(invoice.totalAmount) }}
                    </td>
                    <td>
                      <span
                        class="status-badge"
                        :class="`status-${invoice.status}`"
                      >
                        {{ getStatusLabel(invoice.status) }}
                      </span>
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
      </div>
    </div>
  </div>
</template>


<script>
import ARReceivePrinter from '~/components/accounting/ar/receive/voucher'

export default {
  name: 'ReceiveHeaderMaintain',
  components: {
    ARReceivePrinter, // Add this
  },
  props: {
    glAccounts: { type: Array, default: () => [] },
    visible: {
      type: Boolean,
      default: false,
    },
    receipt: {
      type: Object,
      default: null,
    },
    currencies: { type: Array, default: () => [] },
    invoices: {
      type: Array,
      default: () => [],
    },
    users: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      showPrintDialog: false, // Add this if missing
      selectedReceiptForPrint: null, // Add this if missing
      selectedCurrency: null,
      paymentMethods: [],
      transactionCodes: [], // Add this
      loadingTransactionCodes: false, // Add this
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

    // ADD THIS NEW COMPUTED PROPERTY
    hasInvoiceLines() {
      return this.allocationLines.some((line) => line.invoiceLine !== null)
    },

    // UPDATED isFormValid to support manual lines
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
          const hasDescription =
            allocation.invoiceLine || allocation.description
          const hasValidAmount =
            (parseFloat(allocation.allocatedAmount) || 0) > 0
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
          (invoice.client &&
            invoice.client.name.toLowerCase().includes(query)) ||
          (invoice.description &&
            invoice.description.toLowerCase().includes(query))
      )
    },
  },
  async mounted() {
    await this.loadTransactionCodes() // Add this
    await this.loadPaymentMethods() // Add this
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
            if (
              !allocation.allocationDate ||
              allocation.allocationDate === ''
            ) {
              allocation.allocationDate = newDate
            }
          })
        }
      },
    },
  },

  methods: {
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

      // Prepare complete receipt data
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
          txnId: line.txnId,
          DRglAccountId: line.DRglAccountId,
          CRglAccountId: line.CRglAccountId,
          notes: line.notes || '',
        })),
        inputter: {
          cus_name: this.user?.cus_name || this.user?.username || '-',
        },
      }

      console.log('📊 Receipt data prepared:', receiptData)

      // Set data and open dialog
      this.selectedReceiptForPrint = receiptData

      this.$nextTick(() => {
        console.log('🚀 Opening print dialog...')
        this.showPrintDialog = true
        console.log('✅ showPrintDialog set to:', this.showPrintDialog)
      })
    },
    async requestSequence() {
      try {
        const { data } = await this.$axios.get(
          '/api/ar-receive-headers/sequence'
        )

        if (data.success) {
          // Assign the generated invoice number to your form
          this.form.receiptNumber = data.data.invoiceNumber

          // Optional: Show success message
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
    onCurrencyChange() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(
          (c) => c.id === this.form.currencyId
        )
        // Update the exchange rate based on
        console.info(`Currency structure ${JSON.stringify(this.currencies)}`)
        this.form.exchangeRate = this.currencies.find(
          (c) => c.id === this.form.currencyId
        ).rate
      } else {
        this.selectedCurrency = null
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
    addManualLine() {
      const newLine = {
        tempId: this.nextTempId++,
        lineNumber: this.allocationLines.length + 1,
        invoiceLineId: null, // No invoice line reference for manual entries
        invoiceLine: null, // No invoice line data
        description: '', // User will fill this
        allocatedAmount: 0,
        DRglAccountId: null,
        CRglAccountId: null,
        txnId: null, // Add this
        allocationDate:
          this.form.receivedDate || new Date().toISOString().split('T')[0],
        notes: '',
        isManual: true, // Flag to indicate manual entry
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

    // Enhanced updateSelectedInvoice method with better debugging
    async updateSelectedInvoice() {
      console.log('🔍 updateSelectedInvoice called')
      console.log('📝 Current form.invoiceHeaderId:', this.form.invoiceHeaderId)
      console.log('📋 Available invoices:', this.invoices.length)

      // Clear previous selection
      this.selectedInvoice = null

      if (!this.form.invoiceHeaderId) {
        console.log('❌ No invoice selected')
        if (!this.isEdit) {
          this.allocationLines = []
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
        console.log(
          '❌ Invoice not found in main invoices array, trying to load from API...'
        )
        await this.loadInvoiceById(invoiceId)
      }

      if (!this.selectedInvoice) {
        console.log('❌ Could not find or load selected invoice')
        this.showToast('ບໍ່ພົບໃບແຈ້ງໜີ້ທີ່ເລືອກ', 'error')
        return
      }

      console.log(
        '✅ Selected invoice found:',
        this.selectedInvoice.invoiceNumber
      )
      console.log(
        '📄 Invoice lines:',
        this.selectedInvoice.invoiceLines?.length || 0
      )

      // Check if invoice lines exist and load if needed
      if (
        !this.selectedInvoice.invoiceLines ||
        this.selectedInvoice.invoiceLines.length === 0
      ) {
        console.log('🔄 Loading invoice lines...')
        await this.loadSelectedInvoiceLines()
      }

      // Create allocation lines for new records only
      if (
        this.selectedInvoice.invoiceLines &&
        this.selectedInvoice.invoiceLines.length > 0
      ) {
        console.log(
          '✅ Creating allocation lines from',
          this.selectedInvoice.invoiceLines.length,
          'invoice lines'
        )

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

      console.log(
        '📊 Final allocation lines count:',
        this.allocationLines.length
      )
    },

    // Method to load invoice by ID if not found in main array
    async loadInvoiceById(invoiceId) {
      try {
        console.log('🔄 Loading invoice by ID:', invoiceId)

        const { data } = await this.$axios.get(
          `/api/ar-invoices/${invoiceId}`,
          {
            params: {
              include: ['client', 'currency', 'invoiceLines'],
            },
          }
        )

        console.log('📥 API response for single invoice:', data)

        if (data.success && data.data) {
          this.selectedInvoice = data.data
          console.log(
            '✅ Invoice loaded successfully:',
            this.selectedInvoice.invoiceNumber
          )
        } else if (data.invoiceNumber) {
          // Handle case where response structure is different
          this.selectedInvoice = data
          console.log(
            '✅ Invoice loaded (alt structure):',
            this.selectedInvoice.invoiceNumber
          )
        }
      } catch (error) {
        console.error('❌ Error loading invoice by ID:', error)
        this.showToast('ມີປັນຫາໃນການໂຫຼດໃບແຈ້ງໜີ້', 'error')
      }
    },

    // Better invoice lines loading with debugging
    async loadSelectedInvoiceLines() {
      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice to load lines for')
        return
      }

      try {
        console.log(
          '🔄 Loading invoice lines for:',
          this.selectedInvoice.invoiceNumber
        )

        const { data } = await this.$axios.get(
          `/api/ar-invoice-lines/by-header/${this.selectedInvoice.id}`
        )

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
      } catch (error) {
        console.error('❌ Error loading invoice lines:', error)
        this.selectedInvoice.invoiceLines = []
        this.showToast('ມີປັນຫາໃນການໂຫຼດລາຍການໃບແຈ້ງໜີ້', 'error')
      }
    },

    // Better allocation lines creation with debugging
    createAllocationLinesFromInvoice() {
      console.log('🔧 createAllocationLinesFromInvoice called')

      if (!this.selectedInvoice) {
        console.log('❌ No selected invoice')
        return
      }

      if (
        !this.selectedInvoice.invoiceLines ||
        this.selectedInvoice.invoiceLines.length === 0
      ) {
        console.log('❌ No invoice lines available')
        this.allocationLines = []
        return
      }

      console.log(
        '✅ Creating allocation lines from',
        this.selectedInvoice.invoiceLines.length,
        'invoice lines'
      )

      this.allocationLines = this.selectedInvoice.invoiceLines.map(
        (line, index) => {
          const allocation = {
            tempId: this.nextTempId++,
            lineNumber: index + 1,
            invoiceLineId: line.id,
            invoiceLine: line, // Store the full line object for display
            allocatedAmount: 0, // Default to 0, user will fill this
            DRglAccountId: null,
            CRglAccountId: null,
            txnId: null, // Add this
            allocationDate:
              this.form.receivedDate || new Date().toISOString().split('T')[0],
            notes: '',
          }

          console.log(`📝 Created allocation ${index + 1}:`, {
            lineNumber: allocation.lineNumber,
            invoiceLineId: allocation.invoiceLineId,
            description: line.description,
            lineTotal: line.lineTotal,
          })

          return allocation
        }
      )

      console.log(
        '🎉 Successfully created',
        this.allocationLines.length,
        'allocation lines'
      )

      // Force reactivity update
      this.$forceUpdate()
    },

    // Better invoice change handler
    async onInvoiceChange() {
      console.log('🔄 onInvoiceChange triggered')
      await this.updateSelectedInvoice()
      this.clearFieldError('invoiceHeaderId')

      // Switch to allocations tab if lines were created
      if (this.allocationLines.length > 0) {
        console.log('🔄 Switching to allocations tab')
        this.$nextTick(() => {
          this.activeTab = 'allocations'
        })
      }
    },

    // Better invoice browser with full data loading
    async openInvoiceBrowser() {
      console.log('🔄 Opening invoice browser')
      this.showInvoiceBrowser = true
      this.invoiceBrowserLoading = true
      this.invoiceSearchQuery = ''

      try {
        const { data } = await this.$axios.get('/api/ar-invoices', {
          params: {
            status: ['draft', 'sent'],
            include: ['client', 'currency', 'invoiceLines'], // Include all needed data
            limit: 100, // Increase limit to see more invoices
          },
        })

        console.log('📥 Invoice browser API response:', data)

        // Handle the nested structure in your data
        if (
          data.success &&
          data.data &&
          data.data.invoices &&
          Array.isArray(data.data.invoices)
        ) {
          this.filteredInvoices = data.data.invoices
          console.log(
            '✅ Loaded',
            this.filteredInvoices.length,
            'invoices for browser'
          )
        } else if (data.success && data.data && Array.isArray(data.data)) {
          this.filteredInvoices = data.data
          console.log(
            '✅ Loaded',
            this.filteredInvoices.length,
            'invoices (alt structure)'
          )
        } else if (Array.isArray(data)) {
          this.filteredInvoices = data
          console.log(
            '✅ Loaded',
            this.filteredInvoices.length,
            'invoices (direct array)'
          )
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

    // Better invoice selection from browser
    async selectInvoiceFromBrowser(invoice) {
      console.log('🎯 Selecting invoice from browser:', invoice.invoiceNumber)

      // Set the form value
      this.form.invoiceHeaderId = invoice.id

      // Add the invoice to main invoices array if not present
      const existingIndex = this.invoices.findIndex(
        (inv) => inv.id === invoice.id
      )
      if (existingIndex === -1) {
        console.log('➕ Adding invoice to main array')
        this.invoices.push(invoice)
      } else {
        console.log('🔄 Updating existing invoice in main array')
        this.invoices[existingIndex] = invoice
      }

      // Close browser and trigger change
      this.closeInvoiceBrowser()
      await this.onInvoiceChange()
      this.clearFieldError('invoiceHeaderId')
    },

    // Rest of your existing methods remain the same...
    async initializeDialog() {
      this.activeTab = 'header'
      this.clearErrors()

      if (this.receipt) {
        this.form = {
          id: this.receipt.id,
          receiptNumber: this.receipt.receiptNumber,
          bookingDate: this.receipt.bookingDate
            ? this.receipt.bookingDate.split('T')[0]
            : '',
          receivedDate: this.receipt.receivedDate
            ? this.receipt.receivedDate.split('T')[0]
            : '',
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

        // Set default dates to today
        const today = new Date().toISOString().split('T')[0]
        this.form.bookingDate = today
        this.form.receivedDate = today

        // Initialize with empty allocation lines
        this.allocationLines = []

        // Set default user
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
      this.selectedReceiptForPrint = null // Update this
      this.clearErrors()
      this.activeTab = 'header'
      this.formLoading = false
      this.saving = false
      this.showInvoiceBrowser = false
      this.showPrintDialog = false // Update this
      this.filteredInvoices = []
      this.invoiceSearchQuery = ''
    },

    async loadAllocationLines(receiptId) {
      try {
        const { data } = await this.$axios.get(
          `/api/ar-receive-lines/by-header/${receiptId}`
        )
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

    closeInvoiceBrowser() {
      this.showInvoiceBrowser = false
      this.filteredInvoices = []
      this.invoiceSearchQuery = ''
    },

    // Allocation Helper Methods
    allocateFullAmount() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return

      this.allocationLines.forEach((allocation) => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0
          allocation.allocatedAmount = lineTotal.toFixed(2)
        }
      })
    },

    allocateEqually() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return

      const totalInvoice = parseFloat(this.selectedInvoice.totalAmount) || 0
      const amountPerLine = totalInvoice / this.allocationLines.length

      this.allocationLines.forEach((allocation) => {
        allocation.allocatedAmount = amountPerLine.toFixed(2)
      })
    },

    allocateProportionally() {
      if (this.allocationLines.length === 0 || !this.selectedInvoice) return

      this.allocationLines.forEach((allocation) => {
        if (allocation.invoiceLine) {
          const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0
          allocation.allocatedAmount = lineTotal.toFixed(2)
        }
      })
    },

    clearAllAllocations() {
      this.allocationLines.forEach((allocation) => {
        allocation.allocatedAmount = 0
      })
    },

    getRemainingAmount(allocation) {
      if (!allocation.invoiceLine) return 0 // No remaining amount for manual lines
      const lineTotal = parseFloat(allocation.invoiceLine.lineTotal) || 0
      const allocated = parseFloat(allocation.allocatedAmount) || 0
      return lineTotal - allocated
    },
    isFullyAllocated(allocation) {
      if (!allocation.invoiceLine) return false // Manual lines don't have full allocation concept
      return this.getRemainingAmount(allocation) === 0
    },
    isOverAllocated(allocation) {
      if (!allocation.invoiceLine) return false // Manual lines can't be over-allocated
      return this.getRemainingAmount(allocation) < 0
    },

    validateAllocation(allocation, index) {
      // Only validate max amount for invoice lines
      if (allocation.invoiceLine) {
        const amount = parseFloat(allocation.allocatedAmount) || 0
        const maxAllowed = parseFloat(allocation.invoiceLine.lineTotal) || 0

        if (amount > maxAllowed) {
          this.errors[
            `allocation_${index}_allocatedAmount`
          ] = `ຈຳນວນເກີນກວ່າທີ່ເຫຼືອ (ສູງສຸດ: ${this.formatCurrency(
            maxAllowed
          )})`
        } else {
          this.clearFieldError(`allocation_${index}_allocatedAmount`)
        }
      } else {
        // For manual lines, just ensure amount is positive
        const amount = parseFloat(allocation.allocatedAmount) || 0
        if (amount <= 0) {
          this.errors[`allocation_${index}_allocatedAmount`] =
            'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0'
        } else {
          this.clearFieldError(`allocation_${index}_allocatedAmount`)
        }
      }
    },

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

          // Validate description for manual entries
          if (!allocation.invoiceLine && !allocation.description) {
            this.errors[`allocation_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດ'
          }

          const allocatedAmount = parseFloat(allocation.allocatedAmount) || 0

          if (allocatedAmount <= 0) {
            this.errors[`allocation_${i}_allocatedAmount`] =
              'ຍອດແບ່ງປັນຕ້ອງຫຼາຍກວ່າ 0'
          } else {
            hasValidAllocation = true
            totalAllocated += allocatedAmount
          }

          if (!allocation.allocationDate) {
            this.errors[`allocation_${i}_allocationDate`] =
              'ກະລຸນາໃສ່ວັນທີແບ່ງປັນ'
          }

          // Only validate over-allocation for invoice lines
          if (allocation.invoiceLine && this.isOverAllocated(allocation)) {
            this.errors[`allocation_${i}_allocatedAmount`] =
              'ຍອດແບ່ງປັນເກີນກວ່າທີ່ເຫຼືອ'
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
          id: allocation.id || null, // Include id if editing existing line
          tempId: allocation.tempId,
          lineNumber: index + 1,
          invoiceLineId: allocation.invoiceLineId || null, // null for manual entries
          description: allocation.invoiceLine
            ? allocation.invoiceLine.description
            : allocation.description, // Use manual description if no invoice line
          allocatedAmount: parseFloat(allocation.allocatedAmount) || 0,
          allocationDate: allocation.allocationDate,
          DRglAccountId: allocation.DRglAccountId || null,
          CRglAccountId: allocation.CRglAccountId || null,
          txnId: allocation.txnId || null, // Add this
          notes: allocation.notes || '',
          isManual: !allocation.invoiceLineId, // Flag manual entries
        })),
      }

      console.log('💾 Submitting form data:', formData)
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

    // Utility Methods
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
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
/* Maximized dialog with compact components */
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


.invoice-browser-dialog {
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 90vw;
  height: 80vh;
  max-height: 80vh;
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
  background: linear-gradient(135deg, #A12F8D 0%, #337555 100%);
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
  border-top: 3px solid #28a745;
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

.receipt-form {
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
  flex-wrap: wrap;
  gap: 10px;
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
  color: #28a745;
  font-size: 13px;
}

.line-count {
  background: #28a745;
  color: white;
  border-radius: 10px;
  padding: 2px 8px;
  font-size: 11px;
  min-width: 20px;
  text-align: center;
  margin-left: 4px;
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
  border-color: #28a745;
  box-shadow: 0 0 0 2px rgba(40, 167, 69, 0.1);
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

/* Auto-calculated field styles */
.auto-calculated-field {
  background-color: #f8f9fa !important;
  border-style: dashed !important;
  color: #495057 !important;
  font-weight: 600;
  cursor: not-allowed;
}

.auto-calculated-field:disabled {
  opacity: 0.8;
}

.form-group label.auto-calculated {
  color: #28a745;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.form-text.text-muted {
  font-size: 11px;
  color: #6c757d !important;
  margin-top: 3px;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Invoice Selector */
.invoice-selector {
  display: flex;
  gap: 8px;
}

.invoice-selector select {
  flex: 1;
}

/* Quick Allocation Actions */
.quick-allocation-actions {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

/* Empty States */
.no-invoice-state,
.no-lines-state,
.no-results-state {
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

.empty-content p {
  color: #999;
  margin-bottom: 15px;
  font-size: 13px;
}

.allocation-notice {
  background: #e7f3ff;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border-left: 3px solid #007bff;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #495057;
}

/* Allocation Table */
.allocation-table-container,
.invoice-table-container {
  border: 1px solid #e9ecef;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 12px;
  max-height: 400px;
  overflow-y: auto;
}

.allocation-table .table,
.invoice-table-container .table {
  margin: 0;
  border-collapse: collapse;
  width: 100%;
}

.table-compact {
  font-size: 12px;
}

.allocation-table .table th,
.invoice-table-container .table th {
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

.allocation-table .table td,
.invoice-table-container .table td {
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

.invoice-line-display {
  line-height: 1.3;
}

.line-description {
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
  font-size: 12px;
}

.line-details {
  font-size: 10px;
  color: #666;
}

.invoice-line-total {
  text-align: right;
  font-weight: 600;
  color: #28a745;
  font-size: 11px;
}

.remaining-amount {
  font-weight: 600;
  text-align: right;
  color: #28a745;
  font-size: 11px;
}

.over-allocated {
  color: #dc3545 !important;
}

.fully-allocated {
  color: #6c757d !important;
}

.allocation-row,
.invoice-row {
  transition: background-color 0.2s;
}

.allocation-row:hover,
.invoice-row:hover {
  background-color: rgba(40, 167, 69, 0.05);
}

/* Compact Amount Summary */
.amount-summary {
  background: #f8f9fa;
  padding: 12px 20px;
  border-radius: 0;
  border-top: 2px solid #28a745;
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

.total-item.success-balance {
  background: #d4edda;
  border-radius: 4px;
  padding: 6px 8px;
  grid-column: 1 / -1;
}

.total-item .amount {
  font-weight: 600;
  color: #333;
}

.total-item .amount.received {
  color: #28a745;
}

.total-item .amount.allocated {
  color: #007bff;
}

.amount.balanced {
  color: #155724 !important;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

.balance-info {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding: 8px;
  background: #e7f3ff;
  border: 1px solid #bee5eb;
  border-radius: 4px;
  color: #0c5460;
  font-size: 12px;
}

/* Search Section */
.search-section {
  padding: 15px;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
}

.search-input-group {
  position: relative;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 14px;
}

.search-input {
  padding-left: 35px;
  font-size: 14px;
  border-radius: 6px;
}

.invoice-list {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}

.customer-info {
  line-height: 1.3;
}

.customer-name {
  font-weight: 500;
  color: #333;
  font-size: 12px;
}

.customer-email {
  font-size: 10px;
  color: #666;
}

.amount-cell {
  text-align: right;
  font-weight: 600;
  color: #28a745;
  font-size: 11px;
}

.status-badge {
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
}

.status-draft {
  background: #ffeaa7;
  color: #fdcb6e;
}
.status-sent {
  background: #74b9ff;
  color: #0984e3;
}
.status-paid {
  background: #00b894;
  color: #00a085;
}
.status-overdue {
  background: #ff7675;
  color: #d63031;
}
.status-cancelled {
  background: #636e72;
  color: #2d3436;
}

/* Button Styles */
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

.btn-xs {
  padding: 3px 8px;
  font-size: 10px;
}

.btn-primary {
  background: #28a745;
  color: white;
}
.btn-secondary {
  background: #6c757d;
  color: white;
}
.btn-outline-primary {
  background: white;
  color: #007bff;
  border: 1px solid #007bff;
}
.btn-outline-success {
  background: white;
  color: #28a745;
  border: 1px solid #28a745;
}
.btn-outline-info {
  background: white;
  color: #17a2b8;
  border: 1px solid #17a2b8;
}
.btn-outline-warning {
  background: white;
  color: #ffc107;
  border: 1px solid #ffc107;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info {
  display: flex;
  align-items: center;
}

.result-count {
  color: #666;
  font-size: 12px;
}

.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .invoice-browser-dialog {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
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

  .quick-allocation-actions {
    width: 100%;
    justify-content: flex-start;
  }

  .allocation-table-container,
  .invoice-table-container {
    overflow-x: auto;
  }

  .allocation-table .table,
  .invoice-table-container .table {
    min-width: 600px;
  }

  .footer-actions {
    flex-direction: column;
  }

  .footer-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .invoice-selector {
    flex-direction: column;
    gap: 8px;
  }

  .search-input-group {
    max-width: 100%;
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

  .quick-allocation-actions {
    flex-direction: column;
    width: 100%;
    gap: 6px;
  }

  .quick-allocation-actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>