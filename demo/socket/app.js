var fs = require('fs')
var url = require('url');
var http = require('http');

function handle(req, res) {
	var pathname = url.parse(req.url).pathname;
	if(pathname.indexOf('.js') != -1){
		res.writeHead(200, { 'Content-type': 'application/x-javascript'});
    	res.end(fs.readFileSync(__dirname + pathname));
    	return;
	}
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html'));
}

var server = http.createServer(handle).listen(process.env.PORT || 8080, function() {
    console.log('Listening at: http://localhost:8080');
});


var io = require('socket.io')(server);
  
io.on('connection', function(socket){
  socket.on('chat message', function(data){
    io.emit('chat message', data);
  });
});