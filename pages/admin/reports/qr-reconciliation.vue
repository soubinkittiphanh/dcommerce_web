<template>
  <div class="qr-reconciliation-container pa-6">
    <!-- Feedback Alerts -->
    <v-dialog v-model="alertDialog" max-width="300px" persistent>
      <dialog-classic-message :message="alertMessage" @closedialog="alertMessage = null" />
    </v-dialog>

    <v-dialog v-model="isLoading" hide-overlay persistent width="300">
      <loading-indicator />
    </v-dialog>

    <!-- Header Section -->
    <div class="d-flex flex-column flex-sm-row justify-space-between align-start align-sm-center mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold primary--text mb-1 d-flex align-center">
          <v-icon color="primary" class="mr-2" size="32">mdi-chart-line</v-icon>
          ລາຍງານກະທົບຍອດ QR
        </h1>
        <p class="grey--text text--darken-1 mb-0">ຕິດຕາມສະຖານະ ແລະ ກະທົບຍອດການຊຳລະເງິນຜ່ານ QR ຂອງທຸກທະນາຄານ</p>
      </div>
      <div class="d-flex mt-4 mt-sm-0">
        <v-btn
          color="success"
          height="42"
          class="px-6 rounded-lg elevation-1 mr-2 font-weight-bold"
          @click="exportToExcel"
        >
          <v-icon left>mdi-microsoft-excel</v-icon> ສົ່ງອອກ Excel
        </v-btn>
        <v-btn
          color="primary"
          height="42"
          class="px-6 rounded-lg elevation-1 font-weight-bold"
          @click="fetchData"
        >
          <v-icon left>mdi-sync</v-icon> ດຶງຂໍ້ມູນຄືນໃໝ່
        </v-btn>
      </div>
    </div>

    <!-- Summary Stats Row -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card-modern stat-card-primary pa-5 elevation-1">
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="text-subtitle-2 grey--text font-weight-medium">ທຸລະກຳທັງໝົດ</span>
              <h3 class="text-h4 font-weight-bold mt-2 grey--text text--darken-3">{{ getFormatNum(stats.totalRequests) }}</h3>
            </div>
            <div class="icon-bg primary lighten-5">
              <v-icon color="primary" size="28">mdi-qrcode-scan</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card-modern stat-card-success pa-5 elevation-1">
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="text-subtitle-2 grey--text font-weight-medium">ຍອດຮັບເງິນສຳເລັດ</span>
              <h3 class="text-h4 font-weight-bold mt-2 success--text">
                {{ getFormatNum(stats.totalAmount) }} <span class="text-subtitle-1 font-weight-bold">₭</span>
              </h3>
            </div>
            <div class="icon-bg success lighten-5">
              <v-icon color="success" size="28">mdi-cash-multiple</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card-modern stat-card-info pa-5 elevation-1">
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="text-subtitle-2 grey--text font-weight-medium">ຊຳລະແລ້ວ</span>
              <h3 class="text-h4 font-weight-bold mt-2 info--text">
                {{ getFormatNum(stats.successfulRequests) }} <span class="text-subtitle-1 font-weight-bold">ທຸລະກຳ</span>
              </h3>
            </div>
            <div class="icon-bg info lighten-5">
              <v-icon color="info" size="28">mdi-checkbox-marked-circle-outline</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card class="stat-card-modern stat-card-warning pa-5 elevation-1">
          <div class="d-flex justify-space-between align-center">
            <div>
              <span class="text-subtitle-2 grey--text font-weight-medium">ລໍຖ້າການຊຳລະ</span>
              <h3 class="text-h4 font-weight-bold mt-2 warning--text">
                {{ getFormatNum(stats.pendingRequests) }} <span class="text-subtitle-1 font-weight-bold">ທຸລະກຳ</span>
              </h3>
            </div>
            <div class="icon-bg warning lighten-5">
              <v-icon color="warning" size="28">mdi-clock-check-outline</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filter Dashboard Card -->
    <v-card class="pa-5 rounded-xl elevation-1 mb-6 card-glass border-all">
      <div class="d-flex flex-wrap align-center justify-space-between mb-4 border-bottom pb-3">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2" size="22">mdi-filter-variant</v-icon>
          <span class="text-subtitle-1 font-weight-bold grey--text text--darken-3">ຕົວກັ່ນຕອງຂໍ້ມູນ (Filters)</span>
        </div>
        <!-- Quick Date Range Presets -->
        <div class="d-flex align-center flex-wrap mt-2 mt-sm-0">
          <span class="text-caption grey--text mr-2 font-weight-bold">ຊ່ວງເວລາ:</span>
          <v-btn
            v-for="preset in presets"
            :key="preset.value"
            small
            depressed
            :color="currentPreset === preset.value ? 'primary' : 'grey lighten-3'"
            :class="currentPreset === preset.value ? 'white--text' : 'grey--text text--darken-2'"
            class="rounded-lg px-3 mr-2 mb-1 font-weight-bold text-body-2"
            @click="applyPreset(preset.value)"
          >
            {{ preset.text }}
          </v-btn>
        </div>
      </div>

      <v-row align="center">
        <!-- Date Pickers -->
        <v-col cols="12" md="3" sm="6" class="py-1">
          <v-menu
            ref="menuStartDate"
            v-model="menuStartDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="startDateFormatted"
                class="rounded-lg bg-white"
                label="ຈາກວັນທີ"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                dense
                hide-details
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="startDate" no-title @input="menuStartDate = false; currentPreset = 'custom'" />
          </v-menu>
        </v-col>

        <v-col cols="12" md="3" sm="6" class="py-1">
          <v-menu
            ref="menuEndDate"
            v-model="menuEndDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="endDateFormatted"
                class="rounded-lg bg-white"
                label="ຫາວັນທີ"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                dense
                hide-details
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="endDate" no-title @input="menuEndDate = false; currentPreset = 'custom'" />
          </v-menu>
        </v-col>

        <!-- Status Filter -->
        <v-col cols="12" md="2" sm="6" class="py-1">
          <v-select
            v-model="statusFilter"
            :items="statusOptions"
            item-text="text"
            item-value="value"
            label="ສະຖານະທຸລະກຳ"
            outlined
            dense
            hide-details
            class="rounded-lg bg-white"
            @change="fetchData"
          />
        </v-col>

        <!-- General Search -->
        <v-col cols="12" md="4" sm="6" class="py-1">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="ຄົ້ນຫາ ບິນ ຫຼື ເລກອ້າງອີງທະນາຄານ"
            outlined
            dense
            hide-details
            class="rounded-lg bg-white"
            clearable
          />
        </v-col>
      </v-row>
    </v-card>

    <!-- Main Reconciliation Table -->
    <v-card class="rounded-xl elevation-1 overflow-hidden border-all bg-white">
      <v-data-table
        :headers="headers"
        :items="reconciledItems"
        :search="search"
        :loading="isLoading"
        no-data-text="ບໍ່ມີຂໍ້ມູນທຸລະກຳ QR ໃນໄລຍະເວລານີ້"
        loading-text="ກຳລັງໂຫຼດຂໍ້ມູນ..."
        class="qr-table"
        @click:row="showDetails"
      >
        <!-- Custom formatting for columns -->
        <template #item.createdAt="{ item }">
          <span class="text-body-2 font-weight-medium grey--text text--darken-3">
            {{ formatDateTime(item.createdAt) }}
          </span>
        </template>

        <template #item.billNumber="{ item }">
          <div class="d-flex align-center">
            <span class="font-weight-bold grey--text text--darken-4 select-all mr-1 text-monospace">{{ item.billNumber }}</span>
            <v-btn
              icon
              x-small
              class="copy-btn"
              color="grey darken-1"
              @click.stop="copyText(item.billNumber, 'ເລກທີບິນ')"
            >
              <v-icon x-small>mdi-content-copy</v-icon>
            </v-btn>
          </div>
        </template>

        <template #item.bankCode="{ item }">
          <v-chip
            :color="getBankColor(item.bankCode)"
            text-color="white"
            small
            class="font-weight-black px-3 rounded-lg"
          >
            {{ item.bankCode }}
          </v-chip>
        </template>

        <template #item.txnAmount="{ item }">
          <span :class="item.isPaid ? 'success--text' : 'grey--text text--darken-3'" class="font-weight-black text-monospace text-subtitle-2">
            {{ getFormatNum(item.txnAmount) }} ₭
          </span>
        </template>

        <template #item.isPaid="{ item }">
          <span :class="item.isPaid ? 'status-badge-success' : 'status-badge-pending'">
            <v-icon x-small class="mr-1" :color="item.isPaid ? 'success' : 'warning'">
              {{ item.isPaid ? 'mdi-checkbox-marked-circle' : 'mdi-clock-time-four' }}
            </v-icon>
            {{ item.isPaid ? 'ຊຳລະແລ້ວ' : 'ລໍຖ້າຊຳລະ' }}
          </span>
        </template>

        <template #item.paymentDetails.paidAt="{ item }">
          <span v-if="item.paymentDetails && item.paymentDetails.paidAt" class="text-body-2 font-weight-medium grey--text text--darken-3">
            {{ formatDateTime(item.paymentDetails.paidAt) }}
          </span>
          <span class="grey--text v-else">-</span>
        </template>

        <template #item.paymentDetails.paymentAccountName="{ item }">
          <span class="font-weight-medium text-truncate d-inline-block text--primary" style="max-width: 140px;">
            {{ item.paymentDetails ? item.paymentDetails.paymentAccountName : '-' }}
          </span>
        </template>

        <template #item.actions="{ item }">
          <v-btn icon color="primary" class="grey lighten-4" @click.stop="showDetails(item)">
            <v-icon size="20">mdi-eye-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>

    <!-- Details Dialog - Digital Receipt Style -->
    <v-dialog v-model="detailsDialog" max-width="580px" content-class="rounded-2xl">
      <v-card v-if="selectedItem" class="receipt-card pa-6">
        <!-- Close button and Header -->
        <div class="d-flex justify-space-between align-center mb-4">
          <div class="d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-receipt-text-outline</v-icon>
            <span class="text-h6 font-weight-bold grey--text text--darken-3">ໃບບິນລະອຽດທຸລະກຳ</span>
          </div>
          <v-btn icon class="grey lighten-4" @click="detailsDialog = false">
            <v-icon color="grey darken-2">mdi-close</v-icon>
          </v-btn>
        </div>

        <!-- Receipt Main Indicator -->
        <div class="text-center my-6 receipt-header-amount py-5 rounded-xl">
          <div class="mb-2">
            <v-avatar :color="selectedItem.isPaid ? 'success lighten-5' : 'warning lighten-5'" size="64">
              <v-icon :color="selectedItem.isPaid ? 'success' : 'warning'" size="36">
                {{ selectedItem.isPaid ? 'mdi-check-circle' : 'mdi-clock-outline' }}
              </v-icon>
            </v-avatar>
          </div>
          <div class="text-subtitle-2 grey--text font-weight-medium">ຈຳນວນເງິນຊຳລະ</div>
          <h2 class="text-h3 font-weight-black primary--text mt-1 text-monospace">
            {{ getFormatNum(selectedItem.txnAmount) }} <span class="text-h5 font-weight-bold">₭</span>
          </h2>
          <div class="mt-2">
            <span :class="selectedItem.isPaid ? 'status-badge-success' : 'status-badge-pending'" style="font-size: 0.85rem; padding: 6px 14px;">
              {{ selectedItem.isPaid ? 'ຊຳລະແລ້ວ (PAID)' : 'ລໍຖ້າຊຳລະ (PENDING)' }}
            </span>
          </div>
        </div>

        <div class="receipt-dashed-divider my-4"></div>

        <!-- Receipt Grid Details -->
        <div class="px-2">
          <v-row class="text-body-2">
            <v-col cols="12" class="py-2 d-flex justify-space-between align-center">
              <span class="grey--text font-weight-medium">ເລກທີບິນ (Bill Number)</span>
              <span class="font-weight-bold d-flex align-center select-all text-monospace text-body-1">
                {{ selectedItem.billNumber }}
                <v-btn icon x-small color="primary" class="ml-1" @click="copyText(selectedItem.billNumber, 'ເລກທີບິນ')">
                  <v-icon x-small>mdi-content-copy</v-icon>
                </v-btn>
              </span>
            </v-col>

            <v-col cols="12" class="py-2 d-flex justify-space-between align-center">
              <span class="grey--text font-weight-medium">ທະນາຄານ (Bank)</span>
              <v-chip
                class="font-weight-bold"
                small
                text-color="white"
                :color="getBankColor(selectedItem.bankCode)"
              >
                {{ selectedItem.bankCode === 'LVB' ? 'Lao-Viet Bank (LVB)' : selectedItem.bankCode === 'IB' ? 'Indochina Bank (IB)' : selectedItem.bankCode }}
              </v-chip>
            </v-col>

            <v-col cols="12" class="py-2 d-flex justify-space-between align-center">
              <span class="grey--text font-weight-medium">ວັນທີສ້າງ QR (Created At)</span>
              <span class="font-weight-bold text--primary text-monospace">{{ formatDateTime(selectedItem.createdAt) }}</span>
            </v-col>

            <v-col cols="12" class="py-2 d-flex justify-space-between align-center">
              <span class="grey--text font-weight-medium">ຈຸດຂາຍ / ເຄື່ອງ (Store/Terminal)</span>
              <span class="font-weight-bold text--primary">
                <v-icon small color="grey darken-1" class="mr-1">mdi-storefront-outline</v-icon>{{ selectedItem.storeLabel }} / 
                <v-icon small color="grey darken-1" class="mx-1">mdi-cellphone-link</v-icon>{{ selectedItem.terminalLabel }}
              </span>
            </v-col>

            <v-col v-if="selectedItem.purposeOfTxn" cols="12" class="py-2 d-flex flex-column">
              <span class="grey--text font-weight-medium mb-1">ຈຸດປະສົງ (Purpose of Transaction)</span>
              <span class="font-weight-medium text--primary bg-light pa-3 rounded-lg text-body-2">{{ selectedItem.purposeOfTxn }}</span>
            </v-col>
          </v-row>
        </div>

        <div class="receipt-dashed-divider my-4"></div>

        <!-- Bank Callback Section -->
        <div class="px-2">
          <h4 class="text-subtitle-2 font-weight-bold mb-3 d-flex align-center grey--text text--darken-3">
            <v-icon color="success" size="20" class="mr-2">mdi-shield-check-outline</v-icon>
            ຂໍ້ມູນການຢືນຢັນການຊຳລະຈາກທະນາຄານ
          </h4>

          <div v-if="selectedItem.isPaid && selectedItem.paymentDetails" class="bank-receipt-box pa-4 rounded-xl">
            <v-row class="text-body-2">
              <v-col cols="12" class="py-1.5 d-flex justify-space-between align-center">
                <span class="grey--text font-weight-medium">ເລກອ້າງອີງທະນາຄານ (Txn Ref ID)</span>
                <span class="font-weight-bold success--text d-flex align-center select-all text-monospace">
                  {{ selectedItem.paymentDetails.txnRefId }}
                  <v-btn icon x-small color="success" class="ml-1" @click="copyText(selectedItem.paymentDetails.txnRefId, 'ເລກອ້າງອີງທະນາຄານ')">
                    <v-icon x-small>mdi-content-copy</v-icon>
                  </v-btn>
                </span>
              </v-col>

              <v-col cols="12" class="py-1.5 d-flex justify-space-between align-center">
                <span class="grey--text font-weight-medium">ວັນທີຊຳລະ (Paid At)</span>
                <span class="font-weight-bold text--primary text-monospace">{{ formatDateTime(selectedItem.paymentDetails.paidAt) }}</span>
              </v-col>

              <v-col cols="12" class="py-1.5 d-flex justify-space-between align-center">
                <span class="grey--text font-weight-medium">ຊື່ບັນຊີຜູ້ໂອນ (Account Name)</span>
                <span class="font-weight-bold text--primary">{{ selectedItem.paymentDetails.paymentAccountName || '-' }}</span>
              </v-col>

              <v-col cols="12" class="py-1.5 d-flex justify-space-between align-center">
                <span class="grey--text font-weight-medium">ເລກບັນຊີຜູ້ໂອນ (Account No)</span>
                <span class="font-weight-bold text--primary d-flex align-center select-all text-monospace">
                  {{ selectedItem.paymentDetails.paymentAccount || '-' }}
                  <v-btn
                    v-if="selectedItem.paymentDetails.paymentAccount"
                    icon
                    x-small
                    class="ml-1"
                    color="grey"
                    @click="copyText(selectedItem.paymentDetails.paymentAccount, 'ເລກບັນຊີຜູ້ໂອນ')"
                  >
                    <v-icon x-small>mdi-content-copy</v-icon>
                  </v-btn>
                </span>
              </v-col>

              <v-col v-if="selectedItem.paymentDetails.message" cols="12" class="py-1.5 d-flex flex-column">
                <span class="grey--text font-weight-medium mb-1">ຂໍ້ຄວາມຈາກທະນາຄານ</span>
                <span class="font-weight-medium text-body-2 grey--text text--darken-2 bg-light-success pa-2 rounded-lg">
                  {{ selectedItem.paymentDetails.message }}
                </span>
              </v-col>
            </v-row>
          </div>

          <div v-else class="text-center py-6 rounded-xl border-dashed-grey bg-light-grey">
            <v-icon size="48" color="grey lighten-1" class="mb-2">mdi-alert-circle-outline</v-icon>
            <div class="text-body-2 grey--text font-weight-medium">ລໍຖ້າການຊຳລະເງິນ ຫຼື ບໍ່ມີຂໍ້ມູນການຊຳລະເຂົ້າມາຈາກທະນາຄານ</div>
          </div>
        </div>

        <v-divider class="my-5" />

        <div class="d-flex justify-end">
          <v-btn color="grey lighten-3" depressed height="40" class="px-6 rounded-lg text-body-2 font-weight-bold mr-2 text--primary" @click="detailsDialog = false">
            ປິດໜ້າຕ່າງ
          </v-btn>
          <v-btn color="primary" depressed height="40" class="px-6 rounded-lg text-body-2 font-weight-bold" @click="copyAllReceiptDetails">
            <v-icon left size="18">mdi-content-copy</v-icon> ຄັດລອກທັງໝົດ
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  middleware: 'auths',
  data() {
    return {
      search: '',
      statusFilter: '',
      isLoading: false,
      alertDialog: false,
      alertMessage: null,
      detailsDialog: false,
      selectedItem: null,

      startDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000 - 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .substr(0, 10), // Default to 7 days ago
      endDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

      startDateFormatted: '',
      endDateFormatted: '',
      menuStartDate: false,
      menuEndDate: false,

      // Filter presets
      currentPreset: '7days',
      presets: [
        { text: 'ມື້ນີ້', value: 'today' },
        { text: 'ມື້ວານນີ້', value: 'yesterday' },
        { text: '7 ວັນຫຼ້າສຸດ', value: '7days' },
        { text: 'ເດືອນນີ້', value: 'thismonth' }
      ],

      stats: {
        totalRequests: 0,
        successfulRequests: 0,
        failedRequests: 0,
        pendingRequests: 0,
        totalAmount: 0
      },

      rawRequests: [],
      statusOptions: [
        { text: 'ທັງໝົດ (All)', value: '' },
        { text: 'ຊຳລະແລ້ວ (SUCCESS)', value: 'SUCCESS' },
        { text: 'ລໍຖ້າຊຳລະ (PENDING)', value: 'PENDING' },
        { text: 'ລົ້ມເຫຼວ (FAILED)', value: 'FAILED' }
      ],

      headers: [
        { text: 'ວັນທີສ້າງ', align: 'start', value: 'createdAt', width: '160px' },
        { text: 'ເລກທີບິນ (Bill Number)', align: 'start', value: 'billNumber' },
        { text: 'ທະນາຄານ', align: 'center', value: 'bankCode', width: '110px' },
        { text: 'ຈຳນວນເງິນ', align: 'end', value: 'txnAmount', width: '130px' },
        { text: 'ສະຖານະຊຳລະ', align: 'center', value: 'isPaid', width: '140px' },
        { text: 'ວັນທີຊຳລະ', align: 'start', value: 'paymentDetails.paidAt', width: '160px' },
        { text: 'ຊື່ຜູ້ໂອນ', align: 'start', value: 'paymentDetails.paymentAccountName' },
        { text: 'ລາຍລະອຽດ', align: 'center', value: 'actions', sortable: false, width: '90px' }
      ],

      lastFetchedParams: '' // Simple caching to prevent duplicate triggers
    }
  },
  computed: {
    reconciledItems() {
      return this.rawRequests.map(r => {
        // Find latest successful payment callback if any
        const latestCallback = r.callbacks && r.callbacks.length > 0
          ? r.callbacks.find(c => c.isPaymentSuccess) || r.callbacks[0]
          : null

        // Guess bank code based on callback raw data or billNumber prefix
        let bankCode = 'LVB'
        if (r.callbacks && r.callbacks.length > 0) {
          bankCode = r.callbacks[0].instId === 'LVB' ? 'LVB' : 'IB'
        } else if (r.memberId === 'KOKKOKMOV') {
          bankCode = 'IB'
        }

        return {
          id: r.id,
          billNumber: r.billNumber,
          txnAmount: parseFloat(r.txnAmount) || 0,
          purposeOfTxn: r.purposeOfTxn,
          storeLabel: r.storeLabel,
          terminalLabel: r.terminalLabel,
          requestStatus: r.requestStatus,
          createdAt: r.createdAt,
          bankCode,
          isPaid: latestCallback ? latestCallback.isPaymentSuccess : false,
          paymentDetails: latestCallback ? {
            txnRefId: latestCallback.txnRefId,
            paymentAccountName: latestCallback.paymentAccountName,
            paymentAccount: latestCallback.paymentAccount,
            paidAt: latestCallback.callBackConfirmDate,
            message: latestCallback.message
          } : null
        }
      })
    }
  },
  watch: {
    alertMessage(val) {
      this.alertDialog = val !== null
    },
    startDate(val) {
      this.startDateFormatted = this.formatDate(this.startDate)
      this.fetchData()
    },
    endDate(val) {
      this.endDateFormatted = this.formatDate(this.endDate)
      this.fetchData()
    }
  },
  async created() {
    this.startDateFormatted = this.formatDate(this.startDate)
    this.endDateFormatted = this.formatDate(this.endDate)
    await this.fetchData()
  },
  methods: {
    getFormatNum(val) {
      return new Intl.NumberFormat('en-US').format(val)
    },
    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    formatDateTime(dateTimeStr) {
      if (!dateTimeStr) return ''
      const dateObj = new Date(dateTimeStr)
      if (isNaN(dateObj.getTime())) return dateTimeStr
      
      const pad = (n) => String(n).padStart(2, '0')
      const d = pad(dateObj.getDate())
      const m = pad(dateObj.getMonth() + 1)
      const y = dateObj.getFullYear()
      const hr = pad(dateObj.getHours())
      const min = pad(dateObj.getMinutes())
      const sec = pad(dateObj.getSeconds())
      return `${d}/${m}/${y} ${hr}:${min}:${sec}`
    },
    getBankColor(bankCode) {
      if (bankCode === 'LVB') return '#C62828' // Lao-Viet Bank Crimson Red
      if (bankCode === 'IB') return '#1565C0'  // Indochina Bank Royal Blue
      return '#5A6A85'
    },
    applyPreset(presetValue) {
      this.currentPreset = presetValue
      const now = new Date()
      let start = new Date()
      let end = new Date()
      
      const formatLocalISO = (date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
      }
      
      if (presetValue === 'today') {
        start = new Date()
        end = new Date()
      } else if (presetValue === 'yesterday') {
        start.setDate(now.getDate() - 1)
        end.setDate(now.getDate() - 1)
      } else if (presetValue === '7days') {
        start.setDate(now.getDate() - 7)
        end = new Date()
      } else if (presetValue === 'thismonth') {
        start = new Date(now.getFullYear(), now.getMonth(), 1)
        end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      }
      
      this.startDate = formatLocalISO(start)
      this.endDate = formatLocalISO(end)
    },
    copyText(text, label = 'ຂໍ້ມູນ') {
      if (!text) return
      navigator.clipboard.writeText(text).then(() => {
        if (this.$toast) {
          this.$toast.success(`ຄັດລອກ ${label} ສຳເລັດແລ້ວ!`)
        }
      }).catch(err => {
        // Fallback for non-secure contexts or older webviews
        const el = document.createElement('textarea')
        el.value = text
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        if (this.$toast) {
          this.$toast.success(`ຄັດລອກ ${label} ສຳເລັດແລ້ວ!`)
        }
        if (err) {
          // Handled to satisfy node/handle-callback-err
        }
      })
    },
    copyAllReceiptDetails() {
      if (!this.selectedItem) return
      const item = this.selectedItem
      let text = `=== ໃບບິນລະອຽດທຸລະກຳ (Receipt Details) ===\n`
      text += `ເລກທີບິນ (Bill No): ${item.billNumber}\n`
      text += `ຈຳນວນເງິນ (Amount): ${this.getFormatNum(item.txnAmount)} LAK\n`
      text += `ທະນາຄານ (Bank): ${item.bankCode}\n`
      text += `ວັນທີສ້າງ (Created At): ${this.formatDateTime(item.createdAt)}\n`
      text += `ສະຖານະ (Status): ${item.isPaid ? 'ຊຳລະແລ້ວ (PAID)' : 'ລໍຖ້າຊຳລະ (PENDING)'}\n`
      if (item.isPaid && item.paymentDetails) {
        text += `=== ຂໍ້ມູນການຊຳລະຈາກທະນາຄານ ===\n`
        text += `ເລກອ້າງອີງທະນາຄານ (Txn Ref ID): ${item.paymentDetails.txnRefId}\n`
        text += `ວັນທີຊຳລະ (Paid At): ${this.formatDateTime(item.paymentDetails.paidAt)}\n`
        text += `ຊື່ບັນຊີຜູ້ໂອນ (Sender Account): ${item.paymentDetails.paymentAccountName || '-'}\n`
        text += `ເລກບັນຊີຜູ້ໂອນ (Sender Acc No): ${item.paymentDetails.paymentAccount || '-'}\n`
      }
      this.copyText(text, 'ລາຍລະອຽດທຸລະກຳທັງໝົດ')
    },
    async fetchData() {
      // Prevent redundant fetches
      const params = `${this.startDate}_${this.endDate}_${this.statusFilter}`
      if (this.lastFetchedParams === params && this.rawRequests.length > 0) return
      this.lastFetchedParams = params

      this.isLoading = true
      try {
        // 1. Fetch filtered list
        const listUrl = `api/qr/requests?startDate=${this.startDate}&endDate=${this.endDate}&status=${this.statusFilter}`
        const listRes = await this.$axios.get(listUrl)
        if (listRes.data && listRes.data.success) {
          this.rawRequests = listRes.data.data
        }

        // 2. Fetch stats
        const statsUrl = `api/qr/stats?startDate=${this.startDate}&endDate=${this.endDate}`
        const statsRes = await this.$axios.get(statsUrl)
        if (statsRes.data && statsRes.data.success) {
          this.stats = statsRes.data.data
        }
      } catch (err) {
        if (err) {
          // Handled to satisfy node/handle-callback-err
        }
        this.alertMessage = 'ບໍ່ສາມາດເຊື່ອມຕໍ່ຂໍ້ມູນລາຍງານກະທົບຍອດ QR ໄດ້'
      } finally {
        this.isLoading = false
      }
    },
    showDetails(item) {
      this.selectedItem = item
      this.detailsDialog = true
    },
    exportToExcel() {
      if (!this.$xlsx) {
        this.alertMessage = 'ປລັກອິນ XLSX ບໍ່ໄດ້ຖືກຕິດຕັ້ງ'
        return
      }

      // Map the reconciledItems into export structure
      const exportData = this.reconciledItems.map(item => {
        return {
          'ວັນທີສ້າງ (Created At)': this.formatDateTime(item.createdAt),
          'ເລກທີບິນ (Bill Number)': item.billNumber,
          'ທະນາຄານ (Bank)': item.bankCode,
          'ຈຳນວນເງິນ (Amount)': item.txnAmount,
          'ສະຖານະ (Status)': item.isPaid ? 'ຊຳລະແລ້ວ (PAID)' : 'ລໍຖ້າຊຳລະ (PENDING)',
          'ເລກອ້າງອີງທະນາຄານ (Txn Ref ID)': item.paymentDetails ? item.paymentDetails.txnRefId : '-',
          'ວັນທີຊຳລະ (Paid At)': item.paymentDetails ? this.formatDateTime(item.paymentDetails.paidAt) : '-',
          'ຊື່ບັນຊີຜູ້ໂອນ (Account Name)': item.paymentDetails ? item.paymentDetails.paymentAccountName : '-',
          'ເລກບັນຊີຜູ້ໂອນ (Account No)': item.paymentDetails ? item.paymentDetails.paymentAccount : '-',
          'ຂໍ້ຄວາມ (Message)': item.paymentDetails ? item.paymentDetails.message : '-'
        }
      })

      const ws = this.$xlsx.utils.json_to_sheet(exportData)
      const wb = this.$xlsx.utils.book_new()
      this.$xlsx.utils.book_append_sheet(wb, ws, 'QR Reconciliation')
      this.$xlsx.writeFile(wb, `QR_Reconciliation_Report_${this.startDate}_to_${this.endDate}.xlsx`)
    }
  }
}
</script>

