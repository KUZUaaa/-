// 请求模块

import axios from 'axios'
import store from '@/store';

const request = axios.create({
    baseURL: 'http://127.0.0.1:3007' //基地址
})

// 请求拦截器
request.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    const { user } = store.state
    if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default request