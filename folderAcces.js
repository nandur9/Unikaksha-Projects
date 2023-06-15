const express= require('express');
const path= require('path');

const app = express();
const publicPath= path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(4008, () => {
    console.log('Server is running on port 4008');
  });
  
