export default [
  {
    path: '/',
    component: () => import(/*webpackChunkName:'home'*/'@/views/Home.vue')
  },
  { // 这个*会被处理到当前所有路由的最后面
    path: '*',
    component: () => import(/*webpackChunkName:'404'*/'@/views/404.vue')
  },
  {
    path: '/manager',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/index.vue'),
    meta: {
      needLogin: true
    }
  }
]