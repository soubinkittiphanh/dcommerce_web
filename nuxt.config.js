import { hostName } from './common/api'
export default {
  server: {
    host: '0.0.0.0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `DCOMMERCE`,
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
      { rel: 'icon', type: 'image/x-icon', href: '/dc.jpeg' }
    ],
    script: [
      { src: "https://unpkg.com/jspdf-invoice-template@1.4.3/dist/index.js" },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js'
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/mycss.css',
    '@/assets/css/style.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/jspdf-invoice.js', mode: 'client' },
    { src: '~/plugins/vue-sweetalert2', ssr: false },
    {
      src: '@/plugins/apex-chart.js',
      mode: 'client',
    },
    { src: '~/plugins/html2canvas.js', mode: 'client' },
    { src: '@/plugins/echarts.js', ssr: false },
    { src: '~/plugins/xlsx.js', mode: 'client' },
    { src: '~/plugins/vue-youtube.js', ssr: false },
    { src: '~/plugins/barcode.js', ssr: false },
    { src: '~/plugins/v-calendar.js', ssr: false },
    { src: '~/plugins/draggable.js', ssr: false },
    { src: '~/plugins/gantt-schedule-timeline-calendar.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/svg', // Add this for SVG support
  ],

  // Add this to your modules array in nuxt.config.js
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast', // Add this line
  ],
  // Add toast configuration (optional)
  toast: {
    position: 'top-right',
    duration: 3000,
    theme: 'outline',
    className: 'custom-toast',
    iconPack: 'fontawesome' // Since you're using FontAwesome
  },

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
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: 'user',
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
      themes: {
        light: {
          primary: '#01532B', //DCOMMERCE green
          secondary: '#337555',
          lightprimary: '#80a995',
          danger: '#D00505',
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // nuxt.config.js
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add this to help with SES warnings
    transpile: ['lucide-vue-next'],
    terser: {
      parallel: false, // <-- ADD THIS LINE to prevent EPIPE errors
    },
    extend(config, { isDev, isClient }) {
      // Suppress SES warnings in development
      if (isDev && isClient) {
        config.resolve.alias['@babel/runtime/regenerator'] = '@babel/runtime/regenerator'
      }
    }
  },



  // Add this to suppress console warnings
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}