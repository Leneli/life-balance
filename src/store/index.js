import Vue from 'vue'
import Vuex from 'vuex'
/** modules */
import { wheel } from './wheel'
import { theme } from './theme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    wheel,
    theme
  }
})
