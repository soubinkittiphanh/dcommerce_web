<template>
  <v-app dark>
    <coming-soon />
    <!-- <NuxtLink to="/admin">
      Home page
    </NuxtLink> -->
  </v-app>
</template>

<script>
import ComingSoon from '~/components/ComingSoon.vue';

export default {
  components: {
    ComingSoon
  },
  // layout: 'comingSoon',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found: ເກີດຂໍ້ຜິດພາດ',
      otherError: 'Comming soon'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
