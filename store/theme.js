export const state = () => ({
  primary_color: '#01532B',
  secondary_color: '#337555',
  lightprimary_color: '#80a995',
  danger_color: '#D00505',
  dark_primary: null,
  dark_secondary: null,
  enabled: true
})

export const mutations = {
  SET_THEME(state, themeData) {
    state.primary_color = themeData.primary_color || state.primary_color
    state.secondary_color = themeData.secondary_color || state.secondary_color
    state.lightprimary_color = themeData.lightprimary_color || state.lightprimary_color
    state.danger_color = themeData.danger_color || state.danger_color
    state.dark_primary = themeData.dark_primary || state.dark_primary
    state.dark_secondary = themeData.dark_secondary || state.dark_secondary
    state.enabled = themeData.enabled !== undefined ? themeData.enabled : state.enabled
  }
}
