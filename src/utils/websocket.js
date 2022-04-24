// websocket 可以实现双向通信 长链接 它是h5提供的 可以实时通信
import { getLocal } from '@/utils/local'
class WS {
  constructor (config = {}) {
    this.url = config.url || 'localhost'
    this.port = config.port || 4000
    this.protocol = config.protocol || 'ws'
    // 心跳检测
    this.time = config.time || 30 * 1000
    this.ws = null
  }
  onOpen () {
    // 给服务器发消息，鉴权。 比如后端规定必须是对象，对象里包含两个字段，type data
    // websocket 是基于tcp的 第一次链接靠的是http 但不能修改header
    this.ws.send(JSON.stringify({
      type: 'auth',
      data: getLocal('token')
    }))
  }
  onMessage (e) {
    // e.data 后台发回来的数据
    let { type, data } = JSON.parse(e.data)
    switch (type) {
      case 'noAuth':
        console.log('没有权限')
        break
      case 'heartCheck':
        this.checkServer()
        this.ws.send(JSON.stringify({ type: 'heartCheck' }))
        break
      default:
        console.log('message', data)
    }
  }
  onClose () {
    this.ws.close()
  }
  onError() {
    setTimeout(_ => {
      this.create()
    }, 1000)
  }
  create () {
    this.ws = new WebSocket(`${this.protocol}://${this.url}:${this.port}`)
    this.ws.onopen = this.onOpen
    this.ws.onmessage = this.onMessage
    this.ws.onclose = this.onClose
    this.ws.onerror = this.onError
  }
  checkServer () {
    clearTimeout(this.timer) // 防抖
    // 断线重连
    this.timer = setTimeout(_ => {
      this.onClose()
      this.onError()
    }, this.time + 1000)
  }
}

export default WS