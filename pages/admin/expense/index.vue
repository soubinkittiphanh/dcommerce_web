<template>
    <div>
        <div>
            <v-dialog v-model="dialog" persistent fullscreen>
                <ap-payment :is-edit="isEdit" :payment-head-id="selectedId" @close="triggerDialog" :key="apFormKey"
                    @close-dialog="dialog = false" @reload="loadTxn">
                </ap-payment>
            </v-dialog>
        </div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>

        <v-card outlined class="rounded-lg shadow-sm">
            <v-card-title class="pa-4 d-flex align-center grey lighten-5 border-bottom">
                <v-icon color="primary" class="mr-3">mdi-account-cash</v-icon>
                <div class="d-flex flex-column">
                    <span class="text-h6 font-weight-bold grey--text text--darken-3">ລາຍຈ່າຍພື້ນຖານ (Basic Expense)</span>
                    <span class="grey--text text-caption">ຈັດການ ແລະ ຕິດຕາມລາຍຈ່າຍປົກກະຕິ ແລະ ຕັດຈ່າຍງົບປະມານປະຈຳປີ</span>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="purple" outlined small class="mr-2" to="/admin/expenseBudget">
                    <v-icon left small>mdi-chart-pie</v-icon>
                    ຈັດການງົບປະມານ (Budget Setup)
                </v-btn>
                <v-btn color="info" @click="handlePrintReport" outlined small class="mr-2">
                    <v-icon left small>mdi-printer</v-icon>
                    ພິມລາຍງານ (Print)
                </v-btn>
                <v-btn color="primary" @click="triggerDialog" depressed small class="mr-2">
                    <v-icon left small>mdi-plus</v-icon>
                    ເພີ່ມລາຍຈ່າຍ (New Expense)
                </v-btn>
                <v-btn color="secondary" @click="loadTxn" outlined small :loading="isloading">
                    <v-icon left small>mdi-refresh</v-icon>
                    Sync Data
                </v-btn>
            </v-card-title>

            <v-card-text class="pa-4 grey lighten-4">
                <v-row dense class="align-center">
                    <v-col cols="12" sm="6" md="2">
                        <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted" label="ແຕ່ວັນທີ" prepend-inner-icon="mdi-calendar"
                                    v-bind="attrs" v-on="on" outlined dense hide-details readonly></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="12" sm="6" md="2">
                        <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ" prepend-inner-icon="mdi-calendar"
                                    v-bind="attrs" v-on="on" outlined dense hide-details readonly></v-text-field>
                            </template>
                            <v-date-picker v-model="date2" no-title @input="menu2 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="12" sm="6" md="2">
                        <v-select v-model="sourceFilter" :items="sourceOptions" label="ແຫຼ່ງລາຍຈ່າຍ" outlined dense
                            hide-details prepend-inner-icon="mdi-source-branch" @change="loadTxn"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="search" label="ຄົ້ນຫາລາຍການ, ເລກອ້າງອີງ, ຜູ້ຮັບ..." prepend-inner-icon="mdi-magnify"
                            outlined dense hide-details clearable />
                    </v-col>
                    <v-col cols="12" md="2" class="d-flex align-center">
                        <v-switch v-model="showInactive" label="Show Inactive" dense hide-details class="mt-0 ml-2"
                            color="primary"></v-switch>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider></v-divider>

            <!-- Metrics Summary Cards (Total, Budget Impact, POS Sale Impact) -->
            <v-card-text class="pa-4">
                <v-row dense>
                    <v-col cols="12" sm="4" md="4">
                        <v-card outlined class="metric-card pa-3 d-flex align-center">
                            <v-avatar color="primary lighten-5" size="42" class="mr-3">
                                <v-icon color="primary">mdi-cash-multiple</v-icon>
                            </v-avatar>
                            <div>
                                <div class="grey--text text-caption font-weight-bold">ລວມລາຍຈ່າຍທັງໝົດ (All Net)</div>
                                <div class="text-h6 font-weight-black primary--text">
                                    {{ numberWithFormat(overallTotalAmount) }}
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                        <v-card outlined class="metric-card pa-3 d-flex align-center">
                            <v-avatar color="purple lighten-5" size="42" class="mr-3">
                                <v-icon color="purple">mdi-chart-pie</v-icon>
                            </v-avatar>
                            <div>
                                <div class="grey--text text-caption font-weight-bold">ຕັດຈາກງົບປະມານ (Budget Source)</div>
                                <div class="text-h6 font-weight-black purple--text">
                                    {{ numberWithFormat(budgetSourceTotalAmount) }}
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="4" md="4">
                        <v-card outlined class="metric-card pa-3 d-flex align-center">
                            <v-avatar color="teal lighten-5" size="42" class="mr-3">
                                <v-icon color="teal">mdi-cash-register</v-icon>
                            </v-avatar>
                            <div>
                                <div class="grey--text text-caption font-weight-bold">ລາຍຈ່າຍ POS (POS Operational)</div>
                                <div class="text-h6 font-weight-black teal--text">
                                    {{ numberWithFormat(posSourceTotalAmount) }}
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Multi-Currency Sub-metrics if any -->
                <v-row dense class="mt-2" v-if="paymentCurrencyGrouping.length > 1">
                    <v-col v-for="txn in paymentCurrencyGrouping" :key="txn['currency']" cols="12" sm="6" md="3">
                        <v-chip outlined small class="mr-2 mb-1" color="secondary">
                            {{ txn.currency }}: {{ numberWithFormat(txn.amount) }}
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-data-table v-if="filteredTxnList" :headers="headers" :search="search" :items="filteredTxnList" dense
                class="compact-table" :item-class="getItemClass">
                <template v-slot:[`item.paymentNumber`]="{ item }">
                    <span class="font-weight-bold primary--text">{{ item.paymentNumber }}</span>
                </template>

                <template v-slot:[`item.expenseSource`]="{ item }">
                    <v-tooltip bottom v-if="item.expenseSource === 'BUDGET'">
                        <template v-slot:activator="{ on, attrs }">
                            <v-chip x-small color="purple" dark label v-bind="attrs" v-on="on">
                                <v-icon left x-small>mdi-chart-pie</v-icon>
                                BUDGET
                            </v-chip>
                        </template>
                        <span>{{ item.budget ? `${item.budget.name} (${item.budget.year})` : 'Annual Budget' }}</span>
                    </v-tooltip>
                    <v-chip v-else x-small color="teal" dark label>
                        <v-icon left x-small>mdi-cash-register</v-icon>
                        POS SALE
                    </v-chip>
                </template>

                <template v-slot:[`item.totalAmount`]="{ item }">
                    <div class="text-right font-weight-bold">
                        {{ numberWithFormat(item.totalAmount) }}
                    </div>
                </template>

                <template v-slot:[`item.currency.code`]="{ item }">
                    <v-chip x-small outlined color="secondary" label>{{ item.currency ? item.currency.code : '' }}</v-chip>
                </template>

                <template v-slot:[`item.isActive`]="{ item }">
                    <v-chip x-small :color="item.isActive ? 'success' : 'grey'" outlined label>
                        {{ item.isActive ? 'Active' : 'Inactive' }}
                    </v-chip>
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
import ApPayment from '~/components/accounting/ApPayment.vue'
import { getFirstDayOfMonth, getFormatNum } from '~/common'
import { printBasicExpenseReport } from '~/common/basicExpensePrintTemplate'
import { mapGetters } from 'vuex'

