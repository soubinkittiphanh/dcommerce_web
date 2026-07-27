<template>
  <v-container fluid class="pa-6 font-outfit">
    <!-- Navigation Back -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-btn text color="secondary" to="/microfinance">
          <v-icon left>mdi-arrow-left</v-icon> Back to Dashboard
        </v-btn>
      </v-col>
    </v-row>

    <!-- Header Actions -->
    <v-row class="mb-6 align-center">
      <v-col cols="12" sm="6">
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon color="primary" large class="mr-2">mdi-currency-usd</v-icon>
          Loan Accounts Origination
        </h1>
        <p class="subtitle-2 grey--text text--darken-1">
          Originate new accounts, preview amortization schedules, track payments, and view event logs.
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="text-sm-right">
        <v-btn color="primary" dark large class="rounded-xl" @click="openOriginationDialog">
          <v-icon left>mdi-plus-circle</v-icon> Originate Loan Account
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <!-- Accounts Table -->
      <v-col cols="12" md="8">
        <v-card class="rounded-xl pa-6" outlined>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search by Account No, Customer, or Status"
            single-line
            hide-details
            class="mb-6 rounded-lg"
            outlined
            dense
          ></v-text-field>

          <v-data-table
            :headers="headers"
            :items="accounts"
            :search="search"
            :loading="loading"
            class="elevation-0 rounded-lg"
            @click:row="selectAccount"
          >
            <template v-slot:item.accountNo="{ item }">
              <span class="font-weight-bold primary--text">{{ item.accountNo }}</span>
            </template>
            <template v-slot:item.customer="{ item }">
              {{ item.customer ? `${item.customer.firstName || item.customer.companyName} ${item.customer.lastName || ''}` : '' }}
            </template>
            <template v-slot:item.sanctionedAmount="{ item }">
              {{ item.currency ? item.currency.code : 'USD' }} {{ parseFloat(item.sanctionedAmount).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
            </template>
            <template v-slot:item.outstanding="{ item }">
              {{ item.currency ? item.currency.code : 'USD' }} {{ getOutstanding(item).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip :color="getStatusColor(item.status)" text-color="white" small class="font-weight-bold">
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <!-- Detailed Info Sidebar (Schedules, Journals, & Repayments) -->
      <v-col cols="12" md="4">
        <v-card v-if="!selectedAcc" class="rounded-xl pa-6 text-center fill-height d-flex flex-column justify-center align-center" outlined style="min-height: 400px;">
          <v-icon size="80" color="grey lighten-1">mdi-invoice-text-outline</v-icon>
          <h3 class="text-h6 mt-4 grey--text text--darken-2">No Account Selected</h3>
          <p class="text-caption grey--text">Click on any row in the loan accounts table to view its full schedule, payment history, and accounting entries.</p>
        </v-card>

        <v-card v-else class="rounded-xl pa-6 fill-height" outlined>
          <div class="d-flex justify-space-between align-center mb-4">
            <h2 class="text-h5 font-weight-bold primary--text">Account Details</h2>
            <v-chip color="primary" dark small>{{ selectedAcc.accountNo }} ({{ selectedAcc.currency ? selectedAcc.currency.code : 'USD' }})</v-chip>
          </div>
          
          <div class="mb-4 text-subtitle-2 grey--text">
            Customer: <strong class="secondary--text">{{ selectedAcc.customer.firstName || selectedAcc.customer.companyName }} {{ selectedAcc.customer.lastName || '' }}</strong>
          </div>

          <v-tabs v-model="tab" color="primary" class="mb-4">
            <v-tab>Schedules</v-tab>
            <v-tab>Journals</v-tab>
            <v-tab>Pay</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab" class="transparent">
            <!-- 1. Repayment Schedules -->
            <v-tab-item class="tab-scroll" style="height: 350px; overflow-y: auto;">
              <v-list dense class="transparent py-0">
                <v-list-item v-for="s in selectedAcc.schedules" :key="s.id" class="px-0 py-1" style="border-bottom: 1px solid rgba(0,0,0,0.05);">
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">
                      Inst #{{ s.installmentNo }} — {{ s.dueDate }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-caption">
                      P: {{ selectedAcc.currency ? selectedAcc.currency.code : 'USD' }} {{ parseFloat(s.principalDue).toFixed(2) }} | I: {{ selectedAcc.currency ? selectedAcc.currency.code : 'USD' }} {{ parseFloat(s.interestDue).toFixed(2) }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-chip :color="s.status === 'PAID' ? 'green darken-2' : s.status === 'PARTIALLY_PAID' ? 'orange darken-2' : 'grey'" text-color="white" x-small class="font-weight-bold">
                      {{ s.status }}
                    </v-chip>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-tab-item>

            <!-- 2. Accounting GL Entries -->
            <v-tab-item class="tab-scroll" style="height: 350px; overflow-y: auto;">
              <div v-if="!selectedAcc.journalEntries || selectedAcc.journalEntries.length === 0" class="grey--text text-center mt-12 text-caption">
                No ledger postings found.
              </div>
              <div v-else v-for="j in selectedAcc.journalEntries" :key="j.id" class="mb-2 pa-2 rounded border" style="background: rgba(0,0,0,0.02);">
                <div class="d-flex justify-space-between align-center mb-1">
                  <v-chip x-small color="grey darken-2" dark class="font-weight-bold">{{ j.eventCode }}</v-chip>
                  <span class="text-caption grey--text">{{ j.valueDate }}</span>
                </div>
                <div class="text-caption font-mono grey--text text--darken-2">
                  Dr: {{ j.debitGL }} | Cr: {{ j.creditGL }}
                </div>
                <div class="d-flex justify-space-between align-center mt-1">
                  <span class="text-caption">{{ j.description }}</span>
                  <span class="font-weight-bold green--text text--darken-2">{{ selectedAcc.currency ? selectedAcc.currency.code : 'USD' }} {{ parseFloat(j.amount).toFixed(2) }}</span>
                </div>
              </div>
            </v-tab-item>

            <!-- 3. Make Repayment -->
            <v-tab-item>
              <div class="mt-4">
                <v-text-field
                  v-model="repayAmount"
                  :label="'Repayment Amount (' + (selectedAcc.currency ? selectedAcc.currency.code : 'USD') + ') *'"
                  type="number"
                  outlined
                  dense
                  class="rounded-lg"
                  :prefix="selectedAcc.currency ? selectedAcc.currency.code : 'USD'"
                ></v-text-field>
                <v-text-field
                  v-model="repayDate"
                  label="Value Date (YYYY-MM-DD)"
                  outlined
                  dense
                  class="rounded-lg"
                ></v-text-field>
                <v-btn
                  color="primary"
                  block
                  dark
                  class="rounded-xl"
                  :loading="repayLoading"
                  @click="submitRepayment"
                >
                  Post Payment (MLIQ)
                </v-btn>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>

    <!-- Origination Dialog (Fullscreen) -->
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card class="rounded-0">
        <!-- Dialog Toolbar -->
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="font-weight-bold">New Loan Account Origination</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text :disabled="!formValid" @click="saveAccount" class="font-weight-bold">
              Originate & Disburse
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <!-- Dialog Content -->
        <v-card-text class="pa-6">
          <v-container>
            <v-form ref="form" v-model="formValid">
              <v-row>
                <!-- Configuration Form -->
                <v-col cols="12" md="5" class="pr-md-6" style="border-right: 1px solid rgba(0, 0, 0, 0.08);">
                  <v-card outlined class="pa-6 rounded-xl">
                    <h3 class="text-subtitle-1 font-weight-bold mb-4 primary--text border-bottom pb-2">
                      Origination Parameters
                    </h3>
                    <v-row dense>
                      <v-col cols="12">
                        <v-select
                          v-model="form.cifId"
                          :items="cifCustomers"
                          :item-text="item => `${item.firstName || item.companyName} ${item.lastName || ''} (${item.cifNo})`"
                          item-value="id"
                          label="Borrower (CIF) *"
                          required
                          :rules="[v => !!v || 'Borrower is required']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
                        <v-select
                          v-model="form.productCode"
                          :items="products"
                          item-text="name"
                          item-value="productCode"
                          label="Loan Product (Template) *"
                          required
                          :rules="[v => !!v || 'Product is required']"
                          outlined
                          dense
                          class="rounded-lg"
                          @change="onProductChange"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.currency"
                          :items="currencies"
                          item-text="code"
                          item-value="code"
                          label="Loan Currency *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                          @change="triggerSchedulePreview"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.sanctionedAmount"
                          label="Disbursement Amount *"
                          type="number"
                          required
                          :rules="[v => !!v || 'Amount is required']"
                          outlined
                          dense
                          class="rounded-lg"
                          @input="triggerSchedulePreview"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.interestRate"
                          label="Interest Rate (Annual %) *"
                          type="number"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                          @input="triggerSchedulePreview"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.tenorWeeks"
                          label="Tenor (Weeks) *"
                          type="number"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                          @input="triggerSchedulePreview"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.valueDate"
                          label="Disbursement Date (YYYY-MM-DD) *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                          @input="triggerSchedulePreview"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.gracePeriodWeeks"
                          label="Grace Period (Weeks)"
                          type="number"
                          outlined
                          dense
                          class="rounded-lg"
                          @input="triggerSchedulePreview"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="form.linkedSavingsAcc"
                          label="Linked Savings Account"
                          placeholder="SAV000123"
                          outlined
                          dense
                          class="rounded-lg font-mono"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>

                <!-- Schedule Preview Section -->
                <v-col cols="12" md="7" class="d-flex flex-column pl-md-6">
                  <h3 class="text-subtitle-1 font-weight-bold mb-4 primary--text border-bottom pb-2">
                    <v-icon color="primary" left>mdi-calendar-month</v-icon>
                    Amortization Schedule Preview
                  </h3>
                  
                  <div v-if="previewLoading" class="d-flex justify-center align-center fill-height" style="min-height: 250px;">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </div>
                  <div v-else-if="previewSchedules.length === 0" class="grey--text text-center mt-12 text-caption">
                    Input values on the left to instantly compute the repayment schedule template.
                  </div>
                  <div v-else class="flex-grow-1" style="height: 400px; overflow-y: auto; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px;">
                    <v-simple-table dense class="transparent">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left font-weight-bold">Inst #</th>
                            <th class="text-left font-weight-bold">Due Date</th>
                            <th class="text-right font-weight-bold">Principal</th>
                            <th class="text-right font-weight-bold">Interest</th>
                            <th class="text-right font-weight-bold">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="s in previewSchedules" :key="s.installmentNo">
                            <td>{{ s.installmentNo }}</td>
                            <td>{{ s.dueDate }}</td>
                            <td class="text-right font-weight-bold">{{ form.currency }} {{ parseFloat(s.principalDue).toFixed(2) }}</td>
                            <td class="text-right font-weight-bold">{{ form.currency }} {{ parseFloat(s.interestDue).toFixed(2) }}</td>
                            <td class="text-right font-weight-bold green--text text--darken-2">
                              {{ form.currency }} {{ (parseFloat(s.principalDue) + parseFloat(s.interestDue)).toFixed(2) }}
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import debounce from 'lodash/debounce';

export default {
  data() {
    return {
      search: '',
      dialog: false,
      formValid: false,
      tab: 0,
      selectedAcc: null,
      repayAmount: '',
      repayDate: new Date().toISOString().split('T')[0],
      repayLoading: false,
      previewLoading: false,
      previewSchedules: [],
      currencies: [],
      form: {
        cifId: null,
        productCode: '',
        currency: 'USD',
        sanctionedAmount: 500,
        interestRate: 15,
        repaymentFrequency: 'WEEKLY',
        tenorWeeks: 20,
        valueDate: new Date().toISOString().split('T')[0],
        gracePeriodWeeks: 0,
        linkedSavingsAcc: ''
      },
      headers: [
        { text: 'Account #', value: 'accountNo' },
        { text: 'Customer Name', value: 'customer' },
        { text: 'Sanctioned Amt', value: 'sanctionedAmount' },
        { text: 'Outstanding Balance', value: 'outstanding' },
        { text: 'Disbursed Date', value: 'valueDate' },
        { text: 'Maturity Date', value: 'maturityDate' },
        { text: 'Status', value: 'status', align: 'right' }
      ]
    };
  },
  computed: {
    ...mapState('microfinance', ['accounts', 'cifCustomers', 'products', 'loading'])
  },
  created() {
    this.$store.dispatch('microfinance/fetchAccounts');
    this.$store.dispatch('microfinance/fetchCifCustomers');
    this.$store.dispatch('microfinance/fetchProducts');
    this.fetchCurrencies();
  },
  methods: {
    async fetchCurrencies() {
      try {
        const response = await this.$axios.get('/api/currency/findActive');
        const data = Array.isArray(response.data) ? response.data : (response.data.data || []);
        if (data && data.length > 0) {
          this.currencies = data;
        } else {
          this.currencies = [{ code: 'USD' }, { code: 'LAK' }, { code: 'THB' }];
        }
      } catch (err) {
        console.error('Error fetching currencies:', err);
        this.currencies = [{ code: 'USD' }, { code: 'LAK' }, { code: 'THB' }];
      }
    },
    getOutstanding(loan) {
      let principalPaid = 0;
      if (loan.schedules) {
        loan.schedules.forEach(s => {
          principalPaid += parseFloat(s.principalPaid || 0);
        });
      }
      return parseFloat(loan.sanctionedAmount) - principalPaid;
    },
    getStatusColor(status) {
      const colors = {
        ACTIVE: 'green darken-1',
        PAID: 'blue darken-1',
        WRITTEN_OFF: 'red darken-3',
        NPA_SUBSTANDARD: 'orange darken-2',
        NPA_DOUBTFUL: 'red darken-2'
      };
      return colors[status] || 'grey';
    },
    async selectAccount(account) {
      this.selectedAcc = null;
      try {
        const response = await this.$store.dispatch('microfinance/fetchJournalEntries', account.id);
        const accResponse = await this.$axios.get(`/api/mf/accounts/find/${account.id}`);
        
        if (accResponse.data && accResponse.data.data) {
          const detail = accResponse.data.data;
          detail.journalEntries = response.success ? response.data : [];
          this.selectedAcc = detail;
          this.repayAmount = '';
        }
      } catch (err) {
        console.error('Error fetching account details:', err);
      }
    },
    openOriginationDialog() {
      this.form = {
        cifId: null,
        productCode: '',
        currency: 'USD',
        sanctionedAmount: 500,
        interestRate: 15,
        repaymentFrequency: 'WEEKLY',
        tenorWeeks: 20,
        valueDate: new Date().toISOString().split('T')[0],
        gracePeriodWeeks: 0,
        linkedSavingsAcc: ''
      };
      this.previewSchedules = [];
      this.dialog = true;
    },
    onProductChange(code) {
      const p = this.products.find(prod => prod.productCode === code);
      if (p) {
        this.form.currency = p.currency ? p.currency.code : 'USD';
        this.form.sanctionedAmount = parseFloat(p.minAmount);
        this.form.interestRate = parseFloat(p.interestRate);
        this.form.repaymentFrequency = p.repaymentFrequency;
        this.form.tenorWeeks = parseInt(p.minTenorWeeks);
        this.form.gracePeriodWeeks = parseInt(p.gracePeriodWeeks || 0);
        this.triggerSchedulePreview();
      }
    },
    triggerSchedulePreview: debounce(async function () {
      if (!this.form.productCode || !this.form.sanctionedAmount || !this.form.tenorWeeks) return;
      this.previewLoading = true;
      try {
        const response = await this.$axios.post('/api/mf/accounts/preview-schedule', this.form);
        if (response.data && response.data.success) {
          this.previewSchedules = response.data.schedules;
        } else {
          this.previewSchedules = [];
        }
      } catch (err) {
        this.previewSchedules = [];
      } finally {
        this.previewLoading = false;
      }
    }, 300),
    async saveAccount() {
      if (!this.$refs.form.validate()) return;
      
      const res = await this.$store.dispatch('microfinance/createAccount', this.form);
      if (res.success) {
        this.dialog = false;
        this.$store.dispatch('microfinance/fetchAccounts');
      } else {
        alert(`Error originating account: ${res.error}`);
      }
    },
    async submitRepayment() {
      if (!this.repayAmount || isNaN(this.repayAmount)) {
        alert('Please specify a valid payment amount');
        return;
      }
      this.repayLoading = true;
      try {
        const res = await this.$store.dispatch('microfinance/makePayment', {
          id: this.selectedAcc.id,
          paymentData: {
            amountPaid: this.repayAmount,
            paymentDate: this.repayDate
          }
        });
        if (res.success) {
          alert('Repayment posted successfully');
          this.selectAccount(this.selectedAcc);
          this.$store.dispatch('microfinance/fetchAccounts');
        } else {
          alert(`Error: ${res.error}`);
        }
      } catch (err) {
        alert('Error communicating with server');
      } finally {
        this.repayLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif !important;
}
.font-mono {
  font-family: 'Courier New', Courier, monospace;
}
.tab-scroll::-webkit-scrollbar {
  width: 4px;
}
.tab-scroll::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
