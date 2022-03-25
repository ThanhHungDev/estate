'use strict'
require('dotenv').config()

var local      = process.env.ASSET_CRAWLER,
    local_ip   = process.env.ASSET_CRAWLER_IP,
    local_port = process.env.ASSET_CRAWLER_PORT

var CONFIG = {
    SERVER : {
        PORT     : local_port,
        DOMAIN   : local,
        IP       : local_ip,
        PROTOCOL: function(){
            if( local_port == 443 ){
                return "https://"
            }
            return  "http://"
        }, 
        ASSET : () => {
            let port_url = ''
            let protocol = ''
            if( local_port == 443 ){
                protocol = "https://"
            }else{
                protocol = "http://"
                port_url = ':'+ local_port
            }

            return protocol + local + port_url;
        }
    },
    database : {
        
        postgre : {
            type         : process.env.DB_TYPE,
            username     : process.env.DB_USER,
            password     : process.env.DB_PASS,
            database_name: process.env.DB_NAME,
            host         : process.env.DB_HOST,
            dialect      : 'postgres',
            logging      : false
        },
        mongodb : process.env.DB_MONGO,
    },
    TimeExpireAccessToken : 20 * 60 * 60,
    salt : 5,
    IS_ENVIROMENT_PRODUCT : true,
    CORS_API:  process.env.APP_ENV == 'local' ? '*' : '*', // : process.env.ASSET_PHP_URL,
    CORS_IO:  process.env.APP_ENV == 'local' ? '*:*' : '*:*',/// : process.env.ASSET_PHP_URL + ":*",
    
    SIZES: {
        icon: [ 100, 200 ],
        avatar: [ 200, 200 ],
    },
    IMAGE_TYPE: {
        fill: 'fill',
        fit: 'fit'
    },
    MAX_LENGTH_COMMENT: 2000,
}
module.exports = CONFIG;