///////////////////////////////////////////////////////////////
// define variable global user online /////////////////////////
///////////////////////////////////////////////////////////////
var USER_ONLINES = []
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

const CONFIG = require("./config")
const io = require( "socket.io" )();
const authMiddleware = require("./middlewares/jwt.middleware")

// Add your socket.io logic here!
io
.use(async (socket, next) => {
    console.log('middleware running...')

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
.on( CONFIG.EVENT.CONNECTION, socket => {

    console.log("have connect: " + socket.id )
    /// set user online active false
    const { jwt } = socket
    USER_ONLINES.push({ id: jwt.id, email: jwt.email, socketId : socket.id, active: false })
    io.USER_ONLINES = USER_ONLINES
        
    socket.on( CONFIG.EVENT.DISCONNECT, async function () {

        console.log( "disconnect set user offline")
        USER_ONLINES = USER_ONLINES.filter(item => item.socketId != socket.id )
        io.USER_ONLINES = USER_ONLINES
        socket.leaveAll()
    })
    socket.on( CONFIG.EVENT.JOIN__COMMENT, async data => {
        // USER_ONLINES.map( user => {}user.socketId == socket.id ? { ...})
        const { inkey } = data
        socket.join( inkey )
    })
})
// end of socket.io logic

module.exports = io;