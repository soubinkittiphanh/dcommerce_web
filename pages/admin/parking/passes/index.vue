<template>
  <div class="parking-passes-page">
    <!-- Header -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-4">
      <div>
        <h1 class="page-title d-flex align-center">
          <v-icon large color="primary" class="mr-2">mdi-card-account-details-outline</v-icon>
          <span>ປີ້ລາຍເດືອນ ແລະ ສະມາຊິກບ່ອນຈອດລົດ</span>
        </h1>
        <p class="page-subtitle grey--text text--darken-1 mb-0">
          Monthly Parking Passes & Subscriptions (ລົງທະບຽນ ແລະ ຕໍ່ອາຍຸປີ້ລາຍເດືອນ)
        </p>
      </div>

      <div class="action-buttons d-flex align-center">
        <v-btn color="primary" class="font-weight-bold" @click="openCreatePassDialog">
          <v-icon left>mdi-plus</v-icon>
          ສະໝັກປີ້ໃໝ່ (Register Pass)
        </v-btn>
        <v-btn icon color="primary" class="ml-2" :loading="loading" @click="loadPasses">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Passes Table Card -->
    <v-card class="elevation-2 passes-card">
      <v-card-title class="d-flex justify-space-between align-center py-3 px-4 grey lighten-5">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
          <span class="font-weight-bold" style="font-size: 16px;">
            ລາຍຊື່ປີ້ລາຍເດືອນທັງໝົດ (All Monthly Passes)
          </span>
          <v-chip small color="primary" outlined class="ml-3 font-weight-bold">
            {{ passes.length }} ລາຍການ
          </v-chip>
        </div>

        <div style="max-width: 300px;">
          <v-text-field
            v-model="searchQuery"
            dense
            outlined
            hide-details
            placeholder="ຄົ້ນຫາທະບຽນ / ຊື່ລູກຄ້າ..."
            prepend-inner-icon="mdi-magnify"
            clearable
            @input="loadPasses"
          ></v-text-field>
        </div>
      </v-card-title>

      <v-divider></v-divider>

      <v-data-table
        :headers="tableHeaders"
        :items="passes"
        :loading="loading"
        :items-per-page="10"
        no-data-text="ບໍ່ມີຂໍ້ມູນປີ້ລາຍເດືອນ (No passes found)"
      >
        <!-- Pass Number -->
        <template #item.passNumber="{ item }">
          <span class="font-monospace font-weight-bold primary--text">{{ item.passNumber }}</span>
        </template>

        <!-- Plate Number -->
        <template #item.plateNumber="{ item }">
          <div class="d-flex align-center">
            <v-avatar size="28" color="grey lighten-4" class="mr-2">
              <v-icon small color="primary">
                {{ item.vehicleType === 'motorbike' ? 'mdi-motorbike' : 'mdi-car' }}
              </v-icon>
            </v-avatar>
            <span class="font-weight-black plate-tag">{{ item.plateNumber }}</span>
          </div>
        </template>

        <!-- Customer -->
        <template #item.customer="{ item }">
          <div>
            <div class="font-weight-bold">{{ item.customerName }}</div>
            <div class="text-caption grey--text">{{ item.customerPhone || '-' }}</div>
          </div>
        </template>

        <!-- Dates Range -->
        <template #item.dates="{ item }">
          <div>
            <div>{{ item.startDate }} ຫາ {{ item.endDate }}</div>
            <div class="text-caption" :class="isExpired(item.endDate) ? 'red--text font-weight-bold' : 'green--text'">
              {{ getRemainingDaysText(item.endDate) }}
            </div>
          </div>
        </template>

        <!-- Fee Amount -->
        <template #item.feeAmount="{ item }">
          <span class="font-weight-bold font-monospace">{{ formatMoney(item.feeAmount) }} ₭</span>
        </template>

        <!-- Status -->
        <template #item.status="{ item }">
          <v-chip
            small
            :color="getStatusColor(item)"
            text-color="white"
            class="font-weight-bold"
          >
            {{ getStatusLabel(item) }}
          </v-chip>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <v-btn small color="primary" outlined class="font-weight-bold" @click="openRenewDialog(item)">
            <v-icon left x-small>mdi-autorenew</v-icon>
            ຕໍ່ອາຍຸ (Renew)
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Modal: Register New Monthly Pass -->
    <v-dialog v-model="createDialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="py-3 px-4 primary white--text d-flex justify-space-between align-center">
          <span class="font-weight-bold subtitle-1">
            ສະໝັກປີ້ລາຍເດືອນໃໝ່ (New Monthly Pass)
          </span>
          <v-btn icon dark small @click="createDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-text-field
            v-model="passForm.plateNumber"
            label="ເລກທະບຽນລົດ (Plate Number)*"
            placeholder="ຕົວຢ່າງ: ກກ 9999"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-select
            v-model="passForm.vehicleType"
            :items="vehicleTypes"
            label="ປະເພດລົດ (Vehicle Type)*"
            outlined
            dense
            item-text="label"
            item-value="value"
            class="mb-2"
          ></v-select>

          <v-text-field
            v-model="passForm.customerName"
            label="ຊື່ລູກຄ້າ / ເຈົ້າຂອງລົດ (Customer Name)*"
            placeholder="ຊື່ ແລະ ນາມສະກຸນ"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-text-field
            v-model="passForm.customerPhone"
            label="ເບີໂທລະສັບ (Phone Number)"
            placeholder="020..."
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="passForm.startDate"
                label="ວັນທີເລີ່ມ (Start Date)*"
                type="date"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="passForm.endDate"
                label="ວັນທີໝົດອາຍຸ (End Date)*"
                type="date"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>

          <v-text-field
            v-model.number="passForm.feeAmount"
            label="ຄ່າທຳນຽມລາຍເດືອນ (Fee Amount)*"
            type="number"
            outlined
            dense
            prefix="₭"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="px-4 py-3 justify-space-between">
          <v-btn text @click="createDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" :loading="savingPass" @click="saveNewPass">
            ບັນທຶກ (Save Pass)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Modal: Renew Monthly Pass -->
    <v-dialog v-model="renewDialog" max-width="440" persistent>
      <v-card v-if="selectedRenewPass">
        <v-card-title class="py-3 px-4 primary white--text d-flex justify-space-between align-center">
          <span class="font-weight-bold subtitle-1">
            ຕໍ່ອາຍຸປີ້: {{ selectedRenewPass.passNumber }}
          </span>
          <v-btn icon dark small @click="renewDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <div class="mb-3">
            <div><strong>ທະບຽນລົດ:</strong> {{ selectedRenewPass.plateNumber }}</div>
            <div><strong>ລູກຄ້າ:</strong> {{ selectedRenewPass.customerName }}</div>
            <div><strong>ໝົດອາຍຸເດີມ:</strong> {{ selectedRenewPass.endDate }}</div>
          </div>

          <v-text-field
            v-model="renewForm.newEndDate"
            label="ວັນທີໝົດອາຍຸໃໝ່ (New End Date)*"
            type="date"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-text-field
            v-model.number="renewForm.feeAmount"
            label="ຄ່າທຳນຽມຕໍ່ອາຍຸ (Renew Fee)*"
            type="number"
            outlined
            dense
            prefix="₭"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="px-4 py-3 justify-space-between">
          <v-btn text @click="renewDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="success" :loading="savingRenew" @click="submitRenewPass">
            ຢືນຢັນຕໍ່ອາຍຸ (Confirm)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { createParkingApiService } from '~/services/parkingApiService';