<style scoped>
.qr-reconciliation-container {
  font-family: 'Noto Sans Lao', 'Roboto', sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
}

/* Modern Card Stats Layout */
.stat-card-modern {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: white;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

.stat-card-modern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

.stat-card-primary::before { background: linear-gradient(90deg, #01532B, #337555); }
.stat-card-success::before { background: linear-gradient(90deg, #4caf50, #81c784); }
.stat-card-info::before { background: linear-gradient(90deg, #0288d1, #29b6f6); }
.stat-card-warning::before { background: linear-gradient(90deg, #ffa000, #ffb74d); }

.stat-card-modern:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 0.08) !important;
}

.icon-bg {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.stat-card-modern:hover .icon-bg {
  transform: scale(1.1) rotate(4deg);
}

/* Glassmorphism Card Filters */
.card-glass {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
}

.border-all {
  border: 1px solid #e2e8f0;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0;
}

/* Modern Badges */
.status-badge-success {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 0.775rem;
  font-weight: 700;
  border-radius: 8px;
  background-color: rgba(76, 175, 80, 0.12);
  color: #2e7d32;
}

.status-badge-pending {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 0.775rem;
  font-weight: 700;
  border-radius: 8px;
  background-color: rgba(255, 152, 0, 0.12);
  color: #b26a00;
}

/* Data Table Overrides */
.qr-table ::v-deep th {
  background-color: #f8fafc !important;
  color: #475569 !important;
  font-weight: 700 !important;
  font-size: 0.825rem !important;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border-bottom: 2px solid #e2e8f0 !important;
  padding: 14px 16px !important;
}

.qr-table ::v-deep td {
  font-size: 0.85rem !important;
  border-bottom: 1px solid #f1f5f9 !important;
  padding: 12px 16px !important;
}

.qr-table ::v-deep tr {
  cursor: pointer;
  transition: all 0.2s ease;
}

.qr-table ::v-deep tr:hover {
  background-color: #f8fafc !important;
}

.text-monospace {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace !important;
  letter-spacing: -0.02em;
}

/* Digital Receipt Details Styles */
.receipt-card {
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
}

.receipt-header-amount {
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
}

.receipt-dashed-divider {
  border-top: 2px dashed #cbd5e1;
  height: 0;
  margin: 16px 0;
}

.bank-receipt-box {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
}

.bg-light {
  background-color: #f1f5f9;
}

.bg-light-success {
  background-color: rgba(76, 175, 80, 0.05);
  border: 1px solid rgba(76, 175, 80, 0.15);
}

.bg-light-grey {
  background-color: #f8fafc;
}

.border-dashed-grey {
  border: 2px dashed #cbd5e1;
}

.select-all {
  user-select: all;
}

.copy-btn {
  opacity: 0.3;
  transition: opacity 0.2s;
}

tr:hover .copy-btn {
  opacity: 1;
}
</style>
