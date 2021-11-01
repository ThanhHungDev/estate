///////////////////////////////////////////////////////////////
// define variable global user online /////////////////////////
///////////////////////////////////////////////////////////////
var USER_ONLINES = []
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
const Comment = require("./models/comment.model")


const CONFIG = require("./config")
const io = require( "socket.io" )()
const authMiddleware = require("./middlewares/jwt.middleware")
const USER = require("./models/user.model")
const RESPONSE = require("./helpers/response.library")

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
            code   : RESPONSE.HTTP_UNAUTHORIZED,
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
            code   : RESPONSE.HTTP_FORBIDDEN,
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

    // // Calls the middleware on every event
    // socket.use((packet, next) => {
    //     const event = packet[0];
    //     const data = packet.slice(1);
        
    //     if (/* should run event */) {
    //     next();
    //     } else {
    //     next(new Error('Failed to emit the event.'));
    //     }
    // });

    console.log("have connect: " + socket.id )
    /// set user online active false
    const { jwt } = socket
    USER_ONLINES.push({ id: jwt.id, email: jwt.email, socketId : socket.id, active: false })
    io.USER_ONLINES = USER_ONLINES
        
    socket
    .on( CONFIG.EVENT.DISCONNECT, async function () {

        console.log( "disconnect set user offline")
        USER_ONLINES = USER_ONLINES.filter(item => item.socketId != socket.id )
        io.USER_ONLINES = USER_ONLINES
        socket.leaveAll()
    })
    .on( CONFIG.EVENT.JOIN__COMMENT, async data => {
        // USER_ONLINES.map( user => {}user.socketId == socket.id ? { ...})
        const { inkey } = data
        const { jwt } = socket
        socket.join( inkey )
        const response = {
            code: RESPONSE.HTTP_OK,
            data: jwt.id
        }
        io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__JOIN__COMMENT, response )
        return;
    })
    .on( CONFIG.EVENT.ADD__COMMENT, async data => {
        // USER_ONLINES.map( user => {}user.socketId == socket.id ? { ...})
        const { inkey, parent } = data
        const { jwt } = socket
        const user = new USER(jwt)
        
        try {
            /// tìm lại cái parent
            let commentParent
            if( !!parent ){
                commentParent = await Comment.findById(parent) /// giống y chang findOne
                if( !commentParent ) throw new Error("không tồn tại _id mongoose trong hệ thống")
            }

            const comment = new Comment(data)
            /// add more properti
            comment.user  = jwt.id
            comment.level = (!!parent) | 0
            comment.like = []

            /// lưu trữ lại comment
            await comment.save()
            
            //// có parent thật thì chỉ cần làm động tác sau
            if( !!commentParent ){
                // commentParent.childrens.unshift(comment)
                commentParent.childrens.push(comment)
                /// thực hiện update 
                await commentParent.save()
            }
            
            /// response 
            const response = {
                code   : RESPONSE.HTTP_OK,
                data   : { ...comment.toResources(), user: { ... user.toJSONFor() }, parent },
                old    : data,
                message: "socket add comment thành công"
            }
            io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__ADD__COMMENT, response )
            return
        } catch (error) {
            /// response 
            const response = {
                code   : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
                error  : error,
                old    : data,
                message: "socket add comment không thành công"
            }
            io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__ADD__COMMENT, response )
            return
        }
    })

    

    //// 
    .on( CONFIG.EVENT.LIKE__COMMENT, async data => {
        
        const { _id, inkey } = data
        const { jwt } = socket
        
        try {
            /// tìm lại cái comment
            const comment = await Comment.findById(_id) /// giống y chang findOne
            const index = comment.like.findIndex(c => c.user == jwt.id )
            const likes = [ ...comment.like ]
            if( index == -1 ){
                likes.push({ 
                    user: jwt.id,
                    date: Date.now,
                })
            }else{
                likes.splice(index,1)
            }
            comment.like = [ ... likes ]
            /// lưu trữ lại comment
            await comment.save()
            /// response lại comment
            const response = {
                code   : RESPONSE.HTTP_OK,
                data   : { ...comment.toResources() },
                old    : data,
                message: "socket like comment thành công"
            }
            io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__LIKE__COMMENT, response )
            return
        } catch (error) {
            /// response 
            const response = {
                code   : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
                error  : error,
                old    : data,
                message: "socket like comment không thành công"
            }
            io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__LIKE__COMMENT, response )
            return
        }
    })
})
// end of socket.io logic

module.exports = io;