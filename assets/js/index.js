// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
.prompt ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples of how to use your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others contribute?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Provide examples on how to run the tests written for your application',
        name: 'tests',
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
