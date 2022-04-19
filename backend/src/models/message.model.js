'use strict'

import mongoose from "mongoose"
const Schema = mongoose.Schema



const MessageSchema = new Schema(
    {
        channel : {
            type: Schema.Types.ObjectId,
            ref : 'channel'
        },
        user: { 
            type: Number,
        },
        body: {
            type: String,
            maxlength: CONFIG.MAX_LENGTH_MESSAGE
        },
        read: {
            type: Boolean,
            default: false
        },
        readAdmin: {
            type: Boolean,
            default: false
        },
        style : {
            type: String
        },
        attachment: [
            { type: Object }
        ],
        backup: {
            type   : Boolean,
            default: false /// message của user
        },
    }, {
        timestamps: true
    }
)

/**
 * 
 * @param { String } channelID là id của bảng users trong posgre
 * @returns 
 */
MessageSchema.statics.messageInChannel = function(channelID, limit = 20 ) {

    return this
    .aggregate([
        { 
            $match: { 
                backup: false,
                channel: channelID
            } 
        },
        {
            $project: { 
                user      : true,
                body      : true,
                read      : true,
                readAdmin : true,
                style     : true,
                attachment: true,
                channel   : true,
                createdAt : true,
                updatedAt : true,
            }
        },
        { $sort: { _id : -1 }},
        { $limit : limit },
        { $sort: { _id : 1 }},
    ])
}


/**
 * @swagger
 * components:
 *     schemas:
 *         MessageResources:
 *             type: object
 *             properties:
 *                  _id:
 *                     type: string
 *                     description: là id trong mongo. thực tế sẽ là mongoose.Types.ObjectId(id). 
 *                     example: 5f991cda17e4b67ffd192041
 *                  read:
 *                     type: boolean
 *                     description: nếu false là chưa đọc, còn true là đã đọc
 *                     example: false
 *                  attachment: 
 *                     type: array
 *                     description: là mảng các phần tử đường dẫn file
 *                     example: [ ]
 *                  user: 
 *                      type: integer
 *                      description: 
 *                      example: 10
 *                  body:
 *                      type: string
 *                      description: 
 *                      example: "chuỗi nội dung tin nhắn"
 *                  channel: 
 *                      type: string
 *                      description: là id trong mongo. thực tế sẽ là mongoose.Types.ObjectId(id). 
 *                      example: 5f991cda17e4bsfsfd192041
 *                  style:
 *                      type: string
 *                      description: kiểu hiện thị nội dung message chat.
 *                      example: ""
 *                  booking: 
 *                      type: array
 *                      description: 
 *                      example: []
 *                  createdAt: 
 *                      type: string
 *                      description: 
 *                      example: "2021-01-20T08:59:16.468Z"
 *                  updatedAt: 
 *                      type: string
 *                      description: 
 *                      example: "2021-01-20T08:59:16.468Z"
 */

MessageSchema.methods.toResources = function() {
    
    return {
        _id       : this._id,
        type      : this.type,
        read      : this.read,
        attachment: this.attachment,
        user      : parseInt(this.user) || 0,
        body      : this.body,
        channel   : this.channel,
        style     : this.style,
        createdAt : this.createdAt,
        updatedAt : this.updatedAt,
    }
};

const MessageModel = mongoose.model("message", MessageSchema)
export default MessageModel