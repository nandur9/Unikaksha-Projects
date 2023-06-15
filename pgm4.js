const http = require('http');

// http.createServer((req, resp)=>{
//     resp.write("Hello this is Narendra Reddy This is my small server ,,,,,,,,,,,,")
//     resp.end();

// }).listen(4000);


// http.createServer((req, resp)=>{
//     resp.write("<h1> Hello Veralakshmi How are you This is a small server with </h1>")
//     resp.end();
// }).listen(4000);


function test1(req, resp){
    resp.write("<h1> hello Nandu Calling You </h1");
    resp.end();pkg
}
http.createServer(test1).listen(4001);