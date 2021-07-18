import jwt_decode from "jwt-decode"

const jwt = localStorage.getItem('jwt')

export default {
    AUTH: jwt_decode(jwt),
    jwt: jwt,
}