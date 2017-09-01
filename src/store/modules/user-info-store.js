import { userInfoService } from '@/api'

const state = {
  userInfo: null
}

const getters = {
  getCurrentUser: state => state.userInfo
}

const mutations = {
  setUserInfo (state, {userInfo}) {
    state.userInfo = userInfo
  }
}

const actions = {
  getCurrentUser ({ commit }) {
    // 返回promise
    const promise = userInfoService.getSysUserInfo()
    promise.then(userInfo => {
      commit('setUserInfo', {userInfo})
    })
    return promise
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
