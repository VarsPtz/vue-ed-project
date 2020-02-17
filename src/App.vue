<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-counter></app-counter>

    <!--carName - параметр   "carName" - значение параметра, строка
     для того, чтобы значение стало переменной, нужно её привязать
     с помощью v-bind: или короткой формой записи  : -->
    <app-car
        :carName="carName"
        :carYear="carYear"
        :changeFunc="changeNameToAudi"
        @nameChanged="carName = $event"

    ></app-car>
  </div>
</template>

<script>

import Car from './Car.vue'
import Counter from './Counter.vue'

export default {
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      carName: 'Ford',
      carYear: 2018
    }
  },
  methods: {
      changeNameToAudi() {
          this.carName = 'Audi'
      }
  },
  components: {
    appCar: Car,
    appCounter: Counter

  }

}
</script>

<style>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
