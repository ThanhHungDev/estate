'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
process.env.NODE_ENV = 'test';
const app_mongo_connect_1 = __importDefault(require("../../../app.mongo.connect"));
app_mongo_connect_1.default.myConnection();
const expect = chai_1.default.expect;
const should = chai_1.default.should();
chai_1.default.use(chai_http_1.default);
const app_1 = __importDefault(require("../../../app"));
// import * as SliderController from "../../slider"
const http_status_1 = __importDefault(require("../../../http.status"));
const seed_json_1 = __importDefault(require("../../slider/seed.json"));
const slider_model_1 = __importDefault(require("../../../models/slider.model"));
slider_model_1.default.remove({});
describe('Tests slider', function () {
    // beforeEach((done) => { //Before each test we empty the database
    //     Slider.remove({}, (err) => { 
    //        done()
    //     })
    // })
    it('Should list all slider on /api/slider GET data empty', function (done) {
        chai_1.default
            .request(app_1.default)
            .get('/api/slider')
            .end(function (err, res) {
            res.should.have.status(http_status_1.default.OK);
            res.should.be.json;
            res.body.should.be.a('object');
            // console.log(res.body)
            res.body.data.should.be.an("array").that.is.empty;
            // res.body.data[0].should.have.property('title')
            return done();
        });
    });
    it('Should create slider error on /api/slider POST empty slider', done => {
        const slider = Object.assign({}, seed_json_1.default[0]);
        chai_1.default
            .request(app_1.default)
            .post('/api/slider')
            .send(slider)
            .end(function (err, res) {
            // console.log(res.body)
            res.should.have.status(http_status_1.default.CREATED);
            res.should.be.json;
            res.body.should.be.an("object");
            res.body.data.should.be.have.property('alt').eql(slider.alt);
            res.body.data.should.be.have.property('topic').eql(slider.topic);
            res.body.data.should.be.have.property('title').eql(slider.title);
            res.body.data.should.be.have.property('src').eql(slider.src);
            done();
        });
    });
    it('Should list all slider on /api/slider GET data empty', function (done) {
        chai_1.default
            .request(app_1.default)
            .get('/api/slider')
            .end(function (err, res) {
            res.should.have.status(http_status_1.default.OK);
            res.should.be.json;
            res.body.should.be.a('object');
            // console.log(res.body)
            // res.body.data.should.be.an( "array" ).that.is.empty
            res.body.data[0].should.have.property('title');
            return done();
        });
    });
});
//# sourceMappingURL=index.spec.js.map