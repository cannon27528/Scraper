// Controller for our headlines
// ============================
var db = require("../models");

module.exports = {
  // Find all headlines, sort them by date, send them back to the user
  findAll: function(req, res) {
    TODO:
    db.Headline
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      });
  },
  
  // Delete the specified headline
  delete: function(req, res) {
    TODO:
    db.Headline.remove({ _id: req.params.id }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  },
  // Update the specified headline
  update: function(req, res) {
    TODO:
    db.Headline.findOneAndUpdate({ _id: req.params.id }, 
      { $set: req.body }, 
      { new: true }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  }
};
