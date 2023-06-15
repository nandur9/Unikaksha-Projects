const express = require ('express');
const app = express();
app.get('',(req,res)=>{
    console.log('Data send by Browwser', req.query.name)
    res.send('Hello this is the Home Page'+ req.query.name)
})
app.get('/about', (req, res)=>{
    res.send('Hello This is the about Page')
})
app.get('/service', (req,res)=>{
    res.send('<h1>Hello This is The service Page</h1>')
})

app.listen(4009);