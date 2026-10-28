<template>
  <v-container class="school-billing-dashboard pa-0 ma-0" fluid>
    <!-- Top Header Banner -->
    <v-card class="pa-4 mb-4 rounded-xl header-banner-card elevation-1" outlined>
      <div class="d-flex flex-wrap align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="header-icon-box mr-3">
            <v-icon size="32" color="primary">mdi-cash-register</v-icon>
          </div>
          <div>
            <div class="d-flex align-center flex-wrap">
              <h1 class="text-h5 font-weight-bold primary--text mb-0">
                ຄວບຄຸມກະເປົາເງິນແຄັດເຊຍ
              </h1>
              <span class="caption grey--text text--darken-1 ml-2 font-weight-medium">(Cashier Shift Control)</span>
            </div>
            <p class="text-caption grey--text text--darken-1 mb-0 mt-1">
              ເປີດ-ປິດກະເປົາ, ຕິດຕາມຍອດເງິນສົດໃນລີ້ນຊັກ, ມອບເງິນສົດເຂົ້າບັນຊີກາງ ແລະ ສະຫຼຸບຍອດປິດກະເປົາປະຈຳວັນ
            </p>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="d-flex align-center flex-wrap mt-2 mt-sm-0">
          <v-btn
            v-if="activeShift"
            color="teal darken-1"
            dark
            class="mr-3 font-weight-bold rounded-lg"
            elevation="2"
            small
            @click="openCashDropDialog"
          >
            <v-icon left small>mdi-bank-transfer-out</v-icon>
            ມອບເງິນສົດ (Cash Drop)
          </v-btn>
          <v-btn
            color="primary"
            outlined
            to="/admin/school/report"
            small
            class="mr-3 rounded-lg font-weight-bold"
          >
            <v-icon left small>mdi-chart-box-outline</v-icon>
            ລາຍງານທຸກ Cashier
          </v-btn>
          <v-chip
            v-if="activeShift"
            color="success"
            text-color="white"
            class="px-3 font-weight-bold shift-active-chip"
            small
            elevation="1"
          >
            <span class="live-dot mr-2"></span>
            <v-icon left x-small>mdi-cash-register</v-icon>
            Shift #{{ activeShift.id }} | ເປີດ: {{ formatCurrency(activeShift.openingCash) }} LAK
          </v-chip>
          <v-chip
            v-else
            color="error"
            text-color="white"
            class="px-3 font-weight-bold"
            small
            elevation="1"
          >
            <v-icon left x-small>mdi-cash-register-off</v-icon>
            ບໍ່ມີກະເປົາເປີດ (No Active Shift)
          </v-chip>
        </div>
      </div>
    </v-card>

    <!-- ACTIVE SHIFT TERMINAL VIEW -->
    <v-row v-if="activeShift" dense>
      <!-- Left Column: Live Cash Terminal & Actions -->
      <v-col cols="12" md="8">
        <!-- Live Cash Monitor Card -->
        <v-card class="pa-5 mb-4 rounded-xl elevation-1 shift-terminal-card" outlined>
          <!-- Terminal Status Bar -->
          <div class="d-flex flex-wrap justify-space-between align-center mb-4">
            <div class="d-flex align-center">
              <v-chip color="success" text-color="white" small class="font-weight-bold mr-3 px-3">
                <span class="live-dot mr-1"></span>
                SHIFT ACTIVE #{{ activeShift.id }}
              </v-chip>
              <div class="d-flex align-center">
                <v-avatar size="28" color="primary lighten-5" class="mr-2">
                  <span class="primary--text font-weight-bold caption">{{ (userCashData.userName || 'U').charAt(0).toUpperCase() }}</span>
                </v-avatar>
                <div>
                  <span class="font-weight-bold text-subtitle-2 primary--text">{{ userCashData.userName || 'Current Cashier' }}</span>
                  <span v-if="userCashData.userCode" class="caption grey--text ml-1">({{ userCashData.userCode }})</span>
                </div>
              </div>
            </div>

            <div class="d-flex align-center mt-2 mt-sm-0">
              <div class="caption grey--text mr-2 d-flex align-center">
                <v-icon x-small color="grey" class="mr-1">mdi-clock-outline</v-icon>
                ເປີດເມື່ອ: {{ formatDateTime(activeShift.openTime) }}
              </div>
              <v-tooltip bottom>
                <template #[`activator`]="{ on, attrs }">
                  <v-btn
                    icon
                    small
                    color="primary"
                    v-bind="attrs"
                    :loading="loadingMetrics"
                    v-on="on"
                    @click="fetchShiftLiveMetrics"
                  >
                    <v-icon small>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>ໂຫຼດຍອດໃໝ່ (Refresh Live Data)</span>
              </v-tooltip>
            </div>
          </div>

          <!-- Hero Display: Expected Cash In Drawer -->
          <v-card class="pa-4 mb-4 rounded-xl kpi-hero-card white--text elevation-2">
            <div class="d-flex align-center justify-space-between mb-2">
              <div class="caption font-weight-bold text-uppercase hero-badge">
                <v-icon x-small color="white" class="mr-1">mdi-safe</v-icon>
                ເງິນສົດທີ່ຄວນມີໃນລີ້ນຊັກຕົວຈິງ
              </div>
              <div class="kpi-icon-circle icon-hero">
                <v-icon small color="white">mdi-cash-register</v-icon>
              </div>
            </div>
            <div class="text-h4 font-weight-bold text-white text-tabular mb-1">
              {{ formatCurrency(currentExpectedCash) }}
              <span class="text-h6 font-weight-regular ml-1">LAK</span>
            </div>
            <div class="caption hero-subtext d-flex align-center justify-space-between">
              <span>ສູດຄິດໄລ່: ເປີດ (Float) + ຕື່ມເງິນ + POS - ຖອນເງິນ</span>
              <span class="font-weight-bold">Live Expected Cash</span>
            </div>
          </v-card>

          <!-- 4 Cash Flow Metric Cards -->
          <v-row dense class="mb-3">
            <!-- 1. Opening Float -->
            <v-col cols="6" sm="3">
              <v-card class="pa-3 rounded-xl kpi-metric-card kpi-card-slate" outlined>
                <div class="d-flex align-center justify-space-between mb-1">
                  <span class="caption font-weight-bold grey--text text--darken-2">ເງິນເປີດກະເປົາ</span>
                  <div class="kpi-icon-circle icon-slate">
                    <v-icon small color="blue-grey darken-1">mdi-cash-lock</v-icon>
                  </div>
                </div>
                <div class="text-subtitle-1 font-weight-bold blue-grey--text text--darken-4 text-tabular">
                  {{ formatCurrency(activeShift.openingCash) }}
                  <span class="caption font-weight-regular grey--text">LAK</span>
                </div>
                <div class="caption grey--text">Opening Float</div>
              </v-card>
            </v-col>

            <!-- 2. Wallet Topup IN -->
            <v-col cols="6" sm="3">
              <v-card class="pa-3 rounded-xl kpi-metric-card kpi-card-emerald" outlined>
                <div class="d-flex align-center justify-space-between mb-1">
                  <span class="caption font-weight-bold success--text text--darken-3">ຕື່ມເງິນບັດ (+IN)</span>
                  <div class="kpi-icon-circle icon-emerald">
                    <v-icon small color="success darken-1">mdi-arrow-down-bold-circle</v-icon>
                  </div>
                </div>
                <div class="text-subtitle-1 font-weight-bold success--text text--darken-3 text-tabular">
                  +{{ formatCurrency(userCashData.topupIn) }}
                  <span class="caption font-weight-regular success--text">LAK</span>
                </div>
                <div class="caption grey--text">Top-up {{ userCashData.topupCount || 0 }} ຄັ້ງ</div>
              </v-card>
            </v-col>

            <!-- 3. Wallet Withdraw OUT -->
            <v-col cols="6" sm="3">
              <v-card class="pa-3 rounded-xl kpi-metric-card kpi-card-rose" outlined>
                <div class="d-flex align-center justify-space-between mb-1">
                  <span class="caption font-weight-bold error--text text--darken-2">ຖອນເງິນບັດ (-OUT)</span>
                  <div class="kpi-icon-circle icon-rose">
                    <v-icon small color="error">mdi-arrow-up-bold-circle</v-icon>
                  </div>
                </div>
                <div class="text-subtitle-1 font-weight-bold error--text text--darken-3 text-tabular">
                  -{{ formatCurrency(userCashData.withdrawOut) }}
                  <span class="caption font-weight-regular error--text">LAK</span>
                </div>
                <div class="caption grey--text">Withdraw {{ userCashData.withdrawCount || 0 }} ຄັ້ງ</div>
              </v-card>
            </v-col>

            <!-- 4. POS Cash Sales -->
            <v-col cols="6" sm="3">
              <v-card class="pa-3 rounded-xl kpi-metric-card kpi-card-sky" outlined>
                <div class="d-flex align-center justify-space-between mb-1">
                  <span class="caption font-weight-bold info--text text--darken-3">POS ຂາຍເງິນສົດ</span>
                  <div class="kpi-icon-circle icon-sky">
                    <v-icon small color="info darken-1">mdi-cart-check</v-icon>
                  </div>
                </div>
                <div class="text-subtitle-1 font-weight-bold info--text text--darken-3 text-tabular">
                  +{{ formatCurrency(userCashData.posCashSales) }}
                  <span class="caption font-weight-regular info--text">LAK</span>
                </div>
                <div class="caption grey--text">POS {{ userCashData.posCashCount || 0 }} ບິນ</div>
              </v-card>
            </v-col>
          </v-row>

          <!-- Non-Cashless & Breakdown Strip -->
          <v-card class="pa-3 rounded-lg bg-slate-light" outlined>
            <div class="d-flex flex-wrap justify-space-between align-center">
              <div class="d-flex align-center mr-4 mb-1 mb-sm-0">
                <v-icon small color="purple" class="mr-1">mdi-credit-card-wireless-outline</v-icon>
                <span class="caption grey--text text--darken-2 mr-1">ຍອດຂາຍບັດ NFC (Cashless):</span>
                <strong class="purple--text font-weight-bold text-tabular caption">{{ formatCurrency(userCashData.posNfcSales) }} LAK</strong>
              </div>
              <div class="d-flex align-center mr-4 mb-1 mb-sm-0">
                <v-icon x-small color="teal" class="mr-1">mdi-arrow-up</v-icon>
                <span class="caption grey--text text--darken-2 mr-1">ລວມຮັບເຂົ້າ (Cash IN):</span>
                <strong class="teal--text text--darken-2 font-weight-bold text-tabular caption">+{{ formatCurrency(userCashData.totalCashIn) }} LAK</strong>
              </div>
              <div class="d-flex align-center">
                <v-icon x-small color="error" class="mr-1">mdi-arrow-down</v-icon>
                <span class="caption grey--text text--darken-2 mr-1">ລວມຈ່າຍອອກ (Cash OUT):</span>
                <strong class="error--text font-weight-bold text-tabular caption">-{{ formatCurrency(userCashData.totalCashOut) }} LAK</strong>
              </div>
            </div>
          </v-card>
        </v-card>

        <!-- Operational Action Buttons Card -->
        <v-card class="pa-4 rounded-xl elevation-1 action-op-card" outlined>
          <div class="text-subtitle-2 font-weight-bold primary--text mb-3 d-flex align-center">
            <v-icon small color="primary" class="mr-2">mdi-gesture-tap-button</v-icon>
            ການຈັດການ ແລະ ປິດກະເປົາ (Shift Operations)
          </div>

          <v-row dense class="mb-3">
            <v-col cols="12" sm="6">
              <v-btn
                color="teal darken-1"
                dark
                block
                large
                elevation="2"
                class="font-weight-bold rounded-xl py-6"
                @click="openCashDropDialog"
              >
                <v-icon left size="26">mdi-bank-transfer-out</v-icon>
                <div class="text-left">
                  <div class="text-subtitle-1 font-weight-bold">ມອບເງິນສົດ (Cash Drop)</div>
                  <div class="caption font-weight-regular text-teal-light">ໂອນເງິນເຂົ້າຕູ້ເຊບກາງ / ບັນຊີກາງ</div>
                </div>
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn
                color="error darken-1"
                dark
                block
                large
                elevation="2"
                class="font-weight-bold rounded-xl py-6"
                @click="openCloseShiftDialog"
              >
                <v-icon left size="26">mdi-lock-check</v-icon>
                <div class="text-left">
                  <div class="text-subtitle-1 font-weight-bold">ປິດກະເປົາ (Close Shift)</div>
                  <div class="caption font-weight-regular text-rose-light">ສະຫຼຸບຍອດ ແລະ ປິດຕົວຈິງ</div>
                </div>
              </v-btn>
            </v-col>
          </v-row>

          <v-divider class="my-3"></v-divider>

          <!-- Quick Print Slips -->
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-btn
                color="teal darken-2"
                outlined
                block
                class="rounded-lg font-weight-bold"
                @click="printCurrentShiftSlip"
              >
                <v-icon left small>mdi-receipt</v-icon>
                ພິມ Slip ປິດ Shift (80mm Thermal)
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn
                color="primary"
                outlined
                block
                class="rounded-lg font-weight-bold"
                @click="printActiveShiftReport"
              >
                <v-icon left small>mdi-printer</v-icon>
                ພິມລາຍງານ Shift ເຕັມ (A4 Report)
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Right Column: Cash Drawer Status & Guidelines -->
      <v-col cols="12" md="4">
        <!-- Vault & Till Account Status -->
        <v-card class="pa-4 mb-4 rounded-xl elevation-1" outlined>
          <div class="text-subtitle-2 font-weight-bold primary--text mb-3 d-flex align-center">
            <v-icon small color="primary" class="mr-2">mdi-bank</v-icon>
            ສະຖານະບັນຊີເງິນສົດ (Vault & Till Accounts)
          </div>

          <!-- Till Account -->
          <div class="pa-3 mb-2 rounded-lg bg-teal-light" outlined>
            <div class="d-flex justify-space-between align-center mb-1">
              <span class="caption font-weight-bold teal--text text--darken-3">
                <v-icon x-small color="teal darken-3" class="mr-1">mdi-cash-register</v-icon>
                ບັນຊີລີ້ນຊັກໜ້າຮ້ານ (Till)
              </span>
              <v-chip x-small color="teal" text-color="white">#125</v-chip>
            </div>
            <div class="text-subtitle-1 font-weight-bold teal--text text--darken-4 text-tabular">
              {{ formatCurrency(currentExpectedCash) }} <span class="caption">LAK</span>
            </div>
            <div class="caption grey--text">ຍອດເງິນສົດປະຈຸບັນໃນລີ້ນຊັກ</div>
          </div>

          <!-- Central Vault Account -->
          <div class="pa-3 rounded-lg bg-slate-light" outlined>
            <div class="d-flex justify-space-between align-center mb-1">
              <span class="caption font-weight-bold blue-grey--text text--darken-3">
                <v-icon x-small color="blue-grey darken-3" class="mr-1">mdi-safe</v-icon>
                ບັນຊີຕູ້ເຊບກາງ (Central Vault)
              </span>
              <v-chip x-small color="blue-grey" text-color="white">#124</v-chip>
            </div>
            <div class="text-subtitle-1 font-weight-bold blue-grey--text text--darken-4 text-tabular">
              {{ formatCurrency(bankAccounts.find(a => a.id === 124)?.balance || 0) }} <span class="caption">LAK</span>
            </div>
            <div class="caption grey--text">ບັນຊີຫຼັກສຳລັບຮັບເງິນມອບ Cash Drop</div>
          </div>
        </v-card>

        <!-- Operational Guidelines Checklist -->
        <v-card class="pa-4 rounded-xl elevation-1" outlined>
          <div class="text-subtitle-2 font-weight-bold primary--text mb-3 d-flex align-center">
            <v-icon small color="primary" class="mr-2">mdi-clipboard-check-outline</v-icon>
            ຂັ້ນຕອນການເຮັດວຽກ Shift (Cashier SOP)
          </div>

          <div class="guide-checklist caption">
            <div class="guide-item d-flex align-start mb-2">
              <v-icon small color="success" class="mr-2 mt-1">mdi-check-circle-outline</v-icon>
              <div><strong>1. ເປີດກະເປົາ:</strong> ໃສ່ເງິນສົດເລີ່ມຕົ້ນ Float ແລະ ກວດລີ້ນຊັກ</div>
            </div>
            <div class="guide-item d-flex align-start mb-2">
              <v-icon small color="info" class="mr-2 mt-1">mdi-cart-outline</v-icon>
              <div><strong>2. ທຳທຸລະກຳ:</strong> ຮັບຊຳລະຄ່າຮຽນ, ຕື່ມເງິນບັດ, POS ຂາຍສິນຄ້າ</div>
            </div>
            <div class="guide-item d-flex align-start mb-2">
              <v-icon small color="teal" class="mr-2 mt-1">mdi-bank-transfer-out</v-icon>
              <div><strong>3. ມອບເງິນສົດ (Cash Drop):</strong> ມອບເງິນສົດສ່ວນໃຫຍ່ເຂົ້າຕູ້ເຊບກາງ</div>
            </div>
            <div class="guide-item d-flex align-start mb-2">
              <v-icon small color="warning" class="mr-2 mt-1">mdi-calculator</v-icon>
              <div><strong>4. ນັບເງິນຕົວຈິງ:</strong> ນັບເງິນສົດຄົງເຫຼືອ ແລະ ປຽບທຽບຜົນຕ່າງ</div>
            </div>
            <div class="guide-item d-flex align-start">
              <v-icon small color="error" class="mr-2 mt-1">mdi-lock-outline</v-icon>
              <div><strong>5. ປິດ Shift:</strong> ຢືນຢັນປິດກະເປົາ ແລະ ພິມ Slip ສະຫຼຸບ</div>
            </div>
          </div>

          <v-divider class="my-3"></v-divider>

          <v-btn
            color="primary"
            text
            block
            small
            to="/admin/school/report"
            class="font-weight-bold"
          >
            <v-icon left small>mdi-open-in-new</v-icon>
            ເປີດເບິ່ງລາຍງານການເງິນລະອຽດ
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- NO ACTIVE SHIFT VIEW (IDLE TERMINAL) -->
    <v-card v-else class="pa-8 pa-sm-12 text-center rounded-2xl elevation-1 idle-terminal-card" outlined>
      <div class="idle-icon-wrapper mb-4">
        <v-icon size="64" color="primary">mdi-cash-register</v-icon>
      </div>

      <h2 class="text-h5 font-weight-bold primary--text mb-2">
        ພ້ອມເປີດກະເປົາເຮັດວຽກ (Ready to Start Shift)
      </h2>
      <p class="grey--text text--darken-2 mb-6 mx-auto" style="max-width: 540px;">
        ເລີ່ມຕົ້ນກະເປົາໃໝ່ໂດຍການໃສ່ເງິນສົດເລີ່ມຕົ້ນ (Opening Float) ໃນລີ້ນຊັກ ເພື່ອບັນທຶກການຊຳລະຄ່າຮຽນ, ຕື່ມເງິນບັດນັກຮຽນ ແລະ ຂາຍສິນຄ້າໜ້າຮ້ານ
      </p>

      <v-btn
        color="primary"
        large
        elevation="3"
        class="px-8 py-6 rounded-xl font-weight-bold mb-8"
        @click="shiftOpenDialog = true"
      >
        <v-icon left size="24">mdi-key-variant</v-icon>
        <span class="text-subtitle-1 font-weight-bold">ເປີດກະເປົາເຮັດວຽກ (Open Cashier Shift)</span>
      </v-btn>

      <!-- 3 Feature Highlight Cards -->
      <v-row dense justify="center" class="mt-4" style="max-width: 900px; margin: 0 auto;">
        <v-col cols="12" sm="4">
          <v-card class="pa-4 rounded-xl text-left h-100 bg-slate-light" outlined>
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-cash-lock</v-icon>
              <strong class="text-subtitle-2 primary--text">Float Security</strong>
            </div>
            <div class="caption grey--text text--darken-2">
              ບັນທຶກເງິນເລີ່ມຕົ້ນໃນລີ້ນຊັກຢ່າງຊັດເຈນ ເພື່ອປ້ອງກັນການຜິດດ່ຽງຕອນປິດກະເປົາ
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-4 rounded-xl text-left h-100 bg-slate-light" outlined>
            <div class="d-flex align-center mb-2">
              <v-icon color="purple" class="mr-2">mdi-credit-card-wireless-outline</v-icon>
              <strong class="text-subtitle-2 purple--text">Multi-Payment</strong>
            </div>
            <div class="caption grey--text text--darken-2">
              ຮອງຮັບທັງເງິນສົດ, ບັດນັກຮຽນ NFC, ແລະ QR Code ພ້ອມແຍກບັນຊີອັດຕະໂນມັດ
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-4 rounded-xl text-left h-100 bg-slate-light" outlined>
            <div class="d-flex align-center mb-2">
              <v-icon color="teal darken-2" class="mr-2">mdi-safe</v-icon>
              <strong class="text-subtitle-2 teal--text text--darken-2">Central Vault Drop</strong>
            </div>
            <div class="caption grey--text text--darken-2">
              ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop) ໄດ້ຕະຫຼອດເວລາເພື່ອຫຼຸດຄວາມສ່ຽງເງິນລົ້ນ
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!-- DIALOGS -->

    <!-- 1. Open Cashier Shift Dialog -->
    <v-dialog v-model="shiftOpenDialog" max-width="460px" persistent>
      <v-card class="rounded-xl overflow-hidden">
        <v-card-title class="dialog-header-primary white--text font-weight-bold py-3">
          <v-icon left color="white">mdi-cash-register</v-icon>
          ເປີດກະເປົາເງິນ (Open Cashier Shift)
        </v-card-title>
        <v-card-text class="pt-4">
          <div class="caption grey--text text--darken-2 mb-3">
            ກະລຸນາໃສ່ຈຳນວນເງິນສົດເລີ່ມຕົ້ນ (Opening Cash Float) ທີ່ມີໃນລີ້ນຊັກ:
          </div>

          <!-- Quick Preset Amount Buttons -->
          <div class="d-flex flex-wrap gap-1 mb-3">
            <v-btn
              x-small
              outlined
              color="primary"
              class="mr-1 mb-1 rounded-pill font-weight-bold"
              @click="setOpeningCashPreset(0)"
            >
              0 LAK (ບໍ່ມີ)
            </v-btn>
            <v-btn
              x-small
              outlined
              color="primary"
              class="mr-1 mb-1 rounded-pill font-weight-bold"
              @click="setOpeningCashPreset(500000)"
            >
              500,000 LAK
            </v-btn>
            <v-btn
              x-small
              outlined
              color="primary"
              class="mr-1 mb-1 rounded-pill font-weight-bold"
              @click="setOpeningCashPreset(1000000)"
            >
              1,000,000 LAK
            </v-btn>
            <v-btn
              x-small
              outlined
              color="primary"
              class="mb-1 rounded-pill font-weight-bold"
              @click="setOpeningCashPreset(2000000)"
            >
              2,000,000 LAK
            </v-btn>
          </div>

          <v-form ref="shiftOpenForm">
            <v-text-field
              :value="formatInputAmount(shiftFormFields.openingCash)"
              label="ເງິນສົດເລີ່ມຕົ້ນ (Opening Float) *"
              outlined
              dense
              suffix="LAK"
              prepend-inner-icon="mdi-cash"
              class="text-tabular"
              :rules="[v => shiftFormFields.openingCash >= 0 || 'ຕ້ອງເປັນຄ່າບວກ']"
              @input="onAmountInput($event, shiftFormFields, 'openingCash')"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-4 grey lighten-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text class="rounded-lg" @click="shiftOpenDialog = false">ຍົກເລີກ</v-btn>
          <v-btn
            color="primary"
            depressed
            class="font-weight-bold rounded-lg px-4"
            :loading="savingShift"
            @click="openShift"
          >
            <v-icon left small>mdi-key-variant</v-icon>
            ຢືນຢັນເປີດ Shift
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 2. Close Cashier Shift Dialog -->
    <v-dialog v-model="shiftCloseDialog" max-width="500px" persistent>
      <v-card class="rounded-xl overflow-hidden">
        <v-card-title class="dialog-header-rose white--text font-weight-bold py-3">
          <v-icon left color="white">mdi-lock-check</v-icon>
          ປິດກະເປົາເງິນ (Close Cashier Shift)
        </v-card-title>
        <v-card-text class="pt-4">
          <!-- Expected Cash Hint -->
          <v-card class="pa-3 mb-3 rounded-lg bg-teal-light" outlined>
            <div class="d-flex justify-space-between align-center">
              <span class="caption grey--text text--darken-2">ເງິນສົດທີ່ຄວນມີໃນລີ້ນຊັກ (Expected):</span>
              <strong class="text-subtitle-1 teal--text text--darken-3 font-weight-bold text-tabular">
                {{ formatCurrency(currentExpectedCash) }} LAK
              </strong>
            </div>
          </v-card>

          <!-- Quick Fill Expected Button -->
          <div class="d-flex justify-end mb-2">
            <v-btn
              x-small
              color="teal darken-1"
              outlined
              class="rounded-pill font-weight-bold"
              @click="fillExpectedClosingCash"
            >
              ໃສ່ຍອດພໍດີ (Fill Expected)
            </v-btn>
          </div>

          <v-form ref="shiftCloseForm">
            <v-text-field
              :value="formatInputAmount(shiftFormFields.closingCash)"
              label="ເງິນສົດນັບໄດ້ຕົວຈິງ (Actual Closing Cash) *"
              outlined
              dense
              suffix="LAK"
              prepend-inner-icon="mdi-cash-multiple"
              class="text-tabular mb-2"
              :rules="[v => shiftFormFields.closingCash >= 0 || 'ຕ້ອງເປັນຄ່າບວກ']"
              @input="onAmountInput($event, shiftFormFields, 'closingCash')"
            ></v-text-field>
          </v-form>

          <!-- Real-time Discrepancy Indicator -->
          <div
            v-if="shiftFormFields.closingCash !== null"
            class="d-flex justify-space-between align-center px-3 py-2 rounded-lg mb-3"
            :class="closeVariance === 0 ? 'bg-emerald-light' : (closeVariance > 0 ? 'bg-info-light' : 'bg-error-light')"
          >
            <span class="caption font-weight-bold">
              <v-icon x-small :color="closeVariance === 0 ? 'success' : (closeVariance > 0 ? 'primary' : 'error')" class="mr-1">
                {{ closeVariance === 0 ? 'mdi-check-circle' : 'mdi-alert-circle' }}
              </v-icon>
              ຜົນຕ່າງ (Discrepancy):
            </span>
            <strong
              class="text-subtitle-2 text-tabular"
              :class="closeVariance === 0 ? 'success--text text--darken-2' : (closeVariance > 0 ? 'primary--text' : 'error--text')"
            >
              {{ closeVariance > 0 ? '+' : '' }}{{ formatCurrency(closeVariance) }} LAK
              <span class="caption font-weight-regular">
                ({{ closeVariance === 0 ? 'ພໍດີ' : (closeVariance > 0 ? 'ເງິນເກີນ' : 'ເງິນຂາດ') }})
              </span>
            </strong>
          </div>

          <v-alert type="warning" text dense class="mb-0 caption rounded-lg">
            ເມື່ອປິດ Shift ແລ້ວ ທ່ານສາມາດມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop) ເພື່ອລ້າງຍອດລີ້ນຊັກ.
          </v-alert>
        </v-card-text>
        <v-card-actions class="pa-4 grey lighten-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text class="rounded-lg" @click="shiftCloseDialog = false">ຍົກເລີກ</v-btn>
          <v-btn
            color="error darken-1"
            depressed
            class="font-weight-bold rounded-lg px-4"
            :loading="savingShift"
            @click="closeShift"
          >
            <v-icon left small>mdi-lock</v-icon>
            ຢືນຢັນປິດ Shift
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 3. Cash Drop / Remittance to Central Account Dialog -->
    <v-dialog v-model="cashDropDialog" max-width="580px" persistent>
      <v-card class="rounded-xl overflow-hidden">
        <v-card-title class="dialog-header-emerald white--text font-weight-bold py-3">
          <v-icon left color="white">mdi-bank-transfer-out</v-icon>
          ມອບເງິນສົດເຂົ້າບັນຊີກາງ (Cash Drop to Central Vault)
        </v-card-title>
        <v-card-text class="pt-4">
          <!-- Live Till Balance -->
          <v-card class="pa-3 mb-4 rounded-lg bg-teal-light" outlined>
            <div class="d-flex justify-space-between align-center">
              <div>
                <span class="caption grey--text text--darken-2">ເງິນສົດປະຈຸບັນໃນລີ້ນຊັກ (Current Till Cash):</span>
                <div class="caption font-weight-bold teal--text">{{ userCashData.userName || 'Cashier' }}</div>
              </div>
              <strong class="text-subtitle-1 teal--text text--darken-3 font-weight-bold text-tabular">
                {{ formatCurrency(currentExpectedCash) }} LAK
              </strong>
            </div>
          </v-card>

          <v-form ref="cashDropForm">
            <!-- Source Till Account -->
            <v-select
              v-model="cashDropFields.fromAccountId"
              :items="availableTillAccounts"
              item-text="displayName"
              item-value="id"
              label="ບັນຊີຕົ້ນທາງ / ລີ້ນຊັກ (From Till Account) *"
              outlined
              dense
              prepend-inner-icon="mdi-cash-register"
              class="mb-2"
              :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີຕົ້ນທາງ']"
            ></v-select>

            <!-- Destination Central Account -->
            <v-select
              v-model="cashDropFields.toAccountId"
              :items="availableCentralAccounts"
              item-text="displayName"
              item-value="id"
              label="ບັນຊີປາຍທາງ / ຕູ້ເຊບກາງ (To Central Account) *"
              outlined
              dense
              prepend-inner-icon="mdi-safe"
              class="mb-2"
              :rules="[v => !!v || 'ກະລຸນາເລືອກບັນຊີປາຍທາງ']"
            ></v-select>

            <!-- Amount & Quick Buttons -->
            <div class="mb-1 d-flex justify-space-between align-center">
              <span class="caption font-weight-bold grey--text text--darken-2">ຈຳນວນເງິນສົດທີ່ມອບ (Amount) *</span>
              <div class="d-flex gap-1">
                <v-btn
                  x-small
                  color="success"
                  outlined
                  class="mr-1 rounded-pill font-weight-bold"
                  @click="fillMaxCashDrop"
                >
                  ມອບໝົດ
                </v-btn>
                <v-btn
                  x-small
                  color="primary"
                  outlined
                  class="rounded-pill font-weight-bold"
                  @click="fillNetSalesDrop"
                >
                  ມອບສະເພາະຍອດຂາຍ
                </v-btn>
              </div>
            </div>
            <v-text-field
              :value="formatInputAmount(cashDropFields.amount)"
              outlined
              dense
              suffix="LAK"
              prepend-inner-icon="mdi-currency-usd"
              class="mb-2 text-tabular"
              :rules="[v => cashDropFields.amount > 0 || 'ຈຳນວນເງິນຕ້ອງຫຼາຍກວ່າ 0']"
              @input="onAmountInput($event, cashDropFields, 'amount')"
            ></v-text-field>

            <!-- Receiver Name -->
            <v-text-field
              v-model="cashDropFields.receiverName"
              label="ຊື່ຜູ້ຮັບມອບ / ຫົວໜ້າການເງິນ (Receiver Name) *"
              outlined
              dense
              prepend-inner-icon="mdi-account-check"
              class="mb-2"
              :rules="[v => !!v || 'ກະລຸນາລະບຸຊື່ຜູ້ຮັບມອບ']"
            ></v-text-field>

            <!-- Remarks -->
            <v-textarea
              v-model="cashDropFields.description"
              label="ໝາຍເຫດ (Remarks)"
              outlined
              dense
              rows="2"
              hide-details="auto"
              prepend-inner-icon="mdi-note-text-outline"
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-4 grey lighten-4">
          <v-spacer></v-spacer>
          <v-btn color="grey" text class="rounded-lg" @click="cashDropDialog = false">ຍົກເລີກ</v-btn>
          <v-btn
            color="success darken-1"
            depressed
            class="font-weight-bold rounded-lg px-4"
            :loading="savingCashDrop"
            @click="submitCashDrop"
          >
            <v-icon left small>mdi-check</v-icon>
            ຢືນຢັນການມອບເງິນສົດ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {
  generateSchoolShiftReportHTML,
  generateUserShiftSummarySlipHTML,
  generateCashDropVoucherHTML
} from '~/common/printTemplates';

