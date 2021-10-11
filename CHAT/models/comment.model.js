'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      CONFIG   = require("../config")

const CommentSchema = new Schema(
    {
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
                user: Number, 
                date: String, 
                reason: {
                    type: String,
                    maxlength: CONFIG.MAX_LENGTH_MESSAGE
                }
            }
        ],
        level: {
            type: Number,
            default: 0,
        },
    }, {
        timestamps: true
    }
)


CommentSchema.methods.toResources = function() {   
    return {
        _id    : this._id,
        user   : this.user,
        body   : this.body,
        like   : this.like,
        dislike: this.dislike,
        report : this.report,
        level  : this.level,
    }
}
module.exports = mongoose.model("comments", CommentSchema)