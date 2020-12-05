var inquirer = require("inquirer");
var connection = require('./connection.js');



const viewPosition = [
  "Departments",
  "Roles",
  "Employees",
  "Update Employee",
  "Exit"
];

const selectEmployees = [
  "Micky Mouse",
  "Tonya Harding",
  "Abe Lincoln",
  "Beckett Wickster",
  "Taiden Wickster",
  "Susan Anderson",
  "Linda Staley",
  "exit"
];

const updateName = [
  "First Name",
  "Last Name",
  "Role",
  "exit"
];

runSearch();

function runSearch() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: viewPosition
  }).then(function (answer) {

    //TODO Switch
    if (answer.action === viewPosition[0]) {
      console.log("Departments");
      departmentView();
    } else if (answer.action === viewPosition[1]) {
      console.log("Roles");
      roleView();
    } else if (answer.action === viewPosition[2]) {
      console.log("Employees");
      employeeView();
    } else if (answer.action === viewPosition[3]) {
      console.log("Update Employees");
      updateEmployee();
      connection.end();
    } else if (answer.action === updateName[4]) {
      console.log("Exit");
      connection.end();
    } else {
      alert("Not working " + answer);
      console.log(stackTrace);
    }
  });
}



function departmentView() {
  var sqlStr = "SELECT * FROM department";

  connection.query(sqlStr, function (err, result) {
    if (err)
      throw err;
    //else console log the result and runSearch method
    console.table(result);
    runSearch();
  });
}

function employeeView() {
  var sqlStr = "SELECT first_name, last_name, title, salary FROM employee ";

  for (const leftjoinRoleElement of sqlStr += 'LEFT JOIN role ') {
    sqlStr += "ON employee.role_id = role.id";
  };
  /*
   sqlStr += "ON employee.role_id = role.id"
  */

  connection.query(sqlStr, function (err, result) {
    if (err)
      throw err;
    //Else
    console.table(result);
    runSearch();
  });
}

function roleView() {
  var sqlStr = "SELECT * FROM role";

  connection.query(sqlStr, function (err, result) {
    if (err)
      throw err;
    //Else
    console.table(result)
    runSearch();
  })
}


const updateEmployee = function () {

  function runUpdateSearch() {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'Which employee do you want to update?',
        choices: selectEmployees
      });

  }

  runUpdateSearch();
};


// const updateWorker = function() {
//   function run
//   inquirer
//       .prompt({
//         name: "action",
//         type: "list",
//         message: "Which worker do you want to update?",
//         choice: employeeOptions
//       })
//   runUpdateSearch();
// }