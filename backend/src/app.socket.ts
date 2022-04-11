// import { UserOnline } from "./types/online"

// ///////////////////////////////////////////////////////////////
// // define variable global user online /////////////////////////
// ///////////////////////////////////////////////////////////////
// var USER_ONLINES : UserOnline[] = []
// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////
// const Comment = require("./models/comment.model")
// const Channel = require("./models/channel.model")
// const Message = require("./models/message.model")

// const mongoose = require('mongoose')
// const CONFIG = require("./config")
// const io = require( "socket.io" )()
// const authMiddleware = require("./middlewares/jwt.middleware")
// const USER = require("./models/user.model")
// const RESPONSE = require("./helpers/response.library")
// const messageMiddleware = require('./middlewares/message.middleware')


// // Add your socket.io logic here!
// io
// .use(async (socket: any, next: any ) => {
//     console.log('middleware running...')

//     const { query } = socket.handshake
//     const { token } = query
//     if (!token){
//         console.log("have error")
//         // either handle it
//         // socket.disconnect(true)
//         let err  = {
//             code   : RESPONSE.HTTP_UNAUTHORIZED,
//             type   : 'token',
//             message: 'Authentication error'
//         }
//         const error = new Error(err.message)
//         error.data = err // additional detail
//         return next(error)
//     }
//     const auth = await authMiddleware.isAuthSocket(token)
//     if( !auth ){
        
//         let err  = {
//             code   : RESPONSE.HTTP_FORBIDDEN,
//             type   : 'authentication_error',
//             message: 'Authentication error'
//         }
//         const error = new Error(err.message)
//         error.data = err // additional detail
//         return next(error)
//     }
//     socket.jwt = auth
//     next()
// })
// .on( CONFIG.EVENT.CONNECTION, socket => {

//     // // Calls the middleware on every event
//     // socket.use((packet, next) => {
//     //     const event = packet[0];
//     //     const data = packet.slice(1);
        
//     //     if (/* should run event */) {
//     //     next();
//     //     } else {
//     //     next(new Error('Failed to emit the event.'));
//     //     }
//     // });

//     console.log("have connect: " + socket.id )
//     /// set user online active false
//     const { jwt } = socket
//     USER_ONLINES.push({ id: jwt.id, email: jwt.email, socketId : socket.id, active: false })
//     io.USER_ONLINES = USER_ONLINES
        
//     socket
//     .on( CONFIG.EVENT.DISCONNECT, async function () {

//         console.log( "disconnect set user offline")
//         const offline = USER_ONLINES.find(item => item.socketId == socket.id )
//         offline.active = false
//         USER_ONLINES = USER_ONLINES.filter(item => item.socketId != socket.id )
//         io.USER_ONLINES = USER_ONLINES
//         socket.leaveAll()
//         /// check is page chat => emit user offline
//         if( socket.isChat ){
//             const { jwt } = socket
//             const channels = await Channel.find({ user: jwt.id })
//             channels.map( channel => {
//                 const response = {
//                     code    : RESPONSE.HTTP_OK,
//                     data    : [ offline ],
//                     message : "socket disconect thành công",
//                     socketid: socket.id
//                 }
//                 io.in(channel.name).emit(CONFIG.EVENT.RESPONSE__JOIN__CHATTING, response )
//             })
//         }
//     })








//     /**
//      * begin Comment 
//      */
//     .on( CONFIG.EVENT.JOIN__COMMENT, async data => {
//         // USER_ONLINES.map( user => {}user.socketId == socket.id ? { ...})
//         const { inkey } = data
//         const { jwt } = socket
//         socket.join( inkey )
//         const response = {
//             code: RESPONSE.HTTP_OK,
//             data: jwt.id
//         }
//         io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__JOIN__COMMENT, response )
//         return;
//     })
//     .on( CONFIG.EVENT.ADD__COMMENT, async data => {
//         // USER_ONLINES.map( user => {}user.socketId == socket.id ? { ...})
//         const { inkey, parent } = data
//         const { jwt } = socket
//         const user = new USER(jwt)
        
//         try {
//             /// tìm lại cái parent
//             let commentParent
//             if( !!parent ){
//                 commentParent = await Comment.findById(parent) /// giống y chang findOne
//                 if( !commentParent ) throw new Error("không tồn tại _id mongoose trong hệ thống")
//             }

//             const comment = new Comment(data)
//             /// add more properti
//             comment.user  = jwt.id
//             comment.level = (!!parent) | 0
//             comment.like = []

//             /// lưu trữ lại comment
//             await comment.save()
            
//             //// có parent thật thì chỉ cần làm động tác sau
//             if( !!commentParent ){
//                 // commentParent.childrens.unshift(comment)
//                 commentParent.childrens.push(comment)
//                 /// thực hiện update 
//                 await commentParent.save()
//             }
            
