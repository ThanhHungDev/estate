import TYPE from "./type"
import jwtHelper from "../service/jwt.helper"
export function setterJwt(jwt){
    const auth = jwtHelper.getAuth()
    console.log(jwt , auth)
    return {
        type : TYPE.AUTH_SETTER,
        payload : auth
    }
}