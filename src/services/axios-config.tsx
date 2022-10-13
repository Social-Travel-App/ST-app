import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  headers: {
    'Context-Type': 'application/json',
  },
})

axiosConfig.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    console.log('request error ', error)
    return Promise.reject(error)
  }
)

axiosConfig.interceptors.response.use(
  function (res) {
    return res
  },
  function (error) {
    console.log('response error ', error)
    return Promise.reject(error)
  }
)

export default axiosConfig
