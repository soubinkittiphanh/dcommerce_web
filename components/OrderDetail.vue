<template>
    <div>
        <v-card>

            <v-card-subtitle>
                <span class="text-h5">Order item</span>
            </v-card-subtitle>
            <v-data-table v-if="orderList" :headers="headers" :search="search" :items="orderList">
                <template v-slot:[`item.function`]="{ item }">

                    <v-btn color="blue darken-1" text @click="editItem(item)
                    wallet = true
                        ">

                        <i class="fas fa-wallet"></i>
                    </v-btn>
                </template>
            </v-data-table>
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
export default {
    props: {
        orderId: {
            type: String,
            default: '',
        },
    },
    async created() {
        await this.fetchData();
    },
    methods: {
        getFormatNum(val) {
            return new Intl.NumberFormat().format(val)
        },
        toggleDialog() {
            this.$emit('close-dialog', 'false')
        },
        async fetchData() {
            this.isloading = true
            await this.$axios
                .get('api/findOrderById/?orderId=' + this.orderId)
                .then((res) => {
                    this.orderList = res.data.row.map((el) => {



                        return {
                            "id": el.id,
                            "order_id": el.order_id,
                            "user_id": el.user_id,
                            "product_id": el.product_id + ' ' + el.pro_name,
                            "product_amount": el.product_amount,
                            "product_price": this.getFormatNum(el.product_price),
                            "order_price_total": this.getFormatNum(el.order_price_total),
                            "product_discount": el.product_discount,
                            "locking_session_id": el.locking_session_id,
                            "cod_fee": el.cod_fee,
                            "rider_fee": el.rider_fee,
                            "record_status": el.record_status,
                            "cancel_reason": el.cancel_reason,
                            "txn_date": el.txn_date.split('T')[0],
                            "recordStatusText": el.record_status === 1 ? 'Effeced' : el.record_status === 2 ? 'Cancel' : 'Return',
                        }

                    });
                })
                .catch((er) => {
                    this.message = er
                    console.log('Error: ' + er)
                })
            this.isloading = false
        },
    },
    data() {
        return {
            search: '',
            orderList: [],
            headers: [


                {
                    text: 'ວັນທີ',
                    align: 'center',
                    value: 'txn_date',
                    sortable: true,
                },

                { text: 'ລະຫັດສິນຄ້າ', align: 'center', value: 'product_id' },
                { text: 'ຈຳນວນ', align: 'center', value: 'product_amount' },
                {
                    text: 'ລາຄາ',
                    align: 'end',
                    value: 'product_price',
                    sortable: true,
                },

                {
                    text: 'ລວມ',
                    align: 'end',
                    value: 'order_price_total',
                    sortable: false,
                },


                {
                    text: 'ສະຖານະ',
                    align: 'end',
                    value: 'recordStatusText',
                    sortable: false,
                },

            ],
        }
    },

}
</script>

<style></style>