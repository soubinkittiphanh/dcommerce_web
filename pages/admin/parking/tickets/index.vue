<template>
  <div class="parking-tickets-page">
    <!-- Header -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-4">
      <div>
        <h1 class="page-title d-flex align-center">
          <v-icon large color="primary" class="mr-2">mdi-ticket-confirmation-outline</v-icon>
          <span>ປະຫວັດປີ້ ແລະ ທຸລະກຳຄ່າຈອດລົດ</span>
        </h1>
        <p class="page-subtitle grey--text text--darken-1 mb-0">
          Parking Tickets & Transaction History (ຄົ້ນຫາ, ພິມບິນຍ້ອນຫຼັງ, ແລະ ກວດສອບທຸລະກຳ)
        </p>
      </div>

      <div class="action-buttons d-flex align-center">
        <v-btn color="primary" outlined class="font-weight-bold" @click="exportToExcel">
          <v-icon left>mdi-file-excel</v-icon>
          Export Excel
        </v-btn>
        <v-btn icon color="primary" class="ml-2" :loading="loading" @click="loadTickets">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Filter Card -->
    <v-card class="elevation-1 pa-4 mb-4 filter-card">
      <v-row dense align="center">
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="filters.plateNumber"
            label="ທະບຽນລົດ (Plate No)"
            dense
            outlined
            hide-details
            clearable
            prepend-inner-icon="mdi-car"
            @keyup.enter="loadTickets"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-select
            v-model="filters.status"
            :items="statusOptions"
            label="ສະຖານະ (Status)"
            dense
            outlined
            hide-details
            @change="loadTickets"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="2">
          <v-text-field
            v-model="filters.startDate"
            label="ແຕ່ວັນທີ (From)"
            type="date"
            dense
            outlined
            hide-details
            @change="loadTickets"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="2">
          <v-text-field
            v-model="filters.endDate"
            label="ຫາວັນທີ (To)"
            type="date"
            dense
            outlined
            hide-details
            @change="loadTickets"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="2" class="d-flex justify-end">
          <v-btn color="primary" class="font-weight-bold" :loading="loading" @click="loadTickets">
            <v-icon left small>mdi-magnify</v-icon>
            ຄົ້ນຫາ (Search)
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- Tickets Data Table -->
    <v-card class="elevation-2 tickets-card">
      <v-data-table
        :headers="tableHeaders"
        :items="tickets"
        :loading="loading"
        :items-per-page="15"
        no-data-text="ບໍ່ມີຂໍ້ມູນປີ້ (No tickets found)"
      >
        <!-- Ticket Number -->
        <template #item.ticketNumber="{ item }">
          <span class="font-monospace font-weight-bold primary--text">{{ item.ticketNumber }}</span>
        </template>

        <!-- Plate Number -->
        <template #item.plateNumber="{ item }">
          <div class="d-flex align-center">
            <v-avatar size="26" color="grey lighten-4" class="mr-2">
              <v-icon small :color="item.vehicleType === 'motorbike' ? 'orange' : 'primary'">
                {{ item.vehicleType === 'motorbike' ? 'mdi-motorbike' : 'mdi-car' }}
              </v-icon>
            </v-avatar>
            <span class="font-weight-black plate-tag">{{ item.plateNumber }}</span>
          </div>
        </template>

        <!-- Slot / Zone -->
        <template #item.slot="{ item }">
          <span>{{ item.slot?.slotNumber || '-' }} ({{ item.zone?.name || '-' }})</span>
        </template>

        <!-- Entry / Exit Times -->
        <template #item.times="{ item }">
          <div class="text-caption">
            <div><strong>ເຂົ້າ:</strong> {{ formatDateTime(item.entryTime) }}</div>
            <div><strong>ອອກ:</strong> {{ formatDateTime(item.exitTime) }}</div>
          </div>
        </template>

        <!-- Duration -->
        <template #item.duration="{ item }">
          <span class="font-weight-medium">{{ formatDuration(item.durationMinutes) }}</span>
        </template>

        <!-- Fee / Paid -->
        <template #item.fee="{ item }">
          <div>
            <div class="font-weight-bold font-monospace green--text text--darken-3">
              {{ formatMoney(item.paidFee || item.calculatedFee) }} ₭
            </div>
            <div v-if="item.isMonthlyPass" class="text-caption purple--text font-weight-bold">
              (Pass ຟຣີ)
            </div>
            <div v-if="item.penaltyFee > 0" class="text-caption red--text">
              +ປັບໃໝ: {{ formatMoney(item.penaltyFee) }} ₭
            </div>
          </div>
        </template>

        <!-- Status -->
        <template #item.status="{ item }">
          <v-chip small :color="getStatusColor(item.status)" text-color="white" class="font-weight-bold">
            {{ getStatusLabel(item.status) }}
          </v-chip>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <div class="d-flex align-center justify-end">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn icon small color="primary" v-bind="attrs" v-on="on" @click="showReceipt(item)">
                  <v-icon small>mdi-printer</v-icon>
                </v-btn>
              </template>
              <span>ພິມບິນຍ້ອນຫຼັງ (Reprint)</span>
            </v-tooltip>

            <v-tooltip v-if="item.status === 'active'" bottom>
              <template #activator="{ on, attrs }">
                <v-btn icon small color="error" v-bind="attrs" v-on="on" @click="promptCancelTicket(item)">
                  <v-icon small>mdi-close-circle-outline</v-icon>
                </v-btn>
              </template>
              <span>ຍົກເລີກປີ້ (Cancel)</span>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Receipt Modal -->
    <parking-receipt-dialog
      :visible.sync="receiptDialogVisible"
      :ticket-data="selectedReceiptTicket"
      :payment-data="selectedReceiptPayment"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ParkingReceiptDialog from '@/components/parking/ParkingReceiptDialog.vue';
