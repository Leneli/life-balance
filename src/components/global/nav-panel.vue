<template lang="pug">
  v-navigation-drawer(
    v-model="drawer"
    fixed
    app)
    v-list(dense)
      v-list-tile(@click="$router.push({ name: 'home' })")
        v-list-tile-action
          v-icon pie_chart
        v-list-tile-content
          v-list-tile-title Home

      v-list-tile(@click="$router.push({ name: 'create-new' })")
        v-list-tile-action
          v-icon timelapse
        v-list-tile-content
          v-list-tile-title New Wheel

      v-list-tile(@click="$router.push({ name: 'about' })")
        v-list-tile-action
          v-icon home
        v-list-tile-content
          v-list-tile-title About

      //- FIXME: double click
      v-list-tile(@click.stop="$emit('settings-panel')")
        v-list-tile-action
          v-icon settings
        v-list-tile-content
          v-list-tile-title Settings
</template>

<script>
export default {
  props: {
    drawer: Boolean
  }
}
</script>
