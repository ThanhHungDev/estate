import axios from 'axios'
import interceptors from './api.middleware'

let CONFIG = {}
if( typeof window.CONFIG_APP != 'undefined' ){
    /// thì sao? 
    try {
        CONFIG = JSON.parse(window.CONFIG_APP)
    } catch (error) {}
}

const Api =
    axios.create({
        baseURL: window.location.origin,
        withCredentials: false,
        headers: {
            Accept: 'application/json', 'Content-Type': 'application/json'
        },
        timeout: CONFIG.CLIENT.TIMEOUT // request timeout
    })

interceptors.setup(Api)

export default {
    loginDefault(params) {
        console.log("vào loginDefault", params)
        return Api.post(CONFIG.WEB.POST_LOGIN, params)
        .then(res => res.data )
    },
    loginFast(params) {
        console.log("vào loginFast", params)
        return Api.post(CONFIG.WEB.POST_LOGIN_FAST, params)
        .then(res => res.data )
    },
}