const getStarted = [
    {
        name: 'toDO',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View All Employees','Add Employee', 'Update Employee Role', 'View all roles', 'Add role', 'View all departments', 'add department'],
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
        choices: getDepartments(),
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
        choices: getRoles(),
    },
    {
        name: 'empMan',
        type: 'list',
        choices: getManagers(),
    }
];
const updateEmployee = [
    {
        name: 'who',
        type: 'list',
        message: getEmployees(),
    },
    {
        name: 'newRole',
        type: 'list',
        message: getRoles(),
    }
];


module.exports = {getStarted, newDept, newRole, newEmployee, updateEmployee};
