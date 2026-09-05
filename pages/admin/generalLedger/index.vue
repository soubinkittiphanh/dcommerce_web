<template>
  <div class="general-ledger-page text-left pa-4">
    <!-- Header Page Banner -->
    <v-row class="mb-5 align-center">
      <v-col cols="12" md="8">
        <div class="d-flex align-center">
          <v-avatar color="primary lighten-5" size="64" class="mr-4 elevation-1" style="border: 2px solid #e3f2fd;">
            <v-icon color="primary" size="36">mdi-book-open-page-variant</v-icon>
          </v-avatar>
          <div>
            <h1 class="font-weight-black primary--text text-h4 mb-1" style="letter-spacing: -0.5px;">ປຶ້ມບັນທຶກປະເພດທົ່ວໄປ (General Ledger Journal)</h1>
            <p class="text-subtitle-2 text--secondary mb-0">ສະແດງລາຍການບັນທຶກບັນຊີ Double-Entry ທັງໝົດໃນລະບົບ (POS Sales, reversals, stock receiving, ແລະ JVs)</p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="4" class="text-right">
        <!-- manual JV button -->
        <v-btn @click="triggerDialog" color="success" dark class="px-5 py-5 rounded-lg font-weight-bold action-btn" elevation="2">
          <v-icon left>mdi-plus-circle</v-icon>
          ເພີ່ມລາຍການ GL (JV)
        </v-btn>
      </v-col>
    </v-row>

    <!-- Dialogs -->
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <GLForm :isUpdate="isEdit" :GLId="selectedId" :key="apFormKey" @close-dialog="dialog = false" @reload="loadTxn" />
    </v-dialog>

    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator />
    </v-dialog>

    <!-- Dashboard KPI Cards Row -->
    <v-row class="mb-5">
      <!-- Card 1: Total volume LAK debits -->
      <v-col cols="12" sm="6" md="4">
        <v-card class="kpi-card bg-glass elevation-2 rounded-xl pa-5 border-light" style="min-height: 122px;">
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="text-caption text-uppercase font-weight-bold text--secondary">ຍອດລວມທຸລະກຳ (LCY Debits)</span>
              <div class="text-h4 font-weight-black mt-2 mb-1 primary--text">
                {{ numberWithCommas(totalLCYAmount) }} <span class="text-subtitle-2">LAK</span>
              </div>
              <span class="text-caption grey--text text--darken-1">ຍອດເງິນເດບິດສະກຸນທ້ອງຖິ່ນທັງໝົດ</span>
            </div>
            <v-avatar color="primary lighten-5" size="48" class="rounded-lg">
              <v-icon color="primary" size="28">mdi-finance</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- Card 2: Total transactions count -->
      <v-col cols="12" sm="6" md="4">
        <v-card class="kpi-card bg-glass elevation-2 rounded-xl pa-5 border-light" style="min-height: 122px;">
          <div class="d-flex justify-space-between align-start">
            <div>
              <span class="text-caption text-uppercase font-weight-bold text--secondary">ຈຳນວນທຸລະກຳ (Transactions)</span>
              <div class="text-h4 font-weight-black mt-2 mb-1 primary--text">
                {{ txnList ? txnList.length : 0 }} <span class="text-subtitle-2">ລາຍການ</span>
              </div>
              <span class="text-caption grey--text text--darken-1">ບັນທຶກລາຍການບັນຊີໃນໄລຍະນີ້</span>
            </div>
            <v-avatar color="primary lighten-5" size="48" class="rounded-lg">
              <v-icon color="primary" size="28">mdi-swap-horizontal</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- Card 3: Multi-currency summaries -->
      <v-col cols="12" md="4">
        <v-card class="kpi-card bg-glass elevation-2 rounded-xl pa-5 border-light" style="min-height: 122px;">
          <div class="d-flex justify-space-between align-start mb-2">
            <div>
              <span class="text-caption text-uppercase font-weight-bold text--secondary">ແຍກຕາມສະກຸນເງິນ (Currency Summaries)</span>
            </div>
            <v-avatar color="primary lighten-5" size="36" class="rounded-lg">
              <v-icon color="primary" size="20">mdi-cash-multiple</v-icon>
            </v-avatar>
          </div>
          <div class="d-flex flex-wrap gap-2 mt-2" style="max-height: 52px; overflow-y: auto;">
            <v-chip v-for="item in GLCurrencyGrouping" :key="item.currency" small color="primary lighten-5" text-color="primary" class="font-weight-black py-2 px-3">
              <v-icon left x-small>mdi-circle-medium</v-icon>
              {{ item.currency }}: {{ numberWithCommas(item.amount) }}
            </v-chip>
            <div v-if="!GLCurrencyGrouping || GLCurrencyGrouping.length === 0" class="text-caption grey--text">
              ບໍ່ມີຂໍ້ມູນສະກຸນເງິນ
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Filters Area -->
    <v-card class="elevation-1 rounded-xl mb-5 border-light overflow-hidden">
      <v-card-text class="pa-4 bg-light-blue">
        <v-row class="align-center">
          <v-col cols="12" sm="6" md="3" class="py-1">
            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" prepend-inner-icon="mdi-calendar" v-bind="attrs" v-on="on" @blur="date = parseDate(dateFormatted)" outlined dense hide-details class="custom-input rounded-lg bg-white" />
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false" color="primary" />
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="py-1">
            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" prepend-inner-icon="mdi-calendar" v-bind="attrs" v-on="on" @blur="date2 = parseDate(dateFormatted2)" outlined dense hide-details class="custom-input rounded-lg bg-white" />
              </template>
              <v-date-picker v-model="date2" no-title @input="menu2 = false" color="primary" />
            </v-menu>
          </v-col>
          <v-col cols="12" sm="6" md="3" class="py-1">
            <v-select v-model="displayMode" :items="displayModeItems" label="ຮູບແບບສະແດງ (Layout Mode):" outlined dense hide-details class="custom-input rounded-lg bg-white font-weight-bold" />
          </v-col>
          <v-col cols="12" sm="6" md="3" class="py-1 d-flex gap-2 justify-sm-end">
            <v-btn @click="loadTxn" color="primary" class="action-btn rounded-lg px-4" depressed>
              <v-icon left>mdi-sync</v-icon>
              ໂຫຼດຂໍ້ມູນ
            </v-btn>
            <v-btn @click="printReport" color="primary" outlined class="action-btn rounded-lg px-4" depressed>
              <v-icon left>mdi-printer</v-icon>
              ພິມລາຍງານ A4
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Main Data Table -->
    <v-card class="elevation-2 rounded-xl overflow-hidden border-light">
      <v-card-title class="px-5 py-4 d-flex justify-space-between align-center bg-light">
        <span class="font-weight-black text-subtitle-1 primary--text"><v-icon left color="primary">mdi-format-list-bulleted</v-icon>ລາຍການບັນທຶກບັນຊີ</span>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາເລກອ້າງອີງ ຫຼື ເນື້ອໃນ..." single-line outlined dense hide-details style="max-width: 320px;" class="rounded-lg" />
      </v-card-title>
      <v-divider />

      <v-data-table v-if="txnList" :headers="headers" :search="search" :items="displayTxnList" item-key="uniqueKey" class="compact-table" :items-per-page="20">
        <!-- ID format -->
        <template v-slot:[`item.id`]="{ item }">
          <span class="font-weight-bold grey--text text--darken-2">#{{ item.id }}</span>
        </template>
        
        <!-- DR Account display -->
        <template v-slot:[`item.drAccount.accountNumber`]="{ item }">
          <v-chip v-if="item.drAccount" small class="font-weight-black account-chip dr-chip" label>
            <v-icon left small>mdi-plus-box</v-icon>
            {{ item.drAccount.accountNumber }}
          </v-chip>
          <span v-else class="grey--text text-caption">-</span>
        </template>
        
        <!-- CR Account display -->
        <template v-slot:[`item.crAccount.accountNumber`]="{ item }">
          <v-chip v-if="item.crAccount" small class="font-weight-black account-chip cr-chip" label>
            <v-icon left small>mdi-minus-box</v-icon>
            {{ item.crAccount.accountNumber }}
          </v-chip>
          <span v-else class="grey--text text-caption">-</span>
        </template>

        <!-- Debit amount -->
        <template v-slot:[`item.debit`]="{ item }">
          <span v-if="parseFloat(item.debit) > 0" class="debit-text font-weight-black">
            {{ numberWithCommas(item.debit) }}
          </span>
          <span v-else class="grey--text text-caption">-</span>
        </template>

        <!-- Credit amount -->
        <template v-slot:[`item.credit`]="{ item }">
          <span v-if="parseFloat(item.credit) > 0" class="credit-text font-weight-black">
            {{ numberWithCommas(item.credit) }}
          </span>
          <span v-else class="grey--text text-caption">-</span>
        </template>

        <!-- Currency Code display -->
        <template v-slot:[`item.currency.code`]="{ item }">
          <span class="font-weight-bold grey--text text--darken-3">{{ item.currency ? item.currency.code : 'LAK' }}</span>
        </template>

        <!-- Local Debit amount -->
        <template v-slot:[`item.localDebit`]="{ item }">
          <span v-if="parseFloat(item.localDebit) > 0" class="grey--text text--darken-3 font-weight-black">
            {{ numberWithCommas(item.localDebit) }}
          </span>
          <span v-else class="grey--text text-caption">-</span>
        </template>

        <!-- Local Credit amount -->
        <template v-slot:[`item.localCredit`]="{ item }">
          <span v-if="parseFloat(item.localCredit) > 0" class="grey--text text--darken-3 font-weight-black">
            {{ numberWithCommas(item.localCredit) }}
          </span>
          <span v-else class="grey--text text-caption">-</span>
        </template>

        <!-- Source Application badge -->
        <template v-slot:[`item.source`]="{ item }">
          <v-chip x-small class="font-weight-black rounded-lg source-chip" label>
            {{ item.source }}
          </v-chip>
        </template>

        <!-- rate exchange -->
        <template v-slot:[`item.rate`]="{ item }">
          <span class="text-caption grey--text text--darken-2">1 : {{ numberWithCommas(item.rate) }}</span>
        </template>

        <!-- Description -->
        <template v-slot:[`item.description`]="{ item }">
          <span class="text-subtitle-2 text-wrap-desc font-weight-medium text--darken-4">{{ item.description }}</span>
        </template>

        <!-- Actions -->
        <template v-slot:[`item.function`]="{ item }">
          <v-btn color="primary" icon small class="hover-action" @click="editItem(item)">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { confirmSwal, swalSuccess, swalError2, getFirstDayOfMonth, getFormatNum } from '~/common'
