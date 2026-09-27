<template>
  <v-container class="school-billing-dashboard pa-6" fluid>
    <!-- Top Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1">
          <v-icon size="40" color="primary" class="mr-2">mdi-cash-register</v-icon>
          ຄວບຄຸມກະເປົາເງິນແຄັດເຊຍ (Cashier Shift Control)
        </h1>
        <p class="text-subtitle-1 grey--text text--darken-1 mb-0">
          ເປີດ-ປິດກະເປົາ, ຕິດຕາມຍອດເງິນສົດໃນລີ້ນຊັກ, ມອບເງິນສົດເຂົ້າບັນຊີກາງ ແລະ ກວດສອບຍອດປິດກະເປົາປະຈຳວັນ
        </p>
      </div>

      <!-- Quick Actions -->
      <div class="d-flex align-center">
        <v-btn color="success" class="mr-2" @click="openCashDropDialog" elevation="1">
          <v-icon left small>mdi-bank-transfer-out</v-icon>
          ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop)
        </v-btn>
        <v-btn color="primary" outlined to="/admin/school/report" class="mr-2">
          <v-icon left small>mdi-chart-box-outline</v-icon>
          ລາຍງານສະຫຼຸບທຸກ Cashier
        </v-btn>
        <v-chip v-if="activeShift" color="success" dark class="px-4 py-2 font-weight-bold" elevation="1">
          <v-icon left>mdi-cash-register</v-icon>
          Shift #{{ activeShift.id }} | ເປີດ: {{ formatCurrency(activeShift.openingCash) }} LAK
        </v-chip>
        <v-chip v-else color="error" dark class="px-4 py-2 font-weight-bold" elevation="1">
          <v-icon left>mdi-cash-register-off</v-icon>
          ບໍ່ມີກະເປົາເປີດ
        </v-chip>
      </div>
    </div>

    <v-row justify="center">
      <v-col cols="12" md="8" lg="7">
        <!-- If active shift exists -->
        <v-card v-if="activeShift" class="pa-6 elevation-2" outlined>
          <div class="text-center mb-4">
            <v-icon size="64" color="success" class="mb-2">mdi-cash-register</v-icon>
            <h3 class="text-h5 font-weight-bold success--text mb-1">ກະເປົາເງິນກຳລັງເປີດໃຊ້ງານ (Shift Open)</h3>
            <p class="grey--text text--darken-2 mb-0">ທ່ານສາມາດຮັບຕື່ມເງິນ, ຖອນເງິນ, ຂາຍສິນຄ້າ ແລະ ຮັບຊຳລະໃບບິນໄດ້ຕາມປົກກະຕິ</p>
          </div>

          <!-- Live Shift Cash Metrics -->
          <v-card class="pa-4 mb-4 rounded-lg" style="background: #f8fafc; border: 1px solid #e2e8f0;">
            <div class="d-flex justify-space-between align-center mb-3">
              <span class="font-weight-bold text-subtitle-2 blue-grey--text text--darken-3">
                <v-icon small color="primary" class="mr-1">mdi-chart-timeline-variant</v-icon>
                ຍອດເຄື່ອນໄຫວໃນກະເປົາ Shift #{{ activeShift.id }} (Live Cash Metrics)
              </span>
              <v-btn icon small color="primary" @click="fetchShiftLiveMetrics" :loading="loadingMetrics">
                <v-icon small>mdi-refresh</v-icon>
              </v-btn>
            </div>

            <v-row dense>
              <v-col cols="6" sm="3">
                <div class="caption grey--text">ເງິນເປີດກະເປົາ:</div>
                <div class="font-weight-bold text-subtitle-2">{{ formatCurrency(activeShift.openingCash) }} LAK</div>
              </v-col>
              <v-col cols="6" sm="3">
                <div class="caption grey--text">ຕື່ມເງິນບັດ (+IN):</div>
                <div class="font-weight-bold success--text">+{{ formatCurrency(userCashData.topupIn) }} LAK</div>
              </v-col>
              <v-col cols="6" sm="3">
                <div class="caption grey--text">ຖອນເງິນບັດ (-OUT):</div>
                <div class="font-weight-bold error--text">-{{ formatCurrency(userCashData.withdrawOut) }} LAK</div>
              </v-col>
              <v-col cols="6" sm="3">
                <div class="caption grey--text">POS ຂາຍເງິນສົດ (+):</div>
                <div class="font-weight-bold info--text">+{{ formatCurrency(userCashData.posCashSales) }} LAK</div>
              </v-col>
            </v-row>

            <v-divider class="my-3"></v-divider>

            <div class="d-flex justify-space-between align-center px-3 py-2 rounded" style="background: #ecfdf5;">
              <span class="font-weight-bold text-subtitle-1 green--text text--darken-4">
                <v-icon small color="green darken-4" class="mr-1">mdi-safe</v-icon>
                ເງິນສົດທີ່ຄວນມີໃນລີ້ນຊັກ (Expected Cash):
              </span>
              <span class="text-h6 font-weight-bold green--text text--darken-4">
                {{ formatCurrency(currentExpectedCash) }} LAK
              </span>
            </div>
          </v-card>

          <!-- Shift Details -->
          <div class="px-4 py-2 mb-4 rounded" style="background: #fafafa; border: 1px solid #eee;">
            <v-row dense class="mb-1">
              <v-col cols="6" class="caption grey--text">Cashier / ຜູ້ໃຊ້:</v-col>
              <v-col cols="6" class="caption text-right font-weight-bold">{{ userCashData.userName || 'Current User' }}</v-col>
            </v-row>
            <v-row dense class="mb-1">
              <v-col cols="6" class="caption grey--text">ເວລາເປີດ Shift:</v-col>
              <v-col cols="6" class="caption text-right">{{ formatDateTime(activeShift.openTime) }}</v-col>
            </v-row>
            <v-row dense>
              <v-col cols="6" class="caption grey--text">ຍອດຂາຍບັດ NFC (Cashless):</v-col>
              <v-col cols="6" class="caption text-right purple--text font-weight-bold">{{ formatCurrency(userCashData.posNfcSales) }} LAK</v-col>
            </v-row>
          </div>

          <v-divider class="mb-4"></v-divider>

          <!-- Cash Drop & Closing Action Buttons -->
          <v-row dense class="mb-3">
            <v-col cols="12" sm="6">
              <v-btn color="success" block large @click="openCashDropDialog" class="font-weight-bold" elevation="1">
                <v-icon left>mdi-bank-transfer-out</v-icon>
                ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop)
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn color="error" block large @click="openCloseShiftDialog" class="font-weight-bold" elevation="1">
                <v-icon left>mdi-lock</v-icon>
                ປິດກະເປົາ / ສະຫຼຸບຍອດ (Close Shift)
              </v-btn>
            </v-col>
          </v-row>

          <v-row dense>
            <v-col cols="6">
              <v-btn color="teal" outlined block @click="printCurrentShiftSlip">
                <v-icon left small>mdi-receipt</v-icon>
                ພິມ Slip ປິດ Shift (80mm)
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" outlined block @click="printActiveShiftReport">
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ Shift ເຕັມ (A4)
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <!-- If no active shift exists -->
        <v-card v-else class="pa-8 text-center elevation-2" outlined>
          <v-icon size="80" color="error" class="mb-4">mdi-cash-register-off</v-icon>
          <h3 class="text-h5 font-weight-bold error--text mb-2">ບໍ່ມີກະເປົາເງິນເປີດຢູ່ (No Active Shift)</h3>
          <p class="grey--text text--darken-2 mb-6">
            ກະລຸນາເປີດກະເປົາເງິນ (Cashier Shift) ກ່ອນ ເພື່ອບັນທຶກການຊຳລະເງິນ, ຕື່ມເງິນບັດ ແລະ ທຳທຸລະກຳ
          </p>

          <v-btn color="primary" large @click="shiftOpenDialog = true" class="px-8 font-weight-bold" elevation="2">
            <v-icon left>mdi-key</v-icon>
            ເປີດກະເປົາເຮັດວຽກ (Open Cashier Shift)
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialogs -->

    <!-- 1. Open Cashier Shift Dialog -->
    <v-dialog v-model="shiftOpenDialog" max-width="420px" persistent>
      <v-card>
        <v-card-title class="primary white--text font-weight-bold">
          <v-icon left color="white">mdi-cash-register</v-icon>
          ເປີດກະເປົາເງິນ (Open Cashier Shift)
        </v-card-title>
        <v-card-text class="pt-4">
          <v-form ref="shiftOpenForm">
            <v-text-field :value="formatInputAmount(shiftFormFields.openingCash)" @input="onAmountInput($event, shiftFormFields, 'openingCash')" label="ເງິນສົດເລີ່ມຕົ້ນໃນລີ້ນຊັກ (Opening Cash Float) *"
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
    <v-dialog v-model="shiftCloseDialog" max-width="480px" persistent>
      <v-card>
        <v-card-title class="error white--text font-weight-bold">
          <v-icon left color="white">mdi-lock</v-icon>
          ປິດກະເປົາເງິນ (Close Cashier Shift)
        </v-card-title>
        <v-card-text class="pt-4">
          <!-- Expected Cash Hint -->
          <v-alert type="info" text dense class="mb-3">
            <div class="d-flex justify-space-between align-center">
              <span>ເງິນສົດທີ່ຄວນມີໃນລີ້ນຊັກ (Expected):</span>
              <strong>{{ formatCurrency(currentExpectedCash) }} LAK</strong>
            </div>
          </v-alert>

          <v-form ref="shiftCloseForm">
            <v-text-field :value="formatInputAmount(shiftFormFields.closingCash)" @input="onAmountInput($event, shiftFormFields, 'closingCash')" label="ເງິນສົດນັບໄດ້ຕົວຈິງ (Actual Closing Cash) *"
              outlined dense suffix="LAK" :rules="[v => shiftFormFields.closingCash >= 0 || 'ຕ້ອງເປັນຄ່າບວກ']"></v-text-field>
          </v-form>

          <!-- Real-time Discrepancy Indicator -->
          <div v-if="shiftFormFields.closingCash !== null" class="d-flex justify-space-between align-center px-3 py-2 rounded mb-3" :style="closeVariance === 0 ? 'background: #ecfdf5; color: #047857;' : (closeVariance > 0 ? 'background: #eff6ff; color: #1d4ed8;' : 'background: #fef2f2; color: #b91c1c;')">
            <span class="font-weight-bold">ຜົນຕ່າງ (Discrepancy / Over-Short):</span>
            <strong class="text-subtitle-2">{{ closeVariance > 0 ? '+' : '' }}{{ formatCurrency(closeVariance) }} LAK</strong>
          </div>

          <v-alert type="warning" text outlined icon="mdi-alert" class="mb-0 caption">
            ເມື່ອປິດ Shift ແລ້ວ ທ່ານສາມາດມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop) ເພື່ອລ້າງຍອດລີ້ນຊັກ.
          </v-alert>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="shiftCloseDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="error" @click="closeShift" :loading="savingShift">ຢືນຢັນປິດ Shift</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 3. Cash Drop / Remittance to Central Account Dialog -->
    <v-dialog v-model="cashDropDialog" max-width="560px" persistent>
      <v-card>
        <v-card-title class="success darken-1 white--text font-weight-bold">
          <v-icon left color="white">mdi-bank-transfer-out</v-icon>
          ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop to Central Vault)
        </v-card-title>
        <v-card-text class="pt-4">
          <!-- Live Till Balance -->
          <v-alert type="success" text dense class="mb-4">
            <div class="d-flex justify-space-between align-center">
              <span>ເງິນສົດປະຈຸບັນໃນລີ້ນຊັກ (Current Till Cash):</span>
              <strong class="text-subtitle-1">{{ formatCurrency(currentExpectedCash) }} LAK</strong>
            </div>
          </v-alert>

          <v-form ref="cashDropForm">
            <!-- Source Till Account -->
            <v-select v-model="cashDropFields.fromAccountId" :items="availableTillAccounts" item-text="displayName" item-value="id"
              label="ບັນຊີຕົ້ນທາງ / ລີ້ນຊັກ (From Till Account) *" outlined dense class="mb-2" :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີຕົ້ນທາງ']"></v-select>

            <!-- Destination Central Account -->
            <v-select v-model="cashDropFields.toAccountId" :items="availableCentralAccounts" item-text="displayName" item-value="id"
              label="ບັນຊີປາຍທາງ / ຕູ້ເຊບກາງ (To Central Account) *" outlined dense class="mb-2" :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີປາຍທາງ']"></v-select>

            <!-- Amount & Quick Buttons -->
            <div class="mb-1 d-flex justify-space-between align-center">
              <span class="caption font-weight-bold grey--text text--darken-2">ຈຳນວນເງິນສົດທີ່ມອບ (Amount) *</span>
              <div class="d-flex gap-1">
                <v-btn x-small color="success" outlined @click="cashDropFields.amount = currentExpectedCash" class="mr-1">
                  ມອບໝົດ ({{ formatCurrency(currentExpectedCash) }})
                </v-btn>
                <v-btn x-small color="primary" outlined @click="cashDropFields.amount = Math.max(0, currentExpectedCash - (activeShift?.openingCash || 0))">
                  ມອບຍອດຂາຍ ({{ formatCurrency(Math.max(0, currentExpectedCash - (activeShift?.openingCash || 0))) }})
                </v-btn>
              </div>
            </div>
            <v-text-field :value="formatInputAmount(cashDropFields.amount)" @input="onAmountInput($event, cashDropFields, 'amount')"
              outlined dense suffix="LAK" class="mb-2" :rules="[v => cashDropFields.amount > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0']"></v-text-field>

            <!-- Receiver Name -->
            <v-text-field v-model="cashDropFields.receiverName" label="ຊື່ຜູ້ຮັບມອບ / ຫົວໜ້າການເງິນ (Receiver Name) *"
              outlined dense class="mb-2" :rules="[v => !!v || 'ກະລຸນາລະບຸຊື່ຜູ້ຮັບມອບ']"></v-text-field>

            <!-- Remarks -->
            <v-textarea v-model="cashDropFields.description" label="ໝາຍເຫດ (Remarks)" outlined dense rows="2" hide-details></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-4 grey lighten-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="cashDropDialog = false">ຍົກເລີກ</v-btn>
          <v-btn color="success darken-1" class="font-weight-bold" @click="submitCashDrop" :loading="savingCashDrop">
            <v-icon left small>mdi-check</v-icon>
            ຢືນຢັນການມອບເງິນສົດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {
  generateSchoolShiftReportHTML,
  generateUserShiftSummarySlipHTML,
  generateCashDropVoucherHTML
} from '~/common/printTemplates';

