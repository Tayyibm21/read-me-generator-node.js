const inquirer = require("inquirer");
const fs = require("fs");

// declare questions
const questions = [
    {
        
  type: 'input',
  name: 'Project title',
  message: 'what is the title of your project?',
   
      },
      {
          type: 'input',
          name: 'Description',
          message: 'what is the description?',

      },
      {

        type: 'input',
        name: 'installation',
        message: 'Do you have an installation script?',

      },
      {

        type: 'input',
        name: 'installation script',
        message: 'what is the installation script?',

      },
      {
        
        type: 'input',
        name: 'application ',
        message: 'Do you have an application?',
      },
      {

        type: 'input',
        name: 'use application ',
        message: 'How do i use the application?',

      },
      
];

 // prompt the questions using inquirer
 const start = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);

  // generate readme based on answers
  const readme = generateReadme();

  // write generated readme to a file
  writeToFile('GENERATED_README.md', readme);
};

const generateTitle = (answers) => {
  return `# TITLE ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
};

const generateTableOfContents = (answers) => {
  return `## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)`;
};

const generateDescription = (answers) => {
  return `## Description

  <a id="description"></a>
  
  Project description;

  ${answers.description}`;
};

const generateInstallation = (answers) => {
  return `## Installation

  <a id="installation"></a>
  
  Run the following script to install the packages required to use this application:
  
  \`\`\`
  ${answers.installation}
  \`\`\``;
};

const generateUsage = (answers) => {
  return `## Usage

  <a id="usage"></a>
  
  To use the application run the following script:
  
  \`\`\`
  ${answers.usage}
  \`\`\``;
};

const generateTests = (answers) => {
  return `## Tests

  <a id="test"></a>
  
  To use the application run the following script:
  
  \`\`\`
  ${answers.test}
  \`\`\``;
};

const generateContributing = (answers) => {
  return `## Contributing



  <a id="contributing"></a>
  
  ${answers.contribution}`;
};

const generateLicense = (answers) => {
  return `## License

  <a id="license"></a>
  
  ${answers.license}`;
};

const generateReadme = (answers) => {
  return `${generateTitle(answers)}

  ${generateTableOfContents(answers)}
  
  ${generateDescription(answers)}
  
  ${generateInstallation(answers)}
  
  ${generateUsage(answers)}
  
  ${generateTests(answers)}
  
  ${generateContributing(answers)}
  
  ${generateLicense(answers)}
  `;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

start();