//             /// response 
//             const response = {
//                 code   : RESPONSE.HTTP_OK,
//                 data   : { ...comment.toResources(), user: { ... user.toJSONFor() }, parent },
//                 old    : data,
//                 message: "socket add comment thành công"
//             }
//             io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__ADD__COMMENT, response )
//             return
//         } catch (error) {
//             /// response 
//             const response = {
//                 code   : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
//                 error  : error,
//                 old    : data,
//                 message: "socket add comment không thành công"
//             }
//             io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__ADD__COMMENT, response )
//             return
//         }
//     })

    

//     //// 
//     .on( CONFIG.EVENT.LIKE__COMMENT, async data => {
        
//         const { _id, inkey } = data
//         const { jwt } = socket
        
//         try {
//             /// tìm lại cái comment
//             const comment = await Comment.findById(_id) /// giống y chang findOne
//             if( !comment ) throw new Error('comment not found')
//             const index = comment.like.findIndex(c => c.user == jwt.id )
//             const likes = [ ...comment.like ]
//             if( index == -1 ){
//                 likes.push({ 
//                     user: jwt.id,
//                     // date: new Date(Date.now()),
//                 })
//             }else{
//                 likes.splice(index,1)
//             }
//             comment.like = [ ... likes ]
//             /// lưu trữ lại comment
//             await comment.save()
//             /// response lại comment
//             const response = {
//                 code   : RESPONSE.HTTP_OK,
//                 data   : { ...comment.toResources() },
//                 old    : data,
//                 message: "socket like comment thành công"
//             }
//             io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__LIKE__COMMENT, response )
//             return
//         } catch (error) {
//             /// response 
//             const response = {
//                 code   : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
//                 error  : error,
//                 old    : data,
//                 message: "socket like comment không thành công"
//             }
//             io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__LIKE__COMMENT, response )
//             return
//         }
//     })


//     //// 
//     .on( CONFIG.EVENT.REPORT__COMMENT, async data => {
        
//         const { _id, inkey, reasons } = data
//         const { jwt } = socket
        
//         try {
//             // const comments = await Comment.find({})
//             // Promise.all(comments.map( comment => {
//             //     comment.like = []
//             //     comment.dislike = []
//             //     return comment.save()
//             // })).then( comments => {
//             //     console.log("success")
//             // })

//             /// tìm lại cái comment
//             const comment = await Comment.findById(_id) /// giống y chang findOne
//             if( !comment ) throw new Error('comment not found')

//             const reports = reasons.map( reason => {
//                 return { 
//                     user: jwt.id,
//                     date: new Date(),
//                     reason: reason,
//                 }
//             })
//             comment.report.push(...reports)
//             /// lưu trữ lại comment
//             await comment.save()
//             /// response lại comment

//             const response = {
//                 code   : RESPONSE.HTTP_OK,
//                 data   : { ...comment.toResources() },
//                 old    : data,
//                 message: "socket report comment thành công"
//             }
//             io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__REPORT__COMMENT, response )
//             return
//         } catch (error) {
//             /// response 
//             const response = {
//                 code   : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
//                 error  : error.message,
//                 old    : data,
//                 message: "socket report comment không thành công"
//             }
//             io.sockets.in(inkey).emit(CONFIG.EVENT.RESPONSE__REPORT__COMMENT, response )
//             return
//         }
//     })

//     /**
//      * end Comment 
//      */





//     /**
//      * begin Chatting
//      */
//     .on( CONFIG.EVENT.JOIN__CHATTING, async data => {
//         console.log(data)
//         socket.isChat = true
//         const { jwt } = socket
//         /// khi connect được thiết lập buộc lòng kiểm tra xem cái thông số message cuối có trùng không? nếu không trùng thì phải fetch lại từ đầu
//         // 424324fsdfds
//         /// get list channel not delete then join
//         const channels = await Channel.find({ user: jwt.id })
//         const users = channels.map( conv => conv.user )
//         const merged = [].concat.apply([], users)
//         //// get user onlines
//         const onlines = [ ... (io.USER_ONLINES || []).map( onl => { 
//             onl.active = true
//             return { ... onl }
//         }) ]
//         //// get user online of user
//         const uonlines = onlines.filter( o => merged.includes(o.id) )
//         const response = {
//             code    : RESPONSE.HTTP_OK,
//             data    : uonlines.filter( o => o.id != jwt.id ), /// không tính chính nó
//             message : "socket join thành công",
//             socketid: socket.id
//         }
//         socket.emit(CONFIG.EVENT.RESPONSE__JOIN__CHATTING, response )
//         channels.map( channel => {
//             socket.join( channel.name )
//             // const room = socket.adapter.rooms[channel.name]
//             // if (room && room.length) {
//                 response.data = uonlines.filter( o => o.id == jwt.id )
//                 socket.broadcast.in(channel.name).emit(CONFIG.EVENT.RESPONSE__JOIN__CHATTING, response )
//             // }
//         })
//         // console.log("socket.adapter.rooms", socket.adapter.rooms)
//         return;
//     })

