const express = require('express');
const EventEmitter = require('events');
const app = express();

app.get("/",(req, resp)=>{
    resp.send("Api Called");
})
app.listen(5008);