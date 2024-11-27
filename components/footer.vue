<template>
  <div>
    <v-footer dark padless>
      <v-card flat tile width="100%" class="primary white--text text-center">
        <v-card-text class="pt-0 text-left text-md-center">
          <v-expansion-panels accordion v-model="panel" multiple>
            <v-expansion-panel v-for="(item, i) in items" :key="i" class="transparent col-md-3 col-12 elevation-0">
              <h2 class="d-none d-md-block py-2">{{ item.name }}</h2>
              <v-expansion-panel-header class="d-md-none">{{
            item.name
          }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list class="transparent" v-for="(tag, index) in item.tags" :key="index">
                  <a v-if="!tag.nourl" target="_blank" v-bind:href="tag.url" class="white--text text-decoration-none"
                    style="font-size: 15px">{{ tag.urlname }}
                  </a>
                  <span v-else>{{ tag.urlname }}</span>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
        <v-card-text>
          <h2 class="pb-2 white--text">ຕິດຕໍ່ພວກເຮົາໄດ້ທີ່</h2>
          <a target="_blank" v-bind:href="social.url" v-for="(social, index) in socials" :key="index">
            <v-btn class="mx-4 mt-2 white--text" icon @click.prevent="triggerContact(social.function)">
              <v-icon size="36px">{{ social.icon }}</v-icon>
            </v-btn>
          </a>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <strong>Copyright © {{ new Date().getFullYear() }} — DCOMMERCE. All rights
            reserved.
          </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import {  getFormatNum } from '~/common'
import { hostName,mainCompanyInfo } from '~/common/api'
export default {
  name: 'MyFooter',
  data() {
    return {
      panel: [],
      socials: [
        {
          name: 'facebook',
          icon: 'mdi-facebook',
          url: '#',
          function: 'w'
        },
        {
          name: 'whatsapp',
          icon: 'mdi-whatsapp',
          url: '#',
          function: 'm'
        },
      ],
      items: [
        {
          name: 'ກ່ຽວກັບເຮົາ',
          tags: [
            {
              urlname: 'ຊ່ອງທາງການຕິດຕໍ່',
              url: '#',
            },
            {
              urlname: 'ວິທີການສັ່ງຊື້',
              url: '#',
            },
            {
              urlname: 'ສະໝັກວຽກ',
              url: '#',
            },
          ],
        },
        {
          name: 'ບໍລິການລູກຄ້າ',
          tags: [
            { urlname: 'ນະໂຍບາຍ ແລະ ເງື່ອນໄຂການສັ່ງຊື້ສິນຄ້າ', url: '#' },
            { urlname: 'ເງື່ອນໄຂການຈັດສົ່ງສິນຄ້າ', url: '#' },
            { urlname: 'ການຮັບປະກັນ ແລະ ນະໂຍບາຍ ອິນສະຕ໋ອກ', url: '#' },
            { urlname: 'ຊ່ອງທາງການຜ່ອນສິນຄ້າ', url: '#' },
          ],
        },
        {
          name: 'ວີທີການຊຳລະສິນຄ້າ',
          tags: [{ urlname: 'ຊ່ອງທາງການຊຳລະເງິນ', url: '#' }],
        },
        {
          name: 'ທີ່ຕັ້ງຮ້ານ',
          tags: [
            { urlname: '013 ຖະນົນ ສຸພານຸວົງ', url: '#', nourl: true },
            { urlname: 'ບ້ານສີຫອມ, ເມືອງຈັນທະບຸລີ', url: '#', nourl: true },
            { urlname: 'ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ', url: '#', nourl: true },
          ],
        },
      ],
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },

  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },

  methods: {
    onResize() {
      if (window.innerWidth >= 960) {
        this.panel = [...Array(4).keys()].map((k, i) => i)
      } else {
        this.panel = []
      }
    },
    triggerContact(val) {
      // social.function.includes('m') ? contactUsViaMessenger : contactUsViaWhatsApp
      if (val.includes('w')) {
        this.visitFacebookPage()
      } else {
        this.contactUsViaWhatsApp()
      }
    },
    visitFacebookPage() {
      const facebookPageUrl = 'https://www.facebook.com/dcommerce.la/'; // Replace with your actual Facebook Page URL or username
      window.open(facebookPageUrl, '_blank');
    },
    contactUsViaMessenger() {
      console.log(`Messenger box`);
      const pageUsername = 'dcommerce.la'; // Your Facebook Page's username
      const messengerUrl = `https://m.me/${pageUsername}`;
      window.open(messengerUrl, '_blank');
    },
    contactUsViaWhatsApp() {
      console.log(`Whatsapp box`);
      const phoneNumber = mainCompanyInfo().whatsapp; // Replace with your phone number
      const message = encodeURIComponent('ສະບາຍດີ dcommerce'); // Your default message
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, '_blank'); // Open WhatsApp chat in new tab/window
    },
  },
}
</script>

<style>
@media (min-width: 960px) {
  .v-expansion-panel:before {
    box-shadow: none !important;
  }

  .v-expansion-panel:not(:first-child)::after {
    border-top: none;
  }
}

.resize {
  text-align: center;
}

.resize {
  margin-top: 3rem;
  font-size: 1.25rem;
}

/*RESIZESCREEN ANIMATION*/
.right {
  animation: rightanime 1s linear infinite;
}

.left {
  animation: leftanime 1s linear infinite;
}

@keyframes rightanime {
  50% {
    transform: translateX(10px);
    opacity: 0.5;
  }

  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}

@keyframes leftanime {
  50% {
    transform: translateX(-10px);
    opacity: 0.5;
  }

  100% {
    transform: translateX(-10px);
    opacity: 0;
  }
}
</style>
