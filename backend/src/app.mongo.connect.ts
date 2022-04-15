import mongoose from "mongoose"
import * as Config from "./config"

mongoose.set('debug', true)
mongoose.set('useFindAndModify', true)

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('Mongoose default connected ' + Config.database.mongodb)
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
    myConnection : () => {
        console.log(`Mongoose connecting ${Config.database.mongodb}`)
        /// connect mongodb
        mongoose.connect(Config.database.mongodb || '', 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true,
                // useNewUrlParser: true,
            }
        )
    }
}