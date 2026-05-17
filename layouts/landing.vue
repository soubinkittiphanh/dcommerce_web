<template>
  <v-app id="landing-app">
    <!-- Landing Page App Bar -->
    <v-app-bar app color="white" elevate-on-scroll height="80">
      <v-container class="d-flex align-center py-0">
        <!-- Brand Logo / Name -->
        <div class="d-flex align-center" style="cursor: pointer" @click="$router.push('/')">
          <v-img :src="require('~/assets/image/Dcommerce-Logo_DC.png')" width="50" height="50" contain class="mr-3" />
          <v-toolbar-title class="font-weight-black primary--text text-h5 hidden-xs-only">
            DCOMMERCE <span class="secondary--text">POS</span>
          </v-toolbar-title>
        </div>

        <v-spacer />

        <!-- Desktop Navigation -->
        <div class="hidden-sm-and-down">
          <v-btn text class="font-weight-bold grey--text text--darken-2" @click="scrollTo('#features')">
            ຄຸນສົມບັດ
          </v-btn>
          <v-btn text class="font-weight-bold grey--text text--darken-2" @click="scrollTo('#pricing')">
            ລາຄາ
          </v-btn>
          <v-btn outlined color="primary" class="font-weight-bold ml-4 rounded-lg px-6" to="/admin/login">
            ເຂົ້າສູ່ລະບົບ
          </v-btn>
          <v-btn color="primary" class="font-weight-bold ml-4 rounded-lg px-6 elevation-2" href="tel:+8562098422420">
            ຕິດຕໍ່ພະນັກງານ
          </v-btn>
        </div>

        <!-- Mobile Navigation Icon -->
        <v-btn icon class="hidden-md-and-up" @click="drawer = !drawer">
          <v-icon color="primary">mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" fixed temporary right width="280">
      <v-list nav dense>
        <v-list-item @click="scrollTo('#features'); drawer = false">
          <v-list-item-title class="text-h6">ຄຸນສົມບັດ</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollTo('#pricing'); drawer = false">
          <v-list-item-title class="text-h6">ລາຄາ</v-list-item-title>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item to="/admin/login">
          <v-list-item-title class="text-h6 primary--text">ເຂົ້າສູ່ລະບົບ</v-list-item-title>
        </v-list-item>
        <v-list-item href="tel:+8562098422420">
          <v-list-item-title class="text-h6 success--text">ຕິດຕໍ່ພະນັກງານ</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content Area -->
    <v-main class="landing-main">
      <Nuxt />
      
      <!-- Restored Footer Version (User Approved) -->
      <v-footer color="#01532B" dark padless>
        <v-row no-gutters>
          <v-col cols="12">
            <v-container class="py-16">
              <v-row>
                <!-- Column 1: Brand Info -->
                <v-col cols="12" md="4" class="mb-8 mb-md-0 pr-md-8">
                  <div class="d-flex align-center mb-6">
                    <v-img :src="require('~/assets/image/Dcommerce-Logo_DC.png')" width="45" height="45" contain class="mr-3 brightness-0-invert" />
                    <h3 class="text-h5 font-weight-black mb-0 white--text">DCOMMERCE POS</h3>
                  </div>
                  <p class="text-body-1 font-weight-regular grey--text text--lighten-1" style="line-height: 1.8;">
                    ລະບົບຈັດການການຂາຍໜ້າຮ້ານທີ່ດີທີ່ສຸດ ສໍາລັບທຸລະກິດຂອງທ່ານ. ຮອງຮັບຮ້ານອາຫານ, ມິນິມາກ ແລະ ຮ້ານຄ້າທົ່ວໄປດ້ວຍຟັງຊັນທີ່ຄົບຖ້ວນ ແລະ ທັນສະໄໝ.
                  </p>
                  <div class="mt-8 d-flex">
                    <v-btn icon color="grey lighten-1" class="social-btn mr-3" outlined href="https://www.facebook.com/profile.php?id=100093417550700" target="_blank">
                      <v-icon size="20">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon color="grey lighten-1" class="social-btn mr-3" outlined>
                      <v-icon size="20">mdi-whatsapp</v-icon>
                    </v-btn>
                    <v-btn icon color="grey lighten-1" class="social-btn" outlined href="https://www.youtube.com/@dcommercelaos" target="_blank">
                      <v-icon size="20">mdi-youtube</v-icon>
                    </v-btn>
                  </div>
                </v-col>

                <!-- Column 2: Quick Links -->
                <v-col cols="12" md="4" class="mb-8 mb-md-0 px-md-12">
                  <h3 class="text-h6 font-weight-bold mb-6 white--text text-uppercase">ເມນູຫຼັກ</h3>
                  <div class="d-flex flex-column">
                    <a @click="scrollTo('#features')" class="text-body-1 grey--text text--lighten-1 mb-4 text-decoration-none footer-link d-flex align-center">
                      <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon> ຄຸນສົມບັດ
                    </a>
                    <a @click="scrollTo('#pricing')" class="text-body-1 grey--text text--lighten-1 mb-4 text-decoration-none footer-link d-flex align-center">
                      <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon> ລາຄາແພັກເກດ
                    </a>
                    <nuxt-link to="/admin/login" class="text-body-1 grey--text text--lighten-1 text-decoration-none footer-link d-flex align-center">
                      <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon> ເຂົ້າສູ່ລະບົບ
                    </nuxt-link>
                  </div>
                </v-col>

                <!-- Column 3: Contact Info -->
                <v-col cols="12" md="4">
                  <h3 class="text-h6 font-weight-bold mb-6 white--text text-uppercase">ຕິດຕໍ່ພວກເຮົາ</h3>
                  <div class="d-flex align-start mb-5">
                    <v-icon color="primary" class="mr-4 mt-1 bg-white rounded-circle pa-1" size="18">mdi-map-marker</v-icon>
                    <span class="text-body-1 grey--text text--lighten-1" style="line-height: 1.6;">ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ</span>
                  </div>
                  <div class="d-flex align-center mb-5">
                    <v-icon color="primary" class="mr-4 bg-white rounded-circle pa-1" size="18">mdi-phone</v-icon>
                    <a href="tel:+8562098422420" class="text-body-1 grey--text text--lighten-1 text-decoration-none footer-link">+856 20 9842 2420</a>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="primary" class="mr-4 bg-white rounded-circle pa-1" size="18">mdi-email</v-icon>
                    <a href="mailto:info@dcommerce.la" class="text-body-1 grey--text text--lighten-1 text-decoration-none footer-link">info@dcommerce.la</a>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12">
            <v-divider class="grey darken-3"></v-divider>
          </v-col>
          <v-col class="py-5" style="background-color: #013A1E" cols="12">
            <v-container class="py-0 d-flex flex-column flex-md-row justify-center justify-md-space-between align-center">
              <span class="body-2 grey--text text--lighten-1 mb-2 mb-md-0">&copy; {{ new Date().getFullYear() }} DCommerce POS. All rights reserved.</span>
              <div class="d-flex">
                <a href="#" class="body-2 grey--text text--lighten-1 mr-6 text-decoration-none footer-bottom-link">ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</a>
                <a href="#" class="body-2 grey--text text--lighten-1 text-decoration-none footer-bottom-link">ເງື່ອນໄຂການໃຫ້ບໍລິການ</a>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LandingLayout',
  data() {
    return {
      drawer: false,
    }
  },
  mounted() {
    // Enforce the official DCommerce company theme on the landing page
    // This prevents dynamic customer themes from bleeding into the public marketing page
    this.$vuetify.theme.themes.light.primary = '#01532B'
    this.$vuetify.theme.themes.light.secondary = '#337555'
    this.$vuetify.theme.themes.light.lightprimary = '#80a995'
    this.$vuetify.theme.themes.light.danger = '#D00505'
  },
  methods: {
    scrollTo(selector) {
      this.$vuetify.goTo(selector, {
        duration: 800,
        offset: 80,
        easing: 'easeInOutCubic',
      })
    },
  },
}
</script>

