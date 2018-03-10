let chai = require('chai');
var expect=require('chai').expect
let chaiHttp = require('chai-http');
let server = require('/ac/node api/config/routes.js');
let should = chai.should();
const request = require('supertest');
chai.use(chaiHttp);

describe('/', function () {
    it(' get all movies', function () {
        chai.request(server).get('/movies').end((err, res) => {
            expect(res).should.have.status(200);
            expect(res).body.should.be.a('array');
            expect(res.body[0].name).to.be.equal('Titanic');
            
            done();
        });
    })
})

describe('/', function () {
    it(' post emp', function () {
        chai.request(server).post('/movies').end((err, res) => {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[1].name.to.be.equal('The Fault in our stars');
            
            done();
        })
    })
})
