import faker from "faker"
import mongoConnect from "../app.mongo.connect"
// connect mongo using model
mongoConnect.myConnection()

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
