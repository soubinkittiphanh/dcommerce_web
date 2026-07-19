<template>
    <div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="customerDialog" max-width="1024">
            <customer-list @close-dialog="customerDialog = false"></customer-list>
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

        <v-card class="transfer-card">
            <!-- Sheet Drag Handle Indicator -->
            <div class="sheet-drag-handle"></div>

            <!-- Sticky Header Bar -->
            <div class="sheet-header px-6 pt-4 pb-2 d-flex align-center justify-space-between border-b">
                <div class="d-flex align-center">
                    <div class="sheet-icon-wrapper mr-3">
                        <v-icon color="white">mdi-swap-horizontal</v-icon>
                    </div>
                    <div>
                        <h2 class="sheet-title font-weight-bold text-left">
                            {{ isUpdate ? 'ລາຍລະອຽດການໂອນສິນຄ້າ' : 'ສ້າງລາຍການໂອນສິນຄ້າ' }}
                        </h2>
                        <span class="sheet-subtitle text-left d-block grey--text text--darken-1 text-caption">
                            {{ isUpdate ? `Transaction ID: #${transaction.id}` : 'Create a new stock transfer across locations' }}
                        </span>
                    </div>
                </div>
                <div class="d-flex align-center">
                    <!-- Print Button (Only if it has an ID/Update mode) -->
                    <v-btn
                        v-if="isUpdate"
                        color="secondary"
                        outlined
                        rounded
                        class="mr-2 font-weight-bold px-4"
                        @click="preview"
                    >
                        <v-icon left>mdi-printer</v-icon>
                        ພິມ (Print)
                    </v-btn>
                    <v-btn
                        icon
                        color="grey darken-2"
                        class="close-icon-btn"
                        @click="toggleDialog"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>
            </div>

            <!-- Scrollable Content Area -->
            <v-card-text class="sheet-body px-6 py-4">
                <!-- ******* Header Card OPEN *******-->
                <div class="glass-card mb-6" :class="{ 'error-border': headerError }">
                    <v-row dense>
                        <!-- Column 1: Booking Details & Reference -->
                        <v-col cols="12" md="4" class="px-3">
                            <div class="section-card-title mb-2">ຂໍ້ມູນທຸລະກຳ (Transaction Info)</div>
                            <v-row dense>
                                <v-col cols="12" class="mb-2">
                                    <v-text-field
                                        type="date"
                                        label="ວັນທີ (Date)*"
                                        v-model="transaction.bookingDate"
                                        outlined
                                        dense
                                        hide-details
                                        prepend-inner-icon="mdi-calendar"
                                        :disabled="isUpdate"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" class="mb-2">
                                    <v-text-field
                                        v-model="transaction.referenceNo"
                                        label="Reference No"
                                        outlined
                                        dense
                                        hide-details
                                        prepend-inner-icon="mdi-file-document-outline"
                                        :disabled="isUpdate"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        label="ໝາຍເຫດ (Notes)"
                                        v-model="transaction.remark"
                                        outlined
                                        dense
                                        hide-details
                                        rows="2"
                                        prepend-inner-icon="mdi-comment-text-outline"
                                        :disabled="isUpdate"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-col>

                        <!-- Column 2: Locations & Direction Indicator -->
                        <v-col cols="12" md="5" class="px-3 border-l-divider">
                            <div class="section-card-title mb-2">ສາງສິນຄ້າ ຕົ້ນທາງ-ປາຍທາງ (Locations)</div>
                            <div class="d-flex flex-column justify-center fill-height pb-4">
                                <div class="mb-3">
                                    <v-autocomplete
                                        item-text="name"
                                        item-value="id"
                                        :items="locationList"
                                        label="Source location*"
                                        v-model="transaction.srcLocationId"
                                        outlined
                                        dense
                                        hide-details
                                        prepend-inner-icon="mdi-export"
                                        :disabled="isUpdate"
                                    ></v-autocomplete>
                                </div>
                                
                                <div class="d-flex align-center justify-center my-1">
                                    <div class="direction-line flex-grow-1"></div>
                                    <v-avatar color="primary lighten-5" size="32" class="mx-3 direction-badge">
                                        <v-icon color="primary" size="20">mdi-arrow-down-bold-circle</v-icon>
                                    </v-avatar>
                                    <div class="direction-line flex-grow-1"></div>
                                </div>

                                <div class="mt-3">
                                    <v-autocomplete
                                        item-text="name"
                                        item-value="id"
                                        :items="locationList"
                                        label="Dest location*"
                                        v-model="transaction.desLocationId"
                                        outlined
                                        dense
                                        hide-details
                                        prepend-inner-icon="mdi-import"
                                        :disabled="isUpdate"
                                    ></v-autocomplete>
                                </div>
                            </div>
                        </v-col>

                        <!-- Column 3: Grand KPI Widget & Operator Info -->
                        <v-col cols="12" md="3" class="px-3 d-flex flex-column justify-space-between">
                            <div class="kpi-card">
                                <div class="kpi-label">ຍອດໂອນລວມ (Total Amount)</div>
                                <div class="kpi-value">
                                    {{ getFormatNum(grandTotal) }}
                                    <span class="kpi-currency">LAK</span>
                                </div>
                                <div class="kpi-details" v-if="transaction.user">
                                    <div class="d-flex justify-space-between mt-1">
                                        <span>ຜູ້ລົງບັນຊີ:</span>
                                        <strong>{{ transaction.user.cus_name || transaction.user.cus_id }}</strong>
                                    </div>
                                    <div class="d-flex justify-space-between">
                                        <span>ລະຫັດ:</span>
                                        <code>{{ transaction.user.cus_id }}</code>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                  <div class="table-action-header d-flex align-center justify-space-between mt-6 mb-3 px-1">
                    <div class="d-flex align-center">
                        <v-icon color="primary" class="mr-2">mdi-format-list-bulleted</v-icon>
                        <span class="table-title font-weight-bold">ລາຍການສິນຄ້າໂອນ (Transfer Items)</span>
                        <v-chip class="ml-3 pa-2 font-weight-medium" color="primary lighten-5" text-color="primary" small label>
                            {{ transaction.lines ? transaction.lines.length : 0 }} ລາຍການ (Items)
                        </v-chip>
                    </div>
                    <v-btn
                        v-if="!isUpdate"
                        color="primary"
                        rounded
                        elevation="1"
                        class="add-item-btn font-weight-bold"
                        @click="newRow"
                    >
                        <v-icon left>mdi-plus-circle</v-icon>
                        ເພີ່ມສິນຄ້າ (Add Product)
                    </v-btn>
                </div>

                <!-- ******* Line Card OPEN *******-->
                <div class="table-container mb-6">
                    <v-data-table
                        v-if="transaction.lines"
                        :headers="headers"
                        :search="search"
                        :items="transaction.lines"
                        hide-default-footer
                        disable-pagination
                        class="transfer-table"
                    >
                        <template v-slot:item="{ item }">
                            <tr :class="{ 'validation-error-row': errorLineNumber === transaction.lines.indexOf(item) }">
                                <td class="text-center font-weight-bold item-number-cell">
                                    <span v-if="errorLineNumber === transaction.lines.indexOf(item)" class="error-indicator">
                                        <v-icon color="error" small>mdi-alert-circle</v-icon>
                                    </span>
                                    <span v-else>
                                        {{ transaction.lines.indexOf(item) + 1 }}
                                    </span>
                                </td>
                                <td class="product-select-cell">
                                    <v-autocomplete
                                        @input="productChange(item)"
                                        item-text="pro_name"
                                        item-value="id"
                                        :items="productList"
                                        label="ເລືອກສິນຄ້າ (Select Product)*"
                                        v-model="item.productId"
                                        outlined
                                        dense
                                        hide-details
                                        :disabled="isUpdate"
                                        class="table-input"
                                    ></v-autocomplete>
                                </td>
                                <td class="qty-cell">
                                    <v-text-field
                                        @input="quantityChange(item)"
                                        v-model="item.quantity"
                                        outlined
                                        dense
                                        hide-details
                                        v-comma-thousand
                                        :rules="[numberCommaRule]"
                                        :disabled="isUpdate"
                                        class="table-input text-right-input"
                                    ></v-text-field>
                                </td>
                                <td class="unit-select-cell">
                                    <v-autocomplete
                                        @input="unitChange(item)"
                                        item-text="name"
                                        item-value="id"
                                        :items="unitList"
                                        label="ຫົວໜ່ວຍ*"
                                        v-model="item.unitId"
                                        outlined
                                        dense
                                        hide-details
                                        :disabled="isUpdate"
                                        class="table-input"
                                    ></v-autocomplete>
                                </td>
                                <td class="unit-rate-cell">
                                    <v-text-field
                                        @input="unitRateChange(item)"
                                        v-model="item.unitRate"
                                        outlined
                                        dense
                                        hide-details
                                        v-comma-thousand
                                        :rules="[numberCommaRule]"
                                        :disabled="isUpdate"
                                        class="table-input text-right-input"
                                    ></v-text-field>
                                </td>
                                <td class="text-right font-weight-medium price-display-cell">
                                    {{ getFormatNum(item.price) }}
                                </td>
                                <td class="discount-cell">
                                    <v-text-field
                                        @input="discountChange(item)"
                                        :rules="[numberCommaRule]"
                                        v-comma-thousand
                                        v-model="item.discount"
                                        outlined
                                        dense
                                        hide-details
                                        :disabled="isUpdate"
                                        class="table-input text-right-input"
                                    ></v-text-field>
                                </td>
                                <td class="text-right font-weight-bold total-display-cell primary--text">
                                    {{ getFormatNum(item.total) }}
                                </td>
                                <td class="text-center action-delete-cell">
                                    <v-btn
                                        color="error"
                                        icon
                                        small
                                        :disabled="isUpdate"
                                        @click="deleteItem(item)"
                                        v-on:keydown="handleKeyDown"
                                        class="delete-row-btn"
                                    >
                                        <v-icon>mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </div>
                <!-- ******* Line Card CLOSE *******-->

            </v-card-text>

            <v-divider></v-divider>

            <!-- Action Buttons Footer -->
            <v-card-actions class="px-6 py-4 action-footer border-t bg-light">
                <v-spacer></v-spacer>
                <v-btn
                    color="grey darken-2"
                    outlined
                    rounded
                    class="px-6 font-weight-bold"
                    @click="toggleDialog"
                >
                    <v-icon left>mdi-close</v-icon>
                    ປິດ (Close)
                </v-btn>
                <v-btn
                    v-if="!isUpdate"
                    color="primary"
                    depressed
                    rounded
                    class="px-6 ml-3 font-weight-bold save-btn"
                    @click="postTransaction"
                >
                    <v-icon left>mdi-content-save</v-icon>
                    ບັນທຶກ (Save Transfer)
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { mapActions, mapGetters } from 'vuex'
import { swalSuccess, swalError2, confirmSwal, dayCount, getNextDate, replaceAll } from '~/common'
import { generateTransferHTML } from '~/common/printTemplates'
export default {
    props: {
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
    },
    directives: {
        commaThousand
    },
    async created() {
        await this.loadLocation()
        if (this.isUpdate) {
            console.log("View old record");
            this.isloading = true
            await this.loadTransaction()
            this.isloading = false
        } else {
            const today = new Date().toISOString().substr(0, 10);
            this.transaction.bookingDate = today;
            this.transaction.srcLocationId = 1;
            this.transaction.desLocationId = 1;
            this.newRow();
        }


    },
    mounted() {
        window.addEventListener('keydown', this.handleBarcodeKeyDown);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleBarcodeKeyDown);
    },
    methods: {
        handleBarcodeKeyDown(event) {
            if (this.isUpdate) return;
            
            if (this.barcodeTimer) {
                clearTimeout(this.barcodeTimer);
            }
            
            if (event.key === 'Enter') {
                if (this.barcode) {
                    console.log(`SCANNED BARCODE: ${this.barcode}`);
                    this.findProductFromBarcode(this.barcode);
                }
                this.barcode = '';
                return;
            }
            
            if (event.key !== 'Shift') {
                this.barcode += event.key;
            }
            
            this.barcodeTimer = setTimeout(() => {
                this.barcode = '';
            }, 50);
        },
        findProductFromBarcode(barcode) {
            if (this.isUpdate) return;
            const product = this.productList.find(el => el.barCode === barcode);
            if (!product) {
                swalError2(this.$swal, 'Error', `ບໍ່ພົບສິນຄ້າທີ່ມີບາໂຄດ: ${barcode}`);
                return;
            }

            // Check if product already exists in transfer lines
            const existingLineIndex = this.transaction.lines.findIndex(el => el.productId === product.id);
            
            if (existingLineIndex > -1) {
                const line = this.transaction.lines[existingLineIndex];
                let currentQty = parseFloat(replaceAll(String(line.quantity), ',', ''));
                if (isNaN(currentQty)) currentQty = 0;
                
                line.quantity = currentQty + 1;
                
                // Recalculate totals safely
                const unitRate = parseFloat(replaceAll(String(line.unitRate || 1), ',', '')) || 1;
                const price = parseFloat(replaceAll(String(line.price || 0), ',', '')) || 0;
                const discount = parseFloat(replaceAll(String(line.discount || 0), ',', '')) || 0;
                line.total = ((unitRate * line.quantity) * price) - discount;
            } else {
                // Check if the only line is empty (productId: 0/null and quantity <= 0) to reuse it
                const emptyLineIndex = this.transaction.lines.findIndex(el => (el.productId === 0 || !el.productId) && (parseFloat(replaceAll(String(el.quantity), ',', '')) <= 0));
                
                let targetLine;
                if (emptyLineIndex > -1) {
                    targetLine = this.transaction.lines[emptyLineIndex];
                } else {
                    targetLine = {
                        "quantity": 0,
                        "unitRate": 1,
                        "price": 0,
                        "discount": 0,
                        "total": 0,
                        "isActive": true,
                        "productId": 0,
                        "unitId": 1
                    };
                    this.transaction.lines.push(targetLine);
                }
                
                targetLine.productId = product.id;
                targetLine.price = parseFloat(product.cost_price || product.pro_cost_price || product.pro_price || 0);
                targetLine.quantity = 1;
                targetLine.unitRate = 1;
                targetLine.discount = 0;
                targetLine.total = targetLine.price;
            }
            
            // Show toast notification
            this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                icon: 'success',
                title: `ເພີ່ມສິນຄ້າ: ${product.pro_name}`
            });
        },
        async preview() {
            this.isloading = true;
            try {
                const res = await this.$axios.get(`api/${this.apiLine}/find/${this.headerId}`);
                const html = generateTransferHTML(res.data, this.$store.getters.findAllCompany?.[0] || {}, this.$store.getters.findAllCurrency || []);
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

        async deleteItem(item) {
            // if (item.id) {
            //     console.log("Line has id");
            //     this.isloading = true
            //     await this.$axios
            //         .delete(`api/${this.apiLine}Line/find/${item.id}`)
            //         .then((res) => {
            //             this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
            //         })
            //         .catch((er) => {
            //             swalError2(this.$swal, 'Error', 'Operation fail ' + er.Error)
            //         })
            //     this.isloading = false
            // } else {
            //     this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
            //     console.log("Line has no id");
            // }
            this.transaction.lines.splice(this.transaction.lines.indexOf(item), 1)
            console.log("Line has no id");
        },
        async loadLocation(item) {
            this.isloading = true
            await this.$axios
                .get(`api/location/find`)
                .then((res) => {
                    this.locationList = res.data.map(el => el)
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Operation fail ' + er.Error)
                })
            this.isloading = false

        },
        quantityChange(data) {
            console.log("Qty change");
            let index = this.transaction.lines.indexOf(data);
            const qty = replaceAll(this.transaction.lines[index]['quantity'], ',', '');
            const unitRate = replaceAll(this.transaction.lines[index]['unitRate'], ',', '');
            const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((unitRate * qty) * price) - discount
        },
        unitRateChange(data) {
            console.log("Unit rate change");
            let index = this.transaction.lines.indexOf(data);
            const qty = replaceAll(this.transaction.lines[index]['quantity'], ',', '');
            const unitRate = replaceAll(this.transaction.lines[index]['unitRate'], ',', '');
            const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((unitRate * qty) * price) - discount
        },
        discountChange(data) {
            console.log("Discount change");
            let index = this.transaction.lines.indexOf(data);
            const qty = replaceAll(this.transaction.lines[index]['quantity'], ',', '');
            const unitRate = replaceAll(this.transaction.lines[index]['unitRate'], ',', '');
            const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((unitRate * qty) * price) - discount
        },
        unitChange(data) {
            console.log("Unit change");
            const unit = this.unitList.find(el => el['id'] == data['unitId']);
            if (unit == undefined) return
            let index = this.transaction.lines.indexOf(data);
            this.transaction.lines[index]['unit'] = unit;
            this.transaction.lines[index]['unitRate'] = unit['unitRate']
            const qty = replaceAll(this.transaction.lines[index]['quantity'], ',', '');
            const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            this.transaction.lines[index]['total'] = ((unit['unitRate'] * qty) * price) - discount
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
            this.transaction.lines[index]['price'] = product['cost_price'] || product['pro_cost_price'] || product['pro_price'] || 0;
            const qty = replaceAll(this.transaction.lines[index]['quantity'], ',', '');
            const discount = replaceAll(this.transaction.lines[index]['discount'], ',', '');
            const price = replaceAll(this.transaction.lines[index]['price'], ',', '');
            const unitRate = replaceAll(this.transaction.lines[index]['unitRate'], ',', '');
            this.transaction.lines[index]['total'] = ((unitRate * qty) * price) - discount
        },
        newRow() {
            const defaultLine = {
                // "id":null,
                "quantity": 0,
                "unitRate": 1,
                "price": 0,
                "discount": 0,
                "total": 0,
                "isActive": true,
                "productId": 0,
                "unitId": 1
            }
            this.transaction.lines.push(defaultLine)
        },
        async loadTransaction() {
            await this.$axios
                .get(`api/${this.apiLine}/find/${this.headerId}`)
                .then((res) => {
                    this.transaction = res.data;
                    console.log("Data ", res.data);
                    // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                })
        },
        post() {
            this.errorLineNumber = null
            for (const iterator of this.transaction.lines) {
                this.errorLineNumber = this.transaction.lines.indexOf(iterator)
                if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
                    this.sheet = true
                    return
                }

                iterator['total'] = ((iterator['quantity'] * iterator['unitRate']) * iterator['price']) - iterator['discount']
            }
            console.log("******** No error found process posting ********");
            this.errorLineNumber = null
            //  ********** Enable below line to confirm before clear ***********//
            // confirmSwal(this.$swal, 'You are posting to invoice ?', this.postToInvoice)
            // this.clearCart()
        },
        validateLine(obj, errorLineNumber) {
            // Check if the object has all required properties
            let { quantity, unitRate, price, discount, total, productId, unitId } = obj
            discount = parseInt(discount)
            unitRate = parseInt(unitRate)
            quantity = parseInt(quantity)
            if (!Number.isFinite(quantity) || Number(quantity) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ຈຳນວນ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${quantity}********`
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(unitRate) || Number(unitRate) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ອັດຕາຫົວຫນ່ວຍ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${unitRate}********`
                return false; // Reach must be a positive number
            }
            console.log("Type of price ", typeof (price), ' [price] ', price);
            if (!Number.isFinite(price) || Number(price) <= 0) {
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ລາຄາ ຕ້ອງໃຫຍ່ກ່ອນ 0  current value is ${price}********`
                return false; // Reach must be a positive number
            }
            console.log("Type of discount1 ", typeof (discount));
            if (!Number.isFinite(discount)) {
                console.log("Type of discount2 ", typeof (discount));
                this.validateErrorMessage = `******** Error ລາຍການທີ #${errorLineNumber} ສ່ວນລົດ ຕ້ອງເປັນຕົວເລກ  current value is ${discount}********`
                return false; // Reach must be a positive number
            }
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
        toggleDialog() {
            this.$emit('close-dialog')
        },
        async postToInvoice() {
            if (this.isloading || !this.validateHeader()) return;
            this.isloading = true
            this.errorLineNumber = null
            const draftInvoiceLine = []
            for (const iterator of this.transaction.lines) {
                this.errorLineNumber = this.transaction.lines.indexOf(iterator)
                if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
                    this.sheet = true
                    this.isloading = false
                    return
                }
                // iterator.id = null
                iterator.discount = parseInt(replaceAll(iterator.discount, ',', ''))
                iterator.quantity = parseInt(replaceAll(iterator.quantity, ',', ''))
                iterator.unitRate = parseInt(replaceAll(iterator.unitRate, ',', ''))
                draftInvoiceLine.push(iterator)
                // iterator['total'] = ((iterator['quantity'] * iterator['unitRate']) * iterator['price']) - iterator['discount']
            }
            // Remove Line id for insert as new in Invoice //
            for (const iterator of draftInvoiceLine) {
                iterator.id = null
            }
            console.log("******** No error found process posting ********");
            this.errorLineNumber = null
            this.transaction.userId = this.user.id
            this.transaction.total = this.grandTotal
            this.transaction.referenceNo = this.headerId
            this.transaction.lines = draftInvoiceLine
            console.log(`Amount total ${this.transaction.total}`);
            // ********** If header has data, that means we go for update API ********** //
            await this.$axios
                .post(`api/sale/create`, this.transaction)
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
            if(this.transaction.srcLocationId == this.transaction.desLocationId){
                return swalError2(this.$swal, 'Error', 'Source and destination location must be different')
            }
            this.isloading = true

            this.errorLineNumber = null
            for (const iterator of this.transaction.lines) {
                this.errorLineNumber = this.transaction.lines.indexOf(iterator)
                if (!this.validateLine(iterator, this.errorLineNumber + 1)) {
                    this.sheet = true
                    this.isloading = false
                    return
                }
                iterator.discount = parseInt(replaceAll(iterator.discount, ',', ''))
                iterator.quantity = parseInt(replaceAll(iterator.quantity, ',', ''))
                iterator.unitRate = parseInt(replaceAll(iterator.unitRate, ',', ''))
                // iterator['total'] = ((iterator['quantity'] * iterator['unitRate']) * iterator['price']) - iterator['discount']
            }
            console.log("******** No error found process posting ********");
            this.errorLineNumber = null
            this.transaction.userId = this.user.id
            this.transaction.total = this.grandTotal
            console.log(`Amount total ${this.transaction.total}`);
            if (this.isUpdate) {
                // ********** If header has data, that means we go for update API ********** //
                await this.$axios
                    .put(`api/${this.apiLine}/update/${this.headerId}`, this.transaction)
                    .then((res) => {
                        this.$emit('reload')
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
                // ********** If header has data, that means we go for update API ********** //
                await this.$axios
                    .post(`api/${this.apiLine}/create`, this.transaction)
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
            }

            this.isloading = false
        }
    },
    computed: {
        ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
        clientList() {
            return this.findAllClient
        },
        user() {
            return this.$auth.user || ''
        },
        apiLine() {
            // return this.isQuotation ? 'quotation' : 'sale'
            return 'transfer'
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
        grandTotal() {
            let total = this.transaction.lines.reduce((total, item) => {
                const itemTotal = parseFloat(replaceAll(String(item.total || 0), ',', '')) || 0;
                return total + itemTotal;
            }, 0);
            const discount = this.transaction.discount ? parseFloat(replaceAll(String(this.transaction.discount), ',', '')) : 0;
            const discountVal = isNaN(discount) ? 0 : discount;
            return total - discountVal;
        },


    },
    data() {
        return {
            barcode: '',
            barcodeTimer: null,
            search: '',
            numberCommaRule: (value) => {
                const regex = /^[0-9,]*$/;
                return regex.test(value) || 'Only numbers and commas are allowed';
            },
            locationList: [],
            headerError: false,
            customerDialog: false,
            validateErrorMessage: '',
            sheet: false,
            errorLineNumber: null,
            isloading: false,
            transaction: {
                srcLocationId: 1,
                desLocationId: 1,
                referenceNo: '',
                lines: []
            },
            headers: [
                { text: '#', align: 'start', value: '' },
                { text: 'ສິນຄ້າ', align: 'start', value: 'product.pro_name' },
                { text: 'ຈຳນວນ', align: 'end', value: 'quantity' },

                {
                    text: 'ຫົວຫນ່ວຍ',
                    align: 'end',
                    value: 'unitId',
                    sortable: true,
                },
                {
                    text: 'unit rate',
                    align: 'end',
                    value: 'unitRate',
                    sortable: true,
                },
                {
                    text: 'ລາຄາ',
                    align: 'end',
                    value: 'price',
                    sortable: true,
                },
                {
                    text: 'ສ່ວນຫລຸດ',
                    align: 'end',
                    value: 'discount',
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

}
</script>

<style scoped>
/* Main bottom sheet container card styling */
.transfer-card {
  border-radius: 24px 24px 0 0 !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  background-color: #f8fafc !important; /* Soft gray background */
}

/* Drag indicator bar at top of sheet */
.sheet-drag-handle {
  width: 48px;
  height: 5px;
  background-color: #cbd5e1;
  border-radius: 9999px;
  margin: 10px auto 4px auto;
  flex-shrink: 0;
}

/* Header style with a clean backdrop filter */
.sheet-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0 !important;
  flex-shrink: 0;
}

.sheet-icon-wrapper {
  background: linear-gradient(135deg, #01532B, #337555);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(1, 83, 43, 0.15);
}

.sheet-title {
  font-size: 1.25rem;
  color: #0f172a;
  margin: 0;
  font-family: 'Noto Sans Lao', sans-serif;
  line-height: 1.2;
}

.sheet-subtitle {
  font-family: 'Noto Sans Lao', sans-serif;
  font-size: 0.8rem;
}

.close-icon-btn {
  background-color: #f1f5f9;
  transition: all 0.2s ease;
}

.close-icon-btn:hover {
  background-color: #e2e8f0;
  transform: rotate(90deg);
}

/* Scrollable form body content */
.sheet-body {
  overflow-y: auto;
  flex-grow: 1;
  max-height: calc(100vh - 150px);
}

/* Custom Scrollbar for premium feel */
.sheet-body::-webkit-scrollbar {
  width: 6px;
}
.sheet-body::-webkit-scrollbar-track {
  background: transparent;
}
.sheet-body::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 3px;
}
.sheet-body::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}

/* Modern Glassmorphism Card Container */
.glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(1, 83, 43, 0.08);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.glass-card:hover {
  box-shadow: 0 8px 30px rgba(1, 83, 43, 0.04);
  border-color: rgba(1, 83, 43, 0.15);
}

.error-border {
  border: 1.5px solid #D00505 !important;
  box-shadow: 0 4px 20px rgba(208, 5, 5, 0.1) !important;
}

.section-card-title {
  font-size: 0.85rem;
  font-weight: bold;
  color: #337555;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Noto Sans Lao', sans-serif;
  border-left: 3px solid #01532B;
  padding-left: 8px;
}

/* Location transfer direction lines and indicator */
.direction-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #80a995, transparent);
  opacity: 0.5;
}

.direction-badge {
  box-shadow: 0 2px 8px rgba(1, 83, 43, 0.1);
  background-color: #e6f2ec !important;
  animation: bounce-slow 3s infinite ease-in-out;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.border-l-divider {
  border-left: 1px dashed #e2e8f0;
}

@media (max-width: 959px) {
  .border-l-divider {
    border-left: none;
    border-top: 1px dashed #e2e8f0;
    padding-top: 16px;
    margin-top: 16px;
  }
}

/* KPI Card style */
.kpi-card {
  background: linear-gradient(135deg, #01532B, #337555);
  color: #ffffff;
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(1, 83, 43, 0.2);
  text-align: right;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.kpi-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  pointer-events: none;
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(1, 83, 43, 0.3);
}

.kpi-label {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.85;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-family: 'Noto Sans Lao', sans-serif;
}

.kpi-value {
  font-size: 1.85rem;
  font-weight: 800;
  margin-top: 6px;
  line-height: 1.1;
  font-family: 'Outfit', 'Inter', sans-serif;
}

.kpi-currency {
  font-size: 0.9rem;
  opacity: 0.8;
  font-weight: 600;
  margin-left: 2px;
}

.kpi-details {
  margin-top: 12px;
  font-size: 0.75rem;
  opacity: 0.9;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 8px;
  font-family: 'Noto Sans Lao', sans-serif;
}

/* Lines Table Container and Elements */
.table-action-header {
  font-family: 'Noto Sans Lao', sans-serif;
}

.table-title {
  font-size: 1rem;
  color: #1e293b;
}

.add-item-btn {
  background: linear-gradient(135deg, #01532B, #337555) !important;
  color: white !important;
  font-family: 'Noto Sans Lao', sans-serif;
  text-transform: none;
  font-size: 0.85rem;
  box-shadow: 0 4px 12px rgba(1, 83, 43, 0.15) !important;
  transition: all 0.2s ease;
}

.add-item-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(1, 83, 43, 0.25) !important;
}

.table-container {
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.01);
  background-color: #ffffff;
}

.transfer-table {
  background-color: transparent !important;
}

.transfer-table >>> th {
  background-color: #f8fafc !important;
  color: #475569 !important;
  font-weight: 700 !important;
  font-size: 0.85rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px;
  font-family: 'Noto Sans Lao', sans-serif !important;
  border-bottom: 1.5px solid #cbd5e1 !important;
  height: 48px !important;
}

.transfer-table >>> td {
  height: 60px !important;
  vertical-align: middle !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.item-number-cell {
  font-size: 0.9rem;
  color: #64748b;
  width: 50px;
}

.product-select-cell {
  min-width: 250px;
}

.qty-cell, .unit-rate-cell, .discount-cell {
  width: 120px;
}

.unit-select-cell {
  width: 140px;
}

.price-display-cell, .total-display-cell {
  font-size: 0.95rem;
  font-family: 'Outfit', sans-serif;
  color: #1e293b;
  padding-right: 16px !important;
}

.total-display-cell {
  font-weight: 700 !important;
  color: #01532B !important;
}

.action-delete-cell {
  width: 60px;
}

/* Premium input grid design */
.table-input {
  font-size: 0.85rem !important;
}

.table-input >>> .v-input__control {
  min-height: 38px !important;
}

.table-input >>> .v-input__slot {
  background-color: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 8px !important;
  box-shadow: none !important;
  transition: all 0.2s ease !important;
}

.table-input >>> .v-input__slot:hover {
  background-color: #ffffff !important;
  border-color: #cbd5e1 !important;
}

.table-input.v-input--is-focused >>> .v-input__slot {
  background-color: #ffffff !important;
  border-color: #01532B !important;
  box-shadow: 0 0 0 3px rgba(1, 83, 43, 0.08) !important;
}

.text-right-input >>> input {
  text-align: right !important;
  font-weight: 600;
  color: #0f172a;
}

.delete-row-btn {
  background-color: #fff1f2;
  transition: all 0.2s ease;
}

.delete-row-btn:hover {
  background-color: #ffe4e6 !important;
  transform: scale(1.08);
}

.delete-row-btn:disabled {
  background-color: #f1f5f9 !important;
  opacity: 0.5;
}

/* Pulsing Red wash for Validation Failure rows */
.validation-error-row {
  background-color: rgba(208, 5, 5, 0.05) !important;
  animation: pulse-danger 2s infinite ease-in-out;
  transition: all 0.3s ease;
}

.validation-error-row td {
  border-top: 1px solid rgba(208, 5, 5, 0.2) !important;
  border-bottom: 1px solid rgba(208, 5, 5, 0.2) !important;
}

.validation-error-row .table-input >>> .v-input__slot {
  border-color: rgba(208, 5, 5, 0.4) !important;
  background-color: rgba(255, 255, 255, 0.8) !important;
}

@keyframes pulse-danger {
  0% { background-color: rgba(208, 5, 5, 0.03); }
  50% { background-color: rgba(208, 5, 5, 0.09); }
  100% { background-color: rgba(208, 5, 5, 0.03); }
}

.error-indicator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

/* Action footer buttons */
.action-footer {
  background-color: #ffffff;
  border-top: 1px solid #e2e8f0 !important;
  flex-shrink: 0;
}

.action-footer .v-btn {
  font-family: 'Noto Sans Lao', sans-serif !important;
  text-transform: none;
  font-size: 0.9rem;
  letter-spacing: 0.2px;
  height: 44px !important;
  transition: all 0.2s ease;
}

.save-btn {
  background: linear-gradient(135deg, #01532B, #337555) !important;
  color: white !important;
  box-shadow: 0 4px 12px rgba(1, 83, 43, 0.2) !important;
}

.save-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(1, 83, 43, 0.3) !important;
}
</style>