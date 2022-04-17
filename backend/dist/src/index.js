#!/usr/bin/env node
"use strict";
/**
 * Module dependencies.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const debug_1 = __importDefault(require("debug"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_mongo_connect_1 = __importDefault(require("./app.mongo.connect"));
// import eventSocketIO from "./app.socket"
dotenv_1.default.config();
const debug = (0, debug_1.default)("service:backend");
// const initIndex = require('../routes/index'),
//       initUsers = require('../routes/users'),
//       initAPIs  = require("../routes/api");
/**
 * Get port from environment and store in Express.
 */
const PORT = normalizePort(process.env.ASSET_REALTIME_PORT || '8081');
app_1.default.set('port', PORT);
/**
 * Create HTTP server.
 */
// console.log(Config.CORS_IO)
const server = http_1.default.createServer(app_1.default);
// eventIO.attach(server, {
// origins: CONFIG.CORS_IO
// })
// // error handler
app_1.default.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.status = err.status;
    res.locals.stack = err.stack;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    if (req.isApi || /application\/json;/.test(req.get('accept'))) {
        return res.status(err.status || 500).json(res.locals);
    }
    // render the error page
    res.status(err.status || 500);
    return res.render('error');
});
// server.listen(port); /// comment lại 
server.listen(PORT, () => {
    console.log(`server run: http://localhost:${PORT}`);
    app_mongo_connect_1.default.myConnection();
});
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return 3000;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string'
        ? 'Pipe ' + PORT
        : 'Port ' + PORT;
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
        : 'port ' + (addr === null || addr === void 0 ? void 0 : addr.port);
    debug('Listening on ' + bind);
}
//# sourceMappingURL=index.js.map