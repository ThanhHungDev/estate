'use strict'
import bcrypt from "bcrypt"
import { Model, Schema, model, CallbackError } from 'mongoose'

export enum RolesUser {
    /**
     * config default is admin
     */
    ADMIN = 1,
    /**
     * config default is user
     */
    USER = 2
}
export enum ActivityUser {
    /**
     * not active
     */
    UNKNOWN = 0,
    /**
     * user active
     */
    ACTIVE = 1,
    /**
     * Active nhưng bị khoá
     */
    DEACTIVE = 2
}
export const SALT = 12
export const DefaultAvatar : string = '/images/avatar.jpg'
export const DefaultBackground : string = '/images/background.jpg'

export interface IUser extends Document {
    // tên tài khoản 
    username: string
    // email tài khoản
    email: string
    // password user
    password: string,
    // avatar tài khoản
    avatar: string
    // khi vào page sẽ có ảnh background mặc định
    background: string
    // kiểu user ví dụ tài khoản thường, admin, tài khoản vàng bạc bạch kim gì đó
    role_id: RolesUser
    // số điện thoại
    phone: string
    // số điện thoại đã xác thực hay chưa
    phone_verify: string
    // mã code xác thực
    code: string
    // thời gian xác thực thành công vào lúc nào
    time_verify: string
    // cột này để tài  khoản user chỉ định liên hệ mail đến đâu
    contact_email: string
    // cột này để tài  khoản user chỉ định liên hệ phone đến đâu
    contact_phone: string
    // tài khoản được active chưa hay đã bị khoá
    active   : ActivityUser
    createdAt: string
    updatedAt: string
}

  
export interface UserModel extends Model<IUser> {
    toResources() : any
}

const UserSchema = new Schema<IUser, UserModel>(
    {
        username: {
            type: String,
            maxlength: 50,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: /.+\@.+\..+/,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            maxlength: 10240, // same edge browser
            default: DefaultAvatar
        },
        background: {
            type: String,
            maxlength: 10240, // same edge browser
            default: DefaultBackground
        },
        role_id: {
            type : RolesUser,
            default: RolesUser.USER
        },
        phone: {
            type: String,
            maxlength: 20,
        },
        phone_verify: {
            type: String,
            maxlength: 20,
        },
        code: {
            type: String,
            maxlength: 10,
        },
        time_verify: {
            type: String
        },
        contact_email: {
            type: String,
        },
        contact_phone: {
            type: String,
        },
        active: {
            type: ActivityUser,
            default: ActivityUser.UNKNOWN
        }
    }, {
        timestamps: true
    }
)
UserSchema.static('myStaticMethod', function myStaticMethod() {
    return 26061995
})

/**
 * Là function để so sánh chuỗi hash password đã gửi vào có đúng với trên hệ thống không? 
 * @param { String } _password là password đang được hash 
 * @version 0.0.1
 */
UserSchema.methods.comparePassword = function(_password) {
    return bcrypt.compareSync(_password, this.password)
}

/**
 * Là function để trước khi lưu mới hoặc update mới password thì sẽ modify nó trước khi lưu
 * @async
 * @version 0.0.1
 */
UserSchema.pre('save', async function(next) {
    if(!this.get('contact_email')){
        // default email contact
        this.contact_email = this.get('email')
    }
    if (!this.isModified('password')) return next()
    /// nếu là thêm mới hoặc update password thì băm trước
    try {
        const salt    = await bcrypt.genSalt(SALT)
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (err) {
        const error = err as CallbackError
        return next(error)
    }
})

UserSchema.methods.toResources = function() {
    
    return {
        _id          : this._id,
        username     : this.username,
        email        : this.email,
        avatar       : this.avatar,
        background   : this.background,
        role_id      : this.role_id,
        phone        : this.phone,
        phone_verify : this.phone_verify,
        code         : this.code,
        time_verify  : this.time_verify,
        contact_email: this.contact_email,
        contact_phone: this.contact_phone,
        active       : this.active,
        createdAt    : this.createdAt,
        updatedAt    : this.updatedAt,
    }
};

export default model<IUser, UserModel>("user", UserSchema)