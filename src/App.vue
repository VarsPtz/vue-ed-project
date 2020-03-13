<template>
  <div>
    <h2>{{ title }}</h2>

    <input type="text" v-model="searchName">

    <ul>
<!--      <li v-for="name of names">{{ name }}</li>-->
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>

    <hr>

    <app-list></app-list>
  </div>
</template>

<script>

export default {
  data() {
      return {
        title: 'Hello I am Vue',
        searchName: '',
        names: [
          'Vlad',
          'Max',
          'Elena',
          'Igor'
        ]
      }
  },
  // https://ru.vuejs.org/v2/guide/computed.html вычисляемое свойство
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}
</script>

<style scoped>

</style>
