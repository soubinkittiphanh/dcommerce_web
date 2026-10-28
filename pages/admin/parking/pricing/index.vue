<template>
  <div class="parking-pricing-page">
    <!-- Header -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-4">
      <div>
        <h1 class="page-title d-flex align-center">
          <v-icon large color="primary" class="mr-2">mdi-cash-clock</v-icon>
          <span>ຕັ້ງຄ່າລາຄາຄ່າຈອດລົດຕາມຊ່ວງເວລາ</span>
        </h1>
        <p class="page-subtitle grey--text text--darken-1 mb-0">
          Day/Night & Vehicle Parking Pricing Rules (ກາງເວັນ, ກາງຄືນ, ແລະ ປະເພດລົດ)
        </p>
      </div>

      <div class="action-buttons d-flex align-center">
        <v-btn color="primary" class="font-weight-bold" @click="openAddRuleDialog">
          <v-icon left>mdi-plus</v-icon>
          ເພີ່ມອັດຕາໃໝ່ (Add Rule)
        </v-btn>
        <v-btn icon color="primary" class="ml-2" :loading="loading" @click="loadPricingRules">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Pricing Rules Cards Grid -->
    <v-row dense>
      <v-col v-for="rule in pricingRules" :key="rule.id" cols="12" md="6" lg="4" class="pa-2">
        <v-card class="elevation-2 rule-card" :class="{ 'default-rule': rule.isDefault }">
          <!-- Card Title Banner -->
          <div class="rule-card-header pa-3 d-flex justify-space-between align-center">
            <div class="d-flex align-center">
              <v-avatar size="36" color="primary lighten-4" class="mr-2">
                <v-icon color="primary" small>{{ getVehicleIcon(rule.vehicleType) }}</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-bold rule-name-text">{{ rule.name }}</div>
                <div class="text-caption text-uppercase primary--text font-weight-bold">
                  {{ rule.vehicleType }}
                </div>
              </div>
            </div>

            <v-chip v-if="rule.isDefault" x-small color="primary" dark class="font-weight-bold">
              ຄ່າເລີ່ມຕົ້ນ (Default)
            </v-chip>
          </div>

          <v-divider></v-divider>

          <!-- Pricing Breakdown Body -->
          <v-card-text class="pa-3">
            <!-- 1. Day Time Pricing -->
            <div class="period-box day-period pa-2 mb-2 rounded">
              <div class="d-flex justify-space-between align-center font-weight-bold mb-1">
                <span class="amber--text text--darken-4">
                  <v-icon small color="amber darken-3">mdi-white-balance-sunny</v-icon>
                  ຊ່ວງກາງເວັນ (Day Time)
                </span>
                <v-chip x-small color="amber lighten-4" text-color="amber darken-4" class="font-weight-bold">
                  {{ rule.dayStartTime }} - {{ rule.dayEndTime }}
                </v-chip>
              </div>
              <div class="d-flex justify-space-between text-body-2">
                <span class="grey--text text--darken-2">ລາຄາຕໍ່ຊົ່ວໂມງ:</span>
                <span class="font-weight-bold amber--text text--darken-4 font-monospace">
                  {{ formatMoney(rule.dayHourlyRate) }} LAK / ຊມ
                </span>
              </div>
            </div>

            <!-- 2. Night Time Pricing -->
            <div class="period-box night-period pa-2 mb-2 rounded">
              <div class="d-flex justify-space-between align-center font-weight-bold mb-1">
                <span class="indigo--text text--darken-3">
                  <v-icon small color="indigo darken-3">mdi-weather-night</v-icon>
                  ຊ່ວງກາງຄືນ (Night Time)
                </span>
                <v-chip x-small color="indigo lighten-5" text-color="indigo darken-3" class="font-weight-bold">
                  {{ rule.dayEndTime }} - {{ rule.dayStartTime }}
                </v-chip>
              </div>
              <div class="d-flex justify-space-between text-body-2">
                <span class="grey--text text--darken-2">
                  {{ rule.nightPricingType === 'FLAT' ? 'ຄ່າຈອດເໝົາຄືນ (Flat):' : 'ລາຄາຕໍ່ຊົ່ວໂມງ:' }}
                </span>
                <span class="font-weight-bold indigo--text text--darken-3 font-monospace">
                  {{ formatMoney(rule.nightHourlyRate) }} LAK {{ rule.nightPricingType === 'FLAT' ? '/ ຄືນ' : '/ ຊມ' }}
                </span>
              </div>
            </div>

            <!-- 3. Policy & Caps -->
            <div class="policy-details text-caption">
              <div class="d-flex justify-space-between py-1 border-bottom">
                <span class="grey--text">ໄລຍະຟຣີ (Grace Period):</span>
                <span class="font-weight-medium">{{ rule.gracePeriodMinutes }} ນາທີ (Mins free)</span>
              </div>
              <div class="d-flex justify-space-between py-1 border-bottom">
                <span class="grey--text">ເພດານສູງສຸດຕໍ່ 24 ຊມ (Daily Cap):</span>
                <span class="font-weight-bold font-monospace">
                  {{ rule.dailyCap > 0 ? formatMoney(rule.dailyCap) + ' LAK' : 'ບໍ່ມີເພດານ' }}
                </span>
              </div>
              <div class="d-flex justify-space-between py-1">
                <span class="grey--text">ຄ່າປັບໃໝປີ້ເສຍ (Lost Ticket):</span>
                <span class="font-weight-bold red--text text--darken-2 font-monospace">
                  {{ formatMoney(rule.lostTicketFee) }} LAK
                </span>
              </div>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <!-- Card Actions -->
          <v-card-actions class="px-3 py-2 justify-end">
            <v-btn small text color="primary" @click="openEditRuleDialog(rule)">
              <v-icon left small>mdi-pencil</v-icon>
              ແກ້ໄຂອັດຕານີ້ (Edit)
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal: Add / Edit Pricing Rule -->
    <v-dialog v-model="ruleDialog" max-width="540" persistent>
      <v-card>
        <v-card-title class="py-3 px-4 primary white--text d-flex justify-space-between align-center">
          <span class="font-weight-bold subtitle-1">
            {{ isEditing ? 'ແກ້ໄຂອັດຕາຄ່າຈອດລົດ (Edit Rule)' : 'ເພີ່ມອັດຕາຄ່າຈອດລົດໃໝ່ (Add Rule)' }}
          </span>
          <v-btn icon dark small @click="ruleDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-text-field
            v-model="ruleForm.name"
            label="ຊື່ກົດລະບຽບລາຄາ (Rule Name)*"
            placeholder="ຕົວຢ່າງ: ອັດຕາຄ່າຈອດລົດໃຫຍ່"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-select
            v-model="ruleForm.vehicleType"
            :items="vehicleTypes"
            label="ປະເພດຍານພາຫະນະ (Vehicle Type)*"
            outlined
            dense
            item-text="label"
            item-value="value"
            class="mb-2"
          ></v-select>

          <!-- Day Time Settings -->
          <v-card outlined class="pa-3 mb-3 amber lighten-5">
            <div class="font-weight-bold amber--text text--darken-4 mb-2">
              <v-icon small color="amber darken-4">mdi-white-balance-sunny</v-icon>
              ຕັ້ງຄ່າຊ່ວງກາງເວັນ (Day Time Settings)
            </div>
            <v-row dense>
              <v-col cols="6">
                <v-text-field
                  v-model="ruleForm.dayStartTime"
                  label="ເລີ່ມຕົ້ນ (Start Time)"
                  placeholder="06:00"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="ruleForm.dayEndTime"
                  label="ສິ້ນສຸດ (End Time)"
                  placeholder="18:00"
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-2">
                <v-text-field
                  v-model.number="ruleForm.dayHourlyRate"
                  label="ລາຄາຕໍ່ຊົ່ວໂມງ (LAK / Hr)*"
                  type="number"
                  outlined
                  dense
                  hide-details
                  prefix="₭"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <!-- Night Time Settings -->
          <v-card outlined class="pa-3 mb-3 indigo lighten-5">
            <div class="font-weight-bold indigo--text text--darken-4 mb-2">
              <v-icon small color="indigo darken-4">mdi-weather-night</v-icon>
              ຕັ້ງຄ່າຊ່ວງກາງຄືນ (Night Time Settings)
            </div>
            <v-row dense>
              <v-col cols="6">
                <v-select
                  v-model="ruleForm.nightPricingType"
                  :items="[
                    { text: 'ຄິດໄລ່ຕໍ່ຊົ່ວໂມງ (Hourly)', value: 'HOURLY' },
                    { text: 'ເໝົາຄືນ / ຄັ້ງ (Flat Night)', value: 'FLAT' }
                  ]"
                  label="ຮູບແບບຄິດໄລ່"
                  outlined
                  dense
                  hide-details
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model.number="ruleForm.nightHourlyRate"
                  label="ລາຄາກາງຄືນ (LAK)*"
                  type="number"
                  outlined
                  dense
                  hide-details
                  prefix="₭"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card>

          <!-- Grace Period, Cap, Penalty -->
          <v-row dense>
            <v-col cols="4">
              <v-text-field
                v-model.number="ruleForm.gracePeriodMinutes"
                label="ໄລຍະຟຣີ (ນາທີ)"
                type="number"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model.number="ruleForm.dailyCap"
                label="ເພດານສູງສຸດ / 24 ຊມ"
                type="number"
                outlined
                dense
                prefix="₭"
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model.number="ruleForm.lostTicketFee"
                label="ຄ່າປັບປີ້ເສຍ"
                type="number"
                outlined
                dense
                prefix="₭"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="px-4 py-3 justify-space-between">
          <v-btn text @click="ruleDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" :loading="savingRule" @click="saveRule">
            ບັນທຶກ (Save Rule)
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
  name: 'ParkingPricingPage',
  layout: 'admin',
  middleware: 'auths',
  data() {
    return {
      ruleDialog: false,
      isEditing: false,
      savingRule: false,
      ruleForm: {
        id: null,
        name: '',
        vehicleType: 'car',
        dayStartTime: '06:00',
        dayEndTime: '18:00',
        dayHourlyRate: 5000,
        nightHourlyRate: 10000,
        nightPricingType: 'HOURLY',
        gracePeriodMinutes: 15,
        dailyCap: 50000,
        lostTicketFee: 100000,
        isDefault: true
      },
      vehicleTypes: [
        { label: 'ລົດໃຫຍ່ (Car)', value: 'car' },
        { label: 'ລົດຈັກ (Motorbike)', value: 'motorbike' },
        { label: 'ລົດບັນທຸກ (Truck)', value: 'truck' },
        { label: 'ລົດ VIP', value: 'vip' }
      ]
    };
  },
  computed: {
    ...mapState('parking', {
      pricingRules: state => state.pricingRules || [],
      loading: state => state.loading
    })
  },
  mounted() {
    this.loadPricingRules();
  },
  methods: {
    ...mapActions('parking', ['fetchPricingRules']),

    async loadPricingRules() {
      await this.fetchPricingRules();
    },

    formatMoney(val) {
      return Number(val || 0).toLocaleString();
    },

    getVehicleIcon(type) {
      switch (type) {
        case 'motorbike': return 'mdi-motorbike';
        case 'truck': return 'mdi-truck';
        case 'vip': return 'mdi-star';
        default: return 'mdi-car';
      }
    },

    openAddRuleDialog() {
      this.isEditing = false;
      this.ruleForm = {
        id: null,
        name: '',
        vehicleType: 'car',
        dayStartTime: '06:00',
        dayEndTime: '18:00',
        dayHourlyRate: 5000,
        nightHourlyRate: 10000,
        nightPricingType: 'HOURLY',
        gracePeriodMinutes: 15,
        dailyCap: 50000,
        lostTicketFee: 100000,
        isDefault: true
      };
      this.ruleDialog = true;
    },

    openEditRuleDialog(rule) {
      this.isEditing = true;
      this.ruleForm = { ...rule };
      this.ruleDialog = true;
    },

    async saveRule() {
      if (!this.ruleForm.name || !this.ruleForm.vehicleType) {
        this.$toast.warning('ກະລຸນາປ້ອນຊື່ກົດລະບຽບ ແລະ ປະເພດລົດ');
        return;
      }

      this.savingRule = true;
      const api = createParkingApiService(this.$axios);
      try {
        const res = await api.savePricingRule(this.ruleForm);
        if (res.success) {
          this.$toast.success('ບັນທຶກອັດຕາຄ່າຈອດລົດສຳເລັດ!');
          this.ruleDialog = false;
          await this.loadPricingRules();
        } else {
          this.$toast.error(res.error || 'ບັນທຶກບໍ່ສຳເລັດ');
        }
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.savingRule = false;
      }
    }
  }
};
</script>

<style scoped>
.parking-pricing-page {
  padding: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
}
.page-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
}
.rule-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.default-rule {
  border-top: 4px solid #0284c7;
}
.font-monospace {
  font-family: 'Courier New', Courier, monospace !important;
}
.day-period {
  background: #fefce8;
  border: 1px solid #fef08a;
}
.night-period {
  background: #eef2ff;
  border: 1px solid #c7d2fe;
}
.border-bottom {
  border-bottom: 1px dashed #e2e8f0;
}
</style>
