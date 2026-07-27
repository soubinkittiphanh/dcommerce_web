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
          <v-icon color="primary" large class="mr-2">mdi-book-cog</v-icon>
          Loan Product Definition Templates
        </h1>
        <p class="subtitle-2 grey--text text--darken-1">
          Configure microfinance loan products using FLEXCUBE rules, linking them directly to Asset and Income General Ledgers (GL).
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="text-sm-right">
        <v-btn color="primary" dark large class="rounded-xl" @click="dialog = true">
          <v-icon left>mdi-plus-circle</v-icon> Define New Product
        </v-btn>
      </v-col>
    </v-row>

    <!-- Data Grid Cards -->
    <v-row>
      <v-col cols="12" md="4" v-for="product in products" :key="product.productCode">
        <v-card class="rounded-xl pa-5 mb-4 fill-height d-flex flex-column" outlined>
          <div class="d-flex justify-space-between align-center mb-3">
            <h3 class="text-h5 font-weight-bold primary--text">{{ product.name }}</h3>
            <v-chip color="primary" text-color="white" small class="font-weight-bold">
              {{ product.productCode }} ({{ product.currency ? product.currency.code : 'USD' }})
            </v-chip>
          </div>
          
          <v-divider class="mb-4"></v-divider>
          
          <!-- Product Specifications -->
          <div class="flex-grow-1">
            <div class="d-flex justify-space-between mb-2">
              <span class="grey--text text--darken-1">Interest Rate:</span>
              <span class="font-weight-bold">{{ parseFloat(product.interestRate) }}% ({{ product.interestType }})</span>
            </div>
            <div class="d-flex justify-space-between mb-2">
              <span class="grey--text text--darken-1">Frequency:</span>
              <span class="font-weight-bold text-uppercase">{{ product.repaymentFrequency }}</span>
            </div>
            <div class="d-flex justify-space-between mb-2">
              <span class="grey--text text--darken-1">Amount Limits:</span>
              <span class="font-weight-bold">
                {{ product.currency ? product.currency.code : 'USD' }} {{ parseFloat(product.minAmount).toLocaleString() }} - 
                {{ product.currency ? product.currency.code : 'USD' }} {{ parseFloat(product.maxAmount).toLocaleString() }}
              </span>
            </div>
            <div class="d-flex justify-space-between mb-2">
              <span class="grey--text text--darken-1">Tenor Limits:</span>
              <span class="font-weight-bold">{{ product.minTenorWeeks }} - {{ product.maxTenorWeeks }} weeks</span>
            </div>
            <div class="d-flex justify-space-between mb-2" v-if="product.gracePeriodWeeks">
              <span class="grey--text text--darken-1">Grace Period:</span>
              <span class="font-weight-bold">{{ product.gracePeriodWeeks }} weeks</span>
            </div>
            
            <v-divider class="my-3"></v-divider>
            
            <!-- GL Integration -->
            <div class="d-flex justify-space-between text-caption mb-1">
              <span class="grey--text text--darken-1">Asset (Receivables) GL:</span>
              <span class="secondary--text font-mono font-weight-bold">
                {{ product.assetGL ? `${product.assetGL.accountNumber} - ${product.assetGL.accountName}` : product.linkedGLAsset }}
              </span>
            </div>
            <div class="d-flex justify-space-between text-caption">
              <span class="grey--text text--darken-1">Income (Interest) GL:</span>
              <span class="secondary--text font-mono font-weight-bold">
                {{ product.incomeGL ? `${product.incomeGL.accountNumber} - ${product.incomeGL.accountName}` : product.linkedGLIncome }}
              </span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Create Dialog (Fullscreen) -->
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card class="rounded-0">
        <!-- Dialog Toolbar -->
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="font-weight-bold">Define New Loan Product Template</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text :disabled="!formValid" @click="saveProduct" class="font-weight-bold">
              Save Template
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <!-- Dialog Content -->
        <v-card-text class="pa-6">
          <v-container>
            <v-form ref="form" v-model="formValid">
              <v-row>
                <v-col cols="12" md="6" class="mx-auto">
                  <v-card outlined class="pa-6 rounded-xl">
                    <h3 class="text-h6 font-weight-bold mb-4 primary--text border-bottom pb-2">
                      Template Rules
                    </h3>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.productCode"
                          label="Product Code (e.g. MFLP_W) *"
                          required
                          :rules="[v => !!v || 'Code is required']"
                          outlined
                          dense
                          class="rounded-lg font-mono"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.name"
                          label="Product Name (e.g. Weekly Micro Loan) *"
                          required
                          :rules="[v => !!v || 'Name is required']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.currency"
                          :items="currencies"
                          item-text="code"
                          item-value="code"
                          label="Default Currency *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.minAmount"
                          label="Min Principal Amount *"
                          type="number"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.maxAmount"
                          label="Max Principal Amount *"
                          type="number"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.minTenorWeeks"
                          label="Min Tenor (Weeks) *"
                          type="number"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.maxTenorWeeks"
                          label="Max Tenor (Weeks) *"
                          type="number"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6" class="mx-auto">
                  <v-card outlined class="pa-6 rounded-xl">
                    <h3 class="text-h6 font-weight-bold mb-4 secondary--text border-bottom pb-2">
                      FLEXCUBE Accounting & Interest Rules
                    </h3>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.interestRate"
                          label="Annual Interest Rate (%) *"
                          type="number"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.interestType"
                          :items="['FLAT', 'REDUCING_BALANCE']"
                          label="Interest Method *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.repaymentFrequency"
                          :items="['WEEKLY', 'BI_WEEKLY', 'MONTHLY']"
                          label="Repayment Frequency *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.gracePeriodWeeks"
                          label="Grace Period (Weeks)"
                          type="number"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.linkedGLAsset"
                          :items="coaAccounts"
                          :item-text="item => `${item.accountNumber} - ${item.accountName}`"
                          item-value="accountNumber"
                          label="Linked Asset GL (Receivables) *"
                          required
                          :rules="[v => !!v || 'Asset GL is required']"
                          outlined
                          dense
                          class="rounded-lg font-mono"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.linkedGLIncome"
                          :items="coaAccounts"
                          :item-text="item => `${item.accountNumber} - ${item.accountName}`"
                          item-value="accountNumber"
                          label="Linked Income GL (Interest) *"
                          required
                          :rules="[v => !!v || 'Income GL is required']"
                          outlined
                          dense
                          class="rounded-lg font-mono"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-card>
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

