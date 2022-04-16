#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "./app"
import Debug from "debug"
import http from "http"
import * as Config from "./config"
import dotenv from "dotenv"
import dbConnect from "./app.mongo.connect"
// import eventSocketIO from "./app.socket"

dotenv.config()

const debug = Debug("service:backend")

// const initIndex = require('../routes/index'),
//       initUsers = require('../routes/users'),
//       initAPIs  = require("../routes/api");


/**
 * Get port from environment and store in Express.
 */
const PORT = normalizePort(process.env.ASSET_REALTIME_PORT || '8081')
app.set('port', PORT)

/**
 * Create HTTP server.
 */
// console.log(Config.CORS_IO)
const server = http.createServer(app)
// eventIO.attach(server, {
// origins: CONFIG.CORS_IO
// })



// // error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.status = err.status;
    res.locals.stack = err.stack;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    if (req.isApi || /application\/json;/.test(req.get('accept'))) {
        return res.status(err.status || 500).json(res.locals)
    }
    // render the error page
    res.status(err.status || 500);
    return res.render('error')

});

// server.listen(port); /// comment lại 
server.listen(PORT, () => {

    console.log(`server run: http://localhost:${PORT}`)
    dbConnect.myConnection(app)
})

server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val : string ) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        // named pipe
        return val
    }

    if (port >= 0) {
        // port number
        return port
    }

    return 3000
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof PORT === 'string'
        ? 'Pipe ' + PORT
        : 'Port ' + PORT

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() { 
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr?.port
    debug('Listening on ' + bind)
}