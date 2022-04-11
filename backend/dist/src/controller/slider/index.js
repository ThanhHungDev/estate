"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.index = void 0;
const http_status_1 = __importDefault(require("../../http.status"));
const index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /// response 
    const response = {
        code: http_status_1.default.OK,
        message: "danh sách slider"
    };
    res.status(response.code).json(response);
});
exports.index = index;
const store = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { slider } = req.body;
    /// response 
    const response = {
        code: http_status_1.default.CREATED,
        message: slider
    };
    res.status(response.code).json(response);
});
exports.store = store;
//# sourceMappingURL=index.js.map