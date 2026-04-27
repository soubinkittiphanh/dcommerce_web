<template>
    <v-container fluid class="pa-4">
        <!-- Header -->
        <div class="d-flex align-center justify-space-between mb-6">
            <div>
                <h2 class=" font-weight-bold primary--text mb-1">
                    <v-icon color="primary" class="mr-2">mdi-file-document-outline</v-icon>
                    Account Statement (ລາຍງານເຄື່ອນໄຫວບັນຊີ)
                </h2>
                <div class=" text-medium-emphasis">View historical running balances for any wallet or
                    offset account</div>
            </div>
            <div class="d-flex gap-2">
                <v-btn color="success" @click="exportExcel" :disabled="!statement" outlined class="mr-2">
                    <v-icon left>mdi-file-excel</v-icon> Export Excel
                </v-btn>
                <v-btn color="primary" @click="generatePDF" :disabled="!statement" outlined>
                    <v-icon left>mdi-printer</v-icon> Print Statement
                </v-btn>
            </div>
        </div>

        <!-- Filters Map -->
        <v-card outlined class="mb-6 rounded-lg">
            <v-card-text>
                <v-row align="center">
                    <v-col cols="12" md="4">
                        <v-autocomplete v-model="selectedBankAccountId" :items="bankAccounts" item-text="accountName"
                            item-value="id" label="ເລືອກທະນາຄານ / ບັນຊີ (Select Account)" outlined dense hide-details
                            prepend-inner-icon="mdi-bank">
                            <template v-slot:item="{ item }">
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.accountName }} ({{ item.accountNumber
                                    }})</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.accountType }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </template>
                        </v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="date-picker-wrapper">
                            <date-picker v-model="dateRange" range format="YYYY-MM-DD"
                                placeholder="ເລືອກຊ່ວງວັນທີ (Date Range)" input-class="custom-date-input"
                                width="100%"></date-picker>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4" class="d-flex gap-2">
                        <v-btn color="primary" @click="fetchStatement" :loading="loading" class="flex-grow-1"
                            height="40">
                            <v-icon left>mdi-magnify</v-icon> ຄົ້ນຫາ (Search)
                        </v-btn>
                        <v-btn color="grey" @click="resetFilters" outlined class="ml-2" height="40" :disabled="loading">
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <!-- Error State -->
        <v-alert v-if="error" type="error" text dismissible @input="error = null" class="mb-6">
            {{ error }}
        </v-alert>

        <!-- Content Area -->
        <div v-if="statement" id="printable-statement" class="pdf-container">
            <!-- Account Info Header (Visible in print) -->
            <v-card class="mb-6" color="primary lighten-5" flat rounded="lg">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="6">
                            <div class=" grey--text text--darken-1">ຊື່ບັນຊີ / Account Name</div>
                            <div class=" font-weight-bold">{{ accountInfo.accountName }}</div>
                            <div class="mt-2  grey--text text--darken-1">ເລກບັນຊີ / Account Number</div>
                            <div class="">{{ accountInfo.accountNumber }} ({{ accountInfo.accountType }})
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" class="text-md-right text-left">
                            <div class=" grey--text text--darken-1">ຊ່ວງວັນທີ / Period</div>
                            <div class=" font-weight-medium">
                                {{ formattedDateRange }}
                            </div>
                            <div class="mt-4  grey--text text--darken-1">ເວລາອອກບິນ / Generated At</div>
                            <div class="text-body-2">{{ new Date().toLocaleString() }}</div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <!-- Summary Statistics -->
            <v-row class="mb-6">
                <v-col cols="12" sm="6" md="3">
                    <v-card outlined class="summary-card">
                        <v-card-text class="d-flex align-center">
                            <v-avatar color="blue lighten-4" size="48" class="mr-4">
                                <v-icon color="blue darken-2">mdi-step-backward</v-icon>
                            </v-avatar>
                            <div>
                                <div class=" grey--text">ຍອດຍົກມາ (Opening)</div>
                                <div class=" font-weight-bold">{{ formatCurrency(statement.openingBalance) }}
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card outlined class="summary-card">
                        <v-card-text class="d-flex align-center">
                            <v-avatar color="success lighten-4" size="48" class="mr-4">
                                <v-icon color="success darken-2">mdi-arrow-bottom-left-thick</v-icon>
                            </v-avatar>
                            <div>
                                <div class=" grey--text">ຮັບເຂົ້າ (Total In)</div>
                                <div class=" font-weight-bold success--text">{{ formatCurrency(statement.totalIn)
                                }}
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card outlined class="summary-card">
                        <v-card-text class="d-flex align-center">
                            <v-avatar color="red lighten-4" size="48" class="mr-4">
                                <v-icon color="red darken-2">mdi-arrow-top-right-thick</v-icon>
                            </v-avatar>
                            <div>
                                <div class=" grey--text">ຖອນອອກ (Total Out)</div>
                                <div class=" font-weight-bold error--text">{{ formatCurrency(statement.totalOut)
                                }}</div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                    <v-card outlined class="summary-card border-primary">
                        <v-card-text class="d-flex align-center">
                            <v-avatar color="primary lighten-4" size="48" class="mr-4">
                                <v-icon color="primary darken-2">mdi-cash-check</v-icon>
                            </v-avatar>
                            <div>
                                <div class=" grey--text">ຍອດເຫຼືອ (Closing)</div>
                                <div class=" font-weight-bold primary--text">{{
                                    formatCurrency(statement.closingBalance)
                                }}</div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <!-- Data Table -->
            <v-card outlined class="rounded-lg overflow-hidden">
                <v-data-table :headers="headers" :items="transactions" :loading="loading" :items-per-page="-1"
                    hide-default-footer class="elevation-0 statement-table" dense>
                    <template v-slot:item.createdAt="{ item }">
                        <div class=" grey--text">{{ new Date(item.createdAt).toLocaleString() }}</div>
                        <div class="font-weight-medium primary--text">{{ item.businessDate || 'N/A' }}</div>
                    </template>
                    <template v-slot:item.transactionType="{ item }">
                        <v-chip size="small" :color="getTypeColor(item.transactionType)" text-color="white" small>
                            {{ item.transactionType }}
                        </v-chip>
                    </template>
                    <template v-slot:item.amountIn="{ item }">
                        <span v-if="item.amountIn > 0" class="success--text font-weight-medium">
                            +{{ formatCurrency(item.amountIn) }}
                        </span>
                        <span v-else class="grey--text">-</span>
                    </template>
                    <template v-slot:item.amountOut="{ item }">
                        <span v-if="item.amountOut > 0" class="error--text font-weight-medium">
                            -{{ formatCurrency(item.amountOut) }}
                        </span>
                        <span v-else class="grey--text">-</span>
                    </template>
                    <template v-slot:item.runningBalance="{ item }">
                        <span class="font-weight-bold">
                            {{ formatCurrency(item.runningBalance) }}
                        </span>
                    </template>
                    <template v-slot:no-data>
                        <div class="pa-4 text-center grey--text">
                            ບໍ່ມີລາຍການເຄື່ອນໄຫວໃນຊ່ວງເວລານີ້ (No transactions found in this period)
                        </div>
                    </template>
                </v-data-table>
            </v-card>
        </div>

        <!-- Empty State -->
        <div v-else-if="!loading" class="text-center py-12">
            <v-avatar color="grey lighten-4" size="100" class="mb-4">
                <v-icon size="50" color="grey lighten-1">mdi-file-search-outline</v-icon>
            </v-avatar>
            <h3 class=" grey--text text--darken-1 font-weight-medium">ກະລຸນາເລືອກບັນຊີ ແລະ ວັນທີ
                ເພື່ອສ້າງບົດລາຍງານ</h3>
            <p class="grey--text">Select an account and date range to generate the statement.</p>
        </div>
    </v-container>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            loading: false,
            error: null,
            bankAccounts: [],
            selectedBankAccountId: null,
            dateRange: [],
            statement: null,
            accountInfo: null,
            transactions: [],
            headers: [
                { text: 'ວັນທີ (System/Business)', value: 'createdAt', width: '180px' },
                { text: 'ປະເພດ (Type)', value: 'transactionType', width: '120px' },
                { text: 'ລາຍລະອຽດ (Description)', value: 'description' },
                { text: 'ຜູ້ເຮັດທຸລະກຳ (Creator)', value: 'creator' },
                { text: 'ຮັບເຂົ້າ (In)', value: 'amountIn', align: 'right', width: '120px' },
                { text: 'ຖອນອອກ (Out)', value: 'amountOut', align: 'right', width: '120px' },
                { text: 'ຍອດເຫຼືອ (Balance)', value: 'runningBalance', align: 'right', width: '140px' }
            ]
        }
    },
    computed: {
        formattedDateRange() {
            if (!this.dateRange || this.dateRange.length !== 2 || !this.dateRange[0] || !this.dateRange[1]) {
                return 'All Time (ທຸກຊ່ວງເວລາ)';
            }
            const d1 = new Date(this.dateRange[0]).toLocaleDateString();
            const d2 = new Date(this.dateRange[1]).toLocaleDateString();
            return `${d1} - ${d2}`;
        }
    },
    async mounted() {
        await this.loadBankAccounts();
    },
    methods: {
        formatCurrency(value) {
            if (value === null || value === undefined) return '0';
            return new Intl.NumberFormat('en-US').format(value);
        },
        getTypeColor(type) {
            const colors = {
                'TOPUP': 'green',
                'PURCHASE': 'blue',
                'REFUND': 'orange',
                'ADJUSTMENT': 'grey'
            };
            return colors[type] || 'primary';
        },
        async loadBankAccounts() {
            try {
                const res = await this.$axios.get('/api/bank_account/find');
                this.bankAccounts = res.data.data || res.data || [];
            } catch (err) {
                console.error("Failed to load bank accounts", err);
                this.$toast.error("Failed to load accounts list.");
            }
        },
        resetFilters() {
            this.selectedBankAccountId = null;
            this.dateRange = [];
            this.statement = null;
            this.error = null;
        },
        async fetchStatement() {
            if (!this.selectedBankAccountId) {
                this.error = "ກະລຸນາເລືອກບັນຊີທະນາຄານ (Please select an account)";
                return;
            }

            this.loading = true;
            this.error = null;

            try {
                let url = `/api/transactions/statement/${this.selectedBankAccountId}`;

                const params = new URLSearchParams();
                if (this.dateRange && this.dateRange.length === 2 && this.dateRange[0] && this.dateRange[1]) {
                    // Convert safely to Date objects
                    const start = new Date(this.dateRange[0]);
                    const end = new Date(this.dateRange[1]);
                    params.append('startDate', start.toISOString());
                    params.append('endDate', end.toISOString());
                }

                if (params.toString()) {
                    url += `?${params.toString()}`;
                }

                const res = await this.$axios.get(url);
                if (res.data && res.data.success) {
                    this.accountInfo = res.data.account;
                    this.statement = res.data.statement;
                    this.transactions = this.statement.transactions || [];

                    if (this.transactions.length === 0 && this.statement.openingBalance === 0) {
                        this.$toast.info("This account has no records yet.");
                    }
                } else {
                    this.error = "Unrecognized response format from server.";
                }
            } catch (err) {
                console.error("Failed to fetch statement", err);
                this.error = err.response?.data?.message || err.message || "Failed to generate account statement.";
            } finally {
                this.loading = false;
            }
        },
        exportExcel() {
            if (!this.transactions || this.transactions.length === 0) {
                this.$toast.warning("No data to export");
                return;
            }

            const excelData = this.transactions.map(t => ({
                'ເວລາບັນທຶກ (System Time)': new Date(t.createdAt).toLocaleString(),
                'ວັນທີທຸລະກິດ (Business Date)': t.businessDate || '',
                'ປະເພດ (Type)': t.transactionType,
                'ລາຍລະອຽດ (Description)': t.description,
                'ຜູ້ເຮັດທຸລະກຳ (Creator)': t.creator || '',
                'ຮັບເຂົ້າ (In)': t.amountIn,
                'ຖອນອອກ (Out)': t.amountOut,
                'ຍອດເຫຼືອ (Balance)': t.runningBalance
            }));

            // Calc summary
            excelData.push({
                'ເວລາບັນທຶກ (System Time)': '',
                'ວັນທີທຸລະກິດ (Business Date)': '',
                'ປະເພດ (Type)': '',
                'ລາຍລະອຽດ (Description)': 'ລວມທັງໝົດ (Total Summary)',
                'ຜູ້ເຮັດທຸລະກຳ (Creator)': '',
                'ຮັບເຂົ້າ (In)': this.statement.totalIn,
                'ຖອນອອກ (Out)': this.statement.totalOut,
                'ຍອດເຫຼືອ (Balance)': this.statement.closingBalance
            });

            if (this.$xlsx) {
                const ws = this.$xlsx.utils.json_to_sheet(excelData);
                const wb = this.$xlsx.utils.book_new();
                this.$xlsx.utils.book_append_sheet(wb, ws, "Account_Statement");
                this.$xlsx.writeFile(wb, `Account_Statement_${this.accountInfo.accountNumber}.xlsx`);
                this.$toast.success("Excel generation complete.");
            } else {
                this.$toast.error("XLSX plugin is not initialized.");
            }
        },
        generatePDF() {
            if (!this.statement) return;

            const html = `
                <html>
                <head>
                    <title>Account Statement - ${this.accountInfo.accountNumber}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;700&display=swap" rel="stylesheet">
                    <style>
                        body { font-family: 'Noto Sans Lao', sans-serif; font-size: 13px; padding: 25px; color: #111; margin: 0; }
                        .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px; }
                        .header h2 { margin: 0; padding: 0; font-size: 22px; }
                        .info-grid { display: flex; justify-content: space-between; margin-bottom: 20px; }
                        .info-box { width: 48%; }
                        table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 12px; }
                        th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
                        th { background-color: #f5f5f5; font-weight: bold; }
                        .text-right { text-align: right; }
                        .text-center { text-align: center; }
                        .text-success { color: #2e7d32; }
                        .text-error { color: #c62828; }
                        .summary { display: flex; justify-content: space-between; margin-top: 5px; margin-bottom: 20px; }
                        .summary-item { border: 1px solid #ddd; padding: 15px; border-radius: 4px; width: 23%; text-align: center; background-color: #fafafa; }
                        .summary-item span { display: block; font-size: 11px; color: #555; margin-bottom: 6px; }
                        .summary-item strong { font-size: 16px; color: #000; }
                        .row-hover:nth-child(even) { background-color: #fbfbfb; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h2>Account Statement / ລາຍງານເຄື່ອນໄຫວບັນຊີ</h2>
                    </div>
                    
                    <div class="info-grid">
                        <div class="info-box">
                            <strong style="color: #666">ຊື່ບັນຊີ / Account Name:</strong><br><span style="font-size: 16px; font-weight: bold;">${this.accountInfo.accountName}</span><br><br>
                            <strong style="color: #666">ເລກບັນຊີ / Account Number:</strong><br><span style="font-size: 14px;">${this.accountInfo.accountNumber} (${this.accountInfo.accountType})</span>
                        </div>
                        <div class="info-box text-right">
                            <strong style="color: #666">ຊ່ວງວັນທີ / Period:</strong><br><span style="font-size: 14px; font-weight: bold;">${this.formattedDateRange}</span><br><br>
                            <strong style="color: #666">ເວລາອອກບິນ / Generated:</strong><br><span style="font-size: 14px;">${new Date().toLocaleString()}</span>
                        </div>
                    </div>

                    <div class="summary">
                        <div class="summary-item">
                            <span>ຍອດຍົກມາ (Opening)</span>
                            <strong>${this.formatCurrency(this.statement.openingBalance)}</strong>
                        </div>
                        <div class="summary-item">
                            <span>ຮັບເຂົ້າ (Total In)</span>
                            <strong class="text-success">${this.formatCurrency(this.statement.totalIn)}</strong>
                        </div>
                        <div class="summary-item">
                            <span>ຖອນອອກ (Total Out)</span>
                            <strong class="text-error">${this.formatCurrency(this.statement.totalOut)}</strong>
                        </div>
                        <div class="summary-item">
                            <span>ຍອດເຫຼືອ (Closing)</span>
                            <strong>${this.formatCurrency(this.statement.closingBalance)}</strong>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ວັນທີທຸລະກິດ (Business Date)</th>
                                <th>ເວລາບັນທຶກ (System Time)</th>
                                <th>ປະເພດ (Type)</th>
                                <th>ລາຍລະອຽດ (Description)</th>
                                <th>ຜູ້ເຮັດທຸລະກຳ (Creator)</th>
                                <th class="text-right">ຮັບເຂົ້າ (In)</th>
                                <th class="text-right">ຖອນອອກ (Out)</th>
                                <th class="text-right">ຍອດເຫຼືອ (Balance)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.transactions.map(t => `
                            <tr class="row-hover">
                                <td class="text-center font-weight-bold"><strong>${t.businessDate || '-'}</strong></td>
                                <td style="font-size: 10px; color: #666;">${new Date(t.createdAt).toLocaleString()}</td>
                                <td class="text-center"><strong>${t.transactionType}</strong></td>
                                <td>${t.description}</td>
                                <td>${t.creator || ''}</td>
                                <td class="text-right ${t.amountIn > 0 ? 'text-success' : ''}">${t.amountIn > 0 ? '+' + this.formatCurrency(t.amountIn) : '-'}</td>
                                <td class="text-right ${t.amountOut > 0 ? 'text-error' : ''}">${t.amountOut > 0 ? '-' + this.formatCurrency(t.amountOut) : '-'}</td>
                                <td class="text-right"><strong>${this.formatCurrency(t.runningBalance)}</strong></td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </body>
                </html>
            `;

            // Open a blank window for printing
            const printWindow = window.open('', '_blank', 'height=800,width=1000');
            if (printWindow) {
                printWindow.document.write(html);
                printWindow.document.close();
                // We add a tiny delay to ensure the remote font is loaded before triggering the print dialog
                setTimeout(() => {
                    printWindow.focus();
                    printWindow.print();
                    printWindow.close();
                }, 600);
            } else {
                this.$toast.error("Please disable pop-up blockers to print.");
            }
        }
    }
}
</script>

<style scoped>
.pdf-container {
    font-family: 'Noto Sans Lao', sans-serif !important;
}

.date-picker-wrapper {
    width: 100%;
}

::v-deep .custom-date-input {
    height: 40px !important;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.42) !important;
    padding-left: 12px;
    width: 100%;
}

::v-deep .custom-date-input:focus {
    border-color: #1976d2 !important;
    outline: none;
}

.summary-card {
    height: 100%;
    transition: all 0.2s ease;
}

.summary-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.border-primary {
    border: 2px solid var(--v-primary-base, #1976D2) !important;
}

.statement-table ::v-deep th {
    background-color: #f5f5f5 !important;
    font-size: 13px !important;
    white-space: nowrap;
}

@media print {

    /* Hide everything outside of print area */
    body * {
        visibility: hidden;
    }

    #printable-statement,
    #printable-statement * {
        visibility: visible;
    }

    #printable-statement {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }

    /* Remove shadow/borders for clean print */
    .v-card {
        margin-bottom: 20px;
        box-shadow: none !important;
        border: 1px solid #ddd;
    }
}
</style>
