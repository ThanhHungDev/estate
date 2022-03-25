
import TYPE from "../action/type"
const LOCATION = {}
if( typeof window.DISTRICT != 'undefined' || typeof window.COMMUNES != 'undefined' ){
    /// thì sao? 
    try {
        LOCATION.district = JSON.parse(window.DISTRICT)
        LOCATION.commune = JSON.parse(window.COMMUNES)
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