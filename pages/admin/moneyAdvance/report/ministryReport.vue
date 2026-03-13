<template>
  <div class="ministry-report">
    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <v-card>
      <!-- Simple Header -->
      <v-card-title class="primary white--text">
        <v-icon left>mdi-file-table</v-icon>
        ລາຍງານການຈ່າຍເງິນຕາມກະຊວງ
        <v-spacer></v-spacer>
        <v-btn icon color="white" @click="loadReport">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-card-title>

      <!-- Simple Filters -->
      <v-card-text class="pb-2">
        <v-row>
          <v-col cols="12" md="3">
            <v-menu
              v-model="startDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.startDate"
                  label="ຈາກວັນທີ"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  outlined
                  dense
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.startDate"
                @input="startDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="3">
            <v-menu
              v-model="endDateMenu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filters.endDate"
                  label="ຫາວັນທີ"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  outlined
                  dense
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filters.endDate"
                @input="endDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.ministryId"
              :items="ministryOptions"
              item-text="name"
              item-value="id"
              label="ກະຊວງ"
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-office-building"
            ></v-select>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              v-model="filters.status"
              :items="statusOptions"
              label="ສະຖານະ"
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-check-circle"
            ></v-select>
          </v-col>
        </v-row>

        <!-- Action Buttons -->
        <v-row>
          <v-col cols="12" class="py-2">
            <v-btn color="primary" @click="loadReport" :loading="isLoading" class="mr-2">
              <v-icon left>mdi-magnify</v-icon>
              ຄົ້ນຫາ
            </v-btn>
            <v-btn color="success" outlined @click="exportReport" :disabled="!reportData.length" class="mr-2">
              <v-icon left>mdi-file-excel</v-icon>
              ສົ່ງອອກ Excel
            </v-btn>
            <v-btn color="info" outlined @click="printReport" :disabled="!reportData.length">
              <v-icon left>mdi-printer</v-icon>
              ພິມ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Simple Summary Row -->
      <v-card-text class="pt-0" v-if="reportData.length">
        <v-alert color="info" outlined>
          <v-row align="center" no-gutters>
            <v-col>
              <strong>ສະຫຼຸບ:</strong> 
              {{ reportData.length }} ລາຍການ | 
              ລວມທັງໝົດ: {{ formatCurrency(totalAmount) }}
            </v-col>
            <v-col cols="auto">
              ຈ່າຍແລ້ວ: {{ settledCount }} | 
              ລໍຖ້າ: {{ pendingCount }} | 
              ອະນຸມັດແລ້ວ: {{ approvedCount }}
            </v-col>
          </v-row>
        </v-alert>
      </v-card-text>

      <!-- Simple Data Table -->
      <v-card-text class="pt-0">
        <v-data-table
          :headers="headers"
          :items="reportData"
          :items-per-page="25"
          :footer-props="{
            itemsPerPageOptions: [10, 25, 50, 100, -1]
          }"
          class="elevation-1"
        >
          <template v-slot:[`item.amount`]="{ item }">
            <span class="font-weight-bold text-right">{{ formatCurrency(item.amount) }}</span>
          </template>

          <template v-slot:[`item.status`]="{ item }">
            <v-chip
              x-small
              :color="getStatusColor(item.status)"
              dark
            >
              {{ getStatusText(item.status) }}
            </v-chip>
          </template>

          <template v-slot:[`item.method`]="{ item }">
            <span class="text-body-2">{{ getMethodText(item.method) }}</span>
          </template>

          <template v-slot:[`item.bookingDate`]="{ item }">
            <span class="text-body-2">{{ formatDate(item.bookingDate) }}</span>
          </template>

          <template v-slot:[`item.dueDate`]="{ item }">
            <span v-if="item.dueDate" class="text-body-2">{{ formatDate(item.dueDate) }}</span>
            <span v-else class="grey--text">-</span>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-btn icon small @click="viewDetails(item)">
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
          </template>

          <!-- Footer with totals -->
          <template v-slot:foot>
            <tr class="font-weight-bold">
              <td colspan="3" class="text-right">ລວມທັງໝົດ:</td>
              <td class="text-right primary--text">{{ formatCurrency(totalAmount) }}</td>
              <td colspan="5"></td>
            </tr>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- Simple Detail Dialog -->
    <v-dialog v-model="detailDialog" max-width="600">
      <v-card>
        <v-card-title class="primary white--text">
          ລາຍລະອຽດລາຍຈ່າຍ #{{ selectedTransaction?.id }}
          <v-spacer></v-spacer>
          <v-btn icon color="white" @click="detailDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        
        <v-card-text v-if="selectedTransaction" class="pa-4">
          <v-row>
            <v-col cols="6"><strong>ກະຊວງ:</strong></v-col>
            <v-col cols="6">{{ selectedTransaction.ministryName }}</v-col>
            
            <v-col cols="6"><strong>ຈຳນວນເງິນ:</strong></v-col>
            <v-col cols="6" class="primary--text font-weight-bold">{{ formatCurrency(selectedTransaction.amount) }}</v-col>
            
            <v-col cols="6"><strong>ສະກຸນເງິນ:</strong></v-col>
            <v-col cols="6">{{ selectedTransaction.currencyCode }}</v-col>
            
            <v-col cols="6"><strong>ວິທີຊຳລະ:</strong></v-col>
            <v-col cols="6">{{ getMethodText(selectedTransaction.method) }}</v-col>
            
            <v-col cols="6"><strong>ສະຖານະ:</strong></v-col>
            <v-col cols="6">
              <v-chip small :color="getStatusColor(selectedTransaction.status)" dark>
                {{ getStatusText(selectedTransaction.status) }}
              </v-chip>
            </v-col>
            
            <v-col cols="6"><strong>ວັນທີບັນທຶກ:</strong></v-col>
            <v-col cols="6">{{ formatDate(selectedTransaction.bookingDate) }}</v-col>
            
            <v-col cols="6"><strong>ກຳນົດຊຳລະ:</strong></v-col>
            <v-col cols="6">{{ selectedTransaction.dueDate ? formatDate(selectedTransaction.dueDate) : '-' }}</v-col>
            
            <v-col cols="6"><strong>ຜູ້ຮັບ:</strong></v-col>
            <v-col cols="6">{{ selectedTransaction.receiveName || '-' }}</v-col>
            
            <v-col cols="6"><strong>ຈຸດປະສົງ:</strong></v-col>
            <v-col cols="6">{{ selectedTransaction.purpose || '-' }}</v-col>
            
            <v-col cols="6"><strong>ຫມາຍເຫດ:</strong></v-col>
            <v-col cols="6">{{ selectedTransaction.note || '-' }}</v-col>
            
            <v-col cols="6"><strong>ຜູ້ບັນທຶກ:</strong></v-col>
            <v-col cols="6">{{ selectedTransaction.makerName }}</v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getFormatNum } from '~/common'

