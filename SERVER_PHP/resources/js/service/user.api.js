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
    verifyPhone(params) {
        console.log("vào verifyPhone", params)
        return Api.patch(CONFIG.WEB.PATCH_VERIFY_PHONE, params)
        .then(res => res.data )
    },
    saveApartment(params ) {
        console.log("vào saveApartment ", params)
        if( !params.edit ){
            return Api.post(CONFIG.API.APARTMENT_STORE, params)
            .then(res => res.data )
        }else{
            return Api.patch(CONFIG.API.APARTMENT_UPDATE + params.edit, params)
            .then(res => res.data )
        }
        
    },
    /**
     * function get product of 
     * @param { String } id 
     * @returns 
     */
    getProductUserById( id ) {
        console.log("vào getProductUserById " + CONFIG.WEB.PRODUCT_SHOW, id)
        return Api.get(CONFIG.API.PRODUCT_SHOW + id )
        .then(res => res.data )
    },
}