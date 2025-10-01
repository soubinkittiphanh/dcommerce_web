<template>
    <v-row justify="center">
        <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
                Open Dialog
            </v-btn>
        </template>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-card-title>

                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ລາຍຮັບ {{ today }}
                </v-chip>

            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="ເລກເອກະສານອ້າງອີງ*" required
                                v-model="form.header.receiveNumber"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field type="date" label="ວັນທີ*" v-model="form.header.bookingDate"
                                hint="ເດຶອນ/ວັນ/ປີ 12/31/2023"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="ຊຶ ບໍ່ລິສັດ ຫລື ຜູ້ຮັບ ການຊຳລະ*" v-model="form.header.payee"
                                hint="ຊື່ບຸກຄົນ,ບໍລິສັດ ຫລື ຜູ້ຮັບການຊຳລະ" persistent-hint required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="ເນື້ອໃນລາຍການ*" required v-model="form.header.notes"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="form.header.totalAmount" label="ຈຳນວນເງິນ*" required
                                v-comma-thousand></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-autocomplete @input="currencyChange" :items="currencyList" label="ສະກຸນເງິນ*" item-text="code" item-value="id"
                                v-model="form.header.currencyId"></v-autocomplete>
                            <!-- <v-text-field v-model="form.header.currency" label="ສະກຸນເງິນ*" required></v-text-field> -->
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="form.header.rate" label="ອັດຕາແລກປ່ຽນ*" required
                                v-comma-thousand></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-autocomplete item-text="payment_code" item-value="id"  :items="paymentList" label="ປະເພດການຊຳລະ *"
                                v-model="form.header.paymentId"></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-autocomplete item-text="desc" item-value="id" :items="account"
                                label="ບັນຊີແຍກປະເພດ DR ACCOUNT*" v-model="form.header.drAccountId"></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-autocomplete item-text="desc" item-value="id" :items="account"
                                label="ບັນຊີແຍກປະເພດ CR ACCOUNT*" v-model="form.header.crAccountId"></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-container>
                <small>* ສະແດງເຖິງຟິວທີ່ຕ້ອງໃສ່ຂໍ້ມູນ</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <v-btn color="primary" rounded variant="text" @click="submitData">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>

    </v-row>
</template>

<script>
import commaThousand from "@/plugins/comma-thousand";
import { mapActions, mapGetters } from 'vuex'
import { swalSuccess, swalError2 } from '~/util/myUtil'
export default {
    props: {
        receiveHeaderId: {
            type: Number,
            default: '',
        },
        isEdit: {
            type: Boolean,
            default: false,
        },
    },
    directives: {
        commaThousand
    },
    data() {
        return {
            account: [],
            drAccount: "",
            crAccount: "",
            amount: '',
            isloading: false,
            bookingDate: '',
            paymentDescription: '',
            postingReference: '',
            paymentType: [
                'Cash', 'Check', 'Credit Card', 'Bank transfer'
            ],
            paymentList:[],
            form: {
                header: {
                    bookingDate: '',
                    receiveNumber: 'DEFAULT',
                    payee: 'ຮ້ານຄ້າທົ່ວໄປ',
                    paymentId: 1,
                    currencyId: 1,
                    rate: 1,
                    totalAmount: '1,000',
                    notes: '',
                    // locking_session_id: 'abc123',
                    update_user: 1,
                    drAccountId: 1,
                    crAccountId: 13,
                    isActive: true
                },
                line: {

                }
            },
        }
    },
    mounted() {
        
        this.loadAccount()
        this.loadPayment()
        const today = new Date().toISOString().substr(0, 10);
        // const today = new Date().toISOString().substr(0, 10);
        // const today = new Date().toLocaleDateString();
        this.bookingDate = today
        this.form.header.bookingDate = today
        this.form.header.currencyId = this.currencyList[0]['id']
        if (this.isEdit) {
            console.log("Load payment header");
            this.loadReceiveById()
        }
    },
    computed: {
        ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency', 'findAllTerminal', 'findSelectedTerminal']),
        today() {
            const today = new Date().toLocaleDateString();
            console.log(today);
            return today
        }, currencyList() {
            return this.findAllCurrency
        },
    },
    methods: {
        currencyChange() {
            const currency = this.currencyList.find(el => el['id'] == this.form.header.currencyId);
            if (!currency) return
            this.form.header.rate = currency['rate'];
        },
        async loadPayment() {
            this.isloading = true;
            this.paymentList = []
            await this.$axios
                .get('/api/paymentMethod/find')
                .then((res) => {
                    this.paymentList = res.data
                    this.form.header.paymentId = this.paymentList[0]['id']
                })
                .catch((er) => {
                    swalError2(this.$swal, "Error", er)
                })
            this.isloading = false;
        },
        async loadAccount() {
            this.isloading = true;
            const response = await this.$axios.get('/api/account/find')
            response.data.forEach(element => {
                this.account.push({
                    id: element["id"],
                    desc: element["accountName"] + " - " + element["accountNumber"]
                })
            });
            this.isloading = false;
        },
        async loadReceiveById() {
            this.isloading = true;
            await this.$axios.get(`/api/finanicial/ar/header/find/${this.receiveHeaderId}`)
                .then(response => {
                    this.form.header = response.data
                    this.form.header.bookingDate = response.data['bookingDate'].split('T')[0]
                    this.form.header.totalAmount = this.getFormatNum(this.form.header.totalAmount)
                })
                .catch(error => {
                    swalError2(this.$swal, "Error", error.response.data)
                })
        },
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        async submitData() {

            if (this.isloading) return
            this.isloading = true
            if (this.isEdit) {
                await this.$axios.put(`/api/finanicial/ar/header/update/${this.receiveHeaderId}`, this.form.header)
                    .then(response => {
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                        this.$emit('reload')
                        this.$emit('close-dialog')
                    })
                    .catch(error => {
                        swalError2(this.$swal, "Error", error.response.data)
                    })
            } else {
                await this.$axios.post("/api/finanicial/ar/header/create", this.form.header)
                    .then(response => {
                        swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                        this.$emit('reload')
                        this.$emit('close-dialog')
                    })
                    .catch(error => {
                        swalError2(this.$swal, "Error", error.response.data.errors[0].msg)
                    })
            }

            this.isloading = false


        }
    }
}
</script>

<style></style>