var express = require('express');
var app = express();
	app.use(express.logger());
	fs = require('fs');

app.get('/', function(request, response) {
  //response.send('Hello World!');
  fs.readFile('./static/index.html', function(err, data) {
		if (err) {
			response.writeHead(500, err.message);
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end(data);
		}	
	});
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
