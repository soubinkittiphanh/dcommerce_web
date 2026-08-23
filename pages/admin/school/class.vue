<template>
  <v-container class="school-billing-dashboard pa-6" fluid>
    <!-- Top Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon size="40" color="primary" class="mr-2">mdi-school-outline</v-icon>
          ລະບົບຈັດການຄ່າຮຽນ (School Classes Setup)
        </h1>
        <p class="text-subtitle-1 grey--text text--darken-1 mb-0">
          ບໍລິຫານຈັດການສົກຮຽນ, ຫ້ອງຮຽນ, ຄ່າທໍານຽມ, ການອອກໃບບິນຮັບເງິນ ແລະ ລາຍງານການເກັບເງິນປະຈໍາວັນ
        </p>
      </div>

      <!-- Active Shift Indicator -->
      <v-chip v-if="activeShift" color="success" dark class="px-4 py-2 font-weight-bold" elevation="1">
        <v-icon left>mdi-cash-register</v-icon>
        ຂາເຂົ້າເຮັດວຽກ: Shift #{{ activeShift.id }} | ຍອດເປີດ: {{ formatCurrency(activeShift.openingCash) }} LAK
      </v-chip>
      <v-chip v-else color="error" dark class="px-4 py-2 font-weight-bold" elevation="1" to="/admin/school/shift">
        <v-icon left>mdi-cash-register-off</v-icon>
        ບໍ່ມີກະເປົາເປີດ (No Active Shift)
      </v-chip>
    </div>
    <v-row>
      <!-- Academic Years Configuration -->
      <v-col cols="12" md="4">
        <v-card outlined class="pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <h3 class="text-subtitle-1 font-weight-bold primary--text">ປີການສຶກສາ (Academic Years)</h3>
            <v-btn color="primary" small @click="openYearDialog">
              <v-icon left small>mdi-plus</v-icon>
              ເພີ່ມປີການສຶກສາ
            </v-btn>
          </div>

          <v-data-table :headers="yearHeaders" :items="academicYears" :loading="loadingYears"
            no-data-text="ບໍ່ພົບປີການສຶກສາ" class="elevation-0" dense hide-default-footer>
            <template v-slot:item.startDate="{ item }">
              {{ formatDate(item.startDate) }}
            </template>
            <template v-slot:item.endDate="{ item }">
              {{ formatDate(item.endDate) }}
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <!-- School Classes Configuration -->
      <v-col cols="12" md="4">
        <v-card outlined class="pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <h3 class="text-subtitle-1 font-weight-bold primary--text">ຊັ້ນຮຽນ/ຫ້ອງຮຽນ (School Classes)</h3>
            <v-btn color="primary" small @click="openClassDialog">
              <v-icon left small>mdi-plus</v-icon>
              ເພີ່ມຊັ້ນຮຽນ
            </v-btn>
          </div>

          <v-data-table :headers="classHeaders" :items="classes" :loading="loadingClasses"
            no-data-text="ບໍ່ພົບຊັ້ນຮຽນ" class="elevation-0" dense hide-default-footer>
            <template v-slot:item.academicYear="{ item }">
              <span v-if="item.academicYear">{{ item.academicYear.name }}</span>
              <span v-else class="grey--text">-</span>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn small icon color="primary" class="mr-1" @click="editClass(item)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn small icon color="error" @click="deleteClass(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <!-- School Rooms Configuration -->
      <v-col cols="12" md="4">
        <v-card outlined class="pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <h3 class="text-subtitle-1 font-weight-bold primary--text">ຫ້ອງຮຽນ (School Rooms)</h3>
            <v-btn color="primary" small @click="openRoomDialog">
              <v-icon left small>mdi-plus</v-icon>
              ເພີ່ມຫ້ອງຮຽນ
            </v-btn>
          </div>

          <v-data-table :headers="roomHeaders" :items="rooms" :loading="loadingRooms"
            no-data-text="ບໍ່ພົບຫ້ອງຮຽນ" class="elevation-0" dense hide-default-footer>
            <template v-slot:item.schoolClass="{ item }">
              <span v-if="item.schoolClass">{{ item.schoolClass.name }}</span>
              <span v-else class="grey--text">-</span>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn small icon color="primary" class="mr-1" @click="editRoom(item)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn small icon color="error" @click="deleteRoom(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialogs -->

    <!-- 1. Year Dialog -->
    <v-dialog v-model="yearDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">ເພີ່ມປີການສຶກສາ (New Academic Period)</v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="yearForm" v-model="yearValid">
            <v-text-field v-model="yearFormFields.name" label="ຊື່ສົກຮຽນ (e.g. 2023-2024) *"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ສົກຮຽນ']" outlined dense></v-text-field>
            <v-text-field v-model="yearFormFields.startDate" type="date" label="ວັນເລີ່ມຕົ້ນ *"
              :rules="[v => !!v || 'ກະລຸນາເລືອກວັນເລີ່ມຕົ້ນ']" outlined dense></v-text-field>
            <v-text-field v-model="yearFormFields.endDate" type="date" label="ວັນສິ້ນສຸດ *"
              :rules="[v => !!v || 'ກະລຸນາເລືອກວັນສິ້ນສຸດ']" outlined dense></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="yearDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveAcademicYear" :loading="savingYear" :disabled="!yearValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 2. Class Dialog -->
    <v-dialog v-model="classDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          {{ classFormFields.id ? 'ແກ້ໄຂຊັ້ນຮຽນ (Edit Class)' : 'ເພີ່ມຊັ້ນຮຽນ (New Class)' }}
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="classForm" v-model="classValid">
            <v-text-field v-model="classFormFields.name" label="ຊື່ຊັ້ນຮຽນ (e.g. Grade 1) *"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ຊັ້ນຮຽນ']" outlined dense></v-text-field>
            <v-select v-model="classFormFields.academicYearId" :items="academicYears" item-text="name" item-value="id"
              label="ປີການສຶກສາ *" :rules="[v => !!v || 'ກະລຸນາເລືອກປີການສຶກສາ']" outlined dense></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="classDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveClass" :loading="savingClass" :disabled="!classValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 3. Room Dialog -->
    <v-dialog v-model="roomDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          {{ roomFormFields.id ? 'ແກ້ໄຂຫ້ອງຮຽນ (Edit Room)' : 'ເພີ່ມຫ້ອງຮຽນ (New Room)' }}
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="roomForm" v-model="roomValid">
            <v-text-field v-model="roomFormFields.name" label="ຊື່ຫ້ອງຮຽນ (e.g. Room 101) *"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ຫ້ອງຮຽນ']" outlined dense></v-text-field>
            <v-select v-model="roomFormFields.classId" :items="classes" item-text="name" item-value="id"
              label="ຊັ້ນຮຽນ *" :rules="[v => !!v || 'ກະລຸນາເລືອກຊັ້ນຮຽນ']" outlined dense></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="roomDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveRoom" :loading="savingRoom" :disabled="!roomValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'SchoolClassesPage',
  middleware: 'auths',
  data() {
    return {
      activeShift: null,

      // Year fields
      academicYears: [],
      loadingYears: false,
      yearDialog: false,
      yearValid: true,
      yearFormFields: {
        name: '',
        startDate: '',
        endDate: ''
      },
      savingYear: false,

      // Class fields
      classes: [],
      loadingClasses: false,
      classDialog: false,
      classValid: true,
      classFormFields: {
        id: null,
        name: '',
        academicYearId: null
      },
      savingClass: false,

      // Room fields
      rooms: [],
      loadingRooms: false,
      roomDialog: false,
      roomValid: true,
      roomFormFields: {
        id: null,
        name: '',
        classId: null
      },
      savingRoom: false,

      // Headers
      yearHeaders: [
        { text: 'ປີການສຶກສາ (Academic Period)', value: 'name' },
        { text: 'ວັນທີເລີ່ມຕົ້ນ', value: 'startDate' },
        { text: 'ວັນທີສິ້ນສຸດ', value: 'endDate' }
      ],
      classHeaders: [
        { text: 'ຊື່ຊັ້ນຮຽນ (Class Name)', value: 'name' },
        { text: 'ປີການສຶກສາ', value: 'academicYear' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, align: 'center' }
      ],
      roomHeaders: [
        { text: 'ຊື່ຫ້ອງຮຽນ (Room Name)', value: 'name' },
        { text: 'ຊັ້ນຮຽນ', value: 'schoolClass' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, align: 'center' }
      ]
    }
  },
  mounted() {
    this.checkActiveShift();
    this.loadAcademicYears();
    this.loadClasses();
    this.loadRooms();
  },
  methods: {
    formatCurrency(value) {
      if (!value && value !== 0) return '0';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    },
    formatDate(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleDateString('en-GB');
    },

    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
      } catch (err) {
        console.error('Error checking active shift:', err);
      }
    },

    // ---------------------------------
    // ACADEMIC YEARS API BINDINGS
    // ---------------------------------
    async loadAcademicYears() {
      this.loadingYears = true;
      try {
        const res = await this.$axios.get('/api/school/academic-years');
        this.academicYears = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingYears = false;
      }
    },
    openYearDialog() {
      this.yearFormFields = { name: '', startDate: '', endDate: '' };
      this.yearDialog = true;
    },
    async saveAcademicYear() {
      this.savingYear = true;
      try {
        await this.$axios.post('/api/school/academic-years', this.yearFormFields);
        this.$toast.success('ບັນທຶກປີການສຶກສາສຳເລັດ');
        this.loadAcademicYears();
        this.yearDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingYear = false;
      }
    },

    // ---------------------------------
    // CLASSES API BINDINGS
    // ---------------------------------
    async loadClasses() {
      this.loadingClasses = true;
      try {
        const res = await this.$axios.get('/api/school/classes');
        this.classes = (res.data || []).filter(c => c.isActive !== false);
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingClasses = false;
      }
    },
    openClassDialog() {
      this.classFormFields = { id: null, name: '', academicYearId: this.academicYears[0]?.id || null };
      this.classDialog = true;
    },
    editClass(item) {
      this.classFormFields = {
        id: item.id,
        name: item.name,
        academicYearId: item.academicYearId || (item.academicYear ? item.academicYear.id : null)
      };
      this.classDialog = true;
    },
    async saveClass() {
      this.savingClass = true;
      try {
        if (this.classFormFields.id) {
          await this.$axios.put(`/api/school/classes/update/${this.classFormFields.id}`, this.classFormFields);
          this.$toast.success('ແກ້ໄຂຊັ້ນຮຽນສຳເລັດ');
        } else {
          await this.$axios.post('/api/school/classes', this.classFormFields);
          this.$toast.success('ບັນທຶກຊັ້ນຮຽນສຳເລັດ');
        }
        this.loadClasses();
        this.classDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingClass = false;
      }
    },
    async deleteClass(item) {
      if (confirm(`ທ່ານຕ້ອງການລຶບຊັ້ນຮຽນ "${item.name}" ແທ້ບໍ່?`)) {
        try {
          await this.$axios.delete(`/api/school/classes/delete/${item.id}`);
          this.$toast.success('ລຶບຊັ້ນຮຽນສຳເລັດ');
          this.loadClasses();
        } catch (err) {
          this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດລຶບຊັ້ນຮຽນໄດ້');
        }
      }
    },

    // ---------------------------------
    // ROOMS API BINDINGS
    // ---------------------------------
    async loadRooms() {
      this.loadingRooms = true;
      try {
        const res = await this.$axios.get('/api/school/rooms');
        this.rooms = (res.data || []).filter(r => r.isActive !== false);
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingRooms = false;
      }
    },
    openRoomDialog() {
      this.roomFormFields = { id: null, name: '', classId: this.classes[0]?.id || null };
      this.roomDialog = true;
    },
    editRoom(item) {
      this.roomFormFields = {
        id: item.id,
        name: item.name,
        classId: item.classId
      };
      this.roomDialog = true;
    },
    async saveRoom() {
      this.savingRoom = true;
      try {
        if (this.roomFormFields.id) {
          await this.$axios.put(`/api/school/rooms/update/${this.roomFormFields.id}`, this.roomFormFields);
          this.$toast.success('ແກ້ໄຂຫ້ອງຮຽນສຳເລັດ');
        } else {
          await this.$axios.post('/api/school/rooms', this.roomFormFields);
          this.$toast.success('ບັນທຶກຫ້ອງຮຽນສຳເລັດ');
        }
        this.loadRooms();
        this.roomDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingRoom = false;
      }
    },
    async deleteRoom(item) {
      if (confirm(`ທ່ານຕ້ອງການລຶບຫ້ອງຮຽນ "${item.name}" ແທ້ບໍ່?`)) {
        try {
          await this.$axios.delete(`/api/school/rooms/delete/${item.id}`);
          this.$toast.success('ລຶບຫ້ອງຮຽນສຳເລັດ');
          this.loadRooms();
        } catch (err) {
          this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດລຶບຫ້ອງຮຽນໄດ້');
        }
      }
    }
  }
}
</script>

<style scoped>
.school-billing-dashboard * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
</style>
