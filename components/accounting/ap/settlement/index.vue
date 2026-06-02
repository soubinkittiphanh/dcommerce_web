<template>
  <v-dialog
    :value="visible"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
    persistent
  >
    <v-card class="d-flex flex-column settlement-modal-card">
      <!-- Dialog Header -->
      <v-card-title class="modal-header px-6 py-4 grey lighten-5 border-bottom">
        <div class="d-flex align-center w-100">
          <v-avatar color="primary lighten-5" size="40" class="mr-3">
            <v-icon color="primary">mdi-cash-multiple</v-icon>
          </v-avatar>
          <div class="flex-grow-1">
            <h4 class="text-subtitle-1 font-weight-bold grey--text text--darken-3 mb-0">
              {{ isEditMode ? 'ແກ້ໄຂການຊຳລະ (Edit AP Settlement)' : 'ສ້າງການຊຳລະໃໝ່ (Create New AP Settlement)' }}
            </h4>
            <div class="text-caption grey--text text--darken-1 mt-0">
              {{ isEditMode ? `Settlement #: ${form.id || '-'}` : 'Drafting new settlement' }}
            </div>
          </div>
          <div class="d-flex align-center">
            <v-btn v-if="isEditMode" small color="primary" outlined @click="openAuditDialog" class="mr-3 rounded-lg font-weight-bold">
              <v-icon left small>mdi-history</v-icon>
              ປະຫວັດ
            </v-btn>
            <v-btn icon color="grey darken-2" @click="closeDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-title>

      <!-- Dialog Scrollable Body -->
      <v-card-text class="modal-body pa-6 grey lighten-4" style="flex: 1; overflow-y: auto;">
        <div class="settlement-form">
          <form @submit.prevent="submitForm">
            <!-- Basic Settlement Information -->
            <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
              <v-card-title class="text-subtitle-1 font-weight-bold primary--text pa-4 pb-2">
                <v-icon left color="primary">mdi-credit-card</v-icon>
                <span><b>ຂໍ້ມູນການຊຳລະ (Settlement Info)</b></span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pa-4">
                <v-row dense>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-text-field
                      v-model="form.settlementDate"
                      type="date"
                      label="ວັນທີຊຳລະ (Settlement Date) *"
                      outlined
                      dense
                      hide-details="auto"
                      :error-messages="errors.settlementDate"
                    />
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-autocomplete
                      v-model="form.paymentMethodId"
                      :items="paymentMethods"
                      item-value="id"
                      item-text="payment_name"
                      label="ວິທີການຊຳລະ (Payment Method) *"
                      outlined
                      dense
                      clearable
                      hide-details="auto"
                      placeholder="ເລືອກວິທີການຊຳລະ"
                      :error-messages="errors.paymentMethodId"
                    >
                      <template v-slot:item="{ item }">
                        <small>{{ item.payment_name }}</small>
                      </template>
                      <template v-slot:selection="{ item }">
                        <small>{{ item.payment_name }}</small>
                      </template>
                    </v-autocomplete>
                  </v-col>
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
                      placeholder="ເລືອກສະກຸນເງິນ"
                      :error-messages="errors.currencyId"
                      @change="onCurrencyChange"
                    >
                      <template v-slot:selection="{ item }">
                        {{ item.name }} ({{ item.code }})
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-text-field
                      v-model="form.exchangeRate"
                      type="number"
                      step="0.0001"
                      label="ອັດຕາແລກປ່ຽນ (Exchange Rate) *"
                      outlined
                      dense
                      hide-details="auto"
                      :error-messages="errors.exchangeRate"
                      @blur="calculateExchangeAmounts"
                    >
                      <template v-slot:append>
                        <span class="grey--text font-weight-medium text-caption" v-if="selectedCurrency">
                          {{ selectedCurrency.code }} / LAK
                        </span>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="4">
                    <v-autocomplete
                      v-model="form.bankAccountId"
                      :items="bankAccounts"
                      item-value="id"
                      item-text="accountNumber"
                      label="ບັນຊີທະນາຄານ (Bank Account)"
                      outlined
                      dense
                      clearable
                      hide-details="auto"
                      placeholder="ເລືອກບັນຊີທະນາຄານ"
                      :error-messages="errors.bankAccountId"
                    >
                      <template v-slot:selection="{ item }">
                        <small>{{ item.accountNumber }} - {{ item.bankName }}</small>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="8" lg="8">
                    <v-text-field
                      v-model="form.reference"
                      label="ອ້າງອີງ (Reference)"
                      outlined
                      dense
                      hide-details="auto"
                      placeholder="ຫມາຍເລກອ້າງອີງ"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.description"
                      label="ຄຳອະທິບາຍ (Description)"
                      outlined
                      dense
                      rows="2"
                      auto-grow
                      hide-details="auto"
                      placeholder="ຄຳອະທິບາຍການຊຳລະ"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Settlement Allocations Section -->
            <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
              <v-card-title class="text-subtitle-1 font-weight-bold primary--text pa-4 pb-2 d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <v-icon left color="primary">mdi-format-list-bulleted</v-icon>
                  <span><b>ລາຍການຈັດສັນ (Allocations)</b></span>
                </div>
                <div class="d-flex align-center">
                  <v-btn small color="info" outlined @click="openMOUDialog" :disabled="!canModifyAllocations"
                    v-if="enableMOUbutton" class="mr-2 rounded-md">
                    <v-icon left small>mdi-file-document-outline</v-icon>ເພີ່ມຈາກ MOU
                  </v-btn>
                  <v-btn small color="success" outlined @click="addManualLine" :disabled="!canModifyAllocations"
                    class="mr-2 rounded-md">
                    <v-icon left small>mdi-plus</v-icon>ເພີ່ມລາຍການ
                  </v-btn>
                  <v-btn small color="primary" depressed @click="showInvoiceSelector = true"
                    :disabled="!canModifyAllocations" class="rounded-md">
                    <v-icon left small>mdi-file-invoice</v-icon>ເລືອກຈາກໃບແຈ້ງໜີ້
                  </v-btn>
                </div>
              </v-card-title>
              <v-divider></v-divider>

              <!-- Empty State -->
              <v-card-text v-if="settlementLines.length === 0" class="pa-12 text-center grey lighten-5">
                <v-avatar color="grey lighten-3" size="72" class="mb-4">
                  <v-icon size="40" color="grey darken-1">mdi-clipboard-list-outline</v-icon>
                </v-avatar>
                <h4 class="text-subtitle-1 font-weight-bold grey--text text--darken-2 mt-2 mb-1">ຍັງບໍ່ມີລາຍການຈັດສັນ</h4>
                <p class="text-caption grey--text mb-4">ກະລຸນາເລືອກຈາກໃບແຈ້ງໜີ້ ຫຼື ເພີ່ມລາຍການເພື່ອດຳເນີນການ</p>
                <div class="d-flex justify-center flex-wrap">
                  <v-btn color="info" outlined small @click="openMOUDialog" v-if="enableMOUbutton" class="mx-2 rounded-md">
                    <v-icon left small>mdi-file-document-outline</v-icon>ເພີ່ມຈາກ MOU
                  </v-btn>
                  <v-btn color="success" outlined small @click="addManualLine" class="mx-2 rounded-md">
                    <v-icon left small>mdi-plus-circle</v-icon>ເພີ່ມລາຍການດ້ວຍມື
                  </v-btn>
                  <v-btn color="primary" small depressed @click="showInvoiceSelector = true" class="mx-2 rounded-md">
                    <v-icon left small>mdi-file-invoice</v-icon>ເລືອກຈາກໃບແຈ້ງໜີ້
                  </v-btn>
                </div>
              </v-card-text>

              <!-- Settlement Lines Table -->
              <div v-else class="line-items-container pb-0">
                <div class="table-compact-vuetify rounded-lg overflow-hidden">
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th style="width: 40px" class="text-center">#</th>
                          <th style="width: 100px">ປະເພດ</th>
                          <th style="width: 150px">ເລກທີໃບແຈ້ງໜີ້</th>
                          <th>{{ formLabel ? formLabel.vendor : 'ຜູ້ສະໜອງ' }}</th>
                          <th style="width: 250px">ລະຫັດການເງິນ <span class="error--text">*</span></th>
                          <th>ຄຳອະທິບາຍ</th>
                          <th v-if="enableGL" style="width: 150px">DR Account</th>
                          <th v-if="enableGL" style="width: 150px">CR Account</th>
                          <th style="width: 180px" class="text-right">ຈຳນວນເງິນ</th>
                          <th style="width: 60px" class="text-center">ລຶບ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(line, index) in settlementLines" :key="line.tempId" class="line-item-row">
                          <td class="text-center font-weight-bold grey--text">{{ index + 1 }}</td>
                          <td>
                            <v-chip x-small
                              :color="line.type === 'invoice' ? 'primary' : line.type === 'mou' ? 'success' : 'warning'"
                              outlined class="font-weight-bold text-uppercase">
                              {{ line.type === 'invoice' ? 'ໃບແຈ້ງໜີ້' : line.type === 'mou' ? 'MOU' : 'ດ້ວຍມື' }}
                            </v-chip>
                          </td>
                          <td>
                            <v-text-field v-if="line.type === 'manual'" v-model="line.invoiceNumber" dense outlined
                              hide-details placeholder="ເລກທີໃບແຈ້ງໜີ້" :disabled="!canModifyAllocations"
                              class="compact-input rounded-md" />
                            <span v-else class="text-truncate font-weight-bold font-monospace text-subtitle-2" :title="line.invoiceNumber">{{
                              line.invoiceNumber || '-' }}</span>
                          </td>
                          <td>
                            <v-autocomplete v-if="line.type === 'manual'" v-model="line.agencyId" :items="agencies"
                              item-value="id" item-text="agencyName" :disabled="!canModifyAllocations" dense outlined
                              hide-details placeholder="ເລືອກຜູ້ສະໜອງ" class="compact-input rounded-md">
                              <template v-slot:item="{ item }">
                                <small>{{ item.agencyName }} - {{ item.agencyCode }}</small>
                              </template>
                              <template v-slot:selection="{ item }">
                                <small class="text-truncate">{{ item.agencyName }}</small>
                              </template>
                            </v-autocomplete>
                            <span v-else class="text-truncate text-body-2" :title="line.agencyName || line.agency?.agencyName">{{
                              line.agencyName ||
                              line.agency?.agencyName || '-' }}</span>
                          </td>
                          <td>
                            <v-autocomplete v-model="line.txnId"
                              :items="transactionCodes.filter((t) => (t.type === 'EXPENSE' || t.type != '1') && t.isActive)"
                              item-value="id" item-text="code" :loading="loadingTransactionCodes"
                              :disabled="!canModifyAllocations || loadingTransactionCodes"
                              :error="!line.txnId && errors.settlementLines" dense outlined clearable hide-details
                              placeholder="ລະຫັດການເງິນ" class="compact-input rounded-md">
                              <template v-slot:item="{ item }">
                                <small>{{ item.code }} - {{ item.description }}</small>
                              </template>
                              <template v-slot:selection="{ item }">
                                <small class="text-truncate font-weight-medium">{{ item.code }}</small>
                              </template>
                            </v-autocomplete>
                          </td>
                          <td>
                            <v-text-field v-model="line.description" dense outlined hide-details placeholder="ຄຳອະທິບາຍ"
                              :disabled="!canModifyAllocations" class="compact-input rounded-md" />
                          </td>
                          <td v-if="enableGL">
                            <v-autocomplete v-model="line.DRglAccountId" :items="glAccounts" item-value="id"
                              item-text="accountNumber" dense outlined clearable hide-details placeholder="DR"
                              class="compact-input rounded-md">
                              <template v-slot:item="{ item }">
                                <small>{{ item.accountNumber }}</small>
                              </template>
                              <template v-slot:selection="{ item }">
                                <small class="font-monospace">{{ item.accountNumber }}</small>
                              </template>
                            </v-autocomplete>
                          </td>
                          <td v-if="enableGL">
                            <v-autocomplete v-model="line.CRglAccountId" :items="glAccounts" item-value="id"
                              item-text="accountNumber" dense outlined clearable hide-details placeholder="CR"
                              class="compact-input rounded-md">
                              <template v-slot:item="{ item }">
                                <small>{{ item.accountNumber }}</small>
                              </template>
                              <template v-slot:selection="{ item }">
                                <small class="font-monospace">{{ item.accountNumber }}</small>
                              </template>
                            </v-autocomplete>
                          </td>
                          <td>
                            <v-text-field v-model.number="line.amount" type="number" step="0.01" dense outlined
                              hide-details class="compact-input rounded-md text-right-input font-monospace" :disabled="!canModifyAllocations"
                              @input="$forceUpdate()" />
                          </td>
                          <td class="text-center">
                            <v-btn icon small color="error" class="hover-shadow" :disabled="!canModifyAllocations" @click="removeLine(index)">
                              <v-icon small>mdi-trash-can-outline</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>

                <!-- Total Amount Summary Card -->
                <div class="modern-amount-summary mt-6">
                  <v-row no-gutters justify="end">
                    <v-col cols="12" md="6" lg="5">
                      <v-card outlined class="summary-card-premium overflow-hidden rounded-xl bg-white shadow-lg mb-4">
                        <div class="pa-5">
                          <div class="d-flex justify-space-between mb-0 text-body-2">
                            <span class="grey--text text--darken-1 font-weight-medium">ຈຳນວນລາຍການຈັດສັນ (Allocations Count):</span>
                            <span class="font-weight-bold font-monospace text-subtitle-2 grey--text text--darken-3">
                              {{ settlementLines.length }} ລາຍການ
                            </span>
                          </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="total-row-highlight px-5 py-4 d-flex justify-space-between align-center">
                          <div class="d-flex flex-column">
                            <span class="text-subtitle-1 font-weight-black white--text mb-0">ລວມຈຳນວນເງິນຊຳລະ (Total Allocated):</span>
                            <span v-if="selectedCurrency && selectedCurrency.code !== 'LAK'" class="white--text opacity-80 font-weight-bold text-caption mt-1">
                              Converted to LAK: {{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'LAK' }).format(totalAllocated * parseFloat(form.exchangeRate || 1)) }}
                            </span>
                          </div>
                          <div class="text-h5 font-weight-black white--text font-monospace">
                            {{ formatCurrency(totalAllocated) }}
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-card>

            <!-- Approval Section -->
            <v-card v-if="showApprovalSection" outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
              <v-card-title class="text-subtitle-1 font-weight-bold primary--text pa-4 pb-2">
                <v-icon left color="primary">mdi-check-decagram</v-icon>
                <span><b>ການອະນຸມັດ (Approval)</b></span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pa-4">
                <v-row dense>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="checkerName"
                      disabled
                      label="ຜູ້ອະນຸມັດ (Approver)"
                      outlined
                      dense
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-textarea
                      v-model="form.approvalNote"
                      outlined
                      dense
                      rows="2"
                      label="ໝາຍເຫດການອະນຸມັດ (Approval Note)"
                      placeholder="ໝາຍເຫດການອະນຸມັດ"
                      :disabled="!canApprove"
                      hide-details="auto"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </form>
        </div>
      </v-card-text>

      <!-- Footer -->
      <v-card-actions class="modal-footer px-6 py-4">
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog" color="grey darken-1" class="rounded-lg px-4 font-weight-bold">
          <v-icon left>mdi-close</v-icon>ຍົກເລີກ
        </v-btn>

        <v-btn v-if="canApprove && form.status === 'pending'" color="success" outlined class="ml-2 rounded-lg px-4 font-weight-bold"
          @click="approveSettlement" :disabled="isSubmitting">
          <v-icon left>mdi-check</v-icon>ອະນຸມັດ
        </v-btn>

        <v-btn v-if="canComplete && ['pending', 'approved'].includes(form.status)" color="success" class="ml-2 rounded-lg px-4 font-weight-bold"
          @click="completeSettlement" :disabled="isSubmitting">
          <v-icon left>mdi-check-circle</v-icon>ສຳເລັດ
        </v-btn>

        <v-btn v-if="isEditMode" color="info" outlined class="ml-2 rounded-lg px-4 font-weight-bold" @click="printSettlement(settlement)">
          <v-icon left>mdi-printer</v-icon>Print Voucher
        </v-btn>

        <v-btn color="primary" class="ml-2 rounded-lg px-4 font-weight-bold" :loading="isSubmitting" :disabled="!canModify" @click="submitForm">
          <v-icon left>mdi-content-save</v-icon>{{ isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ' }}
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Invoice Selector Modal -->
    <v-dialog v-model="showInvoiceSelector" max-width="900px" persistent scrollable>
      <v-card class="rounded-lg overflow-hidden">
        <v-card-title class="modal-header px-6 py-4 grey lighten-5 border-bottom">
          <span class="text-subtitle-1 font-weight-bold grey--text text--darken-3">ເລືອກໃບແຈ້ງໜີ້ຄ້າງຈ່າຍ</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="closeInvoiceSelector">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-6">
          <v-row dense class="mb-3">
            <v-col cols="12" md="6">
              <v-text-field v-model="invoiceSearchTerm" label="ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້" outlined dense clearable
                prepend-inner-icon="mdi-magnify" hide-details="auto" @input="filterInvoices" />
            </v-col>
            <v-col cols="12" md="6">
              <v-select v-model="selectedAgencyFilter" :items="agencyFilterOptions" item-text="name" item-value="id"
                label="ຕົວແທນ" outlined dense clearable prepend-inner-icon="mdi-account" hide-details="auto" @change="filterInvoices" />
            </v-col>
          </v-row>

          <v-data-table :headers="invoiceTableHeaders" :items="filteredInvoices" :items-per-page="10"
            class="elevation-0 border rounded-lg" show-select v-model="tempSelectedInvoices" item-key="id">
            <template v-slot:[`item.invoiceNumber`]="{ item }">
              <span class="font-weight-medium font-monospace">{{ item.invoiceNumber }}</span>
            </template>

            <template v-slot:[`item.agency`]="{ item }">
              <span class="text-body-2">{{ getAgencyName(item) }}</span>
            </template>

            <template v-slot:[`item.dueDate`]="{ item }">
              <span class="text-body-2">{{ formatDate(item.dueDate) }}</span>
            </template>

            <template v-slot:[`item.outstandingAmount`]="{ item }">
              <span class="font-weight-bold font-monospace text-right-input">
                {{ formatCurrency(item.outstandingAmount) }}
              </span>
            </template>
          </v-data-table>
        </v-card-text>

        <v-card-actions class="modal-footer px-6 py-4">
          <v-spacer></v-spacer>
          <v-btn text @click="closeInvoiceSelector" class="rounded-lg px-4 font-weight-bold">ຍົກເລີກ</v-btn>
          <v-btn color="primary" class="rounded-lg px-4 font-weight-bold" @click="confirmInvoiceSelection">
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
          <browse-mou-invoice-dialog :visible="showMOUDialog" @close="closeMOUDialog"
            @invoice-generated="onInvoiceGenerated" />
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Settlement Audit Dialog -->
    <settlement-audit-dialog :visible="showAuditDialog" :settlement-id="form.id"
      :settlement-info="settlementInfoForAudit" @close="closeAuditDialog" />
    <payment-voucher-printer :visible="showVoucherPrinter" :voucher-data="selectedSettlement"
      :payment-methods="paymentMethods" :bank-accounts="bankAccounts" :transaction-codes="transactionCodes"
      :gl-accounts="glAccounts" @close="showVoucherPrinter = false" />
  </v-dialog>
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
      transactionCodes: [],
      loadingTransactionCodes: false,

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
    enableMOUbutton() {
      const spf = this.getSPF.find(spf => spf.code === 'AC_AP_MOU_FETCH');
      return spf?.value === 'Y';
    },
    enableGL() {
      const spf = this.getSPF.find(spf => spf.code === 'AC_AP_GL_ENABLE');
      return spf?.value === 'Y';
    },
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

    // New computed property for settlement summary
    settlementSummary() {
      return this.getSettlementSummary()
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

    invoiceSearchTerm() {
      this.filterInvoices()
    },

    selectedAgencyFilter() {
      this.filterInvoices()
    },
  },

  async mounted() {
    await this.loadReferenceData()
    await this.loadTransactionCodes()
  },

  methods: {
    // =====================================================
    // PRINT AND VOUCHER METHODS
    // =====================================================
    printSettlement() {
      if (!this.isEditMode) {
        this.$toast?.warning('ກະລຸນາບັນທຶກການຊຳລະກ່ອນພິມ')
        return
      }

      if (!this.settlementLines || this.settlementLines.length === 0) {
        this.$toast?.warning('ບໍ່ມີລາຍການສຳລັບພິມ')
        return
      }

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
          lineNumber: line.lineNumber || null,
          agencyName: line.agencyName || line.agency?.agencyName || '-',
          description: line.description || '',
          amount: parseFloat(line.amount || 0),
          quantity: line.quantity || null,
          unitPrice: line.unitPrice || null,
          txnId: line.txnId,
          DRglAccountId: line.DRglAccountId,
          CRglAccountId: line.CRglAccountId,
          agency: line.agency || { agencyName: line.agencyName },
          lineItem: line.lineItem || null,
        })),
        maker: { cus_name: this.makerName },
        checker: { cus_name: this.checkerName },
      }

      this.selectedSettlement = settlementData
      this.$nextTick(() => {
        this.showVoucherPrinter = true
      })
    },

    // =====================================================
    // DATA LOADING METHODS
    // =====================================================
    async loadTransactionCodes() {
      this.loadingTransactionCodes = true
      try {
        const { data } = await this.$axios.get('/api/transaction-codes', {
          params: {
            includeInactive: false,
            type: 'EXPENSE',
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

    async initializeDialog() {
      await this.loadReferenceData()

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
        if (response.success && response.data?.agencies) {
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

    // =====================================================
    // FORM MANAGEMENT METHODS
    // =====================================================
    loadSettlementData(settlement) {
      this.form = {
        id: settlement.id,
        settlementDate:
          settlement.settlementDate || new Date().toISOString().split('T')[0],
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

      if (settlement.currencyId) {
        this.selectedCurrency = this.currencies.find(
          (c) => c.id === Number(settlement.currencyId)
        )
      }

      if (settlement.invoiceSettlements) {
        this.settlementLines = settlement.invoiceSettlements.map(
          (allocation) => {
            let invoice = null
            let lineItem = null
            let agency = null
            let agencyName = ''
            let invoiceNumber = ''
            let invoiceId = null

            // Check if this is an invoice line item settlement
            if (allocation.invoiceLineItem) {
              lineItem = allocation.invoiceLineItem
              if (lineItem.invoice) {
                invoice = lineItem.invoice
                invoiceId = invoice.id
                invoiceNumber = invoice.invoiceNumber
                agency = invoice.agency || invoice.vendor
              }
            }

            // Get agency information
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
              agency,
              invoice,
              lineItem,
              invoiceId,
              lineItemId: lineItem?.id || null,
              invoiceNumber,
              lineNumber: lineItem?.lineNumber || null,
              agencyId: allocation.agencyId || agency?.id || null,
              agencyName,
              applicantId: allocation.applicantId || null,
              DRglAccountId: allocation.DRglAccountId || null,
              CRglAccountId: allocation.CRglAccountId || null,
              description: allocation.description || '',
              amount: parseFloat(allocation.amount || 0),
              quantity: lineItem?.quantity || null,
              unitPrice: lineItem?.unitPrice || null,
              taxAmount: lineItem?.taxAmount || 0,
              discountAmount: lineItem?.discountAmount || 0,
              txnId: allocation.txnId || null,
              currencyId: invoice?.currencyId || null,
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
      this.selectedCurrency = null
    },

    // =====================================================
    // CURRENCY AND EXCHANGE RATE METHODS
    // =====================================================
    onCurrencyChange() {
      console.info('Currency changing...')
      this.clearFieldError('currencyId')

      const selectedCurrency = this.currencies.find(
        (c) => c.id === this.form.currencyId
      )

      if (selectedCurrency) {
        this.selectedCurrency = selectedCurrency
        this.form.exchangeRate = selectedCurrency.rate || 1.0
      }

      return Promise.resolve()
    },

    calculateExchangeAmounts() {
      this.clearFieldError('exchangeRate')
    },

    // =====================================================
    // SETTLEMENT LINES MANAGEMENT
    // =====================================================
    addManualLine() {
      this.settlementLines.push({
        tempId: this.lineIdCounter++,
        type: 'manual',
        invoiceId: null,
        lineItemId: null,
        invoiceNumber: '',
        lineNumber: null,
        agencyId: '',
        applicantId: null,
        DRglAccountId: null,
        CRglAccountId: null,
        agencyName: '',
        description: '',
        amount: 0,
        quantity: null,
        unitPrice: null,
        taxAmount: 0,
        discountAmount: 0,
        txnId: null,
        currencyId: this.form.currencyId,
      })
    },

    removeLine(index) {
      this.settlementLines.splice(index, 1)
      this.calculateTotals()
    },

    removeSettlementLine(tempId) {
      const index = this.settlementLines.findIndex(line => line.tempId === tempId)
      if (index > -1) {
        this.settlementLines.splice(index, 1)
        this.calculateTotals()
        this.$toast?.success('ລຶບລາຍການສຳເລັດ')
      }
    },

    calculateTotals() {
      // This will trigger the computed property recalculation
      this.$forceUpdate()
    },

    // =====================================================
    // INVOICE SELECTION AND PROCESSING
    // =====================================================
    async confirmInvoiceSelection() {
      if (this.tempSelectedInvoices.length === 0) {
        this.$toast?.warning('ກະລຸນາເລືອກໃບແຈ້ງໜີ້')
        return
      }

      try {
        console.info(`SELECTED DATA ${JSON.stringify(this.tempSelectedInvoices)}`)

        // Populate header from first invoice if header is empty
        if (this.tempSelectedInvoices.length > 0 && !this.form.currencyId) {
          const firstInvoice = this.tempSelectedInvoices[0]

          if (firstInvoice.currencyId) {
            this.form.currencyId = Number(firstInvoice.currencyId)
            await this.onCurrencyChange()
          }

          if (firstInvoice.preferredPaymentMethodId) {
            this.form.paymentMethodId = Number(firstInvoice.preferredPaymentMethodId)
          }
        }

        // Process each selected invoice and its line items
        this.tempSelectedInvoices.forEach((invoice) => {
          const agency = invoice.agency || invoice.vendor

          // Check if invoice has line items
          if (invoice.lineItems && invoice.lineItems.length > 0) {
            // Create settlement lines for each invoice line item
            invoice.lineItems.forEach((lineItem) => {
              // Check if this line item already exists
              const existingLine = this.settlementLines.find(
                (line) => line.invoiceId === invoice.id && line.lineItemId === lineItem.id
              )

              if (existingLine) {
                this.$toast?.warning(
                  `ໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ລາຍການ ${lineItem.lineNumber} ຖືກເພີ່ມແລ້ວ`
                )
                return
              }

              // Create settlement line for each line item
              const newLine = {
                tempId: this.lineIdCounter++,
                type: 'invoice_line',
                invoiceId: invoice.id,
                lineItemId: lineItem.id,
                invoiceNumber: invoice.invoiceNumber,
                lineNumber: lineItem.lineNumber,
                agencyId: agency?.id || null,
                agencyName: agency?.name || agency?.agencyName || '',
                agency,
                description: `${invoice.invoiceNumber}-L${lineItem.lineNumber}: ${lineItem.description}`,
                amount: parseFloat(lineItem.lineTotal || 0),
                quantity: lineItem.quantity || 1,
                unitPrice: lineItem.unitPrice || 0,
                taxAmount: lineItem.taxAmount || 0,
                discountAmount: lineItem.discountAmount || 0,

                // GL Account Information from line item
                txnId: lineItem.txnId || invoice.defaultTxnId || null,
                DRglAccountId: lineItem.DRglAccountId || invoice.defaultDRglAccountId || null,
                CRglAccountId: lineItem.CRglAccountId || invoice.defaultCRglAccountId || null,

                // Additional line item details
                note: lineItem.note || null,
                taxRate: lineItem.taxRate || 0,
                discountRate: lineItem.discountRate || 0,

                // Store references for later use
                invoice,
                lineItem,

                // Currency information
                currencyId: invoice.currencyId,
                currency: invoice.currency,
              }

              this.settlementLines.push(newLine)
            })
          } else {
            // Fallback: If no line items, create a single line for the invoice header
            const existingLine = this.settlementLines.find(
              (line) => line.invoiceId === invoice.id && !line.lineItemId
            )

            if (existingLine) {
              this.$toast?.warning(
                `ໃບແຈ້ງໜີ້ ${invoice.invoiceNumber} ຖືກເພີ່ມແລ້ວ`
              )
              return
            }

            const newLine = {
              tempId: this.lineIdCounter++,
              type: 'invoice_header',
              invoiceId: invoice.id,
              lineItemId: null,
              invoiceNumber: invoice.invoiceNumber,
              lineNumber: null,
              agencyId: agency?.id || null,
              agencyName: agency?.name || agency?.agencyName || '',
              agency,
              description: invoice.description || invoice.invoiceNumber,
              amount: parseFloat(invoice.outstandingAmount || 0),
              quantity: null,
              unitPrice: null,
              taxAmount: 0,
              discountAmount: 0,

              // GL Account Information from invoice
              txnId: invoice.defaultTxnId || null,
              DRglAccountId: invoice.defaultDRglAccountId || null,
              CRglAccountId: invoice.defaultCRglAccountId || null,

              // Store invoice reference
              invoice,
              lineItem: null,

              // Currency information
              currencyId: invoice.currencyId,
              currency: invoice.currency,
            }

            this.settlementLines.push(newLine)
          }
        })

        // Calculate total lines added
        const totalLinesAdded = this.tempSelectedInvoices.reduce((total, invoice) => {
          return total + (invoice.lineItems?.length || 1)
        }, 0)

        // Show success message
        this.$toast?.success(
          `ເພີ່ມ ${totalLinesAdded} ລາຍການສຳເລັດ ຈາກ ${this.tempSelectedInvoices.length} ໃບແຈ້ງໜີ້`
        )

        // Auto-populate description if empty
        if (!this.form.description && this.tempSelectedInvoices.length > 0) {
          const invoiceNumbers = this.tempSelectedInvoices
            .map((inv) => inv.invoiceNumber)
            .join(', ')
          this.form.description = `ຊຳລະໃບແຈ້ງໜີ້: ${invoiceNumbers}`
        }

        this.calculateTotals()
        this.closeInvoiceSelector()

      } catch (error) {
        console.error('Error adding invoice line items:', error)
        this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການເພີ່ມລາຍການໃບແຈ້ງໜີ້')
      }
    },

    // =====================================================
    // INVOICE FILTERING AND SEARCH
    // =====================================================
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

    closeInvoiceSelector() {
      this.showInvoiceSelector = false
      this.tempSelectedInvoices = []
      this.invoiceSearchTerm = ''
      this.selectedAgencyFilter = ''
      this.filteredInvoices = [...this.outstandingInvoices]
    },

    // =====================================================
    // DIALOG MANAGEMENT METHODS
    // =====================================================
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

    closeDialog() {
      this.$emit('close')
    },

    handleOverlayClick() {
      this.closeDialog()
    },

    // =====================================================
    // MOU INVOICE GENERATION
    // =====================================================
    onInvoiceGenerated(invoiceData) {
      if (!invoiceData?.lines?.length) {
        this.$toast?.error('No invoice lines received')
        return
      }

      const mouInfo = invoiceData.mouInfo || {}
      const batchInfo = invoiceData.batchInfo || {}

      invoiceData.lines.forEach((line) => {
        const description = `${mouInfo.jobCode || 'MOU'} | ${batchInfo.runningNo || 'Batch'
          } | ${invoiceData.agencyCode || 'Agency'} | ${line.applicantName} (${line.passportNo
          })`

        this.settlementLines.push({
          tempId: this.lineIdCounter++,
          type: 'mou',
          invoiceId: null,
          lineItemId: null,
          invoiceNumber: invoiceData.invoiceNumber || '',
          lineNumber: null,
          agencyId: invoiceData.agencyId || null,
          applicantId: line.applicantId || null,
          DRglAccountId: null,
          CRglAccountId: null,
          agencyName: `${invoiceData.agencyName} (${invoiceData.agencyCode})`,
          description,
          amount: parseFloat(line.amount || 0),
          quantity: 1,
          unitPrice: parseFloat(line.amount || 0),
          taxAmount: 0,
          discountAmount: 0,
          txnId: null,
          currencyId: this.form.currencyId,
        })
      })

      this.$toast?.success(
        `Added ${invoiceData.lines.length} MOU lines to settlement`
      )
      this.closeMOUDialog()
    },

    // =====================================================
    // VALIDATION AND FORM SUBMISSION
    // =====================================================
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
        if (!line.txnId) {
          hasLineErrors = true
          this.$toast?.error(`ລາຍການທີ ${index + 1}: ກະລຸນາເລືອກລະຫັດການເງິນ`)
        }

        if (!line.amount || line.amount <= 0) {
          hasLineErrors = true
          this.$toast?.error(
            `ລາຍການທີ ${index + 1}: ກະລຸນາໃສ່ຈຳນວນເງິນທີ່ຖືກຕ້ອງ`
          )
        }

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

    submitForm() {
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
            lineItemId: line.lineItemId, // Include line item ID
            invoiceNumber: line.invoiceNumber,
            lineNumber: line.lineNumber, // Include line number
            agencyId: line.agencyId,
            applicantId: line.applicantId,
            DRglAccountId: line.DRglAccountId || null,
            CRglAccountId: line.CRglAccountId || null,
            description: line.description,
            amount: parseFloat(line.amount || 0),
            quantity: line.quantity || null,
            unitPrice: line.unitPrice || null,
            taxAmount: line.taxAmount || 0,
            discountAmount: line.discountAmount || 0,
            txnId: line.txnId,
            currencyId: line.currencyId || this.form.currencyId,
          })),
        }

        this.$emit('save', formData)
      } catch (error) {
        console.error('Error submitting form:', error)
        this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການບັນທຶກ')
      } finally {
        this.isSubmitting = false
      }
    },

    // =====================================================
    // APPROVAL WORKFLOW METHODS
    // =====================================================
    approveSettlement() {
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
        this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການອະນຸມັດ')
      } finally {
        this.isSubmitting = false
      }
    },

    completeSettlement() {
      if (!this.canComplete) return
      this.isSubmitting = true
      try {
        this.$emit('complete', { id: this.form.id, status: 'completed' })
      } catch (error) {
        console.error('Error completing settlement:', error)
        this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການປິດງານ')
      } finally {
        this.isSubmitting = false
      }
    },

    // =====================================================
    // UTILITY AND HELPER METHODS
    // =====================================================
    clearFieldError(field) {
      if (this.errors[field]) {
        this.$delete(this.errors, field)
      }
    },

    getAgencyName(invoice) {
      const agency = invoice.agency || invoice.vendor
      return agency?.name || agency?.agencyName || 'N/A'
    },

    getTransactionCodeLabel(txnId) {
      const txn = this.transactionCodes.find((t) => t.id === txnId)
      return txn ? `${txn.code} - ${txn.description}` : ''
    },

    // Helper method to get settlement lines summary
    getSettlementSummary() {
      const summary = {
        totalLines: this.settlementLines.length,
        totalAmount: 0,
        byInvoice: {},
        byAgency: {},
        byTxnType: {},
        byType: {},
      }

      this.settlementLines.forEach(line => {
        summary.totalAmount += parseFloat(line.amount) || 0

        // Group by invoice
        if (line.invoiceNumber) {
          const invoiceKey = line.invoiceNumber
          if (!summary.byInvoice[invoiceKey]) {
            summary.byInvoice[invoiceKey] = { lines: 0, amount: 0 }
          }
          summary.byInvoice[invoiceKey].lines++
          summary.byInvoice[invoiceKey].amount += parseFloat(line.amount) || 0
        }

        // Group by agency
        const agencyKey = line.agencyName || 'Unknown'
        if (!summary.byAgency[agencyKey]) {
          summary.byAgency[agencyKey] = { lines: 0, amount: 0 }
        }
        summary.byAgency[agencyKey].lines++
        summary.byAgency[agencyKey].amount += parseFloat(line.amount) || 0

        // Group by transaction type
        const txnKey = line.txnId || 'No TxnId'
        if (!summary.byTxnType[txnKey]) {
          summary.byTxnType[txnKey] = { lines: 0, amount: 0 }
        }
        summary.byTxnType[txnKey].lines++
        summary.byTxnType[txnKey].amount += parseFloat(line.amount) || 0

        // Group by settlement type
        const typeKey = line.type || 'unknown'
        if (!summary.byType[typeKey]) {
          summary.byType[typeKey] = { lines: 0, amount: 0 }
        }
        summary.byType[typeKey].lines++
        summary.byType[typeKey].amount += parseFloat(line.amount) || 0
      })

      return summary
    },

    // =====================================================
    // FORMATTING METHODS
    // =====================================================
    formatCurrency(amount) {
      if (!this.selectedCurrency) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount || 0)
      }

      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.selectedCurrency.code || 'USD',
      }).format(amount || 0)
    },

    formatDate(date) {
      if (!date) return 'N/A'
      return new Date(date).toLocaleDateString('en-GB')
    },

    formatPrice(amount) {
      return new Intl.NumberFormat('lo-LA', {
        style: 'currency',
        currency: this.selectedCurrency?.code || 'LAK'
      }).format(amount || 0)
    },
  },
}
</script>

<style scoped>
.settlement-modal-card {
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

.settlement-form {
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

/* Premium summary dashboard card */
.summary-card-premium {
  border-left: 5px solid #10b981 !important;
  border: 1px solid #e2e8f0;
}

.total-row-highlight {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
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