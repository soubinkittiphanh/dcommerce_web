<template>
  <div class="ma-0">
    <v-carousel ref="carousel">
      <!-- <v-carousel-item
        :src="sliderV1">
      </v-carousel-item> -->
      <v-carousel-item src="https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/bikini.jpg"
        cover>
      </v-carousel-item>
      <v-carousel-item src="https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/Untitled-1.jpg"
        cover>
      </v-carousel-item>
      <v-carousel-item
        src="https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/%E0%B8%A2%E0%B8%B9%E0%B8%AD%E0%B8%B4.jpg"
        cover>
      </v-carousel-item>
    </v-carousel>
    <v-sheet class="rounded-lg">
      <v-slide-group show-arrows center-active cycle ref="slideGroup">
        <template v-slot:next>
          <v-icon color="primary">mdi-arrow-right</v-icon>
        </template>

        <template v-slot:prev>
          <v-icon color="primary">mdi-arrow-left</v-icon>
        </template>

        <v-slide-item v-for="(image, index) in imageList" :key="index">
          <v-card width="100" class="ma-4" @click="gotoProductDetail(image['productId'])">
            <v-img width="100" :src="host + '/' + image['img_path']" class="pointer-cursor hover"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>

</template>

<script>
import {  getFormatNum } from '~/common'
import { hostName } from '~/common/api'
import XiaomiImage from '~/assets/img/products/product_1.jpg'
// import SliderV1 from '~/assets/img/slider/SliderV1.jpg'
export default {
  name: 'slider',
  props: {
    imageList: {
      type: Array,
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
      xiaomiImage: XiaomiImage,
      // sliderV1: SliderV1,
      // imageList: XiaomiImage,
    }
  },
  mounted() {
    // Auto-slide every 5 seconds (adjust the interval as needed)
    setInterval(this.nextSlide, 5000);
  },
  methods: {

    gotoProductDetail(productId) {
      // this.$router.push({ name: 'product-details', params: { id: productId } });
      this.$router.push({ path: `product/${productId}` });
    },
    nextSlide() {
      // Programmatically go to the next slide
      this.$refs.carousel.next();
      this.$refs.slideGroup.next();
    },

  }
}
</script>

<style></style>
