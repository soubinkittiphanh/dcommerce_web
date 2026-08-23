<template>
  <v-container class="school-billing-dashboard pa-6" fluid>
    <!-- Top Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon size="40" color="primary" class="mr-2">mdi-school-outline</v-icon>
          ລະບົບຈັດການຄ່າຮຽນ (School Reports)
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
    <h2 class="text-h6 font-weight-bold primary--text mb-4">ລາຍງານການເງິນ ແລະ ການກະທົບຍອດ (Financial Reconciliation)</h2>

    <v-row>
      <!-- Daily Cashier Summary -->
      <v-col cols="12" md="6">
        <v-card outlined class="h-100 pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-icon color="primary" class="mr-2">mdi-chart-line</v-icon>
              <span class="text-subtitle-1 font-weight-bold">ຍອດເກັບເງິນປະຈຳວັນ (Daily Collection Summary)</span>
            </div>
            <v-btn icon color="primary" @click="fetchDailyReport">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </div>

          <v-row align="center" class="mb-4">
            <v-col cols="12" sm="8">
              <v-text-field v-model="reportDate" type="date" label="ເລືອກວັນທີ (Select Date)" outlined dense
                hide-details @change="fetchDailyReport"></v-text-field>
            </v-col>
          </v-row>

          <v-divider class="mb-4"></v-divider>

          <!-- Daily Collections List -->
          <v-data-table :headers="dailyReportHeaders" :items="dailyCollections" :loading="loadingDailyReport"
            no-data-text="ບໍ່ມີຍອດເກັບເງິນໃນວັນທີນີ້" class="elevation-0" dense hide-default-footer>
            <template v-slot:item.cashier="{ item }">
              <span class="font-weight-medium">{{ item.cashier }}</span>
            </template>
            <template v-slot:item.paymentMethod="{ item }">
              <v-chip color="info" outlined small>{{ item.paymentMethod }}</v-chip>
            </template>
            <template v-slot:item.totalAmount="{ item }">
              <span class="font-weight-bold">{{ formatCurrency(item.totalAmount) }} LAK</span>
            </template>
          </v-data-table>

          <!-- Daily Total Summary Badge -->
          <v-alert type="success" text class="mt-4 mb-0" icon="mdi-cash">
            <div class="d-flex justify-space-between align-center">
              <span class="font-weight-bold text-subtitle-1">ຍອດເກັບລວມທັງໝົດ:</span>
              <strong class="text-h6 text-success">{{ formatCurrency(dailyReportTotal) }} LAK</strong>
            </div>
          </v-alert>
        </v-card>
      </v-col>

      <!-- Outstanding Balances Report -->
      <v-col cols="12" md="6">
        <v-card outlined class="h-100 pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-icon color="error" class="mr-2">mdi-account-cash</v-icon>
              <span class="text-subtitle-1 font-weight-bold text-error">ຄ້າງຊຳລະສະສົມ (Outstanding Balances)</span>
            </div>
            <div class="d-flex align-center">
              <v-btn color="error" outlined small @click="printOutstandingReport" class="mr-2">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="error" @click="fetchOutstandingReport">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <!-- Filters for outstanding balances -->
          <v-row dense class="mb-2">
            <v-col cols="12" sm="6">
              <v-select v-model="outstandingFilters.classId" :items="classes" item-text="name" item-value="id"
                label="ຊັ້ນຮຽນ (Class)" outlined dense hide-details clearable @change="fetchOutstandingReport"></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select v-model="outstandingFilters.feeItemId" :items="feeItems" item-text="name" item-value="id"
                label="ຄ່າທໍານຽມ (Fee Item)" outlined dense hide-details clearable @change="fetchOutstandingReport"></v-select>
            </v-col>
          </v-row>

          <v-divider class="mb-4"></v-divider>

          <!-- Outstanding Invoices List -->
          <v-data-table :headers="outstandingReportHeaders" :items="outstandingInvoices"
            :loading="loadingOutstandingReport" no-data-text="ບໍ່ມີຍອດຄ້າງຊຳລະ" class="elevation-0" :items-per-page="10">
            <template v-slot:item.student="{ item }">
              <div v-if="item.student" class="font-weight-medium">
                {{ item.student.name || item.studentName }}
                <div class="caption grey--text">ID: {{ item.student.studentId || item.studentId }}</div>
              </div>
            </template>
            <template v-slot:item.invoiceNumber="{ item }">
              <div class="font-weight-medium">{{ item.invoiceNumber }}</div>
              <div v-if="item.feeItemDetail" class="caption teal--text font-weight-bold">{{ item.feeItemDetail }}</div>
            </template>
            <template v-slot:item.parent="{ item }">
              <div v-if="item.student && item.student.parentName" class="caption">
                {{ item.student.parentName }}
                <div class="text-info font-weight-bold">{{ item.student.parentPhone }}</div>
              </div>
              <div v-else-if="item.parentName" class="caption">
                {{ item.parentName }}
                <div class="text-info font-weight-bold">{{ item.parentPhone }}</div>
              </div>
              <span v-else class="grey--text">-</span>
            </template>
            <template v-slot:item.balanceAmount="{ item }">
              <span class="text-error font-weight-bold">{{ formatCurrency(item.balanceAmount) }} LAK</span>
            </template>
            <template v-slot:item.dueDate="{ item }">
              <span :class="isOverdue(item.dueDate) ? 'text-error font-weight-bold' : ''">
                {{ formatDate(item.dueDate) }}
              </span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Class & Room Invoice Summary Report -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card outlined class="pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-icon color="primary" class="mr-2">mdi-google-classroom</v-icon>
              <span class="text-subtitle-1 font-weight-bold">ລາຍງານຍອດເກັບເງິນຕາມຊັ້ນຮຽນ ແລະ ຫ້ອງຮຽນ (Class & Room Invoice Summary)</span>
            </div>
            <div class="d-flex align-center">
              <v-btn color="primary" outlined small @click="printClassRoomSummary" class="mr-2">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="primary" @click="fetchClassRoomSummary">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <v-divider class="mb-4"></v-divider>

          <v-data-table :headers="classRoomSummaryHeaders" :items="classRoomSummary" :loading="loadingClassRoomSummary"
            no-data-text="ບໍ່ມີຂໍ້ມູນຍອດເກັບເງິນຕາມຊັ້ນ ແລະ ຫ້ອງ" class="elevation-0" dense>
            <template v-slot:item.className="{ item }">
              <span class="font-weight-bold">{{ item.className }}</span>
            </template>
            <template v-slot:item.roomName="{ item }">
              <span class="font-weight-medium text-info">{{ item.roomName }}</span>
            </template>
            <template v-slot:item.totalAmount="{ item }">
              <span>{{ formatCurrency(item.totalAmount) }} LAK</span>
            </template>
            <template v-slot:item.paidAmount="{ item }">
              <span class="text-success font-weight-bold">{{ formatCurrency(item.paidAmount) }} LAK</span>
            </template>
            <template v-slot:item.balanceAmount="{ item }">
              <span class="text-error font-weight-bold">{{ formatCurrency(item.balanceAmount) }} LAK</span>
            </template>
            <template v-slot:item.completion="{ item }">
              <div class="d-flex align-center">
                <v-progress-linear :value="getCompletionPercentage(item)" color="success" height="15" rounded>
                  <template v-slot:default="{ value }">
                    <strong class="white--text" style="font-size: 9px;">{{ Math.round(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Fee Item Invoice Summary Report -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card outlined class="pa-4 elevation-1">
          <div class="d-flex justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-icon color="teal" class="mr-2">mdi-cash-multiple</v-icon>
              <span class="text-subtitle-1 font-weight-bold">ລາຍງານຍອດເກັບເງິນຕາມປະເພດຄ່າທໍານຽມ (Fee Item Invoice Summary)</span>
            </div>
            <div class="d-flex align-center">
              <v-btn color="primary" outlined small @click="printFeeItemSummary" class="mr-2">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ (Print)
              </v-btn>
              <v-btn icon color="primary" @click="fetchFeeItemSummary">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </div>
          </div>

          <v-divider class="mb-4"></v-divider>

          <v-data-table :headers="feeItemSummaryHeaders" :items="feeItemSummary" :loading="loadingFeeItemSummary"
            no-data-text="ບໍ່ມີຂໍ້ມູນຍອດເກັບເງິນຕາມປະເພດຄ່າທໍານຽມ" class="elevation-0" dense>
            <template v-slot:item.feeItemName="{ item }">
              <span class="font-weight-bold">{{ item.feeItemName }}</span>
            </template>
            <template v-slot:item.totalBilled="{ item }">
              <span>{{ formatCurrency(item.totalBilled) }} LAK</span>
            </template>
            <template v-slot:item.totalPaid="{ item }">
              <span class="text-success font-weight-bold">{{ formatCurrency(item.totalPaid) }} LAK</span>
            </template>
            <template v-slot:item.totalPending="{ item }">
              <span class="text-error font-weight-bold">{{ formatCurrency(item.totalPending) }} LAK</span>
            </template>
            <template v-slot:item.completion="{ item }">
              <div class="d-flex align-center">
                <v-progress-linear :value="getFeeItemCompletionPercentage(item)" color="success" height="15" rounded>
                  <template v-slot:default="{ value }">
                    <strong class="white--text" style="font-size: 9px;">{{ Math.round(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { generateClassRoomSummaryReportHTML, generateFeeItemSummaryReportHTML, generateOutstandingBalancesReportHTML } from '~/common/printTemplates';

export default {
  name: 'SchoolReportsPage',
  middleware: 'auths',
  data() {
    return {
      activeShift: null,

      reportDate: new Date().toISOString().split('T')[0],
      dailyReportTotal: 0,
      dailyCollections: [],
      loadingDailyReport: false,

      outstandingFilters: {
        classId: null,
        feeItemId: null
      },
      classes: [],
      feeItems: [],
      outstandingInvoices: [],
      loadingOutstandingReport: false,

      classRoomSummary: [],
      loadingClassRoomSummary: false,

      feeItemSummary: [],
      loadingFeeItemSummary: false,

      // Headers
      dailyReportHeaders: [
        { text: 'ແຄັດເຊຍ (Cashier)', value: 'cashier' },
        { text: 'ຮູບແບບການຊຳລະ', value: 'paymentMethod', align: 'center' },
        { text: 'ຍອດເກັບລວມ', value: 'totalAmount', align: 'right' }
      ],
      outstandingReportHeaders: [
        { text: 'ນັກຮຽນ (Student)', value: 'student' },
        { text: 'ເລກໃບບິນ', value: 'invoiceNumber' },
        { text: 'ຜູ້ປົກຄອງ (Parent Contact)', value: 'parent' },
        { text: 'ຍອດຄ້າງຊຳລະ', value: 'balanceAmount', align: 'right' },
        { text: 'ວັນຄົບກຳນົດ', value: 'dueDate', align: 'center' }
      ],
      classRoomSummaryHeaders: [
        { text: 'ຊັ້ນຮຽນ (Class)', value: 'className' },
        { text: 'ຫ້ອງຮຽນ (Room)', value: 'roomName' },
        { text: 'ຈຳນວນໃບບິນ (Invoices)', value: 'totalInvoices', align: 'center' },
        { text: 'ຊຳລະແລ້ວ (Paid Invoices)', value: 'paidCount', align: 'center' },
        { text: 'ຍັງຄ້າງຊຳລະ (Pending)', value: 'pendingCount', align: 'center' },
        { text: 'ຍອດລວມທັງໝົດ (Total Bill)', value: 'totalAmount', align: 'right' },
        { text: 'ຊຳລະແລ້ວ (Total Paid)', value: 'paidAmount', align: 'right' },
        { text: 'ຍອດຄ້າງຊຳລະ (Total Pending)', value: 'balanceAmount', align: 'right' },
        { text: 'ເປີເຊັນຊຳລະ (% Paid)', value: 'completion', align: 'center', width: '150px' }
      ],
      feeItemSummaryHeaders: [
        { text: 'ປະເພດຄ່າທໍານຽມ (Fee Item)', value: 'feeItemName' },
        { text: 'ຈຳນວນລາຍການ (Count)', value: 'lineCount', align: 'center' },
        { text: 'ຍອດລວມທັງໝົດ (Total Billed)', value: 'totalBilled', align: 'right' },
        { text: 'ຊຳລະແລ້ວ (Total Paid)', value: 'totalPaid', align: 'right' },
        { text: 'ຍອດຄ້າງຊຳລະ (Total Pending)', value: 'totalPending', align: 'right' },
        { text: 'ເປີເຊັນຊຳລະ (% Paid)', value: 'completion', align: 'center', width: '150px' }
      ]
    }
  },
  mounted() {
    this.checkActiveShift();
    this.loadClasses();
    this.loadFeeItems();
    this.fetchDailyReport();
    this.fetchOutstandingReport();
    this.fetchClassRoomSummary();
    this.fetchFeeItemSummary();
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
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    },

    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
      } catch (err) {
        console.error('Error checking active shift:', err);
      }
    },
    async loadClasses() {
      try {
        const res = await this.$axios.get('/api/school/classes');
        this.classes = (res.data || []).filter(c => c.isActive !== false);
      } catch (err) {
        console.error('Error fetching classes:', err);
      }
    },
    async loadFeeItems() {
      try {
        const res = await this.$axios.get('/api/school/fee-items');
        this.feeItems = (res.data || []).filter(f => f.isActive !== false);
      } catch (err) {
        console.error('Error fetching fee items:', err);
      }
    },

    async fetchDailyReport() {
      this.loadingDailyReport = true;
      try {
        const res = await this.$axios.get('/api/school/reports/daily-collections', {
          params: { date: this.reportDate }
        });
        const list = res.data?.collections || [];
        this.dailyCollections = list;
        this.dailyReportTotal = list.reduce((sum, item) => sum + Number(item.totalAmount || 0), 0);
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingDailyReport = false;
      }
    },
    async fetchOutstandingReport() {
      this.loadingOutstandingReport = true;
      try {
        const res = await this.$axios.get('/api/school/reports/overdue-balances', {
          params: {
            classId: this.outstandingFilters.classId,
            feeItemId: this.outstandingFilters.feeItemId
          }
        });
        this.outstandingInvoices = res.data || [];
      } catch (err) {
        console.error(err);
      } finally {
        this.loadingOutstandingReport = false;
      }
    },
    async fetchClassRoomSummary() {
      this.loadingClassRoomSummary = true;
      try {
        const res = await this.$axios.get('/api/school/reports/class-room-summary');
        this.classRoomSummary = res.data || [];
      } catch (err) {
        console.error(err);
        this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍງານຕາມຊັ້ນ ແລະ ຫ້ອງຮຽນໄດ້');
      } finally {
        this.loadingClassRoomSummary = false;
      }
    },
    getCompletionPercentage(item) {
      if (!item.totalAmount) return 0;
      return (item.paidAmount / item.totalAmount) * 100;
    },
    printClassRoomSummary() {
      if (!this.classRoomSummary || this.classRoomSummary.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນທີ່ຈະພິມ');
        return;
      }
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateClassRoomSummaryReportHTML(this.classRoomSummary, companyData);
        
        const printWindow = window.open('', '_blank', 'width=1024,height=768');
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
        this.$toast.error('Failed to generate print view');
      }
    },
    async fetchFeeItemSummary() {
      this.loadingFeeItemSummary = true;
      try {
        const res = await this.$axios.get('/api/school/reports/fee-item-summary');
        this.feeItemSummary = res.data || [];
      } catch (err) {
        console.error(err);
        this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍງານຕາມປະເພດຄ່າທໍານຽມໄດ້');
      } finally {
        this.loadingFeeItemSummary = false;
      }
    },
    getFeeItemCompletionPercentage(item) {
      if (!item.totalBilled) return 0;
      return (item.totalPaid / item.totalBilled) * 100;
    },
    printFeeItemSummary() {
      if (!this.feeItemSummary || this.feeItemSummary.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນທີ່ຈະພິມ');
        return;
      }
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateFeeItemSummaryReportHTML(this.feeItemSummary, companyData);
        
        const printWindow = window.open('', '_blank', 'width=1024,height=768');
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
        this.$toast.error('Failed to generate print view');
      }
    },
    printOutstandingReport() {
      if (!this.outstandingInvoices || this.outstandingInvoices.length === 0) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນທີ່ຈະພິມ');
        return;
      }
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        
        const selectedClass = this.classes.find(c => c.id === this.outstandingFilters.classId);
        const selectedFeeItem = this.feeItems.find(f => f.id === this.outstandingFilters.feeItemId);
        
        const filterNames = {
          className: selectedClass ? selectedClass.name : '',
          feeItemName: selectedFeeItem ? selectedFeeItem.name : ''
        };

        const htmlContent = generateOutstandingBalancesReportHTML(
          this.outstandingInvoices,
          companyData,
          filterNames
        );
        
        const printWindow = window.open('', '_blank', 'width=1024,height=768');
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
        this.$toast.error('Failed to generate print view');
      }
    }
  }
}
</script>

<style scoped>
.school-billing-dashboard * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
.bg-light {
  background-color: #f8f9fa !important;
}
.h-100 {
  height: 100%;
}
</style>
