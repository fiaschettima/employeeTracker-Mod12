const mysql = require('mysql2');
const inquirer = require('inquirer');
const prompts = require('./Assets/JS/prompts')


const sqlLink = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
},
console.log(`Connected to ${sqlLink} Database`)
);
function startPage(){
    inquirer.prompt(questions.questions).then((answers) =>{
        console.log(answers)
    })
};
startPage();