<template>
  <div class="text-left">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-receipt</v-icon>
        <h3>ລາຍງານການຂາຍບິນ</h3>
      </v-chip>
      <v-chip class="pa-5" color="primary" label text-color="white" @click="guidelineDialog = true">
        <v-icon start>mdi mdi-lifebuoy</v-icon>
        <h3>ຄູ່ມືການນຳໃຊ້</h3>
      </v-chip>
    </div>

    <!-- Loading Dialog -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>

    <!-- Guideline Dialog -->
    <v-dialog v-model="guidelineDialog" hide-overlay max-width="700">
      <youtube-player @close-dialog="guidelineDialog = false" youtube-link="W6KiQWtiqBM">
      </youtube-player>
    </v-dialog>

    <!-- Ticket Detail Dialog -->
    <v-dialog v-model="dialogTicketDetail" max-width="800">
      <v-card>
        <v-card-title class="headline" style="background-color: #A12F8D; color: white;">
          <v-icon left color="white">mdi-receipt</v-icon>
          ລາຍລະອຽດບິນ: {{ selectedTicket.ticketNumber }}
        </v-card-title>
        
        <v-card-text class="pt-4" v-if="selectedTicket">
          <v-row>
            <v-col cols="6">
              <strong>ເລກບິນ:</strong> {{ selectedTicket.ticketNumber }}<br>
              <strong>ວັນທີ:</strong> {{ formatDateTime(selectedTicket.createdAt) }}<br>
              <strong>ສະຖານະ:</strong> {{ getStatusText(selectedTicket.status) }}
            </v-col>
            <v-col cols="6">
              <strong>ການຈ່າຍເງິນ:</strong> {{ getPaymentStatusText(selectedTicket.paymentStatus) }}<br>
              <strong>ລູກຄ້າ:</strong> {{ selectedTicket.client?.name || 'ບໍ່ລະບຸ' }}<br>
              <strong>ໂຕະ:</strong> {{ selectedTicket.table?.name || 'ບໍ່ລະບຸ' }}
            </v-col>
          </v-row>
          
          <v-divider class="my-4"></v-divider>
          
          <h4 class="mb-3">ລາຍການສິນຄ້າ:</h4>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ສິນຄ້າ</th>
                  <th class="text-center">ຈຳນວນ</th>
                  <th class="text-center">ລາຄາ/ໜ່ວຍ</th>
                  <th class="text-right">ລວມ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="line in selectedTicket.ticketLines" :key="line.id">
                  <td>{{ line.product?.pro_name || 'ບໍ່ລະບຸ' }}</td>
                  <td class="text-center">{{ line.quantity }}</td>
                  <td class="text-center">{{ numberWithCommas(line.unitPrice) }}</td>
                  <td class="text-right">{{ numberWithCommas(line.lineTotal) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          
          <v-divider class="my-4"></v-divider>
          
          <v-row>
            <v-col cols="8"></v-col>
            <v-col cols="4">
              <div class="text-right">
                <div><strong>ລວມຍ່ອຍ: {{ numberWithCommas(selectedTicket.subtotal) }}</strong></div>
                <div><strong>ພາສີ: {{ numberWithCommas(selectedTicket.tax) }}</strong></div>
                <div v-if="selectedTicket.promotionDiscount > 0">
                  <strong>ສ່ວນຫຼຸດ: {{ numberWithCommas(selectedTicket.promotionDiscount) }}</strong>
                </div>
                <div class="text-h6"><strong>ລວມທັງໝົດ: {{ numberWithCommas(selectedTicket.total) }}</strong></div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        
        <v-divider></v-divider>
        
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="printTicket">
            <v-icon left>mdi-printer</v-icon>
            ພິມບິນ
          </v-btn>
          <v-btn color="grey darken-1" text @click="dialogTicketDetail = false">
            <v-icon left>mdi-close</v-icon>
            ປິດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <!-- Date Range Selectors -->
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>

            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y
              max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details />
            <v-select
              v-model="statusFilter"
              :items="statusOptions"
              label="ສະຖານະການຈ່າຍເງິນ"
              clearable
              @change="loadData"
            ></v-select>
          </v-col>
          
          <v-col cols="6" class="text-left">
            <v-btn size="large" variant="outlined" @click="exportToExcel" class="primary" rounded>
              <span class="mdi mdi-microsoft-excel"></span>Generate Excel
            </v-btn>
            <v-btn size="large" variant="outlined" @click="printSummaryReport" class="primary" rounded>
              <span class="mdi mdi-printer"></span>ພິມລາຍງານ
            </v-btn>
          </v-col>
          
          <v-col cols="6" class="text-right">
            <v-btn size="large" variant="outlined" @click="loadData" class="primary" rounded>
              <span class="mdi mdi-cloud-download"></span>
              ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>
      
      <v-divider></v-divider>
      
      <!-- Summary Cards -->
      <v-card-text>
        <v-layout row wrap>
          <v-row>
            <v-col cols="4" lg="4">
              <v-card color="primary" dark>
                <v-card-text>
                  <div class="text-h4">{{ ticketsSummary.totalTickets }}</div>
                  <div>ຈຳນວນບິນທັງໝົດ</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4" lg="4">
              <v-card color="success" dark>
                <v-card-text>
                  <div class="text-h4">{{ ticketsSummary.paidTickets }}</div>
                  <div>ບິນທີ່ຈ່າຍແລ້ວ</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4" lg="4">
              <v-card color="info" dark>
                <v-card-text>
                  <div class="text-h4">{{ numberWithCommas(ticketsSummary.totalRevenue) }}</div>
                  <div>ລາຍຮັບລວມ</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-layout>
      </v-card-text>

      <!-- Data Table -->
      <v-data-table 
        v-if="filteredTickets" 
        :headers="headers" 
        :search="search" 
        :items="filteredTickets"
        :items-per-page="25"
        class="elevation-1"
      >
        <template v-slot:[`item.createdAt`]="{ item }">
          {{ formatDateTime(item.createdAt) }}
        </template>
        
        <template v-slot:[`item.status`]="{ item }">
          <v-chip :color="getStatusColor(item.status)" small dark>
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>
        
        <template v-slot:[`item.paymentStatus`]="{ item }">
          <v-chip :color="getPaymentStatusColor(item.paymentStatus)" small dark>
            {{ getPaymentStatusText(item.paymentStatus) }}
          </v-chip>
        </template>
        
        <template v-slot:[`item.total`]="{ item }">
          {{ numberWithCommas(item.total) }}
        </template>
        
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn icon small @click="viewTicketDetail(item)">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn icon small @click="printSingleTicket(item)">
            <v-icon>mdi-printer</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Hidden print area -->
    <div id="printArea" style="display: none;">
      <div id="ticketPrint"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { swalSuccess, swalError2, getFirstDayOfMonth, getFormatNum } from '~/common/index'

export default {
  middleware: 'auths',
  data() {
    return {
      guidelineDialog: false,
      dialogTicketDetail: false,
      selectedTicket: {},
      isloading: false,
      search: '',
      ticketsList: [],
      statusFilter: 'paid', // Default to show only paid tickets
      
      statusOptions: [
        { text: 'ທັງໝົດ', value: null },
        { text: 'ຈ່າຍແລ້ວ', value: 'paid' },
        { text: 'ຍັງບໍ່ຈ່າຍ', value: 'pending' },
        { text: 'ຍົກເລີກ', value: 'cancel' },
        { text: 'ຄືນເງິນ', value: 'refunded' }
      ],
      
      headers: [
        {
          text: 'ເລກບິນ',
          align: 'center',
          value: 'ticketNumber',
          sortable: true,
        },
        {
          text: 'ວັນທີ-ເວລາ',
          align: 'center',
          value: 'createdAt',
          sortable: true,
        },
        {
          text: 'ສະຖານະ',
          align: 'center',
          value: 'status',
          sortable: true,
        },
        {
          text: 'ການຈ່າຍເງິນ',
          align: 'center',
          value: 'paymentStatus',
          sortable: true,
        },
        {
          text: 'ລູກຄ້າ',
          align: 'center',
          value: 'client.name',
          sortable: true,
        },
        {
          text: 'ໂຕະ',
          align: 'center',
          value: 'table.name',
          sortable: true,
        },
        {
          text: 'ລາຄາລວມ',
          align: 'center',
          value: 'total',
          sortable: true,
        },
        {
          text: 'ການດຳເນີນການ',
          align: 'center',
          value: 'actions',
          sortable: false,
        },
      ],
      
      date: getFirstDayOfMonth(),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(getFirstDayOfMonth()),
      dateFormatted2: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      menu2: false,
    }
  },

  async created() {
    await this.loadData()
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      this.loadData()
    },
    date2(val) {
      this.dateFormatted2 = this.formatDate(this.date2)
      this.loadData()
    },
  },

  computed: {
    user() {
      return this.$auth.user || ''
    },
    
    filteredTickets() {
      if (!this.statusFilter) {
        return this.ticketsList
      }
      return this.ticketsList.filter(ticket => 
        ticket.paymentStatus === this.statusFilter
      )
    },
    
    ticketsSummary() {
      const summary = {
        totalTickets: this.ticketsList.length,
        paidTickets: this.ticketsList.filter(t => t.paymentStatus === 'paid').length,
        totalRevenue: this.ticketsList
          .filter(t => t.paymentStatus === 'paid')
          .reduce((sum, ticket) => sum + parseFloat(ticket.total || 0), 0)
      }
      return summary
    },
  },

  methods: {
    async loadData() {
      this.isloading = true
      
      try {
        const params = {
          startDate: this.date,
          endDate: this.date2,
          include: 'client,table,ticketLines'
        }
        
        const response = await this.$axios.get('api/ticket/find', { params })
        this.ticketsList = response.data.data || response.data || []
        
      } catch (error) {
        swalError2(this.$swal, 'Error', 'Could not load ticket data: ' + error.message)
        this.ticketsList = []
      }
      
      this.isloading = false
    },

    viewTicketDetail(ticket) {
      this.selectedTicket = ticket
      this.dialogTicketDetail = true
    },

    printSingleTicket(ticket) {
      this.selectedTicket = ticket
      this.printTicket()
    },

    printTicket() {
      const ticket = this.selectedTicket
      
      let printContent = `
        <div style="font-family: 'Noto Sans Lao', Arial, sans-serif; width: 300px; margin: 0 auto;">
          <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 15px;">
            <h2 style="margin: 0;">ບິນຂາຍ</h2>
            <p style="margin: 5px 0;">ເລກບິນ: ${ticket.ticketNumber}</p>
            <p style="margin: 5px 0;">ວັນທີ: ${this.formatDateTime(ticket.createdAt)}</p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 3px 0;"><strong>ລູກຄ້າ:</strong> ${ticket.client?.name || 'ບໍ່ລະບຸ'}</p>
            <p style="margin: 3px 0;"><strong>ໂຕະ:</strong> ${ticket.table?.name || 'ບໍ່ລະບຸ'}</p>
          </div>
          
          <div style="border-top: 1px solid #000; border-bottom: 1px solid #000; padding: 10px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 1px solid #000;">
                  <th style="text-align: left; padding: 5px;">ສິນຄ້າ</th>
                  <th style="text-align: center; padding: 5px;">ຈ/ນ</th>
                  <th style="text-align: right; padding: 5px;">ລວມ</th>
                </tr>
              </thead>
              <tbody>
      `
      
      if (ticket.ticketLines && ticket.ticketLines.length > 0) {
        ticket.ticketLines.forEach(line => {
          printContent += `
            <tr>
              <td style="padding: 3px; text-align: left;">${line.product?.pro_name || 'ບໍ່ລະບຸ'}</td>
              <td style="padding: 3px; text-align: center;">${line.quantity}</td>
              <td style="padding: 3px; text-align: right;">${this.numberWithCommas(line.lineTotal)}</td>
            </tr>
          `
        })
      }
      
      printContent += `
              </tbody>
            </table>
          </div>
          
          <div style="margin-top: 15px; text-align: right;">
            <p style="margin: 3px 0;"><strong>ລວມຍ່ອຍ: ${this.numberWithCommas(ticket.subtotal)}</strong></p>
            <p style="margin: 3px 0;"><strong>ພາສີ: ${this.numberWithCommas(ticket.tax)}</strong></p>
      `
      
      if (ticket.promotionDiscount > 0) {
        printContent += `<p style="margin: 3px 0;"><strong>ສ່ວນຫຼຸດ: ${this.numberWithCommas(ticket.promotionDiscount)}</strong></p>`
      }
      
      printContent += `
            <div style="border-top: 2px solid #000; margin-top: 10px; padding-top: 10px;">
              <p style="margin: 0; font-size: 18px;"><strong>ລວມທັງໝົດ: ${this.numberWithCommas(ticket.total)}</strong></p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; border-top: 1px solid #000; padding-top: 10px;">
            <p style="margin: 0; font-size: 12px;">ຂອບໃຈທີ່ໃຊ້ບໍລິການ!</p>
          </div>
        </div>
      `
      
      const printWindow = window.open('', '_blank')
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Ticket - ${ticket.ticketNumber}</title>
            <style>
              @media print {
                body { margin: 0; }
                @page { margin: 10mm; }
              }
            </style>
          </head>
          <body onload="window.print(); window.close();">
            ${printContent}
          </body>
        </html>
      `)
      printWindow.document.close()
    },

    printSummaryReport() {
      const tickets = this.filteredTickets
      
      let reportContent = `
        <div style="font-family: 'Noto Sans Lao', Arial, sans-serif; margin: 20px;">
          <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="margin: 0;">ລາຍງານການຂາຍບິນ</h1>
            <p style="margin: 10px 0;">ຈາກວັນທີ: ${this.dateFormatted} ຫາວັນທີ: ${this.dateFormatted2}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3>ສະຫຼຸບ:</h3>
            <p><strong>ຈຳນວນບິນທັງໝົດ:</strong> ${this.ticketsSummary.totalTickets}</p>
            <p><strong>ບິນທີ່ຈ່າຍແລ້ວ:</strong> ${this.ticketsSummary.paidTickets}</p>
            <p><strong>ລາຍຮັບລວມ:</strong> ${this.numberWithCommas(this.ticketsSummary.totalRevenue)}</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
            <thead>
              <tr style="background-color: #f0f0f0;">
                <th style="border: 1px solid #000; padding: 8px; text-align: left;">ເລກບິນ</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: center;">ວັນທີ</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: center;">ສະຖານະ</th>
                <th style="border: 1px solid #000; padding: 8px; text-align: right;">ລາຄາລວມ</th>
              </tr>
            </thead>
            <tbody>
      `
      
      tickets.forEach(ticket => {
        reportContent += `
          <tr>
            <td style="border: 1px solid #000; padding: 5px;">${ticket.ticketNumber}</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center;">${this.formatDateTime(ticket.createdAt)}</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: center;">${this.getPaymentStatusText(ticket.paymentStatus)}</td>
            <td style="border: 1px solid #000; padding: 5px; text-align: right;">${this.numberWithCommas(ticket.total)}</td>
          </tr>
        `
      })
      
      reportContent += `
            </tbody>
          </table>
          
          <div style="margin-top: 20px; text-align: right;">
            <p><strong>ລວມທັງໝົດ: ${this.numberWithCommas(this.ticketsSummary.totalRevenue)}</strong></p>
          </div>
        </div>
      `
      
      const printWindow = window.open('', '_blank')
      printWindow.document.write(`
        <html>
          <head>
            <title>Sales Report</title>
            <style>
              @media print {
                body { margin: 0; }
                @page { margin: 15mm; }
              }
            </style>
          </head>
          <body onload="window.print(); window.close();">
            ${reportContent}
          </body>
        </html>
      `)
      printWindow.document.close()
    },

    exportToExcel() {
      const tickets = this.filteredTickets
      const exportData = tickets.map(ticket => ({
        'ເລກບິນ': ticket.ticketNumber,
        'ວັນທີ': this.formatDateTime(ticket.createdAt),
        'ສະຖານະ': this.getStatusText(ticket.status),
        'ການຈ່າຍເງິນ': this.getPaymentStatusText(ticket.paymentStatus),
        'ລູກຄ້າ': ticket.client?.name || 'ບໍ່ລະບຸ',
        'ໂຕະ': ticket.table?.name || 'ບໍ່ລະບຸ',
        'ລາຄາລວມ': ticket.total
      }))

      const worksheet = this.$xlsx.utils.json_to_sheet(exportData)
      const workbook = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(workbook, worksheet, 'Ticket Report')
      this.$xlsx.writeFile(workbook, `ticket_report_${this.date}_${this.date2}.xlsx`)
    },

    // Helper methods
    formatDateTime(dateStr) {
      if (!dateStr) return '-'
      const date = new Date(dateStr)
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    },

    getStatusText(status) {
      const statusMap = {
        'pending': 'ລໍຖ້າ',
        'preparing': 'ກຳລັງກະກຽມ', 
        'ready': 'ພ້ອມແລ້ວ',
        'served': 'ສົ່ງແລ້ວ',
        'paid': 'ຈ່າຍແລ້ວ',
        'cancel': 'ຍົກເລີກ',
        'void': 'ບັດເຖິງ'
      }
      return statusMap[status] || status
    },

    getPaymentStatusText(status) {
      const statusMap = {
        'pending': 'ຍັງບໍ່ຈ່າຍ',
        'paid': 'ຈ່າຍແລ້ວ',
        'refunded': 'ຄືນເງິນ',
        'cancel': 'ຍົກເລີກ'
      }
      return statusMap[status] || status
    },

    getStatusColor(status) {
      const colorMap = {
        'pending': 'orange',
        'preparing': 'blue',
        'ready': 'purple',
        'served': 'teal',
        'paid': 'green',
        'cancel': 'red',
        'void': 'grey'
      }
      return colorMap[status] || 'grey'
    },

    getPaymentStatusColor(status) {
      const colorMap = {
        'pending': 'orange',
        'paid': 'green',
        'refunded': 'blue',
        'cancel': 'red'
      }
      return colorMap[status] || 'grey'
    },

    numberWithCommas(value) {
      return getFormatNum(value)
    },

    formatDate(date) {
      if (!date) return null
      const formattedDate = this.formatDateToISO(date)
      const [year, month, day] = formattedDate.split('-')
      return `${month}/${day}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatDateToISO(date) {
      if (!(date instanceof Date)) date = new Date(date)
      const year = date.getFullYear()
      const month = `${date.getMonth() + 1}`.padStart(2, '0')
      const day = `${date.getDate()}`.padStart(2, '0')
      return `${year}-${month}-${day}`
    },
  },
}
</script>

<style scoped>
.text-h5,
.grey {
  font-family: 'Noto Sans Lao';
}

table {
  border: 1px solid black;
}

@media print {
  .no-print {
    display: none !important;
  }
}
</style>