export default {
  name: 'SchoolShiftsPage',
  middleware: 'auths',
  data() {
    return {
      activeShift: null,
      savingShift: false,
      loadingMetrics: false,
      shiftOpenDialog: false,
      shiftCloseDialog: false,
      shiftFormFields: {
        openingCash: 0,
        closingCash: 0
      },

      // Cash Drop State
      cashDropDialog: false,
      savingCashDrop: false,
      bankAccounts: [],
      cashDropFields: {
        fromAccountId: 125, // Default Cash account 2 (till)
        toAccountId: 124,   // Default Cash Account (Central)
        amount: 0,
        receiverName: 'ຫົວໜ້າການເງິນ / ຜູ້ອຳນວຍການ',
        description: 'ມອບເງິນສົດປິດກະເປົາປະຈຳວັນ ເຂົ້າບັນຊີກາງ (End-of-day Cash Drop)'
      },

      userCashData: {
        userId: null,
        userCode: '',
        userName: '',
        topupIn: 0,
        topupCount: 0,
        withdrawOut: 0,
        withdrawCount: 0,
        posCashSales: 0,
        posCashCount: 0,
        posNfcSales: 0,
        feeCashCollected: 0,
        totalCashIn: 0,
        totalCashOut: 0
      }
    }
  },
  computed: {
    currentExpectedCash() {
      const open = Number(this.activeShift?.openingCash || 0);
      const inAmt = Number(this.userCashData.totalCashIn || 0);
      const outAmt = Number(this.userCashData.totalCashOut || 0);
      return open + inAmt - outAmt;
    },
    closeVariance() {
      const closing = Number(this.shiftFormFields.closingCash || 0);
      return closing - this.currentExpectedCash;
    },
    availableTillAccounts() {
      return this.bankAccounts
        .filter(a => a.studentId === null)
        .map(a => ({
          id: a.id,
          displayName: `${a.accountNumber} - ${a.accountName} (ຍອດ: ${this.formatCurrency(a.balance)} LAK)`
        }));
    },
    availableCentralAccounts() {
      return this.bankAccounts
        .filter(a => a.studentId === null && a.id !== this.cashDropFields.fromAccountId)
        .map(a => ({
          id: a.id,
          displayName: `${a.accountNumber} - ${a.accountName} (ຍອດ: ${this.formatCurrency(a.balance)} LAK)`
        }));
    }
  },
  mounted() {
    this.checkActiveShift();
    this.loadBankAccounts();
  },
  methods: {
    formatCurrency(value) {
      if (!value && value !== 0) return '0';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    },
    formatInputAmount(value) {
      if (!value && value !== 0) return '';
      return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    },
    onAmountInput(value, formFields, fieldName) {
      const digits = String(value || '').replace(/\D/g, '');
      const number = digits ? parseInt(digits, 10) : 0;
      formFields[fieldName] = number;
    },
    formatDateTime(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleString('en-GB');
    },

    setOpeningCashPreset(amount) {
      this.shiftFormFields.openingCash = amount;
    },

    fillExpectedClosingCash() {
      this.shiftFormFields.closingCash = this.currentExpectedCash;
    },

    fillMaxCashDrop() {
      this.cashDropFields.amount = this.currentExpectedCash;
    },

    fillNetSalesDrop() {
      const opening = Number(this.activeShift?.openingCash || 0);
      this.cashDropFields.amount = Math.max(0, this.currentExpectedCash - opening);
    },

    async loadBankAccounts() {
      try {
        const res = await this.$axios.get('/api/bank_account/find');
        this.bankAccounts = res.data || [];
        // Default from/to accounts if found
        const till = this.bankAccounts.find(a => a.id === 125 || a.accountName.toLowerCase().includes('2') || a.accountType === 'Merchant');
        const central = this.bankAccounts.find(a => a.id === 124 || a.accountName.toLowerCase().includes('cash') || a.id !== till?.id);
        if (till) this.cashDropFields.fromAccountId = till.id;
        if (central) this.cashDropFields.toAccountId = central.id;
      } catch (err) {
        console.error('Error loading bank accounts:', err);
      }
    },

    async checkActiveShift() {
      try {
        const res = await this.$axios.get('/api/school/shifts/active');
        this.activeShift = res.data;
        if (this.activeShift) {
          this.fetchShiftLiveMetrics();
        }
      } catch (err) {
        this.activeShift = null;
      }
    },

    async fetchShiftLiveMetrics() {
      this.loadingMetrics = true;
      try {
        const today = new Date().toISOString().split('T')[0];
        const res = await this.$axios.get('/api/school/reports/cash-position', {
          params: { startDate: today, endDate: today }
        });
        const users = res.data?.users || [];
        const myUid = this.activeShift?.userId;
        const myData = users.find(u => u.userId === myUid) || users[0];
        if (myData) {
          this.userCashData = myData;
        }
      } catch (err) {
        console.error('Error fetching live metrics:', err);
      } finally {
        this.loadingMetrics = false;
      }
    },

    async openShift() {
      this.savingShift = true;
      try {
        const res = await this.$axios.post('/api/school/shifts/open', {
          openingCash: this.shiftFormFields.openingCash
        });
        this.activeShift = res.data.shift || res.data;
        this.$toast.success('ເປີດ Shift ສຳເລັດແລ້ວ');
        this.shiftOpenDialog = false;
        this.fetchShiftLiveMetrics();
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດເປີດ Shift ໄດ້');
      } finally {
        this.savingShift = false;
      }
    },

    openCloseShiftDialog() {
      this.shiftFormFields.closingCash = this.currentExpectedCash;
      this.shiftCloseDialog = true;
    },

    async closeShift() {
      if (!this.activeShift) return;
      this.savingShift = true;
      try {
        await this.$axios.put(`/api/school/shifts/close/${this.activeShift.id}`, {
          closingCash: this.shiftFormFields.closingCash
        });
        this.activeShift = null;
        this.$toast.success('ປິດ Shift ສຳເລັດແລ້ວ');
        this.shiftCloseDialog = false;
      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ບໍ່ສາມາດປິດ Shift ໄດ້');
      } finally {
        this.savingShift = false;
      }
    },

    openCashDropDialog() {
      this.cashDropFields.amount = this.currentExpectedCash;
      this.cashDropDialog = true;
    },

    async submitCashDrop() {
      if (!this.$refs.cashDropForm.validate()) return;
      this.savingCashDrop = true;
      try {
        const res = await this.$axios.post('/api/transactions/transfer', {
          fromAccountId: this.cashDropFields.fromAccountId,
          toAccountId: this.cashDropFields.toAccountId,
          amount: this.cashDropFields.amount,
          userId: this.activeShift?.userId || 1,
          receiverName: this.cashDropFields.receiverName,
          description: this.cashDropFields.description
        });

        this.$toast.success('ມອບເງິນສົດເຂົ້າບັນຊີກາງສຳເລັດແລ້ວ!');
        this.cashDropDialog = false;
        this.loadBankAccounts();
        this.fetchShiftLiveMetrics();

        // Prompt to print Cash Remittance Voucher
        const transferPayload = {
          ...res.data.transfer,
          cashierName: this.userCashData.userName || 'DC Auto',
          description: this.cashDropFields.description
        };
        this.printCashDropVoucher(transferPayload);

      } catch (err) {
        this.$toast.error(err.response?.data?.message || 'ການມອບເງິນສົດບໍ່ສຳເລັດ');
      } finally {
        this.savingCashDrop = false;
      }
    },

    printCashDropVoucher(transferData) {
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const htmlContent = generateCashDropVoucherHTML(transferData, companyData);
        
        const printWindow = window.open('', '_blank', 'width=800,height=700');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('Failed to generate cash drop voucher print view');
      }
    },

    printCurrentShiftSlip() {
      if (!this.activeShift) return;
      try {
        const companyData = this.$store.getters.findAllCompany[0] || {};
        const userObj = {
          ...this.userCashData,
          openingCash: this.activeShift.openingCash,
          expectedCashInDrawer: this.currentExpectedCash,
          shift: this.activeShift
        };
        const htmlContent = generateUserShiftSummarySlipHTML(userObj, companyData);
        
        const printWindow = window.open('', '_blank', 'width=400,height=600');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('Failed to generate shift slip print view');
      }
    },

    async printActiveShiftReport() {
      if (!this.activeShift) return;
      try {
        const res = await this.$axios.get(`/api/school/shifts/report/${this.activeShift.id}`);
        const reportData = res.data;
        const companyData = this.$store.getters.findAllCompany[0] || {};
        
        const htmlContent = generateSchoolShiftReportHTML(reportData, companyData);
        
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        if (!printWindow) {
          this.$toast.error('Unable to open print window. Please check popup blocker settings.');
          return;
        }

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        printWindow.onload = function () {
          setTimeout(() => {
            try {
              printWindow.print();
              setTimeout(() => {
                printWindow.close();
              }, 100);
            } catch (e) {
              console.error('Print error:', e);
              printWindow.close();
            }
          }, 500);
        };
      } catch (err) {
        console.error(err);
        this.$toast.error('ບໍ່ສາມາດດຶງຂໍ້ມູນລາຍງານ Shift ເພື່ອພິມໄດ້');
      }
    }
  }
}
</script>

