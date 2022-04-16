"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Required External Modules
 */
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const Config = __importStar(require("./config"));
// import HttpStatusCode from "./http.status"
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || 'development';
/**
 * App Variables
 */
const app = (0, express_1.default)();
/**
 *  App Configuration
 */
app.use((0, morgan_1.default)('dev'));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use((0, cors_1.default)({
    origin: Config.CORS_API[NODE_ENV]
}));
/// tạo ssl
app.get('/.well-known/acme-challenge/5asQWrZXRfdUmDnWuT0mwc93nlw8HavxmT77Pz5aHoo', function (req, res) {
    res.send('5asQWrZXRfdUmDnWuT0mwc93nlw8HavxmT77Pz5aHoo.LAt3oi4VAM7TgqpMC_3NdaCZTlCcbxl6OBzQx9aVDT8');
});
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
new routes_1.default(app);
exports.default = app;
//# sourceMappingURL=app.js.map