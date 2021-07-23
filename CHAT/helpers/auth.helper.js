require('dotenv').config()
const jwt    = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'jsonwebtoken-secret' // mình có dùng dotenv 


let hashTokenAccess = async user => {

    return jwt.sign(user, secret, { expiresIn: '1800s' })
}
module.exports = {
    hashTokenAccess
}
