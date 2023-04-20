// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'BSD':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    default:
      return '';
  }
};


// Function that returns the license link
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'GNU':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'BSD':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
};

//Function to generate the markdown
const generateMarkdown = ({ title, description, usage, license, contribute, tests, github, email }) => {
  return `# ${title}
${renderLicenseBadge(license)}

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
To learn more about the license used in this project [click here](${renderLicenseLink(license)}).

## How to Contribute
${contribute}

## Tests
${tests}

## Questions
[Click here](https://github.com/${github}) to view my GitHub profile.

If you have any questions please contact me at ${email}
`;
}

module.exports = generateMarkdown
