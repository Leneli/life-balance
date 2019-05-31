import { THEMES } from "../state/colors";

export default function setThemeByName (state, payload) {
  if (payload && typeof payload === 'string') {
    let newTheme = THEMES.find(item => item.name === payload)
    let newName = newTheme instanceof Object && newTheme.hasOwnProperty('name') ? newTheme.name : null

    if (newName && newName !== state.theme.name) {
      state.theme = newTheme
    }
  }
}
