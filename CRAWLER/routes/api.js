/**
 * author hungtt
*/
const express = require("express")
const router  = express.Router()

const userApiController    = require("../controller/Api/user.controller")

const generalMiddleware = require('../middlewares/general.middleware'),
      authMiddleware    = require('../middlewares/jwt.middleware'),
      userMiddleware    = require('../middlewares/user.middleware')
/**
 * Init all APIs on your application
 * @param {*} app from express
 */
let initAPIs = app => {
    ////////////////////////////////////////////////////////////////////////////
    router.use([ generalMiddleware.formatJsonApi, generalMiddleware.setAllowOrigin ])
    ////////////////////////////////////////////////////////////////////////////
    /////////////////// Route không cần login ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    // router.post('/register', [ userMiddleware.REGISTER ], userApiController.register)
    // router.post('/login', [ userMiddleware.LOGIN ], userApiController.login) 

    /// lấy danh sách comment không cần login
    // router.get('/comment', [ commentMiddleware.GET_COMMENT_INKEY ], commentApiController.index )
    ////////////////////////////////////////////////////////////////////////////
    router.use([ generalMiddleware.formatJsonApi, generalMiddleware.setAllowOrigin, authMiddleware.isAuth ])
    ////////////////////////////////////////////////////////////////////////////
    /////////// route cần verify thành công jwt ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    // router.get('/users', userApiController.getUser )

    // router.post('/comment', [ commentMiddleware.CREATE_COMMENT ], commentApiController.store )

    // /// lấy danh sách message của 1 user đã login
    // router.get('/message', [ messageMiddleware.GET_MESSAGE_BY_USER ], messageApiController.load )
    // router.get('/message/init', messageApiController.getInit )
    
    return app.use( "/api", router )
}
module.exports = initAPIs