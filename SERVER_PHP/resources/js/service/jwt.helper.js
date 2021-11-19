import jwt_decode from "jwt-decode"
let auth = null
try {
    auth = jwt_decode(window.JWT_TOKEN)
    auth.jwt = window.JWT_TOKEN
} catch (error) {
    console.log( error.message )
}

export default {
    AUTH: auth,
    jwt: window.JWT_TOKEN,
}