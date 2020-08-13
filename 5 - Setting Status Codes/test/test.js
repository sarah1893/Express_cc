console.log = () => {};
const rewire = require('rewire');
const expect = require('chai').expect;
const request = require('supertest');

describe('', function() {
  it('', function(done) {
    process.env.PORT = 8000;
    const appModule = rewire('../app.js');
    const app = appModule.__get__('app');
    const expressions = appModule.__get__('expressions');
    request(app)
    .get('/expressions/1')
    .then((response) => {
      expect(response.status, 'Did you send a response from the GET /expressions/:id route?').to.equal(200);
      expect(response.body, 'Did you send a single expression object instead of the whole array?').to.not.be.an.instanceOf(Array);
      const expressionToFind = expressions.find((element) => {
        return element.id === Number('1');
      });
      expect(response.body, 'Did you send back the correct expression by ID?').to.deep.equal(expressionToFind);
    })
    .then(() => {
      return request(app)
      .get('/expressions/invalid');
    })
    .then((response) => {
      expect(response.status, 'Did you set and send a 404 status code for an invalid request').to.equal(404);
      expect(response.body, 'You should not pass an object into `res.send` for a 404 response.').to.deep.equal({});
      done();
    })
    .catch(done);
  });
});
