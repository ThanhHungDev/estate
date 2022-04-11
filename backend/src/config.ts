import * as dotenv from "dotenv"
dotenv.config()

export const local      = process.env.ASSET_REALTIME,
      local_ip   = process.env.ASSET_REALTIME_IP,
      local_port = process.env.ASSET_REALTIME_PORT

export const SERVER = {
    PORT     : local_port,
    DOMAIN   : local,
    IP       : local_ip
}
export const database = {
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
}

export const TimeExpireAccessToken = 20 * 60 * 60,
       salt                        = 5,
       IS_ENVIROMENT_PRODUCT       = true,
       CORS_API                    = process.env.APP_ENV == 'local' ? '*' : '*',     // : process.env.ASSET_PHP_URL,
       CORS_IO                     = process.env.APP_ENV == 'local' ? '*:*' : '*:*'  /// : process.env.ASSET_PHP_URL + ":*",