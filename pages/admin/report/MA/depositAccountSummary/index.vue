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
                    <v-col cols="12" md="3">
                        <v-text-field v-model="filters.fromDate" type="date" label="ຈາກວັນທີ (From Date)" outlined dense
                            @change="fetchReportData"></v-text-field>
                    </v-col>

                    <!-- To Date -->
                    <v-col cols="12" md="3">
                        <v-text-field v-model="filters.toDate" type="date" label="ເຖິງວັນທີ (To Date)" outlined dense
                            @change="fetchReportData"></v-text-field>
                    </v-col>

                    <!-- Bank Account -->
                    <v-col cols="12" md="4">
                        <v-autocomplete v-model="filters.bankAccountIds" :items="bankAccounts"
                            item-text="accountDisplayName" item-value="id" label="ບັນຊີທະນາຄານ (Bank Account)" multiple
                            chips small-chips clearable outlined dense @change="fetchReportData">
                            <template v-slot:selection="{ item, index }">
                                <v-chip v-if="index === 0" small>
                                    <span>{{ item.accountName }}</span>
                                </v-chip>
                                <span v-if="index === 1" class="grey--text text-caption">
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

        <!-- Report Table -->
        <v-card class="table-card" elevation="2">
            <v-data-table :headers="headers" :items="reportData" :loading="loading" class="report-table"
                hide-default-footer disable-pagination>

                <!-- Bank Account Column -->
                <template v-slot:item.bankAccount="{ item }">
                    <div class="bank-info">
                        <div class="account-name">{{ item.accountName }}</div>
                        <div class="account-number">{{ item.accountNumber }}</div>
                        <v-chip x-small color="grey lighten-2" class="mt-1">{{ item.currency }}</v-chip>
                    </div>
                </template>

                <!-- Amount Columns with dual display -->
                <template v-slot:item.broughtForward="{ item }">
                    <div class="amount-cell">
                        <div class="ccy-amount">{{ formatAmount(item.broughtForward) }} {{ item.currency }}</div>
                        <div class="lcy-amount" v-if="item.currency !== 'LAK'">({{ formatAmount(item.broughtForwardLcy)
                            }} LAK)</div>
                    </div>
                </template>

                <template v-slot:item.totalDebit="{ item }">
                    <div class="amount-cell debit-text">
                        <div class="ccy-amount">{{ item.totalDebit > 0 ? formatAmount(item.totalDebit) : '-' }}</div>
                        <div class="lcy-amount" v-if="item.totalDebit > 0 && item.currency !== 'LAK'">({{
                            formatAmount(item.totalDebitLcy) }} LAK)</div>
                    </div>
                </template>

                <template v-slot:item.totalCredit="{ item }">
                    <div class="amount-cell credit-text">
                        <div class="ccy-amount">{{ item.totalCredit > 0 ? formatAmount(item.totalCredit) : '-' }}</div>
                        <div class="lcy-amount" v-if="item.totalCredit > 0 && item.currency !== 'LAK'">({{
                            formatAmount(item.totalCreditLcy) }} LAK)</div>
                    </div>
                </template>

                <template v-slot:item.endingBalance="{ item }">
                    <div class="amount-cell font-weight-bold">
                        <div class="ccy-amount">{{ formatAmount(item.endingBalance) }} {{ item.currency }}</div>
                        <div class="lcy-amount" v-if="item.currency !== 'LAK'">({{ formatAmount(item.endingBalanceLcy)
                            }} LAK)</div>
                    </div>
                </template>

                <!-- Footer for Totals (LCY only) -->
                <template v-slot:body.append>
                    <tr v-if="reportData.length > 0" class="footer-totals">
                        <td class="font-weight-bold">ລວມທັງໝົດ (Grand Total LAK)</td>
                        <td class="amount font-weight-bold text-right">{{ formatAmount(grandTotal.broughtForwardLcy) }}
                        </td>
                        <td class="amount font-weight-bold text-right debit-text">{{
                            formatAmount(grandTotal.totalDebitLcy) }}</td>
                        <td class="amount font-weight-bold text-right credit-text">{{
                            formatAmount(grandTotal.totalCreditLcy) }}</td>
                        <td class="amount font-weight-bold text-right">{{ formatAmount(grandTotal.endingBalanceLcy) }}
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
                bankAccountIds: []
            },

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
        ...mapGetters(['findAllCurrency']),

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
            this.filters.bankAccountIds = this.bankAccounts.map(a => a.id)
            await this.fetchReportData()
        }
    },

    methods: {
        async loadBankAccounts() {
            try {
                const res = await this.$axios.get('/api/bank_account/find')
                this.bankAccounts = (res.data.data || res.data || []).map(account => ({
                    ...account,
                    accountDisplayName: `${account.accountName} - ${account.accountNumber} (${account.currency})`
                })).filter(a => a.isActive)
            } catch (error) {
                console.error('Error loading bank accounts:', error)
                this.$toast.error('ບໍ່ສາມາດໂຫຼດບັນຊີທະນາຄານໄດ້')
            }
        },

        async fetchReportData() {
            if (!this.filters.fromDate || !this.filters.toDate) return

            this.loading = true
            try {
                const accountsToProcess = this.filters.bankAccountIds.length > 0
                    ? this.bankAccounts.filter(a => this.filters.bankAccountIds.includes(a.id))
                    : this.bankAccounts

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
                        broughtForward: broughtForward,
                        broughtForwardLcy: broughtForwardLcy,
                        totalDebit: totalDebit,
                        totalDebitLcy: totalDebitLcy,
                        totalCredit: totalCredit,
                        totalCreditLcy: totalCreditLcy,
                        endingBalance: endingBalance,
                        endingBalanceLcy: endingBalanceLcy
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
            window.print()
        },

        async exportToExcel() {
            this.exporting = true
            try {
                if (this.$xlsx) {
                    const data = this.reportData.map(item => ({
                        'Bank Account': `${item.accountName} (${item.accountNumber})`,
                        'CCY': item.currency,
                        'BF (CCY)': item.broughtForward,
                        'BF (LAK)': item.broughtForwardLcy,
                        'Debit (CCY)': item.totalDebit,
                        'Debit (LAK)': item.totalDebitLcy,
                        'Credit (CCY)': item.totalCredit,
                        'Credit (LAK)': item.totalCreditLcy,
                        'Balance (CCY)': item.endingBalance,
                        'Balance (LAK)': item.endingBalanceLcy
                    }))

                    const worksheet = this.$xlsx.utils.json_to_sheet(data)
                    const workbook = this.$xlsx.utils.book_new()
                    this.$xlsx.utils.book_append_sheet(workbook, worksheet, "Summary")
                    this.$xlsx.writeFile(workbook, `account_summary_${this.filters.fromDate}_${this.filters.toDate}.xlsx`)
                } else {
                    this.$toast.info('Export feature is being prepared')
                }
            } catch (error) {
                console.error('Export error:', error)
                this.$toast.error('Export failed')
            } finally {
                this.exporting = false
            }
        }
    }
}
</script>

<style scoped>
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
