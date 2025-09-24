<template>
  <div>
    <div class="brands mb-4 mt-2" v-if="imageList.length > 0">
      <slider :imageList="imageList" :autoPlay="true" :autoPlayInterval="4000"></slider>
    </div>
    
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
      
      try {
        if (Array.isArray(this.webCategoryList)) {
          for (const category of this.webCategoryList) {
            if (category && Array.isArray(category.products)) {
              for (const product of category.products) {
                if (product && Array.isArray(product.images)) {
                  // Filter out invalid images and add valid ones
                  const validImages = product.images.filter(image => 
                    image && (
                      typeof image === 'string' || 
                      image.url || 
                      image.src || 
                      image.path
                    )
                  )
                  imageList.push(...validImages)
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('Error processing image list:', error)
      }
      
      console.log(`Image list processed: ${imageList.length} images`)
      return imageList
    },
  },
  async created() {
    // Redirect to admin page
    this.$router.push('/admin/moneyAdvance')
    // Uncomment if you want to load categories
    // await this.loadCategory()
  },
  beforeDestroy() {
    // Clean up any resources if needed
    this.webCategoryList = []
  },
  methods: {
    formatPrice(price) {
      console.log(`Price ${getFormatNum(price)}`)
      return getFormatNum(price)
    },
    
    gotoProductDetail(productId) {
      if (productId) {
        this.$router.push({ path: `product/${productId}` })
      }
    },

    async loadCategory() {
      try {
        this.isloading = true
        const response = await this.$axios.get('/webproductgroup/find')
        
        if (response && response.data) {
          this.webCategoryList = Array.isArray(response.data) ? response.data : []
          console.info(`Categories loaded: ${this.webCategoryList.length}`)
        } else {
          this.webCategoryList = []
          console.warn('No category data received')
        }
      } catch (error) {
        console.error('Error loading categories:', error)
        this.webCategoryList = []
        // Optionally show user-friendly error message
        // swalError2(this.$swal, 'Error', 'Could not load categories')
      } finally {
        this.isloading = false
      }
    },
  },
}
</script>

<style scoped>
.brands {
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

.discount-products {
  margin-bottom: 1rem;
}

/* Ensure proper spacing and layout */
.v-card {
  margin-bottom: 1rem;
}

.row {
  margin: 0;
}

[class*="col-"] {
  padding: 0.5rem;
}
</style>