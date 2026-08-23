<template>
  <v-container class="school-billing-dashboard pa-6" fluid>
    <!-- Top Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon size="40" color="primary" class="mr-2">mdi-school-outline</v-icon>
          ລະບົບຈັດການຄ່າຮຽນ (Cashier Shift Control)
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
      <v-chip v-else color="error" dark class="px-4 py-2 font-weight-bold" elevation="1">
        <v-icon left>mdi-cash-register-off</v-icon>
        ບໍ່ມີກະເປົາເປີດ (No Active Shift)
      </v-chip>
    </div>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <!-- If active shift exists -->
        <v-card v-if="activeShift" class="pa-6 text-center elevation-2" outlined>
          <v-icon size="80" color="success" class="mb-4">mdi-cash-register</v-icon>
          <h3 class="text-h5 font-weight-bold success--text mb-2">ກະເປົາເງິນກຳລັງເປີດໃຊ້ງານ (Shift Open)</h3>
          <p class="grey--text text--darken-2">ທ່ານສາມາດຮັບຊຳລະຄ່າຮຽນຜ່ານໃບບິນໄດ້ຕາມປົກກະຕິ</p>

          <v-divider class="my-6"></v-divider>

          <div class="text-left px-6">
            <v-row dense class="mb-2">
              <v-col cols="6" class="font-weight-bold">Shift ID:</v-col>
              <v-col cols="6" class="text-right">#{{ activeShift.id }}</v-col>
            </v-row>
            <v-row dense class="mb-2">
              <v-col cols="6" class="font-weight-bold">ເວລາເປີດ (Open Time):</v-col>
              <v-col cols="6" class="text-right">{{ formatDateTime(activeShift.openTime) }}</v-col>
            </v-row>
            <v-row dense class="mb-2">
              <v-col cols="6" class="font-weight-bold">ເງິນເປີດກະເປົາ (Opening Cash):</v-col>
              <v-col cols="6" class="text-right text-primary font-weight-bold">{{ formatCurrency(activeShift.openingCash) }} LAK</v-col>
            </v-row>
            <v-row dense class="mb-2">
              <v-col cols="6" class="font-weight-bold">ສະຖານະ (Status):</v-col>
              <v-col cols="6" class="text-right text-success font-weight-bold">OPEN</v-col>
            </v-row>
          </div>

          <v-divider class="my-6"></v-divider>

          <v-btn color="error" block large @click="openCloseShiftDialog" class="mb-3">
            <v-icon left>mdi-lock</v-icon>
            ປິດກະເປົາ/ສະຫຼຸບຍອດ (Close Cashier Shift)
          </v-btn>

          <v-btn color="primary" outlined block large @click="printActiveShiftReport">
            <v-icon left>mdi-printer</v-icon>
            ພິມລາຍງານ Shift (Print Shift Report)
          </v-btn>
        </v-card>

        <!-- If no active shift exists -->
        <v-card v-else class="pa-6 text-center elevation-2" outlined>
          <v-icon size="80" color="error" class="mb-4">mdi-cash-register-off</v-icon>
          <h3 class="text-h5 font-weight-bold error--text mb-2">ບໍ່ມີກະເປົາເງິນເປີດຢູ່ (No Active Shift)</h3>
          <p class="grey--text text--darken-2">
            ກະລຸນາເປີດກະເປົາເງິນ (Cashier Shift) ກ່ອນ ເພື່ອບັນທຶກການຊຳລະເງິນ ແລະ ທຳທຸລະກຳ
          </p>

          <v-divider class="my-6"></v-divider>

          <v-btn color="primary" block large @click="shiftOpenDialog = true">
            <v-icon left>mdi-key</v-icon>
            ເປີດກະເປົາເຮັດວຽກ (Open Cashier Shift)
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialogs -->

    <!-- 1. Open Cashier Shift Dialog -->
    <v-dialog v-model="shiftOpenDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          <v-icon left color="white">mdi-cash-register</v-icon>
          ເປີດກະເປົາເງິນ (Open Cashier Shift)
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="shiftOpenForm">
            <v-text-field :value="formatInputAmount(shiftFormFields.openingCash)" @input="onAmountInput($event, shiftFormFields, 'openingCash')" label="ເງິນສົດເລີ່ມຕົ້ນ (Opening Cash) *"
              outlined dense suffix="LAK" :rules="[v => shiftFormFields.openingCash >= 0 || 'ຕ້ອງເປັນຄ່າບວກ']"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="shiftOpenDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="openShift" :loading="savingShift">ຢືນຢັນເປີດ Shift</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 2. Close Cashier Shift Dialog -->
    <v-dialog v-model="shiftCloseDialog" max-width="400px" persistent>
      <v-card>
        <v-card-title class="error white--text font-weight-bold">
          <v-icon left color="white">mdi-lock</v-icon>
          `ປິດກະເປົາເງິນ (Close Cashier Shift)`
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="shiftCloseForm">
            <v-text-field :value="formatInputAmount(shiftFormFields.closingCash)" @input="onAmountInput($event, shiftFormFields, 'closingCash')" label="ເງິນສົດສະຫຼຸບປິດ (Closing Cash) *"
              outlined dense suffix="LAK" :rules="[v => shiftFormFields.closingCash >= 0 || 'ຕ້ອງເປັນຄ່າບວກ']"></v-text-field>
          </v-form>
          <v-alert type="error" text outlined icon="mdi-alert" class="mt-2 mb-0">
            ເມື່ອປິດ Shift ແລ້ວ ທ່ານຈະບໍ່ສາມາດຮັບຊຳລະເງິນໄດ້ຈົນກວ່າຈະເປີດ Shift ໃໝ່.
          </v-alert>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="shiftCloseDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="error" @click="closeShift" :loading="savingShift">ຢືນຢັນປິດ Shift</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { generateSchoolShiftReportHTML } from '~/common/printTemplates';

