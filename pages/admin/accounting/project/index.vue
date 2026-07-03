<template>
  <div>
    <!-- Header Section using Dynamic Theme Primary color -->
    <v-card class="mb-6 rounded-xl overflow-hidden shadow-lg border-0 primary" dark>
      <v-card-text class="pa-6 white--text">
        <div class="d-flex align-center justify-space-between flex-wrap">
          <div class="d-flex align-center">
            <v-avatar color="white opacity-20" rounded size="56" class="mr-4">
              <v-icon color="white" large>mdi-folder-account-outline</v-icon>
            </v-avatar>
            <div>
              <h1 class="text-h4 font-weight-black mb-1 white--text">{{ $t('project_budget') }}</h1>
              <p class="text-subtitle-2 white--text opacity-80 mb-0">Track donor grants, government counterparts, and category allocations</p>
            </div>
          </div>
          <v-btn color="white" light large @click="openDialog()" class="rounded-xl font-weight-bold primary--text elevation-2 mt-2 mt-md-0">
            <v-icon color="primary" left>mdi-plus</v-icon>
            <span>{{ $t('create_project') }}</span>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>

    <!-- Project Metrics Summary -->
    <v-row class="mb-6" dense>
      <v-col cols="12" md="4" v-for="(metric, idx) in metrics" :key="idx">
        <v-card class="rounded-xl shadow-sm border" elevation="1">
          <v-card-text class="pa-5">
            <div class="d-flex align-center">
              <v-avatar :color="metric.color + ' lighten-5'" rounded size="56" class="mr-4">
                <v-icon :color="metric.color" large>{{ metric.icon }}</v-icon>
              </v-avatar>
              <div>
                <div class="text-caption grey--text font-weight-bold text-uppercase mb-1">{{ metric.title }}</div>
                <div class="text-h5 font-weight-black font-monospace">{{ metric.value }}</div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters and Table -->
    <v-card class="rounded-xl shadow-sm border mb-6" elevation="1">
      <v-card-title class="pa-4 d-flex justify-space-between align-center border-bottom">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-filter-variant</v-icon>
          <span class="text-subtitle-1 font-weight-bold">{{ $t('project_budget') }}</span>
        </div>
        <v-text-field
          v-model="search"
          label="Search projects..."
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
        :items="projects"
        :loading="loading"
        outlined
        class="modernize-table elevation-0"
        loading-text="Loading..."
        no-data-text="No data available"
      >
        <!-- Code -->
        <template v-slot:item.code="{ item }">
          <div class="font-weight-bold primary--text">{{ item.code }}</div>
        </template>

        <!-- Budget -->
        <template v-slot:item.totalBudget="{ item }">
          <div class="text-right font-weight-bold font-monospace">
            {{ formatCurrency(item.totalBudget) }}
            <span class="text-caption grey--text">{{ item.currency?.code || 'USD' }}</span>
          </div>
        </template>

        <!-- Counterpart -->
        <template v-slot:item.counterpartRatio="{ item }">
          <div class="text-center font-weight-bold">
            {{ item.counterpartRatio }}%
          </div>
        </template>

        <!-- Status -->
        <template v-slot:item.status="{ item }">
          <v-chip small outlined :color="item.status === 'ACTIVE' ? 'success' : 'grey'" class="font-weight-bold">
            {{ item.status }}
          </v-chip>
        </template>

        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <v-btn icon color="primary" @click="openDialog(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="error" @click="deleteProject(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog component -->
    <v-dialog v-model="showDialog" max-width="800px" persistent>
      <v-card class="rounded-xl overflow-hidden">
        <v-card-title class="primary white--text py-4 px-6">
          <v-icon color="white" class="mr-2">mdi-folder-plus-outline</v-icon>
          <span class="font-weight-bold">{{ isEdit ? $t('edit_project') : $t('create_project') }}</span>
          <v-spacer />
          <v-btn icon dark @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pa-6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.code" :label="$t('project_code') + ' *'" outlined dense required :disabled="isEdit" />
              </v-col>
              <v-col cols="12" md="6">
                <v-select v-model="form.currencyId" :items="currencies" item-text="code" item-value="id" :label="$t('project_currency') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.nameLo" :label="$t('lao_name') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.nameEn" :label="$t('english_name')" outlined dense />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model.number="form.totalBudget" type="number" :label="$t('total_budget') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model.number="form.counterpartRatio" type="number" :label="$t('counterpart_ratio') + ' *'" outlined dense required />
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form.description" :label="$t('project_description')" outlined dense rows="2" />
              </v-col>
            </v-row>

            <v-divider class="my-4" />
            <h3 class="text-subtitle-1 font-weight-bold mb-3">{{ $t('category_budgets') }}</h3>
            <v-row dense v-for="(bud, index) in form.budgets" :key="index">
              <v-col cols="6">
                <v-text-field v-model="bud.categoryName" label="Category Name" outlined dense disabled />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model.number="bud.allocatedAmount" type="number" :label="$t('allocated_amount')" outlined dense />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-6 py-4 grey lighten-5 border-top">
          <v-spacer />
          <v-btn text @click="closeDialog">{{ $t('cancel') }}</v-btn>
          <v-btn color="primary" class="px-5 rounded-lg" :disabled="!valid" @click="saveProject">{{ $t('save_project') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ProjectManagement',
  data() {
    return {
      search: '',
      loading: false,
      showDialog: false,
      valid: false,
      isEdit: false,
      projects: [],
      currencies: [],
      form: {
        id: null,
        code: '',
        nameLo: '',
        nameEn: '',
        description: '',
        donor: 'ADB',
        totalBudget: 0,
        counterpartRatio: 10,
        currencyId: null,
        budgets: [
          { categoryName: 'Civil Works', allocatedAmount: 0 },
          { categoryName: 'Consulting Services', allocatedAmount: 0 },
          { categoryName: 'Equipment', allocatedAmount: 0 },
          { categoryName: 'Operating Costs', allocatedAmount: 0 }
        ]
      }
    }
  },
  computed: {
    headers() {
      return [
        { text: this.$t('project_code'), value: 'code', sortable: true },
        { text: this.$t('lao_name'), value: 'nameLo' },
        { text: 'Donor', value: 'donor' },
        { text: this.$t('total_budget'), value: 'totalBudget', align: 'end' },
        { text: this.$t('counterpart_ratio'), value: 'counterpartRatio', align: 'center' },
        { text: this.$t('status'), value: 'status', align: 'center' },
        { text: this.$t('actions'), value: 'actions', sortable: false, align: 'center' }
      ]
    },
    metrics() {
      const activeCount = this.projects.filter(p => p.status === 'ACTIVE').length;
      const totalBudget = this.projects.reduce((sum, p) => sum + parseFloat(p.totalBudget || 0), 0);
      return [
        { title: this.$t('status') + ' (ACTIVE)', value: `${activeCount} Projects`, icon: 'mdi-folder-open-outline', color: 'primary' },
        { title: this.$t('total_budget'), value: this.formatCurrency(totalBudget), icon: 'mdi-currency-usd', color: 'success' },
        { title: 'Global Donors', value: 'ADB / World Bank', icon: 'mdi-earth', color: 'info' }
      ]
    }
  },
  async mounted() {
    await this.fetchCurrencies();
    await this.fetchProjects();
  },
  methods: {
    async fetchCurrencies() {
      try {
        const { data } = await this.$axios.get('/api/currency/findAll');
        this.currencies = data || [];
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProjects() {
      this.loading = true;
      try {
        const { data } = await this.$axios.get('/api/projects', {
          params: { search: this.search }
        });
        this.projects = data.data || [];
      } catch (error) {
        this.$toast.error('Failed to load projects');
      } finally {
        this.loading = false;
      }
    },
    openDialog(project = null) {
      if (project) {
        this.isEdit = true;
        this.form = { ...project };
      } else {
        this.isEdit = false;
        this.form = {
          id: null,
          code: '',
          nameLo: '',
          nameEn: '',
          description: '',
          donor: 'ADB',
          totalBudget: 0,
          counterpartRatio: 10,
          currencyId: this.currencies[0]?.id || null,
          budgets: [
            { categoryName: 'Civil Works', allocatedAmount: 0 },
            { categoryName: 'Consulting Services', allocatedAmount: 0 },
            { categoryName: 'Equipment', allocatedAmount: 0 },
            { categoryName: 'Operating Costs', allocatedAmount: 0 }
          ]
        };
      }
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    async saveProject() {
      try {
        if (this.isEdit) {
          await this.$axios.put(`/api/projects/${this.form.id}`, this.form);
          this.$toast.success('Project updated successfully');
        } else {
          await this.$axios.post('/api/projects', this.form);
          this.$toast.success('Project created successfully');
        }
        this.closeDialog();
        await this.fetchProjects();
      } catch (error) {
        this.$toast.error(error.response?.data?.message || 'Error saving project');
      }
    },
    async deleteProject(project) {
      if (confirm(`Are you sure you want to delete project ${project.code}?`)) {
        try {
          await this.$axios.delete(`/api/projects/${project.id}`);
          this.$toast.success('Project deleted successfully');
          await this.fetchProjects();
        } catch (error) {
          this.$toast.error('Failed to delete project');
        }
      }
    },
    debounceSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.fetchProjects();
      }, 500);
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 }).format(amount);
    }
  }
}
</script>
