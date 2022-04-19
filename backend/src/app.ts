/**
 * Required External Modules
 */
import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import Router from "./routes"
import * as Config from "./config"
import { EnvObjectOption } from "./types/config"

dotenv.config()
const NODE_ENV : string = process.env.NODE_ENV || 'development'
/**
 * App Variables
 */
const app = express()
/**
 *  App Configuration
 */
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
    origin: Config.CORS_API[ NODE_ENV as keyof EnvObjectOption ]
}))

/// tạo ssl
app.get('/.well-known/acme-challenge/5asQWrZXRfdUmDnWuT0mwc93nlw8HavxmT77Pz5aHoo', function (req, res) {
    res.send('5asQWrZXRfdUmDnWuT0mwc93nlw8HavxmT77Pz5aHoo.LAt3oi4VAM7TgqpMC_3NdaCZTlCcbxl6OBzQx9aVDT8')
})

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
// app.use(function(err, req, res, next) {
	
// 	console.error("hùng vô đay")
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     if (req.isApi) {
//         return res.status(err.status || 500).json(res.locals)
//     }else if(/application\/json;/.test(req.get('accept'))) {
//         return res.status(err.status || 500).json(res.locals)
//     }
// 	// render the error page
// 	res.status(err.status || 500);
// 	return res.render('error')
    
// })

/**
 * Server Activation
 */
// const server = app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
//     // const host = server.address().address
//     // const port = server.address().port
//     // console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
// })

/// set root users
new Router(app)

export default app