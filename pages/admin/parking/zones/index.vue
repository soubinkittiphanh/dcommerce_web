<template>
  <div class="parking-zones-page">
    <!-- Header -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-4">
      <div>
        <h1 class="page-title d-flex align-center">
          <v-icon large color="primary" class="mr-2">mdi-map-marker-radius</v-icon>
          <span>ຈັດການໂຊນ ແລະ ຊ່ອງຈອດລົດ</span>
        </h1>
        <p class="page-subtitle grey--text text--darken-1 mb-0">
          Parking Zones & Slots Visual Management (ຕັ້ງຄ່າໂຊນ, ຊັ້ນ, ແລະ ຊ່ອງຈອດລົດ)
        </p>
      </div>

      <div class="action-buttons d-flex align-center">
        <v-btn color="primary" class="mr-2 font-weight-bold" @click="openAddZoneDialog">
          <v-icon left>mdi-plus-box</v-icon>
          ເພີ່ມໂຊນໃໝ່ (Add Zone)
        </v-btn>
        <v-btn color="success" class="mr-2 font-weight-bold" @click="openAddSlotDialog">
          <v-icon left>mdi-plus-circle</v-icon>
          ເພີ່ມຊ່ອງຈອດ (Add Slot)
        </v-btn>
        <v-btn icon color="primary" :loading="loading" @click="loadZonesData">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Zone Tabs & Visual Floor Grid -->
    <v-card class="elevation-2 zones-card">
      <v-tabs v-model="activeTab" background-color="grey lighten-4" color="primary" slider-color="primary">
        <v-tab v-for="zone in zones" :key="zone.id" class="font-weight-bold">
          <v-icon left small>mdi-map-marker</v-icon>
          {{ zone.name }}
          <v-chip x-small class="ml-2 font-weight-bold" color="primary" outlined>
            {{ zone.stats?.available || 0 }}/{{ zone.stats?.total || 0 }} ວ່າງ
          </v-chip>
        </v-tab>
      </v-tabs>

      <v-divider></v-divider>

      <v-tabs-items v-model="activeTab">
        <v-tab-item v-for="zone in zones" :key="zone.id" class="pa-4">
          <!-- Zone Header Info -->
          <div class="zone-details-bar d-flex justify-space-between align-center pa-3 mb-4 grey lighten-5 rounded">
            <div>
              <span class="font-weight-bold text-subtitle-1 mr-2">{{ zone.name }}</span>
              <v-chip x-small color="grey darken-1" dark class="mr-2">ຊັ້ນ: {{ zone.floor || 'Ground' }}</v-chip>
              <span class="text-caption grey--text">{{ zone.description }}</span>
            </div>

            <div class="d-flex align-center">
              <v-btn small text color="primary" @click="openEditZoneDialog(zone)">
                <v-icon left small>mdi-pencil</v-icon>
                ແກ້ໄຂໂຊນ
              </v-btn>
            </div>
          </div>

          <!-- Slots Legend -->
          <div class="legend-bar d-flex flex-wrap align-center mb-4 text-caption">
            <span class="mr-3 font-weight-bold">ສີສະຖານະ:</span>
            <div class="d-flex align-center mr-3">
              <span class="legend-dot green mr-1"></span> ວ່າງ (Available)
            </div>
            <div class="d-flex align-center mr-3">
              <span class="legend-dot red mr-1"></span> ມີລົດຈອດ (Occupied)
            </div>
            <div class="d-flex align-center mr-3">
              <span class="legend-dot blue mr-1"></span> ຈອງແລ້ວ (Reserved)
            </div>
            <div class="d-flex align-center">
              <span class="legend-dot grey mr-1"></span> ປິດປັບປຸງ (Closed)
            </div>
          </div>

          <!-- Slots Responsive Grid -->
          <v-row dense>
            <v-col
              v-for="slot in zone.slots"
              :key="slot.id"
              cols="6"
              sm="4"
              md="3"
              lg="2"
              class="pa-2"
            >
              <slot-card :slot-data="slot" @click="openSlotActionDialog(slot)" />
            </v-col>

            <v-col v-if="!zone.slots || zone.slots.length === 0" cols="12" class="text-center py-8 grey--text">
              <v-icon large color="grey lighten-1">mdi-parking</v-icon>
              <div class="mt-2">ຍັງບໍ່ມີຊ່ອງຈອດລົດໃນໂຊນນີ້ (No slots created yet)</div>
              <v-btn small color="primary" class="mt-2" @click="openAddSlotDialogForZone(zone.id)">
                + ເພີ່ມຊ່ອງຈອດທຳອິດ
              </v-btn>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    <!-- Modal: Add / Edit Zone -->
    <v-dialog v-model="zoneDialog" max-width="480" persistent>
      <v-card>
        <v-card-title class="py-3 px-4 primary white--text d-flex justify-space-between align-center">
          <span class="font-weight-bold subtitle-1">
            {{ isEditingZone ? 'ແກ້ໄຂໂຊນຈອດລົດ (Edit Zone)' : 'ເພີ່ມໂຊນຈອດລົດໃໝ່ (Add Zone)' }}
          </span>
          <v-btn icon dark small @click="zoneDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-text-field
            v-model="zoneForm.code"
            label="ລະຫັດໂຊນ (Zone Code)*"
            placeholder="ຕົວຢ່າງ: ZONE-C, FL-2"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-text-field
            v-model="zoneForm.name"
            label="ຊື່ໂຊນ (Zone Name)*"
            placeholder="ຕົວຢ່າງ: Zone C - Outdoor South"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-text-field
            v-model="zoneForm.floor"
            label="ຊັ້ນ / Floor"
            placeholder="ຕົວຢ່າງ: Ground, 2F, B2"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-textarea
            v-model="zoneForm.description"
            label="ລາຍລະອຽດເພີ່ມເຕີມ (Description)"
            outlined
            dense
            rows="2"
          ></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="px-4 py-3 justify-space-between">
          <v-btn text @click="zoneDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" :loading="savingZone" @click="saveZone">
            ບັນທຶກ (Save)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Modal: Add Slot -->
    <v-dialog v-model="slotDialog" max-width="480" persistent>
      <v-card>
        <v-card-title class="py-3 px-4 success white--text d-flex justify-space-between align-center">
          <span class="font-weight-bold subtitle-1">
            ເພີ່ມຊ່ອງຈອດລົດ (Add Parking Slot)
          </span>
          <v-btn icon dark small @click="slotDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-select
            v-model="slotForm.zoneId"
            :items="zones"
            item-text="name"
            item-value="id"
            label="ເລືອກໂຊນ (Zone)*"
            outlined
            dense
            class="mb-2"
          ></v-select>

          <v-text-field
            v-model="slotForm.slotNumber"
            label="ເລກຊ່ອງຈອດ (Slot Number)*"
            placeholder="ຕົວຢ່າງ: A-16, VIP-03, M-16"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-select
            v-model="slotForm.slotType"
            :items="slotTypes"
            label="ປະເພດຊ່ອງຈອດ (Slot Type)*"
            outlined
            dense
            item-text="label"
            item-value="value"
          ></v-select>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="px-4 py-3 justify-space-between">
          <v-btn text @click="slotDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="success" :loading="savingSlot" @click="saveSlot">
            ບັນທຶກ (Save Slot)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Modal: Slot Quick Action (Toggle Status) -->
    <v-dialog v-model="slotActionDialog" max-width="400">
      <v-card v-if="selectedSlot">
        <v-card-title class="py-3 px-4 grey lighten-4 d-flex justify-space-between align-center">
          <span class="font-weight-bold subtitle-1">
            ຊ່ອງຈອດ: {{ selectedSlot.slotNumber }}
          </span>
          <v-btn icon small @click="slotActionDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <div class="mb-3">
            <div><strong>ໂຊນ:</strong> {{ selectedSlot.zone?.name || '-' }}</div>
            <div><strong>ປະເພດ:</strong> {{ selectedSlot.slotType }}</div>
            <div><strong>ສະຖານະປັດຈຸບັນ:</strong> {{ selectedSlot.status }}</div>
            <div v-if="selectedSlot.currentTicket" class="mt-2 pa-2 red lighten-5 rounded">
              <strong>ລົດທີ່ຈອດ:</strong> {{ selectedSlot.currentTicket.plateNumber }}<br />
              <small>ເລກທີປີ້: {{ selectedSlot.currentTicket.ticketNumber }}</small>
            </div>
          </div>

          <v-divider class="my-3"></v-divider>

          <div class="font-weight-bold mb-2">ປ່ຽນສະຖານະຊ່ອງຈອດ:</div>
          <div class="d-flex flex-wrap">
            <v-btn
              small
              color="success"
              class="mr-2 mb-2"
              :disabled="selectedSlot.status === 'available' || selectedSlot.status === 'occupied'"
              @click="changeSlotStatus('available')"
            >
              ເປີດວ່າງ (Available)
            </v-btn>
            <v-btn
              small
              color="grey darken-1"
              dark
              class="mr-2 mb-2"
              :disabled="selectedSlot.status === 'occupied'"
              @click="changeSlotStatus('out_of_service')"
            >
              ປິດປັບປຸງ (Closed)
            </v-btn>
            <v-btn
              small
              color="blue"
              dark
              class="mb-2"
              :disabled="selectedSlot.status === 'occupied'"
              @click="changeSlotStatus('reserved')"
            >
              ລັອກຈອງ (Reserved)
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SlotCard from '@/components/parking/SlotCard.vue';
import { createParkingApiService } from '~/services/parkingApiService';

