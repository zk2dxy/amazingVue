import config from '@/assets/config/env-config.json'
import axios from 'axios'

export const dictService = {
  getDictByCodes (codes) {
    return axios.get(config.baseUrl.common + 'dict/code', {
      params: {
        'codes[]': codes.join(',')
      }
    })
  },
  // 根据code获得树
  getDictTreeByCode (code) {
    return axios.get(config.baseUrl.common + 'dict/tree', {
      params: {
        code
      }
    })
  }
}
