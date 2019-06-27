import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexComponent from '@/components/IndexPage'
import RegisterComponent from '@/components/Register'
import LoginComponent from '@/components/Login'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
        name: 'IndexComponent',
        component: IndexComponent
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