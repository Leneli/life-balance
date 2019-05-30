<template lang="pug">
  v-app(:dark="$store.getters.getDarkMode || null")
    app-header(@navigate-panel="drawer = !drawer")
    app-navigate(:drawer="drawer", @settings-panel="left = !left")
    app-settings(:drawer="left")

    v-content
      v-container(fluid, fill-height)
        v-layout(fill-height)
          router-view

    app-footer
</template>

<script>
import AppFooter from './components/global/footer'
import AppHeader from './components/global/header'
import AppNavigate from './components/global/nav-panel'
import AppSettings from './components/global/settings-panel'

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    AppNavigate,
    AppSettings
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    left: false
  })
}
</script>
