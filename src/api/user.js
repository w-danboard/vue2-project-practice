import config from './config/user'
import axios from '@/utils/request'

export const reg = (options) => axios.post(config.reg, options)