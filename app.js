var http = require('http');
var PORT = process.env.NODE_PORT || 3000;
var ENV = process.env.NODE_ENV;

http.createServer(function(req, res) {
	console.log('Process ID: ' + process.pid + ' - Request received');
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Welcome to ' + ENV);
}).listen(PORT);

console.log('Process ID: ' + process.pid + ' - listening on port ' + PORT);
