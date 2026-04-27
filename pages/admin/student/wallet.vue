<template>
  <div class="wallet-station pa-4">
    <div class="d-flex align-center justify-space-between mb-4">
      <div>
        <h1 class="text-h5 font-weight-bold primary--text">
          <v-icon color="primary" class="mr-2">mdi-wallet-plus</v-icon>
          ສະຖານີຕື່ມເງິນ (Top-Up Station)
        </h1>
        <div class=" grey--text">
          Scan NFC cards or search students to process top-ups and withdrawals
        </div>
      </div>
      <div>
        <v-btn color="secondary" outlined to="/admin/student">
          <v-icon left>mdi-arrow-left</v-icon> ກັບຄືນ (Back)
        </v-btn>
      </div>
    </div>

    <v-row>
      <!-- Left Column: Search & NFC Scan -->
      <v-col cols="12" md="4">
        <v-card elevation="2" class="mb-4">
          <v-card-text class="text-center py-6 bg-grey-lighten-4">
            <v-icon size="64" color="primary" class="mb-4">mdi-contactless-payment</v-icon>
            <h3 class="text-h6 mb-2">ແຕະບັດລູກຄ້າ (Scan Card)</h3>
            <p class=" grey--text mb-4">Click below and tap the card on the NFC Reader</p>

            <v-text-field v-model="scanInput" label="ລະຫັດບັດ (Card UID)" outlined dense autofocus id="nfc-scan-input"
              @keyup.enter="identifyStudentByCard" :loading="isSearching" append-icon="mdi-magnify"
              @click:append="identifyStudentByCard" hide-details></v-text-field>
          </v-card-text>
        </v-card>

        <v-divider class="my-4"></v-divider>
        <div class="text-center  grey--text mb-4">- ຫຼືຄົ້ນຫາດ້ວຍຊື່ (Or search manually) -</div>

        <v-autocomplete v-model="selectedStudentId" :items="students" item-text="fullName" item-value="id"
          label="ເລືອກນັກຮຽນ (Select Student)" outlined dense clearable @change="loadStudentById">
          <template v-slot:item="{ item }">
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium">{{ item.firstName }} {{ item.lastName }}</v-list-item-title>
              <v-list-item-subtitle>ID: {{ item.studentId }} | ເບີໂທ: {{ item.phoneNumber || '-'
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-autocomplete>
      </v-col>

      <!-- Right Column: Wallet Actions -->
      <v-col cols="12" md="8">
        <v-card elevation="2" class="fill-height pb-4" v-if="currentStudent">
          <v-card-title class="primary white--text">
            ຂໍ້ມູນຍອດເງິນ (Wallet Details)
          </v-card-title>

          <v-card-text class="pt-6">
            <v-row>
              <v-col cols="12" sm="6">
                <!-- User Profile Summary -->
                <div class="d-flex align-center mb-4">
                  <v-avatar size="64" color="grey lighten-2" class="mr-4">
                    <span class="text-h5">{{ currentStudent.firstName.charAt(0) }}</span>
                  </v-avatar>
                  <div>
                    <h2 class="text-h5 font-weight-bold">{{ currentStudent.firstName }} {{ currentStudent.lastName }}
                    </h2>
                    <div class="grey--text">ID: {{ currentStudent.studentId }} | ຊັ້ນຮຽນ (Grade): {{
                      currentStudent.grade ||
                      '-' }}</div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" class="text-sm-right">
                <!-- Balance Box -->
                <v-card outlined color="success lighten-5" class="d-inline-block px-6 py-4 text-center">
                  <div class="text-subtitle-1 success--text darken-2">ຍອດເງິນປັດຈຸບັນ (Current Balance)</div>
                  <div class="text-h3 font-weight-bold success--text darken-3">
                    {{ formatCurrency(currentBalance) }} <span class="text-h6">LAK</span>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <v-divider class="my-6"></v-divider>

            <!-- Action Form -->
            <v-form ref="transactionForm" v-model="valid">
              <h3 class="text-h6 mb-4">ເຮັດທຸລະກຳ (Process Transaction)</h3>

              <v-row>
                <v-col cols="12" md="6">
                  <v-autocomplete v-model="selectedCashAccountId" :items="bankAccounts" item-text="accountName"
                    item-value="id" label="ເລືອກບັນຊີຮັບເງິນ / ຈ່າຍເງິນ (Cash/Drawer Account)" outlined dense
                    :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີ (Required)']" prepend-inner-icon="mdi-cash-register"
                    readonly
                    :hint="!currentTerminal || !currentTerminal.bankAccountId ? '⚠ ບໍ່ມີການຕັ້ງຄ່າບັນຊີສຳລັບ Terminal ນີ້ (No terminal mapping found!)' : 'ລັອກບັນຊີອັດຕະໂນມັດຕາມ Terminal (Locked to terminal mapping)'"
                    persistent-hint>
                    <template v-slot:item="{ item }">
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-medium">{{ item.accountName }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.accountNumber }} | {{ item.accountType }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-radio-group v-model="transactionType" row class="mt-1">
                    <v-radio label="ຕື່ມເງິນ (Top-up)" value="topup" color="success"></v-radio>
                    <v-radio label="ຖອນເງິນ (Withdraw)" value="withdraw" color="error"></v-radio>
                  </v-radio-group>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model.number="amount" label="ຈຳນວນເງິນ (Amount) LAK" type="number" outlined
                    :rules="amountRules" prefix="₭" class="text-h6 font-weight-bold"></v-text-field>

                  <div class="d-flex gap-2 flex-wrap mb-4">
                    <v-btn small outlined @click="amount = 10000">10,000</v-btn>
                    <v-btn small outlined class="ml-2" @click="amount = 20000">20,000</v-btn>
                    <v-btn small outlined class="ml-2" @click="amount = 50000">50,000</v-btn>
                    <v-btn small outlined class="ml-2" @click="amount = 100000">100,000</v-btn>
                  </div>

                  <v-text-field v-model="description" label="ໝາຍເຫດ (Remark optional)" outlined dense></v-text-field>
                </v-col>
              </v-row>

              <div class="d-flex justify-end mt-4">
                <v-btn large :color="transactionType === 'topup' ? 'success' : 'error'" @click="processTransaction"
                  :loading="isProcessing" :disabled="!valid || !amount || amount <= 0 || !selectedCashAccountId" class="px-8 font-weight-bold">
                  <v-icon left>{{ transactionType === 'topup' ? 'mdi-cash-plus' : 'mdi-cash-minus' }}</v-icon>
                  ຍືນຍັນ (Confirm)
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card class="d-flex align-center justify-center fill-height" elevation="0" color="transparent" v-else>
          <div class="text-center grey--text">
            <v-icon size="80" color="grey lighten-1">mdi-contactless-payment-circle</v-icon>
            <h2 class="text-h5 mt-4 font-weight-regular">ກະລຸນາແຕະບັດ ຫຼື ເລືອກນັກຮຽນກ່ອນ</h2>
            <p>Please scan a card or select a student to begin.</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WalletTopUpStation',
  data() {
    return {
      scanInput: '',
      isSearching: false,
      isProcessing: false,
      students: [],
      selectedStudentId: null,
      currentStudent: null,

      // Transaction form
      valid: true,
      transactionType: 'topup',
      amount: null,
      description: '',

      // Double Entry Accounting
      bankAccounts: [],
      selectedCashAccountId: null,
    }
  },
  computed: {
    ...mapGetters(['findAllTerminal', 'findSelectedTerminal']),
    safeTerminals() {
      return Array.isArray(this.findAllTerminal) ? this.findAllTerminal : []
    },
    currentTerminal() {
      if (!this.safeTerminals.length || !this.findSelectedTerminal) {
        return null
      }

      return (
        this.safeTerminals.find(
          (el) => el && el.id == this.findSelectedTerminal
        ) || null
      )
    },
    currentBalance() {
      if (this.currentStudent && this.currentStudent.bankAccount) {
        return this.currentStudent.bankAccount.balance;
      }
      return 0;
    },
    amountRules() {
      const rules = [
        v => !!v || 'ກະລຸນາປ້ອນຈຳນວນເງິນ (Amount required)',
        v => v > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0 (Amount must be > 0)'
      ];
      if (this.transactionType === 'withdraw') {
        rules.push(v => v <= this.currentBalance || 'ຍອດເງິນບໍ່ພຽງພໍ (Insufficient balance)');
      }
      return rules;
    }
  },
  watch: {
    currentTerminal: {
      immediate: true,
      handler(newVal) {
        if (newVal && newVal.bankAccountId) {
          console.log('Terminal mapping detected, setting account:', newVal.bankAccountId);
          this.selectedCashAccountId = newVal.bankAccountId;
        }
      }
    }
  },
  mounted() {
    this.fetchAllStudents();
    this.fetchBankAccounts();

    // Auto focus on the scan field immediately
    setTimeout(() => {
      this.focusScanner();
    }, 500);

    // Listen for native Electron hardware NFC scans (Automatically overrides any background zombie listener)
    if (typeof window !== 'undefined' && window.posApi && window.posApi.onNfcScan) {
      window.posApi.onNfcScan((uid) => {
        console.log('Hardware NFC Scan received for Wallet Top-Up Station:', uid);
        this.scanInput = uid;
        this.identifyStudentByCard();
      });
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined' && window.posApi && window.posApi.removeNfcListener) {
      window.posApi.removeNfcListener();
    }
  },
  methods: {
    async fetchBankAccounts() {
      try {
        const res = await this.$axios.get('/api/bank_account/find');
        const allAccounts = res.data.data || res.data || [];

        // Filter out student wallets (they usually have a studentId or start with WLT)
        // We only want the Merchant's offset accounts in this dropdown
        this.bankAccounts = allAccounts.filter(acc => !acc.studentId);

        // Auto-select the first available bank account if none is selected and no terminal mapping
        if (this.bankAccounts.length > 0 && !this.selectedCashAccountId) {
          if (this.currentTerminal && this.currentTerminal.bankAccountId) {
            this.selectedCashAccountId = this.currentTerminal.bankAccountId;
          } else {
            // Prefer cash accounts if possible, otherwise use the first merchant account
            const defaultAcc = this.bankAccounts.find(acc => acc.accountType && acc.accountType.toLowerCase().includes('cash')) || this.bankAccounts[0];
            this.selectedCashAccountId = defaultAcc.id;
          }
        }
      } catch (error) {
        console.error("Failed to load bank accounts", error);
      }
    },
    focusScanner() {
      const el = document.getElementById('nfc-scan-input');
      if (el) el.focus();
    },
    async fetchAllStudents() {
      try {
        const res = await this.$axios.get('/api/student/find');
        const list = res.data.data || res.data || [];
        this.students = list.map(s => ({
          ...s,
          fullName: `${s.firstName} ${s.lastName}`
        }));
      } catch (error) {
        console.error("Failed to load generic student list", error);
      }
    },
    async identifyStudentByCard() {
      const uid = this.scanInput.trim();
      if (!uid) return;
      console.log('Identifying student with card:', uid);
      this.isSearching = true;
      try {
        console.log('Identifying student with card:', uid);
        const res = await this.$axios.get(`/api/student/identify/${uid}`);
        console.log('Student identified 123123:', res.data);

        let studentData = res.data;
        if (Array.isArray(studentData)) {
          if (studentData.length === 0) throw new Error('Student array empty');
          studentData = studentData[0];
        }
        console.log(`Student data: ${JSON.stringify(studentData)}`);
        this.setStudent(studentData);
      } catch (error) {
        this.$toast.error('ເຂົ້າລະຫັດບັດບໍ່ສຳເລັດ (Card not registered)');
        this.clearSelection();
      } finally {
        this.isSearching = false;
        this.scanInput = ''; // clear for next scan
        this.focusScanner();
      }
    },
    loadStudentById() {
      if (!this.selectedStudentId) {
        this.clearSelection();
        return;
      }
      const student = this.students.find(s => s.id === this.selectedStudentId);
      if (student) {
        // We might want to fetch full profile just in case it's stale
        this.$axios.get(`/api/student/${student.id}`).then(res => {
          let studentData = res.data;
          if (Array.isArray(studentData) && studentData.length > 0) studentData = studentData[0];
          this.setStudent(studentData);
        }).catch(() => {
          this.setStudent(student); // fallback
        });
      }
    },
    setStudent(studentData) {
      console.info(`STUDENT DATA SETTER ${JSON.stringify(studentData)}`)
      if (!studentData.bankAccount) {
        this.$toast.error("Student has no wallet account associated!");
        return;
      }
      this.currentStudent = studentData;
      this.amount = null;
      this.description = '';
      this.transactionType = 'topup';

      // Ensure the merchant offset account is explicitly locked in when the form opens
      if (this.currentTerminal && this.currentTerminal.bankAccountId) {
        this.selectedCashAccountId = this.currentTerminal.bankAccountId;
      } else if (!this.selectedCashAccountId && this.bankAccounts.length > 0) {
        const defaultAcc = this.bankAccounts.find(acc => acc.accountType && acc.accountType.toLowerCase().includes('Merchant')) || this.bankAccounts[0];
        this.selectedCashAccountId = defaultAcc.id;
      }

      if (this.$refs.transactionForm) {
        this.$refs.transactionForm.resetValidation();
      }
    },
    clearSelection() {
      this.currentStudent = null;
      this.selectedStudentId = null;
    },
    async processTransaction() {
      if (!this.$refs.transactionForm.validate()) return;

      this.isProcessing = true;

      const endpoint = this.transactionType === 'topup' ? '/api/transactions/topup' : '/api/transactions/withdraw';
      const payload = {
        studentAccountId: this.currentStudent.bankAccount.id,
        cashAccountId: this.selectedCashAccountId,
        amount: Number(this.amount),
        description: this.description,
        userId: this.$store.state.auth.user.id
      };

      try {
        await this.$axios.post(endpoint, payload);
        this.$toast.success(`ທຸລະກຳສຳເລັດ (Transaction successful)`);

        // Refresh balance
        const res = await this.$axios.get(`/api/student/${this.currentStudent.id}`);
        let freshData = res.data;
        if (Array.isArray(freshData) && freshData.length > 0) freshData = freshData[0];
        this.currentStudent = freshData;

        // Reset form keeping the student
        this.amount = null;
        this.description = '';
        this.$refs.transactionForm.resetValidation();

        // After transaction, focus back to scanner for line flow
        this.focusScanner();
      } catch (error) {
        console.error(error);
        this.$toast.error(error.response?.data?.message || 'Failed to process transaction');
      } finally {
        this.isProcessing = false;
      }
    },
    formatCurrency(value) {
      if (!value && value !== 0) return '0';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    }
  }
}
</script>

<style scoped>
.wallet-station * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
</style>
