import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '@/components/IndexPage'
import SignUp from '@/components/login/singup'
import SingIn from '@/components/login/singin'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/singup',
      name: 'SingUpPage',
      component: SignUp
    },
    {
      path: '/singin',
      name: 'SingInPage',
      component: SingIn
    }
  ]
})