<template>
    <div class="deposit-account-summary">
        <!-- Header -->
        <div class="report-header">
            <div class="title-section">
                <h1 class="page-title">
                    <i class="fas fa-file-invoice-dollar"></i>
                    ລາຍງານສະຫຼຸບຍອດເງິນຝາກ (CCY/LCY)
                </h1>
                <p class="page-subtitle">Deposit Account Summary Report</p>
            </div>
            <div class="action-buttons">
                <v-btn color="primary" @click="exportToExcel" :loading="exporting" dark>
                    <i class="fas fa-file-excel"></i>
                    Export Excel
                </v-btn>
                <v-btn color="primary" @click="printReport" dark>
                    <i class="fas fa-print"></i>
                    Print
                </v-btn>
            </div>
        </div>

        <!-- Filters Card -->
        <v-card class="filter-card mb-4" elevation="2">
            <v-card-title class="filter-title d-flex align-center">
                <v-icon class="mr-2">mdi-filter</v-icon>
                ຕົວກອງ (Filters)
            </v-card-title>

            <v-card-text class="pa-4">
                <v-row>
                    <!-- From Date -->
                    <v-col cols="12" md="2">
                        <v-text-field v-model="filters.fromDate" type="date" label="ຈາກວັນທີ (From Date)" outlined dense
                            @change="fetchReportData"></v-text-field>
                    </v-col>

                    <!-- To Date -->
                    <v-col cols="12" md="2">
                        <v-text-field v-model="filters.toDate" type="date" label="ເຖິງວັນທີ (To Date)" outlined dense
                            @change="fetchReportData"></v-text-field>
                    </v-col>

                    <!-- Bank -->
                    <v-col cols="12" md="3">
                        <v-select v-model="filters.bankId"
                            :items="[{ id: 'ALL', bank_name: 'ທັງໝົດ (All Banks)' }, ...banks]" item-text="bank_name"
                            item-value="id" label="ທະນາຄານ (Bank)" outlined dense @change="onBankChange"></v-select>
                    </v-col>

                    <!-- Bank Account -->
                    <v-col cols="12" md="3">
                        <v-autocomplete v-model="filters.bankAccountIds" :items="filteredBankAccounts"
                            item-text="accountDisplayName" item-value="id" label="ບັນຊີທະນາຄານ (Bank Account)" multiple
                            chips small-chips clearable outlined dense @change="fetchReportData">
                            <template v-slot:selection="{ item, index }">
                                <v-chip v-if="index === 0" small>
                                    <span>{{ item.accountName }}</span>
                                </v-chip>
                                <span v-if="index === 1" class="grey--text ">
                                    (+{{ filters.bankAccountIds.length - 1 }} others)
                                </span>
                            </template>
                        </v-autocomplete>
                    </v-col>

                    <!-- Buttons -->
                    <v-col cols="12" md="2">
                        <div class="filter-actions">
                            <v-btn color="primary" block @click="fetchReportData" :loading="loading">
                                <v-icon left>mdi-magnify</v-icon>
                                ຄົ້ນຫາ
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <!-- Report Table with Breakdown by Bank & Currency -->
        <v-card class="table-card" elevation="2">
            <v-card-title class="d-flex justify-space-between align-center py-3 px-4">
                <div class="d-flex align-center">
                    <v-icon color="primary" class="mr-2">mdi-bank-outline</v-icon>
                    <span class="font-weight-bold" style="font-size: 16px;">ສະຫຼຸບຍອດເງິນຝາກ ແຍກຕາມທະນາຄານ ແລະ ສະກຸນເງິນ</span>
                    <v-chip small color="primary" outlined class="ml-3 font-weight-bold">
                        {{ reportData.length }} ບັນຊີ ({{ groupedReportData.length }} ທະນາຄານ)
                    </v-chip>
                </div>
            </v-card-title>
            <v-divider></v-divider>

            <v-simple-table class="report-table-breakdown" dense>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th rowspan="2" class="text-center" style="width: 45px;">#</th>
                            <th rowspan="2" style="width: 145px;">ເລກບັນຊີ (Account No.)</th>
                            <th rowspan="2">ຊື່ບັນຊີ ແລະ ທະນາຄານ (Account Name)</th>
                            <th rowspan="2" class="text-right" style="width: 155px;">ຍອດຍົກມາ (BF)</th>
                            <th colspan="2" class="text-center" style="width: 310px;">ການເຄື່ອນໄຫວ (Movement)</th>
                            <th rowspan="2" class="text-right" style="width: 165px;">ຍອດຍົກໄປ / ຄົງເຫຼືອ (Closing)</th>
                            <th rowspan="2" class="text-center" style="width: 100px;">ໝາຍເຫດ (Note)</th>
                        </tr>
                        <tr>
                            <th class="text-right green--text text--darken-3" style="width: 155px;">ລາຍຮັບ / ເງິນເຂົ້າ (Credit)</th>
                            <th class="text-right red--text text--darken-3" style="width: 155px;">ລາຍຈ່າຍ / ເງິນອອກ (Debit)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Loading State -->
                        <tr v-if="loading">
                            <td colspan="8" class="text-center py-8">
                                <v-progress-circular indeterminate color="primary" size="32"></v-progress-circular>
                                <div class="mt-2 text-caption grey--text">ກຳລັງໂຫຼດຂໍ້ມູນ...</div>
                            </td>
                        </tr>

                        <!-- Empty State -->
                        <tr v-else-if="!groupedReportData.length">
                            <td colspan="8" class="text-center py-8 grey--text">
                                <v-icon large color="grey lighten-1">mdi-inbox-outline</v-icon>
                                <div class="mt-1">ບໍ່ມີຂໍ້ມູນໃນໄລຍະເວລານີ້ (No data found)</div>
                            </td>
                        </tr>

                        <!-- Grouped Rows by Bank -> Currency -->
                        <template v-else>
                            <template v-for="(bank, bIdx) in groupedReportData">
                                <!-- 1. Bank Header Banner -->
                                <tr :key="'bank-head-' + bank.bankKey" class="bank-section-row">
                                    <td colspan="8">
                                        <div class="d-flex align-center justify-space-between py-1">
                                            <div class="d-flex align-center font-weight-bold">
                                                <v-icon small color="primary" class="mr-2">mdi-bank</v-icon>
                                                <span class="bank-name-text">🏛️ ທະນາຄານ (Bank): {{ bank.bankName }}</span>
                                            </div>
                                            <v-chip x-small color="grey lighten-3" class="font-weight-medium">
                                                {{ bank.accountCount }} ບັນຊີ (Accounts)
                                            </v-chip>
                                        </div>
                                    </td>
                                </tr>

                                <!-- 2. Currencies under this bank -->
                                <template v-for="(currGroup, cIdx) in bank.currencies">
                                    <!-- Currency Subheader if bank has multiple currencies -->
                                    <tr v-if="bank.currencies.length > 1" :key="'curr-head-' + bank.bankKey + '-' + currGroup.currency" class="currency-section-row">
                                        <td colspan="8" class="py-1">
                                            <v-chip x-small color="blue lighten-5" class="blue--text text--darken-3 font-weight-bold">
                                                💱 ສະກຸນເງິນ: {{ currGroup.currency }} ({{ currGroup.items.length }} ບັນຊີ)
                                            </v-chip>
                                        </td>
                                    </tr>

                                    <!-- Account Rows -->
                                    <tr v-for="(item, aIdx) in currGroup.items" :key="'acc-' + item.id">
                                        <td class="text-center text-caption grey--text">{{ getGlobalIndex(bIdx, cIdx, aIdx) }}</td>
                                        <td class="font-monospace font-weight-bold text-caption">{{ item.accountNumber }}</td>
                                        <td>
                                            <div class="account-name font-weight-medium">{{ item.accountName }}</div>
                                            <div class="text-caption grey--text">{{ item.currency }} Account</div>
                                        </td>
                                        <!-- BF -->
                                        <td class="text-right font-monospace">
                                            <div class="font-weight-medium">{{ formatAmount(item.broughtForward) }} <span class="text-caption grey--text">{{ item.currency }}</span></div>
                                            <div v-if="item.currency !== 'LAK'" class="text-caption grey--text">(₭{{ formatAmount(item.broughtForwardLcy) }})</div>
                                        </td>
                                        <!-- Movement Credit -->
                                        <td class="text-right font-monospace green--text text--darken-3">
                                            <div class="font-weight-medium">{{ item.totalCredit > 0 ? formatAmount(item.totalCredit) : '-' }} <span v-if="item.totalCredit > 0" class="text-caption">{{ item.currency }}</span></div>
                                            <div v-if="item.totalCredit > 0 && item.currency !== 'LAK'" class="text-caption grey--text">(₭{{ formatAmount(item.totalCreditLcy) }})</div>
                                        </td>
                                        <!-- Movement Debit -->
                                        <td class="text-right font-monospace red--text text--darken-3">
                                            <div class="font-weight-medium">{{ item.totalDebit > 0 ? formatAmount(item.totalDebit) : '-' }} <span v-if="item.totalDebit > 0" class="text-caption">{{ item.currency }}</span></div>
                                            <div v-if="item.totalDebit > 0 && item.currency !== 'LAK'" class="text-caption grey--text">(₭{{ formatAmount(item.totalDebitLcy) }})</div>
                                        </td>
                                        <!-- Closing Balance -->
                                        <td class="text-right font-monospace blue--text text--darken-3">
                                            <div class="font-weight-bold">{{ formatAmount(item.endingBalance) }} <span class="text-caption">{{ item.currency }}</span></div>
                                            <div v-if="item.currency !== 'LAK'" class="text-caption grey--text">(₭{{ formatAmount(item.endingBalanceLcy) }})</div>
                                        </td>
                                        <!-- Note -->
                                        <td class="text-center text-caption grey--text">{{ item.note || '-' }}</td>
                                    </tr>

                                    <!-- Currency Subtotal Row -->
                                    <tr :key="'subtotal-' + bank.bankKey + '-' + currGroup.currency" class="subtotal-currency-ui-row font-weight-bold">
                                        <td colspan="3" class="text-right amber--text text--darken-4 font-weight-bold text-caption">
                                            ລວມຍອດ {{ bank.bankName }} ({{ currGroup.currency }}) (Subtotal):
                                        </td>
                                        <!-- BF Subtotal -->
                                        <td class="text-right font-monospace">
                                            <div>{{ formatAmount(currGroup.subtotal.broughtForward) }} {{ currGroup.currency }}</div>
                                            <div v-if="currGroup.currency !== 'LAK'" class="text-caption grey--text font-weight-normal">(₭{{ formatAmount(currGroup.subtotal.broughtForwardLcy) }})</div>
                                        </td>
                                        <!-- Credit Subtotal -->
                                        <td class="text-right font-monospace green--text text--darken-3">
                                            <div>{{ formatAmount(currGroup.subtotal.totalCredit) }} {{ currGroup.currency }}</div>
                                            <div v-if="currGroup.currency !== 'LAK'" class="text-caption grey--text font-weight-normal">(₭{{ formatAmount(currGroup.subtotal.totalCreditLcy) }})</div>
                                        </td>
                                        <!-- Debit Subtotal -->
                                        <td class="text-right font-monospace red--text text--darken-3">
                                            <div>{{ formatAmount(currGroup.subtotal.totalDebit) }} {{ currGroup.currency }}</div>
                                            <div v-if="currGroup.currency !== 'LAK'" class="text-caption grey--text font-weight-normal">(₭{{ formatAmount(currGroup.subtotal.totalDebitLcy) }})</div>
                                        </td>
                                        <!-- Closing Subtotal -->
                                        <td class="text-right font-monospace blue--text text--darken-3">
                                            <div>{{ formatAmount(currGroup.subtotal.endingBalance) }} {{ currGroup.currency }}</div>
                                            <div v-if="currGroup.currency !== 'LAK'" class="text-caption grey--text font-weight-normal">(₭{{ formatAmount(currGroup.subtotal.endingBalanceLcy) }})</div>
                                        </td>
                                        <td></td>
                                    </tr>
                                </template>

                                <!-- 3. Bank Level Total (if multiple currencies in this bank) -->
                                <tr v-if="bank.hasMultipleCurrencies" :key="'bank-total-' + bank.bankKey" class="subtotal-bank-ui-row font-weight-bold">
                                    <td colspan="3" class="text-right primary--text font-weight-bold">
                                        ລວມທະນາຄານ {{ bank.bankName }} ທັງໝົດ (Total {{ bank.bankName }} in LAK):
                                    </td>
                                    <td class="text-right font-monospace">₭{{ formatAmount(bank.totalBfLcy) }}</td>
                                    <td class="text-right font-monospace green--text text--darken-3">₭{{ formatAmount(bank.totalCreditLcy) }}</td>
                                    <td class="text-right font-monospace red--text text--darken-3">₭{{ formatAmount(bank.totalDebitLcy) }}</td>
                                    <td class="text-right font-monospace blue--text text--darken-3">₭{{ formatAmount(bank.totalCloseLcy) }}</td>
                                    <td></td>
                                </tr>
                            </template>
                        </template>
                    </tbody>
                    <tfoot v-if="reportData.length > 0">
                        <tr class="footer-totals-ui font-weight-bold">
                            <td colspan="3" class="text-center font-weight-bold" style="font-size: 13px;">
                                ລວມຍອດທັງໝົດ (Grand Total LAK):
                            </td>
                            <td class="text-right font-monospace font-weight-bold">₭{{ formatAmount(grandTotal.broughtForwardLcy) }}</td>
                            <td class="text-right font-monospace font-weight-bold green--text text--darken-3">₭{{ formatAmount(grandTotal.totalCreditLcy) }}</td>
                            <td class="text-right font-monospace font-weight-bold red--text text--darken-3">₭{{ formatAmount(grandTotal.totalDebitLcy) }}</td>
                            <td class="text-right font-monospace font-weight-bold purple--text text--darken-3">₭{{ formatAmount(grandTotal.endingBalanceLcy) }}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </template>
            </v-simple-table>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { printDepositAccountSummaryReport } from '@/common/depositAccountSummaryPrintTemplate'

