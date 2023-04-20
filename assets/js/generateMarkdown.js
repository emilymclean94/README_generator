// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
  // if license.value = MIT then return [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  // else if Apache then return [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  // else if --> Add rest of licenses? <--
  // else return license as an empty string
// }

function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-blue.svg';
    case 'GNU':
      return 'https://img.shields.io/badge/license-GPL-blue.svg';
    case 'Apache':
      return 'https://img.shields.io/badge/license-Apache-blue.svg';
    case 'MPL':
      return 'https://img.shields.io/badge/license-MPL-blue.svg';
    case 'BSD':
      return 'https://img.shields.io/badge/license-BSD-blue.svg';
    default:
      return '';
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }