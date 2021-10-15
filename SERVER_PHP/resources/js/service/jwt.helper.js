import jwt_decode from "jwt-decode"
let auth = null
try {
    auth = jwt_decode(JWT_TOKEN)
    auth.jwt = JWT_TOKEN
} catch (error) {
    console.log( error.message )
}

export default {
    AUTH: auth,
    jwt: JWT_TOKEN,
}