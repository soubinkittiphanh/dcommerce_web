<template>
  <div class="parking-dashboard">
    <!-- Header -->
    <div class="dashboard-header d-flex flex-wrap justify-space-between align-center mb-4">
      <div>
        <h1 class="page-title d-flex align-center">
          <v-icon large color="primary" class="mr-2">mdi-car-parking</v-icon>
          <span>ລະບົບຄຸ້ມຄອງບ່ອນຈອດລົດ</span>
        </h1>
        <p class="page-subtitle grey--text text--darken-1 mb-0">
          Car Parking Management Dashboard (ສະຖິຕິ ແລະ ລາຍການລົດຈອດປັດຈຸບັນ)
        </p>
      </div>

      <div class="action-buttons d-flex align-center">
        <v-btn color="success" class="mr-2 font-weight-bold" @click="openEntryDialog">
          <v-icon left>mdi-car-arrow-right</v-icon>
          ລົດເຂົ້າ (Check-In)
        </v-btn>
        <v-btn color="error" class="mr-2 font-weight-bold" @click="openExitDialog">
          <v-icon left>mdi-car-arrow-left</v-icon>
          ລົດອອກ & ຄິດໄລ່ເງິນ (Check-Out)
        </v-btn>
        <v-btn icon color="primary" :loading="loading" @click="loadDashboardData">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- KPI Metric Cards (Lao Language) -->
    <v-row dense class="mb-4">
      <!-- 1. Total Slots -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="kpi-card elevation-2">
          <v-card-text class="d-flex align-center justify-space-between py-3">
            <div>
              <div class="kpi-label">ບ່ອນຈອດທັງໝົດ (Total Slots)</div>
              <div class="kpi-value text-primary font-weight-black">
                {{ stats.totalSlots || 0 }}
              </div>
              <div class="text-caption grey--text">
                ລົດໃຫຍ່: {{ stats.byType?.car?.total || 0 }} | ລົດຈັກ: {{ stats.byType?.motorbike?.total || 0 }}
              </div>
            </div>
            <v-avatar color="blue lighten-5" size="52">
              <v-icon color="blue darken-2" size="30">mdi-parking</v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 2. Occupied Slots -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="kpi-card elevation-2">
          <v-card-text class="d-flex align-center justify-space-between py-3">
            <div>
              <div class="kpi-label">ກຳລັງຈອດ (Occupied)</div>
              <div class="kpi-value text-error font-weight-black red--text">
                {{ stats.occupiedSlots || 0 }}
              </div>
              <div class="text-caption grey--text">
                ອັດຕາຄອງບ່ອນ: {{ stats.occupancyRate || 0 }}%
              </div>
            </div>
            <v-avatar color="red lighten-5" size="52">
              <v-icon color="red darken-2" size="30">mdi-car-multiple</v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 3. Available Slots -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="kpi-card elevation-2">
          <v-card-text class="d-flex align-center justify-space-between py-3">
            <div>
              <div class="kpi-label">ບ່ອນວ່າງ (Available)</div>
              <div class="kpi-value text-success font-weight-black green--text text--darken-2">
                {{ stats.availableSlots || 0 }}
              </div>
              <div class="text-caption grey--text">
                ພ້ອມໃຫ້ບໍລິການ (Ready)
              </div>
            </div>
            <v-avatar color="green lighten-5" size="52">
              <v-icon color="green darken-2" size="30">mdi-check-circle-outline</v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- 4. Today's Revenue -->
      <v-col cols="12" sm="6" md="3">
        <v-card class="kpi-card elevation-2">
          <v-card-text class="d-flex align-center justify-space-between py-3">
            <div>
              <div class="kpi-label">ລາຍຮັບມື້ນີ້ (Today's Revenue)</div>
              <div class="kpi-value text-purple font-weight-black purple--text text--darken-2">
                {{ formatMoney(stats.todayRevenue) }} ₭
              </div>
              <div class="text-caption grey--text">
                ອອກມື້ນີ້: {{ stats.todayExitsCount || 0 }} ຄັນ
              </div>
            </div>
            <v-avatar color="purple lighten-5" size="52">
              <v-icon color="purple darken-2" size="30">mdi-cash-register</v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Currently Parked Vehicles Table -->
    <v-card class="elevation-2 parked-table-card">
      <v-card-title class="d-flex justify-space-between align-center py-3 px-4 grey lighten-5">
        <div class="d-flex align-center">
          <v-icon color="primary" class="mr-2">mdi-car-clock</v-icon>
          <span class="font-weight-bold" style="font-size: 16px;">
            ລາຍການລົດທີ່ກຳລັງຈອດຢູ່ປັດຈຸບັນ (Currently Parked Vehicles)
          </span>
          <v-chip small color="primary" outlined class="ml-3 font-weight-bold">
            {{ parkedVehicles.length }} ຄັນ
          </v-chip>
        </div>

        <div style="max-width: 280px;" class="d-flex align-center">
          <v-text-field
            v-model="searchPlate"
            dense
            outlined
            hide-details
            placeholder="ຄົ້ນຫາທະບຽນລົດ / ປີ້..."
            prepend-inner-icon="mdi-magnify"
            clearable
          ></v-text-field>
        </div>
      </v-card-title>

      <v-divider></v-divider>

      <v-data-table
        :headers="tableHeaders"
        :items="filteredParkedVehicles"
        :loading="loading"
        :items-per-page="10"
        class="elevation-0"
        no-data-text="ບໍ່ມີລົດກຳລັງຈອດໃນຕອນນີ້ (No parked vehicles)"
      >
        <!-- Plate Number Column -->
        <template #item.plateNumber="{ item }">
          <div class="d-flex align-center py-1">
            <v-avatar size="32" color="grey lighten-4" class="mr-2">
              <v-icon small :color="item.vehicleType === 'motorbike' ? 'orange' : 'primary'">
                {{ item.vehicleType === 'motorbike' ? 'mdi-motorbike' : 'mdi-car' }}
              </v-icon>
            </v-avatar>
            <div>
              <div class="font-weight-black plate-tag">{{ item.plateNumber }}</div>
              <div class="text-caption grey--text text-uppercase">{{ item.vehicleType }}</div>
            </div>
          </div>
        </template>

        <!-- Slot Column -->
        <template #item.slot="{ item }">
          <v-chip small color="blue lighten-5" text-color="blue darken-3" class="font-weight-bold">
            {{ item.slot?.slotNumber || '-' }} ({{ item.zone?.name || item.zone?.code || '-' }})
          </v-chip>
        </template>

        <!-- Entry Time -->
        <template #item.entryTime="{ item }">
          <div>{{ formatDateTime(item.entryTime) }}</div>
        </template>

        <!-- Duration Column with live styling -->
        <template #item.duration="{ item }">
          <v-chip small color="amber lighten-5" text-color="amber darken-4" class="font-weight-bold">
            <v-icon left x-small>mdi-clock-outline</v-icon>
            {{ calculateLiveDuration(item.entryTime) }}
          </v-chip>
        </template>

        <!-- Pass / Ticket Type -->
        <template #item.ticketType="{ item }">
          <v-chip v-if="item.isMonthlyPass" x-small color="purple" dark class="font-weight-bold">
            ປີ້ລາຍເດືອນ (Monthly Pass)
          </v-chip>
          <v-chip v-else x-small color="grey lighten-2">
            ປີ້ທຳມະດາ (Standard)
          </v-chip>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <div class="d-flex align-center">
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn icon small color="primary" v-bind="attrs" v-on="on" @click="showReceipt(item)">
                  <v-icon small>mdi-printer</v-icon>
                </v-btn>
              </template>
              <span>ພິມບັດເຂົ້າ (Print Entry Slip)</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn
                  small
                  color="error"
                  class="ml-2 font-weight-bold"
                  v-bind="attrs"
                  v-on="on"
                  @click="openCheckoutForTicket(item)"
                >
                  <v-icon left x-small>mdi-exit-run</v-icon>
                  ອອກລົດ (Exit)
                </v-btn>
              </template>
              <span>ຄິດໄລ່ເງິນ ແລະ ປົດລັອກ (Checkout)</span>
            </v-tooltip>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- Modal 1: Quick Vehicle Entry Dialog -->
    <v-dialog v-model="entryDialog" max-width="500" persistent>
      <v-card>
        <v-card-title class="py-3 px-4 primary white--text d-flex justify-space-between align-center">
          <span class="font-weight-bold subtitle-1">
            <v-icon left dark>mdi-car-arrow-right</v-icon>
            ລົງທະບຽນລົດເຂົ້າຈອດ (Vehicle Entry)
          </span>
          <v-btn icon dark small @click="entryDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <v-form ref="entryForm" v-model="entryFormValid">
            <!-- Plate Number -->
            <v-text-field
              v-model="entryForm.plateNumber"
              label="ເລກທະບຽນລົດ (License Plate)*"
              placeholder="ຕົວຢ່າງ: ກກ 1234 ຫຼື 9999"
              outlined
              dense
              autofocus
              :rules="[v => !!v || 'ກະລຸນາປ້ອນເລກທະບຽນລົດ']"
              prepend-inner-icon="mdi-numeric"
              class="mb-2"
            ></v-text-field>

            <!-- Vehicle Type -->
            <v-select
              v-model="entryForm.vehicleType"
              :items="vehicleTypes"
              label="ປະເພດຍານພາຫະນະ (Vehicle Type)*"
              outlined
              dense
              prepend-inner-icon="mdi-car"
              item-text="label"
              item-value="value"
              class="mb-2"
            ></v-select>

            <!-- Zone Selector -->
            <v-select
              v-model="entryForm.zoneId"
              :items="zones"
              item-text="name"
              item-value="id"
              label="ໂຊນຈອດ (Zone - ປ່ອຍຫວ່າງເພື່ອເລືອກອັດຕະໂນມັດ)"
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-map-marker"
              class="mb-2"
            ></v-select>

            <!-- Driver Info (Optional) -->
            <v-row dense>
              <v-col cols="6">
                <v-text-field
                  v-model="entryForm.driverName"
                  label="ຊື່ຜູ້ຂັບຂີ່ (Driver Name)"
                  outlined
                  dense
                  prepend-inner-icon="mdi-account"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="entryForm.driverPhone"
                  label="ເບີໂທ (Phone)"
                  outlined
                  dense
                  prepend-inner-icon="mdi-phone"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="px-4 py-3 justify-space-between">
          <v-btn text @click="entryDialog = false">ຍົກເລີກ (Cancel)</v-btn>
          <v-btn color="success" :loading="submittingEntry" @click="submitVehicleEntry">
            <v-icon left>mdi-check</v-icon>
            ຢືນຢັນລົດເຂົ້າ (Confirm Entry)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Modal 2: Quick Vehicle Exit & Payment Dialog -->
    <v-dialog v-model="exitDialog" max-width="520" persistent>
      <v-card>
        <v-card-title class="py-3 px-4 error white--text d-flex justify-space-between align-center">
          <span class="font-weight-bold subtitle-1">
            <v-icon left dark>mdi-car-arrow-left</v-icon>
            ຄິດໄລ່ເງິນ & ລົດອອກ (Checkout Payment)
          </span>
          <v-btn icon dark small @click="exitDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-4">
          <!-- Step A: Search Ticket / Plate -->
          <div v-if="!checkoutData" class="search-step">
            <v-text-field
              v-model="searchExitQuery"
              label="ປ້ອນເລກທະບຽນລົດ ຫຼື ສະແກນບາໂຄດປີ້*"
              placeholder="ຕົວຢ່າງ: ກກ 1234, TKT-..., PK-..."
              outlined
              dense
              prepend-inner-icon="mdi-barcode-scan"
              append-outer-icon="mdi-magnify"
              :loading="calculatingFee"
              class="mb-3"
              @click:append-outer="fetchExitFee"
              @keyup.enter="fetchExitFee"
            ></v-text-field>

            <v-checkbox
              v-model="isLostTicketToggle"
              label="ລູກຄ້າເຮັດປີ້ເສຍ (Lost Ticket - ປັບໃໝ)"
              color="error"
              dense
              hide-details
            ></v-checkbox>
          </div>

          <!-- Step B: Fee Summary & Payment Execution -->
          <div v-else class="checkout-summary">
            <!-- Summary Card -->
            <v-card outlined class="pa-3 mb-3 grey lighten-5">
              <div class="d-flex justify-space-between align-center mb-1">
                <span class="font-weight-bold plate-tag" style="font-size: 15px;">
                  {{ checkoutData.ticket?.plateNumber }}
                </span>
                <v-chip x-small color="blue" dark class="text-uppercase font-weight-bold">
                  {{ checkoutData.ticket?.slot?.slotNumber }} ({{ checkoutData.ticket?.slot?.slotType }})
                </v-chip>
              </div>

              <div class="text-caption grey--text text--darken-2">
                <div>ເວລາເຂົ້າ: {{ formatDateTime(checkoutData.ticket?.entryTime) }}</div>
                <div>ເວລາອອກ: {{ formatDateTime(checkoutData.exitTime) }}</div>
                <div class="font-weight-bold blue--text text--darken-3">
                  ໄລຍະເວລາ: {{ checkoutData.feeBreakdown?.durationMinutes }} ນາທີ ({{ checkoutData.feeBreakdown?.totalHours }} ຊົ່ວໂມງ)
                </div>
                <div v-if="checkoutData.feeBreakdown?.isMonthlyPass" class="purple--text font-weight-bold">
                  🌟 ລູກຄ້າປີ້ລາຍເດືອນ (Monthly Pass Active) - ຟຣີຄ່າຈອດ!
                </div>
                <div v-else-if="checkoutData.feeBreakdown?.isGracePeriod" class="green--text font-weight-bold">
                  ⏱️ ຢູ່ໃນຊ່ວງ Grace Period - ບໍ່ເສຍຄ່າທຳນຽມ!
                </div>
              </div>
            </v-card>

            <!-- Total Amount Big Banner -->
            <div class="total-fee-banner text-center py-3 mb-3 green lighten-5 rounded">
              <div class="text-caption grey--text text--darken-2">ຍອດເງິນທີ່ຕ້ອງຊຳລະ (Total Fee)</div>
              <div class="display-1 font-weight-black green--text text--darken-3">
                {{ formatMoney(checkoutData.feeBreakdown?.totalFee) }} LAK
              </div>
            </div>

            <!-- Payment Method Selector -->
            <v-select
              v-model="paymentMethod"
              :items="paymentMethods"
              label="ຮູບແບບການຊຳລະ (Payment Method)*"
              outlined
              dense
              prepend-inner-icon="mdi-credit-card-outline"
              class="mb-2"
            ></v-select>

            <v-text-field
              v-if="paymentMethod !== 'CASH'"
              v-model="paymentRefNo"
              label="ເລກອ້າງອີງ / Ref No (BCEL One / Transfer)"
              outlined
              dense
              placeholder="Ref number from bank app"
            ></v-text-field>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="px-4 py-3 justify-space-between">
          <v-btn text @click="exitDialog = false">ຍົກເລີກ (Cancel)</v-btn>
          <v-btn
            v-if="!checkoutData"
            color="primary"
            :loading="calculatingFee"
            @click="fetchExitFee"
          >
            ຄິດໄລ່ຄ່າຈອດ (Calculate)
          </v-btn>
          <v-btn
            v-else
            color="success"
            :loading="submittingExit"
            @click="submitCheckoutPayment"
          >
            <v-icon left>mdi-cash-check</v-icon>
            ຢືນຢັນຊຳລະ & ເປີດໄມ້ກັ້ນ (Pay & Exit)
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Receipt Preview & Thermal Print Dialog -->
    <parking-receipt-dialog
      :visible.sync="receiptDialogVisible"
      :ticket-data="selectedReceiptTicket"
      :payment-data="selectedReceiptPayment"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ParkingReceiptDialog from '@/components/parking/ParkingReceiptDialog.vue';

export default {
  name: 'ParkingDashboard',
  components: {
    ParkingReceiptDialog
  },
  layout: 'admin',
  middleware: 'auths',
  data() {
    return {
      searchPlate: '',
      // Entry Dialog
      entryDialog: false,
      entryFormValid: false,
      submittingEntry: false,
      entryForm: {
        plateNumber: '',
        vehicleType: 'car',
        zoneId: null,
        driverName: '',
        driverPhone: ''
      },
      // Exit Dialog
      exitDialog: false,
      searchExitQuery: '',
      isLostTicketToggle: false,
      calculatingFee: false,
      checkoutData: null,
      paymentMethod: 'CASH',
      paymentRefNo: '',
      submittingExit: false,
      // Receipt Dialog
      receiptDialogVisible: false,
      selectedReceiptTicket: {},
      selectedReceiptPayment: null,
      // Selection options
      vehicleTypes: [
        { label: 'ລົດໃຫຍ່ (Car)', value: 'car' },
        { label: 'ລົດຈັກ (Motorbike)', value: 'motorbike' },
        { label: 'ລົດບັນທຸກ (Truck)', value: 'truck' },
        { label: 'ລົດ VIP', value: 'vip' }
      ],
      paymentMethods: [
        { text: 'ເງິນສົດ (Cash)', value: 'CASH' },
        { text: 'BCEL One / QR Code', value: 'QR' },
        { text: 'ໂອນຜ່ານທະນາຄານ (Transfer)', value: 'TRANSFER' },
        { text: 'ບັດເຄຣດິດ (Card)', value: 'CARD' }
      ],
      tableHeaders: [
        { text: 'ທະບຽນລົດ (Plate No)', value: 'plateNumber' },
        { text: 'ຊ່ອງຈອດ & ໂຊນ (Slot / Zone)', value: 'slot' },
        { text: 'ເວລາເຂົ້າ (Entry Time)', value: 'entryTime' },
        { text: 'ໄລຍະເວລາຈອດ (Duration)', value: 'duration' },
        { text: 'ປະເພດປີ້ (Type)', value: 'ticketType' },
        { text: 'ຈັດການ (Actions)', value: 'actions', sortable: false, align: 'right' }
      ]
    };
  },
  computed: {
    ...mapState('parking', {
      stats: state => state.dashboardStats || {},
      parkedVehicles: state => state.parkedVehicles || [],
      zones: state => state.zones || [],
      loading: state => state.loading
    }),
    filteredParkedVehicles() {
      if (!this.searchPlate) return this.parkedVehicles;
      const q = this.searchPlate.trim().toUpperCase();
      return this.parkedVehicles.filter(item => {
        const plate = (item.plateNumber || '').toUpperCase();
        const ticketNum = (item.ticketNumber || '').toUpperCase();
        const slot = (item.slot?.slotNumber || '').toUpperCase();
        return plate.includes(q) || ticketNum.includes(q) || slot.includes(q);
      });
    }
  },
  mounted() {
    this.loadDashboardData();
  },
  methods: {
    ...mapActions('parking', [
      'fetchDashboardStats',
      'fetchParkedVehicles',
      'fetchZones',
      'createEntry',
      'calculateFee',
      'processExit'
    ]),

    async loadDashboardData() {
      await Promise.all([
        this.fetchDashboardStats(),
        this.fetchParkedVehicles(),
        this.fetchZones()
      ]);
    },

    formatMoney(val) {
      return Number(val || 0).toLocaleString();
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

    calculateLiveDuration(entryTime) {
      if (!entryTime) return '-';
      const diffMs = new Date() - new Date(entryTime);
      const mins = Math.floor(diffMs / (1000 * 60));
      const hrs = Math.floor(mins / 60);
      const remainMins = mins % 60;
      if (hrs > 0) return `${hrs} ຊມ ${remainMins} ນາທີ`;
      return `${mins} ນາທີ`;
    },

    openEntryDialog() {
      this.entryForm = {
        plateNumber: '',
        vehicleType: 'car',
        zoneId: null,
        driverName: '',
        driverPhone: ''
      };
      this.entryDialog = true;
    },

    async submitVehicleEntry() {
      if (!this.entryForm.plateNumber) {
        this.$toast.warning('ກະລຸນາປ້ອນເລກທະບຽນລົດ (Please enter plate number)');
        return;
      }

      this.submittingEntry = true;
      try {
        const res = await this.createEntry(this.entryForm);
        if (res.success) {
          this.$toast.success(res.message || 'ບັນທຶກລົດເຂົ້າສຳເລັດ!');
          this.entryDialog = false;
          await this.loadDashboardData();

          // Show printable ticket dialog
          this.selectedReceiptTicket = res.data;
          this.selectedReceiptPayment = null;
          this.receiptDialogVisible = true;
        } else {
          this.$toast.error(res.error || 'ບໍ່ສາມາດບັນທຶກລົດເຂົ້າໄດ້');
        }
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.submittingEntry = false;
      }
    },

    openExitDialog() {
      this.searchExitQuery = '';
      this.checkoutData = null;
      this.isLostTicketToggle = false;
      this.exitDialog = true;
    },

    openCheckoutForTicket(ticket) {
      this.searchExitQuery = ticket.ticketNumber || ticket.plateNumber;
      this.isLostTicketToggle = ticket.isLostTicket || false;
      this.exitDialog = true;
      this.fetchExitFee();
    },

    async fetchExitFee() {
      if (!this.searchExitQuery) {
        this.$toast.warning('ກະລຸນາປ້ອນທະບຽນລົດ ຫຼື ສະແກນບາໂຄດ');
        return;
      }

      this.calculatingFee = true;
      try {
        const res = await this.calculateFee({
          plateNumber: this.searchExitQuery,
          ticketNumber: this.searchExitQuery,
          barcode: this.searchExitQuery,
          isLostTicket: this.isLostTicketToggle
        });

        if (res.success) {
          this.checkoutData = res.data;
        } else {
          this.$toast.error(res.error || 'ບໍ່ພົບປີ້ຈອດລົດທີ່ກຳລັງເປີດຢູ່');
        }
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.calculatingFee = false;
      }
    },

    async submitCheckoutPayment() {
      if (!this.checkoutData || !this.checkoutData.ticket) return;

      this.submittingExit = true;
      try {
        const res = await this.processExit({
          ticketId: this.checkoutData.ticket.id,
          paymentMethod: this.paymentMethod,
          referenceNo: this.paymentRefNo,
          isLostTicket: this.isLostTicketToggle
        });

        if (res.success) {
          this.$toast.success(res.message || 'ຊຳລະເງິນສຳເລັດ!');
          this.exitDialog = false;
          await this.loadDashboardData();

          // Show printable exit receipt
          this.selectedReceiptTicket = res.data.ticket;
          this.selectedReceiptPayment = res.data.payment;
          this.receiptDialogVisible = true;
        } else {
          this.$toast.error(res.error || 'ເກີດຂໍ້ຜິດພາດໃນການຊຳລະ');
        }
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.submittingExit = false;
      }
    },

    showReceipt(ticket) {
      this.selectedReceiptTicket = ticket;
      this.selectedReceiptPayment = ticket.payments && ticket.payments.length ? ticket.payments[0] : null;
      this.receiptDialogVisible = true;
    }
  }
};
</script>

<style scoped>
.parking-dashboard {
  padding: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
}
.page-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
}
.kpi-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.kpi-label {
  font-size: 13px;
  color: #64748b;
  font-weight: 600;
}
.kpi-value {
  font-size: 26px;
  line-height: 1.2;
}
.parked-table-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.plate-tag {
  background: #f1f5f9;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  font-size: 13px;
  letter-spacing: 0.5px;
}
.total-fee-banner {
  border: 1.5px dashed #16a34a;
}
</style>
