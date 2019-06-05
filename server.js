/*server.js*/
const http = require('http');
const hostname = '127.0.0.1';
const port = 3003;
const  person = require('./require');

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(person.name);
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});