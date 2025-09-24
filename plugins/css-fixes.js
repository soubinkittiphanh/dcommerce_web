// plugins/css-fixes.js
export default ({ app }) => {
  if (process.client) {
    // Add CSS fixes after DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
      // Create and inject CSS fixes
      const style = document.createElement('style')
      style.textContent = `
        /* Fix scrolling issues */
        html {
          overflow-y: auto !important;
          scroll-behavior: smooth;
          height: 100%;
        }

        body {
          overflow-x: hidden;
          overflow-y: auto;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        #__nuxt {
          height: 100%;
        }

        #__layout {
          height: 100%;
        }

        /* Fix Vuetify application wrapper */
        .v-application {
          overflow: visible !important;
          min-height: 100vh;
        }

        .v-application--wrap {
          min-height: 100vh;
          overflow: visible !important;
        }

        /* Fix main content area */
        .v-main {
          min-height: calc(100vh - 64px);
          overflow-y: visible !important;
        }

        .v-main__wrap {
          min-height: calc(100vh - 64px);
          overflow: visible;
        }

        /* Fix container issues */
        .container {
          max-width: none !important;
          width: 100%;
        }

        .container.container--fluid {
          max-width: none !important;
          padding: 12px;
        }

        /* Fix navigation drawer */
        .v-navigation-drawer {
          will-change: transform;
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        }

        /* Fix data table scrolling */
        .v-data-table {
          overflow-x: auto;
          width: 100%;
        }

        .v-data-table__wrapper {
          overflow-x: auto;
          overflow-y: visible;
        }

        /* Fix card layouts */
        .v-card {
          overflow: visible;
          margin-bottom: 16px;
        }

        /* Fix dialog positioning */
        .v-dialog {
          overflow-y: auto;
          max-height: 90vh;
        }

        .v-dialog__content {
          align-items: flex-start !important;
          padding-top: 5vh;
        }

        /* Fix layout shifts */
        .v-layout.row {
          margin: 0;
        }

        .v-layout.row.wrap {
          margin: 0;
        }

        /* Fix column spacing */
        .col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, 
        .col-7, .col-8, .col-9, .col-10, .col-11, .col-12 {
          padding: 8px;
        }

        /* Fix responsive issues */
        @media (max-width: 768px) {
          .v-main {
            padding-left: 0 !important;
          }
          
          .v-navigation-drawer--temporary {
            z-index: 1000;
          }
          
          .container {
            padding: 8px;
          }
        }

        /* Fix loading states */
        .v-data-table--loading {
          pointer-events: none;
          opacity: 0.6;
        }

        /* Fix progress indicators */
        .v-progress-linear {
          overflow: hidden;
        }

        /* Prevent horizontal overflow */
        .text-left, .text-center, .text-right {
          overflow-x: hidden;
        }

        /* Fix footer positioning */
        .v-footer {
          margin-top: auto;
        }

        /* Fix toolbar and app bar */
        .v-toolbar, .v-app-bar {
          z-index: 100;
        }

        /* Fix overlay issues */
        .v-overlay__scrim {
          position: fixed;
        }

        /* Fix toast positioning */
        .custom-toast {
          z-index: 10000;
        }

        /* Performance improvements */
        .v-btn {
          will-change: auto;
        }

        .v-card {
          will-change: auto;
        }

        /* Fix text field layouts */
        .v-text-field {
          margin-bottom: 8px;
        }

        .v-input {
          margin-bottom: 8px;
        }

        /* Fix chip layouts */
        .v-chip {
          margin: 2px;
        }
      `
      document.head.appendChild(style)
    })

    // Fix resize issues
    let resizeTimeout
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        // Force recalculation of layouts
        const event = new Event('resize')
        window.dispatchEvent(event)
      }, 250)
    })

    // Fix page visibility issues
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        // Page became visible again, trigger a layout check
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'))
        }, 100)
      }
    })
  }
}