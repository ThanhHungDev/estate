import TYPE from "./type"
export function setterAuth(auth){
    console.log(auth , " setterAuth ")
    return {
        type : TYPE.AUTH_SETTER,
        payload : auth
    }
}
