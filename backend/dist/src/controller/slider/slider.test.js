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
const SliderController = __importStar(require("./index"));
const http_status_1 = __importDefault(require("../../http.status"));
const seed_json_1 = __importDefault(require("./seed.json"));
describe('ALL', () => {
    // it('should throw 400 error if id is empty string', async () => {
    //     const mReq = { params: { id: '' } };
    //     const mRes = {};
    //     const mNext = jest.fn();
    //     await SliderController.index(mReq, mRes, mNext)
    //     expect(mNext).toBeCalledWith(new Error('invalid.'));
    // });
    // it('should throw 400 error if id is undefined', async () => {
    //     const mReq = { params: {} };
    //     const mRes = {};
    //     const mNext = jest.fn();
    //     await SliderController.index(mReq, mRes, mNext)
    //     expect(mNext).toBeCalledWith(new Error('invalid.'));
    // });
    // it('should throw 400 error if id is invalid format', async () => {
    //     const mReq = { params: { id: '$$' } };
    //     const mRes = {};
    //     const mNext = jest.fn();
    //     await SliderController.index(mReq, mRes, mNext)
    //     expect(mNext).toBeCalledWith(new Error('invalid format.'));
    // });
    it('getter', () => __awaiter(void 0, void 0, void 0, function* () {
        const mReq = {
            body: jest.fn().mockReturnValue({}),
            params: jest.fn().mockReturnValue({ id: '1' }),
        };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const mNext = jest.fn();
        yield SliderController.index(mReq, mRes, mNext);
        expect(mRes.status).toBeCalledWith(200);
        expect(mRes.json).toBeCalledWith({ code: 200, message: "danh sách slider" });
        expect(mRes.json).toHaveBeenCalledWith(expect.objectContaining({
            message: "danh sách slider"
        }));
    }));
    it('create', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log({
            "slider": seed_json_1.default[0]
        });
        const mReq = {
            body: jest.fn().mockReturnValue({
                "slider": seed_json_1.default[0]
            }),
            params: jest.fn().mockReturnValue({}),
        };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const mNext = jest.fn();
        yield SliderController.store(mReq, mRes, mNext);
        expect(mRes.status).toBeCalledWith(http_status_1.default.OK);
    }));
});
//# sourceMappingURL=slider.test.js.map