var supertest = require('supertest');

describe('RobotController.index', function() {

  describe('index', function() {
    it('should be a success', function (done) {
      supertest(sails.hooks.http.app)
      .get('/hosts')
      .expect(200)
      .expect({ schema: { robots: [] } }, done);
    });
  });

});
