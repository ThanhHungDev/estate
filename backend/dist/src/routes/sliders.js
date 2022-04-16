"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const slider_1 = __importDefault(require("../controller/slider"));
const slider_2 = __importDefault(require("../request/slider"));
class SliderRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.sliderController = new slider_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // this.router.route('/').get(this.sliderController.index)
        // this.router.route('/').post(this.sliderController.store)
        this.router.get('/', this.sliderController.index);
        this.router.post('/', slider_2.default.store, this.sliderController.store);
    }
}
exports.default = new SliderRoutes().router;
//# sourceMappingURL=sliders.js.map