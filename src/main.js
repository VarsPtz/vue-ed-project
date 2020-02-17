import Vue from 'vue'
import App from './App.vue'

//import Car from './Car.vue'
// Vue.component('app-car', Car)
// Подключим компонент локально в App.vue


new Vue({
  el: '#app',
  render: h => h(App)
  // render: function (h) {
  //   return h(App)
  // }
})

export const eventEmitter = new Vue()
