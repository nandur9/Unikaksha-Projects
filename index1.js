const http = require('http');
//const {Readable} = require{'stream'};

const data = require('./data1')
http.createServer((req, resp) => {

    resp.writeHead(200, {'Content-Type': 'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();

}).listen(4001);