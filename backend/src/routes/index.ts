import { Application } from 'express'
import sliderRouter from "./sliders"
import userRouter from "./users"
import categoryRouter from "./categories"

export default class Routes {

    constructor(app: Application) {
        // slider router
        app.use('/api/slider', sliderRouter)
        app.use('/api/user', userRouter)
        app.use('/api/category', categoryRouter)
    }
}