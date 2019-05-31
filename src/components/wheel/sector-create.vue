<template lang="pug">
  v-card.item
    v-layout(row wrap fill-height)
      v-flex(xs12 sm4)
        v-text-field.pa-1(
          label="Название"
          hint="Название секции в колесе баланса"
          solo)
      v-flex(xs12 sm5)
        v-text-field.pa-1(
          label="Короткое описание"
          hint="Не более 100 символов"
          solo)
      v-flex(xs10 sm2)
        v-text-field.pa-1(
          label="Оценка"
          type="number"
          :min="$store.getters.getStartScaleValue"
          :max="$store.getters.getFinishScaleValue"
          :hint="`По шкале от ${$store.getters.getStartScaleValue} до ${$store.getters.getFinishScaleValue}`"
          solo)
      v-flex.box-last(xs2 sm1)
        v-icon.refresh(color="secondary") autorenew
        v-btn(
          color="warning"
          small
          absolute
          right
          bottom
          fab
        )
          v-icon(title="Удалить") delete
</template>

<script>
export default {
  props: {
    id: [Number, String]
  },
  data () {
    return {

    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px 0;
  background-color: rgba(#000, .1)
}

.box-last {
  display: flex;
  align-items: center;
  justify-content: center;
}

.refresh {
  margin-bottom: 25px;
  opacity: 0;
  transition: opacity .3s ease;

  &.active {
    opacity: 1;
    animation: spin 1s ease infinite;
  }
}

@keyframes spin {
  0% { transform: rotate3d(0, 0, 1, 0); }
  100% { transform: rotate3d(0, 0, 1, 360deg); }
}
</style>
