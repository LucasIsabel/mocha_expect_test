const request = require('supertest'),
    app = require('../../server/server').app,
    expect = require('expect.js');

describe('SERVER', () => {

    // GET DESCRIPTION

    describe('GET', () => {

        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect('Content-Type', /json/)
                .expect((res) => {
                    expect(res)
                        .to
                        .be
                        .an('object');
                })
                .expect(200, {error: 'Error Message'})
                .end(done)
        })

        it('shloud return an array of objects', (done) => {
            request(app)
                .get('/users')
                .expect((res) => {
                    expect(res.body)
                        .to
                        .be
                        .an('array')
                })
                .expect(200)
                .end(done)
        })
    })

    // POST DESCRIPTION

    describe('POST', () => {
        it('shloud return an Object', (done) => {
            request(app)
                .post('/users')
                .expect((res) => {
                    expect(res).to.be.an('object')
                })
                .end(done)
        })
    })

})