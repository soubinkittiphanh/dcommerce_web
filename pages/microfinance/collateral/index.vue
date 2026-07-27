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
          <v-icon color="primary" large class="mr-2">mdi-shield-check</v-icon>
          Enterprise Collateral Register (ELCM)
        </h1>
        <p class="subtitle-2 grey--text text--darken-1">
          Pledge and evaluate collateral assets, automatically calculating haircuts and net lendable values.
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="text-sm-right">
        <v-btn color="primary" dark large class="rounded-xl" @click="dialog = true">
          <v-icon left>mdi-plus-circle</v-icon> Register Collateral Item
        </v-btn>
      </v-col>
    </v-row>

    <!-- Data Table Card -->
    <v-card class="rounded-xl pa-6" outlined>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search by Collateral No, Pledger or Type"
        single-line
        hide-details
        class="mb-6 rounded-lg"
        outlined
        dense
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="collaterals"
        :search="search"
        :loading="loading"
        class="elevation-0 rounded-lg"
      >
        <template v-slot:item.collateralNo="{ item }">
          <span class="font-weight-bold primary--text">{{ item.collateralNo }}</span>
        </template>
        <template v-slot:item.customer="{ item }">
          <span v-if="item.customer" class="font-weight-bold">
            {{ item.customer.firstName || item.customer.companyName }} {{ item.customer.lastName || '' }} ({{ item.customer.cifNo }})
          </span>
          <span v-else class="grey--text">—</span>
        </template>
        <template v-slot:item.type="{ item }">
          <v-chip color="grey lighten-2" small class="font-weight-bold text-caption primary--text">
            {{ item.type }}
          </v-chip>
        </template>
        <template v-slot:item.marketValue="{ item }">
          {{ item.currency ? item.currency.code : 'USD' }} {{ parseFloat(item.marketValue).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
        </template>
        <template v-slot:item.haircutPercentage="{ item }">
          {{ parseFloat(item.haircutPercentage) }}%
        </template>
        <template v-slot:item.lendableValue="{ item }">
          <span class="font-weight-bold green--text text--darken-2">
            {{ item.currency ? item.currency.code : 'USD' }} {{ parseFloat(item.lendableValue).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
          </span>
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" text-color="white" small class="font-weight-bold">
            {{ item.status }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>

    <!-- Create Dialog (Fullscreen) -->
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card class="rounded-0">
        <!-- Dialog Toolbar -->
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="font-weight-bold">Pledge New Collateral Asset</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text :disabled="!formValid" @click="saveCollateral" class="font-weight-bold">
              Save Register
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
                      Asset Details & Ownership
                    </h3>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.cifId"
                          :items="cifCustomers"
                          :item-text="item => `${item.firstName || item.companyName} ${item.lastName || ''} (${item.cifNo})`"
                          item-value="id"
                          label="Pledged By (CIF) *"
                          required
                          :rules="[v => !!v || 'CIF is required']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.type"
                          :items="['PROPERTY', 'VEHICLE', 'CASH', 'GROUP_GUARANTEE', 'OTHER']"
                          label="Collateral Type *"
                          required
                          :rules="[v => !!v || 'Type is required']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="form.description"
                          label="Asset Description / Address / Serial No"
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
                      Risk Valuation
                    </h3>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-select
                          v-model="form.currency"
                          :items="currencies"
                          item-text="code"
                          item-value="code"
                          label="Valuation Currency *"
                          required
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.marketValue"
                          label="Estimated Market Value *"
                          type="number"
                          required
                          :rules="[v => !!v || 'Market Value is required']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          v-model="form.haircutPercentage"
                          label="Risk Haircut Percentage (%) *"
                          type="number"
                          required
                          :rules="[v => !!v || 'Haircut percentage is required']"
                          outlined
                          dense
                          class="rounded-lg"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" class="py-2">
                        <div class="grey--text text-subtitle-2">
                          Lendable Margin Limit (Market Value - Haircut):
                          <strong class="green--text text--darken-2 ml-2">
                            {{ form.currency }} {{ calculatedLendable.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
                          </strong>
                        </div>
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
      search: '',
      dialog: false,
      formValid: false,
      currencies: [],
      form: {
        cifId: null,
        type: 'PROPERTY',
        currency: 'USD',
        marketValue: 1000.00,
        haircutPercentage: 20.00,
        description: ''
      },
      headers: [
        { text: 'Collateral No', value: 'collateralNo' },
        { text: 'Pledger Name (CIF)', value: 'customer' },
        { text: 'Type', value: 'type' },
        { text: 'Market Value', value: 'marketValue' },
        { text: 'Haircut', value: 'haircutPercentage' },
        { text: 'Lendable Value', value: 'lendableValue' },
        { text: 'Status', value: 'status', align: 'right' }
      ]
    };
  },
  computed: {
    ...mapState('microfinance', ['collaterals', 'cifCustomers', 'loading']),
    calculatedLendable() {
      const val = parseFloat(this.form.marketValue) || 0;
      const hc = parseFloat(this.form.haircutPercentage) || 0;
      return val * (1 - hc / 100);
    }
  },
  created() {
    this.$store.dispatch('microfinance/fetchCollaterals');
    this.$store.dispatch('microfinance/fetchCifCustomers');
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
    getStatusColor(status) {
      const colors = {
        ACTIVE: 'green darken-1',
        LIQUIDATED: 'red darken-1',
        RELEASED: 'blue darken-1'
      };
      return colors[status] || 'grey';
    },
    async saveCollateral() {
      if (!this.$refs.form.validate()) return;

      const res = await this.$store.dispatch('microfinance/createCollateral', this.form);
      if (res.success) {
        this.dialog = false;
        this.$store.dispatch('microfinance/fetchCollaterals');
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
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
