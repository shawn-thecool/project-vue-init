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
    { path: '/apply', name: 'apply', component: Apply, meta: { requiresAuth: true } },
    { path: '/history', name: 'history', component: History, meta: { requiresAuth: true } }
  ],
  scrollBehavior: () => ({ y: 0 })
})

router.beforeEach((to, from, next) => {
  const hasRequiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // TODO: login api process 처리 후 최종 반환
  const isAuth = false

  hasRequiresAuth
    ? isAuth
      ? next()
      : next({ path: '/login', query: { redirect: to.fullPath } })
    : next()
})

export default router
