import { THEMES } from "../state/colors";
import { save } from "../../../vendor/storage";
import { THEME_COLORS } from "../../../vendor/storage/types";

export default function setThemeByName (state, payload) {
  if (payload && typeof payload === 'string') {
    let newTheme = THEMES.find(item => item.name === payload)
    let newName = newTheme instanceof Object && newTheme.hasOwnProperty('name') ? newTheme.name : null

    if (newName && newName !== state.theme.name) {
      state.theme = newTheme

      save(THEME_COLORS, state.theme)
    }
  }
}
