<template>
  <div>
    <v-sheet class="rounded-lg">
      <v-slide-group show-arrows center-active>
        <template v-slot:next>
          <v-icon color="primary">mdi-arrow-right</v-icon>
        </template>

        <template v-slot:prev>
          <v-icon color="primary">mdi-arrow-left</v-icon>
        </template>

        <v-slide-item v-for="(item, index) in 20" :key="index">
          <v-card width="100" class="ma-4">
            <v-img
              width="100"
              :src="xiaomiImage"
              class="pointer-cursor hover"
            ></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import XiaomiImage from '~/assets/img/brands/xiaomi.png'
export default {
  name: 'brands',
  data() {
    return {
      xiaomiImage: XiaomiImage,
    }
  },
}
</script>

<style></style>
