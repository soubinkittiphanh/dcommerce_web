<template>
  <v-dialog v-model="internalVisible" max-width="400" persistent>
    <v-card class="receipt-dialog-card">
      <v-card-title class="d-flex justify-space-between align-center py-2 px-4 grey lighten-4">
        <span class="font-weight-bold subtitle-1">
          <v-icon small color="primary" class="mr-1">mdi-receipt</v-icon>
          {{ isCheckoutReceipt ? 'ໃບຮັບເງິນຄ່າຈອດລົດ (Receipt)' : 'ບັດເຂົ້າຈອດລົດ (Parking Ticket)' }}
        </span>
        <v-btn icon small @click="close">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <!-- Thermal Printable Area -->
      <v-card-text class="pa-4">
        <div id="parking-receipt-print-area" class="thermal-receipt font-monospace">
          <!-- Header -->
          <div class="text-center header-section mb-3">
            <div class="company-name font-weight-bold">{{ companyInfo.name || 'DCOMMERCE CAR PARKING' }}</div>
            <div class="company-sub text-caption">{{ companyInfo.address || 'ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ' }}</div>
            <div v-if="companyInfo.tel" class="company-sub text-caption">Tel: {{ companyInfo.tel }}</div>
            <div class="receipt-type-banner my-2">
              *** {{ isCheckoutReceipt ? 'ໃບຮັບເງິນ (PARKING RECEIPT)' : 'ບັດຈອດລົດ (ENTRY TICKET)' }} ***
            </div>
          </div>

          <div class="dashed-divider"></div>

          <!-- Body Info -->
          <div class="info-rows text-caption my-2">
            <div class="d-flex justify-space-between">
              <span>ເລກທີປີ້ (Ticket):</span>
              <span class="font-weight-bold">{{ ticketData.ticketNumber || '-' }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span>ທະບຽນລົດ (Plate):</span>
              <span class="font-weight-black plate-badge">{{ ticketData.plateNumber || '-' }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span>ປະເພດລົດ (Type):</span>
              <span class="text-uppercase">{{ ticketData.vehicleType || 'car' }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span>ຊ່ອງຈອດ (Slot):</span>
              <span class="font-weight-bold">{{ slotNumberDisplay }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span>ໂຊນ (Zone):</span>
              <span>{{ ticketData.zone?.name || ticketData.zone?.code || '-' }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span>ເວລາເຂົ້າ (Entry):</span>
              <span>{{ formatDateTime(ticketData.entryTime) }}</span>
            </div>

            <template v-if="isCheckoutReceipt">
              <div class="d-flex justify-space-between">
                <span>ເວລາອອກ (Exit):</span>
                <span>{{ formatDateTime(ticketData.exitTime || new Date()) }}</span>
              </div>
              <div class="d-flex justify-space-between">
                <span>ໄລຍະເວລາ (Duration):</span>
                <span class="font-weight-bold">{{ durationDisplay }}</span>
              </div>
              <div v-if="ticketData.feeBreakdown" class="d-flex justify-space-between">
                <span>ຊ່ວງກາງເວັນ (Day Hrs):</span>
                <span>{{ ticketData.feeBreakdown.dayHours }} ຊມ ({{ formatMoney(ticketData.feeBreakdown.baseDayFee) }} ₭)</span>
              </div>
              <div v-if="ticketData.feeBreakdown && ticketData.feeBreakdown.nightHours > 0" class="d-flex justify-space-between">
                <span>ຊ່ວງກາງຄືນ (Night Hrs):</span>
                <span>{{ ticketData.feeBreakdown.nightHours }} ຊມ ({{ formatMoney(ticketData.feeBreakdown.baseNightFee) }} ₭)</span>
              </div>
              <div v-if="ticketData.penaltyFee > 0" class="d-flex justify-space-between">
                <span>ຄ່າປັບໃໝປີ້ເສຍ (Penalty):</span>
                <span>{{ formatMoney(ticketData.penaltyFee) }} ₭</span>
              </div>
            </template>
          </div>

          <div class="dashed-divider"></div>

          <!-- Total / Payment section -->
          <div v-if="isCheckoutReceipt" class="payment-section my-2">
            <div class="d-flex justify-space-between align-center total-row font-weight-bold">
              <span>ລວມເງິນທັງໝົດ (Total):</span>
              <span class="total-amount">{{ formatMoney(totalAmountDisplay) }} LAK</span>
            </div>
            <div class="d-flex justify-space-between text-caption mt-1">
              <span>ຮູບແບບການຊຳລະ (Method):</span>
              <span class="font-weight-medium">{{ paymentMethodDisplay }}</span>
            </div>
          </div>
          <div v-else class="entry-notice text-center my-2 text-caption">
            <div>ກະລຸນາເກັບຮັກສາປື້ນີ້ໄວ້ເພື່ອສະແກນຕອນອອກ</div>
            <div class="grey--text">Please keep this ticket for checkout</div>
          </div>

          <!-- QR Code Area -->
          <div class="qr-container text-center my-3">
            <img v-if="qrDataUrl" :src="qrDataUrl" alt="Ticket QR" class="ticket-qr-img" />
            <div class="text-caption barcode-text">{{ ticketData.barcode || ticketData.ticketNumber }}</div>
          </div>

          <div class="dashed-divider"></div>

          <!-- Footer -->
          <div class="text-center footer-section mt-2 text-caption grey--text">
            <div>ພະນັກງານ: {{ attendantName }}</div>
            <div>ຂໍຂອບໃຈທີ່ໃຊ້ບໍລິການ (Thank you!)</div>
          </div>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="px-4 py-3 justify-space-between">
        <v-btn text @click="close">
          ປິດ (Close)
        </v-btn>
        <v-btn color="primary" @click="printReceipt">
          <v-icon left small>mdi-printer</v-icon>
          ພິມບິນ (Print)
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import QRCode from 'qrcode';

export default {
  name: 'ParkingReceiptDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    ticketData: {
      type: Object,
      default: () => ({})
    },
    paymentData: {
      type: Object,
      default: null
    },
    companyInfo: {
      type: Object,
      default: () => ({
        name: 'DCOMMERCE CAR PARKING',
        address: 'ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ',
        tel: '020-55512345'
      })
    }
  },
  data() {
    return {
      qrDataUrl: ''
    };
  },
  computed: {
    internalVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      }
    },
    isCheckoutReceipt() {
      return !!this.paymentData || this.ticketData.status === 'completed';
    },
    slotNumberDisplay() {
      return this.ticketData.slot?.slotNumber || this.ticketData.slotNumber || '-';
    },
    totalAmountDisplay() {
      if (this.paymentData) return this.paymentData.amount;
      if (this.ticketData.paidFee !== undefined) return this.ticketData.paidFee;
      if (this.ticketData.calculatedFee !== undefined) return this.ticketData.calculatedFee;
      return 0;
    },
    paymentMethodDisplay() {
      if (this.paymentData) return this.paymentData.paymentMethod || 'CASH';
      return this.ticketData.isMonthlyPass ? 'FREE PASS' : 'CASH';
    },
    durationDisplay() {
      const mins = this.ticketData.durationMinutes || 0;
      const hrs = Math.floor(mins / 60);
      const remainMins = mins % 60;
      if (hrs > 0) return `${hrs} ຊມ ${remainMins} ນາທີ (${mins} mins)`;
      return `${mins} ນາທີ (${mins} mins)`;
    },
    attendantName() {
      return this.ticketData.entryUser?.cus_name || 
             this.$auth?.user?.cus_name || 
             this.$auth?.user?.name || 
             'Attendant';
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.generateQRCode();
      }
    },
    ticketData: {
      deep: true,
      handler() {
        if (this.visible) {
          this.generateQRCode();
        }
      }
    }
  },
  methods: {
    async generateQRCode() {
      const payload = this.ticketData.barcode || this.ticketData.ticketNumber || '';
      if (!payload) return;
      try {
        this.qrDataUrl = await QRCode.toDataURL(payload, {
          width: 140,
          margin: 1,
          color: { dark: '#000000', light: '#ffffff' }
        });
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    },
    formatDateTime(dt) {
      if (!dt) return '-';
      const d = new Date(dt);
      return d.toLocaleString('lo-LA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatMoney(val) {
      return Number(val || 0).toLocaleString();
    },
    printReceipt() {
      const printContents = document.getElementById('parking-receipt-print-area').innerHTML;
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);

      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <html>
          <head>
            <title>Print Receipt</title>
            <style>
              @page { margin: 0; size: 80mm auto; }
              body {
                font-family: 'Courier New', Courier, monospace, 'Noto Sans Lao', sans-serif;
                font-size: 11px;
                line-height: 1.3;
                width: 72mm;
                margin: 4mm auto;
                color: #000;
              }
              .text-center { text-align: center; }
              .d-flex { display: flex; }
              .justify-space-between { justify-content: space-between; }
              .font-weight-bold { font-weight: bold; }
              .font-weight-black { font-weight: 900; }
              .dashed-divider { border-bottom: 1px dashed #444; margin: 6px 0; }
              .ticket-qr-img { width: 120px; height: 120px; }
              .plate-badge { font-size: 13px; }
              .total-amount { font-size: 14px; }
            </style>
          </head>
          <body>
            ${printContents}
          </body>
        </html>
      `);
      doc.close();

      setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      }, 300);
    },
    close() {
      this.internalVisible = false;
    }
  }
};
</script>

<style scoped>
.receipt-dialog-card {
  font-family: 'Noto Sans Lao', sans-serif;
}
.thermal-receipt {
  background: #fff;
  border: 1px dashed #cbd5e1;
  padding: 16px;
  border-radius: 6px;
  color: #0f172a;
  max-width: 320px;
  margin: 0 auto;
}
.font-monospace {
  font-family: 'Courier New', Courier, monospace, 'Noto Sans Lao', sans-serif;
}
.company-name {
  font-size: 15px;
  color: #1e293b;
}
.receipt-type-banner {
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.dashed-divider {
  border-bottom: 1.5px dashed #64748b;
  margin: 8px 0;
}
.plate-badge {
  font-size: 13px;
  color: #000;
}
.ticket-qr-img {
  width: 130px;
  height: 130px;
}
.barcode-text {
  letter-spacing: 1.5px;
  color: #475569;
}
.total-row {
  font-size: 14px;
  color: #0f172a;
}
.total-amount {
  font-size: 16px;
  color: #15803d;
}
</style>
