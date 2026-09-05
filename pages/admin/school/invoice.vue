<template>
  <v-container class="school-billing-dashboard pa-6" fluid>
    <!-- Top Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon size="40" color="primary" class="mr-2">mdi-school-outline</v-icon>
          ລະບົບຈັດການຄ່າຮຽນ (School Invoices)
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
    <v-card class="pa-4">
      <div class="d-flex justify-space-between align-center mb-4">
        <h2 class="text-h6 font-weight-bold primary--text">ລາຍການໃບບິນຄ່າຮຽນ (School Invoices)</h2>
        <div class="d-flex">
          <v-btn color="secondary" @click="openBulkDialog" dark class="mr-2">
            <v-icon left>mdi-plus-box-multiple</v-icon>
            ສ້າງໃບບິນກຸ່ມ (Bulk Generate)
          </v-btn>
          <v-btn color="primary" outlined @click="loadInvoices">
            <v-icon left>mdi-refresh</v-icon>
            ໂຫຼດໃໝ່ (Refresh)
          </v-btn>
        </div>
      </div>

      <!-- Invoice Filter Toolbar -->
      <v-card outlined class="pa-4 mb-4 bg-light">
        <v-row dense>
          <v-col cols="12" sm="2">
            <v-select v-model="filters.academicYearId" :items="academicYears" item-text="name" item-value="id"
              label="ປີການສຶກສາ (Academic Year)" outlined dense clearable @change="loadInvoices"></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select v-model="filters.classId" :items="classes" item-text="name" item-value="id"
              label="ຊັ້ນຮຽນ/ຫ້ອງຮຽນ (Class)" outlined dense clearable @change="loadInvoices"></v-select>
          </v-col>
          <v-col cols="12" sm="2">
            <v-select v-model="filters.status" :items="invoiceStatuses" label="ສະຖານະ (Status)" outlined dense
              clearable @change="loadInvoices"></v-select>
          </v-col>
          <v-col cols="12" sm="2">
            <v-text-field
              v-model="filters.billingMonth"
              type="month"
              label="ເດືອນອອກໃບບິນ"
              outlined
              dense
              clearable
              @change="loadInvoices"
              @click:clear="filters.billingMonth = ''; loadInvoices()"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field v-model="filters.search" label="ຄົ້ນຫາ (ເລກໃບບິນ, ລະຫັດນັກຮຽນ...)" outlined dense
              append-icon="mdi-magnify" clearable @keyup.enter="loadInvoices"></v-text-field>
          </v-col>
        </v-row>
      </v-card>

      <!-- Class Payment Progress KPI Section -->
      <v-row dense class="mb-4" v-if="filters.classId">
        <v-col cols="12" sm="3">
          <v-card color="indigo lighten-5" class="pa-4 text-center elevation-1" outlined>
            <div class="text-overline mb-1 font-weight-bold grey--text text--darken-2">ນັກຮຽນທັງໝົດໃນຊັ້ນ (Total Students)</div>
            <div class="text-h4 font-weight-black primary--text">{{ classSummary.total }}</div>
            <div class="caption grey--text">ອອກໃບບິນແລ້ວທັງໝົດ</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="green lighten-5" class="pa-4 text-center elevation-1" outlined>
            <div class="text-overline mb-1 font-weight-bold green--text text--darken-3">ຊຳລະຄົບຖ້ວນ (Fully Paid)</div>
            <div class="text-h4 font-weight-black green--text">{{ classSummary.paid }}</div>
            <div class="caption green--text text--darken-2">ຄິດເປັນ: {{ classSummary.paidPercent }}%</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="orange lighten-5" class="pa-4 text-center elevation-1" outlined>
            <div class="text-overline mb-1 font-weight-bold orange--text text--darken-3">ຊຳລະບາງສ່ວນ (Partially Paid)</div>
            <div class="text-h4 font-weight-black orange--text">{{ classSummary.partial }}</div>
            <div class="caption orange--text text--darken-2">ຄິດເປັນ: {{ classSummary.partialPercent }}%</div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="red lighten-5" class="pa-4 text-center elevation-1" outlined>
            <div class="text-overline mb-1 font-weight-bold red--text text--darken-3">ຍັງບໍ່ຊຳລະ (Unpaid)</div>
            <div class="text-h4 font-weight-black red--text">{{ classSummary.unpaid }}</div>
            <div class="caption red--text text--darken-2">ຄິດເປັນ: {{ classSummary.unpaidPercent }}%</div>
          </v-card>
        </v-col>

        <!-- Progress Bar -->
        <v-col cols="12">
          <v-card outlined class="pa-3 bg-light">
            <div class="d-flex justify-space-between align-center mb-1">
              <span class="caption font-weight-bold font-family-lao">ອັດຕາການຊຳລະຄົບຖ້ວນຂອງຊັ້ນຮຽນ (Class Payment Rate):</span>
              <span class="caption font-weight-bold text-success">{{ classSummary.paidPercent }}%</span>
            </div>
            <v-progress-linear :value="classSummary.paidPercent" color="success" height="10" rounded reactive striped></v-progress-linear>
          </v-card>
        </v-col>
      </v-row>

      <!-- Invoices Data Table -->
      <v-data-table :headers="invoiceHeaders" :items="invoices" :loading="loadingInvoices"
        loading-text="ກຳລັງໂຫຼດຂໍ້ມູນໃບບິນ..." no-data-text="ບໍ່ມີຂໍ້ມູນໃບບິນ" class="elevation-0" :items-per-page="15">
        <template v-slot:item.index="{ item }">
          {{ invoices.indexOf(item) + 1 }}
        </template>
        <template v-slot:item.student="{ item }">
          <div v-if="item.student">
            <span class="font-weight-bold">{{ item.student.firstName }} {{ item.student.lastName }}</span>
            <div class="caption grey--text">Code: {{ item.student.studentId }}</div>
          </div>
          <span v-else class="grey--text">-</span>
        </template>
        <template v-slot:item.class="{ item }">
          <span v-if="item.student && item.student.schoolClass">
            {{ item.student.schoolClass.name }}<span v-if="item.student.schoolRoom" class="grey--text text--darken-1"> - {{ item.student.schoolRoom.name }}</span><span v-else-if="item.student.room" class="grey--text text--darken-1"> - {{ item.student.room }}</span>
          </span>
          <span v-else-if="item.student && item.student.schoolRoom">
            {{ item.student.schoolRoom.name }}
          </span>
          <span v-else-if="item.student && item.student.room">
            {{ item.student.room }}
          </span>
          <span v-else class="grey--text">-</span>
        </template>
        <template v-slot:item.billingMonth="{ item }">
          <span v-if="item.billingMonth" class="font-weight-bold">{{ item.billingMonth }}</span>
          <span v-else class="grey--text">-</span>
        </template>
        <template v-slot:item.totalAmount="{ item }">
          <span class="font-weight-bold">{{ formatCurrency(item.totalAmount) }}</span>
        </template>
        <template v-slot:item.paidAmount="{ item }">
          <span class="text-success font-weight-bold">{{ formatCurrency(item.paidAmount) }}</span>
        </template>
        <template v-slot:item.balanceAmount="{ item }">
          <span class="text-error font-weight-bold">{{ formatCurrency(item.balanceAmount) }}</span>
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" dark small font-weight-bold>
            {{ getStatusText(item.status) }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn small color="primary" class="mr-2" @click="viewInvoiceDetails(item)">
            <v-icon left small>mdi-eye</v-icon>
            ລາຍລະອຽດ
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- DIALOGS SECTION -->

    <!-- 1. Bulk Generate Invoices Dialog -->
    <v-dialog v-model="bulkDialog" max-width="500px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          <v-icon left color="white">mdi-plus-box-multiple</v-icon>
          ສ້າງໃບບິນກຸ່ມ (Bulk Generate Invoices)
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="bulkForm" v-model="bulkValid">
            <v-select v-model="bulkFormFields.academicYearId" :items="academicYears" item-text="name" item-value="id"
              label="ເລືອກປີການສຶກສາ *" :rules="[v => !!v || 'ກະລຸນາເລືອກປີການສຶກສາ']" outlined dense></v-select>

            <v-select v-model="bulkFormFields.classId" :items="classes" item-text="name" item-value="id"
              label="ເລືອກຊັ້ນຮຽນ/ຫ້ອງຮຽນ *" :rules="[v => !!v || 'ກະລຸນາເລືອກຊັ້ນຮຽນ']" outlined dense></v-select>

            <v-text-field
              v-model="bulkFormFields.billingMonth"
              type="month"
              label="ເລືອກເດືອນອອກໃບບິນ (Billing Month) *"
              outlined
              dense
              :rules="[v => !!v || 'ກະລຸນາເລືອກເດືອນອອກໃບບິນ']"
            ></v-text-field>

            <v-text-field v-model="bulkFormFields.dueDate" type="date" label="ວັນຄົບກຳນົດຊຳລະ (Due Date)" outlined dense></v-text-field>

            <v-alert type="warning" text outlined icon="mdi-alert" class="mt-2 mb-0">
              ລະບົບຈະສ້າງໃບບິນຄ່າຮຽນໃຫ້ກັບ <strong>ນັກຮຽນທຸກຄົນ</strong> ທີ່ຢູ່ໃນຊັ້ນຮຽນນີ້ ໂດຍອີງຕາມອັດຕາຄ່າທໍານຽມທີ່ກຳນົດໄວ້.
            </v-alert>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="bulkDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="primary" @click="generateBulkInvoices" :loading="generatingBulk" :disabled="!bulkValid">ສ້າງໃບບິນ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 2. Invoice Details & Payment Dialog -->
    <v-dialog v-model="invoiceDetailDialog" max-width="800px" persistent scrollable>
      <v-card v-if="selectedInvoice">
        <v-card-title class="primary white--text d-flex justify-space-between align-center font-weight-bold">
          <span>ໃບບິນຄ່າຮຽນ: {{ selectedInvoice.invoiceNumber }}</span>
          <v-chip :color="getStatusColor(selectedInvoice.status)" dark small>
            {{ getStatusText(selectedInvoice.status) }}
          </v-chip>
        </v-card-title>

        <v-card-text class="pt-4" style="max-height: 70vh;">
          <v-row>
            <!-- Student Details -->
            <v-col cols="12" md="6">
              <h3 class="text-subtitle-1 font-weight-bold primary--text mb-2">ຂໍ້ມູນນັກຮຽນ (Student details)</h3>
              <v-card outlined class="pa-3 bg-light">
                <div><strong>ຊື່ ແລະ ນາມສະກຸນ:</strong> {{ selectedInvoice.student ? selectedInvoice.student.firstName + ' ' + selectedInvoice.student.lastName : '-' }}</div>
                <div><strong>ລະຫັດນັກຮຽນ:</strong> {{ selectedInvoice.student ? selectedInvoice.student.studentId : '-' }}</div>
                <div><strong>ຊັ້ນຮຽນ/ Grade:</strong> {{ selectedInvoice.student && selectedInvoice.student.schoolClass ? selectedInvoice.student.schoolClass.name : (selectedInvoice.student ? selectedInvoice.student.grade : '-') }}<span v-if="selectedInvoice.student && selectedInvoice.student.schoolRoom"> - {{ selectedInvoice.student.schoolRoom.name }}</span><span v-else-if="selectedInvoice.student && selectedInvoice.student.room"> - {{ selectedInvoice.student.room }}</span></div>
                <div><strong>ໂທລະສັບ:</strong> {{ selectedInvoice.student ? selectedInvoice.student.phoneNumber : '-' }}</div>
                <div v-if="selectedInvoice.student && selectedInvoice.student.parentName"><strong>ຜູ້ປົກຄອງ (Parent):</strong> {{ selectedInvoice.student.parentName }}</div>
                <div v-if="selectedInvoice.student && selectedInvoice.student.parentPhone"><strong>ເບີໂທຜູ້ປົກຄອງ (Parent Phone):</strong> {{ selectedInvoice.student.parentPhone }}</div>
              </v-card>
            </v-col>

            <!-- Invoice Metadata -->
            <v-col cols="12" md="6">
              <h3 class="text-subtitle-1 font-weight-bold primary--text mb-2">ລາຍລະອຽດໃບບິນ (Invoice metadata)</h3>
              <v-card outlined class="pa-3 bg-light">
                <div><strong>ເລກໃບບິນ:</strong> {{ selectedInvoice.invoiceNumber }}</div>
                <div><strong>ເດືອນອອກໃບບິນ (Month):</strong> <v-chip x-small color="primary" class="font-weight-bold">{{ selectedInvoice.billingMonth || '-' }}</v-chip></div>
                <div><strong>ປີການສຶກສາ:</strong> {{ selectedInvoice.academicYear ? selectedInvoice.academicYear.name : '-' }}</div>
                <div><strong>ວັນທີສ້າງ:</strong> {{ formatDateTime(selectedInvoice.createdAt) }}</div>
                <div><strong>ວັນຄົບກຳນົດ:</strong> {{ formatDate(selectedInvoice.dueDate) }}</div>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <!-- Itemized lines breakdown -->
          <h3 class="text-subtitle-1 font-weight-bold primary--text mb-2">ລາຍການຄ່າທໍານຽມ (Items Breakdown)</h3>
          <v-simple-table outlined class="mb-4">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">#</th>
                  <th class="text-left">ລາຍການຄ່າທໍານຽມ (Item Description)</th>
                  <th class="text-right">ຈຳນວນເງິນ (Amount)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(line, index) in selectedInvoice.lines" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ line.description || (line.feeItem ? line.feeItem.name : 'School Fee') }}</td>
                  <td class="text-right font-weight-bold">{{ formatCurrency(line.amount) }} LAK</td>
                </tr>
                <!-- Totals Summary row -->
                <tr class="grey lighten-4">
                  <td colspan="2" class="text-right font-weight-bold">ລວມທັງໝົດ (Total Amount):</td>
                  <td class="text-right font-weight-bold text-h6 primary--text">{{ formatCurrency(selectedInvoice.totalAmount) }} LAK</td>
                </tr>
                <tr class="grey lighten-4">
                  <td colspan="2" class="text-right font-weight-bold text-success">ຊຳລະແລ້ວ (Paid Amount):</td>
                  <td class="text-right font-weight-bold text-success">{{ formatCurrency(selectedInvoice.paidAmount) }} LAK</td>
                </tr>
                <tr class="grey lighten-4">
                  <td colspan="2" class="text-right font-weight-bold text-error">ຄ້າງຊຳລະ (Remaining Balance):</td>
                  <td class="text-right font-weight-bold text-error text-h6">{{ formatCurrency(selectedInvoice.balanceAmount) }} LAK</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <!-- Quick Payment Section if Unpaid / Partial -->
          <div v-if="selectedInvoice.status !== 'PAID'">
            <v-divider class="my-4"></v-divider>
            <div class="d-flex align-center justify-space-between mb-3">
              <h3 class="text-subtitle-1 font-weight-bold text-success">ຮັບຊຳລະເງິນ (Collect Payment)</h3>
              <v-chip v-if="!activeShift" color="error" small class="font-weight-bold">
                <v-icon left x-small>mdi-alert-circle</v-icon>
                ຕ້ອງເປີດ Shift ກ່ອນຈຶ່ງຮັບຊຳລະໄດ້
              </v-chip>
            </div>

            <!-- Collect Payment Form -->
            <v-card class="pa-4 bg-light-green" outlined>
              <v-form ref="paymentForm" v-model="paymentValid">
                <v-row dense>
                  <v-col cols="12" sm="4">
                    <v-text-field :value="formatInputAmount(paymentFormFields.amount)" @input="onAmountInput($event, paymentFormFields, 'amount'); checkCappingRule();" label="ຈຳນວນເງິນຊຳລະ *"
                      :rules="[
                        v => !!v || 'ກະລຸນາປ້ອນຈຳນວນເງິນ',
                        v => paymentFormFields.amount > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0'
                      ]" outlined dense suffix="LAK"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-select v-model="paymentFormFields.paymentMethodId" :items="paymentMethods" item-text="payment_name"
                      item-value="id" label="ຊ່ອງທາງການຊຳລະ *" :rules="[v => !!v || 'ກະລຸນາເລືອກຊ່ອງທາງ']"
                      outlined dense></v-select>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-text-field v-model="paymentFormFields.referenceNo" label="ເລກອ້າງອີງ (Ref No.)" outlined dense></v-text-field>
                  </v-col>
                </v-row>
              </v-form>

              <!-- Payment excess warning -->
              <v-alert v-if="paymentWarning" type="error" dense class="mt-2 mb-0" icon="mdi-alert-octagon">
                {{ paymentWarning }}
              </v-alert>

              <div class="d-flex justify-end mt-3">
                <v-btn color="success" :disabled="!paymentValid || !activeShift || !!paymentWarning"
                  :loading="submittingPayment" @click="submitPayment">
                  <v-icon left>mdi-check</v-icon>
                  ຢືນຢັນການຊຳລະເງິນ
                </v-btn>
              </div>
            </v-card>
          </div>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-btn color="primary" outlined @click="printInvoice">
            <v-icon left>mdi-printer</v-icon>
            ພິມໃບບິນ (Print Invoice)
          </v-btn>
          <v-btn v-if="selectedInvoice.status === 'PAID' || selectedInvoice.status === 'PARTIAL'" color="success" outlined class="ml-2" @click="printReceipt">
            <v-icon left>mdi-receipt</v-icon>
            ພິມໃບບິນຮັບເງິນ (Print Receipt)
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="invoiceDetailDialog = false">ປິດ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { generateSchoolInvoiceHTML } from '~/common/printTemplates';

