<template>
    <v-app class="">
      <div>
        <v-system-bar color="white" height="100">
          <v-spacer />
          <div class="mr-4">
            <v-img :src="require('~/assets/img/Logo.png')" max-width="230">
            </v-img>
          </div>
          <v-text-field
            v-model="search"
            clearable
            clear-icon="mdi-close"
            prepend-inner-icon="mdi-magnify"
            dense
            outlined
            label="ຄົ້ນຫາ"
            placeholder="ຄົ້ນຫາ"
          />
          <v-btn
            large
            class="ml-2s mb-6"
            icon
            v-for="item in socialIcon"
            :key="item.title"
            :to="item.path"
            :color="item.color"
          >
            <v-icon :color="item.color"> {{ item.icon }} </v-icon>
          </v-btn>
          <v-spacer />
        </v-system-bar>
  
        <v-app-bar color="white" class="mb-2" dense elevation="0">
          <v-row>
            <v-col cols="2"> </v-col>
            <v-col class="d-flex justify-space-around">
              <div class="align-center">
                <v-btn text to="/fashion"> ໜ້າຫຼັກ </v-btn>
                <v-btn text to="/fashion/all-product"> ສິນຄ້າທັງໝົດ </v-btn>
  
                <v-menu open-on-hover offset-y transition="scale-transition">
                  <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                      ໝວດໝູ່ສິນຄ້າ <v-icon> mdi-menu-down </v-icon>
                    </v-btn>
                  </template>
  
                  <v-list>
                    <v-list-item to="product-category">
                      <v-list-item-title>ຊຸດແບນ POEM</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="">
                      <v-list-item-title>ຊຸດ Dress</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="">
                      <v-list-item-title>ຊຸດ ລາຕີຍາວ</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="">
                      <v-list-item-title>ຊຸດ ເຊັດ</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="">
                      <v-list-item-title>ຊຸດ ສູດ</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="">
                      <v-list-item-title>ຊຸດ ງານປ້າຍ</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="">
                      <v-list-item-title>ເສື້ອ</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="">
                      <v-list-item-title>ສິນຄ້າອື່ນໆ</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-btn text to="about-us"> ກ່ຽວກັບພວກເຮົາ </v-btn>
                <v-btn text to="contact-us"> ຕິດຕໍ່ພວກເຮົາ </v-btn>
              </div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end"> </v-col>
          </v-row>
        </v-app-bar>
        <v-divider></v-divider>
      </div>
  
      <v-main>
        <Nuxt class="container pl-16 pr-16" />
      </v-main>
  
      <v-divider></v-divider>
  
      <v-footer padless class="white container pl-16 pr-16">
        <v-container class="">
          <v-row>
            <v-col cols="12" sm="4" md="4">
              <div class="">
                <v-img :src="require('~/assets/img/Logo.png')" max-width="300">
                </v-img>
                <h5 class="grey--text pa-4">
                  ຊຸດອອກງານ, ຊຸດລາຕີ, ຊຸດກະໂປ່ງ, ຊຸດງາມໆ, ຄຸນນະພາບດີ,
                  ລາຄາເປັນກັນເອງ, ງາມ, ລຽບງ່າຍ, ເປັນເອກະລັກ.
                </h5>
              </div>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <h3 class="">ແຜ່ນທີ່ຮ້ານເຊົ່າຊຸດ</h3>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15180.260562408257!2d102.63310405!3d17.9757061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312468787e60ba55%3A0xb2e98d79c0280739!2z4Liq4LiW4Liy4LiZ4LmA4Lit4LiB4Lit4Lix4LiE4Lij4Lij4Liy4LiK4LiX4Li54LiV4LmE4LiX4Lii!5e0!3m2!1sth!2sla!4v1710425235808!5m2!1sth!2sla"
                  width="400"
                  height="200"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <h3 class="">ຕິດຕໍ່ພວກເຮົາ</h3>
              <div class="text-start" style="margin-left: -16px">
                <v-list-item>
                  <v-list-item-content>
                    <span>
                      <v-icon>mdi-map-marker</v-icon> 013 ຖະໜົນ ສຸພານຸວົງ ບ້ານ
                      ສີຫອມ ເມືອງ ຈັນທະບູລີ ນະຄອນຫຼວງວຽງຈັນ ສປປ ລາວ</span
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <span>
                      <v-icon>mdi-phone</v-icon> 1698, (+856-21) 241275</span
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <a to="https://facebook.com" class="text-decoration-none"
                      ><v-icon>mdi-facebook</v-icon> Facebook Page</a
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <a to="https://api.whatsapp.com/send?phone=2078989930" class="text-decoration-none"
                      ><v-icon>mdi-whatsapp</v-icon> Whatsapp Store</a
                    >
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
    data() {
      return {
        search: '',
        title: 'App name & Logo',
        socialIcon: [
          {
            title: 'facebook',
            path: '',
            icon: 'mdi-facebook',
            color: 'blue',
          },
          {
            title: 'tiktok',
            path: '',
            icon: 'mdi-music-note-eighth',
            color: 'grey',
          },
          {
            title: 'instragram',
            path: '',
            icon: 'mdi-instagram',
            color: 'purple',
          },
        ],
      }
    },
  }
  </script>
  
  <style></style>
  