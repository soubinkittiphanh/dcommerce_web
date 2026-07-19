<template>
    <!-- TODO: RECEIVE MAPPING MODULES -->
    <div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="customerDialog" max-width="1024">
            <customer-list @close-dialog="customerDialog = false"></customer-list>
        </v-dialog>
        <v-dialog v-model="cancelConfirmDialog" max-width="1024">
            <cancel-ticket-form @refresh="$emit('reload')" :id="localHeaderId" :customerId="onlineCustomerId"
                @close-dialog="cancelConfirmDialog = false"></cancel-ticket-form>
        </v-dialog>
        <v-dialog v-model="pricingDialog" max-width="1024">
            <pricing-option :key="pricingDialogKey" :isBackend="true" @new-price-update="updatePricing"
                @close-dialog="pricingDialog = false" :record-id="productPricingSelected"></pricing-option>
        </v-dialog>

        <!-- PO Browse Dialog -->
        <v-dialog v-model="poBrowseDialog" max-width="900">
            <v-card rounded="lg">
                <v-toolbar color="primary" dark flat dense>
                    <v-toolbar-title class="text-body-1 font-weight-bold">ຄົ້ນຫາໃບສັ່ງຊື້ (Browse PO)</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon small @click="poBrowseDialog = false"><v-icon small>mdi-close</v-icon></v-btn>
                </v-toolbar>
                <v-card-title class="pa-4">
                    <v-text-field
                        v-model="poSearch"
                        append-icon="mdi-magnify"
                        label="ຊອກຫາເລກບິນ, ຮ້ານຄ້າ..."
                        single-line
                        hide-details
                        outlined
                        dense
                    ></v-text-field>
                </v-card-title>
                <v-card-text class="pa-0">
                    <v-data-table
                        :headers="poHeaders"
                        :items="selectablePOs"
                        :search="poSearch"
                        :loading="loadingPos"
                        dense
                        class="elevation-0"
                    >
                        <template v-slot:[`item.id`]="{ item }">
                            <span class="font-weight-bold primary--text">#{{ item.id }}</span>
                        </template>
                        <template v-slot:[`item.status`]="{ item }">
                            <v-chip x-small :color="getPoStatusColor(item.status)" dark class="font-weight-black">
                                {{ getPoStatusLabel(item.status) }}
                            </v-chip>
                        </template>
                        <template v-slot:[`item.total`]="{ item }">
                            <span class="font-weight-bold">{{ getFormatNum(item.total) }}</span>
                        </template>
                        <template v-slot:[`item.action`]="{ item }">
                            <v-btn small depressed color="success" class="font-weight-bold" @click="selectPO(item)">
                                ເລືອກ
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-dialog>
        <!-- ************ Bottom sheet show error message ************* -->
        <v-bottom-sheet v-model="sheet" inset>
            <v-sheet class="text-center" height="200px">
                <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
                    close
                </v-btn>
                <div class="my-3">
                    {{ validateErrorMessage }}
                </div>
            </v-sheet>
        </v-bottom-sheet>

        <v-card>
            <v-card-subtitle>
                <v-row>
                    <v-col cols="6">
                        <v-chip class="pa-5" color="primary" label text-color="white">
                            <v-icon start>mdi-label</v-icon>
                            <h3>RECEIVING </h3>
                        </v-chip>
                    </v-col>
                    <v-col cols="6" style="text-align: right;">
                        <v-btn v-if="isQuotation" size="large" variant="outlined" @click="postToInvoice" class="primary"
                            rounded>
                            <span class="mdi mdi-cancel"></span>Make to invoice
                        </v-btn>
                        <v-btn :disabled="!localIsUpdate || !transaction.isActive" size="large" variant="outlined"
                            @click="cancelOrder" class="warning" rounded>
                            <span class="mdi mdi-printer-outline"></span>ຍົກເລີກບິນ
                        </v-btn>
                        <v-btn size="large" variant="outlined" @click="printVoucher" class="primary" rounded>
                            <span class="mdi mdi-printer-outline"></span>ພິມ (Print)
                        </v-btn>
                    </v-col>
                </v-row>

            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text class="pa-1">
                <!-- ******* Header Card OPEN *******-->
                <v-card :style="headerError ? `outline:1px solid red` : ``" class="pa-1">
                    RECID: {{ transaction.id }}
                    <v-card-text>

                        <div>
                            <v-row>
                                <v-col cols="4">
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field type="date" label="ວັນທີ*" v-model="transaction.bookingDate"
                                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-autocomplete item-text="name" item-value="id" :items="findAllLocation"
                                                label="ສາງ*" v-model="transaction.locationId"></v-autocomplete>
                                        </v-col>
                                        <!-- <v-col cols="12">
                                            <v-text-field v-model="transaction.discount" label="ສ່ວນຫລຸດ" required
                                                v-comma-thousand></v-text-field>
                                        </v-col> -->
                                        <v-col cols="12" class="d-flex align-center">
                                            <v-text-field v-model="transaction.poHeaderId" label="PO REFNO." disabled
                                                v-comma-thousand class="flex-grow-1"></v-text-field>
                                            <v-btn v-if="!transaction.poHeaderId" small depressed color="primary" class="ml-2 mt-2" @click="openPoBrowseDialog" :disabled="localIsUpdate">
                                                <v-icon left small>mdi-magnify</v-icon>Browse PO
                                            </v-btn>
                                            <v-btn v-else small depressed color="error" class="ml-2 mt-2" @click="clearPoSelection" :disabled="localIsUpdate">
                                                <v-icon left small>mdi-close</v-icon>Clear
                                            </v-btn>
                                        </v-col>

                                    </v-row>
                                </v-col>
                                <v-col cols="4">
                                    <v-row>
                                        <!-- <v-col cols="12">
                                            <v-text-field type="date" label="ວັນທີຮັບເຄື່ອງ*"
                                                v-model="transaction.deliveryDate"
                                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                                        </v-col> -->
                                        <v-col cols="12">
                                            <v-autocomplete item-text="name" item-value="id" :items="vendorList"
                                                label="ຮ້ານຄ້າ*" v-model="transaction.vendorId"></v-autocomplete>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-autocomplete @input="currencyChange" item-text="code" item-value="id"
                                                :items="currencyList" label="ສະກຸນເງິນ*"
                                                v-model="transaction.currencyId"></v-autocomplete>
                                        </v-col>
                                        <!-- <v-col cols="12">
                                            <v-text-field v-model="transaction.exchangeRate" disabled label="ອັດຕາແລກປ່ຽນ*"></v-text-field>
                                        </v-col> -->
                                        <v-col cols="6">ອັດຕາແລກປ່ຽນ: {{ getFormatNum(transaction.exchangeRate)
                                            }}</v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="4" style="text-align: end;">
                                    <v-row>
                                        <!-- {{ grandTotal }} -->
                                        <v-col cols="12"><v-textarea label="Notes"
                                                v-model="transaction.notes"></v-textarea></v-col>
                                        <v-col cols="12" v-if="transaction.user">ຜູ້ລົງ: {{ transaction.user.cus_id }}
                                        </v-col>
                                        <v-col cols="12" v-if="transaction.user">ຊື່: {{ transaction.user.cus_name
                                            }}</v-col>
                                        <v-col cols="12">
                                            <v-text-field disabled>
                                                <template v-slot:label>
                                                    <span style="color: black; font-weight: bold;">{{ `Total Amount:
                                                        ${getFormatNum(grandTotal)}` }}</span>
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" v-if="totalsByCurrency.length > 1" class="mt-n4">
                                            <div class="mb-1 text-caption font-weight-bold grey--text">ລາຍລະອຽດສະກຸນເງິນ / Currency Breakdown:</div>
                                            <v-chip v-for="c in totalsByCurrency" :key="c.code" small label outlined color="primary" class="mr-2 font-weight-bold">
                                                {{ c.code }}: {{ getFormatNum(c.total) }}
                                            </v-chip>
                                        </v-col>
                                    </v-row>
                                </v-col>

                            </v-row>

                        </div>

                    </v-card-text>
                </v-card>
                <!-- ******* Header Card CLOSE *******-->
                <v-divider></v-divider>
                <!-- ******* Line Card OPEN *******-->

                <v-data-table v-if="transaction.lines" :headers="headers" :search="search" :items="transaction.lines">
                    <template v-slot:item="{ item }">
                        <tr :style="errorLineNumber == transaction.lines.indexOf(item) ? `outline: 1px solid red` : ``">
                            <td :class="errorLineNumber == transaction.lines.indexOf(item) ? `error` : ``">
                                {{ transaction.lines.indexOf(item) + 1 }}
                            </td>
                            <td>
                                <v-autocomplete
                                    :disabled="sourceAPLID == 'PO' || !!transaction.poHeaderId || (item.id != null)"
                                    @input="productChange(item)" item-text="pro_name" item-value="id"
                                    :items="productList" label="ສິນຄ້າ*" v-model="item.productId"></v-autocomplete>
                            </td>
                            <td> <v-text-field @input="quantityChange(item)" v-model="item.qty" label="ຈຳນວນ"
                                    v-comma-thousand :rules="[numberCommaRule]"></v-text-field>
                            </td>
                            <td>
                                <v-autocomplete @input="unitChange(item)" item-text="name" item-value="id"
                                    :items="unitList" label="ຫົວຫນ່ວຍ*" v-model="item.unitId"></v-autocomplete>
                            </td>
                            <td>
                                <v-text-field @input="unitRateChange(item)" v-model="item.rate" label="ຈນ ຕໍ່ ຫົວຫນ່ວຍ"
                                    v-comma-thousand :rules="[numberCommaRule]"></v-text-field>
                            </td>
                            <td style="text-align: right;">
                                <v-text-field @input="priceChange(item)" v-model="item.price" label="ລາຄາ"
                                    v-comma-thousand :rules="[numberCommaRule]"></v-text-field>
                                <div class="text-caption grey--text text-right mt-n1" style="font-size: 0.7rem !important;" v-if="getLineCurrency(item).id !== transaction.currencyId">
                                    ({{ getFormatNum(getLineConvertedPrice(item)) }} {{ (findCurrency(transaction.currencyId) || {}).code }})
                                </div>
                            </td>
                            <!-- <td>
                                <v-text-field @input="discountChange(item)" :rules="[numberCommaRule]" v-comma-thousand
                                    v-model="item.discount" label="ສ່ວນຫລຸດ"></v-text-field>
                            </td> -->
                            <td style="text-align: right; font-weight: bold;" class="primary--text">
                                <div>{{ getFormatNum(getLineConvertedTotal(item)) }}</div>
                                <div class="text-caption grey--text text-right font-weight-regular mt-n1" style="font-size: 0.7rem !important;">
                                    {{ getFormatNum(getLineOriginalTotal(item)) }} {{ getLineCurrency(item).code }}
                                </div>
                            </td>
                            <td>
                                <v-btn :disabled="!transaction.isActive || !updateAllow" color="error" text
                                    @click="deleteItem(item)" v-on:keydown="handleKeyDown">
                                    <i class="fas fa-trash"></i>
                                </v-btn>
                            </td>

                        </tr>

                    </template>
                </v-data-table>

                <!-- ******* Line Card CLOSE *******-->
                <tr v-if="transaction.lines.length == 0">
                    <td>
                        <v-btn size="large" variant="outlined" @click="newRow" class="primary" rounded>
                            <span class="mdi mdi-plus"></span>
                        </v-btn>
                    </td>
                </tr>
                <!-- <v-row>
                    <v-col cols="12" style="text-align: right;">
                       ຍອດລວມທັງໝົດ: {{ getFormatNum(grandTotal) }}
                    </v-col>
                </v-row> -->
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="toggleDialog">
                    Close
                </v-btn>
                <v-btn :disabled="!transaction.isActive || !updateAllow" color="primary" rounded variant="text"
                    @click="postTransaction">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { mapActions, mapGetters } from 'vuex'
