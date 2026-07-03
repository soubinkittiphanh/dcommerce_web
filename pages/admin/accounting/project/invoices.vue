<template>
  <div>
    <!-- Header Card using Dynamic Theme Primary color -->
    <v-card class="mb-6 rounded-xl overflow-hidden shadow-lg border-0 primary" dark>
      <v-card-text class="pa-6 white--text">
        <div class="d-flex align-center justify-space-between flex-wrap">
          <div class="d-flex align-center">
            <v-avatar color="white opacity-20" rounded size="56" class="mr-4">
              <v-icon color="white" large>mdi-file-percent-outline</v-icon>
            </v-avatar>
            <div>
              <h1 class="text-h4 font-weight-black mb-1 white--text">{{ $t('invoices') }}</h1>
              <p class="text-subtitle-2 white--text opacity-80 mb-0">Record contractor progress claims, calculate retention withheld, and manage ADB splits</p>
            </div>
          </div>
          <v-btn color="white" light large @click="openDialog()" class="rounded-xl font-weight-bold primary--text elevation-2 mt-2 mt-md-0">
            <v-icon color="primary" left>mdi-plus</v-icon>
            <span>{{ $t('certify_progress_claim') }}</span>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <!-- Table -->
    <v-card class="rounded-xl shadow-sm border mb-6" elevation="1">
      <v-card-title class="pa-4 d-flex justify-space-between align-center border-bottom">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-invoice-text-outline</v-icon>
          <span class="text-subtitle-1 font-weight-bold">{{ $t('progress_claims') }}</span>
        </div>
        <v-text-field
          v-model="search"
          label="Search claims..."
          outlined
          dense
          hide-details
          clearable
          prepend-inner-icon="mdi-magnify"
          style="max-width: 300px"
          class="rounded-lg"
          @input="debounceSearch"
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="invoices"
        :loading="loading"
        outlined
        class="modernize-table elevation-0"
        loading-text="Loading..."
        no-data-text="No data available"
      >
        <template v-slot:item.invoiceNumber="{ item }">
          <span class="font-weight-bold primary--text">{{ item.invoiceNumber }}</span>
          <div class="text-caption grey--text">Claim #{{ item.claimNumber }}</div>
        </template>

        <template v-slot:item.contract="{ item }">
          <div>Contract: <span class="font-weight-medium">{{ item.contract?.contractNumber }}</span></div>
          <div class="text-caption grey--text">Project: {{ item.contract?.project?.code }}</div>
        </template>

        <template v-slot:item.grossAmount="{ item }">
          <div class="text-right font-weight-bold font-monospace">
            {{ formatCurrency(item.grossAmount) }}
          </div>
        </template>

        <template v-slot:item.retentionAmount="{ item }">
          <div class="text-right warning--text font-weight-bold font-monospace">
            {{ formatCurrency(item.retentionAmount) }}
          </div>
        </template>

        <template v-slot:item.netAmount="{ item }">
          <div class="text-right primary--text font-weight-black font-monospace">
            {{ formatCurrency(item.netAmount) }}
          </div>
        </template>

        <template v-slot:item.fundingSplit="{ item }">
          <div class="text-right text-caption">
            <div>ADB: <strong>{{ formatCurrency(item.adbFundingAmount) }}</strong></div>
            <div>GCF: <strong>{{ formatCurrency(item.counterpartFundingAmount) }}</strong></div>
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip small outlined :color="getStatusColor(item.status)" class="font-weight-bold">
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn v-if="item.status === 'DRAFT' || item.status === 'PENDING'" icon color="success" @click="approveInvoice(item)">
            <v-icon>mdi-check-circle-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog -->
    <v-dialog v-model="showDialog" max-width="800px" persistent>
      <v-card class="rounded-xl overflow-hidden">
        <v-card-title class="primary white--text py-4 px-6">
          <v-icon color="white" class="mr-2">mdi-invoice-plus-outline</v-icon>
          <span class="font-weight-bold">{{ $t('certify_progress_claim') }}</span>
          <v-spacer />
          <v-btn icon dark @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-select
                  v-model="form.contractId"
                  :items="contracts"
                  item-text="contractNumber"
                  item-value="id"
                  label="Select Contractor Contract *"
                  outlined
                  dense
                  required
                  @change="onContractChange"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.invoiceNumber" :label="$t('contract_number') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model.number="form.claimNumber" type="number" :label="$t('claim_number') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.invoiceDate" type="date" :label="$t('billing_date') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model.number="form.grossAmount" type="number" :label="$t('gross_amount') + ' *'" outlined dense required @input="calculateSplits" />
              </v-col>
            </v-row>

            <v-divider class="my-4" />
            <h3 class="text-subtitle-1 font-weight-bold mb-3">Real-Time Retention & Funding Splits</h3>
            <v-card outlined class="pa-4 bg-light">
              <v-row dense>
                <v-col cols="6" md="4" class="text-center border-right">
                  <div class="caption grey--text">{{ $t('retention_withheld') }} ({{ selectedContract ? selectedContract.retentionRate : 10 }}%)</div>
                  <div class="text-h6 font-weight-bold warning--text font-monospace">{{ formatCurrency(splits.retentionAmount) }}</div>
                </v-col>
                <v-col cols="6" md="4" class="text-center border-right">
                  <div class="caption grey--text">{{ $t('net_payable') }}</div>
                  <div class="text-h6 font-weight-bold primary--text font-monospace">{{ formatCurrency(splits.netAmount) }}</div>
                </v-col>
                <v-col cols="12" md="4" class="text-center">
                  <div class="caption grey--text">{{ $t('adb_funding') }} ({{ selectedContract ? 100 - selectedContract.project.counterpartRatio : 90 }}%)</div>
                  <div class="text-h6 font-weight-bold success--text font-monospace">{{ formatCurrency(splits.adbFundingAmount) }}</div>
                  <div class="caption grey--text mt-1">{{ $t('counterpart_funding') }}: {{ formatCurrency(splits.counterpartFundingAmount) }}</div>
                </v-col>
              </v-row>
            </v-card>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-6 py-4 grey lighten-5 border-top">
          <v-spacer />
          <v-btn text @click="closeDialog">{{ $t('cancel') }}</v-btn>
          <v-btn color="primary" class="px-5 rounded-lg" :disabled="!valid" @click="saveInvoice">{{ $t('submit_claim') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ProjectInvoiceManagement',
  data() {
    return {
      search: '',
      loading: false,
      showDialog: false,
      valid: false,
      invoices: [],
      contracts: [],
      selectedContract: null,
      form: {
        contractId: null,
        invoiceNumber: '',
        claimNumber: 1,
        invoiceDate: new Date().toISOString().split('T')[0],
        grossAmount: 0
      },
      splits: {
        retentionAmount: 0,
        netAmount: 0,
        adbFundingAmount: 0,
        counterpartFundingAmount: 0
      }
    }
  },
  computed: {
    headers() {
      return [
        { text: this.$t('claim_number'), value: 'invoiceNumber', sortable: true },
        { text: this.$t('contracts'), value: 'contract' },
        { text: this.$t('gross_amount'), value: 'grossAmount', align: 'end' },
        { text: this.$t('retention_withheld'), value: 'retentionAmount', align: 'end' },
        { text: this.$t('net_payable'), value: 'netAmount', align: 'end' },
        { text: 'Funding Source Split', value: 'fundingSplit', align: 'end' },
        { text: this.$t('status'), value: 'status', align: 'center' },
        { text: this.$t('actions'), value: 'actions', sortable: false, align: 'center' }
      ]
    }
  },
  async mounted() {
    await this.fetchContracts();
    await this.fetchInvoices();
  },
  methods: {
    async fetchContracts() {
      try {
        const { data } = await this.$axios.get('/api/project-contracts');
        this.contracts = data.data || [];
      } catch (error) {
        console.error(error);
      }
    },
    async fetchInvoices() {
      this.loading = true;
      try {
        const { data } = await this.$axios.get('/api/project-invoices', {
          params: { search: this.search }
        });
        this.invoices = data.data || [];
      } catch (error) {
        this.$toast.error('Failed to load project invoices');
      } finally {
        this.loading = false;
      }
    },
    openDialog() {
      this.form = {
        contractId: this.contracts[0]?.id || null,
        invoiceNumber: '',
        claimNumber: 1,
        invoiceDate: new Date().toISOString().split('T')[0],
        grossAmount: 0
      };
      this.selectedContract = this.contracts[0] || null;
      this.calculateSplits();
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    onContractChange() {
      this.selectedContract = this.contracts.find(c => c.id === this.form.contractId) || null;
      this.calculateSplits();
    },
    calculateSplits() {
      const gross = parseFloat(this.form.grossAmount) || 0;
      const retentionRate = this.selectedContract ? parseFloat(this.selectedContract.retentionRate) : 10;
      const counterpartRatio = this.selectedContract ? parseFloat(this.selectedContract.project.counterpartRatio) : 10;

      this.splits.retentionAmount = gross * (retentionRate / 100);
      this.splits.netAmount = gross - this.splits.retentionAmount;

      this.splits.counterpartFundingAmount = gross * (counterpartRatio / 100);
      this.splits.adbFundingAmount = gross - this.splits.counterpartFundingAmount;
    },
    async saveInvoice() {
      try {
        await this.$axios.post('/api/project-invoices', this.form);
        this.$toast.success('Invoice claim submitted successfully');
        this.closeDialog();
        await this.fetchInvoices();
      } catch (error) {
        this.$toast.error(error.response?.data?.message || 'Error saving invoice');
      }
    },
    async approveInvoice(invoice) {
      if (confirm(`Confirm approval for claim ${invoice.invoiceNumber}?`)) {
        try {
          await this.$axios.put(`/api/project-invoices/${invoice.id}/approve`);
          this.$toast.success('Invoice approved successfully');
          await this.fetchInvoices();
        } catch (error) {
          this.$toast.error('Approval failed');
        }
      }
    },
    getStatusColor(status) {
      const colors = {
        DRAFT: 'grey',
        PENDING: 'orange',
        APPROVED: 'green',
        PAID: 'primary',
        CANCELLED: 'error'
      };
      return colors[status] || 'grey';
    },
    debounceSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.fetchInvoices();
      }, 500);
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(amount);
    }
  }
}
</script>

<style scoped>
.border-right {
  border-right: 1px solid #e0e0e0;
}
</style>