export default {
    name: 'DepositAccountSummaryReport',

    data() {
        const today = new Date()
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0]
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0]

        return {
            loading: false,
            exporting: false,

            filters: {
                fromDate: firstDay,
                toDate: lastDay,
                bankId: 'ALL',
                bankAccountIds: []
            },

            banks: [],
            bankAccounts: [],
            reportData: [],

            headers: [
                { text: 'ບັນຊີທະນາຄານ (Bank Account)', value: 'bankAccount', sortable: false },
                { text: 'ຍອດຍົກມາ (Brought Forward)', value: 'broughtForward', align: 'end', sortable: false },
                { text: 'ໜີ້ (Debit)', value: 'totalDebit', align: 'end', sortable: false },
                { text: 'ມີ (Credit)', value: 'totalCredit', align: 'end', sortable: false },
                { text: 'ຍອດຄົງເຫຼືອ (Balance)', value: 'endingBalance', align: 'end', sortable: false }
            ]
        }
    },

    computed: {
        ...mapGetters(['findAllCurrency', 'findAllCompany']),

        filteredBankAccounts() {
            if (!this.filters.bankId || this.filters.bankId === 'ALL') {
                return this.bankAccounts
            }
            return this.bankAccounts.filter(a => a.bankId === this.filters.bankId)
        },

        groupedReportData() {
            const bankMap = new Map()

            this.reportData.forEach(item => {
                const bankKey = item.bankId || item.bankName || 'OTHER'
                const bankName = item.bankName || 'ທະນາຄານອື່ນໆ (Other Banks)'

                if (!bankMap.has(bankKey)) {
                    bankMap.set(bankKey, {
                        bankKey,
                        bankName,
                        currencies: new Map(),
                        totalBfLcy: 0,
                        totalCreditLcy: 0,
                        totalDebitLcy: 0,
                        totalCloseLcy: 0,
                        accountCount: 0
                    })
                }

                const bankGroup = bankMap.get(bankKey)
                bankGroup.accountCount += 1
                bankGroup.totalBfLcy += (parseFloat(item.broughtForwardLcy) || 0)
                bankGroup.totalCreditLcy += (parseFloat(item.totalCreditLcy) || 0)
                bankGroup.totalDebitLcy += (parseFloat(item.totalDebitLcy) || 0)
                bankGroup.totalCloseLcy += (parseFloat(item.endingBalanceLcy) || 0)

                const currKey = item.currency || 'LAK'
                if (!bankGroup.currencies.has(currKey)) {
                    bankGroup.currencies.set(currKey, {
                        currency: currKey,
                        items: [],
                        subtotal: {
                            broughtForward: 0,
                            broughtForwardLcy: 0,
                            totalCredit: 0,
                            totalCreditLcy: 0,
                            totalDebit: 0,
                            totalDebitLcy: 0,
                            endingBalance: 0,
                            endingBalanceLcy: 0
                        }
                    })
                }

                const currGroup = bankGroup.currencies.get(currKey)
                currGroup.items.push(item)

                currGroup.subtotal.broughtForward += (parseFloat(item.broughtForward) || 0)
                currGroup.subtotal.broughtForwardLcy += (parseFloat(item.broughtForwardLcy) || 0)
                currGroup.subtotal.totalCredit += (parseFloat(item.totalCredit) || 0)
                currGroup.subtotal.totalCreditLcy += (parseFloat(item.totalCreditLcy) || 0)
                currGroup.subtotal.totalDebit += (parseFloat(item.totalDebit) || 0)
                currGroup.subtotal.totalDebitLcy += (parseFloat(item.totalDebitLcy) || 0)
                currGroup.subtotal.endingBalance += (parseFloat(item.endingBalance) || 0)
                currGroup.subtotal.endingBalanceLcy += (parseFloat(item.endingBalanceLcy) || 0)
            })

            const groups = []
            bankMap.forEach(bg => {
                const currencyList = Array.from(bg.currencies.values())
                groups.push({
                    bankKey: bg.bankKey,
                    bankName: bg.bankName,
                    accountCount: bg.accountCount,
                    totalBfLcy: bg.totalBfLcy,
                    totalCreditLcy: bg.totalCreditLcy,
                    totalDebitLcy: bg.totalDebitLcy,
                    totalCloseLcy: bg.totalCloseLcy,
                    currencies: currencyList,
                    hasMultipleCurrencies: currencyList.length > 1
                })
            })

            return groups
        },

        grandTotal() {
            return this.reportData.reduce((acc, curr) => {
                acc.broughtForwardLcy += curr.broughtForwardLcy
                acc.totalDebitLcy += curr.totalDebitLcy
                acc.totalCreditLcy += curr.totalCreditLcy
                acc.endingBalanceLcy += curr.endingBalanceLcy
                return acc
            }, { broughtForwardLcy: 0, totalDebitLcy: 0, totalCreditLcy: 0, endingBalanceLcy: 0 })
        }
    },

    async created() {
        await this.loadBankAccounts()
        if (this.bankAccounts.length > 0) {
            await this.fetchReportData()
        }
    },

    methods: {
        async loadBankAccounts() {
            try {
                const [accountsRes, banksRes] = await Promise.all([
                    this.$axios.get('/api/bank_account/find'),
                    this.$axios.get('/api/bank/find')
                ])
                this.banks = banksRes.data?.data || banksRes.data || []
                this.bankAccounts = (accountsRes.data.data || accountsRes.data || []).map(account => {
                    const foundBank = this.banks.find(b => b.id === account.bankId)
                    const bName = foundBank?.bank_name || account.bank?.bank_name || ''
                    return {
                        ...account,
                        bankName: bName,
                        accountDisplayName: `${account.accountName} - ${account.accountNumber} (${account.currency})`
                    }
                }).filter(a => a.isActive)
            } catch (error) {
                console.error('Error loading bank accounts:', error)
                this.$toast.error('ບໍ່ສາມາດໂຫຼດບັນຊີທະນາຄານໄດ້')
            }
        },

        onBankChange() {
            this.filters.bankAccountIds = []
            this.fetchReportData()
        },

        async fetchReportData() {
            if (!this.filters.fromDate || !this.filters.toDate) return

            this.loading = true
            try {
                let accountsToProcess = this.bankAccounts
                if (this.filters.bankId && this.filters.bankId !== 'ALL') {
                    accountsToProcess = accountsToProcess.filter(a => a.bankId === this.filters.bankId)
                }
                if (this.filters.bankAccountIds && this.filters.bankAccountIds.length > 0) {
                    accountsToProcess = accountsToProcess.filter(a => this.filters.bankAccountIds.includes(a.id))
                }

                const results = await Promise.all(accountsToProcess.map(async (account) => {
                    // 1. Fetch Brought Forward (Last statement before fromDate)
                    let broughtForward = 0
                    try {
                        const bfRes = await this.$axios.get('/api/ac-statement', {
                            params: {
                                bankAccountId: account.id,
                                bookingDateTo: this.shiftDate(this.filters.fromDate, -1),
                                limit: 1,
                                sortBy: 'bookingDate',
                                sortOrder: 'DESC'
                            }
                        })
                        const lastStmt = (bfRes.data.data || [])[0]
                        broughtForward = lastStmt ? parseFloat(lastStmt.endingBalance) : 0
                    } catch (e) {
                        console.error(`Error fetching BF for ${account.accountName}:`, e)
                    }

                    // 2. Fetch Movements within period
                    let totalDebit = 0
                    let totalCredit = 0
                    try {
                        const mvRes = await this.$axios.get('/api/ac-statement', {
                            params: {
                                bankAccountId: account.id,
                                fromDate: this.filters.fromDate,
                                toDate: this.filters.toDate,
                                limit: 1000 // High limit for movement calculation
                            }
                        })
                        const movements = mvRes.data.data || []
                        movements.forEach(m => {
                            totalDebit += parseFloat(m.debitAmount) || 0
                            totalCredit += parseFloat(m.creditAmount) || 0
                        })
                    } catch (e) {
                        console.error(`Error fetching movements for ${account.accountName}:`, e)
                    }

                    const endingBalance = broughtForward + totalCredit - totalDebit

                    // 3. Convert to LCY
                    const broughtForwardLcy = this.convertToLocal(broughtForward, account.currency)
                    const totalDebitLcy = this.convertToLocal(totalDebit, account.currency)
                    const totalCreditLcy = this.convertToLocal(totalCredit, account.currency)
                    const endingBalanceLcy = this.convertToLocal(endingBalance, account.currency)

                    return {
                        id: account.id,
                        accountName: account.accountName,
                        accountNumber: account.accountNumber,
                        currency: account.currency,
                        bankName: account.bank?.bank_name || '',
                        broughtForward,
                        broughtForwardLcy,
                        totalDebit,
                        totalDebitLcy,
                        totalCredit,
                        totalCreditLcy,
                        endingBalance,
                        endingBalanceLcy,
                        note: account.note || account.remark || ''
                    }
                }))

                this.reportData = results
            } catch (error) {
                console.error('Error fetching report data:', error)
                this.$toast.error('ເກີດຂໍ້ຜິດພາດໃນການດຶງຂໍ້ມູນ')
            } finally {
                this.loading = false
            }
        },

        convertToLocal(amount, currencyCode) {
            if (currencyCode === 'LAK' || !amount) return amount || 0

            const currency = (this.findAllCurrency || []).find(c => c.code === currencyCode)
            if (!currency || !currency.rate) return amount || 0

            const rate = parseFloat(currency.rate)
            const direction = currency.exchangeDirection || 'local_to_foreign'

            if (direction === 'local_to_foreign') {
                return amount / rate
            } else {
                return amount * rate
            }
        },

        getGlobalIndex(bIdx, cIdx, aIdx) {
            let count = 0
            for (let b = 0; b < this.groupedReportData.length; b++) {
                const bank = this.groupedReportData[b]
                for (let c = 0; c < bank.currencies.length; c++) {
                    const curr = bank.currencies[c]
                    if (b === bIdx && c === cIdx) {
                        return count + aIdx + 1
                    }
                    count += curr.items.length
                }
            }
            return aIdx + 1
        },

        shiftDate(dateStr, days) {
            const date = new Date(dateStr)
            date.setDate(date.getDate() + days)
            return date.toISOString().split('T')[0]
        },

        formatAmount(amount) {
            return new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(amount || 0)
        },

        printReport() {
            if (!this.reportData || !this.reportData.length) {
                this.$toast.warning('ບໍ່ມີຂໍ້ມູນໃນການພິມລາຍງານ (No data to print)')
                return
            }

            const company = this.findAllCompany && this.findAllCompany.length > 0 ? this.findAllCompany[0] : {}
            const user = this.$auth?.user || this.$store?.state?.user || {}

            let selectedBankName = ''
            if (this.filters.bankId && this.filters.bankId !== 'ALL') {
                const foundBank = this.banks.find(b => b.id === this.filters.bankId)
                if (foundBank) selectedBankName = foundBank.bank_name || ''
            }

            printDepositAccountSummaryReport({
                reportData: this.reportData,
                grandTotal: this.grandTotal,
                filters: this.filters,
                companyData: company,
                user,
                bankName: selectedBankName
            })
        },

        exportToExcel() {
            this.exporting = true
            try {
                if (this.$xlsx) {
                    const data = []
                    let globalIdx = 0

                    this.groupedReportData.forEach(bank => {
                        bank.currencies.forEach(currGroup => {
                            currGroup.items.forEach(item => {
                                globalIdx++
                                data.push({
                                    'No': globalIdx,
                                    'Bank': bank.bankName,
                                    'Account Number': item.accountNumber,
                                    'Account Name': item.accountName,
                                    'Currency': item.currency,
                                    'Brought Forward (CCY)': item.broughtForward,
                                    'Brought Forward (LAK)': item.broughtForwardLcy,
                                    'Credit / Inflow (CCY)': item.totalCredit,
                                    'Credit / Inflow (LAK)': item.totalCreditLcy,
                                    'Debit / Outflow (CCY)': item.totalDebit,
                                    'Debit / Outflow (LAK)': item.totalDebitLcy,
                                    'Closing Balance (CCY)': item.endingBalance,
                                    'Closing Balance (LAK)': item.endingBalanceLcy,
                                    'Note': item.note || ''
                                })
                            })

                            // Subtotal row for Currency
                            data.push({
                                'No': '',
                                'Bank': bank.bankName,
                                'Account Number': `Subtotal ${bank.bankName} (${currGroup.currency})`,
                                'Account Name': '',
                                'Currency': currGroup.currency,
                                'Brought Forward (CCY)': currGroup.subtotal.broughtForward,
                                'Brought Forward (LAK)': currGroup.subtotal.broughtForwardLcy,
                                'Credit / Inflow (CCY)': currGroup.subtotal.totalCredit,
                                'Credit / Inflow (LAK)': currGroup.subtotal.totalCreditLcy,
                                'Debit / Outflow (CCY)': currGroup.subtotal.totalDebit,
                                'Debit / Outflow (LAK)': currGroup.subtotal.totalDebitLcy,
                                'Closing Balance (CCY)': currGroup.subtotal.endingBalance,
                                'Closing Balance (LAK)': currGroup.subtotal.endingBalanceLcy,
                                'Note': ''
                            })
                        })

                        // Bank total row if multiple currencies
                        if (bank.hasMultipleCurrencies) {
                            data.push({
                                'No': '',
                                'Bank': bank.bankName,
                                'Account Number': `Total ${bank.bankName} (LAK)`,
                                'Account Name': '',
                                'Currency': 'LAK',
                                'Brought Forward (CCY)': '',
                                'Brought Forward (LAK)': bank.totalBfLcy,
                                'Credit / Inflow (CCY)': '',
                                'Credit / Inflow (LAK)': bank.totalCreditLcy,
                                'Debit / Outflow (CCY)': '',
                                'Debit / Outflow (LAK)': bank.totalDebitLcy,
                                'Closing Balance (CCY)': '',
                                'Closing Balance (LAK)': bank.totalCloseLcy,
                                'Note': ''
                            })
                        }
                    })

                    // Grand total row
                    data.push({
                        'No': '',
                        'Bank': 'GRAND TOTAL',
                        'Account Number': 'Grand Total LAK',
                        'Account Name': '',
                        'Currency': 'LAK',
                        'Brought Forward (CCY)': '',
                        'Brought Forward (LAK)': this.grandTotal.broughtForwardLcy,
                        'Credit / Inflow (CCY)': '',
                        'Credit / Inflow (LAK)': this.grandTotal.totalCreditLcy,
                        'Debit / Outflow (CCY)': '',
                        'Debit / Outflow (LAK)': this.grandTotal.totalDebitLcy,
                        'Closing Balance (CCY)': '',
                        'Closing Balance (LAK)': this.grandTotal.endingBalanceLcy,
                        'Note': ''
                    })

                    const worksheet = this.$xlsx.utils.json_to_sheet(data)
                    const workbook = this.$xlsx.utils.book_new()
                    this.$xlsx.utils.book_append_sheet(workbook, worksheet, "Deposit Summary")
                    this.$xlsx.writeFile(workbook, `deposit_account_summary_${this.filters.fromDate}_${this.filters.toDate}.xlsx`)
                } else {
                    this.$toast.info('Export feature is being prepared')
                }
            } catch (error) {
                // console.error('Export error:', error)
                this.$toast.error('Export failed')
            } finally {
                this.exporting = false
            }
        }
    }
}
</script>

