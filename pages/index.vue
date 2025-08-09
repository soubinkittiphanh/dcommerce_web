<template>
  <div>
    <div class="brands mb-4 mt-2">
      <slider :imageList="imageList"></slider>
      <!-- COUTN: {{ imageList.length }} -->
    </div>
    <!-- <div class="brands mb-4 mt-2">
            <brands></brands>
        </div> -->
    <v-dialog v-model="isloading" hide-overlay persistent width="300">
      <loading-indicator> </loading-indicator>
    </v-dialog>
    <div
      v-for="category in webCategoryList"
      :key="category.id"
      class="discount-products mb-4"
    >
      <v-card class="pa-6 rounded-lg">
        <v-row>
          <v-list class="" style="margin-bottom: -10px">
            <v-list-item>
              <!-- <v-avatar tile color="green rounded-pill" size="40" class="mr-2">
                                <v-icon color="white">mdi-cash-minus</v-icon></v-avatar> -->
              <v-list-item-title>
                <h3>{{ `${category.name} ` }}</h3>
              </v-list-item-title>
              <v-list-item-icon> </v-list-item-icon>
            </v-list-item>
          </v-list>
          <v-spacer />
          <v-btn
            text
            color="green"
            class="green--text mt-3"
            @click="gotoProductDetail"
          >
            ເບິ່ງເພີ່ມເຕີມ
            <v-icon right dark> mdi-arrow-right-circle </v-icon>
          </v-btn>

          <v-col cols="12">
            <v-divider class="mb-2"></v-divider>
            <div class="row">
              <div
                v-for="product in category.products"
                :key="product.id"
                class="col-12 col-md-2 col-sm-6 col-xs-6 text-center"
              >
                <discount-products-card
                  :product="product"
                ></discount-products-card>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <!-- 
        <div class="banner-1 mb-4">
            <v-card class="rounded-lg">
                <v-img max-width="100%" :src="Banner_1"></v-img>
            </v-card>
        </div>

        <div class="hot-products mb-4">
            <v-card class="pa-6 rounded-lg">
                <v-row>
                    <v-list class="" style="margin-bottom: -10px">
                        <v-list-item>
                            <v-avatar tile color="red rounded-pill" size="40" class="mr-2">
                                <v-icon color="white">mdi-fire</v-icon></v-avatar>
                            <v-list-item-title>
                                <h3>ສີນຄ້າຍອດນິຍົມ</h3>
                            </v-list-item-title>
                            <v-list-item-icon> </v-list-item-icon>
                        </v-list-item>
                    </v-list>
                    <v-spacer />
                    <v-btn text color="red" class="red--text mt-3">
                        ເບິ່ງເພີ່ມເຕີມ
                        <v-icon right dark> mdi-arrow-right-circle </v-icon>
                    </v-btn>

                    <v-col cols="12">
                        <v-divider class="mb-2"></v-divider>
                        <div class="row">
                            
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div>

        <div class="banner-2 mb-4">
            <v-card class="rounded-lg">
                <v-img max-width="100%" :src="Banner_2"></v-img>
            </v-card>
        </div>

        <div class="new-products mb-4">
            <v-card class="pa-6 rounded-lg">
                <v-row>
                    <v-list class="" style="margin-bottom: -10px">
                        <v-list-item>
                            <v-avatar tile color="blue rounded-pill" size="40" class="mr-2">
                                <v-icon color="white">mdi-new-box</v-icon></v-avatar>
                            <v-list-item-title>
                                <h3>ສິນຄ້າໃໝ່</h3>
                            </v-list-item-title>
                            <v-list-item-icon> </v-list-item-icon>
                        </v-list-item>
                    </v-list>
                    <v-spacer />
                    <v-col cols="12">
                        <v-divider class="mb-2"></v-divider>
                        <div class="row">
                            <div class="col-12 col-md-12 col-sm-6 col-xs-6 text-center">
                                <v-btn class="blue white--text" outlined>
                                    ເບິ່ງເພີ່ມເຕີມ <v-icon>mdi-arrow-down</v-icon></v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </div> -->
  </div>
</template>

<script>
import Banner_1 from '~/assets/img/banners/banner_1.png'
import Banner_2 from '~/assets/img/banners/banner_2.png'
import { getFormatNum, swalSuccess, swalError2 } from '~/common'
import { hostName } from '~/common/api'
export default {
  layout: 'web',
  data() {
    return {
      isloading: false,
      Banner_1: Banner_1,
      Banner_2: Banner_2,
      icons: ['mdi-facebook', 'mdi-whatsapp'],
      webCategoryList: [],
      menuList: [
        { text: 'ໂຮມ', icon: 'mdi-home', path: '/home' },
        { text: 'ສິນຄ້າທັງໝົດ', icon: 'mdi-package-variant', path: '/home' },
        { text: 'ໝວດໝູ່ສິນຄ້າ', icon: 'mdi-information', path: '/home' },
        {
          text: 'ກ່ຽວກັບເຮົາ',
          icon: 'mdi-file-document-outline',
          path: '/home',
        },
        {
          text: 'ຊ່ອງທາງການຕິດຕໍ່',
          icon: 'mdi-file-document-outline',
          path: '/home',
        },
        { text: 'ບົດຄວາມ', icon: 'mdi-file-document-outline', path: '/home' },
        {
          text: 'ເງື່ອນໄຂການເຊົ່າຊຸດ',
          icon: 'mdi-file-document-outline',
          path: '/home',
        },
      ],
    }
  },
  computed: {
    host() {
      return hostName()
    },
    imageList() {
      const imageList = []
      for (const iterator of this.webCategoryList) {
        for (const product of iterator['products']) {
          imageList.push(...product['images'])
        }
      }
      console.log(`Image ${JSON.stringify(imageList)}`)
      return imageList
    },
  },
  async created() {
    this.$router.push('/admin/moneyAdvance'); // Link to the main page manually
    // await this.loadCategory()
  },
  methods: {
    formatPrice(price) {
      console.log(`Price ${getFormatNum(price)}`)
      return getFormatNum(price)
    },
    gotoProductDetail(productId) {
      // this.$router.push({ name: 'product-details', params: { id: productId } });
      this.$router.push({ path: `product/${productId}` })
    },

    async loadCategory() {
      try {
        // this.isloading = true
        const response = await this.$axios.get('/webproductgroup/find')
        // this.isloading = false
        console.info(`Category found ${JSON.stringify(response)}`)
        this.webCategoryList = response.data
        console.info(`Category found ${JSON.stringify(this.webCategoryList)}`)
      } catch (error) {
        // swalError2(this.$swal, 'Error', 'Could no load category ' + JSON.stringify(error))
      }
    },
  },
}
</script>

<style></style>