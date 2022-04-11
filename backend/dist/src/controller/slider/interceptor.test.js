"use strict";
// util/interceptor.js
module.exports = {
    mockRequest: () => {
        return {
            body: jest.fn().mockReturnValue({}),
            params: jest.fn().mockReturnValue({}),
        };
    },
    mockResponse: () => {
        const res = {};
        return {
            send: jest.fn().mockReturnValue({}),
            status: jest.fn().mockReturnValue({}),
            json: jest.fn().mockReturnValue({}),
        };
    },
    // mockNext: () => jest.fn()
};
//# sourceMappingURL=interceptor.test.js.map