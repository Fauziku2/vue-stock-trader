import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from "./routes";
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vue-stock-trader-4f61b.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const route = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router: route,
  store: store,
  render: h => h(App)
})
