import { locales } from '~/common/locales'

export default (context, inject) => {
  // Inject $t helper globally to be available as this.$t() in script and $t() in template
  inject('t', (key) => {
    const currentLang = context.store.state.language || 'lo'
    return locales[currentLang]?.[key] || key
  })
}
