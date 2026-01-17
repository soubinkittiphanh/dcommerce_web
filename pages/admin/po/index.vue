<template>
    <div class="text-center">
        <div>
            <v-dialog v-model="dialog" fullscreen>
                <PurchasingFormCRUD :is-update="isEdit" :headerId="selectedId" @close="triggerDialog" :key="apFormKey"
                    @close-dialog="dialog = false" @reload="loadTxn">
                </PurchasingFormCRUD>
            </v-dialog>
            <v-dialog v-model="receivingDialog" width="90%">
                <ReceivingFormCRUD :POTransaction="currentPO" sourceAPLID="PO" @close="triggerDialog" :key="apFormKey"
                    @close-dialog="receivingDialog = false" @reload="loadTxn">
                </ReceivingFormCRUD>
            </v-dialog>
        </div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>

        <v-card>
            <v-card-title>
                <v-layout row wrap>
                    <v-col cols="6">
                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false"
                            transition="scale-transition" offset-y max-width="290px" min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ:" hint="MM/DD/YYYY format"
                                    persistent-hint prepend-icon="mdi-calendar" v-bind="attrs"
                                    @blur="date = parseDate(dateFormatted)" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>

                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false"
                            transition="scale-transition" offset-y max-width="290px" min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ:" hint="MM/DD/YYYY format"
                                    persistent-hint prepend-icon="mdi-calendar" v-bind="attrs"
                                    @blur="date2 = parseDate(dateFormatted2)" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
                        </v-menu>
                        <v-btn @click="triggerDialog" class="primary" rounded> ສັ່ງເຄື່ອງ </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="ຊອກຫາ" single-line
                            hide-detailsx />
                        <v-text-field v-model="userId" append-icon="mdi-magnify" label="ລະຫັດຜູ້ຂາຍ" single-line
                            hide-detailsx />
                        <v-btn @click="loadTxn" class="primary" size="large" variant="outlined" rounded> ດຶງລາຍງານ
                        </v-btn>
                    </v-col>
                </v-layout>
            </v-card-title>
            <!-- <v-data-table v-if="orderHeaderList" :headers="headers" :search="search" :items="orderHeaderList"> -->
            <v-card-text>
                <table border="1" v-if="purchaseCurrencyGrouping.length > 0">
                    <thead>
                        <tr>
                            <th>ສະກຸນເງິນ</th>
                            <th>ລວມຍອດ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="txn in purchaseCurrencyGrouping" :key="txn['currency']">
                            <td>{{ txn.currency }}</td>
                            <td style="text-align: right;">{{ numberWithCommas(txn.amount) }}</td>
                        </tr>
                        <!-- <tr>
                            <td>February</td>
                            <td>$1500</td>
                        </tr> -->
                        <!-- Add more rows for other months -->
                        <!-- <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$2500</strong></td>
                        </tr> -->
                    </tbody>
                </table>

            </v-card-text>
            <v-data-table v-if="txnList" :headers="headers" :search="search" :items="txnList">
                <template v-slot:[`item.function`]="{ item }">
                    <v-btn color="primary" text @click="editItem(item)">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.postReceiving`]="{ item }">
                    <v-btn color="primary" text @click="receive(item)">
                        <i class="fa-solid fa-check"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.total`]="{ item }">
                    {{ numberWithCommas(item.total) }}

                </template>
                <template v-slot:[`item.exchangeRate`]="{ item }">
                    {{ numberWithCommas(item.exchangeRate) }}
                </template>

            </v-data-table>
        </v-card>
    </div>
</template>
<script>
import PoForm from '~/components/po/PoForm.vue'
import PurchasingFormCRUD from '~/components/PurchasingFormCRUD.vue'
import ReceivingFormCRUD from '~/components/ReceivingFormCRUD.vue'
import { swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
export default {
    components: { PoForm, PurchasingFormCRUD, ReceivingFormCRUD },
    mounted() {
        this.loadTxn()
    },
    data() {
        return {
            userId: "",
            search: "",
            isEdit: false,
            dialog: false,
            receivingDialog: false,
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
                { text: 'ເນື້ອໃນ', align: 'center', value: 'notes' },
                { text: 'ສະກຸນ', align: 'center', value: 'currency.code' },
                { text: 'ອັດຕາແລກປ່ຽນ', align: 'right', value: 'exchangeRate' },
                { text: 'ຍອດລວມ', align: 'right', value: 'total' },
                { text: 'ສະຖານະ', align: 'center', value: 'status' },
                { text: 'ເວລາສ້າງ', align: 'center', value: 'createdAt' },
                {
                    text: 'ແກ້ໄຂ',
                    align: 'end',
                    value: 'function',
                    sortable: false,
                },
                {
                    text: 'ຮັບເຄື່ອງ',
                    align: 'end',
                    value: 'postReceiving',
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
    computed: {
        currentPO() {
            return this.txnList.find(el => el.id == this.selectedId)
        },
        purchaseCurrencyGrouping() {
            // Object to store the sum of transactions for each currency code
            const sumByCurrency = {};

            // Loop through each transaction
            this.txnList.forEach(transaction => {
                const { total, currency } = transaction;
                // If the currency code doesn't exist in the sumByCurrency object, initialize it to 0
                if (!sumByCurrency[currency['code']]) {
                    sumByCurrency[currency['code']] = 0;
                }
                // Accumulate the total amount for the currency code
                sumByCurrency[currency['code']] += total;
            });

            // Display the sum for each currency code
            const listOfCurrency = []
            for (const currencyCode in sumByCurrency) {
                console.log(`Total for ${currencyCode}: ${sumByCurrency[currencyCode]}`);
                listOfCurrency.push({ 'currency': currencyCode, 'amount': sumByCurrency[currencyCode] })
            }

            return listOfCurrency;
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
            console.log(`PO HEADER ID ${item.id}`);
            this.selectedId = item.id
            this.isEdit = true;
            this.apFormKey += 1;
            this.dialog = true
        },
        receive(item) {
            console.log(`PO HEADER ID ${item.id}`);
            this.selectedId = item.id
            this.isEdit = true;
            this.apFormKey += 1;
            this.receivingDialog = true
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
            // TODO: FIX LOAD TRANSACTION BASE ON DATE SELECTED
            const date = {
                startDate: this.date,
                endDate: this.date2,
            }
            await this.$axios.get("/api/purchasing/findByDate", { params: { date } }).then(response => {
                this.txnList = [];
                for (const iterator of response.data) {
                    iterator['bookingDate'] = iterator['bookingDate'].split('T')[0]
                    this.txnList.push(iterator)
                }
                // for (let element in response.data) {
                //     element['bookingDate'] = element['bookingDate'].split('T')[0]
                //     this.txnList.push(response.data[element])
                // }
                console.log("====> " + this.txnList[0]);
            }).catch(error => {

            })
            this.isloading = false
        }

    }
}
</script>

<style></style>