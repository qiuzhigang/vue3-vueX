import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'about'
    }
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('../components/Todos.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/qisolt',
    name: 'qisolt',
    component: () => import('../components/qisolt.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
