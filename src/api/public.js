import config from './config/public'
import axios from '@/utils/request'

// 获取轮播图功能
export const getSlider = () => axios.get(config.getSlider)

// 1.在页面中调用 2.vuex 获取数据 action
// 1）数据是全局的 vuex 2）可以复用的也可以放到vuex中 3）需要加缓存