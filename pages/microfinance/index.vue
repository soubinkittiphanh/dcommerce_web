<template>
  <v-container fluid class="pa-6 font-outfit">
    <!-- Headings -->
    <v-row class="mb-6 align-center">
      <v-col cols="12" sm="6">
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon large color="primary" class="mr-2">mdi-bank-transfer</v-icon>
          Microfinance Core Module
        </h1>
        <p class="subtitle-1 grey--text text--darken-1">
          FLEXCUBE Product Concept Engine & Central Registry
        </p>
      </v-col>
      
      <!-- EOD Trigger / Business Date Action -->
      <v-col cols="12" sm="6" class="text-sm-right">
        <v-btn
          color="primary"
          dark
          large
          elevation="2"
          class="rounded-xl"
          :loading="batchLoading"
          @click="triggerEOD"
        >
          <v-icon left>mdi-calendar-sync</v-icon>
          Run EOD Batch Processing
        </v-btn>
      </v-col>
    </v-row>

    <!-- KPI Summary Cards -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="3" v-for="(kpi, i) in kpis" :key="i">
        <v-card class="rounded-xl pa-4 fill-height" outlined>
          <div class="d-flex justify-between align-center mb-4">
            <v-avatar :color="kpi.iconColor" size="48" class="rounded-lg" dark>
              <v-icon color="white">{{ kpi.icon }}</v-icon>
            </v-avatar>
            <div class="text-right">
              <span class="text-caption grey--text">{{ kpi.title }}</span>
              <h2 class="text-subtitle-1 font-weight-black mt-1 white-space-pre">{{ kpi.value }}</h2>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Operational Sections (Grid Portal) -->
    <v-row class="mb-6">
      <v-col cols="12" md="8">
        <v-card class="rounded-xl pa-6 mb-6" outlined>
          <h2 class="text-h5 font-weight-bold mb-4 primary--text border-bottom pb-2">
            <v-icon left color="primary">mdi-cog-outline</v-icon>
            Module Navigation & Actions
          </h2>
          <v-row>
            <v-col cols="12" sm="6" v-for="(nav, i) in navigationCards" :key="i">
              <v-card
                :to="nav.to"
                class="rounded-lg pa-4 fill-height nav-hover"
                outlined
                style="transition: 0.3s;"
              >
                <div class="d-flex align-center">
                  <v-avatar :color="nav.color" size="40" class="mr-4" dark>
                    <v-icon color="white">{{ nav.icon }}</v-icon>
                  </v-avatar>
                  <div>
                    <h3 class="font-weight-bold mb-1">{{ nav.title }}</h3>
                    <p class="text-caption grey--text mb-0">{{ nav.desc }}</p>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>

        <!-- Dynamic GL Entry List (FLEXCUBE Journal Log) -->
        <v-card class="rounded-xl pa-6" outlined>
          <div class="d-flex align-center justify-space-between mb-4">
            <h2 class="text-h5 font-weight-bold secondary--text">
              <v-icon left color="secondary">mdi-format-list-bulleted</v-icon>
              FLEXCUBE Accounting Journal Logs (GL)
            </h2>
            <v-btn small text color="secondary" @click="fetchJournalEntries">
              <v-icon left>mdi-refresh</v-icon> Refresh
            </v-btn>
          </div>

          <v-data-table
            :headers="journalHeaders"
            :items="journalEntries"
            :loading="journalLoading"
            class="elevation-0 rounded-lg"
            hide-default-footer
            :items-per-page="5"
          >
            <template v-slot:item.eventCode="{ item }">
              <v-chip :color="getEventColor(item.eventCode)" text-color="white" small class="font-weight-bold">
                {{ item.eventCode }}
              </v-chip>
            </template>
            <template v-slot:item.amount="{ item }">
              <span class="font-weight-bold green--text text--darken-2">
                {{ item.currency }} {{ parseFloat(item.amount).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
              </span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <!-- EOD Execution Log & Settings Panel -->
      <v-col cols="12" md="4">
        <v-card class="rounded-xl pa-6 fill-height" outlined>
          <h2 class="text-h5 font-weight-bold mb-4 primary--text border-bottom pb-2">
            <v-icon left color="primary">mdi-text-box-search-outline</v-icon>
            EOD Batch Log
          </h2>
          
          <!-- System Status -->
          <div class="mb-4">
            <div class="d-flex justify-space-between class mb-2">
              <span class="grey--text text--darken-1">Active Business Date:</span>
              <strong class="primary--text">{{ activeBusinessDate }}</strong>
            </div>
            <v-divider class="my-2"></v-divider>
          </div>

          <!-- Execution logs list -->
          <div class="log-container rounded-lg pa-3 font-mono text-caption" style="background: rgba(0,0,0,0.03); height: 350px; overflow-y: auto; border: 1px solid rgba(0,0,0,0.08);">
            <div v-if="eodLogs.length === 0" class="grey--text text-center mt-12">
              No recent EOD runs. Trigger "Run EOD Batch Processing" above to simulate daily bank closures.
            </div>
            <div v-else v-for="(log, index) in eodLogs" :key="index" class="mb-1 py-1" style="border-bottom: 1px solid rgba(0,0,0,0.05);">
              <span class="green--text text--darken-2 font-weight-bold">> </span>
              <span>{{ log }}</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      batchLoading: false,
      journalLoading: false,
      activeBusinessDate: new Date().toISOString().split('T')[0],
      eodLogs: [],
      journalEntries: [],
      kpis: [
        { title: 'Total Customers (CIF)', value: '0', icon: 'mdi-account-multiple', iconColor: 'primary' },
        { title: 'Active JLG Groups', value: '0', icon: 'mdi-account-group', iconColor: 'secondary' },
        { title: 'Gross Loan Portfolio', value: '0.00', icon: 'mdi-cash-multiple', iconColor: 'teal darken-2' },
        { title: 'NPA Exposure Ratio', value: '0.00%', icon: 'mdi-alert-octagon', iconColor: 'red darken-2' }
      ],
      navigationCards: [
        { title: 'Central CIF Registry', desc: 'Create and verify Customer Information Files (KYC)', icon: 'mdi-card-account-details', color: 'primary', to: '/microfinance/cif' },
        { title: 'Group & Center Management', desc: 'Manage Joint Liability Groups and meeting plans', icon: 'mdi-account-group-outline', color: 'secondary', to: '/microfinance/groups' },
        { title: 'Collateral Registry', desc: 'Centralized ELCM register and asset valuation', icon: 'mdi-shield-check', color: 'teal darken-2', to: '/microfinance/collateral' },
        { title: 'Loan Product Rules', desc: 'Define FLEXCUBE templates and GL rules', icon: 'mdi-book-cog', color: 'orange darken-2', to: '/microfinance/products' },
        { title: 'Loan Account Origination', desc: 'Disburse and verify schedules', icon: 'mdi-currency-usd', color: 'green darken-2', to: '/microfinance/accounts' },
        { title: 'Bulk Collections Sheets', desc: 'Log weekly Center meeting collections in bulk', icon: 'mdi-table-large', color: 'pink darken-2', to: '/microfinance/collections' }
      ],
      journalHeaders: [
        { text: 'Ref ID', value: 'id', width: '80' },
        { text: 'Account #', value: 'loanAccount.accountNo' },
        { text: 'Event', value: 'eventCode' },
        { text: 'Value Date', value: 'valueDate' },
        { text: 'Debit GL', value: 'debitGL' },
        { text: 'Credit GL', value: 'creditGL' },
        { text: 'Amount', value: 'amount', align: 'right' }
      ]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      await Promise.all([
        this.fetchKpis(),
        this.fetchJournalEntries()
      ]);
    },
    async fetchKpis() {
      try {
        const [cifsRes, groupsRes, accountsRes] = await Promise.all([
          this.$store.dispatch('microfinance/fetchCifCustomers'),
          this.$store.dispatch('microfinance/fetchGroups'),
          this.$store.dispatch('microfinance/fetchAccounts')
        ]);

        const cifs = cifsRes.success ? cifsRes.data : [];
        const groups = groupsRes.success ? groupsRes.data.filter(g => g.type === 'GROUP') : [];
        const accounts = accountsRes.success ? accountsRes.data : [];

        const glpMap = {};
        const npaMap = {};

        accounts.forEach(acc => {
          let principalPaid = 0;
          if (acc.schedules) {
            acc.schedules.forEach(s => {
              principalPaid += parseFloat(s.principalPaid || 0);
            });
          }
          const outstanding = parseFloat(acc.sanctionedAmount) - principalPaid;
          const curr = acc.currency || 'USD';

          glpMap[curr] = (glpMap[curr] || 0) + outstanding;
          if (acc.status.startsWith('NPA')) {
            npaMap[curr] = (npaMap[curr] || 0) + outstanding;
          }
        });

        // Format GLP string
        const glpStrings = Object.keys(glpMap).map(curr => {
          return `${curr} ${glpMap[curr].toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
        });
        const glpValue = glpStrings.length > 0 ? glpStrings.join('\n') : 'USD 0.00';

        // Format NPA Ratio string
        const npaRatios = Object.keys(glpMap).map(curr => {
          const ratio = glpMap[curr] > 0 ? (npaMap[curr] || 0) / glpMap[curr] * 100 : 0;
          return `${curr}: ${ratio.toFixed(1)}%`;
        });
        const npaValue = npaRatios.length > 0 ? npaRatios.join('\n') : '0.00%';

        this.kpis[0].value = String(cifs.length);
        this.kpis[1].value = String(groups.length);
        this.kpis[2].value = glpValue;
        this.kpis[3].value = npaValue;

        // Load active date from database EOD settings
        const batchStatusRes = await this.$axios.get('/api/mf/batch/status');
        if (batchStatusRes.data && batchStatusRes.data.success) {
          this.activeBusinessDate = batchStatusRes.data.currentBusinessDate;
        }

      } catch (err) {
        console.error('Error fetching dashboard KPIs:', err);
      }
    },
    async fetchJournalEntries() {
      this.journalLoading = true;
      try {
        const res = await this.$store.dispatch('microfinance/fetchJournalEntries');
        this.journalEntries = res.success ? res.data : [];
      } catch (err) {
        console.error(err);
      } finally {
        this.journalLoading = false;
      }
    },
    getEventColor(event) {
      const colors = {
        BOOK: 'blue darken-1',
        DSBR: 'purple darken-1',
        ACCR: 'teal darken-1',
        ALIQ: 'green darken-1',
        MLIQ: 'green darken-2',
        STCH: 'red darken-2'
      };
      return colors[event] || 'grey';
    },
    async triggerEOD() {
      this.batchLoading = true;
      this.eodLogs = ['Initializing batch run...', `Current business date: ${this.activeBusinessDate}`];

      try {
        const response = await this.$axios.post('/api/mf/batch/run');
        if (response.data && response.data.success) {
          this.eodLogs.push(...response.data.logs);
          this.eodLogs.push(`EOD completed successfully. New business date: ${response.data.newBusinessDate}`);
          this.activeBusinessDate = response.data.newBusinessDate;
          
          // Refresh statistics
          await this.fetchData();
        } else {
          this.eodLogs.push(`EOD batch failed: ${response.data.error}`);
        }
      } catch (err) {
        this.eodLogs.push(`EOD batch error: ${err.message}`);
      } finally {
        this.batchLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif !important;
}
.nav-hover:hover {
  border-color: var(--v-primary-base) !important;
  cursor: pointer;
}
.white-space-pre {
  white-space: pre-line;
}
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
