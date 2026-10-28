<template>
  <div class="parking-reports-page">
    <!-- Header -->
    <div class="d-flex flex-wrap justify-space-between align-center mb-4">
      <div>
        <h1 class="page-title d-flex align-center">
          <v-icon large color="primary" class="mr-2">mdi-chart-line</v-icon>
          <span>ລາຍງານລາຍຮັບ ແລະ ສະຖິຕິບ່ອນຈອດລົດ</span>
        </h1>
        <p class="page-subtitle grey--text text--darken-1 mb-0">
          Car Parking Revenue & Peak Hours Traffic Reports (ລາຍງານລາຍຮັບ ແລະ ຊົ່ວໂມງລົດແໜ້ນ)
        </p>
      </div>

      <div class="action-buttons d-flex align-center">
        <v-btn color="primary" class="font-weight-bold" @click="exportToExcel">
          <v-icon left>mdi-file-excel</v-icon>
          Export Excel
        </v-btn>
        <v-btn icon color="primary" class="ml-2" :loading="loading" @click="loadReports">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Date Range Filter -->
    <v-card class="elevation-1 pa-4 mb-4 filter-card">
      <v-row dense align="center">
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="filters.startDate"
            label="ແຕ່ວັນທີ (Start Date)"
            type="date"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="filters.endDate"
            label="ຫາວັນທີ (End Date)"
            type="date"
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex justify-end">
          <v-btn color="primary" class="font-weight-bold" :loading="loading" @click="loadReports">
            <v-icon left small>mdi-filter-variant</v-icon>
            ດຶງລາຍງານ (Load Report)
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- KPI Summary Row -->
    <v-row dense class="mb-4">
      <v-col cols="12" sm="4">
        <v-card class="elevation-2 kpi-card">
          <v-card-text class="pa-3">
            <div class="text-caption grey--text">ລວມລາຍຮັບທັງໝົດ (Total Revenue)</div>
            <div class="kpi-amount green--text text--darken-3 font-weight-black">
              {{ formatMoney(revenueReport.grandTotal) }} LAK
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="elevation-2 kpi-card">
          <v-card-text class="pa-3">
            <div class="text-caption grey--text">ຈຳນວນທຸລະກຳ (Total Transactions)</div>
            <div class="kpi-amount primary--text font-weight-black">
              {{ totalTicketsCount }} ຄັນ
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4">
        <v-card class="elevation-2 kpi-card">
          <v-card-text class="pa-3">
            <div class="text-caption grey--text">ລາຍຮັບສະເລ່ຍຕໍ່ຄັນ (Average / Ticket)</div>
            <div class="kpi-amount purple--text text--darken-2 font-weight-black">
              {{ formatMoney(averageRevenuePerVehicle) }} LAK
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tabs: Daily Revenue vs Peak Hours -->
    <v-card class="elevation-2 report-table-card">
      <v-tabs v-model="activeTab" background-color="grey lighten-4" color="primary">
        <v-tab class="font-weight-bold">
          <v-icon left small>mdi-table</v-icon>
          ຕາຕະລາງລາຍຮັບຕາມວັນ (Daily Revenue)
        </v-tab>
        <v-tab class="font-weight-bold">
          <v-icon left small>mdi-clock-fast</v-icon>
          ສະຖິຕິຊົ່ວໂມງລົດແໜ້ນ (Peak Hours Traffic)
        </v-tab>
      </v-tabs>

      <v-divider></v-divider>

      <v-tabs-items v-model="activeTab">
        <!-- Tab 1: Daily Revenue -->
        <v-tab-item class="pa-4">
          <v-data-table
            :headers="revenueHeaders"
            :items="revenueReport.records || []"
            :loading="loading"
            class="elevation-0"
            no-data-text="ບໍ່ມີຂໍ້ມູນລາຍຮັບໃນຊ່ວງເວລານີ້"
          >
            <!-- Date -->
            <template #item.date="{ item }">
              <span class="font-weight-bold font-monospace">{{ item.date }}</span>
            </template>

            <!-- Ticket Count -->
            <template #item.ticketCount="{ item }">
              <span class="font-weight-bold">{{ item.ticketCount }} ຄັນ</span>
            </template>

            <!-- Cash -->
            <template #item.cash="{ item }">
              <span class="font-monospace">{{ formatMoney(item.byMethod?.CASH) }} ₭</span>
            </template>

            <!-- QR -->
            <template #item.qr="{ item }">
              <span class="font-monospace">{{ formatMoney(item.byMethod?.QR) }} ₭</span>
            </template>

            <!-- Transfer -->
            <template #item.transfer="{ item }">
              <span class="font-monospace">{{ formatMoney(item.byMethod?.TRANSFER) }} ₭</span>
            </template>

            <!-- Total Amount -->
            <template #item.totalAmount="{ item }">
              <span class="font-weight-black green--text text--darken-3 font-monospace">
                {{ formatMoney(item.totalAmount) }} LAK
              </span>
            </template>
          </v-data-table>
        </v-tab-item>

        <!-- Tab 2: Peak Hours Distribution -->
        <v-tab-item class="pa-4">
          <div class="text-subtitle-2 font-weight-bold mb-3 grey--text text--darken-2">
            ການແຈກຢາຍລົດເຂົ້າ-ອອກ ຕາມຊ່ວງເວລາ 24 ຊົ່ວໂມງ (24-Hour Traffic Distribution)
          </div>

          <v-simple-table dense>
            <template #default>
              <thead>
                <tr>
                  <th style="width: 100px;">ຊ່ວງເວລາ (Hour)</th>
                  <th>ລົດເຂົ້າ (Entries)</th>
                  <th>ລົດອອກ (Exits)</th>
                  <th>ຄວາມໜາແໜ້ນ (Traffic Volume)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="h in peakHoursReport.hourly || []" :key="h.hour">
                  <td class="font-monospace font-weight-bold">{{ h.hour }}</td>
                  <td class="green--text text--darken-2 font-weight-bold">{{ h.entries }}</td>
                  <td class="blue--text text--darken-2 font-weight-bold">{{ h.exits }}</td>
                  <td>
                    <v-progress-linear
                      :value="Math.min(100, (h.entries + h.exits) * 10)"
                      height="12"
                      rounded
                      :color="h.entries + h.exits > 5 ? 'error' : (h.entries + h.exits > 2 ? 'warning' : 'primary')"
                    >
                      <template #default>
                        <span class="white--text text-caption" style="font-size: 10px;">
                          {{ h.entries + h.exits }}
                        </span>
                      </template>
                    </v-progress-linear>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import { createParkingApiService } from '~/services/parkingApiService';

