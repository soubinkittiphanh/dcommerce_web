<template>
  <div class="gl-form-fullscreen">
    <!-- Loading Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Error Message Bottom Sheet -->
    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="error" @click="sheet = false">
          <v-icon left>mdi-close</v-icon>
          Close
        </v-btn>
        <div class="my-3 error--text font-weight-bold">
          {{ validateErrorMessage }}
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <!-- Success Snackbar -->
    <v-snackbar v-model="successSnackbar" color="success" timeout="3000">
      {{ successMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="successSnackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Main Card -->
    <v-card class="d-flex flex-column gl-main-card" tile>
      <v-card-title class="pa-4 d-flex align-center premium-header">
        <v-icon color="white" class="mr-3">mdi-book-open-variant</v-icon>
        <span class="text-h6 font-weight-bold white--text">
          {{ isUpdate ? 'Edit Journal Leg' : 'Direct Manual Journal Entry (Journal Voucher)' }}
        </span>
        <v-spacer></v-spacer>
        <v-btn depressed color="white" class="primary--text mr-2" @click="printTransaction" :disabled="!transaction.id" small>
          <v-icon left small>mdi-printer</v-icon>
          Print
        </v-btn>
        <v-btn depressed color="grey lighten-2" @click="resetForm" :disabled="isloading || isUpdate" small>
          <v-icon left small>mdi-refresh</v-icon>
          Reset
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-4 flex-grow-1 overflow-y-auto bg-light">
        <!-- Header Section -->
        <v-card outlined class="mb-4 grey lighten-5 elevation-1">
          <v-card-text class="pa-4">
            <v-row dense>
              <v-col cols="12" md="3">
                <v-text-field type="date" label="Booking Date *" v-model="transaction.bookingDate"
                  :error-messages="getFieldError('bookingDate')" @blur="validateField('bookingDate')" outlined dense
                  hide-details="auto" required class="mb-3">
                </v-text-field>
                <v-text-field v-model="transaction.reference" label="Posting Reference *" outlined dense
                  :error-messages="getFieldError('reference')" @blur="validateField('reference')" maxlength="50"
                  hide-details="auto" required>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-autocomplete v-model="transaction.currencyId" :items="currencyList" item-text="code" item-value="id"
                  label="Currency *" outlined dense hide-details="auto" class="mb-3"
                  :error-messages="getFieldError('currencyId')" @change="headerCurrencyChange" required>
                  <template v-slot:selection="{ item }">
                    {{ item.code }}
                  </template>
                  <template v-slot:item="{ item }">
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold">{{ item.code }} - {{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-autocomplete>
                <v-text-field v-model="transaction.rate" label="Exchange Rate *" outlined dense type="number" step="0.000001"
                  :error-messages="getFieldError('rate')" @blur="validateField('rate')" hide-details="auto" required>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-textarea v-model="transaction.description" label="Global Description" outlined dense rows="3"
                  maxlength="255" hide-details="auto">
                </v-textarea>
              </v-col>

              <v-col cols="12" md="3" class="text-right d-flex flex-column justify-center pl-4 bg-white rounded border-left elevation-1">
                <div class="d-flex justify-space-between mb-1">
                  <span class="text-overline font-weight-bold grey--text">Total Debits</span>
                  <span class="text-overline font-weight-bold success--text">{{ getFormatNum(totalDebits) }}</span>
                </div>
                <div class="d-flex justify-space-between mb-1">
                  <span class="text-overline font-weight-bold grey--text">Total Credits</span>
                  <span class="text-overline font-weight-bold error--text">{{ getFormatNum(totalCredits) }}</span>
                </div>
                <v-divider class="my-1"></v-divider>
                <div class="text-overline mb-0 primary--text font-weight-bold">Total LCY (Local)</div>
                <div class="text-h4 font-weight-black grey--text text--darken-3">
                  {{ getFormatNum(totalLCYAmount) }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Warning Alert for Out of Balance -->
        <v-alert v-if="!isBalanced && !isUpdate && transaction.lines.length > 0" type="warning" border="left" class="mb-4 font-weight-medium elevation-1" dense text>
          Journal Voucher is out of balance. Difference: <strong class="error--text">{{ getFormatNum(difference) }}</strong>
        </v-alert>

        <!-- Transaction Lines Card -->
        <v-card outlined class="elevation-1">
          <v-card-title class="pa-2 px-4 d-flex align-center grey lighten-4">
            <v-icon small color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
            <span class="font-weight-bold text-subtitle-1 grey--text text--darken-3">Voucher Legs / Lines</span>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="newRow" :disabled="isUpdate || isloading" x-small depressed class="rounded-lg">
              <v-icon left x-small>mdi-plus</v-icon>
              Add Leg
            </v-btn>
          </v-card-title>

          <v-card-text class="pa-0">
            <v-data-table v-if="transaction.lines && transaction.lines.length > 0" :headers="headers"
              :items="transaction.lines" :search="search" item-key="tempId" dense class="compact-table">

              <template v-slot:top>
                <div class="px-4 pt-2">
                  <v-text-field v-model="search" label="Filter legs..." prepend-inner-icon="mdi-magnify" single-line
                    hide-details clearable dense outlined class="mb-2">
                  </v-text-field>
                </div>
              </template>

              <template v-slot:item="{ item, index }">
                <tr :class="{ 'error-row': errorLineNumber === index }">
                  <td class="text-center">
                    <v-chip small :color="errorLineNumber === index ? 'error' : 'primary'" text-color="white" class="font-weight-bold">
                      {{ index + 1 }}
                    </v-chip>
                  </td>

                  <td style="min-width: 280px;" class="py-2">
                    <v-autocomplete v-model="item.accountId" :items="accountList" item-text="accountNumber"
                      item-value="id" label="Search Chart Account *" outlined dense hide-details="auto"
                      :error-messages="getLineError(index, 'accountId')"
                      @blur="validateLineField(index, 'accountId')" required>
                      <template v-slot:selection="{ item }">
                        <span class="font-weight-medium">{{ item.accountNumber }} - {{ item.accountName }}</span>
                      </template>
                      <template v-slot:item="{ item }">
                        <v-list-item-content>
                          <v-list-item-title class="font-weight-bold primary--text">{{ item.accountNumber }}</v-list-item-title>
                          <v-list-item-subtitle class="text-caption">{{ item.accountName }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </td>

                  <td style="min-width: 140px;" class="py-2">
                    <v-text-field v-model="item.debit" label="Debit Amount" outlined dense v-comma-thousand
                      hide-details="auto" :error-messages="getLineError(index, 'debit')"
                      @input="onDebitInput(item, index)" @blur="validateLineField(index, 'debit')"
                      class="text-right-input debit-field">
                    </v-text-field>
                  </td>

                  <td style="min-width: 140px;" class="py-2">
                    <v-text-field v-model="item.credit" label="Credit Amount" outlined dense v-comma-thousand
                      hide-details="auto" :error-messages="getLineError(index, 'credit')"
                      @input="onCreditInput(item, index)" @blur="validateLineField(index, 'credit')"
                      class="text-right-input credit-field">
                    </v-text-field>
                  </td>

                  <td style="min-width: 220px;" class="py-2">
                    <v-text-field v-model="item.description" label="Leg Description" outlined dense hide-details
                      maxlength="100">
                    </v-text-field>
                  </td>

                  <td class="text-right font-weight-bold pr-4 success--text">
                    {{ getFormatNum(item.localDebit) }}
                  </td>

                  <td class="text-right font-weight-bold pr-4 error--text">
                    {{ getFormatNum(item.localCredit) }}
                  </td>

                  <td class="text-center">
                    <v-btn color="error" icon small @click="deleteItem(item, index)" :disabled="isloading || isUpdate">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>

            <!-- Empty State -->
            <div v-else class="pa-6 text-center grey lighten-4 rounded-b-lg border-dashed">
              <v-icon size="48" color="grey lighten-1">mdi-format-list-bulleted</v-icon>
              <div class="grey--text mt-2 font-weight-medium">No ledger legs yet</div>
              <p class="grey--text mb-4">Add Debit and Credit lines to balance the manual journal entry</p>
              <v-btn color="primary" @click="newRow" :disabled="isUpdate || isloading" small depressed class="rounded-lg">
                <v-icon left small>mdi-plus</v-icon>
                Add First Line
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-card-text>

      <!-- Actions -->
      <v-divider></v-divider>
      <v-card-actions class="pa-3 px-4 grey lighten-5">
        <v-chip v-if="transaction.lines.length > 0" color="info" x-small outlined label class="font-weight-bold">
          {{ transaction.lines.length }} leg(s)
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn text color="grey darken-1" @click="toggleDialog" :disabled="isloading" small class="mr-2 rounded-lg">
          <v-icon left small>mdi-close</v-icon>
          Cancel
        </v-btn>
        <v-btn depressed color="primary" @click="postTransaction" :disabled="isloading || !canSave" :loading="isloading"
          small class="rounded-lg px-4 font-weight-bold">
          <v-icon left small>mdi-content-save</v-icon>
          {{ isUpdate ? 'Update Leg' : 'Post Journal Voucher' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { mapActions, mapGetters } from 'vuex';
import { swalSuccess, swalError2, confirmSwal, replaceAll, getFormatNum } from '~/common';

export default {
  name: 'gl-form',
  props: {
    GLId: {
      type: Number,
      default: null,
    },
    isUpdate: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    commaThousand
  },

  async created() {
    await this.initializeForm();
  },

  data() {
    return {
      // UI State
      isloading: false,
      sheet: false,
      successSnackbar: false,
      successMessage: '',
      search: '',

      // Error tracking
      errorLineNumber: null,
      validateErrorMessage: '',
      validationErrors: {
        header: {},
        lines: {}
      },

      // Data
      accountList: [],
      transaction: {
        id: null,
        bookingDate: null,
        reference: '',
        description: '',
        currencyId: null,
        rate: 1,
        lines: []
      },

      // Table configuration
      headers: [
        { text: '#', value: 'index', align: 'center', sortable: false, width: '60px' },
        { text: 'Chart of Account *', value: 'accountId', align: 'start', sortable: false, width: '280px' },
        { text: 'Debit Amount', value: 'debit', align: 'end', sortable: false, width: '140px' },
        { text: 'Credit Amount', value: 'credit', align: 'end', sortable: false, width: '140px' },
        { text: 'Description', value: 'description', align: 'start', sortable: false, width: '220px' },
        { text: 'Local Debit', value: 'localDebit', align: 'end', sortable: false, width: '120px' },
        { text: 'Local Credit', value: 'localCredit', align: 'end', sortable: false, width: '120px' },
        { text: 'Actions', value: 'actions', align: 'center', sortable: false, width: '80px' }
      ]
    };
  },

  computed: {
    ...mapGetters(['findAllCurrency']),

    currencyList() {
      return this.findAllCurrency || [];
    },

    totalDebits() {
      return this.transaction.lines.reduce((sum, line) => {
        const val = parseFloat(replaceAll(line.debit?.toString() || '0', ',', '')) || 0;
        return sum + val;
      }, 0);
    },

    totalCredits() {
      return this.transaction.lines.reduce((sum, line) => {
        const val = parseFloat(replaceAll(line.credit?.toString() || '0', ',', '')) || 0;
        return sum + val;
      }, 0);
    },

    difference() {
      return Math.abs(this.totalDebits - this.totalCredits);
    },

    isBalanced() {
      return this.difference < 0.01;
    },

    totalLCYAmount() {
      return this.transaction.lines.reduce((sum, line) => {
        return sum + (line.localDebit || 0);
      }, 0);
    },

    canSave() {
      if (this.isUpdate) {
        return this.transaction.lines.length === 1 &&
          this.transaction.bookingDate &&
          this.transaction.reference &&
          this.transaction.currencyId &&
          !this.hasValidationErrors;
      }
      return this.transaction.lines.length >= 2 &&
        this.transaction.bookingDate &&
        this.transaction.reference &&
        this.transaction.currencyId &&
        this.isBalanced &&
        !this.hasValidationErrors;
    },

    hasValidationErrors() {
      const hasHeaderErrors = Object.keys(this.validationErrors.header).length > 0;
      const hasLineErrors = Object.keys(this.validationErrors.lines).some(lineIndex =>
        Object.keys(this.validationErrors.lines[lineIndex]).length > 0
      );
      return hasHeaderErrors || hasLineErrors;
    },

    user() {
      return this.$auth.user || null;
    }
  },

  methods: {
    // Initialization
    async initializeForm() {
      try {
        this.isloading = true;
        await this.loadChartOfAccount();

        const today = new Date().toISOString().substr(0, 10);
        this.transaction.bookingDate = today;

        if (this.currencyList.length > 0) {
          const defaultCurrency = this.currencyList.find(c => c.code === 'LAK' || c.code === 'USD') || this.currencyList[0];
          this.transaction.currencyId = defaultCurrency.id;
          this.transaction.rate = defaultCurrency.rate || 1;
        }

        if (this.isUpdate && this.GLId) {
          await this.loadTransaction();
        } else {
          this.newRow();
          this.newRow(); // Start with two legs for double entry
        }
      } catch (error) {
        this.showError('Failed to initialize form');
        console.error('Initialization error:', error);
      } finally {
        this.isloading = false;
      }
    },

    // Data loading
    async loadChartOfAccount() {
      try {
        const response = await this.$axios.get("api/account/findAll");
        this.accountList = response.data;
      } catch (error) {
        this.showError('Failed to load Chart of Accounts');
        console.error('Chart of accounts error:', error);
      }
    },

    async loadTransaction() {
      try {
        const response = await this.$axios.get(`api/gl/find/${this.GLId}`);
        const data = response.data;

        // Populate header
        this.transaction.bookingDate = data.bookingDate;
        this.transaction.reference = data.postingReference || data.reference || '';
        this.transaction.description = data.description || '';
        this.transaction.id = data.id;
        this.transaction.currencyId = data.currencyId;
        this.transaction.rate = parseFloat(data.rate) || 1;

        // Populate single leg line
        const debitVal = parseFloat(data.debit) || 0;
        const creditVal = parseFloat(data.credit) || 0;
        const isDebit = debitVal > 0;

        this.transaction.lines = [
          {
            tempId: `line_0_${Date.now()}`,
            accountId: isDebit ? data.drAccountId : data.crAccountId,
            debit: isDebit ? debitVal : '',
            credit: !isDebit ? creditVal : '',
            description: data.description || '',
            localDebit: data.localDebit || 0,
            localCredit: data.localCredit || 0,
            id: data.id
          }
        ];
      } catch (error) {
        this.showError('Failed to load transaction leg details');
        console.error('Load transaction error:', error);
      }
    },

    // Line management
    newRow() {
      if (this.isUpdate) {
        this.showError('Cannot add legs in update mode');
        return;
      }

      const newLine = {
        tempId: `line_${this.transaction.lines.length}_${Date.now()}`,
        accountId: null,
        debit: '',
        credit: '',
        description: '',
        localDebit: 0,
        localCredit: 0,
        isActive: true,
      };

      this.transaction.lines.push(newLine);
      this.clearLineErrors(this.transaction.lines.length - 1);
    },

    async deleteItem(item, index) {
      try {
        if (this.isUpdate) {
          this.showError('Cannot delete lines in update mode');
          return;
        }

        if (this.transaction.lines.length <= 2) {
          this.showError('A manual journal voucher requires at least two balanced lines');
          return;
        }

        const confirmed = await confirmSwal(this.$swal, 'Delete Leg', 'Are you sure you want to delete this ledger leg?');
        if (!confirmed) return;

        this.transaction.lines.splice(index, 1);
        this.clearLineErrors(index);
        this.reindexLineErrors(index);

      } catch (error) {
        this.showError('Failed to delete line');
        console.error('Delete line error:', error);
      }
    },

    // Handlers & Calculations
    headerCurrencyChange(val) {
      const currency = this.currencyList.find(el => el.id === val);
      if (currency) {
        this.transaction.rate = currency.rate || 1;
        this.transaction.lines.forEach(line => {
          this.calculateRowLocalAmounts(line);
        });
      }
      this.validateField('currencyId');
    },

    onDebitInput(item, index) {
      if (item.debit && parseFloat(replaceAll(item.debit.toString(), ',', '')) > 0) {
        item.credit = '';
      }
      this.calculateRowLocalAmounts(item);
      this.validateLineField(index, 'debit');
    },

    onCreditInput(item, index) {
      if (item.credit && parseFloat(replaceAll(item.credit.toString(), ',', '')) > 0) {
        item.debit = '';
      }
      this.calculateRowLocalAmounts(item);
      this.validateLineField(index, 'credit');
    },

    calculateRowLocalAmounts(item) {
      const rate = parseFloat(this.transaction.rate) || 1;
      const debitVal = parseFloat(replaceAll(item.debit?.toString() || '0', ',', '')) || 0;
      const creditVal = parseFloat(replaceAll(item.credit?.toString() || '0', ',', '')) || 0;

      item.localDebit = debitVal * rate;
      item.localCredit = creditVal * rate;
    },

    // Validation
    validateField(fieldName) {
      const value = this.transaction[fieldName];
      const errors = [];

      switch (fieldName) {
        case 'bookingDate':
          if (!value) errors.push('Booking date is required');
          break;
        case 'reference':
          if (!value) errors.push('Posting Reference is required');
          else if (value.length > 50) errors.push('Reference must be 50 characters or less');
          break;
        case 'rate':
          const rateVal = parseFloat(value);
          if (isNaN(rateVal) || rateVal <= 0) errors.push('Rate must be greater than 0');
          break;
        case 'currencyId':
          if (!value) errors.push('Currency is required');
          break;
      }

      if (errors.length > 0) {
        this.validationErrors.header[fieldName] = errors;
      } else {
        delete this.validationErrors.header[fieldName];
      }
    },

    validateLineField(lineIndex, fieldName) {
      const line = this.transaction.lines[lineIndex];
      const errors = [];

      if (!this.validationErrors.lines[lineIndex]) {
        this.validationErrors.lines[lineIndex] = {};
      }

      switch (fieldName) {
        case 'accountId':
          if (!line.accountId) errors.push('Account is required');
          break;
        case 'debit':
        case 'credit':
          const debitVal = parseFloat(replaceAll(line.debit?.toString() || '0', ',', '')) || 0;
          const creditVal = parseFloat(replaceAll(line.credit?.toString() || '0', ',', '')) || 0;
          if (debitVal === 0 && creditVal === 0) {
            errors.push('Debit or Credit amount is required');
          }
          break;
      }

      if (errors.length > 0) {
        this.validationErrors.lines[lineIndex][fieldName] = errors;
      } else {
        delete this.validationErrors.lines[lineIndex][fieldName];
      }
    },

    validateAllFields() {
      // Validate header fields
      this.validateField('bookingDate');
      this.validateField('reference');
      this.validateField('currencyId');
      this.validateField('rate');

      // Validate lines
      this.transaction.lines.forEach((line, index) => {
        this.validateLineField(index, 'accountId');
        this.validateLineField(index, 'debit');
      });

      return !this.hasValidationErrors;
    },

    getFieldError(fieldName) {
      return this.validationErrors.header[fieldName] || [];
    },

    getLineError(lineIndex, fieldName) {
      return this.validationErrors.lines[lineIndex]?.[fieldName] || [];
    },

    clearLineErrors(lineIndex) {
      delete this.validationErrors.lines[lineIndex];
    },

    reindexLineErrors(deletedIndex) {
      const newLineErrors = {};
      Object.keys(this.validationErrors.lines).forEach(index => {
        const numIndex = parseInt(index);
        if (numIndex > deletedIndex) {
          newLineErrors[numIndex - 1] = this.validationErrors.lines[index];
        } else if (numIndex < deletedIndex) {
          newLineErrors[numIndex] = this.validationErrors.lines[index];
        }
      });
      this.validationErrors.lines = newLineErrors;
    },

    showError(message) {
      this.validateErrorMessage = message;
      this.sheet = true;
    },

    showSuccess(message) {
      this.successMessage = message;
      this.successSnackbar = true;
    },

    // Form actions
    resetForm() {
      this.transaction = {
        id: null,
        bookingDate: new Date().toISOString().substr(0, 10),
        reference: '',
        description: '',
        currencyId: null,
        rate: 1,
        lines: []
      };

      this.validationErrors = {
        header: {},
        lines: {}
      };

      if (this.currencyList.length > 0) {
        const defaultCurrency = this.currencyList.find(c => c.code === 'LAK' || c.code === 'USD') || this.currencyList[0];
        this.transaction.currencyId = defaultCurrency.id;
        this.transaction.rate = defaultCurrency.rate || 1;
      }

      this.newRow();
      this.newRow();
    },

    printTransaction() {
      if (!this.transaction.id) {
        this.showError('Cannot print unsaved transaction');
        return;
      }
      window.print();
    },

    toggleDialog() {
      this.$emit('close-dialog');
    },

    // Save transaction
    async postTransaction() {
      if (this.isloading) return;

      if (!this.validateAllFields()) {
        this.showError('Please fix validation errors before saving');
        return;
      }

      if (!this.isUpdate && !this.isBalanced) {
        this.showError('Journal Voucher is out of balance. Difference: ' + this.getFormatNum(this.difference));
        return;
      }

      try {
        this.isloading = true;

        // Construct multi-line payload
        const rateVal = parseFloat(this.transaction.rate) || 1;
        const linesPayload = this.transaction.lines.map(line => {
          const debitVal = parseFloat(replaceAll(line.debit?.toString() || '0', ',', '')) || 0;
          const creditVal = parseFloat(replaceAll(line.credit?.toString() || '0', ',', '')) || 0;
          const isDebit = debitVal > 0;

          return {
            bookingDate: this.transaction.bookingDate,
            postingReference: this.transaction.reference,
            debit: isDebit ? debitVal : 0,
            credit: !isDebit ? creditVal : 0,
            localDebit: isDebit ? (debitVal * rateVal) : 0,
            localCredit: !isDebit ? (creditVal * rateVal) : 0,
            rate: rateVal,
            description: line.description || this.transaction.description || 'Manual Journal leg',
            source: 'GL',
            status: 'POSTED',
            drAccountId: isDebit ? line.accountId : null,
            crAccountId: !isDebit ? line.accountId : null,
            currencyId: this.transaction.currencyId
          };
        });

        const transactionData = {
          lines: linesPayload
        };

        if (this.isUpdate) {
          await this.updateTransaction(transactionData);
        } else {
          await this.createTransaction(transactionData);
        }

        this.showSuccess('Transaction posted successfully');
        this.$emit('reload');
        this.$emit('close-dialog');

      } catch (error) {
        this.handleSaveError(error);
      } finally {
        this.isloading = false;
      }
    },

    async createTransaction(transactionData) {
      const response = await this.$axios.post('api/gl/createMulti', transactionData);
      return response.data;
    },

    async updateTransaction(transactionData) {
      if (transactionData.lines.length === 1) {
        const line = transactionData.lines[0];
        const response = await this.$axios.put(`api/gl/update/${this.GLId}`, line);
        return response.data;
      } else {
        throw new Error('Multiple lines update not supported');
      }
    },

    handleSaveError(error) {
      console.error('Save error:', error);
      if (error.response?.data?.error) {
        this.showError(error.response.data.error);
      } else if (error.response?.data) {
        this.showError(error.response.data);
      } else {
        this.showError('Failed to save transaction. Please check balance and connection.');
      }
    },

    getFormatNum(val) {
      return getFormatNum(val);
    }
  },

  watch: {
    'transaction.bookingDate'(newVal) {
      if (newVal) {
        this.transaction.lines.forEach(line => {
          line.bookingDate = newVal;
        });
      }
    },

    'transaction.rate'(newRate) {
      if (newRate) {
        this.transaction.lines.forEach(line => {
          this.calculateRowLocalAmounts(line);
        });
      }
    }
  }
};
</script>

<style scoped>
.gl-form-fullscreen {
  height: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
}

.gl-main-card {
  flex-grow: 1;
  display: flex !important;
  flex-direction: column;
  height: 100%;
}

.premium-header {
  background: linear-gradient(135deg, #01532b 0%, #027a40 100%);
  box-shadow: 0 4px 15px rgba(1, 83, 43, 0.2);
}

.bg-light {
  background-color: #fafbfc !important;
}

.border-left {
  border-left: 1px solid #e0e0e0;
}

.border-dashed {
  border: 2px dashed #cfd8dc !important;
  background-color: #fafafa !important;
}

.compact-table :deep(th) {
  height: 48px !important;
  font-size: 0.75rem !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #546e7a !important;
  background-color: #eceff1 !important;
  font-weight: bold;
  border-bottom: 2px solid #cfd8dc !important;
}

.compact-table :deep(td) {
  height: auto !important;
  padding-top: 6px !important;
  padding-bottom: 6px !important;
  border-bottom: 1px solid #e0e0e0 !important;
}

.error-row {
  background-color: #ffebee !important;
}

.error-row td {
  border-bottom: 1.5px solid #f44336 !important;
}

.text-right-input :deep(input) {
  text-align: right !important;
  font-weight: 500;
}

.debit-field :deep(input) {
  color: #2e7d32 !important;
}

.credit-field :deep(input) {
  color: #c62828 !important;
}

/* Custom styles for better UX */
.v-text-field--outlined :deep(.v-input__control .v-input__slot) {
  min-height: 40px;
}

.v-data-table tbody tr:hover {
  background-color: #f1f8e9 !important;
}

/* Print styles */
@media print {
  .v-btn,
  .v-card-actions,
  .v-alert,
  header {
    display: none !important;
  }

  .v-card {
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
}
</style>