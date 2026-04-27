<template>
    <div>
        <div>
            <v-dialog v-model="dialog" persistent fullscreen>
                <ar-receivable :is-edit="isEdit" :receive-header-id="selectedId" @close="triggerDialog" :key="arFormKey"
                    @close-dialog="dialog = false" @reload="loadTxn">
                </ar-receivable>
            </v-dialog>
        </div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>

        <v-card outlined class="rounded-lg shadow-sm">
            <v-card-title class="pa-4 d-flex align-center grey lighten-5 border-bottom">
                <v-icon color="primary" class="mr-3">mdi-account-arrow-left</v-icon>
                <div class="d-flex flex-column text-left">
                    <span class="text-h6 font-weight-bold grey--text text--darken-3">Accounts Receivable</span>
                    <span class=" grey--text">Track and manage customer payments</span>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="triggerDialog" depressed small class="mr-2">
                    <v-icon left small>mdi-plus</v-icon>
                    New Receipt
                </v-btn>
                <v-btn color="secondary" @click="loadTxn" outlined small :loading="isloading">
                    <v-icon left small>mdi-refresh</v-icon>
                    Sync Data
                </v-btn>
            </v-card-title>

            <v-card-text class="pa-4 grey lighten-4">
                <v-row dense class="align-center">
                    <v-col cols="12" md="2">
                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted" label="From" prepend-inner-icon="mdi-calendar"
                                    v-bind="attrs" v-on="on" outlined dense hide-details readonly></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted2" label="To" prepend-inner-icon="mdi-calendar"
                                    v-bind="attrs" v-on="on" outlined dense hide-details readonly></v-text-field>
                            </template>
                            <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field v-model="userId" label="Payer ID" prepend-inner-icon="mdi-account" outlined dense
                            hide-details clearable />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="search" label="Search transactions..." prepend-inner-icon="mdi-magnify"
                            outlined dense hide-details clearable />
                    </v-col>
                </v-row>
            </v-card-text>
            <!-- <v-data-table v-if="orderHeaderList" :headers="headers" :search="search" :items="orderHeaderList"> -->
            <v-divider></v-divider>

            <v-card-text class="pa-4">
                <v-row dense v-if="paymentCurrencyGrouping.length > 0">
                    <v-col v-for="txn in paymentCurrencyGrouping" :key="txn['currency']" cols="12" sm="6" md="3">
                        <v-card outlined class="metric-card pa-3 d-flex align-center">
                            <v-avatar color="primary lighten-5" size="40" class="mr-3">
                                <v-icon color="primary" small>mdi-currency-{{ txn.currency.toLowerCase() }}</v-icon>
                            </v-avatar>
                            <div>
                                <div class=" grey--text font-weight-bold">{{ txn.currency }} Net</div>
                                <div class="text-h6 font-weight-black">{{ numberWithFormat(txn.amount) }}</div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-data-table v-if="txnList" :headers="headers" :search="search" :items="txnList" dense
                class="compact-table">
                <template v-slot:[`item.paymentNumber`]="{ item }">
                    <span class="font-weight-bold primary--text">{{ item.paymentNumber }}</span>
                </template>

                <template v-slot:[`item.totalAmount`]="{ item }">
                    <div class="text-right font-weight-bold">
                        {{ numberWithFormat(item.totalAmount) }}
                    </div>
                </template>

                <template v-slot:[`item.currency.code`]="{ item }">
                    <v-chip x-small outlined color="secondary" label>{{ item.currency.code }}</v-chip>
                </template>

                <template v-slot:[`item.function`]="{ item }">
                    <v-btn icon small color="primary" @click="editItem(item)">
                        <v-icon small>mdi-pencil</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>
