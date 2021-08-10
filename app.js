const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template');
// //const name = profileDataArgs[0];
// //const github = profileDataArgs[1];
// //alternatively u could user assignment deconstructing:
// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err =>{
//      if(err) throw err;
//      console.log('portfolio complete! Check out index.html');
// });
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

