export default async function ({ $vuetify, $axios, store }) {
  try {
    // Get companyId from store or auth
    const companyId = store.state.auth?.user?.companyId || store.state.user?.companyId || 1;
    
    // Fetch all companies from API
    const { data } = await $axios.get('/api/public/company/findAll');
    
    // Check if data is an array and has at least one company
    if (data && Array.isArray(data) && data.length > 0) {
      // Get the first company's theme
      const firstCompany = data[0];
      
      // Check if theme is enabled for this company
      if (firstCompany.theme_enabled) {
        // Apply theme dynamically
        $vuetify.theme.themes.light.primary = firstCompany.theme_primary_color || '#01532B';
        $vuetify.theme.themes.light.secondary = firstCompany.theme_secondary_color || '#337555';
        $vuetify.theme.themes.light.lightprimary = firstCompany.theme_lightprimary_color || '#80a995';
        $vuetify.theme.themes.light.danger = firstCompany.theme_danger_color || '#D00505';
        
        // Optional: dark theme
        if (firstCompany.theme_dark_primary) {
          $vuetify.theme.themes.dark.primary = firstCompany.theme_dark_primary;
          $vuetify.theme.themes.dark.secondary = firstCompany.theme_dark_secondary;
        }
        
        // Optional: Store theme in Vuex for later use
        if (store.commit) {
          const themeData = {
            primary_color: firstCompany.theme_primary_color,
            secondary_color: firstCompany.theme_secondary_color,
            lightprimary_color: firstCompany.theme_lightprimary_color,
            danger_color: firstCompany.theme_danger_color,
            dark_primary: firstCompany.theme_dark_primary,
            dark_secondary: firstCompany.theme_dark_secondary,
            enabled: firstCompany.theme_enabled
          };
          store.commit('theme/SET_THEME', themeData);
        }
        
        console.log('Theme loaded successfully from company:', firstCompany.name);
      } else {
        console.log('Theme is disabled for company:', firstCompany.name);
      }
    }
  } catch (error) {
    console.error('Failed to load company theme:', error);
    // Fallback to default theme (already set in nuxt.config.js)
  }
}