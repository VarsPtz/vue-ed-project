import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import store from './store'
import request from "vue-resource/src/http/request";

new Vue({
  el: '#app',
  // store: store,
  store,
  render: h => h(App)
})