export default {
  name: 'ParkingZonesPage',
  components: {
    SlotCard
  },
  layout: 'admin',
  middleware: 'auths',
  data() {
    return {
      activeTab: 0,
      // Zone Dialog
      zoneDialog: false,
      isEditingZone: false,
      savingZone: false,
      zoneForm: {
        id: null,
        code: '',
        name: '',
        floor: 'Ground',
        description: ''
      },
      // Slot Dialog
      slotDialog: false,
      savingSlot: false,
      slotForm: {
        zoneId: null,
        slotNumber: '',
        slotType: 'car'
      },
      // Slot Action Dialog
      slotActionDialog: false,
      selectedSlot: null,
      slotTypes: [
        { label: 'ລົດໃຫຍ່ (Car)', value: 'car' },
        { label: 'ລົດຈັກ (Motorbike)', value: 'motorbike' },
        { label: 'ລົດ VIP', value: 'vip' },
        { label: 'ລົດຄົນພິການ (Disabled)', value: 'disabled' },
        { label: 'ລົດບັນທຸກ (Truck)', value: 'truck' }
      ]
    };
  },
  computed: {
    ...mapState('parking', {
      zones: state => state.zones || [],
      loading: state => state.loading
    })
  },
  mounted() {
    this.loadZonesData();
  },
  methods: {
    ...mapActions('parking', ['fetchZones']),

    async loadZonesData() {
      await this.fetchZones();
    },

    openAddZoneDialog() {
      this.isEditingZone = false;
      this.zoneForm = {
        id: null,
        code: '',
        name: '',
        floor: 'Ground',
        description: ''
      };
      this.zoneDialog = true;
    },

    openEditZoneDialog(zone) {
      this.isEditingZone = true;
      this.zoneForm = {
        id: zone.id,
        code: zone.code,
        name: zone.name,
        floor: zone.floor,
        description: zone.description
      };
      this.zoneDialog = true;
    },

    async saveZone() {
      if (!this.zoneForm.code || !this.zoneForm.name) {
        this.$toast.warning('ກະລຸນາປ້ອນລະຫັດ ແລະ ຊື່ໂຊນ');
        return;
      }

      this.savingZone = true;
      const api = createParkingApiService(this.$axios);
      try {
        let res;
        if (this.isEditingZone) {
          res = await api.updateZone(this.zoneForm.id, this.zoneForm);
        } else {
          res = await api.createZone(this.zoneForm);
        }

        if (res.success) {
          this.$toast.success('ບັນທຶກໂຊນສຳເລັດ!');
          this.zoneDialog = false;
          await this.loadZonesData();
        } else {
          this.$toast.error(res.error || 'ບັນທຶກບໍ່ສຳເລັດ');
        }
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.savingZone = false;
      }
    },

    openAddSlotDialog() {
      this.slotForm = {
        zoneId: this.zones[this.activeTab]?.id || (this.zones[0]?.id || null),
        slotNumber: '',
        slotType: 'car'
      };
      this.slotDialog = true;
    },

    openAddSlotDialogForZone(zoneId) {
      this.slotForm = {
        zoneId,
        slotNumber: '',
        slotType: 'car'
      };
      this.slotDialog = true;
    },

    async saveSlot() {
      if (!this.slotForm.zoneId || !this.slotForm.slotNumber) {
        this.$toast.warning('ກະລຸນາເລືອກໂຊນ ແລະ ປ້ອນເລກຊ່ອງຈອດ');
        return;
      }

      this.savingSlot = true;
      const api = createParkingApiService(this.$axios);
      try {
        const res = await api.createSlot(this.slotForm);
        if (res.success) {
          this.$toast.success('ເພີ່ມຊ່ອງຈອດສຳເລັດ!');
          this.slotDialog = false;
          await this.loadZonesData();
        } else {
          this.$toast.error(res.error || 'ເພີ່ມຊ່ອງຈອດບໍ່ສຳເລັດ');
        }
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.savingSlot = false;
      }
    },

    openSlotActionDialog(slot) {
      this.selectedSlot = slot;
      this.slotActionDialog = true;
    },

    async changeSlotStatus(status) {
      if (!this.selectedSlot) return;
      const api = createParkingApiService(this.$axios);
      try {
        const res = await api.updateSlotStatus(this.selectedSlot.id, status);
        if (res.success) {
          this.$toast.success('ປ່ຽນສະຖານະຊ່ອງຈອດສຳເລັດ!');
          this.slotActionDialog = false;
          await this.loadZonesData();
        } else {
          this.$toast.error(res.error || 'ບໍ່ສາມາດປ່ຽນສະຖານະໄດ້');
        }
      } catch (err) {
        this.$toast.error(err.message);
      }
    }
  }
};
</script>

<style scoped>
.parking-zones-page {
  padding: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
}
.page-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
}
.zones-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
</style>
