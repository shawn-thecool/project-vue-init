import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 })
})

export default router
