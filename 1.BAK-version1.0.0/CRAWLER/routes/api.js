/**
 * author hungtt
*/
const express = require("express")
const router  = express.Router()

const productApiController    = require("../controller/Api/product.controller")

const generalMiddleware = require('../middlewares/general.middleware'),
      authMiddleware    = require('../middlewares/jwt.middleware')
/**
 * Init all APIs on your application
 * @param {*} app from express
 */
let initAPIs = app => {
    ////////////////////////////////////////////////////////////////////////////
    router.use([ generalMiddleware.formatJsonApi, generalMiddleware.setAllowOrigin ])
    ////////////////////////////////////////////////////////////////////////////
    /////////////////// Route không cần login ////////////////////////////////
    router.get('/products/:id', productApiController.getProduct )
    // router.get('/crawler/cho-ngai-giao', productApiController.getProduct)


    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    router.use([ generalMiddleware.formatJsonApi, generalMiddleware.setAllowOrigin, authMiddleware.isAuth ])
    ////////////////////////////////////////////////////////////////////////////
    /////////// route cần verify thành công jwt ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////



    
    return app.use( "/api", router )
}
module.exports = initAPIs