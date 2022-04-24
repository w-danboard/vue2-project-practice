export default [
  {
    path: 'userStatistics',
    meta: {
      auth: 'userStatistics'
    },
    name: 'userStatistics',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/userStatistics.vue')
  },
  {
    path: 'userAuth',
    meta: {
      auth: 'userAuth'
    },
    name: 'userAuth',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/userAuth.vue')
  },
  {
    path: 'infoPublish',
    meta: {
      auth: 'infoPublish'
    },
    name: 'infoPublish',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/infoPublish.vue')
  },
  {
    path: 'articleManager',
    meta: {
      auth: 'articleManager'
    },
    name: 'articleManager',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/articleManager.vue')
  },
  {
    path: 'personal',
    meta: {
      auth: 'personal'
    },
    name: 'personal',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/personal.vue')
  },
  {
    path: 'myCollection',
    meta: {
      auth: 'myCollection'
    },
    name: 'myCollection',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/myCollection.vue')
  },
  {
    path: 'privateMessage',
    meta: {
      auth: 'privateMessage'
    },
    name: 'privateMessage',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/privateMessage.vue')
  },
  {
    path: 'myArticle',
    meta: {
      auth: 'myArticle'
    },
    name: 'myArticle',
    component: () => import(/*webpackChunkName:'manager'*/'@/views/manager/myArticle.vue')
  }
]