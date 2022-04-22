import store from '../store'
import * as types from '../store/action-types'

// 登录权限校验
const loginPermission = async function (to, from, next) {
  let r = store.dispatch(`user/${types.USER_VALIDATE}`)
  
  // 根据meta来判断是否登录
  let needLogin = to.matched.some(item => item.meta.needLogin)
  
  if (!store.state.user.hasPermission) {
    // 没登录过 但是访问这个页面需要登录
    if (needLogin) {
      if (r) {
        next() // 需要登录 并且登录郭了 继续即可
      } else {
        next('/login')
      }
    } else {
      next() // 没登录 也不用权限
    }
  } else {
    // 登录过 访问登录页，跳转到首页
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  }

  next()
}

// 菜单权限校验

export default {
  loginPermission
}