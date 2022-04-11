'use strict'

import mongoose from "mongoose"
const Schema = mongoose.Schema

const SliderSchema = new Schema(
    {
        src: {
            type: String,
            maxlength: 510,
            required: true,
        },
        alt: {
            type: String,
            maxlength: 510,
            default: '',
        },
        topic: {
            type: String,
            maxlength: 510,
            default: '',
        },
        title : {
            type: String,
            maxlength: 510,
            default: '',
        },
        excerpt: {
            type: String,
        },
        content: {
            type: String,
        },
    }, {
        timestamps: true
    }
)

SliderSchema.methods.toResources = function() {
    
    return {
        _id      : this._id,
        src      : this.src,
        alt      : this.alt,
        topic    : this.topic,
        title    : this.title,
        excerpt  : this.excerpt,
        content  : this.content,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    }
};

export default mongoose.model("slider", SliderSchema)