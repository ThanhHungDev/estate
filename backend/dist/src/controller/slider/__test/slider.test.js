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
Object.defineProperty(exports, "__esModule", { value: true });
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
        // const mReq = {
        //     body: jest.fn().mockReturnValue({}),
        //     params: jest.fn().mockReturnValue({ id: '1' }),
        // }
        // const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }
        // await (new SliderController()).index(mReq, mRes)
        // expect(mRes.status).toBeCalledWith(200)
        // expect(mRes.json).toBeCalledWith({ code: 200, message: "danh sách slider" })
        // expect(mRes.json).toHaveBeenCalledWith(
        //     expect.objectContaining({
        //         message: "danh sách slider"
        //     })
        // )
    }));
    it('create', () => __awaiter(void 0, void 0, void 0, function* () {
        // const mReq = {
        //     body: { ... sliders[0] },
        //     params: jest.fn().mockReturnValue({  }),
        // }
        // const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }
        // const mNext = jest.fn()
        // await SliderController.store(mReq, mRes, mNext)
        // expect(mRes.status).toBeCalledWith(HttpStatus.CREATED)
    }));
});
//# sourceMappingURL=slider.test.js.map