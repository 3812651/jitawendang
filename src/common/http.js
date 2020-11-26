import axios from 'axios'
import Qs from 'qs'
import VIEWUI from 'view-design';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
let baseUrl

process.env.NODE_ENV === 'development' ? baseUrl = "http://localhost:3000/" : baseUrl = "https://www.yunduanzhishi.xyz:3001/"
    // axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = baseUrl


//报错控制:wait时间后才能触发下一次请求，wait时间内点击无效

function deb(fn, wait) {
    let timer = null
    let flg = true
    return function() {
        clearTimeout(timer)
        if (flg) {
            fn.apply(this, arguments)
            flg = false
        }
        timer = setTimeout(() => {
            flg = true
        }, wait)
    }
}
const error = deb(msg => {
        VIEWUI.Message.error(msg)
    }, 2000)
    // axios 请求拦截
axios.interceptors.request.use(config => {
            // 展示进度条
            NProgress.start()
            config.headers.Authorization = window.localStorage.getItem('token')
            return config
        },
        err => {
            return Promise.reject(err)
        },
    )
    // axios 响应拦截
axios.interceptors.response.use(res => {
            // 隐藏进度条
            NProgress.done()
            if (res.data.err_code == '0') {
                return res.data
            } else {
                error(res.data.msg)
                return false
            }
        },
        err => {
            error('服务器异常，请稍后再试')
            return Promise.reject(err);
        })
    //qs.stringify() 将对象 序列化成URL的形式，以&进行拼接
    //let a = {name:'zhangsan',age:10};
    //qs.stringify(a)
    // 'name=zhangsan&age=10'
export const post = (data) => {
    return axios({
        url: data.url,
        method: 'post',
        data: Qs.stringify(data.data)
    })
}
export const postStr = (data) => {
    return axios({
        url: data.url,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: data.data
    })
}
export const get = (data) => {
    return axios({
        url: data.url,
        params: data.data,
        method: 'get'
    })
}
export const del = (data) => {
    return axios({
        url: data.url,
        params: data.data,
        method: 'delete'
    })
}