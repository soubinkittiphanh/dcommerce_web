<template>
    <div class="pa-6">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-row>
            <!-- TABLE AREA -->
            <v-col cols="12">
                <div class="row">
                    <div v-for="(tb, i) in orderTableList" :key="i" class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                        <v-card class="mx-auto" max-width="100" height="100"
                            image="https://cdn.vuetifyjs.com/images/cards/docks.jpg" theme="dark">
                            <v-card-title>
                                {{ tb['name'] }}
                            </v-card-title>
                        </v-card>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
import { getFormatNum, swalError2, swalSuccess } from '~/common'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    layout: "login",
    middleware: 'auths',
    data() {
        return {
            barcode: '',
            timer: null,
            tab: null,
            searh: '',
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
            productSelectedFromBarcode: null
        }
    },
    async mounted() {
        // await this.loadProduct()
        // await this.loadCategory()
        // await this.loadPayment()

        window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
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
            // element.age > 25 || element.name.includes("a")
            if (this.currenctSelectedCategoryId == 9999) {
                return this.productList.filter(item => item.pro_name.toLowerCase().includes(this.searchKeyword));
            }
            return this.productList.filter(item => item.pro_category === this.currenctSelectedCategoryId && item.pro_name.toLowerCase().includes(this.searchKeyword));

        },

    },
    methods: {
        ...mapActions(['addProduct']),
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
            if (this.timer) {
                clearInterval(this.timer)
            }
            if (event.key == 'Enter') {
                if (this.barcode) {
                    // ************ Find product from this barcode and add to cart ************ //
                    this.findProductFromBarcode(this.barcode)
                }
                this.barcode = '';
                return
            }
            if (event.key != 'Shift') {
                this.barcode += event.key;
            }
            this.timer = setInterval(() => this.barcode = '', 20);
        },
        async loadProduct() {
            this.isloading = true
            this.productList = []
            await this.$axios
                .get(`product_f/${this.currentSelectedLocation['id']}`)
                .then((res) => {
                    for (const iterator of res.data) {
                        const currency = this.findCurrency(iterator['saleCurrencyId'])
                        iterator['localPrice'] = iterator['pro_price'] * currency['rate']
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
  
<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
}

/* .product-border {
    border: 1px solid #01532B !important;
} */
</style>