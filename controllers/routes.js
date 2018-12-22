// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML/handlebars page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });

  // cms route loads cms.html
  app.get("/newGoup", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/newGroup.handlebars"));
  });

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // authors route loads author-manager.html
  app.get("/addMovie", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/addMovie.handlebars"));
  });
};



//group-api-routes.js

const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", (req, res) => {
    db.Group.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbGroups => {
      res.render("index", {
        groups: dbGroups
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/group/:group_id", (req, res) => {
    // eslint-disable-next-line camelcase
    db.Group.findOne({
      // eslint-disable-next-line camelcase
      where: { group_id: req.params.group_id },
      include: [db.Discussion]
    }).then(dbGroup => {
      res.render("group", {
        group: dbGroup
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};



//discussion-api-routes.js


const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/discussion/:discussion_id", (req, res) => {
    db.Discussion.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbGroups => {
      res.render("index", {
        groups: dbGroups
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/group/:group_id", (req, res) => {
    // eslint-disable-next-line camelcase
    db.Group.findOne({
      // eslint-disable-next-line camelcase
      where: { group_id: req.params.group_id },
      include: [db.Discussion]
    }).then(dbGroup => {
      res.render("group", {
        group: dbGroup
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};