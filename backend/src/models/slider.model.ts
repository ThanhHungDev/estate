'use strict'

import { Model, Schema, model } from 'mongoose'


export interface ISlider extends Document {
    _id: string;
    src: string;
    alt: string;
    topic: string;
    title: string;
    excerpt: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

  
export interface SliderModel extends Model<ISlider> {
    toResources() : any
}

const SliderSchema = new Schema<ISlider, SliderModel>(
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
SliderSchema.static('myStaticMethod', function myStaticMethod() {
    return 26061995
});

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

export default model<ISlider, SliderModel>("slider", SliderSchema)