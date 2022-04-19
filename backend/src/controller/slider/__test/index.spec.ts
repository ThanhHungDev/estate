'use strict'
import 'mocha'
import chai from 'chai'
import chaiHttp from 'chai-http'
import dotenv from "dotenv"
dotenv.config()
process.env.NODE_ENV = 'test'
import mongoConnect from "../../../app.mongo.connect"

mongoConnect.myConnection()

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)


import appExpress from "../../../app"
// import * as SliderController from "../../slider"
import HttpStatus from "../../../http.status"
import sliders from "../../slider/seed.json"
import Slider from "../../../models/slider.model"

Slider.remove({})


describe('Tests slider', function () {
    // beforeEach((done) => { //Before each test we empty the database
    //     Slider.remove({}, (err) => { 
    //        done()
    //     })
    // })
    it('Should list all slider on /api/slider GET data empty', function(done) {
        chai
        .request(appExpress)
        .get('/api/slider')
        .end(function(err, res){
            res.should.have.status(HttpStatus.OK)
            res.should.be.json
            res.body.should.be.a('object')
            // console.log(res.body)
            res.body.data.should.be.an( "array" ).that.is.empty
            // res.body.data[0].should.have.property('title')
            return done()
        })
    })
    it('Should create slider error on /api/slider POST empty slider', done => {
        const slider = { ...sliders[0] }
        chai
        .request(appExpress)
        .post('/api/slider')
        .send(slider)
        .end(function(err, res){
            // console.log(res.body)
            res.should.have.status(HttpStatus.CREATED)
            res.should.be.json
            res.body.should.be.an("object")
            res.body.data.should.be.have.property('alt').eql(slider.alt)
            res.body.data.should.be.have.property('topic').eql(slider.topic)
            res.body.data.should.be.have.property('title').eql(slider.title)
            res.body.data.should.be.have.property('src').eql(slider.src)
            done()
        })
    })

    it('Should list all slider on /api/slider GET data empty', function(done) {
        chai
        .request(appExpress)
        .get('/api/slider')
        .end(function(err, res){
            res.should.have.status(HttpStatus.OK)
            res.should.be.json
            res.body.should.be.a('object')
            // console.log(res.body)
            // res.body.data.should.be.an( "array" ).that.is.empty
            res.body.data[0].should.have.property('title')
            return done()
        })
    })
})



// describe('Hello API Request', () => {
//   it('should return response on call', () => {
//     return chai.request(app).get('/hello')
//       .then(res => {
//         chai.expect(res.text).to.eql("how's it going?");
//       })
//   })
// })