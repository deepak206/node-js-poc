/*server.js*/
//npm install express
var express = require('express');
const http = require('http');
const person = require('./require');
const callback = require('./callback');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(person.name);
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});