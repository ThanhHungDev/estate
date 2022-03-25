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
    getProjects(query) {
        console.log("vào getProjects", query)
        return Api.get(`${CONFIG.API.APARTMENT_PROJECTS}?q=${query}&limit=5`)
        .then(res => res.data )
    },
    getProject(id) {
        console.log("vào getProject", id)
        return Api.get(`${CONFIG.API.APARTMENT_PROJECT_DETAIL}/${id}`)
        .then(res => res.data )
    },
}