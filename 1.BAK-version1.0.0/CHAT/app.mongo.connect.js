const mongoose = require("mongoose")

// mongoose.set('debug', true)
mongoose.set('useFindAndModify', true)

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connected ' + process.env.DB_MONGO)
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err)
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected')
});

// When the connection is open
mongoose.connection.on('open', function () {
    console.log('Mongoose default connection is open')
    console.log('===================================')
})


/**
 * hàm `myConnection` để file thực thi app.js hoặc bin/www thực thi connection
 */
module.exports.myConnection = () => {
    console.log(`Mongoose connecting ${process.env.DB_MONGO}`)
    /// connect mongodb
    mongoose.connect(process.env.DB_MONGO, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        }
    )
}