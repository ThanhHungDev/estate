'use strict'
import 'mocha'
import chai from 'chai'
import chaiHttp from 'chai-http'

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)


import appExpress from "../../../app"
import * as SliderController from "../../slider"
import HttpStatus from "../../../http.status"
import sliders from "../../slider/seed.json"

describe('Tests slider', function () {
    it('Should list all slider on /slider GET', function(done) {
        chai
        .request(appExpress)
        .get('/slider')
        .end(function(err, res){
            res.should.have.status(HttpStatus.OK)
            res.should.be.json
            done()
        })
    })
    it('Should create slider error on /slider POST empty slider', done => {
        chai
        .request(appExpress)
        .post('/slider')
        .end(function(err, res){
            console.log(res)
            res.should.have.status(HttpStatus.BAD_REQUEST)
            res.should.be.json
            done()
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