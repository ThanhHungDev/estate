"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_mongo_connect_1 = __importDefault(require("../app.mongo.connect"));
// connect mongo using model
app_mongo_connect_1.default.myConnection();
// const sliders = faker.random.arrayElements(3).map(item => {
//     return {
//         src    : `https:\/\/topbds.vn\/img\/slider\/slider${faker.random.number(3)}.webp`,
//         alt    : faker.commerce.productName(),
//         topic  : faker.commerce.productAdjective(),
//         title  : faker.lorem.text(),
//         excerpt: faker.lorem.text(),
//         content: null
//     }
// })
//# sourceMappingURL=slider.js.map