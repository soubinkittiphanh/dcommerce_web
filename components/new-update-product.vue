<template>
  <div class="text-center">
    <v-hover v-slot:default="{ hover }" open-delay="50">
      <v-card :elevation="hover ? 8 : 0" class="" max-width="300"  outlined >
        <v-img
          class=""
          max-width="100%"
          :src="productImage"
        ></v-img>

        <v-card-text class="text-start">
          <div class="font-weight-meduim blue--text">{{ categoryName }}</div>
          <div class="font-weight-meduim black--text">{{ productName }}</div>
          <div class="font-weight-meduim black--text">
            ລາຄາເລີ່ມຕົ້ນ:
            {{ productPrice }}
          </div>

          <div class="d-flex justify-space-between mt-2">
            <v-chip small label class="ma-0 white--text" color="blue">
              ໃໝ່
            </v-chip>
            <v-spacer></v-spacer>
            <v-chip small label outlined class="ma-0 white--text" color="blue">
              ພ້ອມສົ່ງ
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import ProductImage from '~/assets/img/product/product.jpg'
export default {
  name: 'new-products-card',
  data() {
    return {
      categoryName: 'ຊຸດ Dress',
      productName: 'ຊຸດລາຕີ ສີນ້ຳຕານ RED CARPET Size S-M',
      productPrice: '250,000 LAK',
      productImage: ProductImage,
    }
  },
}
</script>

<style></style>
