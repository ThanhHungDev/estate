const Comment = require("../../models/comment.model")

module.exports.index = async (req, res) => {

    let response = {}

    const { user } = req
    const comments = await Comment.find({ user: user.id })

    /// response 
    response.code             = 200
    response.data             = comments.map( i => i.toResources() )
    response.user             = user
    response.message          = "buộc phải login nè"
    response.internal_message = "buộc phải login nè"
    return res.status(response.code).json(response)
}

module.exports.store = async (req, res) => {

    let response = {}
    
    const { user } = req
    const { inkey, body, parent } = req.body

    let commentObject = {
        inkey: inkey,
        user: user.id,
        body: body,
    }
    if( !!parent ){
        commentObject.parent = parent
    }
    const comment = await new Comment(commentObject).save()

    /// response 
    response.code             = 200
    response.data             = comment.toResources()
    response.user             = user
    response.message          = "buộc phải login nè"
    response.internal_message = "buộc phải login nè"
    return res.status(response.code).json(response)
}

