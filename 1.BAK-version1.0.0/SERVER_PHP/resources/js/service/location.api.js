import axios from 'axios'

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


export default {
    getDistricts() {
        console.log("vào getDistricts")
        return Api.get(CONFIG.API.DISTRICTS)
        .then(res => res.data )
    },
    getCommunes() {
        console.log("vào getCommunes")
        return Api.get(CONFIG.API.COMMUNES)
        .then(res => res.data )
    },
    getLocations() {
        console.log("vào getLocations")
        return Api.get(CONFIG.API.LOCATIONS)
        .then(res => res.data )
    },
}