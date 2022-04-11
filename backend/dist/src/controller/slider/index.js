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
const slider_model_1 = __importDefault(require("../../models/slider.model"));
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
    const response = { code: undefined };
    const { slider } = req.body;
    console.log(req.body);
    /// giả sử khúc này  tới đây bạn đã sử dụng middleware ở ngoài để validate dữ liệu đầu vào
    try {
        const { src, alt, topic, title, excerpt, content } = slider;
        /// check email tồn tại
        const isExist = yield slider_model_1.default.findOne({ src });
        if (isExist) {
            response.code = http_status_1.default.CONFLICT; /// 409 Conflict
            throw new Error("src đã tồn tại!!");
        }
        /// lưu vào db mongo
        const result = yield new slider_model_1.default({ src, alt, topic, title, excerpt, content }).save();
        /// khúc này nếu bạn kỹ tính hãy tạo 1 phương thức chung để format dữ liệu 
        /// còn mình làm nhanh thì trả ra dữ liệu luôn
        console.log(result.toJSON());
        response.code = http_status_1.default.CREATED;
        response.data = result.toJSON();
        response.message = "tạo slider thành công";
        response.internal_message = "tạo slider thành công";
        return res.status(response.code).json(response);
    }
    catch (error) {
        let err = { error: 'error', message: error.message };
        response.code = response.code || http_status_1.default.INTERNAL_SERVER_ERROR;
        response.message = error.message;
        response.internal_message = error.message;
        response.errors = [err];
        console.log(response);
        return res.status(response.code).json(response);
    }
});
exports.store = store;
//# sourceMappingURL=index.js.map