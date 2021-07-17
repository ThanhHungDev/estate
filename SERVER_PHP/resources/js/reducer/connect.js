
import TYPE from "../action/type.js"

export default function (state = false, action) {
    switch (action.type) {
        case TYPE.CONNECT.SHOW:
            return true
        case TYPE.CONNECT.HIDDEN:
            return false
        
        default:
            return state
    }
}