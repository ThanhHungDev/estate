const CONFIG = require('../config.js')

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

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


module.exports = mongoose.model("message", MessageSchema)


