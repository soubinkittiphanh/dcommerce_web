<template>
  <div class="text-left noto-sans-lao">
    <div>
      <v-chip class="pa-5" color="primary" label text-color="white">
        <v-icon start>mdi-label</v-icon>
        <h3>ລາຍການ ຍົກເລີກ</h3>
      </v-chip>
    </div>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>

    <v-dialog v-model="dialogOrderDetail" fullscreen>
      <OrderDetailPosCRUD @reload="loadData(); dialogOrderDetail = false" :is-quotation="false" :key="componentKey" :is-update="viewTransaction"
        :headerId="selectedOrder" @close-dialog="dialogOrderDetail = false">
      </OrderDetailPosCRUD>
    </v-dialog>

    <v-dialog v-model="cancelForm" max-width="1024">
      <cancel-ticket-form :id="OrderIdSelected" :key="componentCancelFormKey" @close-dialog="cancelForm = false"
        @reload="cancelForm = false, loadData()"></cancel-ticket-form>
    </v-dialog>

    <v-card class="mt-5">
      <v-card-title>
        <v-layout row wrap>
          <v-col cols="6">
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date = parseDate(dateFormatted)" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>

            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format" persistent-hint
                  prepend-icon="mdi-calendar" v-bind="attrs" @blur="date2 = parseDate(dateFormatted2)" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line hide-details />
            <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line hide-details />
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn @click="loadData" color="primary" rounded large elevation="2">
              <v-icon left>mdi-cloud-download</v-icon>ດຶງລາຍງານ
            </v-btn>
          </v-col>
        </v-layout>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-row>
          <v-col v-for="(item, index) in cancelStatistics" :key="index" cols="12" sm="6" md="4">
            <div class="kpi-card pa-4 elevation-2" style="border-left: 5px solid #F44336; border-radius: 12px; background: #fff;">
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="text-overline grey--text">ຍອດຍົກເລີກລວມ</span>
                <v-icon color="red">mdi-close-circle</v-icon>
              </div>
              <div class="text-h5 font-weight-black red--text mb-2">
                {{ formatNumber(item.totalLocal) }} <small>{{ localCurrency?.code }}</small>
              </div>
              
              <div class="currency-breakdown-container">
                <div v-for="(val, code) in item.groupedCurrency" :key="code" class="breakdown-row pa-2 mb-1 rounded">
                  <div class="d-flex justify-space-between align-center">
                    <span class="caption font-weight-bold">{{ code }}</span>
                    <span class="caption font-weight-black">{{ formatNumber(val.original) }}</span>
                  </div>
                  <div v-if="code !== localCurrency?.code" class="text-right grey--text" style="font-size: 0.65rem;">
                    ≈ {{ formatNumber(val.local) }} {{ localCurrency?.code }}
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-data-table v-if="quotationList" :headers="headers" :search="search" :items="quotationList">
        
        <template v-slot:[`item.recid`]="{ item }">
          <div class="d-flex flex-column">
            <v-chip :color="getBookingStatusChip(item).color" small text-color="white">
              <v-icon left small>{{ getBookingStatusChip(item).icon }}</v-icon>
              {{ item.recid }}
            </v-chip>
          </div>
        </template>
        <template v-slot:[`item.bookingDate`]="{ item }">
          <div class="d-flex flex-column">
            <div class="text-subtitle-2">{{ formatBookingDate(item.bookingDate) }}</div>
            <v-chip :color="getBookingStatusChip(item).color" small text-color="white">
              <v-icon left small>{{ getBookingStatusChip(item).icon }}</v-icon>
              {{ getBookingStatusChip(item).text }}
            </v-chip>
          </div>
        </template>

        <template v-slot:[`item.client.credit`]="{ item }">
          <div class="text-center">
            <div v-if="hasValidClient(item)" class="mb-1">
              <div class="caption">{{ getClientName(item) }}</div>
              <div class="caption">Credit: {{ getClientCredit(item) }} days</div>
            </div>
            <div v-else class="mb-1">
              <div class="caption grey--text">{{ getNoClientText(item) }}</div>
            </div>
            <v-chip :color="getDueDateChip(item).color" small text-color="white">
              <v-icon left small>{{ getDueDateChip(item).icon }}</v-icon>
              {{ getDueDateChip(item).text }}
            </v-chip>
          </div>
        </template>

        <template v-slot:[`item.discount`]="{ item }">
          {{ numberWithCommas(item.discount) }}
        </template>

        <template v-slot:[`item.total`]="{ item }">
          <div class="d-flex flex-column text-right">
             <span class="font-weight-bold red--text">{{ numberWithCommas(calculateHeaderTotalLocal(item)) }}</span>
             <small class="grey--text">{{ localCurrency?.code }}</small>
          </div>
        </template>

        <template v-slot:[`item.createdAt`]="{ item }">
          {{ item.createdAt.split('.')[0] }}
        </template>

        <template v-slot:[`item.recid`]="{ item }">
          {{ item.id }}
        </template>

        <template v-slot:[`item.id`]="{ item }">
          <v-btn color="primary" text @click="viewItem(item)">
            <i class="fa-regular fa-pen-to-square"></i>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { swalError2, dayCount, getNextDate, getFirstDayOfMonth } from '~/common'
