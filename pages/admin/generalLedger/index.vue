<template>
    <div class="text-center">
        <div>
            <v-dialog v-model="dialog" width="90%">
                <GLForm :isUpdate="isEdit" :GLId="selectedId" :key="apFormKey"
                    @close-dialog="dialog = false" @reload="loadTxn">
                </GLForm>
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
                        <v-btn @click="triggerDialog" class="primary" rounded> ເພີ່ມລາຍການ GL </v-btn>
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
                <table border="1" v-if="GLCurrencyGrouping.length > 0">
                    <thead>
                        <tr>
                            <th>ສະກຸນເງິນ</th>
                            <th>ລວມຍອດ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="txn in GLCurrencyGrouping" :key="txn['currency']">
                            <td>{{ txn.currency }}</td>
                            <td style="text-align: right;">{{ numberWithCommas(txn.amount) }}</td>
                        </tr>
                        <tr>
                            <td>ຍອດລວມສະກຸນ LCY</td>
                            <td style="text-align: right;">{{ numberWithCommas(totalLCYAmount) }}</td>
                        </tr>
                    </tbody>
                </table>

            </v-card-text>
            <v-data-table v-if="txnList" :headers="headers" :search="search" :items="txnList">
                <template v-slot:[`item.function`]="{ item }">
                    <v-btn color="primary" text @click="editItem(item)">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.POST`]="{ item }">
                    <v-btn color="primary" text @click="postToPayment(item)">
                        <!-- <i class="fa-regular fa-pen-to-square"></i>
                         -->
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                    </v-btn>
                </template>
                <template v-slot:[`item.amount`]="{ item }">
                    {{ numberWithCommas(item.amount) }}
                </template>
                <template v-slot:[`item.localAmount`]="{ item }">
                    {{ numberWithCommas(item.localAmount) }}
                </template>
                <template v-slot:[`item.rate`]="{ item }">
                    {{ numberWithCommas(item.rate) }}
                </template>
                <template v-slot:[`item.createdAt`]="{ item }">
                    {{ item.createdAt.split('.')[0] }}
                </template>

            </v-data-table>
        </v-card>
    </div>
</template>
<script>
import PoForm from '~/components/po/PoForm.vue'
import PurchasingFormCRUD from '~/components/PurchasingFormCRUD.vue'
import ReceivingFormCRUD from '~/components/ReceivingFormCRUD.vue'
import { confirmSwal, swalSuccess, swalError2, dayCount, getNextDate, getFirstDayOfMonth, getFormatNum } from '~/common'
import GLForm from '~/components/accounting/GLForm.vue'
export default {
    components: { PoForm, PurchasingFormCRUD, ReceivingFormCRUD, GLForm },
    mounted() {
        this.loadTxn()
    },
      middleware: 'auths',
    data() {
        return {
            userId: "",
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
                    text: 'SRC APP REF.',
                    align: 'center',
                    value: 'source',
                    sortable: true,
                },
                { text: 'ຈຳນວນ', align: 'center', value: 'amount' },
                { text: 'ສະກຸນ', align: 'center', value: 'currency.code' },
                { text: 'ອັດຕາແລກປ່ຽນ', align: 'right', value: 'rate' },
                { text: 'DR', align: 'center', value: 'drAccount.accountNumber' },
                { text: 'CR', align: 'center', value: 'crAccount.accountNumber' },
                { text: 'Local amount', align: 'right', value: 'localAmount' },
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
            console.log(`PO HEADER ID ${item.id}`);
            this.selectedId = item.id
            this.isEdit = true;
            this.apFormKey += 1;
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
            try {
                const response = await this.$axios.get("/api/gl/findByDate", { params: { date } })
                this.txnList = response.data;
            } catch (error) {
                swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ' + error);
            }

            this.isloading = false
        },
        async postToPayment(recTxn) {
            const transaction =
            {
                receivingId: recTxn.id,
                bookingDate: recTxn.bookingDate,
                paymentNumber: `POST FROM REC: ${recTxn.id}`,
                payee: recTxn.vendor.name,
                paymentId: null,
                currencyId: recTxn.currencyId,
                rate: recTxn.exchangeRate,
                totalAmount: recTxn.total,
                notes: recTxn.notes,
                update_user: 1,
                drAccount: null,
                crAccount: 1,
                isActive: true
            }
            confirmSwal(this.$swal, 'You are posting to Payment ?', async () => {
                this.isloading = true
                try {
                    const response = await this.$axios.post(`/api/finanicial/ap/header/api/create`, transaction)
                    console.log(`Transaction complete ${JSON.stringify(response.data)}`);
                    swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                } catch (error) {
                    console.error(`Something went wrong ${error}`);
                    swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ ' + error);
                }
                this.isloading = false
            })

        },

    },
    computed: {

        GLCurrencyGrouping() {
            // Object to store the sum of transactions for each currency code
            const sumByCurrency = {};

            // Loop through each transaction
            this.txnList.forEach(transaction => {
                const { amount, currency } = transaction;
                // If the currency code doesn't exist in the sumByCurrency object, initialize it to 0
                if (!sumByCurrency[currency['code']]) {
                    sumByCurrency[currency['code']] = 0;
                }
                // Accumulate the total amount for the currency code
                sumByCurrency[currency['code']] += amount;
            });

            // Display the sum for each currency code
            const listOfCurrency = []
            for (const currencyCode in sumByCurrency) {
                console.log(`Total for ${currencyCode}: ${sumByCurrency[currencyCode]}`);
                listOfCurrency.push({ 'currency': currencyCode, 'amount': sumByCurrency[currencyCode] })
            }

            return listOfCurrency;
        },
        totalLCYAmount() {
            // Loop through each transaction
            let total = this.txnList.reduce((total, item) => {
                return total + item.localAmount;
            }, 0);
            return total;
        }
    }
}
</script>

<style></style>