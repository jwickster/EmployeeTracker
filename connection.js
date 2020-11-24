//Need those dependancies
var mysql = require("mysql");

//create connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3300,
  user: "root",
  database: "employee_tracker"

});
//instantiate the connection
connection.connect(function (err) {
  if (err)
    throw err;
  //console log error
  console.log(err);
  //else show thread 
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;