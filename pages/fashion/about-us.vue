<template>
  <div>
    <!-- img -->
    <v-row justify="center" class="text-center mt-0 relative-position">
      <v-col cols="12" sm="12" md="12" class="relative-position">
        <div class="text-overlay">About Us</div>
        <img
          :src="bgimg"
          width="100%"
          style="max-height: 500px; object-fit: cover"
        />
      </v-col>
    </v-row>

    <!-- text-->
    <v-row class="pt-5 pb-4">
      <v-col cols="12" sm="12" md="12">
        <v-card class="pa-2" elevation="1">
          <v-card-text>
            <v-row justify="start">
              <v-col cols="12">
                <h3 class="text-decoration-underline mb-2">www.soubin.com</h3>
                <p class="text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3 class="text-decoration-underline mb-2">www.soubin.com</h3>
                <p class="text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3 class="text-decoration-underline mb-2">www.soubin.com</h3>
                <p class="text-start">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import bgimg from '~/assets/img/bg-about-us.jpg'

export default {
  name: 'IndexPage',
  layout: "fashion",
  data() {
    return {
      bgimg: bgimg,
    }
  },
}
</script>

<style scoped>
.relative-position {
  position: relative;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 200px; /* Adjust the left position as needed */
  transform: translateY(-50%);
  font-size: 3em;
  color: white;
  text-shadow: 2px 2px 4px white;
  z-index: 2;
}
</style>
