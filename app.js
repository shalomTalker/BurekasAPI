var http = require('http');
var fs = require('fs');
const url = require('url');
var os = require('os');
var helpers = require('./helperFunctions');
var cl = console.log.bind(console);


http.createServer(function(req, res) {
    const qs = url.parse(req.url);
    cl('req.url: ', qs, 'helpers: ', helpers.write);
    res.end('end');
}).listen(3000, 'localhost');