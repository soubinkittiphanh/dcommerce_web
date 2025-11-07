// Remove this unused import
// import { hostName } from './common/api'

console.log('================================')
console.log('🔧 Nuxt Config Loading...')
console.log('BASE_URL:', process.env.BASE_URL)
console.log('PORT:', process.env.PORT)
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('================================')

export default {
  // ✅ FIXED: Added PORT
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
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
    ],
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/mycss.css',
    '@/assets/css/style.css',
    '@fortawesome/fontawesome-free/css/all.css',
    'vue2-datepicker/index.css'
  ],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuetify-theme.js',
    { src: '~/plugins/jspdf-invoice.js', mode: 'client' },
    { src: '~/plugins/vue-sweetalert2', ssr: false },
    { src: '@/plugins/apex-chart.js', mode: 'client' },
    { src: '~/plugins/html2canvas.js', mode: 'client' },
    { src: '@/plugins/echarts.js', ssr: false },
    { src: '~/plugins/xlsx.js', mode: 'client' },
    { src: '~/plugins/vue-youtube.js', ssr: false },
    { src: '~/plugins/barcode.js', ssr: false },
    { src: '~/plugins/v-calendar.js', ssr: false },
    { src: '~/plugins/draggable.js', ssr: false },
    { src: '~/plugins/gantt-schedule-timeline-calendar.js', mode: 'client' },
    { src: '~/plugins/vue2-datepicker.js', mode: 'client' },
    { src: '~/plugins/sweetalert.js', mode: 'client' }
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/svg',
  ],
  
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],
  
  toast: {
    position: 'top-right',
    duration: 3000,
    theme: 'outline',
    className: 'custom-toast',
    iconPack: 'fontawesome'
  },
  
  // ✅ FIXED: Removed duplicate, added privateRuntimeConfig
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:8888',
  },
  
  privateRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:8888',
  },
  
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:8888',
    browserBaseURL: process.env.BASE_URL || 'http://localhost:8888',
  },
  
  // ✅ FIXED: Token config and added scheme prefix
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          global: true,
          required: true,
          type: 'Bearer',
          maxAge: 60 * 60 * 24, // 24 hours in seconds
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30 // 30 days
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/userLogin', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          logout: { url: '/logout', method: 'get' },
          user: { url: '/me', method: 'get' },
        }
      }
    },
    redirect: {
      login: '/admin/login',
      logout: '/admin/login',
      callback: '/admin/login',
      home: '/admin/dashboard',
    }
  },
  
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#01532B',
          secondary: '#337555',
          lightprimary: '#80a995',
          danger: '#D00505',
        },
      }
    }
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['lucide-vue-next', 'chart.js', 'gantt-schedule-timeline-calendar'],
    terser: {
      parallel: false,
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.resolve.alias['@babel/runtime/regenerator'] = '@babel/runtime/regenerator'
      }
      if (isClient) {
        config.node = {
          fs: 'empty'
        }
      }
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      })
    }
  },
  
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}