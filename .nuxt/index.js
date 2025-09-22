import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_e2278e14 from 'nuxt_plugin_plugin_e2278e14' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_51d09eb8 from 'nuxt_plugin_plugin_51d09eb8' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_toast_48781c8a from 'nuxt_plugin_toast_48781c8a' // Source: ./toast.js (mode: 'client')
import nuxt_plugin_axios_0f93a50c from 'nuxt_plugin_axios_0f93a50c' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_jspdfinvoice_24aa2464 from 'nuxt_plugin_jspdfinvoice_24aa2464' // Source: ../plugins/jspdf-invoice.js (mode: 'client')
import nuxt_plugin_vuesweetalert2_1def2d6e from 'nuxt_plugin_vuesweetalert2_1def2d6e' // Source: ../plugins/vue-sweetalert2 (mode: 'client')
import nuxt_plugin_apexchart_56afe430 from 'nuxt_plugin_apexchart_56afe430' // Source: ../plugins/apex-chart.js (mode: 'client')
import nuxt_plugin_html2canvas_557cc08e from 'nuxt_plugin_html2canvas_557cc08e' // Source: ../plugins/html2canvas.js (mode: 'client')
import nuxt_plugin_echarts_30712fb1 from 'nuxt_plugin_echarts_30712fb1' // Source: ../plugins/echarts.js (mode: 'client')
import nuxt_plugin_xlsx_719232c8 from 'nuxt_plugin_xlsx_719232c8' // Source: ../plugins/xlsx.js (mode: 'client')
import nuxt_plugin_vueyoutube_6da200de from 'nuxt_plugin_vueyoutube_6da200de' // Source: ../plugins/vue-youtube.js (mode: 'client')
import nuxt_plugin_barcode_92607d26 from 'nuxt_plugin_barcode_92607d26' // Source: ../plugins/barcode.js (mode: 'client')
import nuxt_plugin_vcalendar_4dbed36c from 'nuxt_plugin_vcalendar_4dbed36c' // Source: ../plugins/v-calendar.js (mode: 'client')
import nuxt_plugin_draggable_6d354fc0 from 'nuxt_plugin_draggable_6d354fc0' // Source: ../plugins/draggable.js (mode: 'client')
import nuxt_plugin_ganttscheduletimelinecalendar_b57ec618 from 'nuxt_plugin_ganttscheduletimelinecalendar_b57ec618' // Source: ../plugins/gantt-schedule-timeline-calendar.js (mode: 'client')
import nuxt_plugin_vue2datepicker_4e082fe0 from 'nuxt_plugin_vue2datepicker_4e082fe0' // Source: ../plugins/vue2-datepicker.js (mode: 'client')
import nuxt_plugin_sweetalert_51f65655 from 'nuxt_plugin_sweetalert_51f65655' // Source: ../plugins/sweetalert.js (mode: 'client')
import nuxt_plugin_auth_1d0132a4 from 'nuxt_plugin_auth_1d0132a4' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"DCOMMERCE","title":" DC","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Fdc.jpeg"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"script":[{"src":"https:\u002F\u002Funpkg.com\u002Fjspdf-invoice-template@1.4.3\u002Fdist\u002Findex.js"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_e2278e14 === 'function') {
    await nuxt_plugin_plugin_e2278e14(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_51d09eb8 === 'function') {
    await nuxt_plugin_plugin_51d09eb8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_48781c8a === 'function') {
    await nuxt_plugin_toast_48781c8a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_0f93a50c === 'function') {
    await nuxt_plugin_axios_0f93a50c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_jspdfinvoice_24aa2464 === 'function') {
    await nuxt_plugin_jspdfinvoice_24aa2464(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesweetalert2_1def2d6e === 'function') {
    await nuxt_plugin_vuesweetalert2_1def2d6e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_apexchart_56afe430 === 'function') {
    await nuxt_plugin_apexchart_56afe430(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_html2canvas_557cc08e === 'function') {
    await nuxt_plugin_html2canvas_557cc08e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_echarts_30712fb1 === 'function') {
    await nuxt_plugin_echarts_30712fb1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_xlsx_719232c8 === 'function') {
    await nuxt_plugin_xlsx_719232c8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueyoutube_6da200de === 'function') {
    await nuxt_plugin_vueyoutube_6da200de(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_barcode_92607d26 === 'function') {
    await nuxt_plugin_barcode_92607d26(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vcalendar_4dbed36c === 'function') {
    await nuxt_plugin_vcalendar_4dbed36c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_draggable_6d354fc0 === 'function') {
    await nuxt_plugin_draggable_6d354fc0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ganttscheduletimelinecalendar_b57ec618 === 'function') {
    await nuxt_plugin_ganttscheduletimelinecalendar_b57ec618(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vue2datepicker_4e082fe0 === 'function') {
    await nuxt_plugin_vue2datepicker_4e082fe0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sweetalert_51f65655 === 'function') {
    await nuxt_plugin_sweetalert_51f65655(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_1d0132a4 === 'function') {
    await nuxt_plugin_auth_1d0132a4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
