var http = require("http");
var app = express();

app.set('port', process.env.PORT || 80);

global.pathRootApp = path.resolve(__dirname);

app.use(express.static(path.join(__dirname)));

/* subindo servidor */
var server = http.createServer(app).listen(app.get('port'), function () {
    console.log("Conectado na porta %s...", server.address().port);
});