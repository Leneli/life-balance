<template lang="pug">
  v-navigation-drawer(
    :value="drawer"
    temporary
    fixed
  )
    div.pa-3
      v-switch(v-model="mode" :label="'Dark Mode'" @click="$store.dispatch('switchMode')")
    
    div.pa-3(v-if="$vuetify")
      h3 Theme
      v-radio-group(v-model="themeName", @click="switchTheme")
        v-radio(
          v-for="(th, index) in themes"
          color="accent"
          :key="index"
          :label="`${th.name}`"
          :value="th.name"
        )
</template>

<script>
export default {
  props: {
    drawer: Boolean
  },
  data () {
    return {
      mode: this.$store.getters.getDarkMode,
      themeName: this.$store.getters.getCurrentThemeName,
      themes: this.$store.getters.getThemes
    }
  },
  methods: {
    switchTheme () {
      this.$store.dispatch('switchTheme', this.themeName)
      this.$vuetify.theme = this.$store.getters.getCurrentThemeColors
    }
  },
}
</script>
