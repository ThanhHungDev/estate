'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      CONFIG   = require("../config")

const CommentSchema = new Schema(
    {
        inkey: { 
            type: String, 
            required: [true, 'Bình luận chưa xác định khoá']
        },
        user: { 
            type: Number,
            required: [true, 'Bình luận chưa xác định user']
        },
        body: {
            type: String,
            maxlength: CONFIG.MAX_LENGTH_MESSAGE
        },
        like: {
            type: Number,
            default: 0,
        },
        dislike: {
            type: Number,
            default: 0,
        },
        report:  [
            { 
                user: { 
                    type: Number,
                    required: [true, 'Báo cáo chưa xác định user']
                },
                date: String, 
                reason: {
                    type: String,
                    maxlength: CONFIG.MAX_LENGTH_MESSAGE
                }
            }
        ],
        parent : {
            type: Schema.Types.ObjectId,
            ref : 'comments'
        },
    }, {
        timestamps: true
    }
)


CommentSchema.methods.toResources = function() {   
    return {
        _id    : this._id,
        inkey  : this.inkey,
        type   : this.type,
        user   : this.user,
        body   : this.body,
        like   : this.like,
        dislike: this.dislike,
        report : this.report,
        parent : this.parent || '',
    }
}
module.exports = mongoose.model("comments", CommentSchema)