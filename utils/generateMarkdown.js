const licenseArr = ["MIT,", "APACHE", "GPL", "BSD", "MOZILLA", "WTFPL", "ISC"]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseArr[0]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr[1]){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license===licenseArr[2]){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license===licenseArr[3]){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license===licenseArr[4]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }else if (license===licenseArr[5]){
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  }else if (license===licenseArr[6]){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[2]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[3]}](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[4]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[5]}](http://www.wtfpl.net/about/)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[6]}](https://opensource.org/licenses/ISC)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else if (license===licenseArr[3]){
    return `Read more about ${licenseArr[3]} here:`
  } else if (license===licenseArr[4]){
    return `Read more about ${licenseArr[4]} here:`
  } else if (license===licenseArr[5]){
    return `Read more about ${licenseArr[5]} here:`
  } else if (license===licenseArr[6]){
    return `Read more about ${licenseArr[6]} here:`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = generateMarkdown;
