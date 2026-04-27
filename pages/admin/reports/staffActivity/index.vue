<template>
  <v-container fluid class="pa-4">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h2 class="font-weight-bold primary--text mb-1">
          <v-icon color="primary" class="mr-2">mdi-account-clock-outline</v-icon>
          Staff Transaction Report (ລາຍງານການເຄື່ອນໄຫວຂອງພະນັກງານ)
        </h2>
        <div class="text-medium-emphasis">View top-ups and withdrawals processed by specific admin users</div>
      </div>
      <div class="d-flex gap-2">
        <v-btn color="success" @click="exportExcel" :disabled="!reportData.length" outlined class="mr-2">
          <v-icon left>mdi-file-excel</v-icon> Export Excel
        </v-btn>
        <v-btn color="primary" @click="printReport" :disabled="!reportData.length" outlined>
          <v-icon left>mdi-printer</v-icon> Print Report
        </v-btn>
      </div>
    </div>

    <!-- Filters -->
    <v-card outlined class="mb-6 rounded-lg shadow-sm">
      <v-card-text>
        <v-row align="center">
          <v-col cols="12" md="4">
            <v-autocomplete v-model="selectedUserId" :items="adminUsers" item-text="cus_name" item-value="id"
              label="ເລືອກພະນັກງານ (Select Admin/Staff)" outlined dense hide-details
              prepend-inner-icon="mdi-account-tie" clearable>
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title>{{ item.cus_name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.user_id }} | {{ item.user_group_name }}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <div class="date-picker-wrapper">
              <date-picker v-model="dateRange" range format="YYYY-MM-DD" placeholder="ເລືອກຊ່ວງວັນທີ (Date Range)"
                input-class="custom-date-input" width="100%"></date-picker>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="d-flex gap-2">
            <v-btn color="primary" @click="fetchReport" :loading="loading" class="flex-grow-1" height="40">
              <v-icon left>mdi-magnify</v-icon> ຄົ້ນຫາ (Search)
            </v-btn>
            <v-btn color="grey lighten-2" @click="resetFilters" icon large class="ml-2" :disabled="loading">
              <v-icon color="grey darken-2">mdi-refresh</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Summary Statistics -->
    <v-row class="mb-6" v-if="reportData.length > 0">
      <v-col cols="12" sm="6" md="3">
        <v-card outlined class="summary-card">
          <v-card-text class="d-flex align-center">
            <v-avatar color="green lighten-4" size="48" class="mr-4">
              <v-icon color="green darken-2">mdi-arrow-down-bold</v-icon>
            </v-avatar>
            <div>
              <div class="grey--text">ລວມເຕີມເງິນ (Total Top-ups)</div>
              <div class="text-h6 font-weight-bold success--text">{{ formatCurrency(totalTopup) }}</div>
              <div class=" grey--text">{{ countTopup }} ລາຍການ (txns)</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card outlined class="summary-card">
          <v-card-text class="d-flex align-center">
            <v-avatar color="red lighten-4" size="48" class="mr-4">
              <v-icon color="red darken-2">mdi-arrow-up-bold</v-icon>
            </v-avatar>
            <div>
              <div class="grey--text">ລວມຖອນເງິນ (Total Withdrawals)</div>
              <div class="text-h6 font-weight-bold error--text">{{ formatCurrency(totalWithdraw) }}</div>
              <div class=" grey--text">{{ countWithdraw }} ລາຍການ (txns)</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card outlined class="summary-card border-primary">
          <v-card-text class="d-flex align-center">
            <v-avatar color="primary lighten-4" size="48" class="mr-4">
              <v-icon color="primary darken-2">mdi-swap-vertical</v-icon>
            </v-avatar>
            <div>
              <div class="grey--text">ຍອດລວມທັງໝົດ (Grand Total)</div>
              <div class="text-h6 font-weight-bold primary--text">{{ formatCurrency(totalTopup - totalWithdraw) }}</div>
              <div class=" grey--text">{{ reportData.length }} ລາຍການທັງໝົດ</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Data Table -->
    <v-card outlined class="rounded-lg overflow-hidden" v-if="reportData.length > 0">
      <v-data-table :headers="headers" :items="reportData" :loading="loading" :items-per-page="50"
        class="elevation-0 staff-activity-table" dense :footer-props="{ 'items-per-page-options': [25, 50, 100, -1] }">
        <template v-slot:item.createdAt="{ item }">
          <div class="grey--text ">{{ formatDate(item.createdAt) }}</div>
          <div class="font-weight-medium">{{ formatTime(item.createdAt) }}</div>
        </template>

        <template v-slot:item.transactionType="{ item }">
          <v-chip small :color="getTypeColor(item.transactionType)" text-color="white" class="font-weight-bold">
            {{ item.transactionType }}
          </v-chip>
        </template>

        <template v-slot:item.student="{ item }">
          <div v-if="item.description.includes('Student:')">
            {{ item.description.split('Student:')[1].trim() }}
          </div>
          <div v-else>{{ item.description }}</div>
        </template>

        <template v-slot:item.account.accountName="{ item }">
          <div v-if="item.account">
            <div class="font-weight-medium">{{ item.account.accountName }}</div>
            <div class=" grey--text">{{ item.account.accountNumber }}</div>
          </div>
          <div v-else class="grey--text">-</div>
        </template>

        <template v-slot:item.amountIn="{ item }">
          <span v-if="item.amountIn > 0" class="success--text font-weight-bold">
            +{{ formatCurrency(item.amountIn) }}
          </span>
          <span v-else class="grey--text">-</span>
        </template>

        <template v-slot:item.amountOut="{ item }">
          <span v-if="item.amountOut > 0" class="error--text font-weight-bold">
            -{{ formatCurrency(item.amountOut) }}
          </span>
          <span v-else class="grey--text">-</span>
        </template>

        <template v-slot:no-data>
          <div class="pa-12 text-center grey--text">
            <v-icon size="64" color="grey lighten-2" class="mb-4">mdi-database-off</v-icon>
            <div>ບໍ່ພົບຂໍ້ມູນໃນຊ່ວງເວລານີ້</div>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Empty State -->
    <v-card v-else-if="!loading" flat class="text-center py-12 transparent">
      <v-avatar color="primary lighten-5" size="120" class="mb-4">
        <v-icon size="60" color="primary lighten-2">mdi-account-search</v-icon>
      </v-avatar>
      <h3 class="grey--text text--darken-2 font-weight-medium">ກະລຸນາເລືອກລາຍຊື່ແອັດມິນ ແລະ ກຳນົດໄລຍະເວລາ</h3>
      <p class="grey--text">Select a staff member and date range to view their transaction history.</p>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      loading: false,
      dateRange: [
        new Date().toISOString().substr(0, 10),
        new Date().toISOString().substr(0, 10)
      ],
      selectedUserId: null,
      adminUsers: [],
      reportData: [],
      headers: [
        { text: 'ວັນທີ ແລະ ເວລາ (Date & Time)', value: 'createdAt', width: '180px' },
        { text: 'ປະເພດ (Type)', value: 'transactionType', width: '130px' },
        { text: 'ລາຍລະອຽດ / ນັກຮຽນ (Detail)', value: 'student' },
        { text: 'ບັນຊີ (Account)', value: 'account.accountName' },
        { text: 'ເຕີມເງິນ (Top-up)', value: 'amountIn', align: 'right', width: '150px' },
        { text: 'ຖອນເງິນ (Withdraw)', value: 'amountOut', align: 'right', width: '150px' },
      ]
    }
  },
  computed: {
    totalTopup() {
      return this.reportData.reduce((sum, item) => sum + (item.amountIn || 0), 0)
    },
    totalWithdraw() {
      return this.reportData.reduce((sum, item) => sum + (item.amountOut || 0), 0)
    },
    countTopup() {
      return this.reportData.filter(item => item.transactionType === 'TOPUP').length
    },
    countWithdraw() {
      return this.reportData.filter(item => item.transactionType === 'WITHDRAWAL' || item.transactionType === 'WITHDRAW').length
    }
  },
  async mounted() {
    await this.loadAdminUsers()
  },
  methods: {
    async loadAdminUsers() {
      try {
        const res = await this.$axios.get('/api/user/find')
        this.adminUsers = res.data.data || res.data || []
      } catch (err) {
        console.error('Failed to load users', err)
        this.$toast.error('Failed to load staff list')
      }
    },
    resetFilters() {
      this.selectedUserId = null
      this.dateRange = [
        new Date().toISOString().substr(0, 10),
        new Date().toISOString().substr(0, 10)
      ]
      this.reportData = []
    },
    async fetchReport() {
      if (!this.selectedUserId) {
        this.$toast.warning('ກະລຸນາເລືອກພະນັກງານ (Please select a staff member)')
        return
      }

      this.loading = true
      try {
        // We use a generic transaction statement API but targeted by userId
        // Note: We might need to adjust the endpoint if the backend has a specific one
        // Base on patterns, we'll try to find transactions created by this user
        let url = `/api/transactions/user-activity/${this.selectedUserId}`

        const params = new URLSearchParams()
        if (this.dateRange && this.dateRange.length === 2) {
          params.append('startDate', this.dateRange[0])
          params.append('endDate', this.dateRange[1])
        }

        // Fallback to statement with specific user filter if specialized endpoint doesn't exist
        // or a generic /api/transactions/find
        const res = await this.$axios.get(`${url}?${params.toString()}`).catch(async (err) => {
          // Fallback attempt: Generic transactions find with userId
          console.log("Specialized endpoint failed, trying generic find...");
          return await this.$axios.get('/api/transactions/find', {
            params: {
              userId: this.selectedUserId,
              startDate: this.dateRange[0],
              endDate: this.dateRange[1],
              type: 'WALLET' // Filter for wallet topups/withdraws
            }
          });
        });

        if (res.data && res.data.success) {
          this.reportData = res.data.data || res.data.transactions || []
          if (this.reportData.length === 0) {
            this.$toast.info('ບໍ່ພົບລາຍການເຄື່ອນໄຫວ ໃນຊ່ວງເວລານີ້')
          }
        } else if (Array.isArray(res.data)) {
          this.reportData = res.data;
        }
      } catch (err) {
        console.error('Failed to fetch report', err)
        this.$toast.error('Failed to load transaction data')
      } finally {
        this.loading = false
      }
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('en-US').format(value || 0)
    },
    formatDate(dateStr) {
      if (!dateStr) return ''
      return new Date(dateStr).toLocaleDateString()
    },
    formatTime(dateStr) {
      if (!dateStr) return ''
      return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    getTypeColor(type) {
      const colors = {
        'TOPUP': 'success',
        'WITHDRAWAL': 'error',
        'WITHDRAW': 'error',
        'PURCHASE': 'primary',
        'REFUND': 'warning'
      }
      return colors[type] || 'grey'
    },
    exportExcel() {
      if (!this.reportData.length) return;

      const data = this.reportData.map(item => ({
        'ວັນທີ': this.formatDate(item.createdAt),
        'ເວລາ': this.formatTime(item.createdAt),
        'ປະເພດ': item.transactionType,
        'ລາຍລະອຽດ': item.description,
        'ນັກຮຽນ': item.description.includes('Student:') ? item.description.split('Student:')[1].trim() : '',
        'ບັນຊີ': item.account?.accountName || '',
        'ເຕີມເງິນ': item.amountIn || 0,
        'ຖອນເງິນ': item.amountOut || 0,
      }));

      if (this.$xlsx) {
        const ws = this.$xlsx.utils.json_to_sheet(data);
        const wb = this.$xlsx.utils.book_new();
        this.$xlsx.utils.book_append_sheet(wb, ws, "Staff_Activity");
        this.$xlsx.writeFile(wb, `Staff_Activity_Report_${this.selectedUserId}.xlsx`);
        this.$toast.success("Excel exported successfully");
      }
    },
    printReport() {
      window.print();
    }
  }
}
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
}

.date-picker-wrapper {
  width: 100%;
}

::v-deep .custom-date-input {
  height: 40px !important;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.42) !important;
  padding-left: 12px;
  width: 100%;
}

.summary-card {
  height: 100%;
  transition: transform 0.2s;
}

.summary-card:hover {
  transform: translateY(-2px);
}

.border-primary {
  border: 2px solid var(--v-primary-base) !important;
}

.gap-2 {
  gap: 8px;
}

.staff-activity-table ::v-deep th {
  background-color: #f8f9fa !important;
  font-weight: 600 !important;
  color: #333 !important;
}

@media print {

  .v-btn,
  .v-card:first-child,
  .v-navigation-drawer,
  header {
    display: none !important;
  }

  .v-main {
    padding: 0 !important;
  }

  .v-container {
    padding: 0 !important;
    max-width: 100% !important;
  }
}
</style>
