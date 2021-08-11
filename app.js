const inquirer = require('inquirer');
const promptUser = () =>{
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
          type: 'input',
          name: 'github',
          message: 'Enter your github username'
      },
      {
          type: 'input',
          name: 'about',
          message: 'Provide some info about yourself'
      }
    ]);
};

const promptProject = portfolioData => {
    if(!portfolioData.projects){
        portfolioData.projects =[];
    }
    console.log(`
    ==============
    Add a new project 
    ==============
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the project name?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a project description (required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build you rproject with? (check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter Github link to the project'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject){
            return promptProject(portfolioData);
        }
        else{
            return portfolioData;
        }
    });
};

promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});



