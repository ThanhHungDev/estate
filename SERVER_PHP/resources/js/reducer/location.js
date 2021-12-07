
import TYPE from "../action/type"
let LOCATION = {}
if( typeof window.PROVINCES != 'undefined' ){
    /// thì sao? 
    try {
        LOCATION.province = JSON.parse(window.PROVINCES)
    } catch (error) {}
}


export default function (state = LOCATION, action) {
    switch (action.type) {
        case TYPE.LOCATION_SETTER:
            return { 
                ...state, 
                [action.payload.key]: action.payload.data, 
            }
        default:
            return state
    }
}