const mysql = require('mysql2');
const inquirer = require('inquirer');
const {getStarted, newDept, newRole, newEmployee, updateEmployee} = require('./Assets/JS/prompts')


const sqlLink = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
},
console.log(`Connected to ${sqlLink} Database`)
);
// ------------------------------------Function gets a list of all department names---------------------------------------------
function getDepartments(){
// return a list of all department names in [array, form]
};
// ------------------------------------Function gets a list of all roles---------------------------------------------
function getRoles(){
// return a list of all role names in [array, form]
};
// ------------------------------------Function gets a list of all managers---------------------------------------------
function getManagers(){
// return a list of all manager names in [array, form]
};
// ------------------------------------Function gets a list of all employees---------------------------------------------
function getEmployees(){
// return a list of all employee names in [array, form]
};
// ------------------------------------Function Adds department to  department table---------------------------------------------
function newDepartment(){

};
// ------------------------------------Function Adds role to department_role table---------------------------------------------
function addRole(){
    inquirer.prompt(newRole).then((answers) => {
        console.log(answers);
        sqlLink.query(`INSERT INTO department_role VALUES('${answewrs.name}', '${answers.salary}', '${answers.parentDept}'`,  (err, result) =>{
            if(err){
                console.error(err);
            }
            console.log(`Role Added ${result}`);
           });
    })
};
// ------------------------------------Function Adds role to department_role table---------------------------------------------

function addEmployee(){
    inquirer.prompt(newEmployee).then((answers) =>{
        console.log(answers)
    sqlLink.query(`INSERT INTO employee VALUES('${answewrs.first_name}', '${answers.last_name}', '${answers.empRole}', '${answers.empMan}')`,  (err, result) =>{
        if(err){
            console.error(err);
        }
        console.log(`Employee Added ${result}`);
       });
})
};
// ------------------------------------Function Adds role to department_role table---------------------------------------------

function changeEmployee(){
    // ^^^^ SELECT id, role_id FROM employee 
};
// ------------------------------------Function Adds role to department_role table---------------------------------------------

function initialPrompt(){
    inquirer.prompt(getStarted).then((answers) =>{
        console.log(answers)
        switch(answers.toDO){ 
            case 'View All Employees':
               sqlLink.query(`SELECT * FROM employee`, (err, result) =>{
                if(err){
                    console.error(err);
                }
                console.table(result);
               })
            break;
            case 'Add Employee':
               addEmployee();
            break;
            case 'Update Employee Role':
                changeEmployee();
            break; 
            case 'View All Roles':
                sqlLink.query(`SELECT * FROM department_role`, (err, result) =>{
                    if(err){
                        console.error(err);
                    }
                    console.table(result);
                   })
            break; 
            case 'Add Role':
                addRole();
            break; 
            case 'View All Departments':
                changeEmployee();
            break; 
            case 'Add department':
                changeEmployee();
            break;   
        }
    })
};
initialPrompt();