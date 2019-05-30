import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import ru from 'vuetify/es5/locale/ru'

const lime = {
  primary: '#cddc39',
  secondary: '#009688',
  accent: '#ff5722',
  error: '#f44336',
  warning: '#ffc107',
  info: '#00bcd4',
  success: '#8bc34a'
}
const teal = {
  primary: '#009688',
  secondary: '#ff5722',
  accent: '#8bc34a',
  error: '#f44336',
  warning: '#ffc107',
  info: '#2196f3',
  success: '#4caf50'
}

const langRu = {
  locales: { ru },
  current: 'ru'
}

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: teal,
  lang: langRu
})
