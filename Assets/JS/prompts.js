const getStarted = [
    {
        name: 'test',
        message: 'text inquire 1'
    },
    {
        name: 'op2',
        message: 'text inquire 2'
    },

    {
        name: 'test',
        message: 'test inquire 1'
    },
    {
        name: 'test',
        message: 'test inquire 2'
    }
];
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project',
    },
    {
        name: 'description',
        type: 'input',
        message: 'enter a brief description (more can be added later)',
    },
    {
        name: 'Installation',
        type: 'input',
        message: 'Describe how to install the project',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Enter a brief explanation of how to use the project',
    },
    {
        name: 'ContributionGuidlines',
        type: 'input',
        message: 'Explain rules of use when adding to this project',
    },
    {
        name: 'Test',
        type: 'input',
        message: 'Explain how a user could test this product',
    },
    {
        name: 'license',
        type: 'list',
        message: 'choose a License',
        choices: ['MIT', 'Artistic', 'Apache', 'The Unlicense', 'zLib License', 'Mozilla Public License 2.0', 'None'],
    },
    {
        name: 'gitHubUser',
        type: 'input',
        message: 'Enter your github username',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email',
    }
];

module.exports = {getStarted, questions};
