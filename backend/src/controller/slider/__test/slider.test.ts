import SliderController from "../index"
import HttpStatus from "../../../http.status"

import sliders from "../seed.json"

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

    it('getter', async () => {
        
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
    })

    it('create', async () => {
        // const mReq = {
        //     body: { ... sliders[0] },
        //     params: jest.fn().mockReturnValue({  }),
        // }
        // const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() }
        // const mNext = jest.fn()
        // await SliderController.store(mReq, mRes, mNext)
        // expect(mRes.status).toBeCalledWith(HttpStatus.CREATED)
    })

})