// plugins/error-handler.js
export default ({ app, error, store, redirect, route }) => {
  // Handle router errors
  app.router.onError((err) => {
    console.error('Router error:', err)
    
    // Handle chunk loading errors (common on deployment updates)
    if (err.message && err.message.includes('Loading chunk')) {
      console.warn('Chunk loading error detected, reloading page...')
      window.location.reload()
      return
    }
    
    // Handle navigation errors
    if (err.message && err.message.includes('NavigationDuplicated')) {
      console.warn('Navigation duplicate error, ignoring...')
      return
    }
  })

  // Handle unhandled promise rejections
  if (process.client) {
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason)
      
      // Don't crash the app for network errors
      if (event.reason && event.reason.message) {
        const message = event.reason.message.toLowerCase()
        if (message.includes('network') || message.includes('fetch') || message.includes('timeout')) {
          console.warn('Network error detected, preventing crash')
          event.preventDefault()
          return
        }
      }
      
      // Prevent crash for auth errors
      if (event.reason && event.reason.response && event.reason.response.status === 401) {
        console.warn('Auth error detected, redirecting to login')
        app.$auth.logout()
        event.preventDefault()
        return
      }
      
      // Log other errors but don't crash
      event.preventDefault()
    })

    // Handle general JavaScript errors
    window.addEventListener('error', (event) => {
      console.error('JavaScript error:', event.error)
      
      // Handle specific Vuetify/Vue errors that shouldn't crash the app
      if (event.error && event.error.message) {
        const message = event.error.message.toLowerCase()
        if (message.includes('vuetify') || message.includes('v-')) {
          console.warn('UI component error, continuing...')
          return true
        }
      }
    })

    // Axios interceptor for better error handling
    app.$axios.onError((error) => {
      console.error('Axios error:', error)
      
      // Handle specific error codes
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // Unauthorized - redirect to login
            if (app.$auth && app.$auth.loggedIn) {
              console.warn('Session expired, logging out...')
              app.$auth.logout()
            }
            break
          case 403:
            // Forbidden
            console.warn('Access forbidden')
            break
          case 404:
            // Not found
            console.warn('Resource not found:', error.config.url)
            break
          case 500:
            // Server error
            console.error('Server error')
            if (app.$toast) {
              app.$toast.error('Server error occurred. Please try again.')
            }
            break
          default:
            console.error('HTTP error:', error.response.status)
        }
      } else if (error.request) {
        // Network error
        console.error('Network error')
        if (app.$toast) {
          app.$toast.error('Network connection error. Please check your connection.')
        }
      }
      
      return Promise.reject(error)
    })
  }
}