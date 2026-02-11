<template>
  <v-app id="laundry-kiosk">
    <v-overlay :value="loading" z-index="999">
      <div class="text-center">
        <v-progress-circular
          indeterminate
          size="64"
          width="7"
          color="primary"
        ></v-progress-circular>
        <div class="mt-3 font-lao white--text text-h6">
          ກຳລັງກວດສອບສະຖານະເຄື່ອງ...
        </div>
      </div>
    </v-overlay>
    <v-main class="grey lighten-5">
      <v-container fill-height justify-center>
        <v-card
          width="500"
          class="rounded-xl overflow-hidden shadow-lg"
          outlined
        >
          <v-list-item class="primary white--text py-3">
            <v-list-item-avatar color="white" size="48">
              <v-icon color="primary">mdi-washing-machine</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-lao font-weight-bold text-h6"
                >ຊັກຜ້າອັດສະລິຍະ</v-list-item-title
              >
              <v-list-item-subtitle class="white--text opacity-70 font-lao"
                >ເລືອກ ແລະ ຊຳລະເງິນ</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-text class="pa-4">
            <div v-if="step === 'selection'">
              <v-row dense>
                <v-col v-for="item in menu" :key="item.id" cols="6">
                  <v-card
                    flat
                    outlined
                    :color="
                      selectedProgram === item.id ? 'blue lighten-5' : 'white'
                    "
                    :class="[
                      'rounded-lg text-center pa-3 selection-card',
                      selectedProgram === item.id ? 'border-primary' : '',
                    ]"
                    @click="selectProgram(item)"
                  >
                    <div class="text-h4 mb-1">{{ item.icon }}</div>
                    <div
                      class="font-lao font-weight-bold primary--text caption"
                    >
                      {{ item.name }}
                    </div>
                    <div class="blue--text font-weight-bold">
                      {{ item.price.toLocaleString() }} ₭
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <v-expand-transition>
                <div
                  v-if="selectedProgram === '39'"
                  class="mt-4 pa-3 rounded-lg grey lighten-4"
                >
                  <div class="font-lao caption text-center mb-2">
                    ເລືອກເວລາອົບແຫ້ງ
                  </div>
                  <v-btn-toggle
                    v-model="selectedTime"
                    mandatory
                    color="primary"
                    class="d-flex justify-space-between"
                    dense
                    group
                  >
                    <v-btn
                      v-for="time in dryTimes"
                      :key="time"
                      :value="time"
                      x-small
                      >{{ time }}m</v-btn
                    >
                  </v-btn-toggle>
                </div>
              </v-expand-transition>

              <v-btn
                block
                large
                color="success"
                class="mt-5 rounded-lg font-lao"
                :disabled="!selectedProgram"
                @click="initiatePayment"
              >
                ຊຳລະເງິນ: {{ totalPrice.toLocaleString() }} ₭
              </v-btn>
            </div>

            <div v-else-if="step === 'payment'" class="text-center pa-2">
              <h3 class="font-lao mb-2">ກະລຸນາສະແກນ QR ເພື່ອຈ່າຍ</h3>
              <div
                class="qr-container pa-3 white rounded-lg d-inline-block border"
              >
                <div ref="qrcode"></div>
                <v-progress-linear
                  v-if="isCheckingPayment"
                  indeterminate
                  color="primary"
                  class="mt-2"
                ></v-progress-linear>
              </div>
              <div class="mt-3 font-lao grey--text text--darken-2">
                ຍອດຊຳລະ:
                <span class="primary--text font-weight-bold"
                  >{{ totalPrice.toLocaleString() }} ₭</span
                >
              </div>
              <v-btn
                text
                small
                color="red"
                class="mt-4 font-lao"
                @click="cancelPayment"
                >ຍົກເລີກ</v-btn
              >
            </div>

            <div v-else-if="step === 'starting'" class="text-center pa-10">
              <v-progress-circular
                indeterminate
                size="64"
                color="success"
                width="6"
              ></v-progress-circular>
              <h3 class="font-lao mt-5 success--text">ຊຳລະເງິນສຳເລັດແລ້ວ!</h3>
              <p class="font-lao grey--text">
                ກຳລັງເລີ່ມເຄື່ອງຊັກຜ້າ ແລະ ລັອກຝາ...
              </p>
            </div>
          </v-card-text>

          <v-footer class="white pa-2 justify-center border-top">
            <span class="font-lao grey--text caption"
              >ກວດສອບ Smart Control ກ່ອນທຸກຄັ້ງ</span
            >
          </v-footer>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import QRCode from 'qrcode'
