import express from "express"
import * as SliderController from "../controller/slider.controler"
const router = express.Router()

export default ( app: any ) => {

    router.get('/', SliderController.index)
    // router.get('/', function(req, res, next) {
    //     res.send('respond slider');
    // })

    return app.use( "/slider", router )
}