// module.exports = reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//       resp.send("Please provide your Age");
//     } else if (req.query.age < 18) {
//       resp.send("You are underage");
//     } else {
//       next();
//     }
//   };
  

//Making a middle ware function to check the age of the user visiting the web 
module.exports = reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send('Please provide your Age ');
    }else if(req.query.age<18){
        resp.send('You are underage!');
    }else{
        next();
    };
};

//midle1.js
const express= require ('express');

const reqFilter=require('./middleware')  //importing middleware

const app = express();
const route= express.Router();

// app.use(reqFilter);           //filter to every page
route.use(reqFilter);

app.get('/', (req, res)=>{
    res.send(`<h1>Welcome tO Home</h1>
    `)
   })
route.get('/users', (req, res)=>{ 
    res.send(`<h1>Welcome to users</h1>
    `)
   })


route.get('/about', (req, res)=>{
    res.send(`<h1>Welcome to about</h1>
    `)
   })
app.get('/contact', (req, res)=>{
    res.send(`<h1>Welcome to contact</h1>
    `)
   })

app.use('/',route);
app.listen(4003);