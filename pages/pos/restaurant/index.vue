<template>
    <div class="pa-6 pos-restaurant-container">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>

        <!-- Header / Control Bar -->
        <v-row class="mb-4 align-center">
            <v-col cols="12" md="6">
                <h2 class="text-h5 font-weight-bold d-flex align-center gap-2">
                    <span class="text-h4">🍽️</span> 
                    <span>Restaurant Table Overview</span>
                    <v-chip v-if="activeWaiterCalls.length > 0" color="red" text-color="white" small class="ml-2 animate-pulse">
                        🔔 {{ activeWaiterCalls.length }} Waiter Call(s)
                    </v-chip>
                    <v-chip v-if="activeDraftOrders.length > 0" color="amber darken-2" text-color="white" small class="ml-2 animate-pulse">
                        📝 {{ activeDraftOrders.length }} Draft Order(s)
                    </v-chip>
                </h2>
            </v-col>
            <v-col cols="12" md="6" class="text-md-right">
                <v-btn color="primary" class="elevation-2 mr-2" @click="openQrSetupDialog">
                    <v-icon left>mdi-qrcode-scan</v-icon>
                    Generate & Print Table QRs
                </v-btn>
                <v-btn color="grey lighten-2" class="elevation-1" @click="pollActiveRequests">
                    <v-icon left>mdi-refresh</v-icon>
                    Refresh Status
                </v-btn>
            </v-col>
        </v-row>

        <!-- Active Alerts Banner -->
        <v-alert v-if="activeWaiterCalls.length > 0" type="error" dismissible class="mb-4">
            <div class="d-flex align-center justify-space-between">
                <div>
                    <strong>🔔 Active Waiter Calls:</strong>
                    <span v-for="call in activeWaiterCalls" :key="call.id || call.table" class="ml-2 badge-item">
                        {{ call.table }} ({{ call.time || 'Just now' }})
                    </span>
                </div>
            </div>
        </v-alert>

        <v-alert v-if="activeDraftOrders.length > 0" type="warning" dismissible class="mb-4">
            <div class="d-flex align-center justify-space-between">
                <div>
                    <strong>📝 Incoming Customer Draft Orders:</strong>
                    <span v-for="order in activeDraftOrders" :key="order.id || order.table" class="ml-2 badge-item">
                        {{ order.table }} ({{ order.items ? order.items.length : 0 }} items)
                    </span>
                </div>
            </div>
        </v-alert>

        <!-- TABLE GRID AREA -->
        <v-row>
            <v-col cols="12">
                <div class="row">
                    <div v-for="tb in orderTableList" :key="tb.id" class="col-12 col-md-4 col-sm-6 col-xs-12">
                        <v-card 
                            class="mx-auto table-card elevation-4 mb-4 pa-2" 
                            :class="{ 
                                'has-waiter-call': hasWaiterCall(tb.name),
                                'has-draft-order': hasDraftOrder(tb.name)
                            }"
                            min-height="190"
                        >
                            <div class="table-card-header d-flex justify-space-between align-center pa-2">
                                <span class="table-name font-weight-bold text-h6">{{ tb.name }}</span>
                                <v-chip small :color="getTableStatusColor(tb.name)" text-color="white">
                                    {{ getTableStatusText(tb.name) }}
                                </v-chip>
                            </div>

                            <v-card-text class="text-center pa-2">
                                <div v-if="hasWaiterCall(tb.name)" class="call-badge py-1">
                                    <span class="bell-icon">🔔</span>
                                    <div class="text-caption red--text font-weight-bold">Waiter Requested!</div>
                                </div>
                                <div v-else-if="hasDraftOrder(tb.name)" class="draft-badge py-1">
                                    <span class="order-icon">📝</span>
                                    <div class="text-caption amber--text text--darken-3 font-weight-bold">
                                        {{ getDraftOrderSummary(tb.name) }}
                                    </div>
                                </div>
                                <div v-else class="py-2 grey--text">
                                    <v-icon large color="grey lighten-1">mdi-table-chair</v-icon>
                                    <div class="text-caption">Scan QR code to view menu</div>
                                </div>
                            </v-card-text>

                            <v-card-actions class="pa-2 d-flex justify-space-around">
                                <v-btn v-if="hasWaiterCall(tb.name)" small color="red" dark class="flex-grow-1 mr-1" @click="dismissWaiterCall(tb.name)">
                                    <v-icon small left>mdi-bell-off</v-icon> Clear Call
                                </v-btn>
                                <v-btn v-if="hasDraftOrder(tb.name)" small color="amber darken-2" dark class="flex-grow-1 mr-1" @click="openDraftOrderModal(tb.name)">
                                    <v-icon small left>mdi-clipboard-text</v-icon> View Draft
                                </v-btn>
                                <v-btn small icon color="primary" title="Show QR Code" @click="showSingleTableQr(tb)">
                                    <v-icon>mdi-qrcode</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>
                </div>
            </v-col>
        </v-row>

        <!-- QR SETUP & GENERATOR DIALOG -->
        <v-dialog v-model="qrSetupDialog" max-width="700">
            <v-card>
                <v-card-title class="headline primary white--text">
                    <v-icon left dark>mdi-qrcode</v-icon> Table QR Code Generator & Printer
                </v-card-title>
                <v-card-text class="pt-4">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="baseUrl"
                                label="E-Menu Base URL (IP + Port)"
                                placeholder="http://192.168.1.100:3333/e-menu"
                                hint="Customers will scan QR codes pointing to this URL on their phones."
                                persistent-hint
                                outlined
                                dense
                                @input="generateQrCode"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select
                                v-model="selectedQrTable"
                                :items="orderTableList"
                                item-text="name"
                                item-value="name"
                                label="Select Table"
                                outlined
                                dense
                                @change="generateQrCode"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="6" class="text-center">
                            <div v-if="qrDataUrl" class="qr-preview-box pa-2 border rounded">
                                <img :src="qrDataUrl" alt="Table QR Code" style="max-width: 160px;" />
                                <div class="font-weight-bold text-caption mt-1">{{ selectedQrTable }}</div>
                                <div class="text-caption text-truncate grey--text">{{ getFullQrUrl(selectedQrTable) }}</div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="pa-4">
                    <v-btn color="grey" text @click="qrSetupDialog = false">Close</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="success" dark @click="printCurrentQr">
                        <v-icon left>mdi-printer</v-icon> Print QR Sticker
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- DRAFT ORDER DETAILS DIALOG -->
        <v-dialog v-model="draftOrderDialog" max-width="600">
            <v-card v-if="selectedDraftOrder">
                <v-card-title class="amber darken-2 white--text">
                    📝 Customer Draft Order - {{ selectedDraftOrder.table }}
                </v-card-title>
                <v-card-text class="pt-4">
                    <div class="text-subtitle-2 mb-2">Order Items:</div>
                    <v-list dense class="border rounded">
                        <v-list-item v-for="(item, idx) in selectedDraftOrder.items" :key="idx">
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-bold">{{ item.pro_name }}</v-list-item-title>
                                <v-list-item-subtitle v-if="item.notes" class="orange--text">Note: {{ item.notes }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action-text class="font-weight-bold">
                                x{{ item.quantity }} = ₭{{ ((item.pro_price || 0) * item.quantity).toLocaleString() }}
                            </v-list-item-action-text>
                        </v-list-item>
                    </v-list>
                    <div class="d-flex justify-space-between mt-3 font-weight-bold text-subtitle-1 pa-2 grey lighten-4 rounded">
                        <span>Total Estimated Amount:</span>
                        <span class="green--text text--darken-2">₭{{ calculateDraftTotal(selectedDraftOrder).toLocaleString() }}</span>
                    </div>
                </v-card-text>
                <v-card-actions class="pa-4">
                    <v-btn color="red" text @click="rejectDraftOrder(selectedDraftOrder.table)">Reject</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="success" dark @click="acceptDraftOrder(selectedDraftOrder)">
                        <v-icon left>mdi-check-circle</v-icon> Accept & Load to Cart
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
import { getFormatNum, swalError2, swalSuccess } from '~/common'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import QRCode from 'qrcode'

export default {
    layout: "login",
    middleware: 'auths',
    data() {
        return {
            barcode: '',
            timer: null,
            tab: null,
            orderTableList: [
                { id: 1, name: 'TB 1' },
                { id: 2, name: 'TB 2' },
                { id: 3, name: 'TB 3' },
                { id: 4, name: 'TB 4' },
                { id: 5, name: 'TB 5' },
                { id: 6, name: 'TB 6' },
            ],
            productSelectedList: [],
            isloading: false,
            productList: [],
            categoryList: [],
            pageLine: 30,
            search: '',
            paymentList: [],
            productSelectedFromBarcode: null,
            lastKeyTime: 0,
            isScanning: false,
            preScanTarget: null,
            preScanValue: '',

            // E-Menu & Call Waiter State
            baseUrl: '',
            qrSetupDialog: false,
            selectedQrTable: 'TB 1',
            qrDataUrl: '',
            activeWaiterCalls: [],
            activeDraftOrders: [],
            draftOrderDialog: false,
            selectedDraftOrder: null,
            pollTimer: null,
        }
    },
    async mounted() {
        window.addEventListener('keydown', this.handleKeyDown);

        if (typeof window !== 'undefined') {
            this.baseUrl = window.location.origin + '/e-menu'
        }

        this.pollActiveRequests();
        this.pollTimer = setInterval(this.pollActiveRequests, 4000);

        if (typeof window !== 'undefined') {
            window.addEventListener('storage', this.handleStorageChange);
        }
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
        if (this.pollTimer) clearInterval(this.pollTimer);
        if (typeof window !== 'undefined') {
            window.removeEventListener('storage', this.handleStorageChange);
        }
    },
    computed: {
        ...mapGetters({
            searchKeyword: 'searchKeyword',
            currenctSelectedCategoryId: 'currenctSelectedCategoryId',
            currentSelectedLocation: 'currentSelectedLocation',
            findAllCurrency: 'findAllCurrency',
        }),

        filterProduct() {
            if (!this.searchKeyword) {
                if (this.currenctSelectedCategoryId != 9999) {
                    return this.productList.filter(item => item.pro_category === this.currenctSelectedCategoryId);
                }
                return this.productList;
            }
            if (this.currenctSelectedCategoryId == 9999) {
                return this.productList.filter(item => {
                    const nameMatch = (item.pro_name || '').toLowerCase().includes(this.searchKeyword)
                    const codeMatch = (item.product_code || '').toLowerCase().includes(this.searchKeyword)
                    return nameMatch || codeMatch
                });
            }
            return this.productList.filter(item => {
                const categoryMatch = item.pro_category === this.currenctSelectedCategoryId
                const nameMatch = (item.pro_name || '').toLowerCase().includes(this.searchKeyword)
                const codeMatch = (item.product_code || '').toLowerCase().includes(this.searchKeyword)
                return categoryMatch && (nameMatch || codeMatch)
            });
        },
    },
    methods: {
        ...mapActions(['addProduct']),

        playAudioNotification() {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return;
                const ctx = new AudioCtx();

                const osc1 = ctx.createOscillator();
                const gain1 = ctx.createGain();
                osc1.type = 'sine';
                osc1.frequency.setValueAtTime(880, ctx.currentTime);
                gain1.gain.setValueAtTime(0.15, ctx.currentTime);
                osc1.connect(gain1);
                gain1.connect(ctx.destination);
                osc1.start();
                osc1.stop(ctx.currentTime + 0.15);

                setTimeout(() => {
                    const osc2 = ctx.createOscillator();
                    const gain2 = ctx.createGain();
                    osc2.type = 'sine';
                    osc2.frequency.setValueAtTime(1200, ctx.currentTime);
                    gain2.gain.setValueAtTime(0.2, ctx.currentTime);
                    osc2.connect(gain2);
                    gain2.connect(ctx.destination);
                    osc2.start();
                    osc2.stop(ctx.currentTime + 0.25);
                }, 150);
            } catch (err) {
                console.log('Audio playback prevented or unsupported:', err);
            }
        },

        async pollActiveRequests() {
            try {
                const calls = JSON.parse(localStorage.getItem('dc_waiter_calls') || '[]');
                const draftOrders = JSON.parse(localStorage.getItem('dc_draft_orders') || '[]');

                const prevCallCount = this.activeWaiterCalls.length;
                const prevOrderCount = this.activeDraftOrders.length;

                this.activeWaiterCalls = calls;
                this.activeDraftOrders = draftOrders;

                if (calls.length > prevCallCount || draftOrders.length > prevOrderCount) {
                    this.playAudioNotification();
                }
            } catch (err) {
                console.error('Error polling active requests:', err);
            }
        },

        handleStorageChange(event) {
            if (event.key === 'dc_waiter_calls' || event.key === 'dc_draft_orders') {
                this.pollActiveRequests();
            }
        },

        hasWaiterCall(tableName) {
            return this.activeWaiterCalls.some(c => c.table === tableName);
        },

        hasDraftOrder(tableName) {
            return this.activeDraftOrders.some(o => o.table === tableName);
        },

        getTableStatusColor(tableName) {
            if (this.hasWaiterCall(tableName)) return 'red';
            if (this.hasDraftOrder(tableName)) return 'amber darken-2';
            return 'grey';
        },

        getTableStatusText(tableName) {
            if (this.hasWaiterCall(tableName)) return '🔔 CALLING';
            if (this.hasDraftOrder(tableName)) return '📝 DRAFT ORDER';
            return 'AVAILABLE';
        },

        getDraftOrderSummary(tableName) {
            const order = this.activeDraftOrders.find(o => o.table === tableName);
            if (!order || !order.items) return '1 Order Draft';
            return `${order.items.length} item(s) pending`;
        },

        async dismissWaiterCall(tableName) {
            try {
                await this.$axios.post('/api/call-waiter/clear', { table: tableName }).catch(() => {});
            } catch (e) {}

            const localCalls = JSON.parse(localStorage.getItem('dc_waiter_calls') || '[]');
            const updated = localCalls.filter(c => c.table !== tableName);
            localStorage.setItem('dc_waiter_calls', JSON.stringify(updated));

            this.pollActiveRequests();
            swalSuccess(this.$swal, 'Success', `Waiter call for ${tableName} cleared`);
        },

        openDraftOrderModal(tableName) {
            this.selectedDraftOrder = this.activeDraftOrders.find(o => o.table === tableName);
            if (this.selectedDraftOrder) {
                this.draftOrderDialog = true;
            }
        },

        calculateDraftTotal(order) {
            if (!order || !order.items) return 0;
            return order.items.reduce((sum, i) => sum + ((i.pro_price || 0) * (i.quantity || 1)), 0);
        },

        acceptDraftOrder(order) {
            if (!order || !order.items) return;
            for (const item of order.items) {
                for (let q = 0; q < (item.quantity || 1); q++) {
                    this.addProduct(item);
                }
            }
            this.rejectDraftOrder(order.table);
            this.draftOrderDialog = false;
            swalSuccess(this.$swal, 'Order Accepted', `Draft order for ${order.table} loaded into POS Cart!`);
        },

        async rejectDraftOrder(tableName) {
            try {
                await this.$axios.post('/api/order/draft/clear', { table: tableName }).catch(() => {});
            } catch (e) {}

            const localDrafts = JSON.parse(localStorage.getItem('dc_draft_orders') || '[]');
            const updated = localDrafts.filter(o => o.table !== tableName);
            localStorage.setItem('dc_draft_orders', JSON.stringify(updated));

            this.draftOrderDialog = false;
            this.pollActiveRequests();
        },

        openQrSetupDialog() {
            this.qrSetupDialog = true;
            this.generateQrCode();
        },

        showSingleTableQr(table) {
            this.selectedQrTable = table.name;
            this.openQrSetupDialog();
        },

        getFullQrUrl(tableName) {
            const cleanBaseUrl = (this.baseUrl || '').replace(/\/+$/, '');
            return `${cleanBaseUrl}?table=${encodeURIComponent(tableName)}`;
        },

        async generateQrCode() {
            try {
                const targetUrl = this.getFullQrUrl(this.selectedQrTable);
                this.qrDataUrl = await QRCode.toDataURL(targetUrl, {
                    width: 300,
                    margin: 2,
                    color: {
                        dark: '#01532B',
                        light: '#FFFFFF'
                    }
                });
            } catch (err) {
                console.error('QR code generation failed:', err);
            }
        },

        printCurrentQr() {
            const printWindow = window.open('', '_blank');
            const targetUrl = this.getFullQrUrl(this.selectedQrTable);
            
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Table QR Code - ${this.selectedQrTable}</title>
                    <style>
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center; padding: 40px; }
                        .qr-card { border: 3px solid #01532B; border-radius: 20px; padding: 30px; display: inline-block; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
                        h1 { color: #01532B; margin-bottom: 5px; font-size: 28px; }
                        h2 { color: #333; margin-top: 0; font-size: 22px; }
                        img { margin: 20px 0; width: 220px; height: 220px; }
                        p { color: #666; font-size: 14px; margin-top: 10px; }
                    </style>
                </head>
                <body>
                    <div class="qr-card">
                        <h1>🍽️ SCAN TO VIEW MENU</h1>
                        <h2>${this.selectedQrTable}</h2>
                        <img src="${this.qrDataUrl}" alt="QR Code" />
                        <p>Scan with your mobile camera to see menu & call waiter</p>
                        <p style="font-size: 11px; color: #999;">${targetUrl}</p>
                    </div>
                    <script>
                        window.onload = function() { window.print(); window.close(); };
                    <\/script>
                </body>
                </html>
            `);
            printWindow.document.close();
        },

        findCurrency(currencyId) {
            return this.findAllCurrency.find(el => el.id == currencyId);
        },
        findProductFromBarcode(barcode) {
            this.productSelectedFromBarcode = this.productList.find(el => el.barCode == barcode)
            if (this.productSelectedFromBarcode) {
                this.addProduct(this.productSelectedFromBarcode)
                this.productSelectedFromBarcode = null;
            }
        },
        handleKeyDown(event) {
            const now = performance.now()
            const diff = now - (this.lastKeyTime || 0)
            this.lastKeyTime = now
            const isFast = diff < 35
            const target = event.target
            const isInputFocused = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')

            if (isFast) {
                this.isScanning = true
            } else {
                this.isScanning = false
            }

            if (this.isScanning) {
                if (isInputFocused) {
                    event.preventDefault()
                    if (this.preScanTarget === target) {
                        target.value = this.preScanValue
                        const inputEvent = new Event('input', { bubbles: true })
                        target.dispatchEvent(inputEvent)
                        this.preScanTarget = null
                    }
                }
            } else if (isInputFocused) {
                this.preScanTarget = target
                this.preScanValue = target.value
            } else {
                this.preScanTarget = null
                this.preScanValue = ''
            }

            if (this.timer) {
                clearInterval(this.timer)
            }
            if (event.key === 'Enter') {
                if (this.barcode) {
                    this.findProductFromBarcode(this.barcode)
                }
                this.barcode = '';
                this.isScanning = false
                this.preScanTarget = null
                return
            }
            if (event.key !== 'Shift') {
                this.barcode += event.key;
            }
            this.timer = setInterval(() => {
                this.barcode = '';
                this.isScanning = false
                this.preScanTarget = null
            }, 20);
        },
        async loadProduct() {
            this.isloading = true
            this.productList = []
            await this.$axios
                .get(`product_f/${this.currentSelectedLocation['id']}`)
                .then((res) => {
                    for (const iterator of res.data.data) {
                        iterator['localPrice'] = iterator['pro_price']
                        this.productList.push(iterator)
                    }
                })
                .catch((er) => {
                    this.message = er
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false
        },
        async loadCategory() {
            this.isloading = true;
            this.categoryList = []
            await this.$axios
                .get('/api/category/find')
                .then((res) => {
                    for (const iterator of res.data) {
                        this.categoryList.push(iterator);
                    }
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async loadPayment() {
            this.isloading = true;
            this.paymentList = []
            await this.$axios
                .get('/api/paymentMethod/find')
                .then((res) => {
                    for (const iterator of res.data) {
                        this.paymentList.push(iterator);
                    }
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
    }
}
</script>
  
<style scoped>
.pos-restaurant-container {
    background: #f8fafc;
    min-height: 100vh;
}

.table-card {
    border-radius: 16px !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 2px solid #e2e8f0;
}

.table-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

.has-waiter-call {
    border-color: #ef4444 !important;
    animation: pulse-alert 1.2s infinite;
}

.has-draft-order {
    border-color: #f59e0b !important;
    animation: pulse-draft 1.8s infinite;
}

@keyframes pulse-alert {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.6);
        background-color: #ffffff;
    }
    50% {
        box-shadow: 0 0 0 12px rgba(239, 68, 68, 0);
        background-color: #fef2f2;
    }
}

@keyframes pulse-draft {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5);
    }
    50% {
        box-shadow: 0 0 0 8px rgba(245, 158, 11, 0);
        background-color: #fffbeb;
    }
}

.bell-icon, .order-icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 2px;
}

.bell-icon {
    animation: ring 1s infinite;
}

@keyframes ring {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(15deg); }
    40% { transform: rotate(-15deg); }
    60% { transform: rotate(10deg); }
    80% { transform: rotate(-10deg); }
}

.badge-item {
    background: rgba(0,0,0,0.15);
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.85rem;
}

.animate-pulse {
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}

.border {
    border: 1px solid #e2e8f0;
}
</style>