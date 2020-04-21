import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import request from "vue-resource/src/http/request";

// регистрация плагина
Vue.use(VueResource)

// http без $ - т.к. это объект конфигурации
Vue.http.options.root = 'http://localhost:3000/'

// Intercepters
Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})

new Vue({
  el: '#app',
  render: h => h(App)
})
