import faker from "faker"
import User from "../models/user.model"
import Category from "../models/category.model"
import categories from "./_data/categories"
import { EmailAdmin } from "./_data/users"
import mongoConnect from "../app.mongo.connect"
// connect mongo using model
mongoConnect.myConnection()
.then(
    async () => {
        await Category.deleteMany()
        const admin = await User.findOne({ email: EmailAdmin })
        if(!admin) return
        /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
        const inte = [...categories].filter(cat => !cat.parent).map(cat => {
            
            return (new Category({
                user_id        : admin._id,
                censor         : true,
                title          : cat.name,
                slug           : cat.slug,
                parent         : cat.parent,
                verify         : !!cat.verify,
                excerpt        : cat.excerpt,
                content        : cat.content,
                catalogue      : cat.catalogue,
                view           : cat.view,
                background     : cat.background,
                thumbnail      : cat.thumbnail,
                description_seo: cat.description_seo
            })).save()
        })
        Promise.all(inte)
        .then(cateParent => {

            [...categories].filter(cat => !!cat.parent)
            .map( async cat => {
                const parent = categories.find(item => item.id == cat.parent)
                if( parent && parent.slug ){
                    // find in db
                    const catParent = await Category.findOne({ slug: parent.slug })
                    if( catParent ){
                        console.log(catParent, "catParent")
                        // luu 
                        await (new Category({
                            user_id        : admin._id,
                            censor         : true,
                            title          : cat.name,
                            slug           : cat.slug,
                            parent         : catParent._id,
                            verify         : !!cat.verify,
                            excerpt        : cat.excerpt,
                            content        : cat.content,
                            catalogue      : cat.catalogue,
                            view           : cat.view,
                            background     : cat.background,
                            thumbnail      : cat.thumbnail,
                            description_seo: cat.description_seo
                        })).save()
                    }
                }
            })
        })
    },
    err => {
        /** handle initial connection error */
    }
)
.catch(error => {

})