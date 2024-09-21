// 封装axios
import axios from 'axios';
import { Session } from '@/utils/cache/index';
const baseUrl = '';
const service = axios.create({
    baseURL: baseUrl, // api的base_url
    timeout: 5000 // 请求超时时间
});

service.interceptors.request.use(
    config => {
        // Do something before request is sent
        config.headers['Content-Type'] = 'multipart/form-data';
        // 请求头携带token
        if (Session.get('token')) {
            config.headers['Authorization'] = 'Bearer ' + Session.get('token');
        }
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;