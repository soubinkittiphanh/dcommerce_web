<template>
  <v-app id="laundry-kiosk">
    <v-main class="grey lighten-5">
      <v-container fill-height justify-center>
        <v-card width="500" class="rounded-xl overflow-hidden shadow-lg" outlined>
          
          <v-list-item class="primary white--text py-3">
            <v-list-item-avatar color="white" size="48">
              <v-icon color="primary">mdi-washing-machine</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-lao font-weight-bold text-h6">ຊັກຜ້າອັດສະລິຍະ</v-list-item-title>
              <v-list-item-subtitle class="white--text opacity-70 font-lao">ເລືອກ ແລະ ຊຳລະເງິນ</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text class="pa-4">
            <div v-if="step === 'selection'">
              <v-row dense>
                <v-col v-for="item in menu" :key="item.id" cols="6">
                  <v-card
                    flat outlined
                    :color="selectedProgram === item.id ? 'blue lighten-5' : 'white'"
                    :class="['rounded-lg text-center pa-3 selection-card', selectedProgram === item.id ? 'border-primary' : '']"
                    @click="selectProgram(item)"
                  >
                    <div class="text-h4 mb-1">{{ item.icon }}</div>
                    <div class="font-lao font-weight-bold primary--text caption">{{ item.name }}</div>
                    <div class="blue--text font-weight-bold">{{ item.price.toLocaleString() }} ₭</div>
                  </v-card>
                </v-col>
              </v-row>

              <v-expand-transition>
                <div v-if="selectedProgram === '39'" class="mt-4 pa-3 rounded-lg grey lighten-4">
                  <div class="font-lao caption text-center mb-2">ເລືອກເວລາອົບແຫ້ງ</div>
                  <v-btn-toggle v-model="selectedTime" mandatory color="primary" class="d-flex justify-space-between" dense group>
                    <v-btn v-for="time in dryTimes" :key="time" :value="time" x-small>{{ time }}m</v-btn>
                  </v-btn-toggle>
                </div>
              </v-expand-transition>

              <v-btn block large color="success" class="mt-5 rounded-lg font-lao" :disabled="!selectedProgram" @click="initiatePayment">
                ຊຳລະເງິນ: {{ totalPrice.toLocaleString() }} ₭
              </v-btn>
            </div>

            <div v-else-if="step === 'payment'" class="text-center pa-2">
              <h3 class="font-lao mb-2">ກະລຸນາສະແກນ QR ເພື່ອຈ່າຍ</h3>
              <div class="qr-container pa-3 white rounded-lg d-inline-block border">
                <div ref="qrcode"></div>
                <v-progress-linear v-if="isCheckingPayment" indeterminate color="primary" class="mt-2"></v-progress-linear>
              </div>
              <div class="mt-3 font-lao grey--text text--darken-2">
                ຍອດຊຳລະ: <span class="primary--text font-weight-bold">{{ totalPrice.toLocaleString() }} ₭</span>
              </div>
              <v-btn text small color="red" class="mt-4 font-lao" @click="cancelPayment">ຍົກເລີກ</v-btn>
            </div>

            <div v-else-if="step === 'starting'" class="text-center pa-10">
              <v-progress-circular indeterminate size="64" color="success" width="6"></v-progress-circular>
              <h3 class="font-lao mt-5 success--text">ຊຳລະເງິນສຳເລັດແລ້ວ!</h3>
              <p class="font-lao grey--text">ກຳລັງເລີ່ມເຄື່ອງຊັກຜ້າ ແລະ ລັອກຝາ...</p>
            </div>
          </v-card-text>

          <v-footer class="white pa-2 justify-center border-top">
            <span class="font-lao grey--text caption">ກວດສອບ Smart Control ກ່ອນທຸກຄັ້ງ</span>
          </v-footer>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import QRCode from 'qrcode'

