<template>
  <div class="parking-vehicle-types-page">
    <!-- Header -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-4">
      <div>
        <h1 class="page-title d-flex align-center">
          <v-icon large color="primary" class="mr-2">mdi-car-multiple</v-icon>
          <span>ປະເພດຍານພາຫະນະ</span>
        </h1>
        <p class="page-subtitle grey--text text--darken-1 mb-0">
          Vehicle Types – add, rename or disable the vehicle types used for entry, slots, pricing and passes
        </p>
      </div>

      <div class="action-buttons d-flex align-center">
        <v-switch
          v-model="showInactive"
          dense
          hide-details
          inset
          class="mr-4 mt-0"
          label="ສະແດງທີ່ປິດໃຊ້ງານ (Show inactive)"
        ></v-switch>
        <v-btn color="primary" class="font-weight-bold" @click="openAddDialog">
          <v-icon left>mdi-plus</v-icon>
          ເພີ່ມປະເພດ (Add Type)
        </v-btn>
        <v-btn icon color="primary" class="ml-2" :loading="loading" @click="load">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>

    <v-card class="elevation-2 types-card">
      <v-data-table
        :headers="headers"
        :items="visibleTypes"
        :loading="loading"
        item-key="id"
        :items-per-page="50"
        hide-default-footer
        no-data-text="ບໍ່ມີຂໍ້ມູນ (No vehicle types)"
      >
        <template #[`item.icon`]="{ item }">
          <v-avatar size="34" :color="item.color || 'primary'">
            <v-icon small dark>{{ item.icon || 'mdi-car' }}</v-icon>
          </v-avatar>
        </template>

        <template #[`item.code`]="{ item }">
          <span class="font-monospace font-weight-bold">{{ item.code }}</span>
        </template>

        <template #[`item.nameLa`]="{ item }">
          <div class="font-weight-bold">{{ item.nameLa }}</div>
          <div class="text-caption grey--text">{{ item.nameEn }}</div>
          <v-chip
            v-if="item.isActive && item.hasPricingRule === false"
            x-small
            color="orange lighten-4"
            text-color="orange darken-4"
            class="font-weight-bold mt-1"
            to="/admin/parking/pricing"
          >
            <v-icon x-small left>mdi-alert</v-icon>
            ບໍ່ມີລາຄາ – ໃຊ້ລາຄາສຳຮອງ (No pricing rule)
          </v-chip>
        </template>

        <template #[`item.isDefault`]="{ item }">
          <v-chip v-if="item.isDefault" x-small color="primary" dark class="font-weight-bold">
            ຄ່າເລີ່ມຕົ້ນ (Default)
          </v-chip>
          <v-btn
            v-else-if="item.isActive"
            x-small
            text
            color="primary"
            :loading="busyId === item.id"
            @click="makeDefault(item)"
          >
            ຕັ້ງເປັນຄ່າເລີ່ມຕົ້ນ
          </v-btn>
        </template>

        <template #[`item.isActive`]="{ item }">
          <v-switch
            :input-value="item.isActive"
            dense
            hide-details
            inset
            class="mt-0"
            :disabled="item.isDefault || busyId === item.id"
            @change="val => toggleActive(item, val)"
          ></v-switch>
        </template>

        <template #[`item.actions`]="{ item }">
          <v-btn icon small color="primary" @click="openEditDialog(item)">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Add / Edit dialog -->
    <v-dialog v-model="dialog" max-width="520" persistent>
      <v-card>
        <v-card-title class="font-weight-bold">
          <v-icon color="primary" class="mr-2">{{ isEditing ? 'mdi-pencil' : 'mdi-plus-circle' }}</v-icon>
          {{ isEditing ? 'ແກ້ໄຂປະເພດຍານພາຫະນະ (Edit Type)' : 'ເພີ່ມປະເພດຍານພາຫະນະ (Add Type)' }}
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text class="pt-4">
          <v-text-field
            v-model="form.code"
            label="ລະຫັດ (Code)*"
            placeholder="ຕົວຢ່າງ: van, tuk_tuk, bus"
            hint="a-z, 0-9, _ ເທົ່ານັ້ນ. ບໍ່ສາມາດປ່ຽນໄດ້ຫຼັງຈາກບັນທຶກ (cannot be changed later)"
            persistent-hint
            outlined
            dense
            class="mb-3"
            :disabled="isEditing"
            @input="v => (form.code = (v || '').toLowerCase().replace(/[^a-z0-9_]/g, ''))"
          ></v-text-field>

          <v-text-field
            v-model="form.nameLa"
            label="ຊື່ພາສາລາວ (Lao Name)*"
            placeholder="ຕົວຢ່າງ: ລົດຕູ້"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-text-field
            v-model="form.nameEn"
            label="ຊື່ພາສາອັງກິດ (English Name)"
            placeholder="e.g. Van"
            outlined
            dense
            class="mb-2"
          ></v-text-field>

          <v-select
            v-model="form.icon"
            :items="iconOptions"
            label="ໄອຄອນ (Icon)"
            outlined
            dense
            item-text="label"
            item-value="value"
            class="mb-2"
          >
            <template #selection="{ item }">
              <v-icon small class="mr-2">{{ item.value }}</v-icon>{{ item.label }}
            </template>
            <template #item="{ item }">
              <v-icon small class="mr-2">{{ item.value }}</v-icon>{{ item.label }}
            </template>
          </v-select>

          <div class="text-caption grey--text text--darken-1 mb-1">ສີ (Color)</div>
          <div class="d-flex flex-wrap mb-3">
            <v-avatar
              v-for="c in colorOptions"
              :key="c"
              size="28"
              :color="c"
              class="mr-2 mb-2 color-swatch"
              :class="{ 'color-selected': form.color === c }"
              @click="form.color = c"
            >
              <v-icon v-if="form.color === c" x-small dark>mdi-check</v-icon>
            </v-avatar>
          </div>

          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model.number="form.sortOrder"
                type="number"
                label="ລຳດັບ (Sort Order)"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="d-flex align-center">
              <v-checkbox
                v-model="form.isDefault"
                label="ຄ່າເລີ່ມຕົ້ນ (Default)"
                dense
                hide-details
                class="mt-0"
                :disabled="isEditing && editingWasDefault"
              ></v-checkbox>
            </v-col>
          </v-row>

          <div class="d-flex align-center mt-4 preview-box pa-2 rounded">
            <span class="text-caption grey--text mr-3">Preview:</span>
            <v-avatar size="34" :color="form.color || 'primary'" class="mr-2">
              <v-icon small dark>{{ form.icon || 'mdi-car' }}</v-icon>
            </v-avatar>
            <div>
              <div class="font-weight-bold">{{ form.nameLa || '—' }}</div>
              <div class="text-caption grey--text">{{ form.nameEn }}</div>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">ຍົກເລີກ (Cancel)</v-btn>
          <v-btn color="primary" class="font-weight-bold" :loading="saving" @click="save">
            <v-icon left>mdi-content-save</v-icon>
            ບັນທຶກ (Save)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const EMPTY_FORM = () => ({
  id: null,
  code: '',
  nameLa: '',
  nameEn: '',
  icon: 'mdi-car',
  color: '#1E88E5',
  sortOrder: 10,
  isDefault: false
});

