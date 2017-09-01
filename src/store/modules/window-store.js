const state = {
  windowHeight: window.innerHeight,
  windowWidth: window.innerWidth
}

const getters = {
  windowSize: state => {
    return {
      width: state.windowWidth,
      height: state.windowHeight
    }
  }
}

const mutations = {
  refresh (state) {
    state.windowHeight = window.innerHeight
    state.windowWidth = window.innerWidth
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
