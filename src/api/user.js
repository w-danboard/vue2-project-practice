import config from './config/user'
import axios from '@/utils/request'

export const reg = (options) => axios.post(config.reg, options)

// 权限 + 用户信息 全局数据 vueX
export const login = (options) => axios.post(config.login, options)