<template lang="pug">
  div.main
    //- TODO: "Внимание! Текущее колесо баланса будет удалено безвозвратно!" <button Create >
    div.mb-5
      v-alert(
        :value="true"
        :color="$store.getters.getWheel ? 'warning' : 'info'"
        icon="priority_high"
        outline
      )
        v-layout(align-center)
          span {{ message }}
          v-spacer
          v-btn(color="primary", @click="$store.dispatch('createWheel')")
            v-icon create
            | &nbsp;Создать

    div(v-if="$store.getters.getWheel")
      v-layout(align-center)
        h1.display-2 Create new
        v-spacer
        v-btn.mr-0(color="secondary")
          v-icon add
          | Add

      v-layout(column fill-height v-if="$store.getters.getWheel")
        sector-create-vue(v-for="(sector, id) in $store.getters.getAllSectors", :id="id" :key="id")

    div(v-else) ...Здесь будет какая-то заглушка...

</template>

<script>
import sectorCreateVue from '../components/wheel/sector-create.vue'

export default {
  components: {
    sectorCreateVue
  },
  data () {
    return {
      showWarnMessage: !!this.$store.getters.getWheel
    }
  },
  computed: {
    message () {
      if (this.$store.getters.getWheel) {
        return 'Внимание! Текущее колесо жизненного баланса будет удалено безвозвратно!'
      } else {
        return 'Создайте своё колесо жизненного баланса :)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>