//     .on( CONFIG.EVENT.ADD__MESSAGE, async data => {
//         console.log(CONFIG.EVENT.ADD__MESSAGE, socket.id)
//         const { jwt } = socket
//         const { message, style, attachment, channel, keyUpdate } = data
//         data.createdAt = new Date()
//         // data.token = jwt
//         data.socket = socket.id
//         try {
//             const error = await messageMiddleware.VALIDATE_SOCKET_SEND_MESSAGE(data)
//             if(error) throw error
//             const conversation = await Channel.findOne({ _id: channel, backup: false }) /// .lean()
//             if( !conversation ) throw new Error("Channel không tìm thấy!")
//             if(!conversation.user.includes(jwt.id)) throw new Error("Channel không matching đúng với user!")

//             const mess = await new Message({
//                 user      : jwt.id,
//                 body      : message,
//                 channel   : conversation._id,
//                 style     : style,
//                 attachment: attachment,
//             }).save()
//             /// add infor data
//             data.user = jwt.id
//             data.body = message
//             data._id = mess._id
//             data.channel = conversation._id
//             const response = {
//                 code    : RESPONSE.HTTP_OK,
//                 data    : data,
//                 message : "socket add message thành công",
//                 socketid: socket.id
//             }
//             io.to(conversation.name).emit(CONFIG.EVENT.RESPONSE__ADD__MESSAGE, response)
//         } catch (error) {
//             console.log(error)
//             /// response 
//             const response = {
//                 code    : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
//                 error   : error,
//                 old     : data,
//                 message : "socket add message không thành công",
//                 socketid: socket.id
//             }
//             socket.emit(CONFIG.EVENT.RESPONSE__ADD__MESSAGE, response )
//             return
//         }
//     })
//     .on( CONFIG.EVENT.TYPING, async active => {
        
//         console.log(`${CONFIG.EVENT.TYPING} : socket typing ${socket.id}` )
//         try {
            
//             /// response lại comment
//             const response = {
//                 code    : RESPONSE.HTTP_OK,
//                 data    : active,
//                 message : "socket typing thành công",
//                 socketid: socket.id
//             }
//             /// sẽ không emit cho client đã gửi nên phải dùng sự kiện bracast
//             socket.broadcast.in(active.name).emit(CONFIG.EVENT.RESPONSE__TYPING, response )
//             return
//         } catch (error) {
//             /// response 
//             const response = {
//                 code   : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
//                 error  : error,
//                 old    : active,
//                 message: "socket typing không thành công"
//             }
//             socket.emit(CONFIG.EVENT.RESPONSE__TYPING, response )
//             return
//         }
//     })
//     .on( CONFIG.EVENT.READ__MESSAGE__ALL, async conversation => {
        
//         console.log(`${CONFIG.EVENT.READ__MESSAGE__ALL} : socket read all  ${socket.id}` )
//         const { jwt } = socket
//         const { _id } = conversation
//         try {
//             const channel = await Channel.findOne({ _id: mongoose.Types.ObjectId(_id) })
//             if( !channel ) throw new Error("channel not found!")
//             const update = await Message.updateMany({
//                 channel: channel._id,
//                 user: { $ne: jwt.id }
//             }, { read: true } )
//             if( !update ) throw new Error("update error!")
//             /// response lại comment
//             const response = {
//                 code    : RESPONSE.HTTP_OK,
//                 data    : conversation,
//                 user    : jwt.id,
//                 message : "socket read message all thành công",
//                 socketid: socket.id
//             }
//             io.in(channel.name).emit(CONFIG.EVENT.RESPONSE__READ__MESSAGE__ALL, response)
//             return
//         } catch (error) {
//             /// response 
//             const response = {
//                 code   : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
//                 error  : error.message,
//                 old    : conversation,
//                 message: "socket read message all không thành công"
//             }
//             socket.emit(CONFIG.EVENT.RESPONSE__READ__MESSAGE__ALL, response )
//             return
//         }
//     })

//     .on( CONFIG.EVENT.RECONNECT__CHATTING, async channels => {
//         const { jwt } = socket
//         console.log(`${CONFIG.EVENT.RECONNECT__CHATTING} : socket re${socket.id}` )
//         try {
//             const convMess = await Promise.all(channels.map( channel => Message.messageInChannel(mongoose.Types.ObjectId(channel)) ))
//             const response = {
//                 code    : RESPONSE.HTTP_OK,
//                 data    : convMess,
//                 user    : jwt.id,
//                 message : "socket reconnect message thành công",
//                 socketid: socket.id
//             }
//             socket.emit(CONFIG.EVENT.RESPONSE__RECONNECT__CHATTING, response)
//             return
//         } catch (error) {
//             const response = {
//                 code   : RESPONSE.HTTP_INTERNAL_SERVER_ERROR,
//                 error  : error.message,
//                 old    : channels,
//                 message: "socket reconnect message khoong thành công"
//             }
//             socket.emit(CONFIG.EVENT.RESPONSE__RECONNECT__CHATTING, response )
//             return
//         }
//     })


    

    
// })
// // end of socket.io logic

// module.exports = io