var Sails = require('sails');
var url = 'http://localhost:1337/';
var request = require('supertest')(url);

describe('Robot API',function() {
  before((done) => {
    this.timeout(0);
    Sails.lift({}, (err, server) => {
      if (err) { return done(err)};
      done(err, server)
    });
  });

  it('returns all robots', (done) => {
    var req = request.get('/hosts');
    req.end((err, res) =>{
      if (err) {
        throw err;
      }
      console.log(res.schema);
      done();
    });
  });

  after((done) => {
    Sails.lower(done);
  });
});
