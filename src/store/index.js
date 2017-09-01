import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const _opt = {
  modules: {},
  // 严格模式
  strict: process.env.NODE_ENV === 'development'
}

export default new Vuex.Store(_opt)
