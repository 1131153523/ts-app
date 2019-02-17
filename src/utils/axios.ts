import axios, { AxiosInstance } from 'axios'
import {message} from 'antd'

const Axios: AxiosInstance = axios.create({
    baseURL: '/',
    timeout: 5000,
    responseType: 'json',
    withCredentials: true,  // 支持跨域携带cookie
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    },
})

Axios.interceptors.request.use(config => {
    // config.headers.Authorization = cookie中的token
    // 服务端响应消息头需要设置，header("Access-Control-Allow-Credentials: true");  否则无法正常响应
    return config
}, error => {
    message.error('请求错误', 2)
    return Promise.reject(error)
})
Axios.interceptors.response.use(config => {
    // config.headers.Authorization = cookie中的token
    // 服务端响应消息头需要设置，header("Access-Control-Allow-Credentials: true");  否则无法正常响应
    return config
}, error => {
    message.error('请求错误', 2)
    return Promise.reject(error)
})


export default Axios