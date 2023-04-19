// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

const readme = ({ title, description, usage, contribute, tests }) => {
    return `# ${title}

    ## Description
    ${description}

    ## Usage
    ${usage}
    
    ## How to Contribute
    ${contribute}
    
    ## Tests
    ${tests}`

};


inquirer
    .prompt([
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

    // Read up on ternary operators

    // TODO: Create a function to write README file
    .then((data) => {

        fs.writeFile('README.md', readme(data), (error) => {
            error
                ? console.log(error)
                : console.log('success')
        })
    });



// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
