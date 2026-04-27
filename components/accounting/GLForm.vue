<template>
  <div class="gl-form-fullscreen">
    <!-- Loading Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Customer Dialog -->
    <v-dialog v-model="customerDialog" max-width="1024">
      <customer-list @close-dialog="customerDialog = false"></customer-list>
    </v-dialog>

    <!-- Cancel Confirmation Dialog -->
    <v-dialog v-model="cancelConfirmDialog" max-width="1024">
      <cancel-ticket-form @refresh="$emit('reload')" :id="headerId" :customerId="onlineCustomerId"
        @close-dialog="cancelConfirmDialog = false">
      </cancel-ticket-form>
    </v-dialog>

    <!-- Error Message Bottom Sheet -->
    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="error" @click="sheet = false">
          <v-icon left>mdi-close</v-icon>
          Close
        </v-btn>
        <div class="my-3 error--text">
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
      <v-card-title class="pa-4 d-flex align-center">
        <v-icon color="primary" class="mr-3">mdi-book-open-variant</v-icon>
        <span class="text-h6 font-weight-bold grey--text text--darken-2">GL Entry Posting</span>
        <v-spacer></v-spacer>
        <v-btn depressed color="primary" class="mr-2" @click="printTransaction" :disabled="!transaction.id" small>
          <v-icon left small>mdi-printer</v-icon>
          Print
        </v-btn>
        <v-btn depressed color="secondary" @click="resetForm" :disabled="isloading" small>
          <v-icon left small>mdi-refresh</v-icon>
          Reset
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="pa-4 flex-grow-1 overflow-y-auto">
        <!-- Header Section -->
        <v-card outlined class="mb-4 grey lighten-5" :class="{ 'error-border': headerError }">
          <v-card-text class="pa-3">
            <v-row dense>
              <v-col cols="12" md="3">
                <v-text-field type="date" label="Booking Date *" v-model="transaction.bookingDate"
                  :error-messages="getFieldError('bookingDate')" @blur="validateField('bookingDate')" outlined dense
                  hide-details="auto" required class="mb-2">
                </v-text-field>
                <v-text-field v-model="transaction.poHeaderId" label="PO Ref" outlined dense disabled hide-details
                  v-comma-thousand>
                </v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-text-field v-model="transaction.reference" label="Reference" outlined dense
                  :error-messages="getFieldError('reference')" @blur="validateField('reference')" maxlength="50"
                  hide-details="auto" class="mb-2">
                </v-text-field>
                <v-textarea v-model="transaction.description" label="Description" outlined dense rows="1"
                  maxlength="255" hide-details="auto">
                </v-textarea>
              </v-col>

              <v-col cols="12" md="3" class="d-flex flex-column justify-center border-left pl-4">
                <div v-if="transaction.user" class=" grey--text text--darken-1">
                  <div><strong>User:</strong> {{ transaction.user.cus_name }}</div>
                  <div><strong>ID:</strong> {{ transaction.user.cus_id }}</div>
                  <div v-if="transaction.id" class="mt-1">
                    <v-chip x-small color="info" label>RECID: {{ transaction.id }}</v-chip>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="3" class="text-right d-flex flex-column justify-center pl-4 bg-white rounded">
                <div class="text-overline mb-0 primary--text font-weight-bold">Total Amount (LCY)</div>
                <div class="text-h4 font-weight-black grey--text text--darken-3">
                  {{ getFormatNum(grandTotal) }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card outlined>
          <v-card-title class="pa-2 px-4 d-flex align-center grey lighten-4">
            <v-icon small color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
            <span class=" font-weight-bold">Transaction Lines</span>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="newRow" :disabled="isUpdate || isloading" x-small depressed>
              <v-icon left x-small>mdi-plus</v-icon>
              Add Line
            </v-btn>
          </v-card-title>

          <v-card-text class="pa-0">
            <v-data-table v-if="transaction.lines && transaction.lines.length > 0" :headers="headers"
              :items="transaction.lines" :search="search" item-key="tempId" dense class="compact-table">

              <template v-slot:top>
                <div class="px-4 pt-2">
                  <v-text-field v-model="search" label="Search lines..." prepend-inner-icon="mdi-magnify" single-line
                    hide-details clearable dense outlined class="mb-2">
                  </v-text-field>
                </div>
              </template>

              <template v-slot:item="{ item, index }">
                <tr :class="{ 'error-row': errorLineNumber === index }">
                  <td class="text-center">
                    <v-chip small :color="errorLineNumber === index ? 'error' : 'primary'">
                      {{ index + 1 }}
                    </v-chip>
                  </td>

                  <td style="min-width: 140px;" class="py-2">
                    <v-autocomplete v-model="item.currencyId" :items="currencyList" item-text="code" item-value="id"
                      label="Currency" outlined dense hide-details="auto"
                      :error-messages="getLineError(index, 'currencyId')" @change="currencyChange(item, index)"
                      @blur="validateLineField(index, 'currencyId')" required>
                      <template v-slot:selection="{ item }">
                        {{ item.code }}
                      </template>
                      <template v-slot:item="{ item }">
                        <v-list-item-content>
                          <v-list-item-title class="">{{ item.code }} - {{ item.name }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </td>

                  <td style="min-width: 110px;" class="py-2">
                    <v-text-field v-model="item.amount" label="Amount" outlined dense v-comma-thousand
                      hide-details="auto" :error-messages="getLineError(index, 'amount')"
                      @input="amountChange(item, index)" @blur="validateLineField(index, 'amount')" required>
                    </v-text-field>
                  </td>

                  <td style="min-width: 100px;" class="py-2">
                    <v-text-field v-model="item.rate" label="Rate" outlined dense v-comma-thousand hide-details="auto"
                      :error-messages="getLineError(index, 'rate')" @input="rateChange(item, index)"
                      @blur="validateLineField(index, 'rate')" required>
                    </v-text-field>
                  </td>

                  <td style="min-width: 180px;" class="py-2">
                    <v-autocomplete v-model="item.drAccountId" :items="accountList" item-text="accountNumber"
                      item-value="id" label="Debit" outlined dense hide-details="auto"
                      :error-messages="getLineError(index, 'drAccountId')"
                      @blur="validateLineField(index, 'drAccountId')" required>
                      <template v-slot:selection="{ item }">
                        {{ item.accountNumber }}
                      </template>
                      <template v-slot:item="{ item }">
                        <v-list-item-content>
                          <v-list-item-title class="">{{ item.accountNumber }} - {{ item.accountName
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </td>

                  <td style="min-width: 180px;" class="py-2">
                    <v-autocomplete v-model="item.crAccountId" :items="accountList" item-text="accountNumber"
                      item-value="id" label="Credit" outlined dense hide-details="auto"
                      :error-messages="getLineError(index, 'crAccountId')"
                      @blur="validateLineField(index, 'crAccountId')" required>
                      <template v-slot:selection="{ item }">
                        {{ item.accountNumber }}
                      </template>
                      <template v-slot:item="{ item }">
                        <v-list-item-content>
                          <v-list-item-title class="">{{ item.accountNumber }} - {{ item.accountName
                          }}</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-autocomplete>
                  </td>

                  <td style="min-width: 150px;" class="py-2">
                    <v-text-field v-model="item.description" label="Description" outlined dense hide-details
                      maxlength="100">
                    </v-text-field>
                  </td>

                  <td class="text-right font-weight-bold">
                    {{ getFormatNum(item.localAmount) }}
                  </td>

                  <td class="text-center">
                    <v-btn color="error" icon small @click="deleteItem(item, index)" :disabled="isloading">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>

            <!-- Empty State -->
            <div v-else class="pa-6 text-center grey lighten-4 rounded-b-lg border-dashed">
              <v-icon size="48" color="grey lighten-1">mdi-format-list-bulleted</v-icon>
              <div class=" grey--text mt-2 font-weight-medium">No transaction lines</div>
              <p class=" grey--text mb-4">Add your first transaction line to get started</p>
              <v-btn color="primary" @click="newRow" :disabled="isUpdate || isloading" small depressed>
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
        <v-chip v-if="transaction.lines.length > 0" color="info" x-small outlined label>
          {{ transaction.lines.length }} line(s)
        </v-chip>

        <v-spacer></v-spacer>

        <v-btn text color="grey darken-1" @click="toggleDialog" :disabled="isloading" small class="mr-2">
          <v-icon left small>mdi-close</v-icon>
          Cancel
        </v-btn>

        <v-btn depressed color="primary" @click="postTransaction" :disabled="isloading || !canSave" :loading="isloading"
          small>
          <v-icon left small>mdi-content-save</v-icon>
          {{ isUpdate ? 'Update Entry' : 'Post Transaction' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.error-border {
  border: 1px solid #ff5252 !important;
}

.error-row {
  background-color: #ffebee !important;
}

.border-left {
  border-left: 1px solid #e0e0e0;
}

.border-dashed {
  border: 2px dashed #e0e0e0 !important;
}

.compact-table :deep(th) {
  height: 48px !important;
  font-size: 0.75rem !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #757575 !important;
  background-color: #f5f5f5 !important;
}

.compact-table :deep(td) {
  height: auto !important;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}

.v-text-field--outlined :deep(fieldset) {
  border-color: #e0e0e0;
}

.bg-white {
  background-color: white !important;
}

.gl-form-fullscreen {
  height: 100%;
  min-height: calc(100vh - 64px);
  /* Fallback for most common header heights */
  display: flex;
  flex-direction: column;
}

.gl-main-card {
  flex-grow: 1;
  display: flex !important;
  flex-direction: column;
  height: 100%;
}

.overflow-y-auto {
  overflow-y: auto !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}
</style>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { mapActions, mapGetters } from 'vuex';
import { swalSuccess, swalError2, confirmSwal, replaceAll } from '~/common';

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
      customerDialog: false,
      cancelConfirmDialog: false,
      sheet: false,
      successSnackbar: false,
      successMessage: '',
      search: '',

      // Error tracking
      headerError: false,
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
        vendorId: null,
        status: 'PENDING',
        isActive: true,
        exchangeRate: 1,
        total: 0,
        poHeaderId: null,
        locationId: null,
        user: null,
        lines: []
      },

      // Table configuration
      headers: [
        { text: '#', value: 'index', align: 'center', sortable: false, width: '60px' },
        { text: 'Currency', value: 'currencyId', align: 'start', sortable: false, width: '150px' },
        { text: 'Amount', value: 'amount', align: 'end', sortable: false, width: '120px' },
        { text: 'Rate', value: 'rate', align: 'end', sortable: false, width: '120px' },
        { text: 'Debit Account', value: 'drAccountId', align: 'start', sortable: false, width: '200px' },
        { text: 'Credit Account', value: 'crAccountId', align: 'start', sortable: false, width: '200px' },
        { text: 'Description', value: 'description', align: 'start', sortable: false, width: '150px' },
        { text: 'Local Amount', value: 'localAmount', align: 'end', sortable: false, width: '120px' },
        { text: 'Actions', value: 'actions', align: 'center', sortable: false, width: '80px' }
      ],

      // Validation rules
      validationRules: {
        required: (value) => !!value || 'This field is required',
        number: (value) => !isNaN(parseFloat(value)) && isFinite(value) || 'Must be a valid number',
        positiveNumber: (value) => (parseFloat(value) > 0) || 'Must be greater than 0',
        date: (value) => {
          if (!value) return 'Date is required';
          const date = new Date(value);
          return !isNaN(date.getTime()) || 'Must be a valid date';
        },
        maxLength: (max) => (value) => !value || value.length <= max || `Maximum ${max} characters allowed`,
        numberComma: (value) => {
          if (!value) return true;
          const regex = /^[0-9,]*$/;
          return regex.test(value) || 'Only numbers and commas are allowed';
        }
      }
    };
  },

  computed: {
    ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal', 'findAllLocation']),

    currencyList() {
      return this.findAllCurrency || [];
    },

    grandTotal() {
      return this.transaction.lines.reduce((total, item) => {
        return total + (item.localAmount || 0);
      }, 0);
    },

    canSave() {
      return this.transaction.lines.length > 0 &&
        this.transaction.bookingDate &&
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
        this.transaction.user = this.user;

        if (this.isUpdate && this.GLId) {
          await this.loadTransaction();
        } else {
          this.newRow();
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
        this.showError('Failed to load chart of accounts');
        console.error('Chart of accounts error:', error);
      }
    },

    async loadTransaction() {
      try {
        const response = await this.$axios.get(`api/gl/find/${this.GLId}`);
        const data = response.data;

        // Populate header
        this.transaction.bookingDate = data.bookingDate;
        this.transaction.reference = data.reference || '';
        this.transaction.description = data.description || '';
        this.transaction.id = data.id;

        // Populate lines
        if (data.lines && data.lines.length > 0) {
          this.transaction.lines = data.lines.map((line, index) => ({
            ...line,
            tempId: `line_${index}_${Date.now()}`
          }));
        } else {
          this.transaction.lines = [data];
        }
      } catch (error) {
        this.showError('Failed to load transaction');
        console.error('Load transaction error:', error);
      }
    },

    // Line management
    newRow() {
      if (this.isUpdate) {
        this.showError('Cannot add new lines in update mode');
        return;
      }

      const newLine = {
        tempId: `line_${this.transaction.lines.length}_${Date.now()}`,
        postingReference: 'DUMMY',
        bookingDate: this.transaction.bookingDate,
        amount: '',
        currencyId: null,
        rate: '1',
        drAccountId: null,
        crAccountId: null,
        description: '',
        localAmount: 0,
        source: 'GL',
        isActive: true,
      };

      this.transaction.lines.push(newLine);
      this.clearLineErrors(this.transaction.lines.length - 1);
    },

    async deleteItem(item, index) {
      try {
        if (this.transaction.poHeaderId) {
          this.showError('Cannot delete lines from PO transactions');
          return;
        }

        const confirmed = await confirmSwal(this.$swal, 'Delete Line', 'Are you sure you want to delete this line?');
        if (!confirmed) return;

        if (item.id) {
          this.isloading = true;
          await this.$axios.delete(`api/gl/line/find/${item.id}`);
        }

        this.transaction.lines.splice(index, 1);
        this.clearLineErrors(index);
        this.reindexLineErrors(index);

      } catch (error) {
        this.showError('Failed to delete line');
        console.error('Delete line error:', error);
      } finally {
        this.isloading = false;
      }
    },

    // Calculations
    currencyChange(item, index) {
      const currency = this.currencyList.find(el => el.id === item.currencyId);
      if (!currency) return;

      item.rate = currency.rate || 1;
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'currencyId');
    },

    amountChange(item, index) {
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'amount');
    },

    rateChange(item, index) {
      this.calculateLocalAmount(item, index);
      this.validateLineField(index, 'rate');
    },

    calculateLocalAmount(item, index) {
      const amount = parseFloat(replaceAll(item.amount || '0', ',', ''));
      const rate = parseFloat(replaceAll(item.rate || '1', ',', ''));

      if (!isNaN(amount) && !isNaN(rate)) {
        item.localAmount = amount * rate;
      } else {
        item.localAmount = 0;
      }
    },

    // Validation
    validateField(fieldName) {
      const value = this.transaction[fieldName];
      const errors = [];

      switch (fieldName) {
        case 'bookingDate':
          if (!value) errors.push('Booking date is required');
          else if (new Date(value) > new Date()) errors.push('Booking date cannot be in the future');
          break;
        case 'reference':
          if (value && value.length > 50) errors.push('Reference must be 50 characters or less');
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
        case 'currencyId':
          if (!line.currencyId) errors.push('Currency is required');
          break;
        case 'amount':
          if (!line.amount) errors.push('Amount is required');
          else {
            const amount = parseFloat(replaceAll(line.amount, ',', ''));
            if (isNaN(amount) || amount <= 0) errors.push('Amount must be greater than 0');
          }
          break;
        case 'rate':
          if (!line.rate) errors.push('Rate is required');
          else {
            const rate = parseFloat(replaceAll(line.rate, ',', ''));
            if (isNaN(rate) || rate <= 0) errors.push('Rate must be greater than 0');
          }
          break;
        case 'drAccountId':
          if (!line.drAccountId) errors.push('Debit account is required');
          break;
        case 'crAccountId':
          if (!line.crAccountId) errors.push('Credit account is required');
          break;
      }

      if (errors.length > 0) {
        this.validationErrors.lines[lineIndex][fieldName] = errors;
      } else {
        delete this.validationErrors.lines[lineIndex][fieldName];
      }
    },

    validateAllFields() {
      // Validate header
      this.validateField('bookingDate');
      this.validateField('reference');

      // Validate lines
      this.transaction.lines.forEach((line, index) => {
        this.validateLineField(index, 'currencyId');
        this.validateLineField(index, 'amount');
        this.validateLineField(index, 'rate');
        this.validateLineField(index, 'drAccountId');
        this.validateLineField(index, 'crAccountId');
      });

      // Check for duplicate debit/credit accounts in same line
      this.transaction.lines.forEach((line, index) => {
        if (line.drAccountId && line.crAccountId && line.drAccountId === line.crAccountId) {
          if (!this.validationErrors.lines[index]) {
            this.validationErrors.lines[index] = {};
          }
          this.validationErrors.lines[index]['drAccountId'] = ['Debit and Credit accounts cannot be the same'];
          this.validationErrors.lines[index]['crAccountId'] = ['Debit and Credit accounts cannot be the same'];
        }
      });

      return !this.hasValidationErrors;
    },

    // Error handling
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
        vendorId: null,
        status: 'PENDING',
        isActive: true,
        exchangeRate: 1,
        total: 0,
        poHeaderId: null,
        locationId: null,
        user: this.user,
        lines: []
      };

      this.validationErrors = {
        header: {},
        lines: {}
      };

      this.newRow();
    },

    printTransaction() {
      if (!this.transaction.id) {
        this.showError('Cannot print unsaved transaction');
        return;
      }
      // Implement print functionality
      console.log('Printing transaction:', this.transaction.id);
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

      try {
        this.isloading = true;

        // Prepare data
        const transactionData = { ...this.transaction };
        transactionData.lines = transactionData.lines.map(line => ({
          ...line,
          amount: parseFloat(replaceAll(line.amount.toString(), ',', '')),
          rate: parseFloat(replaceAll(line.rate.toString(), ',', '')),
          localAmount: parseFloat(line.localAmount || 0),
          bookingDate: transactionData.bookingDate
        }));

        if (this.isUpdate) {
          await this.updateTransaction(transactionData);
        } else {
          await this.createTransaction(transactionData);
        }

        this.showSuccess('Transaction saved successfully');
        this.$emit('reload');
        this.$emit('close-dialog');

      } catch (error) {
        this.handleSaveError(error);
      } finally {
        this.isloading = false;
      }
    },

    async createTransaction(transactionData) {
      // Clear line IDs for creation
      transactionData.lines.forEach(line => {
        delete line.id;
        delete line.tempId;
      });

      const response = await this.$axios.post('api/gl/createMulti', transactionData);
      return response.data;
    },

    async updateTransaction(transactionData) {
      if (transactionData.lines.length === 1) {
        const line = transactionData.lines[0];
        line.bookingDate = transactionData.bookingDate;
        const response = await this.$axios.put(`api/gl/update/${this.GLId}`, line);
        return response.data;
      } else {
        throw new Error('Multiple lines update not supported');
      }
    },

    handleSaveError(error) {
      console.error('Save error:', error);

      if (error.response?.data) {
        const errorMessage = error.response.data;

        // Handle specific error types
        if (errorMessage.includes('#')) {
          const parts = errorMessage.split('#');
          if (parts.length > 1) {
            const productId = parts[1];
            const lineIndex = this.transaction.lines.findIndex(line =>
              line.productId == productId
            );

            if (lineIndex >= 0) {
              this.errorLineNumber = lineIndex;
            }
          }
        }

        this.showError(errorMessage);
      } else {
        this.showError('Failed to save transaction. Please try again.');
      }
    },

    // Utility methods
    getFormatNum(value) {
      if (value === null || value === undefined || isNaN(value)) return '0';
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(value);
    },

    findCurrency(currencyId) {
      return this.currencyList.find(el => el.id === currencyId);
    },

    // Advanced validation methods
    validateBusinessRules() {
      const errors = [];

      // Check if transaction balances (total debits = total credits)
      const totalDebits = this.transaction.lines.reduce((sum, line) => {
        return sum + (line.localAmount || 0);
      }, 0);

      const totalCredits = this.transaction.lines.reduce((sum, line) => {
        return sum + (line.localAmount || 0);
      }, 0);

      // In a proper GL system, you'd check actual debit vs credit amounts
      // This is simplified for demonstration

      // Check for duplicate account combinations
      const accountCombinations = new Set();
      this.transaction.lines.forEach((line, index) => {
        if (line.drAccountId && line.crAccountId) {
          const combination = `${line.drAccountId}-${line.crAccountId}`;
          if (accountCombinations.has(combination)) {
            errors.push({
              lineIndex: index,
              field: 'drAccountId',
              message: 'Duplicate account combination found'
            });
          }
          accountCombinations.add(combination);
        }
      });

      // Check for circular references (A->B, B->A in same transaction)
      const accountPairs = this.transaction.lines.map(line =>
        line.drAccountId && line.crAccountId ?
          [line.drAccountId, line.crAccountId].sort().join('-') : null
      ).filter(Boolean);

      const duplicatePairs = accountPairs.filter((pair, index) =>
        accountPairs.indexOf(pair) !== index
      );

      if (duplicatePairs.length > 0) {
        errors.push({
          lineIndex: -1,
          field: 'general',
          message: 'Circular account references detected'
        });
      }

      return errors;
    },

    validateAccountingPeriod() {
      const bookingDate = new Date(this.transaction.bookingDate);
      const currentDate = new Date();

      // Check if booking date is not too far in the past (configurable)
      const maxPastDays = 365; // 1 year
      const minDate = new Date();
      minDate.setDate(currentDate.getDate() - maxPastDays);

      if (bookingDate < minDate) {
        return 'Booking date is too far in the past';
      }

      // Check if booking date is not in the future
      if (bookingDate > currentDate) {
        return 'Booking date cannot be in the future';
      }

      return null;
    },

    // Enhanced search and filtering
    filterAccountsByType(accountType) {
      return this.accountList.filter(account =>
        account.accountType === accountType
      );
    },

    getDebitAccounts() {
      // In a real system, you might filter by account types that can be debited
      return this.accountList.filter(account =>
        ['ASSET', 'EXPENSE'].includes(account.accountType)
      );
    },

    getCreditAccounts() {
      // In a real system, you might filter by account types that can be credited
      return this.accountList.filter(account =>
        ['LIABILITY', 'EQUITY', 'REVENUE'].includes(account.accountType)
      );
    },

    // Keyboard shortcuts
    handleKeyboardShortcuts(event) {
      // Ctrl+S to save
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        this.postTransaction();
      }

      // Ctrl+N to add new line
      if (event.ctrlKey && event.key === 'n') {
        event.preventDefault();
        this.newRow();
      }

      // Escape to close
      if (event.key === 'Escape') {
        this.toggleDialog();
      }
    },

    // Data export/import helpers
    exportToCSV() {
      const headers = ['Line#', 'Currency', 'Amount', 'Rate', 'Debit Account', 'Credit Account', 'Description', 'Local Amount'];
      const rows = this.transaction.lines.map((line, index) => [
        index + 1,
        this.currencyList.find(c => c.id === line.currencyId)?.code || '',
        line.amount,
        line.rate,
        this.accountList.find(a => a.id === line.drAccountId)?.accountNumber || '',
        this.accountList.find(a => a.id === line.crAccountId)?.accountNumber || '',
        line.description,
        line.localAmount
      ]);

      const csvContent = [headers, ...rows]
        .map(row => row.map(field => `"${field}"`).join(','))
        .join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `GL_Transaction_${this.transaction.id || 'New'}.csv`;
      link.click();
      window.URL.revokeObjectURL(url);
    },

    // Auto-save functionality
    setupAutoSave() {
      this.autoSaveInterval = setInterval(() => {
        if (this.transaction.lines.length > 0 && !this.hasValidationErrors && !this.isloading) {
          this.autoSave();
        }
      }, 30000); // Auto-save every 30 seconds
    },

    async autoSave() {
      try {
        // Save as draft
        const draftData = {
          ...this.transaction,
          status: 'DRAFT'
        };

        // Implementation would depend on your backend API
        console.log('Auto-saving draft...', draftData);

      } catch (error) {
        console.error('Auto-save failed:', error);
      }
    }
  },

  mounted() {
    // Add keyboard event listeners
    document.addEventListener('keydown', this.handleKeyboardShortcuts);

    // Setup auto-save if needed
    if (this.$route.query.autosave === 'true') {
      this.setupAutoSave();
    }
  },

  beforeDestroy() {
    // Clean up event listeners
    document.removeEventListener('keydown', this.handleKeyboardShortcuts);

    // Clear auto-save interval
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }
  },

  watch: {
    // Watch for changes in transaction data
    'transaction.bookingDate'(newVal) {
      if (newVal) {
        // Update all line booking dates
        this.transaction.lines.forEach(line => {
          line.bookingDate = newVal;
        });
      }
    },

    // Watch for changes in lines to update totals
    'transaction.lines': {
      handler() {
        // Recalculate totals when lines change
        this.$nextTick(() => {
          // Any additional calculations can go here
        });
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.error-border {
  border: 2px solid #f44336 !important;
}

.error-row {
  background-color: #ffebee !important;
}

.error-row td {
  border-bottom: 1px solid #f44336 !important;
}

.v-data-table tbody tr:hover {
  background-color: #f5f5f5 !important;
}

.v-card {
  transition: box-shadow 0.3s ease;
}

.v-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12) !important;
}

/* Custom styles for better UX */
.v-text-field--outlined .v-input__control .v-input__slot {
  min-height: 40px;
}

.v-autocomplete--is-dirty .v-select__selection {
  color: rgba(0, 0, 0, 0.87);
}

/* Loading overlay */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Improved table styling */
.v-data-table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.v-data-table .v-data-table__wrapper {
  border-radius: 8px;
  overflow: hidden;
}

/* Success/Error styling */
.success--text {
  color: #4caf50 !important;
}

.error--text {
  color: #f44336 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .v-data-table {
    font-size: 0.875rem;
  }

  .v-btn {
    min-width: auto;
    padding: 0 12px;
  }
}

/* Print styles */
@media print {

  .v-btn,
  .v-card-actions {
    display: none !important;
  }

  .v-card {
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
}
</style>