export default {
  name: 'SchoolShiftsPage',
  middleware: 'auths',
  data() {
    return {
      activeShift: null,
      savingShift: false,
      loadingMetrics: false,
      shiftOpenDialog: false,
      shiftCloseDialog: false,
      shiftFormFields: {
        openingCash: 0,
        closingCash: 0
      },

      // Cash Drop State
      cashDropDialog: false,
      savingCashDrop: false,
      bankAccounts: [],
      cashDropFields: {
        fromAccountId: 125, // Default Cash account 2 (till)
        toAccountId: 124,   // Default Cash Account (Central)
        amount: 0,
        receiverName: 'ຫົວໜ້າການເງິນ / ຜູ້ອຳນວຍການ',
        description: 'ມອບເງິນສົດປິດກະເປົາປະຈຳວັນ ເຂົ້າບັນຊີກາງ (End-of-day Cash Drop)'
      },

      userCashData: {
        userId: null,
        userCode: '',
        userName: '',
        topupIn: 0,
        topupCount: 0,
        withdrawOut: 0,
        withdrawCount: 0,
        posCashSales: 0,
        posCashCount: 0,
        posNfcSales: 0,
        feeCashCollected: 0,
        totalCashIn: 0,
        totalCashOut: 0
      }
    }
  },
  computed: {
    currentExpectedCash() {
      const open = Number(this.activeShift?.openingCash || 0);
      const inAmt = Number(this.userCashData.totalCashIn || 0);
      const outAmt = Number(this.userCashData.totalCashOut || 0);
      return open + inAmt - outAmt;
    },
    closeVariance() {
      const closing = Number(this.shiftFormFields.closingCash || 0);
      return closing - this.currentExpectedCash;
    },
    availableTillAccounts() {
      return this.bankAccounts
        .filter(a => a.studentId === null)
        .map(a => ({
          id: a.id,
          displayName: `${a.accountNumber} - ${a.accountName} (ຍອດ: ${this.formatCurrency(a.balance)} LAK)`
        }));
    },
    availableCentralAccounts() {
      return this.bankAccounts
        .filter(a => a.studentId === null && a.id !== this.cashDropFields.fromAccountId)
        .map(a => ({
          id: a.id,
          displayName: `${a.accountNumber} - ${a.accountName} (ຍອດ: ${this.formatCurrency(a.balance)} LAK)`
        }));
    }
  },
  mounted() {
    this.checkActiveShift();
    this.loadBankAccounts();
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

    async loadBankAccounts() {
      try {
        const res = await this.$axios.get('/api/bank_account/find');
        this.bankAccounts = res.data || [];
        // Default from/to accounts if found
        const till = this.bankAccounts.find(a => a.id === 125 || a.accountName.toLowerCase().includes('2') || a.accountType === 'Merchant');
        const central = this.bankAccounts.find(a => a.id === 124 || a.accountName.toLowerCase().includes('cash') || a.id !== till?.id);
        if (till) this.cashDropFields.fromAccountId = till.id;
        if (central) this.cashDropFields.toAccountId = central.id;
      } catch (err) {
        console.error('Error loading bank accounts:', err);
      }
    },

    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
        if (this.activeShift) {
          this.fetchShiftLiveMetrics();
        }
      } catch (err) {
        this.activeShift = null;
      }
    },

    async fetchShiftLiveMetrics() {
      this.loadingMetrics = true;
      try {
        const today = new Date().toISOString().split('T')[0];
        const res = await this.$axios.get('/api/school/reports/cash-position', {
          params: { startDate: today, endDate: today }
        });
        const users = res.data?.users || [];
        const myUid = this.activeShift?.userId;
        const myData = users.find(u => u.userId === myUid) || users[0];
        if (myData) {
          this.userCashData = myData;
        }
      } catch (err) {
        console.error('Error fetching live metrics:', err);
      } finally {
        this.loadingMetrics = false;
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
        this.fetchShiftLiveMetrics();
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດເປີດ Shift ໄດ້');
      } finally {
        this.savingShift = false;
      }
    },

    openCloseShiftDialog() {
      this.shiftFormFields.closingCash = this.currentExpectedCash;
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

    openCashDropDialog() {
      this.cashDropFields.amount = this.currentExpectedCash;
      this.cashDropDialog = true;
    },

    async submitCashDrop() {
      if (!this.$refs.cashDropForm.validate()) return;
      this.savingCashDrop = true;
      try {
        const res = await this.$axios.post('/api/transactions/transfer', {
          fromAccountId: this.cashDropFields.fromAccountId,
          toAccountId: this.cashDropFields.toAccountId,
          amount: this.cashDropFields.amount,
          userId: this.activeShift?.userId || 1,
          receiverName: this.cashDropFields.receiverName,
          description: this.cashDropFields.description
        });

        this.$toast.success('ມອບເງິນສົດເຂົ້າບັນຊີກາງສຳເລັດແລ້ວ!');
        this.cashDropDialog = false;
        this.loadBankAccounts();
        this.fetchShiftLiveMetrics();

        // Prompt to print Cash Remittance Voucher
        const transferPayload = {
          ...res.data.transfer,
          cashierName: this.userCashData.userName || 'DC Auto',
          description: this.cashDropFields.description
        };
        this.printCashDropVoucher(transferPayload);

      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ການມອບເງິນສົດບໍ່ສຳເລັດ');
      } finally {
        this.savingCashDrop = false;
      }
    },

    printCashDropVoucher(transferData) {
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateCashDropVoucherHTML(transferData, companyData);
        
        const printWindow = window.open('', '_blank', 'width=800,height=700');
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
        this.$toast.error('Failed to generate cash drop voucher print view');
      }
    },

    printCurrentShiftSlip() {
      if (!this.activeShift) return;
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const userObj = {
          ...this.userCashData,
          openingCash: this.activeShift.openingCash,
          expectedCashInDrawer: this.currentExpectedCash,
          shift: this.activeShift
        };
        const htmlContent = generateUserShiftSummarySlipHTML(userObj, companyData);
        
        const printWindow = window.open('', '_blank', 'width=400,height=600');
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
        this.$toast.error('Failed to generate shift slip print view');
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
