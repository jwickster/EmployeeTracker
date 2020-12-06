var inquirer = require("inquirer");
var connection = require('./connection');



const viewOptions = [
  "View Departments",
  "View Roles",
  "View Employees",
  "Update Employee",
  "exit"
];

const employeeOptions = [
  "George Washington",
  "Abe Lincoln",
  "Thomas Jefferson",
  "Bill Clinton",
  "Barak Obama",
  "Joe Biden",
  "exit"
];

const updateOptions = [
  "First Name",
  "Last Name",
  "Role",
  "exit"
];

runSearch();

function runSearch() {
  inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: viewOptions
      })
      .then(function (answer) {
        switch (answer.action) {
          case viewOptions[0]:
            departmentView();
            break;
          
          case viewOptions[1]:
            roleView();
            break;
          
          case viewOptions[2]:
            employeeView();
            break;
          
          case viewOptions[3]:
            updateEmployee();
          
          case updateOptions[4]:
            connection.end();
            break
        }
      })
}



function departmentView() {
  var sqlStr = "SELECT * FROM department";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;
    
    console.table(result)
    runSearch();
  })
}

function employeeView() {
  var sqlStr = "SELECT * FROM employee ";
  sqlStr = sqlStr + "LEFT JOIN role ";
  sqlStr = sqlStr + "ON employee.role_id = role.id"
  connection.query(sqlStr, function (err, result) {
    if (err)
      throw err;
    console.table(result)
    runSearch();
  })
}

function roleView() {
  var sqlStr = "SELECT * FROM role";
  connection.query(sqlStr, function (err, result) {
    if (err)
      throw err;
    console.table(result)
    runSearch();
  })
}


const updateEmployee = function() {
  
  function runUpdateSearch() {
    inquirer
        .prompt({
          name: 'action',
          type: 'list',
          message: 'Which employee do you want to update?',
          choices: employeeOptions
        }).then(function(response) {
      connection.query('UPDATE employee SET role_id = ? WHERE first_name = ?',
          [response.role_id, response.first_name], function
              (err, result) {
          });
    });
    
  }
  
  runUpdateSearch();
}