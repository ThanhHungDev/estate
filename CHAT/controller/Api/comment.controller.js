const Comment = require("../../models/comment.model")
const asyncHandler = require('express-async-handler')

module.exports.index = async (req, res) => {

    const { user } = req
    const comments = await Comment.find({ user: user.id, level: 0 })

    /// response 
    const response = {
        code   : 200,
        data   : comments.map( i => i.toResources() ),
        user   : user,
        message: "danh sách comment"
    }
    return res.status(response.code).json(response)
}

module.exports.store = asyncHandler(async(req, res) => {
    
    const { user } = req
    const { parent } = req.body

    /// tìm lại cái parent
    let commentParent
    if( !!parent ){
        commentParent = await Comment.findById(parent) /// giống y chang findOne
        if( !commentParent ) throw new Error("không tồn tại _id mongoose trong hệ thống")
    }

    const comment = new Comment(req.body)
    /// add more properti
    comment.user  = user.id
    comment.level = (!!parent) | 0
    /// lưu trữ lại comment
    await comment.save()
    
    //// có parent thật thì chỉ cần làm động tác sau
    if( !!commentParent ){
        // commentParent.childrens.unshift(comment)
        commentParent.childrens.push(comment)
        /// thực hiện update 
        await commentParent.save()
    }
    
    const response = {
        code: 200,
        data: comment.toResources(),
        message: "add mới comment thành công"
    }
    return res.status(response.code).json(response)

})

