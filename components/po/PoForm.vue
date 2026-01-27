
<template>
    <div>
        <v-dialog v-model="isLoading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-dialog v-model="showAddRowDialog" max-width="800">
            <v-card>
                <v-card-title>ເພີ່ມລາຍການໃຫມ່</v-card-title>
                <v-card-text>
                    <v-form ref="addRowForm">
                        <v-autocomplete item-text="pro_name" item-value="id" :items="productList" label="ເລືອກສິນຄ້າ *"
                            v-model="newRow.productId" :rules="productIdRules"></v-autocomplete>
                        <v-text-field type="number" step="0.01" min="0" v-model.number="newRow.price" label="ລາຄາຕໍ່ຫນ່ວຍ" required
                            :rules="priceRules"></v-text-field>
                        <v-text-field type="number" v-model.number="newRow.qty" label="ຈຳນວນ" required :rules="qtyRules">
                        </v-text-field>
                        <v-autocomplete item-text="code" item-value="id" :items="currencyList" label="ສະກຸນ *"
                            :rules="currencyIdRules" v-model="newRow.currencyId"></v-autocomplete>
                        <v-text-field type="number" step="0.01" min="0" v-model.number="newRow.rate" label="ອັດຕາແລກປ່ຽນ"
                            :rules="rateRules" required></v-text-field>
                        <v-text-field type="number" step="0.01" min="0" v-model.number="newRow.total" label="ລວມ"
                            :rules="totalRules" required></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="addRow">ເພີ່ມ</v-btn>
                    <v-btn color="secondary" @click="showAddRowDialog = false">ປິດ</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>

            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="4" md="4">
                            <v-form v-model="valid" @submit.prevent="submitForm">
                                <v-text-field v-model="form.header.vendor" label="Vendor" :rules="[rules.required]"
                                    required></v-text-field>
                                <v-text-field v-model="form.header.notes" label="Remark" :rules="[rules.required]"
                                    required></v-text-field>
                            </v-form>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-form v-model="valid" @submit.prevent="submitForm">
                                <v-text-field type="date" label="ວັນທີສັ່ງ*" v-model="form.header.bookingDate"
                                    hint="example of helper text only on focus"></v-text-field>
                            </v-form>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-form @submit.prevent="submit">
                                <v-text-field type="date" label="ວັນທີຮັບເຄື່ອງ*" v-model="form.header.deliveryDate"
                                    hint="example of helper text only on focus"></v-text-field>
                                <v-switch v-model="form.header.isActive" label="Active" :true-value="true"
                                    :false-value="false"></v-switch>
                            </v-form>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>

                    <v-btn color="primary" @click="showAddRowDialog = true">ເພີ່ມລາຍການ</v-btn>
                    <v-data-table :headers="headers" :items="lines">
                        <template v-slot:item="{ item }">
                            <tr>
                                <!-- <v-form ref="campaignEntry"> -->
                                <td>
                                    <v-autocomplete item-text="pro_name" item-value="id" :items="productList"
                                        :rules="productIdRules" label="ເລືອກສິນຄ້າ *"
                                        v-model="item.productId"></v-autocomplete>
                                </td>
                                <td> <v-text-field type="number" v-model.number="item.price" label="ລາຄາ"
                                        :rules="priceRules"></v-text-field>
                                </td>
                                <td><v-text-field type="number" v-model.number="item.qty" label="ຈຳນວນ"
                                        :rules="qtyRules"></v-text-field></td>
                                <td> <v-autocomplete item-text="code" item-value="id" :items="currencyList" label="ສະກຸນ *"
                                        v-model="item.currencyId" :rules="currencyIdRules"></v-autocomplete>
                                </td>
                                <td>
                                    <v-text-field type="number" step="0.01" min="0" v-model.number="item.rate" label="ອັດຕາແລກປ່ຽນ"
                                        :rules="rateRules"></v-text-field>
                                </td>
                                <td>
                                    <v-text-field type="number" step="0.01" min="0" v-model.number="item.total" label="ລວມ"
                                        :rules="totalRules"></v-text-field>
                                </td>
                                <td>
                                    <v-btn color="warning" variant="text" @click="deleteItem(item)">
                                        ລົບ
                                    </v-btn>
                                </td>
                                <!-- </v-form> -->
                            </tr>
                        </template>
                    </v-data-table>
                </v-container>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="submit">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
  
