<template>
  <div>
    <!-- Header Section -->
    <v-row class="mb-4">
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between mb-2">
          <div>
            <h1 class="font-weight-black primary--text text-h4 mb-1">ລາຍງານຖານະການເງິນ</h1>
            <p class="text-subtitle-1 text--secondary">Statement of Financial Position (Balance Sheet)</p>
          </div>
          <v-chip color="primary" class="pa-5" label text-color="white">
            <v-icon left>mdi-account-balance</v-icon>
            <h3>ສົມດຸນບັນຊີ</h3>
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <!-- Dialogs -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator></loading-indicator>
    </v-dialog>
    <v-dialog v-model="dialogMessage" max-width="300px">
      <dialog-classic-message :message="message" @closedialog="message = null">
      </dialog-classic-message>
    </v-dialog>

    <!-- Date Select & Export Actions -->
    <v-card class="mb-6 rounded-xl elevation-2">
      <v-card-text class="pa-5">
        <v-row align="center">
          <v-col cols="12" md="4" class="py-0">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFormatted"
                  label="ຂໍ້ມູນ ນະ ວັນທີ (As of Date):"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-inner-icon="mdi-calendar-clock"
                  outlined
                  dense
                  v-bind="attrs"
                  @blur="asOfDate = parseDate(dateFormatted)"
                  v-on="on"
                  hide-details
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="asOfDate"
                no-title
                @input="menu = false; fetchData()"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="8" class="text-right py-0">
            <v-btn color="primary" outlined class="mr-2 rounded-lg font-weight-bold" @click="fetchData">
              <v-icon left>mdi-refresh</v-icon> ໂຫຼດຄືນ
            </v-btn>
            <v-btn color="success" class="mr-2 rounded-lg font-weight-bold" @click="exportToExcel">
              <v-icon left>mdi-microsoft-excel</v-icon> ສົ່ງອອກ Excel
            </v-btn>
            <v-btn color="secondary" class="rounded-lg font-weight-bold" @click="printReport">
              <v-icon left>mdi-printer</v-icon> ພິມລາຍງານ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Metrics Cards -->
    <v-row class="mb-6">
      <!-- Total Assets Card -->
      <v-col cols="12" md="4">
        <v-card class="rounded-xl elevation-2 metric-card border-left-asset pa-4">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="metric-title font-weight-medium">ຊັບສິນລວມ (Total Assets)</div>
            <v-avatar color="primary lighten-5" size="40">
              <v-icon color="primary">mdi-wallet</v-icon>
            </v-avatar>
          </div>
          <h2 class="text-h4 font-weight-bold primary--text">{{ formatCurrency(totalAssets) }} {{ homeCurrencyCode }}</h2>
          <div class="text-caption grey--text mt-2">ຊັບສິນສົດ, ສິນຄ້າໃນສາງ ແລະ ບັນຊີ AR</div>
        </v-card>
      </v-col>

      <!-- Total Liabilities Card -->
      <v-col cols="12" md="4">
        <v-card class="rounded-xl elevation-2 metric-card border-left-liability pa-4">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="metric-title font-weight-medium">ໜີ້ສິນລວມ (Total Liabilities)</div>
            <v-avatar color="error lighten-5" size="40">
              <v-icon color="error">mdi-cash-remove</v-icon>
            </v-avatar>
          </div>
          <h2 class="text-h4 font-weight-bold error--text">{{ formatCurrency(totalLiabilities) }} {{ homeCurrencyCode }}</h2>
          <div class="text-caption grey--text mt-2">ໜີ້ຕ້ອງສົ່ງ AP ແລະ ຄ່າໃຊ້ຈ່າຍຄ້າງຈ່າຍ</div>
        </v-card>
      </v-col>

      <!-- Total Equity Card -->
      <v-col cols="12" md="4">
        <v-card class="rounded-xl elevation-2 metric-card border-left-equity pa-4">
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="metric-title font-weight-medium">ສ່ວນທຶນລວມ (Total Equity)</div>
            <v-avatar color="success lighten-5" size="40">
              <v-icon color="success">mdi-shield-check</v-icon>
            </v-avatar>
          </div>
          <h2 class="text-h4 font-weight-bold success--text">{{ formatCurrency(totalEquity) }} {{ homeCurrencyCode }}</h2>
          <div class="text-caption grey--text mt-2">ທຶນເຈົ້າຂອງ ແລະ ກຳໄລສະສົມ</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Main Balance Sheet Statement Table -->
    <v-card class="rounded-xl elevation-3 statement-card overflow-hidden">
      <v-card-title class="primary white--text py-4 px-6 d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <v-icon color="white" class="mr-3">mdi-file-document-outline</v-icon>
          <span class="text-h6 font-weight-bold">ໃບລາຍງານຖານະການເງິນ (Balance Sheet Statement)</span>
        </div>
        <div class="text-subtitle-2 white--text opacity-85">
          ນະ ວັນທີ: {{ formatDate(asOfDate) }}
        </div>
      </v-card-title>

      <v-card-text class="pa-0">
        <div class="table-responsive">
          <table class="statement-table w-100">
            <!-- ASSETS SECTION -->
            <tr class="section-header">
              <td colspan="2" class="py-3 px-6 text-uppercase font-weight-black primary--text bg-light-blue">
                ຊັບສິນ (ASSETS)
              </td>
            </tr>
            <tr v-for="(item, idx) in assets.items" :key="'asset-' + idx" class="item-row">
              <td class="py-3 px-8 text-subtitle-1">
                {{ item.accountName }}
                <v-expand-transition>
                  <div v-if="item.details && item.details.length > 0" class="sub-details pl-4 mt-2">
                    <div v-for="bank in item.details" :key="bank.id" class="d-flex justify-space-between text-body-2 text--secondary py-1 border-bottom-dotted">
                      <span>{{ bank.accountName }} ({{ bank.accountNumber }})</span>
                      <span>
                        {{ formatCurrency(bank.balance) }} {{ homeCurrencyCode }}
                        <span v-if="bank.originalCurrency !== homeCurrencyCode" class="text-caption grey--text">
                          ({{ formatCurrency(bank.originalBalance) }} {{ bank.originalCurrency }})
                        </span>
                      </span>
                    </div>
                  </div>
                </v-expand-transition>
              </td>
              <td class="py-3 px-6 text-right font-weight-bold text-subtitle-1">
                {{ formatCurrency(item.balance) }}
              </td>
            </tr>
            <tr class="total-row bg-light">
              <td class="py-3 px-6 font-weight-bold text-subtitle-1 pl-8">ຊັບສິນລວມທັງໝົດ (Total Assets)</td>
              <td class="py-3 px-6 text-right font-weight-bold text-h6 primary--text">
                {{ formatCurrency(totalAssets) }}
              </td>
            </tr>

            <!-- LIABILITIES SECTION -->
            <tr class="section-header">
              <td colspan="2" class="py-3 px-6 text-uppercase font-weight-black error--text bg-light-red">
                ໜີ້ສິນ (LIABILITIES)
              </td>
            </tr>
            <tr v-for="(item, idx) in liabilities.items" :key="'liability-' + idx" class="item-row">
              <td class="py-3 px-8 text-subtitle-1">
                {{ item.accountName }}
              </td>
              <td class="py-3 px-6 text-right font-weight-bold text-subtitle-1">
                {{ formatCurrency(item.balance) }}
              </td>
            </tr>
            <tr class="total-row bg-light">
              <td class="py-3 px-6 font-weight-bold text-subtitle-1 pl-8">ໜີ້ສິນລວມທັງໝົດ (Total Liabilities)</td>
              <td class="py-3 px-6 text-right font-weight-bold text-h6 error--text">
                {{ formatCurrency(totalLiabilities) }}
              </td>
            </tr>

            <!-- EQUITY SECTION -->
            <tr class="section-header">
              <td colspan="2" class="py-3 px-6 text-uppercase font-weight-black success--text bg-light-green">
                ສ່ວນທຶນ (EQUITY)
              </td>
            </tr>
            <tr v-for="(item, idx) in equity.items" :key="'equity-' + idx" class="item-row">
              <td class="py-3 px-8 text-subtitle-1">
                {{ item.accountName }}
              </td>
              <td class="py-3 px-6 text-right font-weight-bold text-subtitle-1">
                {{ formatCurrency(item.balance) }}
              </td>
            </tr>
            <tr class="total-row bg-light">
              <td class="py-3 px-6 font-weight-bold text-subtitle-1 pl-8">ສ່ວນທຶນລວມທັງໝົດ (Total Equity)</td>
              <td class="py-3 px-6 text-right font-weight-bold text-h6 success--text">
                {{ formatCurrency(totalEquity) }}
              </td>
            </tr>

            <!-- BALANCED EQUATION TOTAL -->
            <tr class="balanced-row bg-primary-light">
              <td class="py-4 px-6 font-weight-black text-subtitle-1 primary--text">
                ໜີ້ສິນ ແລະ ສ່ວນທຶນລວມທັງໝົດ (Total Liabilities & Equity)
              </td>
              <td class="py-4 px-6 text-right font-weight-black text-h5 primary--text">
                {{ formatCurrency(totalLiabilities + totalEquity) }}
              </td>
            </tr>
          </table>
        </div>
      </v-card-text>
    </v-card>

    <!-- Verification Equation Banner -->
    <v-alert
      v-if="isBalanced"
      type="success"
      outlined
      border="left"
      class="mt-6 rounded-xl"
    >
      <div class="d-flex align-center">
        <v-icon color="success" class="mr-3">mdi-check-decagram</v-icon>
        <span class="font-weight-medium">ບັນຊີສົມດຸນສົມບູນ: ຊັບສິນ = ໜີ້ສິນ + ສ່ວນທຶນ (Assets = Liabilities + Equity)</span>
      </div>
    </v-alert>
    <v-alert
      v-else
      type="warning"
      outlined
      border="left"
      class="mt-6 rounded-xl"
    >
      <div class="d-flex align-center">
        <v-icon color="warning" class="mr-3">mdi-alert-circle</v-icon>
        <span class="font-weight-medium">ຄຳເຕືອນ: ຍອດບັນຊີບໍ່ສົມດຸນ ກະລຸນາກວດສອບລາຍການທຸລະກຳຍ້ອນຫຼັງ</span>
      </div>
    </v-alert>
  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: 'auths',
  name: 'BalanceSheetReport',
  
  data() {
    return {
      asOfDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu: false,
      isloading: false,
      dialogMessage: false,
      message: '',

      homeCurrencyCode: 'LAK',

      assets: { items: [], total: 0 },
      liabilities: { items: [], total: 0 },
      equity: { items: [], total: 0 }
    }
  },

  computed: {
    totalAssets() {
      return this.assets.total || 0;
    },
    totalLiabilities() {
      return this.liabilities.total || 0;
    },
    totalEquity() {
      return this.equity.total || 0;
    },
    isBalanced() {
      return Math.abs(this.totalAssets - (this.totalLiabilities + this.totalEquity)) < 1;
    }
  },

  watch: {
    asOfDate(val) {
      this.dateFormatted = this.formatDate(val)
    }
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.isloading = true;
      try {
        const { data } = await this.$axios.get('/api/gl/reports/balance-sheet', {
          params: { asOfDate: this.asOfDate }
        });
        if (data?.success) {
          this.assets = data.assets;
          this.liabilities = data.liabilities;
          this.equity = data.equity;
          this.homeCurrencyCode = data.currencyCode || 'LAK';
        } else {
          this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນ');
        }
      } catch (err) {
        console.error('Error fetching balance sheet:', err);
        this.message = err.message || 'Server error';
        this.dialogMessage = true;
      } finally {
        this.isloading = false;
      }
    },

    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },

    parseDate(date) {
      if (!date) return null
      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount || 0);
    },

    async exportToExcel() {
      try {
        const XLSX = await import('xlsx');
        const summaryData = [
          ['ໃບລາຍງານຖານະການເງິນ (Balance Sheet Statement)'],
          [`ນະ ວັນທີ: ${this.formatDate(this.asOfDate)}`],
          [''],
          [`ລາຍການ`, `ຍອດເຫຼືອ (${this.homeCurrencyCode})`],
          ['ຊັບສິນ (ASSETS)', ''],
          ...this.assets.items.map(i => [i.accountName, i.balance]),
          ['ຊັບສິນລວມທັງໝົດ (Total Assets)', this.totalAssets],
          [''],
          ['ໜີ້ສິນ (LIABILITIES)', ''],
          ...this.liabilities.items.map(i => [i.accountName, i.balance]),
          ['ໜີ້ສິນລວມທັງໝົດ (Total Liabilities)', this.totalLiabilities],
          [''],
          ['ສ່ວນທຶນ (EQUITY)', ''],
          ...this.equity.items.map(i => [i.accountName, i.balance]),
          ['ສ່ວນທຶນລວມທັງໝົດ (Total Equity)', this.totalEquity],
          [''],
          ['ໜີ້ສິນ ແລະ ສ່ວນທຶນລວມທັງໝົດ', this.totalLiabilities + this.totalEquity]
        ];

        const worksheet = XLSX.utils.aoa_to_sheet(summaryData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Balance Sheet');

        // Set column width
        worksheet['!cols'] = [{ wch: 45 }, { wch: 25 }];

        XLSX.writeFile(workbook, `Balance_Sheet_${this.asOfDate}.xlsx`);
        this.$toast?.success('ສົ່ງອອກ Excel ສຳເລັດ');
      } catch (err) {
        console.error(err);
        this.$toast?.error('ເກີດຂໍ້ຜິດພາດໃນການສົ່ງອອກ');
      }
    },

    printReport() {
      window.print();
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;500;700&display=swap');

.notosans-lao {
  font-family: 'Noto Sans Lao', sans-serif !important;
}

.balance-sheet-container {
  padding: 24px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.metric-card {
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
}

.border-left-asset {
  border-left: 6px solid #1976d2 !important;
}

.border-left-liability {
  border-left: 6px solid #ff5252 !important;
}

.border-left-equity {
  border-left: 6px solid #4caf50 !important;
}

.statement-table {
  border-collapse: collapse;
}

.section-header {
  border-bottom: 2px solid rgba(0,0,0,0.1);
}

.bg-light-blue {
  background-color: #e3f2fd;
}

.bg-light-red {
  background-color: #ffebee;
}

.bg-light-green {
  background-color: #e8f5e9;
}

.bg-primary-light {
  background-color: #eef2fa;
}

.item-row {
  border-bottom: 1px solid rgba(0,0,0,0.05);
  transition: background-color 0.2s ease;
}

.item-row:hover {
  background-color: rgba(0,0,0,0.01);
}

.total-row {
  border-top: 2px solid rgba(0,0,0,0.08);
  border-bottom: 2px solid rgba(0,0,0,0.08);
}

.sub-details {
  background-color: #fdfdfd;
  border-radius: 8px;
  padding: 8px 16px;
}

.border-bottom-dotted {
  border-bottom: 1px dotted rgba(0,0,0,0.1);
}

.text-caption {
  font-size: 0.75rem !important;
  font-family: 'Noto Sans Lao', sans-serif;
}

.border-bottom-dotted:last-child {
  border-bottom: none;
}

@media print {
  .balance-sheet-container {
    background-color: white !important;
    padding: 0 !important;
  }
  .v-btn, .v-card.mb-6 {
    display: none !important;
  }
}
</style>
