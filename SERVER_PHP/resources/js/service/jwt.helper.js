import jwt_decode from "jwt-decode"

const jwt = localStorage.getItem('jwt')

let auth = null
try {
    
    auth = jwt_decode(jwt)
} catch (error) {
    console.log( error.message )
}

export default {
    AUTH: auth,
    jwt: jwt,
}