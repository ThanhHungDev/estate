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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CORS_IO = exports.CORS_API = exports.IS_ENVIROMENT_PRODUCT = exports.salt = exports.TimeExpireAccessToken = exports.database = exports.SERVER = exports.local_port = exports.local_ip = exports.local = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.local = process.env.ASSET_REALTIME, exports.local_ip = process.env.ASSET_REALTIME_IP, exports.local_port = process.env.ASSET_REALTIME_PORT;
exports.SERVER = {
    PORT: exports.local_port,
    DOMAIN: exports.local,
    IP: exports.local_ip
};
exports.database = {
    postgre: {
        type: process.env.DB_TYPE,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database_name: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: false
    },
    mongodb: process.env.DB_MONGO,
};
exports.TimeExpireAccessToken = 20 * 60 * 60, exports.salt = 5, exports.IS_ENVIROMENT_PRODUCT = true, exports.CORS_API = process.env.APP_ENV == 'local' ? '*' : '*', exports.CORS_IO = process.env.APP_ENV == 'local' ? '*:*' : '*:*'; /// : process.env.ASSET_PHP_URL + ":*",
//# sourceMappingURL=config.js.map