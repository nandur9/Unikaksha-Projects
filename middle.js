// const express = require ('express');
// const app = express();

// //
// const reqFilter = (req,resp,next)=>{
//     if(!req.querry.age){
//         resp.send('Please provide your Age')
//     }else if(req.querry.age<18){
//         'You are underage'
//     }else{
//         next();
//     }
// }

// app.get('/', (req, res) => {
//     res.send(`<h1>Welcome to Home</h1>
     
//     `);
// });

// app.get('/users', (req, res) => {
//     res.send(`<h1>Welcome to users</h1>
//     `)
// });



// app.listen(4009);




const express = require('express');
const app = express();

// Request filter middleware
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send('Please provide your Age');
  } else if (req.query.age < 18) {
    res.send('You are underage!!!!!');
  } else {
    next();
  }
};
app.use(reqFilter);

app.get('/', (req, res) => {
  res.send(`<h1>Welcome to Home</h1>`);
});

app.get('/users',reqFilter, (req, res) => {
  res.send(`<h1>Welcome to users</h1>`);
});

app.get('/about', (req, res) => {
    res.send(`<h1>Welcome to about</h1>`);
  });
  

app.listen(4009, () => {
  console.log('Server is running on port 4009');
});
