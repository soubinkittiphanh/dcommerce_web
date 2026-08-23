<template>
  <v-container class="school-billing-dashboard pa-6" fluid>
    <!-- Top Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon size="40" color="primary" class="mr-2">mdi-school-outline</v-icon>
          ລະບົບຈັດການຄ່າຮຽນ (School Fee Setup)
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
      <!-- Fee Items List -->
      <v-col cols="12" md="5">
        <v-card outlined class="pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <h3 class="text-subtitle-1 font-weight-bold primary--text">ລາຍການຄ່າທໍານຽມ (Fee Items)</h3>
            <v-btn color="primary" small @click="openFeeItemDialog">
              <v-icon left small>mdi-plus</v-icon>
              ເພີ່ມລາຍການ
            </v-btn>
          </div>

          <v-data-table :headers="feeItemHeaders" :items="feeItems" :loading="loadingFeeItems"
            no-data-text="ບໍ່ພົບລາຍການ" class="elevation-0" dense hide-default-footer>
            <template v-slot:item.actions="{ item }">
              <v-btn small icon color="primary" class="mr-1" @click="editFeeItem(item)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn small icon color="error" @click="deleteFeeItem(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>

      <!-- Fee Structures List -->
      <v-col cols="12" md="7">
        <v-card outlined class="pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <h3 class="text-subtitle-1 font-weight-bold primary--text">ກຳນົດອັດຕາຄ່າທໍານຽມ (Fee Structures)</h3>
            <v-btn color="primary" small @click="openFeeStructureDialog">
              <v-icon left small>mdi-plus</v-icon>
              ຕັ້ງຄ່າອັດຕາໃໝ່
            </v-btn>
          </div>

          <v-data-table :headers="feeStructureHeaders" :items="feeStructures" :loading="loadingFeeStructures"
            no-data-text="ບໍ່ພົບອັດຕາທີ່ຕັ້ງໄວ້" class="elevation-0" :items-per-page="10">
            <template v-slot:item.academicYear="{ item }">
              <span v-if="item.academicYear">{{ item.academicYear.name }}</span>
              <span v-else class="grey--text">-</span>
            </template>
            <template v-slot:item.class="{ item }">
              <v-chip v-if="item.schoolClass" small outlined color="primary">{{ item.schoolClass.name }}</v-chip>
              <v-chip v-else small color="teal" dark>ທຸກຊັ້ນຮຽນ (Global)</v-chip>
            </template>
            <template v-slot:item.feeItem="{ item }">
              <span v-if="item.feeItem" class="font-weight-bold">{{ item.feeItem.name }}</span>
              <span v-else class="grey--text">-</span>
            </template>
            <template v-slot:item.amount="{ item }">
              <span class="font-weight-bold text-primary">{{ formatCurrency(item.amount) }} LAK</span>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn small icon color="primary" class="mr-1" @click="editFeeStructure(item)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
              <v-btn small icon color="error" @click="deleteFeeStructure(item)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialogs -->

    <!-- 1. Fee Item Dialog -->
    <v-dialog v-model="feeItemDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          {{ feeItemFormFields.id ? 'ແກ້ໄຂລາຍການຄ່າທໍານຽມ (Edit Fee Item)' : 'ເພີ່ມລາຍການຄ່າທໍານຽມ (New Fee Item)' }}
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="feeItemForm" v-model="feeItemValid">
            <v-text-field v-model="feeItemFormFields.name" label="ຊື່ຄ່າທໍານຽມ (e.g. Tuition, Books) *"
              :rules="[v => !!v || 'ກະລຸນາປ້ອນຊື່ຄ່າທໍານຽມ']" outlined dense></v-text-field>
            <v-textarea v-model="feeItemFormFields.description" label="ຄຳອະທິບາຍ (Description)" outlined dense rows="3"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="feeItemDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveFeeItem" :loading="savingFeeItem" :disabled="!feeItemValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 2. Fee Structure Dialog -->
    <v-dialog v-model="feeStructureDialog" max-width="500px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          {{ feeStructureFormFields.id ? 'ແກ້ໄຂອັດຕາຄ່າທໍານຽມ (Edit Fee Structure)' : 'ກຳນົດອັດຕາຄ່າທໍານຽມ (New Fee Structure)' }}
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="feeStructureForm" v-model="feeStructureValid">
            <v-select v-model="feeStructureFormFields.academicYearId" :items="academicYears" item-text="name" item-value="id"
              label="ປີການສຶກສາ *" :rules="[v => !!v || 'ກະລຸນາເລືອກປີການສຶກສາ']" outlined dense></v-select>

            <v-select v-model="feeStructureFormFields.classId" :items="classes" item-text="name" item-value="id"
              label="ຊັ້ນຮຽນ (ເລືອກຫວ່າງຫາກເປັນຄ່າທໍານຽມທົ່ວໄປ/Global)" outlined dense clearable></v-select>

            <v-select v-model="feeStructureFormFields.feeItemId" :items="feeItems" item-text="name" item-value="id"
              label="ລາຍການຄ່າທໍານຽມ *" :rules="[v => !!v || 'ກະລຸນາເລືອກລາຍການຄ່າທໍານຽມ']" outlined dense></v-select>

            <v-text-field :value="formatInputAmount(feeStructureFormFields.amount)" @input="onAmountInput($event, feeStructureFormFields, 'amount')" label="ຈຳນວນເງິນອັດຕາ *"
              :rules="[
                v => !!v || 'ກະລຸນາປ້ອນຈຳນວນເງິນ',
                v => feeStructureFormFields.amount > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0'
              ]" outlined dense suffix="LAK"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="feeStructureDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="saveFeeStructure" :loading="savingFeeStructure" :disabled="!feeStructureValid">ບັນທຶກ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'SchoolFeeSetupPage',
  middleware: 'auths',
  data() {
    return {
      activeShift: null,
      academicYears: [],
      classes: [],

      // Fee Items list
      feeItems: [],
      loadingFeeItems: false,
      feeItemDialog: false,
      feeItemValid: true,
      savingFeeItem: false,
      feeItemFormFields: {
        id: null,
        name: '',
        description: ''
      },

      // Fee structures list
      feeStructures: [],
      loadingFeeStructures: false,
      feeStructureDialog: false,
      feeStructureValid: true,
      savingFeeStructure: false,
      feeStructureFormFields: {
        id: null,
        academicYearId: null,
        classId: null,
        feeItemId: null,
        amount: 0
      },

      // Headers
      feeItemHeaders: [
        { text: 'ຊື່ລາຍການຄ່າທໍານຽມ', value: 'name' },
        { text: 'ຄຳອະທິບາຍ', value: 'description' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, align: 'center' }
      ],
      feeStructureHeaders: [
        { text: 'ປີການສຶກສາ', value: 'academicYear.name' },
        { text: 'ຊັ້ນຮຽນ', value: 'class' },
        { text: 'ລາຍການ', value: 'feeItem' },
        { text: 'ຈຳນວນເງິນອັດຕາ', value: 'amount', align: 'right' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, align: 'center' }
      ]
    }
  },
  mounted() {
    this.checkActiveShift();
    this.loadAcademicYears();
    this.loadClasses();
    this.loadFeeItems();
    this.loadFeeStructures();
  },
  methods: {
    formatCurrency(value) {
      if (!value && value !== 0) return '0';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    },
    formatInputAmount(value) {
      if (!value && value !== 0) return '';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    },
    onAmountInput(value, formFields, fieldName) {
      const digits = String(value || '').replace(/\D/g, '');
      const number = digits ? parseInt(digits, 10) : 0;
      formFields[fieldName] = number;
    },

    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
      } catch (err) {
        console.error('Error checking active shift:', err);
      }
    },
    async loadAcademicYears() {
      try {
        const res = await this.$axios.get('/api/school/academic-years');
        this.academicYears = res.data || [];
      } catch (err) {
        console.error(err);
      }
    },
    async loadClasses() {
      try {
        const res = await this.$axios.get('/api/school/classes');
        this.classes = (res.data || []).filter(c => c.isActive !== false);
      } catch (err) {
        console.error(err);
      }
    },

    // ---------------------------------
    // FEE ITEMS API BINDINGS
    // ---------------------------------
    async loadFeeItems() {
      this.loadingFeeItems = true;
      try {
        const res = await this.$axios.get('/api/school/fee-items');
        this.feeItems = (res.data || []).filter(item => item.isActive !== false);
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingFeeItems = false;
      }
    },
    openFeeItemDialog() {
      this.feeItemFormFields = { id: null, name: '', description: '' };
      this.feeItemDialog = true;
    },
    editFeeItem(item) {
      this.feeItemFormFields = { ...item };
      this.feeItemDialog = true;
    },
    async saveFeeItem() {
      this.savingFeeItem = true;
      try {
        if (this.feeItemFormFields.id) {
          await this.$axios.put(`/api/school/fee-items/update/${this.feeItemFormFields.id}`, this.feeItemFormFields);
          this.$toast.success('ແກ້ໄຂລາຍການຄ່າທໍານຽມສຳເລັດ');
        } else {
          await this.$axios.post('/api/school/fee-items', this.feeItemFormFields);
          this.$toast.success('ບັນທຶກລາຍການຄ່າທໍານຽມສຳເລັດ');
        }
        this.loadFeeItems();
        this.feeItemDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingFeeItem = false;
      }
    },
    async deleteFeeItem(item) {
      if (confirm('ທ່ານຕ້ອງການລຶບ/ປິດການໃຊ້ງານລາຍການຄ່າທໍານຽມນີ້ແທ້ບໍ່?')) {
        try {
          await this.$axios.delete(`/api/school/fee-items/delete/${item.id}`);
          this.$toast.success('ລຶບລາຍການຄ່າທໍານຽມສຳເລັດ');
          this.loadFeeItems();
        } catch (err) {
          this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດລຶບໄດ້');
        }
      }
    },

    // ---------------------------------
    // FEE STRUCTURES API BINDINGS
    // ---------------------------------
    async loadFeeStructures() {
      this.loadingFeeStructures = true;
      try {
        const res = await this.$axios.get('/api/school/fee-structures');
        this.feeStructures = (res.data || []).filter(item => item.isActive !== false);
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingFeeStructures = false;
      }
    },
    openFeeStructureDialog() {
      this.feeStructureFormFields = {
        id: null,
        academicYearId: this.academicYears[0]?.id || null,
        classId: null,
        feeItemId: this.feeItems[0]?.id || null,
        amount: 0
      };
      this.feeStructureDialog = true;
    },
    editFeeStructure(item) {
      this.feeStructureFormFields = {
        id: item.id,
        academicYearId: item.academicYearId,
        classId: item.classId,
        feeItemId: item.feeItemId,
        amount: item.amount
      };
      this.feeStructureDialog = true;
    },
    async saveFeeStructure() {
      this.savingFeeStructure = true;
      try {
        if (this.feeStructureFormFields.id) {
          await this.$axios.put(`/api/school/fee-structures/update/${this.feeStructureFormFields.id}`, this.feeStructureFormFields);
          this.$toast.success('ແກ້ໄຂອັດຕາຄ່າທໍານຽມສຳເລັດ');
        } else {
          await this.$axios.post('/api/school/fee-structures', this.feeStructureFormFields);
          this.$toast.success('ບັນທຶກອັດຕາຄ່າທໍານຽມສຳເລັດ');
        }
        this.loadFeeStructures();
        this.feeStructureDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດບັນທຶກໄດ້');
      } finally {
        this.savingFeeStructure = false;
      }
    },
    async deleteFeeStructure(item) {
      if (confirm('ທ່ານຕ້ອງການລຶບ/ປິດການໃຊ້ງານອັດຕາຄ່າທໍານຽມນີ້ແທ້ບໍ່?')) {
        try {
          await this.$axios.delete(`/api/school/fee-structures/delete/${item.id}`);
          this.$toast.success('ລຶບອັດຕາຄ່າທໍານຽມສຳເລັດ');
          this.loadFeeStructures();
        } catch (err) {
          this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດລຶບໄດ້');
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
