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
  // // respond with "hello world" when a GET request is made to the homepage
  app.get('/onlines', function (req, res) {
    return res.status(200).json({ message: 'hello onlines', onlines: res.USER_ONLINE_GLOBAL || 'không có' })
  })

  return app.use( "/", router )
}
module.exports = initIndex