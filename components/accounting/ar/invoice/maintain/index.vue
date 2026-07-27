<template>
  <div>
    <!-- Main Invoice Modal Dialog -->
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
              <v-icon color="primary">mdi-file-invoice-dollar</v-icon>
            </v-avatar>
            <div class="flex-grow-1">
              <h4 class="text-h6 font-weight-bold grey--text text--darken-3 mb-0">
                {{ isEdit ? 'ແກ້ໄຂໃບແຈ້ງໜີ້ (Edit AR Invoice)' : 'ເພີ່ມໃບແຈ້ງໜີ້ໃໝ່ (Create New AR Invoice)' }}
              </h4>
              <div class="text-caption grey--text text--darken-1 mt-0">
                {{ isEdit ? `Invoice #: ${form.invoiceNumber}` : 'Drafting new invoice' }}
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
          <div v-else class="invoice-form">
            <form @submit.prevent="handleSubmit">
              <!-- Invoice Information Section Card -->
              <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
                <v-card-title class="text-subtitle-1 font-weight-bold primary--text pa-4 pb-2">
                  <v-icon left color="primary">mdi-information-outline</v-icon>
                  ຂໍ້ມູນພື້ນຖານ (Basic Information)
                </v-card-title>

                <v-card-text class="pa-4">
                  <v-row dense>
                    <!-- Invoice Number -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.invoiceNumber"
                        type="text"
                        label="ເລກທີໃບແຈ້ງໜີ້ (Invoice Number)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.invoiceNumber"
                        placeholder="INV-2025-001"
                        :readonly="isEdit"
                        required
                      />
                    </v-col>

                    <!-- Client/Agency Autocomplete -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-autocomplete
                        v-model="form.agencyId"
                        :items="agencies"
                        item-value="id"
                        item-text="name"
                        :label="formLabel.vendor"
                        outlined
                        dense
                        hide-details="auto"
                        :error="!!errors.agencyId"
                        :error-messages="errors.agencyId"
                        clearable
                        required
                        @change="onVendorChange"
                      >
                        <template v-slot:item="{ item }">
                          <v-list-item-content class="py-1">
                            <v-list-item-title class="text-body-2 font-weight-medium">
                              {{ item.name || item.agencyName }}
                              <span class="grey--text font-weight-regular">
                                ({{ item.code || item.agencyCode }})
                              </span>
                            </v-list-item-title>
                          </v-list-item-content>
                        </template>
                        <template v-slot:selection="{ item }">
                          {{ item.name || item.agencyName }} ({{ item.code || item.agencyCode }})
                        </template>
                      </v-autocomplete>
                    </v-col>

                    <!-- Job Batch Autocomplete (Conditional) -->
                    <v-col v-if="enableBatchJobbutton" cols="12" sm="6" md="4" lg="3">
                      <v-autocomplete
                        v-model="form.jobBatchId"
                        :items="jobBatches"
                        item-value="id"
                        item-text="runningNo"
                        label="ແບັດຈັອບ (Job Batch)"
                        outlined
                        dense
                        hide-details="auto"
                        :filter="jobBatchFilter"
                        :error="!!errors.jobBatchId"
                        :error-messages="errors.jobBatchId"
                        clearable
                        placeholder="ເລືອກແບັດຈັອບ"
                        @change="onBatchJobChange"
                      >
                        <template v-slot:item="{ item }">
                          <v-list-item-content class="py-1">
                            <v-list-item-title class="text-body-2 font-weight-medium">
                              {{ item.runningNo }} ({{ item.totalPositions || item.mou?.jobTitle }})
                            </v-list-item-title>
                          </v-list-item-content>
                        </template>
                        <template v-slot:selection="{ item }">
                          {{ item.runningNo }} ({{ item.totalPositions || item.mou?.jobTitle }})
                        </template>
                      </v-autocomplete>
                    </v-col>

                    <!-- Status Selection -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-select
                        v-model="form.status"
                        :items="[
                          { text: 'ແບບຮ່າງ (Draft)', value: 'draft' },
                          { text: 'ສົ່ງແລ້ວ (Sent)', value: 'sent' },
                          { text: 'ຈ່າຍແລ້ວ (Paid)', value: 'paid' },
                          { text: 'ເກີນກຳນົດ (Overdue)', value: 'overdue' },
                          { text: 'ຍົກເລີກ (Cancelled)', value: 'cancelled' }
                        ]"
                        label="ສະຖານະ (Status)"
                        outlined
                        dense
                        hide-details="auto"
                      />
                    </v-col>

                    <!-- Invoice Date -->
                    <v-col cols="12" sm="6" md="4" lg="3">
                      <v-text-field
                        v-model="form.invoiceDate"
                        type="date"
                        label="ວັນທີໃບແຈ້ງໜີ້ (Invoice Date)"
                        outlined
                        dense
                        hide-details="auto"
                        :error-messages="errors.invoiceDate"
                        required
                        @change="calculateDueDate"
                      />
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

                    <!-- Currency selection -->
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
                        :filter="currencyFilter"
                        :error="!!errors.currencyId"
                        :error-messages="errors.currencyId"
                        clearable
                        placeholder="ເລືອກສະກຸນເງິນ"
                        @change="onCurrencyChange"
                      >
                        <template v-slot:item="{ item }">
                          <v-list-item-content class="py-1">
                            <v-list-item-title class="text-body-2 font-weight-medium">
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

                    <!-- Description Notes -->
                    <v-col cols="12" :md="isEdit ? 6 : 12">
                      <v-textarea
                        v-model="form.description"
                        label="ລາຍລະອຽດ (Description)"
                        outlined
                        dense
                        rows="2"
                        auto-grow
                        hide-details="auto"
                        placeholder="ລາຍລະອຽດກ່ຽວກັບໃບແຈ້ງໜີ້..."
                      />
                    </v-col>

                    <!-- Reason for Edit (Only Edit Mode) -->
                    <v-col v-if="isEdit" cols="12" md="6">
                      <v-text-field
                        v-model="form.reason"
                        label="ເຫດຜົນຂອງການແກ້ໄຂ (Reason for Edit) *"
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
                    <v-btn
                      color="grey darken-1"
                      outlined
                      small
                      depressed
                      class="px-3 rounded-lg"
                      @click="addMultipleLines(5)"
                    >
                      +5 ລາຍການ
                    </v-btn>
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
                  <v-btn
                    color="primary"
                    depressed
                    class="rounded-lg"
                    @click="addNewLine"
                  >
                    <v-icon left>mdi-plus-circle-outline</v-icon>
                    ເພີ່ມລາຍການທຳອິດ
                  </v-btn>
                </div>

                <!-- Line Items Table Display -->
                <v-card-text v-else class="pa-4">
                  <div class="line-items-notice px-4 py-2 mb-4 d-flex align-center rounded blue lighten-5 blue--text text--darken-3 text-caption">
                    <v-icon small color="blue darken-2" class="mr-2">mdi-information-outline</v-icon>
                    <span>ກະລຸນາໃສ່ຂໍ້ມູນໃຫ້ຄົບຖ້ວນໃນທຸກຊ່ອງທີ່ມີເຄື່ອງໝາຍດາວ (*)</span>
                  </div>

                  <div class="table-container border rounded-lg overflow-hidden">
                    <table class="table-compact-vuetify">
                      <thead>
                        <tr>
                          <th style="width: 40px" class="text-center">#</th>
                          <th style="width: 250px">ລາຍລະອຽດ (Description) *</th>
                          <th style="width: 220px">ລະຫັດການເງິນ (Financial Code) *</th>
                          <th style="width: 120px" class="text-right">ຈຳນວນ *</th>
                          <th style="width: 140px" class="text-right">ລາຄາຕໍ່ຫົວ *</th>
                          <th style="width: 180px" v-if="enableGL">DR Account</th>
                          <th style="width: 180px" v-if="enableGL">CR Account</th>
                          <th style="width: 140px" class="text-right">ລວມຕໍ່ແຖວ (Total)</th>
                          <th style="width: 50px" class="text-center">ລຶບ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(line, index) in lineItems" :key="line.tempId || line.id" class="line-row">
                          <td class="text-center font-weight-bold grey--text">{{ index + 1 }}</td>
                          <td>
                            <div class="pa-1">
                              <v-text-field
                                v-model="line.description"
                                dense
                                outlined
                                hide-details="auto"
                                :error="!!errors[`line_${index}_description`]"
                                placeholder="ລາຍລະອຽດສິນຄ້າ..."
                                @blur="calculateLineTotal(line)"
                              />
                            </div>
                          </td>
                          <td>
                            <div class="pa-1">
                              <v-autocomplete
                                v-model="line.txnId"
                                :items="transactionCodes.filter(t => t.type === 'INCOME' && t.isActive)"
                                item-value="id"
                                item-text="code"
                                :label="loadingTransactionCodes ? 'ກຳລັງໂຫຼດ...' : 'ເລືອກລະຫັດການເງິນ'"
                                :loading="loadingTransactionCodes"
                                :disabled="loadingTransactionCodes"
                                :error="!line.txnId && errors.settlementLines"
                                dense
                                outlined
                                clearable
                                hide-details="auto"
                              >
                                <template v-slot:item="{ item }">
                                  <v-list-item-content class="py-1">
                                    <v-list-item-title class="text-body-2">
                                      {{ item.code }} - {{ item.description }}
                                    </v-list-item-title>
                                  </v-list-item-content>
                                </template>
                                <template v-slot:selection="{ item }">
                                  {{ item.code }} - {{ item.description }}
                                </template>
                              </v-autocomplete>
                            </div>
                          </td>
                          <td>
                            <div class="pa-1">
                              <v-text-field
                                v-model="line.quantity"
                                type="number"
                                step="0.01"
                                min="0"
                                dense
                                outlined
                                hide-details="auto"
                                class="text-right-input"
                                :error="!!errors[`line_${index}_quantity`]"
                                @blur="calculateLineTotal(line)"
                              />
                            </div>
                          </td>
                          <td>
                            <div class="pa-1">
                              <v-text-field
                                v-model="line.unitPrice"
                                type="number"
                                step="0.01"
                                min="0"
                                dense
                                outlined
                                hide-details="auto"
                                class="text-right-input"
                                :error="!!errors[`line_${index}_unitPrice`]"
                                @blur="calculateLineTotal(line)"
                              />
                            </div>
                          </td>
                          
                          <!-- GL Account DR (if enabled) -->
                          <td v-if="enableGL">
                            <div class="pa-1">
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
                              >
                                <template v-slot:item="{ item }">
                                  <v-list-item-content class="py-1">
                                    <v-list-item-title class="text-body-2">
                                      {{ item.accountNumber }} - {{ item.accountName }}
                                    </v-list-item-title>
                                  </v-list-item-content>
                                </template>
                                <template v-slot:selection="{ item }">
                                  {{ item.accountNumber }} - {{ item.accountName }}
                                </template>
                              </v-autocomplete>
                            </div>
                          </td>

                          <!-- GL Account CR (if enabled) -->
                          <td v-if="enableGL">
                            <div class="pa-1">
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
                              >
                                <template v-slot:item="{ item }">
                                  <v-list-item-content class="py-1">
                                    <v-list-item-title class="text-body-2">
                                      {{ item.accountNumber }} - {{ item.accountName }}
                                    </v-list-item-title>
                                  </v-list-item-content>
                                </template>
                                <template v-slot:selection="{ item }">
                                  {{ item.accountNumber }} - {{ item.accountName }}
                                </template>
                              </v-autocomplete>
                            </div>
                          </td>

                          <!-- Line Total -->
                          <td class="text-right font-weight-bold pr-4 text-body-2 grey--text text--darken-3">
                            {{ formatCurrency(line.lineTotal || 0) }}
                          </td>

                          <!-- Delete Action -->
                          <td class="text-center">
                            <v-btn icon color="error" small @click="removeLine(index)" title="ລຶບລາຍການ">
                              <v-icon small>mdi-trash-can-outline</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Related Documents Section Card -->
              <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white">
                <v-card-title class="text-subtitle-1 font-weight-bold primary--text pa-4 pb-2">
                  <v-icon left color="primary">mdi-attachment-outline</v-icon>
                  ເອກະສານຂັດຕິດ (Related Documents)
                </v-card-title>
                
                <v-card-text class="pa-4">
                  <!-- File input field for new uploads -->
                  <v-file-input
                    multiple
                    outlined
                    dense
                    label="ເລືອກໄຟລ໌ເພື່ອອັບໂຫຼດ (Select files to upload)"
                    prepend-icon="mdi-paperclip"
                    append-icon="mdi-cloud-upload-outline"
                    class="mb-4"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.txt"
                    @change="handleFileUploads"
                    hide-details="auto"
                  />

                  <!-- List of current files -->
                  <div v-if="form.documents && form.documents.length > 0" class="mt-4">
                    <h5 class="text-subtitle-2 grey--text text--darken-3 mb-2 font-weight-bold">
                      ລາຍການເອກະສານ (Uploaded Documents):
                    </h5>
                    <v-row dense>
                      <v-col
                        v-for="(doc, idx) in form.documents"
                        :key="idx"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-card outlined class="pa-3 rounded-lg d-flex align-center justify-space-between grey lighten-5">
                          <div class="d-flex align-center overflow-hidden">
                            <v-icon color="primary" class="mr-2">
                              {{ getFileIcon(doc.name || doc.filename) }}
                            </v-icon>
                            <div class="d-flex flex-column text-left overflow-hidden">
                              <span class="text-body-2 font-weight-medium text-truncate">
                                {{ doc.name || doc.filename }}
                              </span>
                              <span class="text-caption grey--text" v-if="doc.size">
                                {{ formatFileSize(doc.size) }}
                              </span>
                            </div>
                          </div>
                          <v-btn icon color="error" small @click="removeDocument(idx)">
                            <v-icon small>mdi-delete-outline</v-icon>
                          </v-btn>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                  <div v-else class="text-center py-4 grey--text">
                    <v-icon large color="grey lighten-1" class="mb-2">mdi-file-document-outline</v-icon>
                    <div class="text-caption">ບໍ່ມີເອກະສານຂັດຕິດ (No attached documents)</div>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Total Amount Dashboard Card Summary -->
              <v-card outlined class="rounded-lg mb-6 shadow-sm overflow-hidden white" style="border-left: 5px solid #10b981 !important;">
                <v-card-text class="pa-4 grey lighten-5">
                  <v-row dense class="align-center justify-space-between text-center text-sm-left">
                    <v-col cols="12" sm="3" class="px-4 py-2 border-sm-right">
                      <div class="text-subtitle-2 grey--text text--darken-2 font-weight-bold">ລວມຍ່ອຍ (Subtotal)</div>
                      <div class="text-h6 font-weight-black grey--text text--darken-4 mt-1">
                        {{ formatCurrency(calculatedSubtotal) }}
                      </div>
                    </v-col>
                    <v-col cols="12" sm="3" class="px-4 py-2 border-sm-right">
                      <div class="text-subtitle-2 grey--text text--darken-2 font-weight-bold">ພາສີລວມ (Total Tax)</div>
                      <div class="text-h6 font-weight-black error--text mt-1">
                        {{ formatCurrency(calculatedTax) }}
                      </div>
                    </v-col>
                    <v-col cols="12" sm="3" class="px-4 py-2 border-sm-right">
                      <div class="text-subtitle-2 grey--text text--darken-2 font-weight-bold">ຍອດສຸດທິ (Net Amount)</div>
                      <div class="text-h6 font-weight-black info--text mt-1">
                        {{ formatCurrency(calculatedNet) }}
                      </div>
                    </v-col>
                    <v-col cols="12" sm="3" class="px-4 py-2">
                      <div class="text-subtitle-2 grey--text text--darken-2 font-weight-bold">ລວມທັງໝົດ (Grand Total)</div>
                      <div class="text-h5 font-weight-black success--text mt-1">
                        {{ formatCurrency(calculatedTotal) }}
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
            @click="printInvoice"
            title="ພິມໃບແຈ້ງໜີ້"
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

    <!-- AR INVOICE Audit Dialog -->
    <invoice-audit-dialog :visible="showAuditDialog" :invoice-id="form.id" :invoice-info="invoiceInfoForAudit"
      @close="closeAuditDialog" />

    <!-- AR Invoice Printer -->
    <a-r-invoice-printer :visible="showInvoicePrinter" :invoice-data="selectedInvoice" :agencies="agencies"
      :currencies="currencies" @close="showInvoicePrinter = false" />
  </div>
