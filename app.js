var inquirer = require("inquirer");
var connection = require('./connection');


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
          departmentView();
        } else if (answer.action === viewPosition[1]) {
          roleView();
        } else if (answer.action === viewPosition[2]) {
          employeeView();
        } else if (answer.action === viewPosition[3]) {
          updateEmployee();
          connection.end();
        } else if (answer.action === updateName[4]) {
          connection.end();
        }else {
          alert("Not working " + answer)
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
  var sqlStr = "SELECT first_name, last_name, title, salary FROM employee ";
  sqlStr += "LEFT JOIN role ";
  sqlStr += "ON employee.role_id = role.id"
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;
    
    console.table(result)
    runSearch();
  })
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


const updateEmployee = function() {
  
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
}


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