export default {
  name: 'ParkingPassesPage',
  layout: 'admin',
  middleware: 'auths',
  data() {
    return {
      searchQuery: '',
      // Create dialog
      createDialog: false,
      savingPass: false,
      passForm: {
        plateNumber: '',
        vehicleType: 'car',
        customerName: '',
        customerPhone: '',
        startDate: new Date().toISOString().slice(0, 10),
        endDate: '',
        feeAmount: 300000
      },
      // Renew dialog
      renewDialog: false,
      selectedRenewPass: null,
      savingRenew: false,
      renewForm: {
        newEndDate: '',
        feeAmount: 300000
      },
      vehicleTypes: [
        { label: 'ລົດໃຫຍ່ (Car)', value: 'car' },
        { label: 'ລົດຈັກ (Motorbike)', value: 'motorbike' },
        { label: 'ລົດ VIP', value: 'vip' }
      ],
      tableHeaders: [
        { text: 'ເລກທີປີ້ (Pass No)', value: 'passNumber' },
        { text: 'ທະບຽນລົດ (Plate)', value: 'plateNumber' },
        { text: 'ລູກຄ້າ (Customer)', value: 'customer' },
        { text: 'ໄລຍະເວລາ (Validity)', value: 'dates' },
        { text: 'ຄ່າທຳນຽມ (Fee)', value: 'feeAmount' },
        { text: 'ສະຖານະ (Status)', value: 'status' },
        { text: 'ຈັດການ (Action)', value: 'actions', sortable: false, align: 'right' }
      ]
    };
  },
  computed: {
    ...mapState('parking', {
      passes: state => state.monthlyPasses || [],
      loading: state => state.loading
    })
  },
  mounted() {
    this.loadPasses();
    // Default end date to 30 days from now
    const nextMonth = new Date();
    nextMonth.setDate(nextMonth.getDate() + 30);
    this.passForm.endDate = nextMonth.toISOString().slice(0, 10);
  },
  methods: {
    ...mapActions('parking', ['fetchMonthlyPasses']),

    async loadPasses() {
      await this.fetchMonthlyPasses({ search: this.searchQuery });
    },

    formatMoney(val) {
      return Number(val || 0).toLocaleString();
    },

    isExpired(endDateStr) {
      if (!endDateStr) return false;
      const today = new Date().toISOString().slice(0, 10);
      return endDateStr < today;
    },

    getRemainingDaysText(endDateStr) {
      if (!endDateStr) return '';
      const today = new Date(new Date().toISOString().slice(0, 10));
      const end = new Date(endDateStr);
      const diffDays = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
      if (diffDays < 0) return `ໝົດອາຍຸແລ້ວ ${Math.abs(diffDays)} ມື້ (Expired)`;
      if (diffDays === 0) return 'ໝົດອາຍຸມື້ນີ້ (Expires today)';
      return `ເຫຼືອອີກ ${diffDays} ມື້`;
    },

    getStatusColor(item) {
      if (this.isExpired(item.endDate)) return 'red darken-1';
      return item.status === 'active' ? 'green darken-1' : 'grey';
    },

    getStatusLabel(item) {
      if (this.isExpired(item.endDate)) return 'ໝົດອາຍຸ (Expired)';
      return item.status === 'active' ? 'ໃຊ້ງານໄດ້ (Active)' : item.status;
    },

    openCreatePassDialog() {
      const today = new Date();
      const nextMonth = new Date();
      nextMonth.setDate(nextMonth.getDate() + 30);

      this.passForm = {
        plateNumber: '',
        vehicleType: 'car',
        customerName: '',
        customerPhone: '',
        startDate: today.toISOString().slice(0, 10),
        endDate: nextMonth.toISOString().slice(0, 10),
        feeAmount: 300000
      };
      this.createDialog = true;
    },

    async saveNewPass() {
      if (!this.passForm.plateNumber || !this.passForm.customerName || !this.passForm.endDate) {
        this.$toast.warning('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ');
        return;
      }

      this.savingPass = true;
      const api = createParkingApiService(this.$axios);
      try {
        const res = await api.createMonthlyPass(this.passForm);
        if (res.success) {
          this.$toast.success('ສະໝັກປີ້ລາຍເດືອນສຳເລັດ!');
          this.createDialog = false;
          await this.loadPasses();
        } else {
          this.$toast.error(res.error || 'ບັນທຶກບໍ່ສຳເລັດ');
        }
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.savingPass = false;
      }
    },

    openRenewDialog(item) {
      this.selectedRenewPass = item;
      const currentEnd = new Date(item.endDate);
      currentEnd.setDate(currentEnd.getDate() + 30);

      this.renewForm = {
        newEndDate: currentEnd.toISOString().slice(0, 10),
        feeAmount: item.feeAmount || 300000
      };
      this.renewDialog = true;
    },

    async submitRenewPass() {
      if (!this.selectedRenewPass || !this.renewForm.newEndDate) return;

      this.savingRenew = true;
      const api = createParkingApiService(this.$axios);
      try {
        const res = await api.renewMonthlyPass(this.selectedRenewPass.id, this.renewForm);
        if (res.success) {
          this.$toast.success('ຕໍ່ອາຍຸປີ້ສຳເລັດ!');
          this.renewDialog = false;
          await this.loadPasses();
        } else {
          this.$toast.error(res.error || 'ຕໍ່ອາຍຸບໍ່ສຳເລັດ');
        }
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.savingRenew = false;
      }
    }
  }
};
</script>

<style scoped>
.parking-passes-page {
  padding: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
}
.page-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
}
.passes-card {
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
