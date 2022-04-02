import TYPE from "./type"
export function setterAuth(auth){
    console.log(auth , " setterAuth ")
    return {
        type : TYPE.AUTH_SETTER,
        payload : auth
    }
}
export function setterLocation( locs, _key = 'province'){
    console.log(locs , " setterLocation ")
    return {
        type : TYPE.LOCATION_SETTER,
        payload : { key: _key, data: locs }
    }
}
