<template>
  <v-app dark>
    <v-app-bar app color="primary" dark height="100">
      <v-toolbar-title class="ml-12" @click="goToHome">PEEAIR</v-toolbar-title>
      <v-spacer />
      <v-text-field dark v-model="search" clearable clear-icon="mdi-close" class="mt-6" prepend-inner-icon="mdi-magnify"
        dense outlined label="ຄົ້ນຫາ" placeholder="ຄົ້ນຫາ" solo-inverted />
      <v-spacer />
      <v-btn large class="flexcol mr-12" icon v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon> {{ item.icon }} </v-icon>
        <span class="mt-2">{{ item.title }}</span>
      </v-btn>
    </v-app-bar>
    <!-- Secondary Menu Bar -->
    <!-- Secondary Menu Bar -->
    <!-- <v-container>
      <div class="brands mb-4 mt-1">
        <v-row justify="center" style="background-color: #01532B;">
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="item in menuList" :key="item.text" text :to="item.path" style="font-size: large; ">
              {{ item.text }}
            </v-btn>
          </v-toolbar-items>
        </v-row>
      </div>
    </v-container> -->

    <v-main style="background-color: rgb(235, 235, 235)" >
      <Nuxt/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import MyFooter from '@/components/footer'
import { getFormatNum } from '~/common'
import { hostName } from '~/common/api'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      search: '',
      // title: 'DCOMMERCE',
      menuItems: [
        {
          title: 'ເຂົ້າສູ່ລະບົບ',
          path: '',
          icon: 'mdi-account-outline',
        },

        {
          title: 'ກະຕ່າຂອງທ່ານ',
          path: '',
          icon: 'mdi-cart-outline',
        },
      ],
      menuList: [
        { text: 'ໂຮມ', icon: 'mdi-home', path: '/home' },
        { text: 'ສິນຄ້າທັງໝົດ', icon: 'mdi-package-variant', path: '/home' },
        { text: 'ໝວດໝູ່ສິນຄ້າ', icon: 'mdi-information', path: '/home' },
        { text: 'ກ່ຽວກັບເຮົາ', icon: 'mdi-file-document-outline', path: '/home' },
        { text: 'ຊ່ອງທາງການຕິດຕໍ່', icon: 'mdi-file-document-outline', path: '/home' },
        { text: 'ບົດຄວາມ', icon: 'mdi-file-document-outline', path: '/home' },
        { text: 'ເງື່ອນໄຂການເຊົ່າຊຸດ', icon: 'mdi-file-document-outline', path: '/home' },
      ],

    }
  },
  methods: {
    goToHome() {
      // Assuming you have a "home" route defined in your Vue Router configuration
      this.$router.push('/'); // Replace 'home' with your actual home route name
    }
  },
  computed: {
    host() {
      return hostName()
    }
  },
  components: {
    MyFooter,
  },
}
</script>

<style>
.flexcol .v-btn__content {
  display: flex;
  flex-direction: column;
}

span {
  text-transform: capitalize;
}
</style>