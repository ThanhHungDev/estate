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
        
        let err  = new Error('Authentication error')
        err.code = 401
        err.type = 'token'
        err.message = 'Authentication error'
        return next(err)
    }
    const auth = await authMiddleware.isAuthSocket(token)
    if( !auth ){
        
        let err  = new Error('Authentication error')
        err.code = 403
        err.type = 'authentication_error'
        err.message = 'Authentication error'
        return next(err)
    }
    socket.jwt = auth
    next();
})
.on( "connection", socket => {

    console.log("have connect: " + socket.id, socket.jwt )
        
    socket.on( 'disconnect', async function () {

        console.log( "disconnect set user offline")
        socket.leaveAll()
    })
});
// end of socket.io logic

module.exports = eventIO;