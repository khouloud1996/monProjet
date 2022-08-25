import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'


const routes = [
 

  {
    path: '/login/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup/',
    name: 'Signup',
    component: Signup
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router