<style>
/* CRITICAL: Force Noto Sans Lao font on EVERYTHING */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@300;400;700&display=swap');

html, body, .v-application, 
.v-application .text-h1, .v-application .text-h2, .v-application .text-h3, 
.v-application .text-h4, .v-application .text-h5, .v-application .text-h6,
.v-application .text-subtitle-1, .v-application .text-subtitle-2,
.v-application .text-body-1, .v-application .text-body-2,
.v-application .v-btn {
  font-family: 'noto sans lao', 'Noto Sans Lao', sans-serif !important;
}

/* Ensure global scroll */
html, body {
  height: auto !important;
  min-height: 100vh !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
}

.v-application--wrap {
  min-height: 100vh !important;
  height: auto !important;
}

.brightness-0-invert {
  filter: brightness(0) invert(1);
}

/* HARDCODED THEME OVERRIDES FOR LANDING PAGE
   This prevents any database theme from polluting the public page
*/
#landing-app.v-application .primary {
  background-color: #01532B !important;
  border-color: #01532B !important;
}
#landing-app.v-application .primary--text {
  color: #01532B !important;
  caret-color: #01532B !important;
}
#landing-app.v-application .secondary {
  background-color: #337555 !important;
  border-color: #337555 !important;
}
#landing-app.v-application .secondary--text {
  color: #337555 !important;
  caret-color: #337555 !important;
}
#landing-app.v-application .lightprimary {
  background-color: #80a995 !important;
  border-color: #80a995 !important;
}
#landing-app.v-application .lightprimary--text {
  color: #80a995 !important;
  caret-color: #80a995 !important;
}
</style>

<style scoped>
.landing-main {
  background-color: #ffffff;
}

/* Footer Hover Effects */
.footer-link {
  transition: all 0.3s ease;
  cursor: pointer;
}
.footer-link:hover {
  color: #ffffff !important;
  transform: translateX(6px);
}
.footer-link v-icon {
  transition: color 0.3s ease;
}
.footer-link:hover .v-icon {
  color: #ffffff !important;
}

.social-btn {
  transition: all 0.3s ease;
}
.social-btn:hover {
  background-color: #ffffff;
  color: #01532B !important;
  border-color: #ffffff !important;
  transform: translateY(-3px);
}

.footer-bottom-link {
  transition: color 0.3s ease;
}
.footer-bottom-link:hover {
  color: #ffffff !important;
}
</style>
