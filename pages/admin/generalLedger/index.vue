<template>
    <div class="text-center">
        <div>
            <v-dialog v-model="dialog" fullscreen>
                <GLForm :isUpdate="isEdit" :GLId="selectedId" :key="apFormKey"
                    @close-dialog="dialog = false" @reload="loadTxn">
                </GLForm>
            </v-dialog>
        </div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>

        <v-card class="elevation-2 rounded-lg">
            <v-card-title class="pa-4 grey lighten-5">
                <v-layout row wrap class="align-center">
                    <v-col cols="12" md="6" class="d-flex flex-wrap align-center">
                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false"
                            transition="scale-transition" offset-y max-width="290px" min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format"
                                    persistent-hint prepend-icon="mdi-calendar" v-bind="attrs"
                                    @blur="date = parseDate(dateFormatted)" v-on="on" outlined dense class="mr-3 mb-2" style="max-width: 180px;"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>

                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false"
                            transition="scale-transition" offset-y max-width="290px" min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format"
                                    persistent-hint prepend-icon="mdi-calendar" v-bind="attrs"
                                    @blur="date2 = parseDate(dateFormatted2)" v-on="on" outlined dense class="mr-3 mb-2" style="max-width: 180px;"></v-text-field>
                            </template>
                            <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
                        </v-menu>
                        <v-btn @click="triggerDialog" class="primary mb-2 rounded-lg" depressed>
                            <v-icon left>mdi-plus</v-icon>
                            ເພີ່ມລາຍການ GL (JV)
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="6" class="d-flex align-center justify-end">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line
                            outlined dense hide-details class="mr-3" style="max-width: 250px;" />
                        <v-btn @click="loadTxn" class="primary rounded-lg" depressed>
                            <v-icon left>mdi-refresh</v-icon>
                            ດຶງລາຍງານ
                        </v-btn>
                    </v-col>
                </v-layout>
            </v-card-title>

            <v-card-text class="pa-4">
                <v-row>
                    <v-col cols="12" md="4" v-if="GLCurrencyGrouping.length > 0">
                        <v-card outlined class="pa-3 rounded-lg grey lighten-5">
                            <div class="text-subtitle-2 font-weight-bold mb-2 primary--text">ສະຫຼຸບຍອດຕາມສະກຸນເງິນ</div>
                            <table class="summary-table w-100">
                                <thead>
                                    <tr>
                                        <th class="text-left font-weight-bold grey--text text--darken-1">ສະກຸນເງິນ</th>
                                        <th class="text-right font-weight-bold grey--text text--darken-1">ລວມຍອດ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="txn in GLCurrencyGrouping" :key="txn['currency']" class="border-bottom">
                                        <td class="py-1 font-weight-medium">{{ txn.currency }}</td>
                                        <td class="py-1 text-right font-weight-bold">{{ numberWithCommas(txn.amount) }}</td>
                                    </tr>
                                    <tr class="font-weight-black primary--text">
                                        <td class="py-2">ຍອດລວມສະກຸນ LCY (Debits)</td>
                                        <td class="py-2 text-right">{{ numberWithCommas(totalLCYAmount) }} LAK</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-data-table v-if="txnList" :headers="headers" :search="search" :items="txnList" class="elevation-1 border-top compact-table">
                <template v-slot:[`item.function`]="{ item }">
                    <v-btn color="primary" icon small @click="editItem(item)">
                        <v-icon small>mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <template v-slot:[`item.debit`]="{ item }">
                    <span v-if="parseFloat(item.debit) > 0" class="success--text font-weight-bold">
                        {{ numberWithCommas(item.debit) }}
                    </span>
                    <span v-else class="grey--text">-</span>
                </template>
                <template v-slot:[`item.credit`]="{ item }">
                    <span v-if="parseFloat(item.credit) > 0" class="error--text font-weight-bold">
                        {{ numberWithCommas(item.credit) }}
                    </span>
                    <span v-else class="grey--text">-</span>
                </template>
                <template v-slot:[`item.localDebit`]="{ item }">
                    <span v-if="parseFloat(item.localDebit) > 0" class="success--text font-weight-medium">
                        {{ numberWithCommas(item.localDebit) }}
                    </span>
                    <span v-else class="grey--text">-</span>
                </template>
                <template v-slot:[`item.localCredit`]="{ item }">
                    <span v-if="parseFloat(item.localCredit) > 0" class="error--text font-weight-medium">
                        {{ numberWithCommas(item.localCredit) }}
                    </span>
                    <span v-else class="grey--text">-</span>
                </template>
                <template v-slot:[`item.drAccount.accountNumber`]="{ item }">
                    <v-chip v-if="item.drAccount" x-small color="success" outlined label class="font-weight-bold">
                        {{ item.drAccount.accountNumber }}
                    </v-chip>
                    <span v-else class="grey--text text-caption">-</span>
                </template>
                <template v-slot:[`item.crAccount.accountNumber`]="{ item }">
                    <v-chip v-if="item.crAccount" x-small color="error" outlined label class="font-weight-bold">
                        {{ item.crAccount.accountNumber }}
                    </v-chip>
                    <span v-else class="grey--text text-caption">-</span>
                </template>
                <template v-slot:[`item.rate`]="{ item }">
                    {{ numberWithCommas(item.rate) }}
                </template>
                <template v-slot:[`item.createdAt`]="{ item }">
                    {{ item.createdAt ? item.createdAt.split('.')[0].replace('T', ' ') : '-' }}
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import { confirmSwal, swalSuccess, swalError2, getFirstDayOfMonth, getFormatNum } from '~/common'
import GLForm from '~/components/accounting/GLForm.vue'

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
                {
                    text: 'RECID',
                    align: 'center',
                    value: 'id',
                    sortable: true,
                },
                {
                    text: 'ວັນທີ',
                    align: 'center',
                    value: 'bookingDate',
                    sortable: true,
                },
                {
                    text: 'SRC APP',
                    align: 'center',
                    value: 'source',
                    sortable: true,
                },
                {
                    text: 'Reference',
                    align: 'center',
                    value: 'postingReference',
                    sortable: true,
                },
                { text: 'DR Account', align: 'center', value: 'drAccount.accountNumber' },
                { text: 'CR Account', align: 'center', value: 'crAccount.accountNumber' },
                { text: 'Debit', align: 'right', value: 'debit' },
                { text: 'Credit', align: 'right', value: 'credit' },
                { text: 'ສະກຸນ', align: 'center', value: 'currency.code' },
                { text: 'ອັດຕາ', align: 'right', value: 'rate' },
                { text: 'Local Debit', align: 'right', value: 'localDebit' },
                { text: 'Local Credit', align: 'right', value: 'localCredit' },
                { text: 'ເນື້ອໃນ', align: 'center', value: 'description' },
                { text: 'ເວລາສ້າງ', align: 'center', value: 'createdAt' },
                {
                    text: 'ແກ້ໄຂ',
                    align: 'end',
                    value: 'function',
                    sortable: false,
                },
            ],
            date: getFirstDayOfMonth(),
            date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            dateFormatted: this.formatDate(
                getFirstDayOfMonth()
            ),
            dateFormatted2: this.formatDate(
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
            ),
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
        triggerDialog() {
            this.apFormKey += 1;
            this.selectedId = null;
            this.isEdit = false;
            this.dialog = true
        },
        editItem(item) {
            console.log(`GL ITEM ID ${item.id}`);
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
        }
    }
}
</script>

<style scoped>
.summary-table {
    border-collapse: collapse;
}
.summary-table th, .summary-table td {
    padding: 6px 4px;
}
.border-bottom {
    border-bottom: 1px solid #e0e0e0;
}
.border-top {
    border-top: 1px solid #e0e0e0;
}
.w-100 {
    width: 100%;
}
.compact-table :deep(th) {
  height: 48px !important;
  font-size: 0.75rem !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #546e7a !important;
  background-color: #f8f9fa !important;
  font-weight: bold;
}
.compact-table :deep(td) {
  padding-top: 6px !important;
  padding-bottom: 6px !important;
}
</style>