<style scoped>
.report-table-breakdown {
    border: 1px solid #e2e8f0;
}

.report-table-breakdown table {
    width: 100%;
    border-collapse: collapse;
}

.report-table-breakdown th {
    background-color: #f8fafc !important;
    color: #1e293b !important;
    font-weight: 700 !important;
    border: 1px solid #cbd5e1 !important;
    padding: 8px !important;
    font-size: 11px !important;
}

.report-table-breakdown td {
    border: 1px solid #e2e8f0 !important;
    padding: 6px 8px !important;
    vertical-align: middle;
}

.bank-section-row td {
    background-color: #f1f5f9 !important;
    border-left: 4px solid #01532B !important;
    border-top: 1.5px solid #cbd5e1 !important;
    border-bottom: 1px solid #cbd5e1 !important;
}

.bank-name-text {
    font-size: 13px;
    color: #0f172a;
}

.currency-section-row td {
    background-color: #f8fafc !important;
    border-left: 3px solid #3b82f6 !important;
    border-bottom: 1px solid #e2e8f0 !important;
}

.subtotal-currency-ui-row td {
    background-color: #fffbeb !important;
    border-top: 1.5px solid #fcd34d !important;
    border-bottom: 1.5px solid #fcd34d !important;
}

.subtotal-bank-ui-row td {
    background-color: #f1f5f9 !important;
    border-top: 2px solid #94a3b8 !important;
    border-bottom: 2px solid #94a3b8 !important;
}

