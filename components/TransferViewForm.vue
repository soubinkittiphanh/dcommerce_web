<template>
    <div>
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card>
            <v-card-subtitle>
                <v-row>
                    <v-col cols="6">
                        {{ isQuotation ? `Quotation #` : `Invoice #` }}
                        {{ header.id }}
                    </v-col>
                    <v-col v-if="isQuotation" cols="6" style="text-align: right;">
                        <v-btn size="large" variant="outlined" @click="post" class="primary">
                            Post to invoice<span class="mdi mdi-cloud-download"></span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
                <v-card>

                    <v-card-text>

                        <div>
                            <v-row>
                                <v-col cols="4">
                                    <v-row>
                                        <v-col cols="12">ວັນທີ: {{ header.bookingDate }} </v-col>
                                        <v-col cols="12">ຊື່ລູກຄ້າ: {{ header.client.name }}</v-col>
                                        <v-col cols="12">ເບີໂທ: {{ header.client.telephone }}</v-col>
                                        <v-col cols="12">ບໍລິສັດ: {{ header.client.company }}</v-col>
                                        <v-col cols="12">ການຊຳລະ: {{ header.payment.payment_code }} </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="4">
                                    <v-row>
                                        <v-col cols="12">ສະກຸນ: {{ header.currency.code }}</v-col>
                                        <v-col cols="12">ອັດຕາແລກປ່ຽນ: {{ header.exchangeRate }}</v-col>
                                        <v-col cols="12">ສ່ວນຫລຸດ: {{ header.discount }}</v-col>
                                        <v-col cols="12">ຍອດລວມທັງໝົດ: {{ getFormatNum(header.total) }}</v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="4" style="text-align: end;">
                                    <v-row>
                                        <v-col cols="12">ຜູ້ລົງ: {{ header.user.cus_id }} </v-col>
                                        <v-col cols="12">ຊື່: {{ header.user.cus_name }}</v-col>
                                        <!-- <v-col cols="12">ສ່ວນຫລຸດ: {{ header.discount }}</v-col>
                                <v-col cols="12">ຍອດລວມທັງໝົດ: {{ header.total }}</v-col> -->
                                    </v-row>
                                </v-col>

                            </v-row>

                        </div>

                    </v-card-text>
                </v-card>
                <v-divider></v-divider>
                <v-data-table v-if="header.lines" :headers="headers" :search="search" :items="header.lines">
                    <template v-slot:[`item.function`]="{ item }">

                        <v-btn color="blue darken-1" text @click="editItem(item)
                        wallet = true
                            ">

                            <i class="fas fa-wallet"></i>
                        </v-btn>
                    </template>
                    <template v-slot:[`item.price`]="{ item }">
                        {{ getFormatNum(item.price) }}
                    </template>
                    <template v-slot:[`item.discount`]="{ item }">
                        {{ getFormatNum(item.discount) }}
                    </template>
                    <template v-slot:[`item.total`]="{ item }">
                        {{ getFormatNum(item.total) }}
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="toggleDialog">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { swalSuccess, swalError2, confirmSwal, dayCount, getNextDate } from '~/common'
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
    async created() {
        await this.loadLocation()

        this.isloading = true
        await this.loadTransaction()
        this.isloading = false



    },
    methods: {
        post() {
            //  ********** Enable below line to confirm before clear ***********//
            confirmSwal(this.$swal, 'You are posting to invoice ?', this.postToInvoice)
            // this.clearCart()
        },
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        toggleDialog() {
            this.$emit('close-dialog')
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
        async loadTransaction() {
            await this.$axios
                .get(`api/transfer/find/${this.headerId}`)
                .then((res) => {
                    this.transaction = res.data;
                    console.log("Data ", res.data);
                    // swalSuccess(this.$swal, 'Succeed', 'ດຳເນີນການສຳເລັດ')
                })
                .catch((er) => {
                    swalError2(this.$swal, 'Error', 'Could no load data ' + er.Error)
                })
        },
    },
    data() {
        return {
            search: '',
            isloading: false,
            headers: [
                { text: 'ສິນຄ້າ', align: 'start', value: 'product.pro_name' },
                { text: 'ຈຳນວນ', align: 'end', value: 'quantity' },
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

            ],
        }
    },

}
</script>

<style></style>