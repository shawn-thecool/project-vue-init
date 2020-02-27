import Vue from 'vue'
import Router from 'vue-router'
import Login from '@pages/Login.vue'
import Apply from '@pages/Apply.vue'
import History from '@pages/History.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Login },
    { path: '/login', name: 'login', component: Login },
    { path: '/apply', name: 'apply', component: Apply },
    { path: '/history', name: 'history', component: History },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 })
})

export default router