import { createParkingApiService } from '~/services/parkingApiService';

export default {
  name: 'ParkingTicketsPage',
  components: {
    ParkingReceiptDialog
  },
  layout: 'admin',
  middleware: 'auths',
  data() {
    return {
      filters: {
        plateNumber: '',
        status: 'ALL',
        startDate: '',
        endDate: ''
      },
      statusOptions: [
        { text: 'ທັງໝົດ (All Statuses)', value: 'ALL' },
        { text: 'ກຳລັງຈອດ (Active)', value: 'active' },
        { text: 'ສຳເລັດ / ອອກແລ້ວ (Completed)', value: 'completed' },
        { text: 'ປີ້ເສຍ (Lost)', value: 'lost' },
        { text: 'ຍົກເລີກ (Cancelled)', value: 'cancelled' }
      ],
      receiptDialogVisible: false,
      selectedReceiptTicket: {},
      selectedReceiptPayment: null,
      tableHeaders: [
        { text: 'ເລກທີປີ້ (Ticket No)', value: 'ticketNumber' },
        { text: 'ທະບຽນລົດ (Plate No)', value: 'plateNumber' },
        { text: 'ຊ່ອງຈອດ (Slot / Zone)', value: 'slot' },
        { text: 'ເວລາ (Entry & Exit)', value: 'times' },
        { text: 'ໄລຍະເວລາ (Duration)', value: 'duration' },
        { text: 'ຄ່າຈອດ (Fee)', value: 'fee' },
        { text: 'ສະຖານະ (Status)', value: 'status' },
        { text: 'ຈັດການ (Actions)', value: 'actions', sortable: false, align: 'right' }
      ]
    };
  },
  computed: {
    ...mapState('parking', {
      tickets: state => state.tickets || [],
      loading: state => state.loading
    })
  },
  mounted() {
    this.loadTickets();
  },
  methods: {
    ...mapActions('parking', ['fetchTickets']),

    async loadTickets() {
      await this.fetchTickets(this.filters);
    },

    formatMoney(val) {
      return Number(val || 0).toLocaleString();
    },

    formatDateTime(dt) {
      if (!dt) return '-';
      const d = new Date(dt);
      return d.toLocaleString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    },

    formatDuration(mins) {
      if (!mins) return '-';
      const hrs = Math.floor(mins / 60);
      const remain = mins % 60;
      if (hrs > 0) return `${hrs} ຊມ ${remain} ນາທີ`;
      return `${mins} ນາທີ`;
    },

    getStatusColor(status) {
      switch (status) {
        case 'active': return 'amber darken-2';
        case 'completed': return 'green darken-1';
        case 'lost': return 'red darken-2';
        case 'cancelled': return 'grey';
        default: return 'primary';
      }
    },

    getStatusLabel(status) {
      switch (status) {
        case 'active': return 'ກຳລັງຈອດ (Active)';
        case 'completed': return 'ສຳເລັດ (Completed)';
        case 'lost': return 'ປີ້ເສຍ (Lost)';
        case 'cancelled': return 'ຍົກເລີກ (Cancelled)';
        default: return status;
      }
    },

    showReceipt(ticket) {
      this.selectedReceiptTicket = ticket;
      this.selectedReceiptPayment = ticket.payments && ticket.payments.length ? ticket.payments[0] : null;
      this.receiptDialogVisible = true;
    },

    async promptCancelTicket(ticket) {
      const reason = prompt('ກະລຸນາລະບຸເຫດຜົນໃນການຍົກເລີກປີ້ (Cancel reason):');
      if (reason === null) return; // user cancelled prompt

      const api = createParkingApiService(this.$axios);
      try {
        const res = await api.cancelTicket(ticket.id, reason);
        if (res.success) {
          this.$toast.success('ຍົກເລີກປີ້ສຳເລັດ!');
          await this.loadTickets();
        } else {
          this.$toast.error(res.error || 'ຍົກເລີກບໍ່ສຳເລັດ');
        }
      } catch (err) {
        this.$toast.error(err.message);
      }
    },

    exportToExcel() {
      if (!this.tickets.length) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນໃນການ Export');
        return;
      }
      if (this.$xlsx) {
        const data = this.tickets.map(t => ({
          'Ticket No': t.ticketNumber,
          'Plate No': t.plateNumber,
          'Vehicle Type': t.vehicleType,
          'Zone': t.zone?.name || '',
          'Slot': t.slot?.slotNumber || '',
          'Entry Time': t.entryTime,
          'Exit Time': t.exitTime || '',
          'Duration (mins)': t.durationMinutes || 0,
          'Fee (LAK)': t.paidFee || t.calculatedFee || 0,
          'Status': t.status
        }));
        const worksheet = this.$xlsx.utils.json_to_sheet(data);
        const workbook = this.$xlsx.utils.book_new();
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, "Tickets");
        this.$xlsx.writeFile(workbook, `parking_tickets_${new Date().toISOString().slice(0, 10)}.xlsx`);
      } else {
        this.$toast.info('Export feature is being prepared');
      }
    }
  }
};
</script>

<style scoped>
.parking-tickets-page {
  padding: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
}
.page-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
}
.tickets-card, .filter-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.plate-tag {
  background: #f1f5f9;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  font-size: 13px;
}
.font-monospace {
  font-family: 'Courier New', Courier, monospace !important;
}
</style>
