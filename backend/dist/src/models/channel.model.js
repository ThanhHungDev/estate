'use strict';
const mongoose = require('mongoose'), Schema = mongoose.Schema;
const ChannelSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Channel Name is required']
    },
    user: {
        type: Array
    },
    backup: {
        type: Boolean,
        default: false /// channel xóa thì không xóa hẳn, thông thường là cột delete
    },
    sort: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});
/**
 *
 * @param { String } _userId là id của bảng users trong posgre
 * @returns
 */
ChannelSchema.statics.channelsMessageByUser = function (_userId) {
    return this
        .aggregate([
        { $match: { user: _userId } },
        { $limit: limitChannel },
        { $sort: { sort: 1 } },
        { $unwind: "$user" },
        { $match: { user: { $nin: _idIgnore } } },
        {
            $lookup: {
                from: 'messages',
                let: { channelId: '$_id' },
                as: "message",
                pipeline: [
                    { "$match": { backup: { $ne: true } } },
                    { "$match": { "$expr": { "$eq": ["$$channelId", "$channel"] } } },
                    {
                        $project: {
                            type: {
                                $cond: {
                                    if: { $eq: [_userId, "$user"] },
                                    then: true,
                                    else: false
                                }
                            },
                            content: "$body",
                            read: true,
                            readAdmin: true,
                            style: true,
                            booking: true,
                            attachment: true,
                            channel: true,
                            createdAt: true,
                            updatedAt: true
                        }
                    },
                    { $sort: { _id: -1 } },
                    { $limit: 200 },
                    { $sort: { _id: 1 } },
                ]
            }
        },
        {
            $project: {
                id: "$_id",
                channelName: "$name",
                user: true,
                message: true
            }
        },
    ]);
};
ChannelSchema.methods.toResources = function () {
    return {
        _id: this._id,
        name: this.name,
        user: this.user,
        backup: this.backup,
        sort: this.sort,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};
module.exports = mongoose.model("channels", ChannelSchema);
//# sourceMappingURL=channel.model.js.map