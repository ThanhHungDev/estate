import express from "express"

const router = express.Router()

/**
 * Init users on your application
 * @param {*} app from express
 */
export default ( app: any ) => {
    router.get('/', function(req, res, next) {
        res.send('respond user');
    })

    return app.use( "/users", router )
}