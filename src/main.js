import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'

// 样式引用
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

import './utils/request'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
