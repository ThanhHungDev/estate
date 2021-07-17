// import TYPE from "../action/type.js"

let CONFIG = {}
if( typeof CONFIG_APP != 'undefined' ){
    /// thì sao? 
    CONFIG = JSON.parse(CONFIG_APP)
}

export default function (state = CONFIG, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}