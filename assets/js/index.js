// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateReadme = ({ title, description, usage, license, contribute, tests, github, email}) => {
    return `
    # ${title}

    ## Description
    ${description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation

    ## Usage
    ${usage}

    ## License
    ${license}

    ## How to Contribute
    ${contribute}
    
    ## Tests
    ${tests}
    
    ## Questions
    [Click here](https://github.com/${github}) to view my GitHub profile.

    If you have any questions please contact me at ${email}
    `
};

// TODO: Create an array of questions for user input
// This will be added to the function init()
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
                { name: 'Microsoft Public Licenses', value: 'Microsoft Public License' },
                { name: 'Berkeley Software Distribution (BSD)', value: 'BSD' }
            ],

        },
        {
            type: 'input',
            message: 'How can others contribute to this project?',
            name: 'contribute',
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
    ])
    // TODO: Create a function to write README file
    .then((data) => {
        fs.writeFile('./README.md', generateReadme(data), (error) => {
            error
                ? console.log(error)
                : console.log('success')
        })
    });



// TODO: Create a function to initialize app
function init() { }

// // Function call to initialize app
// init();
