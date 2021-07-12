/**
 * define
*/
const express = require("express")
const router  = express.Router()

const indexApiController = require("../controller/Api/index.controller"),
      userApiController  = require("../controller/Api/user.controller")

const generalMiddleware = require('../middleware/general.middleware'),
      authMiddleware    = require('../middleware/jwt.middleware')


/**
 * Init all APIs on your application
 * @param {*} app from express
 */
let initAPIs = app => {

    ////////////////////////////////////////////////////////////////////////////
    router.use([ generalMiddleware.formatJsonApi, generalMiddleware.setAllowOrigin ])
    ////////////////////////////////////////////////////////////////////////////
    /////////////////// DEFINE ROUTER NO VERIFY ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    router.post('/login', userApiController.login )

    router.get('/test', indexApiController.noneLogin)
    
    ////////////////////////////////////////////////////////////////////////////
    router.use([ authMiddleware.isAuth])
    ////////////////////////////////////////////////////////////////////////////
    /////////////////// Route have verify //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    router.get('/users', userApiController.getUser )
    
    return app.use( "/api", router )
}
module.exports = initAPIs