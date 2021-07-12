const jwt  = require('jsonwebtoken')

const secret = process.env.SECRET || 'jsonwebtoken-secret'

/**
 * This module used for verify jwt token
 * @param { String } access
 */
let verifyTokenAccess = async access => {

    console.log( access )
    /// get token user online and get all channel user can chat
    let user = await jwt.verify( access, secret )

    //// check token is existed
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