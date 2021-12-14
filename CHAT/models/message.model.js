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

MessageSchema.methods.toResources = function() {
    
    return {
        _id       : this._id,
        read      : this.read,
        attachment: this.attachment,
        user      : this.user,
        body      : this.body,
        channel   : this.channel,
        style     : this.style,
        createdAt : this.createdAt,
        updatedAt : this.updatedAt,
    }
};


module.exports = mongoose.model("message", MessageSchema)


