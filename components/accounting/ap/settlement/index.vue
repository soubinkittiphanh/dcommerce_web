<template>
  <div v-if="visible">
    <div class="modal-overlay" @click.self="handleOverlayClick">
      <div class="enhanced-dialog" @click.stop>
        <!-- Header -->
        <div class="modal-header primary">
          <div class="d-flex align-center">
            <v-avatar color="white" size="32" class="mr-3">
              <v-icon color="primary" small>mdi-cash-multiple</v-icon>
            </v-avatar>
            <div>
              <h4 class="font-weight-bold mb-0">
                {{ isEditMode ? 'ແກ້ໄຂການຊຳລະ (Edit AP Settlement)' : 'ສ້າງການຊຳລະໃໝ່ (Create New AP Settlement)' }}
              </h4>
              <div class="white--text opacity-80" style="font-size: 0.8rem;">
                {{ isEditMode ? `Settlement #: ${form.id || '-'}` : 'Drafting new settlement' }}
              </div>
            </div>
          </div>
          <div class="d-flex align-center">
            <v-btn v-if="isEditMode" small dark text @click="openAuditDialog" class="mr-2">
              <v-icon left small>mdi-history</v-icon>
              ປະຫວັດ
            </v-btn>
            <v-btn icon dark @click="closeDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>

        <!-- Body -->
        <div class="modal-body pa-6">
          <form @submit.prevent="submitForm">
            <!-- Basic Settlement Information -->
            <v-card outlined class="form-section-card mb-6">
              <v-card-title class="section-card-title py-3">
                <v-icon small color="primary" class="mr-2">mdi-credit-card</v-icon>
                <span>ຂໍ້ມູນການຊຳລະ (Settlement Info)</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pa-4">
                <v-row dense>
                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">ວັນທີຊຳລະ</label>
                      <v-text-field v-model="form.settlementDate" type="date" outlined dense hide-details="auto"
                        :error-messages="errors.settlementDate" />
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">ວິທີການຊຳລະ</label>
                      <v-autocomplete v-model="form.paymentMethodId" :items="paymentMethods" item-value="id"
                        item-text="payment_name" outlined dense clearable hide-details="auto"
                        placeholder="ເລືອກວິທີການຊຳລະ" :error-messages="errors.paymentMethodId">
                        <template v-slot:item="{ item }">
                          <small>{{ item.payment_name }}</small>
                        </template>
                        <template v-slot:selection="{ item }">
                          <small>{{ item.payment_name }}</small>
                        </template>
                      </v-autocomplete>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">ສະກຸນເງິນ</label>
                      <v-autocomplete v-model="form.currencyId" :items="currencies" item-value="id" item-text="name"
                        outlined dense clearable hide-details="auto" placeholder="ເລືອກສະກຸນເງິນ"
                        :error-messages="errors.currencyId" @change="onCurrencyChange">
                        <template v-slot:selection="{ item }">
                          <small>{{ item.name }} ({{ item.code }})</small>
                        </template>
                      </v-autocomplete>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3">
                    <div class="form-group custom-input-group">
                      <label class="required">ອັດຕາແລກປ່ຽນ <span v-if="selectedCurrency" class="grey--text">({{
                          selectedCurrency.code }} /
                          LAK)</span></label>
                      <v-text-field v-model="form.exchangeRate" type="number" step="0.0001" outlined dense
                        hide-details="auto" :error-messages="errors.exchangeRate" @blur="calculateExchangeAmounts" />
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="form-group custom-input-group">
                      <label>ບັນຊີທະນາຄານ</label>
                      <v-autocomplete v-model="form.bankAccountId" :items="bankAccounts" item-value="id"
                        item-text="accountNumber" outlined dense clearable hide-details="auto"
                        placeholder="ເລືອກບັນຊີທະນາຄານ" :error-messages="errors.bankAccountId">
                        <template v-slot:selection="{ item }">
                          <small>{{ item.accountNumber }} - {{ item.bankName }}</small>
                        </template>
                      </v-autocomplete>
                    </div>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-group custom-input-group">
                      <label>ອ້າງອີງ</label>
                      <v-text-field v-model="form.reference" outlined dense hide-details="auto"
                        placeholder="ຫມາຍເລກອ້າງອີງ" />
                    </div>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-group custom-input-group">
                      <label>ຄຳອະທິບາຍ (Description)</label>
                      <v-textarea v-model="form.description" outlined dense rows="2" hide-details="auto"
                        placeholder="ຄຳອະທິບາຍການຊຳລະ" />
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Settlement Lines Section -->
            <v-card outlined class="form-section-card mb-6">
              <v-card-title class="section-card-title py-3 d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <v-icon small color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
                  <span>ລາຍການຈັດສັນ (Allocations)</span>
                </div>
                <div class="d-flex align-center">
                  <v-btn small color="info" outlined @click="openMOUDialog" :disabled="!canModifyAllocations"
                    v-if="enableMOUbutton" class="mr-2">
                    <v-icon left small>mdi-file-document-outline</v-icon>ເພີ່ມຈາກ MOU
                  </v-btn>
                  <v-btn small color="success" outlined @click="addManualLine" :disabled="!canModifyAllocations"
                    class="mr-2">
                    <v-icon left small>mdi-plus</v-icon>ເພີ່ມລາຍການ
                  </v-btn>
                  <v-btn small color="primary" depressed @click="showInvoiceSelector = true"
                    :disabled="!canModifyAllocations">
                    <v-icon left small>mdi-file-invoice</v-icon>ເລືອກຈາກໃບແຈ້ງໜີ້
                  </v-btn>
                </div>
              </v-card-title>
              <v-divider></v-divider>

              <!-- Empty State -->
              <v-card-text v-if="settlementLines.length === 0" class="pa-10 text-center">
                <v-icon size="64" color="grey lighten-2">mdi-clipboard-list-outline</v-icon>
                <h4 class="grey--text text--darken-1 mt-4">ຍັງບໍ່ມີລາຍການຈັດສັນ</h4>
                <div class="mt-4">
                  <v-btn color="info" outlined small @click="openMOUDialog" v-if="enableMOUbutton" class="mx-1">
                    <v-icon left small>mdi-file-document-outline</v-icon>ເພີ່ມຈາກ MOU
                  </v-btn>
                  <v-btn color="success" outlined small @click="addManualLine" class="mx-1">
                    <v-icon left small>mdi-plus-circle</v-icon>ເພີ່ມລາຍການດ້ວຍມື
                  </v-btn>
                  <v-btn color="primary" small @click="showInvoiceSelector = true" class="mx-1">
                    <v-icon left small>mdi-file-invoice</v-icon>ເລືອກຈາກໃບແຈ້ງໜີ້
                  </v-btn>
                </div>
              </v-card-text>

              <!-- Settlement Lines Table -->
              <div v-else class="line-items-container pb-0">
                <v-simple-table dense class="modern-line-table">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th style="width: 40px">#</th>
                        <th style="width: 100px">ປະເພດ</th>
                        <th style="width: 150px">ເລກທີໃບແຈ້ງໜີ້</th>
                        <th>{{ formLabel ? formLabel.vendor : 'ຜູ້ສະໜອງ' }}</th>
                        <th style="width: 250px">ລະຫັດການເງິນ <span class="error--text">*</span></th>
                        <th>ຄຳອະທິບາຍ</th>
                        <th v-if="enableGL" style="width: 150px">DR Account</th>
                        <th v-if="enableGL" style="width: 150px">CR Account</th>
                        <th style="width: 150px" class="text-right">ຈຳນວນເງິນ</th>
                        <th style="width: 60px" class="text-center">ລຶບ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(line, index) in settlementLines" :key="line.tempId">
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
                            class="table-input" />
                          <span v-else class="text-truncate font-weight-medium" :title="line.invoiceNumber">{{
                            line.invoiceNumber || '-' }}</span>
                        </td>
                        <td>
                          <v-autocomplete v-if="line.type === 'manual'" v-model="line.agencyId" :items="agencies"
                            item-value="id" item-text="agencyName" :disabled="!canModifyAllocations" dense outlined
                            hide-details placeholder="ເລືອກຜູ້ສະໜອງ" class="table-input">
                            <template v-slot:item="{ item }"><small>{{ item.agencyName }} - {{ item.agencyCode
                                }}</small></template>
                            <template v-slot:selection="{ item }"><small class="text-truncate">{{ item.agencyName
                                }}</small></template>
                          </v-autocomplete>
                          <span v-else class="text-truncate" :title="line.agencyName || line.agency?.agencyName">{{
                            line.agencyName ||
                            line.agency?.agencyName || '-' }}</span>
                        </td>
                        <td>
                          <v-autocomplete v-model="line.txnId"
                            :items="transactionCodes.filter((t) => (t.type === 'EXPENSE' || t.type != '1') && t.isActive)"
                            item-value="id" item-text="code" :loading="loadingTransactionCodes"
                            :disabled="!canModifyAllocations || loadingTransactionCodes"
                            :error="!line.txnId && errors.settlementLines" dense outlined clearable hide-details
                            placeholder="ລະຫັດການເງິນ" class="table-input">
                            <template v-slot:item="{ item }"><small>{{ item.code }} - {{ item.description
                                }}</small></template>
                            <template v-slot:selection="{ item }"><small class="text-truncate">{{ item.code
                                }}</small></template>
                          </v-autocomplete>
                        </td>
                        <td>
                          <v-text-field v-model="line.description" dense outlined hide-details placeholder="ຄຳອະທິບາຍ"
                            :disabled="!canModifyAllocations" class="table-input" />
                        </td>
                        <td v-if="enableGL">
                          <v-autocomplete v-model="line.DRglAccountId" :items="glAccounts" item-value="id"
                            item-text="accountNumber" dense outlined clearable hide-details placeholder="DR"
                            class="table-input">
                            <template v-slot:item="{ item }"><small>{{ item.accountNumber }}</small></template>
                            <template v-slot:selection="{ item }"><small>{{ item.accountNumber }}</small></template>
                          </v-autocomplete>
                        </td>
                        <td v-if="enableGL">
                          <v-autocomplete v-model="line.CRglAccountId" :items="glAccounts" item-value="id"
                            item-text="accountNumber" dense outlined clearable hide-details placeholder="CR"
                            class="table-input">
                            <template v-slot:item="{ item }"><small>{{ item.accountNumber }}</small></template>
                            <template v-slot:selection="{ item }"><small>{{ item.accountNumber }}</small></template>
                          </v-autocomplete>
                        </td>
                        <td>
                          <v-text-field v-model.number="line.amount" type="number" step="0.01" dense outlined
                            hide-details class="table-input amount-input" :disabled="!canModifyAllocations"
                            @input="$forceUpdate()" />
                        </td>
                        <td class="text-center">
                          <v-btn icon small color="error" :disabled="!canModifyAllocations" @click="removeLine(index)">
                            <v-icon small>mdi-trash-can-outline</v-icon>
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>

                <div class="allocation-summary px-4 py-3 grey lighten-4 d-flex justify-end align-center"
                  style="border-top: 1px solid #e0e0e0; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;">
                  <span class="mr-4 grey--text text--darken-1 font-weight-medium">ລວມຈຳນວນເງິນຊຳລະ:</span>
                  <span class="text-h6 font-weight-bold success--text">{{ formatCurrency(totalAllocated) }}</span>
                </div>
              </div>
            </v-card>

            <!-- Approval Section -->
            <v-card v-if="showApprovalSection" outlined class="form-section-card mb-6">
              <v-card-title class="section-card-title py-3">
                <v-icon small color="primary" class="mr-2">mdi-check-decagram</v-icon>
                <span>ການອະນຸມັດ (Approval)</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pa-4">
                <v-row dense>
                  <v-col cols="12" md="6">
                    <div class="form-group custom-input-group">
                      <label>ຜູ້ອະນຸມັດ</label>
                      <v-text-field v-model="checkerName" disabled outlined dense hide-details="auto" />
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="form-group custom-input-group">
                      <label>ໝາຍເຫດການອະນຸມັດ</label>
                      <v-textarea v-model="form.approvalNote" outlined dense rows="2" placeholder="ໝາຍເຫດການອະນຸມັດ"
                        :disabled="!canApprove" hide-details="auto" />
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </form>
        </div>

        <!-- Footer -->
        <v-card-actions class="dialog-footer px-6 py-4">
          <v-spacer></v-spacer>
          <v-btn text @click="closeDialog" color="grey darken-1">
            <v-icon left>mdi-close</v-icon>ຍົກເລີກ
          </v-btn>

          <v-btn v-if="canApprove && form.status === 'pending'" color="success" outlined class="ml-2"
            @click="approveSettlement" :disabled="isSubmitting">
            <v-icon left>mdi-check</v-icon>ອະນຸມັດ
          </v-btn>

          <v-btn v-if="canComplete && ['pending', 'approved'].includes(form.status)" color="info" class="ml-2"
            @click="completeSettlement" :disabled="isSubmitting">
            <v-icon left>mdi-check-circle</v-icon>ສຳເລັດ
          </v-btn>

          <v-btn v-if="isEditMode" color="info" outlined class="ml-2" @click="printSettlement(settlement)">
            <v-icon left>mdi-printer</v-icon>Print Voucher
          </v-btn>

          <v-btn color="primary" class="ml-2" :loading="isSubmitting" :disabled="!canModify" @click="submitForm">
            <v-icon left>mdi-content-save</v-icon>{{ isEditMode ? 'ອັບເດດ' : 'ບັນທຶກ' }}
          </v-btn>
        </v-card-actions>
      </div>
    </div>

    <!-- Invoice Selector Modal -->
    <v-dialog v-model="showInvoiceSelector" max-width="900px" persistent scrollable>
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
              <v-text-field v-model="invoiceSearchTerm" label="ຄົ້ນຫາເລກທີໃບແຈ້ງໜີ້" outlined dense clearable
                prepend-inner-icon="mdi-magnify" @input="filterInvoices" />
            </v-col>
            <v-col cols="12" md="6">
              <v-select v-model="selectedAgencyFilter" :items="agencyFilterOptions" item-text="name" item-value="id"
                label="ຕົວແທນ" outlined dense clearable prepend-inner-icon="mdi-account" @change="filterInvoices" />
            </v-col>
          </v-row>

          <v-data-table :headers="invoiceTableHeaders" :items="filteredInvoices" :items-per-page="10"
            class="elevation-1" show-select v-model="tempSelectedInvoices" item-key="id">
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
      const item = this.getSPF.find((spf) => spf.code == 'LABEL_AC_CUS')
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
    getSPF() {
      return this.$store.getters.findSPF;
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
    async onCurrencyChange() {
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
        this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການອະນຸມັດ')
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 199;
}

.enhanced-dialog {
  background: #f8fafc;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: modal-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modal-enter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-header {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-primary-darken1) 100%);
  color: white;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  position: relative;
}

.form-section-card {
  border-radius: 12px !important;
  background-color: white !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05) !important;
}

.section-card-title {
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  color: #2d3748 !important;
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

.table-input ::v-deep .v-input__control {
  min-height: 32px !important;
}

.table-input ::v-deep .v-input__slot {
  min-height: 32px !important;
  background-color: #fff !important;
}

.amount-input ::v-deep input {
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.dialog-footer {
  background-color: white;
  border-top: 1px solid #e2e8f0;
}

.opacity-80 {
  opacity: 0.8;
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