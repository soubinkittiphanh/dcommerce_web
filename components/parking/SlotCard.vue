<template>
  <v-card
    :class="['slot-card', `status-${slotData.status}`]"
    elevation="2"
    @click="$emit('click', slotData)"
  >
    <div class="slot-header d-flex justify-space-between align-center px-3 pt-2">
      <span class="slot-number font-weight-bold">{{ slotData.slotNumber }}</span>
      <v-icon small :color="getTypeColor(slotData.slotType)">
        {{ getTypeIcon(slotData.slotType) }}
      </v-icon>
    </div>

    <v-card-text class="py-2 px-3 text-center">
      <div v-if="slotData.status === 'occupied'" class="occupied-info">
        <div class="plate-text font-weight-black">
          {{ currentPlate }}
        </div>
        <div class="time-elapsed text-caption grey--text text--darken-1">
          {{ elapsedTime }}
        </div>
      </div>
      <div v-else class="status-badge-container my-1">
        <v-chip x-small :color="getStatusColor(slotData.status)" text-color="white" class="font-weight-medium">
          {{ getStatusLabel(slotData.status) }}
        </v-chip>
      </div>
    </v-card-text>

    <div class="slot-footer px-3 pb-2 d-flex justify-space-between align-center text-caption grey--text">
      <span>{{ slotData.zone?.name || slotData.zone?.code || '' }}</span>
      <span class="text-uppercase font-weight-medium">{{ slotData.slotType }}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'SlotCard',
  props: {
    slotData: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentPlate() {
      return this.slotData.currentTicket?.plateNumber || 
             this.slotData.currentTicket?.vehicle?.plateNumber || 
             'ມີລົດຈອດ';
    },
    elapsedTime() {
      const entryTime = this.slotData.currentTicket?.entryTime;
      if (!entryTime) return '';
      const diffMs = new Date() - new Date(entryTime);
      const mins = Math.floor(diffMs / (1000 * 60));
      const hrs = Math.floor(mins / 60);
      const remainMins = mins % 60;
      if (hrs > 0) {
        return `${hrs} ຊມ ${remainMins} ນາທີ`;
      }
      return `${mins} ນາທີ`;
    }
  },
  methods: {
    getStatusColor(status) {
      switch (status) {
        case 'available': return '#10b981'; // green
        case 'occupied': return '#ef4444'; // red
        case 'reserved': return '#3b82f6'; // blue
        case 'out_of_service': return '#6b7280'; // grey
        default: return '#9ca3af';
      }
    },
    getStatusLabel(status) {
      switch (status) {
        case 'available': return 'ວ່າງ (Available)';
        case 'occupied': return 'ມີລົດຈອດ (Occupied)';
        case 'reserved': return 'ຈອງແລ້ວ (Reserved)';
        case 'out_of_service': return 'ປິດປັບປຸງ (Closed)';
        default: return status;
      }
    },
    getTypeIcon(type) {
      switch (type) {
        case 'motorbike': return 'mdi-motorbike';
        case 'vip': return 'mdi-star-circle';
        case 'disabled': return 'mdi-wheelchair-accessibility';
        case 'truck': return 'mdi-truck';
        default: return 'mdi-car-side';
      }
    },
    getTypeColor(type) {
      switch (type) {
        case 'vip': return '#f59e0b';
        case 'disabled': return '#0284c7';
        default: return '#64748b';
      }
    }
  }
};
</script>

<style scoped>
.slot-card {
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1.5px solid #e2e8f0;
}
.slot-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}
.status-available {
  border-top: 4px solid #10b981;
  background-color: #f0fdf4;
}
.status-occupied {
  border-top: 4px solid #ef4444;
  background-color: #fef2f2;
}
.status-reserved {
  border-top: 4px solid #3b82f6;
  background-color: #eff6ff;
}
.status-out_of_service {
  border-top: 4px solid #6b7280;
  background-color: #f9fafb;
  opacity: 0.75;
}
.slot-number {
  font-size: 15px;
  color: #1e293b;
}
.plate-text {
  font-size: 13px;
  color: #b91c1c;
  background: #fee2e2;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
}
</style>
