<template>
  <div v-if="visible" class="modal-overlay" @click.self="handleOverlayClick">
    <div class="settlement-dialog" @click.stop>
      <!-- Header -->
      <div class="dialog-header">
        <h4>{{ isEditMode ? 'ແກ້ໄຂການຊຳລະ' : 'ສ້າງການຊຳລະໃໝ່' }}</h4>
        <div class="header-actions">
          <button
            v-if="isEditMode"
            @click="openAuditDialog"
            class="audit-btn"
            type="button"
            title="ເບິ່ງປະຫວັດການດຳເນີນງານ"
          >
            <i class="fas fa-history"></i>
            <span class="audit-text">ປະຫວັດ</span>
          </button>
          <button @click="closeDialog" class="close-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- Body -->
      <div class="dialog-body">
        <form @submit.prevent="submitForm">
          <!-- Basic Settlement Information -->
          <div class="form-section">
            <h5 class="section-title">
              <i class="fas fa-credit-card"></i>
              ຂໍ້ມູນການຊຳລະ
            </h5>
            <div class="form-grid">
              <div class="form-group">
                <label>ວັນທີຊຳລະ <span class="required">*</span></label>
                <input
                  v-model="form.settlementDate"
                  type="date"
                  class="form-control"
                  :class="{ 'is-invalid': errors.settlementDate }"
                  required
                />
                <div v-if="errors.settlementDate" class="invalid-feedback">
                  {{ errors.settlementDate }}
                </div>
              </div>

              <div class="form-group">
                <label for="paymentMethodId" class="required"
                  >ວິທີການຊຳລະ</label
                >
                <v-autocomplete
                  id="paymentMethodId"
                  v-model="form.paymentMethodId"
                  :items="paymentMethods"
                  item-value="id"
                  item-text="payment_name"
                  :error="!!errors.paymentMethodId"
                  :error-messages="errors.paymentMethodId"
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
                <label for="currencyId" class="required">ສະກຸນເງິນ</label>
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

              <div class="form-group">
                <label for="bankAccountId">ບັນຊີທະນາຄານ</label>
                <v-autocomplete
                  id="bankAccountId"
                  v-model="form.bankAccountId"
                  :items="bankAccounts"
                  item-value="id"
                  item-text="accountNumber"
                  :error="!!errors.bankAccountId"
                  :error-messages="errors.bankAccountId"
                  dense
                  outlined
                  clearable
                  hide-details="auto"
                  placeholder="ເລືອກບັນຊີທະນາຄານ"
                >
                  <template v-slot:item="{ item }">
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item.accountNumber }} - {{ item.bankName }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <template v-slot:selection="{ item }">
                    {{ item.accountNumber }} - {{ item.bankName }}
                  </template>
                </v-autocomplete>
              </div>

              <div class="form-group">
                <label>ອ້າງອີງ</label>
                <input
                  v-model="form.reference"
                  type="text"
                  class="form-control"
                  maxlength="100"
                  placeholder="ຫມາຍເລກອ້າງອີງ"
                />
              </div>

              <div class="form-group span-2">
                <label>ຄຳອະທິບາຍ</label>
                <textarea
                  v-model="form.description"
                  class="form-control"
                  rows="2"
                  placeholder="ຄຳອະທິບາຍການຊຳລະ"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Settlement Lines Section -->
          <div class="form-section">
            <div class="section-header">
              <h5 class="section-title">
                <i class="fas fa-list"></i>
                ລາຍການຈັດສັນ
              </h5>
              <div class="section-actions">
                <button
                  type="button"
                  @click="openMOUDialog"
                  class="btn btn-info btn-sm"
                  :disabled="!canModifyAllocations"
                >
                  <i class="fas fa-file-contract"></i> ເພີ່ມຈາກ MOU
                </button>
                <button
                  type="button"
                  @click="addManualLine"
                  class="btn btn-success btn-sm"
                  :disabled="!canModifyAllocations"
                >
                  <i class="fas fa-plus"></i> ເພີ່ມລາຍການ
                </button>
                <button
                  type="button"
                  @click="showInvoiceSelector = true"
                  class="btn btn-primary btn-sm"
                  :disabled="!canModifyAllocations"
                >
                  <i class="fas fa-file-invoice"></i> ເລືອກຈາກໃບແຈ້ງໜີ້
                </button>
                <div class="allocation-info">
                  <span class="info-item">
                    ຈັດສັນ:
                    <strong>{{ formatCurrency(totalAllocated) }}</strong>
                  </span>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-if="settlementLines.length === 0" class="no-invoices">
              <i class="fas fa-clipboard-list"></i>
              <p>ຍັງບໍ່ມີລາຍການຈັດສັນ</p>
              <div class="action-buttons">
                <button
                  type="button"
                  class="btn btn-info btn-sm"
                  @click="openMOUDialog"
                >
                  <i class="fas fa-file-contract"></i> ເພີ່ມຈາກ MOU
                </button>
                <button
                  type="button"
                  class="btn btn-success btn-sm"
                  @click="addManualLine"
                >
                  <i class="fas fa-plus-circle"></i> ເພີ່ມລາຍການດ້ວຍມື
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  @click="showInvoiceSelector = true"
                >
                  <i class="fas fa-file-invoice"></i> ເລືອກຈາກໃບແຈ້ງໜີ້
                </button>
              </div>
            </div>

            <!-- Settlement Lines Table -->
            <div v-else class="settlement-lines">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th style="width: 20px">#</th>
                      <th>ປະເພດ</th>
                      <th>ເລກທີໃບແຈ້ງໜີ້</th>
                      <th>{{ formLabel.vendor }}</th>
                      <th>ລະຫັດການເງິນ <span class="required">*</span></th>
                      <th>ຄຳອະທິບາຍ</th>
                      <th>DR</th>
                      <th>CR</th>
                      <th class="text-right">ຈຳນວນເງິນ</th>
                      <th style="width: 40px" class="text-center">ລຶບ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(line, index) in settlementLines"
                      :key="line.tempId"
                    >
                      <!-- Line Number -->
                      <td class="line-number">{{ index + 1 }}</td>

                      <!-- Type Badge -->
                      <td>
                        <span :class="['type-badge', line.type]">
                          {{
                            line.type === 'invoice'
                              ? 'ໃບແຈ້ງໜີ້'
                              : line.type === 'mou'
                              ? 'MOU'
                              : 'ດ້ວຍມື'
                          }}
                        </span>
                      </td>

                      <!-- Invoice Number -->
                      <td>
                        <input
                          v-if="line.type === 'manual'"
                          v-model="line.invoiceNumber"
                          type="text"
                          class="form-control form-control-xs"
                          placeholder="ເລກທີໃບແຈ້ງໜີ້"
                          :disabled="!canModifyAllocations"
                        />
                        <span
                          v-else
                          class="text-truncate"
                          :title="line.invoiceNumber"
                        >
                          {{ line.invoiceNumber || '-' }}
                        </span>
                      </td>

                      <!-- Agency -->
                      <td>
                        <v-autocomplete
                          v-if="line.type === 'manual'"
                          v-model="line.agencyId"
                          :items="agencies"
                          item-value="id"
                          item-text="agencyName"
                          :disabled="!canModifyAllocations"
                          dense
                          outlined
                          hide-details
                          :placeholder="formLabel.vendor"
                          class="table-autocomplete"
                        >
                          <template v-slot:item="{ item }">
                            <v-list-item-content>
                              <v-list-item-title>
                                {{ item.agencyName }} - {{ item.agencyCode }}
                              </v-list-item-title>
                            </v-list-item-content>
                          </template>
                          <template v-slot:selection="{ item }">
                            {{ item.agencyName }} - {{ item.agencyCode }}
                          </template>
                        </v-autocomplete>
                        <span
                          v-else
                          class="text-truncate"
                          :title="line.agencyName || line.agency?.agencyName"
                        >
                          {{
                            line.agencyName || line.agency?.agencyName || '-'
                          }}
                        </span>
                      </td>

                      <!-- Transaction Code Dropdown -->
                      <td>
                        <v-autocomplete
                          v-model="line.txnId"
                          :items="
                            transactionCodes.filter(
                              (t) => t.type === 'EXPENSE' && t.isActive
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
                          :disabled="
                            !canModifyAllocations || loadingTransactionCodes
                          "
                          :error="!line.txnId && errors.settlementLines"
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
                          v-if="!line.txnId && errors.settlementLines"
                          class="text-danger d-block mt-1"
                        >
                          ກະລຸນາເລືອກລະຫັດການເງິນ
                        </small>
                      </td>

                      <!-- Description -->
                      <td>
                        <input
                          v-model="line.description"
                          type="text"
                          class="form-control form-control-xs"
                          placeholder="ຄຳອະທິບາຍ"
                          :disabled="!canModifyAllocations"
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

                      <!-- Amount -->
                      <td>
                        <input
                          v-model.number="line.amount"
                          type="number"
                          step="0.01"
                          min="0"
                          class="form-control form-control-xs text-right"
                          :disabled="!canModifyAllocations"
                          @input="$forceUpdate()"
                        />
                      </td>

                      <!-- Delete Button -->
                      <td class="text-center">
                        <button
                          type="button"
                          @click="removeLine(index)"
                          class="btn btn-xs btn-danger"
                          :disabled="!canModifyAllocations"
                          title="ລຶບລາຍການ"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="allocation-summary">
                <div class="totals-inline">
                  <span class="total-item">
                    ລວມຈຳນວນເງິນຊຳລະ:
                    <strong>{{ formatCurrency(totalAllocated) }}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Approval Section -->
          <div v-if="showApprovalSection" class="form-section">
            <h5 class="section-title">
              <i class="fas fa-check-circle"></i>
              ການອະນຸມັດ
            </h5>
            <div class="form-grid">
              <div class="form-group">
                <label>ຜູ້ອະນຸມັດ</label>
                <input
                  v-model="checkerName"
                  type="text"
                  class="form-control"
                  disabled
                />
              </div>
              <div class="form-group">
                <label>ໝາຍເຫດການອະນຸມັດ</label>
                <textarea
                  v-model="form.approvalNote"
                  class="form-control"
                  rows="2"
                  placeholder="ໝາຍເຫດການອະນຸມັດ"
                  :disabled="!canApprove"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Footer -->
      <div class="dialog-footer">
        <div class="footer-actions">
          <button type="button" @click="closeDialog" class="btn btn-secondary">
            <i class="fas fa-times"></i> ຍົກເລີກ
          </button>
          <button
            v-if="canApprove && form.status === 'pending'"
            type="button"
            @click="approveSettlement"
            class="btn btn-success"
            :disabled="isSubmitting"
          >
            <i class="fas fa-check"></i> ອະນຸມັດ
          </button>
          <button
            v-if="canComplete && ['pending', 'approved'].includes(form.status)"
            type="button"
            @click="completeSettlement"
            class="btn btn-info"
            :disabled="isSubmitting"
          >
            <i class="fas fa-check-circle"></i> ສຳເລັດ
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isSubmitting || !canModify"
            @click="submitForm"
          >
            <i class="fas fa-save"></i>
            {{
              isSubmitting ? 'ກຳລັງບັນທຶກ...' : isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ'
            }}
          </button>
          <!-- Add Print Button -->
          <button
            v-if="isEditMode"
            type="button"
            @click="printSettlement(settlement)"
            class="btn btn-info"
          >
            <i class="fas fa-print"></i> ພິມໃບສຳຄັນ
          </button>
        </div>
      </div>
    </div>

    <!-- Invoice Selector Modal -->
    <v-dialog
      v-model="showInvoiceSelector"
      max-width="900px"
      persistent
      scrollable
    >
      <v-card>
        <v-card-title>
          <span>ເລືອກໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="closeInvoiceSelector">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-row dense class="mb-3">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="invoiceSearchTerm"
                label="ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້"
                outlined
                dense
                clearable
                prepend-inner-icon="mdi-magnify"
                @input="filterInvoices"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="selectedAgencyFilter"
                :items="agencyFilterOptions"
                item-text="name"
                item-value="id"
                label="ຕົວແທນ"
                outlined
                dense
                clearable
                prepend-inner-icon="mdi-account"
                @change="filterInvoices"
              />
            </v-col>
          </v-row>

          <v-data-table
            :headers="invoiceTableHeaders"
            :items="filteredInvoices"
            :items-per-page="10"
            class="elevation-1"
            show-select
            v-model="tempSelectedInvoices"
            item-key="id"
          >
            <template v-slot:item.invoiceNumber="{ item }">
              <span class="font-weight-medium">{{ item.invoiceNumber }}</span>
            </template>

            <template v-slot:item.agency="{ item }">
              {{ getAgencyName(item) }}
            </template>

            <template v-slot:item.dueDate="{ item }">
              {{ formatDate(item.dueDate) }}
            </template>

            <template v-slot:item.outstandingAmount="{ item }">
              <span class="font-weight-bold">
                {{ formatCurrency(item.outstandingAmount) }}
              </span>
            </template>
          </v-data-table>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeInvoiceSelector">ຍົກເລີກ</v-btn>
          <v-btn color="primary" text @click="confirmInvoiceSelection">
            ຢືນຢັນການເລືອກ ({{ tempSelectedInvoices.length }})
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- MOU Invoice Dialog -->
    <v-dialog v-model="showMOUDialog" max-width="1200px" persistent scrollable>
      <v-card>
        <v-card-title class="primary white--text">
          <v-icon left color="white">mdi-file-contract</v-icon>
          <span>Create Invoice from MOU</span>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="closeMOUDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pt-4">
          <browse-mou-invoice-dialog
            :visible="showMOUDialog"
            @close="closeMOUDialog"
            @invoice-generated="onInvoiceGenerated"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Settlement Audit Dialog -->
    <settlement-audit-dialog
      :visible="showAuditDialog"
      :settlement-id="form.id"
      :settlement-info="settlementInfoForAudit"
      @close="closeAuditDialog"
    />
    <payment-voucher-printer
      :visible="showVoucherPrinter"
      :voucher-data="selectedSettlement"
      :payment-methods="paymentMethods"
      :bank-accounts="bankAccounts"
      :transaction-codes="transactionCodes"
      :gl-accounts="glAccounts"
      @close="showVoucherPrinter = false"
    />
  </div>
</template>

<script>
import SettlementAuditDialog from '~/components/accounting/ap/settlement/audit'
import BrowseMouInvoiceDialog from '~/components/accounting/ap/settlement/browsemou'
import PaymentVoucherPrinter from '~/components/accounting/ap/settlement/voucher'
export default {
  name: 'SettlementDialog',

  components: {
    SettlementAuditDialog,
    BrowseMouInvoiceDialog,
    PaymentVoucherPrinter,
  },

  props: {
    glAccounts: { type: Array, default: () => [] },
    currencies: { type: Array, default: () => [] },
    visible: { type: Boolean, default: false },
    settlement: { type: Object, default: null },
    outstandingInvoices: { type: Array, default: () => [] },
  },

  data() {
    return {
      showVoucherPrinter: false,
      selectedSettlement: null,
      transactionCodes: [], // Add this
      loadingTransactionCodes: false, // Add this
      formLabel: {
        vendor: 'ເລືອກກະຊວງ', //'ເລືອກຕົວແທນ',
        model: '',
      },
      form: {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        currencyId: null,
        paymentMethodId: '',
        exchangeRate: 1.0,
        bankAccountId: null,
        reference: '',
        description: '',
        status: 'draft',
        makerId: null,
        checkerId: null,
        approvalNote: '',
      },
      selectedCurrency: null,
      settlementLines: [],
      tempSelectedInvoices: [],
      paymentMethods: [],
      bankAccounts: [],
      agencies: [],
      errors: {},
      isSubmitting: false,
      showInvoiceSelector: false,
      showMOUDialog: false,
      showAuditDialog: false,
      invoiceSearchTerm: '',
      selectedAgencyFilter: '',
      filteredInvoices: [],
      lineIdCounter: 1,
      loadingAgencies: false,
      invoiceTableHeaders: [
        { text: 'ເລກທີໃບແຈ້ງໜີ້', value: 'invoiceNumber', sortable: true },
        { text: 'ຕົວແທນ', value: 'agency', sortable: false },
        { text: 'ວັນທີຄົບກຳນົດ', value: 'dueDate', sortable: true },
        {
          text: 'ຍອດຄ້າງຈ່າຍ',
          value: 'outstandingAmount',
          sortable: true,
          align: 'end',
        },
      ],
    }
  },

  computed: {
    user() {
      return this.$auth.user || {}
    },

    isEditMode() {
      return !!(this.settlement && this.settlement.id)
    },

    canModify() {
      return ['draft', 'pending'].includes(this.form.status)
    },

    canModifyAllocations() {
      return this.canModify
    },

    canApprove() {
      return this.user.canApproveSettlements && this.form.status === 'pending'
    },

    canComplete() {
      return (
        this.user.canCompleteSettlements &&
        ['pending', 'approved'].includes(this.form.status)
      )
    },

    showApprovalSection() {
      return (
        this.isEditMode &&
        ['pending', 'approved', 'completed'].includes(this.form.status)
      )
    },

    totalAllocated() {
      return this.settlementLines.reduce(
        (sum, line) => sum + parseFloat(line.amount || 0),
        0
      )
    },

    availableAgencies() {
      const agencyMap = new Map()
      this.outstandingInvoices.forEach((invoice) => {
        const agency = invoice.agency || invoice.vendor
        if (agency && !agencyMap.has(agency.id)) {
          agencyMap.set(agency.id, {
            id: agency.id,
            name: agency.name || agency.agencyName,
            code: agency.code || agency.agencyCode || agency.vendorCode,
          })
        }
      })
      return Array.from(agencyMap.values())
    },

    agencyFilterOptions() {
      return [{ id: '', name: 'ທຸກຕົວແທນ' }, ...this.availableAgencies]
    },

    makerName() {
      if (this.isEditMode && this.settlement?.maker) {
        return this.settlement.maker.cus_name || this.settlement.maker.username
      }
      return this.user.cus_name || this.user.username
    },

    checkerName() {
      if (this.isEditMode && this.settlement?.checker) {
        return (
          this.settlement.checker.fullName || this.settlement.checker.username
        )
      }
      return ''
    },

    settlementInfoForAudit() {
      if (!this.isEditMode) return null
      return {
        settlementId: this.form.id,
        paymentAmount: this.totalAllocated,
        settlementDate: this.form.settlementDate,
        status: this.form.status,
        reference: this.form.reference,
        description: this.form.description,
      }
    },
  },

  watch: {
    visible(newVal) {
      if (newVal) this.initializeDialog()
    },

    settlement: {
      handler(newVal) {
        if (newVal) this.loadSettlementData(newVal)
      },
      immediate: true,
    },
  },

  async mounted() {
    await this.loadReferenceData()
    await this.loadTransactionCodes() // Add this
  },

  methods: {
    printSettlement() {
      // Validation
      if (!this.isEditMode) {
        this.$toast?.warning('ກະລຸນາບັນທຶກການຊຳລະກ່ອນພິມ')
        return
      }

      if (!this.settlementLines || this.settlementLines.length === 0) {
        this.$toast?.warning('ບໍ່ມີລາຍການສຳລັບພິມ')
        return
      }

      // Build complete data structure
      const settlementData = {
        id: this.form.id,
        settlementDate: this.form.settlementDate,
        paymentMethodId: this.form.paymentMethodId,
        currencyId: this.form.currencyId,
        exchangeRate: this.form.exchangeRate,
        bankAccountId: this.form.bankAccountId,
        reference: this.form.reference || '-',
        description: this.form.description || '',
        status: this.form.status,
        createdAt: this.settlement?.createdAt || new Date().toISOString(),
        approvedDate: this.settlement?.approvedDate || null,
        settlementLines: this.settlementLines.map((line) => ({
          invoiceNumber: line.invoiceNumber || '-',
          agencyName: line.agencyName || line.agency?.agencyName || '-',
          description: line.description || '',
          amount: parseFloat(line.amount || 0),
          txnId: line.txnId,
          DRglAccountId: line.DRglAccountId,
          CRglAccountId: line.CRglAccountId,
          agency: line.agency || { agencyName: line.agencyName },
        })),
        maker: {
          cus_name: this.makerName,
        },
        checker: {
          cus_name: this.checkerName,
        },
      }

      // Set data first, then open dialog
      this.selectedSettlement = settlementData

      // Use nextTick to ensure data is set before dialog opens
      this.$nextTick(() => {
        this.showVoucherPrinter = true
      })
    },
    calculateExchangeAmounts() {
      this.clearFieldError('exchangeRate')
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
    getAgencyName(invoice) {
      const agency = invoice.agency || invoice.vendor
      return agency?.name || agency?.agencyName || 'N/A'
    },

    onCurrencyChange() {
      console.info(`Currency changing...`)
      this.clearFieldError('currencyId')
      const selectedCurrency = this.currencies.find(
        (c) => c.id === this.form.currencyId
      )
      if (selectedCurrency) {
        this.form.exchangeRate = selectedCurrency.rate || 1.0
      }
    },
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field)
      }
    },
    async initializeDialog() {
      // Load reference data first
      await this.loadReferenceData()

      // Then load settlement data
      if (this.settlement) {
        this.loadSettlementData(this.settlement)
      } else {
        this.resetForm()
      }

      this.filteredInvoices = [...this.outstandingInvoices]
    },

    async loadReferenceData() {
      try {
        await Promise.all([
          this.loadPaymentMethods(),
          this.loadBankAccounts(),
          this.fetchAgencies(),
        ])
      } catch (error) {
        console.error('Error loading reference data:', error)
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

    async loadBankAccounts() {
      try {
        const { data } = await this.$axios.get('/api/bank_account/find')
        this.bankAccounts = data || []
      } catch (error) {
        console.error('Error loading bank accounts:', error)
        this.bankAccounts = []
      }
    },

    async fetchAgencies() {
      this.loadingAgencies = true
      try {
        const response = await this.$axios.$get('/api/agency')
        if (response.success && response.data && response.data.agencies) {
          this.agencies = response.data.agencies
        } else if (response.success && Array.isArray(response.data)) {
          this.agencies = response.data
        }
      } catch (error) {
        console.error('Error fetching agencies:', error)
        this.$toast?.error('ໂຫລດຂໍ້ມູນຕົວແທນບໍ່ສຳເລັດ')
      } finally {
        this.loadingAgencies = false
      }
    },

    loadSettlementData(settlement) {
      this.form = {
        id: settlement.id,
        settlementDate:
          settlement.settlementDate || new Date().toISOString().split('T')[0],
        // Convert to numbers to match option values
        paymentMethodId: settlement.paymentMethodId
          ? Number(settlement.paymentMethodId)
          : '',
        currencyId: settlement.currencyId ? Number(settlement.currencyId) : '',
        exchangeRate: settlement.exchangeRate || 1.0,
        bankAccountId: settlement.bankAccountId
          ? Number(settlement.bankAccountId)
          : null,
        reference: settlement.reference || '',
        description: settlement.description || '',
        status: settlement.status || 'draft',
        makerId: settlement.makerId || this.user.id,
        checkerId: settlement.checkerId || null,
        approvalNote: settlement.approvalNote || '',
      }

      if (settlement.invoiceSettlements) {
        this.settlementLines = settlement.invoiceSettlements.map(
          (allocation) => {
            // Handle different data structures
            let invoice = null
            let agency = null
            let agencyName = ''
            let invoiceNumber = ''
            let invoiceId = null

            // Check if this is an invoice-linked line
            if (
              allocation.invoiceLineItem &&
              allocation.invoiceLineItem.invoice
            ) {
              invoice = allocation.invoiceLineItem.invoice
              invoiceId = invoice.id
              invoiceNumber = invoice.invoiceNumber
              agency = invoice.agency || invoice.vendor
            }

            // Get agency information (from line level or invoice level)
            if (allocation.agency) {
              agency = allocation.agency
              agencyName = agency.agencyName || agency.name || ''
            } else if (allocation.applicant) {
              agencyName = allocation.applicant.name || ''
            } else if (agency) {
              agencyName = agency.agencyName || agency.name || ''
            }

            return {
              tempId: this.lineIdCounter++,
              type: allocation.type,
              agency: allocation.agency,
              invoiceId: invoiceId,
              invoiceNumber: invoiceNumber,
              agencyId: allocation.agencyId || agency?.id || null,
              agencyName: agencyName,
              applicantId: allocation.applicantId || null,
              DRglAccountId: allocation.DRglAccountId || null,
              CRglAccountId: allocation.CRglAccountId || null,
              description: allocation.description || '',
              amount: parseFloat(allocation.amount || 0),
              txnId: allocation.txnId || null, // Add this
            }
          }
        )
      }
    },

    resetForm() {
      this.form = {
        id: null,
        settlementDate: new Date().toISOString().split('T')[0],
        currencyId: '',
        paymentMethodId: '',
        exchangeRate: 1.0,
        bankAccountId: null,
        reference: '',
        description: '',
        status: 'draft',
        makerId: this.user.id,
        checkerId: null,
        approvalNote: '',
      }
      this.settlementLines = []
      this.errors = {}
      this.lineIdCounter = 1
    },

    addManualLine() {
      this.settlementLines.push({
        tempId: this.lineIdCounter++,
        type: 'manual',
        invoiceId: null,
        invoiceNumber: '',
        agencyId: '',
        applicantId: null,
        DRglAccountId: null,
        CRglAccountId: null,
        agencyName: '',
        description: '',
        amount: 0,
        txnId: null, // Add this
      })
    },

    removeLine(index) {
      this.settlementLines.splice(index, 1)
    },

    openAuditDialog() {
      if (!this.isEditMode) {
        this.$toast?.warning(
          'ບໍ່ສາມາດເບິ່ງປະຫວັດການດຳເນີນງານໄດ້ ເນື່ອງຈາກຍັງບໍ່ໄດ້ບັນທຶກການຊຳລະ'
        )
        return
      }
      this.showAuditDialog = true
    },

    closeAuditDialog() {
      this.showAuditDialog = false
    },

    openMOUDialog() {
      this.showMOUDialog = true
    },

    closeMOUDialog() {
      this.showMOUDialog = false
    },

    onInvoiceGenerated(invoiceData) {
      if (!invoiceData?.lines?.length) {
        this.$toast?.error('No invoice lines received')
        return
      }

      const mouInfo = invoiceData.mouInfo || {}
      const batchInfo = invoiceData.batchInfo || {}

      invoiceData.lines.forEach((line) => {
        const description = `${mouInfo.jobCode || 'MOU'} | ${
          batchInfo.runningNo || 'Batch'
        } | ${invoiceData.agencyCode || 'Agency'} | ${line.applicantName} (${
          line.passportNo
        })`

        this.settlementLines.push({
          tempId: this.lineIdCounter++,
          type: 'mou',
          invoiceId: null,
          invoiceNumber: invoiceData.invoiceNumber || '',
          agencyId: invoiceData.agencyId || null,
          applicantId: line.applicantId || null,
          DRglAccountId: null,
          CRglAccountId: null,
          agencyName: `${invoiceData.agencyName} (${invoiceData.agencyCode})`,
          description,
          amount: parseFloat(line.amount || 0),
          txnId: null, // Add this
        })
      })

      this.$toast?.success(
        `Added ${invoiceData.lines.length} MOU lines to settlement`
      )
      this.closeMOUDialog()
    },

    filterInvoices() {
      let filtered = [...this.outstandingInvoices]

      if (this.invoiceSearchTerm) {
        const search = this.invoiceSearchTerm.toLowerCase()
        filtered = filtered.filter((invoice) => {
          const agency = invoice.agency || invoice.vendor
          const agencyName = agency?.name || agency?.agencyName || ''
          return (
            invoice.invoiceNumber.toLowerCase().includes(search) ||
            agencyName.toLowerCase().includes(search)
          )
        })
      }

      if (this.selectedAgencyFilter) {
        filtered = filtered.filter((invoice) => {
          const agency = invoice.agency || invoice.vendor
          return agency?.id === this.selectedAgencyFilter
        })
      }

      this.filteredInvoices = filtered
    },

    confirmInvoiceSelection() {
      this.tempSelectedInvoices.forEach((invoice) => {
        if (
          !this.settlementLines.find((line) => line.invoiceId === invoice.id)
        ) {
          const agency = invoice.agency || invoice.vendor
          this.settlementLines.push({
            tempId: this.lineIdCounter++,
            type: 'invoice',
            invoiceId: invoice.id,
            invoiceNumber: invoice.invoiceNumber,
            agencyId: agency?.id || null,
            agencyName: agency?.name || agency?.agencyName || '',
            description: '',
            amount: parseFloat(invoice.outstandingAmount || 0),
            txnId: null, // Add this
          })
        }
      })
      this.closeInvoiceSelector()
    },

    closeInvoiceSelector() {
      this.showInvoiceSelector = false
      this.tempSelectedInvoices = []
      this.invoiceSearchTerm = ''
      this.selectedAgencyFilter = ''
      this.filteredInvoices = [...this.outstandingInvoices]
    },

    validateForm() {
      this.errors = {}

      // Basic validations
      if (!this.form.settlementDate) {
        this.errors.settlementDate = 'ກະລຸນາເລືອກວັນທີຊຳລະ'
      }

      if (this.totalAllocated <= 0) {
        this.errors.paymentAmount = 'ກະລຸນາເພີ່ມລາຍການຈັດສັນ'
      }

      if (!this.form.paymentMethodId) {
        this.errors.paymentMethodId = 'ກະລຸນາເລືອກວິທີການຊຳລະ'
      }

      if (!this.form.currencyId) {
        this.errors.currencyId = 'ກະລຸນາເລືອກສະກຸນເງິນ'
      }

      if (this.form.reference?.length > 100) {
        this.errors.reference = 'ຫມາຍເລກອ້າງອີງຍາວເກີນ 100 ຕົວອັກສອນ'
      }

      // Validate settlement lines
      let hasLineErrors = false
      this.settlementLines.forEach((line, index) => {
        // Check if transaction code is selected
        if (!line.txnId) {
          hasLineErrors = true
          this.$toast?.error(`ລາຍການທີ ${index + 1}: ກະລຸນາເລືອກລະຫັດການເງິນ`)
        }

        // Check if amount is valid
        if (!line.amount || line.amount <= 0) {
          hasLineErrors = true
          this.$toast?.error(
            `ລາຍການທີ ${index + 1}: ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ`
          )
        }

        // For manual entries, check if agency is selected
        if (line.type === 'manual' && !line.agencyId) {
          hasLineErrors = true
          this.$toast?.error(`ລາຍການທີ ${index + 1}: ກະລຸນາເລືອກ${this.formLabel.vendor}`)
        }
      })

      if (hasLineErrors) {
        this.errors.settlementLines = 'ກະລຸນາກວດສອບລາຍການຈັດສັນໃຫ້ຄົບຖ້ວນ'
      }

      return Object.keys(this.errors).length === 0 && !hasLineErrors
    },

    async submitForm() {
      if (!this.validateForm()) return

      this.isSubmitting = true
      try {
        const formData = {
          ...this.form,
          paymentAmount: this.totalAllocated,
          baseAmount: this.totalAllocated,
          makerId: this.form.makerId || this.user.id,
          exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
          settlementLines: this.settlementLines.map((line) => ({
            type: line.type,
            invoiceId: line.invoiceId,
            invoiceNumber: line.invoiceNumber,
            agencyId: line.agencyId,
            applicantId: line.applicantId,
            DRglAccountId: line.DRglAccountId || null,
            CRglAccountId: line.CRglAccountId || null,
            description: line.description,
            amount: parseFloat(line.amount || 0),
            txnId: line.txnId, // Add this
          })),
        }
        this.$emit('save', formData)
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        this.isSubmitting = false
      }
    },
    getTransactionCodeLabel(txnId) {
      const txn = this.transactionCodes.find((t) => t.id === txnId)
      return txn ? `${txn.code} - ${txn.description}` : ''
    },

    async approveSettlement() {
      if (!this.canApprove) return
      this.isSubmitting = true
      try {
        this.$emit('approve', {
          id: this.form.id,
          status: 'approved',
          checkerId: this.user.id,
          approvalNote: this.form.approvalNote,
        })
      } catch (error) {
        console.error('Error approving settlement:', error)
      } finally {
        this.isSubmitting = false
      }
    },

    async completeSettlement() {
      if (!this.canComplete) return
      this.isSubmitting = true
      try {
        this.$emit('complete', { id: this.form.id, status: 'completed' })
      } catch (error) {
        console.error('Error completing settlement:', error)
      } finally {
        this.isSubmitting = false
      }
    },

    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('en-GB')
    },
  },
}
</script>

<style scoped>
/* ===================================== */
/* TRANSACTION CODE & FORM CONTROLS */
/* ===================================== */

/* Base form control styles */
.form-control {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 12px;
  transition: border-color 0.2s ease;
  height: 32px;
}

.form-control:focus {
  outline: none;
  border-color: #17a2b8;
  box-shadow: 0 0 0 2px rgba(23, 162, 184, 0.1);
}

.form-control:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
}

