import Vue from 'vue'
import App from './App'
import router from './router'
import http from 'axios'

Vue.prototype.$http = http;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})