</template>


<script>
import InvoiceAuditDialog from '~/components/accounting/ar/invoice/audit'
import ARInvoicePrinter from '~/components/accounting/ar/invoice/voucher'

export default {
  name: 'InvoiceHeaderMaintain',
  components: {
    InvoiceAuditDialog,
    ARInvoicePrinter,
  },
  props: {
    glAccounts: { type: Array, default: () => [] },
    visible: {
      type: Boolean,
      default: false,
    },
    invoice: {
      type: Object,
      default: null,
    },
    customers: {
      type: Array,
      default: () => [],
    },
    agencies: {
      type: Array,
      default: () => [],
    },
    jobBatches: {
      type: Array,
      default: () => [],
    },
    currencies: {
      type: Array,
      default: () => [],
    },
    preselectedBatchId: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      transactionCodes: [], // Add this
      loadingTransactionCodes: false, // Add this
      selectedVendor: null,
      showAuditDialog: false,
      showInvoicePrinter: false,
      selectedInvoice: null,
      activeTab: 'header',
      formLoading: false,
      saving: false,
      errors: {},
      lineItems: [],
      nextTempId: 1,
      selectedCustomer: null,
      selectedCurrency: null,

      form: {
        id: null,
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        clientId: null,
        agencyId: null,
        jobBatchId: null,
        currencyId: null,
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
        status: 'draft',
        description: '',
        reason: '',
      },
    }
  },
  async mounted() {
    await this.loadTransactionCodes() // Add this
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
    enableBatchJobbutton() {
      const spf = this.getSPF.find((spf) => spf.code === 'AC_AR_BATCH_JOB')
      return spf?.value === 'Y'
    },
    enableGL() {
      const spf = this.getSPF.find((spf) => spf.code === 'AC_AR_GL_ENABLE')
      return spf?.value === 'Y'
    },
    isEdit() {
      return !!(this.invoice && this.invoice.id)
    },
    user() {
      return this.$auth.user || ''
    },
    invoiceInfoForAudit() {
      if (!this.form.id) return null

      return {
        invoiceNumber: this.form.invoiceNumber,
        totalAmount: this.calculatedTotal,
        invoiceDate: this.form.invoiceDate,
        status: this.form.status,
        clientId: this.form.clientId,
        agencyId: this.form.agencyId,
        jobBatchId: this.form.jobBatchId,
        currencyId: this.form.currencyId,
        description: this.form.description,
      }
    },
    calculatedSubtotal() {
      return this.lineItems.reduce((sum, line) => {
        const subtotal =
          (parseFloat(line.quantity) || 0) * (parseFloat(line.unitPrice) || 0)
        return sum + subtotal
      }, 0)
    },

    calculatedTax() {
      return this.lineItems.reduce(
        (sum, line) => sum + (parseFloat(line.taxAmount) || 0),
        0
      )
    },

    calculatedNet() {
      return this.calculatedSubtotal
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
        this.form.invoiceDate &&
        this.form.agencyId &&
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
    preselectedBatchId: {
      handler(batchId) {
        if (batchId && this.visible && !this.isEdit) {
          this.$nextTick(() => {
            this.form.jobBatchId = batchId
            this.onBatchJobChange()
          })
        }
      },
      immediate: true,
    },
    invoice: {
      handler() {
        if (this.visible) {
          this.initializeDialog()
        }
      },
    },
  },

  methods: {
    handleFileUploads(files) {
      if (!files) return
      const fileList = Array.isArray(files) ? files : [files]
      
      fileList.forEach(file => {
        // Limit to 10MB
        if (file.size > 10 * 1024 * 1024) {
          this.$toast?.error(`ໄຟລ໌ ${file.name} ມີຂະໜາດໃຫຍ່ເກີນ 10MB`)
          return
        }
        
        // Add to form.documents
        if (!this.form.documents) {
          this.$set(this.form, 'documents', [])
        }
        this.form.documents.push({
          name: file.name,
          size: file.size,
          rawFile: file
        })
      })
    },
    removeDocument(index) {
      this.form.documents.splice(index, 1)
    },
    getFileIcon(filename) {
      if (!filename) return 'mdi-file-document-outline'
      const ext = filename.split('.').pop().toLowerCase()
      if (ext === 'pdf') return 'mdi-file-pdf-box'
      if (['doc', 'docx'].includes(ext)) return 'mdi-file-word'
      if (['xls', 'xlsx'].includes(ext)) return 'mdi-file-excel'
      if (['png', 'jpg', 'jpeg'].includes(ext)) return 'mdi-file-image'
      return 'mdi-file-document-outline'
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    // Print Invoice Method
    async loadTransactionCodes() {
      this.loadingTransactionCodes = true
      try {
        const { data } = await this.$axios.get('/api/transaction-codes', {
          params: {
            includeInactive: false,
            type: 'INCOME', // Filter only INCOME types for invoices
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
    printInvoice() {
      if (!this.isEdit) {
        this.$toast?.warning('ກະລຸນາບັນທຶກໃບແຈ້ງໜີ້ກ່ອນພິມ')
        return
      }

      if (this.lineItems.length === 0) {
        this.$toast?.warning('ບໍ່ມີລາຍການສຳລັບພິມ')
        return
      }

      // Prepare complete invoice data
      const invoiceData = {
        id: this.form.id,
        invoiceNumber: this.form.invoiceNumber,
        invoiceDate: this.form.invoiceDate,
        dueDate: this.form.dueDate,
        agencyId: this.form.agencyId,
        jobBatchId: this.form.jobBatchId,
        currencyId: this.form.currencyId,
        exchangeRate: this.form.exchangeRate,
        status: this.form.status,
        description: this.form.description || '',
        lineItems: this.lineItems.map((line) => ({
          description: line.description || '-',
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxAmount: parseFloat(line.taxAmount) || 0,
          lineTotal: parseFloat(line.lineTotal) || 0,
        })),
      }

      // Set data first, then open dialog
      this.selectedInvoice = invoiceData

      // Use nextTick to ensure data is set before dialog opens
      this.$nextTick(() => {
        this.showInvoicePrinter = true
      })
    },

    async requestSequence() {
      try {
        const { data } = await this.$axios.get('/api/ar-invoices/sequence')

        if (data && data.success) {
          this.form.invoiceNumber = data.data.invoiceNumber
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

    updateSelectedVendor() {
      if (this.form.agencyId && this.agencies.length > 0) {
        this.selectedVendor = this.agencies.find(
          (v) => v.id === this.form.agencyId
        )
      } else {
        this.selectedVendor = null
      }
    },

    onVendorChange() {
      this.updateSelectedVendor()
      this.calculateDueDate()
      this.clearFieldError('agencyId')
    },

    openAuditDialog() {
      console.warn(`Opening dialog`)
      this.showAuditDialog = true
    },

    closeAuditDialog() {
      this.showAuditDialog = false
    },

    async initializeDialog() {
      this.activeTab = 'header'
      this.clearErrors()

      if (this.invoice) {
        this.form = {
          id: this.invoice.id,
          invoiceNumber: this.invoice.invoiceNumber,
          invoiceDate: this.invoice.invoiceDate
            ? this.invoice.invoiceDate.split('T')[0]
            : '',
          dueDate: this.invoice.dueDate
            ? this.invoice.dueDate.split('T')[0]
            : '',
          agencyId: this.invoice.agencyId,
          jobBatchId: this.invoice.jobBatchId,
          currencyId: this.invoice.currencyId,
          exchangeRate: this.invoice.exchangeRate || 1.0,
          totalAmount: this.invoice.totalAmount || 0.0,
          taxAmount: this.invoice.taxAmount || 0.0,
          netAmount: this.invoice.netAmount || 0.0,
          status: this.invoice.status || 'draft',
          description: this.invoice.description || '',
          reason: '',
          documents: this.invoice.documents ? JSON.parse(JSON.stringify(this.invoice.documents)) : [],
        }

        await this.loadLineItems(this.invoice.id)
      } else {
        this.resetForm()

        this.form.invoiceDate = new Date().toISOString().split('T')[0]
        const dueDate = new Date()
        dueDate.setDate(dueDate.getDate() + 30)
        this.form.dueDate = dueDate.toISOString().split('T')[0]

        if (this.currencies.length > 0) {
          const defaultCurrency =
            this.currencies.find((c) => c.code === 'USD') || this.currencies[0]
          this.form.currencyId = defaultCurrency.id
          this.selectedCurrency = defaultCurrency
        }

        this.lineItems = [this.createEmptyLine()]
        this.requestSequence()
      }

      this.updateSelectedCustomer()
      this.updateSelectedCurrency()
    },

    resetDialog() {
      this.resetForm()
      this.lineItems = []
      this.selectedCustomer = null
      this.selectedCurrency = null
      this.selectedInvoice = null
      this.clearErrors()
      this.activeTab = 'header'
      this.formLoading = false
      this.saving = false
    },

    async loadLineItems(invoiceId) {
      try {
        const { data } = await this.$axios.get(
          `/api/ar-invoice-lines/by-header/${invoiceId}`
        )
        this.lineItems = data.data || [this.createEmptyLine()]

        this.lineItems.forEach((line) => {
          if (!line.tempId) {
            line.tempId = this.nextTempId++
          }
        })
      } catch (error) {
        console.error('Error loading line items:', error)
        this.lineItems = [this.createEmptyLine()]
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
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0,
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
      const taxRate = parseFloat(line.taxRate) || 0

      const subtotal = quantity * unitPrice
      const taxAmount = subtotal * (taxRate / 100)
      line.taxAmount = taxAmount
      line.lineTotal = subtotal + taxAmount
    },

    updateSelectedCustomer() {
      if (this.form.agencyId && this.agencies.length > 0) {
        this.selectedCustomer = this.agencies.find(
          (c) => c.id === this.form.agencyId
        )
      } else {
        this.selectedCustomer = null
      }
    },

    updateSelectedCurrency() {
      if (this.form.currencyId && this.currencies.length > 0) {
        this.selectedCurrency = this.currencies.find(
          (c) => c.id === this.form.currencyId
        )
        this.form.exchangeRate = this.currencies.find(
          (c) => c.id === this.form.currencyId
        ).rate
      } else {
        this.selectedCurrency = null
      }
    },

    onCustomerChange() {
      this.updateSelectedCustomer()
      this.calculateDueDate()
      this.clearFieldError('agencyId')
    },

    onBatchJobChange() {
      this.clearFieldError('jobBatchId')

      if (!this.form.jobBatchId) {
        return
      }

      const selectedBatch = this.jobBatches.find(
        (batch) => batch.id === this.form.jobBatchId
      )

      if (!selectedBatch) {
        return
      }

      if (
        this.lineItems.length > 0 &&
        this.lineItems.some((line) => line.description)
      ) {
        const shouldClear = confirm(
          'ມີລາຍການສິນຄ້າຢູ່ແລ້ວ. ທ່ານຕ້ອງການແທນທີ່ດ້ວຍລາຍການຈາກ Job Batch ບໍ?'
        )
        if (!shouldClear) {
          return
        }
      }

      this.lineItems = []

      const mou = selectedBatch.mou

      if (!mou) {
        this.showToast('ບໍ່ພົບຂໍ້ມູນ MOU ສຳລັບ Job Batch ນີ້', 'warning')
        this.lineItems = [this.createEmptyLine()]
        return
      }

      const pmCharge = parseFloat(mou.pmCharge) || 0
      const numberOfWorkers = parseFloat(mou.numberOfWorkers) || 1
      const unitPrice =
        numberOfWorkers > 0 ? pmCharge / numberOfWorkers : pmCharge

      const quantity = parseFloat(selectedBatch.totalPositions) || 0

      if (mou.currencyId) {
        this.form.currencyId = mou.currencyId
        this.updateSelectedCurrency()
      }

      const recruitmentLine = {
        tempId: this.nextTempId++,
        lineNumber: 1,
        description: `ຄ່າບໍລິການຮັບສະໝັກງານ - ${mou.jobTitle || 'N/A'} (${selectedBatch.runningNo
          }) - ${mou.employerCompany || ''}`,
        quantity,
        unitPrice,
        DRglAccountId: null,
        CRglAccountId: null,
        txnId: null,
        taxRate: 0,
        taxAmount: 0,
        lineTotal: 0,
      }
      this.calculateLineTotal(recruitmentLine)
      this.lineItems.push(recruitmentLine)

      this.updateLineNumbers()

      this.showToast(
        `ເພີ່ມລາຍການຈາກ Job Batch ${selectedBatch.runningNo
        } ສຳເລັດແລ້ວ (${quantity} ຕຳແໜ່ງ × ${this.formatCurrency(unitPrice)})`,
        'success'
      )

      this.activeTab = 'lines'
    },

    onCurrencyChange() {
      this.updateSelectedCurrency()
      this.clearFieldError('currencyId')
    },

    calculateDueDate() {
      if (this.form.invoiceDate && this.selectedCustomer?.paymentTerms) {
        const invoiceDate = new Date(this.form.invoiceDate)
        const dueDate = new Date(invoiceDate)
        dueDate.setDate(
          dueDate.getDate() + parseInt(this.selectedCustomer.paymentTerms)
        )
        this.form.dueDate = dueDate.toISOString().split('T')[0]
      }
    },

    validateForm() {
      this.errors = {}

      if (!this.form.invoiceNumber) {
        this.errors.invoiceNumber = 'ກະລຸນາໃສ່ເລກທີໃບແຈ້ງໜີ້'
      }

      if (!this.form.agencyId) {
        this.errors.agencyId = 'ກະລຸນາເລືອກລູກຄ້າ'
      }

      if (!this.form.invoiceDate) {
        this.errors.invoiceDate = 'ກະລຸນາໃສ່ວັນທີໃບແຈ້ງໜີ້'
      }

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
          if (!line.description) {
            this.errors[`line_${i}_description`] = 'ກະລຸນາໃສ່ລາຍລະອຽດສິນຄ້າ'
          }
          if (!line.quantity || parseFloat(line.quantity) <= 0) {
            this.errors[`line_${i}_quantity`] = 'ຈຳນວນຕ້ອງຫຼາຍກວ່າ 0'
          }
          if (line.unitPrice === '' || parseFloat(line.unitPrice) < 0) {
            this.errors[`line_${i}_unitPrice`] = 'ລາຄາຕ້ອງເປັນຄ່າບວກ'
          }
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
        if (Object.keys(this.errors).some((key) => key.startsWith('line_'))) {
          this.activeTab = 'lines'
        } else {
          this.activeTab = 'header'
        }
        return
      }

      this.saving = true

      const formData = {
        ...this.form,
        totalAmount: this.calculatedTotal,
        taxAmount: this.calculatedTax,
        netAmount: this.calculatedNet,
        updateUserId: this.user.id,
        exchangeRate: parseFloat(this.form.exchangeRate) || 1.0,
        lineItems: this.lineItems.map((line, index) => ({
          ...line,
          lineNumber: index + 1,
          quantity: parseFloat(line.quantity) || 0,
          unitPrice: parseFloat(line.unitPrice) || 0,
          taxRate: parseFloat(line.taxRate) || 0,
        })),
      }

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
        invoiceNumber: '',
        invoiceDate: '',
        dueDate: '',
        clientId: null,
        jobBatchId: null,
        currencyId: null,
        exchangeRate: 1.0,
        totalAmount: 0.0,
        taxAmount: 0.0,
        netAmount: 0.0,
        status: 'draft',
        description: '',
        reason: '',
        documents: [],
      }
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount || 0)
    },

    showToast(message, type = 'info') {
      console.log(`${type}: ${message}`)
      if (this.$toast) {
        this.$toast[type](message)
      } else if (type === 'error') {
          alert(`Error: ${message}`)
        }
    },

    // Add missing filter methods if not present
    jobBatchFilter(item, queryText) {
      const searchText = queryText.toLowerCase()
      return (
        item.runningNo.toLowerCase().includes(searchText) ||
        (item.mou?.jobTitle &&
          item.mou.jobTitle.toLowerCase().includes(searchText))
      )
    },

    currencyFilter(item, queryText) {
      const searchText = queryText.toLowerCase()
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.code.toLowerCase().includes(searchText)
      )
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
.invoice-modal-card {
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

/* Table container styling */
.table-container {
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

/* Row transitions */
.line-row {
  transition: background-color 0.15s ease-in-out;
}

.line-row:hover {
  background-color: #f8fafc;
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

/* Premium blue informational notice callout */
.line-items-notice {
  background-color: #eff6ff;
  border-left: 4px solid #3b82f6;
  border-radius: 6px;
  color: #1e40af;
  font-weight: 500;
}
</style>