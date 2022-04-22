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
      }
    },
    [types.SET_PERMISSION] (state, has) {
      state.hasPermission = has
    }
  },
  actions: {
    async [types.USER_LOGIN]({ commit }, payload) {
      try {
        let result = await user.login(payload)
        commit(types.SET_USER, result.data)
        commit(types.SET_PERMISSION, true)
      } catch (e) {
        return Promise.reject(e)
      }
    }
  }
}