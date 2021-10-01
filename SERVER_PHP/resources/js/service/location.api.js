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
        timeout: 10000 // request timeout/ là thời gian lớn nhất để chờ là 10s 
    })


export default {
    getProvinces() {
        console.log("vào getProvinces")
        return Api.get(CONFIG.API.PROVINCES)
        .then(res => res.data )
    },
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