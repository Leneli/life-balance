<template lang="pug">
  div.main
    //- TODO: "Внимание! Текущее колесо баланса будет удалено безвозвратно!"
    div.mb-5(v-if="true")
      v-alert(
        :value="true"
        color="warning"
        icon="priority_high"
        outline
        dismissible
      ) Внимание! Текущее колесо баланса будет удалено безвозвратно!

    div
      v-layout(align-center)
        h1.display-2 Create new
        v-spacer
        v-btn.mr-0(color="primary") Add

      v-layout(column fill-height)
        .item
          v-layout(row wrap fill-height)
            v-flex(xs12 sm4)
              v-text-field.pa-1(label="Name" solo hint="At least 8 characters")
            v-flex(xs12 sm6)
              v-text-field.pa-1(label="Short description" solo hint="At least 8 characters")
            v-flex(xs12 sm2)
              v-text-field.pa-1(label="Default value" solo hint="At least 8 characters")

        .item
          v-layout(row wrap fill-height)
            v-flex(xs12 sm4)
              v-text-field.pa-1(label="Name" solo hint="At least 8 characters")
            v-flex(xs12 sm6)
              v-text-field.pa-1(label="Short description" solo hint="At least 8 characters")
            v-flex(xs12 sm2)
              v-text-field.pa-1(label="Default value" solo hint="At least 8 characters")

        .item
          v-layout(row wrap fill-height)
            v-flex(xs12 sm4)
              v-text-field.pa-1(label="Name" solo hint="At least 8 characters")
            v-flex(xs12 sm6)
              v-text-field.pa-1(label="Short description" solo hint="At least 8 characters")
            v-flex(xs12 sm2)
              v-text-field.pa-1(label="Default value" solo hint="At least 8 characters")

</template>

<style lang="scss" scoped>
.main {
  width: 100%;
}

.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px 0;
  background-color: rgba(#000, .1)
}
</style>
