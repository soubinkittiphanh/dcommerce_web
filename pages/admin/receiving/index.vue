<template>
    <div class="po-container">
        <!-- Dialogs -->
        <div>
            <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" persistent>
                <ReceivingFormCRUD :is-update="isEdit" :headerId="selectedId" :key="apFormKey"
                    @close-dialog="dialog = false" @reload="loadTxn">
                </ReceivingFormCRUD>
            </v-dialog>
        </div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>

        <!-- Header Section -->
        <header class="report-header pb-2">
            <div class="d-flex justify-space-between align-center flex-wrap">
                <div class="d-flex align-center">
                    <v-icon color="primary" class="mr-2" size="24">mdi-clipboard-list-outline</v-icon>
                    <div>
                        <h1 class="text-h5 font-weight-black primary--text mb-0">ລາຍການບິນຮັບເຄື່ອງ</h1>
                        <span class="text-caption grey--text text--darken-1">ຈັດການ ແລະ ຕິດຕາມໃບຮັບສິນຄ້າຂາເຂົ້າ</span>
                    </div>
                </div>
                <div class="d-flex align-center">
                    <v-btn color="success" dark small depressed @click="triggerDialog" class="action-btn px-4 mr-2">
                        <v-icon left small>mdi-plus</v-icon>ຮັບເຄື່ອງ
                    </v-btn>
                    <v-btn color="primary" small depressed @click="loadTxn" :loading="isloading" class="action-btn px-2">
                        <v-icon small>mdi-refresh</v-icon>
                    </v-btn>
                </div>
            </div>
        </header>

        <!-- Overview Statistics -->
        <v-row class="mb-3" dense>
            <!-- Total Receives Summary -->
            <v-col cols="12" md="4">
                <v-card class="stat-card main-stat" color="primary" dark flat>
                    <div class="pa-3 d-flex align-center justify-space-between">
                        <div>
                            <span class="text-caption opacity-80">ໃບຮັບເຄື່ອງທັງໝົດ</span>
                            <div class="text-h5 font-weight-black mt-1">{{ totalReceives }}</div>
                            <span class="text-caption opacity-80">ລາຍການຮັບສິນຄ້າທັງໝົດໃນໄລຍະນີ້</span>
                        </div>
                        <v-avatar color="rgba(255,255,255,0.2)" size="40">
                            <v-icon color="white" small>mdi-file-document-box-multiple-outline</v-icon>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <!-- Currency Summary -->
            <v-col cols="12" md="8">
                <v-card outlined class="compact-card" height="100%">
                    <div class="d-flex align-center pa-2 border-bottom">
                        <v-icon x-small color="primary" class="mr-1">mdi-currency-usd-circle</v-icon>
                        <span class="text-caption font-weight-bold">ສະຫຼຸບສະກຸນເງິນ (Currency Summary)</span>
                    </div>
                    <v-simple-table dense class="currency-table-compact" v-if="purchaseCurrencyGrouping.length > 0">
                        <tbody>
                            <tr v-for="currency in purchaseCurrencyGrouping" :key="currency.currency">
                                <td><span class="text-tiny font-weight-black primary--text">{{ currency.currency }}</span></td>
                                <td class="text-right text-tiny font-weight-black">{{ numberWithCommas(currency.amount) }}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                    <div v-else class="text-center pa-2 text-caption grey--text">ບໍ່ມີຂໍ້ມູນສະກຸນເງິນ</div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Filters Section -->
        <v-card class="filter-card pa-2 mb-3" outlined>
            <v-row align="center" dense>
                <v-col cols="12" md="2">
                    <v-menu v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="dateFormatted" label="ຈາກວັນທີ" prepend-inner-icon="mdi-calendar" readonly 
                                v-bind="attrs" v-on="on" outlined dense hide-details class="compact-input"></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title @input="menu1 = false" color="primary" dense></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" md="2">
                    <v-menu v-model="menu2" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-model="dateFormatted2" label="ຫາວັນທີ" prepend-inner-icon="mdi-calendar" readonly 
                                v-bind="attrs" v-on="on" outlined dense hide-details class="compact-input"></v-text-field>
                        </template>
                        <v-date-picker v-model="date2" no-title @input="menu2 = false" color="primary" dense></v-date-picker>
                    </v-menu>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field v-model="userId" label="ລະຫັດຜູ້ຂາຍ" prepend-inner-icon="mdi-account" 
                        clearable outlined dense hide-details class="compact-input"></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field v-model="search" label="ຊອກຫາ..." prepend-inner-icon="mdi-magnify" 
                        clearable outlined dense hide-details class="compact-input"></v-text-field>
                </v-col>
                <v-col cols="12" md="2" class="d-flex align-center">
                    <v-checkbox
                        v-model="showInactive"
                        label="ສະແດງລາຍການທີ່ປິດໃຊ້ງານ"
                        hide-details
                        dense
                        color="error"
                        class="mt-0 pt-0"
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" md="2">
                    <v-btn color="primary" block @click="loadTxn" :loading="isloading" class="font-weight-bold action-btn" small height="36">
                        ດຶງຂໍ້ມູນ
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>

        <!-- Data Table Section -->
        <v-card class="table-card" outlined>
            <v-data-table v-if="filteredTxnList" :headers="enhancedHeaders" :search="search" :items="filteredTxnList" 
                class="compact-table" :items-per-page="10" dense
                :footer-props="{ 'items-per-page-options': [10, 20, 50, -1] }">
                
                <template v-slot:[`item.id`]="{ item }">
                    <span class="text-caption font-weight-black primary--text">#{{ item.id }}</span>
                </template>

                <template v-slot:[`item.poHeader.id`]="{ item }">
                    <span v-if="item.poHeader" class="text-caption font-weight-bold grey--text text--darken-2">#{{ item.poHeader.id }}</span>
                    <span v-else class="text-caption font-weight-light grey--text">-</span>
                </template>

                <template v-slot:[`item.bookingDate`]="{ item }">
                    <span class="text-tiny grey--text text--darken-3">{{ item.bookingDate }}</span>
                </template>

                <template v-slot:[`item.createdAt`]="{ item }">
                    <span class="text-tiny grey--text text--darken-3">{{ formatDateTime(item.createdAt) }}</span>
                </template>

                <template v-slot:[`item.status`]="{ item }">
                    <v-chip x-small :color="item.isActive ? 'success' : 'error'" dark class="font-weight-black">
                        {{ item.isActive ? 'ເປີດໃຊ້ງານ' : 'ປິດໃຊ້ງານ' }}
                    </v-chip>
                </template>

                <template v-slot:[`item.currency.code`]="{ item }">
                    <span class="text-tiny font-weight-black grey--text">{{ item.currency?.code || 'LAK' }}</span>
                </template>

                <template v-slot:[`item.exchangeRate`]="{ item }">
                    <span class="text-caption">{{ numberWithCommas(item.exchangeRate) }}</span>
                </template>

                <template v-slot:[`item.total`]="{ item }">
                    <span class="text-caption font-weight-black success--text">{{ numberWithCommas(item.total) }}</span>
                </template>

                <template v-slot:[`item.function`]="{ item }">
                    <div class="d-flex justify-center">
                        <v-btn icon x-small color="primary" @click="editItem(item)">
                            <v-icon x-small>mdi-pencil</v-icon>
                        </v-btn>
                    </div>
                </template>

                <template v-slot:[`item.POST`]="{ item }">
                    <v-btn 
                        x-small 
                        depressed 
                        :color="isItemPosted(item) ? 'grey lighten-2' : 'primary'" 
                        :class="[isItemPosted(item) ? 'grey--text text--darken-1' : 'white--text', 'font-weight-bold px-2']"
                        :disabled="item.isActive === false || item.isActive === 0 || isItemPosted(item)" 
                        @click="postToPayment(item)"
                    >
                        <v-icon x-small left :color="isItemPosted(item) ? 'success' : ''">
                            {{ isItemPosted(item) ? 'mdi-check-circle' : 'mdi-file-document-outline' }}
                        </v-icon>
                        {{ isItemPosted(item) ? 'Posted AP' : 'Post AP' }}
                    </v-btn>
                </template>

                <template v-slot:no-data>
                    <div class="text-center pa-6">
                        <v-icon size="48" color="grey lighten-3">mdi-file-document-outline</v-icon>
                        <div class="text-caption grey--text mt-2">ບໍ່ພົບຂໍ້ມູນ</div>
                    </div>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import PoForm from '~/components/po/PoForm.vue'
