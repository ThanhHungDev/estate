const io = require( "socket.io" )();
const authMiddleware = require("./middlewares/jwt.middleware")
const eventIO = {
    io: io
};

// Add your socket.io logic here!
io
.use(async (socket, next) => {
    console.log('middleware running...');

    const { query } = socket.handshake
    const { token } = query
    if (!token){
        console.log("have error")
        // either handle it
        // socket.disconnect(true)
        let err  = {
            code   : 401,
            type   : 'token',
            message: 'Authentication error'
        }
        const error = new Error(err.message)
        error.data = err // additional detail
        return next(error)
    }
    const auth = await authMiddleware.isAuthSocket(token)
    if( !auth ){
        
        let err  = {
            code   : 403,
            type   : 'authentication_error',
            message: 'Authentication error'
        }
        const error = new Error(err.message)
        error.data = err // additional detail
        return next(error)
    }
    socket.jwt = auth
    next()
})
.on( "connection", socket => {

    console.log("have connect: " + socket.id, socket.jwt )
        
    socket.on( 'disconnect', async function () {

        console.log( "disconnect set user offline")
        socket.leaveAll()
    })
})

// end of socket.io logic

module.exports = eventIO;