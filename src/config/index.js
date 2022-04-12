export default {
  // 开发和打包是默认的两个环境
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
}