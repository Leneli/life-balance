<template lang="pug">
  v-footer(app class="primary--text v-toolbar__content")
    span The life balance wheel
    v-spacer
    span &copy; {{ year }}
</template>

<script>
export default {
  data () {
    var now = new Date()

    return {
      year: now.getFullYear()
    }
  }
}
</script>
