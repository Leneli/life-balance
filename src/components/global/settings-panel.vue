<template lang="pug">
  v-navigation-drawer(
    :value="drawer"
    temporary
    fixed
  )
    div
      v-switch(v-model="mode" :label="'Dark Mode'" @click="$store.dispatch('switchMode')")
</template>

<script>
export default {
  props: {
    drawer: Boolean
  },
  data () {
    return {
      mode: this.$store.getters.getDarkMode
    }
  }
}
</script>
