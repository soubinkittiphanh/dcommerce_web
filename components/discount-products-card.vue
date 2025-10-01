<template>
  <div class="text-center">
    <!-- {{ productId }} -->
    <v-hover v-slot:default="{ hover }" open-delay="50">
      <v-card :elevation="hover ? 8 : 0" class="" width="220" @click="gotoProductDetail(product.id)">
        <v-card height=" 280">
          <!-- {{ product['images'][0]['img_path'] }} -->
          <v-img v-if="product['images'].length > 0" class="pointer-cursor" max-width="220"
            :src="host + '/' + product['images'][0]['img_path']"></v-img>
        </v-card>
        <v-card-text class="text-start">
          <div class="font-weight-meduim black--text">{{ product.pro_name }}</div>
          <!-- <div class="font-weight-meduim red--text">
            <span class="text-decoration-line-through">{{ formatPrice(product.pro_price) }}
            </span>

            <span class="black--text ml-2">({{ discountPercent }})</span>
          </div> -->
          <div class="font-weight-meduim green--text">
            ລາຄາ: {{ formatPrice(product.pro_price) }}
          </div>

          <div class="d-flex justify-space-between mt-2">
            <v-chip small label class="ma-0 white--text" color="white">
              <v-btn icon color="green" @click="(whatsappProduct(product.pro_price))">
                <v-icon>mdi-whatsapp</v-icon>
              </v-btn>
            </v-chip>
            <!-- <v-row align-content="center"> -->
            <!-- <v-spacer></v-spacer> -->
            <!-- <v-chip small label outlined class="ma-0 white--text" :color="product.stock_count > 0 ? 'green' : 'red'"> -->
            <v-chip small label outlined class="ma-0" color="primary">
              <!-- {{ product.stock_count > 0 ? "ພ້ອມສົ່ງ" : "ໝົດ" }} -->
              {{  "ພ້ອມສົ່ງ"  }}
            </v-chip>

            <!-- </v-row> -->

          </div>
        </v-card-text>
      </v-card>

    </v-hover>
  </div>
</template>

<script>
import {  getFormatNum } from '~/common'
import { hostName } from '~/common/api'
export default {
  name: 'discount-products-card',
  props: {
    product: {
      type: Object,
      require: true,
    },



  }, computed: {
    host() {
      return hostName()
    }
  },
  data() {
    return {
      discountPrice: '119000 LAK',
      discountPercent: '-50%',
    }
  },
  methods: {
    gotoProductDetail(productId) {
      // this.$router.push({ name: 'product-details', params: { id: productId } });
      this.$router.push({ path: `product/${productId}` });
    },
    formatPrice(price) {
      console.log(`Price ${getFormatNum(price)}`);
      return getFormatNum(price)
    },
    whatsappProduct(pro_price) {
      console.log(`Price ${this.formatPrice(pro_price)}`);
// TODO: Get whatsapp function done
    },
  }
}
</script>

<style></style>