import GLForm from '~/components/accounting/GLForm.vue'
import { generateGeneralLedgerHTML } from '~/common/printTemplates'

export default {
    components: { GLForm },
    mounted() {
        this.loadTxn()
    },
    middleware: 'auths',
    data() {
        return {
            search: "",
            isEdit: false,
            dialog: false,
            apFormKey: 1,
            isloading: false,
            menu1: false,
            menu2: false,
            txnList: [],
            selectedId: '',
            headers: [
                { text: 'RECID', align: 'center', value: 'id', sortable: true },
                { text: 'ວັນທີ', align: 'center', value: 'bookingDate', sortable: true },
                { text: 'DR Account', align: 'center', value: 'drAccount.accountNumber' },
                { text: 'CR Account', align: 'center', value: 'crAccount.accountNumber' },
                { text: 'Debit', align: 'right', value: 'debit' },
                { text: 'Credit', align: 'right', value: 'credit' },
                { text: 'ສະກຸນ', align: 'center', value: 'currency.code' },
                { text: 'ອັດຕາ', align: 'right', value: 'rate' },
                { text: 'Local Debit', align: 'right', value: 'localDebit' },
                { text: 'Local Credit', align: 'right', value: 'localCredit' },
                { text: 'ເນື້ອໃນອະທິບາຍ', align: 'left', value: 'description' },
                { text: 'SRC APP', align: 'center', value: 'source', sortable: true },
                { text: 'ແກ້ໄຂ', align: 'end', value: 'function', sortable: false },
            ],
            date: getFirstDayOfMonth(),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            dateFormatted: this.formatDate(getFirstDayOfMonth()),
            dateFormatted2: this.formatDate(
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
            ),
            displayMode: 'single',
            displayModeItems: [
                { text: 'ແຖວດ່ຽວ (Single Row)', value: 'single' },
                { text: 'ແຖວຄູ່ (Double Rows)', value: 'double' }
            ],
        }
    },

    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date)
            this.loadTxn()
        },
        date2(val) {
            this.dateFormatted2 = this.formatDate(this.date2)
            this.loadTxn()
        },
    },
    methods: {
        numberWithCommas(value) {
            return getFormatNum(value)
        },
        getSourceColor(source) {
            if (source === 'AR') return 'blue darken-1';
            if (source === 'AP') return 'amber darken-2';
            if (source === 'GL') return 'teal darken-1';
            return 'grey darken-1';
        },
        triggerDialog() {
            this.apFormKey += 1;
            this.selectedId = null;
            this.isEdit = false;
            this.dialog = true
        },
        editItem(item) {
            this.selectedId = item.id
            this.isEdit = true;
            this.apFormKey += 1;
            this.dialog = true
        },
        formatDate(date) {
            if (!date) return null
            const formattedDate = this.formatDateToISO(date);
            const [year, month, day] = formattedDate.split('-')
            return `${month}/${day}/${year}`
        },
        parseDate(date) {
            if (!date) return null
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        formatDateToISO(date) {
            if (!(date instanceof Date)) date = new Date(date);
            const year = date.getFullYear();
            const month = `${date.getMonth() + 1}`.padStart(2, '0');
            const day = `${date.getDate()}`.padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        async loadTxn() {
            this.isloading = true
            const date = {
                startDate: this.date,
                endDate: this.date2,
            }
            try {
                const response = await this.$axios.get("/api/gl/findByDate", { params: { date } })
                this.txnList = response.data;
            } catch (error) {
                swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ' + error);
            }
            this.isloading = false
        },
        async printReport() {
            this.isloading = true
            try {
                let company = {};
                try {
                    const response = await this.$axios.get('api/public/company/findAll')
                    const data = response.data?.data ?? response.data
                    company = data?.[0] || {}
                } catch (e) {
                    const response = await this.$axios.get('api/company/findAll')
                    company = response.data?.[0] || {}
                }

                const reportHTML = generateGeneralLedgerHTML(
                    this.txnList,
                    this.date,
                    this.date2,
                    this.totalLCYAmount,
                    this.GLCurrencyGrouping,
                    company,
                    this.displayMode
                )

                const printWindow = window.open('', '_blank', 'width=1100,height=800')
                if (!printWindow) return
                printWindow.document.open()
                printWindow.document.write(reportHTML)
                printWindow.document.close()

                // Trigger printing using setTimeout to avoid onload getting stuck in Electron/blank window environment
                setTimeout(() => {
                    try {
                        printWindow.print()
                        setTimeout(() => printWindow.close(), 200)
                    } catch (e) {
                        printWindow.close()
                    }
                }, 500)
            } catch (error) {
                console.error("Print error:", error)
                swalError2(this.$swal, "Error", 'ບໍ່ສາມາດພິມລາຍງານໄດ້ ' + error.message)
            } finally {
                this.isloading = false
            }
        }
    },
    computed: {
        GLCurrencyGrouping() {
            const sumByCurrency = {};

            this.txnList.forEach(transaction => {
                const { debit, credit, currency } = transaction;
                const code = currency?.code || 'LAK';
                if (!sumByCurrency[code]) {
                    sumByCurrency[code] = 0;
                }
                const debitVal = parseFloat(debit) || 0;
                const creditVal = parseFloat(credit) || 0;
                sumByCurrency[code] += (debitVal || creditVal);
            });

            const listOfCurrency = []
            for (const currencyCode in sumByCurrency) {
                listOfCurrency.push({ 'currency': currencyCode, 'amount': sumByCurrency[currencyCode] })
            }

            return listOfCurrency;
        },
        totalLCYAmount() {
            let totalDebits = this.txnList.reduce((sum, item) => {
                return sum + (parseFloat(item.localDebit) || 0);
            }, 0);
            return totalDebits;
        },
        displayTxnList() {
            if (this.displayMode === 'single') {
                return this.txnList.map(item => ({ ...item, uniqueKey: String(item.id) }));
            }
            
            const list = [];
            this.txnList.forEach(item => {
                // Debit Row
                list.push({
                    ...item,
                    uniqueKey: `${item.id}-DR`,
                    crAccount: null,
                    credit: 0,
                    localCredit: 0
                });
                // Credit Row
                list.push({
                    ...item,
                    uniqueKey: `${item.id}-CR`,
                    drAccount: null,
                    debit: 0,
                    localDebit: 0
                });
            });
            return list;
        }
    }
}
</script>

<style scoped>
.gap-2 {
    gap: 8px;
}
.border-light {
    border: 1px solid rgba(226, 232, 240, 0.8) !important;
}
.bg-glass {
    background: rgba(255, 255, 255, 0.8) !important;
    backdrop-filter: blur(10px);
}
.bg-light-blue {
    background-color: #f1f5f9 !important;
}
.kpi-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.kpi-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;
}
.action-btn {
    text-transform: none !important;
    letter-spacing: 0px !important;
    font-size: 0.875rem !important;
}
.custom-input :deep(.v-input__control) {
    border-radius: 8px !important;
}
.debit-text {
    color: #2e7d32 !important;
}
.credit-text {
    color: #c62828 !important;
}
.account-chip {
    border-radius: 6px !important;
}
.dr-chip {
    background-color: #e8f5e9 !important;
    color: #2e7d32 !important;
    border: 1px solid #c8e6c9 !important;
}
.cr-chip {
    background-color: #ffebee !important;
    color: #c62828 !important;
    border: 1px solid #ffcdd2 !important;
}
.source-chip {
    background-color: #f1f5f9 !important;
    color: #475569 !important;
    border: 1px solid #cbd5e1 !important;
}
.bg-light {
    background-color: #f8fafc !important;
}
.text-wrap-desc {
    display: inline-block;
    word-break: break-word;
    max-width: 300px;
    line-height: 1.4;
}
.compact-table :deep(th) {
  height: 48px !important;
  font-size: 0.82rem !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--v-primary-base) !important;
  background-color: #f1f5f9 !important;
  font-weight: bold;
  border-bottom: 2px solid #e2e8f0 !important;
}
.compact-table :deep(td) {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}
.compact-table :deep(tr:hover) {
  background-color: #f8fafc !important;
  transition: background-color 0.15s ease;
}
.hover-action {
  transition: transform 0.2s ease;
}
.hover-action:hover {
  transform: scale(1.15);
  color: var(--v-primary-base) !important;
}
.text-caption {
  font-size: 0.75rem !important;
}
</style>

<style>
html body .v-application .general-ledger-page,
html body .v-application .general-ledger-page * {
  font-family: 'Noto Sans Lao', sans-serif !important;
}
</style>