var http = require('http');
var qs = require('querystring');

// connect to the DB

var serverPort = 8124;
http.createServer(function (request, response) {
  if(request.method === "GET") {
    if (request.url === "/favicon.ico") {
    
    } else {
    
    }
  } else if(request.method === "POST") {
    
  } else {
   
  }
}).listen(serverPort);
console.log('Server running at localhost:'+serverPort);