<script>
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import ArReceivable from '~/components/accounting/ArReceivable.vue'
export default {
    components: { ArReceivable },
    mounted() {
        this.loadTxn()
    },
    data() {
        return {
            userId: "",
            search: "",
            isEdit: false,
            dialog: false,
            arFormKey: 1,
            isloading: false,
            menu1: false,
            menu2: false,
            txnList: [],
            selectedId: '',
            headers: [
                {
                    text: 'ວັນທີ',
                    align: 'center',
                    value: 'bookingDate',
                    sortable: true,
                },
                { text: 'ເລກອ້າງອີງ', align: 'center', value: 'paymentNumber' },
                { text: 'ຍອດລວມ', align: 'center', value: 'totalAmount' },
                { text: 'ສະກຸນ', align: 'center', value: 'currency.code' },
                { text: 'ອັດຕາແລກປ່ຽນ', align: 'center', value: 'rate' },
                { text: 'ຊຳລະດ້ວຍ', align: 'center', value: 'payment.payment_code' },
                { text: 'ເບື້ອງຫນີ້', align: 'center', value: 'drAccount' },
                { text: 'ເບື້ອງມີ', align: 'center', value: 'crAccount' },
                { text: 'ເນື້ອໃນ', align: 'center', value: 'notes' },
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
    }, watch: {
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
        triggerDialog() {
            this.arFormKey += 1;
            this.selectedId = null;
            this.isEdit = false;
            this.dialog = true
        },
        numberWithFormat(val) {
            return getFormatNum(val)
        },
        editItem(item) {
            this.selectedId = item.id
            this.isEdit = true;
            this.arFormKey += 1;
            this.dialog = true
        },
        formatDate(date) {
            if (!date) return null
            console.log("DATE FORMAT METHOD1: " + date);
            const formattedDate = this.formatDateToISO(date);
            const [year, month, day] = formattedDate.split('-')
            return `${month}/${day}/${year}`
        },
        parseDate(date) {
            console.log("DATE PARSE METHOD1: " + date);
            if (!date) return null
            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        formatDateToISO(date) {
            if (!(date instanceof Date)) date = new Date(date);
            const year = date.getFullYear();
            const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-indexed
            const day = `${date.getDate()}`.padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        async loadTxn() {
            this.isloading = true
            const date = {
                startDate: this.date,
                endDate: this.date2,
            }
            await this.$axios.get("/api/finanicial/ar/header/findByDate", { params: { date } }).then(response => {
                this.txnList = [];
                for (const iterator of response.data) {
                    iterator['bookingDate'] = iterator['bookingDate'].split('T')[0]
                    this.txnList.push(iterator)
                }
                console.log("====> " + this.txnList[0]);
            }).catch(error => {

            })
            this.isloading = false
        }

    },
    computed: {
        paymentCurrencyGrouping() {
            // Object to store the sum of transactions for each currency code
            const sumByCurrency = {};

            // Loop through each transaction
            this.txnList.forEach(transaction => {
                const { totalAmount, currency } = transaction;
                // If the currency code doesn't exist in the sumByCurrency object, initialize it to 0
                if (!sumByCurrency[currency.code]) {
                    sumByCurrency[currency.code] = 0;
                }
                // Accumulate the total amount for the currency code
                sumByCurrency[currency.code] += totalAmount;
            });

            // Display the sum for each currency code
            const listOfCurrency = []
            for (const currencyCode in sumByCurrency) {
                console.log(`Total for ${currencyCode}: ${sumByCurrency[currencyCode]}`);
                listOfCurrency.push({ 'currency': currencyCode, 'amount': sumByCurrency[currencyCode] })
            }

            return listOfCurrency;
        }
    }
}
</script>

<style scoped>
.border-bottom {
    border-bottom: 1px solid #e0e0e0 !important;
}

.metric-card {
    background-color: white !important;
    border: 1px solid #e0e0e0 !important;
    transition: all 0.3s ease;
}

.metric-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
    border-color: var(--v-primary-base) !important;
}

.shadow-sm {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
}

.compact-table :deep(th) {
    height: 44px !important;
    font-size: 0.7rem !important;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #757575 !important;
    background-color: #f8f9fa !important;
}

.compact-table :deep(td) {
    height: 44px !important;
    font-size: 0.875rem !important;
}

.v-text-field--outlined :deep(fieldset) {
    border-color: #e0e0e0;
}
</style>