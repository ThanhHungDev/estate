'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const expect = chai_1.default.expect;
const should = chai_1.default.should();
chai_1.default.use(chai_http_1.default);
const app_1 = __importDefault(require("../../../app"));
const http_status_1 = __importDefault(require("../../../http.status"));
describe('Tests slider', function () {
    it('Should list all slider on /slider GET', function (done) {
        chai_1.default
            .request(app_1.default)
            .get('/slider')
            .end(function (err, res) {
            res.should.have.status(http_status_1.default.OK);
            res.should.be.json;
            done();
        });
    });
    it('Should create slider error on /slider POST empty slider', done => {
        chai_1.default
            .request(app_1.default)
            .post('/slider')
            .end(function (err, res) {
            console.log(res);
            res.should.have.status(http_status_1.default.BAD_REQUEST);
            res.should.be.json;
            done();
        });
    });
});
//# sourceMappingURL=index.spec.js.map