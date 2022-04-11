import express from "express"
import * as SliderController from "../controller/slider"
const router = express.Router()

export default ( app: any ) => {

    router.get('/', SliderController.index)
    router.post('/', SliderController.store)

    return app.use( "/slider", router )
}