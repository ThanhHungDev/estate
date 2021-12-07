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
interceptors.checkToken(Api)

export default {
    getComment(params) {
        console.log("vào getComment", params)
        return Api.get(`${CONFIG.REALTIME.GET_COMMENT}${params.slug}`)
        .then(res => res.data )
    },
}