import { mapGetters } from 'vuex'

export default {
  middleware: 'auths',
  data() {
    return {
      componentKey: 0,
      dialogOrderDetail: false,
      selectedOrder: 0,
      viewTransaction: false,
      isloading: false,
      search: '',
      userId: null,
      orderHeaderList: [],
      OrderIdSelected: 0,
      cancelForm: false,
      componentCancelFormKey: 1,

      headers: [
        { text: 'ເລກທີ', align: 'center', value: 'recid', sortable: true },
        { text: 'ວັນທີ', align: 'center', value: 'bookingDate', sortable: true },
        { text: 'Noted', align: 'center', value: 'remark', sortable: true },
        { text: 'ID ລູກຄ້າ', align: 'center', value: 'client.id', sortable: true },
        { text: 'ລູກຄ້າ', align: 'center', value: 'client.name', sortable: true },
        { text: 'ເບີໂທ', align: 'center', value: 'client.telephone', sortable: true },
        { text: 'ສະກຸນເງິນ', align: 'center', value: 'currency.code', sortable: true },
        { text: 'ອັດຕາແລກປ່ຽນ', align: 'center', value: 'exchangeRate', sortable: true },
        { text: 'ສ່ວນຫລຸດ', align: 'end', value: 'discount', sortable: true },
        { text: 'ລວມ', align: 'end', value: 'total', sortable: false },
        { text: 'ຜູ້ລົງທຸລະກຳ', align: 'end', value: 'user.cus_name', sortable: false },
        { text: 'ເວລາລົງ', align: 'end', value: 'createdAt', sortable: false },
        { text: 'View/Update', align: 'end', value: 'id', sortable: false },
      ],
      date: getFirstDayOfMonth(),
      date2: new Date().toISOString().substr(0, 10),
      dateFormatted: '',
      dateFormatted2: '',
      menu1: false,
      menu2: false,
    }
  },
  computed: {
    ...mapGetters(['findAllCurrency']),
    
    localCurrency() {
      return this.findAllCurrency?.find(c => c.isLocalCCY === true || c.isLocalCCY === 1);
    },

    quotationList() {
      return this.orderHeaderList.filter(el => el['isActive'] == false);
    },

    cancelStatistics() {
      const grouped = { totalLocal: 0, count: this.quotationList.length, groupedCurrency: {} };
      this.quotationList.forEach(header => {
        const headerTotal = this.calculateHeaderTotalLocal(header);
        grouped.totalLocal += headerTotal;
        header.lines.forEach(line => {
          const lineCurrency = this.findAllCurrency?.find(c => c.id === line.currencyId);
          const cCode = lineCurrency?.code || 'UNKNOWN';
          const isLocal = lineCurrency?.isLocalCCY === true || lineCurrency?.isLocalCCY === 1;
          const rate = isLocal ? 1 : (line.exchangeRate || 1);
          if (!grouped.groupedCurrency[cCode]) grouped.groupedCurrency[cCode] = { original: 0, local: 0 };
          grouped.groupedCurrency[cCode].original += (line.quantity * line.price);
          grouped.groupedCurrency[cCode].local += (line.quantity * line.price * rate);
        });
      });
      return [grouped];
    }
  },
  async created() {
    this.dateFormatted = this.formatDate(this.date);
    this.dateFormatted2 = this.formatDate(this.date2);
    await this.loadData();
  },
  watch: {
    date(val) { this.dateFormatted = this.formatDate(val); this.loadData(); },
    date2(val) { this.dateFormatted2 = this.formatDate(val); this.loadData(); }
  },
  methods: {
    calculateHeaderTotalLocal(header) {
      if (!header.lines) return header.total;
      return header.lines.reduce((sum, line) => {
        const lineCurrency = this.findAllCurrency?.find(c => c.id === line.currencyId);
        const isLocal = lineCurrency?.isLocalCCY === true || lineCurrency?.isLocalCCY === 1;
        const rate = isLocal ? 1 : (line.exchangeRate || 1);
        return sum + (line.quantity * line.price * rate);
      }, 0) - (header.discount || 0);
    },
    // RESTORED: All your original table helper methods
    hasValidClient(item) { return item && item.client && item.client.credit !== undefined && item.client.credit !== null; },
    getClientCredit(item) { return this.hasValidClient(item) ? parseInt(item.client.credit) : 0; },
    getClientName(item) { return item.client ? (item.client.name || 'Unnamed') : 'Walk-in'; },
    getNoClientText(item) { return item.client ? 'No Credit Info' : 'Walk-in'; },
    formatBookingDate(date) { return date ? date.split('T')[0] : 'Invalid'; },
    countDay(startDate) { return dayCount(startDate); },
    dueDate(startDate, day) { return getNextDate(startDate, day); },
    numberWithCommas(val) { return (val || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); },
    formatNumber(val) { return new Intl.NumberFormat().format(Math.round(val || 0)); },
    
    getBookingStatusChip(item) {
      const dayCnt = this.countDay(item.bookingDate.split('T')[0]);
      if (!this.hasValidClient(item)) return { color: 'grey', icon: 'mdi-account-off', text: `${dayCnt} days` };
      const credit = this.getClientCredit(item);
      if (dayCnt > credit) return { color: 'red', icon: 'mdi-alert', text: `${dayCnt} days - Overdue` };
      return { color: 'green', icon: 'mdi-check', text: `${dayCnt} days - OK` };
    },

    getDueDateChip(item) {
      if (!this.hasValidClient(item)) return { color: 'grey', icon: 'mdi-calendar', text: 'N/A' };
      const dueStr = this.dueDate(item.bookingDate, this.getClientCredit(item)).toISOString().split('T')[0];
      return { color: 'primary', icon: 'mdi-calendar-check', text: dueStr };
    },

    async loadData() {
      this.isloading = true;
      const date = { startDate: this.date, endDate: this.date2, userId: this.userId };
      try {
        const res = await this.$axios.get('api/sale/findByDate', { params: { date } });
        this.orderHeaderList = res.data;
      } catch (er) { swalError2(this.$swal, 'Error', er); }
      this.isloading = false;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
    viewItem(item) { this.componentKey += 1; this.viewTransaction = true; this.selectedOrder = item.id; this.dialogOrderDetail = true; }
  }
}
</script>

<style scoped>
.noto-sans-lao { font-family: 'Noto Sans Lao', sans-serif; }
.kpi-card { transition: 0.3s; }
.kpi-card:hover { transform: translateY(-5px); }
.breakdown-row { background: #fff5f5; border: 1px dashed #feb2b2; }
</style>