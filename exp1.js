const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send(`<h1>This is Home</h1>
      <a href="/about">About</a>
      <a href="/contact">contact</a>
      <a href="/service">service</a> 
    `);
});

app.get('/about', (req, res) => {
    res.send(`
    <a href="/">Home</a>
    <a href="/contact">contact</a>
    <a href="/service">service</a>
        <input type='text' Placeholder='Username'value="${req.query.name}">
        <button type='Submit'></button>
    `)
});
app.get('/contact',(req, res)=>{
    res.send([{
       name:'Narendrareddy',
       email:'Nandur9@gmail.com',
       contact:7829212222
    },{
        name:'Swetha',
        email:'Swethasunilla.216@gmail.com',
        contact:7259212222
    }])
})

app.get('/service', (req, res) => {
    res.send(`
    <a href="/">Home</a>
    <a href="/contact">contact</a>
    <a href="/service">service</a>
    '<h1>Hello, This is The service Page</h1>'`);
});

app.listen(4009, () => {
    console.log('Server is running on port 4009');
});
