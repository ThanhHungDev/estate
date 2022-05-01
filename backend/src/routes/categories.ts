import { Router } from "express"
import CategoryController from "../controller/category"
import ValidateSlider from "../request/slider"

class CategoryRoutes {
    router = Router()
    categoryController = new CategoryController()
  
    constructor() {
        this.intializeRoutes()
    }
    intializeRoutes() {
        // this.router.route('/').get(this.sliderController.index)
        // this.router.route('/').post(this.sliderController.store)
        this.router.get('/', this.categoryController.index)
    }
}
export default new CategoryRoutes().router