<template>
  <v-container fluid class="pa-4">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h2 class=" font-weight-bold primary--text mb-1">
          <v-icon color="primary" class="mr-2">mdi-clock-check-outline</v-icon>
          Close of Business (ປິດຍອດປະຈຳວັນ)
        </h2>
        <div class=" text-medium-emphasis">Capture daily balances for all accounts to optimize historical
          reporting</div>
      </div>
      <div class="d-flex gap-2">
        <v-btn color="grey lighten-2" class="mr-2" @click="syncHistory" :loading="loadingSync" outlined small
          v-if="history.length === 0">
          Sync History
        </v-btn>
        <v-btn color="success" x-large @click="confirmCOB" :loading="loading" elevation="2">
          <v-icon left>mdi-play-circle-outline</v-icon> Run COB Batch
        </v-btn>
      </div>
    </div>

    <v-row>
      <!-- Status Card -->
      <v-col cols="12" md="4">
        <v-card outlined class="rounded-lg mb-6 border-primary">
          <v-card-title class="subtitle-1 font-weight-bold primary--text">
            <v-icon left size="20" color="primary">mdi-calendar-sync</v-icon> System Business Date
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="text-center py-6">
            <div class="text-overline mb-1 grey--text">CURRENT WORKING DATE</div>
            <div class="text-h3 font-weight-bold mb-2">{{ currentBusinessDate }}</div>
            <v-chip color="success" label small class="mt-2 font-weight-bold">SYSTEM STATUS: OPEN</v-chip>

            <v-alert type="info" text dense class="mt-6 text-left  mb-0">
              Transactions are currently being recorded for the date shown above. Running COB will lock this day and
              move the system forward.
            </v-alert>
          </v-card-text>
        </v-card>

        <v-card outlined class="rounded-lg mb-6">
          <v-card-title class="subtitle-1 font-weight-bold">
            <v-icon left size="20">mdi-cog-outline</v-icon> Information
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="text-body-2">
            <div class="d-flex justify-space-between mb-2">
              <span class="grey--text">Last Working Day:</span>
              <span class="font-weight-bold">{{ businessDateInfo?.lastWorkingDate || 'N/A' }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span class="grey--text">Auto-initialized from:</span>
              <span class="font-weight-bold">Latest Ledger Activity</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- History Table -->
      <v-col cols="12" md="8">
        <v-card outlined class="rounded-lg">
          <v-card-title class="subtitle-1 font-weight-bold d-flex justify-space-between align-center">
            <span><v-icon left size="20">mdi-history</v-icon> Recent Snapshot Logs</span>
            <v-btn icon small @click="fetchHistory" :loading="loadingHistory">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-data-table :headers="headers" :items="history" :loading="loadingHistory" class="elevation-0"
            :items-per-page="10">
            <template v-slot:item.date="{ item }">
              <span class="font-weight-medium text-uppercase ">{{ item.date }}</span>
            </template>
            <template v-slot:item.openingBalance="{ item }">
              {{ formatCurrency(item.openingBalance) }}
            </template>
            <template v-slot:item.totalIn="{ item }">
              <span class="success--text">+{{ formatCurrency(item.totalIn) }}</span>
            </template>
            <template v-slot:item.totalOut="{ item }">
              <span class="error--text">-{{ formatCurrency(item.totalOut) }}</span>
            </template>
            <template v-slot:item.closingBalance="{ item }">
              <span class="primary--text font-weight-bold">{{ formatCurrency(item.closingBalance) }}</span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="confirmDialog" max-width="400">
      <v-card class="rounded-lg pa-2">
        <v-card-title class="headline error--text">
          <v-icon color="error" class="mr-2">mdi-alert-circle</v-icon> Confirm COB Run?
        </v-card-title>
        <v-card-text class="pt-4 text-body-1">
          Are you sure you want to finalize transactions for <strong>{{ currentBusinessDate }}</strong>?
          <br><br>
          <v-alert type="warning" dense outlined class="">
            System will automatically roll over to the next business date after success.
          </v-alert>
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-spacer></v-spacer>
          <v-btn text @click="confirmDialog = false">Cancel</v-btn>
          <v-btn color="success" depressed @click="runCOB">Yes, Proceed</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      loading: false,
      loadingSync: false,
      loadingHistory: false,
      confirmDialog: false,
      businessDateInfo: null,
      history: [],
      headers: [
        { text: 'ບັນຊີ (Account)', value: 'bankAccount.accountName' },
        { text: 'ວັນທີ (Date)', value: 'date' },
        { text: 'ຍອດຍົກມາ (Opening)', value: 'openingBalance', align: 'right' },
        { text: 'ຮັບເຂົ້າ (In)', value: 'totalIn', align: 'right' },
        { text: 'ຖອນອອກ (Out)', value: 'totalOut', align: 'right' },
        { text: 'ຍອດເຫຼືອ (Balance)', value: 'closingBalance', align: 'right' },
      ]
    }
  },
  computed: {
    currentBusinessDate() {
      return this.businessDateInfo ? this.businessDateInfo.currentDate : '---';
    }
  },
  mounted() {
    this.refreshData();
  },
  methods: {
    async refreshData() {
      await Promise.all([
        this.fetchBusinessDate(),
        this.fetchHistory()
      ]);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('en-US').format(value || 0)
    },
    confirmCOB() {
      this.confirmDialog = true
    },
    async fetchBusinessDate() {
      try {
        const response = await this.$axios.get('/api/businessDate/current');
        if (response.data.success) {
          this.businessDateInfo = response.data.data;
        }
      } catch (e) {
        console.error('Error fetching business date:', e);
      }
    },
    async fetchHistory() {
      this.loadingHistory = true
      try {
        const response = await this.$axios.get('/api/accountDailyBalance/history')
        if (response.data.success) {
          this.history = response.data.data
        }
      } catch (error) {
        console.error('Error fetching history:', error)
        this.$toast.error('Failed to load batch history')
      } finally {
        this.loadingHistory = false
      }
    },
    async syncHistory() {
      this.loadingSync = true;
      try {
        const res = await this.$axios.post('/api/businessDate/sync');
        if (res.data.success) {
          this.$toast.success('Historical data synced. All past transactions now have business dates.');
        }
      } catch (e) {
        this.$toast.error('Sync failed');
      } finally {
        this.loadingSync = false;
      }
    },
    async runCOB() {
      this.confirmDialog = false
      this.loading = true
      try {
        const response = await this.$axios.post('/api/accountDailyBalance/batch')
        if (response.data.success) {
          this.$toast.success(response.data.message)
          await this.refreshData()
        }
      } catch (error) {
        console.error('COB Error:', error)
        this.$toast.error(error.response?.data?.error || 'Failed to run COB batch')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.rounded-lg {
  border-radius: 12px !important;
}

.border-primary {
  border: 1px solid var(--v-primary-base) !important;
}

.gap-2 {
  gap: 8px;
}
</style>
