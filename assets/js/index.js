//required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

//Question array
const questions = [
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
        message: 'Please provide instructions and examples of how to use your project.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which license are you using for your application?',
        name: 'license',
        choices: [
            { name: 'MIT', value: "MIT" },
            { name: 'GNU General Public License', value: 'GNU' },
            { name: 'Apache', value: 'Apache' },
            { name: 'Berkeley Software Distribution (BSD)', value: 'BSD' }
        ],

    },
    {
        type: 'input',
        message: 'How can others contribute to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide examples on how to run the tests written for your application:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// Function to write README file
function writeToFile(data) {
        fs.writeFile('./output/README.md', data, (error) => {
            error ? console.log(error) : console.log('success')
        })
    };


//Function to initialize app
function init() {
    inquirer .prompt(questions)
    .then((data) => [
        writeToFile(generateMarkdown(data))
    ])
}

init()


