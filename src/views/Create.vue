<template lang="pug">
  div.main
    //- TODO: "Внимание! Текущее колесо баланса будет удалено безвозвратно!"
    div

    div
      h1.display-2 Create new

      v-layout(column fill-height)
        .item.elevation-5 1
          v-text-field
        .item.elevation-5 2
        .item.elevation-5 3

</template>

<style lang="scss" scoped>
.main {
  width: 100%;
}

.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}
</style>
