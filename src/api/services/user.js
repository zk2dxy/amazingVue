import config from '@/assets/config/env-config.json'
import axios from 'axios'

export const userService = {
  // 查询用户列表
  queryUserList (queryData) {
    return axios.get(`${config.baseUrl.base}/users`, {
      params: queryData
    })
  }
}
