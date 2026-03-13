<template>
  <div class="mr-16 ml-16">
    <v-row>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-arrow-right-thin</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row no-gutters class="mt-2">
      <v-col cols="12" sm="7">
        <v-row no-gutters>
          <v-col cols="12" sm="3">
            <v-list>
              <v-list-item v-for="(image, index) in productImages" :key="index">
                <v-img
                  height="100px"
                  :src="image"
                  alt="Thumbnail Image"
                  aspect-ratio="1"
                  @click="selectedThumbnail = index"
                  :class="{
                    'selected-thumbnail': selectedThumbnail === index,
                  }"
                />
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="9" class="mt-2">
            <v-carousel
              hide-delimiters
              v-model="selectedThumbnail"
              height="100%"
            >
              <v-carousel-item
                v-for="(image, index) in productImages"
                :key="index"
                :value="index"
              >
                <img
                  :src="mainImage"
                  width="100%"
                  height="600px"
                  alt="Main Image"
                  contain
                />
              </v-carousel-item>
            </v-carousel>
            <div class="mt-0">
              <v-row align="center" class="social-link">
                <v-col cols="12" sm="2">
                  <span>ແບ່ງປັນຜ່ານ:</span>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-btn icon x-large color="blue">
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn icon x-large color="green">
                    <v-icon>mdi-whatsapp</v-icon>
                  </v-btn>
                  <v-btn icon x-large color="purple">
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="5">
        <div class="ml-2">
          <h1 class="">ຊຸດສີແດງ NABI BRAND 9021 Size S-M</h1>
          <v-divider class="mb-6 mt-6"></v-divider>
          <div class="">
            <v-row>
              <v-col cols="6" md="6" sm="6">
                <v-select
                  class="rounded-lg"
                  clearable
                  dense
                  outlined
                  label="ເລືອກຂະໜາດຊຸດ"
                  prepend-inner-icon="mdi-size-m"
                  :items="sizes"
                ></v-select>

                <v-list-item>
                  <v-list-item-content>
                    <h3 class="mb-6">ລາຄາເຊົ່າ</h3>
                    <span>
                      1-3 ວັນ ລາຄາ xxx.xxx LAK <br /><br />
                      4-6 ວັນ ລາຄາ xxx.xxx LAK <br /><br />
                      7-9 ວັນ ລາຄາ xxx.xxx LAK <br /><br />
                      ລາຄາຂາຍ xxx.xxx LAK ສົ່ງຟີ
                    </span>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" md="12" sm="12">
                <v-list-item>
                  <v-list-item-content>
                    <h3 class="mb-6">ຄ່າມັດຈຳ/ຄ່າປະກັນຊຸດ *</h3>
                    <span>
                      ກະລຸນາກວດສອບ ແລະຍອມຮັບການຈ່າຍເງິນ.
                      ເງິນຄ່າມັດຈຳ/ຄ່າປະກັນຊຸດ <br /><br />
                      ລູກຄ້າຈະໄດ້ຮັບເງິນຄືນເມື່ອທາງຮ້ານໄດ້ຮັບເຄື່ອງນຸ່ງຄືນ.
                      ແລະ​ໄດ້​ຮັບ​ການ​ກວດ​ກາ​ແລ້ວ.
                    </span>
                  </v-list-item-content>
                </v-list-item></v-col
              >
            </v-row>
          </div>
          <v-divider class="mb-6 mt-6"></v-divider>
          <v-row>
            <v-col cols="6" md="12" sm="12">
              <div>
                <v-checkbox v-model="checkbox">
                  <template v-slot:label>
                    <div>ຄ່າມັດຈຳ/ຄ່າປະກັນຊຸດ xx.xxx LAK</div>
                  </template>
                </v-checkbox>
              </div>
              <div class="buy-product">
                <div class="wrapper">
                  <button
                    class="btn btn--minus"
                    @click="changeQuantity('-1')"
                    type="button"
                    name="button"
                  >
                    -
                  </button>
                  <input
                    class="quantity"
                    type="text"
                    name="name"
                    :value="quantity"
                  />
                  <button
                    class="btn btn--plus"
                    @click="changeQuantity('1')"
                    type="button"
                    name="button"
                  >
                    +
                  </button>
                </div>

                <v-col cols="12" sm="6" md="6">
                  <div class="mt-4">
                    <v-btn block class="ml-n2" color="primary">ສັ່ງເລີຍ</v-btn>
                  </div>
                </v-col>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductImage01 from '~/assets/img/product/01.jpg'
import ProductImage02 from '~/assets/img/product/02.jpg'
import ProductImage03 from '~/assets/img/product/03.jpg'
import ProductImage04 from '~/assets/img/product/04.jpg'

export default {
  layout: "fashion",
  data: () => ({
    checkbox: false,
    productImages: [
      ProductImage01,
      ProductImage02,
      ProductImage03,
      ProductImage04,
    ],
    items: [
      {
        text: 'Home',
        disabled: false,
        href: 'Index',
      },
      {
        text: 'All Product',
        disabled: false,
        href: 'all-product',
      },
      {
        text: 'ຊຸດສີແດງ NABI BRAND 9021 Size S-M',
        disabled: true,
        href: '/',
      },
    ],
    sizes: ['M', 'L', 'XL'],
    quantity: 1, // Initial quantity value
    selectedThumbnail: 0, // Initially selected thumbnail
  }),

  methods: {
    changeQuantity: function (num) {
      this.quantity += +num
      console.log(this.quantity)
      !isNaN(this.quantity) && this.quantity > 0
        ? this.quantity
        : (this.quantity = 0)
    },
  },
  computed: {
    mainImage() {
      return this.productImages[this.selectedThumbnail]
    },
  },
}
</script>

<style>
/* Product Quantity */
.wrapper {
  height: 40px;
  display: flex;
}
.quantity {
  border: none;
  text-align: center;
  width: 70px;

  font-size: 16px;
  color: #43484d;
  font-weight: 300;
  border: 1px solid #e1e8ee;
}

.btn {
  border: 1px solid #e1e8ee;
  width: 50px;
  background-color: #e1e8ee;
  /*   border-radius: 6px; */
  cursor: pointer;
}
button:focus,
input:focus {
  outline: 0;
}

.selected-thumbnail {
  border: 2px solid #3498db;
}
</style>
