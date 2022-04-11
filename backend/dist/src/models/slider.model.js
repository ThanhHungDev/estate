'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SliderSchema = new mongoose_1.Schema({
    src: {
        type: String,
        maxlength: 510,
        required: true,
    },
    alt: {
        type: String,
        maxlength: 510,
        default: '',
    },
    topic: {
        type: String,
        maxlength: 510,
        default: '',
    },
    title: {
        type: String,
        maxlength: 510,
        default: '',
    },
    excerpt: {
        type: String,
    },
    content: {
        type: String,
    },
}, {
    timestamps: true
});
SliderSchema.static('myStaticMethod', function myStaticMethod() {
    return 26061995;
});
SliderSchema.methods.toResources = function () {
    return {
        _id: this._id,
        src: this.src,
        alt: this.alt,
        topic: this.topic,
        title: this.title,
        excerpt: this.excerpt,
        content: this.content,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};
exports.default = (0, mongoose_1.model)("slider", SliderSchema);
//# sourceMappingURL=slider.model.js.map