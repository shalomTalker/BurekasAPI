var http = require('http');
var fs = require('fs');
const url = require('url');
var os = require('os');
var cl = console.log.bind(console);


http.createServer(function(req, res) {
    const qs = url.parse(req.url);
    cl('req.url: ', qs);
    parsedQs = qs.pathname.split('/');
}).listen(3000, 'localhost');

function write(int) {
    const DB = 'burekasDB.json';
    fs.readFile(DB, function read(err) {
        if (err) {
            fs.writeFile(DB, [], function read(err) {
                if (err) {
                    throw err;
                }
                cl('json not found so json file created and initialized with empty array');
            });
        } else {
            fs.writeFile(DB, logentry(str), function read(err) {
                if (err) {
                    throw err;
                }
                cl('json not found so json file created and initialized with empty array');
            });
        }
    });
}

function logentry(str) {
    return str;
}