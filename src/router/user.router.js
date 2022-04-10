export default [
  {
    path: '/reg',
    component: () => import(/*webpackChunkName:'reg'*/'@/views/user/Reg.vue')
  },
  {
    path: '/login',
    component: () => import(/*webpackChunkName:'login'*/'@/views/user/Login.vue')
  },
  {
    path: '/forget',
    component: () => import(/*webpackChunkName:'forget'*/'@/views/user/Forget.vue')
  }
]