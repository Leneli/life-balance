import { save } from '../../../vendor/storage'
import { THEME_COLORS } from '../../../vendor/storage/types'

export default function setThemeColors (state, payload) {
  if (payload instanceof Object && Object.keys(payload).length > 0) {
    state.theme = {
      name: 'User custom theme',
      colors: payload
    }

    save(THEME_COLORS, state.theme)
  }
}
