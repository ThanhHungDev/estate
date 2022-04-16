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
const http_status_1 = __importDefault(require("../../http.status"));
const slider_model_1 = __importDefault(require("../../models/slider.model"));
class SliderController {
    constructor() {
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = {
                code: http_status_1.default.OK,
                message: "Danh sách slider",
            };
            res.status(response.code).json(response);
        });
        this.store = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const response = {
                code: http_status_1.default.OK,
                message: "Create slider",
            };
            try {
                const { src, alt, topic, title, excerpt, content } = req.body;
                /// check email tồn tại
                // const isExist = await Slider.findOne({ src })
                // if( isExist ){
                //     response.code = HttpStatus.CONFLICT /// 409 Conflict
                //     throw new Error("src đã tồn tại!!")
                // }
                /// lưu vào db mongo
                const result = yield new slider_model_1.default({ src, alt, topic, title, excerpt, content }).save();
                /// khúc này nếu bạn kỹ tính hãy tạo 1 phương thức chung để format dữ liệu 
                /// còn mình làm nhanh thì trả ra dữ liệu luôn
                response.code = http_status_1.default.CREATED;
                response.data = result.toJSON();
                response.message = "Tạo slider thành công";
                response.internal_message = "Tạo slider thành công";
                res.status(response.code).json(response);
            }
            catch (error) {
                const err = error instanceof Error ? error : new Error(typeof error === 'string' ? error : 'Server Error!');
                response.code = response.code || http_status_1.default.INTERNAL_SERVER_ERROR;
                response.message = err.message;
                response.internal_message = err.message;
                response.errors = [err];
                return res.status(response.code).json(response);
            }
        });
    }
}
exports.default = SliderController;
//# sourceMappingURL=index.js.map