export default {
  layout: 'login',
  data() {
    return {
      apiBaseUrl: 'http://192.168.1.9:8000',
      deviceId: '1e008816-50fb-ea87-b2c1-e98ee3306e1a',
      step: 'selection', // selection, payment, starting
      selectedProgram: null,
      selectedTime: 60,
      totalPrice: 0,
      loading: false,
      
      // QR & Polling
      qrData: null,
      paymentPolling: null,
      isCheckingPayment: false,

      dryTimes: [30, 60, 90, 120],
      menu: [
        { id: '1B', name: 'ຊັກແບບ AI', price: 20000, icon: '👕' },
        { id: '1E', name: 'ຊັກດ່ວນ', price: 15000, icon: '⚡' },
        { id: '21', name: 'ຜ້າປູບ່ອນ', price: 40000, icon: '🛏️' },
        { id: '20', name: 'ຊັກຜ້າເຊັດຕົວ', price: 25000, icon: '🧖' },
        { id: '36', name: 'ຊັກ+ອົບ AI', price: 50000, icon: '🔄' },
        { id: '39', name: 'ອົບແຫ້ງ', price: 20000, icon: '☀️' },
      ]
    }
  },
  methods: {
    selectProgram(item) {
      this.selectedProgram = item.id
      this.totalPrice = item.price
    },
    async initiatePayment() {
      this.loading = true;
      this.statusMessage = '';
      
      try {
        // Generate unique bill number as per your generator spec
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        const billNo = `BILL-${timestamp}-${random}`;

        // BANK SPEC FORM DATA: 
        // These fields must match exactly what worked in your QR Generator sample
        const qrRequestPayload = {
          memberId: 'KOKKOKMOV',
          txnAmount: this.totalPrice,
          purposeOfTxn: `Wash ${this.selectedProgram}`,
          billNumber: billNo,
          merchantId: '000000000001749',
          storeLabel: 'Order06989-004-003',
          terminalLabel: 'terminal00001'
        };

        // Note: Using full hardcoded IP as you requested for direct posting
        const response = await this.$axios.$post(`/api/qr/generate`, qrRequestPayload);

        if (response.success) {
          // In your spec, the QR string is inside response.data.data or response.data
          // Based on your sample: response.data.data.qrString
          this.qrData = response.data; 
          this.step = 'payment';
          
          this.$nextTick(() => {
            this.renderQRCode();
          });

          this.startPaymentPolling();
        } else {
          alert("Error: " + response.message);
        }
      } catch (err) {
        console.error('QR Generation Error:', err);
        alert("ບໍ່ສາມາດສ້າງ QR ໄດ້: " + (err.response?.data?.message || err.message));
      } finally {
        this.loading = false;
      }
    },

    async renderQRCode() {
      // Accessing qrString based on your bank spec object structure
      const qrString = this.qrData.qrString || this.qrData.data?.qrString;
      
      if (!qrString) {
        console.error("No QR String found in response");
        return;
      }

      try {
        this.$refs.qrcode.innerHTML = ''; // Clear previous
        const canvas = await QRCode.toCanvas(qrString, { 
          width: 220, 
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        this.$refs.qrcode.appendChild(canvas);
      } catch (err) {
        console.error("Canvas Render Error", err);
      }
    },
    async renderQRCode() {
      const canvas = await QRCode.toCanvas(this.qrData.qrString, { width: 220, margin: 2 })
      this.$refs.qrcode.appendChild(canvas)
    },
    startPaymentPolling() {
      this.isCheckingPayment = true
      this.paymentPolling = setInterval(async () => {
        try {
          const res = await this.$axios.$get(`/api/qr/payment-status/${this.qrData.billNumber}`)
          if (res.success && res.data.isPaid) {
            this.stopPolling()
            this.triggerMachine()
          }
        } catch (e) { console.error("Polling error", e) }
      }, 3000)
    },
    stopPolling() {
      clearInterval(this.paymentPolling)
      this.isCheckingPayment = false
    },
    async triggerMachine() {
      this.step = 'starting'
      try {
        await this.$axios.$post(`${this.apiBaseUrl}/api/smartthings/start/${this.deviceId}`, {
          program: this.selectedProgram,
          dryTime: this.selectedProgram === '39' ? this.selectedTime : null
        })
        // Show success and reset after 10 seconds
        setTimeout(() => { this.step = 'selection'; this.selectedProgram = null; }, 10000)
      } catch (e) {
        alert("ຊຳລະແລ້ວ ແຕ່ເຄື່ອງບໍ່ສາມາດເລີ່ມໄດ້. ກະລຸນາຕິດຕໍ່ພະນັກງານ")
      }
    },
    cancelPayment() {
      this.stopPolling()
      this.step = 'selection'
    }
  },
  beforeDestroy() { this.stopPolling() }
}
</script>

<style scoped>
.font-lao { font-family: 'Noto Sans Lao', sans-serif !important; }
.selection-card { border-width: 1px !important; transition: 0.2s; cursor: pointer; }
.border-primary { border: 2px solid #1976D2 !important; }
.qr-container { background: white; padding: 10px; border-radius: 12px; }
</style>