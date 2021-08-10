const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];
//alternatively u could user assignment deconstructing:
const [name, github] = profileDataArgs;
//console.log(profileDataArgs);
// const printProfileData = profileDataArr => {
//     //This...
//     for(let i = 0; i < profileDataArr.length; i ++){
//         console.log(profileDataArr[i]);
//     }
//     console.log("----------------------");
//     //is the same as this....
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);



fs.writeFile('./index.html', generatePage(name, github), err =>{
     if(err) throw new Error(err);
     console.log('portfolio complete! Check out index.html');
 });


