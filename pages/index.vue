<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section text-center white--text pa-6 pa-md-16">
      <v-container>
        <v-row align="center" justify="center" class="my-10">
          <v-col cols="12" md="8">
            <v-img :src="require('~/assets/image/Dcommerce-Logo_DC.png')" width="140" height="140" contain
              class="mx-auto mb-8 slide-up-animation rounded-xl" />
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-6 slide-up-animation">
              ຍົກລະດັບທຸລະກິດຂອງທ່ານດ້ວຍ DCOMMERCE POS
            </h1>
            <p class="text-h6 text-md-h5 font-weight-regular mb-10 subtitle-animation opacity-90">
              ລະບົບຈັດການການຂາຍໜ້າຮ້ານທີ່ທັນສະໄໝ, ຄົບວົງຈອນ, ໃຊ້ງານງ່າຍ <br class="hidden-sm-and-down" />
              ສໍາລັບຮ້ານອາຫານ, ມິນິມາກ ແລະ ຮ້ານຄ້າທົ່ວໄປ.
            </p>
            <div class="cta-buttons slide-up-animation">
              <v-btn x-large color="white"
                class="primary--text font-weight-bold mr-0 mr-md-4 mb-4 rounded-lg elevation-4 px-10 hover-lift"
                to="/admin/login">
                ເຂົ້າສູ່ລະບົບ
              </v-btn>
              <v-btn x-large outlined color="white" class="font-weight-bold mr-0 mr-md-4 mb-4 rounded-lg px-10 hover-lift"
                @click="$vuetify.goTo('#hardware')">
                ເບິ່ງອຸປະກອນ POS
              </v-btn>
              <v-btn x-large outlined color="white" class="font-weight-bold mb-4 rounded-lg px-10 hover-lift"
                href="tel:+8562098422420">
                ຕິດຕໍ່ພະນັກງານຂາຍ
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section py-16 bg-light" style="min-height: 500px;">
      <v-container>
        <div class="text-center mb-16">
          <h2 class="text-h3 font-weight-bold primary--text mb-4">ຄຸນສົມບັດທີ່ໂດດເດັ່ນ</h2>
          <v-divider class="mx-auto primary mb-4" style="width: 80px; border-width: 2px;"></v-divider>
          <p class="text-h6 grey--text text--darken-1">ທຸກຢ່າງທີ່ທ່ານຕ້ອງການເພື່ອຂະຫຍາຍທຸລະກິດ</p>
        </div>
        <v-row>
          <v-col v-for="(feature, index) in features" :key="index" cols="12" sm="6" md="4">
            <v-hover v-slot="{ hover }">
              <v-card class="pa-8 rounded-xl text-center transition-card fill-height d-flex flex-column"
                :elevation="hover ? 12 : 2">
                <v-avatar color="lightprimary" size="80" class="mx-auto mb-6 avatar-pulse">
                  <v-icon large color="primary">{{ feature.icon }}</v-icon>
                </v-avatar>
                <h3 class="text-h5 font-weight-bold mb-4">{{ feature.title }}</h3>
                <p class="text-body-1 grey--text text--darken-1">{{ feature.desc }}</p>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Products / Supported Businesses Section -->
    <section class="products-section py-16 white">
      <v-container>
        <div class="text-center mb-16">
          <h2 class="text-h3 font-weight-bold primary--text mb-4">ປະເພດທຸລະກິດທີ່ຮອງຮັບ</h2>
          <v-divider class="mx-auto primary mb-4" style="width: 80px; border-width: 2px;"></v-divider>
          <p class="text-h6 grey--text text--darken-1">ລະບົບຖືກອອກແບບມາເພື່ອຕອບໂຈດທຸລະກິດແຕ່ລະປະເພດ</p>
        </div>
        <v-row>
          <v-col cols="12" sm="6" md="3" v-for="(product, i) in products" :key="i">
            <v-card
              class="pa-6 rounded-xl text-center hover-lift fill-height d-flex flex-column align-center justify-center border-grey">
              <v-avatar color="lightprimary" class="mb-4" size="80">
                <v-icon large color="white">{{ product.icon }}</v-icon>
              </v-avatar>
              <h3 class="text-h6 font-weight-bold mb-0 grey--text text--darken-3">{{ product.title }}</h3>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Accounting Feature Highlight -->
    <section class="accounting-highlight py-16 bg-light">
      <v-container>
        <v-card class="rounded-xl overflow-hidden elevation-6 border-primary">
          <v-row no-gutters>
            <v-col cols="12" md="5" class="primary pa-10 d-flex flex-column justify-center align-center text-center">
              <v-icon size="90" color="white" class="mb-6 avatar-pulse">mdi-calculator-variant-outline</v-icon>
              <h2 class="text-h3 font-weight-black white--text mb-2">ຟຣີ!</h2>
              <h3 class="text-h4 font-weight-bold white--text">ລະບົບບັນຊີຄົບວົງຈອນ</h3>
            </v-col>
            <v-col cols="12" md="7" class="pa-8 pa-md-12 d-flex flex-column justify-center bg-white">
              <h3 class="text-h4 font-weight-bold primary--text mb-4">ລວມລະບົບບັນຊີ AP/AR ໂດຍບໍ່ມີຄ່າໃຊ້ຈ່າຍເພີ່ມ</h3>
              <p class="text-h6 grey--text text--darken-2 mb-6" style="line-height: 1.6;">
                ລະບົບຂອງພວກເຮົາມາພ້ອມກັບໂມດູນບັນຊີມາດຕະຖານ (Accounts Payable / Accounts Receivable)
                ເຊິ່ງຊ່ວຍໃຫ້ທ່ານສາມາດ:
              </p>
              <v-list class="transparent pa-0">
                <v-list-item class="px-0 mb-3 align-start">
                  <v-list-item-icon class="mr-4 mt-1"><v-icon color="success"
                      size="28">mdi-check-circle</v-icon></v-list-item-icon>
                  <v-list-item-content><v-list-item-title class="text-h6 font-weight-regular"
                      style="white-space: normal; line-height: 1.4;">ເບິ່ງລາຍງານຜົນປະກອບການທຸລະກິດໄດ້ຢ່າງຊັດເຈນ ແລະ
                      ຖືກຕ້ອງ</v-list-item-title></v-list-item-content>
                </v-list-item>
                <v-list-item class="px-0 mb-3 align-start">
                  <v-list-item-icon class="mr-4 mt-1"><v-icon color="success"
                      size="28">mdi-check-circle</v-icon></v-list-item-icon>
                  <v-list-item-content><v-list-item-title class="text-h6 font-weight-regular"
                      style="white-space: normal; line-height: 1.4;">ອອກໃບລາຍງານຖານະການເງິນ (Balance
                      Sheet)</v-list-item-title></v-list-item-content>
                </v-list-item>
                <v-list-item class="px-0 align-start">
                  <v-list-item-icon class="mr-4 mt-1"><v-icon color="success"
                      size="28">mdi-check-circle</v-icon></v-list-item-icon>
                  <v-list-item-content><v-list-item-title class="text-h6 font-weight-regular"
                      style="white-space: normal; line-height: 1.4;">ນໍາໃຊ້ເປັນເອກະສານອ້າງອີງໃນການຂໍສິນເຊື່ອກັບທະນາຄານໄດ້ງ່າຍຂຶ້ນ</v-list-item-title></v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </section>

    <!-- Wallet & Food Court Feature Highlight -->
    <section class="wallet-highlight pb-16 bg-light">
      <v-container>
        <v-card class="rounded-xl overflow-hidden elevation-4 border-grey">
          <v-row no-gutters>
            <v-col cols="12" md="7" class="pa-8 pa-md-12 d-flex flex-column justify-center bg-white order-2 order-md-1">
              <h3 class="text-h4 font-weight-bold primary--text mb-4">ລະບົບກະເປົ໋າເງິນ (Wallet) & Food Court</h3>
              <p class="text-h6 grey--text text--darken-2 mb-6" style="line-height: 1.6;">
                ຕອບໂຈດສຳລັບໂຮງຮຽນ ຫຼື ສູນອາຫານ (ເຊັ່ນ: Food Court ປາກຊັນ) ທີ່ໃຊ້ລະບົບຕື່ມເງິນເຂົ້າບັດ UID.
              </p>
              <v-list class="transparent pa-0">
                <v-list-item class="px-0 mb-3 align-start">
                  <v-list-item-icon class="mr-4 mt-1"><v-icon color="primary"
                      size="28">mdi-credit-card-scan</v-icon></v-list-item-icon>
                  <v-list-item-content><v-list-item-title class="text-h6 font-weight-regular"
                      style="white-space: normal; line-height: 1.4;">ນຳໃຊ້ບັດ UID (ເຊັ່ນ: ບັດນັກຮຽນ, ບັດລູກຄ້າ)
                      ເພື່ອເຕີມເງິນຢູ່ຈຸດເຄົາເຕີກາງ</v-list-item-title></v-list-item-content>
                </v-list-item>
                <v-list-item class="px-0 mb-3 align-start">
                  <v-list-item-icon class="mr-4 mt-1"><v-icon color="primary"
                      size="28">mdi-storefront</v-icon></v-list-item-icon>
                  <v-list-item-content><v-list-item-title class="text-h6 font-weight-regular"
                      style="white-space: normal; line-height: 1.4;">ລູກຄ້າສາມາດນຳບັດໄປແຕະຊື້ອາຫານ ຫຼື
                      ສິນຄ້າໄດ້ທຸກຮ້ານພາຍໃນສູນ</v-list-item-title></v-list-item-content>
                </v-list-item>
                <v-list-item class="px-0 align-start">
                  <v-list-item-icon class="mr-4 mt-1"><v-icon color="primary"
                      size="28">mdi-chart-line</v-icon></v-list-item-icon>
                  <v-list-item-content><v-list-item-title class="text-h6 font-weight-regular"
                      style="white-space: normal; line-height: 1.4;">ຄຸ້ມຄອງຍອດເງິນ ແລະ
                      ກວດສອບລາຍໄດ້ຂອງແຕ່ລະຮ້ານໄດ້ຢ່າງຖືກຕ້ອງຊັດເຈນ</v-list-item-title></v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="5"
              class="grey lighten-4 pa-10 d-flex flex-column justify-center align-center text-center order-1 order-md-2">
              <v-icon size="90" color="primary" class="mb-6">mdi-wallet-bifold</v-icon>
              <h3 class="text-h4 font-weight-bold primary--text mb-2">School & Food Court</h3>
              <h3 class="text-h5 grey--text text--darken-2">Wallet System</h3>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </section>

    <!-- Our Activities / Facebook Posts Section -->
    <section class="activities-section py-16 white">
      <v-container>
        <div class="text-center mb-16">
          <h2 class="text-h3 font-weight-bold primary--text mb-4">ພາບບັນຍາກາດ ແລະ ຄວາມເຄື່ອນໄຫວ</h2>
          <v-divider class="mx-auto primary mb-4" style="width: 80px; border-width: 2px;"></v-divider>
          <p class="text-h6 grey--text text--darken-2">
            ຕິດຕາມຜົນງານ ແລະ ລູກຄ້າທີ່ໄວ້ວາງໃຈໃຊ້ບໍລິການຂອງພວກເຮົາ
          </p>
        </div>
        <v-row justify="center">
          <v-col cols="12" md="6" class="d-flex justify-center mb-8 mb-md-0">
            <div class="fb-post-wrapper elevation-4 rounded-xl overflow-hidden bg-white pa-2" style="max-width: 100%;">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02Vc85jpXkfFjh2g8VQNeN5fQ4sT8WfJ7SxzZzy8D5igXnVK1Hf5Rt6ByiVD8ECimHl%26id%3D100093417550700&show_text=true&width=500"
                width="500" height="650" style="border:none;overflow:hidden; max-width: 100%;" scrolling="no"
                frameborder="0" allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center">
            <div class="fb-post-wrapper elevation-4 rounded-xl overflow-hidden bg-white pa-2" style="max-width: 100%;">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0kGYT7DYwJpr9nEZvbpanffMiVgpcgR9mvayUxNTQrGzuR84JH8chjtuNiEu3VqCvl%26id%3D100093417550700&show_text=true&width=500"
                width="500" height="650" style="border:none;overflow:hidden; max-width: 100%;" scrolling="no"
                frameborder="0" allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </v-col>
        </v-row>
        <div class="text-center mt-12">
          <v-btn x-large color="primary" class="font-weight-bold rounded-lg px-10 hover-lift" @click="$vuetify.goTo('#hardware')">
            ເບິ່ງລາຍການອຸປະກອນ POS <v-icon right>mdi-arrow-down</v-icon>
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Hardware Section -->
    <section id="hardware" class="hardware-section py-16 bg-light">
      <v-container>
        <div class="text-center mb-16">
          <h2 class="text-h3 font-weight-bold primary--text mb-4">ອຸປະກອນ POS (Hardware)</h2>
          <v-divider class="mx-auto primary mb-4" style="width: 80px; border-width: 2px;"></v-divider>
          <p class="text-h6 grey--text text--darken-2">
            ອຸປະກອນຄຸນນະພາບສູງ ພ້ອມຮັບປະກັນ 1 ປີເຕັມ ສຳລັບທຸກທຸລະກິດ
          </p>
        </div>
        <v-row justify="center">
          <v-col v-for="(item, i) in hardwareItems" :key="i" cols="12" sm="6" md="4" lg="3">
            <v-card class="rounded-xl overflow-hidden hover-lift fill-height d-flex flex-column border-grey">
              <div class="pa-4 text-center bg-white d-flex align-center justify-center" style="height: 220px;">
                <v-img :src="require(`~/assets/image/hardware/${item.image}`)" contain max-height="180"></v-img>
              </div>
              <v-divider></v-divider>
              <v-card-text
                class="pa-6 text-center flex-grow-1 d-flex flex-column justify-space-between bg-grey-lighten-4">
                <div>
                  <h3 class="text-h6 font-weight-bold mb-2 grey--text text--darken-4">{{ item.name }}</h3>
                  <p class="text-body-2 grey--text text--darken-1 mb-4">{{ item.desc }}</p>
                </div>
                <div class="text-h5 font-weight-bold primary--text">{{ item.price }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Pricing & Online vs Offline Section -->
    <section id="pricing" class="pricing-section py-16 white" style="min-height: 500px;">
      <v-container>
        <div class="text-center mb-16">
          <h2 class="text-h3 font-weight-bold primary--text mb-4">ລາຄາ ແລະ ຮູບແບບການນຳໃຊ້</h2>
          <v-divider class="mx-auto primary mb-4" style="width: 80px; border-width: 2px;"></v-divider>
          <p class="text-h6 grey--text text--darken-2">
            ທາງເລືອກ Online ທີ່ມີແອັບມືຖື ຫຼື Offline ສໍາລັບການຈ່າຍຄັ້ງດຽວ
          </p>
        </div>

        <v-row justify="center" align="stretch">
          <!-- Online Pricing Card -->
          <v-col cols="12" md="5" class="d-flex">
            <v-card
              class="pricing-card rounded-xl overflow-hidden elevation-8 border-primary flex-grow-1 d-flex flex-column">
              <div class="pricing-header primary white--text pa-8 text-center">
                <v-chip color="white" text-color="primary" class="font-weight-bold mb-6 px-4" small>ແນະນຳ
                  (Recommended)</v-chip>
                <h3 class="text-h4 font-weight-bold mb-2">Online Version</h3>
                <div class="price-display mt-6">
                  <div class="text-h3 font-weight-black mb-1">3,000,000 ₭</div>
                  <div class="text-subtitle-1 opacity-80">ຄ່າຕິດຕັ້ງພ້ອມຝຶກອົບຮົມ (ຈ່າຍຄັ້ງທຳອິດ)</div>
                  <div class="text-h5 mt-4 font-weight-bold">+ 2,500,000 ₭ / ປີ</div>
                </div>
              </div>
              <v-card-text class="pa-8 pt-10 bg-grey-lighten-4 flex-grow-1">
                <v-list class="transparent">
                  <v-list-item v-for="(benefit, i) in onlineBenefits" :key="i" class="px-0 mb-2">
                    <v-list-item-icon class="mr-4">
                      <v-icon color="success" size="28">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6 font-weight-regular"
                        style="white-space: normal; line-height: 1.4;">{{ benefit }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-actions class="pa-8 bg-grey-lighten-4 pt-0">
                <v-btn block x-large color="primary" class="rounded-lg font-weight-bold py-8 text-h6"
                  href="tel:+85620XXXXXXXX">
                  ເລືອກ Online
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Offline Pricing Card -->
          <v-col cols="12" md="5" class="d-flex">
            <v-card
              class="pricing-card rounded-xl overflow-hidden elevation-4 mt-8 mt-md-0 border-grey flex-grow-1 d-flex flex-column">
              <div class="pricing-header grey darken-3 white--text pa-8 text-center">
                <h3 class="text-h4 font-weight-bold mt-12 mb-2">Offline Version</h3>
                <div class="price-display mt-6">
                  <div class="text-h3 font-weight-black mb-1">5,000,000 ₭</div>
                  <div class="text-subtitle-1 opacity-80">ຈ່າຍຄັ້ງດຽວຈົບ (One-time payment)</div>
                  <div class="text-h5 mt-4 transparent--text">No yearly fee</div>
                </div>
              </div>
              <v-card-text class="pa-8 pt-10 bg-white flex-grow-1">
                <v-list class="transparent">
                  <v-list-item v-for="(benefit, i) in offlineBenefits" :key="i" class="px-0 mb-2">
                    <v-list-item-icon class="mr-4">
                      <v-icon color="success" size="28">mdi-check-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6 font-weight-regular"
                        style="white-space: normal; line-height: 1.4;">{{ benefit }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="px-0">
                    <v-list-item-icon class="mr-4">
                      <v-icon color="error" size="28">mdi-close-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6 error--text text--darken-1"
                        style="white-space: normal; line-height: 1.4;">
                        ບໍ່ມີແອັບມືຖືສຳລັບເບິ່ງລາຍງານອອນລາຍ
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-actions class="pa-8 bg-white pt-0">
                <v-btn block x-large outlined color="grey darken-3" class="rounded-lg font-weight-bold py-8 text-h6"
                  href="tel:+85620XXXXXXXX">
                  ເລືອກ Offline
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-bottom py-16 primary white--text text-center">
      <v-container>
        <h2 class="text-h3 font-weight-bold mb-6">ພ້ອມທີ່ຈະເລີ່ມຕົ້ນແລ້ບໍ?</h2>
        <p class="text-h6 mb-10 opacity-90">ໃຫ້ພວກເຮົາຊ່ວຍທ່ານວາງແຜນ ແລະ ຕິດຕັ້ງລະບົບ POS
          ທີ່ດີທີ່ສຸດໃຫ້ກັບທຸລະກິດຂອງທ່ານ</p>
        <v-btn x-large color="white" class="primary--text font-weight-bold px-12 rounded-xl hover-lift"
          href="tel:+85620XXXXXXXX">
          ຕິດຕໍ່ສອບຖາມຟຣີ
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      features: [
        { icon: 'mdi-storefront', title: 'ຮອງຮັບຫຼາຍສາຂາ', desc: 'ຈັດການຮ້ານຄ້າ, ມິນິມາກ, ຫຼື ຮ້ານອາຫານຫຼາຍສາຂາໃນລະບົບດຽວ ຢ່າງງ່າຍດາຍ.' },
        { icon: 'mdi-package-variant-closed', title: 'ຄຸ້ມຄອງສະຕັອກສິນຄ້າ', desc: 'ກວດສອບສະຕັອກສິນຄ້າເຂົ້າ-ອອກໄດ້ທຸກເວລາ ປ້ອງກັນສິນຄ້າຂາດສະຕັອກ.' },
        { icon: 'mdi-chart-bar', title: 'ລາຍງານຍອດຂາຍ', desc: 'ສະຫຼຸບຍອດຂາຍ, ກໍາໄລ, ລາຍຈ່າຍ ໄດ້ຢ່າງຊັດເຈນ ພ້ອມກຣາບລາຍງານທີ່ເຂົ້າໃຈງ່າຍ.' },
        { icon: 'mdi-cash-register', title: 'ລະບົບຂາຍໜ້າຮ້ານທີ່ໄວ', desc: 'ຮອງຮັບການສະແກນບາໂຄດ, ພິມບິນ, ແລະ ລີ້ນຊັກເກັບເງິນ ເພື່ອຄວາມວ່ອງໄວ.' },
        { icon: 'mdi-cellphone-link', title: 'ແອັບພລິເຄຊັນລາຍງານ', desc: 'ເບິ່ງລາຍງານຍອດຂາຍຜ່ານມືຖືໄດ້ທັນທີ (ສຳລັບເວີຊັນ Online).' },
        { icon: 'mdi-shield-check', title: 'ຄວາມປອດໄພຂອງຂໍ້ມູນ', desc: 'ຂໍ້ມູນຖືກເກັບຮັກສາຢ່າງປອດໄພ ພ້ອມລະບົບສໍາຮອງຂໍ້ມູນ.' },
      ],
      products: [
        { icon: 'mdi-store-24-hour', title: 'Minimart POS' },
        { icon: 'mdi-silverware-fork-knife', title: 'Restaurant CAFE POS' },
        { icon: 'mdi-car-wash', title: 'Car care POS' },
        { icon: 'mdi-briefcase-account', title: 'Job agency management' },
      ],
      onlineBenefits: [
        'ລວມຄ່າຕິດຕັ້ງ ແລະ ຝຶກອົບຮົມການນຳໃຊ້',
        'ມີແອັບພລິເຄຊັນມືຖືສຳລັບເຈົ້າຂອງຮ້ານ',
        'ເບິ່ງລາຍງານຍອດຂາຍໄດ້ທຸກທີ່ທຸກເວລາ',
        'ສຳຮອງຂໍ້ມູນອັດຕະໂນມັດເທິງຄລາວ',
        'ອັບເດດຟີເຈີໃໝ່ໆຟຣີຕະອດການນຳໃຊ້',
      ],
      offlineBenefits: [
        'ລວມຄ່າຕິດຕັ້ງ ແລະ ຝຶກອົບຮົມການນຳໃຊ້',
        'ຈ່າຍຄັ້ງດຽວ ບໍ່ມີຄ່າລາຍປີ',
        'ໃຊ້ງານໄດ້ເຖິງແມ່ນວ່າອິນເຕີເນັດຈະຂັດຂ້ອງ',
        'ຂໍ້ມູນເກັບຢູ່ພາຍໃນເຄື່ອງຄອມພິວເຕີຂອງທ່ານ',
      ],
      hardwareItems: [
        { name: '11.6" Android Tablet POS', desc: 'ເຄື່ອງພິມບິນ ແລະ ສະແກນບາໂຄດໃນຕົວ ປະຢັດພື້ນທີ່ ເໝາະສຳລັບຮ້ານກາເຟ', price: '7,900,000 ₭', image: 'SGT-116_Android_tablet 7.9million.png' },
        { name: '15.6" Single Screen POS', desc: 'ໜ້າຈໍດ່ຽວ 15.6 ນິ້ວ ພ້ອມເຄື່ອງພິມບິນໃນຕົວ', price: '8,900,000 ₭', image: 'single screen POS 8.9Million.png' },
        { name: '15.6" Dual Screen POS', desc: 'ໜ້າຈໍຄູ່ 15.6 ນິ້ວ (ຈໍລູກຄ້າສະແດງໂຄສະນາໄດ້)', price: '8,900,000 ₭', image: 'pos dual scree 8.9milion.png' },
        { name: '15.6" Dual Screen Premium POS', desc: 'Intel Core i5, 8GB RAM, 128GB SSD ພ້ອມເຄື່ອງພິມບິນ', price: '11,800,000 ₭', image: 'pos dual screen_premium 11.8million.png' },
        { name: 'ລິ້ນຊັກເກັບເງິນ (Cash Drawer)', desc: 'ລີ້ນຊັກເກັບເງິນໂລຫະ ແຂງແຮງທົນທານ', price: '750,000 ₭', image: 'cash drawer.png' },
        { name: 'ໝໍ້ເກັບໄຟ UPS', desc: 'ເຄື່ອງສຳຮອງໄຟ ປ້ອງກັນໄຟຕົກ-ໄຟກະຊາກ', price: '950,000 ₭', image: 'ups.png' },
        { name: 'Keyboard and Mouse wireless', desc: 'ແປ້ນພິມ ແລະ ເມົາສ໌ ໄຮ້ສາຍ', price: '450,000 ₭', image: 'mou and keyboard wifi.png' },
        { name: 'ເຄື່ອງພິມບາໂຄດ XP-365B', desc: 'ເຄື່ອງພິມບາໂຄດ ແລະ ປ້າຍລາຄາ', price: '1,200,000 ₭', image: 'Xprinter 1.2Million.png' },
        { name: 'ເຄື່ອງສະແກນບາໂຄດ (Barcode Scanner)', desc: 'ເຄື່ອງສະແກນບາໂຄດ 1D/2D ພ້ອມຂາຕັ້ງ', price: '750,000 ₭', image: 'barcode scanner.png' },
      ],
    }
  },
}
</script>

