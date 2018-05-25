var Sails = require('sails');
var url = 'http://localhost:1337/';
var request = require('supertest')(url);

describe('Robot API',function() {

    before(function(done) {
        this.timeout(0);

        Sails.lift({},
            function(err,server) {
                if(err) {
                    done(err);
                } else {
                    done(err,sails);
                }
            });
    });

    it("returns all robots", function(done) {
      var req = request.get("/hosts")
      req.end(function(err, res){
        if (err) {
          throw err
        }
        console.log(res.schema);
        done();
      });
    });

    after(function(done) {
        Sails.lower(done);
    });
});
