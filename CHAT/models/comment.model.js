'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      CONFIG   = require("../config"),
      Populate = require("../helpers/autopopulate.helper")

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
        report: [
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
        level: {
            type: Number,
            default: 0,
        },
        childrens: [{type: Schema.Types.ObjectId, ref: "comments"}], // Array of comment replies
    }, {
        timestamps: true
    }
)


// Middleware to populate the replies when you call `find()`
// CommentSchema.pre('find', function() {
//     this.populate('childrens')
// })

CommentSchema
  .pre('findOne', Populate('childrens'))
  .pre('find', Populate('childrens'));

CommentSchema.methods.toResources = function() {   
    return {
        _id      : this._id,
        inkey    : this.inkey,
        type     : this.type,
        user     : this.user,
        body     : this.body,
        like     : this.like,
        dislike  : this.dislike,
        report   : this.report,
        childrens: this.childrens,
    }
}
module.exports = mongoose.model("comments", CommentSchema)