"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.set('debug', true);
mongoose_1.default.set('useFindAndModify', true);
// CONNECTION EVENTS
// When successfully connected
mongoose_1.default.connection.on('connected', () => {
    console.log('Mongoose default connected ' + process.env.DB_MONGO);
});
// If the connection throws an error
mongoose_1.default.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});
// When the connection is disconnected
mongoose_1.default.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});
// When the connection is open
mongoose_1.default.connection.on('open', () => {
    console.log('Mongoose default connection is open');
    console.log('===================================');
});
/**
 * hàm `myConnection` để file thực thi app.js hoặc bin/www thực thi connection
 */
exports.default = {
    myConnection: () => {
        console.log(`Mongoose connecting ${process.env.DB_MONGO}`);
        /// connect mongodb
        mongoose_1.default.connect(process.env.DB_MONGO || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            // useNewUrlParser: true,
        });
    }
};
//# sourceMappingURL=app.mongo.connect.js.map