export default {
  name: 'ParkingVehicleTypesPage',
  layout: 'admin',
  middleware: 'auths',
  data() {
    return {
      showInactive: false,
      dialog: false,
      isEditing: false,
      editingWasDefault: false,
      saving: false,
      busyId: null,
      form: EMPTY_FORM(),
      headers: [
        { text: '', value: 'icon', sortable: false, width: 60 },
        { text: 'ລະຫັດ (Code)', value: 'code' },
        { text: 'ຊື່ (Name)', value: 'nameLa' },
        { text: 'ລຳດັບ (Order)', value: 'sortOrder', width: 110 },
        { text: 'ຄ່າເລີ່ມຕົ້ນ (Default)', value: 'isDefault', sortable: false },
        { text: 'ເປີດໃຊ້ (Active)', value: 'isActive', sortable: false, width: 110 },
        { text: '', value: 'actions', sortable: false, align: 'end', width: 60 }
      ],
      // Keep in sync with dc_pos lib/helper/parking_vehicle_icons.dart
      iconOptions: [
        { label: 'Car', value: 'mdi-car' },
        { label: 'Car (side)', value: 'mdi-car-side' },
        { label: 'SUV', value: 'mdi-car-estate' },
        { label: 'Pickup', value: 'mdi-car-pickup' },
        { label: 'Motorbike', value: 'mdi-motorbike' },
        { label: 'Scooter', value: 'mdi-moped' },
        { label: 'Bicycle', value: 'mdi-bicycle' },
        { label: 'Truck', value: 'mdi-truck' },
        { label: 'Van', value: 'mdi-van-utility' },
        { label: 'Bus', value: 'mdi-bus' },
        { label: 'Tuk-tuk / Rickshaw', value: 'mdi-rickshaw' },
        { label: 'Electric car', value: 'mdi-car-electric' },
        { label: 'VIP / Star', value: 'mdi-star' },
        { label: 'Disabled', value: 'mdi-wheelchair-accessibility' }
      ],
      colorOptions: ['#1E88E5', '#FB8C00', '#7C3AED', '#F9A825', '#0D9488', '#E53935', '#43A047', '#546E7A', '#D81B60', '#3949AB']
    };
  },
  computed: {
    ...mapState('parking', {
      allVehicleTypes: state => state.allVehicleTypes || [],
      loading: state => state.loading
    }),
    visibleTypes() {
      return this.showInactive ? this.allVehicleTypes : this.allVehicleTypes.filter(t => t.isActive);
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    ...mapActions('parking', ['fetchAllVehicleTypes', 'saveVehicleType', 'setVehicleTypeStatus']),

    async load() {
      const res = await this.fetchAllVehicleTypes();
      if (!res.success) this.$toast.error(res.error || 'ໂຫຼດຂໍ້ມູນບໍ່ສຳເລັດ');
    },

    openAddDialog() {
      this.isEditing = false;
      this.editingWasDefault = false;
      const maxOrder = this.allVehicleTypes.reduce((m, t) => Math.max(m, t.sortOrder || 0), 0);
      this.form = { ...EMPTY_FORM(), sortOrder: maxOrder + 1 };
      this.dialog = true;
    },

    openEditDialog(item) {
      this.isEditing = true;
      this.editingWasDefault = !!item.isDefault;
      this.form = {
        id: item.id,
        code: item.code,
        nameLa: item.nameLa,
        nameEn: item.nameEn,
        icon: item.icon || 'mdi-car',
        color: item.color,
        sortOrder: item.sortOrder,
        isDefault: !!item.isDefault
      };
      this.dialog = true;
    },

    async save() {
      if (!this.isEditing && !/^[a-z0-9_]{1,30}$/.test(this.form.code || '')) {
        this.$toast.warning('ກະລຸນາປ້ອນລະຫັດ: a-z, 0-9, _ (Code is required)');
        return;
      }
      if (!this.form.nameLa || !this.form.nameLa.trim()) {
        this.$toast.warning('ກະລຸນາປ້ອນຊື່ພາສາລາວ (Lao name is required)');
        return;
      }

      const payload = { ...this.form };
      if (this.isEditing) {
        delete payload.code; // immutable
        if (this.editingWasDefault) delete payload.isDefault;
      }

      this.saving = true;
      try {
        const res = await this.saveVehicleType(payload);
        if (res.success) {
          this.$toast.success(res.message || 'ບັນທຶກສຳເລັດ!');
          this.dialog = false;
        } else {
          this.$toast.error(res.error || 'ບັນທຶກບໍ່ສຳເລັດ');
        }
      } finally {
        this.saving = false;
      }
    },

    async makeDefault(item) {
      this.busyId = item.id;
      try {
        const res = await this.saveVehicleType({ id: item.id, isDefault: true });
        if (res.success) this.$toast.success(`ຕັ້ງ "${item.nameLa}" ເປັນຄ່າເລີ່ມຕົ້ນແລ້ວ`);
        else this.$toast.error(res.error || 'ບໍ່ສຳເລັດ');
      } finally {
        this.busyId = null;
      }
    },

    async toggleActive(item, isActive) {
      this.busyId = item.id;
      try {
        const res = await this.setVehicleTypeStatus({ id: item.id, isActive });
        if (res.success) {
          this.$toast.success(isActive ? 'ເປີດໃຊ້ງານແລ້ວ (Activated)' : 'ປິດໃຊ້ງານແລ້ວ (Deactivated)');
        } else {
          this.$toast.error(res.error || 'ບໍ່ສຳເລັດ');
          await this.load(); // revert the switch
        }
      } finally {
        this.busyId = null;
      }
    }
  }
};
</script>

<style scoped>
.parking-vehicle-types-page {
  padding: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
}
.page-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
}
.types-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.font-monospace {
  font-family: 'Courier New', Courier, monospace !important;
}
.color-swatch {
  cursor: pointer;
  border: 2px solid transparent;
}
.color-selected {
  border-color: #0f172a;
}
.preview-box {
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
}
</style>
