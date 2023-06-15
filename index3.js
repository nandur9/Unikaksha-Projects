const fs= require('fs');

const path = require('path');
const dirPath = path.join(__dirname,'files');

for (let i=0; i<5; i++) {
    fs.writeFileSync(dirPath+"/hello"+i+".txt", 'This is a forloop file builder');
}