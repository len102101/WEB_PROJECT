import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexComponent from '@/components/IndexPage'
import RegisterComponent from '@/components/Register'
import LoginComponent from '@/components/Login'
import RegisterStudentComponent from '@/components/RegisterStudent'
import RegisterTeacherComponent from '@/components/RegisterTeacher'
import BoardMainComponent from '@/components/BoardMain'
import BoardWriteComponent from '@/components/BoardWrite'
import Temp from '@/components/tempID'

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
      path: '/register/student',
      name: 'register-student',
      component: RegisterStudentComponent
    },
    {
      path: '/register/teacher',
      name: 'register-teacher',
      component: RegisterTeacherComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/home',
      name: 'home',
      component: BoardMainComponent
    },
    {
      path: '/write',
      name: 'boardwrite',
      component: BoardWriteComponent
    },
    {
      path: '/temp',
      name: 'temp',
      component: Temp
    }
  ]
})