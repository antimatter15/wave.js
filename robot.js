var http = require('http');

http.createServer(function(req, res){
  if(req.url == '/_wave/capabilities.xml'){
  }
}).listen(80, '127.0.0.1');