<style scoped>
.school-billing-dashboard {
  margin: 0 !important;
  padding: 0 !important;
}

.school-billing-dashboard * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

/* Header Banner Card */
.header-banner-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03) !important;
}

.header-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c7d2fe;
}

/* Live Pulsing Dot Indicator */
.live-dot {
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  animation: pulse-green 1.8s infinite;
}

@keyframes pulse-green {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}

/* Shift Terminal Card */
.shift-terminal-card {
  border: 1px solid #e2e8f0 !important;
}

/* Hero Card (Expected Cash in Drawer) */
.kpi-hero-card {
  background: linear-gradient(135deg, #065f46 0%, #047857 50%, #0d9488 100%) !important;
  border: none !important;
  box-shadow: 0 10px 25px -5px rgba(4, 120, 87, 0.35) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.kpi-hero-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -4px rgba(4, 120, 87, 0.45) !important;
}

.hero-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 0.5px;
}

.hero-subtext {
  color: #a7f3d0 !important;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 4px;
}

/* KPI Metric Cards */
.kpi-metric-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.kpi-metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px -2px rgba(0, 0, 0, 0.08) !important;
}

.kpi-card-slate {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
  border: 1px solid #e2e8f0 !important;
}

.kpi-card-emerald {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%) !important;
  border: 1px solid #bbf7d0 !important;
}

