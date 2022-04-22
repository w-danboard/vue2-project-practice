import config from './config/user'
import axios from '@/utils/request'

export const reg = (options) => axios.post(config.reg, options)

// 权限 + 用户信息 全局数据 vueX
export const login = (options) => axios.post(config.login, options)

// 校验用户是否登录 如果登陆过 获取最新信息 更新用户
export const validate = () => axios.get(config.validate)