<template>
  <div>
    <!-- Header Card using Dynamic Theme Primary color -->
    <v-card class="mb-6 rounded-xl overflow-hidden shadow-lg border-0 primary" dark>
      <v-card-text class="pa-6 white--text">
        <div class="d-flex align-center justify-space-between flex-wrap">
          <div class="d-flex align-center">
            <v-avatar color="white opacity-20" rounded size="56" class="mr-4">
              <v-icon color="white" large>mdi-file-cabinet</v-icon>
            </v-avatar>
            <div>
              <h1 class="text-h4 font-weight-black mb-1 white--text">{{ $t('wa') }}</h1>
              <p class="text-subtitle-2 white--text opacity-80 mb-0">Prepare, submit, and track ADB Withdrawal Applications and disbursement liquidations</p>
            </div>
          </div>
          <v-btn color="white" light large @click="openDialog()" class="rounded-xl font-weight-bold primary--text elevation-2 mt-2 mt-md-0">
            <v-icon color="primary" left>mdi-plus</v-icon>
            <span>{{ $t('create_wa') }}</span>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <!-- Table -->
    <v-card class="rounded-xl shadow-sm border mb-6" elevation="1">
      <v-card-title class="pa-4 d-flex justify-space-between align-center border-bottom">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-clipboard-list-outline</v-icon>
          <span class="text-subtitle-1 font-weight-bold">{{ $t('wa') }}</span>
        </div>
        <v-text-field
          v-model="search"
          label="Search WAs..."
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
        :items="was"
        :loading="loading"
        outlined
        class="modernize-table elevation-0"
        loading-text="Loading..."
        no-data-text="No data available"
      >
        <template v-slot:item.waNumber="{ item }">
          <span class="font-weight-bold primary--text">{{ item.waNumber }}</span>
        </template>

        <template v-slot:item.project="{ item }">
          <v-chip small outlined color="primary" class="font-weight-bold">
            {{ item.project?.code || 'N/A' }}
          </v-chip>
        </template>

        <template v-slot:item.amount="{ item }">
          <div class="text-right font-weight-bold font-monospace">
            {{ formatCurrency(item.amount) }}
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip small outlined :color="getWAStatusColor(item.status)" class="font-weight-bold">
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn v-if="item.status === 'DRAFT'" icon color="primary" @click="updateWAStatus(item, 'SUBMITTED')">
            <v-icon>mdi-send-outline</v-icon>
          </v-btn>
          <v-btn v-if="item.status === 'SUBMITTED'" icon color="success" @click="updateWAStatus(item, 'DISBURSED')">
            <v-icon>mdi-check-all</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog -->
    <v-dialog v-model="showDialog" max-width="800px" persistent>
      <v-card class="rounded-xl overflow-hidden">
        <v-card-title class="primary white--text py-4 px-6">
          <v-icon color="white" class="mr-2">mdi-file-plus-outline</v-icon>
          <span class="font-weight-bold">{{ $t('create_wa') }}</span>
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
                  v-model="form.projectId"
                  :items="projects"
                  item-text="code"
                  item-value="id"
                  :label="$t('project_code') + ' *'"
                  outlined
                  dense
                  required
                  @change="onProjectChange"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.waNumber" :label="$t('wa_number') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.waDate" type="date" :label="$t('wa_date') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model.number="form.amount" type="number" :label="$t('wa_amount') + ' *'" outlined dense required />
              </v-col>
            </v-row>

            <v-divider class="my-4" />
            <h3 class="text-subtitle-1 font-weight-bold mb-3">{{ $t('link_invoices') }}</h3>
            <v-select
              v-model="form.invoiceIds"
              :items="approvedInvoices"
              item-text="invoiceNumber"
              item-value="id"
              label="Select Invoices *"
              multiple
              chips
              outlined
              dense
              hint="Only displays approved invoices for the selected project"
              persistent-hint
            >
              <template v-slot:selection="{ item }">
                <v-chip close @click:close="removeSelectedInvoice(item.id)">
                  {{ item.invoiceNumber }} (Net: {{ formatCurrency(item.netAmount) }})
                </v-chip>
              </template>
            </v-select>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-6 py-4 grey lighten-5 border-top">
          <v-spacer />
          <v-btn text @click="closeDialog">{{ $t('cancel') }}</v-btn>
          <v-btn color="primary" class="px-5 rounded-lg" :disabled="!valid" @click="saveWA">{{ $t('save_wa') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'WAManagement',
  data() {
    return {
      search: '',
      loading: false,
      showDialog: false,
      valid: false,
      was: [],
      projects: [],
      approvedInvoices: [],
      form: {
        projectId: null,
        waNumber: '',
        waDate: new Date().toISOString().split('T')[0],
        amount: 0,
        invoiceIds: []
      }
    }
  },
  computed: {
    headers() {
      return [
        { text: this.$t('wa_number'), value: 'waNumber', sortable: true },
        { text: this.$t('wa_date'), value: 'waDate' },
        { text: this.$t('project_code'), value: 'project' },
        { text: this.$t('wa_amount'), value: 'amount', align: 'end' },
        { text: this.$t('status'), value: 'status', align: 'center' },
        { text: this.$t('actions'), value: 'actions', sortable: false, align: 'center' }
      ]
    }
  },
  async mounted() {
    await this.fetchProjects();
    await this.fetchWAs();
  },
  methods: {
    async fetchProjects() {
      try {
        const { data } = await this.$axios.get('/api/projects');
        this.projects = data.data || [];
      } catch (error) {
        console.error(error);
      }
    },
    async fetchWAs() {
      this.loading = true;
      try {
        const { data } = await this.$axios.get('/api/withdrawal-applications', {
          params: { search: this.search }
        });
        this.was = data.data || [];
      } catch (error) {
        this.$toast.error('Failed to load WAs');
      } finally {
        this.loading = false;
      }
    },
    async fetchApprovedInvoices() {
      try {
        const { data } = await this.$axios.get('/api/project-invoices', {
          params: { status: 'APPROVED' }
        });
        this.approvedInvoices = (data.data || []).filter(invoice => 
          invoice.contract?.projectId === this.form.projectId && !invoice.withdrawalApplicationId
        );
      } catch (error) {
        console.error(error);
      }
    },
    openDialog() {
      this.form = {
        projectId: this.projects[0]?.id || null,
        waNumber: '',
        waDate: new Date().toISOString().split('T')[0],
        amount: 0,
        invoiceIds: []
      };
      this.fetchApprovedInvoices();
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    onProjectChange() {
      this.form.invoiceIds = [];
      this.fetchApprovedInvoices();
    },
    removeSelectedInvoice(id) {
      const idx = this.form.invoiceIds.indexOf(id);
      if (idx > -1) {
        this.form.invoiceIds.splice(idx, 1);
      }
    },
    async saveWA() {
      try {
        await this.$axios.post('/api/withdrawal-applications', this.form);
        this.$toast.success('WA created successfully');
        this.closeDialog();
        await this.fetchWAs();
      } catch (error) {
        this.$toast.error(error.response?.data?.message || 'Error saving WA');
      }
    },
    async updateWAStatus(wa, status) {
      if (confirm(`Confirm changing WA status to ${status}?`)) {
        try {
          await this.$axios.put(`/api/withdrawal-applications/${wa.id}/status`, { status });
          this.$toast.success(`WA status updated to ${status}`);
          await this.fetchWAs();
        } catch (error) {
          this.$toast.error('Failed to update status');
        }
      }
    },
    getWAStatusColor(status) {
      const colors = {
        DRAFT: 'grey',
        SUBMITTED: 'orange',
        DISBURSED: 'success',
        REJECTED: 'error'
      };
      return colors[status] || 'grey';
    },
    debounceSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.fetchWAs();
      }, 500);
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(amount);
    }
  }
}
</script>
