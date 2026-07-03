<template>
  <div>
    <!-- Header Card using Dynamic Theme Primary color -->
    <v-card class="mb-6 rounded-xl overflow-hidden shadow-lg border-0 primary" dark>
      <v-card-text class="pa-6 white--text">
        <div class="d-flex align-center justify-space-between flex-wrap">
          <div class="d-flex align-center">
            <v-avatar color="white opacity-20" rounded size="56" class="mr-4">
              <v-icon color="white" large>mdi-file-document-edit-outline</v-icon>
            </v-avatar>
            <div>
              <h1 class="text-h4 font-weight-black mb-1 white--text">{{ $t('contracts') }}</h1>
              <p class="text-subtitle-2 white--text opacity-80 mb-0">Manage contractor agreements, committed thresholds, and variations</p>
            </div>
          </div>
          <v-btn color="white" light large @click="openDialog()" class="rounded-xl font-weight-bold primary--text elevation-2 mt-2 mt-md-0">
            <v-icon color="primary" left>mdi-plus</v-icon>
            <span>{{ $t('register_contract') }}</span>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <!-- Table -->
    <v-card class="rounded-xl shadow-sm border mb-6" elevation="1">
      <v-card-title class="pa-4 d-flex justify-space-between align-center border-bottom">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
          <span class="text-subtitle-1 font-weight-bold">{{ $t('contracts') }}</span>
        </div>
        <v-text-field
          v-model="search"
          label="Search contracts..."
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
        :items="contracts"
        :loading="loading"
        outlined
        class="modernize-table elevation-0"
        loading-text="Loading..."
        no-data-text="No data available"
      >
        <template v-slot:item.contractNumber="{ item }">
          <span class="font-weight-bold primary--text">{{ item.contractNumber }}</span>
        </template>
        
        <template v-slot:item.project="{ item }">
          <v-chip small outlined color="primary" class="font-weight-bold">
            {{ item.project?.code || 'N/A' }}
          </v-chip>
        </template>

        <template v-slot:item.totalValue="{ item }">
          <div class="text-right font-weight-bold font-monospace">
            {{ formatCurrency(item.totalValue) }}
            <span class="text-caption grey--text">{{ item.currency?.code || 'USD' }}</span>
          </div>
        </template>

        <template v-slot:item.spentValue="{ item }">
          <div class="text-right font-weight-medium success--text font-monospace">
            {{ formatCurrency(item.spentValue) }}
          </div>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip small outlined :color="item.status === 'ACTIVE' ? 'success' : 'grey'" class="font-weight-bold">
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn icon color="primary" @click="openDialog(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="error" @click="deleteContract(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog -->
    <v-dialog v-model="showDialog" max-width="800px" persistent>
      <v-card class="rounded-xl overflow-hidden">
        <v-card-title class="primary white--text py-4 px-6">
          <v-icon color="white" class="mr-2">mdi-file-plus-outline</v-icon>
          <span class="font-weight-bold">{{ isEdit ? $t('edit_project') : $t('register_contract') }}</span>
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
                  :disabled="isEdit"
                  @change="onProjectChange"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="form.categoryName"
                  :items="categories"
                  label="ADB Category Budget *"
                  outlined
                  dense
                  required
                  :disabled="isEdit"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.contractNumber" :label="$t('contract_number') + ' *'" outlined dense required :disabled="isEdit" />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.contractorName" :label="$t('contractor_name') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model.number="form.totalValue" type="number" :label="$t('contract_value') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-select v-model="form.currencyId" :items="currencies" item-text="code" item-value="id" label="Currency *" outlined dense required :disabled="isEdit" />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model.number="form.retentionRate" type="number" :label="$t('retention_rate') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6" v-if="isEdit">
                <v-select v-model="form.status" :items="['ACTIVE', 'COMPLETED', 'TERMINATED']" :label="$t('status')" outlined dense />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-6 py-4 grey lighten-5 border-top">
          <v-spacer />
          <v-btn text @click="closeDialog">{{ $t('cancel') }}</v-btn>
          <v-btn color="primary" class="px-5 rounded-lg" :disabled="!valid" @click="saveContract">{{ $t('save_project') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ContractManagement',
  data() {
    return {
      search: '',
      loading: false,
      showDialog: false,
      valid: false,
      isEdit: false,
      contracts: [],
      projects: [],
      currencies: [],
      categories: ['Civil Works', 'Consulting Services', 'Equipment', 'Operating Costs'],
      form: {
        id: null,
        projectId: null,
        categoryName: '',
        contractNumber: '',
        contractorName: '',
        totalValue: 0,
        currencyId: null,
        retentionRate: 10,
        status: 'ACTIVE'
      }
    }
  },
  computed: {
    headers() {
      return [
        { text: this.$t('contract_number'), value: 'contractNumber', sortable: true },
        { text: this.$t('contractor_name'), value: 'contractorName' },
        { text: this.$t('project_code'), value: 'project' },
        { text: this.$t('contract_value'), value: 'totalValue', align: 'end' },
        { text: this.$t('disbursed'), value: 'spentValue', align: 'end' },
        { text: this.$t('status'), value: 'status', align: 'center' },
        { text: this.$t('actions'), value: 'actions', sortable: false, align: 'center' }
      ]
    }
  },
  async mounted() {
    await this.fetchProjects();
    await this.fetchCurrencies();
    await this.fetchContracts();
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
    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/findAll');
        this.currencies = data || [];
      } catch (error) {
        console.error(error);
      }
    },
    async fetchContracts() {
      this.loading = true;
      try {
        const { data } = await this.$axios.get('/api/project-contracts', {
          params: { search: this.search }
        });
        this.contracts = data.data || [];
      } catch (error) {
        this.$toast.error('Failed to load contracts');
      } finally {
        this.loading = false;
      }
    },
    openDialog(contract = null) {
      if (contract) {
        this.isEdit = true;
        this.form = { ...contract };
      } else {
        this.isEdit = false;
        this.form = {
          id: null,
          projectId: this.projects[0]?.id || null,
          categoryName: this.categories[0],
          contractNumber: '',
          contractorName: '',
          totalValue: 0,
          currencyId: this.currencies[0]?.id || null,
          retentionRate: 10,
          status: 'ACTIVE'
        };
      }
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    async saveContract() {
      try {
        if (this.isEdit) {
          await this.$axios.put(`/api/project-contracts/${this.form.id}`, this.form);
          this.$toast.success('Contract updated successfully');
        } else {
          await this.$axios.post('/api/project-contracts', this.form);
          this.$toast.success('Contract registered successfully');
        }
        this.closeDialog();
        await this.fetchContracts();
      } catch (error) {
        this.$toast.error(error.response?.data?.message || 'Error saving contract');
      }
    },
    async deleteContract(contract) {
      if (confirm(`Are you sure you want to delete contract ${contract.contractNumber}?`)) {
        try {
          await this.$axios.delete(`/api/project-contracts/${contract.id}`);
          this.$toast.success('Contract deleted successfully');
          await this.fetchContracts();
        } catch (error) {
          this.$toast.error(error.response?.data?.message || 'Failed to delete contract');
        }
      }
    },
    onProjectChange() {
      const proj = this.projects.find(p => p.id === this.form.projectId);
      if (proj) {
        this.form.currencyId = proj.currencyId;
      }
    },
    debounceSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.fetchContracts();
      }, 500);
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(amount);
    }
  }
}
</script>