export default {
  name: 'SchoolShiftsPage',
  middleware: 'auths',
  data() {
    return {
      activeShift: null,
      savingShift: false,
      shiftOpenDialog: false,
      shiftCloseDialog: false,
      shiftFormFields: {
        openingCash: 0,
        closingCash: 0
      }
    }
  },
  mounted() {
    this.checkActiveShift();
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
    formatDateTime(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleString('en-GB');
    },

    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
      } catch (err) {
        this.activeShift = null;
      }
    },
    async openShift() {
      this.savingShift = true;
      try {
        const res = await this.$axios.post('/api/school/shifts/open', {
          openingCash: this.shiftFormFields.openingCash
        });
        this.activeShift = res.data.shift || res.data;
        this.$toast.success('ເປີດ Shift ສຳເລັດແລ້ວ');
        this.shiftOpenDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດເປີດ Shift ໄດ້');
      } finally {
        this.savingShift = false;
      }
    },
    openCloseShiftDialog() {
      this.shiftFormFields.closingCash = this.activeShift ? this.activeShift.openingCash : 0;
      this.shiftCloseDialog = true;
    },
    async closeShift() {
      if (!this.activeShift) return;
      this.savingShift = true;
      try {
        await this.$axios.put(`/api/school/shifts/close/${this.activeShift.id}`, {
          closingCash: this.shiftFormFields.closingCash
        });
        this.activeShift = null;
        this.$toast.success('ປິດ Shift ສຳເລັດແລ້ວ');
        this.shiftCloseDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດປິດ Shift ໄດ້');
      } finally {
        this.savingShift = false;
      }
    },
    async printActiveShiftReport() {
      if (!this.activeShift) return;
      try {
        const res = await this.$axios.get(`/api/school/shifts/report/${this.activeShift.id}`);
        const reportData = res.data;
        const companyData = this.$store.getters.findAllCompany[0] || {};
        
        const htmlContent = generateSchoolShiftReportHTML(reportData, companyData);
        
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('ບໍ່ສາມາດດຶງຂໍ້ມູນລາຍງານ Shift ເພື່ອພິມໄດ້');
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
