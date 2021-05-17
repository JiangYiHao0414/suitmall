import axios from 'axios';

// 因为axios实例的底层最终返回的就是Promise,所以可以直接返回axios实例
export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 配置请求和响应拦截
  instance.interceptors.request.use(config => {
    console.log('来到request拦截的success中')
    return config;
  },err => {
    console.log('来到request拦截的failure中')
  })

  instance.interceptors.response.use(response => {
    console.log('来到response拦截的success中')
    return response.data;
  },err =>{
    console.log('来到response拦截的failure中')
  })

  // 发送真正的网络请求
  return instance(config)
}
