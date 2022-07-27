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
function getDepartments(){

};
function getRoles(){

};
function getManagers(){

};
function getEmployees(){

};
function newDepartment(){

};
function newRole(){

};
function newEmployee(){

};
function updateEmplyoee(){

};
function startPage(){
    inquirer.prompt(getStarted).then((answers) =>{
        console.log(answers)
    })
};
startPage();