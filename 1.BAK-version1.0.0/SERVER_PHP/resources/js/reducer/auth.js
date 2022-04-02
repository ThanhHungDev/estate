import TYPE from "../action/type";
import jwtHelper from "../service/jwt.helper"

export default function (state = { ... jwtHelper.AUTH, JWT: jwtHelper.jwt }, action) {
    switch (action.type) {
        case TYPE.AUTH_SETTER:
            return action.payload
        default:
            return state
    }
}