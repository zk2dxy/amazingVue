// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './store'
import utils from './utils'
import './assets/themes/default/css/reset.css'
import './fonts/sceoIcon.styl'
import config from './assets/config/env-config.json'

Vue.config.productionTip = false

Vue.prototype.CONFIG = config
Vue.prototype.UTILS = utils

Vue.use(ElementUI)

// window窗口变化，记录窗口大小
window.onresize = () => {
  store.commit('windowStore/refresh')
}

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App),
  components: {App}
})

window.vue = vue
