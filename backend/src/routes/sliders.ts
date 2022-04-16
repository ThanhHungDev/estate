import { Router } from "express"
import SliderController from "../controller/slider"

class SliderRoutes {
    router = Router()
    sliderController = new SliderController()
  
    constructor() {
        this.intializeRoutes()
    }
    intializeRoutes() {
        // this.router.route('/').get(this.sliderController.index)
        // this.router.route('/').post(this.sliderController.store)
        this.router.get('/', this.sliderController.index)
        this.router.get('/', this.sliderController.store)
    }
}
export default new SliderRoutes().router