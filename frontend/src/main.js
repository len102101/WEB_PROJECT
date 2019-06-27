import Vue from 'vue'
import App from './App'
import router from './router'
import http from 'axios'
import FlatSurfaceShader from 'vue-flat-surface-shader'

Vue.config.productionTip = false
Vue.prototype.$http = http;

Vue.use(FlatSurfaceShader)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})