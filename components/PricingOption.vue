<template>
    <div class="text-center">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-card-title>
                <v-chip class="ma-0" color="primary" label text-color="white">
                    <v-icon start>mdi-label</v-icon>
                    ລາຍການລາຄາ
                </v-chip>
            </v-card-title>
            <v-card-text>
                <v-data-table :headers="headers" :search="search" :items="entries">
                    <template v-slot:[`item.id`]="{ item }">
                        <v-btn color="primary" text @click="select(item)">
                            <v-icon>mdi mdi-check-circle-outline</v-icon>
                        </v-btn>
                    </template>
                    <template v-slot:[`item.amount`]="{ item }">
                        {{ formatNumber(item.amount) }}
                    </template>
                    <template v-slot:[`item.currencyId`]="{ item }">
                        {{ findCurrency(item.currencyId)['code'] }}
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { swalSuccess, swalError2, getFormatNum } from '~/common'
import { mapActions, mapGetters } from 'vuex'
export default {
    props: {
        search: '',
        isBackend: {
            type: Boolean,
            default: false,
        },
        recordId: {
            type: Number,
            require: false,
            default: 0,
        }
    },
    data() {
        return {
            entries: [],
            headers: [
                {
                    text: 'Code',
                    align: 'end',
                    value: 'name',
                    sortable: false,
                },
                {
                    text: 'ເກດ',
                    align: 'end',
                    value: 'grade',
                    sortable: false,
                },
                {
                    text: 'ລາຄາ',
                    align: 'end',
                    value: 'amount',
                    sortable: false,
                },
                {
                    text: 'ສະກຸນ',
                    align: 'end',
                    value: 'currencyId',
                    sortable: false,
                },
                {
                    text: 'ສູດຄິດໄລ່',
                    align: 'end',
                    value: 'type',
                    sortable: false,
                },
                {
                    text: 'ເລືອກ',
                    align: 'end',
                    value: 'id',
                    sortable: false,
                },
            ],
            isloading: false,
        };
    },
    async created() {
        this.loadEntry();
    },
    computed: {
        ...mapGetters(['findAllProduct', 'findAllClient', 'findAllPayment', 'findAllUnit', 'findAllCurrency']),
    },
    methods: {
        ...mapActions(['updateProduct']),
        
        formatNumber(value) {
            return getFormatNum(value)
        },
        
        findCurrency(currencyId) {
            return this.findAllCurrency.find(el => el.id == currencyId);
        },
        
        async select(item) {
            console.log(`${JSON.stringify(item)} isbackend = ${this.isBackend}`);
            
            const currency = this.findCurrency(item.currencyId);
            
            // ✅ FIXED: Don't convert anything - just pass the original price info
            const priceInfo = {
                id: item.id,
                productId: this.recordId,
                amount: item.amount,  // Keep original amount as-is
                type: item.type,
                currencyId: item.currencyId,
                currency: currency
            };
            
            console.log(`Sending priceInfo: ${JSON.stringify(priceInfo)}`);
            
            if (this.isBackend) {
                // this.$emit('new-price-update', priceInfo);
            } else {
                // Update the store with the original price info
                this.updateProduct(priceInfo);
                console.info(`UPDATE CUSTOMER SCREEN PAYMENT AMOUNT UPDATED`);
                // this.$emit('new-price-update');
            }

            this.$emit('close-dialog');
        },
        
        async loadEntry() {
            console.log(`Loading data ....`);
            try {
                const response = await this.$axios.get(`api/priceList/findByProductId/${this.recordId}`);
                this.entries = response.data;
            } catch (error) {
                console.log("Cannot fetch data " + error);
                return swalError2(this.$swal, "Error", 'ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່ ພາຍຫລັງ');
            }
        },
        
        refreshData() {
            this.$emit('reload-data');
        }
    }
};
</script>