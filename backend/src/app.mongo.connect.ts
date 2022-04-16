import { Express } from "express"
import mongoose from "mongoose"
import * as Config from "./config"
import * as dotenv from "dotenv"
import { EnvObjectOption } from "./types/config"
dotenv.config()

mongoose.set('debug', true)
mongoose.set('useFindAndModify', true)

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
    const env : string = process.env.NODE_ENV || 'development'
    console.log('Mongoose default connected ' + Config.database.mongoURI[env as keyof EnvObjectOption] || '')
});

// If the connection throws an error
mongoose.connection.on('error', (err: any) => {
    console.log('Mongoose default connection error: ' + err)
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected')
});

// When the connection is open
mongoose.connection.on('open', () => {
    console.log('Mongoose default connection is open')
    console.log('===================================')
})


/**
 * hàm `myConnection` để file thực thi app.js hoặc bin/www thực thi connection
 */
export default {
    myConnection : (appExpress: Express) => {
        const env : string = process.env.NODE_ENV || 'development'
        console.log(Config.database.mongoURI)
        console.log(`Mongoose connecting ${Config.database.mongoURI[env as keyof EnvObjectOption] || ''}`)
        /// connect mongodb
        mongoose.connect(Config.database.mongoURI[env as keyof EnvObjectOption] || '', 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true,
                // useNewUrlParser: true,
            }
        )
    }
}