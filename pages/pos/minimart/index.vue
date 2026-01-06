<template>
  <!-- 8850100004994 -->
  <div class="pa-0">
    <!-- <v-btn
      @click="findProductFromBarcode('8850100004994', false)"
      color="primary"
      outlined
      x-small
    >
      <v-icon x-small>mdi-tag-multiple</v-icon>
    </v-btn> -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <v-card class="pa-4">
      <v-row v-if="filterProduct.length > 0">
        <v-col :cols="12">
          <div class="row">
            <div
              v-for="(item, index) in filterProduct"
              :key="index"
              class="col-12 col-md-3 col-sm-6 col-xs-6 text-center"
            >
              <product-card-pos
                :product="item"
                :productName="item.pro_name"
                :imagePath="item.img_name"
                :stock="item.card_count"
              ></product-card-pos>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row v-else>
        <div class="error">ບໍ່ພົບຂໍ້ມູນ</div>
      </v-row>
    </v-card>
  </div>
</template>
  
<script>
import { getFormatNum, swalError2, swalSuccess } from '~/common'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import { hostName, mainCompanyInfo, mainCompanyInfoV1 } from '~/common/api'
export default {
  layout: 'pos',
  middleware: 'auths',
  inject: ['sharedState'],
  data() {
    return {
      productPriceList: [],
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
      productSelectedFromBarcode: null,
    }
  },
  watch: {
    'sharedState.saleHeader'(newVal, oldVal) {
      console.log('Count changed:', newVal, oldVal)
      this.loadProduct()
    },
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.handleStorageChange)
  },
  async mounted() {
    await this.loadProduct()
    window.addEventListener('storage', this.handleStorageChange)
    // await this.loadProductWithPriceList()
    await this.loadCategory()
    // await this.loadPayment()
    console.warn(
      `the company info is ${JSON.stringify(mainCompanyInfoV1(this.$store))}`
    )
    window.addEventListener('keydown', this.handleKeyDown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown)
  },
  computed: {
    ...mapGetters({
      searchKeyword: 'searchKeyword',
      currenctSelectedCategoryId: 'currenctSelectedCategoryId',
      currentSelectedLocation: 'currentSelectedLocation',
      findAllCurrency: 'findAllCurrency',
      findAllTerminal: 'findAllTerminal',
      findAllProduct: 'findAllProduct',
      findSelectedTerminal: 'findSelectedTerminal',
      currentSelectedCustomer: 'currentSelectedCustomer',
    }),
    effectiveCustomer() {
      return this.currentSelectedCustomer
    },
    currentTerminal() {
      return this.findAllTerminal.find(
        (el) => el['id'] == this.findSelectedTerminal
      )
    },
    filterProduct() {
      console.log(`Category ${this.currenctSelectedCategoryId}`)
      // let productByTerminalCompany = this.productList.filter(
      let productByTerminalCompany = this.findAllProduct.filter(
        // ---------- anable below code to show product base on company select
        // (pro) => pro.companyId === this.currentTerminal.location.companyId
        (pro) => pro
      )
      if (!this.searchKeyword) {
        console.log(`Keywoard not available ...${this.searchKeyword}`)
        if (this.currenctSelectedCategoryId != 9999) {
          return productByTerminalCompany.filter(
            (item) => item.pro_category === this.currenctSelectedCategoryId
          )
        }
        // return this.productList; // Backup 20240111
        // return this.productList //.filter(pro=>pro.companyId === this.currentTerminal.location.companyId);
        return this.findAllProduct //.filter(pro=>pro.companyId === this.currentTerminal.location.companyId);
      }
      // element.age > 25 || element.name.includes("a")
      if (this.currenctSelectedCategoryId == 9999) {
        console.log(`CATEGORY SELECT ${this.currenctSelectedCategoryId}`)
        // return this.productList.filter((item) =>
        return this.findAllProduct.filter((item) =>
          item.pro_name.toLowerCase().includes(this.searchKeyword)
        )
      }
      return productByTerminalCompany.filter(
        (item) =>
          item.pro_category === this.currenctSelectedCategoryId &&
          item.pro_name.toLowerCase().includes(this.searchKeyword)
      )
    },
  },
  methods: {
    // doSomeThing(){
    //     console.info(`DO SOMETHING CALLED - emitting to layout`)
    //     // Make sure to emit to the parent (layout)
    //     // this.$emit('update-cus-screen')
    // },
    ...mapActions(['addProduct']),
    findCurrency(currencyId) {
      return this.findAllCurrency.find((el) => el.id == currencyId)
    },
    async handleStorageChange(event) {
      if (event.key === 'saleHeader') {
        console.log('myValue changed:', event.newValue)
      }
    },
    findProductFromBarcode(barcode, isGift = false) {
      this.productSelectedFromBarcode = this.findAllProduct.find(
        (el) => el.barCode == barcode
      )

      console.info(
        `Find product ${JSON.stringify(this.productSelectedFromBarcode)}`
      )

      if (this.productSelectedFromBarcode) {
        // Apply customer grade pricing logic locally
        const product = this.productSelectedFromBarcode
        let customerPrice = null

        // Check if we have customer grade and product has price lists
        if (this.effectiveCustomer?.grade && product?.priceLists?.length) {
          const gradePrice = product.priceLists.find(
            (priceList) =>
              priceList.grade === this.effectiveCustomer.grade &&
              priceList.isActive !== false &&
              priceList.type === 'Price'
          )
          customerPrice = gradePrice?.amount || null
        }

        const cartItem = {
          ...product,
          localPrice: customerPrice || product.localPrice || product.pro_price,
          isGift: isGift,
          lineUUIDCheck: false,
          priceListId: null,
          lineUUID: Date.now() + Math.random().toString(16),
        }

        this.addProduct(cartItem)
        this.productSelectedFromBarcode = null
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
        this.barcode = ''
        return
      }
      if (event.key != 'Shift') {
        this.barcode += event.key
      }
      this.timer = setInterval(() => (this.barcode = ''), 20)
    },
    async loadProduct() {
      console.warn(`PRODUCT IS being reload ...`) // Fixed: use backticks properly
      this.isloading = true
      this.productList = []

      await this.$store.dispatch(
        'initializeProductsByLocation',
        this.currentSelectedLocation['id']
      )

      this.isloading = false
    },
    async loadCategory() {
      this.isloading = true
      this.categoryList = []
      await this.$axios
        .get('/api/category/find')
        .then((res) => {
          for (const iterator of res.data) {
            this.categoryList.push(iterator)
          }
        })
        .catch((er) => {
          swalError2(this.$swal, 'Error', er)
        })
      this.isloading = false
    },
  },
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
    border: 1px solid primary !important;
} */
</style>