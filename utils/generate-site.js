const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err =>{       
        //if error, reject primise and go to catch()
        if(err){
            reject(err);
            return;
        }
        //if promise, send to .then()
        resolve({
            ok: true,
            message: 'File Created!'
        });
    });
});
};

const copyFile =()=>{
    return new Promise((resolve, reject) =>{
        if(err){
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File Copied!'
        });
    });
};

module.exports = {writeFile, copyFile};