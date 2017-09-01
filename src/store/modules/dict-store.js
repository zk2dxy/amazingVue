import { dictService } from '@/api'
import Vue from 'vue'

const state = {
  // 所有数据字典
  dicts: {

  },
  // 所有树形数据字典
  trees: {

  }
}

const getters = {
  getAllDicts: state => state.dicts,
  getAllTrees: state => state.trees
}

const mutations = {
  addDictToCache (state, {data}) {
    for (let index in data) {
      Vue.set(state.dicts, index, data[index])
    }
  },
  addDictTreeToCache (state, {code, data}) {
    Vue.set(state.trees, code, data)
  }
}

const actions = {
  // 根据一组code查找下级数据字典，并缓存
  getDictByCodes ({state, commit}, codes) {
    return new Promise((resolve, reject) => {
      let codesToGet = []
      let result = {}
      for (let index = 0; index < codes.length; index++) {
        if (!state.dicts[codes[index]]) {
          codesToGet.push(codes[index])
        } else {
          result[codes[index]] = state.dicts[codes[index]]
        }
      }
      // 没有新的数据字典需要获取
      if (!codesToGet.length) {
        resolve(result)
      } else {
        dictService.getDictByCodes(codesToGet).then(data => {
          commit('addDictToCache', {data})
          for (let index in data) {
            result[index] = data[index]
          }
          resolve(result)
        }).catch(err => {
          reject(err)
        })
      }
    })
  },
  // 查找树形字典
  getDictTreeByCode ({state, commit}, code) {
    return new Promise((resolve, reject) => {
      // 判断有没有树形节点
      if (state.trees[code]) {
        resolve(state.trees[code])
      } else {
        // 远端查找
        dictService.getDictTreeByCode(code).then(data => {
          commit('addDictTreeToCache', {code, data})
          resolve(data)
        }).catch(err => {
          reject(err)
        })
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