import PricingOption from '~/components/PricingOption.vue'
import { swalSuccess, swalError2, confirmSwal, dayCount, getNextDate, replaceAll } from '~/common'
import CancelTicketForm from './CancelTicketForm.vue';
import CurrencyHelper from '~/utils/currency-helper';
import { generateReceivingHTML } from '~/common/printTemplates'
export default {
    components: { PricingOption, CancelTicketForm },
    props: {
        POTransaction: {
            type: Object,
            default: null,
        },
        sourceAPLID: {
            type: String,
            default: null,
        },
        headerId: {
            type: Number,
            default: 0,
        },
        isQuotation: {
            type: Boolean,
            default: false
        },
        isUpdate: {
            type: Boolean,
            default: false
        },
        updateAllow: {
            type: Boolean,
            default: true
        },
    },
    directives: {
        commaThousand
    },
    async created() {
        await this.loadVendor();
        const today = new Date().toISOString().substr(0, 10);
        console.log(`PO Transaction: ${JSON.stringify(this.POTransaction)}`);
        if (this.sourceAPLID == 'PO') {
            // 
            // ********* We need to check if PO already receive be4, we need to load that RECEIVE  *******//
            // await this.loadTransactionFromPoID(this.POTransaction.id)
            // ********* CHECK IF THIS PO HAS ALREADY RECEIVING ID CREATED *******//
            this.transaction.lines = this.POTransaction.lines
            this.transaction.poHeaderId = this.POTransaction.id
            this.transaction.bookingDate = today;
            this.transaction.vendorId = this.POTransaction.vendorId;
            this.transaction.paymentId = 1;
            this.transaction.locationId = this.currentTerminal['locationId']
            this.transaction.currencyId = this.POTransaction.currencyId;
            return await this.loadTransactionFromPoID(this.POTransaction.id)
        }
        if (this.localIsUpdate) {
            console.log("View old record");
            this.isloading = true
            await this.loadTransaction()
            this.isloading = false
        } else {
            this.transaction.bookingDate = today;
            this.transaction.deliveryDate = today;
            this.transaction.clientId = 1;
            this.transaction.paymentId = 1;
            this.transaction.currencyId = 1;
            this.newRow();
        }

        // TODO: Add pricing option here
    },
    methods: {
        async loadVendor() {
            await this.$axios.get("api/vendor/find").then(response => {
                this.isloading = true
                this.vendorList = response.data
            }).catch(error => {
                console.log("Error ", error);
            })
            this.isloading = false
        },
        cancelOrder() {
            this.onlineCustomerId = this.transaction.dynamic_customer.id;
            this.cancelConfirmDialog = true;
        },
        updatePricing(priceInfo) {
            let newPrice = priceInfo['amount']
            console.log(`New pricing ${newPrice}`);
            console.log(`New pricing ${JSON.stringify(this.transaction.lines[0])}`);
            const idx = this.transaction.lines.findIndex(el => el['productId'] == this.productPricingSelected)
            if (idx < 0) return
            const qty = this.transaction.lines[idx]["qty"]
            const rate = this.transaction.lines[idx]["rate"]
            const discount = this.transaction.lines[idx]["discount"]
            if (priceInfo['type'] != 'Price') {
                // ************ Increase price by percentage ************ //
                let currentPrice = this.transaction.lines[idx]['price']
                const updatedPrice = (currentPrice * newPrice / 100) + currentPrice;
                this.transaction.lines[idx]['total'] = (qty * rate * (updatedPrice)) - discount;
                this.transaction.lines[idx]['price'] = updatedPrice;
            } else {
                this.transaction.lines[idx]['total'] = (qty * rate * (newPrice)) - discount;
                this.transaction.lines[idx]['price'] = newPrice;
            }
        },
        pricingLogig(item) {
            console.log(`PRINCING CLICK....${JSON.stringify(item)}`);
            this.productPricingSelected = item['productId'];
            this.pricingDialogKey += 1
            this.pricingDialog = true;
        },
        findCurrency(currencyId) {
            return this.findAllCurrency.find(el => el.id == currencyId);
        },
        async printVoucher() {
            this.isloading = true;
            try {
                const res = await this.$axios.get(`api/${this.apiLine}/find/${this.localHeaderId}`);
                const html = generateReceivingHTML(res.data, this.$store.getters.findAllCompany?.[0] || {}, this.currencyList || []);
                const win = window.open('', '_blank', 'width=800,height=600');
                if (!win) return;
                win.document.open();
                win.document.write(html);
                win.document.close();
                win.onload = () => {
                    setTimeout(() => {
                        try {
                            win.print();
                            setTimeout(() => win.close(), 100);
                        } catch (e) {
                            win.close();
                        }
                    }, 500);
                };
            } catch (e) {
                console.error(e);
                swalError2(this.$swal, 'Error', 'Print failed');
            } finally {
                this.isloading = false;
            }
        },
        handleKeyDown(event) {
            if (event.key === 'Tab') {
                // Handle tab key press
                console.log('Tab key pressed')
                this.newRow()
            }
        },
        currencyChange() {
            const currency = this.currencyList.find(el => el['id'] == this.transaction.currencyId);
            if (!currency) return
            this.transaction.exchangeRate = currency['rate'];
            console.log(`Rate exchange ${currency['rate']} real value ${this.transaction.exchangeRate}`);
        },
        async deleteItem(item) {
            // TODO: Delete line not reduct card 
            if (this.transaction.poHeaderId != null) return swalError2(this.$swal, 'Error', `ບໍ່ສາມາດລົບໄດ້ ການຮັບເຄື່ອງຈາກ PO ຕ້ອງອີງຕາມລາຍການຢູ່ໃນ PO ເທົ່ານັ້ນ`)
            if (item.id) {
                console.log("Line has id");
                this.isloading = true
                await this.$axios
                    .delete(`api/${this.apiLine}/line/find/${item.id}`)
                    .then((res) => {
                        this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
                    })
                    .catch((er) => {
                        swalError2(this.$swal, 'Error', 'Operation fail ' + er.Error)
                    })
                this.isloading = false
            } else {
                this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
                console.log("Line has no id");
            }
        },
        quantityChange(data) {
            console.log("Qty change");
            let index = this.transaction.lines.indexOf(data);
            const qty = replaceAll(this.transaction.lines[index]['qty'], ',', '');
            const rate = replaceAll(this.transaction.lines[index]['rate'], ',', '');
            // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((rate * qty) * price)
        },
        unitRateChange(data) {
            console.log("Unit rate change");
            let index = this.transaction.lines.indexOf(data);
            const qty = replaceAll(this.transaction.lines[index]['qty'], ',', '');
            const rate = replaceAll(this.transaction.lines[index]['rate'], ',', '');
            // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((rate * qty) * price)
        },
        priceChange(data) {
            console.log("Price change...");
            let index = this.transaction.lines.indexOf(data);
            const qty = replaceAll(this.transaction.lines[index]['qty'], ',', '');
            const rate = replaceAll(this.transaction.lines[index]['rate'], ',', '');
            // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((rate * qty) * price)
        },
        discountChange(data) {
            console.log("Discount change");
            let index = this.transaction.lines.indexOf(data);
            const qty = replaceAll(this.transaction.lines[index]['qty'], ',', '');
            const rate = replaceAll(this.transaction.lines[index]['rate'], ',', '');
            // const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((rate * qty) * price)
        },
        unitChange(data) {
            console.log("Unit change");
            const unit = this.unitList.find(el => el['id'] == data['unitId']);
            let index = this.transaction.lines.indexOf(data);
            this.transaction.lines[index]['unit'] = unit;
            const rate = unit ? (unit['rate'] || unit['conversionRate'] || unit['unitRate'] || 1) : 1;
            this.transaction.lines[index]['rate'] = rate;
            const qty = replaceAll(this.transaction.lines[index]['qty'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((rate * qty) * price);
        },
        productChange(data) {
            console.log("Product change");
            const product = this.productList.find(el => el['id'] == data['productId']);
            if (product == undefined) {
                console.log("Product is not define");
                return
            }
            let index = this.transaction.lines.indexOf(data);
            this.transaction.lines[index]['product'] = product;
            
            const unitId = product.stockUnitId || product.baseUnitId || product.receiveUnitId || null;
            if (unitId) {
                this.transaction.lines[index]['unitId'] = unitId;
                const unit = this.unitList.find(el => el['id'] == unitId);
                this.transaction.lines[index]['unit'] = unit;
                this.transaction.lines[index]['rate'] = unit ? (unit['rate'] || unit['conversionRate'] || unit['unitRate'] || 1) : 1;
            } else {
                this.transaction.lines[index]['unitId'] = null;
                this.transaction.lines[index]['unit'] = null;
                this.transaction.lines[index]['rate'] = 1;
            }

            const currency = this.findCurrency(product['saleCurrencyId'])
            console.log(`$$$$$$ ${currency.id} $$$$$$`);
            const localPrice = product['cost_price'] * currency['rate']
            this.transaction.lines[index]['price'] = localPrice
            
            const qty = replaceAll(this.transaction.lines[index]['qty'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            const rate = replaceAll(this.transaction.lines[index]['rate'], ',', '');
            this.transaction.lines[index]['total'] = ((rate * qty) * price)
        },
        newRow() {
            const defaultLine = {
                // "id":null,
                "qty": 0,
                "rate": 1,
                "price": 0,
                "total": 0,
                "isActive": true,
                "productId": 0,
                "unitId": 1
            }
            if (this.transaction.poHeaderId) return swalError2(this.$swal, 'Error', 'ເນື່ອງຈາກ ໃບຮັບເຄື່ອງຜູ້ກັບໃບສັ່ງຊື້, ບໍ່ມາດເພີ່ມ ລາຍການອື່ນ ທີ່ບໍ່ມີໃນໃບສັ່ງຊື້ໄດ້')
            this.transaction.lines.push(defaultLine)
        },
        openCustomerDialog() {
            this.customerDialog = true;
        },
        clearLineIdForCreateFunction() {
            let linesWithNoId = [];
            for (const iterator of this.transaction.lines) {
                if (this.sourceAPLID == 'PO' || this.transaction.poHeaderId) {
                    iterator['poLineId'] = iterator.id
                }
                iterator.id = null
                linesWithNoId.push(iterator)
            }
            this.transaction.lines = linesWithNoId;
        },
        async loadTransaction() {
            await this.$axios
                .get(`api/${this.apiLine}/find/${this.localHeaderId}`)
                .then((res) => {
                    this.transaction = res.data;
                    console.log("Data ", res.data);
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                })
        },
        async loadTransactionFromPoID(poHeaderId) {
            console.warn(`Check if this PO already has receiving `)
            try {
                const response = await this.$axios.get(`api/receiving/find/poId/${poHeaderId}`)
                this.transaction = response.data;
                console.log("Data ", response.data);
                this.localIsUpdate = true;
                this.localHeaderId = this.transaction.id
            } catch (error) {
                console.error(`this poId is not yet recevieved`);
                this.localIsUpdate = false
            }
            // await this.$axios
            //     .get(`api/receiving/find/poId/${poHeaderId}`)
            //     .then((res) => {
            //         this.transaction = res.data;
            //         console.log("Data ", res.data);
            //         this.isUpdate = true;
            //         this.headerId = this.transaction.id
            //     })
            //     .catch((er) => {
            //         this.isUpdate = false;
            //         // swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
            //     })
        },
        // post() {
        //     this.errorLineNumber = null
        //     for (const iterator of this.transaction.lines) {
        //         this.errorLineNumber = this.transaction.lines.indexOf(iterator)
        //         if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
        //             this.sheet = true
        //             return
        //         }

        //         iterator['total'] = ((iterator['qty'] * iterator['rate']) * iterator['price']) - iterator['discount']
        //     }
        //     console.log("******** No error found process posting ********");
        //     this.errorLineNumber = null
        //     //  ********** Enable below line to confirm before clear ***********//
        //     // confirmSwal(this.$swal, 'You are posting to invoice ?', this.postToInvoice)
        //     // this.clearCart()
        // },
        validateLine(obj, errorLineNumber) {
            // Check if the object has all required properties
            let { qty, rate, price, discount, total, productId, unitId } = obj
            discount = parseInt(discount)
            rate = parseInt(rate)
            qty = parseInt(qty)
            if (!Number.isFinite(qty) || Number(qty) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຈຳນວນ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${qty}********`
                if (this.sourceAPLID == 'PO' || this.transaction.poHeaderId) return true
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(rate) || Number(rate) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ອັດຕາຫົວຫນ່ວຍ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${rate}********`
                return false; // Reach must be a positive number
            }
            // Assuming price is a string that may contain commas
            if (typeof price === 'string') {
                // Remove commas from the price string
                price = price.replace(/,/g, '');
            }

            // Convert the cleaned price string to a number
            price = Number(price);
            console.log("Type of price ", typeof (price), ' [price] ', price);
            if (!Number.isFinite(price) || Number(price) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ລາຄາ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${price}********`
                return false; // Reach must be a positive number
            }
            console.log("Type of discount1 ", typeof (discount));
            // if (!Number.isFinite(discount)) {
            //     console.log("Type of discount2 ", typeof (discount));
            //     this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສ່ວນລົດ ຕ້ອງເປັນຕົວເລກ  current value is ${discount}********`
            //     return false; // Reach must be a positive number
            // }
            if (!Number.isFinite(total) || Number(total) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຍອດລວມ ຕ້ອງໃຫຍ່ກ່ອນ 0 current value is ${total}********`
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(productId)) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສິນຄ້າບໍ່ຖືກຕ້ອງ  current value is ${productId}********`
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(unitId)) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຫົວຫນ່ວຍບໍ່ຖືກຕ້ອງ  current value is ${unitId}********`
                return false; // Reach must be a positive number
            }
            return true;
        },
        validateHeader() {
            this.headerError = true
            this.sheet = true
            console.log('=== currency id ', this.transaction.currencyId);
            if (!this.transaction.currencyId) {
                this.validateErrorMessage = `******** Error Currency in Header #${this.transaction.currencyId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
                return false; // Reach must be a positive number
            }
            // if (!this.transaction.paymentId) {
            //     this.validateErrorMessage = `******** Error Payment in Header #${this.transaction.paymentId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
            //     return false; // Reach must be a positive number
            // }
            // if (!this.transaction.clientId) {
            //     this.validateErrorMessage = `******** Error Customer in Header #${this.transaction.clientId} ບໍ່ສາມາດເປັນຄ່າວ່າງ ********`
            //     return false; // Reach must be a positive number
            // }
            if (this.transaction.lines.length == 0) {
                this.validateErrorMessage = `******** Error Header ບໍ່ມີລາຍການສິນຄ້າ ********`
                return false; // Reach must be a positive number

            }
            this.sheet = false
            this.headerError = false
            return true
        },
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        getLineCurrency(item) {
            if (item.currencyId) {
                return this.findCurrency(item.currencyId);
            }
            const p = item.product || this.productList.find(el => el.id == item.productId)
            if (!p) return { code: 'LAK', rate: 1 }
            return this.findCurrency(p.costCurrencyId || p.purchaseCurrencyId || p.saleCurrencyId)
        },
        getLineOriginalPrice(item) {
            if (this.localIsUpdate) {
                const lineCurrency = this.getLineCurrency(item)
                const localCurrency = this.currencyList.find(c => c.isLocalCCY) || { id: 1, rate: 1 }
                const headerCurrency = this.findCurrency(this.transaction.currencyId) || localCurrency
                const priceHeader = parseFloat(item.price) || 0
                const priceLAK = CurrencyHelper.convertToLocal(priceHeader, headerCurrency, localCurrency)
                return CurrencyHelper.convertFromLocal(priceLAK, lineCurrency, localCurrency)
            }
            return parseFloat(item.price || 0)
        },
        getLineOriginalTotal(item) {
            if (this.localIsUpdate) {
                const lineCurrency = this.getLineCurrency(item)
                const localCurrency = this.currencyList.find(c => c.isLocalCCY) || { id: 1, rate: 1 }
                const headerCurrency = this.findCurrency(this.transaction.currencyId) || localCurrency
                const totalHeader = parseFloat(item.total) || 0
                const totalLAK = CurrencyHelper.convertToLocal(totalHeader, headerCurrency, localCurrency)
                return CurrencyHelper.convertFromLocal(totalLAK, lineCurrency, localCurrency)
            }
            return parseFloat(item.total || 0)
        },
        getLineConvertedPrice(item) {
            if (this.localIsUpdate) {
                return parseFloat(replaceAll(String(item.price || 0), ',', '')) || 0
            }
            const lineCurrency = this.getLineCurrency(item)
            const localCurrency = this.currencyList.find(c => c.isLocalCCY) || { id: 1, rate: 1 }
            const headerCurrency = this.findCurrency(this.transaction.currencyId) || localCurrency
            const priceOriginal = parseFloat(replaceAll(String(item.price || 0), ',', '')) || 0
            const priceLAK = CurrencyHelper.convertToLocal(priceOriginal, lineCurrency, localCurrency)
            const rawVal = CurrencyHelper.convertFromLocal(priceLAK, headerCurrency, localCurrency)
            return Math.round((rawVal + Number.EPSILON) * 100) / 100
        },
        getLineConvertedTotal(item) {
            if (this.localIsUpdate) {
                return parseFloat(replaceAll(String(item.total || 0), ',', '')) || 0
            }
            const priceConverted = this.getLineConvertedPrice(item)
            const qty = parseFloat(replaceAll(String(item.qty || 1), ',', '')) || 0
            const rate = parseFloat(replaceAll(String(item.rate || 1), ',', '')) || 0
            const total = qty * rate * priceConverted
            return Math.round((total + Number.EPSILON) * 100) / 100
        },
        toggleDialog() {
            this.$emit('close-dialog')
        },
        async postToInvoice() {
            if (this.isloading || !this.validateHeader()) return;
            this.isloading = true
            this.errorLineNumber = null
            for (const iterator of this.transaction.lines) {
                this.errorLineNumber = this.transaction.lines.indexOf(iterator)
                if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
                    this.sheet = true
                    this.isloading = false
                    return
                }
            }
            console.log("******** No error found process posting ********");
            this.errorLineNumber = null

            const mappedInvoiceLines = this.transaction.lines.map(l => {
                const priceConverted = this.localIsUpdate ? parseFloat(replaceAll(String(l.price), ',', '')) : this.getLineConvertedPrice(l)
                const totalConverted = this.localIsUpdate ? parseFloat(replaceAll(String(l.total), ',', '')) : this.getLineConvertedTotal(l)
                return {
                    ...l,
                    id: null,
                    qty: parseInt(replaceAll(String(l.qty), ',', '')),
                    rate: parseInt(replaceAll(String(l.rate), ',', '')),
                    price: priceConverted,
                    total: totalConverted,
                    discount: parseInt(replaceAll(String(l.discount || 0), ',', ''))
                }
            })

            const salePayload = {
                ...this.transaction,
                userId: this.user.id,
                total: this.grandTotal,
                lines: mappedInvoiceLines,
                locationId: this.currentTerminal['locationId']
            }

            console.log(`Amount total ${salePayload.total}`);
            await this.$axios
                .post(`api/sale/create`, salePayload)
                .then((res) => {
                    this.$emit('reload')
                    swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                })
                .catch((er) => {
                    console.error(er)
                    swalError2(this.$swal, 'Error', er.response.data)
                    const outOfStockProductId = er.response.data.split("#")[1]
                    if (outOfStockProductId != undefined) {
                        this.validateErrorMessage = `********  ສິນຄ້າໃນສ້າງບໍ່ພຽງພໍ ********`
                        this.errorLineNumber = this.transaction.lines.indexOf(this.transaction.lines.find(el => el.productId == outOfStockProductId))
                        this.sheet = true
                    }
                    console.log('Error ===>: ' + er)
                })

            this.isloading = false
        },
        async postTransaction() {
            if (this.isloading || !this.validateHeader()) return;
            this.isloading = true

            this.errorLineNumber = null
            for (const iterator of this.transaction.lines) {
                this.errorLineNumber = this.transaction.lines.indexOf(iterator)
                if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
                    this.sheet = true
                    this.isloading = false
                    return
                }
            }
            console.log("******** No error found process posting ********");
            this.errorLineNumber = null

            const payloadLines = this.transaction.lines.map(l => {
                const priceConverted = this.localIsUpdate ? parseFloat(replaceAll(String(l.price), ',', '')) : this.getLineConvertedPrice(l)
                const totalConverted = this.localIsUpdate ? parseFloat(replaceAll(String(l.total), ',', '')) : this.getLineConvertedTotal(l)
                const mappedLine = {
                    ...l,
                    qty: parseInt(replaceAll(String(l.qty), ',', '')),
                    rate: parseInt(replaceAll(String(l.rate), ',', '')),
                    price: priceConverted,
                    total: totalConverted,
                    discount: parseInt(replaceAll(String(l.discount || 0), ',', ''))
                }
                if (!this.localIsUpdate) {
                    if (this.sourceAPLID == 'PO' || this.transaction.poHeaderId) {
                        mappedLine.poLineId = l.id
                    }
                    mappedLine.id = null
                }
                return mappedLine
            })

            const payload = {
                ...this.transaction,
                userId: this.user.id,
                total: this.grandTotal,
                lines: payloadLines
            }

            console.log(`Amount total ${payload.total}`);

            if (this.localIsUpdate) {
                // ********** If header has data, that means we go for update API ********** //
                await this.$axios
                    .put(`api/${this.apiLine}/update/${this.localHeaderId}`, payload)
                    .then((res) => {
                        this.$emit('reload')
                        this.$emit('close-dialog')
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    })
                    .catch((er) => {
                        console.error(er)
                        swalError2(this.$swal, 'Error', er.response.data)
                        const outOfStockProductId = er.response.data.split("#")[1]
                        if (outOfStockProductId != undefined) {
                            const pronductOutStock = this.productList.find(el => el.id == outOfStockProductId)
                            this.validateErrorMessage = `********  ສິນຄ້າ ${pronductOutStock['pro_name']} ໃນສ້າງບໍ່ພຽງພໍ ********`
                            this.errorLineNumber = this.transaction.lines.indexOf(this.transaction.lines.find(el => el.productId == outOfStockProductId))
                            this.sheet = true
                        }
                        console.log('Error ===>: ' + er)
                    })
            } else {
                // ********** Go for create API ********** //
                await this.$axios
                    .post(`api/${this.apiLine}/create`, payload)
                    .then((res) => {
                        this.$emit('reload')
                        this.$emit('close-dialog')
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                    })
                    .catch((er) => {
                        console.error(er)
                        swalError2(this.$swal, 'Error', er.response.data)
                        const outOfStockProductId = er.response.data.split("#")[1]
                        if (outOfStockProductId != undefined) {
                            this.validateErrorMessage = `********  ສິນຄ້າໃນສ້າງບໍ່ພຽງພໍ ********`
                            this.errorLineNumber = this.transaction.lines.indexOf(this.transaction.lines.find(el => el.productId == outOfStockProductId))
                            this.sheet = true
                        }
                        console.log('Error ===>: ' + er)
                    })
            }

            this.isloading = false
        },
        async openPoBrowseDialog() {
            this.poBrowseDialog = true;
            this.loadingPos = true;
            try {
                const response = await this.$axios.get('api/purchasing/find');
                this.poList = response.data;
            } catch (error) {
                console.error('Failed to load PO list:', error);
                swalError2(this.$swal, 'Error', 'Failed to load POs');
            } finally {
                this.loadingPos = false;
            }
        },
        async selectPO(po) {
            this.isloading = true;
            try {
                const response = await this.$axios.get(`api/purchasing/find/${po.id}`);
                const fullPO = response.data;
                
                this.transaction.poHeaderId = fullPO.id;
                this.transaction.vendorId = fullPO.vendorId;
                this.transaction.currencyId = fullPO.currencyId;
                if (fullPO.currency) {
                    this.transaction.exchangeRate = fullPO.currency.rate;
                }
                
                this.transaction.lines = fullPO.lines.map(line => ({
                    id: line.id,
                    productId: line.productId,
                    product: line.product,
                    qty: line.qty || 1,
                    unitId: line.unitId,
                    rate: line.rate || 1,
                    price: line.price || 0,
                    total: line.total || 0,
                    isActive: true
                }));
                
                await this.loadTransactionFromPoID(fullPO.id);
                
                this.poBrowseDialog = false;
                swalSuccess(this.$swal, 'Succeed', `Selected PO #${fullPO.id}`);
            } catch (error) {
                console.error(error);
                swalError2(this.$swal, 'Error', 'Failed to retrieve PO details');
            } finally {
                this.isloading = false;
            }
        },
        clearPoSelection() {
            this.transaction.poHeaderId = null;
            this.transaction.lines = [];
            this.newRow();
        },
        getPoStatusLabel(status) {
            const labels = {
                'PENDING': 'ລໍອະນຸມັດ', 'APPROVED': 'ອະນຸມັດ', 'SENT_TO_SUPPLIER': 'ສົ່ງຜູ້ຂາຍ', 'PARTIAL': 'ຮັບບາງສ່ວນ', 'COMPLETED': 'ຮັບຄົບ', 'CANCELLED': 'ຍົກເລີກ',
                'Pending Approval': 'ລໍອະນຸມັດ', 'Approved': 'ອະນຸມັດ', 'Sent to Supplier': 'ສົ່ງຜູ້ຂາຍ', 'Partially Received': 'ຮັບບາງສ່ວນ', 'Fully Received': 'ຮັບຄົບ', 'Cancelled': 'ຍົກເລີກ'
            };
            return labels[status] || status;
        },
        getPoStatusColor(status) {
            const colors = {
                'PENDING': 'orange', 'APPROVED': 'green', 'SENT_TO_SUPPLIER': 'blue', 'PARTIAL': 'purple', 'COMPLETED': 'success', 'CANCELLED': 'error',
                'Pending Approval': 'orange', 'Approved': 'green', 'Sent to Supplier': 'blue', 'Partially Received': 'purple', 'Fully Received': 'success', 'Cancelled': 'error'
            };
            return colors[status] || 'grey';
        }
    },
    computed: {
        // ...mapGetters(['currentSelectedLocation', 'cartOfProduct', 'currenctSelectedCategoryId', 'findAllProduct', 'currentSelectedCustomer', 'currentSelectedPayment', 'findSelectedTerminal', 'findAllTerminal', 'findAllLocation']),
        ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal', 'findAllLocation']),
        clientList() {
            return this.findAllClient
        },
        currentTerminal() {
            console.log(`ALL TEMINAL ${this.findAllTerminal.length} SELECTED ${this.findSelectedTerminal}`);
            return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        },
        user() {
            return this.$auth.user || ''
        },
        apiLine() {
            return 'receiving';
        },
        selectablePOs() {
            const eligibleStatuses = ['APPROVED', 'Approved', 'SENT_TO_SUPPLIER', 'Sent to Supplier', 'PARTIAL', 'Partially Received'];
            return this.poList.filter(po => eligibleStatuses.includes(po.status));
        },
        productList() {
            return this.findAllProduct
        },
        paymentList() {
            return this.findAllPayment
        },
        unitList() {
            return this.findAllUnit
        },
        currencyList() {
            return this.findAllCurrency
        },
        numberRule() {
            return [
                value => value !== undefined && value !== null && value !== '' || 'Field is required',
                value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'
            ];
        },
        subtotal() {
            return this.transaction.lines?.reduce((total, item) => {
                const lineTotal = this.getLineConvertedTotal(item)
                return total + lineTotal
            }, 0) || 0
        },
        grandTotal() {
            return this.subtotal
        },
        totalsByCurrency() {
            const breakdown = {}
            this.transaction.lines?.forEach(item => {
                const currency = this.getLineCurrency(item)
                const code = currency.code || 'LAK'
                if (!breakdown[code]) {
                    breakdown[code] = {
                        code,
                        total: 0
                    }
                }
                breakdown[code].total += parseFloat(item.total || 0)
            })
            return Object.values(breakdown).filter(b => b.total > 0)
        },


    },
    data() {
        return {
            localIsUpdate: this.isUpdate,
            localHeaderId: this.headerId,
            poStatus: [
                { name: 'PENDING' },
                { name: 'PARTIAL' },
                { name: 'COMPLETED' },
            ],
            cancelConfirmDialog: false,
            productPricingSelected: null,
            pricingDialogKey: 1,
            pricingDialog: false,
            poBrowseDialog: false,
            poSearch: '',
            poList: [],
            loadingPos: false,
            poHeaders: [
                { text: 'ເລກບິນ PO ID', value: 'id', align: 'center' },
                { text: 'ວັນທີ', value: 'bookingDate', align: 'center' },
                { text: 'ຮ້ານຄ້າ (Vendor)', value: 'vendor.name' },
                { text: 'ເນື້ອໃນ', value: 'notes' },
                { text: 'ສະກຸນເງິນ', value: 'currency.code', align: 'center' },
                { text: 'ຍອດລວມ', value: 'total', align: 'right' },
                { text: 'ສະຖານະ', value: 'status', align: 'center' },
                { text: 'ເລືອກ', value: 'action', align: 'center', sortable: false }
            ],
            search: '',
            vendorList: [],
            numberCommaRule: (value) => {
                const regex = /^[0-9,]*$/;
                return regex.test(value) || 'Only numbers and commas are allowed';
            },
            headerError: false,
            customerDialog: false,
            validateErrorMessage: '',
            sheet: false,
            errorLineNumber: null,
            onlineCustomerId: null,
            isloading: false,
            transaction: {
                vendorId: null,
                status: 'PENDING',
                isActive: true,
                exchangeRate: 1,
                total: 0,
                poHeaderId: null,
                locationId: null,
                lines: []
            },
            headers: [
                { text: '#', align: 'start', value: '' },
                { text: 'ສິນຄ້າ', align: 'start', value: 'product.pro_name' },
                { text: 'ຈຳນວນ', align: 'end', value: 'qty' },

                {
                    text: 'ຫົວຫນ່ວຍ',
                    align: 'end',
                    value: 'unitId',
                    sortable: true,
                },
                {
                    text: 'unit rate',
                    align: 'end',
                    value: 'rate',
                    sortable: true,
                },
                {
                    text: 'ລາຄາ',
                    align: 'end',
                    value: 'price',
                    sortable: true,
                },
                {
                    text: 'ລວມ',
                    align: 'end',
                    value: 'total',
                    sortable: false,
                },
                {
                    text: 'delete',
                    align: 'end',
                    value: 'id',
                    sortable: false,
                },

            ],
        }
    },
    watch: {
        isUpdate(val) {
            this.localIsUpdate = val;
        },
        headerId(val) {
            this.localHeaderId = val;
        }
    },
}
</script>

<style></style>