// import TYPE from "../action/type.js"

let CONFIG = {}
if( typeof window.CONFIG_APP != 'undefined' ){
    /// thì sao? 
    try {
        CONFIG = JSON.parse(window.CONFIG_APP)
    } catch (error) {}
    const { protocol, port, hostname, pathname, hash, href } = window.location
    // const fullpath = protocol + '//' + hostname + pathname + hash === href
    CONFIG.LOCATION = { protocol, port, hostname, pathname, hash, href }
    CONFIG.REACT_ASSET = protocol + '//' + hostname + ( port && port != 80 ? `:${port}` : '' ) + CONFIG.WEB.USER_POST
}

export default function (state = CONFIG, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}