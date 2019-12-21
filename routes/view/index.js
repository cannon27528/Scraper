var router = require("express").Router();
var db = require("../../models");

// This route renders the homepage
router.get("/", function(req, res) {
 
  FIXME: //See solution in Chapter 18 activty 09 Scraping-into-a-db
  //res.send('GET request to the homepage')
  db.Headline.find({ saved: false })
    .sort({ date: -1 })
    .then(function(dbArticles) {
      res.render("home", { articles: dbArticles });
    });
});

// This route renders the saved handlebars page
router.get("/saved", function(req, res) {
  
  FIXME: //See solution in Chapter 18 activty 09 Scraping-into-a-db
  db.Headline.find({ saved: true })
  .sort({ date: -1 })
  .then(function(dbArticles) {
    res.render("saved", { articles: dbArticles });
  });
});
module.exports = router;
