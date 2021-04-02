const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('/First Test Collection', () => {

    it('should test default API welcome route...', (done) => {

        chai.request(server)
        .get('/welcome')
        .end((err, res) => {
            expect(res.status).to.be.equal(201);
            done();
        });
    });
});