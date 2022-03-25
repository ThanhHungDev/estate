import jwtHelper from "./jwt.helper"

function setup(instance) {
    instance.interceptors.request.use(
        function (config) {
            console.log("vào setup trước")
            config.headers.Authorization = `Bearer ${jwtHelper.jwt}`
            return config
        },
        function (err) {
            console.log("vào setup error trước")
            return Promise.reject(err)
        }
    )
}

function checkToken(instance) {
    instance.interceptors.response.use(
        response => {
            console.log("vào checkToken")
            // if (response.headers['content-type'].startsWith('application/json')) {
            //     response.data = camelcaseKeys(response.data, { deep: true })
            // }
            return response
        },
        error => {
            console.log("vào error checkToken")
            if (
                error.response.status === 401 &&
                !window.location.pathname.includes('login')
            ){
                let CONFIG = {}
                if( typeof window.CONFIG_APP != 'undefined' ){
                    /// thì sao? 
                    try {
                        CONFIG = JSON.parse(window.CONFIG_APP)
                    } catch (error) {}
                }
                // window.location.href = CONFIG.WEB.LOGOUT
            }
            return Promise.reject(error)
        }
    )
}

export default {
    setup,
    checkToken
}