.form-control.is-invalid {
  border-color: #e74c3c;
}

/* Extra small form controls */
.form-control-xs {
  padding: 4px 6px;
  font-size: 11px;
  height: 28px;
}

/* Select dropdown specific styles */
select.form-control,
select.form-control-xs {
  appearance: auto;
  background-color: white;
  cursor: pointer;
}

select.form-control:disabled,
select.form-control-xs:disabled {
  background-color: #e9ecef;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Optgroup styling */
select.form-control-xs optgroup {
  font-weight: 600;
  font-style: normal;
  color: #495057;
  background-color: #f8f9fa;
}

select.form-control-xs option {
  padding: 4px 8px;
  font-size: 11px;
}

/* Focus states for form controls */
.form-control-xs:focus,
select.form-control-xs:focus {
  border-color: #17a2b8;
  box-shadow: 0 0 0 2px rgba(23, 162, 184, 0.15);
  outline: none;
  z-index: 2;
}

/* Validation states */
.is-invalid {
  border-color: #dc3545 !important;
  background-image: none;
}

.is-invalid:focus {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 2px;
  font-size: 10px;
  color: #e74c3c;
}

.text-danger {
  color: #dc3545 !important;
  font-size: 10px;
  margin-top: 2px;
  display: block;
}

/* ===================================== */
/* TEXT UTILITIES */
/* ===================================== */

.text-truncate {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.required {
  color: #e74c3c;
  font-weight: bold;
}

/* ===================================== */
/* MODAL & DIALOG LAYOUT */
/* ===================================== */

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
  z-index: 1000;
  padding: 0;
}

.settlement-dialog {
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ===================================== */
/* HEADER */
/* ===================================== */

.dialog-header {
  padding: 12px 20px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #01532b 0%, #337555 100%);
  color: white;
  min-height: 50px;
}

.dialog-header h4 {
  margin: 0;
  font-weight: 600;
  font-size: 16px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.audit-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
}

.audit-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.audit-text {
  font-size: 11px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: white;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* ===================================== */
/* BODY & FORM SECTIONS */
/* ===================================== */

.dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

.form-section {
  margin: 0;
  padding: 15px;
  border-bottom: 1px solid #e9ecef;
  background: #fafafa;
}

.section-title {
  color: #333;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #17a2b8;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.section-title i {
  color: #17a2b8;
  font-size: 13px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 10px;
}

.section-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.allocation-info {
  display: flex;
  gap: 12px;
  font-size: 11px;
}

.info-item {
  padding: 4px 8px;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
}

/* ===================================== */
/* FORM GRID */
/* ===================================== */

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
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

/* ===================================== */
/* TYPE BADGES */
/* ===================================== */

.type-badge {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
}

.type-badge.invoice {
  background: #e3f2fd;
  color: #1976d2;
  border: 1px solid #90caf9;
}

.type-badge.manual {
  background: #fff3e0;
  color: #f57c00;
  border: 1px solid #ffb74d;
}

.type-badge.mou {
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #81c784;
}

/* ===================================== */
/* EMPTY STATE */
/* ===================================== */

.no-invoices {
  text-align: center;
  padding: 30px 20px;
  color: #666;
  background: white;
  border: 2px dashed #ddd;
  border-radius: 6px;
}

.no-invoices i {
  font-size: 32px;
  margin-bottom: 10px;
  opacity: 0.5;
}

.no-invoices p {
  margin: 8px 0 15px;
  font-weight: 600;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ===================================== */
/* SETTLEMENT LINES TABLE */
/* ===================================== */

.settlement-lines {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table {
  margin: 0;
  border-collapse: collapse;
  font-size: 11px;
  width: 100%;
}

.table th {
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  padding: 8px 4px;
  font-size: 11px;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
}

.table td {
  padding: 6px 4px;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
}

/* Better table cell input/select sizing */
.table td input.form-control-xs,
.table td select.form-control-xs {
  width: 100%;
  min-width: 80px;
}

/* Transaction code column (5th column) */
.table th:nth-child(5),
.table td:nth-child(5) {
  min-width: 200px;
}

.line-number {
  text-align: center;
  font-weight: 600;
  color: #666;
  font-size: 10px;
}

/* ===================================== */
/* ALLOCATION SUMMARY */
/* ===================================== */

.allocation-summary {
  background: #f8f9fa;
  padding: 10px 15px;
  border-top: 2px solid #dee2e6;
}

.totals-inline {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  flex-wrap: wrap;
  gap: 10px;
}

.total-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.total-item strong {
  color: #28a745;
  font-size: 14px;
}

/* ===================================== */
/* BUTTONS */
/* ===================================== */

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
  white-space: nowrap;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background: #545b62;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn-success:hover:not(:disabled) {
  background: #218838;
}

.btn-info {
  background: #17a2b8;
  color: white;
}

.btn-info:hover:not(:disabled) {
  background: #138496;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background: #c82333;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 11px;
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
  opacity: 0.95;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* ===================================== */
/* FOOTER */
/* ===================================== */

.dialog-footer {
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

/* ===================================== */
/* RESPONSIVE DESIGN */
/* ===================================== */

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .span-2 {
    grid-column: span 1;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-actions {
    width: 100%;
  }

  .allocation-info {
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  .totals-inline {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .footer-actions {
    flex-direction: column;
  }

  .footer-actions .btn {
    width: 100%;
    justify-content: center;
  }

  .action-buttons {
    flex-direction: column;
  }

  .action-buttons .btn {
    width: 100%;
  }

  .table-responsive {
    border: 1px solid #dee2e6;
    border-radius: 4px;
  }

  .table {
    min-width: 900px;
  }

  .table th:nth-child(5),
  .table td:nth-child(5) {
    min-width: 180px;
  }
}

@media (max-width: 480px) {
  .dialog-header {
    padding: 10px 15px;
  }

  .dialog-header h4 {
    font-size: 14px;
  }

  .header-actions {
    gap: 6px;
  }

  .audit-text {
    display: none;
  }

  .form-section {
    padding: 12px;
  }

  .dialog-footer {
    padding: 10px 15px;
  }

  .table th:nth-child(5),
  .table td:nth-child(5) {
    min-width: 150px;
  }

  select.form-control-xs option {
    font-size: 10px;
  }
}
</style>