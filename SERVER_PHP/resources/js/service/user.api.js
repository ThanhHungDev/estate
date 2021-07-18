import axios from 'axios'
import interceptors from './api.middleware'

let CONFIG = {}
if( typeof CONFIG_APP != 'undefined' ){
    /// thì sao? 
    CONFIG = JSON.parse(CONFIG_APP)
}

const Api =
    axios.create({
        baseURL: window.location.origin,
        withCredentials: false,
        headers: {
            Accept: 'application/json', 'Content-Type': 'application/json'
        },
        timeout: 5000 // request timeout
    })

interceptors.setup(Api)
interceptors.checkToken(Api)

export default {
    verifyPhone(params) {
        console.log("vào verifyPhone", params)
        return Api.patch(CONFIG.WEB.PATCH_VERIFY_PHONE, params)
        .then(res => res.data )
    },
}