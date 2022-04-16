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
const mongoose_1 = __importDefault(require("mongoose"));
const Config = __importStar(require("./config"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
mongoose_1.default.set('debug', true);
mongoose_1.default.set('useFindAndModify', true);
// CONNECTION EVENTS
// When successfully connected
mongoose_1.default.connection.on('connected', () => {
    const env = process.env.NODE_ENV || 'development';
    console.log('Mongoose default connected ' + Config.database.mongoURI[env] || '');
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
    myConnection: (appExpress) => {
        const env = process.env.NODE_ENV || 'development';
        console.log(Config.database.mongoURI);
        console.log(`Mongoose connecting ${Config.database.mongoURI[env] || ''}`);
        /// connect mongodb
        mongoose_1.default.connect(Config.database.mongoURI[env] || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            // useNewUrlParser: true,
        });
    }
};
//# sourceMappingURL=app.mongo.connect.js.map