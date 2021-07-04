'use strict'
require('dotenv').config()

var CONFIG = {
    
    IS_ENVIROMENT_PRODUCT : true,
    CORS_API:  process.env.APP_ENV == 'local' ? '*' : process.env.ASSET_PHP_URL,
    CORS_IO:  process.env.APP_ENV == 'local' ? '*:*' : process.env.ASSET_PHP_URL + ":*",
    
    EVENT : {
        CONNECTTION: 'connection',
        DISCONNECT : 'disconnect',
    },
}
module.exports = CONFIG;