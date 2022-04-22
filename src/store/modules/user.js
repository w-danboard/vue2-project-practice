import * as user from '@/api/user'
import * as types from '../action-types'
import { setLocal, getLocal } from '@/utils/local'

export default {
  state: {
    userInfo: {}, // 用户信息
    hasPermission: false, // 代表用户权限
  },
  mutations: {
    [types.SET_USER] (state, userInfo) {
      state.userInfo = userInfo
      if (userInfo && userInfo.token) {
        setLocal('token', userInfo.token)
      } else {
        localStorage.clear('token')
      }
    },
    [types.SET_PERMISSION] (state, has) {
      state.hasPermission = has
    }
  },
  actions: {
    async [types.SET_USER] ({ commit }, { payload, permission }) {
      commit(types.SET_USER, payload)
      commit(types.SET_PERMISSION, permission)
    },
    async [types.USER_LOGIN] ({ commit, dispatch }, payload) {
      try {
        let result = await user.login(payload)
        dispatch(types.SET_USER, { payload: result.data, permission: true })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    async [types.USER_VALIDATE] ({ commit, dispatch }) {
      // 如果没有token 就不用发请求了 肯定没有登录
      if (!getLocal('token')) return false
      try {
        let result = await user.validate()
        dispatch(types.SET_USER, { payload: result.data, permission: true })
        return true
      } catch (e) {
        dispatch(types.SET_USER, { payload: {}, permission: false })
      }
    },
    async [types.USER_LOGOUT] ({ commit, dispatch }) {
      dispatch(types.SET_USER, { payload: {}, permission: false })
    }
  }
}