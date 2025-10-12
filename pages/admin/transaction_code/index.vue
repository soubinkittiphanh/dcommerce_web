<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <!-- Page Header -->
        <v-card class="mb-4">
          <v-card-title class="d-flex justify-space-between align-center">
            <div>
              <v-icon large color="primary" class="mr-2">mdi-code-tags</v-icon>
              <span class="text-h4">ລະບົບລະຫັດການເງິນ</span>
            </div>
            <div>
              <v-btn color="primary" @click="openCreateDialog" class="mr-2">
                <v-icon left>mdi-plus</v-icon>
                ເພີ່ມລະຫັດ
              </v-btn>
              <v-btn color="white" @click="exportData">
                <v-icon left>mdi-download</v-icon>
                Export
              </v-btn>
            </div>
          </v-card-title>
        </v-card>

        <!-- Filter Section -->
        <v-card class="mb-4">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="filters.search"
                  label="ຄົ້ນຫາ"
                  placeholder="ລະຫັດ, ລາຍລະອຽດ..."
                  prepend-icon="mdi-magnify"
                  clearable
                  outlined
                  dense
                  hide-details
                  @input="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-select
                  v-model="filters.type"
                  :items="typeOptions"
                  label="ປະເພດ"
                  prepend-icon="mdi-swap-vertical"
                  clearable
                  outlined
                  dense
                  hide-details
                  @change="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.status"
                  :items="statusOptions"
                  label="ສະຖານະ"
                  prepend-icon="mdi-check-circle"
                  clearable
                  outlined
                  dense
                  hide-details
                  @change="applyFilters"
                />
              </v-col>
              <v-col cols="12" md="3" class="d-flex align-center">
                <v-btn color="primary" @click="applyFilters" class="mr-2">
                  <v-icon left>mdi-magnify</v-icon>
                  ຄົ້ນຫາ
                </v-btn>
                <v-btn outlined @click="resetFilters">
                  <v-icon left>mdi-refresh</v-icon>
                  Reset
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Data Table -->
        <v-card>
          <v-card-title>
            <v-icon class="mr-2">mdi-table</v-icon>
            ລາຍຊື່ລະຫັດການເງິນ
            <v-spacer />
            <v-chip color="primary" outlined>
              {{ filteredTransactions.length }} ລາຍການ
            </v-chip>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="filteredTransactions"
            :items-per-page="25"
            :loading="loading"
            :footer-props="{
              'items-per-page-options': [10, 25, 50, 100],
            }"
            class="elevation-1"
            loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
            no-data-text="ບໍ່ມີຂໍ້ມູນ"
          >
            <!-- Code -->
            <template v-slot:item.code="{ item }">
              <div class="font-weight-bold d-flex align-center">
                <v-icon small class="mr-2" color="primary">mdi-barcode</v-icon>
                {{ item.code }}
              </div>
            </template>

            <!-- Type -->
            <template v-slot:item.type="{ item }">
              <v-chip
                small
                :color="item.type === 'INCOME' ? 'success' : 'error'"
                dark
              >
                <v-icon small left>
                  {{ item.type === 'INCOME' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
                </v-icon>
                {{ item.type === 'INCOME' ? 'ລາຍຮັບ' : 'ລາຍຈ່າຍ' }}
              </v-chip>
            </template>

            <!-- Description -->
            <template v-slot:item.description="{ item }">
              {{ item.description || '-' }}
            </template>

            <!-- Status -->
            <template v-slot:item.isActive="{ item }">
              <v-chip small :color="item.isActive ? 'success' : 'grey'" dark>
                {{ item.isActive ? 'ໃຊ້ງານ' : 'ປິດການໃຊ້ງານ' }}
              </v-chip>
            </template>

            <!-- Actions -->
            <template v-slot:item.actions="{ item }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    small
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    @click="editTransaction(item)"
                  >
                    <v-icon small>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>ແກ້ໄຂ</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    small
                    :color="item.isActive ? 'grey' : 'success'"
                    v-bind="attrs"
                    v-on="on"
                    @click="toggleStatus(item)"
                  >
                    <v-icon small>
                      {{ item.isActive ? 'mdi-close-circle' : 'mdi-check-circle' }}
                    </v-icon>
                  </v-btn>
                </template>
                <span>{{ item.isActive ? 'ປິດການໃຊ້ງານ' : 'ເປີດການໃຊ້ງານ' }}</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Transaction Dialog -->
    <v-dialog v-model="showDialog" max-width="1200px" persistent>
      <TransactionCodeDialog
        :visible="showDialog"
        :transaction="selectedTransaction"
        @close="closeDialog"
        @save="onTransactionSave"
      />
    </v-dialog>

    <!-- Loading Overlay -->
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  name: 'TransactionCodePage',
  
  components: {
    TransactionCodeDialog: () => import('@/components/accounting/transaction/index.vue')
  },

  data() {
    return {
      loading: false,
      showDialog: false,
      selectedTransaction: null,
      transactions: [],
      
      filters: {
        search: '',
        type: null,
        status: null
      },

      typeOptions: [
        { text: 'ລາຍຮັບ', value: 'INCOME' },
        { text: 'ລາຍຈ່າຍ', value: 'EXPENSE' }
      ],

      statusOptions: [
        { text: 'ໃຊ້ງານ', value: true },
        { text: 'ປິດການໃຊ້ງານ', value: false }
      ],

      headers: [
        { text: 'ລະຫັດ', value: 'code', width: '120px' },
        { text: 'ປະເພດ', value: 'type', width: '130px' },
        { text: 'ລາຍລະອຽດ', value: 'description' },
        { text: 'ສະຖານະ', value: 'isActive', width: '120px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '100px', align: 'center' }
      ]
    }
  },

  computed: {
    filteredTransactions() {
      let result = [...this.transactions]

      if (this.filters.search) {
        const search = this.filters.search.toLowerCase()
        result = result.filter(t => 
          t.code.toLowerCase().includes(search) ||
          (t.description && t.description.toLowerCase().includes(search))
        )
      }

      if (this.filters.type) {
        result = result.filter(t => t.type === this.filters.type)
      }

      if (this.filters.status !== null) {
        result = result.filter(t => t.isActive === this.filters.status)
      }

      return result
    }
  },

  mounted() {
    this.fetchTransactions()
  },

  methods: {
    async fetchTransactions() {
      this.loading = true
      try {
        // API returns all transactions, filter handled by backend with includeInactive query
        const response = await this.$axios.get('/api/transaction-codes', {
          params: { includeInactive: true }
        })
        this.transactions = response.data
      } catch (error) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫຼດຂໍ້ມູນ')
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    openCreateDialog() {
      this.selectedTransaction = null
      this.showDialog = true
    },

    editTransaction(transaction) {
      this.selectedTransaction = { ...transaction }
      this.showDialog = true
    },

    closeDialog() {
      this.showDialog = false
      this.selectedTransaction = null
    },

    async onTransactionSave(transaction) {
      this.loading = true
      try {
        if (transaction.id) {
          // Update - only send allowed fields
          await this.$axios.put(`/api/transaction-codes/${transaction.id}`, {
            type: transaction.type,
            description: transaction.description,
            isActive: transaction.isActive
          })
          this.$toast.success('ອັບເດດຂໍ້ມູນສຳເລັດ')
        } else {
          // Create - send code, type, description (isActive handled by model default)
          await this.$axios.post('/api/transaction-codes', {
            code: transaction.code,
            type: transaction.type,
            description: transaction.description
          })
          this.$toast.success('ເພີ່ມຂໍ້ມູນສຳເລັດ')
        }
        this.closeDialog()
        await this.fetchTransactions()
      } catch (error) {
        if (error.response?.data?.message) {
          this.$toast.error(error.response.data.message)
        } else {
          this.$toast.error('ເກີດຂໍ້ຜິດພາດ')
        }
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async toggleStatus(transaction) {
      this.loading = true
      try {
        // Backend update only accepts type, description, isActive
        await this.$axios.put(`/api/transaction-codes/${transaction.id}`, {
          type: transaction.type,
          description: transaction.description,
          isActive: !transaction.isActive
        })
        this.$toast.success('ປ່ຽນສະຖານະສຳເລັດ')
        await this.fetchTransactions()
      } catch (error) {
        this.$toast.error('ເກີດຂໍ້ຜິດພາດ')
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    applyFilters() {
      // Triggers computed property refresh
    },

    resetFilters() {
      this.filters = {
        search: '',
        type: null,
        status: null
      }
    },

    exportData() {
      // Implement export functionality
      const csvContent = this.generateCSV()
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `transaction-codes-${new Date().getTime()}.csv`
      link.click()
    },

    generateCSV() {
      const headers = ['ລະຫັດ', 'ປະເພດ', 'ລາຍລະອຽດ', 'ສະຖານະ']
      const rows = this.filteredTransactions.map(t => [
        t.code,
        t.type === 'INCOME' ? 'ລາຍຮັບ' : 'ລາຍຈ່າຍ',
        t.description || '',
        t.isActive ? 'ໃຊ້ງານ' : 'ປິດການໃຊ້ງານ'
      ])
      return [headers, ...rows].map(row => row.join(',')).join('\n')
    }
  }
}
</script>

<style scoped>
.v-data-table >>> tbody tr:hover {
  background-color: #f5f5f5;
}
</style>