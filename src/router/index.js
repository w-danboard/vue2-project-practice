import Vue from 'vue'
import VueRouter from 'vue-router'
import hooks from './hooks'

Vue.use(VueRouter)

// 像前端的读写文件 路径 读取的子目录
const files = require.context('./', false, /\.router.js$/)
const routes = []
files.keys().forEach(key => {
  routes.push(...files(key).default)
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.values(hooks).forEach(hook => {
  router.beforeEach(hook.bind(router)) // 将this绑定成router
})

export default router
