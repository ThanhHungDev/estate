
import TYPE from "../action/type"
let LOCATION = {}
if( typeof PROVINCES != 'undefined' ){
    /// thì sao? 
    LOCATION.province = JSON.parse(PROVINCES)
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