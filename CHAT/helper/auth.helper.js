

/**
 * This module used for verify jwt token
 * @param { String } access
 */
let verifyTokenAccess = async access => {

    console.log( access )
    
    if( !user ){
        throw new Error("user không tồn tại")
    }
    return user
}



/**
 * tạo string token md5 từ socket id
 * @param { String } socketId là string được truyền vào 
 * @return { String } String kiểu md5
 */
let hashTokenAccess = user => {

    return jwt.sign(user, secret, { expiresIn: '1800s' });
}

module.exports = {
    verifyTokenAccess,
    hashTokenAccess,
}