
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
                        <v-text-field type="date" label="ວັນທີ*" v-model="newRow.date" required hint="date"></v-text-field>
                        <v-text-field v-model.number="newRow.reach" label="Reach" required
                            :rules="numberRule"></v-text-field>
                        <v-text-field v-model.number="newRow.comments" label="Comments" required :rules="numberRule">
                        </v-text-field>
                        <v-text-field v-model.number="newRow.results" label="Results" required
                            :rules="numberRule"></v-text-field>
                        <v-text-field v-mode.number="newRow.purchaseQty" label="Purchase Qty" :rules="numberRule"
                            required></v-text-field>
                        <v-text-field v-model.number="newRow.costPerCustomer" label="Cost Per Customer" :rules="numberRule"
                            required></v-text-field>
                        <v-text-field v-model.number="newRow.budgetSpend" label="Budget Spend" :rules="numberRule"
                            required></v-text-field>
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
                                <v-text-field v-model="form.header.title" label="Title" :rules="[rules.required]"
                                    required></v-text-field>
                                <v-text-field v-model="form.header.product" label="Remark" :rules="[rules.required]"
                                    required></v-text-field>

                                <v-autocomplete item-text="pro_name" item-value="pro_id" :items="productList"
                                    label="ເລືອກສິນຄ້າ *" v-model="form.header.productId"></v-autocomplete>

                            </v-form>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-form v-model="valid" @submit.prevent="submitForm">
                                <v-text-field type="date" label="ວັນທີເລີ່ມ*" v-model="form.header.start"
                                    hint="example of helper text only on focus"></v-text-field>
                                <v-text-field v-model="form.header.budget" label="Budget" type="number" :rules="numberRule"
                                    required></v-text-field>

                                <!-- <v-btn color="primary" :disabled="!valid" type="submit">Submit</v-btn> -->
                            </v-form>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                            <v-form @submit.prevent="submit">
                                <v-text-field type="date" label="ວັນທີສິ້ນສຸດ*" v-model="form.header.end"
                                    hint="example of helper text only on focus"></v-text-field>
                                <v-switch v-model="form.header.isActive" label="Active" :true-value="true"
                                    :false-value="false"></v-switch>
                            </v-form>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>

                    <v-btn color="primary" @click="showAddRowDialog = true">ເພີ່ມລາຍການ</v-btn>
                    <v-data-table :headers="headers" :items="campaignEntry">
                        <template v-slot:item="{ item }">
                            <tr>
                                <!-- <v-form ref="campaignEntry"> -->
                                <td>
                                    <v-text-field type="date" label="ວັນທີ*" v-model="item.date"
                                        hint="example of helper text only on focus"></v-text-field>
                                </td>
                                <td> <v-text-field v-model.number="item.reach" label="Reach"
                                        :rules="numberRule"></v-text-field>
                                </td>
                                <td><v-text-field v-model.number="item.comments" label="Comments"
                                        :rules="numberRule"></v-text-field></td>
                                <td> <v-text-field v-model.number="item.results" label="Results"
                                        :rules="numberRule"></v-text-field>
                                </td>
                                <td>
                                    <v-text-field v-model.number="item.purchaseQty" label="Purchase Quantity"
                                        :rules="numberRule"></v-text-field>
                                </td>
                                <td>

                                    <v-text-field v-model.number="item.costPerCustomer" label="Cost Per Customer"
                                        :rules="numberRule"></v-text-field>
                                </td>
                                <td>
                                    <v-text-field v-model.number="item.budgetSpend" label="Budget Spend"
                                        :rules="numberRule"></v-text-field>
                                </td>
                                <td>
                                    <v-btn color="primary" variant="text" @click="deleteItem(item)">
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
        campaignId: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            productList: [],
            showAddRowDialog: false,
            dialog: false,
            title: 'ສ້າງ Campaign',
            valid: false,
            isLoading: false,
            form: {
                header: {
                    title: "Summer Sale",
                    start: "",
                    end: "",
                    product: "T-shirts",
                    productId: 1000,
                    budget: 5000.00,
                    isActive: true
                }
            },
            bookingDate: '',
            rules: {
                required: v => !!v || "This field is required",
                dateAfter: date => v =>
                    date ? new Date(v) >= new Date(date) || "Date must be after start date" : true,
                dateAfterToday: v =>
                    new Date(v) >= new Date() || "Date must be after today",
                number: v => !isNaN(parseFloat(v)) && isFinite(v) || "Value must be a number"
            },
            headers: [
                { text: "Date", value: "date" },
                { text: "Reach", value: "reach" },
                { text: "Comments", value: "comments" },
                { text: "Results", value: "results" },
                { text: "Purchase Qty", value: "purchaseQty" },
                { text: "Cost Per Customer", value: "costPerCustomer" },
                { text: "Budget Spend", value: "budgetSpend" }
            ],
            campaignEntry: [
            ], newRow: {
                date: "",
                reach: 0.01,
                comments: 0,
                results: 0,
                purchaseQty:7,
                costPerCustomer: 0,
                budgetSpend: 0
            }
        };
    },
    mounted() {
        // this.loadAccount()
        const today = new Date().toISOString().substr(0, 10);
        this.form.header.start = today
        this.form.header.end = today
        this.newRow.date = today
        this.loadCampaign();
        this.loadProduct()
    },
    computed: {
        dateRules() {
            return [
                value => !!value || 'Field is required',
                value => /^(\d{4})-(\d{2})-(\d{2})$/.test(value) || 'Invalid date format (YYYY-MM-DD)'
            ];
        },


        numberRule() {
            return [
                value => value !== undefined && value !== null && value !== '' || 'Field is required',
                value => /^(\d+(\.\d{1,2})?)|(0(\.\d{1,2})?)$/.test(value) || 'Rate must be a number with up to 2 decimal places'
            ];
        },

    },
    methods: {
        deleteItem(item) {
            const index = this.campaignEntry.indexOf(item);
            if (index > -1) {

                if (this.isEdit && item.id) {
                    confirmSwal(this.$swal, 'warning', async () => {
                        console.log("Delete record function");
                        this.isLoading = true
                        await this.$axios.delete(`/api/campaignEntry/delete/${item.id}`)
                            .then(response => {
                                console.log("response=>", response.data);
                                if (response.data.includes('successfully')) {
                                    this.campaignEntry.splice(index, 1);
                                }
                            })
                            .catch(error => {
                                swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data)
                            })
                        this.isLoading = false
                    })
                } else {
                    this.campaignEntry.splice(index, 1);

                }

            }
        },
        open() {
            this.dialog = true;
        },
        close() {
            this.dialog = false;
        },
        validateObject(obj) {
            const { date, reach, comments, results, purchaseQty, costPerCustomer, budgetSpend } = obj;
            console.log("Result ===> ", results, ' ', Number.isInteger(Number('0')), ' val ', !!results);

            // if (!date || !reach || !comments || !results || !purchaseQty || !costPerCustomer || !budgetSpend) {
            //     console.log("all checked false");
            //     return false; // All required properties must be present
            // }

            if (!Number.isFinite(reach) || Number(reach) < 0) {
                console.log("Reach", reach, ' IS NUMBER FINITE ', Number.isFinite(reach));
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(comments) || Number(comments) < 0) {
                console.log("Comments");
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(results) || Number(results) < 0) {
                console.log("Results");
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(purchaseQty) || Number(purchaseQty) < 0) {
                console.log("Purchase");
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(costPerCustomer) || Number(costPerCustomer) < 0) {
                console.log("CostCustomer");
                return false; // Reach must be a positive number
            }
            if (!Number.isFinite(budgetSpend) || Number(budgetSpend) < 0) {
                console.log("Budgets");
                return false; // Reach must be a positive number
            }

            return true;
        },
        validateCampaignEntry() {
            for (const iterator of this.campaignEntry) {
                if (!this.validateObject(iterator)) {
                    return false;
                }
            }
            return true
        },
        async loadCampaign() {
            this.isLoading = true
            if (this.isEdit) {
                await this.$axios.get(`/api/campaign/find/${this.campaignId}`).then(response => {
                    this.form.header = response.data
                    this.form.header.start = response.data['start'].split('T')[0]
                    this.form.header.end = response.data['end'].split('T')[0]
                    this.campaignEntry.length = 0
                    for (const iterator of response.data.entries) {
                        let entry = iterator
                        entry['date'] = iterator['date'].split('T')[0]
                        // entry.purchaseQty = +iterator.purchaseQty
                        // entry.costPerCustomer = +iterator.costPerCustomer
                        // entry.budgetSpend = +iterator.budgetSpend
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
                if (this.campaignEntry.length == 0) {
                    this.isLoading = false
                    return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ບໍ່ມີລາຍການກະລຸນາເພີ່ມຢ່າງນ້ອຍ 1 ລາຍການ")
                }
                if (!this.validateCampaignEntry()) {
                    this.isLoading = false
                    return swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", "ກະລຸນາກວດຂໍ້ມູນຄືນໃຫ້ຖືກຕ້ອງ")
                }
                this.form.header.entry = this.campaignEntry
                // ********* update entry *********
                if (this.isEdit && this.campaignId) {
                    console.log("====> update campaign");
                    await this.$axios.put(`/api/campaign/update/${this.campaignId}`, this.form.header).then(res => {
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
                    await this.$axios.post("/api/campaign/create", this.form.header).then(res => {
                        if (res.status == 200) {
                            swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                        } else {
                            swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", res.data)
                        }
                    }).catch(error => {
                        swalError2(this.$swal, "ເກີດຂໍ້ຜິດພາດ", error.response.data.errors[0]['msg'])

                    })
                }

                this.isLoading = false;
            }
            this.close();
        }, addRow() {
            if (this.$refs.addRowForm.validate()) {
                this.campaignEntry.push(this.newRow);
                this.newRow = {
                    date: "",
                    reach: 0,
                    comments: 0,
                    results: 0,
                    purchaseQty: 0,
                    costPerCustomer: 0,
                    budgetSpend: 0
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
                        // {
                        //     card_count: el.card_count,
                        //     categ_name: el.categ_name,
                        //     cost_price: el.cost_price,
                        //     id: el.id,
                        //     img_name: el.img_name,
                        //     outlet: el.outlet,
                        //     outlet_name: el.outlet_name,
                        //     pro_category: el.pro_category,
                        //     pro_desc: el.pro_desc,
                        //     pro_id: el.pro_id,
                        //     pro_image_path: el.pro_image_path,
                        //     pro_name: el.pro_name,
                        //     pro_price: el.pro_price,
                        //     pro_status: el.pro_status,
                        //     retail_cost_percent: el.retail_cost_percent,
                        //     sale_count: el.sale_count,
                        //     stock_count: el.stock_count,
                        // }

                    })
                    console.log("all data1: ", this.productList[0].img_path);
                })
                .catch((er) => {
                    console.log('Data: ' + er)
                })
            this.isLoading = false
        }
    }
}
</script>
  