import PurchasingFormCRUD from '~/components/PurchasingFormCRUD.vue'
import ReceivingFormCRUD from '~/components/ReceivingFormCRUD.vue'
import { confirmSwal, swalSuccess, swalError2, getFirstDayOfMonth, getFormatNum } from '~/common'

export default {
    name: 'ReceivingDashboard',
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
            apFormKey: 1,
            isloading: false,
            menu1: false,
            menu2: false,
            showInactive: false,
            txnList: [],
            postedReceiveMap: {},
            selectedId: '',
            enhancedHeaders: [
                { text: 'ເລກບິນຮັບ', value: 'id', align: 'center', sortable: true, width: '90px' },
                { text: 'ເລກບິນ PO', value: 'poHeader.id', align: 'center', sortable: true, width: '90px' },
                { text: 'ວັນທີຮັບ', value: 'bookingDate', align: 'center', sortable: true, width: '100px' },
                { text: 'ເວລາລົງ', value: 'createdAt', align: 'center', sortable: false, width: '120px' },
                { text: 'ຜູ້ຂາຍ', value: 'vendor.name', align: 'left', width: '150px' },
                { text: 'ເນື້ອໃນ', value: 'notes', align: 'left', width: '150px' },
                { text: 'ສະກຸນ', value: 'currency.code', align: 'center', width: '70px' },
                { text: 'ອັດຕາແລກປ່ຽນ', value: 'exchangeRate', align: 'right', width: '100px' },
                { text: 'ຍອດລວມ', value: 'total', align: 'right', sortable: true, width: '100px' },
                { text: 'ສະຖານະ', value: 'status', align: 'center', width: '100px' },
                { text: 'ຈັດການ', value: 'function', align: 'center', sortable: false, width: '80px' },
                { text: 'Post AP', value: 'POST', align: 'center', sortable: false, width: '110px' },
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
        formatDateTime(dateTimeStr) {
            if (!dateTimeStr) return ''
            const dateObj = new Date(dateTimeStr)
            if (isNaN(dateObj.getTime())) return dateTimeStr
            try {
                return new Intl.DateTimeFormat('en-GB', {
                    timeZone: 'Asia/Bangkok',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).format(dateObj).replace(',', '')
            } catch (error) {
                return dateTimeStr
            }
        },
        isItemPosted(item) {
            if (!item) return false
            return !!(
                item.isPosted === true || 
                item.isPosted === 1 || 
                item.postedToAp === true || 
                item.isPost === true || 
                item.isPostAp === true || 
                item.apInvoiceId != null || 
                item.apInvoice != null || 
                (this.postedReceiveMap && this.postedReceiveMap[String(item.id)])
            )
        },
        async loadTxn() {
            this.isloading = true
            const date = {
                startDate: this.date,
                endDate: this.date2,
            }
            try {
                const [recRes, apRes] = await Promise.allSettled([
                    this.$axios.get("/api/receiving/findByDate", { params: { date } }),
                    this.$axios.get("/api/ap-invoices", { 
                        params: { 
                            limit: 1000, 
                            showCancelled: false 
                        } 
                    })
                ])

                const postedMap = {}
                if (apRes.status === 'fulfilled' && apRes.value?.data) {
                    const invoices = apRes.value.data?.data?.invoices || 
                                     apRes.value.data?.data || 
                                     apRes.value.data?.invoices || 
                                     apRes.value.data || []
                    if (Array.isArray(invoices)) {
                        for (const inv of invoices) {
                            if (inv.status && String(inv.status).toLowerCase() === 'cancelled') continue
                            if (inv.vendorInvoiceNumber) {
                                const str = String(inv.vendorInvoiceNumber).trim()
                                const match = str.match(/RECEIVE[-_]?(\d+)/i)
                                if (match && match[1]) {
                                    postedMap[String(match[1])] = inv
                                } else {
                                    postedMap[str] = inv
                                }
                            }
                            if (inv.description) {
                                const descMatch = String(inv.description).match(/Receiving\s*#?(\d+)/i)
                                if (descMatch && descMatch[1] && !postedMap[String(descMatch[1])]) {
                                    postedMap[String(descMatch[1])] = inv
                                }
                            }
                        }
                    }
                }
                this.postedReceiveMap = postedMap

                this.txnList = []
                if (recRes.status === 'fulfilled' && recRes.value?.data) {
                    const list = Array.isArray(recRes.value.data) ? recRes.value.data : []
                    for (const iterator of list) {
                        if (iterator.bookingDate && typeof iterator.bookingDate === 'string' && iterator.bookingDate.includes('T')) {
                            iterator.bookingDate = iterator.bookingDate.split('T')[0]
                        }
                        if (this.postedReceiveMap[String(iterator.id)]) {
                            iterator.isPosted = true
                            iterator.apInvoice = this.postedReceiveMap[String(iterator.id)]
                        }
                        this.txnList.push(iterator)
                    }
                }
                console.log("====> " + this.txnList[0]);
            } catch (error) {
                console.error("Failed to load receiving txns", error)
            }
            this.isloading = false
        },
        async postToPayment(recTxn) {
            if (this.isItemPosted(recTxn)) {
                return swalError2(this.$swal, "Warning", "ລາຍການນີ້ໄດ້ຖືກ Post AP ແລ້ວ");
            }
            this.isloading = true
            let fullRecTxn = null
            try {
                const response = await this.$axios.get(`/api/receiving/find/${recTxn.id}`)
                fullRecTxn = response.data
            } catch (error) {
                console.error(`Failed to load full receiving transaction details: ${error}`);
                swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນລາຍການສິນຄ້າ ' + error);
                this.isloading = false
                return
            }
            this.isloading = false

            const lineItems = (fullRecTxn.lines || []).map(line => ({
                description: line.product?.pro_name || `Product ID: ${line.productId}`,
                quantity: parseFloat(line.qty) || 1,
                unitPrice: parseFloat(line.price) || 0,
                discountRate: 0,
                taxRate: 0,
                DRglAccountId: null,
                CRglAccountId: null,
                txnId: null,
                note: null
            }))

            confirmSwal(this.$swal, 'You are posting to AP Invoice ?', async () => {
                this.isloading = true
                try {
                    let nextInvoiceNumber = `AP-INV-${fullRecTxn.id}`
                    try {
                        const seqRes = await this.$axios.get('/api/ap-invoices/sequence', { params: { prefix: 'AP-INV' } })
                        if (seqRes.data && seqRes.data.success) {
                            nextInvoiceNumber = seqRes.data.data.invoiceNumber || seqRes.data.data
                        }
                    } catch (e) {
                        console.warn('Failed to fetch next invoice sequence number, using fallback')
                    }

                    const invoicePayload = {
                        invoiceNumber: nextInvoiceNumber,
                        vendorInvoiceNumber: `RECEIVE-${fullRecTxn.id}`,
                        invoiceDate: fullRecTxn.bookingDate,
                        dueDate: fullRecTxn.bookingDate,
                        description: fullRecTxn.notes || `Post from Receiving #${fullRecTxn.id}`,
                        totalAmount: parseFloat(fullRecTxn.total) || 0,
                        exchangeRate: parseFloat(fullRecTxn.exchangeRate) || 1.0,
                        vendorId: fullRecTxn.vendorId,
                        currencyId: fullRecTxn.currencyId,
                        makerId: this.$auth.user?.id || 1,
                        note: fullRecTxn.notes || '',
                        lineItems: lineItems
                    }

                    const response = await this.$axios.post(`/api/ap-invoices`, invoicePayload)
                    console.log(`Transaction complete ${JSON.stringify(response.data)}`);
                    swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');

                    if (this.postedReceiveMap) {
                        this.$set(this.postedReceiveMap, String(recTxn.id), response.data?.data || true);
                    }
                    recTxn.isPosted = true;

                    const invoiceId = response.data?.data?.id;
                    if (invoiceId) {
                        this.$router.push({ path: '/admin/accounting/ap/invoice', query: { id: invoiceId } });
                    } else {
                        this.$router.push('/admin/accounting/ap/invoice');
                    }
                } catch (error) {
                    console.error(`Something went wrong ${error}`);
                    const errorMsg = error.response?.data?.message || error;
                    swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ: ' + errorMsg);
                }
                this.isloading = false
            })

        },

    },
    computed: {
        totalReceives() {
            return this.filteredTxnList.length;
        },
        filteredTxnList() {
            let list = this.txnList;
            if (!this.showInactive) {
                list = list.filter(item => item.isActive !== false && item.isActive !== 0);
            }
            return list;
        },
        purchaseCurrencyGrouping() {
            // Object to store the sum of transactions for each currency code
            const sumByCurrency = {};

            // Loop through each transaction
            this.filteredTxnList.forEach(transaction => {
                const { total, currency } = transaction;
                const currencyCode = currency?.code || 'LAK';
                // If the currency code doesn't exist in the sumByCurrency object, initialize it to 0
                if (!sumByCurrency[currencyCode]) {
                    sumByCurrency[currencyCode] = 0;
                }
                // Accumulate the total amount for the currency code
                sumByCurrency[currencyCode] += total;
            });

            // Display the sum for each currency code
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
.po-container {
  font-family: 'noto sans lao', sans-serif !important;
  background-color: #fafafa;
  min-height: 100vh;
  padding: 8px;
}

.po-container * { font-family: 'noto sans lao', sans-serif !important; }

.report-header { border-bottom: 1px solid #eee; margin-bottom: 8px; }
.action-btn { text-transform: none; font-weight: 700; border-radius: 4px; }

.stat-card { border-radius: 8px; overflow: hidden; }
.main-stat { background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-primary-darken1) 100%); }

.compact-card { border-radius: 8px; background: white; }
.border-bottom { border-bottom: 1px solid #eee; }
.border-left { border-left: 1px solid #eee; }
.text-tiny { font-size: 0.65rem; }

.currency-table-compact td { padding: 4px 12px !important; }

.filter-card { border-radius: 8px; background: white; }
.compact-input>>>.v-input__slot { min-height: 36px !important; font-size: 0.8rem; }
.compact-input>>>.v-label { font-size: 0.8rem; top: 8px !important; }

.table-card { border-radius: 8px; overflow: hidden; }
.compact-table>>>thead th { background-color: #f5f5f5 !important; font-weight: 700 !important; font-size: 0.75rem; padding: 8px 12px !important; height: 40px !important; }
.compact-table>>>tbody td { padding: 8px 12px !important; height: 40px !important; }

.opacity-80 { opacity: 0.8; }
</style>