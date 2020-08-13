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
    .get('/expressions')
    .then((response) => {
      expect(response.status, 'Did you send a response from the GET /expressions route?').to.equal(200);
      expect(response.body, 'Did you send back the expressions array?').to.deep.equal(expressions);
      done();
    })
    .catch(done);
  });
});
