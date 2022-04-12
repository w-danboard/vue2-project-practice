// 我们要将axios 二次封装
import axios from 'axios'
import config from '@/config'

class HttpRequest {
  constructor () {
    // 可以增加实例属性 后台接口的路径开发模式和生产模式不一样
    this.baseURL = config.baseURL
    this.timeout = 3000 // 3s后请求超时
  }
  setInterceptors (instance) {
    instance.interceptors.request.use(config => {
      // 一般增加token属性
      return config
    })

    instance.interceptors.response.use(res => {
      if (res.status == 200) {
        // 服务器返回的结果都会放到data中
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res.data.data) // 我的后端实现的话，如果失败了会在返回的结果中增加一个data字段，失败的原因
      }
    }, err => {
      // 单独处理其他的状态码异常
      switch (err.response.status) {
        case '401':
          console.log(err, '我是401')
          break
        default:
          break
      }
      return Promise.reject(err)
    })
  }
  mergeOptions (options) {;
    return { baseURL: this.baseURL, timeout: this.timeout ,...options }
  }
  request (options) {
    const instance = axios.create() // 创建axios实例
    this.setInterceptors(instance)
    const opts = this.mergeOptions(options)
    return instance(opts)
  }
  get (url, config) { // 路径参数 ?a=1
    return this.request({
      method: 'get',
      url,
      ...config // 参数可以直接展开
    })
  }
  post (url, data) { // 请求体中
    return this.request({
      method: 'post',
      url,
      data // post要求必须传入data属性
    })
  }
}

export default new HttpRequest

// 每个实例的拦截器和其他人无关，如果适用全局的实例，我想给每次请求单独配置拦截器就做不到了