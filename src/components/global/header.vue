<template lang="pug">
  v-toolbar(
    color="primary"
    dark
    fixed
    app
    clipped-right
  )
    v-toolbar-side-icon(@click.stop="$emit('navigate-panel')")
    v-toolbar-title The life balance wheel
    v-spacer
</template>
