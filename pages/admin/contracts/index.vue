<template>
  <v-container class="py-6 min-h-screen grey lighten-4">
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-space-between flex-wrap">
        <v-chip class="pa-5 elevation-1" color="primary" label text-color="white">
          <v-icon start class="mr-2">mdi-file-signature</v-icon>
          <h3>ເອກະສານສັນຍາລະບົບ POS / POS Agreements</h3>
        </v-chip>
        <div class="d-flex align-center mt-3 mt-sm-0 flex-wrap">
          <!-- Language Selector -->
          <v-btn-toggle v-model="lang" mandatory class="mr-4 rounded-lg border elevation-1" color="primary">
            <v-btn value="la" small class="font-weight-bold">
              <v-icon left x-small>mdi-translate</v-icon>
              ພາສາລາວ (Lao)
            </v-btn>
            <v-btn value="en" small class="font-weight-bold">
              <v-icon left x-small>mdi-translate</v-icon>
              English
            </v-btn>
          </v-btn-toggle>

          <v-btn color="grey darken-1" text to="/admin" class="mr-2">
            <v-icon left>mdi-arrow-left</v-icon>
            ກັບຄືນ (Back)
          </v-btn>
          <v-btn color="primary" :loading="printing" elevation="2" class="mr-2" @click="downloadPDF">
            <v-icon left>mdi-file-pdf-box</v-icon>
            ດາວໂຫຼດ PDF (Download PDF)
          </v-btn>
          <v-btn color="success" :loading="printing" elevation="2" @click="downloadWord">
            <v-icon left>mdi-file-word-box</v-icon>
            ດາວໂຫຼດ Word (Download Word)
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-card class="elevation-3 rounded-lg overflow-hidden">
      <!-- Tabs to switch between Hotel POS and Bank LVB agreements -->
      <v-tabs v-model="tab" background-color="primary" dark grow class="elevation-1">
        <v-tab class="font-weight-bold">
          <v-icon left>mdi-office-building</v-icon>
          ສັນຍາກັບໂຮງແຮມ (Hotel POS Agreement)
        </v-tab>
        <v-tab class="font-weight-bold">
          <v-icon left>mdi-bank</v-icon>
          ສັນຍາກັບທະນາຄານ (Bank LVB Agreement)
        </v-tab>
      </v-tabs>

      <!-- Printable Documents wrapper with soft grey background -->
      <v-card-text id="printable-contracts" class="pa-6 grey lighten-4">
        <v-tabs-items v-model="tab" class="grey lighten-4">
          <!-- HOTEL POS AGREEMENT TAB -->
          <v-tab-item class="grey lighten-4">
            <div class="hotel-agreement-print-container document-card">
              <!-- Print header only visible on export -->
              <div class="print-header-only">
                <div class="d-flex align-center justify-space-between mb-4">
                  <div>
                    <h1 class="primary--text font-weight-bold mb-1">DCOM POS</h1>
                    <p v-if="lang === 'la'" class="text-caption grey--text text--darken-2">ສັນຍາການບໍລິການ ແລະ ນຳໃຊ້ຊອບແວ POS ຮ້ານອາຫານ</p>
                    <p v-else class="text-caption grey--text text--darken-2">Restaurant POS System Service Agreement</p>
                  </div>
                </div>
                <v-divider class="mb-4" style="border-width: 2px; border-color: #1976D2 !important"></v-divider>
              </div>

              <!-- Main Contract Content -->
              <div class="contract-body">
                <!-- LAO VERSION -->
                <div v-if="lang === 'la'">
                  <h1>ສັນຍາການບໍລິການ ແລະ ນຳໃຊ້ຊອບແວ POS ຮ້ານອາຫານ</h1>
                  
                  <p>
                    ສັນຍາສະບັບນີ້ ຖືກເຮັດຂຶ້ນໃນວັນທີ _____ ເດືອນ ____________, 2026 (ຕໍ່ໄປນີ້ເອີ້ນວ່າ "ວັນທີມີຜົນສັກສິດ"), ລະຫວ່າງ:
                  </p>
                  
                  <ol class="mb-6 pl-4">
                    <li class="mb-2"><strong>ບໍລິສັດ ດີຄອມ ວິສາຫະກິດສ່ວນບຸກຄົນ (DCOM SHOP)</strong>, ເປັນບໍລິສັດທີ່ຂຶ້ນທະບຽນຖືກຕ້ອງຕາມກົດໝາຍຂອງ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ, ຕັ້ງຢູ່ ບ້ານໂນນແກ້ວ, ເມືອງສີໂຄດຕະບອງ, ນະຄອນຫລວງວຽງຈັນ (ຕໍ່ໄປນີ້ເອີ້ນວ່າ <strong>"ຜູ້ສະໜອງ"</strong>); ແລະ</li>
                    <li class="mb-2"><strong>UKUN Hotel</strong>, ເປັນບໍລິສັດທີ່ຂຶ້ນທະບຽນຖືກຕ້ອງຕາມກົດໝາຍຂອງ ລາວ, ຕັ້ງຢູ່ ບ້ານສີຫອມ ນະຄອນຫລວງວຽງຈັນ (ຕໍ່ໄປນີ້ເອີ້ນວ່າ <strong>"ຜູ້ໃຊ້ບໍລິການ"</strong> ຫຼື <strong>"ໂຮງແຮມ"</strong>).</li>
                  </ol>

                  <p>
                    ຜູ້ສະໜອງ ແລະ ຜູ້ໃຊ້ບໍລິການ ຕໍ່ໄປນີ້ຈະຮ່ວມກັນເອີ້ນວ່າ "ຄູ່ສັນຍາ" ແລະ ເອີ້ນສະເພາະວ່າ "ຝ່າຍ".
                  </p>

                  <h3 class="section-title">ເຫດຜົນຂອງການເຮັດສັນຍາ</h3>
                  <p>
                    <strong>ເນື່ອງຈາກວ່າ</strong>, ຜູ້ສະໜອງ ເປັນເຈົ້າຂອງລິຂະສິດ ແລະ ຜູ້ພັດທະນາຊອບແວລະບົບຂາຍໜ້າຮ້ານ (POS), ໂດຍສະເພາະແມ່ນລະບົບ <strong>DCOM Restaurant POS</strong> (ລະບົບ POS ສໍາລັບຮ້ານອາຫານ ແລະ ຄາເຟ່); ແລະ
                  </p>
                  <p>
                    <strong>ເນື່ອງຈາກວ່າ</strong>, ຜູ້ໃຊ້ບໍລິການ ດຳເນີນທຸລະກິດຮ້ານອາຫານ ແລະ ເຄື່ອງດື່ມ ພາຍໃນພື້ນທີ່ຂອງໂຮງແຮມ ແລະ ມີຄວາມປະສົງຈະຂໍຮັບສິດນຳໃຊ້ລະບົບຊອບແວ DCOM Restaurant POS, ຈັດຊື້ອຸປະກອນທີ່ກ່ຽວຂ້ອງ, ພ້ອມທັງຮັບບໍລິການຕິດຕັ້ງ ແລະ ບຳລຸງຮັກສາຈາກຜູ້ສະໜອງ;
                  </p>
                  <p class="mb-6">
                    <strong>ດັ່ງນັ້ນ</strong>, ອີງຕາມຂໍ້ຕົກລົງ ແລະ ເງື່ອນໄຂຕ່າງໆໃນສັນຍາສະບັບນີ້, ທັງສອງຝ່າຍ ຈຶ່ງຕົກລົງເຫັນດີເປັນເອກະພາບ ດັ່ງນີ້:
                  </p>

                  <h3 class="section-title">1. ຂອບເຂດການບໍລິການ ແລະ ການອະນຸຍາດນຳໃຊ້ຊອບແວ</h3>
                  <p>
                    <strong>1.1 ຊອບແວທີ່ໄດ້ຮັບອະນຸຍາດ:</strong> ຜູ້ສະໜອງ ອະນຸຍາດໃຫ້ຜູ້ໃຊ້ບໍລິການມີສິດນຳໃຊ້ (License) ຊອບແວ <strong>DCOM Restaurant POS</strong> ພາຍໃນພື້ນທີ່ຂອງໂຮງແຮມ. ຄຸນສົມບັດມາດຕະຖານຂອງລະບົບທີ່ຮວມຢູ່ໃນສິດນຳໃຊ້ນີ້ມີດັ່ງນີ້:
                  </p>
                  <ul class="mb-4 pl-6">
                    <li><strong>ການຈັດການຜັງໂຕະ (Live Table Grid Layout):</strong> ສະແດງຜັງໂຕະພ້ອມສະຖານະແບບ Real-time (ໂຕະວ່າງ - ສີຂຽວ, ໂຕະມີແຂກ - ສີສົ້ມ/ແດງ, ໂຕະຕ້ອງອະນາໄມ - ສີຟ້າ, ໂຕະຖືກຈອງ - ສີຟ້າອ່ອນ).</li>
                    <li><strong>... ລາຍລະອຽດເພີ່ມເຕີມໃນເອກະສານ</strong> (ຮ່ວມທັງການແຍກບິນ Split Bill, ຍ້າຍໂຕະ Transfer Order, ຂາຍແບບ Walk-in, ຈັດການສາງ, ບົດລາຍງານ P&L ແລະ ECharts).</li>
                  </ul>

                  <p>
                    <strong>1.2 ຮູບແບບການຕິດຕັ້ງ ແລະ ຄວາມຮັບຜິດຊອບດ້ານຂໍ້ມູນ:</strong> ຜູ້ໃຊ້ບໍລິການ ຕົກລົງເລືອກຮູບແບບການຕິດຕັ້ງລະບົບ ດັ່ງຕໍ່ໄປນີ້:
                  </p>
                  <div class="mb-6 pl-6">
                    <div class="d-flex align-start mb-2">
                      <span class="custom-checkbox"></span>
                      <div>
                        <strong>ແບບລະບົບ Cloud (Online Version):</strong> ຜູ້ສະໜອງ ເປັນຜູ້ຈັດການລະບົບ Server ພາຍນອກ ແລະ ສຳຮອງຂໍ້ມູນ (Backup) ໃຫ້. ຜູ້ສະໜອງຮັບຜິດຊອບໃນການເກັບຮັກສາຄວາມປອດໄພຂອງຂໍ້ມູນ ແລະ ຄວາມພ້ອມໃນການເຂົ້າເຖິງລະບົບ.
                      </div>
                    </div>
                    <div class="d-flex align-start">
                      <span class="custom-checkbox"></span>
                      <div>
                        <strong>ແບບລະບົບ Offline (Offline Version):</strong> ຊອບແວຈະຖືກຕິດຕັ້ງລົງໃນເຄື່ອງຄອມພິວເຕີພາຍໃນຂອງຜູ້ໃຊ້ບໍລິການໂດຍກົງ. ຜູ້ໃຊ້ບໍລິການຕ້ອງຮັບຜິດຊອບຂໍ້ມູນທັງໝົດດ້ວຍຕົນເອງ. ຜູ້ສະໜອງຈະບໍ່ຮັບຜິດຊອບຕໍ່ການສູນເສຍຂໍ້ມູນ ທີ່ເກີດຈາກເຄື່ອງເພ, ເຄື່ອງເສຍ ຫຼື ການລຶບຂໍ້ມູນໂດຍບັງອີນ.
                      </div>
                    </div>
                  </div>

                  <h3 class="section-title">2. ຄ່າບໍລິການ ແລະ ເງື່ອນໄຂການຊຳລະເງິນ</h3>
                  <p>
                    <strong>2.1 ຄ່າທຳນຽມລະບົບ ແລະ ບໍລິການ:</strong> ຜູ້ໃຊ້ບໍລິການ ຕົກລົງຊຳລະຄ່າບໍລິການຕາມທີ່ລະບຸໄວ້ໃນ ເອກະສານແນບ ກ (ຕາຕະລາງລາຄາ).
                  </p>
                  <p class="mb-6">
                    <strong>2.2 ການຊຳລະເງິນ ແລະ ການລະງັບບໍລິການ:</strong> ສໍາລັບຜູ້ໃຊ້ບໍລິການແບບ Cloud ຕ້ອງຊຳລະຄ່າບໍລິການລ່ວງໜ້າຕາມກຳນົດ. ຫາກຊຳລະຊ້າເກີນ ເຈັດ (7) ວັນ ນັບຈາກວັນຄົບກຳນົດ, ຜູ້ສະໜອງ ມີສິດລະງັບການເຊື່ອມຕໍ່ລະບົບ Cloud ແລະ ປິດການເຂົ້າໃຊ້ງານຊົ່ວຄາວ.
                  </p>

                  <h3 class="section-title">3. ການຮັບປະກັນອຸປະກອນ (Hardware Warranty)</h3>
                  <p>
                    <strong>3.1 การຮັບປະກັນ:</strong> ຜູ້ສະໜອງ ຮັບປະກັນອຸປະກອນເປັນເວລາ <strong>ໜຶ່ງ (1) ປີ</strong> ນັບຈາກວັນທີ່ສົ່ງມອບ (ສະເພາະຄວາມຜິດພາດທີ່ເກີດຈາກການຜະລິດເທົັ້ນັ້ນ).
                  </p>
                  <p class="mb-6">
                    <strong>3.2 ຂໍ້ຍົກເວັ້ນ:</strong> ການຮັບປະກັນຈະສິ້ນສຸດລົງທັນທີ ຫາກອຸປະກອນເສຍຫາຍຍ້ອນ: ການຕົກເຮ່ຍ/ແຕກຫັກ, ຖືກນ້ຳ/ຄວາມຊຸ່ມ, ໄຟຟ້າລັດວົງຈອນ ຫຼື ການດັດແກ້ເຄື່ອງໂດຍບໍ່ໄດ້ຮັບອະນຸຍາດ.
                  </p>

                  <h3 class="section-title">4. ການເຮັດວຽກຂອງລະບົບ ແລະ ການປັບແຕ່ງເພີ່ມເຕີມ</h3>
                  <p class="mb-6">
                    ຄຸນສົມບັດທັງໝົດທີ່ລະບຸໃນສັນຍາສະບັບນີ້ ແມ່ນຄຸນສົມບັດມາດຕະຖານຂອງລະບົບ. ຫາກຜູ້ໃຊ້ງານມີຄວາມຕ້ອງການເພີ່ມເຕີມ, ດັດແກ້, ຫຼື ປັບແຕ່ງລະບົບນອກເໜືອຈາກນີ້, ຈະມີການຄິດໄລ່ຄ່າບໍລິການເພີ່ມເຕີມໃນການພັດທະນາ ຫຼື ການຕິດຕັ້ງ.
                  </p>

                  <h3 class="section-title">5. ການເຊື່ອມຕໍ່ລະບົບພາຍນອກ ແລະ ຂໍ້ຈຳກັດຄວາມຮັບຜິດຊອບກ່ຽວກັບ API ຂອງທະນາຄານ</h3>
                  <p class="mb-6">
                    ເນື່ອງຈາກການບໍລິການເຫຼົ່ານີ້ ຂຶ້ນກັບເຄືອຂ່າຍພາຍນອກ ແລະ ໂຄງສ້າງລະບົບ API ຂອງທະນາຄານເອງ, ຜູ້ສະໜອງ ຈະບໍ່ຮັບຜິດຊອບຕໍ່ຄວາມຊັກຊ້າໃນການຊຳລະເງິນ, ຄວາມຫຼົ້ມເຫຼວໃນການສ້າງ QR Code, ບັນຫາເຄືອຂ່າຍ (timeout) ຫຼື ທຸລະກຳທີ່ບໍ່ສຳເລັດ ທີ່ເກີດຈາກລະບົບ API ຫຼື Server ຂອງທະນາຄານຂັດຂ້ອງ. ຜູ້ໃຊ້ບໍລິການ ຕົກລົງທີ່ຈະບໍ່ຮ້ອງຮຽນ ຫຼື ຮຽກຮ້ອງຄ່າເສຍຫາຍໃດໆ ມາຍັງຜູ້ສະໜອງ.
                  </p>

                  <h3 class="section-title">6. ນະໂຍບາຍການນຳໃຊ້ບັດ NFC ແລະ ການຊຳລະເງິນ (ຫາກມີການນຳໃຊ້)</h3>
                  <p class="mb-6">
                    ໂຮງແຮມມີໜ້າທີ່ຮັບຜິດຊອບໃນການອອກບັດ ແລະ ກວດສອບຕົວຕົນຂອງຜູ້ຖືບັດ. ຜູ້ສະໜອງຈະບໍ່ຮັບຜິດຊອບຕໍ່ຍອດເງິນທີ່ເຫຼືອ ຫຼື ຂໍ້ມູນທີ່ສູນເສຍ ຍ້ອນບັດເສຍ, ຖືກລັກ ຫຼື ບັດຊຳລຸດ. ຜູ້ໃຊ້ບໍ່ຄວນຫັກງໍບັດ, ເຈາະຮູ ຫຼື ວາງບັດໄວ້ບ່ອນທີ່ມີຄວາມຮ້ອນສູງ/ແມ່ເຫຼັກ.
                  </p>

                  <h3 class="section-title">7. ການຮັກສາຄວາມລັບ ແລະ ຄວາມປອດໄພຂອງຂໍ້ມູນ</h3>
                  <p class="mb-6">
                    ຄູ່ສັນຍາທັງສອງຝ່າຍ ຕົກລົງທີ່ຈະຮັກສາຄວາມລັບ ແລະ ບໍ່ເປີດເຜີຍຂໍ້ມູນທາງທຸລະກິດ, ຂໍ້ມູນທາງເຕັກນິກ ຫຼື ຂໍ້ມູນລູກຄ້າຂອງອີກຝ່າຍໃຫ້ແກ່ບຸກຄົນພາຍນອກ.
                  </p>

                  <h3 class="section-title">8. ໄລຍະເວລາສັນຍາ ແລະ ການຍົກເລີກສັນຍາ</h3>
                  <p class="mb-6">
                    ສັນຍາສະບັບນີ້ມີກຳນົດເວລາ 1 ປີ ແລະ ຈະຖືກຕໍ່ສັນຍາໂດຍອັດຕະໂນມັດ ເວັ້ນເສຍແຕ່ຝ່າຍໃດຝ່າຍໜຶ່ງຈະແຈ້ງເປັນລາຍລັກອັກສອນກ່ອນ 30 ວັນ.
                  </p>

                  <h3 class="section-title">9. ກົດໝາຍທີ່ນຳໃຊ້ ແລະ ການແກ້ໄຂຂໍ້ຂັດແຍ່ງ</h3>
                  <p class="mb-8">
                    ສັນຍາສະບັບນີ້ ໃຫ້ຢູ່ພາຍໃຕ້ການຄຸ້ມຄອງ ແລະ ຕີຄວາມໝາຍຕາມກົດໝາຍຂອງ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ.
                  </p>

                  <!-- Signatures Table -->
                  <table class="sig-table">
                    <tr>
                      <td>
                        <p class="mb-2"><strong>ຕາງໜ້າ: ບໍລິສັດ ດີຄອມ ວິສາຫະກິດສ່ວນບຸກຄົນ</strong></p>
                        <div class="stamp-placeholder">
                          <span class="grey--text lighten-2" style="font-size: 0.8rem;">(ລາຍເຊັນ ແລະ ປະທັບກາ)</span>
                        </div>
                        <div class="sig-line"></div>
                        <p class="text-caption grey--text">ຕົວແທນຜູ້ມີສິດອຳນາດ</p>
                      </td>
                      <td>
                        <p class="mb-2"><strong>ຕາງໜ້າ: UKUN Hotel</strong></p>
                        <div class="stamp-placeholder">
                          <span class="grey--text lighten-2" style="font-size: 0.8rem;">(ລາຍເຊັນ ແລະ ປະທັບກາ)</span>
                        </div>
                        <div class="sig-line"></div>
                        <p class="text-caption grey--text">ຕົວແທນຜູ້ມີສິດອຳນາດ</p>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- ENGLISH VERSION -->
                <div v-else>
                  <h1>RESTAURANT POS SOFTWARE AND SERVICE AGREEMENT</h1>
                  
                  <p>
                    This <strong>Software and Service Agreement</strong> (the "Agreement") is entered into this _____ day of ____________, 2026 (the "Effective Date"), by and between:
                  </p>
                  
                  <ol class="mb-6 pl-4">
                    <li class="mb-2"><strong>DCOM SHOP</strong>, a company registered under the laws of the Lao People's Democratic Republic, having its principal place of business at Nonkeo Village, Sikhottabong District, Vientiane, Lao PDR (hereinafter referred to as the <strong>"Provider"</strong>); and</li>
                    <li class="mb-2"><strong>UKUN Hotel</strong>, a company registered under the laws of Lao PDR, having its principal place of business at Sihom Village, Vientiane, Lao PDR (hereinafter referred to as the <strong>"Client"</strong> or <strong>"Hotel"</strong>).</li>
                  </ol>

                  <p>
                    The Provider and the Client are collectively referred to as the "Parties" and individually as a "Party."
                  </p>

                  <h3 class="section-title">RECITALS</h3>
                  <p>
                    <strong>WHEREAS</strong>, the Provider owns and licenses proprietary Point-of-Sale (POS) software solutions, specifically the <strong>DCOM Restaurant POS</strong> system; and
                  </p>
                  <p>
                    <strong>WHEREAS</strong>, the Client operates food and beverage (F&B) outlets within its hotel premises and wishes to obtain a license to use the DCOM Restaurant POS system, purchase corresponding hardware, and receive setup, support, and maintenance services from the Provider;
                  </p>
                  <p class="mb-6">
                    <strong>NOW, THEREFORE</strong>, in consideration of the mutual covenants and conditions contained herein, the Parties agree as follows:
                  </p>

                  <h3 class="section-title">1. SCOPE OF SERVICES & SOFTWARE LICENSING</h3>
                  <p>
                    <strong>1.1 Licensed Software:</strong> The Provider hereby grants the Client a non-exclusive, non-transferable, revocable license to use the <strong>DCOM Restaurant POS</strong> software system at the designated locations within the Hotel. The standard software modules included under this license are:
                  </p>
                  <ul class="mb-4 pl-6">
                    <li><strong>Live Table Grid Layout & Operations:</strong> Real-time visual layout of dining tables with color-coded status tracking (Available, Occupied, Cleaning, Reserved).</li>
                    <li><strong>Seat Customer Management:</strong> Recording of party sizes and table assignments.</li>
                    <li><strong>Order & Ticket Management:</strong> Supporting Table Transfer actions, Split Bill / Split Checkout functionality, and Virtual Tickets for Walk-in or Take-away orders.</li>
                    <li><strong>Inventory & Stock Management:</strong> Real-time stock level tracking, low-stock threshold alerts (minStock), and bulk adjustment tools.</li>
                    <li><strong>Accounting & Profit and Loss Reporting:</strong> Automated generation of Profit & Loss (P&L) statements, financial breakdowns (Revenue, COGS, OPEX), and graphical financial ratio analysis.</li>
                    <li><strong>Dual-Screen Synchronization:</strong> Cart and Dynamic QR display support on secondary customer screens.</li>
                  </ul>
                  
                  <p>
                    <strong>1.2 Deployment Models:</strong> The Client shall select one of the following deployment models by checking the appropriate box below. The model selected governs data responsibilities and service availability terms:
                  </p>
                  <div class="mb-6 pl-6">
                    <div class="d-flex align-start mb-2">
                      <span class="custom-checkbox"></span>
                      <div>
                        <strong>Cloud-Based (Online) Version:</strong> The Provider manages the server infrastructure, hosts the database, and performs regular automated data backups. The Provider is responsible for hosting security and server availability.
                      </div>
                    </div>
                    <div class="d-flex align-start">
                      <span class="custom-checkbox"></span>
                      <div>
                        <strong>Offline Version:</strong> The software is installed locally on the Client’s hardware. The Client is solely responsible for data management, security, and manual database backups. The Provider shall not be liable for any data loss caused by hardware failure, server operating system crashes, theft, or accidental deletion in the Offline deployment.
                      </div>
                    </div>
                  </div>

                  <h3 class="section-title">2. FEES, SUBSCRIPTION, & PAYMENT TERMS</h3>
                  <p>
                    <strong>2.1 License and Service Fees:</strong> The Client agrees to pay the fees set forth in Annex A (Pricing Schedule) attached hereto, which may include software license fees, implementation & setup fees, and hardware fees.
                  </p>
                  <p class="mb-6">
                    <strong>2.2 Payment Schedule and Subscription Maintenance:</strong> For the Cloud-Based version, subscription fees must be paid in advance. If any subscription payment remains unpaid for more than seven (7) calendar days past the due date, the Provider reserves the absolute right to suspend cloud synchronization, remote database connections, and software login permissions without liability for business interruption.
                  </p>

                  <h3 class="section-title">3. HARDWARE WARRANTY & SERVICES</h3>
                  <p>
                    <strong>3.1 Hardware Purchase:</strong> If the Client purchases hardware directly from the Provider (e.g., POS terminals, thermal printers, cash drawers, and NFC card readers), the Provider warrants that such hardware will be free from manufacturing defects under normal use.
                  </p>
                  <p>
                    <strong>3.2 Limited Warranty Period:</strong> The Provider provides a one-year (1-year) limited warranty starting from the date of delivery.
                  </p>
                  <p class="mb-6">
                    <strong>3.3 Conditions and Exclusions:</strong> This warranty covers only electronic or physical components that fail due to manufacturing defects. The warranty is voided immediately if hardware damage is caused by: (1) physical impact, drops, or structural breakage; (2) spills of water, beverages, or exposure to excessive humidity; (3) improper electrical current or voltage surges; (4) repairs or modifications attempted by unauthorized personnel.
                  </p>

                  <h3 class="section-title">4. SYSTEM CUSTOMIZATION & ADDITIONAL FUNCTIONALITIES</h3>
                  <p>
                    <strong>4.1 Standard Specifications:</strong> The Client acknowledges that it has reviewed and accepted the standard system features for the DCOM Restaurant POS (as described on the System Details page).
                  </p>
                  <p class="mb-6">
                    <strong>4.2 Out-of-Scope Customization:</strong> Any customization, integration with third-party software (excluding pre-negotiated bank integrations), workflow modifications, or custom feature requests requested by the Client that fall outside the standard specifications are subject to separate feasibility evaluations and will incur additional development fees and support charges billed at the Provider’s prevailing hourly rates.
                  </p>

                  <h3 class="section-title">5. THIRD-PARTY INTEGRATIONS & BANK API DISCLAIMER</h3>
                  <p>
                    <strong>5.1 Payment Gateway Connections:</strong> The software supports integration with commercial bank APIs (e.g., Lao-Viet Bank / LVB) to generate dynamic QR codes on customer-facing screens and POS interfaces for cashless transactions.
                  </p>
                  <p class="mb-6">
                    <strong>5.2 Service Outages & Liability Limitation:</strong> The Client explicitly acknowledges that payment processing relies on third-party networks, telecommunications infrastructure, internet service providers (ISPs), and external bank API servers. Consequently, the Provider is not liable for any delays in payment processing, failure to generate QR codes, timeout errors, or connection failures caused by the bank’s API or server issues. The Client agrees not to hold the Provider liable for lost revenue, operational delays, or reconciliation discrepancies caused by external bank API issues or downtime.
                  </p>

                  <h3 class="section-title">6. NFC CARDS & CASHLESS PAYMENT POLICY (IF APPLICABLE)</h3>
                  <p class="mb-6">
                    If the Hotel implements the closed-loop NFC cashless card system: (1) the Client is responsible for issuing and activating NFC cards; (2) the Provider is not liable for monetary value or credit balances lost due to misplaced, stolen, or physically damaged cards; (3) cards must be handled carefully (no bending or puncture); (4) the Hotel is responsible for verifying card ownership at the point of sale, and the Provider is not responsible for unauthorized transactions carried out using stolen cards.
                  </p>

                  <h3 class="section-title">7. CONFIDENTIALITY & DATA PRIVACY</h3>
                  <p class="mb-6">
                    Each Party shall keep confidential and not disclose to any third party any commercial, financial, technical, or customer database information received from the other Party in connection with this Agreement. The Client owns all transactional and sales data, but the Provider retains all intellectual property rights in the software.
                  </p>

                  <h3 class="section-title">8. TERM AND TERMINATION</h3>
                  <p class="mb-6">
                    This Agreement is valid for a period of One (1) Year from the Effective Date and shall automatically renew unless either Party gives a thirty (30) days written notice of non-renewal. Either Party may terminate this Agreement immediately if the other Party commits a material breach of any terms and fails to cure such breach within fifteen (15) days of receiving written notice.
                  </p>

                  <h3 class="section-title">9. GOVERNING LAW & DISPUTE RESOLUTION</h3>
                  <p class="mb-8">
                    This Agreement shall be governed by and construed in accordance with the laws of the Lao People's Democratic Republic. Any dispute arising out of or in connection with this Agreement shall be settled amicably, failing which it shall be referred to the competent court in Vientiane, Lao PDR.
                  </p>

                  <!-- Signatures Table -->
                  <table class="sig-table">
                    <tr>
                      <td>
                        <p class="mb-2"><strong>For: DCOM SHOP</strong></p>
                        <div class="stamp-placeholder">
                          <span class="grey--text lighten-2" style="font-size: 0.8rem;">(Stamp & Signature)</span>
                        </div>
                        <div class="sig-line"></div>
                        <p class="text-caption grey--text">Authorized Representative</p>
                      </td>
                      <td>
                        <p class="mb-2"><strong>For: UKUN Hotel</strong></p>
                        <div class="stamp-placeholder">
                          <span class="grey--text lighten-2" style="font-size: 0.8rem;">(Stamp & Signature)</span>
                        </div>
                        <div class="sig-line"></div>
                        <p class="text-caption grey--text">Authorized Representative</p>
                      </td>
                    </tr>
                  </table>
                </div>

                <div class="print-footer-only mt-8 text-center grey--text text--darken-1">
                  <v-divider class="mb-4"></v-divider>
                  <p v-if="lang === 'la'">© {{ new Date().getFullYear() }} DCOM POS. ສັນຍາ POS ຮ້ານອາຫານ</p>
                  <p v-else>© {{ new Date().getFullYear() }} DCOM POS. Hotel Restaurant POS Agreement</p>
                </div>
              </div>
            </div>
          </v-tab-item>

          <!-- BANK LVB AGREEMENT TAB -->
          <v-tab-item class="grey lighten-4">
            <div class="bank-agreement-print-container document-card">
              <!-- Print header only visible on export -->
              <div class="print-header-only">
                <div class="d-flex align-center justify-space-between mb-4">
                  <div>
                    <h1 class="primary--text font-weight-bold mb-1">DCOM POS</h1>
                    <p v-if="lang === 'la'" class="text-caption grey--text text--darken-2">ສັນຍາການຮ່ວມມື, ການຈັດຊື້ລະບົບ POS ແລະ ການເຊື່ອມຕໍ່ລະບົບຊຳລະເງິນ</p>
                    <p v-else class="text-caption grey--text text--darken-2">Bank Cooperation & Payment Gateway Integration Agreement</p>
                  </div>
                </div>
                <v-divider class="mb-4" style="border-width: 2px; border-color: #1976D2 !important"></v-divider>
              </div>

              <!-- Main Contract Content -->
              <div class="contract-body">
                <!-- LAO VERSION -->
                <div v-if="lang === 'la'">
                  <h1>ສັນຍາການຮ່ວມມື, ການຈັດຊື້ລະບົບ POS ແລະ ການເຊື່ອມຕໍ່ລະບົບຊຳລະເງິນ</h1>
                  
                  <p>
                    ສັນຍາສະບັບນີ້ ຖືກເຮັດຂຶ້ນໃນວັນທີ _____ ເດືອນ ____________, 2026 (ຕໍ່ໄປນີ້ເອີ້ນວ່າ "ວັນທີມີຜົນສັກສິດ"), ລະຫວ່າງ:
                  </p>
                  
                  <ol class="mb-6 pl-4">
                    <li class="mb-2"><strong>ບໍລິສັດ ດີຄອມ ວິສາຫະກິດສ່ວນບຸກຄົນ (DCOM SHOP)</strong>, ເປັນບໍລິສັດທີ່ຂຶ້ນທະບຽນຖືກຕ້ອງຕາມກົດໝາຍຂອງ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ, ຕັ້ງຢູ່ ບ້ານໂນນແກ້ວ ເມືອງສີໂຄດຕະບອງ ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ (ຕໍ່ໄປນີ້ເອີ້ນວ່າ <strong>"DCOM"</strong>); ແລະ</li>
                    <li class="mb-2"><strong>ທະນາຄານ ຮ່ວມທຸລະກິດ ລາວ-ຫວຽດ (LAO-VIET JOINT VENTURE BANK)</strong>, ເປັນສະຖາບັນການເງິນທີ່ໄດ້ຮັບອະນຸຍາດດຳເນີນທຸລະກິດຖືກຕ້ອງຕາມກົດໝາຍຂອງ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ, ສຳນັກງານໃຫຍ່  (ຕໍ່ໄປນີ້ເອີ້ນວ່າ <strong>"ທະນາຄານ"</strong> ຫຼື <strong>"LVB"</strong>).</li>
                  </ol>

                  <p>
                    DCOM ແລະ ທະນາຄານ ຕໍ່ໄປນີ້ຈະຮ່ວມກັນເອີ້ນວ່າ "ຄູ່ສັນຍາ" ແລະ ເອີ້ນສະເພາະວ່າ "ຝ່າຍ".
                  </p>

                  <h3 class="section-title">ເຫດຜົນຂອງການເຮັດສັນຍາ</h3>
                  <p>
                    <strong>ເນື່ອງຈາກວ່າ</strong>, DCOM ເປັນຜູ້ພັດທະນາ ແລະ ຈຳໜ່າຍລະບົບຊອບແວ POS (Minimart POS ແລະ Restaurant POS) ພ້ອມທັງສະໜອງອຸປະກອນຮາດແວ POS ທີ່ກ່ຽວຂ້ອງ; ແລະ
                  </p>
                  <p>
                    <strong>ເນື່ອງຈາກວ່າ</strong>, ທະນາຄານ ໃຫ້ບໍລິການຮັບຊຳລະເງິນ, ລະບົບສ້າງ QR Code ໃນການຊຳລະເງິນ ແລະ ບໍລິການທາງການເງິນອື່ນໆ ຜ່ານລະບົບ Open API ຂອງທະນາຄານ (ຕໍ່ໄປນີ້ເອີ້ນວ່າ "ບໍລິການ Gateway"); ແລະ
                  </p>
                  <p>
                    <strong>ເນື່ອງຈາກວ່າ</strong>, ທະນາຄານ ມີຄວາມປະສົງຈະຈັດຊື້ລະບົບ POS (ຊອບແວ ແລະ ຮາດແວ) ຈາກ DCOM ເພື່ອໄປແຈກຢາຍ ຫຼື ຊ່ວຍເຫຼືອ (Subsidize) ໃຫ້ແກ່ລູກຄ້າຮ້ານຄ້າຂອງທະນາຄານ (Merchants) ເພື່ອສົ່ງເສີມການເປີດບັນຊີ ແລະ ເພີ່ມຍອດທຸລະກຳຜ່ານທະນາຄານ; ແລະ
                  </p>
                  <p class="mb-6">
                    <strong>ເນື່ອງຈາກວ່າ</strong>, DCOM ຕົກລົງທີ່ຈະເຊື່ອມຕໍ່ລະບົບ Open API ຂອງທະນາຄານ ເຂົ້າກັບລະບົບ POS ເພື່ອໃຫ້ຮ້ານຄ້າທີ່ຮ່ວມລາຍການສາມາດສ້າງ Dynamic QR Code ໃນການຮັບຊຳລະເງິນຢູ່ໜ້າຈໍ POS ແລະ ເງິນຈະຖືກໂອນເຂົ້າບັນຊີທະນາຄານ LVB ຂອງຮ້ານຄ້າໂດຍກົງ;
                  </p>
                  <p class="mb-6">
                    <strong>ດັ່ງນັ້ນ</strong>, ທັງສອງຝ່າຍ ຈຶ່ງຕົກລົງເຫັນດີເປັນເອກະພາບ ດັ່ງນີ້:
                  </p>

                  <h3 class="section-title">ໝວດທີ I: ແຜນງານການຈັດຊື້ລະບົບ POS</h3>
                  <p>
                    <strong>1. ການຈັດຊື້ລະບົບ POS:</strong> ທະນາຄານ ຕົກລົງຈັດຊື້ ແລະ DCOM ຕົກລົງສະໜອງລະບົບ POS ເຊິ່ງປະກອບມີ ລິຂະສິດຊອບແວ DCOM POS ແລະ ຊຸດອຸປະກອນຮາດແວ POS.
                  </p>
                  <p>
                    <strong>2. ການແຈກຢາຍ ແລະ ຕິດຕັ້ງໃຫ້ຮ້ານຄ້າ:</strong> ທະນາຄານ ຈະເປັນຜູ້ກຳນົດ ແລະ ອະນຸມັດລາຍຊື່ຮ້ານຄ້າ ("ຮ້ານຄ້າຮ່ວມລາຍການ") ທີ່ຈະໄດ້ຮັບລະບົບ POS ພາຍໃຕ້ການຊ່ວຍເຫຼືອຂອງທະນາຄານ. DCOM ຈະຮັບຜິດຊອບໃນການຕິດຕັ້ງ ແລະ ເຝິກອົບຮົມພະນັກງານຂອງຮ້ານຄ້າຢູ່ສະຖານທີ່ຈິງ.
                  </p>
                  <p class="mb-6">
                    <strong>3. ລາຄາ ແລະ ການຊຳລະເງິນໃຫ້ DCOM:</strong> ລາຄາຂອງຊອບແວ ແລະ ຮາດແວ ແມ່ນລະບຸໄວ້ໃນ ເອກະສານແນບ ກ. ທະນາຄານ ຈະຊຳລະເງິນໃຫ້ DCOM ໂດຍກົງເປັນລາຍ ປີ ອີງຕາມໃບບິນຮຽກເກັບເງິນ ຫຼັງຈາກທີ່ໄດ້ຕິດຕັ້ງ ແລະ ມີການເຊັນຮັບມອບລະບົບແລ້ວ.
                  </p>

                  <h3 class="section-title">ໝວດທີ II: ການເຊື່ອມຕໍ່ລະບົບຊຳລະເງິນ (LVB OPEN API)</h3>
                  <p>
                    <strong>4. ຂອບເຂດການເຊື່ອມຕໍ່ທາງເຕັກນິກ:</strong> DCOM ຈະດຳເນີນການເຊື່ອມຕໍ່ API ຂອງທະນາຄານ LVB ເຂົ້າກັບລະບົບ POS (Init API ທີ່ `https://laovietbank.com.la:5678/v1/api/init/`, Login API ທີ່ `/v1/api/login` ແລະ Transaction Verification API).
                  </p>

                  <p>
                    <strong>5. ການສ້າງລາຍເຊັນ Secure Code & ຄວາມປອດໄພ:</strong> ເພື່ອປ້ອງກັນການປອມແປງທຸລະກຳ, ຂໍ້ມູນການຮ້ອງຂໍທັງໝົດຈະຕ້ອງຖືກລົງລາຍເຊັນດິຈິຕອນ ໂດຍການໃຊ້ MD5:
                    <br>
                    <code>MD5(privateKey | Service_Id | Merchant_Id | Merchant_Name | Trandate | Trans_Id | Trans_Desc | Amount | Curr | Payer_Id | Payer_Name | Payer_Addr | Type | Custmer_Id | Customer_Name | IssueDate | Callback_URL)</code>
                    ທັງສອງຝ່າຍ ຕົກລົງທີ່ຈະເກັບຮັກສາ `privateKey` ໄວ້ເປັນຄວາມລັບສູງສຸດ ແລະ ເຂົ້າລະຫັດໄວ້ຢ່າງປອດໄພ.
                  </p>

                  <p>
                    <strong>6. ການສົ່ງຂໍ້ມູນການຊຳລະເງິນກັບຄືນ (Callback / Webhook):</strong> DCOM ຈະຈັດຕັ້ງ Endpoint ທີ່ປອດໄພເພື່ອຮັບການແຈ້ງເຕືອນການຊຳລະເງິນສຳເລັດຈາກທະນາຄານ. ລະບົບຂອງ DCOM ຈະກວດສອບ `Secure_Code` ກ່ອນຈະປ່ຽນສະຖານະໃນ POS ວ່າ "ຈ່າຍແລ້ວ". ລະບົບຂອງທະນາຄານ ຈະຕ້ອງພະຍາຍາມສົ່ງ Callback ຢ່າງໜ້ອຍ 3 ຄັ້ງ ຫາກພົບເຄືອຂ່າຍມີບັນຫາຂັດຂ້ອງ.
                  </p>

                  <p class="mb-6">
                    <strong>7. ຄວາມພ້ອມຂອງລະບົບ API, SLA ແລະ ຂໍ້ຈຳກັດຄວາມຮັບຜິດຊອບ:</strong> ທະນາຄານ ຮັບຜິດຊອບໃນການຮັກສາສະຖຽນລະພາບ ແລະ ຄວາມພ້ອມໃຊ້ງານຂອງລະບົບ Open API (`laovietbank.com.la`). DCOM ຈະບໍ່ຮັບຜິດຊອບຕໍ່ຄວາມລົ້ມເຫຼວໃນການຊຳລະເງິນ, ຄວາມຊັກຊ້າ ຫຼື ຄວາມຜິດພາດໃນການສ້າງ QR Code ທີ່ເກີດຈາກລະບົບ API ຂອງທະນາຄານຢຸດເຮັດວຽກ ຫຼື ຂັດຂ້ອງ. ຫາກມີຂໍ້ຜິດພາດ, ໃຫ້ຖືເອົາບັນທຶກທຸລະກຳ (Transaction Log) ຂອງທະນາຄານເປັນຫຼັກ.
                  </p>

                  <h3 class="section-title">ໝວດທີ III: ຂໍ້ກຳນົດທົ່ວໄປ</h3>
                  <p>
                    <strong>8. ການຮັບປະກັນອຸປະກອນ:</strong> DCOM ຮັບປະກັນອຸປະກອນຮາດແວທີ່ສະໜອງໃຫ້ເປັນເວລາ ໜຶ່ງ (1) ປີ (ສະເພາະຄວາມຜິດພາດທີ່ເກີດຈາກການຜະລິດ).
                  </p>
                  <p>
                    <strong>9. ການຮັກສາຄວາມລັບ:</strong> ຂໍ້ມູນການຊຳລະເງິນ, API Key, Token ແລະ ຂໍ້ມູນທຸລະກຳທັງໝົດຂອງຮ້ານຄ້າ ແລະ ລູກຄ້າ ຖືເປັນຄວາມລັບສູງສຸດ.
                  </p>
                  <p>
                    <strong>10. ໄລຍະເວລາ ແລະ ການສິ້ນສຸດສັນຍາ:</strong> ສັນຍາສະບັບນີ້ມີກຳນົດເວລາ ສອງ (2) ປີ ນັບຈາກວັນທີມີຜົນສັກສິດ. ຝ່າຍໃດຝ່າຍໜຶ່ງມີສິດຍົກເລີກສັນຍາໄດ້ໂດຍການແຈ້ງເປັນລາຍລັກອັກສອນລ່ວງໜ້າ ເກົ້າສິບ (90) ວັນ.
                  </p>
                  <p class="mb-8">
                    <strong>11. ກົດໝາຍທີ່ນຳໃຊ້:</strong> ສັນຍາສະບັບນີ້ ໃຫ້ຢູ່ພາຍໃຕ້ການຄຸ້ມຄອງ ແລະ ຕີຄວາມໝາຍຕາມກົດໝາຍຂອງ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ.
                  </p>

                  <!-- Signatures Table -->
                  <table class="sig-table">
                    <tr>
                      <td>
                        <p class="mb-2"><strong>ຕາງໜ້າ: ບໍລິສັດ ດີຄອມ ວິສາຫະກິດສ່ວນບຸກຄົນ</strong></p>
                        <div class="stamp-placeholder">
                          <span class="grey--text lighten-2" style="font-size: 0.8rem;">(ລາຍເຊັນ ແລະ ປະທັບກາ)</span>
                        </div>
                        <div class="sig-line"></div>
                        <p class="text-caption grey--text">ຕົວແທນຜູ້ມີສິດອຳນາດ</p>
                      </td>
                      <td>
                        <p class="mb-2"><strong>ຕາງໜ້າ: ທະນາຄານ ຮ່ວມທຸລະກິດ ລາວ-ຫວຽດ (LVB)</strong></p>
                        <div class="stamp-placeholder">
                          <span class="grey--text lighten-2" style="font-size: 0.8rem;">(ລາຍເຊັນ ແລະ ປະທັບກາ)</span>
                        </div>
                        <div class="sig-line"></div>
                        <p class="text-caption grey--text">ຕົວແທນຜູ້ມີສິດອຳນາດ</p>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- ENGLISH VERSION -->
                <div v-else>
                  <h1>COOPERATION, ACQUISITION & PAYMENT GATEWAY INTEGRATION AGREEMENT</h1>
                  
                  <p>
                    This <strong>Cooperation, Acquisition & Payment Gateway Integration Agreement</strong> (the "Agreement") is entered into this _____ day of ____________, 2026 (the "Effective Date"), by and between:
                  </p>
                  
                  <ol class="mb-6 pl-4">
                    <li class="mb-2"><strong>DCOM SHOP</strong>, a company registered under the laws of the Lao People's Democratic Republic, having its principal place of business at Nongkeo Village, Sikhottabong District, Vientiane, Lao PDR (hereinafter referred to as <strong>"DCOM"</strong>); and</li>
                    <li class="mb-2"><strong>LAO-VIET BANK Joint Venture Bank (LVB)</strong>, a financial institution licensed under the laws of the Lao People's Democratic Republic, having its headquarters at Head office 44 LaneXang Avenue, Ban Hatsady Tay, Chanthabouly, Vientiane, Lao PDR (hereinafter referred to as the **"Bank"** or **"LVB"**).</li>
                  </ol>

                  <p>
                    DCOM and the Bank are collectively referred to as the "Parties" and individually as a "Party."
                  </p>

                  <h3 class="section-title">RECITALS</h3>
                  <p>
                    <strong>WHEREAS</strong>, DCOM develops and sells proprietary Point-of-Sale (POS) software (Minimart and Restaurant POS) and sells related POS terminal hardware; and
                  </p>
                  <p>
                    <strong>WHEREAS</strong>, the Bank offers merchant acquiring services, dynamic QR payment processing, and other cashless payment products through its Open API; and
                  </p>
                  <p>
                    <strong>WHEREAS</strong>, the Bank wishes to purchase POS systems from DCOM to distribute or subsidize for the Bank's merchant customers, to encourage merchant account acquisition and transaction volume; and
                  </p>
                  <p class="mb-6">
                    <strong>WHEREAS</strong>, DCOM agrees to integrate the Bank’s Payment Gateway Open API directly into DCOM's POS systems so that enrolled merchants can process dynamic QR code payments directly on checkout screens, with transactions settling directly into the merchants' LVB bank accounts;
                  </p>
                  <p class="mb-6">
                    <strong>NOW, THEREFORE</strong>, in consideration of the mutual covenants and conditions contained herein, the Parties agree as follows:
                  </p>

                  <h3 class="section-title">SECTION I: POS SYSTEM PURCHASE PROGRAM</h3>
                  <p>
                    <strong>1. Purchase of POS Systems:</strong> The Bank agrees to purchase and DCOM agrees to supply Point-of-Sale packages consisting of DCOM POS Software Licenses and POS Hardware Packages.
                  </p>
                  <p>
                    <strong>2. Allocation and Rollout to Merchants:</strong> The Bank will identify and approve its merchant customers ("Approved Merchants") to receive the subsidized systems. DCOM will handle the software setup, configuration, hardware installation, and staff training. DCOM will deliver hardware and deploy software within 7-10 business days from receiving written nomination from the Bank.
                  </p>
                  <p class="mb-6">
                    <strong>3. Purchase Price and Payment to DCOM:</strong> The pricing for software licenses and hardware is set forth in Annex A. The Bank will pay DCOM directly for the POS systems on a Yearly basis, based on invoices issued upon successful deployment and merchant sign-off.
                  </p>

                  <h3 class="section-title">SECTION II: PAYMENT GATEWAY INTEGRATION (LVB OPEN API)</h3>
                  <p>
                    <strong>4. Technical Scope & Integration:</strong> DCOM will integrate the Bank's LVB Open API Payment Gateway into its standard checkout flows. The technical specifications of the integration include:
                  </p>
                  <ul class="mb-4 pl-6">
                    <li><strong>Payment Initialization (Init API):</strong> Calls `https://laovietbank.com.la:5678/v1/api/init/` to generate dynamic QR codes. Request Payload must contain identifiers and a generated signature.</li>
                    <li><strong>Authentication (Login API):</strong> Calls `https://laovietbank.com.la:5678/v1/api/login` to obtain credentials.</li>
                    <li><strong>Transaction Verification API:</strong> Connects to `/v1/api/provider/transaction` to pull and check transaction status in real-time.</li>
                  </ul>

                  <p>
                    <strong>5. Signature Hashing & Security:</strong> To prevent transaction tampering, request data must be signed using the formula:
                    <br>
                    <code>MD5(privateKey | Service_Id | Merchant_Id | Merchant_Name | Trandate | Trans_Id | Trans_Desc | Amount | Curr | Payer_Id | Payer_Name | Payer_Addr | Type | Custmer_Id | Customer_Name | IssueDate | Callback_URL)</code>
                    Both Parties agree to securely store and encrypt the Bank's shared `privateKey`.
                  </p>

                  <p>
                    <strong>6. Transaction Callbacks (Webhooks):</strong> DCOM will provide a secure callback listener endpoint. Upon receiving a payment notification from the Bank, the DCOM server will verify the signature before marking the transaction as PAID. The Bank's system must attempt callback notifications at least 3 times in the event of temporary network issues.
                  </p>

                  <p class="mb-6">
                    <strong>7. API Availability, SLA & Liability:</strong> The Bank is responsible for maintaining the stability and availability of its Open API servers (`laovietbank.com.la`). DCOM is not liable for failed transactions, payment delays, or incorrect QR generation due to the Bank's API downtime. In the event of transaction discrepancies, the Bank’s transaction log shall serve as the source of truth, and the Bank will handle dispute resolution directly.
                  </p>

                  <h3 class="section-title">SECTION III: GENERAL TERMS</h3>
                  <p>
                    <strong>8. Hardware Warranty:</strong> DCOM provides a one-year (1-year) limited warranty on physical hardware. This warranty is voided in cases of physical damage, water damage, electrical surges, or unauthorized repairs.
                  </p>
                  <p>
                    <strong>9. Confidentiality:</strong> The Bank's payment credentials, API tokens, Private Keys, and merchant transaction records are strictly confidential.
                  </p>
                  <p>
                    <strong>10. Term & Termination:</strong> This Agreement is valid for Two (2) Years. Either Party may terminate this Agreement by providing ninety (90) days written notice.
                  </p>
                  <p class="mb-8">
                    <strong>11. Governing Law:</strong> This Agreement shall be governed by and construed in accordance with the laws of the Lao People's Democratic Republic.
                  </p>

                  <!-- Signatures Table -->
                  <table class="sig-table">
                    <tr>
                      <td>
                        <p class="mb-2"><strong>For: DCOM SHOP</strong></p>
                        <div class="stamp-placeholder">
                          <span class="grey--text lighten-2" style="font-size: 0.8rem;">(Stamp & Signature)</span>
                        </div>
                        <div class="sig-line"></div>
                        <p class="text-caption grey--text">Authorized Representative</p>
                      </td>
                      <td>
                        <p class="mb-2"><strong>For: LAO-VIET JOINT VENTURE BANK (LVB)</strong></p>
                        <div class="stamp-placeholder">
                          <span class="grey--text lighten-2" style="font-size: 0.8rem;">(Stamp & Signature)</span>
                        </div>
                        <div class="sig-line"></div>
                        <p class="text-caption grey--text">Authorized Representative</p>
                      </td>
                    </tr>
                  </table>
                </div>

                <div class="print-footer-only mt-8 text-center grey--text text--darken-1">
                  <v-divider class="mb-4"></v-divider>
                  <p v-if="lang === 'la'">© {{ new Date().getFullYear() }} DCOM POS. ສັນຍາການຮ່ວມມື ແລະ ການຕິດຕັ້ງລະບົບ LVB</p>
                  <p v-else>© {{ new Date().getFullYear() }} DCOM POS. Bank Cooperation & Integration Agreement</p>
                </div>
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      lang: 'la',
      printing: false
    }
  },
  methods: {
    loadHtml2Pdf() {
      return new Promise((resolve, reject) => {
        if (window.html2pdf) {
          resolve(window.html2pdf);
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.onload = () => resolve(window.html2pdf);
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },

    async downloadPDF() {
      this.printing = true;
      try {
        const html2pdf = await this.loadHtml2Pdf();
        
        const selectorClass = this.tab === 0 ? '.hotel-agreement-print-container' : '.bank-agreement-print-container';
        const element = document.querySelector(selectorClass);
        if (!element) return;

        // Temporarily display the print-only header
        const header = element.querySelector('.print-header-only');
        if (header) {
          header.style.setProperty('display', 'block', 'important');
        }

        const title = this.tab === 0 ? 'Hotel_POS_Agreement' : 'Bank_LVB_Agreement';
        const langSuffix = this.lang === 'la' ? 'LA' : 'EN';
        
        const opt = {
          margin: [15, 15, 15, 15], // 15mm margins
          filename: `${title}_${langSuffix}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2, 
            useCORS: true,
            logging: false
          },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        await html2pdf().from(element).set(opt).save();

        // Hide print header again
        if (header) {
          header.style.removeProperty('display');
        }
      } catch (error) {
        console.error('Error generating PDF:', error);
        // Fallback: trigger print dialog if rendering fails
        this.printCurrentContract();
      } finally {
        this.printing = false;
      }
    },

    downloadWord() {
      const selectorClass = this.tab === 0 ? '.hotel-agreement-print-container' : '.bank-agreement-print-container';
      const element = document.querySelector(selectorClass);
      if (!element) return;

      const mainHTML = element.querySelector('.contract-body').innerHTML;
      const title = this.tab === 0 ? 'Hotel_POS_Agreement' : 'Bank_LVB_Agreement';
      const langSuffix = this.lang === 'la' ? 'LA' : 'EN';
      const fileName = `${title}_${langSuffix}.doc`;

      // Word Document wrapping with styling for correct Lao font rendering
      const htmlString = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" 
              xmlns:w="urn:schemas-microsoft-com:office:word" 
              xmlns="http://www.w3.org/TR/REC-html40">
        <head>
          <meta charset="utf-8">
          <title>${title}</title>
          <style>
            body {
              font-family: 'Noto Sans Lao', 'Segoe UI', Arial, sans-serif;
              margin: 1in;
              line-height: 1.6;
              font-size: 11pt;
            }
            .primary--text { color: #1976D2; }
            h1 {
              font-size: 16pt;
              text-align: center;
              font-weight: bold;
              margin-bottom: 20pt;
              color: #1976D2;
            }
            h3.section-title {
              font-size: 12pt;
              color: #1976D2;
              font-weight: bold;
              border-bottom: 1.5pt solid #1976D2;
              padding-bottom: 3pt;
              margin-top: 20pt;
              margin-bottom: 10pt;
            }
            p, li {
              font-size: 11pt;
              text-align: justify;
              margin-bottom: 8pt;
            }
            ol, ul {
              margin-bottom: 10pt;
              padding-left: 20pt;
            }
            .signature-section {
              margin-top: 40pt;
            }
            .signature-box {
              text-align: center;
              width: 250px;
              display: inline-block;
              vertical-align: top;
            }
            .stamp-placeholder {
              height: 100px;
              border: 1px dashed #ccc;
              margin-bottom: 8px;
              text-align: center;
            }
            .text-center { text-align: center; }
            .d-flex { display: flex; }
            .align-center { align-items: center; }
            .justify-space-between { justify-content: space-between; }
            .grey--text { color: #757575; }
            .text-caption { font-size: 9pt; }
            code {
              font-family: Consolas, Monaco, monospace;
              background-color: #f5f5f5;
              padding: 8px;
              border-radius: 4px;
              font-size: 10pt;
              word-break: break-all;
              display: block;
              margin: 8px 0;
            }
          </style>
        </head>
        <body>
          ${mainHTML}
        </body>
        </html>
      `;

      const blob = new Blob(['\uFEFF' + htmlString], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },

    printCurrentContract() {
      this.printing = true;
      this.$nextTick(() => {
        const printWindow = window.open('', '_blank');
        
        const selectorClass = this.tab === 0 ? '.hotel-agreement-print-container' : '.bank-agreement-print-container';
        const activeContentElement = document.querySelector(selectorClass);
        
        const headerHTML = activeContentElement.querySelector('.print-header-only').outerHTML;
        const mainHTML = activeContentElement.querySelector('.contract-body').innerHTML;
        
        printWindow.document.write(`
          <html>
            <head>
              <title>POS System Cooperation Agreement Draft</title>
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;700&display=swap" rel="stylesheet">
              <style>
                body {
                  font-family: 'Noto Sans Lao', 'Helvetica Neue', Arial, sans-serif;
                  padding: 40px;
                  color: #333;
                  line-height: 1.6;
                  font-size: 14px;
                }
                .primary--text { color: #1976D2; }
                h1 { font-size: 22px; margin-bottom: 20px; text-align: center; }
                h2.section-title { 
                  border-bottom: 2px solid #1976D2; 
                  padding-bottom: 8px; 
                  margin-top: 30px;
                  color: #1976D2;
                  font-size: 18px;
                }
                h3.section-title { 
                  border-bottom: 2px solid #1976D2; 
                  padding-bottom: 8px; 
                  margin-top: 25px;
                  color: #1976D2;
                  font-size: 15px;
                }
                h3 { 
                  margin-top: 15px;
                  margin-bottom: 8px; 
                  color: #1976D2;
                  font-size: 15px;
                  border-bottom: 1px solid #ddd;
                  padding-bottom: 4px;
                }
                p { margin-bottom: 12px; text-align: justify; }
                .text-body-2 { font-size: 13px; }
                ul, ol { margin-bottom: 15px; padding-left: 20px; }
                li { margin-bottom: 8px; text-align: justify; }
                .mb-2 { margin-bottom: 8px; }
                .mb-3 { margin-bottom: 12px; }
                .mb-4 { margin-bottom: 16px; }
                .mb-6 { margin-bottom: 24px; }
                .mb-8 { margin-bottom: 32px; }
                .mt-8 { margin-top: 32px; }
                .text-center { text-align: center; }
                .d-flex { display: flex; }
                .align-center { align-items: center; }
                .align-end { align-items: flex-end; }
                .justify-space-between { justify-content: space-between; }
                .grey--text { color: #757575; }
                .my-2 { margin-top: 8px; margin-bottom: 8px; }
                .text-caption { font-size: 11px; }
                hr, .v-divider { 
                  border-top: 1px solid #e0e0e0;
                  margin: 20px 0;
                  border-left: none;
                  border-right: none;
                  border-bottom: none;
                }
                .signature-section { margin-top: 50px; page-break-inside: avoid; display: flex; justify-content: space-between; }
                .signature-box { text-align: center; width: 250px; display: inline-block; vertical-align: top; }
                .stamp-placeholder { height: 100px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
                .print-header-only { display: block !important; }
                .print-footer-only { display: block !important; margin-top: 50px; }
                code {
                  font-family: Consolas, Monaco, monospace;
                  background-color: #f5f5f5;
                  padding: 8px;
                  border-radius: 4px;
                  font-size: 12px;
                  word-break: break-all;
                  display: block;
                  margin: 8px 0;
                }
                @page {
                  margin: 2cm;
                }
                @media print {
                  body { padding: 0; }
                  .signature-section { page-break-inside: avoid; }
                }
              </style>
            </head>
            <body>
              ${headerHTML}
              ${mainHTML}
              <script>
                window.onload = function() {
                  window.print();
                  window.onafterprint = function() {
                    window.close();
                  };
                };
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
.font-lao {
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Document Paper Sheet Layout */
.document-card {
  width: 800px !important;
  margin: 0 auto !important;
  padding: 50px 70px !important;
  background-color: #ffffff !important;
  color: #111111 !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
  border-radius: 8px !important;
  box-sizing: border-box !important;
  line-height: 1.6 !important;
  font-size: 14px !important;
}

/* Strict Document Typography to avoid overlaps and sizing issues */
.contract-body h1 {
  font-size: 20px !important;
  font-weight: bold !important;
  text-align: center !important;
  margin-top: 10px !important;
  margin-bottom: 25px !important;
  color: #1976D2 !important;
  line-height: 1.4 !important;
  display: block !important;
  height: auto !important;
}

.contract-body h3.section-title {
  font-size: 15px !important;
  font-weight: bold !important;
  color: #1976D2 !important;
  border-left: 4px solid #1976D2 !important;
  padding-left: 10px !important;
  margin-top: 25px !important;
  margin-bottom: 12px !important;
  line-height: 1.4 !important;
  display: block !important;
}

.contract-body p, 
.contract-body li {
  font-size: 13.5px !important;
  text-align: justify !important;
  text-justify: inter-word !important;
  margin-bottom: 10px !important;
  line-height: 1.6 !important;
}

.contract-body ol, 
.contract-body ul {
  margin-bottom: 12px !important;
  padding-left: 24px !important;
}

.contract-body li {
  margin-bottom: 8px !important;
}

/* Custom checkbox styling (no icon dependency) */
.custom-checkbox {
  display: inline-block !important;
  width: 14px !important;
  height: 14px !important;
  border: 1.5px solid #1976D2 !important;
  border-radius: 2px !important;
  margin-right: 10px !important;
  margin-top: 4px !important;
  vertical-align: top !important;
  box-sizing: border-box !important;
  background-color: #ffffff !important;
}

/* Signature Table block styling */
.sig-table {
  width: 100% !important;
  margin-top: 45px !important;
  border-collapse: collapse !important;
  border: none !important;
  page-break-inside: avoid !important;
  break-inside: avoid !important;
}

.sig-table td {
  width: 50% !important;
  vertical-align: top !important;
  text-align: center !important;
  padding: 15px 25px !important;
  border: none !important;
}

.stamp-placeholder {
  height: 110px !important;
  border: 1px dashed #cccccc !important;
  border-radius: 4px !important;
  background-color: #fafafa !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-top: 8px !important;
  margin-bottom: 8px !important;
}

.sig-line {
  border-top: 1px solid #cccccc !important;
  margin: 15px auto 5px auto !important;
  width: 180px !important;
}

.policy-alert {
  border-left-width: 6px !important;
}

.text-info-title {
  color: #0D47A1;
}

.text-info-content {
  color: #1A237E;
  line-height: 1.6;
}

.print-header-only, .print-footer-only {
  display: none;
}

/* Clean code formatting inside PDFs */
code {
  font-family: Consolas, Monaco, monospace !important;
  background-color: #f5f5f5 !important;
  padding: 8px !important;
  border-radius: 4px !important;
  font-size: 11px !important;
  line-height: 1.4 !important;
  word-break: break-all !important;
  display: block !important;
  margin: 8px 0 !important;
  border: 1px solid #e0e0e0 !important;
  text-align: left !important;
}

/* Smart page break styling for html2pdf and print */
.contract-body p, 
.contract-body li, 
.contract-body ol, 
.contract-body ul,
.sig-table {
  page-break-inside: avoid;
  break-inside: avoid;
}

@media print {
  .print-header-only, .print-footer-only {
    display: block !important;
  }
}
</style>
