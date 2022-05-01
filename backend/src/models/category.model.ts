'use strict'

import { Model, Schema, model } from 'mongoose'

export const DefaultParentCategory: number = 0
export interface ICategory extends Document {
    // ref to collection users
    user_id: Schema.Types.ObjectId
    // category create by user, so, admin need sensor
    censor: boolean  // đã kiểm duyệt chưa
    // title of category
    title: string
    // slug of category
    slug: string
    // one category have one parent, if not have parent => default parent = 0
    parent: number  // neu khong phai con cua thang nao thi la 0
    // thuộc tính này xác định có cần login mới được đăng bài không
    verify: boolean
    // loi gioi thieu
    excerpt: string
    // noi dung
    content: string
    // la phan phu luc cua page
    catalogue: string
    // view page
    view: number
    // hinh anh packground page
    background: string
    // thumbnail of page
    thumbnail: string
    // same title but using to share social
    site_name: string
    // image
    image_seo      : string
    description_seo: string
    createdAt      : string
    updatedAt      : string
}

  
export interface CategoryModel extends Model<ICategory> {
    toResources() : any
}

const CategorySchema = new Schema<ICategory, CategoryModel>(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        censor: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            maxlength: 1024,
            required: true,
            minlength: 3,
        },
        slug: {
            type: String,
            maxlength: 1024,
            required: true,
            minlength: 3,
        },
        parent: {
            type: String,
        },
        verify: {
            type: Boolean,
            default: false
        },
        excerpt: {
            type: String
        },
        content: {
            type: String
        },
        catalogue: {
            type: String
        },
        view: {
            type: Number
        },
        background: {
            type: String,
            required: true,
            maxlength: 10240,
        },
        thumbnail: {
            type: String,
            maxlength: 10240,
        },
        site_name: {
            type: String,
            maxlength: 1024
        },
        image_seo: {
            type: String,
            maxlength: 10240, // same edge browser
        },
        description_seo: {
            type: String
        }
    }, {
        timestamps: true
    }
)
CategorySchema.static('myStaticMethod', function myStaticMethod() {
    return 26061995
})


/**
 * Là function để trước khi lưu mới hoặc update mới password thì sẽ modify nó trước khi lưu
 * @async
 * @version 0.0.1
 */
CategorySchema.pre('save', async function(next) {
    if(!this.get('site_name')){
        // default email contact
        this.site_name = this.get('title')
    }
    if(!this.get('thumbnail')){
        // default email contact
        this.thumbnail = this.get('background')
    }
    if(!this.get('image_seo')){
        // default email contact
        this.image_seo = this.get('background')
    }
    next()
})

CategorySchema.methods.toResources = function() {
    
    return {
        _id            : this._id,
        user_id        : this.user_id,
        censor         : this.censor,
        title          : this.title,
        slug           : this.slug,
        parent         : this.parent,
        verify         : this.verify,
        excerpt        : this.excerpt,
        content        : this.content,
        catalogue      : this.catalogue,
        view           : this.view,
        background     : this.background,
        thumbnail      : this.thumbnail,
        site_name      : this.site_name,
        image_seo      : this.image_seo,
        description_seo: this.description_seo,
        createdAt      : this.createdAt,
        updatedAt      : this.updatedAt,
    }
};

export default model<ICategory, CategoryModel>("category", CategorySchema)