import { swalError2 } from '~/common'
export default {
  layout: 'login',
  data() {
    return {
      apiBaseUrl: 'http://192.168.1.7:8000',
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
      ],
    }
  },
  methods: {
    selectProgram(item) {
      this.selectedProgram = item.id
      this.totalPrice = item.price
    },
    // Inside your Vue methods
    async initiatePayment() {
      // 1. Start Loading UI
      this.loading = true

      try {
        // 2. PRE-CHECK: Get Device Status from your SmartThings API
        // This calls your backend getDeviceStatus(req, res) method
        const statusRes = await this.$axios.$get(
          `${this.apiBaseUrl}/api/smartthings/status/${this.deviceId}`
        )

        if (!statusRes.success) {
          this.loading = false
          return swalError2(
            this.$swal,
            'Error',
            'ບໍ່ສາມາດຕິດຕໍ່ກັບເຄື່ອງຊັກຜ້າໄດ້'
          )
        }

        const status = statusRes.status
        const raw = statusRes.raw.components.main

        // A. Check Power
        if (status.power !== 'on') {
          this.loading = false
          return swalError2(
            this.$swal,
            'ເຄື່ອງປິດຢູ່',
            'ກະລຸນາເປີດເຄື່ອງຊັກຜ້າກ່ອນຊຳລະເງິນ'
          )
        }

        // B. Check for Softener/Detergent Empty (The "Refill" Blocker)
        // We check the raw OCF data for dispenser status
        const softener =
          raw['samsungce.softenerDispenser']?.remainingAmount?.value
        const detergent =
          raw['samsungce.detergentDispenser']?.remainingAmount?.value

        if (softener === 'empty' || detergent === 'empty') {
          this.loading = false
          return swalError2(
            this.$swal,
            'ພົບຂໍ້ຜິດພາດຢູ່ໜ້າຈໍເຄື່ອງ',
            'ນ້ຳຢາປັບຜ້ານຸ້ມ ຫຼື ແຟັບໝົດ. ກະລຸນາເຕີມ ແລະ ກົດ OK ຢູ່ໜ້າຈໍເຄື່ອງເພື່ອລຶບຂໍ້ຄວາມເຕືອນກ່ອນ'
          )
        }

        // C. Check Smart Control (Must be enabled to start via API)
        if (!status.remoteControlEnabled) {
          this.loading = false
          return swalError2(
            this.$swal,
            'Smart Control ປິດຢູ່',
            'ກະລຸນາກົດປຸ່ມ Smart Control ຢູ່ໜ້າຈໍເຄື່ອງຊັກຜ້າໃຫ້ເປັນ ON ກ່ອນຈຶ່ງຈະຊຳລະເງິນໄດ້'
          )
        }

        // D. Check Door State
        if (status.doorState === 'open') {
          this.loading = false
          return swalError2(
            this.$swal,
            'ຝາເຄື່ອງເປີດຢູ່',
            'ກະລຸນາອັດຝາເຄື່ອງຊັກຜ້າໃຫ້ສະນິດ'
          )
        }

        // 3. GENERATE QR: If we reached here, the machine is READY
        const billNo = `BILL-${Date.now()}-${Math.floor(Math.random() * 1000)}`
        const qrRequestPayload = {
          memberId: 'KOKKOKMOV',
          txnAmount: this.totalPrice,
          purposeOfTxn: `Wash ${this.selectedProgram}`,
          billNumber: billNo,
          merchantId: '000000000001749',
          storeLabel: 'Order-Laundry',
          terminalLabel: 'terminal01',
        }

        const qrResponse = await this.$axios.$post(
          `/api/qr/generate`,
          qrRequestPayload
        )

        if (qrResponse.success) {
          this.qrData = qrResponse.data
          this.step = 'payment' // Change UI to QR Scan mode

          this.$nextTick(() => {
            this.renderQRCode()
          })

          this.startPaymentPolling()
        } else {
          swalError2(
            this.$swal,
            'Error',
            'ບໍ່ສາມາດສ້າງ QR ໄດ້: ' + qrResponse.message
          )
        }
      } catch (err) {
        console.error('Payment Flow Error:', err)
        swalError2(
          this.$swal,
          'Error',
          'ເກີດຂໍ້ຜິດພາດ: ' + (err.response?.data?.message || err.message)
        )
      } finally {
        // 4. End Loading UI
        this.loading = false
      }
    },

    async renderQRCode() {
      // Accessing qrString based on your bank spec object structure
      const qrString = this.qrData.qrString || this.qrData.data?.qrString

      if (!qrString) {
        console.error('No QR String found in response')
        return
      }

      try {
        this.$refs.qrcode.innerHTML = '' // Clear previous
        const canvas = await QRCode.toCanvas(qrString, {
          width: 220,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        })
        this.$refs.qrcode.appendChild(canvas)
      } catch (err) {
        console.error('Canvas Render Error', err)
      }
    },
    async renderQRCode() {
      const canvas = await QRCode.toCanvas(this.qrData.qrString, {
        width: 220,
        margin: 2,
      })
      this.$refs.qrcode.appendChild(canvas)
    },
    startPaymentPolling() {
      this.isCheckingPayment = true
      this.paymentPolling = setInterval(async () => {
        try {
          const res = await this.$axios.$get(
            `/api/qr/payment-status/${this.qrData.billNumber}`
          )
          if (res.success && res.data.isPaid) {
            this.stopPolling()
            this.triggerMachine()
          }
        } catch (e) {
          console.error('Polling error', e)
        }
      }, 3000)
    },
    stopPolling() {
      clearInterval(this.paymentPolling)
      this.isCheckingPayment = false
    },
    async triggerMachine() {
      this.step = 'starting'
      try {
        await this.$axios.$post(
          `${this.apiBaseUrl}/api/smartthings/start/${this.deviceId}`,
          {
            program: this.selectedProgram,
            dryTime: this.selectedProgram === '39' ? this.selectedTime : null,
          }
        )
        // Show success and reset after 10 seconds
        setTimeout(() => {
          this.step = 'selection'
          this.selectedProgram = null
        }, 10000)
      } catch (e) {
        alert('ຊຳລະແລ້ວ ແຕ່ເຄື່ອງບໍ່ສາມາດເລີ່ມໄດ້. ກະລຸນາຕິດຕໍ່ພະນັກງານ')
      }
    },
    cancelPayment() {
      this.stopPolling()
      this.step = 'selection'
    },
  },
  beforeDestroy() {
    this.stopPolling()
  },
}
</script>

<style scoped>
.font-lao {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
.selection-card {
  border-width: 1px !important;
  transition: 0.2s;
  cursor: pointer;
}
.border-primary {
  border: 2px solid #1976d2 !important;
}
.qr-container {
  background: white;
  padding: 10px;
  border-radius: 12px;
}
</style>