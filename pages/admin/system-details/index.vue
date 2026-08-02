<template>
  <v-container class="py-6">
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-space-between flex-wrap">
        <v-chip class="pa-5 elevation-1" color="primary" label text-color="white">
          <v-icon start class="mr-2">mdi-information-outline</v-icon>
          <h3>ລາຍລະອຽດການເຮັດວຽກຂອງລະບົບ / System Functionality Details</h3>
        </v-chip>
        <div class="d-flex align-center mt-3 mt-sm-0">
          <v-btn color="grey darken-1" text to="/admin" class="mr-2">
            <v-icon left>mdi-arrow-left</v-icon>
            ກັບຄືນ (Back)
          </v-btn>
          <v-btn color="primary" :loading="printing" elevation="2" @click="printCurrentDetails">
            <v-icon left>mdi-printer</v-icon>
            ພິມ / ດາວໂຫຼດ (Print / PDF)
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Additional Features Policy Banner -->
    <v-alert
      border="left"
      colored-border
      type="warning"
      elevation="2"
      class="mt-4 mb-6 rounded-lg policy-alert"
    >
      <div class="font-weight-bold subtitle-1 mb-1 text-uppercase text-warning-title">
        ນະໂຍບາຍຄວາມຕ້ອງການເພີ່ມເຕີມ / Additional Requirements Policy
      </div>
      <div class="text-body-2 text-justify text-warning-content">
        ຄຸນສົມບັດທັງໝົດທີ່ລະບຸໃນໜ້ານີ້ແມ່ນ<strong>ຄຸນສົມບັດມາດຕະຖານ</strong>ຂອງລະບົບ. ຫາກຜູ້ໃຊ້ງານມີຄວາມຕ້ອງການເພີ່ມເຕີມ, ດັດແກ້, ຫຼື ປັບແຕ່ງລະບົບນອກເໜືອຈາກນີ້, ອາດຈະມີຄ່າບໍລິການເພີ່ມເຕີມໃນການພັດທະນາ ຫຼື ການຕິດຕັ້ງ.
        <v-divider class="my-2"></v-divider>
        All functionalities detailed below represent the <strong>standard POS specifications</strong>. Any additional customized requirements, integrations, or modifications requested by the User that fall outside these standard specifications may incur additional development, integration, or support charges.
      </div>
    </v-alert>

    <v-card class="elevation-3 rounded-lg overflow-hidden">
      <!-- Tabs for Language Selection -->
      <v-tabs v-model="tab" background-color="primary" dark grow class="elevation-1">
        <v-tab class="font-weight-bold">
          <v-icon left>mdi-translate</v-icon>
          ພາສາລາວ (Lao Version)
        </v-tab>
        <v-tab class="font-weight-bold">
          <v-icon left>mdi-translate</v-icon>
          English Version
        </v-tab>
      </v-tabs>

      <v-card-text id="printable-specifications" class="pa-6 font-lao">
        <v-tabs-items v-model="tab">
          <!-- LAO TAB -->
          <v-tab-item>
            <div class="print-header-only mb-6">
              <div class="d-flex align-center justify-space-between mb-4">
                <div>
                  <h1 class="primary--text font-weight-bold mb-1">D-Commerce POS</h1>
                  <p class="text-caption grey--text text--darken-2">ເອກະສານກຳນົດຄຸນສົມບັດມາດຕະຖານຂອງລະບົບ (Standard Specifications Sheet)</p>
                </div>
                <div v-if="finalLogoUrl">
                  <img :src="finalLogoUrl" alt="Logo" style="max-height: 70px; max-width: 150px; object-fit: contain;" />
                </div>
              </div>
              <v-divider class="mb-4" style="border-width: 2px; border-color: #1976D2 !important"></v-divider>
            </div>

            <!-- Lao Content Container -->
            <div class="lao-specifications">
              <!-- System Overview -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-3">ພາບລວມຂອງລະບົບ (System Overview)</h2>
                <p class="text-body-1 text-justify grey--text text--darken-3">
                  ລະບົບ D-Commerce POS ເປັນລະບົບຄຸ້ມຄອງການຂາຍໜ້າຮ້ານ ແລະ ການຄຸ້ມຄອງສາງສິນຄ້າທີ່ຄົບວົງຈອນ ເໝາະສຳລັບທຸລະກິດຂາຍຍ່ອຍ, ມິນິມາດ (Minimart) ແລະ ລະບົບຮ້ານອາຫານ/ຄາເຟ່ (Restaurant & Cafe). ລະບົບຖືກອອກແບບມາເພື່ອເຮັດວຽກໄດ້ຢ່າງມີປະສິດທິພາບທັງແບບ Cloud-Based (Online) ແລະ Standalone Local (Offline) ພ້ອມຮອງຮັບການຊຳລະເງິນແບບ Cashless ຜ່ານບັດ NFC ແລະ ລະບົບທະນາຄານ.
                </p>
              </section>

              <!-- Minimart POS Module -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-4">1. ລະບົບມິນິມາດ ແລະ ຂາຍຍ່ອຍ (Minimart POS)</h2>
                
                <v-row>
                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-barcode-scan</v-icon>
                        ການສະແກນບາໂຄດ & ກະຕ່າສິນຄ້າແບບໄວ
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ຮອງຮັບການເຊື່ອມຕໍ່ກັບເຄື່ອງສະແກນບາໂຄດທົ່ວໄປ (Barcode Scanner) ໂດຍລະບົບຈະກວດຈັບການສະແກນໂດຍອັດຕະໂນມັດເພື່ອເພີ່ມສິນຄ້າເຂົ້າກະຕ່າຢ່າງວ່ອງໄວ. ພ້ອມທັງສາມາດຈັດການກະຕ່າ, ປັບປ່ຽນຈຳນວນ, ລຶບສິນຄ້າ, ແລະ ຕັ້ງຄ່າສິນຄ້າເປັນ "ຂອງແຖມ" (Promotional Gifts) ໄດ້.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-palette-swatch</v-icon>
                        ຈັດການສິນຄ້າທີ່ມີຄຸນລັກສະນະ (Variants)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ຮອງຮັບສິນຄ້າທີ່ມີຫຼາຍຕົວເລືອກ ເຊັ່ນ: ຂະໜາດ (Sizes) ແລະ ສີ (Colors). ລະບົບມີໜ້າຈໍໃຫ້ເລືອກຄຸນລັກສະນະກ່ອນເພີ່ມເຂົ້າກະຕ່າ ພ້ອມທັງກວດສອບສະຕັອກຂອງແຕ່ລະຕົວເລືອກແບບ Real-time ເພື່ອປ້ອງກັນການຂາຍເກີນຈຳນວນ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-credit-card-nfc-outline</v-icon>
                        ຊຳລະເງິນຫຼາກຫຼາຍ & ບັດ NFC
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ຮອງຮັບການຊຳລະເງິນຫຼາຍຮູບແບບ: ເງິນສົດ (Cash) ພ້ອມຄິດໄລ່ເງິນທອນ, ການຊຳລະເງິນຜ່ານບັດ NFC ພາຍໃນລະບົບປິດ (NFC Cashless card: ຕື່ມເງິນ, ຕັດຍອດເງິນ, ຄືນເງິນ), ແລະ ການສ້າງ Dynamic Bank QR ທີ່ເຊື່ອມຕໍ່ກັບທະນາຄານເພື່ອສະແກນຈ່າຍ ແລະ ກວດສອບຍອດເຂົ້າອັດຕະໂນມັດ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-account-star</v-icon>
                        ລະບົບສະມາຊິກ & ຄະແນນສະສົມ (Loyalty)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ບັນທຶກຂໍ້ມູນລູກຄ້າ, ແບ່ງລະດັບລາຄາສະເພາະລູກຄ້າ (Customer Grades ເຊັ່ນ ລາຄາ VIP, ສົ່ງ, ຍ່ອຍ) ແລະ ການສະສົມຄະແນນເພື່ອປ່ຽນເປັນສ່ວນຫຼຸດໃນເວລາຊຳລະເງິນຕາມອັດຕາແລກປ່ຽນທີ່ກຳນົດໄວ້.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-monitor-share</v-icon>
                        ການເຊື່ອມຕໍ່ສອງໜ້າຈໍ (Dual Screen Sync)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ຮອງຮັບການສະແກນຜົນໃນໜ້າຈໍທີສອງສຳລັບລູກຄ້າ (Customer Display Screen) ໂດຍຈະຊິ້ງຂໍ້ມູນລາຍການສິນຄ້າ, ຍອດລວມ, ຍອດສ່ວນຫຼຸດ, ແລະ ສະແດງ QR ໂຄດທະນາຄານເພື່ອສະດວກໃນການຊຳລະເງິນ, ຮອງຮັບທັງແບບ Electron ( desktop app ) ແລະ Web Browser Popups.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-truck-delivery</v-icon>
                        ພິມໃບບິນ & ການຈັດສົ່ງສິນຄ້າ
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ພິມໃບບິນຮັບເງິນ ແລະ ໃບແຈ້ງໜີ້ຕາມຮູບແບບມາດຕະຖານ (80mm). ພ້ອມມີລະບົບບັນທຶກຂໍ້ມູນການຈັດສົ່ງສິນຄ້າ (Delivery Form) ສຳລັບລູກຄ້າທີ່ສັ່ງຊື້ທາງອອນລາຍ ເຊັ່ນ: ຂໍ້ມູນທີ່ຢູ່, ຜູ້ຮັບ, ແລະ ບໍລິສັດຂົນສົ່ງ.
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </section>

              <!-- Restaurant & Cafe POS Module -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-4">2. ລະບົບຮ້ານອາຫານ ແລະ ຄາເຟ່ (Restaurant & Cafe POS)</h2>
                
                <v-row>
                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-table-furniture</v-icon>
                        ການຈັດການຜັງໂຕະ (Live Table Layout)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ສະແດງຜັງໂຕະໃນຮ້ານພ້ອມສະຖານະ Real-time ຢ່າງລະອຽດ ເຊັ່ນ: ໂຕະວ່າງ (Available - ສີຂຽວ), ໂຕະມີແຂກ (Occupied - ສີສົ້ມ/ແດງ), ໂຕະທີ່ຕ້ອງອະນາໄມ (Cleaning - ສີຟ້າ) ແລະ ໂຕະທີ່ຖືກຈອງ (Reserved - ສີຟ້າອ່ອນ).
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-account-plus</v-icon>
                        ການຕ້ອນຮັບ & ເປີດໂຕະ (Seat Customer)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ບັນທຶກການເປີດໂຕະໂດຍສາມາດລະບຸຊື່ລູກຄ້າ, ຈຳນວນແຂກທີ່ມານັ່ງ (Party Size) ໃຫ້ເໝາະສົມກັບຄວາມຈຸຂອງໂຕະ ແລະ ສາມາດເລືອກເປີດໂຕະພ້ອມເພີ່ມລາຍການອາຫານໄດ້ທັນທີ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-walk</v-icon>
                        ເປີດບິນແບບບໍ່ມີໂຕະ / Walk-in (Virtual Tickets)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ຮອງຮັບການຂາຍອາຫານ/ເຄື່ອງດື່ມໃຫ້ແກ່ລູກຄ້າທີ່ມາຊື້ກັບບ້ານ ຫຼື Walk-in ໂດຍບໍ່ຈຳເປັນຕ້ອງມີການມອບໝາຍໂຕະ (Virtual Ticket) ລະບົບຈະສ້າງບິນ ແລະ ສົ່ງລາຍການເຂົ້າຄົວກຽມອາຫານຄືກັນກັບບິນໂຕະທົ່ວໄປ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-swap-horizontal</v-icon>
                        ການຍ້າຍໂຕະ / ຍ້າຍອໍເດີ (Transfer Order)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ລະບົບອະນຸຍາດໃຫ້ຍ້າຍລາຍການອາຫານ ແລະ ອໍເດີທັງໝົດຈາກໂຕະໜຶ່ງໄປຫາອີກໂຕະໜຶ່ງທີ່ຍັງວ່າງຢູ່ໄດ້ຢ່າງງ່າຍດາຍ ໂດຍຂໍ້ມູນທັງໝົດຈະຖືກໂອນຍ້າຍໄປອັດຕະໂນມັດ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="12" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-call-split</v-icon>
                        ການແຍກບິນຊຳລະເງິນ (Split Bill / Split Checkout)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ຮອງຮັບການແຍກບິນຊຳລະເງິນໃນກໍລະນີທີ່ລູກຄ້ານັ່ງໂຕະດຽວກັນແຕ່ຕ້ອງການແຍກຈ່າຍ. ພະນັກງານສາມາດເລືອກລາຍການອາຫານ ແລະ ຈຳນວນທີ່ຕ້ອງການແຍກອອກມາສ້າງເປັນບິນໃໝ່ເພື່ອຊຳລະເງິນສະເພາະສ່ວນ ໂດຍລະບົບຈະຄິດໄລ່ຍອດເຫຼືອຄ້າງຊຳລະຂອງໂຕະຕົ້ນທາງໃຫ້ໂດຍອັດຕະໂນມັດ.
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </section>

              <!-- Inventory & Stock Management Module -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-4">3. ລະບົບສາງ ແລະ ການຈັດການສະຕັອກ (Inventory & Stock Management)</h2>
                
                <v-row>
                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-package-variant-closed</v-icon>
                        ຕິດຕາມສະຕັອກ Real-time (Inventory Control)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ກວດສອບ ແລະ ຕິດຕາມຈຳນວນສິນຄ້າຄົງເຫຼືອແບບ Real-time ໃນແຕ່ລະຄັງສິນຄ້າ ຫຼື ສາຂາ ເພື່ອຮັບປະກັນວ່າຂໍ້ມູນມີຄວາມຖືກຕ້ອງຕະຫຼອດເວລາ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-bell-alert-outline</v-icon>
                        ແຈ້ງເຕືອນສະຕັອກຂັ້ນຕ່ຳ (Min Stock Alerts)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ລະບົບຈະແຈ້ງເຕືອນອັດຕະໂນມັດເມື່ອຈຳນວນສິນຄ້າຫຼຸດກາຍລະດັບຂັ້ນຕ່ຳ (Minimum Stock) ທີ່ກຳນົດໄວ້ ເພື່ອໃຫ້ຜູ້ບໍລິຫານວາງແຜນສັ່ງຊື້ສິນຄ້າເຂົ້າມາທົດແທນໄດ້ທັນເວລາ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-playlist-plus</v-icon>
                        ປັບປຸງສະຕັອກແບບກຸ່ມ (Bulk Adjustment)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ຮອງຮັບການປັບປຸງຈຳນວນສະຕັອກ ແລະ ເພີ່ມສະຕັອກສິນຄ້າແບບຫຼາຍລາຍການພ້ອມກັນ (Bulk Increase) ຜ່ານໜ້າຈໍດຽວ ຊ່ວຍຫຼຸດຜ່ອນເວລາໃນການເຮັດວຽກ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-download</v-icon>
                        ສົ່ງອອກລາຍງານສະຕັອກ (Export Reports)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ດຶງຂໍ້ມູນສະຕັອກສິນຄ້າ ແລະ ສົ່ງອອກເປັນໄຟລ໌ Excel ຫຼື CSV ເພື່ອສະດວກໃນການກວດສອບ ແລະ ເກັບຂໍ້ມູນປະຫວັດສະຕັອກ.
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </section>

              <!-- Accounting & Profit and Loss Reporting Module -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-4">4. ລະບົບບັນຊີ ແລະ ໃບລາຍງານກຳໄລ-ຂາດທຶນ (Profit & Loss Reporting)</h2>
                
                <v-row>
                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-chart-box-outline</v-icon>
                        ໃບລາຍງານກຳໄລ-ຂາດທຶນອັດຕະໂນມັດ (P&L Statements)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ສ້າງລາຍງານກຳໄລ-ຂາດທຶນແບບອັດຕະໂນມັດ ໂດຍສາມາດເລືອກຊ່ວງເວລາທີ່ຕ້ອງການດຶງລາຍງານ (ເລືອກວັນທີເລີ່ມຕົ້ນ ແລະ ສິ້ນສຸດ) ໄດ້ຢ່າງລະອຽດ.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-cash-multiple</v-icon>
                        ວິເຄາະສັດສ່ວນລາຍຮັບ ແລະ ຕົ້ນທຶນ (Financial Breakdown)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ແຍກລາຍຮັບລວມ (Revenue), ຕົ້ນທຶນຂາຍ (COGS - ລວມທັງຕົ້ນທຶນສິນຄ້າ, ຄ່າທຳນຽມ COD ແລະ ຄ່າທຳນຽມຍົກເລີກ), ລາຍຈ່າຍບໍລິຫານ (OPEX) ແລະ ຄຳນວນກຳໄລ/ຂາດທຶນສຸດທິ (Net Profit/Loss).
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="12" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-chart-donut</v-icon>
                        ແຜນວາດວິເຄາະສັດສ່ວນການເງິນ (Visual Chart Analysis)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        ສະແດງສັດສ່ວນ ແລະ ແນວໂນ້ມການເງິນລະຫວ່າງລາຍຮັບ ແລະ ລາຍຈ່າຍໃນຮູບແບບແຜນວາດວົງມົນ (Donut Chart) ທີ່ເຊື່ອມໂຍງກັບລະບົບ ECharts ເພື່ອໃຫ້ຜູ້ບໍລິຫານເຂົ້າໃຈງ່າຍ ແລະ ເບິ່ງເຫັນພາບລວມຂອງທຸລະກິດໄດ້ຊັດເຈນ.
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </section>

              <!-- Provider and User Stamp Section for Printing -->
              <div class="signature-section mt-8">
                <div class="d-flex justify-space-between align-end">
                  <div class="signature-box text-center" style="width: 250px;">
                    <p class="mb-2"><strong>ຜູ້ສະໜອງ / Provider</strong></p>
                    <div class="stamp-container" style="position: relative; height: 130px; display: flex; justify-content: center; align-items: center;">
                      <img :src="signatureImg" class="signature-img" alt="Signature" style="max-height: 60px; position: absolute; z-index: 2;" />
                      <img :src="stampImg" class="stamp-img" alt="Stamp" style="max-height: 120px; opacity: 0.85; position: absolute; z-index: 1; transform: translate(20px, -10px);" />
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <p class="text-caption grey--text">D-Commerce Sole Co., Ltd</p>
                  </div>
                  
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
                <p>© {{ new Date().getFullYear() }} D-Commerce POS. Document Standard Version 1.3</p>
                <p>Printed on: {{ currentDateTime }}</p>
              </div>
            </div>
          </v-tab-item>

          <!-- ENGLISH TAB -->
          <v-tab-item>
            <div class="print-header-only mb-6">
              <div class="d-flex align-center justify-space-between mb-4">
                <div>
                  <h1 class="primary--text font-weight-bold mb-1">D-Commerce POS</h1>
                  <p class="text-caption grey--text text--darken-2">Standard Specifications & Functionality Document</p>
                </div>
                <div v-if="finalLogoUrl">
                  <img :src="finalLogoUrl" alt="Logo" style="max-height: 70px; max-width: 150px; object-fit: contain;" />
                </div>
              </div>
              <v-divider class="mb-4" style="border-width: 2px; border-color: #1976D2 !important"></v-divider>
            </div>

            <!-- English Content Container -->
            <div class="english-specifications">
              <!-- System Overview -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-3">System Overview</h2>
                <p class="text-body-1 text-justify grey--text text--darken-3">
                  The D-Commerce POS is an end-to-end retail and inventory management platform tailored for both retail outlets (Minimart) and F&B establishments (Restaurant & Cafe). Designed with hybrid offline-online capabilities, the system allows cashier terminals to continue processing sales locally and synchronizes transactions seamlessly to the cloud. It features advanced payment methods, including cashless Closed-loop NFC card systems and bank integrations.
                </p>
              </section>

              <!-- Minimart POS Module -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-4">1. Minimart & Retail POS Module</h2>
                
                <v-row>
                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-barcode-scan</v-icon>
                        Barcode Scanning & Cart Entry
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Integrates with standard hardware barcode scanners. A global key listener detects scanner input and automatically adds products to the shopping cart. Cashiers can increase/decrease item quantities, delete lines, and set items as "Gifts" for promotional deals.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-palette-swatch</v-icon>
                        Product Attribute Variants
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Supports inventory items with colors (hex code representation) and sizes (size codes). A visual variant selection dialog checks real-time available stock of selected attributes before allowing them in the cart to prevent overselling.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-credit-card-nfc-outline</v-icon>
                        Cashless NFC & Multi-Payment Options
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Supports Cash payments (with change calculation), Closed-loop NFC cards (top-up, balance debiting, and refunds directly from POS readers), and Bank API integrations for generating Dynamic QR codes that poll payment status automatically. Splitting payment across multiple methods is also supported.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-account-star</v-icon>
                        Loyalty Program & Customer Grades
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Maintains customer profiles and maps transaction rates to pricing tiers (Customer Grades: VIP, Wholesale, Retail). Tracks loyalty points which can be redeemed at checkout for bill discounts based on custom conversion ratios.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-monitor-share</v-icon>
                        Dual Customer Screen Synchronization
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Streams active cart details, subtotal, discount, change, bank QR payment forms, and welcome screens onto a secondary monitor in real-time. Supports both browser popups and native Electron screen boundary coordinates.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-truck-delivery</v-icon>
                        Standard Printing & Online Orders
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Prints standard 80mm thermal receipts and invoice templates. For remote or online sales, a built-in delivery management form logs shipping addresses, customer contact info, and carrier routes.
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </section>

              <!-- Restaurant & Cafe POS Module -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-4">2. Restaurant & Cafe (F&B) POS Module</h2>
                
                <v-row>
                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-table-furniture</v-icon>
                        Live Table Grid Layout
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Displays table layout and occupancy state in real-time. Tables are color-coded depending on status: Available (Green), Occupied (Orange/Red), Cleaning (Blue), and Reserved (Light Blue).
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-account-plus</v-icon>
                        Seat Customer & Table Operations
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Logs customers to a table with party sizes matching table limits. Allows starting the order immediately or reserving tables for subsequent seatings.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-walk</v-icon>
                        Walk-in & Virtual Tickets (No Table)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Supports take-away or quick counter orders without assigning the client to a physical table. Generates virtual tickets that feed order details directly to the kitchen preparation routing just like standard tables.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-swap-horizontal</v-icon>
                        Table Transfer Actions
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Permits quick transfers of active food/beverage tickets from one dining table to another available destination table, updating room maps and totals instantly.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="12" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-call-split</v-icon>
                        Split Bill / Split Checkout
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Enables checkout billing splits for group parties. Cashiers can select item counts and quantities from the primary table ticket, isolate them into a separate payment window, and settle the subtotal while auto-updating the original table's remaining balance.
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </section>

              <!-- Inventory & Stock Management Module -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-4">3. Inventory & Stock Management Module</h2>
                
                <v-row>
                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-package-variant-closed</v-icon>
                        Real-Time Inventory Control
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Monitor and track product stock levels dynamically across branches and warehouse locations, ensuring inventory counts are always accurate and synchronized.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-bell-alert-outline</v-icon>
                        Minimum Stock Level Alerts
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Automatically alerts when items fall below configured minimum safety thresholds (`minStock`), helping managers plan ahead for timely supplier reordering.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-playlist-plus</v-icon>
                        Bulk Stock Adjustments
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Supports bulk adjustments and stock increases (`Bulk Increase` tool) for multiple products simultaneously from a single screen to save time and reduce manual errors.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-download</v-icon>
                        Inventory Data Export
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Instantly pulls stock states and reports and exports them to Excel or CSV formats for offsite auditing, manual verification, and record-keeping.
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </section>

              <!-- Accounting & Profit and Loss Reporting Module -->
              <section class="mb-8">
                <h2 class="section-title primary--text mb-4">4. Accounting & Profit and Loss Reporting Module</h2>
                
                <v-row>
                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-chart-box-outline</v-icon>
                        Automated P&L Statements
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Generates dynamic Profit & Loss reports for custom date ranges, allowing managers to instantly query business profitability for any specific day, week, month, or year.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="6" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-cash-multiple</v-icon>
                        Detailed Financial Breakdown
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Displays comprehensive splits of Gross Sales, Discounts, Returns, Net Sales, Cost of Goods Sold (COGS - product costs, COD fees, cancel fees), Admin Expenses (OPEX), and net margins.
                      </p>
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="12" class="py-2">
                    <v-card outlined class="feature-card h-100 pa-4 rounded-lg">
                      <h3 class="subtitle-1 font-weight-bold mb-2 primary--text">
                        <v-icon color="primary" class="mr-2">mdi-chart-donut</v-icon>
                        Visual Chart Diagnostics (ECharts Donut Chart)
                      </h3>
                      <p class="text-body-2 mb-0 text-justify">
                        Integrates visual donut chart diagnostics from the ECharts engine, mapping the ratio between total incomes vs total operating expenditures for easy business assessment.
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </section>

              <!-- Provider and User Stamp Section for Printing -->
              <div class="signature-section mt-8">
                <div class="d-flex justify-space-between align-end">
                  <div class="signature-box text-center" style="width: 250px;">
                    <p class="mb-2"><strong>Provider</strong></p>
                    <div class="stamp-container" style="position: relative; height: 130px; display: flex; justify-content: center; align-items: center;">
                      <img :src="signatureImg" class="signature-img" alt="Signature" style="max-height: 60px; position: absolute; z-index: 2;" />
                      <img :src="stampImg" class="stamp-img" alt="Stamp" style="max-height: 120px; opacity: 0.85; position: absolute; z-index: 1; transform: translate(20px, -10px);" />
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <p class="text-caption grey--text">D-Commerce Sole Co., Ltd</p>
                  </div>
                  
                  <div class="signature-box text-center" style="width: 250px;">
                    <p class="mb-2"><strong>Acknowledged By</strong></p>
                    <div style="height: 130px; display: flex; justify-content: center; align-items: center;">
                      <span class="grey--text lighten-2" style="font-size: 0.85rem;">(Signature & Stamp)</span>
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <p class="text-caption grey--text">Customer Representative</p>
                  </div>
                </div>
              </div>

              <div class="print-footer-only mt-8 text-center grey--text text--darken-1">
                <v-divider class="mb-4"></v-divider>
                <p>© {{ new Date().getFullYear() }} D-Commerce POS. Document Standard Version 1.3</p>
                <p>Printed on: {{ currentDateTime }}</p>
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
  layout: 'default',
  middleware: 'auths',
  props: {
    finalLogoUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tab: null,
      printing: false
    }
  },
  computed: {
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
    printCurrentDetails() {
      this.printing = true
      
      this.$nextTick(() => {
        const printWindow = window.open('', '_blank');
        
        // We select the content inside the active tab to print.
        // If tab is 0, we print Lao content. If tab is 1, we print English content.
        const selectorClass = this.tab === 0 ? '.lao-specifications' : '.english-specifications';
        const activeContentElement = document.querySelector(selectorClass);
        
        const headerHTML = document.querySelector('.print-header-only').outerHTML;
        const mainHTML = activeContentElement ? activeContentElement.innerHTML : '';
        
        printWindow.document.write(`
          <html>
            <head>
              <title>Standard System Functionality Specifications - D-Commerce POS</title>
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
                h2.section-title { 
                  border-bottom: 2px solid #1976D2; 
                  padding-bottom: 8px; 
                  margin-top: 30px;
                  color: #1976D2;
                  font-size: 18px;
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
                .feature-card {
                  border: 1px solid #ddd;
                  border-radius: 6px;
                  padding: 15px;
                  margin-bottom: 15px;
                  background-color: #fafafa;
                }
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
                img { max-height: 70px; }
                .signature-section { margin-top: 40px; page-break-inside: avoid; }
                .signature-box { text-align: center; width: 250px; display: inline-block; vertical-align: top; }
                .stamp-container { position: relative; height: 130px; display: flex; justify-content: center; align-items: center; }
                .stamp-container img { position: absolute; }
                .stamp-img { max-height: 120px !important; z-index: 1; }
                .signature-img { max-height: 60px !important; z-index: 2; }
                .row { display: flex; flex-wrap: wrap; margin: 0 -10px; }
                .col-12 { width: 100%; padding: 0 10px; }
                .col-md-6 { width: 50%; padding: 0 10px; }
                .print-header-only, .print-footer-only { display: block !important; }
                @page {
                  margin: 2cm;
                }
                @media print {
                  body { padding: 0; }
                  .feature-card { page-break-inside: avoid; }
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
.font-lao {
  font-family: 'Noto Sans Lao', sans-serif;
}

.section-title {
  font-size: 1.4rem;
  border-left: 5px solid #1976D2;
  padding-left: 12px;
}

.feature-card {
  transition: all 0.3s ease;
  background-color: #fafafa;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
  border-color: #1976D2 !important;
}

.policy-alert {
  border-left-width: 6px !important;
}

.text-warning-title {
  color: #E65100;
}

.text-warning-content {
  color: #5D4037;
  line-height: 1.6;
}

.print-header-only, .print-footer-only {
  display: none;
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

@media print {
  .print-header-only, .print-footer-only {
    display: block !important;
  }
}
</style>