<style scoped>
.landing-page {
  width: 100%;
  overflow-y: visible !important;
  font-family: 'noto sans lao', 'Noto Sans Lao', sans-serif !important;
}

.opacity-90 {
  opacity: 0.9;
}

.opacity-80 {
  opacity: 0.8;
}

.bg-light {
  background-color: #f8fcf9;
}

.hero-section {
  background: linear-gradient(135deg, #01532B 0%, #1a8f57 100%);
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-section h1,
.hero-section p {
  font-family: 'noto sans lao', 'Noto Sans Lao', sans-serif !important;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -5%;
  width: 40%;
  height: 80%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
}

.slide-up-animation {
  animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.subtitle-animation {
  animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
}

@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2) !important;
}

.transition-card {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.transition-card:hover {
  transform: translateY(-12px);
}

.avatar-pulse {
  animation: pulse 4s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(1, 83, 43, 0.4);
  }

  70% {
    box-shadow: 0 0 0 20px rgba(1, 83, 43, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(1, 83, 43, 0);
  }
}

.pricing-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.border-primary {
  border: 3px solid #01532B !important;
  transform: scale(1.05);
  z-index: 2;
}

.border-grey {
  border: 1px solid #e0e0e0 !important;
}

.bg-grey-lighten-4 {
  background-color: #f9f9f9;
}

.cta-bottom {
  background: linear-gradient(135deg, #01532B 0%, #013A1E 100%);
}

@media (max-width: 960px) {
  .border-primary {
    transform: scale(1);
    margin-bottom: 2rem;
  }

  .hero-section {
    min-height: auto;
    padding: 80px 20px;
  }
}
</style>