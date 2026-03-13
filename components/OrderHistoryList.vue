
<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ປະຫວັດ ອໍເດີ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-data-table :headers="headers" :search="search" :items="entries">
                    <template v-slot:[`item.id`]="{ item }">
                        <v-btn color="warning" text @click="deleteItem(item)">
                            <i class="fa fa-trash"></i>
                        </v-btn>
                    </template>
                    <template v-slot:[`item.amount`]="{ item }">
                        {{ formatNumber(item.amount) }}
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning" rounded variant="text" @click="$emit('close-dialog')">
                    Close
                </v-btn>
                <!-- <v-btn color="primary" rounded variant="text" @click="commitRecord">
                    Save
                </v-btn> -->
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import { mapActions, mapGetters } from 'vuex'
export default {
    props: {
        histories: {
            type: Array,
            require: true,
        }
    },
    data() {
        return {
            search: '',
            headers: [
                {
                    text: 'Name',
                    align: 'end',
                    value: 'name',
                    sortable: false,
                },
                {
                    text: 'ລາຄາ',
                    align: 'end',
                    value: 'amount',
                    sortable: false,
                },
                {
                    text: 'ສູດຄິດໄລ່',
                    align: 'end',
                    value: 'type',
                    sortable: false,
                },
                {
                    text: 'ລົບ',
                    align: 'end',
                    value: 'id',
                    sortable: false,
                },
            ],
            isloading: false,
        };
    },
    async created() {
        this.form.productId = this.recordId;
        this.loadEntry();
    },
    methods: {
        formatNumber(value) {
            return getFormatNum(value)
        },
        async commitRecord() {
            if (this.$refs.form.validate() && !this.isloading) {
                this.isloading = true
                let api = 'api/priceList/create'
                console.log("API => ", api);
                try {
                    const response = await this.$axios.post(api, this.form)
                    console.log(`Load data ${JSON.stringify(response)}`);
                    await this.loadEntry();
                    swalSuccess(this.$swal, 'Succeed', 'Your transaction completed');
                } catch (error) {

                    return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                }
                this.isloading = false
            }

        },
        async deleteItem(item) {
            if (!this.isloading) {
                // Implement form submission logic here
                this.isloading = true
                let api = `api/priceList/find/${item.id}`
                console.log("API => ", api);
                try {
                    const response = await this.$axios.delete(api)
                    console.log(`Load data `);
                    await this.loadEntry()
                    swalSuccess(this.$swal, 'Succeed', 'Your transaction has been deleted');
                } catch (error) {

                    return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
                }
                this.isloading = false
            }

        },
        async loadEntry() {
            console.log(`Loading data ....`);
            try {
                const response = await this.$axios.get(`api/priceList/findByProductId/${this.recordId}`)
                this.entries = response.data
            } catch (error) {
                console.log("Cannot fetch data " + error);
                return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');

            }
        },
        refreshData() {
            this.$emit('reload-data')
        }
    },
    computed: {
        ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    }
};
</script>
