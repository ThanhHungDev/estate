import jwt_decode from "jwt-decode"

let auth = null
if( typeof jwt != 'undefined' ){
    auth = jwt_decode(jwt)
}

export default function (state = auth, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}