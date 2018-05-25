/**
 * RobotController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  index: function(req, res) {
    Robot.find((err, robots) => {
      if (err) { return res.send(err, 500); }

      res.json({
        schema: {
          robots: robots
        }
      });
    });
  },

  create: function(req,res) {
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    Robot.create(params, function robotCreated (err, robotCreated) {
      if (err) {return res.json({ description: 'Invalid Input' },405);}
      res.json({
        description: 'New Robot Entry Successful',
        robot: robotCreated
      });
    });
  },

  show: function (req,res) {
    var id = req.param('id');

    Robot.find(id, function robotFound(err, robot) {
      if (err) {return res.json({ error: 'These violent delights have violent ends' },500);}
      if (!robot) {return res.json({ description: 'Entry not found'}, 404);}

      res.json({
        schema: {
          robot: robot
        }
      });
    });
  },

  update: function (req,res) {
    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    var id = params.id;

    if (!id) {return res.json({ description: 'Invalid Input' });}

    Robot.update(id, params, function robotUpdated(err, updatedRobot) {
      if(err) {return res.json({ error: 'These violent delights have violent ends' },500);}
      if(!robot) {return res.json({ description: 'Entry not found' }, 404);}
      res.json({
        schema: {
          robot: updatedRobot
        }
      });
    });
  },

  destroy: function (req,res) {
    var id = req.param('id');

    Robot.find(id, function foundRobot(err, robot) {
      if (err) {return res.json( { description: 'These violent delights have violent ends' }, 500 );}
      if (!robot) {return res.json({ description: 'Entry not found' },404);}

      Robot.destroy(id, function robotDestroyed(err) {
        if (err) {return res.json( { description: 'These violent delights have violent ends' }, 500 );}

        return res.json({ description: 'Robot Data Deleted' });
      });

    });
  }
};
