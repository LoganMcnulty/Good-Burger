var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
  var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
  router.get("/", function(req, res) {
    // call on cat.all model, which is passed data 
      burger.all(function(data) {
        //hbsObject created to be passed to HandleBars Index
          var hbsObject = {
            burgers: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
      });
  });

  router.get("/reviews", function(req, res) {
    // call on cat.all model, which is passed data 
      burger.all(function(data) {
        //hbsObject created to be passed to HandleBars Index
          var hbsObject = {
            burgers: data
          };
          console.log(hbsObject);
          res.render("reviews", hbsObject);
      });
  });

router.post("/api/burgers", function(req, res) {
  // run cate.create model, create object "{name: req.body.name, and sleepy:req.body.sleepy} using data passed"
    burger.create(["burger_name"], [req.body.name], function(result) {
      // Send back the ID of the new cat
        res.json({ id: result.insertId });
    });
});

// update cat based on paramas passed by Index HTML javascript
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
  // run cat.update from cats model
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();

      }
    );
  });

// Export routes for server.js to use.
module.exports = router;
