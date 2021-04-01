const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../../server');

chai.use(chaiHttp);

describe('/First Test Collection', () => {

    it('should test default API welcome route...', (done) => {

        chai.request(server)
        .get('/welcome')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');    
            const actualVal = res.body.message;
            expect(actualVal).to.be.equal("I'm alive...");        
            done();
        });
    });
});