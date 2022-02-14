import axios from 'axios'
import interceptors from './api.middleware'
import errorHelper from "../service/error.helper"
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
    sendCode(phone, capcha) {
        
        const params = {
            phone: phone,
            'g-recaptcha-response': capcha
        }
        console.log(`vào sendCode `, params)
        return Api.post(CONFIG.WEB.SEND_CODE_SMS, params)
        .then(res => res.data )
    },
    verifyPhone(params) {
        console.log("vào verifyPhone", params)
        return Api.patch(CONFIG.WEB.PATCH_VERIFY_PHONE, params)
        .then(res => res.data )
    },
    saveApartment(params ) {
        console.log("vào saveApartment ", params)
        if( !params.edit ){
            return Api.post(CONFIG.API.PRODUCT_STORE, params)
            .then(res => res.data )
        }else{
            return Api.patch(CONFIG.API.PRODUCT_UPDATE + params.edit, params)
            .then(res => res.data )
        }  
    },
    saveArticleDefault(params ) {
        console.log("vào saveArticleDefault ", params)
        let caller = null
        if(params.id ){
            caller = Api.patch(CONFIG.API.ARTICLE_UPDATE + params.id, params)
        }else{
            caller = Api.post(CONFIG.API.ARTICLE_STORE, params)
        }
        return caller
        .then(res => res.data )
        .catch(error => {
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
                return error.response
            }
            return errorHelper.internalServerError(error.message)
        })
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
        .catch(error => {
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
                return error.response
            }
            return renderInternalServerErr
        })
    },
}