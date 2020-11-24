var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3300,
  user: "root",
  database: "employee_tracker"

});

connection.connect(function (err) {
  if (err)
    throw err;
  console.log(err);
  //else
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;