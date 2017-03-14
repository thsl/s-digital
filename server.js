var express = require('express');
var app = express();

<<<<<<< HEAD
app.set('port', 80);
=======
app.set('port', 8000);
>>>>>>> 49c5132856fb9c6e0a0e8e77d4a2ee07ce88cfa5

app.use(express.static(__dirname));

var server = app.listen(app.get('port'), function(){
	var port = server.address().port;
<<<<<<< HEAD
	console.log("subindo hotsite na porta: " + port);
=======

	console.log("Hotsite iniciado na porta: " + port);
>>>>>>> 49c5132856fb9c6e0a0e8e77d4a2ee07ce88cfa5
});