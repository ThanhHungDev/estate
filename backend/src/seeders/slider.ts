import faker from "faker"
/** custom module */
import Slider from "../models/slider.model"
import sliders from "./_data/sliders"
import mongoConnect from "../app.mongo.connect"
// connect mongo using model
mongoConnect.myConnection()
.then(
    async () => { 
        await Slider.deleteMany({})
        sliders.map( async slider => {
            await (new Slider({
                src      : slider.src,
                alt      : slider.alt,
                topic    : slider.topic,
                title    : slider.title,
                excerpt  : slider.excerpt,
                content  : slider.content,
            })).save()
        })
    },
    err => {
        /** handle initial connection error */
    }
)
.catch(error => {

})