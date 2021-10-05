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
        timeout: CONFIG.CLIENT.TIMEOUT // request timeout
    })

interceptors.setup(Api)
interceptors.checkToken(Api)

export default {
    verifyPhone(params) {
        console.log("vào verifyPhone", params)
        return Api.patch(CONFIG.WEB.PATCH_VERIFY_PHONE, params)
        .then(res => res.data )
    },
    saveApartment(params) {
        console.log("vào saveApartment " + CONFIG.WEB.STORE_APARTMENT, params)
        return Api.post(CONFIG.WEB.STORE_APARTMENT, params)
        .then(res => res.data )
    },
    /**
     * function get product of 
     * @param { String } id 
     * @returns 
     */
    getProductUserById( id ) {
        console.log("vào getProductUserById " + CONFIG.WEB.STORE_APARTMENT, id)
        return Api.get(CONFIG.API.PRODUCT_SHOW + id )
        .then(res => res.data )
    },
}