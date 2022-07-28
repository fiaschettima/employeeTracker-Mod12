const mysql = require('mysql2');
const inquirer = require('inquirer');
const figlet = require('figlet');

const sqlLink = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
},
console.log('connected to movies_db')
);
var roleArray=[];
var emplyArray = ['None'];
var departmentsArray= [];

const getStarted = [
    {
        name: 'toDO',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee', 
            'Update Employee Role', 
            'View All Roles', 
            'Add Role', 
            'View All Departments', 
            'Add department',
            'Exit'
        ],
    },
];
const newDept = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of the department?',
    }
];
const newRole = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of the role?',
    },
    {
        name: 'salary',
        type: 'number',
        message: 'What is the salary for the role?'
    },
    {
        name: 'parentDept',
        type: 'list',
        choices: departmentsArray,
    }
];
const newEmployee = [
    {
        name: 'first_name',
        type: 'input',
        message: `What is the employee's first name?`,
    },
    {
        name: 'last_name',
        type: 'inpit',
        message: `What is the employee's last name?`
    },
    {
        name: 'empRole',
        type: 'list',
        message: 'What is the employees role',
        choices: roleArray,
    },
    {
        name: 'empMan',
        type: 'list',
        message: 'Who is this employees manager',
        choices: emplyArray,
    }
];
const updateEmployee = [
    {
        name: 'who',
        type: 'list',
        message: 'Choose an employee to update',
        choices: emplyArray,
    },
    {
        name: 'newRole',
        type: 'list',
        message: 'Choose their new role',
        choices: roleArray,
    }
];
// // ------------------------------------Function Adds department to  department table---------------------------------------------
function newDepartment(){

    inquirer.prompt(newDept).then((answers) =>{
        sqlLink.query(`INSERT INTO department (name) VALUES ('${answers.name}');`, (err, result) => {
            if(err){
                console.error(err);
                return
            }
            console.log(`${answers.name} was added to the Departments Table\n`);
            basePrompt();
        })
    })
};
// // ------------------------------------Function Adds role to department_role table---------------------------------------------
function addRole(){
    inquirer.prompt(newRole).then((answers) => {
        console.log(answers);
        sqlLink.query(`INSERT INTO roles (title, salary, department_id) VALUES('${answers.name}', '${answers.salary}', '${answers.parentDept}'`,  (err, result) =>{
            if(err){
                console.error(err);
            }
            console.log(`Role Added ${result}`);
           });
    })
};
// // ------------------------------------Function Adds role to department_role table---------------------------------------------
function addEmployee(){
    inquirer.prompt(newEmployee).then((answers) =>{
        console.log(answers)
    sqlLink.query(`INSERT INTO employee VALUES('${answers.first_name}', '${answers.last_name}', '${answers.empRole}', '${getManagersID(answers.empMan)}')`,  (err, result) =>{
        if(err){
            console.error(err);
        }
        console.log(`Employee Added ${result}`)
        basePrompt();
       });
})
};
// // ------------------------------------Function Adds role to department_role table---------------------------------------------
function getRoles(){
    sqlLink.query(`SELECT title FROM roles;`, (err, result) => {
      if(err){
          console.error(err)
      }
      result.forEach((role) => {
        roleArray.push(role.title);
    });
    });
    return roleArray;
  
  };
  // // ------------------------------------Function Adds role to department_role table---------------------------------------------
 
  function getEmployees(){
      sqlLink.query(`SELECT first_name, last_name FROM employee`, (err, result) => {
        if(err){
            console.error(err)
        }
        result.forEach((employee) => {
            emplyArray.push(employee.first_name + ' ' + employee.last_name);
        });
      })
      return emplyArray;
  };
// // ------------------------------------Function Adds role to department_role table---------------------------------------------
    
  function getManagersID(name){
    sqlLink.query(`SELECT * FROM employee`, (err, result) => {
        if(err){
            console.error(err)
        }
        console.log(result)
        result.forEach((employee) =>{
            if(name === 'None'){
                console.log(null)
                return null
            }
            else if(employee.first_name === name){
                console.log(employee.id )
               return employee.id 
            }
        })
        
      })
     
  };
// // ------------------------------------Function Adds role to department_role table---------------------------------------------
function changeEmployee(){
    inquirer.prompt(updateEmployee).then((answers) => {
        console.log(answers);
    }) 
};
function getDepartments(){
    sqlLink.query(`SELECT name FROM department;`, (err, result) => {
        if(err){
            console.error(err)
        }
        result.forEach((department) => {
          departmentsArray.push(department);
      });
      });
      return departmentsArray;
};

function basePrompt(){
    emplyArray = getEmployees();
    roleArray = getRoles();
    departmentsArray = getDepartments();
// managerArr = getManagers();
    inquirer.prompt(getStarted).then((answers) =>{
       
        switch(answers.toDO){ 
            case 'View All Employees':
               sqlLink.query(`SELECT * FROM employee`, (err, result) =>{
                if(err){
                    console.error(err);
                }
                console.table(result);
                basePrompt();
               })
               
            break;

            case 'Add Employee':
               addEmployee();
            
            break;

            case 'Update Employee Role':
                changeEmployee();
            break; 

            case 'View All Roles':
                sqlLink.query(`SELECT * FROM roles`, (err, result) =>{
                    if(err){
                        console.error(err);
                    }
                    console.table(result);
                    basePrompt();
                   })
            break; 

            case 'Add Role':
                addRole();
            break; 

            case 'View All Departments':
                sqlLink.query(`SELECT * FROM department`, (err, result) =>{
                    if(err){
                        console.error(err);
                    }
                    console.table(result);
                    basePrompt();
                   })
            break; 

            case 'Add department':
                newDepartment();
            break; 
            case 'Exit':
                sqlLink.end();
            break;   
        }
    })
};
basePrompt();
   


    

// figlet.text('\nEmployee\n Manager\n',{
    //     font: 'Big Money-nw'
    // }, (err,data)=>
    // console.log(data)
    // );