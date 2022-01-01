const mongoose = require('mongoose')
const Postgre = require("../../models/Postgre")
const USER = require("../../models/user.model")
const asyncHandler = require('express-async-handler')
const createError = require('http-errors')
const responseLibrary = require("../../helpers/response.library")
// const Comment = require("../../models/comment.model")
const Channel = require("../../models/channel.model")
const Message = require("../../models/message.model")
// const sizeof = require('object-sizeof')


module.exports.getInit = asyncHandler(async (req, res ) => {

    const { limit, user } = req.query
    const LIMIT = parseInt(limit) || 1000
    // console.log(req.query.user, "vào đây req.query.user")
    // console.log(req.user, "auth nè")
    /// bước 1 lấy toàn bộ channel của nó ra
    const channels = await Channel.find( { user: req.user.id, backup: false } )
    if( !channels.length ) throw createError(responseLibrary.HTTP_NOT_FOUND, "khong tìm thấy channel")
    const lists = await Promise.all(channels.map(channel => Message.messageInChannel(mongoose.Types.ObjectId(channel._id), req.user.id) ))

    const response = {
        code   : 200, 
        data   : lists,
        onlines: res.io.USER_ONLINES || [],
        message: "danh sách data"
    }
    return res.status(response.code).json(response)
})



module.exports.load = asyncHandler(async (req, res ) => {
    let messages;
    const { limit, next, channelid } = req.query
    const LIMIT = parseInt(limit) || 1000
    // console.log(req.query.user, "vào đây req.query.user")
    // console.log(req.user, "auth nè")
    /// bước 1 lấy toàn bộ channel của nó ra
    let channel = await Channel.findOne( { user: req.user.id, _id: mongoose.Types.ObjectId(channelid) } )
    if( !channel ){
        /// create channel and response empty
        // channel = await Channel({
        //     name: renderNameChannelByUser(userObject, admin),
        //     user: [ user.id.toString(), CONFIG.ID_ADMIN.toString()],
        //     sort: 0
        // }).save()
        throw createError(responseLibrary.HTTP_NOT_FOUND, "khong tìm thấy channel")
    }
    
    /// response 
    let hasNext = true
    let nextExist = {}
    if( !next || !mongoose.Types.ObjectId.isValid(next) ){
        hasNext = false
    }else{
        /// có truyền next lên
        /// check next tồn tại không ? độ phức tạp o(1)
        nextExist = await Message.findOne({ _id: mongoose.Types.ObjectId(next) })
        /// không có cái message id như đã hứa 
        if( !nextExist ) hasNext = false
    }

    if( hasNext ){
        //// có cái next đó thật thì dùng $gte như sau: 
        messages = await Message.find({ channel: channel._id, _id: { $lt: nextExist._id }  })
        .sort({ _id: -1 })
        .limit( LIMIT )
        .sort({ _id: 1 })
    }else{
        /// không có next hoặc next không hợp lệ ta lấy hết tất cả không cần next
        messages = await Message.find({ channel: channel._id })
        .sort({ _id : -1 })
        .limit( LIMIT )
        .sort({ _id: 1 })
    }

    const response = {
        code   : 200,
        data   : messages.map(m => {
            m.type = m.user == req.user.id
            return m.toResources()
        }),
        channel: channel.toResources(),
        message: "danh sách channel"
    }
    return res.status(response.code).json(response)
})