export default {
  name: 'MinistryPaymentReport',
  
  data() {
    return {
      isLoading: false,
      startDateMenu: false,
      endDateMenu: false,
      detailDialog: false,
      selectedTransaction: null,
      
      filters: {
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10),
        endDate: new Date().toISOString().substr(0, 10),
        ministryId: null,
        status: null
      },

      ministryOptions: [],

      statusOptions: [
        { text: 'ທັງໝົດ', value: null },
        { text: 'ລໍຖ້າອະນຸມັດ', value: 'pending' },
        { text: 'ອະນຸມັດແລ້ວ', value: 'approved' },
        { text: 'ຈ່າຍແລ້ວ', value: 'settled' }
      ],

      headers: [
        { text: 'ລຳດັບ', value: 'id', width: '80px' },
        { text: 'ກະຊວງ', value: 'ministryName' },
        { text: 'ສະກຸນເງິນ', value: 'currencyCode', width: '100px' },
        { text: 'ຈຳນວນເງິນ', value: 'amount', align: 'right' },
        { text: 'ວິທີຊຳລະ', value: 'method', width: '120px' },
        { text: 'ວັນທີບັນທຶກ', value: 'bookingDate', width: '120px' },
        { text: 'ກຳນົດຊຳລະ', value: 'dueDate', width: '120px' },
        { text: 'ສະຖານະ', value: 'status', width: '100px' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, width: '80px' }
      ],

      reportData: [],
      advances: []
    }
  },

  computed: {
    totalAmount() {
      return this.reportData.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0)
    },

    settledCount() {
      return this.reportData.filter(item => item.status === 'settled').length
    },

    pendingCount() {
      return this.reportData.filter(item => item.status === 'pending').length
    },

    approvedCount() {
      return this.reportData.filter(item => item.status === 'approved').length
    }
  },

  mounted() {
    this.loadReport()
  },

  methods: {
    async loadReport() {
      this.isLoading = true
      try {
        const params = {
          page: 1,
          limit: 1000,
          ...this.filters
        }

        console.log('Fetching data with params:', params)
        
        const response = await this.$axios.get('/api/money-advances', { params })
        const { data } = response
        
        if (data?.success) {
          this.advances = data.data?.advances || []
          
          // Transform data for table
          this.reportData = this.advances.map(advance => ({
            id: advance.id,
            ministryId: advance.ministryId,
            ministryName: advance.ministry?.name || 'ບໍ່ລະບຸກະຊວງ',
            ministryCode: advance.ministry?.code || '',
            currencyCode: advance.currency?.code || 'LAK',
            amount: parseFloat(advance.amount || 0),
            method: advance.method,
            bookingDate: advance.bookingDate,
            dueDate: advance.dueDate,
            status: advance.status,
            receiveName: advance.receiveName,
            purpose: advance.purpose,
            note: advance.note,
            makerName: advance.maker?.cus_name || '',
            checkerName: advance.checker?.cus_name || ''
          }))
          
          // Update ministry options
          this.updateMinistryOptions()
          
        } else {
          this.reportData = []
          this.$toast.error('ບໍ່ສາມາດດຶງຂໍ້ມູນໄດ້')
        }
        
      } catch (error) {
        console.error('Error loading report:', error)
        this.reportData = []
        this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການໂຫລດຂໍ້ມູນ')
      } finally {
        this.isLoading = false
      }
    },

    updateMinistryOptions() {
      const ministries = new Map()
      
      this.reportData.forEach(item => {
        if (item.ministryId && item.ministryName) {
          ministries.set(item.ministryId, {
            id: item.ministryId,
            name: item.ministryName,
            code: item.ministryCode
          })
        }
      })
      
      this.ministryOptions = Array.from(ministries.values()).sort((a, b) => 
        a.name.localeCompare(b.name, 'lo')
      )
    },

    async exportReport() {
      try {
        const exportData = this.reportData.map(item => ({
          'ລຳດັບ': item.id,
          'ກະຊວງ': item.ministryName,
          'ສະກຸນເງິນ': item.currencyCode,
          'ຈຳນວນເງິນ': item.amount,
          'ວິທີຊຳລະ': this.getMethodText(item.method),
          'ວັນທີບັນທຶກ': this.formatDate(item.bookingDate),
          'ກຳນົດຊຳລະ': item.dueDate ? this.formatDate(item.dueDate) : '',
          'ສະຖານະ': this.getStatusText(item.status),
          'ຜູ້ຮັບ': item.receiveName || '',
          'ຈຸດປະສົງ': item.purpose || '',
          'ຫມາຍເຫດ': item.note || '',
          'ຜູ້ບັນທຶກ': item.makerName
        }))

        const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
        const workbook = this.$xlsx.utils.book_new()
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Ministry Report')
        
        const filename = `ministry_report_${this.filters.startDate}_${this.filters.endDate}.xlsx`
        this.$xlsx.writeFile(workbook, filename)
        
        this.$toast.success('ສົ່ງອອກລາຍງານສຳເລັດ')
        
      } catch (error) {
        console.error('Export error:', error)
        this.$toast.error('ສົ່ງອອກລາຍງານບໍ່ສຳເລັດ')
      }
    },

    printReport() {
      window.print()
    },

    viewDetails(transaction) {
      this.selectedTransaction = transaction
      this.detailDialog = true
    },

    formatCurrency(amount) {
      return getFormatNum(amount)
    },

    formatDate(date) {
      if (!date) return ''
      return new Date(date).toLocaleDateString('lo-LA')
    },

    getStatusColor(status) {
      const colors = {
        'settled': 'success',
        'pending': 'warning',
        'approved': 'info'
      }
      return colors[status] || 'grey'
    },

    getStatusText(status) {
      const texts = {
        'settled': 'ຈ່າຍແລ້ວ',
        'pending': 'ລໍຖ້າອະນຸມັດ',
        'approved': 'ອະນຸມັດແລ້ວ'
      }
      return texts[status] || status
    },

    getMethodText(method) {
      const texts = {
        'cash': 'ເງິນສົດ',
        'bank_transfer': 'ໂອນທະນາຄານ',
        'deduction': 'ຕັດຍອດ',
        'cheque': 'ເຊັກ'
      }
      return texts[method] || method
    }
  }
}
</script>

<style scoped>
.ministry-report {
  max-width: 100%;
}

.v-data-table >>> .v-data-table__wrapper {
  overflow-x: auto;
}

.v-data-table >>> th {
  white-space: nowrap;
}

.text-right {
  text-align: right !important;
}
</style>