var Sails = require('sails');
var url = 'http://localhost:1337/';
var request = require('supertest')(url);

describe('Robot API',function() {
  before((done) => {
    this.timeout(5000);
    Sails.lift({}, (err, server) => {
      if (err) { return done(err); }
      done(err, server);
    });
  });

  it('returns all robots', (done) => {
    var req = request.get('/api/v1/hosts');
    req.end((err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.schema);
      done();
    });
  });

  it('returns a single robot', (done) => {
    var req = request.get('/api/v1/hosts/1');
    req.end((err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.schema);
      done();
    });
  });

  it('can edit a single robot', (done) => {
    var req = request.patch('/api/v1/hosts/1');
    req.send({
      robot: {
        current_name: 'The Man in Black',
        intelligence_metric: 18
      }
    });
    req.end((err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.schema);
      done();
    });
  });

  it('can delete a robot', (done) => {
    var req = request.delete('/api/v1/hosts/1');
    req.end((err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.description);
      done();
    });
  });

  it('can create a robot', (done) => {
    var req = request.post('api/v1/hosts');
    req.send({
      robot: {
        date_added: 'March 22nd, 2042',
        first_active: 'May 26th, 2042',
        current_name: 'The Man in Black',
        height: 4.05,
        weight: 242.05,
        intelligence_metric: 18
      }
    });
    req.end((err, res) => {
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
