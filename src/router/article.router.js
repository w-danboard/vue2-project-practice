export default [
  {
    path: '/article',
    component: () => import(/*webpackChunkName:'article'*/'@/views/article/index.vue')
  }
]