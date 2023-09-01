import axios from 'axios'
import { useUserStore } from '@/stores'
import router from '@/router'
import baseUrl from '@/api/baseUrl'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL: baseUrl,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 3. 摘取核心响应数据
    if (res.data.code === 0) {
      return res
    }
    // TODO 4. 处理业务失败
    alert(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5. 处理401错误
    // 特殊情况 401 权限不足 或 token过期 => 拦截到登录
    if (err.response?.status === 401) {
      // router.push('/demo')
    }
    // 默认情况
    alert(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