export default {
  name: 'ParkingReportsPage',
  layout: 'admin',
  middleware: 'auths',
  data() {
    return {
      activeTab: 0,
      loading: false,
      filters: {
        startDate: '',
        endDate: ''
      },
      revenueReport: {
        grandTotal: 0,
        records: []
      },
      peakHoursReport: {
        hourly: []
      },
      revenueHeaders: [
        { text: 'ວັນທີ (Date)', value: 'date' },
        { text: 'ຈຳນວນລົດ (Count)', value: 'ticketCount' },
        { text: 'ເງິນສົດ (Cash)', value: 'cash' },
        { text: 'BCEL One QR', value: 'qr' },
        { text: 'ໂອນ (Transfer)', value: 'transfer' },
        { text: 'ລວມລາຍຮັບ (Total LAK)', value: 'totalAmount', align: 'right' }
      ]
    };
  },
  computed: {
    totalTicketsCount() {
      return (this.revenueReport.records || []).reduce((acc, r) => acc + (r.ticketCount || 0), 0);
    },
    averageRevenuePerVehicle() {
      if (!this.totalTicketsCount) return 0;
      return Math.round(this.revenueReport.grandTotal / this.totalTicketsCount);
    }
  },
  mounted() {
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    this.filters.startDate = thirtyDaysAgo.toISOString().slice(0, 10);
    this.filters.endDate = today.toISOString().slice(0, 10);

    this.loadReports();
  },
  methods: {
    formatMoney(val) {
      return Number(val || 0).toLocaleString();
    },

    async loadReports() {
      this.loading = true;
      const api = createParkingApiService(this.$axios);
      try {
        const [revRes, peakRes] = await Promise.all([
          api.getRevenueReport(this.filters),
          api.getPeakHoursReport(this.filters)
        ]);

        if (revRes.success) this.revenueReport = revRes.data;
        if (peakRes.success) this.peakHoursReport = peakRes.data;
      } catch (err) {
        this.$toast.error(err.message);
      } finally {
        this.loading = false;
      }
    },

    exportToExcel() {
      const records = this.revenueReport.records || [];
      if (!records.length) {
        this.$toast.warning('ບໍ່ມີຂໍ້ມູນໃນການ Export');
        return;
      }

      if (this.$xlsx) {
        const data = records.map(r => ({
          'Date': r.date,
          'Vehicles Count': r.ticketCount,
          'Cash (LAK)': r.byMethod?.CASH || 0,
          'QR (LAK)': r.byMethod?.QR || 0,
          'Transfer (LAK)': r.byMethod?.TRANSFER || 0,
          'Total Revenue (LAK)': r.totalAmount
        }));

        data.push({
          'Date': 'GRAND TOTAL',
          'Vehicles Count': this.totalTicketsCount,
          'Cash (LAK)': '',
          'QR (LAK)': '',
          'Transfer (LAK)': '',
          'Total Revenue (LAK)': this.revenueReport.grandTotal
        });

        const worksheet = this.$xlsx.utils.json_to_sheet(data);
        const workbook = this.$xlsx.utils.book_new();
        this.$xlsx.utils.book_append_sheet(workbook, worksheet, "Revenue Report");
        this.$xlsx.writeFile(workbook, `parking_revenue_${this.filters.startDate}_to_${this.filters.endDate}.xlsx`);
      } else {
        this.$toast.info('Export feature is being prepared');
      }
    }
  }
};
</script>

<style scoped>
.parking-reports-page {
  padding: 20px;
  font-family: 'Noto Sans Lao', sans-serif;
}
.page-title {
  font-size: 24px;
  font-weight: 800;
  color: #0f172a;
}
.report-table-card, .kpi-card, .filter-card {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.kpi-amount {
  font-size: 24px;
}
.font-monospace {
  font-family: 'Courier New', Courier, monospace !important;
}
</style>
