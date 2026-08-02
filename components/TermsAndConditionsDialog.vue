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
        <v-btn color="primary" :loading="printing" @click="printTerms">
          <v-icon left>mdi-printer</v-icon>
          ພິມ (Print / PDF)
        </v-btn>
      </v-toolbar>

      <v-card-text id="printable-terms" class="pa-6 terms-content">
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

        <!-- Agreement Service Model Selection (Visible on both Screen and Print) -->
        <div class="service-model-selection mb-6 pa-4 rounded-lg">
          <div class="d-flex align-center justify-space-between flex-wrap">
            <div class="selection-title-group mb-3 mb-sm-0">
              <h3 class="subtitle-1 font-weight-bold primary--text mb-1">
                ເລືອກຮູບແບບການບໍລິການ / Agreement Version
              </h3>
              <p class="text-caption grey--text text--darken-1 mb-0">
                ກະລຸນາເລືອກຮູບແບບການບໍລິການທີ່ທ່ານຕົກລົງນຳໃຊ້ / Please select the service model you agree to use
              </p>
            </div>
            <div class="d-flex align-center flex-wrap">
              <div class="checkbox-item d-flex align-center mr-6" style="cursor: pointer;" @click="toggleVersion('online')">
                <span class="custom-checkbox mr-2" :class="{ 'checked': isOnlineVersion }"></span>
                <span class="font-weight-medium">Cloud-Based (Online) / ແບບລະບົບ Cloud</span>
              </div>
              <div class="checkbox-item d-flex align-center" style="cursor: pointer;" @click="toggleVersion('offline')">
                <span class="custom-checkbox mr-2" :class="{ 'checked': isOfflineVersion }"></span>
                <span class="font-weight-medium">Offline Version / ແບບລະບົບ Offline</span>
              </div>
            </div>
          </div>
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

          <div class="term-item mb-4">
            <h4>5. Dynamic QR & Bank API Disclaimer</h4>
            <div class="ml-4">
              <p><strong>Integration & Connection:</strong> The Provider may integrate the POS/software services with bank APIs for dynamic QR code payment generation and transaction verification.</p>
              <p><strong>Service Outages & Liability:</strong> Since these services depend on third-party networks, internet connectivity, and the bank's own API infrastructure, the Provider is not liable for payment processing delays, failed QR generation, timeout errors, or unsuccessful transactions due to the bank's API or server issues.</p>
              <p><strong>Exclusion of Claims:</strong> The User (including Banks and partner Merchants) agrees not to submit complaints, claims, or disputes to the Provider, nor hold the Provider liable for financial loss, missed sales, or transaction discrepancies caused by bank API issues or downtime.</p>
            </div>
          </div>

          <div class="term-item mb-4">
            <h4>6. System Functionality & Customizations</h4>
            <div class="ml-4">
              <p>The User agrees that they have reviewed and accepted the standard system functionality details for MINIMART POS and RESTAURANT POS (available on the <nuxt-link to="/admin/system-details">System Functionality Details Page</nuxt-link>). Any additional requirements, customizations, or modifications requested by the User that fall outside these standard specifications may incur additional development, integration, or support charges.</p>
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

          <div class="term-item mb-4">
            <h4>5. ຂໍ້ກຳນົດ ແລະ ຂໍ້ຈຳກັດຄວາມຮັບຜິດຊອບກ່ຽວກັບ API ຂອງທະນາຄານ (Dynamic QR)</h4>
            <div class="ml-4">
              <p><strong>ການເຊື່ອມຕໍ່ລະບົບ:</strong> ຜູ້ສະໜອງອາດຈະມີການເຊື່ອມຕໍ່ກັບ API ຂອງທະນາຄານ ເພື່ອສ້າງ Dynamic QR code ແລະ ກວດສອບທຸລະກຳການຊຳລະເງິນ.</p>
              <p><strong>ຄວາມຮັບຜິດຊອບ ແລະ ລະບົບຂັດຂ້ອງ:</strong> ເນື່ອງຈາກການບໍລິການເຫຼົ່ານີ້ຂຶ້ນກັບເຄືອຂ່າຍພາຍນອກ ແລະ ໂຄງສ້າງລະບົບ API ຂອງທະນາຄານເອງ, ຜູ້ສະໜອງຈະບໍ່ຮັບຜິດຊອບຕໍ່ຄວາມຊັກຊ້າໃນການຊຳລະເງິນ, ຄວາມຫຼົ້ມເຫຼວໃນການສ້າງ QR code, ບັນຫາເຄືອຂ່າຍ (timeout) ຫຼື ທຸລະກຳທີ່ບໍ່ສຳເລັດ ທີ່ເກີດຈາກລະບົບ API ຫຼື Server ຂອງທະນາຄານຂັດຂ້ອງ.</p>
              <p><strong>ການຍົກເວັ້ນການຮ້ອງຮຽນ:</strong> ຜູ້ໃຊ້ (ລວມທັງ ທະນາຄານ ແລະ ຮ້ານຄ້າຮ່ວມລາຍການ) ຕົກລົງທີ່ຈະບໍ່ຮ້ອງຮຽນ, ຟ້ອງຮ້ອງ ຫຼື ຂໍ້ຂັດແຍ່ງໃດໆ ມາຍັງຜູ້ສະໜອງ, ແລະ ຈະບໍ່ໃຫ້ຜູ້ສະໜອງຮັບຜິດຊອບຕໍ່ຄວາມເສຍຫາຍທາງການເງິນ, ການເສຍໂອກາດທາງການຄ້າ ຫຼື ຄວາມຜິດພາດຂອງທຸລະກຳ ທີ່ເກີດຈາກບັນຫາ API ຂອງທະນາຄານເອງ.</p>
            </div>
          </div>

          <div class="term-item mb-4">
            <h4>6. ການເຮັດວຽກຂອງລະບົບ ແລະ ການປັບແຕ່ງເພີ່ມເຕີມ</h4>
            <div class="ml-4">
              <p>ຜູ້ໃຊ້ງານຕົກລົງວ່າໄດ້ກວດກາ ແລະ ຍອມຮັບຄຸນສົມບັດການເຮັດວຽກມາດຕະຖານຂອງລະບົບ (System Functionality) ສໍາລັບ Minimart POS ແລະ Restaurant POS (ທີ່ລະບຸໄວ້ໃນ <nuxt-link to="/admin/system-details">ໜ້າລາຍລະອຽດການເຮັດວຽກຂອງລະບົບ</nuxt-link>) ແລ້ວ. ຫາກຜູ້ໃຊ້ງານມີຄວາມຕ້ອງການເພີ່ມເຕີມ, ດັດແກ້ ຫຼື ປັບແຕ່ງນອກເໜືອຈາກຄຸນສົມບັດມາດຕະຖານເຫຼົ່ານີ້, ຈະມີການຄິດໄລ່ຄ່າບໍລິການເພີ່ມເຕີມໃນການພັດທະນາ ຫຼື ການຕິດຕັ້ງ.</p>
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
        <v-btn color="info" outlined to="/admin/system-details" @click="close">
          <v-icon left>mdi-information-outline</v-icon>
          ຄຸນສົມບັດລະບົບ (System Details)
        </v-btn>
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
      isOnlineVersion: false,
      isOfflineVersion: false,
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
    toggleVersion(type) {
      if (type === 'online') {
        this.isOnlineVersion = !this.isOnlineVersion
        if (this.isOnlineVersion) {
          this.isOfflineVersion = false
        }
      } else if (type === 'offline') {
        this.isOfflineVersion = !this.isOfflineVersion
        if (this.isOfflineVersion) {
          this.isOnlineVersion = false
        }
      }
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
                .service-model-selection {
                  background-color: #f5f5f5;
                  border: 1px solid #ddd;
                  border-radius: 6px;
                  padding: 12px;
                  margin-bottom: 20px;
                }
                .selection-title-group h3 {
                  margin: 0 0 4px 0;
                  color: #1976D2;
                  font-size: 16px;
                }
                .selection-title-group p {
                  margin: 0;
                  color: #666;
                  font-size: 12px;
                }
                .custom-checkbox {
                  display: inline-block;
                  width: 18px;
                  height: 18px;
                  border: 2px solid #1976D2;
                  border-radius: 3px;
                  position: relative;
                  background-color: white;
                  vertical-align: middle;
                }
                .custom-checkbox.checked {
                  background-color: #1976D2;
                }
                .custom-checkbox.checked::after {
                  content: "";
                  position: absolute;
                  left: 5px;
                  top: 1px;
                  width: 4px;
                  height: 8px;
                  border: solid white;
                  border-width: 0 2px 2px 0;
                  transform: rotate(45deg);
                }
                .checkbox-item {
                  display: inline-flex;
                  align-items: center;
                  cursor: pointer;
                }
                .checkbox-item span {
                  font-size: 14px;
                }
                .mr-2 { margin-right: 8px; }
                .mr-6 { margin-right: 24px; }
                .mb-1 { margin-bottom: 4px; }
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

.service-model-selection {
  background-color: #E3F2FD;
  border: 1px solid #90CAF9;
  padding: 16px;
}

.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #1976D2;
  border-radius: 4px;
  position: relative;
  background-color: white;
  transition: all 0.2s ease;
  vertical-align: middle;
}

.custom-checkbox.checked {
  background-color: #1976D2;
}

.custom-checkbox.checked::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-item {
  user-select: none;
}
</style>
