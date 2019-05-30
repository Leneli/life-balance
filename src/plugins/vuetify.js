import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import ru from 'vuetify/es5/locale/ru'
import { DEFAULT_COLORS_THEME } from '../store/theme/state/colors'

const langRu = {
  locales: { ru },
  current: 'ru'
}

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: DEFAULT_COLORS_THEME,
  lang: langRu
})
