
import { hostName } from './common/api'
export default {
  server: {
    host: '0.0.0.0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `DCOMMERCE`,
    // title: 'Jack42',
    // title: 'PeeAir4',
    title: ` DC`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/jack.jpeg' }
      // { rel: 'icon', type: 'image/x-icon', href: '/chithanh.jpeg' }
      { rel: 'icon', type: 'image/x-icon', href: '/dc.jpeg' }
    ],
    script: [
      // {
      //   src: "https://kit.fontawesome.com/ca11dcec40.js",
      //   rel: "stylesheet"
      // },
      { src: "https://unpkg.com/jspdf-invoice-template@1.4.3/dist/index.js" },
      // { src: '/fontawesome.js', defer: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/mycss.css',
    '@/assets/css/style.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // { src: '~/plugins/chart.js', ssr: false },
  plugins: [
    
    { src: '~/plugins/jspdf-invoice.js', mode: 'client' },
    { src: '~/plugins/vue-sweetalert2', ssr: false },
    {
      src: '@/plugins/apex-chart.js',
      mode: 'client',
    },
    // { src: '~/plugins/fontawesome.js', ssr: false },
    // { src: '~/plugins/gantt-elastic.js', mode: 'client' }, 
    { src: '~/plugins/html2canvas.js', mode: 'client' },
    { src: '@/plugins/echarts.js', ssr: false },
    { src: '~/plugins/xlsx.js', mode: 'client' },
    { src: '~/plugins/vue-youtube.js', ssr: false },
    { src: '~/plugins/barcode.js', ssr: false },
    { src: '~/plugins/v-calendar.js', ssr: false },
    { src: '~/plugins/draggable.js', ssr: false },
    { src: '~/plugins/gantt-schedule-timeline-calendar.js', mode: 'client' }
    // { src: '~/plugins/vuelidate.js', mode: 'client' }
    // { src: '~/plugins/comma-thousand.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // '@nuxtjs/fontawesome',
  ],

  axios: {
    baseURL: hostName(),

  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          global: true,
          expires_in: 60,
          // required: true,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'userLogin', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          logout: { url: 'logout', method: 'get' },
          user: { url: 'me', method: 'get' },
        }
      }
    },
    redirect: {
      login: '/admin/login',
      logout: false,
      callback: '/admin/login',
      home: '/admin/login',
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        light: {
          primary: '#01532B', //DCOMMERCE green
          secondary: '#337555', 
          lightprimary: '#80a995',
          danger: '#D00505',
          // primary: '#EA9AB2', //Woody3 pink
          // secondary: '#E27396', 
          // lightprimary: '#FFDBE5',
          // danger: '#D00505',
        },
        // dark: {
        //   primary: '#01532B',
        //   secondary: '#CCDDD5',
        //   lightprimary: '#C0FFEC',
        //   accent: colors.grey.darken3,
        //   info: colors.teal.lighten1,
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3,

        // }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
