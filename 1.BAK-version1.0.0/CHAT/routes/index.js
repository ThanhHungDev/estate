/**
 * define
*/
const express = require("express")
const router  = express.Router()

/**
 * Init index on your application
 * @param {*} app from express
 */
let initIndex = app => {

  router.get('/', function(req, res, next) {
    res.send('respond index');
  });

  return app.use( "/", router )
}
module.exports = initIndex