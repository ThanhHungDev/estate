import axios from 'axios'

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

export default {
    uploadFile(data) {
        
        return Api.post( CONFIG.API.API_UPLOAD_FILE, data)
        .then(res => res.data )
    },
}