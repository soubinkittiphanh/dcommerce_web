<template>
  <v-dialog v-model="visible" scrollable max-width="900px" :fullscreen="isMobile">
    <v-card>
      <v-card-title class="primary white--text">
        <v-icon left color="white">mdi-file-document-check-outline</v-icon>
        ເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດ / Terms & Conditions
        <v-spacer></v-spacer>
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-toolbar flat dense color="grey lighten-4">
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="printTerms" :loading="printing">
          <v-icon left>mdi-printer</v-icon>
          ພິມ (Print / PDF)
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-6 terms-content" id="printable-terms">
        <div class="print-header-only mb-6">
          <div class="d-flex align-center justify-space-between mb-4">
            <div>
              <h1 class="primary--text">D-Commerce POS</h1>
              <p class="text-caption grey--text darken-2">System Usage Terms and Conditions</p>
            </div>
            <div v-if="finalLogoUrl">
              <img :src="finalLogoUrl" alt="Logo" style="max-height: 80px; max-width: 150px" />
            </div>
          </div>
          <v-divider class="mb-4" style="border-width: 2px; border-color: #2196F3 !important"></v-divider>
        </div>

        <div class="terms-section mb-8">
          <h2 class="section-title">1. English Version</h2>
          <h3 class="subtitle mb-4">POS System Terms and Conditions (Updated)</h3>
          
          <div class="term-item mb-4">
            <h4>1. Service Models & Data Responsibility</h4>
            <div class="ml-4">
              <p><strong>Cloud-Based Version:</strong> The Provider manages the server infrastructure and performs regular data backups. The Provider is responsible for data security and hosting availability.</p>
              <p><strong>Offline Version:</strong> The software is installed locally on the User's hardware. The User is solely responsible for data management, manual backups, and security. The Provider is not liable for any data loss caused by hardware failure, theft, or accidental deletion in the Offline version.</p>
            </div>
          </div>

          <div class="term-item mb-4">
            <h4>2. Hardware Warranty (1 Year)</h4>
            <div class="ml-4">
              <p>The Provider provides a one-year (1-year) limited warranty on hardware purchased directly from the Provider.</p>
              <p><strong>Conditions:</strong> This warranty covers manufacturing defects only.</p>
              <p><strong>Exclusions:</strong> The warranty is void if the hardware is damaged due to:</p>
              <ul>
                <li>Physical impact (dropping or breaking).</li>
                <li>Liquids or moisture.</li>
                <li>Improper electrical supply or unauthorized repairs.</li>
              </ul>
            </div>
          </div>

          <div class="term-item mb-4">
            <h4>3. Payment & Subscription</h4>
            <div class="ml-4">
              <p>Cloud users must pay the subscription fee to maintain access.</p>
              <p>Late payment exceeding 7 days will result in the suspension of cloud synchronization.</p>
            </div>
          </div>

          <div class="term-item mb-4">
            <h4>4. NFC Card & Payment Policy</h4>
            <div class="ml-4">
              <p><strong>Card Issuance:</strong> The Provider or User (School/Merchant) issues NFC cards for use with the POS system. These cards act as a digital wallet or identification tool.</p>
              <p><strong>Loss of Card:</strong> The Provider is not responsible for any remaining balance or data lost due to a misplaced, stolen, or physically damaged card.</p>
              <p><strong>Card Care:</strong> Users must not bend, puncture, or expose cards to high heat/magnets, as this may damage the internal chip.</p>
              <p><strong>Unauthorized Use:</strong> The User is responsible for verifying the identity of the cardholder. The Provider is not liable for unauthorized transactions made with a lost or stolen card.</p>
            </div>
          </div>
        </div>

        <v-divider class="my-8"></v-divider>

        <div class="terms-section mb-8">
          <h2 class="section-title">2. Lao Version (ສະບັບພາສາລາວ)</h2>
          <h3 class="subtitle mb-4">ເງື່ອນໄຂ ແລະ ຂໍ້ກຳນົດການນຳໃຊ້ລະບົບ POS (ສະບັບປັບປຸງ)</h3>
          
          <div class="term-item mb-4">
            <h4>1. ຮູບແບບການບໍລິການ ແລະ ຄວາມຮັບຜິດຊອບດ້ານຂໍ້ມູນ</h4>
            <div class="ml-4">
              <p><strong>ແບບລະບົບ Cloud:</strong> ຜູ້ສະໜອງເປັນຜູ້ຈັດການລະບົບ Server ແລະ ສຳຮອງຂໍ້ມູນ (Backup) ໃຫ້. ຜູ້ສະໜອງຮັບຜິດຊອບໃນການເກັບຮັກສາຄວາມປອດໄພຂອງຂໍ້ມູນ.</p>
              <p><strong>ແບບລະບົບ Offline:</strong> ຊອບແວຈະຖືກຕິດຕັ້ງລົງໃນເຄື່ອງຂອງຜູ້ໃຊ້ໂດຍກົງ. ຜູ້ໃຊ້ຕ້ອງຮັບຜິດຊອບຂໍ້ມູນທັງໝົດດ້ວຍຕົນເອງ, ລວມທັງການສຳຮອງຂໍ້ມູນ ແລະ ຄວາມປອດໄພ. ຜູ້ສະໜອງຈະບໍ່ຮັບຜິດຊອບຕໍ່ການສູນເສຍຂໍ້ມູນ ທີ່ເກີດຈາກເຄື່ອງເພ, ເຄື່ອງເສຍ ຫຼື ການລຶບຂໍ້ມູນໂດຍບັງເອີນໃນແບບ Offline.</p>
            </div>
          </div>

          <div class="term-item mb-4">
            <h4>2. ການຮັບປະກັນອຸປະກອນ (1 ປີ)</h4>
            <div class="ml-4">
              <p>ຜູ້ສະໜອງຮັບປະກັນອຸປະກອນທີ່ຊື້ໂດຍກົງນຳພວກເຮົາເປັນເວລາ 1 ປີ.</p>
              <p><strong>ເງື່ອນໄຂ:</strong> ຮັບປະກັນສະເພາະຄວາມຜິດພາດທີ່ເກີດຈາກການຜະລິດເທົ່ານັ້ນ.</p>
              <p><strong>ຂໍ້ຍົກເວັ້ນ:</strong> ການຮັບປະກັນຈະສິ້ນສຸດລົງທັນທີ ຫາກອຸປະກອນເປ່ເພຍ້ອນ:</p>
              <ul>
                <li>ການຕົກເຮ່ຍ, ແຕກຫັກ ຫຼື ຖືກກະທົບຢ່າງແຮງ.</li>
                <li>ຖືກນ້ຳ ຫຼື ຄວາມຊຸ່ມ.</li>
                <li>ໄຟຟ້າລັດວົງຈອນ ຫຼື ການດັດແກ້ເຄື່ອງໂດຍບໍ່ໄດ້ຮັບອະນຸຍາດ.</li>
              </ul>
            </div>
          </div>

          <div class="term-item mb-4">
            <h4>3. ການຊຳລະເງິນ ແລະ ການຕໍ່ສັນຍາ</h4>
            <div class="ml-4">
              <p>ສຳລັບຜູ້ໃຊ້ແບບ Cloud ຕ້ອງຊຳລະຄ່າບໍລິການຕາມກຳນົດເພື່ອຮັກສາການເຂົ້າເຖິງຂໍ້ມູນ.</p>
              <p>ຫາກຊຳລະຊ້າເກີນ 7 ວັນ, ລະບົບ Cloud ຈະຖືກລະງັບການເຊື່ອມຕໍ່ຊົ່ວຄາວ.</p>
            </div>
          </div>

          <div class="term-item mb-4">
            <h4>4. ນະໂຍບາຍການນຳໃຊ້ບັດ NFC ແລະ ການຊຳລະເງິນ</h4>
            <div class="ml-4">
              <p><strong>ການອອກບັດ:</strong> ຜູ້ສະໜອງ ຫຼື ຜູ້ໃຊ້ (ໂຮງຮຽນ/ຮ້ານຄ້າ) ເປັນຜູ້ອອກບັດ NFC ເພື່ອນຳໃຊ້ກັບລະບົບ POS. ບັດເຫຼົ່ານີ້ໃຊ້ເປັນກະເປົາເງິນດິຈິຕອນ ຫຼື ບັດປະຈຳຕົວ.</p>
              <p><strong>ກໍລະນີບັດເສຍ:</strong> ຜູ້ສະໜອງຈະບໍ່ຮັບຜິດຊອບຕໍ່ຍອດເງິນທີ່ເຫຼືອ ຫຼື ຂໍ້ມູນທີ່ສູນເສຍ ຍ້ອນບັດເສຍ, ຖືກລັກ ຫຼື ບັດຊຳລຸດ.</p>
              <p><strong>ການຮັກສາບັດ:</strong> ຜູ້ໃຊ້ບໍ່ຄວນຫັກງໍບັດ, ເຈາະຮູ ຫຼື ວາງບັດໄວ້ບ່ອນທີ່ມີຄວາມຮ້ອນສູງ/ແມ່ເຫຼັກ ເພາະອາດເຮັດໃຫ້ຊິບ (Chip) ພາຍໃນເສຍຫາຍ.</p>
              <p><strong>ການນຳໃຊ້ໂດຍບໍ່ໄດ້ຮັບອະນຸຍາດ:</strong> ຜູ້ໃຊ້ (ຮ້ານຄ້າ) ມີໜ້າທີ່ກວດສອບຕົວຕົນຂອງຜູ້ຖືບັດ. ຜູ້ສະໜອງຈະບໍ່ຮັບຜິດຊອບຕໍ່ທຸລະກຳທີ່ເກີດຂຶ້ນຈາກບັດທີ່ຖືກລັກ ຫຼື ນຳໃຊ້ໂດຍບຸກຄົນອື່ນ.</p>
            </div>
          </div>
        </div>

        <!-- Signatures and Stamps Section -->
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
              <p class="mb-2"><strong>ຜູ້ຊົມໃຊ້ / User</strong></p>
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
          <p>© {{ new Date().getFullYear() }} D-Commerce POS. All rights reserved.</p>
          <p>Printed on: {{ currentDateTime }}</p>
        </div>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" text @click="close">ປິດ (Close)</v-btn>
        <v-btn color="success" outlined to="/admin/tutorial" @click="close">
          <v-icon left>mdi-lifebuoy</v-icon>
          ສາທິດການນຳໃຊ້ (Tutorial)
        </v-btn>
        <v-btn color="primary" @click="printTerms">
          <v-icon left>mdi-printer</v-icon>
          ພິມ (Print / PDF)
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
      printing: false,
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
    printTerms() {
      this.printing = true
      
      // We use a specific stylesheet for printing to ensure only the terms content is printed
      // and formatted correctly for paper.
      
      this.$nextTick(() => {
        const printWindow = window.open('', '_blank');
        const content = document.getElementById('printable-terms').innerHTML;
        
        printWindow.document.write(`
          <html>
            <head>
              <title>Terms and Conditions - D-Commerce POS</title>
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
              <style>
                body {
                  font-family: 'Noto Sans Lao', sans-serif;
                  padding: 40px;
                  color: #333;
                  line-height: 1.6;
                }
                .primary--text { color: #1976D2; }
                .section-title { 
                  border-bottom: 2px solid #1976D2; 
                  padding-bottom: 10px; 
                  margin-top: 30px;
                  color: #1976D2;
                }
                .subtitle { 
                  font-style: italic; 
                  color: #666;
                  margin-bottom: 20px;
                }
                h4 { 
                  margin-bottom: 10px; 
                  color: #333;
                  background-color: #f5f5f5;
                  padding: 5px 10px;
                  border-left: 4px solid #1976D2;
                }
                p { margin-bottom: 10px; }
                ul { margin-bottom: 15px; }
                li { margin-bottom: 5px; }
                .mb-4 { margin-bottom: 16px; }
                .mb-8 { margin-bottom: 32px; }
                .mt-8 { margin-top: 32px; }
                .ml-4 { margin-left: 24px; }
                .text-center { text-align: center; }
                .d-flex { display: flex; }
                .align-center { align-items: center; }
                .align-end { align-items: flex-end; }
                .justify-space-between { justify-content: space-between; }
                .grey--text { color: #757575; }
                .mb-2 { margin-bottom: 8px; }
                .my-2 { margin-top: 8px; margin-bottom: 8px; }
                .text-caption { font-size: 0.75rem; }
                hr, .v-divider { 
                  border-top: 1px solid #e0e0e0;
                  margin: 20px 0;
                  border-left: none;
                  border-right: none;
                  border-bottom: none;
                }
                img { max-height: 80px; }
                .signature-section { margin-top: 32px; page-break-inside: avoid; }
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
              <script>
                window.onload = function() {
                  window.print();
                  window.onafterprint = function() {
                    window.close();
                  };
                }
              </' + 'script>
            </body>
          </html>
        `);
        
        printWindow.document.close();
        this.printing = false;
      })
    }
  }
}
</script>

<style scoped>
.terms-content {
  font-family: 'Noto Sans Lao', sans-serif;
  line-height: 1.6;
}

.section-title {
  color: #1976D2;
  font-size: 1.5rem;
  border-left: 5px solid #1976D2;
  padding-left: 15px;
  margin-top: 20px;
}

.subtitle {
  font-weight: 500;
  color: #555;
}

.term-item h4 {
  color: #333;
  margin-bottom: 8px;
  font-weight: 700;
}

.print-header-only, .print-footer-only {
  display: none;
}

.signature-section {
  margin-top: 32px;
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

@media print {
  .print-header-only, .print-footer-only {
    display: block !important;
  }
}
</style>
