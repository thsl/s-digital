var express = require('express');
var app = express();

app.set('port', 8000);

app.use(express.static(__dirname));

var server = app.listen(app.get('port'), function(){
	var port = server.address().port;

	console.log("Hotsite iniciado na porta: " + port);
});