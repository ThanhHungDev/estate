import faker from "faker"


/** custom module */
import User from "../models/user.model"
import users from "./_data/users"
import mongoConnect from "../app.mongo.connect"
// connect mongo using model
mongoConnect.myConnection()
.then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
        const created = users.filter( user => !user.email.toString().endsWith('@cvt.com') && user?.home_number?.toString() != '0674')
        created.map( async user => {
            const { name, email, phone, phone_verify } = user
            /// check email tồn tại
            const isExist = await User.findOne({ email })
            if( isExist ){
                return
            }
            (new User({
                username: name,
                email,
                password: '123456',
                phone,
                phone_verify,
            })).save()
        })
    },
    err => {
        /** handle initial connection error */
    }
)
.catch(error => {

})