// Import the ORM to create functions that will interact with the database.
    var orm = require("../config/orm.js");

    var burger = {
        // a function that hits the orm.all function with a table name and sends back everything within the table
            all: function(cb) {
            orm.all("burgers", function(res) {
                cb(res);
            });
            },
        // The variables cols and vals are arrays.
        // send to orm function columns and value (as objects) in order to create new objects in the table
        // calls back with a response
            create: function(cols, vals, cb) {
            orm.create("burgers", cols, vals, function(res) {
                cb(res);
            });
            },
        // update function send to orm.update the table, a value for a certain column (sleep), and a condition (id)
            update: function(objColVals, condition, cb) {
            orm.update("burgers", objColVals, condition, function(res) {
                cb(res);
            });
            }
        };
      
// Export the database functions for the controller (catsController.js).
    module.exports = burger;