.footer-totals-ui td {
    background-color: #e2e8f0 !important;
    border-top: 2.5px solid #475569 !important;
    border-bottom: 2.5px solid #475569 !important;
}

.font-monospace {
    font-family: 'Courier New', Courier, monospace !important;
}

.deposit-account-summary {
    padding: 24px;
    font-family: 'Noto Sans Lao', sans-serif;
}

.report-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
}

.page-title {
    font-size: 24px;
    font-weight: 700;
    color: #2d3748;
    margin: 0;
}

.page-subtitle {
    color: #718096;
    margin: 4px 0 0;
}

.filter-card {
    border-radius: 8px;
}

.filter-title {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #edf2f7;
    padding: 12px 16px;
}

.amount-cell {
    text-align: right;
    font-family: 'Courier New', Courier, monospace;
}

.ccy-amount {
    font-weight: 600;
}

.lcy-amount {
    font-size: 11px;
    color: #718096;
}

.debit-text {
    color: #e53e3e;
}

.credit-text {
    color: #38a169;
}

.footer-totals {
    background-color: #f7fafc;
}

.bank-info {
    line-height: 1.2;
}

.account-name {
    font-weight: 600;
}

.account-number {
    font-size: 12px;
    color: #718096;
}

.text-right {
    text-align: right;
}

@media print {

    .filter-card,
    .action-buttons,
    .navigation-drawer,
    .v-toolbar {
        display: none !important;
    }

    .deposit-account-summary {
        padding: 0;
    }
}
</style>
