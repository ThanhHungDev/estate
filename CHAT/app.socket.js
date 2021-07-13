const io = require( "socket.io" )();
const authMiddleware = require("./middleware/jwt.middleware")
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
        next(new Error('Authentication error'));
    }
    const auth = await authMiddleware.isAuthSocket(token)
    if( !auth ){
        next(new Error('Authentication error'));
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