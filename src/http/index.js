import axios from 'axios'
import serverConfig from './config/index.js'
import qs from 'qs'
import {ElMessage} from 'element-plus'

// 创建 axios 请求实例
const serviceAxios = axios.create({
  baseURL: serverConfig.baseURL, // 基础请求地址
  timeout: 10000, // 请求超时设置
  withCredentials: false // 跨域请求是否需要携带 cookie
})

// 创建请求拦截
serviceAxios.interceptors.request.use(
  (config) => {
    // 如果开启 token 认证
    if (serverConfig.useTokenAuthorization) {
      config.headers['Authorization'] = localStorage.getItem('token') // 请求头携带 token
    }
    // 设置请求头
    if (!config.headers['content-type']) {
      // 如果没有设置请求头
      if (config.method === 'post') {
        config.headers['content-type'] = 'application/x-www-form-urlencoded' // post 请求
        config.data = qs.stringify(config.data) // 序列化,比如表单数据
      } else {
        config.headers['content-type'] = 'application/json' // 默认类型
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error).then(r => {})
  }
)

// 创建响应拦截
serviceAxios.interceptors.response.use(
  (res) => {
    const data = res.data
    // 处理自己的业务逻辑，比如判断 token 是否过期等等
    // 代码块

    return data
  },
  (error) => {
    ElMessage.error(error.response.data.message)
  }
)
export default serviceAxios
