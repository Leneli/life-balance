import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import ru from 'vuetify/es5/locale/ru'
import { DEFAULT_COLORS_THEME } from '../store/theme/state/colors'
import { read } from '../vendor/storage'
import { THEME_LANG, THEME_COLORS } from '../vendor/storage/types'

const langs = {
  ru: {
    locales: { ru },
    current: 'ru'
  }
}

const lang = read(THEME_LANG) || 'ru'
let theme = read(THEME_COLORS) || DEFAULT_COLORS_THEME

try {
  if (typeof theme === 'string') theme = JSON.parse(theme)
} catch (error) {
  console.warn('Vuetify default settings, invalid Theme in localStorage', error)

  theme = DEFAULT_COLORS_THEME
}

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: langs[lang],
  theme: theme.colors
})
