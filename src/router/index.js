import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Todos from '../views/Todos.vue'
import Calendar from '../views/Calendar.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/todos',
    name: 'Todos',
    meta: {
      auth: true
    },
    component: Todos
  },
  {
    path: '/calendar',
    name: 'Calendar',
    meta: {
      auth: true
    },
    component: Calendar
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')
  
  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next({name: 'Login'})
  } else {
    next()
  }
})

export default router
