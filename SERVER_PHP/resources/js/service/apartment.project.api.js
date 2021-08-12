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
    getProjects(query) {
        console.log("vào getProjects", query)
        return Api.get(`${CONFIG.API.APARTMENT_PROJECTS}?q=${query}&limit=5`)
        .then(res => res.data )
    },
}