<script>
import { swalSuccess, swalError2, toastNotification, confirmSwal } from '~/util/myUtil'
import { mysqlDateToDateObject, parseDate } from '~/common'
export default {
    props: {
        isEdit: {
            type: Boolean,
            default: false,
        },
        headerId: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            productList: [],
            currencyList: [],
            showAddRowDialog: false,
            dialog: false,
            title: 'ສ້າງ ໃບສັ່ງຊື້',
            valid: false,
            isLoading: false,
            form: {
                header: {
                    bookingDate: '',
                    deliveryDate: '',
                    vendor: 'Acme Inc.',
                    notes: 'Please deliver to loading dock B.',
                    isActive: true,
                    locking_session_id:''
                }
            },
            rules: {
                required: v => !!v || "This field is required",
                dateAfter: date => v =>
                    date ? new Date(v) >= new Date(date) || "Date must be after start date" : true,
                dateAfterToday: v =>
                    new Date(v) >= new Date() || "Date must be after today",
                number: v => !isNaN(parseFloat(v)) && isFinite(v) || "Value must be a number"
            },
            headers: [
                { text: "ສິນຄ້າ", value: "date" },
                { text: "ລາຄາຕໍ່ຫນ່ວຍ", value: "reach" },
                { text: "ຈຳນວນ", value: "results" },
                { text: "ສະກຸນ", value: "reach" },
                { text: "ອັດຕາແລກປ່ຽນ", value: "comments" },
                { text: "ລວມ", value: "purchaseQty" },
                // { text: "Cost Per Customer", value: "costPerCustomer" },
                // { text: "Budget Spend", value: "budgetSpend" }
            ],
            lines: [

            ],
            lineError: [],
            newRow: {
                rate: 1,
                qty: 1,
                price: 25.0,
                total: 250.0,
                isActive: true,
                currencyId: 1,
                productId: 2,
                locking_session_id:''
            }
        };
    },
    mounted() {
        // this.loadAccount()

        const today = new Date().toISOString().substr(0, 10);
        this.form.header.bookingDate = today
        this.form.header.deliveryDate = today
        this.loadPurchaseOrder();
        this.loadProduct()
        this.loadCurrency()
    },
    computed: {
        dateRules() {
            return [
                value => !!value || 'Field is required',
                value => /^(\d{4})-(\d{2})-(\d{2})$/.test(value) || 'Invalid date format (YYYY-MM-DD)'
            ];
        },
        rateRules() {
            return [
                value => !!value || 'Rate is required',
                value => /^[0-9]+(\.[0-9]{1,2})?$/.test(value) || 'Rate must be a number with up to 2 decimal places'
            ];
        },
        qtyRules() {
            return [
                value => !!value || 'Quantity is required',
                value => /^\d+$/.test(value) || 'Quantity must be a whole number'
            ];
        },
        priceRules() {
            return [
                value => !!value || 'Price is required',
                value => /^\d+(\.\d{1,2})?$/.test(value) || 'Price must be a number with up to 2 decimal places'
            ];
        },
        totalRules() {
            return [
                value => !!value || 'Total is required',
                value => /^\d+(\.\d{1,2})?$/.test(value) || 'Total must be a number with up to 2 decimal places'
            ];
        },
        currencyIdRules() {
            return [
                value => !!value || 'Currency ID is required',
                value => /^\d+$/.test(value) || 'Currency ID must be a whole number'
            ];
        },
        productIdRules() {
            return [
                value => !!value || 'Product ID is required',
                value => /^\d+$/.test(value) || 'Product ID must be a whole number'
            ];
        }

    },
    methods: {
        deleteItem(item) {
            const index = this.lines.indexOf(item);
            if (index > -1) {
                if (this.isEdit && item.id) {
                    confirmSwal(this.$swal, 'warning', async () => {
                        console.log("Delete record function");
                        this.isLoading = true
                        await this.$axios.delete(`/api/purchasing/line/find/${item.id}`)
                            .then(response => {
                                console.log("response=>", response.data);
                                if (response.data.includes('successfully')) {
                                    this.lines.splice(index, 1);
                                }
                            })
                            .catch(error => {
                                swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data)
                            })
                        this.isLoading = false
                    })
                } else {
                    this.lines.splice(index, 1);
                }

            }
        },
        open() {
            this.dialog = true;
        },
        close() {
            this.dialog = false;
        },
        validateLine() {

            this.lines.forEach((item, index) => {
                const { rate, qty, price, total, isActive, currencyId, productId } = item;
                console.log("===>Rate ",rate);
                if (!rate || !Number.isFinite(rate)) {
                    this.lineError.push(` Rate must be a number`);
                }

                if (!qty || !Number.isInteger(qty)) {
                    this.lineError.push(` Quantity must be an integer`);
                }

                if (!price || !Number.isFinite(price)) {
                    this.lineError.push(` Price must be a number`);
                }

                if (!total || !Number.isFinite(total)) {
                    this.lineError.push(` Total must be a number`);
                }

                if (typeof isActive !== 'boolean') {
                    this.lineError.push(` isActive must be a boolean`);
                }

                if (!currencyId || !Number.isInteger(currencyId)) {
                    this.lineError.push(` Currency ID must be an integer`);
                }

                if (!productId || !Number.isInteger(productId)) {
                    this.lineError.push(` Product ID must be an integer`);
                }
            });

        },
        async loadPurchaseOrder() {
            this.isLoading = true
            if (this.isEdit) {
                await this.$axios.get(`/api/purchasing/find/${this.campaignId}`).then(response => {
                    this.form.header = response.data
                    this.form.header.start = response.data['start'].split('T')[0]
                    this.form.header.end = response.data['end'].split('T')[0]
                    this.campaignEntry.length = 0
                    for (const iterator of response.data.entries) {
                        let entry = iterator
                        entry['date'] = iterator['date'].split('T')[0]
                        this.campaignEntry.push(entry)
                    }
                }).catch(error => {
                    console.log("Load cammpaign error", error);
                })
            }
            this.isLoading = false;
        },
        async submit() {
            // handle form submission here
            if (!this.isLoading) {
                this.isLoading = true;
                if (this.lines.length == 0) {
                    this.isLoading = false
                    return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ບໍ່ມີລາຍການ ກະລຸນາເພີ່ມຢ່າງນ້ອຍ 1 ລາຍການ")
                }
                this.validateLine();
                if (this.lineError.length > 0) {
                    swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", `ກະລຸນາ ກວດຂໍ້ມູນຄືນໃຫ້ຖືກຕ້ອງ ${this.lineError} `);
                    this.isLoading = false;
                    return this.lineError.length = 0;
                }

                this.form.header.lines = this.lines
                // ********* update entry *********
                if (this.isEdit && this.headerId) {
                    console.log("====> update campaign");
                    await this.$axios.put(`/api/purchasing/update/${this.headerId}`, this.form.header).then(res => {
                        if (res.status == 200) {
                            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                        } else {
                            swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data)
                        }
                    }).catch(error => {
                        swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data)

                    })
                    // ********* create entry *********
                } else {
                    // this.isLoading = false;
                    // return console.log("Form ===> ", this.form.header);
                    await this.$axios.post("/api/purchasing/create", this.form.header).then(res => {
                        if (res.status == 200) {
                            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                        } else {
                            swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data)
                        }
                    }).catch(error => {
                        // swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data.errors[0]['msg'])
                        swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data)

                    })
                }

                this.isLoading = false;
            }
            this.close();
        },
        addRow() {
            if (this.$refs.addRowForm.validate()) {
                this.lines.push(this.newRow);
                this.newRow = {
                    rate: 2.5,
                    qty: 10,
                    price: 25.0,
                    total: 250.0,
                    isActive: true,
                    //   locking_session_id: 'abc123'
                };
                this.showAddRowDialog = false;
            }
        },
        async loadProduct() {
            this.isLoading = true
            await this.$axios
                .get('product_mobile_f')
                .then((res) => {
                    this.productList = res.data.map((el) => {
                        return el
                    })
                    console.log("all data1: ", this.productList[0].img_path);
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isLoading = false
        },
        async loadCurrency() {
            this.isLoading = true
            await this.$axios
                .get('api/currency/findAll')
                .then((res) => {
                    this.currencyList = res.data.map((el) => {
                        return el
                    })
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isLoading = false
        }
    }
}
</script>
  