export default {
  data() {
    return {
      dialog: false,
      formValid: false,
      coaAccounts: [],
      currencies: [],
      form: {
        productCode: '',
        name: '',
        currency: 'USD',
        minAmount: 100,
        maxAmount: 1000,
        minTenorWeeks: 12,
        maxTenorWeeks: 52,
        interestRate: 15,
        interestType: 'FLAT',
        repaymentFrequency: 'WEEKLY',
        gracePeriodWeeks: 0,
        linkedGLAsset: null,
        linkedGLIncome: null
      }
    };
  },
  computed: {
    ...mapState('microfinance', ['products'])
  },
  created() {
    this.$store.dispatch('microfinance/fetchProducts');
    this.fetchCOA();
    this.fetchCurrencies();
  },
  methods: {
    async fetchCOA() {
      try {
        const response = await this.$axios.get('/api/account/find');
        this.coaAccounts = Array.isArray(response.data) ? response.data : (response.data.data || []);
      } catch (err) {
        console.error('Error fetching Chart of Accounts:', err);
      }
    },
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
    async saveProduct() {
      if (!this.$refs.form.validate()) return;

      const res = await this.$store.dispatch('microfinance/createProduct', this.form);
      if (res.success) {
        this.dialog = false;
        this.$store.dispatch('microfinance/fetchProducts');
      } else {
        alert(`Error: ${res.error}`);
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
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
