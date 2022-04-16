"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
exports.default = {
    store: [
        (0, express_validator_1.check)('src', 'src does not Empty').not().isEmpty(),
        (0, express_validator_1.check)('src', 'src must be at least 5 chars').isLength({ min: 2 }),
        (0, express_validator_1.check)('alt', 'alt does not Empty').not().isEmpty(),
        (0, express_validator_1.check)('alt', 'alt must be at least 5 chars').isLength({ min: 2 }),
        (0, express_validator_1.check)('topic', 'topic does not Empty').not().isEmpty(),
        (0, express_validator_1.check)('topic', 'topic must be at least 5 chars').isLength({ min: 2 }),
        (0, express_validator_1.check)('title', 'title does not Empty').not().isEmpty(),
        (0, express_validator_1.check)('title', 'title must be at least 5 chars').isLength({ min: 2 }),
        (0, express_validator_1.check)('excerpt', 'excerpt does not Empty').not().isEmpty(),
        (0, express_validator_1.check)('excerpt', 'excerpt must be at least 5 chars').isLength({ min: 2 }),
        (0, express_validator_1.check)('content', 'content does not Empty').not().isEmpty(),
        (0, express_validator_1.check)('content', 'content must be at least 5 chars').isLength({ min: 2 }),
    ]
};
//# sourceMappingURL=slider.js.map