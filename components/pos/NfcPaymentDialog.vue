<template>
  <v-card>
    <v-card-title class="primary white--text py-4">
      <v-icon left size="28" color="white">mdi-contactless-payment-circle</v-icon>
      <span class=" font-weight-bold">ຊຳລະຜ່ານບັດນັກຮຽນ (NFC Wallet Payment)</span>
      <v-spacer></v-spacer>
      <v-btn icon dark @click="$emit('cancel')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="pa-6">
      <v-row>
        <!-- Scanner Input (Hidden) -->
        <input type="text" id="nfc-pos-scanner" v-model="nfcUid" @keydown.enter="handleScan" class="nfc-hidden-input"
          autofocus />

        <v-col cols="12" class="text-center">
          <div class="mb-4">
            <v-avatar size="120" :color="scanStateColor" class="mb-3 elevation-4 transition-all"
              :class="{ 'pulse-animation': isScanning }">
              <v-icon size="64" color="white">{{ scanStateIcon }}</v-icon>
            </v-avatar>
            <h3 class=" font-weight-bold" :class="`${scanStateColor}--text`">{{ scanStateText }}</h3>
            <p class="grey--text  mt-2">ກະທົບຍອດເງິນ LAK {{ formatNumber(saleTotal) }}</p>
          </div>

          <!-- Student Profile (Shown after successful scan) -->
          <v-slide-y-transition>
            <v-card v-if="studentNotFound" color="error lighten-4" outlined class="mt-4 text-center pa-4">
              <v-icon color="error" size="40">mdi-alert-circle</v-icon>
              <h4 class="error--text mt-2">ບໍ່ພົບບັດນີ້ໃນລະບົບ (Card not found)</h4>
              <p class="mb-0">ກະລຸນາລອງສະແກນໃໝ່ ຫຼື ຕິດຕໍ່ສູນບໍລິການ.</p>
              <v-btn color="error" outlined class="mt-3" @click="resetScanner">ສະແກນໃໝ່ (Rescan)</v-btn>
            </v-card>

            <v-card v-else-if="studentProfile" outlined :class="hasEnoughBalance ? 'success-border' : 'error-border'"
              class="mt-4 text-left">
              <v-list-item two-line>
                <v-list-item-avatar size="50" color="primary lighten-4">
                  <v-icon color="primary">mdi-account-school</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class=" font-weight-bold">{{ studentProfile.firstName }} {{
                    studentProfile.lastName }}</v-list-item-title>
                  <v-list-item-subtitle>Student ID: {{ studentProfile.studentId }} | UID: {{ studentProfile.nfcCard ?
                    studentProfile.nfcCard.cardUid : 'N/A' }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-card-text class="pa-4 bg-light-grey">
                <v-row align="center">
                  <v-col cols="6">
                    <div class="grey--text  font-weight-medium">ຍອດເງິນໃນກະເປົາ (Wallet Balance)</div>
                    <div class=" font-weight-bold primary--text">{{ formatNumber(studentBalance) }} LAK</div>
                  </v-col>
                  <v-col cols="6" class="text-right">
                    <div class="grey--text  font-weight-medium">ຍອດຊຳລະ (Pay Amount)</div>
                    <div class=" font-weight-bold error--text">-{{ formatNumber(saleTotal) }} LAK</div>
                  </v-col>
                </v-row>

                <v-alert v-if="!hasEnoughBalance" type="error" dense outlined class="mt-3 mb-0">
                  ຍອດເງິນບໍ່ພຽງພໍ (Insufficient Balance). ขาดເງິນ: {{ formatNumber(saleTotal - studentBalance) }} LAK
                </v-alert>
                <v-alert v-else type="success" dense outlined class="mt-3 mb-0">
                  ຍອດເງິນພຽງພໍ. ກົດຢືນຢັນເພື່ອຊຳລະ (Balance sufficient).
                </v-alert>
              </v-card-text>
            </v-card>
          </v-slide-y-transition>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="pa-4 grey lighten-5">
      <v-spacer></v-spacer>
      <v-btn color="grey darken-1" text large @click="$emit('cancel')">
        <v-icon left>mdi-close</v-icon> ຍົກເລີກ (Cancel)
      </v-btn>
      <v-btn color="success" large class="px-6 rounded-lg elevation-2" :disabled="!isValidToPay" :loading="isProcessing"
        @click="confirmPayment">
        <v-icon left>mdi-check-circle</v-icon> ຢືນຢັນຊຳລະເງິນ (Confirm)
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NfcPaymentDialog',
  props: {
    saleTotal: { type: Number, required: true },
    formatNumber: { type: Function, required: true },
    initialNfcUid: { type: String, default: '' }
  },
  data() {
    return {
      nfcUid: '',
      isScanning: true,
      studentProfile: null,
      studentNotFound: false,
      isProcessing: false,
      shopAccountId: null
    }
  },
  computed: {
    scanStateText() {
      if (this.studentNotFound) return 'ບໍ່ພົບບັດ (Card Not Found)';
      if (this.studentProfile) return 'ພ້ອມຊຳລະ (Ready to Pay)';
      return 'ກະລຸນາແຕະບັດ (Please tap card)';
    },
    scanStateIcon() {
      if (this.studentNotFound) return 'mdi-card-off';
      if (this.studentProfile) return 'mdi-check-circle-outline';
      return 'mdi-nfc';
    },
    scanStateColor() {
      if (this.studentNotFound) return 'error';
      if (this.studentProfile) return 'success';
      return 'primary';
    },
    studentBalance() {
      return this.studentProfile?.bankAccount?.balance || 0;
    },
    hasEnoughBalance() {
      return this.studentBalance >= this.saleTotal;
    },
    isValidToPay() {
      return this.studentProfile !== null && this.hasEnoughBalance && !this.isProcessing;
    }
  },
  mounted() {
    this.focusScanner();
    this.fetchDefaultShopAccount();

    // If an initial UID was passed (e.g. from global listener), process it immediately
    if (this.initialNfcUid) {
      this.nfcUid = this.initialNfcUid;
      this.handleScan();
    }

    // Listen for native Electron hardware NFC scans (Automatically overrides any background zombie listener)
    if (typeof window !== 'undefined' && window.posApi && window.posApi.onNfcScan) {
      window.posApi.onNfcScan((uid) => {
        console.log('Hardware NFC Scan received for Payment:', uid);
        this.nfcUid = uid;
        this.handleScan();
      });
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined' && window.posApi && window.posApi.removeNfcListener) {
      window.posApi.removeNfcListener();
    }
  },
  methods: {
    focusScanner() {
      setTimeout(() => {
        const el = document.getElementById('nfc-pos-scanner');
        if (el) el.focus();
      }, 300);
    },
    resetScanner() {
      this.nfcUid = '';
      this.studentProfile = null;
      this.studentNotFound = false;
      this.isScanning = true;
      this.focusScanner();
    },
    async fetchDefaultShopAccount() {
      try {
        // 1. Try to get account from CURRENT TERMINAL mapping
        const selectedTerminalId = this.$store.getters.findSelectedTerminal;
        const terminalList = this.$store.getters.findAllTerminal;
        
        if (selectedTerminalId && terminalList.length > 0) {
          const currentTerminal = terminalList.find(t => t.id === selectedTerminalId);
          if (currentTerminal && currentTerminal.bankAccountId) {
            console.log(`📍 Using Bank Account mapped to Terminal "${currentTerminal.name}": ID ${currentTerminal.bankAccountId}`);
            this.shopAccountId = currentTerminal.bankAccountId;
            return; // EXIT early
          }
        }

        // 2. FALLBACK: Find default cash/current account if terminal has no mapping
        const res = await this.$axios.get('/api/bank_account/find');
        const accounts = res.data.data || res.data || [];
        if (accounts.length > 0) {
          // Find first cash account, fallback to first general account
          const cashAcc = accounts.find(a => a.accountType === 'Current' || a.accountName.toLowerCase().includes('cash'));
          this.shopAccountId = cashAcc ? cashAcc.id : accounts[0].id;
          console.log(`🏦 Terminal has no mapping. Using default Fallback Account: ID ${this.shopAccountId}`);
        }
      } catch (error) {
        console.error("Failed to fetch shop account: ", error);
      }
    },
    async handleScan() {
      if (!this.nfcUid || this.nfcUid.trim() === '') return;

      this.isScanning = false;
      const scannedUid = this.nfcUid.trim();
      this.nfcUid = ''; // Reset for next scan

      try {
        const res = await this.$axios.get(`/api/nfc-cards/find?uid=${scannedUid}`);
        const result = res.data.data || res.data;

        // Find the NFC card matching the UID
        const cardMatch = Array.isArray(result) ? result.find(c => c.cardUid === scannedUid && c.cardStatus === 'ACTIVE') : null;

        if (!cardMatch || !cardMatch.studentId) {
          this.studentNotFound = true;
          return;
        }

        // Fetch student details
        const studentRes = await this.$axios.get(`/api/student/${cardMatch.studentId}`);
        const student = studentRes.data.data || studentRes.data;

        if (!student || !student.bankAccount) {
          this.studentNotFound = true;
          return;
        }

        this.studentProfile = student;
      } catch (error) {
        console.error("NFC Scan Error: ", error);
        this.studentNotFound = true;
      }
    },
    confirmPayment() {
      if (!this.isValidToPay || !this.shopAccountId) {
        this.$toast.error('Cannot process payment. Missing Shop Account Configuration or Insufficient Funds.');
        return;
      }

      this.isProcessing = true;

      const nfcPaymentData = {
        studentAccountId: this.studentProfile.bankAccount.id,
        shopAccountId: this.shopAccountId,
        amount: this.saleTotal
      };

      this.$emit('confirmed', nfcPaymentData);

      // We don't reset isProcessing here because the parent dialog will close itself
    }
  }
}
</script>

<style scoped>
.nfc-hidden-input {
  position: absolute;
  top: -9999px;
  opacity: 0;
}

.transition-all {
  transition: all 0.3s ease;
}

.pulse-animation {
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 15px rgba(25, 118, 210, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(25, 118, 210, 0);
  }
}

.success-border {
  border-left: 4px solid #4CAF50 !important;
}

.error-border {
  border-left: 4px solid #FF5252 !important;
}

.bg-light-grey {
  background-color: #f9f9f9;
}
</style>
