var http = require('http');
var PORT = process.env.NODE_PORT;
var ENV = process.env.NODE_ENV;

http.createServer(function(req, res) {
	console.log('Process ID: %d - Request received', process.pid);
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Welcome to %s\n', ENV);
}).listen(PORT);

console.log('Process ID: %d - listening on port %d', process.pid, PORT);