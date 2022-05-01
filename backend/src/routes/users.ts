import { Router } from "express"
import UserController from "../controller/user"
import ValidateSlider from "../request/slider"

class UserRoutes {
    router = Router()
    userController = new UserController()
  
    constructor() {
        this.intializeRoutes()
    }
    intializeRoutes() {
        // this.router.route('/').get(this.sliderController.index)
        // this.router.route('/').post(this.sliderController.store)
        this.router.get('/', this.userController.index)
    }
}
export default new UserRoutes().router