export default {
  name: 'SchoolInvoicesPage',
  middleware: 'auths',
  data() {
    return {
      activeShift: null,
      paymentWarning: null,

      // Filters
      monthMenu: false,
      filterMonthMenu: false,
      filters: {
        academicYearId: null,
        classId: null,
        status: null,
        billingMonth: '',
        search: ''
      },

      // Data Lists
      invoices: [],
      academicYears: [],
      classes: [],
      paymentMethods: [],
      invoiceStatuses: ['UNPAID', 'PARTIAL', 'PAID'],

      // Dialog controls
      bulkDialog: false,
      invoiceDetailDialog: false,

      // Loading states
      loadingInvoices: false,
      generatingBulk: false,
      submittingPayment: false,

      // Validations
      bulkValid: true,
      paymentValid: true,

      // Form bindings
      bulkFormFields: {
        classId: null,
        academicYearId: null,
        dueDate: '',
        billingMonth: ''
      },
      selectedInvoice: null,
      paymentFormFields: {
        amount: 0,
        paymentMethodId: null,
        referenceNo: ''
      },

      // Headers
      invoiceHeaders: [
        { text: 'ລຳດັບ', value: 'index', width: '60px', sortable: false },
        { text: 'ເລກໃບບິນ (Invoice No)', value: 'invoiceNumber' },
        { text: 'ນັກຮຽນ (Student)', value: 'student' },
        { text: 'ຊັ້ນຮຽນ (Class)', value: 'class' },
        { text: 'ປີການສຶກສາ', value: 'academicYear.name' },
        { text: 'ເດືອນອອກໃບບິນ (Month)', value: 'billingMonth', align: 'center' },
        { text: 'ວັນຄົບກຳນົດ', value: 'dueDate', sortable: true },
        { text: 'ຍອດລວມ', value: 'totalAmount', align: 'right' },
        { text: 'ຊຳລະແລ້ວ', value: 'paidAmount', align: 'right' },
        { text: 'ຍອດຄ້າງຊຳລະ', value: 'balanceAmount', align: 'right' },
        { text: 'ສະຖານະ', value: 'status', align: 'center' },
        { text: 'ຈັດການ', value: 'actions', sortable: false, align: 'center' }
      ]
    }
  },
  mounted() {
    this.checkActiveShift();
    this.loadAcademicYears();
    this.loadClasses();
    this.loadPaymentMethods();
    this.loadInvoices();
  },
  computed: {
    classSummary() {
      const total = this.invoices.length;
      if (total === 0) {
        return { total: 0, paid: 0, partial: 0, unpaid: 0, paidPercent: 0, partialPercent: 0, unpaidPercent: 0 };
      }
      const paid = this.invoices.filter(i => i.status === 'PAID').length;
      const partial = this.invoices.filter(i => i.status === 'PARTIAL').length;
      const unpaid = this.invoices.filter(i => i.status === 'UNPAID').length;

      return {
        total,
        paid,
        partial,
        unpaid,
        paidPercent: Math.round((paid / total) * 100),
        partialPercent: Math.round((partial / total) * 100),
        unpaidPercent: Math.round((unpaid / total) * 100)
      };
    }
  },
  methods: {
    // ---------------------------------
    // COMMON HELPERS
    // ---------------------------------
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
    formatDate(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleDateString('en-GB');
    },
    formatDateTime(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleString('en-GB');
    },
    getStatusColor(status) {
      if (status === 'PAID') return 'success';
      if (status === 'PARTIAL') return 'warning';
      return 'error';
    },
    getStatusText(status) {
      if (status === 'PAID') return 'ຊຳລະແລ້ວ';
      if (status === 'PARTIAL') return 'ຊຳລະບາງສ່ວນ';
      return 'ຍັງບໍ່ຊຳລະ';
    },
    isOverdue(dueDate) {
      if (!dueDate) return false;
      return new Date(dueDate) < new Date();
    },

    // ---------------------------------
    // ACTIVE SHIFT API BINDINGS
    // ---------------------------------
    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
      } catch (err) {
        console.error('Error checking active shift:', err);
      }
    },

    // ---------------------------------
    // INVOICES & BULK GENERATION API BINDINGS
    // ---------------------------------
    async loadAcademicYears() {
      try {
        const res = await this.$axios.get('/api/school/academic-years');
        this.academicYears = res.data || [];
      } catch (err) {
        console.error('Error fetching academic periods:', err);
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
    async loadInvoices() {
      this.loadingInvoices = true;
      try {
        const params = {};
        if (this.filters.academicYearId) params.academicYearId = this.filters.academicYearId;
        if (this.filters.classId) params.classId = this.filters.classId;
        if (this.filters.status) params.status = this.filters.status;
        if (this.filters.billingMonth) params.billingMonth = this.filters.billingMonth;

        const res = await this.$axios.get('/api/school/invoices', { params });
        let list = res.data || [];

        if (this.filters.search) {
          const keyword = this.filters.search.toLowerCase();
          list = list.filter(item => {
            const num = item.invoiceNumber.toLowerCase();
            const studentId = item.student?.studentId?.toLowerCase() || '';
            const fName = item.student?.firstName?.toLowerCase() || '';
            const lName = item.student?.lastName?.toLowerCase() || '';
            return num.includes(keyword) || studentId.includes(keyword) || fName.includes(keyword) || lName.includes(keyword);
          });
        }
        this.invoices = list;
      } catch (err) {
        console.error('Error fetching invoices:', err);
      } finally {
        this.loadingInvoices = false;
      }
    },
    openBulkDialog() {
      this.bulkFormFields = {
        classId: this.classes[0]?.id || null,
        academicYearId: this.academicYears[0]?.id || null,
        dueDate: '',
        billingMonth: new Date().toISOString().substring(0, 7) // Default to current month, e.g. "2026-08"
      };
      this.bulkDialog = true;
    },
    async generateBulkInvoices() {
      this.generatingBulk = true;
      try {
        const payload = { ...this.bulkFormFields };
        if (payload.billingMonth) {
          payload.billingMonth = payload.billingMonth.substring(0, 7);
        }
        const res = await this.$axios.post('/api/school/invoices/bulk', payload);
        this.$toast.success(res.data?.message || 'ສ້າງໃບບິນກຸ່ມສຳເລັດ');
        this.loadInvoices();
        this.bulkDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດສ້າງໃບບິນໄດ້');
      } finally {
        this.generatingBulk = false;
      }
    },
    async viewInvoiceDetails(item) {
      try {
        const res = await this.$axios.get(`/api/school/invoices/${item.id}`);
        this.selectedInvoice = res.data;
        this.paymentFormFields = {
          amount: this.selectedInvoice.balanceAmount,
          paymentMethodId: this.paymentMethods[0]?.id || null,
          referenceNo: ''
        };
        this.paymentWarning = null;
        this.invoiceDetailDialog = true;
      } catch (err) {
        this.$toast.error('ບໍ່ສາມາດໂຫຼດລາຍລະອຽດໄດ້');
      }
    },
    printInvoice() {
      if (!this.selectedInvoice) return;
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateSchoolInvoiceHTML(this.selectedInvoice, companyData, false);
        
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
        this.$toast.error('Failed to generate print view');
      }
    },
    printReceipt() {
      if (!this.selectedInvoice) return;
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateSchoolInvoiceHTML(this.selectedInvoice, companyData, true);
        
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
        this.$toast.error('Failed to generate receipt print view');
      }
    },

    // ---------------------------------
    // PAYMENTS & CAPPING VALIDATIONS
    // ---------------------------------
    async loadPaymentMethods() {
      try {
        const res = await this.$axios.get('/api/paymentMethod/find');
        this.paymentMethods = res.data || [];
      } catch (err) {
        console.error('Error fetching payment methods:', err);
      }
    },
    checkCappingRule() {
      if (!this.selectedInvoice) return;
      const amt = Number(this.paymentFormFields.amount || 0);
      const limit = Number(this.selectedInvoice.balanceAmount || 0);
      if (amt > limit) {
        this.paymentWarning = `ຈຳນວນເງິນຊຳລະ (${this.formatCurrency(amt)} LAK) ບໍ່ສາມາດຫຼາຍກວ່າ ຍອດຄ້າງຊຳລະ (${this.formatCurrency(limit)} LAK) ໄດ້`;
      } else {
        this.paymentWarning = null;
      }
    },
    async submitPayment() {
      if (!this.selectedInvoice) return;
      this.checkCappingRule();
      if (this.paymentWarning) return;

      this.submittingPayment = true;
      try {
        await this.$axios.post('/api/school/payments', {
          schoolInvoiceId: this.selectedInvoice.id,
          amount: this.paymentFormFields.amount,
          paymentMethodId: this.paymentFormFields.paymentMethodId,
          referenceNo: this.paymentFormFields.referenceNo,
          cashierShiftId: this.activeShift ? this.activeShift.id : null
        });

        this.$toast.success('ບັນທຶກການຊຳລະເງິນສຳເລັດ');
        this.invoiceDetailDialog = false;
        this.loadInvoices();
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດຊຳລະເງິນໄດ້');
      } finally {
        this.submittingPayment = false;
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
.bg-light-green {
  background-color: #f1f8e9 !important;
}
</style>