export default {
    components: { ApPayment },
    mounted() {
        this.loadTxn()
    },
    data() {
        return {
            userId: "",
            search: "",
            sourceFilter: "ALL",
            sourceOptions: [
                { text: "ທັງໝົດ (All Sources)", value: "ALL" },
                { text: "ງົບປະມານ (Budget Source)", value: "BUDGET" },
                { text: "ລາຍຈ່າຍປົກກະຕິ (POS Operation)", value: "POS_SALE" }
            ],
            isEdit: false,
            dialog: false,
            apFormKey: 1,
            isloading: false,
            menu1: false,
            menu2: false,
            txnList: [],
            selectedId: '',
            showInactive: false,
            headers: [
                {
                    text: 'ວັນທີ',
                    align: 'center',
                    value: 'bookingDate',
                    sortable: true,
                },
                { text: 'ເລກອ້າງອີງ', align: 'center', value: 'paymentNumber' },
                { text: 'ແຫຼ່ງທີ່ມາ', align: 'center', value: 'expenseSource' },
                { text: 'ຍອດລວມ', align: 'center', value: 'totalAmount' },
                { text: 'ສະກຸນ', align: 'center', value: 'currency.code' },
                { text: 'ອັດຕາແລກປ່ຽນ', align: 'center', value: 'rate' },
                { text: 'ຜູ້ຮັບເງິນ', align: 'center', value: 'payee' },
                { text: 'ຊຳລະດ້ວຍ', align: 'center', value: 'payment.payment_code' },
                { text: 'ເບື້ອງຫນີ້', align: 'center', value: 'drAccount.accountName' },
                { text: 'ເບື້ອງມີ', align: 'center', value: 'crAccount.accountName' },
                { text: 'ເນື້ອໃນ', align: 'center', value: 'notes' },
                { text: 'ສະຖານະ', align: 'center', value: 'isActive' },
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
        triggerDialog() {
            this.apFormKey += 1;
            this.selectedId = null;
            this.isEdit = false;
            this.dialog = true
        },
        formatDate(date) {
            if (!date) return null
            const formattedDate = this.formatDateToISO(date);
            const [year, month, day] = formattedDate.split('-')
            return `${month}/${day}/${year}`
        },
        formatDateToISO(date) {
            if (!(date instanceof Date)) date = new Date(date);
            const year = date.getFullYear();
            const month = `${date.getMonth() + 1}`.padStart(2, '0');
            const day = `${date.getDate()}`.padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        numberWithFormat(val) {
            return getFormatNum(val)
        },
        editItem(item) {
            this.selectedId = item.id
            this.isEdit = true;
            this.apFormKey += 1;
            this.dialog = true
        },

        handlePrintReport() {
            const company = this.findAllCompany && this.findAllCompany.length > 0 ? this.findAllCompany[0] : {}
            printBasicExpenseReport({
                transactions: this.filteredTxnList,
                filters: {
                    dateFrom: this.date,
                    dateTo: this.date2,
                    sourceFilter: this.sourceFilter
                },
                summary: {
                    overallTotal: this.overallTotalAmount,
                    budgetTotal: this.budgetSourceTotalAmount,
                    posTotal: this.posSourceTotalAmount
                },
                companyData: company,
                user: typeof this.user === 'object' ? this.user : { name: this.user || 'Admin' }
            })
        },

        async loadTxn() {
            this.isloading = true
            const date = {
                startDate: this.date,
                endDate: this.date2,
            }
            const params = { date }
            if (this.sourceFilter && this.sourceFilter !== 'ALL') {
                params.expenseSource = this.sourceFilter
            }

            try {
                const response = await this.$axios.get("/api/finanicial/ap/header/findByDate", { params })
                this.txnList = (response.data || []).map(item => ({
                    ...item,
                    bookingDate: item.bookingDate ? item.bookingDate.split('T')[0] : ''
                }))
            } catch (error) {
                console.error("Failed to load expenses:", error)
            } finally {
                this.isloading = false
            }
        },
        getItemClass(item) {
            return item.isActive === false ? 'inactive-row' : ''
        }
    },
    computed: {
        ...mapGetters(['user', 'findAllCompany']),
        filteredTxnList() {
            let list = this.txnList
            if (!this.showInactive) {
                list = list.filter(item => item.isActive !== false)
            }
            if (this.sourceFilter && this.sourceFilter !== 'ALL') {
                list = list.filter(item => item.expenseSource === this.sourceFilter)
            }
            return list
        },
        overallTotalAmount() {
            return this.filteredTxnList.reduce((sum, item) => sum + (parseFloat(item.totalAmount) || 0), 0)
        },
        budgetSourceTotalAmount() {
            return this.filteredTxnList
                .filter(item => item.expenseSource === 'BUDGET')
                .reduce((sum, item) => sum + (parseFloat(item.totalAmount) || 0), 0)
        },
        posSourceTotalAmount() {
            return this.filteredTxnList
                .filter(item => item.expenseSource === 'POS_SALE' || !item.expenseSource)
                .reduce((sum, item) => sum + (parseFloat(item.totalAmount) || 0), 0)
        },
        paymentCurrencyGrouping() {
            const sumByCurrency = {};
            this.filteredTxnList.forEach(transaction => {
                const totalAmount = parseFloat(transaction.totalAmount) || 0;
                const currencyCode = transaction.currency?.code || 'LAK';
                if (!sumByCurrency[currencyCode]) {
                    sumByCurrency[currencyCode] = 0;
                }
                sumByCurrency[currencyCode] += totalAmount;
            });

            const listOfCurrency = []
            for (const currencyCode in sumByCurrency) {
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
    font-size: 0.75rem !important;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #757575 !important;
    background-color: #f8f9fa !important;
    font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.compact-table :deep(td) {
    height: 44px !important;
    font-size: 0.875rem !important;
    font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

.v-text-field--outlined :deep(fieldset) {
    border-color: #e0e0e0;
}

.inactive-row {
    background-color: #fafafa !important;
    color: #9e9e9e !important;
}

.inactive-row :deep(td) {
    opacity: 0.7;
}

.text-caption,
.caption,
span.text-caption,
div.text-caption,
p.text-caption,
:deep(.text-caption),
:deep(.caption),
:deep(span.text-caption),
:deep(div.text-caption),
:deep(.text-h6),
:deep(.text-subtitle-1),
:deep(.text-subtitle-2) {
    font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif !important;
}

* {
    font-family: 'Noto Sans Lao', 'NotoSansLaoUI-Regular', sans-serif;
}
</style>