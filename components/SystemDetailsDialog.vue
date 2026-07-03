<template>
  <v-dialog v-model="visible" scrollable max-width="950px" :fullscreen="isMobile">
    <v-card class="system-details-card">
      <v-card-title class="primary white--text py-3 elevation-2">
        <v-icon left color="white">mdi-information-outline</v-icon>
        <span>ລາຍລະອຽດການເຮັດວຽກຂອງລະບົບ / System Functionality Details</span>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-toolbar flat dense color="grey lighten-4" class="px-2">
        <span class="text-subtitle-2 grey--text text--darken-1 font-weight-medium">
          D-Commerce POS Specification sheet
        </span>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="printDetails" :loading="printing" class="elevation-1">
          <v-icon left>mdi-printer</v-icon>
          ພິມ / ດາວໂຫຼດ (Print / PDF)
        </v-btn>
      </v-toolbar>

      <v-card-text id="printable-details" class="pa-6 details-content">
        <!-- Print Header -->
        <div class="print-header-only mb-6">
          <div class="d-flex align-center justify-space-between mb-4">
            <div>
              <h1 class="primary--text font-weight-bold mb-1">D-Commerce POS & ERP</h1>
              <p class="text-caption grey--text text--darken-2">System Architecture & Technical Specifications</p>
            </div>
            <div v-if="finalLogoUrl">
              <img :src="finalLogoUrl" alt="Logo" style="max-height: 70px; max-width: 150px; object-fit: contain;" />
            </div>
          </div>
          <v-divider class="mb-4" style="border-width: 2px; border-color: #1976D2 !important"></v-divider>
        </div>

        <div class="intro-section mb-6">
          <h2 class="text-h6 font-weight-bold primary--text mb-2">
            ພາບລວມລະບົບ / System Overview
          </h2>
          <p class="text-body-2 text-justify">
            ລະບົບ D-Commerce POS ເປັນລະບົບຄຸ້ມຄອງການຂາຍໜ້າຮ້ານ ແລະ ການຄຸ້ມຄອງສາງສິນຄ້າທີ່ຄົບວົງຈອນ ເໝາະສຳລັບຮ້ານຄ້າຂາຍຍ່ອຍ, ມິນິມາດ (Minimart), ຮ້ານອາຫານ, ຄາເຟ່ (Café) ແລະ ລະບົບໂຮງຮຽນ. ລະບົບໄດ້ອອກແບບມາເພື່ອຮອງຮັບການເຮັດວຽກທັງແບບ Online ແລະ Offline ພ້ອມທັງລະບົບຊຳລະເງິນຜ່ານບັດ NFC ທີ່ທັນສະໄໝ.
          </p>
          <p class="text-body-2 text-justify italic-text grey--text text--darken-2">
            The D-Commerce POS is an end-to-end point-of-sale and inventory management platform designed for retail shops, minimarts, restaurants, cafés, and schools. Engineered for hybrid offline-online capability, it includes integrations for accounting, purchasing, and closed-loop NFC cashless payments.
          </p>
        </div>

        <v-divider class="my-6"></v-divider>

        <!-- Feature Grid -->
        <div class="features-section">
          <h2 class="text-h6 font-weight-bold primary--text mb-4">
            ຄຸນສົມບັດຫຼັກຂອງລະບົບ / Core System Modules
          </h2>

          <div class="feature-item mb-6">
            <div class="feature-title-box d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-monitor-dashboard</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold">1. Point of Sale (POS) / ລະບົບໜ້າຮ້ານ</h3>
            </div>
            <div class="ml-8 text-body-2">
              <p><strong>ມິນິມາດ ແລະ ຂາຍຍ່ອຍ (Retail POS):</strong> ຮອງຮັບການສະແກນບາໂຄດສິນຄ້າຢ່າງວ່ອງໄວ, ການຄຸ້ມຄອງກະການຂາຍຂອງພະນັກງານ (Shift Management), ການພິມບິນ ແລະ ການຄິດໄລ່ພາສີອາກອນ.</p>
              <p><strong>ຮ້ານອາຫານ ແລະ ຄາເຟ່ (F&B POS):</strong> ລະບົບຈັດການໂຕະ, ສັ່ງອາຫານເຂົ້າເຮືອນຄົວ, ແຍກບິນ/ຮວມບິນ (Split Bill), ແລະ ຕິດຕາມສະຖານະການກະກຽມອາຫານ.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Retail & Minimart POS:</strong> High-speed barcode scanning, automated shift management, instant thermal receipt printing, and sales tax calculations.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Restaurant & Café POS:</strong> Interactive table mapping, smart kitchen routing, ticket split/merge billing, and live preparation tracking.</p>
            </div>
          </div>

          <div class="feature-item mb-6">
            <div class="feature-title-box d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-package-variant-closed</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold">2. Inventory & Stock Management / ລະບົບສາງ ແລະ ສະຕັອກ</h3>
            </div>
            <div class="ml-8 text-body-2">
              <p><strong>ຄຸ້ມຄອງສະຕັອກ (Inventory Control):</strong> ກວດສອບສິນຄ້າຄົງເຫຼືອແບບ Real-time, ປັບປຸງສະຕັອກ ແລະ ໂອນຍ້າຍສິນຄ້າລະຫວ່າງສາຂາ.</p>
              <p><strong>ແຈ້ງເຕືອນສະຕັອກໃກ້ໝົດ (Min-Stock Alerts):</strong> ລະບົບເຕືອນອັດຕາໂນມັດເມື່ອສິນຄ້າຫຼຸດກາຍຈຸດກຳນົດ ເພື່ອວາງແຜນສັ່ງຊື້ທັນເວລາ.</p>
              <p><strong>ກວດສອບຍ້ອນຫຼັງ (Backdate Inventory):</strong> ຕິດຕາມປະຫວັດການເຄື່ອນໄຫວ ແລະ ມູນຄ່າສາງສິນຄ້າຍ້ອນຫຼັງໃນແຕ່ລະຊ່ວງເວລາ.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Real-time Inventory Tracking:</strong> Monitor stock levels, handle adjustments, and manage branch-to-branch stock transfers dynamically.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Low Stock Warnings:</strong> Automatic indicators when items hit minimum safety thresholds to streamline reordering.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Historic Stock Ledger (Backdate):</strong> Reconstruct inventory valuations and balances for audit and review on past dates.</p>
            </div>
          </div>

          <div class="feature-item mb-6">
            <div class="feature-title-box d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-cart-arrow-down</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold">3. Purchasing & Vendor Management / ລະບົບຈັດຊື້ ແລະ ຜູ້ສະໜອງ</h3>
            </div>
            <div class="ml-8 text-body-2">
              <p><strong>ໃບສັ່ງຊື້ (Purchase Orders):</strong> ສ້າງ ແລະ ຈັດການເອກະສານສັ່ງຊື້ສິນຄ້ານຳຜູ້ສະໜອງ (PO) ພ້ອມລະບົບອະນຸມັດ.</p>
              <p><strong>ຮັບສິນຄ້າເຂົ້າສາງ (Receiving):</strong> ບັນທຶກການຮັບສິນຄ້າເຂົ້າສາງ, ກວດສອບຄວາມຖືກຕ້ອງ ແລະ ອັບເດດຕົ້ນທຶນສະເລ່ຍອັດຕາໂນມັດ.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Purchase Requisitions:</strong> Create, track, and authorize Purchase Orders (PO) issued to suppliers.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Goods Receiving & Costing:</strong> Log inventory deliveries against POs, audit unit quantities, and auto-calculate weighted average costs.</p>
            </div>
          </div>

          <div class="feature-item mb-6">
            <div class="feature-title-box d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-calculator</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold">4. Accounting & Financial Reports / ລະບົບບັນຊີ ແລະ ໃບລາຍງານການເງິນ</h3>
            </div>
            <div class="ml-8 text-body-2">
              <p><strong>ບັນຊີທົ່ວໄປ (General Ledger):</strong> ລະບົບລົງບັນຊີປະຈຳວັນ (Journal Voucher) ແລະ ສ້າງບັນຊີແຍກປະເພດອັດຕະໂນມັດ.</p>
              <p><strong>ໜີ້ຕ້ອງຮັບ ແລະ ໜີ້ຕ້ອງສົ່ງ (AR & AP):</strong> ຄຸ້ມຄອງໃບເກັບເງິນ (Invoice), ໃບສະເໜີລາຄາ (Quotation), ຕິດຕາມການເກັບເງິນລູກຄ້າ ແລະ ຊຳລະໜີ້ຜູ້ສະໜອງ.</p>
              <p><strong>ໃບລາຍງານການເງິນ (Financial Statements):</strong> ລາຍງານກຳໄລ-ຂາດທຶນ (Profit & Loss), ຍອດຂາຍປະຈຳວັນ, ແລະ ປະຫວັດທຸລະກຳການເງິນ.</p>
              <p class="italic-text grey--text text--darken-2"><strong>General Ledger (GL):</strong> Automatic ledger entries mapping from sales, purchases, and journals supporting fiscal periods.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Accounts Receivable & Payable:</strong> Create Quotations, issue Invoices, process payments, and manage vendor payables.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Financial Reports:</strong> Generate instant Profit and Loss (P&L) statements, end-of-day closings, and reconciliation sheets.</p>
            </div>
          </div>

          <div class="feature-item mb-6">
            <div class="feature-title-box d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-credit-card-nfc-outline</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold">5. NFC Closed-Loop Payment System / ລະບົບຊຳລະເງິນຜ່ານບັດ NFC</h3>
            </div>
            <div class="ml-8 text-body-2">
              <p><strong>ອອກບັດສະມາຊິກ (NFC Card Issuance):</strong> ອອກບັດ NFC ສຳລັບນັກຮຽນ, ພະນັກງານ ຫຼື ສະມາຊິກ ເພື່ອໃຊ້ເປັນບັດປະຈຳຕົວ ແລະ ບັດຊຳລະເງິນ.</p>
              <p><strong>ກະເປົາເງິນດິຈິຕອນ (Cashless Wallet):</strong> ຮອງຮັບການຕື່ມເງິນ (Deposit) ແລະ ຖອນເງິນ (Withdraw) ໃສ່ບັດ ເພື່ອຊື້ສິນຄ້າພາຍໃນໂຮງຮຽນ ຫຼື ບໍລິສັດ ໂດຍບໍ່ຕ້ອງໃຊ້ເງິນສົດ.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Smart NFC Card Issuance:</strong> Provision physical NFC cards/tags for students, employees, or loyal customers.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Closed-Loop Cashless Payments:</strong> Manage high-security top-ups, debiting, and refunds directly from the cards at POS terminals.</p>
            </div>
          </div>

          <div class="feature-item mb-6">
            <div class="feature-title-box d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-cloud-sync-outline</v-icon>
              <h3 class="text-subtitle-1 font-weight-bold">6. Hybrid Architecture & Security / ສະຖາປັດຕະຍະກຳລະບົບ ແລະ ຄວາມປອດໄພ</h3>
            </div>
            <div class="ml-8 text-body-2">
              <p><strong>ລະບົບແບບ Hybrid:</strong> ເຮັດວຽກໄດ້ຢ່າງຕໍ່ເນື່ອງເຖິງວ່າຈະບໍ່ມີອິນເຕີເນັດ (Offline mode) ແລະ ຈະຊິ້ງຂໍ້ມູນອັດຕະໂນມັດເມື່ອມີການເຊື່ອມຕໍ່ (Cloud sync).</p>
              <p><strong>ຄຸ້ມຄອງສິດຜູ້ໃຊ້ (Role-Based Permissions):</strong> ແບ່ງກຸ່ມຜູ້ໃຊ້ເຊັ່ນ: Cashier, Manager, Accountant ພ້ອມກຳນົດສິດເຂົ້າເຖິງຂໍ້ມູນຢ່າງລະອຽດ.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Offline-Capable (Hybrid):</strong> Local database lets cashiers transact without interruptions. Data auto-synchronizes to the cloud server once online.</p>
              <p class="italic-text grey--text text--darken-2"><strong>Granular Security Controls:</strong> Restrict features, reports, and administrative tasks based on predefined staff user groups.</p>
            </div>
          </div>
        </div>

        <!-- Stamp & Signatures Block for Official Specifications Sheet -->
        <div class="signature-section mt-8">
          <div class="d-flex justify-space-between align-end">
            <!-- Left Side: Provider Signature & Stamp -->
            <div class="signature-box text-center" style="width: 250px;">
              <p class="mb-2"><strong>ຜູ້ສະໜອງ / Provider</strong></p>
              <div class="stamp-container" style="position: relative; height: 130px; display: flex; justify-content: center; align-items: center;">
                <img :src="signatureImg" class="signature-img" alt="Signature" style="max-height: 60px; position: absolute; z-index: 2;" />
                <img :src="stampImg" class="stamp-img" alt="Stamp" style="max-height: 120px; opacity: 0.85; position: absolute; z-index: 1; transform: translate(20px, -10px);" />
              </div>
              <v-divider class="my-2"></v-divider>
              <p class="text-caption grey--text">D-Commerce Sole Co., Ltd</p>
            </div>
            
            <!-- Right Side: User Signature & Stamp placeholder -->
            <div class="signature-box text-center" style="width: 250px;">
              <p class="mb-2"><strong>ຜູ້ຮັບຊາບ / Acknowledged By</strong></p>
              <div style="height: 130px; display: flex; justify-content: center; align-items: center;">
                <span class="grey--text lighten-2" style="font-size: 0.85rem;">(ລາຍເຊັນ ແລະ ປະທັບກາ)</span>
              </div>
              <v-divider class="my-2"></v-divider>
              <p class="text-caption grey--text">Customer Representative</p>
            </div>
          </div>
        </div>

        <div class="print-footer-only mt-8 text-center grey--text text--darken-1">
          <v-divider class="mb-4"></v-divider>
          <p>© {{ new Date().getFullYear() }} D-Commerce POS & ERP. Document Version 1.2</p>
          <p>Printed on: {{ currentDateTime }}</p>
        </div>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" text @click="close">ປິດ (Close)</v-btn>
        <v-btn color="primary" @click="printDetails">
          <v-icon left>mdi-printer</v-icon>
          ພິມ / ດາວໂຫຼດ (Print / PDF)
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    finalLogoUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      printing: false
    }
  },
  computed: {
    visible: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    currentDateTime() {
      return new Date().toLocaleString('lo-LA');
    },
    signatureImg() {
      try {
        return require('~/assets/image/dc_stamp/signature.png')
      } catch {
        return ''
      }
    },
    stampImg() {
      try {
        return require('~/assets/image/dc_stamp/stamp.png')
      } catch {
        return ''
      }
    }
  },
  methods: {
    close() {
      this.visible = false
    },
    printDetails() {
      this.printing = true
      
      this.$nextTick(() => {
        const printWindow = window.open('', '_blank');
        const content = document.getElementById('printable-details').innerHTML;
        
        printWindow.document.write(`
          <html>
            <head>
              <title>System Functionality Specifications - D-Commerce POS</title>
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
              <style>
                body {
                  font-family: 'Noto Sans Lao', sans-serif;
                  padding: 40px;
                  color: #333;
                  line-height: 1.6;
                  font-size: 14px;
                }
                .primary--text { color: #1976D2; }
                h1 { font-size: 24px; margin-bottom: 5px; }
                h2 { 
                  border-bottom: 2px solid #1976D2; 
                  padding-bottom: 8px; 
                  margin-top: 30px;
                  color: #1976D2;
                  font-size: 18px;
                }
                h3 { 
                  margin-top: 15px;
                  margin-bottom: 8px; 
                  color: #333;
                  padding: 5px 0;
                  font-size: 15px;
                }
                p { margin-bottom: 8px; text-align: justify; }
                .italic-text {
                  font-style: italic;
                  color: #555;
                  margin-bottom: 12px;
                }
                .mb-4 { margin-bottom: 16px; }
                .mb-6 { margin-bottom: 24px; }
                .mb-8 { margin-bottom: 32px; }
                .mt-8 { margin-top: 32px; }
                .ml-8 { margin-left: 32px; }
                .text-center { text-align: center; }
                .d-flex { display: flex; }
                .align-center { align-items: center; }
                .align-end { align-items: flex-end; }
                .justify-space-between { justify-content: space-between; }
                .grey--text { color: #757575; }
                .mb-2 { margin-bottom: 8px; }
                .my-2 { margin-top: 8px; margin-bottom: 8px; }
                .text-caption { font-size: 11px; }
                hr, .v-divider { 
                  border-top: 1px solid #e0e0e0;
                  margin: 20px 0;
                  border-left: none;
                  border-right: none;
                  border-bottom: none;
                }
                img { max-height: 70px; }
                .signature-section { margin-top: 40px; page-break-inside: avoid; }
                .signature-box { text-align: center; width: 250px; }
                .stamp-container { position: relative; height: 130px; display: flex; justify-content: center; align-items: center; }
                .stamp-container img { position: absolute; }
                .stamp-img { max-height: 120px !important; z-index: 1; }
                .signature-img { max-height: 60px !important; z-index: 2; }
                @page {
                  margin: 2cm;
                }
                @media print {
                  body { padding: 0; }
                }
              </style>
            </head>
            <body>
              ${content}
            </body>
          </html>
        `);
        
        // Write the script loader carefully to avoid escaping issues
        printWindow.document.write(`
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            }
          </` + `script>
        `);
        
        printWindow.document.close();
        this.printing = false;
      })
    }
  }
}
</script>

<style scoped>
.details-content {
  font-family: 'Noto Sans Lao', sans-serif;
  line-height: 1.6;
}

.italic-text {
  font-style: italic;
  font-size: 0.9rem;
}

.feature-title-box {
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 4px;
}

.signature-section {
  margin-top: 40px;
}

.signature-box {
  text-align: center;
  width: 250px;
}

.stamp-container {
  position: relative;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stamp-img {
  max-height: 120px !important;
  z-index: 1;
}

.signature-img {
  max-height: 60px !important;
  z-index: 2;
}

.print-header-only, .print-footer-only {
  display: none;
}

@media print {
  .print-header-only, .print-footer-only {
    display: block !important;
  }
}
</style>