.kpi-card-rose {
  background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%) !important;
  border: 1px solid #fecdd3 !important;
}

.kpi-card-sky {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%) !important;
  border: 1px solid #bae6fd !important;
}

/* KPI Icon Circles */
.kpi-icon-circle {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-slate {
  background: rgba(71, 85, 105, 0.12);
}

.icon-emerald {
  background: rgba(16, 185, 129, 0.18);
}

.icon-rose {
  background: rgba(244, 63, 94, 0.18);
}

.icon-sky {
  background: rgba(14, 165, 233, 0.18);
}

.icon-hero {
  background: rgba(255, 255, 255, 0.22);
}

/* Background Color Helpers */
.bg-slate-light {
  background-color: #f8fafc !important;
}

.bg-emerald-light {
  background-color: #ecfdf5 !important;
}

.bg-teal-light {
  background-color: #f0fdfa !important;
}

.bg-info-light {
  background-color: #f0f9ff !important;
}

.bg-error-light {
  background-color: #fef2f2 !important;
}

.text-teal-light {
  color: #a7f3d0 !important;
}

.text-rose-light {
  color: #fecdd3 !important;
}

/* Tabular Figures */
.text-tabular {
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.2px;
}

/* Operation Action Card */
.action-op-card {
  border: 1px solid #e2e8f0 !important;
}

/* Guide Checklist */
.guide-item {
  line-height: 1.5;
}

/* Idle Terminal Card */
.idle-terminal-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04) !important;
}

.idle-icon-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
  border: 2px solid #c7d2fe;
}

/* Dialog Headers */
.dialog-header-primary {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%) !important;
}

.dialog-header-rose {
  background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%) !important;
}

.dialog-header-emerald {
  background: linear-gradient(135deg, #065f46 0%, #059669 100%) !important;
}
</style>
