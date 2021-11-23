// declare questions
const questions = [
    {
        title: "what is the title of your project?",
   
      },
      {
        title: "what is the description?",
     
      },
      {
        title: "Do you have an installation script?",
     
      },
      {
        title: "what is the installation script?",
 
      },
      {
        title: "Do you have an application?",
   
      },
      {
        title: "How do i use the application?",
 
      },
      
];

const generateTitle = (answers) => {
  return '#TITLE ![MIT] (https://img.shields.io/static/v1?label=MIT&message=License&color=blue)';

};

const generateTableOfContents = (answers) => {
  return  ` ## Table of Contents
    
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)`
};



const generateDescription = (answers) => {
  return  `## Description
    
ADD TEXT HERE`
};



const generateInstallation = (answers) => {
  return `## Installation
    
  Run the following script to install the packages required for the application:
  
  \`\`\`
  ADD TEXT HERE
  \`\`\``
};

const generateUsage = (answers) => {
  return` ## Usage
    
  To use the application run the following script:
  
  \`\`\`
  ADD TEXT HERE
  \`\`\``
};

const GenerateTests = (answers) => {
  return`## Tests
    
  To use the application run the following script:
  
  \`\`\`
  ADD TEXT HERE
  \`\`\``
};

const GenerateContributing = (answers) => {
  return `## Contributing
    
  ADD TEXT HERE`
};

const generateLicense = (answers) => {
  return ` ## License
    
  ADD TEXT HERE`
};

const generateReadme = (answers) => {
    return ${generateTitle(answers)}

    ${generateTableOfContents(answer)}
 
    ${generateDescription(answers)}
    
    ${generateInstallation(answers)}
    
   ${generateUsage(answers)}
    
    ${GenerateTests(answers)}
    
   ${GenerateContributing(answers)}
    
   ${(answers)}
    ;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const init = async () => {

const readme = generateReadme();

console.log(readme);
};

init();