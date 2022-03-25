/**
 * define
*/
const express = require("express")
const router  = express.Router()

/**
 * Init users on your application
 * @param {*} app from express
 */
let initUsers = app => {

  router.get('/', function(req, res, next) {
    res.send('respond user');
  });

  return app.use( "/users", router )
}
module.exports = initUsers