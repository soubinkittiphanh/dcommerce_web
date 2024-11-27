<template>
  <div class="text-center">
    <v-hover v-slot:default="{ hover }" open-delay="50">
      <v-card :elevation="hover ? 8 : 0" class="" width="220" height="440">
        <v-img class="pointer-cursor" max-width="220" :src="host + '/' + productImage"></v-img>

        <v-card-text class="text-start">
          <div class="font-weight-meduim black--text">{{ productName }}</div>
          <div class="font-weight-meduim green--text">
            {{ productPrice }}
          </div>

          <div class="d-flex justify-space-between mt-2">
            <v-chip small label class="ma-0 white--text" color="red">
              ຍອດນິຍົມ
            </v-chip>
            <v-spacer></v-spacer>
            <v-chip small label outlined class="ma-0 white--text" color="red">
              ພ້ອມສົ່ງ
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import { hostName } from '~/common/api'

export default {
  name: 'hot-products-card',
  props: {
    productImage: {
      type: String,
      require: true,
    },
    productName: {
      type: String,
      require: true,
    },
    productPrice: {
      type: String,
      require: true,
    },

  },
  computed: {
    host() {
      return hostName()
    }
  },
  data() {
    return {


    }
  },
}
</script>

<style></style>
