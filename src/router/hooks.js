import store from '../store'
import * as types from '../store/action-types'

// 登录权限校验
const loginPermission = async function (to, from, next) {
  let r = store.dispatch(`user/${types.USER_VALIDATE}`)
  console.log(r)
  next()
}

// 菜单权限校验

export default {
  loginPermission
}