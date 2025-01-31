<template>
    <div class="pa-6">
        <v-dialog v-model="isloading" hide-overlay persistent width="300">
            <loading-indicator> </loading-indicator>
        </v-dialog>
        <v-card class="pa-4">
            <v-row v-if="filterProduct.length > 0">
                <v-col :cols="12">
                    <div class="row">
                        <div v-for="(item, index) in filterProduct" :key="index"
                            class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                            <product-card-pos :product="item" :productName="item.pro_name" :imagePath="item.img_name"
                                :stock="item.card_count"></product-card-pos>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row v-else>
                <div class="error">
                    ບໍ່ພົບຂໍ້ມູນ
                </div>
            </v-row>
        </v-card>
    </div>
</template>
  
<script>
import { getFormatNum, swalError2, swalSuccess } from '~/common'
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    layout: "pos",
    middleware: 'auths',
    data() {
        return {
            productPriceList:[],
            barcode: '',
            timer: null,
            tab: null,
            searh: '',
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
        await this.loadProduct()
        await this.loadProductWithPriceList()
        await this.loadCategory()
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
            findAllTerminal: 'findAllTerminal',
            findSelectedTerminal: 'findSelectedTerminal',
        }),
        currentTerminal() {
            return this.findAllTerminal.find(el => el['id'] == this.findSelectedTerminal)
        },
        filterProduct() {
            console.log(`Category ${this.currenctSelectedCategoryId}`);
            let productByTerminalCompany = this.productList.filter(pro => pro.companyId === this.currentTerminal.location.companyId);
            if (!this.searchKeyword) {
                console.log(`Keywoard not available ...${this.searchKeyword}`);
                if (this.currenctSelectedCategoryId != 9999) {
                    return productByTerminalCompany.filter(item => item.pro_category === this.currenctSelectedCategoryId);
                }
                // return this.productList; // Backup 20240111
                return this.productList; //.filter(pro=>pro.companyId === this.currentTerminal.location.companyId);
            }
            // element.age > 25 || element.name.includes("a")
            if (this.currenctSelectedCategoryId == 9999) {
                console.log(`CATEGORY SELECT ${this.currenctSelectedCategoryId}`);
                return this.productList.filter(item => item.pro_name.toLowerCase().includes(this.searchKeyword));
            }
            return productByTerminalCompany.filter(item => item.pro_category === this.currenctSelectedCategoryId && item.pro_name.toLowerCase().includes(this.searchKeyword));

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
        async loadProductWithPriceList() {
            this.isloading = true
            this.productPriceList = []
            await this.$axios
                .get(`/api/product/find`)
                .then((res) => {
                    this.productPriceList = res.data
                    // for (const iterator of res.data) {
                    //     const currency = this.findCurrency(iterator['saleCurrencyId'])
                    //     iterator['localPrice'] = iterator['pro_price'] * currency['rate']
                    //     this.productList.push(iterator)
                    // }
                    console.info(`PRICE LIST ${JSON.stringify(this.productPriceList)}`)
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
    border: 1px solid #01532b !important;
} */
</style>