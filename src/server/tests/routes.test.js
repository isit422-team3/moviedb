const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const Movie = require('../models/movie.model');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Mongodb Movie Collection routes', () => {

  describe('GET /movies', () => {

    it('returns a movie array', (done) => {
      chai.request(server)
        .get('/api/movies')
        .end((error, response) => {
          if (error) done(error)
          // Now let's check our response
          expect(response).to.have.status(200)
          expect(response.body).to.contain([Movie])
          done()
        });
    });

  // Let's add this to the same describe block to keep this file organized
    it('Returns a "Hello World" message', (done) => {
      chai.request(server)
        .get('/')
        .end((error, response) => {
          if (error) done(error);
          expect(response.body).to.be.deep.equal({
              message: 'Hello, world!'
          });
          done();
        });
    });
  });
});
