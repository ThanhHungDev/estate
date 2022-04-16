import { Application } from 'express'
import sliderRouter from "./sliders"

export default class Routes {

    constructor(app: Application) {
        // slider router
        app.use('/api/slider', sliderRouter)
    }
}