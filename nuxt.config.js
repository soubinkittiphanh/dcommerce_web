import { hostName } from './common/api'
const pkg = require('./package.json')

export default {
  env: {
    dcAppVersion: pkg.version
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL || 'http://150.95.31.23:8011'
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL || 'http://150.95.31.23:8011'
    }
  },
  // 1. CONDITIONAL SSR: Defaults to 'server' for VPS deployment. Uses 'static' only if explicitly requested.
  ssr: process.env.NUXT_TARGET !== 'static',
  target: process.env.NUXT_TARGET === 'static' ? 'static' : 'server',

  server: {
    host: '0.0.0.0'
  },

  // 2. MANDATORY FOR ELECTRON: Use Hash mode for local file routing
  router: {
    mode: 'hash'
  },

  head: {
    titleTemplate: `DCOMMERCE`,
    title: ` DC`,
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/dc.jpeg' }],
    script: [
      { src: "https://unpkg.com/jspdf-invoice-template@1.4.3/dist/index.js" }
    ],
  },

  css: [
    '@/assets/css/mycss.css',
    '@/assets/css/style.css',
    '@mdi/font/css/materialdesignicons.css',
    '@fortawesome/fontawesome-free/css/all.css',
    'vue2-datepicker/index.css',
    'vue-virtual-scroller/dist/vue-virtual-scroller.css'
  ],

  plugins: [
    { src: '~/plugins/electron-init.js', mode: 'client' }, // Add this at the TOP
    '~/plugins/i18n.js',
    '~/plugins/vuetify-theme.js',
    { src: '~/plugins/jspdf-invoice.js', mode: 'client' },
    { src: '~/plugins/vue-sweetalert2', ssr: false },
    { src: '@/plugins/apex-chart.js', mode: 'client' },
    { src: '~/plugins/vue-virtual-scroller.js', mode: 'client' },
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

  components: true,

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
    iconPack: 'fontawesome'
  },


  auth: {
    strategies: {
      local: {
        token: { property: 'accessToken', global: true, expires_in: 60 },
        refreshToken: { property: 'refreshToken', data: 'refreshToken', maxAge: 60 * 60 * 24 * 30 },
        user: { property: 'user' },
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

  vuetify: {
    defaultAssets: false,
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

  // 4. FIX FOR BUILD ERRORS & WINDOWS PATHS
  build: {
    publicPath: './_nuxt/', // Ensures local .exe finds the assets
    filenames: {
      chunk: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js'
    },
    transpile: ['lucide-vue-next', 'chart.js', 'gantt-schedule-timeline-calendar'],
    terser: {
      parallel: false, // Prevents EPIPE errors on some machines
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.resolve.alias['@babel/runtime/regenerator'] = '@babel/runtime/regenerator'
      }
      if (isClient) {
        // Set to true to allow Electron to use Node features like 'fs'
        config.node = {
          fs: 'empty',
          child_process: 'empty'
        }
      }
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      })
    }
  },

  // 5. PREVENT BUILD CRAWLER ERRORS
  generate: {
    fallback: true, // Use 200.html instead of 404.html for SPA
    exclude: [/^\/admin/], // Optional: skip generating specific routes if they fail
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type)
    }
  }
}
// Force Nuxt reload for new expiring-soon report page route config.



