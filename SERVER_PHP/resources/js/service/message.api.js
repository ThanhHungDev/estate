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
    getMessageUser( params ) {
        console.log("vào getMessageUser", params)
        // const queryString = new URLSearchParams(params).toString();
        return Api.get(`${CONFIG.REALTIME.GET_MESSAGE}${params.id}&channelid=${params.channelid}&next=${params.next}`)
        .then(res => res.data )
    },
    getInitMessage( params ) {
        console.log("vào getInitMessage", params)
        return Api.get(`${CONFIG.REALTIME.GET_INIT_MESSAGE}${params.id}`)
        .then(res => res.data )
    },
}