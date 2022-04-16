"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sliders_1 = __importDefault(require("./sliders"));
class Routes {
    constructor(app) {
        // slider router
        app.use('/api/slider', sliders_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map