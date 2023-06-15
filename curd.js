const fs= require('fs');

const path = require('path');
const dirPath = path.join(__dirname,'CURD');

const filePath= `${dirPath}/testcurd.txt`;



// fs.writeFileSync(filePath,'This is the test content');

// fs.readFileSync(filePath,'utf8',(err,item)=>{
//     console.log(item);
// });



// fs.appendFile(filePath,'This is new content',(err)=>{
//     if(!err){
//         console.log('File is updated');
//     }

// })




// fs.rename(filePath,`${dirPath}/new.txt`, (err)=>{
//     if(!err){

//     }console.log('File is renamed');
// });



fs.unlinkSync(`${dirPath}/new.txt`);