import * as dotenv from "dotenv"
dotenv.config()

import { EnvObjectOption } from "./types/config"

const postgre : EnvObjectOption = {
    development: {
        type         : process.env.DB_TYPE,
        username     : process.env.DB_USER,
        password     : process.env.DB_PASS,
        database_name: process.env.DB_NAME,
        host         : process.env.DB_HOST,
        dialect      : 'postgres',
        logging      : false
    },
    test: {
        type         : process.env.DB_TEST_TYPE,
        username     : process.env.DB_TEST_USER,
        password     : process.env.DB_TEST_PASS,
        database_name: process.env.DB_TEST_NAME,
        host         : process.env.DB_TEST_HOST,
        dialect      : 'postgres',
        logging      : false
    }
}
const mongoURI: EnvObjectOption = {
    development: process.env.DB_MONGO || '',
    test: process.env.DB_MONGO_TEST || '',
}

export const database = {
    postgre,
    mongoURI,
}

export const CORS_API : EnvObjectOption = {
    development: '*',
    test: '*',
}
export const CORS_IO : EnvObjectOption = {
    development: '*:*',
    test: '*:*',
}