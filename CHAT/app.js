var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Response = require("./helpers/response.library");

const initIndex = require('./routes/index'),
      initUsers = require('./routes/users'),
      initAPIs  = require("./routes/api");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/// set root index
initIndex(app)
/// set root users
initUsers(app)
/// set root api
initAPIs(app)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
// 	console.log("createErrorcreateErrorcreateErrorcreateErrorcreateError app.js")
//     next(createError(404, "không tìm thấy route"));
// });

// app.use((error, req, res, next) => {
//     console.log("Error Handling Middleware called")
//     console.log('Path: ', req.path)
//     console.error('Error: ', error)
    
//     // if (error.type == 'redirect')
//     //     res.redirect('/error')

//     // else if (error.type == 'time-out') // arbitrary condition check
//     //     res.status(Response.HTTP_REQUEST_TIMEOUT).send(error)
//     // else
//     //     res.status(Response.HTTP_INTERNAL_SERVER_ERROR).send(error)
// })

// // error handler
app.use(function(err, req, res, next) {
	
	console.error(err.stack)
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    if (req.isApi) {
        return res.status(err.status || 500).json(res.locals)
    }
	// render the error page
	res.status(err.status || 500);
	return res.render('error')
    
});

module.exports = app;
