import jwt_decode from "jwt-decode"

function renderJwtAuth(){
    let auth = null
    try {
        auth = jwt_decode(window.JWT_TOKEN)
        auth.jwt = window.JWT_TOKEN
    } catch (error) {
        console.log( error.message )
    }
    return auth
}
function getAuth(){
    return {
        AUTH: renderJwtAuth(),
        jwt: window.JWT_TOKEN,
    }
}

export default {
    AUTH: renderJwtAuth(),
    jwt: window.JWT_TOKEN,
    getAuth: getAuth,
}