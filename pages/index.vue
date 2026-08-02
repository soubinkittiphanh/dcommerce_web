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
                to="/e-menu?table=01">
                🍽️ ເບິ່ງ E-Menu (Customer View)
              </v-btn>
              <v-btn x-large color="white" outlined
                class="font-weight-bold mr-0 mr-md-4 mb-4 rounded-lg elevation-2 px-10 hover-lift"
                to="/admin/login">
                ເຂົ້າສູ່ລະບົບ POS
              </v-btn>
              <v-btn x-large outlined color="white" class="font-weight-bold mr-0 mr-md-4 mb-4 rounded-lg px-10 hover-lift"
                @click="$vuetify.goTo('#hardware')">
                ເບິ່ງອຸປະກອນ POS
              </v-btn>
              <v-btn x-large outlined color="white" class="font-weight-bold mr-0 mr-md-4 mb-4 rounded-lg px-10 hover-lift"
                @click="$vuetify.goTo('#pricing')">
                ເບິ່ງລາຄາຊອບແວຣ໌
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Pricing & Online vs Offline Section -->
    <section id="pricing" class="pricing-section py-16 bg-light-minimal" style="min-height: 500px;">
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
              class="pricing-card-minimal recommended-card rounded-xl overflow-hidden border-primary-minimal flex-grow-1 d-flex flex-column">
              <div class="pricing-header-light pa-8 text-center position-relative">
                <!-- Recommended Tag -->
                <div class="recommended-badge-pastel">
                  <v-icon x-small color="success" class="mr-1">mdi-star</v-icon>
                  ແນະນຳ (Recommended)
                </div>
                
                <h3 class="text-h4 font-weight-bold mb-2 primary--text">Online Version</h3>
                <p class="text-body-2 grey--text text--darken-2 mb-6">ເໝາະສຳລັບຮ້ານທີ່ຕ້ອງການເບິ່ງລາຍງານ Real-time ແລະ ໃຊ້ງານແອັບມືຖື</p>
                
                <!-- Beautiful Billing Cycle Toggle -->
                <div class="billing-toggle-container-light my-4 mx-auto d-inline-flex align-center rounded-pill pa-1">
                  <button 
                    type="button"
                    class="billing-toggle-btn-light rounded-pill px-6 py-2 text-body-2 font-weight-bold transition-all"
                    :class="{ 'active': !isYearly, 'inactive': isYearly }"
                    @click="isYearly = false"
                  >
                    ລາຍເດືອນ
                  </button>
                  <button 
                    type="button"
                    class="billing-toggle-btn-light rounded-pill px-6 py-2 text-body-2 font-weight-bold transition-all"
                    :class="{ 'active': isYearly, 'inactive': !isYearly }"
                    @click="isYearly = true"
                  >
                    ລາຍປີ
                  </button>
                </div>

                <!-- Big Modern Price Showcase -->
                <div class="price-showcase mt-6">
                  <v-expand-transition>
                    <div v-if="isYearly" key="yearly" class="d-flex flex-column align-center">
                      <!-- Giant Price -->
                      <div class="d-flex align-baseline justify-center">
                        <span class="text-h2 font-weight-black grey--text text--darken-4">2,500,000</span>
                        <span class="text-h5 font-weight-bold primary--text ml-1">₭</span>
                        <span class="text-h5 font-weight-medium grey--text text--darken-2 ml-2">/ ປີ</span>
                      </div>
                      
                      <!-- Prominent Savings Ribbon Badge -->
                      <div class="savings-pill-pastel mt-3 animate-bounce">
                        <v-icon small color="warning" class="mr-1">mdi-sale-outline</v-icon>
                        ປະຢັດທັນທີ 500,000 ₭ / ປີ!
                      </div>
                      
                      <div class="text-caption grey--text text--darken-1 mt-2">(ສະເລ່ຍພຽງ 208,333 ₭ / ເດືອນ — ປະຢັດເຖິງ 17%)</div>
                    </div>
                    
                    <div v-else key="monthly" class="d-flex flex-column align-center">
                      <!-- Giant Price -->
                      <div class="d-flex align-baseline justify-center">
                        <span class="text-h2 font-weight-black grey--text text--darken-4">250,000</span>
                        <span class="text-h5 font-weight-bold primary--text ml-1">₭</span>
                        <span class="text-h5 font-weight-medium grey--text text--darken-2 ml-2">/ ເດືອນ</span>
                      </div>
                      
                      <div class="text-caption grey--text text--darken-1 mt-3">(ລວມ 3,000,000 ₭ / ປີ)</div>
                    </div>
                  </v-expand-transition>
                </div>

                <!-- Setup Fee Detail (Clearly Separated Sub-bar) -->
                <div class="setup-fee-badge-minimal mt-6 py-2 px-4 rounded-lg d-inline-flex align-center justify-center">
                  <v-icon small color="primary" class="mr-2">mdi-cog-outline</v-icon>
                  <span>+ ຄ່າຕິດຕັ້ງ & ຝຶກອົບຮົມ <b>2,500,000 ₭</b> (ຈ່າຍຄັ້ງທຳອິດ)</span>
                </div>
              </div>

              <v-card-text class="pa-8 pt-10 bg-white flex-grow-1">
                <v-list class="transparent pa-0">
                  <v-list-item v-for="(benefit, i) in onlineBenefits" :key="i" class="px-0 mb-4 align-start benefit-item">
                    <div class="benefit-icon-wrapper-light success-bg mr-4 mt-1">
                      <v-icon color="success" size="18">mdi-check</v-icon>
                    </div>
                    <v-list-item-content class="py-0">
                      <v-list-item-title class="text-h6 font-weight-medium grey--text text--darken-3"
                        style="white-space: normal; line-height: 1.4;">{{ benefit }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>

              <v-card-actions class="pa-8 bg-white pt-0">
                <v-btn block x-large color="primary" class="rounded-xl font-weight-bold py-8 text-h6 elevation-2 hover-grow btn-brand-green"
                  href="tel:+8562098422420">
                  <v-icon left size="24">mdi-phone-in-talk</v-icon>
                  ເລືອກ Online Version
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Offline Pricing Card -->
          <v-col cols="12" md="5" class="d-flex">
            <v-card
              class="pricing-card-minimal rounded-xl overflow-hidden mt-8 mt-md-0 flex-grow-1 d-flex flex-column">
              <div class="pricing-header-light pa-8 text-center position-relative">
                <h3 class="text-h4 font-weight-bold mb-2 grey--text text--darken-4">Offline Version</h3>
                <p class="text-body-2 grey--text text--darken-2 mb-6">ເໝາະສຳລັບຮ້ານທີ່ບໍ່ມີອິນເຕີເນັດ ແລະ ຕ້ອງການຈ່າຍຄັ້ງດຽວຈົບ</p>
                
                <!-- Spacer to align visually with the left toggle -->
                <div class="my-4 py-4 hidden-sm-and-down" style="visibility: hidden;"></div>

                <!-- Big Modern Price Showcase -->
                <div class="price-showcase mt-6 d-flex flex-column align-center">
                  <!-- Giant Price -->
                  <div class="d-flex align-baseline justify-center">
                    <span class="text-h2 font-weight-black grey--text text--darken-4">5,000,000</span>
                    <span class="text-h5 font-weight-bold primary--text ml-1">₭</span>
                  </div>
                  
                  <!-- Prominent indicator of no yearly fee -->
                  <div class="no-yearly-pill-pastel mt-3">
                    <v-icon small color="success" class="mr-1">mdi-shield-check</v-icon>
                    ຟຣີຕະຫຼອດຊີວິດ — ບໍ່ມີລາຍປີ!
                  </div>
                  
                  <!-- Subtitle -->
                  <div class="text-caption grey--text text--darken-2 mt-2">ຈ່າຍຄັ້ງດຽວເປັນເຈົ້າຂອງລະບົບທັນທີ</div>
                </div>

                <!-- Setup Fee Detail (Clearly Separated Sub-bar) -->
                <div class="setup-fee-badge-minimal mt-6 py-2 px-4 rounded-lg d-inline-flex align-center justify-center">
                  <v-icon small color="success" class="mr-2">mdi-check-circle-outline</v-icon>
                  <span>ລວມຄ່າຕິດຕັ້ງ & ຝຶກອົບຮົມແລ້ວ</span>
                </div>
              </div>

              <v-card-text class="pa-8 pt-10 bg-white flex-grow-1">
                <v-list class="transparent pa-0">
                  <v-list-item v-for="(benefit, i) in offlineBenefits" :key="i" class="px-0 mb-4 align-start benefit-item">
                    <div class="benefit-icon-wrapper-light success-bg mr-4 mt-1">
                      <v-icon color="success" size="20">mdi-check</v-icon>
                    </div>
                    <v-list-item-content class="py-0">
                      <v-list-item-title class="text-h6 font-weight-medium grey--text text--darken-3"
                        style="white-space: normal; line-height: 1.4;">{{ benefit }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  
                  <v-list-item class="px-0 align-start benefit-item">
                    <div class="benefit-icon-wrapper-light error-bg mr-4 mt-1">
                      <v-icon color="error" size="20">mdi-close</v-icon>
                    </div>
                    <v-list-item-content class="py-0">
                      <v-list-item-title class="text-h6 font-weight-medium error--text text--darken-1"
                        style="white-space: normal; line-height: 1.4;">
                        ບໍ່ມີແອັບມືຖືສຳລັບເບິ່ງລາຍງານອອນລາຍ
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>

              <v-card-actions class="pa-8 bg-white pt-0">
                <v-btn block x-large outlined color="grey darken-3" class="rounded-xl font-weight-bold py-8 text-h6 hover-grow btn-outline-minimal"
                  href="tel:+8562098422420">
                  <v-icon left size="24">mdi-phone-in-talk</v-icon>
                  ເລືອກ Offline Version
                </v-btn>
              </v-card-actions>
            </v-card>
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
          <v-col v-for="(product, i) in products" :key="i" cols="12" sm="6" md="3">
            <v-card
              class="product-card rounded-xl overflow-hidden hover-lift fill-height d-flex flex-column align-center justify-center border-grey">
              <!-- Background Image Container -->
              <div 
                class="product-card-bg"
                :style="{ backgroundImage: `url(${require('~/assets/image/backgrounds/' + product.bg)})` }"
              ></div>
              <!-- Dark Overlay -->
              <div class="product-card-overlay"></div>
              
              <!-- Content Wrapper -->
              <div class="product-card-content text-center pa-6 d-flex flex-column align-center justify-center fill-height">
                <v-avatar color="rgba(255, 255, 255, 0.2)" class="mb-4 glass-avatar" size="80">
                  <v-icon large color="white">{{ product.icon }}</v-icon>
                </v-avatar>
                <h3 class="text-h6 font-weight-bold mb-0 white--text product-title">{{ product.title }}</h3>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- App Screenshots Section -->
    <section id="app-screenshots" class="app-screenshots-section py-16 white" style="min-height: 500px;">
      <v-container>
        <div class="text-center mb-16">
          <h2 class="text-h3 font-weight-bold primary--text mb-4">ໜ້າຈໍແອັບພລິເຄຊັນ (App Screenshots)</h2>
          <v-divider class="mx-auto primary mb-4" style="width: 80px; border-width: 2px;"></v-divider>
          <p class="text-h6 grey--text text--darken-1">ພົບກັບປະສົບການການໃຊ້ງານທີ່ທັນສະໄໝ ແລະ ງ່າຍດາຍ</p>
        </div>
        <v-row justify="center">
          <v-col cols="12" md="6" class="text-center">
            <h3 class="text-h5 font-weight-bold mb-6 primary--text">Master Dashboard</h3>
            <v-img :src="require('~/assets/image/app_screens/master_dashboard.png')" class="rounded-xl elevation-6 mx-auto hover-lift" max-width="450" contain></v-img>
          </v-col>
          <v-col cols="12" md="6" class="text-center mt-10 mt-md-0">
            <h3 class="text-h5 font-weight-bold mb-6 primary--text">POS Screen</h3>
            <v-img :src="require('~/assets/image/app_screens/pos_screen.png')" class="rounded-xl elevation-6 mx-auto hover-lift" max-width="450" contain></v-img>
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

    <!-- Call to Action Section -->
    <section class="cta-bottom py-16 primary white--text text-center">
      <v-container>
        <h2 class="text-h3 font-weight-bold mb-6">ພ້ອມທີ່ຈະເລີ່ມຕົ້ນແລ້ບໍ?</h2>
        <p class="text-h6 mb-10 opacity-90">ໃຫ້ພວກເຮົາຊ່ວຍທ່ານວາງແຜນ ແລະ ຕິດຕັ້ງລະບົບ POS
          ທີ່ດີທີ່ສຸດໃຫ້ກັບທຸລະກິດຂອງທ່ານ</p>
        <v-btn x-large color="white" class="primary--text font-weight-bold px-12 rounded-xl hover-lift"
          href="tel:+8562098422420">
          ຕິດຕໍ່ສອບຖາມຟຣີ
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  mounted() {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href
      const userAgent = navigator.userAgent || ''
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      
      // Auto-redirect mobile devices or QR scans to E-Menu
      if (fullUrl.includes('table=') || fullUrl.includes('e-menu') || isMobile) {
        let table = localStorage.getItem('dc_current_table') || '01'
        const match = fullUrl.match(/table=([^&/#]+)/)
        if (match && match[1]) {
          table = match[1]
        }
        this.$router.replace({ path: '/e-menu', query: { table } }).catch(() => {})
      }
    }
  },
  middleware({ redirect }) {
    if (process.client && window.posApi) {
      return redirect('/admin/login')
    }
  },
  data() {
    return {
      isYearly: true,
      features: [
        { icon: 'mdi-storefront', title: 'ຮອງຮັບຫຼາຍສາຂາ', desc: 'ຈັດການຮ້ານຄ້າ, ມິນິມາກ, ຫຼື ຮ້ານອາຫານຫຼາຍສາຂາໃນລະບົບດຽວ ຢ່າງງ່າຍດາຍ.' },
        { icon: 'mdi-package-variant-closed', title: 'ຄຸ້ມຄອງສະຕັອກສິນຄ້າ', desc: 'ກວດສອບສະຕັອກສິນຄ້າເຂົ້າ-ອອກໄດ້ທຸກເວລາ ປ້ອງກັນສິນຄ້າຂາດສະຕັອກ.' },
        { icon: 'mdi-chart-bar', title: 'ລາຍງານຍອດຂາຍ', desc: 'ສະຫຼຸບຍອດຂາຍ, ກໍາໄລ, ລາຍຈ່າຍ ໄດ້ຢ່າງຊັດເຈນ ພ້ອມກຣາບລາຍງານທີ່ເຂົ້າໃຈງ່າຍ.' },
        { icon: 'mdi-cash-register', title: 'ລະບົບຂາຍໜ້າຮ້ານທີ່ໄວ', desc: 'ຮອງຮັບການສະແກນບາໂຄດ, ພິມບິນ, ແລະ ລີ້ນຊັກເກັບເງິນ ເພື່ອຄວາມວ່ອງໄວ.' },
        { icon: 'mdi-cellphone-link', title: 'ແອັບພລິເຄຊັນລາຍງານ', desc: 'ເບິ່ງລາຍງານຍອດຂາຍຜ່ານມືຖືໄດ້ທັນທີ (ສຳລັບເວີຊັນ Online).' },
        { icon: 'mdi-shield-check', title: 'ຄວາມປອດໄພຂອງຂໍ້ມູນ', desc: 'ຂໍ້ມູນຖືກເກັບຮັກສາຢ່າງປອດໄພ ພ້ອມລະບົບສໍາຮອງຂໍ້ມູນ.' },
      ],
      products: [
        { icon: 'mdi-store-24-hour', title: 'ລະບົບຮ້ານມິນິມາດ POS', bg: 'minimart_bg.png' },
        { icon: 'mdi-silverware-fork-knife', title: 'ລະບົບຮ້ານກາເຟ, ຮ້ານອາຫານ CAFE POS', bg: 'cafe_bg.png' },
        { icon: 'mdi-pill', title: 'ຮ້ານຂາຍຢາ POS', bg: 'pharmacy_bg.png' },
        { icon: 'mdi-car-wash', title: 'ລະບົບຮ້ານລ້າງລົດ POS', bg: 'carwash_bg.png' },
        { icon: 'mdi-briefcase-account', title: 'ລະບົບຈັດຫາແຮງງານ', bg: 'labor_bg.png' },
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
  mounted() {
    if (window.posApi) {
      this.$router.replace('/admin/login')
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

.landing-page * {
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

.product-card {
  position: relative;
  min-height: 240px;
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06) !important;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.product-card-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.product-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(1, 83, 43, 0.15) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  z-index: 1;
  transition: background 0.4s ease;
}

.product-card-content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.product-title {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  font-family: 'noto sans lao', 'Noto Sans Lao', sans-serif !important;
  line-height: 1.4;
}

/* Card hover scaling and zoom */
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(1, 83, 43, 0.2) !important;
  border-color: rgba(1, 83, 43, 0.3) !important;
}

.product-card:hover .product-card-bg {
  transform: scale(1.15);
}

.product-card:hover .product-card-overlay {
  background: linear-gradient(
    to bottom,
    rgba(1, 83, 43, 0.3) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

.glass-avatar {
  background-color: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  transition: all 0.3s ease;
}

.product-card:hover .glass-avatar {
  background-color: rgba(1, 83, 43, 0.85) !important;
  border-color: rgba(255, 255, 255, 0.4) !important;
  transform: translateY(-2px) scale(1.05);
}

/* Pricing Switcher classes */
.bg-dark-green {
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.billing-toggle-container {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.billing-toggle-btn {
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.billing-toggle-btn.active {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.transition-all {
  transition: all 0.3s ease;
}

.animate-bounce {
  animation: miniBounce 2s infinite;
}

@keyframes miniBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

/* Premium Pricing Upgrades */
.pricing-card {
  border: 1px solid rgba(0, 0, 0, 0.06) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
}

.border-primary {
  border: 3px solid #01532B !important;
  box-shadow: 0 20px 40px rgba(1, 83, 43, 0.12) !important;
  transform: scale(1.03);
  z-index: 2;
}

.border-primary:hover {
  transform: scale(1.05) translateY(-8px);
  box-shadow: 0 30px 60px rgba(1, 83, 43, 0.2) !important;
}

.pricing-header {
  padding: 40px 32px !important;
}

.pricing-header.primary {
  background: linear-gradient(135deg, #01532B 0%, #0c7a42 100%) !important;
}

.grey-dark-gradient {
  background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%) !important;
}

.recommended-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 4px 16px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.pricing-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
}

.pricing-grid-item {
  flex: 1;
  text-align: center;
}

.text-yellow-glow {
  color: #ffeb3b !important;
  text-shadow: 0 0 10px rgba(255, 235, 59, 0.3);
}

.text-green-glow {
  color: #00e676 !important;
  text-shadow: 0 0 10px rgba(0, 230, 118, 0.3);
}

.opacity-30 {
  opacity: 0.3;
}

.animate-pulse-fast {
  animation: pulseGlow 1.8s infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  }
}

.benefit-item {
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateX(6px);
}

.benefit-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  flex-shrink: 0;
}

.success-bg {
  background-color: rgba(76, 175, 80, 0.12);
}

.error-bg {
  background-color: rgba(244, 67, 54, 0.12);
}

.hover-grow {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.hover-grow:hover {
  transform: translateY(-2px) scale(1.01);
}

.btn-gradient-green {
  background: linear-gradient(135deg, #01532B 0%, #158f51 100%) !important;
  box-shadow: 0 6px 20px rgba(1, 83, 43, 0.2) !important;
}

.btn-outline-slate {
  border: 2px solid #2c3e50 !important;
  transition: all 0.3s ease;
}

.btn-outline-slate:hover {
  background-color: #2c3e50 !important;
  color: white !important;
  box-shadow: 0 6px 20px rgba(44, 62, 80, 0.25) !important;
}

@media (max-width: 960px) {
  .border-primary {
    transform: scale(1) !important;
    margin-bottom: 2rem;
  }
  .border-primary:hover {
    transform: translateY(-4px) !important;
  }
}

/* Light-Colored Minimal Pricing Upgrades */
.bg-light-minimal {
  background-color: #f8fafc !important;
}

.pricing-card-minimal {
  background-color: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03), 0 8px 10px -6px rgba(0, 0, 0, 0.03) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.pricing-card-minimal:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 10px 10px -5px rgba(0, 0, 0, 0.03) !important;
}

.border-primary-minimal {
  border: 2px solid #01532B !important;
  box-shadow: 0 20px 25px -5px rgba(1, 83, 43, 0.06), 0 10px 10px -5px rgba(1, 83, 43, 0.03) !important;
  transform: scale(1.03);
  z-index: 2;
}

.border-primary-minimal:hover {
  transform: scale(1.05) translateY(-6px);
  box-shadow: 0 25px 30px -5px rgba(1, 83, 43, 0.1), 0 15px 15px -5px rgba(1, 83, 43, 0.06) !important;
}

.pricing-header-light {
  background-color: #ffffff !important;
  padding: 40px 32px !important;
  border-bottom: 1px solid #f1f5f9 !important;
}

.recommended-badge-pastel {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #dcfce7 !important;
  border: 1px solid #bbf7d0 !important;
  padding: 4px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #15803d !important;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(21, 128, 61, 0.04);
}

.savings-pill-pastel {
  background-color: #ffedd5 !important;
  color: #ea580c !important;
  border: 1px solid #fed7aa !important;
  font-weight: 700 !important;
  font-size: 0.85rem !important;
  padding: 6px 18px !important;
  border-radius: 50px !important;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(234, 88, 12, 0.05);
}

.no-yearly-pill-pastel {
  background-color: #dcfce7 !important;
  color: #15803d !important;
  border: 1px solid #bbf7d0 !important;
  font-weight: 700 !important;
  font-size: 0.85rem !important;
  padding: 6px 18px !important;
  border-radius: 50px !important;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(21, 128, 61, 0.05);
}

.setup-fee-badge-minimal {
  background-color: #f8fafc !important;
  border: 1px solid #e2e8f0 !important;
  color: #475569 !important;
  font-size: 0.85rem !important;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.01) !important;
}

.billing-toggle-container-light {
  background-color: #f1f5f9 !important;
  border: 1px solid #e2e8f0 !important;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02) !important;
  padding: 4px !important;
}

.billing-toggle-btn-light {
  color: #64748b !important;
  font-weight: 700 !important;
  background: none !important;
  border: none !important;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;
}

.billing-toggle-btn-light.active {
  background-color: #ffffff !important;
  color: #01532B !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02) !important;
}

.billing-toggle-btn-light.inactive {
  color: #64748b !important;
}

.billing-toggle-btn-light.inactive:hover {
  color: #01532B !important;
}

.benefit-icon-wrapper-light {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
}

.benefit-icon-wrapper-light.success-bg {
  background-color: #dcfce7 !important;
}

.benefit-icon-wrapper-light.success-bg .v-icon {
  color: #16a34a !important;
}

.benefit-icon-wrapper-light.error-bg {
  background-color: #fee2e2 !important;
}

.benefit-icon-wrapper-light.error-bg .v-icon {
  color: #dc2626 !important;
}

.btn-brand-green {
  background: #01532B !important;
  color: #ffffff !important;
  box-shadow: 0 4px 14px rgba(1, 83, 43, 0.15) !important;
  transition: all 0.2s ease;
}

.btn-brand-green:hover {
  background: #013e20 !important;
  box-shadow: 0 6px 20px rgba(1, 83, 43, 0.25) !important;
}

.btn-outline-minimal {
  border: 1px solid #cbd5e1 !important;
  color: #334155 !important;
  background: transparent !important;
  transition: all 0.2s ease;
}

.btn-outline-minimal:hover {
  background-color: #f8fafc !important;
  border-color: #94a3b8 !important;
}
</style>