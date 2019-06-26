import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import RegisterComponent from '@/components/Register'
import LoginComponent from '@/components/Login'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'register'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    }
  ]
})