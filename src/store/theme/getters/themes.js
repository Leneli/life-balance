export const getThemes = state => state.themes
export const getCurrentTheme = state => state.theme
export const getCurrentThemeName = state => state.theme.name || ''
export const getCurrentThemeColors = state => state.theme.colors || {}
