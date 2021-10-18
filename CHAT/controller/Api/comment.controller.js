const Comment = require("../../models/comment.model")
const Postgre = require("../../models/Postgre")
const asyncHandler = require('express-async-handler')

module.exports.index = asyncHandler(async (req, res) => {

    // const { user } = req
    const comments = await Comment
                                .find({ inkey: req.query.inkey, level: 0 })

    const ids = comments.map( com => {
        let childs = com.childrens.map( c => c.user )
        return [ com.user, ... childs]
    })
    const merged = [].concat.apply([], ids)
    /// get list user in postgre
    let users = await Postgre.USER.findAll({ where: { id: merged } })
    users = users.map( i => i.toJSONFor())
    /// populate comment và user
    const commentsWithUser = comments.map( i => {

        const childWithUser = i.childrens.map( childCom => { 
            return {
                ...childCom.toResources(),
                user: { ... users.find( uItem => uItem.id = childCom.user ) }
            }
        })
        return {
            ...i.toResources(),
            user: { ... users.find( item => item.id = i.user ) },
            childrens : [ ... childWithUser ],
        }
    })

    /// response 
    const response = {
        code   : 200,
        data   : commentsWithUser,
        message: "danh sách comment"
    }
    return res.status(response.code).json(response)
})

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

